export const id = 228;
export const ids = [228, 233];
export const modules = {
  41420: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(41347),
      fk = ik(39564);
    let Sk = !1;

    function bk() {
      Sk || (Sk = !0, fk.b.prototype._sphericalPolynomialTargetSize = 0, fk.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(fk.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Dk.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((kk => {
              this._texture._sphericalPolynomial = kk, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(kk) {
          this._texture && (this._texture._sphericalPolynomial = kk)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  36868: (kk, ek, ik) => {
    ik.d(ek, {
      Color3: () => Dk.e,
      e: () => Dk.f
    });
    var Dk = ik(36874);
    (0, Dk.h)()
  },
  37365: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk
    });
    var Dk = ik(37372);
    class fk {
      static GetPlanes(kk) {
        const ek = [];
        for (let ik = 0; ik < 6; ik++) ek.push(new Dk.c(0, 0, 0, 0));
        return fk.GetPlanesToRef(kk, ek), ek
      }
      static GetNearPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[2], ek.normal.y = ik[7] + ik[6], ek.normal.z = ik[11] + ik[10], ek.d = ik[15] + ik[14], ek.normalize()
      }
      static GetFarPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[2], ek.normal.y = ik[7] - ik[6], ek.normal.z = ik[11] - ik[10], ek.d = ik[15] - ik[14], ek.normalize()
      }
      static GetLeftPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[0], ek.normal.y = ik[7] + ik[4], ek.normal.z = ik[11] + ik[8], ek.d = ik[15] + ik[12], ek.normalize()
      }
      static GetRightPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[0], ek.normal.y = ik[7] - ik[4], ek.normal.z = ik[11] - ik[8], ek.d = ik[15] - ik[12], ek.normalize()
      }
      static GetTopPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[1], ek.normal.y = ik[7] - ik[5], ek.normal.z = ik[11] - ik[9], ek.d = ik[15] - ik[13], ek.normalize()
      }
      static GetBottomPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[1], ek.normal.y = ik[7] + ik[5], ek.normal.z = ik[11] + ik[9], ek.d = ik[15] + ik[13], ek.normalize()
      }
      static GetPlanesToRef(kk, ek) {
        fk.GetNearPlaneToRef(kk, ek[0]), fk.GetFarPlaneToRef(kk, ek[1]), fk.GetLeftPlaneToRef(kk, ek[2]), fk.GetRightPlaneToRef(kk, ek[3]), fk.GetTopPlaneToRef(kk, ek[4]), fk.GetBottomPlaneToRef(kk, ek[5])
      }
      static IsPointInFrustum(kk, ek) {
        for (let ik = 0; ik < 6; ik++)
          if (ek[ik].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37372: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    var Dk = ik(36698);
    class fk {
      constructor(kk, ek, ik, fk) {
        this.normal = new Dk.o(kk, ek, ik), this.d = fk
      }
      Tik() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new fk(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let kk = this.normal.getHashCode();
        return kk = 397 * kk ^ this.d, kk
      }
      normalize() {
        const kk = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ek = 0;
        return 0 !== kk && (ek = 1 / kk), this.normal.x *= ek, this.normal.y *= ek, this.normal.z *= ek, this.d *= ek, this
      }
      transform(kk) {
        const ek = fk._TmpMatrix;
        kk.invertToRef(ek);
        const ik = ek.m,
          Dk = this.normal.x,
          Sk = this.normal.y,
          bk = this.normal.z,
          rk = this.d,
          Pk = Dk * ik[0] + Sk * ik[1] + bk * ik[2] + rk * ik[3],
          mk = Dk * ik[4] + Sk * ik[5] + bk * ik[6] + rk * ik[7],
          Mk = Dk * ik[8] + Sk * ik[9] + bk * ik[10] + rk * ik[11],
          Kk = Dk * ik[12] + Sk * ik[13] + bk * ik[14] + rk * ik[15];
        return new fk(Pk, mk, Mk, Kk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, ek, ik) {
        const Dk = ek.x - kk.x,
          fk = ek.y - kk.y,
          Sk = ek.z - kk.z,
          bk = ik.x - kk.x,
          rk = ik.y - kk.y,
          Pk = ik.z - kk.z,
          mk = fk * Pk - Sk * rk,
          Mk = Sk * bk - Dk * Pk,
          Kk = Dk * rk - fk * bk,
          xk = Math.sqrt(mk * mk + Mk * Mk + Kk * Kk);
        let nk;
        return nk = 0 !== xk ? 1 / xk : 0, this.normal.x = mk * nk, this.normal.y = Mk * nk, this.normal.z = Kk * nk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, ek) {
        return Dk.o.Dot(this.normal, kk) <= ek
      }
      signedDistanceTo(kk) {
        return Dk.o.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new fk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, ek, ik) {
        const Dk = new fk(0, 0, 0, 0);
        return Dk.copyFromPoints(kk, ek, ik), Dk
      }
      static FromPositionAndNormal(kk, ek) {
        const ik = new fk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, ek, ik)
      }
      static FromPositionAndNormalToRef(kk, ek, ik) {
        return ik.normal.Fs(ek), ik.normal.normalize(), ik.d = -kk.dot(ik.normal), ik
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, ek, ik) {
        const fk = -(ek.x * kk.x + ek.y * kk.y + ek.z * kk.z);
        return Dk.o.Dot(ik, ek) + fk
      }
    }
    fk._TmpMatrix = Dk.b.Identity()
  },
  36690: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      Matrix: () => Dk.b,
      Quaternion: () => Dk.c,
      RegisterMathVector: () => Dk.g,
      TmpVectors: () => Dk.j,
      Vector2: () => Dk.l,
      eH: () => Dk.o,
      Vector4: () => Dk.p
    });
    var Dk = ik(36698);
    (0, Dk.g)()
  },
  37679: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      constructor(kk, ek, ik, Dk) {
        this.x = kk, this.y = ek, this.width = ik, this.height = Dk
      }
      toGlobal(kk, ek) {
        return new Dk(this.x * kk, this.y * ek, this.width * kk, this.height * ek)
      }
      toGlobalToRef(kk, ek, ik) {
        return ik.x = this.x * kk, ik.y = this.y * ek, ik.width = this.width * kk, ik.height = this.height * ek, this
      }
      clone() {
        return new Dk(this.x, this.y, this.width, this.height)
      }
    }
  },
  41347: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => mk
    });
    var Dk = ik(36698),
      fk = ik(36729),
      Sk = ik(39558),
      bk = ik(36703),
      rk = ik(36874);
    class Pk {
      constructor(kk, ek, ik, Dk) {
        this.name = kk, this.worldAxisForNormal = ek, this.worldAxisForFileX = ik, this.worldAxisForFileY = Dk
      }
    }
    class mk {
      static _NearestPow2Floor(kk) {
        return kk <= 1 ? 1 : 1 << Math.floor(Math.log2(kk))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(kk) {
        if (!kk.isCube) return null;
        kk.XF()?.JU().flushFramebuffer();
        const ek = kk.getSize().width,
          ik = kk._sphericalPolynomialTargetSize,
          Dk = ik > 0 ? this._NearestPow2Floor(ik) : 0,
          fk = !kk.noMipmap && !0 === kk._texture?.generateMipMaps,
          Sk = Dk > 0 && Dk < ek && fk,
          bk = Sk ? Math.max(0, Math.round(Math.log2(ek / Dk))) : 0,
          rk = Sk ? Math.max(1, Math.floor(ek / Math.pow(2, bk))) : ek,
          Pk = kk.readPixels(0, bk, void 0, !1),
          mk = kk.readPixels(1, bk, void 0, !1);
        let Mk, Kk;
        kk.isRenderTarget ? (Mk = kk.readPixels(3, bk, void 0, !1), Kk = kk.readPixels(2, bk, void 0, !1)) : (Mk = kk.readPixels(2, bk, void 0, !1), Kk = kk.readPixels(3, bk, void 0, !1));
        const xk = kk.readPixels(4, bk, void 0, !1),
          nk = kk.readPixels(5, bk, void 0, !1),
          Uk = kk.gammaSpace,
          Hk = Dk > 0 && Dk < ek && !Sk;
        return new Promise((kk => {
          Promise.all([mk, Pk, Mk, Kk, xk, nk]).then((ik => {
            let [fk, Sk, bk, Pk, mk, Mk] = ik, Kk = rk;
            if (Hk) {
              const kk = 4;
              fk = this._DownsampleFace(fk, ek, Dk, kk), Sk = this._DownsampleFace(Sk, ek, Dk, kk), bk = this._DownsampleFace(bk, ek, Dk, kk), Pk = this._DownsampleFace(Pk, ek, Dk, kk), mk = this._DownsampleFace(mk, ek, Dk, kk), Mk = this._DownsampleFace(Mk, ek, Dk, kk), Kk = Dk
            }
            const xk = {
              size: Kk,
              right: Sk,
              left: fk,
              up: bk,
              down: Pk,
              front: mk,
              back: Mk,
              format: 5,
              type: fk instanceof Float32Array ? 1 : 0,
              gammaSpace: Uk
            };
            kk(this.ConvertCubeMapToSphericalPolynomial(xk))
          }))
        }))
      }
      static _AreaElement(kk, ek) {
        return Math.atan2(kk * ek, Math.sqrt(kk * kk + ek * ek + 1))
      }
      static _DownsampleFace(kk, ek, ik, Dk) {
        const fk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
          Sk = ik * ik * Dk,
          bk = new Float32Array(Sk),
          rk = ek / ik,
          Pk = 1 / (rk * rk);
        for (let Mk = 0; Mk < ik; Mk++) {
          const kk = Math.floor(Mk * rk),
            Sk = Math.floor((Mk + 1) * rk);
          for (let mk = 0; mk < ik; mk++) {
            const Kk = Math.floor(mk * rk),
              xk = Math.floor((mk + 1) * rk),
              nk = (Mk * ik + mk) * Dk;
            for (let ik = 0; ik < Dk; ik++) {
              let rk = 0;
              for (let bk = kk; bk < Sk; bk++)
                for (let kk = Kk; kk < xk; kk++) rk += fk[(bk * ek + kk) * Dk + ik];
              bk[nk + ik] = rk * Pk
            }
          }
        }
        if (kk instanceof Float32Array) return bk;
        const mk = new(0, kk.constructor)(Sk);
        for (let Mk = 0; Mk < Sk; Mk++) mk[Mk] = bk[Mk] + .5 | 0;
        return mk
      }
      static ConvertCubeMapToSphericalPolynomial(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ik = ek > 0 ? this._NearestPow2Floor(ek) : 0;
        if (ik > 0 && kk.size > ik) {
          const ek = 5 === kk.format ? 4 : 3,
            Dk = ["right", "left", "up", "down", "front", "back"],
            fk = {};
          for (const Sk of Dk) fk[Sk] = this._DownsampleFace(kk[Sk], kk.size, ik, ek);
          kk = {
            ...kk,
            ...fk,
            size: ik
          }
        }
        const Dk = new Sk.b;
        let Pk = 0;
        const mk = 2 / kk.size,
          Mk = mk,
          Kk = .5 * mk,
          xk = Kk - 1;
        for (let Sk = 0; Sk < 6; Sk++) {
          const ek = this._FileFaces[Sk],
            ik = kk[ek.name];
          let nk = xk;
          const Uk = 5 === kk.format ? 4 : 3;
          for (let Sk = 0; Sk < kk.size; Sk++) {
            let Hk = xk;
            for (let Mk = 0; Mk < kk.size; Mk++) {
              const xk = ek.worldAxisForFileX.scale(Hk).add(ek.worldAxisForFileY.scale(nk)).add(ek.worldAxisForNormal);
              xk.normalize();
              const wk = this._AreaElement(Hk - Kk, nk - Kk) - this._AreaElement(Hk - Kk, nk + Kk) - this._AreaElement(Hk + Kk, nk - Kk) + this._AreaElement(Hk + Kk, nk + Kk);
              let lk = ik[Sk * kk.size * Uk + Mk * Uk + 0],
                pk = ik[Sk * kk.size * Uk + Mk * Uk + 1],
                yk = ik[Sk * kk.size * Uk + Mk * Uk + 2];
              isNaN(lk) && (lk = 0), isNaN(pk) && (pk = 0), isNaN(yk) && (yk = 0), 0 === kk.type && (lk /= 255, pk /= 255, yk /= 255), kk.gammaSpace && (lk = Math.pow((0, fk.Clamp)(lk), bk.i), pk = Math.pow((0, fk.Clamp)(pk), bk.i), yk = Math.pow((0, fk.Clamp)(yk), bk.i));
              const Yk = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const kk = Math.max(lk, pk, yk);
                if (kk > Yk) {
                  const ek = Yk / kk;
                  lk *= ek, pk *= ek, yk *= ek
                }
              } else lk = (0, fk.Clamp)(lk, 0, Yk), pk = (0, fk.Clamp)(pk, 0, Yk), yk = (0, fk.Clamp)(yk, 0, Yk);
              const Lk = new rk.e(lk, pk, yk);
              Dk.addLight(xk, Lk, wk), Pk += wk, Hk += mk
            }
            nk += Mk
          }
        }
        const nk = 6 * (4 * Math.PI) / 6 / Pk;
        return Dk.scaleInPlace(nk), Dk.convertIncidentRadianceToIrradiance(), Dk.convertIrradianceToLambertianRadiance(), Sk.f.FromHarmonics(Dk)
      }
    }
    mk._FileFaces = [new Pk("right", new Dk.o(1, 0, 0), new Dk.o(0, 0, -1), new Dk.o(0, -1, 0)), new Pk("left", new Dk.o(-1, 0, 0), new Dk.o(0, 0, 1), new Dk.o(0, -1, 0)), new Pk("up", new Dk.o(0, 1, 0), new Dk.o(1, 0, 0), new Dk.o(0, 0, 1)), new Pk("down", new Dk.o(0, -1, 0), new Dk.o(1, 0, 0), new Dk.o(0, 0, -1)), new Pk("front", new Dk.o(0, 0, 1), new Dk.o(1, 0, 0), new Dk.o(0, -1, 0)), new Pk("back", new Dk.o(0, 0, -1), new Dk.o(-1, 0, 0), new Dk.o(0, -1, 0))], mk.MAX_HDRI_VALUE = 4096, mk.PRESERVE_CLAMPED_COLORS = !1
  },
  41109: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk.f,
      e: () => Dk.o
    });
    var Dk = ik(39607);
    (0, Dk.s)()
  },
  37497: (kk, ek, ik) => {
    function Dk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const ek = 16 * Math.random() | 0;
        return ("x" === kk ? ek : 3 & ek | 8).toString(16)
      }))
    }
    ik.d(ek, {
      b: () => Dk
    })
  },
  41393: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk
    });
    var Dk = ik(41376),
      fk = ik(41397);
    class Sk {
      static ExpandRGBDTexture(kk) {
        const ek = kk._texture;
        if (!ek || !kk.isRGBD) return;
        const fk = ek.JU(),
          Sk = fk.getCaps(),
          bk = ek.isReady;
        let rk = !1;
        Sk.textureHalfFloatRender && Sk.textureHalfFloatLinearFiltering ? (rk = !0, ek.type = 2) : Sk.textureFloatRender && Sk.textureFloatLinearFiltering && (rk = !0, ek.type = 1), rk && (ek.isReady = !1, ek._isRGBD = !1, ek.invertY = !1);
        const Pk = async () => {
          const Sk = fk.isWebGPU,
            bk = Sk ? 1 : 0;
          ek.isReady = !1, Sk ? await ik.e(341).then((() => ik(60794))) : await ik.e(323).then((() => ik(60800)));
          const rk = new Dk.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, fk, !1, void 0, ek.type, void 0, null, !1, void 0, bk);
          rk.externalTextureSamplerBinding = !0;
          const Pk = fk.createRenderTargetTexture(ek.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: ek.samplingMode,
            type: ek.type,
            format: 5
          });
          rk.onEffectCreatedObservable.addOnce((ik => {
            ik.executeWhenCompiled((() => {
              rk.onApply = kk => {
                kk._bindTexture("textureSampler", ek), kk.setFloat2("scale", 1, 1)
              }, kk.XF()?.postProcessManager.directRender([rk], Pk, !0), fk.restoreDefaultFramebuffer(), fk._releaseTexture(ek), rk && rk.dispose(), Pk._swapAndDie(ek), ek.isReady = !0
            }))
          }))
        };
        rk && (bk ? Pk() : kk.onLoadObservable.addOnce(Pk))
      }
      static async EncodeTextureToRGBD(kk, ek) {
        let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return ek.JU().isWebGPU ? await ik.e(342).then((() => ik(60811))) : await ik.e(324).then((() => ik(60807))), await (0, fk.c)("rgbdEncode", kk, ek, Dk, 1, 5)
      }
    }
  },
  60655: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      AsyncLoop: () => Dk.d,
      RegisterTools: () => Dk.g,
      Tools: () => Dk.i,
      className: () => Dk.l
    });
    var Dk = ik(39662);
    (0, Dk.g)()
  },
  41430: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    class Dk {
      constructor(kk) {
        this._pendingActions = new Array, this._workerInfos = kk.map((kk => ({
          workerPromise: Promise.resolve(kk),
          idle: !0
        })))
      }
      dispose() {
        for (const kk of this._workerInfos) kk.workerPromise.then((kk => {
          kk.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(kk) {
        this._executeOnIdleWorker(kk) || this._pendingActions.push(kk)
      }
      _executeOnIdleWorker(kk) {
        for (const ek of this._workerInfos)
          if (ek.idle) return this._execute(ek, kk), !0;
        return !1
      }
      _execute(kk, ek) {
        kk.idle = !1, kk.workerPromise.then((ik => {
          ek(ik, (() => {
            const ek = this._pendingActions.shift();
            ek ? this._execute(kk, ek) : kk.idle = !0
          }))
        }))
      }
    }
    class fk extends Dk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fk.DefaultOptions;
        super([]), this._maxWorkers = kk, this._createWorkerAsync = ek, this._options = ik
      }
      push(kk) {
        if (!this._executeOnIdleWorker(kk))
          if (this._workerInfos.length < this._maxWorkers) {
            const ek = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(ek), this._execute(ek, kk)
          } else this._pendingActions.push(kk)
      }
      _execute(kk, ek) {
        kk.timeoutId && (clearTimeout(kk.timeoutId), delete kk.timeoutId), super._execute(kk, ((ik, Dk) => {
          ek(ik, (() => {
            Dk(), kk.idle && (kk.timeoutId = setTimeout((() => {
              kk.workerPromise.then((kk => {
                kk.terminate()
              }));
              const ek = this._workerInfos.indexOf(kk); - 1 !== ek && this._workerInfos.splice(ek, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    fk.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60689: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      AbstractThreeMfSerializer: () => Nr,
      BVHExporter: () => qb,
      ContentTypeFileName: () => pr,
      DefaultXmlSerializerFormatOptions: () => Zb,
      DefaultXmlSerializerNumberOptions: () => ob,
      EXT_lights_area: () => Yf,
      EXT_mesh_gpu_instancing: () => XD,
      EXT_texture_avif: () => mb,
      EXT_texture_webp: () => Sb,
      GLTF2Export: () => aD,
      GLTFData: () => mk,
      GetXmlFieldMeta: () => tb,
      GetXmlName: () => Xb,
      IsQualifiedName: () => Ib,
      KHR_draco_mesh_compression: () => kf,
      KHR_interactivity: () => nf,
      KHR_lights_punctual: () => mf,
      KHR_materials_anisotropy: () => jf,
      KHR_materials_clearcoat: () => uf,
      KHR_materials_coat: () => Ef,
      KHR_materials_diffuse_roughness: () => XS,
      KHR_materials_diffuse_transmission: () => Bf,
      KHR_materials_dispersion: () => Of,
      KHR_materials_emissive_strength: () => Rf,
      KHR_materials_fuzz: () => HS,
      KHR_materials_ior: () => iS,
      KHR_materials_iridescence: () => bS,
      KHR_materials_openpbr: () => oS,
      KHR_materials_sheen: () => MS,
      KHR_materials_specular: () => yS,
      KHR_materials_transmission: () => AS,
      KHR_materials_unlit: () => FS,
      KHR_materials_volume: () => zS,
      KHR_materials_volume_scatter: () => hS,
      KHR_texture_basisu: () => eb,
      KHR_texture_transform: () => GS,
      Known3mfRelationshipTypes: () => yr,
      KnownI3mfContentType: () => nr,
      Matrix3d: () => sr,
      MatrixFormatter: () => dr,
      ModelFileName: () => wr,
      NumberFormatter: () => Gb,
      OBJExport: () => bk,
      Object3dDirName: () => Hr,
      OpenXmlContentTypesNamespace: () => Kr,
      OpenXmlRelationshipsNamespace: () => xr,
      RegisterEXT_lights_area: () => Cf,
      RegisterEXT_mesh_gpu_instancing: () => cD,
      RegisterEXT_texture_avif: () => Kb,
      RegisterEXT_texture_webp: () => rb,
      RegisterKHR_draco_mesh_compression: () => Df,
      RegisterKHR_interactivity: () => Hf,
      RegisterKHR_lights_punctual: () => Kf,
      RegisterKHR_materials_anisotropy: () => df,
      RegisterKHR_materials_clearcoat: () => If,
      RegisterKHR_materials_coat: () => af,
      RegisterKHR_materials_diffuse_roughness: () => cS,
      RegisterKHR_materials_diffuse_transmission: () => of,
      RegisterKHR_materials_dispersion: () => Gf,
      RegisterKHR_materials_emissive_strength: () => kS,
      RegisterKHR_materials_fuzz: () => lS,
      RegisterKHR_materials_ior: () => fS,
      RegisterKHR_materials_iridescence: () => PS,
      RegisterKHR_materials_openpbr: () => OS,
      RegisterKHR_materials_sheen: () => xS,
      RegisterKHR_materials_specular: () => LS,
      RegisterKHR_materials_transmission: () => sS,
      RegisterKHR_materials_unlit: () => qS,
      RegisterKHR_materials_volume: () => vS,
      RegisterKHR_materials_volume_scatter: () => WS,
      RegisterKHR_texture_basisu: () => Db,
      RegisterKHR_texture_transform: () => RS,
      RelationshipDirName: () => Ur,
      RelationshipFileName: () => lr,
      ResolveFormatOptions: () => gb,
      ResolveNumberOptions: () => Ob,
      STLExport: () => xb,
      ST_ObjectType: () => Mr,
      ST_Unit: () => mr,
      StringXmlWriter: () => Sr,
      ThreeDimModelNamespace: () => rr,
      ThreeMf: () => Rr,
      ThreeMfBase: () => Xr,
      ThreeMfBaseMaterials: () => tr,
      ThreeMfBuild: () => Br,
      ThreeMfComponent: () => Wr,
      ThreeMfComponents: () => ar,
      ThreeMfComponentsBuilder: () => or,
      ThreeMfContentType: () => Lr,
      ThreeMfContentTypes: () => Yr,
      ThreeMfDocument: () => jr,
      ThreeMfDocumentBuilder: () => Gr,
      ThreeMfItem: () => cr,
      ThreeMfMaterialBuilder: () => Or,
      ThreeMfMesh: () => zr,
      ThreeMfMeshBuilder: () => Zr,
      ThreeMfMeta: () => Fr,
      ThreeMfMetadataGroup: () => ur,
      ThreeMfModel: () => Vr,
      ThreeMfModelBuilder: () => gr,
      ThreeMfObject: () => Ir,
      ThreeMfObjectBuilder: () => Tr,
      ThreeMfRelationship: () => Ar,
      ThreeMfRelationships: () => Cr,
      ThreeMfResources: () => qr,
      ThreeMfSerializer: () => eP,
      ThreeMfSerializerGlobalConfiguration: () => Jr,
      ThreeMfTriangle: () => hr,
      ThreeMfTriangles: () => Er,
      ThreeMfVertex: () => vr,
      ThreeMfVertices: () => Qr,
      ToQualifiedString: () => Tb,
      TokenType: () => Dr,
      TriangleSetsNamespace: () => Pr,
      USDZExportAsync: () => Fb,
      Utf8XmlWriterToBytes: () => br,
      XmlAttr: () => ab,
      XmlBuilder: () => fr,
      XmlElem: () => Wb,
      XmlIgnore: () => hb,
      XmlName: () => Eb,
      XmlNameToParts: () => cb,
      XmlSerializer: () => er,
      _ConvertToGLTFPBRMetallicRoughness: () => Vi,
      _SolveMetallic: () => di,
      __IGLTFExporterExtension: () => rk
    });
    var Dk = ik(36690),
      fk = ik(60655),
      Sk = ik(39861);
    class bk {
      static OBJ(kk, ek, ik, bk) {
        const rk = [];
        let Pk = 1,
          mk = 1;
        ek && (ik || (ik = "mat"), rk.push("mtllib " + ik + ".mtl"));
        for (let Mk = 0; Mk < kk.length; Mk++) {
          const ik = kk[Mk],
            Kk = ik.name || `mesh${Mk}}`;
          rk.push(`o ${Kk}`);
          let xk = null;
          if (bk) {
            const kk = ik.computeWorldMatrix(!0);
            xk = new Dk.Matrix, kk.invertToRef(xk), ik.bakeTransformIntoVertices(kk)
          }
          if (ek) {
            const kk = ik.material;
            kk && rk.push("usemtl " + kk.id)
          }
          const nk = ik.geometry;
          if (!nk) {
            fk.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const Uk = nk.getVerticesData("position"),
            Hk = nk.getVerticesData("normal"),
            wk = nk.getVerticesData("uv"),
            lk = nk.oik();
          let pk = 0,
            yk = 0;
          if (!Uk || !lk) {
            fk.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const Yk = kk[0].XF().useRightHandedSystem ? 1 : -1;
          for (let kk = 0; kk < Uk.length; kk += 3) rk.push("v " + Uk[kk] * Yk + " " + Uk[kk + 1] + " " + Uk[kk + 2]), pk++;
          if (null != Hk)
            for (let kk = 0; kk < Hk.length; kk += 3) rk.push("vn " + Hk[kk] * Yk + " " + Hk[kk + 1] + " " + Hk[kk + 2]);
          if (null != wk)
            for (let kk = 0; kk < wk.length; kk += 2) rk.push("vt " + wk[kk] + " " + wk[kk + 1]), yk++;
          const Lk = ["", "", ""],
            Ck = (ik.material || ik.XF().defaultMaterial)._getEffectiveOrientation(ik),
            [Ak, jk] = Ck === Sk.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let kk = 0; kk < lk.length; kk += 3) {
            const ek = [String(lk[kk] + Pk), String(lk[kk + Ak] + Pk), String(lk[kk + jk] + Pk)],
              ik = [String(lk[kk] + mk), String(lk[kk + Ak] + mk), String(lk[kk + jk] + mk)],
              Dk = ek,
              fk = null != wk ? ik : Lk,
              Sk = null != Hk ? ek : Lk;
            rk.push("f " + Dk[0] + "/" + fk[0] + "/" + Sk[0] + " " + Dk[1] + "/" + fk[1] + "/" + Sk[1] + " " + Dk[2] + "/" + fk[2] + "/" + Sk[2])
          }
          bk && xk && ik.bakeTransformIntoVertices(xk), Pk += pk, mk += yk
        }
        return rk.join("\n")
      }
      static MTL(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const ik = [],
          Dk = kk.material;
        ik.push("newmtl " + ek), ik.push("  Ns " + Dk.specularPower.toFixed(4)), ik.push("  Ni 1.5000"), ik.push("  d " + Dk.alpha.toFixed(4)), ik.push("  Tr 0.0000"), ik.push("  Tf 1.0000 1.0000 1.0000"), ik.push("  illum 2"), ik.push("  Ka " + Dk.ambientColor.r.toFixed(4) + " " + Dk.ambientColor.g.toFixed(4) + " " + Dk.ambientColor.b.toFixed(4)), ik.push("  Kd " + Dk.diffuseColor.r.toFixed(4) + " " + Dk.diffuseColor.g.toFixed(4) + " " + Dk.diffuseColor.b.toFixed(4)), ik.push("  Ks " + Dk.specularColor.r.toFixed(4) + " " + Dk.specularColor.g.toFixed(4) + " " + Dk.specularColor.b.toFixed(4)), ik.push("  Ke " + Dk.emissiveColor.r.toFixed(4) + " " + Dk.emissiveColor.g.toFixed(4) + " " + Dk.emissiveColor.b.toFixed(4));
        Dk.ambientTexture && ik.push("  map_Ka " + Dk.ambientTexture.name), Dk.diffuseTexture && ik.push("  map_Kd " + Dk.diffuseTexture.name), Dk.specularTexture && ik.push("  map_Ks " + Dk.specularTexture.name), Dk.bumpTexture && ik.push("  map_bump -imfchan z " + Dk.bumpTexture.name), Dk.opacityTexture && ik.push("  map_d " + Dk.opacityTexture.name);
        return ik.join("\n")
      }
    }
    var rk = 0,
      Pk = ik(41109);
    class mk {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const kk in this.files) {
          const ek = this.files[kk],
            ik = new Blob([ek], {
              type: (0, Pk.d)(kk)
            });
          fk.Tools.Download(ik, kk)
        }
      }
    }
    var Mk = ik(40729),
      Kk = ik(40693),
      xk = ik(41196),
      nk = ik(40701),
      Uk = ik(39377),
      Hk = ik(36722),
      wk = ik(36868),
      lk = ik(36729);
    const pk = lk.HighestCommonFactor,
      yk = {
        ...lk,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: pk
      };
    var Yk = ik(41397),
      Lk = ik(40720),
      Ck = ik(41162),
      Ak = ik(41166),
      jk = ik(41413);
    (0, jk.RegisterDumpTools)();
    var sk = ik(39566),
      dk = ik(39570),
      Vk = ik(38272),
      Fk = ik(39672),
      uk = ik(40053),
      qk = ik(41393);
    let Ik = 0;
    const zk = (kk, ek, ik, Dk) => {
        if (!kk[ik]) {
          const fk = kk.useDelayedTextureLoading;
          kk.useDelayedTextureLoading = !1;
          const Sk = kk._blockEntityCollection;
          kk._blockEntityCollection = !1;
          const bk = uk.f.CreateFromBase64String(ek, Dk + Ik++, kk, !0, !1, uk.f.BILINEAR_SAMPLINGMODE);
          kk._blockEntityCollection = Sk;
          const rk = kk.JU().getLoadedTexturesCache(),
            Pk = rk.indexOf(bk.getInternalTexture()); - 1 !== Pk && rk.splice(Pk, 1), bk.isRGBD = !0, bk.wrapU = uk.f.CLAMP_ADDRESSMODE, bk.wrapV = uk.f.CLAMP_ADDRESSMODE, kk[ik] = bk, kk.useDelayedTextureLoading = fk, qk.e.ExpandRGBDTexture(bk);
          const mk = kk.JU().RU.add((() => {
            bk.isRGBD = !0;
            const ek = kk.onBeforeRenderObservable.add((() => {
              bk.isReady() && (kk.onBeforeRenderObservable.remove(ek), qk.e.ExpandRGBDTexture(bk))
            }))
          }));
          kk.ZF.add((() => {
            kk.JU().RU.remove(mk)
          }))
        }
        return kk[ik]
      },
      Qk = kk => zk(kk, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR42u29yY5tWXIlZnbuiSaTbZFUkZRKrCKhElASQA0EoQABgn6hJvoXzfUP+gP9hWb6Bg00IgRoQJaKqUxmZmTEe8/v0uB2u7Fm2T7HIyIrnz88uPvt3f2a2WrMbOvf/u3PvvzP/sUf/N6//i8vf/lv/3v5H//d//Sb//Uq/5u8yf8hV/m/5Cp/L1f5hVzlG7nKJ7mKyJuIXN/hPwqXI/g++zq6rPI5u8z+WqfLre+zy7PrVv9L8brsMiGvk8XLmM/sdfHXal4e3ad6GXPdyu2ij8u/+uv/5cuf/OSLfdtEfvUr+dnf/d0X//t3H/7bf/hP//N/928h/0Yg/4VA/kogfyGQP5Wr/IFAvhbIlwK5CGQTPP+9z5uPeePJSW+yo2+s/GtN30Rnv1E+f5zxof9R/lSXv/nr//mrr3+i+5dfyX7ZZQP07Tffys//8R/l/9TtX7790T/7r/8G8pdy+/8XAvnnAvkzgfwzgfyxQP5AIL8vkJ8K5KsmMVzu1U7p5PA5AXxOAJ8TwPf7sX/51ZeXfcemqnp9w/W77/S7X/6T/vzf/7383RWCX3/z05/9i3/13/0PX//eX/2FyP8tIv+PiPy9iPy/IvIzEfm5iPxCRH4lIt/c/393//9BRD6KyKf7f488fP74/PH544dJAF9cLl98IZfLBZtuqterXr/7Dt9982v95S9+Lv+gF/3i7Spv/8lf/vnf/vGf/dF/JfKnIvLnIvLvReQ/NEngn0TklyLy6/v/34jIt00iGJOBlxAsdvv54/PH5493SQCXy9t2ueh2ueimKorrFbjq9eNH+fDtb+TXv/ol/vHyhX4Fxfbx7euPf/Lnf/PfiPyeiPyhiPxxkwB+fk8AvxzQgJcIrGTwFsiAEXH4/PH54/PHUgLY7whgu2C7bLqpQgHB2xvePn6SDx8+6G9+84384vKF/IPu8iVU9Y/+7C/+jWxffiHytYj8VER+X0T+oEEBvxqQwCMJeIngo5EI3goIwVMIPn98/vj8ESaAbbtu2ybbvl8u2ybbdtluSECA65u8ffqIDx8+6G++/VZ/efkV/sO261dQXP7wT/7kX8vl8qXIFyLylbySwe/dE0CLAr65B/9vGn0gQwRMMqgmhM/J4fPH548eAezbZd/lsm3YtssNAYiqiogAAkCvb5/k46cP8u2HD/rrb7+R/2/b9Wu9yJe//8d/9Ney6S5yEZFdRL68/38khG/uKOCnAwoYkcCoEXwkEgGDDq7CeQfyOTl8/vhd1QCum26ybZtu2yabbrKpQvXue1yvuF6v+vbpTT5+/CDffviAX1++1V9sO77WXb/66R/+4V/dgkbllQi+aBLBV/dE8LWRALwkYCWCNyMZXElkwLTMeMkga/P4/PH547ccAVwuctkvdxSw6bbdtYDbTfSZBN7e8PHTR/3u4wf55vKd/nL7DX6mu3791U9//5+/gkNFZGuSgZUQvnKowKgLWLTAQgRtEniTuEfwaELw0MJvf3LQzynud+53uG+X6y3gN9kul+2y6XVT1U27JCDAFVc8ksAn/e7jR/nN5YP+avtWfq6Xy9f7Vz/9w1dgRYngiyYhfNkkgzYBWHTg44AEMmqQUYQKOmDaiCIa8TmsfmzB+DnZDQjgcpGLbti2y3bZHjRAdRMVvb/dcYU8kcDbPQlsH/CrbddfbF98+RPZfvLFnAQeieCRDC5DMvju/vmD4JkEvjRQgKULeGggowdHkAHTYxihg89vu88I5UeGAPSOAFTlrgPopiqbKPSmCKreUoAAkCcSePukHz590m8vH+WbD9/JP335k6/+tA86KxFchv8jMvhiogE4JQm8XhfKqOAqx5qRPyeGzx8/cgSwbXcUoLJtim27C4Oi93+4v6VxQwKAvl2v+Hj9pB8+fZJvt4/yzfbF9lPdv/wJnsE2BogmyeCRED40tGFvksIXiSbgiYSRRpDNDZ6BDI6ghM+J4fPHeyKAO+zX7cb9t4tedMMNAQju5V+f1uAtBSiu1zsduMrHy5t8ePsk3376KN98sX/xE5FPAnm7/782o0DiUINXMkCXCB7/P94/e87AWUmARQWVvgMuKej9t1RLBp+Tw+ePgwngsutFFdu26WXbbl+rSvdfbnqAiuA23QcBgCugV1zl7e1NPm5v+LC96XfbJ/1W9y++fgXjA3bDYXV+MuhRwSPwL3JLMFYC+HS/LU8HYrGwIhwyNOF12SvgM4SgztdifP85MXz+KGsA2C6X7aJ6bXSAOwrY5OYIqGy3d5uq4P5GhABXuV6veLvRAf10fZMPb2/y3b7vX7+g+9v98/WOBq7GG7RNAlYy+Dgkhhb+Xxp0sE8IAC4SGAP/TbgVJK/PoJPBnAiwPKxsXfbbnRg+i3s/JAK4Q/4b9NfLtomBAqCickMBjy7BuywAUVyv8na94tMjCVzf9KNcLl/0SeA6oAEYb1i9g+FtSALb/bKL8/+t+wxXFMyswqiHoK4ToIgKqslgpg1qUC0QoYbvJZg/B/q5v4szHmPX7YEAsD0CX25OwEUVm9xag1+agKg+nxQArnKjAtDr9U0+Xd/k4/UqH7bL5YsewrcBBiMJZPRAp6TwQgWfjM9vgRbgUYGL8AvLWH2gqhesCokeUmCSwPsnhs8fP2YNYMO2XeSmAWxy2VQaXeDmDIhApf33rD4PTUCuV+DtCn27XuXT5ir8VmCJ2G5BpBM8/r/dEcJb8/0lEQMtJHA5TAlqNuLRhJChhEpSqFabH3di+G1AGj+W1/dyAR4IYJNNnuLf6+tWC9CHHiAtFhAIFLjK2/Uqn65X+SS67aK+3QeTDoy/IG2ogQ7fb/dAtz5vBgrYGqrwNtCHsVfgIvwK07OTQBURVNCBFpKCOjqCHn5L/67TgTN+fpySAC56nwSUi256kXsSuFGAVyLoUIDo8/Pz7fdoErr/v17lk162HbgHvFpIYDfoAJJfW4sGPjkU4VNAF8ZEcLmLhdc7kljdY1y1Dq9yLiI4IiRqcLujb138KIPn80ejATwRwIbtBvn1cqv+2J78/5EI5N4cJA8qIPcmwRsKAHDF9WYP6mV7VmrgLuTpxYTcMEW0LAmoQxFsuvAI8tv/a/C5fV2ZMMiKg++FCM7RDPRu8ebWY7VG6VJi+Bzk35MI2LsAckMAgwvQ0gC5DQjd3ABg2HQLAPpEAlZ1Bu7VV7MGHDFRAbo3VKsTbAY9sPWC/uvx86gBbDK3D1eEQS8pbAeSgSwmhepnJb6uBv/o/PzHLzxWA/X7TH77De5j6AGQi6o0CUGfCOD2X7cXAlCFQABtEsGLDtxuOyQB2UTQBKZe5GUPXgkUYCUAbZJRhBDeuq8xBf+bgwbehDm+BFQi2IJksOocvA8ysIMfxluVcRsY/eB3JzH8GFDAXQO48X/dcIf9jyDHptIigDsFkEe066tBSETQUYF7ElDdYEBytN4+rk9UcBPfrKaZqFHWcw3i4J8/X4ev2//bSXqAhwTay6OEIPLD2Ipt8OtAGzxkwLw9WVFRjTc/qC6H3+YK/b1oAA0KuOizHfieCLaHHiAb5NYTIC9EMEbZrVEQt1xwhVy1UfBh8PUOquMizwaap3tQXfY5B//tea/NZdfhsvbz+PURQTDSGWB87VX/7WSd4KxjUqrIgE0IUkoKGnhIvwvawpGf6eECXJ7tv4qbA7DJgwpsKthEmmYgfaAAffYF3HLxo0vwNjJ0SwRWMG4db4eh1gPNm18vQ+us/0eGmxDemu/fnM/X4evq/8342ksGHgLY5LyT/zg0wM8lcMjgGFXwqIOVFJBQw99eCvF9oZL9Mfl3QwAvIXDsBRC9R+fz8x0FPBLB0xJEpwUobrfAkARgIAF41h3wQgP6QAmX5E/7eI43IxGwwf/moIkRyWRJQIPgt9CA9b39nzt4bYUWjAlCjWDPgv8IEjgLJfzuaAsrv9VdVG4OwOXW/fdoA35qAdL0BDwvf6AAUVHd8LIEu94A3K+Q+2YxaB84MOH62P//qoo38fCRDERE2zf0JfmDa+MieElAjcDPKz+mRKCOtdgGtXaBjgNJ4H2owSpNeAW/rRH4CaHSpMwnBYYycjgSJwfie9CR6mPu20Uv8kABF206AvXlBMiIBPSlB9wjBW1fwEuSb94296VCqgMaGCt/G1BbExi3IG+r3a3J6P48Gv/J0YmEYoiGY7V/SxwFCwGoE/xa0AJ0CEiV9QPCJb1OJ5F1VTjEY2/MO9AEJvj1BJTQpqLfTlGwjABuzT962e4IoKnyrdh3+/6mzDVJ4PHOxj0JqGKoy20+wBMN6D1gLWi9NQHfVP5MEEPzjGYy8BMAOnTAJgEr8HUIejRo5xrA5xkR5AngmiSHs+zDDAmMgWzTg55GSJEmHE8IvWPAoYTfhWak/Wn/bQ0CGLSAjv83SUEfKp5q24LXuQICpzrjrgWoza8xVE00CQCORdhMJuTUT/rjuls0gO4Iby8BIEgK6gS7BsGuTtDrScH/fR68biUHNVGBnxjeNyHEvQe/ve3LZQqgG3rof6cEclsNflG9J4KtaQ8WHcVBHS1BtHE4QP9OBMS98mpbKTeDW7dJwRsnHpMBTFJpV4I+b0kY/NqInVFSyBLANbnMSgBM8F+Fqfxq/h657/Up+GaBnwV9hRqc9bZ/vA6vu+T9E8KPJWns94UfTeCj2QXwCHS9dNL8Xf3Ho/rfewSeFODGDV69AU0y6NFAE1DP3qK++rdB7/1HRxf86gT376zOr99T/h/ioBiXWQkgQgVeIrCC/WomhDmQK+hASI2ARQZKooHMLdCJwGEBBXC3+uERwg+VOHZ9ioAt9H80AI06wGgJ3nQA3BoCut6AhxYwgcPOFnxuFnrphk+NIKIGrWPQtgz3b0i7Y6D5rs1GKqTop0nQX52vmQC4BkjA+r4a7Kx9WLENGeegkhSETBCrNXIMdi/444Rw1n6E96ry7OPuj8UfLxtQ78NA2iSBbg7gIiIbdDLsb5agPhLC3RkYKv8NDbS2YGsatNRAG2oQwf9ZIOydgy1MAzBkAw8UwEEIDzSAqdPQ6za0PkeJAMH3Z0wXniUSZoHvBXU2mcjQgv56TedIKglCpIoQfgwCIjOytd8WgN0bfxoR8Fn9Gx0Aj5Zgq0lIZbsH/ibSJoFnS+C98g9ooHEELI3gliy25yONIiE6pb0NfBlyNEYyENoodkKwgl6I6s8kARgJ4ZoEfuYWHLEJa0LhSBXm7kImGeSfVdoJ1DO2G7WXsehAptupSOoyrCSF904k+6vt98X/ZcM98Hsd4JYIXhQAIg3/f9AAUYhsLQKAtkHVBnzjCKhOoYl2ym+iBtvzDzQ2DLXJ4PUmbJHAVnBQX4jkxfvHhNDqAdHXGQJgv0aSDGItgOseHIU+K9hXnIJzkoGlEKzNHagTdJ6VWEUH4iCKH4fd2AwDPaYBm4Wgng4gQ9V/CoGiuNmD04AQtNGMGzSAAQ2I2pzfogY9LRh7BrbOh4+D30sAencljFu2CUFrwY8UAWRfWwGvVOVfbx2uIILM0pwDv082dUTw8hYs8L+uIWiHGpWgClnAa1lMPJogovvvbePPs/q3Xr++kgCsfgB5oQF9WYKPJqEn6G+OE3i5AqouF59FQOmahQC8rlPLj38kg1c2f30vw+XaoIX24/pMGIgSBoZqoH3wo0sIIGlA9PWcCPrAtpPB8eBf6x1o6cHra+2+tpIFP4PgBfxZtZUJfo4qxELT948D9ucK8Mt9+ccjIQw6QJcEbrD/1g340ATuDgDkFfx6twSf1f9xvuBECYxq/7ythQQGm+5JDx6Brw4CkMGT3wgscCUoQ4sU2t6DR2ciBjTgtcpenQoZVX9NuL4Owc+dVaDursYVkVALX+shjSBKBuvCYDUZjE5BdNkxdHAUBexyHwB6NP7Iyw7sxUDViwge1t+mz8B/LAvVx/c3PeBBCToB8IUGOgqA3iV4yUg6UAOxaUFHDx6CYS8SorMOue0CCJGAf5YfRhoAI+A1CvwxqNkAY5yAIx2EQmkFfeWOXi+nEdSQQA0ZHMEItiagJArQxDXIrj8nCfQi4HZPAttrIahso9oPQ/2/JwV5JQU8zw+7I4D7/sBn4EO6rjw0FR+i3Z9fHtahzsFvJgM0X+tmVH5vaYiNDGAigewAz+gyNLThnjCURQFR1b9d3lZvnVqmj9mEPDKIUIC4KCCjBXywS4N+otp/Hk3QVthOkwEKlV9PQwXjT7s/zwF4Qf9toAAzFdjuaEB6S7D1//U5FIQu2MevO0rQQH8ZmoXE6B/IkgE60XCjVoq8gt2iCG0S8L5GdxkM1cGsfsCMArSCAnrr7dzAZxCEEpepvB8tqHJ/q+bmJGGts/AcAXFOMMeTwC7Pw0B6CtCtA2vWgonqBQJFSwH0JQK29OB2kvgj2HHXAoyeAIsCQO0kMNECAhFMqCBf8mElAkyBbX1tJQP2RJ/ha0gpAfS9l+/5n00CkrQpq0MZbOdAuxmMvHswog62jZj7BnYQe19b14kxNq2D/ehX/p68HEcF+x3yP7z/V/A/q/5DA3i5A/dzA5pdgbKp3v3/wQF4Bb70WkCTHGRAA6+KL0bFl6FJaFw0ImZwm6igSwbbwPn9RMBWf3sN2JgA/BVh/Rg0kQBgePf6HglAHLFQwqQQOwDjbdVxNZjR4iM6Qa3WxwvNxh0JFb3g/WzFQQS8b/ttKcDWoABtUMAd8j9hf0MB2uDXhzX4CHj03L9DBU3Qjz0C0l4mLSLQPicOOwZoVCB6P6dA7nDbGkVuxcNr8PU2JQO4wX5trEqmccZaHU4q8oCDFOpzAnOwqyMIMktNNNAHouDGxO37DgArQZzlmp/14W1QlqHTMaIIx7SCx0+5yza7AKJ3IXBrNAHVDcMZAU/BT/vgv/ULPOA+XiLggAREDF2g0ci6xNDRglegd7P7TWWH5oJfayliEg7bScQRBVgI4Ookg/F6rvpLWP29swREqA3CaG8/FpKqS8DTAV4TiBqIqtxfzaQRLys5I0XEFIFrPbZRQb+16Fgi2LvJv8EFUPW1gGfQv1T/F/d/HBnccP7rAwnIIyHI4ArgWeGbU4eHy6Tx/EeTZIb5bo/BsMBjmjBE08f/RB0PHYBd9eVRAGY7cHRwiBf8WeCPHY1bgBTa9xKTELzEkQX9CPtl0gJiqsAmCT7I8xbjivh3JGFI+D2nBcSJQJ8agDX+O9iBL7UfG4bzAkcaICrbtYHz1ycSmGmAjJfL3CMgT3tQpmrfB7gxSzC1DnvdhQMieG47u75+kTouKNkM8c/+vq/Q7ZYjO/hhVvRq8F/9gGfhP8aqE9EIdR6LTwJ1h0BItyDqB8iFwuNqASscRnYioxOg9ApvnYA35f8e9Ohbfe8J4rknoFkO0lmA2gmAG0YK0DkB4ieEjiLoMD8wBzom27ANZkzIoU8EMHk/uo1mzeVoEoRWKn8L/62EYAX/lsB7D/LXg74uAMr9oGivJ0CNJCGD6i9DhZdQF+gtOp4S+NODRzsDVbhdgv4BqTMNyIL9SCKwL9/FGPp5oQKxIf8A/UX6r231H7YIqLML0Ae2GtrADOvRQH5b/MPE9dt9BGLNG8jVTAQvIaK5TtvvvWQgDvyXIClUA78S9Nfg7VtIBlO7cbsEYkQDMot+ygQ7QwmOawTHnAM2XUSnJvPIYRYMmYPS+sv3J+cfP3d04JYIXsF/EwMbBKB9Q9AY+BiSwFj9mzrSXmcJhFPVHySTbgHJCPvRQ/z7G/SVUETsg0ZF+i3CRoCjhf7y1A9mOiDD7TwdwEoEXjLwAv+avLE2B7Jnb+OqDpBoAchoQJskxKnss0vu7Q2YhcDv4ySeLOg9GsCKiUIihP7yfW7zbTsBh0TQfN0iAWn9f72Z56/Ax9P7j5OAH/Qvv3/QxKfk0DgDuP+R3USg3bzBC7bO/QT9Eeh9QvDPG7glBQzJwK740lAFFgFk8P88CqDGAa223YckWYhr+c0BPdwetl2ocnsfzePAWcVnnAIp6gDVhDLyfV4nqFEDPxHsbWD3k4BDkN+pARqKMLYBPzYEvxp9xmCHQQdgWH/9EtH2TIFpu3AH/cdGydv1j0TQbRrq+D/mLcX3ZACZ15bF378CG0My6Kq/zoGOQwhASDFwFbxyNGBuSxbCEhQ/uEPe/6gAERWQObCVVfjPpQX+rexxYhYFxIkgpgX7Y/vPs+Pvxf9vwt8kAs7i32t3QCP+3SPaTwIytQXP38u0PESm+YER+o9B3vr8mETAUfDrEkPI80ck0FZ0dXh9U+HRbhey0cAc2H7A4y4egoD6y8JfkBiigLdFP8v2W00E8deT2IeAKujZ/QAVKpAtKI20gLWksHedfgPcb+0+NEHefd9vB9rayi8h7J91gBbaw20MsnWAF5xHkyDUCOoXp+yrOwwxcKj0aL6fFppaaKDv6OpHR5sgx5BAlK/+fYhuP1D196o8e7lFBaKqv5YIMnFQpd0FGVR35RJCnCDaABaXBtgbiSwtICMtalKC+1JQ6bx/PLcDPQL91QFodQNKpwOgF/9eqcBxBBqRcKAAVk+ArQOMx1RYGgB6naDhlK+uQQwJYx4meQbxtNnYQwMjt/d4f3M9ZE4UOld1LAh99fbfzOxiEkKFCkTJIUIMUeVnJ/9sDt8/e1NEJOi9oVHDGYhgnSLss9DX2IAqw1zALUncKcDr0FB5NP+0cBQNrEezDiyiADPkt9qGpwoPdL0AGPx/NOKeyf3b9WJNdfcFv6bKd2cLMJVfJ6Y3B6wB9WFUfWWEwKMfGiQL+3bz9XGQz2EHKhF41GCtZyDi/gUCsNhYoAr3UNJ58YidHKqnMb/6AB5J4N73/4L+t7mAkeeP3P+1LNSB/l0SkMEd8DcEuUlguEw6t2AU/PCE/q++Akw6QFf1u6SBrj1ZnnhG50AfkoGIdf7gJv1KcSfgzWWkQ9U33Z3tHXYASKJ9e/YhU90rvD+q9Ej69/wxYJVs506Eg/r3DkMDzEdDBRGgcZay49XihLA30P+l8N+hf1f57/0AoxbQbwYaan/rBMirE9Dk+sBzTkC8JNDEUlv5McB8PP19Y01Gayep+hC/2zvQ/2HGLAurowsNGlA1cnqGGzeH5weiYLZm7h3QQC4O2tXdhvMMk1ZS5ebpgI8eMrPvPGkwaxayk8Yc6PMOBPEdC1XZ+2UfbfOPtxLMQQAG9BcZFoF0gp/RKjxe7+oAw9T7ZPWhgedodgz0gf5KBtrtIZhQAZpAV1Bi36w6t98qVfH7hqGI318lLCjLCUFlxRHwqYEH9a2qb4XjWvDT7kBwfbZA5P0+PNuRuW1yf4yNQH3zzwv6b70QOJ0G9OT/dhoYRUGT15uQH/71MjQLtQlxfDuiCXrtM+SkA+icQdH6sU/xz7Ze7FlubV4TpoTQ2osdpaEjtqADmEU7OkBEFoLeC3IWFFeswJXKXzkboNL+wzcFHU8hTGKIboO7CLi1/P+5F+gydQhuvRbwEgxvtACmANikhLTbj0gCYk8KdlYgmj+4Ymaod7TwahwadICuX0Cm2fE5iNHPK0x/CDV66Kyg1MnqjNFBnhBoLQCgUULfaVe5nq/6EQWY67bXCszUb+7232fVPz51iGB12owK9peyP1T4raMFF/OEYJP792mgXYfZ04GHMAhBkCSmSj+dKqRPgVFGHbpLEGMiGFeQWfSgrY52VxaeDUPSNJI0P7NoisG729HHl78z6hxfs9rV3m4JjgM/lsui2qmThjCfDFSb+I9vwUqG5wwL55U7C+6ot8B+7N2o6r3q37T9trfpjgmTvv7PSQATLLeRAOZhIJHBQfDQQJPBdUwEbVW3+L08EcEE/9G4ANrCeWcnPKRHDupbNynMx5AA9IRYLmrc/YLSiD5EaEBS/s/TgnU9ILcH19n+CpHwegLejx7Mn/d25fdN+e9U/1vgb7bqf08MOtf8EXxaoh+GY8L6gDfhvs4i6HQ7seYI2sv1GchdMsBIG3xlvxcCRzdgCPTn+6q/TW00VE8Q9FaFv+R2VlOM1vm/hhjhDCdgNflVKME5B47I9xT8z0YgPAJ8myb/LqHy36j/Mwqw9AALxuO1JVjiuQAYLcFzIhiEPe05fk8tRjGw7yWQbsfuLAT2VqOId1osnr0F49VM8INACPHDoBz4B5mqqSnUgyh3ArjXxfQH5BbgUS8gP7aU+w0zHD9GGD0CGHf+P1p/DeivlhU4BbxR9a2kYFR58YaDZCUR2P0DMmgED2eg77puegy6PgDphEB0CwlG/i9d+/Hs34pBEQrBn0W51mqGnJAk3ACCHeiqkQ1XFQA5AlKH7Lk8yJKWY3/nym14h2C3JvxeMwD9ZVMz0BPMi1n1RbKl1cYhIVblF3G0ATsRiCMUvoK9//OgcwYMoe+ZKOLlC6/Xk50br9NFz9fanqA8UIYSpCwlBO4kHc4WLLBfBHVaKwKgLQjmP4Un61Vq+3s7Bsyi0WztmLjJwJwFeE0I2vD/1Q6MVwefxfUf32skCPbCnxQqf+QMPEUDHZ7vGeyj020JgkPXXwsldA7SYR1RE3h94NvNtugswcgxXEkIcBPCGZ1rmrgDC0A4K88nm2fn/eTnpQtWyZfybRoK8Dro4zYDIMGsf7saTBzvX0SMbkAD6o9CYbsfMK38cJKD9l2FJt9/VGs0h5Gib33pxMKWNsigFUh3G2un+/N1WUglI/EEx8fq27vUNnwsiOoKecL7kQS8VnWAGCFUgn6dBtQhv40CmIYggwK0uwDHRGAuBXVdfwzHUjZzATLMAoyJ4FmBhzaWBlrHld9CCWpPHRqofBqMReMGTJ78q9rDes1Tv7/0m0v0AFHXNR6P6g30SHivin7V1BOhh3iWPwvps/yE836L2XiwnUT8x2iHgfqhnwn667QHEE8oLQjEvtEW7GYBZDrDVkwNIO4G5GiBDf9fGoFM6n+vbEtzXwP6u9AduaWnGYSLAlVdl/AU+ikrSeEIKgwdaZ4AACAASURBVKj4/wtgHcHtdO2nWKcBkPfxcvnNQvsj2Me9f02r76T8q0IBn9OLKfz1HX8yVXQYGoAB/2UeBQ5/5kCL6+H/OGGoRnLSwdd3oH8r7KkGTbgIxEwVWvnF8KOpHnyzfF9Jod5Px+IF1h8owyitDw/XEgRb5bPqbt1uvn7qBIQ16vtS/u+DP3cR7CH0WWJgd5mTJKYgNzoGjQrfvu99NDBC+bnyW1x/qhTatv2OaMKgJWPvv5kwnMgxHYGFRtJW8VMl3uP+MgoqSZyWFKr7+KIDw1d6+IiOgZI4+d5iYL3imzbgyO+tph9t2oSBxOM3ugHtPoFZ1LM0hF4kXNEBssvVgPdjdXZWK7uKvyS3q1Xb1WQwtVDqSUggq+Vw3t56JA2cz7PXOwGNW1ecwxPhfe3QEUsDsFaAz8jg0nf+iZMAHNg/XSazDuC18Iq1HBRrOsAQ8NLB+16g614jmuSgs3bROxE55D+WDDQNA4ivdMJ9M1b309UqknaDU8ObV9/PwmMPATvTMAxpABLBzugUtV9bLdhNDQA+7B9tQJ06/7QNDHGSwtgZOCIA47InIoDdROQGtt0U1HI3GaoUnCnC/rzBMQJteN17+VaAzYNA7e+PFqHQUyXPUYB7iQYa5ZFjq1Zqpx8Uqu/XT7+6BWC1Xaj0GlBIwMoHu7UzcI/6/Acb8KIq+hzmGWmAYnADrIpvKP7TZeLaf0LAeQkGgebbq9FToI44p654F47tekKkI0L5PQNZPsDwPBpy/ni+wKMN76Vav4+2cFZFf8+JwAraMt0DFB7beA/u4Zz/a+RXx0M/ct4/jwaNAS8G17eSwmta0Fhx0VRxJkHMivso+onMXr+YwdWKbgioy1jp4x4AzIKg5lEA7wvHEYCRmdx11TAuT6lDLVl4KvXkAET9P4RT8H2u+lg9EPQIpw+/NpJ7RwE8HaDv/Mu4f3OdNkq/EfAiEiOANjEALvcWL9gfFV4NZbgbQc6qPky4Pm35QZxtH1f4j+P/jXuaYPcWwIEH/fmEPBoAO4m4LGxV3txOQqDU+dXgey+UwSzuqP++uImO/u/6ogCb7wTc1n61sL+vZi87rxnrNas+giTg6QLzaUCjIp6JfhwtGI7AjBBB9JjDY4ePYVR6ZPgN4owVv6Q2N5hhVHwNeYrM+w6dN6K1sMHZm/Ce7bHe3dzKr1xw1w4JrSQMZtgnoQHlr18fzunAszD4qurNUg/TDqzx/lfCaO6t4tACMUQ6P6htWjDPC1hCoZ8kpODzJ70MUR9AODcgwyqyPhmE+wfHYB/hvSqt6qeXUShhXH+d9SR8DzrDaZZdpSp/HxqLMQuATgDU/qDPRgOIeT8cvz/h/XC6BtE7ACLOWPE0KIS4UUjmZaJ2grBphiWgT41BUVWZfP3AnEIT6OrfoF122l2rMycBoU5i/OXoUZ4/aglsXwLzHNU++FVF3qikOj5HXm2PBitT1WuvJRAB+6O//W0/PY8vQH5IrAsMs/WuVmAdHBrQgrbOxJShXwRSsu08h8JMBpo0+aDTALwV4tbswgzHrftG/dJKIAQb5h9KCssWIMeto+GYqG12/HWGjx8kzqNJaa0noMWOr2KwW01AMwJoNvhMQda2/RKQP/3ecABM3g9uD6BY68Ntz9+nDOMb5iV+hIE+dP/Zs/wwJhJ9mgBnohBuStABUXjugF3hkXF9ZZJAjefKdHZCc389LoStKvIl7QIEb1d9RyciQgFDI9Cjyccc/23Aam7/PZJBhgDgin5CtQvbCzX8ip9YgIFtOAt+w0owp/hOiCWgEGbVHuYjRigPGR/YOnEoqPDoV5z5YqB3mRq2ox5ICmSSgAP1Ne+XV2NE+/vuFbCTRADxtS70VRBCjgBk2OyDUQiUgfl77b7DwaHm2rAZ7osRSOOUoHgKfNBSLI767+oDYrfwZvqChSpGfj3pFwZFsCJg2jeIQQBUiyI4WgD68ww4qO8khuWkkIuDrxWv2nv+UTBpJYiPd0KemTA8qqFiuUF1jWS3BoG6pADJq751JqBI0wvAVPyMQvjcX1zbELltKK+zBiXRFiRxG+b7q3M9xuLdzR8g0gCGNzSM5gNYfqGO9CBT8OHct6oB3KsSDBisUnwsFuISQaRHxDSv0vptt2oeLHMERfRn/FG/Cx01EpgIQG8LP+/i37PKw53xn6sYCM4/JwSRrCnIeB1ZkLsawDhaPKv/njU3wnZ/dBdGE8+YTHSG8+ofGgIjsC19YnwdM/KAnTSsqj6ig7uGgIPw3nYFzhhIIvriAxFP9CQd4HSlnzgxONIdrE7A8ZDPx9fjib8ifgegNIliRgdx95+E1T7+3nQVNNhEzDgGA3T2rEDLduwtPpuuouPcs8swwXFjdTaMKt+jA5gUAQPcf95KJQxYU0cYxEDvsBSmYuukp7AwnqniC9Afa5z8vboI68ImT0t26CvwBzSggkj447r9IojvCn7U92J/Hw0QSdwZKNNjxPCfSxRqnATkdwpOwh88oc4J8KTSm/wdbZjrc+4iFP8YO0/5JJDCfaijK5xVXevqfg6zGRrQf83chvX4aRfAE//6vv5+6490U4ADdO7QgM/5bcHP/n4OtCQhBEFeDWSvos8DPq8/IwzLzjpa8/U6MMSkBklDm8e0mn3QIY7XG1Om8wzN48y7HwhOK3P0/ZwUQHHv4psbdoVeb9VlAjChBCdtDDpOKTh9ZfcagOYq31RFjN4/gwBYzp8lAwYNwBELhZoxECeZxMlAzWGdCRV0fQWGHo8+8Kx+AAxnCIzowAxy9KvNepWfsfp4RR9kUrD88CPVTuXRybhqqTHcnxEGndsgub1Gdug8yz9fHt3Hpl57x/mfCOC29FOSQ7/noAZR5W3Ob24UMpuPYAYiQrQgk1gnFoUIKr4vKFpV15pHUJO3Y5rfH3UFHU4bGkU+NKJ9f2hJyOMxDBDpjAgwiYqvk5TqNl9EH2Arb6fA3yaA4cBtPWewhkEcIQJBlGzYp6zRmr1v+e3Fv27xpzvyI44NGDkCIi7CGNV9Dw0M8NtHC2vUwHINumCGNG8erxOwtQINsW88Tlwdoc+F85nI559ngEDpt2F/Uu3hiXYrkN/pBFS26hYDAkFgErMK67y9mGBA3L5ore5izf8b3n805MOq/t7XU4WHv1DUF/5gugCSOAIW/59uMwl6CHWAib8bvfxWl9/rBGEMTTwDfG+ezEYG4yk6FvRPuPwE+wvc39IRjENWM+/cm5b0W4Pf4WuKUnw/vD6eDbB1ETs5vl77Dhnm/51g6wPWwQAqxnivgQaeS3gy/u/1H4hpTPrIgHAN0mSgXUX13YP5PMIuQAfBr/f70cdeE+QoCX3i8nFMLcAjInBoAIYqt1LhC1WdtvmSab28AYffaeivCB+ohdYQgfUa/WS4ToMsNLHLc9nnvPZLwn1/EefPVf+U/xvnCVSEQEkEQEnEQJO7S7RvYDxNeNYKrG7DKMhtsQ8cMmhgPKKKj+F7CiHYFR5KIIPxOmg5IVAtu3ACQSPh7CzUQOgAej5CWEkIe3vgxz0ROGO//qYfz/dnLT+ZxDr4QW0eNCJBorCFOVC312Ec2TiY5Bk0cAaQmiA1VH1MOwDHQ0kHdEDDf+2UTWhS4Z8diQMicLx8MLBfverLcP/jQzF0P8EJj5+NGK9RCz755S6F/f1+X/gxeP+Wsedv+vF8/54aSPJYFjIQd624MDz/UDLQnr8HU3ztKHRf8Qeno1vyAQJBaLcMtTV3cvgP56COCqd/QP9xLgBkH4BxO13n4hNUDtACC6G1S3zqooZ6Ba4lp/zcAFb7iERKQwQcF39IFJjdXECGADw0IE4gg674pYAnk4HoHPx54tD5daO5vxrugSkMjgiiqc7TVKAT6AT8R4ckbHEQCYR/IZBxJgA+XZjsR7vaoRpIxWqeqfXuGC2CxwudicwePEB1kNkaZCuwyF0DuKv/4sz9mzP/Qxdg3BDkBTMC8Q+loD6UGBzx0Kz6eAX/KArOQTlPHFoI4vVtf4rNuLrca9edRn4xBP7k8w+9AgZCgBfEUZWfEs8iFNZ3UO7TqmkjCO/rWdgco/yIqHcQWaC2EGTzgz5y/iXQAvyx3riyxxV/JeBriaGB9OrTA5g9/eokM+37GszqfA/UZk9iW5UnCtBqBl3XoNN6Ag/+zy6A5evPAp+TIFDn15gQw9rjrOzFX0s2JBVAxa/nP1a6AsNWYGjPNGPLTQgBsNUFvOA3Ht9o/rGDN0tWOCcxJGp+f7++kkP7PxcGv1+GjkaLt/fawpwwerQxBJNW4b+PJsYEgiAYYdEAGIlDNaAbRkIgK3ut0jKByp+8yz23X6GttmBmjwDvChgiYLP5V/zhH6/110sGcKo5CkggCngxnIPoPja0j2B+1BRkiYJiviaLJqghDI63G2nAgAxMCuDdnoD0wIQm+urMB3VuAwbBrFGgGgnhAFqg9+ujKsLxB3qGCQNEEtPinIQlAj4WgIw7/iXc9V/x/yUWFs2KH504bAh4aYWf4TrTLGTy9YbftyLeVOWNfYNyt/ji29mQnqMAltU3ioTtbX343yv/1u0YPUBz6zB702tQucnX0gWaFh6DgPdmhXaapGotw0SFz1qDiTMdd8h45HfcqCPRUhA3+NmKz1l9teCPaMd4urGaewRitNBDdahR5c3AfQmDCFT9vmtQEwqAYXX4XI2n23Z9B/Yb1FL+LWox6wHGbZSo6FR1LzyG+3hriSZvWT6jfXhl2cmQZJDrAbuYAqAHo1GA/EOgD8eGcU7A8eDvH4fQBuAhBL/Zp/vamPTrRENDGLTV/7E1WEPLDlP/PwzU4YhusIMUgfIPAr6Dhv5R4y2r8ldFwiFoYHnmr8TAHbhRQSZOctH598ZYhqt6wP7q/ouqe77RJxvzFYaji/z4vna4v5cUMDXqDAJ5ytktqtBDckyjvJg04hl16LB0xFfyMfD77PZjErGQRRjYIfSvoAXntks0ok8MsUC4KARWnYPlJBeIgLeFrUgDOHYCag0/XNAbWgRwQuLAsaQwIhC1g7+jCNKuT38JfnYSyTi+QQEwwHeT4/dWHYxJPxfOj5oAnRQqgU3YgGZSOaDyK3n/qkDYBKptzR3oD6B4fyRKjp2AzSl80YR/3P+/1vBjX18Jbu+YsrMRgbqPP8zrDLTAaupphfeZtyPs9BPztpLSBZjowF3woYRwBwOWaqbev15b7X4RWsiqYiY6ZkFEIoUwUA2OrkeEQE8HYNyD/rl3m88jCGgO/nPW3xy8x4Q/HBcM1dYg5q8N+B/SBSYhtD0EY1PRGLDoKIBHF3yLz4H/gSYQJRETgqeB2d4vC8L2NVnQn4PoVJJAcP0inahAfdXVI8CFszjRagCTtRdV7Sr895NBpRKXIT64RMFw/iw5eChhEvmmyUIH+k+Qu3cLzOAN6ILlFvgWnx3YWFDz0f38ze9GlfP6UQ3ojEY0gtqRIEbA5/WgQFhsEuIeL75uTzvqHktAWfj/OD6sQXssROcGiRgFn0QVkld7OznMDT7CJKzhMIqxW9B+LCOQdH4uyxIcE49VTSeLj0wKjzcp2oDXQA8YoDEGBLMW0BJw+eAxXejPV/IXd59/tp5rVyYXDw5BlRetSpQAcvgfOwVM8ObzBq/AQ2wX4lwkQV3vNhYFfn2LFgaoDU1ogqsfqGkJYmrj9Tr22KQwBLzbLuzDeA9yzyJjVRfwegWq0H+FThDPA6ZhZwX2M2Kh4waovCzAWJTzD/qY00c+6PM8coz08VNqglzx54LfHuTJK7z2rwX35ABLg1DzsZ7Qv7l/f2yXDlbf4C/irg0MJ0aCuD0wP74MrxfdFlX7tq+vtRdCpvt599EG9Yz3V+P+Oj/n4zLruZHcJ7oMt/MNp9eD6HEeFb6/TMfbWo85Pb79HJo8t3371/PuIAZqMvjPC34nVV6ZB4hEuA7AzA5cfU0y2n6ux89D/35/n2/vWY5Bf0qwf3tPLISO1Tap9qzFB6eap/beqI94NCCbGwgqOItY3CGl446CaQ8i2Q9g0AvmgJOnBoAA0gu17tsKtKS7D4udgCYERy2QIceCX/P7mBW+g/7D9S6Mn50CS0eAoQPDcBjopIA5+EcxEjLweRjXq0UbLIjcBxsGx2IZvlf0ATjz/6qypAmY7bhrk4ahsIis6ccXKHdueAfUgk+RWPCLh42c6zEeKyJpRTdRAOqBbl/Wq/uT+q+Fx3FoTIuCzc6+hN8j4veGjuAnhSE5gKnco3A3XwYlq2sq+lmP4yEOpqEoG0M+mGDYuYT0pKCFHgLHKt3T7T9p8GcWH+n1UwGa8X6kQt2x4CeqPexegT6o/Z4Cr313PHdgrsS2ZReLfpKIf+IMFnmVmwxQ9AhithYT73+p2s+JIVfrjwiHnpAZrSsr9CMstQXP1+1+510N/q8E/YoekMN9OMFvi5LvkRDsy9rgFCOoPdpgaQIWBZjf5KCSQszZJ1ivTvLokpen6tsJAVND0NFqb6GUGg2Im4Dyx9Pn7/0dm4pADAslJzTv+dKNrAPQ0wyySm7bj1RQgbAXsRa4R+mBJzpaQmHLmy0BLoL+Nh2ZRca8uUc6P37k97n451fvTieAE8BdZ2ItqFEK6oOJIYPsiU4woo140Oh+H/UC++gatHYcOFT+2y3AYvD1rM/fpxdUcsAi70c0OxAEP45X/hymE9XeoC0zfYhbcqfbhs09HpwnKMDR6g0mmYyKth/UcLl9ITGQ8N1S6s+gA1HvQCc2pluPvN2Br8SyZyfyxPP/VhCi1L1HWX2CQCuAE8TIq/sBYdANZmTIwqq0sb0HIzhhugBeUpBZLFyA8y+EErsBUYDZHYN9QAAooQwOws+uQlhdESSSqk5Qsh8LSYI6LDS1AbmOvLlRBqQIeITvM36+TP63VfE5hFClCTr9zEyVFwS3STQBy66DMHB+PJWIrfgGnYBx2dTboPa2X49GaBVlePA7CFx4iaGi4ns0aLVjMGvtPTDtmO4XEE8E5Kb/8qYai+NHl60LgAICcUCoJPVeiYG6Pxw/X9VFNVbFn9FNPzXoIRDTyzcpREYB5Fm1EQQn3KRi9wKApR8Tz48SwxnV3qM0q7ZhpdKvr0zfY+gO4oQf+EGPFYW/Xf5hwWsUgxiBbShGoGIx+D2eH1h2EeR3UQMH4zMaUKr4033nzkSkfQADelFbLOQCalxdxvN8mInhPas9bxtGJw29Fx3Y8429MAS0fL33Oeo7qFZeiToCC3B/VSNYuU0fgDnkhxGgMFdxiYEY7MYel+OHPH30IMeVFK1C79l+QdXVpFqHlMAXEf3EYDyfkkGdNvJ8f3RAXU0jpgM7jMNA5yCrtfzOicKG/M9bgEkEjqqPPDEcDfqVwGZv6zcO9avDfOhf4OmLFd9OLBHHdxp51HvOBlnAoQksYjASA1xnIhPsapTCPjbsGB2YevpPpgM73EYeSYIftgPgte6CWesVBB9QEgfnWYMgoeC8ql69bWoRIqYHvSIv/u26bj/jdqZ9KSGk74JRo6QS9PuTiSHm6Z62kLUGH0UO4rwWrhtRETkR4iKRdI8giJ2D2nUCMjsA0TXiVDb98NAf/rCMlajA9wesWHZrAe1dlwRyVI2jx4KkyUHSx7YDe6YD4tOC6XW01puEdAJwaEJzf1uATHi6ZlSCpBQscsh6C1xRcWEG4bCFeKcAVhVlDu54JQIkTT21hptIT/Afk0kMcS9BKfjBJozcDXCrtgbWXxbMAw3INQIxtQJPAGwXmYaBbYh4SCsuKwLOAQ5awKskCMmRg8P3xwlBfbosQaDqyZqBkyQe1CLQACoTgN4qbyHsPwkTiF2pYaj6MAXBmUosQHnUEYCsBL3MW39SNKMJ5PfoBsT33DVJCEbFnBCMOkHfvj6Xq8uw+dgRIhGgAiUqf5QgKDFyhe8nnYrlqn9sG1GoAfirubygX4H+8IM1CmQrMFAJ5ExzKIp54nPoVU2Auh6eBShDlTV4u5c4HE/fVvjFrsII0Ik6QX+Iq68jB19ziLoKC27FYe0gC+j1RSS+BgB7AvAM3m8HLdy5fV60C8RMVuhD1ieQB32MCCq0QPJuvuw5IHF/geMKwOPdpmsxBwVEfGEOgeincJqNmuSFIPhPq/xM81CWIIi+gCFBqDX3QPYd2OcCRo6GZBoA3AM+00aesAOQ7/2Pe/vBCXoguD4OBD1WfPwClzcui12AuH+gC0gEwW72KfjBCQRBr05D0IQc7N8PzOCMehPWK384MPVDJQim7yDdoiRTItzzFV/ZOX9sYFetP0fsQzb6O7wOoFjxk89YoQXv+BmSN+yYHYO+BsDRAXHhuJXsEFbdIEGZQWUkNVNzGA9NZUVBIQL7jASR0AclE4Pb7JN3BO72mG92+o8UG3nybj+mASh0FsLKn9GPxDrEcS2Au35BzHO1BksriIJdpqWjKR1wlpR4fN977rZqI+XbYjYDgVDpcYQalOYKMiuQbB3G6Pu/HlMbi9a0EMkksXtjvvXTfgMKAEZRN/i/O7yD8Da2S2Bdh3ICWfp8yuMkYl5a4df4vVWt4UF0yyqEnaT6swYyWB8/j111Y1ERS9oB0SLMtBGDEBD1PEHwtdjUEAHnqmoHU4wCDAoAS+lHwtu9eQLUAgmxVvAuMB9cELMV3m8EUtcBYYI9nkNIEEJYrQeUHfnzzRyC39j8CgSkir/E0P2odnAmAqDnDIhqrtV9BDNS2POjv/0pwKr6z1h/PMz3uf9ykFYq9TtoAXSwpz0HljdvBCVAPY6t7osv6gFhMpkX13rcfXQMIpuTsfTibkfOPRAC2meLRipI4mDPwMD5x+v3+Ey+qEfACwoUEkKQSMZxYJDz9R68PyP43yvo2aYf881rNQbZgRU/jp80QnW/hdXqJxMvCFxXQSNHpE8QiF4XI+wFfQcw7VL2Md7RRajsKgh2D+6SLAKPF356+/7yXYBTUgFy/38StUjFHweD+iiHh8/LV/i/TSvGk4L5x7F6AsIKbgb4C0YjgdGRIToGUx7cgS3JKP8pRcgak95BJGQbjaJdBYQ1qHYnYHL8F45QgHx2gLMQ2cDxBD/4SeR0LSDi5XzPQNjM4ySE/HGG6g+ugltLNSARn281BPtNO72eJLjdX4ITSEgpQvJYFEUg24f1qAYQNQdxx6Q/RcB85j9f+03zf2QV33IDPHegNgPABTfqFR8cZK9TA7/ll0EQbUUHW8Gr1d+MSadia+LRHwhunv87yWoJ3h/pRDwJAbDNQQFd2P2mH4kP/wDT/ZeN3CK3+ZjvgVpw4r20AMafb58j4N1UMknuj6iCx883PU9g2VHVH5JX2eEcPghSgRBCKPzK0Q3fknwPN0Hk0CyC0zBkz//7duEetgFjVtypASDI4CsknYJgYDhqsBxxy29+eyxrAZX75EEf8f+CkOcijMDDHx4ASYGGu8WHgPwpHJc0qOG8FgFTuVk0cRZVePFwHEIUEu8xSHoL5qWg4I7/HgOKXe2dcnu2SSdCGIDTA+AcxY1zYL6Q6AAFu+/1GvjKPSeEoJV3NiM4Dz9C6oWkEav+NWjPWXNOIkKgNTi2I8LeBgaZHJxqrC4oNXoB9pzzMws/OW3ghSyQJgjbygOVEDhoj4nHLld8HPD6UUMFVLIgKrTL7cFoBRLQgEdXIseZ2/HhFPKbk4d5tYWwwR0nIFQSD2P5gQhs6meVfB+Bkyz2fOIvX/zxqsSODuAGIOLtPNnmIPCrv6Kqvgz3q4tCwNl9lWYfnsdHj2HTgQw5IBHwULmfSu1jEV3gDFSxTBmqSEVqiYK2IkWcRiAkwV/cyW9YhqHXDw9dkNQAcO6HFNJT7oChfrPUYc3KY17zAd+evAwF2w5SCKLV4EuCEKsKfjBVWHu9Q9Arh4CoBqEMWYBsNX7YgKP/69uC3M7/mOOz232QT+ox4iCyJGEFP4oBHd+GVvXBwX35nqp7qeIbV6L6tdZub3ueJ+gBIKgC6S5gOQFxDoGr+Bv2nzqbknd7ph/EmXzO0o+kZdc/wqvQkAOUffVMzKtYgx5Vob1/+HAfCdzHSiXHenX35/2JTr3KZ9Ruj2lYiMhLIFoNyMq9hFroeYMTE0bSLbhb4l3YlFPa6hMd2jk8dmrDgdQCnC4/+ANFlYTB6ATlx2GDGXP1rvL+SnWHw+cJes5/rRWt4H2pw9GklD4uSMpwasIQiaYR92gIyFX5S8dtRZt/nCAH48VXW3hRE/HKOsGquj8EM85Q9cfeAV4XwNGAlmIFIwPYrfLKuxV476RRetzcdeAsRSZhiHizCKEIOHn3EMOWy5X4uIJnXX6sFiBFLaBm/THOQAkVJK9j6TKwiSDTBWpwHkSPQJX7U959uAkoaTUuug6oQCBz1Zlxm0OJSIoIw04M+7zCGuYiznCfHww9AN6Ir+HXA7lfn2oBSJ2FOOh8SzINfmcAyITq8JX/sOMPx6A9LeYtVfwgCBZhdu25OB9/XmWWNPUEPD5dUuJ68wd1AqD2+w1PI9KxE9BW5t3z/igdYGWiL7L+wPv9jgVY8f0ZcbCKCuLAHN+c5wa69Zpr0J9t2KnpAGzyiAIPiFalJ8/xXrrA6Y+/8NoDnWCPNwFJzf5DpVkHte8hx76P+HU1+HEytEeSEIzAsu5r6wPJGu6oLz8VrKofXLce+ywIHhNa/Dmw8LrptWXZ4NKZm4pr/QQ7Qk8ehMrPtAF7PQCD309QgRgRZMKgAbFREAfBBXNalbHA9cEHMo4IgIUuPjjBWEUFEQpYTkhVO43eRiynJw9Jjj8TOUIlJExK+0wA4gWgQvcFBHAc7P4/u78/Ff4CC5ATB3P3oUwFClYgcALcxzp/B9Ez4DUV8RjBbsCBrMH4dLNwIDaCGhA6o3pXksdBvYBsktrXDgNJKAFy1Z+ZGIy5NXgXoBT8a3ZgVSPIUAMV6DjLxhsV8wX4n4ibbONObHNyCr8Z4FinNFjg8ziiF5zSV8A99u7Zdf5OisvVaAAAG3VJREFU/kIPAJLWX3hUIFD6o7MD4WkHIMXBk4IftSrPNBJVk0OoC7ice8HGS8XBKDoz/YFBLaQi392lGpCMJfhD9xVkx5Xbj73P9V4m1j0v73x9FjDDPlYvATkgFAVWcdNvJBamliOjAwRV0EpeRymAe717kMYRyy/j5FwFBX0fP7Dyx8gq8wn2ZXi8GfGYR+lFcGJSxa3Y84WgzBHetlU4cvKY44Ps4iP9fsgsPGEhQTAcHqwwGCj61SoPexKwasXFqtxq8qhD9SixoBBYcJEDNzmIoi3J7QkoJActVHocTVpPBCDhElAvMDK1PT/Sq3DwB/ygmyB9GNhYDH4so4Foy48kkPtZfZEv1PQTxYpyX0EI3Bu+/5krcN8fgwVdwWu2JNVNWAk+PcOOPMNdGFyAZ5Aj6gicgzNfwuHZg0HrLxBWfjSRl88fVCo/apX/IBrIvf65ZxtEoK9Bec4KZIPLe76osQns46NwW0pUPCPAyMc4A/KXOwZzFLGbAqD5xhhbgBcWfoJBAlarcCSQgdQJ+Movnih4gjZQTw51rz588y/ZgxVUEAQ8soCfX8OR26JwujCLGFAMsOjnwGrlPuQw9D/PPv8BYVR7pG/eeFtQpsLzR2KFI8SwKj9KlX++HeLOPuSBKrKeHBi7L4b+Kx184+ptAp4Trcscv69oARVYzWgaK01H1X0K3zNSmARKtxXYHvwJuT+8gLGGWgpHcWOmBeljFB2Ckg6wiAYOqfxEK3GMCAj6kIiTWdCBCXhkjUKMgJcLk271N9uLSbtvvK0S69OXAvoA5z94VsFubbmZvx4QAnXgBnJxENyQjy38wef81uPhxMpPJIQzr5ckuUTKe0wZyN57iFTWga8GvCwlh5UqvYgmaNV9XSxEVWs40kkosFwA70RgNOu8mLZfR6wDiwRa35y7j08NksqPQhcfkRBK/J8R75Iz+9C8gJpqzwiIeZII3QnYOkJWbVEI5jNuA+o2BwK82ifwnpSgHwaC+GNAdmW2VXfC+vPu6wR6lBj84C9WfvivZyUhZMJlJhjSukDlFJ3g4AvGJfC1iEpQJ/CaEd7G9wds7p71+odruKrHip/C7RdsxeVjzIxhoNkFGOW/+sk/YVAGtltfzZAIfzix8gcHhZCXpcGN2u69qWqD9OlRFAy7x2fQBhHUiETB+DocqvArYt98f+AEAXApsEmEcNLC0t2uPHCqPQIXwHYDfI4/9+8LMpchqr5HK39MJSrBXwnutNqjovjHFdq+fcHLp7YLR4mGgduW5hFpAXUoL4cTTuW5HJSkB5PC0S7A+8c+837DyoM1J9iv/po/o3BunlDqPjOSO/YbLFd+FGy9sxKFeT8b+nLNPrkAyD53FtT27yUS32yqUaEGTMBiASGcZ0FmK8nWxbvjC1q6WQC4VdWdAcBY8eFoAzIrC0b7Wt8wlPcIdE1FhUWeKU1Igv8Q/0dl4k/NnYSxdlDon8diUDeuQB4c8XVzcahRgyyZmNC+LAgeCfSVALde8/t1DCYawNoePGT83wlOpFUdOZKwxn89OsMEf0X8CxJCBN/dwKbFwkSMgx0ACJJDJD4iC1JEYh6XcEqVHpx4+J4I4UiAl26r5x64sttvSlAn3LBuQCz6edU8C+J5epBrC4YP52EFDgHrCw1B0eU9bOaTgh3wmYvQV3Oqqcf53XnVNXUBELX1xtSgFrirlII5d3HFulxBCNEfZx0h7K2f34XwdHpuYQcguN189Ow/nPXclaUcqMH5leCXjKOjbv3F0a7i2ZaRHmBe5zwnhA9S736ZC8AH8LHkg/T5znYgmES1dtuzGo92qwHIquiWX+4KgVLd8utv9Ml1BQNhEJW/FOgweiTguCUoQHkEwYhjfQIgm8eAzPKzHqAG5xGiiPyxeGRRaYetUpDVpHVC1T9bHGyaknb/TQTnuG7rDYwYCUT7/cMjtILzA+Go/FPw581F/mWeTkDuBsBCAK8ki+A29nMzPn4Rzjv6QV7xWW4fzQFUxb9jQQ1qc28kMi4mDl1NBr4usIsz5ltZqNm7AeJXfuTHd7nioLEyPBISU+8/tP1AC4Il/n+YGmjg2NiBRdl6yCw//zG5ph7bqaBuz8B4VMU/TqSsNPbwCeZA1cdxyG9SgKzRZPL+GXFOiH1/SFZ9wX8M3zUgvH8a4rMBjZj/h1W9MrwTiN6MlsCKiI4gycBzgV/xUaQGjGDHwHiYi0VIzeEAasCpNuL76AC7BIEl7i4AIxnAfoMxk35eJbZ68wWEUChs8IPz/EEE9BkUoNA4RCWSLJkY1h0Y/dG9bVCtUVPe7QRhtStXG4nOECDfUxc4Uw/Ik8JkA9o9+a83IrfHH11EdFUWc4phNgVFWkPsIHBnCvCCYBSgqEN9qtoXuwHhByYoJJA7BxIkkRwpDGgAHo+vQ3ZGOwCFJCJKUAx4MBpFZWvReeLgtBBkDDQu2OJxXa7SE/P4ZiUPHABjY1DsFIhPAaygWewiXK72hHjow/k8gCL6gKES8qcDZ7A+EhYlWCPGCX1wXIwzkQEKt8cP6iqkC0FEhFj/ZYtvXCtwuBLcDT5wXN+9H6ZEIkTwV/x/s78fXFX3siWHEKrC3tw7EFZ31Ll7ttknQyEMGgAqCaVe1bGk8r8nFWCQQR0h7CY0dsU/mIeIuA1AGCo02Q0YVXxub36sG1Qgfo0CBBUXxap+ECFEycQVyViBEBFPt14TK9rZHB9EwMG7DPXOv0OVHkdtx7OSCXfb3av4CFZGTwQBwT7/hKPHE4PzpJ4L4+FM9r1n8B+B+9R9I4Fu9brYUZgCunZWNxdQgIs8mASBQ4F8hJpEiaf4GPihk8FdAxin/kybjZjTj+mAQy6ihZ9whDvHAWB6BKrBXQr+5SBfqPaINwiz12UIwoTmbPACZY/fshBBBKNlW8ZCHwH/cVKSOZMm4Mxk4OwE9JeB+EFkn1IzcPQoiSB4vGgNeJSoik1A7m0TCmE/HrggB+/1M12C1Z18ACGoIeH1pH2IhAqFWgBq+kDFEWAvA3X8tpW0cnSD5WAOriOHhnYraF1eLTkS8P/QsHUBdtMPnOrMaANJE9AZiaKWII5Ue/8PTHn/UcCSTgIF2xN4zdmAQYIAKeBFl6FiO0aKfq5jcImHfPwTxcEdRmD3LcFoAva1Hdjm9UgGggI9YOoPkOBYLsT8HlG3nucMDGkOOJ8CkNOELdSO7D5qqAeJYBb2GpABgRi2gxLITgrOQ9C937HgB+0i7MeRx3gfPWCXLtgbLJAu/gCFBPzRX8eADJqCvA3FViC/BlOQC4LZyrBq8BdQAOUKoKjqR7v7EFfVFMojPgEoSlJesNIePyLHwW9NRgq7E6HvUN8A0yj0wyWDHRZ3J2A1jHdMyu3hCGwSDwdRir7h9VP7AKLgPoMCgKziOFLtrUm8aIFHlgxYfz8WBYUU55iAXauo+evJaIK/NTgRJM9sUcZRzcCnMdNKMJc7usnAyrpxHYkTRHK+n1HxS01LheAHqRWwKIDqLvQC0+PupHZgBawfVGsiniTVHwZHRqbUI/D4Cd+ftgyLAR1ehkIiqaKFw7MJEwUIuK5zsu4svoFYCFKgBJZACBuppOId2RDkPZas8H9kULcA9a0KTCQDGtpnzT+RMJiOGseHl4BQ1C29AWUXIIf/OIwwqoNEK3SCuA7FRiBrE9B4/PcrGJ1OQNj83F4Xbol/TgVHfMiIZLAdcaVkgh8sLrd+liNQH/FqsNTfj15m1J0X+ffZuq/gTY7QnvIfJz6UzBJLs83ItQpt3RfZz5iuGfNPajpngUm0R8DoA5jDlzsOTAwZjzsC3Jjxg7H914PjlcskGdghgx9HG4OOQH34uwQyzz61/0qiYNQjXxECuWYbGM/DrjtPH/Mw/K+gBLLSA+cEfPr4MroArzcDuybbr8Zc72i2UnzeHnTgzD4Ug78SzIvCoARVOQxaFFR3TzWnkkHUVFShEuqKxZnKz4p4YYcf8ZhYhuu8wFgSHcuuwCJagI4bgchJQK/qe9c/RT6nGcg6KGREJpb+MI0EY/b0jcsni3AJBeCQNsBOFVYoApcM2Aom4VFgIRdHpeIG8D3YaxBD+qCiQ+rBOSVnci8hzkAG1t/pgHA4uwDzmu8xFKkkkIqCfkIRs204r/hiDgutoAAcowBMZ9+KS0CcXVBOHCvJw2jMQSJyeoeExF2DuTuRcuWAo9sefyUQ6/oBaIjPtiRH1KvQKvygAHb171d+vc4GRMDPoxN/kL5pwlVh1mBQ1quQJAJ5j0TgOAis+h8d3mnC8xTKE34+8sDNjyVXE6nFMN+H39TQDmocHScENvN74LoGScGU4f7g6IG3n3C3qnG6JBS+Z5tHOOzRYQx+u7MZmAl0OSsRLAS/VIKfRAWU92+12aaVPksGDBWQuCMvgNy2M2Mt8EwqbjosZAec5xLEAmXmcFTHiOWARWglpNpjdEtBQRxJJU5VL5/7F1X86XntXgUK4q+KggsUoIIK8oA+kgy4+zLaACqQGTVOX6MBWdehL6BxHn+tlyBMDGAqufd7WOX5WTJwKYDfXJJP2GXDPk7Tj5Ed7BOG7DMFaBRAJgI/+H2Ngeb2SKb0zkoGlQBHkefDr7xMA5HZeJPtKIzyApI9gmnPgf1c3mulfhe0gFekDCdNFnrOwi4Gs6eTACNjB+Uegcgojog4V25P8bctRYY6RL8AJklE9ACFAGZdBEahd4d4CmghFhbzcwaXYH5qTlS6DY+KfNH5Avzjo2JJ0poDkSCMxLn73H/eB+ifvgvyIFCWAji7BWC8hd0qj0FziMdrS70BlVbgamIgcmotGZDNPwm0L9l5iHv7WRoAFx57ScFS2r2iwot8oKu8l+TOCOg2mZ2nFdjTgOFQENzKkJ8OjEnsE8f6AzyXwT6MNF3RDRnuj0Lwo6wTlBMDIyqaz6G+RiLJMg/KUrQV/rh9uH0tWduwoxmky0kSMQ+rnXxZsGadgnxfgk1pCnsIsGYltvfdzTOBIclIsN8MLAGcz5gBwj94AE8DuC9Molip/JGwB57nRyJiyD3pyk6q5ij+3TzRLohcqyqCEQBTepF15+WVmW8SEr5jMUUkx3oMIsrH3ndwAQganKzyMpOJNxMQooGBYwcByw7axIhgPRGEr6GSGJhkAELoQ1YRg+dPeD5IIRDIqq5PA2Jh0Rq0YcS8XBi0ghGRFpCtWTdum5+yLOsQf2EuYY8AfnbQZDgCjHxBSKwTGpt8QCIDVH3/4H5OwEvldhliINwAFLsEyyIfGKV+vm3eEehVqKTdNxtDiPoLHCRiuwTJxCECxMDqDjTvZ63KaPKvRgV2i/F3ohm88V8LN8hgJcXD5pVGIPPNn9EBqSQC0I4AMxBUcQNCkarkFgSn/oCs9GCVep4eUG5BRAOcQOCWlGSc3If0IFqRfURQGRrKewPKEJ9sLnIowKCcw+f48N6UHjqYtgInaCCkBbPSj8VEkCr2g8U43wY1xX/BNkwreQrzg+oaJghOCGTU8RBxuIp6VFOGoEXgEsBLIgV6gBgxoLSI5CgiYNT+GBHsU01GthrceiMUtv9KgAYktgVNeGrBbtiOQVi9x8WjiAW7UNUnm4Vet7WtsFgDCDYEwQ/EVL1PnQf/xCDLTowTh4c4HPRDoQaiwhKIAae4B7xgCBydI/CDPOrevK0FR4p6w3VfoXgQiB3T1N8Y1PCD0X19JqcHGfzB5WkQE4p/kdeXBcEVUXEIFqSij82lMyrWq/7c+LFHA7z5/dwOHHg8s/Y8C2CmhbmALtare+4UWLfb25BmXABKABTniC8gRAP2yvDAiUAsElnrxFzITQa/sAFecAOY7zPV/8jMQHSbWAiUPGkQNABhw85xrSCv+mMSzFR8+7mjw01A8f4F8S/td4jnDHYxpT8/OEyV3gz2+GTfdAeAszswfJNGlQhEIjB0Bls0BKn4Iw7WKu9f1gmSagmvqleEwJwnZwjO7npz1HdCJ1hS/mlBcRXyF3i/M7NxqJFoeH27z7nnJaBmpUZKHsTbGUc1ALEoIGsGYl9ixS50gjAT/VhB8IzvGTrBVfWEz1MzAkRFTtecW731VdjNQPukVdhdn0Y8d/a7WYH6i/TBPBzUFwAlHwtGHOQISrgb1AMUgDETTA3+THAdeRJhg59V/Ektofa9I8wxVICkC7QQSAd2O3cftzPzdMK6aA4iZI4ILfYRbb9RgqICt2AxVnYZ4kkBvHOBxT/zN9ybHx/f5Ql2fkGCX6ANm6F8WCfqAS+Eq5AGcHJd2IFHagTMHAAj+mWBnDXuc81CjhsAi5dL2K8QCYI1aJ/PJtSSxEFXASv7C2I3ZB9/a0j/7nDn/j1pHsz9Jr8fNpxPBUAUUYD4wz5GBlmyAiORjtAIGDFwzSUwqiNZ1d1tPiB7/Q9VeI9KeJU16/knkEeQJEALjY4rkp74fCZiMDSA/PgvT/aT2gYgp5E/P29AKBQAo6TRth5T4VesQFb0i4K7RA2MZpgyFXCEQHCOixuYMPgy2L7+45ezSSKt2oUkURlpXkEMOLSiXPuDQZjk63N5bmzOSxQdLHX7AhwUEA0BAeQPJIQzkAuFlOK/GtyLdiGDKEBdllQ7YouxV2Xdwza9So4Kp5Z0yAgUhTlJgFzSFrznIHYIwKcCu2/L3LsCg6UI1b1/CA+ApIV5/32HqOIjdQusE4azip5Wc1b0q/QGIAlaWEJbXP3r/L+AEipw/+BtkQVY9fIM2i/ZhgVEgJO6DZ1ksVtlYdoQAPhVO0oKmYBmnAYco4DRCRB3TwCziptaE0auER9/VzRqKNOEYINOQg2m1l9GpGNQAhh1v6UmxNQh2M4+LmlUzll0OTjYQOaGlZAEMCrdhmBphaMBwBADrSQQc3//He8KgFETT7p6BHnjj2X9EXsDjrgBS6ihoAmcSQVYmE4JgYWFpp1waAQRoqDzxDhU+HxSnZHz/9JEY6Y5MJA+cwoWrt99+U3Mc/9g/NQTFaigAEtwB1yBzwzucZSX7RZEILhR1d5GDCsBLVUdIQvsldZfEJt5i/MHx2hGJZFkVVyK242iFeh58oBUFqIQbkfp2DV2X0CkAYgv1sU+P+I/HmBu8nErugdRnUWhfp+A/ddlbEH3uQlBsNobUEMHasK1HOYn8BEEvCUaiuigXRIKj+sGOPA4KAWz9/s7WxcgB4+a6/fI2osEwv4yOENAiPf+wQhbc/5f0gGisWuQaRFmGoIqguARWsBQgTTocDLMT5OJUQnhqdCEig+/EShKSEgTVV0MBMnz04BcshPnLk/+OaV0/dwKzB4QUt1NB6uTDfGOP+cNm9mEsBAFiM7AQh9AKVEU75vy68jeOxrUC4mDEuYO0oLqoSdHaEF2eXYYSm0V+oEOwpLmYFOF3Z4CmAeBTIGueiIw2xoKPzDBJVBXQ5g5O8/twwA+QguIjJt3+g0NQEcDfUXgO5gsqlTBLkQLdl86K3CWneitQ8sg/5oWAUJP2C3V3RoEyji5n4b9lB4t9pz2CA+cAFn1Z9I/uzYsU/ELtEBOCHYQQqGcFejV+yeuRJX31zsKV5IGjway9z6PLDxKwNEPsBuOEiqw57jGgOtZ1Y++T50AuMFl7hPIbhskiOwsATtRoc7rS7dXrpcgrMCGJca6ELJo+Y0be0BW5ZKGcFz4y8W9BduwcDnK9iO5fagsKpp9ANnvDPxeP8THNyIVFo1AMas8Qk5v2Ytm0LCCYAXqn+wQsPTBh/5Bcnne14Os3uCQt28vsK1WUESJFviBgAW//3u9PLxusXchcCR2WsNzv/ImvgZzzkUByDUAIrjTvmSHAowpJBQE4SUlxMxnARlQbIqkArVAJ6pBBvELCCKlkyCDAP45BYfEPfcUpfMch3Vn4bheYK4E66BxAxHSVd5INgEPgU/NBCDfNQ8Ho1CoINAPQAW/QT8OCIZlNFCB84XhoDChFByHGjx35v9BLgyhmojqHYb5QYXnuAecvua0hZe6BV9f7v4ibvgvamrmAc1TmaEir0LQ9h97eYAYVoM/nWA60i8Q3Ifezha9BqaaL3zvqd6IAuwwLSCCuCLuJWch4h30giPtyiAphKEBcCu9BV5wwzkMxID8rhMwdwMhcSFgrBT3RUTQboAUg3+p+Qe1IGarOioVnazmefV3lHpwA0AcLWCahUiXwePHWJsP+GH1gnp/we5KfOhJAbsj0H/BIEb04TbrTPsAyb2LLu93KwfCvn5PLAwrOXAa72eEQRo1CNdw5IprsAZ3hApy9zlcITG2vpCihsRSYxNS+J4vdBZ6B52eqRcQ/QXmSjAWSfa/5GA5qEg4iJFtm624AqXLrSA2gx8p1Mdqcghv41S0lSp/xAYs9gakQc4Ie2RTUYwYgt748mV+FU1Xgp14eW3XYZ6cdqGTNHwHICTwEeTPl0jEZwIgP9gDEaogeg5IHWCF+1eoAhvEKPB/EAeTRsM/pSAP5wjWEUMM1/NJRhwJbpJSgK7S7zF3EOsI5jBQBK9DV80Z8Y0COzvmWzJXgDl40KEC6cqvqgi4OB5cpgLFYK/1CvDiItXqC6/S87wfAUfPtxqfGNzlYaOjlf1IsHPPvffHgDAoEeEST4ZLZUd/RSo91/BjXY5ggWgQ4In3fyj4mUqPrInHOCLKO3wUwRsfyXpt1nEIRLrqcWeTuk7bigsbid1zD4iDRQtnIdQsyIXnFCn1I9D7ADgxEhOvR5AJosoUbu1FkJyYCi9OhQERoIx+4AX/YqUXQhtYEwKN4Cy1HntLMmtaAQpqfrT/UCoLSxeswjA5UWPPi0mjajUWxMTdVusNvt/ChMdmILK5IRMFu90BMEzFYHdg2GAgeYVHMMJIBTA7EFTx/5fpgTFXz9w/en0ZjD8kCDoKPNGwlB01BmoWQbh+AxR689mBponGJOr9OwmMu3dtJ/ylW1Tik4ElUPmR9RqII+pVhD9ychABMQ51gOIZg+/G+5mGIzLB1JJC5WhzYjhJ7IWmLDpA8jzsAafUPkB2WnFBF4iSxkq1ty7f25rv/+EQLOxs2oUdTSA9HIR9swdBlCcFe9owPC3XWDDC0ISVzsEVbSCF/sWdA5Fu4HJqankp2SeQCYYrImNalfmhpVxYrGkUS4LeSUjg8dD7+D7w/ybIfy7vlB9/HJ978zr7/45Qgajzj+4EjIK/ULHPRAOlKr/aG0AFcqCyu0GcW45Igh6JMJmhA49/U+cEssHNJhtXDC1MOya3j/sAiAGcrEtqtgjBD6wEzSDc7D8o6C8rIqAZyPk+NQoNLAZ1hR64Yl1FBY648smUYKnSg1Xwk/0DyRyArByMUobyByhCcPnOaPyoegREFS4jNfYAw+IHCjdC1J2WDZBke/OyN85J24WiXwDYPoJyYuCD238ulvuzwt6KgHf0shWKsqCFFGjB/w8HU8eeTED9wAAAAABJRU5ErkJggg==", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      vk = kk => zk(kk, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Ek = kk => zk(kk, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var hk = ik(39653),
      ak = ik(36698),
      Wk = ik(39708),
      tk = ik(39853),
      Xk = ik(39956);
    class Bk extends tk.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let ck = (() => {
      var kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk;
      let Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk = Xk.e,
        Yk = [],
        Lk = [],
        Ck = [],
        Ak = [],
        jk = [],
        Vk = [],
        Fk = [],
        uk = [],
        qk = [],
        Ik = [],
        zk = [],
        Qk = [],
        vk = [],
        Ek = [],
        hk = [],
        ak = [],
        Wk = [],
        tk = [];
      return kk = class extends yk {
        get useEnergyConservation() {
          return (0, sk.b)(this, ek, "f")
        }
        set useEnergyConservation(kk) {
          (0, sk.c)(this, ek, kk, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, sk.b)(this, ik, "f")
        }
        set useSmithVisibilityHeightCorrelated(kk) {
          (0, sk.c)(this, ik, kk, "f")
        }
        get useSphericalHarmonics() {
          return (0, sk.b)(this, Dk, "f")
        }
        set useSphericalHarmonics(kk) {
          (0, sk.c)(this, Dk, kk, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, sk.b)(this, fk, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(kk) {
          (0, sk.c)(this, fk, kk, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, sk.b)(this, Sk, "f")
        }
        set mixIblRadianceWithIrradiance(kk) {
          (0, sk.c)(this, Sk, kk, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, sk.b)(this, bk, "f")
        }
        set useLegacySpecularEnergyConservation(kk) {
          (0, sk.c)(this, bk, kk, "f")
        }
        get baseDiffuseModel() {
          return (0, sk.b)(this, rk, "f")
        }
        set baseDiffuseModel(kk) {
          (0, sk.c)(this, rk, kk, "f")
        }
        get dielectricSpecularModel() {
          return (0, sk.b)(this, Pk, "f")
        }
        set dielectricSpecularModel(kk) {
          (0, sk.c)(this, Pk, kk, "f")
        }
        get conductorSpecularModel() {
          return (0, sk.b)(this, mk, "f")
        }
        set conductorSpecularModel(kk) {
          (0, sk.c)(this, mk, kk, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Mk) {
          let Kk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Mk, "PBRBRDF", 90, new Bk, Kk), this._useEnergyConservation = kk.DEFAULT_USE_ENERGY_CONSERVATION, ek.set(this, (0, sk.e)(this, Yk, kk.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, sk.e)(this, Lk), kk.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), ik.set(this, (0, sk.e)(this, Ck, kk.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, sk.e)(this, Ak), kk.DEFAULT_USE_SPHERICAL_HARMONICS), Dk.set(this, (0, sk.e)(this, jk, kk.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, sk.e)(this, Vk), kk.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), fk.set(this, (0, sk.e)(this, Fk, kk.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, sk.e)(this, uk), kk.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), Sk.set(this, (0, sk.e)(this, qk, kk.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, sk.e)(this, Ik), kk.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), bk.set(this, (0, sk.e)(this, zk, kk.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, sk.e)(this, Qk), kk.DEFAULT_DIFFUSE_MODEL), rk.set(this, (0, sk.e)(this, vk, kk.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, sk.e)(this, Ek), kk.DEFAULT_DIELECTRIC_SPECULAR_MODEL), Pk.set(this, (0, sk.e)(this, hk, kk.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, sk.e)(this, ak), kk.DEFAULT_CONDUCTOR_SPECULAR_MODEL), mk.set(this, (0, sk.e)(this, Wk, kk.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, sk.e)(this, tk), this._internalMarkAllSubMeshesAsMiscDirty = Mk._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(kk) {
          kk.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, kk.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, kk.SPHERICAL_HARMONICS = this._useSphericalHarmonics, kk.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, kk.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, kk.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, kk.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, kk.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, kk.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, ek = new WeakMap, ik = new WeakMap, Dk = new WeakMap, fk = new WeakMap, Sk = new WeakMap, bk = new WeakMap, rk = new WeakMap, Pk = new WeakMap, mk = new WeakMap, (() => {
        const ek = "function" === typeof Symbol && Symbol.metadata ? Object.create(yk[Symbol.metadata] ?? null) : void 0;
        Mk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], Kk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], xk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], nk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], Uk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], Hk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], wk = [(0, dk.I)("baseDiffuseModel"), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], lk = [(0, dk.I)("dielectricSpecularModel"), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], pk = [(0, dk.I)("conductorSpecularModel"), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], (0, sk.d)(kk, null, Mk, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: kk => "useEnergyConservation" in kk,
            get: kk => kk.useEnergyConservation,
            set: (kk, ek) => {
              kk.useEnergyConservation = ek
            }
          },
          metadata: ek
        }, Yk, Lk), (0, sk.d)(kk, null, Kk, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: kk => "useSmithVisibilityHeightCorrelated" in kk,
            get: kk => kk.useSmithVisibilityHeightCorrelated,
            set: (kk, ek) => {
              kk.useSmithVisibilityHeightCorrelated = ek
            }
          },
          metadata: ek
        }, Ck, Ak), (0, sk.d)(kk, null, xk, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: kk => "useSphericalHarmonics" in kk,
            get: kk => kk.useSphericalHarmonics,
            set: (kk, ek) => {
              kk.useSphericalHarmonics = ek
            }
          },
          metadata: ek
        }, jk, Vk), (0, sk.d)(kk, null, nk, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: kk => "useSpecularGlossinessInputEnergyConservation" in kk,
            get: kk => kk.useSpecularGlossinessInputEnergyConservation,
            set: (kk, ek) => {
              kk.useSpecularGlossinessInputEnergyConservation = ek
            }
          },
          metadata: ek
        }, Fk, uk), (0, sk.d)(kk, null, Uk, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: kk => "mixIblRadianceWithIrradiance" in kk,
            get: kk => kk.mixIblRadianceWithIrradiance,
            set: (kk, ek) => {
              kk.mixIblRadianceWithIrradiance = ek
            }
          },
          metadata: ek
        }, qk, Ik), (0, sk.d)(kk, null, Hk, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: kk => "useLegacySpecularEnergyConservation" in kk,
            get: kk => kk.useLegacySpecularEnergyConservation,
            set: (kk, ek) => {
              kk.useLegacySpecularEnergyConservation = ek
            }
          },
          metadata: ek
        }, zk, Qk), (0, sk.d)(kk, null, wk, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: kk => "baseDiffuseModel" in kk,
            get: kk => kk.baseDiffuseModel,
            set: (kk, ek) => {
              kk.baseDiffuseModel = ek
            }
          },
          metadata: ek
        }, vk, Ek), (0, sk.d)(kk, null, lk, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: kk => "dielectricSpecularModel" in kk,
            get: kk => kk.dielectricSpecularModel,
            set: (kk, ek) => {
              kk.dielectricSpecularModel = ek
            }
          },
          metadata: ek
        }, hk, ak), (0, sk.d)(kk, null, pk, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: kk => "conductorSpecularModel" in kk,
            get: kk => kk.conductorSpecularModel,
            set: (kk, ek) => {
              kk.conductorSpecularModel = ek
            }
          },
          metadata: ek
        }, Wk, tk), ek && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ek
        })
      })(), kk.DEFAULT_USE_ENERGY_CONSERVATION = !0, kk.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, kk.DEFAULT_USE_SPHERICAL_HARMONICS = !0, kk.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, kk.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, kk.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, kk.DEFAULT_DIFFUSE_MODEL = 0, kk.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, kk.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, kk
    })();
    var Tk = ik(39842),
      Zk = ik(36874),
      Ok = ik(39849),
      gk = ik(39677),
      Gk = ik(39937),
      Nk = ik(39928),
      Rk = ik(39946),
      Jk = ik(39910);
    class ke extends tk.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let ee = (() => {
      var kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk;
      let Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk = Xk.e,
        Vk = [],
        Fk = [],
        uk = [],
        qk = [],
        Ik = [],
        zk = [],
        Qk = [],
        vk = [],
        Ek = [],
        hk = [],
        ak = [],
        Wk = [],
        tk = [],
        Bk = [],
        ck = [],
        Tk = [],
        Ok = [],
        gk = [],
        Gk = [],
        Rk = [],
        ee = [],
        ie = [],
        De = [],
        fe = [],
        Se = [],
        be = [],
        re = [],
        Pe = [];
      return kk = class extends jk {
        get isEnabled() {
          return (0, sk.b)(this, ek, "f")
        }
        set isEnabled(kk) {
          (0, sk.c)(this, ek, kk, "f")
        }
        get indexOfRefraction() {
          return (0, sk.b)(this, ik, "f")
        }
        set indexOfRefraction(kk) {
          (0, sk.c)(this, ik, kk, "f")
        }
        get texture() {
          return (0, sk.b)(this, Dk, "f")
        }
        set texture(kk) {
          (0, sk.c)(this, Dk, kk, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, sk.b)(this, fk, "f")
        }
        set useRoughnessFromMainTexture(kk) {
          (0, sk.c)(this, fk, kk, "f")
        }
        get textureRoughness() {
          return (0, sk.b)(this, Sk, "f")
        }
        set textureRoughness(kk) {
          (0, sk.c)(this, Sk, kk, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, sk.b)(this, bk, "f")
        }
        set remapF0OnInterfaceChange(kk) {
          (0, sk.c)(this, bk, kk, "f")
        }
        get bumpTexture() {
          return (0, sk.b)(this, rk, "f")
        }
        set bumpTexture(kk) {
          (0, sk.c)(this, rk, kk, "f")
        }
        get isTintEnabled() {
          return (0, sk.b)(this, Pk, "f")
        }
        set isTintEnabled(kk) {
          (0, sk.c)(this, Pk, kk, "f")
        }
        get tintTexture() {
          return (0, sk.b)(this, mk, "f")
        }
        set tintTexture(kk) {
          (0, sk.c)(this, mk, kk, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Mk) {
          let Kk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Mk, "PBRClearCoat", 100, new ke, Kk), this._isEnabled = !1, ek.set(this, (0, sk.e)(this, Vk, !1)), this.intensity = ((0, sk.e)(this, Fk), (0, sk.e)(this, uk, 1)), this.roughness = ((0, sk.e)(this, qk), (0, sk.e)(this, Ik, 0)), this._indexOfRefraction = ((0, sk.e)(this, zk), kk._DefaultIndexOfRefraction), ik.set(this, (0, sk.e)(this, Qk, kk._DefaultIndexOfRefraction)), this._texture = ((0, sk.e)(this, vk), null), Dk.set(this, (0, sk.e)(this, Ek, null)), this._useRoughnessFromMainTexture = ((0, sk.e)(this, hk), !0), fk.set(this, (0, sk.e)(this, ak, !0)), this._textureRoughness = ((0, sk.e)(this, Wk), null), Sk.set(this, (0, sk.e)(this, tk, null)), this._remapF0OnInterfaceChange = ((0, sk.e)(this, Bk), !0), bk.set(this, (0, sk.e)(this, ck, !0)), this._bumpTexture = ((0, sk.e)(this, Tk), null), rk.set(this, (0, sk.e)(this, Ok, null)), this._isTintEnabled = ((0, sk.e)(this, gk), !1), Pk.set(this, (0, sk.e)(this, Gk, !1)), this.tintColor = ((0, sk.e)(this, Rk), (0, sk.e)(this, ee, Zk.e.White())), this.tintColorAtDistance = ((0, sk.e)(this, ie), (0, sk.e)(this, De, 1)), this.tintThickness = ((0, sk.e)(this, fe), (0, sk.e)(this, Se, 1)), this._tintTexture = ((0, sk.e)(this, be), null), mk.set(this, (0, sk.e)(this, re, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, sk.e)(this, Pe), this._internalMarkAllSubMeshesAsTexturesDirty = Mk._dirtyCallbacks[1]
        }
        isReadyForSubMesh(kk, ek, ik) {
          if (!this._isEnabled) return !0;
          const Dk = this._material._disableBumpMap;
          if (kk._areTexturesDirty && ek.texturesEnabled) {
            if (this._texture && Nk.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Nk.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (ik.getCaps().standardDerivatives && this._bumpTexture && Nk.e.ClearCoatBumpTextureEnabled && !Dk && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && Nk.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(ek, ik) {
          this._isEnabled ? (ek.CLEARCOAT = !0, ek.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, ek.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, ek._areTexturesDirty && ik.texturesEnabled && (this._texture && Nk.e.ClearCoatTextureEnabled ? (0, Jk.qb)(this._texture, ek, "CLEARCOAT_TEXTURE") : ek.CLEARCOAT_TEXTURE = !1, this._textureRoughness && Nk.e.ClearCoatTextureEnabled ? (0, Jk.qb)(this._textureRoughness, ek, "CLEARCOAT_TEXTURE_ROUGHNESS") : ek.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && Nk.e.ClearCoatBumpTextureEnabled ? (0, Jk.qb)(this._bumpTexture, ek, "CLEARCOAT_BUMP") : ek.CLEARCOAT_BUMP = !1, ek.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === kk._DefaultIndexOfRefraction, this._isTintEnabled ? (ek.CLEARCOAT_TINT = !0, this._tintTexture && Nk.e.ClearCoatTintTextureEnabled ? ((0, Jk.qb)(this._tintTexture, ek, "CLEARCOAT_TINT_TEXTURE"), ek.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : ek.CLEARCOAT_TINT_TEXTURE = !1) : (ek.CLEARCOAT_TINT = !1, ek.CLEARCOAT_TINT_TEXTURE = !1))) : (ek.CLEARCOAT = !1, ek.CLEARCOAT_TEXTURE = !1, ek.CLEARCOAT_TEXTURE_ROUGHNESS = !1, ek.CLEARCOAT_BUMP = !1, ek.CLEARCOAT_TINT = !1, ek.CLEARCOAT_TINT_TEXTURE = !1, ek.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, ek.CLEARCOAT_DEFAULTIOR = !1, ek.CLEARCOAT_TEXTUREDIRECTUV = 0, ek.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, ek.CLEARCOAT_BUMPDIRECTUV = 0, ek.CLEARCOAT_REMAP_F0 = !1, ek.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, ek.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(kk, ek, ik, Dk) {
          if (!this._isEnabled) return;
          const fk = Dk.materialDefines,
            Sk = this._material.isFrozen,
            bk = this._material._disableBumpMap,
            rk = this._material._invertNormalMapX,
            Pk = this._material._invertNormalMapY;
          if (!kk.useUbo || !Sk || !kk.isSync) {
            (this._texture || this._textureRoughness) && Nk.e.ClearCoatTextureEnabled && (kk.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Jk.G)(this._texture, kk, "clearCoat"), this._textureRoughness && !fk.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Jk.G)(this._textureRoughness, kk, "clearCoatRoughness")), this._bumpTexture && ik.getCaps().standardDerivatives && Nk.e.ClearCoatTextureEnabled && !bk && (kk.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, Jk.G)(this._bumpTexture, kk, "clearCoatBump"), ek._mirroredCameraPosition ? kk.updateFloat2("vClearCoatTangentSpaceParams", rk ? 1 : -1, Pk ? 1 : -1) : kk.updateFloat2("vClearCoatTangentSpaceParams", rk ? -1 : 1, Pk ? -1 : 1)), this._tintTexture && Nk.e.ClearCoatTintTextureEnabled && (kk.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, Jk.G)(this._tintTexture, kk, "clearCoatTint")), kk.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Dk = 1 - this._indexOfRefraction,
              Sk = 1 + this._indexOfRefraction,
              mk = Math.pow(-Dk / Sk, 2),
              Mk = 1 / this._indexOfRefraction;
            kk.updateFloat4("vClearCoatRefractionParams", mk, Mk, Dk, Sk), this._isTintEnabled && (kk.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), kk.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          ek.texturesEnabled && (this._texture && Nk.e.ClearCoatTextureEnabled && kk.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !fk.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && Nk.e.ClearCoatTextureEnabled && kk.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && ik.getCaps().standardDerivatives && Nk.e.ClearCoatBumpTextureEnabled && !bk && kk.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && Nk.e.ClearCoatTintTextureEnabled && kk.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(kk) {
          return this._texture === kk || (this._textureRoughness === kk || (this._bumpTexture === kk || this._tintTexture === kk))
        }
        getActiveTextures(kk) {
          this._texture && kk.push(this._texture), this._textureRoughness && kk.push(this._textureRoughness), this._bumpTexture && kk.push(this._bumpTexture), this._tintTexture && kk.push(this._tintTexture)
        }
        getAnimatables(kk) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && kk.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && kk.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && kk.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && kk.push(this._tintTexture)
        }
        dispose(kk) {
          kk && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(kk, ek, ik) {
          return kk.CLEARCOAT_BUMP && ek.addFallback(ik++, "CLEARCOAT_BUMP"), kk.CLEARCOAT_TINT && ek.addFallback(ik++, "CLEARCOAT_TINT"), kk.CLEARCOAT && ek.addFallback(ik++, "CLEARCOAT"), ik
        }
        getSamplers(kk) {
          kk.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, ek = new WeakMap, ik = new WeakMap, Dk = new WeakMap, fk = new WeakMap, Sk = new WeakMap, bk = new WeakMap, rk = new WeakMap, Pk = new WeakMap, mk = new WeakMap, (() => {
        const ek = "function" === typeof Symbol && Symbol.metadata ? Object.create(jk[Symbol.metadata] ?? null) : void 0;
        Mk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Kk = [(0, dk.I)()], xk = [(0, dk.I)()], nk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Uk = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Hk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], wk = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], lk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], pk = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], yk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Yk = [(0, dk.k)()], Lk = [(0, dk.I)()], Ck = [(0, dk.I)()], Ak = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], (0, sk.d)(kk, null, Mk, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isEnabled" in kk,
            get: kk => kk.isEnabled,
            set: (kk, ek) => {
              kk.isEnabled = ek
            }
          },
          metadata: ek
        }, Vk, Fk), (0, sk.d)(kk, null, nk, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: kk => "indexOfRefraction" in kk,
            get: kk => kk.indexOfRefraction,
            set: (kk, ek) => {
              kk.indexOfRefraction = ek
            }
          },
          metadata: ek
        }, Qk, vk), (0, sk.d)(kk, null, Uk, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: kk => "texture" in kk,
            get: kk => kk.texture,
            set: (kk, ek) => {
              kk.texture = ek
            }
          },
          metadata: ek
        }, Ek, hk), (0, sk.d)(kk, null, Hk, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "useRoughnessFromMainTexture" in kk,
            get: kk => kk.useRoughnessFromMainTexture,
            set: (kk, ek) => {
              kk.useRoughnessFromMainTexture = ek
            }
          },
          metadata: ek
        }, ak, Wk), (0, sk.d)(kk, null, wk, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: kk => "textureRoughness" in kk,
            get: kk => kk.textureRoughness,
            set: (kk, ek) => {
              kk.textureRoughness = ek
            }
          },
          metadata: ek
        }, tk, Bk), (0, sk.d)(kk, null, lk, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: kk => "remapF0OnInterfaceChange" in kk,
            get: kk => kk.remapF0OnInterfaceChange,
            set: (kk, ek) => {
              kk.remapF0OnInterfaceChange = ek
            }
          },
          metadata: ek
        }, ck, Tk), (0, sk.d)(kk, null, pk, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "bumpTexture" in kk,
            get: kk => kk.bumpTexture,
            set: (kk, ek) => {
              kk.bumpTexture = ek
            }
          },
          metadata: ek
        }, Ok, gk), (0, sk.d)(kk, null, yk, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isTintEnabled" in kk,
            get: kk => kk.isTintEnabled,
            set: (kk, ek) => {
              kk.isTintEnabled = ek
            }
          },
          metadata: ek
        }, Gk, Rk), (0, sk.d)(kk, null, Ak, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "tintTexture" in kk,
            get: kk => kk.tintTexture,
            set: (kk, ek) => {
              kk.tintTexture = ek
            }
          },
          metadata: ek
        }, re, Pe), (0, sk.d)(null, null, Kk, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensity" in kk,
            get: kk => kk.intensity,
            set: (kk, ek) => {
              kk.intensity = ek
            }
          },
          metadata: ek
        }, uk, qk), (0, sk.d)(null, null, xk, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: kk => "roughness" in kk,
            get: kk => kk.roughness,
            set: (kk, ek) => {
              kk.roughness = ek
            }
          },
          metadata: ek
        }, Ik, zk), (0, sk.d)(null, null, Yk, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "tintColor" in kk,
            get: kk => kk.tintColor,
            set: (kk, ek) => {
              kk.tintColor = ek
            }
          },
          metadata: ek
        }, ee, ie), (0, sk.d)(null, null, Lk, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: kk => "tintColorAtDistance" in kk,
            get: kk => kk.tintColorAtDistance,
            set: (kk, ek) => {
              kk.tintColorAtDistance = ek
            }
          },
          metadata: ek
        }, De, fe), (0, sk.d)(null, null, Ck, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: kk => "tintThickness" in kk,
            get: kk => kk.tintThickness,
            set: (kk, ek) => {
              kk.tintThickness = ek
            }
          },
          metadata: ek
        }, Se, be), ek && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ek
        })
      })(), kk._DefaultIndexOfRefraction = 1.5, kk
    })();
    class ie extends tk.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let De = (() => {
      var kk, ek, ik, Dk;
      let fk, Sk, bk, rk, Pk, mk, Mk, Kk = Xk.e,
        xk = [],
        nk = [],
        Uk = [],
        Hk = [],
        wk = [],
        lk = [],
        pk = [],
        yk = [],
        Yk = [],
        Lk = [],
        Ck = [],
        Ak = [],
        jk = [],
        Vk = [];
      return kk = class extends Kk {
        get isEnabled() {
          return (0, sk.b)(this, ek, "f")
        }
        set isEnabled(kk) {
          (0, sk.c)(this, ek, kk, "f")
        }
        get texture() {
          return (0, sk.b)(this, ik, "f")
        }
        set texture(kk) {
          (0, sk.c)(this, ik, kk, "f")
        }
        get thicknessTexture() {
          return (0, sk.b)(this, Dk, "f")
        }
        set thicknessTexture(kk) {
          (0, sk.c)(this, Dk, kk, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(fk) {
          let Sk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(fk, "PBRIridescence", 110, new ie, Sk), this._isEnabled = !1, ek.set(this, (0, sk.e)(this, xk, !1)), this.intensity = ((0, sk.e)(this, nk), (0, sk.e)(this, Uk, 1)), this.minimumThickness = ((0, sk.e)(this, Hk), (0, sk.e)(this, wk, kk._DefaultMinimumThickness)), this.maximumThickness = ((0, sk.e)(this, lk), (0, sk.e)(this, pk, kk._DefaultMaximumThickness)), this.indexOfRefraction = ((0, sk.e)(this, yk), (0, sk.e)(this, Yk, kk._DefaultIndexOfRefraction)), this._texture = ((0, sk.e)(this, Lk), null), ik.set(this, (0, sk.e)(this, Ck, null)), this._thicknessTexture = ((0, sk.e)(this, Ak), null), Dk.set(this, (0, sk.e)(this, jk, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, sk.e)(this, Vk), this._internalMarkAllSubMeshesAsTexturesDirty = fk._dirtyCallbacks[1]
        }
        isReadyForSubMesh(kk, ek) {
          if (!this._isEnabled) return !0;
          if (kk._areTexturesDirty && ek.texturesEnabled) {
            if (this._texture && Nk.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && Nk.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(kk, ek) {
          this._isEnabled ? (kk.IRIDESCENCE = !0, kk._areTexturesDirty && ek.texturesEnabled && (this._texture && Nk.e.IridescenceTextureEnabled ? (0, Jk.qb)(this._texture, kk, "IRIDESCENCE_TEXTURE") : kk.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && Nk.e.IridescenceTextureEnabled ? (0, Jk.qb)(this._thicknessTexture, kk, "IRIDESCENCE_THICKNESS_TEXTURE") : kk.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (kk.IRIDESCENCE = !1, kk.IRIDESCENCE_TEXTURE = !1, kk.IRIDESCENCE_THICKNESS_TEXTURE = !1, kk.IRIDESCENCE_TEXTUREDIRECTUV = 0, kk.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(kk, ek) {
          if (!this._isEnabled) return;
          const ik = this._material.isFrozen;
          kk.useUbo && ik && kk.isSync || ((this._texture || this._thicknessTexture) && Nk.e.IridescenceTextureEnabled && (kk.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, Jk.G)(this._texture, kk, "iridescence"), this._thicknessTexture && (0, Jk.G)(this._thicknessTexture, kk, "iridescenceThickness")), kk.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), ek.texturesEnabled && (this._texture && Nk.e.IridescenceTextureEnabled && kk.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && Nk.e.IridescenceTextureEnabled && kk.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(kk) {
          return this._texture === kk || this._thicknessTexture === kk
        }
        getActiveTextures(kk) {
          this._texture && kk.push(this._texture), this._thicknessTexture && kk.push(this._thicknessTexture)
        }
        getAnimatables(kk) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && kk.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && kk.push(this._thicknessTexture)
        }
        dispose(kk) {
          kk && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(kk, ek, ik) {
          return kk.IRIDESCENCE && ek.addFallback(ik++, "IRIDESCENCE"), ik
        }
        getSamplers(kk) {
          kk.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, ek = new WeakMap, ik = new WeakMap, Dk = new WeakMap, (() => {
        const ek = "function" === typeof Symbol && Symbol.metadata ? Object.create(Kk[Symbol.metadata] ?? null) : void 0;
        fk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Sk = [(0, dk.I)()], bk = [(0, dk.I)()], rk = [(0, dk.I)()], Pk = [(0, dk.I)()], mk = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Mk = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], (0, sk.d)(kk, null, fk, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isEnabled" in kk,
            get: kk => kk.isEnabled,
            set: (kk, ek) => {
              kk.isEnabled = ek
            }
          },
          metadata: ek
        }, xk, nk), (0, sk.d)(kk, null, mk, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: kk => "texture" in kk,
            get: kk => kk.texture,
            set: (kk, ek) => {
              kk.texture = ek
            }
          },
          metadata: ek
        }, Ck, Ak), (0, sk.d)(kk, null, Mk, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "thicknessTexture" in kk,
            get: kk => kk.thicknessTexture,
            set: (kk, ek) => {
              kk.thicknessTexture = ek
            }
          },
          metadata: ek
        }, jk, Vk), (0, sk.d)(null, null, Sk, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensity" in kk,
            get: kk => kk.intensity,
            set: (kk, ek) => {
              kk.intensity = ek
            }
          },
          metadata: ek
        }, Uk, Hk), (0, sk.d)(null, null, bk, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: kk => "minimumThickness" in kk,
            get: kk => kk.minimumThickness,
            set: (kk, ek) => {
              kk.minimumThickness = ek
            }
          },
          metadata: ek
        }, wk, lk), (0, sk.d)(null, null, rk, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: kk => "maximumThickness" in kk,
            get: kk => kk.maximumThickness,
            set: (kk, ek) => {
              kk.maximumThickness = ek
            }
          },
          metadata: ek
        }, pk, yk), (0, sk.d)(null, null, Pk, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: kk => "indexOfRefraction" in kk,
            get: kk => kk.indexOfRefraction,
            set: (kk, ek) => {
              kk.indexOfRefraction = ek
            }
          },
          metadata: ek
        }, Yk, Lk), ek && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ek
        })
      })(), kk._DefaultMinimumThickness = 100, kk._DefaultMaximumThickness = 400, kk._DefaultIndexOfRefraction = 1.3, kk
    })();
    class fe extends tk.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Se = (() => {
      var kk, ek, ik, Dk;
      let fk, Sk, bk, rk, Pk, mk = Xk.e,
        Mk = [],
        Kk = [],
        xk = [],
        nk = [],
        Uk = [],
        Hk = [],
        wk = [],
        lk = [],
        pk = [],
        yk = [];
      return kk = class extends mk {
        get isEnabled() {
          return (0, sk.b)(this, ek, "f")
        }
        set isEnabled(kk) {
          (0, sk.c)(this, ek, kk, "f")
        }
        set angle(kk) {
          this.direction.x = Math.cos(kk), this.direction.y = Math.sin(kk)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, sk.b)(this, ik, "f")
        }
        set texture(kk) {
          (0, sk.c)(this, ik, kk, "f")
        }
        get legacy() {
          return (0, sk.b)(this, Dk, "f")
        }
        set legacy(kk) {
          (0, sk.c)(this, Dk, kk, "f")
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
        constructor(kk) {
          let fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(kk, "PBRAnisotropic", 110, new fe, fk), this._isEnabled = !1, ek.set(this, (0, sk.e)(this, Mk, !1)), this.intensity = ((0, sk.e)(this, Kk), (0, sk.e)(this, xk, 1)), this.direction = ((0, sk.e)(this, nk), (0, sk.e)(this, Uk, new ak.l(1, 0))), this._texture = ((0, sk.e)(this, Hk), null), ik.set(this, (0, sk.e)(this, wk, null)), this._legacy = ((0, sk.e)(this, lk), !1), Dk.set(this, (0, sk.e)(this, pk, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, sk.e)(this, yk), this._internalMarkAllSubMeshesAsTexturesDirty = kk._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = kk._dirtyCallbacks[16]
        }
        isReadyForSubMesh(kk, ek) {
          return !this._isEnabled || !(kk._areTexturesDirty && ek.texturesEnabled && this._texture && Nk.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(kk, ek, ik) {
          this._isEnabled ? (kk.ANISOTROPIC = this._isEnabled, this._isEnabled && !ik.isVerticesDataPresent(Wk.e.TangentKind) && (kk._needUVs = !0, kk.MAINUV1 = !0), kk._areTexturesDirty && ek.texturesEnabled && (this._texture && Nk.e.AnisotropicTextureEnabled ? (0, Jk.qb)(this._texture, kk, "ANISOTROPIC_TEXTURE") : kk.ANISOTROPIC_TEXTURE = !1), kk._areMiscDirty && (kk.ANISOTROPIC_LEGACY = this._legacy)) : (kk.ANISOTROPIC = !1, kk.ANISOTROPIC_TEXTURE = !1, kk.ANISOTROPIC_TEXTUREDIRECTUV = 0, kk.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(kk, ek) {
          if (!this._isEnabled) return;
          const ik = this._material.isFrozen;
          kk.useUbo && ik && kk.isSync || (this._texture && Nk.e.AnisotropicTextureEnabled && (kk.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Jk.G)(this._texture, kk, "anisotropy")), kk.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), ek.texturesEnabled && this._texture && Nk.e.AnisotropicTextureEnabled && kk.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(kk) {
          return this._texture === kk
        }
        getActiveTextures(kk) {
          this._texture && kk.push(this._texture)
        }
        getAnimatables(kk) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && kk.push(this._texture)
        }
        dispose(kk) {
          kk && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(kk, ek, ik) {
          return kk.ANISOTROPIC && ek.addFallback(ik++, "ANISOTROPIC"), ik
        }
        getSamplers(kk) {
          kk.push("anisotropySampler")
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
        parse(kk, ek, ik) {
          super.parse(kk, ek, ik), void 0 === kk.legacy && (this.legacy = !0)
        }
      }, ek = new WeakMap, ik = new WeakMap, Dk = new WeakMap, (() => {
        const ek = "function" === typeof Symbol && Symbol.metadata ? Object.create(mk[Symbol.metadata] ?? null) : void 0;
        fk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Sk = [(0, dk.I)()], bk = [(0, dk.D)()], rk = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Pk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], (0, sk.d)(kk, null, fk, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isEnabled" in kk,
            get: kk => kk.isEnabled,
            set: (kk, ek) => {
              kk.isEnabled = ek
            }
          },
          metadata: ek
        }, Mk, Kk), (0, sk.d)(kk, null, rk, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: kk => "texture" in kk,
            get: kk => kk.texture,
            set: (kk, ek) => {
              kk.texture = ek
            }
          },
          metadata: ek
        }, wk, lk), (0, sk.d)(kk, null, Pk, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: kk => "legacy" in kk,
            get: kk => kk.legacy,
            set: (kk, ek) => {
              kk.legacy = ek
            }
          },
          metadata: ek
        }, pk, yk), (0, sk.d)(null, null, Sk, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensity" in kk,
            get: kk => kk.intensity,
            set: (kk, ek) => {
              kk.intensity = ek
            }
          },
          metadata: ek
        }, xk, nk), (0, sk.d)(null, null, bk, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: kk => "direction" in kk,
            get: kk => kk.direction,
            set: (kk, ek) => {
              kk.direction = ek
            }
          },
          metadata: ek
        }, Uk, Hk), ek && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ek
        })
      })(), kk
    })();
    class be extends tk.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let re = (() => {
      var kk, ek, ik, Dk, fk, Sk, bk, rk;
      let Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk = Xk.e,
        pk = [],
        yk = [],
        Yk = [],
        Lk = [],
        Ck = [],
        Ak = [],
        jk = [],
        Vk = [],
        Fk = [],
        uk = [],
        qk = [],
        Ik = [],
        zk = [],
        Qk = [],
        vk = [],
        Ek = [],
        hk = [],
        ak = [];
      return kk = class extends lk {
        get isEnabled() {
          return (0, sk.b)(this, ek, "f")
        }
        set isEnabled(kk) {
          (0, sk.c)(this, ek, kk, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, sk.b)(this, ik, "f")
        }
        set linkSheenWithAlbedo(kk) {
          (0, sk.c)(this, ik, kk, "f")
        }
        get texture() {
          return (0, sk.b)(this, Dk, "f")
        }
        set texture(kk) {
          (0, sk.c)(this, Dk, kk, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, sk.b)(this, fk, "f")
        }
        set useRoughnessFromMainTexture(kk) {
          (0, sk.c)(this, fk, kk, "f")
        }
        get roughness() {
          return (0, sk.b)(this, Sk, "f")
        }
        set roughness(kk) {
          (0, sk.c)(this, Sk, kk, "f")
        }
        get textureRoughness() {
          return (0, sk.b)(this, bk, "f")
        }
        set textureRoughness(kk) {
          (0, sk.c)(this, bk, kk, "f")
        }
        get albedoScaling() {
          return (0, sk.b)(this, rk, "f")
        }
        set albedoScaling(kk) {
          (0, sk.c)(this, rk, kk, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(kk) {
          let Pk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(kk, "Sheen", 120, new be, Pk), this._isEnabled = !1, ek.set(this, (0, sk.e)(this, pk, !1)), this._linkSheenWithAlbedo = ((0, sk.e)(this, yk), !1), ik.set(this, (0, sk.e)(this, Yk, !1)), this.intensity = ((0, sk.e)(this, Lk), (0, sk.e)(this, Ck, 1)), this.color = ((0, sk.e)(this, Ak), (0, sk.e)(this, jk, Zk.e.White())), this._texture = ((0, sk.e)(this, Vk), null), Dk.set(this, (0, sk.e)(this, Fk, null)), this._useRoughnessFromMainTexture = ((0, sk.e)(this, uk), !0), fk.set(this, (0, sk.e)(this, qk, !0)), this._roughness = ((0, sk.e)(this, Ik), null), Sk.set(this, (0, sk.e)(this, zk, null)), this._textureRoughness = ((0, sk.e)(this, Qk), null), bk.set(this, (0, sk.e)(this, vk, null)), this._albedoScaling = ((0, sk.e)(this, Ek), !1), rk.set(this, (0, sk.e)(this, hk, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, sk.e)(this, ak), this._internalMarkAllSubMeshesAsTexturesDirty = kk._dirtyCallbacks[1]
        }
        isReadyForSubMesh(kk, ek) {
          if (!this._isEnabled) return !0;
          if (kk._areTexturesDirty && ek.texturesEnabled) {
            if (this._texture && Nk.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Nk.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(kk, ek) {
          this._isEnabled ? (kk.SHEEN = !0, kk.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, kk.SHEEN_ROUGHNESS = null !== this._roughness, kk.SHEEN_ALBEDOSCALING = this._albedoScaling, kk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, kk._areTexturesDirty && ek.texturesEnabled && (this._texture && Nk.e.SheenTextureEnabled ? ((0, Jk.qb)(this._texture, kk, "SHEEN_TEXTURE"), kk.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : kk.SHEEN_TEXTURE = !1, this._textureRoughness && Nk.e.SheenTextureEnabled ? (0, Jk.qb)(this._textureRoughness, kk, "SHEEN_TEXTURE_ROUGHNESS") : kk.SHEEN_TEXTURE_ROUGHNESS = !1)) : (kk.SHEEN = !1, kk.SHEEN_TEXTURE = !1, kk.SHEEN_TEXTURE_ROUGHNESS = !1, kk.SHEEN_LINKWITHALBEDO = !1, kk.SHEEN_ROUGHNESS = !1, kk.SHEEN_ALBEDOSCALING = !1, kk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, kk.SHEEN_GAMMATEXTURE = !1, kk.SHEEN_TEXTUREDIRECTUV = 0, kk.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(kk, ek, ik, Dk) {
          if (!this._isEnabled) return;
          const fk = Dk.materialDefines,
            Sk = this._material.isFrozen;
          kk.useUbo && Sk && kk.isSync || ((this._texture || this._textureRoughness) && Nk.e.SheenTextureEnabled && (kk.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Jk.G)(this._texture, kk, "sheen"), this._textureRoughness && !fk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Jk.G)(this._textureRoughness, kk, "sheenRoughness")), kk.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && kk.updateFloat("vSheenRoughness", this._roughness)), ek.texturesEnabled && (this._texture && Nk.e.SheenTextureEnabled && kk.setTexture("sheenSampler", this._texture), this._textureRoughness && !fk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && Nk.e.SheenTextureEnabled && kk.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(kk) {
          return this._texture === kk || this._textureRoughness === kk
        }
        getActiveTextures(kk) {
          this._texture && kk.push(this._texture), this._textureRoughness && kk.push(this._textureRoughness)
        }
        getAnimatables(kk) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && kk.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && kk.push(this._textureRoughness)
        }
        dispose(kk) {
          kk && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(kk, ek, ik) {
          return kk.SHEEN && ek.addFallback(ik++, "SHEEN"), ik
        }
        getSamplers(kk) {
          kk.push("sheenSampler", "sheenRoughnessSampler")
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
      }, ek = new WeakMap, ik = new WeakMap, Dk = new WeakMap, fk = new WeakMap, Sk = new WeakMap, bk = new WeakMap, rk = new WeakMap, (() => {
        const ek = "function" === typeof Symbol && Symbol.metadata ? Object.create(lk[Symbol.metadata] ?? null) : void 0;
        Pk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], mk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Mk = [(0, dk.I)()], Kk = [(0, dk.k)()], xk = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], nk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Uk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Hk = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], wk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], (0, sk.d)(kk, null, Pk, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isEnabled" in kk,
            get: kk => kk.isEnabled,
            set: (kk, ek) => {
              kk.isEnabled = ek
            }
          },
          metadata: ek
        }, pk, yk), (0, sk.d)(kk, null, mk, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: kk => "linkSheenWithAlbedo" in kk,
            get: kk => kk.linkSheenWithAlbedo,
            set: (kk, ek) => {
              kk.linkSheenWithAlbedo = ek
            }
          },
          metadata: ek
        }, Yk, Lk), (0, sk.d)(kk, null, xk, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: kk => "texture" in kk,
            get: kk => kk.texture,
            set: (kk, ek) => {
              kk.texture = ek
            }
          },
          metadata: ek
        }, Fk, uk), (0, sk.d)(kk, null, nk, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "useRoughnessFromMainTexture" in kk,
            get: kk => kk.useRoughnessFromMainTexture,
            set: (kk, ek) => {
              kk.useRoughnessFromMainTexture = ek
            }
          },
          metadata: ek
        }, qk, Ik), (0, sk.d)(kk, null, Uk, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: kk => "roughness" in kk,
            get: kk => kk.roughness,
            set: (kk, ek) => {
              kk.roughness = ek
            }
          },
          metadata: ek
        }, zk, Qk), (0, sk.d)(kk, null, Hk, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: kk => "textureRoughness" in kk,
            get: kk => kk.textureRoughness,
            set: (kk, ek) => {
              kk.textureRoughness = ek
            }
          },
          metadata: ek
        }, vk, Ek), (0, sk.d)(kk, null, wk, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: kk => "albedoScaling" in kk,
            get: kk => kk.albedoScaling,
            set: (kk, ek) => {
              kk.albedoScaling = ek
            }
          },
          metadata: ek
        }, hk, ak), (0, sk.d)(null, null, Mk, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensity" in kk,
            get: kk => kk.intensity,
            set: (kk, ek) => {
              kk.intensity = ek
            }
          },
          metadata: ek
        }, Ck, Ak), (0, sk.d)(null, null, Kk, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: kk => "color" in kk,
            get: kk => kk.color,
            set: (kk, ek) => {
              kk.color = ek
            }
          },
          metadata: ek
        }, jk, Vk), ek && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ek
        })
      })(), kk
    })();
    class Pe extends tk.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let me = (() => {
      var kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk;
      let lk, pk, yk, Yk, Lk, Ck, Ak, jk, Vk, Fk, uk, qk, Ik, zk, Qk, vk, Ek, hk, Wk, tk, Bk, ck, Tk, Ok, gk, Gk, Rk, ke, ee, ie, De = Xk.e,
        fe = [],
        Se = [],
        be = [],
        re = [],
        me = [],
        Me = [],
        Ke = [],
        xe = [],
        ne = [],
        Ue = [],
        He = [],
        we = [],
        le = [],
        pe = [],
        ye = [],
        Ye = [],
        Le = [],
        Ce = [],
        Ae = [],
        je = [],
        se = [],
        de = [],
        Ve = [],
        Fe = [],
        ue = [],
        qe = [],
        Ie = [],
        ze = [],
        Qe = [],
        ve = [],
        Ee = [],
        he = [],
        ae = [],
        We = [],
        te = [],
        Xe = [],
        Be = [],
        ce = [],
        Te = [],
        oe = [],
        Ze = [],
        Oe = [],
        ge = [],
        Ge = [],
        Ne = [],
        Re = [],
        Je = [],
        ki = [],
        ei = [],
        ii = [],
        Di = [],
        fi = [],
        Si = [],
        bi = [],
        ri = [],
        Pi = [],
        mi = [],
        Mi = [],
        Ki = [],
        xi = [];
      return kk = class extends De {
        get isRefractionEnabled() {
          return (0, sk.b)(this, ek, "f")
        }
        set isRefractionEnabled(kk) {
          (0, sk.c)(this, ek, kk, "f")
        }
        get isTranslucencyEnabled() {
          return (0, sk.b)(this, ik, "f")
        }
        set isTranslucencyEnabled(kk) {
          (0, sk.c)(this, ik, kk, "f")
        }
        get isDispersionEnabled() {
          return (0, sk.b)(this, Dk, "f")
        }
        set isDispersionEnabled(kk) {
          (0, sk.c)(this, Dk, kk, "f")
        }
        get isScatteringEnabled() {
          return (0, sk.b)(this, fk, "f")
        }
        set isScatteringEnabled(kk) {
          (0, sk.c)(this, fk, kk, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(kk) {
          this._scene.enableSubSurfaceForPrePass() && kk && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(kk))
        }
        get useAlbedoToTintRefraction() {
          return (0, sk.b)(this, Sk, "f")
        }
        set useAlbedoToTintRefraction(kk) {
          (0, sk.c)(this, Sk, kk, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, sk.b)(this, bk, "f")
        }
        set useAlbedoToTintTranslucency(kk) {
          (0, sk.c)(this, bk, kk, "f")
        }
        get thicknessTexture() {
          return (0, sk.b)(this, rk, "f")
        }
        set thicknessTexture(kk) {
          (0, sk.c)(this, rk, kk, "f")
        }
        get refractionTexture() {
          return (0, sk.b)(this, Pk, "f")
        }
        set refractionTexture(kk) {
          (0, sk.c)(this, Pk, kk, "f")
        }
        get indexOfRefraction() {
          return (0, sk.b)(this, mk, "f")
        }
        set indexOfRefraction(kk) {
          (0, sk.c)(this, mk, kk, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(kk) {
          const ek = kk >= 1 ? kk : -1;
          this._volumeIndexOfRefraction !== ek && (this._volumeIndexOfRefraction = ek, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, sk.b)(this, Mk, "f")
        }
        set invertRefractionY(kk) {
          (0, sk.c)(this, Mk, kk, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, sk.b)(this, Kk, "f")
        }
        set linkRefractionWithTransparency(kk) {
          (0, sk.c)(this, Kk, kk, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, sk.b)(this, xk, "f")
        }
        set useMaskFromThicknessTexture(kk) {
          (0, sk.c)(this, xk, kk, "f")
        }
        get refractionIntensityTexture() {
          return (0, sk.b)(this, nk, "f")
        }
        set refractionIntensityTexture(kk) {
          (0, sk.c)(this, nk, kk, "f")
        }
        get translucencyIntensityTexture() {
          return (0, sk.b)(this, Uk, "f")
        }
        set translucencyIntensityTexture(kk) {
          (0, sk.c)(this, Uk, kk, "f")
        }
        get translucencyColorTexture() {
          return (0, sk.b)(this, Hk, "f")
        }
        set translucencyColorTexture(kk) {
          (0, sk.c)(this, Hk, kk, "f")
        }
        get useGltfStyleTextures() {
          return (0, sk.b)(this, wk, "f")
        }
        set useGltfStyleTextures(kk) {
          (0, sk.c)(this, wk, kk, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(kk) {
          this.legacyTranslucency = kk
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
        constructor(lk) {
          let pk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(lk, "PBRSubSurface", 130, new Pe, pk), this._isRefractionEnabled = !1, ek.set(this, (0, sk.e)(this, fe, !1)), this._isTranslucencyEnabled = ((0, sk.e)(this, Se), !1), ik.set(this, (0, sk.e)(this, be, !1)), this._isDispersionEnabled = ((0, sk.e)(this, re), !1), Dk.set(this, (0, sk.e)(this, me, !1)), this._isScatteringEnabled = ((0, sk.e)(this, Me), !1), fk.set(this, (0, sk.e)(this, Ke, !1)), this._scatteringDiffusionProfileIndex = ((0, sk.e)(this, xe), (0, sk.e)(this, ne, 0)), this.refractionIntensity = ((0, sk.e)(this, Ue), (0, sk.e)(this, He, 1)), this.translucencyIntensity = ((0, sk.e)(this, we), (0, sk.e)(this, le, 1)), this._useAlbedoToTintRefraction = ((0, sk.e)(this, pe), !1), Sk.set(this, (0, sk.e)(this, ye, !1)), this._useAlbedoToTintTranslucency = ((0, sk.e)(this, Ye), !1), bk.set(this, (0, sk.e)(this, Le, !1)), this._thicknessTexture = ((0, sk.e)(this, Ce), null), rk.set(this, (0, sk.e)(this, Ae, null)), this._refractionTexture = ((0, sk.e)(this, je), null), Pk.set(this, (0, sk.e)(this, se, null)), this._indexOfRefraction = ((0, sk.e)(this, de), 1.5), mk.set(this, (0, sk.e)(this, Ve, 1.5)), this._volumeIndexOfRefraction = ((0, sk.e)(this, Fe), (0, sk.e)(this, ue, -1)), this._invertRefractionY = ((0, sk.e)(this, qe), !1), Mk.set(this, (0, sk.e)(this, Ie, !1)), this._linkRefractionWithTransparency = ((0, sk.e)(this, ze), !1), Kk.set(this, (0, sk.e)(this, Qe, !1)), this.minimumThickness = ((0, sk.e)(this, ve), (0, sk.e)(this, Ee, 0)), this.maximumThickness = ((0, sk.e)(this, he), (0, sk.e)(this, ae, 1)), this.useThicknessAsDepth = ((0, sk.e)(this, We), (0, sk.e)(this, te, !1)), this.tintColor = ((0, sk.e)(this, Xe), (0, sk.e)(this, Be, Zk.e.White())), this.tintColorAtDistance = ((0, sk.e)(this, ce), (0, sk.e)(this, Te, 1)), this.dispersion = ((0, sk.e)(this, oe), (0, sk.e)(this, Ze, 0)), this.diffusionDistance = ((0, sk.e)(this, Oe), (0, sk.e)(this, ge, Zk.e.White())), this._useMaskFromThicknessTexture = ((0, sk.e)(this, Ge), !1), xk.set(this, (0, sk.e)(this, Ne, !1)), this._refractionIntensityTexture = ((0, sk.e)(this, Re), null), nk.set(this, (0, sk.e)(this, Je, null)), this._translucencyIntensityTexture = ((0, sk.e)(this, ki), null), Uk.set(this, (0, sk.e)(this, ei, null)), this.translucencyColor = ((0, sk.e)(this, ii), (0, sk.e)(this, Di, null)), this._translucencyColorTexture = ((0, sk.e)(this, fi), null), Hk.set(this, (0, sk.e)(this, Si, null)), this._useGltfStyleTextures = ((0, sk.e)(this, bi), !0), wk.set(this, (0, sk.e)(this, ri, !0)), this.applyAlbedoAfterSubSurface = ((0, sk.e)(this, Pi), (0, sk.e)(this, mi, kk.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, sk.e)(this, Mi), (0, sk.e)(this, Ki, kk.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, sk.e)(this, xi), this._scene = lk.XF(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = lk._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = lk._dirtyCallbacks[32]
        }
        isReadyForSubMesh(kk, ek) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (kk._areTexturesDirty && ek.texturesEnabled) {
            if (this._thicknessTexture && Nk.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && Nk.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && Nk.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && Nk.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const kk = this._getRefractionTexture(ek);
            if (kk && Nk.e.RefractionTextureEnabled && !kk.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(kk, ek) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return kk.SUBSURFACE = !1, kk.SS_DISPERSION = !1, kk.SS_TRANSLUCENCY = !1, kk.SS_SCATTERING = !1, kk.SS_REFRACTION = !1, kk.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_THICKNESSANDMASK_TEXTURE = !1, kk.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, kk.SS_HAS_THICKNESS = !1, kk.SS_REFRACTIONINTENSITY_TEXTURE = !1, kk.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, kk.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, kk.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, kk.SS_REFRACTIONMAP_3D = !1, kk.SS_REFRACTIONMAP_OPPOSITEZ = !1, kk.SS_LODINREFRACTIONALPHA = !1, kk.SS_GAMMAREFRACTION = !1, kk.SS_RGBDREFRACTION = !1, kk.SS_LINEARSPECULARREFRACTION = !1, kk.SS_LINKREFRACTIONTOTRANSPARENCY = !1, kk.SS_ALBEDOFORREFRACTIONTINT = !1, kk.SS_ALBEDOFORTRANSLUCENCYTINT = !1, kk.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, kk.SS_USE_THICKNESS_AS_DEPTH = !1, kk.SS_USE_GLTF_TEXTURES = !1, kk.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, kk.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, kk.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(kk.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (kk._areTexturesDirty) {
            if (kk.SUBSURFACE = !0, kk.SS_DISPERSION = this._isDispersionEnabled, kk.SS_TRANSLUCENCY = this._isTranslucencyEnabled, kk.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, kk.SS_SCATTERING = this._isScatteringEnabled, kk.SS_THICKNESSANDMASK_TEXTURE = !1, kk.SS_REFRACTIONINTENSITY_TEXTURE = !1, kk.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, kk.SS_HAS_THICKNESS = !1, kk.SS_USE_GLTF_TEXTURES = !1, kk.SS_REFRACTION = !1, kk.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_REFRACTIONMAP_3D = !1, kk.SS_GAMMAREFRACTION = !1, kk.SS_RGBDREFRACTION = !1, kk.SS_LINEARSPECULARREFRACTION = !1, kk.SS_REFRACTIONMAP_OPPOSITEZ = !1, kk.SS_LODINREFRACTIONALPHA = !1, kk.SS_LINKREFRACTIONTOTRANSPARENCY = !1, kk.SS_ALBEDOFORREFRACTIONTINT = !1, kk.SS_ALBEDOFORTRANSLUCENCYTINT = !1, kk.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, kk.SS_USE_THICKNESS_AS_DEPTH = !1, kk.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, kk.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, kk._areTexturesDirty && ek.texturesEnabled && (this._thicknessTexture && Nk.e.ThicknessTextureEnabled && (0, Jk.qb)(this._thicknessTexture, kk, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && Nk.e.RefractionIntensityTextureEnabled && (0, Jk.qb)(this._refractionIntensityTexture, kk, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && Nk.e.TranslucencyIntensityTextureEnabled && (0, Jk.qb)(this._translucencyIntensityTexture, kk, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && Nk.e.TranslucencyColorTextureEnabled && ((0, Jk.qb)(this._translucencyColorTexture, kk, "SS_TRANSLUCENCYCOLOR_TEXTURE"), kk.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), kk.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, kk.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, kk.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, kk.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && ek.texturesEnabled) {
              const ik = this._getRefractionTexture(ek);
              ik && Nk.e.RefractionTextureEnabled && (kk.SS_REFRACTION = !0, kk.SS_REFRACTIONMAP_3D = ik.isCube, kk.SS_GAMMAREFRACTION = ik.gammaSpace, kk.SS_RGBDREFRACTION = ik.isRGBD, kk.SS_LINEARSPECULARREFRACTION = ik.linearSpecularLOD, kk.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && ik.isCube ? !ik.invertZ : ik.invertZ, kk.SS_LODINREFRACTIONALPHA = ik.lodLevelInAlpha, kk.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, kk.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, kk.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = ik.isCube && ik.boundingBoxSize, kk.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (kk.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(kk, ek, ik, Dk) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) kk.updateFloat2("vThicknessParam", 0, 0);
            else {
              Dk.getRenderingMesh().getWorldMatrix().decompose(ak.j.eH[0]);
              const ek = Math.max(Math.abs(ak.j.eH[0].x), Math.abs(ak.j.eH[0].y), Math.abs(ak.j.eH[0].z));
              kk.updateFloat2("vThicknessParam", this.minimumThickness * ek, (this.maximumThickness - this.minimumThickness) * ek)
            }
        }
        bindForSubMesh(kk, ek, ik, Dk) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const fk = Dk.materialDefines,
            Sk = this._material.isFrozen,
            bk = this._material.realTimeFiltering,
            rk = fk.LODBASEDMICROSFURACE,
            Pk = this._getRefractionTexture(ek);
          if (!kk.useUbo || !Sk || !kk.isSync) {
            if (this._thicknessTexture && Nk.e.ThicknessTextureEnabled && (kk.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Jk.G)(this._thicknessTexture, kk, "thickness")), this._refractionIntensityTexture && Nk.e.RefractionIntensityTextureEnabled && fk.SS_REFRACTIONINTENSITY_TEXTURE && (kk.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, Jk.G)(this._refractionIntensityTexture, kk, "refractionIntensity")), this._translucencyColorTexture && Nk.e.TranslucencyColorTextureEnabled && fk.SS_TRANSLUCENCYCOLOR_TEXTURE && (kk.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, Jk.G)(this._translucencyColorTexture, kk, "translucencyColor")), this._translucencyIntensityTexture && Nk.e.TranslucencyIntensityTextureEnabled && fk.SS_TRANSLUCENCYINTENSITY_TEXTURE && (kk.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, Jk.G)(this._translucencyIntensityTexture, kk, "translucencyIntensity")), Pk && Nk.e.RefractionTextureEnabled) {
              kk.N7("refractionMatrix", Pk.getRefractionTextureMatrix());
              let ek = 1;
              Pk.isCube || Pk.depth && (ek = Pk.depth);
              const ik = Pk.getSize().width,
                Dk = this.volumeIndexOfRefraction;
              if (kk.updateFloat4("vRefractionInfos", Pk.level, 1 / Dk, ek, this._invertRefractionY ? -1 : 1), kk.updateFloat4("vRefractionMicrosurfaceInfos", ik, Pk.lodGenerationScale, Pk.lodGenerationOffset, 1 / this.indexOfRefraction), bk && kk.updateFloat2("vRefractionFilteringInfo", ik, Math.log2(ik)), Pk.boundingBoxSize) {
                const ek = Pk;
                kk.updateVector3("vRefractionPosition", ek.boundingBoxPosition), kk.updateVector3("vRefractionSize", ek.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && kk.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), kk.updateColor3("vDiffusionDistance", this.diffusionDistance), kk.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), kk.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), kk.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), kk.updateFloat("dispersion", this.dispersion)
          }
          ek.texturesEnabled && (this._thicknessTexture && Nk.e.ThicknessTextureEnabled && kk.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && Nk.e.RefractionIntensityTextureEnabled && fk.SS_REFRACTIONINTENSITY_TEXTURE && kk.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && Nk.e.TranslucencyIntensityTextureEnabled && fk.SS_TRANSLUCENCYINTENSITY_TEXTURE && kk.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && Nk.e.TranslucencyColorTextureEnabled && fk.SS_TRANSLUCENCYCOLOR_TEXTURE && kk.setTexture("translucencyColorSampler", this._translucencyColorTexture), Pk && Nk.e.RefractionTextureEnabled && (rk ? kk.setTexture("refractionSampler", Pk) : (kk.setTexture("refractionSampler", Pk._lodTextureMid || Pk), kk.setTexture("refractionSamplerLow", Pk._lodTextureLow || Pk), kk.setTexture("refractionSamplerHigh", Pk._lodTextureHigh || Pk))))
        }
        _getRefractionTexture(kk) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? kk.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(kk) {
          Nk.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && kk.push(this._refractionTexture)
        }
        hasTexture(kk) {
          return this._thicknessTexture === kk || (this._refractionTexture === kk || (this._refractionIntensityTexture === kk || (this._translucencyIntensityTexture === kk || this._translucencyColorTexture === kk)))
        }
        hasRenderTargetTextures() {
          return !!(Nk.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(kk) {
          this._thicknessTexture && kk.push(this._thicknessTexture), this._refractionTexture && kk.push(this._refractionTexture), this._refractionIntensityTexture && kk.push(this._refractionIntensityTexture), this._translucencyColorTexture && kk.push(this._translucencyColorTexture), this._translucencyIntensityTexture && kk.push(this._translucencyIntensityTexture)
        }
        getAnimatables(kk) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && kk.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && kk.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && kk.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && kk.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && kk.push(this._translucencyIntensityTexture)
        }
        dispose(kk) {
          kk && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(kk, ek, ik) {
          return kk.SS_SCATTERING && ek.addFallback(ik++, "SS_SCATTERING"), kk.SS_TRANSLUCENCY && ek.addFallback(ik++, "SS_TRANSLUCENCY"), ik
        }
        getSamplers(kk) {
          kk.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, ek = new WeakMap, ik = new WeakMap, Dk = new WeakMap, fk = new WeakMap, Sk = new WeakMap, bk = new WeakMap, rk = new WeakMap, Pk = new WeakMap, mk = new WeakMap, Mk = new WeakMap, Kk = new WeakMap, xk = new WeakMap, nk = new WeakMap, Uk = new WeakMap, Hk = new WeakMap, wk = new WeakMap, (() => {
        const ek = "function" === typeof Symbol && Symbol.metadata ? Object.create(De[Symbol.metadata] ?? null) : void 0;
        lk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], pk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], yk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Yk = [(0, dk.I)(), (0, dk.e)("_markScenePrePassDirty")], Lk = [(0, dk.I)()], Ck = [(0, dk.I)()], Ak = [(0, dk.I)()], jk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Vk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Fk = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], uk = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], qk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ik = [(0, dk.I)()], zk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Qk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], vk = [(0, dk.I)()], Ek = [(0, dk.I)()], hk = [(0, dk.I)()], Wk = [(0, dk.k)()], tk = [(0, dk.I)()], Bk = [(0, dk.I)()], ck = [(0, dk.k)()], Tk = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ok = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], gk = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Gk = [(0, dk.k)()], Rk = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ke = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ee = [(0, dk.I)()], ie = [(0, dk.I)()], (0, sk.d)(kk, null, lk, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isRefractionEnabled" in kk,
            get: kk => kk.isRefractionEnabled,
            set: (kk, ek) => {
              kk.isRefractionEnabled = ek
            }
          },
          metadata: ek
        }, fe, Se), (0, sk.d)(kk, null, pk, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isTranslucencyEnabled" in kk,
            get: kk => kk.isTranslucencyEnabled,
            set: (kk, ek) => {
              kk.isTranslucencyEnabled = ek
            }
          },
          metadata: ek
        }, be, re), (0, sk.d)(kk, null, yk, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isDispersionEnabled" in kk,
            get: kk => kk.isDispersionEnabled,
            set: (kk, ek) => {
              kk.isDispersionEnabled = ek
            }
          },
          metadata: ek
        }, me, Me), (0, sk.d)(kk, null, Yk, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isScatteringEnabled" in kk,
            get: kk => kk.isScatteringEnabled,
            set: (kk, ek) => {
              kk.isScatteringEnabled = ek
            }
          },
          metadata: ek
        }, Ke, xe), (0, sk.d)(kk, null, jk, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAlbedoToTintRefraction" in kk,
            get: kk => kk.useAlbedoToTintRefraction,
            set: (kk, ek) => {
              kk.useAlbedoToTintRefraction = ek
            }
          },
          metadata: ek
        }, ye, Ye), (0, sk.d)(kk, null, Vk, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAlbedoToTintTranslucency" in kk,
            get: kk => kk.useAlbedoToTintTranslucency,
            set: (kk, ek) => {
              kk.useAlbedoToTintTranslucency = ek
            }
          },
          metadata: ek
        }, Le, Ce), (0, sk.d)(kk, null, Fk, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "thicknessTexture" in kk,
            get: kk => kk.thicknessTexture,
            set: (kk, ek) => {
              kk.thicknessTexture = ek
            }
          },
          metadata: ek
        }, Ae, je), (0, sk.d)(kk, null, uk, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "refractionTexture" in kk,
            get: kk => kk.refractionTexture,
            set: (kk, ek) => {
              kk.refractionTexture = ek
            }
          },
          metadata: ek
        }, se, de), (0, sk.d)(kk, null, qk, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: kk => "indexOfRefraction" in kk,
            get: kk => kk.indexOfRefraction,
            set: (kk, ek) => {
              kk.indexOfRefraction = ek
            }
          },
          metadata: ek
        }, Ve, Fe), (0, sk.d)(kk, null, zk, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: kk => "invertRefractionY" in kk,
            get: kk => kk.invertRefractionY,
            set: (kk, ek) => {
              kk.invertRefractionY = ek
            }
          },
          metadata: ek
        }, Ie, ze), (0, sk.d)(kk, null, Qk, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: kk => "linkRefractionWithTransparency" in kk,
            get: kk => kk.linkRefractionWithTransparency,
            set: (kk, ek) => {
              kk.linkRefractionWithTransparency = ek
            }
          },
          metadata: ek
        }, Qe, ve), (0, sk.d)(kk, null, Tk, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "useMaskFromThicknessTexture" in kk,
            get: kk => kk.useMaskFromThicknessTexture,
            set: (kk, ek) => {
              kk.useMaskFromThicknessTexture = ek
            }
          },
          metadata: ek
        }, Ne, Re), (0, sk.d)(kk, null, Ok, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "refractionIntensityTexture" in kk,
            get: kk => kk.refractionIntensityTexture,
            set: (kk, ek) => {
              kk.refractionIntensityTexture = ek
            }
          },
          metadata: ek
        }, Je, ki), (0, sk.d)(kk, null, gk, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "translucencyIntensityTexture" in kk,
            get: kk => kk.translucencyIntensityTexture,
            set: (kk, ek) => {
              kk.translucencyIntensityTexture = ek
            }
          },
          metadata: ek
        }, ei, ii), (0, sk.d)(kk, null, Rk, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "translucencyColorTexture" in kk,
            get: kk => kk.translucencyColorTexture,
            set: (kk, ek) => {
              kk.translucencyColorTexture = ek
            }
          },
          metadata: ek
        }, Si, bi), (0, sk.d)(kk, null, ke, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: kk => "useGltfStyleTextures" in kk,
            get: kk => kk.useGltfStyleTextures,
            set: (kk, ek) => {
              kk.useGltfStyleTextures = ek
            }
          },
          metadata: ek
        }, ri, Pi), (0, sk.d)(null, null, Lk, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: kk => "_scatteringDiffusionProfileIndex" in kk,
            get: kk => kk._scatteringDiffusionProfileIndex,
            set: (kk, ek) => {
              kk._scatteringDiffusionProfileIndex = ek
            }
          },
          metadata: ek
        }, ne, Ue), (0, sk.d)(null, null, Ck, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "refractionIntensity" in kk,
            get: kk => kk.refractionIntensity,
            set: (kk, ek) => {
              kk.refractionIntensity = ek
            }
          },
          metadata: ek
        }, He, we), (0, sk.d)(null, null, Ak, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "translucencyIntensity" in kk,
            get: kk => kk.translucencyIntensity,
            set: (kk, ek) => {
              kk.translucencyIntensity = ek
            }
          },
          metadata: ek
        }, le, pe), (0, sk.d)(null, null, Ik, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: kk => "_volumeIndexOfRefraction" in kk,
            get: kk => kk._volumeIndexOfRefraction,
            set: (kk, ek) => {
              kk._volumeIndexOfRefraction = ek
            }
          },
          metadata: ek
        }, ue, qe), (0, sk.d)(null, null, vk, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: kk => "minimumThickness" in kk,
            get: kk => kk.minimumThickness,
            set: (kk, ek) => {
              kk.minimumThickness = ek
            }
          },
          metadata: ek
        }, Ee, he), (0, sk.d)(null, null, Ek, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: kk => "maximumThickness" in kk,
            get: kk => kk.maximumThickness,
            set: (kk, ek) => {
              kk.maximumThickness = ek
            }
          },
          metadata: ek
        }, ae, We), (0, sk.d)(null, null, hk, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: kk => "useThicknessAsDepth" in kk,
            get: kk => kk.useThicknessAsDepth,
            set: (kk, ek) => {
              kk.useThicknessAsDepth = ek
            }
          },
          metadata: ek
        }, te, Xe), (0, sk.d)(null, null, Wk, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "tintColor" in kk,
            get: kk => kk.tintColor,
            set: (kk, ek) => {
              kk.tintColor = ek
            }
          },
          metadata: ek
        }, Be, ce), (0, sk.d)(null, null, tk, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: kk => "tintColorAtDistance" in kk,
            get: kk => kk.tintColorAtDistance,
            set: (kk, ek) => {
              kk.tintColorAtDistance = ek
            }
          },
          metadata: ek
        }, Te, oe), (0, sk.d)(null, null, Bk, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: kk => "dispersion" in kk,
            get: kk => kk.dispersion,
            set: (kk, ek) => {
              kk.dispersion = ek
            }
          },
          metadata: ek
        }, Ze, Oe), (0, sk.d)(null, null, ck, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: kk => "diffusionDistance" in kk,
            get: kk => kk.diffusionDistance,
            set: (kk, ek) => {
              kk.diffusionDistance = ek
            }
          },
          metadata: ek
        }, ge, Ge), (0, sk.d)(null, null, Gk, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "translucencyColor" in kk,
            get: kk => kk.translucencyColor,
            set: (kk, ek) => {
              kk.translucencyColor = ek
            }
          },
          metadata: ek
        }, Di, fi), (0, sk.d)(null, null, ee, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: kk => "applyAlbedoAfterSubSurface" in kk,
            get: kk => kk.applyAlbedoAfterSubSurface,
            set: (kk, ek) => {
              kk.applyAlbedoAfterSubSurface = ek
            }
          },
          metadata: ek
        }, mi, Mi), (0, sk.d)(null, null, ie, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: kk => "legacyTranslucency" in kk,
            get: kk => kk.legacyTranslucency,
            set: (kk, ek) => {
              kk.legacyTranslucency = ek
            }
          },
          metadata: ek
        }, Ki, xi), ek && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ek
        })
      })(), kk.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, kk.DEFAULT_LEGACY_TRANSLUCENCY = !1, kk
    })();
    var Me = ik(39949),
      Ke = ik(39919),
      xe = ik(39964),
      ne = ik(39966),
      Ue = ik(39971),
      He = ik(39975),
      we = ik(39984),
      le = ik(39993),
      pe = ik(39447);
    const ye = {
      effect: null,
      subMesh: null
    };
    class Ye extends((0, we.d)((0, He.d)(tk.d))) {}
    class Le extends((0, Ok.e)(Ye)) {
      constructor(kk) {
        super(kk), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Ce extends((0, le.d)(Gk.c)) {}
    let Ae = (() => {
      var kk, ek;
      let Dk, fk = Ce,
        bk = [],
        rk = [];
      return kk = class extends fk {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(kk) {
          this._realTimeFiltering = kk, this.pek(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(kk) {
          this._realTimeFilteringQuality = kk, this.pek(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, sk.b)(this, ek, "f")
        }
        set debugMode(kk) {
          (0, sk.c)(this, ek, kk, "f")
        }
        constructor(ik, Dk) {
          super(ik, Dk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || kk.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new ak.p(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = kk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = Zk.e.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new Zk.e(0, 0, 0), this._albedoColor = new Zk.e(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new Zk.e(1, 1, 1), this._reflectionColor = new Zk.e(1, 1, 1), this._emissiveColor = new Zk.e(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = kk.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Fk.h(16), this._globalAmbientColor = new Zk.e(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, ek.set(this, (0, sk.e)(this, bk, 0)), this.debugLimit = ((0, sk.e)(this, rk), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new ck(this), this.clearCoat = new ee(this), this.iridescence = new De(this), this.anisotropy = new Se(this), this.sheen = new re(this), this.subSurface = new me(this), this.detailMap = new Me.e(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Nk.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Qk(this.XF()), this.prePassConfiguration = new Tk.c
        }
        get hasRenderTargetTextures() {
          return !!(Nk.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === kk.PBRMATERIAL_OPAQUE || this._transparencyMode === kk.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === kk.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== kk.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(kk, ek, ik) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Dk = ek._drawWrapper;
          if (Dk.effect && this.isFrozen && Dk._wasPreviouslyReady && Dk._wasPreviouslyUsingInstances === ik) return !0;
          ek.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ek.materialDefines = new Le(this._eventInfo.defineNames));
          const fk = ek.materialDefines;
          if (this._isReadyForSubMesh(ek)) return !0;
          const Sk = this.XF(),
            bk = Sk.JU();
          if (fk._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Sk.texturesEnabled)) {
            if (this._albedoTexture && Nk.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && Nk.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && Nk.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && Nk.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && Nk.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const kk = this._getReflectionTexture();
            if (kk && Nk.e.ReflectionTextureEnabled) {
              if (!kk.isReadyOrNotBlocking()) return !1;
              if (kk.irradianceTexture) {
                if (!kk.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!kk.sphericalPolynomial && kk.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && Nk.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && Nk.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (Nk.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (bk.getCaps().standardDerivatives && this._bumpTexture && Nk.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && Nk.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = fk, this._eventInfo.subMesh = ek, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (fk._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (fk.AREALIGHTUSED || fk.CLUSTLIGHT_BATCH)
            for (let Kk = 0; Kk < kk.lightSources.length; Kk++)
              if (!kk.lightSources[Kk]._isReady()) return !1;
          if (bk.getCaps().standardDerivatives || kk.isVerticesDataPresent(Wk.e.NormalKind) || (kk.createNormals(!0), Vk.b.Warn("PBRMaterial: Normals have been created for the mesh: " + kk.name)), !(0, Jk.b)(Sk, kk, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const rk = ek.effect,
            Pk = fk._areLightsDisposed,
            mk = this._prepareEffect(kk, ek.getRenderingMesh(), fk, this.onCompiled, this.onError, ik, null);
          let Mk = !1;
          if (mk)
            if (this._onEffectCreatedObservable && (ye.effect = mk, ye.subMesh = ek, this._onEffectCreatedObservable.notifyObservers(ye)), this.allowShaderHotSwapping && rk && !mk.isReady()) {
              if (fk.markAsUnprocessed(), Mk = this.isFrozen, Pk) return fk._areLightsDisposed = !0, !1
            } else Sk.resetCachedMaterial(), ek.setEffect(mk, fk, this._materialContext);
          return !(!ek.effect || !ek.effect.isReady()) && (fk._renderId = Sk.getRenderId(), Dk._wasPreviouslyReady = !Mk, Dk._wasPreviouslyUsingInstances = !!ik, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(ek, ik, Dk) {
          let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            rk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(ek, ik, Dk, bk, rk), !Dk.isDirty) return null;
          Dk.markAsProcessed();
          const Pk = this.XF().JU(),
            mk = new Rk.b;
          let Mk = 0;
          Dk.USESPHERICALINVERTEX && mk.addFallback(Mk++, "USESPHERICALINVERTEX"), Dk.FOG && mk.addFallback(Mk, "FOG"), Dk.SPECULARAA && mk.addFallback(Mk, "SPECULARAA"), Dk.POINTSIZE && mk.addFallback(Mk, "POINTSIZE"), Dk.LOGARITHMICDEPTH && mk.addFallback(Mk, "LOGARITHMICDEPTH"), Dk.PARALLAX && mk.addFallback(Mk, "PARALLAX"), Dk.PARALLAX_RHS && mk.addFallback(Mk, "PARALLAX_RHS"), Dk.PARALLAXOCCLUSION && mk.addFallback(Mk++, "PARALLAXOCCLUSION"), Dk.ENVIRONMENTBRDF && mk.addFallback(Mk++, "ENVIRONMENTBRDF"), Dk.TANGENT && mk.addFallback(Mk++, "TANGENT"), Dk.BUMP && mk.addFallback(Mk++, "BUMP"), Mk = (0, Jk.J)(Dk, mk, this._maxSimultaneousLights, Mk), Dk.SPECULARTERM && mk.addFallback(Mk++, "SPECULARTERM"), Dk.USESPHERICALFROMREFLECTIONMAP && mk.addFallback(Mk++, "USESPHERICALFROMREFLECTIONMAP"), Dk.USEIRRADIANCEMAP && mk.addFallback(Mk++, "USEIRRADIANCEMAP"), Dk.LIGHTMAP && mk.addFallback(Mk++, "LIGHTMAP"), Dk.NORMAL && mk.addFallback(Mk++, "NORMAL"), Dk.AMBIENT && mk.addFallback(Mk++, "AMBIENT"), Dk.EMISSIVE && mk.addFallback(Mk++, "EMISSIVE"), Dk.VERTEXCOLOR && mk.addFallback(Mk++, "VERTEXCOLOR"), Dk.MORPHTARGETS && mk.addFallback(Mk++, "MORPHTARGETS"), Dk.MULTIVIEW && mk.addFallback(0, "MULTIVIEW");
          const Kk = [Wk.e.PositionKind];
          Dk.NORMAL && Kk.push(Wk.e.NormalKind), Dk.TANGENT && Kk.push(Wk.e.TangentKind);
          for (let kk = 1; kk <= 6; ++kk) Dk["UV" + kk] && Kk.push(`uv${1===kk?"":kk}`);
          Dk.VERTEXCOLOR && Kk.push(Wk.e.ColorKind), (0, Jk.P)(Kk, ek, Dk, mk), (0, Jk.T)(Kk, Dk), (0, Jk.X)(Kk, ek, Dk), (0, Jk.L)(Kk, ek, Dk);
          let xk = "pbr";
          const nk = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            Uk = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, Jk.Cb)(nk, Uk, !0);
          const Hk = ["Material", "Scene", "Mesh"],
            wk = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Dk.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = mk, this._eventInfo.fallbackRank = Mk, this._eventInfo.defines = Dk, this._eventInfo.uniforms = nk, this._eventInfo.attributes = Kk, this._eventInfo.samplers = Uk, this._eventInfo.uniformBuffersNames = Hk, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ek, this._eventInfo.indexParameters = wk, this._callbackPluginEventGeneric(128, this._eventInfo), Ue.e.AddUniformsAndSamplers(nk, Uk), Tk.c.AddUniforms(nk), Tk.c.AddSamplers(Uk), (0, Ke.d)(nk), this._useVertexPulling) {
            const kk = ik?.geometry;
            kk && (this._vertexPullingMetadata = (0, xe.f)(kk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, ek) => {
              nk.push(`vp_${ek}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          gk.b && (gk.b.PrepareUniforms(nk, Dk), gk.b.PrepareSamplers(Uk, Dk)), (0, Jk.Db)({
            uniformsNames: nk,
            uniformBuffersNames: Hk,
            samplers: Uk,
            defines: Dk,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const lk = {};
          this.customShaderNameResolve && (xk = this.customShaderNameResolve(xk, nk, Hk, Uk, Dk, Kk, lk));
          const pk = Dk.toString(),
            yk = Pk.createEffect(xk, {
              attributes: Kk,
              uniformsNames: nk,
              uniformBuffersNames: Hk,
              samplers: Uk,
              defines: pk,
              fallbacks: mk,
              onCompiled: fk,
              onError: Sk,
              indexParameters: wk,
              processFinalCode: lk.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Dk.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: kk._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Pk);
          return this._eventInfo.customCode = void 0, yk
        }
        _prepareDefines(ek, ik, Dk) {
          let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const bk = ik.hasThinInstances,
            rk = this.XF(),
            Pk = rk.JU();
          (0, Jk.mb)(rk, ek, Dk, !0, this._maxSimultaneousLights, this._disableLighting), Dk._needNormals = !0, (0, Jk.vb)(rk, Dk);
          const mk = this.needAlphaBlendingForMesh(ek) && this.XF().useOrderIndependentTransparency;
          if ((0, Jk.xb)(rk, Dk, this.canRenderToMRT && !mk), (0, Jk.wb)(rk, Dk, mk), Ue.e.PrepareDefines(Pk.currentRenderPassId, ek, Dk), Dk.METALLICWORKFLOW = this.isMetallicWorkflow(), Dk._areTexturesDirty) {
            Dk._needUVs = !1;
            for (let kk = 1; kk <= 6; ++kk) Dk["MAINUV" + kk] = !1;
            if (rk.texturesEnabled) {
              Dk.ALBEDODIRECTUV = 0, Dk.BASE_WEIGHTDIRECTUV = 0, Dk.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Dk.AMBIENTDIRECTUV = 0, Dk.OPACITYDIRECTUV = 0, Dk.EMISSIVEDIRECTUV = 0, Dk.REFLECTIVITYDIRECTUV = 0, Dk.MICROSURFACEMAPDIRECTUV = 0, Dk.METALLIC_REFLECTANCEDIRECTUV = 0, Dk.REFLECTANCEDIRECTUV = 0, Dk.BUMPDIRECTUV = 0, Dk.LIGHTMAPDIRECTUV = 0, Pk.getCaps().textureLOD && (Dk.LODBASEDMICROSFURACE = !0), this._albedoTexture && Nk.e.DiffuseTextureEnabled ? ((0, Jk.qb)(this._albedoTexture, Dk, "ALBEDO"), Dk.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Dk.ALBEDO = !1, this._baseWeightTexture && Nk.e.BaseWeightTextureEnabled ? (0, Jk.qb)(this._baseWeightTexture, Dk, "BASE_WEIGHT") : Dk.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && Nk.e.BaseDiffuseRoughnessTextureEnabled ? (0, Jk.qb)(this._baseDiffuseRoughnessTexture, Dk, "BASE_DIFFUSE_ROUGHNESS") : Dk.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && Nk.e.AmbientTextureEnabled ? ((0, Jk.qb)(this._ambientTexture, Dk, "AMBIENT"), Dk.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Dk.AMBIENT = !1, this._opacityTexture && Nk.e.OpacityTextureEnabled ? ((0, Jk.qb)(this._opacityTexture, Dk, "OPACITY"), Dk.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Dk.OPACITY = !1;
              const kk = this._getReflectionTexture(),
                ek = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Pk.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, Jk.jb)(rk, kk, Dk, this.realTimeFiltering, this.realTimeFilteringQuality, !ek), this._lightmapTexture && Nk.e.LightmapTextureEnabled ? ((0, Jk.qb)(this._lightmapTexture, Dk, "LIGHTMAP"), Dk.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Dk.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Dk.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Dk.LIGHTMAP = !1, this._emissiveTexture && Nk.e.EmissiveTextureEnabled ? ((0, Jk.qb)(this._emissiveTexture, Dk, "EMISSIVE"), Dk.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Dk.EMISSIVE = !1, Nk.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, Jk.qb)(this._metallicTexture, Dk, "REFLECTIVITY"), Dk.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Dk.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Dk.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Dk.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Dk.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, Jk.qb)(this._reflectivityTexture, Dk, "REFLECTIVITY"), Dk.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Dk.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Dk.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Dk.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Dk.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, Jk.qb)(this._metallicReflectanceTexture, Dk, "METALLIC_REFLECTANCE"), Dk.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Dk.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, Jk.qb)(this._reflectanceTexture, Dk, "REFLECTANCE"), Dk.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Dk.REFLECTANCE = !1) : (Dk.METALLIC_REFLECTANCE = !1, Dk.REFLECTANCE = !1), this._microSurfaceTexture ? (0, Jk.qb)(this._microSurfaceTexture, Dk, "MICROSURFACEMAP") : Dk.MICROSURFACEMAP = !1) : (Dk.REFLECTIVITY = !1, Dk.MICROSURFACEMAP = !1), Pk.getCaps().standardDerivatives && this._bumpTexture && Nk.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, Jk.qb)(this._bumpTexture, Dk, "BUMP"), this._useParallax && this._albedoTexture && Nk.e.DiffuseTextureEnabled ? (Dk.PARALLAX = !0, Dk.PARALLAX_RHS = rk.useRightHandedSystem, Dk.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Dk.PARALLAX = !1, Dk.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Dk.BUMP = !1, Dk.PARALLAX = !1, Dk.PARALLAX_RHS = !1, Dk.PARALLAXOCCLUSION = !1, Dk.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Nk.e.ReflectionTextureEnabled ? (Dk.ENVIRONMENTBRDF = !0, Dk.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Dk.ENVIRONMENTBRDF = !1, Dk.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Dk.ALPHAFROMALBEDO = !0 : Dk.ALPHAFROMALBEDO = !1
            }
            Dk.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === kk.LIGHTFALLOFF_STANDARD ? (Dk.USEPHYSICALLIGHTFALLOFF = !1, Dk.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === kk.LIGHTFALLOFF_GLTF ? (Dk.USEPHYSICALLIGHTFALLOFF = !1, Dk.USEGLTFLIGHTFALLOFF = !0) : (Dk.USEPHYSICALLIGHTFALLOFF = !0, Dk.USEGLTFLIGHTFALLOFF = !1), Dk.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Dk.TWOSIDEDLIGHTING = !0 : Dk.TWOSIDEDLIGHTING = !1, Dk.MIRRORED = !!rk._mirroredCameraPosition, Dk.SPECULARAA = Pk.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Dk._areTexturesDirty || Dk._areMiscDirty) && (Dk.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Dk.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Dk.ALPHABLEND = this.needAlphaBlendingForMesh(ek), Dk.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Dk.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Dk._areTexturesDirty && (Dk.TEXTURE_REPETITION_MODE = Pk.version > 1 || Pk.isWebGPU ? this.textureRepetitionMode : 0), Dk._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Dk), Dk.FORCENORMALFORWARD = this._forceNormalForward, Dk.RADIANCEOCCLUSION = this._useRadianceOcclusion, Dk.HORIZONOCCLUSION = this._useHorizonOcclusion, Dk._areMiscDirty && ((0, Jk.tb)(ek, rk, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ek), Dk, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ik, this._isVertexOutputInvariant), Dk.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !ek.isVerticesDataPresent(Wk.e.NormalKind), Dk.DEBUGMODE = this._debugMode), (0, Jk.hb)(rk, Pk, this, Dk, !!fk, Sk, bk), this._eventInfo.defines = Dk, this._eventInfo.mesh = ek, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Jk.db)(ek, Dk, !0, !0, !0, this._transparencyMode !== kk.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(kk, ek, ik) {
          const Dk = {
            clipPlane: !1,
            useInstances: !1,
            ...ik
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const ik = new Le(this._eventInfo.defineNames),
              fk = this._prepareEffect(kk, kk, ik, void 0, void 0, Dk.useInstances, Dk.clipPlane);
            this._onEffectCreatedObservable && (ye.effect = fk, ye.subMesh = null, this._onEffectCreatedObservable.notifyObservers(ye)), fk.isReady() ? ek && ek(this) : fk.onCompileObservable.add((() => {
              ek && ek(this)
            }))
          })()
        }
        buildUniformLayout() {
          const kk = this._uniformBuffer;
          kk.addUniform("vAlbedoInfos", 2), kk.addUniform("vBaseWeightInfos", 2), kk.addUniform("vBaseDiffuseRoughnessInfos", 2), kk.addUniform("vAmbientInfos", 4), kk.addUniform("vOpacityInfos", 2), kk.addUniform("vEmissiveInfos", 2), kk.addUniform("vLightmapInfos", 2), kk.addUniform("vReflectivityInfos", 3), kk.addUniform("vMicroSurfaceSamplerInfos", 2), kk.addUniform("vBumpInfos", 3), kk.addUniform("albedoMatrix", 16), kk.addUniform("baseWeightMatrix", 16), kk.addUniform("baseDiffuseRoughnessMatrix", 16), kk.addUniform("ambientMatrix", 16), kk.addUniform("opacityMatrix", 16), kk.addUniform("emissiveMatrix", 16), kk.addUniform("lightmapMatrix", 16), kk.addUniform("reflectivityMatrix", 16), kk.addUniform("microSurfaceSamplerMatrix", 16), kk.addUniform("bumpMatrix", 16), kk.addUniform("vTangentSpaceParams", 2), kk.addUniform("vAlbedoColor", 4), kk.addUniform("baseWeight", 1), kk.addUniform("baseDiffuseRoughness", 1), kk.addUniform("vLightingIntensity", 4), kk.addUniform("pointSize", 1), kk.addUniform("vReflectivityColor", 4), kk.addUniform("vEmissiveColor", 3), kk.addUniform("vAmbientColor", 3), kk.addUniform("vDebugMode", 2), kk.addUniform("vMetallicReflectanceFactors", 4), kk.addUniform("vMetallicReflectanceInfos", 2), kk.addUniform("metallicReflectanceMatrix", 16), kk.addUniform("vReflectanceInfos", 2), kk.addUniform("reflectanceMatrix", 16), kk.addUniform("cameraInfo", 4), kk.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Jk.Bb)(kk, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(kk, ek, ik) {
          const Dk = this.XF(),
            fk = ik.materialDefines;
          if (!fk) return;
          const Sk = ik.effect;
          if (!Sk) return;
          this._activeEffect = Sk, ek.getMeshUniformBuffer().bindToEffect(Sk, "Mesh"), ek.transferToEffect(kk);
          const bk = Dk.JU();
          this._uniformBuffer.bindToEffect(Sk, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Dk, ek, kk, this.isFrozen), Ue.e.Bind(bk.currentRenderPassId, this._activeEffect, ek, kk, this);
          const rk = Dk.activeCamera;
          rk ? this._uniformBuffer.updateFloat4("cameraInfo", rk.minZ, rk.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const Pk = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Pk[0], Pk[1], Pk[2], Pk[3]), this._eventInfo.subMesh = ik, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), fk.OBJECTSPACE_NORMALMAP && (kk.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const mk = this._mustRebind(Dk, Sk, ik, ek.visibility),
            Mk = bk._features.needToAlwaysBindUniformBuffers;
          (0, Jk.f)(ek, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, xe.b)(this._activeEffect, this._vertexPullingMetadata);
          let Kk = null;
          const xk = this._uniformBuffer;
          if (mk) {
            if (this.bindViewProjection(Sk), Kk = this._getReflectionTexture(), !xk.useUbo || !this.isFrozen || !xk.isSync || ik._drawWrapper._forceRebindOnNextCall) {
              if (Dk.texturesEnabled && (this._albedoTexture && Nk.e.DiffuseTextureEnabled && (xk.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, Jk.G)(this._albedoTexture, xk, "albedo")), this._baseWeightTexture && Nk.e.BaseWeightTextureEnabled && (xk.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, Jk.G)(this._baseWeightTexture, xk, "baseWeight")), this._baseDiffuseRoughnessTexture && Nk.e.BaseDiffuseRoughnessTextureEnabled && (xk.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, Jk.G)(this._baseDiffuseRoughnessTexture, xk, "baseDiffuseRoughness")), this._ambientTexture && Nk.e.AmbientTextureEnabled && (xk.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, Jk.G)(this._ambientTexture, xk, "ambient")), this._opacityTexture && Nk.e.OpacityTextureEnabled && (xk.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Jk.G)(this._opacityTexture, xk, "opacity")), this._emissiveTexture && Nk.e.EmissiveTextureEnabled && (xk.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Jk.G)(this._emissiveTexture, xk, "emissive")), this._lightmapTexture && Nk.e.LightmapTextureEnabled && (xk.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Jk.G)(this._lightmapTexture, xk, "lightmap")), Nk.e.SpecularTextureEnabled && (this._metallicTexture ? (xk.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, Jk.G)(this._metallicTexture, xk, "reflectivity")) : this._reflectivityTexture && (xk.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, Jk.G)(this._reflectivityTexture, xk, "reflectivity")), this._metallicReflectanceTexture && (xk.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, Jk.G)(this._metallicReflectanceTexture, xk, "metallicReflectance")), this._reflectanceTexture && fk.REFLECTANCE && (xk.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, Jk.G)(this._reflectanceTexture, xk, "reflectance")), this._microSurfaceTexture && (xk.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, Jk.G)(this._microSurfaceTexture, xk, "microSurfaceSampler"))), this._bumpTexture && bk.getCaps().standardDerivatives && Nk.e.BumpTextureEnabled && !this._disableBumpMap && (xk.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, Jk.G)(this._bumpTexture, xk, "bump"), Dk._mirroredCameraPosition ? xk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : xk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Jk.m)(Dk, fk, xk, this._reflectionColor, Kk, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && xk.updateFloat("pointSize", this.pointSize), fk.METALLICWORKFLOW) {
                Zk.k.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, Zk.k.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const kk = this.subSurface?._indexOfRefraction ?? 1.5,
                  ek = 1;
                Zk.k.Color4[0].b = kk;
                const ik = Math.pow((kk - ek) / (kk + ek), 2);
                Zk.k.Color4[0].a = ik, xk.updateDirectColor4("vReflectivityColor", Zk.k.Color4[0]), xk.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else xk.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              xk.updateColor3("vEmissiveColor", Nk.e.EmissiveTextureEnabled ? this._emissiveColor : Zk.e.BlackReadOnly), !fk.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? xk.updateColor4("vAlbedoColor", this._albedoColor, 1) : xk.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), xk.updateFloat("baseWeight", this._baseWeight), xk.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Dk.environmentIntensity, this._lightingInfos.w = this._specularIntensity, xk.updateVector4("vLightingIntensity", this._lightingInfos), Dk.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), xk.updateColor3("vAmbientColor", this._globalAmbientColor), xk.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Dk.texturesEnabled && (this._albedoTexture && Nk.e.DiffuseTextureEnabled && xk.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && Nk.e.BaseWeightTextureEnabled && xk.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && Nk.e.BaseDiffuseRoughnessTextureEnabled && xk.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && Nk.e.AmbientTextureEnabled && xk.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && Nk.e.OpacityTextureEnabled && xk.setTexture("opacitySampler", this._opacityTexture), (0, Jk.q)(Dk, fk, xk, Kk, this.realTimeFiltering), fk.ENVIRONMENTBRDF && xk.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && Nk.e.EmissiveTextureEnabled && xk.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && Nk.e.LightmapTextureEnabled && xk.setTexture("lightmapSampler", this._lightmapTexture), Nk.e.SpecularTextureEnabled && (this._metallicTexture ? xk.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && xk.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && xk.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && fk.REFLECTANCE && xk.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && xk.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && bk.getCaps().standardDerivatives && Nk.e.BumpTextureEnabled && !this._disableBumpMap && xk.setTexture("bumpSampler", this._bumpTexture)), this.XF().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ek) && this.XF().depthPeelingRenderer.bind(Sk), this._eventInfo.subMesh = ik, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Ke.g)(this._activeEffect, this, Dk), this.bindEyePosition(Sk)
          } else Mk && (this._needToBindSceneUbo = !0);
          !mk && this.isFrozen && !Mk || !Dk.lightsEnabled || this._disableLighting || (0, Jk.r)(Dk, ek, this._activeEffect, fk, this._maxSimultaneousLights), !mk && this.isFrozen || ((Dk.fogEnabled && ek.applyFog && Dk.fogMode !== hk.f.FOGMODE_NONE || Kk || this.subSurface.refractionTexture || ek.receiveShadows || fk.PREPASS || fk.CLUSTLIGHT_BATCH) && this.bindView(Sk), (0, Jk.i)(Dk, ek, this._activeEffect, !0), fk.NUM_MORPH_INFLUENCERS && (0, Jk.y)(ek, this._activeEffect), fk.BAKED_VERTEX_ANIMATION_TEXTURE && ek.bakedVertexAnimationManager?.bind(Sk, fk.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Jk.u)(fk, this._activeEffect, Dk)), this._afterBind(ek, this._activeEffect, ik), xk.update()
        }
        getAnimatables() {
          const kk = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && kk.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && kk.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && kk.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && kk.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && kk.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && kk.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && kk.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? kk.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && kk.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && kk.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && kk.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && kk.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && kk.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && kk.push(this._microSurfaceTexture), kk
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.XF().environmentTexture
        }
        getActiveTextures() {
          const kk = super.getActiveTextures();
          return this._albedoTexture && kk.push(this._albedoTexture), this._baseWeightTexture && kk.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && kk.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && kk.push(this._ambientTexture), this._opacityTexture && kk.push(this._opacityTexture), this._reflectionTexture && kk.push(this._reflectionTexture), this._emissiveTexture && kk.push(this._emissiveTexture), this._reflectivityTexture && kk.push(this._reflectivityTexture), this._metallicTexture && kk.push(this._metallicTexture), this._metallicReflectanceTexture && kk.push(this._metallicReflectanceTexture), this._reflectanceTexture && kk.push(this._reflectanceTexture), this._microSurfaceTexture && kk.push(this._microSurfaceTexture), this._bumpTexture && kk.push(this._bumpTexture), this._lightmapTexture && kk.push(this._lightmapTexture), kk
        }
        hasTexture(kk) {
          return !!super.hasTexture(kk) || (this._albedoTexture === kk || (this._baseWeightTexture === kk || (this._baseDiffuseRoughnessTexture === kk || (this._ambientTexture === kk || (this._opacityTexture === kk || (this._reflectionTexture === kk || (this._emissiveTexture === kk || (this._reflectivityTexture === kk || (this._metallicTexture === kk || (this._metallicReflectanceTexture === kk || (this._reflectanceTexture === kk || (this._microSurfaceTexture === kk || (this._bumpTexture === kk || this._lightmapTexture === kk)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const kk = this.XF().enableSubSurfaceForPrePass();
          return kk && (kk.enabled = !0), !0
        }
        dispose(kk, ek) {
          this._breakShaderLoadedCheck = !0, ek && (this._environmentBRDFTexture && this.XF().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(kk, ek)
        }
      }, ek = new WeakMap, (() => {
        const ek = "function" === typeof Symbol && Symbol.metadata ? Object.create(fk[Symbol.metadata] ?? null) : void 0;
        Dk = [(0, dk.e)("_markAllSubMeshesAsMiscDirty")], (0, sk.d)(kk, null, Dk, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "debugMode" in kk,
            get: kk => kk.debugMode,
            set: (kk, ek) => {
              kk.debugMode = ek
            }
          },
          metadata: ek
        }, bk, rk), ek && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ek
        })
      })(), kk.PBRMATERIAL_OPAQUE = Sk.e.MATERIAL_OPAQUE, kk.PBRMATERIAL_ALPHATEST = Sk.e.MATERIAL_ALPHATEST, kk.PBRMATERIAL_ALPHABLEND = Sk.e.MATERIAL_ALPHABLEND, kk.PBRMATERIAL_ALPHATESTANDBLEND = Sk.e.MATERIAL_ALPHATESTANDBLEND, kk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, kk.LIGHTFALLOFF_PHYSICAL = 0, kk.LIGHTFALLOFF_GLTF = 1, kk.LIGHTFALLOFF_STANDARD = 2, kk.ForceGLSL = !1, kk._ShaderLoader = new ne.e((() => [Promise.all([ik.e(316), ik.e(327)]).then((() => ik(60924))), Promise.all([ik.e(321), ik.e(317), ik.e(379), ik.e(330), ik.e(378)]).then((() => ik(60947)))]), (() => [Promise.all([ik.e(335), ik.e(337), ik.e(344)]).then((() => ik(61020))), Promise.all([ik.e(335), ik.e(338), ik.e(382), ik.e(348), ik.e(381)]).then((() => ik(61050)))])), kk
    })();
    Object.getOwnPropertyDescriptor(Ae.prototype, "decalMap") || Object.defineProperty(Ae.prototype, "decalMap", (0, pe.h)("PBRBaseMaterial", "decalMap")), (0, ik(41420).d)();
    var je = ik(39585);
    var se = ik(39662),
      de = ik(41404),
      Ve = ik(39391),
      Fe = ik(39398),
      ue = ik(39517);
    let qe = !1;
    const Ie = new Zk.f,
      ze = new Zk.f;
    class Qe extends de.c {
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
      set wrapU(kk) {
        if (this._textures)
          for (let ek = 0; ek < this._textures.length; ek++) this._textures[ek].wrapU = kk
      }
      set wrapV(kk) {
        if (this._textures)
          for (let ek = 0; ek < this._textures.length; ek++) this._textures[ek].wrapV = kk
      }
      constructor(kk, ek, ik, Dk, fk, Sk) {
        const bk = !(!fk || !fk.generateMipMaps) && fk.generateMipMaps,
          rk = !(!fk || !fk.generateDepthTexture) && fk.generateDepthTexture,
          Pk = fk && fk.depthTextureFormat ? fk.depthTextureFormat : 15,
          mk = !fk || void 0 === fk.doNotChangeAspectRatio || fk.doNotChangeAspectRatio,
          Mk = !(!fk || !fk.drawOnlyOnFirstAttachmentByDefault) && fk.drawOnlyOnFirstAttachmentByDefault;
        if (super(kk, ek, Dk, bk, mk, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), qe || (qe = !0, Fe.ThinEngine.prototype.restoreSingleAttachment = function() {
            const kk = this._gl;
            this.bindAttachments([kk.BACK])
          }, Fe.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const kk = this._gl;
            this.bindAttachments([kk.COLOR_ATTACHMENT0])
          }, Fe.ThinEngine.prototype.buildTextureLayout = function(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const ik = this._gl,
              Dk = [];
            if (ek) Dk.push(ik.BACK);
            else
              for (let fk = 0; fk < kk.length; fk++) kk[fk] ? Dk.push(ik["COLOR_ATTACHMENT" + fk]) : Dk.push(ik.NONE);
            return Dk
          }, Fe.ThinEngine.prototype.bindAttachments = function(kk) {
            const ek = this._gl,
              ik = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, ik)
              for (let Dk = 0; Dk < kk.length; Dk++) kk[Dk] !== ek.NONE && ik[Dk] && (0, ue.f)(ik[Dk].format) && (this._integerMRTAttachmentsMask |= 1 << Dk);
            ek.drawBuffers(kk)
          }, Fe.ThinEngine.prototype.clearAttachments = function(kk, ek, ik, Dk) {
            let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const bk = this._currentRenderTarget?.textures;
            let rk = !1;
            if (ik && kk && bk)
              for (let Pk = 0; Pk < ek.length; Pk++) {
                const kk = bk[Pk];
                if (ek[Pk] !== this._gl.NONE && kk && (0, ue.f)(kk.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  rk = !0;
                  break
                }
              }
            if (!rk || !kk || !bk) return this.bindAttachments(ek), void this.clear(kk, ik, Dk, fk, Sk);
            this.bindAttachments(ek), this._applyColorWriteState();
            for (let Pk = 0; Pk < ek.length; Pk++) {
              const ik = bk[Pk];
              if (ek[Pk] !== this._gl.NONE && ik) {
                let ek = kk;
                if ((0, ue.f)(ik.format)) {
                  const Dk = (0, ue.i)(ik.type);
                  ek = Dk ? Ie : ze;
                  const fk = Dk ? 255 : 1;
                  ek.r = Math.round(kk.r * fk), ek.g = Math.round(kk.g * fk), ek.b = Math.round(kk.b * fk), ek.a = Math.round(kk.a * fk)
                }
                this._clearColorAttachment(Pk, ek, ik.format, ik.type)
              }
            }
            if (Dk || fk) {
              const kk = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Dk, fk, Sk)
              } finally {
                this._integerMRTAttachmentsMask = kk
              }
            }
          }, Fe.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ik = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, kk.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(kk), ek || this.generateMipMapsMultiFramebuffer(kk), ik && (kk._MSAAFramebuffer && this._bindUnboundFramebuffer(kk._framebuffer), ik()), this._bindUnboundFramebuffer(null)
          }, Fe.ThinEngine.prototype.createMultipleRenderTarget = function(kk, ek) {
            let ik, Dk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              fk = !1,
              Sk = !0,
              bk = !1,
              rk = !1,
              Pk = 1,
              mk = 1,
              Mk = [],
              Kk = [],
              xk = [],
              nk = [],
              Uk = [],
              Hk = [],
              wk = [],
              lk = [],
              pk = [],
              yk = !1;
            const Yk = this._createHardwareRenderTargetWrapper(!0, !1, kk);
            void 0 !== ek && (fk = void 0 !== ek.generateMipMaps && ek.generateMipMaps, Sk = void 0 === ek.generateDepthBuffer || ek.generateDepthBuffer, bk = void 0 !== ek.generateStencilBuffer && ek.generateStencilBuffer, rk = void 0 !== ek.generateDepthTexture && ek.generateDepthTexture, Pk = ek.nbk ?? 1, mk = ek.samples ?? mk, Mk = ek.types || Mk, Kk = ek.samplingModes || Kk, xk = ek.useSRGBBuffers || xk, nk = ek.formats || nk, Uk = ek.targetTypes || Uk, Hk = ek.faceIndex || Hk, wk = ek.layerIndex || wk, lk = ek.layerCounts || lk, pk = ek.labels || pk, yk = ek.dontCreateTextures ?? !1, this.VH > 1 && (13 === ek.depthTextureFormat || 17 === ek.depthTextureFormat || 16 === ek.depthTextureFormat || 14 === ek.depthTextureFormat || 18 === ek.depthTextureFormat) && (ik = ek.depthTextureFormat)), void 0 === ik && (ik = bk ? 13 : 14);
            const Lk = this._gl,
              Ck = this._currentFramebuffer,
              Ak = Lk.createFramebuffer();
            this._bindUnboundFramebuffer(Ak);
            const jk = kk.width ?? kk,
              sk = kk.height ?? kk,
              dk = [],
              Fk = [],
              uk = this.VH > 1 && (13 === ik || 17 === ik || 18 === ik);
            Yk.label = ek?.label ?? "MultiRenderTargetWrapper", Yk._framebuffer = Ak, Yk._generateDepthBuffer = rk || Sk, Yk._generateStencilBuffer = rk ? uk : bk, Yk._depthStencilBuffer = this._setupFramebufferDepthAttachments(Yk._generateStencilBuffer, Yk._generateDepthBuffer, jk, sk, 1, ik), Yk._attachments = Fk;
            for (let qk = 0; qk < Pk; qk++) {
              let kk = Kk[qk] || 3,
                ek = Mk[qk] || 0,
                ik = xk[qk] || !1;
              const Dk = nk[qk] || 5,
                Sk = Uk[qk] || 3553,
                bk = lk[qk] ?? 1;
              (1 !== ek || this._caps.textureFloatLinearFiltering) && (2 !== ek || this._caps.textureHalfFloatLinearFiltering) || (kk = 1);
              const rk = this._getSamplingParameters(kk, fk);
              1 !== ek || this._caps.textureFloat || (ek = 0, Vk.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), ik = ik && this._caps.supportSRGBBuffers && (this.VH > 1 || this.isWebGPU);
              const Pk = this.VH > 1,
                mk = Lk[Pk ? "COLOR_ATTACHMENT" + qk : "COLOR_ATTACHMENT" + qk + "_WEBGL"];
              if (Fk.push(mk), -1 === Sk || yk) continue;
              const Hk = new Ve.b(this, 6);
              dk[qk] = Hk, Lk.activeTexture(Lk["TEXTURE" + qk]), Lk.bindTexture(Sk, Hk._hardwareTexture.underlyingResource), Lk.texParameteri(Sk, Lk.TEXTURE_MAG_FILTER, rk.mag), Lk.texParameteri(Sk, Lk.TEXTURE_MIN_FILTER, rk.min), Lk.texParameteri(Sk, Lk.TEXTURE_WRAP_S, Lk.CLAMP_TO_EDGE), Lk.texParameteri(Sk, Lk.TEXTURE_WRAP_T, Lk.CLAMP_TO_EDGE);
              const wk = this._getRGBABufferInternalSizedFormat(ek, Dk, ik),
                Ck = this._getInternalFormat(Dk),
                Ak = this._getWebGLTextureType(ek);
              if (!Pk || 35866 !== Sk && 32879 !== Sk)
                if (34067 === Sk) {
                  for (let kk = 0; kk < 6; kk++) Lk.texImage2D(Lk.TEXTURE_CUBE_MAP_POSITIVE_X + kk, 0, wk, jk, sk, 0, Ck, Ak, null);
                  Hk.isCube = !0
                } else Lk.texImage2D(Lk.TEXTURE_2D, 0, wk, jk, sk, 0, Ck, Ak, null);
              else 35866 === Sk ? Hk.is2DArray = !0 : Hk.is3D = !0, Hk.baseDepth = Hk.depth = bk, Lk.texImage3D(Sk, 0, wk, jk, sk, bk, 0, Ck, Ak, null);
              fk && Lk.generateMipmap(Sk), this._bindTextureDirectly(Sk, null), Hk.baseWidth = jk, Hk.baseHeight = sk, Hk.width = jk, Hk.height = sk, Hk.isReady = !0, Hk.samples = 1, Hk.generateMipMaps = fk, Hk.samplingMode = kk, Hk.type = ek, Hk._useSRGBBuffer = ik, Hk.format = Dk, Hk.label = pk[qk] ?? Yk.label + "-Texture" + qk, this._internalTexturesCache.push(Hk)
            }
            if (rk && this._caps.depthTextureExtension && !yk) {
              const kk = new Ve.b(this, 14);
              let ek = 5,
                Dk = Lk.DEPTH_COMPONENT16,
                Sk = Lk.DEPTH_COMPONENT,
                bk = Lk.UNSIGNED_SHORT,
                rk = Lk.DEPTH_ATTACHMENT;
              this.VH < 2 ? Dk = Lk.DEPTH_COMPONENT : 14 === ik ? (ek = 1, bk = Lk.FLOAT, Dk = Lk.DEPTH_COMPONENT32F) : 18 === ik ? (ek = 0, bk = Lk.FLOAT_32_UNSIGNED_INT_24_8_REV, Dk = Lk.DEPTH32F_STENCIL8, Sk = Lk.DEPTH_STENCIL, rk = Lk.DEPTH_STENCIL_ATTACHMENT) : 16 === ik ? (ek = 0, bk = Lk.UNSIGNED_INT, Dk = Lk.DEPTH_COMPONENT24, rk = Lk.DEPTH_ATTACHMENT) : 13 !== ik && 17 !== ik || (ek = 12, bk = Lk.UNSIGNED_INT_24_8, Dk = Lk.DEPTH24_STENCIL8, Sk = Lk.DEPTH_STENCIL, rk = Lk.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(Lk.TEXTURE_2D, kk, !0), Lk.texParameteri(Lk.TEXTURE_2D, Lk.TEXTURE_MAG_FILTER, Lk.NEAREST), Lk.texParameteri(Lk.TEXTURE_2D, Lk.TEXTURE_MIN_FILTER, Lk.NEAREST), Lk.texParameteri(Lk.TEXTURE_2D, Lk.TEXTURE_WRAP_S, Lk.CLAMP_TO_EDGE), Lk.texParameteri(Lk.TEXTURE_2D, Lk.TEXTURE_WRAP_T, Lk.CLAMP_TO_EDGE), Lk.texImage2D(Lk.TEXTURE_2D, 0, Dk, jk, sk, 0, Sk, bk, null), Lk.framebufferTexture2D(Lk.FRAMEBUFFER, rk, Lk.TEXTURE_2D, kk._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(Lk.TEXTURE_2D, null), Yk._depthStencilTexture = kk, Yk._depthStencilTextureWithStencil = uk, kk.baseWidth = jk, kk.baseHeight = sk, kk.width = jk, kk.height = sk, kk.isReady = !0, kk.samples = 1, kk.generateMipMaps = fk, kk.samplingMode = 1, kk.format = ik, kk.type = ek, kk.label = Yk.label + "-DepthStencil", dk[Pk] = kk, this._internalTexturesCache.push(kk)
            }
            if (Yk.setTextures(dk), Dk && Lk.drawBuffers(Fk), this._bindUnboundFramebuffer(Ck), Yk.setLayerAndFaceIndices(wk, Hk), this.resetTextureCache(), yk) {
              if (mk > 1) {
                const kk = Lk.createFramebuffer();
                if (!kk) throw new Error("Unable to create multi sampled framebuffer");
                Yk._samples = mk, Yk._MSAAFramebuffer = kk, Pk > 0 && Dk && (this._bindUnboundFramebuffer(kk), Lk.drawBuffers(Fk), this._bindUnboundFramebuffer(Ck))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(Yk, mk, Dk);
            return Yk
          }, Fe.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(kk, ek) {
            let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.VH < 2 || !kk) return 1;
            if (kk.samples === ek) return ek;
            const Dk = this._gl;
            ek = Math.min(ek, this.getCaps().maxMSAASamples), kk._depthStencilBuffer && (Dk.deleteRenderbuffer(kk._depthStencilBuffer), kk._depthStencilBuffer = null), kk._MSAAFramebuffer && (Dk.deleteFramebuffer(kk._MSAAFramebuffer), kk._MSAAFramebuffer = null);
            const fk = kk._attachments.length;
            for (let bk = 0; bk < fk; bk++) {
              const ek = kk.textures[bk]._hardwareTexture;
              ek?.releaseMSAARenderBuffers()
            }
            if (ek > 1 && "function" === typeof Dk.renderbufferStorageMultisample) {
              const Sk = Dk.createFramebuffer();
              if (!Sk) throw new Error("Unable to create multi sampled framebuffer");
              kk._MSAAFramebuffer = Sk, this._bindUnboundFramebuffer(Sk);
              const bk = [];
              for (let ik = 0; ik < fk; ik++) {
                const fk = kk.textures[ik],
                  Sk = fk._hardwareTexture,
                  rk = Dk[this.VH > 1 ? "COLOR_ATTACHMENT" + ik : "COLOR_ATTACHMENT" + ik + "_WEBGL"],
                  Pk = this._createRenderBuffer(fk.width, fk.height, ek, -1, this._getRGBABufferInternalSizedFormat(fk.type, fk.format, fk._useSRGBBuffer), rk);
                if (!Pk) throw new Error("Unable to create multi sampled framebuffer");
                Sk.addMSAARenderBuffer(Pk), fk.samples = ek, bk.push(rk)
              }
              ik && Dk.drawBuffers(bk)
            } else this._bindUnboundFramebuffer(kk._framebuffer);
            const Sk = kk._depthStencilTexture ? kk._depthStencilTexture.format : void 0;
            return kk._depthStencilBuffer = this._setupFramebufferDepthAttachments(kk._generateStencilBuffer, kk._generateDepthBuffer, kk.width, kk.height, ek, Sk), this._bindUnboundFramebuffer(null), kk._samples = ek, ek
          }, Fe.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(kk) {
            const ek = kk,
              ik = this._gl;
            if (ek.isMulti)
              for (let Dk = 0; Dk < ek._attachments.length; Dk++) {
                const kk = ek.textures[Dk];
                !kk?.generateMipMaps || kk?.isCube || kk?.is3D || (this._bindTextureDirectly(ik.TEXTURE_2D, kk, !0), ik.generateMipmap(ik.TEXTURE_2D), this._bindTextureDirectly(ik.TEXTURE_2D, null))
              }
          }, Fe.ThinEngine.prototype.resolveMultiFramebuffer = function(kk) {
            const ek = kk,
              ik = this._gl;
            if (!ek._MSAAFramebuffer || !ek.isMulti) return;
            let Dk = ek.resolveMSAAColors ? ik.COLOR_BUFFER_BIT : 0;
            Dk |= ek._generateDepthBuffer && ek.resolveMSAADepth ? ik.DEPTH_BUFFER_BIT : 0, Dk |= ek._generateStencilBuffer && ek.resolveMSAAStencil ? ik.STENCIL_BUFFER_BIT : 0;
            const fk = ek._attachments,
              Sk = fk.length;
            ik.bindFramebuffer(ik.READ_FRAMEBUFFER, ek._MSAAFramebuffer), ik.bindFramebuffer(ik.DRAW_FRAMEBUFFER, ek._framebuffer);
            for (let bk = 0; bk < Sk; bk++) {
              const kk = ek.textures[bk];
              for (let ek = 0; ek < Sk; ek++) fk[ek] = ik.NONE;
              fk[bk] = ik[this.VH > 1 ? "COLOR_ATTACHMENT" + bk : "COLOR_ATTACHMENT" + bk + "_WEBGL"], ik.readBuffer(fk[bk]), ik.drawBuffers(fk), ik.blitFramebuffer(0, 0, kk.width, kk.height, 0, 0, kk.width, kk.height, Dk, ik.NEAREST)
            }
            for (let bk = 0; bk < Sk; bk++) fk[bk] = ik[this.VH > 1 ? "COLOR_ATTACHMENT" + bk : "COLOR_ATTACHMENT" + bk + "_WEBGL"];
            ik.drawBuffers(fk), ik.bindFramebuffer(this._gl.FRAMEBUFFER, ek._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = Sk;
        const Kk = [],
          xk = [],
          nk = [],
          Uk = [],
          Hk = [],
          wk = [],
          lk = [],
          pk = [];
        this._initTypes(ik, Kk, xk, nk, Uk, Hk, wk, lk, pk, fk);
        const yk = !fk || void 0 === fk.generateDepthBuffer || fk.generateDepthBuffer,
          Yk = !(!fk || void 0 === fk.generateStencilBuffer) && fk.generateStencilBuffer,
          Lk = fk && fk.samples ? fk.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: xk,
          generateMipMaps: bk,
          generateDepthBuffer: yk,
          generateStencilBuffer: Yk,
          generateDepthTexture: rk,
          depthTextureFormat: Pk,
          types: Kk,
          nbk: ik,
          useSRGBBuffers: nk,
          samples: Lk,
          formats: Uk,
          targetTypes: Hk,
          faceIndex: wk,
          layerIndex: lk,
          layerCounts: pk,
          labels: Sk,
          label: kk
        }, this._count = ik, this._drawOnlyOnFirstAttachmentByDefault = Mk, ik > 0 && (this._createInternalTextures(), this._createTextures(Sk))
      }
      _initTypes(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
        for (let Mk = 0; Mk < kk; Mk++) mk && mk.types && void 0 !== mk.types[Mk] ? ek.push(mk.types[Mk]) : ek.push(mk && mk.defaultType ? mk.defaultType : 0), mk && mk.samplingModes && void 0 !== mk.samplingModes[Mk] ? ik.push(mk.samplingModes[Mk]) : ik.push(uk.f.BILINEAR_SAMPLINGMODE), mk && mk.useSRGBBuffers && void 0 !== mk.useSRGBBuffers[Mk] ? Dk.push(mk.useSRGBBuffers[Mk]) : Dk.push(!1), mk && mk.formats && void 0 !== mk.formats[Mk] ? fk.push(mk.formats[Mk]) : fk.push(5), mk && mk.targetTypes && void 0 !== mk.targetTypes[Mk] ? Sk.push(mk.targetTypes[Mk]) : Sk.push(3553), mk && mk.faceIndex && void 0 !== mk.faceIndex[Mk] ? bk.push(mk.faceIndex[Mk]) : bk.push(0), mk && mk.layerIndex && void 0 !== mk.layerIndex[Mk] ? rk.push(mk.layerIndex[Mk]) : rk.push(0), mk && mk.layerCounts && void 0 !== mk.layerCounts[Mk] ? Pk.push(mk.layerCounts[Mk]) : Pk.push(1)
      }
      _createInternaTextureIndexMapping() {
        const kk = {},
          ek = [];
        if (!this._renderTarget) return ek;
        const ik = this._renderTarget.textures;
        for (let Dk = 0; Dk < ik.length; Dk++) {
          const fk = ik[Dk];
          if (!fk) continue;
          const Sk = kk[fk.uniqueId];
          void 0 !== Sk ? ek[Dk] = Sk : kk[fk.uniqueId] = Dk
        }
        return ek
      }
      _rebuild() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || kk) return;
        const Dk = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), ek && (this._releaseTextures(), this._createTextures(ik));
        const fk = this._renderTarget.textures;
        for (let Sk = 0; Sk < fk.length; Sk++) {
          const kk = this._textures[Sk];
          void 0 !== Dk[Sk] && this._renderTarget.setTexture(fk[Dk[Sk]], Sk), kk._texture = fk[Sk], kk._texture && (kk._noMipmap = !kk._texture.useMipMaps, kk._useSRGBBuffer = kk._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let kk = 0; kk < this._textures.length; kk++) this._textures[kk]._texture = null, this._textures[kk].dispose()
      }
      _createTextures(kk) {
        const ek = this._renderTarget.textures;
        this._textures = [];
        for (let ik = 0; ik < ek.length; ik++) {
          const Dk = new uk.f(null, this.XF());
          kk?.[ik] && (Dk.name = kk[ik]), Dk._texture = ek[ik], Dk._texture && (Dk._noMipmap = !Dk._texture.useMipMaps, Dk._useSRGBBuffer = Dk._texture._useSRGBBuffer), this._textures.push(Dk)
        }
      }
      setInternalTexture(kk, ek) {
        let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === ek && (this._texture = kk), this.renderTarget.setTexture(kk, ek, ik), this.textures[ek] || (this.textures[ek] = new uk.f(null, this.XF()), this.textures[ek].name = this._textureNames?.[ek] ?? this.textures[ek].name), this.textures[ek]._texture = kk, this.textures[ek]._noMipmap = !kk.useMipMaps, this.textures[ek]._useSRGBBuffer = kk._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[ek] = kk.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[ek] = kk.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[ek] = kk._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[ek])) {
          let ik;
          ik = kk.is2DArray ? 35866 : kk.isCube ? 34067 : kk.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[ek] = ik
        }
      }
      setLayerAndFaceIndex(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[kk] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[kk] = ek), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[kk] = ik), this.renderTarget.setLayerAndFaceIndex(kk, ek, ik))
      }
      setLayerAndFaceIndices(kk, ek) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = kk, this._multiRenderTargetOptions.faceIndex = ek, this.renderTarget.setLayerAndFaceIndices(kk, ek))
      }
      get samples() {
        return this._samples
      }
      set samples(kk) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(kk) : this._samples = kk
      }
      resize(kk) {
        this._processSizeParameter(kk), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(kk, ek, ik) {
        this._multiRenderTargetOptions.nbk = kk, this._count = kk;
        const Dk = [],
          fk = [],
          Sk = [],
          bk = [],
          rk = [],
          Pk = [],
          mk = [],
          Mk = [];
        this._textureNames = ik, this._initTypes(kk, Dk, fk, Sk, bk, rk, Pk, mk, Mk, ek), this._multiRenderTargetOptions.types = Dk, this._multiRenderTargetOptions.samplingModes = fk, this._multiRenderTargetOptions.useSRGBBuffers = Sk, this._multiRenderTargetOptions.formats = bk, this._multiRenderTargetOptions.targetTypes = rk, this._multiRenderTargetOptions.faceIndex = Pk, this._multiRenderTargetOptions.layerIndex = mk, this._multiRenderTargetOptions.layerCounts = Mk, this._multiRenderTargetOptions.labels = ik, this._rebuild(!1, !0, ik)
      }
      _unbindFrameBuffer(kk, ek) {
        this._renderTarget && kk.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(ek)
        }))
      }
      dispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), kk ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const kk = this._renderTarget?.textures;
        if (kk) {
          for (let ek = kk.length - 1; ek >= 0; ek--) this._textures[ek]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var ve = ik(39736);
    class Ee {
      constructor(kk) {
        this.name = ve.b.NAME_GEOMETRYBUFFERRENDERER, this.bw = kk
      }
      register() {
        this.bw._gatherRenderTargetsStage.registerStep(ve.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(kk) {
        this.bw._geometryBufferRenderer && kk.push(this.bw._geometryBufferRenderer.getGBuffer())
      }
    }
    let he = !1;
    var ae;
    ! function(kk) {
      kk[kk.Small = 0] = "Small", kk[kk.Medium = 1] = "Medium", kk[kk.Large = 2] = "Large", kk[kk.ExtraLarge = 3] = "ExtraLarge"
    }(ae || (ae = {}));
    const We = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      te = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class Xe {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(kk) {
        if (kk && this._enableMeshBlendTag && !this._scene.JU().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = kk
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(kk) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = kk, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(kk, ek) {
        kk === Xe.POSITION_TEXTURE_TYPE ? (this._positionIndex = ek, this._enablePosition = !0) : kk === Xe.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = ek, this._enableVelocity = !0) : kk === Xe.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = ek, this._enableVelocityLinear = !0) : kk === Xe.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = ek, this._enableReflectivity = !0) : kk === Xe.DEPTH_TEXTURE_TYPE ? (this._depthIndex = ek, this._enableDepth = !0) : kk === Xe.NORMAL_TEXTURE_TYPE ? (this._normalIndex = ek, this._enableNormal = !0) : kk === Xe.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = ek, this._enableScreenspaceDepth = !0) : kk === Xe.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = ek, this._enableIrradiance = !0) : kk === Xe.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = ek, this._enableObjectId = !0) : kk === Xe.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = ek, this._enableMeshBlendTag = !0)
      }
      _setAttachments(kk) {
        this._attachmentsFromPrePass = kk
      }
      _linkInternalTexture(kk) {
        this._multiRenderTarget.setInternalTexture(kk, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(kk) {
        this._multiRenderTarget.renderList = kk
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(kk) {
        switch (kk) {
          case Xe.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case Xe.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case Xe.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case Xe.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case Xe.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case Xe.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case Xe.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case Xe.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case Xe.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case Xe.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(kk) {
        this._enableDepth = kk, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(kk) {
        this._enableNormal = kk, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(kk) {
        this._enablePosition = kk, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(kk) {
        this._enableVelocity = kk, kk || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = kk
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(kk) {
        this._enableVelocityLinear = kk, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(kk) {
        this._enableReflectivity = kk, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(kk) {
        this._enableScreenspaceDepth = kk, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(kk) {
        this._enableIrradiance = kk, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(kk) {
        if (kk && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (kk && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (kk && !this._enableObjectId && !this._linkedWithPrePass) {
          const kk = this._scene.JU(),
            ek = Math.min(kk.getCaps().maxDrawBuffers ?? 1, 8),
            ik = this._assignRenderTargetIndices()[0] + 1;
          if (kk.getCaps().drawBuffersExtension && ik > ek) throw new Error(`GeometryBufferRenderer: ${ik} color attachments were requested, but this engine supports at most ${ek}`)
        }
        this._enableObjectId = kk, kk || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(kk) {
        if (this._enableMeshBlendTag !== kk) {
          if (kk) {
            const kk = this._scene.JU();
            if (! function(kk) {
                return "NATIVE" !== kk.shaderPlatformName && (kk.isWebGPU || 2 === kk.VH)
              }(kk)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !kk.isWebGPU && !kk.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const ek = Math.min(kk.getCaps().maxDrawBuffers ?? 1, 8),
                ik = this._assignRenderTargetIndices()[0] + 1;
              if (kk.getCaps().drawBuffersExtension && ik > ek) throw new Error(`GeometryBufferRenderer: ${ik} color attachments were requested, but this engine supports at most ${ek}`)
            }
          }
          this._enableMeshBlendTag = kk, kk || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get bw() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        var fk;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new Zk.f(0, 0, 0, 0), this._clearDepthColor = new Zk.f(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = kk, this._ratioOrDimensions = ek, this._useUbo = kk.JU().supportsUniformBuffers, this._depthFormat = ik, this._textureTypesAndFormats = Dk || {}, this._initShaderSourceAsync(), fk = Xe, he || (he = !0, Object.defineProperty(hk.f.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(kk) {
            kk && kk.isSupported && (this._geometryBufferRenderer = kk)
          },
          enumerable: !0,
          configurable: !0
        }), hk.f.prototype.enableGeometryBufferRenderer = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            ik = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new fk(this, kk, ek, ik), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, hk.f.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, fk._SceneComponentInitialization = kk => {
          let ek = kk._getComponent(ve.b.NAME_GEOMETRYBUFFERRENDERER);
          ek || (ek = new Ee(kk), kk.qik(ek))
        }), Xe._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.JU().isWebGPU && !Xe.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ik.e(336).then((() => ik(61254))), Promise.all([ik.e(335), ik.e(347)]).then((() => ik(61261)))])) : await Promise.all([ik.e(319).then((() => ik(61269))), ik.e(318).then((() => ik(61278)))]), this._shadersLoaded = !0
      }
      isReady(kk, ek) {
        if (!this._shadersLoaded) return !1;
        const ik = kk.fH();
        if (ik && ik.disableDepthWrite) return !1;
        if (function(kk) {
            return kk._isGaussianSplatting || "GaussianSplattingMesh" === (ek = kk.getClassName()) || "GaussianSplattingStream" === ek;
            var ek
          }(kk.getMesh())) return !1;
        const Dk = [],
          fk = [Wk.e.PositionKind],
          Sk = kk.getMesh();
        Sk.isVerticesDataPresent(Wk.e.NormalKind) && (Dk.push("#define HAS_NORMAL_ATTRIBUTE"), fk.push(Wk.e.NormalKind));
        let bk = !1,
          rk = !1;
        if (ik) {
          let kk = !1;
          if (ik.needAlphaTestingForMesh(Sk) && ik.getAlphaTestTexture() && (Dk.push("#define ALPHATEST"), Dk.push(`#define ALPHATEST_UV${ik.getAlphaTestTexture().coordinatesIndex+1}`), kk = !0), (ik.bumpTexture || ik.normalTexture || ik.geometryNormalTexture) && Nk.e.BumpTextureEnabled) {
            const ek = ik.bumpTexture || ik.normalTexture || ik.geometryNormalTexture;
            Dk.push("#define BUMP"), Dk.push(`#define BUMP_UV${ek.coordinatesIndex+1}`), kk = !0
          }
          if (this._enableReflectivity) {
            let ek = !1;
            if ("PBRMetallicRoughnessMaterial" === ik.getClassName()) ik.metallicRoughnessTexture && (Dk.push("#define ORMTEXTURE"), Dk.push(`#define REFLECTIVITY_UV${ik.metallicRoughnessTexture.coordinatesIndex+1}`), Dk.push("#define METALLICWORKFLOW"), kk = !0, ek = !0), null != ik.metallic && (Dk.push("#define METALLIC"), Dk.push("#define METALLICWORKFLOW"), ek = !0), null != ik.roughness && (Dk.push("#define ROUGHNESS"), Dk.push("#define METALLICWORKFLOW"), ek = !0), ek && (ik.baseTexture && (Dk.push("#define ALBEDOTEXTURE"), Dk.push(`#define ALBEDO_UV${ik.baseTexture.coordinatesIndex+1}`), ik.baseTexture.gammaSpace && Dk.push("#define GAMMAALBEDO"), kk = !0), ik.baseColor && Dk.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === ik.getClassName()) ik.specularGlossinessTexture ? (Dk.push("#define SPECULARGLOSSINESSTEXTURE"), Dk.push(`#define REFLECTIVITY_UV${ik.specularGlossinessTexture.coordinatesIndex+1}`), kk = !0, ik.specularGlossinessTexture.gammaSpace && Dk.push("#define GAMMAREFLECTIVITYTEXTURE")) : ik.specularColor && Dk.push("#define REFLECTIVITYCOLOR"), null != ik.glossiness && Dk.push("#define GLOSSINESS");
            else if ("PBRMaterial" === ik.getClassName()) ik.metallicTexture && (Dk.push("#define ORMTEXTURE"), Dk.push(`#define REFLECTIVITY_UV${ik.metallicTexture.coordinatesIndex+1}`), Dk.push("#define METALLICWORKFLOW"), kk = !0, ek = !0), null != ik.metallic && (Dk.push("#define METALLIC"), Dk.push("#define METALLICWORKFLOW"), ek = !0), null != ik.roughness && (Dk.push("#define ROUGHNESS"), Dk.push("#define METALLICWORKFLOW"), ek = !0), ek ? (ik.albedoTexture && (Dk.push("#define ALBEDOTEXTURE"), Dk.push(`#define ALBEDO_UV${ik.albedoTexture.coordinatesIndex+1}`), ik.albedoTexture.gammaSpace && Dk.push("#define GAMMAALBEDO"), kk = !0), ik.albedoColor && Dk.push("#define ALBEDOCOLOR")) : (ik.reflectivityTexture ? (Dk.push("#define SPECULARGLOSSINESSTEXTURE"), Dk.push(`#define REFLECTIVITY_UV${ik.reflectivityTexture.coordinatesIndex+1}`), ik.reflectivityTexture.gammaSpace && Dk.push("#define GAMMAREFLECTIVITYTEXTURE"), kk = !0) : ik.reflectivityColor && Dk.push("#define REFLECTIVITYCOLOR"), null != ik.microSurface && Dk.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === ik.getClassName()) ik.specularTexture && (Dk.push("#define REFLECTIVITYTEXTURE"), Dk.push(`#define REFLECTIVITY_UV${ik.specularTexture.coordinatesIndex+1}`), ik.specularTexture.gammaSpace && Dk.push("#define GAMMAREFLECTIVITYTEXTURE"), kk = !0), ik.specularColor && Dk.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === ik.getClassName()) {
              const ek = ik;
              Dk.push("#define METALLIC"), Dk.push("#define ROUGHNESS"), ek._useRoughnessFromMetallicTextureGreen && ek.baseMetalnessTexture ? (Dk.push("#define ORMTEXTURE"), Dk.push(`#define REFLECTIVITY_UV${ek.baseMetalnessTexture.coordinatesIndex+1}`), kk = !0) : ek.baseMetalnessTexture ? (Dk.push("#define METALLIC_TEXTURE"), Dk.push(`#define METALLIC_UV${ek.baseMetalnessTexture.coordinatesIndex+1}`), kk = !0) : ek.specularRoughnessTexture && (Dk.push("#define ROUGHNESS_TEXTURE"), Dk.push(`#define ROUGHNESS_UV${ek.specularRoughnessTexture.coordinatesIndex+1}`), kk = !0), ek.baseColorTexture && (Dk.push("#define ALBEDOTEXTURE"), Dk.push(`#define ALBEDO_UV${ek.baseColorTexture.coordinatesIndex+1}`), ek.baseColorTexture.gammaSpace && Dk.push("#define GAMMAALBEDO"), kk = !0), ek.baseColor && Dk.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Dk.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === ik.getClassName())) {
            const ek = ik;
            ek.subsurfaceWeight > 0 && ek.subsurfaceWeightTexture && (Dk.push("#define SUBSURFACE_WEIGHT"), Dk.push(`#define SUBSURFACEWEIGHT_UV${ek.subsurfaceWeightTexture.coordinatesIndex+1}`), kk = !0), ek.transmissionWeight > 0 && ek.transmissionWeightTexture && (Dk.push("#define TRANSMISSION_WEIGHT"), Dk.push(`#define TRANSMISSIONWEIGHT_UV${ek.transmissionWeightTexture.coordinatesIndex+1}`), kk = !0)
          }
          kk && (Dk.push("#define NEED_UV"), Sk.isVerticesDataPresent(Wk.e.UVKind) && (fk.push(Wk.e.UVKind), Dk.push("#define UV1"), bk = !0), Sk.isVerticesDataPresent(Wk.e.UV2Kind) && (fk.push(Wk.e.UV2Kind), Dk.push("#define UV2"), rk = !0))
        }
        if (this._enableDepth && (Dk.push("#define DEPTH"), Dk.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Dk.push("#define NORMAL"), Dk.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Dk.push("#define POSITION"), Dk.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Dk.push("#define VELOCITY"), Dk.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Sk) && Dk.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Dk.push("#define VELOCITY_LINEAR"), Dk.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Sk) && Dk.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Dk.push("#define REFLECTIVITY"), Dk.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Dk.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Dk.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Dk.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Dk.push("#define IRRADIANCE");
          const kk = this._scene;
          if (kk.environmentTexture) {
            const ek = {};
            let fk = !1,
              Sk = 0;
            "OpenPBRMaterial" !== ik.getClassName() && "StandardMaterial" !== ik.getClassName() && "PBRMetallicRoughnessMaterial" !== ik.getClassName() && "PBRSpecularGlossinessMaterial" !== ik.getClassName() && "PBRMaterial" !== ik.getClassName() || (fk = !!ik.realtimeFiltering, Sk = ik.realtimeFilteringQuality || 0), (0, Jk.jb)(kk, kk.environmentTexture, ek, fk, Sk, !0);
            for (const kk in ek) ek[kk] && Dk.push("#define " + kk);
            ek.USEIRRADIANCEMAP || Dk.push("#define SPHERICAL_HARMONICS");
            const bk = kk.postProcessRenderPipelineManager.supportedPipelines.find((kk => "IBLShadowsRenderPipeline" === kk.getClassName()));
            if (bk) {
              const kk = bk;
              kk._getAccumulatedTexture() && (Dk.push("#define IBL_SHADOW_TEXTURE"), kk.coloredShadows && Dk.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Dk.push("#define OBJECT_ID"), Dk.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Dk.push("#define MESH_BLEND_TAG"), Dk.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Dk.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Dk.push("#define ENCODE_NORMAL"), Sk.useBones && Sk.computeBonesUsingShaders && Sk.skeleton ? (fk.push(Wk.e.MatricesIndicesKind), fk.push(Wk.e.MatricesWeightsKind), Sk.numBoneInfluencers > 4 && (fk.push(Wk.e.MatricesIndicesExtraKind), fk.push(Wk.e.MatricesWeightsExtraKind)), Dk.push("#define NUM_BONE_INFLUENCERS " + Sk.numBoneInfluencers), Dk.push("#define BONETEXTURE " + Sk.skeleton.isUsingTextureForMatrices), Dk.push("#define BonesPerMesh " + (Sk.skeleton.bones.length + 1))) : (Dk.push("#define NUM_BONE_INFLUENCERS 0"), Dk.push("#define BONETEXTURE false"), Dk.push("#define BonesPerMesh 0"));
        const Pk = Sk.morphTargetManager ? (0, Jk.$)(Sk.morphTargetManager, Dk, fk, Sk, !0, !0, !1, bk, rk, !1) : 0;
        ek && (Dk.push("#define INSTANCES"), (0, Jk.Eb)(fk, this._enableVelocity || this._enableVelocityLinear), kk.getRenderingMesh().hasThinInstances && Dk.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Dk.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Dk.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, Ke.m)(ik, this._scene, Dk);
        const mk = this._scene.JU(),
          Mk = kk._getDrawWrapper(void 0, !0),
          Kk = Mk.defines,
          xk = Dk.join("\n");
        return Kk !== xk && Mk.setEffect(mk.createEffect("geometry", {
          attributes: fk,
          uniformsNames: te,
          samplers: We,
          defines: xk,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: Pk
          },
          shaderLanguage: this.shaderLanguage
        }, mk), xk), Mk.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(kk) {
        if (this._enableObjectId && 1 !== kk) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== kk) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = kk
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.JU().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.bw.JU()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.bw.JU().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const kk = [],
          ek = [];
        let ik = 0;
        return this._enableDepth && (this._depthIndex = ik, ik++, kk.push("gBuffer_Depth"), ek.push(this._textureTypesAndFormats[Xe.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = ik, ik++, kk.push("gBuffer_Normal"), ek.push(this._textureTypesAndFormats[Xe.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = ik, ik++, kk.push("gBuffer_Position"), ek.push(this._textureTypesAndFormats[Xe.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = ik, ik++, kk.push("gBuffer_Velocity"), ek.push(this._textureTypesAndFormats[Xe.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = ik, ik++, kk.push("gBuffer_VelocityLinear"), ek.push(this._textureTypesAndFormats[Xe.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = ik, ik++, kk.push("gBuffer_Reflectivity"), ek.push(this._textureTypesAndFormats[Xe.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = ik, ik++, kk.push("gBuffer_ScreenspaceDepth"), ek.push(this._textureTypesAndFormats[Xe.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = ik, ik++, kk.push("gBuffer_Irradiance"), ek.push(this._textureTypesAndFormats[Xe.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = ik, ik++, kk.push("gBuffer_ObjectId"), ek.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = ik, ik++, kk.push("gBuffer_MeshBlendTag"), ek.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [ik, kk, ek]
      }
      _createRenderTargets() {
        const kk = this._scene.JU(),
          [ek, ik, Dk] = this._assignRenderTargetIndices(),
          fk = Math.min(kk.getCaps().maxDrawBuffers ?? 1, 8);
        if (kk.getCaps().drawBuffersExtension && ek > fk) throw new Error(`GeometryBufferRenderer: ${ek} color attachments were requested, but this engine supports at most ${fk}`);
        let bk = 0;
        kk._caps.textureFloat && kk._caps.textureFloatLinearFiltering ? bk = 1 : kk._caps.textureHalfFloat && kk._caps.textureHalfFloatLinearFiltering && (bk = 2);
        const rk = this._getRenderTargetDimensions(),
          Pk = [],
          mk = [],
          Mk = [];
        for (const Sk of Dk) Sk ? (Pk.push(Sk.textureType), mk.push(Sk.textureFormat), Mk.push(Sk.samplingMode ?? 2)) : (Pk.push(bk), mk.push(5), Mk.push(2));
        if (this._normalsAreUnsigned = 11 === Pk[Xe.NORMAL_TEXTURE_TYPE] || 13 === Pk[Xe.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new Qe("gBuffer", rk, ek, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: Pk,
            formats: mk,
            samplingModes: Mk,
            depthTextureFormat: this._depthFormat
          }, ik.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = uk.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = uk.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Kk = [!0],
          xk = [!1],
          nk = [!0];
        for (let Sk = 1; Sk < ek; ++Sk) Kk.push(!0), nk.push(!1), xk.push(!0);
        const Uk = kk.buildTextureLayout(Kk),
          Hk = kk.buildTextureLayout(xk),
          wk = kk.buildTextureLayout(nk);
        this._multiRenderTarget.onClearObservable.add((kk => {
          const ek = this.useSpecificClearForDepthTexture ? Hk : Uk;
          kk.clearAttachments(this._clearColor, ek, !0, !0, !0), this.useSpecificClearForDepthTexture && kk.clearAttachments(this._clearDepthColor, wk, !0, !1, !1), kk.bindAttachments(Uk)
        })), this._resizeObserver = kk.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const lk = kk => {
          const ek = kk.getRenderingMesh(),
            ik = kk.getEffectiveMesh(),
            Dk = this._scene,
            fk = Dk.JU(),
            bk = kk.fH();
          if (!bk) return;
          if (ik._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[ik.uniqueId] && (this._previousTransformationMatrices[ik.uniqueId] = {
              Ux: ak.b.Identity(),
              viewProjection: Dk.getTransformMatrix()
            }, ek.skeleton)) {
            const kk = ek.skeleton.getTransformMatrices(ek);
            this._previousBonesTransformationMatrices[ek.uniqueId] = this._copyBonesTransformationMatrices(kk, new Float32Array(kk.length))
          }
          const rk = ek._getInstancesRenderList(kk._id, !!kk.getReplacementMesh());
          if (rk.mustReturn) return;
          const Pk = fk.getCaps().instancedArrays && (null !== rk.visibleInstances[kk._id] || ek.hasThinInstances),
            mk = ik.getWorldMatrix();
          if (this.isReady(kk, Pk)) {
            const Mk = kk._getDrawWrapper();
            if (!Mk) return;
            const Kk = Mk.effect;
            let xk;
            fk.enableEffect(Mk), Pk || ek._bind(kk, Kk, bk.fillMode), this._useUbo ? ((0, Jk.C)(Kk, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Kk.setMatrix("viewProjection", Dk.getTransformMatrix()), Kk.setMatrix("view", Dk.getViewMatrix()), this._scene.bindEyePosition(Kk, "vEyePosition"));
            if (ek._instanceDataStorage.isFrozen || !bk.backFaceCulling && null === bk.sideOrientation) xk = ek._effectiveSideOrientation;
            else {
              const kk = ik._getWorldMatrixDeterminant();
              xk = bk._getEffectiveOrientation(ek), kk < 0 && (xk = xk === Sk.e.ClockWiseSideOrientation ? Sk.e.CounterClockWiseSideOrientation : Sk.e.ClockWiseSideOrientation)
            }
            if (bk._preBind(Mk, xk), bk.needAlphaTestingForMesh(ik)) {
              const kk = bk.getAlphaTestTexture();
              kk && (Kk.setTexture("diffuseSampler", kk), Kk.setMatrix("diffuseMatrix", kk.getTextureMatrix()), Kk.setFloat("alphaCutOff", bk.alphaCutOff ?? .4))
            }
            if ((bk.bumpTexture || bk.normalTexture || bk.geometryNormalTexture) && Dk.JU().getCaps().standardDerivatives && Nk.e.BumpTextureEnabled) {
              const kk = bk.bumpTexture || bk.normalTexture || bk.geometryNormalTexture;
              Kk.setFloat3("vBumpInfos", kk.coordinatesIndex, 1 / kk.level, bk.parallaxScaleBias), Kk.setMatrix("bumpMatrix", kk.getTextureMatrix()), Kk.setTexture("bumpSampler", kk), Kk.setFloat2("vTangentSpaceParams", bk.invertNormalMapX ? -1 : 1, bk.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === bk.getClassName()) null !== bk.metallicRoughnessTexture && (Kk.setTexture("reflectivitySampler", bk.metallicRoughnessTexture), Kk.setMatrix("reflectivityMatrix", bk.metallicRoughnessTexture.getTextureMatrix())), null !== bk.metallic && Kk.setFloat("metallic", bk.metallic), null !== bk.roughness && Kk.setFloat("glossiness", 1 - bk.roughness), null !== bk.baseTexture && (Kk.setTexture("albedoSampler", bk.baseTexture), Kk.setMatrix("albedoMatrix", bk.baseTexture.getTextureMatrix())), null !== bk.baseColor && Kk.setColor3("albedoColor", bk.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === bk.getClassName()) null !== bk.specularGlossinessTexture ? (Kk.setTexture("reflectivitySampler", bk.specularGlossinessTexture), Kk.setMatrix("reflectivityMatrix", bk.specularGlossinessTexture.getTextureMatrix())) : null !== bk.specularColor && Kk.setColor3("reflectivityColor", bk.specularColor), null !== bk.glossiness && Kk.setFloat("glossiness", bk.glossiness);
            else if ("PBRMaterial" === bk.getClassName()) null !== bk.metallicTexture && (Kk.setTexture("reflectivitySampler", bk.metallicTexture), Kk.setMatrix("reflectivityMatrix", bk.metallicTexture.getTextureMatrix())), null !== bk.metallic && Kk.setFloat("metallic", bk.metallic), null !== bk.roughness && Kk.setFloat("glossiness", 1 - bk.roughness), null !== bk.roughness || null !== bk.metallic || null !== bk.metallicTexture ? (null !== bk.albedoTexture && (Kk.setTexture("albedoSampler", bk.albedoTexture), Kk.setMatrix("albedoMatrix", bk.albedoTexture.getTextureMatrix())), null !== bk.albedoColor && Kk.setColor3("albedoColor", bk.albedoColor)) : (null !== bk.reflectivityTexture ? (Kk.setTexture("reflectivitySampler", bk.reflectivityTexture), Kk.setMatrix("reflectivityMatrix", bk.reflectivityTexture.getTextureMatrix())) : null !== bk.reflectivityColor && Kk.setColor3("reflectivityColor", bk.reflectivityColor), null !== bk.microSurface && Kk.setFloat("glossiness", bk.microSurface));
            else if ("StandardMaterial" === bk.getClassName()) null !== bk.specularTexture && (Kk.setTexture("reflectivitySampler", bk.specularTexture), Kk.setMatrix("reflectivityMatrix", bk.specularTexture.getTextureMatrix())), null !== bk.specularColor && Kk.setColor3("reflectivityColor", bk.specularColor);
            else if ("OpenPBRMaterial" === bk.getClassName()) {
              const kk = bk;
              kk._useRoughnessFromMetallicTextureGreen && kk.baseMetalnessTexture ? (Kk.setTexture("reflectivitySampler", kk.baseMetalnessTexture), Kk.setMatrix("reflectivityMatrix", kk.baseMetalnessTexture.getTextureMatrix())) : kk.baseMetalnessTexture ? (Kk.setTexture("metallicSampler", kk.baseMetalnessTexture), Kk.setMatrix("metallicMatrix", kk.baseMetalnessTexture.getTextureMatrix())) : kk.specularRoughnessTexture && (Kk.setTexture("roughnessSampler", kk.specularRoughnessTexture), Kk.setMatrix("roughnessMatrix", kk.specularRoughnessTexture.getTextureMatrix())), Kk.setFloat("metallic", kk.baseMetalness), Kk.setFloat("glossiness", 1 - kk.specularRoughness), null !== kk.baseColorTexture && (Kk.setTexture("albedoSampler", kk.baseColorTexture), Kk.setMatrix("albedoMatrix", kk.baseColorTexture.getTextureMatrix())), null !== kk.baseColor && Kk.setColor3("albedoColor", kk.baseColor)
            }
            if (this._enableIrradiance && Dk.environmentTexture) {
              const kk = Dk.environmentTexture,
                ek = Dk.postProcessRenderPipelineManager.supportedPipelines.find((kk => "IBLShadowsRenderPipeline" === kk.getClassName()));
              if (ek) {
                const kk = ek._getAccumulatedTexture();
                kk && (Kk.setTexture("iblShadowSampler", kk), Kk.setFloat2("shadowTextureSize", kk.getSize().width, kk.getSize().height))
              }
              if (Kk.setMatrix("reflectionMatrix", kk.getReflectionTextureMatrix()), Kk.setFloat2("vReflectionInfos", kk.level * Dk.iblIntensity, 0), Kk.setTexture("reflectionSampler", kk), kk.irradianceTexture && (Kk.setTexture("irradianceSampler", kk.irradianceTexture), kk.irradianceTexture._dominantDirection && Kk.setVector3("vReflectionDominantDirection", kk.irradianceTexture._dominantDirection)), kk.sphericalPolynomial) {
                const ek = kk.sphericalPolynomial;
                if (ek.preScaledHarmonics) {
                  const kk = ek.preScaledHarmonics;
                  Kk.setVector3("vSphericalL00", kk.l00), Kk.setVector3("vSphericalL1_1", kk.l1_1), Kk.setVector3("vSphericalL10", kk.l10), Kk.setVector3("vSphericalL11", kk.l11), Kk.setVector3("vSphericalL2_2", kk.l2_2), Kk.setVector3("vSphericalL2_1", kk.l2_1), Kk.setVector3("vSphericalL20", kk.l20), Kk.setVector3("vSphericalL21", kk.l21), Kk.setVector3("vSphericalL22", kk.l22)
                } else Kk.setFloat3("vSphericalX", ek.x.x, ek.x.y, ek.x.z), Kk.setFloat3("vSphericalY", ek.y.x, ek.y.y, ek.y.z), Kk.setFloat3("vSphericalZ", ek.z.x, ek.z.y, ek.z.z), Kk.setFloat3("vSphericalXX_ZZ", ek.xx.x - ek.zz.x, ek.xx.y - ek.zz.y, ek.xx.z - ek.zz.z), Kk.setFloat3("vSphericalYY_ZZ", ek.yy.x - ek.zz.x, ek.yy.y - ek.zz.y, ek.yy.z - ek.zz.z), Kk.setFloat3("vSphericalZZ", ek.zz.x, ek.zz.y, ek.zz.z), Kk.setFloat3("vSphericalXY", ek.xy.x, ek.xy.y, ek.xy.z), Kk.setFloat3("vSphericalYZ", ek.yz.x, ek.yz.y, ek.yz.z), Kk.setFloat3("vSphericalZX", ek.zx.x, ek.zx.y, ek.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === bk.getClassName()) {
                const kk = bk;
                Kk.setFloat("vSubsurfaceWeight", kk.subsurfaceWeight), kk.subsurfaceWeightTexture && (Kk.setTexture("subsurfaceWeightSampler", kk.subsurfaceWeightTexture), Kk.setMatrix("subsurfaceWeightMatrix", kk.subsurfaceWeightTexture.getTextureMatrix())), Kk.setFloat("vTransmissionWeight", kk.transmissionWeight), kk.transmissionWeightTexture && (Kk.setTexture("transmissionWeightSampler", kk.transmissionWeightTexture), Kk.setMatrix("transmissionWeightMatrix", kk.transmissionWeightTexture.getTextureMatrix())), Kk.setFloat("vTransmissionScatterAnisotropy", kk.transmissionScatterAnisotropy), Kk.setFloat("vSubsurfaceScatterAnisotropy", kk.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, Ke.g)(Kk, bk, this._scene), ek.useBones && ek.computeBonesUsingShaders && ek.skeleton) {
              const kk = ek.skeleton;
              if (kk.isUsingTextureForMatrices && Kk.getUniformIndex("boneTextureInfo") > -1) {
                const ik = kk.getTransformMatrixTexture(ek);
                Kk.setTexture("boneSampler", ik), Kk.setFloat2("boneTextureInfo", kk._textureWidth, kk._textureHeight)
              } else Kk.setMatrices("mBones", ek.skeleton.getTransformMatrices(ek));
              (this._enableVelocity || this._enableVelocityLinear) && Kk.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[ek.uniqueId])
            }
            if ((0, Jk.y)(ek, Kk), ek.morphTargetManager && ek.morphTargetManager.isUsingTextureForTargets && ek.morphTargetManager._bind(Kk), (this._enableVelocity || this._enableVelocityLinear) && (Kk.setMatrix("previousWorld", this._previousTransformationMatrices[ik.uniqueId].Ux), Kk.setMatrix("previousViewProjection", this._previousTransformationMatrices[ik.uniqueId].viewProjection)), this._enableObjectId) {
              let kk = ek.uniqueId;
              if (this.objectIdProvider) kk = (0, Ue.m)(ek, this.objectIdProvider);
              else if (kk > 16777215) throw new Error(`Invalid geometry object ID ${kk} for mesh "${ek.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Kk.setFloat("objectId", kk)
            }
            if (this._enableMeshBlendTag) {
              const kk = this.meshBlendTagProvider ? (0, Ue.i)(ek, this.meshBlendTagProvider) : ek.meshBlendingTag;
              Kk.setInt("meshBlendTag", kk)
            }
            Pk && ek.hasThinInstances && Kk.setMatrix("world", mk), ek._processRendering(ik, kk, Kk, bk.fillMode, rk, Pk, ((kk, ek) => {
              kk || Kk.setMatrix("world", ek)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[ik.uniqueId].Ux = mk.clone(), this._previousTransformationMatrices[ik.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), ek.skeleton && this._copyBonesTransformationMatrices(ek.skeleton.getTransformMatrices(ek), this._previousBonesTransformationMatrices[ik.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (ek, ik, Dk) => {
          if ((Dk || 0 === ik) && ek.TY)
            for (let fk = 0; fk < ek.TY.length; ++fk) {
              const ik = ek.TY[fk],
                Dk = ik.fH(),
                Sk = ik.getRenderingMesh();
              if (!Dk) continue;
              const bk = Sk._getInstancesRenderList(ik._id, !!ik.getReplacementMesh()),
                rk = kk.getCaps().instancedArrays && (null !== bk.visibleInstances[ik._id] || Sk.hasThinInstances);
              if (!this.isReady(ik, rk)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (ek, ik, Dk, fk) => {
          let Sk;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.JU().bindAttachments(this._attachmentsFromPrePass)
          }
          if (fk.length) {
            for (kk.setColorWrite(!1), Sk = 0; Sk < fk.length; Sk++) lk(fk.data[Sk]);
            kk.setColorWrite(!0)
          }
          for (Sk = 0; Sk < ek.length; Sk++) lk(ek.data[Sk]);
          for (kk.setDepthWrite(!1), Sk = 0; Sk < ik.length; Sk++) lk(ik.data[Sk]);
          if (this.renderTransparentMeshes)
            for (Sk = 0; Sk < Dk.length; Sk++) lk(Dk.data[Sk]);
          kk.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const kk = this._scene.JU();
        return {
          width: Math.max(1, Math.floor(kk.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(kk.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(kk, ek) {
        for (let ik = 0; ik < kk.length; ik++) ek[ik] = kk[ik];
        return ek
      }
    }
    Xe.ForceGLSL = !1, Xe.DEPTH_TEXTURE_TYPE = 0, Xe.NORMAL_TEXTURE_TYPE = 1, Xe.POSITION_TEXTURE_TYPE = 2, Xe.VELOCITY_TEXTURE_TYPE = 3, Xe.REFLECTIVITY_TEXTURE_TYPE = 4, Xe.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, Xe.VELOCITY_LINEAR_TEXTURE_TYPE = 6, Xe.IRRADIANCE_TEXTURE_TYPE = 7, Xe.OBJECT_ID_TEXTURE_TYPE = 8, Xe.MESH_BLEND_TAG_TEXTURE_TYPE = 9, Xe._SceneComponentInitialization = kk => {
      throw (0, pe.k)("GeometryBufferRendererSceneComponent")
    };
    var Be = ik(36734);
    const ce = {
      effect: null,
      subMesh: null
    };

    function Te(kk) {
      if ("number" === typeof kk) return 1;
      if (kk instanceof ak.l) return 2;
      if (kk instanceof ak.o || kk instanceof Zk.e) return 3;
      if (kk instanceof ak.p || kk instanceof Zk.f) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class oe {
      populateVectorFromLinkedProperties(kk) {
        const ek = Te(kk);
        for (const ik in this.linkedProperties) {
          const kk = this.linkedProperties[ik],
            Dk = kk.numComponents;
          if (ek < Dk || kk.targetUniformComponentOffset > ek - Dk) return void(1 == Dk ? Vk.b.Error(`Float property ${kk.name} has an offset that is too large.`) : Vk.b.Error(`Vector${Dk} property ${kk.name} won't fit in Vector${ek} or has an offset that is too large.`));
          "number" === typeof kk.value ? oe._tmpArray[kk.targetUniformComponentOffset] = kk.value : kk.value.toArray(oe._tmpArray, kk.targetUniformComponentOffset)
        }
        kk.zek(oe._tmpArray)
      }
      constructor(kk, ek) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = kk, this.numComponents = ek
      }
    }
    oe._tmpArray = [0, 0, 0, 0];
    class Ze {
      constructor(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Sk = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = kk, this.targetUniformName = ik, this.defaultValue = ek, this.value = ek, this.targetUniformComponentNum = Dk, this.targetUniformComponentOffset = fk, this.requiredDefine = Sk
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : Te(this.defaultValue)
      }
    }
    class Oe {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(kk, ek, ik) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = kk, this.samplerPrefix = ek, this.textureDefine = ik
      }
    }
    class ge extends((0, we.d)((0, He.d)(tk.d))) {}
    class Ge extends(function(kk) {
      return class extends kk {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(ge)) {}
    class Ne extends((0, Ok.e)(Ge)) {
      constructor(kk) {
        super(kk), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Re extends((0, le.d)(Gk.c)) {}
    let Je = (() => {
        var kk, ek, Dk, fk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk, qk, Ik, zk, Qk, hk, tk, Xk, Bk, ck, Ok, Gk, ke, ee, ie, De, fe, Se, be, re, Pe, me, Me, He, we, le, pe, ye, Ye, Le, Ce, Ae, de, Ve, Fe, ue, qe, Ie, ze, Qe, ve, Ee, he, ae, We, te, Be, Te, ge, Ge, Je, ki, ei, ii, Di, fi, Si, bi, ri, Pi, mi, Mi, Ki, xi, ni, Ui, Hi, wi, li, yi, Yi, Li, Ci, Ai, ji, si, di, Vi, Fi, ui, qi;
        let Ii, zi, Qi, vi, Ei, ai, Wi, ti, Xi, Bi, ci, Ti, oi, Zi, Oi, gi, Gi, Ni, Ri, Ji, kD, eD, iD, DD, fD, SD, bD, rD, PD, mD, MD, KD, xD, nD, UD, HD, wD, lD, pD, yD, YD, LD, CD, AD, jD, sD, dD, VD, FD, uD, qD, ID, zD, QD, vD, ED, hD, aD, WD, tD, XD, BD, cD, TD, oD, ZD, OD, gD, GD, ND, RD, JD, kf, ef, Df, ff, Sf, bf, rf, Pf, mf, Mf, Kf, xf, nf, Uf, Hf, wf, lf, pf, yf, Yf, Lf, Cf, Af, jf, sf, df, Vf, Ff, uf, qf, If, zf, Qf, vf = Re,
          Ef = [],
          hf = [],
          af = [],
          Wf = [],
          tf = [],
          Xf = [],
          Bf = [],
          Tf = [],
          of = [],
          Zf = [],
          Of = [],
          gf = [],
          Gf = [],
          Nf = [],
          Rf = [],
          Jf = [],
          kS = [],
          eS = [],
          iS = [],
          DS = [],
          fS = [],
          SS = [],
          bS = [],
          rS = [],
          PS = [],
          mS = [],
          MS = [],
          KS = [],
          xS = [],
          nS = [],
          US = [],
          HS = [],
          wS = [],
          lS = [],
          pS = [],
          yS = [],
          YS = [],
          LS = [],
          CS = [],
          AS = [],
          jS = [],
          sS = [],
          dS = [],
          VS = [],
          FS = [],
          uS = [],
          qS = [],
          IS = [],
          zS = [],
          QS = [],
          vS = [],
          ES = [],
          hS = [],
          aS = [],
          WS = [],
          tS = [],
          XS = [],
          BS = [],
          cS = [],
          TS = [],
          oS = [],
          ZS = [],
          OS = [],
          gS = [],
          GS = [],
          NS = [],
          RS = [],
          JS = [],
          kb = [],
          eb = [],
          ib = [],
          Db = [],
          fb = [],
          Sb = [],
          bb = [],
          rb = [],
          Pb = [],
          mb = [],
          Mb = [],
          Kb = [],
          xb = [],
          nb = [],
          Ub = [],
          Hb = [],
          wb = [],
          lb = [],
          pb = [],
          yb = [],
          Yb = [],
          Lb = [],
          Cb = [],
          Ab = [],
          jb = [],
          sb = [],
          db = [],
          Vb = [],
          Fb = [],
          ub = [],
          qb = [],
          Ib = [],
          zb = [],
          Qb = [],
          vb = [],
          Eb = [],
          hb = [],
          ab = [],
          Wb = [],
          tb = [],
          Xb = [],
          Bb = [],
          cb = [],
          Tb = [],
          ob = [],
          Zb = [],
          Ob = [],
          gb = [],
          Gb = [],
          Nb = [],
          Rb = [],
          Jb = [],
          kr = [],
          er = [],
          ir = [],
          Dr = [],
          fr = [],
          Sr = [],
          br = [],
          rr = [],
          Pr = [],
          mr = [],
          Mr = [],
          Kr = [],
          xr = [],
          nr = [],
          Ur = [],
          Hr = [],
          wr = [],
          lr = [],
          pr = [],
          yr = [],
          Yr = [],
          Lr = [],
          Cr = [],
          Ar = [],
          jr = [],
          sr = [],
          dr = [],
          Vr = [],
          Fr = [],
          ur = [],
          qr = [],
          Ir = [],
          zr = [],
          Qr = [],
          vr = [],
          Er = [],
          hr = [],
          ar = [],
          Wr = [],
          tr = [],
          Xr = [],
          Br = [],
          cr = [],
          Tr = [],
          or = [],
          Zr = [],
          Or = [],
          gr = [],
          Gr = [],
          Nr = [],
          Rr = [],
          Jr = [],
          kP = [],
          eP = [],
          iP = [],
          DP = [],
          fP = [],
          SP = [],
          bP = [],
          rP = [],
          PP = [],
          mP = [],
          MP = [],
          KP = [],
          xP = [],
          nP = [],
          UP = [],
          HP = [],
          wP = [],
          lP = [],
          pP = [],
          yP = [],
          YP = [],
          LP = [],
          CP = [],
          AP = [],
          jP = [],
          sP = [],
          dP = [],
          VP = [],
          FP = [],
          uP = [],
          qP = [],
          IP = [],
          zP = [];
        return kk = class extends vf {
          get baseWeight() {
            return (0, sk.b)(this, ek, "f")
          }
          set baseWeight(kk) {
            (0, sk.c)(this, ek, kk, "f")
          }
          get baseWeightTexture() {
            return (0, sk.b)(this, Dk, "f")
          }
          set baseWeightTexture(kk) {
            (0, sk.c)(this, Dk, kk, "f")
          }
          get baseColor() {
            return (0, sk.b)(this, fk, "f")
          }
          set baseColor(kk) {
            (0, sk.c)(this, fk, kk, "f")
          }
          get baseColorTexture() {
            return (0, sk.b)(this, bk, "f")
          }
          set baseColorTexture(kk) {
            (0, sk.c)(this, bk, kk, "f")
          }
          get baseDiffuseRoughness() {
            return (0, sk.b)(this, rk, "f")
          }
          set baseDiffuseRoughness(kk) {
            (0, sk.c)(this, rk, kk, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, sk.b)(this, Pk, "f")
          }
          set baseDiffuseRoughnessTexture(kk) {
            (0, sk.c)(this, Pk, kk, "f")
          }
          get baseMetalness() {
            return (0, sk.b)(this, mk, "f")
          }
          set baseMetalness(kk) {
            (0, sk.c)(this, mk, kk, "f")
          }
          get baseMetalnessTexture() {
            return (0, sk.b)(this, Mk, "f")
          }
          set baseMetalnessTexture(kk) {
            (0, sk.c)(this, Mk, kk, "f")
          }
          get specularWeight() {
            return (0, sk.b)(this, Kk, "f")
          }
          set specularWeight(kk) {
            (0, sk.c)(this, Kk, kk, "f")
          }
          get specularWeightTexture() {
            return (0, sk.b)(this, xk, "f")
          }
          set specularWeightTexture(kk) {
            (0, sk.c)(this, xk, kk, "f")
          }
          get specularColor() {
            return (0, sk.b)(this, nk, "f")
          }
          set specularColor(kk) {
            (0, sk.c)(this, nk, kk, "f")
          }
          get specularColorTexture() {
            return (0, sk.b)(this, Uk, "f")
          }
          set specularColorTexture(kk) {
            (0, sk.c)(this, Uk, kk, "f")
          }
          get specularRoughness() {
            return (0, sk.b)(this, Hk, "f")
          }
          set specularRoughness(kk) {
            (0, sk.c)(this, Hk, kk, "f")
          }
          get specularRoughnessTexture() {
            return (0, sk.b)(this, wk, "f")
          }
          set specularRoughnessTexture(kk) {
            (0, sk.c)(this, wk, kk, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, sk.b)(this, lk, "f")
          }
          set specularRoughnessAnisotropy(kk) {
            (0, sk.c)(this, lk, kk, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, sk.b)(this, pk, "f")
          }
          set specularRoughnessAnisotropyTexture(kk) {
            (0, sk.c)(this, pk, kk, "f")
          }
          get specularIor() {
            return (0, sk.b)(this, yk, "f")
          }
          set specularIor(kk) {
            (0, sk.c)(this, yk, kk, "f")
          }
          get transmissionWeight() {
            return (0, sk.b)(this, Yk, "f")
          }
          set transmissionWeight(kk) {
            (0, sk.c)(this, Yk, kk, "f")
          }
          get transmissionWeightTexture() {
            return (0, sk.b)(this, Lk, "f")
          }
          set transmissionWeightTexture(kk) {
            (0, sk.c)(this, Lk, kk, "f")
          }
          get transmissionColor() {
            return (0, sk.b)(this, Ck, "f")
          }
          set transmissionColor(kk) {
            (0, sk.c)(this, Ck, kk, "f")
          }
          get transmissionColorTexture() {
            return (0, sk.b)(this, Ak, "f")
          }
          set transmissionColorTexture(kk) {
            (0, sk.c)(this, Ak, kk, "f")
          }
          get transmissionDepth() {
            return (0, sk.b)(this, jk, "f")
          }
          set transmissionDepth(kk) {
            (0, sk.c)(this, jk, kk, "f")
          }
          get transmissionDepthTexture() {
            return (0, sk.b)(this, qk, "f")
          }
          set transmissionDepthTexture(kk) {
            (0, sk.c)(this, qk, kk, "f")
          }
          get transmissionScatter() {
            return (0, sk.b)(this, Ik, "f")
          }
          set transmissionScatter(kk) {
            (0, sk.c)(this, Ik, kk, "f")
          }
          get transmissionScatterTexture() {
            return (0, sk.b)(this, zk, "f")
          }
          set transmissionScatterTexture(kk) {
            (0, sk.c)(this, zk, kk, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, sk.b)(this, Qk, "f")
          }
          set transmissionScatterAnisotropy(kk) {
            (0, sk.c)(this, Qk, kk, "f")
          }
          get transmissionDispersionScale() {
            return (0, sk.b)(this, hk, "f")
          }
          set transmissionDispersionScale(kk) {
            (0, sk.c)(this, hk, kk, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, sk.b)(this, tk, "f")
          }
          set transmissionDispersionScaleTexture(kk) {
            (0, sk.c)(this, tk, kk, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, sk.b)(this, Xk, "f")
          }
          set transmissionDispersionAbbeNumber(kk) {
            (0, sk.c)(this, Xk, kk, "f")
          }
          get subsurfaceWeight() {
            return (0, sk.b)(this, Bk, "f")
          }
          set subsurfaceWeight(kk) {
            (0, sk.c)(this, Bk, kk, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, sk.b)(this, ck, "f")
          }
          set subsurfaceWeightTexture(kk) {
            (0, sk.c)(this, ck, kk, "f")
          }
          get subsurfaceColor() {
            return (0, sk.b)(this, Ok, "f")
          }
          set subsurfaceColor(kk) {
            (0, sk.c)(this, Ok, kk, "f")
          }
          get subsurfaceColorTexture() {
            return (0, sk.b)(this, Gk, "f")
          }
          set subsurfaceColorTexture(kk) {
            (0, sk.c)(this, Gk, kk, "f")
          }
          get subsurfaceRadius() {
            return (0, sk.b)(this, ke, "f")
          }
          set subsurfaceRadius(kk) {
            (0, sk.c)(this, ke, kk, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, sk.b)(this, ee, "f")
          }
          set subsurfaceRadiusScale(kk) {
            (0, sk.c)(this, ee, kk, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, sk.b)(this, ie, "f")
          }
          set subsurfaceRadiusScaleTexture(kk) {
            (0, sk.c)(this, ie, kk, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, sk.b)(this, De, "f")
          }
          set subsurfaceScatterAnisotropy(kk) {
            (0, sk.c)(this, De, kk, "f")
          }
          get coatWeight() {
            return (0, sk.b)(this, fe, "f")
          }
          set coatWeight(kk) {
            (0, sk.c)(this, fe, kk, "f")
          }
          get coatWeightTexture() {
            return (0, sk.b)(this, Se, "f")
          }
          set coatWeightTexture(kk) {
            (0, sk.c)(this, Se, kk, "f")
          }
          get coatColor() {
            return (0, sk.b)(this, be, "f")
          }
          set coatColor(kk) {
            (0, sk.c)(this, be, kk, "f")
          }
          get coatColorTexture() {
            return (0, sk.b)(this, re, "f")
          }
          set coatColorTexture(kk) {
            (0, sk.c)(this, re, kk, "f")
          }
          get coatRoughness() {
            return (0, sk.b)(this, Pe, "f")
          }
          set coatRoughness(kk) {
            (0, sk.c)(this, Pe, kk, "f")
          }
          get coatRoughnessTexture() {
            return (0, sk.b)(this, me, "f")
          }
          set coatRoughnessTexture(kk) {
            (0, sk.c)(this, me, kk, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, sk.b)(this, Me, "f")
          }
          set coatRoughnessAnisotropy(kk) {
            (0, sk.c)(this, Me, kk, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, sk.b)(this, He, "f")
          }
          set coatRoughnessAnisotropyTexture(kk) {
            (0, sk.c)(this, He, kk, "f")
          }
          get coatIor() {
            return (0, sk.b)(this, we, "f")
          }
          set coatIor(kk) {
            (0, sk.c)(this, we, kk, "f")
          }
          get coatDarkening() {
            return (0, sk.b)(this, le, "f")
          }
          set coatDarkening(kk) {
            (0, sk.c)(this, le, kk, "f")
          }
          get coatDarkeningTexture() {
            return (0, sk.b)(this, pe, "f")
          }
          set coatDarkeningTexture(kk) {
            (0, sk.c)(this, pe, kk, "f")
          }
          get fuzzWeight() {
            return (0, sk.b)(this, ye, "f")
          }
          set fuzzWeight(kk) {
            (0, sk.c)(this, ye, kk, "f")
          }
          get fuzzWeightTexture() {
            return (0, sk.b)(this, Ye, "f")
          }
          set fuzzWeightTexture(kk) {
            (0, sk.c)(this, Ye, kk, "f")
          }
          get fuzzColor() {
            return (0, sk.b)(this, Le, "f")
          }
          set fuzzColor(kk) {
            (0, sk.c)(this, Le, kk, "f")
          }
          get fuzzColorTexture() {
            return (0, sk.b)(this, Ce, "f")
          }
          set fuzzColorTexture(kk) {
            (0, sk.c)(this, Ce, kk, "f")
          }
          get fuzzRoughness() {
            return (0, sk.b)(this, Ae, "f")
          }
          set fuzzRoughness(kk) {
            (0, sk.c)(this, Ae, kk, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, sk.b)(this, de, "f")
          }
          set fuzzRoughnessTexture(kk) {
            (0, sk.c)(this, de, kk, "f")
          }
          get geometryThinWalled() {
            return (0, sk.b)(this, Ve, "f")
          }
          set geometryThinWalled(kk) {
            (0, sk.c)(this, Ve, kk, "f")
          }
          get geometryNormalTexture() {
            return (0, sk.b)(this, Fe, "f")
          }
          set geometryNormalTexture(kk) {
            (0, sk.c)(this, Fe, kk, "f")
          }
          get geometryTangent() {
            return (0, sk.b)(this, ue, "f")
          }
          set geometryTangent(kk) {
            (0, sk.c)(this, ue, kk, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(kk) {
            this.geometryTangent = new ak.l(Math.cos(kk), Math.sin(kk))
          }
          get geometryTangentTexture() {
            return (0, sk.b)(this, qe, "f")
          }
          set geometryTangentTexture(kk) {
            (0, sk.c)(this, qe, kk, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, sk.b)(this, Ie, "f")
          }
          set geometryCoatNormalTexture(kk) {
            (0, sk.c)(this, Ie, kk, "f")
          }
          get geometryCoatTangent() {
            return (0, sk.b)(this, ze, "f")
          }
          set geometryCoatTangent(kk) {
            (0, sk.c)(this, ze, kk, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(kk) {
            this.geometryCoatTangent = new ak.l(Math.cos(kk), Math.sin(kk))
          }
          get geometryCoatTangentTexture() {
            return (0, sk.b)(this, Qe, "f")
          }
          set geometryCoatTangentTexture(kk) {
            (0, sk.c)(this, Qe, kk, "f")
          }
          get geometryOpacity() {
            return (0, sk.b)(this, ve, "f")
          }
          set geometryOpacity(kk) {
            (0, sk.c)(this, ve, kk, "f")
          }
          get geometryOpacityTexture() {
            return (0, sk.b)(this, Ee, "f")
          }
          set geometryOpacityTexture(kk) {
            (0, sk.c)(this, Ee, kk, "f")
          }
          get geometryThickness() {
            return (0, sk.b)(this, he, "f")
          }
          set geometryThickness(kk) {
            (0, sk.c)(this, he, kk, "f")
          }
          get geometryThicknessTexture() {
            return (0, sk.b)(this, ae, "f")
          }
          set geometryThicknessTexture(kk) {
            (0, sk.c)(this, ae, kk, "f")
          }
          get emissionLuminance() {
            return (0, sk.b)(this, We, "f")
          }
          set emissionLuminance(kk) {
            (0, sk.c)(this, We, kk, "f")
          }
          get emissionColor() {
            return (0, sk.b)(this, te, "f")
          }
          set emissionColor(kk) {
            (0, sk.c)(this, te, kk, "f")
          }
          get emissionColorTexture() {
            return (0, sk.b)(this, Be, "f")
          }
          set emissionColorTexture(kk) {
            (0, sk.c)(this, Be, kk, "f")
          }
          get thinFilmWeight() {
            return (0, sk.b)(this, Te, "f")
          }
          set thinFilmWeight(kk) {
            (0, sk.c)(this, Te, kk, "f")
          }
          get thinFilmWeightTexture() {
            return (0, sk.b)(this, ge, "f")
          }
          set thinFilmWeightTexture(kk) {
            (0, sk.c)(this, ge, kk, "f")
          }
          get thinFilmThickness() {
            return (0, sk.b)(this, Ge, "f")
          }
          set thinFilmThickness(kk) {
            (0, sk.c)(this, Ge, kk, "f")
          }
          get thinFilmThicknessMin() {
            return (0, sk.b)(this, Je, "f")
          }
          set thinFilmThicknessMin(kk) {
            (0, sk.c)(this, Je, kk, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, sk.b)(this, ki, "f")
          }
          set thinFilmThicknessTexture(kk) {
            (0, sk.c)(this, ki, kk, "f")
          }
          get thinFilmIor() {
            return (0, sk.b)(this, ei, "f")
          }
          set thinFilmIor(kk) {
            (0, sk.c)(this, ei, kk, "f")
          }
          get ambientOcclusionTexture() {
            return (0, sk.b)(this, ii, "f")
          }
          set ambientOcclusionTexture(kk) {
            (0, sk.c)(this, ii, kk, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(kk) {
            this._sssQuality !== kk && (this._sssQuality = kk, this.pek(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(kk) {
            this._sssIrradianceTexture !== kk && (this._sssIrradianceTexture = kk, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(kk) {
            this._sssDepthTexture !== kk && (this._sssDepthTexture = kk, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, sk.b)(this, Di, "f")
          }
          set directIntensity(kk) {
            (0, sk.c)(this, Di, kk, "f")
          }
          get environmentIntensity() {
            return (0, sk.b)(this, fi, "f")
          }
          set environmentIntensity(kk) {
            (0, sk.c)(this, fi, kk, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, sk.b)(this, Si, "f")
          }
          set useSpecularWeightFromTextureAlpha(kk) {
            (0, sk.c)(this, Si, kk, "f")
          }
          get forceAlphaTest() {
            return (0, sk.b)(this, bi, "f")
          }
          set forceAlphaTest(kk) {
            (0, sk.c)(this, bi, kk, "f")
          }
          get alphaCutOff() {
            return (0, sk.b)(this, ri, "f")
          }
          set alphaCutOff(kk) {
            (0, sk.c)(this, ri, kk, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, sk.b)(this, Pi, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(kk) {
            (0, sk.c)(this, Pi, kk, "f")
          }
          get useAmbientInGrayScale() {
            return (0, sk.b)(this, mi, "f")
          }
          set useAmbientInGrayScale(kk) {
            (0, sk.c)(this, mi, kk, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(Zk.e.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === Sk.e.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(kk) {
            kk !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = kk ? Sk.e.LIGHTFALLOFF_PHYSICAL : Sk.e.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === Sk.e.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(kk) {
            kk !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = kk ? Sk.e.LIGHTFALLOFF_GLTF : Sk.e.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, sk.b)(this, Mi, "f")
          }
          set useObjectSpaceNormalMap(kk) {
            (0, sk.c)(this, Mi, kk, "f")
          }
          get useParallax() {
            return (0, sk.b)(this, Ki, "f")
          }
          set useParallax(kk) {
            (0, sk.c)(this, Ki, kk, "f")
          }
          get useParallaxOcclusion() {
            return (0, sk.b)(this, xi, "f")
          }
          set useParallaxOcclusion(kk) {
            (0, sk.c)(this, xi, kk, "f")
          }
          get parallaxScaleBias() {
            return (0, sk.b)(this, ni, "f")
          }
          set parallaxScaleBias(kk) {
            (0, sk.c)(this, ni, kk, "f")
          }
          get disableLighting() {
            return (0, sk.b)(this, Ui, "f")
          }
          set disableLighting(kk) {
            (0, sk.c)(this, Ui, kk, "f")
          }
          get forceIrradianceInFragment() {
            return (0, sk.b)(this, Hi, "f")
          }
          set forceIrradianceInFragment(kk) {
            (0, sk.c)(this, Hi, kk, "f")
          }
          get maxSimultaneousLights() {
            return (0, sk.b)(this, wi, "f")
          }
          set maxSimultaneousLights(kk) {
            (0, sk.c)(this, wi, kk, "f")
          }
          get invertNormalMapX() {
            return (0, sk.b)(this, li, "f")
          }
          set invertNormalMapX(kk) {
            (0, sk.c)(this, li, kk, "f")
          }
          get invertNormalMapY() {
            return (0, sk.b)(this, yi, "f")
          }
          set invertNormalMapY(kk) {
            (0, sk.c)(this, yi, kk, "f")
          }
          get twoSidedLighting() {
            return (0, sk.b)(this, Yi, "f")
          }
          set twoSidedLighting(kk) {
            (0, sk.c)(this, Yi, kk, "f")
          }
          get useAlphaFresnel() {
            return (0, sk.b)(this, Li, "f")
          }
          set useAlphaFresnel(kk) {
            (0, sk.c)(this, Li, kk, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, sk.b)(this, Ci, "f")
          }
          set useLinearAlphaFresnel(kk) {
            (0, sk.c)(this, Ci, kk, "f")
          }
          get environmentBRDFTexture() {
            return (0, sk.b)(this, Ai, "f")
          }
          set environmentBRDFTexture(kk) {
            (0, sk.c)(this, Ai, kk, "f")
          }
          get forceNormalForward() {
            return (0, sk.b)(this, ji, "f")
          }
          set forceNormalForward(kk) {
            (0, sk.c)(this, ji, kk, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, sk.b)(this, si, "f")
          }
          set enableSpecularAntiAliasing(kk) {
            (0, sk.c)(this, si, kk, "f")
          }
          get useHorizonOcclusion() {
            return (0, sk.b)(this, di, "f")
          }
          set useHorizonOcclusion(kk) {
            (0, sk.c)(this, di, kk, "f")
          }
          get useRadianceOcclusion() {
            return (0, sk.b)(this, Vi, "f")
          }
          set useRadianceOcclusion(kk) {
            (0, sk.c)(this, Vi, kk, "f")
          }
          get unlit() {
            return (0, sk.b)(this, Fi, "f")
          }
          set unlit(kk) {
            (0, sk.c)(this, Fi, kk, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, sk.b)(this, ui, "f")
          }
          set applyDecalMapAfterDetailMap(kk) {
            (0, sk.c)(this, ui, kk, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(kk) {
            this._backgroundRefractionTexture = kk, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(kk) {
            this._refractionHighQualityBlur !== kk && (this._refractionHighQualityBlur = kk, this.pek(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(kk) {
            this._realTimeFiltering = kk, this.pek(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(kk) {
            this._realTimeFilteringQuality = kk, this.pek(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(kk) {
            this._fuzzSampleNumber = kk, this.pek(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, sk.b)(this, qi, "f")
          }
          set debugMode(kk) {
            (0, sk.c)(this, qi, kk, "f")
          }
          constructor(ik, dk) {
            super(ik, dk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || kk.ForceGLSL), ek.set(this, ((0, sk.e)(this, Ef), (0, sk.e)(this, hf, void 0))), this._baseWeight = ((0, sk.e)(this, af), new Ze("base_weight", 1, "vBaseWeight", 1)), Dk.set(this, (0, sk.e)(this, Wf, void 0)), this._baseWeightTexture = ((0, sk.e)(this, tf), new Oe("base_weight", "baseWeight", "BASE_WEIGHT")), fk.set(this, (0, sk.e)(this, Xf, void 0)), this._baseColor = ((0, sk.e)(this, Bf), new Ze("base_color", Zk.e.White(), "vBaseColor", 4)), bk.set(this, (0, sk.e)(this, Tf, void 0)), this._baseColorTexture = ((0, sk.e)(this, of), new Oe("base_color", "baseColor", "BASE_COLOR")), rk.set(this, (0, sk.e)(this, Zf, void 0)), this._baseDiffuseRoughness = ((0, sk.e)(this, Of), new Ze("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), Pk.set(this, (0, sk.e)(this, gf, void 0)), this._baseDiffuseRoughnessTexture = ((0, sk.e)(this, Gf), new Oe("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), mk.set(this, (0, sk.e)(this, Nf, void 0)), this._baseMetalness = ((0, sk.e)(this, Rf), new Ze("base_metalness", 0, "vReflectanceInfo", 4, 0)), Mk.set(this, (0, sk.e)(this, Jf, void 0)), this._baseMetalnessTexture = ((0, sk.e)(this, kS), new Oe("base_metalness", "baseMetalness", "BASE_METALNESS")), Kk.set(this, (0, sk.e)(this, eS, void 0)), this._specularWeight = ((0, sk.e)(this, iS), new Ze("specular_weight", 1, "vReflectanceInfo", 4, 3)), xk.set(this, (0, sk.e)(this, DS, void 0)), this._specularWeightTexture = ((0, sk.e)(this, fS), new Oe("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), nk.set(this, (0, sk.e)(this, SS, void 0)), this._specularColor = ((0, sk.e)(this, bS), new Ze("specular_color", Zk.e.White(), "vSpecularColor", 4)), Uk.set(this, (0, sk.e)(this, rS, void 0)), this._specularColorTexture = ((0, sk.e)(this, PS), new Oe("specular_color", "specularColor", "SPECULAR_COLOR")), Hk.set(this, (0, sk.e)(this, mS, void 0)), this._specularRoughness = ((0, sk.e)(this, MS), new Ze("specular_roughness", .3, "vReflectanceInfo", 4, 1)), wk.set(this, (0, sk.e)(this, KS, void 0)), this._specularRoughnessTexture = ((0, sk.e)(this, xS), new Oe("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), lk.set(this, (0, sk.e)(this, nS, void 0)), this._specularRoughnessAnisotropy = ((0, sk.e)(this, US), new Ze("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), pk.set(this, (0, sk.e)(this, HS, void 0)), this._specularRoughnessAnisotropyTexture = ((0, sk.e)(this, wS), new Oe("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), yk.set(this, (0, sk.e)(this, lS, void 0)), this._specularIor = ((0, sk.e)(this, pS), new Ze("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), Yk.set(this, (0, sk.e)(this, yS, void 0)), this._transmissionWeight = ((0, sk.e)(this, YS), new Ze("transmission_weight", 0, "vTransmissionWeight", 1)), Lk.set(this, (0, sk.e)(this, LS, void 0)), this._transmissionWeightTexture = ((0, sk.e)(this, CS), new Oe("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), Ck.set(this, (0, sk.e)(this, AS, void 0)), this._transmissionColor = ((0, sk.e)(this, jS), new Ze("transmission_color", Zk.e.White(), "vTransmissionColor", 3, 0)), Ak.set(this, (0, sk.e)(this, sS, void 0)), this._transmissionColorTexture = ((0, sk.e)(this, dS), new Oe("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), jk.set(this, (0, sk.e)(this, VS, void 0)), this._transmissionDepth = ((0, sk.e)(this, FS), new Ze("transmission_depth", 0, "vTransmissionDepth", 1, 0)), qk.set(this, (0, sk.e)(this, uS, void 0)), this._transmissionDepthTexture = ((0, sk.e)(this, qS), new Oe("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Ik.set(this, (0, sk.e)(this, IS, void 0)), this._transmissionScatter = ((0, sk.e)(this, zS), new Ze("transmission_scatter", Zk.e.Black(), "vTransmissionScatter", 3, 0)), zk.set(this, (0, sk.e)(this, QS, void 0)), this._transmissionScatterTexture = ((0, sk.e)(this, vS), new Oe("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Qk.set(this, (0, sk.e)(this, ES, void 0)), this._transmissionScatterAnisotropy = ((0, sk.e)(this, hS), new Ze("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), hk.set(this, (0, sk.e)(this, aS, void 0)), this._transmissionDispersionScale = ((0, sk.e)(this, WS), new Ze("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), tk.set(this, (0, sk.e)(this, tS, void 0)), this._transmissionDispersionScaleTexture = ((0, sk.e)(this, XS), new Oe("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), Xk.set(this, (0, sk.e)(this, BS, void 0)), this._transmissionDispersionAbbeNumber = ((0, sk.e)(this, cS), new Ze("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), Bk.set(this, (0, sk.e)(this, TS, void 0)), this._subsurfaceWeight = ((0, sk.e)(this, oS), new Ze("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), ck.set(this, (0, sk.e)(this, ZS, void 0)), this._subsurfaceWeightTexture = ((0, sk.e)(this, OS), new Oe("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), Ok.set(this, (0, sk.e)(this, gS, void 0)), this._subsurfaceColor = ((0, sk.e)(this, GS), new Ze("subsurface_color", new Zk.e(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), Gk.set(this, (0, sk.e)(this, NS, void 0)), this._subsurfaceColorTexture = ((0, sk.e)(this, RS), new Oe("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), ke.set(this, (0, sk.e)(this, JS, void 0)), this._subsurfaceRadius = ((0, sk.e)(this, kb), new Ze("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), ee.set(this, (0, sk.e)(this, eb, void 0)), this._subsurfaceRadiusScale = ((0, sk.e)(this, ib), new Ze("subsurface_radius_scale", new Zk.e(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), ie.set(this, (0, sk.e)(this, Db, void 0)), this._subsurfaceRadiusScaleTexture = ((0, sk.e)(this, fb), new Oe("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), De.set(this, (0, sk.e)(this, Sb, void 0)), this._subsurfaceScatterAnisotropy = ((0, sk.e)(this, bb), new Ze("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), fe.set(this, (0, sk.e)(this, rb, void 0)), this._coatWeight = ((0, sk.e)(this, Pb), new Ze("coat_weight", 0, "vCoatWeight", 1, 0)), Se.set(this, (0, sk.e)(this, mb, void 0)), this._coatWeightTexture = ((0, sk.e)(this, Mb), new Oe("coat_weight", "coatWeight", "COAT_WEIGHT")), be.set(this, (0, sk.e)(this, Kb, void 0)), this._coatColor = ((0, sk.e)(this, xb), new Ze("coat_color", Zk.e.White(), "vCoatColor", 3, 0)), re.set(this, (0, sk.e)(this, nb, void 0)), this._coatColorTexture = ((0, sk.e)(this, Ub), new Oe("coat_color", "coatColor", "COAT_COLOR")), Pe.set(this, (0, sk.e)(this, Hb, void 0)), this._coatRoughness = ((0, sk.e)(this, wb), new Ze("coat_roughness", 0, "vCoatRoughness", 1, 0)), me.set(this, (0, sk.e)(this, lb, void 0)), this._coatRoughnessTexture = ((0, sk.e)(this, pb), new Oe("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Me.set(this, (0, sk.e)(this, yb, void 0)), this._coatRoughnessAnisotropy = ((0, sk.e)(this, Yb), new Ze("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), He.set(this, (0, sk.e)(this, Lb, void 0)), this._coatRoughnessAnisotropyTexture = ((0, sk.e)(this, Cb), new Oe("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), we.set(this, (0, sk.e)(this, Ab, void 0)), this._coatIor = ((0, sk.e)(this, jb), new Ze("coat_ior", 1.5, "vCoatIor", 1, 0)), le.set(this, (0, sk.e)(this, sb, void 0)), this._coatDarkening = ((0, sk.e)(this, db), new Ze("coat_darkening", 1, "vCoatDarkening", 1, 0)), pe.set(this, (0, sk.e)(this, Vb, void 0)), this._coatDarkeningTexture = ((0, sk.e)(this, Fb), new Oe("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, ye.set(this, (0, sk.e)(this, ub, void 0)), this._fuzzWeight = ((0, sk.e)(this, qb), new Ze("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Ye.set(this, (0, sk.e)(this, Ib, void 0)), this._fuzzWeightTexture = ((0, sk.e)(this, zb), new Oe("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), Le.set(this, (0, sk.e)(this, Qb, void 0)), this._fuzzColor = ((0, sk.e)(this, vb), new Ze("fuzz_color", Zk.e.White(), "vFuzzColor", 3, 0)), Ce.set(this, (0, sk.e)(this, Eb, void 0)), this._fuzzColorTexture = ((0, sk.e)(this, hb), new Oe("fuzz_color", "fuzzColor", "FUZZ_COLOR")), Ae.set(this, (0, sk.e)(this, ab, void 0)), this._fuzzRoughness = ((0, sk.e)(this, Wb), new Ze("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), de.set(this, (0, sk.e)(this, tb, void 0)), this._fuzzRoughnessTexture = ((0, sk.e)(this, Xb), new Oe("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Ve.set(this, (0, sk.e)(this, Bb, void 0)), this._geometryThinWalled = ((0, sk.e)(this, cb), new Ze("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Fe.set(this, (0, sk.e)(this, Tb, void 0)), this._geometryNormalTexture = ((0, sk.e)(this, ob), new Oe("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), ue.set(this, (0, sk.e)(this, Zb, void 0)), this._geometryTangent = ((0, sk.e)(this, Ob), new Ze("geometry_tangent", new ak.l(1, 0), "vSpecularAnisotropy", 3, 0)), qe.set(this, (0, sk.e)(this, gb, void 0)), this._geometryTangentTexture = ((0, sk.e)(this, Gb), new Oe("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), Ie.set(this, (0, sk.e)(this, Nb, void 0)), this._geometryCoatNormalTexture = ((0, sk.e)(this, Rb), new Oe("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), ze.set(this, (0, sk.e)(this, Jb, void 0)), this._geometryCoatTangent = ((0, sk.e)(this, kr), new Ze("geometry_coat_tangent", new ak.l(1, 0), "vGeometryCoatTangent", 2, 0)), Qe.set(this, (0, sk.e)(this, er, void 0)), this._geometryCoatTangentTexture = ((0, sk.e)(this, ir), new Oe("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), ve.set(this, (0, sk.e)(this, Dr, void 0)), this._geometryOpacity = ((0, sk.e)(this, fr), new Ze("geometry_opacity", 1, "vBaseColor", 4, 3)), Ee.set(this, (0, sk.e)(this, Sr, void 0)), this._geometryOpacityTexture = ((0, sk.e)(this, br), new Oe("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), he.set(this, (0, sk.e)(this, rr, void 0)), this._geometryThickness = ((0, sk.e)(this, Pr), new Ze("geometry_thickness", 0, "vGeometryThickness", 1, 0)), ae.set(this, (0, sk.e)(this, mr, void 0)), this._geometryThicknessTexture = ((0, sk.e)(this, Mr), new Oe("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), We.set(this, (0, sk.e)(this, Kr, void 0)), this._emissionLuminance = ((0, sk.e)(this, xr), new Ze("emission_luminance", 1, "vLightingIntensity", 4, 1)), te.set(this, (0, sk.e)(this, nr, void 0)), this._emissionColor = ((0, sk.e)(this, Ur), new Ze("emission_color", Zk.e.Black(), "vEmissionColor", 3)), Be.set(this, (0, sk.e)(this, Hr, void 0)), this._emissionColorTexture = ((0, sk.e)(this, wr), new Oe("emission_color", "emissionColor", "EMISSION_COLOR")), Te.set(this, (0, sk.e)(this, lr, void 0)), this._thinFilmWeight = ((0, sk.e)(this, pr), new Ze("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), ge.set(this, (0, sk.e)(this, yr, void 0)), this._thinFilmWeightTexture = ((0, sk.e)(this, Yr), new Oe("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), Ge.set(this, (0, sk.e)(this, Lr, void 0)), this._thinFilmThickness = ((0, sk.e)(this, Cr), new Ze("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), Je.set(this, (0, sk.e)(this, Ar, void 0)), this._thinFilmThicknessMin = ((0, sk.e)(this, jr), new Ze("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), ki.set(this, (0, sk.e)(this, sr, void 0)), this._thinFilmThicknessTexture = ((0, sk.e)(this, dr), new Oe("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), ei.set(this, (0, sk.e)(this, Vr, void 0)), this._thinFilmIor = ((0, sk.e)(this, Fr), new Ze("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), ii.set(this, (0, sk.e)(this, ur, void 0)), this._ambientOcclusionTexture = ((0, sk.e)(this, qr), new Oe("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = kk.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, Di.set(this, (0, sk.e)(this, Ir, 1)), fi.set(this, ((0, sk.e)(this, zr), (0, sk.e)(this, Qr, 1))), Si.set(this, ((0, sk.e)(this, vr), (0, sk.e)(this, Er, !1))), bi.set(this, ((0, sk.e)(this, hr), (0, sk.e)(this, ar, !1))), ri.set(this, ((0, sk.e)(this, Wr), (0, sk.e)(this, tr, .4))), Pi.set(this, ((0, sk.e)(this, Xr), (0, sk.e)(this, Br, !1))), mi.set(this, ((0, sk.e)(this, cr), (0, sk.e)(this, Tr, !1))), Mi.set(this, ((0, sk.e)(this, or), (0, sk.e)(this, Zr, !1))), Ki.set(this, ((0, sk.e)(this, Or), (0, sk.e)(this, gr, !1))), xi.set(this, ((0, sk.e)(this, Gr), (0, sk.e)(this, Nr, !1))), ni.set(this, ((0, sk.e)(this, Rr), (0, sk.e)(this, Jr, .05))), Ui.set(this, ((0, sk.e)(this, kP), (0, sk.e)(this, eP, !1))), Hi.set(this, ((0, sk.e)(this, iP), (0, sk.e)(this, DP, !1))), wi.set(this, ((0, sk.e)(this, fP), (0, sk.e)(this, SP, 4))), li.set(this, ((0, sk.e)(this, bP), (0, sk.e)(this, rP, !1))), yi.set(this, ((0, sk.e)(this, PP), (0, sk.e)(this, mP, !1))), Yi.set(this, ((0, sk.e)(this, MP), (0, sk.e)(this, KP, !1))), Li.set(this, ((0, sk.e)(this, xP), (0, sk.e)(this, nP, !1))), Ci.set(this, ((0, sk.e)(this, UP), (0, sk.e)(this, HP, !1))), Ai.set(this, ((0, sk.e)(this, wP), (0, sk.e)(this, lP, null))), ji.set(this, ((0, sk.e)(this, pP), (0, sk.e)(this, yP, !1))), si.set(this, ((0, sk.e)(this, YP), (0, sk.e)(this, LP, !1))), di.set(this, ((0, sk.e)(this, CP), (0, sk.e)(this, AP, !0))), Vi.set(this, ((0, sk.e)(this, jP), (0, sk.e)(this, sP, !0))), Fi.set(this, ((0, sk.e)(this, dP), (0, sk.e)(this, VP, !1))), ui.set(this, ((0, sk.e)(this, FP), (0, sk.e)(this, uP, !1))), this._lightingInfos = ((0, sk.e)(this, qP), new ak.p(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = Sk.e.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Fk.h(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, qi.set(this, (0, sk.e)(this, IP, 0)), this.debugLimit = ((0, sk.e)(this, zP), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = Sk.e.MATERIAL_OPAQUE, this.XF() && !this.XF()?.JU().isWebGPU && this.XF().JU().VH < 2 && Vk.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), kk._noiseTextures[this.XF().uniqueId] || (kk._noiseTextures[this.XF().uniqueId] = new uk.f(se.i.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.XF(), !1, !0, 1), this.XF().ZF.addOnce((() => {
              kk._noiseTextures[this.XF().uniqueId]?.dispose(), delete kk._noiseTextures[this.XF().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Nk.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), Nk.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Ek(this.XF()), this._environmentFuzzBRDFTexture = vk(this.XF()), this.prePassConfiguration = new Tk.c, this._propertyList = {};
            for (const kk of Object.getOwnPropertyNames(this)) {
              const ek = this[kk];
              ek instanceof Ze && (this._propertyList[kk] = ek)
            }
            Object.keys(this._propertyList).forEach((kk => {
              const ek = this._propertyList[kk];
              let ik = this._uniformsList[ek.targetUniformName];
              ik ? ik.numComponents !== ek.targetUniformComponentNum ? Vk.b.Error(`Uniform ${ek.targetUniformName} already exists of size ${ik.numComponents}, but trying to set it to ${ek.targetUniformComponentNum}.`) : ik.requiredDefine !== ek.requiredDefine && (ik.requiredDefine = void 0) : (ik = new oe(ek.targetUniformName, ek.targetUniformComponentNum), ik.requiredDefine = ek.requiredDefine, this._uniformsList[ek.targetUniformName] = ik), "" === ik.firstLinkedKey && (ik.firstLinkedKey = ek.name), ik.linkedProperties[ek.name] = ek
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const kk of Object.getOwnPropertyNames(this)) {
              const ek = this[kk];
              ek instanceof Oe && (this._samplersList[kk] = ek)
            }
            for (const kk in this._samplersList) {
              const ek = this._samplersList[kk].textureDefine;
              this._samplerDefines[ek] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[ek + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[ek + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(Nk.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(Nk.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(kk) {
            this._transparencyMode !== kk && (this._transparencyMode = kk, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== Sk.e.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(kk) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(kk)
          }
          clone(ek) {
            let ik = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const fk = je.b.Clone((() => new kk(ek, this.XF())), this, {
              cloneTexturesOnlyOnce: ik
            });
            return fk.id = ek, fk.name = ek, this.stencil.copyTo(fk.stencil), this._clonePlugins(fk, Dk), fk
          }
          serialize() {
            const kk = super.serialize();
            return kk.customType = "BABYLON.OpenPBRMaterial", kk
          }
          static Parse(ek, ik, Dk) {
            const fk = je.b.Parse((() => new kk(ek.name, ik)), ek, ik, Dk);
            return ek.stencil && fk.stencil.parse(ek.stencil, ik, Dk), Sk.e._ParsePlugins(ek, fk, ik, Dk), fk
          }
          forceCompilation(kk, ek, ik) {
            const Dk = {
              clipPlane: !1,
              useInstances: !1,
              ...ik
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const ik = new Ne({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                fk = this._prepareEffect(kk, kk, ik, void 0, void 0, Dk.useInstances, Dk.clipPlane);
              this._onEffectCreatedObservable && (ce.effect = fk, ce.subMesh = null, this._onEffectCreatedObservable.notifyObservers(ce)), fk.isReady() ? ek && ek(this) : fk.onCompileObservable.add((() => {
                ek && ek(this)
              }))
            })()
          }
          isReadyForSubMesh(ek, ik, Dk) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const fk = ik._drawWrapper;
            if (fk.effect && this.isFrozen && fk._wasPreviouslyReady && fk._wasPreviouslyUsingInstances === Dk) return !0;
            ik.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ik.materialDefines = new Ne({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const Sk = ik.materialDefines;
            if (this._isReadyForSubMesh(ik)) return !0;
            const bk = this.XF(),
              rk = bk.JU();
            if (Sk._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, bk.texturesEnabled)) {
              for (const kk in this._samplersList) {
                const ek = this._samplersList[kk];
                if (ek.value && !ek.value.isReadyOrNotBlocking()) return !1
              }
              const ek = this._getRadianceTexture();
              if (ek && Nk.e.ReflectionTextureEnabled) {
                if (!ek.isReadyOrNotBlocking()) return !1;
                if (ek.irradianceTexture) {
                  if (!ek.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!ek.sphericalPolynomial && ek.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && Nk.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && Nk.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && Nk.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (kk._noiseTextures[bk.uniqueId] && !kk._noiseTextures[bk.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Sk, this._eventInfo.subMesh = ik, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Sk._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (Sk.AREALIGHTUSED)
              for (let kk = 0; kk < ek.lightSources.length; kk++)
                if (!ek.lightSources[kk]._isReady()) return !1;
            if (rk.getCaps().standardDerivatives || ek.isVerticesDataPresent(Wk.e.NormalKind) || (ek.createNormals(!0), Vk.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + ek.name)), !(0, Jk.b)(bk, ek, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const Pk = ik.effect,
              mk = Sk._areLightsDisposed,
              Mk = this._prepareEffect(ek, ik.getRenderingMesh(), Sk, this.onCompiled, this.onError, Dk, null);
            let Kk = !1;
            if (Mk)
              if (this._onEffectCreatedObservable && (ce.effect = Mk, ce.subMesh = ik, this._onEffectCreatedObservable.notifyObservers(ce)), this.allowShaderHotSwapping && Pk && !Mk.isReady()) {
                if (Sk.markAsUnprocessed(), Kk = this.isFrozen, mk) return Sk._areLightsDisposed = !0, !1
              } else bk.resetCachedMaterial(), ik.setEffect(Mk, Sk, this._materialContext);
            return !(!ik.effect || !ik.effect.isReady()) && (Sk._renderId = bk.getRenderId(), fk._wasPreviouslyReady = !Kk, fk._wasPreviouslyUsingInstances = !!Dk, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const kk = this._uniformBuffer;
            kk.addUniform("vTangentSpaceParams", 2), kk.addUniform("vLightingIntensity", 4), kk.addUniform("pointSize", 1), kk.addUniform("vDebugMode", 2), kk.addUniform("renderTargetSize", 2), kk.addUniform("cameraInfo", 4), kk.addUniform("vTextureRepetitionHexTilingParams", 4), kk.addUniform("backgroundRefractionMatrix", 16), kk.addUniform("vBackgroundRefractionInfos", 3), (0, Jk.Bb)(kk, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((ek => {
              kk.addUniform(ek.name, ek.numComponents)
            })), Object.values(this._samplersList).forEach((ek => {
              kk.addUniform(ek.samplerInfoName, 2), kk.addUniform(ek.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(kk, ek, ik, Dk) {
            if (0 === this.geometryThickness) kk.updateFloat("vGeometryThickness", 0);
            else {
              Dk.getRenderingMesh().getWorldMatrix().decompose(ak.j.eH[0]);
              const ek = Math.max(Math.abs(ak.j.eH[0].x), Math.abs(ak.j.eH[0].y), Math.abs(ak.j.eH[0].z));
              kk.updateFloat("vGeometryThickness", this.geometryThickness * ek)
            }
          }
          bindForSubMesh(ek, ik, Dk) {
            const fk = this.XF(),
              Sk = Dk.materialDefines;
            if (!Sk) return;
            const bk = Dk.effect;
            if (!bk) return;
            this._activeEffect = bk, ik.getMeshUniformBuffer().bindToEffect(bk, "Mesh"), ik.transferToEffect(ek);
            const rk = fk.JU();
            this._uniformBuffer.bindToEffect(bk, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, fk, ik, ek, this.isFrozen), Ue.e.Bind(rk.currentRenderPassId, this._activeEffect, ik, ek, this);
            const Pk = fk.activeCamera;
            Pk ? this._uniformBuffer.updateFloat4("cameraInfo", Pk.minZ, Pk.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const mk = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", mk[0], mk[1], mk[2], mk[3]), this._eventInfo.subMesh = Dk, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Sk.OBJECTSPACE_NORMALMAP && (ek.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Mk = this._mustRebind(fk, bk, Dk, ik.visibility),
              Kk = rk._features.needToAlwaysBindUniformBuffers;
            (0, Jk.f)(ik, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, xe.b)(this._activeEffect, this._vertexPullingMetadata);
            const xk = this._uniformBuffer;
            if (Mk) {
              this.bindViewProjection(bk);
              const ek = this._getRadianceTexture();
              if (!xk.useUbo || !this.isFrozen || !xk.isSync || Dk._drawWrapper._forceRebindOnNextCall) {
                if (fk.texturesEnabled) {
                  for (const kk in this._samplersList) {
                    const ek = this._samplersList[kk];
                    ek.value && (xk.updateFloat2(ek.samplerInfoName, ek.value.coordinatesIndex, ek.value.level), (0, Jk.G)(ek.value, xk, ek.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (fk._mirroredCameraPosition ? xk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : xk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Jk.m)(fk, Sk, xk, Zk.e.White(), ek, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && xk.updateFloat("pointSize", this.pointSize);
                const kk = this._uniformsArray;
                for (let ek = 0, ik = kk.length; ek < ik; ek++) {
                  const ik = kk[ek];
                  (void 0 === ik.requiredDefine || Sk[ik.requiredDefine]) && (4 === ik.numComponents ? (ik.populateVectorFromLinkedProperties(ak.j.Vector4[0]), xk.updateVector4(ik.name, ak.j.Vector4[0])) : 3 === ik.numComponents ? (ik.populateVectorFromLinkedProperties(ak.j.eH[0]), xk.updateVector3(ik.name, ak.j.eH[0])) : 2 === ik.numComponents ? (ik.populateVectorFromLinkedProperties(ak.j.Vector2[0]), xk.updateFloat2(ik.name, ak.j.Vector2[0].x, ak.j.Vector2[0].y)) : 1 === ik.numComponents && xk.updateFloat(ik.name, ik.linkedProperties[ik.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * fk.environmentIntensity, this._lightingInfos.w = 1, xk.updateVector4("vLightingIntensity", this._lightingInfos), xk.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (fk.texturesEnabled) {
                for (const kk in this._samplersList) {
                  const ek = this._samplersList[kk];
                  ek.value && xk.setTexture(ek.samplerName, ek.value)
                }
                if ((0, Jk.q)(fk, Sk, xk, ek, this.realTimeFiltering), Sk.ENVIRONMENTBRDF && xk.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), Sk.FUZZENVIRONMENTBRDF && xk.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), Sk.REFRACTED_BACKGROUND && (xk.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), xk.N7("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), ak.j.eH[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), xk.updateVector3("vBackgroundRefractionInfos", ak.j.eH[1])), (Sk.ANISOTROPIC || Sk.FUZZ || Sk.REFRACTED_BACKGROUND || Sk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && xk.setTexture("blueNoiseSampler", kk._noiseTextures[this.XF().uniqueId]), Sk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const kk = this.sssIrradianceTexture.getSize().width,
                    ek = this.sssIrradianceTexture.getSize().height;
                  xk.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), xk.setTexture("sceneDepthSampler", this.sssDepthTexture), xk.updateFloat2("renderTargetSize", kk, ek)
                }
              }
              this.XF().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ik) && this.XF().depthPeelingRenderer.bind(bk), this._eventInfo.subMesh = Dk, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Ke.g)(this._activeEffect, this, fk), this.bindEyePosition(bk)
            } else Kk && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, fk, fk.JU(), Dk), !Mk && this.isFrozen && !Kk || !fk.lightsEnabled || this._disableLighting || (0, Jk.r)(fk, ik, this._activeEffect, Sk, this._maxSimultaneousLights), !Mk && this.isFrozen || (this.bindView(bk), (0, Jk.i)(fk, ik, this._activeEffect, !0), Sk.NUM_MORPH_INFLUENCERS && (0, Jk.y)(ik, this._activeEffect), Sk.BAKED_VERTEX_ANIMATION_TEXTURE && ik.bakedVertexAnimationManager?.bind(bk, Sk.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Jk.u)(Sk, this._activeEffect, fk)), this._afterBind(ik, this._activeEffect, Dk), xk.update()
          }
          getAnimatables() {
            const kk = super.getAnimatables();
            for (const ek in this._samplersList) {
              const ik = this._samplersList[ek];
              ik.value && ik.value.animations && ik.value.animations.length > 0 && kk.push(ik.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && kk.push(this._radianceTexture), kk
          }
          getActiveTextures() {
            const kk = super.getActiveTextures();
            for (const ek in this._samplersList) {
              const ik = this._samplersList[ek];
              ik.value && kk.push(ik.value)
            }
            return this._radianceTexture && kk.push(this._radianceTexture), kk
          }
          hasTexture(kk) {
            if (super.hasTexture(kk)) return !0;
            for (const ek in this._samplersList) {
              if (this._samplersList[ek].value === kk) return !0
            }
            return this._radianceTexture === kk
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(kk, ek) {
            if (this._breakShaderLoadedCheck = !0, ek) {
              this._environmentBRDFTexture && this.XF().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.XF().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const kk in this._samplersList) {
                const ek = this._samplersList[kk];
                ek.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(kk, ek)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.XF().environmentTexture
          }
          _prepareEffect(ek, ik, Dk) {
            let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              bk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              rk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(ek, ik, Dk, bk, rk), !Dk.isDirty) return null;
            Dk.markAsProcessed();
            const Pk = this.XF().JU(),
              mk = new Rk.b;
            let Mk = 0;
            Dk.USESPHERICALINVERTEX && mk.addFallback(Mk++, "USESPHERICALINVERTEX"), Dk.FOG && mk.addFallback(Mk, "FOG"), Dk.SPECULARAA && mk.addFallback(Mk, "SPECULARAA"), Dk.POINTSIZE && mk.addFallback(Mk, "POINTSIZE"), Dk.LOGARITHMICDEPTH && mk.addFallback(Mk, "LOGARITHMICDEPTH"), Dk.PARALLAX && mk.addFallback(Mk, "PARALLAX"), Dk.PARALLAX_RHS && mk.addFallback(Mk, "PARALLAX_RHS"), Dk.PARALLAXOCCLUSION && mk.addFallback(Mk++, "PARALLAXOCCLUSION"), Dk.ENVIRONMENTBRDF && mk.addFallback(Mk++, "ENVIRONMENTBRDF"), Dk.TANGENT && mk.addFallback(Mk++, "TANGENT"), Mk = (0, Jk.J)(Dk, mk, this._maxSimultaneousLights, Mk), Dk.SPECULARTERM && mk.addFallback(Mk++, "SPECULARTERM"), Dk.USESPHERICALFROMREFLECTIONMAP && mk.addFallback(Mk++, "USESPHERICALFROMREFLECTIONMAP"), Dk.USEIRRADIANCEMAP && mk.addFallback(Mk++, "USEIRRADIANCEMAP"), Dk.NORMAL && mk.addFallback(Mk++, "NORMAL"), Dk.VERTEXCOLOR && mk.addFallback(Mk++, "VERTEXCOLOR"), Dk.MORPHTARGETS && mk.addFallback(Mk++, "MORPHTARGETS"), Dk.MULTIVIEW && mk.addFallback(0, "MULTIVIEW");
            const Kk = [Wk.e.PositionKind];
            Dk.NORMAL && Kk.push(Wk.e.NormalKind), Dk.TANGENT && Kk.push(Wk.e.TangentKind);
            for (let kk = 1; kk <= 6; ++kk) Dk["UV" + kk] && Kk.push(`uv${1===kk?"":kk}`);
            Dk.VERTEXCOLOR && Kk.push(Wk.e.ColorKind), (0, Jk.P)(Kk, ek, Dk, mk), (0, Jk.T)(Kk, Dk), (0, Jk.X)(Kk, ek, Dk), (0, Jk.L)(Kk, ek, Dk);
            let xk = "openpbr";
            const nk = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const kk in this._uniformsList) nk.push(kk);
            const Uk = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Dk.FUZZENVIRONMENTBRDF && Uk.push("environmentFuzzBrdfSampler"), Dk.REFRACTED_BACKGROUND && Uk.push("backgroundRefractionSampler"), (Dk.ANISOTROPIC || Dk.FUZZ || Dk.REFRACTED_BACKGROUND || Dk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Uk.push("blueNoiseSampler"), Dk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (Uk.push("sceneIrradianceSampler"), Uk.push("sceneDepthSampler"));
            for (const kk in this._samplersList) {
              const ek = this._samplersList[kk];
              Uk.push(ek.samplerName), nk.push(ek.samplerInfoName), nk.push(ek.samplerMatrixName)
            }(0, Jk.Cb)(nk, Uk, !0);
            const Hk = ["Material", "Scene", "Mesh"],
              wk = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Dk.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = mk, this._eventInfo.fallbackRank = Mk, this._eventInfo.defines = Dk, this._eventInfo.uniforms = nk, this._eventInfo.attributes = Kk, this._eventInfo.samplers = Uk, this._eventInfo.uniformBuffersNames = Hk, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ek, this._eventInfo.indexParameters = wk, this._callbackPluginEventGeneric(128, this._eventInfo), Ue.e.AddUniformsAndSamplers(nk, Uk), Tk.c.AddUniforms(nk), Tk.c.AddSamplers(Uk), (0, Ke.d)(nk), this._useVertexPulling) {
              const kk = ik?.geometry;
              kk && (this._vertexPullingMetadata = (0, xe.f)(kk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, ek) => {
                nk.push(`vp_${ek}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            gk.b && (gk.b.PrepareUniforms(nk, Dk), gk.b.PrepareSamplers(Uk, Dk)), (0, Jk.Db)({
              uniformsNames: nk,
              uniformBuffersNames: Hk,
              samplers: Uk,
              defines: Dk,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const lk = {};
            this.customShaderNameResolve && (xk = this.customShaderNameResolve(xk, nk, Hk, Uk, Dk, Kk, lk));
            const pk = Dk.toString(),
              yk = Pk.createEffect(xk, {
                attributes: Kk,
                uniformsNames: nk,
                uniformBuffersNames: Hk,
                samplers: Uk,
                defines: pk,
                fallbacks: mk,
                onCompiled: fk,
                onError: Sk,
                indexParameters: wk,
                processFinalCode: lk.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Dk.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: kk._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, Pk);
            return this._eventInfo.customCode = void 0, yk
          }
          _prepareDefines(ek, ik, Dk) {
            let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              bk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const rk = ik.hasThinInstances,
              Pk = this.XF(),
              mk = Pk.JU();
            (0, Jk.mb)(Pk, ek, Dk, !0, this._maxSimultaneousLights, this._disableLighting), Dk._needNormals = !0, (0, Jk.vb)(Pk, Dk);
            const Mk = this.needAlphaBlendingForMesh(ek) && this.XF().useOrderIndependentTransparency;
            if ((0, Jk.xb)(Pk, Dk, this.canRenderToMRT && !Mk), (0, Jk.wb)(Pk, Dk, Mk), Ue.e.PrepareDefines(mk.currentRenderPassId, ek, Dk), Dk._areTexturesDirty) {
              Dk._needUVs = !1;
              for (let kk = 1; kk <= 6; ++kk) Dk["MAINUV" + kk] = !1;
              if (Pk.texturesEnabled) {
                for (const ik in this._samplersList) {
                  const kk = this._samplersList[ik];
                  kk.value ? ((0, Jk.qb)(kk.value, Dk, kk.textureDefine), Dk[kk.textureDefine + "_GAMMA"] = kk.value.gammaSpace) : Dk[kk.textureDefine] = !1
                }
                const kk = this._getRadianceTexture(),
                  ek = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || mk.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, Jk.jb)(Pk, kk, Dk, this.realTimeFiltering, this.realTimeFilteringQuality, !ek), this._baseMetalnessTexture && (Dk.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Dk.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Dk.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Dk.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Dk.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Dk.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Dk.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Dk.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Dk.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Dk.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Dk.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Dk.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && Nk.e.DiffuseTextureEnabled ? (Dk.PARALLAX = !0, Dk.PARALLAX_RHS = Pk.useRightHandedSystem, Dk.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Dk.PARALLAX = !1, Dk.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Dk.PARALLAX = !1, Dk.PARALLAX_RHS = !1, Dk.PARALLAXOCCLUSION = !1, Dk.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Nk.e.ReflectionTextureEnabled ? (Dk.ENVIRONMENTBRDF = !0, Dk.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Dk.ENVIRONMENTBRDF = !1, Dk.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Dk.FUZZENVIRONMENTBRDF = !0 : Dk.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Dk.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && Nk.e.RefractionTextureEnabled, Dk.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Dk.REFRACTED_LIGHTS = !0;
                  const kk = this._getRadianceTexture();
                  kk ? (Dk.REFRACTED_ENVIRONMENT = Nk.e.RefractionTextureEnabled, Dk.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.XF().useRightHandedSystem ? !kk.invertZ : kk.invertZ, Dk.REFRACTED_ENVIRONMENT_LOCAL_CUBE = kk.isCube && kk.boundingBoxSize) : Dk.REFRACTED_ENVIRONMENT = !1
                } else Dk.REFRACTED_BACKGROUND = !1, Dk.REFRACTED_LIGHTS = !1, Dk.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Dk.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Dk.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === Sk.e.LIGHTFALLOFF_STANDARD ? (Dk.USEPHYSICALLIGHTFALLOFF = !1, Dk.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === Sk.e.LIGHTFALLOFF_GLTF ? (Dk.USEPHYSICALLIGHTFALLOFF = !1, Dk.USEGLTFLIGHTFALLOFF = !0) : (Dk.USEPHYSICALLIGHTFALLOFF = !0, Dk.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Dk.TWOSIDEDLIGHTING = !0 : Dk.TWOSIDEDLIGHTING = !1, Dk.MIRRORED = !!Pk._mirroredCameraPosition, Dk.SPECULARAA = mk.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Dk._areTexturesDirty || Dk._areMiscDirty) && (Dk.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Dk.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Dk.ALPHABLEND = this.needAlphaBlendingForMesh(ek)), Dk._areTexturesDirty && (Dk.TEXTURE_REPETITION_MODE = mk.version > 1 || mk.isWebGPU ? this.textureRepetitionMode : 0), Dk._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Dk), Dk.FORCENORMALFORWARD = this._forceNormalForward, Dk.RADIANCEOCCLUSION = this._useRadianceOcclusion, Dk.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && kk._noiseTextures[Pk.uniqueId] && Nk.e.ReflectionTextureEnabled ? (Dk.ANISOTROPIC = !0, ek.isVerticesDataPresent(Wk.e.TangentKind) || (Dk._needUVs = !0, Dk.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Dk.USE_GLTF_STYLE_ANISOTROPY = !0), Dk.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Dk.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Dk.ANISOTROPIC = !1, Dk.USE_GLTF_STYLE_ANISOTROPY = !1, Dk.ANISOTROPIC_BASE = !1, Dk.ANISOTROPIC_COAT = !1), Dk.THIN_FILM = this.thinFilmWeight > 0, Dk.IRIDESCENCE = this.thinFilmWeight > 0, Dk.DISPERSION = this.transmissionDispersionScale > 0, Dk.SCATTERING = this.hasScattering;
            if (Dk.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Dk.TRANSMISSION_SLAB = this.transmissionWeight > 0, Dk.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Dk.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Dk.PREPASS && (Dk.SUBSURFACE_SLAB || Dk.TRANSMISSION_SLAB_VOLUME)) {
              let kk = !1;
              if (!this.sssIrradianceTexture && Pk.geometryBufferRenderer) {
                const ek = Pk.geometryBufferRenderer.getTextureIndex(Xe.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = Pk.geometryBufferRenderer.getGBuffer().textures[ek], kk = !0
              }
              if (!this.sssDepthTexture && Pk.geometryBufferRenderer) {
                const ek = Pk.geometryBufferRenderer.getTextureIndex(Xe.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = Pk.geometryBufferRenderer.getGBuffer().textures[ek], kk = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Dk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, kk && (Dk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Dk.FUZZ = this.fuzzWeight > 0 && Nk.e.ReflectionTextureEnabled, Dk.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Dk.FUZZ ? (ek.isVerticesDataPresent(Wk.e.TangentKind) || (Dk._needUVs = !0, Dk.MAINUV1 = !0), this._environmentFuzzBRDFTexture = vk(this.XF()), Dk.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Dk.FUZZENVIRONMENTBRDF = !1, Dk.FUZZ_IBL_SAMPLES = 0), Dk._areMiscDirty && ((0, Jk.tb)(ek, Pk, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ek), Dk, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ik, this._isVertexOutputInvariant), Dk.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !ek.isVerticesDataPresent(Wk.e.NormalKind), Dk.DEBUGMODE = this._debugMode), (0, Jk.hb)(Pk, mk, this, Dk, !!fk, bk, rk), this._eventInfo.defines = Dk, this._eventInfo.mesh = ek, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Jk.db)(ek, Dk, !0, !0, !0, this._transparencyMode !== Sk.e.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, ek = new WeakMap, Dk = new WeakMap, fk = new WeakMap, bk = new WeakMap, rk = new WeakMap, Pk = new WeakMap, mk = new WeakMap, Mk = new WeakMap, Kk = new WeakMap, xk = new WeakMap, nk = new WeakMap, Uk = new WeakMap, Hk = new WeakMap, wk = new WeakMap, lk = new WeakMap, pk = new WeakMap, yk = new WeakMap, Yk = new WeakMap, Lk = new WeakMap, Ck = new WeakMap, Ak = new WeakMap, jk = new WeakMap, qk = new WeakMap, Ik = new WeakMap, zk = new WeakMap, Qk = new WeakMap, hk = new WeakMap, tk = new WeakMap, Xk = new WeakMap, Bk = new WeakMap, ck = new WeakMap, Ok = new WeakMap, Gk = new WeakMap, ke = new WeakMap, ee = new WeakMap, ie = new WeakMap, De = new WeakMap, fe = new WeakMap, Se = new WeakMap, be = new WeakMap, re = new WeakMap, Pe = new WeakMap, me = new WeakMap, Me = new WeakMap, He = new WeakMap, we = new WeakMap, le = new WeakMap, pe = new WeakMap, ye = new WeakMap, Ye = new WeakMap, Le = new WeakMap, Ce = new WeakMap, Ae = new WeakMap, de = new WeakMap, Ve = new WeakMap, Fe = new WeakMap, ue = new WeakMap, qe = new WeakMap, Ie = new WeakMap, ze = new WeakMap, Qe = new WeakMap, ve = new WeakMap, Ee = new WeakMap, he = new WeakMap, ae = new WeakMap, We = new WeakMap, te = new WeakMap, Be = new WeakMap, Te = new WeakMap, ge = new WeakMap, Ge = new WeakMap, Je = new WeakMap, ki = new WeakMap, ei = new WeakMap, ii = new WeakMap, Di = new WeakMap, fi = new WeakMap, Si = new WeakMap, bi = new WeakMap, ri = new WeakMap, Pi = new WeakMap, mi = new WeakMap, Mi = new WeakMap, Ki = new WeakMap, xi = new WeakMap, ni = new WeakMap, Ui = new WeakMap, Hi = new WeakMap, wi = new WeakMap, li = new WeakMap, yi = new WeakMap, Yi = new WeakMap, Li = new WeakMap, Ci = new WeakMap, Ai = new WeakMap, ji = new WeakMap, si = new WeakMap, di = new WeakMap, Vi = new WeakMap, Fi = new WeakMap, ui = new WeakMap, qi = new WeakMap, (() => {
          const ek = "function" === typeof Symbol && Symbol.metadata ? Object.create(vf[Symbol.metadata] ?? null) : void 0;
          Ii = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], zi = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Qi = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], vi = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Ei = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], ai = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Wi = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], ti = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Xi = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Bi = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], ci = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Ti = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], oi = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Zi = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Oi = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], gi = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Gi = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Ni = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Ri = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Ji = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], kD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], eD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], iD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], DD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], fD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], SD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], bD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], rD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], PD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], mD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], MD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], KD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], xD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], nD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], UD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], HD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], wD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], lD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], pD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], yD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], YD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], LD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], CD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], AD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], jD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], sD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], dD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], VD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], FD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], uD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], qD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], ID = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], zD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], QD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], vD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], ED = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], hD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], aD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], WD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], tD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], XD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], BD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], cD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], TD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], oD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], ZD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], OD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], gD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], GD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], ND = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], RD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], JD = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], kf = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], ef = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], Df = [(0, dk.c)("_markAllSubMeshesAsTexturesDirty")], ff = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Sf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], bf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], rf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Pf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], mf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Mf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Kf = [(0, dk.I)()], xf = [(0, dk.I)()], nf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Uf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Hf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], wf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], lf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsLightsDirty")], pf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], yf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsLightsDirty")], Yf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Lf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Cf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Af = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], jf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], sf = [(0, dk.e)("_markAllSubMeshesAsTexturesDirty")], df = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Vf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ff = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], uf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], qf = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], If = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], zf = [(0, dk.e)("_markAllSubMeshesAsMiscDirty")], Qf = [(0, dk.I)()], (0, sk.d)(kk, null, Ii, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseWeight" in kk,
              get: kk => kk.baseWeight,
              set: (kk, ek) => {
                kk.baseWeight = ek
              }
            },
            metadata: ek
          }, hf, af), (0, sk.d)(kk, null, zi, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseWeightTexture" in kk,
              get: kk => kk.baseWeightTexture,
              set: (kk, ek) => {
                kk.baseWeightTexture = ek
              }
            },
            metadata: ek
          }, Wf, tf), (0, sk.d)(kk, null, Qi, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseColor" in kk,
              get: kk => kk.baseColor,
              set: (kk, ek) => {
                kk.baseColor = ek
              }
            },
            metadata: ek
          }, Xf, Bf), (0, sk.d)(kk, null, vi, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseColorTexture" in kk,
              get: kk => kk.baseColorTexture,
              set: (kk, ek) => {
                kk.baseColorTexture = ek
              }
            },
            metadata: ek
          }, Tf, of), (0, sk.d)(kk, null, Ei, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseDiffuseRoughness" in kk,
              get: kk => kk.baseDiffuseRoughness,
              set: (kk, ek) => {
                kk.baseDiffuseRoughness = ek
              }
            },
            metadata: ek
          }, Zf, Of), (0, sk.d)(kk, null, ai, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseDiffuseRoughnessTexture" in kk,
              get: kk => kk.baseDiffuseRoughnessTexture,
              set: (kk, ek) => {
                kk.baseDiffuseRoughnessTexture = ek
              }
            },
            metadata: ek
          }, gf, Gf), (0, sk.d)(kk, null, Wi, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseMetalness" in kk,
              get: kk => kk.baseMetalness,
              set: (kk, ek) => {
                kk.baseMetalness = ek
              }
            },
            metadata: ek
          }, Nf, Rf), (0, sk.d)(kk, null, ti, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseMetalnessTexture" in kk,
              get: kk => kk.baseMetalnessTexture,
              set: (kk, ek) => {
                kk.baseMetalnessTexture = ek
              }
            },
            metadata: ek
          }, Jf, kS), (0, sk.d)(kk, null, Xi, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularWeight" in kk,
              get: kk => kk.specularWeight,
              set: (kk, ek) => {
                kk.specularWeight = ek
              }
            },
            metadata: ek
          }, eS, iS), (0, sk.d)(kk, null, Bi, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularWeightTexture" in kk,
              get: kk => kk.specularWeightTexture,
              set: (kk, ek) => {
                kk.specularWeightTexture = ek
              }
            },
            metadata: ek
          }, DS, fS), (0, sk.d)(kk, null, ci, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularColor" in kk,
              get: kk => kk.specularColor,
              set: (kk, ek) => {
                kk.specularColor = ek
              }
            },
            metadata: ek
          }, SS, bS), (0, sk.d)(kk, null, Ti, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularColorTexture" in kk,
              get: kk => kk.specularColorTexture,
              set: (kk, ek) => {
                kk.specularColorTexture = ek
              }
            },
            metadata: ek
          }, rS, PS), (0, sk.d)(kk, null, oi, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularRoughness" in kk,
              get: kk => kk.specularRoughness,
              set: (kk, ek) => {
                kk.specularRoughness = ek
              }
            },
            metadata: ek
          }, mS, MS), (0, sk.d)(kk, null, Zi, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularRoughnessTexture" in kk,
              get: kk => kk.specularRoughnessTexture,
              set: (kk, ek) => {
                kk.specularRoughnessTexture = ek
              }
            },
            metadata: ek
          }, KS, xS), (0, sk.d)(kk, null, Oi, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularRoughnessAnisotropy" in kk,
              get: kk => kk.specularRoughnessAnisotropy,
              set: (kk, ek) => {
                kk.specularRoughnessAnisotropy = ek
              }
            },
            metadata: ek
          }, nS, US), (0, sk.d)(kk, null, gi, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularRoughnessAnisotropyTexture" in kk,
              get: kk => kk.specularRoughnessAnisotropyTexture,
              set: (kk, ek) => {
                kk.specularRoughnessAnisotropyTexture = ek
              }
            },
            metadata: ek
          }, HS, wS), (0, sk.d)(kk, null, Gi, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularIor" in kk,
              get: kk => kk.specularIor,
              set: (kk, ek) => {
                kk.specularIor = ek
              }
            },
            metadata: ek
          }, lS, pS), (0, sk.d)(kk, null, Ni, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionWeight" in kk,
              get: kk => kk.transmissionWeight,
              set: (kk, ek) => {
                kk.transmissionWeight = ek
              }
            },
            metadata: ek
          }, yS, YS), (0, sk.d)(kk, null, Ri, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionWeightTexture" in kk,
              get: kk => kk.transmissionWeightTexture,
              set: (kk, ek) => {
                kk.transmissionWeightTexture = ek
              }
            },
            metadata: ek
          }, LS, CS), (0, sk.d)(kk, null, Ji, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionColor" in kk,
              get: kk => kk.transmissionColor,
              set: (kk, ek) => {
                kk.transmissionColor = ek
              }
            },
            metadata: ek
          }, AS, jS), (0, sk.d)(kk, null, kD, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionColorTexture" in kk,
              get: kk => kk.transmissionColorTexture,
              set: (kk, ek) => {
                kk.transmissionColorTexture = ek
              }
            },
            metadata: ek
          }, sS, dS), (0, sk.d)(kk, null, eD, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionDepth" in kk,
              get: kk => kk.transmissionDepth,
              set: (kk, ek) => {
                kk.transmissionDepth = ek
              }
            },
            metadata: ek
          }, VS, FS), (0, sk.d)(kk, null, iD, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionDepthTexture" in kk,
              get: kk => kk.transmissionDepthTexture,
              set: (kk, ek) => {
                kk.transmissionDepthTexture = ek
              }
            },
            metadata: ek
          }, uS, qS), (0, sk.d)(kk, null, DD, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionScatter" in kk,
              get: kk => kk.transmissionScatter,
              set: (kk, ek) => {
                kk.transmissionScatter = ek
              }
            },
            metadata: ek
          }, IS, zS), (0, sk.d)(kk, null, fD, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionScatterTexture" in kk,
              get: kk => kk.transmissionScatterTexture,
              set: (kk, ek) => {
                kk.transmissionScatterTexture = ek
              }
            },
            metadata: ek
          }, QS, vS), (0, sk.d)(kk, null, SD, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionScatterAnisotropy" in kk,
              get: kk => kk.transmissionScatterAnisotropy,
              set: (kk, ek) => {
                kk.transmissionScatterAnisotropy = ek
              }
            },
            metadata: ek
          }, ES, hS), (0, sk.d)(kk, null, bD, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionDispersionScale" in kk,
              get: kk => kk.transmissionDispersionScale,
              set: (kk, ek) => {
                kk.transmissionDispersionScale = ek
              }
            },
            metadata: ek
          }, aS, WS), (0, sk.d)(kk, null, rD, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionDispersionScaleTexture" in kk,
              get: kk => kk.transmissionDispersionScaleTexture,
              set: (kk, ek) => {
                kk.transmissionDispersionScaleTexture = ek
              }
            },
            metadata: ek
          }, tS, XS), (0, sk.d)(kk, null, PD, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionDispersionAbbeNumber" in kk,
              get: kk => kk.transmissionDispersionAbbeNumber,
              set: (kk, ek) => {
                kk.transmissionDispersionAbbeNumber = ek
              }
            },
            metadata: ek
          }, BS, cS), (0, sk.d)(kk, null, mD, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceWeight" in kk,
              get: kk => kk.subsurfaceWeight,
              set: (kk, ek) => {
                kk.subsurfaceWeight = ek
              }
            },
            metadata: ek
          }, TS, oS), (0, sk.d)(kk, null, MD, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceWeightTexture" in kk,
              get: kk => kk.subsurfaceWeightTexture,
              set: (kk, ek) => {
                kk.subsurfaceWeightTexture = ek
              }
            },
            metadata: ek
          }, ZS, OS), (0, sk.d)(kk, null, KD, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceColor" in kk,
              get: kk => kk.subsurfaceColor,
              set: (kk, ek) => {
                kk.subsurfaceColor = ek
              }
            },
            metadata: ek
          }, gS, GS), (0, sk.d)(kk, null, xD, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceColorTexture" in kk,
              get: kk => kk.subsurfaceColorTexture,
              set: (kk, ek) => {
                kk.subsurfaceColorTexture = ek
              }
            },
            metadata: ek
          }, NS, RS), (0, sk.d)(kk, null, nD, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceRadius" in kk,
              get: kk => kk.subsurfaceRadius,
              set: (kk, ek) => {
                kk.subsurfaceRadius = ek
              }
            },
            metadata: ek
          }, JS, kb), (0, sk.d)(kk, null, UD, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceRadiusScale" in kk,
              get: kk => kk.subsurfaceRadiusScale,
              set: (kk, ek) => {
                kk.subsurfaceRadiusScale = ek
              }
            },
            metadata: ek
          }, eb, ib), (0, sk.d)(kk, null, HD, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceRadiusScaleTexture" in kk,
              get: kk => kk.subsurfaceRadiusScaleTexture,
              set: (kk, ek) => {
                kk.subsurfaceRadiusScaleTexture = ek
              }
            },
            metadata: ek
          }, Db, fb), (0, sk.d)(kk, null, wD, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceScatterAnisotropy" in kk,
              get: kk => kk.subsurfaceScatterAnisotropy,
              set: (kk, ek) => {
                kk.subsurfaceScatterAnisotropy = ek
              }
            },
            metadata: ek
          }, Sb, bb), (0, sk.d)(kk, null, lD, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatWeight" in kk,
              get: kk => kk.coatWeight,
              set: (kk, ek) => {
                kk.coatWeight = ek
              }
            },
            metadata: ek
          }, rb, Pb), (0, sk.d)(kk, null, pD, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatWeightTexture" in kk,
              get: kk => kk.coatWeightTexture,
              set: (kk, ek) => {
                kk.coatWeightTexture = ek
              }
            },
            metadata: ek
          }, mb, Mb), (0, sk.d)(kk, null, yD, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatColor" in kk,
              get: kk => kk.coatColor,
              set: (kk, ek) => {
                kk.coatColor = ek
              }
            },
            metadata: ek
          }, Kb, xb), (0, sk.d)(kk, null, YD, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatColorTexture" in kk,
              get: kk => kk.coatColorTexture,
              set: (kk, ek) => {
                kk.coatColorTexture = ek
              }
            },
            metadata: ek
          }, nb, Ub), (0, sk.d)(kk, null, LD, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatRoughness" in kk,
              get: kk => kk.coatRoughness,
              set: (kk, ek) => {
                kk.coatRoughness = ek
              }
            },
            metadata: ek
          }, Hb, wb), (0, sk.d)(kk, null, CD, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatRoughnessTexture" in kk,
              get: kk => kk.coatRoughnessTexture,
              set: (kk, ek) => {
                kk.coatRoughnessTexture = ek
              }
            },
            metadata: ek
          }, lb, pb), (0, sk.d)(kk, null, AD, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatRoughnessAnisotropy" in kk,
              get: kk => kk.coatRoughnessAnisotropy,
              set: (kk, ek) => {
                kk.coatRoughnessAnisotropy = ek
              }
            },
            metadata: ek
          }, yb, Yb), (0, sk.d)(kk, null, jD, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatRoughnessAnisotropyTexture" in kk,
              get: kk => kk.coatRoughnessAnisotropyTexture,
              set: (kk, ek) => {
                kk.coatRoughnessAnisotropyTexture = ek
              }
            },
            metadata: ek
          }, Lb, Cb), (0, sk.d)(kk, null, sD, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatIor" in kk,
              get: kk => kk.coatIor,
              set: (kk, ek) => {
                kk.coatIor = ek
              }
            },
            metadata: ek
          }, Ab, jb), (0, sk.d)(kk, null, dD, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatDarkening" in kk,
              get: kk => kk.coatDarkening,
              set: (kk, ek) => {
                kk.coatDarkening = ek
              }
            },
            metadata: ek
          }, sb, db), (0, sk.d)(kk, null, VD, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatDarkeningTexture" in kk,
              get: kk => kk.coatDarkeningTexture,
              set: (kk, ek) => {
                kk.coatDarkeningTexture = ek
              }
            },
            metadata: ek
          }, Vb, Fb), (0, sk.d)(kk, null, FD, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "fuzzWeight" in kk,
              get: kk => kk.fuzzWeight,
              set: (kk, ek) => {
                kk.fuzzWeight = ek
              }
            },
            metadata: ek
          }, ub, qb), (0, sk.d)(kk, null, uD, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "fuzzWeightTexture" in kk,
              get: kk => kk.fuzzWeightTexture,
              set: (kk, ek) => {
                kk.fuzzWeightTexture = ek
              }
            },
            metadata: ek
          }, Ib, zb), (0, sk.d)(kk, null, qD, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "fuzzColor" in kk,
              get: kk => kk.fuzzColor,
              set: (kk, ek) => {
                kk.fuzzColor = ek
              }
            },
            metadata: ek
          }, Qb, vb), (0, sk.d)(kk, null, ID, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "fuzzColorTexture" in kk,
              get: kk => kk.fuzzColorTexture,
              set: (kk, ek) => {
                kk.fuzzColorTexture = ek
              }
            },
            metadata: ek
          }, Eb, hb), (0, sk.d)(kk, null, zD, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: kk => "fuzzRoughness" in kk,
              get: kk => kk.fuzzRoughness,
              set: (kk, ek) => {
                kk.fuzzRoughness = ek
              }
            },
            metadata: ek
          }, ab, Wb), (0, sk.d)(kk, null, QD, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "fuzzRoughnessTexture" in kk,
              get: kk => kk.fuzzRoughnessTexture,
              set: (kk, ek) => {
                kk.fuzzRoughnessTexture = ek
              }
            },
            metadata: ek
          }, tb, Xb), (0, sk.d)(kk, null, vD, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryThinWalled" in kk,
              get: kk => kk.geometryThinWalled,
              set: (kk, ek) => {
                kk.geometryThinWalled = ek
              }
            },
            metadata: ek
          }, Bb, cb), (0, sk.d)(kk, null, ED, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryNormalTexture" in kk,
              get: kk => kk.geometryNormalTexture,
              set: (kk, ek) => {
                kk.geometryNormalTexture = ek
              }
            },
            metadata: ek
          }, Tb, ob), (0, sk.d)(kk, null, hD, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryTangent" in kk,
              get: kk => kk.geometryTangent,
              set: (kk, ek) => {
                kk.geometryTangent = ek
              }
            },
            metadata: ek
          }, Zb, Ob), (0, sk.d)(kk, null, aD, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryTangentTexture" in kk,
              get: kk => kk.geometryTangentTexture,
              set: (kk, ek) => {
                kk.geometryTangentTexture = ek
              }
            },
            metadata: ek
          }, gb, Gb), (0, sk.d)(kk, null, WD, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryCoatNormalTexture" in kk,
              get: kk => kk.geometryCoatNormalTexture,
              set: (kk, ek) => {
                kk.geometryCoatNormalTexture = ek
              }
            },
            metadata: ek
          }, Nb, Rb), (0, sk.d)(kk, null, tD, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryCoatTangent" in kk,
              get: kk => kk.geometryCoatTangent,
              set: (kk, ek) => {
                kk.geometryCoatTangent = ek
              }
            },
            metadata: ek
          }, Jb, kr), (0, sk.d)(kk, null, XD, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryCoatTangentTexture" in kk,
              get: kk => kk.geometryCoatTangentTexture,
              set: (kk, ek) => {
                kk.geometryCoatTangentTexture = ek
              }
            },
            metadata: ek
          }, er, ir), (0, sk.d)(kk, null, BD, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryOpacity" in kk,
              get: kk => kk.geometryOpacity,
              set: (kk, ek) => {
                kk.geometryOpacity = ek
              }
            },
            metadata: ek
          }, Dr, fr), (0, sk.d)(kk, null, cD, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryOpacityTexture" in kk,
              get: kk => kk.geometryOpacityTexture,
              set: (kk, ek) => {
                kk.geometryOpacityTexture = ek
              }
            },
            metadata: ek
          }, Sr, br), (0, sk.d)(kk, null, TD, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryThickness" in kk,
              get: kk => kk.geometryThickness,
              set: (kk, ek) => {
                kk.geometryThickness = ek
              }
            },
            metadata: ek
          }, rr, Pr), (0, sk.d)(kk, null, oD, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryThicknessTexture" in kk,
              get: kk => kk.geometryThicknessTexture,
              set: (kk, ek) => {
                kk.geometryThicknessTexture = ek
              }
            },
            metadata: ek
          }, mr, Mr), (0, sk.d)(kk, null, ZD, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: kk => "emissionLuminance" in kk,
              get: kk => kk.emissionLuminance,
              set: (kk, ek) => {
                kk.emissionLuminance = ek
              }
            },
            metadata: ek
          }, Kr, xr), (0, sk.d)(kk, null, OD, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "emissionColor" in kk,
              get: kk => kk.emissionColor,
              set: (kk, ek) => {
                kk.emissionColor = ek
              }
            },
            metadata: ek
          }, nr, Ur), (0, sk.d)(kk, null, gD, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "emissionColorTexture" in kk,
              get: kk => kk.emissionColorTexture,
              set: (kk, ek) => {
                kk.emissionColorTexture = ek
              }
            },
            metadata: ek
          }, Hr, wr), (0, sk.d)(kk, null, GD, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "thinFilmWeight" in kk,
              get: kk => kk.thinFilmWeight,
              set: (kk, ek) => {
                kk.thinFilmWeight = ek
              }
            },
            metadata: ek
          }, lr, pr), (0, sk.d)(kk, null, ND, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "thinFilmWeightTexture" in kk,
              get: kk => kk.thinFilmWeightTexture,
              set: (kk, ek) => {
                kk.thinFilmWeightTexture = ek
              }
            },
            metadata: ek
          }, yr, Yr), (0, sk.d)(kk, null, RD, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: kk => "thinFilmThickness" in kk,
              get: kk => kk.thinFilmThickness,
              set: (kk, ek) => {
                kk.thinFilmThickness = ek
              }
            },
            metadata: ek
          }, Lr, Cr), (0, sk.d)(kk, null, JD, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: kk => "thinFilmThicknessMin" in kk,
              get: kk => kk.thinFilmThicknessMin,
              set: (kk, ek) => {
                kk.thinFilmThicknessMin = ek
              }
            },
            metadata: ek
          }, Ar, jr), (0, sk.d)(kk, null, kf, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "thinFilmThicknessTexture" in kk,
              get: kk => kk.thinFilmThicknessTexture,
              set: (kk, ek) => {
                kk.thinFilmThicknessTexture = ek
              }
            },
            metadata: ek
          }, sr, dr), (0, sk.d)(kk, null, ef, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: kk => "thinFilmIor" in kk,
              get: kk => kk.thinFilmIor,
              set: (kk, ek) => {
                kk.thinFilmIor = ek
              }
            },
            metadata: ek
          }, Vr, Fr), (0, sk.d)(kk, null, Df, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "ambientOcclusionTexture" in kk,
              get: kk => kk.ambientOcclusionTexture,
              set: (kk, ek) => {
                kk.ambientOcclusionTexture = ek
              }
            },
            metadata: ek
          }, ur, qr), (0, sk.d)(kk, null, ff, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: kk => "directIntensity" in kk,
              get: kk => kk.directIntensity,
              set: (kk, ek) => {
                kk.directIntensity = ek
              }
            },
            metadata: ek
          }, Ir, zr), (0, sk.d)(kk, null, Sf, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: kk => "environmentIntensity" in kk,
              get: kk => kk.environmentIntensity,
              set: (kk, ek) => {
                kk.environmentIntensity = ek
              }
            },
            metadata: ek
          }, Qr, vr), (0, sk.d)(kk, null, bf, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "useSpecularWeightFromTextureAlpha" in kk,
              get: kk => kk.useSpecularWeightFromTextureAlpha,
              set: (kk, ek) => {
                kk.useSpecularWeightFromTextureAlpha = ek
              }
            },
            metadata: ek
          }, Er, hr), (0, sk.d)(kk, null, rf, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: kk => "forceAlphaTest" in kk,
              get: kk => kk.forceAlphaTest,
              set: (kk, ek) => {
                kk.forceAlphaTest = ek
              }
            },
            metadata: ek
          }, ar, Wr), (0, sk.d)(kk, null, Pf, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: kk => "alphaCutOff" in kk,
              get: kk => kk.alphaCutOff,
              set: (kk, ek) => {
                kk.alphaCutOff = ek
              }
            },
            metadata: ek
          }, tr, Xr), (0, sk.d)(kk, null, mf, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: kk => "useAmbientOcclusionFromMetallicTextureRed" in kk,
              get: kk => kk.useAmbientOcclusionFromMetallicTextureRed,
              set: (kk, ek) => {
                kk.useAmbientOcclusionFromMetallicTextureRed = ek
              }
            },
            metadata: ek
          }, Br, cr), (0, sk.d)(kk, null, Mf, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "useAmbientInGrayScale" in kk,
              get: kk => kk.useAmbientInGrayScale,
              set: (kk, ek) => {
                kk.useAmbientInGrayScale = ek
              }
            },
            metadata: ek
          }, Tr, or), (0, sk.d)(kk, null, Kf, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: kk => "usePhysicalLightFalloff" in kk,
              get: kk => kk.usePhysicalLightFalloff
            },
            metadata: ek
          }, null, Ef), (0, sk.d)(kk, null, xf, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: kk => "useGLTFLightFalloff" in kk,
              get: kk => kk.useGLTFLightFalloff
            },
            metadata: ek
          }, null, Ef), (0, sk.d)(kk, null, nf, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: kk => "useObjectSpaceNormalMap" in kk,
              get: kk => kk.useObjectSpaceNormalMap,
              set: (kk, ek) => {
                kk.useObjectSpaceNormalMap = ek
              }
            },
            metadata: ek
          }, Zr, Or), (0, sk.d)(kk, null, Uf, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: kk => "useParallax" in kk,
              get: kk => kk.useParallax,
              set: (kk, ek) => {
                kk.useParallax = ek
              }
            },
            metadata: ek
          }, gr, Gr), (0, sk.d)(kk, null, Hf, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: kk => "useParallaxOcclusion" in kk,
              get: kk => kk.useParallaxOcclusion,
              set: (kk, ek) => {
                kk.useParallaxOcclusion = ek
              }
            },
            metadata: ek
          }, Nr, Rr), (0, sk.d)(kk, null, wf, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: kk => "parallaxScaleBias" in kk,
              get: kk => kk.parallaxScaleBias,
              set: (kk, ek) => {
                kk.parallaxScaleBias = ek
              }
            },
            metadata: ek
          }, Jr, kP), (0, sk.d)(kk, null, lf, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: kk => "disableLighting" in kk,
              get: kk => kk.disableLighting,
              set: (kk, ek) => {
                kk.disableLighting = ek
              }
            },
            metadata: ek
          }, eP, iP), (0, sk.d)(kk, null, pf, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: kk => "forceIrradianceInFragment" in kk,
              get: kk => kk.forceIrradianceInFragment,
              set: (kk, ek) => {
                kk.forceIrradianceInFragment = ek
              }
            },
            metadata: ek
          }, DP, fP), (0, sk.d)(kk, null, yf, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: kk => "maxSimultaneousLights" in kk,
              get: kk => kk.maxSimultaneousLights,
              set: (kk, ek) => {
                kk.maxSimultaneousLights = ek
              }
            },
            metadata: ek
          }, SP, bP), (0, sk.d)(kk, null, Yf, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: kk => "invertNormalMapX" in kk,
              get: kk => kk.invertNormalMapX,
              set: (kk, ek) => {
                kk.invertNormalMapX = ek
              }
            },
            metadata: ek
          }, rP, PP), (0, sk.d)(kk, null, Lf, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: kk => "invertNormalMapY" in kk,
              get: kk => kk.invertNormalMapY,
              set: (kk, ek) => {
                kk.invertNormalMapY = ek
              }
            },
            metadata: ek
          }, mP, MP), (0, sk.d)(kk, null, Cf, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: kk => "twoSidedLighting" in kk,
              get: kk => kk.twoSidedLighting,
              set: (kk, ek) => {
                kk.twoSidedLighting = ek
              }
            },
            metadata: ek
          }, KP, xP), (0, sk.d)(kk, null, Af, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: kk => "useAlphaFresnel" in kk,
              get: kk => kk.useAlphaFresnel,
              set: (kk, ek) => {
                kk.useAlphaFresnel = ek
              }
            },
            metadata: ek
          }, nP, UP), (0, sk.d)(kk, null, jf, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: kk => "useLinearAlphaFresnel" in kk,
              get: kk => kk.useLinearAlphaFresnel,
              set: (kk, ek) => {
                kk.useLinearAlphaFresnel = ek
              }
            },
            metadata: ek
          }, HP, wP), (0, sk.d)(kk, null, sf, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "environmentBRDFTexture" in kk,
              get: kk => kk.environmentBRDFTexture,
              set: (kk, ek) => {
                kk.environmentBRDFTexture = ek
              }
            },
            metadata: ek
          }, lP, pP), (0, sk.d)(kk, null, df, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: kk => "forceNormalForward" in kk,
              get: kk => kk.forceNormalForward,
              set: (kk, ek) => {
                kk.forceNormalForward = ek
              }
            },
            metadata: ek
          }, yP, YP), (0, sk.d)(kk, null, Vf, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: kk => "enableSpecularAntiAliasing" in kk,
              get: kk => kk.enableSpecularAntiAliasing,
              set: (kk, ek) => {
                kk.enableSpecularAntiAliasing = ek
              }
            },
            metadata: ek
          }, LP, CP), (0, sk.d)(kk, null, Ff, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: kk => "useHorizonOcclusion" in kk,
              get: kk => kk.useHorizonOcclusion,
              set: (kk, ek) => {
                kk.useHorizonOcclusion = ek
              }
            },
            metadata: ek
          }, AP, jP), (0, sk.d)(kk, null, uf, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: kk => "useRadianceOcclusion" in kk,
              get: kk => kk.useRadianceOcclusion,
              set: (kk, ek) => {
                kk.useRadianceOcclusion = ek
              }
            },
            metadata: ek
          }, sP, dP), (0, sk.d)(kk, null, qf, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: kk => "unlit" in kk,
              get: kk => kk.unlit,
              set: (kk, ek) => {
                kk.unlit = ek
              }
            },
            metadata: ek
          }, VP, FP), (0, sk.d)(kk, null, If, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: kk => "applyDecalMapAfterDetailMap" in kk,
              get: kk => kk.applyDecalMapAfterDetailMap,
              set: (kk, ek) => {
                kk.applyDecalMapAfterDetailMap = ek
              }
            },
            metadata: ek
          }, uP, qP), (0, sk.d)(kk, null, zf, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "debugMode" in kk,
              get: kk => kk.debugMode,
              set: (kk, ek) => {
                kk.debugMode = ek
              }
            },
            metadata: ek
          }, IP, zP), (0, sk.d)(kk, null, Qf, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "transparencyMode" in kk,
              get: kk => kk.transparencyMode
            },
            metadata: ek
          }, null, Ef), ek && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ek
          })
        })(), kk.SSS_QUALITY_LOW = 0, kk.SSS_QUALITY_MEDIUM = 1, kk.SSS_QUALITY_HIGH = 2, kk._noiseTextures = {}, kk.ForceGLSL = !1, kk._ShaderLoader = new ne.e((() => [Promise.all([ik.e(316), ik.e(380)]).then((() => ik(61144))), Promise.all([ik.e(321), ik.e(317), ik.e(379), ik.e(384)]).then((() => ik(61158)))]), (() => [Promise.all([ik.e(335), ik.e(337), ik.e(383)]).then((() => ik(61201))), Promise.all([ik.e(335), ik.e(338), ik.e(382), ik.e(385)]).then((() => ik(61215)))])), kk
      })(),
      ki = !1;
    ki || (ki = !0, (0, gk.e)(), (0, Be.h)("BABYLON.OpenPBRMaterial", Je));
    var ei = ik(36726);
    class ii {
      constructor(kk) {
        this.name = ve.b.NAME_PROCEDURALTEXTURE, this.bw = kk
      }
      register() {
        this.bw._beforeClearStage.registerStep(ve.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.bw.proceduralTexturesEnabled) {
          se.i.StartPerformanceCounter("Procedural textures", this.bw.proceduralTextures.length > 0);
          for (let kk = 0; kk < this.bw.proceduralTextures.length; kk++) {
            const ek = this.bw.proceduralTextures[kk];
            ek._shouldRender() && ek.render()
          }
          se.i.EndPerformanceCounter("Procedural textures", this.bw.proceduralTextures.length > 0)
        }
      }
    }
    var Di = ik(39906);
    let fi = (() => {
      var kk;
      let ek, Dk, fk, bk, rk, Pk = uk.f,
        mk = [],
        Mk = [],
        Kk = [],
        xk = [],
        nk = [],
        Uk = [],
        wk = [],
        lk = [],
        pk = [];
      return kk = class extends Pk {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(kk, ek, ik, Dk) {
          let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Dk, !Sk), this.isEnabled = ((0, sk.e)(this, mk), (0, sk.e)(this, Mk, !0)), this.autoClear = ((0, sk.e)(this, Kk), (0, sk.e)(this, xk, !0)), this.onGenerated = (0, sk.e)(this, nk), this.onGeneratedObservable = new ei.c, this.onBeforeGenerationObservable = new ei.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, sk.e)(this, Uk, void 0), this._drawWrapper = (0, sk.e)(this, wk), this._textures = {}, this._size = (0, sk.e)(this, lk, void 0), this._textureType = (0, sk.e)(this, pk), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === fk || fk instanceof uk.f ? (this._options = {}, this._fallbackTexture = fk) : (this._options = fk, this._fallbackTexture = fk.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let Pk = (Dk = this.XF() || Hk.e.LastCreatedScene)._getComponent(ve.b.NAME_PROCEDURALTEXTURE);
          Pk || (Pk = new ii(Dk), Dk.qik(Pk)), this._options.skipSceneRegistration || Dk.proceduralTextures.push(this), this._fullEngine = Dk.JU(), this.name = kk, this.isRenderTarget = !0, this._size = ek, this._textureType = rk, this._generateMipMaps = Sk, this._drawWrapper = new Di.e(this._fullEngine), this.setFragment(ik);
          const yk = this._createRtWrapper(bk, ek, Sk, rk);
          this._texture = yk.texture;
          const Yk = [];
          Yk.push(1, 1), Yk.push(-1, 1), Yk.push(-1, -1), Yk.push(1, -1), this._vertexBuffers[Wk.e.PositionKind] = new Wk.e(this._fullEngine, Yk, Wk.e.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(kk, ek, ik, Dk) {
          return kk ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(ek, {
            generateMipMaps: ik,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Dk,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(ek, {
            generateMipMaps: ik,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Dk,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(kk) {
          this._drawWrapper.effect = kk
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((kk => {
            this._contentData = this.readPixels(0, 0, kk), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const kk = this._fullEngine,
            ek = [];
          ek.push(0), ek.push(1), ek.push(2), ek.push(0), ek.push(2), ek.push(3), this._indexBuffer = kk.createIndexBuffer(ek)
        }
        _rebuild() {
          const kk = this._vertexBuffers[Wk.e.PositionKind];
          kk && kk._rebuild(), this._createIndexBuffer(), this.refreshRate === de.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = de.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(kk) {
          if (this.isReady()) return void kk(this);
          const ek = this.getEffect();
          ek && ek.executeWhenCompiled((() => {
            kk(this)
          }))
        }
        isReady() {
          const kk = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const ek = this._getDefines();
          if (this._drawWrapper.effect && ek === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Dk = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== ek && (this._cachedDefines = ek, this._drawWrapper.effect = kk.createEffect(Dk, [Wk.e.PositionKind], this._uniforms, this._samplers, ek, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([ik.e(388).then((() => ik(61291))), this._options.extraInitializationsAsync()]) : await Promise.all([ik.e(389).then((() => ik(61298))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await ik.e(388).then((() => ik(61291))) : await ik.e(389).then((() => ik(61298)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(kk) {
          this._fragment = kk
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(kk) {
          this._refreshRate = kk, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(kk, ek) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const ik = this._texture.isCube;
          this._rtWrapper.dispose();
          const Dk = this._createRtWrapper(ik, kk, ek, this._textureType);
          this._texture = Dk.texture, this._size = kk, this._generateMipMaps = ek
        }
        _checkUniform(kk) {
          -1 === this._uniforms.indexOf(kk) && this._uniforms.push(kk)
        }
        setTexture(kk, ek) {
          return -1 === this._samplers.indexOf(kk) && this._samplers.push(kk), this._textures[kk] = ek, this
        }
        setFloat(kk, ek) {
          return this._checkUniform(kk), this._floats[kk] = ek, this
        }
        setInt(kk, ek) {
          return this._checkUniform(kk), this._ints[kk] = ek, this
        }
        setFloats(kk, ek) {
          return this._checkUniform(kk), this._floatsArrays[kk] = ek, this
        }
        setColor3(kk, ek) {
          return this._checkUniform(kk), this._colors3[kk] = ek, this
        }
        setColor4(kk, ek) {
          return this._checkUniform(kk), this._colors4[kk] = ek, this
        }
        setVector2(kk, ek) {
          return this._checkUniform(kk), this._vectors2[kk] = ek, this
        }
        setVector3(kk, ek) {
          return this._checkUniform(kk), this._vectors3[kk] = ek, this
        }
        setVector4(kk, ek) {
          return this._checkUniform(kk), this._vectors4[kk] = ek, this
        }
        setMatrix(kk, ek) {
          return this._checkUniform(kk), this._matrices[kk] = ek, this
        }
        render(kk) {
          const ek = this.XF();
          if (!ek) return;
          const ik = this._fullEngine;
          if (ik.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), ik.setState(!1), !this.nodeMaterialSource) {
            for (const kk in this._textures) this._drawWrapper.effect.setTexture(kk, this._textures[kk]);
            for (const kk in this._ints) this._drawWrapper.effect.setInt(kk, this._ints[kk]);
            for (const kk in this._floats) this._drawWrapper.effect.setFloat(kk, this._floats[kk]);
            for (const kk in this._floatsArrays) this._drawWrapper.effect.setArray(kk, this._floatsArrays[kk]);
            for (const kk in this._colors3) this._drawWrapper.effect.setColor3(kk, this._colors3[kk]);
            for (const kk in this._colors4) {
              const ek = this._colors4[kk];
              this._drawWrapper.effect.setFloat4(kk, ek.r, ek.g, ek.b, ek.a)
            }
            for (const kk in this._vectors2) this._drawWrapper.effect.setVector2(kk, this._vectors2[kk]);
            for (const kk in this._vectors3) this._drawWrapper.effect.setVector3(kk, this._vectors3[kk]);
            for (const kk in this._vectors4) this._drawWrapper.effect.setVector4(kk, this._vectors4[kk]);
            for (const kk in this._matrices) this._drawWrapper.effect.setMatrix(kk, this._matrices[kk])
          }
          if (!this._texture || !this._rtWrapper) return;
          ik._enableGPUDebugMarkers && ik._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Dk = ik.currentViewport;
          if (this.isCube)
            for (let fk = 0; fk < 6; fk++) ik.bindFramebuffer(this._rtWrapper, fk, void 0, void 0, !0), ik.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", fk), this.autoClear && ik.clear(ek.clearColor, !0, !1, !1), ik.drawElementsType(Sk.e.TriangleFillMode, 0, 6), ik.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let kk = 1;
            this._rtWrapper.is3D ? kk = this._rtWrapper.depth : this._rtWrapper.is2DArray && (kk = this._rtWrapper.layers);
            for (let Dk = 0; Dk < kk; Dk++) {
              if (ik.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Dk), ik.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== kk ? Dk / (kk - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Dk);
                for (const kk in this._textures) this._drawWrapper.effect.setTexture(kk, this._textures[kk])
              }
              this.autoClear && ik.clear(ek.clearColor, !0, !1, !1), ik.drawElementsType(Sk.e.TriangleFillMode, 0, 6), ik.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Dk && ik.setViewport(Dk), this.isCube && ik.generateMipMapsForCubemap(this._texture, !0), ik._enableGPUDebugMarkers && ik._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const ek = this.getSize(),
            ik = new kk(this.name, ek.width, this._fragment, this.XF(), this._fallbackTexture, this._generateMipMaps);
          return ik.hasAlpha = this.hasAlpha, ik.level = this.level, ik.coordinatesMode = this.coordinatesMode, ik
        }
        dispose() {
          const kk = this.XF();
          if (!kk) return;
          const ek = kk.proceduralTextures.indexOf(this);
          ek >= 0 && kk.proceduralTextures.splice(ek, 1);
          const ik = this._vertexBuffers[Wk.e.PositionKind];
          ik && (ik.dispose(), this._vertexBuffers[Wk.e.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pk[Symbol.metadata] ?? null) : void 0;
        ek = [(0, dk.I)()], Dk = [(0, dk.I)()], fk = [(0, dk.I)()], bk = [(0, dk.I)()], rk = [(0, dk.I)()], (0, sk.d)(kk, null, rk, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: kk => "refreshRate" in kk,
            get: kk => kk.refreshRate
          },
          metadata: ik
        }, null, mk), (0, sk.d)(null, null, ek, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isEnabled" in kk,
            get: kk => kk.isEnabled,
            set: (kk, ek) => {
              kk.isEnabled = ek
            }
          },
          metadata: ik
        }, Mk, Kk), (0, sk.d)(null, null, Dk, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: kk => "autoClear" in kk,
            get: kk => kk.autoClear,
            set: (kk, ek) => {
              kk.autoClear = ek
            }
          },
          metadata: ik
        }, xk, nk), (0, sk.d)(null, null, fk, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: kk => "_generateMipMaps" in kk,
            get: kk => kk._generateMipMaps,
            set: (kk, ek) => {
              kk._generateMipMaps = ek
            }
          },
          metadata: ik
        }, Uk, wk), (0, sk.d)(null, null, bk, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: kk => "_size" in kk,
            get: kk => kk._size,
            set: (kk, ek) => {
              kk._size = ek
            }
          },
          metadata: ik
        }, lk, pk), ik && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ik
        })
      })(), kk
    })();

    function Si(kk) {
      return "texture" in kk
    }

    function bi(kk) {
      return "value" in kk
    }
    async function ri(kk, ek, Dk) {
      const fk = [ek.red, ek.green, ek.blue, ek.alpha],
        Sk = [],
        bk = [];
      for (let ik = 0; ik < 4; ik++) {
        const kk = fk[ik];
        if (kk)
          if (Si(kk)) {
            if (kk.sourceChannel < 0 || kk.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let ek = Sk.indexOf(kk.texture); - 1 === ek && (ek = Sk.length, Sk.push(kk.texture)), bk[ik] = ek
          } else {
            if (!bi(kk)) throw new Error("Invalid channel input configuration");
            if (kk.value < 0 || kk.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            bk[ik] = -1
          }
        else bk[ik] = -1
      }
      let rk = ek.outputSize;
      if (!rk && Sk.length > 0) {
        let kk = 0;
        for (const ek of Sk) {
          const ik = ek.getSize(),
            Dk = Math.max(ik.width, ik.height);
          Dk > kk && (kk = Dk, rk = ik.width === ik.height ? kk : ik)
        }
      }
      rk = rk || 512;
      const Pk = [],
        mk = new Set;
      for (let ik = 0; ik < 4; ik++) {
        const kk = fk[ik],
          ek = ["RED", "GREEN", "BLUE", "ALPHA"][ik];
        if (kk && Si(kk)) {
          Pk.push(`${ek}_FROM_TEXTURE`);
          const kk = bk[ik];
          mk.add(kk)
        }
      }
      mk.forEach((kk => {
        Pk.push(`USE_TEXTURE${kk}`)
      }));
      const Mk = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Dk.JU().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Dk.JU().isWebGPU ? await Promise.all([ik.e(386).then((() => ik(61286)))]) : await Promise.all([ik.e(387).then((() => ik(61288)))])
          },
          skipSceneRegistration: !0
        },
        Kk = new fi(kk, rk, "textureMerger", Dk, Mk);
      Kk.refreshRate = -1, Kk.defines = Pk.length > 0 ? "#define " + Pk.join("\n#define ") + "\n" : "";
      for (let ik = 0; ik < Sk.length; ik++) xk = Sk[ik], (nk = Kk).uOffset = xk.uOffset, nk.vOffset = xk.vOffset, nk.uScale = xk.uScale, nk.vScale = xk.vScale, nk.uAng = xk.uAng, nk.vAng = xk.vAng, nk.wAng = xk.wAng, nk.uRotationCenter = xk.uRotationCenter, nk.vRotationCenter = xk.vRotationCenter, Kk.setTexture(`inputTexture${ik}`, Sk[ik]);
      var xk, nk;
      for (let ik = 0; ik < 4; ik++) {
        const kk = fk[ik],
          ek = ["red", "green", "blue", "alpha"][ik];
        if (kk && Si(kk)) {
          const Dk = bk[ik];
          Kk.setInt(`${ek}TextureIndex`, Dk), Kk.setInt(`${ek}SourceChannel`, kk.sourceChannel)
        } else {
          let Dk;
          Dk = kk && bi(kk) ? kk.value : 3 === ik ? 1 : 0, Kk.setFloat(`${ek}ConstantValue`, Dk)
        }
      }
      return await new Promise(((kk, ek) => {
        Kk.executeWhenReady((() => {
          try {
            Kk.render(), kk(Kk)
          } catch (ik) {
            ek(ik instanceof Error ? ik : new Error(String(ik)))
          }
        }))
      }))
    }

    function Pi(kk, ek) {
      return {
        texture: kk,
        sourceChannel: ek
      }
    }

    function mi(kk) {
      return {
        value: kk
      }
    }

    function Mi(kk, ek, ik, Dk) {
      return {
        red: kk,
        green: ek,
        blue: ik,
        alpha: Dk
      }
    }
    var Ki = ik(39384),
      xi = ik(39492),
      ni = ik(36713),
      Ui = ik(39555),
      Hi = ik(39483);
    class wi {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class li extends Ki.e {
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
        return !!this._options?.enableMultiview || this.VH > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new wi;
        super(null), void 0 === kk.deterministicLockstep && (kk.deterministicLockstep = !1), void 0 !== kk.timeStep && (this._timeStep = kk.timeStep), void 0 === kk.lockstepMaxSteps && (kk.lockstepMaxSteps = 4), this._options = kk, ni.c.SetMatrixPrecision(!!kk.useHighPrecisionMatrix), this._caps = {
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
        }, kk.enableMultiview && (this._caps.multiview = {
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
        }, kk.renderingCanvas && (this._renderingCanvas = kk.renderingCanvas), Vk.b.Log(`Babylon.js v${Ki.e.Version} - Null engine`);
        const ek = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (ek.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (ek.Blob = function() {})
      }
      createVertexBuffer(kk) {
        const ek = new xi.b;
        return ek.references = 1, ek
      }
      createIndexBuffer(kk) {
        const ek = new xi.b;
        return ek.references = 1, ek
      }
      clear(kk, ek, ik) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(kk, ek, ik) {
        this._cachedViewport = kk
      }
      createUniformBuffer(kk) {
        const ek = new xi.b;
        return ek.references = 1, ek.vK = kk instanceof Array ? kk.length * Float32Array.BYTES_PER_ELEMENT : kk.byteLength, ek
      }
      createDynamicUniformBuffer(kk) {
        return this.createUniformBuffer(kk)
      }
      updateUniformBuffer(kk, ek, ik, Dk) {}
      bindUniformBufferBase(kk, ek, ik) {}
      bindUniformBlock(kk, ek, ik) {}
      createShaderProgram(kk, ek, ik, Dk, fk) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(kk, ek) {
        return []
      }
      getAttributes(kk, ek) {
        return []
      }
      bindSamplers(kk) {
        this._currentEffect = null
      }
      enableEffect(kk) {
        kk = null !== kk && (0, Hi.b)(kk) ? kk.effect : kk, this._currentEffect = kk, kk && (kk.onBind && kk.onBind(kk), kk._onBindObservable && kk._onBindObservable.notifyObservers(kk))
      }
      setStateCullFaceType(kk, ek) {}
      setState(kk) {}
      setIntArray(kk, ek) {
        return !0
      }
      setIntArray2(kk, ek) {
        return !0
      }
      setIntArray3(kk, ek) {
        return !0
      }
      setIntArray4(kk, ek) {
        return !0
      }
      setFloatArray(kk, ek) {
        return !0
      }
      setFloatArray2(kk, ek) {
        return !0
      }
      setFloatArray3(kk, ek) {
        return !0
      }
      setFloatArray4(kk, ek) {
        return !0
      }
      setArray(kk, ek) {
        return !0
      }
      setArray2(kk, ek) {
        return !0
      }
      setArray3(kk, ek) {
        return !0
      }
      setArray4(kk, ek) {
        return !0
      }
      setMatrices(kk, ek) {
        return !0
      }
      setMatrix3x3(kk, ek) {
        return !0
      }
      setMatrix2x2(kk, ek) {
        return !0
      }
      setFloat(kk, ek) {
        return !0
      }
      setFloat2(kk, ek, ik) {
        return !0
      }
      setFloat3(kk, ek, ik, Dk) {
        return !0
      }
      setBool(kk, ek) {
        return !0
      }
      setFloat4(kk, ek, ik, Dk, fk) {
        return !0
      }
      setAlphaMode(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[ik] !== kk && (this.alphaState.setAlphaBlend(0 !== kk, 0), ek || this.setDepthWrite(0 === kk), this._alphaMode[ik] = kk)
      }
      bindBuffers(kk, ek, ik) {}
      wipeCaches(kk) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, kk && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(kk, ek, ik, Dk) {}
      drawElementsType(kk, ek, ik, Dk) {}
      drawArraysType(kk, ek, ik, Dk) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(kk) {}
      createTexture(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          rk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const Pk = new Ve.b(this, 1),
          mk = String(kk);
        return Pk.url = mk, Pk.generateMipMaps = !ek, Pk.samplingMode = fk, Pk.invertY = ik, Pk.baseWidth = this._options.textureSize, Pk.baseHeight = this._options.textureSize, Pk.width = this._options.textureSize, Pk.height = this._options.textureSize, rk && (Pk.format = rk), bk && (Pk._buffer = bk), Pk.isReady = !0, Sk && setTimeout((() => {
          Sk(Pk)
        })), this._internalTexturesCache.push(Pk), Pk
      }
      _createHardwareRenderTargetWrapper(kk, ek, ik) {
        const Dk = new Ui.c(kk, ek, ik, this);
        return this._renderTargetWrapperCache.push(Dk), Dk
      }
      createRenderTargetTexture(kk, ek) {
        const ik = this._createHardwareRenderTargetWrapper(!1, !1, kk),
          Dk = {};
        void 0 !== ek && "object" === typeof ek ? (Dk.generateMipMaps = ek.generateMipMaps, Dk.generateDepthBuffer = void 0 === ek.generateDepthBuffer || ek.generateDepthBuffer, Dk.generateStencilBuffer = Dk.generateDepthBuffer && ek.generateStencilBuffer, Dk.type = void 0 === ek.type ? 0 : ek.type, Dk.samplingMode = void 0 === ek.samplingMode ? 3 : ek.samplingMode) : (Dk.generateMipMaps = ek, Dk.generateDepthBuffer = !0, Dk.generateStencilBuffer = !1, Dk.type = 0, Dk.samplingMode = 3);
        const fk = new Ve.b(this, 5);
        ik.setTexture(fk);
        const Sk = kk.width || kk,
          bk = kk.height || kk;
        return ik._generateDepthBuffer = Dk.generateDepthBuffer, ik._generateStencilBuffer = !!Dk.generateStencilBuffer, fk.baseWidth = Sk, fk.baseHeight = bk, fk.width = Sk, fk.height = bk, fk.isReady = !0, fk.samples = 1, fk.generateMipMaps = !!Dk.generateMipMaps, fk.samplingMode = Dk.samplingMode, fk.type = Dk.type, this._internalTexturesCache.push(fk), ik
      }
      createMultiviewRenderTargetTexture(kk, ek) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const ik = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: kk,
            height: ek
          }),
          Dk = new Ve.b(this, 5, !0);
        return Dk.baseWidth = kk, Dk.baseHeight = ek, Dk.width = kk, Dk.height = ek, Dk.isMultiview = !0, Dk.isReady = !0, Dk.format = 5, Dk.samples = 1, ik.setTextures(Dk), ik
      }
      bindMultiviewFramebuffer(kk) {
        this.bindFramebuffer(kk, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(kk, ek) {
        const ik = this._createHardwareRenderTargetWrapper(!1, !0, kk),
          Dk = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...ek
          };
        Dk.generateStencilBuffer = Dk.generateDepthBuffer && Dk.generateStencilBuffer, (1 !== Dk.type || this._caps.textureFloatLinearFiltering) && (2 !== Dk.type || this._caps.textureHalfFloatLinearFiltering) || (Dk.samplingMode = 1), ik._generateDepthBuffer = Dk.generateDepthBuffer, ik._generateStencilBuffer = !!Dk.generateStencilBuffer;
        const fk = new Ve.b(this, 5);
        return fk.baseWidth = kk, fk.baseHeight = kk, fk.width = kk, fk.height = kk, fk.isReady = !0, fk.isCube = !0, fk.samples = 1, fk.generateMipMaps = !!Dk.generateMipMaps, fk.samplingMode = Dk.samplingMode, fk.type = Dk.type, this._internalTexturesCache.push(fk), ik
      }
      updateTextureSamplingMode(kk, ek) {
        ek.samplingMode = kk
      }
      createRawTexture(kk, ek, ik, Dk, fk, Sk, bk) {
        let rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Pk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          mk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Mk = new Ve.b(this, 3);
        return Mk.baseWidth = ek, Mk.baseHeight = ik, Mk.width = ek, Mk.height = ik, Mk.format = Dk, Mk.generateMipMaps = fk, Mk.samplingMode = bk, Mk.invertY = Sk, Mk._compression = rk, Mk.type = Pk, Mk._useSRGBBuffer = mk, this._doNotHandleContextLost || (Mk._bufferView = kk), Mk
      }
      updateRawTexture(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        kk && (kk._bufferView = ek, kk.format = ik, kk.invertY = Dk, kk._compression = fk, kk.type = Sk, kk._useSRGBBuffer = bk)
      }
      bindFramebuffer(kk, ek, ik, Dk, fk) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = kk, this._currentFramebuffer = null, this._cachedViewport && !fk && this.setViewport(this._cachedViewport, ik, Dk)
      }
      unBindFramebuffer(kk) {
        let ek = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, ek && ek(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(kk) {
        const ek = new xi.b;
        return ek.references = 1, ek.vK = 1, ek
      }
      updateDynamicTexture(kk, ek, ik) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(kk) {}
      updateDynamicIndexBuffer(kk, ek) {}
      updateDynamicVertexBuffer(kk, ek, ik, Dk) {}
      _bindTextureDirectly(kk, ek) {
        return this._boundTexturesCache[this._activeChannel] !== ek && (this._boundTexturesCache[this._activeChannel] = ek, !0)
      }
      _bindTexture(kk, ek) {
        kk < 0 || this._bindTextureDirectly(0, ek)
      }
      _deleteBuffer(kk) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(kk) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(kk, ek, ik, Dk, fk) {}
      _uploadDataToTextureDirectly(kk, ek) {}
      _uploadArrayBufferViewToTexture(kk, ek) {}
      _uploadImageToTexture(kk, ek) {}
    }
    ik(39601), ik(39637), ik(39599);
    async function yi(kk) {
      const ek = kk.getInternalTexture();
      if (!ek || 1 !== ek.source) return null;
      if (ek.invertY) {
        const ek = kk.XF()?.JU();
        if (!(ek instanceof li)) return null
      }
      const ik = ek._buffer;
      let Dk, Sk = kk.mimeType;
      try {
        ik ? ArrayBuffer.isView(ik) ? Dk = ik.buffer.slice(ik.byteOffset, ik.byteOffset + ik.byteLength) : ik instanceof ArrayBuffer ? Dk = ik : ik instanceof Blob ? (Dk = await ik.arrayBuffer(), Sk = ik.type || Sk) : "string" === typeof ik ? (Dk = await fk.Tools.LoadFileAsync(ik), Sk = (0, Pk.d)(ik) || Sk) : "undefined" !== typeof HTMLImageElement && ik instanceof HTMLImageElement && (Dk = await fk.Tools.LoadFileAsync(ik.src), Sk = (0, Pk.d)(ik.src) || Sk) : (Dk = await fk.Tools.LoadFileAsync(ek.url), Sk = (0, Pk.d)(ek.url) || Sk)
      } catch {
        return null
      }
      if (Dk && !Sk && ek.url) {
        const kk = ek.url.match(/^data:([^;,]+)/);
        Sk = kk ? kk[1] : (0, Pk.d)(ek.url)
      }
      return Dk && Sk ? {
        data: Dk,
        mimeType: Sk
      } : null
    }
    const Yi = 1e-6,
      Li = new wk.Color3(.04, .04, .04),
      Ci = 1024,
      Ai = wk.Color3.White(),
      ji = wk.Color3.BlackReadOnly;

    function si(kk) {
      switch (kk) {
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

    function di(kk, ek, ik) {
      if (ek < Li.r) return 0;
      const Dk = Li.r,
        fk = kk * ik / (1 - Li.r) + ek - 2 * Li.r,
        Sk = fk * fk - 4 * Dk * (Li.r - ek);
      return yk.Clamp((-fk + Math.sqrt(Sk)) / (2 * Dk), 0, 1)
    }

    function Vi(kk) {
      const ek = kk.diffuseColor.toLinearSpace(kk.XF().JU().useExactSrgbConversions).scale(.5),
        ik = kk.alpha,
        Dk = function(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ak.l(0, 1),
            ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ak.l(0, .1),
            Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ak.l(0, .1),
            fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ak.l(1300, .1);
          return function(kk, ek, ik, Dk, fk) {
            return (1 - kk) * (1 - kk) * (1 - kk) * ek + 3 * (1 - kk) * (1 - kk) * kk * ik + 3 * (1 - kk) * kk * kk * Dk + kk * kk * kk * fk
          }(Math.pow(kk / fk.x, .333333), ek.y, ik.y, Dk.y, fk.y)
        }(yk.Clamp(kk.specularPower, 0, Ci));
      return {
        baseColorFactor: [ek.r, ek.g, ek.b, ik],
        metallicFactor: 0,
        roughnessFactor: Dk
      }
    }

    function Fi(kk, ek) {
      ek.needAlphaBlending() ? kk.alphaMode = "BLEND" : ek.needAlphaTesting() && (kk.alphaMode = "MASK", kk.alphaCutoff = ek.alphaCutOff)
    }

    function ui(kk, ek, ik) {
      const Dk = new Uint8Array(kk * ek * 4);
      for (let fk = 0; fk < Dk.length; fk += 4) Dk[fk] = Dk[fk + 1] = Dk[fk + 2] = Dk[fk + 3] = 255;
      return Ck.c.CreateRGBATexture(Dk, kk, ek, ik)
    }

    function qi(kk) {
      if (kk instanceof Uint8Array) {
        const ek = kk.length,
          ik = new Float32Array(kk.length);
        for (let Dk = 0; Dk < ek; ++Dk) ik[Dk] = kk[Dk] / 255;
        return ik
      }
      if (kk instanceof Float32Array) return kk;
      throw new Error("Unsupported pixel format!")
    }
    class Ii {
      constructor(kk) {
        this._exporter = kk, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(kk) {
        return kk ? this._textureMap.get(kk.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(kk, ek) {
        const ik = Vi(kk),
          Dk = {
            name: kk.name
          };
        if (null == kk.backFaceCulling || kk.backFaceCulling || (kk.twoSidedLighting || fk.Tools.Warn(kk.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Dk.doubleSided = !0), ek) {
          const ek = [],
            fk = kk.diffuseTexture;
          fk && ek.push(this.exportTextureAsync(fk).then((kk => {
            kk && (ik.baseColorTexture = kk)
          })));
          const Sk = kk.bumpTexture;
          Sk && ek.push(this.exportTextureAsync(Sk).then((kk => {
            kk && (Dk.normalTexture = kk, 1 !== Sk.level && (Dk.normalTexture.scale = Sk.level))
          })));
          const bk = kk.emissiveTexture;
          bk && (Dk.emissiveFactor = [1, 1, 1], ek.push(this.exportTextureAsync(bk).then((kk => {
            kk && (Dk.emissiveTexture = kk)
          }))));
          const rk = kk.ambientTexture;
          rk && ek.push(this.exportTextureAsync(rk).then((kk => {
            if (kk) {
              const ek = {
                index: kk.index
              };
              Dk.occlusionTexture = ek
            }
          }))), ek.length > 0 && (this._exporter._materialNeedsUVsSet.add(kk), await Promise.all(ek))
        }(kk.alpha < 1 || kk.opacityTexture) && (kk.alphaMode === Ak.c.ALPHA_COMBINE ? Dk.alphaMode = "BLEND" : fk.Tools.Warn(kk.name + ": glTF 2.0 does not support alpha mode: " + kk.alphaMode.toString())), kk.emissiveColor && !kk.emissiveColor.equalsWithEpsilon(ji, Yi) && (Dk.emissiveFactor = kk.emissiveColor.Tik()), Dk.pbrMetallicRoughness = ik, Fi(Dk, kk), await this._finishMaterialAsync(Dk, kk);
        const Sk = this._exporter._materials;
        return Sk.push(Dk), Sk.length - 1
      }
      async _finishMaterialAsync(kk, ek) {
        const ik = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", kk, ek),
          Dk = [];
        for (const fk of ik) Dk.push(this.exportTextureAsync(fk));
        await Promise.all(Dk), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", kk, ek)
      }
      _resizeTexturesToSameDimensions(kk, ek, ik) {
        const Dk = kk ? kk.getSize() : {
            width: 0,
            height: 0
          },
          fk = ek ? ek.getSize() : {
            width: 0,
            height: 0
          };
        let Sk, bk;
        return Dk.width < fk.width ? (Sk = kk && kk instanceof Lk.d ? Yk.g.CreateResizedCopy(kk, fk.width, fk.height, !0) : ui(fk.width, fk.height, ik), bk = ek) : Dk.width > fk.width ? (bk = ek && ek instanceof Lk.d ? Yk.g.CreateResizedCopy(ek, Dk.width, Dk.height, !0) : ui(Dk.width, Dk.height, ik), Sk = kk) : (Sk = kk, bk = ek), {
          texture1: Sk,
          texture2: bk
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(kk, ek, ik) {
        const Dk = new Array;
        if (!kk && !ek) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const fk = kk ? kk.XF() : ek ? ek.XF() : null;
        if (fk) {
          const Sk = this._resizeTexturesToSameDimensions(kk, ek, fk),
            bk = Sk.texture1?.getSize();
          let rk, Pk;
          const mk = bk.width,
            Mk = bk.height,
            Kk = await Sk.texture1.readPixels(),
            xk = await Sk.texture2.readPixels();
          if (!Kk) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (rk = qi(Kk), !xk) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          Pk = qi(xk);
          const nk = Pk.byteLength,
            Uk = new Uint8Array(nk),
            Hk = new Uint8Array(nk),
            lk = 4,
            pk = new wk.Color3(0, 0, 0);
          let yk = 0,
            Yk = 0;
          for (let kk = 0; kk < Mk; ++kk)
            for (let ek = 0; ek < mk; ++ek) {
              const Dk = (mk * kk + ek) * lk,
                bk = {
                  diffuseColor: new wk.Color3(rk[Dk], rk[Dk + 1], rk[Dk + 2]).toLinearSpace(fk.JU().useExactSrgbConversions).multiply(ik.diffuseColor),
                  specularColor: new wk.Color3(Pk[Dk], Pk[Dk + 1], Pk[Dk + 2]).toLinearSpace(fk.JU().useExactSrgbConversions).multiply(ik.specularColor),
                  glossiness: Pk[Dk + 3] * ik.glossiness
                },
                Mk = this._convertSpecularGlossinessToMetallicRoughness(bk);
              pk.r = Math.max(pk.r, Mk.baseColor.r), pk.g = Math.max(pk.g, Mk.baseColor.g), pk.b = Math.max(pk.b, Mk.baseColor.b), yk = Math.max(yk, Mk.metallic), Yk = Math.max(Yk, Mk.roughness), Hk[Dk] = 255 * Mk.baseColor.r, Hk[Dk + 1] = 255 * Mk.baseColor.g, Hk[Dk + 2] = 255 * Mk.baseColor.b, Hk[Dk + 3] = Sk.texture1.hasAlpha ? 255 * rk[Dk + 3] : 255, Uk[Dk] = 0, Uk[Dk + 1] = 255 * Mk.roughness, Uk[Dk + 2] = 255 * Mk.metallic, Uk[Dk + 3] = 255
            }
          const Lk = {
            baseColor: pk,
            metallic: yk,
            roughness: Yk
          };
          let Ck = !1,
            Ak = !1;
          for (let kk = 0; kk < Mk; ++kk)
            for (let ek = 0; ek < mk; ++ek) {
              const ik = (mk * kk + ek) * lk;
              Hk[ik] /= Lk.baseColor.r > Yi ? Lk.baseColor.r : 1, Hk[ik + 1] /= Lk.baseColor.g > Yi ? Lk.baseColor.g : 1, Hk[ik + 2] /= Lk.baseColor.b > Yi ? Lk.baseColor.b : 1;
              const Dk = wk.Color3.FromInts(Hk[ik], Hk[ik + 1], Hk[ik + 2]).toGammaSpace(fk.JU().useExactSrgbConversions);
              Hk[ik] = 255 * Dk.r, Hk[ik + 1] = 255 * Dk.g, Hk[ik + 2] = 255 * Dk.b, Dk.equalsWithEpsilon(Ai, Yi) || (Ak = !0), Uk[ik + 1] /= Lk.roughness > Yi ? Lk.roughness : 1, Uk[ik + 2] /= Lk.metallic > Yi ? Lk.metallic : 1;
              wk.Color3.FromInts(255, Uk[ik + 1], Uk[ik + 2]).equalsWithEpsilon(Ai, Yi) || (Ck = !0)
            }
          return Ck && Dk.push((0, jk.EncodeImageAsync)(Uk, mk, Mk).then((kk => {
            Lk.metallicRoughnessTextureData = kk
          }))), Ak && Dk.push((0, jk.EncodeImageAsync)(Hk, mk, Mk).then((kk => {
            Lk.baseColorTextureData = kk
          }))), await Promise.all(Dk).then((() => Lk))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(kk) {
        const ek = this._getPerceivedBrightness(kk.diffuseColor),
          ik = this._getPerceivedBrightness(kk.specularColor),
          Dk = 1 - this._getMaxComponent(kk.specularColor),
          fk = di(ek, ik, Dk),
          Sk = kk.diffuseColor.scale(Dk / (1 - Li.r) / Math.max(1 - fk, Yi)),
          bk = kk.specularColor.subtract(Li.scale(1 - fk)).scale(1 / Math.max(fk, Yi));
        let rk = wk.Color3.Lerp(Sk, bk, fk * fk);
        rk = rk.clampToRef(0, 1, rk);
        return {
          baseColor: rk,
          metallic: fk,
          roughness: 1 - kk.glossiness
        }
      }
      _getPerceivedBrightness(kk) {
        return Math.sqrt(.299 * kk.r * kk.r + .587 * kk.g * kk.g + .114 * kk.b * kk.b)
      }
      _getMaxComponent(kk) {
        return Math.max(kk.r, Math.max(kk.g, kk.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        const mk = [],
          Mk = {
            baseColor: kk,
            metallic: ek,
            roughness: ik
          };
        if (Pk)
          if (bk instanceof Je) {
            if (bk.geometryOpacityTexture) {
              const kk = Dk && Dk.getInternalTexture() ? Dk.getInternalTexture().uniqueId : 0,
                ek = bk.geometryOpacityTexture && bk.geometryOpacityTexture.getInternalTexture() ? bk.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                ik = Number(`${kk}${ek}`),
                fk = this._textureMap.get(ik);
              fk ? rk.baseColorTexture = fk : mk.push(ri("baseColorOpacityTexture", Mi(Dk ? Pi(Dk, 0) : mi(1), Dk ? Pi(Dk, 1) : mi(1), Dk ? Pi(Dk, 2) : mi(1), Pi(bk.geometryOpacityTexture, 0)), bk.XF()).then((async kk => {
                const ek = await this.exportTextureAsync(kk, ik);
                ek && (rk.baseColorTexture = ek)
              })))
            } else Dk && mk.push(this.exportTextureAsync(Dk).then((kk => {
              kk && (rk.baseColorTexture = kk)
            })));
            if (bk._useMetallicFromMetallicTextureBlue && fk) mk.push(this.exportTextureAsync(fk).then((kk => {
              kk && (rk.metallicRoughnessTexture = kk)
            })));
            else if (Sk || fk) {
              const kk = fk && fk.getInternalTexture() ? fk.getInternalTexture().uniqueId : 0,
                ek = Sk && Sk.getInternalTexture() ? Sk.getInternalTexture().uniqueId : 0,
                ik = Number(`${kk}${ek}`),
                Dk = this._textureMap.get(ik);
              Dk ? rk.metallicRoughnessTexture = Dk : mk.push(ri("MetalRoughTexture", Mi(bk.ambientOcclusionTexture ? Pi(bk.ambientOcclusionTexture, 0) : mi(1), Sk ? Pi(Sk, 0) : mi(1), fk ? Pi(fk, 0) : mi(1)), bk.XF()).then((async kk => {
                const ek = await this.exportTextureAsync(kk, ik);
                ek && (rk.metallicRoughnessTexture = ek)
              })))
            }
          } else Dk && mk.push(this.exportTextureAsync(Dk).then((kk => {
            kk && (rk.baseColorTexture = kk)
          }))), fk && mk.push(this.exportTextureAsync(fk).then((kk => {
            kk && (rk.metallicRoughnessTexture = kk)
          })));
        return mk.length > 0 && (this._exporter._materialNeedsUVsSet.add(bk), await Promise.all(mk)), Mk
      }
      _getTextureSampler(kk) {
        const ek = {};
        if (!kk || !(kk instanceof Lk.d)) return ek;
        const ik = this._getGLTFTextureWrapMode(kk.wrapU);
        10497 !== ik && (ek.wrapS = ik);
        const Dk = this._getGLTFTextureWrapMode(kk.wrapV);
        switch (10497 !== Dk && (ek.wrapT = Dk), kk.samplingMode) {
          case Lk.d.LINEAR_LINEAR:
            ek.magFilter = 9729, ek.minFilter = 9729;
            break;
          case Lk.d.LINEAR_NEAREST:
            ek.magFilter = 9729, ek.minFilter = 9728;
            break;
          case Lk.d.NEAREST_LINEAR:
            ek.magFilter = 9728, ek.minFilter = 9729;
            break;
          case Lk.d.NEAREST_LINEAR_MIPLINEAR:
            ek.magFilter = 9728, ek.minFilter = 9987;
            break;
          case Lk.d.NEAREST_NEAREST:
            ek.magFilter = 9728, ek.minFilter = 9728;
            break;
          case Lk.d.NEAREST_LINEAR_MIPNEAREST:
            ek.magFilter = 9728, ek.minFilter = 9985;
            break;
          case Lk.d.LINEAR_NEAREST_MIPNEAREST:
            ek.magFilter = 9729, ek.minFilter = 9984;
            break;
          case Lk.d.LINEAR_NEAREST_MIPLINEAR:
            ek.magFilter = 9729, ek.minFilter = 9986;
            break;
          case Lk.d.NEAREST_NEAREST_MIPLINEAR:
            ek.magFilter = 9728, ek.minFilter = 9986;
            break;
          case Lk.d.LINEAR_LINEAR_MIPLINEAR:
            ek.magFilter = 9729, ek.minFilter = 9987;
            break;
          case Lk.d.LINEAR_LINEAR_MIPNEAREST:
            ek.magFilter = 9729, ek.minFilter = 9985;
            break;
          case Lk.d.NEAREST_NEAREST_MIPNEAREST:
            ek.magFilter = 9728, ek.minFilter = 9984
        }
        return ek
      }
      _getGLTFTextureWrapMode(kk) {
        switch (kk) {
          case Lk.d.WRAP_ADDRESSMODE:
            return 10497;
          case Lk.d.CLAMP_ADDRESSMODE:
            return 33071;
          case Lk.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return fk.Tools.Error(`Unsupported Texture Wrap Mode ${kk}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(kk, ek, ik) {
        const Dk = {
            diffuseColor: kk._albedoColor,
            specularColor: kk._reflectivityColor,
            glossiness: kk._microSurface
          },
          fk = kk._albedoTexture,
          Sk = kk._reflectivityTexture,
          bk = kk._useMicroSurfaceFromReflectivityMapAlpha;
        if (Sk && !bk) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((fk || Sk) && ik) {
          this._exporter._materialNeedsUVsSet.add(kk);
          const ik = this._exportTextureSampler(fk || Sk),
            bk = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(fk, Sk, Dk),
            rk = this._exporter._textures;
          if (bk.baseColorTextureData) {
            const kk = await this._exportImageAsync(`baseColor${rk.length}`, bk.baseColorTextureData);
            ek.baseColorTexture = this._exportTextureInfo(kk, ik, fk?.coordinatesIndex)
          }
          if (bk.metallicRoughnessTextureData) {
            const kk = await this._exportImageAsync(`metallicRoughness${rk.length}`, bk.metallicRoughnessTextureData);
            ek.metallicRoughnessTexture = this._exportTextureInfo(kk, ik, Sk?.coordinatesIndex)
          }
          return bk
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Dk)
      }
      async exportPBRMaterialAsync(kk, ek) {
        const ik = {},
          Dk = {
            name: kk.name
          },
          fk = kk.isMetallicWorkflow();
        if (fk) {
          const ek = kk._albedoColor,
            Dk = kk.alpha;
          ek && (ik.baseColorFactor = [ek.r, ek.g, ek.b, Dk])
        }
        const Sk = fk ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(kk._albedoColor, kk._metallic, kk._roughness, kk._albedoTexture, kk._metallicTexture, kk._metallicTexture, kk, ik, ek) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(kk, ik, ek);
        await this._setMetallicRoughnessPbrMaterialAsync(Sk, kk, Dk, ik, ek), await this._finishMaterialAsync(Dk, kk);
        const bk = this._exporter._materials;
        return bk.push(Dk), bk.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(kk, ek, ik, Dk, Sk) {
        if (Fi(ik, ek), kk.baseColor.equalsWithEpsilon(Ai, Yi) && yk.WithinEpsilon(ek.alpha, 1, Yi) || (Dk.baseColorFactor = [kk.baseColor.r, kk.baseColor.g, kk.baseColor.b, ek.alpha]), null != kk.metallic && 1 !== kk.metallic && (Dk.metallicFactor = kk.metallic), null != kk.roughness && 1 !== kk.roughness && (Dk.roughnessFactor = kk.roughness), null == ek.backFaceCulling || ek.backFaceCulling || (ek._twoSidedLighting || fk.Tools.Warn(ek.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), ik.doubleSided = !0), Sk) {
          const kk = [],
            fk = ek instanceof Ae ? ek._bumpTexture : ek.geometryNormalTexture;
          fk && kk.push(this.exportTextureAsync(fk).then((kk => {
            kk && (ik.normalTexture = kk, 1 !== fk.level && (ik.normalTexture.scale = fk.level))
          })));
          const Sk = ek instanceof Ae ? ek._ambientTexture : ek.ambientOcclusionTexture;
          Sk && kk.push(new Promise((async kk => {
            if (ek instanceof Je && Dk.metallicRoughnessTexture) {
              const ek = this._exportTextureSampler(Sk),
                ik = this._exporter._textures[Dk.metallicRoughnessTexture.index].source,
                fk = this._exportTextureInfo(ik, ek, Sk.coordinatesIndex);
              return this._textureMap.set(Sk.uniqueId, fk), this._exporter._extensionsPostExportTextures("exporter", fk, Sk), kk(fk)
            }
            return kk(await this.exportTextureAsync(Sk))
          })).then((async kk => {
            if (kk) {
              const Dk = {
                index: kk.index,
                texCoord: kk.texCoord,
                extensions: kk.extensions
              };
              ik.occlusionTexture = Dk, Dk.strength = ek instanceof Ae ? ek._ambientTextureStrength : ek.ambientOcclusionTexture.level
            }
          })));
          const bk = ek instanceof Ae ? ek._emissiveTexture : ek.emissionColorTexture;
          bk && kk.push(this.exportTextureAsync(bk).then((kk => {
            kk && (ik.emissiveTexture = kk)
          }))), kk.length > 0 && (this._exporter._materialNeedsUVsSet.add(ek), await Promise.all(kk))
        }
        const bk = ek instanceof Ae ? ek._emissiveColor : ek.emissionColor;
        bk.equalsWithEpsilon(ji, Yi) || (ik.emissiveFactor = bk.Tik()), ik.pbrMetallicRoughness = Dk
      }
      async exportOpenPBRMaterialAsync(kk, ek) {
        const ik = {},
          Dk = {
            name: kk.name
          },
          fk = kk.baseColor,
          Sk = kk.geometryOpacity;
        fk && (ik.baseColorFactor = [fk.r, fk.g, fk.b, Sk]);
        const bk = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(kk.baseColor, kk.baseMetalness, kk.specularRoughness, kk.baseColorTexture, kk.baseMetalnessTexture, kk.specularRoughnessTexture, kk, ik, ek);
        await this._setMetallicRoughnessPbrMaterialAsync(bk, kk, Dk, ik, ek), await this._finishMaterialAsync(Dk, kk);
        const rk = this._exporter._materials;
        return rk.push(Dk), rk.length - 1
      }
      async exportTextureAsync(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = this._textureMap.get(ek ?? kk.uniqueId);
        if (ik) return ik;
        const Dk = this._exportTextureSampler(kk),
          fk = await this._exportTextureImageAsync(kk);
        return ik = this._exportTextureInfo(fk, Dk, kk.coordinatesIndex), this._textureMap.set(ek ?? kk.uniqueId, ik), this._exporter._extensionsPostExportTextures("exporter", ik, kk), ik
      }
      async _exportTextureImageAsync(kk) {
        const ek = kk.mimeType ?? "none",
          ik = this._internalTextureToImage,
          Dk = kk.getInternalTexture().uniqueId;
        ik[Dk] = ik[Dk] || {};
        let Sk = ik[Dk][ek];
        return void 0 === Sk && (Sk = (async () => {
          const ik = await yi(kk);
          if (ik && si(ik.mimeType) && ("none" === ek || ik.mimeType === ek)) return await this._exportImageAsync(kk.name, new Blob([ik.data], {
            type: ik.mimeType
          }));
          let Dk = "image/png";
          "none" !== ek && (si(ek) ? Dk = ek : (Dk = "image/png", fk.Tools.Warn(`Unsupported media type: ${ek}. Exporting texture as PNG.`)));
          const Sk = kk.getSize(),
            bk = await (0, Yk.e)(kk),
            rk = await (0, jk.EncodeImageAsync)(bk, Sk.width, Sk.height, Dk);
          return await this._exportImageAsync(kk.name, rk)
        })(), ik[Dk][ek] = Sk), await Sk
      }
      async _exportImageAsync(kk, ek) {
        const ik = this._exporter._images;
        let Dk;
        if (this._exporter._shouldUseGlb) {
          Dk = {
            name: kk,
            mimeType: ek.type,
            bufferView: void 0
          };
          const ik = await ek.arrayBuffer(),
            fk = this._exporter._bufferManager.createBufferView(new Uint8Array(ik));
          this._exporter._bufferManager.setBufferView(Dk, fk)
        } else {
          const Sk = kk.replace(/\.\/|\/|\.\\|\\/g, "_"),
            bk = function(kk) {
              switch (kk) {
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
            }(ek.type);
          let rk = Sk + bk;
          ik.some((kk => kk.uri === rk)) && (rk = `${Sk}_${fk.Tools.RandomId()}${bk}`), Dk = {
            name: kk,
            uri: rk
          }, this._exporter._imageData[rk] = ek
        }
        return ik.push(Dk), ik.length - 1
      }
      _exportTextureInfo(kk, ek, ik) {
        const Dk = this._exporter._textures;
        let fk = Dk.findIndex((ik => ik.sampler == ek && ik.source === kk)); - 1 === fk && (fk = Dk.length, Dk.push({
          source: kk,
          sampler: ek
        }));
        const Sk = {
          index: fk
        };
        return ik && (Sk.texCoord = ik), Sk
      }
      _exportTextureSampler(kk) {
        const ek = this._getTextureSampler(kk),
          ik = this._exporter._samplers,
          Dk = ik.findIndex((kk => kk.minFilter === ek.minFilter && kk.magFilter === ek.magFilter && kk.wrapS === ek.wrapS && kk.wrapT === ek.wrapT));
        return -1 !== Dk ? Dk : (ik.push(ek), ik.length - 1)
      }
    }
    var zi = ik(39623),
      Qi = ik(39778);
    (0, Qi.c)();
    var vi = ik(36703);
    const Ei = Dk.Matrix.Compose(new Dk.eH(-1, 1, 1), Dk.Quaternion.Identity(), Dk.eH.Zero());

    function ai(kk, ek) {
      if (!(kk instanceof Kk.b)) return !1;
      if (ek) {
        if (!kk.getWorldMatrix().equalsWithEpsilon(Dk.Matrix.IdentityReadOnly, vi.d)) return !1
      } else {
        if (!kk.getWorldMatrix().multiplyToRef(Ei, Dk.TmpVectors.Matrix[0]).equalsWithEpsilon(Dk.Matrix.IdentityReadOnly, vi.d)) return !1
      }
      return !(kk instanceof xk.d && kk.geometry)
    }
    const Wi = Dk.eH.ZeroReadOnly,
      ti = Dk.Quaternion.Identity(),
      Xi = Dk.eH.OneReadOnly,
      Bi = new Dk.eH(-1, 1, 1);

    function ci(kk, ek) {
      const {
        byteOffset: ik,
        byteStride: Dk,
        type: fk,
        normalized: Sk
      } = kk, bk = kk.getSize(), rk = ek.reduce(((kk, ek) => ek.getTotalVertices() > kk ? ek.getTotalVertices() : kk), -Number.MAX_VALUE);
      return {
        byteOffset: ik,
        byteStride: Dk,
        componentCount: bk,
        type: fk,
        count: rk * bk,
        normalized: Sk,
        totalVertices: rk,
        kind: kk.getKind()
      }
    }

    function Ti(kk) {
      switch (kk) {
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

    function oi(kk) {
      switch (kk) {
        case Mk.h.PositionKind:
        case Mk.h.NormalKind:
        case Mk.h.TangentKind:
        case Mk.h.ColorKind:
        case Mk.h.MatricesIndicesKind:
        case Mk.h.MatricesIndicesExtraKind:
        case Mk.h.MatricesWeightsKind:
        case Mk.h.MatricesWeightsExtraKind:
        case Mk.h.UVKind:
        case Mk.h.UV2Kind:
        case Mk.h.UV3Kind:
        case Mk.h.UV4Kind:
        case Mk.h.UV5Kind:
        case Mk.h.UV6Kind:
          return !0
      }
      return !1
    }

    function Zi(kk) {
      const ek = Math.sqrt(kk.x * kk.x + kk.y * kk.y + kk.z * kk.z);
      ek > 0 && (kk.x /= ek, kk.y /= ek, kk.z /= ek)
    }

    function Oi(kk) {
      return kk.x *= -1, kk
    }

    function gi(kk) {
      if (kk.x * kk.x + kk.y * kk.y > .5) {
        const ek = Math.abs(kk.x),
          ik = Math.abs(kk.y);
        if (ek > ik) {
          const ik = Math.sign(kk.x);
          kk.x = ek, kk.y *= -ik, kk.z *= -ik, kk.w *= ik
        } else {
          const ek = Math.sign(kk.y);
          kk.x *= -ek, kk.y = ik, kk.z *= ek, kk.w *= -ek
        }
      } else {
        const ek = Math.abs(kk.z),
          ik = Math.abs(kk.w);
        if (ek > ik) {
          const ik = Math.sign(kk.z);
          kk.x *= -ik, kk.y *= ik, kk.z = ek, kk.w *= -ik
        } else {
          const ek = Math.sign(kk.w);
          kk.x *= ek, kk.y *= -ek, kk.z *= -ek, kk.w = ik
        }
      }
      return kk
    }

    function Gi(kk) {
      kk.Z6(-kk.z, kk.w, kk.x, -kk.y)
    }

    function Ni(kk, ek) {
      const ik = Dk.eH.FromArrayToRef(ek.translation || [0, 0, 0], 0, Dk.TmpVectors.eH[0]),
        fk = Dk.Quaternion.FromArrayToRef(ek.rotation || [0, 0, 0, 1], 0, Dk.TmpVectors.Quaternion[0]),
        Sk = Dk.Matrix.ComposeToRef(Xi, fk, ik, Dk.TmpVectors.Matrix[0]),
        bk = Dk.eH.FromArrayToRef(kk.translation || [0, 0, 0], 0, Dk.TmpVectors.eH[2]),
        rk = Dk.Quaternion.FromArrayToRef(kk.rotation || [0, 0, 0, 1], 0, Dk.TmpVectors.Quaternion[1]),
        Pk = Dk.Matrix.ComposeToRef(Xi, rk, bk, Dk.TmpVectors.Matrix[1]);
      Sk.multiplyToRef(Pk, Pk), Pk.decompose(void 0, fk, ik), ik.equalsWithEpsilon(Wi, vi.d) ? delete ek.translation : ek.translation = ik.Tik(), fk.equalsWithEpsilon(ti, vi.d) ? delete ek.rotation : ek.rotation = fk.Tik(), ek.scale && delete ek.scale
    }

    function Ri(kk, ek) {
      if (!(ek instanceof Kk.b)) return !1;
      if (!(1 === ek.getChildren().length && 0 === kk.getChildren().length && kk.parent === ek)) return !1;
      const ik = kk.XF(),
        Dk = kk instanceof Qi.e && !ik.useRightHandedSystem ? Bi : Xi;
      return !!ek.wi.equalsWithEpsilon(Dk, vi.d) || (Vk.b.Warn(`Cannot collapse node ${kk.name} into parent node ${ek.name} with modified scaling.`), !1)
    }

    function Ji(kk) {
      if (kk instanceof Array) {
        const ek = new Float32Array(kk);
        return new Uint8Array(ek.buffer, ek.byteOffset, ek.byteLength)
      }
      return ArrayBuffer.isView(kk) ? new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength) : new Uint8Array(kk)
    }

    function kD(kk, ek) {
      for (const [ik, Dk] of Object.entries(kk)) {
        const fk = ek[ik];
        (Array.isArray(Dk) && Array.isArray(fk) && eD(Dk, fk) || Dk === fk) && delete kk[ik]
      }
      return kk
    }

    function eD(kk, ek) {
      return kk.length === ek.length && kk.every(((kk, ik) => kk === ek[ik]))
    }
    const iD = new Map([
      [Int8Array, (kk, ek, ik) => kk.setInt8(ek, ik)],
      [Uint8Array, (kk, ek, ik) => kk.setUint8(ek, ik)],
      [Uint8ClampedArray, (kk, ek, ik) => kk.setUint8(ek, ik)],
      [Int16Array, (kk, ek, ik) => kk.setInt16(ek, ik, !0)],
      [Uint16Array, (kk, ek, ik) => kk.setUint16(ek, ik, !0)],
      [Int32Array, (kk, ek, ik) => kk.setInt32(ek, ik, !0)],
      [Uint32Array, (kk, ek, ik) => kk.setUint32(ek, ik, !0)],
      [Float32Array, (kk, ek, ik) => kk.setFloat32(ek, ik, !0)],
      [Float64Array, (kk, ek, ik) => kk.setFloat64(ek, ik, !0)]
    ]);
    class DD {
      writeTypedArray(kk) {
        this._checkGrowBuffer(kk.byteLength);
        const ek = iD.get(kk.constructor);
        for (let ik = 0; ik < kk.length; ik++) ek(this._dataView, this._byteOffset, kk[ik]), this._byteOffset += kk.BYTES_PER_ELEMENT
      }
      constructor(kk) {
        this._data = new Uint8Array(kk), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(kk) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, kk), this._byteOffset++
      }
      writeInt8(kk) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, kk), this._byteOffset++
      }
      writeInt16(kk) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, kk, !0), this._byteOffset += 2
      }
      writeUInt16(kk) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, kk, !0), this._byteOffset += 2
      }
      writeInt32(kk) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, kk, !0), this._byteOffset += 4
      }
      writeUInt32(kk) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, kk, !0), this._byteOffset += 4
      }
      writeFloat32(kk) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, kk, !0), this._byteOffset += 4
      }
      writeFloat64(kk) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, kk, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(kk) {
        const ek = this.byteOffset + kk;
        if (ek > this._data.byteLength) {
          const kk = new Uint8Array(2 * ek);
          kk.set(this._data), this._data = kk, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function fD(kk) {
      return kk % 4 === 0 ? 4 : kk % 2 === 0 ? 2 : 1
    }
    class SD {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(kk) {
        let ek = 0;
        this._bufferViewToData.forEach((kk => {
          ek += kk.byteLength
        }));
        const ik = new DD(ek),
          Dk = Array.from(this._bufferViewToData.keys()).sort(((kk, ek) => fD(ek.byteLength) - fD(kk.byteLength)));
        for (const fk of Dk) {
          fk.byteOffset = ik.byteOffset, kk.push(fk);
          const ek = kk.length - 1,
            Dk = this.getPropertiesWithBufferView(fk);
          for (const kk of Dk) kk.bufferView = ek;
          ik.writeTypedArray(this._bufferViewToData.get(fk)), this._bufferViewToData.delete(fk)
        }
        return ik.getOutputData()
      }
      createBufferView(kk, ek) {
        const ik = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: kk.byteLength,
          byteStride: ek
        };
        return this._bufferViewToData.set(ik, kk), ik
      }
      createAccessor(kk, ek, ik, Dk, fk, Sk, bk) {
        this._verifyBufferView(kk);
        const rk = {
          bufferView: void 0,
          componentType: ik,
          count: Dk,
          type: ek,
          min: Sk?.min,
          max: Sk?.max,
          normalized: bk,
          byteOffset: fk
        };
        return this.setBufferView(rk, kk), this._accessorToBufferView.set(rk, kk), rk
      }
      setBufferView(kk, ek) {
        this._verifyBufferView(ek);
        this.getPropertiesWithBufferView(ek).push(kk)
      }
      removeBufferView(kk) {
        const ek = this.getPropertiesWithBufferView(kk);
        for (const ik of ek) void 0 !== ik.bufferView && delete ik.bufferView;
        this._bufferViewToData.delete(kk), this._bufferViewToProperties.delete(kk), this._accessorToBufferView.forEach(((ek, ik) => {
          ek === kk && (void 0 !== ik.byteOffset && delete ik.byteOffset, this._accessorToBufferView.delete(ik))
        }))
      }
      getBufferView(kk) {
        const ek = this._accessorToBufferView.get(kk);
        return this._verifyBufferView(ek), ek
      }
      getPropertiesWithBufferView(kk) {
        return this._verifyBufferView(kk), this._bufferViewToProperties.set(kk, this._bufferViewToProperties.get(kk) ?? []), this._bufferViewToProperties.get(kk)
      }
      getData(kk) {
        return this._verifyBufferView(kk), this._bufferViewToData.get(kk)
      }
      _verifyBufferView(kk) {
        if (void 0 === kk || !this._bufferViewToData.has(kk)) throw new Error(`BufferView ${kk} not found in BufferManager.`)
      }
    }
    var bD = ik(39782);
    (0, bD.f)();
    var rD = ik(40020);
    (0, rD.i)();
    var PD = ik(39829),
      mD = ik(40684);
    (0, mD.d)();
    let MD = (() => {
      var kk;
      let ek, ik, Dk = [],
        fk = [],
        Sk = [],
        bk = [];
      return kk = class {
        get influence() {
          return this._influence
        }
        set influence(kk) {
          if (this._influence === kk) return;
          const ek = this._influence;
          this._influence = kk, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === ek || 0 === kk)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(kk) {
          this._animationPropertiesOverride = kk
        }
        constructor(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = kk, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new ei.c, this._onDataLayoutChanged = new ei.c, this.id = (0, sk.e)(this, Dk, void 0), this.morphTargetManager = ((0, sk.e)(this, fk), (0, sk.e)(this, Sk, null)), this._animationPropertiesOverride = ((0, sk.e)(this, bk), null), this.id = kk, this.morphTargetManager = rk, this._scene = ik || Hk.e.LastCreatedScene, this.influence = ek, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        Ubk(kk) {
          const ek = this.hasPositions;
          this._positions = kk, ek !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(kk) {
          const ek = this.hasNormals;
          this._normals = kk, ek !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(kk) {
          const ek = this.hasTangents;
          this._tangents = kk, ek !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(kk) {
          const ek = this.hasUVs;
          this._uvs = kk, ek !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(kk) {
          const ek = this.hasUV2s;
          this._uv2s = kk, ek !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(kk) {
          const ek = this.hasColors;
          this._colors = kk, ek !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const ek = je.b.Clone((() => new kk(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return ek._positions = this._positions, ek._normals = this._normals, ek._tangents = this._tangents, ek._uvs = this._uvs, ek._uv2s = this._uv2s, ek._colors = this._colors, ek
        }
        serialize() {
          const kk = {};
          return kk.name = this.name, kk.influence = this.influence, null != this.id && (kk.id = this.id), kk.uniqueId = this.uniqueId, kk.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (kk.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (kk.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (kk.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (kk.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (kk.colors = Array.prototype.slice.call(this.getColors())), je.b.AppendSerializedAnimations(this, kk), kk
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(ek, ik) {
          let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const fk = new kk(ek.name, ek.influence, ik, Dk);
          if (fk.Ubk(ek.positions), null != ek.id && (fk.id = ek.id), ek.normals && fk.setNormals(ek.normals), ek.tangents && fk.setTangents(ek.tangents), ek.uvs && fk.setUVs(ek.uvs), ek.uv2s && fk.setUV2s(ek.uv2s), ek.colors && fk.setColors(ek.colors), ek.animations) {
            for (let kk = 0; kk < ek.animations.length; kk++) {
              const ik = ek.animations[kk],
                Dk = (0, Be.d)("BABYLON.Animation");
              Dk && fk.animations.push(Dk.Parse(ik))
            }
            ek.autoAnimate && ik && ik.beginAnimation(fk, ek.autoAnimateFrom, ek.autoAnimateTo, ek.autoAnimateLoop, ek.autoAnimateSpeed || 1)
          }
          return fk
        }
        static FromMesh(ek, ik, Dk) {
          ik || (ik = ek.name);
          const fk = new kk(ik, Dk, ek.XF(), ek.morphTargetManager);
          return fk.Ubk(ek.getVerticesData(Wk.e.PositionKind)), ek.isVerticesDataPresent(Wk.e.NormalKind) && fk.setNormals(ek.getVerticesData(Wk.e.NormalKind)), ek.isVerticesDataPresent(Wk.e.TangentKind) && fk.setTangents(ek.getVerticesData(Wk.e.TangentKind)), ek.isVerticesDataPresent(Wk.e.UVKind) && fk.setUVs(ek.getVerticesData(Wk.e.UVKind)), ek.isVerticesDataPresent(Wk.e.UV2Kind) && fk.setUV2s(ek.getVerticesData(Wk.e.UV2Kind)), ek.isVerticesDataPresent(Wk.e.ColorKind) && fk.setColors(ek.getVerticesData(Wk.e.ColorKind)), fk
        }
      }, (() => {
        const rk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [(0, dk.I)()], ik = [(0, dk.I)()], (0, sk.d)(null, null, ek, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: kk => "id" in kk,
            get: kk => kk.id,
            set: (kk, ek) => {
              kk.id = ek
            }
          },
          metadata: rk
        }, Dk, fk), (0, sk.d)(null, null, ik, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: kk => "morphTargetManager" in kk,
            get: kk => kk.morphTargetManager,
            set: (kk, ek) => {
              kk.morphTargetManager = ek
            }
          },
          metadata: rk
        }, Sk, bk), rk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rk
        })
      })(), kk
    })();
    var KD, xD = ik(40732),
      nD = ik(39822);
    ! function(kk) {
      kk[kk.INTANGENT = 0] = "INTANGENT", kk[kk.OUTTANGENT = 1] = "OUTTANGENT"
    }(KD || (KD = {}));
    class UD {
      static _IsTransformable(kk) {
        return kk && (kk instanceof Kk.b || kk instanceof bD.e || kk instanceof nD.d)
      }
      static _CreateNodeAnimation(kk, ek, ik, Dk, Sk) {
        if (this._IsTransformable(kk)) {
          const bk = [],
            rk = [],
            Pk = ek.getKeys(),
            mk = UD._CalculateMinMaxKeyFrames(Pk),
            Mk = UD._DeduceInterpolation(Pk, ik, Dk),
            Kk = Mk.interpolationType,
            xk = Mk.shouldBakeAnimation;
          if (xk ? UD._CreateBakedAnimation(kk, ek, ik, mk.min, mk.max, ek.framePerSecond, Sk, bk, rk, mk, Dk) : "LINEAR" === Kk || "STEP" === Kk ? UD._CreateLinearOrStepAnimation(kk, ek, ik, bk, rk, Dk) : "CUBICSPLINE" === Kk ? UD._CreateCubicSplineAnimation(kk, ek, ik, bk, rk, Dk) : UD._CreateBakedAnimation(kk, ek, ik, mk.min, mk.max, ek.framePerSecond, Sk, bk, rk, mk, Dk), bk.length && rk.length) {
            return {
              inputs: bk,
              outputs: rk,
              samplerInterpolation: Kk,
              inputsMin: xk ? mk.min : fk.Tools.FloatRound(mk.min / ek.framePerSecond),
              inputsMax: xk ? mk.max : fk.Tools.FloatRound(mk.max / ek.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(kk) {
        let ek = null,
          ik = "VEC3",
          Dk = !1;
        const Sk = kk.targetProperty.split(".");
        switch (Sk[0]) {
          case "wi":
            ek = "scale";
            break;
          case "position":
            ek = "translation";
            break;
          case "rotation":
            ik = "VEC4", ek = "rotation";
            break;
          case "rotationQuaternion":
            ik = "VEC4", Dk = !0, ek = "rotation";
            break;
          case "influence":
            ik = "SCALAR", ek = "weights";
            break;
          default:
            fk.Tools.Error(`Unsupported animatable property ${Sk[0]}`)
        }
        return ek ? {
          animationChannelTargetPath: ek,
          dataAccessorType: ik,
          useQuaternion: Dk
        } : (fk.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk) {
        let Kk;
        if (UD._IsTransformable(kk) && kk.animations)
          for (const xk of kk.animations) {
            if (Mk && !Mk(xk)) continue;
            const fk = UD._DeduceAnimationInfo(xk);
            fk && (Kk = {
              name: xk.name,
              samplers: [],
              channels: []
            }, UD._AddAnimation(`${xk.name}`, xk.hasRunningRuntimeAnimations ? ek : Kk, kk, xk, fk.dataAccessorType, fk.animationChannelTargetPath, Dk, Sk, bk, rk, fk.useQuaternion, Pk, mk), Kk.samplers.length && Kk.channels.length && ik.push(Kk))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk) {
        let Kk;
        if (kk instanceof xD.d) {
          const fk = kk.morphTargetManager;
          if (fk)
            for (let xk = 0; xk < fk.numTargets; ++xk) {
              const nk = fk.getTarget(xk);
              for (const Uk of nk.animations) {
                if (Mk && !Mk(Uk)) continue;
                const nk = new mD.b(`${Uk.name}`, "influence", Uk.framePerSecond, Uk.dataType, Uk.zi, Uk.enableBlending),
                  Hk = [],
                  wk = Uk.getKeys();
                for (let kk = 0; kk < wk.length; ++kk) {
                  const ek = wk[kk];
                  for (let kk = 0; kk < fk.numTargets; ++kk) kk == xk ? Hk.push(ek) : Hk.push({
                    frame: ek.frame,
                    value: 0
                  })
                }
                nk.setKeys(Hk, !0);
                const lk = UD._DeduceAnimationInfo(nk);
                lk && (Kk = {
                  name: nk.name,
                  samplers: [],
                  channels: []
                }, UD._AddAnimation(Uk.name, Uk.hasRunningRuntimeAnimations ? ek : Kk, kk, nk, lk.dataAccessorType, lk.animationChannelTargetPath, Dk, Sk, bk, rk, lk.useQuaternion, Pk, mk, fk.numTargets), Kk.samplers.length && Kk.channels.length && ik.push(Kk))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
        let Mk;
        if (kk.animationGroups) {
          const Kk = kk.animationGroups;
          for (const xk of Kk) {
            const Kk = new Map,
              nk = new Map,
              Uk = new Set,
              Hk = xk.to - xk.from;
            Mk = {
              name: xk.name,
              channels: [],
              samplers: []
            };
            for (let ek = 0; ek < xk.targetedAnimations.length; ++ek) {
              const mk = xk.targetedAnimations[ek],
                Hk = mk.target,
                wk = mk.animation;
              if (Pk && !Pk(wk)) continue;
              const lk = rk.has(Hk);
              if (this._IsTransformable(Hk) || 1 === Hk.length && this._IsTransformable(Hk[0])) {
                const kk = UD._DeduceAnimationInfo(mk.animation);
                if (kk) {
                  const ek = this._IsTransformable(Hk) ? Hk : this._IsTransformable(Hk[0]) ? Hk[0] : null;
                  ek && UD._AddAnimation(`${wk.name}`, Mk, ek, wk, kk.dataAccessorType, kk.animationChannelTargetPath, ik, Dk, fk, Sk, kk.useQuaternion, bk, lk)
                }
              } else if (Hk instanceof MD || 1 === Hk.length && Hk[0] instanceof MD) {
                if (UD._DeduceAnimationInfo(mk.animation)) {
                  const ek = Hk instanceof MD ? Hk : Hk[0];
                  if (ek) {
                    const ik = kk.morphTargetManagers.find((kk => {
                      for (let ik = 0; ik < kk.numTargets; ++ik)
                        if (kk.getTarget(ik) === ek) return !0;
                      return !1
                    }));
                    if (ik) {
                      const Dk = kk.meshes.find((kk => kk.morphTargetManager === ik));
                      Dk && (Kk.has(Dk) || Kk.set(Dk, new Map), Kk.get(Dk)?.set(ek, wk), Uk.add(Dk), nk.set(Dk, wk))
                    }
                  }
                }
              }
            }
            Uk.forEach((kk => {
              const ek = kk.morphTargetManager;
              let rk = null;
              const Pk = [],
                mk = nk.get(kk).getKeys(),
                Uk = mk.length;
              for (let ik = 0; ik < Uk; ++ik)
                for (let Dk = 0; Dk < ek.numTargets; ++Dk) {
                  const fk = ek.getTarget(Dk),
                    Sk = Kk.get(kk);
                  if (Sk) {
                    const ek = Sk.get(fk);
                    ek ? (rk || (rk = new mD.b(`${xk.name}_${kk.name}_MorphWeightAnimation`, "influence", ek.framePerSecond, mD.b.ANIMATIONTYPE_FLOAT, ek.zi, ek.enableBlending)), Pk.push(ek.getKeys()[ik])) : Pk.push({
                      frame: xk.from + Hk / Uk * ik,
                      value: fk.influence,
                      inTangent: mk[0].inTangent ? 0 : void 0,
                      outTangent: mk[0].outTangent ? 0 : void 0
                    })
                  }
                }
              rk.setKeys(Pk, !0);
              const wk = UD._DeduceAnimationInfo(rk);
              wk && UD._AddAnimation(`${xk.name}_${kk.name}_MorphWeightAnimation`, Mk, kk, rk, wk.dataAccessorType, wk.animationChannelTargetPath, ik, Dk, fk, Sk, wk.useQuaternion, bk, !1, ek?.numTargets)
            })), Mk.channels.length && Mk.samplers.length && (mk?.set(xk, ek.length), ek.push(Mk))
          }
        }
      }
      static _AddAnimation(kk, ek, ik, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk) {
        const Hk = UD._CreateNodeAnimation(ik, fk, bk, Kk, xk);
        let wk, lk, pk, yk, Yk, Lk;
        if (Hk) {
          if (Uk) {
            let kk, ek = 0;
            const ik = [];
            for (; Hk.inputs.length > 0;) kk = Hk.inputs.shift(), ek % Uk == 0 && ik.push(kk), ek++;
            Hk.inputs = ik
          }
          const kk = rk.get(ik),
            fk = new Float32Array(Hk.inputs);
          wk = Pk.createBufferView(fk), lk = Pk.createAccessor(wk, "SCALAR", 5126, Hk.inputs.length, void 0, {
            min: [Hk.inputsMin],
            max: [Hk.inputsMax]
          }), Mk.push(lk), pk = Mk.length - 1;
          const mk = new Dk.Quaternion,
            Kk = new Dk.eH,
            xk = new Dk.eH,
            Ck = ik instanceof bD.e,
            Ak = Ti(Sk),
            jk = new Float32Array(Hk.outputs.length * Ak);
          Hk.outputs.forEach((function(kk, ek) {
            let ik = kk;
            switch (bk) {
              case "translation":
                nk && (Dk.eH.FromArrayToRef(kk, 0, xk), Oi(xk), xk.toArray(ik));
                break;
              case "rotation":
                4 === kk.length ? Dk.Quaternion.FromArrayToRef(kk, 0, mk) : (ik = new Array(4), Dk.eH.FromArrayToRef(kk, 0, Kk), Dk.Quaternion.FromEulerVectorToRef(Kk, mk)), nk && (gi(mk), Ck && Gi(mk)), mk.toArray(ik)
            }
            jk.set(ik, ek * Ak)
          })), wk = Pk.createBufferView(jk), lk = Pk.createAccessor(wk, Sk, 5126, Hk.outputs.length), Mk.push(lk), yk = Mk.length - 1, Yk = {
            interpolation: Hk.samplerInterpolation,
            input: pk,
            output: yk
          }, ek.samplers.push(Yk), Lk = {
            sampler: ek.samplers.length - 1,
            target: {
              node: kk,
              path: bk
            }
          }, ek.channels.push(Lk)
        }
      }
      static _CreateBakedAnimation(kk, ek, ik, Sk, bk, rk, Pk, mk, Mk, Kk, xk) {
        let nk;
        const Uk = Dk.Quaternion.Identity();
        let Hk, wk, lk, pk, yk, Yk = null,
          Lk = null;
        Kk.min = fk.Tools.FloatRound(Sk / rk);
        const Ck = ek.getKeys();
        for (let Dk = 0, Ak = Ck.length; Dk < Ak; ++Dk) {
          if (wk = Ck[Dk], Dk + 1 < Ak)
            if (lk = Ck[Dk + 1], wk.value.equals && wk.value.equals(lk.value) || wk.value === lk.value) {
              if (0 !== Dk) continue;
              yk = wk.frame
            } else yk = lk.frame;
          else {
            if (pk = Ck[Dk - 1], wk.value.equals && wk.value.equals(pk.value) || wk.value === pk.value) continue;
            yk = bk
          }
          if (yk)
            for (let Dk = wk.frame; Dk <= yk; Dk += Pk) {
              if (Hk = fk.Tools.FloatRound(Dk / rk), Hk === Yk) continue;
              Yk = Hk, Lk = Hk;
              const Sk = {
                key: 0,
                repeatCount: 0,
                zi: ek.zi
              };
              nk = ek._interpolate(Dk, Sk), UD._SetInterpolatedValue(kk, nk, Hk, ek, ik, Uk, mk, Mk, xk)
            }
        }
        Lk && (Kk.max = Lk)
      }
      static _ConvertFactorToVector3OrQuaternion(kk, ek, ik, Sk, bk) {
        const rk = UD._GetBasePositionRotationOrScale(ek, Sk, bk),
          Pk = ik.targetProperty.split("."),
          mk = Pk ? Pk[1] : "",
          Mk = bk ? Dk.Quaternion.FromArray(rk).normalize() : Dk.eH.FromArray(rk);
        switch (mk) {
          case "x":
          case "y":
          case "z":
            Mk[mk] = kk;
            break;
          case "w":
            Mk.w = kk;
            break;
          default:
            fk.Tools.Error(`glTFAnimation: Unsupported component name "${mk}"!`)
        }
        return Mk
      }
      static _SetInterpolatedValue(kk, ek, ik, fk, Sk, bk, rk, Pk, mk) {
        let Mk;
        rk.push(ik), "weights" !== Sk ? (fk.dataType === mD.b.ANIMATIONTYPE_FLOAT && (ek = this._ConvertFactorToVector3OrQuaternion(ek, kk, fk, Sk, mk)), "rotation" === Sk ? (mk ? bk = ek : (Mk = ek, Dk.Quaternion.RotationYawPitchRollToRef(Mk.y, Mk.x, Mk.z, bk)), Pk.push(bk.Tik())) : (Mk = ek, Pk.push(Mk.Tik()))) : Pk.push([ek])
      }
      static _CreateLinearOrStepAnimation(kk, ek, ik, Dk, fk, Sk) {
        for (const bk of ek.getKeys()) Dk.push(bk.frame / ek.framePerSecond), UD._AddKeyframeValue(bk, ek, fk, ik, kk, Sk)
      }
      static _CreateCubicSplineAnimation(kk, ek, ik, Dk, fk, Sk) {
        ek.getKeys().forEach((function(bk) {
          Dk.push(bk.frame / ek.framePerSecond), UD._AddSplineTangent(KD.INTANGENT, fk, ik, "CUBICSPLINE", bk, Sk), UD._AddKeyframeValue(bk, ek, fk, ik, kk, Sk), UD._AddSplineTangent(KD.OUTTANGENT, fk, ik, "CUBICSPLINE", bk, Sk)
        }))
      }
      static _GetBasePositionRotationOrScale(kk, ek, ik) {
        let fk;
        if ("rotation" === ek)
          if (ik) {
            fk = (kk.rotationQuaternion ?? Dk.Quaternion.Identity()).Tik()
          } else {
            fk = (kk.rotation ?? Dk.eH.Zero()).Tik()
          }
        else if ("translation" === ek) {
          fk = (kk.position ?? Dk.eH.Zero()).Tik()
        } else {
          fk = (kk.wi ?? Dk.eH.One()).Tik()
        }
        return fk
      }
      static _AddKeyframeValue(kk, ek, ik, Sk, bk, rk) {
        let Pk;
        const mk = ek.dataType;
        if (mk === mD.b.ANIMATIONTYPE_VECTOR3) {
          let ek = kk.value.Tik();
          if ("rotation" === Sk) {
            const kk = Dk.eH.FromArray(ek);
            ek = Dk.Quaternion.RotationYawPitchRoll(kk.y, kk.x, kk.z).Tik()
          }
          ik.push(ek)
        } else if (mk === mD.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === Sk) ik.push([kk.value]);
          else if (Pk = this._ConvertFactorToVector3OrQuaternion(kk.value, bk, ek, Sk, rk), Pk) {
            if ("rotation" === Sk) {
              const kk = rk ? Pk : Dk.Quaternion.RotationYawPitchRoll(Pk.y, Pk.x, Pk.z).normalize();
              ik.push(kk.Tik())
            }
            ik.push(Pk.Tik())
          }
        } else mk === mD.b.ANIMATIONTYPE_QUATERNION ? ik.push(kk.value.normalize().Tik()) : fk.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(kk, ek, ik) {
        let Dk, fk, Sk = !1;
        if ("rotation" === ek && !ik) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let bk = 0, rk = kk.length; bk < rk; ++bk)
          if (fk = kk[bk], fk.inTangent || fk.outTangent)
            if (Dk) {
              if ("CUBICSPLINE" !== Dk) {
                Dk = "LINEAR", Sk = !0;
                break
              }
            } else Dk = "CUBICSPLINE";
        else if (Dk) {
          if ("CUBICSPLINE" === Dk || fk.interpolation && 1 === fk.interpolation && "STEP" !== Dk) {
            Dk = "LINEAR", Sk = !0;
            break
          }
        } else Dk = fk.interpolation && 1 === fk.interpolation ? "STEP" : "LINEAR";
        return Dk || (Dk = "LINEAR"), {
          interpolationType: Dk,
          shouldBakeAnimation: Sk
        }
      }
      static _AddSplineTangent(kk, ek, ik, fk, Sk, bk) {
        let rk;
        const Pk = kk === KD.INTANGENT ? Sk.inTangent : Sk.outTangent;
        if ("CUBICSPLINE" === fk) {
          if ("rotation" === ik)
            if (Pk)
              if (bk) rk = Pk.Tik();
              else {
                const kk = Pk;
                rk = Dk.Quaternion.RotationYawPitchRoll(kk.y, kk.x, kk.z).Tik()
              }
          else rk = [0, 0, 0, 0];
          else rk = "weights" === ik ? Pk ? [Pk] : [0] : Pk ? Pk.Tik() : [0, 0, 0];
          ek.push(rk)
        }
      }
      static _CalculateMinMaxKeyFrames(kk) {
        let ek = 1 / 0,
          ik = -1 / 0;
        return kk.forEach((function(kk) {
          ek = Math.min(ek, kk.frame), ik = Math.max(ik, kk.frame)
        })), {
          min: ek,
          max: ik
        }
      }
    }

    function HD(kk, ek, ik, Sk, bk, rk) {
      const Pk = {
          attributes: {},
          influence: kk.influence,
          name: kk.name
        },
        mk = ek.geometry;
      if (!mk) return fk.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), Pk;
      const Kk = rk ? -1 : 1,
        xk = Dk.eH.Zero();
      let nk, Uk;
      if (kk.hasPositions) {
        const Sk = kk.getPositions(),
          rk = mk.getVerticesData(Mk.h.PositionKind);
        if (rk) {
          const kk = new Float32Array(rk.length),
            ek = [1 / 0, 1 / 0, 1 / 0],
            fk = [-1 / 0, -1 / 0, -1 / 0];
          Uk = rk.length / 3, nk = 0;
          for (let ik = nk; ik < Uk; ++ik) {
            const bk = Dk.eH.FromArray(rk, 3 * ik);
            Dk.eH.FromArray(Sk, 3 * ik).subtractToRef(bk, xk), xk.x *= Kk, ek[0] = Math.min(ek[0], xk.x), fk[0] = Math.max(fk[0], xk.x), ek[1] = Math.min(ek[1], xk.y), fk[1] = Math.max(fk[1], xk.y), ek[2] = Math.min(ek[2], xk.z), fk[2] = Math.max(fk[2], xk.z), kk[3 * ik] = xk.x, kk[3 * ik + 1] = xk.y, kk[3 * ik + 2] = xk.z
          }
          const mk = ik.createBufferView(kk, 12),
            Mk = ik.createAccessor(mk, "VEC3", 5126, Sk.length / 3, 0, {
              min: ek,
              max: fk
            });
          bk.push(Mk), Pk.attributes.POSITION = bk.length - 1
        } else fk.Tools.Warn(`Morph target positions for mesh ${ek.name} were not exported. Mesh does not have position vertex data`)
      }
      if (kk.hasNormals) {
        const Sk = kk.getNormals(),
          rk = mk.getVerticesData(Mk.h.NormalKind);
        if (rk) {
          const kk = new Float32Array(rk.length);
          Uk = rk.length / 3, nk = 0;
          for (let ik = nk; ik < Uk; ++ik) {
            const ek = Dk.eH.FromArray(rk, 3 * ik).normalize();
            Dk.eH.FromArray(Sk, 3 * ik).normalize().subtractToRef(ek, xk), kk[3 * ik] = xk.x * Kk, kk[3 * ik + 1] = xk.y, kk[3 * ik + 2] = xk.z
          }
          const ek = ik.createBufferView(kk, 12),
            fk = ik.createAccessor(ek, "VEC3", 5126, Sk.length / 3, 0);
          bk.push(fk), Pk.attributes.NORMAL = bk.length - 1
        } else fk.Tools.Warn(`Morph target normals for mesh ${ek.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (kk.hasTangents) {
        const Sk = kk.getTangents(),
          rk = mk.getVerticesData(Mk.h.TangentKind);
        if (rk) {
          Uk = rk.length / 4;
          const kk = new Float32Array(3 * Uk);
          nk = 0;
          for (let ik = nk; ik < Uk; ++ik) {
            const ek = Dk.eH.FromArray(rk, 4 * ik);
            Zi(ek);
            const fk = Dk.eH.FromArray(Sk, 3 * ik);
            Zi(fk), fk.subtractToRef(ek, xk), kk[3 * ik] = xk.x * Kk, kk[3 * ik + 1] = xk.y, kk[3 * ik + 2] = xk.z
          }
          const ek = ik.createBufferView(kk, 12),
            fk = ik.createAccessor(ek, "VEC3", 5126, Uk, 0);
          bk.push(fk), Pk.attributes.TANGENT = bk.length - 1
        } else fk.Tools.Warn(`Morph target tangents for mesh ${ek.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (kk.hasColors) {
        const Sk = kk.getColors(),
          rk = mk.getVerticesData(Mk.h.ColorKind),
          Kk = mk.getVertexBuffer(Mk.h.ColorKind);
        if (rk && Kk) {
          const kk = Kk.getSize();
          Uk = rk.length / kk;
          const ek = new Float32Array(Uk * kk);
          nk = 0;
          for (let ik = nk; ik < Uk; ++ik)
            if (3 === kk) {
              const fk = Dk.eH.FromArray(rk, ik * kk);
              Dk.eH.FromArray(Sk, ik * kk).subtractToRef(fk, xk), ek[3 * ik] = xk.x, ek[3 * ik + 1] = xk.y, ek[3 * ik + 2] = xk.z
            } else if (4 === kk) {
            const fk = new Dk.Vector4,
              bk = Dk.Vector4.FromArray(rk, ik * kk);
            Dk.Vector4.FromArray(Sk, ik * kk).subtractToRef(bk, fk), ek[4 * ik] = fk.x, ek[4 * ik + 1] = fk.y, ek[4 * ik + 2] = fk.z, ek[4 * ik + 3] = fk.w
          } else fk.Tools.Warn(`Unsupported number of components for color attribute: ${kk}`);
          const mk = ik.createBufferView(ek, 4 * kk),
            Mk = ik.createAccessor(mk, 3 === kk ? "VEC3" : "VEC4", 5126, Uk, 0);
          bk.push(Mk), Pk.attributes.COLOR_0 = bk.length - 1
        } else fk.Tools.Warn(`Morph target colors for mesh ${ek.name} were not exported. Mesh does not have colors vertex data`)
      }
      return Pk
    }
    var wD = ik(41151);
    class lD {}
    lD.DEFAULT_COLOR = Zk.e.White(), lD.DEFAULT_WIDTH_ATTENUATED = 1, lD.DEFAULT_WIDTH = .1;
    var pD = ik(40679);
    class yD {
      constructor(kk) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = kk
      }
      moveTo(kk, ek) {
        this._currentPath = new pD.g(kk, ek), this._tempPaths.push(this._currentPath)
      }
      lineTo(kk, ek) {
        this._currentPath.addLineTo(kk, ek)
      }
      quadraticCurveTo(kk, ek, ik, Dk) {
        this._currentPath.addQuadraticCurveTo(kk, ek, ik, Dk, this._resolution)
      }
      bezierCurveTo(kk, ek, ik, Dk, fk, Sk) {
        this._currentPath.addBezierCurveTo(kk, ek, ik, Dk, fk, Sk, this._resolution)
      }
      extractHoles() {
        for (const kk of this._tempPaths) kk.area() > 0 ? this._holes.push(kk) : this._paths.push(kk);
        if (!this._paths.length && this._holes.length) {
          const kk = this._holes;
          this._holes = this._paths, this._paths = kk
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

    function YD(kk, ek, ik, Dk, fk, Sk) {
      const bk = Sk.glyphs[kk] || Sk.glyphs["?"];
      if (!bk) return null;
      const rk = new yD(fk);
      if (bk.o) {
        const kk = bk.o.split(" ");
        for (let fk = 0, Sk = kk.length; fk < Sk;) {
          switch (kk[fk++]) {
            case "m": {
              const Sk = parseInt(kk[fk++]) * ek + ik,
                bk = parseInt(kk[fk++]) * ek + Dk;
              rk.moveTo(Sk, bk);
              break
            }
            case "l": {
              const Sk = parseInt(kk[fk++]) * ek + ik,
                bk = parseInt(kk[fk++]) * ek + Dk;
              rk.lineTo(Sk, bk);
              break
            }
            case "q": {
              const Sk = parseInt(kk[fk++]) * ek + ik,
                bk = parseInt(kk[fk++]) * ek + Dk,
                Pk = parseInt(kk[fk++]) * ek + ik,
                mk = parseInt(kk[fk++]) * ek + Dk;
              rk.quadraticCurveTo(Pk, mk, Sk, bk);
              break
            }
            case "b": {
              const Sk = parseInt(kk[fk++]) * ek + ik,
                bk = parseInt(kk[fk++]) * ek + Dk,
                Pk = parseInt(kk[fk++]) * ek + ik,
                mk = parseInt(kk[fk++]) * ek + Dk,
                Mk = parseInt(kk[fk++]) * ek + ik,
                Kk = parseInt(kk[fk++]) * ek + Dk;
              rk.bezierCurveTo(Pk, mk, Mk, Kk, Sk, bk);
              break
            }
          }
        }
      }
      return rk.extractHoles(), {
        offsetX: bk.ha * ek,
        shapePath: rk
      }
    }

    function LD(kk, ek, ik, Dk) {
      const fk = Array.from(kk),
        Sk = ek / Dk.resolution,
        bk = (Dk.boundingBox.yMax - Dk.boundingBox.yMin + Dk.underlineThickness) * Sk,
        rk = [];
      let Pk = 0,
        mk = 0;
      for (let Mk = 0; Mk < fk.length; Mk++) {
        const kk = fk[Mk];
        if ("\n" === kk) Pk = 0, mk -= bk;
        else {
          const ek = YD(kk, Sk, Pk, mk, ik, Dk);
          ek && (Pk += ek.offsetX, rk.push(ek.shapePath))
        }
      }
      return rk
    }
    class CD {
      static ConvertPoints(kk, ek) {
        if (kk.length && Array.isArray(kk) && "number" === typeof kk[0]) return [kk];
        if (kk.length && Array.isArray(kk[0]) && "number" === typeof kk[0][0]) return kk;
        if (kk.length && !Array.isArray(kk[0]) && kk[0] instanceof ak.o) {
          const ek = [];
          for (let ik = 0; ik < kk.length; ik++) {
            const Dk = kk[ik];
            ek.push(Dk.x, Dk.y, Dk.z)
          }
          return [ek]
        }
        if (kk.length > 0 && Array.isArray(kk[0]) && kk[0].length > 0 && kk[0][0] instanceof ak.o) {
          const ek = [],
            ik = kk;
          for (const kk of ik) ek.push(kk.flatMap((kk => [kk.x, kk.y, kk.z])));
          return ek
        }
        if (kk instanceof Float32Array) {
          if (ek?.floatArrayStride) {
            const ik = [],
              Dk = 3 * ek.floatArrayStride;
            for (let ek = 0; ek < kk.length; ek += Dk) {
              const fk = new Array(Dk);
              for (let ik = 0; ik < Dk; ik++) fk[ik] = kk[ek + ik];
              ik.push(fk)
            }
            return ik
          }
          return [Array.from(kk)]
        }
        if (kk.length && kk[0] instanceof Float32Array) {
          const ek = [];
          for (const ik of kk) ek.push(Array.from(ik));
          return ek
        }
        return []
      }
      static OmitZeroLengthPredicate(kk, ek, ik) {
        const Dk = [];
        return ek.subtract(kk).lengthSquared() > 0 && Dk.push([kk, ek]), ik.subtract(ek).lengthSquared() > 0 && Dk.push([ek, ik]), kk.subtract(ik).lengthSquared() > 0 && Dk.push([ik, kk]), 0 === Dk.length ? null : Dk
      }
      static OmitDuplicatesPredicate(kk, ek, ik, Dk) {
        const fk = [];
        return CD._SearchInPoints(kk, ek, Dk) || fk.push([kk, ek]), CD._SearchInPoints(ek, ik, Dk) || fk.push([ek, ik]), CD._SearchInPoints(ik, kk, Dk) || fk.push([ik, kk]), 0 === fk.length ? null : fk
      }
      static _SearchInPoints(kk, ek, ik) {
        for (const Dk of ik)
          for (let ik = 0; ik < Dk.length; ik++)
            if (Dk[ik]?.equals(kk) && (Dk[ik + 1]?.equals(ek) || Dk[ik - 1]?.equals(ek))) return !0;
        return !1
      }
      static MeshesToLines(kk, ek) {
        const ik = [];
        for (let Dk = 0; Dk < kk.length; Dk++) {
          const fk = kk[Dk],
            Sk = fk.getVerticesData(Wk.e.PositionKind),
            bk = fk.oik();
          if (Sk && bk)
            for (let kk = 0, rk = 0; kk < bk.length; kk++) {
              const Pk = 3 * bk[rk++],
                mk = 3 * bk[rk++],
                Mk = 3 * bk[rk++],
                Kk = new ak.o(Sk[Pk], Sk[Pk + 1], Sk[Pk + 2]),
                xk = new ak.o(Sk[mk], Sk[mk + 1], Sk[mk + 2]),
                nk = new ak.o(Sk[Mk], Sk[Mk + 1], Sk[Mk + 2]);
              if (ek) {
                const rk = ek(Kk, xk, nk, ik, kk, Pk, fk, Dk, Sk, bk);
                if (rk)
                  for (const kk of rk) ik.push(kk)
              } else ik.push([Kk, xk], [xk, nk], [nk, Kk])
            }
        }
        return ik
      }
      static ToVector3Array(kk) {
        if (Array.isArray(kk[0])) {
          const ek = [],
            ik = kk;
          for (const kk of ik) {
            const ik = [];
            for (let ek = 0; ek < kk.length; ek += 3) ik.push(new ak.o(kk[ek], kk[ek + 1], kk[ek + 2]));
            ek.push(ik)
          }
          return ek
        }
        const ek = kk,
          ik = [];
        for (let Dk = 0; Dk < ek.length; Dk += 3) ik.push(new ak.o(ek[Dk], ek[Dk + 1], ek[Dk + 2]));
        return ik
      }
      static ToNumberArray(kk) {
        return kk.flatMap((kk => [kk.x, kk.y, kk.z]))
      }
      static GetPointsCountInfo(kk) {
        const ek = new Array(kk.length);
        let ik = 0;
        for (let Dk = kk.length; Dk--;) ek[Dk] = kk[Dk].length / 3, ik += ek[Dk];
        return {
          total: ik,
          counts: ek
        }
      }
      static GetLineLength(kk) {
        if (0 === kk.length) return 0;
        let ek;
        ek = "number" === typeof kk[0] ? CD.ToVector3Array(kk) : kk;
        const ik = ak.j.eH[0];
        let Dk = 0;
        for (let fk = 0; fk < ek.length - 1; fk++) {
          const kk = ek[fk];
          Dk += ek[fk + 1].subtractToRef(kk, ik).length()
        }
        return Dk
      }
      static GetLineLengthArray(kk, ek) {
        const ik = ek ? new Float32Array(ek, 0, kk.length / 3) : new Float32Array(kk.length / 3);
        let Dk = 0;
        for (let fk = 0, Sk = kk.length / 3 - 1; fk < Sk; fk++) {
          let ek = kk[3 * fk + 0],
            Sk = kk[3 * fk + 1],
            bk = kk[3 * fk + 2];
          ek -= kk[3 * fk + 3], Sk -= kk[3 * fk + 4], bk -= kk[3 * fk + 5];
          Dk += Math.sqrt(ek * ek + Sk * Sk + bk * bk), ik[fk + 1] = Dk
        }
        return ik
      }
      static SegmentizeSegmentByCount(kk, ek, ik) {
        const Dk = [],
          fk = ek.subtract(kk),
          Sk = ak.j.eH[0];
        Sk.A_(ik);
        const bk = ak.j.eH[1];
        fk.divideToRef(Sk, bk);
        let rk = kk.clone();
        Dk.push(rk);
        for (let Pk = 0; Pk < ik; Pk++) rk = rk.clone(), Dk.push(rk.addInPlace(bk));
        return Dk
      }
      static SegmentizeLineBySegmentLength(kk, ek) {
        const ik = kk[0] instanceof ak.o ? CD.GetLineSegments(kk) : "number" === typeof kk[0] ? CD.GetLineSegments(CD.ToVector3Array(kk)) : kk,
          Dk = [];
        for (const fk of ik)
          if (fk.length > ek) {
            const kk = CD.SegmentizeSegmentByCount(fk.point1, fk.point2, Math.ceil(fk.length / ek));
            for (const ek of kk) Dk.push(ek)
          } else Dk.push(fk.point1), Dk.push(fk.point2);
        return Dk
      }
      static SegmentizeLineBySegmentCount(kk, ek) {
        const ik = "number" === typeof kk[0] ? CD.ToVector3Array(kk) : kk,
          Dk = CD.GetLineLength(ik) / ek;
        return CD.SegmentizeLineBySegmentLength(ik, Dk)
      }
      static GetLineSegments(kk) {
        const ek = [];
        for (let ik = 0; ik < kk.length - 1; ik++) {
          const Dk = kk[ik],
            fk = kk[ik + 1],
            Sk = fk.subtract(Dk).length();
          ek.push({
            point1: Dk,
            point2: fk,
            length: Sk
          })
        }
        return ek
      }
      static GetMinMaxSegmentLength(kk) {
        const ek = CD.GetLineSegments(kk).sort((kk => kk.length));
        return {
          min: ek[0].length,
          max: ek[ek.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const fk = ek * ik;
        let Sk = 0,
          bk = 0;
        const rk = kk.length;
        for (let mk = 0; mk < rk; mk++) {
          if (fk <= Sk + kk[mk].length) {
            bk = mk;
            break
          }
          Sk += kk[mk].length
        }
        const Pk = (fk - Sk) / kk[bk].length;
        return kk[bk].point2.subtractToRef(kk[bk].point1, ak.j.eH[0]), ak.j.eH[0].scaleToRef(Pk, ak.j.eH[1]), Dk || ak.j.eH[1].addInPlace(kk[bk].point1), ak.j.eH[1].clone()
      }
      static GetCircleLinePoints(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk,
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / ek;
        const Sk = [];
        for (let bk = 0; bk <= ek; bk++) Sk.push(new ak.o(Math.cos(bk * fk) * kk, Math.sin(bk * fk) * Dk, ik));
        return Sk
      }
      static GetBezierLinePoints(kk, ek, ik, Dk) {
        return pD.e.CreateQuadraticBezier(kk, ek, ik, Dk).getPoints().flatMap((kk => [kk.x, kk.y, kk.z]))
      }
      static GetArrowCap(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [kk.clone(), kk.add(ek.multiplyByFloats(ik, ik, ik))],
          widths: [Dk, fk, Sk, bk]
        }
      }
      static GetPointsFromText(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const bk = [],
          rk = LD(kk, ek, ik, Dk);
        for (const Pk of rk) {
          for (const kk of Pk.paths) {
            const ek = [],
              ik = kk.getPoints();
            for (const kk of ik) ek.push(kk.x, kk.y, fk);
            bk.push(ek)
          }
          if (Sk)
            for (const kk of Pk.holes) {
              const ek = [],
                ik = kk.getPoints();
              for (const kk of ik) ek.push(kk.x, kk.y, fk);
              bk.push(ek)
            }
        }
        return bk
      }
      static Color3toRGBAUint8(kk) {
        const ek = new Uint8Array(4 * kk.length);
        for (let ik = 0, Dk = 0; ik < kk.length; ik++) ek[Dk++] = 255 * kk[ik].r, ek[Dk++] = 255 * kk[ik].g, ek[Dk++] = 255 * kk[ik].b, ek[Dk++] = 255;
        return ek
      }
      static CreateColorsTexture(kk, ek, ik, Dk) {
        const fk = Dk.JU().getCaps().maxTextureSize ?? 1,
          Sk = ek.length > fk ? fk : ek.length,
          bk = Math.ceil(ek.length / fk);
        bk > 1 && (ek = [...ek, ...Array(Sk * bk - ek.length).fill(ek[0])]);
        const rk = CD.Color3toRGBAUint8(ek),
          Pk = new Ck.c(rk, Sk, bk, Ki.e.TEXTUREFORMAT_RGBA, Dk, !1, !0, ik);
        return Pk.name = kk, Pk
      }
      static PrepareEmptyColorsTexture(kk) {
        if (!lD.EmptyColorsTexture) {
          const ek = new Uint8Array(4);
          lD.EmptyColorsTexture = new Ck.c(ek, 1, 1, Ki.e.TEXTUREFORMAT_RGBA, kk, !1, !1, Ck.c.NEAREST_NEAREST), lD.EmptyColorsTexture.name = "grlEmptyColorsTexture", lD.EmptyColorsTexture.ZF.addOnce((() => {
            lD.EmptyColorsTexture = null
          }))
        }
        return lD.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        lD.EmptyColorsTexture?.dispose(), lD.EmptyColorsTexture = null
      }
      static BooleanToNumber(kk) {
        return kk ? 1 : 0
      }
    }
    class AD extends tk.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class jD extends Xk.e {
      isCompatible(kk) {
        return !0
      }
      constructor(kk, ek, ik) {
        ik = ik || {
          color: lD.DEFAULT_COLOR
        };
        const Dk = new AD;
        Dk.GREASED_LINE_HAS_COLOR = !!ik.color && !ik.useColors, Dk.GREASED_LINE_SIZE_ATTENUATION = ik.sizeAttenuation ?? !1, Dk.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === ik.colorDistributionType, Dk.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (ek ?? kk.XF()).useRightHandedSystem, Dk.GREASED_LINE_CAMERA_FACING = ik.cameraFacing ?? !0, super(kk, jD.GREASED_LINE_MATERIAL_NAME, 200, Dk, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = ik?.forceGLSL || jD.ForceGLSL, this._scene = ek ?? kk.XF(), this._engine = this._scene.JU(), this._cameraFacing = ik.cameraFacing ?? !0, this.visibility = ik.visibility ?? 1, this.useDash = ik.useDash ?? !1, this.dashRatio = ik.dashRatio ?? .5, this.dashOffset = ik.dashOffset ?? 0, this.width = ik.width ? ik.width : ik.sizeAttenuation ? lD.DEFAULT_WIDTH_ATTENUATED : lD.DEFAULT_WIDTH, this._sizeAttenuation = ik.sizeAttenuation ?? !1, this.colorMode = ik.colorMode ?? 0, this._color = ik.color ?? null, this.useColors = ik.useColors ?? !1, this._colorsDistributionType = ik.colorDistributionType ?? 0, this.colorsSampling = ik.colorsSampling ?? Ck.c.NEAREST_NEAREST, this._colors = ik.colors ?? null, this.dashCount = ik.dashCount ?? 1, this.resolution = ik.resolution ?? new ak.l(this._engine.getRenderWidth(), this._engine.getRenderHeight()), ik.colorsTexture ? this.colorsTexture = ik.colorsTexture : this._colors ? this.colorsTexture = CD.CreateColorsTexture(`${kk.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? lD.DEFAULT_COLOR, CD.PrepareEmptyColorsTexture(this._scene)), this._engine.ZF.add((() => {
          CD.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(kk) {
        kk.push("grl_offsets"), kk.push("grl_widths"), kk.push("grl_colorPointers"), kk.push("grl_counters"), this._cameraFacing ? (kk.push("grl_previousAndSide"), kk.push("grl_nextAndCounters")) : kk.push("grl_slopes")
      }
      getSamplers(kk) {
        kk.push("grl_colors")
      }
      getActiveTextures(kk) {
        this.colorsTexture && kk.push(this.colorsTexture)
      }
      getUniforms() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const ek = [{
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
        return this._cameraFacing && ek.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === kk && ek.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: ek,
          vertex: this._cameraFacing && this._isGLSL(kk) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(kk) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(kk) {
        if (this._cameraFacing) {
          kk.N7("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || kk.N7("viewProjection", this._scene.getTransformMatrix());
          const ek = ak.j.Vector4[0];
          ek.x = this._aspect, ek.y = this._resolution.x, ek.z = this._resolution.y, ek.w = this.width, kk.updateVector4("grl_aspect_resolution_lineWidth", ek)
        }
        const ek = ak.j.Vector4[0];
        ek.x = CD.BooleanToNumber(this.useDash), ek.y = this._dashArray, ek.z = this.dashOffset, ek.w = this.dashRatio, kk.updateVector4("grl_dashOptions", ek);
        const ik = ak.j.Vector4[1];
        ik.x = this.colorMode, ik.y = this.visibility, ik.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, ik.w = CD.BooleanToNumber(this.useColors), kk.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", ik), this._color && kk.updateColor3("grl_singleColor", this._color);
        const Dk = this.colorsTexture ?? lD.EmptyColorsTexture;
        kk.setTexture("grl_colors", Dk), kk.updateFloat2("grl_textureSize", Dk?.getSize().width ?? 1, Dk?.getSize().height ?? 1)
      }
      prepareDefines(kk, ek, ik) {
        kk.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, kk.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, kk.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, kk.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = ek.useRightHandedSystem, kk.GREASED_LINE_CAMERA_FACING = this._cameraFacing, kk.GREASED_LINE_USE_OFFSETS = !!ik.offsets
      }
      getClassName() {
        return jD.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(ek) ? function(kk, ek) {
          if ("vertex" === kk) {
            const kk = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return ek && (kk["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), kk
          }
          return "fragment" === kk ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(kk, this._cameraFacing) : function(kk, ek) {
          if ("vertex" === kk) {
            const kk = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return ek && (kk["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), kk
          }
          return "fragment" === kk ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(kk, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(kk) {
        this.setColors(kk)
      }
      setColors(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Dk = this._colors?.length ?? 0;
        if (this._colors = kk, null !== kk && 0 !== kk.length) {
          if (!ek || ik)
            if (this.colorsTexture && Dk === kk.length && !ik) {
              const ek = CD.Color3toRGBAUint8(kk);
              this.colorsTexture.update(ek)
            } else this.colorsTexture?.dispose(), this.colorsTexture = CD.CreateColorsTexture(`${this._material.name}-colors-texture`, kk, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(kk) {
        this._dashCount = kk, this._dashArray = 1 / kk
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(kk) {
        this._sizeAttenuation = kk, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(kk) {
        this.setColor(kk)
      }
      setColor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== kk || null !== this._color && null === kk ? (this._color = kk, ek || this.markAllDefinesAsDirty()) : this._color = kk
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(kk) {
        this._colorsDistributionType = kk, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(kk) {
        this._aspect = kk.x / kk.y, this._resolution = kk
      }
      serialize() {
        const kk = super.serialize(),
          ek = {
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
        return this._colors && (ek.colors = this._colors), this._color && (ek.color = this._color), kk.greasedLineMaterialOptions = ek, kk
      }
      parse(kk, ek, ik) {
        super.parse(kk, ek, ik);
        const Dk = kk.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Dk.color && this.setColor(Dk.color, !0), Dk.colorDistributionType && (this.colorsDistributionType = Dk.colorDistributionType), Dk.colors && (this.colors = Dk.colors), Dk.colorsSampling && (this.colorsSampling = Dk.colorsSampling), Dk.colorMode && (this.colorMode = Dk.colorMode), Dk.useColors && (this.useColors = Dk.useColors), Dk.visibility && (this.visibility = Dk.visibility), Dk.useDash && (this.useDash = Dk.useDash), Dk.dashCount && (this.dashCount = Dk.dashCount), Dk.dashRatio && (this.dashRatio = Dk.dashRatio), Dk.dashOffset && (this.dashOffset = Dk.dashOffset), Dk.width && (this.width = Dk.width), Dk.sizeAttenuation && (this.sizeAttenuation = Dk.sizeAttenuation), Dk.resolution && (this.resolution = Dk.resolution), this.colors ? this.colorsTexture = CD.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, ek) : CD.PrepareEmptyColorsTexture(ek), this.markAllDefinesAsDirty()
      }
      copyTo(kk) {
        const ek = kk;
        ek.colorsTexture?.dispose(), this._colors && (ek.colorsTexture = CD.CreateColorsTexture(`${ek._material.name}-colors-texture`, this._colors, ek.colorsSampling, this._scene)), ek.setColor(this.color, !0), ek.colorsDistributionType = this.colorsDistributionType, ek.colorsSampling = this.colorsSampling, ek.colorMode = this.colorMode, ek.useColors = this.useColors, ek.visibility = this.visibility, ek.useDash = this.useDash, ek.dashCount = this.dashCount, ek.dashRatio = this.dashRatio, ek.dashOffset = this.dashOffset, ek.width = this.width, ek.sizeAttenuation = this.sizeAttenuation, ek.resolution = this.resolution, ek.markAllDefinesAsDirty()
      }
      _isGLSL(kk) {
        return 0 === kk || this._forceGLSL
      }
    }
    jD.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", jD.ForceGLSL = !1;
    var sD = ik(39997),
      dD = ik(40001),
      VD = ik(38265),
      FD = ik(40049),
      uD = ik(39394);
    class qD extends FD.o {
      constructor(kk, ek, Dk) {
        const fk = ek.JU(),
          Sk = fk.isWebGPU && !(Dk.forceGLSL || qD.ForceGLSL),
          bk = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        ek.useRightHandedSystem && bk.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const rk = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Dk.cameraFacing ? (bk.push("GREASED_LINE_CAMERA_FACING"), rk.push("grl_previousAndSide", "grl_nextAndCounters")) : (rk.push("grl_slopes"), rk.push("grl_counters"));
        const Pk = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (Sk || Pk.push("world", "viewProjection", "view", "projection"), super(kk, ek, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: Sk ? ["Scene", "Mesh"] : void 0,
            attributes: rk,
            uniforms: Pk,
            samplers: Sk ? [] : ["grlColors"],
            defines: bk,
            extraInitializationsAsync: async () => {
              Sk ? await Promise.all([ik.e(333).then((() => ik(61300))), ik.e(390).then((() => ik(61306)))]) : await Promise.all([ik.e(326).then((() => ik(61310))), ik.e(391).then((() => ik(61319)))])
            },
            shaderLanguage: Sk ? 1 : 0
          }), this._color = Zk.e.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Dk = Dk || {
            color: lD.DEFAULT_COLOR
          }, this.visibility = Dk.visibility ?? 1, this.useDash = Dk.useDash ?? !1, this.dashRatio = Dk.dashRatio ?? .5, this.dashOffset = Dk.dashOffset ?? 0, this.dashCount = Dk.dashCount ?? 1, this.width = Dk.width ? Dk.width : Dk.sizeAttenuation && Dk.cameraFacing ? lD.DEFAULT_WIDTH_ATTENUATED : lD.DEFAULT_WIDTH, this.sizeAttenuation = Dk.sizeAttenuation ?? !1, this.color = Dk.color ?? Zk.e.White(), this.useColors = Dk.useColors ?? !1, this.colorsDistributionType = Dk.colorDistributionType ?? 0, this.colorsSampling = Dk.colorsSampling ?? Ck.c.NEAREST_NEAREST, this.colorMode = Dk.colorMode ?? 0, this._colors = Dk.colors ?? null, this._cameraFacing = Dk.cameraFacing ?? !0, this.resolution = Dk.resolution ?? new ak.l(fk.getRenderWidth(), fk.getRenderHeight()), Dk.colorsTexture ? this.colorsTexture = Dk.colorsTexture : this._colors ? this.colorsTexture = CD.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, ek) : (this._color = this._color ?? lD.DEFAULT_COLOR, this.colorsTexture = CD.PrepareEmptyColorsTexture(ek)), Sk) {
          const kk = new uD.d;
          kk.setParameters(), kk.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", kk)
        }
        fk.ZF.add((() => {
          CD.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== lD.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new ak.l(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(kk) {
        this.setColors(kk)
      }
      setColors(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Dk = this._colors?.length ?? 0;
        if (this._colors = kk, null !== kk && 0 !== kk.length) {
          if (!ek || ik)
            if (this._colorsTexture && Dk === kk.length && !ik) {
              const ek = CD.Color3toRGBAUint8(kk);
              this._colorsTexture.update(ek)
            } else this._colorsTexture && this._colorsTexture !== lD.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = CD.CreateColorsTexture(`${this.name}-colors-texture`, kk, this.colorsSampling, this.XF())
        } else {
          this._colorsTexture && this._colorsTexture !== lD.EmptyColorsTexture && this._colorsTexture.dispose();
          const kk = this.XF();
          kk && (this.colorsTexture = CD.PrepareEmptyColorsTexture(kk))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(kk) {
        this._colorsTexture = kk, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(kk) {
        this._width = kk, this.setFloat("grlWidth", kk)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(kk) {
        this._useColors = kk, this.setFloat("grlUseColors", CD.BooleanToNumber(kk))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(kk) {
        this._colorsSampling = kk
      }
      get visibility() {
        return this._visibility
      }
      set visibility(kk) {
        this._visibility = kk, this.setFloat("grlVisibility", kk)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(kk) {
        this._useDash = kk, this.setFloat("grlUseDash", CD.BooleanToNumber(kk))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(kk) {
        this._dashOffset = kk, this.setFloat("grlDashOffset", kk)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(kk) {
        this._dashRatio = kk, this.setFloat("grlDashRatio", kk)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(kk) {
        this._dashCount = kk, this._dashArray = 1 / kk, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(kk) {
        this._sizeAttenuation = kk, this.setFloat("grlSizeAttenuation", CD.BooleanToNumber(kk))
      }
      get color() {
        return this._color
      }
      set color(kk) {
        this.setColor(kk)
      }
      setColor(kk) {
        kk = kk ?? lD.DEFAULT_COLOR, this._color = kk, this.setColor3("grlColor", kk)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(kk) {
        this._colorsDistributionType = kk, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(kk) {
        this._colorMode = kk, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(kk) {
        this._resolution = kk, this.setVector2("grlResolution", kk), this.setFloat("grlAspect", kk.x / kk.y)
      }
      serialize() {
        const kk = super.serialize(),
          ek = {
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
        return this._colors && (ek.colors = this._colors), kk.greasedLineMaterialOptions = ek, kk
      }
      parse(kk, ek, ik) {
        const Dk = kk.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Dk.color && (this.color = Dk.color), Dk.colorDistributionType && (this.colorsDistributionType = Dk.colorDistributionType), Dk.colorsSampling && (this.colorsSampling = Dk.colorsSampling), Dk.colorMode && (this.colorMode = Dk.colorMode), Dk.useColors && (this.useColors = Dk.useColors), Dk.visibility && (this.visibility = Dk.visibility), Dk.useDash && (this.useDash = Dk.useDash), Dk.dashCount && (this.dashCount = Dk.dashCount), Dk.dashRatio && (this.dashRatio = Dk.dashRatio), Dk.dashOffset && (this.dashOffset = Dk.dashOffset), Dk.width && (this.width = Dk.width), Dk.sizeAttenuation && (this.sizeAttenuation = Dk.sizeAttenuation), Dk.resolution && (this.resolution = Dk.resolution), Dk.colors ? this.colorsTexture = CD.CreateColorsTexture(`${this.name}-colors-texture`, Dk.colors, this.colorsSampling, this.XF()) : this.colorsTexture = CD.PrepareEmptyColorsTexture(ek), this._cameraFacing = Dk.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var ID, zD, QD;
    qD.ForceGLSL = !1,
      function(kk) {
        kk[kk.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", kk[kk.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(ID || (ID = {})),
      function(kk) {
        kk[kk.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", kk[kk.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", kk[kk.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(zD || (zD = {})),
      function(kk) {
        kk[kk.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", kk[kk.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", kk[kk.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", kk[kk.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", kk[kk.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(QD || (QD = {}));
    class vD extends sD.e {
      constructor(kk, ek, ik) {
        super(kk, ek, null, null, !1, !1), this.name = kk, this._options = ik, this._lazy = !1, this._updatable = !1, this._engine = ek.JU(), this._lazy = ik.lazy ?? !1, this._updatable = ik.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = ik.colorPointers ?? [], this._widths = ik.widths ?? new Array(ik.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(kk) {
        let ek = 0;
        for (const Dk of this._points) ek += Dk.length;
        const ik = ek / 3 * 2 - this._widths.length;
        for (let Dk = 0; Dk < ik; Dk++) this._widths.push(kk)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.DH && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(kk, ek) {
        for (const ik of kk) this._points.push(ik);
        this._lazy || this.setPoints(this._points, ek)
      }
      dispose(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(kk, ek)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(kk) {
        this._uvs = kk instanceof Float32Array ? kk : new Float32Array(kk), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(kk) {
        this.material instanceof qD && this.material.setDefine("GREASED_LINE_USE_OFFSETS", kk?.length > 0), this._offsets = kk, this._offsetsBuffer ? this._offsetsBuffer.update(kk) : this._createOffsetsBuffer(kk)
      }
      get widths() {
        return this._widths
      }
      set widths(kk) {
        this._widths = kk, this._lazy || this._widthsBuffer && this._widthsBuffer.update(kk)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(kk) {
        this._colorPointers = kk, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(kk)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof qD) return this.material;
        const kk = this.material?.pluginManager?.getPlugin(jD.GREASED_LINE_MATERIAL_NAME);
        return kk || void 0
      }
      get points() {
        const kk = [];
        return VD.c.DeepCopy(this._points, kk), kk
      }
      setPoints(kk, ek) {
        this._points = CD.ConvertPoints(kk, ek?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), ek?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, ek)
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
      serialize(kk) {
        super.serialize(kk), kk.type = this.getClassName(), kk.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ek = new dD.b;
        return ek.positions = this._vertexPositions, ek.indices = this._indices, ek.uvs = this._uvs, kk && (ek.normals = [], dD.b.ComputeNormals(this._vertexPositions, this._indices, ek.normals)), ek.applyToMesh(this, this._options.updatable), ek
      }
      _createOffsetsBuffer(kk) {
        const ek = this._scene.JU(),
          ik = new Wk.b(ek, kk, this._updatable, 3);
        this.setVerticesBuffer(ik.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = ik
      }
    }
    class ED {
      constructor(kk, ek) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = kk, this.wasAddedByNoopNode = ek
      }
      getIndicesAccessor(kk, ek, ik, Dk, fk) {
        return this._indicesAccessorMap.get(kk)?.get(ek)?.get(ik)?.get(Dk)?.get(fk)
      }
      setIndicesAccessor(kk, ek, ik, Dk, fk, Sk) {
        let bk = this._indicesAccessorMap.get(kk);
        bk || (bk = new Map, this._indicesAccessorMap.set(kk, bk));
        let rk = bk.get(ek);
        rk || (rk = new Map, bk.set(ek, rk));
        let Pk = rk.get(ik);
        Pk || (Pk = new Map, rk.set(ik, Pk));
        let mk = Pk.get(Dk);
        mk || (mk = new Map, Pk.set(Dk, mk)), mk.set(fk, Sk)
      }
      pushExportedNode(kk) {
        this._exportedNodes.has(kk) || this._exportedNodes.add(kk)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(kk) {
        return this._vertexBufferViewMap.get(kk)
      }
      setVertexBufferView(kk, ek) {
        this._vertexBufferViewMap.set(kk, ek)
      }
      setRemappedBufferView(kk, ek, ik) {
        this._remappedBufferView.set(kk, new Map), this._remappedBufferView.get(kk).set(ek, ik)
      }
      getRemappedBufferView(kk, ek) {
        return this._remappedBufferView.get(kk)?.get(ek)
      }
      getVertexAccessor(kk, ek, ik) {
        return this._vertexAccessorMap.get(kk)?.get(ek)?.get(ik)
      }
      setVertexAccessor(kk, ek, ik, Dk) {
        let fk = this._vertexAccessorMap.get(kk);
        fk || (fk = new Map, this._vertexAccessorMap.set(kk, fk));
        let Sk = fk.get(ek);
        Sk || (Sk = new Map, fk.set(ek, Sk)), Sk.set(ik, Dk)
      }
      hasVertexColorAlpha(kk) {
        return this._vertexMapColorAlpha.get(kk) || !1
      }
      setHasVertexColorAlpha(kk, ek) {
        return this._vertexMapColorAlpha.set(kk, ek)
      }
      getMesh(kk) {
        return this._meshMap.get(kk)
      }
      setMesh(kk, ek) {
        this._meshMap.set(kk, ek)
      }
      bindMorphDataToMesh(kk, ek) {
        const ik = this._meshMorphTargetMap.get(kk) || [];
        this._meshMorphTargetMap.set(kk, ik), -1 === ik.indexOf(ek) && ik.push(ek)
      }
      getMorphTargetsFromMesh(kk) {
        return this._meshMorphTargetMap.get(kk)
      }
    }
    class hD {
      _ApplyExtension(kk, ek, ik, Dk) {
        if (ik >= ek.length) return Promise.resolve(kk);
        const fk = Dk(ek[ik], kk);
        return fk ? fk.then((async kk => kk ? await this._ApplyExtension(kk, ek, ik + 1, Dk) : null)) : this._ApplyExtension(kk, ek, ik + 1, Dk)
      }
      _ApplyExtensions(kk, ek) {
        const ik = [];
        for (const Dk of hD._ExtensionNames) ik.push(this._extensions[Dk]);
        return this._ApplyExtension(kk, ik, 0, ek)
      }
      _extensionsPostExportNodeAsync(kk, ek, ik, Dk, fk) {
        return this._ApplyExtensions(ek, ((ek, Sk) => ek.postExportNodeAsync && ek.postExportNodeAsync(kk, Sk, ik, Dk, fk, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(kk, ek, ik) {
        return this._ApplyExtensions(ek, ((ek, Dk) => ek.postExportMaterialAsync && ek.postExportMaterialAsync(kk, Dk, ik)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        const Dk = [];
        return await Promise.all(hD._ExtensionNames.map((async fk => {
          const Sk = this._extensions[fk];
          if (Sk.postExportMaterialAdditionalTexturesAsync) {
            const fk = await Sk.postExportMaterialAdditionalTexturesAsync(kk, ek, ik);
            Dk.push(...fk)
          }
        }))), Dk
      }
      _extensionsPostExportTextures(kk, ek, ik) {
        for (const Dk of hD._ExtensionNames) {
          const fk = this._extensions[Dk];
          fk.postExportTexture && fk.postExportTexture(kk, ek, ik)
        }
      }
      _extensionsPostExportMeshPrimitive(kk) {
        for (const ek of hD._ExtensionNames) {
          const ik = this._extensions[ek];
          ik.postExportMeshPrimitive && ik.postExportMeshPrimitive(kk, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const kk of hD._ExtensionNames) {
          const ek = this._extensions[kk];
          ek.preGenerateBinaryAsync && await ek.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(kk) {
        for (const ek of hD._ExtensionNames) {
          const ik = this._extensions[ek];
          ik.enabled && kk(ik)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((kk => {
          var ek, ik, Dk;
          kk.wasUsed && ((ek = this._glTF).extensionsUsed || (ek.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(kk.name) && this._glTF.extensionsUsed.push(kk.name), kk.required && ((ik = this._glTF).extensionsRequired || (ik.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(kk.name) && this._glTF.extensionsRequired.push(kk.name)), (Dk = this._glTF).extensions || (Dk.extensions = {}), kk.onExporting && kk.onExporting())
        }))
      }
      _loadExtensions() {
        for (const kk of hD._ExtensionNames) {
          const ek = hD._ExtensionFactories[kk](this);
          this._extensions[kk] = ek
        }
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hk.e.LastCreatedScene,
          ek = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${Uk.d.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Ii(this), this._extensions = {}, this._bufferManager = new SD, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !kk) throw new Error("No scene available to export");
        this._babylonScene = kk, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: kk => kk?.YF?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...ek
        }, this._loadExtensions()
      }
      dispose() {
        for (const kk in this._extensions) {
          this._extensions[kk].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        hD.UnregisterExtension(kk) && fk.Tools.Warn(`Extension with the name ${kk} already exists`), hD._ExtensionFactories[kk] = ek;
        const Dk = ik ?? 0;
        hD._ExtensionOrders[kk] = Dk;
        let Sk = hD._ExtensionNames.length;
        for (let fk = 0; fk < hD._ExtensionNames.length; fk++) {
          const kk = hD._ExtensionNames[fk];
          if (Dk < hD._ExtensionOrders[kk]) {
            Sk = fk;
            break
          }
        }
        hD._ExtensionNames.splice(Sk, 0, kk)
      }
      static UnregisterExtension(kk) {
        if (!hD._ExtensionFactories[kk]) return !1;
        delete hD._ExtensionFactories[kk], delete hD._ExtensionOrders[kk];
        const ek = hD._ExtensionNames.indexOf(kk);
        return -1 !== ek && hD._ExtensionNames.splice(ek, 1), !0
      }
      _generateJSON(kk, ek, ik) {
        const Dk = {
          byteLength: kk
        };
        return Dk.byteLength && (this._glTF.buffers = [Dk]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.bw = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Dk.uri = ek + ".bin"), ik ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(kk) {
        const ek = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const ik = this._generateJSON(ek.byteLength, kk, !0),
          Dk = new Blob([ek], {
            type: "application/octet-stream"
          }),
          fk = kk + ".gltf",
          Sk = kk + ".bin",
          bk = new mk;
        if (bk.files[fk] = ik, bk.files[Sk] = Dk, this._imageData)
          for (const rk in this._imageData) bk.files[rk] = this._imageData[rk];
        return bk
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(kk) {
        const ek = kk % 4;
        return 0 === ek ? ek : 4 - ek
      }
      async generateGLBAsync(kk) {
        this._shouldUseGlb = !0;
        const ek = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const ik = this._generateJSON(ek.byteLength),
          Dk = kk + ".glb";
        let fk, Sk = ik.length;
        if ("undefined" !== typeof TextEncoder) {
          fk = (new TextEncoder).encode(ik), Sk = fk.length
        }
        const bk = this._getPadding(Sk),
          rk = this._getPadding(ek.byteLength),
          Pk = 28 + Sk + bk + ek.byteLength + rk,
          Mk = new DD(Pk);
        if (Mk.writeUInt32(1179937895), Mk.writeUInt32(2), Mk.writeUInt32(Pk), Mk.writeUInt32(Sk + bk), Mk.writeUInt32(1313821514), fk) Mk.writeTypedArray(fk);
        else {
          const kk = "_".charCodeAt(0);
          for (let ek = 0; ek < Sk; ++ek) {
            const Dk = ik.charCodeAt(ek);
            Dk != ik.codePointAt(ek) ? Mk.writeUInt8(kk) : Mk.writeUInt8(Dk)
          }
        }
        for (let mk = 0; mk < bk; ++mk) Mk.writeUInt8(32);
        Mk.writeUInt32(ek.byteLength + rk), Mk.writeUInt32(5130562), Mk.writeTypedArray(ek);
        for (let mk = 0; mk < rk; ++mk) Mk.writeUInt8(0);
        const Kk = new mk;
        return Kk.files[Dk] = new Blob([Mk.getOutputData()], {
          type: "application/octet-stream"
        }), Kk
      }
      _setNodeTransformation(kk, ek, ik) {
        if (ek.getPivotPoint().equalsWithEpsilon(Wi, vi.d) || fk.Tools.Warn("Pivot points are not supported in the glTF serializer"), !ek.position.equalsWithEpsilon(Wi, vi.d)) {
          const fk = Dk.TmpVectors.eH[0].Fs(ek.position);
          ik && Oi(fk), kk.translation = fk.Tik()
        }
        ek.wi.equalsWithEpsilon(Xi, vi.d) || (kk.scale = ek.wi.Tik());
        const Sk = ek.rotationQuaternion?.clone() || Dk.Quaternion.FromEulerAngles(ek.rotation.x, ek.rotation.y, ek.rotation.z);
        Sk.equalsWithEpsilon(ti, vi.d) || (ik && gi(Sk), kk.rotation = Sk.normalize().Tik())
      }
      _setCameraTransformation(kk, ek, ik) {
        const fk = Dk.TmpVectors.eH[0],
          Sk = Dk.TmpVectors.Quaternion[0],
          bk = ek.getWorldMatrix();
        if (ek.parent) {
          const kk = ek.parent.getWorldMatrix().invertToRef(Dk.TmpVectors.Matrix[0]);
          bk.multiplyToRef(kk, Dk.TmpVectors.Matrix[1]).decompose(void 0, Sk, fk)
        } else bk.decompose(void 0, Sk, fk);
        fk.equalsWithEpsilon(Wi, vi.d) || (ik && Oi(fk), kk.translation = fk.Tik()), ik && gi(Sk), this._babylonScene.useRightHandedSystem || Gi(Sk), Sk.equalsWithEpsilon(ti, vi.d) || (kk.rotation = Sk.Tik())
      }
      _listAvailableCameras() {
        for (const kk of this._babylonScene.cameras) {
          const ek = {
            type: kk.mode === bD.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (kk.name && (ek.name = kk.name), "perspective" === ek.type) ek.perspective = {
            aspectRatio: kk.JU().getAspectRatio(kk),
            yfov: kk.fovMode === bD.e.FOVMODE_VERTICAL_FIXED ? kk.fov : kk.fov * kk.JU().getAspectRatio(kk),
            znear: kk.minZ,
            zfar: kk.maxZ
          };
          else if ("orthographic" === ek.type) {
            const ik = kk.orthoLeft && kk.orthoRight ? .5 * (kk.orthoRight - kk.orthoLeft) : .5 * kk.JU().getRenderWidth(),
              Dk = kk.orthoBottom && kk.orthoTop ? .5 * (kk.orthoTop - kk.orthoBottom) : .5 * kk.JU().getRenderHeight();
            ek.orthographic = {
              xmag: ik,
              ymag: Dk,
              znear: kk.minZ,
              zfar: kk.maxZ
            }
          }
          this._camerasMap.set(kk, ek)
        }
      }
      _exportAndAssignCameras() {
        const kk = Array.from(this._camerasMap.values());
        for (const ek of kk) {
          const kk = this._nodesCameraMap.get(ek);
          if (void 0 !== kk) {
            this._cameras.push(ek);
            for (const ek of kk) ek.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const kk of this._babylonScene.skeletons) {
          if (kk.bones.length <= 0) continue;
          const ek = {
            joints: []
          };
          this._skinMap.set(kk, ek)
        }
      }
      _exportAndAssignSkeletons(kk) {
        for (const ik of this._babylonScene.skeletons) {
          if (ik.bones.length <= 0) continue;
          const Sk = this._skinMap.get(ik);
          if (void 0 == Sk) continue;
          const bk = {};
          let rk = -1;
          for (let kk = 0; kk < ik.bones.length; ++kk) {
            const ek = ik.bones[kk],
              Dk = ek.getIndex() ?? kk; - 1 !== Dk && (bk[Dk] = ek, Dk > rk && (rk = Dk))
          }
          const Pk = [];
          for (let ik = 0; ik <= rk; ++ik) {
            const rk = bk[ik],
              mk = rk.getTransformNode(),
              Mk = mk ? this._nodeMap.get(mk) : void 0;
            if (void 0 === Mk) {
              fk.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            Sk.joints.push(Mk);
            const Kk = rk.getAbsoluteInverseBindMatrix().clone();
            kk.has(mk) && (ek = Kk, Ei.invertToRef(Dk.TmpVectors.Matrix[0]).multiplyToRef(ek, ek).multiplyToRef(Ei, ek)), Pk.push(Kk)
          }
          const mk = this._nodesSkinMap.get(Sk);
          if (Sk.joints.length > 0 && void 0 !== mk) {
            const kk = new Float32Array(16 * Pk.length);
            Pk.forEach(((ek, ik) => {
              kk.set(ek.m, 16 * ik)
            }));
            const ek = this._bufferManager.createBufferView(kk);
            this._accessors.push(this._bufferManager.createAccessor(ek, "MAT4", 5126, Pk.length)), Sk.inverseBindMatrices = this._accessors.length - 1, this._skins.push(Sk);
            const ik = this._skins.length - 1;
            for (const Dk of mk) Dk.skin = ik
          }
        }
        var ek
      }
      async _exportSceneAsync() {
        const kk = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const ek = this._options.metadataSelector(this._babylonScene.metadata);
          ek && (kk.extras = ek)
        }
        const ek = new Array,
          ik = new Array,
          Dk = new Array,
          fk = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let Sk;
        if (fk && !this._options.includeCoordinateSystemConversionNodes)
          for (const mk of this._babylonScene.animationGroups)
            for (const kk of mk.targetedAnimations) {
              const ek = kk.target;
              ek instanceof Kk.b && !ek.parent && (Sk ?? (Sk = new Set)).add(ek)
            }
        for (const mk of this._babylonScene.rootNodes) {
          const kk = mk.animations,
            bk = !!kk && kk.length > 0 || Sk?.has(mk);
          fk && !this._options.includeCoordinateSystemConversionNodes && ai(mk, this._babylonScene.useRightHandedSystem) && !bk ? Dk.push(...mk.getChildren()) : this._babylonScene.useRightHandedSystem ? ek.push(mk) : ik.push(mk)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const bk = new ED(!0, !1);
        kk.nodes.push(...await this._exportNodesAsync(ik, bk));
        const rk = new ED(!1, !1);
        kk.nodes.push(...await this._exportNodesAsync(ek, rk));
        const Pk = new ED(!1, !0);
        kk.nodes.push(...await this._exportNodesAsync(Dk, Pk)), kk.nodes.length && this._scenes.push(kk), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(bk.getNodesSet()), this._babylonScene.animationGroups.length && UD._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, bk.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(kk) {
        return this._nodeMap.get(kk)
      }
      _getAnimationIndex(kk) {
        return this._animationGroupMap.get(kk)
      }
      _getCameraIndex(kk) {
        const ek = this._camerasMap.get(kk);
        if (!ek) return;
        const ik = this._cameras.indexOf(ek);
        return ik >= 0 ? ik : void 0
      }
      _getMaterialIndex(kk) {
        return this._materialMap.get(kk)
      }
      _getRootIndex(kk, ek) {
        switch (kk) {
          case "nodes":
            return this._getNodeIndex(ek);
          case "animations":
            return this._getAnimationIndex(ek);
          case "cameras":
            return this._getCameraIndex(ek);
          case "materials":
            return this._getMaterialIndex(ek);
          case "meshes": {
            const kk = this._getNodeIndex(ek);
            return void 0 === kk ? void 0 : this._nodes[kk]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(ek)?.index;
          case "images": {
            const kk = this._materialExporter.getTextureInfo(ek)?.index;
            if (void 0 === kk) return;
            const ik = this._textures[kk];
            for (const ek of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const kk = ik?.extensions?.[ek]?.source;
              if ("number" === typeof kk) return kk
            }
            return ik?.source
          }
          case "samplers": {
            const kk = this._materialExporter.getTextureInfo(ek)?.index;
            return void 0 === kk ? void 0 : this._textures[kk]?.sampler
          }
          case "skins": {
            const kk = this._skinMap.get(ek),
              ik = kk ? this._skins.indexOf(kk) : -1;
            return ik >= 0 ? ik : void 0
          }
          case "scenes":
            return ek === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(kk, ek, ik) {
        const Dk = this._nodes[kk];
        if (!Dk) throw new Error(`Cannot write ${ek}: glTF node ${kk} does not exist.`);
        Dk.extensions || (Dk.extensions = {}), Dk.extensions[ek] = ik
      }
      _shouldExportNode(kk) {
        let ek = this._shouldExportNodeMap.get(kk);
        return void 0 === ek && (ek = this._options.shouldExportNode(kk), this._shouldExportNodeMap.set(kk, ek)), ek
      }
      async _exportNodesAsync(kk, ek) {
        const ik = new Array;
        this._exportBuffers(kk, ek);
        for (const Dk of kk) await this._exportNodeAsync(Dk, ik, ek);
        return ik
      }
      _collectBuffers(kk, ek, ik, Dk, fk) {
        if (this._shouldExportNode(kk) && kk instanceof xk.d && kk.geometry) {
          const Sk = kk.geometry.getVertexBuffers();
          if (Sk)
            for (const Dk in Sk) {
              if (!oi(Dk)) continue;
              const bk = Sk[Dk];
              fk.setHasVertexColorAlpha(bk, kk.hasVertexAlpha);
              const rk = bk._buffer,
                Pk = ek.get(rk) || [];
              ek.set(rk, Pk), -1 === Pk.indexOf(bk) && Pk.push(bk);
              const mk = ik.get(bk) || [];
              ik.set(bk, mk), -1 === mk.indexOf(kk) && mk.push(kk)
            }
          const bk = kk.morphTargetManager;
          if (bk)
            for (let ek = 0; ek < bk.numTargets; ek++) {
              const ik = bk.getTarget(ek),
                fk = Dk.get(ik) || [];
              Dk.set(ik, fk), -1 === fk.indexOf(kk) && fk.push(kk)
            }
        }
        for (const Sk of kk.getChildren()) this._collectBuffers(Sk, ek, ik, Dk, fk)
      }
      _exportBuffers(kk, ek) {
        const ik = new Map,
          Dk = new Map,
          fk = new Map;
        for (const rk of kk) this._collectBuffers(rk, ik, Dk, fk, ek);
        const Sk = Array.from(ik.keys());
        for (const rk of Sk) {
          const kk = rk.getData();
          if (!kk) throw new Error("Buffer data is not available");
          const fk = ik.get(rk);
          if (!fk) continue;
          const Sk = fk[0].byteStride;
          if (fk.some((kk => kk.byteStride !== Sk))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const bk = Ji(kk).slice();
          for (const ek of fk) {
            const kk = Dk.get(ek),
              {
                byteOffset: ik,
                byteStride: fk,
                componentCount: Sk,
                type: rk,
                count: Pk,
                normalized: mk,
                kind: Kk
              } = ci(ek, kk);
            switch (Kk) {
              case Mk.h.NormalKind:
              case Mk.h.TangentKind:
                (0, zi.l)(bk, ik, fk, Sk, rk, Pk, mk, (kk => {
                  const ek = Math.sqrt(kk[0] * kk[0] + kk[1] * kk[1] + kk[2] * kk[2]);
                  if (ek > 0) {
                    const ik = 1 / ek;
                    kk[0] *= ik, kk[1] *= ik, kk[2] *= ik
                  }
                }));
                break;
              case Mk.h.ColorKind: {
                const ek = kk.filter((kk => kk.material instanceof PD.StandardMaterial || null == kk.material)).length;
                if (0 == ek) break;
                if (ek != kk.length) {
                  Vk.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                rk == Mk.h.UNSIGNED_BYTE && Vk.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Dk = new wk.Color3,
                  Kk = new wk.e,
                  xk = this._babylonScene.JU().useExactSrgbConversions;
                (0, zi.l)(bk, ik, fk, Sk, rk, Pk, mk, (kk => {
                  3 === kk.length ? (Dk.zek(kk, 0), Dk.toLinearSpaceToRef(Dk, xk), Dk.toArray(kk, 0)) : (Kk.zek(kk, 0), Kk.toLinearSpaceToRef(Kk, xk), Kk.toArray(kk, 0))
                }))
              }
            }
          }
          if (ek.convertToRightHanded) {
            for (const kk of fk) {
              const ek = Dk.get(kk),
                {
                  byteOffset: ik,
                  byteStride: fk,
                  componentCount: Sk,
                  type: rk,
                  count: Pk,
                  normalized: mk,
                  kind: Kk
                } = ci(kk, ek);
              switch (Kk) {
                case Mk.h.PositionKind:
                case Mk.h.NormalKind:
                case Mk.h.TangentKind:
                  (0, zi.l)(bk, ik, fk, Sk, rk, Pk, mk, (kk => {
                    kk[0] = -kk[0]
                  }))
              }
            }
            ek.convertedToRightHandedBuffers.set(rk, bk)
          }
          const Pk = this._bufferManager.createBufferView(bk, Sk);
          ek.setVertexBufferView(rk, Pk);
          const mk = new Map;
          for (const ek of fk) {
            const kk = Dk.get(ek),
              {
                kind: ik,
                totalVertices: fk
              } = ci(ek, kk);
            switch (ik) {
              case Mk.h.MatricesIndicesKind:
              case Mk.h.MatricesIndicesExtraKind:
                if (ek.type == Mk.h.FLOAT) {
                  const kk = ek.getFloatData(fk);
                  null !== kk && mk.set(ek, kk)
                }
            }
          }
          0 !== mk.size && Vk.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Kk = Array.from(mk.keys());
          for (const ik of Kk) {
            const kk = mk.get(ik);
            if (!kk) continue;
            const Dk = kk.some((kk => kk >= 256)),
              fk = new(Dk ? Uint16Array : Uint8Array)(kk.length);
            for (let ek = 0; ek < kk.length; ek++) fk[ek] = kk[ek];
            const Sk = this._bufferManager.createBufferView(fk, 4 * (Dk ? 2 : 1));
            ek.setRemappedBufferView(rk, ik, Sk)
          }
        }
        const bk = Array.from(fk.keys());
        for (const rk of bk) {
          const kk = fk.get(rk);
          if (!kk) continue;
          const ik = HD(rk, kk[0], this._bufferManager, this._bufferViews, this._accessors, ek.convertToRightHanded);
          for (const Dk of kk) ek.bindMorphDataToMesh(Dk, ik)
        }
      }
      async _exportNodeAsync(kk, ek, ik) {
        let Dk = this._nodeMap.get(kk);
        if (void 0 !== Dk) return void(ek.includes(Dk) || ek.push(Dk));
        const fk = await this._createNodeAsync(kk, ik);
        if (fk) {
          Dk = this._nodes.length, this._nodes.push(fk), this._nodeMap.set(kk, Dk), ik.pushExportedNode(kk), ek.push(Dk);
          const Sk = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            bk = [];
          this._babylonScene.animationGroups.length || (UD._CreateMorphTargetAnimationFromMorphTargetAnimations(kk, Sk, bk, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ik.convertToRightHanded, this._options.shouldExportAnimation), kk.animations.length && UD._CreateNodeAnimationFromNodeAnimations(kk, Sk, bk, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ik.convertToRightHanded, this._options.shouldExportAnimation)), Sk.channels.length && Sk.samplers.length && this._animations.push(Sk), bk.forEach((kk => {
            kk.channels.length && kk.samplers.length && this._animations.push(kk)
          }))
        }
        const Sk = fk ? [] : ek;
        for (const bk of kk.getChildren()) await this._exportNodeAsync(bk, Sk, ik);
        fk && Sk.length && (fk.children = Sk)
      }
      async _createNodeAsync(kk, ek) {
        if (!this._shouldExportNode(kk)) return null;
        const ik = {};
        if (kk.name && (ik.name = kk.name), kk.metadata) {
          const ek = this._options.metadataSelector(kk.metadata);
          ek && (ik.extras = ek)
        }
        if (kk instanceof Kk.b && (this._setNodeTransformation(ik, kk, ek.convertToRightHanded), kk instanceof xk.d)) {
          const Dk = kk instanceof nk.e ? kk.aDk : kk;
          if (Dk.TY && Dk.TY.length > 0 && (ik.mesh = await this._exportMeshAsync(Dk, ek)), kk.skeleton) {
            const ek = this._skinMap.get(kk.skeleton);
            void 0 !== ek && (void 0 === this._nodesSkinMap.get(ek) && this._nodesSkinMap.set(ek, []), this._nodesSkinMap.get(ek)?.push(ik))
          }
        }
        if (kk instanceof Qi.e) {
          const Dk = this._camerasMap.get(kk);
          if (Dk) {
            void 0 === this._nodesCameraMap.get(Dk) && this._nodesCameraMap.set(Dk, []), this._setCameraTransformation(ik, kk, ek.convertToRightHanded);
            const fk = kk.parent;
            if (null !== fk && Ri(kk, fk)) {
              const kk = this._nodeMap.get(fk);
              if (void 0 !== kk) {
                const ek = this._nodes[kk];
                return Ni(ik, ek), this._nodesCameraMap.get(Dk)?.push(ek), null
              }
            }
            this._nodesCameraMap.get(Dk)?.push(ik)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", ik, kk, this._nodeMap, ek.convertToRightHanded) ? ik : (Vk.b.Warn(`Not exporting node ${kk.name}`), null)
      }
      _exportIndices(kk, ek, ik, Dk, fk, bk, rk, Pk, mk) {
        let Mk = null;
        mk.mode = function(kk) {
          switch (kk) {
            case Sk.e.TriangleFillMode:
              return 4;
            case Sk.e.TriangleStripDrawMode:
              return 5;
            case Sk.e.TriangleFanDrawMode:
              return 6;
            case Sk.e.PointListDrawMode:
            case Sk.e.PointFillMode:
              return 0;
            case Sk.e.LineLoopDrawMode:
              return 2;
            case Sk.e.LineListDrawMode:
              return 1;
            case Sk.e.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${kk}`)
        }(bk);
        const Kk = rk !== Sk.e.CounterClockWiseSideOrientation && function(kk) {
          switch (kk) {
            case Sk.e.TriangleFillMode:
            case Sk.e.TriangleStripDrawMode:
            case Sk.e.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(bk);
        if (Kk) {
          if (bk === Sk.e.TriangleStripDrawMode || bk === Sk.e.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const rk = ek ? new Uint32Array(Dk) : new Uint16Array(Dk);
          if (kk)
            for (let ek = 0; ek + 2 < Dk; ek += 3) rk[ek] = kk[ik + ek] + fk, rk[ek + 1] = kk[ik + ek + 2] + fk, rk[ek + 2] = kk[ik + ek + 1] + fk;
          else
            for (let kk = 0; kk + 2 < Dk; kk += 3) rk[kk] = kk, rk[kk + 1] = kk + 2, rk[kk + 2] = kk + 1;
          Mk = rk
        } else if (kk && 0 !== fk) {
          const Sk = ek ? new Uint32Array(Dk) : new Uint16Array(Dk);
          for (let ek = 0; ek < Dk; ek++) Sk[ek] = kk[ik + ek] + fk;
          Mk = Sk
        } else kk && (Mk = function(kk, ek, ik, Dk) {
          let fk = kk;
          return 0 === ek && ik === kk.length || (fk = Array.isArray(kk) ? kk.slice(ek, ek + ik) : kk.subarray(ek, ek + ik)), fk instanceof Int32Array ? new Uint32Array(fk.buffer, fk.byteOffset, fk.length) : Array.isArray(fk) ? Dk ? new Uint32Array(fk) : new Uint16Array(fk) : fk
        }(kk, ik, Dk, ek));
        if (Mk) {
          let Sk = Pk.getIndicesAccessor(kk, ik, Dk, fk, Kk);
          if (void 0 === Sk) {
            const bk = this._bufferManager.createBufferView(Mk),
              rk = ek ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(bk, "SCALAR", rk, Dk, 0)), Sk = this._accessors.length - 1, Pk.setIndicesAccessor(kk, ik, Dk, fk, Kk, Sk)
          }
          mk.indices = Sk
        }
      }
      _exportVertexBuffer(kk, ek, ik, Dk, fk, Sk) {
        const bk = kk.getKind();
        if (!oi(bk)) return;
        if (bk.startsWith("uv") && !this._options.exportUnusedUVs && (!ek || !this._materialNeedsUVsSet.has(ek))) return;
        let rk = fk.getVertexAccessor(kk, ik, Dk);
        if (void 0 === rk) {
          const ek = fk.convertedToRightHandedBuffers.get(kk._buffer) || kk._buffer.getData(),
            Sk = bk === Mk.h.PositionKind ? function(kk, ek, ik, Dk) {
              const {
                byteOffset: fk,
                byteStride: Sk,
                type: bk,
                normalized: rk
              } = ek, Pk = ek.getSize(), mk = new Array(Pk).fill(1 / 0), Mk = new Array(Pk).fill(-1 / 0);
              return (0, zi.l)(kk, fk + ik * Sk, Sk, Pk, bk, Dk * Pk, rk, (kk => {
                for (let ek = 0; ek < Pk; ek++) mk[ek] = Math.min(mk[ek], kk[ek]), Mk[ek] = Math.max(Mk[ek], kk[ek])
              })), {
                min: mk,
                max: Mk
              }
            }(ek, kk, ik, Dk) : void 0,
            Pk = (bk === Mk.h.MatricesIndicesKind || bk === Mk.h.MatricesIndicesExtraKind) && kk.type === Mk.h.FLOAT,
            mk = Pk ? Mk.h.UNSIGNED_BYTE : kk.type,
            Kk = Pk ? void 0 : kk.normalized,
            xk = Pk ? fk.getRemappedBufferView(kk._buffer, kk) : fk.getVertexBufferView(kk._buffer),
            nk = kk.byteOffset + ik * kk.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(xk, function(kk, ek) {
            if (kk == Mk.h.ColorKind) return ek ? "VEC4" : "VEC3";
            switch (kk) {
              case Mk.h.PositionKind:
              case Mk.h.NormalKind:
                return "VEC3";
              case Mk.h.TangentKind:
              case Mk.h.MatricesIndicesKind:
              case Mk.h.MatricesIndicesExtraKind:
              case Mk.h.MatricesWeightsKind:
              case Mk.h.MatricesWeightsExtraKind:
                return "VEC4";
              case Mk.h.UVKind:
              case Mk.h.UV2Kind:
              case Mk.h.UV3Kind:
              case Mk.h.UV4Kind:
              case Mk.h.UV5Kind:
              case Mk.h.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${kk}`)
          }(bk, fk.hasVertexColorAlpha(kk)), mk, Dk, nk, Sk, Kk)), rk = this._accessors.length - 1, fk.setVertexAccessor(kk, ik, Dk, rk)
        }
        Sk.attributes[function(kk) {
          switch (kk) {
            case Mk.h.PositionKind:
              return "POSITION";
            case Mk.h.NormalKind:
              return "NORMAL";
            case Mk.h.TangentKind:
              return "TANGENT";
            case Mk.h.ColorKind:
              return "COLOR_0";
            case Mk.h.UVKind:
              return "TEXCOORD_0";
            case Mk.h.UV2Kind:
              return "TEXCOORD_1";
            case Mk.h.UV3Kind:
              return "TEXCOORD_2";
            case Mk.h.UV4Kind:
              return "TEXCOORD_3";
            case Mk.h.UV5Kind:
              return "TEXCOORD_4";
            case Mk.h.UV6Kind:
              return "TEXCOORD_5";
            case Mk.h.MatricesIndicesKind:
              return "JOINTS_0";
            case Mk.h.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case Mk.h.MatricesWeightsKind:
              return "WEIGHTS_0";
            case Mk.h.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${kk}`)
        }(bk)] = rk
      }
      async _exportMaterialAsync(kk, ek, ik, Dk) {
        let fk = this._materialMap.get(kk);
        if (void 0 === fk) {
          const Dk = ek && Object.keys(ek).some((kk => kk.startsWith("uv")));
          if ((kk = kk instanceof rD.e ? kk.M6[ik.materialIndex] : kk) instanceof Ae) fk = await this._materialExporter.exportPBRMaterialAsync(kk, Dk);
          else if (kk instanceof PD.StandardMaterial) fk = await this._materialExporter.exportStandardMaterialAsync(kk, Dk);
          else {
            if (!(kk instanceof Je)) return void Vk.b.Warn(`Unsupported material '${kk.name}' with type ${kk.getClassName()}`);
            fk = await this._materialExporter.exportOpenPBRMaterialAsync(kk, Dk)
          }
          this._materialMap.set(kk, fk)
        }
        Dk.material = fk
      }
      async _exportMeshAsync(kk, ek) {
        let ik = ek.getMesh(kk);
        if (void 0 !== ik) return ik;
        const Dk = {
          primitives: []
        };
        ik = this._meshes.length, this._meshes.push(Dk), ek.setMesh(kk, ik);
        const fk = kk.isUnIndexed ? null : kk.oik(),
          bk = kk.geometry?.getVertexBuffers(),
          rk = ek.getMorphTargetsFromMesh(kk),
          Pk = kk instanceof wD.c,
          mk = kk instanceof vD,
          Mk = kk.TY;
        if (bk && Mk && Mk.length > 0)
          for (const Kk of Mk) {
            const ik = {
                attributes: {}
              },
              Mk = Kk.fH() || this._babylonScene.defaultMaterial;
            if (mk) {
              const ek = {
                  name: Mk.name
                },
                Dk = kk,
                fk = wk.Color3.White(),
                Sk = Dk.material?.alpha ?? 1,
                bk = Dk.greasedLineMaterial?.color ?? fk;
              (!bk.equalsWithEpsilon(fk, vi.d) || Sk < 1) && (ek.pbrMetallicRoughness = {
                baseColorFactor: [...bk.Tik(), Sk]
              }), this._materials.push(ek), ik.material = this._materials.length - 1
            } else if (Pk) {
              const ek = {
                  name: Mk.name
                },
                Dk = kk;
              (!Dk.color.equalsWithEpsilon(wk.Color3.White(), vi.d) || Dk.alpha < 1) && (ek.pbrMetallicRoughness = {
                baseColorFactor: [...Dk.color.Tik(), Dk.alpha]
              }), this._materials.push(ek), ik.material = this._materials.length - 1
            } else await this._exportMaterialAsync(Mk, bk, Kk, ik);
            const xk = Pk || mk ? Sk.e.LineListDrawMode : kk.overrideRenderingFillMode ?? Mk.fillMode;
            let nk = Mk._getEffectiveOrientation(kk);
            ek.wasAddedByNoopNode && !kk.XF().useRightHandedSystem && (nk = nk === Sk.e.ClockWiseSideOrientation ? Sk.e.CounterClockWiseSideOrientation : Sk.e.ClockWiseSideOrientation), this._exportIndices(fk, fk ? (0, zi.e)(fk, Kk.indexCount, Kk.indexStart, Kk.verticesStart) : Kk.verticesCount > 65535, fk ? Kk.indexStart : Kk.verticesStart, fk ? Kk.indexCount : Kk.verticesCount, -Kk.verticesStart, xk, nk, ek, ik);
            for (const kk of Object.values(bk)) this._exportVertexBuffer(kk, Mk, Kk.verticesStart, Kk.verticesCount, ek, ik);
            if (rk) {
              ik.targets = [];
              for (const kk of rk) ik.targets.push(kk.attributes)
            }
            Dk.primitives.push(ik), this._extensionsPostExportMeshPrimitive(ik)
          }
        if (rk) {
          Dk.weights = [], Dk.extras || (Dk.extras = {}), Dk.extras.targetNames = [];
          for (const kk of rk) Dk.weights.push(kk.influence), Dk.extras.targetNames.push(kk.name)
        }
        return ik
      }
    }
    hD._ExtensionNames = new Array, hD._ExtensionFactories = {}, hD._ExtensionOrders = {};
    class aD {
      static async GLTFAsync(kk, ek, ik) {
        ik && ik.exportWithoutWaitingForScene || await kk.whenReadyAsync();
        const Dk = new hD(kk, ik),
          fk = await Dk.generateGLTFAsync(ek.replace(/\.[^/.]+$/, ""));
        return Dk.dispose(), fk
      }
      static async GLBAsync(kk, ek, ik) {
        ik && ik.exportWithoutWaitingForScene || await kk.whenReadyAsync();
        const Dk = new hD(kk, ik),
          fk = await Dk.generateGLBAsync(ek.replace(/\.[^/.]+$/, ""));
        return Dk.dispose(), fk
      }
    }
    const WD = "EXT_mesh_gpu_instancing";

    function tD(kk, ek) {
      const ik = new Float32Array(3 * ek);
      for (let Dk = 0; Dk < ek; Dk++) ik[3 * Dk + 0] = kk[4 * Dk + 0], ik[3 * Dk + 1] = kk[4 * Dk + 1], ik[3 * Dk + 2] = kk[4 * Dk + 2];
      return ik
    }
    class XD {
      constructor(kk) {
        this.name = WD, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(kk, ek, ik, Dk, fk, Sk) {
        return await new Promise((kk => {
          if (ek && ik instanceof sD.e && ik.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const kk = ak.o.Zero(),
              Dk = ak.c.Identity(),
              bk = ak.o.One(),
              rk = ik.thinInstanceGetWorldMatrices(),
              Pk = ak.j.eH[2],
              mk = ak.j.Quaternion[1],
              Mk = ak.j.eH[3];
            let Kk = !1,
              xk = !1,
              nk = !1;
            const Uk = new Float32Array(3 * ik.h_),
              Hk = new Float32Array(4 * ik.h_),
              wk = new Float32Array(3 * ik.h_);
            let lk = 0;
            for (const ek of rk) ek.decompose(Mk, mk, Pk), fk && (Oi(Pk), gi(mk)), Uk.set(Pk.Tik(), 3 * lk), Hk.set(mk.normalize().Tik(), 4 * lk), wk.set(Mk.Tik(), 3 * lk), Kk = Kk || !Pk.equalsWithEpsilon(kk), xk = xk || !mk.equalsWithEpsilon(Dk), nk = nk || !Mk.equalsWithEpsilon(bk), lk++;
            const pk = {
              attributes: {}
            };
            Kk && (pk.attributes.TRANSLATION = this._buildAccessor(Uk, "VEC3", ik.h_, Sk)), xk && (pk.attributes.ROTATION = this._buildAccessor(Hk, "VEC4", ik.h_, Sk)), nk && (pk.attributes.SCALE = this._buildAccessor(wk, "VEC3", ik.h_, Sk));
            let yk = ik._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (yk) {
              const kk = ik.h_,
                ek = "VEC3";
              ik.hasVertexAlpha && yk.length === 4 * kk ? (this._instanceColorWarned || (Vk.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), yk = tD(yk, kk)) : yk.length === 4 * kk && (yk = tD(yk, kk)), yk.length === 3 * kk && (pk.attributes._COLOR_0 = this._buildAccessor(yk, ek, kk, Sk))
            }
            ek.extensions = ek.extensions || {}, ek.extensions[WD] = pk
          }
          kk(ek)
        }))
      }
      _buildAccessor(kk, ek, ik, Dk) {
        const fk = Dk.createBufferView(kk),
          Sk = Dk.createAccessor(fk, ek, 5126, ik);
        return this._exporter._accessors.push(Sk), this._exporter._accessors.length - 1
      }
    }
    let BD = !1;

    function cD() {
      BD || (BD = !0, hD.RegisterExtension(WD, (kk => new XD(kk))))
    }
    ik(40055);
    cD();
    var TD = ik(41430);

    function oD(kk, ek, ik, Dk) {
      const fk = kk;
      let Sk = null,
        bk = null,
        rk = null,
        Pk = null;
      const mk = {},
        Mk = ek.find((kk => "POSITION" === kk.dracoName));
      if (!Mk) throw new Error("Draco: Missing position attribute for encoding.");
      if (!ik) {
        const kk = Mk.data.length / Mk.size;
        ik = new(kk > 65535 ? Uint32Array : Uint16Array)(kk);
        for (let ek = 0; ek < kk; ek++) ik[ek] = ek
      }
      try {
        Sk = new fk.Encoder, bk = new fk.MeshBuilder, rk = new fk.Mesh, bk.AddFacesToMesh(rk, ik.length / 3, ik);
        const kk = new Map([
          [Float32Array, (kk, ek, ik, Dk, fk, Sk) => kk.AddFloatAttribute(ek, ik, Dk, fk, Sk)],
          [Uint32Array, (kk, ek, ik, Dk, fk, Sk) => kk.AddUInt32Attribute(ek, ik, Dk, fk, Sk)],
          [Uint16Array, (kk, ek, ik, Dk, fk, Sk) => kk.AddUInt16Attribute(ek, ik, Dk, fk, Sk)],
          [Uint8Array, (kk, ek, ik, Dk, fk, Sk) => kk.AddUInt8Attribute(ek, ik, Dk, fk, Sk)],
          [Int32Array, (kk, ek, ik, Dk, fk, Sk) => kk.AddInt32Attribute(ek, ik, Dk, fk, Sk)],
          [Int16Array, (kk, ek, ik, Dk, fk, Sk) => kk.AddInt16Attribute(ek, ik, Dk, fk, Sk)],
          [Int8Array, (kk, ek, ik, Dk, fk, Sk) => kk.AddInt8Attribute(ek, ik, Dk, fk, Sk)]
        ]);
        for (const ik of ek) {
          ik.data instanceof Uint8ClampedArray && (ik.data = new Uint8Array(ik.data));
          const ek = kk.get(ik.data.constructor),
            Pk = ik.data.length / ik.size;
          mk[ik.kind] = ek(bk, rk, fk[ik.dracoName], Pk, ik.size, ik.data), Dk.quantizationBits && Dk.quantizationBits[ik.dracoName] && Sk.SetAttributeQuantization(fk[ik.dracoName], Dk.quantizationBits[ik.dracoName])
        }
        Dk.method && Sk.SetEncodingMethod(fk[Dk.method]), void 0 !== Dk.encodeSpeed && void 0 !== Dk.decodeSpeed && Sk.SetSpeedOptions(Dk.encodeSpeed, Dk.decodeSpeed), Pk = new fk.DracoInt8Array;
        const Mk = Sk.EncodeMeshToDracoBuffer(rk, Pk);
        if (Mk <= 0) throw new Error("Draco: Failed to encode.");
        const Kk = new Int8Array(Mk);
        for (let ek = 0; ek < Mk; ek++) Kk[ek] = Pk.GetValue(ek);
        return {
          data: Kk,
          attributeIds: mk
        }
      } finally {
        rk && fk.destroy(rk), bk && fk.destroy(bk), Sk && fk.destroy(Sk), Pk && fk.destroy(Pk)
      }
    }

    function ZD() {
      let kk;
      onmessage = ek => {
        const ik = ek.data;
        switch (ik.id) {
          case "init": {
            ik.url && importScripts(ik.url);
            const ek = ik.wasmBinary ? {
              wasmBinary: ik.wasmBinary
            } : {};
            kk = DracoEncoderModule(ek), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!kk) throw new Error("Draco: Encoder module is not available.");
            kk.then((kk => {
              const ek = oD(kk, ik.attributes, ik.indices, ik.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: ek
              }, ek ? [ek.data.buffer] : void 0)
            })).catch((kk => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: kk.message
              })
            }))
        }
      }
    }
    class OD {
      constructor(kk) {
        if (kk.workerPool) return void(this._workerPoolPromise = Promise.resolve(kk.workerPool));
        const ek = kk.wasmBinary,
          ik = kk.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Dk = ik && "function" === typeof Worker && "function" === typeof URL,
          fk = Dk || !kk.jsModule,
          Sk = kk.wasmUrl && kk.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: fk ? se.i.GetBabylonScriptURL(kk.wasmUrl, !0) : "",
            wasmBinaryPromise: ek ? Promise.resolve(ek) : se.i.LoadFileAsync(se.i.GetBabylonScriptURL(kk.wasmBinaryUrl, !0))
          } : {
            url: fk ? se.i.GetBabylonScriptURL(kk.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Dk ? this._workerPoolPromise = Sk.wasmBinaryPromise.then((kk => {
          const ek = this._getWorkerContent(),
            Dk = URL.createObjectURL(new Blob([ek], {
              type: "application/javascript"
            }));
          return new TD.c(ik, (() => async function(kk, ek, ik) {
            return await new Promise(((Dk, fk) => {
              const Sk = ek => {
                  kk.removeEventListener("error", Sk), kk.removeEventListener("message", bk), fk(ek)
                },
                bk = ek => {
                  "initDone" === ek.data.id && (kk.removeEventListener("error", Sk), kk.removeEventListener("message", bk), Dk(kk))
                };
              if (kk.addEventListener("error", Sk), kk.addEventListener("message", bk), ek) {
                const Dk = ek.slice(0);
                kk.postMessage({
                  id: "init",
                  url: ik,
                  wasmBinary: Dk
                }, [Dk])
              } else kk.postMessage({
                id: "init",
                url: ik
              })
            }))
          }(new Worker(Dk), kk, Sk.url)))
        })) : this._modulePromise = Sk.wasmBinaryPromise.then((async ek => {
          if (!this._isModuleAvailable() && !kk.jsModule) {
            if (!Sk.url) throw new Error("Draco codec module is not available");
            await se.i.LoadBabylonScriptAsync(Sk.url)
          }
          return await this._createModuleAsync(ek, kk.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((kk => {
          kk.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function gD() {
      const kk = kk => !!kk && "object" === typeof kk;
      for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
      return ik.reduce(((ek, ik) => {
        const Dk = Object.keys(ik);
        for (const fk of Dk) {
          const Dk = ek[fk],
            Sk = ik[fk];
          Array.isArray(Dk) && Array.isArray(Sk) ? ek[fk] = Dk.concat(Sk) : kk(Dk) && kk(Sk) ? ek[fk] = gD(Dk, Sk) : ek[fk] = Sk
        }
        return ek
      }), {})
    }

    function GD(kk) {
      return kk === Wk.e.PositionKind ? "POSITION" : kk === Wk.e.NormalKind ? "NORMAL" : kk === Wk.e.ColorKind ? "COLOR" : kk.startsWith(Wk.e.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const ND = {
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
    class RD extends OD {
      static get DefaultAvailable() {
        return !!((kk = RD.DefaultConfiguration).wasmUrl && (kk.wasmBinary || kk.wasmBinaryUrl) && "object" === typeof WebAssembly || kk.fallbackUrl);
        var kk
      }
      static get Default() {
        return RD._Default ?? (RD._Default = new RD), RD._Default
      }
      static ResetDefault(kk) {
        RD._Default && (kk || RD._Default.dispose(), RD._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(kk, ek) {
        return {
          module: await (ek || DracoEncoderModule)({
            wasmBinary: kk
          })
        }
      }
      _getWorkerContent() {
        return `${oD}(${ZD})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RD.DefaultConfiguration)
      }
      async _encodeAsync(kk, ek, ik) {
        const Dk = ik ? gD(ND, ik) : ND;
        if (this._workerPoolPromise) {
          const ik = await this._workerPoolPromise;
          return await new Promise(((fk, Sk) => {
            ik.push(((ik, bk) => {
              const rk = kk => {
                  ik.removeEventListener("error", rk), ik.removeEventListener("message", Pk), Sk(kk), bk()
                },
                Pk = kk => {
                  "encodeMeshSuccess" === kk.data.id ? (ik.removeEventListener("error", rk), ik.removeEventListener("message", Pk), fk(kk.data.encodedMeshData), bk()) : "encodeMeshError" === kk.data.id && (ik.removeEventListener("error", rk), ik.removeEventListener("message", Pk), Sk(new Error(kk.data.errorMessage)), bk())
                };
              ik.addEventListener("error", rk), ik.addEventListener("message", Pk);
              const mk = [];
              for (const ek of kk) mk.push(ek.data.buffer);
              ek && mk.push(ek.buffer), ik.postMessage({
                id: "encodeMesh",
                attributes: kk,
                indices: ek,
                options: Dk
              }, mk)
            }))
          }))
        }
        if (this._modulePromise) {
          return oD((await this._modulePromise).module, kk, ek, Dk)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(kk, ek) {
        if (0 == kk.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        kk instanceof sD.e && kk.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === ek?.method && (Vk.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), ek.method = "MESH_SEQUENTIAL_ENCODING");
        const ik = function(kk) {
            let ek = kk.oik(void 0, !0);
            return !ek || ek instanceof Uint32Array || ek instanceof Uint16Array || (ek = ((0, zi.e)(ek, ek.length) ? Uint32Array : Uint16Array).from(ek)), ek
          }(kk),
          Dk = function(kk, ek) {
            const ik = [];
            for (const Dk of kk.getVerticesDataKinds()) {
              if (ek?.includes(Dk)) {
                if (Dk === Wk.e.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const fk = kk.getVertexBuffer(Dk),
                Sk = fk.getSize(),
                bk = (0, zi.q)(fk.getData(), Sk, fk.type, fk.byteOffset, fk.byteStride, kk.getTotalVertices(), !0);
              ik.push({
                kind: Dk,
                dracoName: GD(Dk),
                size: Sk,
                data: bk
              })
            }
            return ik
          }(kk, ek?.excludedAttributes);
        return await this._encodeAsync(Dk, ik, ek)
      }
    }
    RD.DefaultConfiguration = {
      wasmUrl: `${se.i._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${se.i._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${se.i._DefaultCdnUrl}/draco_encoder.js`
    }, RD._Default = null;
    const JD = "KHR_draco_mesh_compression";
    class kf {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(kk) {
        this.name = JD, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === kk.options.meshCompressionMethod && RD.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(kk, ek, ik) {
        if (!this.enabled) return;
        if (4 !== kk.mode && 5 !== kk.mode) return void Vk.b.Warn("Cannot compress primitive with mode " + kk.mode + ".");
        const Dk = [],
          fk = [];
        let Sk = null;
        if (void 0 !== kk.indices) {
          const bk = ik[kk.indices],
            rk = ek.getBufferView(bk);
          Sk = ek.getData(rk).slice(), Dk.push(rk), fk.push(bk)
        }
        const bk = [];
        for (const [Mk, Kk] of Object.entries(kk.attributes)) {
          const kk = ik[Kk],
            Sk = ek.getBufferView(kk),
            Pk = Ti(kk.type),
            mk = (0, zi.q)(ek.getData(Sk), Pk, kk.componentType, kk.byteOffset || 0, Sk.byteStride || (0, zi.p)(kk.componentType) * Pk, kk.count, !0);
          bk.push({
            kind: Mk,
            dracoName: (rk = Mk, "POSITION" === rk ? "POSITION" : "NORMAL" === rk ? "NORMAL" : rk.startsWith("COLOR") ? "COLOR" : rk.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Ti(kk.type),
            data: mk
          }), Dk.push(Sk), fk.push(kk)
        }
        var rk;
        const Pk = {
            method: kk.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          mk = RD.Default._encodeAsync(bk, Sk, Pk).then((ik => {
            const Sk = {
                bufferView: -1,
                attributes: ik.attributeIds
              },
              bk = ek.createBufferView(ik.data);
            ek.setBufferView(Sk, bk);
            for (const kk of Dk) this._bufferViewsUsed.add(kk);
            for (const kk of fk) this._accessorsUsed.add(kk);
            kk.extensions || (kk.extensions = {}), kk.extensions[JD] = Sk
          })).catch((kk => {
            Vk.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + kk.message)
          }));
        this._encodePromises.push(mk), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(kk) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((ek => {
          kk.getPropertiesWithBufferView(ek).every((kk => this._accessorsUsed.has(kk))) && kk.removeBufferView(ek)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let ef = !1;

    function Df() {
      ef || (ef = !0, hD.RegisterExtension(JD, (kk => new kf(kk))))
    }
    Df();
    var ff = ik(41145);
    const Sf = "KHR_lights_punctual",
      bf = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      rf = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      Pf = ak.o.Backward();
    class mf {
      constructor(kk) {
        this.name = Sf, this.enabled = !0, this.required = !1, this._exporter = kk
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Sf] = this._lights
      }
      async postExportNodeAsync(kk, ek, ik, Dk, fk) {
        return await new Promise((Sk => {
          if (!(ik instanceof nD.d)) return void Sk(ek);
          const bk = ik.getTypeID() == nD.d.LIGHTTYPEID_POINTLIGHT ? "point" : ik.getTypeID() == nD.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : ik.getTypeID() == nD.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!bk || !(ik instanceof ff.b)) return Vk.b.Warn(`${kk}: Light ${ik.name} is not supported in ${Sf}`), void Sk(ek);
          if (ik.falloffType !== nD.d.FALLOFF_GLTF && Vk.b.Warn(`${kk}: Light falloff for ${ik.name} does not match the ${Sf} specification!`), !ik.position.Hbk(0, 0, 0)) {
            const kk = ak.j.eH[0].Fs(ik.position);
            fk && Oi(kk), ek.translation = kk.Tik()
          }
          if ("point" !== bk) {
            const kk = ik.direction.normalizeToRef(ak.j.eH[0]);
            fk && Oi(kk);
            const Dk = ak.c.FromUnitVectorsToRef(Pf, kk, ak.j.Quaternion[0]);
            ak.c.IsIdentity(Dk) || (ek.rotation = Dk.Tik())
          }
          const rk = {
            type: bk,
            name: ik.name,
            color: ik.diffuse.Tik(),
            intensity: ik.intensity,
            range: ik.range
          };
          if (kD(rk, bf), "spot" === bk) {
            const kk = ik;
            rk.spot = {
              innerConeAngle: kk.innerAngle / 2,
              outerConeAngle: kk.angle / 2
            }, kD(rk.spot, rf)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(rk);
          const Pk = {
              light: this._lights.lights.length - 1
            },
            mk = ik.parent;
          if (mk && Ri(ik, mk)) {
            const kk = Dk.get(mk);
            if (kk) {
              const ik = this._exporter._nodes[kk];
              return Ni(ek, ik), ik.extensions || (ik.extensions = {}), ik.extensions[Sf] = Pk, void Sk(null)
            }
          }
          ek.extensions || (ek.extensions = {}), ek.extensions[Sf] = Pk, Sk(ek)
        }))
      }
    }
    let Mf = !1;

    function Kf() {
      Mf || (Mf = !0, hD.RegisterExtension(Sf, (kk => new mf(kk))))
    }
    Kf();
    const xf = "KHR_interactivity";
    class nf {
      constructor(kk) {
        this._exporter = kk, this.name = xf, this.enabled = !!kk.options.khrInteractivity, this.required = kk.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var kk, ek, ik;
        const Dk = this._exporter.options.khrInteractivity;
        if (!Dk) return;
        const fk = Dk.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: kk => this._exporter._getNodeIndex(kk),
          getAnimationIndex: kk => this._exporter._getAnimationIndex(kk),
          getCameraIndex: kk => this._exporter._getCameraIndex(kk),
          getMaterialIndex: kk => this._exporter._getMaterialIndex(kk),
          getRootIndex: (kk, ek) => this._exporter._getRootIndex(kk, ek),
          setNodeExtension: (kk, ek, ik) => this._exporter._setNodeExtension(kk, ek, ik)
        });
        this._exporter._glTF.extensions[xf] = fk;
        for (const Sk of Dk.additionalExtensionsUsed)(kk = this._exporter._glTF).extensionsUsed || (kk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Sk) && this._exporter._glTF.extensionsUsed.push(Sk);
        for (const Sk of Dk.additionalExtensionsRequired)(ek = this._exporter._glTF).extensionsUsed || (ek.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Sk) && this._exporter._glTF.extensionsUsed.push(Sk), (ik = this._exporter._glTF).extensionsRequired || (ik.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(Sk) && this._exporter._glTF.extensionsRequired.push(Sk)
      }
    }
    let Uf = !1;

    function Hf() {
      Uf || (Uf = !0, hD.RegisterExtension(xf, (kk => new nf(kk)), 200))
    }
    Hf();
    const wf = "EXT_lights_area",
      lf = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      pf = {
        aspect: 1
      },
      yf = ak.o.Backward();
    class Yf {
      constructor(kk) {
        this.name = wf, this.enabled = !0, this.required = !1, this._exporter = kk
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[wf] = this._lights
      }
      async postExportNodeAsync(kk, ek, ik, Dk, fk) {
        return await new Promise((Sk => {
          if (!(ik instanceof nD.d)) return void Sk(ek);
          const bk = ik.getTypeID() == nD.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!bk) return Vk.b.Warn(`${kk}: Light ${ik.name} is not supported in ${wf}`), void Sk(ek);
          const rk = ik;
          if (rk.falloffType !== nD.d.FALLOFF_GLTF && Vk.b.Warn(`${kk}: Light falloff for ${ik.name} does not match the ${wf} specification!`), !rk.position.Hbk(0, 0, 0)) {
            const kk = ak.j.eH[0].Fs(rk.position);
            fk && Oi(kk), ek.translation = kk.Tik()
          }
          const Pk = ak.o.Forward();
          fk && Oi(Pk);
          const mk = ak.c.FromUnitVectorsToRef(yf, Pk, ak.j.Quaternion[0]);
          ak.c.IsIdentity(mk) || (ek.rotation = mk.Tik());
          const Mk = {
            type: bk,
            name: rk.name,
            color: rk.diffuse.Tik(),
            intensity: rk.intensity,
            size: rk.height,
            rect: {
              aspect: rk.width / rk.height
            }
          };
          kD(Mk, lf), Mk.rect && kD(Mk.rect, pf), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Mk);
          const Kk = {
              light: this._lights.lights.length - 1
            },
            xk = ik.parent;
          if (xk && Ri(rk, xk)) {
            const kk = Dk.get(xk);
            if (kk) {
              const ik = this._exporter._nodes[kk];
              return Ni(ek, ik), ik.extensions || (ik.extensions = {}), ik.extensions[wf] = Kk, void Sk(null)
            }
          }
          ek.extensions || (ek.extensions = {}), ek.extensions[wf] = Kk, Sk(ek)
        }))
      }
    }
    let Lf = !1;

    function Cf() {
      Lf || (Lf = !0, hD.RegisterExtension(wf, (kk => new Yf(kk))))
    }
    Cf();
    const Af = "KHR_materials_anisotropy";
    class jf {
      constructor(kk) {
        this.name = Af, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        const Dk = [];
        if (ik instanceof Ae) {
          if (ik.anisotropy.isEnabled && !ik.anisotropy.legacy) return ik.anisotropy.texture && Dk.push(ik.anisotropy.texture), Dk
        } else if (ik instanceof Je && ik.specularRoughnessAnisotropy > 0) {
          const kk = function(kk) {
            const ek = kk.specularRoughnessAnisotropyTexture,
              ik = kk.geometryTangentTexture;
            return `${ek&&ek.getInternalTexture()?ek.getInternalTexture().uniqueId:"NoStrength"}_${ik&&ik.getInternalTexture()?ik.getInternalTexture().uniqueId:"NoTangent"}`
          }(ik);
          if (this._anisoTexturesMap[kk]) Dk.push(this._anisoTexturesMap[kk]);
          else {
            const ek = await async function(kk) {
              const ek = kk.XF(),
                ik = kk.specularRoughnessAnisotropyTexture,
                Dk = kk.geometryTangentTexture;
              return ik || Dk ? await ri("AnisotropyTexture", Mi(Dk ? Pi(Dk, 0) : mi(1), Dk ? Pi(Dk, 1) : mi(0), ik ? Pi(ik, 0) : mi(1)), ek) : null
            }(ik);
            ek && (Dk.push(ek), this._anisoTexturesMap[kk] = ek)
          }
          return Dk
        }
        return []
      }
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((kk => {
          var Dk;
          if (ik instanceof Ae) {
            if (!ik.anisotropy.isEnabled || ik.anisotropy.legacy) return void kk(ek);
            this._wasUsed = !0, ek.extensions = ek.extensions || {};
            const Dk = this._exporter._materialExporter.getTextureInfo(ik.anisotropy.texture),
              fk = {
                anisotropyStrength: ik.anisotropy.intensity,
                anisotropyRotation: ik.anisotropy.angle,
                anisotropyTexture: Dk ?? void 0
              };
            null !== fk.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(ik), ek.extensions[Af] = fk
          } else if (ik instanceof Je && ik.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, ek.extensions = ek.extensions || {};
            let fk = ik.specularRoughnessTexture;
            ik._useRoughnessFromMetallicTextureGreen && (fk = ik.baseMetalnessTexture);
            const Sk = this._anisoTexturesMap[ik.id];
            if (!fk && !Sk) {
              let Dk = ik.specularRoughness,
                fk = ik.specularRoughnessAnisotropy;
              if (!ik._useGltfStyleAnisotropy) {
                const kk = function(kk, ek) {
                  const ik = kk * kk,
                    Dk = ik * Math.sqrt(2 / (1 + (1 - ek) * (1 - ek))),
                    fk = (1 - ek) * Dk;
                  return {
                    newBaseRoughness: Math.sqrt(fk),
                    newAnisotropyStrength: Math.min(Math.sqrt((Dk - ik) / Math.max(1 - ik, 1e-4)), 1)
                  }
                }(ik.specularRoughness, ik.specularRoughnessAnisotropy);
                Dk = kk.newBaseRoughness, fk = kk.newAnisotropyStrength
              }
              ek.pbrMetallicRoughness && (ek.pbrMetallicRoughness.roughnessFactor = Dk);
              const Sk = {
                anisotropyStrength: fk,
                anisotropyRotation: ik.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return ek.extensions[Af] = Sk, kk(ek)
            }
            const bk = Sk ? this._exporter._materialExporter.getTextureInfo(Sk) : null,
              rk = {
                anisotropyStrength: ik.specularRoughnessAnisotropy,
                anisotropyRotation: ik.geometryTangentAngle,
                anisotropyTexture: bk || void 0,
                extensions: {}
              };
            ik._useGltfStyleAnisotropy || (ek.extensions.KHR_materials_openpbr = {}, (Dk = this._exporter._glTF).extensionsUsed || (Dk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(ik), ek.extensions[Af] = rk
          }
          kk(ek)
        }))
      }
    }
    let sf = !1;

    function df() {
      sf || (sf = !0, hD.RegisterExtension(Af, (kk => new jf(kk))))
    }
    df();
    const Vf = "KHR_materials_clearcoat";

    function Ff(kk, ek) {
      const ik = new uk.f(ek.name, ek.XF());
      return ik._texture = kk, ik.coordinatesIndex = ek.coordinatesIndex, ek instanceof uk.f && (ik.uOffset = ek.uOffset, ik.vOffset = ek.vOffset, ik.uScale = ek.uScale, ik.vScale = ek.vScale, ik.wAng = ek.wAng), ik.wrapU = ek.wrapU, ik.wrapV = ek.wrapV, ik
    }
    class uf {
      constructor(kk) {
        this.name = Vf, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = kk
      }
      dispose() {
        for (const kk of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[kk].dispose()
        }
        this._mergedTexturesMap = {};
        for (const kk of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[kk].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        const Dk = [];
        if (ik instanceof Ae) {
          if (ik.clearCoat.isEnabled) return ik.clearCoat.texture && Dk.push(ik.clearCoat.texture), !ik.clearCoat.useRoughnessFromMainTexture && ik.clearCoat.textureRoughness && Dk.push(ik.clearCoat.textureRoughness), ik.clearCoat.bumpTexture && Dk.push(ik.clearCoat.bumpTexture), Dk
        } else if (ik instanceof Je && ik.coatWeight > 0) {
          let kk = !1;
          if (ik.coatWeightTexture ? ik.coatRoughnessTexture ? ik._useCoatRoughnessFromGreenChannel && ik.coatWeightTexture.getInternalTexture() === ik.coatRoughnessTexture.getInternalTexture() ? (Dk.push(ik.coatWeightTexture), Dk.push(ik.coatRoughnessTexture)) : kk = !0 : Dk.push(ik.coatWeightTexture) : ik.coatRoughnessTexture && (ik._useCoatRoughnessFromGreenChannel ? Dk.push(ik.coatRoughnessTexture) : kk = !0), kk) {
            const kk = function(kk) {
              const ek = kk.coatWeightTexture,
                ik = ek && ek.getInternalTexture() ? ek.getInternalTexture().uniqueId : "NoCoat",
                Dk = kk.coatRoughnessTexture;
              return `${ik}_${Dk&&Dk.getInternalTexture()?Dk.getInternalTexture().uniqueId:"NoRoughness"}`
            }(ik);
            if (!this._cachedInternalTexturesMap[kk]) {
              const ek = await async function(kk) {
                const ek = kk.XF(),
                  ik = kk.coatWeightTexture,
                  Dk = kk.coatRoughnessTexture;
                return ik || Dk ? (await ri("CoatTexture", Mi(ik ? Pi(ik, 0) : mi(1), Dk ? Pi(Dk, kk._useCoatRoughnessFromGreenChannel ? 1 : 0) : mi(1)), ek)).getInternalTexture() : null
              }(ik);
              ek && (this._cachedInternalTexturesMap[kk] = ek)
            }
            this._cachedInternalTexturesMap[kk] && (ik.coatWeightTexture && (this._mergedTexturesMap[ik.coatWeightTexture.uniqueId] = Ff(this._cachedInternalTexturesMap[kk], ik.coatWeightTexture), Dk.push(this._mergedTexturesMap[ik.coatWeightTexture.uniqueId])), ik.coatRoughnessTexture && (this._mergedTexturesMap[ik.coatRoughnessTexture.uniqueId] = Ff(this._cachedInternalTexturesMap[kk], ik.coatRoughnessTexture), Dk.push(this._mergedTexturesMap[ik.coatRoughnessTexture.uniqueId])))
          }
          return ik.geometryCoatNormalTexture && Dk.push(ik.geometryCoatNormalTexture), Dk
        }
        return []
      }
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((kk => {
          if (ik instanceof Ae) {
            if (!ik.clearCoat.isEnabled) return void kk(ek);
            this._wasUsed = !0, ek.extensions = ek.extensions || {};
            const Dk = this._exporter._materialExporter.getTextureInfo(ik.clearCoat.texture);
            let fk;
            fk = ik.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(ik.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(ik.clearCoat.textureRoughness), ik.clearCoat.isTintEnabled && se.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${ik.name}`), ik.clearCoat.remapF0OnInterfaceChange && se.i.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${ik.name}`);
            const Sk = this._exporter._materialExporter.getTextureInfo(ik.clearCoat.bumpTexture),
              bk = {
                clearcoatFactor: ik.clearCoat.intensity,
                clearcoatTexture: Dk ?? void 0,
                clearcoatRoughnessFactor: ik.clearCoat.roughness,
                clearcoatRoughnessTexture: fk ?? void 0,
                clearcoatNormalTexture: Sk ?? void 0
              };
            null === bk.clearcoatTexture && null === bk.clearcoatRoughnessTexture && null === bk.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ik), ek.extensions[Vf] = bk
          } else if (ik instanceof Je) {
            if (0 == ik.coatWeight) return void kk(ek);
            let Dk, fk, Sk, bk;
            this._wasUsed = !0, ek.extensions = ek.extensions || {}, ik.coatWeightTexture && (Dk = this._mergedTexturesMap[ik.coatWeightTexture.uniqueId], fk = this._exporter._materialExporter.getTextureInfo(Dk)), ik.coatRoughnessTexture && (Sk = this._mergedTexturesMap[ik.coatRoughnessTexture.uniqueId], bk = this._exporter._materialExporter.getTextureInfo(Sk)), ik.coatColorTexture && se.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${ik.name}`);
            const rk = this._exporter._materialExporter.getTextureInfo(ik.geometryCoatNormalTexture),
              Pk = {
                clearcoatFactor: ik.coatWeight,
                clearcoatTexture: fk ?? void 0,
                clearcoatRoughnessFactor: ik.coatRoughness,
                clearcoatRoughnessTexture: bk ?? void 0,
                clearcoatNormalTexture: rk ?? void 0
              };
            null === Pk.clearcoatTexture && null === Pk.clearcoatRoughnessTexture && null === Pk.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ik), ek.extensions[Vf] = Pk
          }
          kk(ek)
        }))
      }
    }
    let qf = !1;

    function If() {
      qf || (qf = !0, hD.RegisterExtension(Vf, (kk => new uf(kk))))
    }
    If();
    const zf = "KHR_materials_coat";

    function Qf(kk) {
      const ek = kk.coatRoughnessAnisotropyTexture,
        ik = kk.geometryCoatTangentTexture;
      return `${ek&&ek.getInternalTexture()?ek.getInternalTexture().uniqueId:"NoStrength"}_${ik&&ik.getInternalTexture()?ik.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function vf(kk, ek) {
      const ik = new uk.f(ek.name, ek.XF());
      return ik._texture = kk, ik.coordinatesIndex = ek.coordinatesIndex, ek instanceof uk.f && (ik.uOffset = ek.uOffset, ik.vOffset = ek.vOffset, ik.uScale = ek.uScale, ik.vScale = ek.vScale, ik.wAng = ek.wAng), ik.wrapU = ek.wrapU, ik.wrapV = ek.wrapV, ik
    }
    class Ef {
      constructor(kk) {
        this.name = zf, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = kk
      }
      dispose() {
        for (const kk of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[kk].dispose()
        }
        this._mergedTexturesMap = {};
        for (const kk of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[kk].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        const Dk = [];
        if (ik instanceof Ae) {
          if (ik.clearCoat.isEnabled) return ik.clearCoat.texture && Dk.push(ik.clearCoat.texture), !ik.clearCoat.useRoughnessFromMainTexture && ik.clearCoat.textureRoughness && Dk.push(ik.clearCoat.textureRoughness), ik.clearCoat.bumpTexture && Dk.push(ik.clearCoat.bumpTexture), ik.clearCoat.tintTexture && Dk.push(ik.clearCoat.tintTexture), Dk
        } else if (ik instanceof Je && ik.coatWeight > 0) {
          let kk = !1;
          if (ik.coatWeightTexture ? ik.coatRoughnessTexture ? ik._useCoatRoughnessFromGreenChannel && ik.coatWeightTexture.getInternalTexture() === ik.coatRoughnessTexture.getInternalTexture() ? (Dk.push(ik.coatWeightTexture), Dk.push(ik.coatRoughnessTexture)) : kk = !0 : Dk.push(ik.coatWeightTexture) : ik.coatRoughnessTexture && (ik._useCoatRoughnessFromGreenChannel ? Dk.push(ik.coatRoughnessTexture) : kk = !0), kk) {
            const kk = function(kk) {
              const ek = kk.coatWeightTexture,
                ik = ek && ek.getInternalTexture() ? ek.getInternalTexture().uniqueId : "NoCoat",
                Dk = kk.coatRoughnessTexture;
              return `${ik}_${Dk&&Dk.getInternalTexture()?Dk.getInternalTexture().uniqueId:"NoRoughness"}`
            }(ik);
            if (!this._cachedInternalTexturesMap[kk]) {
              const ek = await async function(kk) {
                const ek = kk.XF(),
                  ik = kk.coatWeightTexture,
                  Dk = kk.coatRoughnessTexture;
                return ik || Dk ? (await ri("CoatTexture", Mi(ik ? Pi(ik, 0) : mi(1), Dk ? Pi(Dk, kk._useCoatRoughnessFromGreenChannel ? 1 : 0) : mi(1)), ek)).getInternalTexture() : null
              }(ik);
              ek && (this._cachedInternalTexturesMap[kk] = ek)
            }
            this._cachedInternalTexturesMap[kk] && (ik.coatWeightTexture && (this._mergedTexturesMap[ik.coatWeightTexture.uniqueId] = vf(this._cachedInternalTexturesMap[kk], ik.coatWeightTexture), Dk.push(this._mergedTexturesMap[ik.coatWeightTexture.uniqueId])), ik.coatRoughnessTexture && (this._mergedTexturesMap[ik.coatRoughnessTexture.uniqueId] = vf(this._cachedInternalTexturesMap[kk], ik.coatRoughnessTexture), Dk.push(this._mergedTexturesMap[ik.coatRoughnessTexture.uniqueId])))
          }
          if (ik.geometryCoatNormalTexture && Dk.push(ik.geometryCoatNormalTexture), ik.coatColorTexture && Dk.push(ik.coatColorTexture), ik.coatRoughnessAnisotropy > 0) {
            const kk = Qf(ik);
            if (this._mergedTexturesMap[kk]) Dk.push(this._mergedTexturesMap[kk]);
            else {
              const ek = await async function(kk) {
                const ek = kk.XF(),
                  ik = kk.coatRoughnessAnisotropyTexture,
                  Dk = kk.geometryCoatTangentTexture;
                return ik || Dk ? await ri("AnisotropyTexture", Mi(Dk ? Pi(Dk, 0) : mi(1), Dk ? Pi(Dk, 1) : mi(0), ik ? Pi(ik, 0) : mi(1)), ek) : null
              }(ik);
              ek && (Dk.push(ek), this._mergedTexturesMap[kk] = ek)
            }
            return Dk
          }
          return Dk
        }
        return []
      }
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((kk => {
          var Dk;
          if (ik instanceof Ae) {
            if (!ik.clearCoat.isEnabled) return void kk(ek);
            this._wasUsed = !0, ek.extensions = ek.extensions || {};
            const Dk = this._exporter._materialExporter.getTextureInfo(ik.clearCoat.texture);
            let fk, Sk;
            fk = ik.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(ik.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(ik.clearCoat.textureRoughness), ik.clearCoat.isTintEnabled && (Sk = this._exporter._materialExporter.getTextureInfo(ik.clearCoat.tintTexture));
            const bk = this._exporter._materialExporter.getTextureInfo(ik.clearCoat.bumpTexture),
              rk = ik.clearCoat.indexOfRefraction,
              Pk = {
                coatFactor: ik.clearCoat.intensity,
                coatTexture: Dk ?? void 0,
                coatRoughnessFactor: ik.clearCoat.roughness,
                coatRoughnessTexture: fk ?? void 0,
                coatNormalTexture: bk ?? void 0,
                coatColorFactor: ik.clearCoat.tintColor.Tik(),
                coatColorTexture: Sk ?? void 0,
                coatIor: 1.5 !== rk ? rk : void 0
              };
            null === Pk.coatTexture && null === Pk.coatRoughnessTexture && null === Pk.coatRoughnessTexture && null === Pk.coatColorTexture || this._exporter._materialNeedsUVsSet.add(ik), ek.extensions[zf] = Pk
          } else if (ik instanceof Je) {
            if (0 == ik.coatWeight) return void kk(ek);
            let fk, Sk, bk, rk;
            this._wasUsed = !0, ek.extensions = ek.extensions || {}, ik.coatWeightTexture && (fk = this._mergedTexturesMap[ik.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[ik.coatWeightTexture.uniqueId] : ik.coatWeightTexture, Sk = this._exporter._materialExporter.getTextureInfo(fk)), ik.coatRoughnessTexture && (bk = this._mergedTexturesMap[ik.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[ik.coatRoughnessTexture.uniqueId] : ik.coatRoughnessTexture, rk = this._exporter._materialExporter.getTextureInfo(bk));
            const Pk = this._exporter._materialExporter.getTextureInfo(ik.geometryCoatNormalTexture),
              mk = this._exporter._materialExporter.getTextureInfo(ik.coatColorTexture),
              Mk = ik.coatIor,
              Kk = ik.coatDarkening,
              xk = ik.coatRoughnessTexture,
              nk = Qf(ik),
              Uk = this._mergedTexturesMap[nk];
            let Hk, wk = 0,
              lk = 0;
            if (ik.coatRoughnessAnisotropy > 0) {
              if (xk || Uk) {
                const kk = Uk ? this._exporter._materialExporter.getTextureInfo(Uk) : null;
                wk = ik.coatRoughnessAnisotropy, lk = ik.geometryCoatTangentAngle, Hk = kk || void 0
              } else {
                let kk = ik.coatRoughness,
                  Dk = ik.coatRoughnessAnisotropy;
                if (!ik._useGltfStyleAnisotropy) {
                  const ek = function(kk, ek) {
                    const ik = kk * kk,
                      Dk = ik * Math.sqrt(2 / (1 + (1 - ek) * (1 - ek))),
                      fk = (1 - ek) * Dk;
                    return {
                      newBaseRoughness: Math.sqrt(fk),
                      newAnisotropyStrength: Math.min(Math.sqrt((Dk - ik) / Math.max(1 - ik, 1e-4)), 1)
                    }
                  }(ik.coatRoughness, ik.coatRoughnessAnisotropy);
                  kk = ek.newBaseRoughness, Dk = ek.newAnisotropyStrength
                }
                ek.pbrMetallicRoughness && (ek.pbrMetallicRoughness.roughnessFactor = kk), wk = Dk, lk = ik.geometryCoatTangentAngle + .5 * Math.PI, Hk = void 0
              }
              ik._useGltfStyleAnisotropy || (ek.extensions.KHR_materials_openpbr = {}, (Dk = this._exporter._glTF).extensionsUsed || (Dk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const pk = {
              coatFactor: ik.coatWeight,
              coatTexture: Sk ?? void 0,
              coatRoughnessFactor: ik.coatRoughness,
              coatRoughnessTexture: rk ?? void 0,
              coatNormalTexture: Pk ?? void 0,
              coatColorFactor: ik.coatColor.Tik(),
              coatColorTexture: mk ?? void 0,
              coatIor: 1.5 !== Mk ? Mk : void 0,
              coatDarkeningFactor: 1 !== Kk ? Kk : void 0,
              coatAnisotropyRotation: lk,
              coatAnisotropyStrength: wk,
              coatAnisotropyTexture: Hk
            };
            null === pk.coatTexture && null === pk.coatRoughnessTexture && null === pk.coatRoughnessTexture && null === pk.coatAnisotropyTexture && null === pk.coatColorTexture || this._exporter._materialNeedsUVsSet.add(ik), ek.extensions[zf] = pk
          }
          kk(ek)
        }))
      }
    }
    let hf = !1;

    function af() {
      hf || (hf = !0, hD.RegisterExtension(zf, (kk => new Ef(kk))))
    }
    af();
    let Wf = (() => {
      var kk, ek, ik, Dk, fk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk, Vk, Fk, uk, qk, Ik, zk, vk, Ek, hk, ak, Wk, tk, Xk, Bk, ck, Tk, Ok, gk, Gk, Nk, Rk, Jk, ke, ee, ie, De, fe, Se, be, re, Pe, me, Me, Ke, xe, ne, Ue, He, we, le, pe, ye, Ye;
      let Le, Ce, se, de, Ve, Fe, ue, qe, Ie, ze, Qe, ve, Ee, he, ae, We, te, Xe, Be, ce, Te, oe, Ze, Oe, ge, Ge, Ne, Re, Je, ki, ei, ii, Di, fi, Si, bi, ri, Pi, mi, Mi, Ki, xi, ni, Ui, Hi, wi, li, yi, Yi, Li, Ci, Ai, ji, si, di, Vi, Fi, ui, qi, Ii, zi, Qi, vi, Ei, ai, Wi, ti, Xi, Bi = Ae,
        ci = [],
        Ti = [],
        oi = [],
        Zi = [],
        Oi = [],
        gi = [],
        Gi = [],
        Ni = [],
        Ri = [],
        Ji = [],
        kD = [],
        eD = [],
        iD = [],
        DD = [],
        fD = [],
        SD = [],
        bD = [],
        rD = [],
        PD = [],
        mD = [],
        MD = [],
        KD = [],
        xD = [],
        nD = [],
        UD = [],
        HD = [],
        wD = [],
        lD = [],
        pD = [],
        yD = [],
        YD = [],
        LD = [],
        CD = [],
        AD = [],
        jD = [],
        sD = [],
        dD = [],
        VD = [],
        FD = [],
        uD = [],
        qD = [],
        ID = [],
        zD = [],
        QD = [],
        vD = [],
        ED = [],
        hD = [],
        aD = [],
        WD = [],
        tD = [],
        XD = [],
        BD = [],
        cD = [],
        TD = [],
        oD = [],
        ZD = [],
        OD = [],
        gD = [],
        GD = [],
        ND = [],
        RD = [],
        JD = [],
        kf = [],
        ef = [],
        Df = [],
        ff = [],
        Sf = [],
        bf = [],
        rf = [],
        Pf = [],
        mf = [],
        Mf = [],
        Kf = [],
        xf = [],
        nf = [],
        Uf = [],
        Hf = [],
        wf = [],
        lf = [],
        pf = [],
        yf = [],
        Yf = [],
        Lf = [],
        Cf = [],
        Af = [],
        jf = [],
        sf = [],
        df = [],
        Vf = [],
        Ff = [],
        uf = [],
        qf = [],
        If = [],
        zf = [],
        Qf = [],
        vf = [],
        Ef = [],
        hf = [],
        af = [],
        Wf = [],
        tf = [],
        Xf = [],
        Bf = [],
        Tf = [],
        of = [],
        Zf = [],
        Of = [],
        gf = [],
        Gf = [],
        Nf = [],
        Rf = [],
        Jf = [],
        kS = [],
        eS = [],
        iS = [],
        DS = [],
        fS = [],
        SS = [],
        bS = [],
        rS = [],
        PS = [],
        mS = [],
        MS = [],
        KS = [],
        xS = [],
        nS = [],
        US = [],
        HS = [],
        wS = [],
        lS = [],
        pS = [],
        yS = [],
        YS = [];
      return kk = class extends Bi {
        get directIntensity() {
          return (0, sk.b)(this, ek, "f")
        }
        set directIntensity(kk) {
          (0, sk.c)(this, ek, kk, "f")
        }
        get emissiveIntensity() {
          return (0, sk.b)(this, ik, "f")
        }
        set emissiveIntensity(kk) {
          (0, sk.c)(this, ik, kk, "f")
        }
        get environmentIntensity() {
          return (0, sk.b)(this, Dk, "f")
        }
        set environmentIntensity(kk) {
          (0, sk.c)(this, Dk, kk, "f")
        }
        get specularIntensity() {
          return (0, sk.b)(this, fk, "f")
        }
        set specularIntensity(kk) {
          (0, sk.c)(this, fk, kk, "f")
        }
        get disableBumpMap() {
          return (0, sk.b)(this, bk, "f")
        }
        set disableBumpMap(kk) {
          (0, sk.c)(this, bk, kk, "f")
        }
        get albedoTexture() {
          return (0, sk.b)(this, rk, "f")
        }
        set albedoTexture(kk) {
          (0, sk.c)(this, rk, kk, "f")
        }
        get baseWeightTexture() {
          return (0, sk.b)(this, Pk, "f")
        }
        set baseWeightTexture(kk) {
          (0, sk.c)(this, Pk, kk, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, sk.b)(this, mk, "f")
        }
        set baseDiffuseRoughnessTexture(kk) {
          (0, sk.c)(this, mk, kk, "f")
        }
        get ambientTexture() {
          return (0, sk.b)(this, Mk, "f")
        }
        set ambientTexture(kk) {
          (0, sk.c)(this, Mk, kk, "f")
        }
        get ambientTextureStrength() {
          return (0, sk.b)(this, Kk, "f")
        }
        set ambientTextureStrength(kk) {
          (0, sk.c)(this, Kk, kk, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, sk.b)(this, xk, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(kk) {
          (0, sk.c)(this, xk, kk, "f")
        }
        get opacityTexture() {
          return (0, sk.b)(this, nk, "f")
        }
        set opacityTexture(kk) {
          (0, sk.c)(this, nk, kk, "f")
        }
        get reflectionTexture() {
          return (0, sk.b)(this, Uk, "f")
        }
        set reflectionTexture(kk) {
          (0, sk.c)(this, Uk, kk, "f")
        }
        get emissiveTexture() {
          return (0, sk.b)(this, Hk, "f")
        }
        set emissiveTexture(kk) {
          (0, sk.c)(this, Hk, kk, "f")
        }
        get reflectivityTexture() {
          return (0, sk.b)(this, wk, "f")
        }
        set reflectivityTexture(kk) {
          (0, sk.c)(this, wk, kk, "f")
        }
        get metallicTexture() {
          return (0, sk.b)(this, lk, "f")
        }
        set metallicTexture(kk) {
          (0, sk.c)(this, lk, kk, "f")
        }
        get metallic() {
          return (0, sk.b)(this, pk, "f")
        }
        set metallic(kk) {
          (0, sk.c)(this, pk, kk, "f")
        }
        get roughness() {
          return (0, sk.b)(this, yk, "f")
        }
        set roughness(kk) {
          (0, sk.c)(this, yk, kk, "f")
        }
        get metallicF0Factor() {
          return (0, sk.b)(this, Yk, "f")
        }
        set metallicF0Factor(kk) {
          (0, sk.c)(this, Yk, kk, "f")
        }
        get metallicReflectanceColor() {
          return (0, sk.b)(this, Lk, "f")
        }
        set metallicReflectanceColor(kk) {
          (0, sk.c)(this, Lk, kk, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, sk.b)(this, Ck, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(kk) {
          (0, sk.c)(this, Ck, kk, "f")
        }
        get metallicReflectanceTexture() {
          return (0, sk.b)(this, Ak, "f")
        }
        set metallicReflectanceTexture(kk) {
          (0, sk.c)(this, Ak, kk, "f")
        }
        get reflectanceTexture() {
          return (0, sk.b)(this, jk, "f")
        }
        set reflectanceTexture(kk) {
          (0, sk.c)(this, jk, kk, "f")
        }
        get microSurfaceTexture() {
          return (0, sk.b)(this, Vk, "f")
        }
        set microSurfaceTexture(kk) {
          (0, sk.c)(this, Vk, kk, "f")
        }
        get bumpTexture() {
          return (0, sk.b)(this, Fk, "f")
        }
        set bumpTexture(kk) {
          (0, sk.c)(this, Fk, kk, "f")
        }
        get lightmapTexture() {
          return (0, sk.b)(this, uk, "f")
        }
        set lightmapTexture(kk) {
          (0, sk.c)(this, uk, kk, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(kk) {
          this.subSurface.refractionTexture = kk, kk ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, sk.b)(this, qk, "f")
        }
        set ambientColor(kk) {
          (0, sk.c)(this, qk, kk, "f")
        }
        get albedoColor() {
          return (0, sk.b)(this, Ik, "f")
        }
        set albedoColor(kk) {
          (0, sk.c)(this, Ik, kk, "f")
        }
        get baseWeight() {
          return (0, sk.b)(this, zk, "f")
        }
        set baseWeight(kk) {
          (0, sk.c)(this, zk, kk, "f")
        }
        get baseDiffuseRoughness() {
          return (0, sk.b)(this, vk, "f")
        }
        set baseDiffuseRoughness(kk) {
          (0, sk.c)(this, vk, kk, "f")
        }
        get reflectivityColor() {
          return (0, sk.b)(this, Ek, "f")
        }
        set reflectivityColor(kk) {
          (0, sk.c)(this, Ek, kk, "f")
        }
        get reflectionColor() {
          return (0, sk.b)(this, hk, "f")
        }
        set reflectionColor(kk) {
          (0, sk.c)(this, hk, kk, "f")
        }
        get emissiveColor() {
          return (0, sk.b)(this, ak, "f")
        }
        set emissiveColor(kk) {
          (0, sk.c)(this, ak, kk, "f")
        }
        get microSurface() {
          return (0, sk.b)(this, Wk, "f")
        }
        set microSurface(kk) {
          (0, sk.c)(this, Wk, kk, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(kk) {
          this.subSurface.indexOfRefraction = kk
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(kk) {
          this.subSurface.invertRefractionY = kk
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(kk) {
          this.subSurface.linkRefractionWithTransparency = kk, kk && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, sk.b)(this, tk, "f")
        }
        set useLightmapAsShadowmap(kk) {
          (0, sk.c)(this, tk, kk, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, sk.b)(this, Xk, "f")
        }
        set useAlphaFromAlbedoTexture(kk) {
          (0, sk.c)(this, Xk, kk, "f")
        }
        get forceAlphaTest() {
          return (0, sk.b)(this, Bk, "f")
        }
        set forceAlphaTest(kk) {
          (0, sk.c)(this, Bk, kk, "f")
        }
        get alphaCutOff() {
          return (0, sk.b)(this, ck, "f")
        }
        set alphaCutOff(kk) {
          (0, sk.c)(this, ck, kk, "f")
        }
        get useSpecularOverAlpha() {
          return (0, sk.b)(this, Tk, "f")
        }
        set useSpecularOverAlpha(kk) {
          (0, sk.c)(this, Tk, kk, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, sk.b)(this, Ok, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(kk) {
          (0, sk.c)(this, Ok, kk, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, sk.b)(this, gk, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(kk) {
          (0, sk.c)(this, gk, kk, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, sk.b)(this, Gk, "f")
        }
        set useRoughnessFromMetallicTextureGreen(kk) {
          (0, sk.c)(this, Gk, kk, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, sk.b)(this, Nk, "f")
        }
        set useMetallnessFromMetallicTextureBlue(kk) {
          (0, sk.c)(this, Nk, kk, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, sk.b)(this, Rk, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(kk) {
          (0, sk.c)(this, Rk, kk, "f")
        }
        get useAmbientInGrayScale() {
          return (0, sk.b)(this, Jk, "f")
        }
        set useAmbientInGrayScale(kk) {
          (0, sk.c)(this, Jk, kk, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, sk.b)(this, ke, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(kk) {
          (0, sk.c)(this, ke, kk, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === Ae.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(kk) {
          kk !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = kk ? Ae.LIGHTFALLOFF_PHYSICAL : Ae.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === Ae.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(kk) {
          kk !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = kk ? Ae.LIGHTFALLOFF_GLTF : Ae.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, sk.b)(this, ee, "f")
        }
        set useRadianceOverAlpha(kk) {
          (0, sk.c)(this, ee, kk, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, sk.b)(this, ie, "f")
        }
        set useObjectSpaceNormalMap(kk) {
          (0, sk.c)(this, ie, kk, "f")
        }
        get useParallax() {
          return (0, sk.b)(this, De, "f")
        }
        set useParallax(kk) {
          (0, sk.c)(this, De, kk, "f")
        }
        get useParallaxOcclusion() {
          return (0, sk.b)(this, fe, "f")
        }
        set useParallaxOcclusion(kk) {
          (0, sk.c)(this, fe, kk, "f")
        }
        get parallaxScaleBias() {
          return (0, sk.b)(this, Se, "f")
        }
        set parallaxScaleBias(kk) {
          (0, sk.c)(this, Se, kk, "f")
        }
        get disableLighting() {
          return (0, sk.b)(this, be, "f")
        }
        set disableLighting(kk) {
          (0, sk.c)(this, be, kk, "f")
        }
        get forceIrradianceInFragment() {
          return (0, sk.b)(this, re, "f")
        }
        set forceIrradianceInFragment(kk) {
          (0, sk.c)(this, re, kk, "f")
        }
        get maxSimultaneousLights() {
          return (0, sk.b)(this, Pe, "f")
        }
        set maxSimultaneousLights(kk) {
          (0, sk.c)(this, Pe, kk, "f")
        }
        get invertNormalMapX() {
          return (0, sk.b)(this, me, "f")
        }
        set invertNormalMapX(kk) {
          (0, sk.c)(this, me, kk, "f")
        }
        get invertNormalMapY() {
          return (0, sk.b)(this, Me, "f")
        }
        set invertNormalMapY(kk) {
          (0, sk.c)(this, Me, kk, "f")
        }
        get twoSidedLighting() {
          return (0, sk.b)(this, Ke, "f")
        }
        set twoSidedLighting(kk) {
          (0, sk.c)(this, Ke, kk, "f")
        }
        get useAlphaFresnel() {
          return (0, sk.b)(this, xe, "f")
        }
        set useAlphaFresnel(kk) {
          (0, sk.c)(this, xe, kk, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, sk.b)(this, ne, "f")
        }
        set useLinearAlphaFresnel(kk) {
          (0, sk.c)(this, ne, kk, "f")
        }
        get environmentBRDFTexture() {
          return (0, sk.b)(this, Ue, "f")
        }
        set environmentBRDFTexture(kk) {
          (0, sk.c)(this, Ue, kk, "f")
        }
        get forceNormalForward() {
          return (0, sk.b)(this, He, "f")
        }
        set forceNormalForward(kk) {
          (0, sk.c)(this, He, kk, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, sk.b)(this, we, "f")
        }
        set enableSpecularAntiAliasing(kk) {
          (0, sk.c)(this, we, kk, "f")
        }
        get useHorizonOcclusion() {
          return (0, sk.b)(this, le, "f")
        }
        set useHorizonOcclusion(kk) {
          (0, sk.c)(this, le, kk, "f")
        }
        get useRadianceOcclusion() {
          return (0, sk.b)(this, pe, "f")
        }
        set useRadianceOcclusion(kk) {
          (0, sk.c)(this, pe, kk, "f")
        }
        get unlit() {
          return (0, sk.b)(this, ye, "f")
        }
        set unlit(kk) {
          (0, sk.c)(this, ye, kk, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, sk.b)(this, Ye, "f")
        }
        set applyDecalMapAfterDetailMap(kk) {
          (0, sk.c)(this, Ye, kk, "f")
        }
        constructor(Sk, dk) {
          super(Sk, dk, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), ek.set(this, ((0, sk.e)(this, ci), (0, sk.e)(this, Ti, 1))), ik.set(this, ((0, sk.e)(this, oi), (0, sk.e)(this, Zi, 1))), Dk.set(this, ((0, sk.e)(this, Oi), (0, sk.e)(this, gi, 1))), fk.set(this, ((0, sk.e)(this, Gi), (0, sk.e)(this, Ni, 1))), bk.set(this, ((0, sk.e)(this, Ri), (0, sk.e)(this, Ji, !1))), rk.set(this, ((0, sk.e)(this, kD), (0, sk.e)(this, eD, void 0))), Pk.set(this, ((0, sk.e)(this, iD), (0, sk.e)(this, DD, void 0))), mk.set(this, ((0, sk.e)(this, fD), (0, sk.e)(this, SD, void 0))), Mk.set(this, ((0, sk.e)(this, bD), (0, sk.e)(this, rD, void 0))), Kk.set(this, ((0, sk.e)(this, PD), (0, sk.e)(this, mD, 1))), xk.set(this, ((0, sk.e)(this, MD), (0, sk.e)(this, KD, kk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), nk.set(this, ((0, sk.e)(this, xD), (0, sk.e)(this, nD, void 0))), Uk.set(this, ((0, sk.e)(this, UD), (0, sk.e)(this, HD, void 0))), Hk.set(this, ((0, sk.e)(this, wD), (0, sk.e)(this, lD, void 0))), wk.set(this, ((0, sk.e)(this, pD), (0, sk.e)(this, yD, void 0))), lk.set(this, ((0, sk.e)(this, YD), (0, sk.e)(this, LD, void 0))), pk.set(this, ((0, sk.e)(this, CD), (0, sk.e)(this, AD, void 0))), yk.set(this, ((0, sk.e)(this, jD), (0, sk.e)(this, sD, void 0))), Yk.set(this, ((0, sk.e)(this, dD), (0, sk.e)(this, VD, 1))), Lk.set(this, ((0, sk.e)(this, FD), (0, sk.e)(this, uD, Zk.e.White()))), Ck.set(this, ((0, sk.e)(this, qD), (0, sk.e)(this, ID, !1))), Ak.set(this, ((0, sk.e)(this, zD), (0, sk.e)(this, QD, void 0))), jk.set(this, ((0, sk.e)(this, vD), (0, sk.e)(this, ED, void 0))), Vk.set(this, ((0, sk.e)(this, hD), (0, sk.e)(this, aD, void 0))), Fk.set(this, ((0, sk.e)(this, WD), (0, sk.e)(this, tD, void 0))), uk.set(this, ((0, sk.e)(this, XD), (0, sk.e)(this, BD, void 0))), qk.set(this, ((0, sk.e)(this, cD), (0, sk.e)(this, TD, new Zk.e(0, 0, 0)))), Ik.set(this, ((0, sk.e)(this, oD), (0, sk.e)(this, ZD, new Zk.e(1, 1, 1)))), zk.set(this, ((0, sk.e)(this, OD), (0, sk.e)(this, gD, 1))), vk.set(this, ((0, sk.e)(this, GD), (0, sk.e)(this, ND, void 0))), Ek.set(this, ((0, sk.e)(this, RD), (0, sk.e)(this, JD, new Zk.e(1, 1, 1)))), hk.set(this, ((0, sk.e)(this, kf), (0, sk.e)(this, ef, new Zk.e(1, 1, 1)))), ak.set(this, ((0, sk.e)(this, Df), (0, sk.e)(this, ff, new Zk.e(0, 0, 0)))), Wk.set(this, ((0, sk.e)(this, Sf), (0, sk.e)(this, bf, 1))), tk.set(this, ((0, sk.e)(this, rf), (0, sk.e)(this, Pf, !1))), Xk.set(this, ((0, sk.e)(this, mf), (0, sk.e)(this, Mf, !1))), Bk.set(this, ((0, sk.e)(this, Kf), (0, sk.e)(this, xf, !1))), ck.set(this, ((0, sk.e)(this, nf), (0, sk.e)(this, Uf, .4))), Tk.set(this, ((0, sk.e)(this, Hf), (0, sk.e)(this, wf, !0))), Ok.set(this, ((0, sk.e)(this, lf), (0, sk.e)(this, pf, !1))), gk.set(this, ((0, sk.e)(this, yf), (0, sk.e)(this, Yf, !0))), Gk.set(this, ((0, sk.e)(this, Lf), (0, sk.e)(this, Cf, !1))), Nk.set(this, ((0, sk.e)(this, Af), (0, sk.e)(this, jf, !1))), Rk.set(this, ((0, sk.e)(this, sf), (0, sk.e)(this, df, !1))), Jk.set(this, ((0, sk.e)(this, Vf), (0, sk.e)(this, Ff, !1))), ke.set(this, ((0, sk.e)(this, uf), (0, sk.e)(this, qf, !1))), ee.set(this, ((0, sk.e)(this, If), (0, sk.e)(this, zf, !0))), ie.set(this, ((0, sk.e)(this, Qf), (0, sk.e)(this, vf, !1))), De.set(this, ((0, sk.e)(this, Ef), (0, sk.e)(this, hf, !1))), fe.set(this, ((0, sk.e)(this, af), (0, sk.e)(this, Wf, !1))), Se.set(this, ((0, sk.e)(this, tf), (0, sk.e)(this, Xf, .05))), be.set(this, ((0, sk.e)(this, Bf), (0, sk.e)(this, Tf, !1))), re.set(this, ((0, sk.e)(this, of), (0, sk.e)(this, Zf, !1))), Pe.set(this, ((0, sk.e)(this, Of), (0, sk.e)(this, gf, 4))), me.set(this, ((0, sk.e)(this, Gf), (0, sk.e)(this, Nf, !1))), Me.set(this, ((0, sk.e)(this, Rf), (0, sk.e)(this, Jf, !1))), Ke.set(this, ((0, sk.e)(this, kS), (0, sk.e)(this, eS, !1))), xe.set(this, ((0, sk.e)(this, iS), (0, sk.e)(this, DS, !1))), ne.set(this, ((0, sk.e)(this, fS), (0, sk.e)(this, SS, !1))), Ue.set(this, ((0, sk.e)(this, bS), (0, sk.e)(this, rS, null))), He.set(this, ((0, sk.e)(this, PS), (0, sk.e)(this, mS, !1))), we.set(this, ((0, sk.e)(this, MS), (0, sk.e)(this, KS, !1))), le.set(this, ((0, sk.e)(this, xS), (0, sk.e)(this, nS, !0))), pe.set(this, ((0, sk.e)(this, US), (0, sk.e)(this, HS, !0))), ye.set(this, ((0, sk.e)(this, wS), (0, sk.e)(this, lS, !1))), Ye.set(this, ((0, sk.e)(this, pS), (0, sk.e)(this, yS, !1))), (0, sk.e)(this, YS), this._environmentBRDFTexture = Qk(this.XF())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(ek) {
          let ik = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const fk = je.b.Clone((() => new kk(ek, this.XF())), this, {
            cloneTexturesOnlyOnce: ik
          });
          return fk.id = ek, fk.name = ek, this.stencil.copyTo(fk.stencil), this._clonePlugins(fk, Dk), fk
        }
        serialize() {
          const kk = super.serialize();
          return kk.customType = "BABYLON.PBRMaterial", kk
        }
        static Parse(ek, ik, Dk) {
          const fk = je.b.Parse((() => new kk(ek.name, ik)), ek, ik, Dk);
          return ek.stencil && fk.stencil.parse(ek.stencil, ik, Dk), Sk.e._ParsePlugins(ek, fk, ik, Dk), ek.clearCoat && fk.clearCoat.parse(ek.clearCoat, ik, Dk), ek.anisotropy && fk.anisotropy.parse(ek.anisotropy, ik, Dk), ek.brdf && fk.brdf.parse(ek.brdf, ik, Dk), ek.sheen && fk.sheen.parse(ek.sheen, ik, Dk), ek.subSurface && fk.subSurface.parse(ek.subSurface, ik, Dk), ek.iridescence && fk.iridescence.parse(ek.iridescence, ik, Dk), fk
        }
      }, ek = new WeakMap, ik = new WeakMap, Dk = new WeakMap, fk = new WeakMap, bk = new WeakMap, rk = new WeakMap, Pk = new WeakMap, mk = new WeakMap, Mk = new WeakMap, Kk = new WeakMap, xk = new WeakMap, nk = new WeakMap, Uk = new WeakMap, Hk = new WeakMap, wk = new WeakMap, lk = new WeakMap, pk = new WeakMap, yk = new WeakMap, Yk = new WeakMap, Lk = new WeakMap, Ck = new WeakMap, Ak = new WeakMap, jk = new WeakMap, Vk = new WeakMap, Fk = new WeakMap, uk = new WeakMap, qk = new WeakMap, Ik = new WeakMap, zk = new WeakMap, vk = new WeakMap, Ek = new WeakMap, hk = new WeakMap, ak = new WeakMap, Wk = new WeakMap, tk = new WeakMap, Xk = new WeakMap, Bk = new WeakMap, ck = new WeakMap, Tk = new WeakMap, Ok = new WeakMap, gk = new WeakMap, Gk = new WeakMap, Nk = new WeakMap, Rk = new WeakMap, Jk = new WeakMap, ke = new WeakMap, ee = new WeakMap, ie = new WeakMap, De = new WeakMap, fe = new WeakMap, Se = new WeakMap, be = new WeakMap, re = new WeakMap, Pe = new WeakMap, me = new WeakMap, Me = new WeakMap, Ke = new WeakMap, xe = new WeakMap, ne = new WeakMap, Ue = new WeakMap, He = new WeakMap, we = new WeakMap, le = new WeakMap, pe = new WeakMap, ye = new WeakMap, Ye = new WeakMap, (() => {
        const ek = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bi[Symbol.metadata] ?? null) : void 0;
        Le = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ce = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], se = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], de = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ve = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Fe = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ue = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], qe = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ie = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ze = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Qe = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ve = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ee = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], he = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ae = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], We = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], te = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Xe = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Be = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ce = [(0, dk.k)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Te = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], oe = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ze = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Oe = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ge = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ge = [(0, dk.z)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty", null)], Ne = [(0, dk.k)("ambient"), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Re = [(0, dk.k)("albedo"), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Je = [(0, dk.I)("baseWeight"), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ki = [(0, dk.I)("baseDiffuseRoughness"), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ei = [(0, dk.k)("reflectivity"), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ii = [(0, dk.k)("reflection"), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Di = [(0, dk.k)("emissive"), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], fi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Si = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], bi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], ri = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Pi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], mi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Mi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ki = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], xi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ni = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ui = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Hi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], wi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], li = [(0, dk.I)()], yi = [(0, dk.I)()], Yi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Li = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ci = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ai = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ji = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], si = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsLightsDirty")], di = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Vi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsLightsDirty")], Fi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ui = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], qi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ii = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], zi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Qi = [(0, dk.e)("_markAllSubMeshesAsTexturesDirty")], vi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Ei = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ai = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], Wi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsTexturesDirty")], ti = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], Xi = [(0, dk.I)(), (0, dk.e)("_markAllSubMeshesAsMiscDirty")], (0, sk.d)(kk, null, Le, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "directIntensity" in kk,
            get: kk => kk.directIntensity,
            set: (kk, ek) => {
              kk.directIntensity = ek
            }
          },
          metadata: ek
        }, Ti, oi), (0, sk.d)(kk, null, Ce, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "emissiveIntensity" in kk,
            get: kk => kk.emissiveIntensity,
            set: (kk, ek) => {
              kk.emissiveIntensity = ek
            }
          },
          metadata: ek
        }, Zi, Oi), (0, sk.d)(kk, null, se, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "environmentIntensity" in kk,
            get: kk => kk.environmentIntensity,
            set: (kk, ek) => {
              kk.environmentIntensity = ek
            }
          },
          metadata: ek
        }, gi, Gi), (0, sk.d)(kk, null, de, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "specularIntensity" in kk,
            get: kk => kk.specularIntensity,
            set: (kk, ek) => {
              kk.specularIntensity = ek
            }
          },
          metadata: ek
        }, Ni, Ri), (0, sk.d)(kk, null, Ve, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: kk => "disableBumpMap" in kk,
            get: kk => kk.disableBumpMap,
            set: (kk, ek) => {
              kk.disableBumpMap = ek
            }
          },
          metadata: ek
        }, Ji, kD), (0, sk.d)(kk, null, Fe, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "albedoTexture" in kk,
            get: kk => kk.albedoTexture,
            set: (kk, ek) => {
              kk.albedoTexture = ek
            }
          },
          metadata: ek
        }, eD, iD), (0, sk.d)(kk, null, ue, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "baseWeightTexture" in kk,
            get: kk => kk.baseWeightTexture,
            set: (kk, ek) => {
              kk.baseWeightTexture = ek
            }
          },
          metadata: ek
        }, DD, fD), (0, sk.d)(kk, null, qe, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "baseDiffuseRoughnessTexture" in kk,
            get: kk => kk.baseDiffuseRoughnessTexture,
            set: (kk, ek) => {
              kk.baseDiffuseRoughnessTexture = ek
            }
          },
          metadata: ek
        }, SD, bD), (0, sk.d)(kk, null, Ie, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "ambientTexture" in kk,
            get: kk => kk.ambientTexture,
            set: (kk, ek) => {
              kk.ambientTexture = ek
            }
          },
          metadata: ek
        }, rD, PD), (0, sk.d)(kk, null, ze, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: kk => "ambientTextureStrength" in kk,
            get: kk => kk.ambientTextureStrength,
            set: (kk, ek) => {
              kk.ambientTextureStrength = ek
            }
          },
          metadata: ek
        }, mD, MD), (0, sk.d)(kk, null, Qe, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: kk => "ambientTextureImpactOnAnalyticalLights" in kk,
            get: kk => kk.ambientTextureImpactOnAnalyticalLights,
            set: (kk, ek) => {
              kk.ambientTextureImpactOnAnalyticalLights = ek
            }
          },
          metadata: ek
        }, KD, xD), (0, sk.d)(kk, null, ve, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "opacityTexture" in kk,
            get: kk => kk.opacityTexture,
            set: (kk, ek) => {
              kk.opacityTexture = ek
            }
          },
          metadata: ek
        }, nD, UD), (0, sk.d)(kk, null, Ee, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "reflectionTexture" in kk,
            get: kk => kk.reflectionTexture,
            set: (kk, ek) => {
              kk.reflectionTexture = ek
            }
          },
          metadata: ek
        }, HD, wD), (0, sk.d)(kk, null, he, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "emissiveTexture" in kk,
            get: kk => kk.emissiveTexture,
            set: (kk, ek) => {
              kk.emissiveTexture = ek
            }
          },
          metadata: ek
        }, lD, pD), (0, sk.d)(kk, null, ae, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "reflectivityTexture" in kk,
            get: kk => kk.reflectivityTexture,
            set: (kk, ek) => {
              kk.reflectivityTexture = ek
            }
          },
          metadata: ek
        }, yD, YD), (0, sk.d)(kk, null, We, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "metallicTexture" in kk,
            get: kk => kk.metallicTexture,
            set: (kk, ek) => {
              kk.metallicTexture = ek
            }
          },
          metadata: ek
        }, LD, CD), (0, sk.d)(kk, null, te, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: kk => "metallic" in kk,
            get: kk => kk.metallic,
            set: (kk, ek) => {
              kk.metallic = ek
            }
          },
          metadata: ek
        }, AD, jD), (0, sk.d)(kk, null, Xe, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: kk => "roughness" in kk,
            get: kk => kk.roughness,
            set: (kk, ek) => {
              kk.roughness = ek
            }
          },
          metadata: ek
        }, sD, dD), (0, sk.d)(kk, null, Be, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: kk => "metallicF0Factor" in kk,
            get: kk => kk.metallicF0Factor,
            set: (kk, ek) => {
              kk.metallicF0Factor = ek
            }
          },
          metadata: ek
        }, VD, FD), (0, sk.d)(kk, null, ce, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "metallicReflectanceColor" in kk,
            get: kk => kk.metallicReflectanceColor,
            set: (kk, ek) => {
              kk.metallicReflectanceColor = ek
            }
          },
          metadata: ek
        }, uD, qD), (0, sk.d)(kk, null, Te, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "useOnlyMetallicFromMetallicReflectanceTexture" in kk,
            get: kk => kk.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (kk, ek) => {
              kk.useOnlyMetallicFromMetallicReflectanceTexture = ek
            }
          },
          metadata: ek
        }, ID, zD), (0, sk.d)(kk, null, oe, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "metallicReflectanceTexture" in kk,
            get: kk => kk.metallicReflectanceTexture,
            set: (kk, ek) => {
              kk.metallicReflectanceTexture = ek
            }
          },
          metadata: ek
        }, QD, vD), (0, sk.d)(kk, null, Ze, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "reflectanceTexture" in kk,
            get: kk => kk.reflectanceTexture,
            set: (kk, ek) => {
              kk.reflectanceTexture = ek
            }
          },
          metadata: ek
        }, ED, hD), (0, sk.d)(kk, null, Oe, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "microSurfaceTexture" in kk,
            get: kk => kk.microSurfaceTexture,
            set: (kk, ek) => {
              kk.microSurfaceTexture = ek
            }
          },
          metadata: ek
        }, aD, WD), (0, sk.d)(kk, null, ge, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "bumpTexture" in kk,
            get: kk => kk.bumpTexture,
            set: (kk, ek) => {
              kk.bumpTexture = ek
            }
          },
          metadata: ek
        }, tD, XD), (0, sk.d)(kk, null, Ge, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "lightmapTexture" in kk,
            get: kk => kk.lightmapTexture,
            set: (kk, ek) => {
              kk.lightmapTexture = ek
            }
          },
          metadata: ek
        }, BD, cD), (0, sk.d)(kk, null, Ne, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "ambientColor" in kk,
            get: kk => kk.ambientColor,
            set: (kk, ek) => {
              kk.ambientColor = ek
            }
          },
          metadata: ek
        }, TD, oD), (0, sk.d)(kk, null, Re, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "albedoColor" in kk,
            get: kk => kk.albedoColor,
            set: (kk, ek) => {
              kk.albedoColor = ek
            }
          },
          metadata: ek
        }, ZD, OD), (0, sk.d)(kk, null, Je, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: kk => "baseWeight" in kk,
            get: kk => kk.baseWeight,
            set: (kk, ek) => {
              kk.baseWeight = ek
            }
          },
          metadata: ek
        }, gD, GD), (0, sk.d)(kk, null, ki, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: kk => "baseDiffuseRoughness" in kk,
            get: kk => kk.baseDiffuseRoughness,
            set: (kk, ek) => {
              kk.baseDiffuseRoughness = ek
            }
          },
          metadata: ek
        }, ND, RD), (0, sk.d)(kk, null, ei, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "reflectivityColor" in kk,
            get: kk => kk.reflectivityColor,
            set: (kk, ek) => {
              kk.reflectivityColor = ek
            }
          },
          metadata: ek
        }, JD, kf), (0, sk.d)(kk, null, ii, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "reflectionColor" in kk,
            get: kk => kk.reflectionColor,
            set: (kk, ek) => {
              kk.reflectionColor = ek
            }
          },
          metadata: ek
        }, ef, Df), (0, sk.d)(kk, null, Di, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "emissiveColor" in kk,
            get: kk => kk.emissiveColor,
            set: (kk, ek) => {
              kk.emissiveColor = ek
            }
          },
          metadata: ek
        }, ff, Sf), (0, sk.d)(kk, null, fi, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: kk => "microSurface" in kk,
            get: kk => kk.microSurface,
            set: (kk, ek) => {
              kk.microSurface = ek
            }
          },
          metadata: ek
        }, bf, rf), (0, sk.d)(kk, null, Si, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: kk => "useLightmapAsShadowmap" in kk,
            get: kk => kk.useLightmapAsShadowmap,
            set: (kk, ek) => {
              kk.useLightmapAsShadowmap = ek
            }
          },
          metadata: ek
        }, Pf, mf), (0, sk.d)(kk, null, bi, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAlphaFromAlbedoTexture" in kk,
            get: kk => kk.useAlphaFromAlbedoTexture,
            set: (kk, ek) => {
              kk.useAlphaFromAlbedoTexture = ek
            }
          },
          metadata: ek
        }, Mf, Kf), (0, sk.d)(kk, null, ri, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: kk => "forceAlphaTest" in kk,
            get: kk => kk.forceAlphaTest,
            set: (kk, ek) => {
              kk.forceAlphaTest = ek
            }
          },
          metadata: ek
        }, xf, nf), (0, sk.d)(kk, null, Pi, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: kk => "alphaCutOff" in kk,
            get: kk => kk.alphaCutOff,
            set: (kk, ek) => {
              kk.alphaCutOff = ek
            }
          },
          metadata: ek
        }, Uf, Hf), (0, sk.d)(kk, null, mi, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "useSpecularOverAlpha" in kk,
            get: kk => kk.useSpecularOverAlpha,
            set: (kk, ek) => {
              kk.useSpecularOverAlpha = ek
            }
          },
          metadata: ek
        }, wf, lf), (0, sk.d)(kk, null, Mi, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "useMicroSurfaceFromReflectivityMapAlpha" in kk,
            get: kk => kk.useMicroSurfaceFromReflectivityMapAlpha,
            set: (kk, ek) => {
              kk.useMicroSurfaceFromReflectivityMapAlpha = ek
            }
          },
          metadata: ek
        }, pf, yf), (0, sk.d)(kk, null, Ki, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "useRoughnessFromMetallicTextureAlpha" in kk,
            get: kk => kk.useRoughnessFromMetallicTextureAlpha,
            set: (kk, ek) => {
              kk.useRoughnessFromMetallicTextureAlpha = ek
            }
          },
          metadata: ek
        }, Yf, Lf), (0, sk.d)(kk, null, xi, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: kk => "useRoughnessFromMetallicTextureGreen" in kk,
            get: kk => kk.useRoughnessFromMetallicTextureGreen,
            set: (kk, ek) => {
              kk.useRoughnessFromMetallicTextureGreen = ek
            }
          },
          metadata: ek
        }, Cf, Af), (0, sk.d)(kk, null, ni, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: kk => "useMetallnessFromMetallicTextureBlue" in kk,
            get: kk => kk.useMetallnessFromMetallicTextureBlue,
            set: (kk, ek) => {
              kk.useMetallnessFromMetallicTextureBlue = ek
            }
          },
          metadata: ek
        }, jf, sf), (0, sk.d)(kk, null, Ui, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAmbientOcclusionFromMetallicTextureRed" in kk,
            get: kk => kk.useAmbientOcclusionFromMetallicTextureRed,
            set: (kk, ek) => {
              kk.useAmbientOcclusionFromMetallicTextureRed = ek
            }
          },
          metadata: ek
        }, df, Vf), (0, sk.d)(kk, null, Hi, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAmbientInGrayScale" in kk,
            get: kk => kk.useAmbientInGrayScale,
            set: (kk, ek) => {
              kk.useAmbientInGrayScale = ek
            }
          },
          metadata: ek
        }, Ff, uf), (0, sk.d)(kk, null, wi, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAutoMicroSurfaceFromReflectivityMap" in kk,
            get: kk => kk.useAutoMicroSurfaceFromReflectivityMap,
            set: (kk, ek) => {
              kk.useAutoMicroSurfaceFromReflectivityMap = ek
            }
          },
          metadata: ek
        }, qf, If), (0, sk.d)(kk, null, li, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: kk => "usePhysicalLightFalloff" in kk,
            get: kk => kk.usePhysicalLightFalloff
          },
          metadata: ek
        }, null, ci), (0, sk.d)(kk, null, yi, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: kk => "useGLTFLightFalloff" in kk,
            get: kk => kk.useGLTFLightFalloff
          },
          metadata: ek
        }, null, ci), (0, sk.d)(kk, null, Yi, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "useRadianceOverAlpha" in kk,
            get: kk => kk.useRadianceOverAlpha,
            set: (kk, ek) => {
              kk.useRadianceOverAlpha = ek
            }
          },
          metadata: ek
        }, zf, Qf), (0, sk.d)(kk, null, Li, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: kk => "useObjectSpaceNormalMap" in kk,
            get: kk => kk.useObjectSpaceNormalMap,
            set: (kk, ek) => {
              kk.useObjectSpaceNormalMap = ek
            }
          },
          metadata: ek
        }, vf, Ef), (0, sk.d)(kk, null, Ci, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: kk => "useParallax" in kk,
            get: kk => kk.useParallax,
            set: (kk, ek) => {
              kk.useParallax = ek
            }
          },
          metadata: ek
        }, hf, af), (0, sk.d)(kk, null, Ai, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: kk => "useParallaxOcclusion" in kk,
            get: kk => kk.useParallaxOcclusion,
            set: (kk, ek) => {
              kk.useParallaxOcclusion = ek
            }
          },
          metadata: ek
        }, Wf, tf), (0, sk.d)(kk, null, ji, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: kk => "parallaxScaleBias" in kk,
            get: kk => kk.parallaxScaleBias,
            set: (kk, ek) => {
              kk.parallaxScaleBias = ek
            }
          },
          metadata: ek
        }, Xf, Bf), (0, sk.d)(kk, null, si, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: kk => "disableLighting" in kk,
            get: kk => kk.disableLighting,
            set: (kk, ek) => {
              kk.disableLighting = ek
            }
          },
          metadata: ek
        }, Tf, of), (0, sk.d)(kk, null, di, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: kk => "forceIrradianceInFragment" in kk,
            get: kk => kk.forceIrradianceInFragment,
            set: (kk, ek) => {
              kk.forceIrradianceInFragment = ek
            }
          },
          metadata: ek
        }, Zf, Of), (0, sk.d)(kk, null, Vi, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: kk => "maxSimultaneousLights" in kk,
            get: kk => kk.maxSimultaneousLights,
            set: (kk, ek) => {
              kk.maxSimultaneousLights = ek
            }
          },
          metadata: ek
        }, gf, Gf), (0, sk.d)(kk, null, Fi, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: kk => "invertNormalMapX" in kk,
            get: kk => kk.invertNormalMapX,
            set: (kk, ek) => {
              kk.invertNormalMapX = ek
            }
          },
          metadata: ek
        }, Nf, Rf), (0, sk.d)(kk, null, ui, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: kk => "invertNormalMapY" in kk,
            get: kk => kk.invertNormalMapY,
            set: (kk, ek) => {
              kk.invertNormalMapY = ek
            }
          },
          metadata: ek
        }, Jf, kS), (0, sk.d)(kk, null, qi, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: kk => "twoSidedLighting" in kk,
            get: kk => kk.twoSidedLighting,
            set: (kk, ek) => {
              kk.twoSidedLighting = ek
            }
          },
          metadata: ek
        }, eS, iS), (0, sk.d)(kk, null, Ii, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAlphaFresnel" in kk,
            get: kk => kk.useAlphaFresnel,
            set: (kk, ek) => {
              kk.useAlphaFresnel = ek
            }
          },
          metadata: ek
        }, DS, fS), (0, sk.d)(kk, null, zi, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: kk => "useLinearAlphaFresnel" in kk,
            get: kk => kk.useLinearAlphaFresnel,
            set: (kk, ek) => {
              kk.useLinearAlphaFresnel = ek
            }
          },
          metadata: ek
        }, SS, bS), (0, sk.d)(kk, null, Qi, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "environmentBRDFTexture" in kk,
            get: kk => kk.environmentBRDFTexture,
            set: (kk, ek) => {
              kk.environmentBRDFTexture = ek
            }
          },
          metadata: ek
        }, rS, PS), (0, sk.d)(kk, null, vi, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: kk => "forceNormalForward" in kk,
            get: kk => kk.forceNormalForward,
            set: (kk, ek) => {
              kk.forceNormalForward = ek
            }
          },
          metadata: ek
        }, mS, MS), (0, sk.d)(kk, null, Ei, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: kk => "enableSpecularAntiAliasing" in kk,
            get: kk => kk.enableSpecularAntiAliasing,
            set: (kk, ek) => {
              kk.enableSpecularAntiAliasing = ek
            }
          },
          metadata: ek
        }, KS, xS), (0, sk.d)(kk, null, ai, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: kk => "useHorizonOcclusion" in kk,
            get: kk => kk.useHorizonOcclusion,
            set: (kk, ek) => {
              kk.useHorizonOcclusion = ek
            }
          },
          metadata: ek
        }, nS, US), (0, sk.d)(kk, null, Wi, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: kk => "useRadianceOcclusion" in kk,
            get: kk => kk.useRadianceOcclusion,
            set: (kk, ek) => {
              kk.useRadianceOcclusion = ek
            }
          },
          metadata: ek
        }, HS, wS), (0, sk.d)(kk, null, ti, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: kk => "unlit" in kk,
            get: kk => kk.unlit,
            set: (kk, ek) => {
              kk.unlit = ek
            }
          },
          metadata: ek
        }, lS, pS), (0, sk.d)(kk, null, Xi, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: kk => "applyDecalMapAfterDetailMap" in kk,
            get: kk => kk.applyDecalMapAfterDetailMap,
            set: (kk, ek) => {
              kk.applyDecalMapAfterDetailMap = ek
            }
          },
          metadata: ek
        }, yS, YS), ek && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ek
        })
      })(), kk.PBRMATERIAL_OPAQUE = Ae.PBRMATERIAL_OPAQUE, kk.PBRMATERIAL_ALPHATEST = Ae.PBRMATERIAL_ALPHATEST, kk.PBRMATERIAL_ALPHABLEND = Ae.PBRMATERIAL_ALPHABLEND, kk.PBRMATERIAL_ALPHATESTANDBLEND = Ae.PBRMATERIAL_ALPHATESTANDBLEND, kk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = Ae.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, kk
    })();
    const tf = "KHR_materials_diffuse_transmission";

    function Xf(kk, ek) {
      const ik = ek.subSurface;
      let Dk = null;
      return ik.translucencyIntensityTexture ? Dk = ik.translucencyIntensityTexture : ik.thicknessTexture && ik.useMaskFromThicknessTexture && (Dk = ik.thicknessTexture), Dk && !ik.useGltfStyleTextures ? (Vk.b.Warn(`${kk}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${ek.name}`, 1), null) : Dk
    }
    class Bf {
      constructor(kk) {
        this.name = tf, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        const Dk = [];
        if (ik instanceof Wf && this._isExtensionEnabled(ik)) {
          const ek = Xf(kk, ik);
          return ek && Dk.push(ek), ik.subSurface.translucencyColorTexture && Dk.push(ik.subSurface.translucencyColorTexture), Dk
        }
        return Dk
      }
      _isExtensionEnabled(kk) {
        if (kk.unlit) return !1;
        const ek = kk.subSurface;
        return !!ek.isTranslucencyEnabled && (!kk.unlit && !ek.useAlbedoToTintTranslucency && ek.useGltfStyleTextures && 1 === ek.volumeIndexOfRefraction && 0 === ek.minimumThickness && 0 === ek.maximumThickness)
      }
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((Dk => {
          if (ik instanceof Wf && this._isExtensionEnabled(ik)) {
            this._wasUsed = !0;
            const Dk = ik.subSurface,
              fk = Xf(kk, ik),
              Sk = 0 == Dk.translucencyIntensity ? void 0 : Dk.translucencyIntensity,
              bk = this._exporter._materialExporter.getTextureInfo(fk) ?? void 0,
              rk = !Dk.translucencyColor || Dk.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Dk.translucencyColor.Tik(),
              Pk = this._exporter._materialExporter.getTextureInfo(Dk.translucencyColorTexture) ?? void 0,
              mk = {
                diffuseTransmissionFactor: Sk,
                diffuseTransmissionTexture: bk,
                diffuseTransmissionColorFactor: rk,
                diffuseTransmissionColorTexture: Pk
              };
            (bk || Pk) && this._exporter._materialNeedsUVsSet.add(ik), ek.extensions = ek.extensions || {}, ek.extensions[tf] = mk
          }
          Dk(ek)
        }))
      }
    }
    let Tf = !1;

    function of() {
      Tf || (Tf = !0, hD.RegisterExtension(tf, (kk => new Bf(kk))))
    }
    of();
    const Zf = "KHR_materials_dispersion";
    class Of {
      constructor() {
        this.name = Zf, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(kk) {
        if (kk.unlit) return !1;
        const ek = kk.subSurface;
        return !(!ek.isRefractionEnabled && !ek.isDispersionEnabled)
      }
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((kk => {
          if (ik instanceof Wf && this._isExtensionEnabled(ik)) {
            this._wasUsed = !0;
            const kk = {
              dispersion: ik.subSurface.dispersion
            };
            ek.extensions = ek.extensions || {}, ek.extensions[Zf] = kk
          }
          kk(ek)
        }))
      }
    }
    let gf = !1;

    function Gf() {
      gf || (gf = !0, hD.RegisterExtension(Zf, (() => new Of)))
    }
    Gf();
    const Nf = "KHR_materials_emissive_strength";
    class Rf {
      constructor() {
        this.name = Nf, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(kk, ek, ik) {
        return await new Promise((kk => {
          if (!(ik instanceof Wf)) return kk(ek);
          const Dk = ik.emissiveColor.scale(ik.emissiveIntensity),
            fk = Math.max(...Dk.Tik());
          if (fk > 1) {
            ek.emissiveFactor = Dk.scale(1 / fk).Tik(), this._wasUsed = !0;
            const kk = {
              emissiveStrength: fk
            };
            ek.extensions || (ek.extensions = {}), ek.extensions[Nf] = kk
          } else ek.emissiveFactor = Dk.Tik();
          return kk(ek)
        }))
      }
    }
    let Jf = !1;

    function kS() {
      Jf || (Jf = !0, hD.RegisterExtension(Nf, (() => new Rf)))
    }
    kS();
    const eS = "KHR_materials_ior";
    class iS {
      constructor() {
        this.name = eS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(kk) {
        return !kk.unlit && (kk instanceof Je ? 1.5 != kk.specularIor : kk instanceof Wf && (void 0 != kk.indexOfRefraction && 1.5 != kk.indexOfRefraction))
      }
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((kk => {
          if (ik instanceof Wf && this._isExtensionEnabled(ik)) {
            this._wasUsed = !0;
            const kk = {
              ior: ik.indexOfRefraction
            };
            ek.extensions = ek.extensions || {}, ek.extensions[eS] = kk
          } else if (ik instanceof Je && this._isExtensionEnabled(ik)) {
            this._wasUsed = !0;
            const kk = {
              ior: ik.specularIor
            };
            ek.extensions = ek.extensions || {}, ek.extensions[eS] = kk
          }
          kk(ek)
        }))
      }
    }
    let DS = !1;

    function fS() {
      DS || (DS = !0, hD.RegisterExtension(eS, (() => new iS)))
    }
    fS();
    const SS = "KHR_materials_iridescence";
    class bS {
      constructor(kk) {
        this.name = SS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        const Dk = [];
        if (ik instanceof Ae) {
          if (ik.iridescence.isEnabled) return ik.iridescence.texture && Dk.push(ik.iridescence.texture), ik.iridescence.thicknessTexture && ik.iridescence.thicknessTexture !== ik.iridescence.texture && Dk.push(ik.iridescence.thicknessTexture), Dk
        } else if (ik instanceof Je && ik.thinFilmWeight > 0) return ik.thinFilmWeightTexture && Dk.push(ik.thinFilmWeightTexture), ik.thinFilmThicknessTexture && ik.thinFilmThicknessTexture !== ik.thinFilmWeightTexture && Dk.push(ik.thinFilmThicknessTexture), Dk;
        return []
      }
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((kk => {
          if (ik instanceof Ae) {
            if (!ik.iridescence.isEnabled) return void kk(ek);
            this._wasUsed = !0, ek.extensions = ek.extensions || {};
            const Dk = this._exporter._materialExporter.getTextureInfo(ik.iridescence.texture),
              fk = this._exporter._materialExporter.getTextureInfo(ik.iridescence.thicknessTexture),
              Sk = {
                iridescenceFactor: ik.iridescence.intensity,
                iridescenceIor: ik.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: ik.iridescence.minimumThickness,
                iridescenceThicknessMaximum: ik.iridescence.maximumThickness,
                iridescenceTexture: Dk ?? void 0,
                iridescenceThicknessTexture: fk ?? void 0
              };
            null === Sk.iridescenceTexture && null === Sk.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(ik), ek.extensions[SS] = Sk
          } else if (ik instanceof Je) {
            if (ik.thinFilmWeight <= 0) return void kk(ek);
            this._wasUsed = !0, ek.extensions = ek.extensions || {};
            const Dk = this._exporter._materialExporter.getTextureInfo(ik.thinFilmWeightTexture),
              fk = this._exporter._materialExporter.getTextureInfo(ik.thinFilmThicknessTexture),
              Sk = {
                iridescenceFactor: ik.thinFilmWeight,
                iridescenceIor: ik.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * ik.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * ik.thinFilmThickness,
                iridescenceTexture: Dk ?? void 0,
                iridescenceThicknessTexture: fk ?? void 0
              };
            null === Sk.iridescenceTexture && null === Sk.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(ik), ek.extensions[SS] = Sk
          }
          kk(ek)
        }))
      }
    }
    let rS = !1;

    function PS() {
      rS || (rS = !0, hD.RegisterExtension(SS, (kk => new bS(kk))))
    }
    PS();
    const mS = "KHR_materials_sheen";
    class MS {
      constructor(kk) {
        this.name = mS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        return ik instanceof Wf && ik.sheen.isEnabled && ik.sheen.texture ? [ik.sheen.texture] : []
      }
      async postExportMaterialAsync(kk, ek, ik) {
        return await new Promise((kk => {
          if (ik instanceof Wf) {
            if (!ik.sheen.isEnabled) return void kk(ek);
            this._wasUsed = !0, null == ek.extensions && (ek.extensions = {});
            const Dk = {
              sheenColorFactor: ik.sheen.color.Tik(),
              sheenRoughnessFactor: ik.sheen.roughness ?? 0
            };
            null === Dk.sheenColorTexture && null === Dk.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ik), ik.sheen.texture && (Dk.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(ik.sheen.texture) ?? void 0), ik.sheen.textureRoughness && !ik.sheen.useRoughnessFromMainTexture ? Dk.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ik.sheen.textureRoughness) ?? void 0 : ik.sheen.texture && ik.sheen.useRoughnessFromMainTexture && (Dk.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ik.sheen.texture) ?? void 0), ek.extensions[mS] = Dk
          }
          kk(ek)
        }))
      }
    }
    let KS = !1;

    function xS() {
      KS || (KS = !0, hD.RegisterExtension(mS, (kk => new MS(kk))))
    }
    xS();
    const nS = "KHR_materials_fuzz";

    function US(kk, ek) {
      const ik = new uk.f(ek.name, ek.XF());
      return ik._texture = kk, ik.coordinatesIndex = ek.coordinatesIndex, ek instanceof uk.f && (ik.uOffset = ek.uOffset, ik.vOffset = ek.vOffset, ik.uScale = ek.uScale, ik.vScale = ek.vScale, ik.wAng = ek.wAng), ik.wrapU = ek.wrapU, ik.wrapV = ek.wrapV, ik
    }
    class HS {
      constructor(kk) {
        this.name = nS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = kk
      }
      dispose() {
        for (const kk of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[kk].dispose()
        }
        this._mergedTexturesMap = {};
        for (const kk of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[kk].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        if (ik instanceof Je) {
          const kk = [];
          if (ik.fuzzWeight > 0) {
            ik.fuzzWeightTexture && kk.push(ik.fuzzWeightTexture);
            let ek = !1;
            if (ik.fuzzRoughnessTexture && (ik._useFuzzRoughnessFromTextureAlpha ? kk.push(ik.fuzzRoughnessTexture) : ek = !0), ik.fuzzColorTexture && !ek && kk.push(ik.fuzzColorTexture), ek) {
              const ek = function(kk) {
                const ek = kk.fuzzColorTexture,
                  ik = ek && ek.getInternalTexture() ? ek.getInternalTexture().uniqueId : "NoFuzzColor",
                  Dk = kk.fuzzRoughnessTexture;
                return `FuzzColor_${ik}_FuzzRoughness_${Dk&&Dk.getInternalTexture()?Dk.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(ik);
              if (!this._cachedInternalTexturesMap[ek]) {
                const kk = await async function(kk) {
                  const ek = kk.XF(),
                    ik = kk.fuzzColorTexture,
                    Dk = kk.fuzzRoughnessTexture;
                  return ik || Dk ? (await ri("FuzzTexture", Mi(ik ? Pi(ik, 0) : mi(1), ik ? Pi(ik, 1) : mi(1), ik ? Pi(ik, 2) : mi(1), Dk ? Pi(Dk, kk._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : mi(1)), ek)).getInternalTexture() : null
                }(ik);
                kk && (this._cachedInternalTexturesMap[ek] = kk)
              }
              this._cachedInternalTexturesMap[ek] && (ik.fuzzColorTexture && (this._mergedTexturesMap[ik.fuzzColorTexture.uniqueId] = US(this._cachedInternalTexturesMap[ek], ik.fuzzColorTexture), kk.push(this._mergedTexturesMap[ik.fuzzColorTexture.uniqueId])), ik.fuzzRoughnessTexture && (this._mergedTexturesMap[ik.fuzzRoughnessTexture.uniqueId] = US(this._cachedInternalTexturesMap[ek], ik.fuzzRoughnessTexture), kk.push(this._mergedTexturesMap[ik.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return kk
        }
        return []
      }
      async postExportMaterialAsync(kk, ek, ik) {
        return await new Promise((kk => {
          if (ik instanceof Je) {
            if (0 == ik.fuzzWeight) return void kk(ek);
            this._wasUsed = !0, null == ek.extensions && (ek.extensions = {});
            const Dk = {
              fuzzFactor: ik.fuzzWeight,
              fuzzColorFactor: ik.fuzzColor.Tik(),
              fuzzRoughnessFactor: ik.fuzzRoughness
            };
            let fk, Sk;
            ik.fuzzWeightTexture && (Dk.fuzzTexture = this._exporter._materialExporter.getTextureInfo(ik.fuzzWeightTexture) ?? void 0), ik.fuzzColorTexture && (fk = this._mergedTexturesMap[ik.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[ik.fuzzColorTexture.uniqueId] : ik.fuzzColorTexture, Dk.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(fk) ?? void 0), ik.fuzzRoughnessTexture && (Sk = this._mergedTexturesMap[ik.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[ik.fuzzRoughnessTexture.uniqueId] : ik.fuzzRoughnessTexture, Dk.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Sk) ?? void 0), null === Dk.fuzzColorTexture && null === Dk.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ik), ek.extensions[nS] = Dk
          }
          kk(ek)
        }))
      }
    }
    let wS = !1;

    function lS() {
      wS || (wS = !0, hD.RegisterExtension(nS, (kk => new HS(kk))))
    }
    lS();
    const pS = "KHR_materials_specular";
    class yS {
      constructor(kk) {
        this.name = pS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        const Dk = [];
        return ik instanceof Wf && this._isExtensionEnabled(ik) ? (ik.metallicReflectanceTexture && Dk.push(ik.metallicReflectanceTexture), ik.reflectanceTexture && Dk.push(ik.reflectanceTexture), Dk) : Dk
      }
      _isExtensionEnabled(kk) {
        return !kk.unlit && (void 0 != kk.metallicF0Factor && 1 != kk.metallicF0Factor || void 0 != kk.metallicReflectanceColor && !kk.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(kk))
      }
      _hasTexturesExtension(kk) {
        return null != kk.metallicReflectanceTexture || null != kk.reflectanceTexture
      }
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((kk => {
          var Dk;
          if (ik instanceof Wf && this._isExtensionEnabled(ik)) {
            this._wasUsed = !0, ek.extensions = ek.extensions || {};
            const kk = this._exporter._materialExporter.getTextureInfo(ik.metallicReflectanceTexture) ?? void 0,
              Dk = this._exporter._materialExporter.getTextureInfo(ik.reflectanceTexture) ?? void 0,
              fk = {
                specularFactor: 1 == ik.metallicF0Factor ? void 0 : ik.metallicF0Factor,
                specularTexture: kk,
                specularColorFactor: ik.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : ik.metallicReflectanceColor.Tik(),
                specularColorTexture: Dk
              };
            this._hasTexturesExtension(ik) && this._exporter._materialNeedsUVsSet.add(ik), ek.extensions[pS] = fk
          } else if (ik instanceof Je) {
            ek.extensions = ek.extensions || {};
            const fk = this._exporter._materialExporter.getTextureInfo(ik.specularWeightTexture) ?? void 0,
              Sk = this._exporter._materialExporter.getTextureInfo(ik.specularColorTexture) ?? void 0,
              bk = 1 == ik.specularWeight ? void 0 : ik.specularWeight,
              rk = ik.specularColor.equalsFloats(1, 1, 1) ? void 0 : ik.specularColor.Tik();
            if (!Sk && !fk && void 0 === bk && void 0 === rk) return kk(ek);
            this._wasUsed = !0;
            const Pk = {
                specularEdgeColorEnabled: !0
              },
              mk = {
                specularFactor: bk,
                specularTexture: fk,
                specularColorFactor: rk,
                specularColorTexture: Sk,
                extensions: {}
              };
            mk.extensions.EXT_materials_specular_edge_color = Pk, (Dk = this._exporter._glTF).extensionsUsed || (Dk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (fk || Sk) && this._exporter._materialNeedsUVsSet.add(ik), ek.extensions[pS] = mk
          }
          kk(ek)
        }))
      }
    }
    let YS = !1;

    function LS() {
      YS || (YS = !0, hD.RegisterExtension(pS, (kk => new yS(kk))))
    }
    LS();
    const CS = "KHR_materials_transmission";
    class AS {
      constructor(kk) {
        this.name = CS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        const Dk = [];
        if (ik instanceof Wf) {
          if (this._isExtensionEnabled(ik)) return ik.subSurface.refractionIntensityTexture && ik.subSurface.useGltfStyleTextures && Dk.push(ik.subSurface.refractionIntensityTexture), Dk
        } else ik instanceof Je && (ik.transmissionWeight > 0 && ik.transmissionWeightTexture && (Dk.push(ik.transmissionWeightTexture), ik.transmissionColorTexture && Dk.push(ik.transmissionColorTexture)), ik.subsurfaceWeight > 0 && ik.subsurfaceWeightTexture && Dk.push(ik.subsurfaceWeightTexture));
        return Dk
      }
      _isExtensionEnabled(kk) {
        if (kk instanceof Je && !kk.unlit) return kk.transmissionWeight > 0 || kk.subsurfaceWeight > 0;
        if (kk instanceof Wf && !kk.unlit) {
          const ek = kk.subSurface;
          return ek.isRefractionEnabled && void 0 != ek.refractionIntensity && 0 != ek.refractionIntensity || null != ek.refractionIntensityTexture && ek.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(kk, ek, ik) {
        if (!this._isExtensionEnabled(ik)) return ek;
        if (ik instanceof Wf) {
          this._wasUsed = !0;
          const Dk = ik.subSurface,
            fk = {
              transmissionFactor: 0 === Dk.refractionIntensity ? void 0 : Dk.refractionIntensity
            };
          if (Dk.refractionIntensityTexture)
            if (Dk.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(ik);
              const kk = this._exporter._materialExporter.getTextureInfo(Dk.refractionIntensityTexture);
              kk && (fk.transmissionTexture = kk)
            } else Vk.b.Warn(`${kk}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          ek.extensions || (ek.extensions = {}), ek.extensions[CS] = fk
        } else if (ik instanceof Je) {
          this._wasUsed = !0;
          const kk = {
            transmissionFactor: (1 - ik.transmissionWeight) * ik.subsurfaceWeight + ik.transmissionWeight
          };
          if (ik.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(ik);
            const ek = this._exporter._materialExporter.getTextureInfo(ik.transmissionWeightTexture);
            ek && (kk.transmissionTexture = ek)
          } else if (ik.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(ik);
            const ek = this._exporter._materialExporter.getTextureInfo(ik.subsurfaceWeightTexture);
            ek && (kk.transmissionTexture = ek)
          }
          if (0 == ik.transmissionDepth && (!ik.transmissionColor.equals(Zk.e.White()) || ik.transmissionColorTexture) && ek.pbrMetallicRoughness && (ek.pbrMetallicRoughness.baseColorFactor || (ek.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), ek.pbrMetallicRoughness.baseColorFactor[0] *= ik.transmissionColor.r, ek.pbrMetallicRoughness.baseColorFactor[1] *= ik.transmissionColor.g, ek.pbrMetallicRoughness.baseColorFactor[2] *= ik.transmissionColor.b, ik.transmissionColorTexture && !ek.pbrMetallicRoughness.baseColorTexture)) {
            const kk = this._exporter._materialExporter.getTextureInfo(ik.transmissionColorTexture);
            kk && (ek.pbrMetallicRoughness.baseColorTexture = kk, this._exporter._materialNeedsUVsSet.add(ik))
          }
          ek.extensions || (ek.extensions = {}), ek.extensions[CS] = kk
        }
        return ek
      }
    }
    let jS = !1;

    function sS() {
      jS || (jS = !0, hD.RegisterExtension(CS, (kk => new AS(kk))))
    }
    sS();
    var dS = ik(39833);
    const VS = "KHR_materials_unlit";
    class FS {
      constructor() {
        this.name = VS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((kk => {
          let Dk = !1;
          ik instanceof Wf ? Dk = ik.unlit : ik instanceof dS.f && (Dk = ik.disableLighting), Dk && (this._wasUsed = !0, null == ek.extensions && (ek.extensions = {}), ek.extensions[VS] = {}), kk(ek)
        }))
      }
    }
    let uS = !1;

    function qS() {
      uS || (uS = !0, hD.RegisterExtension(VS, (() => new FS)))
    }
    qS();
    const IS = "KHR_materials_volume";
    class zS {
      constructor(kk) {
        this.name = IS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        const Dk = [];
        if (ik instanceof Wf) {
          if (this._isExtensionEnabled(ik)) return ik.subSurface.thicknessTexture && Dk.push(ik.subSurface.thicknessTexture), Dk
        } else ik instanceof Je && (ik.transmissionWeight > 0 || ik.subsurfaceWeight > 0) && ik.geometryThicknessTexture && Dk.push(ik.geometryThicknessTexture);
        return Dk
      }
      _isExtensionEnabled(kk) {
        if (kk.unlit) return !1;
        const ek = kk.subSurface;
        return !(!ek.isRefractionEnabled && !ek.isTranslucencyEnabled) && (void 0 != ek.maximumThickness && 0 != ek.maximumThickness || void 0 != ek.tintColorAtDistance && ek.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != ek.tintColor && ek.tintColor != Zk.e.White() || this._hasTexturesExtension(kk))
      }
      _hasTexturesExtension(kk) {
        return null != kk.subSurface.thicknessTexture
      }
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((kk => {
          if (ik instanceof Wf && this._isExtensionEnabled(ik)) {
            this._wasUsed = !0;
            const kk = ik.subSurface,
              Dk = {
                thicknessFactor: 0 == kk.maximumThickness ? void 0 : kk.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(kk.thicknessTexture) ?? void 0,
                attenuationDistance: kk.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : kk.tintColorAtDistance,
                attenuationColor: kk.tintColor.equalsFloats(1, 1, 1) ? void 0 : kk.tintColor.Tik()
              };
            this._hasTexturesExtension(ik) && this._exporter._materialNeedsUVsSet.add(ik), ek.extensions = ek.extensions || {}, ek.extensions[IS] = Dk
          } else if (ik instanceof Je) {
            const kk = ik.transmissionWeight > 0 && !ik.geometryThinWalled,
              Dk = ik.subsurfaceWeight > 0 && !ik.geometryThinWalled;
            if (kk || Dk) {
              this._wasUsed = !0;
              const fk = ik.geometryThickness,
                Sk = this._exporter._materialExporter.getTextureInfo(ik.geometryThicknessTexture) ?? void 0;
              let bk;
              Sk && this._exporter._materialNeedsUVsSet.add(ik);
              const rk = Zk.e.White().Tik();
              if (kk && ik.transmissionDepth > 0) {
                const kk = 1 / ik.transmissionDepth;
                let ek = new ak.o(-Math.log(ik.transmissionColor.r) * kk, -Math.log(ik.transmissionColor.g) * kk, -Math.log(ik.transmissionColor.b) * kk);
                const Dk = new ak.o(ik.transmissionScatter.r * kk, ik.transmissionScatter.g * kk, ik.transmissionScatter.b * kk),
                  fk = ek.subtract(Dk),
                  Sk = Math.min(fk.x, fk.y, fk.z);
                Sk < 0 && (fk.x = fk.x - Sk, fk.y = fk.y - Sk, fk.z = fk.z - Sk), ek = fk.add(Dk);
                bk = 1 / Math.max(ek.x, ek.y, ek.z), rk[0] = Math.exp(-ek.x * bk), rk[1] = Math.exp(-ek.y * bk), rk[2] = Math.exp(-ek.z * bk)
              } else bk = Number.MAX_VALUE, rk[0] = 1, rk[1] = 1, rk[2] = 1;
              let Pk = 1;
              const mk = Zk.e.White().Tik();
              if (Dk) {
                const kk = ik.subsurfaceRadius,
                  ek = ik.subsurfaceRadiusScale,
                  Dk = new ak.o(ek.r, ek.g, ek.b).multiplyByFloats(kk, kk, kk),
                  fk = new ak.o(1 / Math.max(Dk.x, 1e-6), 1 / Math.max(Dk.y, 1e-6), 1 / Math.max(Dk.z, 1e-6));
                Pk = 1 / Math.max(fk.x, fk.y, fk.z), mk[0] = Math.exp(-fk.x * Pk), mk[1] = Math.exp(-fk.y * Pk), mk[2] = Math.exp(-fk.z * Pk)
              }
              const Mk = (1 - ik.transmissionWeight) * ik.subsurfaceWeight,
                Kk = Mk + ik.transmissionWeight,
                xk = 1 / Math.max(Kk, 1e-6),
                nk = ik.transmissionWeight * xk,
                Uk = Mk * xk,
                Hk = rk.map(((kk, ek) => kk * nk + mk[ek] * Uk)),
                wk = {
                  thicknessFactor: fk,
                  thicknessTexture: Sk,
                  attenuationDistance: bk * nk + Pk * Uk,
                  attenuationColor: Hk
                };
              ek.extensions = ek.extensions || {}, ek.extensions[IS] = wk
            }
          }
          kk(ek)
        }))
      }
    }
    let QS = !1;

    function vS() {
      QS || (QS = !0, hD.RegisterExtension(IS, (kk => new zS(kk))))
    }
    vS();
    const ES = "KHR_materials_volume_scatter";
    class hS {
      constructor(kk) {
        this.name = ES, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        const Dk = [];
        return ik instanceof Je && (ik.transmissionWeight > 0 && ik.transmissionScatterTexture && Dk.push(ik.transmissionScatterTexture), ik.subsurfaceWeight > 0 && ik.subsurfaceColorTexture && Dk.push(ik.subsurfaceColorTexture)), Dk
      }
      _isExtensionEnabled(kk) {
        if (kk.unlit) return !1;
        const ek = kk.transmissionWeight > 0 && !kk.geometryThinWalled && kk.transmissionDepth > 0 && !kk.transmissionScatter.equals(Zk.e.Black()),
          ik = kk.subsurfaceWeight > 0 && !kk.geometryThinWalled;
        return !(!ek && !ik)
      }
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((kk => {
          if (ik instanceof Je && this._isExtensionEnabled(ik)) {
            this._wasUsed = !0;
            let kk = ak.o.Zero(),
              Dk = 0;
            if (ik.transmissionWeight > 0) {
              kk = function(kk) {
                const ek = new ak.o(Math.sqrt(1 - kk.x), Math.sqrt(1 - kk.y), Math.sqrt(1 - kk.z)),
                  ik = new ak.o(1, 1, 1),
                  Dk = ik.subtract(ek),
                  fk = ik.subtract(new ak.o(.139, .139, .139).multiplyInPlace(ek)),
                  Sk = ik.add(new ak.o(1.17, 1.17, 1.17).multiplyInPlace(ek));
                return Dk.multiplyInPlace(fk).divideInPlace(Sk)
              }(new ak.o(ik.transmissionScatter.r, ik.transmissionScatter.g, ik.transmissionScatter.b)), Dk = ik.transmissionScatterAnisotropy
            }
            const fk = ak.o.Zero();
            let Sk = 0;
            ik.subsurfaceWeight > 0 && (fk.set(ik.subsurfaceColor.r, ik.subsurfaceColor.g, ik.subsurfaceColor.b), Sk = ik.subsurfaceScatterAnisotropy);
            const bk = (1 - ik.transmissionWeight) * ik.subsurfaceWeight,
              rk = bk + ik.transmissionWeight,
              Pk = 1 / Math.max(rk, 1e-6),
              mk = ik.transmissionWeight * Pk,
              Mk = bk * Pk,
              Kk = {
                multiscatterColorFactor: kk.multiplyByFloats(mk, mk, mk).addInPlace(fk.multiplyByFloats(Mk, Mk, Mk)).Tik(),
                scatterAnisotropy: Dk * mk + Sk * Mk
              };
            if (ik.subsurfaceWeight > 0 && ik.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(ik);
              const kk = this._exporter._materialExporter.getTextureInfo(ik.subsurfaceColorTexture);
              kk && (Kk.multiscatterColorTexture = kk)
            } else if (ik.transmissionWeight > 0 && ik.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(ik);
              const kk = this._exporter._materialExporter.getTextureInfo(ik.transmissionScatterTexture);
              kk && (Kk.multiscatterColorTexture = kk)
            }
            ek.extensions = ek.extensions || {}, ek.extensions[ES] = Kk
          }
          kk(ek)
        }))
      }
    }
    let aS = !1;

    function WS() {
      aS || (aS = !0, hD.RegisterExtension(ES, (kk => new hS(kk)), 101))
    }
    WS();
    const tS = "KHR_materials_diffuse_roughness";
    class XS {
      constructor(kk) {
        this.name = tS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, ek, ik) {
        const Dk = [];
        if (ik instanceof Ae) {
          if (ik._baseDiffuseRoughness) return ik._baseDiffuseRoughnessTexture && Dk.push(ik._baseDiffuseRoughnessTexture), Dk
        } else if (ik instanceof Je && ik.baseDiffuseRoughness) return ik.baseDiffuseRoughnessTexture && Dk.push(ik.baseDiffuseRoughnessTexture), Dk;
        return []
      }
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((kk => {
          let Dk = null,
            fk = null;
          if (ik instanceof Ae ? (Dk = ik._baseDiffuseRoughness, fk = ik._baseDiffuseRoughnessTexture) : ik instanceof Je && (Dk = ik.baseDiffuseRoughness, fk = ik.baseDiffuseRoughnessTexture), !Dk) return void kk(ek);
          this._wasUsed = !0, ek.extensions = ek.extensions || {};
          const Sk = {
            diffuseRoughnessFactor: Dk,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(fk) ?? void 0
          };
          null !== Sk.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(ik), ek.extensions[tS] = Sk, kk(ek)
        }))
      }
    }
    let BS = !1;

    function cS() {
      BS || (BS = !0, hD.RegisterExtension(tS, (kk => new XS(kk))))
    }
    cS();
    const TS = "KHR_materials_openpbr";
    class oS {
      constructor() {
        this.name = TS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(kk, ek, ik) {
        return new Promise((kk => {
          ik instanceof Je && (this._wasUsed = !0, ek.extensions = ek.extensions || {}, ek.extensions[TS] = {}), kk(ek)
        }))
      }
    }
    let ZS = !1;

    function OS() {
      ZS || (ZS = !0, hD.RegisterExtension(TS, (() => new oS)))
    }
    OS();
    const gS = "KHR_texture_transform";
    class GS {
      constructor() {
        this.name = gS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(kk, ek, ik) {
        if (ik.XF() || se.i.Warn(`${kk}: "scene" is not defined for Babylon texture ${ik.name}!`), (0 !== ik.uAng || 0 !== ik.vAng) && (se.i.Warn(`${kk}: Texture ${ik.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== ik.uRotationCenter || 0 !== ik.vRotationCenter)) return;
        const Dk = {};
        let fk = !1;
        if (0 === ik.uOffset && 0 === ik.vOffset || (Dk.offset = [ik.uOffset, ik.vOffset], fk = !0), 1 === ik.uScale && 1 === ik.vScale || (Dk.scale = [ik.uScale, ik.vScale], fk = !0), 0 !== ik.wAng) {
          if (0 !== ik.uRotationCenter || 0 !== ik.vRotationCenter) {
            if (ik.homogeneousRotationInUVTransform && ik.uScale !== ik.vScale) return void se.i.Warn(`${kk}: Texture ${ik.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${gS}.`);
            se.i.Warn(`${kk}: Texture ${ik.name} with non-origin rotation center will be exported using an adjusted offset with ${gS}.`), Dk.offset = function(kk) {
              const {
                uOffset: ek,
                vOffset: ik,
                uRotationCenter: Dk,
                vRotationCenter: fk,
                uScale: Sk,
                vScale: bk,
                wAng: rk
              } = kk, Pk = Math.cos(rk), mk = Math.sin(rk), Mk = Dk * Sk, Kk = fk * bk;
              return [ek + (Mk * (1 - Pk) + Kk * mk), ik + (Kk * (1 - Pk) - Mk * mk)]
            }(ik)
          }
          Dk.rotation = -ik.wAng, fk = !0
        }
        0 !== ik.coordinatesIndex && (Dk.texCoord = ik.coordinatesIndex, fk = !0), fk && (this._wasUsed = !0, ek.extensions || (ek.extensions = {}), ek.extensions[gS] = Dk)
      }
    }
    let NS = !1;

    function RS() {
      NS || (NS = !0, hD.RegisterExtension(gS, (() => new GS)))
    }
    RS();
    var JS = ik(39607);
    const kb = "KHR_texture_basisu";
    class eb {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(kk) {
        this.name = kb, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      postExportTexture(kk, ek) {
        const ik = this._exporter._textures[ek.index],
          Dk = ik.source;
        if (void 0 === Dk) return;
        const fk = this._exporter._images[Dk];
        "image/ktx2" === (fk.mimeType || (0, JS.f)(fk.uri)) && (ik.source = void 0, ik.extensions || (ik.extensions = {}), ik.extensions[kb] = {
          source: Dk
        }, this._wasUsed = !0)
      }
    }
    let ib = !1;

    function Db() {
      ib || (ib = !0, hD.RegisterExtension(kb, (kk => new eb(kk))))
    }
    Db();
    const fb = "EXT_texture_webp";
    class Sb {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(kk) {
        this.name = fb, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      postExportTexture(kk, ek) {
        const ik = this._exporter._textures[ek.index],
          Dk = ik.source;
        if (void 0 === Dk) return;
        const fk = this._exporter._images[Dk];
        "image/webp" === (fk.mimeType || (0, JS.f)(fk.uri)) && (ik.source = void 0, ik.extensions || (ik.extensions = {}), ik.extensions[fb] = {
          source: Dk
        }, this._wasUsed = !0)
      }
    }
    let bb = !1;

    function rb() {
      bb || (bb = !0, hD.RegisterExtension(fb, (kk => new Sb(kk))))
    }
    rb();
    const Pb = "EXT_texture_avif";
    class mb {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(kk) {
        this.name = Pb, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      postExportTexture(kk, ek) {
        const ik = this._exporter._textures[ek.index],
          Dk = ik.source;
        if (void 0 === Dk) return;
        const fk = this._exporter._images[Dk];
        "image/avif" === (fk.mimeType || (0, JS.f)(fk.uri)) && (ik.source = void 0, ik.extensions || (ik.extensions = {}), ik.extensions[Pb] = {
          source: Dk
        }, this._wasUsed = !0)
      }
    }
    let Mb = !1;

    function Kb() {
      Mb || (Mb = !0, hD.RegisterExtension(Pb, (kk => new mb(kk))))
    }
    Kb();
    class xb {
      static CreateSTL(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          fk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Sk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          rk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Pk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const mk = function(kk, ek, ik) {
            const fk = [3 * kk[ik], 3 * kk[ik + 1], 3 * kk[ik + 2]],
              Sk = [new Dk.eH(ek[fk[0]], ek[fk[0] + 2], ek[fk[0] + 1]), new Dk.eH(ek[fk[1]], ek[fk[1] + 2], ek[fk[1] + 1]), new Dk.eH(ek[fk[2]], ek[fk[2] + 2], ek[fk[2] + 1])],
              bk = Sk[0].subtract(Sk[1]),
              rk = Sk[2].subtract(Sk[1]);
            return {
              v: Sk,
              n: Dk.eH.Cross(rk, bk).normalize()
            }
          },
          Kk = function(kk, ek, ik, Dk) {
            return ek = xk(kk, ek, ik.x, Dk), ek = xk(kk, ek, ik.y, Dk), xk(kk, ek, ik.z, Dk)
          },
          xk = function(kk, ek, ik, Dk) {
            return kk.setFloat32(ek, ik, Dk), ek + 4
          },
          Uk = function(kk) {
            if (rk) {
              let ek = kk;
              kk instanceof nk.e && (ek = kk.aDk);
              const ik = ek.getVerticesData(Mk.h.PositionKind, !0, !0);
              if (!ik) return [];
              const fk = Dk.eH.Zero();
              let Sk;
              for (Sk = 0; Sk < ik.length; Sk += 3) Dk.eH.TransformCoordinatesFromFloatsToRef(ik[Sk], ik[Sk + 1], ik[Sk + 2], kk.computeWorldMatrix(!0), fk).toArray(ik, Sk);
              return ik
            }
            return kk.getVerticesData(Mk.h.PositionKind) || []
          };
        rk && (bk = !0);
        let Hk = "",
          wk = 0,
          lk = 0;
        if (fk) {
          for (let ik = 0; ik < kk.length; ik++) {
            const ek = kk[ik].oik();
            wk += ek ? ek.length / 3 : 0
          }
          const ek = new ArrayBuffer(84 + 50 * wk);
          Hk = new DataView(ek), lk += 80, Hk.setUint32(lk, wk, Sk), lk += 4
        } else Pk || (Hk = "solid stlmesh\r\n");
        for (let Dk = 0; Dk < kk.length; Dk++) {
          const ek = kk[Dk];
          !fk && Pk && (Hk += "solid " + ek.name + "\r\n"), !bk && ek instanceof xD.d && ek.bakeCurrentTransformIntoVertices();
          const ik = Uk(ek),
            rk = ek.oik() || [];
          for (let kk = 0; kk < rk.length; kk += 3) {
            const ek = mk(rk, ik, kk);
            fk ? (lk = Kk(Hk, lk, ek.n, Sk), lk = Kk(Hk, lk, ek.v[0], Sk), lk = Kk(Hk, lk, ek.v[1], Sk), lk = Kk(Hk, lk, ek.v[2], Sk), lk += 2) : (Hk += "\tfacet normal " + ek.n.x + " " + ek.n.y + " " + ek.n.z + "\r\n", Hk += "\t\touter loop\r\n", Hk += "\t\t\tvertex " + ek.v[0].x + " " + ek.v[0].y + " " + ek.v[0].z + "\r\n", Hk += "\t\t\tvertex " + ek.v[1].x + " " + ek.v[1].y + " " + ek.v[1].z + "\r\n", Hk += "\t\t\tvertex " + ek.v[2].x + " " + ek.v[2].y + " " + ek.v[2].z + "\r\n", Hk += "\t\tendloop\r\n", Hk += "\tendfacet\r\n")
          }!fk && Pk && (Hk += "endsolid " + name + "\r\n")
        }
        if (fk || Pk || (Hk += "endsolid stlmesh"), ek) {
          const kk = document.createElement("a"),
            ek = new Blob([Hk], {
              type: "application/octet-stream"
            });
          kk.href = window.URL.createObjectURL(ek), kk.download = ik + ".stl", kk.click()
        }
        return Hk
      }
    }

    function nb(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const fk = [];
      for (let Sk = 0; Sk < kk.length / ik; Sk++) {
        const bk = kk[Sk * ik] * (Dk ? -1 : 1),
          rk = kk[Sk * ik + 1],
          Pk = kk[Sk * ik + 2];
        fk.push(`(${bk.toPrecision(ek.precision)}, ${rk.toPrecision(ek.precision)}, ${Pk.toPrecision(ek.precision)})`)
      }
      return fk.join(", ")
    }

    function Ub(kk, ek) {
      const ik = [];
      for (let Dk = 0; Dk < kk.length / 2; Dk++) {
        const fk = kk[2 * Dk],
          Sk = kk[2 * Dk + 1];
        ik.push(`(${fk.toPrecision(ek.precision)}, ${(1-Sk).toPrecision(ek.precision)})`)
      }
      return ik.join(", ")
    }

    function Hb(kk, ek, ik, Dk) {
      const fk = kk.getVerticesData(Mk.h.PositionKind),
        Sk = kk.getVerticesData(Mk.h.NormalKind);
      if (fk && Sk) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${ik}"\n\t\tint[] faceVertexCounts = [${function(kk){const ek=kk.oik()?.length?kk.getTotalIndices():kk.getTotalVertices();return Array(ek/3).fill(3).join(", ")}(kk)}]\n\t\tint[] faceVertexIndices = [${function(kk){const ek=kk.oik(),ik=ek?.length??kk.getTotalVertices(),Dk=[];if(null!==ek)for(let fk=0;fk<ik;fk++)Dk.push(ek[fk]);else for(let fk=0;fk<ik;fk++)Dk.push(fk);return Dk.join(", ")}(kk)}]\n\t\tnormal3f[] normals = [${nb(Sk,ek,void 0,Dk)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${nb(fk,ek,void 0,Dk)}]\n        ${function(kk,ek){let ik="";for(let fk=0;fk<4;fk++){const Dk=fk>0?fk:"",Sk=kk.getVerticesData(Mk.h.UVKind+(Dk?Dk+1:""));Sk&&(ik+=`\n\t\ttexCoord2f[] primvars:st${Dk} = [${Ub(Sk,ek)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Dk=kk.getVerticesData(Mk.h.ColorKind);return Dk&&(ik+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        nb(Dk, ek, Dk.length / kk.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),ik}(kk,ek)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function wb(kk, ek, ik, Dk) {
      return `\n        def "Geometry"\n        {\n        ${Hb(kk,ek,ik,Dk)}\n        }\n        `
    }

    function lb(kk) {
      let ek = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return ek += kk, fflate.strToU8(ek)
    }

    function pb(kk) {
      const ek = kk.m;
      return `( ${yb(ek,0)}, ${yb(ek,4)}, ${yb(ek,8)}, ${yb(ek,12)} )`
    }

    function yb(kk, ek) {
      return `(${kk[ek+0]}, ${kk[ek+1]}, ${kk[ek+2]}, ${kk[ek+3]})`
    }

    function Yb(kk, ek) {
      const ik = "Object_" + kk.uniqueId,
        Dk = pb(ek);
      return `def Xform "${ik}" (\n\tprepend references = @./geometries/Geometry_${kk.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Dk}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${kk.material.uniqueId}>\n}\n\n`
    }

    function Lb(kk) {
      switch (kk) {
        case Ak.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case Ak.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case Ak.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function Cb(kk) {
      return `(${kk.x}, ${kk.y})`
    }

    function Ab(kk) {
      return `(${kk.r}, ${kk.g}, ${kk.b})`
    }

    function jb(kk) {
      return "image/jpeg" === kk || "image/png" === kk
    }

    function sb(kk, ek, ik, fk, Sk, bk) {
      const rk = kk.getInternalTexture().uniqueId + "_" + kk.invertY,
        mk = kk.mimeType || (0, Pk.d)(kk.getInternalTexture()?.url ?? ""),
        Mk = jb(mk) ? mk : "image/png",
        Kk = "image/jpeg" === Mk ? "jpg" : "png";
      Sk[rk] = {
        texture: kk,
        mimeType: Mk,
        ext: Kk
      };
      const xk = kk.coordinatesIndex > 0 ? "st" + kk.coordinatesIndex : "st",
        nk = new Dk.Vector2(kk.uScale, kk.vScale),
        Uk = new Dk.Vector2(kk.uOffset, kk.vOffset),
        Hk = kk.wAng,
        wk = Math.sin(Hk),
        lk = Math.cos(Hk);
      return Uk.y = 1 - Uk.y - nk.y, Uk.x += wk * nk.x, Uk.y += (1 - lk) * nk.y, `\n    def Shader "PrimvarReader_${ik}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${xk}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${ik}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${ek.uniqueId}/PrimvarReader_${ik}.outputs:result>\n        float inputs:rotation = ${(Hk*(180/Math.PI)).toFixed(bk.precision)}\n        float2 inputs:scale = ${Cb(nk)}\n        float2 inputs:translation = ${Cb(Uk)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${kk.uniqueId}_${ik}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${rk}.${Kk}@\n        float2 inputs:st.connect = </Root/Materials/Material_${ek.uniqueId}/Transform2d_${ik}.outputs:result>\n        ${fk?"float4 inputs:scale = "+function(kk){return`(${kk.r}, ${kk.g}, ${kk.b}, 1.0)`}(fk):""}\n        token inputs:sourceColorSpace = "${kk.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Lb(kk.wrapU)}"\n        token inputs:wrapT = "${Lb(kk.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${ek.needAlphaBlending()||ek.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function db(kk, ek, ik) {
      const Dk = "\t\t\t",
        fk = [],
        Sk = [],
        {
          diffuseMap: bk,
          diffuse: rk,
          alphaCutOff: Pk,
          emissiveMap: mk,
          emissive: Mk,
          normalMap: Kk,
          roughnessMap: xk,
          roughnessChannel: nk,
          roughness: Uk,
          metalnessMap: Hk,
          metalnessChannel: lk,
          metalness: pk,
          aoMap: yk,
          aoMapChannel: Yk,
          aoMapIntensity: Lk,
          alphaMap: Ck,
          ior: Ak,
          clearCoatEnabled: jk,
          clearCoat: sk,
          clearCoatMap: dk,
          clearCoatRoughness: Vk,
          clearCoatRoughnessMap: Fk
        } = function(kk) {
          const ek = {
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
          return kk instanceof PD.StandardMaterial ? {
            ...ek,
            diffuseMap: kk.diffuseTexture,
            diffuse: kk.diffuseColor,
            alphaCutOff: kk.alphaCutOff,
            emissiveMap: kk.emissiveTexture,
            emissive: kk.emissiveColor,
            roughness: 1,
            alphaMap: kk.opacityTexture
          } : kk instanceof Ae ? {
            ...ek,
            diffuseMap: kk._albedoTexture,
            diffuse: kk._albedoColor,
            alphaCutOff: kk._alphaCutOff,
            emissiveMap: kk._emissiveTexture,
            emissive: kk._emissiveColor,
            normalMap: kk._bumpTexture,
            roughnessMap: kk._metallicTexture,
            roughnessChannel: kk._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: kk._roughness ?? 1,
            metalnessMap: kk._metallicTexture,
            metalnessChannel: kk._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: kk._metallic ?? 0,
            aoMap: kk._ambientTexture,
            aoMapChannel: kk._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: kk._ambientTextureStrength,
            alphaMap: kk._opacityTexture,
            ior: kk.subSurface.indexOfRefraction,
            clearCoatEnabled: kk.clearCoat.isEnabled,
            clearCoat: kk.clearCoat.intensity,
            clearCoatMap: kk.clearCoat.texture,
            clearCoatRoughness: kk.clearCoat.roughness,
            clearCoatRoughnessMap: kk.clearCoat.useRoughnessFromMainTexture ? kk.clearCoat.texture : kk.clearCoat.textureRoughness
          } : ek
        }(kk);
      return null !== bk ? (fk.push(`${Dk}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${bk.uniqueId}_diffuse.outputs:rgb>`), kk.needAlphaBlending() ? fk.push(`${Dk}float inputs:opacity.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${bk.uniqueId}_diffuse.outputs:a>`) : kk.needAlphaTesting() && (fk.push(`${Dk}float inputs:opacity.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${bk.uniqueId}_diffuse.outputs:a>`), fk.push(`${Dk}float inputs:opacityThreshold = ${Pk}`)), Sk.push(sb(bk, kk, "diffuse", rk, ek, ik))) : fk.push(`${Dk}color3f inputs:diffuseColor = ${Ab(rk||wk.Color3.White())}`), null !== mk ? (fk.push(`${Dk}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${mk.uniqueId}_emissive.outputs:rgb>`), Sk.push(sb(mk, kk, "emissive", Mk, ek, ik))) : Mk && Mk.toLuminance() > 0 && fk.push(`${Dk}color3f inputs:emissiveColor = ${Ab(Mk)}`), null !== Kk && (fk.push(`${Dk}normal3f inputs:normal.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Kk.uniqueId}_normal.outputs:rgb>`), Sk.push(sb(Kk, kk, "normal", null, ek, ik))), null !== yk && (fk.push(`${Dk}float inputs:occlusion.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${yk.uniqueId}_occlusion.outputs:${Yk}>`), Sk.push(sb(yk, kk, "occlusion", new wk.Color3(Lk, Lk, Lk), ek, ik))), null !== xk ? (fk.push(`${Dk}float inputs:roughness.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${xk.uniqueId}_roughness.outputs:${nk}>`), Sk.push(sb(xk, kk, "roughness", new wk.Color3(Uk, Uk, Uk), ek, ik))) : fk.push(`${Dk}float inputs:roughness = ${Uk}`), null !== Hk ? (fk.push(`${Dk}float inputs:metallic.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Hk.uniqueId}_metallic.outputs:${lk}>`), Sk.push(sb(Hk, kk, "metallic", new wk.Color3(pk, pk, pk), ek, ik))) : fk.push(`${Dk}float inputs:metallic = ${pk}`), null !== Ck ? (fk.push(`${Dk}float inputs:opacity.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Ck.uniqueId}_opacity.outputs:r>`), fk.push(`${Dk}float inputs:opacityThreshold = 0.0001`), Sk.push(sb(Ck, kk, "opacity", null, ek, ik))) : fk.push(`${Dk}float inputs:opacity = ${kk.alpha}`), jk && (null !== dk ? (fk.push(`${Dk}float inputs:clearcoat.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${dk.uniqueId}_clearcoat.outputs:r>`), Sk.push(sb(dk, kk, "clearcoat", new wk.Color3(sk, sk, sk), ek, ik))) : fk.push(`${Dk}float inputs:clearcoat = ${sk}`), null !== Fk ? (fk.push(`${Dk}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Fk.uniqueId}_clearcoatRoughness.outputs:g>`), Sk.push(sb(Fk, kk, "clearcoatRoughness", new wk.Color3(Vk, Vk, Vk), ek, ik))) : fk.push(`${Dk}float inputs:clearcoatRoughness = ${Vk}`)), fk.push(`${Dk}float inputs:ior = ${Ak}`), `\n\tdef Material "Material_${kk.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${fk.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${kk.uniqueId}/PreviewSurface.outputs:surface>\n\n${Sk.join("\n")}\n\n\t}\n`
    }

    function Vb(kk) {
      kk.computeWorldMatrix(!0);
      const ek = kk.getWorldMatrix().clone(),
        ik = kk.XF().useRightHandedSystem;
      let Dk = kk.material?._getEffectiveOrientation(kk) ?? kk.sideOrientation,
        bk = !ik,
        rk = kk.parent;
      for (; rk;) {
        if (ai(rk, ik) && null === rk.parent) {
          ik || (ek.multiplyToRef(rk.getWorldMatrix().invert(), ek), Dk = Dk === Sk.e.ClockWiseSideOrientation ? Sk.e.CounterClockWiseSideOrientation : Sk.e.ClockWiseSideOrientation), bk = !1;
          break
        }
        rk = rk.parent
      }
      return ek.determinant() < 0 && fk.Tools.Warn(`Mesh ${kk.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: ek,
        windingOrder: Dk === Sk.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: bk
      }
    }
    async function Fb(kk, ek, ik) {
      const Sk = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...ek
      };
      "undefined" === typeof fflate && await fk.Tools.LoadScriptAsync(Sk.fflateUrl);
      const bk = {};
      bk[Sk.modelFileName] = null;
      let rk = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      rk += function(kk) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===kk.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${kk.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${kk.planeAnchoringAlignment}"`:""}\n            `
      }(Sk);
      const Pk = {};
      for (const Dk of kk.meshes) {
        if (0 === Dk.getTotalVertices()) continue;
        const kk = Dk,
          ek = kk.geometry,
          mk = kk.material;
        if (!mk || !ek || ik && !ik(kk)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(mk.getClassName())) {
          const ik = "geometries/Geometry_" + ek.uniqueId + ".usda",
            {
              matrix: Dk,
              windingOrder: fk,
              convertToRightHanded: Mk
            } = Vb(kk);
          if (!(ik in bk)) {
            const kk = wb(ek, Sk, fk, Mk);
            bk[ik] = lb(kk)
          }
          mk.uniqueId in Pk || (Pk[mk.uniqueId] = mk), rk += Yb(kk, Dk)
        } else fk.Tools.Warn("USDZExportAsync does not support this material type: " + mk.getClassName())
      }
      kk.activeCamera && Sk.exportCamera && (rk += function(kk, ek) {
        const ik = "Camera_" + kk.uniqueId,
          fk = pb(Dk.Matrix.RotationY(Math.PI).multiply(kk.getWorldMatrix()));
        if (kk.mode === Ak.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${ik}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${fk}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${kk.minZ.toPrecision(ek.precision)}, ${kk.maxZ.toPrecision(ek.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(kk.orthoLeft||1)+Math.abs(kk.orthoRight||1))).toPrecision(ek.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(kk.orthoTop||1)+Math.abs(kk.orthoBottom||1))).toPrecision(ek.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Dk = kk.JU().getAspectRatio(kk),
            Sk = ek.cameraSensorWidth || 35;
          return `def Camera "${ik}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${fk}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${kk.minZ.toPrecision(ek.precision)}, ${kk.maxZ.toPrecision(ek.precision)})\n\t\t\tfloat focalLength = ${(Sk/(2*Math.tan(.5*kk.fov))).toPrecision(ek.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(Sk*Dk).toPrecision(ek.precision)}\n\t\t\tfloat verticalAperture = ${(Sk/Dk).toPrecision(ek.precision)}            \n\t\t}\n\t\n\t`
        }
      }(kk.activeCamera, Sk)), rk += "\n            }\n        }";
      const mk = {};
      rk += function(kk, ek, ik) {
        const Dk = [];
        for (const fk in kk) {
          const Sk = kk[fk];
          Dk.push(db(Sk, ek, ik))
        }
        return `\n    def "Materials"\n{\n${Dk.join("")}\n}\n\n`
      }(Pk, mk, Sk), rk += "\n    }", bk[Sk.modelFileName] = fflate.strToU8(rk);
      for (const Dk in mk) {
        const {
          texture: kk,
          ext: ek,
          mimeType: ik
        } = mk[Dk], fk = await yi(kk);
        if (fk && jb(fk.mimeType) && fk.mimeType === ik) bk[`textures/Texture_${Dk}.${ek}`] = new Uint8Array(fk.data);
        else {
          const fk = kk.getSize(),
            Sk = await (0, Yk.e)(kk),
            rk = await jk.DumpTools.DumpDataAsync(fk.width, fk.height, Sk, ik, void 0, !1, !0);
          bk[`textures/Texture_${Dk}.${ek}`] = new Uint8Array(rk).slice()
        }
      }
      let Mk = 0;
      for (const Dk in bk) {
        const kk = bk[Dk];
        if (!kk) continue;
        Mk += 34 + Dk.length;
        const ek = 63 & Mk;
        if (4 !== ek) {
          const ik = new Uint8Array(64 - ek);
          bk[Dk] = [kk, {
            extra: {
              12345: ik
            }
          }]
        }
        Mk = kk.length
      }
      return fflate.zipSync(bk, {
        level: 0
      })
    }
    var ub = ik(40690);
    class qb {
      static Export(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ik = arguments.length > 2 ? arguments[2] : void 0;
        if (!kk || 0 === kk.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Dk = ek;
        ek && 0 !== ek.length || (Dk = kk.animations.map((kk => kk.name)));
        let fk = null;
        for (const mk of Dk) {
          const ek = kk.getAnimationRange(mk);
          ek && (fk = fk ? new ub.b("animation-range", Math.min(fk.from, ek.from), Math.max(fk.to, ek.to)) : ek)
        }
        if (!fk && (kk.animations.length > 0 && (fk = kk.getAnimationRange(kk.animations[0].name)), !fk)) throw new Error("No animation range found in skeleton");
        const Sk = ik || 1 / (kk.animations[0]?.framePerSecond || 30),
          bk = this._BuildBoneHierarchy(kk, Dk);
        let rk = 0;
        for (const mk of bk) mk.positionKeys.length > 0 && (rk = Math.max(rk, mk.positionKeys.length)), mk.rotationKeys.length > 0 && (rk = Math.max(rk, mk.rotationKeys.length));
        0 === rk && (rk = Math.floor((fk.to - fk.from) / Sk) + 1);
        let Pk = "";
        return Pk += "HIERARCHY\n", Pk += this._ExportHierarchy(bk, 0), Pk += "MOTION\n", Pk += `Frames: ${rk}\n`, Pk += `Frame Time: ${Sk.toFixed(6)}\n`, Pk += this._ExportMotionData(bk, rk, 0, Dk), Pk
      }
      static _BuildBoneHierarchy(kk, ek) {
        const ik = new Map,
          Dk = [];
        for (const fk of kk.bones) {
          const kk = {
            bone: fk,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          ik.set(fk, kk)
        }
        for (const fk of kk.bones) {
          const kk = ik.get(fk);
          if (fk.animations.length > 0)
            for (const ik of fk.animations) ek.includes(ik.name) && ("position" === ik.targetProperty ? (kk.hasPositionChannels = !0, kk.positionKeys.push(...ik.getKeys())) : "rotationQuaternion" === ik.targetProperty && (kk.hasRotationChannels = !0, kk.rotationKeys.push(...ik.getKeys())));
          if (fk.getParent()) {
            const ek = ik.get(fk.getParent());
            ek && ek.children.push(kk)
          } else Dk.push(kk)
        }
        return Dk
      }
      static _ExportHierarchy(kk, ek) {
        let ik = "";
        const Dk = "    ".repeat(ek);
        for (const fk of kk) {
          const kk = fk.bone;
          if (this._IsEndSite(fk)) {
            ik += `${Dk}End Site\n`, ik += `${Dk}{\n`;
            const ek = this._GetBoneOffset(kk);
            ik += `${Dk}    OFFSET ${ek.x.toFixed(6)} ${ek.y.toFixed(6)} ${ek.z.toFixed(6)}\n`, ik += `${Dk}}\n`
          } else {
            ik += `${0===ek?"ROOT":`${Dk}JOINT`} ${kk.name}\n`, ik += `${Dk}{\n`;
            const Sk = this._GetBoneOffset(kk);
            ik += `${Dk}    OFFSET ${Sk.x.toFixed(6)} ${Sk.y.toFixed(6)} ${Sk.z.toFixed(6)}\n`;
            const bk = [];
            fk.hasPositionChannels && bk.push("Xposition", "Yposition", "Zposition"), fk.hasRotationChannels && bk.push("Zrotation", "Xrotation", "Yrotation"), bk.length > 0 && (ik += `${Dk}    CHANNELS ${bk.length} ${bk.join(" ")}\n`), fk.children.length > 0 && (ik += this._ExportHierarchy(fk.children, ek + 1)), ik += `${Dk}}\n`
          }
        }
        return ik
      }
      static _IsEndSite(kk) {
        return 0 === kk.children.length
      }
      static _GetBoneOffset(kk) {
        try {
          if (!kk.getParent()) return kk.getRestMatrix().getTranslation();
          return kk.getLocalMatrix().getTranslation()
        } catch (ek) {
          return Dk.eH.Zero()
        }
      }
      static _ExportMotionData(kk, ek, ik, Dk) {
        let fk = "";
        for (let Sk = 0; Sk < ek; Sk++) {
          const ek = [];
          this._CollectFrameValues(kk, Sk + ik, ek, Dk), fk += ek.map((kk => kk.toFixed(6))).join(" ") + "\n"
        }
        return fk
      }
      static _CollectFrameValues(kk, ek, ik, Dk) {
        for (const fk of kk)
          if (!this._IsEndSite(fk)) {
            if (fk.hasPositionChannels) {
              const kk = this._GetPositionAtFrameIndex(fk.positionKeys, ek);
              ik.push(kk.x, kk.y, kk.z)
            }
            if (fk.hasRotationChannels) {
              const kk = this._GetRotationAtFrameIndex(fk.rotationKeys, ek),
                Dk = this._QuaternionToEuler(kk);
              ik.push(Dk.z, Dk.x, Dk.y)
            }
            fk.children.length > 0 && this._CollectFrameValues(fk.children, ek, ik, Dk)
          }
      }
      static _GetPositionAtFrameIndex(kk, ek) {
        if (0 === kk.length) return Dk.eH.Zero();
        return kk[Math.max(0, Math.min(ek, kk.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(kk, ek) {
        if (0 === kk.length) return Dk.Quaternion.Identity();
        return kk[Math.max(0, Math.min(ek, kk.length - 1))].value.clone()
      }
      static _QuaternionToEuler(kk) {
        const ek = new Dk.Matrix;
        kk.toRotationMatrix(ek);
        const ik = ek.m;
        let Sk, bk, rk;
        const Pk = Math.sqrt(ik[0] * ik[0] + ik[1] * ik[1]);
        return Pk > vi.d ? (Sk = Math.atan2(ik[6], ik[10]), bk = Math.atan2(-ik[2], Pk), rk = Math.atan2(ik[1], ik[0])) : (Sk = Math.atan2(-ik[9], ik[5]), bk = Math.atan2(-ik[2], Pk), rk = 0), new Dk.eH(fk.Tools.ToDegrees(Sk), fk.Tools.ToDegrees(bk), fk.Tools.ToDegrees(rk))
      }
    }

    function Ib(kk) {
      return "string" === typeof kk?.name
    }
    const zb = Symbol("__xml:meta$__"),
      Qb = Symbol("__xml:name$__");

    function vb(kk, ek) {
      Object.prototype.hasOwnProperty.call(kk.metadata, zb) || (kk.metadata[zb] = []), kk.metadata[zb].push(ek)
    }

    function Eb(kk) {
      return (ek, ik) => {
        ek[Qb] = kk
      }
    }

    function hb() {
      return (kk, ek) => vb(ek, {
        kind: "none",
        prop: String(ek.name),
        ignore: !0
      })
    }

    function ab(kk) {
      return (ek, ik) => vb(ik, {
        kind: "attr",
        prop: String(ik.name),
        ...kk
      })
    }

    function Wb(kk) {
      return (ek, ik) => vb(ik, {
        kind: "elem",
        prop: String(ik.name),
        ...kk
      })
    }

    function tb(kk) {
      const ek = "function" === typeof kk ? kk : kk?.constructor,
        ik = ek?.[Symbol.metadata];
      if (!ik) return [];
      const Dk = [];
      let fk = ik;
      for (; fk;) Object.prototype.hasOwnProperty.call(fk, zb) && Dk.push(...fk[zb]), fk = Object.getPrototypeOf(fk);
      return Dk
    }

    function Xb(kk) {
      const ek = kk?.constructor?.[Qb];
      return ek || void 0
    }

    function Bb(kk) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(kk)
    }

    function cb(kk) {
      if (Ib(kk)) return kk;
      const ek = (kk ?? "").trim();
      if (!ek) return {
        name: ""
      };
      const ik = ek.indexOf(":");
      if (-1 === ik) return {
        name: ek
      };
      if (-1 !== ek.indexOf(":", ik + 1)) return {
        name: ek
      };
      const Dk = ek.slice(0, ik),
        fk = ek.slice(ik + 1);
      return Bb(Dk) && Bb(fk) ? {
        ns: Dk,
        name: fk
      } : {
        name: ek
      }
    }

    function Tb(kk, ek) {
      return ek ? `${ek}:${kk}` : kk
    }
    const ob = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      Zb = Object.freeze({
        number: ob
      });

    function Ob(kk) {
      const ek = kk?.eps ?? ob.eps;
      return {
        eps: ek,
        maxDecimalsCap: kk?.maxDecimalsCap ?? ob.maxDecimalsCap,
        trimTrailingZeros: kk?.trimTrailingZeros ?? ob.trimTrailingZeros,
        fixedDecimals: kk?.fixedDecimals,
        allowScientific: kk?.allowScientific ?? ob.allowScientific,
        snapNearZero: kk?.snapNearZero ?? ob.snapNearZero,
        zeroThreshold: kk?.zeroThreshold ?? ek,
        perAttributeEps: kk?.perAttributeEps
      }
    }

    function gb(kk) {
      return {
        number: Ob(kk?.number)
      }
    }
    class Gb {
      constructor(kk) {
        if (this.o = kk, this._o = kk.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(kk) {
        if (!Number.isFinite(kk)) throw new Error(`Cannot format non-finite number: ${kk}`);
        const ek = this._o,
          ik = this._clampInt(ek.maxDecimalsCap ?? 15, 0, 20),
          Dk = ek.trimTrailingZeros ?? !0,
          fk = ek.snapNearZero ?? !0,
          Sk = ek.zeroThreshold ?? ek.eps,
          bk = 1 / ek.eps;
        let rk, Pk = Math.round(kk * bk) / bk;
        if (Object.is(Pk, -0) && (Pk = 0), fk && Math.abs(Pk) <= Sk && (Pk = 0), rk = void 0 !== ek.fixedDecimals ? this._clampInt(ek.fixedDecimals, 0, ik) : this._clampInt(Math.ceil(-Math.log10(ek.eps)), 0, ik), ek.allowScientific, 0 === rk) return String(Math.trunc(Pk));
        let mk = Pk.toFixed(rk);
        if (Dk && void 0 === ek.fixedDecimals && (mk = mk.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(mk)) throw new Error(`Scientific notation not allowed in XML output: ${mk}`);
        return mk
      }
      _clampInt(kk, ek, ik) {
        return Number.isFinite(kk) ? (kk = Math.trunc(kk), Math.max(ek, Math.min(ik, kk))) : ek
      }
    }

    function Nb(kk) {
      return kk instanceof Date
    }

    function Rb(kk) {
      return "string" === typeof kk
    }

    function Jb(kk) {
      return "string" === typeof kk || "number" === typeof kk || "boolean" === typeof kk || "bigint" === typeof kk || Nb(kk)
    }

    function kr(kk) {
      return "number" === typeof kk || "boolean" === typeof kk || "bigint" === typeof kk || Nb(kk)
    }
    class er {
      constructor(kk, ek) {
        this._ns = new Map, this._prefixCount = 0, this._builder = kk, this._format = gb(ek), this._nFmt = new Gb(this._format)
      }
      withNamespace() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        for (const Dk of ek) this._assignNamespace(Dk);
        return this
      }
      serialize(kk, ek) {
        if (!(ek = ek ?? Xb(kk))) throw new Error("can not find name for given object");
        const ik = cb(ek);
        ik.ns && this._assignNamespace(ik.ns, "xmlns"), this._gatherNamespaces(kk, new WeakSet);
        const Dk = this._builder.ele(null, ik.name);
        for (const [fk, Sk] of Array.from(this._ns.entries())) Dk.att("xmlns", Sk, fk);
        this._writeObjectContent(Dk, kk, (new WeakSet).add(kk)), this._builder.end()
      }
      _writeObject(kk, ek, ik) {
        if (ik.has(ek)) return;
        if (ik.add(ek), Array.isArray(ek)) {
          for (const Dk of ek) kr(Dk) || (Rb(Dk) ? this._builder.text(Dk) : this._writeObject(kk, Dk, ik));
          return
        }
        const Dk = Xb(ek);
        if (!Dk) return;
        const fk = cb(Dk),
          Sk = this._getPrefix(fk),
          bk = Tb(fk.name, Sk);
        kk.ele(null, bk), this._writeObjectContent(kk, ek, ik), this._builder.end()
      }
      _getPrefix(kk) {
        if (kk.ns) {
          const ek = this._ns.get(kk.ns.toLowerCase());
          if ("xmlns" !== ek) return ek
        }
      }
      _writeObjectContent(kk, ek, ik) {
        const Dk = tb(ek) ?? [],
          fk = new Map;
        for (const bk of Dk) {
          const kk = fk.get(bk.prop) ?? [];
          kk.push(bk), fk.set(bk.prop, kk)
        }
        const Sk = Object.keys(ek).sort(((kk, ek) => {
          const ik = (fk.get(kk) ?? []).some((kk => "attr" === kk.kind));
          return ik === (fk.get(ek) ?? []).some((kk => "attr" === kk.kind)) ? 0 : ik ? -1 : 1
        }));
        for (const bk of Sk) {
          const Dk = ek[bk];
          if (null === Dk || void 0 === Dk) continue;
          const Sk = fk.get(bk);
          if (Sk) {
            if (Sk.some((kk => !0 === kk.ignore || "none" === kk.kind))) continue;
            for (const ek of Sk) {
              const ik = ek.name ?? ek.prop.toLowerCase();
              if (ik) switch (ek.kind) {
                case "attr": {
                  let fk = null;
                  if ("number" === typeof Dk && this._nFmt && (fk = this._nFmt.toString(Dk)), ek.formatter) {
                    fk = new ek.formatter(this._format).toString(Dk)
                  }
                  if (fk = fk ?? Dk.toString(), fk) {
                    const ek = cb(ik),
                      Dk = this._getPrefix(ek),
                      Sk = Tb(ek.name, Dk);
                    kk.att(null, Sk, fk)
                  }
                  break
                }
              }
            }
          } else kr(Dk) || (Rb(Dk) ? this._builder.text(Dk) : this._writeObject(kk, Dk, ik))
        }
      }
      _gatherNamespaces(kk, ek) {
        if (ek.has(kk)) return;
        if (ek.add(kk), Array.isArray(kk)) {
          for (const ik of kk) Jb(ik) || this._gatherNamespaces(ik, ek);
          return
        }
        const ik = Xb(kk);
        ik && this._assignNamespace(ik);
        const Dk = tb(kk) ?? [],
          fk = new Map;
        for (const bk of Dk) {
          const kk = fk.get(bk.prop) ?? [];
          kk.push(bk), fk.set(bk.prop, kk)
        }
        const Sk = [];
        for (const bk of Object.keys(kk)) {
          const ek = kk[bk];
          if (null === ek || void 0 === ek) continue;
          const ik = fk.get(bk);
          if (ik) {
            if (ik.some((kk => !0 === kk.ignore || "none" === kk.kind))) continue;
            for (const kk of ik) kk.name && this._assignNamespace(kk.name)
          }
          Sk.push(ek)
        }
        for (const bk of Sk) Jb(bk) || this._gatherNamespaces(bk, ek)
      }
      _assignNamespace(kk, ek) {
        const ik = cb(kk);
        if (ik?.ns) {
          const kk = ik.ns.toLowerCase();
          this._ns.get(kk) || this._ns.set(kk, ek ?? this._buildNsPrefix(kk))
        } else if ("xmlns" === ek) {
          const kk = ik.name.toLowerCase();
          this._ns.get(kk) || this._ns.set(kk, ek ?? this._buildNsPrefix(kk))
        }
      }
      _buildNsPrefix(kk) {
        let ek, ik = !1;
        do {
          ek = "ns" + this._prefixCount++;
          for (const kk of Array.from(this._ns.values()))
            if (kk === ek) {
              ik = !0;
              break
            }
        } while (ik);
        return ek
      }
    }
    class ir {}
    var Dr;
    ir.OpenTag = "<", ir.CloseTag = ">", ir.Slash = "/", ir.Question = "?", ir.Quote = '"', ir.Equal = "=", ir.Space = " ", ir.Semicolon = ":", ir.Dec = "<?xml", ir.Xml = "xml", ir.Xmlns = "xmlns", ir.Xsi = "xsi", ir.VersionKeyword = "version", ir.EncodingKeyword = "encoding", ir.StandaloneKeyword = "standalone",
      function(kk) {
        kk[kk.Declaration = 0] = "Declaration", kk[kk.Tag = 1] = "Tag", kk[kk.Attribute = 2] = "Attribute", kk[kk.Text = 3] = "Text"
      }(Dr || (Dr = {}));
    class fr {
      constructor(kk) {
        this._ctxStack = [], this._d = 0, this._w = kk
      }
      dec(kk, ek, ik) {
        return this._w.write(ir.Dec), this._writeAttStr(ir.VersionKeyword, kk), ek && this._writeAttStr(ir.EncodingKeyword, ek), void 0 !== ik && this._writeAttStr(ir.StandaloneKeyword, ik ? "yes" : "no"), this._w.write(ir.Question, ir.CloseTag), this
      }
      att(kk, ek, ik) {
        const Dk = this._peekContext();
        if (!Dk) throw new Error("att() without open element");
        if (Dk.closed) throw new Error(`att() after start tag closed for <${Dk.name}>`);
        if (this._isXmlnsDecl(kk, ek)) {
          if (ek === ir.Xmlns) Dk.defaultNs = ik, this._registerNamespace(Dk, "", ik), this._writeAttStr(ir.Xmlns, ik);
          else if (kk) this._registerNamespace(Dk, ek, ik), this._writeAttStr(`${kk}:${ek}`, ik);
          else {
            const kk = ek.slice(6);
            this._registerNamespace(Dk, kk, ik), this._writeAttStr(ek, ik)
          }
          return Dk.lastToken = Dr.Attribute, this
        }
        let fk = ek;
        if (kk) {
          fk = `${this._ensurePrefixDeclared(Dk,kk)}:${ek}`
        }
        return Dk.lastToken = Dr.Attribute, this._writeAttStr(fk, ik), this
      }
      ele(kk, ek) {
        const ik = this._peekContext();
        ik && this._closeOpenTagIfNeeded(ik);
        let Dk = ek;
        if (kk) {
          Dk = `${this._lookupPrefix(kk)??kk}:${ek}`
        }
        return this._pushContext(Dk, ++this._d), this._w.write(ir.OpenTag, Dk), this
      }
      text(kk) {
        const ek = this._peekContext();
        if (!ek) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(ek), ek.lastToken = Dr.Text, this._w.write(this._escText(kk)), this
      }
      end() {
        const kk = this._popContext();
        return kk && (this._d--, kk.closed ? this._w.write(ir.OpenTag, ir.Slash, kk.name, ir.CloseTag) : this._w.write(ir.Slash, ir.CloseTag)), this
      }
      _pushContext(kk, ek) {
        const ik = new fr.Context(kk, ek);
        return this._ctxStack.push(ik), ik
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
      _writeAttStr(kk, ek) {
        this._w.write(ir.Space, kk, ir.Equal, ir.Quote, this._escAttr(ek), ir.Quote)
      }
      _lookupPrefix(kk) {
        let ek = this._ctxStack.length - 1;
        if (ek >= 0)
          do {
            const ik = this._ctxStack[ek--],
              Dk = ik.ns2prefix?.get(kk);
            if (Dk) return Dk
          } while (ek >= 0)
      }
      _escText(kk) {
        return kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(kk) {
        return this._escText(kk).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(kk, ek) {
        if (kk) return kk === ir.Xmlns;
        const ik = ek.length,
          Dk = ir.Xmlns.length;
        return ik >= Dk && (ek.startsWith(ir.Xmlns) && (ek.length == Dk || ek[Dk] == ir.Semicolon))
      }
      _registerNamespace(kk, ek, ik) {
        if (ek === ir.Xml || ek === ir.Xmlns) throw new Error(`reserved prefix '${ek}'`);
        const Dk = kk.prefix2ns.get(ek);
        if (Dk && Dk !== ik) throw new Error(`prefix '${ek}' already bound to a different namespace`);
        kk.ns2prefix.get(ik) || kk.ns2prefix.set(ik, ek), kk.prefix2ns.set(ek, ik)
      }
      _allocPrefix(kk) {
        let ek = 1;
        for (;;) {
          const ik = "ns" + ek++;
          if (!kk.prefix2ns.has(ik)) return ik
        }
      }
      _ensurePrefixDeclared(kk, ek) {
        const ik = this._lookupPrefix(ek);
        if (ik) return ik;
        if (kk.closed) throw new Error(`can not declare namespace after start tag closed for <${kk.name}>`);
        const Dk = this._allocPrefix(kk);
        return this._writeAttStr(`${ir.Xmlns}:${Dk}`, ek), this._registerNamespace(kk, Dk, ek), Dk
      }
      _closeOpenTagIfNeeded(kk) {
        kk.closed || (this._w.write(ir.CloseTag), kk.closed = !0)
      }
    }
    fr.Context = class {
      constructor(kk, ek) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = kk, this.depth = ek
      }
    };
    class Sr {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        if (0 === ek.length) return this;
        const Dk = ek.join("");
        return this._chunks.push(Dk), this.count += Dk.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class br {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = kk, this._opts = ek, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        if (0 === ek.length) return this;
        const Dk = ek.join("");
        if (0 === Dk.length) return this;
        this._pending += Dk, this._pendingChars += Dk.length;
        const fk = this._opts.flushChars ?? 65536;
        return this._pendingChars >= fk && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const kk = this._encoder.encode(this._pending);
        return this._sink.push(kk), this.count += kk.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const rr = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      Pr = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var mr, Mr;
    ! function(kk) {
      kk.micron = "micron", kk.millimeter = "millimeter", kk.centimeter = "centimeter", kk.inch = "inch", kk.foot = "foot", kk.meter = "meter"
    }(mr || (mr = {})),
    function(kk) {
      kk.model = "model", kk.solidsupport = "solidsupport", kk.support = "support", kk.surface = "surface", kk.other = "other"
    }(Mr || (Mr = {}));
    const Kr = "http://schemas.openxmlformats.org/package/2006/content-types",
      xr = "http://schemas.openxmlformats.org/package/2006/relationships";
    var nr;
    ! function(kk) {
      kk.Relationships = "application/vnd.openxmlformats-package.relationships+xml", kk.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", kk.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", kk.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", kk.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", kk.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", kk.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", kk.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", kk.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", kk.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", kk.Png = "image/png", kk.Jpeg = "image/jpeg", kk.Tiff = "image/tiff", kk.Xml = "application/xml"
    }(nr || (nr = {}));
    const Ur = "_rels/",
      Hr = "3D/",
      wr = "3dmodel.model",
      lr = ".rels",
      pr = "[Content_Types].xml";
    class yr {
      static IsKnown(kk) {
        return yr.Known.has(kk)
      }
      static IsThreeDimModel(kk) {
        return kk === yr.ThreeDimModel
      }
    }
    yr.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", yr.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", yr.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", yr.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", yr.Known = new Set([yr.ThreeDimModel, yr.Thumbnail, yr.PrintTicket, yr.MustPreserve]);
    let Yr = (() => {
        let kk, ek, ik = [Eb({
            ns: Kr,
            name: "Types"
          })],
          Dk = [];
        ek = class {
          constructor() {
            this.items = []
          }
        };
        return (0, sk.h)(ek, "ThreeMfContentTypes"), (() => {
          const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, sk.d)(null, kk = {
            value: ek
          }, ik, {
            kind: "class",
            name: ek.name,
            metadata: fk
          }, null, Dk), ek = kk.value, fk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fk
          }), (0, sk.e)(ek, Dk)
        })(), ek
      })(),
      Lr = (() => {
        let kk, ek, ik, Dk, fk = [Eb({
            ns: Kr,
            name: "Default"
          })],
          Sk = [],
          bk = [],
          rk = [],
          Pk = [],
          mk = [];
        ek = class {
          constructor(kk, ek) {
            this.ext = (0, sk.e)(this, bk, void 0), this.ct = ((0, sk.e)(this, rk), (0, sk.e)(this, Pk, void 0)), (0, sk.e)(this, mk), this.ext = kk, this.ct = ek
          }
        };
        return (0, sk.h)(ek, "ThreeMfContentType"), (() => {
          const Mk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ik = [ab({
            name: {
              ns: Kr,
              name: "Extension"
            }
          })], Dk = [ab({
            name: {
              ns: Kr,
              name: "ContentType"
            }
          })], (0, sk.d)(null, null, ik, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: kk => "ext" in kk,
              get: kk => kk.ext,
              set: (kk, ek) => {
                kk.ext = ek
              }
            },
            metadata: Mk
          }, bk, rk), (0, sk.d)(null, null, Dk, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: kk => "ct" in kk,
              get: kk => kk.ct,
              set: (kk, ek) => {
                kk.ct = ek
              }
            },
            metadata: Mk
          }, Pk, mk), (0, sk.d)(null, kk = {
            value: ek
          }, fk, {
            kind: "class",
            name: ek.name,
            metadata: Mk
          }, null, Sk), ek = kk.value, Mk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mk
          }), (0, sk.e)(ek, Sk)
        })(), ek
      })(),
      Cr = (() => {
        let kk, ek, ik = [Eb({
            ns: xr,
            name: "Relationships"
          })],
          Dk = [];
        ek = class {
          constructor() {
            this.items = []
          }
        };
        return (0, sk.h)(ek, "ThreeMfRelationships"), (() => {
          const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, sk.d)(null, kk = {
            value: ek
          }, ik, {
            kind: "class",
            name: ek.name,
            metadata: fk
          }, null, Dk), ek = kk.value, fk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fk
          }), (0, sk.e)(ek, Dk)
        })(), ek
      })(),
      Ar = (() => {
        let kk, ek, ik, Dk, fk, Sk = [Eb({
            ns: xr,
            name: "Relationship"
          })],
          bk = [],
          rk = [],
          Pk = [],
          mk = [],
          Mk = [],
          Kk = [],
          xk = [];
        ek = class {
          constructor(kk, ek, ik) {
            this.id = (0, sk.e)(this, rk, void 0), this.type = ((0, sk.e)(this, Pk), (0, sk.e)(this, mk, void 0)), this.target = ((0, sk.e)(this, Mk), (0, sk.e)(this, Kk, void 0)), (0, sk.e)(this, xk), this.id = kk, this.type = ek, this.target = ik
          }
        };
        return (0, sk.h)(ek, "ThreeMfRelationship"), (() => {
          const nk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ik = [ab({
            name: "Id"
          })], Dk = [ab({
            name: "Type"
          })], fk = [ab({
            name: "Target"
          })], (0, sk.d)(null, null, ik, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: kk => "id" in kk,
              get: kk => kk.id,
              set: (kk, ek) => {
                kk.id = ek
              }
            },
            metadata: nk
          }, rk, Pk), (0, sk.d)(null, null, Dk, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: kk => "type" in kk,
              get: kk => kk.type,
              set: (kk, ek) => {
                kk.type = ek
              }
            },
            metadata: nk
          }, mk, Mk), (0, sk.d)(null, null, fk, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: kk => "target" in kk,
              get: kk => kk.target,
              set: (kk, ek) => {
                kk.target = ek
              }
            },
            metadata: nk
          }, Kk, xk), (0, sk.d)(null, kk = {
            value: ek
          }, Sk, {
            kind: "class",
            name: ek.name,
            metadata: nk
          }, null, bk), ek = kk.value, nk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nk
          }), (0, sk.e)(ek, bk)
        })(), ek
      })();
    class jr {
      constructor(kk, ek, ik) {
        this.contentTypes = kk, this.relationships = ek, this.model = ik
      }
    }
    class sr {
      static Zero() {
        return new sr([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(kk) {
        this.values = kk
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class dr {
      constructor(kk) {
        this.o = kk, this._f = new Gb(kk)
      }
      toString(kk) {
        return kk.values.map((kk => this._f.toString(kk))).join(" ")
      }
    }
    let Vr = (() => {
        let kk, ek, ik, Dk, fk, Sk = [Eb({
            ns: rr,
            name: "model"
          })],
          bk = [],
          rk = [],
          Pk = [],
          mk = [],
          Mk = [],
          Kk = [],
          xk = [];
        ek = class {
          constructor() {
            this.unit = (0, sk.e)(this, rk, mr.millimeter), this.requiredextensions = ((0, sk.e)(this, Pk), (0, sk.e)(this, mk, void 0)), this.recommendedextensions = ((0, sk.e)(this, Mk), (0, sk.e)(this, Kk, void 0)), this.metadata = (0, sk.e)(this, xk)
          }
        };
        return (0, sk.h)(ek, "ThreeMfModel"), (() => {
          const nk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ik = [ab({
            name: "unit"
          })], Dk = [ab({
            name: "requiredextensions"
          })], fk = [ab({
            name: "recommendedextensions"
          })], (0, sk.d)(null, null, ik, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: kk => "unit" in kk,
              get: kk => kk.unit,
              set: (kk, ek) => {
                kk.unit = ek
              }
            },
            metadata: nk
          }, rk, Pk), (0, sk.d)(null, null, Dk, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: kk => "requiredextensions" in kk,
              get: kk => kk.requiredextensions,
              set: (kk, ek) => {
                kk.requiredextensions = ek
              }
            },
            metadata: nk
          }, mk, Mk), (0, sk.d)(null, null, fk, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: kk => "recommendedextensions" in kk,
              get: kk => kk.recommendedextensions,
              set: (kk, ek) => {
                kk.recommendedextensions = ek
              }
            },
            metadata: nk
          }, Kk, xk), (0, sk.d)(null, kk = {
            value: ek
          }, Sk, {
            kind: "class",
            name: ek.name,
            metadata: nk
          }, null, bk), ek = kk.value, nk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nk
          })
        })(), ek.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, sk.e)(ek, bk), ek
      })(),
      Fr = (() => {
        let kk, ek, ik, Dk, fk, Sk = [Eb({
            ns: rr,
            name: "meta"
          })],
          bk = [],
          rk = [],
          Pk = [],
          mk = [],
          Mk = [],
          Kk = [],
          xk = [];
        ek = class {
          constructor(kk, ek, ik, Dk) {
            this.name = (0, sk.e)(this, rk, void 0), this.preserve = ((0, sk.e)(this, Pk), (0, sk.e)(this, mk, void 0)), this.type = ((0, sk.e)(this, Mk), (0, sk.e)(this, Kk, void 0)), this.value = (0, sk.e)(this, xk), this.name = kk, this.value = ek, this.preserve = ik, this.type = Dk
          }
        };
        return (0, sk.h)(ek, "ThreeMfMeta"), (() => {
          const nk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ik = [ab({
            name: "name"
          })], Dk = [ab({
            name: "preserve"
          })], fk = [ab({
            name: "type"
          })], (0, sk.d)(null, null, ik, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: kk => "name" in kk,
              get: kk => kk.name,
              set: (kk, ek) => {
                kk.name = ek
              }
            },
            metadata: nk
          }, rk, Pk), (0, sk.d)(null, null, Dk, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: kk => "preserve" in kk,
              get: kk => kk.preserve,
              set: (kk, ek) => {
                kk.preserve = ek
              }
            },
            metadata: nk
          }, mk, Mk), (0, sk.d)(null, null, fk, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: kk => "type" in kk,
              get: kk => kk.type,
              set: (kk, ek) => {
                kk.type = ek
              }
            },
            metadata: nk
          }, Kk, xk), (0, sk.d)(null, kk = {
            value: ek
          }, Sk, {
            kind: "class",
            name: ek.name,
            metadata: nk
          }, null, bk), ek = kk.value, nk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nk
          }), (0, sk.e)(ek, bk)
        })(), ek
      })(),
      ur = (() => {
        let kk, ek, ik = [Eb({
            ns: rr,
            name: "metadatagroup"
          })],
          Dk = [];
        ek = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, sk.h)(ek, "ThreeMfMetadataGroup"), (() => {
          const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, sk.d)(null, kk = {
            value: ek
          }, ik, {
            kind: "class",
            name: ek.name,
            metadata: fk
          }, null, Dk), ek = kk.value, fk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fk
          }), (0, sk.e)(ek, Dk)
        })(), ek
      })(),
      qr = (() => {
        let kk, ek, ik = [Eb({
            ns: rr,
            name: "resources"
          })],
          Dk = [];
        ek = class {
          constructor() {
            this.object = []
          }
        };
        return (0, sk.h)(ek, "ThreeMfResources"), (() => {
          const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, sk.d)(null, kk = {
            value: ek
          }, ik, {
            kind: "class",
            name: ek.name,
            metadata: fk
          }, null, Dk), ek = kk.value, fk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fk
          }), (0, sk.e)(ek, Dk)
        })(), ek
      })(),
      Ir = (() => {
        let kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk = [Eb({
            ns: rr,
            name: "object"
          })],
          Mk = [],
          Kk = [],
          xk = [],
          nk = [],
          Uk = [],
          Hk = [],
          wk = [],
          lk = [],
          pk = [],
          yk = [],
          Yk = [],
          Lk = [],
          Ck = [],
          Ak = [],
          jk = [];
        ek = class {
          constructor(kk) {
            let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mr.model;
            this.id = (0, sk.e)(this, Kk, void 0), this.type = ((0, sk.e)(this, xk), (0, sk.e)(this, nk, void 0)), this.thumbnail = ((0, sk.e)(this, Uk), (0, sk.e)(this, Hk, void 0)), this.partnumber = ((0, sk.e)(this, wk), (0, sk.e)(this, lk, void 0)), this.name = ((0, sk.e)(this, pk), (0, sk.e)(this, yk, void 0)), this.pid = ((0, sk.e)(this, Yk), (0, sk.e)(this, Lk, void 0)), this.pindex = ((0, sk.e)(this, Ck), (0, sk.e)(this, Ak, void 0)), this.metadatagroup = (0, sk.e)(this, jk), this.id = kk, this.type = ek
          }
        };
        return (0, sk.h)(ek, "ThreeMfObject"), (() => {
          const dk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ik = [ab({
            name: "id"
          })], Dk = [ab({
            name: "type"
          })], fk = [ab({
            name: "thumbnail"
          })], Sk = [ab({
            name: "partnumber"
          })], bk = [ab({
            name: "name"
          })], rk = [ab({
            name: "pid"
          })], Pk = [ab({
            name: "pindex"
          })], (0, sk.d)(null, null, ik, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: kk => "id" in kk,
              get: kk => kk.id,
              set: (kk, ek) => {
                kk.id = ek
              }
            },
            metadata: dk
          }, Kk, xk), (0, sk.d)(null, null, Dk, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: kk => "type" in kk,
              get: kk => kk.type,
              set: (kk, ek) => {
                kk.type = ek
              }
            },
            metadata: dk
          }, nk, Uk), (0, sk.d)(null, null, fk, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: kk => "thumbnail" in kk,
              get: kk => kk.thumbnail,
              set: (kk, ek) => {
                kk.thumbnail = ek
              }
            },
            metadata: dk
          }, Hk, wk), (0, sk.d)(null, null, Sk, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: kk => "partnumber" in kk,
              get: kk => kk.partnumber,
              set: (kk, ek) => {
                kk.partnumber = ek
              }
            },
            metadata: dk
          }, lk, pk), (0, sk.d)(null, null, bk, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: kk => "name" in kk,
              get: kk => kk.name,
              set: (kk, ek) => {
                kk.name = ek
              }
            },
            metadata: dk
          }, yk, Yk), (0, sk.d)(null, null, rk, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: kk => "pid" in kk,
              get: kk => kk.pid,
              set: (kk, ek) => {
                kk.pid = ek
              }
            },
            metadata: dk
          }, Lk, Ck), (0, sk.d)(null, null, Pk, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: kk => "pindex" in kk,
              get: kk => kk.pindex,
              set: (kk, ek) => {
                kk.pindex = ek
              }
            },
            metadata: dk
          }, Ak, jk), (0, sk.d)(null, kk = {
            value: ek
          }, mk, {
            kind: "class",
            name: ek.name,
            metadata: dk
          }, null, Mk), ek = kk.value, dk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dk
          }), (0, sk.e)(ek, Mk)
        })(), ek
      })(),
      zr = (() => {
        let kk, ek, ik = [Eb({
            ns: rr,
            name: "mesh"
          })],
          Dk = [];
        ek = class {
          constructor(kk, ek) {
            this.vertices = kk ?? new Qr, this.triangles = ek ?? new Er
          }
        };
        return (0, sk.h)(ek, "ThreeMfMesh"), (() => {
          const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, sk.d)(null, kk = {
            value: ek
          }, ik, {
            kind: "class",
            name: ek.name,
            metadata: fk
          }, null, Dk), ek = kk.value, fk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fk
          }), (0, sk.e)(ek, Dk)
        })(), ek
      })(),
      Qr = (() => {
        let kk, ek, ik = [Eb({
            ns: rr,
            name: "vertices"
          })],
          Dk = [];
        ek = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, sk.h)(ek, "ThreeMfVertices"), (() => {
          const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, sk.d)(null, kk = {
            value: ek
          }, ik, {
            kind: "class",
            name: ek.name,
            metadata: fk
          }, null, Dk), ek = kk.value, fk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fk
          }), (0, sk.e)(ek, Dk)
        })(), ek
      })(),
      vr = (() => {
        let kk, ek, ik, Dk, fk, Sk = [Eb({
            ns: rr,
            name: "vertex"
          })],
          bk = [],
          rk = [],
          Pk = [],
          mk = [],
          Mk = [],
          Kk = [],
          xk = [];
        ek = class {
          constructor() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, sk.e)(this, rk, void 0), this.y = ((0, sk.e)(this, Pk), (0, sk.e)(this, mk, void 0)), this.z = ((0, sk.e)(this, Mk), (0, sk.e)(this, Kk, void 0)), (0, sk.e)(this, xk), this.x = kk, this.y = ek, this.z = ik
          }
        };
        return (0, sk.h)(ek, "ThreeMfVertex"), (() => {
          const nk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ik = [ab({
            name: "x"
          })], Dk = [ab({
            name: "y"
          })], fk = [ab({
            name: "z"
          })], (0, sk.d)(null, null, ik, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: kk => "x" in kk,
              get: kk => kk.x,
              set: (kk, ek) => {
                kk.x = ek
              }
            },
            metadata: nk
          }, rk, Pk), (0, sk.d)(null, null, Dk, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: kk => "y" in kk,
              get: kk => kk.y,
              set: (kk, ek) => {
                kk.y = ek
              }
            },
            metadata: nk
          }, mk, Mk), (0, sk.d)(null, null, fk, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: kk => "z" in kk,
              get: kk => kk.z,
              set: (kk, ek) => {
                kk.z = ek
              }
            },
            metadata: nk
          }, Kk, xk), (0, sk.d)(null, kk = {
            value: ek
          }, Sk, {
            kind: "class",
            name: ek.name,
            metadata: nk
          }, null, bk), ek = kk.value, nk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nk
          }), (0, sk.e)(ek, bk)
        })(), ek
      })(),
      Er = (() => {
        let kk, ek, ik = [Eb({
            ns: rr,
            name: "triangles"
          })],
          Dk = [];
        ek = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, sk.h)(ek, "ThreeMfTriangles"), (() => {
          const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, sk.d)(null, kk = {
            value: ek
          }, ik, {
            kind: "class",
            name: ek.name,
            metadata: fk
          }, null, Dk), ek = kk.value, fk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fk
          }), (0, sk.e)(ek, Dk)
        })(), ek
      })(),
      hr = (() => {
        let kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk = [Eb({
            ns: rr,
            name: "triangle"
          })],
          Mk = [],
          Kk = [],
          xk = [],
          nk = [],
          Uk = [],
          Hk = [],
          wk = [],
          lk = [],
          pk = [],
          yk = [],
          Yk = [],
          Lk = [],
          Ck = [],
          Ak = [],
          jk = [];
        ek = class {
          constructor(kk, ek, ik) {
            this.v1 = (0, sk.e)(this, Kk, void 0), this.v2 = ((0, sk.e)(this, xk), (0, sk.e)(this, nk, void 0)), this.v3 = ((0, sk.e)(this, Uk), (0, sk.e)(this, Hk, void 0)), this.p1 = ((0, sk.e)(this, wk), (0, sk.e)(this, lk, void 0)), this.p2 = ((0, sk.e)(this, pk), (0, sk.e)(this, yk, void 0)), this.p3 = ((0, sk.e)(this, Yk), (0, sk.e)(this, Lk, void 0)), this.pid = ((0, sk.e)(this, Ck), (0, sk.e)(this, Ak, void 0)), (0, sk.e)(this, jk), this.v1 = kk, this.v2 = ek, this.v3 = ik
          }
        };
        return (0, sk.h)(ek, "ThreeMfTriangle"), (() => {
          const dk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ik = [ab({
            name: "v1"
          })], Dk = [ab({
            name: "v2"
          })], fk = [ab({
            name: "v3"
          })], Sk = [ab({
            name: "p1"
          })], bk = [ab({
            name: "p2"
          })], rk = [ab({
            name: "p3"
          })], Pk = [ab({
            name: "pid"
          })], (0, sk.d)(null, null, ik, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: kk => "v1" in kk,
              get: kk => kk.v1,
              set: (kk, ek) => {
                kk.v1 = ek
              }
            },
            metadata: dk
          }, Kk, xk), (0, sk.d)(null, null, Dk, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: kk => "v2" in kk,
              get: kk => kk.v2,
              set: (kk, ek) => {
                kk.v2 = ek
              }
            },
            metadata: dk
          }, nk, Uk), (0, sk.d)(null, null, fk, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: kk => "v3" in kk,
              get: kk => kk.v3,
              set: (kk, ek) => {
                kk.v3 = ek
              }
            },
            metadata: dk
          }, Hk, wk), (0, sk.d)(null, null, Sk, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: kk => "p1" in kk,
              get: kk => kk.p1,
              set: (kk, ek) => {
                kk.p1 = ek
              }
            },
            metadata: dk
          }, lk, pk), (0, sk.d)(null, null, bk, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: kk => "p2" in kk,
              get: kk => kk.p2,
              set: (kk, ek) => {
                kk.p2 = ek
              }
            },
            metadata: dk
          }, yk, Yk), (0, sk.d)(null, null, rk, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: kk => "p3" in kk,
              get: kk => kk.p3,
              set: (kk, ek) => {
                kk.p3 = ek
              }
            },
            metadata: dk
          }, Lk, Ck), (0, sk.d)(null, null, Pk, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: kk => "pid" in kk,
              get: kk => kk.pid,
              set: (kk, ek) => {
                kk.pid = ek
              }
            },
            metadata: dk
          }, Ak, jk), (0, sk.d)(null, kk = {
            value: ek
          }, mk, {
            kind: "class",
            name: ek.name,
            metadata: dk
          }, null, Mk), ek = kk.value, dk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dk
          }), (0, sk.e)(ek, Mk)
        })(), ek
      })(),
      ar = (() => {
        let kk, ek, ik = [Eb({
            ns: rr,
            name: "components"
          })],
          Dk = [];
        ek = class {
          constructor() {
            this.component = []
          }
        };
        return (0, sk.h)(ek, "ThreeMfComponents"), (() => {
          const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, sk.d)(null, kk = {
            value: ek
          }, ik, {
            kind: "class",
            name: ek.name,
            metadata: fk
          }, null, Dk), ek = kk.value, fk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fk
          }), (0, sk.e)(ek, Dk)
        })(), ek
      })(),
      Wr = (() => {
        let kk, ek, ik, Dk, fk = [Eb({
            ns: rr,
            name: "component"
          })],
          Sk = [],
          bk = [],
          rk = [],
          Pk = [],
          mk = [];
        ek = class {
          constructor(kk, ek) {
            this.objectid = (0, sk.e)(this, bk, void 0), this.transform = ((0, sk.e)(this, rk), (0, sk.e)(this, Pk, void 0)), (0, sk.e)(this, mk), this.objectid = kk, this.transform = ek
          }
        };
        return (0, sk.h)(ek, "ThreeMfComponent"), (() => {
          const Mk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ik = [ab({
            name: "objectid"
          })], Dk = [ab({
            name: "transform",
            formatter: dr
          })], (0, sk.d)(null, null, ik, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: kk => "objectid" in kk,
              get: kk => kk.objectid,
              set: (kk, ek) => {
                kk.objectid = ek
              }
            },
            metadata: Mk
          }, bk, rk), (0, sk.d)(null, null, Dk, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: kk => "transform" in kk,
              get: kk => kk.transform,
              set: (kk, ek) => {
                kk.transform = ek
              }
            },
            metadata: Mk
          }, Pk, mk), (0, sk.d)(null, kk = {
            value: ek
          }, fk, {
            kind: "class",
            name: ek.name,
            metadata: Mk
          }, null, Sk), ek = kk.value, Mk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mk
          }), (0, sk.e)(ek, Sk)
        })(), ek
      })(),
      tr = (() => {
        let kk, ek, ik, Dk = [Eb({
            ns: rr,
            name: "basematerials"
          })],
          fk = [],
          Sk = [],
          bk = [];
        ek = class {
          constructor(kk) {
            this.id = (0, sk.e)(this, Sk, void 0), this.base = ((0, sk.e)(this, bk), []), this.id = kk
          }
        };
        return (0, sk.h)(ek, "ThreeMfBaseMaterials"), (() => {
          const rk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ik = [ab({
            name: "id"
          })], (0, sk.d)(null, null, ik, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: kk => "id" in kk,
              get: kk => kk.id,
              set: (kk, ek) => {
                kk.id = ek
              }
            },
            metadata: rk
          }, Sk, bk), (0, sk.d)(null, kk = {
            value: ek
          }, Dk, {
            kind: "class",
            name: ek.name,
            metadata: rk
          }, null, fk), ek = kk.value, rk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rk
          }), (0, sk.e)(ek, fk)
        })(), ek
      })(),
      Xr = (() => {
        let kk, ek, ik, Dk, fk = [Eb({
            ns: rr,
            name: "base"
          })],
          Sk = [],
          bk = [],
          rk = [],
          Pk = [],
          mk = [];
        ek = class {
          constructor(kk, ek) {
            this.name = (0, sk.e)(this, bk, void 0), this.displaycolor = ((0, sk.e)(this, rk), (0, sk.e)(this, Pk, void 0)), (0, sk.e)(this, mk), this.name = kk, this.displaycolor = ek
          }
        };
        return (0, sk.h)(ek, "ThreeMfBase"), (() => {
          const Mk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ik = [ab({
            name: "name"
          })], Dk = [ab({
            name: "displaycolor"
          })], (0, sk.d)(null, null, ik, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: kk => "name" in kk,
              get: kk => kk.name,
              set: (kk, ek) => {
                kk.name = ek
              }
            },
            metadata: Mk
          }, bk, rk), (0, sk.d)(null, null, Dk, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: kk => "displaycolor" in kk,
              get: kk => kk.displaycolor,
              set: (kk, ek) => {
                kk.displaycolor = ek
              }
            },
            metadata: Mk
          }, Pk, mk), (0, sk.d)(null, kk = {
            value: ek
          }, fk, {
            kind: "class",
            name: ek.name,
            metadata: Mk
          }, null, Sk), ek = kk.value, Mk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mk
          }), (0, sk.e)(ek, Sk)
        })(), ek
      })(),
      Br = (() => {
        let kk, ek, ik = [Eb({
            ns: rr,
            name: "build"
          })],
          Dk = [];
        ek = class {
          constructor() {
            this.item = []
          }
        };
        return (0, sk.h)(ek, "ThreeMfBuild"), (() => {
          const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, sk.d)(null, kk = {
            value: ek
          }, ik, {
            kind: "class",
            name: ek.name,
            metadata: fk
          }, null, Dk), ek = kk.value, fk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fk
          }), (0, sk.e)(ek, Dk)
        })(), ek
      })(),
      cr = (() => {
        let kk, ek, ik, Dk, fk, Sk = [Eb({
            ns: rr,
            name: "item"
          })],
          bk = [],
          rk = [],
          Pk = [],
          mk = [],
          Mk = [],
          Kk = [],
          xk = [];
        ek = class {
          constructor(kk, ek, ik) {
            this.objectid = (0, sk.e)(this, rk, void 0), this.transform = ((0, sk.e)(this, Pk), (0, sk.e)(this, mk, void 0)), this.partnumber = ((0, sk.e)(this, Mk), (0, sk.e)(this, Kk, void 0)), this.metadatagroup = (0, sk.e)(this, xk), this.objectid = kk, this.transform = ek, this.partnumber = ik
          }
        };
        return (0, sk.h)(ek, "ThreeMfItem"), (() => {
          const nk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ik = [ab({
            name: "objectid"
          })], Dk = [ab({
            name: "transform",
            formatter: dr
          })], fk = [ab({
            name: "partnumber"
          })], (0, sk.d)(null, null, ik, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: kk => "objectid" in kk,
              get: kk => kk.objectid,
              set: (kk, ek) => {
                kk.objectid = ek
              }
            },
            metadata: nk
          }, rk, Pk), (0, sk.d)(null, null, Dk, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: kk => "transform" in kk,
              get: kk => kk.transform,
              set: (kk, ek) => {
                kk.transform = ek
              }
            },
            metadata: nk
          }, mk, Mk), (0, sk.d)(null, null, fk, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: kk => "partnumber" in kk,
              get: kk => kk.partnumber,
              set: (kk, ek) => {
                kk.partnumber = ek
              }
            },
            metadata: nk
          }, Kk, xk), (0, sk.d)(null, kk = {
            value: ek
          }, Sk, {
            kind: "class",
            name: ek.name,
            metadata: nk
          }, null, bk), ek = kk.value, nk && Object.defineProperty(ek, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nk
          }), (0, sk.e)(ek, bk)
        })(), ek
      })();
    class Tr {
      constructor(kk, ek) {
        this._object = new Ir(kk, ek)
      }
      withName(kk) {
        return this._object.name = kk, this
      }
      withThumbnail(kk) {
        return this._object.thumbnail = kk, this
      }
      withProperty(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = kk, this._object.id = ek, this
      }
      build() {
        return this._object
      }
      reset(kk, ek) {
        this._object = new Ir(kk, ek)
      }
    }
    class or extends Tr {
      constructor(kk) {
        super(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mr.model), this._object.content = new ar
      }
      withComponent(kk, ek) {
        return this._object.content.component.push(new Wr(kk, ek)), this
      }
    }
    class Zr extends Tr {
      constructor(kk) {
        super(kk, Mr.model)
      }
      withPostProcessHandlers(kk, ek) {
        return this._vh = kk, this._th = ek, this
      }
      withData(kk) {
        return this._object.content = this._buildMesh(kk), this
      }
      withMaterial(kk, ek) {
        return this._object.pid = kk, this._object.pindex = ek, this
      }
      _buildMesh(kk) {
        const ek = this._buildVertices(kk.positions),
          ik = this._buildTriangle(kk.indices);
        return new zr(ek, ik)
      }
      _buildVertices(kk) {
        const ek = new Qr;
        if (kk)
          for (let ik = 0; ik < kk.length;) {
            const Dk = kk[ik++],
              fk = kk[ik++],
              Sk = kk[ik++];
            let bk = new vr(Dk, fk, Sk);
            this._vh && (bk = this._vh(bk)), ek.vertex.push(bk)
          }
        return ek
      }
      _buildTriangle(kk) {
        const ek = new Er;
        if (kk)
          for (let ik = 0; ik < kk.length;) {
            const Dk = kk[ik++],
              fk = kk[ik++],
              Sk = kk[ik++];
            let bk = new hr(Dk, fk, Sk);
            this._th && (bk = this._th(bk)), ek.triangle.push(bk)
          }
        return ek
      }
    }
    class Or {
      constructor(kk) {
        this._m = new tr(kk)
      }
      withColor(kk, ek) {
        this._m.base = this._m.base ?? [];
        let ik = this._m.base.find((ek => ek.name.toLowerCase() === kk.toLowerCase()));
        return ik ? (ik.displaycolor = this._rgbaToHex(ek), this) : (ik = new Xr(kk, this._rgbaToHex(ek)), this._m.base.push(ik), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(kk) {
        const ek = kk => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(kk, 1 / 2.2)))),
          ik = ek(kk.r).toString(16).padStart(2, "0").toUpperCase(),
          Dk = ek(kk.g).toString(16).padStart(2, "0").toUpperCase(),
          fk = ek(kk.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof kk.a) {
          return `#${ik}${Dk}${fk}${Math.round(Math.min(255,Math.max(0,255*kk.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${ik}${Dk}${fk}`
      }
    }
    class gr {
      constructor() {
        this._model = new Vr, this._objects = new Map
      }
      withMetaData(kk, ek, ik, Dk) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Fr(kk, ek, ik, Dk)), this
      }
      withMaterial(kk) {
        return kk instanceof Or && (kk = kk.build()), kk && (this._model.resources = this._model.resources ?? new qr, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(kk)), this
      }
      withMesh(kk) {
        return kk instanceof Zr && (kk = kk.build()), this._model.resources = this._model.resources ?? new qr, this._model.resources.object.push(kk), this
      }
      withComponents(kk) {
        return kk instanceof or && (kk = kk.build()), this._model.resources = this._model.resources ?? new qr, this._model.resources.object.push(kk), this
      }
      withBuild(kk, ek, ik) {
        return this._model.build = this._model.build ?? new Br, this._model.build.item?.push(new cr(kk, ek, ik)), this
      }
      withUnit(kk) {
        return this._model.unit = kk, this
      }
      reset() {
        return this._model = new Vr, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    gr.KnownMetaSet = new Set(Vr.KnownMeta.map((kk => kk.toLowerCase())));
    class Gr {
      withContentType(kk) {
        this._cts || (this._cts = new Yr);
        const ek = this._cts.items;
        return ek.some((ek => ek.ext === kk.ext && ek.ct === kk.ct)) || ek.push(kk), this
      }
      withRelationship(kk) {
        this._rs || (this._rs = new Cr);
        const ek = this._rs.items;
        return ek.some((ek => ek.id === kk.id)) || ek.push(kk), this.withContentType(new Lr("rels", nr.Relationships)), this
      }
      withModel(kk) {
        return kk instanceof gr && (kk = kk.build()), this._m = kk, this.withContentType(new Lr("model", nr.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const kk = `${Hr}${wr}`;
        if (!this._rs) {
          const ek = `/${kk}`;
          this.withRelationship(new Ar("rel0", yr.ThreeDimModel, ek))
        }
        return new jr(this._cts, this._rs, this._m)
      }
    }
    class Nr {
      constructor(kk) {
        this._o = kk
      }
      get options() {
        return this._o
      }
      async serializeAsync(kk) {
        const ek = await this.ensureZipLibReadyAsync();
        if (!ek) return;
        const ik = ek.Zip,
          Dk = ek.ZipDeflate;
        if (!ik || !Dk) throw new Error("fflate Zip / ZipDeflate not available");
        const fk = function(kk, ek, ik) {
          const fk = new Dk(ek, {
            level: 6
          });
          kk.add(fk);
          const Sk = function(kk) {
              return {
                push: (ek, ik) => kk.push(ek, ik)
              }
            }(fk),
            bk = new br(Sk),
            rk = new fr(bk).dec("1.0", "UTF-8");
          new er(rk).serialize(ik), bk.finish()
        };
        for (var Sk = arguments.length, bk = new Array(Sk > 1 ? Sk - 1 : 0), rk = 1; rk < Sk; rk++) bk[rk - 1] = arguments[rk];
        const Pk = this.toDocument(...bk);
        if (!Pk) return;
        const mk = new ik(kk);
        fk(mk, pr, Pk.contentTypes), fk(mk, `${Ur}${lr}`, Pk.relationships), fk(mk, `${Hr}${wr}`, Pk.model), mk.end()
      }
      toDocument() {
        const kk = (new gr).withUnit(this._o?.unit ?? mr.millimeter);
        if (this.options.metadata)
          for (const fk in this.options.metadata) kk.withMetaData(fk, this.options.metadata[fk]);
        for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
        return (new Gr).withModel(this.toModel(kk, ...ik)).build()
      }
    }
    class Rr {
      static async SerializeToMemoryAsync(kk) {
        const ek = new Array;
        let ik = 0;
        for (var Dk = arguments.length, fk = new Array(Dk > 1 ? Dk - 1 : 0), Sk = 1; Sk < Dk; Sk++) fk[Sk - 1] = arguments[Sk];
        if (await kk.serializeAsync((function(kk, Dk, fk) {
            ek.push(Dk), ik += Dk.length
          }), ...fk), !ik) return;
        const bk = new Uint8Array(ik);
        let rk = 0;
        for (const Pk of ek) bk.set(Pk, rk), rk += Pk.length;
        return bk
      }
    }
    class Jr {}
    Jr.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class kP {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = kk, this._to = ek, this._step = ik, this._i = kk
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const kk = this._i;
        return this._i += this._step, kk
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class eP extends Nr {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...eP.DefaultOptions,
          ...kk
        })
      }
      toModel(kk) {
        for (var ek = arguments.length, ik = new Array(ek > 1 ? ek - 1 : 0), Dk = 1; Dk < ek; Dk++) ik[Dk - 1] = arguments[Dk];
        ik = ik.filter((kk => kk instanceof xD.d || kk instanceof nk.e));
        const fk = new kP,
          Sk = kk,
          bk = new Map,
          rk = this.options.exportInstances ? [] : null;
        for (let Pk = 0; Pk < ik.length; Pk++) {
          const kk = ik[Pk];
          if (kk instanceof nk.e) {
            rk?.push(kk);
            continue
          }
          const ek = kk.name || `mesh${Pk}`,
            Dk = kk.getWorldMatrix(),
            mk = this._handleBabylonTo3mfMatrixTransformToRef(Dk, sr.Zero()),
            Mk = kk.TY;
          if (void 0 === Mk) continue;
          const Kk = 1 == Mk.length;
          for (let ik = 0; ik < Mk.length; ik++) {
            const Dk = Mk[ik],
              rk = this._extractSubMesh(kk, Dk);
            if (rk) {
              const kk = Kk ? `${ek}` : `${ek}_${ik}`,
                Pk = new Zr(fk.next()).withData(rk).withName(kk).build();
              Sk.withMesh(Pk), Sk.withBuild(Pk.id, mk), bk.set(Dk, Pk)
            }
          }
        }
        if (rk && rk.length) {
          const kk = this._groupBy(rk, (kk => kk.aDk));
          for (const [ek, ik] of Array.from(kk.entries()))
            if (ik && ik.length)
              for (let kk = 0; kk < ik.length; kk++) {
                const Dk = ik[kk].getWorldMatrix(),
                  fk = ek.TY;
                for (let kk = 0; kk < fk.length; kk++) {
                  const ek = fk[kk],
                    ik = bk.get(ek);
                  ik && Sk.withBuild(ik.id, this._handleBabylonTo3mfMatrixTransformToRef(Dk, sr.Zero()))
                }
              }
        }
        return Sk.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const kk = globalThis;
          return kk.fflate || await fk.Tools.LoadScriptAsync(Jr.FFLATEUrl), kk.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(kk, ek) {
        const ik = kk.oik();
        if (!ik) return;
        const Dk = kk.getVerticesData(eP._PositionKind);
        if (!Dk) return;
        if (0 == ek.indexStart && ek.indexCount == ik.length) return {
          positions: Dk,
          indices: ik
        };
        const fk = ek.indexStart,
          Sk = new Map,
          bk = [],
          rk = new Uint32Array(ek.indexCount);
        for (let Pk = 0; Pk < ek.indexCount; Pk++) {
          const kk = ik[fk + Pk];
          let ek = Sk.get(kk);
          if (void 0 === ek) {
            ek = Sk.size, Sk.set(kk, ek);
            const ik = 3 * kk;
            bk.push(Dk[ik], Dk[ik + 1], Dk[ik + 2])
          }
          rk[Pk] = ek
        }
        return {
          positions: new Float32Array(bk),
          indices: rk
        }
      }
      _groupBy(kk, ek) {
        const ik = new Map;
        for (const Dk of kk) {
          const kk = ek(Dk),
            fk = ik.get(kk);
          fk ? fk.push(Dk) : ik.set(kk, [Dk])
        }
        return ik
      }
      _handleBabylonTo3mfMatrixTransformToRef(kk, ek) {
        const ik = kk.multiplyToRef(eP._R_BJS_TO_3MF, ak.b.Zero()).m;
        return ek.values = [ik[0], ik[1], ik[2], ik[4], ik[5], ik[6], ik[8], ik[9], ik[10], ik[12], ik[13], ik[14]], ek
      }
    }
    eP.DefaultOptions = {
      unit: mr.meter,
      exportInstances: !1
    }, eP._PositionKind = "position", eP._R_BJS_TO_3MF = ak.b.RotationX(Math.PI / 2).multiply(ak.b.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);