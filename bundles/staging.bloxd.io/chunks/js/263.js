export const id = 263;
export const ids = [263, 268];
export const modules = {
  54371: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(54310),
      Wr = Qr(41865);
    let ar = !1;

    function jr() {
      ar || (ar = !0, Wr.b.prototype._sphericalPolynomialTargetSize = 0, Wr.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Wr.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Zr.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((rr => {
              this._texture._sphericalPolynomial = rr, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(rr) {
          this._texture && (this._texture._sphericalPolynomial = rr)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  38679: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      Color3: () => Zr.e,
      d: () => Zr.f
    });
    var Zr = Qr(38684);
    (0, Zr.h)()
  },
  39262: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(39264);
    class Wr {
      static GetPlanes(rr) {
        const Sr = [];
        for (let Qr = 0; Qr < 6; Qr++) Sr.push(new Zr.d(0, 0, 0, 0));
        return Wr.GetPlanesToRef(rr, Sr), Sr
      }
      static GetNearPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[2], Sr.normal.y = Qr[7] + Qr[6], Sr.normal.z = Qr[11] + Qr[10], Sr.d = Qr[15] + Qr[14], Sr.normalize()
      }
      static GetFarPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[2], Sr.normal.y = Qr[7] - Qr[6], Sr.normal.z = Qr[11] - Qr[10], Sr.d = Qr[15] - Qr[14], Sr.normalize()
      }
      static GetLeftPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[0], Sr.normal.y = Qr[7] + Qr[4], Sr.normal.z = Qr[11] + Qr[8], Sr.d = Qr[15] + Qr[12], Sr.normalize()
      }
      static GetRightPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[0], Sr.normal.y = Qr[7] - Qr[4], Sr.normal.z = Qr[11] - Qr[8], Sr.d = Qr[15] - Qr[12], Sr.normalize()
      }
      static GetTopPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[1], Sr.normal.y = Qr[7] - Qr[5], Sr.normal.z = Qr[11] - Qr[9], Sr.d = Qr[15] - Qr[13], Sr.normalize()
      }
      static GetBottomPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[1], Sr.normal.y = Qr[7] + Qr[5], Sr.normal.z = Qr[11] + Qr[9], Sr.d = Qr[15] + Qr[13], Sr.normalize()
      }
      static GetPlanesToRef(rr, Sr) {
        Wr.GetNearPlaneToRef(rr, Sr[0]), Wr.GetFarPlaneToRef(rr, Sr[1]), Wr.GetLeftPlaneToRef(rr, Sr[2]), Wr.GetRightPlaneToRef(rr, Sr[3]), Wr.GetTopPlaneToRef(rr, Sr[4]), Wr.GetBottomPlaneToRef(rr, Sr[5])
      }
      static IsPointInFrustum(rr, Sr) {
        for (let Qr = 0; Qr < 6; Qr++)
          if (Sr[Qr].dotCoordinate(rr) < 0) return !1;
        return !0
      }
    }
  },
  39264: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(38560);
    class Wr {
      constructor(rr, Sr, Qr, Wr) {
        this.normal = new Zr.u(rr, Sr, Qr), this.d = Wr
      }
      OWr() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wr(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let rr = this.normal.getHashCode();
        return rr = 397 * rr ^ this.d, rr
      }
      normalize() {
        const rr = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Sr = 0;
        return 0 !== rr && (Sr = 1 / rr), this.normal.x *= Sr, this.normal.y *= Sr, this.normal.z *= Sr, this.d *= Sr, this
      }
      transform(rr) {
        const Sr = Wr._TmpMatrix;
        rr.invertToRef(Sr);
        const Qr = Sr.m,
          Zr = this.normal.x,
          ar = this.normal.y,
          jr = this.normal.z,
          Ir = this.d,
          fr = Zr * Qr[0] + ar * Qr[1] + jr * Qr[2] + Ir * Qr[3],
          Er = Zr * Qr[4] + ar * Qr[5] + jr * Qr[6] + Ir * Qr[7],
          pr = Zr * Qr[8] + ar * Qr[9] + jr * Qr[10] + Ir * Qr[11],
          xr = Zr * Qr[12] + ar * Qr[13] + jr * Qr[14] + Ir * Qr[15];
        return new Wr(fr, Er, pr, xr)
      }
      dotCoordinate(rr) {
        return this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z + this.d
      }
      copyFromPoints(rr, Sr, Qr) {
        const Zr = Sr.x - rr.x,
          Wr = Sr.y - rr.y,
          ar = Sr.z - rr.z,
          jr = Qr.x - rr.x,
          Ir = Qr.y - rr.y,
          fr = Qr.z - rr.z,
          Er = Wr * fr - ar * Ir,
          pr = ar * jr - Zr * fr,
          xr = Zr * Ir - Wr * jr,
          mr = Math.sqrt(Er * Er + pr * pr + xr * xr);
        let Nr;
        return Nr = 0 !== mr ? 1 / mr : 0, this.normal.x = Er * Nr, this.normal.y = pr * Nr, this.normal.z = xr * Nr, this.d = -(this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z), this
      }
      isFrontFacingTo(rr, Sr) {
        return Zr.u.Dot(this.normal, rr) <= Sr
      }
      signedDistanceTo(rr) {
        return Zr.u.Dot(rr, this.normal) + this.d
      }
      static FromArray(rr) {
        return new Wr(rr[0], rr[1], rr[2], rr[3])
      }
      static FromPoints(rr, Sr, Qr) {
        const Zr = new Wr(0, 0, 0, 0);
        return Zr.copyFromPoints(rr, Sr, Qr), Zr
      }
      static FromPositionAndNormal(rr, Sr) {
        const Qr = new Wr(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(rr, Sr, Qr)
      }
      static FromPositionAndNormalToRef(rr, Sr, Qr) {
        return Qr.normal.iH(Sr), Qr.normal.normalize(), Qr.d = -rr.dot(Qr.normal), Qr
      }
      static SignedDistanceToPlaneFromPositionAndNormal(rr, Sr, Qr) {
        const Wr = -(Sr.x * rr.x + Sr.y * rr.y + Sr.z * rr.z);
        return Zr.u.Dot(Qr, Sr) + Wr
      }
    }
    Wr._TmpMatrix = Zr.d.Identity()
  },
  38555: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      Matrix: () => Zr.d,
      Quaternion: () => Zr.h,
      RegisterMathVector: () => Zr.k,
      TmpVectors: () => Zr.n,
      Vector2: () => Zr.q,
      kU: () => Zr.u,
      Vector4: () => Zr.x
    });
    var Zr = Qr(38560);
    (0, Zr.k)()
  },
  39607: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    class Zr {
      constructor(rr, Sr, Qr, Zr) {
        this.x = rr, this.y = Sr, this.width = Qr, this.height = Zr
      }
      toGlobal(rr, Sr) {
        return new Zr(this.x * rr, this.y * Sr, this.width * rr, this.height * Sr)
      }
      toGlobalToRef(rr, Sr, Qr) {
        return Qr.x = this.x * rr, Qr.y = this.y * Sr, Qr.width = this.width * rr, Qr.height = this.height * Sr, this
      }
      clone() {
        return new Zr(this.x, this.y, this.width, this.height)
      }
    }
  },
  54310: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er
    });
    var Zr = Qr(38560),
      Wr = Qr(38599),
      ar = Qr(41861),
      jr = Qr(38569),
      Ir = Qr(38684);
    class fr {
      constructor(rr, Sr, Qr, Zr) {
        this.name = rr, this.worldAxisForNormal = Sr, this.worldAxisForFileX = Qr, this.worldAxisForFileY = Zr
      }
    }
    class Er {
      static _NearestPow2Floor(rr) {
        return rr <= 1 ? 1 : 1 << Math.floor(Math.log2(rr))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(rr) {
        if (!rr.isCube) return null;
        rr.eC()?.MU().flushFramebuffer();
        const Sr = rr.getSize().width,
          Qr = rr._sphericalPolynomialTargetSize,
          Zr = Qr > 0 ? this._NearestPow2Floor(Qr) : 0,
          Wr = !rr.noMipmap && !0 === rr._texture?.generateMipMaps,
          ar = Zr > 0 && Zr < Sr && Wr,
          jr = ar ? Math.max(0, Math.round(Math.log2(Sr / Zr))) : 0,
          Ir = ar ? Math.max(1, Math.floor(Sr / Math.pow(2, jr))) : Sr,
          fr = rr.readPixels(0, jr, void 0, !1),
          Er = rr.readPixels(1, jr, void 0, !1);
        let pr, xr;
        rr.isRenderTarget ? (pr = rr.readPixels(3, jr, void 0, !1), xr = rr.readPixels(2, jr, void 0, !1)) : (pr = rr.readPixels(2, jr, void 0, !1), xr = rr.readPixels(3, jr, void 0, !1));
        const mr = rr.readPixels(4, jr, void 0, !1),
          Nr = rr.readPixels(5, jr, void 0, !1),
          Ur = rr.gammaSpace,
          tr = Zr > 0 && Zr < Sr && !ar;
        return new Promise((rr => {
          Promise.all([Er, fr, pr, xr, mr, Nr]).then((Qr => {
            let [Wr, ar, jr, fr, Er, pr] = Qr, xr = Ir;
            if (tr) {
              const rr = 4;
              Wr = this._DownsampleFace(Wr, Sr, Zr, rr), ar = this._DownsampleFace(ar, Sr, Zr, rr), jr = this._DownsampleFace(jr, Sr, Zr, rr), fr = this._DownsampleFace(fr, Sr, Zr, rr), Er = this._DownsampleFace(Er, Sr, Zr, rr), pr = this._DownsampleFace(pr, Sr, Zr, rr), xr = Zr
            }
            const mr = {
              size: xr,
              right: ar,
              left: Wr,
              up: jr,
              down: fr,
              front: Er,
              back: pr,
              format: 5,
              type: Wr instanceof Float32Array ? 1 : 0,
              gammaSpace: Ur
            };
            rr(this.ConvertCubeMapToSphericalPolynomial(mr))
          }))
        }))
      }
      static _AreaElement(rr, Sr) {
        return Math.atan2(rr * Sr, Math.sqrt(rr * rr + Sr * Sr + 1))
      }
      static _DownsampleFace(rr, Sr, Qr, Zr) {
        const Wr = rr instanceof Float32Array ? rr : Float32Array.from(rr),
          ar = Qr * Qr * Zr,
          jr = new Float32Array(ar),
          Ir = Sr / Qr,
          fr = 1 / (Ir * Ir);
        for (let pr = 0; pr < Qr; pr++) {
          const rr = Math.floor(pr * Ir),
            ar = Math.floor((pr + 1) * Ir);
          for (let Er = 0; Er < Qr; Er++) {
            const xr = Math.floor(Er * Ir),
              mr = Math.floor((Er + 1) * Ir),
              Nr = (pr * Qr + Er) * Zr;
            for (let Qr = 0; Qr < Zr; Qr++) {
              let Ir = 0;
              for (let jr = rr; jr < ar; jr++)
                for (let rr = xr; rr < mr; rr++) Ir += Wr[(jr * Sr + rr) * Zr + Qr];
              jr[Nr + Qr] = Ir * fr
            }
          }
        }
        if (rr instanceof Float32Array) return jr;
        const Er = new(0, rr.constructor)(ar);
        for (let pr = 0; pr < ar; pr++) Er[pr] = jr[pr] + .5 | 0;
        return Er
      }
      static ConvertCubeMapToSphericalPolynomial(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Qr = Sr > 0 ? this._NearestPow2Floor(Sr) : 0;
        if (Qr > 0 && rr.size > Qr) {
          const Sr = 5 === rr.format ? 4 : 3,
            Zr = ["right", "left", "up", "down", "front", "back"],
            Wr = {};
          for (const ar of Zr) Wr[ar] = this._DownsampleFace(rr[ar], rr.size, Qr, Sr);
          rr = {
            ...rr,
            ...Wr,
            size: Qr
          }
        }
        const Zr = new ar.c;
        let fr = 0;
        const Er = 2 / rr.size,
          pr = Er,
          xr = .5 * Er,
          mr = xr - 1;
        for (let ar = 0; ar < 6; ar++) {
          const Sr = this._FileFaces[ar],
            Qr = rr[Sr.name];
          let Nr = mr;
          const Ur = 5 === rr.format ? 4 : 3;
          for (let ar = 0; ar < rr.size; ar++) {
            let tr = mr;
            for (let pr = 0; pr < rr.size; pr++) {
              const mr = Sr.worldAxisForFileX.scale(tr).add(Sr.worldAxisForFileY.scale(Nr)).add(Sr.worldAxisForNormal);
              mr.normalize();
              const hr = this._AreaElement(tr - xr, Nr - xr) - this._AreaElement(tr - xr, Nr + xr) - this._AreaElement(tr + xr, Nr - xr) + this._AreaElement(tr + xr, Nr + xr);
              let zr = Qr[ar * rr.size * Ur + pr * Ur + 0],
                Yr = Qr[ar * rr.size * Ur + pr * Ur + 1],
                nr = Qr[ar * rr.size * Ur + pr * Ur + 2];
              isNaN(zr) && (zr = 0), isNaN(Yr) && (Yr = 0), isNaN(nr) && (nr = 0), 0 === rr.type && (zr /= 255, Yr /= 255, nr /= 255), rr.gammaSpace && (zr = Math.pow((0, Wr.Clamp)(zr), jr.h), Yr = Math.pow((0, Wr.Clamp)(Yr), jr.h), nr = Math.pow((0, Wr.Clamp)(nr), jr.h));
              const er = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const rr = Math.max(zr, Yr, nr);
                if (rr > er) {
                  const Sr = er / rr;
                  zr *= Sr, Yr *= Sr, nr *= Sr
                }
              } else zr = (0, Wr.Clamp)(zr, 0, er), Yr = (0, Wr.Clamp)(Yr, 0, er), nr = (0, Wr.Clamp)(nr, 0, er);
              const Kr = new Ir.e(zr, Yr, nr);
              Zr.addLight(mr, Kr, hr), fr += hr, tr += Er
            }
            Nr += pr
          }
        }
        const Nr = 6 * (4 * Math.PI) / 6 / fr;
        return Zr.scaleInPlace(Nr), Zr.convertIncidentRadianceToIrradiance(), Zr.convertIrradianceToLambertianRadiance(), ar.d.FromHarmonics(Zr)
      }
    }
    Er._FileFaces = [new fr("right", new Zr.u(1, 0, 0), new Zr.u(0, 0, -1), new Zr.u(0, -1, 0)), new fr("left", new Zr.u(-1, 0, 0), new Zr.u(0, 0, 1), new Zr.u(0, -1, 0)), new fr("up", new Zr.u(0, 1, 0), new Zr.u(1, 0, 0), new Zr.u(0, 0, 1)), new fr("down", new Zr.u(0, -1, 0), new Zr.u(1, 0, 0), new Zr.u(0, 0, -1)), new fr("front", new Zr.u(0, 0, 1), new Zr.u(1, 0, 0), new Zr.u(0, -1, 0)), new fr("back", new Zr.u(0, 0, -1), new Zr.u(-1, 0, 0), new Zr.u(0, -1, 0))], Er.MAX_HDRI_VALUE = 4096, Er.PRESERVE_CLAMPED_COLORS = !1
  },
  54160: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr.g,
      h: () => Zr.q
    });
    var Zr = Qr(41898);
    (0, Zr.x)()
  },
  39405: (rr, Sr, Qr) => {
    function Zr() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (rr => {
        const Sr = 16 * Math.random() | 0;
        return ("x" === rr ? Sr : 3 & Sr | 8).toString(16)
      }))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  54344: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(54330),
      Wr = Qr(54348);
    class ar {
      static ExpandRGBDTexture(rr) {
        const Sr = rr._texture;
        if (!Sr || !rr.isRGBD) return;
        const Wr = Sr.MU(),
          ar = Wr.getCaps(),
          jr = Sr.isReady;
        let Ir = !1;
        ar.textureHalfFloatRender && ar.textureHalfFloatLinearFiltering ? (Ir = !0, Sr.type = 2) : ar.textureFloatRender && ar.textureFloatLinearFiltering && (Ir = !0, Sr.type = 1), Ir && (Sr.isReady = !1, Sr._isRGBD = !1, Sr.invertY = !1);
        const fr = async () => {
          const ar = Wr.isWebGPU,
            jr = ar ? 1 : 0;
          Sr.isReady = !1, ar ? await Qr.e(661).then((() => Qr(64736))) : await Qr.e(643).then((() => Qr(64742)));
          const Ir = new Zr.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Wr, !1, void 0, Sr.type, void 0, null, !1, void 0, jr);
          Ir.externalTextureSamplerBinding = !0;
          const fr = Wr.createRenderTargetTexture(Sr.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Sr.samplingMode,
            type: Sr.type,
            format: 5
          });
          Ir.onEffectCreatedObservable.addOnce((Qr => {
            Qr.executeWhenCompiled((() => {
              Ir.onApply = rr => {
                rr._bindTexture("textureSampler", Sr), rr.setFloat2("scale", 1, 1)
              }, rr.eC()?.postProcessManager.directRender([Ir], fr, !0), Wr.restoreDefaultFramebuffer(), Wr._releaseTexture(Sr), Ir && Ir.dispose(), fr._swapAndDie(Sr), Sr.isReady = !0
            }))
          }))
        };
        Ir && (jr ? fr() : rr.onLoadObservable.addOnce(fr))
      }
      static async EncodeTextureToRGBD(rr, Sr) {
        let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Sr.MU().isWebGPU ? await Qr.e(662).then((() => Qr(64756))) : await Qr.e(644).then((() => Qr(64750))), await (0, Wr.d)("rgbdEncode", rr, Sr, Zr, 1, 5)
      }
    }
  },
  64590: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      AsyncLoop: () => Zr.b,
      RegisterTools: () => Zr.d,
      Tools: () => Zr.h,
      className: () => Zr.j
    });
    var Zr = Qr(41950);
    (0, Zr.d)()
  },
  54381: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr
    });
    class Zr {
      constructor(rr) {
        this._pendingActions = new Array, this._workerInfos = rr.map((rr => ({
          workerPromise: Promise.resolve(rr),
          idle: !0
        })))
      }
      dispose() {
        for (const rr of this._workerInfos) rr.workerPromise.then((rr => {
          rr.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(rr) {
        this._executeOnIdleWorker(rr) || this._pendingActions.push(rr)
      }
      _executeOnIdleWorker(rr) {
        for (const Sr of this._workerInfos)
          if (Sr.idle) return this._execute(Sr, rr), !0;
        return !1
      }
      _execute(rr, Sr) {
        rr.idle = !1, rr.workerPromise.then((Qr => {
          Sr(Qr, (() => {
            const Sr = this._pendingActions.shift();
            Sr ? this._execute(rr, Sr) : rr.idle = !0
          }))
        }))
      }
    }
    class Wr extends Zr {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wr.DefaultOptions;
        super([]), this._maxWorkers = rr, this._createWorkerAsync = Sr, this._options = Qr
      }
      push(rr) {
        if (!this._executeOnIdleWorker(rr))
          if (this._workerInfos.length < this._maxWorkers) {
            const Sr = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Sr), this._execute(Sr, rr)
          } else this._pendingActions.push(rr)
      }
      _execute(rr, Sr) {
        rr.timeoutId && (clearTimeout(rr.timeoutId), delete rr.timeoutId), super._execute(rr, ((Qr, Zr) => {
          Sr(Qr, (() => {
            Zr(), rr.idle && (rr.timeoutId = setTimeout((() => {
              rr.workerPromise.then((rr => {
                rr.terminate()
              }));
              const Sr = this._workerInfos.indexOf(rr); - 1 !== Sr && this._workerInfos.splice(Sr, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Wr.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  64623: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      AbstractThreeMfSerializer: () => FI,
      BVHExporter: () => vj,
      ContentTypeFileName: () => NI,
      DefaultXmlSerializerFormatOptions: () => Vj,
      DefaultXmlSerializerNumberOptions: () => Aj,
      EXT_lights_area: () => hW,
      EXT_mesh_gpu_instancing: () => GZ,
      EXT_texture_avif: () => Wj,
      EXT_texture_webp: () => rj,
      GLTF2Export: () => gZ,
      GLTFData: () => Er,
      GetXmlFieldMeta: () => gj,
      GetXmlName: () => Cj,
      IsQualifiedName: () => Oj,
      KHR_draco_mesh_compression: () => dZ,
      KHR_interactivity: () => EW,
      KHR_lights_punctual: () => aW,
      KHR_materials_anisotropy: () => eW,
      KHR_materials_clearcoat: () => vW,
      KHR_materials_coat: () => HW,
      KHR_materials_diffuse_roughness: () => Ca,
      KHR_materials_diffuse_transmission: () => GW,
      KHR_materials_dispersion: () => iW,
      KHR_materials_emissive_strength: () => oW,
      KHR_materials_fuzz: () => pa,
      KHR_materials_ior: () => dW,
      KHR_materials_iridescence: () => Sa,
      KHR_materials_openpbr: () => Aa,
      KHR_materials_sheen: () => aa,
      KHR_materials_specular: () => Ua,
      KHR_materials_transmission: () => Ya,
      KHR_materials_unlit: () => Ba,
      KHR_materials_volume: () => La,
      KHR_materials_volume_scatter: () => Ha,
      KHR_texture_basisu: () => Da,
      KHR_texture_transform: () => ca,
      Known3mfRelationshipTypes: () => UI,
      KnownI3mfContentType: () => fI,
      Matrix3d: () => eI,
      MatrixFormatter: () => KI,
      ModelFileName: () => xI,
      NumberFormatter: () => cj,
      OBJExport: () => jr,
      Object3dDirName: () => pI,
      OpenXmlContentTypesNamespace: () => jI,
      OpenXmlRelationshipsNamespace: () => II,
      RegisterEXT_lights_area: () => YW,
      RegisterEXT_mesh_gpu_instancing: () => AZ,
      RegisterEXT_texture_avif: () => jj,
      RegisterEXT_texture_webp: () => Qj,
      RegisterKHR_draco_mesh_compression: () => uZ,
      RegisterKHR_interactivity: () => xW,
      RegisterKHR_lights_punctual: () => IW,
      RegisterKHR_materials_anisotropy: () => yW,
      RegisterKHR_materials_clearcoat: () => LW,
      RegisterKHR_materials_coat: () => RW,
      RegisterKHR_materials_diffuse_roughness: () => Ga,
      RegisterKHR_materials_diffuse_transmission: () => AW,
      RegisterKHR_materials_dispersion: () => cW,
      RegisterKHR_materials_emissive_strength: () => JW,
      RegisterKHR_materials_fuzz: () => ma,
      RegisterKHR_materials_ior: () => uW,
      RegisterKHR_materials_iridescence: () => Za,
      RegisterKHR_materials_openpbr: () => ia,
      RegisterKHR_materials_sheen: () => Ia,
      RegisterKHR_materials_specular: () => ha,
      RegisterKHR_materials_transmission: () => ea,
      RegisterKHR_materials_unlit: () => va,
      RegisterKHR_materials_volume: () => Xa,
      RegisterKHR_materials_volume_scatter: () => Ra,
      RegisterKHR_texture_basisu: () => sa,
      RegisterKHR_texture_transform: () => oa,
      RelationshipDirName: () => EI,
      RelationshipFileName: () => mI,
      ResolveFormatOptions: () => wj,
      ResolveNumberOptions: () => ij,
      STLExport: () => Ij,
      ST_ObjectType: () => aI,
      ST_Unit: () => WI,
      StringXmlWriter: () => rI,
      ThreeDimModelNamespace: () => QI,
      ThreeMf: () => oI,
      ThreeMfBase: () => CI,
      ThreeMfBaseMaterials: () => gI,
      ThreeMfBuild: () => MI,
      ThreeMfComponent: () => RI,
      ThreeMfComponents: () => qI,
      ThreeMfComponentsBuilder: () => AI,
      ThreeMfContentType: () => hI,
      ThreeMfContentTypes: () => tI,
      ThreeMfDocument: () => nI,
      ThreeMfDocumentBuilder: () => cI,
      ThreeMfItem: () => GI,
      ThreeMfMaterialBuilder: () => iI,
      ThreeMfMesh: () => LI,
      ThreeMfMeshBuilder: () => VI,
      ThreeMfMeta: () => BI,
      ThreeMfMetadataGroup: () => TI,
      ThreeMfModel: () => yI,
      ThreeMfModelBuilder: () => wI,
      ThreeMfObject: () => OI,
      ThreeMfObjectBuilder: () => kI,
      ThreeMfRelationship: () => YI,
      ThreeMfRelationships: () => zI,
      ThreeMfResources: () => vI,
      ThreeMfSerializer: () => DI,
      ThreeMfSerializerGlobalConfiguration: () => bI,
      ThreeMfTriangle: () => HI,
      ThreeMfTriangles: () => PI,
      ThreeMfVertex: () => XI,
      ThreeMfVertices: () => lI,
      ToQualifiedString: () => kj,
      TokenType: () => sj,
      TriangleSetsNamespace: () => ZI,
      USDZExportAsync: () => Bj,
      Utf8XmlWriterToBytes: () => SI,
      XmlAttr: () => qj,
      XmlBuilder: () => uj,
      XmlElem: () => Rj,
      XmlIgnore: () => Hj,
      XmlName: () => Pj,
      XmlNameToParts: () => Gj,
      XmlSerializer: () => Dj,
      _ConvertToGLTFPBRMetallicRoughness: () => vQ,
      _SolveMetallic: () => TQ,
      __IGLTFExporterExtension: () => Ir
    });
    var Zr = Qr(38555),
      Wr = Qr(64590),
      ar = Qr(42130);
    class jr {
      static OBJ(rr, Sr, Qr, jr) {
        const Ir = [];
        let fr = 1,
          Er = 1;
        Sr && (Qr || (Qr = "mat"), Ir.push("mtllib " + Qr + ".mtl"));
        for (let pr = 0; pr < rr.length; pr++) {
          const Qr = rr[pr],
            xr = Qr.name || `mesh${pr}}`;
          Ir.push(`o ${xr}`);
          let mr = null;
          if (jr) {
            const rr = Qr.computeWorldMatrix(!0);
            mr = new Zr.Matrix, rr.invertToRef(mr), Qr.bakeTransformIntoVertices(rr)
          }
          if (Sr) {
            const rr = Qr.material;
            rr && Ir.push("usemtl " + rr.id)
          }
          const Nr = Qr.geometry;
          if (!Nr) {
            Wr.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const Ur = Nr.getVerticesData("position"),
            tr = Nr.getVerticesData("normal"),
            hr = Nr.getVerticesData("uv"),
            zr = Nr.yar();
          let Yr = 0,
            nr = 0;
          if (!Ur || !zr) {
            Wr.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const er = rr[0].eC().useRightHandedSystem ? 1 : -1;
          for (let rr = 0; rr < Ur.length; rr += 3) Ir.push("v " + Ur[rr] * er + " " + Ur[rr + 1] + " " + Ur[rr + 2]), Yr++;
          if (null != tr)
            for (let rr = 0; rr < tr.length; rr += 3) Ir.push("vn " + tr[rr] * er + " " + tr[rr + 1] + " " + tr[rr + 2]);
          if (null != hr)
            for (let rr = 0; rr < hr.length; rr += 2) Ir.push("vt " + hr[rr] + " " + hr[rr + 1]), nr++;
          const Kr = ["", "", ""],
            yr = (Qr.material || Qr.eC().defaultMaterial)._getEffectiveOrientation(Qr),
            [Br, Tr] = yr === ar.d.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let rr = 0; rr < zr.length; rr += 3) {
            const Sr = [String(zr[rr] + fr), String(zr[rr + Br] + fr), String(zr[rr + Tr] + fr)],
              Qr = [String(zr[rr] + Er), String(zr[rr + Br] + Er), String(zr[rr + Tr] + Er)],
              Zr = Sr,
              Wr = null != hr ? Qr : Kr,
              ar = null != tr ? Sr : Kr;
            Ir.push("f " + Zr[0] + "/" + Wr[0] + "/" + ar[0] + " " + Zr[1] + "/" + Wr[1] + "/" + ar[1] + " " + Zr[2] + "/" + Wr[2] + "/" + ar[2])
          }
          jr && mr && Qr.bakeTransformIntoVertices(mr), fr += Yr, Er += nr
        }
        return Ir.join("\n")
      }
      static MTL(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const Qr = [],
          Zr = rr.material;
        Qr.push("newmtl " + Sr), Qr.push("  Ns " + Zr.specularPower.toFixed(4)), Qr.push("  Ni 1.5000"), Qr.push("  d " + Zr.alpha.toFixed(4)), Qr.push("  Tr 0.0000"), Qr.push("  Tf 1.0000 1.0000 1.0000"), Qr.push("  illum 2"), Qr.push("  Ka " + Zr.ambientColor.r.toFixed(4) + " " + Zr.ambientColor.g.toFixed(4) + " " + Zr.ambientColor.b.toFixed(4)), Qr.push("  Kd " + Zr.diffuseColor.r.toFixed(4) + " " + Zr.diffuseColor.g.toFixed(4) + " " + Zr.diffuseColor.b.toFixed(4)), Qr.push("  Ks " + Zr.specularColor.r.toFixed(4) + " " + Zr.specularColor.g.toFixed(4) + " " + Zr.specularColor.b.toFixed(4)), Qr.push("  Ke " + Zr.emissiveColor.r.toFixed(4) + " " + Zr.emissiveColor.g.toFixed(4) + " " + Zr.emissiveColor.b.toFixed(4));
        Zr.ambientTexture && Qr.push("  map_Ka " + Zr.ambientTexture.name), Zr.diffuseTexture && Qr.push("  map_Kd " + Zr.diffuseTexture.name), Zr.specularTexture && Qr.push("  map_Ks " + Zr.specularTexture.name), Zr.bumpTexture && Qr.push("  map_bump -imfchan z " + Zr.bumpTexture.name), Zr.opacityTexture && Qr.push("  map_d " + Zr.opacityTexture.name);
        return Qr.join("\n")
      }
    }
    var Ir = 0,
      fr = Qr(54160);
    class Er {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const rr in this.files) {
          const Sr = this.files[rr],
            Qr = new Blob([Sr], {
              type: (0, fr.e)(rr)
            });
          Wr.Tools.Download(Qr, rr)
        }
      }
    }
    var pr = Qr(43031),
      xr = Qr(42966),
      mr = Qr(54151),
      Nr = Qr(42980),
      Ur = Qr(41725),
      tr = Qr(38587),
      hr = Qr(38679),
      zr = Qr(38599);
    const Yr = zr.HighestCommonFactor,
      nr = {
        ...zr,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: Yr
      };
    var er = Qr(54348),
      Kr = Qr(43008),
      yr = Qr(54122),
      Br = Qr(54125),
      Tr = Qr(54362);
    (0, Tr.RegisterDumpTools)();
    var vr = Qr(41872),
      Or = Qr(41875),
      Lr = Qr(40246),
      lr = Qr(41960),
      Xr = Qr(42310),
      Pr = Qr(54344);
    let Hr = 0;
    const qr = (rr, Sr, Qr, Zr) => {
        if (!rr[Qr]) {
          const Wr = rr.useDelayedTextureLoading;
          rr.useDelayedTextureLoading = !1;
          const ar = rr._blockEntityCollection;
          rr._blockEntityCollection = !1;
          const jr = Xr.f.CreateFromBase64String(Sr, Zr + Hr++, rr, !0, !1, Xr.f.BILINEAR_SAMPLINGMODE);
          rr._blockEntityCollection = ar;
          const Ir = rr.MU().getLoadedTexturesCache(),
            fr = Ir.indexOf(jr.getInternalTexture()); - 1 !== fr && Ir.splice(fr, 1), jr.isRGBD = !0, jr.wrapU = Xr.f.CLAMP_ADDRESSMODE, jr.wrapV = Xr.f.CLAMP_ADDRESSMODE, rr[Qr] = jr, rr.useDelayedTextureLoading = Wr, Pr.b.ExpandRGBDTexture(jr);
          const Er = rr.MU().CU.add((() => {
            jr.isRGBD = !0;
            const Sr = rr.onBeforeRenderObservable.add((() => {
              jr.isReady() && (rr.onBeforeRenderObservable.remove(Sr), Pr.b.ExpandRGBDTexture(jr))
            }))
          }));
          rr.lC.add((() => {
            rr.MU().CU.remove(Er)
          }))
        }
        return rr[Qr]
      },
      Rr = rr => qr(rr, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      gr = rr => qr(rr, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Cr = rr => qr(rr, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var Mr = Qr(41941),
      Gr = Qr(38560),
      kr = Qr(41995),
      Ar = Qr(42121),
      Vr = Qr(42202);
    class ir extends Ar.b {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let wr = (() => {
      var rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er;
      let pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr = Vr.c,
        er = [],
        Kr = [],
        yr = [],
        Br = [],
        Tr = [],
        Lr = [],
        lr = [],
        Xr = [],
        Pr = [],
        Hr = [],
        qr = [],
        Rr = [],
        gr = [],
        Cr = [],
        Mr = [],
        Gr = [],
        kr = [],
        Ar = [];
      return rr = class extends nr {
        get useEnergyConservation() {
          return (0, vr.e)(this, Sr, "f")
        }
        set useEnergyConservation(rr) {
          (0, vr.i)(this, Sr, rr, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, vr.e)(this, Qr, "f")
        }
        set useSmithVisibilityHeightCorrelated(rr) {
          (0, vr.i)(this, Qr, rr, "f")
        }
        get useSphericalHarmonics() {
          return (0, vr.e)(this, Zr, "f")
        }
        set useSphericalHarmonics(rr) {
          (0, vr.i)(this, Zr, rr, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, vr.e)(this, Wr, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(rr) {
          (0, vr.i)(this, Wr, rr, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, vr.e)(this, ar, "f")
        }
        set mixIblRadianceWithIrradiance(rr) {
          (0, vr.i)(this, ar, rr, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, vr.e)(this, jr, "f")
        }
        set useLegacySpecularEnergyConservation(rr) {
          (0, vr.i)(this, jr, rr, "f")
        }
        get baseDiffuseModel() {
          return (0, vr.e)(this, Ir, "f")
        }
        set baseDiffuseModel(rr) {
          (0, vr.i)(this, Ir, rr, "f")
        }
        get dielectricSpecularModel() {
          return (0, vr.e)(this, fr, "f")
        }
        set dielectricSpecularModel(rr) {
          (0, vr.i)(this, fr, rr, "f")
        }
        get conductorSpecularModel() {
          return (0, vr.e)(this, Er, "f")
        }
        set conductorSpecularModel(rr) {
          (0, vr.i)(this, Er, rr, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(pr) {
          let xr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(pr, "PBRBRDF", 90, new ir, xr), this._useEnergyConservation = rr.DEFAULT_USE_ENERGY_CONSERVATION, Sr.set(this, (0, vr.m)(this, er, rr.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, vr.m)(this, Kr), rr.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), Qr.set(this, (0, vr.m)(this, yr, rr.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, vr.m)(this, Br), rr.DEFAULT_USE_SPHERICAL_HARMONICS), Zr.set(this, (0, vr.m)(this, Tr, rr.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, vr.m)(this, Lr), rr.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Wr.set(this, (0, vr.m)(this, lr, rr.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, vr.m)(this, Xr), rr.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), ar.set(this, (0, vr.m)(this, Pr, rr.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, vr.m)(this, Hr), rr.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), jr.set(this, (0, vr.m)(this, qr, rr.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, vr.m)(this, Rr), rr.DEFAULT_DIFFUSE_MODEL), Ir.set(this, (0, vr.m)(this, gr, rr.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, vr.m)(this, Cr), rr.DEFAULT_DIELECTRIC_SPECULAR_MODEL), fr.set(this, (0, vr.m)(this, Mr, rr.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, vr.m)(this, Gr), rr.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Er.set(this, (0, vr.m)(this, kr, rr.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, vr.m)(this, Ar), this._internalMarkAllSubMeshesAsMiscDirty = pr._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(rr) {
          rr.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, rr.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, rr.SPHERICAL_HARMONICS = this._useSphericalHarmonics, rr.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, rr.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, rr.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, rr.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, rr.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, rr.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, Sr = new WeakMap, Qr = new WeakMap, Zr = new WeakMap, Wr = new WeakMap, ar = new WeakMap, jr = new WeakMap, Ir = new WeakMap, fr = new WeakMap, Er = new WeakMap, (() => {
        const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(nr[Symbol.metadata] ?? null) : void 0;
        pr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], xr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], mr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], Nr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], Ur = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], tr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], hr = [(0, Or.G)("baseDiffuseModel"), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], zr = [(0, Or.G)("dielectricSpecularModel"), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], Yr = [(0, Or.G)("conductorSpecularModel"), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], (0, vr.k)(rr, null, pr, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: rr => "useEnergyConservation" in rr,
            get: rr => rr.useEnergyConservation,
            set: (rr, Sr) => {
              rr.useEnergyConservation = Sr
            }
          },
          metadata: Sr
        }, er, Kr), (0, vr.k)(rr, null, xr, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: rr => "useSmithVisibilityHeightCorrelated" in rr,
            get: rr => rr.useSmithVisibilityHeightCorrelated,
            set: (rr, Sr) => {
              rr.useSmithVisibilityHeightCorrelated = Sr
            }
          },
          metadata: Sr
        }, yr, Br), (0, vr.k)(rr, null, mr, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: rr => "useSphericalHarmonics" in rr,
            get: rr => rr.useSphericalHarmonics,
            set: (rr, Sr) => {
              rr.useSphericalHarmonics = Sr
            }
          },
          metadata: Sr
        }, Tr, Lr), (0, vr.k)(rr, null, Nr, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: rr => "useSpecularGlossinessInputEnergyConservation" in rr,
            get: rr => rr.useSpecularGlossinessInputEnergyConservation,
            set: (rr, Sr) => {
              rr.useSpecularGlossinessInputEnergyConservation = Sr
            }
          },
          metadata: Sr
        }, lr, Xr), (0, vr.k)(rr, null, Ur, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: rr => "mixIblRadianceWithIrradiance" in rr,
            get: rr => rr.mixIblRadianceWithIrradiance,
            set: (rr, Sr) => {
              rr.mixIblRadianceWithIrradiance = Sr
            }
          },
          metadata: Sr
        }, Pr, Hr), (0, vr.k)(rr, null, tr, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: rr => "useLegacySpecularEnergyConservation" in rr,
            get: rr => rr.useLegacySpecularEnergyConservation,
            set: (rr, Sr) => {
              rr.useLegacySpecularEnergyConservation = Sr
            }
          },
          metadata: Sr
        }, qr, Rr), (0, vr.k)(rr, null, hr, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: rr => "baseDiffuseModel" in rr,
            get: rr => rr.baseDiffuseModel,
            set: (rr, Sr) => {
              rr.baseDiffuseModel = Sr
            }
          },
          metadata: Sr
        }, gr, Cr), (0, vr.k)(rr, null, zr, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: rr => "dielectricSpecularModel" in rr,
            get: rr => rr.dielectricSpecularModel,
            set: (rr, Sr) => {
              rr.dielectricSpecularModel = Sr
            }
          },
          metadata: Sr
        }, Mr, Gr), (0, vr.k)(rr, null, Yr, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: rr => "conductorSpecularModel" in rr,
            get: rr => rr.conductorSpecularModel,
            set: (rr, Sr) => {
              rr.conductorSpecularModel = Sr
            }
          },
          metadata: Sr
        }, kr, Ar), Sr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sr
        })
      })(), rr.DEFAULT_USE_ENERGY_CONSERVATION = !0, rr.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, rr.DEFAULT_USE_SPHERICAL_HARMONICS = !0, rr.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, rr.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, rr.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, rr.DEFAULT_DIFFUSE_MODEL = 0, rr.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, rr.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, rr
    })();
    var cr = Qr(42111),
      Fr = Qr(38684),
      or = Qr(42119),
      br = Qr(41965),
      Jr = Qr(42184),
      Dr = Qr(42178),
      dr = Qr(42192),
      sr = Qr(42167);
    class ur extends Ar.b {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let rS = (() => {
      var rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er;
      let pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr = Vr.c,
        Lr = [],
        lr = [],
        Xr = [],
        Pr = [],
        Hr = [],
        qr = [],
        Rr = [],
        gr = [],
        Cr = [],
        Mr = [],
        Gr = [],
        kr = [],
        Ar = [],
        ir = [],
        wr = [],
        cr = [],
        or = [],
        br = [],
        Jr = [],
        dr = [],
        rS = [],
        SS = [],
        QS = [],
        ZS = [],
        WS = [],
        aS = [],
        jS = [],
        IS = [];
      return rr = class extends Tr {
        get isEnabled() {
          return (0, vr.e)(this, Sr, "f")
        }
        set isEnabled(rr) {
          (0, vr.i)(this, Sr, rr, "f")
        }
        get indexOfRefraction() {
          return (0, vr.e)(this, Qr, "f")
        }
        set indexOfRefraction(rr) {
          (0, vr.i)(this, Qr, rr, "f")
        }
        get texture() {
          return (0, vr.e)(this, Zr, "f")
        }
        set texture(rr) {
          (0, vr.i)(this, Zr, rr, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, vr.e)(this, Wr, "f")
        }
        set useRoughnessFromMainTexture(rr) {
          (0, vr.i)(this, Wr, rr, "f")
        }
        get textureRoughness() {
          return (0, vr.e)(this, ar, "f")
        }
        set textureRoughness(rr) {
          (0, vr.i)(this, ar, rr, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, vr.e)(this, jr, "f")
        }
        set remapF0OnInterfaceChange(rr) {
          (0, vr.i)(this, jr, rr, "f")
        }
        get bumpTexture() {
          return (0, vr.e)(this, Ir, "f")
        }
        set bumpTexture(rr) {
          (0, vr.i)(this, Ir, rr, "f")
        }
        get isTintEnabled() {
          return (0, vr.e)(this, fr, "f")
        }
        set isTintEnabled(rr) {
          (0, vr.i)(this, fr, rr, "f")
        }
        get tintTexture() {
          return (0, vr.e)(this, Er, "f")
        }
        set tintTexture(rr) {
          (0, vr.i)(this, Er, rr, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(pr) {
          let xr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(pr, "PBRClearCoat", 100, new ur, xr), this._isEnabled = !1, Sr.set(this, (0, vr.m)(this, Lr, !1)), this.intensity = ((0, vr.m)(this, lr), (0, vr.m)(this, Xr, 1)), this.roughness = ((0, vr.m)(this, Pr), (0, vr.m)(this, Hr, 0)), this._indexOfRefraction = ((0, vr.m)(this, qr), rr._DefaultIndexOfRefraction), Qr.set(this, (0, vr.m)(this, Rr, rr._DefaultIndexOfRefraction)), this._texture = ((0, vr.m)(this, gr), null), Zr.set(this, (0, vr.m)(this, Cr, null)), this._useRoughnessFromMainTexture = ((0, vr.m)(this, Mr), !0), Wr.set(this, (0, vr.m)(this, Gr, !0)), this._textureRoughness = ((0, vr.m)(this, kr), null), ar.set(this, (0, vr.m)(this, Ar, null)), this._remapF0OnInterfaceChange = ((0, vr.m)(this, ir), !0), jr.set(this, (0, vr.m)(this, wr, !0)), this._bumpTexture = ((0, vr.m)(this, cr), null), Ir.set(this, (0, vr.m)(this, or, null)), this._isTintEnabled = ((0, vr.m)(this, br), !1), fr.set(this, (0, vr.m)(this, Jr, !1)), this.tintColor = ((0, vr.m)(this, dr), (0, vr.m)(this, rS, Fr.e.White())), this.tintColorAtDistance = ((0, vr.m)(this, SS), (0, vr.m)(this, QS, 1)), this.tintThickness = ((0, vr.m)(this, ZS), (0, vr.m)(this, WS, 1)), this._tintTexture = ((0, vr.m)(this, aS), null), Er.set(this, (0, vr.m)(this, jS, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vr.m)(this, IS), this._internalMarkAllSubMeshesAsTexturesDirty = pr._dirtyCallbacks[1]
        }
        isReadyForSubMesh(rr, Sr, Qr) {
          if (!this._isEnabled) return !0;
          const Zr = this._material._disableBumpMap;
          if (rr._areTexturesDirty && Sr.texturesEnabled) {
            if (this._texture && Dr.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Dr.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (Qr.getCaps().standardDerivatives && this._bumpTexture && Dr.d.ClearCoatBumpTextureEnabled && !Zr && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && Dr.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(Sr, Qr) {
          this._isEnabled ? (Sr.CLEARCOAT = !0, Sr.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, Sr.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, Sr._areTexturesDirty && Qr.texturesEnabled && (this._texture && Dr.d.ClearCoatTextureEnabled ? (0, sr.Y)(this._texture, Sr, "CLEARCOAT_TEXTURE") : Sr.CLEARCOAT_TEXTURE = !1, this._textureRoughness && Dr.d.ClearCoatTextureEnabled ? (0, sr.Y)(this._textureRoughness, Sr, "CLEARCOAT_TEXTURE_ROUGHNESS") : Sr.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && Dr.d.ClearCoatBumpTextureEnabled ? (0, sr.Y)(this._bumpTexture, Sr, "CLEARCOAT_BUMP") : Sr.CLEARCOAT_BUMP = !1, Sr.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === rr._DefaultIndexOfRefraction, this._isTintEnabled ? (Sr.CLEARCOAT_TINT = !0, this._tintTexture && Dr.d.ClearCoatTintTextureEnabled ? ((0, sr.Y)(this._tintTexture, Sr, "CLEARCOAT_TINT_TEXTURE"), Sr.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : Sr.CLEARCOAT_TINT_TEXTURE = !1) : (Sr.CLEARCOAT_TINT = !1, Sr.CLEARCOAT_TINT_TEXTURE = !1))) : (Sr.CLEARCOAT = !1, Sr.CLEARCOAT_TEXTURE = !1, Sr.CLEARCOAT_TEXTURE_ROUGHNESS = !1, Sr.CLEARCOAT_BUMP = !1, Sr.CLEARCOAT_TINT = !1, Sr.CLEARCOAT_TINT_TEXTURE = !1, Sr.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, Sr.CLEARCOAT_DEFAULTIOR = !1, Sr.CLEARCOAT_TEXTUREDIRECTUV = 0, Sr.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, Sr.CLEARCOAT_BUMPDIRECTUV = 0, Sr.CLEARCOAT_REMAP_F0 = !1, Sr.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, Sr.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(rr, Sr, Qr, Zr) {
          if (!this._isEnabled) return;
          const Wr = Zr.materialDefines,
            ar = this._material.isFrozen,
            jr = this._material._disableBumpMap,
            Ir = this._material._invertNormalMapX,
            fr = this._material._invertNormalMapY;
          if (!rr.useUbo || !ar || !rr.isSync) {
            (this._texture || this._textureRoughness) && Dr.d.ClearCoatTextureEnabled && (rr.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, sr.B)(this._texture, rr, "clearCoat"), this._textureRoughness && !Wr.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, sr.B)(this._textureRoughness, rr, "clearCoatRoughness")), this._bumpTexture && Qr.getCaps().standardDerivatives && Dr.d.ClearCoatTextureEnabled && !jr && (rr.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, sr.B)(this._bumpTexture, rr, "clearCoatBump"), Sr._mirroredCameraPosition ? rr.updateFloat2("vClearCoatTangentSpaceParams", Ir ? 1 : -1, fr ? 1 : -1) : rr.updateFloat2("vClearCoatTangentSpaceParams", Ir ? -1 : 1, fr ? -1 : 1)), this._tintTexture && Dr.d.ClearCoatTintTextureEnabled && (rr.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, sr.B)(this._tintTexture, rr, "clearCoatTint")), rr.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Zr = 1 - this._indexOfRefraction,
              ar = 1 + this._indexOfRefraction,
              Er = Math.pow(-Zr / ar, 2),
              pr = 1 / this._indexOfRefraction;
            rr.updateFloat4("vClearCoatRefractionParams", Er, pr, Zr, ar), this._isTintEnabled && (rr.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), rr.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          Sr.texturesEnabled && (this._texture && Dr.d.ClearCoatTextureEnabled && rr.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Wr.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && Dr.d.ClearCoatTextureEnabled && rr.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && Qr.getCaps().standardDerivatives && Dr.d.ClearCoatBumpTextureEnabled && !jr && rr.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && Dr.d.ClearCoatTintTextureEnabled && rr.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(rr) {
          return this._texture === rr || (this._textureRoughness === rr || (this._bumpTexture === rr || this._tintTexture === rr))
        }
        getActiveTextures(rr) {
          this._texture && rr.push(this._texture), this._textureRoughness && rr.push(this._textureRoughness), this._bumpTexture && rr.push(this._bumpTexture), this._tintTexture && rr.push(this._tintTexture)
        }
        getAnimatables(rr) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && rr.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && rr.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && rr.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && rr.push(this._tintTexture)
        }
        dispose(rr) {
          rr && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(rr, Sr, Qr) {
          return rr.CLEARCOAT_BUMP && Sr.addFallback(Qr++, "CLEARCOAT_BUMP"), rr.CLEARCOAT_TINT && Sr.addFallback(Qr++, "CLEARCOAT_TINT"), rr.CLEARCOAT && Sr.addFallback(Qr++, "CLEARCOAT"), Qr
        }
        getSamplers(rr) {
          rr.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, Sr = new WeakMap, Qr = new WeakMap, Zr = new WeakMap, Wr = new WeakMap, ar = new WeakMap, jr = new WeakMap, Ir = new WeakMap, fr = new WeakMap, Er = new WeakMap, (() => {
        const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tr[Symbol.metadata] ?? null) : void 0;
        pr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], xr = [(0, Or.G)()], mr = [(0, Or.G)()], Nr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], Ur = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], tr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], hr = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], zr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], Yr = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], nr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], er = [(0, Or.n)()], Kr = [(0, Or.G)()], yr = [(0, Or.G)()], Br = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], (0, vr.k)(rr, null, pr, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "isEnabled" in rr,
            get: rr => rr.isEnabled,
            set: (rr, Sr) => {
              rr.isEnabled = Sr
            }
          },
          metadata: Sr
        }, Lr, lr), (0, vr.k)(rr, null, Nr, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: rr => "indexOfRefraction" in rr,
            get: rr => rr.indexOfRefraction,
            set: (rr, Sr) => {
              rr.indexOfRefraction = Sr
            }
          },
          metadata: Sr
        }, Rr, gr), (0, vr.k)(rr, null, Ur, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: rr => "texture" in rr,
            get: rr => rr.texture,
            set: (rr, Sr) => {
              rr.texture = Sr
            }
          },
          metadata: Sr
        }, Cr, Mr), (0, vr.k)(rr, null, tr, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "useRoughnessFromMainTexture" in rr,
            get: rr => rr.useRoughnessFromMainTexture,
            set: (rr, Sr) => {
              rr.useRoughnessFromMainTexture = Sr
            }
          },
          metadata: Sr
        }, Gr, kr), (0, vr.k)(rr, null, hr, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: rr => "textureRoughness" in rr,
            get: rr => rr.textureRoughness,
            set: (rr, Sr) => {
              rr.textureRoughness = Sr
            }
          },
          metadata: Sr
        }, Ar, ir), (0, vr.k)(rr, null, zr, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: rr => "remapF0OnInterfaceChange" in rr,
            get: rr => rr.remapF0OnInterfaceChange,
            set: (rr, Sr) => {
              rr.remapF0OnInterfaceChange = Sr
            }
          },
          metadata: Sr
        }, wr, cr), (0, vr.k)(rr, null, Yr, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "bumpTexture" in rr,
            get: rr => rr.bumpTexture,
            set: (rr, Sr) => {
              rr.bumpTexture = Sr
            }
          },
          metadata: Sr
        }, or, br), (0, vr.k)(rr, null, nr, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "isTintEnabled" in rr,
            get: rr => rr.isTintEnabled,
            set: (rr, Sr) => {
              rr.isTintEnabled = Sr
            }
          },
          metadata: Sr
        }, Jr, dr), (0, vr.k)(rr, null, Br, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "tintTexture" in rr,
            get: rr => rr.tintTexture,
            set: (rr, Sr) => {
              rr.tintTexture = Sr
            }
          },
          metadata: Sr
        }, jS, IS), (0, vr.k)(null, null, xr, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "intensity" in rr,
            get: rr => rr.intensity,
            set: (rr, Sr) => {
              rr.intensity = Sr
            }
          },
          metadata: Sr
        }, Xr, Pr), (0, vr.k)(null, null, mr, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: rr => "roughness" in rr,
            get: rr => rr.roughness,
            set: (rr, Sr) => {
              rr.roughness = Sr
            }
          },
          metadata: Sr
        }, Hr, qr), (0, vr.k)(null, null, er, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: rr => "tintColor" in rr,
            get: rr => rr.tintColor,
            set: (rr, Sr) => {
              rr.tintColor = Sr
            }
          },
          metadata: Sr
        }, rS, SS), (0, vr.k)(null, null, Kr, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: rr => "tintColorAtDistance" in rr,
            get: rr => rr.tintColorAtDistance,
            set: (rr, Sr) => {
              rr.tintColorAtDistance = Sr
            }
          },
          metadata: Sr
        }, QS, ZS), (0, vr.k)(null, null, yr, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: rr => "tintThickness" in rr,
            get: rr => rr.tintThickness,
            set: (rr, Sr) => {
              rr.tintThickness = Sr
            }
          },
          metadata: Sr
        }, WS, aS), Sr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sr
        })
      })(), rr._DefaultIndexOfRefraction = 1.5, rr
    })();
    class SS extends Ar.b {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let QS = (() => {
      var rr, Sr, Qr, Zr;
      let Wr, ar, jr, Ir, fr, Er, pr, xr = Vr.c,
        mr = [],
        Nr = [],
        Ur = [],
        tr = [],
        hr = [],
        zr = [],
        Yr = [],
        nr = [],
        er = [],
        Kr = [],
        yr = [],
        Br = [],
        Tr = [],
        Lr = [];
      return rr = class extends xr {
        get isEnabled() {
          return (0, vr.e)(this, Sr, "f")
        }
        set isEnabled(rr) {
          (0, vr.i)(this, Sr, rr, "f")
        }
        get texture() {
          return (0, vr.e)(this, Qr, "f")
        }
        set texture(rr) {
          (0, vr.i)(this, Qr, rr, "f")
        }
        get thicknessTexture() {
          return (0, vr.e)(this, Zr, "f")
        }
        set thicknessTexture(rr) {
          (0, vr.i)(this, Zr, rr, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Wr) {
          let ar = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Wr, "PBRIridescence", 110, new SS, ar), this._isEnabled = !1, Sr.set(this, (0, vr.m)(this, mr, !1)), this.intensity = ((0, vr.m)(this, Nr), (0, vr.m)(this, Ur, 1)), this.minimumThickness = ((0, vr.m)(this, tr), (0, vr.m)(this, hr, rr._DefaultMinimumThickness)), this.maximumThickness = ((0, vr.m)(this, zr), (0, vr.m)(this, Yr, rr._DefaultMaximumThickness)), this.indexOfRefraction = ((0, vr.m)(this, nr), (0, vr.m)(this, er, rr._DefaultIndexOfRefraction)), this._texture = ((0, vr.m)(this, Kr), null), Qr.set(this, (0, vr.m)(this, yr, null)), this._thicknessTexture = ((0, vr.m)(this, Br), null), Zr.set(this, (0, vr.m)(this, Tr, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vr.m)(this, Lr), this._internalMarkAllSubMeshesAsTexturesDirty = Wr._dirtyCallbacks[1]
        }
        isReadyForSubMesh(rr, Sr) {
          if (!this._isEnabled) return !0;
          if (rr._areTexturesDirty && Sr.texturesEnabled) {
            if (this._texture && Dr.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && Dr.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(rr, Sr) {
          this._isEnabled ? (rr.IRIDESCENCE = !0, rr._areTexturesDirty && Sr.texturesEnabled && (this._texture && Dr.d.IridescenceTextureEnabled ? (0, sr.Y)(this._texture, rr, "IRIDESCENCE_TEXTURE") : rr.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && Dr.d.IridescenceTextureEnabled ? (0, sr.Y)(this._thicknessTexture, rr, "IRIDESCENCE_THICKNESS_TEXTURE") : rr.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (rr.IRIDESCENCE = !1, rr.IRIDESCENCE_TEXTURE = !1, rr.IRIDESCENCE_THICKNESS_TEXTURE = !1, rr.IRIDESCENCE_TEXTUREDIRECTUV = 0, rr.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(rr, Sr) {
          if (!this._isEnabled) return;
          const Qr = this._material.isFrozen;
          rr.useUbo && Qr && rr.isSync || ((this._texture || this._thicknessTexture) && Dr.d.IridescenceTextureEnabled && (rr.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, sr.B)(this._texture, rr, "iridescence"), this._thicknessTexture && (0, sr.B)(this._thicknessTexture, rr, "iridescenceThickness")), rr.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), Sr.texturesEnabled && (this._texture && Dr.d.IridescenceTextureEnabled && rr.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && Dr.d.IridescenceTextureEnabled && rr.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(rr) {
          return this._texture === rr || this._thicknessTexture === rr
        }
        getActiveTextures(rr) {
          this._texture && rr.push(this._texture), this._thicknessTexture && rr.push(this._thicknessTexture)
        }
        getAnimatables(rr) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && rr.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && rr.push(this._thicknessTexture)
        }
        dispose(rr) {
          rr && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(rr, Sr, Qr) {
          return rr.IRIDESCENCE && Sr.addFallback(Qr++, "IRIDESCENCE"), Qr
        }
        getSamplers(rr) {
          rr.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, Sr = new WeakMap, Qr = new WeakMap, Zr = new WeakMap, (() => {
        const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(xr[Symbol.metadata] ?? null) : void 0;
        Wr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], ar = [(0, Or.G)()], jr = [(0, Or.G)()], Ir = [(0, Or.G)()], fr = [(0, Or.G)()], Er = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], pr = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], (0, vr.k)(rr, null, Wr, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "isEnabled" in rr,
            get: rr => rr.isEnabled,
            set: (rr, Sr) => {
              rr.isEnabled = Sr
            }
          },
          metadata: Sr
        }, mr, Nr), (0, vr.k)(rr, null, Er, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: rr => "texture" in rr,
            get: rr => rr.texture,
            set: (rr, Sr) => {
              rr.texture = Sr
            }
          },
          metadata: Sr
        }, yr, Br), (0, vr.k)(rr, null, pr, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "thicknessTexture" in rr,
            get: rr => rr.thicknessTexture,
            set: (rr, Sr) => {
              rr.thicknessTexture = Sr
            }
          },
          metadata: Sr
        }, Tr, Lr), (0, vr.k)(null, null, ar, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "intensity" in rr,
            get: rr => rr.intensity,
            set: (rr, Sr) => {
              rr.intensity = Sr
            }
          },
          metadata: Sr
        }, Ur, tr), (0, vr.k)(null, null, jr, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: rr => "minimumThickness" in rr,
            get: rr => rr.minimumThickness,
            set: (rr, Sr) => {
              rr.minimumThickness = Sr
            }
          },
          metadata: Sr
        }, hr, zr), (0, vr.k)(null, null, Ir, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: rr => "maximumThickness" in rr,
            get: rr => rr.maximumThickness,
            set: (rr, Sr) => {
              rr.maximumThickness = Sr
            }
          },
          metadata: Sr
        }, Yr, nr), (0, vr.k)(null, null, fr, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: rr => "indexOfRefraction" in rr,
            get: rr => rr.indexOfRefraction,
            set: (rr, Sr) => {
              rr.indexOfRefraction = Sr
            }
          },
          metadata: Sr
        }, er, Kr), Sr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sr
        })
      })(), rr._DefaultMinimumThickness = 100, rr._DefaultMaximumThickness = 400, rr._DefaultIndexOfRefraction = 1.3, rr
    })();
    class ZS extends Ar.b {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let WS = (() => {
      var rr, Sr, Qr, Zr;
      let Wr, ar, jr, Ir, fr, Er = Vr.c,
        pr = [],
        xr = [],
        mr = [],
        Nr = [],
        Ur = [],
        tr = [],
        hr = [],
        zr = [],
        Yr = [],
        nr = [];
      return rr = class extends Er {
        get isEnabled() {
          return (0, vr.e)(this, Sr, "f")
        }
        set isEnabled(rr) {
          (0, vr.i)(this, Sr, rr, "f")
        }
        set angle(rr) {
          this.direction.x = Math.cos(rr), this.direction.y = Math.sin(rr)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, vr.e)(this, Qr, "f")
        }
        set texture(rr) {
          (0, vr.i)(this, Qr, rr, "f")
        }
        get legacy() {
          return (0, vr.e)(this, Zr, "f")
        }
        set legacy(rr) {
          (0, vr.i)(this, Zr, rr, "f")
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
        constructor(rr) {
          let Wr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(rr, "PBRAnisotropic", 110, new ZS, Wr), this._isEnabled = !1, Sr.set(this, (0, vr.m)(this, pr, !1)), this.intensity = ((0, vr.m)(this, xr), (0, vr.m)(this, mr, 1)), this.direction = ((0, vr.m)(this, Nr), (0, vr.m)(this, Ur, new Gr.q(1, 0))), this._texture = ((0, vr.m)(this, tr), null), Qr.set(this, (0, vr.m)(this, hr, null)), this._legacy = ((0, vr.m)(this, zr), !1), Zr.set(this, (0, vr.m)(this, Yr, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vr.m)(this, nr), this._internalMarkAllSubMeshesAsTexturesDirty = rr._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = rr._dirtyCallbacks[16]
        }
        isReadyForSubMesh(rr, Sr) {
          return !this._isEnabled || !(rr._areTexturesDirty && Sr.texturesEnabled && this._texture && Dr.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(rr, Sr, Qr) {
          this._isEnabled ? (rr.ANISOTROPIC = this._isEnabled, this._isEnabled && !Qr.isVerticesDataPresent(kr.j.TangentKind) && (rr._needUVs = !0, rr.MAINUV1 = !0), rr._areTexturesDirty && Sr.texturesEnabled && (this._texture && Dr.d.AnisotropicTextureEnabled ? (0, sr.Y)(this._texture, rr, "ANISOTROPIC_TEXTURE") : rr.ANISOTROPIC_TEXTURE = !1), rr._areMiscDirty && (rr.ANISOTROPIC_LEGACY = this._legacy)) : (rr.ANISOTROPIC = !1, rr.ANISOTROPIC_TEXTURE = !1, rr.ANISOTROPIC_TEXTUREDIRECTUV = 0, rr.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(rr, Sr) {
          if (!this._isEnabled) return;
          const Qr = this._material.isFrozen;
          rr.useUbo && Qr && rr.isSync || (this._texture && Dr.d.AnisotropicTextureEnabled && (rr.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, sr.B)(this._texture, rr, "anisotropy")), rr.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), Sr.texturesEnabled && this._texture && Dr.d.AnisotropicTextureEnabled && rr.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(rr) {
          return this._texture === rr
        }
        getActiveTextures(rr) {
          this._texture && rr.push(this._texture)
        }
        getAnimatables(rr) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && rr.push(this._texture)
        }
        dispose(rr) {
          rr && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(rr, Sr, Qr) {
          return rr.ANISOTROPIC && Sr.addFallback(Qr++, "ANISOTROPIC"), Qr
        }
        getSamplers(rr) {
          rr.push("anisotropySampler")
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
        parse(rr, Sr, Qr) {
          super.parse(rr, Sr, Qr), void 0 === rr.legacy && (this.legacy = !0)
        }
      }, Sr = new WeakMap, Qr = new WeakMap, Zr = new WeakMap, (() => {
        const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(Er[Symbol.metadata] ?? null) : void 0;
        Wr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], ar = [(0, Or.G)()], jr = [(0, Or.A)()], Ir = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], fr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], (0, vr.k)(rr, null, Wr, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "isEnabled" in rr,
            get: rr => rr.isEnabled,
            set: (rr, Sr) => {
              rr.isEnabled = Sr
            }
          },
          metadata: Sr
        }, pr, xr), (0, vr.k)(rr, null, Ir, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: rr => "texture" in rr,
            get: rr => rr.texture,
            set: (rr, Sr) => {
              rr.texture = Sr
            }
          },
          metadata: Sr
        }, hr, zr), (0, vr.k)(rr, null, fr, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: rr => "legacy" in rr,
            get: rr => rr.legacy,
            set: (rr, Sr) => {
              rr.legacy = Sr
            }
          },
          metadata: Sr
        }, Yr, nr), (0, vr.k)(null, null, ar, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "intensity" in rr,
            get: rr => rr.intensity,
            set: (rr, Sr) => {
              rr.intensity = Sr
            }
          },
          metadata: Sr
        }, mr, Nr), (0, vr.k)(null, null, jr, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: rr => "direction" in rr,
            get: rr => rr.direction,
            set: (rr, Sr) => {
              rr.direction = Sr
            }
          },
          metadata: Sr
        }, Ur, tr), Sr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sr
        })
      })(), rr
    })();
    class aS extends Ar.b {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let jS = (() => {
      var rr, Sr, Qr, Zr, Wr, ar, jr, Ir;
      let fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr = Vr.c,
        Yr = [],
        nr = [],
        er = [],
        Kr = [],
        yr = [],
        Br = [],
        Tr = [],
        Lr = [],
        lr = [],
        Xr = [],
        Pr = [],
        Hr = [],
        qr = [],
        Rr = [],
        gr = [],
        Cr = [],
        Mr = [],
        Gr = [];
      return rr = class extends zr {
        get isEnabled() {
          return (0, vr.e)(this, Sr, "f")
        }
        set isEnabled(rr) {
          (0, vr.i)(this, Sr, rr, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, vr.e)(this, Qr, "f")
        }
        set linkSheenWithAlbedo(rr) {
          (0, vr.i)(this, Qr, rr, "f")
        }
        get texture() {
          return (0, vr.e)(this, Zr, "f")
        }
        set texture(rr) {
          (0, vr.i)(this, Zr, rr, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, vr.e)(this, Wr, "f")
        }
        set useRoughnessFromMainTexture(rr) {
          (0, vr.i)(this, Wr, rr, "f")
        }
        get roughness() {
          return (0, vr.e)(this, ar, "f")
        }
        set roughness(rr) {
          (0, vr.i)(this, ar, rr, "f")
        }
        get textureRoughness() {
          return (0, vr.e)(this, jr, "f")
        }
        set textureRoughness(rr) {
          (0, vr.i)(this, jr, rr, "f")
        }
        get albedoScaling() {
          return (0, vr.e)(this, Ir, "f")
        }
        set albedoScaling(rr) {
          (0, vr.i)(this, Ir, rr, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(rr) {
          let fr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(rr, "Sheen", 120, new aS, fr), this._isEnabled = !1, Sr.set(this, (0, vr.m)(this, Yr, !1)), this._linkSheenWithAlbedo = ((0, vr.m)(this, nr), !1), Qr.set(this, (0, vr.m)(this, er, !1)), this.intensity = ((0, vr.m)(this, Kr), (0, vr.m)(this, yr, 1)), this.color = ((0, vr.m)(this, Br), (0, vr.m)(this, Tr, Fr.e.White())), this._texture = ((0, vr.m)(this, Lr), null), Zr.set(this, (0, vr.m)(this, lr, null)), this._useRoughnessFromMainTexture = ((0, vr.m)(this, Xr), !0), Wr.set(this, (0, vr.m)(this, Pr, !0)), this._roughness = ((0, vr.m)(this, Hr), null), ar.set(this, (0, vr.m)(this, qr, null)), this._textureRoughness = ((0, vr.m)(this, Rr), null), jr.set(this, (0, vr.m)(this, gr, null)), this._albedoScaling = ((0, vr.m)(this, Cr), !1), Ir.set(this, (0, vr.m)(this, Mr, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, vr.m)(this, Gr), this._internalMarkAllSubMeshesAsTexturesDirty = rr._dirtyCallbacks[1]
        }
        isReadyForSubMesh(rr, Sr) {
          if (!this._isEnabled) return !0;
          if (rr._areTexturesDirty && Sr.texturesEnabled) {
            if (this._texture && Dr.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Dr.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(rr, Sr) {
          this._isEnabled ? (rr.SHEEN = !0, rr.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, rr.SHEEN_ROUGHNESS = null !== this._roughness, rr.SHEEN_ALBEDOSCALING = this._albedoScaling, rr.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, rr._areTexturesDirty && Sr.texturesEnabled && (this._texture && Dr.d.SheenTextureEnabled ? ((0, sr.Y)(this._texture, rr, "SHEEN_TEXTURE"), rr.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : rr.SHEEN_TEXTURE = !1, this._textureRoughness && Dr.d.SheenTextureEnabled ? (0, sr.Y)(this._textureRoughness, rr, "SHEEN_TEXTURE_ROUGHNESS") : rr.SHEEN_TEXTURE_ROUGHNESS = !1)) : (rr.SHEEN = !1, rr.SHEEN_TEXTURE = !1, rr.SHEEN_TEXTURE_ROUGHNESS = !1, rr.SHEEN_LINKWITHALBEDO = !1, rr.SHEEN_ROUGHNESS = !1, rr.SHEEN_ALBEDOSCALING = !1, rr.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, rr.SHEEN_GAMMATEXTURE = !1, rr.SHEEN_TEXTUREDIRECTUV = 0, rr.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(rr, Sr, Qr, Zr) {
          if (!this._isEnabled) return;
          const Wr = Zr.materialDefines,
            ar = this._material.isFrozen;
          rr.useUbo && ar && rr.isSync || ((this._texture || this._textureRoughness) && Dr.d.SheenTextureEnabled && (rr.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, sr.B)(this._texture, rr, "sheen"), this._textureRoughness && !Wr.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, sr.B)(this._textureRoughness, rr, "sheenRoughness")), rr.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && rr.updateFloat("vSheenRoughness", this._roughness)), Sr.texturesEnabled && (this._texture && Dr.d.SheenTextureEnabled && rr.setTexture("sheenSampler", this._texture), this._textureRoughness && !Wr.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && Dr.d.SheenTextureEnabled && rr.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(rr) {
          return this._texture === rr || this._textureRoughness === rr
        }
        getActiveTextures(rr) {
          this._texture && rr.push(this._texture), this._textureRoughness && rr.push(this._textureRoughness)
        }
        getAnimatables(rr) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && rr.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && rr.push(this._textureRoughness)
        }
        dispose(rr) {
          rr && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(rr, Sr, Qr) {
          return rr.SHEEN && Sr.addFallback(Qr++, "SHEEN"), Qr
        }
        getSamplers(rr) {
          rr.push("sheenSampler", "sheenRoughnessSampler")
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
      }, Sr = new WeakMap, Qr = new WeakMap, Zr = new WeakMap, Wr = new WeakMap, ar = new WeakMap, jr = new WeakMap, Ir = new WeakMap, (() => {
        const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(zr[Symbol.metadata] ?? null) : void 0;
        fr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], Er = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], pr = [(0, Or.G)()], xr = [(0, Or.n)()], mr = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], Nr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], Ur = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], tr = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], hr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], (0, vr.k)(rr, null, fr, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "isEnabled" in rr,
            get: rr => rr.isEnabled,
            set: (rr, Sr) => {
              rr.isEnabled = Sr
            }
          },
          metadata: Sr
        }, Yr, nr), (0, vr.k)(rr, null, Er, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: rr => "linkSheenWithAlbedo" in rr,
            get: rr => rr.linkSheenWithAlbedo,
            set: (rr, Sr) => {
              rr.linkSheenWithAlbedo = Sr
            }
          },
          metadata: Sr
        }, er, Kr), (0, vr.k)(rr, null, mr, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: rr => "texture" in rr,
            get: rr => rr.texture,
            set: (rr, Sr) => {
              rr.texture = Sr
            }
          },
          metadata: Sr
        }, lr, Xr), (0, vr.k)(rr, null, Nr, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "useRoughnessFromMainTexture" in rr,
            get: rr => rr.useRoughnessFromMainTexture,
            set: (rr, Sr) => {
              rr.useRoughnessFromMainTexture = Sr
            }
          },
          metadata: Sr
        }, Pr, Hr), (0, vr.k)(rr, null, Ur, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: rr => "roughness" in rr,
            get: rr => rr.roughness,
            set: (rr, Sr) => {
              rr.roughness = Sr
            }
          },
          metadata: Sr
        }, qr, Rr), (0, vr.k)(rr, null, tr, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: rr => "textureRoughness" in rr,
            get: rr => rr.textureRoughness,
            set: (rr, Sr) => {
              rr.textureRoughness = Sr
            }
          },
          metadata: Sr
        }, gr, Cr), (0, vr.k)(rr, null, hr, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: rr => "albedoScaling" in rr,
            get: rr => rr.albedoScaling,
            set: (rr, Sr) => {
              rr.albedoScaling = Sr
            }
          },
          metadata: Sr
        }, Mr, Gr), (0, vr.k)(null, null, pr, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "intensity" in rr,
            get: rr => rr.intensity,
            set: (rr, Sr) => {
              rr.intensity = Sr
            }
          },
          metadata: Sr
        }, yr, Br), (0, vr.k)(null, null, xr, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: rr => "color" in rr,
            get: rr => rr.color,
            set: (rr, Sr) => {
              rr.color = Sr
            }
          },
          metadata: Sr
        }, Tr, Lr), Sr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sr
        })
      })(), rr
    })();
    class IS extends Ar.b {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let fS = (() => {
      var rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr;
      let zr, Yr, nr, er, Kr, yr, Br, Tr, Lr, lr, Xr, Pr, Hr, qr, Rr, gr, Cr, Mr, kr, Ar, ir, wr, cr, or, br, Jr, dr, ur, rS, SS, QS = Vr.c,
        ZS = [],
        WS = [],
        aS = [],
        jS = [],
        fS = [],
        ES = [],
        pS = [],
        xS = [],
        mS = [],
        NS = [],
        US = [],
        tS = [],
        hS = [],
        zS = [],
        YS = [],
        nS = [],
        eS = [],
        KS = [],
        yS = [],
        BS = [],
        TS = [],
        vS = [],
        OS = [],
        LS = [],
        lS = [],
        XS = [],
        PS = [],
        HS = [],
        qS = [],
        RS = [],
        gS = [],
        CS = [],
        MS = [],
        GS = [],
        kS = [],
        AS = [],
        VS = [],
        iS = [],
        wS = [],
        cS = [],
        FS = [],
        oS = [],
        bS = [],
        JS = [],
        DS = [],
        dS = [],
        sS = [],
        uS = [],
        rQ = [],
        SQ = [],
        QQ = [],
        ZQ = [],
        WQ = [],
        aQ = [],
        jQ = [],
        IQ = [],
        fQ = [],
        EQ = [],
        pQ = [],
        xQ = [];
      return rr = class extends QS {
        get isRefractionEnabled() {
          return (0, vr.e)(this, Sr, "f")
        }
        set isRefractionEnabled(rr) {
          (0, vr.i)(this, Sr, rr, "f")
        }
        get isTranslucencyEnabled() {
          return (0, vr.e)(this, Qr, "f")
        }
        set isTranslucencyEnabled(rr) {
          (0, vr.i)(this, Qr, rr, "f")
        }
        get isDispersionEnabled() {
          return (0, vr.e)(this, Zr, "f")
        }
        set isDispersionEnabled(rr) {
          (0, vr.i)(this, Zr, rr, "f")
        }
        get isScatteringEnabled() {
          return (0, vr.e)(this, Wr, "f")
        }
        set isScatteringEnabled(rr) {
          (0, vr.i)(this, Wr, rr, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(rr) {
          this._scene.enableSubSurfaceForPrePass() && rr && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(rr))
        }
        get useAlbedoToTintRefraction() {
          return (0, vr.e)(this, ar, "f")
        }
        set useAlbedoToTintRefraction(rr) {
          (0, vr.i)(this, ar, rr, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, vr.e)(this, jr, "f")
        }
        set useAlbedoToTintTranslucency(rr) {
          (0, vr.i)(this, jr, rr, "f")
        }
        get thicknessTexture() {
          return (0, vr.e)(this, Ir, "f")
        }
        set thicknessTexture(rr) {
          (0, vr.i)(this, Ir, rr, "f")
        }
        get refractionTexture() {
          return (0, vr.e)(this, fr, "f")
        }
        set refractionTexture(rr) {
          (0, vr.i)(this, fr, rr, "f")
        }
        get indexOfRefraction() {
          return (0, vr.e)(this, Er, "f")
        }
        set indexOfRefraction(rr) {
          (0, vr.i)(this, Er, rr, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(rr) {
          const Sr = rr >= 1 ? rr : -1;
          this._volumeIndexOfRefraction !== Sr && (this._volumeIndexOfRefraction = Sr, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, vr.e)(this, pr, "f")
        }
        set invertRefractionY(rr) {
          (0, vr.i)(this, pr, rr, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, vr.e)(this, xr, "f")
        }
        set linkRefractionWithTransparency(rr) {
          (0, vr.i)(this, xr, rr, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, vr.e)(this, mr, "f")
        }
        set useMaskFromThicknessTexture(rr) {
          (0, vr.i)(this, mr, rr, "f")
        }
        get refractionIntensityTexture() {
          return (0, vr.e)(this, Nr, "f")
        }
        set refractionIntensityTexture(rr) {
          (0, vr.i)(this, Nr, rr, "f")
        }
        get translucencyIntensityTexture() {
          return (0, vr.e)(this, Ur, "f")
        }
        set translucencyIntensityTexture(rr) {
          (0, vr.i)(this, Ur, rr, "f")
        }
        get translucencyColorTexture() {
          return (0, vr.e)(this, tr, "f")
        }
        set translucencyColorTexture(rr) {
          (0, vr.i)(this, tr, rr, "f")
        }
        get useGltfStyleTextures() {
          return (0, vr.e)(this, hr, "f")
        }
        set useGltfStyleTextures(rr) {
          (0, vr.i)(this, hr, rr, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(rr) {
          this.legacyTranslucency = rr
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
        constructor(zr) {
          let Yr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(zr, "PBRSubSurface", 130, new IS, Yr), this._isRefractionEnabled = !1, Sr.set(this, (0, vr.m)(this, ZS, !1)), this._isTranslucencyEnabled = ((0, vr.m)(this, WS), !1), Qr.set(this, (0, vr.m)(this, aS, !1)), this._isDispersionEnabled = ((0, vr.m)(this, jS), !1), Zr.set(this, (0, vr.m)(this, fS, !1)), this._isScatteringEnabled = ((0, vr.m)(this, ES), !1), Wr.set(this, (0, vr.m)(this, pS, !1)), this._scatteringDiffusionProfileIndex = ((0, vr.m)(this, xS), (0, vr.m)(this, mS, 0)), this.refractionIntensity = ((0, vr.m)(this, NS), (0, vr.m)(this, US, 1)), this.translucencyIntensity = ((0, vr.m)(this, tS), (0, vr.m)(this, hS, 1)), this._useAlbedoToTintRefraction = ((0, vr.m)(this, zS), !1), ar.set(this, (0, vr.m)(this, YS, !1)), this._useAlbedoToTintTranslucency = ((0, vr.m)(this, nS), !1), jr.set(this, (0, vr.m)(this, eS, !1)), this._thicknessTexture = ((0, vr.m)(this, KS), null), Ir.set(this, (0, vr.m)(this, yS, null)), this._refractionTexture = ((0, vr.m)(this, BS), null), fr.set(this, (0, vr.m)(this, TS, null)), this._indexOfRefraction = ((0, vr.m)(this, vS), 1.5), Er.set(this, (0, vr.m)(this, OS, 1.5)), this._volumeIndexOfRefraction = ((0, vr.m)(this, LS), (0, vr.m)(this, lS, -1)), this._invertRefractionY = ((0, vr.m)(this, XS), !1), pr.set(this, (0, vr.m)(this, PS, !1)), this._linkRefractionWithTransparency = ((0, vr.m)(this, HS), !1), xr.set(this, (0, vr.m)(this, qS, !1)), this.minimumThickness = ((0, vr.m)(this, RS), (0, vr.m)(this, gS, 0)), this.maximumThickness = ((0, vr.m)(this, CS), (0, vr.m)(this, MS, 1)), this.useThicknessAsDepth = ((0, vr.m)(this, GS), (0, vr.m)(this, kS, !1)), this.tintColor = ((0, vr.m)(this, AS), (0, vr.m)(this, VS, Fr.e.White())), this.tintColorAtDistance = ((0, vr.m)(this, iS), (0, vr.m)(this, wS, 1)), this.dispersion = ((0, vr.m)(this, cS), (0, vr.m)(this, FS, 0)), this.diffusionDistance = ((0, vr.m)(this, oS), (0, vr.m)(this, bS, Fr.e.White())), this._useMaskFromThicknessTexture = ((0, vr.m)(this, JS), !1), mr.set(this, (0, vr.m)(this, DS, !1)), this._refractionIntensityTexture = ((0, vr.m)(this, dS), null), Nr.set(this, (0, vr.m)(this, sS, null)), this._translucencyIntensityTexture = ((0, vr.m)(this, uS), null), Ur.set(this, (0, vr.m)(this, rQ, null)), this.translucencyColor = ((0, vr.m)(this, SQ), (0, vr.m)(this, QQ, null)), this._translucencyColorTexture = ((0, vr.m)(this, ZQ), null), tr.set(this, (0, vr.m)(this, WQ, null)), this._useGltfStyleTextures = ((0, vr.m)(this, aQ), !0), hr.set(this, (0, vr.m)(this, jQ, !0)), this.applyAlbedoAfterSubSurface = ((0, vr.m)(this, IQ), (0, vr.m)(this, fQ, rr.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, vr.m)(this, EQ), (0, vr.m)(this, pQ, rr.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, vr.m)(this, xQ), this._scene = zr.eC(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = zr._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = zr._dirtyCallbacks[32]
        }
        isReadyForSubMesh(rr, Sr) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (rr._areTexturesDirty && Sr.texturesEnabled) {
            if (this._thicknessTexture && Dr.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && Dr.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && Dr.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && Dr.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const rr = this._getRefractionTexture(Sr);
            if (rr && Dr.d.RefractionTextureEnabled && !rr.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(rr, Sr) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return rr.SUBSURFACE = !1, rr.SS_DISPERSION = !1, rr.SS_TRANSLUCENCY = !1, rr.SS_SCATTERING = !1, rr.SS_REFRACTION = !1, rr.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, rr.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, rr.SS_THICKNESSANDMASK_TEXTURE = !1, rr.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, rr.SS_HAS_THICKNESS = !1, rr.SS_REFRACTIONINTENSITY_TEXTURE = !1, rr.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, rr.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, rr.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, rr.SS_REFRACTIONMAP_3D = !1, rr.SS_REFRACTIONMAP_OPPOSITEZ = !1, rr.SS_LODINREFRACTIONALPHA = !1, rr.SS_GAMMAREFRACTION = !1, rr.SS_RGBDREFRACTION = !1, rr.SS_LINEARSPECULARREFRACTION = !1, rr.SS_LINKREFRACTIONTOTRANSPARENCY = !1, rr.SS_ALBEDOFORREFRACTIONTINT = !1, rr.SS_ALBEDOFORTRANSLUCENCYTINT = !1, rr.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, rr.SS_USE_THICKNESS_AS_DEPTH = !1, rr.SS_USE_GLTF_TEXTURES = !1, rr.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, rr.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, rr.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(rr.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (rr._areTexturesDirty) {
            if (rr.SUBSURFACE = !0, rr.SS_DISPERSION = this._isDispersionEnabled, rr.SS_TRANSLUCENCY = this._isTranslucencyEnabled, rr.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, rr.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, rr.SS_SCATTERING = this._isScatteringEnabled, rr.SS_THICKNESSANDMASK_TEXTURE = !1, rr.SS_REFRACTIONINTENSITY_TEXTURE = !1, rr.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, rr.SS_HAS_THICKNESS = !1, rr.SS_USE_GLTF_TEXTURES = !1, rr.SS_REFRACTION = !1, rr.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, rr.SS_REFRACTIONMAP_3D = !1, rr.SS_GAMMAREFRACTION = !1, rr.SS_RGBDREFRACTION = !1, rr.SS_LINEARSPECULARREFRACTION = !1, rr.SS_REFRACTIONMAP_OPPOSITEZ = !1, rr.SS_LODINREFRACTIONALPHA = !1, rr.SS_LINKREFRACTIONTOTRANSPARENCY = !1, rr.SS_ALBEDOFORREFRACTIONTINT = !1, rr.SS_ALBEDOFORTRANSLUCENCYTINT = !1, rr.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, rr.SS_USE_THICKNESS_AS_DEPTH = !1, rr.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, rr.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, rr._areTexturesDirty && Sr.texturesEnabled && (this._thicknessTexture && Dr.d.ThicknessTextureEnabled && (0, sr.Y)(this._thicknessTexture, rr, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && Dr.d.RefractionIntensityTextureEnabled && (0, sr.Y)(this._refractionIntensityTexture, rr, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && Dr.d.TranslucencyIntensityTextureEnabled && (0, sr.Y)(this._translucencyIntensityTexture, rr, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && Dr.d.TranslucencyColorTextureEnabled && ((0, sr.Y)(this._translucencyColorTexture, rr, "SS_TRANSLUCENCYCOLOR_TEXTURE"), rr.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), rr.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, rr.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, rr.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, rr.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && Sr.texturesEnabled) {
              const Qr = this._getRefractionTexture(Sr);
              Qr && Dr.d.RefractionTextureEnabled && (rr.SS_REFRACTION = !0, rr.SS_REFRACTIONMAP_3D = Qr.isCube, rr.SS_GAMMAREFRACTION = Qr.gammaSpace, rr.SS_RGBDREFRACTION = Qr.isRGBD, rr.SS_LINEARSPECULARREFRACTION = Qr.linearSpecularLOD, rr.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && Qr.isCube ? !Qr.invertZ : Qr.invertZ, rr.SS_LODINREFRACTIONALPHA = Qr.lodLevelInAlpha, rr.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, rr.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, rr.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = Qr.isCube && Qr.boundingBoxSize, rr.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (rr.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(rr, Sr, Qr, Zr) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) rr.updateFloat2("vThicknessParam", 0, 0);
            else {
              Zr.getRenderingMesh().getWorldMatrix().decompose(Gr.n.kU[0]);
              const Sr = Math.max(Math.abs(Gr.n.kU[0].x), Math.abs(Gr.n.kU[0].y), Math.abs(Gr.n.kU[0].z));
              rr.updateFloat2("vThicknessParam", this.minimumThickness * Sr, (this.maximumThickness - this.minimumThickness) * Sr)
            }
        }
        bindForSubMesh(rr, Sr, Qr, Zr) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Wr = Zr.materialDefines,
            ar = this._material.isFrozen,
            jr = this._material.realTimeFiltering,
            Ir = Wr.LODBASEDMICROSFURACE,
            fr = this._getRefractionTexture(Sr);
          if (!rr.useUbo || !ar || !rr.isSync) {
            if (this._thicknessTexture && Dr.d.ThicknessTextureEnabled && (rr.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, sr.B)(this._thicknessTexture, rr, "thickness")), this._refractionIntensityTexture && Dr.d.RefractionIntensityTextureEnabled && Wr.SS_REFRACTIONINTENSITY_TEXTURE && (rr.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, sr.B)(this._refractionIntensityTexture, rr, "refractionIntensity")), this._translucencyColorTexture && Dr.d.TranslucencyColorTextureEnabled && Wr.SS_TRANSLUCENCYCOLOR_TEXTURE && (rr.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, sr.B)(this._translucencyColorTexture, rr, "translucencyColor")), this._translucencyIntensityTexture && Dr.d.TranslucencyIntensityTextureEnabled && Wr.SS_TRANSLUCENCYINTENSITY_TEXTURE && (rr.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, sr.B)(this._translucencyIntensityTexture, rr, "translucencyIntensity")), fr && Dr.d.RefractionTextureEnabled) {
              rr.hrr("refractionMatrix", fr.getRefractionTextureMatrix());
              let Sr = 1;
              fr.isCube || fr.depth && (Sr = fr.depth);
              const Qr = fr.getSize().width,
                Zr = this.volumeIndexOfRefraction;
              if (rr.updateFloat4("vRefractionInfos", fr.level, 1 / Zr, Sr, this._invertRefractionY ? -1 : 1), rr.updateFloat4("vRefractionMicrosurfaceInfos", Qr, fr.lodGenerationScale, fr.lodGenerationOffset, 1 / this.indexOfRefraction), jr && rr.updateFloat2("vRefractionFilteringInfo", Qr, Math.log2(Qr)), fr.boundingBoxSize) {
                const Sr = fr;
                rr.updateVector3("vRefractionPosition", Sr.boundingBoxPosition), rr.updateVector3("vRefractionSize", Sr.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && rr.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), rr.updateColor3("vDiffusionDistance", this.diffusionDistance), rr.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), rr.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), rr.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), rr.updateFloat("dispersion", this.dispersion)
          }
          Sr.texturesEnabled && (this._thicknessTexture && Dr.d.ThicknessTextureEnabled && rr.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && Dr.d.RefractionIntensityTextureEnabled && Wr.SS_REFRACTIONINTENSITY_TEXTURE && rr.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && Dr.d.TranslucencyIntensityTextureEnabled && Wr.SS_TRANSLUCENCYINTENSITY_TEXTURE && rr.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && Dr.d.TranslucencyColorTextureEnabled && Wr.SS_TRANSLUCENCYCOLOR_TEXTURE && rr.setTexture("translucencyColorSampler", this._translucencyColorTexture), fr && Dr.d.RefractionTextureEnabled && (Ir ? rr.setTexture("refractionSampler", fr) : (rr.setTexture("refractionSampler", fr._lodTextureMid || fr), rr.setTexture("refractionSamplerLow", fr._lodTextureLow || fr), rr.setTexture("refractionSamplerHigh", fr._lodTextureHigh || fr))))
        }
        _getRefractionTexture(rr) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? rr.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(rr) {
          Dr.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && rr.push(this._refractionTexture)
        }
        hasTexture(rr) {
          return this._thicknessTexture === rr || (this._refractionTexture === rr || (this._refractionIntensityTexture === rr || (this._translucencyIntensityTexture === rr || this._translucencyColorTexture === rr)))
        }
        hasRenderTargetTextures() {
          return !!(Dr.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(rr) {
          this._thicknessTexture && rr.push(this._thicknessTexture), this._refractionTexture && rr.push(this._refractionTexture), this._refractionIntensityTexture && rr.push(this._refractionIntensityTexture), this._translucencyColorTexture && rr.push(this._translucencyColorTexture), this._translucencyIntensityTexture && rr.push(this._translucencyIntensityTexture)
        }
        getAnimatables(rr) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && rr.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && rr.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && rr.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && rr.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && rr.push(this._translucencyIntensityTexture)
        }
        dispose(rr) {
          rr && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(rr, Sr, Qr) {
          return rr.SS_SCATTERING && Sr.addFallback(Qr++, "SS_SCATTERING"), rr.SS_TRANSLUCENCY && Sr.addFallback(Qr++, "SS_TRANSLUCENCY"), Qr
        }
        getSamplers(rr) {
          rr.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, Sr = new WeakMap, Qr = new WeakMap, Zr = new WeakMap, Wr = new WeakMap, ar = new WeakMap, jr = new WeakMap, Ir = new WeakMap, fr = new WeakMap, Er = new WeakMap, pr = new WeakMap, xr = new WeakMap, mr = new WeakMap, Nr = new WeakMap, Ur = new WeakMap, tr = new WeakMap, hr = new WeakMap, (() => {
        const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(QS[Symbol.metadata] ?? null) : void 0;
        zr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], Yr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], nr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], er = [(0, Or.G)(), (0, Or.f)("_markScenePrePassDirty")], Kr = [(0, Or.G)()], yr = [(0, Or.G)()], Br = [(0, Or.G)()], Tr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], Lr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], lr = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], Xr = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], Pr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], Hr = [(0, Or.G)()], qr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], Rr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], gr = [(0, Or.G)()], Cr = [(0, Or.G)()], Mr = [(0, Or.G)()], kr = [(0, Or.n)()], Ar = [(0, Or.G)()], ir = [(0, Or.G)()], wr = [(0, Or.n)()], cr = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], or = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], br = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], Jr = [(0, Or.n)()], dr = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], ur = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], rS = [(0, Or.G)()], SS = [(0, Or.G)()], (0, vr.k)(rr, null, zr, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "isRefractionEnabled" in rr,
            get: rr => rr.isRefractionEnabled,
            set: (rr, Sr) => {
              rr.isRefractionEnabled = Sr
            }
          },
          metadata: Sr
        }, ZS, WS), (0, vr.k)(rr, null, Yr, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "isTranslucencyEnabled" in rr,
            get: rr => rr.isTranslucencyEnabled,
            set: (rr, Sr) => {
              rr.isTranslucencyEnabled = Sr
            }
          },
          metadata: Sr
        }, aS, jS), (0, vr.k)(rr, null, nr, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "isDispersionEnabled" in rr,
            get: rr => rr.isDispersionEnabled,
            set: (rr, Sr) => {
              rr.isDispersionEnabled = Sr
            }
          },
          metadata: Sr
        }, fS, ES), (0, vr.k)(rr, null, er, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "isScatteringEnabled" in rr,
            get: rr => rr.isScatteringEnabled,
            set: (rr, Sr) => {
              rr.isScatteringEnabled = Sr
            }
          },
          metadata: Sr
        }, pS, xS), (0, vr.k)(rr, null, Tr, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: rr => "useAlbedoToTintRefraction" in rr,
            get: rr => rr.useAlbedoToTintRefraction,
            set: (rr, Sr) => {
              rr.useAlbedoToTintRefraction = Sr
            }
          },
          metadata: Sr
        }, YS, nS), (0, vr.k)(rr, null, Lr, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: rr => "useAlbedoToTintTranslucency" in rr,
            get: rr => rr.useAlbedoToTintTranslucency,
            set: (rr, Sr) => {
              rr.useAlbedoToTintTranslucency = Sr
            }
          },
          metadata: Sr
        }, eS, KS), (0, vr.k)(rr, null, lr, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "thicknessTexture" in rr,
            get: rr => rr.thicknessTexture,
            set: (rr, Sr) => {
              rr.thicknessTexture = Sr
            }
          },
          metadata: Sr
        }, yS, BS), (0, vr.k)(rr, null, Xr, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "refractionTexture" in rr,
            get: rr => rr.refractionTexture,
            set: (rr, Sr) => {
              rr.refractionTexture = Sr
            }
          },
          metadata: Sr
        }, TS, vS), (0, vr.k)(rr, null, Pr, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: rr => "indexOfRefraction" in rr,
            get: rr => rr.indexOfRefraction,
            set: (rr, Sr) => {
              rr.indexOfRefraction = Sr
            }
          },
          metadata: Sr
        }, OS, LS), (0, vr.k)(rr, null, qr, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: rr => "invertRefractionY" in rr,
            get: rr => rr.invertRefractionY,
            set: (rr, Sr) => {
              rr.invertRefractionY = Sr
            }
          },
          metadata: Sr
        }, PS, HS), (0, vr.k)(rr, null, Rr, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: rr => "linkRefractionWithTransparency" in rr,
            get: rr => rr.linkRefractionWithTransparency,
            set: (rr, Sr) => {
              rr.linkRefractionWithTransparency = Sr
            }
          },
          metadata: Sr
        }, qS, RS), (0, vr.k)(rr, null, cr, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "useMaskFromThicknessTexture" in rr,
            get: rr => rr.useMaskFromThicknessTexture,
            set: (rr, Sr) => {
              rr.useMaskFromThicknessTexture = Sr
            }
          },
          metadata: Sr
        }, DS, dS), (0, vr.k)(rr, null, or, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "refractionIntensityTexture" in rr,
            get: rr => rr.refractionIntensityTexture,
            set: (rr, Sr) => {
              rr.refractionIntensityTexture = Sr
            }
          },
          metadata: Sr
        }, sS, uS), (0, vr.k)(rr, null, br, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "translucencyIntensityTexture" in rr,
            get: rr => rr.translucencyIntensityTexture,
            set: (rr, Sr) => {
              rr.translucencyIntensityTexture = Sr
            }
          },
          metadata: Sr
        }, rQ, SQ), (0, vr.k)(rr, null, dr, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "translucencyColorTexture" in rr,
            get: rr => rr.translucencyColorTexture,
            set: (rr, Sr) => {
              rr.translucencyColorTexture = Sr
            }
          },
          metadata: Sr
        }, WQ, aQ), (0, vr.k)(rr, null, ur, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: rr => "useGltfStyleTextures" in rr,
            get: rr => rr.useGltfStyleTextures,
            set: (rr, Sr) => {
              rr.useGltfStyleTextures = Sr
            }
          },
          metadata: Sr
        }, jQ, IQ), (0, vr.k)(null, null, Kr, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: rr => "_scatteringDiffusionProfileIndex" in rr,
            get: rr => rr._scatteringDiffusionProfileIndex,
            set: (rr, Sr) => {
              rr._scatteringDiffusionProfileIndex = Sr
            }
          },
          metadata: Sr
        }, mS, NS), (0, vr.k)(null, null, yr, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "refractionIntensity" in rr,
            get: rr => rr.refractionIntensity,
            set: (rr, Sr) => {
              rr.refractionIntensity = Sr
            }
          },
          metadata: Sr
        }, US, tS), (0, vr.k)(null, null, Br, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "translucencyIntensity" in rr,
            get: rr => rr.translucencyIntensity,
            set: (rr, Sr) => {
              rr.translucencyIntensity = Sr
            }
          },
          metadata: Sr
        }, hS, zS), (0, vr.k)(null, null, Hr, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: rr => "_volumeIndexOfRefraction" in rr,
            get: rr => rr._volumeIndexOfRefraction,
            set: (rr, Sr) => {
              rr._volumeIndexOfRefraction = Sr
            }
          },
          metadata: Sr
        }, lS, XS), (0, vr.k)(null, null, gr, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: rr => "minimumThickness" in rr,
            get: rr => rr.minimumThickness,
            set: (rr, Sr) => {
              rr.minimumThickness = Sr
            }
          },
          metadata: Sr
        }, gS, CS), (0, vr.k)(null, null, Cr, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: rr => "maximumThickness" in rr,
            get: rr => rr.maximumThickness,
            set: (rr, Sr) => {
              rr.maximumThickness = Sr
            }
          },
          metadata: Sr
        }, MS, GS), (0, vr.k)(null, null, Mr, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: rr => "useThicknessAsDepth" in rr,
            get: rr => rr.useThicknessAsDepth,
            set: (rr, Sr) => {
              rr.useThicknessAsDepth = Sr
            }
          },
          metadata: Sr
        }, kS, AS), (0, vr.k)(null, null, kr, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: rr => "tintColor" in rr,
            get: rr => rr.tintColor,
            set: (rr, Sr) => {
              rr.tintColor = Sr
            }
          },
          metadata: Sr
        }, VS, iS), (0, vr.k)(null, null, Ar, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: rr => "tintColorAtDistance" in rr,
            get: rr => rr.tintColorAtDistance,
            set: (rr, Sr) => {
              rr.tintColorAtDistance = Sr
            }
          },
          metadata: Sr
        }, wS, cS), (0, vr.k)(null, null, ir, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: rr => "dispersion" in rr,
            get: rr => rr.dispersion,
            set: (rr, Sr) => {
              rr.dispersion = Sr
            }
          },
          metadata: Sr
        }, FS, oS), (0, vr.k)(null, null, wr, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: rr => "diffusionDistance" in rr,
            get: rr => rr.diffusionDistance,
            set: (rr, Sr) => {
              rr.diffusionDistance = Sr
            }
          },
          metadata: Sr
        }, bS, JS), (0, vr.k)(null, null, Jr, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: rr => "translucencyColor" in rr,
            get: rr => rr.translucencyColor,
            set: (rr, Sr) => {
              rr.translucencyColor = Sr
            }
          },
          metadata: Sr
        }, QQ, ZQ), (0, vr.k)(null, null, rS, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: rr => "applyAlbedoAfterSubSurface" in rr,
            get: rr => rr.applyAlbedoAfterSubSurface,
            set: (rr, Sr) => {
              rr.applyAlbedoAfterSubSurface = Sr
            }
          },
          metadata: Sr
        }, fQ, EQ), (0, vr.k)(null, null, SS, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: rr => "legacyTranslucency" in rr,
            get: rr => rr.legacyTranslucency,
            set: (rr, Sr) => {
              rr.legacyTranslucency = Sr
            }
          },
          metadata: Sr
        }, pQ, xQ), Sr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sr
        })
      })(), rr.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, rr.DEFAULT_LEGACY_TRANSLUCENCY = !1, rr
    })();
    var ES = Qr(42198),
      pS = Qr(42174),
      xS = Qr(42206),
      mS = Qr(42211),
      NS = Qr(42215),
      US = Qr(42219),
      tS = Qr(42227),
      hS = Qr(42232),
      zS = Qr(41769);
    const YS = {
      effect: null,
      subMesh: null
    };
    class nS extends((0, tS.e)((0, US.c)(Ar.b))) {}
    class eS extends((0, or.g)(nS)) {
      constructor(rr) {
        super(rr), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class KS extends((0, hS.b)(Jr.b)) {}
    let yS = (() => {
      var rr, Sr;
      let Zr, Wr = KS,
        jr = [],
        Ir = [];
      return rr = class extends Wr {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(rr) {
          this._realTimeFiltering = rr, this.BQr(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(rr) {
          this._realTimeFilteringQuality = rr, this.BQr(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, vr.e)(this, Sr, "f")
        }
        set debugMode(rr) {
          (0, vr.i)(this, Sr, rr, "f")
        }
        constructor(Qr, Zr) {
          super(Qr, Zr, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || rr.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Gr.x(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = rr.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = Fr.e.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new Fr.e(0, 0, 0), this._albedoColor = new Fr.e(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new Fr.e(1, 1, 1), this._reflectionColor = new Fr.e(1, 1, 1), this._emissiveColor = new Fr.e(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = rr.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new lr.h(16), this._globalAmbientColor = new Fr.e(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Sr.set(this, (0, vr.m)(this, jr, 0)), this.debugLimit = ((0, vr.m)(this, Ir), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new wr(this), this.clearCoat = new rS(this), this.iridescence = new QS(this), this.anisotropy = new WS(this), this.sheen = new jS(this), this.subSurface = new fS(this), this.detailMap = new ES.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Dr.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Rr(this.eC()), this.prePassConfiguration = new cr.b
        }
        get hasRenderTargetTextures() {
          return !!(Dr.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === rr.PBRMATERIAL_OPAQUE || this._transparencyMode === rr.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === rr.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== rr.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(rr, Sr, Qr) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Zr = Sr._drawWrapper;
          if (Zr.effect && this.isFrozen && Zr._wasPreviouslyReady && Zr._wasPreviouslyUsingInstances === Qr) return !0;
          Sr.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Sr.materialDefines = new eS(this._eventInfo.defineNames));
          const Wr = Sr.materialDefines;
          if (this._isReadyForSubMesh(Sr)) return !0;
          const ar = this.eC(),
            jr = ar.MU();
          if (Wr._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, ar.texturesEnabled)) {
            if (this._albedoTexture && Dr.d.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && Dr.d.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && Dr.d.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && Dr.d.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && Dr.d.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const rr = this._getReflectionTexture();
            if (rr && Dr.d.ReflectionTextureEnabled) {
              if (!rr.isReadyOrNotBlocking()) return !1;
              if (rr.irradianceTexture) {
                if (!rr.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!rr.sphericalPolynomial && rr.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && Dr.d.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && Dr.d.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (Dr.d.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (jr.getCaps().standardDerivatives && this._bumpTexture && Dr.d.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && Dr.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Wr, this._eventInfo.subMesh = Sr, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Wr._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Wr.AREALIGHTUSED || Wr.CLUSTLIGHT_BATCH)
            for (let xr = 0; xr < rr.lightSources.length; xr++)
              if (!rr.lightSources[xr]._isReady()) return !1;
          if (jr.getCaps().standardDerivatives || rr.isVerticesDataPresent(kr.j.NormalKind) || (rr.createNormals(!0), Lr.c.Warn("PBRMaterial: Normals have been created for the mesh: " + rr.name)), !(0, sr.b)(ar, rr, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const Ir = Sr.effect,
            fr = Wr._areLightsDisposed,
            Er = this._prepareEffect(rr, Sr.getRenderingMesh(), Wr, this.onCompiled, this.onError, Qr, null);
          let pr = !1;
          if (Er)
            if (this._onEffectCreatedObservable && (YS.effect = Er, YS.subMesh = Sr, this._onEffectCreatedObservable.notifyObservers(YS)), this.allowShaderHotSwapping && Ir && !Er.isReady()) {
              if (Wr.markAsUnprocessed(), pr = this.isFrozen, fr) return Wr._areLightsDisposed = !0, !1
            } else ar.resetCachedMaterial(), Sr.setEffect(Er, Wr, this._materialContext);
          return !(!Sr.effect || !Sr.effect.isReady()) && (Wr._renderId = ar.getRenderId(), Zr._wasPreviouslyReady = !pr, Zr._wasPreviouslyUsingInstances = !!Qr, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(Sr, Qr, Zr) {
          let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            Ir = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(Sr, Qr, Zr, jr, Ir), !Zr.isDirty) return null;
          Zr.markAsProcessed();
          const fr = this.eC().MU(),
            Er = new dr.e;
          let pr = 0;
          Zr.USESPHERICALINVERTEX && Er.addFallback(pr++, "USESPHERICALINVERTEX"), Zr.FOG && Er.addFallback(pr, "FOG"), Zr.SPECULARAA && Er.addFallback(pr, "SPECULARAA"), Zr.POINTSIZE && Er.addFallback(pr, "POINTSIZE"), Zr.LOGARITHMICDEPTH && Er.addFallback(pr, "LOGARITHMICDEPTH"), Zr.PARALLAX && Er.addFallback(pr, "PARALLAX"), Zr.PARALLAX_RHS && Er.addFallback(pr, "PARALLAX_RHS"), Zr.PARALLAXOCCLUSION && Er.addFallback(pr++, "PARALLAXOCCLUSION"), Zr.ENVIRONMENTBRDF && Er.addFallback(pr++, "ENVIRONMENTBRDF"), Zr.TANGENT && Er.addFallback(pr++, "TANGENT"), Zr.BUMP && Er.addFallback(pr++, "BUMP"), pr = (0, sr.C)(Zr, Er, this._maxSimultaneousLights, pr), Zr.SPECULARTERM && Er.addFallback(pr++, "SPECULARTERM"), Zr.USESPHERICALFROMREFLECTIONMAP && Er.addFallback(pr++, "USESPHERICALFROMREFLECTIONMAP"), Zr.USEIRRADIANCEMAP && Er.addFallback(pr++, "USEIRRADIANCEMAP"), Zr.LIGHTMAP && Er.addFallback(pr++, "LIGHTMAP"), Zr.NORMAL && Er.addFallback(pr++, "NORMAL"), Zr.AMBIENT && Er.addFallback(pr++, "AMBIENT"), Zr.EMISSIVE && Er.addFallback(pr++, "EMISSIVE"), Zr.VERTEXCOLOR && Er.addFallback(pr++, "VERTEXCOLOR"), Zr.MORPHTARGETS && Er.addFallback(pr++, "MORPHTARGETS"), Zr.MULTIVIEW && Er.addFallback(0, "MULTIVIEW");
          const xr = [kr.j.PositionKind];
          Zr.NORMAL && xr.push(kr.j.NormalKind), Zr.TANGENT && xr.push(kr.j.TangentKind);
          for (let rr = 1; rr <= 6; ++rr) Zr["UV" + rr] && xr.push(`uv${1===rr?"":rr}`);
          Zr.VERTEXCOLOR && xr.push(kr.j.ColorKind), (0, sr.G)(xr, Sr, Zr, Er), (0, sr.I)(xr, Zr), (0, sr.K)(xr, Sr, Zr), (0, sr.E)(xr, Sr, Zr);
          let mr = "pbr";
          const Nr = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            Ur = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, sr.mb)(Nr, Ur, !0);
          const tr = ["Material", "Scene", "Mesh"],
            hr = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Zr.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Er, this._eventInfo.fallbackRank = pr, this._eventInfo.defines = Zr, this._eventInfo.uniforms = Nr, this._eventInfo.attributes = xr, this._eventInfo.samplers = Ur, this._eventInfo.uniformBuffersNames = tr, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Sr, this._eventInfo.indexParameters = hr, this._callbackPluginEventGeneric(128, this._eventInfo), NS.b.AddUniformsAndSamplers(Nr, Ur), cr.b.AddUniforms(Nr), cr.b.AddSamplers(Ur), (0, pS.c)(Nr), this._useVertexPulling) {
            const rr = Qr?.geometry;
            rr && (this._vertexPullingMetadata = (0, xS.f)(rr), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((rr, Sr) => {
              Nr.push(`vp_${Sr}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          br.b && (br.b.PrepareUniforms(Nr, Zr), br.b.PrepareSamplers(Ur, Zr)), (0, sr.nb)({
            uniformsNames: Nr,
            uniformBuffersNames: tr,
            samplers: Ur,
            defines: Zr,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const zr = {};
          this.customShaderNameResolve && (mr = this.customShaderNameResolve(mr, Nr, tr, Ur, Zr, xr, zr));
          const Yr = Zr.toString(),
            nr = fr.createEffect(mr, {
              attributes: xr,
              uniformsNames: Nr,
              uniformBuffersNames: tr,
              samplers: Ur,
              defines: Yr,
              fallbacks: Er,
              onCompiled: Wr,
              onError: ar,
              indexParameters: hr,
              processFinalCode: zr.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Zr.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: rr._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, fr);
          return this._eventInfo.customCode = void 0, nr
        }
        _prepareDefines(Sr, Qr, Zr) {
          let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const jr = Qr.hasThinInstances,
            Ir = this.eC(),
            fr = Ir.MU();
          (0, sr.W)(Ir, Sr, Zr, !0, this._maxSimultaneousLights, this._disableLighting), Zr._needNormals = !0, (0, sr.ab)(Ir, Zr);
          const Er = this.needAlphaBlendingForMesh(Sr) && this.eC().useOrderIndependentTransparency;
          if ((0, sr.fb)(Ir, Zr, this.canRenderToMRT && !Er), (0, sr.db)(Ir, Zr, Er), NS.b.PrepareDefines(fr.currentRenderPassId, Sr, Zr), Zr.METALLICWORKFLOW = this.isMetallicWorkflow(), Zr._areTexturesDirty) {
            Zr._needUVs = !1;
            for (let rr = 1; rr <= 6; ++rr) Zr["MAINUV" + rr] = !1;
            if (Ir.texturesEnabled) {
              Zr.ALBEDODIRECTUV = 0, Zr.BASE_WEIGHTDIRECTUV = 0, Zr.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Zr.AMBIENTDIRECTUV = 0, Zr.OPACITYDIRECTUV = 0, Zr.EMISSIVEDIRECTUV = 0, Zr.REFLECTIVITYDIRECTUV = 0, Zr.MICROSURFACEMAPDIRECTUV = 0, Zr.METALLIC_REFLECTANCEDIRECTUV = 0, Zr.REFLECTANCEDIRECTUV = 0, Zr.BUMPDIRECTUV = 0, Zr.LIGHTMAPDIRECTUV = 0, fr.getCaps().textureLOD && (Zr.LODBASEDMICROSFURACE = !0), this._albedoTexture && Dr.d.DiffuseTextureEnabled ? ((0, sr.Y)(this._albedoTexture, Zr, "ALBEDO"), Zr.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Zr.ALBEDO = !1, this._baseWeightTexture && Dr.d.BaseWeightTextureEnabled ? (0, sr.Y)(this._baseWeightTexture, Zr, "BASE_WEIGHT") : Zr.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && Dr.d.BaseDiffuseRoughnessTextureEnabled ? (0, sr.Y)(this._baseDiffuseRoughnessTexture, Zr, "BASE_DIFFUSE_ROUGHNESS") : Zr.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && Dr.d.AmbientTextureEnabled ? ((0, sr.Y)(this._ambientTexture, Zr, "AMBIENT"), Zr.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Zr.AMBIENT = !1, this._opacityTexture && Dr.d.OpacityTextureEnabled ? ((0, sr.Y)(this._opacityTexture, Zr, "OPACITY"), Zr.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Zr.OPACITY = !1;
              const rr = this._getReflectionTexture(),
                Sr = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || fr.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, sr.U)(Ir, rr, Zr, this.realTimeFiltering, this.realTimeFilteringQuality, !Sr), this._lightmapTexture && Dr.d.LightmapTextureEnabled ? ((0, sr.Y)(this._lightmapTexture, Zr, "LIGHTMAP"), Zr.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Zr.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Zr.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Zr.LIGHTMAP = !1, this._emissiveTexture && Dr.d.EmissiveTextureEnabled ? ((0, sr.Y)(this._emissiveTexture, Zr, "EMISSIVE"), Zr.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Zr.EMISSIVE = !1, Dr.d.SpecularTextureEnabled ? (this._metallicTexture ? ((0, sr.Y)(this._metallicTexture, Zr, "REFLECTIVITY"), Zr.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Zr.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Zr.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Zr.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Zr.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, sr.Y)(this._reflectivityTexture, Zr, "REFLECTIVITY"), Zr.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Zr.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Zr.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Zr.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Zr.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, sr.Y)(this._metallicReflectanceTexture, Zr, "METALLIC_REFLECTANCE"), Zr.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Zr.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, sr.Y)(this._reflectanceTexture, Zr, "REFLECTANCE"), Zr.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Zr.REFLECTANCE = !1) : (Zr.METALLIC_REFLECTANCE = !1, Zr.REFLECTANCE = !1), this._microSurfaceTexture ? (0, sr.Y)(this._microSurfaceTexture, Zr, "MICROSURFACEMAP") : Zr.MICROSURFACEMAP = !1) : (Zr.REFLECTIVITY = !1, Zr.MICROSURFACEMAP = !1), fr.getCaps().standardDerivatives && this._bumpTexture && Dr.d.BumpTextureEnabled && !this._disableBumpMap ? ((0, sr.Y)(this._bumpTexture, Zr, "BUMP"), this._useParallax && this._albedoTexture && Dr.d.DiffuseTextureEnabled ? (Zr.PARALLAX = !0, Zr.PARALLAX_RHS = Ir.useRightHandedSystem, Zr.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Zr.PARALLAX = !1, Zr.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Zr.BUMP = !1, Zr.PARALLAX = !1, Zr.PARALLAX_RHS = !1, Zr.PARALLAXOCCLUSION = !1, Zr.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Dr.d.ReflectionTextureEnabled ? (Zr.ENVIRONMENTBRDF = !0, Zr.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Zr.ENVIRONMENTBRDF = !1, Zr.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Zr.ALPHAFROMALBEDO = !0 : Zr.ALPHAFROMALBEDO = !1
            }
            Zr.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === rr.LIGHTFALLOFF_STANDARD ? (Zr.USEPHYSICALLIGHTFALLOFF = !1, Zr.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === rr.LIGHTFALLOFF_GLTF ? (Zr.USEPHYSICALLIGHTFALLOFF = !1, Zr.USEGLTFLIGHTFALLOFF = !0) : (Zr.USEPHYSICALLIGHTFALLOFF = !0, Zr.USEGLTFLIGHTFALLOFF = !1), Zr.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Zr.TWOSIDEDLIGHTING = !0 : Zr.TWOSIDEDLIGHTING = !1, Zr.MIRRORED = !!Ir._mirroredCameraPosition, Zr.SPECULARAA = fr.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Zr._areTexturesDirty || Zr._areMiscDirty) && (Zr.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Zr.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Zr.ALPHABLEND = this.needAlphaBlendingForMesh(Sr), Zr.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Zr.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Zr._areTexturesDirty && (Zr.TEXTURE_REPETITION_MODE = fr.version > 1 || fr.isWebGPU ? this.textureRepetitionMode : 0), Zr._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Zr), Zr.FORCENORMALFORWARD = this._forceNormalForward, Zr.RADIANCEOCCLUSION = this._useRadianceOcclusion, Zr.HORIZONOCCLUSION = this._useHorizonOcclusion, Zr._areMiscDirty && ((0, sr.Z)(Sr, Ir, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Sr), Zr, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Qr, this._isVertexOutputInvariant), Zr.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Sr.isVerticesDataPresent(kr.j.NormalKind), Zr.DEBUGMODE = this._debugMode), (0, sr.Q)(Ir, fr, this, Zr, !!Wr, ar, jr), this._eventInfo.defines = Zr, this._eventInfo.mesh = Sr, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, sr.N)(Sr, Zr, !0, !0, !0, this._transparencyMode !== rr.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(rr, Sr, Qr) {
          const Zr = {
            clipPlane: !1,
            useInstances: !1,
            ...Qr
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const Qr = new eS(this._eventInfo.defineNames),
              Wr = this._prepareEffect(rr, rr, Qr, void 0, void 0, Zr.useInstances, Zr.clipPlane);
            this._onEffectCreatedObservable && (YS.effect = Wr, YS.subMesh = null, this._onEffectCreatedObservable.notifyObservers(YS)), Wr.isReady() ? Sr && Sr(this) : Wr.onCompileObservable.add((() => {
              Sr && Sr(this)
            }))
          })()
        }
        buildUniformLayout() {
          const rr = this._uniformBuffer;
          rr.addUniform("vAlbedoInfos", 2), rr.addUniform("vBaseWeightInfos", 2), rr.addUniform("vBaseDiffuseRoughnessInfos", 2), rr.addUniform("vAmbientInfos", 4), rr.addUniform("vOpacityInfos", 2), rr.addUniform("vEmissiveInfos", 2), rr.addUniform("vLightmapInfos", 2), rr.addUniform("vReflectivityInfos", 3), rr.addUniform("vMicroSurfaceSamplerInfos", 2), rr.addUniform("vBumpInfos", 3), rr.addUniform("albedoMatrix", 16), rr.addUniform("baseWeightMatrix", 16), rr.addUniform("baseDiffuseRoughnessMatrix", 16), rr.addUniform("ambientMatrix", 16), rr.addUniform("opacityMatrix", 16), rr.addUniform("emissiveMatrix", 16), rr.addUniform("lightmapMatrix", 16), rr.addUniform("reflectivityMatrix", 16), rr.addUniform("microSurfaceSamplerMatrix", 16), rr.addUniform("bumpMatrix", 16), rr.addUniform("vTangentSpaceParams", 2), rr.addUniform("vAlbedoColor", 4), rr.addUniform("baseWeight", 1), rr.addUniform("baseDiffuseRoughness", 1), rr.addUniform("vLightingIntensity", 4), rr.addUniform("pointSize", 1), rr.addUniform("vReflectivityColor", 4), rr.addUniform("vEmissiveColor", 3), rr.addUniform("vAmbientColor", 3), rr.addUniform("vDebugMode", 2), rr.addUniform("vMetallicReflectanceFactors", 4), rr.addUniform("vMetallicReflectanceInfos", 2), rr.addUniform("metallicReflectanceMatrix", 16), rr.addUniform("vReflectanceInfos", 2), rr.addUniform("reflectanceMatrix", 16), rr.addUniform("cameraInfo", 4), rr.addUniform("vTextureRepetitionHexTilingParams", 4), (0, sr.jb)(rr, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(rr, Sr, Qr) {
          const Zr = this.eC(),
            Wr = Qr.materialDefines;
          if (!Wr) return;
          const ar = Qr.effect;
          if (!ar) return;
          this._activeEffect = ar, Sr.getMeshUniformBuffer().bindToEffect(ar, "Mesh"), Sr.transferToEffect(rr);
          const jr = Zr.MU();
          this._uniformBuffer.bindToEffect(ar, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Zr, Sr, rr, this.isFrozen), NS.b.Bind(jr.currentRenderPassId, this._activeEffect, Sr, rr, this);
          const Ir = Zr.activeCamera;
          Ir ? this._uniformBuffer.updateFloat4("cameraInfo", Ir.minZ, Ir.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const fr = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", fr[0], fr[1], fr[2], fr[3]), this._eventInfo.subMesh = Qr, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Wr.OBJECTSPACE_NORMALMAP && (rr.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Er = this._mustRebind(Zr, ar, Qr, Sr.visibility),
            pr = jr._features.needToAlwaysBindUniformBuffers;
          (0, sr.c)(Sr, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, xS.d)(this._activeEffect, this._vertexPullingMetadata);
          let xr = null;
          const mr = this._uniformBuffer;
          if (Er) {
            if (this.bindViewProjection(ar), xr = this._getReflectionTexture(), !mr.useUbo || !this.isFrozen || !mr.isSync || Qr._drawWrapper._forceRebindOnNextCall) {
              if (Zr.texturesEnabled && (this._albedoTexture && Dr.d.DiffuseTextureEnabled && (mr.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, sr.B)(this._albedoTexture, mr, "albedo")), this._baseWeightTexture && Dr.d.BaseWeightTextureEnabled && (mr.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, sr.B)(this._baseWeightTexture, mr, "baseWeight")), this._baseDiffuseRoughnessTexture && Dr.d.BaseDiffuseRoughnessTextureEnabled && (mr.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, sr.B)(this._baseDiffuseRoughnessTexture, mr, "baseDiffuseRoughness")), this._ambientTexture && Dr.d.AmbientTextureEnabled && (mr.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, sr.B)(this._ambientTexture, mr, "ambient")), this._opacityTexture && Dr.d.OpacityTextureEnabled && (mr.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, sr.B)(this._opacityTexture, mr, "opacity")), this._emissiveTexture && Dr.d.EmissiveTextureEnabled && (mr.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, sr.B)(this._emissiveTexture, mr, "emissive")), this._lightmapTexture && Dr.d.LightmapTextureEnabled && (mr.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, sr.B)(this._lightmapTexture, mr, "lightmap")), Dr.d.SpecularTextureEnabled && (this._metallicTexture ? (mr.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, sr.B)(this._metallicTexture, mr, "reflectivity")) : this._reflectivityTexture && (mr.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, sr.B)(this._reflectivityTexture, mr, "reflectivity")), this._metallicReflectanceTexture && (mr.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, sr.B)(this._metallicReflectanceTexture, mr, "metallicReflectance")), this._reflectanceTexture && Wr.REFLECTANCE && (mr.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, sr.B)(this._reflectanceTexture, mr, "reflectance")), this._microSurfaceTexture && (mr.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, sr.B)(this._microSurfaceTexture, mr, "microSurfaceSampler"))), this._bumpTexture && jr.getCaps().standardDerivatives && Dr.d.BumpTextureEnabled && !this._disableBumpMap && (mr.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, sr.B)(this._bumpTexture, mr, "bump"), Zr._mirroredCameraPosition ? mr.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : mr.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, sr.f)(Zr, Wr, mr, this._reflectionColor, xr, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && mr.updateFloat("pointSize", this.pointSize), Wr.METALLICWORKFLOW) {
                Fr.l.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, Fr.l.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const rr = this.subSurface?._indexOfRefraction ?? 1.5,
                  Sr = 1;
                Fr.l.Color4[0].b = rr;
                const Qr = Math.pow((rr - Sr) / (rr + Sr), 2);
                Fr.l.Color4[0].a = Qr, mr.updateDirectColor4("vReflectivityColor", Fr.l.Color4[0]), mr.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else mr.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              mr.updateColor3("vEmissiveColor", Dr.d.EmissiveTextureEnabled ? this._emissiveColor : Fr.e.BlackReadOnly), !Wr.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? mr.updateColor4("vAlbedoColor", this._albedoColor, 1) : mr.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), mr.updateFloat("baseWeight", this._baseWeight), mr.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Zr.environmentIntensity, this._lightingInfos.w = this._specularIntensity, mr.updateVector4("vLightingIntensity", this._lightingInfos), Zr.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), mr.updateColor3("vAmbientColor", this._globalAmbientColor), mr.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Zr.texturesEnabled && (this._albedoTexture && Dr.d.DiffuseTextureEnabled && mr.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && Dr.d.BaseWeightTextureEnabled && mr.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && Dr.d.BaseDiffuseRoughnessTextureEnabled && mr.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && Dr.d.AmbientTextureEnabled && mr.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && Dr.d.OpacityTextureEnabled && mr.setTexture("opacitySampler", this._opacityTexture), (0, sr.i)(Zr, Wr, mr, xr, this.realTimeFiltering), Wr.ENVIRONMENTBRDF && mr.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && Dr.d.EmissiveTextureEnabled && mr.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && Dr.d.LightmapTextureEnabled && mr.setTexture("lightmapSampler", this._lightmapTexture), Dr.d.SpecularTextureEnabled && (this._metallicTexture ? mr.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && mr.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && mr.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Wr.REFLECTANCE && mr.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && mr.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && jr.getCaps().standardDerivatives && Dr.d.BumpTextureEnabled && !this._disableBumpMap && mr.setTexture("bumpSampler", this._bumpTexture)), this.eC().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Sr) && this.eC().depthPeelingRenderer.bind(ar), this._eventInfo.subMesh = Qr, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, pS.e)(this._activeEffect, this, Zr), this.bindEyePosition(ar)
          } else pr && (this._needToBindSceneUbo = !0);
          !Er && this.isFrozen && !pr || !Zr.lightsEnabled || this._disableLighting || (0, sr.m)(Zr, Sr, this._activeEffect, Wr, this._maxSimultaneousLights), !Er && this.isFrozen || ((Zr.fogEnabled && Sr.applyFog && Zr.fogMode !== Mr.f.FOGMODE_NONE || xr || this.subSurface.refractionTexture || Sr.receiveShadows || Wr.PREPASS || Wr.CLUSTLIGHT_BATCH) && this.bindView(ar), (0, sr.d)(Zr, Sr, this._activeEffect, !0), Wr.NUM_MORPH_INFLUENCERS && (0, sr.t)(Sr, this._activeEffect), Wr.BAKED_VERTEX_ANIMATION_TEXTURE && Sr.bakedVertexAnimationManager?.bind(ar, Wr.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, sr.q)(Wr, this._activeEffect, Zr)), this._afterBind(Sr, this._activeEffect, Qr), mr.update()
        }
        getAnimatables() {
          const rr = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && rr.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && rr.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && rr.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && rr.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && rr.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && rr.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && rr.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? rr.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && rr.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && rr.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && rr.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && rr.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && rr.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && rr.push(this._microSurfaceTexture), rr
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.eC().environmentTexture
        }
        getActiveTextures() {
          const rr = super.getActiveTextures();
          return this._albedoTexture && rr.push(this._albedoTexture), this._baseWeightTexture && rr.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && rr.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && rr.push(this._ambientTexture), this._opacityTexture && rr.push(this._opacityTexture), this._reflectionTexture && rr.push(this._reflectionTexture), this._emissiveTexture && rr.push(this._emissiveTexture), this._reflectivityTexture && rr.push(this._reflectivityTexture), this._metallicTexture && rr.push(this._metallicTexture), this._metallicReflectanceTexture && rr.push(this._metallicReflectanceTexture), this._reflectanceTexture && rr.push(this._reflectanceTexture), this._microSurfaceTexture && rr.push(this._microSurfaceTexture), this._bumpTexture && rr.push(this._bumpTexture), this._lightmapTexture && rr.push(this._lightmapTexture), rr
        }
        hasTexture(rr) {
          return !!super.hasTexture(rr) || (this._albedoTexture === rr || (this._baseWeightTexture === rr || (this._baseDiffuseRoughnessTexture === rr || (this._ambientTexture === rr || (this._opacityTexture === rr || (this._reflectionTexture === rr || (this._emissiveTexture === rr || (this._reflectivityTexture === rr || (this._metallicTexture === rr || (this._metallicReflectanceTexture === rr || (this._reflectanceTexture === rr || (this._microSurfaceTexture === rr || (this._bumpTexture === rr || this._lightmapTexture === rr)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const rr = this.eC().enableSubSurfaceForPrePass();
          return rr && (rr.enabled = !0), !0
        }
        dispose(rr, Sr) {
          this._breakShaderLoadedCheck = !0, Sr && (this._environmentBRDFTexture && this.eC().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(rr, Sr)
        }
      }, Sr = new WeakMap, (() => {
        const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(Wr[Symbol.metadata] ?? null) : void 0;
        Zr = [(0, Or.f)("_markAllSubMeshesAsMiscDirty")], (0, vr.k)(rr, null, Zr, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: rr => "debugMode" in rr,
            get: rr => rr.debugMode,
            set: (rr, Sr) => {
              rr.debugMode = Sr
            }
          },
          metadata: Sr
        }, jr, Ir), Sr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sr
        })
      })(), rr.PBRMATERIAL_OPAQUE = ar.d.MATERIAL_OPAQUE, rr.PBRMATERIAL_ALPHATEST = ar.d.MATERIAL_ALPHATEST, rr.PBRMATERIAL_ALPHABLEND = ar.d.MATERIAL_ALPHABLEND, rr.PBRMATERIAL_ALPHATESTANDBLEND = ar.d.MATERIAL_ALPHATESTANDBLEND, rr.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, rr.LIGHTFALLOFF_PHYSICAL = 0, rr.LIGHTFALLOFF_GLTF = 1, rr.LIGHTFALLOFF_STANDARD = 2, rr.ForceGLSL = !1, rr._ShaderLoader = new mS.b((() => [Promise.all([Qr.e(636), Qr.e(647)]).then((() => Qr(64862))), Promise.all([Qr.e(641), Qr.e(637), Qr.e(698), Qr.e(650), Qr.e(697)]).then((() => Qr(64879)))]), (() => [Promise.all([Qr.e(655), Qr.e(657), Qr.e(664)]).then((() => Qr(64943))), Promise.all([Qr.e(655), Qr.e(658), Qr.e(701), Qr.e(668), Qr.e(700)]).then((() => Qr(64957)))])), rr
    })();
    Object.getOwnPropertyDescriptor(yS.prototype, "decalMap") || Object.defineProperty(yS.prototype, "decalMap", (0, zS.g)("PBRBaseMaterial", "decalMap")), (0, Qr(54371).c)();
    var BS = Qr(41889);
    var TS = Qr(41950),
      vS = Qr(54357),
      OS = Qr(41731),
      LS = Qr(41737),
      lS = Qr(41827);
    let XS = !1;
    const PS = new Fr.f,
      HS = new Fr.f;
    class qS extends vS.b {
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
      set wrapU(rr) {
        if (this._textures)
          for (let Sr = 0; Sr < this._textures.length; Sr++) this._textures[Sr].wrapU = rr
      }
      set wrapV(rr) {
        if (this._textures)
          for (let Sr = 0; Sr < this._textures.length; Sr++) this._textures[Sr].wrapV = rr
      }
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = !(!Wr || !Wr.generateMipMaps) && Wr.generateMipMaps,
          Ir = !(!Wr || !Wr.generateDepthTexture) && Wr.generateDepthTexture,
          fr = Wr && Wr.depthTextureFormat ? Wr.depthTextureFormat : 15,
          Er = !Wr || void 0 === Wr.doNotChangeAspectRatio || Wr.doNotChangeAspectRatio,
          pr = !(!Wr || !Wr.drawOnlyOnFirstAttachmentByDefault) && Wr.drawOnlyOnFirstAttachmentByDefault;
        if (super(rr, Sr, Zr, jr, Er, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), XS || (XS = !0, LS.ThinEngine.prototype.restoreSingleAttachment = function() {
            const rr = this._gl;
            this.bindAttachments([rr.BACK])
          }, LS.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const rr = this._gl;
            this.bindAttachments([rr.COLOR_ATTACHMENT0])
          }, LS.ThinEngine.prototype.buildTextureLayout = function(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Qr = this._gl,
              Zr = [];
            if (Sr) Zr.push(Qr.BACK);
            else
              for (let Wr = 0; Wr < rr.length; Wr++) rr[Wr] ? Zr.push(Qr["COLOR_ATTACHMENT" + Wr]) : Zr.push(Qr.NONE);
            return Zr
          }, LS.ThinEngine.prototype.bindAttachments = function(rr) {
            const Sr = this._gl,
              Qr = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, Qr)
              for (let Zr = 0; Zr < rr.length; Zr++) rr[Zr] !== Sr.NONE && Qr[Zr] && (0, lS.e)(Qr[Zr].format) && (this._integerMRTAttachmentsMask |= 1 << Zr);
            Sr.drawBuffers(rr)
          }, LS.ThinEngine.prototype.clearAttachments = function(rr, Sr, Qr, Zr) {
            let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const jr = this._currentRenderTarget?.textures;
            let Ir = !1;
            if (Qr && rr && jr)
              for (let fr = 0; fr < Sr.length; fr++) {
                const rr = jr[fr];
                if (Sr[fr] !== this._gl.NONE && rr && (0, lS.e)(rr.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  Ir = !0;
                  break
                }
              }
            if (!Ir || !rr || !jr) return this.bindAttachments(Sr), void this.clear(rr, Qr, Zr, Wr, ar);
            this.bindAttachments(Sr), this._applyColorWriteState();
            for (let fr = 0; fr < Sr.length; fr++) {
              const Qr = jr[fr];
              if (Sr[fr] !== this._gl.NONE && Qr) {
                let Sr = rr;
                if ((0, lS.e)(Qr.format)) {
                  const Zr = (0, lS.g)(Qr.type);
                  Sr = Zr ? PS : HS;
                  const Wr = Zr ? 255 : 1;
                  Sr.r = Math.round(rr.r * Wr), Sr.g = Math.round(rr.g * Wr), Sr.b = Math.round(rr.b * Wr), Sr.a = Math.round(rr.a * Wr)
                }
                this._clearColorAttachment(fr, Sr, Qr.format, Qr.type)
              }
            }
            if (Zr || Wr) {
              const rr = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Zr, Wr, ar)
              } finally {
                this._integerMRTAttachmentsMask = rr
              }
            }
          }, LS.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Qr = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, rr.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(rr), Sr || this.generateMipMapsMultiFramebuffer(rr), Qr && (rr._MSAAFramebuffer && this._bindUnboundFramebuffer(rr._framebuffer), Qr()), this._bindUnboundFramebuffer(null)
          }, LS.ThinEngine.prototype.createMultipleRenderTarget = function(rr, Sr) {
            let Qr, Zr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Wr = !1,
              ar = !0,
              jr = !1,
              Ir = !1,
              fr = 1,
              Er = 1,
              pr = [],
              xr = [],
              mr = [],
              Nr = [],
              Ur = [],
              tr = [],
              hr = [],
              zr = [],
              Yr = [],
              nr = !1;
            const er = this._createHardwareRenderTargetWrapper(!0, !1, rr);
            void 0 !== Sr && (Wr = void 0 !== Sr.generateMipMaps && Sr.generateMipMaps, ar = void 0 === Sr.generateDepthBuffer || Sr.generateDepthBuffer, jr = void 0 !== Sr.generateStencilBuffer && Sr.generateStencilBuffer, Ir = void 0 !== Sr.generateDepthTexture && Sr.generateDepthTexture, fr = Sr.afr ?? 1, Er = Sr.samples ?? Er, pr = Sr.types || pr, xr = Sr.samplingModes || xr, mr = Sr.useSRGBBuffers || mr, Nr = Sr.formats || Nr, Ur = Sr.targetTypes || Ur, tr = Sr.faceIndex || tr, hr = Sr.layerIndex || hr, zr = Sr.layerCounts || zr, Yr = Sr.labels || Yr, nr = Sr.dontCreateTextures ?? !1, this.tt > 1 && (13 === Sr.depthTextureFormat || 17 === Sr.depthTextureFormat || 16 === Sr.depthTextureFormat || 14 === Sr.depthTextureFormat || 18 === Sr.depthTextureFormat) && (Qr = Sr.depthTextureFormat)), void 0 === Qr && (Qr = jr ? 13 : 14);
            const Kr = this._gl,
              yr = this._currentFramebuffer,
              Br = Kr.createFramebuffer();
            this._bindUnboundFramebuffer(Br);
            const Tr = rr.width ?? rr,
              vr = rr.height ?? rr,
              Or = [],
              lr = [],
              Xr = this.tt > 1 && (13 === Qr || 17 === Qr || 18 === Qr);
            er.label = Sr?.label ?? "MultiRenderTargetWrapper", er._framebuffer = Br, er._generateDepthBuffer = Ir || ar, er._generateStencilBuffer = Ir ? Xr : jr, er._depthStencilBuffer = this._setupFramebufferDepthAttachments(er._generateStencilBuffer, er._generateDepthBuffer, Tr, vr, 1, Qr), er._attachments = lr;
            for (let Pr = 0; Pr < fr; Pr++) {
              let rr = xr[Pr] || 3,
                Sr = pr[Pr] || 0,
                Qr = mr[Pr] || !1;
              const Zr = Nr[Pr] || 5,
                ar = Ur[Pr] || 3553,
                jr = zr[Pr] ?? 1;
              (1 !== Sr || this._caps.textureFloatLinearFiltering) && (2 !== Sr || this._caps.textureHalfFloatLinearFiltering) || (rr = 1);
              const Ir = this._getSamplingParameters(rr, Wr);
              1 !== Sr || this._caps.textureFloat || (Sr = 0, Lr.c.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), Qr = Qr && this._caps.supportSRGBBuffers && (this.tt > 1 || this.isWebGPU);
              const fr = this.tt > 1,
                Er = Kr[fr ? "COLOR_ATTACHMENT" + Pr : "COLOR_ATTACHMENT" + Pr + "_WEBGL"];
              if (lr.push(Er), -1 === ar || nr) continue;
              const tr = new OS.b(this, 6);
              Or[Pr] = tr, Kr.activeTexture(Kr["TEXTURE" + Pr]), Kr.bindTexture(ar, tr._hardwareTexture.underlyingResource), Kr.texParameteri(ar, Kr.TEXTURE_MAG_FILTER, Ir.mag), Kr.texParameteri(ar, Kr.TEXTURE_MIN_FILTER, Ir.min), Kr.texParameteri(ar, Kr.TEXTURE_WRAP_S, Kr.CLAMP_TO_EDGE), Kr.texParameteri(ar, Kr.TEXTURE_WRAP_T, Kr.CLAMP_TO_EDGE);
              const hr = this._getRGBABufferInternalSizedFormat(Sr, Zr, Qr),
                yr = this._getInternalFormat(Zr),
                Br = this._getWebGLTextureType(Sr);
              if (!fr || 35866 !== ar && 32879 !== ar)
                if (34067 === ar) {
                  for (let rr = 0; rr < 6; rr++) Kr.texImage2D(Kr.TEXTURE_CUBE_MAP_POSITIVE_X + rr, 0, hr, Tr, vr, 0, yr, Br, null);
                  tr.isCube = !0
                } else Kr.texImage2D(Kr.TEXTURE_2D, 0, hr, Tr, vr, 0, yr, Br, null);
              else 35866 === ar ? tr.is2DArray = !0 : tr.is3D = !0, tr.baseDepth = tr.depth = jr, Kr.texImage3D(ar, 0, hr, Tr, vr, jr, 0, yr, Br, null);
              Wr && Kr.generateMipmap(ar), this._bindTextureDirectly(ar, null), tr.baseWidth = Tr, tr.baseHeight = vr, tr.width = Tr, tr.height = vr, tr.isReady = !0, tr.samples = 1, tr.generateMipMaps = Wr, tr.samplingMode = rr, tr.type = Sr, tr._useSRGBBuffer = Qr, tr.format = Zr, tr.label = Yr[Pr] ?? er.label + "-Texture" + Pr, this._internalTexturesCache.push(tr)
            }
            if (Ir && this._caps.depthTextureExtension && !nr) {
              const rr = new OS.b(this, 14);
              let Sr = 5,
                Zr = Kr.DEPTH_COMPONENT16,
                ar = Kr.DEPTH_COMPONENT,
                jr = Kr.UNSIGNED_SHORT,
                Ir = Kr.DEPTH_ATTACHMENT;
              this.tt < 2 ? Zr = Kr.DEPTH_COMPONENT : 14 === Qr ? (Sr = 1, jr = Kr.FLOAT, Zr = Kr.DEPTH_COMPONENT32F) : 18 === Qr ? (Sr = 0, jr = Kr.FLOAT_32_UNSIGNED_INT_24_8_REV, Zr = Kr.DEPTH32F_STENCIL8, ar = Kr.DEPTH_STENCIL, Ir = Kr.DEPTH_STENCIL_ATTACHMENT) : 16 === Qr ? (Sr = 0, jr = Kr.UNSIGNED_INT, Zr = Kr.DEPTH_COMPONENT24, Ir = Kr.DEPTH_ATTACHMENT) : 13 !== Qr && 17 !== Qr || (Sr = 12, jr = Kr.UNSIGNED_INT_24_8, Zr = Kr.DEPTH24_STENCIL8, ar = Kr.DEPTH_STENCIL, Ir = Kr.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(Kr.TEXTURE_2D, rr, !0), Kr.texParameteri(Kr.TEXTURE_2D, Kr.TEXTURE_MAG_FILTER, Kr.NEAREST), Kr.texParameteri(Kr.TEXTURE_2D, Kr.TEXTURE_MIN_FILTER, Kr.NEAREST), Kr.texParameteri(Kr.TEXTURE_2D, Kr.TEXTURE_WRAP_S, Kr.CLAMP_TO_EDGE), Kr.texParameteri(Kr.TEXTURE_2D, Kr.TEXTURE_WRAP_T, Kr.CLAMP_TO_EDGE), Kr.texImage2D(Kr.TEXTURE_2D, 0, Zr, Tr, vr, 0, ar, jr, null), Kr.framebufferTexture2D(Kr.FRAMEBUFFER, Ir, Kr.TEXTURE_2D, rr._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(Kr.TEXTURE_2D, null), er._depthStencilTexture = rr, er._depthStencilTextureWithStencil = Xr, rr.baseWidth = Tr, rr.baseHeight = vr, rr.width = Tr, rr.height = vr, rr.isReady = !0, rr.samples = 1, rr.generateMipMaps = Wr, rr.samplingMode = 1, rr.format = Qr, rr.type = Sr, rr.label = er.label + "-DepthStencil", Or[fr] = rr, this._internalTexturesCache.push(rr)
            }
            if (er.setTextures(Or), Zr && Kr.drawBuffers(lr), this._bindUnboundFramebuffer(yr), er.setLayerAndFaceIndices(hr, tr), this.resetTextureCache(), nr) {
              if (Er > 1) {
                const rr = Kr.createFramebuffer();
                if (!rr) throw new Error("Unable to create multi sampled framebuffer");
                er._samples = Er, er._MSAAFramebuffer = rr, fr > 0 && Zr && (this._bindUnboundFramebuffer(rr), Kr.drawBuffers(lr), this._bindUnboundFramebuffer(yr))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(er, Er, Zr);
            return er
          }, LS.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(rr, Sr) {
            let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.tt < 2 || !rr) return 1;
            if (rr.samples === Sr) return Sr;
            const Zr = this._gl;
            Sr = Math.min(Sr, this.getCaps().maxMSAASamples), rr._depthStencilBuffer && (Zr.deleteRenderbuffer(rr._depthStencilBuffer), rr._depthStencilBuffer = null), rr._MSAAFramebuffer && (Zr.deleteFramebuffer(rr._MSAAFramebuffer), rr._MSAAFramebuffer = null);
            const Wr = rr._attachments.length;
            for (let jr = 0; jr < Wr; jr++) {
              const Sr = rr.textures[jr]._hardwareTexture;
              Sr?.releaseMSAARenderBuffers()
            }
            if (Sr > 1 && "function" === typeof Zr.renderbufferStorageMultisample) {
              const ar = Zr.createFramebuffer();
              if (!ar) throw new Error("Unable to create multi sampled framebuffer");
              rr._MSAAFramebuffer = ar, this._bindUnboundFramebuffer(ar);
              const jr = [];
              for (let Qr = 0; Qr < Wr; Qr++) {
                const Wr = rr.textures[Qr],
                  ar = Wr._hardwareTexture,
                  Ir = Zr[this.tt > 1 ? "COLOR_ATTACHMENT" + Qr : "COLOR_ATTACHMENT" + Qr + "_WEBGL"],
                  fr = this._createRenderBuffer(Wr.width, Wr.height, Sr, -1, this._getRGBABufferInternalSizedFormat(Wr.type, Wr.format, Wr._useSRGBBuffer), Ir);
                if (!fr) throw new Error("Unable to create multi sampled framebuffer");
                ar.addMSAARenderBuffer(fr), Wr.samples = Sr, jr.push(Ir)
              }
              Qr && Zr.drawBuffers(jr)
            } else this._bindUnboundFramebuffer(rr._framebuffer);
            const ar = rr._depthStencilTexture ? rr._depthStencilTexture.format : void 0;
            return rr._depthStencilBuffer = this._setupFramebufferDepthAttachments(rr._generateStencilBuffer, rr._generateDepthBuffer, rr.width, rr.height, Sr, ar), this._bindUnboundFramebuffer(null), rr._samples = Sr, Sr
          }, LS.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(rr) {
            const Sr = rr,
              Qr = this._gl;
            if (Sr.isMulti)
              for (let Zr = 0; Zr < Sr._attachments.length; Zr++) {
                const rr = Sr.textures[Zr];
                !rr?.generateMipMaps || rr?.isCube || rr?.is3D || (this._bindTextureDirectly(Qr.TEXTURE_2D, rr, !0), Qr.generateMipmap(Qr.TEXTURE_2D), this._bindTextureDirectly(Qr.TEXTURE_2D, null))
              }
          }, LS.ThinEngine.prototype.resolveMultiFramebuffer = function(rr) {
            const Sr = rr,
              Qr = this._gl;
            if (!Sr._MSAAFramebuffer || !Sr.isMulti) return;
            let Zr = Sr.resolveMSAAColors ? Qr.COLOR_BUFFER_BIT : 0;
            Zr |= Sr._generateDepthBuffer && Sr.resolveMSAADepth ? Qr.DEPTH_BUFFER_BIT : 0, Zr |= Sr._generateStencilBuffer && Sr.resolveMSAAStencil ? Qr.STENCIL_BUFFER_BIT : 0;
            const Wr = Sr._attachments,
              ar = Wr.length;
            Qr.bindFramebuffer(Qr.READ_FRAMEBUFFER, Sr._MSAAFramebuffer), Qr.bindFramebuffer(Qr.DRAW_FRAMEBUFFER, Sr._framebuffer);
            for (let jr = 0; jr < ar; jr++) {
              const rr = Sr.textures[jr];
              for (let Sr = 0; Sr < ar; Sr++) Wr[Sr] = Qr.NONE;
              Wr[jr] = Qr[this.tt > 1 ? "COLOR_ATTACHMENT" + jr : "COLOR_ATTACHMENT" + jr + "_WEBGL"], Qr.readBuffer(Wr[jr]), Qr.drawBuffers(Wr), Qr.blitFramebuffer(0, 0, rr.width, rr.height, 0, 0, rr.width, rr.height, Zr, Qr.NEAREST)
            }
            for (let jr = 0; jr < ar; jr++) Wr[jr] = Qr[this.tt > 1 ? "COLOR_ATTACHMENT" + jr : "COLOR_ATTACHMENT" + jr + "_WEBGL"];
            Qr.drawBuffers(Wr), Qr.bindFramebuffer(this._gl.FRAMEBUFFER, Sr._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = ar;
        const xr = [],
          mr = [],
          Nr = [],
          Ur = [],
          tr = [],
          hr = [],
          zr = [],
          Yr = [];
        this._initTypes(Qr, xr, mr, Nr, Ur, tr, hr, zr, Yr, Wr);
        const nr = !Wr || void 0 === Wr.generateDepthBuffer || Wr.generateDepthBuffer,
          er = !(!Wr || void 0 === Wr.generateStencilBuffer) && Wr.generateStencilBuffer,
          Kr = Wr && Wr.samples ? Wr.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: mr,
          generateMipMaps: jr,
          generateDepthBuffer: nr,
          generateStencilBuffer: er,
          generateDepthTexture: Ir,
          depthTextureFormat: fr,
          types: xr,
          afr: Qr,
          useSRGBBuffers: Nr,
          samples: Kr,
          formats: Ur,
          targetTypes: tr,
          faceIndex: hr,
          layerIndex: zr,
          layerCounts: Yr,
          labels: ar,
          label: rr
        }, this._count = Qr, this._drawOnlyOnFirstAttachmentByDefault = pr, Qr > 0 && (this._createInternalTextures(), this._createTextures(ar))
      }
      _initTypes(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
        for (let pr = 0; pr < rr; pr++) Er && Er.types && void 0 !== Er.types[pr] ? Sr.push(Er.types[pr]) : Sr.push(Er && Er.defaultType ? Er.defaultType : 0), Er && Er.samplingModes && void 0 !== Er.samplingModes[pr] ? Qr.push(Er.samplingModes[pr]) : Qr.push(Xr.f.BILINEAR_SAMPLINGMODE), Er && Er.useSRGBBuffers && void 0 !== Er.useSRGBBuffers[pr] ? Zr.push(Er.useSRGBBuffers[pr]) : Zr.push(!1), Er && Er.formats && void 0 !== Er.formats[pr] ? Wr.push(Er.formats[pr]) : Wr.push(5), Er && Er.targetTypes && void 0 !== Er.targetTypes[pr] ? ar.push(Er.targetTypes[pr]) : ar.push(3553), Er && Er.faceIndex && void 0 !== Er.faceIndex[pr] ? jr.push(Er.faceIndex[pr]) : jr.push(0), Er && Er.layerIndex && void 0 !== Er.layerIndex[pr] ? Ir.push(Er.layerIndex[pr]) : Ir.push(0), Er && Er.layerCounts && void 0 !== Er.layerCounts[pr] ? fr.push(Er.layerCounts[pr]) : fr.push(1)
      }
      _createInternaTextureIndexMapping() {
        const rr = {},
          Sr = [];
        if (!this._renderTarget) return Sr;
        const Qr = this._renderTarget.textures;
        for (let Zr = 0; Zr < Qr.length; Zr++) {
          const Wr = Qr[Zr];
          if (!Wr) continue;
          const ar = rr[Wr.uniqueId];
          void 0 !== ar ? Sr[Zr] = ar : rr[Wr.uniqueId] = Zr
        }
        return Sr
      }
      _rebuild() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || rr) return;
        const Zr = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), Sr && (this._releaseTextures(), this._createTextures(Qr));
        const Wr = this._renderTarget.textures;
        for (let ar = 0; ar < Wr.length; ar++) {
          const rr = this._textures[ar];
          void 0 !== Zr[ar] && this._renderTarget.setTexture(Wr[Zr[ar]], ar), rr._texture = Wr[ar], rr._texture && (rr._noMipmap = !rr._texture.useMipMaps, rr._useSRGBBuffer = rr._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let rr = 0; rr < this._textures.length; rr++) this._textures[rr]._texture = null, this._textures[rr].dispose()
      }
      _createTextures(rr) {
        const Sr = this._renderTarget.textures;
        this._textures = [];
        for (let Qr = 0; Qr < Sr.length; Qr++) {
          const Zr = new Xr.f(null, this.eC());
          rr?.[Qr] && (Zr.name = rr[Qr]), Zr._texture = Sr[Qr], Zr._texture && (Zr._noMipmap = !Zr._texture.useMipMaps, Zr._useSRGBBuffer = Zr._texture._useSRGBBuffer), this._textures.push(Zr)
        }
      }
      setInternalTexture(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === Sr && (this._texture = rr), this.renderTarget.setTexture(rr, Sr, Qr), this.textures[Sr] || (this.textures[Sr] = new Xr.f(null, this.eC()), this.textures[Sr].name = this._textureNames?.[Sr] ?? this.textures[Sr].name), this.textures[Sr]._texture = rr, this.textures[Sr]._noMipmap = !rr.useMipMaps, this.textures[Sr]._useSRGBBuffer = rr._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[Sr] = rr.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[Sr] = rr.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[Sr] = rr._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[Sr])) {
          let Qr;
          Qr = rr.is2DArray ? 35866 : rr.isCube ? 34067 : rr.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[Sr] = Qr
        }
      }
      setLayerAndFaceIndex(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[rr] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[rr] = Sr), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[rr] = Qr), this.renderTarget.setLayerAndFaceIndex(rr, Sr, Qr))
      }
      setLayerAndFaceIndices(rr, Sr) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = rr, this._multiRenderTargetOptions.faceIndex = Sr, this.renderTarget.setLayerAndFaceIndices(rr, Sr))
      }
      get samples() {
        return this._samples
      }
      set samples(rr) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(rr) : this._samples = rr
      }
      resize(rr) {
        this._processSizeParameter(rr), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(rr, Sr, Qr) {
        this._multiRenderTargetOptions.afr = rr, this._count = rr;
        const Zr = [],
          Wr = [],
          ar = [],
          jr = [],
          Ir = [],
          fr = [],
          Er = [],
          pr = [];
        this._textureNames = Qr, this._initTypes(rr, Zr, Wr, ar, jr, Ir, fr, Er, pr, Sr), this._multiRenderTargetOptions.types = Zr, this._multiRenderTargetOptions.samplingModes = Wr, this._multiRenderTargetOptions.useSRGBBuffers = ar, this._multiRenderTargetOptions.formats = jr, this._multiRenderTargetOptions.targetTypes = Ir, this._multiRenderTargetOptions.faceIndex = fr, this._multiRenderTargetOptions.layerIndex = Er, this._multiRenderTargetOptions.layerCounts = pr, this._multiRenderTargetOptions.labels = Qr, this._rebuild(!1, !0, Qr)
      }
      _unbindFrameBuffer(rr, Sr) {
        this._renderTarget && rr.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Sr)
        }))
      }
      dispose() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), rr ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const rr = this._renderTarget?.textures;
        if (rr) {
          for (let Sr = rr.length - 1; Sr >= 0; Sr--) this._textures[Sr]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var RS = Qr(42020);
    class gS {
      constructor(rr) {
        this.name = RS.b.NAME_GEOMETRYBUFFERRENDERER, this.Dt = rr
      }
      register() {
        this.Dt._gatherRenderTargetsStage.registerStep(RS.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(rr) {
        this.Dt._geometryBufferRenderer && rr.push(this.Dt._geometryBufferRenderer.getGBuffer())
      }
    }
    let CS = !1;
    var MS;
    ! function(rr) {
      rr[rr.Small = 0] = "Small", rr[rr.Medium = 1] = "Medium", rr[rr.Large = 2] = "Large", rr[rr.ExtraLarge = 3] = "ExtraLarge"
    }(MS || (MS = {}));
    const GS = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      kS = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class AS {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(rr) {
        if (rr && this._enableMeshBlendTag && !this._scene.MU().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = rr
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(rr) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = rr, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(rr, Sr) {
        rr === AS.POSITION_TEXTURE_TYPE ? (this._positionIndex = Sr, this._enablePosition = !0) : rr === AS.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = Sr, this._enableVelocity = !0) : rr === AS.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = Sr, this._enableVelocityLinear = !0) : rr === AS.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = Sr, this._enableReflectivity = !0) : rr === AS.DEPTH_TEXTURE_TYPE ? (this._depthIndex = Sr, this._enableDepth = !0) : rr === AS.NORMAL_TEXTURE_TYPE ? (this._normalIndex = Sr, this._enableNormal = !0) : rr === AS.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = Sr, this._enableScreenspaceDepth = !0) : rr === AS.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = Sr, this._enableIrradiance = !0) : rr === AS.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = Sr, this._enableObjectId = !0) : rr === AS.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = Sr, this._enableMeshBlendTag = !0)
      }
      _setAttachments(rr) {
        this._attachmentsFromPrePass = rr
      }
      _linkInternalTexture(rr) {
        this._multiRenderTarget.setInternalTexture(rr, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(rr) {
        this._multiRenderTarget.renderList = rr
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(rr) {
        switch (rr) {
          case AS.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case AS.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case AS.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case AS.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case AS.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case AS.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case AS.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case AS.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case AS.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case AS.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(rr) {
        this._enableDepth = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(rr) {
        this._enableNormal = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(rr) {
        this._enablePosition = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(rr) {
        this._enableVelocity = rr, rr || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = rr
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(rr) {
        this._enableVelocityLinear = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(rr) {
        this._enableReflectivity = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(rr) {
        this._enableScreenspaceDepth = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(rr) {
        this._enableIrradiance = rr, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(rr) {
        if (rr && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (rr && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (rr && !this._enableObjectId && !this._linkedWithPrePass) {
          const rr = this._scene.MU(),
            Sr = Math.min(rr.getCaps().maxDrawBuffers ?? 1, 8),
            Qr = this._assignRenderTargetIndices()[0] + 1;
          if (rr.getCaps().drawBuffersExtension && Qr > Sr) throw new Error(`GeometryBufferRenderer: ${Qr} color attachments were requested, but this engine supports at most ${Sr}`)
        }
        this._enableObjectId = rr, rr || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(rr) {
        if (this._enableMeshBlendTag !== rr) {
          if (rr) {
            const rr = this._scene.MU();
            if (! function(rr) {
                return "NATIVE" !== rr.shaderPlatformName && (rr.isWebGPU || 2 === rr.tt)
              }(rr)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !rr.isWebGPU && !rr.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const Sr = Math.min(rr.getCaps().maxDrawBuffers ?? 1, 8),
                Qr = this._assignRenderTargetIndices()[0] + 1;
              if (rr.getCaps().drawBuffersExtension && Qr > Sr) throw new Error(`GeometryBufferRenderer: ${Qr} color attachments were requested, but this engine supports at most ${Sr}`)
            }
          }
          this._enableMeshBlendTag = rr, rr || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Dt() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        var Wr;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new Fr.f(0, 0, 0, 0), this._clearDepthColor = new Fr.f(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = rr, this._ratioOrDimensions = Sr, this._useUbo = rr.MU().supportsUniformBuffers, this._depthFormat = Qr, this._textureTypesAndFormats = Zr || {}, this._initShaderSourceAsync(), Wr = AS, CS || (CS = !0, Object.defineProperty(Mr.f.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(rr) {
            rr && rr.isSupported && (this._geometryBufferRenderer = rr)
          },
          enumerable: !0,
          configurable: !0
        }), Mr.f.prototype.enableGeometryBufferRenderer = function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Wr(this, rr, Sr, Qr), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, Mr.f.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Wr._SceneComponentInitialization = rr => {
          let Sr = rr._getComponent(RS.b.NAME_GEOMETRYBUFFERRENDERER);
          Sr || (Sr = new gS(rr), rr.CZr(Sr))
        }), AS._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.MU().isWebGPU && !AS.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Qr.e(656).then((() => Qr(65138))), Promise.all([Qr.e(655), Qr.e(667)]).then((() => Qr(65146)))])) : await Promise.all([Qr.e(639).then((() => Qr(65150))), Qr.e(638).then((() => Qr(65155)))]), this._shadersLoaded = !0
      }
      isReady(rr, Sr) {
        if (!this._shadersLoaded) return !1;
        const Qr = rr.iU();
        if (Qr && Qr.disableDepthWrite) return !1;
        if (function(rr) {
            return rr._isGaussianSplatting || "GaussianSplattingMesh" === (Sr = rr.getClassName()) || "GaussianSplattingStream" === Sr;
            var Sr
          }(rr.getMesh())) return !1;
        const Zr = [],
          Wr = [kr.j.PositionKind],
          ar = rr.getMesh();
        ar.isVerticesDataPresent(kr.j.NormalKind) && (Zr.push("#define HAS_NORMAL_ATTRIBUTE"), Wr.push(kr.j.NormalKind));
        let jr = !1,
          Ir = !1;
        if (Qr) {
          let rr = !1;
          if (Qr.needAlphaTestingForMesh(ar) && Qr.getAlphaTestTexture() && (Zr.push("#define ALPHATEST"), Zr.push(`#define ALPHATEST_UV${Qr.getAlphaTestTexture().coordinatesIndex+1}`), rr = !0), (Qr.bumpTexture || Qr.normalTexture || Qr.geometryNormalTexture) && Dr.d.BumpTextureEnabled) {
            const Sr = Qr.bumpTexture || Qr.normalTexture || Qr.geometryNormalTexture;
            Zr.push("#define BUMP"), Zr.push(`#define BUMP_UV${Sr.coordinatesIndex+1}`), rr = !0
          }
          if (this._enableReflectivity) {
            let Sr = !1;
            if ("PBRMetallicRoughnessMaterial" === Qr.getClassName()) Qr.metallicRoughnessTexture && (Zr.push("#define ORMTEXTURE"), Zr.push(`#define REFLECTIVITY_UV${Qr.metallicRoughnessTexture.coordinatesIndex+1}`), Zr.push("#define METALLICWORKFLOW"), rr = !0, Sr = !0), null != Qr.metallic && (Zr.push("#define METALLIC"), Zr.push("#define METALLICWORKFLOW"), Sr = !0), null != Qr.roughness && (Zr.push("#define ROUGHNESS"), Zr.push("#define METALLICWORKFLOW"), Sr = !0), Sr && (Qr.baseTexture && (Zr.push("#define ALBEDOTEXTURE"), Zr.push(`#define ALBEDO_UV${Qr.baseTexture.coordinatesIndex+1}`), Qr.baseTexture.gammaSpace && Zr.push("#define GAMMAALBEDO"), rr = !0), Qr.baseColor && Zr.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === Qr.getClassName()) Qr.specularGlossinessTexture ? (Zr.push("#define SPECULARGLOSSINESSTEXTURE"), Zr.push(`#define REFLECTIVITY_UV${Qr.specularGlossinessTexture.coordinatesIndex+1}`), rr = !0, Qr.specularGlossinessTexture.gammaSpace && Zr.push("#define GAMMAREFLECTIVITYTEXTURE")) : Qr.specularColor && Zr.push("#define REFLECTIVITYCOLOR"), null != Qr.glossiness && Zr.push("#define GLOSSINESS");
            else if ("PBRMaterial" === Qr.getClassName()) Qr.metallicTexture && (Zr.push("#define ORMTEXTURE"), Zr.push(`#define REFLECTIVITY_UV${Qr.metallicTexture.coordinatesIndex+1}`), Zr.push("#define METALLICWORKFLOW"), rr = !0, Sr = !0), null != Qr.metallic && (Zr.push("#define METALLIC"), Zr.push("#define METALLICWORKFLOW"), Sr = !0), null != Qr.roughness && (Zr.push("#define ROUGHNESS"), Zr.push("#define METALLICWORKFLOW"), Sr = !0), Sr ? (Qr.albedoTexture && (Zr.push("#define ALBEDOTEXTURE"), Zr.push(`#define ALBEDO_UV${Qr.albedoTexture.coordinatesIndex+1}`), Qr.albedoTexture.gammaSpace && Zr.push("#define GAMMAALBEDO"), rr = !0), Qr.albedoColor && Zr.push("#define ALBEDOCOLOR")) : (Qr.reflectivityTexture ? (Zr.push("#define SPECULARGLOSSINESSTEXTURE"), Zr.push(`#define REFLECTIVITY_UV${Qr.reflectivityTexture.coordinatesIndex+1}`), Qr.reflectivityTexture.gammaSpace && Zr.push("#define GAMMAREFLECTIVITYTEXTURE"), rr = !0) : Qr.reflectivityColor && Zr.push("#define REFLECTIVITYCOLOR"), null != Qr.microSurface && Zr.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === Qr.getClassName()) Qr.specularTexture && (Zr.push("#define REFLECTIVITYTEXTURE"), Zr.push(`#define REFLECTIVITY_UV${Qr.specularTexture.coordinatesIndex+1}`), Qr.specularTexture.gammaSpace && Zr.push("#define GAMMAREFLECTIVITYTEXTURE"), rr = !0), Qr.specularColor && Zr.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === Qr.getClassName()) {
              const Sr = Qr;
              Zr.push("#define METALLIC"), Zr.push("#define ROUGHNESS"), Sr._useRoughnessFromMetallicTextureGreen && Sr.baseMetalnessTexture ? (Zr.push("#define ORMTEXTURE"), Zr.push(`#define REFLECTIVITY_UV${Sr.baseMetalnessTexture.coordinatesIndex+1}`), rr = !0) : Sr.baseMetalnessTexture ? (Zr.push("#define METALLIC_TEXTURE"), Zr.push(`#define METALLIC_UV${Sr.baseMetalnessTexture.coordinatesIndex+1}`), rr = !0) : Sr.specularRoughnessTexture && (Zr.push("#define ROUGHNESS_TEXTURE"), Zr.push(`#define ROUGHNESS_UV${Sr.specularRoughnessTexture.coordinatesIndex+1}`), rr = !0), Sr.baseColorTexture && (Zr.push("#define ALBEDOTEXTURE"), Zr.push(`#define ALBEDO_UV${Sr.baseColorTexture.coordinatesIndex+1}`), Sr.baseColorTexture.gammaSpace && Zr.push("#define GAMMAALBEDO"), rr = !0), Sr.baseColor && Zr.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Zr.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === Qr.getClassName())) {
            const Sr = Qr;
            Sr.subsurfaceWeight > 0 && Sr.subsurfaceWeightTexture && (Zr.push("#define SUBSURFACE_WEIGHT"), Zr.push(`#define SUBSURFACEWEIGHT_UV${Sr.subsurfaceWeightTexture.coordinatesIndex+1}`), rr = !0), Sr.transmissionWeight > 0 && Sr.transmissionWeightTexture && (Zr.push("#define TRANSMISSION_WEIGHT"), Zr.push(`#define TRANSMISSIONWEIGHT_UV${Sr.transmissionWeightTexture.coordinatesIndex+1}`), rr = !0)
          }
          rr && (Zr.push("#define NEED_UV"), ar.isVerticesDataPresent(kr.j.UVKind) && (Wr.push(kr.j.UVKind), Zr.push("#define UV1"), jr = !0), ar.isVerticesDataPresent(kr.j.UV2Kind) && (Wr.push(kr.j.UV2Kind), Zr.push("#define UV2"), Ir = !0))
        }
        if (this._enableDepth && (Zr.push("#define DEPTH"), Zr.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Zr.push("#define NORMAL"), Zr.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Zr.push("#define POSITION"), Zr.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Zr.push("#define VELOCITY"), Zr.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(ar) && Zr.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Zr.push("#define VELOCITY_LINEAR"), Zr.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(ar) && Zr.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Zr.push("#define REFLECTIVITY"), Zr.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Zr.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Zr.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Zr.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Zr.push("#define IRRADIANCE");
          const rr = this._scene;
          if (rr.environmentTexture) {
            const Sr = {};
            let Wr = !1,
              ar = 0;
            "OpenPBRMaterial" !== Qr.getClassName() && "StandardMaterial" !== Qr.getClassName() && "PBRMetallicRoughnessMaterial" !== Qr.getClassName() && "PBRSpecularGlossinessMaterial" !== Qr.getClassName() && "PBRMaterial" !== Qr.getClassName() || (Wr = !!Qr.realtimeFiltering, ar = Qr.realtimeFilteringQuality || 0), (0, sr.U)(rr, rr.environmentTexture, Sr, Wr, ar, !0);
            for (const rr in Sr) Sr[rr] && Zr.push("#define " + rr);
            Sr.USEIRRADIANCEMAP || Zr.push("#define SPHERICAL_HARMONICS");
            const jr = rr.postProcessRenderPipelineManager.supportedPipelines.find((rr => "IBLShadowsRenderPipeline" === rr.getClassName()));
            if (jr) {
              const rr = jr;
              rr._getAccumulatedTexture() && (Zr.push("#define IBL_SHADOW_TEXTURE"), rr.coloredShadows && Zr.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Zr.push("#define OBJECT_ID"), Zr.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Zr.push("#define MESH_BLEND_TAG"), Zr.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Zr.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Zr.push("#define ENCODE_NORMAL"), ar.useBones && ar.computeBonesUsingShaders && ar.skeleton ? (Wr.push(kr.j.MatricesIndicesKind), Wr.push(kr.j.MatricesWeightsKind), ar.numBoneInfluencers > 4 && (Wr.push(kr.j.MatricesIndicesExtraKind), Wr.push(kr.j.MatricesWeightsExtraKind)), Zr.push("#define NUM_BONE_INFLUENCERS " + ar.numBoneInfluencers), Zr.push("#define BONETEXTURE " + ar.skeleton.isUsingTextureForMatrices), Zr.push("#define BonesPerMesh " + (ar.skeleton.bones.length + 1))) : (Zr.push("#define NUM_BONE_INFLUENCERS 0"), Zr.push("#define BONETEXTURE false"), Zr.push("#define BonesPerMesh 0"));
        const fr = ar.morphTargetManager ? (0, sr.M)(ar.morphTargetManager, Zr, Wr, ar, !0, !0, !1, jr, Ir, !1) : 0;
        Sr && (Zr.push("#define INSTANCES"), (0, sr.ob)(Wr, this._enableVelocity || this._enableVelocityLinear), rr.getRenderingMesh().hasThinInstances && Zr.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Zr.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Zr.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, pS.h)(Qr, this._scene, Zr);
        const Er = this._scene.MU(),
          pr = rr._getDrawWrapper(void 0, !0),
          xr = pr.defines,
          mr = Zr.join("\n");
        return xr !== mr && pr.setEffect(Er.createEffect("geometry", {
          attributes: Wr,
          uniformsNames: kS,
          samplers: GS,
          defines: mr,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: fr
          },
          shaderLanguage: this.shaderLanguage
        }, Er), mr), pr.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(rr) {
        if (this._enableObjectId && 1 !== rr) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== rr) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = rr
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.MU().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Dt.MU()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Dt.MU().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const rr = [],
          Sr = [];
        let Qr = 0;
        return this._enableDepth && (this._depthIndex = Qr, Qr++, rr.push("gBuffer_Depth"), Sr.push(this._textureTypesAndFormats[AS.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = Qr, Qr++, rr.push("gBuffer_Normal"), Sr.push(this._textureTypesAndFormats[AS.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = Qr, Qr++, rr.push("gBuffer_Position"), Sr.push(this._textureTypesAndFormats[AS.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = Qr, Qr++, rr.push("gBuffer_Velocity"), Sr.push(this._textureTypesAndFormats[AS.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = Qr, Qr++, rr.push("gBuffer_VelocityLinear"), Sr.push(this._textureTypesAndFormats[AS.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = Qr, Qr++, rr.push("gBuffer_Reflectivity"), Sr.push(this._textureTypesAndFormats[AS.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = Qr, Qr++, rr.push("gBuffer_ScreenspaceDepth"), Sr.push(this._textureTypesAndFormats[AS.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = Qr, Qr++, rr.push("gBuffer_Irradiance"), Sr.push(this._textureTypesAndFormats[AS.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = Qr, Qr++, rr.push("gBuffer_ObjectId"), Sr.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = Qr, Qr++, rr.push("gBuffer_MeshBlendTag"), Sr.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [Qr, rr, Sr]
      }
      _createRenderTargets() {
        const rr = this._scene.MU(),
          [Sr, Qr, Zr] = this._assignRenderTargetIndices(),
          Wr = Math.min(rr.getCaps().maxDrawBuffers ?? 1, 8);
        if (rr.getCaps().drawBuffersExtension && Sr > Wr) throw new Error(`GeometryBufferRenderer: ${Sr} color attachments were requested, but this engine supports at most ${Wr}`);
        let jr = 0;
        rr._caps.textureFloat && rr._caps.textureFloatLinearFiltering ? jr = 1 : rr._caps.textureHalfFloat && rr._caps.textureHalfFloatLinearFiltering && (jr = 2);
        const Ir = this._getRenderTargetDimensions(),
          fr = [],
          Er = [],
          pr = [];
        for (const ar of Zr) ar ? (fr.push(ar.textureType), Er.push(ar.textureFormat), pr.push(ar.samplingMode ?? 2)) : (fr.push(jr), Er.push(5), pr.push(2));
        if (this._normalsAreUnsigned = 11 === fr[AS.NORMAL_TEXTURE_TYPE] || 13 === fr[AS.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new qS("gBuffer", Ir, Sr, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: fr,
            formats: Er,
            samplingModes: pr,
            depthTextureFormat: this._depthFormat
          }, Qr.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = Xr.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = Xr.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const xr = [!0],
          mr = [!1],
          Nr = [!0];
        for (let ar = 1; ar < Sr; ++ar) xr.push(!0), Nr.push(!1), mr.push(!0);
        const Ur = rr.buildTextureLayout(xr),
          tr = rr.buildTextureLayout(mr),
          hr = rr.buildTextureLayout(Nr);
        this._multiRenderTarget.onClearObservable.add((rr => {
          const Sr = this.useSpecificClearForDepthTexture ? tr : Ur;
          rr.clearAttachments(this._clearColor, Sr, !0, !0, !0), this.useSpecificClearForDepthTexture && rr.clearAttachments(this._clearDepthColor, hr, !0, !1, !1), rr.bindAttachments(Ur)
        })), this._resizeObserver = rr.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const zr = rr => {
          const Sr = rr.getRenderingMesh(),
            Qr = rr.getEffectiveMesh(),
            Zr = this._scene,
            Wr = Zr.MU(),
            jr = rr.iU();
          if (!jr) return;
          if (Qr._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[Qr.uniqueId] && (this._previousTransformationMatrices[Qr.uniqueId] = {
              qx: Gr.d.Identity(),
              viewProjection: Zr.getTransformMatrix()
            }, Sr.skeleton)) {
            const rr = Sr.skeleton.getTransformMatrices(Sr);
            this._previousBonesTransformationMatrices[Sr.uniqueId] = this._copyBonesTransformationMatrices(rr, new Float32Array(rr.length))
          }
          const Ir = Sr._getInstancesRenderList(rr._id, !!rr.getReplacementMesh());
          if (Ir.mustReturn) return;
          const fr = Wr.getCaps().instancedArrays && (null !== Ir.visibleInstances[rr._id] || Sr.hasThinInstances),
            Er = Qr.getWorldMatrix();
          if (this.isReady(rr, fr)) {
            const pr = rr._getDrawWrapper();
            if (!pr) return;
            const xr = pr.effect;
            let mr;
            Wr.enableEffect(pr), fr || Sr._bind(rr, xr, jr.fillMode), this._useUbo ? ((0, sr.x)(xr, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (xr.setMatrix("viewProjection", Zr.getTransformMatrix()), xr.setMatrix("view", Zr.getViewMatrix()), this._scene.bindEyePosition(xr, "vEyePosition"));
            if (Sr._instanceDataStorage.isFrozen || !jr.backFaceCulling && null === jr.sideOrientation) mr = Sr._effectiveSideOrientation;
            else {
              const rr = Qr._getWorldMatrixDeterminant();
              mr = jr._getEffectiveOrientation(Sr), rr < 0 && (mr = mr === ar.d.ClockWiseSideOrientation ? ar.d.CounterClockWiseSideOrientation : ar.d.ClockWiseSideOrientation)
            }
            if (jr._preBind(pr, mr), jr.needAlphaTestingForMesh(Qr)) {
              const rr = jr.getAlphaTestTexture();
              rr && (xr.setTexture("diffuseSampler", rr), xr.setMatrix("diffuseMatrix", rr.getTextureMatrix()), xr.setFloat("alphaCutOff", jr.alphaCutOff ?? .4))
            }
            if ((jr.bumpTexture || jr.normalTexture || jr.geometryNormalTexture) && Zr.MU().getCaps().standardDerivatives && Dr.d.BumpTextureEnabled) {
              const rr = jr.bumpTexture || jr.normalTexture || jr.geometryNormalTexture;
              xr.setFloat3("vBumpInfos", rr.coordinatesIndex, 1 / rr.level, jr.parallaxScaleBias), xr.setMatrix("bumpMatrix", rr.getTextureMatrix()), xr.setTexture("bumpSampler", rr), xr.setFloat2("vTangentSpaceParams", jr.invertNormalMapX ? -1 : 1, jr.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === jr.getClassName()) null !== jr.metallicRoughnessTexture && (xr.setTexture("reflectivitySampler", jr.metallicRoughnessTexture), xr.setMatrix("reflectivityMatrix", jr.metallicRoughnessTexture.getTextureMatrix())), null !== jr.metallic && xr.setFloat("metallic", jr.metallic), null !== jr.roughness && xr.setFloat("glossiness", 1 - jr.roughness), null !== jr.baseTexture && (xr.setTexture("albedoSampler", jr.baseTexture), xr.setMatrix("albedoMatrix", jr.baseTexture.getTextureMatrix())), null !== jr.baseColor && xr.setColor3("albedoColor", jr.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === jr.getClassName()) null !== jr.specularGlossinessTexture ? (xr.setTexture("reflectivitySampler", jr.specularGlossinessTexture), xr.setMatrix("reflectivityMatrix", jr.specularGlossinessTexture.getTextureMatrix())) : null !== jr.specularColor && xr.setColor3("reflectivityColor", jr.specularColor), null !== jr.glossiness && xr.setFloat("glossiness", jr.glossiness);
            else if ("PBRMaterial" === jr.getClassName()) null !== jr.metallicTexture && (xr.setTexture("reflectivitySampler", jr.metallicTexture), xr.setMatrix("reflectivityMatrix", jr.metallicTexture.getTextureMatrix())), null !== jr.metallic && xr.setFloat("metallic", jr.metallic), null !== jr.roughness && xr.setFloat("glossiness", 1 - jr.roughness), null !== jr.roughness || null !== jr.metallic || null !== jr.metallicTexture ? (null !== jr.albedoTexture && (xr.setTexture("albedoSampler", jr.albedoTexture), xr.setMatrix("albedoMatrix", jr.albedoTexture.getTextureMatrix())), null !== jr.albedoColor && xr.setColor3("albedoColor", jr.albedoColor)) : (null !== jr.reflectivityTexture ? (xr.setTexture("reflectivitySampler", jr.reflectivityTexture), xr.setMatrix("reflectivityMatrix", jr.reflectivityTexture.getTextureMatrix())) : null !== jr.reflectivityColor && xr.setColor3("reflectivityColor", jr.reflectivityColor), null !== jr.microSurface && xr.setFloat("glossiness", jr.microSurface));
            else if ("StandardMaterial" === jr.getClassName()) null !== jr.specularTexture && (xr.setTexture("reflectivitySampler", jr.specularTexture), xr.setMatrix("reflectivityMatrix", jr.specularTexture.getTextureMatrix())), null !== jr.specularColor && xr.setColor3("reflectivityColor", jr.specularColor);
            else if ("OpenPBRMaterial" === jr.getClassName()) {
              const rr = jr;
              rr._useRoughnessFromMetallicTextureGreen && rr.baseMetalnessTexture ? (xr.setTexture("reflectivitySampler", rr.baseMetalnessTexture), xr.setMatrix("reflectivityMatrix", rr.baseMetalnessTexture.getTextureMatrix())) : rr.baseMetalnessTexture ? (xr.setTexture("metallicSampler", rr.baseMetalnessTexture), xr.setMatrix("metallicMatrix", rr.baseMetalnessTexture.getTextureMatrix())) : rr.specularRoughnessTexture && (xr.setTexture("roughnessSampler", rr.specularRoughnessTexture), xr.setMatrix("roughnessMatrix", rr.specularRoughnessTexture.getTextureMatrix())), xr.setFloat("metallic", rr.baseMetalness), xr.setFloat("glossiness", 1 - rr.specularRoughness), null !== rr.baseColorTexture && (xr.setTexture("albedoSampler", rr.baseColorTexture), xr.setMatrix("albedoMatrix", rr.baseColorTexture.getTextureMatrix())), null !== rr.baseColor && xr.setColor3("albedoColor", rr.baseColor)
            }
            if (this._enableIrradiance && Zr.environmentTexture) {
              const rr = Zr.environmentTexture,
                Sr = Zr.postProcessRenderPipelineManager.supportedPipelines.find((rr => "IBLShadowsRenderPipeline" === rr.getClassName()));
              if (Sr) {
                const rr = Sr._getAccumulatedTexture();
                rr && (xr.setTexture("iblShadowSampler", rr), xr.setFloat2("shadowTextureSize", rr.getSize().width, rr.getSize().height))
              }
              if (xr.setMatrix("reflectionMatrix", rr.getReflectionTextureMatrix()), xr.setFloat2("vReflectionInfos", rr.level * Zr.iblIntensity, 0), xr.setTexture("reflectionSampler", rr), rr.irradianceTexture && (xr.setTexture("irradianceSampler", rr.irradianceTexture), rr.irradianceTexture._dominantDirection && xr.setVector3("vReflectionDominantDirection", rr.irradianceTexture._dominantDirection)), rr.sphericalPolynomial) {
                const Sr = rr.sphericalPolynomial;
                if (Sr.preScaledHarmonics) {
                  const rr = Sr.preScaledHarmonics;
                  xr.setVector3("vSphericalL00", rr.l00), xr.setVector3("vSphericalL1_1", rr.l1_1), xr.setVector3("vSphericalL10", rr.l10), xr.setVector3("vSphericalL11", rr.l11), xr.setVector3("vSphericalL2_2", rr.l2_2), xr.setVector3("vSphericalL2_1", rr.l2_1), xr.setVector3("vSphericalL20", rr.l20), xr.setVector3("vSphericalL21", rr.l21), xr.setVector3("vSphericalL22", rr.l22)
                } else xr.setFloat3("vSphericalX", Sr.x.x, Sr.x.y, Sr.x.z), xr.setFloat3("vSphericalY", Sr.y.x, Sr.y.y, Sr.y.z), xr.setFloat3("vSphericalZ", Sr.z.x, Sr.z.y, Sr.z.z), xr.setFloat3("vSphericalXX_ZZ", Sr.xx.x - Sr.zz.x, Sr.xx.y - Sr.zz.y, Sr.xx.z - Sr.zz.z), xr.setFloat3("vSphericalYY_ZZ", Sr.yy.x - Sr.zz.x, Sr.yy.y - Sr.zz.y, Sr.yy.z - Sr.zz.z), xr.setFloat3("vSphericalZZ", Sr.zz.x, Sr.zz.y, Sr.zz.z), xr.setFloat3("vSphericalXY", Sr.xy.x, Sr.xy.y, Sr.xy.z), xr.setFloat3("vSphericalYZ", Sr.yz.x, Sr.yz.y, Sr.yz.z), xr.setFloat3("vSphericalZX", Sr.zx.x, Sr.zx.y, Sr.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === jr.getClassName()) {
                const rr = jr;
                xr.setFloat("vSubsurfaceWeight", rr.subsurfaceWeight), rr.subsurfaceWeightTexture && (xr.setTexture("subsurfaceWeightSampler", rr.subsurfaceWeightTexture), xr.setMatrix("subsurfaceWeightMatrix", rr.subsurfaceWeightTexture.getTextureMatrix())), xr.setFloat("vTransmissionWeight", rr.transmissionWeight), rr.transmissionWeightTexture && (xr.setTexture("transmissionWeightSampler", rr.transmissionWeightTexture), xr.setMatrix("transmissionWeightMatrix", rr.transmissionWeightTexture.getTextureMatrix())), xr.setFloat("vTransmissionScatterAnisotropy", rr.transmissionScatterAnisotropy), xr.setFloat("vSubsurfaceScatterAnisotropy", rr.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, pS.e)(xr, jr, this._scene), Sr.useBones && Sr.computeBonesUsingShaders && Sr.skeleton) {
              const rr = Sr.skeleton;
              if (rr.isUsingTextureForMatrices && xr.getUniformIndex("boneTextureInfo") > -1) {
                const Qr = rr.getTransformMatrixTexture(Sr);
                xr.setTexture("boneSampler", Qr), xr.setFloat2("boneTextureInfo", rr._textureWidth, rr._textureHeight)
              } else xr.setMatrices("mBones", Sr.skeleton.getTransformMatrices(Sr));
              (this._enableVelocity || this._enableVelocityLinear) && xr.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[Sr.uniqueId])
            }
            if ((0, sr.t)(Sr, xr), Sr.morphTargetManager && Sr.morphTargetManager.isUsingTextureForTargets && Sr.morphTargetManager._bind(xr), (this._enableVelocity || this._enableVelocityLinear) && (xr.setMatrix("previousWorld", this._previousTransformationMatrices[Qr.uniqueId].qx), xr.setMatrix("previousViewProjection", this._previousTransformationMatrices[Qr.uniqueId].viewProjection)), this._enableObjectId) {
              let rr = Sr.uniqueId;
              if (this.objectIdProvider) rr = (0, NS.h)(Sr, this.objectIdProvider);
              else if (rr > 16777215) throw new Error(`Invalid geometry object ID ${rr} for mesh "${Sr.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              xr.setFloat("objectId", rr)
            }
            if (this._enableMeshBlendTag) {
              const rr = this.meshBlendTagProvider ? (0, NS.f)(Sr, this.meshBlendTagProvider) : Sr.meshBlendingTag;
              xr.setInt("meshBlendTag", rr)
            }
            fr && Sr.hasThinInstances && xr.setMatrix("world", Er), Sr._processRendering(Qr, rr, xr, jr.fillMode, Ir, fr, ((rr, Sr) => {
              rr || xr.setMatrix("world", Sr)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[Qr.uniqueId].qx = Er.clone(), this._previousTransformationMatrices[Qr.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), Sr.skeleton && this._copyBonesTransformationMatrices(Sr.skeleton.getTransformMatrices(Sr), this._previousBonesTransformationMatrices[Qr.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (Sr, Qr, Zr) => {
          if ((Zr || 0 === Qr) && Sr.jT)
            for (let Wr = 0; Wr < Sr.jT.length; ++Wr) {
              const Qr = Sr.jT[Wr],
                Zr = Qr.iU(),
                ar = Qr.getRenderingMesh();
              if (!Zr) continue;
              const jr = ar._getInstancesRenderList(Qr._id, !!Qr.getReplacementMesh()),
                Ir = rr.getCaps().instancedArrays && (null !== jr.visibleInstances[Qr._id] || ar.hasThinInstances);
              if (!this.isReady(Qr, Ir)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (Sr, Qr, Zr, Wr) => {
          let ar;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.MU().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Wr.length) {
            for (rr.setColorWrite(!1), ar = 0; ar < Wr.length; ar++) zr(Wr.data[ar]);
            rr.setColorWrite(!0)
          }
          for (ar = 0; ar < Sr.length; ar++) zr(Sr.data[ar]);
          for (rr.setDepthWrite(!1), ar = 0; ar < Qr.length; ar++) zr(Qr.data[ar]);
          if (this.renderTransparentMeshes)
            for (ar = 0; ar < Zr.length; ar++) zr(Zr.data[ar]);
          rr.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const rr = this._scene.MU();
        return {
          width: Math.max(1, Math.floor(rr.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(rr.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(rr, Sr) {
        for (let Qr = 0; Qr < rr.length; Qr++) Sr[Qr] = rr[Qr];
        return Sr
      }
    }
    AS.ForceGLSL = !1, AS.DEPTH_TEXTURE_TYPE = 0, AS.NORMAL_TEXTURE_TYPE = 1, AS.POSITION_TEXTURE_TYPE = 2, AS.VELOCITY_TEXTURE_TYPE = 3, AS.REFLECTIVITY_TEXTURE_TYPE = 4, AS.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, AS.VELOCITY_LINEAR_TEXTURE_TYPE = 6, AS.IRRADIANCE_TEXTURE_TYPE = 7, AS.OBJECT_ID_TEXTURE_TYPE = 8, AS.MESH_BLEND_TAG_TEXTURE_TYPE = 9, AS._SceneComponentInitialization = rr => {
      throw (0, zS.l)("GeometryBufferRendererSceneComponent")
    };
    var VS = Qr(38609);
    const iS = {
      effect: null,
      subMesh: null
    };

    function wS(rr) {
      if ("number" === typeof rr) return 1;
      if (rr instanceof Gr.q) return 2;
      if (rr instanceof Gr.u || rr instanceof Fr.e) return 3;
      if (rr instanceof Gr.x || rr instanceof Fr.f) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class cS {
      populateVectorFromLinkedProperties(rr) {
        const Sr = wS(rr);
        for (const Qr in this.linkedProperties) {
          const rr = this.linkedProperties[Qr],
            Zr = rr.numComponents;
          if (Sr < Zr || rr.targetUniformComponentOffset > Sr - Zr) return void(1 == Zr ? Lr.c.Error(`Float property ${rr.name} has an offset that is too large.`) : Lr.c.Error(`Vector${Zr} property ${rr.name} won't fit in Vector${Sr} or has an offset that is too large.`));
          "number" === typeof rr.value ? cS._tmpArray[rr.targetUniformComponentOffset] = rr.value : rr.value.toArray(cS._tmpArray, rr.targetUniformComponentOffset)
        }
        rr.dp(cS._tmpArray)
      }
      constructor(rr, Sr) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = rr, this.numComponents = Sr
      }
    }
    cS._tmpArray = [0, 0, 0, 0];
    class FS {
      constructor(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ar = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = rr, this.targetUniformName = Qr, this.defaultValue = Sr, this.value = Sr, this.targetUniformComponentNum = Zr, this.targetUniformComponentOffset = Wr, this.requiredDefine = ar
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : wS(this.defaultValue)
      }
    }
    class oS {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(rr, Sr, Qr) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = rr, this.samplerPrefix = Sr, this.textureDefine = Qr
      }
    }
    class bS extends((0, tS.e)((0, US.c)(Ar.b))) {}
    class JS extends(function(rr) {
      return class extends rr {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(bS)) {}
    class DS extends((0, or.g)(JS)) {
      constructor(rr) {
        super(rr), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class dS extends((0, hS.b)(Jr.b)) {}
    let sS = (() => {
        var rr, Sr, Zr, Wr, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, Pr, Hr, qr, Rr, Mr, Ar, Vr, ir, wr, or, Jr, ur, rS, SS, QS, ZS, WS, aS, jS, IS, fS, ES, US, tS, hS, zS, YS, nS, eS, KS, yS, vS, OS, LS, lS, XS, PS, HS, qS, RS, gS, CS, MS, GS, kS, VS, wS, bS, JS, sS, uS, rQ, SQ, QQ, ZQ, WQ, aQ, jQ, IQ, fQ, EQ, pQ, xQ, mQ, NQ, UQ, tQ, hQ, zQ, YQ, nQ, eQ, KQ, yQ, BQ, TQ, vQ, OQ, LQ, lQ;
        let XQ, PQ, HQ, qQ, RQ, gQ, CQ, MQ, GQ, kQ, AQ, VQ, iQ, wQ, cQ, FQ, oQ, bQ, JQ, DQ, dQ, sQ, uQ, rZ, SZ, QZ, ZZ, WZ, aZ, jZ, IZ, fZ, EZ, pZ, xZ, mZ, NZ, UZ, tZ, hZ, zZ, YZ, nZ, eZ, KZ, yZ, BZ, TZ, vZ, OZ, LZ, lZ, XZ, PZ, HZ, qZ, RZ, gZ, CZ, MZ, GZ, kZ, AZ, VZ, iZ, wZ, cZ, FZ, oZ, bZ, JZ, DZ, dZ, sZ, uZ, rW, SW, QW, ZW, WW, aW, jW, IW, fW, EW, pW, xW, mW, NW, UW, tW, hW, zW, YW, nW, eW, KW, yW, BW, TW, vW, OW, LW, lW, XW, PW = dS,
          HW = [],
          qW = [],
          RW = [],
          gW = [],
          CW = [],
          MW = [],
          GW = [],
          kW = [],
          AW = [],
          VW = [],
          iW = [],
          wW = [],
          cW = [],
          FW = [],
          oW = [],
          bW = [],
          JW = [],
          DW = [],
          dW = [],
          sW = [],
          uW = [],
          ra = [],
          Sa = [],
          Qa = [],
          Za = [],
          Wa = [],
          aa = [],
          ja = [],
          Ia = [],
          fa = [],
          Ea = [],
          pa = [],
          xa = [],
          ma = [],
          Na = [],
          Ua = [],
          ta = [],
          ha = [],
          za = [],
          Ya = [],
          na = [],
          ea = [],
          Ka = [],
          ya = [],
          Ba = [],
          Ta = [],
          va = [],
          Oa = [],
          La = [],
          la = [],
          Xa = [],
          Pa = [],
          Ha = [],
          qa = [],
          Ra = [],
          ga = [],
          Ca = [],
          Ma = [],
          Ga = [],
          ka = [],
          Aa = [],
          Va = [],
          ia = [],
          wa = [],
          ca = [],
          Fa = [],
          oa = [],
          ba = [],
          Ja = [],
          Da = [],
          da = [],
          sa = [],
          ua = [],
          rj = [],
          Sj = [],
          Qj = [],
          Zj = [],
          Wj = [],
          aj = [],
          jj = [],
          Ij = [],
          fj = [],
          Ej = [],
          pj = [],
          xj = [],
          mj = [],
          Nj = [],
          Uj = [],
          tj = [],
          hj = [],
          zj = [],
          Yj = [],
          nj = [],
          ej = [],
          Kj = [],
          yj = [],
          Bj = [],
          Tj = [],
          vj = [],
          Oj = [],
          Lj = [],
          lj = [],
          Xj = [],
          Pj = [],
          Hj = [],
          qj = [],
          Rj = [],
          gj = [],
          Cj = [],
          Mj = [],
          Gj = [],
          kj = [],
          Aj = [],
          Vj = [],
          ij = [],
          wj = [],
          cj = [],
          Fj = [],
          oj = [],
          bj = [],
          Jj = [],
          Dj = [],
          dj = [],
          sj = [],
          uj = [],
          rI = [],
          SI = [],
          QI = [],
          ZI = [],
          WI = [],
          aI = [],
          jI = [],
          II = [],
          fI = [],
          EI = [],
          pI = [],
          xI = [],
          mI = [],
          NI = [],
          UI = [],
          tI = [],
          hI = [],
          zI = [],
          YI = [],
          nI = [],
          eI = [],
          KI = [],
          yI = [],
          BI = [],
          TI = [],
          vI = [],
          OI = [],
          LI = [],
          lI = [],
          XI = [],
          PI = [],
          HI = [],
          qI = [],
          RI = [],
          gI = [],
          CI = [],
          MI = [],
          GI = [],
          kI = [],
          AI = [],
          VI = [],
          iI = [],
          wI = [],
          cI = [],
          FI = [],
          oI = [],
          bI = [],
          JI = [],
          DI = [],
          dI = [],
          sI = [],
          uI = [],
          rf = [],
          Sf = [],
          Qf = [],
          Zf = [],
          Wf = [],
          af = [],
          jf = [],
          If = [],
          ff = [],
          Ef = [],
          pf = [],
          xf = [],
          mf = [],
          Nf = [],
          Uf = [],
          tf = [],
          hf = [],
          zf = [],
          Yf = [],
          nf = [],
          ef = [],
          Kf = [],
          yf = [],
          Bf = [],
          Tf = [],
          vf = [],
          Of = [],
          Lf = [];
        return rr = class extends PW {
          get baseWeight() {
            return (0, vr.e)(this, Sr, "f")
          }
          set baseWeight(rr) {
            (0, vr.i)(this, Sr, rr, "f")
          }
          get baseWeightTexture() {
            return (0, vr.e)(this, Zr, "f")
          }
          set baseWeightTexture(rr) {
            (0, vr.i)(this, Zr, rr, "f")
          }
          get baseColor() {
            return (0, vr.e)(this, Wr, "f")
          }
          set baseColor(rr) {
            (0, vr.i)(this, Wr, rr, "f")
          }
          get baseColorTexture() {
            return (0, vr.e)(this, jr, "f")
          }
          set baseColorTexture(rr) {
            (0, vr.i)(this, jr, rr, "f")
          }
          get baseDiffuseRoughness() {
            return (0, vr.e)(this, Ir, "f")
          }
          set baseDiffuseRoughness(rr) {
            (0, vr.i)(this, Ir, rr, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, vr.e)(this, fr, "f")
          }
          set baseDiffuseRoughnessTexture(rr) {
            (0, vr.i)(this, fr, rr, "f")
          }
          get baseMetalness() {
            return (0, vr.e)(this, Er, "f")
          }
          set baseMetalness(rr) {
            (0, vr.i)(this, Er, rr, "f")
          }
          get baseMetalnessTexture() {
            return (0, vr.e)(this, pr, "f")
          }
          set baseMetalnessTexture(rr) {
            (0, vr.i)(this, pr, rr, "f")
          }
          get specularWeight() {
            return (0, vr.e)(this, xr, "f")
          }
          set specularWeight(rr) {
            (0, vr.i)(this, xr, rr, "f")
          }
          get specularWeightTexture() {
            return (0, vr.e)(this, mr, "f")
          }
          set specularWeightTexture(rr) {
            (0, vr.i)(this, mr, rr, "f")
          }
          get specularColor() {
            return (0, vr.e)(this, Nr, "f")
          }
          set specularColor(rr) {
            (0, vr.i)(this, Nr, rr, "f")
          }
          get specularColorTexture() {
            return (0, vr.e)(this, Ur, "f")
          }
          set specularColorTexture(rr) {
            (0, vr.i)(this, Ur, rr, "f")
          }
          get specularRoughness() {
            return (0, vr.e)(this, tr, "f")
          }
          set specularRoughness(rr) {
            (0, vr.i)(this, tr, rr, "f")
          }
          get specularRoughnessTexture() {
            return (0, vr.e)(this, hr, "f")
          }
          set specularRoughnessTexture(rr) {
            (0, vr.i)(this, hr, rr, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, vr.e)(this, zr, "f")
          }
          set specularRoughnessAnisotropy(rr) {
            (0, vr.i)(this, zr, rr, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, vr.e)(this, Yr, "f")
          }
          set specularRoughnessAnisotropyTexture(rr) {
            (0, vr.i)(this, Yr, rr, "f")
          }
          get specularIor() {
            return (0, vr.e)(this, nr, "f")
          }
          set specularIor(rr) {
            (0, vr.i)(this, nr, rr, "f")
          }
          get transmissionWeight() {
            return (0, vr.e)(this, er, "f")
          }
          set transmissionWeight(rr) {
            (0, vr.i)(this, er, rr, "f")
          }
          get transmissionWeightTexture() {
            return (0, vr.e)(this, Kr, "f")
          }
          set transmissionWeightTexture(rr) {
            (0, vr.i)(this, Kr, rr, "f")
          }
          get transmissionColor() {
            return (0, vr.e)(this, yr, "f")
          }
          set transmissionColor(rr) {
            (0, vr.i)(this, yr, rr, "f")
          }
          get transmissionColorTexture() {
            return (0, vr.e)(this, Br, "f")
          }
          set transmissionColorTexture(rr) {
            (0, vr.i)(this, Br, rr, "f")
          }
          get transmissionDepth() {
            return (0, vr.e)(this, Tr, "f")
          }
          set transmissionDepth(rr) {
            (0, vr.i)(this, Tr, rr, "f")
          }
          get transmissionDepthTexture() {
            return (0, vr.e)(this, Pr, "f")
          }
          set transmissionDepthTexture(rr) {
            (0, vr.i)(this, Pr, rr, "f")
          }
          get transmissionScatter() {
            return (0, vr.e)(this, Hr, "f")
          }
          set transmissionScatter(rr) {
            (0, vr.i)(this, Hr, rr, "f")
          }
          get transmissionScatterTexture() {
            return (0, vr.e)(this, qr, "f")
          }
          set transmissionScatterTexture(rr) {
            (0, vr.i)(this, qr, rr, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, vr.e)(this, Rr, "f")
          }
          set transmissionScatterAnisotropy(rr) {
            (0, vr.i)(this, Rr, rr, "f")
          }
          get transmissionDispersionScale() {
            return (0, vr.e)(this, Mr, "f")
          }
          set transmissionDispersionScale(rr) {
            (0, vr.i)(this, Mr, rr, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, vr.e)(this, Ar, "f")
          }
          set transmissionDispersionScaleTexture(rr) {
            (0, vr.i)(this, Ar, rr, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, vr.e)(this, Vr, "f")
          }
          set transmissionDispersionAbbeNumber(rr) {
            (0, vr.i)(this, Vr, rr, "f")
          }
          get subsurfaceWeight() {
            return (0, vr.e)(this, ir, "f")
          }
          set subsurfaceWeight(rr) {
            (0, vr.i)(this, ir, rr, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, vr.e)(this, wr, "f")
          }
          set subsurfaceWeightTexture(rr) {
            (0, vr.i)(this, wr, rr, "f")
          }
          get subsurfaceColor() {
            return (0, vr.e)(this, or, "f")
          }
          set subsurfaceColor(rr) {
            (0, vr.i)(this, or, rr, "f")
          }
          get subsurfaceColorTexture() {
            return (0, vr.e)(this, Jr, "f")
          }
          set subsurfaceColorTexture(rr) {
            (0, vr.i)(this, Jr, rr, "f")
          }
          get subsurfaceRadius() {
            return (0, vr.e)(this, ur, "f")
          }
          set subsurfaceRadius(rr) {
            (0, vr.i)(this, ur, rr, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, vr.e)(this, rS, "f")
          }
          set subsurfaceRadiusScale(rr) {
            (0, vr.i)(this, rS, rr, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, vr.e)(this, SS, "f")
          }
          set subsurfaceRadiusScaleTexture(rr) {
            (0, vr.i)(this, SS, rr, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, vr.e)(this, QS, "f")
          }
          set subsurfaceScatterAnisotropy(rr) {
            (0, vr.i)(this, QS, rr, "f")
          }
          get coatWeight() {
            return (0, vr.e)(this, ZS, "f")
          }
          set coatWeight(rr) {
            (0, vr.i)(this, ZS, rr, "f")
          }
          get coatWeightTexture() {
            return (0, vr.e)(this, WS, "f")
          }
          set coatWeightTexture(rr) {
            (0, vr.i)(this, WS, rr, "f")
          }
          get coatColor() {
            return (0, vr.e)(this, aS, "f")
          }
          set coatColor(rr) {
            (0, vr.i)(this, aS, rr, "f")
          }
          get coatColorTexture() {
            return (0, vr.e)(this, jS, "f")
          }
          set coatColorTexture(rr) {
            (0, vr.i)(this, jS, rr, "f")
          }
          get coatRoughness() {
            return (0, vr.e)(this, IS, "f")
          }
          set coatRoughness(rr) {
            (0, vr.i)(this, IS, rr, "f")
          }
          get coatRoughnessTexture() {
            return (0, vr.e)(this, fS, "f")
          }
          set coatRoughnessTexture(rr) {
            (0, vr.i)(this, fS, rr, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, vr.e)(this, ES, "f")
          }
          set coatRoughnessAnisotropy(rr) {
            (0, vr.i)(this, ES, rr, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, vr.e)(this, US, "f")
          }
          set coatRoughnessAnisotropyTexture(rr) {
            (0, vr.i)(this, US, rr, "f")
          }
          get coatIor() {
            return (0, vr.e)(this, tS, "f")
          }
          set coatIor(rr) {
            (0, vr.i)(this, tS, rr, "f")
          }
          get coatDarkening() {
            return (0, vr.e)(this, hS, "f")
          }
          set coatDarkening(rr) {
            (0, vr.i)(this, hS, rr, "f")
          }
          get coatDarkeningTexture() {
            return (0, vr.e)(this, zS, "f")
          }
          set coatDarkeningTexture(rr) {
            (0, vr.i)(this, zS, rr, "f")
          }
          get fuzzWeight() {
            return (0, vr.e)(this, YS, "f")
          }
          set fuzzWeight(rr) {
            (0, vr.i)(this, YS, rr, "f")
          }
          get fuzzWeightTexture() {
            return (0, vr.e)(this, nS, "f")
          }
          set fuzzWeightTexture(rr) {
            (0, vr.i)(this, nS, rr, "f")
          }
          get fuzzColor() {
            return (0, vr.e)(this, eS, "f")
          }
          set fuzzColor(rr) {
            (0, vr.i)(this, eS, rr, "f")
          }
          get fuzzColorTexture() {
            return (0, vr.e)(this, KS, "f")
          }
          set fuzzColorTexture(rr) {
            (0, vr.i)(this, KS, rr, "f")
          }
          get fuzzRoughness() {
            return (0, vr.e)(this, yS, "f")
          }
          set fuzzRoughness(rr) {
            (0, vr.i)(this, yS, rr, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, vr.e)(this, vS, "f")
          }
          set fuzzRoughnessTexture(rr) {
            (0, vr.i)(this, vS, rr, "f")
          }
          get geometryThinWalled() {
            return (0, vr.e)(this, OS, "f")
          }
          set geometryThinWalled(rr) {
            (0, vr.i)(this, OS, rr, "f")
          }
          get geometryNormalTexture() {
            return (0, vr.e)(this, LS, "f")
          }
          set geometryNormalTexture(rr) {
            (0, vr.i)(this, LS, rr, "f")
          }
          get geometryTangent() {
            return (0, vr.e)(this, lS, "f")
          }
          set geometryTangent(rr) {
            (0, vr.i)(this, lS, rr, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(rr) {
            this.geometryTangent = new Gr.q(Math.cos(rr), Math.sin(rr))
          }
          get geometryTangentTexture() {
            return (0, vr.e)(this, XS, "f")
          }
          set geometryTangentTexture(rr) {
            (0, vr.i)(this, XS, rr, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, vr.e)(this, PS, "f")
          }
          set geometryCoatNormalTexture(rr) {
            (0, vr.i)(this, PS, rr, "f")
          }
          get geometryCoatTangent() {
            return (0, vr.e)(this, HS, "f")
          }
          set geometryCoatTangent(rr) {
            (0, vr.i)(this, HS, rr, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(rr) {
            this.geometryCoatTangent = new Gr.q(Math.cos(rr), Math.sin(rr))
          }
          get geometryCoatTangentTexture() {
            return (0, vr.e)(this, qS, "f")
          }
          set geometryCoatTangentTexture(rr) {
            (0, vr.i)(this, qS, rr, "f")
          }
          get geometryOpacity() {
            return (0, vr.e)(this, RS, "f")
          }
          set geometryOpacity(rr) {
            (0, vr.i)(this, RS, rr, "f")
          }
          get geometryOpacityTexture() {
            return (0, vr.e)(this, gS, "f")
          }
          set geometryOpacityTexture(rr) {
            (0, vr.i)(this, gS, rr, "f")
          }
          get geometryThickness() {
            return (0, vr.e)(this, CS, "f")
          }
          set geometryThickness(rr) {
            (0, vr.i)(this, CS, rr, "f")
          }
          get geometryThicknessTexture() {
            return (0, vr.e)(this, MS, "f")
          }
          set geometryThicknessTexture(rr) {
            (0, vr.i)(this, MS, rr, "f")
          }
          get emissionLuminance() {
            return (0, vr.e)(this, GS, "f")
          }
          set emissionLuminance(rr) {
            (0, vr.i)(this, GS, rr, "f")
          }
          get emissionColor() {
            return (0, vr.e)(this, kS, "f")
          }
          set emissionColor(rr) {
            (0, vr.i)(this, kS, rr, "f")
          }
          get emissionColorTexture() {
            return (0, vr.e)(this, VS, "f")
          }
          set emissionColorTexture(rr) {
            (0, vr.i)(this, VS, rr, "f")
          }
          get thinFilmWeight() {
            return (0, vr.e)(this, wS, "f")
          }
          set thinFilmWeight(rr) {
            (0, vr.i)(this, wS, rr, "f")
          }
          get thinFilmWeightTexture() {
            return (0, vr.e)(this, bS, "f")
          }
          set thinFilmWeightTexture(rr) {
            (0, vr.i)(this, bS, rr, "f")
          }
          get thinFilmThickness() {
            return (0, vr.e)(this, JS, "f")
          }
          set thinFilmThickness(rr) {
            (0, vr.i)(this, JS, rr, "f")
          }
          get thinFilmThicknessMin() {
            return (0, vr.e)(this, sS, "f")
          }
          set thinFilmThicknessMin(rr) {
            (0, vr.i)(this, sS, rr, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, vr.e)(this, uS, "f")
          }
          set thinFilmThicknessTexture(rr) {
            (0, vr.i)(this, uS, rr, "f")
          }
          get thinFilmIor() {
            return (0, vr.e)(this, rQ, "f")
          }
          set thinFilmIor(rr) {
            (0, vr.i)(this, rQ, rr, "f")
          }
          get ambientOcclusionTexture() {
            return (0, vr.e)(this, SQ, "f")
          }
          set ambientOcclusionTexture(rr) {
            (0, vr.i)(this, SQ, rr, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(rr) {
            this._sssQuality !== rr && (this._sssQuality = rr, this.BQr(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(rr) {
            this._sssIrradianceTexture !== rr && (this._sssIrradianceTexture = rr, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(rr) {
            this._sssDepthTexture !== rr && (this._sssDepthTexture = rr, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, vr.e)(this, QQ, "f")
          }
          set directIntensity(rr) {
            (0, vr.i)(this, QQ, rr, "f")
          }
          get environmentIntensity() {
            return (0, vr.e)(this, ZQ, "f")
          }
          set environmentIntensity(rr) {
            (0, vr.i)(this, ZQ, rr, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, vr.e)(this, WQ, "f")
          }
          set useSpecularWeightFromTextureAlpha(rr) {
            (0, vr.i)(this, WQ, rr, "f")
          }
          get forceAlphaTest() {
            return (0, vr.e)(this, aQ, "f")
          }
          set forceAlphaTest(rr) {
            (0, vr.i)(this, aQ, rr, "f")
          }
          get alphaCutOff() {
            return (0, vr.e)(this, jQ, "f")
          }
          set alphaCutOff(rr) {
            (0, vr.i)(this, jQ, rr, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, vr.e)(this, IQ, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(rr) {
            (0, vr.i)(this, IQ, rr, "f")
          }
          get useAmbientInGrayScale() {
            return (0, vr.e)(this, fQ, "f")
          }
          set useAmbientInGrayScale(rr) {
            (0, vr.i)(this, fQ, rr, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(Fr.e.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === ar.d.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(rr) {
            rr !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = rr ? ar.d.LIGHTFALLOFF_PHYSICAL : ar.d.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === ar.d.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(rr) {
            rr !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = rr ? ar.d.LIGHTFALLOFF_GLTF : ar.d.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, vr.e)(this, EQ, "f")
          }
          set useObjectSpaceNormalMap(rr) {
            (0, vr.i)(this, EQ, rr, "f")
          }
          get useParallax() {
            return (0, vr.e)(this, pQ, "f")
          }
          set useParallax(rr) {
            (0, vr.i)(this, pQ, rr, "f")
          }
          get useParallaxOcclusion() {
            return (0, vr.e)(this, xQ, "f")
          }
          set useParallaxOcclusion(rr) {
            (0, vr.i)(this, xQ, rr, "f")
          }
          get parallaxScaleBias() {
            return (0, vr.e)(this, mQ, "f")
          }
          set parallaxScaleBias(rr) {
            (0, vr.i)(this, mQ, rr, "f")
          }
          get disableLighting() {
            return (0, vr.e)(this, NQ, "f")
          }
          set disableLighting(rr) {
            (0, vr.i)(this, NQ, rr, "f")
          }
          get forceIrradianceInFragment() {
            return (0, vr.e)(this, UQ, "f")
          }
          set forceIrradianceInFragment(rr) {
            (0, vr.i)(this, UQ, rr, "f")
          }
          get maxSimultaneousLights() {
            return (0, vr.e)(this, tQ, "f")
          }
          set maxSimultaneousLights(rr) {
            (0, vr.i)(this, tQ, rr, "f")
          }
          get invertNormalMapX() {
            return (0, vr.e)(this, hQ, "f")
          }
          set invertNormalMapX(rr) {
            (0, vr.i)(this, hQ, rr, "f")
          }
          get invertNormalMapY() {
            return (0, vr.e)(this, zQ, "f")
          }
          set invertNormalMapY(rr) {
            (0, vr.i)(this, zQ, rr, "f")
          }
          get twoSidedLighting() {
            return (0, vr.e)(this, YQ, "f")
          }
          set twoSidedLighting(rr) {
            (0, vr.i)(this, YQ, rr, "f")
          }
          get useAlphaFresnel() {
            return (0, vr.e)(this, nQ, "f")
          }
          set useAlphaFresnel(rr) {
            (0, vr.i)(this, nQ, rr, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, vr.e)(this, eQ, "f")
          }
          set useLinearAlphaFresnel(rr) {
            (0, vr.i)(this, eQ, rr, "f")
          }
          get environmentBRDFTexture() {
            return (0, vr.e)(this, KQ, "f")
          }
          set environmentBRDFTexture(rr) {
            (0, vr.i)(this, KQ, rr, "f")
          }
          get forceNormalForward() {
            return (0, vr.e)(this, yQ, "f")
          }
          set forceNormalForward(rr) {
            (0, vr.i)(this, yQ, rr, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, vr.e)(this, BQ, "f")
          }
          set enableSpecularAntiAliasing(rr) {
            (0, vr.i)(this, BQ, rr, "f")
          }
          get useHorizonOcclusion() {
            return (0, vr.e)(this, TQ, "f")
          }
          set useHorizonOcclusion(rr) {
            (0, vr.i)(this, TQ, rr, "f")
          }
          get useRadianceOcclusion() {
            return (0, vr.e)(this, vQ, "f")
          }
          set useRadianceOcclusion(rr) {
            (0, vr.i)(this, vQ, rr, "f")
          }
          get unlit() {
            return (0, vr.e)(this, OQ, "f")
          }
          set unlit(rr) {
            (0, vr.i)(this, OQ, rr, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, vr.e)(this, LQ, "f")
          }
          set applyDecalMapAfterDetailMap(rr) {
            (0, vr.i)(this, LQ, rr, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(rr) {
            this._backgroundRefractionTexture = rr, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(rr) {
            this._refractionHighQualityBlur !== rr && (this._refractionHighQualityBlur = rr, this.BQr(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(rr) {
            this._realTimeFiltering = rr, this.BQr(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(rr) {
            this._realTimeFilteringQuality = rr, this.BQr(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(rr) {
            this._fuzzSampleNumber = rr, this.BQr(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, vr.e)(this, lQ, "f")
          }
          set debugMode(rr) {
            (0, vr.i)(this, lQ, rr, "f")
          }
          constructor(Qr, Or) {
            super(Qr, Or, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || rr.ForceGLSL), Sr.set(this, ((0, vr.m)(this, HW), (0, vr.m)(this, qW, void 0))), this._baseWeight = ((0, vr.m)(this, RW), new FS("base_weight", 1, "vBaseWeight", 1)), Zr.set(this, (0, vr.m)(this, gW, void 0)), this._baseWeightTexture = ((0, vr.m)(this, CW), new oS("base_weight", "baseWeight", "BASE_WEIGHT")), Wr.set(this, (0, vr.m)(this, MW, void 0)), this._baseColor = ((0, vr.m)(this, GW), new FS("base_color", Fr.e.White(), "vBaseColor", 4)), jr.set(this, (0, vr.m)(this, kW, void 0)), this._baseColorTexture = ((0, vr.m)(this, AW), new oS("base_color", "baseColor", "BASE_COLOR")), Ir.set(this, (0, vr.m)(this, VW, void 0)), this._baseDiffuseRoughness = ((0, vr.m)(this, iW), new FS("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), fr.set(this, (0, vr.m)(this, wW, void 0)), this._baseDiffuseRoughnessTexture = ((0, vr.m)(this, cW), new oS("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Er.set(this, (0, vr.m)(this, FW, void 0)), this._baseMetalness = ((0, vr.m)(this, oW), new FS("base_metalness", 0, "vReflectanceInfo", 4, 0)), pr.set(this, (0, vr.m)(this, bW, void 0)), this._baseMetalnessTexture = ((0, vr.m)(this, JW), new oS("base_metalness", "baseMetalness", "BASE_METALNESS")), xr.set(this, (0, vr.m)(this, DW, void 0)), this._specularWeight = ((0, vr.m)(this, dW), new FS("specular_weight", 1, "vReflectanceInfo", 4, 3)), mr.set(this, (0, vr.m)(this, sW, void 0)), this._specularWeightTexture = ((0, vr.m)(this, uW), new oS("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), Nr.set(this, (0, vr.m)(this, ra, void 0)), this._specularColor = ((0, vr.m)(this, Sa), new FS("specular_color", Fr.e.White(), "vSpecularColor", 4)), Ur.set(this, (0, vr.m)(this, Qa, void 0)), this._specularColorTexture = ((0, vr.m)(this, Za), new oS("specular_color", "specularColor", "SPECULAR_COLOR")), tr.set(this, (0, vr.m)(this, Wa, void 0)), this._specularRoughness = ((0, vr.m)(this, aa), new FS("specular_roughness", .3, "vReflectanceInfo", 4, 1)), hr.set(this, (0, vr.m)(this, ja, void 0)), this._specularRoughnessTexture = ((0, vr.m)(this, Ia), new oS("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), zr.set(this, (0, vr.m)(this, fa, void 0)), this._specularRoughnessAnisotropy = ((0, vr.m)(this, Ea), new FS("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), Yr.set(this, (0, vr.m)(this, pa, void 0)), this._specularRoughnessAnisotropyTexture = ((0, vr.m)(this, xa), new oS("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), nr.set(this, (0, vr.m)(this, ma, void 0)), this._specularIor = ((0, vr.m)(this, Na), new FS("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), er.set(this, (0, vr.m)(this, Ua, void 0)), this._transmissionWeight = ((0, vr.m)(this, ta), new FS("transmission_weight", 0, "vTransmissionWeight", 1)), Kr.set(this, (0, vr.m)(this, ha, void 0)), this._transmissionWeightTexture = ((0, vr.m)(this, za), new oS("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), yr.set(this, (0, vr.m)(this, Ya, void 0)), this._transmissionColor = ((0, vr.m)(this, na), new FS("transmission_color", Fr.e.White(), "vTransmissionColor", 3, 0)), Br.set(this, (0, vr.m)(this, ea, void 0)), this._transmissionColorTexture = ((0, vr.m)(this, Ka), new oS("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), Tr.set(this, (0, vr.m)(this, ya, void 0)), this._transmissionDepth = ((0, vr.m)(this, Ba), new FS("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Pr.set(this, (0, vr.m)(this, Ta, void 0)), this._transmissionDepthTexture = ((0, vr.m)(this, va), new oS("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Hr.set(this, (0, vr.m)(this, Oa, void 0)), this._transmissionScatter = ((0, vr.m)(this, La), new FS("transmission_scatter", Fr.e.Black(), "vTransmissionScatter", 3, 0)), qr.set(this, (0, vr.m)(this, la, void 0)), this._transmissionScatterTexture = ((0, vr.m)(this, Xa), new oS("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Rr.set(this, (0, vr.m)(this, Pa, void 0)), this._transmissionScatterAnisotropy = ((0, vr.m)(this, Ha), new FS("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), Mr.set(this, (0, vr.m)(this, qa, void 0)), this._transmissionDispersionScale = ((0, vr.m)(this, Ra), new FS("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), Ar.set(this, (0, vr.m)(this, ga, void 0)), this._transmissionDispersionScaleTexture = ((0, vr.m)(this, Ca), new oS("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), Vr.set(this, (0, vr.m)(this, Ma, void 0)), this._transmissionDispersionAbbeNumber = ((0, vr.m)(this, Ga), new FS("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), ir.set(this, (0, vr.m)(this, ka, void 0)), this._subsurfaceWeight = ((0, vr.m)(this, Aa), new FS("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), wr.set(this, (0, vr.m)(this, Va, void 0)), this._subsurfaceWeightTexture = ((0, vr.m)(this, ia), new oS("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), or.set(this, (0, vr.m)(this, wa, void 0)), this._subsurfaceColor = ((0, vr.m)(this, ca), new FS("subsurface_color", new Fr.e(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), Jr.set(this, (0, vr.m)(this, Fa, void 0)), this._subsurfaceColorTexture = ((0, vr.m)(this, oa), new oS("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), ur.set(this, (0, vr.m)(this, ba, void 0)), this._subsurfaceRadius = ((0, vr.m)(this, Ja), new FS("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), rS.set(this, (0, vr.m)(this, Da, void 0)), this._subsurfaceRadiusScale = ((0, vr.m)(this, da), new FS("subsurface_radius_scale", new Fr.e(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), SS.set(this, (0, vr.m)(this, sa, void 0)), this._subsurfaceRadiusScaleTexture = ((0, vr.m)(this, ua), new oS("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), QS.set(this, (0, vr.m)(this, rj, void 0)), this._subsurfaceScatterAnisotropy = ((0, vr.m)(this, Sj), new FS("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), ZS.set(this, (0, vr.m)(this, Qj, void 0)), this._coatWeight = ((0, vr.m)(this, Zj), new FS("coat_weight", 0, "vCoatWeight", 1, 0)), WS.set(this, (0, vr.m)(this, Wj, void 0)), this._coatWeightTexture = ((0, vr.m)(this, aj), new oS("coat_weight", "coatWeight", "COAT_WEIGHT")), aS.set(this, (0, vr.m)(this, jj, void 0)), this._coatColor = ((0, vr.m)(this, Ij), new FS("coat_color", Fr.e.White(), "vCoatColor", 3, 0)), jS.set(this, (0, vr.m)(this, fj, void 0)), this._coatColorTexture = ((0, vr.m)(this, Ej), new oS("coat_color", "coatColor", "COAT_COLOR")), IS.set(this, (0, vr.m)(this, pj, void 0)), this._coatRoughness = ((0, vr.m)(this, xj), new FS("coat_roughness", 0, "vCoatRoughness", 1, 0)), fS.set(this, (0, vr.m)(this, mj, void 0)), this._coatRoughnessTexture = ((0, vr.m)(this, Nj), new oS("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), ES.set(this, (0, vr.m)(this, Uj, void 0)), this._coatRoughnessAnisotropy = ((0, vr.m)(this, tj), new FS("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), US.set(this, (0, vr.m)(this, hj, void 0)), this._coatRoughnessAnisotropyTexture = ((0, vr.m)(this, zj), new oS("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), tS.set(this, (0, vr.m)(this, Yj, void 0)), this._coatIor = ((0, vr.m)(this, nj), new FS("coat_ior", 1.5, "vCoatIor", 1, 0)), hS.set(this, (0, vr.m)(this, ej, void 0)), this._coatDarkening = ((0, vr.m)(this, Kj), new FS("coat_darkening", 1, "vCoatDarkening", 1, 0)), zS.set(this, (0, vr.m)(this, yj, void 0)), this._coatDarkeningTexture = ((0, vr.m)(this, Bj), new oS("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, YS.set(this, (0, vr.m)(this, Tj, void 0)), this._fuzzWeight = ((0, vr.m)(this, vj), new FS("fuzz_weight", 0, "vFuzzWeight", 1, 0)), nS.set(this, (0, vr.m)(this, Oj, void 0)), this._fuzzWeightTexture = ((0, vr.m)(this, Lj), new oS("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), eS.set(this, (0, vr.m)(this, lj, void 0)), this._fuzzColor = ((0, vr.m)(this, Xj), new FS("fuzz_color", Fr.e.White(), "vFuzzColor", 3, 0)), KS.set(this, (0, vr.m)(this, Pj, void 0)), this._fuzzColorTexture = ((0, vr.m)(this, Hj), new oS("fuzz_color", "fuzzColor", "FUZZ_COLOR")), yS.set(this, (0, vr.m)(this, qj, void 0)), this._fuzzRoughness = ((0, vr.m)(this, Rj), new FS("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), vS.set(this, (0, vr.m)(this, gj, void 0)), this._fuzzRoughnessTexture = ((0, vr.m)(this, Cj), new oS("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), OS.set(this, (0, vr.m)(this, Mj, void 0)), this._geometryThinWalled = ((0, vr.m)(this, Gj), new FS("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), LS.set(this, (0, vr.m)(this, kj, void 0)), this._geometryNormalTexture = ((0, vr.m)(this, Aj), new oS("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), lS.set(this, (0, vr.m)(this, Vj, void 0)), this._geometryTangent = ((0, vr.m)(this, ij), new FS("geometry_tangent", new Gr.q(1, 0), "vSpecularAnisotropy", 3, 0)), XS.set(this, (0, vr.m)(this, wj, void 0)), this._geometryTangentTexture = ((0, vr.m)(this, cj), new oS("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), PS.set(this, (0, vr.m)(this, Fj, void 0)), this._geometryCoatNormalTexture = ((0, vr.m)(this, oj), new oS("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), HS.set(this, (0, vr.m)(this, bj, void 0)), this._geometryCoatTangent = ((0, vr.m)(this, Jj), new FS("geometry_coat_tangent", new Gr.q(1, 0), "vGeometryCoatTangent", 2, 0)), qS.set(this, (0, vr.m)(this, Dj, void 0)), this._geometryCoatTangentTexture = ((0, vr.m)(this, dj), new oS("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), RS.set(this, (0, vr.m)(this, sj, void 0)), this._geometryOpacity = ((0, vr.m)(this, uj), new FS("geometry_opacity", 1, "vBaseColor", 4, 3)), gS.set(this, (0, vr.m)(this, rI, void 0)), this._geometryOpacityTexture = ((0, vr.m)(this, SI), new oS("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), CS.set(this, (0, vr.m)(this, QI, void 0)), this._geometryThickness = ((0, vr.m)(this, ZI), new FS("geometry_thickness", 0, "vGeometryThickness", 1, 0)), MS.set(this, (0, vr.m)(this, WI, void 0)), this._geometryThicknessTexture = ((0, vr.m)(this, aI), new oS("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), GS.set(this, (0, vr.m)(this, jI, void 0)), this._emissionLuminance = ((0, vr.m)(this, II), new FS("emission_luminance", 1, "vLightingIntensity", 4, 1)), kS.set(this, (0, vr.m)(this, fI, void 0)), this._emissionColor = ((0, vr.m)(this, EI), new FS("emission_color", Fr.e.Black(), "vEmissionColor", 3)), VS.set(this, (0, vr.m)(this, pI, void 0)), this._emissionColorTexture = ((0, vr.m)(this, xI), new oS("emission_color", "emissionColor", "EMISSION_COLOR")), wS.set(this, (0, vr.m)(this, mI, void 0)), this._thinFilmWeight = ((0, vr.m)(this, NI), new FS("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), bS.set(this, (0, vr.m)(this, UI, void 0)), this._thinFilmWeightTexture = ((0, vr.m)(this, tI), new oS("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), JS.set(this, (0, vr.m)(this, hI, void 0)), this._thinFilmThickness = ((0, vr.m)(this, zI), new FS("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), sS.set(this, (0, vr.m)(this, YI, void 0)), this._thinFilmThicknessMin = ((0, vr.m)(this, nI), new FS("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), uS.set(this, (0, vr.m)(this, eI, void 0)), this._thinFilmThicknessTexture = ((0, vr.m)(this, KI), new oS("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), rQ.set(this, (0, vr.m)(this, yI, void 0)), this._thinFilmIor = ((0, vr.m)(this, BI), new FS("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), SQ.set(this, (0, vr.m)(this, TI, void 0)), this._ambientOcclusionTexture = ((0, vr.m)(this, vI), new oS("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = rr.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, QQ.set(this, (0, vr.m)(this, OI, 1)), ZQ.set(this, ((0, vr.m)(this, LI), (0, vr.m)(this, lI, 1))), WQ.set(this, ((0, vr.m)(this, XI), (0, vr.m)(this, PI, !1))), aQ.set(this, ((0, vr.m)(this, HI), (0, vr.m)(this, qI, !1))), jQ.set(this, ((0, vr.m)(this, RI), (0, vr.m)(this, gI, .4))), IQ.set(this, ((0, vr.m)(this, CI), (0, vr.m)(this, MI, !1))), fQ.set(this, ((0, vr.m)(this, GI), (0, vr.m)(this, kI, !1))), EQ.set(this, ((0, vr.m)(this, AI), (0, vr.m)(this, VI, !1))), pQ.set(this, ((0, vr.m)(this, iI), (0, vr.m)(this, wI, !1))), xQ.set(this, ((0, vr.m)(this, cI), (0, vr.m)(this, FI, !1))), mQ.set(this, ((0, vr.m)(this, oI), (0, vr.m)(this, bI, .05))), NQ.set(this, ((0, vr.m)(this, JI), (0, vr.m)(this, DI, !1))), UQ.set(this, ((0, vr.m)(this, dI), (0, vr.m)(this, sI, !1))), tQ.set(this, ((0, vr.m)(this, uI), (0, vr.m)(this, rf, 4))), hQ.set(this, ((0, vr.m)(this, Sf), (0, vr.m)(this, Qf, !1))), zQ.set(this, ((0, vr.m)(this, Zf), (0, vr.m)(this, Wf, !1))), YQ.set(this, ((0, vr.m)(this, af), (0, vr.m)(this, jf, !1))), nQ.set(this, ((0, vr.m)(this, If), (0, vr.m)(this, ff, !1))), eQ.set(this, ((0, vr.m)(this, Ef), (0, vr.m)(this, pf, !1))), KQ.set(this, ((0, vr.m)(this, xf), (0, vr.m)(this, mf, null))), yQ.set(this, ((0, vr.m)(this, Nf), (0, vr.m)(this, Uf, !1))), BQ.set(this, ((0, vr.m)(this, tf), (0, vr.m)(this, hf, !1))), TQ.set(this, ((0, vr.m)(this, zf), (0, vr.m)(this, Yf, !0))), vQ.set(this, ((0, vr.m)(this, nf), (0, vr.m)(this, ef, !0))), OQ.set(this, ((0, vr.m)(this, Kf), (0, vr.m)(this, yf, !1))), LQ.set(this, ((0, vr.m)(this, Bf), (0, vr.m)(this, Tf, !1))), this._lightingInfos = ((0, vr.m)(this, vf), new Gr.x(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = ar.d.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new lr.h(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, lQ.set(this, (0, vr.m)(this, Of, 0)), this.debugLimit = ((0, vr.m)(this, Lf), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = ar.d.MATERIAL_OPAQUE, this.eC() && !this.eC()?.MU().isWebGPU && this.eC().MU().tt < 2 && Lr.c.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), rr._noiseTextures[this.eC().uniqueId] || (rr._noiseTextures[this.eC().uniqueId] = new Xr.f(TS.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.eC(), !1, !0, 1), this.eC().lC.addOnce((() => {
              rr._noiseTextures[this.eC().uniqueId]?.dispose(), delete rr._noiseTextures[this.eC().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Dr.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), Dr.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Cr(this.eC()), this._environmentFuzzBRDFTexture = gr(this.eC()), this.prePassConfiguration = new cr.b, this._propertyList = {};
            for (const rr of Object.getOwnPropertyNames(this)) {
              const Sr = this[rr];
              Sr instanceof FS && (this._propertyList[rr] = Sr)
            }
            Object.keys(this._propertyList).forEach((rr => {
              const Sr = this._propertyList[rr];
              let Qr = this._uniformsList[Sr.targetUniformName];
              Qr ? Qr.numComponents !== Sr.targetUniformComponentNum ? Lr.c.Error(`Uniform ${Sr.targetUniformName} already exists of size ${Qr.numComponents}, but trying to set it to ${Sr.targetUniformComponentNum}.`) : Qr.requiredDefine !== Sr.requiredDefine && (Qr.requiredDefine = void 0) : (Qr = new cS(Sr.targetUniformName, Sr.targetUniformComponentNum), Qr.requiredDefine = Sr.requiredDefine, this._uniformsList[Sr.targetUniformName] = Qr), "" === Qr.firstLinkedKey && (Qr.firstLinkedKey = Sr.name), Qr.linkedProperties[Sr.name] = Sr
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const rr of Object.getOwnPropertyNames(this)) {
              const Sr = this[rr];
              Sr instanceof oS && (this._samplersList[rr] = Sr)
            }
            for (const rr in this._samplersList) {
              const Sr = this._samplersList[rr].textureDefine;
              this._samplerDefines[Sr] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[Sr + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[Sr + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(Dr.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(Dr.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(rr) {
            this._transparencyMode !== rr && (this._transparencyMode = rr, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== ar.d.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(rr) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(rr)
          }
          clone(Sr) {
            let Qr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Wr = BS.e.Clone((() => new rr(Sr, this.eC())), this, {
              cloneTexturesOnlyOnce: Qr
            });
            return Wr.id = Sr, Wr.name = Sr, this.stencil.copyTo(Wr.stencil), this._clonePlugins(Wr, Zr), Wr
          }
          serialize() {
            const rr = super.serialize();
            return rr.customType = "BABYLON.OpenPBRMaterial", rr
          }
          static Parse(Sr, Qr, Zr) {
            const Wr = BS.e.Parse((() => new rr(Sr.name, Qr)), Sr, Qr, Zr);
            return Sr.stencil && Wr.stencil.parse(Sr.stencil, Qr, Zr), ar.d._ParsePlugins(Sr, Wr, Qr, Zr), Wr
          }
          forceCompilation(rr, Sr, Qr) {
            const Zr = {
              clipPlane: !1,
              useInstances: !1,
              ...Qr
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const Qr = new DS({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Wr = this._prepareEffect(rr, rr, Qr, void 0, void 0, Zr.useInstances, Zr.clipPlane);
              this._onEffectCreatedObservable && (iS.effect = Wr, iS.subMesh = null, this._onEffectCreatedObservable.notifyObservers(iS)), Wr.isReady() ? Sr && Sr(this) : Wr.onCompileObservable.add((() => {
                Sr && Sr(this)
              }))
            })()
          }
          isReadyForSubMesh(Sr, Qr, Zr) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Wr = Qr._drawWrapper;
            if (Wr.effect && this.isFrozen && Wr._wasPreviouslyReady && Wr._wasPreviouslyUsingInstances === Zr) return !0;
            Qr.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Qr.materialDefines = new DS({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const ar = Qr.materialDefines;
            if (this._isReadyForSubMesh(Qr)) return !0;
            const jr = this.eC(),
              Ir = jr.MU();
            if (ar._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, jr.texturesEnabled)) {
              for (const rr in this._samplersList) {
                const Sr = this._samplersList[rr];
                if (Sr.value && !Sr.value.isReadyOrNotBlocking()) return !1
              }
              const Sr = this._getRadianceTexture();
              if (Sr && Dr.d.ReflectionTextureEnabled) {
                if (!Sr.isReadyOrNotBlocking()) return !1;
                if (Sr.irradianceTexture) {
                  if (!Sr.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!Sr.sphericalPolynomial && Sr.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && Dr.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && Dr.d.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && Dr.d.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (rr._noiseTextures[jr.uniqueId] && !rr._noiseTextures[jr.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = ar, this._eventInfo.subMesh = Qr, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (ar._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (ar.AREALIGHTUSED)
              for (let rr = 0; rr < Sr.lightSources.length; rr++)
                if (!Sr.lightSources[rr]._isReady()) return !1;
            if (Ir.getCaps().standardDerivatives || Sr.isVerticesDataPresent(kr.j.NormalKind) || (Sr.createNormals(!0), Lr.c.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + Sr.name)), !(0, sr.b)(jr, Sr, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const fr = Qr.effect,
              Er = ar._areLightsDisposed,
              pr = this._prepareEffect(Sr, Qr.getRenderingMesh(), ar, this.onCompiled, this.onError, Zr, null);
            let xr = !1;
            if (pr)
              if (this._onEffectCreatedObservable && (iS.effect = pr, iS.subMesh = Qr, this._onEffectCreatedObservable.notifyObservers(iS)), this.allowShaderHotSwapping && fr && !pr.isReady()) {
                if (ar.markAsUnprocessed(), xr = this.isFrozen, Er) return ar._areLightsDisposed = !0, !1
              } else jr.resetCachedMaterial(), Qr.setEffect(pr, ar, this._materialContext);
            return !(!Qr.effect || !Qr.effect.isReady()) && (ar._renderId = jr.getRenderId(), Wr._wasPreviouslyReady = !xr, Wr._wasPreviouslyUsingInstances = !!Zr, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const rr = this._uniformBuffer;
            rr.addUniform("vTangentSpaceParams", 2), rr.addUniform("vLightingIntensity", 4), rr.addUniform("pointSize", 1), rr.addUniform("vDebugMode", 2), rr.addUniform("renderTargetSize", 2), rr.addUniform("cameraInfo", 4), rr.addUniform("vTextureRepetitionHexTilingParams", 4), rr.addUniform("backgroundRefractionMatrix", 16), rr.addUniform("vBackgroundRefractionInfos", 3), (0, sr.jb)(rr, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((Sr => {
              rr.addUniform(Sr.name, Sr.numComponents)
            })), Object.values(this._samplersList).forEach((Sr => {
              rr.addUniform(Sr.samplerInfoName, 2), rr.addUniform(Sr.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(rr, Sr, Qr, Zr) {
            if (0 === this.geometryThickness) rr.updateFloat("vGeometryThickness", 0);
            else {
              Zr.getRenderingMesh().getWorldMatrix().decompose(Gr.n.kU[0]);
              const Sr = Math.max(Math.abs(Gr.n.kU[0].x), Math.abs(Gr.n.kU[0].y), Math.abs(Gr.n.kU[0].z));
              rr.updateFloat("vGeometryThickness", this.geometryThickness * Sr)
            }
          }
          bindForSubMesh(Sr, Qr, Zr) {
            const Wr = this.eC(),
              ar = Zr.materialDefines;
            if (!ar) return;
            const jr = Zr.effect;
            if (!jr) return;
            this._activeEffect = jr, Qr.getMeshUniformBuffer().bindToEffect(jr, "Mesh"), Qr.transferToEffect(Sr);
            const Ir = Wr.MU();
            this._uniformBuffer.bindToEffect(jr, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Wr, Qr, Sr, this.isFrozen), NS.b.Bind(Ir.currentRenderPassId, this._activeEffect, Qr, Sr, this);
            const fr = Wr.activeCamera;
            fr ? this._uniformBuffer.updateFloat4("cameraInfo", fr.minZ, fr.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Er = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Er[0], Er[1], Er[2], Er[3]), this._eventInfo.subMesh = Zr, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), ar.OBJECTSPACE_NORMALMAP && (Sr.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const pr = this._mustRebind(Wr, jr, Zr, Qr.visibility),
              xr = Ir._features.needToAlwaysBindUniformBuffers;
            (0, sr.c)(Qr, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, xS.d)(this._activeEffect, this._vertexPullingMetadata);
            const mr = this._uniformBuffer;
            if (pr) {
              this.bindViewProjection(jr);
              const Sr = this._getRadianceTexture();
              if (!mr.useUbo || !this.isFrozen || !mr.isSync || Zr._drawWrapper._forceRebindOnNextCall) {
                if (Wr.texturesEnabled) {
                  for (const rr in this._samplersList) {
                    const Sr = this._samplersList[rr];
                    Sr.value && (mr.updateFloat2(Sr.samplerInfoName, Sr.value.coordinatesIndex, Sr.value.level), (0, sr.B)(Sr.value, mr, Sr.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Wr._mirroredCameraPosition ? mr.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : mr.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, sr.f)(Wr, ar, mr, Fr.e.White(), Sr, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && mr.updateFloat("pointSize", this.pointSize);
                const rr = this._uniformsArray;
                for (let Sr = 0, Qr = rr.length; Sr < Qr; Sr++) {
                  const Qr = rr[Sr];
                  (void 0 === Qr.requiredDefine || ar[Qr.requiredDefine]) && (4 === Qr.numComponents ? (Qr.populateVectorFromLinkedProperties(Gr.n.Vector4[0]), mr.updateVector4(Qr.name, Gr.n.Vector4[0])) : 3 === Qr.numComponents ? (Qr.populateVectorFromLinkedProperties(Gr.n.kU[0]), mr.updateVector3(Qr.name, Gr.n.kU[0])) : 2 === Qr.numComponents ? (Qr.populateVectorFromLinkedProperties(Gr.n.Vector2[0]), mr.updateFloat2(Qr.name, Gr.n.Vector2[0].x, Gr.n.Vector2[0].y)) : 1 === Qr.numComponents && mr.updateFloat(Qr.name, Qr.linkedProperties[Qr.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Wr.environmentIntensity, this._lightingInfos.w = 1, mr.updateVector4("vLightingIntensity", this._lightingInfos), mr.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Wr.texturesEnabled) {
                for (const rr in this._samplersList) {
                  const Sr = this._samplersList[rr];
                  Sr.value && mr.setTexture(Sr.samplerName, Sr.value)
                }
                if ((0, sr.i)(Wr, ar, mr, Sr, this.realTimeFiltering), ar.ENVIRONMENTBRDF && mr.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), ar.FUZZENVIRONMENTBRDF && mr.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), ar.REFRACTED_BACKGROUND && (mr.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), mr.hrr("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Gr.n.kU[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), mr.updateVector3("vBackgroundRefractionInfos", Gr.n.kU[1])), (ar.ANISOTROPIC || ar.FUZZ || ar.REFRACTED_BACKGROUND || ar.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && mr.setTexture("blueNoiseSampler", rr._noiseTextures[this.eC().uniqueId]), ar.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const rr = this.sssIrradianceTexture.getSize().width,
                    Sr = this.sssIrradianceTexture.getSize().height;
                  mr.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), mr.setTexture("sceneDepthSampler", this.sssDepthTexture), mr.updateFloat2("renderTargetSize", rr, Sr)
                }
              }
              this.eC().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Qr) && this.eC().depthPeelingRenderer.bind(jr), this._eventInfo.subMesh = Zr, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, pS.e)(this._activeEffect, this, Wr), this.bindEyePosition(jr)
            } else xr && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Wr, Wr.MU(), Zr), !pr && this.isFrozen && !xr || !Wr.lightsEnabled || this._disableLighting || (0, sr.m)(Wr, Qr, this._activeEffect, ar, this._maxSimultaneousLights), !pr && this.isFrozen || (this.bindView(jr), (0, sr.d)(Wr, Qr, this._activeEffect, !0), ar.NUM_MORPH_INFLUENCERS && (0, sr.t)(Qr, this._activeEffect), ar.BAKED_VERTEX_ANIMATION_TEXTURE && Qr.bakedVertexAnimationManager?.bind(jr, ar.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, sr.q)(ar, this._activeEffect, Wr)), this._afterBind(Qr, this._activeEffect, Zr), mr.update()
          }
          getAnimatables() {
            const rr = super.getAnimatables();
            for (const Sr in this._samplersList) {
              const Qr = this._samplersList[Sr];
              Qr.value && Qr.value.animations && Qr.value.animations.length > 0 && rr.push(Qr.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && rr.push(this._radianceTexture), rr
          }
          getActiveTextures() {
            const rr = super.getActiveTextures();
            for (const Sr in this._samplersList) {
              const Qr = this._samplersList[Sr];
              Qr.value && rr.push(Qr.value)
            }
            return this._radianceTexture && rr.push(this._radianceTexture), rr
          }
          hasTexture(rr) {
            if (super.hasTexture(rr)) return !0;
            for (const Sr in this._samplersList) {
              if (this._samplersList[Sr].value === rr) return !0
            }
            return this._radianceTexture === rr
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(rr, Sr) {
            if (this._breakShaderLoadedCheck = !0, Sr) {
              this._environmentBRDFTexture && this.eC().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.eC().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const rr in this._samplersList) {
                const Sr = this._samplersList[rr];
                Sr.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(rr, Sr)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.eC().environmentTexture
          }
          _prepareEffect(Sr, Qr, Zr) {
            let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Ir = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(Sr, Qr, Zr, jr, Ir), !Zr.isDirty) return null;
            Zr.markAsProcessed();
            const fr = this.eC().MU(),
              Er = new dr.e;
            let pr = 0;
            Zr.USESPHERICALINVERTEX && Er.addFallback(pr++, "USESPHERICALINVERTEX"), Zr.FOG && Er.addFallback(pr, "FOG"), Zr.SPECULARAA && Er.addFallback(pr, "SPECULARAA"), Zr.POINTSIZE && Er.addFallback(pr, "POINTSIZE"), Zr.LOGARITHMICDEPTH && Er.addFallback(pr, "LOGARITHMICDEPTH"), Zr.PARALLAX && Er.addFallback(pr, "PARALLAX"), Zr.PARALLAX_RHS && Er.addFallback(pr, "PARALLAX_RHS"), Zr.PARALLAXOCCLUSION && Er.addFallback(pr++, "PARALLAXOCCLUSION"), Zr.ENVIRONMENTBRDF && Er.addFallback(pr++, "ENVIRONMENTBRDF"), Zr.TANGENT && Er.addFallback(pr++, "TANGENT"), pr = (0, sr.C)(Zr, Er, this._maxSimultaneousLights, pr), Zr.SPECULARTERM && Er.addFallback(pr++, "SPECULARTERM"), Zr.USESPHERICALFROMREFLECTIONMAP && Er.addFallback(pr++, "USESPHERICALFROMREFLECTIONMAP"), Zr.USEIRRADIANCEMAP && Er.addFallback(pr++, "USEIRRADIANCEMAP"), Zr.NORMAL && Er.addFallback(pr++, "NORMAL"), Zr.VERTEXCOLOR && Er.addFallback(pr++, "VERTEXCOLOR"), Zr.MORPHTARGETS && Er.addFallback(pr++, "MORPHTARGETS"), Zr.MULTIVIEW && Er.addFallback(0, "MULTIVIEW");
            const xr = [kr.j.PositionKind];
            Zr.NORMAL && xr.push(kr.j.NormalKind), Zr.TANGENT && xr.push(kr.j.TangentKind);
            for (let rr = 1; rr <= 6; ++rr) Zr["UV" + rr] && xr.push(`uv${1===rr?"":rr}`);
            Zr.VERTEXCOLOR && xr.push(kr.j.ColorKind), (0, sr.G)(xr, Sr, Zr, Er), (0, sr.I)(xr, Zr), (0, sr.K)(xr, Sr, Zr), (0, sr.E)(xr, Sr, Zr);
            let mr = "openpbr";
            const Nr = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const rr in this._uniformsList) Nr.push(rr);
            const Ur = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Zr.FUZZENVIRONMENTBRDF && Ur.push("environmentFuzzBrdfSampler"), Zr.REFRACTED_BACKGROUND && Ur.push("backgroundRefractionSampler"), (Zr.ANISOTROPIC || Zr.FUZZ || Zr.REFRACTED_BACKGROUND || Zr.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Ur.push("blueNoiseSampler"), Zr.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (Ur.push("sceneIrradianceSampler"), Ur.push("sceneDepthSampler"));
            for (const rr in this._samplersList) {
              const Sr = this._samplersList[rr];
              Ur.push(Sr.samplerName), Nr.push(Sr.samplerInfoName), Nr.push(Sr.samplerMatrixName)
            }(0, sr.mb)(Nr, Ur, !0);
            const tr = ["Material", "Scene", "Mesh"],
              hr = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Zr.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Er, this._eventInfo.fallbackRank = pr, this._eventInfo.defines = Zr, this._eventInfo.uniforms = Nr, this._eventInfo.attributes = xr, this._eventInfo.samplers = Ur, this._eventInfo.uniformBuffersNames = tr, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Sr, this._eventInfo.indexParameters = hr, this._callbackPluginEventGeneric(128, this._eventInfo), NS.b.AddUniformsAndSamplers(Nr, Ur), cr.b.AddUniforms(Nr), cr.b.AddSamplers(Ur), (0, pS.c)(Nr), this._useVertexPulling) {
              const rr = Qr?.geometry;
              rr && (this._vertexPullingMetadata = (0, xS.f)(rr), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((rr, Sr) => {
                Nr.push(`vp_${Sr}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            br.b && (br.b.PrepareUniforms(Nr, Zr), br.b.PrepareSamplers(Ur, Zr)), (0, sr.nb)({
              uniformsNames: Nr,
              uniformBuffersNames: tr,
              samplers: Ur,
              defines: Zr,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const zr = {};
            this.customShaderNameResolve && (mr = this.customShaderNameResolve(mr, Nr, tr, Ur, Zr, xr, zr));
            const Yr = Zr.toString(),
              nr = fr.createEffect(mr, {
                attributes: xr,
                uniformsNames: Nr,
                uniformBuffersNames: tr,
                samplers: Ur,
                defines: Yr,
                fallbacks: Er,
                onCompiled: Wr,
                onError: ar,
                indexParameters: hr,
                processFinalCode: zr.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Zr.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: rr._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, fr);
            return this._eventInfo.customCode = void 0, nr
          }
          _prepareDefines(Sr, Qr, Zr) {
            let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              jr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Ir = Qr.hasThinInstances,
              fr = this.eC(),
              Er = fr.MU();
            (0, sr.W)(fr, Sr, Zr, !0, this._maxSimultaneousLights, this._disableLighting), Zr._needNormals = !0, (0, sr.ab)(fr, Zr);
            const pr = this.needAlphaBlendingForMesh(Sr) && this.eC().useOrderIndependentTransparency;
            if ((0, sr.fb)(fr, Zr, this.canRenderToMRT && !pr), (0, sr.db)(fr, Zr, pr), NS.b.PrepareDefines(Er.currentRenderPassId, Sr, Zr), Zr._areTexturesDirty) {
              Zr._needUVs = !1;
              for (let rr = 1; rr <= 6; ++rr) Zr["MAINUV" + rr] = !1;
              if (fr.texturesEnabled) {
                for (const Qr in this._samplersList) {
                  const rr = this._samplersList[Qr];
                  rr.value ? ((0, sr.Y)(rr.value, Zr, rr.textureDefine), Zr[rr.textureDefine + "_GAMMA"] = rr.value.gammaSpace) : Zr[rr.textureDefine] = !1
                }
                const rr = this._getRadianceTexture(),
                  Sr = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Er.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, sr.U)(fr, rr, Zr, this.realTimeFiltering, this.realTimeFilteringQuality, !Sr), this._baseMetalnessTexture && (Zr.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Zr.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Zr.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Zr.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Zr.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Zr.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Zr.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Zr.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Zr.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Zr.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Zr.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Zr.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && Dr.d.DiffuseTextureEnabled ? (Zr.PARALLAX = !0, Zr.PARALLAX_RHS = fr.useRightHandedSystem, Zr.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Zr.PARALLAX = !1, Zr.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Zr.PARALLAX = !1, Zr.PARALLAX_RHS = !1, Zr.PARALLAXOCCLUSION = !1, Zr.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Dr.d.ReflectionTextureEnabled ? (Zr.ENVIRONMENTBRDF = !0, Zr.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Zr.ENVIRONMENTBRDF = !1, Zr.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Zr.FUZZENVIRONMENTBRDF = !0 : Zr.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Zr.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && Dr.d.RefractionTextureEnabled, Zr.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Zr.REFRACTED_LIGHTS = !0;
                  const rr = this._getRadianceTexture();
                  rr ? (Zr.REFRACTED_ENVIRONMENT = Dr.d.RefractionTextureEnabled, Zr.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.eC().useRightHandedSystem ? !rr.invertZ : rr.invertZ, Zr.REFRACTED_ENVIRONMENT_LOCAL_CUBE = rr.isCube && rr.boundingBoxSize) : Zr.REFRACTED_ENVIRONMENT = !1
                } else Zr.REFRACTED_BACKGROUND = !1, Zr.REFRACTED_LIGHTS = !1, Zr.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Zr.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Zr.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === ar.d.LIGHTFALLOFF_STANDARD ? (Zr.USEPHYSICALLIGHTFALLOFF = !1, Zr.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === ar.d.LIGHTFALLOFF_GLTF ? (Zr.USEPHYSICALLIGHTFALLOFF = !1, Zr.USEGLTFLIGHTFALLOFF = !0) : (Zr.USEPHYSICALLIGHTFALLOFF = !0, Zr.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Zr.TWOSIDEDLIGHTING = !0 : Zr.TWOSIDEDLIGHTING = !1, Zr.MIRRORED = !!fr._mirroredCameraPosition, Zr.SPECULARAA = Er.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Zr._areTexturesDirty || Zr._areMiscDirty) && (Zr.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Zr.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Zr.ALPHABLEND = this.needAlphaBlendingForMesh(Sr)), Zr._areTexturesDirty && (Zr.TEXTURE_REPETITION_MODE = Er.version > 1 || Er.isWebGPU ? this.textureRepetitionMode : 0), Zr._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Zr), Zr.FORCENORMALFORWARD = this._forceNormalForward, Zr.RADIANCEOCCLUSION = this._useRadianceOcclusion, Zr.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && rr._noiseTextures[fr.uniqueId] && Dr.d.ReflectionTextureEnabled ? (Zr.ANISOTROPIC = !0, Sr.isVerticesDataPresent(kr.j.TangentKind) || (Zr._needUVs = !0, Zr.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Zr.USE_GLTF_STYLE_ANISOTROPY = !0), Zr.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Zr.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Zr.ANISOTROPIC = !1, Zr.USE_GLTF_STYLE_ANISOTROPY = !1, Zr.ANISOTROPIC_BASE = !1, Zr.ANISOTROPIC_COAT = !1), Zr.THIN_FILM = this.thinFilmWeight > 0, Zr.IRIDESCENCE = this.thinFilmWeight > 0, Zr.DISPERSION = this.transmissionDispersionScale > 0, Zr.SCATTERING = this.hasScattering;
            if (Zr.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Zr.TRANSMISSION_SLAB = this.transmissionWeight > 0, Zr.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Zr.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Zr.PREPASS && (Zr.SUBSURFACE_SLAB || Zr.TRANSMISSION_SLAB_VOLUME)) {
              let rr = !1;
              if (!this.sssIrradianceTexture && fr.geometryBufferRenderer) {
                const Sr = fr.geometryBufferRenderer.getTextureIndex(AS.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = fr.geometryBufferRenderer.getGBuffer().textures[Sr], rr = !0
              }
              if (!this.sssDepthTexture && fr.geometryBufferRenderer) {
                const Sr = fr.geometryBufferRenderer.getTextureIndex(AS.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = fr.geometryBufferRenderer.getGBuffer().textures[Sr], rr = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Zr.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, rr && (Zr.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Zr.FUZZ = this.fuzzWeight > 0 && Dr.d.ReflectionTextureEnabled, Zr.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Zr.FUZZ ? (Sr.isVerticesDataPresent(kr.j.TangentKind) || (Zr._needUVs = !0, Zr.MAINUV1 = !0), this._environmentFuzzBRDFTexture = gr(this.eC()), Zr.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Zr.FUZZENVIRONMENTBRDF = !1, Zr.FUZZ_IBL_SAMPLES = 0), Zr._areMiscDirty && ((0, sr.Z)(Sr, fr, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Sr), Zr, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Qr, this._isVertexOutputInvariant), Zr.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Sr.isVerticesDataPresent(kr.j.NormalKind), Zr.DEBUGMODE = this._debugMode), (0, sr.Q)(fr, Er, this, Zr, !!Wr, jr, Ir), this._eventInfo.defines = Zr, this._eventInfo.mesh = Sr, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, sr.N)(Sr, Zr, !0, !0, !0, this._transparencyMode !== ar.d.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, Sr = new WeakMap, Zr = new WeakMap, Wr = new WeakMap, jr = new WeakMap, Ir = new WeakMap, fr = new WeakMap, Er = new WeakMap, pr = new WeakMap, xr = new WeakMap, mr = new WeakMap, Nr = new WeakMap, Ur = new WeakMap, tr = new WeakMap, hr = new WeakMap, zr = new WeakMap, Yr = new WeakMap, nr = new WeakMap, er = new WeakMap, Kr = new WeakMap, yr = new WeakMap, Br = new WeakMap, Tr = new WeakMap, Pr = new WeakMap, Hr = new WeakMap, qr = new WeakMap, Rr = new WeakMap, Mr = new WeakMap, Ar = new WeakMap, Vr = new WeakMap, ir = new WeakMap, wr = new WeakMap, or = new WeakMap, Jr = new WeakMap, ur = new WeakMap, rS = new WeakMap, SS = new WeakMap, QS = new WeakMap, ZS = new WeakMap, WS = new WeakMap, aS = new WeakMap, jS = new WeakMap, IS = new WeakMap, fS = new WeakMap, ES = new WeakMap, US = new WeakMap, tS = new WeakMap, hS = new WeakMap, zS = new WeakMap, YS = new WeakMap, nS = new WeakMap, eS = new WeakMap, KS = new WeakMap, yS = new WeakMap, vS = new WeakMap, OS = new WeakMap, LS = new WeakMap, lS = new WeakMap, XS = new WeakMap, PS = new WeakMap, HS = new WeakMap, qS = new WeakMap, RS = new WeakMap, gS = new WeakMap, CS = new WeakMap, MS = new WeakMap, GS = new WeakMap, kS = new WeakMap, VS = new WeakMap, wS = new WeakMap, bS = new WeakMap, JS = new WeakMap, sS = new WeakMap, uS = new WeakMap, rQ = new WeakMap, SQ = new WeakMap, QQ = new WeakMap, ZQ = new WeakMap, WQ = new WeakMap, aQ = new WeakMap, jQ = new WeakMap, IQ = new WeakMap, fQ = new WeakMap, EQ = new WeakMap, pQ = new WeakMap, xQ = new WeakMap, mQ = new WeakMap, NQ = new WeakMap, UQ = new WeakMap, tQ = new WeakMap, hQ = new WeakMap, zQ = new WeakMap, YQ = new WeakMap, nQ = new WeakMap, eQ = new WeakMap, KQ = new WeakMap, yQ = new WeakMap, BQ = new WeakMap, TQ = new WeakMap, vQ = new WeakMap, OQ = new WeakMap, LQ = new WeakMap, lQ = new WeakMap, (() => {
          const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(PW[Symbol.metadata] ?? null) : void 0;
          XQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], PQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], HQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], qQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], RQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], gQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], CQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], MQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], GQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], kQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], AQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], VQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], iQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], wQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], cQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], FQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], oQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], bQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], JQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], DQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], dQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], sQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], uQ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], rZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], SZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], QZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], ZZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], WZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], aZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], jZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], IZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], fZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], EZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], pZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], xZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], mZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], NZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], UZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], tZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], hZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], zZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], YZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], nZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], eZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], KZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], yZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], BZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], TZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], vZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], OZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], LZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], lZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], XZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], PZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], HZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], qZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], RZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], gZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], CZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], MZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], GZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], kZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], AZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], VZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], iZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], wZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], cZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], FZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], oZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], bZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], JZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], DZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], dZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], sZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], uZ = [(0, Or.c)("_markAllSubMeshesAsTexturesDirty")], rW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], SW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], QW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], ZW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], WW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], aW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], jW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], IW = [(0, Or.G)()], fW = [(0, Or.G)()], EW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], pW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], xW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], mW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], NW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsLightsDirty")], UW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsLightsDirty")], hW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], zW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], nW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], eW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], KW = [(0, Or.f)("_markAllSubMeshesAsTexturesDirty")], yW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], BW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], TW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], vW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], OW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], LW = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], lW = [(0, Or.f)("_markAllSubMeshesAsMiscDirty")], XW = [(0, Or.G)()], (0, vr.k)(rr, null, XQ, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: rr => "baseWeight" in rr,
              get: rr => rr.baseWeight,
              set: (rr, Sr) => {
                rr.baseWeight = Sr
              }
            },
            metadata: Sr
          }, qW, RW), (0, vr.k)(rr, null, PQ, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "baseWeightTexture" in rr,
              get: rr => rr.baseWeightTexture,
              set: (rr, Sr) => {
                rr.baseWeightTexture = Sr
              }
            },
            metadata: Sr
          }, gW, CW), (0, vr.k)(rr, null, HQ, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "baseColor" in rr,
              get: rr => rr.baseColor,
              set: (rr, Sr) => {
                rr.baseColor = Sr
              }
            },
            metadata: Sr
          }, MW, GW), (0, vr.k)(rr, null, qQ, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "baseColorTexture" in rr,
              get: rr => rr.baseColorTexture,
              set: (rr, Sr) => {
                rr.baseColorTexture = Sr
              }
            },
            metadata: Sr
          }, kW, AW), (0, vr.k)(rr, null, RQ, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: rr => "baseDiffuseRoughness" in rr,
              get: rr => rr.baseDiffuseRoughness,
              set: (rr, Sr) => {
                rr.baseDiffuseRoughness = Sr
              }
            },
            metadata: Sr
          }, VW, iW), (0, vr.k)(rr, null, gQ, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "baseDiffuseRoughnessTexture" in rr,
              get: rr => rr.baseDiffuseRoughnessTexture,
              set: (rr, Sr) => {
                rr.baseDiffuseRoughnessTexture = Sr
              }
            },
            metadata: Sr
          }, wW, cW), (0, vr.k)(rr, null, CQ, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: rr => "baseMetalness" in rr,
              get: rr => rr.baseMetalness,
              set: (rr, Sr) => {
                rr.baseMetalness = Sr
              }
            },
            metadata: Sr
          }, FW, oW), (0, vr.k)(rr, null, MQ, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "baseMetalnessTexture" in rr,
              get: rr => rr.baseMetalnessTexture,
              set: (rr, Sr) => {
                rr.baseMetalnessTexture = Sr
              }
            },
            metadata: Sr
          }, bW, JW), (0, vr.k)(rr, null, GQ, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: rr => "specularWeight" in rr,
              get: rr => rr.specularWeight,
              set: (rr, Sr) => {
                rr.specularWeight = Sr
              }
            },
            metadata: Sr
          }, DW, dW), (0, vr.k)(rr, null, kQ, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "specularWeightTexture" in rr,
              get: rr => rr.specularWeightTexture,
              set: (rr, Sr) => {
                rr.specularWeightTexture = Sr
              }
            },
            metadata: Sr
          }, sW, uW), (0, vr.k)(rr, null, AQ, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "specularColor" in rr,
              get: rr => rr.specularColor,
              set: (rr, Sr) => {
                rr.specularColor = Sr
              }
            },
            metadata: Sr
          }, ra, Sa), (0, vr.k)(rr, null, VQ, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "specularColorTexture" in rr,
              get: rr => rr.specularColorTexture,
              set: (rr, Sr) => {
                rr.specularColorTexture = Sr
              }
            },
            metadata: Sr
          }, Qa, Za), (0, vr.k)(rr, null, iQ, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: rr => "specularRoughness" in rr,
              get: rr => rr.specularRoughness,
              set: (rr, Sr) => {
                rr.specularRoughness = Sr
              }
            },
            metadata: Sr
          }, Wa, aa), (0, vr.k)(rr, null, wQ, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "specularRoughnessTexture" in rr,
              get: rr => rr.specularRoughnessTexture,
              set: (rr, Sr) => {
                rr.specularRoughnessTexture = Sr
              }
            },
            metadata: Sr
          }, ja, Ia), (0, vr.k)(rr, null, cQ, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: rr => "specularRoughnessAnisotropy" in rr,
              get: rr => rr.specularRoughnessAnisotropy,
              set: (rr, Sr) => {
                rr.specularRoughnessAnisotropy = Sr
              }
            },
            metadata: Sr
          }, fa, Ea), (0, vr.k)(rr, null, FQ, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "specularRoughnessAnisotropyTexture" in rr,
              get: rr => rr.specularRoughnessAnisotropyTexture,
              set: (rr, Sr) => {
                rr.specularRoughnessAnisotropyTexture = Sr
              }
            },
            metadata: Sr
          }, pa, xa), (0, vr.k)(rr, null, oQ, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: rr => "specularIor" in rr,
              get: rr => rr.specularIor,
              set: (rr, Sr) => {
                rr.specularIor = Sr
              }
            },
            metadata: Sr
          }, ma, Na), (0, vr.k)(rr, null, bQ, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: rr => "transmissionWeight" in rr,
              get: rr => rr.transmissionWeight,
              set: (rr, Sr) => {
                rr.transmissionWeight = Sr
              }
            },
            metadata: Sr
          }, Ua, ta), (0, vr.k)(rr, null, JQ, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "transmissionWeightTexture" in rr,
              get: rr => rr.transmissionWeightTexture,
              set: (rr, Sr) => {
                rr.transmissionWeightTexture = Sr
              }
            },
            metadata: Sr
          }, ha, za), (0, vr.k)(rr, null, DQ, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "transmissionColor" in rr,
              get: rr => rr.transmissionColor,
              set: (rr, Sr) => {
                rr.transmissionColor = Sr
              }
            },
            metadata: Sr
          }, Ya, na), (0, vr.k)(rr, null, dQ, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "transmissionColorTexture" in rr,
              get: rr => rr.transmissionColorTexture,
              set: (rr, Sr) => {
                rr.transmissionColorTexture = Sr
              }
            },
            metadata: Sr
          }, ea, Ka), (0, vr.k)(rr, null, sQ, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: rr => "transmissionDepth" in rr,
              get: rr => rr.transmissionDepth,
              set: (rr, Sr) => {
                rr.transmissionDepth = Sr
              }
            },
            metadata: Sr
          }, ya, Ba), (0, vr.k)(rr, null, uQ, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "transmissionDepthTexture" in rr,
              get: rr => rr.transmissionDepthTexture,
              set: (rr, Sr) => {
                rr.transmissionDepthTexture = Sr
              }
            },
            metadata: Sr
          }, Ta, va), (0, vr.k)(rr, null, rZ, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: rr => "transmissionScatter" in rr,
              get: rr => rr.transmissionScatter,
              set: (rr, Sr) => {
                rr.transmissionScatter = Sr
              }
            },
            metadata: Sr
          }, Oa, La), (0, vr.k)(rr, null, SZ, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "transmissionScatterTexture" in rr,
              get: rr => rr.transmissionScatterTexture,
              set: (rr, Sr) => {
                rr.transmissionScatterTexture = Sr
              }
            },
            metadata: Sr
          }, la, Xa), (0, vr.k)(rr, null, QZ, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: rr => "transmissionScatterAnisotropy" in rr,
              get: rr => rr.transmissionScatterAnisotropy,
              set: (rr, Sr) => {
                rr.transmissionScatterAnisotropy = Sr
              }
            },
            metadata: Sr
          }, Pa, Ha), (0, vr.k)(rr, null, ZZ, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: rr => "transmissionDispersionScale" in rr,
              get: rr => rr.transmissionDispersionScale,
              set: (rr, Sr) => {
                rr.transmissionDispersionScale = Sr
              }
            },
            metadata: Sr
          }, qa, Ra), (0, vr.k)(rr, null, WZ, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "transmissionDispersionScaleTexture" in rr,
              get: rr => rr.transmissionDispersionScaleTexture,
              set: (rr, Sr) => {
                rr.transmissionDispersionScaleTexture = Sr
              }
            },
            metadata: Sr
          }, ga, Ca), (0, vr.k)(rr, null, aZ, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: rr => "transmissionDispersionAbbeNumber" in rr,
              get: rr => rr.transmissionDispersionAbbeNumber,
              set: (rr, Sr) => {
                rr.transmissionDispersionAbbeNumber = Sr
              }
            },
            metadata: Sr
          }, Ma, Ga), (0, vr.k)(rr, null, jZ, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: rr => "subsurfaceWeight" in rr,
              get: rr => rr.subsurfaceWeight,
              set: (rr, Sr) => {
                rr.subsurfaceWeight = Sr
              }
            },
            metadata: Sr
          }, ka, Aa), (0, vr.k)(rr, null, IZ, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "subsurfaceWeightTexture" in rr,
              get: rr => rr.subsurfaceWeightTexture,
              set: (rr, Sr) => {
                rr.subsurfaceWeightTexture = Sr
              }
            },
            metadata: Sr
          }, Va, ia), (0, vr.k)(rr, null, fZ, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "subsurfaceColor" in rr,
              get: rr => rr.subsurfaceColor,
              set: (rr, Sr) => {
                rr.subsurfaceColor = Sr
              }
            },
            metadata: Sr
          }, wa, ca), (0, vr.k)(rr, null, EZ, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "subsurfaceColorTexture" in rr,
              get: rr => rr.subsurfaceColorTexture,
              set: (rr, Sr) => {
                rr.subsurfaceColorTexture = Sr
              }
            },
            metadata: Sr
          }, Fa, oa), (0, vr.k)(rr, null, pZ, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: rr => "subsurfaceRadius" in rr,
              get: rr => rr.subsurfaceRadius,
              set: (rr, Sr) => {
                rr.subsurfaceRadius = Sr
              }
            },
            metadata: Sr
          }, ba, Ja), (0, vr.k)(rr, null, xZ, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: rr => "subsurfaceRadiusScale" in rr,
              get: rr => rr.subsurfaceRadiusScale,
              set: (rr, Sr) => {
                rr.subsurfaceRadiusScale = Sr
              }
            },
            metadata: Sr
          }, Da, da), (0, vr.k)(rr, null, mZ, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "subsurfaceRadiusScaleTexture" in rr,
              get: rr => rr.subsurfaceRadiusScaleTexture,
              set: (rr, Sr) => {
                rr.subsurfaceRadiusScaleTexture = Sr
              }
            },
            metadata: Sr
          }, sa, ua), (0, vr.k)(rr, null, NZ, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: rr => "subsurfaceScatterAnisotropy" in rr,
              get: rr => rr.subsurfaceScatterAnisotropy,
              set: (rr, Sr) => {
                rr.subsurfaceScatterAnisotropy = Sr
              }
            },
            metadata: Sr
          }, rj, Sj), (0, vr.k)(rr, null, UZ, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: rr => "coatWeight" in rr,
              get: rr => rr.coatWeight,
              set: (rr, Sr) => {
                rr.coatWeight = Sr
              }
            },
            metadata: Sr
          }, Qj, Zj), (0, vr.k)(rr, null, tZ, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "coatWeightTexture" in rr,
              get: rr => rr.coatWeightTexture,
              set: (rr, Sr) => {
                rr.coatWeightTexture = Sr
              }
            },
            metadata: Sr
          }, Wj, aj), (0, vr.k)(rr, null, hZ, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "coatColor" in rr,
              get: rr => rr.coatColor,
              set: (rr, Sr) => {
                rr.coatColor = Sr
              }
            },
            metadata: Sr
          }, jj, Ij), (0, vr.k)(rr, null, zZ, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "coatColorTexture" in rr,
              get: rr => rr.coatColorTexture,
              set: (rr, Sr) => {
                rr.coatColorTexture = Sr
              }
            },
            metadata: Sr
          }, fj, Ej), (0, vr.k)(rr, null, YZ, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: rr => "coatRoughness" in rr,
              get: rr => rr.coatRoughness,
              set: (rr, Sr) => {
                rr.coatRoughness = Sr
              }
            },
            metadata: Sr
          }, pj, xj), (0, vr.k)(rr, null, nZ, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "coatRoughnessTexture" in rr,
              get: rr => rr.coatRoughnessTexture,
              set: (rr, Sr) => {
                rr.coatRoughnessTexture = Sr
              }
            },
            metadata: Sr
          }, mj, Nj), (0, vr.k)(rr, null, eZ, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: rr => "coatRoughnessAnisotropy" in rr,
              get: rr => rr.coatRoughnessAnisotropy,
              set: (rr, Sr) => {
                rr.coatRoughnessAnisotropy = Sr
              }
            },
            metadata: Sr
          }, Uj, tj), (0, vr.k)(rr, null, KZ, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "coatRoughnessAnisotropyTexture" in rr,
              get: rr => rr.coatRoughnessAnisotropyTexture,
              set: (rr, Sr) => {
                rr.coatRoughnessAnisotropyTexture = Sr
              }
            },
            metadata: Sr
          }, hj, zj), (0, vr.k)(rr, null, yZ, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: rr => "coatIor" in rr,
              get: rr => rr.coatIor,
              set: (rr, Sr) => {
                rr.coatIor = Sr
              }
            },
            metadata: Sr
          }, Yj, nj), (0, vr.k)(rr, null, BZ, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: rr => "coatDarkening" in rr,
              get: rr => rr.coatDarkening,
              set: (rr, Sr) => {
                rr.coatDarkening = Sr
              }
            },
            metadata: Sr
          }, ej, Kj), (0, vr.k)(rr, null, TZ, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "coatDarkeningTexture" in rr,
              get: rr => rr.coatDarkeningTexture,
              set: (rr, Sr) => {
                rr.coatDarkeningTexture = Sr
              }
            },
            metadata: Sr
          }, yj, Bj), (0, vr.k)(rr, null, vZ, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: rr => "fuzzWeight" in rr,
              get: rr => rr.fuzzWeight,
              set: (rr, Sr) => {
                rr.fuzzWeight = Sr
              }
            },
            metadata: Sr
          }, Tj, vj), (0, vr.k)(rr, null, OZ, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "fuzzWeightTexture" in rr,
              get: rr => rr.fuzzWeightTexture,
              set: (rr, Sr) => {
                rr.fuzzWeightTexture = Sr
              }
            },
            metadata: Sr
          }, Oj, Lj), (0, vr.k)(rr, null, LZ, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "fuzzColor" in rr,
              get: rr => rr.fuzzColor,
              set: (rr, Sr) => {
                rr.fuzzColor = Sr
              }
            },
            metadata: Sr
          }, lj, Xj), (0, vr.k)(rr, null, lZ, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "fuzzColorTexture" in rr,
              get: rr => rr.fuzzColorTexture,
              set: (rr, Sr) => {
                rr.fuzzColorTexture = Sr
              }
            },
            metadata: Sr
          }, Pj, Hj), (0, vr.k)(rr, null, XZ, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: rr => "fuzzRoughness" in rr,
              get: rr => rr.fuzzRoughness,
              set: (rr, Sr) => {
                rr.fuzzRoughness = Sr
              }
            },
            metadata: Sr
          }, qj, Rj), (0, vr.k)(rr, null, PZ, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "fuzzRoughnessTexture" in rr,
              get: rr => rr.fuzzRoughnessTexture,
              set: (rr, Sr) => {
                rr.fuzzRoughnessTexture = Sr
              }
            },
            metadata: Sr
          }, gj, Cj), (0, vr.k)(rr, null, HZ, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: rr => "geometryThinWalled" in rr,
              get: rr => rr.geometryThinWalled,
              set: (rr, Sr) => {
                rr.geometryThinWalled = Sr
              }
            },
            metadata: Sr
          }, Mj, Gj), (0, vr.k)(rr, null, qZ, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "geometryNormalTexture" in rr,
              get: rr => rr.geometryNormalTexture,
              set: (rr, Sr) => {
                rr.geometryNormalTexture = Sr
              }
            },
            metadata: Sr
          }, kj, Aj), (0, vr.k)(rr, null, RZ, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: rr => "geometryTangent" in rr,
              get: rr => rr.geometryTangent,
              set: (rr, Sr) => {
                rr.geometryTangent = Sr
              }
            },
            metadata: Sr
          }, Vj, ij), (0, vr.k)(rr, null, gZ, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "geometryTangentTexture" in rr,
              get: rr => rr.geometryTangentTexture,
              set: (rr, Sr) => {
                rr.geometryTangentTexture = Sr
              }
            },
            metadata: Sr
          }, wj, cj), (0, vr.k)(rr, null, CZ, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "geometryCoatNormalTexture" in rr,
              get: rr => rr.geometryCoatNormalTexture,
              set: (rr, Sr) => {
                rr.geometryCoatNormalTexture = Sr
              }
            },
            metadata: Sr
          }, Fj, oj), (0, vr.k)(rr, null, MZ, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: rr => "geometryCoatTangent" in rr,
              get: rr => rr.geometryCoatTangent,
              set: (rr, Sr) => {
                rr.geometryCoatTangent = Sr
              }
            },
            metadata: Sr
          }, bj, Jj), (0, vr.k)(rr, null, GZ, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "geometryCoatTangentTexture" in rr,
              get: rr => rr.geometryCoatTangentTexture,
              set: (rr, Sr) => {
                rr.geometryCoatTangentTexture = Sr
              }
            },
            metadata: Sr
          }, Dj, dj), (0, vr.k)(rr, null, kZ, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: rr => "geometryOpacity" in rr,
              get: rr => rr.geometryOpacity,
              set: (rr, Sr) => {
                rr.geometryOpacity = Sr
              }
            },
            metadata: Sr
          }, sj, uj), (0, vr.k)(rr, null, AZ, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "geometryOpacityTexture" in rr,
              get: rr => rr.geometryOpacityTexture,
              set: (rr, Sr) => {
                rr.geometryOpacityTexture = Sr
              }
            },
            metadata: Sr
          }, rI, SI), (0, vr.k)(rr, null, VZ, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: rr => "geometryThickness" in rr,
              get: rr => rr.geometryThickness,
              set: (rr, Sr) => {
                rr.geometryThickness = Sr
              }
            },
            metadata: Sr
          }, QI, ZI), (0, vr.k)(rr, null, iZ, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "geometryThicknessTexture" in rr,
              get: rr => rr.geometryThicknessTexture,
              set: (rr, Sr) => {
                rr.geometryThicknessTexture = Sr
              }
            },
            metadata: Sr
          }, WI, aI), (0, vr.k)(rr, null, wZ, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: rr => "emissionLuminance" in rr,
              get: rr => rr.emissionLuminance,
              set: (rr, Sr) => {
                rr.emissionLuminance = Sr
              }
            },
            metadata: Sr
          }, jI, II), (0, vr.k)(rr, null, cZ, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "emissionColor" in rr,
              get: rr => rr.emissionColor,
              set: (rr, Sr) => {
                rr.emissionColor = Sr
              }
            },
            metadata: Sr
          }, fI, EI), (0, vr.k)(rr, null, FZ, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "emissionColorTexture" in rr,
              get: rr => rr.emissionColorTexture,
              set: (rr, Sr) => {
                rr.emissionColorTexture = Sr
              }
            },
            metadata: Sr
          }, pI, xI), (0, vr.k)(rr, null, oZ, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: rr => "thinFilmWeight" in rr,
              get: rr => rr.thinFilmWeight,
              set: (rr, Sr) => {
                rr.thinFilmWeight = Sr
              }
            },
            metadata: Sr
          }, mI, NI), (0, vr.k)(rr, null, bZ, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "thinFilmWeightTexture" in rr,
              get: rr => rr.thinFilmWeightTexture,
              set: (rr, Sr) => {
                rr.thinFilmWeightTexture = Sr
              }
            },
            metadata: Sr
          }, UI, tI), (0, vr.k)(rr, null, JZ, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: rr => "thinFilmThickness" in rr,
              get: rr => rr.thinFilmThickness,
              set: (rr, Sr) => {
                rr.thinFilmThickness = Sr
              }
            },
            metadata: Sr
          }, hI, zI), (0, vr.k)(rr, null, DZ, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: rr => "thinFilmThicknessMin" in rr,
              get: rr => rr.thinFilmThicknessMin,
              set: (rr, Sr) => {
                rr.thinFilmThicknessMin = Sr
              }
            },
            metadata: Sr
          }, YI, nI), (0, vr.k)(rr, null, dZ, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "thinFilmThicknessTexture" in rr,
              get: rr => rr.thinFilmThicknessTexture,
              set: (rr, Sr) => {
                rr.thinFilmThicknessTexture = Sr
              }
            },
            metadata: Sr
          }, eI, KI), (0, vr.k)(rr, null, sZ, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: rr => "thinFilmIor" in rr,
              get: rr => rr.thinFilmIor,
              set: (rr, Sr) => {
                rr.thinFilmIor = Sr
              }
            },
            metadata: Sr
          }, yI, BI), (0, vr.k)(rr, null, uZ, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "ambientOcclusionTexture" in rr,
              get: rr => rr.ambientOcclusionTexture,
              set: (rr, Sr) => {
                rr.ambientOcclusionTexture = Sr
              }
            },
            metadata: Sr
          }, TI, vI), (0, vr.k)(rr, null, rW, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: rr => "directIntensity" in rr,
              get: rr => rr.directIntensity,
              set: (rr, Sr) => {
                rr.directIntensity = Sr
              }
            },
            metadata: Sr
          }, OI, LI), (0, vr.k)(rr, null, SW, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: rr => "environmentIntensity" in rr,
              get: rr => rr.environmentIntensity,
              set: (rr, Sr) => {
                rr.environmentIntensity = Sr
              }
            },
            metadata: Sr
          }, lI, XI), (0, vr.k)(rr, null, QW, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: rr => "useSpecularWeightFromTextureAlpha" in rr,
              get: rr => rr.useSpecularWeightFromTextureAlpha,
              set: (rr, Sr) => {
                rr.useSpecularWeightFromTextureAlpha = Sr
              }
            },
            metadata: Sr
          }, PI, HI), (0, vr.k)(rr, null, ZW, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: rr => "forceAlphaTest" in rr,
              get: rr => rr.forceAlphaTest,
              set: (rr, Sr) => {
                rr.forceAlphaTest = Sr
              }
            },
            metadata: Sr
          }, qI, RI), (0, vr.k)(rr, null, WW, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: rr => "alphaCutOff" in rr,
              get: rr => rr.alphaCutOff,
              set: (rr, Sr) => {
                rr.alphaCutOff = Sr
              }
            },
            metadata: Sr
          }, gI, CI), (0, vr.k)(rr, null, aW, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: rr => "useAmbientOcclusionFromMetallicTextureRed" in rr,
              get: rr => rr.useAmbientOcclusionFromMetallicTextureRed,
              set: (rr, Sr) => {
                rr.useAmbientOcclusionFromMetallicTextureRed = Sr
              }
            },
            metadata: Sr
          }, MI, GI), (0, vr.k)(rr, null, jW, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: rr => "useAmbientInGrayScale" in rr,
              get: rr => rr.useAmbientInGrayScale,
              set: (rr, Sr) => {
                rr.useAmbientInGrayScale = Sr
              }
            },
            metadata: Sr
          }, kI, AI), (0, vr.k)(rr, null, IW, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: rr => "usePhysicalLightFalloff" in rr,
              get: rr => rr.usePhysicalLightFalloff
            },
            metadata: Sr
          }, null, HW), (0, vr.k)(rr, null, fW, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: rr => "useGLTFLightFalloff" in rr,
              get: rr => rr.useGLTFLightFalloff
            },
            metadata: Sr
          }, null, HW), (0, vr.k)(rr, null, EW, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: rr => "useObjectSpaceNormalMap" in rr,
              get: rr => rr.useObjectSpaceNormalMap,
              set: (rr, Sr) => {
                rr.useObjectSpaceNormalMap = Sr
              }
            },
            metadata: Sr
          }, VI, iI), (0, vr.k)(rr, null, pW, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: rr => "useParallax" in rr,
              get: rr => rr.useParallax,
              set: (rr, Sr) => {
                rr.useParallax = Sr
              }
            },
            metadata: Sr
          }, wI, cI), (0, vr.k)(rr, null, xW, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: rr => "useParallaxOcclusion" in rr,
              get: rr => rr.useParallaxOcclusion,
              set: (rr, Sr) => {
                rr.useParallaxOcclusion = Sr
              }
            },
            metadata: Sr
          }, FI, oI), (0, vr.k)(rr, null, mW, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: rr => "parallaxScaleBias" in rr,
              get: rr => rr.parallaxScaleBias,
              set: (rr, Sr) => {
                rr.parallaxScaleBias = Sr
              }
            },
            metadata: Sr
          }, bI, JI), (0, vr.k)(rr, null, NW, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: rr => "disableLighting" in rr,
              get: rr => rr.disableLighting,
              set: (rr, Sr) => {
                rr.disableLighting = Sr
              }
            },
            metadata: Sr
          }, DI, dI), (0, vr.k)(rr, null, UW, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: rr => "forceIrradianceInFragment" in rr,
              get: rr => rr.forceIrradianceInFragment,
              set: (rr, Sr) => {
                rr.forceIrradianceInFragment = Sr
              }
            },
            metadata: Sr
          }, sI, uI), (0, vr.k)(rr, null, tW, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: rr => "maxSimultaneousLights" in rr,
              get: rr => rr.maxSimultaneousLights,
              set: (rr, Sr) => {
                rr.maxSimultaneousLights = Sr
              }
            },
            metadata: Sr
          }, rf, Sf), (0, vr.k)(rr, null, hW, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: rr => "invertNormalMapX" in rr,
              get: rr => rr.invertNormalMapX,
              set: (rr, Sr) => {
                rr.invertNormalMapX = Sr
              }
            },
            metadata: Sr
          }, Qf, Zf), (0, vr.k)(rr, null, zW, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: rr => "invertNormalMapY" in rr,
              get: rr => rr.invertNormalMapY,
              set: (rr, Sr) => {
                rr.invertNormalMapY = Sr
              }
            },
            metadata: Sr
          }, Wf, af), (0, vr.k)(rr, null, YW, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: rr => "twoSidedLighting" in rr,
              get: rr => rr.twoSidedLighting,
              set: (rr, Sr) => {
                rr.twoSidedLighting = Sr
              }
            },
            metadata: Sr
          }, jf, If), (0, vr.k)(rr, null, nW, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: rr => "useAlphaFresnel" in rr,
              get: rr => rr.useAlphaFresnel,
              set: (rr, Sr) => {
                rr.useAlphaFresnel = Sr
              }
            },
            metadata: Sr
          }, ff, Ef), (0, vr.k)(rr, null, eW, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: rr => "useLinearAlphaFresnel" in rr,
              get: rr => rr.useLinearAlphaFresnel,
              set: (rr, Sr) => {
                rr.useLinearAlphaFresnel = Sr
              }
            },
            metadata: Sr
          }, pf, xf), (0, vr.k)(rr, null, KW, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "environmentBRDFTexture" in rr,
              get: rr => rr.environmentBRDFTexture,
              set: (rr, Sr) => {
                rr.environmentBRDFTexture = Sr
              }
            },
            metadata: Sr
          }, mf, Nf), (0, vr.k)(rr, null, yW, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: rr => "forceNormalForward" in rr,
              get: rr => rr.forceNormalForward,
              set: (rr, Sr) => {
                rr.forceNormalForward = Sr
              }
            },
            metadata: Sr
          }, Uf, tf), (0, vr.k)(rr, null, BW, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: rr => "enableSpecularAntiAliasing" in rr,
              get: rr => rr.enableSpecularAntiAliasing,
              set: (rr, Sr) => {
                rr.enableSpecularAntiAliasing = Sr
              }
            },
            metadata: Sr
          }, hf, zf), (0, vr.k)(rr, null, TW, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: rr => "useHorizonOcclusion" in rr,
              get: rr => rr.useHorizonOcclusion,
              set: (rr, Sr) => {
                rr.useHorizonOcclusion = Sr
              }
            },
            metadata: Sr
          }, Yf, nf), (0, vr.k)(rr, null, vW, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: rr => "useRadianceOcclusion" in rr,
              get: rr => rr.useRadianceOcclusion,
              set: (rr, Sr) => {
                rr.useRadianceOcclusion = Sr
              }
            },
            metadata: Sr
          }, ef, Kf), (0, vr.k)(rr, null, OW, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: rr => "unlit" in rr,
              get: rr => rr.unlit,
              set: (rr, Sr) => {
                rr.unlit = Sr
              }
            },
            metadata: Sr
          }, yf, Bf), (0, vr.k)(rr, null, LW, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: rr => "applyDecalMapAfterDetailMap" in rr,
              get: rr => rr.applyDecalMapAfterDetailMap,
              set: (rr, Sr) => {
                rr.applyDecalMapAfterDetailMap = Sr
              }
            },
            metadata: Sr
          }, Tf, vf), (0, vr.k)(rr, null, lW, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: rr => "debugMode" in rr,
              get: rr => rr.debugMode,
              set: (rr, Sr) => {
                rr.debugMode = Sr
              }
            },
            metadata: Sr
          }, Of, Lf), (0, vr.k)(rr, null, XW, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: rr => "transparencyMode" in rr,
              get: rr => rr.transparencyMode
            },
            metadata: Sr
          }, null, HW), Sr && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sr
          })
        })(), rr.SSS_QUALITY_LOW = 0, rr.SSS_QUALITY_MEDIUM = 1, rr.SSS_QUALITY_HIGH = 2, rr._noiseTextures = {}, rr.ForceGLSL = !1, rr._ShaderLoader = new mS.b((() => [Promise.all([Qr.e(636), Qr.e(699)]).then((() => Qr(65034))), Promise.all([Qr.e(641), Qr.e(637), Qr.e(698), Qr.e(703)]).then((() => Qr(65045)))]), (() => [Promise.all([Qr.e(655), Qr.e(657), Qr.e(702)]).then((() => Qr(65094))), Promise.all([Qr.e(655), Qr.e(658), Qr.e(701), Qr.e(704)]).then((() => Qr(65101)))])), rr
      })(),
      uS = !1;
    uS || (uS = !0, (0, br.c)(), (0, VS.e)("BABYLON.OpenPBRMaterial", sS));
    var rQ = Qr(38595);
    class SQ {
      constructor(rr) {
        this.name = RS.b.NAME_PROCEDURALTEXTURE, this.Dt = rr
      }
      register() {
        this.Dt._beforeClearStage.registerStep(RS.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Dt.proceduralTexturesEnabled) {
          TS.h.StartPerformanceCounter("Procedural textures", this.Dt.proceduralTextures.length > 0);
          for (let rr = 0; rr < this.Dt.proceduralTextures.length; rr++) {
            const Sr = this.Dt.proceduralTextures[rr];
            Sr._shouldRender() && Sr.render()
          }
          TS.h.EndPerformanceCounter("Procedural textures", this.Dt.proceduralTextures.length > 0)
        }
      }
    }
    var QQ = Qr(42165);
    let ZQ = (() => {
      var rr;
      let Sr, Zr, Wr, jr, Ir, fr = Xr.f,
        Er = [],
        pr = [],
        xr = [],
        mr = [],
        Nr = [],
        Ur = [],
        hr = [],
        zr = [],
        Yr = [];
      return rr = class extends fr {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(rr, Sr, Qr, Zr) {
          let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            ar = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Zr, !ar), this.isEnabled = ((0, vr.m)(this, Er), (0, vr.m)(this, pr, !0)), this.autoClear = ((0, vr.m)(this, xr), (0, vr.m)(this, mr, !0)), this.onGenerated = (0, vr.m)(this, Nr), this.onGeneratedObservable = new rQ.d, this.onBeforeGenerationObservable = new rQ.d, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, vr.m)(this, Ur, void 0), this._drawWrapper = (0, vr.m)(this, hr), this._textures = {}, this._size = (0, vr.m)(this, zr, void 0), this._textureType = (0, vr.m)(this, Yr), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Wr || Wr instanceof Xr.f ? (this._options = {}, this._fallbackTexture = Wr) : (this._options = Wr, this._fallbackTexture = Wr.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let fr = (Zr = this.eC() || tr.b.LastCreatedScene)._getComponent(RS.b.NAME_PROCEDURALTEXTURE);
          fr || (fr = new SQ(Zr), Zr.CZr(fr)), this._options.skipSceneRegistration || Zr.proceduralTextures.push(this), this._fullEngine = Zr.MU(), this.name = rr, this.isRenderTarget = !0, this._size = Sr, this._textureType = Ir, this._generateMipMaps = ar, this._drawWrapper = new QQ.b(this._fullEngine), this.setFragment(Qr);
          const nr = this._createRtWrapper(jr, Sr, ar, Ir);
          this._texture = nr.texture;
          const er = [];
          er.push(1, 1), er.push(-1, 1), er.push(-1, -1), er.push(1, -1), this._vertexBuffers[kr.j.PositionKind] = new kr.j(this._fullEngine, er, kr.j.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(rr, Sr, Qr, Zr) {
          return rr ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(Sr, {
            generateMipMaps: Qr,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Zr,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(Sr, {
            generateMipMaps: Qr,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Zr,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(rr) {
          this._drawWrapper.effect = rr
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((rr => {
            this._contentData = this.readPixels(0, 0, rr), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const rr = this._fullEngine,
            Sr = [];
          Sr.push(0), Sr.push(1), Sr.push(2), Sr.push(0), Sr.push(2), Sr.push(3), this._indexBuffer = rr.createIndexBuffer(Sr)
        }
        _rebuild() {
          const rr = this._vertexBuffers[kr.j.PositionKind];
          rr && rr._rebuild(), this._createIndexBuffer(), this.refreshRate === vS.b.REFRESHRATE_RENDER_ONCE && (this.refreshRate = vS.b.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(rr) {
          if (this.isReady()) return void rr(this);
          const Sr = this.getEffect();
          Sr && Sr.executeWhenCompiled((() => {
            rr(this)
          }))
        }
        isReady() {
          const rr = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const Sr = this._getDefines();
          if (this._drawWrapper.effect && Sr === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Zr = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== Sr && (this._cachedDefines = Sr, this._drawWrapper.effect = rr.createEffect(Zr, [kr.j.PositionKind], this._uniforms, this._samplers, Sr, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([Qr.e(707).then((() => Qr(65174))), this._options.extraInitializationsAsync()]) : await Promise.all([Qr.e(708).then((() => Qr(65180))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await Qr.e(707).then((() => Qr(65174))) : await Qr.e(708).then((() => Qr(65180)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(rr) {
          this._fragment = rr
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(rr) {
          this._refreshRate = rr, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(rr, Sr) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const Qr = this._texture.isCube;
          this._rtWrapper.dispose();
          const Zr = this._createRtWrapper(Qr, rr, Sr, this._textureType);
          this._texture = Zr.texture, this._size = rr, this._generateMipMaps = Sr
        }
        _checkUniform(rr) {
          -1 === this._uniforms.indexOf(rr) && this._uniforms.push(rr)
        }
        setTexture(rr, Sr) {
          return -1 === this._samplers.indexOf(rr) && this._samplers.push(rr), this._textures[rr] = Sr, this
        }
        setFloat(rr, Sr) {
          return this._checkUniform(rr), this._floats[rr] = Sr, this
        }
        setInt(rr, Sr) {
          return this._checkUniform(rr), this._ints[rr] = Sr, this
        }
        setFloats(rr, Sr) {
          return this._checkUniform(rr), this._floatsArrays[rr] = Sr, this
        }
        setColor3(rr, Sr) {
          return this._checkUniform(rr), this._colors3[rr] = Sr, this
        }
        setColor4(rr, Sr) {
          return this._checkUniform(rr), this._colors4[rr] = Sr, this
        }
        setVector2(rr, Sr) {
          return this._checkUniform(rr), this._vectors2[rr] = Sr, this
        }
        setVector3(rr, Sr) {
          return this._checkUniform(rr), this._vectors3[rr] = Sr, this
        }
        setVector4(rr, Sr) {
          return this._checkUniform(rr), this._vectors4[rr] = Sr, this
        }
        setMatrix(rr, Sr) {
          return this._checkUniform(rr), this._matrices[rr] = Sr, this
        }
        render(rr) {
          const Sr = this.eC();
          if (!Sr) return;
          const Qr = this._fullEngine;
          if (Qr.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), Qr.setState(!1), !this.nodeMaterialSource) {
            for (const rr in this._textures) this._drawWrapper.effect.setTexture(rr, this._textures[rr]);
            for (const rr in this._ints) this._drawWrapper.effect.setInt(rr, this._ints[rr]);
            for (const rr in this._floats) this._drawWrapper.effect.setFloat(rr, this._floats[rr]);
            for (const rr in this._floatsArrays) this._drawWrapper.effect.setArray(rr, this._floatsArrays[rr]);
            for (const rr in this._colors3) this._drawWrapper.effect.setColor3(rr, this._colors3[rr]);
            for (const rr in this._colors4) {
              const Sr = this._colors4[rr];
              this._drawWrapper.effect.setFloat4(rr, Sr.r, Sr.g, Sr.b, Sr.a)
            }
            for (const rr in this._vectors2) this._drawWrapper.effect.setVector2(rr, this._vectors2[rr]);
            for (const rr in this._vectors3) this._drawWrapper.effect.setVector3(rr, this._vectors3[rr]);
            for (const rr in this._vectors4) this._drawWrapper.effect.setVector4(rr, this._vectors4[rr]);
            for (const rr in this._matrices) this._drawWrapper.effect.setMatrix(rr, this._matrices[rr])
          }
          if (!this._texture || !this._rtWrapper) return;
          Qr._enableGPUDebugMarkers && Qr._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Zr = Qr.currentViewport;
          if (this.isCube)
            for (let Wr = 0; Wr < 6; Wr++) Qr.bindFramebuffer(this._rtWrapper, Wr, void 0, void 0, !0), Qr.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Wr), this.autoClear && Qr.clear(Sr.clearColor, !0, !1, !1), Qr.drawElementsType(ar.d.TriangleFillMode, 0, 6), Qr.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let rr = 1;
            this._rtWrapper.is3D ? rr = this._rtWrapper.depth : this._rtWrapper.is2DArray && (rr = this._rtWrapper.layers);
            for (let Zr = 0; Zr < rr; Zr++) {
              if (Qr.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Zr), Qr.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== rr ? Zr / (rr - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Zr);
                for (const rr in this._textures) this._drawWrapper.effect.setTexture(rr, this._textures[rr])
              }
              this.autoClear && Qr.clear(Sr.clearColor, !0, !1, !1), Qr.drawElementsType(ar.d.TriangleFillMode, 0, 6), Qr.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Zr && Qr.setViewport(Zr), this.isCube && Qr.generateMipMapsForCubemap(this._texture, !0), Qr._enableGPUDebugMarkers && Qr._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const Sr = this.getSize(),
            Qr = new rr(this.name, Sr.width, this._fragment, this.eC(), this._fallbackTexture, this._generateMipMaps);
          return Qr.hasAlpha = this.hasAlpha, Qr.level = this.level, Qr.coordinatesMode = this.coordinatesMode, Qr
        }
        dispose() {
          const rr = this.eC();
          if (!rr) return;
          const Sr = rr.proceduralTextures.indexOf(this);
          Sr >= 0 && rr.proceduralTextures.splice(Sr, 1);
          const Qr = this._vertexBuffers[kr.j.PositionKind];
          Qr && (Qr.dispose(), this._vertexBuffers[kr.j.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const Qr = "function" === typeof Symbol && Symbol.metadata ? Object.create(fr[Symbol.metadata] ?? null) : void 0;
        Sr = [(0, Or.G)()], Zr = [(0, Or.G)()], Wr = [(0, Or.G)()], jr = [(0, Or.G)()], Ir = [(0, Or.G)()], (0, vr.k)(rr, null, Ir, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: rr => "refreshRate" in rr,
            get: rr => rr.refreshRate
          },
          metadata: Qr
        }, null, Er), (0, vr.k)(null, null, Sr, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "isEnabled" in rr,
            get: rr => rr.isEnabled,
            set: (rr, Sr) => {
              rr.isEnabled = Sr
            }
          },
          metadata: Qr
        }, pr, xr), (0, vr.k)(null, null, Zr, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: rr => "autoClear" in rr,
            get: rr => rr.autoClear,
            set: (rr, Sr) => {
              rr.autoClear = Sr
            }
          },
          metadata: Qr
        }, mr, Nr), (0, vr.k)(null, null, Wr, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: rr => "_generateMipMaps" in rr,
            get: rr => rr._generateMipMaps,
            set: (rr, Sr) => {
              rr._generateMipMaps = Sr
            }
          },
          metadata: Qr
        }, Ur, hr), (0, vr.k)(null, null, jr, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: rr => "_size" in rr,
            get: rr => rr._size,
            set: (rr, Sr) => {
              rr._size = Sr
            }
          },
          metadata: Qr
        }, zr, Yr), Qr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Qr
        })
      })(), rr
    })();

    function WQ(rr) {
      return "texture" in rr
    }

    function aQ(rr) {
      return "value" in rr
    }
    async function jQ(rr, Sr, Zr) {
      const Wr = [Sr.red, Sr.green, Sr.blue, Sr.alpha],
        ar = [],
        jr = [];
      for (let Qr = 0; Qr < 4; Qr++) {
        const rr = Wr[Qr];
        if (rr)
          if (WQ(rr)) {
            if (rr.sourceChannel < 0 || rr.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let Sr = ar.indexOf(rr.texture); - 1 === Sr && (Sr = ar.length, ar.push(rr.texture)), jr[Qr] = Sr
          } else {
            if (!aQ(rr)) throw new Error("Invalid channel input configuration");
            if (rr.value < 0 || rr.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            jr[Qr] = -1
          }
        else jr[Qr] = -1
      }
      let Ir = Sr.outputSize;
      if (!Ir && ar.length > 0) {
        let rr = 0;
        for (const Sr of ar) {
          const Qr = Sr.getSize(),
            Zr = Math.max(Qr.width, Qr.height);
          Zr > rr && (rr = Zr, Ir = Qr.width === Qr.height ? rr : Qr)
        }
      }
      Ir = Ir || 512;
      const fr = [],
        Er = new Set;
      for (let Qr = 0; Qr < 4; Qr++) {
        const rr = Wr[Qr],
          Sr = ["RED", "GREEN", "BLUE", "ALPHA"][Qr];
        if (rr && WQ(rr)) {
          fr.push(`${Sr}_FROM_TEXTURE`);
          const rr = jr[Qr];
          Er.add(rr)
        }
      }
      Er.forEach((rr => {
        fr.push(`USE_TEXTURE${rr}`)
      }));
      const pr = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Zr.MU().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Zr.MU().isWebGPU ? await Promise.all([Qr.e(705).then((() => Qr(65161)))]) : await Promise.all([Qr.e(706).then((() => Qr(65168)))])
          },
          skipSceneRegistration: !0
        },
        xr = new ZQ(rr, Ir, "textureMerger", Zr, pr);
      xr.refreshRate = -1, xr.defines = fr.length > 0 ? "#define " + fr.join("\n#define ") + "\n" : "";
      for (let Qr = 0; Qr < ar.length; Qr++) mr = ar[Qr], (Nr = xr).uOffset = mr.uOffset, Nr.vOffset = mr.vOffset, Nr.uScale = mr.uScale, Nr.vScale = mr.vScale, Nr.uAng = mr.uAng, Nr.vAng = mr.vAng, Nr.wAng = mr.wAng, Nr.uRotationCenter = mr.uRotationCenter, Nr.vRotationCenter = mr.vRotationCenter, xr.setTexture(`inputTexture${Qr}`, ar[Qr]);
      var mr, Nr;
      for (let Qr = 0; Qr < 4; Qr++) {
        const rr = Wr[Qr],
          Sr = ["red", "green", "blue", "alpha"][Qr];
        if (rr && WQ(rr)) {
          const Zr = jr[Qr];
          xr.setInt(`${Sr}TextureIndex`, Zr), xr.setInt(`${Sr}SourceChannel`, rr.sourceChannel)
        } else {
          let Zr;
          Zr = rr && aQ(rr) ? rr.value : 3 === Qr ? 1 : 0, xr.setFloat(`${Sr}ConstantValue`, Zr)
        }
      }
      return await new Promise(((rr, Sr) => {
        xr.executeWhenReady((() => {
          try {
            xr.render(), rr(xr)
          } catch (Qr) {
            Sr(Qr instanceof Error ? Qr : new Error(String(Qr)))
          }
        }))
      }))
    }

    function IQ(rr, Sr) {
      return {
        texture: rr,
        sourceChannel: Sr
      }
    }

    function fQ(rr) {
      return {
        value: rr
      }
    }

    function EQ(rr, Sr, Qr, Zr) {
      return {
        red: rr,
        green: Sr,
        blue: Qr,
        alpha: Zr
      }
    }
    var pQ = Qr(41728),
      xQ = Qr(41811),
      mQ = Qr(38578),
      NQ = Qr(41859),
      UQ = Qr(41796);
    class tQ {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class hQ extends pQ.d {
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
        return !!this._options?.enableMultiview || this.tt > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new tQ;
        super(null), void 0 === rr.deterministicLockstep && (rr.deterministicLockstep = !1), void 0 !== rr.timeStep && (this._timeStep = rr.timeStep), void 0 === rr.lockstepMaxSteps && (rr.lockstepMaxSteps = 4), this._options = rr, mQ.d.SetMatrixPrecision(!!rr.useHighPrecisionMatrix), this._caps = {
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
        }, rr.enableMultiview && (this._caps.multiview = {
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
        }, rr.renderingCanvas && (this._renderingCanvas = rr.renderingCanvas), Lr.c.Log(`Babylon.js v${pQ.d.Version} - Null engine`);
        const Sr = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (Sr.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (Sr.Blob = function() {})
      }
      createVertexBuffer(rr) {
        const Sr = new xQ.e;
        return Sr.references = 1, Sr
      }
      createIndexBuffer(rr) {
        const Sr = new xQ.e;
        return Sr.references = 1, Sr
      }
      clear(rr, Sr, Qr) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(rr, Sr, Qr) {
        this._cachedViewport = rr
      }
      createUniformBuffer(rr) {
        const Sr = new xQ.e;
        return Sr.references = 1, Sr.sx = rr instanceof Array ? rr.length * Float32Array.BYTES_PER_ELEMENT : rr.byteLength, Sr
      }
      createDynamicUniformBuffer(rr) {
        return this.createUniformBuffer(rr)
      }
      updateUniformBuffer(rr, Sr, Qr, Zr) {}
      bindUniformBufferBase(rr, Sr, Qr) {}
      bindUniformBlock(rr, Sr, Qr) {}
      createShaderProgram(rr, Sr, Qr, Zr, Wr) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(rr, Sr) {
        return []
      }
      getAttributes(rr, Sr) {
        return []
      }
      bindSamplers(rr) {
        this._currentEffect = null
      }
      enableEffect(rr) {
        rr = null !== rr && (0, UQ.d)(rr) ? rr.effect : rr, this._currentEffect = rr, rr && (rr.onBind && rr.onBind(rr), rr._onBindObservable && rr._onBindObservable.notifyObservers(rr))
      }
      setStateCullFaceType(rr, Sr) {}
      setState(rr) {}
      setIntArray(rr, Sr) {
        return !0
      }
      setIntArray2(rr, Sr) {
        return !0
      }
      setIntArray3(rr, Sr) {
        return !0
      }
      setIntArray4(rr, Sr) {
        return !0
      }
      setFloatArray(rr, Sr) {
        return !0
      }
      setFloatArray2(rr, Sr) {
        return !0
      }
      setFloatArray3(rr, Sr) {
        return !0
      }
      setFloatArray4(rr, Sr) {
        return !0
      }
      setArray(rr, Sr) {
        return !0
      }
      setArray2(rr, Sr) {
        return !0
      }
      setArray3(rr, Sr) {
        return !0
      }
      setArray4(rr, Sr) {
        return !0
      }
      setMatrices(rr, Sr) {
        return !0
      }
      setMatrix3x3(rr, Sr) {
        return !0
      }
      setMatrix2x2(rr, Sr) {
        return !0
      }
      setFloat(rr, Sr) {
        return !0
      }
      setFloat2(rr, Sr, Qr) {
        return !0
      }
      setFloat3(rr, Sr, Qr, Zr) {
        return !0
      }
      setBool(rr, Sr) {
        return !0
      }
      setFloat4(rr, Sr, Qr, Zr, Wr) {
        return !0
      }
      setAlphaMode(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[Qr] !== rr && (this.alphaState.setAlphaBlend(0 !== rr, 0), Sr || this.setDepthWrite(0 === rr), this._alphaMode[Qr] = rr)
      }
      bindBuffers(rr, Sr, Qr) {}
      wipeCaches(rr) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, rr && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(rr, Sr, Qr, Zr) {}
      drawElementsType(rr, Sr, Qr, Zr) {}
      drawArraysType(rr, Sr, Qr, Zr) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(rr) {}
      createTexture(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          jr = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Ir = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const fr = new OS.b(this, 1),
          Er = String(rr);
        return fr.url = Er, fr.generateMipMaps = !Sr, fr.samplingMode = Wr, fr.invertY = Qr, fr.baseWidth = this._options.textureSize, fr.baseHeight = this._options.textureSize, fr.width = this._options.textureSize, fr.height = this._options.textureSize, Ir && (fr.format = Ir), jr && (fr._buffer = jr), fr.isReady = !0, ar && setTimeout((() => {
          ar(fr)
        })), this._internalTexturesCache.push(fr), fr
      }
      _createHardwareRenderTargetWrapper(rr, Sr, Qr) {
        const Zr = new NQ.b(rr, Sr, Qr, this);
        return this._renderTargetWrapperCache.push(Zr), Zr
      }
      createRenderTargetTexture(rr, Sr) {
        const Qr = this._createHardwareRenderTargetWrapper(!1, !1, rr),
          Zr = {};
        void 0 !== Sr && "object" === typeof Sr ? (Zr.generateMipMaps = Sr.generateMipMaps, Zr.generateDepthBuffer = void 0 === Sr.generateDepthBuffer || Sr.generateDepthBuffer, Zr.generateStencilBuffer = Zr.generateDepthBuffer && Sr.generateStencilBuffer, Zr.type = void 0 === Sr.type ? 0 : Sr.type, Zr.samplingMode = void 0 === Sr.samplingMode ? 3 : Sr.samplingMode) : (Zr.generateMipMaps = Sr, Zr.generateDepthBuffer = !0, Zr.generateStencilBuffer = !1, Zr.type = 0, Zr.samplingMode = 3);
        const Wr = new OS.b(this, 5);
        Qr.setTexture(Wr);
        const ar = rr.width || rr,
          jr = rr.height || rr;
        return Qr._generateDepthBuffer = Zr.generateDepthBuffer, Qr._generateStencilBuffer = !!Zr.generateStencilBuffer, Wr.baseWidth = ar, Wr.baseHeight = jr, Wr.width = ar, Wr.height = jr, Wr.isReady = !0, Wr.samples = 1, Wr.generateMipMaps = !!Zr.generateMipMaps, Wr.samplingMode = Zr.samplingMode, Wr.type = Zr.type, this._internalTexturesCache.push(Wr), Qr
      }
      createMultiviewRenderTargetTexture(rr, Sr) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const Qr = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: rr,
            height: Sr
          }),
          Zr = new OS.b(this, 5, !0);
        return Zr.baseWidth = rr, Zr.baseHeight = Sr, Zr.width = rr, Zr.height = Sr, Zr.isMultiview = !0, Zr.isReady = !0, Zr.format = 5, Zr.samples = 1, Qr.setTextures(Zr), Qr
      }
      bindMultiviewFramebuffer(rr) {
        this.bindFramebuffer(rr, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(rr, Sr) {
        const Qr = this._createHardwareRenderTargetWrapper(!1, !0, rr),
          Zr = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...Sr
          };
        Zr.generateStencilBuffer = Zr.generateDepthBuffer && Zr.generateStencilBuffer, (1 !== Zr.type || this._caps.textureFloatLinearFiltering) && (2 !== Zr.type || this._caps.textureHalfFloatLinearFiltering) || (Zr.samplingMode = 1), Qr._generateDepthBuffer = Zr.generateDepthBuffer, Qr._generateStencilBuffer = !!Zr.generateStencilBuffer;
        const Wr = new OS.b(this, 5);
        return Wr.baseWidth = rr, Wr.baseHeight = rr, Wr.width = rr, Wr.height = rr, Wr.isReady = !0, Wr.isCube = !0, Wr.samples = 1, Wr.generateMipMaps = !!Zr.generateMipMaps, Wr.samplingMode = Zr.samplingMode, Wr.type = Zr.type, this._internalTexturesCache.push(Wr), Qr
      }
      updateTextureSamplingMode(rr, Sr) {
        Sr.samplingMode = rr
      }
      createRawTexture(rr, Sr, Qr, Zr, Wr, ar, jr) {
        let Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          fr = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Er = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const pr = new OS.b(this, 3);
        return pr.baseWidth = Sr, pr.baseHeight = Qr, pr.width = Sr, pr.height = Qr, pr.format = Zr, pr.generateMipMaps = Wr, pr.samplingMode = jr, pr.invertY = ar, pr._compression = Ir, pr.type = fr, pr._useSRGBBuffer = Er, this._doNotHandleContextLost || (pr._bufferView = rr), pr
      }
      updateRawTexture(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        rr && (rr._bufferView = Sr, rr.format = Qr, rr.invertY = Zr, rr._compression = Wr, rr.type = ar, rr._useSRGBBuffer = jr)
      }
      bindFramebuffer(rr, Sr, Qr, Zr, Wr) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = rr, this._currentFramebuffer = null, this._cachedViewport && !Wr && this.setViewport(this._cachedViewport, Qr, Zr)
      }
      unBindFramebuffer(rr) {
        let Sr = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, Sr && Sr(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(rr) {
        const Sr = new xQ.e;
        return Sr.references = 1, Sr.sx = 1, Sr
      }
      updateDynamicTexture(rr, Sr, Qr) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(rr) {}
      updateDynamicIndexBuffer(rr, Sr) {}
      updateDynamicVertexBuffer(rr, Sr, Qr, Zr) {}
      _bindTextureDirectly(rr, Sr) {
        return this._boundTexturesCache[this._activeChannel] !== Sr && (this._boundTexturesCache[this._activeChannel] = Sr, !0)
      }
      _bindTexture(rr, Sr) {
        rr < 0 || this._bindTextureDirectly(0, Sr)
      }
      _deleteBuffer(rr) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(rr) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(rr, Sr, Qr, Zr, Wr) {}
      _uploadDataToTextureDirectly(rr, Sr) {}
      _uploadArrayBufferViewToTexture(rr, Sr) {}
      _uploadImageToTexture(rr, Sr) {}
    }
    Qr(41895), Qr(41925), Qr(41893);
    async function zQ(rr) {
      const Sr = rr.getInternalTexture();
      if (!Sr || 1 !== Sr.source) return null;
      if (Sr.invertY) {
        const Sr = rr.eC()?.MU();
        if (!(Sr instanceof hQ)) return null
      }
      const Qr = Sr._buffer;
      let Zr, ar = rr.mimeType;
      try {
        Qr ? ArrayBuffer.isView(Qr) ? Zr = Qr.buffer.slice(Qr.byteOffset, Qr.byteOffset + Qr.byteLength) : Qr instanceof ArrayBuffer ? Zr = Qr : Qr instanceof Blob ? (Zr = await Qr.arrayBuffer(), ar = Qr.type || ar) : "string" === typeof Qr ? (Zr = await Wr.Tools.LoadFileAsync(Qr), ar = (0, fr.e)(Qr) || ar) : "undefined" !== typeof HTMLImageElement && Qr instanceof HTMLImageElement && (Zr = await Wr.Tools.LoadFileAsync(Qr.src), ar = (0, fr.e)(Qr.src) || ar) : (Zr = await Wr.Tools.LoadFileAsync(Sr.url), ar = (0, fr.e)(Sr.url) || ar)
      } catch {
        return null
      }
      if (Zr && !ar && Sr.url) {
        const rr = Sr.url.match(/^data:([^;,]+)/);
        ar = rr ? rr[1] : (0, fr.e)(Sr.url)
      }
      return Zr && ar ? {
        data: Zr,
        mimeType: ar
      } : null
    }
    const YQ = 1e-6,
      nQ = new hr.Color3(.04, .04, .04),
      eQ = 1024,
      KQ = hr.Color3.White(),
      yQ = hr.Color3.BlackReadOnly;

    function BQ(rr) {
      switch (rr) {
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

    function TQ(rr, Sr, Qr) {
      if (Sr < nQ.r) return 0;
      const Zr = nQ.r,
        Wr = rr * Qr / (1 - nQ.r) + Sr - 2 * nQ.r,
        ar = Wr * Wr - 4 * Zr * (nQ.r - Sr);
      return nr.Clamp((-Wr + Math.sqrt(ar)) / (2 * Zr), 0, 1)
    }

    function vQ(rr) {
      const Sr = rr.diffuseColor.toLinearSpace(rr.eC().MU().useExactSrgbConversions).scale(.5),
        Qr = rr.alpha,
        Zr = function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Gr.q(0, 1),
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Gr.q(0, .1),
            Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Gr.q(0, .1),
            Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Gr.q(1300, .1);
          return function(rr, Sr, Qr, Zr, Wr) {
            return (1 - rr) * (1 - rr) * (1 - rr) * Sr + 3 * (1 - rr) * (1 - rr) * rr * Qr + 3 * (1 - rr) * rr * rr * Zr + rr * rr * rr * Wr
          }(Math.pow(rr / Wr.x, .333333), Sr.y, Qr.y, Zr.y, Wr.y)
        }(nr.Clamp(rr.specularPower, 0, eQ));
      return {
        baseColorFactor: [Sr.r, Sr.g, Sr.b, Qr],
        metallicFactor: 0,
        roughnessFactor: Zr
      }
    }

    function OQ(rr, Sr) {
      Sr.needAlphaBlending() ? rr.alphaMode = "BLEND" : Sr.needAlphaTesting() && (rr.alphaMode = "MASK", rr.alphaCutoff = Sr.alphaCutOff)
    }

    function LQ(rr, Sr, Qr) {
      const Zr = new Uint8Array(rr * Sr * 4);
      for (let Wr = 0; Wr < Zr.length; Wr += 4) Zr[Wr] = Zr[Wr + 1] = Zr[Wr + 2] = Zr[Wr + 3] = 255;
      return yr.c.CreateRGBATexture(Zr, rr, Sr, Qr)
    }

    function lQ(rr) {
      if (rr instanceof Uint8Array) {
        const Sr = rr.length,
          Qr = new Float32Array(rr.length);
        for (let Zr = 0; Zr < Sr; ++Zr) Qr[Zr] = rr[Zr] / 255;
        return Qr
      }
      if (rr instanceof Float32Array) return rr;
      throw new Error("Unsupported pixel format!")
    }
    class XQ {
      constructor(rr) {
        this._exporter = rr, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(rr) {
        return rr ? this._textureMap.get(rr.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(rr, Sr) {
        const Qr = vQ(rr),
          Zr = {
            name: rr.name
          };
        if (null == rr.backFaceCulling || rr.backFaceCulling || (rr.twoSidedLighting || Wr.Tools.Warn(rr.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Zr.doubleSided = !0), Sr) {
          const Sr = [],
            Wr = rr.diffuseTexture;
          Wr && Sr.push(this.exportTextureAsync(Wr).then((rr => {
            rr && (Qr.baseColorTexture = rr)
          })));
          const ar = rr.bumpTexture;
          ar && Sr.push(this.exportTextureAsync(ar).then((rr => {
            rr && (Zr.normalTexture = rr, 1 !== ar.level && (Zr.normalTexture.scale = ar.level))
          })));
          const jr = rr.emissiveTexture;
          jr && (Zr.emissiveFactor = [1, 1, 1], Sr.push(this.exportTextureAsync(jr).then((rr => {
            rr && (Zr.emissiveTexture = rr)
          }))));
          const Ir = rr.ambientTexture;
          Ir && Sr.push(this.exportTextureAsync(Ir).then((rr => {
            if (rr) {
              const Sr = {
                index: rr.index
              };
              Zr.occlusionTexture = Sr
            }
          }))), Sr.length > 0 && (this._exporter._materialNeedsUVsSet.add(rr), await Promise.all(Sr))
        }(rr.alpha < 1 || rr.opacityTexture) && (rr.alphaMode === Br.d.ALPHA_COMBINE ? Zr.alphaMode = "BLEND" : Wr.Tools.Warn(rr.name + ": glTF 2.0 does not support alpha mode: " + rr.alphaMode.toString())), rr.emissiveColor && !rr.emissiveColor.equalsWithEpsilon(yQ, YQ) && (Zr.emissiveFactor = rr.emissiveColor.OWr()), Zr.pbrMetallicRoughness = Qr, OQ(Zr, rr), await this._finishMaterialAsync(Zr, rr);
        const ar = this._exporter._materials;
        return ar.push(Zr), ar.length - 1
      }
      async _finishMaterialAsync(rr, Sr) {
        const Qr = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", rr, Sr),
          Zr = [];
        for (const Wr of Qr) Zr.push(this.exportTextureAsync(Wr));
        await Promise.all(Zr), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", rr, Sr)
      }
      _resizeTexturesToSameDimensions(rr, Sr, Qr) {
        const Zr = rr ? rr.getSize() : {
            width: 0,
            height: 0
          },
          Wr = Sr ? Sr.getSize() : {
            width: 0,
            height: 0
          };
        let ar, jr;
        return Zr.width < Wr.width ? (ar = rr && rr instanceof Kr.e ? er.k.CreateResizedCopy(rr, Wr.width, Wr.height, !0) : LQ(Wr.width, Wr.height, Qr), jr = Sr) : Zr.width > Wr.width ? (jr = Sr && Sr instanceof Kr.e ? er.k.CreateResizedCopy(Sr, Zr.width, Zr.height, !0) : LQ(Zr.width, Zr.height, Qr), ar = rr) : (ar = rr, jr = Sr), {
          texture1: ar,
          texture2: jr
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(rr, Sr, Qr) {
        const Zr = new Array;
        if (!rr && !Sr) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Wr = rr ? rr.eC() : Sr ? Sr.eC() : null;
        if (Wr) {
          const ar = this._resizeTexturesToSameDimensions(rr, Sr, Wr),
            jr = ar.texture1?.getSize();
          let Ir, fr;
          const Er = jr.width,
            pr = jr.height,
            xr = await ar.texture1.readPixels(),
            mr = await ar.texture2.readPixels();
          if (!xr) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (Ir = lQ(xr), !mr) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          fr = lQ(mr);
          const Nr = fr.byteLength,
            Ur = new Uint8Array(Nr),
            tr = new Uint8Array(Nr),
            zr = 4,
            Yr = new hr.Color3(0, 0, 0);
          let nr = 0,
            er = 0;
          for (let rr = 0; rr < pr; ++rr)
            for (let Sr = 0; Sr < Er; ++Sr) {
              const Zr = (Er * rr + Sr) * zr,
                jr = {
                  diffuseColor: new hr.Color3(Ir[Zr], Ir[Zr + 1], Ir[Zr + 2]).toLinearSpace(Wr.MU().useExactSrgbConversions).multiply(Qr.diffuseColor),
                  specularColor: new hr.Color3(fr[Zr], fr[Zr + 1], fr[Zr + 2]).toLinearSpace(Wr.MU().useExactSrgbConversions).multiply(Qr.specularColor),
                  glossiness: fr[Zr + 3] * Qr.glossiness
                },
                pr = this._convertSpecularGlossinessToMetallicRoughness(jr);
              Yr.r = Math.max(Yr.r, pr.baseColor.r), Yr.g = Math.max(Yr.g, pr.baseColor.g), Yr.b = Math.max(Yr.b, pr.baseColor.b), nr = Math.max(nr, pr.metallic), er = Math.max(er, pr.roughness), tr[Zr] = 255 * pr.baseColor.r, tr[Zr + 1] = 255 * pr.baseColor.g, tr[Zr + 2] = 255 * pr.baseColor.b, tr[Zr + 3] = ar.texture1.hasAlpha ? 255 * Ir[Zr + 3] : 255, Ur[Zr] = 0, Ur[Zr + 1] = 255 * pr.roughness, Ur[Zr + 2] = 255 * pr.metallic, Ur[Zr + 3] = 255
            }
          const Kr = {
            baseColor: Yr,
            metallic: nr,
            roughness: er
          };
          let yr = !1,
            Br = !1;
          for (let rr = 0; rr < pr; ++rr)
            for (let Sr = 0; Sr < Er; ++Sr) {
              const Qr = (Er * rr + Sr) * zr;
              tr[Qr] /= Kr.baseColor.r > YQ ? Kr.baseColor.r : 1, tr[Qr + 1] /= Kr.baseColor.g > YQ ? Kr.baseColor.g : 1, tr[Qr + 2] /= Kr.baseColor.b > YQ ? Kr.baseColor.b : 1;
              const Zr = hr.Color3.FromInts(tr[Qr], tr[Qr + 1], tr[Qr + 2]).toGammaSpace(Wr.MU().useExactSrgbConversions);
              tr[Qr] = 255 * Zr.r, tr[Qr + 1] = 255 * Zr.g, tr[Qr + 2] = 255 * Zr.b, Zr.equalsWithEpsilon(KQ, YQ) || (Br = !0), Ur[Qr + 1] /= Kr.roughness > YQ ? Kr.roughness : 1, Ur[Qr + 2] /= Kr.metallic > YQ ? Kr.metallic : 1;
              hr.Color3.FromInts(255, Ur[Qr + 1], Ur[Qr + 2]).equalsWithEpsilon(KQ, YQ) || (yr = !0)
            }
          return yr && Zr.push((0, Tr.EncodeImageAsync)(Ur, Er, pr).then((rr => {
            Kr.metallicRoughnessTextureData = rr
          }))), Br && Zr.push((0, Tr.EncodeImageAsync)(tr, Er, pr).then((rr => {
            Kr.baseColorTextureData = rr
          }))), await Promise.all(Zr).then((() => Kr))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(rr) {
        const Sr = this._getPerceivedBrightness(rr.diffuseColor),
          Qr = this._getPerceivedBrightness(rr.specularColor),
          Zr = 1 - this._getMaxComponent(rr.specularColor),
          Wr = TQ(Sr, Qr, Zr),
          ar = rr.diffuseColor.scale(Zr / (1 - nQ.r) / Math.max(1 - Wr, YQ)),
          jr = rr.specularColor.subtract(nQ.scale(1 - Wr)).scale(1 / Math.max(Wr, YQ));
        let Ir = hr.Color3.Lerp(ar, jr, Wr * Wr);
        Ir = Ir.clampToRef(0, 1, Ir);
        return {
          baseColor: Ir,
          metallic: Wr,
          roughness: 1 - rr.glossiness
        }
      }
      _getPerceivedBrightness(rr) {
        return Math.sqrt(.299 * rr.r * rr.r + .587 * rr.g * rr.g + .114 * rr.b * rr.b)
      }
      _getMaxComponent(rr) {
        return Math.max(rr.r, Math.max(rr.g, rr.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        const Er = [],
          pr = {
            baseColor: rr,
            metallic: Sr,
            roughness: Qr
          };
        if (fr)
          if (jr instanceof sS) {
            if (jr.geometryOpacityTexture) {
              const rr = Zr && Zr.getInternalTexture() ? Zr.getInternalTexture().uniqueId : 0,
                Sr = jr.geometryOpacityTexture && jr.geometryOpacityTexture.getInternalTexture() ? jr.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                Qr = Number(`${rr}${Sr}`),
                Wr = this._textureMap.get(Qr);
              Wr ? Ir.baseColorTexture = Wr : Er.push(jQ("baseColorOpacityTexture", EQ(Zr ? IQ(Zr, 0) : fQ(1), Zr ? IQ(Zr, 1) : fQ(1), Zr ? IQ(Zr, 2) : fQ(1), IQ(jr.geometryOpacityTexture, 0)), jr.eC()).then((async rr => {
                const Sr = await this.exportTextureAsync(rr, Qr);
                Sr && (Ir.baseColorTexture = Sr)
              })))
            } else Zr && Er.push(this.exportTextureAsync(Zr).then((rr => {
              rr && (Ir.baseColorTexture = rr)
            })));
            if (jr._useMetallicFromMetallicTextureBlue && Wr) Er.push(this.exportTextureAsync(Wr).then((rr => {
              rr && (Ir.metallicRoughnessTexture = rr)
            })));
            else if (ar || Wr) {
              const rr = Wr && Wr.getInternalTexture() ? Wr.getInternalTexture().uniqueId : 0,
                Sr = ar && ar.getInternalTexture() ? ar.getInternalTexture().uniqueId : 0,
                Qr = Number(`${rr}${Sr}`),
                Zr = this._textureMap.get(Qr);
              Zr ? Ir.metallicRoughnessTexture = Zr : Er.push(jQ("MetalRoughTexture", EQ(jr.ambientOcclusionTexture ? IQ(jr.ambientOcclusionTexture, 0) : fQ(1), ar ? IQ(ar, 0) : fQ(1), Wr ? IQ(Wr, 0) : fQ(1)), jr.eC()).then((async rr => {
                const Sr = await this.exportTextureAsync(rr, Qr);
                Sr && (Ir.metallicRoughnessTexture = Sr)
              })))
            }
          } else Zr && Er.push(this.exportTextureAsync(Zr).then((rr => {
            rr && (Ir.baseColorTexture = rr)
          }))), Wr && Er.push(this.exportTextureAsync(Wr).then((rr => {
            rr && (Ir.metallicRoughnessTexture = rr)
          })));
        return Er.length > 0 && (this._exporter._materialNeedsUVsSet.add(jr), await Promise.all(Er)), pr
      }
      _getTextureSampler(rr) {
        const Sr = {};
        if (!rr || !(rr instanceof Kr.e)) return Sr;
        const Qr = this._getGLTFTextureWrapMode(rr.wrapU);
        10497 !== Qr && (Sr.wrapS = Qr);
        const Zr = this._getGLTFTextureWrapMode(rr.wrapV);
        switch (10497 !== Zr && (Sr.wrapT = Zr), rr.samplingMode) {
          case Kr.e.LINEAR_LINEAR:
            Sr.magFilter = 9729, Sr.minFilter = 9729;
            break;
          case Kr.e.LINEAR_NEAREST:
            Sr.magFilter = 9729, Sr.minFilter = 9728;
            break;
          case Kr.e.NEAREST_LINEAR:
            Sr.magFilter = 9728, Sr.minFilter = 9729;
            break;
          case Kr.e.NEAREST_LINEAR_MIPLINEAR:
            Sr.magFilter = 9728, Sr.minFilter = 9987;
            break;
          case Kr.e.NEAREST_NEAREST:
            Sr.magFilter = 9728, Sr.minFilter = 9728;
            break;
          case Kr.e.NEAREST_LINEAR_MIPNEAREST:
            Sr.magFilter = 9728, Sr.minFilter = 9985;
            break;
          case Kr.e.LINEAR_NEAREST_MIPNEAREST:
            Sr.magFilter = 9729, Sr.minFilter = 9984;
            break;
          case Kr.e.LINEAR_NEAREST_MIPLINEAR:
            Sr.magFilter = 9729, Sr.minFilter = 9986;
            break;
          case Kr.e.NEAREST_NEAREST_MIPLINEAR:
            Sr.magFilter = 9728, Sr.minFilter = 9986;
            break;
          case Kr.e.LINEAR_LINEAR_MIPLINEAR:
            Sr.magFilter = 9729, Sr.minFilter = 9987;
            break;
          case Kr.e.LINEAR_LINEAR_MIPNEAREST:
            Sr.magFilter = 9729, Sr.minFilter = 9985;
            break;
          case Kr.e.NEAREST_NEAREST_MIPNEAREST:
            Sr.magFilter = 9728, Sr.minFilter = 9984
        }
        return Sr
      }
      _getGLTFTextureWrapMode(rr) {
        switch (rr) {
          case Kr.e.WRAP_ADDRESSMODE:
            return 10497;
          case Kr.e.CLAMP_ADDRESSMODE:
            return 33071;
          case Kr.e.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Wr.Tools.Error(`Unsupported Texture Wrap Mode ${rr}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(rr, Sr, Qr) {
        const Zr = {
            diffuseColor: rr._albedoColor,
            specularColor: rr._reflectivityColor,
            glossiness: rr._microSurface
          },
          Wr = rr._albedoTexture,
          ar = rr._reflectivityTexture,
          jr = rr._useMicroSurfaceFromReflectivityMapAlpha;
        if (ar && !jr) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Wr || ar) && Qr) {
          this._exporter._materialNeedsUVsSet.add(rr);
          const Qr = this._exportTextureSampler(Wr || ar),
            jr = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Wr, ar, Zr),
            Ir = this._exporter._textures;
          if (jr.baseColorTextureData) {
            const rr = await this._exportImageAsync(`baseColor${Ir.length}`, jr.baseColorTextureData);
            Sr.baseColorTexture = this._exportTextureInfo(rr, Qr, Wr?.coordinatesIndex)
          }
          if (jr.metallicRoughnessTextureData) {
            const rr = await this._exportImageAsync(`metallicRoughness${Ir.length}`, jr.metallicRoughnessTextureData);
            Sr.metallicRoughnessTexture = this._exportTextureInfo(rr, Qr, ar?.coordinatesIndex)
          }
          return jr
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Zr)
      }
      async exportPBRMaterialAsync(rr, Sr) {
        const Qr = {},
          Zr = {
            name: rr.name
          },
          Wr = rr.isMetallicWorkflow();
        if (Wr) {
          const Sr = rr._albedoColor,
            Zr = rr.alpha;
          Sr && (Qr.baseColorFactor = [Sr.r, Sr.g, Sr.b, Zr])
        }
        const ar = Wr ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(rr._albedoColor, rr._metallic, rr._roughness, rr._albedoTexture, rr._metallicTexture, rr._metallicTexture, rr, Qr, Sr) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(rr, Qr, Sr);
        await this._setMetallicRoughnessPbrMaterialAsync(ar, rr, Zr, Qr, Sr), await this._finishMaterialAsync(Zr, rr);
        const jr = this._exporter._materials;
        return jr.push(Zr), jr.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(rr, Sr, Qr, Zr, ar) {
        if (OQ(Qr, Sr), rr.baseColor.equalsWithEpsilon(KQ, YQ) && nr.WithinEpsilon(Sr.alpha, 1, YQ) || (Zr.baseColorFactor = [rr.baseColor.r, rr.baseColor.g, rr.baseColor.b, Sr.alpha]), null != rr.metallic && 1 !== rr.metallic && (Zr.metallicFactor = rr.metallic), null != rr.roughness && 1 !== rr.roughness && (Zr.roughnessFactor = rr.roughness), null == Sr.backFaceCulling || Sr.backFaceCulling || (Sr._twoSidedLighting || Wr.Tools.Warn(Sr.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Qr.doubleSided = !0), ar) {
          const rr = [],
            Wr = Sr instanceof yS ? Sr._bumpTexture : Sr.geometryNormalTexture;
          Wr && rr.push(this.exportTextureAsync(Wr).then((rr => {
            rr && (Qr.normalTexture = rr, 1 !== Wr.level && (Qr.normalTexture.scale = Wr.level))
          })));
          const ar = Sr instanceof yS ? Sr._ambientTexture : Sr.ambientOcclusionTexture;
          ar && rr.push(new Promise((async rr => {
            if (Sr instanceof sS && Zr.metallicRoughnessTexture) {
              const Sr = this._exportTextureSampler(ar),
                Qr = this._exporter._textures[Zr.metallicRoughnessTexture.index].source,
                Wr = this._exportTextureInfo(Qr, Sr, ar.coordinatesIndex);
              return this._textureMap.set(ar.uniqueId, Wr), this._exporter._extensionsPostExportTextures("exporter", Wr, ar), rr(Wr)
            }
            return rr(await this.exportTextureAsync(ar))
          })).then((async rr => {
            if (rr) {
              const Zr = {
                index: rr.index,
                texCoord: rr.texCoord,
                extensions: rr.extensions
              };
              Qr.occlusionTexture = Zr, Zr.strength = Sr instanceof yS ? Sr._ambientTextureStrength : Sr.ambientOcclusionTexture.level
            }
          })));
          const jr = Sr instanceof yS ? Sr._emissiveTexture : Sr.emissionColorTexture;
          jr && rr.push(this.exportTextureAsync(jr).then((rr => {
            rr && (Qr.emissiveTexture = rr)
          }))), rr.length > 0 && (this._exporter._materialNeedsUVsSet.add(Sr), await Promise.all(rr))
        }
        const jr = Sr instanceof yS ? Sr._emissiveColor : Sr.emissionColor;
        jr.equalsWithEpsilon(yQ, YQ) || (Qr.emissiveFactor = jr.OWr()), Qr.pbrMetallicRoughness = Zr
      }
      async exportOpenPBRMaterialAsync(rr, Sr) {
        const Qr = {},
          Zr = {
            name: rr.name
          },
          Wr = rr.baseColor,
          ar = rr.geometryOpacity;
        Wr && (Qr.baseColorFactor = [Wr.r, Wr.g, Wr.b, ar]);
        const jr = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(rr.baseColor, rr.baseMetalness, rr.specularRoughness, rr.baseColorTexture, rr.baseMetalnessTexture, rr.specularRoughnessTexture, rr, Qr, Sr);
        await this._setMetallicRoughnessPbrMaterialAsync(jr, rr, Zr, Qr, Sr), await this._finishMaterialAsync(Zr, rr);
        const Ir = this._exporter._materials;
        return Ir.push(Zr), Ir.length - 1
      }
      async exportTextureAsync(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = this._textureMap.get(Sr ?? rr.uniqueId);
        if (Qr) return Qr;
        const Zr = this._exportTextureSampler(rr),
          Wr = await this._exportTextureImageAsync(rr);
        return Qr = this._exportTextureInfo(Wr, Zr, rr.coordinatesIndex), this._textureMap.set(Sr ?? rr.uniqueId, Qr), this._exporter._extensionsPostExportTextures("exporter", Qr, rr), Qr
      }
      async _exportTextureImageAsync(rr) {
        const Sr = rr.mimeType ?? "none",
          Qr = this._internalTextureToImage,
          Zr = rr.getInternalTexture().uniqueId;
        Qr[Zr] = Qr[Zr] || {};
        let ar = Qr[Zr][Sr];
        return void 0 === ar && (ar = (async () => {
          const Qr = await zQ(rr);
          if (Qr && BQ(Qr.mimeType) && ("none" === Sr || Qr.mimeType === Sr)) return await this._exportImageAsync(rr.name, new Blob([Qr.data], {
            type: Qr.mimeType
          }));
          let Zr = "image/png";
          "none" !== Sr && (BQ(Sr) ? Zr = Sr : (Zr = "image/png", Wr.Tools.Warn(`Unsupported media type: ${Sr}. Exporting texture as PNG.`)));
          const ar = rr.getSize(),
            jr = await (0, er.g)(rr),
            Ir = await (0, Tr.EncodeImageAsync)(jr, ar.width, ar.height, Zr);
          return await this._exportImageAsync(rr.name, Ir)
        })(), Qr[Zr][Sr] = ar), await ar
      }
      async _exportImageAsync(rr, Sr) {
        const Qr = this._exporter._images;
        let Zr;
        if (this._exporter._shouldUseGlb) {
          Zr = {
            name: rr,
            mimeType: Sr.type,
            bufferView: void 0
          };
          const Qr = await Sr.arrayBuffer(),
            Wr = this._exporter._bufferManager.createBufferView(new Uint8Array(Qr));
          this._exporter._bufferManager.setBufferView(Zr, Wr)
        } else {
          const ar = rr.replace(/\.\/|\/|\.\\|\\/g, "_"),
            jr = function(rr) {
              switch (rr) {
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
            }(Sr.type);
          let Ir = ar + jr;
          Qr.some((rr => rr.uri === Ir)) && (Ir = `${ar}_${Wr.Tools.RandomId()}${jr}`), Zr = {
            name: rr,
            uri: Ir
          }, this._exporter._imageData[Ir] = Sr
        }
        return Qr.push(Zr), Qr.length - 1
      }
      _exportTextureInfo(rr, Sr, Qr) {
        const Zr = this._exporter._textures;
        let Wr = Zr.findIndex((Qr => Qr.sampler == Sr && Qr.source === rr)); - 1 === Wr && (Wr = Zr.length, Zr.push({
          source: rr,
          sampler: Sr
        }));
        const ar = {
          index: Wr
        };
        return Qr && (ar.texCoord = Qr), ar
      }
      _exportTextureSampler(rr) {
        const Sr = this._getTextureSampler(rr),
          Qr = this._exporter._samplers,
          Zr = Qr.findIndex((rr => rr.minFilter === Sr.minFilter && rr.magFilter === Sr.magFilter && rr.wrapS === Sr.wrapS && rr.wrapT === Sr.wrapT));
        return -1 !== Zr ? Zr : (Qr.push(Sr), Qr.length - 1)
      }
    }
    var PQ = Qr(41919),
      HQ = Qr(42052);
    (0, HQ.c)();
    var qQ = Qr(38569);
    const RQ = Zr.Matrix.Compose(new Zr.kU(-1, 1, 1), Zr.Quaternion.Identity(), Zr.kU.Zero());

    function gQ(rr, Sr) {
      if (!(rr instanceof xr.b)) return !1;
      if (Sr) {
        if (!rr.getWorldMatrix().equalsWithEpsilon(Zr.Matrix.IdentityReadOnly, qQ.e)) return !1
      } else {
        if (!rr.getWorldMatrix().multiplyToRef(RQ, Zr.TmpVectors.Matrix[0]).equalsWithEpsilon(Zr.Matrix.IdentityReadOnly, qQ.e)) return !1
      }
      return !(rr instanceof mr.b && rr.geometry)
    }
    const CQ = Zr.kU.ZeroReadOnly,
      MQ = Zr.Quaternion.Identity(),
      GQ = Zr.kU.OneReadOnly,
      kQ = new Zr.kU(-1, 1, 1);

    function AQ(rr, Sr) {
      const {
        byteOffset: Qr,
        byteStride: Zr,
        type: Wr,
        normalized: ar
      } = rr, jr = rr.getSize(), Ir = Sr.reduce(((rr, Sr) => Sr.getTotalVertices() > rr ? Sr.getTotalVertices() : rr), -Number.MAX_VALUE);
      return {
        byteOffset: Qr,
        byteStride: Zr,
        componentCount: jr,
        type: Wr,
        count: Ir * jr,
        normalized: ar,
        totalVertices: Ir,
        kind: rr.getKind()
      }
    }

    function VQ(rr) {
      switch (rr) {
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

    function iQ(rr) {
      switch (rr) {
        case pr.g.PositionKind:
        case pr.g.NormalKind:
        case pr.g.TangentKind:
        case pr.g.ColorKind:
        case pr.g.MatricesIndicesKind:
        case pr.g.MatricesIndicesExtraKind:
        case pr.g.MatricesWeightsKind:
        case pr.g.MatricesWeightsExtraKind:
        case pr.g.UVKind:
        case pr.g.UV2Kind:
        case pr.g.UV3Kind:
        case pr.g.UV4Kind:
        case pr.g.UV5Kind:
        case pr.g.UV6Kind:
          return !0
      }
      return !1
    }

    function wQ(rr) {
      const Sr = Math.sqrt(rr.x * rr.x + rr.y * rr.y + rr.z * rr.z);
      Sr > 0 && (rr.x /= Sr, rr.y /= Sr, rr.z /= Sr)
    }

    function cQ(rr) {
      return rr.x *= -1, rr
    }

    function FQ(rr) {
      if (rr.x * rr.x + rr.y * rr.y > .5) {
        const Sr = Math.abs(rr.x),
          Qr = Math.abs(rr.y);
        if (Sr > Qr) {
          const Qr = Math.sign(rr.x);
          rr.x = Sr, rr.y *= -Qr, rr.z *= -Qr, rr.w *= Qr
        } else {
          const Sr = Math.sign(rr.y);
          rr.x *= -Sr, rr.y = Qr, rr.z *= Sr, rr.w *= -Sr
        }
      } else {
        const Sr = Math.abs(rr.z),
          Qr = Math.abs(rr.w);
        if (Sr > Qr) {
          const Qr = Math.sign(rr.z);
          rr.x *= -Qr, rr.y *= Qr, rr.z = Sr, rr.w *= -Qr
        } else {
          const Sr = Math.sign(rr.w);
          rr.x *= Sr, rr.y *= -Sr, rr.z *= -Sr, rr.w = Qr
        }
      }
      return rr
    }

    function oQ(rr) {
      rr.Hrr(-rr.z, rr.w, rr.x, -rr.y)
    }

    function bQ(rr, Sr) {
      const Qr = Zr.kU.FromArrayToRef(Sr.translation || [0, 0, 0], 0, Zr.TmpVectors.kU[0]),
        Wr = Zr.Quaternion.FromArrayToRef(Sr.rotation || [0, 0, 0, 1], 0, Zr.TmpVectors.Quaternion[0]),
        ar = Zr.Matrix.ComposeToRef(GQ, Wr, Qr, Zr.TmpVectors.Matrix[0]),
        jr = Zr.kU.FromArrayToRef(rr.translation || [0, 0, 0], 0, Zr.TmpVectors.kU[2]),
        Ir = Zr.Quaternion.FromArrayToRef(rr.rotation || [0, 0, 0, 1], 0, Zr.TmpVectors.Quaternion[1]),
        fr = Zr.Matrix.ComposeToRef(GQ, Ir, jr, Zr.TmpVectors.Matrix[1]);
      ar.multiplyToRef(fr, fr), fr.decompose(void 0, Wr, Qr), Qr.equalsWithEpsilon(CQ, qQ.e) ? delete Sr.translation : Sr.translation = Qr.OWr(), Wr.equalsWithEpsilon(MQ, qQ.e) ? delete Sr.rotation : Sr.rotation = Wr.OWr(), Sr.scale && delete Sr.scale
    }

    function JQ(rr, Sr) {
      if (!(Sr instanceof xr.b)) return !1;
      if (!(1 === Sr.getChildren().length && 0 === rr.getChildren().length && rr.parent === Sr)) return !1;
      const Qr = rr.eC(),
        Zr = rr instanceof HQ.f && !Qr.useRightHandedSystem ? kQ : GQ;
      return !!Sr.Tx.equalsWithEpsilon(Zr, qQ.e) || (Lr.c.Warn(`Cannot collapse node ${rr.name} into parent node ${Sr.name} with modified scaling.`), !1)
    }

    function DQ(rr) {
      if (rr instanceof Array) {
        const Sr = new Float32Array(rr);
        return new Uint8Array(Sr.buffer, Sr.byteOffset, Sr.byteLength)
      }
      return ArrayBuffer.isView(rr) ? new Uint8Array(rr.buffer, rr.byteOffset, rr.byteLength) : new Uint8Array(rr)
    }

    function dQ(rr, Sr) {
      for (const [Qr, Zr] of Object.entries(rr)) {
        const Wr = Sr[Qr];
        (Array.isArray(Zr) && Array.isArray(Wr) && sQ(Zr, Wr) || Zr === Wr) && delete rr[Qr]
      }
      return rr
    }

    function sQ(rr, Sr) {
      return rr.length === Sr.length && rr.every(((rr, Qr) => rr === Sr[Qr]))
    }
    const uQ = new Map([
      [Int8Array, (rr, Sr, Qr) => rr.setInt8(Sr, Qr)],
      [Uint8Array, (rr, Sr, Qr) => rr.setUint8(Sr, Qr)],
      [Uint8ClampedArray, (rr, Sr, Qr) => rr.setUint8(Sr, Qr)],
      [Int16Array, (rr, Sr, Qr) => rr.setInt16(Sr, Qr, !0)],
      [Uint16Array, (rr, Sr, Qr) => rr.setUint16(Sr, Qr, !0)],
      [Int32Array, (rr, Sr, Qr) => rr.setInt32(Sr, Qr, !0)],
      [Uint32Array, (rr, Sr, Qr) => rr.setUint32(Sr, Qr, !0)],
      [Float32Array, (rr, Sr, Qr) => rr.setFloat32(Sr, Qr, !0)],
      [Float64Array, (rr, Sr, Qr) => rr.setFloat64(Sr, Qr, !0)]
    ]);
    class rZ {
      writeTypedArray(rr) {
        this._checkGrowBuffer(rr.byteLength);
        const Sr = uQ.get(rr.constructor);
        for (let Qr = 0; Qr < rr.length; Qr++) Sr(this._dataView, this._byteOffset, rr[Qr]), this._byteOffset += rr.BYTES_PER_ELEMENT
      }
      constructor(rr) {
        this._data = new Uint8Array(rr), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(rr) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, rr), this._byteOffset++
      }
      writeInt8(rr) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, rr), this._byteOffset++
      }
      writeInt16(rr) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, rr, !0), this._byteOffset += 2
      }
      writeUInt16(rr) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, rr, !0), this._byteOffset += 2
      }
      writeInt32(rr) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, rr, !0), this._byteOffset += 4
      }
      writeUInt32(rr) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, rr, !0), this._byteOffset += 4
      }
      writeFloat32(rr) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, rr, !0), this._byteOffset += 4
      }
      writeFloat64(rr) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, rr, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(rr) {
        const Sr = this.byteOffset + rr;
        if (Sr > this._data.byteLength) {
          const rr = new Uint8Array(2 * Sr);
          rr.set(this._data), this._data = rr, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function SZ(rr) {
      return rr % 4 === 0 ? 4 : rr % 2 === 0 ? 2 : 1
    }
    class QZ {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(rr) {
        let Sr = 0;
        this._bufferViewToData.forEach((rr => {
          Sr += rr.byteLength
        }));
        const Qr = new rZ(Sr),
          Zr = Array.from(this._bufferViewToData.keys()).sort(((rr, Sr) => SZ(Sr.byteLength) - SZ(rr.byteLength)));
        for (const Wr of Zr) {
          Wr.byteOffset = Qr.byteOffset, rr.push(Wr);
          const Sr = rr.length - 1,
            Zr = this.getPropertiesWithBufferView(Wr);
          for (const rr of Zr) rr.bufferView = Sr;
          Qr.writeTypedArray(this._bufferViewToData.get(Wr)), this._bufferViewToData.delete(Wr)
        }
        return Qr.getOutputData()
      }
      createBufferView(rr, Sr) {
        const Qr = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: rr.byteLength,
          byteStride: Sr
        };
        return this._bufferViewToData.set(Qr, rr), Qr
      }
      createAccessor(rr, Sr, Qr, Zr, Wr, ar, jr) {
        this._verifyBufferView(rr);
        const Ir = {
          bufferView: void 0,
          componentType: Qr,
          count: Zr,
          type: Sr,
          min: ar?.min,
          max: ar?.max,
          normalized: jr,
          byteOffset: Wr
        };
        return this.setBufferView(Ir, rr), this._accessorToBufferView.set(Ir, rr), Ir
      }
      setBufferView(rr, Sr) {
        this._verifyBufferView(Sr);
        this.getPropertiesWithBufferView(Sr).push(rr)
      }
      removeBufferView(rr) {
        const Sr = this.getPropertiesWithBufferView(rr);
        for (const Qr of Sr) void 0 !== Qr.bufferView && delete Qr.bufferView;
        this._bufferViewToData.delete(rr), this._bufferViewToProperties.delete(rr), this._accessorToBufferView.forEach(((Sr, Qr) => {
          Sr === rr && (void 0 !== Qr.byteOffset && delete Qr.byteOffset, this._accessorToBufferView.delete(Qr))
        }))
      }
      getBufferView(rr) {
        const Sr = this._accessorToBufferView.get(rr);
        return this._verifyBufferView(Sr), Sr
      }
      getPropertiesWithBufferView(rr) {
        return this._verifyBufferView(rr), this._bufferViewToProperties.set(rr, this._bufferViewToProperties.get(rr) ?? []), this._bufferViewToProperties.get(rr)
      }
      getData(rr) {
        return this._verifyBufferView(rr), this._bufferViewToData.get(rr)
      }
      _verifyBufferView(rr) {
        if (void 0 === rr || !this._bufferViewToData.has(rr)) throw new Error(`BufferView ${rr} not found in BufferManager.`)
      }
    }
    var ZZ = Qr(42057);
    (0, ZZ.g)();
    var WZ = Qr(42293);
    (0, WZ.f)();
    var aZ = Qr(42100),
      jZ = Qr(42955);
    (0, jZ.h)();
    let IZ = (() => {
      var rr;
      let Sr, Qr, Zr = [],
        Wr = [],
        ar = [],
        jr = [];
      return rr = class {
        get influence() {
          return this._influence
        }
        set influence(rr) {
          if (this._influence === rr) return;
          const Sr = this._influence;
          this._influence = rr, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === Sr || 0 === rr)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(rr) {
          this._animationPropertiesOverride = rr
        }
        constructor(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Ir = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = rr, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new rQ.d, this._onDataLayoutChanged = new rQ.d, this.id = (0, vr.m)(this, Zr, void 0), this.morphTargetManager = ((0, vr.m)(this, Wr), (0, vr.m)(this, ar, null)), this._animationPropertiesOverride = ((0, vr.m)(this, jr), null), this.id = rr, this.morphTargetManager = Ir, this._scene = Qr || tr.b.LastCreatedScene, this.influence = Sr, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        Ifr(rr) {
          const Sr = this.hasPositions;
          this._positions = rr, Sr !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(rr) {
          const Sr = this.hasNormals;
          this._normals = rr, Sr !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(rr) {
          const Sr = this.hasTangents;
          this._tangents = rr, Sr !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(rr) {
          const Sr = this.hasUVs;
          this._uvs = rr, Sr !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(rr) {
          const Sr = this.hasUV2s;
          this._uv2s = rr, Sr !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(rr) {
          const Sr = this.hasColors;
          this._colors = rr, Sr !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const Sr = BS.e.Clone((() => new rr(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return Sr._positions = this._positions, Sr._normals = this._normals, Sr._tangents = this._tangents, Sr._uvs = this._uvs, Sr._uv2s = this._uv2s, Sr._colors = this._colors, Sr
        }
        serialize() {
          const rr = {};
          return rr.name = this.name, rr.influence = this.influence, null != this.id && (rr.id = this.id), rr.uniqueId = this.uniqueId, rr.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (rr.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (rr.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (rr.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (rr.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (rr.colors = Array.prototype.slice.call(this.getColors())), BS.e.AppendSerializedAnimations(this, rr), rr
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(Sr, Qr) {
          let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Wr = new rr(Sr.name, Sr.influence, Qr, Zr);
          if (Wr.Ifr(Sr.positions), null != Sr.id && (Wr.id = Sr.id), Sr.normals && Wr.setNormals(Sr.normals), Sr.tangents && Wr.setTangents(Sr.tangents), Sr.uvs && Wr.setUVs(Sr.uvs), Sr.uv2s && Wr.setUV2s(Sr.uv2s), Sr.colors && Wr.setColors(Sr.colors), Sr.animations) {
            for (let rr = 0; rr < Sr.animations.length; rr++) {
              const Qr = Sr.animations[rr],
                Zr = (0, VS.d)("BABYLON.Animation");
              Zr && Wr.animations.push(Zr.Parse(Qr))
            }
            Sr.autoAnimate && Qr && Qr.beginAnimation(Wr, Sr.autoAnimateFrom, Sr.autoAnimateTo, Sr.autoAnimateLoop, Sr.autoAnimateSpeed || 1)
          }
          return Wr
        }
        static FromMesh(Sr, Qr, Zr) {
          Qr || (Qr = Sr.name);
          const Wr = new rr(Qr, Zr, Sr.eC(), Sr.morphTargetManager);
          return Wr.Ifr(Sr.getVerticesData(kr.j.PositionKind)), Sr.isVerticesDataPresent(kr.j.NormalKind) && Wr.setNormals(Sr.getVerticesData(kr.j.NormalKind)), Sr.isVerticesDataPresent(kr.j.TangentKind) && Wr.setTangents(Sr.getVerticesData(kr.j.TangentKind)), Sr.isVerticesDataPresent(kr.j.UVKind) && Wr.setUVs(Sr.getVerticesData(kr.j.UVKind)), Sr.isVerticesDataPresent(kr.j.UV2Kind) && Wr.setUV2s(Sr.getVerticesData(kr.j.UV2Kind)), Sr.isVerticesDataPresent(kr.j.ColorKind) && Wr.setColors(Sr.getVerticesData(kr.j.ColorKind)), Wr
        }
      }, (() => {
        const Ir = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Sr = [(0, Or.G)()], Qr = [(0, Or.G)()], (0, vr.k)(null, null, Sr, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: rr => "id" in rr,
            get: rr => rr.id,
            set: (rr, Sr) => {
              rr.id = Sr
            }
          },
          metadata: Ir
        }, Zr, Wr), (0, vr.k)(null, null, Qr, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: rr => "morphTargetManager" in rr,
            get: rr => rr.morphTargetManager,
            set: (rr, Sr) => {
              rr.morphTargetManager = Sr
            }
          },
          metadata: Ir
        }, ar, jr), Ir && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ir
        })
      })(), rr
    })();
    var fZ, EZ = Qr(43037),
      pZ = Qr(42094);
    ! function(rr) {
      rr[rr.INTANGENT = 0] = "INTANGENT", rr[rr.OUTTANGENT = 1] = "OUTTANGENT"
    }(fZ || (fZ = {}));
    class xZ {
      static _IsTransformable(rr) {
        return rr && (rr instanceof xr.b || rr instanceof ZZ.d || rr instanceof pZ.c)
      }
      static _CreateNodeAnimation(rr, Sr, Qr, Zr, ar) {
        if (this._IsTransformable(rr)) {
          const jr = [],
            Ir = [],
            fr = Sr.getKeys(),
            Er = xZ._CalculateMinMaxKeyFrames(fr),
            pr = xZ._DeduceInterpolation(fr, Qr, Zr),
            xr = pr.interpolationType,
            mr = pr.shouldBakeAnimation;
          if (mr ? xZ._CreateBakedAnimation(rr, Sr, Qr, Er.min, Er.max, Sr.framePerSecond, ar, jr, Ir, Er, Zr) : "LINEAR" === xr || "STEP" === xr ? xZ._CreateLinearOrStepAnimation(rr, Sr, Qr, jr, Ir, Zr) : "CUBICSPLINE" === xr ? xZ._CreateCubicSplineAnimation(rr, Sr, Qr, jr, Ir, Zr) : xZ._CreateBakedAnimation(rr, Sr, Qr, Er.min, Er.max, Sr.framePerSecond, ar, jr, Ir, Er, Zr), jr.length && Ir.length) {
            return {
              inputs: jr,
              outputs: Ir,
              samplerInterpolation: xr,
              inputsMin: mr ? Er.min : Wr.Tools.FloatRound(Er.min / Sr.framePerSecond),
              inputsMax: mr ? Er.max : Wr.Tools.FloatRound(Er.max / Sr.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(rr) {
        let Sr = null,
          Qr = "VEC3",
          Zr = !1;
        const ar = rr.targetProperty.split(".");
        switch (ar[0]) {
          case "Tx":
            Sr = "scale";
            break;
          case "position":
            Sr = "translation";
            break;
          case "rotation":
            Qr = "VEC4", Sr = "rotation";
            break;
          case "rotationQuaternion":
            Qr = "VEC4", Zr = !0, Sr = "rotation";
            break;
          case "influence":
            Qr = "SCALAR", Sr = "weights";
            break;
          default:
            Wr.Tools.Error(`Unsupported animatable property ${ar[0]}`)
        }
        return Sr ? {
          animationChannelTargetPath: Sr,
          dataAccessorType: Qr,
          useQuaternion: Zr
        } : (Wr.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
        let xr;
        if (xZ._IsTransformable(rr) && rr.animations)
          for (const mr of rr.animations) {
            if (pr && !pr(mr)) continue;
            const Wr = xZ._DeduceAnimationInfo(mr);
            Wr && (xr = {
              name: mr.name,
              samplers: [],
              channels: []
            }, xZ._AddAnimation(`${mr.name}`, mr.hasRunningRuntimeAnimations ? Sr : xr, rr, mr, Wr.dataAccessorType, Wr.animationChannelTargetPath, Zr, ar, jr, Ir, Wr.useQuaternion, fr, Er), xr.samplers.length && xr.channels.length && Qr.push(xr))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
        let xr;
        if (rr instanceof EZ.d) {
          const Wr = rr.morphTargetManager;
          if (Wr)
            for (let mr = 0; mr < Wr.numTargets; ++mr) {
              const Nr = Wr.getTarget(mr);
              for (const Ur of Nr.animations) {
                if (pr && !pr(Ur)) continue;
                const Nr = new jZ.d(`${Ur.name}`, "influence", Ur.framePerSecond, Ur.dataType, Ur.TQ, Ur.enableBlending),
                  tr = [],
                  hr = Ur.getKeys();
                for (let rr = 0; rr < hr.length; ++rr) {
                  const Sr = hr[rr];
                  for (let rr = 0; rr < Wr.numTargets; ++rr) rr == mr ? tr.push(Sr) : tr.push({
                    frame: Sr.frame,
                    value: 0
                  })
                }
                Nr.setKeys(tr, !0);
                const zr = xZ._DeduceAnimationInfo(Nr);
                zr && (xr = {
                  name: Nr.name,
                  samplers: [],
                  channels: []
                }, xZ._AddAnimation(Ur.name, Ur.hasRunningRuntimeAnimations ? Sr : xr, rr, Nr, zr.dataAccessorType, zr.animationChannelTargetPath, Zr, ar, jr, Ir, zr.useQuaternion, fr, Er, Wr.numTargets), xr.samplers.length && xr.channels.length && Qr.push(xr))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
        let pr;
        if (rr.animationGroups) {
          const xr = rr.animationGroups;
          for (const mr of xr) {
            const xr = new Map,
              Nr = new Map,
              Ur = new Set,
              tr = mr.to - mr.from;
            pr = {
              name: mr.name,
              channels: [],
              samplers: []
            };
            for (let Sr = 0; Sr < mr.targetedAnimations.length; ++Sr) {
              const Er = mr.targetedAnimations[Sr],
                tr = Er.target,
                hr = Er.animation;
              if (fr && !fr(hr)) continue;
              const zr = Ir.has(tr);
              if (this._IsTransformable(tr) || 1 === tr.length && this._IsTransformable(tr[0])) {
                const rr = xZ._DeduceAnimationInfo(Er.animation);
                if (rr) {
                  const Sr = this._IsTransformable(tr) ? tr : this._IsTransformable(tr[0]) ? tr[0] : null;
                  Sr && xZ._AddAnimation(`${hr.name}`, pr, Sr, hr, rr.dataAccessorType, rr.animationChannelTargetPath, Qr, Zr, Wr, ar, rr.useQuaternion, jr, zr)
                }
              } else if (tr instanceof IZ || 1 === tr.length && tr[0] instanceof IZ) {
                if (xZ._DeduceAnimationInfo(Er.animation)) {
                  const Sr = tr instanceof IZ ? tr : tr[0];
                  if (Sr) {
                    const Qr = rr.morphTargetManagers.find((rr => {
                      for (let Qr = 0; Qr < rr.numTargets; ++Qr)
                        if (rr.getTarget(Qr) === Sr) return !0;
                      return !1
                    }));
                    if (Qr) {
                      const Zr = rr.meshes.find((rr => rr.morphTargetManager === Qr));
                      Zr && (xr.has(Zr) || xr.set(Zr, new Map), xr.get(Zr)?.set(Sr, hr), Ur.add(Zr), Nr.set(Zr, hr))
                    }
                  }
                }
              }
            }
            Ur.forEach((rr => {
              const Sr = rr.morphTargetManager;
              let Ir = null;
              const fr = [],
                Er = Nr.get(rr).getKeys(),
                Ur = Er.length;
              for (let Qr = 0; Qr < Ur; ++Qr)
                for (let Zr = 0; Zr < Sr.numTargets; ++Zr) {
                  const Wr = Sr.getTarget(Zr),
                    ar = xr.get(rr);
                  if (ar) {
                    const Sr = ar.get(Wr);
                    Sr ? (Ir || (Ir = new jZ.d(`${mr.name}_${rr.name}_MorphWeightAnimation`, "influence", Sr.framePerSecond, jZ.d.ANIMATIONTYPE_FLOAT, Sr.TQ, Sr.enableBlending)), fr.push(Sr.getKeys()[Qr])) : fr.push({
                      frame: mr.from + tr / Ur * Qr,
                      value: Wr.influence,
                      inTangent: Er[0].inTangent ? 0 : void 0,
                      outTangent: Er[0].outTangent ? 0 : void 0
                    })
                  }
                }
              Ir.setKeys(fr, !0);
              const hr = xZ._DeduceAnimationInfo(Ir);
              hr && xZ._AddAnimation(`${mr.name}_${rr.name}_MorphWeightAnimation`, pr, rr, Ir, hr.dataAccessorType, hr.animationChannelTargetPath, Qr, Zr, Wr, ar, hr.useQuaternion, jr, !1, Sr?.numTargets)
            })), pr.channels.length && pr.samplers.length && (Er?.set(mr, Sr.length), Sr.push(pr))
          }
        }
      }
      static _AddAnimation(rr, Sr, Qr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur) {
        const tr = xZ._CreateNodeAnimation(Qr, Wr, jr, xr, mr);
        let hr, zr, Yr, nr, er, Kr;
        if (tr) {
          if (Ur) {
            let rr, Sr = 0;
            const Qr = [];
            for (; tr.inputs.length > 0;) rr = tr.inputs.shift(), Sr % Ur == 0 && Qr.push(rr), Sr++;
            tr.inputs = Qr
          }
          const rr = Ir.get(Qr),
            Wr = new Float32Array(tr.inputs);
          hr = fr.createBufferView(Wr), zr = fr.createAccessor(hr, "SCALAR", 5126, tr.inputs.length, void 0, {
            min: [tr.inputsMin],
            max: [tr.inputsMax]
          }), pr.push(zr), Yr = pr.length - 1;
          const Er = new Zr.Quaternion,
            xr = new Zr.kU,
            mr = new Zr.kU,
            yr = Qr instanceof ZZ.d,
            Br = VQ(ar),
            Tr = new Float32Array(tr.outputs.length * Br);
          tr.outputs.forEach((function(rr, Sr) {
            let Qr = rr;
            switch (jr) {
              case "translation":
                Nr && (Zr.kU.FromArrayToRef(rr, 0, mr), cQ(mr), mr.toArray(Qr));
                break;
              case "rotation":
                4 === rr.length ? Zr.Quaternion.FromArrayToRef(rr, 0, Er) : (Qr = new Array(4), Zr.kU.FromArrayToRef(rr, 0, xr), Zr.Quaternion.FromEulerVectorToRef(xr, Er)), Nr && (FQ(Er), yr && oQ(Er)), Er.toArray(Qr)
            }
            Tr.set(Qr, Sr * Br)
          })), hr = fr.createBufferView(Tr), zr = fr.createAccessor(hr, ar, 5126, tr.outputs.length), pr.push(zr), nr = pr.length - 1, er = {
            interpolation: tr.samplerInterpolation,
            input: Yr,
            output: nr
          }, Sr.samplers.push(er), Kr = {
            sampler: Sr.samplers.length - 1,
            target: {
              node: rr,
              path: jr
            }
          }, Sr.channels.push(Kr)
        }
      }
      static _CreateBakedAnimation(rr, Sr, Qr, ar, jr, Ir, fr, Er, pr, xr, mr) {
        let Nr;
        const Ur = Zr.Quaternion.Identity();
        let tr, hr, zr, Yr, nr, er = null,
          Kr = null;
        xr.min = Wr.Tools.FloatRound(ar / Ir);
        const yr = Sr.getKeys();
        for (let Zr = 0, Br = yr.length; Zr < Br; ++Zr) {
          if (hr = yr[Zr], Zr + 1 < Br)
            if (zr = yr[Zr + 1], hr.value.equals && hr.value.equals(zr.value) || hr.value === zr.value) {
              if (0 !== Zr) continue;
              nr = hr.frame
            } else nr = zr.frame;
          else {
            if (Yr = yr[Zr - 1], hr.value.equals && hr.value.equals(Yr.value) || hr.value === Yr.value) continue;
            nr = jr
          }
          if (nr)
            for (let Zr = hr.frame; Zr <= nr; Zr += fr) {
              if (tr = Wr.Tools.FloatRound(Zr / Ir), tr === er) continue;
              er = tr, Kr = tr;
              const ar = {
                key: 0,
                repeatCount: 0,
                TQ: Sr.TQ
              };
              Nr = Sr._interpolate(Zr, ar), xZ._SetInterpolatedValue(rr, Nr, tr, Sr, Qr, Ur, Er, pr, mr)
            }
        }
        Kr && (xr.max = Kr)
      }
      static _ConvertFactorToVector3OrQuaternion(rr, Sr, Qr, ar, jr) {
        const Ir = xZ._GetBasePositionRotationOrScale(Sr, ar, jr),
          fr = Qr.targetProperty.split("."),
          Er = fr ? fr[1] : "",
          pr = jr ? Zr.Quaternion.FromArray(Ir).normalize() : Zr.kU.FromArray(Ir);
        switch (Er) {
          case "x":
          case "y":
          case "z":
            pr[Er] = rr;
            break;
          case "w":
            pr.w = rr;
            break;
          default:
            Wr.Tools.Error(`glTFAnimation: Unsupported component name "${Er}"!`)
        }
        return pr
      }
      static _SetInterpolatedValue(rr, Sr, Qr, Wr, ar, jr, Ir, fr, Er) {
        let pr;
        Ir.push(Qr), "weights" !== ar ? (Wr.dataType === jZ.d.ANIMATIONTYPE_FLOAT && (Sr = this._ConvertFactorToVector3OrQuaternion(Sr, rr, Wr, ar, Er)), "rotation" === ar ? (Er ? jr = Sr : (pr = Sr, Zr.Quaternion.RotationYawPitchRollToRef(pr.y, pr.x, pr.z, jr)), fr.push(jr.OWr())) : (pr = Sr, fr.push(pr.OWr()))) : fr.push([Sr])
      }
      static _CreateLinearOrStepAnimation(rr, Sr, Qr, Zr, Wr, ar) {
        for (const jr of Sr.getKeys()) Zr.push(jr.frame / Sr.framePerSecond), xZ._AddKeyframeValue(jr, Sr, Wr, Qr, rr, ar)
      }
      static _CreateCubicSplineAnimation(rr, Sr, Qr, Zr, Wr, ar) {
        Sr.getKeys().forEach((function(jr) {
          Zr.push(jr.frame / Sr.framePerSecond), xZ._AddSplineTangent(fZ.INTANGENT, Wr, Qr, "CUBICSPLINE", jr, ar), xZ._AddKeyframeValue(jr, Sr, Wr, Qr, rr, ar), xZ._AddSplineTangent(fZ.OUTTANGENT, Wr, Qr, "CUBICSPLINE", jr, ar)
        }))
      }
      static _GetBasePositionRotationOrScale(rr, Sr, Qr) {
        let Wr;
        if ("rotation" === Sr)
          if (Qr) {
            Wr = (rr.rotationQuaternion ?? Zr.Quaternion.Identity()).OWr()
          } else {
            Wr = (rr.rotation ?? Zr.kU.Zero()).OWr()
          }
        else if ("translation" === Sr) {
          Wr = (rr.position ?? Zr.kU.Zero()).OWr()
        } else {
          Wr = (rr.Tx ?? Zr.kU.One()).OWr()
        }
        return Wr
      }
      static _AddKeyframeValue(rr, Sr, Qr, ar, jr, Ir) {
        let fr;
        const Er = Sr.dataType;
        if (Er === jZ.d.ANIMATIONTYPE_VECTOR3) {
          let Sr = rr.value.OWr();
          if ("rotation" === ar) {
            const rr = Zr.kU.FromArray(Sr);
            Sr = Zr.Quaternion.RotationYawPitchRoll(rr.y, rr.x, rr.z).OWr()
          }
          Qr.push(Sr)
        } else if (Er === jZ.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === ar) Qr.push([rr.value]);
          else if (fr = this._ConvertFactorToVector3OrQuaternion(rr.value, jr, Sr, ar, Ir), fr) {
            if ("rotation" === ar) {
              const rr = Ir ? fr : Zr.Quaternion.RotationYawPitchRoll(fr.y, fr.x, fr.z).normalize();
              Qr.push(rr.OWr())
            }
            Qr.push(fr.OWr())
          }
        } else Er === jZ.d.ANIMATIONTYPE_QUATERNION ? Qr.push(rr.value.normalize().OWr()) : Wr.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(rr, Sr, Qr) {
        let Zr, Wr, ar = !1;
        if ("rotation" === Sr && !Qr) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let jr = 0, Ir = rr.length; jr < Ir; ++jr)
          if (Wr = rr[jr], Wr.inTangent || Wr.outTangent)
            if (Zr) {
              if ("CUBICSPLINE" !== Zr) {
                Zr = "LINEAR", ar = !0;
                break
              }
            } else Zr = "CUBICSPLINE";
        else if (Zr) {
          if ("CUBICSPLINE" === Zr || Wr.interpolation && 1 === Wr.interpolation && "STEP" !== Zr) {
            Zr = "LINEAR", ar = !0;
            break
          }
        } else Zr = Wr.interpolation && 1 === Wr.interpolation ? "STEP" : "LINEAR";
        return Zr || (Zr = "LINEAR"), {
          interpolationType: Zr,
          shouldBakeAnimation: ar
        }
      }
      static _AddSplineTangent(rr, Sr, Qr, Wr, ar, jr) {
        let Ir;
        const fr = rr === fZ.INTANGENT ? ar.inTangent : ar.outTangent;
        if ("CUBICSPLINE" === Wr) {
          if ("rotation" === Qr)
            if (fr)
              if (jr) Ir = fr.OWr();
              else {
                const rr = fr;
                Ir = Zr.Quaternion.RotationYawPitchRoll(rr.y, rr.x, rr.z).OWr()
              }
          else Ir = [0, 0, 0, 0];
          else Ir = "weights" === Qr ? fr ? [fr] : [0] : fr ? fr.OWr() : [0, 0, 0];
          Sr.push(Ir)
        }
      }
      static _CalculateMinMaxKeyFrames(rr) {
        let Sr = 1 / 0,
          Qr = -1 / 0;
        return rr.forEach((function(rr) {
          Sr = Math.min(Sr, rr.frame), Qr = Math.max(Qr, rr.frame)
        })), {
          min: Sr,
          max: Qr
        }
      }
    }

    function mZ(rr, Sr, Qr, ar, jr, Ir) {
      const fr = {
          attributes: {},
          influence: rr.influence,
          name: rr.name
        },
        Er = Sr.geometry;
      if (!Er) return Wr.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), fr;
      const xr = Ir ? -1 : 1,
        mr = Zr.kU.Zero();
      let Nr, Ur;
      if (rr.hasPositions) {
        const ar = rr.getPositions(),
          Ir = Er.getVerticesData(pr.g.PositionKind);
        if (Ir) {
          const rr = new Float32Array(Ir.length),
            Sr = [1 / 0, 1 / 0, 1 / 0],
            Wr = [-1 / 0, -1 / 0, -1 / 0];
          Ur = Ir.length / 3, Nr = 0;
          for (let Qr = Nr; Qr < Ur; ++Qr) {
            const jr = Zr.kU.FromArray(Ir, 3 * Qr);
            Zr.kU.FromArray(ar, 3 * Qr).subtractToRef(jr, mr), mr.x *= xr, Sr[0] = Math.min(Sr[0], mr.x), Wr[0] = Math.max(Wr[0], mr.x), Sr[1] = Math.min(Sr[1], mr.y), Wr[1] = Math.max(Wr[1], mr.y), Sr[2] = Math.min(Sr[2], mr.z), Wr[2] = Math.max(Wr[2], mr.z), rr[3 * Qr] = mr.x, rr[3 * Qr + 1] = mr.y, rr[3 * Qr + 2] = mr.z
          }
          const Er = Qr.createBufferView(rr, 12),
            pr = Qr.createAccessor(Er, "VEC3", 5126, ar.length / 3, 0, {
              min: Sr,
              max: Wr
            });
          jr.push(pr), fr.attributes.POSITION = jr.length - 1
        } else Wr.Tools.Warn(`Morph target positions for mesh ${Sr.name} were not exported. Mesh does not have position vertex data`)
      }
      if (rr.hasNormals) {
        const ar = rr.getNormals(),
          Ir = Er.getVerticesData(pr.g.NormalKind);
        if (Ir) {
          const rr = new Float32Array(Ir.length);
          Ur = Ir.length / 3, Nr = 0;
          for (let Qr = Nr; Qr < Ur; ++Qr) {
            const Sr = Zr.kU.FromArray(Ir, 3 * Qr).normalize();
            Zr.kU.FromArray(ar, 3 * Qr).normalize().subtractToRef(Sr, mr), rr[3 * Qr] = mr.x * xr, rr[3 * Qr + 1] = mr.y, rr[3 * Qr + 2] = mr.z
          }
          const Sr = Qr.createBufferView(rr, 12),
            Wr = Qr.createAccessor(Sr, "VEC3", 5126, ar.length / 3, 0);
          jr.push(Wr), fr.attributes.NORMAL = jr.length - 1
        } else Wr.Tools.Warn(`Morph target normals for mesh ${Sr.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (rr.hasTangents) {
        const ar = rr.getTangents(),
          Ir = Er.getVerticesData(pr.g.TangentKind);
        if (Ir) {
          Ur = Ir.length / 4;
          const rr = new Float32Array(3 * Ur);
          Nr = 0;
          for (let Qr = Nr; Qr < Ur; ++Qr) {
            const Sr = Zr.kU.FromArray(Ir, 4 * Qr);
            wQ(Sr);
            const Wr = Zr.kU.FromArray(ar, 3 * Qr);
            wQ(Wr), Wr.subtractToRef(Sr, mr), rr[3 * Qr] = mr.x * xr, rr[3 * Qr + 1] = mr.y, rr[3 * Qr + 2] = mr.z
          }
          const Sr = Qr.createBufferView(rr, 12),
            Wr = Qr.createAccessor(Sr, "VEC3", 5126, Ur, 0);
          jr.push(Wr), fr.attributes.TANGENT = jr.length - 1
        } else Wr.Tools.Warn(`Morph target tangents for mesh ${Sr.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (rr.hasColors) {
        const ar = rr.getColors(),
          Ir = Er.getVerticesData(pr.g.ColorKind),
          xr = Er.getVertexBuffer(pr.g.ColorKind);
        if (Ir && xr) {
          const rr = xr.getSize();
          Ur = Ir.length / rr;
          const Sr = new Float32Array(Ur * rr);
          Nr = 0;
          for (let Qr = Nr; Qr < Ur; ++Qr)
            if (3 === rr) {
              const Wr = Zr.kU.FromArray(Ir, Qr * rr);
              Zr.kU.FromArray(ar, Qr * rr).subtractToRef(Wr, mr), Sr[3 * Qr] = mr.x, Sr[3 * Qr + 1] = mr.y, Sr[3 * Qr + 2] = mr.z
            } else if (4 === rr) {
            const Wr = new Zr.Vector4,
              jr = Zr.Vector4.FromArray(Ir, Qr * rr);
            Zr.Vector4.FromArray(ar, Qr * rr).subtractToRef(jr, Wr), Sr[4 * Qr] = Wr.x, Sr[4 * Qr + 1] = Wr.y, Sr[4 * Qr + 2] = Wr.z, Sr[4 * Qr + 3] = Wr.w
          } else Wr.Tools.Warn(`Unsupported number of components for color attribute: ${rr}`);
          const Er = Qr.createBufferView(Sr, 4 * rr),
            pr = Qr.createAccessor(Er, 3 === rr ? "VEC3" : "VEC4", 5126, Ur, 0);
          jr.push(pr), fr.attributes.COLOR_0 = jr.length - 1
        } else Wr.Tools.Warn(`Morph target colors for mesh ${Sr.name} were not exported. Mesh does not have colors vertex data`)
      }
      return fr
    }
    var NZ = Qr(54112);
    class UZ {}
    UZ.DEFAULT_COLOR = Fr.e.White(), UZ.DEFAULT_WIDTH_ATTENUATED = 1, UZ.DEFAULT_WIDTH = .1;
    var tZ = Qr(42952);
    class hZ {
      constructor(rr) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = rr
      }
      moveTo(rr, Sr) {
        this._currentPath = new tZ.k(rr, Sr), this._tempPaths.push(this._currentPath)
      }
      lineTo(rr, Sr) {
        this._currentPath.addLineTo(rr, Sr)
      }
      quadraticCurveTo(rr, Sr, Qr, Zr) {
        this._currentPath.addQuadraticCurveTo(rr, Sr, Qr, Zr, this._resolution)
      }
      bezierCurveTo(rr, Sr, Qr, Zr, Wr, ar) {
        this._currentPath.addBezierCurveTo(rr, Sr, Qr, Zr, Wr, ar, this._resolution)
      }
      extractHoles() {
        for (const rr of this._tempPaths) rr.area() > 0 ? this._holes.push(rr) : this._paths.push(rr);
        if (!this._paths.length && this._holes.length) {
          const rr = this._holes;
          this._holes = this._paths, this._paths = rr
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

    function zZ(rr, Sr, Qr, Zr, Wr, ar) {
      const jr = ar.glyphs[rr] || ar.glyphs["?"];
      if (!jr) return null;
      const Ir = new hZ(Wr);
      if (jr.o) {
        const rr = jr.o.split(" ");
        for (let Wr = 0, ar = rr.length; Wr < ar;) {
          switch (rr[Wr++]) {
            case "m": {
              const ar = parseInt(rr[Wr++]) * Sr + Qr,
                jr = parseInt(rr[Wr++]) * Sr + Zr;
              Ir.moveTo(ar, jr);
              break
            }
            case "l": {
              const ar = parseInt(rr[Wr++]) * Sr + Qr,
                jr = parseInt(rr[Wr++]) * Sr + Zr;
              Ir.lineTo(ar, jr);
              break
            }
            case "q": {
              const ar = parseInt(rr[Wr++]) * Sr + Qr,
                jr = parseInt(rr[Wr++]) * Sr + Zr,
                fr = parseInt(rr[Wr++]) * Sr + Qr,
                Er = parseInt(rr[Wr++]) * Sr + Zr;
              Ir.quadraticCurveTo(fr, Er, ar, jr);
              break
            }
            case "b": {
              const ar = parseInt(rr[Wr++]) * Sr + Qr,
                jr = parseInt(rr[Wr++]) * Sr + Zr,
                fr = parseInt(rr[Wr++]) * Sr + Qr,
                Er = parseInt(rr[Wr++]) * Sr + Zr,
                pr = parseInt(rr[Wr++]) * Sr + Qr,
                xr = parseInt(rr[Wr++]) * Sr + Zr;
              Ir.bezierCurveTo(fr, Er, pr, xr, ar, jr);
              break
            }
          }
        }
      }
      return Ir.extractHoles(), {
        offsetX: jr.ha * Sr,
        shapePath: Ir
      }
    }

    function YZ(rr, Sr, Qr, Zr) {
      const Wr = Array.from(rr),
        ar = Sr / Zr.resolution,
        jr = (Zr.boundingBox.yMax - Zr.boundingBox.yMin + Zr.underlineThickness) * ar,
        Ir = [];
      let fr = 0,
        Er = 0;
      for (let pr = 0; pr < Wr.length; pr++) {
        const rr = Wr[pr];
        if ("\n" === rr) fr = 0, Er -= jr;
        else {
          const Sr = zZ(rr, ar, fr, Er, Qr, Zr);
          Sr && (fr += Sr.offsetX, Ir.push(Sr.shapePath))
        }
      }
      return Ir
    }
    class nZ {
      static ConvertPoints(rr, Sr) {
        if (rr.length && Array.isArray(rr) && "number" === typeof rr[0]) return [rr];
        if (rr.length && Array.isArray(rr[0]) && "number" === typeof rr[0][0]) return rr;
        if (rr.length && !Array.isArray(rr[0]) && rr[0] instanceof Gr.u) {
          const Sr = [];
          for (let Qr = 0; Qr < rr.length; Qr++) {
            const Zr = rr[Qr];
            Sr.push(Zr.x, Zr.y, Zr.z)
          }
          return [Sr]
        }
        if (rr.length > 0 && Array.isArray(rr[0]) && rr[0].length > 0 && rr[0][0] instanceof Gr.u) {
          const Sr = [],
            Qr = rr;
          for (const rr of Qr) Sr.push(rr.flatMap((rr => [rr.x, rr.y, rr.z])));
          return Sr
        }
        if (rr instanceof Float32Array) {
          if (Sr?.floatArrayStride) {
            const Qr = [],
              Zr = 3 * Sr.floatArrayStride;
            for (let Sr = 0; Sr < rr.length; Sr += Zr) {
              const Wr = new Array(Zr);
              for (let Qr = 0; Qr < Zr; Qr++) Wr[Qr] = rr[Sr + Qr];
              Qr.push(Wr)
            }
            return Qr
          }
          return [Array.from(rr)]
        }
        if (rr.length && rr[0] instanceof Float32Array) {
          const Sr = [];
          for (const Qr of rr) Sr.push(Array.from(Qr));
          return Sr
        }
        return []
      }
      static OmitZeroLengthPredicate(rr, Sr, Qr) {
        const Zr = [];
        return Sr.subtract(rr).lengthSquared() > 0 && Zr.push([rr, Sr]), Qr.subtract(Sr).lengthSquared() > 0 && Zr.push([Sr, Qr]), rr.subtract(Qr).lengthSquared() > 0 && Zr.push([Qr, rr]), 0 === Zr.length ? null : Zr
      }
      static OmitDuplicatesPredicate(rr, Sr, Qr, Zr) {
        const Wr = [];
        return nZ._SearchInPoints(rr, Sr, Zr) || Wr.push([rr, Sr]), nZ._SearchInPoints(Sr, Qr, Zr) || Wr.push([Sr, Qr]), nZ._SearchInPoints(Qr, rr, Zr) || Wr.push([Qr, rr]), 0 === Wr.length ? null : Wr
      }
      static _SearchInPoints(rr, Sr, Qr) {
        for (const Zr of Qr)
          for (let Qr = 0; Qr < Zr.length; Qr++)
            if (Zr[Qr]?.equals(rr) && (Zr[Qr + 1]?.equals(Sr) || Zr[Qr - 1]?.equals(Sr))) return !0;
        return !1
      }
      static MeshesToLines(rr, Sr) {
        const Qr = [];
        for (let Zr = 0; Zr < rr.length; Zr++) {
          const Wr = rr[Zr],
            ar = Wr.getVerticesData(kr.j.PositionKind),
            jr = Wr.yar();
          if (ar && jr)
            for (let rr = 0, Ir = 0; rr < jr.length; rr++) {
              const fr = 3 * jr[Ir++],
                Er = 3 * jr[Ir++],
                pr = 3 * jr[Ir++],
                xr = new Gr.u(ar[fr], ar[fr + 1], ar[fr + 2]),
                mr = new Gr.u(ar[Er], ar[Er + 1], ar[Er + 2]),
                Nr = new Gr.u(ar[pr], ar[pr + 1], ar[pr + 2]);
              if (Sr) {
                const Ir = Sr(xr, mr, Nr, Qr, rr, fr, Wr, Zr, ar, jr);
                if (Ir)
                  for (const rr of Ir) Qr.push(rr)
              } else Qr.push([xr, mr], [mr, Nr], [Nr, xr])
            }
        }
        return Qr
      }
      static ToVector3Array(rr) {
        if (Array.isArray(rr[0])) {
          const Sr = [],
            Qr = rr;
          for (const rr of Qr) {
            const Qr = [];
            for (let Sr = 0; Sr < rr.length; Sr += 3) Qr.push(new Gr.u(rr[Sr], rr[Sr + 1], rr[Sr + 2]));
            Sr.push(Qr)
          }
          return Sr
        }
        const Sr = rr,
          Qr = [];
        for (let Zr = 0; Zr < Sr.length; Zr += 3) Qr.push(new Gr.u(Sr[Zr], Sr[Zr + 1], Sr[Zr + 2]));
        return Qr
      }
      static ToNumberArray(rr) {
        return rr.flatMap((rr => [rr.x, rr.y, rr.z]))
      }
      static GetPointsCountInfo(rr) {
        const Sr = new Array(rr.length);
        let Qr = 0;
        for (let Zr = rr.length; Zr--;) Sr[Zr] = rr[Zr].length / 3, Qr += Sr[Zr];
        return {
          total: Qr,
          counts: Sr
        }
      }
      static GetLineLength(rr) {
        if (0 === rr.length) return 0;
        let Sr;
        Sr = "number" === typeof rr[0] ? nZ.ToVector3Array(rr) : rr;
        const Qr = Gr.n.kU[0];
        let Zr = 0;
        for (let Wr = 0; Wr < Sr.length - 1; Wr++) {
          const rr = Sr[Wr];
          Zr += Sr[Wr + 1].subtractToRef(rr, Qr).length()
        }
        return Zr
      }
      static GetLineLengthArray(rr, Sr) {
        const Qr = Sr ? new Float32Array(Sr, 0, rr.length / 3) : new Float32Array(rr.length / 3);
        let Zr = 0;
        for (let Wr = 0, ar = rr.length / 3 - 1; Wr < ar; Wr++) {
          let Sr = rr[3 * Wr + 0],
            ar = rr[3 * Wr + 1],
            jr = rr[3 * Wr + 2];
          Sr -= rr[3 * Wr + 3], ar -= rr[3 * Wr + 4], jr -= rr[3 * Wr + 5];
          Zr += Math.sqrt(Sr * Sr + ar * ar + jr * jr), Qr[Wr + 1] = Zr
        }
        return Qr
      }
      static SegmentizeSegmentByCount(rr, Sr, Qr) {
        const Zr = [],
          Wr = Sr.subtract(rr),
          ar = Gr.n.kU[0];
        ar.Srr(Qr);
        const jr = Gr.n.kU[1];
        Wr.divideToRef(ar, jr);
        let Ir = rr.clone();
        Zr.push(Ir);
        for (let fr = 0; fr < Qr; fr++) Ir = Ir.clone(), Zr.push(Ir.addInPlace(jr));
        return Zr
      }
      static SegmentizeLineBySegmentLength(rr, Sr) {
        const Qr = rr[0] instanceof Gr.u ? nZ.GetLineSegments(rr) : "number" === typeof rr[0] ? nZ.GetLineSegments(nZ.ToVector3Array(rr)) : rr,
          Zr = [];
        for (const Wr of Qr)
          if (Wr.length > Sr) {
            const rr = nZ.SegmentizeSegmentByCount(Wr.point1, Wr.point2, Math.ceil(Wr.length / Sr));
            for (const Sr of rr) Zr.push(Sr)
          } else Zr.push(Wr.point1), Zr.push(Wr.point2);
        return Zr
      }
      static SegmentizeLineBySegmentCount(rr, Sr) {
        const Qr = "number" === typeof rr[0] ? nZ.ToVector3Array(rr) : rr,
          Zr = nZ.GetLineLength(Qr) / Sr;
        return nZ.SegmentizeLineBySegmentLength(Qr, Zr)
      }
      static GetLineSegments(rr) {
        const Sr = [];
        for (let Qr = 0; Qr < rr.length - 1; Qr++) {
          const Zr = rr[Qr],
            Wr = rr[Qr + 1],
            ar = Wr.subtract(Zr).length();
          Sr.push({
            point1: Zr,
            point2: Wr,
            length: ar
          })
        }
        return Sr
      }
      static GetMinMaxSegmentLength(rr) {
        const Sr = nZ.GetLineSegments(rr).sort((rr => rr.length));
        return {
          min: Sr[0].length,
          max: Sr[Sr.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Wr = Sr * Qr;
        let ar = 0,
          jr = 0;
        const Ir = rr.length;
        for (let Er = 0; Er < Ir; Er++) {
          if (Wr <= ar + rr[Er].length) {
            jr = Er;
            break
          }
          ar += rr[Er].length
        }
        const fr = (Wr - ar) / rr[jr].length;
        return rr[jr].point2.subtractToRef(rr[jr].point1, Gr.n.kU[0]), Gr.n.kU[0].scaleToRef(fr, Gr.n.kU[1]), Zr || Gr.n.kU[1].addInPlace(rr[jr].point1), Gr.n.kU[1].clone()
      }
      static GetCircleLinePoints(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rr,
          Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / Sr;
        const ar = [];
        for (let jr = 0; jr <= Sr; jr++) ar.push(new Gr.u(Math.cos(jr * Wr) * rr, Math.sin(jr * Wr) * Zr, Qr));
        return ar
      }
      static GetBezierLinePoints(rr, Sr, Qr, Zr) {
        return tZ.h.CreateQuadraticBezier(rr, Sr, Qr, Zr).getPoints().flatMap((rr => [rr.x, rr.y, rr.z]))
      }
      static GetArrowCap(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [rr.clone(), rr.add(Sr.multiplyByFloats(Qr, Qr, Qr))],
          widths: [Zr, Wr, ar, jr]
        }
      }
      static GetPointsFromText(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ar = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const jr = [],
          Ir = YZ(rr, Sr, Qr, Zr);
        for (const fr of Ir) {
          for (const rr of fr.paths) {
            const Sr = [],
              Qr = rr.getPoints();
            for (const rr of Qr) Sr.push(rr.x, rr.y, Wr);
            jr.push(Sr)
          }
          if (ar)
            for (const rr of fr.holes) {
              const Sr = [],
                Qr = rr.getPoints();
              for (const rr of Qr) Sr.push(rr.x, rr.y, Wr);
              jr.push(Sr)
            }
        }
        return jr
      }
      static Color3toRGBAUint8(rr) {
        const Sr = new Uint8Array(4 * rr.length);
        for (let Qr = 0, Zr = 0; Qr < rr.length; Qr++) Sr[Zr++] = 255 * rr[Qr].r, Sr[Zr++] = 255 * rr[Qr].g, Sr[Zr++] = 255 * rr[Qr].b, Sr[Zr++] = 255;
        return Sr
      }
      static CreateColorsTexture(rr, Sr, Qr, Zr) {
        const Wr = Zr.MU().getCaps().maxTextureSize ?? 1,
          ar = Sr.length > Wr ? Wr : Sr.length,
          jr = Math.ceil(Sr.length / Wr);
        jr > 1 && (Sr = [...Sr, ...Array(ar * jr - Sr.length).fill(Sr[0])]);
        const Ir = nZ.Color3toRGBAUint8(Sr),
          fr = new yr.c(Ir, ar, jr, pQ.d.TEXTUREFORMAT_RGBA, Zr, !1, !0, Qr);
        return fr.name = rr, fr
      }
      static PrepareEmptyColorsTexture(rr) {
        if (!UZ.EmptyColorsTexture) {
          const Sr = new Uint8Array(4);
          UZ.EmptyColorsTexture = new yr.c(Sr, 1, 1, pQ.d.TEXTUREFORMAT_RGBA, rr, !1, !1, yr.c.NEAREST_NEAREST), UZ.EmptyColorsTexture.name = "grlEmptyColorsTexture", UZ.EmptyColorsTexture.lC.addOnce((() => {
            UZ.EmptyColorsTexture = null
          }))
        }
        return UZ.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        UZ.EmptyColorsTexture?.dispose(), UZ.EmptyColorsTexture = null
      }
      static BooleanToNumber(rr) {
        return rr ? 1 : 0
      }
    }
    class eZ extends Ar.b {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class KZ extends Vr.c {
      isCompatible(rr) {
        return !0
      }
      constructor(rr, Sr, Qr) {
        Qr = Qr || {
          color: UZ.DEFAULT_COLOR
        };
        const Zr = new eZ;
        Zr.GREASED_LINE_HAS_COLOR = !!Qr.color && !Qr.useColors, Zr.GREASED_LINE_SIZE_ATTENUATION = Qr.sizeAttenuation ?? !1, Zr.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === Qr.colorDistributionType, Zr.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (Sr ?? rr.eC()).useRightHandedSystem, Zr.GREASED_LINE_CAMERA_FACING = Qr.cameraFacing ?? !0, super(rr, KZ.GREASED_LINE_MATERIAL_NAME, 200, Zr, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = Qr?.forceGLSL || KZ.ForceGLSL, this._scene = Sr ?? rr.eC(), this._engine = this._scene.MU(), this._cameraFacing = Qr.cameraFacing ?? !0, this.visibility = Qr.visibility ?? 1, this.useDash = Qr.useDash ?? !1, this.dashRatio = Qr.dashRatio ?? .5, this.dashOffset = Qr.dashOffset ?? 0, this.width = Qr.width ? Qr.width : Qr.sizeAttenuation ? UZ.DEFAULT_WIDTH_ATTENUATED : UZ.DEFAULT_WIDTH, this._sizeAttenuation = Qr.sizeAttenuation ?? !1, this.colorMode = Qr.colorMode ?? 0, this._color = Qr.color ?? null, this.useColors = Qr.useColors ?? !1, this._colorsDistributionType = Qr.colorDistributionType ?? 0, this.colorsSampling = Qr.colorsSampling ?? yr.c.NEAREST_NEAREST, this._colors = Qr.colors ?? null, this.dashCount = Qr.dashCount ?? 1, this.resolution = Qr.resolution ?? new Gr.q(this._engine.getRenderWidth(), this._engine.getRenderHeight()), Qr.colorsTexture ? this.colorsTexture = Qr.colorsTexture : this._colors ? this.colorsTexture = nZ.CreateColorsTexture(`${rr.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? UZ.DEFAULT_COLOR, nZ.PrepareEmptyColorsTexture(this._scene)), this._engine.lC.add((() => {
          nZ.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(rr) {
        rr.push("grl_offsets"), rr.push("grl_widths"), rr.push("grl_colorPointers"), rr.push("grl_counters"), this._cameraFacing ? (rr.push("grl_previousAndSide"), rr.push("grl_nextAndCounters")) : rr.push("grl_slopes")
      }
      getSamplers(rr) {
        rr.push("grl_colors")
      }
      getActiveTextures(rr) {
        this.colorsTexture && rr.push(this.colorsTexture)
      }
      getUniforms() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Sr = [{
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
        return this._cameraFacing && Sr.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === rr && Sr.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: Sr,
          vertex: this._cameraFacing && this._isGLSL(rr) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(rr) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(rr) {
        if (this._cameraFacing) {
          rr.hrr("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || rr.hrr("viewProjection", this._scene.getTransformMatrix());
          const Sr = Gr.n.Vector4[0];
          Sr.x = this._aspect, Sr.y = this._resolution.x, Sr.z = this._resolution.y, Sr.w = this.width, rr.updateVector4("grl_aspect_resolution_lineWidth", Sr)
        }
        const Sr = Gr.n.Vector4[0];
        Sr.x = nZ.BooleanToNumber(this.useDash), Sr.y = this._dashArray, Sr.z = this.dashOffset, Sr.w = this.dashRatio, rr.updateVector4("grl_dashOptions", Sr);
        const Qr = Gr.n.Vector4[1];
        Qr.x = this.colorMode, Qr.y = this.visibility, Qr.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, Qr.w = nZ.BooleanToNumber(this.useColors), rr.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", Qr), this._color && rr.updateColor3("grl_singleColor", this._color);
        const Zr = this.colorsTexture ?? UZ.EmptyColorsTexture;
        rr.setTexture("grl_colors", Zr), rr.updateFloat2("grl_textureSize", Zr?.getSize().width ?? 1, Zr?.getSize().height ?? 1)
      }
      prepareDefines(rr, Sr, Qr) {
        rr.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, rr.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, rr.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, rr.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = Sr.useRightHandedSystem, rr.GREASED_LINE_CAMERA_FACING = this._cameraFacing, rr.GREASED_LINE_USE_OFFSETS = !!Qr.offsets
      }
      getClassName() {
        return KZ.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(Sr) ? function(rr, Sr) {
          if ("vertex" === rr) {
            const rr = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return Sr && (rr["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), rr
          }
          return "fragment" === rr ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(rr, this._cameraFacing) : function(rr, Sr) {
          if ("vertex" === rr) {
            const rr = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return Sr && (rr["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), rr
          }
          return "fragment" === rr ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(rr, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(rr) {
        this.setColors(rr)
      }
      setColors(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = this._colors?.length ?? 0;
        if (this._colors = rr, null !== rr && 0 !== rr.length) {
          if (!Sr || Qr)
            if (this.colorsTexture && Zr === rr.length && !Qr) {
              const Sr = nZ.Color3toRGBAUint8(rr);
              this.colorsTexture.update(Sr)
            } else this.colorsTexture?.dispose(), this.colorsTexture = nZ.CreateColorsTexture(`${this._material.name}-colors-texture`, rr, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(rr) {
        this._dashCount = rr, this._dashArray = 1 / rr
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(rr) {
        this._sizeAttenuation = rr, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(rr) {
        this.setColor(rr)
      }
      setColor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== rr || null !== this._color && null === rr ? (this._color = rr, Sr || this.markAllDefinesAsDirty()) : this._color = rr
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(rr) {
        this._colorsDistributionType = rr, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(rr) {
        this._aspect = rr.x / rr.y, this._resolution = rr
      }
      serialize() {
        const rr = super.serialize(),
          Sr = {
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
        return this._colors && (Sr.colors = this._colors), this._color && (Sr.color = this._color), rr.greasedLineMaterialOptions = Sr, rr
      }
      parse(rr, Sr, Qr) {
        super.parse(rr, Sr, Qr);
        const Zr = rr.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Zr.color && this.setColor(Zr.color, !0), Zr.colorDistributionType && (this.colorsDistributionType = Zr.colorDistributionType), Zr.colors && (this.colors = Zr.colors), Zr.colorsSampling && (this.colorsSampling = Zr.colorsSampling), Zr.colorMode && (this.colorMode = Zr.colorMode), Zr.useColors && (this.useColors = Zr.useColors), Zr.visibility && (this.visibility = Zr.visibility), Zr.useDash && (this.useDash = Zr.useDash), Zr.dashCount && (this.dashCount = Zr.dashCount), Zr.dashRatio && (this.dashRatio = Zr.dashRatio), Zr.dashOffset && (this.dashOffset = Zr.dashOffset), Zr.width && (this.width = Zr.width), Zr.sizeAttenuation && (this.sizeAttenuation = Zr.sizeAttenuation), Zr.resolution && (this.resolution = Zr.resolution), this.colors ? this.colorsTexture = nZ.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, Sr) : nZ.PrepareEmptyColorsTexture(Sr), this.markAllDefinesAsDirty()
      }
      copyTo(rr) {
        const Sr = rr;
        Sr.colorsTexture?.dispose(), this._colors && (Sr.colorsTexture = nZ.CreateColorsTexture(`${Sr._material.name}-colors-texture`, this._colors, Sr.colorsSampling, this._scene)), Sr.setColor(this.color, !0), Sr.colorsDistributionType = this.colorsDistributionType, Sr.colorsSampling = this.colorsSampling, Sr.colorMode = this.colorMode, Sr.useColors = this.useColors, Sr.visibility = this.visibility, Sr.useDash = this.useDash, Sr.dashCount = this.dashCount, Sr.dashRatio = this.dashRatio, Sr.dashOffset = this.dashOffset, Sr.width = this.width, Sr.sizeAttenuation = this.sizeAttenuation, Sr.resolution = this.resolution, Sr.markAllDefinesAsDirty()
      }
      _isGLSL(rr) {
        return 0 === rr || this._forceGLSL
      }
    }
    KZ.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", KZ.ForceGLSL = !1;
    var yZ = Qr(42243),
      BZ = Qr(42256),
      TZ = Qr(40237),
      vZ = Qr(42308),
      OZ = Qr(41735);
    class LZ extends vZ.o {
      constructor(rr, Sr, Zr) {
        const Wr = Sr.MU(),
          ar = Wr.isWebGPU && !(Zr.forceGLSL || LZ.ForceGLSL),
          jr = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        Sr.useRightHandedSystem && jr.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const Ir = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Zr.cameraFacing ? (jr.push("GREASED_LINE_CAMERA_FACING"), Ir.push("grl_previousAndSide", "grl_nextAndCounters")) : (Ir.push("grl_slopes"), Ir.push("grl_counters"));
        const fr = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (ar || fr.push("world", "viewProjection", "view", "projection"), super(rr, Sr, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: ar ? ["Scene", "Mesh"] : void 0,
            attributes: Ir,
            uniforms: fr,
            samplers: ar ? [] : ["grlColors"],
            defines: jr,
            extraInitializationsAsync: async () => {
              ar ? await Promise.all([Qr.e(653).then((() => Qr(65186))), Qr.e(709).then((() => Qr(65189)))]) : await Promise.all([Qr.e(646).then((() => Qr(65192))), Qr.e(710).then((() => Qr(65199)))])
            },
            shaderLanguage: ar ? 1 : 0
          }), this._color = Fr.e.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Zr = Zr || {
            color: UZ.DEFAULT_COLOR
          }, this.visibility = Zr.visibility ?? 1, this.useDash = Zr.useDash ?? !1, this.dashRatio = Zr.dashRatio ?? .5, this.dashOffset = Zr.dashOffset ?? 0, this.dashCount = Zr.dashCount ?? 1, this.width = Zr.width ? Zr.width : Zr.sizeAttenuation && Zr.cameraFacing ? UZ.DEFAULT_WIDTH_ATTENUATED : UZ.DEFAULT_WIDTH, this.sizeAttenuation = Zr.sizeAttenuation ?? !1, this.color = Zr.color ?? Fr.e.White(), this.useColors = Zr.useColors ?? !1, this.colorsDistributionType = Zr.colorDistributionType ?? 0, this.colorsSampling = Zr.colorsSampling ?? yr.c.NEAREST_NEAREST, this.colorMode = Zr.colorMode ?? 0, this._colors = Zr.colors ?? null, this._cameraFacing = Zr.cameraFacing ?? !0, this.resolution = Zr.resolution ?? new Gr.q(Wr.getRenderWidth(), Wr.getRenderHeight()), Zr.colorsTexture ? this.colorsTexture = Zr.colorsTexture : this._colors ? this.colorsTexture = nZ.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, Sr) : (this._color = this._color ?? UZ.DEFAULT_COLOR, this.colorsTexture = nZ.PrepareEmptyColorsTexture(Sr)), ar) {
          const rr = new OZ.b;
          rr.setParameters(), rr.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", rr)
        }
        Wr.lC.add((() => {
          nZ.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== UZ.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Gr.q(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(rr) {
        this.setColors(rr)
      }
      setColors(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = this._colors?.length ?? 0;
        if (this._colors = rr, null !== rr && 0 !== rr.length) {
          if (!Sr || Qr)
            if (this._colorsTexture && Zr === rr.length && !Qr) {
              const Sr = nZ.Color3toRGBAUint8(rr);
              this._colorsTexture.update(Sr)
            } else this._colorsTexture && this._colorsTexture !== UZ.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = nZ.CreateColorsTexture(`${this.name}-colors-texture`, rr, this.colorsSampling, this.eC())
        } else {
          this._colorsTexture && this._colorsTexture !== UZ.EmptyColorsTexture && this._colorsTexture.dispose();
          const rr = this.eC();
          rr && (this.colorsTexture = nZ.PrepareEmptyColorsTexture(rr))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(rr) {
        this._colorsTexture = rr, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(rr) {
        this._width = rr, this.setFloat("grlWidth", rr)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(rr) {
        this._useColors = rr, this.setFloat("grlUseColors", nZ.BooleanToNumber(rr))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(rr) {
        this._colorsSampling = rr
      }
      get visibility() {
        return this._visibility
      }
      set visibility(rr) {
        this._visibility = rr, this.setFloat("grlVisibility", rr)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(rr) {
        this._useDash = rr, this.setFloat("grlUseDash", nZ.BooleanToNumber(rr))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(rr) {
        this._dashOffset = rr, this.setFloat("grlDashOffset", rr)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(rr) {
        this._dashRatio = rr, this.setFloat("grlDashRatio", rr)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(rr) {
        this._dashCount = rr, this._dashArray = 1 / rr, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(rr) {
        this._sizeAttenuation = rr, this.setFloat("grlSizeAttenuation", nZ.BooleanToNumber(rr))
      }
      get color() {
        return this._color
      }
      set color(rr) {
        this.setColor(rr)
      }
      setColor(rr) {
        rr = rr ?? UZ.DEFAULT_COLOR, this._color = rr, this.setColor3("grlColor", rr)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(rr) {
        this._colorsDistributionType = rr, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(rr) {
        this._colorMode = rr, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(rr) {
        this._resolution = rr, this.setVector2("grlResolution", rr), this.setFloat("grlAspect", rr.x / rr.y)
      }
      serialize() {
        const rr = super.serialize(),
          Sr = {
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
        return this._colors && (Sr.colors = this._colors), rr.greasedLineMaterialOptions = Sr, rr
      }
      parse(rr, Sr, Qr) {
        const Zr = rr.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Zr.color && (this.color = Zr.color), Zr.colorDistributionType && (this.colorsDistributionType = Zr.colorDistributionType), Zr.colorsSampling && (this.colorsSampling = Zr.colorsSampling), Zr.colorMode && (this.colorMode = Zr.colorMode), Zr.useColors && (this.useColors = Zr.useColors), Zr.visibility && (this.visibility = Zr.visibility), Zr.useDash && (this.useDash = Zr.useDash), Zr.dashCount && (this.dashCount = Zr.dashCount), Zr.dashRatio && (this.dashRatio = Zr.dashRatio), Zr.dashOffset && (this.dashOffset = Zr.dashOffset), Zr.width && (this.width = Zr.width), Zr.sizeAttenuation && (this.sizeAttenuation = Zr.sizeAttenuation), Zr.resolution && (this.resolution = Zr.resolution), Zr.colors ? this.colorsTexture = nZ.CreateColorsTexture(`${this.name}-colors-texture`, Zr.colors, this.colorsSampling, this.eC()) : this.colorsTexture = nZ.PrepareEmptyColorsTexture(Sr), this._cameraFacing = Zr.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var lZ, XZ, PZ;
    LZ.ForceGLSL = !1,
      function(rr) {
        rr[rr.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", rr[rr.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(lZ || (lZ = {})),
      function(rr) {
        rr[rr.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", rr[rr.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", rr[rr.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(XZ || (XZ = {})),
      function(rr) {
        rr[rr.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", rr[rr.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", rr[rr.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", rr[rr.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", rr[rr.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(PZ || (PZ = {}));
    class HZ extends yZ.c {
      constructor(rr, Sr, Qr) {
        super(rr, Sr, null, null, !1, !1), this.name = rr, this._options = Qr, this._lazy = !1, this._updatable = !1, this._engine = Sr.MU(), this._lazy = Qr.lazy ?? !1, this._updatable = Qr.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = Qr.colorPointers ?? [], this._widths = Qr.widths ?? new Array(Qr.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(rr) {
        let Sr = 0;
        for (const Zr of this._points) Sr += Zr.length;
        const Qr = Sr / 3 * 2 - this._widths.length;
        for (let Zr = 0; Zr < Qr; Zr++) this._widths.push(rr)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.VU && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(rr, Sr) {
        for (const Qr of rr) this._points.push(Qr);
        this._lazy || this.setPoints(this._points, Sr)
      }
      dispose(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(rr, Sr)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(rr) {
        this._uvs = rr instanceof Float32Array ? rr : new Float32Array(rr), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(rr) {
        this.material instanceof LZ && this.material.setDefine("GREASED_LINE_USE_OFFSETS", rr?.length > 0), this._offsets = rr, this._offsetsBuffer ? this._offsetsBuffer.update(rr) : this._createOffsetsBuffer(rr)
      }
      get widths() {
        return this._widths
      }
      set widths(rr) {
        this._widths = rr, this._lazy || this._widthsBuffer && this._widthsBuffer.update(rr)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(rr) {
        this._colorPointers = rr, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(rr)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof LZ) return this.material;
        const rr = this.material?.pluginManager?.getPlugin(KZ.GREASED_LINE_MATERIAL_NAME);
        return rr || void 0
      }
      get points() {
        const rr = [];
        return TZ.b.DeepCopy(this._points, rr), rr
      }
      setPoints(rr, Sr) {
        this._points = nZ.ConvertPoints(rr, Sr?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), Sr?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, Sr)
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
      serialize(rr) {
        super.serialize(rr), rr.type = this.getClassName(), rr.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = new BZ.b;
        return Sr.positions = this._vertexPositions, Sr.indices = this._indices, Sr.uvs = this._uvs, rr && (Sr.normals = [], BZ.b.ComputeNormals(this._vertexPositions, this._indices, Sr.normals)), Sr.applyToMesh(this, this._options.updatable), Sr
      }
      _createOffsetsBuffer(rr) {
        const Sr = this._scene.MU(),
          Qr = new kr.c(Sr, rr, this._updatable, 3);
        this.setVerticesBuffer(Qr.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = Qr
      }
    }
    class qZ {
      constructor(rr, Sr) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = rr, this.wasAddedByNoopNode = Sr
      }
      getIndicesAccessor(rr, Sr, Qr, Zr, Wr) {
        return this._indicesAccessorMap.get(rr)?.get(Sr)?.get(Qr)?.get(Zr)?.get(Wr)
      }
      setIndicesAccessor(rr, Sr, Qr, Zr, Wr, ar) {
        let jr = this._indicesAccessorMap.get(rr);
        jr || (jr = new Map, this._indicesAccessorMap.set(rr, jr));
        let Ir = jr.get(Sr);
        Ir || (Ir = new Map, jr.set(Sr, Ir));
        let fr = Ir.get(Qr);
        fr || (fr = new Map, Ir.set(Qr, fr));
        let Er = fr.get(Zr);
        Er || (Er = new Map, fr.set(Zr, Er)), Er.set(Wr, ar)
      }
      pushExportedNode(rr) {
        this._exportedNodes.has(rr) || this._exportedNodes.add(rr)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(rr) {
        return this._vertexBufferViewMap.get(rr)
      }
      setVertexBufferView(rr, Sr) {
        this._vertexBufferViewMap.set(rr, Sr)
      }
      setRemappedBufferView(rr, Sr, Qr) {
        this._remappedBufferView.set(rr, new Map), this._remappedBufferView.get(rr).set(Sr, Qr)
      }
      getRemappedBufferView(rr, Sr) {
        return this._remappedBufferView.get(rr)?.get(Sr)
      }
      getVertexAccessor(rr, Sr, Qr) {
        return this._vertexAccessorMap.get(rr)?.get(Sr)?.get(Qr)
      }
      setVertexAccessor(rr, Sr, Qr, Zr) {
        let Wr = this._vertexAccessorMap.get(rr);
        Wr || (Wr = new Map, this._vertexAccessorMap.set(rr, Wr));
        let ar = Wr.get(Sr);
        ar || (ar = new Map, Wr.set(Sr, ar)), ar.set(Qr, Zr)
      }
      hasVertexColorAlpha(rr) {
        return this._vertexMapColorAlpha.get(rr) || !1
      }
      setHasVertexColorAlpha(rr, Sr) {
        return this._vertexMapColorAlpha.set(rr, Sr)
      }
      getMesh(rr) {
        return this._meshMap.get(rr)
      }
      setMesh(rr, Sr) {
        this._meshMap.set(rr, Sr)
      }
      bindMorphDataToMesh(rr, Sr) {
        const Qr = this._meshMorphTargetMap.get(rr) || [];
        this._meshMorphTargetMap.set(rr, Qr), -1 === Qr.indexOf(Sr) && Qr.push(Sr)
      }
      getMorphTargetsFromMesh(rr) {
        return this._meshMorphTargetMap.get(rr)
      }
    }
    class RZ {
      _ApplyExtension(rr, Sr, Qr, Zr) {
        if (Qr >= Sr.length) return Promise.resolve(rr);
        const Wr = Zr(Sr[Qr], rr);
        return Wr ? Wr.then((async rr => rr ? await this._ApplyExtension(rr, Sr, Qr + 1, Zr) : null)) : this._ApplyExtension(rr, Sr, Qr + 1, Zr)
      }
      _ApplyExtensions(rr, Sr) {
        const Qr = [];
        for (const Zr of RZ._ExtensionNames) Qr.push(this._extensions[Zr]);
        return this._ApplyExtension(rr, Qr, 0, Sr)
      }
      _extensionsPostExportNodeAsync(rr, Sr, Qr, Zr, Wr) {
        return this._ApplyExtensions(Sr, ((Sr, ar) => Sr.postExportNodeAsync && Sr.postExportNodeAsync(rr, ar, Qr, Zr, Wr, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(rr, Sr, Qr) {
        return this._ApplyExtensions(Sr, ((Sr, Zr) => Sr.postExportMaterialAsync && Sr.postExportMaterialAsync(rr, Zr, Qr)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        const Zr = [];
        return await Promise.all(RZ._ExtensionNames.map((async Wr => {
          const ar = this._extensions[Wr];
          if (ar.postExportMaterialAdditionalTexturesAsync) {
            const Wr = await ar.postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr);
            Zr.push(...Wr)
          }
        }))), Zr
      }
      _extensionsPostExportTextures(rr, Sr, Qr) {
        for (const Zr of RZ._ExtensionNames) {
          const Wr = this._extensions[Zr];
          Wr.postExportTexture && Wr.postExportTexture(rr, Sr, Qr)
        }
      }
      _extensionsPostExportMeshPrimitive(rr) {
        for (const Sr of RZ._ExtensionNames) {
          const Qr = this._extensions[Sr];
          Qr.postExportMeshPrimitive && Qr.postExportMeshPrimitive(rr, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const rr of RZ._ExtensionNames) {
          const Sr = this._extensions[rr];
          Sr.preGenerateBinaryAsync && await Sr.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(rr) {
        for (const Sr of RZ._ExtensionNames) {
          const Qr = this._extensions[Sr];
          Qr.enabled && rr(Qr)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((rr => {
          var Sr, Qr, Zr;
          rr.wasUsed && ((Sr = this._glTF).extensionsUsed || (Sr.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(rr.name) && this._glTF.extensionsUsed.push(rr.name), rr.required && ((Qr = this._glTF).extensionsRequired || (Qr.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(rr.name) && this._glTF.extensionsRequired.push(rr.name)), (Zr = this._glTF).extensions || (Zr.extensions = {}), rr.onExporting && rr.onExporting())
        }))
      }
      _loadExtensions() {
        for (const rr of RZ._ExtensionNames) {
          const Sr = RZ._ExtensionFactories[rr](this);
          this._extensions[rr] = Sr
        }
      }
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tr.b.LastCreatedScene,
          Sr = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${Ur.d.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new XQ(this), this._extensions = {}, this._bufferManager = new QZ, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !rr) throw new Error("No scene available to export");
        this._babylonScene = rr, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: rr => rr?.bR?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...Sr
        }, this._loadExtensions()
      }
      dispose() {
        for (const rr in this._extensions) {
          this._extensions[rr].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        RZ.UnregisterExtension(rr) && Wr.Tools.Warn(`Extension with the name ${rr} already exists`), RZ._ExtensionFactories[rr] = Sr;
        const Zr = Qr ?? 0;
        RZ._ExtensionOrders[rr] = Zr;
        let ar = RZ._ExtensionNames.length;
        for (let Wr = 0; Wr < RZ._ExtensionNames.length; Wr++) {
          const rr = RZ._ExtensionNames[Wr];
          if (Zr < RZ._ExtensionOrders[rr]) {
            ar = Wr;
            break
          }
        }
        RZ._ExtensionNames.splice(ar, 0, rr)
      }
      static UnregisterExtension(rr) {
        if (!RZ._ExtensionFactories[rr]) return !1;
        delete RZ._ExtensionFactories[rr], delete RZ._ExtensionOrders[rr];
        const Sr = RZ._ExtensionNames.indexOf(rr);
        return -1 !== Sr && RZ._ExtensionNames.splice(Sr, 1), !0
      }
      _generateJSON(rr, Sr, Qr) {
        const Zr = {
          byteLength: rr
        };
        return Zr.byteLength && (this._glTF.buffers = [Zr]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Dt = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Zr.uri = Sr + ".bin"), Qr ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(rr) {
        const Sr = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Qr = this._generateJSON(Sr.byteLength, rr, !0),
          Zr = new Blob([Sr], {
            type: "application/octet-stream"
          }),
          Wr = rr + ".gltf",
          ar = rr + ".bin",
          jr = new Er;
        if (jr.files[Wr] = Qr, jr.files[ar] = Zr, this._imageData)
          for (const Ir in this._imageData) jr.files[Ir] = this._imageData[Ir];
        return jr
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(rr) {
        const Sr = rr % 4;
        return 0 === Sr ? Sr : 4 - Sr
      }
      async generateGLBAsync(rr) {
        this._shouldUseGlb = !0;
        const Sr = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Qr = this._generateJSON(Sr.byteLength),
          Zr = rr + ".glb";
        let Wr, ar = Qr.length;
        if ("undefined" !== typeof TextEncoder) {
          Wr = (new TextEncoder).encode(Qr), ar = Wr.length
        }
        const jr = this._getPadding(ar),
          Ir = this._getPadding(Sr.byteLength),
          fr = 28 + ar + jr + Sr.byteLength + Ir,
          pr = new rZ(fr);
        if (pr.writeUInt32(1179937895), pr.writeUInt32(2), pr.writeUInt32(fr), pr.writeUInt32(ar + jr), pr.writeUInt32(1313821514), Wr) pr.writeTypedArray(Wr);
        else {
          const rr = "_".charCodeAt(0);
          for (let Sr = 0; Sr < ar; ++Sr) {
            const Zr = Qr.charCodeAt(Sr);
            Zr != Qr.codePointAt(Sr) ? pr.writeUInt8(rr) : pr.writeUInt8(Zr)
          }
        }
        for (let Er = 0; Er < jr; ++Er) pr.writeUInt8(32);
        pr.writeUInt32(Sr.byteLength + Ir), pr.writeUInt32(5130562), pr.writeTypedArray(Sr);
        for (let Er = 0; Er < Ir; ++Er) pr.writeUInt8(0);
        const xr = new Er;
        return xr.files[Zr] = new Blob([pr.getOutputData()], {
          type: "application/octet-stream"
        }), xr
      }
      _setNodeTransformation(rr, Sr, Qr) {
        if (Sr.getPivotPoint().equalsWithEpsilon(CQ, qQ.e) || Wr.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Sr.position.equalsWithEpsilon(CQ, qQ.e)) {
          const Wr = Zr.TmpVectors.kU[0].iH(Sr.position);
          Qr && cQ(Wr), rr.translation = Wr.OWr()
        }
        Sr.Tx.equalsWithEpsilon(GQ, qQ.e) || (rr.scale = Sr.Tx.OWr());
        const ar = Sr.rotationQuaternion?.clone() || Zr.Quaternion.FromEulerAngles(Sr.rotation.x, Sr.rotation.y, Sr.rotation.z);
        ar.equalsWithEpsilon(MQ, qQ.e) || (Qr && FQ(ar), rr.rotation = ar.normalize().OWr())
      }
      _setCameraTransformation(rr, Sr, Qr) {
        const Wr = Zr.TmpVectors.kU[0],
          ar = Zr.TmpVectors.Quaternion[0],
          jr = Sr.getWorldMatrix();
        if (Sr.parent) {
          const rr = Sr.parent.getWorldMatrix().invertToRef(Zr.TmpVectors.Matrix[0]);
          jr.multiplyToRef(rr, Zr.TmpVectors.Matrix[1]).decompose(void 0, ar, Wr)
        } else jr.decompose(void 0, ar, Wr);
        Wr.equalsWithEpsilon(CQ, qQ.e) || (Qr && cQ(Wr), rr.translation = Wr.OWr()), Qr && FQ(ar), this._babylonScene.useRightHandedSystem || oQ(ar), ar.equalsWithEpsilon(MQ, qQ.e) || (rr.rotation = ar.OWr())
      }
      _listAvailableCameras() {
        for (const rr of this._babylonScene.cameras) {
          const Sr = {
            type: rr.mode === ZZ.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (rr.name && (Sr.name = rr.name), "perspective" === Sr.type) Sr.perspective = {
            aspectRatio: rr.MU().getAspectRatio(rr),
            yfov: rr.fovMode === ZZ.d.FOVMODE_VERTICAL_FIXED ? rr.fov : rr.fov * rr.MU().getAspectRatio(rr),
            znear: rr.minZ,
            zfar: rr.maxZ
          };
          else if ("orthographic" === Sr.type) {
            const Qr = rr.orthoLeft && rr.orthoRight ? .5 * (rr.orthoRight - rr.orthoLeft) : .5 * rr.MU().getRenderWidth(),
              Zr = rr.orthoBottom && rr.orthoTop ? .5 * (rr.orthoTop - rr.orthoBottom) : .5 * rr.MU().getRenderHeight();
            Sr.orthographic = {
              xmag: Qr,
              ymag: Zr,
              znear: rr.minZ,
              zfar: rr.maxZ
            }
          }
          this._camerasMap.set(rr, Sr)
        }
      }
      _exportAndAssignCameras() {
        const rr = Array.from(this._camerasMap.values());
        for (const Sr of rr) {
          const rr = this._nodesCameraMap.get(Sr);
          if (void 0 !== rr) {
            this._cameras.push(Sr);
            for (const Sr of rr) Sr.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const rr of this._babylonScene.skeletons) {
          if (rr.bones.length <= 0) continue;
          const Sr = {
            joints: []
          };
          this._skinMap.set(rr, Sr)
        }
      }
      _exportAndAssignSkeletons(rr) {
        for (const Qr of this._babylonScene.skeletons) {
          if (Qr.bones.length <= 0) continue;
          const ar = this._skinMap.get(Qr);
          if (void 0 == ar) continue;
          const jr = {};
          let Ir = -1;
          for (let rr = 0; rr < Qr.bones.length; ++rr) {
            const Sr = Qr.bones[rr],
              Zr = Sr.getIndex() ?? rr; - 1 !== Zr && (jr[Zr] = Sr, Zr > Ir && (Ir = Zr))
          }
          const fr = [];
          for (let Qr = 0; Qr <= Ir; ++Qr) {
            const Ir = jr[Qr],
              Er = Ir.getTransformNode(),
              pr = Er ? this._nodeMap.get(Er) : void 0;
            if (void 0 === pr) {
              Wr.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            ar.joints.push(pr);
            const xr = Ir.getAbsoluteInverseBindMatrix().clone();
            rr.has(Er) && (Sr = xr, RQ.invertToRef(Zr.TmpVectors.Matrix[0]).multiplyToRef(Sr, Sr).multiplyToRef(RQ, Sr)), fr.push(xr)
          }
          const Er = this._nodesSkinMap.get(ar);
          if (ar.joints.length > 0 && void 0 !== Er) {
            const rr = new Float32Array(16 * fr.length);
            fr.forEach(((Sr, Qr) => {
              rr.set(Sr.m, 16 * Qr)
            }));
            const Sr = this._bufferManager.createBufferView(rr);
            this._accessors.push(this._bufferManager.createAccessor(Sr, "MAT4", 5126, fr.length)), ar.inverseBindMatrices = this._accessors.length - 1, this._skins.push(ar);
            const Qr = this._skins.length - 1;
            for (const Zr of Er) Zr.skin = Qr
          }
        }
        var Sr
      }
      async _exportSceneAsync() {
        const rr = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const Sr = this._options.metadataSelector(this._babylonScene.metadata);
          Sr && (rr.extras = Sr)
        }
        const Sr = new Array,
          Qr = new Array,
          Zr = new Array,
          Wr = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let ar;
        if (Wr && !this._options.includeCoordinateSystemConversionNodes)
          for (const Er of this._babylonScene.animationGroups)
            for (const rr of Er.targetedAnimations) {
              const Sr = rr.target;
              Sr instanceof xr.b && !Sr.parent && (ar ?? (ar = new Set)).add(Sr)
            }
        for (const Er of this._babylonScene.rootNodes) {
          const rr = Er.animations,
            jr = !!rr && rr.length > 0 || ar?.has(Er);
          Wr && !this._options.includeCoordinateSystemConversionNodes && gQ(Er, this._babylonScene.useRightHandedSystem) && !jr ? Zr.push(...Er.getChildren()) : this._babylonScene.useRightHandedSystem ? Sr.push(Er) : Qr.push(Er)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const jr = new qZ(!0, !1);
        rr.nodes.push(...await this._exportNodesAsync(Qr, jr));
        const Ir = new qZ(!1, !1);
        rr.nodes.push(...await this._exportNodesAsync(Sr, Ir));
        const fr = new qZ(!1, !0);
        rr.nodes.push(...await this._exportNodesAsync(Zr, fr)), rr.nodes.length && this._scenes.push(rr), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(jr.getNodesSet()), this._babylonScene.animationGroups.length && xZ._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, jr.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(rr) {
        return this._nodeMap.get(rr)
      }
      _getAnimationIndex(rr) {
        return this._animationGroupMap.get(rr)
      }
      _getCameraIndex(rr) {
        const Sr = this._camerasMap.get(rr);
        if (!Sr) return;
        const Qr = this._cameras.indexOf(Sr);
        return Qr >= 0 ? Qr : void 0
      }
      _getMaterialIndex(rr) {
        return this._materialMap.get(rr)
      }
      _getRootIndex(rr, Sr) {
        switch (rr) {
          case "nodes":
            return this._getNodeIndex(Sr);
          case "animations":
            return this._getAnimationIndex(Sr);
          case "cameras":
            return this._getCameraIndex(Sr);
          case "materials":
            return this._getMaterialIndex(Sr);
          case "meshes": {
            const rr = this._getNodeIndex(Sr);
            return void 0 === rr ? void 0 : this._nodes[rr]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(Sr)?.index;
          case "images": {
            const rr = this._materialExporter.getTextureInfo(Sr)?.index;
            if (void 0 === rr) return;
            const Qr = this._textures[rr];
            for (const Sr of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const rr = Qr?.extensions?.[Sr]?.source;
              if ("number" === typeof rr) return rr
            }
            return Qr?.source
          }
          case "samplers": {
            const rr = this._materialExporter.getTextureInfo(Sr)?.index;
            return void 0 === rr ? void 0 : this._textures[rr]?.sampler
          }
          case "skins": {
            const rr = this._skinMap.get(Sr),
              Qr = rr ? this._skins.indexOf(rr) : -1;
            return Qr >= 0 ? Qr : void 0
          }
          case "scenes":
            return Sr === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(rr, Sr, Qr) {
        const Zr = this._nodes[rr];
        if (!Zr) throw new Error(`Cannot write ${Sr}: glTF node ${rr} does not exist.`);
        Zr.extensions || (Zr.extensions = {}), Zr.extensions[Sr] = Qr
      }
      _shouldExportNode(rr) {
        let Sr = this._shouldExportNodeMap.get(rr);
        return void 0 === Sr && (Sr = this._options.shouldExportNode(rr), this._shouldExportNodeMap.set(rr, Sr)), Sr
      }
      async _exportNodesAsync(rr, Sr) {
        const Qr = new Array;
        this._exportBuffers(rr, Sr);
        for (const Zr of rr) await this._exportNodeAsync(Zr, Qr, Sr);
        return Qr
      }
      _collectBuffers(rr, Sr, Qr, Zr, Wr) {
        if (this._shouldExportNode(rr) && rr instanceof mr.b && rr.geometry) {
          const ar = rr.geometry.getVertexBuffers();
          if (ar)
            for (const Zr in ar) {
              if (!iQ(Zr)) continue;
              const jr = ar[Zr];
              Wr.setHasVertexColorAlpha(jr, rr.hasVertexAlpha);
              const Ir = jr._buffer,
                fr = Sr.get(Ir) || [];
              Sr.set(Ir, fr), -1 === fr.indexOf(jr) && fr.push(jr);
              const Er = Qr.get(jr) || [];
              Qr.set(jr, Er), -1 === Er.indexOf(rr) && Er.push(rr)
            }
          const jr = rr.morphTargetManager;
          if (jr)
            for (let Sr = 0; Sr < jr.numTargets; Sr++) {
              const Qr = jr.getTarget(Sr),
                Wr = Zr.get(Qr) || [];
              Zr.set(Qr, Wr), -1 === Wr.indexOf(rr) && Wr.push(rr)
            }
        }
        for (const ar of rr.getChildren()) this._collectBuffers(ar, Sr, Qr, Zr, Wr)
      }
      _exportBuffers(rr, Sr) {
        const Qr = new Map,
          Zr = new Map,
          Wr = new Map;
        for (const Ir of rr) this._collectBuffers(Ir, Qr, Zr, Wr, Sr);
        const ar = Array.from(Qr.keys());
        for (const Ir of ar) {
          const rr = Ir.getData();
          if (!rr) throw new Error("Buffer data is not available");
          const Wr = Qr.get(Ir);
          if (!Wr) continue;
          const ar = Wr[0].byteStride;
          if (Wr.some((rr => rr.byteStride !== ar))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const jr = DQ(rr).slice();
          for (const Sr of Wr) {
            const rr = Zr.get(Sr),
              {
                byteOffset: Qr,
                byteStride: Wr,
                componentCount: ar,
                type: Ir,
                count: fr,
                normalized: Er,
                kind: xr
              } = AQ(Sr, rr);
            switch (xr) {
              case pr.g.NormalKind:
              case pr.g.TangentKind:
                (0, PQ.f)(jr, Qr, Wr, ar, Ir, fr, Er, (rr => {
                  const Sr = Math.sqrt(rr[0] * rr[0] + rr[1] * rr[1] + rr[2] * rr[2]);
                  if (Sr > 0) {
                    const Qr = 1 / Sr;
                    rr[0] *= Qr, rr[1] *= Qr, rr[2] *= Qr
                  }
                }));
                break;
              case pr.g.ColorKind: {
                const Sr = rr.filter((rr => rr.material instanceof aZ.StandardMaterial || null == rr.material)).length;
                if (0 == Sr) break;
                if (Sr != rr.length) {
                  Lr.c.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                Ir == pr.g.UNSIGNED_BYTE && Lr.c.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Zr = new hr.Color3,
                  xr = new hr.d,
                  mr = this._babylonScene.MU().useExactSrgbConversions;
                (0, PQ.f)(jr, Qr, Wr, ar, Ir, fr, Er, (rr => {
                  3 === rr.length ? (Zr.dp(rr, 0), Zr.toLinearSpaceToRef(Zr, mr), Zr.toArray(rr, 0)) : (xr.dp(rr, 0), xr.toLinearSpaceToRef(xr, mr), xr.toArray(rr, 0))
                }))
              }
            }
          }
          if (Sr.convertToRightHanded) {
            for (const rr of Wr) {
              const Sr = Zr.get(rr),
                {
                  byteOffset: Qr,
                  byteStride: Wr,
                  componentCount: ar,
                  type: Ir,
                  count: fr,
                  normalized: Er,
                  kind: xr
                } = AQ(rr, Sr);
              switch (xr) {
                case pr.g.PositionKind:
                case pr.g.NormalKind:
                case pr.g.TangentKind:
                  (0, PQ.f)(jr, Qr, Wr, ar, Ir, fr, Er, (rr => {
                    rr[0] = -rr[0]
                  }))
              }
            }
            Sr.convertedToRightHandedBuffers.set(Ir, jr)
          }
          const fr = this._bufferManager.createBufferView(jr, ar);
          Sr.setVertexBufferView(Ir, fr);
          const Er = new Map;
          for (const Sr of Wr) {
            const rr = Zr.get(Sr),
              {
                kind: Qr,
                totalVertices: Wr
              } = AQ(Sr, rr);
            switch (Qr) {
              case pr.g.MatricesIndicesKind:
              case pr.g.MatricesIndicesExtraKind:
                if (Sr.type == pr.g.FLOAT) {
                  const rr = Sr.getFloatData(Wr);
                  null !== rr && Er.set(Sr, rr)
                }
            }
          }
          0 !== Er.size && Lr.c.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const xr = Array.from(Er.keys());
          for (const Qr of xr) {
            const rr = Er.get(Qr);
            if (!rr) continue;
            const Zr = rr.some((rr => rr >= 256)),
              Wr = new(Zr ? Uint16Array : Uint8Array)(rr.length);
            for (let Sr = 0; Sr < rr.length; Sr++) Wr[Sr] = rr[Sr];
            const ar = this._bufferManager.createBufferView(Wr, 4 * (Zr ? 2 : 1));
            Sr.setRemappedBufferView(Ir, Qr, ar)
          }
        }
        const jr = Array.from(Wr.keys());
        for (const Ir of jr) {
          const rr = Wr.get(Ir);
          if (!rr) continue;
          const Qr = mZ(Ir, rr[0], this._bufferManager, this._bufferViews, this._accessors, Sr.convertToRightHanded);
          for (const Zr of rr) Sr.bindMorphDataToMesh(Zr, Qr)
        }
      }
      async _exportNodeAsync(rr, Sr, Qr) {
        let Zr = this._nodeMap.get(rr);
        if (void 0 !== Zr) return void(Sr.includes(Zr) || Sr.push(Zr));
        const Wr = await this._createNodeAsync(rr, Qr);
        if (Wr) {
          Zr = this._nodes.length, this._nodes.push(Wr), this._nodeMap.set(rr, Zr), Qr.pushExportedNode(rr), Sr.push(Zr);
          const ar = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            jr = [];
          this._babylonScene.animationGroups.length || (xZ._CreateMorphTargetAnimationFromMorphTargetAnimations(rr, ar, jr, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Qr.convertToRightHanded, this._options.shouldExportAnimation), rr.animations.length && xZ._CreateNodeAnimationFromNodeAnimations(rr, ar, jr, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Qr.convertToRightHanded, this._options.shouldExportAnimation)), ar.channels.length && ar.samplers.length && this._animations.push(ar), jr.forEach((rr => {
            rr.channels.length && rr.samplers.length && this._animations.push(rr)
          }))
        }
        const ar = Wr ? [] : Sr;
        for (const jr of rr.getChildren()) await this._exportNodeAsync(jr, ar, Qr);
        Wr && ar.length && (Wr.children = ar)
      }
      async _createNodeAsync(rr, Sr) {
        if (!this._shouldExportNode(rr)) return null;
        const Qr = {};
        if (rr.name && (Qr.name = rr.name), rr.metadata) {
          const Sr = this._options.metadataSelector(rr.metadata);
          Sr && (Qr.extras = Sr)
        }
        if (rr instanceof xr.b && (this._setNodeTransformation(Qr, rr, Sr.convertToRightHanded), rr instanceof mr.b)) {
          const Zr = rr instanceof Nr.e ? rr.Rar : rr;
          if (Zr.jT && Zr.jT.length > 0 && (Qr.mesh = await this._exportMeshAsync(Zr, Sr)), rr.skeleton) {
            const Sr = this._skinMap.get(rr.skeleton);
            void 0 !== Sr && (void 0 === this._nodesSkinMap.get(Sr) && this._nodesSkinMap.set(Sr, []), this._nodesSkinMap.get(Sr)?.push(Qr))
          }
        }
        if (rr instanceof HQ.f) {
          const Zr = this._camerasMap.get(rr);
          if (Zr) {
            void 0 === this._nodesCameraMap.get(Zr) && this._nodesCameraMap.set(Zr, []), this._setCameraTransformation(Qr, rr, Sr.convertToRightHanded);
            const Wr = rr.parent;
            if (null !== Wr && JQ(rr, Wr)) {
              const rr = this._nodeMap.get(Wr);
              if (void 0 !== rr) {
                const Sr = this._nodes[rr];
                return bQ(Qr, Sr), this._nodesCameraMap.get(Zr)?.push(Sr), null
              }
            }
            this._nodesCameraMap.get(Zr)?.push(Qr)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", Qr, rr, this._nodeMap, Sr.convertToRightHanded) ? Qr : (Lr.c.Warn(`Not exporting node ${rr.name}`), null)
      }
      _exportIndices(rr, Sr, Qr, Zr, Wr, jr, Ir, fr, Er) {
        let pr = null;
        Er.mode = function(rr) {
          switch (rr) {
            case ar.d.TriangleFillMode:
              return 4;
            case ar.d.TriangleStripDrawMode:
              return 5;
            case ar.d.TriangleFanDrawMode:
              return 6;
            case ar.d.PointListDrawMode:
            case ar.d.PointFillMode:
              return 0;
            case ar.d.LineLoopDrawMode:
              return 2;
            case ar.d.LineListDrawMode:
              return 1;
            case ar.d.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${rr}`)
        }(jr);
        const xr = Ir !== ar.d.CounterClockWiseSideOrientation && function(rr) {
          switch (rr) {
            case ar.d.TriangleFillMode:
            case ar.d.TriangleStripDrawMode:
            case ar.d.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(jr);
        if (xr) {
          if (jr === ar.d.TriangleStripDrawMode || jr === ar.d.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const Ir = Sr ? new Uint32Array(Zr) : new Uint16Array(Zr);
          if (rr)
            for (let Sr = 0; Sr + 2 < Zr; Sr += 3) Ir[Sr] = rr[Qr + Sr] + Wr, Ir[Sr + 1] = rr[Qr + Sr + 2] + Wr, Ir[Sr + 2] = rr[Qr + Sr + 1] + Wr;
          else
            for (let rr = 0; rr + 2 < Zr; rr += 3) Ir[rr] = rr, Ir[rr + 1] = rr + 2, Ir[rr + 2] = rr + 1;
          pr = Ir
        } else if (rr && 0 !== Wr) {
          const ar = Sr ? new Uint32Array(Zr) : new Uint16Array(Zr);
          for (let Sr = 0; Sr < Zr; Sr++) ar[Sr] = rr[Qr + Sr] + Wr;
          pr = ar
        } else rr && (pr = function(rr, Sr, Qr, Zr) {
          let Wr = rr;
          return 0 === Sr && Qr === rr.length || (Wr = Array.isArray(rr) ? rr.slice(Sr, Sr + Qr) : rr.subarray(Sr, Sr + Qr)), Wr instanceof Int32Array ? new Uint32Array(Wr.buffer, Wr.byteOffset, Wr.length) : Array.isArray(Wr) ? Zr ? new Uint32Array(Wr) : new Uint16Array(Wr) : Wr
        }(rr, Qr, Zr, Sr));
        if (pr) {
          let ar = fr.getIndicesAccessor(rr, Qr, Zr, Wr, xr);
          if (void 0 === ar) {
            const jr = this._bufferManager.createBufferView(pr),
              Ir = Sr ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(jr, "SCALAR", Ir, Zr, 0)), ar = this._accessors.length - 1, fr.setIndicesAccessor(rr, Qr, Zr, Wr, xr, ar)
          }
          Er.indices = ar
        }
      }
      _exportVertexBuffer(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = rr.getKind();
        if (!iQ(jr)) return;
        if (jr.startsWith("uv") && !this._options.exportUnusedUVs && (!Sr || !this._materialNeedsUVsSet.has(Sr))) return;
        let Ir = Wr.getVertexAccessor(rr, Qr, Zr);
        if (void 0 === Ir) {
          const Sr = Wr.convertedToRightHandedBuffers.get(rr._buffer) || rr._buffer.getData(),
            ar = jr === pr.g.PositionKind ? function(rr, Sr, Qr, Zr) {
              const {
                byteOffset: Wr,
                byteStride: ar,
                type: jr,
                normalized: Ir
              } = Sr, fr = Sr.getSize(), Er = new Array(fr).fill(1 / 0), pr = new Array(fr).fill(-1 / 0);
              return (0, PQ.f)(rr, Wr + Qr * ar, ar, fr, jr, Zr * fr, Ir, (rr => {
                for (let Sr = 0; Sr < fr; Sr++) Er[Sr] = Math.min(Er[Sr], rr[Sr]), pr[Sr] = Math.max(pr[Sr], rr[Sr])
              })), {
                min: Er,
                max: pr
              }
            }(Sr, rr, Qr, Zr) : void 0,
            fr = (jr === pr.g.MatricesIndicesKind || jr === pr.g.MatricesIndicesExtraKind) && rr.type === pr.g.FLOAT,
            Er = fr ? pr.g.UNSIGNED_BYTE : rr.type,
            xr = fr ? void 0 : rr.normalized,
            mr = fr ? Wr.getRemappedBufferView(rr._buffer, rr) : Wr.getVertexBufferView(rr._buffer),
            Nr = rr.byteOffset + Qr * rr.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(mr, function(rr, Sr) {
            if (rr == pr.g.ColorKind) return Sr ? "VEC4" : "VEC3";
            switch (rr) {
              case pr.g.PositionKind:
              case pr.g.NormalKind:
                return "VEC3";
              case pr.g.TangentKind:
              case pr.g.MatricesIndicesKind:
              case pr.g.MatricesIndicesExtraKind:
              case pr.g.MatricesWeightsKind:
              case pr.g.MatricesWeightsExtraKind:
                return "VEC4";
              case pr.g.UVKind:
              case pr.g.UV2Kind:
              case pr.g.UV3Kind:
              case pr.g.UV4Kind:
              case pr.g.UV5Kind:
              case pr.g.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${rr}`)
          }(jr, Wr.hasVertexColorAlpha(rr)), Er, Zr, Nr, ar, xr)), Ir = this._accessors.length - 1, Wr.setVertexAccessor(rr, Qr, Zr, Ir)
        }
        ar.attributes[function(rr) {
          switch (rr) {
            case pr.g.PositionKind:
              return "POSITION";
            case pr.g.NormalKind:
              return "NORMAL";
            case pr.g.TangentKind:
              return "TANGENT";
            case pr.g.ColorKind:
              return "COLOR_0";
            case pr.g.UVKind:
              return "TEXCOORD_0";
            case pr.g.UV2Kind:
              return "TEXCOORD_1";
            case pr.g.UV3Kind:
              return "TEXCOORD_2";
            case pr.g.UV4Kind:
              return "TEXCOORD_3";
            case pr.g.UV5Kind:
              return "TEXCOORD_4";
            case pr.g.UV6Kind:
              return "TEXCOORD_5";
            case pr.g.MatricesIndicesKind:
              return "JOINTS_0";
            case pr.g.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case pr.g.MatricesWeightsKind:
              return "WEIGHTS_0";
            case pr.g.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${rr}`)
        }(jr)] = Ir
      }
      async _exportMaterialAsync(rr, Sr, Qr, Zr) {
        let Wr = this._materialMap.get(rr);
        if (void 0 === Wr) {
          const Zr = Sr && Object.keys(Sr).some((rr => rr.startsWith("uv")));
          if ((rr = rr instanceof WZ.b ? rr.Lrr[Qr.materialIndex] : rr) instanceof yS) Wr = await this._materialExporter.exportPBRMaterialAsync(rr, Zr);
          else if (rr instanceof aZ.StandardMaterial) Wr = await this._materialExporter.exportStandardMaterialAsync(rr, Zr);
          else {
            if (!(rr instanceof sS)) return void Lr.c.Warn(`Unsupported material '${rr.name}' with type ${rr.getClassName()}`);
            Wr = await this._materialExporter.exportOpenPBRMaterialAsync(rr, Zr)
          }
          this._materialMap.set(rr, Wr)
        }
        Zr.material = Wr
      }
      async _exportMeshAsync(rr, Sr) {
        let Qr = Sr.getMesh(rr);
        if (void 0 !== Qr) return Qr;
        const Zr = {
          primitives: []
        };
        Qr = this._meshes.length, this._meshes.push(Zr), Sr.setMesh(rr, Qr);
        const Wr = rr.isUnIndexed ? null : rr.yar(),
          jr = rr.geometry?.getVertexBuffers(),
          Ir = Sr.getMorphTargetsFromMesh(rr),
          fr = rr instanceof NZ.d,
          Er = rr instanceof HZ,
          pr = rr.jT;
        if (jr && pr && pr.length > 0)
          for (const xr of pr) {
            const Qr = {
                attributes: {}
              },
              pr = xr.iU() || this._babylonScene.defaultMaterial;
            if (Er) {
              const Sr = {
                  name: pr.name
                },
                Zr = rr,
                Wr = hr.Color3.White(),
                ar = Zr.material?.alpha ?? 1,
                jr = Zr.greasedLineMaterial?.color ?? Wr;
              (!jr.equalsWithEpsilon(Wr, qQ.e) || ar < 1) && (Sr.pbrMetallicRoughness = {
                baseColorFactor: [...jr.OWr(), ar]
              }), this._materials.push(Sr), Qr.material = this._materials.length - 1
            } else if (fr) {
              const Sr = {
                  name: pr.name
                },
                Zr = rr;
              (!Zr.color.equalsWithEpsilon(hr.Color3.White(), qQ.e) || Zr.alpha < 1) && (Sr.pbrMetallicRoughness = {
                baseColorFactor: [...Zr.color.OWr(), Zr.alpha]
              }), this._materials.push(Sr), Qr.material = this._materials.length - 1
            } else await this._exportMaterialAsync(pr, jr, xr, Qr);
            const mr = fr || Er ? ar.d.LineListDrawMode : rr.overrideRenderingFillMode ?? pr.fillMode;
            let Nr = pr._getEffectiveOrientation(rr);
            Sr.wasAddedByNoopNode && !rr.eC().useRightHandedSystem && (Nr = Nr === ar.d.ClockWiseSideOrientation ? ar.d.CounterClockWiseSideOrientation : ar.d.ClockWiseSideOrientation), this._exportIndices(Wr, Wr ? (0, PQ.c)(Wr, xr.indexCount, xr.indexStart, xr.verticesStart) : xr.verticesCount > 65535, Wr ? xr.indexStart : xr.verticesStart, Wr ? xr.indexCount : xr.verticesCount, -xr.verticesStart, mr, Nr, Sr, Qr);
            for (const rr of Object.values(jr)) this._exportVertexBuffer(rr, pr, xr.verticesStart, xr.verticesCount, Sr, Qr);
            if (Ir) {
              Qr.targets = [];
              for (const rr of Ir) Qr.targets.push(rr.attributes)
            }
            Zr.primitives.push(Qr), this._extensionsPostExportMeshPrimitive(Qr)
          }
        if (Ir) {
          Zr.weights = [], Zr.extras || (Zr.extras = {}), Zr.extras.targetNames = [];
          for (const rr of Ir) Zr.weights.push(rr.influence), Zr.extras.targetNames.push(rr.name)
        }
        return Qr
      }
    }
    RZ._ExtensionNames = new Array, RZ._ExtensionFactories = {}, RZ._ExtensionOrders = {};
    class gZ {
      static async GLTFAsync(rr, Sr, Qr) {
        Qr && Qr.exportWithoutWaitingForScene || await rr.whenReadyAsync();
        const Zr = new RZ(rr, Qr),
          Wr = await Zr.generateGLTFAsync(Sr.replace(/\.[^/.]+$/, ""));
        return Zr.dispose(), Wr
      }
      static async GLBAsync(rr, Sr, Qr) {
        Qr && Qr.exportWithoutWaitingForScene || await rr.whenReadyAsync();
        const Zr = new RZ(rr, Qr),
          Wr = await Zr.generateGLBAsync(Sr.replace(/\.[^/.]+$/, ""));
        return Zr.dispose(), Wr
      }
    }
    const CZ = "EXT_mesh_gpu_instancing";

    function MZ(rr, Sr) {
      const Qr = new Float32Array(3 * Sr);
      for (let Zr = 0; Zr < Sr; Zr++) Qr[3 * Zr + 0] = rr[4 * Zr + 0], Qr[3 * Zr + 1] = rr[4 * Zr + 1], Qr[3 * Zr + 2] = rr[4 * Zr + 2];
      return Qr
    }
    class GZ {
      constructor(rr) {
        this.name = CZ, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = rr
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(rr, Sr, Qr, Zr, Wr, ar) {
        return await new Promise((rr => {
          if (Sr && Qr instanceof yZ.c && Qr.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const rr = Gr.u.Zero(),
              Zr = Gr.h.Identity(),
              jr = Gr.u.One(),
              Ir = Qr.thinInstanceGetWorldMatrices(),
              fr = Gr.n.kU[2],
              Er = Gr.n.Quaternion[1],
              pr = Gr.n.kU[3];
            let xr = !1,
              mr = !1,
              Nr = !1;
            const Ur = new Float32Array(3 * Qr.frr),
              tr = new Float32Array(4 * Qr.frr),
              hr = new Float32Array(3 * Qr.frr);
            let zr = 0;
            for (const Sr of Ir) Sr.decompose(pr, Er, fr), Wr && (cQ(fr), FQ(Er)), Ur.set(fr.OWr(), 3 * zr), tr.set(Er.normalize().OWr(), 4 * zr), hr.set(pr.OWr(), 3 * zr), xr = xr || !fr.equalsWithEpsilon(rr), mr = mr || !Er.equalsWithEpsilon(Zr), Nr = Nr || !pr.equalsWithEpsilon(jr), zr++;
            const Yr = {
              attributes: {}
            };
            xr && (Yr.attributes.TRANSLATION = this._buildAccessor(Ur, "VEC3", Qr.frr, ar)), mr && (Yr.attributes.ROTATION = this._buildAccessor(tr, "VEC4", Qr.frr, ar)), Nr && (Yr.attributes.SCALE = this._buildAccessor(hr, "VEC3", Qr.frr, ar));
            let nr = Qr._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (nr) {
              const rr = Qr.frr,
                Sr = "VEC3";
              Qr.hasVertexAlpha && nr.length === 4 * rr ? (this._instanceColorWarned || (Lr.c.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), nr = MZ(nr, rr)) : nr.length === 4 * rr && (nr = MZ(nr, rr)), nr.length === 3 * rr && (Yr.attributes._COLOR_0 = this._buildAccessor(nr, Sr, rr, ar))
            }
            Sr.extensions = Sr.extensions || {}, Sr.extensions[CZ] = Yr
          }
          rr(Sr)
        }))
      }
      _buildAccessor(rr, Sr, Qr, Zr) {
        const Wr = Zr.createBufferView(rr),
          ar = Zr.createAccessor(Wr, Sr, 5126, Qr);
        return this._exporter._accessors.push(ar), this._exporter._accessors.length - 1
      }
    }
    let kZ = !1;

    function AZ() {
      kZ || (kZ = !0, RZ.RegisterExtension(CZ, (rr => new GZ(rr))))
    }
    Qr(42318);
    AZ();
    var VZ = Qr(54381);

    function iZ(rr, Sr, Qr, Zr) {
      const Wr = rr;
      let ar = null,
        jr = null,
        Ir = null,
        fr = null;
      const Er = {},
        pr = Sr.find((rr => "POSITION" === rr.dracoName));
      if (!pr) throw new Error("Draco: Missing position attribute for encoding.");
      if (!Qr) {
        const rr = pr.data.length / pr.size;
        Qr = new(rr > 65535 ? Uint32Array : Uint16Array)(rr);
        for (let Sr = 0; Sr < rr; Sr++) Qr[Sr] = Sr
      }
      try {
        ar = new Wr.Encoder, jr = new Wr.MeshBuilder, Ir = new Wr.Mesh, jr.AddFacesToMesh(Ir, Qr.length / 3, Qr);
        const rr = new Map([
          [Float32Array, (rr, Sr, Qr, Zr, Wr, ar) => rr.AddFloatAttribute(Sr, Qr, Zr, Wr, ar)],
          [Uint32Array, (rr, Sr, Qr, Zr, Wr, ar) => rr.AddUInt32Attribute(Sr, Qr, Zr, Wr, ar)],
          [Uint16Array, (rr, Sr, Qr, Zr, Wr, ar) => rr.AddUInt16Attribute(Sr, Qr, Zr, Wr, ar)],
          [Uint8Array, (rr, Sr, Qr, Zr, Wr, ar) => rr.AddUInt8Attribute(Sr, Qr, Zr, Wr, ar)],
          [Int32Array, (rr, Sr, Qr, Zr, Wr, ar) => rr.AddInt32Attribute(Sr, Qr, Zr, Wr, ar)],
          [Int16Array, (rr, Sr, Qr, Zr, Wr, ar) => rr.AddInt16Attribute(Sr, Qr, Zr, Wr, ar)],
          [Int8Array, (rr, Sr, Qr, Zr, Wr, ar) => rr.AddInt8Attribute(Sr, Qr, Zr, Wr, ar)]
        ]);
        for (const Qr of Sr) {
          Qr.data instanceof Uint8ClampedArray && (Qr.data = new Uint8Array(Qr.data));
          const Sr = rr.get(Qr.data.constructor),
            fr = Qr.data.length / Qr.size;
          Er[Qr.kind] = Sr(jr, Ir, Wr[Qr.dracoName], fr, Qr.size, Qr.data), Zr.quantizationBits && Zr.quantizationBits[Qr.dracoName] && ar.SetAttributeQuantization(Wr[Qr.dracoName], Zr.quantizationBits[Qr.dracoName])
        }
        Zr.method && ar.SetEncodingMethod(Wr[Zr.method]), void 0 !== Zr.encodeSpeed && void 0 !== Zr.decodeSpeed && ar.SetSpeedOptions(Zr.encodeSpeed, Zr.decodeSpeed), fr = new Wr.DracoInt8Array;
        const pr = ar.EncodeMeshToDracoBuffer(Ir, fr);
        if (pr <= 0) throw new Error("Draco: Failed to encode.");
        const xr = new Int8Array(pr);
        for (let Sr = 0; Sr < pr; Sr++) xr[Sr] = fr.GetValue(Sr);
        return {
          data: xr,
          attributeIds: Er
        }
      } finally {
        Ir && Wr.destroy(Ir), jr && Wr.destroy(jr), ar && Wr.destroy(ar), fr && Wr.destroy(fr)
      }
    }

    function wZ() {
      let rr;
      onmessage = Sr => {
        const Qr = Sr.data;
        switch (Qr.id) {
          case "init": {
            Qr.url && importScripts(Qr.url);
            const Sr = Qr.wasmBinary ? {
              wasmBinary: Qr.wasmBinary
            } : {};
            rr = DracoEncoderModule(Sr), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!rr) throw new Error("Draco: Encoder module is not available.");
            rr.then((rr => {
              const Sr = iZ(rr, Qr.attributes, Qr.indices, Qr.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: Sr
              }, Sr ? [Sr.data.buffer] : void 0)
            })).catch((rr => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: rr.message
              })
            }))
        }
      }
    }
    class cZ {
      constructor(rr) {
        if (rr.workerPool) return void(this._workerPoolPromise = Promise.resolve(rr.workerPool));
        const Sr = rr.wasmBinary,
          Qr = rr.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Zr = Qr && "function" === typeof Worker && "function" === typeof URL,
          Wr = Zr || !rr.jsModule,
          ar = rr.wasmUrl && rr.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Wr ? TS.h.GetBabylonScriptURL(rr.wasmUrl, !0) : "",
            wasmBinaryPromise: Sr ? Promise.resolve(Sr) : TS.h.LoadFileAsync(TS.h.GetBabylonScriptURL(rr.wasmBinaryUrl, !0))
          } : {
            url: Wr ? TS.h.GetBabylonScriptURL(rr.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Zr ? this._workerPoolPromise = ar.wasmBinaryPromise.then((rr => {
          const Sr = this._getWorkerContent(),
            Zr = URL.createObjectURL(new Blob([Sr], {
              type: "application/javascript"
            }));
          return new VZ.c(Qr, (() => async function(rr, Sr, Qr) {
            return await new Promise(((Zr, Wr) => {
              const ar = Sr => {
                  rr.removeEventListener("error", ar), rr.removeEventListener("message", jr), Wr(Sr)
                },
                jr = Sr => {
                  "initDone" === Sr.data.id && (rr.removeEventListener("error", ar), rr.removeEventListener("message", jr), Zr(rr))
                };
              if (rr.addEventListener("error", ar), rr.addEventListener("message", jr), Sr) {
                const Zr = Sr.slice(0);
                rr.postMessage({
                  id: "init",
                  url: Qr,
                  wasmBinary: Zr
                }, [Zr])
              } else rr.postMessage({
                id: "init",
                url: Qr
              })
            }))
          }(new Worker(Zr), rr, ar.url)))
        })) : this._modulePromise = ar.wasmBinaryPromise.then((async Sr => {
          if (!this._isModuleAvailable() && !rr.jsModule) {
            if (!ar.url) throw new Error("Draco codec module is not available");
            await TS.h.LoadBabylonScriptAsync(ar.url)
          }
          return await this._createModuleAsync(Sr, rr.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((rr => {
          rr.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function FZ() {
      const rr = rr => !!rr && "object" === typeof rr;
      for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
      return Qr.reduce(((Sr, Qr) => {
        const Zr = Object.keys(Qr);
        for (const Wr of Zr) {
          const Zr = Sr[Wr],
            ar = Qr[Wr];
          Array.isArray(Zr) && Array.isArray(ar) ? Sr[Wr] = Zr.concat(ar) : rr(Zr) && rr(ar) ? Sr[Wr] = FZ(Zr, ar) : Sr[Wr] = ar
        }
        return Sr
      }), {})
    }

    function oZ(rr) {
      return rr === kr.j.PositionKind ? "POSITION" : rr === kr.j.NormalKind ? "NORMAL" : rr === kr.j.ColorKind ? "COLOR" : rr.startsWith(kr.j.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const bZ = {
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
    class JZ extends cZ {
      static get DefaultAvailable() {
        return !!((rr = JZ.DefaultConfiguration).wasmUrl && (rr.wasmBinary || rr.wasmBinaryUrl) && "object" === typeof WebAssembly || rr.fallbackUrl);
        var rr
      }
      static get Default() {
        return JZ._Default ?? (JZ._Default = new JZ), JZ._Default
      }
      static ResetDefault(rr) {
        JZ._Default && (rr || JZ._Default.dispose(), JZ._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(rr, Sr) {
        return {
          module: await (Sr || DracoEncoderModule)({
            wasmBinary: rr
          })
        }
      }
      _getWorkerContent() {
        return `${iZ}(${wZ})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JZ.DefaultConfiguration)
      }
      async _encodeAsync(rr, Sr, Qr) {
        const Zr = Qr ? FZ(bZ, Qr) : bZ;
        if (this._workerPoolPromise) {
          const Qr = await this._workerPoolPromise;
          return await new Promise(((Wr, ar) => {
            Qr.push(((Qr, jr) => {
              const Ir = rr => {
                  Qr.removeEventListener("error", Ir), Qr.removeEventListener("message", fr), ar(rr), jr()
                },
                fr = rr => {
                  "encodeMeshSuccess" === rr.data.id ? (Qr.removeEventListener("error", Ir), Qr.removeEventListener("message", fr), Wr(rr.data.encodedMeshData), jr()) : "encodeMeshError" === rr.data.id && (Qr.removeEventListener("error", Ir), Qr.removeEventListener("message", fr), ar(new Error(rr.data.errorMessage)), jr())
                };
              Qr.addEventListener("error", Ir), Qr.addEventListener("message", fr);
              const Er = [];
              for (const Sr of rr) Er.push(Sr.data.buffer);
              Sr && Er.push(Sr.buffer), Qr.postMessage({
                id: "encodeMesh",
                attributes: rr,
                indices: Sr,
                options: Zr
              }, Er)
            }))
          }))
        }
        if (this._modulePromise) {
          return iZ((await this._modulePromise).module, rr, Sr, Zr)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(rr, Sr) {
        if (0 == rr.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        rr instanceof yZ.c && rr.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === Sr?.method && (Lr.c.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), Sr.method = "MESH_SEQUENTIAL_ENCODING");
        const Qr = function(rr) {
            let Sr = rr.yar(void 0, !0);
            return !Sr || Sr instanceof Uint32Array || Sr instanceof Uint16Array || (Sr = ((0, PQ.c)(Sr, Sr.length) ? Uint32Array : Uint16Array).from(Sr)), Sr
          }(rr),
          Zr = function(rr, Sr) {
            const Qr = [];
            for (const Zr of rr.getVerticesDataKinds()) {
              if (Sr?.includes(Zr)) {
                if (Zr === kr.j.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Wr = rr.getVertexBuffer(Zr),
                ar = Wr.getSize(),
                jr = (0, PQ.n)(Wr.getData(), ar, Wr.type, Wr.byteOffset, Wr.byteStride, rr.getTotalVertices(), !0);
              Qr.push({
                kind: Zr,
                dracoName: oZ(Zr),
                size: ar,
                data: jr
              })
            }
            return Qr
          }(rr, Sr?.excludedAttributes);
        return await this._encodeAsync(Zr, Qr, Sr)
      }
    }
    JZ.DefaultConfiguration = {
      wasmUrl: `${TS.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${TS.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${TS.h._DefaultCdnUrl}/draco_encoder.js`
    }, JZ._Default = null;
    const DZ = "KHR_draco_mesh_compression";
    class dZ {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(rr) {
        this.name = DZ, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === rr.options.meshCompressionMethod && JZ.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(rr, Sr, Qr) {
        if (!this.enabled) return;
        if (4 !== rr.mode && 5 !== rr.mode) return void Lr.c.Warn("Cannot compress primitive with mode " + rr.mode + ".");
        const Zr = [],
          Wr = [];
        let ar = null;
        if (void 0 !== rr.indices) {
          const jr = Qr[rr.indices],
            Ir = Sr.getBufferView(jr);
          ar = Sr.getData(Ir).slice(), Zr.push(Ir), Wr.push(jr)
        }
        const jr = [];
        for (const [pr, xr] of Object.entries(rr.attributes)) {
          const rr = Qr[xr],
            ar = Sr.getBufferView(rr),
            fr = VQ(rr.type),
            Er = (0, PQ.n)(Sr.getData(ar), fr, rr.componentType, rr.byteOffset || 0, ar.byteStride || (0, PQ.k)(rr.componentType) * fr, rr.count, !0);
          jr.push({
            kind: pr,
            dracoName: (Ir = pr, "POSITION" === Ir ? "POSITION" : "NORMAL" === Ir ? "NORMAL" : Ir.startsWith("COLOR") ? "COLOR" : Ir.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: VQ(rr.type),
            data: Er
          }), Zr.push(ar), Wr.push(rr)
        }
        var Ir;
        const fr = {
            method: rr.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Er = JZ.Default._encodeAsync(jr, ar, fr).then((Qr => {
            const ar = {
                bufferView: -1,
                attributes: Qr.attributeIds
              },
              jr = Sr.createBufferView(Qr.data);
            Sr.setBufferView(ar, jr);
            for (const rr of Zr) this._bufferViewsUsed.add(rr);
            for (const rr of Wr) this._accessorsUsed.add(rr);
            rr.extensions || (rr.extensions = {}), rr.extensions[DZ] = ar
          })).catch((rr => {
            Lr.c.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + rr.message)
          }));
        this._encodePromises.push(Er), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(rr) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((Sr => {
          rr.getPropertiesWithBufferView(Sr).every((rr => this._accessorsUsed.has(rr))) && rr.removeBufferView(Sr)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let sZ = !1;

    function uZ() {
      sZ || (sZ = !0, RZ.RegisterExtension(DZ, (rr => new dZ(rr))))
    }
    uZ();
    var rW = Qr(54104);
    const SW = "KHR_lights_punctual",
      QW = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      ZW = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      WW = Gr.u.Backward();
    class aW {
      constructor(rr) {
        this.name = SW, this.enabled = !0, this.required = !1, this._exporter = rr
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[SW] = this._lights
      }
      async postExportNodeAsync(rr, Sr, Qr, Zr, Wr) {
        return await new Promise((ar => {
          if (!(Qr instanceof pZ.c)) return void ar(Sr);
          const jr = Qr.getTypeID() == pZ.c.LIGHTTYPEID_POINTLIGHT ? "point" : Qr.getTypeID() == pZ.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : Qr.getTypeID() == pZ.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!jr || !(Qr instanceof rW.c)) return Lr.c.Warn(`${rr}: Light ${Qr.name} is not supported in ${SW}`), void ar(Sr);
          if (Qr.falloffType !== pZ.c.FALLOFF_GLTF && Lr.c.Warn(`${rr}: Light falloff for ${Qr.name} does not match the ${SW} specification!`), !Qr.position.ffr(0, 0, 0)) {
            const rr = Gr.n.kU[0].iH(Qr.position);
            Wr && cQ(rr), Sr.translation = rr.OWr()
          }
          if ("point" !== jr) {
            const rr = Qr.direction.normalizeToRef(Gr.n.kU[0]);
            Wr && cQ(rr);
            const Zr = Gr.h.FromUnitVectorsToRef(WW, rr, Gr.n.Quaternion[0]);
            Gr.h.IsIdentity(Zr) || (Sr.rotation = Zr.OWr())
          }
          const Ir = {
            type: jr,
            name: Qr.name,
            color: Qr.diffuse.OWr(),
            intensity: Qr.intensity,
            range: Qr.range
          };
          if (dQ(Ir, QW), "spot" === jr) {
            const rr = Qr;
            Ir.spot = {
              innerConeAngle: rr.innerAngle / 2,
              outerConeAngle: rr.angle / 2
            }, dQ(Ir.spot, ZW)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Ir);
          const fr = {
              light: this._lights.lights.length - 1
            },
            Er = Qr.parent;
          if (Er && JQ(Qr, Er)) {
            const rr = Zr.get(Er);
            if (rr) {
              const Qr = this._exporter._nodes[rr];
              return bQ(Sr, Qr), Qr.extensions || (Qr.extensions = {}), Qr.extensions[SW] = fr, void ar(null)
            }
          }
          Sr.extensions || (Sr.extensions = {}), Sr.extensions[SW] = fr, ar(Sr)
        }))
      }
    }
    let jW = !1;

    function IW() {
      jW || (jW = !0, RZ.RegisterExtension(SW, (rr => new aW(rr))))
    }
    IW();
    const fW = "KHR_interactivity";
    class EW {
      constructor(rr) {
        this._exporter = rr, this.name = fW, this.enabled = !!rr.options.khrInteractivity, this.required = rr.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var rr, Sr, Qr;
        const Zr = this._exporter.options.khrInteractivity;
        if (!Zr) return;
        const Wr = Zr.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: rr => this._exporter._getNodeIndex(rr),
          getAnimationIndex: rr => this._exporter._getAnimationIndex(rr),
          getCameraIndex: rr => this._exporter._getCameraIndex(rr),
          getMaterialIndex: rr => this._exporter._getMaterialIndex(rr),
          getRootIndex: (rr, Sr) => this._exporter._getRootIndex(rr, Sr),
          setNodeExtension: (rr, Sr, Qr) => this._exporter._setNodeExtension(rr, Sr, Qr)
        });
        this._exporter._glTF.extensions[fW] = Wr;
        for (const ar of Zr.additionalExtensionsUsed)(rr = this._exporter._glTF).extensionsUsed || (rr.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(ar) && this._exporter._glTF.extensionsUsed.push(ar);
        for (const ar of Zr.additionalExtensionsRequired)(Sr = this._exporter._glTF).extensionsUsed || (Sr.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(ar) && this._exporter._glTF.extensionsUsed.push(ar), (Qr = this._exporter._glTF).extensionsRequired || (Qr.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(ar) && this._exporter._glTF.extensionsRequired.push(ar)
      }
    }
    let pW = !1;

    function xW() {
      pW || (pW = !0, RZ.RegisterExtension(fW, (rr => new EW(rr)), 200))
    }
    xW();
    const mW = "EXT_lights_area",
      NW = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      UW = {
        aspect: 1
      },
      tW = Gr.u.Backward();
    class hW {
      constructor(rr) {
        this.name = mW, this.enabled = !0, this.required = !1, this._exporter = rr
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[mW] = this._lights
      }
      async postExportNodeAsync(rr, Sr, Qr, Zr, Wr) {
        return await new Promise((ar => {
          if (!(Qr instanceof pZ.c)) return void ar(Sr);
          const jr = Qr.getTypeID() == pZ.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!jr) return Lr.c.Warn(`${rr}: Light ${Qr.name} is not supported in ${mW}`), void ar(Sr);
          const Ir = Qr;
          if (Ir.falloffType !== pZ.c.FALLOFF_GLTF && Lr.c.Warn(`${rr}: Light falloff for ${Qr.name} does not match the ${mW} specification!`), !Ir.position.ffr(0, 0, 0)) {
            const rr = Gr.n.kU[0].iH(Ir.position);
            Wr && cQ(rr), Sr.translation = rr.OWr()
          }
          const fr = Gr.u.Forward();
          Wr && cQ(fr);
          const Er = Gr.h.FromUnitVectorsToRef(tW, fr, Gr.n.Quaternion[0]);
          Gr.h.IsIdentity(Er) || (Sr.rotation = Er.OWr());
          const pr = {
            type: jr,
            name: Ir.name,
            color: Ir.diffuse.OWr(),
            intensity: Ir.intensity,
            size: Ir.height,
            rect: {
              aspect: Ir.width / Ir.height
            }
          };
          dQ(pr, NW), pr.rect && dQ(pr.rect, UW), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(pr);
          const xr = {
              light: this._lights.lights.length - 1
            },
            mr = Qr.parent;
          if (mr && JQ(Ir, mr)) {
            const rr = Zr.get(mr);
            if (rr) {
              const Qr = this._exporter._nodes[rr];
              return bQ(Sr, Qr), Qr.extensions || (Qr.extensions = {}), Qr.extensions[mW] = xr, void ar(null)
            }
          }
          Sr.extensions || (Sr.extensions = {}), Sr.extensions[mW] = xr, ar(Sr)
        }))
      }
    }
    let zW = !1;

    function YW() {
      zW || (zW = !0, RZ.RegisterExtension(mW, (rr => new hW(rr))))
    }
    YW();
    const nW = "KHR_materials_anisotropy";
    class eW {
      constructor(rr) {
        this.name = nW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = rr
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        const Zr = [];
        if (Qr instanceof yS) {
          if (Qr.anisotropy.isEnabled && !Qr.anisotropy.legacy) return Qr.anisotropy.texture && Zr.push(Qr.anisotropy.texture), Zr
        } else if (Qr instanceof sS && Qr.specularRoughnessAnisotropy > 0) {
          const rr = function(rr) {
            const Sr = rr.specularRoughnessAnisotropyTexture,
              Qr = rr.geometryTangentTexture;
            return `${Sr&&Sr.getInternalTexture()?Sr.getInternalTexture().uniqueId:"NoStrength"}_${Qr&&Qr.getInternalTexture()?Qr.getInternalTexture().uniqueId:"NoTangent"}`
          }(Qr);
          if (this._anisoTexturesMap[rr]) Zr.push(this._anisoTexturesMap[rr]);
          else {
            const Sr = await async function(rr) {
              const Sr = rr.eC(),
                Qr = rr.specularRoughnessAnisotropyTexture,
                Zr = rr.geometryTangentTexture;
              return Qr || Zr ? await jQ("AnisotropyTexture", EQ(Zr ? IQ(Zr, 0) : fQ(1), Zr ? IQ(Zr, 1) : fQ(0), Qr ? IQ(Qr, 0) : fQ(1)), Sr) : null
            }(Qr);
            Sr && (Zr.push(Sr), this._anisoTexturesMap[rr] = Sr)
          }
          return Zr
        }
        return []
      }
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((rr => {
          var Zr;
          if (Qr instanceof yS) {
            if (!Qr.anisotropy.isEnabled || Qr.anisotropy.legacy) return void rr(Sr);
            this._wasUsed = !0, Sr.extensions = Sr.extensions || {};
            const Zr = this._exporter._materialExporter.getTextureInfo(Qr.anisotropy.texture),
              Wr = {
                anisotropyStrength: Qr.anisotropy.intensity,
                anisotropyRotation: Qr.anisotropy.angle,
                anisotropyTexture: Zr ?? void 0
              };
            null !== Wr.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions[nW] = Wr
          } else if (Qr instanceof sS && Qr.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, Sr.extensions = Sr.extensions || {};
            let Wr = Qr.specularRoughnessTexture;
            Qr._useRoughnessFromMetallicTextureGreen && (Wr = Qr.baseMetalnessTexture);
            const ar = this._anisoTexturesMap[Qr.id];
            if (!Wr && !ar) {
              let Zr = Qr.specularRoughness,
                Wr = Qr.specularRoughnessAnisotropy;
              if (!Qr._useGltfStyleAnisotropy) {
                const rr = function(rr, Sr) {
                  const Qr = rr * rr,
                    Zr = Qr * Math.sqrt(2 / (1 + (1 - Sr) * (1 - Sr))),
                    Wr = (1 - Sr) * Zr;
                  return {
                    newBaseRoughness: Math.sqrt(Wr),
                    newAnisotropyStrength: Math.min(Math.sqrt((Zr - Qr) / Math.max(1 - Qr, 1e-4)), 1)
                  }
                }(Qr.specularRoughness, Qr.specularRoughnessAnisotropy);
                Zr = rr.newBaseRoughness, Wr = rr.newAnisotropyStrength
              }
              Sr.pbrMetallicRoughness && (Sr.pbrMetallicRoughness.roughnessFactor = Zr);
              const ar = {
                anisotropyStrength: Wr,
                anisotropyRotation: Qr.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return Sr.extensions[nW] = ar, rr(Sr)
            }
            const jr = ar ? this._exporter._materialExporter.getTextureInfo(ar) : null,
              Ir = {
                anisotropyStrength: Qr.specularRoughnessAnisotropy,
                anisotropyRotation: Qr.geometryTangentAngle,
                anisotropyTexture: jr || void 0,
                extensions: {}
              };
            Qr._useGltfStyleAnisotropy || (Sr.extensions.KHR_materials_openpbr = {}, (Zr = this._exporter._glTF).extensionsUsed || (Zr.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions[nW] = Ir
          }
          rr(Sr)
        }))
      }
    }
    let KW = !1;

    function yW() {
      KW || (KW = !0, RZ.RegisterExtension(nW, (rr => new eW(rr))))
    }
    yW();
    const BW = "KHR_materials_clearcoat";

    function TW(rr, Sr) {
      const Qr = new Xr.f(Sr.name, Sr.eC());
      return Qr._texture = rr, Qr.coordinatesIndex = Sr.coordinatesIndex, Sr instanceof Xr.f && (Qr.uOffset = Sr.uOffset, Qr.vOffset = Sr.vOffset, Qr.uScale = Sr.uScale, Qr.vScale = Sr.vScale, Qr.wAng = Sr.wAng), Qr.wrapU = Sr.wrapU, Qr.wrapV = Sr.wrapV, Qr
    }
    class vW {
      constructor(rr) {
        this.name = BW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = rr
      }
      dispose() {
        for (const rr of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[rr].dispose()
        }
        this._mergedTexturesMap = {};
        for (const rr of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[rr].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        const Zr = [];
        if (Qr instanceof yS) {
          if (Qr.clearCoat.isEnabled) return Qr.clearCoat.texture && Zr.push(Qr.clearCoat.texture), !Qr.clearCoat.useRoughnessFromMainTexture && Qr.clearCoat.textureRoughness && Zr.push(Qr.clearCoat.textureRoughness), Qr.clearCoat.bumpTexture && Zr.push(Qr.clearCoat.bumpTexture), Zr
        } else if (Qr instanceof sS && Qr.coatWeight > 0) {
          let rr = !1;
          if (Qr.coatWeightTexture ? Qr.coatRoughnessTexture ? Qr._useCoatRoughnessFromGreenChannel && Qr.coatWeightTexture.getInternalTexture() === Qr.coatRoughnessTexture.getInternalTexture() ? (Zr.push(Qr.coatWeightTexture), Zr.push(Qr.coatRoughnessTexture)) : rr = !0 : Zr.push(Qr.coatWeightTexture) : Qr.coatRoughnessTexture && (Qr._useCoatRoughnessFromGreenChannel ? Zr.push(Qr.coatRoughnessTexture) : rr = !0), rr) {
            const rr = function(rr) {
              const Sr = rr.coatWeightTexture,
                Qr = Sr && Sr.getInternalTexture() ? Sr.getInternalTexture().uniqueId : "NoCoat",
                Zr = rr.coatRoughnessTexture;
              return `${Qr}_${Zr&&Zr.getInternalTexture()?Zr.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Qr);
            if (!this._cachedInternalTexturesMap[rr]) {
              const Sr = await async function(rr) {
                const Sr = rr.eC(),
                  Qr = rr.coatWeightTexture,
                  Zr = rr.coatRoughnessTexture;
                return Qr || Zr ? (await jQ("CoatTexture", EQ(Qr ? IQ(Qr, 0) : fQ(1), Zr ? IQ(Zr, rr._useCoatRoughnessFromGreenChannel ? 1 : 0) : fQ(1)), Sr)).getInternalTexture() : null
              }(Qr);
              Sr && (this._cachedInternalTexturesMap[rr] = Sr)
            }
            this._cachedInternalTexturesMap[rr] && (Qr.coatWeightTexture && (this._mergedTexturesMap[Qr.coatWeightTexture.uniqueId] = TW(this._cachedInternalTexturesMap[rr], Qr.coatWeightTexture), Zr.push(this._mergedTexturesMap[Qr.coatWeightTexture.uniqueId])), Qr.coatRoughnessTexture && (this._mergedTexturesMap[Qr.coatRoughnessTexture.uniqueId] = TW(this._cachedInternalTexturesMap[rr], Qr.coatRoughnessTexture), Zr.push(this._mergedTexturesMap[Qr.coatRoughnessTexture.uniqueId])))
          }
          return Qr.geometryCoatNormalTexture && Zr.push(Qr.geometryCoatNormalTexture), Zr
        }
        return []
      }
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((rr => {
          if (Qr instanceof yS) {
            if (!Qr.clearCoat.isEnabled) return void rr(Sr);
            this._wasUsed = !0, Sr.extensions = Sr.extensions || {};
            const Zr = this._exporter._materialExporter.getTextureInfo(Qr.clearCoat.texture);
            let Wr;
            Wr = Qr.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Qr.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Qr.clearCoat.textureRoughness), Qr.clearCoat.isTintEnabled && TS.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Qr.name}`), Qr.clearCoat.remapF0OnInterfaceChange && TS.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${Qr.name}`);
            const ar = this._exporter._materialExporter.getTextureInfo(Qr.clearCoat.bumpTexture),
              jr = {
                clearcoatFactor: Qr.clearCoat.intensity,
                clearcoatTexture: Zr ?? void 0,
                clearcoatRoughnessFactor: Qr.clearCoat.roughness,
                clearcoatRoughnessTexture: Wr ?? void 0,
                clearcoatNormalTexture: ar ?? void 0
              };
            null === jr.clearcoatTexture && null === jr.clearcoatRoughnessTexture && null === jr.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions[BW] = jr
          } else if (Qr instanceof sS) {
            if (0 == Qr.coatWeight) return void rr(Sr);
            let Zr, Wr, ar, jr;
            this._wasUsed = !0, Sr.extensions = Sr.extensions || {}, Qr.coatWeightTexture && (Zr = this._mergedTexturesMap[Qr.coatWeightTexture.uniqueId], Wr = this._exporter._materialExporter.getTextureInfo(Zr)), Qr.coatRoughnessTexture && (ar = this._mergedTexturesMap[Qr.coatRoughnessTexture.uniqueId], jr = this._exporter._materialExporter.getTextureInfo(ar)), Qr.coatColorTexture && TS.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Qr.name}`);
            const Ir = this._exporter._materialExporter.getTextureInfo(Qr.geometryCoatNormalTexture),
              fr = {
                clearcoatFactor: Qr.coatWeight,
                clearcoatTexture: Wr ?? void 0,
                clearcoatRoughnessFactor: Qr.coatRoughness,
                clearcoatRoughnessTexture: jr ?? void 0,
                clearcoatNormalTexture: Ir ?? void 0
              };
            null === fr.clearcoatTexture && null === fr.clearcoatRoughnessTexture && null === fr.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions[BW] = fr
          }
          rr(Sr)
        }))
      }
    }
    let OW = !1;

    function LW() {
      OW || (OW = !0, RZ.RegisterExtension(BW, (rr => new vW(rr))))
    }
    LW();
    const lW = "KHR_materials_coat";

    function XW(rr) {
      const Sr = rr.coatRoughnessAnisotropyTexture,
        Qr = rr.geometryCoatTangentTexture;
      return `${Sr&&Sr.getInternalTexture()?Sr.getInternalTexture().uniqueId:"NoStrength"}_${Qr&&Qr.getInternalTexture()?Qr.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function PW(rr, Sr) {
      const Qr = new Xr.f(Sr.name, Sr.eC());
      return Qr._texture = rr, Qr.coordinatesIndex = Sr.coordinatesIndex, Sr instanceof Xr.f && (Qr.uOffset = Sr.uOffset, Qr.vOffset = Sr.vOffset, Qr.uScale = Sr.uScale, Qr.vScale = Sr.vScale, Qr.wAng = Sr.wAng), Qr.wrapU = Sr.wrapU, Qr.wrapV = Sr.wrapV, Qr
    }
    class HW {
      constructor(rr) {
        this.name = lW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = rr
      }
      dispose() {
        for (const rr of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[rr].dispose()
        }
        this._mergedTexturesMap = {};
        for (const rr of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[rr].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        const Zr = [];
        if (Qr instanceof yS) {
          if (Qr.clearCoat.isEnabled) return Qr.clearCoat.texture && Zr.push(Qr.clearCoat.texture), !Qr.clearCoat.useRoughnessFromMainTexture && Qr.clearCoat.textureRoughness && Zr.push(Qr.clearCoat.textureRoughness), Qr.clearCoat.bumpTexture && Zr.push(Qr.clearCoat.bumpTexture), Qr.clearCoat.tintTexture && Zr.push(Qr.clearCoat.tintTexture), Zr
        } else if (Qr instanceof sS && Qr.coatWeight > 0) {
          let rr = !1;
          if (Qr.coatWeightTexture ? Qr.coatRoughnessTexture ? Qr._useCoatRoughnessFromGreenChannel && Qr.coatWeightTexture.getInternalTexture() === Qr.coatRoughnessTexture.getInternalTexture() ? (Zr.push(Qr.coatWeightTexture), Zr.push(Qr.coatRoughnessTexture)) : rr = !0 : Zr.push(Qr.coatWeightTexture) : Qr.coatRoughnessTexture && (Qr._useCoatRoughnessFromGreenChannel ? Zr.push(Qr.coatRoughnessTexture) : rr = !0), rr) {
            const rr = function(rr) {
              const Sr = rr.coatWeightTexture,
                Qr = Sr && Sr.getInternalTexture() ? Sr.getInternalTexture().uniqueId : "NoCoat",
                Zr = rr.coatRoughnessTexture;
              return `${Qr}_${Zr&&Zr.getInternalTexture()?Zr.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Qr);
            if (!this._cachedInternalTexturesMap[rr]) {
              const Sr = await async function(rr) {
                const Sr = rr.eC(),
                  Qr = rr.coatWeightTexture,
                  Zr = rr.coatRoughnessTexture;
                return Qr || Zr ? (await jQ("CoatTexture", EQ(Qr ? IQ(Qr, 0) : fQ(1), Zr ? IQ(Zr, rr._useCoatRoughnessFromGreenChannel ? 1 : 0) : fQ(1)), Sr)).getInternalTexture() : null
              }(Qr);
              Sr && (this._cachedInternalTexturesMap[rr] = Sr)
            }
            this._cachedInternalTexturesMap[rr] && (Qr.coatWeightTexture && (this._mergedTexturesMap[Qr.coatWeightTexture.uniqueId] = PW(this._cachedInternalTexturesMap[rr], Qr.coatWeightTexture), Zr.push(this._mergedTexturesMap[Qr.coatWeightTexture.uniqueId])), Qr.coatRoughnessTexture && (this._mergedTexturesMap[Qr.coatRoughnessTexture.uniqueId] = PW(this._cachedInternalTexturesMap[rr], Qr.coatRoughnessTexture), Zr.push(this._mergedTexturesMap[Qr.coatRoughnessTexture.uniqueId])))
          }
          if (Qr.geometryCoatNormalTexture && Zr.push(Qr.geometryCoatNormalTexture), Qr.coatColorTexture && Zr.push(Qr.coatColorTexture), Qr.coatRoughnessAnisotropy > 0) {
            const rr = XW(Qr);
            if (this._mergedTexturesMap[rr]) Zr.push(this._mergedTexturesMap[rr]);
            else {
              const Sr = await async function(rr) {
                const Sr = rr.eC(),
                  Qr = rr.coatRoughnessAnisotropyTexture,
                  Zr = rr.geometryCoatTangentTexture;
                return Qr || Zr ? await jQ("AnisotropyTexture", EQ(Zr ? IQ(Zr, 0) : fQ(1), Zr ? IQ(Zr, 1) : fQ(0), Qr ? IQ(Qr, 0) : fQ(1)), Sr) : null
              }(Qr);
              Sr && (Zr.push(Sr), this._mergedTexturesMap[rr] = Sr)
            }
            return Zr
          }
          return Zr
        }
        return []
      }
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((rr => {
          var Zr;
          if (Qr instanceof yS) {
            if (!Qr.clearCoat.isEnabled) return void rr(Sr);
            this._wasUsed = !0, Sr.extensions = Sr.extensions || {};
            const Zr = this._exporter._materialExporter.getTextureInfo(Qr.clearCoat.texture);
            let Wr, ar;
            Wr = Qr.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Qr.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Qr.clearCoat.textureRoughness), Qr.clearCoat.isTintEnabled && (ar = this._exporter._materialExporter.getTextureInfo(Qr.clearCoat.tintTexture));
            const jr = this._exporter._materialExporter.getTextureInfo(Qr.clearCoat.bumpTexture),
              Ir = Qr.clearCoat.indexOfRefraction,
              fr = {
                coatFactor: Qr.clearCoat.intensity,
                coatTexture: Zr ?? void 0,
                coatRoughnessFactor: Qr.clearCoat.roughness,
                coatRoughnessTexture: Wr ?? void 0,
                coatNormalTexture: jr ?? void 0,
                coatColorFactor: Qr.clearCoat.tintColor.OWr(),
                coatColorTexture: ar ?? void 0,
                coatIor: 1.5 !== Ir ? Ir : void 0
              };
            null === fr.coatTexture && null === fr.coatRoughnessTexture && null === fr.coatRoughnessTexture && null === fr.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions[lW] = fr
          } else if (Qr instanceof sS) {
            if (0 == Qr.coatWeight) return void rr(Sr);
            let Wr, ar, jr, Ir;
            this._wasUsed = !0, Sr.extensions = Sr.extensions || {}, Qr.coatWeightTexture && (Wr = this._mergedTexturesMap[Qr.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[Qr.coatWeightTexture.uniqueId] : Qr.coatWeightTexture, ar = this._exporter._materialExporter.getTextureInfo(Wr)), Qr.coatRoughnessTexture && (jr = this._mergedTexturesMap[Qr.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Qr.coatRoughnessTexture.uniqueId] : Qr.coatRoughnessTexture, Ir = this._exporter._materialExporter.getTextureInfo(jr));
            const fr = this._exporter._materialExporter.getTextureInfo(Qr.geometryCoatNormalTexture),
              Er = this._exporter._materialExporter.getTextureInfo(Qr.coatColorTexture),
              pr = Qr.coatIor,
              xr = Qr.coatDarkening,
              mr = Qr.coatRoughnessTexture,
              Nr = XW(Qr),
              Ur = this._mergedTexturesMap[Nr];
            let tr, hr = 0,
              zr = 0;
            if (Qr.coatRoughnessAnisotropy > 0) {
              if (mr || Ur) {
                const rr = Ur ? this._exporter._materialExporter.getTextureInfo(Ur) : null;
                hr = Qr.coatRoughnessAnisotropy, zr = Qr.geometryCoatTangentAngle, tr = rr || void 0
              } else {
                let rr = Qr.coatRoughness,
                  Zr = Qr.coatRoughnessAnisotropy;
                if (!Qr._useGltfStyleAnisotropy) {
                  const Sr = function(rr, Sr) {
                    const Qr = rr * rr,
                      Zr = Qr * Math.sqrt(2 / (1 + (1 - Sr) * (1 - Sr))),
                      Wr = (1 - Sr) * Zr;
                    return {
                      newBaseRoughness: Math.sqrt(Wr),
                      newAnisotropyStrength: Math.min(Math.sqrt((Zr - Qr) / Math.max(1 - Qr, 1e-4)), 1)
                    }
                  }(Qr.coatRoughness, Qr.coatRoughnessAnisotropy);
                  rr = Sr.newBaseRoughness, Zr = Sr.newAnisotropyStrength
                }
                Sr.pbrMetallicRoughness && (Sr.pbrMetallicRoughness.roughnessFactor = rr), hr = Zr, zr = Qr.geometryCoatTangentAngle + .5 * Math.PI, tr = void 0
              }
              Qr._useGltfStyleAnisotropy || (Sr.extensions.KHR_materials_openpbr = {}, (Zr = this._exporter._glTF).extensionsUsed || (Zr.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const Yr = {
              coatFactor: Qr.coatWeight,
              coatTexture: ar ?? void 0,
              coatRoughnessFactor: Qr.coatRoughness,
              coatRoughnessTexture: Ir ?? void 0,
              coatNormalTexture: fr ?? void 0,
              coatColorFactor: Qr.coatColor.OWr(),
              coatColorTexture: Er ?? void 0,
              coatIor: 1.5 !== pr ? pr : void 0,
              coatDarkeningFactor: 1 !== xr ? xr : void 0,
              coatAnisotropyRotation: zr,
              coatAnisotropyStrength: hr,
              coatAnisotropyTexture: tr
            };
            null === Yr.coatTexture && null === Yr.coatRoughnessTexture && null === Yr.coatRoughnessTexture && null === Yr.coatAnisotropyTexture && null === Yr.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions[lW] = Yr
          }
          rr(Sr)
        }))
      }
    }
    let qW = !1;

    function RW() {
      qW || (qW = !0, RZ.RegisterExtension(lW, (rr => new HW(rr))))
    }
    RW();
    let gW = (() => {
      var rr, Sr, Qr, Zr, Wr, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, Lr, lr, Xr, Pr, Hr, qr, gr, Cr, Mr, Gr, kr, Ar, Vr, ir, wr, cr, or, br, Jr, Dr, dr, sr, ur, rS, SS, QS, ZS, WS, aS, jS, IS, fS, ES, pS, xS, mS, NS, US, tS, hS, zS, YS, nS;
      let eS, KS, TS, vS, OS, LS, lS, XS, PS, HS, qS, RS, gS, CS, MS, GS, kS, AS, VS, iS, wS, cS, FS, oS, bS, JS, DS, dS, sS, uS, rQ, SQ, QQ, ZQ, WQ, aQ, jQ, IQ, fQ, EQ, pQ, xQ, mQ, NQ, UQ, tQ, hQ, zQ, YQ, nQ, eQ, KQ, yQ, BQ, TQ, vQ, OQ, LQ, lQ, XQ, PQ, HQ, qQ, RQ, gQ, CQ, MQ, GQ, kQ = yS,
        AQ = [],
        VQ = [],
        iQ = [],
        wQ = [],
        cQ = [],
        FQ = [],
        oQ = [],
        bQ = [],
        JQ = [],
        DQ = [],
        dQ = [],
        sQ = [],
        uQ = [],
        rZ = [],
        SZ = [],
        QZ = [],
        ZZ = [],
        WZ = [],
        aZ = [],
        jZ = [],
        IZ = [],
        fZ = [],
        EZ = [],
        pZ = [],
        xZ = [],
        mZ = [],
        NZ = [],
        UZ = [],
        tZ = [],
        hZ = [],
        zZ = [],
        YZ = [],
        nZ = [],
        eZ = [],
        KZ = [],
        yZ = [],
        BZ = [],
        TZ = [],
        vZ = [],
        OZ = [],
        LZ = [],
        lZ = [],
        XZ = [],
        PZ = [],
        HZ = [],
        qZ = [],
        RZ = [],
        gZ = [],
        CZ = [],
        MZ = [],
        GZ = [],
        kZ = [],
        AZ = [],
        VZ = [],
        iZ = [],
        wZ = [],
        cZ = [],
        FZ = [],
        oZ = [],
        bZ = [],
        JZ = [],
        DZ = [],
        dZ = [],
        sZ = [],
        uZ = [],
        rW = [],
        SW = [],
        QW = [],
        ZW = [],
        WW = [],
        aW = [],
        jW = [],
        IW = [],
        fW = [],
        EW = [],
        pW = [],
        xW = [],
        mW = [],
        NW = [],
        UW = [],
        tW = [],
        hW = [],
        zW = [],
        YW = [],
        nW = [],
        eW = [],
        KW = [],
        yW = [],
        BW = [],
        TW = [],
        vW = [],
        OW = [],
        LW = [],
        lW = [],
        XW = [],
        PW = [],
        HW = [],
        qW = [],
        RW = [],
        gW = [],
        CW = [],
        MW = [],
        GW = [],
        kW = [],
        AW = [],
        VW = [],
        iW = [],
        wW = [],
        cW = [],
        FW = [],
        oW = [],
        bW = [],
        JW = [],
        DW = [],
        dW = [],
        sW = [],
        uW = [],
        ra = [],
        Sa = [],
        Qa = [],
        Za = [],
        Wa = [],
        aa = [],
        ja = [],
        Ia = [],
        fa = [],
        Ea = [],
        pa = [],
        xa = [],
        ma = [],
        Na = [],
        Ua = [],
        ta = [];
      return rr = class extends kQ {
        get directIntensity() {
          return (0, vr.e)(this, Sr, "f")
        }
        set directIntensity(rr) {
          (0, vr.i)(this, Sr, rr, "f")
        }
        get emissiveIntensity() {
          return (0, vr.e)(this, Qr, "f")
        }
        set emissiveIntensity(rr) {
          (0, vr.i)(this, Qr, rr, "f")
        }
        get environmentIntensity() {
          return (0, vr.e)(this, Zr, "f")
        }
        set environmentIntensity(rr) {
          (0, vr.i)(this, Zr, rr, "f")
        }
        get specularIntensity() {
          return (0, vr.e)(this, Wr, "f")
        }
        set specularIntensity(rr) {
          (0, vr.i)(this, Wr, rr, "f")
        }
        get disableBumpMap() {
          return (0, vr.e)(this, jr, "f")
        }
        set disableBumpMap(rr) {
          (0, vr.i)(this, jr, rr, "f")
        }
        get albedoTexture() {
          return (0, vr.e)(this, Ir, "f")
        }
        set albedoTexture(rr) {
          (0, vr.i)(this, Ir, rr, "f")
        }
        get baseWeightTexture() {
          return (0, vr.e)(this, fr, "f")
        }
        set baseWeightTexture(rr) {
          (0, vr.i)(this, fr, rr, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, vr.e)(this, Er, "f")
        }
        set baseDiffuseRoughnessTexture(rr) {
          (0, vr.i)(this, Er, rr, "f")
        }
        get ambientTexture() {
          return (0, vr.e)(this, pr, "f")
        }
        set ambientTexture(rr) {
          (0, vr.i)(this, pr, rr, "f")
        }
        get ambientTextureStrength() {
          return (0, vr.e)(this, xr, "f")
        }
        set ambientTextureStrength(rr) {
          (0, vr.i)(this, xr, rr, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, vr.e)(this, mr, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(rr) {
          (0, vr.i)(this, mr, rr, "f")
        }
        get opacityTexture() {
          return (0, vr.e)(this, Nr, "f")
        }
        set opacityTexture(rr) {
          (0, vr.i)(this, Nr, rr, "f")
        }
        get reflectionTexture() {
          return (0, vr.e)(this, Ur, "f")
        }
        set reflectionTexture(rr) {
          (0, vr.i)(this, Ur, rr, "f")
        }
        get emissiveTexture() {
          return (0, vr.e)(this, tr, "f")
        }
        set emissiveTexture(rr) {
          (0, vr.i)(this, tr, rr, "f")
        }
        get reflectivityTexture() {
          return (0, vr.e)(this, hr, "f")
        }
        set reflectivityTexture(rr) {
          (0, vr.i)(this, hr, rr, "f")
        }
        get metallicTexture() {
          return (0, vr.e)(this, zr, "f")
        }
        set metallicTexture(rr) {
          (0, vr.i)(this, zr, rr, "f")
        }
        get metallic() {
          return (0, vr.e)(this, Yr, "f")
        }
        set metallic(rr) {
          (0, vr.i)(this, Yr, rr, "f")
        }
        get roughness() {
          return (0, vr.e)(this, nr, "f")
        }
        set roughness(rr) {
          (0, vr.i)(this, nr, rr, "f")
        }
        get metallicF0Factor() {
          return (0, vr.e)(this, er, "f")
        }
        set metallicF0Factor(rr) {
          (0, vr.i)(this, er, rr, "f")
        }
        get metallicReflectanceColor() {
          return (0, vr.e)(this, Kr, "f")
        }
        set metallicReflectanceColor(rr) {
          (0, vr.i)(this, Kr, rr, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, vr.e)(this, yr, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(rr) {
          (0, vr.i)(this, yr, rr, "f")
        }
        get metallicReflectanceTexture() {
          return (0, vr.e)(this, Br, "f")
        }
        set metallicReflectanceTexture(rr) {
          (0, vr.i)(this, Br, rr, "f")
        }
        get reflectanceTexture() {
          return (0, vr.e)(this, Tr, "f")
        }
        set reflectanceTexture(rr) {
          (0, vr.i)(this, Tr, rr, "f")
        }
        get microSurfaceTexture() {
          return (0, vr.e)(this, Lr, "f")
        }
        set microSurfaceTexture(rr) {
          (0, vr.i)(this, Lr, rr, "f")
        }
        get bumpTexture() {
          return (0, vr.e)(this, lr, "f")
        }
        set bumpTexture(rr) {
          (0, vr.i)(this, lr, rr, "f")
        }
        get lightmapTexture() {
          return (0, vr.e)(this, Xr, "f")
        }
        set lightmapTexture(rr) {
          (0, vr.i)(this, Xr, rr, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(rr) {
          this.subSurface.refractionTexture = rr, rr ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, vr.e)(this, Pr, "f")
        }
        set ambientColor(rr) {
          (0, vr.i)(this, Pr, rr, "f")
        }
        get albedoColor() {
          return (0, vr.e)(this, Hr, "f")
        }
        set albedoColor(rr) {
          (0, vr.i)(this, Hr, rr, "f")
        }
        get baseWeight() {
          return (0, vr.e)(this, qr, "f")
        }
        set baseWeight(rr) {
          (0, vr.i)(this, qr, rr, "f")
        }
        get baseDiffuseRoughness() {
          return (0, vr.e)(this, gr, "f")
        }
        set baseDiffuseRoughness(rr) {
          (0, vr.i)(this, gr, rr, "f")
        }
        get reflectivityColor() {
          return (0, vr.e)(this, Cr, "f")
        }
        set reflectivityColor(rr) {
          (0, vr.i)(this, Cr, rr, "f")
        }
        get reflectionColor() {
          return (0, vr.e)(this, Mr, "f")
        }
        set reflectionColor(rr) {
          (0, vr.i)(this, Mr, rr, "f")
        }
        get emissiveColor() {
          return (0, vr.e)(this, Gr, "f")
        }
        set emissiveColor(rr) {
          (0, vr.i)(this, Gr, rr, "f")
        }
        get microSurface() {
          return (0, vr.e)(this, kr, "f")
        }
        set microSurface(rr) {
          (0, vr.i)(this, kr, rr, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(rr) {
          this.subSurface.indexOfRefraction = rr
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(rr) {
          this.subSurface.invertRefractionY = rr
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(rr) {
          this.subSurface.linkRefractionWithTransparency = rr, rr && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, vr.e)(this, Ar, "f")
        }
        set useLightmapAsShadowmap(rr) {
          (0, vr.i)(this, Ar, rr, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, vr.e)(this, Vr, "f")
        }
        set useAlphaFromAlbedoTexture(rr) {
          (0, vr.i)(this, Vr, rr, "f")
        }
        get forceAlphaTest() {
          return (0, vr.e)(this, ir, "f")
        }
        set forceAlphaTest(rr) {
          (0, vr.i)(this, ir, rr, "f")
        }
        get alphaCutOff() {
          return (0, vr.e)(this, wr, "f")
        }
        set alphaCutOff(rr) {
          (0, vr.i)(this, wr, rr, "f")
        }
        get useSpecularOverAlpha() {
          return (0, vr.e)(this, cr, "f")
        }
        set useSpecularOverAlpha(rr) {
          (0, vr.i)(this, cr, rr, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, vr.e)(this, or, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(rr) {
          (0, vr.i)(this, or, rr, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, vr.e)(this, br, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(rr) {
          (0, vr.i)(this, br, rr, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, vr.e)(this, Jr, "f")
        }
        set useRoughnessFromMetallicTextureGreen(rr) {
          (0, vr.i)(this, Jr, rr, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, vr.e)(this, Dr, "f")
        }
        set useMetallnessFromMetallicTextureBlue(rr) {
          (0, vr.i)(this, Dr, rr, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, vr.e)(this, dr, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(rr) {
          (0, vr.i)(this, dr, rr, "f")
        }
        get useAmbientInGrayScale() {
          return (0, vr.e)(this, sr, "f")
        }
        set useAmbientInGrayScale(rr) {
          (0, vr.i)(this, sr, rr, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, vr.e)(this, ur, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(rr) {
          (0, vr.i)(this, ur, rr, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === yS.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(rr) {
          rr !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = rr ? yS.LIGHTFALLOFF_PHYSICAL : yS.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === yS.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(rr) {
          rr !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = rr ? yS.LIGHTFALLOFF_GLTF : yS.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, vr.e)(this, rS, "f")
        }
        set useRadianceOverAlpha(rr) {
          (0, vr.i)(this, rS, rr, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, vr.e)(this, SS, "f")
        }
        set useObjectSpaceNormalMap(rr) {
          (0, vr.i)(this, SS, rr, "f")
        }
        get useParallax() {
          return (0, vr.e)(this, QS, "f")
        }
        set useParallax(rr) {
          (0, vr.i)(this, QS, rr, "f")
        }
        get useParallaxOcclusion() {
          return (0, vr.e)(this, ZS, "f")
        }
        set useParallaxOcclusion(rr) {
          (0, vr.i)(this, ZS, rr, "f")
        }
        get parallaxScaleBias() {
          return (0, vr.e)(this, WS, "f")
        }
        set parallaxScaleBias(rr) {
          (0, vr.i)(this, WS, rr, "f")
        }
        get disableLighting() {
          return (0, vr.e)(this, aS, "f")
        }
        set disableLighting(rr) {
          (0, vr.i)(this, aS, rr, "f")
        }
        get forceIrradianceInFragment() {
          return (0, vr.e)(this, jS, "f")
        }
        set forceIrradianceInFragment(rr) {
          (0, vr.i)(this, jS, rr, "f")
        }
        get maxSimultaneousLights() {
          return (0, vr.e)(this, IS, "f")
        }
        set maxSimultaneousLights(rr) {
          (0, vr.i)(this, IS, rr, "f")
        }
        get invertNormalMapX() {
          return (0, vr.e)(this, fS, "f")
        }
        set invertNormalMapX(rr) {
          (0, vr.i)(this, fS, rr, "f")
        }
        get invertNormalMapY() {
          return (0, vr.e)(this, ES, "f")
        }
        set invertNormalMapY(rr) {
          (0, vr.i)(this, ES, rr, "f")
        }
        get twoSidedLighting() {
          return (0, vr.e)(this, pS, "f")
        }
        set twoSidedLighting(rr) {
          (0, vr.i)(this, pS, rr, "f")
        }
        get useAlphaFresnel() {
          return (0, vr.e)(this, xS, "f")
        }
        set useAlphaFresnel(rr) {
          (0, vr.i)(this, xS, rr, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, vr.e)(this, mS, "f")
        }
        set useLinearAlphaFresnel(rr) {
          (0, vr.i)(this, mS, rr, "f")
        }
        get environmentBRDFTexture() {
          return (0, vr.e)(this, NS, "f")
        }
        set environmentBRDFTexture(rr) {
          (0, vr.i)(this, NS, rr, "f")
        }
        get forceNormalForward() {
          return (0, vr.e)(this, US, "f")
        }
        set forceNormalForward(rr) {
          (0, vr.i)(this, US, rr, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, vr.e)(this, tS, "f")
        }
        set enableSpecularAntiAliasing(rr) {
          (0, vr.i)(this, tS, rr, "f")
        }
        get useHorizonOcclusion() {
          return (0, vr.e)(this, hS, "f")
        }
        set useHorizonOcclusion(rr) {
          (0, vr.i)(this, hS, rr, "f")
        }
        get useRadianceOcclusion() {
          return (0, vr.e)(this, zS, "f")
        }
        set useRadianceOcclusion(rr) {
          (0, vr.i)(this, zS, rr, "f")
        }
        get unlit() {
          return (0, vr.e)(this, YS, "f")
        }
        set unlit(rr) {
          (0, vr.i)(this, YS, rr, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, vr.e)(this, nS, "f")
        }
        set applyDecalMapAfterDetailMap(rr) {
          (0, vr.i)(this, nS, rr, "f")
        }
        constructor(ar, Or) {
          super(ar, Or, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), Sr.set(this, ((0, vr.m)(this, AQ), (0, vr.m)(this, VQ, 1))), Qr.set(this, ((0, vr.m)(this, iQ), (0, vr.m)(this, wQ, 1))), Zr.set(this, ((0, vr.m)(this, cQ), (0, vr.m)(this, FQ, 1))), Wr.set(this, ((0, vr.m)(this, oQ), (0, vr.m)(this, bQ, 1))), jr.set(this, ((0, vr.m)(this, JQ), (0, vr.m)(this, DQ, !1))), Ir.set(this, ((0, vr.m)(this, dQ), (0, vr.m)(this, sQ, void 0))), fr.set(this, ((0, vr.m)(this, uQ), (0, vr.m)(this, rZ, void 0))), Er.set(this, ((0, vr.m)(this, SZ), (0, vr.m)(this, QZ, void 0))), pr.set(this, ((0, vr.m)(this, ZZ), (0, vr.m)(this, WZ, void 0))), xr.set(this, ((0, vr.m)(this, aZ), (0, vr.m)(this, jZ, 1))), mr.set(this, ((0, vr.m)(this, IZ), (0, vr.m)(this, fZ, rr.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), Nr.set(this, ((0, vr.m)(this, EZ), (0, vr.m)(this, pZ, void 0))), Ur.set(this, ((0, vr.m)(this, xZ), (0, vr.m)(this, mZ, void 0))), tr.set(this, ((0, vr.m)(this, NZ), (0, vr.m)(this, UZ, void 0))), hr.set(this, ((0, vr.m)(this, tZ), (0, vr.m)(this, hZ, void 0))), zr.set(this, ((0, vr.m)(this, zZ), (0, vr.m)(this, YZ, void 0))), Yr.set(this, ((0, vr.m)(this, nZ), (0, vr.m)(this, eZ, void 0))), nr.set(this, ((0, vr.m)(this, KZ), (0, vr.m)(this, yZ, void 0))), er.set(this, ((0, vr.m)(this, BZ), (0, vr.m)(this, TZ, 1))), Kr.set(this, ((0, vr.m)(this, vZ), (0, vr.m)(this, OZ, Fr.e.White()))), yr.set(this, ((0, vr.m)(this, LZ), (0, vr.m)(this, lZ, !1))), Br.set(this, ((0, vr.m)(this, XZ), (0, vr.m)(this, PZ, void 0))), Tr.set(this, ((0, vr.m)(this, HZ), (0, vr.m)(this, qZ, void 0))), Lr.set(this, ((0, vr.m)(this, RZ), (0, vr.m)(this, gZ, void 0))), lr.set(this, ((0, vr.m)(this, CZ), (0, vr.m)(this, MZ, void 0))), Xr.set(this, ((0, vr.m)(this, GZ), (0, vr.m)(this, kZ, void 0))), Pr.set(this, ((0, vr.m)(this, AZ), (0, vr.m)(this, VZ, new Fr.e(0, 0, 0)))), Hr.set(this, ((0, vr.m)(this, iZ), (0, vr.m)(this, wZ, new Fr.e(1, 1, 1)))), qr.set(this, ((0, vr.m)(this, cZ), (0, vr.m)(this, FZ, 1))), gr.set(this, ((0, vr.m)(this, oZ), (0, vr.m)(this, bZ, void 0))), Cr.set(this, ((0, vr.m)(this, JZ), (0, vr.m)(this, DZ, new Fr.e(1, 1, 1)))), Mr.set(this, ((0, vr.m)(this, dZ), (0, vr.m)(this, sZ, new Fr.e(1, 1, 1)))), Gr.set(this, ((0, vr.m)(this, uZ), (0, vr.m)(this, rW, new Fr.e(0, 0, 0)))), kr.set(this, ((0, vr.m)(this, SW), (0, vr.m)(this, QW, 1))), Ar.set(this, ((0, vr.m)(this, ZW), (0, vr.m)(this, WW, !1))), Vr.set(this, ((0, vr.m)(this, aW), (0, vr.m)(this, jW, !1))), ir.set(this, ((0, vr.m)(this, IW), (0, vr.m)(this, fW, !1))), wr.set(this, ((0, vr.m)(this, EW), (0, vr.m)(this, pW, .4))), cr.set(this, ((0, vr.m)(this, xW), (0, vr.m)(this, mW, !0))), or.set(this, ((0, vr.m)(this, NW), (0, vr.m)(this, UW, !1))), br.set(this, ((0, vr.m)(this, tW), (0, vr.m)(this, hW, !0))), Jr.set(this, ((0, vr.m)(this, zW), (0, vr.m)(this, YW, !1))), Dr.set(this, ((0, vr.m)(this, nW), (0, vr.m)(this, eW, !1))), dr.set(this, ((0, vr.m)(this, KW), (0, vr.m)(this, yW, !1))), sr.set(this, ((0, vr.m)(this, BW), (0, vr.m)(this, TW, !1))), ur.set(this, ((0, vr.m)(this, vW), (0, vr.m)(this, OW, !1))), rS.set(this, ((0, vr.m)(this, LW), (0, vr.m)(this, lW, !0))), SS.set(this, ((0, vr.m)(this, XW), (0, vr.m)(this, PW, !1))), QS.set(this, ((0, vr.m)(this, HW), (0, vr.m)(this, qW, !1))), ZS.set(this, ((0, vr.m)(this, RW), (0, vr.m)(this, gW, !1))), WS.set(this, ((0, vr.m)(this, CW), (0, vr.m)(this, MW, .05))), aS.set(this, ((0, vr.m)(this, GW), (0, vr.m)(this, kW, !1))), jS.set(this, ((0, vr.m)(this, AW), (0, vr.m)(this, VW, !1))), IS.set(this, ((0, vr.m)(this, iW), (0, vr.m)(this, wW, 4))), fS.set(this, ((0, vr.m)(this, cW), (0, vr.m)(this, FW, !1))), ES.set(this, ((0, vr.m)(this, oW), (0, vr.m)(this, bW, !1))), pS.set(this, ((0, vr.m)(this, JW), (0, vr.m)(this, DW, !1))), xS.set(this, ((0, vr.m)(this, dW), (0, vr.m)(this, sW, !1))), mS.set(this, ((0, vr.m)(this, uW), (0, vr.m)(this, ra, !1))), NS.set(this, ((0, vr.m)(this, Sa), (0, vr.m)(this, Qa, null))), US.set(this, ((0, vr.m)(this, Za), (0, vr.m)(this, Wa, !1))), tS.set(this, ((0, vr.m)(this, aa), (0, vr.m)(this, ja, !1))), hS.set(this, ((0, vr.m)(this, Ia), (0, vr.m)(this, fa, !0))), zS.set(this, ((0, vr.m)(this, Ea), (0, vr.m)(this, pa, !0))), YS.set(this, ((0, vr.m)(this, xa), (0, vr.m)(this, ma, !1))), nS.set(this, ((0, vr.m)(this, Na), (0, vr.m)(this, Ua, !1))), (0, vr.m)(this, ta), this._environmentBRDFTexture = Rr(this.eC())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(Sr) {
          let Qr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Wr = BS.e.Clone((() => new rr(Sr, this.eC())), this, {
            cloneTexturesOnlyOnce: Qr
          });
          return Wr.id = Sr, Wr.name = Sr, this.stencil.copyTo(Wr.stencil), this._clonePlugins(Wr, Zr), Wr
        }
        serialize() {
          const rr = super.serialize();
          return rr.customType = "BABYLON.PBRMaterial", rr
        }
        static Parse(Sr, Qr, Zr) {
          const Wr = BS.e.Parse((() => new rr(Sr.name, Qr)), Sr, Qr, Zr);
          return Sr.stencil && Wr.stencil.parse(Sr.stencil, Qr, Zr), ar.d._ParsePlugins(Sr, Wr, Qr, Zr), Sr.clearCoat && Wr.clearCoat.parse(Sr.clearCoat, Qr, Zr), Sr.anisotropy && Wr.anisotropy.parse(Sr.anisotropy, Qr, Zr), Sr.brdf && Wr.brdf.parse(Sr.brdf, Qr, Zr), Sr.sheen && Wr.sheen.parse(Sr.sheen, Qr, Zr), Sr.subSurface && Wr.subSurface.parse(Sr.subSurface, Qr, Zr), Sr.iridescence && Wr.iridescence.parse(Sr.iridescence, Qr, Zr), Wr
        }
      }, Sr = new WeakMap, Qr = new WeakMap, Zr = new WeakMap, Wr = new WeakMap, jr = new WeakMap, Ir = new WeakMap, fr = new WeakMap, Er = new WeakMap, pr = new WeakMap, xr = new WeakMap, mr = new WeakMap, Nr = new WeakMap, Ur = new WeakMap, tr = new WeakMap, hr = new WeakMap, zr = new WeakMap, Yr = new WeakMap, nr = new WeakMap, er = new WeakMap, Kr = new WeakMap, yr = new WeakMap, Br = new WeakMap, Tr = new WeakMap, Lr = new WeakMap, lr = new WeakMap, Xr = new WeakMap, Pr = new WeakMap, Hr = new WeakMap, qr = new WeakMap, gr = new WeakMap, Cr = new WeakMap, Mr = new WeakMap, Gr = new WeakMap, kr = new WeakMap, Ar = new WeakMap, Vr = new WeakMap, ir = new WeakMap, wr = new WeakMap, cr = new WeakMap, or = new WeakMap, br = new WeakMap, Jr = new WeakMap, Dr = new WeakMap, dr = new WeakMap, sr = new WeakMap, ur = new WeakMap, rS = new WeakMap, SS = new WeakMap, QS = new WeakMap, ZS = new WeakMap, WS = new WeakMap, aS = new WeakMap, jS = new WeakMap, IS = new WeakMap, fS = new WeakMap, ES = new WeakMap, pS = new WeakMap, xS = new WeakMap, mS = new WeakMap, NS = new WeakMap, US = new WeakMap, tS = new WeakMap, hS = new WeakMap, zS = new WeakMap, YS = new WeakMap, nS = new WeakMap, (() => {
        const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(kQ[Symbol.metadata] ?? null) : void 0;
        eS = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], KS = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], TS = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], vS = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], OS = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], LS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], lS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], XS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], PS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], HS = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], qS = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], RS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], gS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], CS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], MS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], GS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], kS = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], AS = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], VS = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], iS = [(0, Or.n)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], wS = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], cS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], FS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], oS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], bS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], JS = [(0, Or.z)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty", null)], DS = [(0, Or.n)("ambient"), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], dS = [(0, Or.n)("albedo"), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], sS = [(0, Or.G)("baseWeight"), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], uS = [(0, Or.G)("baseDiffuseRoughness"), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], rQ = [(0, Or.n)("reflectivity"), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], SQ = [(0, Or.n)("reflection"), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], QQ = [(0, Or.n)("emissive"), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], ZQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], WQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], aQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], jQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], IQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], fQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], EQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], pQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], xQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], mQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], NQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], UQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], tQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], hQ = [(0, Or.G)()], zQ = [(0, Or.G)()], YQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], nQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], eQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], KQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], yQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], BQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsLightsDirty")], TQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], vQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsLightsDirty")], OQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], LQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], lQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], XQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], PQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], HQ = [(0, Or.f)("_markAllSubMeshesAsTexturesDirty")], qQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], RQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], gQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], CQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsTexturesDirty")], MQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], GQ = [(0, Or.G)(), (0, Or.f)("_markAllSubMeshesAsMiscDirty")], (0, vr.k)(rr, null, eS, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "directIntensity" in rr,
            get: rr => rr.directIntensity,
            set: (rr, Sr) => {
              rr.directIntensity = Sr
            }
          },
          metadata: Sr
        }, VQ, iQ), (0, vr.k)(rr, null, KS, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "emissiveIntensity" in rr,
            get: rr => rr.emissiveIntensity,
            set: (rr, Sr) => {
              rr.emissiveIntensity = Sr
            }
          },
          metadata: Sr
        }, wQ, cQ), (0, vr.k)(rr, null, TS, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "environmentIntensity" in rr,
            get: rr => rr.environmentIntensity,
            set: (rr, Sr) => {
              rr.environmentIntensity = Sr
            }
          },
          metadata: Sr
        }, FQ, oQ), (0, vr.k)(rr, null, vS, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: rr => "specularIntensity" in rr,
            get: rr => rr.specularIntensity,
            set: (rr, Sr) => {
              rr.specularIntensity = Sr
            }
          },
          metadata: Sr
        }, bQ, JQ), (0, vr.k)(rr, null, OS, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: rr => "disableBumpMap" in rr,
            get: rr => rr.disableBumpMap,
            set: (rr, Sr) => {
              rr.disableBumpMap = Sr
            }
          },
          metadata: Sr
        }, DQ, dQ), (0, vr.k)(rr, null, LS, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "albedoTexture" in rr,
            get: rr => rr.albedoTexture,
            set: (rr, Sr) => {
              rr.albedoTexture = Sr
            }
          },
          metadata: Sr
        }, sQ, uQ), (0, vr.k)(rr, null, lS, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "baseWeightTexture" in rr,
            get: rr => rr.baseWeightTexture,
            set: (rr, Sr) => {
              rr.baseWeightTexture = Sr
            }
          },
          metadata: Sr
        }, rZ, SZ), (0, vr.k)(rr, null, XS, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "baseDiffuseRoughnessTexture" in rr,
            get: rr => rr.baseDiffuseRoughnessTexture,
            set: (rr, Sr) => {
              rr.baseDiffuseRoughnessTexture = Sr
            }
          },
          metadata: Sr
        }, QZ, ZZ), (0, vr.k)(rr, null, PS, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "ambientTexture" in rr,
            get: rr => rr.ambientTexture,
            set: (rr, Sr) => {
              rr.ambientTexture = Sr
            }
          },
          metadata: Sr
        }, WZ, aZ), (0, vr.k)(rr, null, HS, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: rr => "ambientTextureStrength" in rr,
            get: rr => rr.ambientTextureStrength,
            set: (rr, Sr) => {
              rr.ambientTextureStrength = Sr
            }
          },
          metadata: Sr
        }, jZ, IZ), (0, vr.k)(rr, null, qS, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: rr => "ambientTextureImpactOnAnalyticalLights" in rr,
            get: rr => rr.ambientTextureImpactOnAnalyticalLights,
            set: (rr, Sr) => {
              rr.ambientTextureImpactOnAnalyticalLights = Sr
            }
          },
          metadata: Sr
        }, fZ, EZ), (0, vr.k)(rr, null, RS, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "opacityTexture" in rr,
            get: rr => rr.opacityTexture,
            set: (rr, Sr) => {
              rr.opacityTexture = Sr
            }
          },
          metadata: Sr
        }, pZ, xZ), (0, vr.k)(rr, null, gS, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "reflectionTexture" in rr,
            get: rr => rr.reflectionTexture,
            set: (rr, Sr) => {
              rr.reflectionTexture = Sr
            }
          },
          metadata: Sr
        }, mZ, NZ), (0, vr.k)(rr, null, CS, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "emissiveTexture" in rr,
            get: rr => rr.emissiveTexture,
            set: (rr, Sr) => {
              rr.emissiveTexture = Sr
            }
          },
          metadata: Sr
        }, UZ, tZ), (0, vr.k)(rr, null, MS, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "reflectivityTexture" in rr,
            get: rr => rr.reflectivityTexture,
            set: (rr, Sr) => {
              rr.reflectivityTexture = Sr
            }
          },
          metadata: Sr
        }, hZ, zZ), (0, vr.k)(rr, null, GS, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "metallicTexture" in rr,
            get: rr => rr.metallicTexture,
            set: (rr, Sr) => {
              rr.metallicTexture = Sr
            }
          },
          metadata: Sr
        }, YZ, nZ), (0, vr.k)(rr, null, kS, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: rr => "metallic" in rr,
            get: rr => rr.metallic,
            set: (rr, Sr) => {
              rr.metallic = Sr
            }
          },
          metadata: Sr
        }, eZ, KZ), (0, vr.k)(rr, null, AS, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: rr => "roughness" in rr,
            get: rr => rr.roughness,
            set: (rr, Sr) => {
              rr.roughness = Sr
            }
          },
          metadata: Sr
        }, yZ, BZ), (0, vr.k)(rr, null, VS, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: rr => "metallicF0Factor" in rr,
            get: rr => rr.metallicF0Factor,
            set: (rr, Sr) => {
              rr.metallicF0Factor = Sr
            }
          },
          metadata: Sr
        }, TZ, vZ), (0, vr.k)(rr, null, iS, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: rr => "metallicReflectanceColor" in rr,
            get: rr => rr.metallicReflectanceColor,
            set: (rr, Sr) => {
              rr.metallicReflectanceColor = Sr
            }
          },
          metadata: Sr
        }, OZ, LZ), (0, vr.k)(rr, null, wS, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "useOnlyMetallicFromMetallicReflectanceTexture" in rr,
            get: rr => rr.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (rr, Sr) => {
              rr.useOnlyMetallicFromMetallicReflectanceTexture = Sr
            }
          },
          metadata: Sr
        }, lZ, XZ), (0, vr.k)(rr, null, cS, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "metallicReflectanceTexture" in rr,
            get: rr => rr.metallicReflectanceTexture,
            set: (rr, Sr) => {
              rr.metallicReflectanceTexture = Sr
            }
          },
          metadata: Sr
        }, PZ, HZ), (0, vr.k)(rr, null, FS, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "reflectanceTexture" in rr,
            get: rr => rr.reflectanceTexture,
            set: (rr, Sr) => {
              rr.reflectanceTexture = Sr
            }
          },
          metadata: Sr
        }, qZ, RZ), (0, vr.k)(rr, null, oS, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "microSurfaceTexture" in rr,
            get: rr => rr.microSurfaceTexture,
            set: (rr, Sr) => {
              rr.microSurfaceTexture = Sr
            }
          },
          metadata: Sr
        }, gZ, CZ), (0, vr.k)(rr, null, bS, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "bumpTexture" in rr,
            get: rr => rr.bumpTexture,
            set: (rr, Sr) => {
              rr.bumpTexture = Sr
            }
          },
          metadata: Sr
        }, MZ, GZ), (0, vr.k)(rr, null, JS, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "lightmapTexture" in rr,
            get: rr => rr.lightmapTexture,
            set: (rr, Sr) => {
              rr.lightmapTexture = Sr
            }
          },
          metadata: Sr
        }, kZ, AZ), (0, vr.k)(rr, null, DS, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: rr => "ambientColor" in rr,
            get: rr => rr.ambientColor,
            set: (rr, Sr) => {
              rr.ambientColor = Sr
            }
          },
          metadata: Sr
        }, VZ, iZ), (0, vr.k)(rr, null, dS, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: rr => "albedoColor" in rr,
            get: rr => rr.albedoColor,
            set: (rr, Sr) => {
              rr.albedoColor = Sr
            }
          },
          metadata: Sr
        }, wZ, cZ), (0, vr.k)(rr, null, sS, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: rr => "baseWeight" in rr,
            get: rr => rr.baseWeight,
            set: (rr, Sr) => {
              rr.baseWeight = Sr
            }
          },
          metadata: Sr
        }, FZ, oZ), (0, vr.k)(rr, null, uS, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: rr => "baseDiffuseRoughness" in rr,
            get: rr => rr.baseDiffuseRoughness,
            set: (rr, Sr) => {
              rr.baseDiffuseRoughness = Sr
            }
          },
          metadata: Sr
        }, bZ, JZ), (0, vr.k)(rr, null, rQ, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: rr => "reflectivityColor" in rr,
            get: rr => rr.reflectivityColor,
            set: (rr, Sr) => {
              rr.reflectivityColor = Sr
            }
          },
          metadata: Sr
        }, DZ, dZ), (0, vr.k)(rr, null, SQ, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: rr => "reflectionColor" in rr,
            get: rr => rr.reflectionColor,
            set: (rr, Sr) => {
              rr.reflectionColor = Sr
            }
          },
          metadata: Sr
        }, sZ, uZ), (0, vr.k)(rr, null, QQ, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: rr => "emissiveColor" in rr,
            get: rr => rr.emissiveColor,
            set: (rr, Sr) => {
              rr.emissiveColor = Sr
            }
          },
          metadata: Sr
        }, rW, SW), (0, vr.k)(rr, null, ZQ, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: rr => "microSurface" in rr,
            get: rr => rr.microSurface,
            set: (rr, Sr) => {
              rr.microSurface = Sr
            }
          },
          metadata: Sr
        }, QW, ZW), (0, vr.k)(rr, null, WQ, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: rr => "useLightmapAsShadowmap" in rr,
            get: rr => rr.useLightmapAsShadowmap,
            set: (rr, Sr) => {
              rr.useLightmapAsShadowmap = Sr
            }
          },
          metadata: Sr
        }, WW, aW), (0, vr.k)(rr, null, aQ, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "useAlphaFromAlbedoTexture" in rr,
            get: rr => rr.useAlphaFromAlbedoTexture,
            set: (rr, Sr) => {
              rr.useAlphaFromAlbedoTexture = Sr
            }
          },
          metadata: Sr
        }, jW, IW), (0, vr.k)(rr, null, jQ, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: rr => "forceAlphaTest" in rr,
            get: rr => rr.forceAlphaTest,
            set: (rr, Sr) => {
              rr.forceAlphaTest = Sr
            }
          },
          metadata: Sr
        }, fW, EW), (0, vr.k)(rr, null, IQ, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: rr => "alphaCutOff" in rr,
            get: rr => rr.alphaCutOff,
            set: (rr, Sr) => {
              rr.alphaCutOff = Sr
            }
          },
          metadata: Sr
        }, pW, xW), (0, vr.k)(rr, null, fQ, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: rr => "useSpecularOverAlpha" in rr,
            get: rr => rr.useSpecularOverAlpha,
            set: (rr, Sr) => {
              rr.useSpecularOverAlpha = Sr
            }
          },
          metadata: Sr
        }, mW, NW), (0, vr.k)(rr, null, EQ, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: rr => "useMicroSurfaceFromReflectivityMapAlpha" in rr,
            get: rr => rr.useMicroSurfaceFromReflectivityMapAlpha,
            set: (rr, Sr) => {
              rr.useMicroSurfaceFromReflectivityMapAlpha = Sr
            }
          },
          metadata: Sr
        }, UW, tW), (0, vr.k)(rr, null, pQ, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: rr => "useRoughnessFromMetallicTextureAlpha" in rr,
            get: rr => rr.useRoughnessFromMetallicTextureAlpha,
            set: (rr, Sr) => {
              rr.useRoughnessFromMetallicTextureAlpha = Sr
            }
          },
          metadata: Sr
        }, hW, zW), (0, vr.k)(rr, null, xQ, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: rr => "useRoughnessFromMetallicTextureGreen" in rr,
            get: rr => rr.useRoughnessFromMetallicTextureGreen,
            set: (rr, Sr) => {
              rr.useRoughnessFromMetallicTextureGreen = Sr
            }
          },
          metadata: Sr
        }, YW, nW), (0, vr.k)(rr, null, mQ, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: rr => "useMetallnessFromMetallicTextureBlue" in rr,
            get: rr => rr.useMetallnessFromMetallicTextureBlue,
            set: (rr, Sr) => {
              rr.useMetallnessFromMetallicTextureBlue = Sr
            }
          },
          metadata: Sr
        }, eW, KW), (0, vr.k)(rr, null, NQ, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: rr => "useAmbientOcclusionFromMetallicTextureRed" in rr,
            get: rr => rr.useAmbientOcclusionFromMetallicTextureRed,
            set: (rr, Sr) => {
              rr.useAmbientOcclusionFromMetallicTextureRed = Sr
            }
          },
          metadata: Sr
        }, yW, BW), (0, vr.k)(rr, null, UQ, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: rr => "useAmbientInGrayScale" in rr,
            get: rr => rr.useAmbientInGrayScale,
            set: (rr, Sr) => {
              rr.useAmbientInGrayScale = Sr
            }
          },
          metadata: Sr
        }, TW, vW), (0, vr.k)(rr, null, tQ, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: rr => "useAutoMicroSurfaceFromReflectivityMap" in rr,
            get: rr => rr.useAutoMicroSurfaceFromReflectivityMap,
            set: (rr, Sr) => {
              rr.useAutoMicroSurfaceFromReflectivityMap = Sr
            }
          },
          metadata: Sr
        }, OW, LW), (0, vr.k)(rr, null, hQ, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: rr => "usePhysicalLightFalloff" in rr,
            get: rr => rr.usePhysicalLightFalloff
          },
          metadata: Sr
        }, null, AQ), (0, vr.k)(rr, null, zQ, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: rr => "useGLTFLightFalloff" in rr,
            get: rr => rr.useGLTFLightFalloff
          },
          metadata: Sr
        }, null, AQ), (0, vr.k)(rr, null, YQ, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: rr => "useRadianceOverAlpha" in rr,
            get: rr => rr.useRadianceOverAlpha,
            set: (rr, Sr) => {
              rr.useRadianceOverAlpha = Sr
            }
          },
          metadata: Sr
        }, lW, XW), (0, vr.k)(rr, null, nQ, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: rr => "useObjectSpaceNormalMap" in rr,
            get: rr => rr.useObjectSpaceNormalMap,
            set: (rr, Sr) => {
              rr.useObjectSpaceNormalMap = Sr
            }
          },
          metadata: Sr
        }, PW, HW), (0, vr.k)(rr, null, eQ, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: rr => "useParallax" in rr,
            get: rr => rr.useParallax,
            set: (rr, Sr) => {
              rr.useParallax = Sr
            }
          },
          metadata: Sr
        }, qW, RW), (0, vr.k)(rr, null, KQ, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: rr => "useParallaxOcclusion" in rr,
            get: rr => rr.useParallaxOcclusion,
            set: (rr, Sr) => {
              rr.useParallaxOcclusion = Sr
            }
          },
          metadata: Sr
        }, gW, CW), (0, vr.k)(rr, null, yQ, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: rr => "parallaxScaleBias" in rr,
            get: rr => rr.parallaxScaleBias,
            set: (rr, Sr) => {
              rr.parallaxScaleBias = Sr
            }
          },
          metadata: Sr
        }, MW, GW), (0, vr.k)(rr, null, BQ, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: rr => "disableLighting" in rr,
            get: rr => rr.disableLighting,
            set: (rr, Sr) => {
              rr.disableLighting = Sr
            }
          },
          metadata: Sr
        }, kW, AW), (0, vr.k)(rr, null, TQ, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: rr => "forceIrradianceInFragment" in rr,
            get: rr => rr.forceIrradianceInFragment,
            set: (rr, Sr) => {
              rr.forceIrradianceInFragment = Sr
            }
          },
          metadata: Sr
        }, VW, iW), (0, vr.k)(rr, null, vQ, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: rr => "maxSimultaneousLights" in rr,
            get: rr => rr.maxSimultaneousLights,
            set: (rr, Sr) => {
              rr.maxSimultaneousLights = Sr
            }
          },
          metadata: Sr
        }, wW, cW), (0, vr.k)(rr, null, OQ, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: rr => "invertNormalMapX" in rr,
            get: rr => rr.invertNormalMapX,
            set: (rr, Sr) => {
              rr.invertNormalMapX = Sr
            }
          },
          metadata: Sr
        }, FW, oW), (0, vr.k)(rr, null, LQ, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: rr => "invertNormalMapY" in rr,
            get: rr => rr.invertNormalMapY,
            set: (rr, Sr) => {
              rr.invertNormalMapY = Sr
            }
          },
          metadata: Sr
        }, bW, JW), (0, vr.k)(rr, null, lQ, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: rr => "twoSidedLighting" in rr,
            get: rr => rr.twoSidedLighting,
            set: (rr, Sr) => {
              rr.twoSidedLighting = Sr
            }
          },
          metadata: Sr
        }, DW, dW), (0, vr.k)(rr, null, XQ, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: rr => "useAlphaFresnel" in rr,
            get: rr => rr.useAlphaFresnel,
            set: (rr, Sr) => {
              rr.useAlphaFresnel = Sr
            }
          },
          metadata: Sr
        }, sW, uW), (0, vr.k)(rr, null, PQ, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: rr => "useLinearAlphaFresnel" in rr,
            get: rr => rr.useLinearAlphaFresnel,
            set: (rr, Sr) => {
              rr.useLinearAlphaFresnel = Sr
            }
          },
          metadata: Sr
        }, ra, Sa), (0, vr.k)(rr, null, HQ, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: rr => "environmentBRDFTexture" in rr,
            get: rr => rr.environmentBRDFTexture,
            set: (rr, Sr) => {
              rr.environmentBRDFTexture = Sr
            }
          },
          metadata: Sr
        }, Qa, Za), (0, vr.k)(rr, null, qQ, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: rr => "forceNormalForward" in rr,
            get: rr => rr.forceNormalForward,
            set: (rr, Sr) => {
              rr.forceNormalForward = Sr
            }
          },
          metadata: Sr
        }, Wa, aa), (0, vr.k)(rr, null, RQ, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: rr => "enableSpecularAntiAliasing" in rr,
            get: rr => rr.enableSpecularAntiAliasing,
            set: (rr, Sr) => {
              rr.enableSpecularAntiAliasing = Sr
            }
          },
          metadata: Sr
        }, ja, Ia), (0, vr.k)(rr, null, gQ, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: rr => "useHorizonOcclusion" in rr,
            get: rr => rr.useHorizonOcclusion,
            set: (rr, Sr) => {
              rr.useHorizonOcclusion = Sr
            }
          },
          metadata: Sr
        }, fa, Ea), (0, vr.k)(rr, null, CQ, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: rr => "useRadianceOcclusion" in rr,
            get: rr => rr.useRadianceOcclusion,
            set: (rr, Sr) => {
              rr.useRadianceOcclusion = Sr
            }
          },
          metadata: Sr
        }, pa, xa), (0, vr.k)(rr, null, MQ, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: rr => "unlit" in rr,
            get: rr => rr.unlit,
            set: (rr, Sr) => {
              rr.unlit = Sr
            }
          },
          metadata: Sr
        }, ma, Na), (0, vr.k)(rr, null, GQ, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: rr => "applyDecalMapAfterDetailMap" in rr,
            get: rr => rr.applyDecalMapAfterDetailMap,
            set: (rr, Sr) => {
              rr.applyDecalMapAfterDetailMap = Sr
            }
          },
          metadata: Sr
        }, Ua, ta), Sr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sr
        })
      })(), rr.PBRMATERIAL_OPAQUE = yS.PBRMATERIAL_OPAQUE, rr.PBRMATERIAL_ALPHATEST = yS.PBRMATERIAL_ALPHATEST, rr.PBRMATERIAL_ALPHABLEND = yS.PBRMATERIAL_ALPHABLEND, rr.PBRMATERIAL_ALPHATESTANDBLEND = yS.PBRMATERIAL_ALPHATESTANDBLEND, rr.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = yS.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, rr
    })();
    const CW = "KHR_materials_diffuse_transmission";

    function MW(rr, Sr) {
      const Qr = Sr.subSurface;
      let Zr = null;
      return Qr.translucencyIntensityTexture ? Zr = Qr.translucencyIntensityTexture : Qr.thicknessTexture && Qr.useMaskFromThicknessTexture && (Zr = Qr.thicknessTexture), Zr && !Qr.useGltfStyleTextures ? (Lr.c.Warn(`${rr}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${Sr.name}`, 1), null) : Zr
    }
    class GW {
      constructor(rr) {
        this.name = CW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        const Zr = [];
        if (Qr instanceof gW && this._isExtensionEnabled(Qr)) {
          const Sr = MW(rr, Qr);
          return Sr && Zr.push(Sr), Qr.subSurface.translucencyColorTexture && Zr.push(Qr.subSurface.translucencyColorTexture), Zr
        }
        return Zr
      }
      _isExtensionEnabled(rr) {
        if (rr.unlit) return !1;
        const Sr = rr.subSurface;
        return !!Sr.isTranslucencyEnabled && (!rr.unlit && !Sr.useAlbedoToTintTranslucency && Sr.useGltfStyleTextures && 1 === Sr.volumeIndexOfRefraction && 0 === Sr.minimumThickness && 0 === Sr.maximumThickness)
      }
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((Zr => {
          if (Qr instanceof gW && this._isExtensionEnabled(Qr)) {
            this._wasUsed = !0;
            const Zr = Qr.subSurface,
              Wr = MW(rr, Qr),
              ar = 0 == Zr.translucencyIntensity ? void 0 : Zr.translucencyIntensity,
              jr = this._exporter._materialExporter.getTextureInfo(Wr) ?? void 0,
              Ir = !Zr.translucencyColor || Zr.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Zr.translucencyColor.OWr(),
              fr = this._exporter._materialExporter.getTextureInfo(Zr.translucencyColorTexture) ?? void 0,
              Er = {
                diffuseTransmissionFactor: ar,
                diffuseTransmissionTexture: jr,
                diffuseTransmissionColorFactor: Ir,
                diffuseTransmissionColorTexture: fr
              };
            (jr || fr) && this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions = Sr.extensions || {}, Sr.extensions[CW] = Er
          }
          Zr(Sr)
        }))
      }
    }
    let kW = !1;

    function AW() {
      kW || (kW = !0, RZ.RegisterExtension(CW, (rr => new GW(rr))))
    }
    AW();
    const VW = "KHR_materials_dispersion";
    class iW {
      constructor() {
        this.name = VW, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(rr) {
        if (rr.unlit) return !1;
        const Sr = rr.subSurface;
        return !(!Sr.isRefractionEnabled && !Sr.isDispersionEnabled)
      }
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((rr => {
          if (Qr instanceof gW && this._isExtensionEnabled(Qr)) {
            this._wasUsed = !0;
            const rr = {
              dispersion: Qr.subSurface.dispersion
            };
            Sr.extensions = Sr.extensions || {}, Sr.extensions[VW] = rr
          }
          rr(Sr)
        }))
      }
    }
    let wW = !1;

    function cW() {
      wW || (wW = !0, RZ.RegisterExtension(VW, (() => new iW)))
    }
    cW();
    const FW = "KHR_materials_emissive_strength";
    class oW {
      constructor() {
        this.name = FW, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(rr, Sr, Qr) {
        return await new Promise((rr => {
          if (!(Qr instanceof gW)) return rr(Sr);
          const Zr = Qr.emissiveColor.scale(Qr.emissiveIntensity),
            Wr = Math.max(...Zr.OWr());
          if (Wr > 1) {
            Sr.emissiveFactor = Zr.scale(1 / Wr).OWr(), this._wasUsed = !0;
            const rr = {
              emissiveStrength: Wr
            };
            Sr.extensions || (Sr.extensions = {}), Sr.extensions[FW] = rr
          } else Sr.emissiveFactor = Zr.OWr();
          return rr(Sr)
        }))
      }
    }
    let bW = !1;

    function JW() {
      bW || (bW = !0, RZ.RegisterExtension(FW, (() => new oW)))
    }
    JW();
    const DW = "KHR_materials_ior";
    class dW {
      constructor() {
        this.name = DW, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(rr) {
        return !rr.unlit && (rr instanceof sS ? 1.5 != rr.specularIor : rr instanceof gW && (void 0 != rr.indexOfRefraction && 1.5 != rr.indexOfRefraction))
      }
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((rr => {
          if (Qr instanceof gW && this._isExtensionEnabled(Qr)) {
            this._wasUsed = !0;
            const rr = {
              ior: Qr.indexOfRefraction
            };
            Sr.extensions = Sr.extensions || {}, Sr.extensions[DW] = rr
          } else if (Qr instanceof sS && this._isExtensionEnabled(Qr)) {
            this._wasUsed = !0;
            const rr = {
              ior: Qr.specularIor
            };
            Sr.extensions = Sr.extensions || {}, Sr.extensions[DW] = rr
          }
          rr(Sr)
        }))
      }
    }
    let sW = !1;

    function uW() {
      sW || (sW = !0, RZ.RegisterExtension(DW, (() => new dW)))
    }
    uW();
    const ra = "KHR_materials_iridescence";
    class Sa {
      constructor(rr) {
        this.name = ra, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        const Zr = [];
        if (Qr instanceof yS) {
          if (Qr.iridescence.isEnabled) return Qr.iridescence.texture && Zr.push(Qr.iridescence.texture), Qr.iridescence.thicknessTexture && Qr.iridescence.thicknessTexture !== Qr.iridescence.texture && Zr.push(Qr.iridescence.thicknessTexture), Zr
        } else if (Qr instanceof sS && Qr.thinFilmWeight > 0) return Qr.thinFilmWeightTexture && Zr.push(Qr.thinFilmWeightTexture), Qr.thinFilmThicknessTexture && Qr.thinFilmThicknessTexture !== Qr.thinFilmWeightTexture && Zr.push(Qr.thinFilmThicknessTexture), Zr;
        return []
      }
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((rr => {
          if (Qr instanceof yS) {
            if (!Qr.iridescence.isEnabled) return void rr(Sr);
            this._wasUsed = !0, Sr.extensions = Sr.extensions || {};
            const Zr = this._exporter._materialExporter.getTextureInfo(Qr.iridescence.texture),
              Wr = this._exporter._materialExporter.getTextureInfo(Qr.iridescence.thicknessTexture),
              ar = {
                iridescenceFactor: Qr.iridescence.intensity,
                iridescenceIor: Qr.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: Qr.iridescence.minimumThickness,
                iridescenceThicknessMaximum: Qr.iridescence.maximumThickness,
                iridescenceTexture: Zr ?? void 0,
                iridescenceThicknessTexture: Wr ?? void 0
              };
            null === ar.iridescenceTexture && null === ar.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions[ra] = ar
          } else if (Qr instanceof sS) {
            if (Qr.thinFilmWeight <= 0) return void rr(Sr);
            this._wasUsed = !0, Sr.extensions = Sr.extensions || {};
            const Zr = this._exporter._materialExporter.getTextureInfo(Qr.thinFilmWeightTexture),
              Wr = this._exporter._materialExporter.getTextureInfo(Qr.thinFilmThicknessTexture),
              ar = {
                iridescenceFactor: Qr.thinFilmWeight,
                iridescenceIor: Qr.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * Qr.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * Qr.thinFilmThickness,
                iridescenceTexture: Zr ?? void 0,
                iridescenceThicknessTexture: Wr ?? void 0
              };
            null === ar.iridescenceTexture && null === ar.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions[ra] = ar
          }
          rr(Sr)
        }))
      }
    }
    let Qa = !1;

    function Za() {
      Qa || (Qa = !0, RZ.RegisterExtension(ra, (rr => new Sa(rr))))
    }
    Za();
    const Wa = "KHR_materials_sheen";
    class aa {
      constructor(rr) {
        this.name = Wa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        return Qr instanceof gW && Qr.sheen.isEnabled && Qr.sheen.texture ? [Qr.sheen.texture] : []
      }
      async postExportMaterialAsync(rr, Sr, Qr) {
        return await new Promise((rr => {
          if (Qr instanceof gW) {
            if (!Qr.sheen.isEnabled) return void rr(Sr);
            this._wasUsed = !0, null == Sr.extensions && (Sr.extensions = {});
            const Zr = {
              sheenColorFactor: Qr.sheen.color.OWr(),
              sheenRoughnessFactor: Qr.sheen.roughness ?? 0
            };
            null === Zr.sheenColorTexture && null === Zr.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Qr), Qr.sheen.texture && (Zr.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(Qr.sheen.texture) ?? void 0), Qr.sheen.textureRoughness && !Qr.sheen.useRoughnessFromMainTexture ? Zr.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Qr.sheen.textureRoughness) ?? void 0 : Qr.sheen.texture && Qr.sheen.useRoughnessFromMainTexture && (Zr.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Qr.sheen.texture) ?? void 0), Sr.extensions[Wa] = Zr
          }
          rr(Sr)
        }))
      }
    }
    let ja = !1;

    function Ia() {
      ja || (ja = !0, RZ.RegisterExtension(Wa, (rr => new aa(rr))))
    }
    Ia();
    const fa = "KHR_materials_fuzz";

    function Ea(rr, Sr) {
      const Qr = new Xr.f(Sr.name, Sr.eC());
      return Qr._texture = rr, Qr.coordinatesIndex = Sr.coordinatesIndex, Sr instanceof Xr.f && (Qr.uOffset = Sr.uOffset, Qr.vOffset = Sr.vOffset, Qr.uScale = Sr.uScale, Qr.vScale = Sr.vScale, Qr.wAng = Sr.wAng), Qr.wrapU = Sr.wrapU, Qr.wrapV = Sr.wrapV, Qr
    }
    class pa {
      constructor(rr) {
        this.name = fa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = rr
      }
      dispose() {
        for (const rr of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[rr].dispose()
        }
        this._mergedTexturesMap = {};
        for (const rr of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[rr].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        if (Qr instanceof sS) {
          const rr = [];
          if (Qr.fuzzWeight > 0) {
            Qr.fuzzWeightTexture && rr.push(Qr.fuzzWeightTexture);
            let Sr = !1;
            if (Qr.fuzzRoughnessTexture && (Qr._useFuzzRoughnessFromTextureAlpha ? rr.push(Qr.fuzzRoughnessTexture) : Sr = !0), Qr.fuzzColorTexture && !Sr && rr.push(Qr.fuzzColorTexture), Sr) {
              const Sr = function(rr) {
                const Sr = rr.fuzzColorTexture,
                  Qr = Sr && Sr.getInternalTexture() ? Sr.getInternalTexture().uniqueId : "NoFuzzColor",
                  Zr = rr.fuzzRoughnessTexture;
                return `FuzzColor_${Qr}_FuzzRoughness_${Zr&&Zr.getInternalTexture()?Zr.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(Qr);
              if (!this._cachedInternalTexturesMap[Sr]) {
                const rr = await async function(rr) {
                  const Sr = rr.eC(),
                    Qr = rr.fuzzColorTexture,
                    Zr = rr.fuzzRoughnessTexture;
                  return Qr || Zr ? (await jQ("FuzzTexture", EQ(Qr ? IQ(Qr, 0) : fQ(1), Qr ? IQ(Qr, 1) : fQ(1), Qr ? IQ(Qr, 2) : fQ(1), Zr ? IQ(Zr, rr._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : fQ(1)), Sr)).getInternalTexture() : null
                }(Qr);
                rr && (this._cachedInternalTexturesMap[Sr] = rr)
              }
              this._cachedInternalTexturesMap[Sr] && (Qr.fuzzColorTexture && (this._mergedTexturesMap[Qr.fuzzColorTexture.uniqueId] = Ea(this._cachedInternalTexturesMap[Sr], Qr.fuzzColorTexture), rr.push(this._mergedTexturesMap[Qr.fuzzColorTexture.uniqueId])), Qr.fuzzRoughnessTexture && (this._mergedTexturesMap[Qr.fuzzRoughnessTexture.uniqueId] = Ea(this._cachedInternalTexturesMap[Sr], Qr.fuzzRoughnessTexture), rr.push(this._mergedTexturesMap[Qr.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return rr
        }
        return []
      }
      async postExportMaterialAsync(rr, Sr, Qr) {
        return await new Promise((rr => {
          if (Qr instanceof sS) {
            if (0 == Qr.fuzzWeight) return void rr(Sr);
            this._wasUsed = !0, null == Sr.extensions && (Sr.extensions = {});
            const Zr = {
              fuzzFactor: Qr.fuzzWeight,
              fuzzColorFactor: Qr.fuzzColor.OWr(),
              fuzzRoughnessFactor: Qr.fuzzRoughness
            };
            let Wr, ar;
            Qr.fuzzWeightTexture && (Zr.fuzzTexture = this._exporter._materialExporter.getTextureInfo(Qr.fuzzWeightTexture) ?? void 0), Qr.fuzzColorTexture && (Wr = this._mergedTexturesMap[Qr.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[Qr.fuzzColorTexture.uniqueId] : Qr.fuzzColorTexture, Zr.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Wr) ?? void 0), Qr.fuzzRoughnessTexture && (ar = this._mergedTexturesMap[Qr.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Qr.fuzzRoughnessTexture.uniqueId] : Qr.fuzzRoughnessTexture, Zr.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ar) ?? void 0), null === Zr.fuzzColorTexture && null === Zr.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions[fa] = Zr
          }
          rr(Sr)
        }))
      }
    }
    let xa = !1;

    function ma() {
      xa || (xa = !0, RZ.RegisterExtension(fa, (rr => new pa(rr))))
    }
    ma();
    const Na = "KHR_materials_specular";
    class Ua {
      constructor(rr) {
        this.name = Na, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        const Zr = [];
        return Qr instanceof gW && this._isExtensionEnabled(Qr) ? (Qr.metallicReflectanceTexture && Zr.push(Qr.metallicReflectanceTexture), Qr.reflectanceTexture && Zr.push(Qr.reflectanceTexture), Zr) : Zr
      }
      _isExtensionEnabled(rr) {
        return !rr.unlit && (void 0 != rr.metallicF0Factor && 1 != rr.metallicF0Factor || void 0 != rr.metallicReflectanceColor && !rr.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(rr))
      }
      _hasTexturesExtension(rr) {
        return null != rr.metallicReflectanceTexture || null != rr.reflectanceTexture
      }
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((rr => {
          var Zr;
          if (Qr instanceof gW && this._isExtensionEnabled(Qr)) {
            this._wasUsed = !0, Sr.extensions = Sr.extensions || {};
            const rr = this._exporter._materialExporter.getTextureInfo(Qr.metallicReflectanceTexture) ?? void 0,
              Zr = this._exporter._materialExporter.getTextureInfo(Qr.reflectanceTexture) ?? void 0,
              Wr = {
                specularFactor: 1 == Qr.metallicF0Factor ? void 0 : Qr.metallicF0Factor,
                specularTexture: rr,
                specularColorFactor: Qr.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : Qr.metallicReflectanceColor.OWr(),
                specularColorTexture: Zr
              };
            this._hasTexturesExtension(Qr) && this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions[Na] = Wr
          } else if (Qr instanceof sS) {
            Sr.extensions = Sr.extensions || {};
            const Wr = this._exporter._materialExporter.getTextureInfo(Qr.specularWeightTexture) ?? void 0,
              ar = this._exporter._materialExporter.getTextureInfo(Qr.specularColorTexture) ?? void 0,
              jr = 1 == Qr.specularWeight ? void 0 : Qr.specularWeight,
              Ir = Qr.specularColor.equalsFloats(1, 1, 1) ? void 0 : Qr.specularColor.OWr();
            if (!ar && !Wr && void 0 === jr && void 0 === Ir) return rr(Sr);
            this._wasUsed = !0;
            const fr = {
                specularEdgeColorEnabled: !0
              },
              Er = {
                specularFactor: jr,
                specularTexture: Wr,
                specularColorFactor: Ir,
                specularColorTexture: ar,
                extensions: {}
              };
            Er.extensions.EXT_materials_specular_edge_color = fr, (Zr = this._exporter._glTF).extensionsUsed || (Zr.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Wr || ar) && this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions[Na] = Er
          }
          rr(Sr)
        }))
      }
    }
    let ta = !1;

    function ha() {
      ta || (ta = !0, RZ.RegisterExtension(Na, (rr => new Ua(rr))))
    }
    ha();
    const za = "KHR_materials_transmission";
    class Ya {
      constructor(rr) {
        this.name = za, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        const Zr = [];
        if (Qr instanceof gW) {
          if (this._isExtensionEnabled(Qr)) return Qr.subSurface.refractionIntensityTexture && Qr.subSurface.useGltfStyleTextures && Zr.push(Qr.subSurface.refractionIntensityTexture), Zr
        } else Qr instanceof sS && (Qr.transmissionWeight > 0 && Qr.transmissionWeightTexture && (Zr.push(Qr.transmissionWeightTexture), Qr.transmissionColorTexture && Zr.push(Qr.transmissionColorTexture)), Qr.subsurfaceWeight > 0 && Qr.subsurfaceWeightTexture && Zr.push(Qr.subsurfaceWeightTexture));
        return Zr
      }
      _isExtensionEnabled(rr) {
        if (rr instanceof sS && !rr.unlit) return rr.transmissionWeight > 0 || rr.subsurfaceWeight > 0;
        if (rr instanceof gW && !rr.unlit) {
          const Sr = rr.subSurface;
          return Sr.isRefractionEnabled && void 0 != Sr.refractionIntensity && 0 != Sr.refractionIntensity || null != Sr.refractionIntensityTexture && Sr.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(rr, Sr, Qr) {
        if (!this._isExtensionEnabled(Qr)) return Sr;
        if (Qr instanceof gW) {
          this._wasUsed = !0;
          const Zr = Qr.subSurface,
            Wr = {
              transmissionFactor: 0 === Zr.refractionIntensity ? void 0 : Zr.refractionIntensity
            };
          if (Zr.refractionIntensityTexture)
            if (Zr.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(Qr);
              const rr = this._exporter._materialExporter.getTextureInfo(Zr.refractionIntensityTexture);
              rr && (Wr.transmissionTexture = rr)
            } else Lr.c.Warn(`${rr}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          Sr.extensions || (Sr.extensions = {}), Sr.extensions[za] = Wr
        } else if (Qr instanceof sS) {
          this._wasUsed = !0;
          const rr = {
            transmissionFactor: (1 - Qr.transmissionWeight) * Qr.subsurfaceWeight + Qr.transmissionWeight
          };
          if (Qr.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Qr);
            const Sr = this._exporter._materialExporter.getTextureInfo(Qr.transmissionWeightTexture);
            Sr && (rr.transmissionTexture = Sr)
          } else if (Qr.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Qr);
            const Sr = this._exporter._materialExporter.getTextureInfo(Qr.subsurfaceWeightTexture);
            Sr && (rr.transmissionTexture = Sr)
          }
          if (0 == Qr.transmissionDepth && (!Qr.transmissionColor.equals(Fr.e.White()) || Qr.transmissionColorTexture) && Sr.pbrMetallicRoughness && (Sr.pbrMetallicRoughness.baseColorFactor || (Sr.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), Sr.pbrMetallicRoughness.baseColorFactor[0] *= Qr.transmissionColor.r, Sr.pbrMetallicRoughness.baseColorFactor[1] *= Qr.transmissionColor.g, Sr.pbrMetallicRoughness.baseColorFactor[2] *= Qr.transmissionColor.b, Qr.transmissionColorTexture && !Sr.pbrMetallicRoughness.baseColorTexture)) {
            const rr = this._exporter._materialExporter.getTextureInfo(Qr.transmissionColorTexture);
            rr && (Sr.pbrMetallicRoughness.baseColorTexture = rr, this._exporter._materialNeedsUVsSet.add(Qr))
          }
          Sr.extensions || (Sr.extensions = {}), Sr.extensions[za] = rr
        }
        return Sr
      }
    }
    let na = !1;

    function ea() {
      na || (na = !0, RZ.RegisterExtension(za, (rr => new Ya(rr))))
    }
    ea();
    var Ka = Qr(42103);
    const ya = "KHR_materials_unlit";
    class Ba {
      constructor() {
        this.name = ya, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((rr => {
          let Zr = !1;
          Qr instanceof gW ? Zr = Qr.unlit : Qr instanceof Ka.d && (Zr = Qr.disableLighting), Zr && (this._wasUsed = !0, null == Sr.extensions && (Sr.extensions = {}), Sr.extensions[ya] = {}), rr(Sr)
        }))
      }
    }
    let Ta = !1;

    function va() {
      Ta || (Ta = !0, RZ.RegisterExtension(ya, (() => new Ba)))
    }
    va();
    const Oa = "KHR_materials_volume";
    class La {
      constructor(rr) {
        this.name = Oa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        const Zr = [];
        if (Qr instanceof gW) {
          if (this._isExtensionEnabled(Qr)) return Qr.subSurface.thicknessTexture && Zr.push(Qr.subSurface.thicknessTexture), Zr
        } else Qr instanceof sS && (Qr.transmissionWeight > 0 || Qr.subsurfaceWeight > 0) && Qr.geometryThicknessTexture && Zr.push(Qr.geometryThicknessTexture);
        return Zr
      }
      _isExtensionEnabled(rr) {
        if (rr.unlit) return !1;
        const Sr = rr.subSurface;
        return !(!Sr.isRefractionEnabled && !Sr.isTranslucencyEnabled) && (void 0 != Sr.maximumThickness && 0 != Sr.maximumThickness || void 0 != Sr.tintColorAtDistance && Sr.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Sr.tintColor && Sr.tintColor != Fr.e.White() || this._hasTexturesExtension(rr))
      }
      _hasTexturesExtension(rr) {
        return null != rr.subSurface.thicknessTexture
      }
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((rr => {
          if (Qr instanceof gW && this._isExtensionEnabled(Qr)) {
            this._wasUsed = !0;
            const rr = Qr.subSurface,
              Zr = {
                thicknessFactor: 0 == rr.maximumThickness ? void 0 : rr.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(rr.thicknessTexture) ?? void 0,
                attenuationDistance: rr.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : rr.tintColorAtDistance,
                attenuationColor: rr.tintColor.equalsFloats(1, 1, 1) ? void 0 : rr.tintColor.OWr()
              };
            this._hasTexturesExtension(Qr) && this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions = Sr.extensions || {}, Sr.extensions[Oa] = Zr
          } else if (Qr instanceof sS) {
            const rr = Qr.transmissionWeight > 0 && !Qr.geometryThinWalled,
              Zr = Qr.subsurfaceWeight > 0 && !Qr.geometryThinWalled;
            if (rr || Zr) {
              this._wasUsed = !0;
              const Wr = Qr.geometryThickness,
                ar = this._exporter._materialExporter.getTextureInfo(Qr.geometryThicknessTexture) ?? void 0;
              let jr;
              ar && this._exporter._materialNeedsUVsSet.add(Qr);
              const Ir = Fr.e.White().OWr();
              if (rr && Qr.transmissionDepth > 0) {
                const rr = 1 / Qr.transmissionDepth;
                let Sr = new Gr.u(-Math.log(Qr.transmissionColor.r) * rr, -Math.log(Qr.transmissionColor.g) * rr, -Math.log(Qr.transmissionColor.b) * rr);
                const Zr = new Gr.u(Qr.transmissionScatter.r * rr, Qr.transmissionScatter.g * rr, Qr.transmissionScatter.b * rr),
                  Wr = Sr.subtract(Zr),
                  ar = Math.min(Wr.x, Wr.y, Wr.z);
                ar < 0 && (Wr.x = Wr.x - ar, Wr.y = Wr.y - ar, Wr.z = Wr.z - ar), Sr = Wr.add(Zr);
                jr = 1 / Math.max(Sr.x, Sr.y, Sr.z), Ir[0] = Math.exp(-Sr.x * jr), Ir[1] = Math.exp(-Sr.y * jr), Ir[2] = Math.exp(-Sr.z * jr)
              } else jr = Number.MAX_VALUE, Ir[0] = 1, Ir[1] = 1, Ir[2] = 1;
              let fr = 1;
              const Er = Fr.e.White().OWr();
              if (Zr) {
                const rr = Qr.subsurfaceRadius,
                  Sr = Qr.subsurfaceRadiusScale,
                  Zr = new Gr.u(Sr.r, Sr.g, Sr.b).multiplyByFloats(rr, rr, rr),
                  Wr = new Gr.u(1 / Math.max(Zr.x, 1e-6), 1 / Math.max(Zr.y, 1e-6), 1 / Math.max(Zr.z, 1e-6));
                fr = 1 / Math.max(Wr.x, Wr.y, Wr.z), Er[0] = Math.exp(-Wr.x * fr), Er[1] = Math.exp(-Wr.y * fr), Er[2] = Math.exp(-Wr.z * fr)
              }
              const pr = (1 - Qr.transmissionWeight) * Qr.subsurfaceWeight,
                xr = pr + Qr.transmissionWeight,
                mr = 1 / Math.max(xr, 1e-6),
                Nr = Qr.transmissionWeight * mr,
                Ur = pr * mr,
                tr = Ir.map(((rr, Sr) => rr * Nr + Er[Sr] * Ur)),
                hr = {
                  thicknessFactor: Wr,
                  thicknessTexture: ar,
                  attenuationDistance: jr * Nr + fr * Ur,
                  attenuationColor: tr
                };
              Sr.extensions = Sr.extensions || {}, Sr.extensions[Oa] = hr
            }
          }
          rr(Sr)
        }))
      }
    }
    let la = !1;

    function Xa() {
      la || (la = !0, RZ.RegisterExtension(Oa, (rr => new La(rr))))
    }
    Xa();
    const Pa = "KHR_materials_volume_scatter";
    class Ha {
      constructor(rr) {
        this.name = Pa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        const Zr = [];
        return Qr instanceof sS && (Qr.transmissionWeight > 0 && Qr.transmissionScatterTexture && Zr.push(Qr.transmissionScatterTexture), Qr.subsurfaceWeight > 0 && Qr.subsurfaceColorTexture && Zr.push(Qr.subsurfaceColorTexture)), Zr
      }
      _isExtensionEnabled(rr) {
        if (rr.unlit) return !1;
        const Sr = rr.transmissionWeight > 0 && !rr.geometryThinWalled && rr.transmissionDepth > 0 && !rr.transmissionScatter.equals(Fr.e.Black()),
          Qr = rr.subsurfaceWeight > 0 && !rr.geometryThinWalled;
        return !(!Sr && !Qr)
      }
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((rr => {
          if (Qr instanceof sS && this._isExtensionEnabled(Qr)) {
            this._wasUsed = !0;
            let rr = Gr.u.Zero(),
              Zr = 0;
            if (Qr.transmissionWeight > 0) {
              rr = function(rr) {
                const Sr = new Gr.u(Math.sqrt(1 - rr.x), Math.sqrt(1 - rr.y), Math.sqrt(1 - rr.z)),
                  Qr = new Gr.u(1, 1, 1),
                  Zr = Qr.subtract(Sr),
                  Wr = Qr.subtract(new Gr.u(.139, .139, .139).multiplyInPlace(Sr)),
                  ar = Qr.add(new Gr.u(1.17, 1.17, 1.17).multiplyInPlace(Sr));
                return Zr.multiplyInPlace(Wr).divideInPlace(ar)
              }(new Gr.u(Qr.transmissionScatter.r, Qr.transmissionScatter.g, Qr.transmissionScatter.b)), Zr = Qr.transmissionScatterAnisotropy
            }
            const Wr = Gr.u.Zero();
            let ar = 0;
            Qr.subsurfaceWeight > 0 && (Wr.set(Qr.subsurfaceColor.r, Qr.subsurfaceColor.g, Qr.subsurfaceColor.b), ar = Qr.subsurfaceScatterAnisotropy);
            const jr = (1 - Qr.transmissionWeight) * Qr.subsurfaceWeight,
              Ir = jr + Qr.transmissionWeight,
              fr = 1 / Math.max(Ir, 1e-6),
              Er = Qr.transmissionWeight * fr,
              pr = jr * fr,
              xr = {
                multiscatterColorFactor: rr.multiplyByFloats(Er, Er, Er).addInPlace(Wr.multiplyByFloats(pr, pr, pr)).OWr(),
                scatterAnisotropy: Zr * Er + ar * pr
              };
            if (Qr.subsurfaceWeight > 0 && Qr.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(Qr);
              const rr = this._exporter._materialExporter.getTextureInfo(Qr.subsurfaceColorTexture);
              rr && (xr.multiscatterColorTexture = rr)
            } else if (Qr.transmissionWeight > 0 && Qr.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(Qr);
              const rr = this._exporter._materialExporter.getTextureInfo(Qr.transmissionScatterTexture);
              rr && (xr.multiscatterColorTexture = rr)
            }
            Sr.extensions = Sr.extensions || {}, Sr.extensions[Pa] = xr
          }
          rr(Sr)
        }))
      }
    }
    let qa = !1;

    function Ra() {
      qa || (qa = !0, RZ.RegisterExtension(Pa, (rr => new Ha(rr)), 101))
    }
    Ra();
    const ga = "KHR_materials_diffuse_roughness";
    class Ca {
      constructor(rr) {
        this.name = ga, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = rr
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(rr, Sr, Qr) {
        const Zr = [];
        if (Qr instanceof yS) {
          if (Qr._baseDiffuseRoughness) return Qr._baseDiffuseRoughnessTexture && Zr.push(Qr._baseDiffuseRoughnessTexture), Zr
        } else if (Qr instanceof sS && Qr.baseDiffuseRoughness) return Qr.baseDiffuseRoughnessTexture && Zr.push(Qr.baseDiffuseRoughnessTexture), Zr;
        return []
      }
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((rr => {
          let Zr = null,
            Wr = null;
          if (Qr instanceof yS ? (Zr = Qr._baseDiffuseRoughness, Wr = Qr._baseDiffuseRoughnessTexture) : Qr instanceof sS && (Zr = Qr.baseDiffuseRoughness, Wr = Qr.baseDiffuseRoughnessTexture), !Zr) return void rr(Sr);
          this._wasUsed = !0, Sr.extensions = Sr.extensions || {};
          const ar = {
            diffuseRoughnessFactor: Zr,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Wr) ?? void 0
          };
          null !== ar.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(Qr), Sr.extensions[ga] = ar, rr(Sr)
        }))
      }
    }
    let Ma = !1;

    function Ga() {
      Ma || (Ma = !0, RZ.RegisterExtension(ga, (rr => new Ca(rr))))
    }
    Ga();
    const ka = "KHR_materials_openpbr";
    class Aa {
      constructor() {
        this.name = ka, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(rr, Sr, Qr) {
        return new Promise((rr => {
          Qr instanceof sS && (this._wasUsed = !0, Sr.extensions = Sr.extensions || {}, Sr.extensions[ka] = {}), rr(Sr)
        }))
      }
    }
    let Va = !1;

    function ia() {
      Va || (Va = !0, RZ.RegisterExtension(ka, (() => new Aa)))
    }
    ia();
    const wa = "KHR_texture_transform";
    class ca {
      constructor() {
        this.name = wa, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(rr, Sr, Qr) {
        if (Qr.eC() || TS.h.Warn(`${rr}: "scene" is not defined for Babylon texture ${Qr.name}!`), (0 !== Qr.uAng || 0 !== Qr.vAng) && (TS.h.Warn(`${rr}: Texture ${Qr.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== Qr.uRotationCenter || 0 !== Qr.vRotationCenter)) return;
        const Zr = {};
        let Wr = !1;
        if (0 === Qr.uOffset && 0 === Qr.vOffset || (Zr.offset = [Qr.uOffset, Qr.vOffset], Wr = !0), 1 === Qr.uScale && 1 === Qr.vScale || (Zr.scale = [Qr.uScale, Qr.vScale], Wr = !0), 0 !== Qr.wAng) {
          if (0 !== Qr.uRotationCenter || 0 !== Qr.vRotationCenter) {
            if (Qr.homogeneousRotationInUVTransform && Qr.uScale !== Qr.vScale) return void TS.h.Warn(`${rr}: Texture ${Qr.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${wa}.`);
            TS.h.Warn(`${rr}: Texture ${Qr.name} with non-origin rotation center will be exported using an adjusted offset with ${wa}.`), Zr.offset = function(rr) {
              const {
                uOffset: Sr,
                vOffset: Qr,
                uRotationCenter: Zr,
                vRotationCenter: Wr,
                uScale: ar,
                vScale: jr,
                wAng: Ir
              } = rr, fr = Math.cos(Ir), Er = Math.sin(Ir), pr = Zr * ar, xr = Wr * jr;
              return [Sr + (pr * (1 - fr) + xr * Er), Qr + (xr * (1 - fr) - pr * Er)]
            }(Qr)
          }
          Zr.rotation = -Qr.wAng, Wr = !0
        }
        0 !== Qr.coordinatesIndex && (Zr.texCoord = Qr.coordinatesIndex, Wr = !0), Wr && (this._wasUsed = !0, Sr.extensions || (Sr.extensions = {}), Sr.extensions[wa] = Zr)
      }
    }
    let Fa = !1;

    function oa() {
      Fa || (Fa = !0, RZ.RegisterExtension(wa, (() => new ca)))
    }
    oa();
    var ba = Qr(41898);
    const Ja = "KHR_texture_basisu";
    class Da {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(rr) {
        this.name = Ja, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = rr
      }
      dispose() {}
      postExportTexture(rr, Sr) {
        const Qr = this._exporter._textures[Sr.index],
          Zr = Qr.source;
        if (void 0 === Zr) return;
        const Wr = this._exporter._images[Zr];
        "image/ktx2" === (Wr.mimeType || (0, ba.g)(Wr.uri)) && (Qr.source = void 0, Qr.extensions || (Qr.extensions = {}), Qr.extensions[Ja] = {
          source: Zr
        }, this._wasUsed = !0)
      }
    }
    let da = !1;

    function sa() {
      da || (da = !0, RZ.RegisterExtension(Ja, (rr => new Da(rr))))
    }
    sa();
    const ua = "EXT_texture_webp";
    class rj {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(rr) {
        this.name = ua, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = rr
      }
      dispose() {}
      postExportTexture(rr, Sr) {
        const Qr = this._exporter._textures[Sr.index],
          Zr = Qr.source;
        if (void 0 === Zr) return;
        const Wr = this._exporter._images[Zr];
        "image/webp" === (Wr.mimeType || (0, ba.g)(Wr.uri)) && (Qr.source = void 0, Qr.extensions || (Qr.extensions = {}), Qr.extensions[ua] = {
          source: Zr
        }, this._wasUsed = !0)
      }
    }
    let Sj = !1;

    function Qj() {
      Sj || (Sj = !0, RZ.RegisterExtension(ua, (rr => new rj(rr))))
    }
    Qj();
    const Zj = "EXT_texture_avif";
    class Wj {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(rr) {
        this.name = Zj, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = rr
      }
      dispose() {}
      postExportTexture(rr, Sr) {
        const Qr = this._exporter._textures[Sr.index],
          Zr = Qr.source;
        if (void 0 === Zr) return;
        const Wr = this._exporter._images[Zr];
        "image/avif" === (Wr.mimeType || (0, ba.g)(Wr.uri)) && (Qr.source = void 0, Qr.extensions || (Qr.extensions = {}), Qr.extensions[Zj] = {
          source: Zr
        }, this._wasUsed = !0)
      }
    }
    let aj = !1;

    function jj() {
      aj || (aj = !0, RZ.RegisterExtension(Zj, (rr => new Wj(rr))))
    }
    jj();
    class Ij {
      static CreateSTL(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Wr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ar = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          jr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Ir = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          fr = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Er = function(rr, Sr, Qr) {
            const Wr = [3 * rr[Qr], 3 * rr[Qr + 1], 3 * rr[Qr + 2]],
              ar = [new Zr.kU(Sr[Wr[0]], Sr[Wr[0] + 2], Sr[Wr[0] + 1]), new Zr.kU(Sr[Wr[1]], Sr[Wr[1] + 2], Sr[Wr[1] + 1]), new Zr.kU(Sr[Wr[2]], Sr[Wr[2] + 2], Sr[Wr[2] + 1])],
              jr = ar[0].subtract(ar[1]),
              Ir = ar[2].subtract(ar[1]);
            return {
              v: ar,
              n: Zr.kU.Cross(Ir, jr).normalize()
            }
          },
          xr = function(rr, Sr, Qr, Zr) {
            return Sr = mr(rr, Sr, Qr.x, Zr), Sr = mr(rr, Sr, Qr.y, Zr), mr(rr, Sr, Qr.z, Zr)
          },
          mr = function(rr, Sr, Qr, Zr) {
            return rr.setFloat32(Sr, Qr, Zr), Sr + 4
          },
          Ur = function(rr) {
            if (Ir) {
              let Sr = rr;
              rr instanceof Nr.e && (Sr = rr.Rar);
              const Qr = Sr.getVerticesData(pr.g.PositionKind, !0, !0);
              if (!Qr) return [];
              const Wr = Zr.kU.Zero();
              let ar;
              for (ar = 0; ar < Qr.length; ar += 3) Zr.kU.TransformCoordinatesFromFloatsToRef(Qr[ar], Qr[ar + 1], Qr[ar + 2], rr.computeWorldMatrix(!0), Wr).toArray(Qr, ar);
              return Qr
            }
            return rr.getVerticesData(pr.g.PositionKind) || []
          };
        Ir && (jr = !0);
        let tr = "",
          hr = 0,
          zr = 0;
        if (Wr) {
          for (let Qr = 0; Qr < rr.length; Qr++) {
            const Sr = rr[Qr].yar();
            hr += Sr ? Sr.length / 3 : 0
          }
          const Sr = new ArrayBuffer(84 + 50 * hr);
          tr = new DataView(Sr), zr += 80, tr.setUint32(zr, hr, ar), zr += 4
        } else fr || (tr = "solid stlmesh\r\n");
        for (let Zr = 0; Zr < rr.length; Zr++) {
          const Sr = rr[Zr];
          !Wr && fr && (tr += "solid " + Sr.name + "\r\n"), !jr && Sr instanceof EZ.d && Sr.bakeCurrentTransformIntoVertices();
          const Qr = Ur(Sr),
            Ir = Sr.yar() || [];
          for (let rr = 0; rr < Ir.length; rr += 3) {
            const Sr = Er(Ir, Qr, rr);
            Wr ? (zr = xr(tr, zr, Sr.n, ar), zr = xr(tr, zr, Sr.v[0], ar), zr = xr(tr, zr, Sr.v[1], ar), zr = xr(tr, zr, Sr.v[2], ar), zr += 2) : (tr += "\tfacet normal " + Sr.n.x + " " + Sr.n.y + " " + Sr.n.z + "\r\n", tr += "\t\touter loop\r\n", tr += "\t\t\tvertex " + Sr.v[0].x + " " + Sr.v[0].y + " " + Sr.v[0].z + "\r\n", tr += "\t\t\tvertex " + Sr.v[1].x + " " + Sr.v[1].y + " " + Sr.v[1].z + "\r\n", tr += "\t\t\tvertex " + Sr.v[2].x + " " + Sr.v[2].y + " " + Sr.v[2].z + "\r\n", tr += "\t\tendloop\r\n", tr += "\tendfacet\r\n")
          }!Wr && fr && (tr += "endsolid " + name + "\r\n")
        }
        if (Wr || fr || (tr += "endsolid stlmesh"), Sr) {
          const rr = document.createElement("a"),
            Sr = new Blob([tr], {
              type: "application/octet-stream"
            });
          rr.href = window.URL.createObjectURL(Sr), rr.download = Qr + ".stl", rr.click()
        }
        return tr
      }
    }

    function fj(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Wr = [];
      for (let ar = 0; ar < rr.length / Qr; ar++) {
        const jr = rr[ar * Qr] * (Zr ? -1 : 1),
          Ir = rr[ar * Qr + 1],
          fr = rr[ar * Qr + 2];
        Wr.push(`(${jr.toPrecision(Sr.precision)}, ${Ir.toPrecision(Sr.precision)}, ${fr.toPrecision(Sr.precision)})`)
      }
      return Wr.join(", ")
    }

    function Ej(rr, Sr) {
      const Qr = [];
      for (let Zr = 0; Zr < rr.length / 2; Zr++) {
        const Wr = rr[2 * Zr],
          ar = rr[2 * Zr + 1];
        Qr.push(`(${Wr.toPrecision(Sr.precision)}, ${(1-ar).toPrecision(Sr.precision)})`)
      }
      return Qr.join(", ")
    }

    function pj(rr, Sr, Qr, Zr) {
      const Wr = rr.getVerticesData(pr.g.PositionKind),
        ar = rr.getVerticesData(pr.g.NormalKind);
      if (Wr && ar) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${Qr}"\n\t\tint[] faceVertexCounts = [${function(rr){const Sr=rr.yar()?.length?rr.getTotalIndices():rr.getTotalVertices();return Array(Sr/3).fill(3).join(", ")}(rr)}]\n\t\tint[] faceVertexIndices = [${function(rr){const Sr=rr.yar(),Qr=Sr?.length??rr.getTotalVertices(),Zr=[];if(null!==Sr)for(let Wr=0;Wr<Qr;Wr++)Zr.push(Sr[Wr]);else for(let Wr=0;Wr<Qr;Wr++)Zr.push(Wr);return Zr.join(", ")}(rr)}]\n\t\tnormal3f[] normals = [${fj(ar,Sr,void 0,Zr)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${fj(Wr,Sr,void 0,Zr)}]\n        ${function(rr,Sr){let Qr="";for(let Wr=0;Wr<4;Wr++){const Zr=Wr>0?Wr:"",ar=rr.getVerticesData(pr.g.UVKind+(Zr?Zr+1:""));ar&&(Qr+=`\n\t\ttexCoord2f[] primvars:st${Zr} = [${Ej(ar,Sr)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Zr=rr.getVerticesData(pr.g.ColorKind);return Zr&&(Qr+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        fj(Zr, Sr, Zr.length / rr.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),Qr}(rr,Sr)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function xj(rr, Sr, Qr, Zr) {
      return `\n        def "Geometry"\n        {\n        ${pj(rr,Sr,Qr,Zr)}\n        }\n        `
    }

    function mj(rr) {
      let Sr = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return Sr += rr, fflate.strToU8(Sr)
    }

    function Nj(rr) {
      const Sr = rr.m;
      return `( ${Uj(Sr,0)}, ${Uj(Sr,4)}, ${Uj(Sr,8)}, ${Uj(Sr,12)} )`
    }

    function Uj(rr, Sr) {
      return `(${rr[Sr+0]}, ${rr[Sr+1]}, ${rr[Sr+2]}, ${rr[Sr+3]})`
    }

    function tj(rr, Sr) {
      const Qr = "Object_" + rr.uniqueId,
        Zr = Nj(Sr);
      return `def Xform "${Qr}" (\n\tprepend references = @./geometries/Geometry_${rr.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Zr}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${rr.material.uniqueId}>\n}\n\n`
    }

    function hj(rr) {
      switch (rr) {
        case Br.d.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case Br.d.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case Br.d.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function zj(rr) {
      return `(${rr.x}, ${rr.y})`
    }

    function Yj(rr) {
      return `(${rr.r}, ${rr.g}, ${rr.b})`
    }

    function nj(rr) {
      return "image/jpeg" === rr || "image/png" === rr
    }

    function ej(rr, Sr, Qr, Wr, ar, jr) {
      const Ir = rr.getInternalTexture().uniqueId + "_" + rr.invertY,
        Er = rr.mimeType || (0, fr.e)(rr.getInternalTexture()?.url ?? ""),
        pr = nj(Er) ? Er : "image/png",
        xr = "image/jpeg" === pr ? "jpg" : "png";
      ar[Ir] = {
        texture: rr,
        mimeType: pr,
        ext: xr
      };
      const mr = rr.coordinatesIndex > 0 ? "st" + rr.coordinatesIndex : "st",
        Nr = new Zr.Vector2(rr.uScale, rr.vScale),
        Ur = new Zr.Vector2(rr.uOffset, rr.vOffset),
        tr = rr.wAng,
        hr = Math.sin(tr),
        zr = Math.cos(tr);
      return Ur.y = 1 - Ur.y - Nr.y, Ur.x += hr * Nr.x, Ur.y += (1 - zr) * Nr.y, `\n    def Shader "PrimvarReader_${Qr}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${mr}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${Qr}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${Sr.uniqueId}/PrimvarReader_${Qr}.outputs:result>\n        float inputs:rotation = ${(tr*(180/Math.PI)).toFixed(jr.precision)}\n        float2 inputs:scale = ${zj(Nr)}\n        float2 inputs:translation = ${zj(Ur)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${rr.uniqueId}_${Qr}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${Ir}.${xr}@\n        float2 inputs:st.connect = </Root/Materials/Material_${Sr.uniqueId}/Transform2d_${Qr}.outputs:result>\n        ${Wr?"float4 inputs:scale = "+function(rr){return`(${rr.r}, ${rr.g}, ${rr.b}, 1.0)`}(Wr):""}\n        token inputs:sourceColorSpace = "${rr.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${hj(rr.wrapU)}"\n        token inputs:wrapT = "${hj(rr.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${Sr.needAlphaBlending()||Sr.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function Kj(rr, Sr, Qr) {
      const Zr = "\t\t\t",
        Wr = [],
        ar = [],
        {
          diffuseMap: jr,
          diffuse: Ir,
          alphaCutOff: fr,
          emissiveMap: Er,
          emissive: pr,
          normalMap: xr,
          roughnessMap: mr,
          roughnessChannel: Nr,
          roughness: Ur,
          metalnessMap: tr,
          metalnessChannel: zr,
          metalness: Yr,
          aoMap: nr,
          aoMapChannel: er,
          aoMapIntensity: Kr,
          alphaMap: yr,
          ior: Br,
          clearCoatEnabled: Tr,
          clearCoat: vr,
          clearCoatMap: Or,
          clearCoatRoughness: Lr,
          clearCoatRoughnessMap: lr
        } = function(rr) {
          const Sr = {
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
          return rr instanceof aZ.StandardMaterial ? {
            ...Sr,
            diffuseMap: rr.diffuseTexture,
            diffuse: rr.diffuseColor,
            alphaCutOff: rr.alphaCutOff,
            emissiveMap: rr.emissiveTexture,
            emissive: rr.emissiveColor,
            roughness: 1,
            alphaMap: rr.opacityTexture
          } : rr instanceof yS ? {
            ...Sr,
            diffuseMap: rr._albedoTexture,
            diffuse: rr._albedoColor,
            alphaCutOff: rr._alphaCutOff,
            emissiveMap: rr._emissiveTexture,
            emissive: rr._emissiveColor,
            normalMap: rr._bumpTexture,
            roughnessMap: rr._metallicTexture,
            roughnessChannel: rr._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: rr._roughness ?? 1,
            metalnessMap: rr._metallicTexture,
            metalnessChannel: rr._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: rr._metallic ?? 0,
            aoMap: rr._ambientTexture,
            aoMapChannel: rr._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: rr._ambientTextureStrength,
            alphaMap: rr._opacityTexture,
            ior: rr.subSurface.indexOfRefraction,
            clearCoatEnabled: rr.clearCoat.isEnabled,
            clearCoat: rr.clearCoat.intensity,
            clearCoatMap: rr.clearCoat.texture,
            clearCoatRoughness: rr.clearCoat.roughness,
            clearCoatRoughnessMap: rr.clearCoat.useRoughnessFromMainTexture ? rr.clearCoat.texture : rr.clearCoat.textureRoughness
          } : Sr
        }(rr);
      return null !== jr ? (Wr.push(`${Zr}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${rr.uniqueId}/Texture_${jr.uniqueId}_diffuse.outputs:rgb>`), rr.needAlphaBlending() ? Wr.push(`${Zr}float inputs:opacity.connect = </Root/Materials/Material_${rr.uniqueId}/Texture_${jr.uniqueId}_diffuse.outputs:a>`) : rr.needAlphaTesting() && (Wr.push(`${Zr}float inputs:opacity.connect = </Root/Materials/Material_${rr.uniqueId}/Texture_${jr.uniqueId}_diffuse.outputs:a>`), Wr.push(`${Zr}float inputs:opacityThreshold = ${fr}`)), ar.push(ej(jr, rr, "diffuse", Ir, Sr, Qr))) : Wr.push(`${Zr}color3f inputs:diffuseColor = ${Yj(Ir||hr.Color3.White())}`), null !== Er ? (Wr.push(`${Zr}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${rr.uniqueId}/Texture_${Er.uniqueId}_emissive.outputs:rgb>`), ar.push(ej(Er, rr, "emissive", pr, Sr, Qr))) : pr && pr.toLuminance() > 0 && Wr.push(`${Zr}color3f inputs:emissiveColor = ${Yj(pr)}`), null !== xr && (Wr.push(`${Zr}normal3f inputs:normal.connect = </Root/Materials/Material_${rr.uniqueId}/Texture_${xr.uniqueId}_normal.outputs:rgb>`), ar.push(ej(xr, rr, "normal", null, Sr, Qr))), null !== nr && (Wr.push(`${Zr}float inputs:occlusion.connect = </Root/Materials/Material_${rr.uniqueId}/Texture_${nr.uniqueId}_occlusion.outputs:${er}>`), ar.push(ej(nr, rr, "occlusion", new hr.Color3(Kr, Kr, Kr), Sr, Qr))), null !== mr ? (Wr.push(`${Zr}float inputs:roughness.connect = </Root/Materials/Material_${rr.uniqueId}/Texture_${mr.uniqueId}_roughness.outputs:${Nr}>`), ar.push(ej(mr, rr, "roughness", new hr.Color3(Ur, Ur, Ur), Sr, Qr))) : Wr.push(`${Zr}float inputs:roughness = ${Ur}`), null !== tr ? (Wr.push(`${Zr}float inputs:metallic.connect = </Root/Materials/Material_${rr.uniqueId}/Texture_${tr.uniqueId}_metallic.outputs:${zr}>`), ar.push(ej(tr, rr, "metallic", new hr.Color3(Yr, Yr, Yr), Sr, Qr))) : Wr.push(`${Zr}float inputs:metallic = ${Yr}`), null !== yr ? (Wr.push(`${Zr}float inputs:opacity.connect = </Root/Materials/Material_${rr.uniqueId}/Texture_${yr.uniqueId}_opacity.outputs:r>`), Wr.push(`${Zr}float inputs:opacityThreshold = 0.0001`), ar.push(ej(yr, rr, "opacity", null, Sr, Qr))) : Wr.push(`${Zr}float inputs:opacity = ${rr.alpha}`), Tr && (null !== Or ? (Wr.push(`${Zr}float inputs:clearcoat.connect = </Root/Materials/Material_${rr.uniqueId}/Texture_${Or.uniqueId}_clearcoat.outputs:r>`), ar.push(ej(Or, rr, "clearcoat", new hr.Color3(vr, vr, vr), Sr, Qr))) : Wr.push(`${Zr}float inputs:clearcoat = ${vr}`), null !== lr ? (Wr.push(`${Zr}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${rr.uniqueId}/Texture_${lr.uniqueId}_clearcoatRoughness.outputs:g>`), ar.push(ej(lr, rr, "clearcoatRoughness", new hr.Color3(Lr, Lr, Lr), Sr, Qr))) : Wr.push(`${Zr}float inputs:clearcoatRoughness = ${Lr}`)), Wr.push(`${Zr}float inputs:ior = ${Br}`), `\n\tdef Material "Material_${rr.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Wr.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${rr.uniqueId}/PreviewSurface.outputs:surface>\n\n${ar.join("\n")}\n\n\t}\n`
    }

    function yj(rr) {
      rr.computeWorldMatrix(!0);
      const Sr = rr.getWorldMatrix().clone(),
        Qr = rr.eC().useRightHandedSystem;
      let Zr = rr.material?._getEffectiveOrientation(rr) ?? rr.sideOrientation,
        jr = !Qr,
        Ir = rr.parent;
      for (; Ir;) {
        if (gQ(Ir, Qr) && null === Ir.parent) {
          Qr || (Sr.multiplyToRef(Ir.getWorldMatrix().invert(), Sr), Zr = Zr === ar.d.ClockWiseSideOrientation ? ar.d.CounterClockWiseSideOrientation : ar.d.ClockWiseSideOrientation), jr = !1;
          break
        }
        Ir = Ir.parent
      }
      return Sr.determinant() < 0 && Wr.Tools.Warn(`Mesh ${rr.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: Sr,
        windingOrder: Zr === ar.d.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: jr
      }
    }
    async function Bj(rr, Sr, Qr) {
      const ar = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...Sr
      };
      "undefined" === typeof fflate && await Wr.Tools.LoadScriptAsync(ar.fflateUrl);
      const jr = {};
      jr[ar.modelFileName] = null;
      let Ir = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      Ir += function(rr) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===rr.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${rr.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${rr.planeAnchoringAlignment}"`:""}\n            `
      }(ar);
      const fr = {};
      for (const Zr of rr.meshes) {
        if (0 === Zr.getTotalVertices()) continue;
        const rr = Zr,
          Sr = rr.geometry,
          Er = rr.material;
        if (!Er || !Sr || Qr && !Qr(rr)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Er.getClassName())) {
          const Qr = "geometries/Geometry_" + Sr.uniqueId + ".usda",
            {
              matrix: Zr,
              windingOrder: Wr,
              convertToRightHanded: pr
            } = yj(rr);
          if (!(Qr in jr)) {
            const rr = xj(Sr, ar, Wr, pr);
            jr[Qr] = mj(rr)
          }
          Er.uniqueId in fr || (fr[Er.uniqueId] = Er), Ir += tj(rr, Zr)
        } else Wr.Tools.Warn("USDZExportAsync does not support this material type: " + Er.getClassName())
      }
      rr.activeCamera && ar.exportCamera && (Ir += function(rr, Sr) {
        const Qr = "Camera_" + rr.uniqueId,
          Wr = Nj(Zr.Matrix.RotationY(Math.PI).multiply(rr.getWorldMatrix()));
        if (rr.mode === Br.d.ORTHOGRAPHIC_CAMERA) return `def Camera "${Qr}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Wr}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${rr.minZ.toPrecision(Sr.precision)}, ${rr.maxZ.toPrecision(Sr.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(rr.orthoLeft||1)+Math.abs(rr.orthoRight||1))).toPrecision(Sr.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(rr.orthoTop||1)+Math.abs(rr.orthoBottom||1))).toPrecision(Sr.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Zr = rr.MU().getAspectRatio(rr),
            ar = Sr.cameraSensorWidth || 35;
          return `def Camera "${Qr}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Wr}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${rr.minZ.toPrecision(Sr.precision)}, ${rr.maxZ.toPrecision(Sr.precision)})\n\t\t\tfloat focalLength = ${(ar/(2*Math.tan(.5*rr.fov))).toPrecision(Sr.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(ar*Zr).toPrecision(Sr.precision)}\n\t\t\tfloat verticalAperture = ${(ar/Zr).toPrecision(Sr.precision)}            \n\t\t}\n\t\n\t`
        }
      }(rr.activeCamera, ar)), Ir += "\n            }\n        }";
      const Er = {};
      Ir += function(rr, Sr, Qr) {
        const Zr = [];
        for (const Wr in rr) {
          const ar = rr[Wr];
          Zr.push(Kj(ar, Sr, Qr))
        }
        return `\n    def "Materials"\n{\n${Zr.join("")}\n}\n\n`
      }(fr, Er, ar), Ir += "\n    }", jr[ar.modelFileName] = fflate.strToU8(Ir);
      for (const Zr in Er) {
        const {
          texture: rr,
          ext: Sr,
          mimeType: Qr
        } = Er[Zr], Wr = await zQ(rr);
        if (Wr && nj(Wr.mimeType) && Wr.mimeType === Qr) jr[`textures/Texture_${Zr}.${Sr}`] = new Uint8Array(Wr.data);
        else {
          const Wr = rr.getSize(),
            ar = await (0, er.g)(rr),
            Ir = await Tr.DumpTools.DumpDataAsync(Wr.width, Wr.height, ar, Qr, void 0, !1, !0);
          jr[`textures/Texture_${Zr}.${Sr}`] = new Uint8Array(Ir).slice()
        }
      }
      let pr = 0;
      for (const Zr in jr) {
        const rr = jr[Zr];
        if (!rr) continue;
        pr += 34 + Zr.length;
        const Sr = 63 & pr;
        if (4 !== Sr) {
          const Qr = new Uint8Array(64 - Sr);
          jr[Zr] = [rr, {
            extra: {
              12345: Qr
            }
          }]
        }
        pr = rr.length
      }
      return fflate.zipSync(jr, {
        level: 0
      })
    }
    var Tj = Qr(42961);
    class vj {
      static Export(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        if (!rr || 0 === rr.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Zr = Sr;
        Sr && 0 !== Sr.length || (Zr = rr.animations.map((rr => rr.name)));
        let Wr = null;
        for (const Er of Zr) {
          const Sr = rr.getAnimationRange(Er);
          Sr && (Wr = Wr ? new Tj.b("animation-range", Math.min(Wr.from, Sr.from), Math.max(Wr.to, Sr.to)) : Sr)
        }
        if (!Wr && (rr.animations.length > 0 && (Wr = rr.getAnimationRange(rr.animations[0].name)), !Wr)) throw new Error("No animation range found in skeleton");
        const ar = Qr || 1 / (rr.animations[0]?.framePerSecond || 30),
          jr = this._BuildBoneHierarchy(rr, Zr);
        let Ir = 0;
        for (const Er of jr) Er.positionKeys.length > 0 && (Ir = Math.max(Ir, Er.positionKeys.length)), Er.rotationKeys.length > 0 && (Ir = Math.max(Ir, Er.rotationKeys.length));
        0 === Ir && (Ir = Math.floor((Wr.to - Wr.from) / ar) + 1);
        let fr = "";
        return fr += "HIERARCHY\n", fr += this._ExportHierarchy(jr, 0), fr += "MOTION\n", fr += `Frames: ${Ir}\n`, fr += `Frame Time: ${ar.toFixed(6)}\n`, fr += this._ExportMotionData(jr, Ir, 0, Zr), fr
      }
      static _BuildBoneHierarchy(rr, Sr) {
        const Qr = new Map,
          Zr = [];
        for (const Wr of rr.bones) {
          const rr = {
            bone: Wr,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          Qr.set(Wr, rr)
        }
        for (const Wr of rr.bones) {
          const rr = Qr.get(Wr);
          if (Wr.animations.length > 0)
            for (const Qr of Wr.animations) Sr.includes(Qr.name) && ("position" === Qr.targetProperty ? (rr.hasPositionChannels = !0, rr.positionKeys.push(...Qr.getKeys())) : "rotationQuaternion" === Qr.targetProperty && (rr.hasRotationChannels = !0, rr.rotationKeys.push(...Qr.getKeys())));
          if (Wr.getParent()) {
            const Sr = Qr.get(Wr.getParent());
            Sr && Sr.children.push(rr)
          } else Zr.push(rr)
        }
        return Zr
      }
      static _ExportHierarchy(rr, Sr) {
        let Qr = "";
        const Zr = "    ".repeat(Sr);
        for (const Wr of rr) {
          const rr = Wr.bone;
          if (this._IsEndSite(Wr)) {
            Qr += `${Zr}End Site\n`, Qr += `${Zr}{\n`;
            const Sr = this._GetBoneOffset(rr);
            Qr += `${Zr}    OFFSET ${Sr.x.toFixed(6)} ${Sr.y.toFixed(6)} ${Sr.z.toFixed(6)}\n`, Qr += `${Zr}}\n`
          } else {
            Qr += `${0===Sr?"ROOT":`${Zr}JOINT`} ${rr.name}\n`, Qr += `${Zr}{\n`;
            const ar = this._GetBoneOffset(rr);
            Qr += `${Zr}    OFFSET ${ar.x.toFixed(6)} ${ar.y.toFixed(6)} ${ar.z.toFixed(6)}\n`;
            const jr = [];
            Wr.hasPositionChannels && jr.push("Xposition", "Yposition", "Zposition"), Wr.hasRotationChannels && jr.push("Zrotation", "Xrotation", "Yrotation"), jr.length > 0 && (Qr += `${Zr}    CHANNELS ${jr.length} ${jr.join(" ")}\n`), Wr.children.length > 0 && (Qr += this._ExportHierarchy(Wr.children, Sr + 1)), Qr += `${Zr}}\n`
          }
        }
        return Qr
      }
      static _IsEndSite(rr) {
        return 0 === rr.children.length
      }
      static _GetBoneOffset(rr) {
        try {
          if (!rr.getParent()) return rr.getRestMatrix().getTranslation();
          return rr.getLocalMatrix().getTranslation()
        } catch (Sr) {
          return Zr.kU.Zero()
        }
      }
      static _ExportMotionData(rr, Sr, Qr, Zr) {
        let Wr = "";
        for (let ar = 0; ar < Sr; ar++) {
          const Sr = [];
          this._CollectFrameValues(rr, ar + Qr, Sr, Zr), Wr += Sr.map((rr => rr.toFixed(6))).join(" ") + "\n"
        }
        return Wr
      }
      static _CollectFrameValues(rr, Sr, Qr, Zr) {
        for (const Wr of rr)
          if (!this._IsEndSite(Wr)) {
            if (Wr.hasPositionChannels) {
              const rr = this._GetPositionAtFrameIndex(Wr.positionKeys, Sr);
              Qr.push(rr.x, rr.y, rr.z)
            }
            if (Wr.hasRotationChannels) {
              const rr = this._GetRotationAtFrameIndex(Wr.rotationKeys, Sr),
                Zr = this._QuaternionToEuler(rr);
              Qr.push(Zr.z, Zr.x, Zr.y)
            }
            Wr.children.length > 0 && this._CollectFrameValues(Wr.children, Sr, Qr, Zr)
          }
      }
      static _GetPositionAtFrameIndex(rr, Sr) {
        if (0 === rr.length) return Zr.kU.Zero();
        return rr[Math.max(0, Math.min(Sr, rr.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(rr, Sr) {
        if (0 === rr.length) return Zr.Quaternion.Identity();
        return rr[Math.max(0, Math.min(Sr, rr.length - 1))].value.clone()
      }
      static _QuaternionToEuler(rr) {
        const Sr = new Zr.Matrix;
        rr.toRotationMatrix(Sr);
        const Qr = Sr.m;
        let ar, jr, Ir;
        const fr = Math.sqrt(Qr[0] * Qr[0] + Qr[1] * Qr[1]);
        return fr > qQ.e ? (ar = Math.atan2(Qr[6], Qr[10]), jr = Math.atan2(-Qr[2], fr), Ir = Math.atan2(Qr[1], Qr[0])) : (ar = Math.atan2(-Qr[9], Qr[5]), jr = Math.atan2(-Qr[2], fr), Ir = 0), new Zr.kU(Wr.Tools.ToDegrees(ar), Wr.Tools.ToDegrees(jr), Wr.Tools.ToDegrees(Ir))
      }
    }

    function Oj(rr) {
      return "string" === typeof rr?.name
    }
    const Lj = Symbol("__xml:meta$__"),
      lj = Symbol("__xml:name$__");

    function Xj(rr, Sr) {
      Object.prototype.hasOwnProperty.call(rr.metadata, Lj) || (rr.metadata[Lj] = []), rr.metadata[Lj].push(Sr)
    }

    function Pj(rr) {
      return (Sr, Qr) => {
        Sr[lj] = rr
      }
    }

    function Hj() {
      return (rr, Sr) => Xj(Sr, {
        kind: "none",
        prop: String(Sr.name),
        ignore: !0
      })
    }

    function qj(rr) {
      return (Sr, Qr) => Xj(Qr, {
        kind: "attr",
        prop: String(Qr.name),
        ...rr
      })
    }

    function Rj(rr) {
      return (Sr, Qr) => Xj(Qr, {
        kind: "elem",
        prop: String(Qr.name),
        ...rr
      })
    }

    function gj(rr) {
      const Sr = "function" === typeof rr ? rr : rr?.constructor,
        Qr = Sr?.[Symbol.metadata];
      if (!Qr) return [];
      const Zr = [];
      let Wr = Qr;
      for (; Wr;) Object.prototype.hasOwnProperty.call(Wr, Lj) && Zr.push(...Wr[Lj]), Wr = Object.getPrototypeOf(Wr);
      return Zr
    }

    function Cj(rr) {
      const Sr = rr?.constructor?.[lj];
      return Sr || void 0
    }

    function Mj(rr) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(rr)
    }

    function Gj(rr) {
      if (Oj(rr)) return rr;
      const Sr = (rr ?? "").trim();
      if (!Sr) return {
        name: ""
      };
      const Qr = Sr.indexOf(":");
      if (-1 === Qr) return {
        name: Sr
      };
      if (-1 !== Sr.indexOf(":", Qr + 1)) return {
        name: Sr
      };
      const Zr = Sr.slice(0, Qr),
        Wr = Sr.slice(Qr + 1);
      return Mj(Zr) && Mj(Wr) ? {
        ns: Zr,
        name: Wr
      } : {
        name: Sr
      }
    }

    function kj(rr, Sr) {
      return Sr ? `${Sr}:${rr}` : rr
    }
    const Aj = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      Vj = Object.freeze({
        number: Aj
      });

    function ij(rr) {
      const Sr = rr?.eps ?? Aj.eps;
      return {
        eps: Sr,
        maxDecimalsCap: rr?.maxDecimalsCap ?? Aj.maxDecimalsCap,
        trimTrailingZeros: rr?.trimTrailingZeros ?? Aj.trimTrailingZeros,
        fixedDecimals: rr?.fixedDecimals,
        allowScientific: rr?.allowScientific ?? Aj.allowScientific,
        snapNearZero: rr?.snapNearZero ?? Aj.snapNearZero,
        zeroThreshold: rr?.zeroThreshold ?? Sr,
        perAttributeEps: rr?.perAttributeEps
      }
    }

    function wj(rr) {
      return {
        number: ij(rr?.number)
      }
    }
    class cj {
      constructor(rr) {
        if (this.o = rr, this._o = rr.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(rr) {
        if (!Number.isFinite(rr)) throw new Error(`Cannot format non-finite number: ${rr}`);
        const Sr = this._o,
          Qr = this._clampInt(Sr.maxDecimalsCap ?? 15, 0, 20),
          Zr = Sr.trimTrailingZeros ?? !0,
          Wr = Sr.snapNearZero ?? !0,
          ar = Sr.zeroThreshold ?? Sr.eps,
          jr = 1 / Sr.eps;
        let Ir, fr = Math.round(rr * jr) / jr;
        if (Object.is(fr, -0) && (fr = 0), Wr && Math.abs(fr) <= ar && (fr = 0), Ir = void 0 !== Sr.fixedDecimals ? this._clampInt(Sr.fixedDecimals, 0, Qr) : this._clampInt(Math.ceil(-Math.log10(Sr.eps)), 0, Qr), Sr.allowScientific, 0 === Ir) return String(Math.trunc(fr));
        let Er = fr.toFixed(Ir);
        if (Zr && void 0 === Sr.fixedDecimals && (Er = Er.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Er)) throw new Error(`Scientific notation not allowed in XML output: ${Er}`);
        return Er
      }
      _clampInt(rr, Sr, Qr) {
        return Number.isFinite(rr) ? (rr = Math.trunc(rr), Math.max(Sr, Math.min(Qr, rr))) : Sr
      }
    }

    function Fj(rr) {
      return rr instanceof Date
    }

    function oj(rr) {
      return "string" === typeof rr
    }

    function bj(rr) {
      return "string" === typeof rr || "number" === typeof rr || "boolean" === typeof rr || "bigint" === typeof rr || Fj(rr)
    }

    function Jj(rr) {
      return "number" === typeof rr || "boolean" === typeof rr || "bigint" === typeof rr || Fj(rr)
    }
    class Dj {
      constructor(rr, Sr) {
        this._ns = new Map, this._prefixCount = 0, this._builder = rr, this._format = wj(Sr), this._nFmt = new cj(this._format)
      }
      withNamespace() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        for (const Zr of Sr) this._assignNamespace(Zr);
        return this
      }
      serialize(rr, Sr) {
        if (!(Sr = Sr ?? Cj(rr))) throw new Error("can not find name for given object");
        const Qr = Gj(Sr);
        Qr.ns && this._assignNamespace(Qr.ns, "xmlns"), this._gatherNamespaces(rr, new WeakSet);
        const Zr = this._builder.ele(null, Qr.name);
        for (const [Wr, ar] of Array.from(this._ns.entries())) Zr.att("xmlns", ar, Wr);
        this._writeObjectContent(Zr, rr, (new WeakSet).add(rr)), this._builder.end()
      }
      _writeObject(rr, Sr, Qr) {
        if (Qr.has(Sr)) return;
        if (Qr.add(Sr), Array.isArray(Sr)) {
          for (const Zr of Sr) Jj(Zr) || (oj(Zr) ? this._builder.text(Zr) : this._writeObject(rr, Zr, Qr));
          return
        }
        const Zr = Cj(Sr);
        if (!Zr) return;
        const Wr = Gj(Zr),
          ar = this._getPrefix(Wr),
          jr = kj(Wr.name, ar);
        rr.ele(null, jr), this._writeObjectContent(rr, Sr, Qr), this._builder.end()
      }
      _getPrefix(rr) {
        if (rr.ns) {
          const Sr = this._ns.get(rr.ns.toLowerCase());
          if ("xmlns" !== Sr) return Sr
        }
      }
      _writeObjectContent(rr, Sr, Qr) {
        const Zr = gj(Sr) ?? [],
          Wr = new Map;
        for (const jr of Zr) {
          const rr = Wr.get(jr.prop) ?? [];
          rr.push(jr), Wr.set(jr.prop, rr)
        }
        const ar = Object.keys(Sr).sort(((rr, Sr) => {
          const Qr = (Wr.get(rr) ?? []).some((rr => "attr" === rr.kind));
          return Qr === (Wr.get(Sr) ?? []).some((rr => "attr" === rr.kind)) ? 0 : Qr ? -1 : 1
        }));
        for (const jr of ar) {
          const Zr = Sr[jr];
          if (null === Zr || void 0 === Zr) continue;
          const ar = Wr.get(jr);
          if (ar) {
            if (ar.some((rr => !0 === rr.ignore || "none" === rr.kind))) continue;
            for (const Sr of ar) {
              const Qr = Sr.name ?? Sr.prop.toLowerCase();
              if (Qr) switch (Sr.kind) {
                case "attr": {
                  let Wr = null;
                  if ("number" === typeof Zr && this._nFmt && (Wr = this._nFmt.toString(Zr)), Sr.formatter) {
                    Wr = new Sr.formatter(this._format).toString(Zr)
                  }
                  if (Wr = Wr ?? Zr.toString(), Wr) {
                    const Sr = Gj(Qr),
                      Zr = this._getPrefix(Sr),
                      ar = kj(Sr.name, Zr);
                    rr.att(null, ar, Wr)
                  }
                  break
                }
              }
            }
          } else Jj(Zr) || (oj(Zr) ? this._builder.text(Zr) : this._writeObject(rr, Zr, Qr))
        }
      }
      _gatherNamespaces(rr, Sr) {
        if (Sr.has(rr)) return;
        if (Sr.add(rr), Array.isArray(rr)) {
          for (const Qr of rr) bj(Qr) || this._gatherNamespaces(Qr, Sr);
          return
        }
        const Qr = Cj(rr);
        Qr && this._assignNamespace(Qr);
        const Zr = gj(rr) ?? [],
          Wr = new Map;
        for (const jr of Zr) {
          const rr = Wr.get(jr.prop) ?? [];
          rr.push(jr), Wr.set(jr.prop, rr)
        }
        const ar = [];
        for (const jr of Object.keys(rr)) {
          const Sr = rr[jr];
          if (null === Sr || void 0 === Sr) continue;
          const Qr = Wr.get(jr);
          if (Qr) {
            if (Qr.some((rr => !0 === rr.ignore || "none" === rr.kind))) continue;
            for (const rr of Qr) rr.name && this._assignNamespace(rr.name)
          }
          ar.push(Sr)
        }
        for (const jr of ar) bj(jr) || this._gatherNamespaces(jr, Sr)
      }
      _assignNamespace(rr, Sr) {
        const Qr = Gj(rr);
        if (Qr?.ns) {
          const rr = Qr.ns.toLowerCase();
          this._ns.get(rr) || this._ns.set(rr, Sr ?? this._buildNsPrefix(rr))
        } else if ("xmlns" === Sr) {
          const rr = Qr.name.toLowerCase();
          this._ns.get(rr) || this._ns.set(rr, Sr ?? this._buildNsPrefix(rr))
        }
      }
      _buildNsPrefix(rr) {
        let Sr, Qr = !1;
        do {
          Sr = "ns" + this._prefixCount++;
          for (const rr of Array.from(this._ns.values()))
            if (rr === Sr) {
              Qr = !0;
              break
            }
        } while (Qr);
        return Sr
      }
    }
    class dj {}
    var sj;
    dj.OpenTag = "<", dj.CloseTag = ">", dj.Slash = "/", dj.Question = "?", dj.Quote = '"', dj.Equal = "=", dj.Space = " ", dj.Semicolon = ":", dj.Dec = "<?xml", dj.Xml = "xml", dj.Xmlns = "xmlns", dj.Xsi = "xsi", dj.VersionKeyword = "version", dj.EncodingKeyword = "encoding", dj.StandaloneKeyword = "standalone",
      function(rr) {
        rr[rr.Declaration = 0] = "Declaration", rr[rr.Tag = 1] = "Tag", rr[rr.Attribute = 2] = "Attribute", rr[rr.Text = 3] = "Text"
      }(sj || (sj = {}));
    class uj {
      constructor(rr) {
        this._ctxStack = [], this._d = 0, this._w = rr
      }
      dec(rr, Sr, Qr) {
        return this._w.write(dj.Dec), this._writeAttStr(dj.VersionKeyword, rr), Sr && this._writeAttStr(dj.EncodingKeyword, Sr), void 0 !== Qr && this._writeAttStr(dj.StandaloneKeyword, Qr ? "yes" : "no"), this._w.write(dj.Question, dj.CloseTag), this
      }
      att(rr, Sr, Qr) {
        const Zr = this._peekContext();
        if (!Zr) throw new Error("att() without open element");
        if (Zr.closed) throw new Error(`att() after start tag closed for <${Zr.name}>`);
        if (this._isXmlnsDecl(rr, Sr)) {
          if (Sr === dj.Xmlns) Zr.defaultNs = Qr, this._registerNamespace(Zr, "", Qr), this._writeAttStr(dj.Xmlns, Qr);
          else if (rr) this._registerNamespace(Zr, Sr, Qr), this._writeAttStr(`${rr}:${Sr}`, Qr);
          else {
            const rr = Sr.slice(6);
            this._registerNamespace(Zr, rr, Qr), this._writeAttStr(Sr, Qr)
          }
          return Zr.lastToken = sj.Attribute, this
        }
        let Wr = Sr;
        if (rr) {
          Wr = `${this._ensurePrefixDeclared(Zr,rr)}:${Sr}`
        }
        return Zr.lastToken = sj.Attribute, this._writeAttStr(Wr, Qr), this
      }
      ele(rr, Sr) {
        const Qr = this._peekContext();
        Qr && this._closeOpenTagIfNeeded(Qr);
        let Zr = Sr;
        if (rr) {
          Zr = `${this._lookupPrefix(rr)??rr}:${Sr}`
        }
        return this._pushContext(Zr, ++this._d), this._w.write(dj.OpenTag, Zr), this
      }
      text(rr) {
        const Sr = this._peekContext();
        if (!Sr) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(Sr), Sr.lastToken = sj.Text, this._w.write(this._escText(rr)), this
      }
      end() {
        const rr = this._popContext();
        return rr && (this._d--, rr.closed ? this._w.write(dj.OpenTag, dj.Slash, rr.name, dj.CloseTag) : this._w.write(dj.Slash, dj.CloseTag)), this
      }
      _pushContext(rr, Sr) {
        const Qr = new uj.Context(rr, Sr);
        return this._ctxStack.push(Qr), Qr
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
      _writeAttStr(rr, Sr) {
        this._w.write(dj.Space, rr, dj.Equal, dj.Quote, this._escAttr(Sr), dj.Quote)
      }
      _lookupPrefix(rr) {
        let Sr = this._ctxStack.length - 1;
        if (Sr >= 0)
          do {
            const Qr = this._ctxStack[Sr--],
              Zr = Qr.ns2prefix?.get(rr);
            if (Zr) return Zr
          } while (Sr >= 0)
      }
      _escText(rr) {
        return rr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(rr) {
        return this._escText(rr).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(rr, Sr) {
        if (rr) return rr === dj.Xmlns;
        const Qr = Sr.length,
          Zr = dj.Xmlns.length;
        return Qr >= Zr && (Sr.startsWith(dj.Xmlns) && (Sr.length == Zr || Sr[Zr] == dj.Semicolon))
      }
      _registerNamespace(rr, Sr, Qr) {
        if (Sr === dj.Xml || Sr === dj.Xmlns) throw new Error(`reserved prefix '${Sr}'`);
        const Zr = rr.prefix2ns.get(Sr);
        if (Zr && Zr !== Qr) throw new Error(`prefix '${Sr}' already bound to a different namespace`);
        rr.ns2prefix.get(Qr) || rr.ns2prefix.set(Qr, Sr), rr.prefix2ns.set(Sr, Qr)
      }
      _allocPrefix(rr) {
        let Sr = 1;
        for (;;) {
          const Qr = "ns" + Sr++;
          if (!rr.prefix2ns.has(Qr)) return Qr
        }
      }
      _ensurePrefixDeclared(rr, Sr) {
        const Qr = this._lookupPrefix(Sr);
        if (Qr) return Qr;
        if (rr.closed) throw new Error(`can not declare namespace after start tag closed for <${rr.name}>`);
        const Zr = this._allocPrefix(rr);
        return this._writeAttStr(`${dj.Xmlns}:${Zr}`, Sr), this._registerNamespace(rr, Zr, Sr), Zr
      }
      _closeOpenTagIfNeeded(rr) {
        rr.closed || (this._w.write(dj.CloseTag), rr.closed = !0)
      }
    }
    uj.Context = class {
      constructor(rr, Sr) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = rr, this.depth = Sr
      }
    };
    class rI {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        if (0 === Sr.length) return this;
        const Zr = Sr.join("");
        return this._chunks.push(Zr), this.count += Zr.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class SI {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = rr, this._opts = Sr, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        if (0 === Sr.length) return this;
        const Zr = Sr.join("");
        if (0 === Zr.length) return this;
        this._pending += Zr, this._pendingChars += Zr.length;
        const Wr = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Wr && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const rr = this._encoder.encode(this._pending);
        return this._sink.push(rr), this.count += rr.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const QI = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      ZI = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var WI, aI;
    ! function(rr) {
      rr.micron = "micron", rr.millimeter = "millimeter", rr.centimeter = "centimeter", rr.inch = "inch", rr.foot = "foot", rr.meter = "meter"
    }(WI || (WI = {})),
    function(rr) {
      rr.model = "model", rr.solidsupport = "solidsupport", rr.support = "support", rr.surface = "surface", rr.other = "other"
    }(aI || (aI = {}));
    const jI = "http://schemas.openxmlformats.org/package/2006/content-types",
      II = "http://schemas.openxmlformats.org/package/2006/relationships";
    var fI;
    ! function(rr) {
      rr.Relationships = "application/vnd.openxmlformats-package.relationships+xml", rr.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", rr.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", rr.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", rr.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", rr.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", rr.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", rr.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", rr.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", rr.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", rr.Png = "image/png", rr.Jpeg = "image/jpeg", rr.Tiff = "image/tiff", rr.Xml = "application/xml"
    }(fI || (fI = {}));
    const EI = "_rels/",
      pI = "3D/",
      xI = "3dmodel.model",
      mI = ".rels",
      NI = "[Content_Types].xml";
    class UI {
      static IsKnown(rr) {
        return UI.Known.has(rr)
      }
      static IsThreeDimModel(rr) {
        return rr === UI.ThreeDimModel
      }
    }
    UI.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", UI.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", UI.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", UI.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", UI.Known = new Set([UI.ThreeDimModel, UI.Thumbnail, UI.PrintTicket, UI.MustPreserve]);
    let tI = (() => {
        let rr, Sr, Qr = [Pj({
            ns: jI,
            name: "Types"
          })],
          Zr = [];
        Sr = class {
          constructor() {
            this.items = []
          }
        };
        return (0, vr.q)(Sr, "ThreeMfContentTypes"), (() => {
          const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vr.k)(null, rr = {
            value: Sr
          }, Qr, {
            kind: "class",
            name: Sr.name,
            metadata: Wr
          }, null, Zr), Sr = rr.value, Wr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wr
          }), (0, vr.m)(Sr, Zr)
        })(), Sr
      })(),
      hI = (() => {
        let rr, Sr, Qr, Zr, Wr = [Pj({
            ns: jI,
            name: "Default"
          })],
          ar = [],
          jr = [],
          Ir = [],
          fr = [],
          Er = [];
        Sr = class {
          constructor(rr, Sr) {
            this.ext = (0, vr.m)(this, jr, void 0), this.ct = ((0, vr.m)(this, Ir), (0, vr.m)(this, fr, void 0)), (0, vr.m)(this, Er), this.ext = rr, this.ct = Sr
          }
        };
        return (0, vr.q)(Sr, "ThreeMfContentType"), (() => {
          const pr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Qr = [qj({
            name: {
              ns: jI,
              name: "Extension"
            }
          })], Zr = [qj({
            name: {
              ns: jI,
              name: "ContentType"
            }
          })], (0, vr.k)(null, null, Qr, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: rr => "ext" in rr,
              get: rr => rr.ext,
              set: (rr, Sr) => {
                rr.ext = Sr
              }
            },
            metadata: pr
          }, jr, Ir), (0, vr.k)(null, null, Zr, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: rr => "ct" in rr,
              get: rr => rr.ct,
              set: (rr, Sr) => {
                rr.ct = Sr
              }
            },
            metadata: pr
          }, fr, Er), (0, vr.k)(null, rr = {
            value: Sr
          }, Wr, {
            kind: "class",
            name: Sr.name,
            metadata: pr
          }, null, ar), Sr = rr.value, pr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pr
          }), (0, vr.m)(Sr, ar)
        })(), Sr
      })(),
      zI = (() => {
        let rr, Sr, Qr = [Pj({
            ns: II,
            name: "Relationships"
          })],
          Zr = [];
        Sr = class {
          constructor() {
            this.items = []
          }
        };
        return (0, vr.q)(Sr, "ThreeMfRelationships"), (() => {
          const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vr.k)(null, rr = {
            value: Sr
          }, Qr, {
            kind: "class",
            name: Sr.name,
            metadata: Wr
          }, null, Zr), Sr = rr.value, Wr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wr
          }), (0, vr.m)(Sr, Zr)
        })(), Sr
      })(),
      YI = (() => {
        let rr, Sr, Qr, Zr, Wr, ar = [Pj({
            ns: II,
            name: "Relationship"
          })],
          jr = [],
          Ir = [],
          fr = [],
          Er = [],
          pr = [],
          xr = [],
          mr = [];
        Sr = class {
          constructor(rr, Sr, Qr) {
            this.id = (0, vr.m)(this, Ir, void 0), this.type = ((0, vr.m)(this, fr), (0, vr.m)(this, Er, void 0)), this.target = ((0, vr.m)(this, pr), (0, vr.m)(this, xr, void 0)), (0, vr.m)(this, mr), this.id = rr, this.type = Sr, this.target = Qr
          }
        };
        return (0, vr.q)(Sr, "ThreeMfRelationship"), (() => {
          const Nr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Qr = [qj({
            name: "Id"
          })], Zr = [qj({
            name: "Type"
          })], Wr = [qj({
            name: "Target"
          })], (0, vr.k)(null, null, Qr, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: rr => "id" in rr,
              get: rr => rr.id,
              set: (rr, Sr) => {
                rr.id = Sr
              }
            },
            metadata: Nr
          }, Ir, fr), (0, vr.k)(null, null, Zr, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: rr => "type" in rr,
              get: rr => rr.type,
              set: (rr, Sr) => {
                rr.type = Sr
              }
            },
            metadata: Nr
          }, Er, pr), (0, vr.k)(null, null, Wr, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: rr => "target" in rr,
              get: rr => rr.target,
              set: (rr, Sr) => {
                rr.target = Sr
              }
            },
            metadata: Nr
          }, xr, mr), (0, vr.k)(null, rr = {
            value: Sr
          }, ar, {
            kind: "class",
            name: Sr.name,
            metadata: Nr
          }, null, jr), Sr = rr.value, Nr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nr
          }), (0, vr.m)(Sr, jr)
        })(), Sr
      })();
    class nI {
      constructor(rr, Sr, Qr) {
        this.contentTypes = rr, this.relationships = Sr, this.model = Qr
      }
    }
    class eI {
      static Zero() {
        return new eI([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(rr) {
        this.values = rr
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class KI {
      constructor(rr) {
        this.o = rr, this._f = new cj(rr)
      }
      toString(rr) {
        return rr.values.map((rr => this._f.toString(rr))).join(" ")
      }
    }
    let yI = (() => {
        let rr, Sr, Qr, Zr, Wr, ar = [Pj({
            ns: QI,
            name: "model"
          })],
          jr = [],
          Ir = [],
          fr = [],
          Er = [],
          pr = [],
          xr = [],
          mr = [];
        Sr = class {
          constructor() {
            this.unit = (0, vr.m)(this, Ir, WI.millimeter), this.requiredextensions = ((0, vr.m)(this, fr), (0, vr.m)(this, Er, void 0)), this.recommendedextensions = ((0, vr.m)(this, pr), (0, vr.m)(this, xr, void 0)), this.metadata = (0, vr.m)(this, mr)
          }
        };
        return (0, vr.q)(Sr, "ThreeMfModel"), (() => {
          const Nr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Qr = [qj({
            name: "unit"
          })], Zr = [qj({
            name: "requiredextensions"
          })], Wr = [qj({
            name: "recommendedextensions"
          })], (0, vr.k)(null, null, Qr, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: rr => "unit" in rr,
              get: rr => rr.unit,
              set: (rr, Sr) => {
                rr.unit = Sr
              }
            },
            metadata: Nr
          }, Ir, fr), (0, vr.k)(null, null, Zr, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: rr => "requiredextensions" in rr,
              get: rr => rr.requiredextensions,
              set: (rr, Sr) => {
                rr.requiredextensions = Sr
              }
            },
            metadata: Nr
          }, Er, pr), (0, vr.k)(null, null, Wr, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: rr => "recommendedextensions" in rr,
              get: rr => rr.recommendedextensions,
              set: (rr, Sr) => {
                rr.recommendedextensions = Sr
              }
            },
            metadata: Nr
          }, xr, mr), (0, vr.k)(null, rr = {
            value: Sr
          }, ar, {
            kind: "class",
            name: Sr.name,
            metadata: Nr
          }, null, jr), Sr = rr.value, Nr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nr
          })
        })(), Sr.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, vr.m)(Sr, jr), Sr
      })(),
      BI = (() => {
        let rr, Sr, Qr, Zr, Wr, ar = [Pj({
            ns: QI,
            name: "meta"
          })],
          jr = [],
          Ir = [],
          fr = [],
          Er = [],
          pr = [],
          xr = [],
          mr = [];
        Sr = class {
          constructor(rr, Sr, Qr, Zr) {
            this.name = (0, vr.m)(this, Ir, void 0), this.preserve = ((0, vr.m)(this, fr), (0, vr.m)(this, Er, void 0)), this.type = ((0, vr.m)(this, pr), (0, vr.m)(this, xr, void 0)), this.value = (0, vr.m)(this, mr), this.name = rr, this.value = Sr, this.preserve = Qr, this.type = Zr
          }
        };
        return (0, vr.q)(Sr, "ThreeMfMeta"), (() => {
          const Nr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Qr = [qj({
            name: "name"
          })], Zr = [qj({
            name: "preserve"
          })], Wr = [qj({
            name: "type"
          })], (0, vr.k)(null, null, Qr, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: rr => "name" in rr,
              get: rr => rr.name,
              set: (rr, Sr) => {
                rr.name = Sr
              }
            },
            metadata: Nr
          }, Ir, fr), (0, vr.k)(null, null, Zr, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: rr => "preserve" in rr,
              get: rr => rr.preserve,
              set: (rr, Sr) => {
                rr.preserve = Sr
              }
            },
            metadata: Nr
          }, Er, pr), (0, vr.k)(null, null, Wr, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: rr => "type" in rr,
              get: rr => rr.type,
              set: (rr, Sr) => {
                rr.type = Sr
              }
            },
            metadata: Nr
          }, xr, mr), (0, vr.k)(null, rr = {
            value: Sr
          }, ar, {
            kind: "class",
            name: Sr.name,
            metadata: Nr
          }, null, jr), Sr = rr.value, Nr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nr
          }), (0, vr.m)(Sr, jr)
        })(), Sr
      })(),
      TI = (() => {
        let rr, Sr, Qr = [Pj({
            ns: QI,
            name: "metadatagroup"
          })],
          Zr = [];
        Sr = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, vr.q)(Sr, "ThreeMfMetadataGroup"), (() => {
          const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vr.k)(null, rr = {
            value: Sr
          }, Qr, {
            kind: "class",
            name: Sr.name,
            metadata: Wr
          }, null, Zr), Sr = rr.value, Wr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wr
          }), (0, vr.m)(Sr, Zr)
        })(), Sr
      })(),
      vI = (() => {
        let rr, Sr, Qr = [Pj({
            ns: QI,
            name: "resources"
          })],
          Zr = [];
        Sr = class {
          constructor() {
            this.object = []
          }
        };
        return (0, vr.q)(Sr, "ThreeMfResources"), (() => {
          const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vr.k)(null, rr = {
            value: Sr
          }, Qr, {
            kind: "class",
            name: Sr.name,
            metadata: Wr
          }, null, Zr), Sr = rr.value, Wr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wr
          }), (0, vr.m)(Sr, Zr)
        })(), Sr
      })(),
      OI = (() => {
        let rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er = [Pj({
            ns: QI,
            name: "object"
          })],
          pr = [],
          xr = [],
          mr = [],
          Nr = [],
          Ur = [],
          tr = [],
          hr = [],
          zr = [],
          Yr = [],
          nr = [],
          er = [],
          Kr = [],
          yr = [],
          Br = [],
          Tr = [];
        Sr = class {
          constructor(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aI.model;
            this.id = (0, vr.m)(this, xr, void 0), this.type = ((0, vr.m)(this, mr), (0, vr.m)(this, Nr, void 0)), this.thumbnail = ((0, vr.m)(this, Ur), (0, vr.m)(this, tr, void 0)), this.partnumber = ((0, vr.m)(this, hr), (0, vr.m)(this, zr, void 0)), this.name = ((0, vr.m)(this, Yr), (0, vr.m)(this, nr, void 0)), this.pid = ((0, vr.m)(this, er), (0, vr.m)(this, Kr, void 0)), this.pindex = ((0, vr.m)(this, yr), (0, vr.m)(this, Br, void 0)), this.metadatagroup = (0, vr.m)(this, Tr), this.id = rr, this.type = Sr
          }
        };
        return (0, vr.q)(Sr, "ThreeMfObject"), (() => {
          const Or = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Qr = [qj({
            name: "id"
          })], Zr = [qj({
            name: "type"
          })], Wr = [qj({
            name: "thumbnail"
          })], ar = [qj({
            name: "partnumber"
          })], jr = [qj({
            name: "name"
          })], Ir = [qj({
            name: "pid"
          })], fr = [qj({
            name: "pindex"
          })], (0, vr.k)(null, null, Qr, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: rr => "id" in rr,
              get: rr => rr.id,
              set: (rr, Sr) => {
                rr.id = Sr
              }
            },
            metadata: Or
          }, xr, mr), (0, vr.k)(null, null, Zr, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: rr => "type" in rr,
              get: rr => rr.type,
              set: (rr, Sr) => {
                rr.type = Sr
              }
            },
            metadata: Or
          }, Nr, Ur), (0, vr.k)(null, null, Wr, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: rr => "thumbnail" in rr,
              get: rr => rr.thumbnail,
              set: (rr, Sr) => {
                rr.thumbnail = Sr
              }
            },
            metadata: Or
          }, tr, hr), (0, vr.k)(null, null, ar, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: rr => "partnumber" in rr,
              get: rr => rr.partnumber,
              set: (rr, Sr) => {
                rr.partnumber = Sr
              }
            },
            metadata: Or
          }, zr, Yr), (0, vr.k)(null, null, jr, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: rr => "name" in rr,
              get: rr => rr.name,
              set: (rr, Sr) => {
                rr.name = Sr
              }
            },
            metadata: Or
          }, nr, er), (0, vr.k)(null, null, Ir, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: rr => "pid" in rr,
              get: rr => rr.pid,
              set: (rr, Sr) => {
                rr.pid = Sr
              }
            },
            metadata: Or
          }, Kr, yr), (0, vr.k)(null, null, fr, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: rr => "pindex" in rr,
              get: rr => rr.pindex,
              set: (rr, Sr) => {
                rr.pindex = Sr
              }
            },
            metadata: Or
          }, Br, Tr), (0, vr.k)(null, rr = {
            value: Sr
          }, Er, {
            kind: "class",
            name: Sr.name,
            metadata: Or
          }, null, pr), Sr = rr.value, Or && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Or
          }), (0, vr.m)(Sr, pr)
        })(), Sr
      })(),
      LI = (() => {
        let rr, Sr, Qr = [Pj({
            ns: QI,
            name: "mesh"
          })],
          Zr = [];
        Sr = class {
          constructor(rr, Sr) {
            this.vertices = rr ?? new lI, this.triangles = Sr ?? new PI
          }
        };
        return (0, vr.q)(Sr, "ThreeMfMesh"), (() => {
          const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vr.k)(null, rr = {
            value: Sr
          }, Qr, {
            kind: "class",
            name: Sr.name,
            metadata: Wr
          }, null, Zr), Sr = rr.value, Wr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wr
          }), (0, vr.m)(Sr, Zr)
        })(), Sr
      })(),
      lI = (() => {
        let rr, Sr, Qr = [Pj({
            ns: QI,
            name: "vertices"
          })],
          Zr = [];
        Sr = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, vr.q)(Sr, "ThreeMfVertices"), (() => {
          const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vr.k)(null, rr = {
            value: Sr
          }, Qr, {
            kind: "class",
            name: Sr.name,
            metadata: Wr
          }, null, Zr), Sr = rr.value, Wr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wr
          }), (0, vr.m)(Sr, Zr)
        })(), Sr
      })(),
      XI = (() => {
        let rr, Sr, Qr, Zr, Wr, ar = [Pj({
            ns: QI,
            name: "vertex"
          })],
          jr = [],
          Ir = [],
          fr = [],
          Er = [],
          pr = [],
          xr = [],
          mr = [];
        Sr = class {
          constructor() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, vr.m)(this, Ir, void 0), this.y = ((0, vr.m)(this, fr), (0, vr.m)(this, Er, void 0)), this.z = ((0, vr.m)(this, pr), (0, vr.m)(this, xr, void 0)), (0, vr.m)(this, mr), this.x = rr, this.y = Sr, this.z = Qr
          }
        };
        return (0, vr.q)(Sr, "ThreeMfVertex"), (() => {
          const Nr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Qr = [qj({
            name: "x"
          })], Zr = [qj({
            name: "y"
          })], Wr = [qj({
            name: "z"
          })], (0, vr.k)(null, null, Qr, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: rr => "x" in rr,
              get: rr => rr.x,
              set: (rr, Sr) => {
                rr.x = Sr
              }
            },
            metadata: Nr
          }, Ir, fr), (0, vr.k)(null, null, Zr, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: rr => "y" in rr,
              get: rr => rr.y,
              set: (rr, Sr) => {
                rr.y = Sr
              }
            },
            metadata: Nr
          }, Er, pr), (0, vr.k)(null, null, Wr, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: rr => "z" in rr,
              get: rr => rr.z,
              set: (rr, Sr) => {
                rr.z = Sr
              }
            },
            metadata: Nr
          }, xr, mr), (0, vr.k)(null, rr = {
            value: Sr
          }, ar, {
            kind: "class",
            name: Sr.name,
            metadata: Nr
          }, null, jr), Sr = rr.value, Nr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nr
          }), (0, vr.m)(Sr, jr)
        })(), Sr
      })(),
      PI = (() => {
        let rr, Sr, Qr = [Pj({
            ns: QI,
            name: "triangles"
          })],
          Zr = [];
        Sr = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, vr.q)(Sr, "ThreeMfTriangles"), (() => {
          const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vr.k)(null, rr = {
            value: Sr
          }, Qr, {
            kind: "class",
            name: Sr.name,
            metadata: Wr
          }, null, Zr), Sr = rr.value, Wr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wr
          }), (0, vr.m)(Sr, Zr)
        })(), Sr
      })(),
      HI = (() => {
        let rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er = [Pj({
            ns: QI,
            name: "triangle"
          })],
          pr = [],
          xr = [],
          mr = [],
          Nr = [],
          Ur = [],
          tr = [],
          hr = [],
          zr = [],
          Yr = [],
          nr = [],
          er = [],
          Kr = [],
          yr = [],
          Br = [],
          Tr = [];
        Sr = class {
          constructor(rr, Sr, Qr) {
            this.v1 = (0, vr.m)(this, xr, void 0), this.v2 = ((0, vr.m)(this, mr), (0, vr.m)(this, Nr, void 0)), this.v3 = ((0, vr.m)(this, Ur), (0, vr.m)(this, tr, void 0)), this.p1 = ((0, vr.m)(this, hr), (0, vr.m)(this, zr, void 0)), this.p2 = ((0, vr.m)(this, Yr), (0, vr.m)(this, nr, void 0)), this.p3 = ((0, vr.m)(this, er), (0, vr.m)(this, Kr, void 0)), this.pid = ((0, vr.m)(this, yr), (0, vr.m)(this, Br, void 0)), (0, vr.m)(this, Tr), this.v1 = rr, this.v2 = Sr, this.v3 = Qr
          }
        };
        return (0, vr.q)(Sr, "ThreeMfTriangle"), (() => {
          const Or = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Qr = [qj({
            name: "v1"
          })], Zr = [qj({
            name: "v2"
          })], Wr = [qj({
            name: "v3"
          })], ar = [qj({
            name: "p1"
          })], jr = [qj({
            name: "p2"
          })], Ir = [qj({
            name: "p3"
          })], fr = [qj({
            name: "pid"
          })], (0, vr.k)(null, null, Qr, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: rr => "v1" in rr,
              get: rr => rr.v1,
              set: (rr, Sr) => {
                rr.v1 = Sr
              }
            },
            metadata: Or
          }, xr, mr), (0, vr.k)(null, null, Zr, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: rr => "v2" in rr,
              get: rr => rr.v2,
              set: (rr, Sr) => {
                rr.v2 = Sr
              }
            },
            metadata: Or
          }, Nr, Ur), (0, vr.k)(null, null, Wr, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: rr => "v3" in rr,
              get: rr => rr.v3,
              set: (rr, Sr) => {
                rr.v3 = Sr
              }
            },
            metadata: Or
          }, tr, hr), (0, vr.k)(null, null, ar, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: rr => "p1" in rr,
              get: rr => rr.p1,
              set: (rr, Sr) => {
                rr.p1 = Sr
              }
            },
            metadata: Or
          }, zr, Yr), (0, vr.k)(null, null, jr, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: rr => "p2" in rr,
              get: rr => rr.p2,
              set: (rr, Sr) => {
                rr.p2 = Sr
              }
            },
            metadata: Or
          }, nr, er), (0, vr.k)(null, null, Ir, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: rr => "p3" in rr,
              get: rr => rr.p3,
              set: (rr, Sr) => {
                rr.p3 = Sr
              }
            },
            metadata: Or
          }, Kr, yr), (0, vr.k)(null, null, fr, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: rr => "pid" in rr,
              get: rr => rr.pid,
              set: (rr, Sr) => {
                rr.pid = Sr
              }
            },
            metadata: Or
          }, Br, Tr), (0, vr.k)(null, rr = {
            value: Sr
          }, Er, {
            kind: "class",
            name: Sr.name,
            metadata: Or
          }, null, pr), Sr = rr.value, Or && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Or
          }), (0, vr.m)(Sr, pr)
        })(), Sr
      })(),
      qI = (() => {
        let rr, Sr, Qr = [Pj({
            ns: QI,
            name: "components"
          })],
          Zr = [];
        Sr = class {
          constructor() {
            this.component = []
          }
        };
        return (0, vr.q)(Sr, "ThreeMfComponents"), (() => {
          const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vr.k)(null, rr = {
            value: Sr
          }, Qr, {
            kind: "class",
            name: Sr.name,
            metadata: Wr
          }, null, Zr), Sr = rr.value, Wr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wr
          }), (0, vr.m)(Sr, Zr)
        })(), Sr
      })(),
      RI = (() => {
        let rr, Sr, Qr, Zr, Wr = [Pj({
            ns: QI,
            name: "component"
          })],
          ar = [],
          jr = [],
          Ir = [],
          fr = [],
          Er = [];
        Sr = class {
          constructor(rr, Sr) {
            this.objectid = (0, vr.m)(this, jr, void 0), this.transform = ((0, vr.m)(this, Ir), (0, vr.m)(this, fr, void 0)), (0, vr.m)(this, Er), this.objectid = rr, this.transform = Sr
          }
        };
        return (0, vr.q)(Sr, "ThreeMfComponent"), (() => {
          const pr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Qr = [qj({
            name: "objectid"
          })], Zr = [qj({
            name: "transform",
            formatter: KI
          })], (0, vr.k)(null, null, Qr, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: rr => "objectid" in rr,
              get: rr => rr.objectid,
              set: (rr, Sr) => {
                rr.objectid = Sr
              }
            },
            metadata: pr
          }, jr, Ir), (0, vr.k)(null, null, Zr, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: rr => "transform" in rr,
              get: rr => rr.transform,
              set: (rr, Sr) => {
                rr.transform = Sr
              }
            },
            metadata: pr
          }, fr, Er), (0, vr.k)(null, rr = {
            value: Sr
          }, Wr, {
            kind: "class",
            name: Sr.name,
            metadata: pr
          }, null, ar), Sr = rr.value, pr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pr
          }), (0, vr.m)(Sr, ar)
        })(), Sr
      })(),
      gI = (() => {
        let rr, Sr, Qr, Zr = [Pj({
            ns: QI,
            name: "basematerials"
          })],
          Wr = [],
          ar = [],
          jr = [];
        Sr = class {
          constructor(rr) {
            this.id = (0, vr.m)(this, ar, void 0), this.base = ((0, vr.m)(this, jr), []), this.id = rr
          }
        };
        return (0, vr.q)(Sr, "ThreeMfBaseMaterials"), (() => {
          const Ir = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Qr = [qj({
            name: "id"
          })], (0, vr.k)(null, null, Qr, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: rr => "id" in rr,
              get: rr => rr.id,
              set: (rr, Sr) => {
                rr.id = Sr
              }
            },
            metadata: Ir
          }, ar, jr), (0, vr.k)(null, rr = {
            value: Sr
          }, Zr, {
            kind: "class",
            name: Sr.name,
            metadata: Ir
          }, null, Wr), Sr = rr.value, Ir && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ir
          }), (0, vr.m)(Sr, Wr)
        })(), Sr
      })(),
      CI = (() => {
        let rr, Sr, Qr, Zr, Wr = [Pj({
            ns: QI,
            name: "base"
          })],
          ar = [],
          jr = [],
          Ir = [],
          fr = [],
          Er = [];
        Sr = class {
          constructor(rr, Sr) {
            this.name = (0, vr.m)(this, jr, void 0), this.displaycolor = ((0, vr.m)(this, Ir), (0, vr.m)(this, fr, void 0)), (0, vr.m)(this, Er), this.name = rr, this.displaycolor = Sr
          }
        };
        return (0, vr.q)(Sr, "ThreeMfBase"), (() => {
          const pr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Qr = [qj({
            name: "name"
          })], Zr = [qj({
            name: "displaycolor"
          })], (0, vr.k)(null, null, Qr, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: rr => "name" in rr,
              get: rr => rr.name,
              set: (rr, Sr) => {
                rr.name = Sr
              }
            },
            metadata: pr
          }, jr, Ir), (0, vr.k)(null, null, Zr, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: rr => "displaycolor" in rr,
              get: rr => rr.displaycolor,
              set: (rr, Sr) => {
                rr.displaycolor = Sr
              }
            },
            metadata: pr
          }, fr, Er), (0, vr.k)(null, rr = {
            value: Sr
          }, Wr, {
            kind: "class",
            name: Sr.name,
            metadata: pr
          }, null, ar), Sr = rr.value, pr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pr
          }), (0, vr.m)(Sr, ar)
        })(), Sr
      })(),
      MI = (() => {
        let rr, Sr, Qr = [Pj({
            ns: QI,
            name: "build"
          })],
          Zr = [];
        Sr = class {
          constructor() {
            this.item = []
          }
        };
        return (0, vr.q)(Sr, "ThreeMfBuild"), (() => {
          const Wr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, vr.k)(null, rr = {
            value: Sr
          }, Qr, {
            kind: "class",
            name: Sr.name,
            metadata: Wr
          }, null, Zr), Sr = rr.value, Wr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wr
          }), (0, vr.m)(Sr, Zr)
        })(), Sr
      })(),
      GI = (() => {
        let rr, Sr, Qr, Zr, Wr, ar = [Pj({
            ns: QI,
            name: "item"
          })],
          jr = [],
          Ir = [],
          fr = [],
          Er = [],
          pr = [],
          xr = [],
          mr = [];
        Sr = class {
          constructor(rr, Sr, Qr) {
            this.objectid = (0, vr.m)(this, Ir, void 0), this.transform = ((0, vr.m)(this, fr), (0, vr.m)(this, Er, void 0)), this.partnumber = ((0, vr.m)(this, pr), (0, vr.m)(this, xr, void 0)), this.metadatagroup = (0, vr.m)(this, mr), this.objectid = rr, this.transform = Sr, this.partnumber = Qr
          }
        };
        return (0, vr.q)(Sr, "ThreeMfItem"), (() => {
          const Nr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Qr = [qj({
            name: "objectid"
          })], Zr = [qj({
            name: "transform",
            formatter: KI
          })], Wr = [qj({
            name: "partnumber"
          })], (0, vr.k)(null, null, Qr, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: rr => "objectid" in rr,
              get: rr => rr.objectid,
              set: (rr, Sr) => {
                rr.objectid = Sr
              }
            },
            metadata: Nr
          }, Ir, fr), (0, vr.k)(null, null, Zr, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: rr => "transform" in rr,
              get: rr => rr.transform,
              set: (rr, Sr) => {
                rr.transform = Sr
              }
            },
            metadata: Nr
          }, Er, pr), (0, vr.k)(null, null, Wr, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: rr => "partnumber" in rr,
              get: rr => rr.partnumber,
              set: (rr, Sr) => {
                rr.partnumber = Sr
              }
            },
            metadata: Nr
          }, xr, mr), (0, vr.k)(null, rr = {
            value: Sr
          }, ar, {
            kind: "class",
            name: Sr.name,
            metadata: Nr
          }, null, jr), Sr = rr.value, Nr && Object.defineProperty(Sr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nr
          }), (0, vr.m)(Sr, jr)
        })(), Sr
      })();
    class kI {
      constructor(rr, Sr) {
        this._object = new OI(rr, Sr)
      }
      withName(rr) {
        return this._object.name = rr, this
      }
      withThumbnail(rr) {
        return this._object.thumbnail = rr, this
      }
      withProperty(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = rr, this._object.id = Sr, this
      }
      build() {
        return this._object
      }
      reset(rr, Sr) {
        this._object = new OI(rr, Sr)
      }
    }
    class AI extends kI {
      constructor(rr) {
        super(rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aI.model), this._object.content = new qI
      }
      withComponent(rr, Sr) {
        return this._object.content.component.push(new RI(rr, Sr)), this
      }
    }
    class VI extends kI {
      constructor(rr) {
        super(rr, aI.model)
      }
      withPostProcessHandlers(rr, Sr) {
        return this._vh = rr, this._th = Sr, this
      }
      withData(rr) {
        return this._object.content = this._buildMesh(rr), this
      }
      withMaterial(rr, Sr) {
        return this._object.pid = rr, this._object.pindex = Sr, this
      }
      _buildMesh(rr) {
        const Sr = this._buildVertices(rr.positions),
          Qr = this._buildTriangle(rr.indices);
        return new LI(Sr, Qr)
      }
      _buildVertices(rr) {
        const Sr = new lI;
        if (rr)
          for (let Qr = 0; Qr < rr.length;) {
            const Zr = rr[Qr++],
              Wr = rr[Qr++],
              ar = rr[Qr++];
            let jr = new XI(Zr, Wr, ar);
            this._vh && (jr = this._vh(jr)), Sr.vertex.push(jr)
          }
        return Sr
      }
      _buildTriangle(rr) {
        const Sr = new PI;
        if (rr)
          for (let Qr = 0; Qr < rr.length;) {
            const Zr = rr[Qr++],
              Wr = rr[Qr++],
              ar = rr[Qr++];
            let jr = new HI(Zr, Wr, ar);
            this._th && (jr = this._th(jr)), Sr.triangle.push(jr)
          }
        return Sr
      }
    }
    class iI {
      constructor(rr) {
        this._m = new gI(rr)
      }
      withColor(rr, Sr) {
        this._m.base = this._m.base ?? [];
        let Qr = this._m.base.find((Sr => Sr.name.toLowerCase() === rr.toLowerCase()));
        return Qr ? (Qr.displaycolor = this._rgbaToHex(Sr), this) : (Qr = new CI(rr, this._rgbaToHex(Sr)), this._m.base.push(Qr), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(rr) {
        const Sr = rr => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(rr, 1 / 2.2)))),
          Qr = Sr(rr.r).toString(16).padStart(2, "0").toUpperCase(),
          Zr = Sr(rr.g).toString(16).padStart(2, "0").toUpperCase(),
          Wr = Sr(rr.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof rr.a) {
          return `#${Qr}${Zr}${Wr}${Math.round(Math.min(255,Math.max(0,255*rr.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${Qr}${Zr}${Wr}`
      }
    }
    class wI {
      constructor() {
        this._model = new yI, this._objects = new Map
      }
      withMetaData(rr, Sr, Qr, Zr) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new BI(rr, Sr, Qr, Zr)), this
      }
      withMaterial(rr) {
        return rr instanceof iI && (rr = rr.build()), rr && (this._model.resources = this._model.resources ?? new vI, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(rr)), this
      }
      withMesh(rr) {
        return rr instanceof VI && (rr = rr.build()), this._model.resources = this._model.resources ?? new vI, this._model.resources.object.push(rr), this
      }
      withComponents(rr) {
        return rr instanceof AI && (rr = rr.build()), this._model.resources = this._model.resources ?? new vI, this._model.resources.object.push(rr), this
      }
      withBuild(rr, Sr, Qr) {
        return this._model.build = this._model.build ?? new MI, this._model.build.item?.push(new GI(rr, Sr, Qr)), this
      }
      withUnit(rr) {
        return this._model.unit = rr, this
      }
      reset() {
        return this._model = new yI, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    wI.KnownMetaSet = new Set(yI.KnownMeta.map((rr => rr.toLowerCase())));
    class cI {
      withContentType(rr) {
        this._cts || (this._cts = new tI);
        const Sr = this._cts.items;
        return Sr.some((Sr => Sr.ext === rr.ext && Sr.ct === rr.ct)) || Sr.push(rr), this
      }
      withRelationship(rr) {
        this._rs || (this._rs = new zI);
        const Sr = this._rs.items;
        return Sr.some((Sr => Sr.id === rr.id)) || Sr.push(rr), this.withContentType(new hI("rels", fI.Relationships)), this
      }
      withModel(rr) {
        return rr instanceof wI && (rr = rr.build()), this._m = rr, this.withContentType(new hI("model", fI.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const rr = `${pI}${xI}`;
        if (!this._rs) {
          const Sr = `/${rr}`;
          this.withRelationship(new YI("rel0", UI.ThreeDimModel, Sr))
        }
        return new nI(this._cts, this._rs, this._m)
      }
    }
    class FI {
      constructor(rr) {
        this._o = rr
      }
      get options() {
        return this._o
      }
      async serializeAsync(rr) {
        const Sr = await this.ensureZipLibReadyAsync();
        if (!Sr) return;
        const Qr = Sr.Zip,
          Zr = Sr.ZipDeflate;
        if (!Qr || !Zr) throw new Error("fflate Zip / ZipDeflate not available");
        const Wr = function(rr, Sr, Qr) {
          const Wr = new Zr(Sr, {
            level: 6
          });
          rr.add(Wr);
          const ar = function(rr) {
              return {
                push: (Sr, Qr) => rr.push(Sr, Qr)
              }
            }(Wr),
            jr = new SI(ar),
            Ir = new uj(jr).dec("1.0", "UTF-8");
          new Dj(Ir).serialize(Qr), jr.finish()
        };
        for (var ar = arguments.length, jr = new Array(ar > 1 ? ar - 1 : 0), Ir = 1; Ir < ar; Ir++) jr[Ir - 1] = arguments[Ir];
        const fr = this.toDocument(...jr);
        if (!fr) return;
        const Er = new Qr(rr);
        Wr(Er, NI, fr.contentTypes), Wr(Er, `${EI}${mI}`, fr.relationships), Wr(Er, `${pI}${xI}`, fr.model), Er.end()
      }
      toDocument() {
        const rr = (new wI).withUnit(this._o?.unit ?? WI.millimeter);
        if (this.options.metadata)
          for (const Wr in this.options.metadata) rr.withMetaData(Wr, this.options.metadata[Wr]);
        for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
        return (new cI).withModel(this.toModel(rr, ...Qr)).build()
      }
    }
    class oI {
      static async SerializeToMemoryAsync(rr) {
        const Sr = new Array;
        let Qr = 0;
        for (var Zr = arguments.length, Wr = new Array(Zr > 1 ? Zr - 1 : 0), ar = 1; ar < Zr; ar++) Wr[ar - 1] = arguments[ar];
        if (await rr.serializeAsync((function(rr, Zr, Wr) {
            Sr.push(Zr), Qr += Zr.length
          }), ...Wr), !Qr) return;
        const jr = new Uint8Array(Qr);
        let Ir = 0;
        for (const fr of Sr) jr.set(fr, Ir), Ir += fr.length;
        return jr
      }
    }
    class bI {}
    bI.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class JI {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = rr, this._to = Sr, this._step = Qr, this._i = rr
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const rr = this._i;
        return this._i += this._step, rr
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class DI extends FI {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...DI.DefaultOptions,
          ...rr
        })
      }
      toModel(rr) {
        for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
        Qr = Qr.filter((rr => rr instanceof EZ.d || rr instanceof Nr.e));
        const Wr = new JI,
          ar = rr,
          jr = new Map,
          Ir = this.options.exportInstances ? [] : null;
        for (let fr = 0; fr < Qr.length; fr++) {
          const rr = Qr[fr];
          if (rr instanceof Nr.e) {
            Ir?.push(rr);
            continue
          }
          const Sr = rr.name || `mesh${fr}`,
            Zr = rr.getWorldMatrix(),
            Er = this._handleBabylonTo3mfMatrixTransformToRef(Zr, eI.Zero()),
            pr = rr.jT;
          if (void 0 === pr) continue;
          const xr = 1 == pr.length;
          for (let Qr = 0; Qr < pr.length; Qr++) {
            const Zr = pr[Qr],
              Ir = this._extractSubMesh(rr, Zr);
            if (Ir) {
              const rr = xr ? `${Sr}` : `${Sr}_${Qr}`,
                fr = new VI(Wr.next()).withData(Ir).withName(rr).build();
              ar.withMesh(fr), ar.withBuild(fr.id, Er), jr.set(Zr, fr)
            }
          }
        }
        if (Ir && Ir.length) {
          const rr = this._groupBy(Ir, (rr => rr.Rar));
          for (const [Sr, Qr] of Array.from(rr.entries()))
            if (Qr && Qr.length)
              for (let rr = 0; rr < Qr.length; rr++) {
                const Zr = Qr[rr].getWorldMatrix(),
                  Wr = Sr.jT;
                for (let rr = 0; rr < Wr.length; rr++) {
                  const Sr = Wr[rr],
                    Qr = jr.get(Sr);
                  Qr && ar.withBuild(Qr.id, this._handleBabylonTo3mfMatrixTransformToRef(Zr, eI.Zero()))
                }
              }
        }
        return ar.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const rr = globalThis;
          return rr.fflate || await Wr.Tools.LoadScriptAsync(bI.FFLATEUrl), rr.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(rr, Sr) {
        const Qr = rr.yar();
        if (!Qr) return;
        const Zr = rr.getVerticesData(DI._PositionKind);
        if (!Zr) return;
        if (0 == Sr.indexStart && Sr.indexCount == Qr.length) return {
          positions: Zr,
          indices: Qr
        };
        const Wr = Sr.indexStart,
          ar = new Map,
          jr = [],
          Ir = new Uint32Array(Sr.indexCount);
        for (let fr = 0; fr < Sr.indexCount; fr++) {
          const rr = Qr[Wr + fr];
          let Sr = ar.get(rr);
          if (void 0 === Sr) {
            Sr = ar.size, ar.set(rr, Sr);
            const Qr = 3 * rr;
            jr.push(Zr[Qr], Zr[Qr + 1], Zr[Qr + 2])
          }
          Ir[fr] = Sr
        }
        return {
          positions: new Float32Array(jr),
          indices: Ir
        }
      }
      _groupBy(rr, Sr) {
        const Qr = new Map;
        for (const Zr of rr) {
          const rr = Sr(Zr),
            Wr = Qr.get(rr);
          Wr ? Wr.push(Zr) : Qr.set(rr, [Zr])
        }
        return Qr
      }
      _handleBabylonTo3mfMatrixTransformToRef(rr, Sr) {
        const Qr = rr.multiplyToRef(DI._R_BJS_TO_3MF, Gr.d.Zero()).m;
        return Sr.values = [Qr[0], Qr[1], Qr[2], Qr[4], Qr[5], Qr[6], Qr[8], Qr[9], Qr[10], Qr[12], Qr[13], Qr[14]], Sr
      }
    }
    DI.DefaultOptions = {
      unit: WI.meter,
      exportInstances: !1
    }, DI._PositionKind = "position", DI._R_BJS_TO_3MF = Gr.d.RotationX(Math.PI / 2).multiply(Gr.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);