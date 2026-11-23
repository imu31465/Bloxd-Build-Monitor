export const id = 230;
export const ids = [230, 235];
export const modules = {
  41832: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(41761),
      Tk = Ik(39994);
    let ik = !1;

    function yk() {
      ik || (ik = !0, Tk.d.prototype._sphericalPolynomialTargetSize = 0, Tk.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Tk.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Xk.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((kk => {
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
  37327: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      Color3: () => Xk.e,
      b: () => Xk.h
    });
    var Xk = Ik(37331);
    (0, Xk.i)()
  },
  37780: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk
    });
    var Xk = Ik(37785);
    class Tk {
      static GetPlanes(kk) {
        const Fk = [];
        for (let Ik = 0; Ik < 6; Ik++) Fk.push(new Xk.e(0, 0, 0, 0));
        return Tk.GetPlanesToRef(kk, Fk), Fk
      }
      static GetNearPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[2], Fk.normal.y = Ik[7] + Ik[6], Fk.normal.z = Ik[11] + Ik[10], Fk.d = Ik[15] + Ik[14], Fk.normalize()
      }
      static GetFarPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[2], Fk.normal.y = Ik[7] - Ik[6], Fk.normal.z = Ik[11] - Ik[10], Fk.d = Ik[15] - Ik[14], Fk.normalize()
      }
      static GetLeftPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[0], Fk.normal.y = Ik[7] + Ik[4], Fk.normal.z = Ik[11] + Ik[8], Fk.d = Ik[15] + Ik[12], Fk.normalize()
      }
      static GetRightPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[0], Fk.normal.y = Ik[7] - Ik[4], Fk.normal.z = Ik[11] - Ik[8], Fk.d = Ik[15] - Ik[12], Fk.normalize()
      }
      static GetTopPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[1], Fk.normal.y = Ik[7] - Ik[5], Fk.normal.z = Ik[11] - Ik[9], Fk.d = Ik[15] - Ik[13], Fk.normalize()
      }
      static GetBottomPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[1], Fk.normal.y = Ik[7] + Ik[5], Fk.normal.z = Ik[11] + Ik[9], Fk.d = Ik[15] + Ik[13], Fk.normalize()
      }
      static GetPlanesToRef(kk, Fk) {
        Tk.GetNearPlaneToRef(kk, Fk[0]), Tk.GetFarPlaneToRef(kk, Fk[1]), Tk.GetLeftPlaneToRef(kk, Fk[2]), Tk.GetRightPlaneToRef(kk, Fk[3]), Tk.GetTopPlaneToRef(kk, Fk[4]), Tk.GetBottomPlaneToRef(kk, Fk[5])
      }
      static IsPointInFrustum(kk, Fk) {
        for (let Ik = 0; Ik < 6; Ik++)
          if (Fk[Ik].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37785: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk
    });
    var Xk = Ik(37153);
    class Tk {
      constructor(kk, Fk, Ik, Tk) {
        this.normal = new Xk.t(kk, Fk, Ik), this.d = Tk
      }
      iXk() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Tk(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let Fk = 0;
        return 0 !== kk && (Fk = 1 / kk), this.normal.x *= Fk, this.normal.y *= Fk, this.normal.z *= Fk, this.d *= Fk, this
      }
      transform(kk) {
        const Fk = Tk._TmpMatrix;
        kk.invertToRef(Fk);
        const Ik = Fk.m,
          Xk = this.normal.x,
          ik = this.normal.y,
          yk = this.normal.z,
          lk = this.d,
          ak = Xk * Ik[0] + ik * Ik[1] + yk * Ik[2] + lk * Ik[3],
          qk = Xk * Ik[4] + ik * Ik[5] + yk * Ik[6] + lk * Ik[7],
          Lk = Xk * Ik[8] + ik * Ik[9] + yk * Ik[10] + lk * Ik[11],
          tk = Xk * Ik[12] + ik * Ik[13] + yk * Ik[14] + lk * Ik[15];
        return new Tk(ak, qk, Lk, tk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, Fk, Ik) {
        const Xk = Fk.x - kk.x,
          Tk = Fk.y - kk.y,
          ik = Fk.z - kk.z,
          yk = Ik.x - kk.x,
          lk = Ik.y - kk.y,
          ak = Ik.z - kk.z,
          qk = Tk * ak - ik * lk,
          Lk = ik * yk - Xk * ak,
          tk = Xk * lk - Tk * yk,
          Zk = Math.sqrt(qk * qk + Lk * Lk + tk * tk);
        let jk;
        return jk = 0 !== Zk ? 1 / Zk : 0, this.normal.x = qk * jk, this.normal.y = Lk * jk, this.normal.z = tk * jk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, Fk) {
        return Xk.t.Dot(this.normal, kk) <= Fk
      }
      signedDistanceTo(kk) {
        return Xk.t.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new Tk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, Fk, Ik) {
        const Xk = new Tk(0, 0, 0, 0);
        return Xk.copyFromPoints(kk, Fk, Ik), Xk
      }
      static FromPositionAndNormal(kk, Fk) {
        const Ik = new Tk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, Fk, Ik)
      }
      static FromPositionAndNormalToRef(kk, Fk, Ik) {
        return Ik.normal.kS(Fk), Ik.normal.normalize(), Ik.d = -kk.dot(Ik.normal), Ik
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, Fk, Ik) {
        const Tk = -(Fk.x * kk.x + Fk.y * kk.y + Fk.z * kk.z);
        return Xk.t.Dot(Ik, Fk) + Tk
      }
    }
    Tk._TmpMatrix = Xk.c.Identity()
  },
  37144: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      Matrix: () => Xk.c,
      Quaternion: () => Xk.f,
      RegisterMathVector: () => Xk.h,
      TmpVectors: () => Xk.l,
      Vector2: () => Xk.p,
      Ge: () => Xk.t,
      Vector4: () => Xk.u
    });
    var Xk = Ik(37153);
    (0, Xk.h)()
  },
  38099: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk
    });
    class Xk {
      constructor(kk, Fk, Ik, Xk) {
        this.x = kk, this.y = Fk, this.width = Ik, this.height = Xk
      }
      toGlobal(kk, Fk) {
        return new Xk(this.x * kk, this.y * Fk, this.width * kk, this.height * Fk)
      }
      toGlobalToRef(kk, Fk, Ik) {
        return Ik.x = this.x * kk, Ik.y = this.y * Fk, Ik.width = this.width * kk, Ik.height = this.height * Fk, this
      }
      clone() {
        return new Xk(this.x, this.y, this.width, this.height)
      }
    }
  },
  41761: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => qk
    });
    var Xk = Ik(37153),
      Tk = Ik(37189),
      ik = Ik(39989),
      yk = Ik(37158),
      lk = Ik(37331);
    class ak {
      constructor(kk, Fk, Ik, Xk) {
        this.name = kk, this.worldAxisForNormal = Fk, this.worldAxisForFileX = Ik, this.worldAxisForFileY = Xk
      }
    }
    class qk {
      static _NearestPow2Floor(kk) {
        return kk <= 1 ? 1 : 1 << Math.floor(Math.log2(kk))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(kk) {
        if (!kk.isCube) return null;
        kk.mG()?.Oe().flushFramebuffer();
        const Fk = kk.getSize().width,
          Ik = kk._sphericalPolynomialTargetSize,
          Xk = Ik > 0 ? this._NearestPow2Floor(Ik) : 0,
          Tk = !kk.noMipmap && !0 === kk._texture?.generateMipMaps,
          ik = Xk > 0 && Xk < Fk && Tk,
          yk = ik ? Math.max(0, Math.round(Math.log2(Fk / Xk))) : 0,
          lk = ik ? Math.max(1, Math.floor(Fk / Math.pow(2, yk))) : Fk,
          ak = kk.readPixels(0, yk, void 0, !1),
          qk = kk.readPixels(1, yk, void 0, !1);
        let Lk, tk;
        kk.isRenderTarget ? (Lk = kk.readPixels(3, yk, void 0, !1), tk = kk.readPixels(2, yk, void 0, !1)) : (Lk = kk.readPixels(2, yk, void 0, !1), tk = kk.readPixels(3, yk, void 0, !1));
        const Zk = kk.readPixels(4, yk, void 0, !1),
          jk = kk.readPixels(5, yk, void 0, !1),
          ek = kk.gammaSpace,
          wk = Xk > 0 && Xk < Fk && !ik;
        return new Promise((kk => {
          Promise.all([qk, ak, Lk, tk, Zk, jk]).then((Ik => {
            let [Tk, ik, yk, ak, qk, Lk] = Ik, tk = lk;
            if (wk) {
              const kk = 4;
              Tk = this._DownsampleFace(Tk, Fk, Xk, kk), ik = this._DownsampleFace(ik, Fk, Xk, kk), yk = this._DownsampleFace(yk, Fk, Xk, kk), ak = this._DownsampleFace(ak, Fk, Xk, kk), qk = this._DownsampleFace(qk, Fk, Xk, kk), Lk = this._DownsampleFace(Lk, Fk, Xk, kk), tk = Xk
            }
            const Zk = {
              size: tk,
              right: ik,
              left: Tk,
              up: yk,
              down: ak,
              front: qk,
              back: Lk,
              format: 5,
              type: Tk instanceof Float32Array ? 1 : 0,
              gammaSpace: ek
            };
            kk(this.ConvertCubeMapToSphericalPolynomial(Zk))
          }))
        }))
      }
      static _AreaElement(kk, Fk) {
        return Math.atan2(kk * Fk, Math.sqrt(kk * kk + Fk * Fk + 1))
      }
      static _DownsampleFace(kk, Fk, Ik, Xk) {
        const Tk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
          ik = Ik * Ik * Xk,
          yk = new Float32Array(ik),
          lk = Fk / Ik,
          ak = 1 / (lk * lk);
        for (let Lk = 0; Lk < Ik; Lk++) {
          const kk = Math.floor(Lk * lk),
            ik = Math.floor((Lk + 1) * lk);
          for (let qk = 0; qk < Ik; qk++) {
            const tk = Math.floor(qk * lk),
              Zk = Math.floor((qk + 1) * lk),
              jk = (Lk * Ik + qk) * Xk;
            for (let Ik = 0; Ik < Xk; Ik++) {
              let lk = 0;
              for (let yk = kk; yk < ik; yk++)
                for (let kk = tk; kk < Zk; kk++) lk += Tk[(yk * Fk + kk) * Xk + Ik];
              yk[jk + Ik] = lk * ak
            }
          }
        }
        if (kk instanceof Float32Array) return yk;
        const qk = new(0, kk.constructor)(ik);
        for (let Lk = 0; Lk < ik; Lk++) qk[Lk] = yk[Lk] + .5 | 0;
        return qk
      }
      static ConvertCubeMapToSphericalPolynomial(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ik = Fk > 0 ? this._NearestPow2Floor(Fk) : 0;
        if (Ik > 0 && kk.size > Ik) {
          const Fk = 5 === kk.format ? 4 : 3,
            Xk = ["right", "left", "up", "down", "front", "back"],
            Tk = {};
          for (const ik of Xk) Tk[ik] = this._DownsampleFace(kk[ik], kk.size, Ik, Fk);
          kk = {
            ...kk,
            ...Tk,
            size: Ik
          }
        }
        const Xk = new ik.d;
        let ak = 0;
        const qk = 2 / kk.size,
          Lk = qk,
          tk = .5 * qk,
          Zk = tk - 1;
        for (let ik = 0; ik < 6; ik++) {
          const Fk = this._FileFaces[ik],
            Ik = kk[Fk.name];
          let jk = Zk;
          const ek = 5 === kk.format ? 4 : 3;
          for (let ik = 0; ik < kk.size; ik++) {
            let wk = Zk;
            for (let Lk = 0; Lk < kk.size; Lk++) {
              const Zk = Fk.worldAxisForFileX.scale(wk).add(Fk.worldAxisForFileY.scale(jk)).add(Fk.worldAxisForNormal);
              Zk.normalize();
              const Hk = this._AreaElement(wk - tk, jk - tk) - this._AreaElement(wk - tk, jk + tk) - this._AreaElement(wk + tk, jk - tk) + this._AreaElement(wk + tk, jk + tk);
              let Jk = Ik[ik * kk.size * ek + Lk * ek + 0],
                xk = Ik[ik * kk.size * ek + Lk * ek + 1],
                Pk = Ik[ik * kk.size * ek + Lk * ek + 2];
              isNaN(Jk) && (Jk = 0), isNaN(xk) && (xk = 0), isNaN(Pk) && (Pk = 0), 0 === kk.type && (Jk /= 255, xk /= 255, Pk /= 255), kk.gammaSpace && (Jk = Math.pow((0, Tk.Clamp)(Jk), yk.g), xk = Math.pow((0, Tk.Clamp)(xk), yk.g), Pk = Math.pow((0, Tk.Clamp)(Pk), yk.g));
              const Kk = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const kk = Math.max(Jk, xk, Pk);
                if (kk > Kk) {
                  const Fk = Kk / kk;
                  Jk *= Fk, xk *= Fk, Pk *= Fk
                }
              } else Jk = (0, Tk.Clamp)(Jk, 0, Kk), xk = (0, Tk.Clamp)(xk, 0, Kk), Pk = (0, Tk.Clamp)(Pk, 0, Kk);
              const Qk = new lk.e(Jk, xk, Pk);
              Xk.addLight(Zk, Qk, Hk), ak += Hk, wk += qk
            }
            jk += Lk
          }
        }
        const jk = 6 * (4 * Math.PI) / 6 / ak;
        return Xk.scaleInPlace(jk), Xk.convertIncidentRadianceToIrradiance(), Xk.convertIrradianceToLambertianRadiance(), ik.h.FromHarmonics(Xk)
      }
    }
    qk._FileFaces = [new ak("right", new Xk.t(1, 0, 0), new Xk.t(0, 0, -1), new Xk.t(0, -1, 0)), new ak("left", new Xk.t(-1, 0, 0), new Xk.t(0, 0, 1), new Xk.t(0, -1, 0)), new ak("up", new Xk.t(0, 1, 0), new Xk.t(1, 0, 0), new Xk.t(0, 0, 1)), new ak("down", new Xk.t(0, -1, 0), new Xk.t(1, 0, 0), new Xk.t(0, 0, -1)), new ak("front", new Xk.t(0, 0, 1), new Xk.t(1, 0, 0), new Xk.t(0, -1, 0)), new ak("back", new Xk.t(0, 0, -1), new Xk.t(-1, 0, 0), new Xk.t(0, -1, 0))], qk.MAX_HDRI_VALUE = 4096, qk.PRESERVE_CLAMPED_COLORS = !1
  },
  41550: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk.l,
      i: () => Xk.t
    });
    var Xk = Ik(40038);
    (0, Xk.x)()
  },
  37902: (kk, Fk, Ik) => {
    function Xk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const Fk = 16 * Math.random() | 0;
        return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
      }))
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  },
  41803: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(41795),
      Tk = Ik(41809);
    class ik {
      static ExpandRGBDTexture(kk) {
        const Fk = kk._texture;
        if (!Fk || !kk.isRGBD) return;
        const Tk = Fk.Oe(),
          ik = Tk.getCaps(),
          yk = Fk.isReady;
        let lk = !1;
        ik.textureHalfFloatRender && ik.textureHalfFloatLinearFiltering ? (lk = !0, Fk.type = 2) : ik.textureFloatRender && ik.textureFloatLinearFiltering && (lk = !0, Fk.type = 1), lk && (Fk.isReady = !1, Fk._isRGBD = !1, Fk.invertY = !1);
        const ak = async () => {
          const ik = Tk.isWebGPU,
            yk = ik ? 1 : 0;
          Fk.isReady = !1, ik ? await Ik.e(342).then((() => Ik(61383))) : await Ik.e(324).then((() => Ik(61389)));
          const lk = new Xk.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Tk, !1, void 0, Fk.type, void 0, null, !1, void 0, yk);
          lk.externalTextureSamplerBinding = !0;
          const ak = Tk.createRenderTargetTexture(Fk.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Fk.samplingMode,
            type: Fk.type,
            format: 5
          });
          lk.onEffectCreatedObservable.addOnce((Ik => {
            Ik.executeWhenCompiled((() => {
              lk.onApply = kk => {
                kk._bindTexture("textureSampler", Fk), kk.setFloat2("scale", 1, 1)
              }, kk.mG()?.postProcessManager.directRender([lk], ak, !0), Tk.restoreDefaultFramebuffer(), Tk._releaseTexture(Fk), lk && lk.dispose(), ak._swapAndDie(Fk), Fk.isReady = !0
            }))
          }))
        };
        lk && (yk ? ak() : kk.onLoadObservable.addOnce(ak))
      }
      static async EncodeTextureToRGBD(kk, Fk) {
        let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Fk.Oe().isWebGPU ? await Ik.e(343).then((() => Ik(61404))) : await Ik.e(325).then((() => Ik(61400))), await (0, Tk.e)("rgbdEncode", kk, Fk, Xk, 1, 5)
      }
    }
  },
  61268: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      AsyncLoop: () => Xk.b,
      RegisterTools: () => Xk.e,
      Tools: () => Xk.h,
      className: () => Xk.k
    });
    var Xk = Ik(40097);
    (0, Xk.e)()
  },
  41846: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk
    });
    class Xk {
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
        for (const Fk of this._workerInfos)
          if (Fk.idle) return this._execute(Fk, kk), !0;
        return !1
      }
      _execute(kk, Fk) {
        kk.idle = !1, kk.workerPromise.then((Ik => {
          Fk(Ik, (() => {
            const Fk = this._pendingActions.shift();
            Fk ? this._execute(kk, Fk) : kk.idle = !0
          }))
        }))
      }
    }
    class Tk extends Xk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tk.DefaultOptions;
        super([]), this._maxWorkers = kk, this._createWorkerAsync = Fk, this._options = Ik
      }
      push(kk) {
        if (!this._executeOnIdleWorker(kk))
          if (this._workerInfos.length < this._maxWorkers) {
            const Fk = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Fk), this._execute(Fk, kk)
          } else this._pendingActions.push(kk)
      }
      _execute(kk, Fk) {
        kk.timeoutId && (clearTimeout(kk.timeoutId), delete kk.timeoutId), super._execute(kk, ((Ik, Xk) => {
          Fk(Ik, (() => {
            Xk(), kk.idle && (kk.timeoutId = setTimeout((() => {
              kk.workerPromise.then((kk => {
                kk.terminate()
              }));
              const Fk = this._workerInfos.indexOf(kk); - 1 !== Fk && this._workerInfos.splice(Fk, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Tk.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61293: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      AbstractThreeMfSerializer: () => ml,
      BVHExporter: () => Ey,
      ContentTypeFileName: () => Hl,
      DefaultXmlSerializerFormatOptions: () => dy,
      DefaultXmlSerializerNumberOptions: () => By,
      EXT_lights_area: () => JT,
      EXT_mesh_gpu_instancing: () => NX,
      EXT_texture_avif: () => ly,
      EXT_texture_webp: () => Xy,
      GLTF2Export: () => RX,
      GLTFData: () => qk,
      GetXmlFieldMeta: () => Cy,
      GetXmlName: () => Ny,
      IsQualifiedName: () => Oy,
      KHR_draco_mesh_compression: () => DX,
      KHR_interactivity: () => LT,
      KHR_lights_punctual: () => yT,
      KHR_materials_anisotropy: () => QT,
      KHR_materials_clearcoat: () => oT,
      KHR_materials_coat: () => pT,
      KHR_materials_diffuse_roughness: () => Ci,
      KHR_materials_diffuse_transmission: () => NT,
      KHR_materials_dispersion: () => BT,
      KHR_materials_emissive_strength: () => gT,
      KHR_materials_fuzz: () => ti,
      KHR_materials_ior: () => DT,
      KHR_materials_iridescence: () => Ii,
      KHR_materials_openpbr: () => fi,
      KHR_materials_sheen: () => yi,
      KHR_materials_specular: () => wi,
      KHR_materials_transmission: () => Pi,
      KHR_materials_unlit: () => zi,
      KHR_materials_volume: () => Ei,
      KHR_materials_volume_scatter: () => ui,
      KHR_texture_basisu: () => Mi,
      KHR_texture_transform: () => Ai,
      Known3mfRelationshipTypes: () => Jl,
      KnownI3mfContentType: () => tl,
      Matrix3d: () => Vl,
      MatrixFormatter: () => zl,
      ModelFileName: () => el,
      NumberFormatter: () => gy,
      OBJExport: () => yk,
      Object3dDirName: () => jl,
      OpenXmlContentTypesNamespace: () => ql,
      OpenXmlRelationshipsNamespace: () => Ll,
      RegisterEXT_lights_area: () => PT,
      RegisterEXT_mesh_gpu_instancing: () => WX,
      RegisterEXT_texture_avif: () => qy,
      RegisterEXT_texture_webp: () => iy,
      RegisterKHR_draco_mesh_compression: () => kT,
      RegisterKHR_interactivity: () => ZT,
      RegisterKHR_lights_punctual: () => aT,
      RegisterKHR_materials_anisotropy: () => VT,
      RegisterKHR_materials_clearcoat: () => ET,
      RegisterKHR_materials_coat: () => bT,
      RegisterKHR_materials_diffuse_roughness: () => ci,
      RegisterKHR_materials_diffuse_transmission: () => WT,
      RegisterKHR_materials_dispersion: () => YT,
      RegisterKHR_materials_emissive_strength: () => hT,
      RegisterKHR_materials_fuzz: () => ji,
      RegisterKHR_materials_ior: () => ki,
      RegisterKHR_materials_iridescence: () => Ti,
      RegisterKHR_materials_openpbr: () => di,
      RegisterKHR_materials_sheen: () => ai,
      RegisterKHR_materials_specular: () => Ji,
      RegisterKHR_materials_transmission: () => Qi,
      RegisterKHR_materials_unlit: () => oi,
      RegisterKHR_materials_volume: () => ni,
      RegisterKHR_materials_volume_scatter: () => Ri,
      RegisterKHR_texture_basisu: () => Fy,
      RegisterKHR_texture_transform: () => mi,
      RelationshipDirName: () => Zl,
      RelationshipFileName: () => wl,
      ResolveFormatOptions: () => Ay,
      ResolveNumberOptions: () => Yy,
      STLExport: () => Ly,
      ST_ObjectType: () => al,
      ST_Unit: () => ll,
      StringXmlWriter: () => Xl,
      ThreeDimModelNamespace: () => il,
      ThreeMf: () => hl,
      ThreeMfBase: () => Nl,
      ThreeMfBaseMaterials: () => Cl,
      ThreeMfBuild: () => cl,
      ThreeMfComponent: () => Ul,
      ThreeMfComponents: () => Rl,
      ThreeMfComponentsBuilder: () => Bl,
      ThreeMfContentType: () => Pl,
      ThreeMfContentTypes: () => xl,
      ThreeMfDocument: () => sl,
      ThreeMfDocumentBuilder: () => gl,
      ThreeMfItem: () => Wl,
      ThreeMfMaterialBuilder: () => Yl,
      ThreeMfMesh: () => nl,
      ThreeMfMeshBuilder: () => dl,
      ThreeMfMeta: () => ol,
      ThreeMfMetadataGroup: () => vl,
      ThreeMfModel: () => Sl,
      ThreeMfModelBuilder: () => Al,
      ThreeMfObject: () => Ol,
      ThreeMfObjectBuilder: () => fl,
      ThreeMfRelationship: () => Ql,
      ThreeMfRelationships: () => Kl,
      ThreeMfResources: () => El,
      ThreeMfSerializer: () => Ml,
      ThreeMfSerializerGlobalConfiguration: () => rl,
      ThreeMfTriangle: () => bl,
      ThreeMfTriangles: () => ul,
      ThreeMfVertex: () => pl,
      ThreeMfVertices: () => Gl,
      ToQualifiedString: () => fy,
      TokenType: () => Fl,
      TriangleSetsNamespace: () => yl,
      USDZExportAsync: () => oy,
      Utf8XmlWriterToBytes: () => Tl,
      XmlAttr: () => Ry,
      XmlBuilder: () => Il,
      XmlElem: () => Uy,
      XmlIgnore: () => by,
      XmlName: () => uy,
      XmlNameToParts: () => Wy,
      XmlSerializer: () => My,
      _ConvertToGLTFPBRMetallicRoughness: () => oI,
      _SolveMetallic: () => SI,
      __IGLTFExporterExtension: () => lk
    });
    var Xk = Ik(37144),
      Tk = Ik(61268),
      ik = Ik(40295);
    class yk {
      static OBJ(kk, Fk, Ik, yk) {
        const lk = [];
        let ak = 1,
          qk = 1;
        Fk && (Ik || (Ik = "mat"), lk.push("mtllib " + Ik + ".mtl"));
        for (let Lk = 0; Lk < kk.length; Lk++) {
          const Ik = kk[Lk],
            tk = Ik.name || `mesh${Lk}}`;
          lk.push(`o ${tk}`);
          let Zk = null;
          if (yk) {
            const kk = Ik.computeWorldMatrix(!0);
            Zk = new Xk.Matrix, kk.invertToRef(Zk), Ik.bakeTransformIntoVertices(kk)
          }
          if (Fk) {
            const kk = Ik.material;
            kk && lk.push("usemtl " + kk.id)
          }
          const jk = Ik.geometry;
          if (!jk) {
            Tk.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const ek = jk.getVerticesData("position"),
            wk = jk.getVerticesData("normal"),
            Hk = jk.getVerticesData("uv"),
            Jk = jk.yXk();
          let xk = 0,
            Pk = 0;
          if (!ek || !Jk) {
            Tk.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const Kk = kk[0].mG().useRightHandedSystem ? 1 : -1;
          for (let kk = 0; kk < ek.length; kk += 3) lk.push("v " + ek[kk] * Kk + " " + ek[kk + 1] + " " + ek[kk + 2]), xk++;
          if (null != wk)
            for (let kk = 0; kk < wk.length; kk += 3) lk.push("vn " + wk[kk] * Kk + " " + wk[kk + 1] + " " + wk[kk + 2]);
          if (null != Hk)
            for (let kk = 0; kk < Hk.length; kk += 2) lk.push("vt " + Hk[kk] + " " + Hk[kk + 1]), Pk++;
          const Qk = ["", "", ""],
            sk = (Ik.material || Ik.mG().defaultMaterial)._getEffectiveOrientation(Ik),
            [Vk, zk] = sk === ik.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let kk = 0; kk < Jk.length; kk += 3) {
            const Fk = [String(Jk[kk] + ak), String(Jk[kk + Vk] + ak), String(Jk[kk + zk] + ak)],
              Ik = [String(Jk[kk] + qk), String(Jk[kk + Vk] + qk), String(Jk[kk + zk] + qk)],
              Xk = Fk,
              Tk = null != Hk ? Ik : Qk,
              ik = null != wk ? Fk : Qk;
            lk.push("f " + Xk[0] + "/" + Tk[0] + "/" + ik[0] + " " + Xk[1] + "/" + Tk[1] + "/" + ik[1] + " " + Xk[2] + "/" + Tk[2] + "/" + ik[2])
          }
          yk && Zk && Ik.bakeTransformIntoVertices(Zk), ak += xk, qk += Pk
        }
        return lk.join("\n")
      }
      static MTL(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const Ik = [],
          Xk = kk.material;
        Ik.push("newmtl " + Fk), Ik.push("  Ns " + Xk.specularPower.toFixed(4)), Ik.push("  Ni 1.5000"), Ik.push("  d " + Xk.alpha.toFixed(4)), Ik.push("  Tr 0.0000"), Ik.push("  Tf 1.0000 1.0000 1.0000"), Ik.push("  illum 2"), Ik.push("  Ka " + Xk.ambientColor.r.toFixed(4) + " " + Xk.ambientColor.g.toFixed(4) + " " + Xk.ambientColor.b.toFixed(4)), Ik.push("  Kd " + Xk.diffuseColor.r.toFixed(4) + " " + Xk.diffuseColor.g.toFixed(4) + " " + Xk.diffuseColor.b.toFixed(4)), Ik.push("  Ks " + Xk.specularColor.r.toFixed(4) + " " + Xk.specularColor.g.toFixed(4) + " " + Xk.specularColor.b.toFixed(4)), Ik.push("  Ke " + Xk.emissiveColor.r.toFixed(4) + " " + Xk.emissiveColor.g.toFixed(4) + " " + Xk.emissiveColor.b.toFixed(4));
        Xk.ambientTexture && Ik.push("  map_Ka " + Xk.ambientTexture.name), Xk.diffuseTexture && Ik.push("  map_Kd " + Xk.diffuseTexture.name), Xk.specularTexture && Ik.push("  map_Ks " + Xk.specularTexture.name), Xk.bumpTexture && Ik.push("  map_bump -imfchan z " + Xk.bumpTexture.name), Xk.opacityTexture && Ik.push("  map_d " + Xk.opacityTexture.name);
        return Ik.join("\n")
      }
    }
    var lk = 0,
      ak = Ik(41550);
    class qk {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const kk in this.files) {
          const Fk = this.files[kk],
            Ik = new Blob([Fk], {
              type: (0, ak.e)(kk)
            });
          Tk.Tools.Download(Ik, kk)
        }
      }
    }
    var Lk = Ik(41158),
      tk = Ik(41114),
      Zk = Ik(41632),
      jk = Ik(41117),
      ek = Ik(39806),
      wk = Ik(37178),
      Hk = Ik(37327),
      Jk = Ik(37189);
    const xk = Jk.HighestCommonFactor,
      Pk = {
        ...Jk,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: xk
      };
    var Kk = Ik(41809),
      Qk = Ik(41147),
      sk = Ik(41599),
      Vk = Ik(41601),
      zk = Ik(41826);
    (0, zk.RegisterDumpTools)();
    var Sk = Ik(40003),
      vk = Ik(40011),
      Ek = Ik(38674),
      Ok = Ik(40107),
      nk = Ik(40489),
      Gk = Ik(41803);
    let pk = 0;
    const uk = (kk, Fk, Ik, Xk) => {
        if (!kk[Ik]) {
          const Tk = kk.useDelayedTextureLoading;
          kk.useDelayedTextureLoading = !1;
          const ik = kk._blockEntityCollection;
          kk._blockEntityCollection = !1;
          const yk = nk.g.CreateFromBase64String(Fk, Xk + pk++, kk, !0, !1, nk.g.BILINEAR_SAMPLINGMODE);
          kk._blockEntityCollection = ik;
          const lk = kk.Oe().getLoadedTexturesCache(),
            ak = lk.indexOf(yk.getInternalTexture()); - 1 !== ak && lk.splice(ak, 1), yk.isRGBD = !0, yk.wrapU = nk.g.CLAMP_ADDRESSMODE, yk.wrapV = nk.g.CLAMP_ADDRESSMODE, kk[Ik] = yk, kk.useDelayedTextureLoading = Tk, Gk.c.ExpandRGBDTexture(yk);
          const qk = kk.Oe().Ee.add((() => {
            yk.isRGBD = !0;
            const Fk = kk.onBeforeRenderObservable.add((() => {
              yk.isReady() && (kk.onBeforeRenderObservable.remove(Fk), Gk.c.ExpandRGBDTexture(yk))
            }))
          }));
          kk.hG.add((() => {
            kk.Oe().Ee.remove(qk)
          }))
        }
        return kk[Ik]
      },
      bk = kk => uk(kk, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      Rk = kk => uk(kk, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Uk = kk => uk(kk, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var Ck = Ik(40090),
      Nk = Ik(37153),
      ck = Ik(40141),
      Wk = Ik(40291),
      fk = Ik(40363);
    class Bk extends Wk.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let dk = (() => {
      var kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk;
      let Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk, Pk = fk.b,
        Kk = [],
        Qk = [],
        sk = [],
        Vk = [],
        zk = [],
        Ek = [],
        Ok = [],
        nk = [],
        Gk = [],
        pk = [],
        uk = [],
        bk = [],
        Rk = [],
        Uk = [],
        Ck = [],
        Nk = [],
        ck = [],
        Wk = [];
      return kk = class extends Pk {
        get useEnergyConservation() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set useEnergyConservation(kk) {
          (0, Sk.f)(this, Fk, kk, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, Sk.e)(this, Ik, "f")
        }
        set useSmithVisibilityHeightCorrelated(kk) {
          (0, Sk.f)(this, Ik, kk, "f")
        }
        get useSphericalHarmonics() {
          return (0, Sk.e)(this, Xk, "f")
        }
        set useSphericalHarmonics(kk) {
          (0, Sk.f)(this, Xk, kk, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, Sk.e)(this, Tk, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(kk) {
          (0, Sk.f)(this, Tk, kk, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, Sk.e)(this, ik, "f")
        }
        set mixIblRadianceWithIrradiance(kk) {
          (0, Sk.f)(this, ik, kk, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, Sk.e)(this, yk, "f")
        }
        set useLegacySpecularEnergyConservation(kk) {
          (0, Sk.f)(this, yk, kk, "f")
        }
        get baseDiffuseModel() {
          return (0, Sk.e)(this, lk, "f")
        }
        set baseDiffuseModel(kk) {
          (0, Sk.f)(this, lk, kk, "f")
        }
        get dielectricSpecularModel() {
          return (0, Sk.e)(this, ak, "f")
        }
        set dielectricSpecularModel(kk) {
          (0, Sk.f)(this, ak, kk, "f")
        }
        get conductorSpecularModel() {
          return (0, Sk.e)(this, qk, "f")
        }
        set conductorSpecularModel(kk) {
          (0, Sk.f)(this, qk, kk, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Lk) {
          let tk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Lk, "PBRBRDF", 90, new Bk, tk), this._useEnergyConservation = kk.DEFAULT_USE_ENERGY_CONSERVATION, Fk.set(this, (0, Sk.n)(this, Kk, kk.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, Sk.n)(this, Qk), kk.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), Ik.set(this, (0, Sk.n)(this, sk, kk.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, Sk.n)(this, Vk), kk.DEFAULT_USE_SPHERICAL_HARMONICS), Xk.set(this, (0, Sk.n)(this, zk, kk.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, Sk.n)(this, Ek), kk.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Tk.set(this, (0, Sk.n)(this, Ok, kk.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, Sk.n)(this, nk), kk.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), ik.set(this, (0, Sk.n)(this, Gk, kk.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, Sk.n)(this, pk), kk.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), yk.set(this, (0, Sk.n)(this, uk, kk.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, Sk.n)(this, bk), kk.DEFAULT_DIFFUSE_MODEL), lk.set(this, (0, Sk.n)(this, Rk, kk.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, Sk.n)(this, Uk), kk.DEFAULT_DIELECTRIC_SPECULAR_MODEL), ak.set(this, (0, Sk.n)(this, Ck, kk.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, Sk.n)(this, Nk), kk.DEFAULT_CONDUCTOR_SPECULAR_MODEL), qk.set(this, (0, Sk.n)(this, ck, kk.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, Sk.n)(this, Wk), this._internalMarkAllSubMeshesAsMiscDirty = Lk._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(kk) {
          kk.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, kk.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, kk.SPHERICAL_HARMONICS = this._useSphericalHarmonics, kk.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, kk.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, kk.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, kk.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, kk.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, kk.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, Fk = new WeakMap, Ik = new WeakMap, Xk = new WeakMap, Tk = new WeakMap, ik = new WeakMap, yk = new WeakMap, lk = new WeakMap, ak = new WeakMap, qk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pk[Symbol.metadata] ?? null) : void 0;
        Lk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], tk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], Zk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], jk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], ek = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], wk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], Hk = [(0, vk.J)("baseDiffuseModel"), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], Jk = [(0, vk.J)("dielectricSpecularModel"), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], xk = [(0, vk.J)("conductorSpecularModel"), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], (0, Sk.j)(kk, null, Lk, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: kk => "useEnergyConservation" in kk,
            get: kk => kk.useEnergyConservation,
            set: (kk, Fk) => {
              kk.useEnergyConservation = Fk
            }
          },
          metadata: Fk
        }, Kk, Qk), (0, Sk.j)(kk, null, tk, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: kk => "useSmithVisibilityHeightCorrelated" in kk,
            get: kk => kk.useSmithVisibilityHeightCorrelated,
            set: (kk, Fk) => {
              kk.useSmithVisibilityHeightCorrelated = Fk
            }
          },
          metadata: Fk
        }, sk, Vk), (0, Sk.j)(kk, null, Zk, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: kk => "useSphericalHarmonics" in kk,
            get: kk => kk.useSphericalHarmonics,
            set: (kk, Fk) => {
              kk.useSphericalHarmonics = Fk
            }
          },
          metadata: Fk
        }, zk, Ek), (0, Sk.j)(kk, null, jk, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: kk => "useSpecularGlossinessInputEnergyConservation" in kk,
            get: kk => kk.useSpecularGlossinessInputEnergyConservation,
            set: (kk, Fk) => {
              kk.useSpecularGlossinessInputEnergyConservation = Fk
            }
          },
          metadata: Fk
        }, Ok, nk), (0, Sk.j)(kk, null, ek, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: kk => "mixIblRadianceWithIrradiance" in kk,
            get: kk => kk.mixIblRadianceWithIrradiance,
            set: (kk, Fk) => {
              kk.mixIblRadianceWithIrradiance = Fk
            }
          },
          metadata: Fk
        }, Gk, pk), (0, Sk.j)(kk, null, wk, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: kk => "useLegacySpecularEnergyConservation" in kk,
            get: kk => kk.useLegacySpecularEnergyConservation,
            set: (kk, Fk) => {
              kk.useLegacySpecularEnergyConservation = Fk
            }
          },
          metadata: Fk
        }, uk, bk), (0, Sk.j)(kk, null, Hk, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: kk => "baseDiffuseModel" in kk,
            get: kk => kk.baseDiffuseModel,
            set: (kk, Fk) => {
              kk.baseDiffuseModel = Fk
            }
          },
          metadata: Fk
        }, Rk, Uk), (0, Sk.j)(kk, null, Jk, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: kk => "dielectricSpecularModel" in kk,
            get: kk => kk.dielectricSpecularModel,
            set: (kk, Fk) => {
              kk.dielectricSpecularModel = Fk
            }
          },
          metadata: Fk
        }, Ck, Nk), (0, Sk.j)(kk, null, xk, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: kk => "conductorSpecularModel" in kk,
            get: kk => kk.conductorSpecularModel,
            set: (kk, Fk) => {
              kk.conductorSpecularModel = Fk
            }
          },
          metadata: Fk
        }, ck, Wk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk.DEFAULT_USE_ENERGY_CONSERVATION = !0, kk.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, kk.DEFAULT_USE_SPHERICAL_HARMONICS = !0, kk.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, kk.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, kk.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, kk.DEFAULT_DIFFUSE_MODEL = 0, kk.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, kk.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, kk
    })();
    var Yk = Ik(40279),
      Ak = Ik(37331),
      gk = Ik(40288),
      mk = Ik(40113),
      hk = Ik(40345),
      rk = Ik(40338),
      Dk = Ik(40349),
      Mk = Ik(40329);
    class kF extends Wk.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let FF = (() => {
      var kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk;
      let Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk, Pk, Kk, Qk, sk, Vk, zk = fk.b,
        Ek = [],
        Ok = [],
        nk = [],
        Gk = [],
        pk = [],
        uk = [],
        bk = [],
        Rk = [],
        Uk = [],
        Ck = [],
        Nk = [],
        ck = [],
        Wk = [],
        Bk = [],
        dk = [],
        Yk = [],
        gk = [],
        mk = [],
        hk = [],
        Dk = [],
        FF = [],
        IF = [],
        XF = [],
        TF = [],
        iF = [],
        yF = [],
        lF = [],
        aF = [];
      return kk = class extends zk {
        get isEnabled() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set isEnabled(kk) {
          (0, Sk.f)(this, Fk, kk, "f")
        }
        get indexOfRefraction() {
          return (0, Sk.e)(this, Ik, "f")
        }
        set indexOfRefraction(kk) {
          (0, Sk.f)(this, Ik, kk, "f")
        }
        get texture() {
          return (0, Sk.e)(this, Xk, "f")
        }
        set texture(kk) {
          (0, Sk.f)(this, Xk, kk, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Sk.e)(this, Tk, "f")
        }
        set useRoughnessFromMainTexture(kk) {
          (0, Sk.f)(this, Tk, kk, "f")
        }
        get textureRoughness() {
          return (0, Sk.e)(this, ik, "f")
        }
        set textureRoughness(kk) {
          (0, Sk.f)(this, ik, kk, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, Sk.e)(this, yk, "f")
        }
        set remapF0OnInterfaceChange(kk) {
          (0, Sk.f)(this, yk, kk, "f")
        }
        get bumpTexture() {
          return (0, Sk.e)(this, lk, "f")
        }
        set bumpTexture(kk) {
          (0, Sk.f)(this, lk, kk, "f")
        }
        get isTintEnabled() {
          return (0, Sk.e)(this, ak, "f")
        }
        set isTintEnabled(kk) {
          (0, Sk.f)(this, ak, kk, "f")
        }
        get tintTexture() {
          return (0, Sk.e)(this, qk, "f")
        }
        set tintTexture(kk) {
          (0, Sk.f)(this, qk, kk, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Lk) {
          let tk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Lk, "PBRClearCoat", 100, new kF, tk), this._isEnabled = !1, Fk.set(this, (0, Sk.n)(this, Ek, !1)), this.intensity = ((0, Sk.n)(this, Ok), (0, Sk.n)(this, nk, 1)), this.roughness = ((0, Sk.n)(this, Gk), (0, Sk.n)(this, pk, 0)), this._indexOfRefraction = ((0, Sk.n)(this, uk), kk._DefaultIndexOfRefraction), Ik.set(this, (0, Sk.n)(this, bk, kk._DefaultIndexOfRefraction)), this._texture = ((0, Sk.n)(this, Rk), null), Xk.set(this, (0, Sk.n)(this, Uk, null)), this._useRoughnessFromMainTexture = ((0, Sk.n)(this, Ck), !0), Tk.set(this, (0, Sk.n)(this, Nk, !0)), this._textureRoughness = ((0, Sk.n)(this, ck), null), ik.set(this, (0, Sk.n)(this, Wk, null)), this._remapF0OnInterfaceChange = ((0, Sk.n)(this, Bk), !0), yk.set(this, (0, Sk.n)(this, dk, !0)), this._bumpTexture = ((0, Sk.n)(this, Yk), null), lk.set(this, (0, Sk.n)(this, gk, null)), this._isTintEnabled = ((0, Sk.n)(this, mk), !1), ak.set(this, (0, Sk.n)(this, hk, !1)), this.tintColor = ((0, Sk.n)(this, Dk), (0, Sk.n)(this, FF, Ak.e.White())), this.tintColorAtDistance = ((0, Sk.n)(this, IF), (0, Sk.n)(this, XF, 1)), this.tintThickness = ((0, Sk.n)(this, TF), (0, Sk.n)(this, iF, 1)), this._tintTexture = ((0, Sk.n)(this, yF), null), qk.set(this, (0, Sk.n)(this, lF, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Sk.n)(this, aF), this._internalMarkAllSubMeshesAsTexturesDirty = Lk._dirtyCallbacks[1]
        }
        isReadyForSubMesh(kk, Fk, Ik) {
          if (!this._isEnabled) return !0;
          const Xk = this._material._disableBumpMap;
          if (kk._areTexturesDirty && Fk.texturesEnabled) {
            if (this._texture && rk.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && rk.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (Ik.getCaps().standardDerivatives && this._bumpTexture && rk.d.ClearCoatBumpTextureEnabled && !Xk && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && rk.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(Fk, Ik) {
          this._isEnabled ? (Fk.CLEARCOAT = !0, Fk.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, Fk.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, Fk._areTexturesDirty && Ik.texturesEnabled && (this._texture && rk.d.ClearCoatTextureEnabled ? (0, Mk.P)(this._texture, Fk, "CLEARCOAT_TEXTURE") : Fk.CLEARCOAT_TEXTURE = !1, this._textureRoughness && rk.d.ClearCoatTextureEnabled ? (0, Mk.P)(this._textureRoughness, Fk, "CLEARCOAT_TEXTURE_ROUGHNESS") : Fk.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && rk.d.ClearCoatBumpTextureEnabled ? (0, Mk.P)(this._bumpTexture, Fk, "CLEARCOAT_BUMP") : Fk.CLEARCOAT_BUMP = !1, Fk.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === kk._DefaultIndexOfRefraction, this._isTintEnabled ? (Fk.CLEARCOAT_TINT = !0, this._tintTexture && rk.d.ClearCoatTintTextureEnabled ? ((0, Mk.P)(this._tintTexture, Fk, "CLEARCOAT_TINT_TEXTURE"), Fk.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : Fk.CLEARCOAT_TINT_TEXTURE = !1) : (Fk.CLEARCOAT_TINT = !1, Fk.CLEARCOAT_TINT_TEXTURE = !1))) : (Fk.CLEARCOAT = !1, Fk.CLEARCOAT_TEXTURE = !1, Fk.CLEARCOAT_TEXTURE_ROUGHNESS = !1, Fk.CLEARCOAT_BUMP = !1, Fk.CLEARCOAT_TINT = !1, Fk.CLEARCOAT_TINT_TEXTURE = !1, Fk.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, Fk.CLEARCOAT_DEFAULTIOR = !1, Fk.CLEARCOAT_TEXTUREDIRECTUV = 0, Fk.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, Fk.CLEARCOAT_BUMPDIRECTUV = 0, Fk.CLEARCOAT_REMAP_F0 = !1, Fk.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, Fk.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(kk, Fk, Ik, Xk) {
          if (!this._isEnabled) return;
          const Tk = Xk.materialDefines,
            ik = this._material.isFrozen,
            yk = this._material._disableBumpMap,
            lk = this._material._invertNormalMapX,
            ak = this._material._invertNormalMapY;
          if (!kk.useUbo || !ik || !kk.isSync) {
            (this._texture || this._textureRoughness) && rk.d.ClearCoatTextureEnabled && (kk.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Mk.v)(this._texture, kk, "clearCoat"), this._textureRoughness && !Tk.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Mk.v)(this._textureRoughness, kk, "clearCoatRoughness")), this._bumpTexture && Ik.getCaps().standardDerivatives && rk.d.ClearCoatTextureEnabled && !yk && (kk.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, Mk.v)(this._bumpTexture, kk, "clearCoatBump"), Fk._mirroredCameraPosition ? kk.updateFloat2("vClearCoatTangentSpaceParams", lk ? 1 : -1, ak ? 1 : -1) : kk.updateFloat2("vClearCoatTangentSpaceParams", lk ? -1 : 1, ak ? -1 : 1)), this._tintTexture && rk.d.ClearCoatTintTextureEnabled && (kk.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, Mk.v)(this._tintTexture, kk, "clearCoatTint")), kk.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Xk = 1 - this._indexOfRefraction,
              ik = 1 + this._indexOfRefraction,
              qk = Math.pow(-Xk / ik, 2),
              Lk = 1 / this._indexOfRefraction;
            kk.updateFloat4("vClearCoatRefractionParams", qk, Lk, Xk, ik), this._isTintEnabled && (kk.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), kk.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          Fk.texturesEnabled && (this._texture && rk.d.ClearCoatTextureEnabled && kk.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Tk.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && rk.d.ClearCoatTextureEnabled && kk.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && Ik.getCaps().standardDerivatives && rk.d.ClearCoatBumpTextureEnabled && !yk && kk.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && rk.d.ClearCoatTintTextureEnabled && kk.setTexture("clearCoatTintSampler", this._tintTexture))
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
        addFallbacks(kk, Fk, Ik) {
          return kk.CLEARCOAT_BUMP && Fk.addFallback(Ik++, "CLEARCOAT_BUMP"), kk.CLEARCOAT_TINT && Fk.addFallback(Ik++, "CLEARCOAT_TINT"), kk.CLEARCOAT && Fk.addFallback(Ik++, "CLEARCOAT"), Ik
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
      }, Fk = new WeakMap, Ik = new WeakMap, Xk = new WeakMap, Tk = new WeakMap, ik = new WeakMap, yk = new WeakMap, lk = new WeakMap, ak = new WeakMap, qk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(zk[Symbol.metadata] ?? null) : void 0;
        Lk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], tk = [(0, vk.J)()], Zk = [(0, vk.J)()], jk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], ek = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], wk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Hk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Jk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], xk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Pk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Kk = [(0, vk.n)()], Qk = [(0, vk.J)()], sk = [(0, vk.J)()], Vk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], (0, Sk.j)(kk, null, Lk, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isEnabled" in kk,
            get: kk => kk.isEnabled,
            set: (kk, Fk) => {
              kk.isEnabled = Fk
            }
          },
          metadata: Fk
        }, Ek, Ok), (0, Sk.j)(kk, null, jk, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: kk => "indexOfRefraction" in kk,
            get: kk => kk.indexOfRefraction,
            set: (kk, Fk) => {
              kk.indexOfRefraction = Fk
            }
          },
          metadata: Fk
        }, bk, Rk), (0, Sk.j)(kk, null, ek, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: kk => "texture" in kk,
            get: kk => kk.texture,
            set: (kk, Fk) => {
              kk.texture = Fk
            }
          },
          metadata: Fk
        }, Uk, Ck), (0, Sk.j)(kk, null, wk, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "useRoughnessFromMainTexture" in kk,
            get: kk => kk.useRoughnessFromMainTexture,
            set: (kk, Fk) => {
              kk.useRoughnessFromMainTexture = Fk
            }
          },
          metadata: Fk
        }, Nk, ck), (0, Sk.j)(kk, null, Hk, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: kk => "textureRoughness" in kk,
            get: kk => kk.textureRoughness,
            set: (kk, Fk) => {
              kk.textureRoughness = Fk
            }
          },
          metadata: Fk
        }, Wk, Bk), (0, Sk.j)(kk, null, Jk, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: kk => "remapF0OnInterfaceChange" in kk,
            get: kk => kk.remapF0OnInterfaceChange,
            set: (kk, Fk) => {
              kk.remapF0OnInterfaceChange = Fk
            }
          },
          metadata: Fk
        }, dk, Yk), (0, Sk.j)(kk, null, xk, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "bumpTexture" in kk,
            get: kk => kk.bumpTexture,
            set: (kk, Fk) => {
              kk.bumpTexture = Fk
            }
          },
          metadata: Fk
        }, gk, mk), (0, Sk.j)(kk, null, Pk, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isTintEnabled" in kk,
            get: kk => kk.isTintEnabled,
            set: (kk, Fk) => {
              kk.isTintEnabled = Fk
            }
          },
          metadata: Fk
        }, hk, Dk), (0, Sk.j)(kk, null, Vk, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "tintTexture" in kk,
            get: kk => kk.tintTexture,
            set: (kk, Fk) => {
              kk.tintTexture = Fk
            }
          },
          metadata: Fk
        }, lF, aF), (0, Sk.j)(null, null, tk, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensity" in kk,
            get: kk => kk.intensity,
            set: (kk, Fk) => {
              kk.intensity = Fk
            }
          },
          metadata: Fk
        }, nk, Gk), (0, Sk.j)(null, null, Zk, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: kk => "roughness" in kk,
            get: kk => kk.roughness,
            set: (kk, Fk) => {
              kk.roughness = Fk
            }
          },
          metadata: Fk
        }, pk, uk), (0, Sk.j)(null, null, Kk, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "tintColor" in kk,
            get: kk => kk.tintColor,
            set: (kk, Fk) => {
              kk.tintColor = Fk
            }
          },
          metadata: Fk
        }, FF, IF), (0, Sk.j)(null, null, Qk, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: kk => "tintColorAtDistance" in kk,
            get: kk => kk.tintColorAtDistance,
            set: (kk, Fk) => {
              kk.tintColorAtDistance = Fk
            }
          },
          metadata: Fk
        }, XF, TF), (0, Sk.j)(null, null, sk, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: kk => "tintThickness" in kk,
            get: kk => kk.tintThickness,
            set: (kk, Fk) => {
              kk.tintThickness = Fk
            }
          },
          metadata: Fk
        }, iF, yF), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk._DefaultIndexOfRefraction = 1.5, kk
    })();
    class IF extends Wk.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let XF = (() => {
      var kk, Fk, Ik, Xk;
      let Tk, ik, yk, lk, ak, qk, Lk, tk = fk.b,
        Zk = [],
        jk = [],
        ek = [],
        wk = [],
        Hk = [],
        Jk = [],
        xk = [],
        Pk = [],
        Kk = [],
        Qk = [],
        sk = [],
        Vk = [],
        zk = [],
        Ek = [];
      return kk = class extends tk {
        get isEnabled() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set isEnabled(kk) {
          (0, Sk.f)(this, Fk, kk, "f")
        }
        get texture() {
          return (0, Sk.e)(this, Ik, "f")
        }
        set texture(kk) {
          (0, Sk.f)(this, Ik, kk, "f")
        }
        get thicknessTexture() {
          return (0, Sk.e)(this, Xk, "f")
        }
        set thicknessTexture(kk) {
          (0, Sk.f)(this, Xk, kk, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Tk) {
          let ik = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Tk, "PBRIridescence", 110, new IF, ik), this._isEnabled = !1, Fk.set(this, (0, Sk.n)(this, Zk, !1)), this.intensity = ((0, Sk.n)(this, jk), (0, Sk.n)(this, ek, 1)), this.minimumThickness = ((0, Sk.n)(this, wk), (0, Sk.n)(this, Hk, kk._DefaultMinimumThickness)), this.maximumThickness = ((0, Sk.n)(this, Jk), (0, Sk.n)(this, xk, kk._DefaultMaximumThickness)), this.indexOfRefraction = ((0, Sk.n)(this, Pk), (0, Sk.n)(this, Kk, kk._DefaultIndexOfRefraction)), this._texture = ((0, Sk.n)(this, Qk), null), Ik.set(this, (0, Sk.n)(this, sk, null)), this._thicknessTexture = ((0, Sk.n)(this, Vk), null), Xk.set(this, (0, Sk.n)(this, zk, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Sk.n)(this, Ek), this._internalMarkAllSubMeshesAsTexturesDirty = Tk._dirtyCallbacks[1]
        }
        isReadyForSubMesh(kk, Fk) {
          if (!this._isEnabled) return !0;
          if (kk._areTexturesDirty && Fk.texturesEnabled) {
            if (this._texture && rk.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && rk.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(kk, Fk) {
          this._isEnabled ? (kk.IRIDESCENCE = !0, kk._areTexturesDirty && Fk.texturesEnabled && (this._texture && rk.d.IridescenceTextureEnabled ? (0, Mk.P)(this._texture, kk, "IRIDESCENCE_TEXTURE") : kk.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && rk.d.IridescenceTextureEnabled ? (0, Mk.P)(this._thicknessTexture, kk, "IRIDESCENCE_THICKNESS_TEXTURE") : kk.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (kk.IRIDESCENCE = !1, kk.IRIDESCENCE_TEXTURE = !1, kk.IRIDESCENCE_THICKNESS_TEXTURE = !1, kk.IRIDESCENCE_TEXTUREDIRECTUV = 0, kk.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(kk, Fk) {
          if (!this._isEnabled) return;
          const Ik = this._material.isFrozen;
          kk.useUbo && Ik && kk.isSync || ((this._texture || this._thicknessTexture) && rk.d.IridescenceTextureEnabled && (kk.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, Mk.v)(this._texture, kk, "iridescence"), this._thicknessTexture && (0, Mk.v)(this._thicknessTexture, kk, "iridescenceThickness")), kk.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), Fk.texturesEnabled && (this._texture && rk.d.IridescenceTextureEnabled && kk.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && rk.d.IridescenceTextureEnabled && kk.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
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
        addFallbacks(kk, Fk, Ik) {
          return kk.IRIDESCENCE && Fk.addFallback(Ik++, "IRIDESCENCE"), Ik
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
      }, Fk = new WeakMap, Ik = new WeakMap, Xk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(tk[Symbol.metadata] ?? null) : void 0;
        Tk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], ik = [(0, vk.J)()], yk = [(0, vk.J)()], lk = [(0, vk.J)()], ak = [(0, vk.J)()], qk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Lk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], (0, Sk.j)(kk, null, Tk, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isEnabled" in kk,
            get: kk => kk.isEnabled,
            set: (kk, Fk) => {
              kk.isEnabled = Fk
            }
          },
          metadata: Fk
        }, Zk, jk), (0, Sk.j)(kk, null, qk, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: kk => "texture" in kk,
            get: kk => kk.texture,
            set: (kk, Fk) => {
              kk.texture = Fk
            }
          },
          metadata: Fk
        }, sk, Vk), (0, Sk.j)(kk, null, Lk, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "thicknessTexture" in kk,
            get: kk => kk.thicknessTexture,
            set: (kk, Fk) => {
              kk.thicknessTexture = Fk
            }
          },
          metadata: Fk
        }, zk, Ek), (0, Sk.j)(null, null, ik, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensity" in kk,
            get: kk => kk.intensity,
            set: (kk, Fk) => {
              kk.intensity = Fk
            }
          },
          metadata: Fk
        }, ek, wk), (0, Sk.j)(null, null, yk, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: kk => "minimumThickness" in kk,
            get: kk => kk.minimumThickness,
            set: (kk, Fk) => {
              kk.minimumThickness = Fk
            }
          },
          metadata: Fk
        }, Hk, Jk), (0, Sk.j)(null, null, lk, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: kk => "maximumThickness" in kk,
            get: kk => kk.maximumThickness,
            set: (kk, Fk) => {
              kk.maximumThickness = Fk
            }
          },
          metadata: Fk
        }, xk, Pk), (0, Sk.j)(null, null, ak, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: kk => "indexOfRefraction" in kk,
            get: kk => kk.indexOfRefraction,
            set: (kk, Fk) => {
              kk.indexOfRefraction = Fk
            }
          },
          metadata: Fk
        }, Kk, Qk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk._DefaultMinimumThickness = 100, kk._DefaultMaximumThickness = 400, kk._DefaultIndexOfRefraction = 1.3, kk
    })();
    class TF extends Wk.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let iF = (() => {
      var kk, Fk, Ik, Xk;
      let Tk, ik, yk, lk, ak, qk = fk.b,
        Lk = [],
        tk = [],
        Zk = [],
        jk = [],
        ek = [],
        wk = [],
        Hk = [],
        Jk = [],
        xk = [],
        Pk = [];
      return kk = class extends qk {
        get isEnabled() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set isEnabled(kk) {
          (0, Sk.f)(this, Fk, kk, "f")
        }
        set angle(kk) {
          this.direction.x = Math.cos(kk), this.direction.y = Math.sin(kk)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, Sk.e)(this, Ik, "f")
        }
        set texture(kk) {
          (0, Sk.f)(this, Ik, kk, "f")
        }
        get legacy() {
          return (0, Sk.e)(this, Xk, "f")
        }
        set legacy(kk) {
          (0, Sk.f)(this, Xk, kk, "f")
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
          let Tk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(kk, "PBRAnisotropic", 110, new TF, Tk), this._isEnabled = !1, Fk.set(this, (0, Sk.n)(this, Lk, !1)), this.intensity = ((0, Sk.n)(this, tk), (0, Sk.n)(this, Zk, 1)), this.direction = ((0, Sk.n)(this, jk), (0, Sk.n)(this, ek, new Nk.p(1, 0))), this._texture = ((0, Sk.n)(this, wk), null), Ik.set(this, (0, Sk.n)(this, Hk, null)), this._legacy = ((0, Sk.n)(this, Jk), !1), Xk.set(this, (0, Sk.n)(this, xk, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Sk.n)(this, Pk), this._internalMarkAllSubMeshesAsTexturesDirty = kk._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = kk._dirtyCallbacks[16]
        }
        isReadyForSubMesh(kk, Fk) {
          return !this._isEnabled || !(kk._areTexturesDirty && Fk.texturesEnabled && this._texture && rk.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(kk, Fk, Ik) {
          this._isEnabled ? (kk.ANISOTROPIC = this._isEnabled, this._isEnabled && !Ik.isVerticesDataPresent(ck.l.TangentKind) && (kk._needUVs = !0, kk.MAINUV1 = !0), kk._areTexturesDirty && Fk.texturesEnabled && (this._texture && rk.d.AnisotropicTextureEnabled ? (0, Mk.P)(this._texture, kk, "ANISOTROPIC_TEXTURE") : kk.ANISOTROPIC_TEXTURE = !1), kk._areMiscDirty && (kk.ANISOTROPIC_LEGACY = this._legacy)) : (kk.ANISOTROPIC = !1, kk.ANISOTROPIC_TEXTURE = !1, kk.ANISOTROPIC_TEXTUREDIRECTUV = 0, kk.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(kk, Fk) {
          if (!this._isEnabled) return;
          const Ik = this._material.isFrozen;
          kk.useUbo && Ik && kk.isSync || (this._texture && rk.d.AnisotropicTextureEnabled && (kk.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Mk.v)(this._texture, kk, "anisotropy")), kk.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), Fk.texturesEnabled && this._texture && rk.d.AnisotropicTextureEnabled && kk.setTexture("anisotropySampler", this._texture)
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
        addFallbacks(kk, Fk, Ik) {
          return kk.ANISOTROPIC && Fk.addFallback(Ik++, "ANISOTROPIC"), Ik
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
        parse(kk, Fk, Ik) {
          super.parse(kk, Fk, Ik), void 0 === kk.legacy && (this.legacy = !0)
        }
      }, Fk = new WeakMap, Ik = new WeakMap, Xk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(qk[Symbol.metadata] ?? null) : void 0;
        Tk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], ik = [(0, vk.J)()], yk = [(0, vk.F)()], lk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], ak = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], (0, Sk.j)(kk, null, Tk, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isEnabled" in kk,
            get: kk => kk.isEnabled,
            set: (kk, Fk) => {
              kk.isEnabled = Fk
            }
          },
          metadata: Fk
        }, Lk, tk), (0, Sk.j)(kk, null, lk, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: kk => "texture" in kk,
            get: kk => kk.texture,
            set: (kk, Fk) => {
              kk.texture = Fk
            }
          },
          metadata: Fk
        }, Hk, Jk), (0, Sk.j)(kk, null, ak, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: kk => "legacy" in kk,
            get: kk => kk.legacy,
            set: (kk, Fk) => {
              kk.legacy = Fk
            }
          },
          metadata: Fk
        }, xk, Pk), (0, Sk.j)(null, null, ik, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensity" in kk,
            get: kk => kk.intensity,
            set: (kk, Fk) => {
              kk.intensity = Fk
            }
          },
          metadata: Fk
        }, Zk, jk), (0, Sk.j)(null, null, yk, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: kk => "direction" in kk,
            get: kk => kk.direction,
            set: (kk, Fk) => {
              kk.direction = Fk
            }
          },
          metadata: Fk
        }, ek, wk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk
    })();
    class yF extends Wk.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let lF = (() => {
      var kk, Fk, Ik, Xk, Tk, ik, yk, lk;
      let ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk = fk.b,
        xk = [],
        Pk = [],
        Kk = [],
        Qk = [],
        sk = [],
        Vk = [],
        zk = [],
        Ek = [],
        Ok = [],
        nk = [],
        Gk = [],
        pk = [],
        uk = [],
        bk = [],
        Rk = [],
        Uk = [],
        Ck = [],
        Nk = [];
      return kk = class extends Jk {
        get isEnabled() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set isEnabled(kk) {
          (0, Sk.f)(this, Fk, kk, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, Sk.e)(this, Ik, "f")
        }
        set linkSheenWithAlbedo(kk) {
          (0, Sk.f)(this, Ik, kk, "f")
        }
        get texture() {
          return (0, Sk.e)(this, Xk, "f")
        }
        set texture(kk) {
          (0, Sk.f)(this, Xk, kk, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Sk.e)(this, Tk, "f")
        }
        set useRoughnessFromMainTexture(kk) {
          (0, Sk.f)(this, Tk, kk, "f")
        }
        get roughness() {
          return (0, Sk.e)(this, ik, "f")
        }
        set roughness(kk) {
          (0, Sk.f)(this, ik, kk, "f")
        }
        get textureRoughness() {
          return (0, Sk.e)(this, yk, "f")
        }
        set textureRoughness(kk) {
          (0, Sk.f)(this, yk, kk, "f")
        }
        get albedoScaling() {
          return (0, Sk.e)(this, lk, "f")
        }
        set albedoScaling(kk) {
          (0, Sk.f)(this, lk, kk, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(kk) {
          let ak = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(kk, "Sheen", 120, new yF, ak), this._isEnabled = !1, Fk.set(this, (0, Sk.n)(this, xk, !1)), this._linkSheenWithAlbedo = ((0, Sk.n)(this, Pk), !1), Ik.set(this, (0, Sk.n)(this, Kk, !1)), this.intensity = ((0, Sk.n)(this, Qk), (0, Sk.n)(this, sk, 1)), this.color = ((0, Sk.n)(this, Vk), (0, Sk.n)(this, zk, Ak.e.White())), this._texture = ((0, Sk.n)(this, Ek), null), Xk.set(this, (0, Sk.n)(this, Ok, null)), this._useRoughnessFromMainTexture = ((0, Sk.n)(this, nk), !0), Tk.set(this, (0, Sk.n)(this, Gk, !0)), this._roughness = ((0, Sk.n)(this, pk), null), ik.set(this, (0, Sk.n)(this, uk, null)), this._textureRoughness = ((0, Sk.n)(this, bk), null), yk.set(this, (0, Sk.n)(this, Rk, null)), this._albedoScaling = ((0, Sk.n)(this, Uk), !1), lk.set(this, (0, Sk.n)(this, Ck, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Sk.n)(this, Nk), this._internalMarkAllSubMeshesAsTexturesDirty = kk._dirtyCallbacks[1]
        }
        isReadyForSubMesh(kk, Fk) {
          if (!this._isEnabled) return !0;
          if (kk._areTexturesDirty && Fk.texturesEnabled) {
            if (this._texture && rk.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && rk.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(kk, Fk) {
          this._isEnabled ? (kk.SHEEN = !0, kk.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, kk.SHEEN_ROUGHNESS = null !== this._roughness, kk.SHEEN_ALBEDOSCALING = this._albedoScaling, kk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, kk._areTexturesDirty && Fk.texturesEnabled && (this._texture && rk.d.SheenTextureEnabled ? ((0, Mk.P)(this._texture, kk, "SHEEN_TEXTURE"), kk.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : kk.SHEEN_TEXTURE = !1, this._textureRoughness && rk.d.SheenTextureEnabled ? (0, Mk.P)(this._textureRoughness, kk, "SHEEN_TEXTURE_ROUGHNESS") : kk.SHEEN_TEXTURE_ROUGHNESS = !1)) : (kk.SHEEN = !1, kk.SHEEN_TEXTURE = !1, kk.SHEEN_TEXTURE_ROUGHNESS = !1, kk.SHEEN_LINKWITHALBEDO = !1, kk.SHEEN_ROUGHNESS = !1, kk.SHEEN_ALBEDOSCALING = !1, kk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, kk.SHEEN_GAMMATEXTURE = !1, kk.SHEEN_TEXTUREDIRECTUV = 0, kk.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(kk, Fk, Ik, Xk) {
          if (!this._isEnabled) return;
          const Tk = Xk.materialDefines,
            ik = this._material.isFrozen;
          kk.useUbo && ik && kk.isSync || ((this._texture || this._textureRoughness) && rk.d.SheenTextureEnabled && (kk.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Mk.v)(this._texture, kk, "sheen"), this._textureRoughness && !Tk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Mk.v)(this._textureRoughness, kk, "sheenRoughness")), kk.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && kk.updateFloat("vSheenRoughness", this._roughness)), Fk.texturesEnabled && (this._texture && rk.d.SheenTextureEnabled && kk.setTexture("sheenSampler", this._texture), this._textureRoughness && !Tk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && rk.d.SheenTextureEnabled && kk.setTexture("sheenRoughnessSampler", this._textureRoughness))
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
        addFallbacks(kk, Fk, Ik) {
          return kk.SHEEN && Fk.addFallback(Ik++, "SHEEN"), Ik
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
      }, Fk = new WeakMap, Ik = new WeakMap, Xk = new WeakMap, Tk = new WeakMap, ik = new WeakMap, yk = new WeakMap, lk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Jk[Symbol.metadata] ?? null) : void 0;
        ak = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], qk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Lk = [(0, vk.J)()], tk = [(0, vk.n)()], Zk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], jk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], ek = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], wk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Hk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], (0, Sk.j)(kk, null, ak, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isEnabled" in kk,
            get: kk => kk.isEnabled,
            set: (kk, Fk) => {
              kk.isEnabled = Fk
            }
          },
          metadata: Fk
        }, xk, Pk), (0, Sk.j)(kk, null, qk, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: kk => "linkSheenWithAlbedo" in kk,
            get: kk => kk.linkSheenWithAlbedo,
            set: (kk, Fk) => {
              kk.linkSheenWithAlbedo = Fk
            }
          },
          metadata: Fk
        }, Kk, Qk), (0, Sk.j)(kk, null, Zk, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: kk => "texture" in kk,
            get: kk => kk.texture,
            set: (kk, Fk) => {
              kk.texture = Fk
            }
          },
          metadata: Fk
        }, Ok, nk), (0, Sk.j)(kk, null, jk, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "useRoughnessFromMainTexture" in kk,
            get: kk => kk.useRoughnessFromMainTexture,
            set: (kk, Fk) => {
              kk.useRoughnessFromMainTexture = Fk
            }
          },
          metadata: Fk
        }, Gk, pk), (0, Sk.j)(kk, null, ek, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: kk => "roughness" in kk,
            get: kk => kk.roughness,
            set: (kk, Fk) => {
              kk.roughness = Fk
            }
          },
          metadata: Fk
        }, uk, bk), (0, Sk.j)(kk, null, wk, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: kk => "textureRoughness" in kk,
            get: kk => kk.textureRoughness,
            set: (kk, Fk) => {
              kk.textureRoughness = Fk
            }
          },
          metadata: Fk
        }, Rk, Uk), (0, Sk.j)(kk, null, Hk, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: kk => "albedoScaling" in kk,
            get: kk => kk.albedoScaling,
            set: (kk, Fk) => {
              kk.albedoScaling = Fk
            }
          },
          metadata: Fk
        }, Ck, Nk), (0, Sk.j)(null, null, Lk, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensity" in kk,
            get: kk => kk.intensity,
            set: (kk, Fk) => {
              kk.intensity = Fk
            }
          },
          metadata: Fk
        }, sk, Vk), (0, Sk.j)(null, null, tk, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: kk => "color" in kk,
            get: kk => kk.color,
            set: (kk, Fk) => {
              kk.color = Fk
            }
          },
          metadata: Fk
        }, zk, Ek), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk
    })();
    class aF extends Wk.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let qF = (() => {
      var kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk;
      let Jk, xk, Pk, Kk, Qk, sk, Vk, zk, Ek, Ok, nk, Gk, pk, uk, bk, Rk, Uk, Ck, ck, Wk, Bk, dk, Yk, gk, mk, hk, Dk, kF, FF, IF, XF = fk.b,
        TF = [],
        iF = [],
        yF = [],
        lF = [],
        qF = [],
        LF = [],
        tF = [],
        ZF = [],
        jF = [],
        eF = [],
        wF = [],
        HF = [],
        JF = [],
        xF = [],
        PF = [],
        KF = [],
        QF = [],
        sF = [],
        VF = [],
        zF = [],
        SF = [],
        oF = [],
        vF = [],
        EF = [],
        OF = [],
        nF = [],
        GF = [],
        pF = [],
        uF = [],
        bF = [],
        RF = [],
        UF = [],
        CF = [],
        NF = [],
        cF = [],
        WF = [],
        fF = [],
        BF = [],
        dF = [],
        YF = [],
        AF = [],
        gF = [],
        mF = [],
        hF = [],
        rF = [],
        DF = [],
        MF = [],
        kI = [],
        FI = [],
        II = [],
        XI = [],
        TI = [],
        iI = [],
        yI = [],
        lI = [],
        aI = [],
        qI = [],
        LI = [],
        tI = [],
        ZI = [];
      return kk = class extends XF {
        get isRefractionEnabled() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set isRefractionEnabled(kk) {
          (0, Sk.f)(this, Fk, kk, "f")
        }
        get isTranslucencyEnabled() {
          return (0, Sk.e)(this, Ik, "f")
        }
        set isTranslucencyEnabled(kk) {
          (0, Sk.f)(this, Ik, kk, "f")
        }
        get isDispersionEnabled() {
          return (0, Sk.e)(this, Xk, "f")
        }
        set isDispersionEnabled(kk) {
          (0, Sk.f)(this, Xk, kk, "f")
        }
        get isScatteringEnabled() {
          return (0, Sk.e)(this, Tk, "f")
        }
        set isScatteringEnabled(kk) {
          (0, Sk.f)(this, Tk, kk, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(kk) {
          this._scene.enableSubSurfaceForPrePass() && kk && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(kk))
        }
        get useAlbedoToTintRefraction() {
          return (0, Sk.e)(this, ik, "f")
        }
        set useAlbedoToTintRefraction(kk) {
          (0, Sk.f)(this, ik, kk, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, Sk.e)(this, yk, "f")
        }
        set useAlbedoToTintTranslucency(kk) {
          (0, Sk.f)(this, yk, kk, "f")
        }
        get thicknessTexture() {
          return (0, Sk.e)(this, lk, "f")
        }
        set thicknessTexture(kk) {
          (0, Sk.f)(this, lk, kk, "f")
        }
        get refractionTexture() {
          return (0, Sk.e)(this, ak, "f")
        }
        set refractionTexture(kk) {
          (0, Sk.f)(this, ak, kk, "f")
        }
        get indexOfRefraction() {
          return (0, Sk.e)(this, qk, "f")
        }
        set indexOfRefraction(kk) {
          (0, Sk.f)(this, qk, kk, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(kk) {
          const Fk = kk >= 1 ? kk : -1;
          this._volumeIndexOfRefraction !== Fk && (this._volumeIndexOfRefraction = Fk, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, Sk.e)(this, Lk, "f")
        }
        set invertRefractionY(kk) {
          (0, Sk.f)(this, Lk, kk, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, Sk.e)(this, tk, "f")
        }
        set linkRefractionWithTransparency(kk) {
          (0, Sk.f)(this, tk, kk, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, Sk.e)(this, Zk, "f")
        }
        set useMaskFromThicknessTexture(kk) {
          (0, Sk.f)(this, Zk, kk, "f")
        }
        get refractionIntensityTexture() {
          return (0, Sk.e)(this, jk, "f")
        }
        set refractionIntensityTexture(kk) {
          (0, Sk.f)(this, jk, kk, "f")
        }
        get translucencyIntensityTexture() {
          return (0, Sk.e)(this, ek, "f")
        }
        set translucencyIntensityTexture(kk) {
          (0, Sk.f)(this, ek, kk, "f")
        }
        get translucencyColorTexture() {
          return (0, Sk.e)(this, wk, "f")
        }
        set translucencyColorTexture(kk) {
          (0, Sk.f)(this, wk, kk, "f")
        }
        get useGltfStyleTextures() {
          return (0, Sk.e)(this, Hk, "f")
        }
        set useGltfStyleTextures(kk) {
          (0, Sk.f)(this, Hk, kk, "f")
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
        constructor(Jk) {
          let xk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Jk, "PBRSubSurface", 130, new aF, xk), this._isRefractionEnabled = !1, Fk.set(this, (0, Sk.n)(this, TF, !1)), this._isTranslucencyEnabled = ((0, Sk.n)(this, iF), !1), Ik.set(this, (0, Sk.n)(this, yF, !1)), this._isDispersionEnabled = ((0, Sk.n)(this, lF), !1), Xk.set(this, (0, Sk.n)(this, qF, !1)), this._isScatteringEnabled = ((0, Sk.n)(this, LF), !1), Tk.set(this, (0, Sk.n)(this, tF, !1)), this._scatteringDiffusionProfileIndex = ((0, Sk.n)(this, ZF), (0, Sk.n)(this, jF, 0)), this.refractionIntensity = ((0, Sk.n)(this, eF), (0, Sk.n)(this, wF, 1)), this.translucencyIntensity = ((0, Sk.n)(this, HF), (0, Sk.n)(this, JF, 1)), this._useAlbedoToTintRefraction = ((0, Sk.n)(this, xF), !1), ik.set(this, (0, Sk.n)(this, PF, !1)), this._useAlbedoToTintTranslucency = ((0, Sk.n)(this, KF), !1), yk.set(this, (0, Sk.n)(this, QF, !1)), this._thicknessTexture = ((0, Sk.n)(this, sF), null), lk.set(this, (0, Sk.n)(this, VF, null)), this._refractionTexture = ((0, Sk.n)(this, zF), null), ak.set(this, (0, Sk.n)(this, SF, null)), this._indexOfRefraction = ((0, Sk.n)(this, oF), 1.5), qk.set(this, (0, Sk.n)(this, vF, 1.5)), this._volumeIndexOfRefraction = ((0, Sk.n)(this, EF), (0, Sk.n)(this, OF, -1)), this._invertRefractionY = ((0, Sk.n)(this, nF), !1), Lk.set(this, (0, Sk.n)(this, GF, !1)), this._linkRefractionWithTransparency = ((0, Sk.n)(this, pF), !1), tk.set(this, (0, Sk.n)(this, uF, !1)), this.minimumThickness = ((0, Sk.n)(this, bF), (0, Sk.n)(this, RF, 0)), this.maximumThickness = ((0, Sk.n)(this, UF), (0, Sk.n)(this, CF, 1)), this.useThicknessAsDepth = ((0, Sk.n)(this, NF), (0, Sk.n)(this, cF, !1)), this.tintColor = ((0, Sk.n)(this, WF), (0, Sk.n)(this, fF, Ak.e.White())), this.tintColorAtDistance = ((0, Sk.n)(this, BF), (0, Sk.n)(this, dF, 1)), this.dispersion = ((0, Sk.n)(this, YF), (0, Sk.n)(this, AF, 0)), this.diffusionDistance = ((0, Sk.n)(this, gF), (0, Sk.n)(this, mF, Ak.e.White())), this._useMaskFromThicknessTexture = ((0, Sk.n)(this, hF), !1), Zk.set(this, (0, Sk.n)(this, rF, !1)), this._refractionIntensityTexture = ((0, Sk.n)(this, DF), null), jk.set(this, (0, Sk.n)(this, MF, null)), this._translucencyIntensityTexture = ((0, Sk.n)(this, kI), null), ek.set(this, (0, Sk.n)(this, FI, null)), this.translucencyColor = ((0, Sk.n)(this, II), (0, Sk.n)(this, XI, null)), this._translucencyColorTexture = ((0, Sk.n)(this, TI), null), wk.set(this, (0, Sk.n)(this, iI, null)), this._useGltfStyleTextures = ((0, Sk.n)(this, yI), !0), Hk.set(this, (0, Sk.n)(this, lI, !0)), this.applyAlbedoAfterSubSurface = ((0, Sk.n)(this, aI), (0, Sk.n)(this, qI, kk.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, Sk.n)(this, LI), (0, Sk.n)(this, tI, kk.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, Sk.n)(this, ZI), this._scene = Jk.mG(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = Jk._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = Jk._dirtyCallbacks[32]
        }
        isReadyForSubMesh(kk, Fk) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (kk._areTexturesDirty && Fk.texturesEnabled) {
            if (this._thicknessTexture && rk.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && rk.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && rk.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && rk.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const kk = this._getRefractionTexture(Fk);
            if (kk && rk.d.RefractionTextureEnabled && !kk.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(kk, Fk) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return kk.SUBSURFACE = !1, kk.SS_DISPERSION = !1, kk.SS_TRANSLUCENCY = !1, kk.SS_SCATTERING = !1, kk.SS_REFRACTION = !1, kk.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_THICKNESSANDMASK_TEXTURE = !1, kk.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, kk.SS_HAS_THICKNESS = !1, kk.SS_REFRACTIONINTENSITY_TEXTURE = !1, kk.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, kk.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, kk.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, kk.SS_REFRACTIONMAP_3D = !1, kk.SS_REFRACTIONMAP_OPPOSITEZ = !1, kk.SS_LODINREFRACTIONALPHA = !1, kk.SS_GAMMAREFRACTION = !1, kk.SS_RGBDREFRACTION = !1, kk.SS_LINEARSPECULARREFRACTION = !1, kk.SS_LINKREFRACTIONTOTRANSPARENCY = !1, kk.SS_ALBEDOFORREFRACTIONTINT = !1, kk.SS_ALBEDOFORTRANSLUCENCYTINT = !1, kk.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, kk.SS_USE_THICKNESS_AS_DEPTH = !1, kk.SS_USE_GLTF_TEXTURES = !1, kk.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, kk.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, kk.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(kk.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (kk._areTexturesDirty) {
            if (kk.SUBSURFACE = !0, kk.SS_DISPERSION = this._isDispersionEnabled, kk.SS_TRANSLUCENCY = this._isTranslucencyEnabled, kk.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, kk.SS_SCATTERING = this._isScatteringEnabled, kk.SS_THICKNESSANDMASK_TEXTURE = !1, kk.SS_REFRACTIONINTENSITY_TEXTURE = !1, kk.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, kk.SS_HAS_THICKNESS = !1, kk.SS_USE_GLTF_TEXTURES = !1, kk.SS_REFRACTION = !1, kk.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_REFRACTIONMAP_3D = !1, kk.SS_GAMMAREFRACTION = !1, kk.SS_RGBDREFRACTION = !1, kk.SS_LINEARSPECULARREFRACTION = !1, kk.SS_REFRACTIONMAP_OPPOSITEZ = !1, kk.SS_LODINREFRACTIONALPHA = !1, kk.SS_LINKREFRACTIONTOTRANSPARENCY = !1, kk.SS_ALBEDOFORREFRACTIONTINT = !1, kk.SS_ALBEDOFORTRANSLUCENCYTINT = !1, kk.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, kk.SS_USE_THICKNESS_AS_DEPTH = !1, kk.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, kk.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, kk._areTexturesDirty && Fk.texturesEnabled && (this._thicknessTexture && rk.d.ThicknessTextureEnabled && (0, Mk.P)(this._thicknessTexture, kk, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && rk.d.RefractionIntensityTextureEnabled && (0, Mk.P)(this._refractionIntensityTexture, kk, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && rk.d.TranslucencyIntensityTextureEnabled && (0, Mk.P)(this._translucencyIntensityTexture, kk, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && rk.d.TranslucencyColorTextureEnabled && ((0, Mk.P)(this._translucencyColorTexture, kk, "SS_TRANSLUCENCYCOLOR_TEXTURE"), kk.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), kk.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, kk.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, kk.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, kk.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && Fk.texturesEnabled) {
              const Ik = this._getRefractionTexture(Fk);
              Ik && rk.d.RefractionTextureEnabled && (kk.SS_REFRACTION = !0, kk.SS_REFRACTIONMAP_3D = Ik.isCube, kk.SS_GAMMAREFRACTION = Ik.gammaSpace, kk.SS_RGBDREFRACTION = Ik.isRGBD, kk.SS_LINEARSPECULARREFRACTION = Ik.linearSpecularLOD, kk.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && Ik.isCube ? !Ik.invertZ : Ik.invertZ, kk.SS_LODINREFRACTIONALPHA = Ik.lodLevelInAlpha, kk.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, kk.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, kk.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = Ik.isCube && Ik.boundingBoxSize, kk.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (kk.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(kk, Fk, Ik, Xk) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) kk.updateFloat2("vThicknessParam", 0, 0);
            else {
              Xk.getRenderingMesh().getWorldMatrix().decompose(Nk.l.Ge[0]);
              const Fk = Math.max(Math.abs(Nk.l.Ge[0].x), Math.abs(Nk.l.Ge[0].y), Math.abs(Nk.l.Ge[0].z));
              kk.updateFloat2("vThicknessParam", this.minimumThickness * Fk, (this.maximumThickness - this.minimumThickness) * Fk)
            }
        }
        bindForSubMesh(kk, Fk, Ik, Xk) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Tk = Xk.materialDefines,
            ik = this._material.isFrozen,
            yk = this._material.realTimeFiltering,
            lk = Tk.LODBASEDMICROSFURACE,
            ak = this._getRefractionTexture(Fk);
          if (!kk.useUbo || !ik || !kk.isSync) {
            if (this._thicknessTexture && rk.d.ThicknessTextureEnabled && (kk.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Mk.v)(this._thicknessTexture, kk, "thickness")), this._refractionIntensityTexture && rk.d.RefractionIntensityTextureEnabled && Tk.SS_REFRACTIONINTENSITY_TEXTURE && (kk.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, Mk.v)(this._refractionIntensityTexture, kk, "refractionIntensity")), this._translucencyColorTexture && rk.d.TranslucencyColorTextureEnabled && Tk.SS_TRANSLUCENCYCOLOR_TEXTURE && (kk.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, Mk.v)(this._translucencyColorTexture, kk, "translucencyColor")), this._translucencyIntensityTexture && rk.d.TranslucencyIntensityTextureEnabled && Tk.SS_TRANSLUCENCYINTENSITY_TEXTURE && (kk.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, Mk.v)(this._translucencyIntensityTexture, kk, "translucencyIntensity")), ak && rk.d.RefractionTextureEnabled) {
              kk.I9("refractionMatrix", ak.getRefractionTextureMatrix());
              let Fk = 1;
              ak.isCube || ak.depth && (Fk = ak.depth);
              const Ik = ak.getSize().width,
                Xk = this.volumeIndexOfRefraction;
              if (kk.updateFloat4("vRefractionInfos", ak.level, 1 / Xk, Fk, this._invertRefractionY ? -1 : 1), kk.updateFloat4("vRefractionMicrosurfaceInfos", Ik, ak.lodGenerationScale, ak.lodGenerationOffset, 1 / this.indexOfRefraction), yk && kk.updateFloat2("vRefractionFilteringInfo", Ik, Math.log2(Ik)), ak.boundingBoxSize) {
                const Fk = ak;
                kk.updateVector3("vRefractionPosition", Fk.boundingBoxPosition), kk.updateVector3("vRefractionSize", Fk.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && kk.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), kk.updateColor3("vDiffusionDistance", this.diffusionDistance), kk.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), kk.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), kk.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), kk.updateFloat("dispersion", this.dispersion)
          }
          Fk.texturesEnabled && (this._thicknessTexture && rk.d.ThicknessTextureEnabled && kk.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && rk.d.RefractionIntensityTextureEnabled && Tk.SS_REFRACTIONINTENSITY_TEXTURE && kk.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && rk.d.TranslucencyIntensityTextureEnabled && Tk.SS_TRANSLUCENCYINTENSITY_TEXTURE && kk.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && rk.d.TranslucencyColorTextureEnabled && Tk.SS_TRANSLUCENCYCOLOR_TEXTURE && kk.setTexture("translucencyColorSampler", this._translucencyColorTexture), ak && rk.d.RefractionTextureEnabled && (lk ? kk.setTexture("refractionSampler", ak) : (kk.setTexture("refractionSampler", ak._lodTextureMid || ak), kk.setTexture("refractionSamplerLow", ak._lodTextureLow || ak), kk.setTexture("refractionSamplerHigh", ak._lodTextureHigh || ak))))
        }
        _getRefractionTexture(kk) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? kk.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(kk) {
          rk.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && kk.push(this._refractionTexture)
        }
        hasTexture(kk) {
          return this._thicknessTexture === kk || (this._refractionTexture === kk || (this._refractionIntensityTexture === kk || (this._translucencyIntensityTexture === kk || this._translucencyColorTexture === kk)))
        }
        hasRenderTargetTextures() {
          return !!(rk.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
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
        addFallbacks(kk, Fk, Ik) {
          return kk.SS_SCATTERING && Fk.addFallback(Ik++, "SS_SCATTERING"), kk.SS_TRANSLUCENCY && Fk.addFallback(Ik++, "SS_TRANSLUCENCY"), Ik
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
      }, Fk = new WeakMap, Ik = new WeakMap, Xk = new WeakMap, Tk = new WeakMap, ik = new WeakMap, yk = new WeakMap, lk = new WeakMap, ak = new WeakMap, qk = new WeakMap, Lk = new WeakMap, tk = new WeakMap, Zk = new WeakMap, jk = new WeakMap, ek = new WeakMap, wk = new WeakMap, Hk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(XF[Symbol.metadata] ?? null) : void 0;
        Jk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], xk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Pk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Kk = [(0, vk.J)(), (0, vk.e)("_markScenePrePassDirty")], Qk = [(0, vk.J)()], sk = [(0, vk.J)()], Vk = [(0, vk.J)()], zk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Ek = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Ok = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], nk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Gk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], pk = [(0, vk.J)()], uk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], bk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], Rk = [(0, vk.J)()], Uk = [(0, vk.J)()], Ck = [(0, vk.J)()], ck = [(0, vk.n)()], Wk = [(0, vk.J)()], Bk = [(0, vk.J)()], dk = [(0, vk.n)()], Yk = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], gk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], mk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], hk = [(0, vk.n)()], Dk = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], kF = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], FF = [(0, vk.J)()], IF = [(0, vk.J)()], (0, Sk.j)(kk, null, Jk, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isRefractionEnabled" in kk,
            get: kk => kk.isRefractionEnabled,
            set: (kk, Fk) => {
              kk.isRefractionEnabled = Fk
            }
          },
          metadata: Fk
        }, TF, iF), (0, Sk.j)(kk, null, xk, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isTranslucencyEnabled" in kk,
            get: kk => kk.isTranslucencyEnabled,
            set: (kk, Fk) => {
              kk.isTranslucencyEnabled = Fk
            }
          },
          metadata: Fk
        }, yF, lF), (0, Sk.j)(kk, null, Pk, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isDispersionEnabled" in kk,
            get: kk => kk.isDispersionEnabled,
            set: (kk, Fk) => {
              kk.isDispersionEnabled = Fk
            }
          },
          metadata: Fk
        }, qF, LF), (0, Sk.j)(kk, null, Kk, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isScatteringEnabled" in kk,
            get: kk => kk.isScatteringEnabled,
            set: (kk, Fk) => {
              kk.isScatteringEnabled = Fk
            }
          },
          metadata: Fk
        }, tF, ZF), (0, Sk.j)(kk, null, zk, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAlbedoToTintRefraction" in kk,
            get: kk => kk.useAlbedoToTintRefraction,
            set: (kk, Fk) => {
              kk.useAlbedoToTintRefraction = Fk
            }
          },
          metadata: Fk
        }, PF, KF), (0, Sk.j)(kk, null, Ek, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAlbedoToTintTranslucency" in kk,
            get: kk => kk.useAlbedoToTintTranslucency,
            set: (kk, Fk) => {
              kk.useAlbedoToTintTranslucency = Fk
            }
          },
          metadata: Fk
        }, QF, sF), (0, Sk.j)(kk, null, Ok, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "thicknessTexture" in kk,
            get: kk => kk.thicknessTexture,
            set: (kk, Fk) => {
              kk.thicknessTexture = Fk
            }
          },
          metadata: Fk
        }, VF, zF), (0, Sk.j)(kk, null, nk, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "refractionTexture" in kk,
            get: kk => kk.refractionTexture,
            set: (kk, Fk) => {
              kk.refractionTexture = Fk
            }
          },
          metadata: Fk
        }, SF, oF), (0, Sk.j)(kk, null, Gk, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: kk => "indexOfRefraction" in kk,
            get: kk => kk.indexOfRefraction,
            set: (kk, Fk) => {
              kk.indexOfRefraction = Fk
            }
          },
          metadata: Fk
        }, vF, EF), (0, Sk.j)(kk, null, uk, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: kk => "invertRefractionY" in kk,
            get: kk => kk.invertRefractionY,
            set: (kk, Fk) => {
              kk.invertRefractionY = Fk
            }
          },
          metadata: Fk
        }, GF, pF), (0, Sk.j)(kk, null, bk, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: kk => "linkRefractionWithTransparency" in kk,
            get: kk => kk.linkRefractionWithTransparency,
            set: (kk, Fk) => {
              kk.linkRefractionWithTransparency = Fk
            }
          },
          metadata: Fk
        }, uF, bF), (0, Sk.j)(kk, null, Yk, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "useMaskFromThicknessTexture" in kk,
            get: kk => kk.useMaskFromThicknessTexture,
            set: (kk, Fk) => {
              kk.useMaskFromThicknessTexture = Fk
            }
          },
          metadata: Fk
        }, rF, DF), (0, Sk.j)(kk, null, gk, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "refractionIntensityTexture" in kk,
            get: kk => kk.refractionIntensityTexture,
            set: (kk, Fk) => {
              kk.refractionIntensityTexture = Fk
            }
          },
          metadata: Fk
        }, MF, kI), (0, Sk.j)(kk, null, mk, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "translucencyIntensityTexture" in kk,
            get: kk => kk.translucencyIntensityTexture,
            set: (kk, Fk) => {
              kk.translucencyIntensityTexture = Fk
            }
          },
          metadata: Fk
        }, FI, II), (0, Sk.j)(kk, null, Dk, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "translucencyColorTexture" in kk,
            get: kk => kk.translucencyColorTexture,
            set: (kk, Fk) => {
              kk.translucencyColorTexture = Fk
            }
          },
          metadata: Fk
        }, iI, yI), (0, Sk.j)(kk, null, kF, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: kk => "useGltfStyleTextures" in kk,
            get: kk => kk.useGltfStyleTextures,
            set: (kk, Fk) => {
              kk.useGltfStyleTextures = Fk
            }
          },
          metadata: Fk
        }, lI, aI), (0, Sk.j)(null, null, Qk, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: kk => "_scatteringDiffusionProfileIndex" in kk,
            get: kk => kk._scatteringDiffusionProfileIndex,
            set: (kk, Fk) => {
              kk._scatteringDiffusionProfileIndex = Fk
            }
          },
          metadata: Fk
        }, jF, eF), (0, Sk.j)(null, null, sk, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "refractionIntensity" in kk,
            get: kk => kk.refractionIntensity,
            set: (kk, Fk) => {
              kk.refractionIntensity = Fk
            }
          },
          metadata: Fk
        }, wF, HF), (0, Sk.j)(null, null, Vk, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "translucencyIntensity" in kk,
            get: kk => kk.translucencyIntensity,
            set: (kk, Fk) => {
              kk.translucencyIntensity = Fk
            }
          },
          metadata: Fk
        }, JF, xF), (0, Sk.j)(null, null, pk, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: kk => "_volumeIndexOfRefraction" in kk,
            get: kk => kk._volumeIndexOfRefraction,
            set: (kk, Fk) => {
              kk._volumeIndexOfRefraction = Fk
            }
          },
          metadata: Fk
        }, OF, nF), (0, Sk.j)(null, null, Rk, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: kk => "minimumThickness" in kk,
            get: kk => kk.minimumThickness,
            set: (kk, Fk) => {
              kk.minimumThickness = Fk
            }
          },
          metadata: Fk
        }, RF, UF), (0, Sk.j)(null, null, Uk, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: kk => "maximumThickness" in kk,
            get: kk => kk.maximumThickness,
            set: (kk, Fk) => {
              kk.maximumThickness = Fk
            }
          },
          metadata: Fk
        }, CF, NF), (0, Sk.j)(null, null, Ck, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: kk => "useThicknessAsDepth" in kk,
            get: kk => kk.useThicknessAsDepth,
            set: (kk, Fk) => {
              kk.useThicknessAsDepth = Fk
            }
          },
          metadata: Fk
        }, cF, WF), (0, Sk.j)(null, null, ck, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "tintColor" in kk,
            get: kk => kk.tintColor,
            set: (kk, Fk) => {
              kk.tintColor = Fk
            }
          },
          metadata: Fk
        }, fF, BF), (0, Sk.j)(null, null, Wk, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: kk => "tintColorAtDistance" in kk,
            get: kk => kk.tintColorAtDistance,
            set: (kk, Fk) => {
              kk.tintColorAtDistance = Fk
            }
          },
          metadata: Fk
        }, dF, YF), (0, Sk.j)(null, null, Bk, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: kk => "dispersion" in kk,
            get: kk => kk.dispersion,
            set: (kk, Fk) => {
              kk.dispersion = Fk
            }
          },
          metadata: Fk
        }, AF, gF), (0, Sk.j)(null, null, dk, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: kk => "diffusionDistance" in kk,
            get: kk => kk.diffusionDistance,
            set: (kk, Fk) => {
              kk.diffusionDistance = Fk
            }
          },
          metadata: Fk
        }, mF, hF), (0, Sk.j)(null, null, hk, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "translucencyColor" in kk,
            get: kk => kk.translucencyColor,
            set: (kk, Fk) => {
              kk.translucencyColor = Fk
            }
          },
          metadata: Fk
        }, XI, TI), (0, Sk.j)(null, null, FF, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: kk => "applyAlbedoAfterSubSurface" in kk,
            get: kk => kk.applyAlbedoAfterSubSurface,
            set: (kk, Fk) => {
              kk.applyAlbedoAfterSubSurface = Fk
            }
          },
          metadata: Fk
        }, qI, LI), (0, Sk.j)(null, null, IF, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: kk => "legacyTranslucency" in kk,
            get: kk => kk.legacyTranslucency,
            set: (kk, Fk) => {
              kk.legacyTranslucency = Fk
            }
          },
          metadata: Fk
        }, tI, ZI), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, kk.DEFAULT_LEGACY_TRANSLUCENCY = !1, kk
    })();
    var LF = Ik(40357),
      tF = Ik(40333),
      ZF = Ik(40368),
      jF = Ik(40377),
      eF = Ik(40382),
      wF = Ik(40386),
      HF = Ik(40393),
      JF = Ik(40402),
      xF = Ik(39863);
    const PF = {
      effect: null,
      subMesh: null
    };
    class KF extends((0, HF.d)((0, wF.b)(Wk.e))) {}
    class QF extends((0, gk.f)(KF)) {
      constructor(kk) {
        super(kk), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class sF extends((0, JF.e)(hk.e)) {}
    let VF = (() => {
      var kk, Fk;
      let Xk, Tk = sF,
        yk = [],
        lk = [];
      return kk = class extends Tk {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(kk) {
          this._realTimeFiltering = kk, this.UFk(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(kk) {
          this._realTimeFilteringQuality = kk, this.UFk(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set debugMode(kk) {
          (0, Sk.f)(this, Fk, kk, "f")
        }
        constructor(Ik, Xk) {
          super(Ik, Xk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || kk.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Nk.u(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = kk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = Ak.e.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new Ak.e(0, 0, 0), this._albedoColor = new Ak.e(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new Ak.e(1, 1, 1), this._reflectionColor = new Ak.e(1, 1, 1), this._emissiveColor = new Ak.e(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = kk.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Ok.f(16), this._globalAmbientColor = new Ak.e(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Fk.set(this, (0, Sk.n)(this, yk, 0)), this.debugLimit = ((0, Sk.n)(this, lk), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new dk(this), this.clearCoat = new FF(this), this.iridescence = new XF(this), this.anisotropy = new iF(this), this.sheen = new lF(this), this.subSurface = new qF(this), this.detailMap = new LF.c(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), rk.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = bk(this.mG()), this.prePassConfiguration = new Yk.c
        }
        get hasRenderTargetTextures() {
          return !!(rk.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
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
        isReadyForSubMesh(kk, Fk, Ik) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Xk = Fk._drawWrapper;
          if (Xk.effect && this.isFrozen && Xk._wasPreviouslyReady && Xk._wasPreviouslyUsingInstances === Ik) return !0;
          Fk.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Fk.materialDefines = new QF(this._eventInfo.defineNames));
          const Tk = Fk.materialDefines;
          if (this._isReadyForSubMesh(Fk)) return !0;
          const ik = this.mG(),
            yk = ik.Oe();
          if (Tk._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, ik.texturesEnabled)) {
            if (this._albedoTexture && rk.d.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && rk.d.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && rk.d.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && rk.d.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && rk.d.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const kk = this._getReflectionTexture();
            if (kk && rk.d.ReflectionTextureEnabled) {
              if (!kk.isReadyOrNotBlocking()) return !1;
              if (kk.irradianceTexture) {
                if (!kk.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!kk.sphericalPolynomial && kk.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && rk.d.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && rk.d.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (rk.d.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (yk.getCaps().standardDerivatives && this._bumpTexture && rk.d.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && rk.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Tk, this._eventInfo.subMesh = Fk, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Tk._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Tk.AREALIGHTUSED || Tk.CLUSTLIGHT_BATCH)
            for (let tk = 0; tk < kk.lightSources.length; tk++)
              if (!kk.lightSources[tk]._isReady()) return !1;
          if (yk.getCaps().standardDerivatives || kk.isVerticesDataPresent(ck.l.NormalKind) || (kk.createNormals(!0), Ek.e.Warn("PBRMaterial: Normals have been created for the mesh: " + kk.name)), !(0, Mk.b)(ik, kk, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const lk = Fk.effect,
            ak = Tk._areLightsDisposed,
            qk = this._prepareEffect(kk, Fk.getRenderingMesh(), Tk, this.onCompiled, this.onError, Ik, null);
          let Lk = !1;
          if (qk)
            if (this._onEffectCreatedObservable && (PF.effect = qk, PF.subMesh = Fk, this._onEffectCreatedObservable.notifyObservers(PF)), this.allowShaderHotSwapping && lk && !qk.isReady()) {
              if (Tk.markAsUnprocessed(), Lk = this.isFrozen, ak) return Tk._areLightsDisposed = !0, !1
            } else ik.resetCachedMaterial(), Fk.setEffect(qk, Tk, this._materialContext);
          return !(!Fk.effect || !Fk.effect.isReady()) && (Tk._renderId = ik.getRenderId(), Xk._wasPreviouslyReady = !Lk, Xk._wasPreviouslyUsingInstances = !!Ik, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(Fk, Ik, Xk) {
          let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            yk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            lk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(Fk, Ik, Xk, yk, lk), !Xk.isDirty) return null;
          Xk.markAsProcessed();
          const ak = this.mG().Oe(),
            qk = new Dk.c;
          let Lk = 0;
          Xk.USESPHERICALINVERTEX && qk.addFallback(Lk++, "USESPHERICALINVERTEX"), Xk.FOG && qk.addFallback(Lk, "FOG"), Xk.SPECULARAA && qk.addFallback(Lk, "SPECULARAA"), Xk.POINTSIZE && qk.addFallback(Lk, "POINTSIZE"), Xk.LOGARITHMICDEPTH && qk.addFallback(Lk, "LOGARITHMICDEPTH"), Xk.PARALLAX && qk.addFallback(Lk, "PARALLAX"), Xk.PARALLAX_RHS && qk.addFallback(Lk, "PARALLAX_RHS"), Xk.PARALLAXOCCLUSION && qk.addFallback(Lk++, "PARALLAXOCCLUSION"), Xk.ENVIRONMENTBRDF && qk.addFallback(Lk++, "ENVIRONMENTBRDF"), Xk.TANGENT && qk.addFallback(Lk++, "TANGENT"), Xk.BUMP && qk.addFallback(Lk++, "BUMP"), Lk = (0, Mk.w)(Xk, qk, this._maxSimultaneousLights, Lk), Xk.SPECULARTERM && qk.addFallback(Lk++, "SPECULARTERM"), Xk.USESPHERICALFROMREFLECTIONMAP && qk.addFallback(Lk++, "USESPHERICALFROMREFLECTIONMAP"), Xk.USEIRRADIANCEMAP && qk.addFallback(Lk++, "USEIRRADIANCEMAP"), Xk.LIGHTMAP && qk.addFallback(Lk++, "LIGHTMAP"), Xk.NORMAL && qk.addFallback(Lk++, "NORMAL"), Xk.AMBIENT && qk.addFallback(Lk++, "AMBIENT"), Xk.EMISSIVE && qk.addFallback(Lk++, "EMISSIVE"), Xk.VERTEXCOLOR && qk.addFallback(Lk++, "VERTEXCOLOR"), Xk.MORPHTARGETS && qk.addFallback(Lk++, "MORPHTARGETS"), Xk.MULTIVIEW && qk.addFallback(0, "MULTIVIEW");
          const tk = [ck.l.PositionKind];
          Xk.NORMAL && tk.push(ck.l.NormalKind), Xk.TANGENT && tk.push(ck.l.TangentKind);
          for (let kk = 1; kk <= 6; ++kk) Xk["UV" + kk] && tk.push(`uv${1===kk?"":kk}`);
          Xk.VERTEXCOLOR && tk.push(ck.l.ColorKind), (0, Mk.y)(tk, Fk, Xk, qk), (0, Mk.A)(tk, Xk), (0, Mk.C)(tk, Fk, Xk), (0, Mk.x)(tk, Fk, Xk);
          let Zk = "pbr";
          const jk = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            ek = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, Mk.cb)(jk, ek, !0);
          const wk = ["Material", "Scene", "Mesh"],
            Hk = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Xk.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = qk, this._eventInfo.fallbackRank = Lk, this._eventInfo.defines = Xk, this._eventInfo.uniforms = jk, this._eventInfo.attributes = tk, this._eventInfo.samplers = ek, this._eventInfo.uniformBuffersNames = wk, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Fk, this._eventInfo.indexParameters = Hk, this._callbackPluginEventGeneric(128, this._eventInfo), eF.e.AddUniformsAndSamplers(jk, ek), Yk.c.AddUniforms(jk), Yk.c.AddSamplers(ek), (0, tF.d)(jk), this._useVertexPulling) {
            const kk = Ik?.geometry;
            kk && (this._vertexPullingMetadata = (0, ZF.f)(kk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, Fk) => {
              jk.push(`vp_${Fk}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          mk.d && (mk.d.PrepareUniforms(jk, Xk), mk.d.PrepareSamplers(ek, Xk)), (0, Mk.db)({
            uniformsNames: jk,
            uniformBuffersNames: wk,
            samplers: ek,
            defines: Xk,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const Jk = {};
          this.customShaderNameResolve && (Zk = this.customShaderNameResolve(Zk, jk, wk, ek, Xk, tk, Jk));
          const xk = Xk.toString(),
            Pk = ak.createEffect(Zk, {
              attributes: tk,
              uniformsNames: jk,
              uniformBuffersNames: wk,
              samplers: ek,
              defines: xk,
              fallbacks: qk,
              onCompiled: Tk,
              onError: ik,
              indexParameters: Hk,
              processFinalCode: Jk.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Xk.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: kk._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, ak);
          return this._eventInfo.customCode = void 0, Pk
        }
        _prepareDefines(Fk, Ik, Xk) {
          let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const yk = Ik.hasThinInstances,
            lk = this.mG(),
            ak = lk.Oe();
          (0, Mk.M)(lk, Fk, Xk, !0, this._maxSimultaneousLights, this._disableLighting), Xk._needNormals = !0, (0, Mk.T)(lk, Xk);
          const qk = this.needAlphaBlendingForMesh(Fk) && this.mG().useOrderIndependentTransparency;
          if ((0, Mk._)(lk, Xk, this.canRenderToMRT && !qk), (0, Mk.W)(lk, Xk, qk), eF.e.PrepareDefines(ak.currentRenderPassId, Fk, Xk), Xk.METALLICWORKFLOW = this.isMetallicWorkflow(), Xk._areTexturesDirty) {
            Xk._needUVs = !1;
            for (let kk = 1; kk <= 6; ++kk) Xk["MAINUV" + kk] = !1;
            if (lk.texturesEnabled) {
              Xk.ALBEDODIRECTUV = 0, Xk.BASE_WEIGHTDIRECTUV = 0, Xk.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Xk.AMBIENTDIRECTUV = 0, Xk.OPACITYDIRECTUV = 0, Xk.EMISSIVEDIRECTUV = 0, Xk.REFLECTIVITYDIRECTUV = 0, Xk.MICROSURFACEMAPDIRECTUV = 0, Xk.METALLIC_REFLECTANCEDIRECTUV = 0, Xk.REFLECTANCEDIRECTUV = 0, Xk.BUMPDIRECTUV = 0, Xk.LIGHTMAPDIRECTUV = 0, ak.getCaps().textureLOD && (Xk.LODBASEDMICROSFURACE = !0), this._albedoTexture && rk.d.DiffuseTextureEnabled ? ((0, Mk.P)(this._albedoTexture, Xk, "ALBEDO"), Xk.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Xk.ALBEDO = !1, this._baseWeightTexture && rk.d.BaseWeightTextureEnabled ? (0, Mk.P)(this._baseWeightTexture, Xk, "BASE_WEIGHT") : Xk.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && rk.d.BaseDiffuseRoughnessTextureEnabled ? (0, Mk.P)(this._baseDiffuseRoughnessTexture, Xk, "BASE_DIFFUSE_ROUGHNESS") : Xk.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && rk.d.AmbientTextureEnabled ? ((0, Mk.P)(this._ambientTexture, Xk, "AMBIENT"), Xk.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Xk.AMBIENT = !1, this._opacityTexture && rk.d.OpacityTextureEnabled ? ((0, Mk.P)(this._opacityTexture, Xk, "OPACITY"), Xk.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Xk.OPACITY = !1;
              const kk = this._getReflectionTexture(),
                Fk = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || ak.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, Mk.I)(lk, kk, Xk, this.realTimeFiltering, this.realTimeFilteringQuality, !Fk), this._lightmapTexture && rk.d.LightmapTextureEnabled ? ((0, Mk.P)(this._lightmapTexture, Xk, "LIGHTMAP"), Xk.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Xk.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Xk.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Xk.LIGHTMAP = !1, this._emissiveTexture && rk.d.EmissiveTextureEnabled ? ((0, Mk.P)(this._emissiveTexture, Xk, "EMISSIVE"), Xk.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Xk.EMISSIVE = !1, rk.d.SpecularTextureEnabled ? (this._metallicTexture ? ((0, Mk.P)(this._metallicTexture, Xk, "REFLECTIVITY"), Xk.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Xk.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Xk.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Xk.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Xk.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, Mk.P)(this._reflectivityTexture, Xk, "REFLECTIVITY"), Xk.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Xk.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Xk.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Xk.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Xk.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, Mk.P)(this._metallicReflectanceTexture, Xk, "METALLIC_REFLECTANCE"), Xk.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Xk.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, Mk.P)(this._reflectanceTexture, Xk, "REFLECTANCE"), Xk.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Xk.REFLECTANCE = !1) : (Xk.METALLIC_REFLECTANCE = !1, Xk.REFLECTANCE = !1), this._microSurfaceTexture ? (0, Mk.P)(this._microSurfaceTexture, Xk, "MICROSURFACEMAP") : Xk.MICROSURFACEMAP = !1) : (Xk.REFLECTIVITY = !1, Xk.MICROSURFACEMAP = !1), ak.getCaps().standardDerivatives && this._bumpTexture && rk.d.BumpTextureEnabled && !this._disableBumpMap ? ((0, Mk.P)(this._bumpTexture, Xk, "BUMP"), this._useParallax && this._albedoTexture && rk.d.DiffuseTextureEnabled ? (Xk.PARALLAX = !0, Xk.PARALLAX_RHS = lk.useRightHandedSystem, Xk.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Xk.PARALLAX = !1, Xk.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Xk.BUMP = !1, Xk.PARALLAX = !1, Xk.PARALLAX_RHS = !1, Xk.PARALLAXOCCLUSION = !1, Xk.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && rk.d.ReflectionTextureEnabled ? (Xk.ENVIRONMENTBRDF = !0, Xk.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Xk.ENVIRONMENTBRDF = !1, Xk.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Xk.ALPHAFROMALBEDO = !0 : Xk.ALPHAFROMALBEDO = !1
            }
            Xk.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === kk.LIGHTFALLOFF_STANDARD ? (Xk.USEPHYSICALLIGHTFALLOFF = !1, Xk.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === kk.LIGHTFALLOFF_GLTF ? (Xk.USEPHYSICALLIGHTFALLOFF = !1, Xk.USEGLTFLIGHTFALLOFF = !0) : (Xk.USEPHYSICALLIGHTFALLOFF = !0, Xk.USEGLTFLIGHTFALLOFF = !1), Xk.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Xk.TWOSIDEDLIGHTING = !0 : Xk.TWOSIDEDLIGHTING = !1, Xk.MIRRORED = !!lk._mirroredCameraPosition, Xk.SPECULARAA = ak.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Xk._areTexturesDirty || Xk._areMiscDirty) && (Xk.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Xk.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Xk.ALPHABLEND = this.needAlphaBlendingForMesh(Fk), Xk.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Xk.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Xk._areTexturesDirty && (Xk.TEXTURE_REPETITION_MODE = ak.version > 1 || ak.isWebGPU ? this.textureRepetitionMode : 0), Xk._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Xk), Xk.FORCENORMALFORWARD = this._forceNormalForward, Xk.RADIANCEOCCLUSION = this._useRadianceOcclusion, Xk.HORIZONOCCLUSION = this._useHorizonOcclusion, Xk._areMiscDirty && ((0, Mk.R)(Fk, lk, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Fk), Xk, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Ik, this._isVertexOutputInvariant), Xk.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Fk.isVerticesDataPresent(ck.l.NormalKind), Xk.DEBUGMODE = this._debugMode), (0, Mk.F)(lk, ak, this, Xk, !!Tk, ik, yk), this._eventInfo.defines = Xk, this._eventInfo.mesh = Fk, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Mk.E)(Fk, Xk, !0, !0, !0, this._transparencyMode !== kk.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(kk, Fk, Ik) {
          const Xk = {
            clipPlane: !1,
            useInstances: !1,
            ...Ik
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const Ik = new QF(this._eventInfo.defineNames),
              Tk = this._prepareEffect(kk, kk, Ik, void 0, void 0, Xk.useInstances, Xk.clipPlane);
            this._onEffectCreatedObservable && (PF.effect = Tk, PF.subMesh = null, this._onEffectCreatedObservable.notifyObservers(PF)), Tk.isReady() ? Fk && Fk(this) : Tk.onCompileObservable.add((() => {
              Fk && Fk(this)
            }))
          })()
        }
        buildUniformLayout() {
          const kk = this._uniformBuffer;
          kk.addUniform("vAlbedoInfos", 2), kk.addUniform("vBaseWeightInfos", 2), kk.addUniform("vBaseDiffuseRoughnessInfos", 2), kk.addUniform("vAmbientInfos", 4), kk.addUniform("vOpacityInfos", 2), kk.addUniform("vEmissiveInfos", 2), kk.addUniform("vLightmapInfos", 2), kk.addUniform("vReflectivityInfos", 3), kk.addUniform("vMicroSurfaceSamplerInfos", 2), kk.addUniform("vBumpInfos", 3), kk.addUniform("albedoMatrix", 16), kk.addUniform("baseWeightMatrix", 16), kk.addUniform("baseDiffuseRoughnessMatrix", 16), kk.addUniform("ambientMatrix", 16), kk.addUniform("opacityMatrix", 16), kk.addUniform("emissiveMatrix", 16), kk.addUniform("lightmapMatrix", 16), kk.addUniform("reflectivityMatrix", 16), kk.addUniform("microSurfaceSamplerMatrix", 16), kk.addUniform("bumpMatrix", 16), kk.addUniform("vTangentSpaceParams", 2), kk.addUniform("vAlbedoColor", 4), kk.addUniform("baseWeight", 1), kk.addUniform("baseDiffuseRoughness", 1), kk.addUniform("vLightingIntensity", 4), kk.addUniform("pointSize", 1), kk.addUniform("vReflectivityColor", 4), kk.addUniform("vEmissiveColor", 3), kk.addUniform("vAmbientColor", 3), kk.addUniform("vDebugMode", 2), kk.addUniform("vMetallicReflectanceFactors", 4), kk.addUniform("vMetallicReflectanceInfos", 2), kk.addUniform("metallicReflectanceMatrix", 16), kk.addUniform("vReflectanceInfos", 2), kk.addUniform("reflectanceMatrix", 16), kk.addUniform("cameraInfo", 4), kk.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Mk.$)(kk, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(kk, Fk, Ik) {
          const Xk = this.mG(),
            Tk = Ik.materialDefines;
          if (!Tk) return;
          const ik = Ik.effect;
          if (!ik) return;
          this._activeEffect = ik, Fk.getMeshUniformBuffer().bindToEffect(ik, "Mesh"), Fk.transferToEffect(kk);
          const yk = Xk.Oe();
          this._uniformBuffer.bindToEffect(ik, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Xk, Fk, kk, this.isFrozen), eF.e.Bind(yk.currentRenderPassId, this._activeEffect, Fk, kk, this);
          const lk = Xk.activeCamera;
          lk ? this._uniformBuffer.updateFloat4("cameraInfo", lk.minZ, lk.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const ak = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", ak[0], ak[1], ak[2], ak[3]), this._eventInfo.subMesh = Ik, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Tk.OBJECTSPACE_NORMALMAP && (kk.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const qk = this._mustRebind(Xk, ik, Ik, Fk.visibility),
            Lk = yk._features.needToAlwaysBindUniformBuffers;
          (0, Mk.e)(Fk, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, ZF.c)(this._activeEffect, this._vertexPullingMetadata);
          let tk = null;
          const Zk = this._uniformBuffer;
          if (qk) {
            if (this.bindViewProjection(ik), tk = this._getReflectionTexture(), !Zk.useUbo || !this.isFrozen || !Zk.isSync || Ik._drawWrapper._forceRebindOnNextCall) {
              if (Xk.texturesEnabled && (this._albedoTexture && rk.d.DiffuseTextureEnabled && (Zk.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, Mk.v)(this._albedoTexture, Zk, "albedo")), this._baseWeightTexture && rk.d.BaseWeightTextureEnabled && (Zk.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, Mk.v)(this._baseWeightTexture, Zk, "baseWeight")), this._baseDiffuseRoughnessTexture && rk.d.BaseDiffuseRoughnessTextureEnabled && (Zk.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, Mk.v)(this._baseDiffuseRoughnessTexture, Zk, "baseDiffuseRoughness")), this._ambientTexture && rk.d.AmbientTextureEnabled && (Zk.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, Mk.v)(this._ambientTexture, Zk, "ambient")), this._opacityTexture && rk.d.OpacityTextureEnabled && (Zk.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Mk.v)(this._opacityTexture, Zk, "opacity")), this._emissiveTexture && rk.d.EmissiveTextureEnabled && (Zk.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Mk.v)(this._emissiveTexture, Zk, "emissive")), this._lightmapTexture && rk.d.LightmapTextureEnabled && (Zk.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Mk.v)(this._lightmapTexture, Zk, "lightmap")), rk.d.SpecularTextureEnabled && (this._metallicTexture ? (Zk.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, Mk.v)(this._metallicTexture, Zk, "reflectivity")) : this._reflectivityTexture && (Zk.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, Mk.v)(this._reflectivityTexture, Zk, "reflectivity")), this._metallicReflectanceTexture && (Zk.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, Mk.v)(this._metallicReflectanceTexture, Zk, "metallicReflectance")), this._reflectanceTexture && Tk.REFLECTANCE && (Zk.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, Mk.v)(this._reflectanceTexture, Zk, "reflectance")), this._microSurfaceTexture && (Zk.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, Mk.v)(this._microSurfaceTexture, Zk, "microSurfaceSampler"))), this._bumpTexture && yk.getCaps().standardDerivatives && rk.d.BumpTextureEnabled && !this._disableBumpMap && (Zk.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, Mk.v)(this._bumpTexture, Zk, "bump"), Xk._mirroredCameraPosition ? Zk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Zk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Mk.i)(Xk, Tk, Zk, this._reflectionColor, tk, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && Zk.updateFloat("pointSize", this.pointSize), Tk.METALLICWORKFLOW) {
                Ak.k.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, Ak.k.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const kk = this.subSurface?._indexOfRefraction ?? 1.5,
                  Fk = 1;
                Ak.k.Color4[0].b = kk;
                const Ik = Math.pow((kk - Fk) / (kk + Fk), 2);
                Ak.k.Color4[0].a = Ik, Zk.updateDirectColor4("vReflectivityColor", Ak.k.Color4[0]), Zk.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else Zk.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              Zk.updateColor3("vEmissiveColor", rk.d.EmissiveTextureEnabled ? this._emissiveColor : Ak.e.BlackReadOnly), !Tk.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? Zk.updateColor4("vAlbedoColor", this._albedoColor, 1) : Zk.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), Zk.updateFloat("baseWeight", this._baseWeight), Zk.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Xk.environmentIntensity, this._lightingInfos.w = this._specularIntensity, Zk.updateVector4("vLightingIntensity", this._lightingInfos), Xk.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), Zk.updateColor3("vAmbientColor", this._globalAmbientColor), Zk.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Xk.texturesEnabled && (this._albedoTexture && rk.d.DiffuseTextureEnabled && Zk.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && rk.d.BaseWeightTextureEnabled && Zk.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && rk.d.BaseDiffuseRoughnessTextureEnabled && Zk.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && rk.d.AmbientTextureEnabled && Zk.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && rk.d.OpacityTextureEnabled && Zk.setTexture("opacitySampler", this._opacityTexture), (0, Mk.j)(Xk, Tk, Zk, tk, this.realTimeFiltering), Tk.ENVIRONMENTBRDF && Zk.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && rk.d.EmissiveTextureEnabled && Zk.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && rk.d.LightmapTextureEnabled && Zk.setTexture("lightmapSampler", this._lightmapTexture), rk.d.SpecularTextureEnabled && (this._metallicTexture ? Zk.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && Zk.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && Zk.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Tk.REFLECTANCE && Zk.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && Zk.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && yk.getCaps().standardDerivatives && rk.d.BumpTextureEnabled && !this._disableBumpMap && Zk.setTexture("bumpSampler", this._bumpTexture)), this.mG().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Fk) && this.mG().depthPeelingRenderer.bind(ik), this._eventInfo.subMesh = Ik, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, tF.e)(this._activeEffect, this, Xk), this.bindEyePosition(ik)
          } else Lk && (this._needToBindSceneUbo = !0);
          !qk && this.isFrozen && !Lk || !Xk.lightsEnabled || this._disableLighting || (0, Mk.n)(Xk, Fk, this._activeEffect, Tk, this._maxSimultaneousLights), !qk && this.isFrozen || ((Xk.fogEnabled && Fk.applyFog && Xk.fogMode !== Ck.f.FOGMODE_NONE || tk || this.subSurface.refractionTexture || Fk.receiveShadows || Tk.PREPASS || Tk.CLUSTLIGHT_BATCH) && this.bindView(ik), (0, Mk.f)(Xk, Fk, this._activeEffect, !0), Tk.NUM_MORPH_INFLUENCERS && (0, Mk.s)(Fk, this._activeEffect), Tk.BAKED_VERTEX_ANIMATION_TEXTURE && Fk.bakedVertexAnimationManager?.bind(ik, Tk.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Mk.p)(Tk, this._activeEffect, Xk)), this._afterBind(Fk, this._activeEffect, Ik), Zk.update()
        }
        getAnimatables() {
          const kk = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && kk.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && kk.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && kk.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && kk.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && kk.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && kk.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && kk.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? kk.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && kk.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && kk.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && kk.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && kk.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && kk.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && kk.push(this._microSurfaceTexture), kk
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.mG().environmentTexture
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
          const kk = this.mG().enableSubSurfaceForPrePass();
          return kk && (kk.enabled = !0), !0
        }
        dispose(kk, Fk) {
          this._breakShaderLoadedCheck = !0, Fk && (this._environmentBRDFTexture && this.mG().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(kk, Fk)
        }
      }, Fk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tk[Symbol.metadata] ?? null) : void 0;
        Xk = [(0, vk.e)("_markAllSubMeshesAsMiscDirty")], (0, Sk.j)(kk, null, Xk, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "debugMode" in kk,
            get: kk => kk.debugMode,
            set: (kk, Fk) => {
              kk.debugMode = Fk
            }
          },
          metadata: Fk
        }, yk, lk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk.PBRMATERIAL_OPAQUE = ik.c.MATERIAL_OPAQUE, kk.PBRMATERIAL_ALPHATEST = ik.c.MATERIAL_ALPHATEST, kk.PBRMATERIAL_ALPHABLEND = ik.c.MATERIAL_ALPHABLEND, kk.PBRMATERIAL_ALPHATESTANDBLEND = ik.c.MATERIAL_ALPHATESTANDBLEND, kk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, kk.LIGHTFALLOFF_PHYSICAL = 0, kk.LIGHTFALLOFF_GLTF = 1, kk.LIGHTFALLOFF_STANDARD = 2, kk.ForceGLSL = !1, kk._ShaderLoader = new jF.c((() => [Promise.all([Ik.e(317), Ik.e(328)]).then((() => Ik(61512))), Promise.all([Ik.e(322), Ik.e(318), Ik.e(380), Ik.e(331), Ik.e(379)]).then((() => Ik(61533)))]), (() => [Promise.all([Ik.e(336), Ik.e(338), Ik.e(345)]).then((() => Ik(61621))), Promise.all([Ik.e(336), Ik.e(339), Ik.e(383), Ik.e(349), Ik.e(382)]).then((() => Ik(61644)))])), kk
    })();
    Object.getOwnPropertyDescriptor(VF.prototype, "decalMap") || Object.defineProperty(VF.prototype, "decalMap", (0, xF.g)("PBRBaseMaterial", "decalMap")), (0, Ik(41832).c)();
    var zF = Ik(40021);
    var SF = Ik(40097),
      oF = Ik(41815),
      vF = Ik(39818),
      EF = Ik(39825),
      OF = Ik(39939);
    let nF = !1;
    const GF = new Ak.h,
      pF = new Ak.h;
    class uF extends oF.c {
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
          for (let Fk = 0; Fk < this._textures.length; Fk++) this._textures[Fk].wrapU = kk
      }
      set wrapV(kk) {
        if (this._textures)
          for (let Fk = 0; Fk < this._textures.length; Fk++) this._textures[Fk].wrapV = kk
      }
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = !(!Tk || !Tk.generateMipMaps) && Tk.generateMipMaps,
          lk = !(!Tk || !Tk.generateDepthTexture) && Tk.generateDepthTexture,
          ak = Tk && Tk.depthTextureFormat ? Tk.depthTextureFormat : 15,
          qk = !Tk || void 0 === Tk.doNotChangeAspectRatio || Tk.doNotChangeAspectRatio,
          Lk = !(!Tk || !Tk.drawOnlyOnFirstAttachmentByDefault) && Tk.drawOnlyOnFirstAttachmentByDefault;
        if (super(kk, Fk, Xk, yk, qk, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), nF || (nF = !0, EF.ThinEngine.prototype.restoreSingleAttachment = function() {
            const kk = this._gl;
            this.bindAttachments([kk.BACK])
          }, EF.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const kk = this._gl;
            this.bindAttachments([kk.COLOR_ATTACHMENT0])
          }, EF.ThinEngine.prototype.buildTextureLayout = function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Ik = this._gl,
              Xk = [];
            if (Fk) Xk.push(Ik.BACK);
            else
              for (let Tk = 0; Tk < kk.length; Tk++) kk[Tk] ? Xk.push(Ik["COLOR_ATTACHMENT" + Tk]) : Xk.push(Ik.NONE);
            return Xk
          }, EF.ThinEngine.prototype.bindAttachments = function(kk) {
            const Fk = this._gl,
              Ik = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, Ik)
              for (let Xk = 0; Xk < kk.length; Xk++) kk[Xk] !== Fk.NONE && Ik[Xk] && (0, OF.k)(Ik[Xk].format) && (this._integerMRTAttachmentsMask |= 1 << Xk);
            Fk.drawBuffers(kk)
          }, EF.ThinEngine.prototype.clearAttachments = function(kk, Fk, Ik, Xk) {
            let Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const yk = this._currentRenderTarget?.textures;
            let lk = !1;
            if (Ik && kk && yk)
              for (let ak = 0; ak < Fk.length; ak++) {
                const kk = yk[ak];
                if (Fk[ak] !== this._gl.NONE && kk && (0, OF.k)(kk.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  lk = !0;
                  break
                }
              }
            if (!lk || !kk || !yk) return this.bindAttachments(Fk), void this.clear(kk, Ik, Xk, Tk, ik);
            this.bindAttachments(Fk), this._applyColorWriteState();
            for (let ak = 0; ak < Fk.length; ak++) {
              const Ik = yk[ak];
              if (Fk[ak] !== this._gl.NONE && Ik) {
                let Fk = kk;
                if ((0, OF.k)(Ik.format)) {
                  const Xk = (0, OF.l)(Ik.type);
                  Fk = Xk ? GF : pF;
                  const Tk = Xk ? 255 : 1;
                  Fk.r = Math.round(kk.r * Tk), Fk.g = Math.round(kk.g * Tk), Fk.b = Math.round(kk.b * Tk), Fk.a = Math.round(kk.a * Tk)
                }
                this._clearColorAttachment(ak, Fk, Ik.format, Ik.type)
              }
            }
            if (Xk || Tk) {
              const kk = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Xk, Tk, ik)
              } finally {
                this._integerMRTAttachmentsMask = kk
              }
            }
          }, EF.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Ik = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, kk.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(kk), Fk || this.generateMipMapsMultiFramebuffer(kk), Ik && (kk._MSAAFramebuffer && this._bindUnboundFramebuffer(kk._framebuffer), Ik()), this._bindUnboundFramebuffer(null)
          }, EF.ThinEngine.prototype.createMultipleRenderTarget = function(kk, Fk) {
            let Ik, Xk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Tk = !1,
              ik = !0,
              yk = !1,
              lk = !1,
              ak = 1,
              qk = 1,
              Lk = [],
              tk = [],
              Zk = [],
              jk = [],
              ek = [],
              wk = [],
              Hk = [],
              Jk = [],
              xk = [],
              Pk = !1;
            const Kk = this._createHardwareRenderTargetWrapper(!0, !1, kk);
            void 0 !== Fk && (Tk = void 0 !== Fk.generateMipMaps && Fk.generateMipMaps, ik = void 0 === Fk.generateDepthBuffer || Fk.generateDepthBuffer, yk = void 0 !== Fk.generateStencilBuffer && Fk.generateStencilBuffer, lk = void 0 !== Fk.generateDepthTexture && Fk.generateDepthTexture, ak = Fk.uyk ?? 1, qk = Fk.samples ?? qk, Lk = Fk.types || Lk, tk = Fk.samplingModes || tk, Zk = Fk.useSRGBBuffers || Zk, jk = Fk.formats || jk, ek = Fk.targetTypes || ek, wk = Fk.faceIndex || wk, Hk = Fk.layerIndex || Hk, Jk = Fk.layerCounts || Jk, xk = Fk.labels || xk, Pk = Fk.dontCreateTextures ?? !1, this.tw > 1 && (13 === Fk.depthTextureFormat || 17 === Fk.depthTextureFormat || 16 === Fk.depthTextureFormat || 14 === Fk.depthTextureFormat || 18 === Fk.depthTextureFormat) && (Ik = Fk.depthTextureFormat)), void 0 === Ik && (Ik = yk ? 13 : 14);
            const Qk = this._gl,
              sk = this._currentFramebuffer,
              Vk = Qk.createFramebuffer();
            this._bindUnboundFramebuffer(Vk);
            const zk = kk.width ?? kk,
              Sk = kk.height ?? kk,
              vk = [],
              Ok = [],
              nk = this.tw > 1 && (13 === Ik || 17 === Ik || 18 === Ik);
            Kk.label = Fk?.label ?? "MultiRenderTargetWrapper", Kk._framebuffer = Vk, Kk._generateDepthBuffer = lk || ik, Kk._generateStencilBuffer = lk ? nk : yk, Kk._depthStencilBuffer = this._setupFramebufferDepthAttachments(Kk._generateStencilBuffer, Kk._generateDepthBuffer, zk, Sk, 1, Ik), Kk._attachments = Ok;
            for (let Gk = 0; Gk < ak; Gk++) {
              let kk = tk[Gk] || 3,
                Fk = Lk[Gk] || 0,
                Ik = Zk[Gk] || !1;
              const Xk = jk[Gk] || 5,
                ik = ek[Gk] || 3553,
                yk = Jk[Gk] ?? 1;
              (1 !== Fk || this._caps.textureFloatLinearFiltering) && (2 !== Fk || this._caps.textureHalfFloatLinearFiltering) || (kk = 1);
              const lk = this._getSamplingParameters(kk, Tk);
              1 !== Fk || this._caps.textureFloat || (Fk = 0, Ek.e.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), Ik = Ik && this._caps.supportSRGBBuffers && (this.tw > 1 || this.isWebGPU);
              const ak = this.tw > 1,
                qk = Qk[ak ? "COLOR_ATTACHMENT" + Gk : "COLOR_ATTACHMENT" + Gk + "_WEBGL"];
              if (Ok.push(qk), -1 === ik || Pk) continue;
              const wk = new vF.b(this, 6);
              vk[Gk] = wk, Qk.activeTexture(Qk["TEXTURE" + Gk]), Qk.bindTexture(ik, wk._hardwareTexture.underlyingResource), Qk.texParameteri(ik, Qk.TEXTURE_MAG_FILTER, lk.mag), Qk.texParameteri(ik, Qk.TEXTURE_MIN_FILTER, lk.min), Qk.texParameteri(ik, Qk.TEXTURE_WRAP_S, Qk.CLAMP_TO_EDGE), Qk.texParameteri(ik, Qk.TEXTURE_WRAP_T, Qk.CLAMP_TO_EDGE);
              const Hk = this._getRGBABufferInternalSizedFormat(Fk, Xk, Ik),
                sk = this._getInternalFormat(Xk),
                Vk = this._getWebGLTextureType(Fk);
              if (!ak || 35866 !== ik && 32879 !== ik)
                if (34067 === ik) {
                  for (let kk = 0; kk < 6; kk++) Qk.texImage2D(Qk.TEXTURE_CUBE_MAP_POSITIVE_X + kk, 0, Hk, zk, Sk, 0, sk, Vk, null);
                  wk.isCube = !0
                } else Qk.texImage2D(Qk.TEXTURE_2D, 0, Hk, zk, Sk, 0, sk, Vk, null);
              else 35866 === ik ? wk.is2DArray = !0 : wk.is3D = !0, wk.baseDepth = wk.depth = yk, Qk.texImage3D(ik, 0, Hk, zk, Sk, yk, 0, sk, Vk, null);
              Tk && Qk.generateMipmap(ik), this._bindTextureDirectly(ik, null), wk.baseWidth = zk, wk.baseHeight = Sk, wk.width = zk, wk.height = Sk, wk.isReady = !0, wk.samples = 1, wk.generateMipMaps = Tk, wk.samplingMode = kk, wk.type = Fk, wk._useSRGBBuffer = Ik, wk.format = Xk, wk.label = xk[Gk] ?? Kk.label + "-Texture" + Gk, this._internalTexturesCache.push(wk)
            }
            if (lk && this._caps.depthTextureExtension && !Pk) {
              const kk = new vF.b(this, 14);
              let Fk = 5,
                Xk = Qk.DEPTH_COMPONENT16,
                ik = Qk.DEPTH_COMPONENT,
                yk = Qk.UNSIGNED_SHORT,
                lk = Qk.DEPTH_ATTACHMENT;
              this.tw < 2 ? Xk = Qk.DEPTH_COMPONENT : 14 === Ik ? (Fk = 1, yk = Qk.FLOAT, Xk = Qk.DEPTH_COMPONENT32F) : 18 === Ik ? (Fk = 0, yk = Qk.FLOAT_32_UNSIGNED_INT_24_8_REV, Xk = Qk.DEPTH32F_STENCIL8, ik = Qk.DEPTH_STENCIL, lk = Qk.DEPTH_STENCIL_ATTACHMENT) : 16 === Ik ? (Fk = 0, yk = Qk.UNSIGNED_INT, Xk = Qk.DEPTH_COMPONENT24, lk = Qk.DEPTH_ATTACHMENT) : 13 !== Ik && 17 !== Ik || (Fk = 12, yk = Qk.UNSIGNED_INT_24_8, Xk = Qk.DEPTH24_STENCIL8, ik = Qk.DEPTH_STENCIL, lk = Qk.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(Qk.TEXTURE_2D, kk, !0), Qk.texParameteri(Qk.TEXTURE_2D, Qk.TEXTURE_MAG_FILTER, Qk.NEAREST), Qk.texParameteri(Qk.TEXTURE_2D, Qk.TEXTURE_MIN_FILTER, Qk.NEAREST), Qk.texParameteri(Qk.TEXTURE_2D, Qk.TEXTURE_WRAP_S, Qk.CLAMP_TO_EDGE), Qk.texParameteri(Qk.TEXTURE_2D, Qk.TEXTURE_WRAP_T, Qk.CLAMP_TO_EDGE), Qk.texImage2D(Qk.TEXTURE_2D, 0, Xk, zk, Sk, 0, ik, yk, null), Qk.framebufferTexture2D(Qk.FRAMEBUFFER, lk, Qk.TEXTURE_2D, kk._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(Qk.TEXTURE_2D, null), Kk._depthStencilTexture = kk, Kk._depthStencilTextureWithStencil = nk, kk.baseWidth = zk, kk.baseHeight = Sk, kk.width = zk, kk.height = Sk, kk.isReady = !0, kk.samples = 1, kk.generateMipMaps = Tk, kk.samplingMode = 1, kk.format = Ik, kk.type = Fk, kk.label = Kk.label + "-DepthStencil", vk[ak] = kk, this._internalTexturesCache.push(kk)
            }
            if (Kk.setTextures(vk), Xk && Qk.drawBuffers(Ok), this._bindUnboundFramebuffer(sk), Kk.setLayerAndFaceIndices(Hk, wk), this.resetTextureCache(), Pk) {
              if (qk > 1) {
                const kk = Qk.createFramebuffer();
                if (!kk) throw new Error("Unable to create multi sampled framebuffer");
                Kk._samples = qk, Kk._MSAAFramebuffer = kk, ak > 0 && Xk && (this._bindUnboundFramebuffer(kk), Qk.drawBuffers(Ok), this._bindUnboundFramebuffer(sk))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(Kk, qk, Xk);
            return Kk
          }, EF.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(kk, Fk) {
            let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.tw < 2 || !kk) return 1;
            if (kk.samples === Fk) return Fk;
            const Xk = this._gl;
            Fk = Math.min(Fk, this.getCaps().maxMSAASamples), kk._depthStencilBuffer && (Xk.deleteRenderbuffer(kk._depthStencilBuffer), kk._depthStencilBuffer = null), kk._MSAAFramebuffer && (Xk.deleteFramebuffer(kk._MSAAFramebuffer), kk._MSAAFramebuffer = null);
            const Tk = kk._attachments.length;
            for (let yk = 0; yk < Tk; yk++) {
              const Fk = kk.textures[yk]._hardwareTexture;
              Fk?.releaseMSAARenderBuffers()
            }
            if (Fk > 1 && "function" === typeof Xk.renderbufferStorageMultisample) {
              const ik = Xk.createFramebuffer();
              if (!ik) throw new Error("Unable to create multi sampled framebuffer");
              kk._MSAAFramebuffer = ik, this._bindUnboundFramebuffer(ik);
              const yk = [];
              for (let Ik = 0; Ik < Tk; Ik++) {
                const Tk = kk.textures[Ik],
                  ik = Tk._hardwareTexture,
                  lk = Xk[this.tw > 1 ? "COLOR_ATTACHMENT" + Ik : "COLOR_ATTACHMENT" + Ik + "_WEBGL"],
                  ak = this._createRenderBuffer(Tk.width, Tk.height, Fk, -1, this._getRGBABufferInternalSizedFormat(Tk.type, Tk.format, Tk._useSRGBBuffer), lk);
                if (!ak) throw new Error("Unable to create multi sampled framebuffer");
                ik.addMSAARenderBuffer(ak), Tk.samples = Fk, yk.push(lk)
              }
              Ik && Xk.drawBuffers(yk)
            } else this._bindUnboundFramebuffer(kk._framebuffer);
            const ik = kk._depthStencilTexture ? kk._depthStencilTexture.format : void 0;
            return kk._depthStencilBuffer = this._setupFramebufferDepthAttachments(kk._generateStencilBuffer, kk._generateDepthBuffer, kk.width, kk.height, Fk, ik), this._bindUnboundFramebuffer(null), kk._samples = Fk, Fk
          }, EF.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(kk) {
            const Fk = kk,
              Ik = this._gl;
            if (Fk.isMulti)
              for (let Xk = 0; Xk < Fk._attachments.length; Xk++) {
                const kk = Fk.textures[Xk];
                !kk?.generateMipMaps || kk?.isCube || kk?.is3D || (this._bindTextureDirectly(Ik.TEXTURE_2D, kk, !0), Ik.generateMipmap(Ik.TEXTURE_2D), this._bindTextureDirectly(Ik.TEXTURE_2D, null))
              }
          }, EF.ThinEngine.prototype.resolveMultiFramebuffer = function(kk) {
            const Fk = kk,
              Ik = this._gl;
            if (!Fk._MSAAFramebuffer || !Fk.isMulti) return;
            let Xk = Fk.resolveMSAAColors ? Ik.COLOR_BUFFER_BIT : 0;
            Xk |= Fk._generateDepthBuffer && Fk.resolveMSAADepth ? Ik.DEPTH_BUFFER_BIT : 0, Xk |= Fk._generateStencilBuffer && Fk.resolveMSAAStencil ? Ik.STENCIL_BUFFER_BIT : 0;
            const Tk = Fk._attachments,
              ik = Tk.length;
            Ik.bindFramebuffer(Ik.READ_FRAMEBUFFER, Fk._MSAAFramebuffer), Ik.bindFramebuffer(Ik.DRAW_FRAMEBUFFER, Fk._framebuffer);
            for (let yk = 0; yk < ik; yk++) {
              const kk = Fk.textures[yk];
              for (let Fk = 0; Fk < ik; Fk++) Tk[Fk] = Ik.NONE;
              Tk[yk] = Ik[this.tw > 1 ? "COLOR_ATTACHMENT" + yk : "COLOR_ATTACHMENT" + yk + "_WEBGL"], Ik.readBuffer(Tk[yk]), Ik.drawBuffers(Tk), Ik.blitFramebuffer(0, 0, kk.width, kk.height, 0, 0, kk.width, kk.height, Xk, Ik.NEAREST)
            }
            for (let yk = 0; yk < ik; yk++) Tk[yk] = Ik[this.tw > 1 ? "COLOR_ATTACHMENT" + yk : "COLOR_ATTACHMENT" + yk + "_WEBGL"];
            Ik.drawBuffers(Tk), Ik.bindFramebuffer(this._gl.FRAMEBUFFER, Fk._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = ik;
        const tk = [],
          Zk = [],
          jk = [],
          ek = [],
          wk = [],
          Hk = [],
          Jk = [],
          xk = [];
        this._initTypes(Ik, tk, Zk, jk, ek, wk, Hk, Jk, xk, Tk);
        const Pk = !Tk || void 0 === Tk.generateDepthBuffer || Tk.generateDepthBuffer,
          Kk = !(!Tk || void 0 === Tk.generateStencilBuffer) && Tk.generateStencilBuffer,
          Qk = Tk && Tk.samples ? Tk.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: Zk,
          generateMipMaps: yk,
          generateDepthBuffer: Pk,
          generateStencilBuffer: Kk,
          generateDepthTexture: lk,
          depthTextureFormat: ak,
          types: tk,
          uyk: Ik,
          useSRGBBuffers: jk,
          samples: Qk,
          formats: ek,
          targetTypes: wk,
          faceIndex: Hk,
          layerIndex: Jk,
          layerCounts: xk,
          labels: ik,
          label: kk
        }, this._count = Ik, this._drawOnlyOnFirstAttachmentByDefault = Lk, Ik > 0 && (this._createInternalTextures(), this._createTextures(ik))
      }
      _initTypes(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
        for (let Lk = 0; Lk < kk; Lk++) qk && qk.types && void 0 !== qk.types[Lk] ? Fk.push(qk.types[Lk]) : Fk.push(qk && qk.defaultType ? qk.defaultType : 0), qk && qk.samplingModes && void 0 !== qk.samplingModes[Lk] ? Ik.push(qk.samplingModes[Lk]) : Ik.push(nk.g.BILINEAR_SAMPLINGMODE), qk && qk.useSRGBBuffers && void 0 !== qk.useSRGBBuffers[Lk] ? Xk.push(qk.useSRGBBuffers[Lk]) : Xk.push(!1), qk && qk.formats && void 0 !== qk.formats[Lk] ? Tk.push(qk.formats[Lk]) : Tk.push(5), qk && qk.targetTypes && void 0 !== qk.targetTypes[Lk] ? ik.push(qk.targetTypes[Lk]) : ik.push(3553), qk && qk.faceIndex && void 0 !== qk.faceIndex[Lk] ? yk.push(qk.faceIndex[Lk]) : yk.push(0), qk && qk.layerIndex && void 0 !== qk.layerIndex[Lk] ? lk.push(qk.layerIndex[Lk]) : lk.push(0), qk && qk.layerCounts && void 0 !== qk.layerCounts[Lk] ? ak.push(qk.layerCounts[Lk]) : ak.push(1)
      }
      _createInternaTextureIndexMapping() {
        const kk = {},
          Fk = [];
        if (!this._renderTarget) return Fk;
        const Ik = this._renderTarget.textures;
        for (let Xk = 0; Xk < Ik.length; Xk++) {
          const Tk = Ik[Xk];
          if (!Tk) continue;
          const ik = kk[Tk.uniqueId];
          void 0 !== ik ? Fk[Xk] = ik : kk[Tk.uniqueId] = Xk
        }
        return Fk
      }
      _rebuild() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || kk) return;
        const Xk = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), Fk && (this._releaseTextures(), this._createTextures(Ik));
        const Tk = this._renderTarget.textures;
        for (let ik = 0; ik < Tk.length; ik++) {
          const kk = this._textures[ik];
          void 0 !== Xk[ik] && this._renderTarget.setTexture(Tk[Xk[ik]], ik), kk._texture = Tk[ik], kk._texture && (kk._noMipmap = !kk._texture.useMipMaps, kk._useSRGBBuffer = kk._texture._useSRGBBuffer)
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
        const Fk = this._renderTarget.textures;
        this._textures = [];
        for (let Ik = 0; Ik < Fk.length; Ik++) {
          const Xk = new nk.g(null, this.mG());
          kk?.[Ik] && (Xk.name = kk[Ik]), Xk._texture = Fk[Ik], Xk._texture && (Xk._noMipmap = !Xk._texture.useMipMaps, Xk._useSRGBBuffer = Xk._texture._useSRGBBuffer), this._textures.push(Xk)
        }
      }
      setInternalTexture(kk, Fk) {
        let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === Fk && (this._texture = kk), this.renderTarget.setTexture(kk, Fk, Ik), this.textures[Fk] || (this.textures[Fk] = new nk.g(null, this.mG()), this.textures[Fk].name = this._textureNames?.[Fk] ?? this.textures[Fk].name), this.textures[Fk]._texture = kk, this.textures[Fk]._noMipmap = !kk.useMipMaps, this.textures[Fk]._useSRGBBuffer = kk._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[Fk] = kk.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[Fk] = kk.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[Fk] = kk._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[Fk])) {
          let Ik;
          Ik = kk.is2DArray ? 35866 : kk.isCube ? 34067 : kk.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[Fk] = Ik
        }
      }
      setLayerAndFaceIndex(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[kk] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[kk] = Fk), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[kk] = Ik), this.renderTarget.setLayerAndFaceIndex(kk, Fk, Ik))
      }
      setLayerAndFaceIndices(kk, Fk) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = kk, this._multiRenderTargetOptions.faceIndex = Fk, this.renderTarget.setLayerAndFaceIndices(kk, Fk))
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
      updateCount(kk, Fk, Ik) {
        this._multiRenderTargetOptions.uyk = kk, this._count = kk;
        const Xk = [],
          Tk = [],
          ik = [],
          yk = [],
          lk = [],
          ak = [],
          qk = [],
          Lk = [];
        this._textureNames = Ik, this._initTypes(kk, Xk, Tk, ik, yk, lk, ak, qk, Lk, Fk), this._multiRenderTargetOptions.types = Xk, this._multiRenderTargetOptions.samplingModes = Tk, this._multiRenderTargetOptions.useSRGBBuffers = ik, this._multiRenderTargetOptions.formats = yk, this._multiRenderTargetOptions.targetTypes = lk, this._multiRenderTargetOptions.faceIndex = ak, this._multiRenderTargetOptions.layerIndex = qk, this._multiRenderTargetOptions.layerCounts = Lk, this._multiRenderTargetOptions.labels = Ik, this._rebuild(!1, !0, Ik)
      }
      _unbindFrameBuffer(kk, Fk) {
        this._renderTarget && kk.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Fk)
        }))
      }
      dispose() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), kk ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const kk = this._renderTarget?.textures;
        if (kk) {
          for (let Fk = kk.length - 1; Fk >= 0; Fk--) this._textures[Fk]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var bF = Ik(40166);
    class RF {
      constructor(kk) {
        this.name = bF.b.NAME_GEOMETRYBUFFERRENDERER, this.Yw = kk
      }
      register() {
        this.Yw._gatherRenderTargetsStage.registerStep(bF.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(kk) {
        this.Yw._geometryBufferRenderer && kk.push(this.Yw._geometryBufferRenderer.getGBuffer())
      }
    }
    let UF = !1;
    var CF;
    ! function(kk) {
      kk[kk.Small = 0] = "Small", kk[kk.Medium = 1] = "Medium", kk[kk.Large = 2] = "Large", kk[kk.ExtraLarge = 3] = "ExtraLarge"
    }(CF || (CF = {}));
    const NF = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      cF = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class WF {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(kk) {
        if (kk && this._enableMeshBlendTag && !this._scene.Oe().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
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
      _forceTextureType(kk, Fk) {
        kk === WF.POSITION_TEXTURE_TYPE ? (this._positionIndex = Fk, this._enablePosition = !0) : kk === WF.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = Fk, this._enableVelocity = !0) : kk === WF.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = Fk, this._enableVelocityLinear = !0) : kk === WF.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = Fk, this._enableReflectivity = !0) : kk === WF.DEPTH_TEXTURE_TYPE ? (this._depthIndex = Fk, this._enableDepth = !0) : kk === WF.NORMAL_TEXTURE_TYPE ? (this._normalIndex = Fk, this._enableNormal = !0) : kk === WF.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = Fk, this._enableScreenspaceDepth = !0) : kk === WF.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = Fk, this._enableIrradiance = !0) : kk === WF.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = Fk, this._enableObjectId = !0) : kk === WF.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = Fk, this._enableMeshBlendTag = !0)
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
          case WF.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case WF.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case WF.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case WF.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case WF.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case WF.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case WF.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case WF.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case WF.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case WF.MESH_BLEND_TAG_TEXTURE_TYPE:
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
          const kk = this._scene.Oe(),
            Fk = Math.min(kk.getCaps().maxDrawBuffers ?? 1, 8),
            Ik = this._assignRenderTargetIndices()[0] + 1;
          if (kk.getCaps().drawBuffersExtension && Ik > Fk) throw new Error(`GeometryBufferRenderer: ${Ik} color attachments were requested, but this engine supports at most ${Fk}`)
        }
        this._enableObjectId = kk, kk || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(kk) {
        if (this._enableMeshBlendTag !== kk) {
          if (kk) {
            const kk = this._scene.Oe();
            if (! function(kk) {
                return "NATIVE" !== kk.shaderPlatformName && (kk.isWebGPU || 2 === kk.tw)
              }(kk)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !kk.isWebGPU && !kk.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const Fk = Math.min(kk.getCaps().maxDrawBuffers ?? 1, 8),
                Ik = this._assignRenderTargetIndices()[0] + 1;
              if (kk.getCaps().drawBuffersExtension && Ik > Fk) throw new Error(`GeometryBufferRenderer: ${Ik} color attachments were requested, but this engine supports at most ${Fk}`)
            }
          }
          this._enableMeshBlendTag = kk, kk || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Yw() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        var Tk;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new Ak.h(0, 0, 0, 0), this._clearDepthColor = new Ak.h(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = kk, this._ratioOrDimensions = Fk, this._useUbo = kk.Oe().supportsUniformBuffers, this._depthFormat = Ik, this._textureTypesAndFormats = Xk || {}, this._initShaderSourceAsync(), Tk = WF, UF || (UF = !0, Object.defineProperty(Ck.f.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(kk) {
            kk && kk.isSupported && (this._geometryBufferRenderer = kk)
          },
          enumerable: !0,
          configurable: !0
        }), Ck.f.prototype.enableGeometryBufferRenderer = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            Ik = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Tk(this, kk, Fk, Ik), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, Ck.f.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Tk._SceneComponentInitialization = kk => {
          let Fk = kk._getComponent(bF.b.NAME_GEOMETRYBUFFERRENDERER);
          Fk || (Fk = new RF(kk), kk.AIk(Fk))
        }), WF._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.Oe().isWebGPU && !WF.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Ik.e(337).then((() => Ik(61817))), Promise.all([Ik.e(336), Ik.e(348)]).then((() => Ik(61821)))])) : await Promise.all([Ik.e(320).then((() => Ik(61823))), Ik.e(319).then((() => Ik(61830)))]), this._shadersLoaded = !0
      }
      isReady(kk, Fk) {
        if (!this._shadersLoaded) return !1;
        const Ik = kk.Ue();
        if (Ik && Ik.disableDepthWrite) return !1;
        if (function(kk) {
            return kk._isGaussianSplatting || "GaussianSplattingMesh" === (Fk = kk.getClassName()) || "GaussianSplattingStream" === Fk;
            var Fk
          }(kk.getMesh())) return !1;
        const Xk = [],
          Tk = [ck.l.PositionKind],
          ik = kk.getMesh();
        ik.isVerticesDataPresent(ck.l.NormalKind) && (Xk.push("#define HAS_NORMAL_ATTRIBUTE"), Tk.push(ck.l.NormalKind));
        let yk = !1,
          lk = !1;
        if (Ik) {
          let kk = !1;
          if (Ik.needAlphaTestingForMesh(ik) && Ik.getAlphaTestTexture() && (Xk.push("#define ALPHATEST"), Xk.push(`#define ALPHATEST_UV${Ik.getAlphaTestTexture().coordinatesIndex+1}`), kk = !0), (Ik.bumpTexture || Ik.normalTexture || Ik.geometryNormalTexture) && rk.d.BumpTextureEnabled) {
            const Fk = Ik.bumpTexture || Ik.normalTexture || Ik.geometryNormalTexture;
            Xk.push("#define BUMP"), Xk.push(`#define BUMP_UV${Fk.coordinatesIndex+1}`), kk = !0
          }
          if (this._enableReflectivity) {
            let Fk = !1;
            if ("PBRMetallicRoughnessMaterial" === Ik.getClassName()) Ik.metallicRoughnessTexture && (Xk.push("#define ORMTEXTURE"), Xk.push(`#define REFLECTIVITY_UV${Ik.metallicRoughnessTexture.coordinatesIndex+1}`), Xk.push("#define METALLICWORKFLOW"), kk = !0, Fk = !0), null != Ik.metallic && (Xk.push("#define METALLIC"), Xk.push("#define METALLICWORKFLOW"), Fk = !0), null != Ik.roughness && (Xk.push("#define ROUGHNESS"), Xk.push("#define METALLICWORKFLOW"), Fk = !0), Fk && (Ik.baseTexture && (Xk.push("#define ALBEDOTEXTURE"), Xk.push(`#define ALBEDO_UV${Ik.baseTexture.coordinatesIndex+1}`), Ik.baseTexture.gammaSpace && Xk.push("#define GAMMAALBEDO"), kk = !0), Ik.baseColor && Xk.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === Ik.getClassName()) Ik.specularGlossinessTexture ? (Xk.push("#define SPECULARGLOSSINESSTEXTURE"), Xk.push(`#define REFLECTIVITY_UV${Ik.specularGlossinessTexture.coordinatesIndex+1}`), kk = !0, Ik.specularGlossinessTexture.gammaSpace && Xk.push("#define GAMMAREFLECTIVITYTEXTURE")) : Ik.specularColor && Xk.push("#define REFLECTIVITYCOLOR"), null != Ik.glossiness && Xk.push("#define GLOSSINESS");
            else if ("PBRMaterial" === Ik.getClassName()) Ik.metallicTexture && (Xk.push("#define ORMTEXTURE"), Xk.push(`#define REFLECTIVITY_UV${Ik.metallicTexture.coordinatesIndex+1}`), Xk.push("#define METALLICWORKFLOW"), kk = !0, Fk = !0), null != Ik.metallic && (Xk.push("#define METALLIC"), Xk.push("#define METALLICWORKFLOW"), Fk = !0), null != Ik.roughness && (Xk.push("#define ROUGHNESS"), Xk.push("#define METALLICWORKFLOW"), Fk = !0), Fk ? (Ik.albedoTexture && (Xk.push("#define ALBEDOTEXTURE"), Xk.push(`#define ALBEDO_UV${Ik.albedoTexture.coordinatesIndex+1}`), Ik.albedoTexture.gammaSpace && Xk.push("#define GAMMAALBEDO"), kk = !0), Ik.albedoColor && Xk.push("#define ALBEDOCOLOR")) : (Ik.reflectivityTexture ? (Xk.push("#define SPECULARGLOSSINESSTEXTURE"), Xk.push(`#define REFLECTIVITY_UV${Ik.reflectivityTexture.coordinatesIndex+1}`), Ik.reflectivityTexture.gammaSpace && Xk.push("#define GAMMAREFLECTIVITYTEXTURE"), kk = !0) : Ik.reflectivityColor && Xk.push("#define REFLECTIVITYCOLOR"), null != Ik.microSurface && Xk.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === Ik.getClassName()) Ik.specularTexture && (Xk.push("#define REFLECTIVITYTEXTURE"), Xk.push(`#define REFLECTIVITY_UV${Ik.specularTexture.coordinatesIndex+1}`), Ik.specularTexture.gammaSpace && Xk.push("#define GAMMAREFLECTIVITYTEXTURE"), kk = !0), Ik.specularColor && Xk.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === Ik.getClassName()) {
              const Fk = Ik;
              Xk.push("#define METALLIC"), Xk.push("#define ROUGHNESS"), Fk._useRoughnessFromMetallicTextureGreen && Fk.baseMetalnessTexture ? (Xk.push("#define ORMTEXTURE"), Xk.push(`#define REFLECTIVITY_UV${Fk.baseMetalnessTexture.coordinatesIndex+1}`), kk = !0) : Fk.baseMetalnessTexture ? (Xk.push("#define METALLIC_TEXTURE"), Xk.push(`#define METALLIC_UV${Fk.baseMetalnessTexture.coordinatesIndex+1}`), kk = !0) : Fk.specularRoughnessTexture && (Xk.push("#define ROUGHNESS_TEXTURE"), Xk.push(`#define ROUGHNESS_UV${Fk.specularRoughnessTexture.coordinatesIndex+1}`), kk = !0), Fk.baseColorTexture && (Xk.push("#define ALBEDOTEXTURE"), Xk.push(`#define ALBEDO_UV${Fk.baseColorTexture.coordinatesIndex+1}`), Fk.baseColorTexture.gammaSpace && Xk.push("#define GAMMAALBEDO"), kk = !0), Fk.baseColor && Xk.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Xk.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === Ik.getClassName())) {
            const Fk = Ik;
            Fk.subsurfaceWeight > 0 && Fk.subsurfaceWeightTexture && (Xk.push("#define SUBSURFACE_WEIGHT"), Xk.push(`#define SUBSURFACEWEIGHT_UV${Fk.subsurfaceWeightTexture.coordinatesIndex+1}`), kk = !0), Fk.transmissionWeight > 0 && Fk.transmissionWeightTexture && (Xk.push("#define TRANSMISSION_WEIGHT"), Xk.push(`#define TRANSMISSIONWEIGHT_UV${Fk.transmissionWeightTexture.coordinatesIndex+1}`), kk = !0)
          }
          kk && (Xk.push("#define NEED_UV"), ik.isVerticesDataPresent(ck.l.UVKind) && (Tk.push(ck.l.UVKind), Xk.push("#define UV1"), yk = !0), ik.isVerticesDataPresent(ck.l.UV2Kind) && (Tk.push(ck.l.UV2Kind), Xk.push("#define UV2"), lk = !0))
        }
        if (this._enableDepth && (Xk.push("#define DEPTH"), Xk.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Xk.push("#define NORMAL"), Xk.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Xk.push("#define POSITION"), Xk.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Xk.push("#define VELOCITY"), Xk.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(ik) && Xk.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Xk.push("#define VELOCITY_LINEAR"), Xk.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(ik) && Xk.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Xk.push("#define REFLECTIVITY"), Xk.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Xk.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Xk.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Xk.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Xk.push("#define IRRADIANCE");
          const kk = this._scene;
          if (kk.environmentTexture) {
            const Fk = {};
            let Tk = !1,
              ik = 0;
            "OpenPBRMaterial" !== Ik.getClassName() && "StandardMaterial" !== Ik.getClassName() && "PBRMetallicRoughnessMaterial" !== Ik.getClassName() && "PBRSpecularGlossinessMaterial" !== Ik.getClassName() && "PBRMaterial" !== Ik.getClassName() || (Tk = !!Ik.realtimeFiltering, ik = Ik.realtimeFilteringQuality || 0), (0, Mk.I)(kk, kk.environmentTexture, Fk, Tk, ik, !0);
            for (const kk in Fk) Fk[kk] && Xk.push("#define " + kk);
            Fk.USEIRRADIANCEMAP || Xk.push("#define SPHERICAL_HARMONICS");
            const yk = kk.postProcessRenderPipelineManager.supportedPipelines.find((kk => "IBLShadowsRenderPipeline" === kk.getClassName()));
            if (yk) {
              const kk = yk;
              kk._getAccumulatedTexture() && (Xk.push("#define IBL_SHADOW_TEXTURE"), kk.coloredShadows && Xk.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Xk.push("#define OBJECT_ID"), Xk.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Xk.push("#define MESH_BLEND_TAG"), Xk.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Xk.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Xk.push("#define ENCODE_NORMAL"), ik.useBones && ik.computeBonesUsingShaders && ik.skeleton ? (Tk.push(ck.l.MatricesIndicesKind), Tk.push(ck.l.MatricesWeightsKind), ik.numBoneInfluencers > 4 && (Tk.push(ck.l.MatricesIndicesExtraKind), Tk.push(ck.l.MatricesWeightsExtraKind)), Xk.push("#define NUM_BONE_INFLUENCERS " + ik.numBoneInfluencers), Xk.push("#define BONETEXTURE " + ik.skeleton.isUsingTextureForMatrices), Xk.push("#define BonesPerMesh " + (ik.skeleton.bones.length + 1))) : (Xk.push("#define NUM_BONE_INFLUENCERS 0"), Xk.push("#define BONETEXTURE false"), Xk.push("#define BonesPerMesh 0"));
        const ak = ik.morphTargetManager ? (0, Mk.D)(ik.morphTargetManager, Xk, Tk, ik, !0, !0, !1, yk, lk, !1) : 0;
        Fk && (Xk.push("#define INSTANCES"), (0, Mk.fb)(Tk, this._enableVelocity || this._enableVelocityLinear), kk.getRenderingMesh().hasThinInstances && Xk.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Xk.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Xk.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, tF.h)(Ik, this._scene, Xk);
        const qk = this._scene.Oe(),
          Lk = kk._getDrawWrapper(void 0, !0),
          tk = Lk.defines,
          Zk = Xk.join("\n");
        return tk !== Zk && Lk.setEffect(qk.createEffect("geometry", {
          attributes: Tk,
          uniformsNames: cF,
          samplers: NF,
          defines: Zk,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: ak
          },
          shaderLanguage: this.shaderLanguage
        }, qk), Zk), Lk.effect.isReady()
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
          this._scene.Oe().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Yw.Oe()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Yw.Oe().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const kk = [],
          Fk = [];
        let Ik = 0;
        return this._enableDepth && (this._depthIndex = Ik, Ik++, kk.push("gBuffer_Depth"), Fk.push(this._textureTypesAndFormats[WF.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = Ik, Ik++, kk.push("gBuffer_Normal"), Fk.push(this._textureTypesAndFormats[WF.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = Ik, Ik++, kk.push("gBuffer_Position"), Fk.push(this._textureTypesAndFormats[WF.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = Ik, Ik++, kk.push("gBuffer_Velocity"), Fk.push(this._textureTypesAndFormats[WF.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = Ik, Ik++, kk.push("gBuffer_VelocityLinear"), Fk.push(this._textureTypesAndFormats[WF.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = Ik, Ik++, kk.push("gBuffer_Reflectivity"), Fk.push(this._textureTypesAndFormats[WF.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = Ik, Ik++, kk.push("gBuffer_ScreenspaceDepth"), Fk.push(this._textureTypesAndFormats[WF.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = Ik, Ik++, kk.push("gBuffer_Irradiance"), Fk.push(this._textureTypesAndFormats[WF.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = Ik, Ik++, kk.push("gBuffer_ObjectId"), Fk.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = Ik, Ik++, kk.push("gBuffer_MeshBlendTag"), Fk.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [Ik, kk, Fk]
      }
      _createRenderTargets() {
        const kk = this._scene.Oe(),
          [Fk, Ik, Xk] = this._assignRenderTargetIndices(),
          Tk = Math.min(kk.getCaps().maxDrawBuffers ?? 1, 8);
        if (kk.getCaps().drawBuffersExtension && Fk > Tk) throw new Error(`GeometryBufferRenderer: ${Fk} color attachments were requested, but this engine supports at most ${Tk}`);
        let yk = 0;
        kk._caps.textureFloat && kk._caps.textureFloatLinearFiltering ? yk = 1 : kk._caps.textureHalfFloat && kk._caps.textureHalfFloatLinearFiltering && (yk = 2);
        const lk = this._getRenderTargetDimensions(),
          ak = [],
          qk = [],
          Lk = [];
        for (const ik of Xk) ik ? (ak.push(ik.textureType), qk.push(ik.textureFormat), Lk.push(ik.samplingMode ?? 2)) : (ak.push(yk), qk.push(5), Lk.push(2));
        if (this._normalsAreUnsigned = 11 === ak[WF.NORMAL_TEXTURE_TYPE] || 13 === ak[WF.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new uF("gBuffer", lk, Fk, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: ak,
            formats: qk,
            samplingModes: Lk,
            depthTextureFormat: this._depthFormat
          }, Ik.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = nk.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = nk.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const tk = [!0],
          Zk = [!1],
          jk = [!0];
        for (let ik = 1; ik < Fk; ++ik) tk.push(!0), jk.push(!1), Zk.push(!0);
        const ek = kk.buildTextureLayout(tk),
          wk = kk.buildTextureLayout(Zk),
          Hk = kk.buildTextureLayout(jk);
        this._multiRenderTarget.onClearObservable.add((kk => {
          const Fk = this.useSpecificClearForDepthTexture ? wk : ek;
          kk.clearAttachments(this._clearColor, Fk, !0, !0, !0), this.useSpecificClearForDepthTexture && kk.clearAttachments(this._clearDepthColor, Hk, !0, !1, !1), kk.bindAttachments(ek)
        })), this._resizeObserver = kk.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const Jk = kk => {
          const Fk = kk.getRenderingMesh(),
            Ik = kk.getEffectiveMesh(),
            Xk = this._scene,
            Tk = Xk.Oe(),
            yk = kk.Ue();
          if (!yk) return;
          if (Ik._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[Ik.uniqueId] && (this._previousTransformationMatrices[Ik.uniqueId] = {
              XZ: Nk.c.Identity(),
              viewProjection: Xk.getTransformMatrix()
            }, Fk.skeleton)) {
            const kk = Fk.skeleton.getTransformMatrices(Fk);
            this._previousBonesTransformationMatrices[Fk.uniqueId] = this._copyBonesTransformationMatrices(kk, new Float32Array(kk.length))
          }
          const lk = Fk._getInstancesRenderList(kk._id, !!kk.getReplacementMesh());
          if (lk.mustReturn) return;
          const ak = Tk.getCaps().instancedArrays && (null !== lk.visibleInstances[kk._id] || Fk.hasThinInstances),
            qk = Ik.getWorldMatrix();
          if (this.isReady(kk, ak)) {
            const Lk = kk._getDrawWrapper();
            if (!Lk) return;
            const tk = Lk.effect;
            let Zk;
            Tk.enableEffect(Lk), ak || Fk._bind(kk, tk, yk.fillMode), this._useUbo ? ((0, Mk.u)(tk, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (tk.setMatrix("viewProjection", Xk.getTransformMatrix()), tk.setMatrix("view", Xk.getViewMatrix()), this._scene.bindEyePosition(tk, "vEyePosition"));
            if (Fk._instanceDataStorage.isFrozen || !yk.backFaceCulling && null === yk.sideOrientation) Zk = Fk._effectiveSideOrientation;
            else {
              const kk = Ik._getWorldMatrixDeterminant();
              Zk = yk._getEffectiveOrientation(Fk), kk < 0 && (Zk = Zk === ik.c.ClockWiseSideOrientation ? ik.c.CounterClockWiseSideOrientation : ik.c.ClockWiseSideOrientation)
            }
            if (yk._preBind(Lk, Zk), yk.needAlphaTestingForMesh(Ik)) {
              const kk = yk.getAlphaTestTexture();
              kk && (tk.setTexture("diffuseSampler", kk), tk.setMatrix("diffuseMatrix", kk.getTextureMatrix()), tk.setFloat("alphaCutOff", yk.alphaCutOff ?? .4))
            }
            if ((yk.bumpTexture || yk.normalTexture || yk.geometryNormalTexture) && Xk.Oe().getCaps().standardDerivatives && rk.d.BumpTextureEnabled) {
              const kk = yk.bumpTexture || yk.normalTexture || yk.geometryNormalTexture;
              tk.setFloat3("vBumpInfos", kk.coordinatesIndex, 1 / kk.level, yk.parallaxScaleBias), tk.setMatrix("bumpMatrix", kk.getTextureMatrix()), tk.setTexture("bumpSampler", kk), tk.setFloat2("vTangentSpaceParams", yk.invertNormalMapX ? -1 : 1, yk.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === yk.getClassName()) null !== yk.metallicRoughnessTexture && (tk.setTexture("reflectivitySampler", yk.metallicRoughnessTexture), tk.setMatrix("reflectivityMatrix", yk.metallicRoughnessTexture.getTextureMatrix())), null !== yk.metallic && tk.setFloat("metallic", yk.metallic), null !== yk.roughness && tk.setFloat("glossiness", 1 - yk.roughness), null !== yk.baseTexture && (tk.setTexture("albedoSampler", yk.baseTexture), tk.setMatrix("albedoMatrix", yk.baseTexture.getTextureMatrix())), null !== yk.baseColor && tk.setColor3("albedoColor", yk.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === yk.getClassName()) null !== yk.specularGlossinessTexture ? (tk.setTexture("reflectivitySampler", yk.specularGlossinessTexture), tk.setMatrix("reflectivityMatrix", yk.specularGlossinessTexture.getTextureMatrix())) : null !== yk.specularColor && tk.setColor3("reflectivityColor", yk.specularColor), null !== yk.glossiness && tk.setFloat("glossiness", yk.glossiness);
            else if ("PBRMaterial" === yk.getClassName()) null !== yk.metallicTexture && (tk.setTexture("reflectivitySampler", yk.metallicTexture), tk.setMatrix("reflectivityMatrix", yk.metallicTexture.getTextureMatrix())), null !== yk.metallic && tk.setFloat("metallic", yk.metallic), null !== yk.roughness && tk.setFloat("glossiness", 1 - yk.roughness), null !== yk.roughness || null !== yk.metallic || null !== yk.metallicTexture ? (null !== yk.albedoTexture && (tk.setTexture("albedoSampler", yk.albedoTexture), tk.setMatrix("albedoMatrix", yk.albedoTexture.getTextureMatrix())), null !== yk.albedoColor && tk.setColor3("albedoColor", yk.albedoColor)) : (null !== yk.reflectivityTexture ? (tk.setTexture("reflectivitySampler", yk.reflectivityTexture), tk.setMatrix("reflectivityMatrix", yk.reflectivityTexture.getTextureMatrix())) : null !== yk.reflectivityColor && tk.setColor3("reflectivityColor", yk.reflectivityColor), null !== yk.microSurface && tk.setFloat("glossiness", yk.microSurface));
            else if ("StandardMaterial" === yk.getClassName()) null !== yk.specularTexture && (tk.setTexture("reflectivitySampler", yk.specularTexture), tk.setMatrix("reflectivityMatrix", yk.specularTexture.getTextureMatrix())), null !== yk.specularColor && tk.setColor3("reflectivityColor", yk.specularColor);
            else if ("OpenPBRMaterial" === yk.getClassName()) {
              const kk = yk;
              kk._useRoughnessFromMetallicTextureGreen && kk.baseMetalnessTexture ? (tk.setTexture("reflectivitySampler", kk.baseMetalnessTexture), tk.setMatrix("reflectivityMatrix", kk.baseMetalnessTexture.getTextureMatrix())) : kk.baseMetalnessTexture ? (tk.setTexture("metallicSampler", kk.baseMetalnessTexture), tk.setMatrix("metallicMatrix", kk.baseMetalnessTexture.getTextureMatrix())) : kk.specularRoughnessTexture && (tk.setTexture("roughnessSampler", kk.specularRoughnessTexture), tk.setMatrix("roughnessMatrix", kk.specularRoughnessTexture.getTextureMatrix())), tk.setFloat("metallic", kk.baseMetalness), tk.setFloat("glossiness", 1 - kk.specularRoughness), null !== kk.baseColorTexture && (tk.setTexture("albedoSampler", kk.baseColorTexture), tk.setMatrix("albedoMatrix", kk.baseColorTexture.getTextureMatrix())), null !== kk.baseColor && tk.setColor3("albedoColor", kk.baseColor)
            }
            if (this._enableIrradiance && Xk.environmentTexture) {
              const kk = Xk.environmentTexture,
                Fk = Xk.postProcessRenderPipelineManager.supportedPipelines.find((kk => "IBLShadowsRenderPipeline" === kk.getClassName()));
              if (Fk) {
                const kk = Fk._getAccumulatedTexture();
                kk && (tk.setTexture("iblShadowSampler", kk), tk.setFloat2("shadowTextureSize", kk.getSize().width, kk.getSize().height))
              }
              if (tk.setMatrix("reflectionMatrix", kk.getReflectionTextureMatrix()), tk.setFloat2("vReflectionInfos", kk.level * Xk.iblIntensity, 0), tk.setTexture("reflectionSampler", kk), kk.irradianceTexture && (tk.setTexture("irradianceSampler", kk.irradianceTexture), kk.irradianceTexture._dominantDirection && tk.setVector3("vReflectionDominantDirection", kk.irradianceTexture._dominantDirection)), kk.sphericalPolynomial) {
                const Fk = kk.sphericalPolynomial;
                if (Fk.preScaledHarmonics) {
                  const kk = Fk.preScaledHarmonics;
                  tk.setVector3("vSphericalL00", kk.l00), tk.setVector3("vSphericalL1_1", kk.l1_1), tk.setVector3("vSphericalL10", kk.l10), tk.setVector3("vSphericalL11", kk.l11), tk.setVector3("vSphericalL2_2", kk.l2_2), tk.setVector3("vSphericalL2_1", kk.l2_1), tk.setVector3("vSphericalL20", kk.l20), tk.setVector3("vSphericalL21", kk.l21), tk.setVector3("vSphericalL22", kk.l22)
                } else tk.setFloat3("vSphericalX", Fk.x.x, Fk.x.y, Fk.x.z), tk.setFloat3("vSphericalY", Fk.y.x, Fk.y.y, Fk.y.z), tk.setFloat3("vSphericalZ", Fk.z.x, Fk.z.y, Fk.z.z), tk.setFloat3("vSphericalXX_ZZ", Fk.xx.x - Fk.zz.x, Fk.xx.y - Fk.zz.y, Fk.xx.z - Fk.zz.z), tk.setFloat3("vSphericalYY_ZZ", Fk.yy.x - Fk.zz.x, Fk.yy.y - Fk.zz.y, Fk.yy.z - Fk.zz.z), tk.setFloat3("vSphericalZZ", Fk.zz.x, Fk.zz.y, Fk.zz.z), tk.setFloat3("vSphericalXY", Fk.xy.x, Fk.xy.y, Fk.xy.z), tk.setFloat3("vSphericalYZ", Fk.yz.x, Fk.yz.y, Fk.yz.z), tk.setFloat3("vSphericalZX", Fk.zx.x, Fk.zx.y, Fk.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === yk.getClassName()) {
                const kk = yk;
                tk.setFloat("vSubsurfaceWeight", kk.subsurfaceWeight), kk.subsurfaceWeightTexture && (tk.setTexture("subsurfaceWeightSampler", kk.subsurfaceWeightTexture), tk.setMatrix("subsurfaceWeightMatrix", kk.subsurfaceWeightTexture.getTextureMatrix())), tk.setFloat("vTransmissionWeight", kk.transmissionWeight), kk.transmissionWeightTexture && (tk.setTexture("transmissionWeightSampler", kk.transmissionWeightTexture), tk.setMatrix("transmissionWeightMatrix", kk.transmissionWeightTexture.getTextureMatrix())), tk.setFloat("vTransmissionScatterAnisotropy", kk.transmissionScatterAnisotropy), tk.setFloat("vSubsurfaceScatterAnisotropy", kk.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, tF.e)(tk, yk, this._scene), Fk.useBones && Fk.computeBonesUsingShaders && Fk.skeleton) {
              const kk = Fk.skeleton;
              if (kk.isUsingTextureForMatrices && tk.getUniformIndex("boneTextureInfo") > -1) {
                const Ik = kk.getTransformMatrixTexture(Fk);
                tk.setTexture("boneSampler", Ik), tk.setFloat2("boneTextureInfo", kk._textureWidth, kk._textureHeight)
              } else tk.setMatrices("mBones", Fk.skeleton.getTransformMatrices(Fk));
              (this._enableVelocity || this._enableVelocityLinear) && tk.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[Fk.uniqueId])
            }
            if ((0, Mk.s)(Fk, tk), Fk.morphTargetManager && Fk.morphTargetManager.isUsingTextureForTargets && Fk.morphTargetManager._bind(tk), (this._enableVelocity || this._enableVelocityLinear) && (tk.setMatrix("previousWorld", this._previousTransformationMatrices[Ik.uniqueId].XZ), tk.setMatrix("previousViewProjection", this._previousTransformationMatrices[Ik.uniqueId].viewProjection)), this._enableObjectId) {
              let kk = Fk.uniqueId;
              if (this.objectIdProvider) kk = (0, eF.j)(Fk, this.objectIdProvider);
              else if (kk > 16777215) throw new Error(`Invalid geometry object ID ${kk} for mesh "${Fk.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              tk.setFloat("objectId", kk)
            }
            if (this._enableMeshBlendTag) {
              const kk = this.meshBlendTagProvider ? (0, eF.g)(Fk, this.meshBlendTagProvider) : Fk.meshBlendingTag;
              tk.setInt("meshBlendTag", kk)
            }
            ak && Fk.hasThinInstances && tk.setMatrix("world", qk), Fk._processRendering(Ik, kk, tk, yk.fillMode, lk, ak, ((kk, Fk) => {
              kk || tk.setMatrix("world", Fk)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[Ik.uniqueId].XZ = qk.clone(), this._previousTransformationMatrices[Ik.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), Fk.skeleton && this._copyBonesTransformationMatrices(Fk.skeleton.getTransformMatrices(Fk), this._previousBonesTransformationMatrices[Ik.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (Fk, Ik, Xk) => {
          if ((Xk || 0 === Ik) && Fk.lK)
            for (let Tk = 0; Tk < Fk.lK.length; ++Tk) {
              const Ik = Fk.lK[Tk],
                Xk = Ik.Ue(),
                ik = Ik.getRenderingMesh();
              if (!Xk) continue;
              const yk = ik._getInstancesRenderList(Ik._id, !!Ik.getReplacementMesh()),
                lk = kk.getCaps().instancedArrays && (null !== yk.visibleInstances[Ik._id] || ik.hasThinInstances);
              if (!this.isReady(Ik, lk)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (Fk, Ik, Xk, Tk) => {
          let ik;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.Oe().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Tk.length) {
            for (kk.setColorWrite(!1), ik = 0; ik < Tk.length; ik++) Jk(Tk.data[ik]);
            kk.setColorWrite(!0)
          }
          for (ik = 0; ik < Fk.length; ik++) Jk(Fk.data[ik]);
          for (kk.setDepthWrite(!1), ik = 0; ik < Ik.length; ik++) Jk(Ik.data[ik]);
          if (this.renderTransparentMeshes)
            for (ik = 0; ik < Xk.length; ik++) Jk(Xk.data[ik]);
          kk.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const kk = this._scene.Oe();
        return {
          width: Math.max(1, Math.floor(kk.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(kk.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(kk, Fk) {
        for (let Ik = 0; Ik < kk.length; Ik++) Fk[Ik] = kk[Ik];
        return Fk
      }
    }
    WF.ForceGLSL = !1, WF.DEPTH_TEXTURE_TYPE = 0, WF.NORMAL_TEXTURE_TYPE = 1, WF.POSITION_TEXTURE_TYPE = 2, WF.VELOCITY_TEXTURE_TYPE = 3, WF.REFLECTIVITY_TEXTURE_TYPE = 4, WF.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, WF.VELOCITY_LINEAR_TEXTURE_TYPE = 6, WF.IRRADIANCE_TEXTURE_TYPE = 7, WF.OBJECT_ID_TEXTURE_TYPE = 8, WF.MESH_BLEND_TAG_TEXTURE_TYPE = 9, WF._SceneComponentInitialization = kk => {
      throw (0, xF.j)("GeometryBufferRendererSceneComponent")
    };
    var fF = Ik(37201);
    const BF = {
      effect: null,
      subMesh: null
    };

    function dF(kk) {
      if ("number" === typeof kk) return 1;
      if (kk instanceof Nk.p) return 2;
      if (kk instanceof Nk.t || kk instanceof Ak.e) return 3;
      if (kk instanceof Nk.u || kk instanceof Ak.h) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class YF {
      populateVectorFromLinkedProperties(kk) {
        const Fk = dF(kk);
        for (const Ik in this.linkedProperties) {
          const kk = this.linkedProperties[Ik],
            Xk = kk.numComponents;
          if (Fk < Xk || kk.targetUniformComponentOffset > Fk - Xk) return void(1 == Xk ? Ek.e.Error(`Float property ${kk.name} has an offset that is too large.`) : Ek.e.Error(`Vector${Xk} property ${kk.name} won't fit in Vector${Fk} or has an offset that is too large.`));
          "number" === typeof kk.value ? YF._tmpArray[kk.targetUniformComponentOffset] = kk.value : kk.value.toArray(YF._tmpArray, kk.targetUniformComponentOffset)
        }
        kk.hFk(YF._tmpArray)
      }
      constructor(kk, Fk) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = kk, this.numComponents = Fk
      }
    }
    YF._tmpArray = [0, 0, 0, 0];
    class AF {
      constructor(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ik = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = kk, this.targetUniformName = Ik, this.defaultValue = Fk, this.value = Fk, this.targetUniformComponentNum = Xk, this.targetUniformComponentOffset = Tk, this.requiredDefine = ik
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : dF(this.defaultValue)
      }
    }
    class gF {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(kk, Fk, Ik) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = kk, this.samplerPrefix = Fk, this.textureDefine = Ik
      }
    }
    class mF extends((0, HF.d)((0, wF.b)(Wk.e))) {}
    class hF extends(function(kk) {
      return class extends kk {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(mF)) {}
    class rF extends((0, gk.f)(hF)) {
      constructor(kk) {
        super(kk), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class DF extends((0, JF.e)(hk.e)) {}
    let MF = (() => {
        var kk, Fk, Xk, Tk, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk, Pk, Kk, Qk, sk, Vk, zk, Gk, pk, uk, bk, Ck, Wk, fk, Bk, dk, gk, hk, kF, FF, IF, XF, TF, iF, yF, lF, aF, qF, LF, wF, HF, JF, xF, PF, KF, QF, sF, VF, oF, vF, EF, OF, nF, GF, pF, uF, bF, RF, UF, CF, NF, cF, fF, dF, mF, hF, MF, kI, FI, II, XI, TI, iI, yI, lI, aI, qI, LI, tI, ZI, jI, eI, wI, HI, JI, xI, PI, KI, QI, sI, VI, zI, SI, oI, vI, EI, OI;
        let nI, GI, pI, uI, bI, RI, UI, CI, NI, cI, WI, fI, BI, dI, YI, AI, gI, mI, hI, rI, DI, MI, kX, FX, IX, XX, TX, iX, yX, lX, aX, qX, LX, tX, ZX, jX, eX, wX, HX, JX, xX, PX, KX, QX, sX, VX, zX, SX, oX, vX, EX, OX, nX, GX, pX, uX, bX, RX, UX, CX, NX, cX, WX, fX, BX, dX, YX, AX, gX, mX, hX, rX, DX, MX, kT, FT, IT, XT, TT, iT, yT, lT, aT, qT, LT, tT, ZT, jT, eT, wT, HT, JT, xT, PT, KT, QT, sT, VT, zT, ST, oT, vT, ET, OT, nT, GT = DF,
          pT = [],
          uT = [],
          bT = [],
          RT = [],
          UT = [],
          CT = [],
          NT = [],
          cT = [],
          WT = [],
          fT = [],
          BT = [],
          dT = [],
          YT = [],
          AT = [],
          gT = [],
          mT = [],
          hT = [],
          rT = [],
          DT = [],
          MT = [],
          ki = [],
          Fi = [],
          Ii = [],
          Xi = [],
          Ti = [],
          ii = [],
          yi = [],
          li = [],
          ai = [],
          qi = [],
          Li = [],
          ti = [],
          Zi = [],
          ji = [],
          ei = [],
          wi = [],
          Hi = [],
          Ji = [],
          xi = [],
          Pi = [],
          Ki = [],
          Qi = [],
          si = [],
          Vi = [],
          zi = [],
          Si = [],
          oi = [],
          vi = [],
          Ei = [],
          Oi = [],
          ni = [],
          Gi = [],
          ui = [],
          bi = [],
          Ri = [],
          Ui = [],
          Ci = [],
          Ni = [],
          ci = [],
          Wi = [],
          fi = [],
          Bi = [],
          di = [],
          Yi = [],
          Ai = [],
          gi = [],
          mi = [],
          ri = [],
          Di = [],
          Mi = [],
          ky = [],
          Fy = [],
          Iy = [],
          Xy = [],
          Ty = [],
          iy = [],
          yy = [],
          ly = [],
          ay = [],
          qy = [],
          Ly = [],
          ty = [],
          Zy = [],
          jy = [],
          ey = [],
          wy = [],
          Hy = [],
          Jy = [],
          xy = [],
          Py = [],
          Ky = [],
          Qy = [],
          sy = [],
          Vy = [],
          zy = [],
          Sy = [],
          oy = [],
          vy = [],
          Ey = [],
          Oy = [],
          ny = [],
          Gy = [],
          py = [],
          uy = [],
          by = [],
          Ry = [],
          Uy = [],
          Cy = [],
          Ny = [],
          cy = [],
          Wy = [],
          fy = [],
          By = [],
          dy = [],
          Yy = [],
          Ay = [],
          gy = [],
          my = [],
          hy = [],
          ry = [],
          Dy = [],
          My = [],
          kl = [],
          Fl = [],
          Il = [],
          Xl = [],
          Tl = [],
          il = [],
          yl = [],
          ll = [],
          al = [],
          ql = [],
          Ll = [],
          tl = [],
          Zl = [],
          jl = [],
          el = [],
          wl = [],
          Hl = [],
          Jl = [],
          xl = [],
          Pl = [],
          Kl = [],
          Ql = [],
          sl = [],
          Vl = [],
          zl = [],
          Sl = [],
          ol = [],
          vl = [],
          El = [],
          Ol = [],
          nl = [],
          Gl = [],
          pl = [],
          ul = [],
          bl = [],
          Rl = [],
          Ul = [],
          Cl = [],
          Nl = [],
          cl = [],
          Wl = [],
          fl = [],
          Bl = [],
          dl = [],
          Yl = [],
          Al = [],
          gl = [],
          ml = [],
          hl = [],
          rl = [],
          Dl = [],
          Ml = [],
          ka = [],
          Fa = [],
          Ia = [],
          Xa = [],
          Ta = [],
          ia = [],
          ya = [],
          la = [],
          aa = [],
          qa = [],
          La = [],
          ta = [],
          Za = [],
          ja = [],
          ea = [],
          wa = [],
          Ha = [],
          Ja = [],
          xa = [],
          Pa = [],
          Ka = [],
          Qa = [],
          sa = [],
          Va = [],
          za = [],
          Sa = [],
          oa = [],
          va = [],
          Ea = [],
          Oa = [],
          na = [];
        return kk = class extends GT {
          get baseWeight() {
            return (0, Sk.e)(this, Fk, "f")
          }
          set baseWeight(kk) {
            (0, Sk.f)(this, Fk, kk, "f")
          }
          get baseWeightTexture() {
            return (0, Sk.e)(this, Xk, "f")
          }
          set baseWeightTexture(kk) {
            (0, Sk.f)(this, Xk, kk, "f")
          }
          get baseColor() {
            return (0, Sk.e)(this, Tk, "f")
          }
          set baseColor(kk) {
            (0, Sk.f)(this, Tk, kk, "f")
          }
          get baseColorTexture() {
            return (0, Sk.e)(this, yk, "f")
          }
          set baseColorTexture(kk) {
            (0, Sk.f)(this, yk, kk, "f")
          }
          get baseDiffuseRoughness() {
            return (0, Sk.e)(this, lk, "f")
          }
          set baseDiffuseRoughness(kk) {
            (0, Sk.f)(this, lk, kk, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, Sk.e)(this, ak, "f")
          }
          set baseDiffuseRoughnessTexture(kk) {
            (0, Sk.f)(this, ak, kk, "f")
          }
          get baseMetalness() {
            return (0, Sk.e)(this, qk, "f")
          }
          set baseMetalness(kk) {
            (0, Sk.f)(this, qk, kk, "f")
          }
          get baseMetalnessTexture() {
            return (0, Sk.e)(this, Lk, "f")
          }
          set baseMetalnessTexture(kk) {
            (0, Sk.f)(this, Lk, kk, "f")
          }
          get specularWeight() {
            return (0, Sk.e)(this, tk, "f")
          }
          set specularWeight(kk) {
            (0, Sk.f)(this, tk, kk, "f")
          }
          get specularWeightTexture() {
            return (0, Sk.e)(this, Zk, "f")
          }
          set specularWeightTexture(kk) {
            (0, Sk.f)(this, Zk, kk, "f")
          }
          get specularColor() {
            return (0, Sk.e)(this, jk, "f")
          }
          set specularColor(kk) {
            (0, Sk.f)(this, jk, kk, "f")
          }
          get specularColorTexture() {
            return (0, Sk.e)(this, ek, "f")
          }
          set specularColorTexture(kk) {
            (0, Sk.f)(this, ek, kk, "f")
          }
          get specularRoughness() {
            return (0, Sk.e)(this, wk, "f")
          }
          set specularRoughness(kk) {
            (0, Sk.f)(this, wk, kk, "f")
          }
          get specularRoughnessTexture() {
            return (0, Sk.e)(this, Hk, "f")
          }
          set specularRoughnessTexture(kk) {
            (0, Sk.f)(this, Hk, kk, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, Sk.e)(this, Jk, "f")
          }
          set specularRoughnessAnisotropy(kk) {
            (0, Sk.f)(this, Jk, kk, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, Sk.e)(this, xk, "f")
          }
          set specularRoughnessAnisotropyTexture(kk) {
            (0, Sk.f)(this, xk, kk, "f")
          }
          get specularIor() {
            return (0, Sk.e)(this, Pk, "f")
          }
          set specularIor(kk) {
            (0, Sk.f)(this, Pk, kk, "f")
          }
          get transmissionWeight() {
            return (0, Sk.e)(this, Kk, "f")
          }
          set transmissionWeight(kk) {
            (0, Sk.f)(this, Kk, kk, "f")
          }
          get transmissionWeightTexture() {
            return (0, Sk.e)(this, Qk, "f")
          }
          set transmissionWeightTexture(kk) {
            (0, Sk.f)(this, Qk, kk, "f")
          }
          get transmissionColor() {
            return (0, Sk.e)(this, sk, "f")
          }
          set transmissionColor(kk) {
            (0, Sk.f)(this, sk, kk, "f")
          }
          get transmissionColorTexture() {
            return (0, Sk.e)(this, Vk, "f")
          }
          set transmissionColorTexture(kk) {
            (0, Sk.f)(this, Vk, kk, "f")
          }
          get transmissionDepth() {
            return (0, Sk.e)(this, zk, "f")
          }
          set transmissionDepth(kk) {
            (0, Sk.f)(this, zk, kk, "f")
          }
          get transmissionDepthTexture() {
            return (0, Sk.e)(this, Gk, "f")
          }
          set transmissionDepthTexture(kk) {
            (0, Sk.f)(this, Gk, kk, "f")
          }
          get transmissionScatter() {
            return (0, Sk.e)(this, pk, "f")
          }
          set transmissionScatter(kk) {
            (0, Sk.f)(this, pk, kk, "f")
          }
          get transmissionScatterTexture() {
            return (0, Sk.e)(this, uk, "f")
          }
          set transmissionScatterTexture(kk) {
            (0, Sk.f)(this, uk, kk, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, Sk.e)(this, bk, "f")
          }
          set transmissionScatterAnisotropy(kk) {
            (0, Sk.f)(this, bk, kk, "f")
          }
          get transmissionDispersionScale() {
            return (0, Sk.e)(this, Ck, "f")
          }
          set transmissionDispersionScale(kk) {
            (0, Sk.f)(this, Ck, kk, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, Sk.e)(this, Wk, "f")
          }
          set transmissionDispersionScaleTexture(kk) {
            (0, Sk.f)(this, Wk, kk, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, Sk.e)(this, fk, "f")
          }
          set transmissionDispersionAbbeNumber(kk) {
            (0, Sk.f)(this, fk, kk, "f")
          }
          get subsurfaceWeight() {
            return (0, Sk.e)(this, Bk, "f")
          }
          set subsurfaceWeight(kk) {
            (0, Sk.f)(this, Bk, kk, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, Sk.e)(this, dk, "f")
          }
          set subsurfaceWeightTexture(kk) {
            (0, Sk.f)(this, dk, kk, "f")
          }
          get subsurfaceColor() {
            return (0, Sk.e)(this, gk, "f")
          }
          set subsurfaceColor(kk) {
            (0, Sk.f)(this, gk, kk, "f")
          }
          get subsurfaceColorTexture() {
            return (0, Sk.e)(this, hk, "f")
          }
          set subsurfaceColorTexture(kk) {
            (0, Sk.f)(this, hk, kk, "f")
          }
          get subsurfaceRadius() {
            return (0, Sk.e)(this, kF, "f")
          }
          set subsurfaceRadius(kk) {
            (0, Sk.f)(this, kF, kk, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, Sk.e)(this, FF, "f")
          }
          set subsurfaceRadiusScale(kk) {
            (0, Sk.f)(this, FF, kk, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, Sk.e)(this, IF, "f")
          }
          set subsurfaceRadiusScaleTexture(kk) {
            (0, Sk.f)(this, IF, kk, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, Sk.e)(this, XF, "f")
          }
          set subsurfaceScatterAnisotropy(kk) {
            (0, Sk.f)(this, XF, kk, "f")
          }
          get coatWeight() {
            return (0, Sk.e)(this, TF, "f")
          }
          set coatWeight(kk) {
            (0, Sk.f)(this, TF, kk, "f")
          }
          get coatWeightTexture() {
            return (0, Sk.e)(this, iF, "f")
          }
          set coatWeightTexture(kk) {
            (0, Sk.f)(this, iF, kk, "f")
          }
          get coatColor() {
            return (0, Sk.e)(this, yF, "f")
          }
          set coatColor(kk) {
            (0, Sk.f)(this, yF, kk, "f")
          }
          get coatColorTexture() {
            return (0, Sk.e)(this, lF, "f")
          }
          set coatColorTexture(kk) {
            (0, Sk.f)(this, lF, kk, "f")
          }
          get coatRoughness() {
            return (0, Sk.e)(this, aF, "f")
          }
          set coatRoughness(kk) {
            (0, Sk.f)(this, aF, kk, "f")
          }
          get coatRoughnessTexture() {
            return (0, Sk.e)(this, qF, "f")
          }
          set coatRoughnessTexture(kk) {
            (0, Sk.f)(this, qF, kk, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, Sk.e)(this, LF, "f")
          }
          set coatRoughnessAnisotropy(kk) {
            (0, Sk.f)(this, LF, kk, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, Sk.e)(this, wF, "f")
          }
          set coatRoughnessAnisotropyTexture(kk) {
            (0, Sk.f)(this, wF, kk, "f")
          }
          get coatIor() {
            return (0, Sk.e)(this, HF, "f")
          }
          set coatIor(kk) {
            (0, Sk.f)(this, HF, kk, "f")
          }
          get coatDarkening() {
            return (0, Sk.e)(this, JF, "f")
          }
          set coatDarkening(kk) {
            (0, Sk.f)(this, JF, kk, "f")
          }
          get coatDarkeningTexture() {
            return (0, Sk.e)(this, xF, "f")
          }
          set coatDarkeningTexture(kk) {
            (0, Sk.f)(this, xF, kk, "f")
          }
          get fuzzWeight() {
            return (0, Sk.e)(this, PF, "f")
          }
          set fuzzWeight(kk) {
            (0, Sk.f)(this, PF, kk, "f")
          }
          get fuzzWeightTexture() {
            return (0, Sk.e)(this, KF, "f")
          }
          set fuzzWeightTexture(kk) {
            (0, Sk.f)(this, KF, kk, "f")
          }
          get fuzzColor() {
            return (0, Sk.e)(this, QF, "f")
          }
          set fuzzColor(kk) {
            (0, Sk.f)(this, QF, kk, "f")
          }
          get fuzzColorTexture() {
            return (0, Sk.e)(this, sF, "f")
          }
          set fuzzColorTexture(kk) {
            (0, Sk.f)(this, sF, kk, "f")
          }
          get fuzzRoughness() {
            return (0, Sk.e)(this, VF, "f")
          }
          set fuzzRoughness(kk) {
            (0, Sk.f)(this, VF, kk, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, Sk.e)(this, oF, "f")
          }
          set fuzzRoughnessTexture(kk) {
            (0, Sk.f)(this, oF, kk, "f")
          }
          get geometryThinWalled() {
            return (0, Sk.e)(this, vF, "f")
          }
          set geometryThinWalled(kk) {
            (0, Sk.f)(this, vF, kk, "f")
          }
          get geometryNormalTexture() {
            return (0, Sk.e)(this, EF, "f")
          }
          set geometryNormalTexture(kk) {
            (0, Sk.f)(this, EF, kk, "f")
          }
          get geometryTangent() {
            return (0, Sk.e)(this, OF, "f")
          }
          set geometryTangent(kk) {
            (0, Sk.f)(this, OF, kk, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(kk) {
            this.geometryTangent = new Nk.p(Math.cos(kk), Math.sin(kk))
          }
          get geometryTangentTexture() {
            return (0, Sk.e)(this, nF, "f")
          }
          set geometryTangentTexture(kk) {
            (0, Sk.f)(this, nF, kk, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, Sk.e)(this, GF, "f")
          }
          set geometryCoatNormalTexture(kk) {
            (0, Sk.f)(this, GF, kk, "f")
          }
          get geometryCoatTangent() {
            return (0, Sk.e)(this, pF, "f")
          }
          set geometryCoatTangent(kk) {
            (0, Sk.f)(this, pF, kk, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(kk) {
            this.geometryCoatTangent = new Nk.p(Math.cos(kk), Math.sin(kk))
          }
          get geometryCoatTangentTexture() {
            return (0, Sk.e)(this, uF, "f")
          }
          set geometryCoatTangentTexture(kk) {
            (0, Sk.f)(this, uF, kk, "f")
          }
          get geometryOpacity() {
            return (0, Sk.e)(this, bF, "f")
          }
          set geometryOpacity(kk) {
            (0, Sk.f)(this, bF, kk, "f")
          }
          get geometryOpacityTexture() {
            return (0, Sk.e)(this, RF, "f")
          }
          set geometryOpacityTexture(kk) {
            (0, Sk.f)(this, RF, kk, "f")
          }
          get geometryThickness() {
            return (0, Sk.e)(this, UF, "f")
          }
          set geometryThickness(kk) {
            (0, Sk.f)(this, UF, kk, "f")
          }
          get geometryThicknessTexture() {
            return (0, Sk.e)(this, CF, "f")
          }
          set geometryThicknessTexture(kk) {
            (0, Sk.f)(this, CF, kk, "f")
          }
          get emissionLuminance() {
            return (0, Sk.e)(this, NF, "f")
          }
          set emissionLuminance(kk) {
            (0, Sk.f)(this, NF, kk, "f")
          }
          get emissionColor() {
            return (0, Sk.e)(this, cF, "f")
          }
          set emissionColor(kk) {
            (0, Sk.f)(this, cF, kk, "f")
          }
          get emissionColorTexture() {
            return (0, Sk.e)(this, fF, "f")
          }
          set emissionColorTexture(kk) {
            (0, Sk.f)(this, fF, kk, "f")
          }
          get thinFilmWeight() {
            return (0, Sk.e)(this, dF, "f")
          }
          set thinFilmWeight(kk) {
            (0, Sk.f)(this, dF, kk, "f")
          }
          get thinFilmWeightTexture() {
            return (0, Sk.e)(this, mF, "f")
          }
          set thinFilmWeightTexture(kk) {
            (0, Sk.f)(this, mF, kk, "f")
          }
          get thinFilmThickness() {
            return (0, Sk.e)(this, hF, "f")
          }
          set thinFilmThickness(kk) {
            (0, Sk.f)(this, hF, kk, "f")
          }
          get thinFilmThicknessMin() {
            return (0, Sk.e)(this, MF, "f")
          }
          set thinFilmThicknessMin(kk) {
            (0, Sk.f)(this, MF, kk, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, Sk.e)(this, kI, "f")
          }
          set thinFilmThicknessTexture(kk) {
            (0, Sk.f)(this, kI, kk, "f")
          }
          get thinFilmIor() {
            return (0, Sk.e)(this, FI, "f")
          }
          set thinFilmIor(kk) {
            (0, Sk.f)(this, FI, kk, "f")
          }
          get ambientOcclusionTexture() {
            return (0, Sk.e)(this, II, "f")
          }
          set ambientOcclusionTexture(kk) {
            (0, Sk.f)(this, II, kk, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(kk) {
            this._sssQuality !== kk && (this._sssQuality = kk, this.UFk(1))
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
            return (0, Sk.e)(this, XI, "f")
          }
          set directIntensity(kk) {
            (0, Sk.f)(this, XI, kk, "f")
          }
          get environmentIntensity() {
            return (0, Sk.e)(this, TI, "f")
          }
          set environmentIntensity(kk) {
            (0, Sk.f)(this, TI, kk, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, Sk.e)(this, iI, "f")
          }
          set useSpecularWeightFromTextureAlpha(kk) {
            (0, Sk.f)(this, iI, kk, "f")
          }
          get forceAlphaTest() {
            return (0, Sk.e)(this, yI, "f")
          }
          set forceAlphaTest(kk) {
            (0, Sk.f)(this, yI, kk, "f")
          }
          get alphaCutOff() {
            return (0, Sk.e)(this, lI, "f")
          }
          set alphaCutOff(kk) {
            (0, Sk.f)(this, lI, kk, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, Sk.e)(this, aI, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(kk) {
            (0, Sk.f)(this, aI, kk, "f")
          }
          get useAmbientInGrayScale() {
            return (0, Sk.e)(this, qI, "f")
          }
          set useAmbientInGrayScale(kk) {
            (0, Sk.f)(this, qI, kk, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(Ak.e.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === ik.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(kk) {
            kk !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = kk ? ik.c.LIGHTFALLOFF_PHYSICAL : ik.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === ik.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(kk) {
            kk !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = kk ? ik.c.LIGHTFALLOFF_GLTF : ik.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, Sk.e)(this, LI, "f")
          }
          set useObjectSpaceNormalMap(kk) {
            (0, Sk.f)(this, LI, kk, "f")
          }
          get useParallax() {
            return (0, Sk.e)(this, tI, "f")
          }
          set useParallax(kk) {
            (0, Sk.f)(this, tI, kk, "f")
          }
          get useParallaxOcclusion() {
            return (0, Sk.e)(this, ZI, "f")
          }
          set useParallaxOcclusion(kk) {
            (0, Sk.f)(this, ZI, kk, "f")
          }
          get parallaxScaleBias() {
            return (0, Sk.e)(this, jI, "f")
          }
          set parallaxScaleBias(kk) {
            (0, Sk.f)(this, jI, kk, "f")
          }
          get disableLighting() {
            return (0, Sk.e)(this, eI, "f")
          }
          set disableLighting(kk) {
            (0, Sk.f)(this, eI, kk, "f")
          }
          get forceIrradianceInFragment() {
            return (0, Sk.e)(this, wI, "f")
          }
          set forceIrradianceInFragment(kk) {
            (0, Sk.f)(this, wI, kk, "f")
          }
          get maxSimultaneousLights() {
            return (0, Sk.e)(this, HI, "f")
          }
          set maxSimultaneousLights(kk) {
            (0, Sk.f)(this, HI, kk, "f")
          }
          get invertNormalMapX() {
            return (0, Sk.e)(this, JI, "f")
          }
          set invertNormalMapX(kk) {
            (0, Sk.f)(this, JI, kk, "f")
          }
          get invertNormalMapY() {
            return (0, Sk.e)(this, xI, "f")
          }
          set invertNormalMapY(kk) {
            (0, Sk.f)(this, xI, kk, "f")
          }
          get twoSidedLighting() {
            return (0, Sk.e)(this, PI, "f")
          }
          set twoSidedLighting(kk) {
            (0, Sk.f)(this, PI, kk, "f")
          }
          get useAlphaFresnel() {
            return (0, Sk.e)(this, KI, "f")
          }
          set useAlphaFresnel(kk) {
            (0, Sk.f)(this, KI, kk, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, Sk.e)(this, QI, "f")
          }
          set useLinearAlphaFresnel(kk) {
            (0, Sk.f)(this, QI, kk, "f")
          }
          get environmentBRDFTexture() {
            return (0, Sk.e)(this, sI, "f")
          }
          set environmentBRDFTexture(kk) {
            (0, Sk.f)(this, sI, kk, "f")
          }
          get forceNormalForward() {
            return (0, Sk.e)(this, VI, "f")
          }
          set forceNormalForward(kk) {
            (0, Sk.f)(this, VI, kk, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, Sk.e)(this, zI, "f")
          }
          set enableSpecularAntiAliasing(kk) {
            (0, Sk.f)(this, zI, kk, "f")
          }
          get useHorizonOcclusion() {
            return (0, Sk.e)(this, SI, "f")
          }
          set useHorizonOcclusion(kk) {
            (0, Sk.f)(this, SI, kk, "f")
          }
          get useRadianceOcclusion() {
            return (0, Sk.e)(this, oI, "f")
          }
          set useRadianceOcclusion(kk) {
            (0, Sk.f)(this, oI, kk, "f")
          }
          get unlit() {
            return (0, Sk.e)(this, vI, "f")
          }
          set unlit(kk) {
            (0, Sk.f)(this, vI, kk, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Sk.e)(this, EI, "f")
          }
          set applyDecalMapAfterDetailMap(kk) {
            (0, Sk.f)(this, EI, kk, "f")
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
            this._refractionHighQualityBlur !== kk && (this._refractionHighQualityBlur = kk, this.UFk(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(kk) {
            this._realTimeFiltering = kk, this.UFk(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(kk) {
            this._realTimeFilteringQuality = kk, this.UFk(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(kk) {
            this._fuzzSampleNumber = kk, this.UFk(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, Sk.e)(this, OI, "f")
          }
          set debugMode(kk) {
            (0, Sk.f)(this, OI, kk, "f")
          }
          constructor(Ik, vk) {
            super(Ik, vk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || kk.ForceGLSL), Fk.set(this, ((0, Sk.n)(this, pT), (0, Sk.n)(this, uT, void 0))), this._baseWeight = ((0, Sk.n)(this, bT), new AF("base_weight", 1, "vBaseWeight", 1)), Xk.set(this, (0, Sk.n)(this, RT, void 0)), this._baseWeightTexture = ((0, Sk.n)(this, UT), new gF("base_weight", "baseWeight", "BASE_WEIGHT")), Tk.set(this, (0, Sk.n)(this, CT, void 0)), this._baseColor = ((0, Sk.n)(this, NT), new AF("base_color", Ak.e.White(), "vBaseColor", 4)), yk.set(this, (0, Sk.n)(this, cT, void 0)), this._baseColorTexture = ((0, Sk.n)(this, WT), new gF("base_color", "baseColor", "BASE_COLOR")), lk.set(this, (0, Sk.n)(this, fT, void 0)), this._baseDiffuseRoughness = ((0, Sk.n)(this, BT), new AF("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), ak.set(this, (0, Sk.n)(this, dT, void 0)), this._baseDiffuseRoughnessTexture = ((0, Sk.n)(this, YT), new gF("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), qk.set(this, (0, Sk.n)(this, AT, void 0)), this._baseMetalness = ((0, Sk.n)(this, gT), new AF("base_metalness", 0, "vReflectanceInfo", 4, 0)), Lk.set(this, (0, Sk.n)(this, mT, void 0)), this._baseMetalnessTexture = ((0, Sk.n)(this, hT), new gF("base_metalness", "baseMetalness", "BASE_METALNESS")), tk.set(this, (0, Sk.n)(this, rT, void 0)), this._specularWeight = ((0, Sk.n)(this, DT), new AF("specular_weight", 1, "vReflectanceInfo", 4, 3)), Zk.set(this, (0, Sk.n)(this, MT, void 0)), this._specularWeightTexture = ((0, Sk.n)(this, ki), new gF("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), jk.set(this, (0, Sk.n)(this, Fi, void 0)), this._specularColor = ((0, Sk.n)(this, Ii), new AF("specular_color", Ak.e.White(), "vSpecularColor", 4)), ek.set(this, (0, Sk.n)(this, Xi, void 0)), this._specularColorTexture = ((0, Sk.n)(this, Ti), new gF("specular_color", "specularColor", "SPECULAR_COLOR")), wk.set(this, (0, Sk.n)(this, ii, void 0)), this._specularRoughness = ((0, Sk.n)(this, yi), new AF("specular_roughness", .3, "vReflectanceInfo", 4, 1)), Hk.set(this, (0, Sk.n)(this, li, void 0)), this._specularRoughnessTexture = ((0, Sk.n)(this, ai), new gF("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), Jk.set(this, (0, Sk.n)(this, qi, void 0)), this._specularRoughnessAnisotropy = ((0, Sk.n)(this, Li), new AF("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), xk.set(this, (0, Sk.n)(this, ti, void 0)), this._specularRoughnessAnisotropyTexture = ((0, Sk.n)(this, Zi), new gF("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Pk.set(this, (0, Sk.n)(this, ji, void 0)), this._specularIor = ((0, Sk.n)(this, ei), new AF("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), Kk.set(this, (0, Sk.n)(this, wi, void 0)), this._transmissionWeight = ((0, Sk.n)(this, Hi), new AF("transmission_weight", 0, "vTransmissionWeight", 1)), Qk.set(this, (0, Sk.n)(this, Ji, void 0)), this._transmissionWeightTexture = ((0, Sk.n)(this, xi), new gF("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), sk.set(this, (0, Sk.n)(this, Pi, void 0)), this._transmissionColor = ((0, Sk.n)(this, Ki), new AF("transmission_color", Ak.e.White(), "vTransmissionColor", 3, 0)), Vk.set(this, (0, Sk.n)(this, Qi, void 0)), this._transmissionColorTexture = ((0, Sk.n)(this, si), new gF("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), zk.set(this, (0, Sk.n)(this, Vi, void 0)), this._transmissionDepth = ((0, Sk.n)(this, zi), new AF("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Gk.set(this, (0, Sk.n)(this, Si, void 0)), this._transmissionDepthTexture = ((0, Sk.n)(this, oi), new gF("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), pk.set(this, (0, Sk.n)(this, vi, void 0)), this._transmissionScatter = ((0, Sk.n)(this, Ei), new AF("transmission_scatter", Ak.e.Black(), "vTransmissionScatter", 3, 0)), uk.set(this, (0, Sk.n)(this, Oi, void 0)), this._transmissionScatterTexture = ((0, Sk.n)(this, ni), new gF("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), bk.set(this, (0, Sk.n)(this, Gi, void 0)), this._transmissionScatterAnisotropy = ((0, Sk.n)(this, ui), new AF("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), Ck.set(this, (0, Sk.n)(this, bi, void 0)), this._transmissionDispersionScale = ((0, Sk.n)(this, Ri), new AF("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), Wk.set(this, (0, Sk.n)(this, Ui, void 0)), this._transmissionDispersionScaleTexture = ((0, Sk.n)(this, Ci), new gF("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), fk.set(this, (0, Sk.n)(this, Ni, void 0)), this._transmissionDispersionAbbeNumber = ((0, Sk.n)(this, ci), new AF("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), Bk.set(this, (0, Sk.n)(this, Wi, void 0)), this._subsurfaceWeight = ((0, Sk.n)(this, fi), new AF("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), dk.set(this, (0, Sk.n)(this, Bi, void 0)), this._subsurfaceWeightTexture = ((0, Sk.n)(this, di), new gF("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), gk.set(this, (0, Sk.n)(this, Yi, void 0)), this._subsurfaceColor = ((0, Sk.n)(this, Ai), new AF("subsurface_color", new Ak.e(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), hk.set(this, (0, Sk.n)(this, gi, void 0)), this._subsurfaceColorTexture = ((0, Sk.n)(this, mi), new gF("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), kF.set(this, (0, Sk.n)(this, ri, void 0)), this._subsurfaceRadius = ((0, Sk.n)(this, Di), new AF("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), FF.set(this, (0, Sk.n)(this, Mi, void 0)), this._subsurfaceRadiusScale = ((0, Sk.n)(this, ky), new AF("subsurface_radius_scale", new Ak.e(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), IF.set(this, (0, Sk.n)(this, Fy, void 0)), this._subsurfaceRadiusScaleTexture = ((0, Sk.n)(this, Iy), new gF("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), XF.set(this, (0, Sk.n)(this, Xy, void 0)), this._subsurfaceScatterAnisotropy = ((0, Sk.n)(this, Ty), new AF("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), TF.set(this, (0, Sk.n)(this, iy, void 0)), this._coatWeight = ((0, Sk.n)(this, yy), new AF("coat_weight", 0, "vCoatWeight", 1, 0)), iF.set(this, (0, Sk.n)(this, ly, void 0)), this._coatWeightTexture = ((0, Sk.n)(this, ay), new gF("coat_weight", "coatWeight", "COAT_WEIGHT")), yF.set(this, (0, Sk.n)(this, qy, void 0)), this._coatColor = ((0, Sk.n)(this, Ly), new AF("coat_color", Ak.e.White(), "vCoatColor", 3, 0)), lF.set(this, (0, Sk.n)(this, ty, void 0)), this._coatColorTexture = ((0, Sk.n)(this, Zy), new gF("coat_color", "coatColor", "COAT_COLOR")), aF.set(this, (0, Sk.n)(this, jy, void 0)), this._coatRoughness = ((0, Sk.n)(this, ey), new AF("coat_roughness", 0, "vCoatRoughness", 1, 0)), qF.set(this, (0, Sk.n)(this, wy, void 0)), this._coatRoughnessTexture = ((0, Sk.n)(this, Hy), new gF("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), LF.set(this, (0, Sk.n)(this, Jy, void 0)), this._coatRoughnessAnisotropy = ((0, Sk.n)(this, xy), new AF("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), wF.set(this, (0, Sk.n)(this, Py, void 0)), this._coatRoughnessAnisotropyTexture = ((0, Sk.n)(this, Ky), new gF("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), HF.set(this, (0, Sk.n)(this, Qy, void 0)), this._coatIor = ((0, Sk.n)(this, sy), new AF("coat_ior", 1.5, "vCoatIor", 1, 0)), JF.set(this, (0, Sk.n)(this, Vy, void 0)), this._coatDarkening = ((0, Sk.n)(this, zy), new AF("coat_darkening", 1, "vCoatDarkening", 1, 0)), xF.set(this, (0, Sk.n)(this, Sy, void 0)), this._coatDarkeningTexture = ((0, Sk.n)(this, oy), new gF("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, PF.set(this, (0, Sk.n)(this, vy, void 0)), this._fuzzWeight = ((0, Sk.n)(this, Ey), new AF("fuzz_weight", 0, "vFuzzWeight", 1, 0)), KF.set(this, (0, Sk.n)(this, Oy, void 0)), this._fuzzWeightTexture = ((0, Sk.n)(this, ny), new gF("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), QF.set(this, (0, Sk.n)(this, Gy, void 0)), this._fuzzColor = ((0, Sk.n)(this, py), new AF("fuzz_color", Ak.e.White(), "vFuzzColor", 3, 0)), sF.set(this, (0, Sk.n)(this, uy, void 0)), this._fuzzColorTexture = ((0, Sk.n)(this, by), new gF("fuzz_color", "fuzzColor", "FUZZ_COLOR")), VF.set(this, (0, Sk.n)(this, Ry, void 0)), this._fuzzRoughness = ((0, Sk.n)(this, Uy), new AF("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), oF.set(this, (0, Sk.n)(this, Cy, void 0)), this._fuzzRoughnessTexture = ((0, Sk.n)(this, Ny), new gF("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), vF.set(this, (0, Sk.n)(this, cy, void 0)), this._geometryThinWalled = ((0, Sk.n)(this, Wy), new AF("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), EF.set(this, (0, Sk.n)(this, fy, void 0)), this._geometryNormalTexture = ((0, Sk.n)(this, By), new gF("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), OF.set(this, (0, Sk.n)(this, dy, void 0)), this._geometryTangent = ((0, Sk.n)(this, Yy), new AF("geometry_tangent", new Nk.p(1, 0), "vSpecularAnisotropy", 3, 0)), nF.set(this, (0, Sk.n)(this, Ay, void 0)), this._geometryTangentTexture = ((0, Sk.n)(this, gy), new gF("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), GF.set(this, (0, Sk.n)(this, my, void 0)), this._geometryCoatNormalTexture = ((0, Sk.n)(this, hy), new gF("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), pF.set(this, (0, Sk.n)(this, ry, void 0)), this._geometryCoatTangent = ((0, Sk.n)(this, Dy), new AF("geometry_coat_tangent", new Nk.p(1, 0), "vGeometryCoatTangent", 2, 0)), uF.set(this, (0, Sk.n)(this, My, void 0)), this._geometryCoatTangentTexture = ((0, Sk.n)(this, kl), new gF("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), bF.set(this, (0, Sk.n)(this, Fl, void 0)), this._geometryOpacity = ((0, Sk.n)(this, Il), new AF("geometry_opacity", 1, "vBaseColor", 4, 3)), RF.set(this, (0, Sk.n)(this, Xl, void 0)), this._geometryOpacityTexture = ((0, Sk.n)(this, Tl), new gF("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), UF.set(this, (0, Sk.n)(this, il, void 0)), this._geometryThickness = ((0, Sk.n)(this, yl), new AF("geometry_thickness", 0, "vGeometryThickness", 1, 0)), CF.set(this, (0, Sk.n)(this, ll, void 0)), this._geometryThicknessTexture = ((0, Sk.n)(this, al), new gF("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), NF.set(this, (0, Sk.n)(this, ql, void 0)), this._emissionLuminance = ((0, Sk.n)(this, Ll), new AF("emission_luminance", 1, "vLightingIntensity", 4, 1)), cF.set(this, (0, Sk.n)(this, tl, void 0)), this._emissionColor = ((0, Sk.n)(this, Zl), new AF("emission_color", Ak.e.Black(), "vEmissionColor", 3)), fF.set(this, (0, Sk.n)(this, jl, void 0)), this._emissionColorTexture = ((0, Sk.n)(this, el), new gF("emission_color", "emissionColor", "EMISSION_COLOR")), dF.set(this, (0, Sk.n)(this, wl, void 0)), this._thinFilmWeight = ((0, Sk.n)(this, Hl), new AF("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), mF.set(this, (0, Sk.n)(this, Jl, void 0)), this._thinFilmWeightTexture = ((0, Sk.n)(this, xl), new gF("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), hF.set(this, (0, Sk.n)(this, Pl, void 0)), this._thinFilmThickness = ((0, Sk.n)(this, Kl), new AF("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), MF.set(this, (0, Sk.n)(this, Ql, void 0)), this._thinFilmThicknessMin = ((0, Sk.n)(this, sl), new AF("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), kI.set(this, (0, Sk.n)(this, Vl, void 0)), this._thinFilmThicknessTexture = ((0, Sk.n)(this, zl), new gF("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), FI.set(this, (0, Sk.n)(this, Sl, void 0)), this._thinFilmIor = ((0, Sk.n)(this, ol), new AF("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), II.set(this, (0, Sk.n)(this, vl, void 0)), this._ambientOcclusionTexture = ((0, Sk.n)(this, El), new gF("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = kk.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, XI.set(this, (0, Sk.n)(this, Ol, 1)), TI.set(this, ((0, Sk.n)(this, nl), (0, Sk.n)(this, Gl, 1))), iI.set(this, ((0, Sk.n)(this, pl), (0, Sk.n)(this, ul, !1))), yI.set(this, ((0, Sk.n)(this, bl), (0, Sk.n)(this, Rl, !1))), lI.set(this, ((0, Sk.n)(this, Ul), (0, Sk.n)(this, Cl, .4))), aI.set(this, ((0, Sk.n)(this, Nl), (0, Sk.n)(this, cl, !1))), qI.set(this, ((0, Sk.n)(this, Wl), (0, Sk.n)(this, fl, !1))), LI.set(this, ((0, Sk.n)(this, Bl), (0, Sk.n)(this, dl, !1))), tI.set(this, ((0, Sk.n)(this, Yl), (0, Sk.n)(this, Al, !1))), ZI.set(this, ((0, Sk.n)(this, gl), (0, Sk.n)(this, ml, !1))), jI.set(this, ((0, Sk.n)(this, hl), (0, Sk.n)(this, rl, .05))), eI.set(this, ((0, Sk.n)(this, Dl), (0, Sk.n)(this, Ml, !1))), wI.set(this, ((0, Sk.n)(this, ka), (0, Sk.n)(this, Fa, !1))), HI.set(this, ((0, Sk.n)(this, Ia), (0, Sk.n)(this, Xa, 4))), JI.set(this, ((0, Sk.n)(this, Ta), (0, Sk.n)(this, ia, !1))), xI.set(this, ((0, Sk.n)(this, ya), (0, Sk.n)(this, la, !1))), PI.set(this, ((0, Sk.n)(this, aa), (0, Sk.n)(this, qa, !1))), KI.set(this, ((0, Sk.n)(this, La), (0, Sk.n)(this, ta, !1))), QI.set(this, ((0, Sk.n)(this, Za), (0, Sk.n)(this, ja, !1))), sI.set(this, ((0, Sk.n)(this, ea), (0, Sk.n)(this, wa, null))), VI.set(this, ((0, Sk.n)(this, Ha), (0, Sk.n)(this, Ja, !1))), zI.set(this, ((0, Sk.n)(this, xa), (0, Sk.n)(this, Pa, !1))), SI.set(this, ((0, Sk.n)(this, Ka), (0, Sk.n)(this, Qa, !0))), oI.set(this, ((0, Sk.n)(this, sa), (0, Sk.n)(this, Va, !0))), vI.set(this, ((0, Sk.n)(this, za), (0, Sk.n)(this, Sa, !1))), EI.set(this, ((0, Sk.n)(this, oa), (0, Sk.n)(this, va, !1))), this._lightingInfos = ((0, Sk.n)(this, Ea), new Nk.u(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = ik.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Ok.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, OI.set(this, (0, Sk.n)(this, Oa, 0)), this.debugLimit = ((0, Sk.n)(this, na), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = ik.c.MATERIAL_OPAQUE, this.mG() && !this.mG()?.Oe().isWebGPU && this.mG().Oe().tw < 2 && Ek.e.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), kk._noiseTextures[this.mG().uniqueId] || (kk._noiseTextures[this.mG().uniqueId] = new nk.g(SF.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.mG(), !1, !0, 1), this.mG().hG.addOnce((() => {
              kk._noiseTextures[this.mG().uniqueId]?.dispose(), delete kk._noiseTextures[this.mG().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), rk.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), rk.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Uk(this.mG()), this._environmentFuzzBRDFTexture = Rk(this.mG()), this.prePassConfiguration = new Yk.c, this._propertyList = {};
            for (const kk of Object.getOwnPropertyNames(this)) {
              const Fk = this[kk];
              Fk instanceof AF && (this._propertyList[kk] = Fk)
            }
            Object.keys(this._propertyList).forEach((kk => {
              const Fk = this._propertyList[kk];
              let Ik = this._uniformsList[Fk.targetUniformName];
              Ik ? Ik.numComponents !== Fk.targetUniformComponentNum ? Ek.e.Error(`Uniform ${Fk.targetUniformName} already exists of size ${Ik.numComponents}, but trying to set it to ${Fk.targetUniformComponentNum}.`) : Ik.requiredDefine !== Fk.requiredDefine && (Ik.requiredDefine = void 0) : (Ik = new YF(Fk.targetUniformName, Fk.targetUniformComponentNum), Ik.requiredDefine = Fk.requiredDefine, this._uniformsList[Fk.targetUniformName] = Ik), "" === Ik.firstLinkedKey && (Ik.firstLinkedKey = Fk.name), Ik.linkedProperties[Fk.name] = Fk
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const kk of Object.getOwnPropertyNames(this)) {
              const Fk = this[kk];
              Fk instanceof gF && (this._samplersList[kk] = Fk)
            }
            for (const kk in this._samplersList) {
              const Fk = this._samplersList[kk].textureDefine;
              this._samplerDefines[Fk] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[Fk + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[Fk + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(rk.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(rk.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
            return this._hasAlphaChannel() && this._transparencyMode !== ik.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
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
          clone(Fk) {
            let Ik = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Tk = zF.b.Clone((() => new kk(Fk, this.mG())), this, {
              cloneTexturesOnlyOnce: Ik
            });
            return Tk.id = Fk, Tk.name = Fk, this.stencil.copyTo(Tk.stencil), this._clonePlugins(Tk, Xk), Tk
          }
          serialize() {
            const kk = super.serialize();
            return kk.customType = "BABYLON.OpenPBRMaterial", kk
          }
          static Parse(Fk, Ik, Xk) {
            const Tk = zF.b.Parse((() => new kk(Fk.name, Ik)), Fk, Ik, Xk);
            return Fk.stencil && Tk.stencil.parse(Fk.stencil, Ik, Xk), ik.c._ParsePlugins(Fk, Tk, Ik, Xk), Tk
          }
          forceCompilation(kk, Fk, Ik) {
            const Xk = {
              clipPlane: !1,
              useInstances: !1,
              ...Ik
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const Ik = new rF({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Tk = this._prepareEffect(kk, kk, Ik, void 0, void 0, Xk.useInstances, Xk.clipPlane);
              this._onEffectCreatedObservable && (BF.effect = Tk, BF.subMesh = null, this._onEffectCreatedObservable.notifyObservers(BF)), Tk.isReady() ? Fk && Fk(this) : Tk.onCompileObservable.add((() => {
                Fk && Fk(this)
              }))
            })()
          }
          isReadyForSubMesh(Fk, Ik, Xk) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Tk = Ik._drawWrapper;
            if (Tk.effect && this.isFrozen && Tk._wasPreviouslyReady && Tk._wasPreviouslyUsingInstances === Xk) return !0;
            Ik.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Ik.materialDefines = new rF({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const ik = Ik.materialDefines;
            if (this._isReadyForSubMesh(Ik)) return !0;
            const yk = this.mG(),
              lk = yk.Oe();
            if (ik._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, yk.texturesEnabled)) {
              for (const kk in this._samplersList) {
                const Fk = this._samplersList[kk];
                if (Fk.value && !Fk.value.isReadyOrNotBlocking()) return !1
              }
              const Fk = this._getRadianceTexture();
              if (Fk && rk.d.ReflectionTextureEnabled) {
                if (!Fk.isReadyOrNotBlocking()) return !1;
                if (Fk.irradianceTexture) {
                  if (!Fk.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!Fk.sphericalPolynomial && Fk.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && rk.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && rk.d.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && rk.d.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (kk._noiseTextures[yk.uniqueId] && !kk._noiseTextures[yk.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = ik, this._eventInfo.subMesh = Ik, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (ik._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (ik.AREALIGHTUSED)
              for (let kk = 0; kk < Fk.lightSources.length; kk++)
                if (!Fk.lightSources[kk]._isReady()) return !1;
            if (lk.getCaps().standardDerivatives || Fk.isVerticesDataPresent(ck.l.NormalKind) || (Fk.createNormals(!0), Ek.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + Fk.name)), !(0, Mk.b)(yk, Fk, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const ak = Ik.effect,
              qk = ik._areLightsDisposed,
              Lk = this._prepareEffect(Fk, Ik.getRenderingMesh(), ik, this.onCompiled, this.onError, Xk, null);
            let tk = !1;
            if (Lk)
              if (this._onEffectCreatedObservable && (BF.effect = Lk, BF.subMesh = Ik, this._onEffectCreatedObservable.notifyObservers(BF)), this.allowShaderHotSwapping && ak && !Lk.isReady()) {
                if (ik.markAsUnprocessed(), tk = this.isFrozen, qk) return ik._areLightsDisposed = !0, !1
              } else yk.resetCachedMaterial(), Ik.setEffect(Lk, ik, this._materialContext);
            return !(!Ik.effect || !Ik.effect.isReady()) && (ik._renderId = yk.getRenderId(), Tk._wasPreviouslyReady = !tk, Tk._wasPreviouslyUsingInstances = !!Xk, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const kk = this._uniformBuffer;
            kk.addUniform("vTangentSpaceParams", 2), kk.addUniform("vLightingIntensity", 4), kk.addUniform("pointSize", 1), kk.addUniform("vDebugMode", 2), kk.addUniform("renderTargetSize", 2), kk.addUniform("cameraInfo", 4), kk.addUniform("vTextureRepetitionHexTilingParams", 4), kk.addUniform("backgroundRefractionMatrix", 16), kk.addUniform("vBackgroundRefractionInfos", 3), (0, Mk.$)(kk, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((Fk => {
              kk.addUniform(Fk.name, Fk.numComponents)
            })), Object.values(this._samplersList).forEach((Fk => {
              kk.addUniform(Fk.samplerInfoName, 2), kk.addUniform(Fk.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(kk, Fk, Ik, Xk) {
            if (0 === this.geometryThickness) kk.updateFloat("vGeometryThickness", 0);
            else {
              Xk.getRenderingMesh().getWorldMatrix().decompose(Nk.l.Ge[0]);
              const Fk = Math.max(Math.abs(Nk.l.Ge[0].x), Math.abs(Nk.l.Ge[0].y), Math.abs(Nk.l.Ge[0].z));
              kk.updateFloat("vGeometryThickness", this.geometryThickness * Fk)
            }
          }
          bindForSubMesh(Fk, Ik, Xk) {
            const Tk = this.mG(),
              ik = Xk.materialDefines;
            if (!ik) return;
            const yk = Xk.effect;
            if (!yk) return;
            this._activeEffect = yk, Ik.getMeshUniformBuffer().bindToEffect(yk, "Mesh"), Ik.transferToEffect(Fk);
            const lk = Tk.Oe();
            this._uniformBuffer.bindToEffect(yk, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Tk, Ik, Fk, this.isFrozen), eF.e.Bind(lk.currentRenderPassId, this._activeEffect, Ik, Fk, this);
            const ak = Tk.activeCamera;
            ak ? this._uniformBuffer.updateFloat4("cameraInfo", ak.minZ, ak.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const qk = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", qk[0], qk[1], qk[2], qk[3]), this._eventInfo.subMesh = Xk, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), ik.OBJECTSPACE_NORMALMAP && (Fk.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Lk = this._mustRebind(Tk, yk, Xk, Ik.visibility),
              tk = lk._features.needToAlwaysBindUniformBuffers;
            (0, Mk.e)(Ik, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, ZF.c)(this._activeEffect, this._vertexPullingMetadata);
            const Zk = this._uniformBuffer;
            if (Lk) {
              this.bindViewProjection(yk);
              const Fk = this._getRadianceTexture();
              if (!Zk.useUbo || !this.isFrozen || !Zk.isSync || Xk._drawWrapper._forceRebindOnNextCall) {
                if (Tk.texturesEnabled) {
                  for (const kk in this._samplersList) {
                    const Fk = this._samplersList[kk];
                    Fk.value && (Zk.updateFloat2(Fk.samplerInfoName, Fk.value.coordinatesIndex, Fk.value.level), (0, Mk.v)(Fk.value, Zk, Fk.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Tk._mirroredCameraPosition ? Zk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Zk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Mk.i)(Tk, ik, Zk, Ak.e.White(), Fk, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && Zk.updateFloat("pointSize", this.pointSize);
                const kk = this._uniformsArray;
                for (let Fk = 0, Ik = kk.length; Fk < Ik; Fk++) {
                  const Ik = kk[Fk];
                  (void 0 === Ik.requiredDefine || ik[Ik.requiredDefine]) && (4 === Ik.numComponents ? (Ik.populateVectorFromLinkedProperties(Nk.l.Vector4[0]), Zk.updateVector4(Ik.name, Nk.l.Vector4[0])) : 3 === Ik.numComponents ? (Ik.populateVectorFromLinkedProperties(Nk.l.Ge[0]), Zk.updateVector3(Ik.name, Nk.l.Ge[0])) : 2 === Ik.numComponents ? (Ik.populateVectorFromLinkedProperties(Nk.l.Vector2[0]), Zk.updateFloat2(Ik.name, Nk.l.Vector2[0].x, Nk.l.Vector2[0].y)) : 1 === Ik.numComponents && Zk.updateFloat(Ik.name, Ik.linkedProperties[Ik.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Tk.environmentIntensity, this._lightingInfos.w = 1, Zk.updateVector4("vLightingIntensity", this._lightingInfos), Zk.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Tk.texturesEnabled) {
                for (const kk in this._samplersList) {
                  const Fk = this._samplersList[kk];
                  Fk.value && Zk.setTexture(Fk.samplerName, Fk.value)
                }
                if ((0, Mk.j)(Tk, ik, Zk, Fk, this.realTimeFiltering), ik.ENVIRONMENTBRDF && Zk.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), ik.FUZZENVIRONMENTBRDF && Zk.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), ik.REFRACTED_BACKGROUND && (Zk.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), Zk.I9("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Nk.l.Ge[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), Zk.updateVector3("vBackgroundRefractionInfos", Nk.l.Ge[1])), (ik.ANISOTROPIC || ik.FUZZ || ik.REFRACTED_BACKGROUND || ik.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Zk.setTexture("blueNoiseSampler", kk._noiseTextures[this.mG().uniqueId]), ik.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const kk = this.sssIrradianceTexture.getSize().width,
                    Fk = this.sssIrradianceTexture.getSize().height;
                  Zk.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), Zk.setTexture("sceneDepthSampler", this.sssDepthTexture), Zk.updateFloat2("renderTargetSize", kk, Fk)
                }
              }
              this.mG().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Ik) && this.mG().depthPeelingRenderer.bind(yk), this._eventInfo.subMesh = Xk, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, tF.e)(this._activeEffect, this, Tk), this.bindEyePosition(yk)
            } else tk && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Tk, Tk.Oe(), Xk), !Lk && this.isFrozen && !tk || !Tk.lightsEnabled || this._disableLighting || (0, Mk.n)(Tk, Ik, this._activeEffect, ik, this._maxSimultaneousLights), !Lk && this.isFrozen || (this.bindView(yk), (0, Mk.f)(Tk, Ik, this._activeEffect, !0), ik.NUM_MORPH_INFLUENCERS && (0, Mk.s)(Ik, this._activeEffect), ik.BAKED_VERTEX_ANIMATION_TEXTURE && Ik.bakedVertexAnimationManager?.bind(yk, ik.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Mk.p)(ik, this._activeEffect, Tk)), this._afterBind(Ik, this._activeEffect, Xk), Zk.update()
          }
          getAnimatables() {
            const kk = super.getAnimatables();
            for (const Fk in this._samplersList) {
              const Ik = this._samplersList[Fk];
              Ik.value && Ik.value.animations && Ik.value.animations.length > 0 && kk.push(Ik.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && kk.push(this._radianceTexture), kk
          }
          getActiveTextures() {
            const kk = super.getActiveTextures();
            for (const Fk in this._samplersList) {
              const Ik = this._samplersList[Fk];
              Ik.value && kk.push(Ik.value)
            }
            return this._radianceTexture && kk.push(this._radianceTexture), kk
          }
          hasTexture(kk) {
            if (super.hasTexture(kk)) return !0;
            for (const Fk in this._samplersList) {
              if (this._samplersList[Fk].value === kk) return !0
            }
            return this._radianceTexture === kk
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(kk, Fk) {
            if (this._breakShaderLoadedCheck = !0, Fk) {
              this._environmentBRDFTexture && this.mG().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.mG().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const kk in this._samplersList) {
                const Fk = this._samplersList[kk];
                Fk.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(kk, Fk)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.mG().environmentTexture
          }
          _prepareEffect(Fk, Ik, Xk) {
            let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              yk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              lk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(Fk, Ik, Xk, yk, lk), !Xk.isDirty) return null;
            Xk.markAsProcessed();
            const ak = this.mG().Oe(),
              qk = new Dk.c;
            let Lk = 0;
            Xk.USESPHERICALINVERTEX && qk.addFallback(Lk++, "USESPHERICALINVERTEX"), Xk.FOG && qk.addFallback(Lk, "FOG"), Xk.SPECULARAA && qk.addFallback(Lk, "SPECULARAA"), Xk.POINTSIZE && qk.addFallback(Lk, "POINTSIZE"), Xk.LOGARITHMICDEPTH && qk.addFallback(Lk, "LOGARITHMICDEPTH"), Xk.PARALLAX && qk.addFallback(Lk, "PARALLAX"), Xk.PARALLAX_RHS && qk.addFallback(Lk, "PARALLAX_RHS"), Xk.PARALLAXOCCLUSION && qk.addFallback(Lk++, "PARALLAXOCCLUSION"), Xk.ENVIRONMENTBRDF && qk.addFallback(Lk++, "ENVIRONMENTBRDF"), Xk.TANGENT && qk.addFallback(Lk++, "TANGENT"), Lk = (0, Mk.w)(Xk, qk, this._maxSimultaneousLights, Lk), Xk.SPECULARTERM && qk.addFallback(Lk++, "SPECULARTERM"), Xk.USESPHERICALFROMREFLECTIONMAP && qk.addFallback(Lk++, "USESPHERICALFROMREFLECTIONMAP"), Xk.USEIRRADIANCEMAP && qk.addFallback(Lk++, "USEIRRADIANCEMAP"), Xk.NORMAL && qk.addFallback(Lk++, "NORMAL"), Xk.VERTEXCOLOR && qk.addFallback(Lk++, "VERTEXCOLOR"), Xk.MORPHTARGETS && qk.addFallback(Lk++, "MORPHTARGETS"), Xk.MULTIVIEW && qk.addFallback(0, "MULTIVIEW");
            const tk = [ck.l.PositionKind];
            Xk.NORMAL && tk.push(ck.l.NormalKind), Xk.TANGENT && tk.push(ck.l.TangentKind);
            for (let kk = 1; kk <= 6; ++kk) Xk["UV" + kk] && tk.push(`uv${1===kk?"":kk}`);
            Xk.VERTEXCOLOR && tk.push(ck.l.ColorKind), (0, Mk.y)(tk, Fk, Xk, qk), (0, Mk.A)(tk, Xk), (0, Mk.C)(tk, Fk, Xk), (0, Mk.x)(tk, Fk, Xk);
            let Zk = "openpbr";
            const jk = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const kk in this._uniformsList) jk.push(kk);
            const ek = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Xk.FUZZENVIRONMENTBRDF && ek.push("environmentFuzzBrdfSampler"), Xk.REFRACTED_BACKGROUND && ek.push("backgroundRefractionSampler"), (Xk.ANISOTROPIC || Xk.FUZZ || Xk.REFRACTED_BACKGROUND || Xk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && ek.push("blueNoiseSampler"), Xk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (ek.push("sceneIrradianceSampler"), ek.push("sceneDepthSampler"));
            for (const kk in this._samplersList) {
              const Fk = this._samplersList[kk];
              ek.push(Fk.samplerName), jk.push(Fk.samplerInfoName), jk.push(Fk.samplerMatrixName)
            }(0, Mk.cb)(jk, ek, !0);
            const wk = ["Material", "Scene", "Mesh"],
              Hk = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Xk.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = qk, this._eventInfo.fallbackRank = Lk, this._eventInfo.defines = Xk, this._eventInfo.uniforms = jk, this._eventInfo.attributes = tk, this._eventInfo.samplers = ek, this._eventInfo.uniformBuffersNames = wk, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Fk, this._eventInfo.indexParameters = Hk, this._callbackPluginEventGeneric(128, this._eventInfo), eF.e.AddUniformsAndSamplers(jk, ek), Yk.c.AddUniforms(jk), Yk.c.AddSamplers(ek), (0, tF.d)(jk), this._useVertexPulling) {
              const kk = Ik?.geometry;
              kk && (this._vertexPullingMetadata = (0, ZF.f)(kk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, Fk) => {
                jk.push(`vp_${Fk}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            mk.d && (mk.d.PrepareUniforms(jk, Xk), mk.d.PrepareSamplers(ek, Xk)), (0, Mk.db)({
              uniformsNames: jk,
              uniformBuffersNames: wk,
              samplers: ek,
              defines: Xk,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const Jk = {};
            this.customShaderNameResolve && (Zk = this.customShaderNameResolve(Zk, jk, wk, ek, Xk, tk, Jk));
            const xk = Xk.toString(),
              Pk = ak.createEffect(Zk, {
                attributes: tk,
                uniformsNames: jk,
                uniformBuffersNames: wk,
                samplers: ek,
                defines: xk,
                fallbacks: qk,
                onCompiled: Tk,
                onError: ik,
                indexParameters: Hk,
                processFinalCode: Jk.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Xk.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: kk._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, ak);
            return this._eventInfo.customCode = void 0, Pk
          }
          _prepareDefines(Fk, Ik, Xk) {
            let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              yk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const lk = Ik.hasThinInstances,
              ak = this.mG(),
              qk = ak.Oe();
            (0, Mk.M)(ak, Fk, Xk, !0, this._maxSimultaneousLights, this._disableLighting), Xk._needNormals = !0, (0, Mk.T)(ak, Xk);
            const Lk = this.needAlphaBlendingForMesh(Fk) && this.mG().useOrderIndependentTransparency;
            if ((0, Mk._)(ak, Xk, this.canRenderToMRT && !Lk), (0, Mk.W)(ak, Xk, Lk), eF.e.PrepareDefines(qk.currentRenderPassId, Fk, Xk), Xk._areTexturesDirty) {
              Xk._needUVs = !1;
              for (let kk = 1; kk <= 6; ++kk) Xk["MAINUV" + kk] = !1;
              if (ak.texturesEnabled) {
                for (const Ik in this._samplersList) {
                  const kk = this._samplersList[Ik];
                  kk.value ? ((0, Mk.P)(kk.value, Xk, kk.textureDefine), Xk[kk.textureDefine + "_GAMMA"] = kk.value.gammaSpace) : Xk[kk.textureDefine] = !1
                }
                const kk = this._getRadianceTexture(),
                  Fk = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || qk.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, Mk.I)(ak, kk, Xk, this.realTimeFiltering, this.realTimeFilteringQuality, !Fk), this._baseMetalnessTexture && (Xk.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Xk.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Xk.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Xk.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Xk.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Xk.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Xk.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Xk.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Xk.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Xk.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Xk.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Xk.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && rk.d.DiffuseTextureEnabled ? (Xk.PARALLAX = !0, Xk.PARALLAX_RHS = ak.useRightHandedSystem, Xk.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Xk.PARALLAX = !1, Xk.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Xk.PARALLAX = !1, Xk.PARALLAX_RHS = !1, Xk.PARALLAXOCCLUSION = !1, Xk.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && rk.d.ReflectionTextureEnabled ? (Xk.ENVIRONMENTBRDF = !0, Xk.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Xk.ENVIRONMENTBRDF = !1, Xk.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Xk.FUZZENVIRONMENTBRDF = !0 : Xk.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Xk.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && rk.d.RefractionTextureEnabled, Xk.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Xk.REFRACTED_LIGHTS = !0;
                  const kk = this._getRadianceTexture();
                  kk ? (Xk.REFRACTED_ENVIRONMENT = rk.d.RefractionTextureEnabled, Xk.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.mG().useRightHandedSystem ? !kk.invertZ : kk.invertZ, Xk.REFRACTED_ENVIRONMENT_LOCAL_CUBE = kk.isCube && kk.boundingBoxSize) : Xk.REFRACTED_ENVIRONMENT = !1
                } else Xk.REFRACTED_BACKGROUND = !1, Xk.REFRACTED_LIGHTS = !1, Xk.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Xk.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Xk.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === ik.c.LIGHTFALLOFF_STANDARD ? (Xk.USEPHYSICALLIGHTFALLOFF = !1, Xk.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === ik.c.LIGHTFALLOFF_GLTF ? (Xk.USEPHYSICALLIGHTFALLOFF = !1, Xk.USEGLTFLIGHTFALLOFF = !0) : (Xk.USEPHYSICALLIGHTFALLOFF = !0, Xk.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Xk.TWOSIDEDLIGHTING = !0 : Xk.TWOSIDEDLIGHTING = !1, Xk.MIRRORED = !!ak._mirroredCameraPosition, Xk.SPECULARAA = qk.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Xk._areTexturesDirty || Xk._areMiscDirty) && (Xk.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Xk.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Xk.ALPHABLEND = this.needAlphaBlendingForMesh(Fk)), Xk._areTexturesDirty && (Xk.TEXTURE_REPETITION_MODE = qk.version > 1 || qk.isWebGPU ? this.textureRepetitionMode : 0), Xk._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Xk), Xk.FORCENORMALFORWARD = this._forceNormalForward, Xk.RADIANCEOCCLUSION = this._useRadianceOcclusion, Xk.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && kk._noiseTextures[ak.uniqueId] && rk.d.ReflectionTextureEnabled ? (Xk.ANISOTROPIC = !0, Fk.isVerticesDataPresent(ck.l.TangentKind) || (Xk._needUVs = !0, Xk.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Xk.USE_GLTF_STYLE_ANISOTROPY = !0), Xk.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Xk.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Xk.ANISOTROPIC = !1, Xk.USE_GLTF_STYLE_ANISOTROPY = !1, Xk.ANISOTROPIC_BASE = !1, Xk.ANISOTROPIC_COAT = !1), Xk.THIN_FILM = this.thinFilmWeight > 0, Xk.IRIDESCENCE = this.thinFilmWeight > 0, Xk.DISPERSION = this.transmissionDispersionScale > 0, Xk.SCATTERING = this.hasScattering;
            if (Xk.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Xk.TRANSMISSION_SLAB = this.transmissionWeight > 0, Xk.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Xk.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Xk.PREPASS && (Xk.SUBSURFACE_SLAB || Xk.TRANSMISSION_SLAB_VOLUME)) {
              let kk = !1;
              if (!this.sssIrradianceTexture && ak.geometryBufferRenderer) {
                const Fk = ak.geometryBufferRenderer.getTextureIndex(WF.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = ak.geometryBufferRenderer.getGBuffer().textures[Fk], kk = !0
              }
              if (!this.sssDepthTexture && ak.geometryBufferRenderer) {
                const Fk = ak.geometryBufferRenderer.getTextureIndex(WF.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = ak.geometryBufferRenderer.getGBuffer().textures[Fk], kk = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Xk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, kk && (Xk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Xk.FUZZ = this.fuzzWeight > 0 && rk.d.ReflectionTextureEnabled, Xk.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Xk.FUZZ ? (Fk.isVerticesDataPresent(ck.l.TangentKind) || (Xk._needUVs = !0, Xk.MAINUV1 = !0), this._environmentFuzzBRDFTexture = Rk(this.mG()), Xk.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Xk.FUZZENVIRONMENTBRDF = !1, Xk.FUZZ_IBL_SAMPLES = 0), Xk._areMiscDirty && ((0, Mk.R)(Fk, ak, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Fk), Xk, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Ik, this._isVertexOutputInvariant), Xk.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Fk.isVerticesDataPresent(ck.l.NormalKind), Xk.DEBUGMODE = this._debugMode), (0, Mk.F)(ak, qk, this, Xk, !!Tk, yk, lk), this._eventInfo.defines = Xk, this._eventInfo.mesh = Fk, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Mk.E)(Fk, Xk, !0, !0, !0, this._transparencyMode !== ik.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, Fk = new WeakMap, Xk = new WeakMap, Tk = new WeakMap, yk = new WeakMap, lk = new WeakMap, ak = new WeakMap, qk = new WeakMap, Lk = new WeakMap, tk = new WeakMap, Zk = new WeakMap, jk = new WeakMap, ek = new WeakMap, wk = new WeakMap, Hk = new WeakMap, Jk = new WeakMap, xk = new WeakMap, Pk = new WeakMap, Kk = new WeakMap, Qk = new WeakMap, sk = new WeakMap, Vk = new WeakMap, zk = new WeakMap, Gk = new WeakMap, pk = new WeakMap, uk = new WeakMap, bk = new WeakMap, Ck = new WeakMap, Wk = new WeakMap, fk = new WeakMap, Bk = new WeakMap, dk = new WeakMap, gk = new WeakMap, hk = new WeakMap, kF = new WeakMap, FF = new WeakMap, IF = new WeakMap, XF = new WeakMap, TF = new WeakMap, iF = new WeakMap, yF = new WeakMap, lF = new WeakMap, aF = new WeakMap, qF = new WeakMap, LF = new WeakMap, wF = new WeakMap, HF = new WeakMap, JF = new WeakMap, xF = new WeakMap, PF = new WeakMap, KF = new WeakMap, QF = new WeakMap, sF = new WeakMap, VF = new WeakMap, oF = new WeakMap, vF = new WeakMap, EF = new WeakMap, OF = new WeakMap, nF = new WeakMap, GF = new WeakMap, pF = new WeakMap, uF = new WeakMap, bF = new WeakMap, RF = new WeakMap, UF = new WeakMap, CF = new WeakMap, NF = new WeakMap, cF = new WeakMap, fF = new WeakMap, dF = new WeakMap, mF = new WeakMap, hF = new WeakMap, MF = new WeakMap, kI = new WeakMap, FI = new WeakMap, II = new WeakMap, XI = new WeakMap, TI = new WeakMap, iI = new WeakMap, yI = new WeakMap, lI = new WeakMap, aI = new WeakMap, qI = new WeakMap, LI = new WeakMap, tI = new WeakMap, ZI = new WeakMap, jI = new WeakMap, eI = new WeakMap, wI = new WeakMap, HI = new WeakMap, JI = new WeakMap, xI = new WeakMap, PI = new WeakMap, KI = new WeakMap, QI = new WeakMap, sI = new WeakMap, VI = new WeakMap, zI = new WeakMap, SI = new WeakMap, oI = new WeakMap, vI = new WeakMap, EI = new WeakMap, OI = new WeakMap, (() => {
          const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(GT[Symbol.metadata] ?? null) : void 0;
          nI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], GI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], pI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], uI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], bI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], RI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], UI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], CI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], NI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], cI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], WI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], fI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], BI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], dI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], YI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], AI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], gI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], mI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], hI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], rI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], DI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], MI = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], kX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], FX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], IX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], XX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], TX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], iX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], yX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], lX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], aX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], qX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], LX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], tX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], ZX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], jX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], eX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], wX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], HX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], JX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], xX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], PX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], KX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], QX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], sX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], VX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], zX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], SX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], oX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], vX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], EX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], OX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], nX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], GX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], pX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], uX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], bX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], RX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], UX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], CX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], NX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], cX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], WX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], fX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], BX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], dX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], YX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], AX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], gX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], mX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], hX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], rX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], DX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], MX = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], kT = [(0, vk.d)("_markAllSubMeshesAsTexturesDirty")], FT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], IT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], XT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], TT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], iT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], yT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], lT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], aT = [(0, vk.J)()], qT = [(0, vk.J)()], LT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], tT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], ZT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], jT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], eT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsLightsDirty")], wT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], HT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsLightsDirty")], JT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], xT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], PT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], KT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], QT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], sT = [(0, vk.e)("_markAllSubMeshesAsTexturesDirty")], VT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], zT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], ST = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], oT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], vT = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], ET = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], OT = [(0, vk.e)("_markAllSubMeshesAsMiscDirty")], nT = [(0, vk.J)()], (0, Sk.j)(kk, null, nI, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseWeight" in kk,
              get: kk => kk.baseWeight,
              set: (kk, Fk) => {
                kk.baseWeight = Fk
              }
            },
            metadata: Fk
          }, uT, bT), (0, Sk.j)(kk, null, GI, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseWeightTexture" in kk,
              get: kk => kk.baseWeightTexture,
              set: (kk, Fk) => {
                kk.baseWeightTexture = Fk
              }
            },
            metadata: Fk
          }, RT, UT), (0, Sk.j)(kk, null, pI, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseColor" in kk,
              get: kk => kk.baseColor,
              set: (kk, Fk) => {
                kk.baseColor = Fk
              }
            },
            metadata: Fk
          }, CT, NT), (0, Sk.j)(kk, null, uI, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseColorTexture" in kk,
              get: kk => kk.baseColorTexture,
              set: (kk, Fk) => {
                kk.baseColorTexture = Fk
              }
            },
            metadata: Fk
          }, cT, WT), (0, Sk.j)(kk, null, bI, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseDiffuseRoughness" in kk,
              get: kk => kk.baseDiffuseRoughness,
              set: (kk, Fk) => {
                kk.baseDiffuseRoughness = Fk
              }
            },
            metadata: Fk
          }, fT, BT), (0, Sk.j)(kk, null, RI, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseDiffuseRoughnessTexture" in kk,
              get: kk => kk.baseDiffuseRoughnessTexture,
              set: (kk, Fk) => {
                kk.baseDiffuseRoughnessTexture = Fk
              }
            },
            metadata: Fk
          }, dT, YT), (0, Sk.j)(kk, null, UI, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseMetalness" in kk,
              get: kk => kk.baseMetalness,
              set: (kk, Fk) => {
                kk.baseMetalness = Fk
              }
            },
            metadata: Fk
          }, AT, gT), (0, Sk.j)(kk, null, CI, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "baseMetalnessTexture" in kk,
              get: kk => kk.baseMetalnessTexture,
              set: (kk, Fk) => {
                kk.baseMetalnessTexture = Fk
              }
            },
            metadata: Fk
          }, mT, hT), (0, Sk.j)(kk, null, NI, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularWeight" in kk,
              get: kk => kk.specularWeight,
              set: (kk, Fk) => {
                kk.specularWeight = Fk
              }
            },
            metadata: Fk
          }, rT, DT), (0, Sk.j)(kk, null, cI, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularWeightTexture" in kk,
              get: kk => kk.specularWeightTexture,
              set: (kk, Fk) => {
                kk.specularWeightTexture = Fk
              }
            },
            metadata: Fk
          }, MT, ki), (0, Sk.j)(kk, null, WI, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularColor" in kk,
              get: kk => kk.specularColor,
              set: (kk, Fk) => {
                kk.specularColor = Fk
              }
            },
            metadata: Fk
          }, Fi, Ii), (0, Sk.j)(kk, null, fI, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularColorTexture" in kk,
              get: kk => kk.specularColorTexture,
              set: (kk, Fk) => {
                kk.specularColorTexture = Fk
              }
            },
            metadata: Fk
          }, Xi, Ti), (0, Sk.j)(kk, null, BI, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularRoughness" in kk,
              get: kk => kk.specularRoughness,
              set: (kk, Fk) => {
                kk.specularRoughness = Fk
              }
            },
            metadata: Fk
          }, ii, yi), (0, Sk.j)(kk, null, dI, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularRoughnessTexture" in kk,
              get: kk => kk.specularRoughnessTexture,
              set: (kk, Fk) => {
                kk.specularRoughnessTexture = Fk
              }
            },
            metadata: Fk
          }, li, ai), (0, Sk.j)(kk, null, YI, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularRoughnessAnisotropy" in kk,
              get: kk => kk.specularRoughnessAnisotropy,
              set: (kk, Fk) => {
                kk.specularRoughnessAnisotropy = Fk
              }
            },
            metadata: Fk
          }, qi, Li), (0, Sk.j)(kk, null, AI, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularRoughnessAnisotropyTexture" in kk,
              get: kk => kk.specularRoughnessAnisotropyTexture,
              set: (kk, Fk) => {
                kk.specularRoughnessAnisotropyTexture = Fk
              }
            },
            metadata: Fk
          }, ti, Zi), (0, Sk.j)(kk, null, gI, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularIor" in kk,
              get: kk => kk.specularIor,
              set: (kk, Fk) => {
                kk.specularIor = Fk
              }
            },
            metadata: Fk
          }, ji, ei), (0, Sk.j)(kk, null, mI, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionWeight" in kk,
              get: kk => kk.transmissionWeight,
              set: (kk, Fk) => {
                kk.transmissionWeight = Fk
              }
            },
            metadata: Fk
          }, wi, Hi), (0, Sk.j)(kk, null, hI, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionWeightTexture" in kk,
              get: kk => kk.transmissionWeightTexture,
              set: (kk, Fk) => {
                kk.transmissionWeightTexture = Fk
              }
            },
            metadata: Fk
          }, Ji, xi), (0, Sk.j)(kk, null, rI, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionColor" in kk,
              get: kk => kk.transmissionColor,
              set: (kk, Fk) => {
                kk.transmissionColor = Fk
              }
            },
            metadata: Fk
          }, Pi, Ki), (0, Sk.j)(kk, null, DI, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionColorTexture" in kk,
              get: kk => kk.transmissionColorTexture,
              set: (kk, Fk) => {
                kk.transmissionColorTexture = Fk
              }
            },
            metadata: Fk
          }, Qi, si), (0, Sk.j)(kk, null, MI, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionDepth" in kk,
              get: kk => kk.transmissionDepth,
              set: (kk, Fk) => {
                kk.transmissionDepth = Fk
              }
            },
            metadata: Fk
          }, Vi, zi), (0, Sk.j)(kk, null, kX, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionDepthTexture" in kk,
              get: kk => kk.transmissionDepthTexture,
              set: (kk, Fk) => {
                kk.transmissionDepthTexture = Fk
              }
            },
            metadata: Fk
          }, Si, oi), (0, Sk.j)(kk, null, FX, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionScatter" in kk,
              get: kk => kk.transmissionScatter,
              set: (kk, Fk) => {
                kk.transmissionScatter = Fk
              }
            },
            metadata: Fk
          }, vi, Ei), (0, Sk.j)(kk, null, IX, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionScatterTexture" in kk,
              get: kk => kk.transmissionScatterTexture,
              set: (kk, Fk) => {
                kk.transmissionScatterTexture = Fk
              }
            },
            metadata: Fk
          }, Oi, ni), (0, Sk.j)(kk, null, XX, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionScatterAnisotropy" in kk,
              get: kk => kk.transmissionScatterAnisotropy,
              set: (kk, Fk) => {
                kk.transmissionScatterAnisotropy = Fk
              }
            },
            metadata: Fk
          }, Gi, ui), (0, Sk.j)(kk, null, TX, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionDispersionScale" in kk,
              get: kk => kk.transmissionDispersionScale,
              set: (kk, Fk) => {
                kk.transmissionDispersionScale = Fk
              }
            },
            metadata: Fk
          }, bi, Ri), (0, Sk.j)(kk, null, iX, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionDispersionScaleTexture" in kk,
              get: kk => kk.transmissionDispersionScaleTexture,
              set: (kk, Fk) => {
                kk.transmissionDispersionScaleTexture = Fk
              }
            },
            metadata: Fk
          }, Ui, Ci), (0, Sk.j)(kk, null, yX, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: kk => "transmissionDispersionAbbeNumber" in kk,
              get: kk => kk.transmissionDispersionAbbeNumber,
              set: (kk, Fk) => {
                kk.transmissionDispersionAbbeNumber = Fk
              }
            },
            metadata: Fk
          }, Ni, ci), (0, Sk.j)(kk, null, lX, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceWeight" in kk,
              get: kk => kk.subsurfaceWeight,
              set: (kk, Fk) => {
                kk.subsurfaceWeight = Fk
              }
            },
            metadata: Fk
          }, Wi, fi), (0, Sk.j)(kk, null, aX, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceWeightTexture" in kk,
              get: kk => kk.subsurfaceWeightTexture,
              set: (kk, Fk) => {
                kk.subsurfaceWeightTexture = Fk
              }
            },
            metadata: Fk
          }, Bi, di), (0, Sk.j)(kk, null, qX, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceColor" in kk,
              get: kk => kk.subsurfaceColor,
              set: (kk, Fk) => {
                kk.subsurfaceColor = Fk
              }
            },
            metadata: Fk
          }, Yi, Ai), (0, Sk.j)(kk, null, LX, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceColorTexture" in kk,
              get: kk => kk.subsurfaceColorTexture,
              set: (kk, Fk) => {
                kk.subsurfaceColorTexture = Fk
              }
            },
            metadata: Fk
          }, gi, mi), (0, Sk.j)(kk, null, tX, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceRadius" in kk,
              get: kk => kk.subsurfaceRadius,
              set: (kk, Fk) => {
                kk.subsurfaceRadius = Fk
              }
            },
            metadata: Fk
          }, ri, Di), (0, Sk.j)(kk, null, ZX, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceRadiusScale" in kk,
              get: kk => kk.subsurfaceRadiusScale,
              set: (kk, Fk) => {
                kk.subsurfaceRadiusScale = Fk
              }
            },
            metadata: Fk
          }, Mi, ky), (0, Sk.j)(kk, null, jX, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceRadiusScaleTexture" in kk,
              get: kk => kk.subsurfaceRadiusScaleTexture,
              set: (kk, Fk) => {
                kk.subsurfaceRadiusScaleTexture = Fk
              }
            },
            metadata: Fk
          }, Fy, Iy), (0, Sk.j)(kk, null, eX, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: kk => "subsurfaceScatterAnisotropy" in kk,
              get: kk => kk.subsurfaceScatterAnisotropy,
              set: (kk, Fk) => {
                kk.subsurfaceScatterAnisotropy = Fk
              }
            },
            metadata: Fk
          }, Xy, Ty), (0, Sk.j)(kk, null, wX, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatWeight" in kk,
              get: kk => kk.coatWeight,
              set: (kk, Fk) => {
                kk.coatWeight = Fk
              }
            },
            metadata: Fk
          }, iy, yy), (0, Sk.j)(kk, null, HX, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatWeightTexture" in kk,
              get: kk => kk.coatWeightTexture,
              set: (kk, Fk) => {
                kk.coatWeightTexture = Fk
              }
            },
            metadata: Fk
          }, ly, ay), (0, Sk.j)(kk, null, JX, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatColor" in kk,
              get: kk => kk.coatColor,
              set: (kk, Fk) => {
                kk.coatColor = Fk
              }
            },
            metadata: Fk
          }, qy, Ly), (0, Sk.j)(kk, null, xX, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatColorTexture" in kk,
              get: kk => kk.coatColorTexture,
              set: (kk, Fk) => {
                kk.coatColorTexture = Fk
              }
            },
            metadata: Fk
          }, ty, Zy), (0, Sk.j)(kk, null, PX, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatRoughness" in kk,
              get: kk => kk.coatRoughness,
              set: (kk, Fk) => {
                kk.coatRoughness = Fk
              }
            },
            metadata: Fk
          }, jy, ey), (0, Sk.j)(kk, null, KX, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatRoughnessTexture" in kk,
              get: kk => kk.coatRoughnessTexture,
              set: (kk, Fk) => {
                kk.coatRoughnessTexture = Fk
              }
            },
            metadata: Fk
          }, wy, Hy), (0, Sk.j)(kk, null, QX, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatRoughnessAnisotropy" in kk,
              get: kk => kk.coatRoughnessAnisotropy,
              set: (kk, Fk) => {
                kk.coatRoughnessAnisotropy = Fk
              }
            },
            metadata: Fk
          }, Jy, xy), (0, Sk.j)(kk, null, sX, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatRoughnessAnisotropyTexture" in kk,
              get: kk => kk.coatRoughnessAnisotropyTexture,
              set: (kk, Fk) => {
                kk.coatRoughnessAnisotropyTexture = Fk
              }
            },
            metadata: Fk
          }, Py, Ky), (0, Sk.j)(kk, null, VX, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatIor" in kk,
              get: kk => kk.coatIor,
              set: (kk, Fk) => {
                kk.coatIor = Fk
              }
            },
            metadata: Fk
          }, Qy, sy), (0, Sk.j)(kk, null, zX, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatDarkening" in kk,
              get: kk => kk.coatDarkening,
              set: (kk, Fk) => {
                kk.coatDarkening = Fk
              }
            },
            metadata: Fk
          }, Vy, zy), (0, Sk.j)(kk, null, SX, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "coatDarkeningTexture" in kk,
              get: kk => kk.coatDarkeningTexture,
              set: (kk, Fk) => {
                kk.coatDarkeningTexture = Fk
              }
            },
            metadata: Fk
          }, Sy, oy), (0, Sk.j)(kk, null, oX, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "fuzzWeight" in kk,
              get: kk => kk.fuzzWeight,
              set: (kk, Fk) => {
                kk.fuzzWeight = Fk
              }
            },
            metadata: Fk
          }, vy, Ey), (0, Sk.j)(kk, null, vX, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "fuzzWeightTexture" in kk,
              get: kk => kk.fuzzWeightTexture,
              set: (kk, Fk) => {
                kk.fuzzWeightTexture = Fk
              }
            },
            metadata: Fk
          }, Oy, ny), (0, Sk.j)(kk, null, EX, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "fuzzColor" in kk,
              get: kk => kk.fuzzColor,
              set: (kk, Fk) => {
                kk.fuzzColor = Fk
              }
            },
            metadata: Fk
          }, Gy, py), (0, Sk.j)(kk, null, OX, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "fuzzColorTexture" in kk,
              get: kk => kk.fuzzColorTexture,
              set: (kk, Fk) => {
                kk.fuzzColorTexture = Fk
              }
            },
            metadata: Fk
          }, uy, by), (0, Sk.j)(kk, null, nX, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: kk => "fuzzRoughness" in kk,
              get: kk => kk.fuzzRoughness,
              set: (kk, Fk) => {
                kk.fuzzRoughness = Fk
              }
            },
            metadata: Fk
          }, Ry, Uy), (0, Sk.j)(kk, null, GX, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "fuzzRoughnessTexture" in kk,
              get: kk => kk.fuzzRoughnessTexture,
              set: (kk, Fk) => {
                kk.fuzzRoughnessTexture = Fk
              }
            },
            metadata: Fk
          }, Cy, Ny), (0, Sk.j)(kk, null, pX, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryThinWalled" in kk,
              get: kk => kk.geometryThinWalled,
              set: (kk, Fk) => {
                kk.geometryThinWalled = Fk
              }
            },
            metadata: Fk
          }, cy, Wy), (0, Sk.j)(kk, null, uX, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryNormalTexture" in kk,
              get: kk => kk.geometryNormalTexture,
              set: (kk, Fk) => {
                kk.geometryNormalTexture = Fk
              }
            },
            metadata: Fk
          }, fy, By), (0, Sk.j)(kk, null, bX, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryTangent" in kk,
              get: kk => kk.geometryTangent,
              set: (kk, Fk) => {
                kk.geometryTangent = Fk
              }
            },
            metadata: Fk
          }, dy, Yy), (0, Sk.j)(kk, null, RX, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryTangentTexture" in kk,
              get: kk => kk.geometryTangentTexture,
              set: (kk, Fk) => {
                kk.geometryTangentTexture = Fk
              }
            },
            metadata: Fk
          }, Ay, gy), (0, Sk.j)(kk, null, UX, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryCoatNormalTexture" in kk,
              get: kk => kk.geometryCoatNormalTexture,
              set: (kk, Fk) => {
                kk.geometryCoatNormalTexture = Fk
              }
            },
            metadata: Fk
          }, my, hy), (0, Sk.j)(kk, null, CX, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryCoatTangent" in kk,
              get: kk => kk.geometryCoatTangent,
              set: (kk, Fk) => {
                kk.geometryCoatTangent = Fk
              }
            },
            metadata: Fk
          }, ry, Dy), (0, Sk.j)(kk, null, NX, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryCoatTangentTexture" in kk,
              get: kk => kk.geometryCoatTangentTexture,
              set: (kk, Fk) => {
                kk.geometryCoatTangentTexture = Fk
              }
            },
            metadata: Fk
          }, My, kl), (0, Sk.j)(kk, null, cX, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryOpacity" in kk,
              get: kk => kk.geometryOpacity,
              set: (kk, Fk) => {
                kk.geometryOpacity = Fk
              }
            },
            metadata: Fk
          }, Fl, Il), (0, Sk.j)(kk, null, WX, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryOpacityTexture" in kk,
              get: kk => kk.geometryOpacityTexture,
              set: (kk, Fk) => {
                kk.geometryOpacityTexture = Fk
              }
            },
            metadata: Fk
          }, Xl, Tl), (0, Sk.j)(kk, null, fX, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryThickness" in kk,
              get: kk => kk.geometryThickness,
              set: (kk, Fk) => {
                kk.geometryThickness = Fk
              }
            },
            metadata: Fk
          }, il, yl), (0, Sk.j)(kk, null, BX, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "geometryThicknessTexture" in kk,
              get: kk => kk.geometryThicknessTexture,
              set: (kk, Fk) => {
                kk.geometryThicknessTexture = Fk
              }
            },
            metadata: Fk
          }, ll, al), (0, Sk.j)(kk, null, dX, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: kk => "emissionLuminance" in kk,
              get: kk => kk.emissionLuminance,
              set: (kk, Fk) => {
                kk.emissionLuminance = Fk
              }
            },
            metadata: Fk
          }, ql, Ll), (0, Sk.j)(kk, null, YX, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "emissionColor" in kk,
              get: kk => kk.emissionColor,
              set: (kk, Fk) => {
                kk.emissionColor = Fk
              }
            },
            metadata: Fk
          }, tl, Zl), (0, Sk.j)(kk, null, AX, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "emissionColorTexture" in kk,
              get: kk => kk.emissionColorTexture,
              set: (kk, Fk) => {
                kk.emissionColorTexture = Fk
              }
            },
            metadata: Fk
          }, jl, el), (0, Sk.j)(kk, null, gX, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: kk => "thinFilmWeight" in kk,
              get: kk => kk.thinFilmWeight,
              set: (kk, Fk) => {
                kk.thinFilmWeight = Fk
              }
            },
            metadata: Fk
          }, wl, Hl), (0, Sk.j)(kk, null, mX, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "thinFilmWeightTexture" in kk,
              get: kk => kk.thinFilmWeightTexture,
              set: (kk, Fk) => {
                kk.thinFilmWeightTexture = Fk
              }
            },
            metadata: Fk
          }, Jl, xl), (0, Sk.j)(kk, null, hX, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: kk => "thinFilmThickness" in kk,
              get: kk => kk.thinFilmThickness,
              set: (kk, Fk) => {
                kk.thinFilmThickness = Fk
              }
            },
            metadata: Fk
          }, Pl, Kl), (0, Sk.j)(kk, null, rX, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: kk => "thinFilmThicknessMin" in kk,
              get: kk => kk.thinFilmThicknessMin,
              set: (kk, Fk) => {
                kk.thinFilmThicknessMin = Fk
              }
            },
            metadata: Fk
          }, Ql, sl), (0, Sk.j)(kk, null, DX, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "thinFilmThicknessTexture" in kk,
              get: kk => kk.thinFilmThicknessTexture,
              set: (kk, Fk) => {
                kk.thinFilmThicknessTexture = Fk
              }
            },
            metadata: Fk
          }, Vl, zl), (0, Sk.j)(kk, null, MX, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: kk => "thinFilmIor" in kk,
              get: kk => kk.thinFilmIor,
              set: (kk, Fk) => {
                kk.thinFilmIor = Fk
              }
            },
            metadata: Fk
          }, Sl, ol), (0, Sk.j)(kk, null, kT, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "ambientOcclusionTexture" in kk,
              get: kk => kk.ambientOcclusionTexture,
              set: (kk, Fk) => {
                kk.ambientOcclusionTexture = Fk
              }
            },
            metadata: Fk
          }, vl, El), (0, Sk.j)(kk, null, FT, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: kk => "directIntensity" in kk,
              get: kk => kk.directIntensity,
              set: (kk, Fk) => {
                kk.directIntensity = Fk
              }
            },
            metadata: Fk
          }, Ol, nl), (0, Sk.j)(kk, null, IT, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: kk => "environmentIntensity" in kk,
              get: kk => kk.environmentIntensity,
              set: (kk, Fk) => {
                kk.environmentIntensity = Fk
              }
            },
            metadata: Fk
          }, Gl, pl), (0, Sk.j)(kk, null, XT, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "useSpecularWeightFromTextureAlpha" in kk,
              get: kk => kk.useSpecularWeightFromTextureAlpha,
              set: (kk, Fk) => {
                kk.useSpecularWeightFromTextureAlpha = Fk
              }
            },
            metadata: Fk
          }, ul, bl), (0, Sk.j)(kk, null, TT, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: kk => "forceAlphaTest" in kk,
              get: kk => kk.forceAlphaTest,
              set: (kk, Fk) => {
                kk.forceAlphaTest = Fk
              }
            },
            metadata: Fk
          }, Rl, Ul), (0, Sk.j)(kk, null, iT, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: kk => "alphaCutOff" in kk,
              get: kk => kk.alphaCutOff,
              set: (kk, Fk) => {
                kk.alphaCutOff = Fk
              }
            },
            metadata: Fk
          }, Cl, Nl), (0, Sk.j)(kk, null, yT, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: kk => "useAmbientOcclusionFromMetallicTextureRed" in kk,
              get: kk => kk.useAmbientOcclusionFromMetallicTextureRed,
              set: (kk, Fk) => {
                kk.useAmbientOcclusionFromMetallicTextureRed = Fk
              }
            },
            metadata: Fk
          }, cl, Wl), (0, Sk.j)(kk, null, lT, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: kk => "useAmbientInGrayScale" in kk,
              get: kk => kk.useAmbientInGrayScale,
              set: (kk, Fk) => {
                kk.useAmbientInGrayScale = Fk
              }
            },
            metadata: Fk
          }, fl, Bl), (0, Sk.j)(kk, null, aT, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: kk => "usePhysicalLightFalloff" in kk,
              get: kk => kk.usePhysicalLightFalloff
            },
            metadata: Fk
          }, null, pT), (0, Sk.j)(kk, null, qT, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: kk => "useGLTFLightFalloff" in kk,
              get: kk => kk.useGLTFLightFalloff
            },
            metadata: Fk
          }, null, pT), (0, Sk.j)(kk, null, LT, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: kk => "useObjectSpaceNormalMap" in kk,
              get: kk => kk.useObjectSpaceNormalMap,
              set: (kk, Fk) => {
                kk.useObjectSpaceNormalMap = Fk
              }
            },
            metadata: Fk
          }, dl, Yl), (0, Sk.j)(kk, null, tT, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: kk => "useParallax" in kk,
              get: kk => kk.useParallax,
              set: (kk, Fk) => {
                kk.useParallax = Fk
              }
            },
            metadata: Fk
          }, Al, gl), (0, Sk.j)(kk, null, ZT, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: kk => "useParallaxOcclusion" in kk,
              get: kk => kk.useParallaxOcclusion,
              set: (kk, Fk) => {
                kk.useParallaxOcclusion = Fk
              }
            },
            metadata: Fk
          }, ml, hl), (0, Sk.j)(kk, null, jT, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: kk => "parallaxScaleBias" in kk,
              get: kk => kk.parallaxScaleBias,
              set: (kk, Fk) => {
                kk.parallaxScaleBias = Fk
              }
            },
            metadata: Fk
          }, rl, Dl), (0, Sk.j)(kk, null, eT, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: kk => "disableLighting" in kk,
              get: kk => kk.disableLighting,
              set: (kk, Fk) => {
                kk.disableLighting = Fk
              }
            },
            metadata: Fk
          }, Ml, ka), (0, Sk.j)(kk, null, wT, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: kk => "forceIrradianceInFragment" in kk,
              get: kk => kk.forceIrradianceInFragment,
              set: (kk, Fk) => {
                kk.forceIrradianceInFragment = Fk
              }
            },
            metadata: Fk
          }, Fa, Ia), (0, Sk.j)(kk, null, HT, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: kk => "maxSimultaneousLights" in kk,
              get: kk => kk.maxSimultaneousLights,
              set: (kk, Fk) => {
                kk.maxSimultaneousLights = Fk
              }
            },
            metadata: Fk
          }, Xa, Ta), (0, Sk.j)(kk, null, JT, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: kk => "invertNormalMapX" in kk,
              get: kk => kk.invertNormalMapX,
              set: (kk, Fk) => {
                kk.invertNormalMapX = Fk
              }
            },
            metadata: Fk
          }, ia, ya), (0, Sk.j)(kk, null, xT, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: kk => "invertNormalMapY" in kk,
              get: kk => kk.invertNormalMapY,
              set: (kk, Fk) => {
                kk.invertNormalMapY = Fk
              }
            },
            metadata: Fk
          }, la, aa), (0, Sk.j)(kk, null, PT, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: kk => "twoSidedLighting" in kk,
              get: kk => kk.twoSidedLighting,
              set: (kk, Fk) => {
                kk.twoSidedLighting = Fk
              }
            },
            metadata: Fk
          }, qa, La), (0, Sk.j)(kk, null, KT, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: kk => "useAlphaFresnel" in kk,
              get: kk => kk.useAlphaFresnel,
              set: (kk, Fk) => {
                kk.useAlphaFresnel = Fk
              }
            },
            metadata: Fk
          }, ta, Za), (0, Sk.j)(kk, null, QT, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: kk => "useLinearAlphaFresnel" in kk,
              get: kk => kk.useLinearAlphaFresnel,
              set: (kk, Fk) => {
                kk.useLinearAlphaFresnel = Fk
              }
            },
            metadata: Fk
          }, ja, ea), (0, Sk.j)(kk, null, sT, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "environmentBRDFTexture" in kk,
              get: kk => kk.environmentBRDFTexture,
              set: (kk, Fk) => {
                kk.environmentBRDFTexture = Fk
              }
            },
            metadata: Fk
          }, wa, Ha), (0, Sk.j)(kk, null, VT, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: kk => "forceNormalForward" in kk,
              get: kk => kk.forceNormalForward,
              set: (kk, Fk) => {
                kk.forceNormalForward = Fk
              }
            },
            metadata: Fk
          }, Ja, xa), (0, Sk.j)(kk, null, zT, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: kk => "enableSpecularAntiAliasing" in kk,
              get: kk => kk.enableSpecularAntiAliasing,
              set: (kk, Fk) => {
                kk.enableSpecularAntiAliasing = Fk
              }
            },
            metadata: Fk
          }, Pa, Ka), (0, Sk.j)(kk, null, ST, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: kk => "useHorizonOcclusion" in kk,
              get: kk => kk.useHorizonOcclusion,
              set: (kk, Fk) => {
                kk.useHorizonOcclusion = Fk
              }
            },
            metadata: Fk
          }, Qa, sa), (0, Sk.j)(kk, null, oT, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: kk => "useRadianceOcclusion" in kk,
              get: kk => kk.useRadianceOcclusion,
              set: (kk, Fk) => {
                kk.useRadianceOcclusion = Fk
              }
            },
            metadata: Fk
          }, Va, za), (0, Sk.j)(kk, null, vT, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: kk => "unlit" in kk,
              get: kk => kk.unlit,
              set: (kk, Fk) => {
                kk.unlit = Fk
              }
            },
            metadata: Fk
          }, Sa, oa), (0, Sk.j)(kk, null, ET, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: kk => "applyDecalMapAfterDetailMap" in kk,
              get: kk => kk.applyDecalMapAfterDetailMap,
              set: (kk, Fk) => {
                kk.applyDecalMapAfterDetailMap = Fk
              }
            },
            metadata: Fk
          }, va, Ea), (0, Sk.j)(kk, null, OT, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "debugMode" in kk,
              get: kk => kk.debugMode,
              set: (kk, Fk) => {
                kk.debugMode = Fk
              }
            },
            metadata: Fk
          }, Oa, na), (0, Sk.j)(kk, null, nT, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "transparencyMode" in kk,
              get: kk => kk.transparencyMode
            },
            metadata: Fk
          }, null, pT), Fk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fk
          })
        })(), kk.SSS_QUALITY_LOW = 0, kk.SSS_QUALITY_MEDIUM = 1, kk.SSS_QUALITY_HIGH = 2, kk._noiseTextures = {}, kk.ForceGLSL = !1, kk._ShaderLoader = new jF.c((() => [Promise.all([Ik.e(317), Ik.e(381)]).then((() => Ik(61725))), Promise.all([Ik.e(322), Ik.e(318), Ik.e(380), Ik.e(385)]).then((() => Ik(61733)))]), (() => [Promise.all([Ik.e(336), Ik.e(338), Ik.e(384)]).then((() => Ik(61768))), Promise.all([Ik.e(336), Ik.e(339), Ik.e(383), Ik.e(386)]).then((() => Ik(61779)))])), kk
      })(),
      kI = !1;
    kI || (kI = !0, (0, mk.e)(), (0, fF.f)("BABYLON.OpenPBRMaterial", MF));
    var FI = Ik(37187);
    class II {
      constructor(kk) {
        this.name = bF.b.NAME_PROCEDURALTEXTURE, this.Yw = kk
      }
      register() {
        this.Yw._beforeClearStage.registerStep(bF.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Yw.proceduralTexturesEnabled) {
          SF.h.StartPerformanceCounter("Procedural textures", this.Yw.proceduralTextures.length > 0);
          for (let kk = 0; kk < this.Yw.proceduralTextures.length; kk++) {
            const Fk = this.Yw.proceduralTextures[kk];
            Fk._shouldRender() && Fk.render()
          }
          SF.h.EndPerformanceCounter("Procedural textures", this.Yw.proceduralTextures.length > 0)
        }
      }
    }
    var XI = Ik(40324);
    let TI = (() => {
      var kk;
      let Fk, Xk, Tk, yk, lk, ak = nk.g,
        qk = [],
        Lk = [],
        tk = [],
        Zk = [],
        jk = [],
        ek = [],
        Hk = [],
        Jk = [],
        xk = [];
      return kk = class extends ak {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(kk, Fk, Ik, Xk) {
          let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            ik = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Xk, !ik), this.isEnabled = ((0, Sk.n)(this, qk), (0, Sk.n)(this, Lk, !0)), this.autoClear = ((0, Sk.n)(this, tk), (0, Sk.n)(this, Zk, !0)), this.onGenerated = (0, Sk.n)(this, jk), this.onGeneratedObservable = new FI.e, this.onBeforeGenerationObservable = new FI.e, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, Sk.n)(this, ek, void 0), this._drawWrapper = (0, Sk.n)(this, Hk), this._textures = {}, this._size = (0, Sk.n)(this, Jk, void 0), this._textureType = (0, Sk.n)(this, xk), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Tk || Tk instanceof nk.g ? (this._options = {}, this._fallbackTexture = Tk) : (this._options = Tk, this._fallbackTexture = Tk.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let ak = (Xk = this.mG() || wk.e.LastCreatedScene)._getComponent(bF.b.NAME_PROCEDURALTEXTURE);
          ak || (ak = new II(Xk), Xk.AIk(ak)), this._options.skipSceneRegistration || Xk.proceduralTextures.push(this), this._fullEngine = Xk.Oe(), this.name = kk, this.isRenderTarget = !0, this._size = Fk, this._textureType = lk, this._generateMipMaps = ik, this._drawWrapper = new XI.e(this._fullEngine), this.setFragment(Ik);
          const Pk = this._createRtWrapper(yk, Fk, ik, lk);
          this._texture = Pk.texture;
          const Kk = [];
          Kk.push(1, 1), Kk.push(-1, 1), Kk.push(-1, -1), Kk.push(1, -1), this._vertexBuffers[ck.l.PositionKind] = new ck.l(this._fullEngine, Kk, ck.l.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(kk, Fk, Ik, Xk) {
          return kk ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(Fk, {
            generateMipMaps: Ik,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Xk,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(Fk, {
            generateMipMaps: Ik,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Xk,
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
            Fk = [];
          Fk.push(0), Fk.push(1), Fk.push(2), Fk.push(0), Fk.push(2), Fk.push(3), this._indexBuffer = kk.createIndexBuffer(Fk)
        }
        _rebuild() {
          const kk = this._vertexBuffers[ck.l.PositionKind];
          kk && kk._rebuild(), this._createIndexBuffer(), this.refreshRate === oF.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = oF.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(kk) {
          if (this.isReady()) return void kk(this);
          const Fk = this.getEffect();
          Fk && Fk.executeWhenCompiled((() => {
            kk(this)
          }))
        }
        isReady() {
          const kk = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const Fk = this._getDefines();
          if (this._drawWrapper.effect && Fk === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Xk = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== Fk && (this._cachedDefines = Fk, this._drawWrapper.effect = kk.createEffect(Xk, [ck.l.PositionKind], this._uniforms, this._samplers, Fk, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([Ik.e(389).then((() => Ik(61841))), this._options.extraInitializationsAsync()]) : await Promise.all([Ik.e(390).then((() => Ik(61844))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await Ik.e(389).then((() => Ik(61841))) : await Ik.e(390).then((() => Ik(61844)))
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
        resize(kk, Fk) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const Ik = this._texture.isCube;
          this._rtWrapper.dispose();
          const Xk = this._createRtWrapper(Ik, kk, Fk, this._textureType);
          this._texture = Xk.texture, this._size = kk, this._generateMipMaps = Fk
        }
        _checkUniform(kk) {
          -1 === this._uniforms.indexOf(kk) && this._uniforms.push(kk)
        }
        setTexture(kk, Fk) {
          return -1 === this._samplers.indexOf(kk) && this._samplers.push(kk), this._textures[kk] = Fk, this
        }
        setFloat(kk, Fk) {
          return this._checkUniform(kk), this._floats[kk] = Fk, this
        }
        setInt(kk, Fk) {
          return this._checkUniform(kk), this._ints[kk] = Fk, this
        }
        setFloats(kk, Fk) {
          return this._checkUniform(kk), this._floatsArrays[kk] = Fk, this
        }
        setColor3(kk, Fk) {
          return this._checkUniform(kk), this._colors3[kk] = Fk, this
        }
        setColor4(kk, Fk) {
          return this._checkUniform(kk), this._colors4[kk] = Fk, this
        }
        setVector2(kk, Fk) {
          return this._checkUniform(kk), this._vectors2[kk] = Fk, this
        }
        setVector3(kk, Fk) {
          return this._checkUniform(kk), this._vectors3[kk] = Fk, this
        }
        setVector4(kk, Fk) {
          return this._checkUniform(kk), this._vectors4[kk] = Fk, this
        }
        setMatrix(kk, Fk) {
          return this._checkUniform(kk), this._matrices[kk] = Fk, this
        }
        render(kk) {
          const Fk = this.mG();
          if (!Fk) return;
          const Ik = this._fullEngine;
          if (Ik.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), Ik.setState(!1), !this.nodeMaterialSource) {
            for (const kk in this._textures) this._drawWrapper.effect.setTexture(kk, this._textures[kk]);
            for (const kk in this._ints) this._drawWrapper.effect.setInt(kk, this._ints[kk]);
            for (const kk in this._floats) this._drawWrapper.effect.setFloat(kk, this._floats[kk]);
            for (const kk in this._floatsArrays) this._drawWrapper.effect.setArray(kk, this._floatsArrays[kk]);
            for (const kk in this._colors3) this._drawWrapper.effect.setColor3(kk, this._colors3[kk]);
            for (const kk in this._colors4) {
              const Fk = this._colors4[kk];
              this._drawWrapper.effect.setFloat4(kk, Fk.r, Fk.g, Fk.b, Fk.a)
            }
            for (const kk in this._vectors2) this._drawWrapper.effect.setVector2(kk, this._vectors2[kk]);
            for (const kk in this._vectors3) this._drawWrapper.effect.setVector3(kk, this._vectors3[kk]);
            for (const kk in this._vectors4) this._drawWrapper.effect.setVector4(kk, this._vectors4[kk]);
            for (const kk in this._matrices) this._drawWrapper.effect.setMatrix(kk, this._matrices[kk])
          }
          if (!this._texture || !this._rtWrapper) return;
          Ik._enableGPUDebugMarkers && Ik._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Xk = Ik.currentViewport;
          if (this.isCube)
            for (let Tk = 0; Tk < 6; Tk++) Ik.bindFramebuffer(this._rtWrapper, Tk, void 0, void 0, !0), Ik.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Tk), this.autoClear && Ik.clear(Fk.clearColor, !0, !1, !1), Ik.drawElementsType(ik.c.TriangleFillMode, 0, 6), Ik.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let kk = 1;
            this._rtWrapper.is3D ? kk = this._rtWrapper.depth : this._rtWrapper.is2DArray && (kk = this._rtWrapper.layers);
            for (let Xk = 0; Xk < kk; Xk++) {
              if (Ik.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Xk), Ik.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== kk ? Xk / (kk - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Xk);
                for (const kk in this._textures) this._drawWrapper.effect.setTexture(kk, this._textures[kk])
              }
              this.autoClear && Ik.clear(Fk.clearColor, !0, !1, !1), Ik.drawElementsType(ik.c.TriangleFillMode, 0, 6), Ik.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Xk && Ik.setViewport(Xk), this.isCube && Ik.generateMipMapsForCubemap(this._texture, !0), Ik._enableGPUDebugMarkers && Ik._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const Fk = this.getSize(),
            Ik = new kk(this.name, Fk.width, this._fragment, this.mG(), this._fallbackTexture, this._generateMipMaps);
          return Ik.hasAlpha = this.hasAlpha, Ik.level = this.level, Ik.coordinatesMode = this.coordinatesMode, Ik
        }
        dispose() {
          const kk = this.mG();
          if (!kk) return;
          const Fk = kk.proceduralTextures.indexOf(this);
          Fk >= 0 && kk.proceduralTextures.splice(Fk, 1);
          const Ik = this._vertexBuffers[ck.l.PositionKind];
          Ik && (Ik.dispose(), this._vertexBuffers[ck.l.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const Ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(ak[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, vk.J)()], Xk = [(0, vk.J)()], Tk = [(0, vk.J)()], yk = [(0, vk.J)()], lk = [(0, vk.J)()], (0, Sk.j)(kk, null, lk, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: kk => "refreshRate" in kk,
            get: kk => kk.refreshRate
          },
          metadata: Ik
        }, null, qk), (0, Sk.j)(null, null, Fk, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isEnabled" in kk,
            get: kk => kk.isEnabled,
            set: (kk, Fk) => {
              kk.isEnabled = Fk
            }
          },
          metadata: Ik
        }, Lk, tk), (0, Sk.j)(null, null, Xk, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: kk => "autoClear" in kk,
            get: kk => kk.autoClear,
            set: (kk, Fk) => {
              kk.autoClear = Fk
            }
          },
          metadata: Ik
        }, Zk, jk), (0, Sk.j)(null, null, Tk, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: kk => "_generateMipMaps" in kk,
            get: kk => kk._generateMipMaps,
            set: (kk, Fk) => {
              kk._generateMipMaps = Fk
            }
          },
          metadata: Ik
        }, ek, Hk), (0, Sk.j)(null, null, yk, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: kk => "_size" in kk,
            get: kk => kk._size,
            set: (kk, Fk) => {
              kk._size = Fk
            }
          },
          metadata: Ik
        }, Jk, xk), Ik && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ik
        })
      })(), kk
    })();

    function iI(kk) {
      return "texture" in kk
    }

    function yI(kk) {
      return "value" in kk
    }
    async function lI(kk, Fk, Xk) {
      const Tk = [Fk.red, Fk.green, Fk.blue, Fk.alpha],
        ik = [],
        yk = [];
      for (let Ik = 0; Ik < 4; Ik++) {
        const kk = Tk[Ik];
        if (kk)
          if (iI(kk)) {
            if (kk.sourceChannel < 0 || kk.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let Fk = ik.indexOf(kk.texture); - 1 === Fk && (Fk = ik.length, ik.push(kk.texture)), yk[Ik] = Fk
          } else {
            if (!yI(kk)) throw new Error("Invalid channel input configuration");
            if (kk.value < 0 || kk.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            yk[Ik] = -1
          }
        else yk[Ik] = -1
      }
      let lk = Fk.outputSize;
      if (!lk && ik.length > 0) {
        let kk = 0;
        for (const Fk of ik) {
          const Ik = Fk.getSize(),
            Xk = Math.max(Ik.width, Ik.height);
          Xk > kk && (kk = Xk, lk = Ik.width === Ik.height ? kk : Ik)
        }
      }
      lk = lk || 512;
      const ak = [],
        qk = new Set;
      for (let Ik = 0; Ik < 4; Ik++) {
        const kk = Tk[Ik],
          Fk = ["RED", "GREEN", "BLUE", "ALPHA"][Ik];
        if (kk && iI(kk)) {
          ak.push(`${Fk}_FROM_TEXTURE`);
          const kk = yk[Ik];
          qk.add(kk)
        }
      }
      qk.forEach((kk => {
        ak.push(`USE_TEXTURE${kk}`)
      }));
      const Lk = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Xk.Oe().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Xk.Oe().isWebGPU ? await Promise.all([Ik.e(387).then((() => Ik(61834)))]) : await Promise.all([Ik.e(388).then((() => Ik(61838)))])
          },
          skipSceneRegistration: !0
        },
        tk = new TI(kk, lk, "textureMerger", Xk, Lk);
      tk.refreshRate = -1, tk.defines = ak.length > 0 ? "#define " + ak.join("\n#define ") + "\n" : "";
      for (let Ik = 0; Ik < ik.length; Ik++) Zk = ik[Ik], (jk = tk).uOffset = Zk.uOffset, jk.vOffset = Zk.vOffset, jk.uScale = Zk.uScale, jk.vScale = Zk.vScale, jk.uAng = Zk.uAng, jk.vAng = Zk.vAng, jk.wAng = Zk.wAng, jk.uRotationCenter = Zk.uRotationCenter, jk.vRotationCenter = Zk.vRotationCenter, tk.setTexture(`inputTexture${Ik}`, ik[Ik]);
      var Zk, jk;
      for (let Ik = 0; Ik < 4; Ik++) {
        const kk = Tk[Ik],
          Fk = ["red", "green", "blue", "alpha"][Ik];
        if (kk && iI(kk)) {
          const Xk = yk[Ik];
          tk.setInt(`${Fk}TextureIndex`, Xk), tk.setInt(`${Fk}SourceChannel`, kk.sourceChannel)
        } else {
          let Xk;
          Xk = kk && yI(kk) ? kk.value : 3 === Ik ? 1 : 0, tk.setFloat(`${Fk}ConstantValue`, Xk)
        }
      }
      return await new Promise(((kk, Fk) => {
        tk.executeWhenReady((() => {
          try {
            tk.render(), kk(tk)
          } catch (Ik) {
            Fk(Ik instanceof Error ? Ik : new Error(String(Ik)))
          }
        }))
      }))
    }

    function aI(kk, Fk) {
      return {
        texture: kk,
        sourceChannel: Fk
      }
    }

    function qI(kk) {
      return {
        value: kk
      }
    }

    function LI(kk, Fk, Ik, Xk) {
      return {
        red: kk,
        green: Fk,
        blue: Ik,
        alpha: Xk
      }
    }
    var tI = Ik(39815),
      ZI = Ik(39914),
      jI = Ik(37173),
      eI = Ik(39983),
      wI = Ik(39902);
    class HI {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class JI extends tI.d {
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
        return !!this._options?.enableMultiview || this.tw > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new HI;
        super(null), void 0 === kk.deterministicLockstep && (kk.deterministicLockstep = !1), void 0 !== kk.timeStep && (this._timeStep = kk.timeStep), void 0 === kk.lockstepMaxSteps && (kk.lockstepMaxSteps = 4), this._options = kk, jI.d.SetMatrixPrecision(!!kk.useHighPrecisionMatrix), this._caps = {
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
        }, kk.renderingCanvas && (this._renderingCanvas = kk.renderingCanvas), Ek.e.Log(`Babylon.js v${tI.d.Version} - Null engine`);
        const Fk = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (Fk.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (Fk.Blob = function() {})
      }
      createVertexBuffer(kk) {
        const Fk = new ZI.d;
        return Fk.references = 1, Fk
      }
      createIndexBuffer(kk) {
        const Fk = new ZI.d;
        return Fk.references = 1, Fk
      }
      clear(kk, Fk, Ik) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(kk, Fk, Ik) {
        this._cachedViewport = kk
      }
      createUniformBuffer(kk) {
        const Fk = new ZI.d;
        return Fk.references = 1, Fk.St = kk instanceof Array ? kk.length * Float32Array.BYTES_PER_ELEMENT : kk.byteLength, Fk
      }
      createDynamicUniformBuffer(kk) {
        return this.createUniformBuffer(kk)
      }
      updateUniformBuffer(kk, Fk, Ik, Xk) {}
      bindUniformBufferBase(kk, Fk, Ik) {}
      bindUniformBlock(kk, Fk, Ik) {}
      createShaderProgram(kk, Fk, Ik, Xk, Tk) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(kk, Fk) {
        return []
      }
      getAttributes(kk, Fk) {
        return []
      }
      bindSamplers(kk) {
        this._currentEffect = null
      }
      enableEffect(kk) {
        kk = null !== kk && (0, wI.e)(kk) ? kk.effect : kk, this._currentEffect = kk, kk && (kk.onBind && kk.onBind(kk), kk._onBindObservable && kk._onBindObservable.notifyObservers(kk))
      }
      setStateCullFaceType(kk, Fk) {}
      setState(kk) {}
      setIntArray(kk, Fk) {
        return !0
      }
      setIntArray2(kk, Fk) {
        return !0
      }
      setIntArray3(kk, Fk) {
        return !0
      }
      setIntArray4(kk, Fk) {
        return !0
      }
      setFloatArray(kk, Fk) {
        return !0
      }
      setFloatArray2(kk, Fk) {
        return !0
      }
      setFloatArray3(kk, Fk) {
        return !0
      }
      setFloatArray4(kk, Fk) {
        return !0
      }
      setArray(kk, Fk) {
        return !0
      }
      setArray2(kk, Fk) {
        return !0
      }
      setArray3(kk, Fk) {
        return !0
      }
      setArray4(kk, Fk) {
        return !0
      }
      setMatrices(kk, Fk) {
        return !0
      }
      setMatrix3x3(kk, Fk) {
        return !0
      }
      setMatrix2x2(kk, Fk) {
        return !0
      }
      setFloat(kk, Fk) {
        return !0
      }
      setFloat2(kk, Fk, Ik) {
        return !0
      }
      setFloat3(kk, Fk, Ik, Xk) {
        return !0
      }
      setBool(kk, Fk) {
        return !0
      }
      setFloat4(kk, Fk, Ik, Xk, Tk) {
        return !0
      }
      setAlphaMode(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[Ik] !== kk && (this.alphaState.setAlphaBlend(0 !== kk, 0), Fk || this.setDepthWrite(0 === kk), this._alphaMode[Ik] = kk)
      }
      bindBuffers(kk, Fk, Ik) {}
      wipeCaches(kk) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, kk && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(kk, Fk, Ik, Xk) {}
      drawElementsType(kk, Fk, Ik, Xk) {}
      drawArraysType(kk, Fk, Ik, Xk) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(kk) {}
      createTexture(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          yk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          lk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const ak = new vF.b(this, 1),
          qk = String(kk);
        return ak.url = qk, ak.generateMipMaps = !Fk, ak.samplingMode = Tk, ak.invertY = Ik, ak.baseWidth = this._options.textureSize, ak.baseHeight = this._options.textureSize, ak.width = this._options.textureSize, ak.height = this._options.textureSize, lk && (ak.format = lk), yk && (ak._buffer = yk), ak.isReady = !0, ik && setTimeout((() => {
          ik(ak)
        })), this._internalTexturesCache.push(ak), ak
      }
      _createHardwareRenderTargetWrapper(kk, Fk, Ik) {
        const Xk = new eI.d(kk, Fk, Ik, this);
        return this._renderTargetWrapperCache.push(Xk), Xk
      }
      createRenderTargetTexture(kk, Fk) {
        const Ik = this._createHardwareRenderTargetWrapper(!1, !1, kk),
          Xk = {};
        void 0 !== Fk && "object" === typeof Fk ? (Xk.generateMipMaps = Fk.generateMipMaps, Xk.generateDepthBuffer = void 0 === Fk.generateDepthBuffer || Fk.generateDepthBuffer, Xk.generateStencilBuffer = Xk.generateDepthBuffer && Fk.generateStencilBuffer, Xk.type = void 0 === Fk.type ? 0 : Fk.type, Xk.samplingMode = void 0 === Fk.samplingMode ? 3 : Fk.samplingMode) : (Xk.generateMipMaps = Fk, Xk.generateDepthBuffer = !0, Xk.generateStencilBuffer = !1, Xk.type = 0, Xk.samplingMode = 3);
        const Tk = new vF.b(this, 5);
        Ik.setTexture(Tk);
        const ik = kk.width || kk,
          yk = kk.height || kk;
        return Ik._generateDepthBuffer = Xk.generateDepthBuffer, Ik._generateStencilBuffer = !!Xk.generateStencilBuffer, Tk.baseWidth = ik, Tk.baseHeight = yk, Tk.width = ik, Tk.height = yk, Tk.isReady = !0, Tk.samples = 1, Tk.generateMipMaps = !!Xk.generateMipMaps, Tk.samplingMode = Xk.samplingMode, Tk.type = Xk.type, this._internalTexturesCache.push(Tk), Ik
      }
      createMultiviewRenderTargetTexture(kk, Fk) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const Ik = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: kk,
            height: Fk
          }),
          Xk = new vF.b(this, 5, !0);
        return Xk.baseWidth = kk, Xk.baseHeight = Fk, Xk.width = kk, Xk.height = Fk, Xk.isMultiview = !0, Xk.isReady = !0, Xk.format = 5, Xk.samples = 1, Ik.setTextures(Xk), Ik
      }
      bindMultiviewFramebuffer(kk) {
        this.bindFramebuffer(kk, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(kk, Fk) {
        const Ik = this._createHardwareRenderTargetWrapper(!1, !0, kk),
          Xk = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...Fk
          };
        Xk.generateStencilBuffer = Xk.generateDepthBuffer && Xk.generateStencilBuffer, (1 !== Xk.type || this._caps.textureFloatLinearFiltering) && (2 !== Xk.type || this._caps.textureHalfFloatLinearFiltering) || (Xk.samplingMode = 1), Ik._generateDepthBuffer = Xk.generateDepthBuffer, Ik._generateStencilBuffer = !!Xk.generateStencilBuffer;
        const Tk = new vF.b(this, 5);
        return Tk.baseWidth = kk, Tk.baseHeight = kk, Tk.width = kk, Tk.height = kk, Tk.isReady = !0, Tk.isCube = !0, Tk.samples = 1, Tk.generateMipMaps = !!Xk.generateMipMaps, Tk.samplingMode = Xk.samplingMode, Tk.type = Xk.type, this._internalTexturesCache.push(Tk), Ik
      }
      updateTextureSamplingMode(kk, Fk) {
        Fk.samplingMode = kk
      }
      createRawTexture(kk, Fk, Ik, Xk, Tk, ik, yk) {
        let lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          ak = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          qk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Lk = new vF.b(this, 3);
        return Lk.baseWidth = Fk, Lk.baseHeight = Ik, Lk.width = Fk, Lk.height = Ik, Lk.format = Xk, Lk.generateMipMaps = Tk, Lk.samplingMode = yk, Lk.invertY = ik, Lk._compression = lk, Lk.type = ak, Lk._useSRGBBuffer = qk, this._doNotHandleContextLost || (Lk._bufferView = kk), Lk
      }
      updateRawTexture(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        kk && (kk._bufferView = Fk, kk.format = Ik, kk.invertY = Xk, kk._compression = Tk, kk.type = ik, kk._useSRGBBuffer = yk)
      }
      bindFramebuffer(kk, Fk, Ik, Xk, Tk) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = kk, this._currentFramebuffer = null, this._cachedViewport && !Tk && this.setViewport(this._cachedViewport, Ik, Xk)
      }
      unBindFramebuffer(kk) {
        let Fk = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, Fk && Fk(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(kk) {
        const Fk = new ZI.d;
        return Fk.references = 1, Fk.St = 1, Fk
      }
      updateDynamicTexture(kk, Fk, Ik) {}
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
      updateDynamicIndexBuffer(kk, Fk) {}
      updateDynamicVertexBuffer(kk, Fk, Ik, Xk) {}
      _bindTextureDirectly(kk, Fk) {
        return this._boundTexturesCache[this._activeChannel] !== Fk && (this._boundTexturesCache[this._activeChannel] = Fk, !0)
      }
      _bindTexture(kk, Fk) {
        kk < 0 || this._bindTextureDirectly(0, Fk)
      }
      _deleteBuffer(kk) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(kk) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(kk, Fk, Ik, Xk, Tk) {}
      _uploadDataToTextureDirectly(kk, Fk) {}
      _uploadArrayBufferViewToTexture(kk, Fk) {}
      _uploadImageToTexture(kk, Fk) {}
    }
    Ik(40031), Ik(40070), Ik(40027);
    async function xI(kk) {
      const Fk = kk.getInternalTexture();
      if (!Fk || 1 !== Fk.source) return null;
      if (Fk.invertY) {
        const Fk = kk.mG()?.Oe();
        if (!(Fk instanceof JI)) return null
      }
      const Ik = Fk._buffer;
      let Xk, ik = kk.mimeType;
      try {
        Ik ? ArrayBuffer.isView(Ik) ? Xk = Ik.buffer.slice(Ik.byteOffset, Ik.byteOffset + Ik.byteLength) : Ik instanceof ArrayBuffer ? Xk = Ik : Ik instanceof Blob ? (Xk = await Ik.arrayBuffer(), ik = Ik.type || ik) : "string" === typeof Ik ? (Xk = await Tk.Tools.LoadFileAsync(Ik), ik = (0, ak.e)(Ik) || ik) : "undefined" !== typeof HTMLImageElement && Ik instanceof HTMLImageElement && (Xk = await Tk.Tools.LoadFileAsync(Ik.src), ik = (0, ak.e)(Ik.src) || ik) : (Xk = await Tk.Tools.LoadFileAsync(Fk.url), ik = (0, ak.e)(Fk.url) || ik)
      } catch {
        return null
      }
      if (Xk && !ik && Fk.url) {
        const kk = Fk.url.match(/^data:([^;,]+)/);
        ik = kk ? kk[1] : (0, ak.e)(Fk.url)
      }
      return Xk && ik ? {
        data: Xk,
        mimeType: ik
      } : null
    }
    const PI = 1e-6,
      KI = new Hk.Color3(.04, .04, .04),
      QI = 1024,
      sI = Hk.Color3.White(),
      VI = Hk.Color3.BlackReadOnly;

    function zI(kk) {
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

    function SI(kk, Fk, Ik) {
      if (Fk < KI.r) return 0;
      const Xk = KI.r,
        Tk = kk * Ik / (1 - KI.r) + Fk - 2 * KI.r,
        ik = Tk * Tk - 4 * Xk * (KI.r - Fk);
      return Pk.Clamp((-Tk + Math.sqrt(ik)) / (2 * Xk), 0, 1)
    }

    function oI(kk) {
      const Fk = kk.diffuseColor.toLinearSpace(kk.mG().Oe().useExactSrgbConversions).scale(.5),
        Ik = kk.alpha,
        Xk = function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Nk.p(0, 1),
            Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Nk.p(0, .1),
            Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Nk.p(0, .1),
            Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Nk.p(1300, .1);
          return function(kk, Fk, Ik, Xk, Tk) {
            return (1 - kk) * (1 - kk) * (1 - kk) * Fk + 3 * (1 - kk) * (1 - kk) * kk * Ik + 3 * (1 - kk) * kk * kk * Xk + kk * kk * kk * Tk
          }(Math.pow(kk / Tk.x, .333333), Fk.y, Ik.y, Xk.y, Tk.y)
        }(Pk.Clamp(kk.specularPower, 0, QI));
      return {
        baseColorFactor: [Fk.r, Fk.g, Fk.b, Ik],
        metallicFactor: 0,
        roughnessFactor: Xk
      }
    }

    function vI(kk, Fk) {
      Fk.needAlphaBlending() ? kk.alphaMode = "BLEND" : Fk.needAlphaTesting() && (kk.alphaMode = "MASK", kk.alphaCutoff = Fk.alphaCutOff)
    }

    function EI(kk, Fk, Ik) {
      const Xk = new Uint8Array(kk * Fk * 4);
      for (let Tk = 0; Tk < Xk.length; Tk += 4) Xk[Tk] = Xk[Tk + 1] = Xk[Tk + 2] = Xk[Tk + 3] = 255;
      return sk.b.CreateRGBATexture(Xk, kk, Fk, Ik)
    }

    function OI(kk) {
      if (kk instanceof Uint8Array) {
        const Fk = kk.length,
          Ik = new Float32Array(kk.length);
        for (let Xk = 0; Xk < Fk; ++Xk) Ik[Xk] = kk[Xk] / 255;
        return Ik
      }
      if (kk instanceof Float32Array) return kk;
      throw new Error("Unsupported pixel format!")
    }
    class nI {
      constructor(kk) {
        this._exporter = kk, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(kk) {
        return kk ? this._textureMap.get(kk.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(kk, Fk) {
        const Ik = oI(kk),
          Xk = {
            name: kk.name
          };
        if (null == kk.backFaceCulling || kk.backFaceCulling || (kk.twoSidedLighting || Tk.Tools.Warn(kk.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Xk.doubleSided = !0), Fk) {
          const Fk = [],
            Tk = kk.diffuseTexture;
          Tk && Fk.push(this.exportTextureAsync(Tk).then((kk => {
            kk && (Ik.baseColorTexture = kk)
          })));
          const ik = kk.bumpTexture;
          ik && Fk.push(this.exportTextureAsync(ik).then((kk => {
            kk && (Xk.normalTexture = kk, 1 !== ik.level && (Xk.normalTexture.scale = ik.level))
          })));
          const yk = kk.emissiveTexture;
          yk && (Xk.emissiveFactor = [1, 1, 1], Fk.push(this.exportTextureAsync(yk).then((kk => {
            kk && (Xk.emissiveTexture = kk)
          }))));
          const lk = kk.ambientTexture;
          lk && Fk.push(this.exportTextureAsync(lk).then((kk => {
            if (kk) {
              const Fk = {
                index: kk.index
              };
              Xk.occlusionTexture = Fk
            }
          }))), Fk.length > 0 && (this._exporter._materialNeedsUVsSet.add(kk), await Promise.all(Fk))
        }(kk.alpha < 1 || kk.opacityTexture) && (kk.alphaMode === Vk.d.ALPHA_COMBINE ? Xk.alphaMode = "BLEND" : Tk.Tools.Warn(kk.name + ": glTF 2.0 does not support alpha mode: " + kk.alphaMode.toString())), kk.emissiveColor && !kk.emissiveColor.equalsWithEpsilon(VI, PI) && (Xk.emissiveFactor = kk.emissiveColor.iXk()), Xk.pbrMetallicRoughness = Ik, vI(Xk, kk), await this._finishMaterialAsync(Xk, kk);
        const ik = this._exporter._materials;
        return ik.push(Xk), ik.length - 1
      }
      async _finishMaterialAsync(kk, Fk) {
        const Ik = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", kk, Fk),
          Xk = [];
        for (const Tk of Ik) Xk.push(this.exportTextureAsync(Tk));
        await Promise.all(Xk), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", kk, Fk)
      }
      _resizeTexturesToSameDimensions(kk, Fk, Ik) {
        const Xk = kk ? kk.getSize() : {
            width: 0,
            height: 0
          },
          Tk = Fk ? Fk.getSize() : {
            width: 0,
            height: 0
          };
        let ik, yk;
        return Xk.width < Tk.width ? (ik = kk && kk instanceof Qk.c ? Kk.j.CreateResizedCopy(kk, Tk.width, Tk.height, !0) : EI(Tk.width, Tk.height, Ik), yk = Fk) : Xk.width > Tk.width ? (yk = Fk && Fk instanceof Qk.c ? Kk.j.CreateResizedCopy(Fk, Xk.width, Xk.height, !0) : EI(Xk.width, Xk.height, Ik), ik = kk) : (ik = kk, yk = Fk), {
          texture1: ik,
          texture2: yk
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(kk, Fk, Ik) {
        const Xk = new Array;
        if (!kk && !Fk) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Tk = kk ? kk.mG() : Fk ? Fk.mG() : null;
        if (Tk) {
          const ik = this._resizeTexturesToSameDimensions(kk, Fk, Tk),
            yk = ik.texture1?.getSize();
          let lk, ak;
          const qk = yk.width,
            Lk = yk.height,
            tk = await ik.texture1.readPixels(),
            Zk = await ik.texture2.readPixels();
          if (!tk) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (lk = OI(tk), !Zk) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          ak = OI(Zk);
          const jk = ak.byteLength,
            ek = new Uint8Array(jk),
            wk = new Uint8Array(jk),
            Jk = 4,
            xk = new Hk.Color3(0, 0, 0);
          let Pk = 0,
            Kk = 0;
          for (let kk = 0; kk < Lk; ++kk)
            for (let Fk = 0; Fk < qk; ++Fk) {
              const Xk = (qk * kk + Fk) * Jk,
                yk = {
                  diffuseColor: new Hk.Color3(lk[Xk], lk[Xk + 1], lk[Xk + 2]).toLinearSpace(Tk.Oe().useExactSrgbConversions).multiply(Ik.diffuseColor),
                  specularColor: new Hk.Color3(ak[Xk], ak[Xk + 1], ak[Xk + 2]).toLinearSpace(Tk.Oe().useExactSrgbConversions).multiply(Ik.specularColor),
                  glossiness: ak[Xk + 3] * Ik.glossiness
                },
                Lk = this._convertSpecularGlossinessToMetallicRoughness(yk);
              xk.r = Math.max(xk.r, Lk.baseColor.r), xk.g = Math.max(xk.g, Lk.baseColor.g), xk.b = Math.max(xk.b, Lk.baseColor.b), Pk = Math.max(Pk, Lk.metallic), Kk = Math.max(Kk, Lk.roughness), wk[Xk] = 255 * Lk.baseColor.r, wk[Xk + 1] = 255 * Lk.baseColor.g, wk[Xk + 2] = 255 * Lk.baseColor.b, wk[Xk + 3] = ik.texture1.hasAlpha ? 255 * lk[Xk + 3] : 255, ek[Xk] = 0, ek[Xk + 1] = 255 * Lk.roughness, ek[Xk + 2] = 255 * Lk.metallic, ek[Xk + 3] = 255
            }
          const Qk = {
            baseColor: xk,
            metallic: Pk,
            roughness: Kk
          };
          let sk = !1,
            Vk = !1;
          for (let kk = 0; kk < Lk; ++kk)
            for (let Fk = 0; Fk < qk; ++Fk) {
              const Ik = (qk * kk + Fk) * Jk;
              wk[Ik] /= Qk.baseColor.r > PI ? Qk.baseColor.r : 1, wk[Ik + 1] /= Qk.baseColor.g > PI ? Qk.baseColor.g : 1, wk[Ik + 2] /= Qk.baseColor.b > PI ? Qk.baseColor.b : 1;
              const Xk = Hk.Color3.FromInts(wk[Ik], wk[Ik + 1], wk[Ik + 2]).toGammaSpace(Tk.Oe().useExactSrgbConversions);
              wk[Ik] = 255 * Xk.r, wk[Ik + 1] = 255 * Xk.g, wk[Ik + 2] = 255 * Xk.b, Xk.equalsWithEpsilon(sI, PI) || (Vk = !0), ek[Ik + 1] /= Qk.roughness > PI ? Qk.roughness : 1, ek[Ik + 2] /= Qk.metallic > PI ? Qk.metallic : 1;
              Hk.Color3.FromInts(255, ek[Ik + 1], ek[Ik + 2]).equalsWithEpsilon(sI, PI) || (sk = !0)
            }
          return sk && Xk.push((0, zk.EncodeImageAsync)(ek, qk, Lk).then((kk => {
            Qk.metallicRoughnessTextureData = kk
          }))), Vk && Xk.push((0, zk.EncodeImageAsync)(wk, qk, Lk).then((kk => {
            Qk.baseColorTextureData = kk
          }))), await Promise.all(Xk).then((() => Qk))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(kk) {
        const Fk = this._getPerceivedBrightness(kk.diffuseColor),
          Ik = this._getPerceivedBrightness(kk.specularColor),
          Xk = 1 - this._getMaxComponent(kk.specularColor),
          Tk = SI(Fk, Ik, Xk),
          ik = kk.diffuseColor.scale(Xk / (1 - KI.r) / Math.max(1 - Tk, PI)),
          yk = kk.specularColor.subtract(KI.scale(1 - Tk)).scale(1 / Math.max(Tk, PI));
        let lk = Hk.Color3.Lerp(ik, yk, Tk * Tk);
        lk = lk.clampToRef(0, 1, lk);
        return {
          baseColor: lk,
          metallic: Tk,
          roughness: 1 - kk.glossiness
        }
      }
      _getPerceivedBrightness(kk) {
        return Math.sqrt(.299 * kk.r * kk.r + .587 * kk.g * kk.g + .114 * kk.b * kk.b)
      }
      _getMaxComponent(kk) {
        return Math.max(kk.r, Math.max(kk.g, kk.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        const qk = [],
          Lk = {
            baseColor: kk,
            metallic: Fk,
            roughness: Ik
          };
        if (ak)
          if (yk instanceof MF) {
            if (yk.geometryOpacityTexture) {
              const kk = Xk && Xk.getInternalTexture() ? Xk.getInternalTexture().uniqueId : 0,
                Fk = yk.geometryOpacityTexture && yk.geometryOpacityTexture.getInternalTexture() ? yk.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                Ik = Number(`${kk}${Fk}`),
                Tk = this._textureMap.get(Ik);
              Tk ? lk.baseColorTexture = Tk : qk.push(lI("baseColorOpacityTexture", LI(Xk ? aI(Xk, 0) : qI(1), Xk ? aI(Xk, 1) : qI(1), Xk ? aI(Xk, 2) : qI(1), aI(yk.geometryOpacityTexture, 0)), yk.mG()).then((async kk => {
                const Fk = await this.exportTextureAsync(kk, Ik);
                Fk && (lk.baseColorTexture = Fk)
              })))
            } else Xk && qk.push(this.exportTextureAsync(Xk).then((kk => {
              kk && (lk.baseColorTexture = kk)
            })));
            if (yk._useMetallicFromMetallicTextureBlue && Tk) qk.push(this.exportTextureAsync(Tk).then((kk => {
              kk && (lk.metallicRoughnessTexture = kk)
            })));
            else if (ik || Tk) {
              const kk = Tk && Tk.getInternalTexture() ? Tk.getInternalTexture().uniqueId : 0,
                Fk = ik && ik.getInternalTexture() ? ik.getInternalTexture().uniqueId : 0,
                Ik = Number(`${kk}${Fk}`),
                Xk = this._textureMap.get(Ik);
              Xk ? lk.metallicRoughnessTexture = Xk : qk.push(lI("MetalRoughTexture", LI(yk.ambientOcclusionTexture ? aI(yk.ambientOcclusionTexture, 0) : qI(1), ik ? aI(ik, 0) : qI(1), Tk ? aI(Tk, 0) : qI(1)), yk.mG()).then((async kk => {
                const Fk = await this.exportTextureAsync(kk, Ik);
                Fk && (lk.metallicRoughnessTexture = Fk)
              })))
            }
          } else Xk && qk.push(this.exportTextureAsync(Xk).then((kk => {
            kk && (lk.baseColorTexture = kk)
          }))), Tk && qk.push(this.exportTextureAsync(Tk).then((kk => {
            kk && (lk.metallicRoughnessTexture = kk)
          })));
        return qk.length > 0 && (this._exporter._materialNeedsUVsSet.add(yk), await Promise.all(qk)), Lk
      }
      _getTextureSampler(kk) {
        const Fk = {};
        if (!kk || !(kk instanceof Qk.c)) return Fk;
        const Ik = this._getGLTFTextureWrapMode(kk.wrapU);
        10497 !== Ik && (Fk.wrapS = Ik);
        const Xk = this._getGLTFTextureWrapMode(kk.wrapV);
        switch (10497 !== Xk && (Fk.wrapT = Xk), kk.samplingMode) {
          case Qk.c.LINEAR_LINEAR:
            Fk.magFilter = 9729, Fk.minFilter = 9729;
            break;
          case Qk.c.LINEAR_NEAREST:
            Fk.magFilter = 9729, Fk.minFilter = 9728;
            break;
          case Qk.c.NEAREST_LINEAR:
            Fk.magFilter = 9728, Fk.minFilter = 9729;
            break;
          case Qk.c.NEAREST_LINEAR_MIPLINEAR:
            Fk.magFilter = 9728, Fk.minFilter = 9987;
            break;
          case Qk.c.NEAREST_NEAREST:
            Fk.magFilter = 9728, Fk.minFilter = 9728;
            break;
          case Qk.c.NEAREST_LINEAR_MIPNEAREST:
            Fk.magFilter = 9728, Fk.minFilter = 9985;
            break;
          case Qk.c.LINEAR_NEAREST_MIPNEAREST:
            Fk.magFilter = 9729, Fk.minFilter = 9984;
            break;
          case Qk.c.LINEAR_NEAREST_MIPLINEAR:
            Fk.magFilter = 9729, Fk.minFilter = 9986;
            break;
          case Qk.c.NEAREST_NEAREST_MIPLINEAR:
            Fk.magFilter = 9728, Fk.minFilter = 9986;
            break;
          case Qk.c.LINEAR_LINEAR_MIPLINEAR:
            Fk.magFilter = 9729, Fk.minFilter = 9987;
            break;
          case Qk.c.LINEAR_LINEAR_MIPNEAREST:
            Fk.magFilter = 9729, Fk.minFilter = 9985;
            break;
          case Qk.c.NEAREST_NEAREST_MIPNEAREST:
            Fk.magFilter = 9728, Fk.minFilter = 9984
        }
        return Fk
      }
      _getGLTFTextureWrapMode(kk) {
        switch (kk) {
          case Qk.c.WRAP_ADDRESSMODE:
            return 10497;
          case Qk.c.CLAMP_ADDRESSMODE:
            return 33071;
          case Qk.c.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Tk.Tools.Error(`Unsupported Texture Wrap Mode ${kk}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(kk, Fk, Ik) {
        const Xk = {
            diffuseColor: kk._albedoColor,
            specularColor: kk._reflectivityColor,
            glossiness: kk._microSurface
          },
          Tk = kk._albedoTexture,
          ik = kk._reflectivityTexture,
          yk = kk._useMicroSurfaceFromReflectivityMapAlpha;
        if (ik && !yk) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Tk || ik) && Ik) {
          this._exporter._materialNeedsUVsSet.add(kk);
          const Ik = this._exportTextureSampler(Tk || ik),
            yk = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Tk, ik, Xk),
            lk = this._exporter._textures;
          if (yk.baseColorTextureData) {
            const kk = await this._exportImageAsync(`baseColor${lk.length}`, yk.baseColorTextureData);
            Fk.baseColorTexture = this._exportTextureInfo(kk, Ik, Tk?.coordinatesIndex)
          }
          if (yk.metallicRoughnessTextureData) {
            const kk = await this._exportImageAsync(`metallicRoughness${lk.length}`, yk.metallicRoughnessTextureData);
            Fk.metallicRoughnessTexture = this._exportTextureInfo(kk, Ik, ik?.coordinatesIndex)
          }
          return yk
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Xk)
      }
      async exportPBRMaterialAsync(kk, Fk) {
        const Ik = {},
          Xk = {
            name: kk.name
          },
          Tk = kk.isMetallicWorkflow();
        if (Tk) {
          const Fk = kk._albedoColor,
            Xk = kk.alpha;
          Fk && (Ik.baseColorFactor = [Fk.r, Fk.g, Fk.b, Xk])
        }
        const ik = Tk ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(kk._albedoColor, kk._metallic, kk._roughness, kk._albedoTexture, kk._metallicTexture, kk._metallicTexture, kk, Ik, Fk) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(kk, Ik, Fk);
        await this._setMetallicRoughnessPbrMaterialAsync(ik, kk, Xk, Ik, Fk), await this._finishMaterialAsync(Xk, kk);
        const yk = this._exporter._materials;
        return yk.push(Xk), yk.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(kk, Fk, Ik, Xk, ik) {
        if (vI(Ik, Fk), kk.baseColor.equalsWithEpsilon(sI, PI) && Pk.WithinEpsilon(Fk.alpha, 1, PI) || (Xk.baseColorFactor = [kk.baseColor.r, kk.baseColor.g, kk.baseColor.b, Fk.alpha]), null != kk.metallic && 1 !== kk.metallic && (Xk.metallicFactor = kk.metallic), null != kk.roughness && 1 !== kk.roughness && (Xk.roughnessFactor = kk.roughness), null == Fk.backFaceCulling || Fk.backFaceCulling || (Fk._twoSidedLighting || Tk.Tools.Warn(Fk.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Ik.doubleSided = !0), ik) {
          const kk = [],
            Tk = Fk instanceof VF ? Fk._bumpTexture : Fk.geometryNormalTexture;
          Tk && kk.push(this.exportTextureAsync(Tk).then((kk => {
            kk && (Ik.normalTexture = kk, 1 !== Tk.level && (Ik.normalTexture.scale = Tk.level))
          })));
          const ik = Fk instanceof VF ? Fk._ambientTexture : Fk.ambientOcclusionTexture;
          ik && kk.push(new Promise((async kk => {
            if (Fk instanceof MF && Xk.metallicRoughnessTexture) {
              const Fk = this._exportTextureSampler(ik),
                Ik = this._exporter._textures[Xk.metallicRoughnessTexture.index].source,
                Tk = this._exportTextureInfo(Ik, Fk, ik.coordinatesIndex);
              return this._textureMap.set(ik.uniqueId, Tk), this._exporter._extensionsPostExportTextures("exporter", Tk, ik), kk(Tk)
            }
            return kk(await this.exportTextureAsync(ik))
          })).then((async kk => {
            if (kk) {
              const Xk = {
                index: kk.index,
                texCoord: kk.texCoord,
                extensions: kk.extensions
              };
              Ik.occlusionTexture = Xk, Xk.strength = Fk instanceof VF ? Fk._ambientTextureStrength : Fk.ambientOcclusionTexture.level
            }
          })));
          const yk = Fk instanceof VF ? Fk._emissiveTexture : Fk.emissionColorTexture;
          yk && kk.push(this.exportTextureAsync(yk).then((kk => {
            kk && (Ik.emissiveTexture = kk)
          }))), kk.length > 0 && (this._exporter._materialNeedsUVsSet.add(Fk), await Promise.all(kk))
        }
        const yk = Fk instanceof VF ? Fk._emissiveColor : Fk.emissionColor;
        yk.equalsWithEpsilon(VI, PI) || (Ik.emissiveFactor = yk.iXk()), Ik.pbrMetallicRoughness = Xk
      }
      async exportOpenPBRMaterialAsync(kk, Fk) {
        const Ik = {},
          Xk = {
            name: kk.name
          },
          Tk = kk.baseColor,
          ik = kk.geometryOpacity;
        Tk && (Ik.baseColorFactor = [Tk.r, Tk.g, Tk.b, ik]);
        const yk = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(kk.baseColor, kk.baseMetalness, kk.specularRoughness, kk.baseColorTexture, kk.baseMetalnessTexture, kk.specularRoughnessTexture, kk, Ik, Fk);
        await this._setMetallicRoughnessPbrMaterialAsync(yk, kk, Xk, Ik, Fk), await this._finishMaterialAsync(Xk, kk);
        const lk = this._exporter._materials;
        return lk.push(Xk), lk.length - 1
      }
      async exportTextureAsync(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = this._textureMap.get(Fk ?? kk.uniqueId);
        if (Ik) return Ik;
        const Xk = this._exportTextureSampler(kk),
          Tk = await this._exportTextureImageAsync(kk);
        return Ik = this._exportTextureInfo(Tk, Xk, kk.coordinatesIndex), this._textureMap.set(Fk ?? kk.uniqueId, Ik), this._exporter._extensionsPostExportTextures("exporter", Ik, kk), Ik
      }
      async _exportTextureImageAsync(kk) {
        const Fk = kk.mimeType ?? "none",
          Ik = this._internalTextureToImage,
          Xk = kk.getInternalTexture().uniqueId;
        Ik[Xk] = Ik[Xk] || {};
        let ik = Ik[Xk][Fk];
        return void 0 === ik && (ik = (async () => {
          const Ik = await xI(kk);
          if (Ik && zI(Ik.mimeType) && ("none" === Fk || Ik.mimeType === Fk)) return await this._exportImageAsync(kk.name, new Blob([Ik.data], {
            type: Ik.mimeType
          }));
          let Xk = "image/png";
          "none" !== Fk && (zI(Fk) ? Xk = Fk : (Xk = "image/png", Tk.Tools.Warn(`Unsupported media type: ${Fk}. Exporting texture as PNG.`)));
          const ik = kk.getSize(),
            yk = await (0, Kk.f)(kk),
            lk = await (0, zk.EncodeImageAsync)(yk, ik.width, ik.height, Xk);
          return await this._exportImageAsync(kk.name, lk)
        })(), Ik[Xk][Fk] = ik), await ik
      }
      async _exportImageAsync(kk, Fk) {
        const Ik = this._exporter._images;
        let Xk;
        if (this._exporter._shouldUseGlb) {
          Xk = {
            name: kk,
            mimeType: Fk.type,
            bufferView: void 0
          };
          const Ik = await Fk.arrayBuffer(),
            Tk = this._exporter._bufferManager.createBufferView(new Uint8Array(Ik));
          this._exporter._bufferManager.setBufferView(Xk, Tk)
        } else {
          const ik = kk.replace(/\.\/|\/|\.\\|\\/g, "_"),
            yk = function(kk) {
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
            }(Fk.type);
          let lk = ik + yk;
          Ik.some((kk => kk.uri === lk)) && (lk = `${ik}_${Tk.Tools.RandomId()}${yk}`), Xk = {
            name: kk,
            uri: lk
          }, this._exporter._imageData[lk] = Fk
        }
        return Ik.push(Xk), Ik.length - 1
      }
      _exportTextureInfo(kk, Fk, Ik) {
        const Xk = this._exporter._textures;
        let Tk = Xk.findIndex((Ik => Ik.sampler == Fk && Ik.source === kk)); - 1 === Tk && (Tk = Xk.length, Xk.push({
          source: kk,
          sampler: Fk
        }));
        const ik = {
          index: Tk
        };
        return Ik && (ik.texCoord = Ik), ik
      }
      _exportTextureSampler(kk) {
        const Fk = this._getTextureSampler(kk),
          Ik = this._exporter._samplers,
          Xk = Ik.findIndex((kk => kk.minFilter === Fk.minFilter && kk.magFilter === Fk.magFilter && kk.wrapS === Fk.wrapS && kk.wrapT === Fk.wrapT));
        return -1 !== Xk ? Xk : (Ik.push(Fk), Ik.length - 1)
      }
    }
    var GI = Ik(40056),
      pI = Ik(40207);
    (0, pI.c)();
    var uI = Ik(37158);
    const bI = Xk.Matrix.Compose(new Xk.Ge(-1, 1, 1), Xk.Quaternion.Identity(), Xk.Ge.Zero());

    function RI(kk, Fk) {
      if (!(kk instanceof tk.b)) return !1;
      if (Fk) {
        if (!kk.getWorldMatrix().equalsWithEpsilon(Xk.Matrix.IdentityReadOnly, uI.b)) return !1
      } else {
        if (!kk.getWorldMatrix().multiplyToRef(bI, Xk.TmpVectors.Matrix[0]).equalsWithEpsilon(Xk.Matrix.IdentityReadOnly, uI.b)) return !1
      }
      return !(kk instanceof Zk.c && kk.geometry)
    }
    const UI = Xk.Ge.ZeroReadOnly,
      CI = Xk.Quaternion.Identity(),
      NI = Xk.Ge.OneReadOnly,
      cI = new Xk.Ge(-1, 1, 1);

    function WI(kk, Fk) {
      const {
        byteOffset: Ik,
        byteStride: Xk,
        type: Tk,
        normalized: ik
      } = kk, yk = kk.getSize(), lk = Fk.reduce(((kk, Fk) => Fk.getTotalVertices() > kk ? Fk.getTotalVertices() : kk), -Number.MAX_VALUE);
      return {
        byteOffset: Ik,
        byteStride: Xk,
        componentCount: yk,
        type: Tk,
        count: lk * yk,
        normalized: ik,
        totalVertices: lk,
        kind: kk.getKind()
      }
    }

    function fI(kk) {
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

    function BI(kk) {
      switch (kk) {
        case Lk.g.PositionKind:
        case Lk.g.NormalKind:
        case Lk.g.TangentKind:
        case Lk.g.ColorKind:
        case Lk.g.MatricesIndicesKind:
        case Lk.g.MatricesIndicesExtraKind:
        case Lk.g.MatricesWeightsKind:
        case Lk.g.MatricesWeightsExtraKind:
        case Lk.g.UVKind:
        case Lk.g.UV2Kind:
        case Lk.g.UV3Kind:
        case Lk.g.UV4Kind:
        case Lk.g.UV5Kind:
        case Lk.g.UV6Kind:
          return !0
      }
      return !1
    }

    function dI(kk) {
      const Fk = Math.sqrt(kk.x * kk.x + kk.y * kk.y + kk.z * kk.z);
      Fk > 0 && (kk.x /= Fk, kk.y /= Fk, kk.z /= Fk)
    }

    function YI(kk) {
      return kk.x *= -1, kk
    }

    function AI(kk) {
      if (kk.x * kk.x + kk.y * kk.y > .5) {
        const Fk = Math.abs(kk.x),
          Ik = Math.abs(kk.y);
        if (Fk > Ik) {
          const Ik = Math.sign(kk.x);
          kk.x = Fk, kk.y *= -Ik, kk.z *= -Ik, kk.w *= Ik
        } else {
          const Fk = Math.sign(kk.y);
          kk.x *= -Fk, kk.y = Ik, kk.z *= Fk, kk.w *= -Fk
        }
      } else {
        const Fk = Math.abs(kk.z),
          Ik = Math.abs(kk.w);
        if (Fk > Ik) {
          const Ik = Math.sign(kk.z);
          kk.x *= -Ik, kk.y *= Ik, kk.z = Fk, kk.w *= -Ik
        } else {
          const Fk = Math.sign(kk.w);
          kk.x *= Fk, kk.y *= -Fk, kk.z *= -Fk, kk.w = Ik
        }
      }
      return kk
    }

    function gI(kk) {
      kk.t5(-kk.z, kk.w, kk.x, -kk.y)
    }

    function mI(kk, Fk) {
      const Ik = Xk.Ge.FromArrayToRef(Fk.translation || [0, 0, 0], 0, Xk.TmpVectors.Ge[0]),
        Tk = Xk.Quaternion.FromArrayToRef(Fk.rotation || [0, 0, 0, 1], 0, Xk.TmpVectors.Quaternion[0]),
        ik = Xk.Matrix.ComposeToRef(NI, Tk, Ik, Xk.TmpVectors.Matrix[0]),
        yk = Xk.Ge.FromArrayToRef(kk.translation || [0, 0, 0], 0, Xk.TmpVectors.Ge[2]),
        lk = Xk.Quaternion.FromArrayToRef(kk.rotation || [0, 0, 0, 1], 0, Xk.TmpVectors.Quaternion[1]),
        ak = Xk.Matrix.ComposeToRef(NI, lk, yk, Xk.TmpVectors.Matrix[1]);
      ik.multiplyToRef(ak, ak), ak.decompose(void 0, Tk, Ik), Ik.equalsWithEpsilon(UI, uI.b) ? delete Fk.translation : Fk.translation = Ik.iXk(), Tk.equalsWithEpsilon(CI, uI.b) ? delete Fk.rotation : Fk.rotation = Tk.iXk(), Fk.scale && delete Fk.scale
    }

    function hI(kk, Fk) {
      if (!(Fk instanceof tk.b)) return !1;
      if (!(1 === Fk.getChildren().length && 0 === kk.getChildren().length && kk.parent === Fk)) return !1;
      const Ik = kk.mG(),
        Xk = kk instanceof pI.e && !Ik.useRightHandedSystem ? cI : NI;
      return !!Fk.ci.equalsWithEpsilon(Xk, uI.b) || (Ek.e.Warn(`Cannot collapse node ${kk.name} into parent node ${Fk.name} with modified scaling.`), !1)
    }

    function rI(kk) {
      if (kk instanceof Array) {
        const Fk = new Float32Array(kk);
        return new Uint8Array(Fk.buffer, Fk.byteOffset, Fk.byteLength)
      }
      return ArrayBuffer.isView(kk) ? new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength) : new Uint8Array(kk)
    }

    function DI(kk, Fk) {
      for (const [Ik, Xk] of Object.entries(kk)) {
        const Tk = Fk[Ik];
        (Array.isArray(Xk) && Array.isArray(Tk) && MI(Xk, Tk) || Xk === Tk) && delete kk[Ik]
      }
      return kk
    }

    function MI(kk, Fk) {
      return kk.length === Fk.length && kk.every(((kk, Ik) => kk === Fk[Ik]))
    }
    const kX = new Map([
      [Int8Array, (kk, Fk, Ik) => kk.setInt8(Fk, Ik)],
      [Uint8Array, (kk, Fk, Ik) => kk.setUint8(Fk, Ik)],
      [Uint8ClampedArray, (kk, Fk, Ik) => kk.setUint8(Fk, Ik)],
      [Int16Array, (kk, Fk, Ik) => kk.setInt16(Fk, Ik, !0)],
      [Uint16Array, (kk, Fk, Ik) => kk.setUint16(Fk, Ik, !0)],
      [Int32Array, (kk, Fk, Ik) => kk.setInt32(Fk, Ik, !0)],
      [Uint32Array, (kk, Fk, Ik) => kk.setUint32(Fk, Ik, !0)],
      [Float32Array, (kk, Fk, Ik) => kk.setFloat32(Fk, Ik, !0)],
      [Float64Array, (kk, Fk, Ik) => kk.setFloat64(Fk, Ik, !0)]
    ]);
    class FX {
      writeTypedArray(kk) {
        this._checkGrowBuffer(kk.byteLength);
        const Fk = kX.get(kk.constructor);
        for (let Ik = 0; Ik < kk.length; Ik++) Fk(this._dataView, this._byteOffset, kk[Ik]), this._byteOffset += kk.BYTES_PER_ELEMENT
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
        const Fk = this.byteOffset + kk;
        if (Fk > this._data.byteLength) {
          const kk = new Uint8Array(2 * Fk);
          kk.set(this._data), this._data = kk, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function IX(kk) {
      return kk % 4 === 0 ? 4 : kk % 2 === 0 ? 2 : 1
    }
    class XX {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(kk) {
        let Fk = 0;
        this._bufferViewToData.forEach((kk => {
          Fk += kk.byteLength
        }));
        const Ik = new FX(Fk),
          Xk = Array.from(this._bufferViewToData.keys()).sort(((kk, Fk) => IX(Fk.byteLength) - IX(kk.byteLength)));
        for (const Tk of Xk) {
          Tk.byteOffset = Ik.byteOffset, kk.push(Tk);
          const Fk = kk.length - 1,
            Xk = this.getPropertiesWithBufferView(Tk);
          for (const kk of Xk) kk.bufferView = Fk;
          Ik.writeTypedArray(this._bufferViewToData.get(Tk)), this._bufferViewToData.delete(Tk)
        }
        return Ik.getOutputData()
      }
      createBufferView(kk, Fk) {
        const Ik = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: kk.byteLength,
          byteStride: Fk
        };
        return this._bufferViewToData.set(Ik, kk), Ik
      }
      createAccessor(kk, Fk, Ik, Xk, Tk, ik, yk) {
        this._verifyBufferView(kk);
        const lk = {
          bufferView: void 0,
          componentType: Ik,
          count: Xk,
          type: Fk,
          min: ik?.min,
          max: ik?.max,
          normalized: yk,
          byteOffset: Tk
        };
        return this.setBufferView(lk, kk), this._accessorToBufferView.set(lk, kk), lk
      }
      setBufferView(kk, Fk) {
        this._verifyBufferView(Fk);
        this.getPropertiesWithBufferView(Fk).push(kk)
      }
      removeBufferView(kk) {
        const Fk = this.getPropertiesWithBufferView(kk);
        for (const Ik of Fk) void 0 !== Ik.bufferView && delete Ik.bufferView;
        this._bufferViewToData.delete(kk), this._bufferViewToProperties.delete(kk), this._accessorToBufferView.forEach(((Fk, Ik) => {
          Fk === kk && (void 0 !== Ik.byteOffset && delete Ik.byteOffset, this._accessorToBufferView.delete(Ik))
        }))
      }
      getBufferView(kk) {
        const Fk = this._accessorToBufferView.get(kk);
        return this._verifyBufferView(Fk), Fk
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
    var TX = Ik(40214);
    (0, TX.e)();
    var iX = Ik(40452);
    (0, iX.g)();
    var yX = Ik(40269),
      lX = Ik(41107);
    (0, lX.d)();
    let aX = (() => {
      var kk;
      let Fk, Ik, Xk = [],
        Tk = [],
        ik = [],
        yk = [];
      return kk = class {
        get influence() {
          return this._influence
        }
        set influence(kk) {
          if (this._influence === kk) return;
          const Fk = this._influence;
          this._influence = kk, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === Fk || 0 === kk)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(kk) {
          this._animationPropertiesOverride = kk
        }
        constructor(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            lk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = kk, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new FI.e, this._onDataLayoutChanged = new FI.e, this.id = (0, Sk.n)(this, Xk, void 0), this.morphTargetManager = ((0, Sk.n)(this, Tk), (0, Sk.n)(this, ik, null)), this._animationPropertiesOverride = ((0, Sk.n)(this, yk), null), this.id = kk, this.morphTargetManager = lk, this._scene = Ik || wk.e.LastCreatedScene, this.influence = Fk, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        byk(kk) {
          const Fk = this.hasPositions;
          this._positions = kk, Fk !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(kk) {
          const Fk = this.hasNormals;
          this._normals = kk, Fk !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(kk) {
          const Fk = this.hasTangents;
          this._tangents = kk, Fk !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(kk) {
          const Fk = this.hasUVs;
          this._uvs = kk, Fk !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(kk) {
          const Fk = this.hasUV2s;
          this._uv2s = kk, Fk !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(kk) {
          const Fk = this.hasColors;
          this._colors = kk, Fk !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const Fk = zF.b.Clone((() => new kk(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return Fk._positions = this._positions, Fk._normals = this._normals, Fk._tangents = this._tangents, Fk._uvs = this._uvs, Fk._uv2s = this._uv2s, Fk._colors = this._colors, Fk
        }
        serialize() {
          const kk = {};
          return kk.name = this.name, kk.influence = this.influence, null != this.id && (kk.id = this.id), kk.uniqueId = this.uniqueId, kk.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (kk.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (kk.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (kk.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (kk.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (kk.colors = Array.prototype.slice.call(this.getColors())), zF.b.AppendSerializedAnimations(this, kk), kk
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(Fk, Ik) {
          let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Tk = new kk(Fk.name, Fk.influence, Ik, Xk);
          if (Tk.byk(Fk.positions), null != Fk.id && (Tk.id = Fk.id), Fk.normals && Tk.setNormals(Fk.normals), Fk.tangents && Tk.setTangents(Fk.tangents), Fk.uvs && Tk.setUVs(Fk.uvs), Fk.uv2s && Tk.setUV2s(Fk.uv2s), Fk.colors && Tk.setColors(Fk.colors), Fk.animations) {
            for (let kk = 0; kk < Fk.animations.length; kk++) {
              const Ik = Fk.animations[kk],
                Xk = (0, fF.b)("BABYLON.Animation");
              Xk && Tk.animations.push(Xk.Parse(Ik))
            }
            Fk.autoAnimate && Ik && Ik.beginAnimation(Tk, Fk.autoAnimateFrom, Fk.autoAnimateTo, Fk.autoAnimateLoop, Fk.autoAnimateSpeed || 1)
          }
          return Tk
        }
        static FromMesh(Fk, Ik, Xk) {
          Ik || (Ik = Fk.name);
          const Tk = new kk(Ik, Xk, Fk.mG(), Fk.morphTargetManager);
          return Tk.byk(Fk.getVerticesData(ck.l.PositionKind)), Fk.isVerticesDataPresent(ck.l.NormalKind) && Tk.setNormals(Fk.getVerticesData(ck.l.NormalKind)), Fk.isVerticesDataPresent(ck.l.TangentKind) && Tk.setTangents(Fk.getVerticesData(ck.l.TangentKind)), Fk.isVerticesDataPresent(ck.l.UVKind) && Tk.setUVs(Fk.getVerticesData(ck.l.UVKind)), Fk.isVerticesDataPresent(ck.l.UV2Kind) && Tk.setUV2s(Fk.getVerticesData(ck.l.UV2Kind)), Fk.isVerticesDataPresent(ck.l.ColorKind) && Tk.setColors(Fk.getVerticesData(ck.l.ColorKind)), Tk
        }
      }, (() => {
        const lk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, vk.J)()], Ik = [(0, vk.J)()], (0, Sk.j)(null, null, Fk, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: kk => "id" in kk,
            get: kk => kk.id,
            set: (kk, Fk) => {
              kk.id = Fk
            }
          },
          metadata: lk
        }, Xk, Tk), (0, Sk.j)(null, null, Ik, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: kk => "morphTargetManager" in kk,
            get: kk => kk.morphTargetManager,
            set: (kk, Fk) => {
              kk.morphTargetManager = Fk
            }
          },
          metadata: lk
        }, ik, yk), lk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lk
        })
      })(), kk
    })();
    var qX, LX = Ik(41165),
      tX = Ik(40265);
    ! function(kk) {
      kk[kk.INTANGENT = 0] = "INTANGENT", kk[kk.OUTTANGENT = 1] = "OUTTANGENT"
    }(qX || (qX = {}));
    class ZX {
      static _IsTransformable(kk) {
        return kk && (kk instanceof tk.b || kk instanceof TX.d || kk instanceof tX.b)
      }
      static _CreateNodeAnimation(kk, Fk, Ik, Xk, ik) {
        if (this._IsTransformable(kk)) {
          const yk = [],
            lk = [],
            ak = Fk.getKeys(),
            qk = ZX._CalculateMinMaxKeyFrames(ak),
            Lk = ZX._DeduceInterpolation(ak, Ik, Xk),
            tk = Lk.interpolationType,
            Zk = Lk.shouldBakeAnimation;
          if (Zk ? ZX._CreateBakedAnimation(kk, Fk, Ik, qk.min, qk.max, Fk.framePerSecond, ik, yk, lk, qk, Xk) : "LINEAR" === tk || "STEP" === tk ? ZX._CreateLinearOrStepAnimation(kk, Fk, Ik, yk, lk, Xk) : "CUBICSPLINE" === tk ? ZX._CreateCubicSplineAnimation(kk, Fk, Ik, yk, lk, Xk) : ZX._CreateBakedAnimation(kk, Fk, Ik, qk.min, qk.max, Fk.framePerSecond, ik, yk, lk, qk, Xk), yk.length && lk.length) {
            return {
              inputs: yk,
              outputs: lk,
              samplerInterpolation: tk,
              inputsMin: Zk ? qk.min : Tk.Tools.FloatRound(qk.min / Fk.framePerSecond),
              inputsMax: Zk ? qk.max : Tk.Tools.FloatRound(qk.max / Fk.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(kk) {
        let Fk = null,
          Ik = "VEC3",
          Xk = !1;
        const ik = kk.targetProperty.split(".");
        switch (ik[0]) {
          case "ci":
            Fk = "scale";
            break;
          case "position":
            Fk = "translation";
            break;
          case "rotation":
            Ik = "VEC4", Fk = "rotation";
            break;
          case "rotationQuaternion":
            Ik = "VEC4", Xk = !0, Fk = "rotation";
            break;
          case "influence":
            Ik = "SCALAR", Fk = "weights";
            break;
          default:
            Tk.Tools.Error(`Unsupported animatable property ${ik[0]}`)
        }
        return Fk ? {
          animationChannelTargetPath: Fk,
          dataAccessorType: Ik,
          useQuaternion: Xk
        } : (Tk.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk) {
        let tk;
        if (ZX._IsTransformable(kk) && kk.animations)
          for (const Zk of kk.animations) {
            if (Lk && !Lk(Zk)) continue;
            const Tk = ZX._DeduceAnimationInfo(Zk);
            Tk && (tk = {
              name: Zk.name,
              samplers: [],
              channels: []
            }, ZX._AddAnimation(`${Zk.name}`, Zk.hasRunningRuntimeAnimations ? Fk : tk, kk, Zk, Tk.dataAccessorType, Tk.animationChannelTargetPath, Xk, ik, yk, lk, Tk.useQuaternion, ak, qk), tk.samplers.length && tk.channels.length && Ik.push(tk))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk) {
        let tk;
        if (kk instanceof LX.c) {
          const Tk = kk.morphTargetManager;
          if (Tk)
            for (let Zk = 0; Zk < Tk.numTargets; ++Zk) {
              const jk = Tk.getTarget(Zk);
              for (const ek of jk.animations) {
                if (Lk && !Lk(ek)) continue;
                const jk = new lX.c(`${ek.name}`, "influence", ek.framePerSecond, ek.dataType, ek.Fi, ek.enableBlending),
                  wk = [],
                  Hk = ek.getKeys();
                for (let kk = 0; kk < Hk.length; ++kk) {
                  const Fk = Hk[kk];
                  for (let kk = 0; kk < Tk.numTargets; ++kk) kk == Zk ? wk.push(Fk) : wk.push({
                    frame: Fk.frame,
                    value: 0
                  })
                }
                jk.setKeys(wk, !0);
                const Jk = ZX._DeduceAnimationInfo(jk);
                Jk && (tk = {
                  name: jk.name,
                  samplers: [],
                  channels: []
                }, ZX._AddAnimation(ek.name, ek.hasRunningRuntimeAnimations ? Fk : tk, kk, jk, Jk.dataAccessorType, Jk.animationChannelTargetPath, Xk, ik, yk, lk, Jk.useQuaternion, ak, qk, Tk.numTargets), tk.samplers.length && tk.channels.length && Ik.push(tk))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
        let Lk;
        if (kk.animationGroups) {
          const tk = kk.animationGroups;
          for (const Zk of tk) {
            const tk = new Map,
              jk = new Map,
              ek = new Set,
              wk = Zk.to - Zk.from;
            Lk = {
              name: Zk.name,
              channels: [],
              samplers: []
            };
            for (let Fk = 0; Fk < Zk.targetedAnimations.length; ++Fk) {
              const qk = Zk.targetedAnimations[Fk],
                wk = qk.target,
                Hk = qk.animation;
              if (ak && !ak(Hk)) continue;
              const Jk = lk.has(wk);
              if (this._IsTransformable(wk) || 1 === wk.length && this._IsTransformable(wk[0])) {
                const kk = ZX._DeduceAnimationInfo(qk.animation);
                if (kk) {
                  const Fk = this._IsTransformable(wk) ? wk : this._IsTransformable(wk[0]) ? wk[0] : null;
                  Fk && ZX._AddAnimation(`${Hk.name}`, Lk, Fk, Hk, kk.dataAccessorType, kk.animationChannelTargetPath, Ik, Xk, Tk, ik, kk.useQuaternion, yk, Jk)
                }
              } else if (wk instanceof aX || 1 === wk.length && wk[0] instanceof aX) {
                if (ZX._DeduceAnimationInfo(qk.animation)) {
                  const Fk = wk instanceof aX ? wk : wk[0];
                  if (Fk) {
                    const Ik = kk.morphTargetManagers.find((kk => {
                      for (let Ik = 0; Ik < kk.numTargets; ++Ik)
                        if (kk.getTarget(Ik) === Fk) return !0;
                      return !1
                    }));
                    if (Ik) {
                      const Xk = kk.meshes.find((kk => kk.morphTargetManager === Ik));
                      Xk && (tk.has(Xk) || tk.set(Xk, new Map), tk.get(Xk)?.set(Fk, Hk), ek.add(Xk), jk.set(Xk, Hk))
                    }
                  }
                }
              }
            }
            ek.forEach((kk => {
              const Fk = kk.morphTargetManager;
              let lk = null;
              const ak = [],
                qk = jk.get(kk).getKeys(),
                ek = qk.length;
              for (let Ik = 0; Ik < ek; ++Ik)
                for (let Xk = 0; Xk < Fk.numTargets; ++Xk) {
                  const Tk = Fk.getTarget(Xk),
                    ik = tk.get(kk);
                  if (ik) {
                    const Fk = ik.get(Tk);
                    Fk ? (lk || (lk = new lX.c(`${Zk.name}_${kk.name}_MorphWeightAnimation`, "influence", Fk.framePerSecond, lX.c.ANIMATIONTYPE_FLOAT, Fk.Fi, Fk.enableBlending)), ak.push(Fk.getKeys()[Ik])) : ak.push({
                      frame: Zk.from + wk / ek * Ik,
                      value: Tk.influence,
                      inTangent: qk[0].inTangent ? 0 : void 0,
                      outTangent: qk[0].outTangent ? 0 : void 0
                    })
                  }
                }
              lk.setKeys(ak, !0);
              const Hk = ZX._DeduceAnimationInfo(lk);
              Hk && ZX._AddAnimation(`${Zk.name}_${kk.name}_MorphWeightAnimation`, Lk, kk, lk, Hk.dataAccessorType, Hk.animationChannelTargetPath, Ik, Xk, Tk, ik, Hk.useQuaternion, yk, !1, Fk?.numTargets)
            })), Lk.channels.length && Lk.samplers.length && (qk?.set(Zk, Fk.length), Fk.push(Lk))
          }
        }
      }
      static _AddAnimation(kk, Fk, Ik, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek) {
        const wk = ZX._CreateNodeAnimation(Ik, Tk, yk, tk, Zk);
        let Hk, Jk, xk, Pk, Kk, Qk;
        if (wk) {
          if (ek) {
            let kk, Fk = 0;
            const Ik = [];
            for (; wk.inputs.length > 0;) kk = wk.inputs.shift(), Fk % ek == 0 && Ik.push(kk), Fk++;
            wk.inputs = Ik
          }
          const kk = lk.get(Ik),
            Tk = new Float32Array(wk.inputs);
          Hk = ak.createBufferView(Tk), Jk = ak.createAccessor(Hk, "SCALAR", 5126, wk.inputs.length, void 0, {
            min: [wk.inputsMin],
            max: [wk.inputsMax]
          }), Lk.push(Jk), xk = Lk.length - 1;
          const qk = new Xk.Quaternion,
            tk = new Xk.Ge,
            Zk = new Xk.Ge,
            sk = Ik instanceof TX.d,
            Vk = fI(ik),
            zk = new Float32Array(wk.outputs.length * Vk);
          wk.outputs.forEach((function(kk, Fk) {
            let Ik = kk;
            switch (yk) {
              case "translation":
                jk && (Xk.Ge.FromArrayToRef(kk, 0, Zk), YI(Zk), Zk.toArray(Ik));
                break;
              case "rotation":
                4 === kk.length ? Xk.Quaternion.FromArrayToRef(kk, 0, qk) : (Ik = new Array(4), Xk.Ge.FromArrayToRef(kk, 0, tk), Xk.Quaternion.FromEulerVectorToRef(tk, qk)), jk && (AI(qk), sk && gI(qk)), qk.toArray(Ik)
            }
            zk.set(Ik, Fk * Vk)
          })), Hk = ak.createBufferView(zk), Jk = ak.createAccessor(Hk, ik, 5126, wk.outputs.length), Lk.push(Jk), Pk = Lk.length - 1, Kk = {
            interpolation: wk.samplerInterpolation,
            input: xk,
            output: Pk
          }, Fk.samplers.push(Kk), Qk = {
            sampler: Fk.samplers.length - 1,
            target: {
              node: kk,
              path: yk
            }
          }, Fk.channels.push(Qk)
        }
      }
      static _CreateBakedAnimation(kk, Fk, Ik, ik, yk, lk, ak, qk, Lk, tk, Zk) {
        let jk;
        const ek = Xk.Quaternion.Identity();
        let wk, Hk, Jk, xk, Pk, Kk = null,
          Qk = null;
        tk.min = Tk.Tools.FloatRound(ik / lk);
        const sk = Fk.getKeys();
        for (let Xk = 0, Vk = sk.length; Xk < Vk; ++Xk) {
          if (Hk = sk[Xk], Xk + 1 < Vk)
            if (Jk = sk[Xk + 1], Hk.value.equals && Hk.value.equals(Jk.value) || Hk.value === Jk.value) {
              if (0 !== Xk) continue;
              Pk = Hk.frame
            } else Pk = Jk.frame;
          else {
            if (xk = sk[Xk - 1], Hk.value.equals && Hk.value.equals(xk.value) || Hk.value === xk.value) continue;
            Pk = yk
          }
          if (Pk)
            for (let Xk = Hk.frame; Xk <= Pk; Xk += ak) {
              if (wk = Tk.Tools.FloatRound(Xk / lk), wk === Kk) continue;
              Kk = wk, Qk = wk;
              const ik = {
                key: 0,
                repeatCount: 0,
                Fi: Fk.Fi
              };
              jk = Fk._interpolate(Xk, ik), ZX._SetInterpolatedValue(kk, jk, wk, Fk, Ik, ek, qk, Lk, Zk)
            }
        }
        Qk && (tk.max = Qk)
      }
      static _ConvertFactorToVector3OrQuaternion(kk, Fk, Ik, ik, yk) {
        const lk = ZX._GetBasePositionRotationOrScale(Fk, ik, yk),
          ak = Ik.targetProperty.split("."),
          qk = ak ? ak[1] : "",
          Lk = yk ? Xk.Quaternion.FromArray(lk).normalize() : Xk.Ge.FromArray(lk);
        switch (qk) {
          case "x":
          case "y":
          case "z":
            Lk[qk] = kk;
            break;
          case "w":
            Lk.w = kk;
            break;
          default:
            Tk.Tools.Error(`glTFAnimation: Unsupported component name "${qk}"!`)
        }
        return Lk
      }
      static _SetInterpolatedValue(kk, Fk, Ik, Tk, ik, yk, lk, ak, qk) {
        let Lk;
        lk.push(Ik), "weights" !== ik ? (Tk.dataType === lX.c.ANIMATIONTYPE_FLOAT && (Fk = this._ConvertFactorToVector3OrQuaternion(Fk, kk, Tk, ik, qk)), "rotation" === ik ? (qk ? yk = Fk : (Lk = Fk, Xk.Quaternion.RotationYawPitchRollToRef(Lk.y, Lk.x, Lk.z, yk)), ak.push(yk.iXk())) : (Lk = Fk, ak.push(Lk.iXk()))) : ak.push([Fk])
      }
      static _CreateLinearOrStepAnimation(kk, Fk, Ik, Xk, Tk, ik) {
        for (const yk of Fk.getKeys()) Xk.push(yk.frame / Fk.framePerSecond), ZX._AddKeyframeValue(yk, Fk, Tk, Ik, kk, ik)
      }
      static _CreateCubicSplineAnimation(kk, Fk, Ik, Xk, Tk, ik) {
        Fk.getKeys().forEach((function(yk) {
          Xk.push(yk.frame / Fk.framePerSecond), ZX._AddSplineTangent(qX.INTANGENT, Tk, Ik, "CUBICSPLINE", yk, ik), ZX._AddKeyframeValue(yk, Fk, Tk, Ik, kk, ik), ZX._AddSplineTangent(qX.OUTTANGENT, Tk, Ik, "CUBICSPLINE", yk, ik)
        }))
      }
      static _GetBasePositionRotationOrScale(kk, Fk, Ik) {
        let Tk;
        if ("rotation" === Fk)
          if (Ik) {
            Tk = (kk.rotationQuaternion ?? Xk.Quaternion.Identity()).iXk()
          } else {
            Tk = (kk.rotation ?? Xk.Ge.Zero()).iXk()
          }
        else if ("translation" === Fk) {
          Tk = (kk.position ?? Xk.Ge.Zero()).iXk()
        } else {
          Tk = (kk.ci ?? Xk.Ge.One()).iXk()
        }
        return Tk
      }
      static _AddKeyframeValue(kk, Fk, Ik, ik, yk, lk) {
        let ak;
        const qk = Fk.dataType;
        if (qk === lX.c.ANIMATIONTYPE_VECTOR3) {
          let Fk = kk.value.iXk();
          if ("rotation" === ik) {
            const kk = Xk.Ge.FromArray(Fk);
            Fk = Xk.Quaternion.RotationYawPitchRoll(kk.y, kk.x, kk.z).iXk()
          }
          Ik.push(Fk)
        } else if (qk === lX.c.ANIMATIONTYPE_FLOAT) {
          if ("weights" === ik) Ik.push([kk.value]);
          else if (ak = this._ConvertFactorToVector3OrQuaternion(kk.value, yk, Fk, ik, lk), ak) {
            if ("rotation" === ik) {
              const kk = lk ? ak : Xk.Quaternion.RotationYawPitchRoll(ak.y, ak.x, ak.z).normalize();
              Ik.push(kk.iXk())
            }
            Ik.push(ak.iXk())
          }
        } else qk === lX.c.ANIMATIONTYPE_QUATERNION ? Ik.push(kk.value.normalize().iXk()) : Tk.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(kk, Fk, Ik) {
        let Xk, Tk, ik = !1;
        if ("rotation" === Fk && !Ik) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let yk = 0, lk = kk.length; yk < lk; ++yk)
          if (Tk = kk[yk], Tk.inTangent || Tk.outTangent)
            if (Xk) {
              if ("CUBICSPLINE" !== Xk) {
                Xk = "LINEAR", ik = !0;
                break
              }
            } else Xk = "CUBICSPLINE";
        else if (Xk) {
          if ("CUBICSPLINE" === Xk || Tk.interpolation && 1 === Tk.interpolation && "STEP" !== Xk) {
            Xk = "LINEAR", ik = !0;
            break
          }
        } else Xk = Tk.interpolation && 1 === Tk.interpolation ? "STEP" : "LINEAR";
        return Xk || (Xk = "LINEAR"), {
          interpolationType: Xk,
          shouldBakeAnimation: ik
        }
      }
      static _AddSplineTangent(kk, Fk, Ik, Tk, ik, yk) {
        let lk;
        const ak = kk === qX.INTANGENT ? ik.inTangent : ik.outTangent;
        if ("CUBICSPLINE" === Tk) {
          if ("rotation" === Ik)
            if (ak)
              if (yk) lk = ak.iXk();
              else {
                const kk = ak;
                lk = Xk.Quaternion.RotationYawPitchRoll(kk.y, kk.x, kk.z).iXk()
              }
          else lk = [0, 0, 0, 0];
          else lk = "weights" === Ik ? ak ? [ak] : [0] : ak ? ak.iXk() : [0, 0, 0];
          Fk.push(lk)
        }
      }
      static _CalculateMinMaxKeyFrames(kk) {
        let Fk = 1 / 0,
          Ik = -1 / 0;
        return kk.forEach((function(kk) {
          Fk = Math.min(Fk, kk.frame), Ik = Math.max(Ik, kk.frame)
        })), {
          min: Fk,
          max: Ik
        }
      }
    }

    function jX(kk, Fk, Ik, ik, yk, lk) {
      const ak = {
          attributes: {},
          influence: kk.influence,
          name: kk.name
        },
        qk = Fk.geometry;
      if (!qk) return Tk.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), ak;
      const tk = lk ? -1 : 1,
        Zk = Xk.Ge.Zero();
      let jk, ek;
      if (kk.hasPositions) {
        const ik = kk.getPositions(),
          lk = qk.getVerticesData(Lk.g.PositionKind);
        if (lk) {
          const kk = new Float32Array(lk.length),
            Fk = [1 / 0, 1 / 0, 1 / 0],
            Tk = [-1 / 0, -1 / 0, -1 / 0];
          ek = lk.length / 3, jk = 0;
          for (let Ik = jk; Ik < ek; ++Ik) {
            const yk = Xk.Ge.FromArray(lk, 3 * Ik);
            Xk.Ge.FromArray(ik, 3 * Ik).subtractToRef(yk, Zk), Zk.x *= tk, Fk[0] = Math.min(Fk[0], Zk.x), Tk[0] = Math.max(Tk[0], Zk.x), Fk[1] = Math.min(Fk[1], Zk.y), Tk[1] = Math.max(Tk[1], Zk.y), Fk[2] = Math.min(Fk[2], Zk.z), Tk[2] = Math.max(Tk[2], Zk.z), kk[3 * Ik] = Zk.x, kk[3 * Ik + 1] = Zk.y, kk[3 * Ik + 2] = Zk.z
          }
          const qk = Ik.createBufferView(kk, 12),
            Lk = Ik.createAccessor(qk, "VEC3", 5126, ik.length / 3, 0, {
              min: Fk,
              max: Tk
            });
          yk.push(Lk), ak.attributes.POSITION = yk.length - 1
        } else Tk.Tools.Warn(`Morph target positions for mesh ${Fk.name} were not exported. Mesh does not have position vertex data`)
      }
      if (kk.hasNormals) {
        const ik = kk.getNormals(),
          lk = qk.getVerticesData(Lk.g.NormalKind);
        if (lk) {
          const kk = new Float32Array(lk.length);
          ek = lk.length / 3, jk = 0;
          for (let Ik = jk; Ik < ek; ++Ik) {
            const Fk = Xk.Ge.FromArray(lk, 3 * Ik).normalize();
            Xk.Ge.FromArray(ik, 3 * Ik).normalize().subtractToRef(Fk, Zk), kk[3 * Ik] = Zk.x * tk, kk[3 * Ik + 1] = Zk.y, kk[3 * Ik + 2] = Zk.z
          }
          const Fk = Ik.createBufferView(kk, 12),
            Tk = Ik.createAccessor(Fk, "VEC3", 5126, ik.length / 3, 0);
          yk.push(Tk), ak.attributes.NORMAL = yk.length - 1
        } else Tk.Tools.Warn(`Morph target normals for mesh ${Fk.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (kk.hasTangents) {
        const ik = kk.getTangents(),
          lk = qk.getVerticesData(Lk.g.TangentKind);
        if (lk) {
          ek = lk.length / 4;
          const kk = new Float32Array(3 * ek);
          jk = 0;
          for (let Ik = jk; Ik < ek; ++Ik) {
            const Fk = Xk.Ge.FromArray(lk, 4 * Ik);
            dI(Fk);
            const Tk = Xk.Ge.FromArray(ik, 3 * Ik);
            dI(Tk), Tk.subtractToRef(Fk, Zk), kk[3 * Ik] = Zk.x * tk, kk[3 * Ik + 1] = Zk.y, kk[3 * Ik + 2] = Zk.z
          }
          const Fk = Ik.createBufferView(kk, 12),
            Tk = Ik.createAccessor(Fk, "VEC3", 5126, ek, 0);
          yk.push(Tk), ak.attributes.TANGENT = yk.length - 1
        } else Tk.Tools.Warn(`Morph target tangents for mesh ${Fk.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (kk.hasColors) {
        const ik = kk.getColors(),
          lk = qk.getVerticesData(Lk.g.ColorKind),
          tk = qk.getVertexBuffer(Lk.g.ColorKind);
        if (lk && tk) {
          const kk = tk.getSize();
          ek = lk.length / kk;
          const Fk = new Float32Array(ek * kk);
          jk = 0;
          for (let Ik = jk; Ik < ek; ++Ik)
            if (3 === kk) {
              const Tk = Xk.Ge.FromArray(lk, Ik * kk);
              Xk.Ge.FromArray(ik, Ik * kk).subtractToRef(Tk, Zk), Fk[3 * Ik] = Zk.x, Fk[3 * Ik + 1] = Zk.y, Fk[3 * Ik + 2] = Zk.z
            } else if (4 === kk) {
            const Tk = new Xk.Vector4,
              yk = Xk.Vector4.FromArray(lk, Ik * kk);
            Xk.Vector4.FromArray(ik, Ik * kk).subtractToRef(yk, Tk), Fk[4 * Ik] = Tk.x, Fk[4 * Ik + 1] = Tk.y, Fk[4 * Ik + 2] = Tk.z, Fk[4 * Ik + 3] = Tk.w
          } else Tk.Tools.Warn(`Unsupported number of components for color attribute: ${kk}`);
          const qk = Ik.createBufferView(Fk, 4 * kk),
            Lk = Ik.createAccessor(qk, 3 === kk ? "VEC3" : "VEC4", 5126, ek, 0);
          yk.push(Lk), ak.attributes.COLOR_0 = yk.length - 1
        } else Tk.Tools.Warn(`Morph target colors for mesh ${Fk.name} were not exported. Mesh does not have colors vertex data`)
      }
      return ak
    }
    var eX = Ik(41586);
    class wX {}
    wX.DEFAULT_COLOR = Ak.e.White(), wX.DEFAULT_WIDTH_ATTENUATED = 1, wX.DEFAULT_WIDTH = .1;
    var HX = Ik(41102);
    class JX {
      constructor(kk) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = kk
      }
      moveTo(kk, Fk) {
        this._currentPath = new HX.l(kk, Fk), this._tempPaths.push(this._currentPath)
      }
      lineTo(kk, Fk) {
        this._currentPath.addLineTo(kk, Fk)
      }
      quadraticCurveTo(kk, Fk, Ik, Xk) {
        this._currentPath.addQuadraticCurveTo(kk, Fk, Ik, Xk, this._resolution)
      }
      bezierCurveTo(kk, Fk, Ik, Xk, Tk, ik) {
        this._currentPath.addBezierCurveTo(kk, Fk, Ik, Xk, Tk, ik, this._resolution)
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

    function xX(kk, Fk, Ik, Xk, Tk, ik) {
      const yk = ik.glyphs[kk] || ik.glyphs["?"];
      if (!yk) return null;
      const lk = new JX(Tk);
      if (yk.o) {
        const kk = yk.o.split(" ");
        for (let Tk = 0, ik = kk.length; Tk < ik;) {
          switch (kk[Tk++]) {
            case "m": {
              const ik = parseInt(kk[Tk++]) * Fk + Ik,
                yk = parseInt(kk[Tk++]) * Fk + Xk;
              lk.moveTo(ik, yk);
              break
            }
            case "l": {
              const ik = parseInt(kk[Tk++]) * Fk + Ik,
                yk = parseInt(kk[Tk++]) * Fk + Xk;
              lk.lineTo(ik, yk);
              break
            }
            case "q": {
              const ik = parseInt(kk[Tk++]) * Fk + Ik,
                yk = parseInt(kk[Tk++]) * Fk + Xk,
                ak = parseInt(kk[Tk++]) * Fk + Ik,
                qk = parseInt(kk[Tk++]) * Fk + Xk;
              lk.quadraticCurveTo(ak, qk, ik, yk);
              break
            }
            case "b": {
              const ik = parseInt(kk[Tk++]) * Fk + Ik,
                yk = parseInt(kk[Tk++]) * Fk + Xk,
                ak = parseInt(kk[Tk++]) * Fk + Ik,
                qk = parseInt(kk[Tk++]) * Fk + Xk,
                Lk = parseInt(kk[Tk++]) * Fk + Ik,
                tk = parseInt(kk[Tk++]) * Fk + Xk;
              lk.bezierCurveTo(ak, qk, Lk, tk, ik, yk);
              break
            }
          }
        }
      }
      return lk.extractHoles(), {
        offsetX: yk.ha * Fk,
        shapePath: lk
      }
    }

    function PX(kk, Fk, Ik, Xk) {
      const Tk = Array.from(kk),
        ik = Fk / Xk.resolution,
        yk = (Xk.boundingBox.yMax - Xk.boundingBox.yMin + Xk.underlineThickness) * ik,
        lk = [];
      let ak = 0,
        qk = 0;
      for (let Lk = 0; Lk < Tk.length; Lk++) {
        const kk = Tk[Lk];
        if ("\n" === kk) ak = 0, qk -= yk;
        else {
          const Fk = xX(kk, ik, ak, qk, Ik, Xk);
          Fk && (ak += Fk.offsetX, lk.push(Fk.shapePath))
        }
      }
      return lk
    }
    class KX {
      static ConvertPoints(kk, Fk) {
        if (kk.length && Array.isArray(kk) && "number" === typeof kk[0]) return [kk];
        if (kk.length && Array.isArray(kk[0]) && "number" === typeof kk[0][0]) return kk;
        if (kk.length && !Array.isArray(kk[0]) && kk[0] instanceof Nk.t) {
          const Fk = [];
          for (let Ik = 0; Ik < kk.length; Ik++) {
            const Xk = kk[Ik];
            Fk.push(Xk.x, Xk.y, Xk.z)
          }
          return [Fk]
        }
        if (kk.length > 0 && Array.isArray(kk[0]) && kk[0].length > 0 && kk[0][0] instanceof Nk.t) {
          const Fk = [],
            Ik = kk;
          for (const kk of Ik) Fk.push(kk.flatMap((kk => [kk.x, kk.y, kk.z])));
          return Fk
        }
        if (kk instanceof Float32Array) {
          if (Fk?.floatArrayStride) {
            const Ik = [],
              Xk = 3 * Fk.floatArrayStride;
            for (let Fk = 0; Fk < kk.length; Fk += Xk) {
              const Tk = new Array(Xk);
              for (let Ik = 0; Ik < Xk; Ik++) Tk[Ik] = kk[Fk + Ik];
              Ik.push(Tk)
            }
            return Ik
          }
          return [Array.from(kk)]
        }
        if (kk.length && kk[0] instanceof Float32Array) {
          const Fk = [];
          for (const Ik of kk) Fk.push(Array.from(Ik));
          return Fk
        }
        return []
      }
      static OmitZeroLengthPredicate(kk, Fk, Ik) {
        const Xk = [];
        return Fk.subtract(kk).lengthSquared() > 0 && Xk.push([kk, Fk]), Ik.subtract(Fk).lengthSquared() > 0 && Xk.push([Fk, Ik]), kk.subtract(Ik).lengthSquared() > 0 && Xk.push([Ik, kk]), 0 === Xk.length ? null : Xk
      }
      static OmitDuplicatesPredicate(kk, Fk, Ik, Xk) {
        const Tk = [];
        return KX._SearchInPoints(kk, Fk, Xk) || Tk.push([kk, Fk]), KX._SearchInPoints(Fk, Ik, Xk) || Tk.push([Fk, Ik]), KX._SearchInPoints(Ik, kk, Xk) || Tk.push([Ik, kk]), 0 === Tk.length ? null : Tk
      }
      static _SearchInPoints(kk, Fk, Ik) {
        for (const Xk of Ik)
          for (let Ik = 0; Ik < Xk.length; Ik++)
            if (Xk[Ik]?.equals(kk) && (Xk[Ik + 1]?.equals(Fk) || Xk[Ik - 1]?.equals(Fk))) return !0;
        return !1
      }
      static MeshesToLines(kk, Fk) {
        const Ik = [];
        for (let Xk = 0; Xk < kk.length; Xk++) {
          const Tk = kk[Xk],
            ik = Tk.getVerticesData(ck.l.PositionKind),
            yk = Tk.yXk();
          if (ik && yk)
            for (let kk = 0, lk = 0; kk < yk.length; kk++) {
              const ak = 3 * yk[lk++],
                qk = 3 * yk[lk++],
                Lk = 3 * yk[lk++],
                tk = new Nk.t(ik[ak], ik[ak + 1], ik[ak + 2]),
                Zk = new Nk.t(ik[qk], ik[qk + 1], ik[qk + 2]),
                jk = new Nk.t(ik[Lk], ik[Lk + 1], ik[Lk + 2]);
              if (Fk) {
                const lk = Fk(tk, Zk, jk, Ik, kk, ak, Tk, Xk, ik, yk);
                if (lk)
                  for (const kk of lk) Ik.push(kk)
              } else Ik.push([tk, Zk], [Zk, jk], [jk, tk])
            }
        }
        return Ik
      }
      static ToVector3Array(kk) {
        if (Array.isArray(kk[0])) {
          const Fk = [],
            Ik = kk;
          for (const kk of Ik) {
            const Ik = [];
            for (let Fk = 0; Fk < kk.length; Fk += 3) Ik.push(new Nk.t(kk[Fk], kk[Fk + 1], kk[Fk + 2]));
            Fk.push(Ik)
          }
          return Fk
        }
        const Fk = kk,
          Ik = [];
        for (let Xk = 0; Xk < Fk.length; Xk += 3) Ik.push(new Nk.t(Fk[Xk], Fk[Xk + 1], Fk[Xk + 2]));
        return Ik
      }
      static ToNumberArray(kk) {
        return kk.flatMap((kk => [kk.x, kk.y, kk.z]))
      }
      static GetPointsCountInfo(kk) {
        const Fk = new Array(kk.length);
        let Ik = 0;
        for (let Xk = kk.length; Xk--;) Fk[Xk] = kk[Xk].length / 3, Ik += Fk[Xk];
        return {
          total: Ik,
          counts: Fk
        }
      }
      static GetLineLength(kk) {
        if (0 === kk.length) return 0;
        let Fk;
        Fk = "number" === typeof kk[0] ? KX.ToVector3Array(kk) : kk;
        const Ik = Nk.l.Ge[0];
        let Xk = 0;
        for (let Tk = 0; Tk < Fk.length - 1; Tk++) {
          const kk = Fk[Tk];
          Xk += Fk[Tk + 1].subtractToRef(kk, Ik).length()
        }
        return Xk
      }
      static GetLineLengthArray(kk, Fk) {
        const Ik = Fk ? new Float32Array(Fk, 0, kk.length / 3) : new Float32Array(kk.length / 3);
        let Xk = 0;
        for (let Tk = 0, ik = kk.length / 3 - 1; Tk < ik; Tk++) {
          let Fk = kk[3 * Tk + 0],
            ik = kk[3 * Tk + 1],
            yk = kk[3 * Tk + 2];
          Fk -= kk[3 * Tk + 3], ik -= kk[3 * Tk + 4], yk -= kk[3 * Tk + 5];
          Xk += Math.sqrt(Fk * Fk + ik * ik + yk * yk), Ik[Tk + 1] = Xk
        }
        return Ik
      }
      static SegmentizeSegmentByCount(kk, Fk, Ik) {
        const Xk = [],
          Tk = Fk.subtract(kk),
          ik = Nk.l.Ge[0];
        ik.I6(Ik);
        const yk = Nk.l.Ge[1];
        Tk.divideToRef(ik, yk);
        let lk = kk.clone();
        Xk.push(lk);
        for (let ak = 0; ak < Ik; ak++) lk = lk.clone(), Xk.push(lk.addInPlace(yk));
        return Xk
      }
      static SegmentizeLineBySegmentLength(kk, Fk) {
        const Ik = kk[0] instanceof Nk.t ? KX.GetLineSegments(kk) : "number" === typeof kk[0] ? KX.GetLineSegments(KX.ToVector3Array(kk)) : kk,
          Xk = [];
        for (const Tk of Ik)
          if (Tk.length > Fk) {
            const kk = KX.SegmentizeSegmentByCount(Tk.point1, Tk.point2, Math.ceil(Tk.length / Fk));
            for (const Fk of kk) Xk.push(Fk)
          } else Xk.push(Tk.point1), Xk.push(Tk.point2);
        return Xk
      }
      static SegmentizeLineBySegmentCount(kk, Fk) {
        const Ik = "number" === typeof kk[0] ? KX.ToVector3Array(kk) : kk,
          Xk = KX.GetLineLength(Ik) / Fk;
        return KX.SegmentizeLineBySegmentLength(Ik, Xk)
      }
      static GetLineSegments(kk) {
        const Fk = [];
        for (let Ik = 0; Ik < kk.length - 1; Ik++) {
          const Xk = kk[Ik],
            Tk = kk[Ik + 1],
            ik = Tk.subtract(Xk).length();
          Fk.push({
            point1: Xk,
            point2: Tk,
            length: ik
          })
        }
        return Fk
      }
      static GetMinMaxSegmentLength(kk) {
        const Fk = KX.GetLineSegments(kk).sort((kk => kk.length));
        return {
          min: Fk[0].length,
          max: Fk[Fk.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Tk = Fk * Ik;
        let ik = 0,
          yk = 0;
        const lk = kk.length;
        for (let qk = 0; qk < lk; qk++) {
          if (Tk <= ik + kk[qk].length) {
            yk = qk;
            break
          }
          ik += kk[qk].length
        }
        const ak = (Tk - ik) / kk[yk].length;
        return kk[yk].point2.subtractToRef(kk[yk].point1, Nk.l.Ge[0]), Nk.l.Ge[0].scaleToRef(ak, Nk.l.Ge[1]), Xk || Nk.l.Ge[1].addInPlace(kk[yk].point1), Nk.l.Ge[1].clone()
      }
      static GetCircleLinePoints(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk,
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / Fk;
        const ik = [];
        for (let yk = 0; yk <= Fk; yk++) ik.push(new Nk.t(Math.cos(yk * Tk) * kk, Math.sin(yk * Tk) * Xk, Ik));
        return ik
      }
      static GetBezierLinePoints(kk, Fk, Ik, Xk) {
        return HX.h.CreateQuadraticBezier(kk, Fk, Ik, Xk).getPoints().flatMap((kk => [kk.x, kk.y, kk.z]))
      }
      static GetArrowCap(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [kk.clone(), kk.add(Fk.multiplyByFloats(Ik, Ik, Ik))],
          widths: [Xk, Tk, ik, yk]
        }
      }
      static GetPointsFromText(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ik = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const yk = [],
          lk = PX(kk, Fk, Ik, Xk);
        for (const ak of lk) {
          for (const kk of ak.paths) {
            const Fk = [],
              Ik = kk.getPoints();
            for (const kk of Ik) Fk.push(kk.x, kk.y, Tk);
            yk.push(Fk)
          }
          if (ik)
            for (const kk of ak.holes) {
              const Fk = [],
                Ik = kk.getPoints();
              for (const kk of Ik) Fk.push(kk.x, kk.y, Tk);
              yk.push(Fk)
            }
        }
        return yk
      }
      static Color3toRGBAUint8(kk) {
        const Fk = new Uint8Array(4 * kk.length);
        for (let Ik = 0, Xk = 0; Ik < kk.length; Ik++) Fk[Xk++] = 255 * kk[Ik].r, Fk[Xk++] = 255 * kk[Ik].g, Fk[Xk++] = 255 * kk[Ik].b, Fk[Xk++] = 255;
        return Fk
      }
      static CreateColorsTexture(kk, Fk, Ik, Xk) {
        const Tk = Xk.Oe().getCaps().maxTextureSize ?? 1,
          ik = Fk.length > Tk ? Tk : Fk.length,
          yk = Math.ceil(Fk.length / Tk);
        yk > 1 && (Fk = [...Fk, ...Array(ik * yk - Fk.length).fill(Fk[0])]);
        const lk = KX.Color3toRGBAUint8(Fk),
          ak = new sk.b(lk, ik, yk, tI.d.TEXTUREFORMAT_RGBA, Xk, !1, !0, Ik);
        return ak.name = kk, ak
      }
      static PrepareEmptyColorsTexture(kk) {
        if (!wX.EmptyColorsTexture) {
          const Fk = new Uint8Array(4);
          wX.EmptyColorsTexture = new sk.b(Fk, 1, 1, tI.d.TEXTUREFORMAT_RGBA, kk, !1, !1, sk.b.NEAREST_NEAREST), wX.EmptyColorsTexture.name = "grlEmptyColorsTexture", wX.EmptyColorsTexture.hG.addOnce((() => {
            wX.EmptyColorsTexture = null
          }))
        }
        return wX.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        wX.EmptyColorsTexture?.dispose(), wX.EmptyColorsTexture = null
      }
      static BooleanToNumber(kk) {
        return kk ? 1 : 0
      }
    }
    class QX extends Wk.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class sX extends fk.b {
      isCompatible(kk) {
        return !0
      }
      constructor(kk, Fk, Ik) {
        Ik = Ik || {
          color: wX.DEFAULT_COLOR
        };
        const Xk = new QX;
        Xk.GREASED_LINE_HAS_COLOR = !!Ik.color && !Ik.useColors, Xk.GREASED_LINE_SIZE_ATTENUATION = Ik.sizeAttenuation ?? !1, Xk.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === Ik.colorDistributionType, Xk.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (Fk ?? kk.mG()).useRightHandedSystem, Xk.GREASED_LINE_CAMERA_FACING = Ik.cameraFacing ?? !0, super(kk, sX.GREASED_LINE_MATERIAL_NAME, 200, Xk, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = Ik?.forceGLSL || sX.ForceGLSL, this._scene = Fk ?? kk.mG(), this._engine = this._scene.Oe(), this._cameraFacing = Ik.cameraFacing ?? !0, this.visibility = Ik.visibility ?? 1, this.useDash = Ik.useDash ?? !1, this.dashRatio = Ik.dashRatio ?? .5, this.dashOffset = Ik.dashOffset ?? 0, this.width = Ik.width ? Ik.width : Ik.sizeAttenuation ? wX.DEFAULT_WIDTH_ATTENUATED : wX.DEFAULT_WIDTH, this._sizeAttenuation = Ik.sizeAttenuation ?? !1, this.colorMode = Ik.colorMode ?? 0, this._color = Ik.color ?? null, this.useColors = Ik.useColors ?? !1, this._colorsDistributionType = Ik.colorDistributionType ?? 0, this.colorsSampling = Ik.colorsSampling ?? sk.b.NEAREST_NEAREST, this._colors = Ik.colors ?? null, this.dashCount = Ik.dashCount ?? 1, this.resolution = Ik.resolution ?? new Nk.p(this._engine.getRenderWidth(), this._engine.getRenderHeight()), Ik.colorsTexture ? this.colorsTexture = Ik.colorsTexture : this._colors ? this.colorsTexture = KX.CreateColorsTexture(`${kk.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? wX.DEFAULT_COLOR, KX.PrepareEmptyColorsTexture(this._scene)), this._engine.hG.add((() => {
          KX.DisposeEmptyColorsTexture()
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
        const Fk = [{
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
        return this._cameraFacing && Fk.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === kk && Fk.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: Fk,
          vertex: this._cameraFacing && this._isGLSL(kk) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(kk) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(kk) {
        if (this._cameraFacing) {
          kk.I9("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || kk.I9("viewProjection", this._scene.getTransformMatrix());
          const Fk = Nk.l.Vector4[0];
          Fk.x = this._aspect, Fk.y = this._resolution.x, Fk.z = this._resolution.y, Fk.w = this.width, kk.updateVector4("grl_aspect_resolution_lineWidth", Fk)
        }
        const Fk = Nk.l.Vector4[0];
        Fk.x = KX.BooleanToNumber(this.useDash), Fk.y = this._dashArray, Fk.z = this.dashOffset, Fk.w = this.dashRatio, kk.updateVector4("grl_dashOptions", Fk);
        const Ik = Nk.l.Vector4[1];
        Ik.x = this.colorMode, Ik.y = this.visibility, Ik.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, Ik.w = KX.BooleanToNumber(this.useColors), kk.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", Ik), this._color && kk.updateColor3("grl_singleColor", this._color);
        const Xk = this.colorsTexture ?? wX.EmptyColorsTexture;
        kk.setTexture("grl_colors", Xk), kk.updateFloat2("grl_textureSize", Xk?.getSize().width ?? 1, Xk?.getSize().height ?? 1)
      }
      prepareDefines(kk, Fk, Ik) {
        kk.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, kk.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, kk.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, kk.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = Fk.useRightHandedSystem, kk.GREASED_LINE_CAMERA_FACING = this._cameraFacing, kk.GREASED_LINE_USE_OFFSETS = !!Ik.offsets
      }
      getClassName() {
        return sX.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(Fk) ? function(kk, Fk) {
          if ("vertex" === kk) {
            const kk = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return Fk && (kk["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), kk
          }
          return "fragment" === kk ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(kk, this._cameraFacing) : function(kk, Fk) {
          if ("vertex" === kk) {
            const kk = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return Fk && (kk["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), kk
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
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Xk = this._colors?.length ?? 0;
        if (this._colors = kk, null !== kk && 0 !== kk.length) {
          if (!Fk || Ik)
            if (this.colorsTexture && Xk === kk.length && !Ik) {
              const Fk = KX.Color3toRGBAUint8(kk);
              this.colorsTexture.update(Fk)
            } else this.colorsTexture?.dispose(), this.colorsTexture = KX.CreateColorsTexture(`${this._material.name}-colors-texture`, kk, this.colorsSampling, this._scene)
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
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== kk || null !== this._color && null === kk ? (this._color = kk, Fk || this.markAllDefinesAsDirty()) : this._color = kk
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
          Fk = {
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
        return this._colors && (Fk.colors = this._colors), this._color && (Fk.color = this._color), kk.greasedLineMaterialOptions = Fk, kk
      }
      parse(kk, Fk, Ik) {
        super.parse(kk, Fk, Ik);
        const Xk = kk.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Xk.color && this.setColor(Xk.color, !0), Xk.colorDistributionType && (this.colorsDistributionType = Xk.colorDistributionType), Xk.colors && (this.colors = Xk.colors), Xk.colorsSampling && (this.colorsSampling = Xk.colorsSampling), Xk.colorMode && (this.colorMode = Xk.colorMode), Xk.useColors && (this.useColors = Xk.useColors), Xk.visibility && (this.visibility = Xk.visibility), Xk.useDash && (this.useDash = Xk.useDash), Xk.dashCount && (this.dashCount = Xk.dashCount), Xk.dashRatio && (this.dashRatio = Xk.dashRatio), Xk.dashOffset && (this.dashOffset = Xk.dashOffset), Xk.width && (this.width = Xk.width), Xk.sizeAttenuation && (this.sizeAttenuation = Xk.sizeAttenuation), Xk.resolution && (this.resolution = Xk.resolution), this.colors ? this.colorsTexture = KX.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, Fk) : KX.PrepareEmptyColorsTexture(Fk), this.markAllDefinesAsDirty()
      }
      copyTo(kk) {
        const Fk = kk;
        Fk.colorsTexture?.dispose(), this._colors && (Fk.colorsTexture = KX.CreateColorsTexture(`${Fk._material.name}-colors-texture`, this._colors, Fk.colorsSampling, this._scene)), Fk.setColor(this.color, !0), Fk.colorsDistributionType = this.colorsDistributionType, Fk.colorsSampling = this.colorsSampling, Fk.colorMode = this.colorMode, Fk.useColors = this.useColors, Fk.visibility = this.visibility, Fk.useDash = this.useDash, Fk.dashCount = this.dashCount, Fk.dashRatio = this.dashRatio, Fk.dashOffset = this.dashOffset, Fk.width = this.width, Fk.sizeAttenuation = this.sizeAttenuation, Fk.resolution = this.resolution, Fk.markAllDefinesAsDirty()
      }
      _isGLSL(kk) {
        return 0 === kk || this._forceGLSL
      }
    }
    sX.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", sX.ForceGLSL = !1;
    var VX = Ik(40417),
      zX = Ik(40427),
      SX = Ik(38666),
      oX = Ik(40482),
      vX = Ik(39821);
    class EX extends oX.q {
      constructor(kk, Fk, Xk) {
        const Tk = Fk.Oe(),
          ik = Tk.isWebGPU && !(Xk.forceGLSL || EX.ForceGLSL),
          yk = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        Fk.useRightHandedSystem && yk.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const lk = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Xk.cameraFacing ? (yk.push("GREASED_LINE_CAMERA_FACING"), lk.push("grl_previousAndSide", "grl_nextAndCounters")) : (lk.push("grl_slopes"), lk.push("grl_counters"));
        const ak = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (ik || ak.push("world", "viewProjection", "view", "projection"), super(kk, Fk, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: ik ? ["Scene", "Mesh"] : void 0,
            attributes: lk,
            uniforms: ak,
            samplers: ik ? [] : ["grlColors"],
            defines: yk,
            extraInitializationsAsync: async () => {
              ik ? await Promise.all([Ik.e(334).then((() => Ik(61852))), Ik.e(391).then((() => Ik(61855)))]) : await Promise.all([Ik.e(327).then((() => Ik(61863))), Ik.e(392).then((() => Ik(61870)))])
            },
            shaderLanguage: ik ? 1 : 0
          }), this._color = Ak.e.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Xk = Xk || {
            color: wX.DEFAULT_COLOR
          }, this.visibility = Xk.visibility ?? 1, this.useDash = Xk.useDash ?? !1, this.dashRatio = Xk.dashRatio ?? .5, this.dashOffset = Xk.dashOffset ?? 0, this.dashCount = Xk.dashCount ?? 1, this.width = Xk.width ? Xk.width : Xk.sizeAttenuation && Xk.cameraFacing ? wX.DEFAULT_WIDTH_ATTENUATED : wX.DEFAULT_WIDTH, this.sizeAttenuation = Xk.sizeAttenuation ?? !1, this.color = Xk.color ?? Ak.e.White(), this.useColors = Xk.useColors ?? !1, this.colorsDistributionType = Xk.colorDistributionType ?? 0, this.colorsSampling = Xk.colorsSampling ?? sk.b.NEAREST_NEAREST, this.colorMode = Xk.colorMode ?? 0, this._colors = Xk.colors ?? null, this._cameraFacing = Xk.cameraFacing ?? !0, this.resolution = Xk.resolution ?? new Nk.p(Tk.getRenderWidth(), Tk.getRenderHeight()), Xk.colorsTexture ? this.colorsTexture = Xk.colorsTexture : this._colors ? this.colorsTexture = KX.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, Fk) : (this._color = this._color ?? wX.DEFAULT_COLOR, this.colorsTexture = KX.PrepareEmptyColorsTexture(Fk)), ik) {
          const kk = new vX.b;
          kk.setParameters(), kk.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", kk)
        }
        Tk.hG.add((() => {
          KX.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== wX.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Nk.p(this._colorMode, this._colorsDistributionType))
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
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Xk = this._colors?.length ?? 0;
        if (this._colors = kk, null !== kk && 0 !== kk.length) {
          if (!Fk || Ik)
            if (this._colorsTexture && Xk === kk.length && !Ik) {
              const Fk = KX.Color3toRGBAUint8(kk);
              this._colorsTexture.update(Fk)
            } else this._colorsTexture && this._colorsTexture !== wX.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = KX.CreateColorsTexture(`${this.name}-colors-texture`, kk, this.colorsSampling, this.mG())
        } else {
          this._colorsTexture && this._colorsTexture !== wX.EmptyColorsTexture && this._colorsTexture.dispose();
          const kk = this.mG();
          kk && (this.colorsTexture = KX.PrepareEmptyColorsTexture(kk))
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
        this._useColors = kk, this.setFloat("grlUseColors", KX.BooleanToNumber(kk))
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
        this._useDash = kk, this.setFloat("grlUseDash", KX.BooleanToNumber(kk))
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
        this._sizeAttenuation = kk, this.setFloat("grlSizeAttenuation", KX.BooleanToNumber(kk))
      }
      get color() {
        return this._color
      }
      set color(kk) {
        this.setColor(kk)
      }
      setColor(kk) {
        kk = kk ?? wX.DEFAULT_COLOR, this._color = kk, this.setColor3("grlColor", kk)
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
          Fk = {
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
        return this._colors && (Fk.colors = this._colors), kk.greasedLineMaterialOptions = Fk, kk
      }
      parse(kk, Fk, Ik) {
        const Xk = kk.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Xk.color && (this.color = Xk.color), Xk.colorDistributionType && (this.colorsDistributionType = Xk.colorDistributionType), Xk.colorsSampling && (this.colorsSampling = Xk.colorsSampling), Xk.colorMode && (this.colorMode = Xk.colorMode), Xk.useColors && (this.useColors = Xk.useColors), Xk.visibility && (this.visibility = Xk.visibility), Xk.useDash && (this.useDash = Xk.useDash), Xk.dashCount && (this.dashCount = Xk.dashCount), Xk.dashRatio && (this.dashRatio = Xk.dashRatio), Xk.dashOffset && (this.dashOffset = Xk.dashOffset), Xk.width && (this.width = Xk.width), Xk.sizeAttenuation && (this.sizeAttenuation = Xk.sizeAttenuation), Xk.resolution && (this.resolution = Xk.resolution), Xk.colors ? this.colorsTexture = KX.CreateColorsTexture(`${this.name}-colors-texture`, Xk.colors, this.colorsSampling, this.mG()) : this.colorsTexture = KX.PrepareEmptyColorsTexture(Fk), this._cameraFacing = Xk.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var OX, nX, GX;
    EX.ForceGLSL = !1,
      function(kk) {
        kk[kk.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", kk[kk.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(OX || (OX = {})),
      function(kk) {
        kk[kk.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", kk[kk.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", kk[kk.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(nX || (nX = {})),
      function(kk) {
        kk[kk.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", kk[kk.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", kk[kk.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", kk[kk.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", kk[kk.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(GX || (GX = {}));
    class pX extends VX.b {
      constructor(kk, Fk, Ik) {
        super(kk, Fk, null, null, !1, !1), this.name = kk, this._options = Ik, this._lazy = !1, this._updatable = !1, this._engine = Fk.Oe(), this._lazy = Ik.lazy ?? !1, this._updatable = Ik.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = Ik.colorPointers ?? [], this._widths = Ik.widths ?? new Array(Ik.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(kk) {
        let Fk = 0;
        for (const Xk of this._points) Fk += Xk.length;
        const Ik = Fk / 3 * 2 - this._widths.length;
        for (let Xk = 0; Xk < Ik; Xk++) this._widths.push(kk)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.ue && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(kk, Fk) {
        for (const Ik of kk) this._points.push(Ik);
        this._lazy || this.setPoints(this._points, Fk)
      }
      dispose(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(kk, Fk)
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
        this.material instanceof EX && this.material.setDefine("GREASED_LINE_USE_OFFSETS", kk?.length > 0), this._offsets = kk, this._offsetsBuffer ? this._offsetsBuffer.update(kk) : this._createOffsetsBuffer(kk)
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
        if (this.material && this.material instanceof EX) return this.material;
        const kk = this.material?.pluginManager?.getPlugin(sX.GREASED_LINE_MATERIAL_NAME);
        return kk || void 0
      }
      get points() {
        const kk = [];
        return SX.c.DeepCopy(this._points, kk), kk
      }
      setPoints(kk, Fk) {
        this._points = KX.ConvertPoints(kk, Fk?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), Fk?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, Fk)
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
        const Fk = new zX.c;
        return Fk.positions = this._vertexPositions, Fk.indices = this._indices, Fk.uvs = this._uvs, kk && (Fk.normals = [], zX.c.ComputeNormals(this._vertexPositions, this._indices, Fk.normals)), Fk.applyToMesh(this, this._options.updatable), Fk
      }
      _createOffsetsBuffer(kk) {
        const Fk = this._scene.Oe(),
          Ik = new ck.e(Fk, kk, this._updatable, 3);
        this.setVerticesBuffer(Ik.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = Ik
      }
    }
    class uX {
      constructor(kk, Fk) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = kk, this.wasAddedByNoopNode = Fk
      }
      getIndicesAccessor(kk, Fk, Ik, Xk, Tk) {
        return this._indicesAccessorMap.get(kk)?.get(Fk)?.get(Ik)?.get(Xk)?.get(Tk)
      }
      setIndicesAccessor(kk, Fk, Ik, Xk, Tk, ik) {
        let yk = this._indicesAccessorMap.get(kk);
        yk || (yk = new Map, this._indicesAccessorMap.set(kk, yk));
        let lk = yk.get(Fk);
        lk || (lk = new Map, yk.set(Fk, lk));
        let ak = lk.get(Ik);
        ak || (ak = new Map, lk.set(Ik, ak));
        let qk = ak.get(Xk);
        qk || (qk = new Map, ak.set(Xk, qk)), qk.set(Tk, ik)
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
      setVertexBufferView(kk, Fk) {
        this._vertexBufferViewMap.set(kk, Fk)
      }
      setRemappedBufferView(kk, Fk, Ik) {
        this._remappedBufferView.set(kk, new Map), this._remappedBufferView.get(kk).set(Fk, Ik)
      }
      getRemappedBufferView(kk, Fk) {
        return this._remappedBufferView.get(kk)?.get(Fk)
      }
      getVertexAccessor(kk, Fk, Ik) {
        return this._vertexAccessorMap.get(kk)?.get(Fk)?.get(Ik)
      }
      setVertexAccessor(kk, Fk, Ik, Xk) {
        let Tk = this._vertexAccessorMap.get(kk);
        Tk || (Tk = new Map, this._vertexAccessorMap.set(kk, Tk));
        let ik = Tk.get(Fk);
        ik || (ik = new Map, Tk.set(Fk, ik)), ik.set(Ik, Xk)
      }
      hasVertexColorAlpha(kk) {
        return this._vertexMapColorAlpha.get(kk) || !1
      }
      setHasVertexColorAlpha(kk, Fk) {
        return this._vertexMapColorAlpha.set(kk, Fk)
      }
      getMesh(kk) {
        return this._meshMap.get(kk)
      }
      setMesh(kk, Fk) {
        this._meshMap.set(kk, Fk)
      }
      bindMorphDataToMesh(kk, Fk) {
        const Ik = this._meshMorphTargetMap.get(kk) || [];
        this._meshMorphTargetMap.set(kk, Ik), -1 === Ik.indexOf(Fk) && Ik.push(Fk)
      }
      getMorphTargetsFromMesh(kk) {
        return this._meshMorphTargetMap.get(kk)
      }
    }
    class bX {
      _ApplyExtension(kk, Fk, Ik, Xk) {
        if (Ik >= Fk.length) return Promise.resolve(kk);
        const Tk = Xk(Fk[Ik], kk);
        return Tk ? Tk.then((async kk => kk ? await this._ApplyExtension(kk, Fk, Ik + 1, Xk) : null)) : this._ApplyExtension(kk, Fk, Ik + 1, Xk)
      }
      _ApplyExtensions(kk, Fk) {
        const Ik = [];
        for (const Xk of bX._ExtensionNames) Ik.push(this._extensions[Xk]);
        return this._ApplyExtension(kk, Ik, 0, Fk)
      }
      _extensionsPostExportNodeAsync(kk, Fk, Ik, Xk, Tk) {
        return this._ApplyExtensions(Fk, ((Fk, ik) => Fk.postExportNodeAsync && Fk.postExportNodeAsync(kk, ik, Ik, Xk, Tk, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(kk, Fk, Ik) {
        return this._ApplyExtensions(Fk, ((Fk, Xk) => Fk.postExportMaterialAsync && Fk.postExportMaterialAsync(kk, Xk, Ik)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        const Xk = [];
        return await Promise.all(bX._ExtensionNames.map((async Tk => {
          const ik = this._extensions[Tk];
          if (ik.postExportMaterialAdditionalTexturesAsync) {
            const Tk = await ik.postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik);
            Xk.push(...Tk)
          }
        }))), Xk
      }
      _extensionsPostExportTextures(kk, Fk, Ik) {
        for (const Xk of bX._ExtensionNames) {
          const Tk = this._extensions[Xk];
          Tk.postExportTexture && Tk.postExportTexture(kk, Fk, Ik)
        }
      }
      _extensionsPostExportMeshPrimitive(kk) {
        for (const Fk of bX._ExtensionNames) {
          const Ik = this._extensions[Fk];
          Ik.postExportMeshPrimitive && Ik.postExportMeshPrimitive(kk, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const kk of bX._ExtensionNames) {
          const Fk = this._extensions[kk];
          Fk.preGenerateBinaryAsync && await Fk.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(kk) {
        for (const Fk of bX._ExtensionNames) {
          const Ik = this._extensions[Fk];
          Ik.enabled && kk(Ik)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((kk => {
          var Fk, Ik, Xk;
          kk.wasUsed && ((Fk = this._glTF).extensionsUsed || (Fk.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(kk.name) && this._glTF.extensionsUsed.push(kk.name), kk.required && ((Ik = this._glTF).extensionsRequired || (Ik.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(kk.name) && this._glTF.extensionsRequired.push(kk.name)), (Xk = this._glTF).extensions || (Xk.extensions = {}), kk.onExporting && kk.onExporting())
        }))
      }
      _loadExtensions() {
        for (const kk of bX._ExtensionNames) {
          const Fk = bX._ExtensionFactories[kk](this);
          this._extensions[kk] = Fk
        }
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wk.e.LastCreatedScene,
          Fk = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${ek.c.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new nI(this), this._extensions = {}, this._bufferManager = new XX, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !kk) throw new Error("No scene available to export");
        this._babylonScene = kk, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: kk => kk?.vG?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...Fk
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
      static RegisterExtension(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        bX.UnregisterExtension(kk) && Tk.Tools.Warn(`Extension with the name ${kk} already exists`), bX._ExtensionFactories[kk] = Fk;
        const Xk = Ik ?? 0;
        bX._ExtensionOrders[kk] = Xk;
        let ik = bX._ExtensionNames.length;
        for (let Tk = 0; Tk < bX._ExtensionNames.length; Tk++) {
          const kk = bX._ExtensionNames[Tk];
          if (Xk < bX._ExtensionOrders[kk]) {
            ik = Tk;
            break
          }
        }
        bX._ExtensionNames.splice(ik, 0, kk)
      }
      static UnregisterExtension(kk) {
        if (!bX._ExtensionFactories[kk]) return !1;
        delete bX._ExtensionFactories[kk], delete bX._ExtensionOrders[kk];
        const Fk = bX._ExtensionNames.indexOf(kk);
        return -1 !== Fk && bX._ExtensionNames.splice(Fk, 1), !0
      }
      _generateJSON(kk, Fk, Ik) {
        const Xk = {
          byteLength: kk
        };
        return Xk.byteLength && (this._glTF.buffers = [Xk]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Yw = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Xk.uri = Fk + ".bin"), Ik ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(kk) {
        const Fk = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Ik = this._generateJSON(Fk.byteLength, kk, !0),
          Xk = new Blob([Fk], {
            type: "application/octet-stream"
          }),
          Tk = kk + ".gltf",
          ik = kk + ".bin",
          yk = new qk;
        if (yk.files[Tk] = Ik, yk.files[ik] = Xk, this._imageData)
          for (const lk in this._imageData) yk.files[lk] = this._imageData[lk];
        return yk
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(kk) {
        const Fk = kk % 4;
        return 0 === Fk ? Fk : 4 - Fk
      }
      async generateGLBAsync(kk) {
        this._shouldUseGlb = !0;
        const Fk = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Ik = this._generateJSON(Fk.byteLength),
          Xk = kk + ".glb";
        let Tk, ik = Ik.length;
        if ("undefined" !== typeof TextEncoder) {
          Tk = (new TextEncoder).encode(Ik), ik = Tk.length
        }
        const yk = this._getPadding(ik),
          lk = this._getPadding(Fk.byteLength),
          ak = 28 + ik + yk + Fk.byteLength + lk,
          Lk = new FX(ak);
        if (Lk.writeUInt32(1179937895), Lk.writeUInt32(2), Lk.writeUInt32(ak), Lk.writeUInt32(ik + yk), Lk.writeUInt32(1313821514), Tk) Lk.writeTypedArray(Tk);
        else {
          const kk = "_".charCodeAt(0);
          for (let Fk = 0; Fk < ik; ++Fk) {
            const Xk = Ik.charCodeAt(Fk);
            Xk != Ik.codePointAt(Fk) ? Lk.writeUInt8(kk) : Lk.writeUInt8(Xk)
          }
        }
        for (let qk = 0; qk < yk; ++qk) Lk.writeUInt8(32);
        Lk.writeUInt32(Fk.byteLength + lk), Lk.writeUInt32(5130562), Lk.writeTypedArray(Fk);
        for (let qk = 0; qk < lk; ++qk) Lk.writeUInt8(0);
        const tk = new qk;
        return tk.files[Xk] = new Blob([Lk.getOutputData()], {
          type: "application/octet-stream"
        }), tk
      }
      _setNodeTransformation(kk, Fk, Ik) {
        if (Fk.getPivotPoint().equalsWithEpsilon(UI, uI.b) || Tk.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Fk.position.equalsWithEpsilon(UI, uI.b)) {
          const Tk = Xk.TmpVectors.Ge[0].kS(Fk.position);
          Ik && YI(Tk), kk.translation = Tk.iXk()
        }
        Fk.ci.equalsWithEpsilon(NI, uI.b) || (kk.scale = Fk.ci.iXk());
        const ik = Fk.rotationQuaternion?.clone() || Xk.Quaternion.FromEulerAngles(Fk.rotation.x, Fk.rotation.y, Fk.rotation.z);
        ik.equalsWithEpsilon(CI, uI.b) || (Ik && AI(ik), kk.rotation = ik.normalize().iXk())
      }
      _setCameraTransformation(kk, Fk, Ik) {
        const Tk = Xk.TmpVectors.Ge[0],
          ik = Xk.TmpVectors.Quaternion[0],
          yk = Fk.getWorldMatrix();
        if (Fk.parent) {
          const kk = Fk.parent.getWorldMatrix().invertToRef(Xk.TmpVectors.Matrix[0]);
          yk.multiplyToRef(kk, Xk.TmpVectors.Matrix[1]).decompose(void 0, ik, Tk)
        } else yk.decompose(void 0, ik, Tk);
        Tk.equalsWithEpsilon(UI, uI.b) || (Ik && YI(Tk), kk.translation = Tk.iXk()), Ik && AI(ik), this._babylonScene.useRightHandedSystem || gI(ik), ik.equalsWithEpsilon(CI, uI.b) || (kk.rotation = ik.iXk())
      }
      _listAvailableCameras() {
        for (const kk of this._babylonScene.cameras) {
          const Fk = {
            type: kk.mode === TX.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (kk.name && (Fk.name = kk.name), "perspective" === Fk.type) Fk.perspective = {
            aspectRatio: kk.Oe().getAspectRatio(kk),
            yfov: kk.fovMode === TX.d.FOVMODE_VERTICAL_FIXED ? kk.fov : kk.fov * kk.Oe().getAspectRatio(kk),
            znear: kk.minZ,
            zfar: kk.maxZ
          };
          else if ("orthographic" === Fk.type) {
            const Ik = kk.orthoLeft && kk.orthoRight ? .5 * (kk.orthoRight - kk.orthoLeft) : .5 * kk.Oe().getRenderWidth(),
              Xk = kk.orthoBottom && kk.orthoTop ? .5 * (kk.orthoTop - kk.orthoBottom) : .5 * kk.Oe().getRenderHeight();
            Fk.orthographic = {
              xmag: Ik,
              ymag: Xk,
              znear: kk.minZ,
              zfar: kk.maxZ
            }
          }
          this._camerasMap.set(kk, Fk)
        }
      }
      _exportAndAssignCameras() {
        const kk = Array.from(this._camerasMap.values());
        for (const Fk of kk) {
          const kk = this._nodesCameraMap.get(Fk);
          if (void 0 !== kk) {
            this._cameras.push(Fk);
            for (const Fk of kk) Fk.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const kk of this._babylonScene.skeletons) {
          if (kk.bones.length <= 0) continue;
          const Fk = {
            joints: []
          };
          this._skinMap.set(kk, Fk)
        }
      }
      _exportAndAssignSkeletons(kk) {
        for (const Ik of this._babylonScene.skeletons) {
          if (Ik.bones.length <= 0) continue;
          const ik = this._skinMap.get(Ik);
          if (void 0 == ik) continue;
          const yk = {};
          let lk = -1;
          for (let kk = 0; kk < Ik.bones.length; ++kk) {
            const Fk = Ik.bones[kk],
              Xk = Fk.getIndex() ?? kk; - 1 !== Xk && (yk[Xk] = Fk, Xk > lk && (lk = Xk))
          }
          const ak = [];
          for (let Ik = 0; Ik <= lk; ++Ik) {
            const lk = yk[Ik],
              qk = lk.getTransformNode(),
              Lk = qk ? this._nodeMap.get(qk) : void 0;
            if (void 0 === Lk) {
              Tk.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            ik.joints.push(Lk);
            const tk = lk.getAbsoluteInverseBindMatrix().clone();
            kk.has(qk) && (Fk = tk, bI.invertToRef(Xk.TmpVectors.Matrix[0]).multiplyToRef(Fk, Fk).multiplyToRef(bI, Fk)), ak.push(tk)
          }
          const qk = this._nodesSkinMap.get(ik);
          if (ik.joints.length > 0 && void 0 !== qk) {
            const kk = new Float32Array(16 * ak.length);
            ak.forEach(((Fk, Ik) => {
              kk.set(Fk.m, 16 * Ik)
            }));
            const Fk = this._bufferManager.createBufferView(kk);
            this._accessors.push(this._bufferManager.createAccessor(Fk, "MAT4", 5126, ak.length)), ik.inverseBindMatrices = this._accessors.length - 1, this._skins.push(ik);
            const Ik = this._skins.length - 1;
            for (const Xk of qk) Xk.skin = Ik
          }
        }
        var Fk
      }
      async _exportSceneAsync() {
        const kk = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const Fk = this._options.metadataSelector(this._babylonScene.metadata);
          Fk && (kk.extras = Fk)
        }
        const Fk = new Array,
          Ik = new Array,
          Xk = new Array,
          Tk = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let ik;
        if (Tk && !this._options.includeCoordinateSystemConversionNodes)
          for (const qk of this._babylonScene.animationGroups)
            for (const kk of qk.targetedAnimations) {
              const Fk = kk.target;
              Fk instanceof tk.b && !Fk.parent && (ik ?? (ik = new Set)).add(Fk)
            }
        for (const qk of this._babylonScene.rootNodes) {
          const kk = qk.animations,
            yk = !!kk && kk.length > 0 || ik?.has(qk);
          Tk && !this._options.includeCoordinateSystemConversionNodes && RI(qk, this._babylonScene.useRightHandedSystem) && !yk ? Xk.push(...qk.getChildren()) : this._babylonScene.useRightHandedSystem ? Fk.push(qk) : Ik.push(qk)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const yk = new uX(!0, !1);
        kk.nodes.push(...await this._exportNodesAsync(Ik, yk));
        const lk = new uX(!1, !1);
        kk.nodes.push(...await this._exportNodesAsync(Fk, lk));
        const ak = new uX(!1, !0);
        kk.nodes.push(...await this._exportNodesAsync(Xk, ak)), kk.nodes.length && this._scenes.push(kk), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(yk.getNodesSet()), this._babylonScene.animationGroups.length && ZX._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, yk.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(kk) {
        return this._nodeMap.get(kk)
      }
      _getAnimationIndex(kk) {
        return this._animationGroupMap.get(kk)
      }
      _getCameraIndex(kk) {
        const Fk = this._camerasMap.get(kk);
        if (!Fk) return;
        const Ik = this._cameras.indexOf(Fk);
        return Ik >= 0 ? Ik : void 0
      }
      _getMaterialIndex(kk) {
        return this._materialMap.get(kk)
      }
      _getRootIndex(kk, Fk) {
        switch (kk) {
          case "nodes":
            return this._getNodeIndex(Fk);
          case "animations":
            return this._getAnimationIndex(Fk);
          case "cameras":
            return this._getCameraIndex(Fk);
          case "materials":
            return this._getMaterialIndex(Fk);
          case "meshes": {
            const kk = this._getNodeIndex(Fk);
            return void 0 === kk ? void 0 : this._nodes[kk]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(Fk)?.index;
          case "images": {
            const kk = this._materialExporter.getTextureInfo(Fk)?.index;
            if (void 0 === kk) return;
            const Ik = this._textures[kk];
            for (const Fk of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const kk = Ik?.extensions?.[Fk]?.source;
              if ("number" === typeof kk) return kk
            }
            return Ik?.source
          }
          case "samplers": {
            const kk = this._materialExporter.getTextureInfo(Fk)?.index;
            return void 0 === kk ? void 0 : this._textures[kk]?.sampler
          }
          case "skins": {
            const kk = this._skinMap.get(Fk),
              Ik = kk ? this._skins.indexOf(kk) : -1;
            return Ik >= 0 ? Ik : void 0
          }
          case "scenes":
            return Fk === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(kk, Fk, Ik) {
        const Xk = this._nodes[kk];
        if (!Xk) throw new Error(`Cannot write ${Fk}: glTF node ${kk} does not exist.`);
        Xk.extensions || (Xk.extensions = {}), Xk.extensions[Fk] = Ik
      }
      _shouldExportNode(kk) {
        let Fk = this._shouldExportNodeMap.get(kk);
        return void 0 === Fk && (Fk = this._options.shouldExportNode(kk), this._shouldExportNodeMap.set(kk, Fk)), Fk
      }
      async _exportNodesAsync(kk, Fk) {
        const Ik = new Array;
        this._exportBuffers(kk, Fk);
        for (const Xk of kk) await this._exportNodeAsync(Xk, Ik, Fk);
        return Ik
      }
      _collectBuffers(kk, Fk, Ik, Xk, Tk) {
        if (this._shouldExportNode(kk) && kk instanceof Zk.c && kk.geometry) {
          const ik = kk.geometry.getVertexBuffers();
          if (ik)
            for (const Xk in ik) {
              if (!BI(Xk)) continue;
              const yk = ik[Xk];
              Tk.setHasVertexColorAlpha(yk, kk.hasVertexAlpha);
              const lk = yk._buffer,
                ak = Fk.get(lk) || [];
              Fk.set(lk, ak), -1 === ak.indexOf(yk) && ak.push(yk);
              const qk = Ik.get(yk) || [];
              Ik.set(yk, qk), -1 === qk.indexOf(kk) && qk.push(kk)
            }
          const yk = kk.morphTargetManager;
          if (yk)
            for (let Fk = 0; Fk < yk.numTargets; Fk++) {
              const Ik = yk.getTarget(Fk),
                Tk = Xk.get(Ik) || [];
              Xk.set(Ik, Tk), -1 === Tk.indexOf(kk) && Tk.push(kk)
            }
        }
        for (const ik of kk.getChildren()) this._collectBuffers(ik, Fk, Ik, Xk, Tk)
      }
      _exportBuffers(kk, Fk) {
        const Ik = new Map,
          Xk = new Map,
          Tk = new Map;
        for (const lk of kk) this._collectBuffers(lk, Ik, Xk, Tk, Fk);
        const ik = Array.from(Ik.keys());
        for (const lk of ik) {
          const kk = lk.getData();
          if (!kk) throw new Error("Buffer data is not available");
          const Tk = Ik.get(lk);
          if (!Tk) continue;
          const ik = Tk[0].byteStride;
          if (Tk.some((kk => kk.byteStride !== ik))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const yk = rI(kk).slice();
          for (const Fk of Tk) {
            const kk = Xk.get(Fk),
              {
                byteOffset: Ik,
                byteStride: Tk,
                componentCount: ik,
                type: lk,
                count: ak,
                normalized: qk,
                kind: tk
              } = WI(Fk, kk);
            switch (tk) {
              case Lk.g.NormalKind:
              case Lk.g.TangentKind:
                (0, GI.d)(yk, Ik, Tk, ik, lk, ak, qk, (kk => {
                  const Fk = Math.sqrt(kk[0] * kk[0] + kk[1] * kk[1] + kk[2] * kk[2]);
                  if (Fk > 0) {
                    const Ik = 1 / Fk;
                    kk[0] *= Ik, kk[1] *= Ik, kk[2] *= Ik
                  }
                }));
                break;
              case Lk.g.ColorKind: {
                const Fk = kk.filter((kk => kk.material instanceof yX.StandardMaterial || null == kk.material)).length;
                if (0 == Fk) break;
                if (Fk != kk.length) {
                  Ek.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                lk == Lk.g.UNSIGNED_BYTE && Ek.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Xk = new Hk.Color3,
                  tk = new Hk.b,
                  Zk = this._babylonScene.Oe().useExactSrgbConversions;
                (0, GI.d)(yk, Ik, Tk, ik, lk, ak, qk, (kk => {
                  3 === kk.length ? (Xk.hFk(kk, 0), Xk.toLinearSpaceToRef(Xk, Zk), Xk.toArray(kk, 0)) : (tk.hFk(kk, 0), tk.toLinearSpaceToRef(tk, Zk), tk.toArray(kk, 0))
                }))
              }
            }
          }
          if (Fk.convertToRightHanded) {
            for (const kk of Tk) {
              const Fk = Xk.get(kk),
                {
                  byteOffset: Ik,
                  byteStride: Tk,
                  componentCount: ik,
                  type: lk,
                  count: ak,
                  normalized: qk,
                  kind: tk
                } = WI(kk, Fk);
              switch (tk) {
                case Lk.g.PositionKind:
                case Lk.g.NormalKind:
                case Lk.g.TangentKind:
                  (0, GI.d)(yk, Ik, Tk, ik, lk, ak, qk, (kk => {
                    kk[0] = -kk[0]
                  }))
              }
            }
            Fk.convertedToRightHandedBuffers.set(lk, yk)
          }
          const ak = this._bufferManager.createBufferView(yk, ik);
          Fk.setVertexBufferView(lk, ak);
          const qk = new Map;
          for (const Fk of Tk) {
            const kk = Xk.get(Fk),
              {
                kind: Ik,
                totalVertices: Tk
              } = WI(Fk, kk);
            switch (Ik) {
              case Lk.g.MatricesIndicesKind:
              case Lk.g.MatricesIndicesExtraKind:
                if (Fk.type == Lk.g.FLOAT) {
                  const kk = Fk.getFloatData(Tk);
                  null !== kk && qk.set(Fk, kk)
                }
            }
          }
          0 !== qk.size && Ek.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const tk = Array.from(qk.keys());
          for (const Ik of tk) {
            const kk = qk.get(Ik);
            if (!kk) continue;
            const Xk = kk.some((kk => kk >= 256)),
              Tk = new(Xk ? Uint16Array : Uint8Array)(kk.length);
            for (let Fk = 0; Fk < kk.length; Fk++) Tk[Fk] = kk[Fk];
            const ik = this._bufferManager.createBufferView(Tk, 4 * (Xk ? 2 : 1));
            Fk.setRemappedBufferView(lk, Ik, ik)
          }
        }
        const yk = Array.from(Tk.keys());
        for (const lk of yk) {
          const kk = Tk.get(lk);
          if (!kk) continue;
          const Ik = jX(lk, kk[0], this._bufferManager, this._bufferViews, this._accessors, Fk.convertToRightHanded);
          for (const Xk of kk) Fk.bindMorphDataToMesh(Xk, Ik)
        }
      }
      async _exportNodeAsync(kk, Fk, Ik) {
        let Xk = this._nodeMap.get(kk);
        if (void 0 !== Xk) return void(Fk.includes(Xk) || Fk.push(Xk));
        const Tk = await this._createNodeAsync(kk, Ik);
        if (Tk) {
          Xk = this._nodes.length, this._nodes.push(Tk), this._nodeMap.set(kk, Xk), Ik.pushExportedNode(kk), Fk.push(Xk);
          const ik = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            yk = [];
          this._babylonScene.animationGroups.length || (ZX._CreateMorphTargetAnimationFromMorphTargetAnimations(kk, ik, yk, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Ik.convertToRightHanded, this._options.shouldExportAnimation), kk.animations.length && ZX._CreateNodeAnimationFromNodeAnimations(kk, ik, yk, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Ik.convertToRightHanded, this._options.shouldExportAnimation)), ik.channels.length && ik.samplers.length && this._animations.push(ik), yk.forEach((kk => {
            kk.channels.length && kk.samplers.length && this._animations.push(kk)
          }))
        }
        const ik = Tk ? [] : Fk;
        for (const yk of kk.getChildren()) await this._exportNodeAsync(yk, ik, Ik);
        Tk && ik.length && (Tk.children = ik)
      }
      async _createNodeAsync(kk, Fk) {
        if (!this._shouldExportNode(kk)) return null;
        const Ik = {};
        if (kk.name && (Ik.name = kk.name), kk.metadata) {
          const Fk = this._options.metadataSelector(kk.metadata);
          Fk && (Ik.extras = Fk)
        }
        if (kk instanceof tk.b && (this._setNodeTransformation(Ik, kk, Fk.convertToRightHanded), kk instanceof Zk.c)) {
          const Xk = kk instanceof jk.c ? kk.DXk : kk;
          if (Xk.lK && Xk.lK.length > 0 && (Ik.mesh = await this._exportMeshAsync(Xk, Fk)), kk.skeleton) {
            const Fk = this._skinMap.get(kk.skeleton);
            void 0 !== Fk && (void 0 === this._nodesSkinMap.get(Fk) && this._nodesSkinMap.set(Fk, []), this._nodesSkinMap.get(Fk)?.push(Ik))
          }
        }
        if (kk instanceof pI.e) {
          const Xk = this._camerasMap.get(kk);
          if (Xk) {
            void 0 === this._nodesCameraMap.get(Xk) && this._nodesCameraMap.set(Xk, []), this._setCameraTransformation(Ik, kk, Fk.convertToRightHanded);
            const Tk = kk.parent;
            if (null !== Tk && hI(kk, Tk)) {
              const kk = this._nodeMap.get(Tk);
              if (void 0 !== kk) {
                const Fk = this._nodes[kk];
                return mI(Ik, Fk), this._nodesCameraMap.get(Xk)?.push(Fk), null
              }
            }
            this._nodesCameraMap.get(Xk)?.push(Ik)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", Ik, kk, this._nodeMap, Fk.convertToRightHanded) ? Ik : (Ek.e.Warn(`Not exporting node ${kk.name}`), null)
      }
      _exportIndices(kk, Fk, Ik, Xk, Tk, yk, lk, ak, qk) {
        let Lk = null;
        qk.mode = function(kk) {
          switch (kk) {
            case ik.c.TriangleFillMode:
              return 4;
            case ik.c.TriangleStripDrawMode:
              return 5;
            case ik.c.TriangleFanDrawMode:
              return 6;
            case ik.c.PointListDrawMode:
            case ik.c.PointFillMode:
              return 0;
            case ik.c.LineLoopDrawMode:
              return 2;
            case ik.c.LineListDrawMode:
              return 1;
            case ik.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${kk}`)
        }(yk);
        const tk = lk !== ik.c.CounterClockWiseSideOrientation && function(kk) {
          switch (kk) {
            case ik.c.TriangleFillMode:
            case ik.c.TriangleStripDrawMode:
            case ik.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(yk);
        if (tk) {
          if (yk === ik.c.TriangleStripDrawMode || yk === ik.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const lk = Fk ? new Uint32Array(Xk) : new Uint16Array(Xk);
          if (kk)
            for (let Fk = 0; Fk + 2 < Xk; Fk += 3) lk[Fk] = kk[Ik + Fk] + Tk, lk[Fk + 1] = kk[Ik + Fk + 2] + Tk, lk[Fk + 2] = kk[Ik + Fk + 1] + Tk;
          else
            for (let kk = 0; kk + 2 < Xk; kk += 3) lk[kk] = kk, lk[kk + 1] = kk + 2, lk[kk + 2] = kk + 1;
          Lk = lk
        } else if (kk && 0 !== Tk) {
          const ik = Fk ? new Uint32Array(Xk) : new Uint16Array(Xk);
          for (let Fk = 0; Fk < Xk; Fk++) ik[Fk] = kk[Ik + Fk] + Tk;
          Lk = ik
        } else kk && (Lk = function(kk, Fk, Ik, Xk) {
          let Tk = kk;
          return 0 === Fk && Ik === kk.length || (Tk = Array.isArray(kk) ? kk.slice(Fk, Fk + Ik) : kk.subarray(Fk, Fk + Ik)), Tk instanceof Int32Array ? new Uint32Array(Tk.buffer, Tk.byteOffset, Tk.length) : Array.isArray(Tk) ? Xk ? new Uint32Array(Tk) : new Uint16Array(Tk) : Tk
        }(kk, Ik, Xk, Fk));
        if (Lk) {
          let ik = ak.getIndicesAccessor(kk, Ik, Xk, Tk, tk);
          if (void 0 === ik) {
            const yk = this._bufferManager.createBufferView(Lk),
              lk = Fk ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(yk, "SCALAR", lk, Xk, 0)), ik = this._accessors.length - 1, ak.setIndicesAccessor(kk, Ik, Xk, Tk, tk, ik)
          }
          qk.indices = ik
        }
      }
      _exportVertexBuffer(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = kk.getKind();
        if (!BI(yk)) return;
        if (yk.startsWith("uv") && !this._options.exportUnusedUVs && (!Fk || !this._materialNeedsUVsSet.has(Fk))) return;
        let lk = Tk.getVertexAccessor(kk, Ik, Xk);
        if (void 0 === lk) {
          const Fk = Tk.convertedToRightHandedBuffers.get(kk._buffer) || kk._buffer.getData(),
            ik = yk === Lk.g.PositionKind ? function(kk, Fk, Ik, Xk) {
              const {
                byteOffset: Tk,
                byteStride: ik,
                type: yk,
                normalized: lk
              } = Fk, ak = Fk.getSize(), qk = new Array(ak).fill(1 / 0), Lk = new Array(ak).fill(-1 / 0);
              return (0, GI.d)(kk, Tk + Ik * ik, ik, ak, yk, Xk * ak, lk, (kk => {
                for (let Fk = 0; Fk < ak; Fk++) qk[Fk] = Math.min(qk[Fk], kk[Fk]), Lk[Fk] = Math.max(Lk[Fk], kk[Fk])
              })), {
                min: qk,
                max: Lk
              }
            }(Fk, kk, Ik, Xk) : void 0,
            ak = (yk === Lk.g.MatricesIndicesKind || yk === Lk.g.MatricesIndicesExtraKind) && kk.type === Lk.g.FLOAT,
            qk = ak ? Lk.g.UNSIGNED_BYTE : kk.type,
            tk = ak ? void 0 : kk.normalized,
            Zk = ak ? Tk.getRemappedBufferView(kk._buffer, kk) : Tk.getVertexBufferView(kk._buffer),
            jk = kk.byteOffset + Ik * kk.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(Zk, function(kk, Fk) {
            if (kk == Lk.g.ColorKind) return Fk ? "VEC4" : "VEC3";
            switch (kk) {
              case Lk.g.PositionKind:
              case Lk.g.NormalKind:
                return "VEC3";
              case Lk.g.TangentKind:
              case Lk.g.MatricesIndicesKind:
              case Lk.g.MatricesIndicesExtraKind:
              case Lk.g.MatricesWeightsKind:
              case Lk.g.MatricesWeightsExtraKind:
                return "VEC4";
              case Lk.g.UVKind:
              case Lk.g.UV2Kind:
              case Lk.g.UV3Kind:
              case Lk.g.UV4Kind:
              case Lk.g.UV5Kind:
              case Lk.g.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${kk}`)
          }(yk, Tk.hasVertexColorAlpha(kk)), qk, Xk, jk, ik, tk)), lk = this._accessors.length - 1, Tk.setVertexAccessor(kk, Ik, Xk, lk)
        }
        ik.attributes[function(kk) {
          switch (kk) {
            case Lk.g.PositionKind:
              return "POSITION";
            case Lk.g.NormalKind:
              return "NORMAL";
            case Lk.g.TangentKind:
              return "TANGENT";
            case Lk.g.ColorKind:
              return "COLOR_0";
            case Lk.g.UVKind:
              return "TEXCOORD_0";
            case Lk.g.UV2Kind:
              return "TEXCOORD_1";
            case Lk.g.UV3Kind:
              return "TEXCOORD_2";
            case Lk.g.UV4Kind:
              return "TEXCOORD_3";
            case Lk.g.UV5Kind:
              return "TEXCOORD_4";
            case Lk.g.UV6Kind:
              return "TEXCOORD_5";
            case Lk.g.MatricesIndicesKind:
              return "JOINTS_0";
            case Lk.g.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case Lk.g.MatricesWeightsKind:
              return "WEIGHTS_0";
            case Lk.g.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${kk}`)
        }(yk)] = lk
      }
      async _exportMaterialAsync(kk, Fk, Ik, Xk) {
        let Tk = this._materialMap.get(kk);
        if (void 0 === Tk) {
          const Xk = Fk && Object.keys(Fk).some((kk => kk.startsWith("uv")));
          if ((kk = kk instanceof iX.c ? kk.W8[Ik.materialIndex] : kk) instanceof VF) Tk = await this._materialExporter.exportPBRMaterialAsync(kk, Xk);
          else if (kk instanceof yX.StandardMaterial) Tk = await this._materialExporter.exportStandardMaterialAsync(kk, Xk);
          else {
            if (!(kk instanceof MF)) return void Ek.e.Warn(`Unsupported material '${kk.name}' with type ${kk.getClassName()}`);
            Tk = await this._materialExporter.exportOpenPBRMaterialAsync(kk, Xk)
          }
          this._materialMap.set(kk, Tk)
        }
        Xk.material = Tk
      }
      async _exportMeshAsync(kk, Fk) {
        let Ik = Fk.getMesh(kk);
        if (void 0 !== Ik) return Ik;
        const Xk = {
          primitives: []
        };
        Ik = this._meshes.length, this._meshes.push(Xk), Fk.setMesh(kk, Ik);
        const Tk = kk.isUnIndexed ? null : kk.yXk(),
          yk = kk.geometry?.getVertexBuffers(),
          lk = Fk.getMorphTargetsFromMesh(kk),
          ak = kk instanceof eX.d,
          qk = kk instanceof pX,
          Lk = kk.lK;
        if (yk && Lk && Lk.length > 0)
          for (const tk of Lk) {
            const Ik = {
                attributes: {}
              },
              Lk = tk.Ue() || this._babylonScene.defaultMaterial;
            if (qk) {
              const Fk = {
                  name: Lk.name
                },
                Xk = kk,
                Tk = Hk.Color3.White(),
                ik = Xk.material?.alpha ?? 1,
                yk = Xk.greasedLineMaterial?.color ?? Tk;
              (!yk.equalsWithEpsilon(Tk, uI.b) || ik < 1) && (Fk.pbrMetallicRoughness = {
                baseColorFactor: [...yk.iXk(), ik]
              }), this._materials.push(Fk), Ik.material = this._materials.length - 1
            } else if (ak) {
              const Fk = {
                  name: Lk.name
                },
                Xk = kk;
              (!Xk.color.equalsWithEpsilon(Hk.Color3.White(), uI.b) || Xk.alpha < 1) && (Fk.pbrMetallicRoughness = {
                baseColorFactor: [...Xk.color.iXk(), Xk.alpha]
              }), this._materials.push(Fk), Ik.material = this._materials.length - 1
            } else await this._exportMaterialAsync(Lk, yk, tk, Ik);
            const Zk = ak || qk ? ik.c.LineListDrawMode : kk.overrideRenderingFillMode ?? Lk.fillMode;
            let jk = Lk._getEffectiveOrientation(kk);
            Fk.wasAddedByNoopNode && !kk.mG().useRightHandedSystem && (jk = jk === ik.c.ClockWiseSideOrientation ? ik.c.CounterClockWiseSideOrientation : ik.c.ClockWiseSideOrientation), this._exportIndices(Tk, Tk ? (0, GI.b)(Tk, tk.indexCount, tk.indexStart, tk.verticesStart) : tk.verticesCount > 65535, Tk ? tk.indexStart : tk.verticesStart, Tk ? tk.indexCount : tk.verticesCount, -tk.verticesStart, Zk, jk, Fk, Ik);
            for (const kk of Object.values(yk)) this._exportVertexBuffer(kk, Lk, tk.verticesStart, tk.verticesCount, Fk, Ik);
            if (lk) {
              Ik.targets = [];
              for (const kk of lk) Ik.targets.push(kk.attributes)
            }
            Xk.primitives.push(Ik), this._extensionsPostExportMeshPrimitive(Ik)
          }
        if (lk) {
          Xk.weights = [], Xk.extras || (Xk.extras = {}), Xk.extras.targetNames = [];
          for (const kk of lk) Xk.weights.push(kk.influence), Xk.extras.targetNames.push(kk.name)
        }
        return Ik
      }
    }
    bX._ExtensionNames = new Array, bX._ExtensionFactories = {}, bX._ExtensionOrders = {};
    class RX {
      static async GLTFAsync(kk, Fk, Ik) {
        Ik && Ik.exportWithoutWaitingForScene || await kk.whenReadyAsync();
        const Xk = new bX(kk, Ik),
          Tk = await Xk.generateGLTFAsync(Fk.replace(/\.[^/.]+$/, ""));
        return Xk.dispose(), Tk
      }
      static async GLBAsync(kk, Fk, Ik) {
        Ik && Ik.exportWithoutWaitingForScene || await kk.whenReadyAsync();
        const Xk = new bX(kk, Ik),
          Tk = await Xk.generateGLBAsync(Fk.replace(/\.[^/.]+$/, ""));
        return Xk.dispose(), Tk
      }
    }
    const UX = "EXT_mesh_gpu_instancing";

    function CX(kk, Fk) {
      const Ik = new Float32Array(3 * Fk);
      for (let Xk = 0; Xk < Fk; Xk++) Ik[3 * Xk + 0] = kk[4 * Xk + 0], Ik[3 * Xk + 1] = kk[4 * Xk + 1], Ik[3 * Xk + 2] = kk[4 * Xk + 2];
      return Ik
    }
    class NX {
      constructor(kk) {
        this.name = UX, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(kk, Fk, Ik, Xk, Tk, ik) {
        return await new Promise((kk => {
          if (Fk && Ik instanceof VX.b && Ik.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const kk = Nk.t.Zero(),
              Xk = Nk.f.Identity(),
              yk = Nk.t.One(),
              lk = Ik.thinInstanceGetWorldMatrices(),
              ak = Nk.l.Ge[2],
              qk = Nk.l.Quaternion[1],
              Lk = Nk.l.Ge[3];
            let tk = !1,
              Zk = !1,
              jk = !1;
            const ek = new Float32Array(3 * Ik.M6),
              wk = new Float32Array(4 * Ik.M6),
              Hk = new Float32Array(3 * Ik.M6);
            let Jk = 0;
            for (const Fk of lk) Fk.decompose(Lk, qk, ak), Tk && (YI(ak), AI(qk)), ek.set(ak.iXk(), 3 * Jk), wk.set(qk.normalize().iXk(), 4 * Jk), Hk.set(Lk.iXk(), 3 * Jk), tk = tk || !ak.equalsWithEpsilon(kk), Zk = Zk || !qk.equalsWithEpsilon(Xk), jk = jk || !Lk.equalsWithEpsilon(yk), Jk++;
            const xk = {
              attributes: {}
            };
            tk && (xk.attributes.TRANSLATION = this._buildAccessor(ek, "VEC3", Ik.M6, ik)), Zk && (xk.attributes.ROTATION = this._buildAccessor(wk, "VEC4", Ik.M6, ik)), jk && (xk.attributes.SCALE = this._buildAccessor(Hk, "VEC3", Ik.M6, ik));
            let Pk = Ik._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Pk) {
              const kk = Ik.M6,
                Fk = "VEC3";
              Ik.hasVertexAlpha && Pk.length === 4 * kk ? (this._instanceColorWarned || (Ek.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Pk = CX(Pk, kk)) : Pk.length === 4 * kk && (Pk = CX(Pk, kk)), Pk.length === 3 * kk && (xk.attributes._COLOR_0 = this._buildAccessor(Pk, Fk, kk, ik))
            }
            Fk.extensions = Fk.extensions || {}, Fk.extensions[UX] = xk
          }
          kk(Fk)
        }))
      }
      _buildAccessor(kk, Fk, Ik, Xk) {
        const Tk = Xk.createBufferView(kk),
          ik = Xk.createAccessor(Tk, Fk, 5126, Ik);
        return this._exporter._accessors.push(ik), this._exporter._accessors.length - 1
      }
    }
    let cX = !1;

    function WX() {
      cX || (cX = !0, bX.RegisterExtension(UX, (kk => new NX(kk))))
    }
    Ik(40498);
    WX();
    var fX = Ik(41846);

    function BX(kk, Fk, Ik, Xk) {
      const Tk = kk;
      let ik = null,
        yk = null,
        lk = null,
        ak = null;
      const qk = {},
        Lk = Fk.find((kk => "POSITION" === kk.dracoName));
      if (!Lk) throw new Error("Draco: Missing position attribute for encoding.");
      if (!Ik) {
        const kk = Lk.data.length / Lk.size;
        Ik = new(kk > 65535 ? Uint32Array : Uint16Array)(kk);
        for (let Fk = 0; Fk < kk; Fk++) Ik[Fk] = Fk
      }
      try {
        ik = new Tk.Encoder, yk = new Tk.MeshBuilder, lk = new Tk.Mesh, yk.AddFacesToMesh(lk, Ik.length / 3, Ik);
        const kk = new Map([
          [Float32Array, (kk, Fk, Ik, Xk, Tk, ik) => kk.AddFloatAttribute(Fk, Ik, Xk, Tk, ik)],
          [Uint32Array, (kk, Fk, Ik, Xk, Tk, ik) => kk.AddUInt32Attribute(Fk, Ik, Xk, Tk, ik)],
          [Uint16Array, (kk, Fk, Ik, Xk, Tk, ik) => kk.AddUInt16Attribute(Fk, Ik, Xk, Tk, ik)],
          [Uint8Array, (kk, Fk, Ik, Xk, Tk, ik) => kk.AddUInt8Attribute(Fk, Ik, Xk, Tk, ik)],
          [Int32Array, (kk, Fk, Ik, Xk, Tk, ik) => kk.AddInt32Attribute(Fk, Ik, Xk, Tk, ik)],
          [Int16Array, (kk, Fk, Ik, Xk, Tk, ik) => kk.AddInt16Attribute(Fk, Ik, Xk, Tk, ik)],
          [Int8Array, (kk, Fk, Ik, Xk, Tk, ik) => kk.AddInt8Attribute(Fk, Ik, Xk, Tk, ik)]
        ]);
        for (const Ik of Fk) {
          Ik.data instanceof Uint8ClampedArray && (Ik.data = new Uint8Array(Ik.data));
          const Fk = kk.get(Ik.data.constructor),
            ak = Ik.data.length / Ik.size;
          qk[Ik.kind] = Fk(yk, lk, Tk[Ik.dracoName], ak, Ik.size, Ik.data), Xk.quantizationBits && Xk.quantizationBits[Ik.dracoName] && ik.SetAttributeQuantization(Tk[Ik.dracoName], Xk.quantizationBits[Ik.dracoName])
        }
        Xk.method && ik.SetEncodingMethod(Tk[Xk.method]), void 0 !== Xk.encodeSpeed && void 0 !== Xk.decodeSpeed && ik.SetSpeedOptions(Xk.encodeSpeed, Xk.decodeSpeed), ak = new Tk.DracoInt8Array;
        const Lk = ik.EncodeMeshToDracoBuffer(lk, ak);
        if (Lk <= 0) throw new Error("Draco: Failed to encode.");
        const tk = new Int8Array(Lk);
        for (let Fk = 0; Fk < Lk; Fk++) tk[Fk] = ak.GetValue(Fk);
        return {
          data: tk,
          attributeIds: qk
        }
      } finally {
        lk && Tk.destroy(lk), yk && Tk.destroy(yk), ik && Tk.destroy(ik), ak && Tk.destroy(ak)
      }
    }

    function dX() {
      let kk;
      onmessage = Fk => {
        const Ik = Fk.data;
        switch (Ik.id) {
          case "init": {
            Ik.url && importScripts(Ik.url);
            const Fk = Ik.wasmBinary ? {
              wasmBinary: Ik.wasmBinary
            } : {};
            kk = DracoEncoderModule(Fk), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!kk) throw new Error("Draco: Encoder module is not available.");
            kk.then((kk => {
              const Fk = BX(kk, Ik.attributes, Ik.indices, Ik.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: Fk
              }, Fk ? [Fk.data.buffer] : void 0)
            })).catch((kk => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: kk.message
              })
            }))
        }
      }
    }
    class YX {
      constructor(kk) {
        if (kk.workerPool) return void(this._workerPoolPromise = Promise.resolve(kk.workerPool));
        const Fk = kk.wasmBinary,
          Ik = kk.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Xk = Ik && "function" === typeof Worker && "function" === typeof URL,
          Tk = Xk || !kk.jsModule,
          ik = kk.wasmUrl && kk.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Tk ? SF.h.GetBabylonScriptURL(kk.wasmUrl, !0) : "",
            wasmBinaryPromise: Fk ? Promise.resolve(Fk) : SF.h.LoadFileAsync(SF.h.GetBabylonScriptURL(kk.wasmBinaryUrl, !0))
          } : {
            url: Tk ? SF.h.GetBabylonScriptURL(kk.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Xk ? this._workerPoolPromise = ik.wasmBinaryPromise.then((kk => {
          const Fk = this._getWorkerContent(),
            Xk = URL.createObjectURL(new Blob([Fk], {
              type: "application/javascript"
            }));
          return new fX.b(Ik, (() => async function(kk, Fk, Ik) {
            return await new Promise(((Xk, Tk) => {
              const ik = Fk => {
                  kk.removeEventListener("error", ik), kk.removeEventListener("message", yk), Tk(Fk)
                },
                yk = Fk => {
                  "initDone" === Fk.data.id && (kk.removeEventListener("error", ik), kk.removeEventListener("message", yk), Xk(kk))
                };
              if (kk.addEventListener("error", ik), kk.addEventListener("message", yk), Fk) {
                const Xk = Fk.slice(0);
                kk.postMessage({
                  id: "init",
                  url: Ik,
                  wasmBinary: Xk
                }, [Xk])
              } else kk.postMessage({
                id: "init",
                url: Ik
              })
            }))
          }(new Worker(Xk), kk, ik.url)))
        })) : this._modulePromise = ik.wasmBinaryPromise.then((async Fk => {
          if (!this._isModuleAvailable() && !kk.jsModule) {
            if (!ik.url) throw new Error("Draco codec module is not available");
            await SF.h.LoadBabylonScriptAsync(ik.url)
          }
          return await this._createModuleAsync(Fk, kk.jsModule)
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

    function AX() {
      const kk = kk => !!kk && "object" === typeof kk;
      for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
      return Ik.reduce(((Fk, Ik) => {
        const Xk = Object.keys(Ik);
        for (const Tk of Xk) {
          const Xk = Fk[Tk],
            ik = Ik[Tk];
          Array.isArray(Xk) && Array.isArray(ik) ? Fk[Tk] = Xk.concat(ik) : kk(Xk) && kk(ik) ? Fk[Tk] = AX(Xk, ik) : Fk[Tk] = ik
        }
        return Fk
      }), {})
    }

    function gX(kk) {
      return kk === ck.l.PositionKind ? "POSITION" : kk === ck.l.NormalKind ? "NORMAL" : kk === ck.l.ColorKind ? "COLOR" : kk.startsWith(ck.l.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const mX = {
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
    class hX extends YX {
      static get DefaultAvailable() {
        return !!((kk = hX.DefaultConfiguration).wasmUrl && (kk.wasmBinary || kk.wasmBinaryUrl) && "object" === typeof WebAssembly || kk.fallbackUrl);
        var kk
      }
      static get Default() {
        return hX._Default ?? (hX._Default = new hX), hX._Default
      }
      static ResetDefault(kk) {
        hX._Default && (kk || hX._Default.dispose(), hX._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(kk, Fk) {
        return {
          module: await (Fk || DracoEncoderModule)({
            wasmBinary: kk
          })
        }
      }
      _getWorkerContent() {
        return `${BX}(${dX})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hX.DefaultConfiguration)
      }
      async _encodeAsync(kk, Fk, Ik) {
        const Xk = Ik ? AX(mX, Ik) : mX;
        if (this._workerPoolPromise) {
          const Ik = await this._workerPoolPromise;
          return await new Promise(((Tk, ik) => {
            Ik.push(((Ik, yk) => {
              const lk = kk => {
                  Ik.removeEventListener("error", lk), Ik.removeEventListener("message", ak), ik(kk), yk()
                },
                ak = kk => {
                  "encodeMeshSuccess" === kk.data.id ? (Ik.removeEventListener("error", lk), Ik.removeEventListener("message", ak), Tk(kk.data.encodedMeshData), yk()) : "encodeMeshError" === kk.data.id && (Ik.removeEventListener("error", lk), Ik.removeEventListener("message", ak), ik(new Error(kk.data.errorMessage)), yk())
                };
              Ik.addEventListener("error", lk), Ik.addEventListener("message", ak);
              const qk = [];
              for (const Fk of kk) qk.push(Fk.data.buffer);
              Fk && qk.push(Fk.buffer), Ik.postMessage({
                id: "encodeMesh",
                attributes: kk,
                indices: Fk,
                options: Xk
              }, qk)
            }))
          }))
        }
        if (this._modulePromise) {
          return BX((await this._modulePromise).module, kk, Fk, Xk)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(kk, Fk) {
        if (0 == kk.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        kk instanceof VX.b && kk.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === Fk?.method && (Ek.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), Fk.method = "MESH_SEQUENTIAL_ENCODING");
        const Ik = function(kk) {
            let Fk = kk.yXk(void 0, !0);
            return !Fk || Fk instanceof Uint32Array || Fk instanceof Uint16Array || (Fk = ((0, GI.b)(Fk, Fk.length) ? Uint32Array : Uint16Array).from(Fk)), Fk
          }(kk),
          Xk = function(kk, Fk) {
            const Ik = [];
            for (const Xk of kk.getVerticesDataKinds()) {
              if (Fk?.includes(Xk)) {
                if (Xk === ck.l.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Tk = kk.getVertexBuffer(Xk),
                ik = Tk.getSize(),
                yk = (0, GI.l)(Tk.getData(), ik, Tk.type, Tk.byteOffset, Tk.byteStride, kk.getTotalVertices(), !0);
              Ik.push({
                kind: Xk,
                dracoName: gX(Xk),
                size: ik,
                data: yk
              })
            }
            return Ik
          }(kk, Fk?.excludedAttributes);
        return await this._encodeAsync(Xk, Ik, Fk)
      }
    }
    hX.DefaultConfiguration = {
      wasmUrl: `${SF.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${SF.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${SF.h._DefaultCdnUrl}/draco_encoder.js`
    }, hX._Default = null;
    const rX = "KHR_draco_mesh_compression";
    class DX {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(kk) {
        this.name = rX, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === kk.options.meshCompressionMethod && hX.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(kk, Fk, Ik) {
        if (!this.enabled) return;
        if (4 !== kk.mode && 5 !== kk.mode) return void Ek.e.Warn("Cannot compress primitive with mode " + kk.mode + ".");
        const Xk = [],
          Tk = [];
        let ik = null;
        if (void 0 !== kk.indices) {
          const yk = Ik[kk.indices],
            lk = Fk.getBufferView(yk);
          ik = Fk.getData(lk).slice(), Xk.push(lk), Tk.push(yk)
        }
        const yk = [];
        for (const [Lk, tk] of Object.entries(kk.attributes)) {
          const kk = Ik[tk],
            ik = Fk.getBufferView(kk),
            ak = fI(kk.type),
            qk = (0, GI.l)(Fk.getData(ik), ak, kk.componentType, kk.byteOffset || 0, ik.byteStride || (0, GI.k)(kk.componentType) * ak, kk.count, !0);
          yk.push({
            kind: Lk,
            dracoName: (lk = Lk, "POSITION" === lk ? "POSITION" : "NORMAL" === lk ? "NORMAL" : lk.startsWith("COLOR") ? "COLOR" : lk.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: fI(kk.type),
            data: qk
          }), Xk.push(ik), Tk.push(kk)
        }
        var lk;
        const ak = {
            method: kk.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          qk = hX.Default._encodeAsync(yk, ik, ak).then((Ik => {
            const ik = {
                bufferView: -1,
                attributes: Ik.attributeIds
              },
              yk = Fk.createBufferView(Ik.data);
            Fk.setBufferView(ik, yk);
            for (const kk of Xk) this._bufferViewsUsed.add(kk);
            for (const kk of Tk) this._accessorsUsed.add(kk);
            kk.extensions || (kk.extensions = {}), kk.extensions[rX] = ik
          })).catch((kk => {
            Ek.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + kk.message)
          }));
        this._encodePromises.push(qk), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(kk) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((Fk => {
          kk.getPropertiesWithBufferView(Fk).every((kk => this._accessorsUsed.has(kk))) && kk.removeBufferView(Fk)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let MX = !1;

    function kT() {
      MX || (MX = !0, bX.RegisterExtension(rX, (kk => new DX(kk))))
    }
    kT();
    var FT = Ik(41578);
    const IT = "KHR_lights_punctual",
      XT = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      TT = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      iT = Nk.t.Backward();
    class yT {
      constructor(kk) {
        this.name = IT, this.enabled = !0, this.required = !1, this._exporter = kk
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[IT] = this._lights
      }
      async postExportNodeAsync(kk, Fk, Ik, Xk, Tk) {
        return await new Promise((ik => {
          if (!(Ik instanceof tX.b)) return void ik(Fk);
          const yk = Ik.getTypeID() == tX.b.LIGHTTYPEID_POINTLIGHT ? "point" : Ik.getTypeID() == tX.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : Ik.getTypeID() == tX.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!yk || !(Ik instanceof FT.d)) return Ek.e.Warn(`${kk}: Light ${Ik.name} is not supported in ${IT}`), void ik(Fk);
          if (Ik.falloffType !== tX.b.FALLOFF_GLTF && Ek.e.Warn(`${kk}: Light falloff for ${Ik.name} does not match the ${IT} specification!`), !Ik.position.Ryk(0, 0, 0)) {
            const kk = Nk.l.Ge[0].kS(Ik.position);
            Tk && YI(kk), Fk.translation = kk.iXk()
          }
          if ("point" !== yk) {
            const kk = Ik.direction.normalizeToRef(Nk.l.Ge[0]);
            Tk && YI(kk);
            const Xk = Nk.f.FromUnitVectorsToRef(iT, kk, Nk.l.Quaternion[0]);
            Nk.f.IsIdentity(Xk) || (Fk.rotation = Xk.iXk())
          }
          const lk = {
            type: yk,
            name: Ik.name,
            color: Ik.diffuse.iXk(),
            intensity: Ik.intensity,
            range: Ik.range
          };
          if (DI(lk, XT), "spot" === yk) {
            const kk = Ik;
            lk.spot = {
              innerConeAngle: kk.innerAngle / 2,
              outerConeAngle: kk.angle / 2
            }, DI(lk.spot, TT)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(lk);
          const ak = {
              light: this._lights.lights.length - 1
            },
            qk = Ik.parent;
          if (qk && hI(Ik, qk)) {
            const kk = Xk.get(qk);
            if (kk) {
              const Ik = this._exporter._nodes[kk];
              return mI(Fk, Ik), Ik.extensions || (Ik.extensions = {}), Ik.extensions[IT] = ak, void ik(null)
            }
          }
          Fk.extensions || (Fk.extensions = {}), Fk.extensions[IT] = ak, ik(Fk)
        }))
      }
    }
    let lT = !1;

    function aT() {
      lT || (lT = !0, bX.RegisterExtension(IT, (kk => new yT(kk))))
    }
    aT();
    const qT = "KHR_interactivity";
    class LT {
      constructor(kk) {
        this._exporter = kk, this.name = qT, this.enabled = !!kk.options.khrInteractivity, this.required = kk.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var kk, Fk, Ik;
        const Xk = this._exporter.options.khrInteractivity;
        if (!Xk) return;
        const Tk = Xk.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: kk => this._exporter._getNodeIndex(kk),
          getAnimationIndex: kk => this._exporter._getAnimationIndex(kk),
          getCameraIndex: kk => this._exporter._getCameraIndex(kk),
          getMaterialIndex: kk => this._exporter._getMaterialIndex(kk),
          getRootIndex: (kk, Fk) => this._exporter._getRootIndex(kk, Fk),
          setNodeExtension: (kk, Fk, Ik) => this._exporter._setNodeExtension(kk, Fk, Ik)
        });
        this._exporter._glTF.extensions[qT] = Tk;
        for (const ik of Xk.additionalExtensionsUsed)(kk = this._exporter._glTF).extensionsUsed || (kk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(ik) && this._exporter._glTF.extensionsUsed.push(ik);
        for (const ik of Xk.additionalExtensionsRequired)(Fk = this._exporter._glTF).extensionsUsed || (Fk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(ik) && this._exporter._glTF.extensionsUsed.push(ik), (Ik = this._exporter._glTF).extensionsRequired || (Ik.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(ik) && this._exporter._glTF.extensionsRequired.push(ik)
      }
    }
    let tT = !1;

    function ZT() {
      tT || (tT = !0, bX.RegisterExtension(qT, (kk => new LT(kk)), 200))
    }
    ZT();
    const jT = "EXT_lights_area",
      eT = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      wT = {
        aspect: 1
      },
      HT = Nk.t.Backward();
    class JT {
      constructor(kk) {
        this.name = jT, this.enabled = !0, this.required = !1, this._exporter = kk
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[jT] = this._lights
      }
      async postExportNodeAsync(kk, Fk, Ik, Xk, Tk) {
        return await new Promise((ik => {
          if (!(Ik instanceof tX.b)) return void ik(Fk);
          const yk = Ik.getTypeID() == tX.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!yk) return Ek.e.Warn(`${kk}: Light ${Ik.name} is not supported in ${jT}`), void ik(Fk);
          const lk = Ik;
          if (lk.falloffType !== tX.b.FALLOFF_GLTF && Ek.e.Warn(`${kk}: Light falloff for ${Ik.name} does not match the ${jT} specification!`), !lk.position.Ryk(0, 0, 0)) {
            const kk = Nk.l.Ge[0].kS(lk.position);
            Tk && YI(kk), Fk.translation = kk.iXk()
          }
          const ak = Nk.t.Forward();
          Tk && YI(ak);
          const qk = Nk.f.FromUnitVectorsToRef(HT, ak, Nk.l.Quaternion[0]);
          Nk.f.IsIdentity(qk) || (Fk.rotation = qk.iXk());
          const Lk = {
            type: yk,
            name: lk.name,
            color: lk.diffuse.iXk(),
            intensity: lk.intensity,
            size: lk.height,
            rect: {
              aspect: lk.width / lk.height
            }
          };
          DI(Lk, eT), Lk.rect && DI(Lk.rect, wT), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Lk);
          const tk = {
              light: this._lights.lights.length - 1
            },
            Zk = Ik.parent;
          if (Zk && hI(lk, Zk)) {
            const kk = Xk.get(Zk);
            if (kk) {
              const Ik = this._exporter._nodes[kk];
              return mI(Fk, Ik), Ik.extensions || (Ik.extensions = {}), Ik.extensions[jT] = tk, void ik(null)
            }
          }
          Fk.extensions || (Fk.extensions = {}), Fk.extensions[jT] = tk, ik(Fk)
        }))
      }
    }
    let xT = !1;

    function PT() {
      xT || (xT = !0, bX.RegisterExtension(jT, (kk => new JT(kk))))
    }
    PT();
    const KT = "KHR_materials_anisotropy";
    class QT {
      constructor(kk) {
        this.name = KT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        const Xk = [];
        if (Ik instanceof VF) {
          if (Ik.anisotropy.isEnabled && !Ik.anisotropy.legacy) return Ik.anisotropy.texture && Xk.push(Ik.anisotropy.texture), Xk
        } else if (Ik instanceof MF && Ik.specularRoughnessAnisotropy > 0) {
          const kk = function(kk) {
            const Fk = kk.specularRoughnessAnisotropyTexture,
              Ik = kk.geometryTangentTexture;
            return `${Fk&&Fk.getInternalTexture()?Fk.getInternalTexture().uniqueId:"NoStrength"}_${Ik&&Ik.getInternalTexture()?Ik.getInternalTexture().uniqueId:"NoTangent"}`
          }(Ik);
          if (this._anisoTexturesMap[kk]) Xk.push(this._anisoTexturesMap[kk]);
          else {
            const Fk = await async function(kk) {
              const Fk = kk.mG(),
                Ik = kk.specularRoughnessAnisotropyTexture,
                Xk = kk.geometryTangentTexture;
              return Ik || Xk ? await lI("AnisotropyTexture", LI(Xk ? aI(Xk, 0) : qI(1), Xk ? aI(Xk, 1) : qI(0), Ik ? aI(Ik, 0) : qI(1)), Fk) : null
            }(Ik);
            Fk && (Xk.push(Fk), this._anisoTexturesMap[kk] = Fk)
          }
          return Xk
        }
        return []
      }
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((kk => {
          var Xk;
          if (Ik instanceof VF) {
            if (!Ik.anisotropy.isEnabled || Ik.anisotropy.legacy) return void kk(Fk);
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            const Xk = this._exporter._materialExporter.getTextureInfo(Ik.anisotropy.texture),
              Tk = {
                anisotropyStrength: Ik.anisotropy.intensity,
                anisotropyRotation: Ik.anisotropy.angle,
                anisotropyTexture: Xk ?? void 0
              };
            null !== Tk.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions[KT] = Tk
          } else if (Ik instanceof MF && Ik.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            let Tk = Ik.specularRoughnessTexture;
            Ik._useRoughnessFromMetallicTextureGreen && (Tk = Ik.baseMetalnessTexture);
            const ik = this._anisoTexturesMap[Ik.id];
            if (!Tk && !ik) {
              let Xk = Ik.specularRoughness,
                Tk = Ik.specularRoughnessAnisotropy;
              if (!Ik._useGltfStyleAnisotropy) {
                const kk = function(kk, Fk) {
                  const Ik = kk * kk,
                    Xk = Ik * Math.sqrt(2 / (1 + (1 - Fk) * (1 - Fk))),
                    Tk = (1 - Fk) * Xk;
                  return {
                    newBaseRoughness: Math.sqrt(Tk),
                    newAnisotropyStrength: Math.min(Math.sqrt((Xk - Ik) / Math.max(1 - Ik, 1e-4)), 1)
                  }
                }(Ik.specularRoughness, Ik.specularRoughnessAnisotropy);
                Xk = kk.newBaseRoughness, Tk = kk.newAnisotropyStrength
              }
              Fk.pbrMetallicRoughness && (Fk.pbrMetallicRoughness.roughnessFactor = Xk);
              const ik = {
                anisotropyStrength: Tk,
                anisotropyRotation: Ik.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return Fk.extensions[KT] = ik, kk(Fk)
            }
            const yk = ik ? this._exporter._materialExporter.getTextureInfo(ik) : null,
              lk = {
                anisotropyStrength: Ik.specularRoughnessAnisotropy,
                anisotropyRotation: Ik.geometryTangentAngle,
                anisotropyTexture: yk || void 0,
                extensions: {}
              };
            Ik._useGltfStyleAnisotropy || (Fk.extensions.KHR_materials_openpbr = {}, (Xk = this._exporter._glTF).extensionsUsed || (Xk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions[KT] = lk
          }
          kk(Fk)
        }))
      }
    }
    let sT = !1;

    function VT() {
      sT || (sT = !0, bX.RegisterExtension(KT, (kk => new QT(kk))))
    }
    VT();
    const zT = "KHR_materials_clearcoat";

    function ST(kk, Fk) {
      const Ik = new nk.g(Fk.name, Fk.mG());
      return Ik._texture = kk, Ik.coordinatesIndex = Fk.coordinatesIndex, Fk instanceof nk.g && (Ik.uOffset = Fk.uOffset, Ik.vOffset = Fk.vOffset, Ik.uScale = Fk.uScale, Ik.vScale = Fk.vScale, Ik.wAng = Fk.wAng), Ik.wrapU = Fk.wrapU, Ik.wrapV = Fk.wrapV, Ik
    }
    class oT {
      constructor(kk) {
        this.name = zT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = kk
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
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        const Xk = [];
        if (Ik instanceof VF) {
          if (Ik.clearCoat.isEnabled) return Ik.clearCoat.texture && Xk.push(Ik.clearCoat.texture), !Ik.clearCoat.useRoughnessFromMainTexture && Ik.clearCoat.textureRoughness && Xk.push(Ik.clearCoat.textureRoughness), Ik.clearCoat.bumpTexture && Xk.push(Ik.clearCoat.bumpTexture), Xk
        } else if (Ik instanceof MF && Ik.coatWeight > 0) {
          let kk = !1;
          if (Ik.coatWeightTexture ? Ik.coatRoughnessTexture ? Ik._useCoatRoughnessFromGreenChannel && Ik.coatWeightTexture.getInternalTexture() === Ik.coatRoughnessTexture.getInternalTexture() ? (Xk.push(Ik.coatWeightTexture), Xk.push(Ik.coatRoughnessTexture)) : kk = !0 : Xk.push(Ik.coatWeightTexture) : Ik.coatRoughnessTexture && (Ik._useCoatRoughnessFromGreenChannel ? Xk.push(Ik.coatRoughnessTexture) : kk = !0), kk) {
            const kk = function(kk) {
              const Fk = kk.coatWeightTexture,
                Ik = Fk && Fk.getInternalTexture() ? Fk.getInternalTexture().uniqueId : "NoCoat",
                Xk = kk.coatRoughnessTexture;
              return `${Ik}_${Xk&&Xk.getInternalTexture()?Xk.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Ik);
            if (!this._cachedInternalTexturesMap[kk]) {
              const Fk = await async function(kk) {
                const Fk = kk.mG(),
                  Ik = kk.coatWeightTexture,
                  Xk = kk.coatRoughnessTexture;
                return Ik || Xk ? (await lI("CoatTexture", LI(Ik ? aI(Ik, 0) : qI(1), Xk ? aI(Xk, kk._useCoatRoughnessFromGreenChannel ? 1 : 0) : qI(1)), Fk)).getInternalTexture() : null
              }(Ik);
              Fk && (this._cachedInternalTexturesMap[kk] = Fk)
            }
            this._cachedInternalTexturesMap[kk] && (Ik.coatWeightTexture && (this._mergedTexturesMap[Ik.coatWeightTexture.uniqueId] = ST(this._cachedInternalTexturesMap[kk], Ik.coatWeightTexture), Xk.push(this._mergedTexturesMap[Ik.coatWeightTexture.uniqueId])), Ik.coatRoughnessTexture && (this._mergedTexturesMap[Ik.coatRoughnessTexture.uniqueId] = ST(this._cachedInternalTexturesMap[kk], Ik.coatRoughnessTexture), Xk.push(this._mergedTexturesMap[Ik.coatRoughnessTexture.uniqueId])))
          }
          return Ik.geometryCoatNormalTexture && Xk.push(Ik.geometryCoatNormalTexture), Xk
        }
        return []
      }
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((kk => {
          if (Ik instanceof VF) {
            if (!Ik.clearCoat.isEnabled) return void kk(Fk);
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            const Xk = this._exporter._materialExporter.getTextureInfo(Ik.clearCoat.texture);
            let Tk;
            Tk = Ik.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Ik.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Ik.clearCoat.textureRoughness), Ik.clearCoat.isTintEnabled && SF.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Ik.name}`), Ik.clearCoat.remapF0OnInterfaceChange && SF.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${Ik.name}`);
            const ik = this._exporter._materialExporter.getTextureInfo(Ik.clearCoat.bumpTexture),
              yk = {
                clearcoatFactor: Ik.clearCoat.intensity,
                clearcoatTexture: Xk ?? void 0,
                clearcoatRoughnessFactor: Ik.clearCoat.roughness,
                clearcoatRoughnessTexture: Tk ?? void 0,
                clearcoatNormalTexture: ik ?? void 0
              };
            null === yk.clearcoatTexture && null === yk.clearcoatRoughnessTexture && null === yk.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions[zT] = yk
          } else if (Ik instanceof MF) {
            if (0 == Ik.coatWeight) return void kk(Fk);
            let Xk, Tk, ik, yk;
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {}, Ik.coatWeightTexture && (Xk = this._mergedTexturesMap[Ik.coatWeightTexture.uniqueId], Tk = this._exporter._materialExporter.getTextureInfo(Xk)), Ik.coatRoughnessTexture && (ik = this._mergedTexturesMap[Ik.coatRoughnessTexture.uniqueId], yk = this._exporter._materialExporter.getTextureInfo(ik)), Ik.coatColorTexture && SF.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Ik.name}`);
            const lk = this._exporter._materialExporter.getTextureInfo(Ik.geometryCoatNormalTexture),
              ak = {
                clearcoatFactor: Ik.coatWeight,
                clearcoatTexture: Tk ?? void 0,
                clearcoatRoughnessFactor: Ik.coatRoughness,
                clearcoatRoughnessTexture: yk ?? void 0,
                clearcoatNormalTexture: lk ?? void 0
              };
            null === ak.clearcoatTexture && null === ak.clearcoatRoughnessTexture && null === ak.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions[zT] = ak
          }
          kk(Fk)
        }))
      }
    }
    let vT = !1;

    function ET() {
      vT || (vT = !0, bX.RegisterExtension(zT, (kk => new oT(kk))))
    }
    ET();
    const OT = "KHR_materials_coat";

    function nT(kk) {
      const Fk = kk.coatRoughnessAnisotropyTexture,
        Ik = kk.geometryCoatTangentTexture;
      return `${Fk&&Fk.getInternalTexture()?Fk.getInternalTexture().uniqueId:"NoStrength"}_${Ik&&Ik.getInternalTexture()?Ik.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function GT(kk, Fk) {
      const Ik = new nk.g(Fk.name, Fk.mG());
      return Ik._texture = kk, Ik.coordinatesIndex = Fk.coordinatesIndex, Fk instanceof nk.g && (Ik.uOffset = Fk.uOffset, Ik.vOffset = Fk.vOffset, Ik.uScale = Fk.uScale, Ik.vScale = Fk.vScale, Ik.wAng = Fk.wAng), Ik.wrapU = Fk.wrapU, Ik.wrapV = Fk.wrapV, Ik
    }
    class pT {
      constructor(kk) {
        this.name = OT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = kk
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
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        const Xk = [];
        if (Ik instanceof VF) {
          if (Ik.clearCoat.isEnabled) return Ik.clearCoat.texture && Xk.push(Ik.clearCoat.texture), !Ik.clearCoat.useRoughnessFromMainTexture && Ik.clearCoat.textureRoughness && Xk.push(Ik.clearCoat.textureRoughness), Ik.clearCoat.bumpTexture && Xk.push(Ik.clearCoat.bumpTexture), Ik.clearCoat.tintTexture && Xk.push(Ik.clearCoat.tintTexture), Xk
        } else if (Ik instanceof MF && Ik.coatWeight > 0) {
          let kk = !1;
          if (Ik.coatWeightTexture ? Ik.coatRoughnessTexture ? Ik._useCoatRoughnessFromGreenChannel && Ik.coatWeightTexture.getInternalTexture() === Ik.coatRoughnessTexture.getInternalTexture() ? (Xk.push(Ik.coatWeightTexture), Xk.push(Ik.coatRoughnessTexture)) : kk = !0 : Xk.push(Ik.coatWeightTexture) : Ik.coatRoughnessTexture && (Ik._useCoatRoughnessFromGreenChannel ? Xk.push(Ik.coatRoughnessTexture) : kk = !0), kk) {
            const kk = function(kk) {
              const Fk = kk.coatWeightTexture,
                Ik = Fk && Fk.getInternalTexture() ? Fk.getInternalTexture().uniqueId : "NoCoat",
                Xk = kk.coatRoughnessTexture;
              return `${Ik}_${Xk&&Xk.getInternalTexture()?Xk.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Ik);
            if (!this._cachedInternalTexturesMap[kk]) {
              const Fk = await async function(kk) {
                const Fk = kk.mG(),
                  Ik = kk.coatWeightTexture,
                  Xk = kk.coatRoughnessTexture;
                return Ik || Xk ? (await lI("CoatTexture", LI(Ik ? aI(Ik, 0) : qI(1), Xk ? aI(Xk, kk._useCoatRoughnessFromGreenChannel ? 1 : 0) : qI(1)), Fk)).getInternalTexture() : null
              }(Ik);
              Fk && (this._cachedInternalTexturesMap[kk] = Fk)
            }
            this._cachedInternalTexturesMap[kk] && (Ik.coatWeightTexture && (this._mergedTexturesMap[Ik.coatWeightTexture.uniqueId] = GT(this._cachedInternalTexturesMap[kk], Ik.coatWeightTexture), Xk.push(this._mergedTexturesMap[Ik.coatWeightTexture.uniqueId])), Ik.coatRoughnessTexture && (this._mergedTexturesMap[Ik.coatRoughnessTexture.uniqueId] = GT(this._cachedInternalTexturesMap[kk], Ik.coatRoughnessTexture), Xk.push(this._mergedTexturesMap[Ik.coatRoughnessTexture.uniqueId])))
          }
          if (Ik.geometryCoatNormalTexture && Xk.push(Ik.geometryCoatNormalTexture), Ik.coatColorTexture && Xk.push(Ik.coatColorTexture), Ik.coatRoughnessAnisotropy > 0) {
            const kk = nT(Ik);
            if (this._mergedTexturesMap[kk]) Xk.push(this._mergedTexturesMap[kk]);
            else {
              const Fk = await async function(kk) {
                const Fk = kk.mG(),
                  Ik = kk.coatRoughnessAnisotropyTexture,
                  Xk = kk.geometryCoatTangentTexture;
                return Ik || Xk ? await lI("AnisotropyTexture", LI(Xk ? aI(Xk, 0) : qI(1), Xk ? aI(Xk, 1) : qI(0), Ik ? aI(Ik, 0) : qI(1)), Fk) : null
              }(Ik);
              Fk && (Xk.push(Fk), this._mergedTexturesMap[kk] = Fk)
            }
            return Xk
          }
          return Xk
        }
        return []
      }
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((kk => {
          var Xk;
          if (Ik instanceof VF) {
            if (!Ik.clearCoat.isEnabled) return void kk(Fk);
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            const Xk = this._exporter._materialExporter.getTextureInfo(Ik.clearCoat.texture);
            let Tk, ik;
            Tk = Ik.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Ik.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Ik.clearCoat.textureRoughness), Ik.clearCoat.isTintEnabled && (ik = this._exporter._materialExporter.getTextureInfo(Ik.clearCoat.tintTexture));
            const yk = this._exporter._materialExporter.getTextureInfo(Ik.clearCoat.bumpTexture),
              lk = Ik.clearCoat.indexOfRefraction,
              ak = {
                coatFactor: Ik.clearCoat.intensity,
                coatTexture: Xk ?? void 0,
                coatRoughnessFactor: Ik.clearCoat.roughness,
                coatRoughnessTexture: Tk ?? void 0,
                coatNormalTexture: yk ?? void 0,
                coatColorFactor: Ik.clearCoat.tintColor.iXk(),
                coatColorTexture: ik ?? void 0,
                coatIor: 1.5 !== lk ? lk : void 0
              };
            null === ak.coatTexture && null === ak.coatRoughnessTexture && null === ak.coatRoughnessTexture && null === ak.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions[OT] = ak
          } else if (Ik instanceof MF) {
            if (0 == Ik.coatWeight) return void kk(Fk);
            let Tk, ik, yk, lk;
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {}, Ik.coatWeightTexture && (Tk = this._mergedTexturesMap[Ik.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[Ik.coatWeightTexture.uniqueId] : Ik.coatWeightTexture, ik = this._exporter._materialExporter.getTextureInfo(Tk)), Ik.coatRoughnessTexture && (yk = this._mergedTexturesMap[Ik.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Ik.coatRoughnessTexture.uniqueId] : Ik.coatRoughnessTexture, lk = this._exporter._materialExporter.getTextureInfo(yk));
            const ak = this._exporter._materialExporter.getTextureInfo(Ik.geometryCoatNormalTexture),
              qk = this._exporter._materialExporter.getTextureInfo(Ik.coatColorTexture),
              Lk = Ik.coatIor,
              tk = Ik.coatDarkening,
              Zk = Ik.coatRoughnessTexture,
              jk = nT(Ik),
              ek = this._mergedTexturesMap[jk];
            let wk, Hk = 0,
              Jk = 0;
            if (Ik.coatRoughnessAnisotropy > 0) {
              if (Zk || ek) {
                const kk = ek ? this._exporter._materialExporter.getTextureInfo(ek) : null;
                Hk = Ik.coatRoughnessAnisotropy, Jk = Ik.geometryCoatTangentAngle, wk = kk || void 0
              } else {
                let kk = Ik.coatRoughness,
                  Xk = Ik.coatRoughnessAnisotropy;
                if (!Ik._useGltfStyleAnisotropy) {
                  const Fk = function(kk, Fk) {
                    const Ik = kk * kk,
                      Xk = Ik * Math.sqrt(2 / (1 + (1 - Fk) * (1 - Fk))),
                      Tk = (1 - Fk) * Xk;
                    return {
                      newBaseRoughness: Math.sqrt(Tk),
                      newAnisotropyStrength: Math.min(Math.sqrt((Xk - Ik) / Math.max(1 - Ik, 1e-4)), 1)
                    }
                  }(Ik.coatRoughness, Ik.coatRoughnessAnisotropy);
                  kk = Fk.newBaseRoughness, Xk = Fk.newAnisotropyStrength
                }
                Fk.pbrMetallicRoughness && (Fk.pbrMetallicRoughness.roughnessFactor = kk), Hk = Xk, Jk = Ik.geometryCoatTangentAngle + .5 * Math.PI, wk = void 0
              }
              Ik._useGltfStyleAnisotropy || (Fk.extensions.KHR_materials_openpbr = {}, (Xk = this._exporter._glTF).extensionsUsed || (Xk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const xk = {
              coatFactor: Ik.coatWeight,
              coatTexture: ik ?? void 0,
              coatRoughnessFactor: Ik.coatRoughness,
              coatRoughnessTexture: lk ?? void 0,
              coatNormalTexture: ak ?? void 0,
              coatColorFactor: Ik.coatColor.iXk(),
              coatColorTexture: qk ?? void 0,
              coatIor: 1.5 !== Lk ? Lk : void 0,
              coatDarkeningFactor: 1 !== tk ? tk : void 0,
              coatAnisotropyRotation: Jk,
              coatAnisotropyStrength: Hk,
              coatAnisotropyTexture: wk
            };
            null === xk.coatTexture && null === xk.coatRoughnessTexture && null === xk.coatRoughnessTexture && null === xk.coatAnisotropyTexture && null === xk.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions[OT] = xk
          }
          kk(Fk)
        }))
      }
    }
    let uT = !1;

    function bT() {
      uT || (uT = !0, bX.RegisterExtension(OT, (kk => new pT(kk))))
    }
    bT();
    let RT = (() => {
      var kk, Fk, Ik, Xk, Tk, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk, Pk, Kk, Qk, sk, Vk, zk, Ek, Ok, nk, Gk, pk, uk, Rk, Uk, Ck, Nk, ck, Wk, fk, Bk, dk, Yk, gk, mk, hk, rk, Dk, Mk, kF, FF, IF, XF, TF, iF, yF, lF, aF, qF, LF, tF, ZF, jF, eF, wF, HF, JF, xF, PF, KF;
      let QF, sF, SF, oF, vF, EF, OF, nF, GF, pF, uF, bF, RF, UF, CF, NF, cF, WF, fF, BF, dF, YF, AF, gF, mF, hF, rF, DF, MF, kI, FI, II, XI, TI, iI, yI, lI, aI, qI, LI, tI, ZI, jI, eI, wI, HI, JI, xI, PI, KI, QI, sI, VI, zI, SI, oI, vI, EI, OI, nI, GI, pI, uI, bI, RI, UI, CI, NI, cI = VF,
        WI = [],
        fI = [],
        BI = [],
        dI = [],
        YI = [],
        AI = [],
        gI = [],
        mI = [],
        hI = [],
        rI = [],
        DI = [],
        MI = [],
        kX = [],
        FX = [],
        IX = [],
        XX = [],
        TX = [],
        iX = [],
        yX = [],
        lX = [],
        aX = [],
        qX = [],
        LX = [],
        tX = [],
        ZX = [],
        jX = [],
        eX = [],
        wX = [],
        HX = [],
        JX = [],
        xX = [],
        PX = [],
        KX = [],
        QX = [],
        sX = [],
        VX = [],
        zX = [],
        SX = [],
        oX = [],
        vX = [],
        EX = [],
        OX = [],
        nX = [],
        GX = [],
        pX = [],
        uX = [],
        bX = [],
        RX = [],
        UX = [],
        CX = [],
        NX = [],
        cX = [],
        WX = [],
        fX = [],
        BX = [],
        dX = [],
        YX = [],
        AX = [],
        gX = [],
        mX = [],
        hX = [],
        rX = [],
        DX = [],
        MX = [],
        kT = [],
        FT = [],
        IT = [],
        XT = [],
        TT = [],
        iT = [],
        yT = [],
        lT = [],
        aT = [],
        qT = [],
        LT = [],
        tT = [],
        ZT = [],
        jT = [],
        eT = [],
        wT = [],
        HT = [],
        JT = [],
        xT = [],
        PT = [],
        KT = [],
        QT = [],
        sT = [],
        VT = [],
        zT = [],
        ST = [],
        oT = [],
        vT = [],
        ET = [],
        OT = [],
        nT = [],
        GT = [],
        pT = [],
        uT = [],
        bT = [],
        RT = [],
        UT = [],
        CT = [],
        NT = [],
        cT = [],
        WT = [],
        fT = [],
        BT = [],
        dT = [],
        YT = [],
        AT = [],
        gT = [],
        mT = [],
        hT = [],
        rT = [],
        DT = [],
        MT = [],
        ki = [],
        Fi = [],
        Ii = [],
        Xi = [],
        Ti = [],
        ii = [],
        yi = [],
        li = [],
        ai = [],
        qi = [],
        Li = [],
        ti = [],
        Zi = [],
        ji = [],
        ei = [],
        wi = [],
        Hi = [];
      return kk = class extends cI {
        get directIntensity() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set directIntensity(kk) {
          (0, Sk.f)(this, Fk, kk, "f")
        }
        get emissiveIntensity() {
          return (0, Sk.e)(this, Ik, "f")
        }
        set emissiveIntensity(kk) {
          (0, Sk.f)(this, Ik, kk, "f")
        }
        get environmentIntensity() {
          return (0, Sk.e)(this, Xk, "f")
        }
        set environmentIntensity(kk) {
          (0, Sk.f)(this, Xk, kk, "f")
        }
        get specularIntensity() {
          return (0, Sk.e)(this, Tk, "f")
        }
        set specularIntensity(kk) {
          (0, Sk.f)(this, Tk, kk, "f")
        }
        get disableBumpMap() {
          return (0, Sk.e)(this, yk, "f")
        }
        set disableBumpMap(kk) {
          (0, Sk.f)(this, yk, kk, "f")
        }
        get albedoTexture() {
          return (0, Sk.e)(this, lk, "f")
        }
        set albedoTexture(kk) {
          (0, Sk.f)(this, lk, kk, "f")
        }
        get baseWeightTexture() {
          return (0, Sk.e)(this, ak, "f")
        }
        set baseWeightTexture(kk) {
          (0, Sk.f)(this, ak, kk, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, Sk.e)(this, qk, "f")
        }
        set baseDiffuseRoughnessTexture(kk) {
          (0, Sk.f)(this, qk, kk, "f")
        }
        get ambientTexture() {
          return (0, Sk.e)(this, Lk, "f")
        }
        set ambientTexture(kk) {
          (0, Sk.f)(this, Lk, kk, "f")
        }
        get ambientTextureStrength() {
          return (0, Sk.e)(this, tk, "f")
        }
        set ambientTextureStrength(kk) {
          (0, Sk.f)(this, tk, kk, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, Sk.e)(this, Zk, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(kk) {
          (0, Sk.f)(this, Zk, kk, "f")
        }
        get opacityTexture() {
          return (0, Sk.e)(this, jk, "f")
        }
        set opacityTexture(kk) {
          (0, Sk.f)(this, jk, kk, "f")
        }
        get reflectionTexture() {
          return (0, Sk.e)(this, ek, "f")
        }
        set reflectionTexture(kk) {
          (0, Sk.f)(this, ek, kk, "f")
        }
        get emissiveTexture() {
          return (0, Sk.e)(this, wk, "f")
        }
        set emissiveTexture(kk) {
          (0, Sk.f)(this, wk, kk, "f")
        }
        get reflectivityTexture() {
          return (0, Sk.e)(this, Hk, "f")
        }
        set reflectivityTexture(kk) {
          (0, Sk.f)(this, Hk, kk, "f")
        }
        get metallicTexture() {
          return (0, Sk.e)(this, Jk, "f")
        }
        set metallicTexture(kk) {
          (0, Sk.f)(this, Jk, kk, "f")
        }
        get metallic() {
          return (0, Sk.e)(this, xk, "f")
        }
        set metallic(kk) {
          (0, Sk.f)(this, xk, kk, "f")
        }
        get roughness() {
          return (0, Sk.e)(this, Pk, "f")
        }
        set roughness(kk) {
          (0, Sk.f)(this, Pk, kk, "f")
        }
        get metallicF0Factor() {
          return (0, Sk.e)(this, Kk, "f")
        }
        set metallicF0Factor(kk) {
          (0, Sk.f)(this, Kk, kk, "f")
        }
        get metallicReflectanceColor() {
          return (0, Sk.e)(this, Qk, "f")
        }
        set metallicReflectanceColor(kk) {
          (0, Sk.f)(this, Qk, kk, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, Sk.e)(this, sk, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(kk) {
          (0, Sk.f)(this, sk, kk, "f")
        }
        get metallicReflectanceTexture() {
          return (0, Sk.e)(this, Vk, "f")
        }
        set metallicReflectanceTexture(kk) {
          (0, Sk.f)(this, Vk, kk, "f")
        }
        get reflectanceTexture() {
          return (0, Sk.e)(this, zk, "f")
        }
        set reflectanceTexture(kk) {
          (0, Sk.f)(this, zk, kk, "f")
        }
        get microSurfaceTexture() {
          return (0, Sk.e)(this, Ek, "f")
        }
        set microSurfaceTexture(kk) {
          (0, Sk.f)(this, Ek, kk, "f")
        }
        get bumpTexture() {
          return (0, Sk.e)(this, Ok, "f")
        }
        set bumpTexture(kk) {
          (0, Sk.f)(this, Ok, kk, "f")
        }
        get lightmapTexture() {
          return (0, Sk.e)(this, nk, "f")
        }
        set lightmapTexture(kk) {
          (0, Sk.f)(this, nk, kk, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(kk) {
          this.subSurface.refractionTexture = kk, kk ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, Sk.e)(this, Gk, "f")
        }
        set ambientColor(kk) {
          (0, Sk.f)(this, Gk, kk, "f")
        }
        get albedoColor() {
          return (0, Sk.e)(this, pk, "f")
        }
        set albedoColor(kk) {
          (0, Sk.f)(this, pk, kk, "f")
        }
        get baseWeight() {
          return (0, Sk.e)(this, uk, "f")
        }
        set baseWeight(kk) {
          (0, Sk.f)(this, uk, kk, "f")
        }
        get baseDiffuseRoughness() {
          return (0, Sk.e)(this, Rk, "f")
        }
        set baseDiffuseRoughness(kk) {
          (0, Sk.f)(this, Rk, kk, "f")
        }
        get reflectivityColor() {
          return (0, Sk.e)(this, Uk, "f")
        }
        set reflectivityColor(kk) {
          (0, Sk.f)(this, Uk, kk, "f")
        }
        get reflectionColor() {
          return (0, Sk.e)(this, Ck, "f")
        }
        set reflectionColor(kk) {
          (0, Sk.f)(this, Ck, kk, "f")
        }
        get emissiveColor() {
          return (0, Sk.e)(this, Nk, "f")
        }
        set emissiveColor(kk) {
          (0, Sk.f)(this, Nk, kk, "f")
        }
        get microSurface() {
          return (0, Sk.e)(this, ck, "f")
        }
        set microSurface(kk) {
          (0, Sk.f)(this, ck, kk, "f")
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
          return (0, Sk.e)(this, Wk, "f")
        }
        set useLightmapAsShadowmap(kk) {
          (0, Sk.f)(this, Wk, kk, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, Sk.e)(this, fk, "f")
        }
        set useAlphaFromAlbedoTexture(kk) {
          (0, Sk.f)(this, fk, kk, "f")
        }
        get forceAlphaTest() {
          return (0, Sk.e)(this, Bk, "f")
        }
        set forceAlphaTest(kk) {
          (0, Sk.f)(this, Bk, kk, "f")
        }
        get alphaCutOff() {
          return (0, Sk.e)(this, dk, "f")
        }
        set alphaCutOff(kk) {
          (0, Sk.f)(this, dk, kk, "f")
        }
        get useSpecularOverAlpha() {
          return (0, Sk.e)(this, Yk, "f")
        }
        set useSpecularOverAlpha(kk) {
          (0, Sk.f)(this, Yk, kk, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, Sk.e)(this, gk, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(kk) {
          (0, Sk.f)(this, gk, kk, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, Sk.e)(this, mk, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(kk) {
          (0, Sk.f)(this, mk, kk, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, Sk.e)(this, hk, "f")
        }
        set useRoughnessFromMetallicTextureGreen(kk) {
          (0, Sk.f)(this, hk, kk, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, Sk.e)(this, rk, "f")
        }
        set useMetallnessFromMetallicTextureBlue(kk) {
          (0, Sk.f)(this, rk, kk, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, Sk.e)(this, Dk, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(kk) {
          (0, Sk.f)(this, Dk, kk, "f")
        }
        get useAmbientInGrayScale() {
          return (0, Sk.e)(this, Mk, "f")
        }
        set useAmbientInGrayScale(kk) {
          (0, Sk.f)(this, Mk, kk, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, Sk.e)(this, kF, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(kk) {
          (0, Sk.f)(this, kF, kk, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === VF.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(kk) {
          kk !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = kk ? VF.LIGHTFALLOFF_PHYSICAL : VF.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === VF.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(kk) {
          kk !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = kk ? VF.LIGHTFALLOFF_GLTF : VF.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, Sk.e)(this, FF, "f")
        }
        set useRadianceOverAlpha(kk) {
          (0, Sk.f)(this, FF, kk, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, Sk.e)(this, IF, "f")
        }
        set useObjectSpaceNormalMap(kk) {
          (0, Sk.f)(this, IF, kk, "f")
        }
        get useParallax() {
          return (0, Sk.e)(this, XF, "f")
        }
        set useParallax(kk) {
          (0, Sk.f)(this, XF, kk, "f")
        }
        get useParallaxOcclusion() {
          return (0, Sk.e)(this, TF, "f")
        }
        set useParallaxOcclusion(kk) {
          (0, Sk.f)(this, TF, kk, "f")
        }
        get parallaxScaleBias() {
          return (0, Sk.e)(this, iF, "f")
        }
        set parallaxScaleBias(kk) {
          (0, Sk.f)(this, iF, kk, "f")
        }
        get disableLighting() {
          return (0, Sk.e)(this, yF, "f")
        }
        set disableLighting(kk) {
          (0, Sk.f)(this, yF, kk, "f")
        }
        get forceIrradianceInFragment() {
          return (0, Sk.e)(this, lF, "f")
        }
        set forceIrradianceInFragment(kk) {
          (0, Sk.f)(this, lF, kk, "f")
        }
        get maxSimultaneousLights() {
          return (0, Sk.e)(this, aF, "f")
        }
        set maxSimultaneousLights(kk) {
          (0, Sk.f)(this, aF, kk, "f")
        }
        get invertNormalMapX() {
          return (0, Sk.e)(this, qF, "f")
        }
        set invertNormalMapX(kk) {
          (0, Sk.f)(this, qF, kk, "f")
        }
        get invertNormalMapY() {
          return (0, Sk.e)(this, LF, "f")
        }
        set invertNormalMapY(kk) {
          (0, Sk.f)(this, LF, kk, "f")
        }
        get twoSidedLighting() {
          return (0, Sk.e)(this, tF, "f")
        }
        set twoSidedLighting(kk) {
          (0, Sk.f)(this, tF, kk, "f")
        }
        get useAlphaFresnel() {
          return (0, Sk.e)(this, ZF, "f")
        }
        set useAlphaFresnel(kk) {
          (0, Sk.f)(this, ZF, kk, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, Sk.e)(this, jF, "f")
        }
        set useLinearAlphaFresnel(kk) {
          (0, Sk.f)(this, jF, kk, "f")
        }
        get environmentBRDFTexture() {
          return (0, Sk.e)(this, eF, "f")
        }
        set environmentBRDFTexture(kk) {
          (0, Sk.f)(this, eF, kk, "f")
        }
        get forceNormalForward() {
          return (0, Sk.e)(this, wF, "f")
        }
        set forceNormalForward(kk) {
          (0, Sk.f)(this, wF, kk, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, Sk.e)(this, HF, "f")
        }
        set enableSpecularAntiAliasing(kk) {
          (0, Sk.f)(this, HF, kk, "f")
        }
        get useHorizonOcclusion() {
          return (0, Sk.e)(this, JF, "f")
        }
        set useHorizonOcclusion(kk) {
          (0, Sk.f)(this, JF, kk, "f")
        }
        get useRadianceOcclusion() {
          return (0, Sk.e)(this, xF, "f")
        }
        set useRadianceOcclusion(kk) {
          (0, Sk.f)(this, xF, kk, "f")
        }
        get unlit() {
          return (0, Sk.e)(this, PF, "f")
        }
        set unlit(kk) {
          (0, Sk.f)(this, PF, kk, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, Sk.e)(this, KF, "f")
        }
        set applyDecalMapAfterDetailMap(kk) {
          (0, Sk.f)(this, KF, kk, "f")
        }
        constructor(ik, vk) {
          super(ik, vk, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), Fk.set(this, ((0, Sk.n)(this, WI), (0, Sk.n)(this, fI, 1))), Ik.set(this, ((0, Sk.n)(this, BI), (0, Sk.n)(this, dI, 1))), Xk.set(this, ((0, Sk.n)(this, YI), (0, Sk.n)(this, AI, 1))), Tk.set(this, ((0, Sk.n)(this, gI), (0, Sk.n)(this, mI, 1))), yk.set(this, ((0, Sk.n)(this, hI), (0, Sk.n)(this, rI, !1))), lk.set(this, ((0, Sk.n)(this, DI), (0, Sk.n)(this, MI, void 0))), ak.set(this, ((0, Sk.n)(this, kX), (0, Sk.n)(this, FX, void 0))), qk.set(this, ((0, Sk.n)(this, IX), (0, Sk.n)(this, XX, void 0))), Lk.set(this, ((0, Sk.n)(this, TX), (0, Sk.n)(this, iX, void 0))), tk.set(this, ((0, Sk.n)(this, yX), (0, Sk.n)(this, lX, 1))), Zk.set(this, ((0, Sk.n)(this, aX), (0, Sk.n)(this, qX, kk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), jk.set(this, ((0, Sk.n)(this, LX), (0, Sk.n)(this, tX, void 0))), ek.set(this, ((0, Sk.n)(this, ZX), (0, Sk.n)(this, jX, void 0))), wk.set(this, ((0, Sk.n)(this, eX), (0, Sk.n)(this, wX, void 0))), Hk.set(this, ((0, Sk.n)(this, HX), (0, Sk.n)(this, JX, void 0))), Jk.set(this, ((0, Sk.n)(this, xX), (0, Sk.n)(this, PX, void 0))), xk.set(this, ((0, Sk.n)(this, KX), (0, Sk.n)(this, QX, void 0))), Pk.set(this, ((0, Sk.n)(this, sX), (0, Sk.n)(this, VX, void 0))), Kk.set(this, ((0, Sk.n)(this, zX), (0, Sk.n)(this, SX, 1))), Qk.set(this, ((0, Sk.n)(this, oX), (0, Sk.n)(this, vX, Ak.e.White()))), sk.set(this, ((0, Sk.n)(this, EX), (0, Sk.n)(this, OX, !1))), Vk.set(this, ((0, Sk.n)(this, nX), (0, Sk.n)(this, GX, void 0))), zk.set(this, ((0, Sk.n)(this, pX), (0, Sk.n)(this, uX, void 0))), Ek.set(this, ((0, Sk.n)(this, bX), (0, Sk.n)(this, RX, void 0))), Ok.set(this, ((0, Sk.n)(this, UX), (0, Sk.n)(this, CX, void 0))), nk.set(this, ((0, Sk.n)(this, NX), (0, Sk.n)(this, cX, void 0))), Gk.set(this, ((0, Sk.n)(this, WX), (0, Sk.n)(this, fX, new Ak.e(0, 0, 0)))), pk.set(this, ((0, Sk.n)(this, BX), (0, Sk.n)(this, dX, new Ak.e(1, 1, 1)))), uk.set(this, ((0, Sk.n)(this, YX), (0, Sk.n)(this, AX, 1))), Rk.set(this, ((0, Sk.n)(this, gX), (0, Sk.n)(this, mX, void 0))), Uk.set(this, ((0, Sk.n)(this, hX), (0, Sk.n)(this, rX, new Ak.e(1, 1, 1)))), Ck.set(this, ((0, Sk.n)(this, DX), (0, Sk.n)(this, MX, new Ak.e(1, 1, 1)))), Nk.set(this, ((0, Sk.n)(this, kT), (0, Sk.n)(this, FT, new Ak.e(0, 0, 0)))), ck.set(this, ((0, Sk.n)(this, IT), (0, Sk.n)(this, XT, 1))), Wk.set(this, ((0, Sk.n)(this, TT), (0, Sk.n)(this, iT, !1))), fk.set(this, ((0, Sk.n)(this, yT), (0, Sk.n)(this, lT, !1))), Bk.set(this, ((0, Sk.n)(this, aT), (0, Sk.n)(this, qT, !1))), dk.set(this, ((0, Sk.n)(this, LT), (0, Sk.n)(this, tT, .4))), Yk.set(this, ((0, Sk.n)(this, ZT), (0, Sk.n)(this, jT, !0))), gk.set(this, ((0, Sk.n)(this, eT), (0, Sk.n)(this, wT, !1))), mk.set(this, ((0, Sk.n)(this, HT), (0, Sk.n)(this, JT, !0))), hk.set(this, ((0, Sk.n)(this, xT), (0, Sk.n)(this, PT, !1))), rk.set(this, ((0, Sk.n)(this, KT), (0, Sk.n)(this, QT, !1))), Dk.set(this, ((0, Sk.n)(this, sT), (0, Sk.n)(this, VT, !1))), Mk.set(this, ((0, Sk.n)(this, zT), (0, Sk.n)(this, ST, !1))), kF.set(this, ((0, Sk.n)(this, oT), (0, Sk.n)(this, vT, !1))), FF.set(this, ((0, Sk.n)(this, ET), (0, Sk.n)(this, OT, !0))), IF.set(this, ((0, Sk.n)(this, nT), (0, Sk.n)(this, GT, !1))), XF.set(this, ((0, Sk.n)(this, pT), (0, Sk.n)(this, uT, !1))), TF.set(this, ((0, Sk.n)(this, bT), (0, Sk.n)(this, RT, !1))), iF.set(this, ((0, Sk.n)(this, UT), (0, Sk.n)(this, CT, .05))), yF.set(this, ((0, Sk.n)(this, NT), (0, Sk.n)(this, cT, !1))), lF.set(this, ((0, Sk.n)(this, WT), (0, Sk.n)(this, fT, !1))), aF.set(this, ((0, Sk.n)(this, BT), (0, Sk.n)(this, dT, 4))), qF.set(this, ((0, Sk.n)(this, YT), (0, Sk.n)(this, AT, !1))), LF.set(this, ((0, Sk.n)(this, gT), (0, Sk.n)(this, mT, !1))), tF.set(this, ((0, Sk.n)(this, hT), (0, Sk.n)(this, rT, !1))), ZF.set(this, ((0, Sk.n)(this, DT), (0, Sk.n)(this, MT, !1))), jF.set(this, ((0, Sk.n)(this, ki), (0, Sk.n)(this, Fi, !1))), eF.set(this, ((0, Sk.n)(this, Ii), (0, Sk.n)(this, Xi, null))), wF.set(this, ((0, Sk.n)(this, Ti), (0, Sk.n)(this, ii, !1))), HF.set(this, ((0, Sk.n)(this, yi), (0, Sk.n)(this, li, !1))), JF.set(this, ((0, Sk.n)(this, ai), (0, Sk.n)(this, qi, !0))), xF.set(this, ((0, Sk.n)(this, Li), (0, Sk.n)(this, ti, !0))), PF.set(this, ((0, Sk.n)(this, Zi), (0, Sk.n)(this, ji, !1))), KF.set(this, ((0, Sk.n)(this, ei), (0, Sk.n)(this, wi, !1))), (0, Sk.n)(this, Hi), this._environmentBRDFTexture = bk(this.mG())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(Fk) {
          let Ik = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Tk = zF.b.Clone((() => new kk(Fk, this.mG())), this, {
            cloneTexturesOnlyOnce: Ik
          });
          return Tk.id = Fk, Tk.name = Fk, this.stencil.copyTo(Tk.stencil), this._clonePlugins(Tk, Xk), Tk
        }
        serialize() {
          const kk = super.serialize();
          return kk.customType = "BABYLON.PBRMaterial", kk
        }
        static Parse(Fk, Ik, Xk) {
          const Tk = zF.b.Parse((() => new kk(Fk.name, Ik)), Fk, Ik, Xk);
          return Fk.stencil && Tk.stencil.parse(Fk.stencil, Ik, Xk), ik.c._ParsePlugins(Fk, Tk, Ik, Xk), Fk.clearCoat && Tk.clearCoat.parse(Fk.clearCoat, Ik, Xk), Fk.anisotropy && Tk.anisotropy.parse(Fk.anisotropy, Ik, Xk), Fk.brdf && Tk.brdf.parse(Fk.brdf, Ik, Xk), Fk.sheen && Tk.sheen.parse(Fk.sheen, Ik, Xk), Fk.subSurface && Tk.subSurface.parse(Fk.subSurface, Ik, Xk), Fk.iridescence && Tk.iridescence.parse(Fk.iridescence, Ik, Xk), Tk
        }
      }, Fk = new WeakMap, Ik = new WeakMap, Xk = new WeakMap, Tk = new WeakMap, yk = new WeakMap, lk = new WeakMap, ak = new WeakMap, qk = new WeakMap, Lk = new WeakMap, tk = new WeakMap, Zk = new WeakMap, jk = new WeakMap, ek = new WeakMap, wk = new WeakMap, Hk = new WeakMap, Jk = new WeakMap, xk = new WeakMap, Pk = new WeakMap, Kk = new WeakMap, Qk = new WeakMap, sk = new WeakMap, Vk = new WeakMap, zk = new WeakMap, Ek = new WeakMap, Ok = new WeakMap, nk = new WeakMap, Gk = new WeakMap, pk = new WeakMap, uk = new WeakMap, Rk = new WeakMap, Uk = new WeakMap, Ck = new WeakMap, Nk = new WeakMap, ck = new WeakMap, Wk = new WeakMap, fk = new WeakMap, Bk = new WeakMap, dk = new WeakMap, Yk = new WeakMap, gk = new WeakMap, mk = new WeakMap, hk = new WeakMap, rk = new WeakMap, Dk = new WeakMap, Mk = new WeakMap, kF = new WeakMap, FF = new WeakMap, IF = new WeakMap, XF = new WeakMap, TF = new WeakMap, iF = new WeakMap, yF = new WeakMap, lF = new WeakMap, aF = new WeakMap, qF = new WeakMap, LF = new WeakMap, tF = new WeakMap, ZF = new WeakMap, jF = new WeakMap, eF = new WeakMap, wF = new WeakMap, HF = new WeakMap, JF = new WeakMap, xF = new WeakMap, PF = new WeakMap, KF = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(cI[Symbol.metadata] ?? null) : void 0;
        QF = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], sF = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], SF = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], oF = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], vF = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], EF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], OF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], nF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], GF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], pF = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], uF = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], bF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], RF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], UF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], CF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], NF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], cF = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], WF = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], fF = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], BF = [(0, vk.n)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], dF = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], YF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], AF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], gF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], mF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], hF = [(0, vk.B)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty", null)], rF = [(0, vk.n)("ambient"), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], DF = [(0, vk.n)("albedo"), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], MF = [(0, vk.J)("baseWeight"), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], kI = [(0, vk.J)("baseDiffuseRoughness"), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], FI = [(0, vk.n)("reflectivity"), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], II = [(0, vk.n)("reflection"), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], XI = [(0, vk.n)("emissive"), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], TI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], iI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], yI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], lI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], aI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], qI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], LI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], tI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], ZI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], jI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], eI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], wI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], HI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], JI = [(0, vk.J)()], xI = [(0, vk.J)()], PI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], KI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], QI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], sI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], VI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], zI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsLightsDirty")], SI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], oI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsLightsDirty")], vI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], EI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], OI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], nI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], GI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], pI = [(0, vk.e)("_markAllSubMeshesAsTexturesDirty")], uI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], bI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], RI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], UI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsTexturesDirty")], CI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], NI = [(0, vk.J)(), (0, vk.e)("_markAllSubMeshesAsMiscDirty")], (0, Sk.j)(kk, null, QF, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "directIntensity" in kk,
            get: kk => kk.directIntensity,
            set: (kk, Fk) => {
              kk.directIntensity = Fk
            }
          },
          metadata: Fk
        }, fI, BI), (0, Sk.j)(kk, null, sF, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "emissiveIntensity" in kk,
            get: kk => kk.emissiveIntensity,
            set: (kk, Fk) => {
              kk.emissiveIntensity = Fk
            }
          },
          metadata: Fk
        }, dI, YI), (0, Sk.j)(kk, null, SF, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "environmentIntensity" in kk,
            get: kk => kk.environmentIntensity,
            set: (kk, Fk) => {
              kk.environmentIntensity = Fk
            }
          },
          metadata: Fk
        }, AI, gI), (0, Sk.j)(kk, null, oF, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "specularIntensity" in kk,
            get: kk => kk.specularIntensity,
            set: (kk, Fk) => {
              kk.specularIntensity = Fk
            }
          },
          metadata: Fk
        }, mI, hI), (0, Sk.j)(kk, null, vF, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: kk => "disableBumpMap" in kk,
            get: kk => kk.disableBumpMap,
            set: (kk, Fk) => {
              kk.disableBumpMap = Fk
            }
          },
          metadata: Fk
        }, rI, DI), (0, Sk.j)(kk, null, EF, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "albedoTexture" in kk,
            get: kk => kk.albedoTexture,
            set: (kk, Fk) => {
              kk.albedoTexture = Fk
            }
          },
          metadata: Fk
        }, MI, kX), (0, Sk.j)(kk, null, OF, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "baseWeightTexture" in kk,
            get: kk => kk.baseWeightTexture,
            set: (kk, Fk) => {
              kk.baseWeightTexture = Fk
            }
          },
          metadata: Fk
        }, FX, IX), (0, Sk.j)(kk, null, nF, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "baseDiffuseRoughnessTexture" in kk,
            get: kk => kk.baseDiffuseRoughnessTexture,
            set: (kk, Fk) => {
              kk.baseDiffuseRoughnessTexture = Fk
            }
          },
          metadata: Fk
        }, XX, TX), (0, Sk.j)(kk, null, GF, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "ambientTexture" in kk,
            get: kk => kk.ambientTexture,
            set: (kk, Fk) => {
              kk.ambientTexture = Fk
            }
          },
          metadata: Fk
        }, iX, yX), (0, Sk.j)(kk, null, pF, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: kk => "ambientTextureStrength" in kk,
            get: kk => kk.ambientTextureStrength,
            set: (kk, Fk) => {
              kk.ambientTextureStrength = Fk
            }
          },
          metadata: Fk
        }, lX, aX), (0, Sk.j)(kk, null, uF, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: kk => "ambientTextureImpactOnAnalyticalLights" in kk,
            get: kk => kk.ambientTextureImpactOnAnalyticalLights,
            set: (kk, Fk) => {
              kk.ambientTextureImpactOnAnalyticalLights = Fk
            }
          },
          metadata: Fk
        }, qX, LX), (0, Sk.j)(kk, null, bF, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "opacityTexture" in kk,
            get: kk => kk.opacityTexture,
            set: (kk, Fk) => {
              kk.opacityTexture = Fk
            }
          },
          metadata: Fk
        }, tX, ZX), (0, Sk.j)(kk, null, RF, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "reflectionTexture" in kk,
            get: kk => kk.reflectionTexture,
            set: (kk, Fk) => {
              kk.reflectionTexture = Fk
            }
          },
          metadata: Fk
        }, jX, eX), (0, Sk.j)(kk, null, UF, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "emissiveTexture" in kk,
            get: kk => kk.emissiveTexture,
            set: (kk, Fk) => {
              kk.emissiveTexture = Fk
            }
          },
          metadata: Fk
        }, wX, HX), (0, Sk.j)(kk, null, CF, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "reflectivityTexture" in kk,
            get: kk => kk.reflectivityTexture,
            set: (kk, Fk) => {
              kk.reflectivityTexture = Fk
            }
          },
          metadata: Fk
        }, JX, xX), (0, Sk.j)(kk, null, NF, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "metallicTexture" in kk,
            get: kk => kk.metallicTexture,
            set: (kk, Fk) => {
              kk.metallicTexture = Fk
            }
          },
          metadata: Fk
        }, PX, KX), (0, Sk.j)(kk, null, cF, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: kk => "metallic" in kk,
            get: kk => kk.metallic,
            set: (kk, Fk) => {
              kk.metallic = Fk
            }
          },
          metadata: Fk
        }, QX, sX), (0, Sk.j)(kk, null, WF, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: kk => "roughness" in kk,
            get: kk => kk.roughness,
            set: (kk, Fk) => {
              kk.roughness = Fk
            }
          },
          metadata: Fk
        }, VX, zX), (0, Sk.j)(kk, null, fF, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: kk => "metallicF0Factor" in kk,
            get: kk => kk.metallicF0Factor,
            set: (kk, Fk) => {
              kk.metallicF0Factor = Fk
            }
          },
          metadata: Fk
        }, SX, oX), (0, Sk.j)(kk, null, BF, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "metallicReflectanceColor" in kk,
            get: kk => kk.metallicReflectanceColor,
            set: (kk, Fk) => {
              kk.metallicReflectanceColor = Fk
            }
          },
          metadata: Fk
        }, vX, EX), (0, Sk.j)(kk, null, dF, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "useOnlyMetallicFromMetallicReflectanceTexture" in kk,
            get: kk => kk.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (kk, Fk) => {
              kk.useOnlyMetallicFromMetallicReflectanceTexture = Fk
            }
          },
          metadata: Fk
        }, OX, nX), (0, Sk.j)(kk, null, YF, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "metallicReflectanceTexture" in kk,
            get: kk => kk.metallicReflectanceTexture,
            set: (kk, Fk) => {
              kk.metallicReflectanceTexture = Fk
            }
          },
          metadata: Fk
        }, GX, pX), (0, Sk.j)(kk, null, AF, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "reflectanceTexture" in kk,
            get: kk => kk.reflectanceTexture,
            set: (kk, Fk) => {
              kk.reflectanceTexture = Fk
            }
          },
          metadata: Fk
        }, uX, bX), (0, Sk.j)(kk, null, gF, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "microSurfaceTexture" in kk,
            get: kk => kk.microSurfaceTexture,
            set: (kk, Fk) => {
              kk.microSurfaceTexture = Fk
            }
          },
          metadata: Fk
        }, RX, UX), (0, Sk.j)(kk, null, mF, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "bumpTexture" in kk,
            get: kk => kk.bumpTexture,
            set: (kk, Fk) => {
              kk.bumpTexture = Fk
            }
          },
          metadata: Fk
        }, CX, NX), (0, Sk.j)(kk, null, hF, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "lightmapTexture" in kk,
            get: kk => kk.lightmapTexture,
            set: (kk, Fk) => {
              kk.lightmapTexture = Fk
            }
          },
          metadata: Fk
        }, cX, WX), (0, Sk.j)(kk, null, rF, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "ambientColor" in kk,
            get: kk => kk.ambientColor,
            set: (kk, Fk) => {
              kk.ambientColor = Fk
            }
          },
          metadata: Fk
        }, fX, BX), (0, Sk.j)(kk, null, DF, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "albedoColor" in kk,
            get: kk => kk.albedoColor,
            set: (kk, Fk) => {
              kk.albedoColor = Fk
            }
          },
          metadata: Fk
        }, dX, YX), (0, Sk.j)(kk, null, MF, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: kk => "baseWeight" in kk,
            get: kk => kk.baseWeight,
            set: (kk, Fk) => {
              kk.baseWeight = Fk
            }
          },
          metadata: Fk
        }, AX, gX), (0, Sk.j)(kk, null, kI, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: kk => "baseDiffuseRoughness" in kk,
            get: kk => kk.baseDiffuseRoughness,
            set: (kk, Fk) => {
              kk.baseDiffuseRoughness = Fk
            }
          },
          metadata: Fk
        }, mX, hX), (0, Sk.j)(kk, null, FI, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "reflectivityColor" in kk,
            get: kk => kk.reflectivityColor,
            set: (kk, Fk) => {
              kk.reflectivityColor = Fk
            }
          },
          metadata: Fk
        }, rX, DX), (0, Sk.j)(kk, null, II, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "reflectionColor" in kk,
            get: kk => kk.reflectionColor,
            set: (kk, Fk) => {
              kk.reflectionColor = Fk
            }
          },
          metadata: Fk
        }, MX, kT), (0, Sk.j)(kk, null, XI, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: kk => "emissiveColor" in kk,
            get: kk => kk.emissiveColor,
            set: (kk, Fk) => {
              kk.emissiveColor = Fk
            }
          },
          metadata: Fk
        }, FT, IT), (0, Sk.j)(kk, null, TI, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: kk => "microSurface" in kk,
            get: kk => kk.microSurface,
            set: (kk, Fk) => {
              kk.microSurface = Fk
            }
          },
          metadata: Fk
        }, XT, TT), (0, Sk.j)(kk, null, iI, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: kk => "useLightmapAsShadowmap" in kk,
            get: kk => kk.useLightmapAsShadowmap,
            set: (kk, Fk) => {
              kk.useLightmapAsShadowmap = Fk
            }
          },
          metadata: Fk
        }, iT, yT), (0, Sk.j)(kk, null, yI, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAlphaFromAlbedoTexture" in kk,
            get: kk => kk.useAlphaFromAlbedoTexture,
            set: (kk, Fk) => {
              kk.useAlphaFromAlbedoTexture = Fk
            }
          },
          metadata: Fk
        }, lT, aT), (0, Sk.j)(kk, null, lI, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: kk => "forceAlphaTest" in kk,
            get: kk => kk.forceAlphaTest,
            set: (kk, Fk) => {
              kk.forceAlphaTest = Fk
            }
          },
          metadata: Fk
        }, qT, LT), (0, Sk.j)(kk, null, aI, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: kk => "alphaCutOff" in kk,
            get: kk => kk.alphaCutOff,
            set: (kk, Fk) => {
              kk.alphaCutOff = Fk
            }
          },
          metadata: Fk
        }, tT, ZT), (0, Sk.j)(kk, null, qI, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "useSpecularOverAlpha" in kk,
            get: kk => kk.useSpecularOverAlpha,
            set: (kk, Fk) => {
              kk.useSpecularOverAlpha = Fk
            }
          },
          metadata: Fk
        }, jT, eT), (0, Sk.j)(kk, null, LI, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "useMicroSurfaceFromReflectivityMapAlpha" in kk,
            get: kk => kk.useMicroSurfaceFromReflectivityMapAlpha,
            set: (kk, Fk) => {
              kk.useMicroSurfaceFromReflectivityMapAlpha = Fk
            }
          },
          metadata: Fk
        }, wT, HT), (0, Sk.j)(kk, null, tI, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "useRoughnessFromMetallicTextureAlpha" in kk,
            get: kk => kk.useRoughnessFromMetallicTextureAlpha,
            set: (kk, Fk) => {
              kk.useRoughnessFromMetallicTextureAlpha = Fk
            }
          },
          metadata: Fk
        }, JT, xT), (0, Sk.j)(kk, null, ZI, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: kk => "useRoughnessFromMetallicTextureGreen" in kk,
            get: kk => kk.useRoughnessFromMetallicTextureGreen,
            set: (kk, Fk) => {
              kk.useRoughnessFromMetallicTextureGreen = Fk
            }
          },
          metadata: Fk
        }, PT, KT), (0, Sk.j)(kk, null, jI, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: kk => "useMetallnessFromMetallicTextureBlue" in kk,
            get: kk => kk.useMetallnessFromMetallicTextureBlue,
            set: (kk, Fk) => {
              kk.useMetallnessFromMetallicTextureBlue = Fk
            }
          },
          metadata: Fk
        }, QT, sT), (0, Sk.j)(kk, null, eI, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAmbientOcclusionFromMetallicTextureRed" in kk,
            get: kk => kk.useAmbientOcclusionFromMetallicTextureRed,
            set: (kk, Fk) => {
              kk.useAmbientOcclusionFromMetallicTextureRed = Fk
            }
          },
          metadata: Fk
        }, VT, zT), (0, Sk.j)(kk, null, wI, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAmbientInGrayScale" in kk,
            get: kk => kk.useAmbientInGrayScale,
            set: (kk, Fk) => {
              kk.useAmbientInGrayScale = Fk
            }
          },
          metadata: Fk
        }, ST, oT), (0, Sk.j)(kk, null, HI, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAutoMicroSurfaceFromReflectivityMap" in kk,
            get: kk => kk.useAutoMicroSurfaceFromReflectivityMap,
            set: (kk, Fk) => {
              kk.useAutoMicroSurfaceFromReflectivityMap = Fk
            }
          },
          metadata: Fk
        }, vT, ET), (0, Sk.j)(kk, null, JI, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: kk => "usePhysicalLightFalloff" in kk,
            get: kk => kk.usePhysicalLightFalloff
          },
          metadata: Fk
        }, null, WI), (0, Sk.j)(kk, null, xI, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: kk => "useGLTFLightFalloff" in kk,
            get: kk => kk.useGLTFLightFalloff
          },
          metadata: Fk
        }, null, WI), (0, Sk.j)(kk, null, PI, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: kk => "useRadianceOverAlpha" in kk,
            get: kk => kk.useRadianceOverAlpha,
            set: (kk, Fk) => {
              kk.useRadianceOverAlpha = Fk
            }
          },
          metadata: Fk
        }, OT, nT), (0, Sk.j)(kk, null, KI, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: kk => "useObjectSpaceNormalMap" in kk,
            get: kk => kk.useObjectSpaceNormalMap,
            set: (kk, Fk) => {
              kk.useObjectSpaceNormalMap = Fk
            }
          },
          metadata: Fk
        }, GT, pT), (0, Sk.j)(kk, null, QI, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: kk => "useParallax" in kk,
            get: kk => kk.useParallax,
            set: (kk, Fk) => {
              kk.useParallax = Fk
            }
          },
          metadata: Fk
        }, uT, bT), (0, Sk.j)(kk, null, sI, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: kk => "useParallaxOcclusion" in kk,
            get: kk => kk.useParallaxOcclusion,
            set: (kk, Fk) => {
              kk.useParallaxOcclusion = Fk
            }
          },
          metadata: Fk
        }, RT, UT), (0, Sk.j)(kk, null, VI, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: kk => "parallaxScaleBias" in kk,
            get: kk => kk.parallaxScaleBias,
            set: (kk, Fk) => {
              kk.parallaxScaleBias = Fk
            }
          },
          metadata: Fk
        }, CT, NT), (0, Sk.j)(kk, null, zI, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: kk => "disableLighting" in kk,
            get: kk => kk.disableLighting,
            set: (kk, Fk) => {
              kk.disableLighting = Fk
            }
          },
          metadata: Fk
        }, cT, WT), (0, Sk.j)(kk, null, SI, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: kk => "forceIrradianceInFragment" in kk,
            get: kk => kk.forceIrradianceInFragment,
            set: (kk, Fk) => {
              kk.forceIrradianceInFragment = Fk
            }
          },
          metadata: Fk
        }, fT, BT), (0, Sk.j)(kk, null, oI, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: kk => "maxSimultaneousLights" in kk,
            get: kk => kk.maxSimultaneousLights,
            set: (kk, Fk) => {
              kk.maxSimultaneousLights = Fk
            }
          },
          metadata: Fk
        }, dT, YT), (0, Sk.j)(kk, null, vI, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: kk => "invertNormalMapX" in kk,
            get: kk => kk.invertNormalMapX,
            set: (kk, Fk) => {
              kk.invertNormalMapX = Fk
            }
          },
          metadata: Fk
        }, AT, gT), (0, Sk.j)(kk, null, EI, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: kk => "invertNormalMapY" in kk,
            get: kk => kk.invertNormalMapY,
            set: (kk, Fk) => {
              kk.invertNormalMapY = Fk
            }
          },
          metadata: Fk
        }, mT, hT), (0, Sk.j)(kk, null, OI, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: kk => "twoSidedLighting" in kk,
            get: kk => kk.twoSidedLighting,
            set: (kk, Fk) => {
              kk.twoSidedLighting = Fk
            }
          },
          metadata: Fk
        }, rT, DT), (0, Sk.j)(kk, null, nI, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: kk => "useAlphaFresnel" in kk,
            get: kk => kk.useAlphaFresnel,
            set: (kk, Fk) => {
              kk.useAlphaFresnel = Fk
            }
          },
          metadata: Fk
        }, MT, ki), (0, Sk.j)(kk, null, GI, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: kk => "useLinearAlphaFresnel" in kk,
            get: kk => kk.useLinearAlphaFresnel,
            set: (kk, Fk) => {
              kk.useLinearAlphaFresnel = Fk
            }
          },
          metadata: Fk
        }, Fi, Ii), (0, Sk.j)(kk, null, pI, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: kk => "environmentBRDFTexture" in kk,
            get: kk => kk.environmentBRDFTexture,
            set: (kk, Fk) => {
              kk.environmentBRDFTexture = Fk
            }
          },
          metadata: Fk
        }, Xi, Ti), (0, Sk.j)(kk, null, uI, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: kk => "forceNormalForward" in kk,
            get: kk => kk.forceNormalForward,
            set: (kk, Fk) => {
              kk.forceNormalForward = Fk
            }
          },
          metadata: Fk
        }, ii, yi), (0, Sk.j)(kk, null, bI, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: kk => "enableSpecularAntiAliasing" in kk,
            get: kk => kk.enableSpecularAntiAliasing,
            set: (kk, Fk) => {
              kk.enableSpecularAntiAliasing = Fk
            }
          },
          metadata: Fk
        }, li, ai), (0, Sk.j)(kk, null, RI, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: kk => "useHorizonOcclusion" in kk,
            get: kk => kk.useHorizonOcclusion,
            set: (kk, Fk) => {
              kk.useHorizonOcclusion = Fk
            }
          },
          metadata: Fk
        }, qi, Li), (0, Sk.j)(kk, null, UI, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: kk => "useRadianceOcclusion" in kk,
            get: kk => kk.useRadianceOcclusion,
            set: (kk, Fk) => {
              kk.useRadianceOcclusion = Fk
            }
          },
          metadata: Fk
        }, ti, Zi), (0, Sk.j)(kk, null, CI, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: kk => "unlit" in kk,
            get: kk => kk.unlit,
            set: (kk, Fk) => {
              kk.unlit = Fk
            }
          },
          metadata: Fk
        }, ji, ei), (0, Sk.j)(kk, null, NI, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: kk => "applyDecalMapAfterDetailMap" in kk,
            get: kk => kk.applyDecalMapAfterDetailMap,
            set: (kk, Fk) => {
              kk.applyDecalMapAfterDetailMap = Fk
            }
          },
          metadata: Fk
        }, wi, Hi), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk.PBRMATERIAL_OPAQUE = VF.PBRMATERIAL_OPAQUE, kk.PBRMATERIAL_ALPHATEST = VF.PBRMATERIAL_ALPHATEST, kk.PBRMATERIAL_ALPHABLEND = VF.PBRMATERIAL_ALPHABLEND, kk.PBRMATERIAL_ALPHATESTANDBLEND = VF.PBRMATERIAL_ALPHATESTANDBLEND, kk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = VF.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, kk
    })();
    const UT = "KHR_materials_diffuse_transmission";

    function CT(kk, Fk) {
      const Ik = Fk.subSurface;
      let Xk = null;
      return Ik.translucencyIntensityTexture ? Xk = Ik.translucencyIntensityTexture : Ik.thicknessTexture && Ik.useMaskFromThicknessTexture && (Xk = Ik.thicknessTexture), Xk && !Ik.useGltfStyleTextures ? (Ek.e.Warn(`${kk}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${Fk.name}`, 1), null) : Xk
    }
    class NT {
      constructor(kk) {
        this.name = UT, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        const Xk = [];
        if (Ik instanceof RT && this._isExtensionEnabled(Ik)) {
          const Fk = CT(kk, Ik);
          return Fk && Xk.push(Fk), Ik.subSurface.translucencyColorTexture && Xk.push(Ik.subSurface.translucencyColorTexture), Xk
        }
        return Xk
      }
      _isExtensionEnabled(kk) {
        if (kk.unlit) return !1;
        const Fk = kk.subSurface;
        return !!Fk.isTranslucencyEnabled && (!kk.unlit && !Fk.useAlbedoToTintTranslucency && Fk.useGltfStyleTextures && 1 === Fk.volumeIndexOfRefraction && 0 === Fk.minimumThickness && 0 === Fk.maximumThickness)
      }
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((Xk => {
          if (Ik instanceof RT && this._isExtensionEnabled(Ik)) {
            this._wasUsed = !0;
            const Xk = Ik.subSurface,
              Tk = CT(kk, Ik),
              ik = 0 == Xk.translucencyIntensity ? void 0 : Xk.translucencyIntensity,
              yk = this._exporter._materialExporter.getTextureInfo(Tk) ?? void 0,
              lk = !Xk.translucencyColor || Xk.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Xk.translucencyColor.iXk(),
              ak = this._exporter._materialExporter.getTextureInfo(Xk.translucencyColorTexture) ?? void 0,
              qk = {
                diffuseTransmissionFactor: ik,
                diffuseTransmissionTexture: yk,
                diffuseTransmissionColorFactor: lk,
                diffuseTransmissionColorTexture: ak
              };
            (yk || ak) && this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions = Fk.extensions || {}, Fk.extensions[UT] = qk
          }
          Xk(Fk)
        }))
      }
    }
    let cT = !1;

    function WT() {
      cT || (cT = !0, bX.RegisterExtension(UT, (kk => new NT(kk))))
    }
    WT();
    const fT = "KHR_materials_dispersion";
    class BT {
      constructor() {
        this.name = fT, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(kk) {
        if (kk.unlit) return !1;
        const Fk = kk.subSurface;
        return !(!Fk.isRefractionEnabled && !Fk.isDispersionEnabled)
      }
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((kk => {
          if (Ik instanceof RT && this._isExtensionEnabled(Ik)) {
            this._wasUsed = !0;
            const kk = {
              dispersion: Ik.subSurface.dispersion
            };
            Fk.extensions = Fk.extensions || {}, Fk.extensions[fT] = kk
          }
          kk(Fk)
        }))
      }
    }
    let dT = !1;

    function YT() {
      dT || (dT = !0, bX.RegisterExtension(fT, (() => new BT)))
    }
    YT();
    const AT = "KHR_materials_emissive_strength";
    class gT {
      constructor() {
        this.name = AT, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(kk, Fk, Ik) {
        return await new Promise((kk => {
          if (!(Ik instanceof RT)) return kk(Fk);
          const Xk = Ik.emissiveColor.scale(Ik.emissiveIntensity),
            Tk = Math.max(...Xk.iXk());
          if (Tk > 1) {
            Fk.emissiveFactor = Xk.scale(1 / Tk).iXk(), this._wasUsed = !0;
            const kk = {
              emissiveStrength: Tk
            };
            Fk.extensions || (Fk.extensions = {}), Fk.extensions[AT] = kk
          } else Fk.emissiveFactor = Xk.iXk();
          return kk(Fk)
        }))
      }
    }
    let mT = !1;

    function hT() {
      mT || (mT = !0, bX.RegisterExtension(AT, (() => new gT)))
    }
    hT();
    const rT = "KHR_materials_ior";
    class DT {
      constructor() {
        this.name = rT, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(kk) {
        return !kk.unlit && (kk instanceof MF ? 1.5 != kk.specularIor : kk instanceof RT && (void 0 != kk.indexOfRefraction && 1.5 != kk.indexOfRefraction))
      }
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((kk => {
          if (Ik instanceof RT && this._isExtensionEnabled(Ik)) {
            this._wasUsed = !0;
            const kk = {
              ior: Ik.indexOfRefraction
            };
            Fk.extensions = Fk.extensions || {}, Fk.extensions[rT] = kk
          } else if (Ik instanceof MF && this._isExtensionEnabled(Ik)) {
            this._wasUsed = !0;
            const kk = {
              ior: Ik.specularIor
            };
            Fk.extensions = Fk.extensions || {}, Fk.extensions[rT] = kk
          }
          kk(Fk)
        }))
      }
    }
    let MT = !1;

    function ki() {
      MT || (MT = !0, bX.RegisterExtension(rT, (() => new DT)))
    }
    ki();
    const Fi = "KHR_materials_iridescence";
    class Ii {
      constructor(kk) {
        this.name = Fi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        const Xk = [];
        if (Ik instanceof VF) {
          if (Ik.iridescence.isEnabled) return Ik.iridescence.texture && Xk.push(Ik.iridescence.texture), Ik.iridescence.thicknessTexture && Ik.iridescence.thicknessTexture !== Ik.iridescence.texture && Xk.push(Ik.iridescence.thicknessTexture), Xk
        } else if (Ik instanceof MF && Ik.thinFilmWeight > 0) return Ik.thinFilmWeightTexture && Xk.push(Ik.thinFilmWeightTexture), Ik.thinFilmThicknessTexture && Ik.thinFilmThicknessTexture !== Ik.thinFilmWeightTexture && Xk.push(Ik.thinFilmThicknessTexture), Xk;
        return []
      }
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((kk => {
          if (Ik instanceof VF) {
            if (!Ik.iridescence.isEnabled) return void kk(Fk);
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            const Xk = this._exporter._materialExporter.getTextureInfo(Ik.iridescence.texture),
              Tk = this._exporter._materialExporter.getTextureInfo(Ik.iridescence.thicknessTexture),
              ik = {
                iridescenceFactor: Ik.iridescence.intensity,
                iridescenceIor: Ik.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: Ik.iridescence.minimumThickness,
                iridescenceThicknessMaximum: Ik.iridescence.maximumThickness,
                iridescenceTexture: Xk ?? void 0,
                iridescenceThicknessTexture: Tk ?? void 0
              };
            null === ik.iridescenceTexture && null === ik.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions[Fi] = ik
          } else if (Ik instanceof MF) {
            if (Ik.thinFilmWeight <= 0) return void kk(Fk);
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            const Xk = this._exporter._materialExporter.getTextureInfo(Ik.thinFilmWeightTexture),
              Tk = this._exporter._materialExporter.getTextureInfo(Ik.thinFilmThicknessTexture),
              ik = {
                iridescenceFactor: Ik.thinFilmWeight,
                iridescenceIor: Ik.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * Ik.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * Ik.thinFilmThickness,
                iridescenceTexture: Xk ?? void 0,
                iridescenceThicknessTexture: Tk ?? void 0
              };
            null === ik.iridescenceTexture && null === ik.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions[Fi] = ik
          }
          kk(Fk)
        }))
      }
    }
    let Xi = !1;

    function Ti() {
      Xi || (Xi = !0, bX.RegisterExtension(Fi, (kk => new Ii(kk))))
    }
    Ti();
    const ii = "KHR_materials_sheen";
    class yi {
      constructor(kk) {
        this.name = ii, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        return Ik instanceof RT && Ik.sheen.isEnabled && Ik.sheen.texture ? [Ik.sheen.texture] : []
      }
      async postExportMaterialAsync(kk, Fk, Ik) {
        return await new Promise((kk => {
          if (Ik instanceof RT) {
            if (!Ik.sheen.isEnabled) return void kk(Fk);
            this._wasUsed = !0, null == Fk.extensions && (Fk.extensions = {});
            const Xk = {
              sheenColorFactor: Ik.sheen.color.iXk(),
              sheenRoughnessFactor: Ik.sheen.roughness ?? 0
            };
            null === Xk.sheenColorTexture && null === Xk.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Ik), Ik.sheen.texture && (Xk.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(Ik.sheen.texture) ?? void 0), Ik.sheen.textureRoughness && !Ik.sheen.useRoughnessFromMainTexture ? Xk.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Ik.sheen.textureRoughness) ?? void 0 : Ik.sheen.texture && Ik.sheen.useRoughnessFromMainTexture && (Xk.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Ik.sheen.texture) ?? void 0), Fk.extensions[ii] = Xk
          }
          kk(Fk)
        }))
      }
    }
    let li = !1;

    function ai() {
      li || (li = !0, bX.RegisterExtension(ii, (kk => new yi(kk))))
    }
    ai();
    const qi = "KHR_materials_fuzz";

    function Li(kk, Fk) {
      const Ik = new nk.g(Fk.name, Fk.mG());
      return Ik._texture = kk, Ik.coordinatesIndex = Fk.coordinatesIndex, Fk instanceof nk.g && (Ik.uOffset = Fk.uOffset, Ik.vOffset = Fk.vOffset, Ik.uScale = Fk.uScale, Ik.vScale = Fk.vScale, Ik.wAng = Fk.wAng), Ik.wrapU = Fk.wrapU, Ik.wrapV = Fk.wrapV, Ik
    }
    class ti {
      constructor(kk) {
        this.name = qi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = kk
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
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        if (Ik instanceof MF) {
          const kk = [];
          if (Ik.fuzzWeight > 0) {
            Ik.fuzzWeightTexture && kk.push(Ik.fuzzWeightTexture);
            let Fk = !1;
            if (Ik.fuzzRoughnessTexture && (Ik._useFuzzRoughnessFromTextureAlpha ? kk.push(Ik.fuzzRoughnessTexture) : Fk = !0), Ik.fuzzColorTexture && !Fk && kk.push(Ik.fuzzColorTexture), Fk) {
              const Fk = function(kk) {
                const Fk = kk.fuzzColorTexture,
                  Ik = Fk && Fk.getInternalTexture() ? Fk.getInternalTexture().uniqueId : "NoFuzzColor",
                  Xk = kk.fuzzRoughnessTexture;
                return `FuzzColor_${Ik}_FuzzRoughness_${Xk&&Xk.getInternalTexture()?Xk.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(Ik);
              if (!this._cachedInternalTexturesMap[Fk]) {
                const kk = await async function(kk) {
                  const Fk = kk.mG(),
                    Ik = kk.fuzzColorTexture,
                    Xk = kk.fuzzRoughnessTexture;
                  return Ik || Xk ? (await lI("FuzzTexture", LI(Ik ? aI(Ik, 0) : qI(1), Ik ? aI(Ik, 1) : qI(1), Ik ? aI(Ik, 2) : qI(1), Xk ? aI(Xk, kk._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : qI(1)), Fk)).getInternalTexture() : null
                }(Ik);
                kk && (this._cachedInternalTexturesMap[Fk] = kk)
              }
              this._cachedInternalTexturesMap[Fk] && (Ik.fuzzColorTexture && (this._mergedTexturesMap[Ik.fuzzColorTexture.uniqueId] = Li(this._cachedInternalTexturesMap[Fk], Ik.fuzzColorTexture), kk.push(this._mergedTexturesMap[Ik.fuzzColorTexture.uniqueId])), Ik.fuzzRoughnessTexture && (this._mergedTexturesMap[Ik.fuzzRoughnessTexture.uniqueId] = Li(this._cachedInternalTexturesMap[Fk], Ik.fuzzRoughnessTexture), kk.push(this._mergedTexturesMap[Ik.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return kk
        }
        return []
      }
      async postExportMaterialAsync(kk, Fk, Ik) {
        return await new Promise((kk => {
          if (Ik instanceof MF) {
            if (0 == Ik.fuzzWeight) return void kk(Fk);
            this._wasUsed = !0, null == Fk.extensions && (Fk.extensions = {});
            const Xk = {
              fuzzFactor: Ik.fuzzWeight,
              fuzzColorFactor: Ik.fuzzColor.iXk(),
              fuzzRoughnessFactor: Ik.fuzzRoughness
            };
            let Tk, ik;
            Ik.fuzzWeightTexture && (Xk.fuzzTexture = this._exporter._materialExporter.getTextureInfo(Ik.fuzzWeightTexture) ?? void 0), Ik.fuzzColorTexture && (Tk = this._mergedTexturesMap[Ik.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[Ik.fuzzColorTexture.uniqueId] : Ik.fuzzColorTexture, Xk.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Tk) ?? void 0), Ik.fuzzRoughnessTexture && (ik = this._mergedTexturesMap[Ik.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Ik.fuzzRoughnessTexture.uniqueId] : Ik.fuzzRoughnessTexture, Xk.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ik) ?? void 0), null === Xk.fuzzColorTexture && null === Xk.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions[qi] = Xk
          }
          kk(Fk)
        }))
      }
    }
    let Zi = !1;

    function ji() {
      Zi || (Zi = !0, bX.RegisterExtension(qi, (kk => new ti(kk))))
    }
    ji();
    const ei = "KHR_materials_specular";
    class wi {
      constructor(kk) {
        this.name = ei, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        const Xk = [];
        return Ik instanceof RT && this._isExtensionEnabled(Ik) ? (Ik.metallicReflectanceTexture && Xk.push(Ik.metallicReflectanceTexture), Ik.reflectanceTexture && Xk.push(Ik.reflectanceTexture), Xk) : Xk
      }
      _isExtensionEnabled(kk) {
        return !kk.unlit && (void 0 != kk.metallicF0Factor && 1 != kk.metallicF0Factor || void 0 != kk.metallicReflectanceColor && !kk.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(kk))
      }
      _hasTexturesExtension(kk) {
        return null != kk.metallicReflectanceTexture || null != kk.reflectanceTexture
      }
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((kk => {
          var Xk;
          if (Ik instanceof RT && this._isExtensionEnabled(Ik)) {
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            const kk = this._exporter._materialExporter.getTextureInfo(Ik.metallicReflectanceTexture) ?? void 0,
              Xk = this._exporter._materialExporter.getTextureInfo(Ik.reflectanceTexture) ?? void 0,
              Tk = {
                specularFactor: 1 == Ik.metallicF0Factor ? void 0 : Ik.metallicF0Factor,
                specularTexture: kk,
                specularColorFactor: Ik.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : Ik.metallicReflectanceColor.iXk(),
                specularColorTexture: Xk
              };
            this._hasTexturesExtension(Ik) && this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions[ei] = Tk
          } else if (Ik instanceof MF) {
            Fk.extensions = Fk.extensions || {};
            const Tk = this._exporter._materialExporter.getTextureInfo(Ik.specularWeightTexture) ?? void 0,
              ik = this._exporter._materialExporter.getTextureInfo(Ik.specularColorTexture) ?? void 0,
              yk = 1 == Ik.specularWeight ? void 0 : Ik.specularWeight,
              lk = Ik.specularColor.equalsFloats(1, 1, 1) ? void 0 : Ik.specularColor.iXk();
            if (!ik && !Tk && void 0 === yk && void 0 === lk) return kk(Fk);
            this._wasUsed = !0;
            const ak = {
                specularEdgeColorEnabled: !0
              },
              qk = {
                specularFactor: yk,
                specularTexture: Tk,
                specularColorFactor: lk,
                specularColorTexture: ik,
                extensions: {}
              };
            qk.extensions.EXT_materials_specular_edge_color = ak, (Xk = this._exporter._glTF).extensionsUsed || (Xk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Tk || ik) && this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions[ei] = qk
          }
          kk(Fk)
        }))
      }
    }
    let Hi = !1;

    function Ji() {
      Hi || (Hi = !0, bX.RegisterExtension(ei, (kk => new wi(kk))))
    }
    Ji();
    const xi = "KHR_materials_transmission";
    class Pi {
      constructor(kk) {
        this.name = xi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        const Xk = [];
        if (Ik instanceof RT) {
          if (this._isExtensionEnabled(Ik)) return Ik.subSurface.refractionIntensityTexture && Ik.subSurface.useGltfStyleTextures && Xk.push(Ik.subSurface.refractionIntensityTexture), Xk
        } else Ik instanceof MF && (Ik.transmissionWeight > 0 && Ik.transmissionWeightTexture && (Xk.push(Ik.transmissionWeightTexture), Ik.transmissionColorTexture && Xk.push(Ik.transmissionColorTexture)), Ik.subsurfaceWeight > 0 && Ik.subsurfaceWeightTexture && Xk.push(Ik.subsurfaceWeightTexture));
        return Xk
      }
      _isExtensionEnabled(kk) {
        if (kk instanceof MF && !kk.unlit) return kk.transmissionWeight > 0 || kk.subsurfaceWeight > 0;
        if (kk instanceof RT && !kk.unlit) {
          const Fk = kk.subSurface;
          return Fk.isRefractionEnabled && void 0 != Fk.refractionIntensity && 0 != Fk.refractionIntensity || null != Fk.refractionIntensityTexture && Fk.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(kk, Fk, Ik) {
        if (!this._isExtensionEnabled(Ik)) return Fk;
        if (Ik instanceof RT) {
          this._wasUsed = !0;
          const Xk = Ik.subSurface,
            Tk = {
              transmissionFactor: 0 === Xk.refractionIntensity ? void 0 : Xk.refractionIntensity
            };
          if (Xk.refractionIntensityTexture)
            if (Xk.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(Ik);
              const kk = this._exporter._materialExporter.getTextureInfo(Xk.refractionIntensityTexture);
              kk && (Tk.transmissionTexture = kk)
            } else Ek.e.Warn(`${kk}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          Fk.extensions || (Fk.extensions = {}), Fk.extensions[xi] = Tk
        } else if (Ik instanceof MF) {
          this._wasUsed = !0;
          const kk = {
            transmissionFactor: (1 - Ik.transmissionWeight) * Ik.subsurfaceWeight + Ik.transmissionWeight
          };
          if (Ik.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Ik);
            const Fk = this._exporter._materialExporter.getTextureInfo(Ik.transmissionWeightTexture);
            Fk && (kk.transmissionTexture = Fk)
          } else if (Ik.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Ik);
            const Fk = this._exporter._materialExporter.getTextureInfo(Ik.subsurfaceWeightTexture);
            Fk && (kk.transmissionTexture = Fk)
          }
          if (0 == Ik.transmissionDepth && (!Ik.transmissionColor.equals(Ak.e.White()) || Ik.transmissionColorTexture) && Fk.pbrMetallicRoughness && (Fk.pbrMetallicRoughness.baseColorFactor || (Fk.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), Fk.pbrMetallicRoughness.baseColorFactor[0] *= Ik.transmissionColor.r, Fk.pbrMetallicRoughness.baseColorFactor[1] *= Ik.transmissionColor.g, Fk.pbrMetallicRoughness.baseColorFactor[2] *= Ik.transmissionColor.b, Ik.transmissionColorTexture && !Fk.pbrMetallicRoughness.baseColorTexture)) {
            const kk = this._exporter._materialExporter.getTextureInfo(Ik.transmissionColorTexture);
            kk && (Fk.pbrMetallicRoughness.baseColorTexture = kk, this._exporter._materialNeedsUVsSet.add(Ik))
          }
          Fk.extensions || (Fk.extensions = {}), Fk.extensions[xi] = kk
        }
        return Fk
      }
    }
    let Ki = !1;

    function Qi() {
      Ki || (Ki = !0, bX.RegisterExtension(xi, (kk => new Pi(kk))))
    }
    Qi();
    var si = Ik(40277);
    const Vi = "KHR_materials_unlit";
    class zi {
      constructor() {
        this.name = Vi, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((kk => {
          let Xk = !1;
          Ik instanceof RT ? Xk = Ik.unlit : Ik instanceof si.e && (Xk = Ik.disableLighting), Xk && (this._wasUsed = !0, null == Fk.extensions && (Fk.extensions = {}), Fk.extensions[Vi] = {}), kk(Fk)
        }))
      }
    }
    let Si = !1;

    function oi() {
      Si || (Si = !0, bX.RegisterExtension(Vi, (() => new zi)))
    }
    oi();
    const vi = "KHR_materials_volume";
    class Ei {
      constructor(kk) {
        this.name = vi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        const Xk = [];
        if (Ik instanceof RT) {
          if (this._isExtensionEnabled(Ik)) return Ik.subSurface.thicknessTexture && Xk.push(Ik.subSurface.thicknessTexture), Xk
        } else Ik instanceof MF && (Ik.transmissionWeight > 0 || Ik.subsurfaceWeight > 0) && Ik.geometryThicknessTexture && Xk.push(Ik.geometryThicknessTexture);
        return Xk
      }
      _isExtensionEnabled(kk) {
        if (kk.unlit) return !1;
        const Fk = kk.subSurface;
        return !(!Fk.isRefractionEnabled && !Fk.isTranslucencyEnabled) && (void 0 != Fk.maximumThickness && 0 != Fk.maximumThickness || void 0 != Fk.tintColorAtDistance && Fk.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Fk.tintColor && Fk.tintColor != Ak.e.White() || this._hasTexturesExtension(kk))
      }
      _hasTexturesExtension(kk) {
        return null != kk.subSurface.thicknessTexture
      }
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((kk => {
          if (Ik instanceof RT && this._isExtensionEnabled(Ik)) {
            this._wasUsed = !0;
            const kk = Ik.subSurface,
              Xk = {
                thicknessFactor: 0 == kk.maximumThickness ? void 0 : kk.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(kk.thicknessTexture) ?? void 0,
                attenuationDistance: kk.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : kk.tintColorAtDistance,
                attenuationColor: kk.tintColor.equalsFloats(1, 1, 1) ? void 0 : kk.tintColor.iXk()
              };
            this._hasTexturesExtension(Ik) && this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions = Fk.extensions || {}, Fk.extensions[vi] = Xk
          } else if (Ik instanceof MF) {
            const kk = Ik.transmissionWeight > 0 && !Ik.geometryThinWalled,
              Xk = Ik.subsurfaceWeight > 0 && !Ik.geometryThinWalled;
            if (kk || Xk) {
              this._wasUsed = !0;
              const Tk = Ik.geometryThickness,
                ik = this._exporter._materialExporter.getTextureInfo(Ik.geometryThicknessTexture) ?? void 0;
              let yk;
              ik && this._exporter._materialNeedsUVsSet.add(Ik);
              const lk = Ak.e.White().iXk();
              if (kk && Ik.transmissionDepth > 0) {
                const kk = 1 / Ik.transmissionDepth;
                let Fk = new Nk.t(-Math.log(Ik.transmissionColor.r) * kk, -Math.log(Ik.transmissionColor.g) * kk, -Math.log(Ik.transmissionColor.b) * kk);
                const Xk = new Nk.t(Ik.transmissionScatter.r * kk, Ik.transmissionScatter.g * kk, Ik.transmissionScatter.b * kk),
                  Tk = Fk.subtract(Xk),
                  ik = Math.min(Tk.x, Tk.y, Tk.z);
                ik < 0 && (Tk.x = Tk.x - ik, Tk.y = Tk.y - ik, Tk.z = Tk.z - ik), Fk = Tk.add(Xk);
                yk = 1 / Math.max(Fk.x, Fk.y, Fk.z), lk[0] = Math.exp(-Fk.x * yk), lk[1] = Math.exp(-Fk.y * yk), lk[2] = Math.exp(-Fk.z * yk)
              } else yk = Number.MAX_VALUE, lk[0] = 1, lk[1] = 1, lk[2] = 1;
              let ak = 1;
              const qk = Ak.e.White().iXk();
              if (Xk) {
                const kk = Ik.subsurfaceRadius,
                  Fk = Ik.subsurfaceRadiusScale,
                  Xk = new Nk.t(Fk.r, Fk.g, Fk.b).multiplyByFloats(kk, kk, kk),
                  Tk = new Nk.t(1 / Math.max(Xk.x, 1e-6), 1 / Math.max(Xk.y, 1e-6), 1 / Math.max(Xk.z, 1e-6));
                ak = 1 / Math.max(Tk.x, Tk.y, Tk.z), qk[0] = Math.exp(-Tk.x * ak), qk[1] = Math.exp(-Tk.y * ak), qk[2] = Math.exp(-Tk.z * ak)
              }
              const Lk = (1 - Ik.transmissionWeight) * Ik.subsurfaceWeight,
                tk = Lk + Ik.transmissionWeight,
                Zk = 1 / Math.max(tk, 1e-6),
                jk = Ik.transmissionWeight * Zk,
                ek = Lk * Zk,
                wk = lk.map(((kk, Fk) => kk * jk + qk[Fk] * ek)),
                Hk = {
                  thicknessFactor: Tk,
                  thicknessTexture: ik,
                  attenuationDistance: yk * jk + ak * ek,
                  attenuationColor: wk
                };
              Fk.extensions = Fk.extensions || {}, Fk.extensions[vi] = Hk
            }
          }
          kk(Fk)
        }))
      }
    }
    let Oi = !1;

    function ni() {
      Oi || (Oi = !0, bX.RegisterExtension(vi, (kk => new Ei(kk))))
    }
    ni();
    const Gi = "KHR_materials_volume_scatter";
    class ui {
      constructor(kk) {
        this.name = Gi, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        const Xk = [];
        return Ik instanceof MF && (Ik.transmissionWeight > 0 && Ik.transmissionScatterTexture && Xk.push(Ik.transmissionScatterTexture), Ik.subsurfaceWeight > 0 && Ik.subsurfaceColorTexture && Xk.push(Ik.subsurfaceColorTexture)), Xk
      }
      _isExtensionEnabled(kk) {
        if (kk.unlit) return !1;
        const Fk = kk.transmissionWeight > 0 && !kk.geometryThinWalled && kk.transmissionDepth > 0 && !kk.transmissionScatter.equals(Ak.e.Black()),
          Ik = kk.subsurfaceWeight > 0 && !kk.geometryThinWalled;
        return !(!Fk && !Ik)
      }
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((kk => {
          if (Ik instanceof MF && this._isExtensionEnabled(Ik)) {
            this._wasUsed = !0;
            let kk = Nk.t.Zero(),
              Xk = 0;
            if (Ik.transmissionWeight > 0) {
              kk = function(kk) {
                const Fk = new Nk.t(Math.sqrt(1 - kk.x), Math.sqrt(1 - kk.y), Math.sqrt(1 - kk.z)),
                  Ik = new Nk.t(1, 1, 1),
                  Xk = Ik.subtract(Fk),
                  Tk = Ik.subtract(new Nk.t(.139, .139, .139).multiplyInPlace(Fk)),
                  ik = Ik.add(new Nk.t(1.17, 1.17, 1.17).multiplyInPlace(Fk));
                return Xk.multiplyInPlace(Tk).divideInPlace(ik)
              }(new Nk.t(Ik.transmissionScatter.r, Ik.transmissionScatter.g, Ik.transmissionScatter.b)), Xk = Ik.transmissionScatterAnisotropy
            }
            const Tk = Nk.t.Zero();
            let ik = 0;
            Ik.subsurfaceWeight > 0 && (Tk.set(Ik.subsurfaceColor.r, Ik.subsurfaceColor.g, Ik.subsurfaceColor.b), ik = Ik.subsurfaceScatterAnisotropy);
            const yk = (1 - Ik.transmissionWeight) * Ik.subsurfaceWeight,
              lk = yk + Ik.transmissionWeight,
              ak = 1 / Math.max(lk, 1e-6),
              qk = Ik.transmissionWeight * ak,
              Lk = yk * ak,
              tk = {
                multiscatterColorFactor: kk.multiplyByFloats(qk, qk, qk).addInPlace(Tk.multiplyByFloats(Lk, Lk, Lk)).iXk(),
                scatterAnisotropy: Xk * qk + ik * Lk
              };
            if (Ik.subsurfaceWeight > 0 && Ik.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(Ik);
              const kk = this._exporter._materialExporter.getTextureInfo(Ik.subsurfaceColorTexture);
              kk && (tk.multiscatterColorTexture = kk)
            } else if (Ik.transmissionWeight > 0 && Ik.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(Ik);
              const kk = this._exporter._materialExporter.getTextureInfo(Ik.transmissionScatterTexture);
              kk && (tk.multiscatterColorTexture = kk)
            }
            Fk.extensions = Fk.extensions || {}, Fk.extensions[Gi] = tk
          }
          kk(Fk)
        }))
      }
    }
    let bi = !1;

    function Ri() {
      bi || (bi = !0, bX.RegisterExtension(Gi, (kk => new ui(kk)), 101))
    }
    Ri();
    const Ui = "KHR_materials_diffuse_roughness";
    class Ci {
      constructor(kk) {
        this.name = Ui, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Ik) {
        const Xk = [];
        if (Ik instanceof VF) {
          if (Ik._baseDiffuseRoughness) return Ik._baseDiffuseRoughnessTexture && Xk.push(Ik._baseDiffuseRoughnessTexture), Xk
        } else if (Ik instanceof MF && Ik.baseDiffuseRoughness) return Ik.baseDiffuseRoughnessTexture && Xk.push(Ik.baseDiffuseRoughnessTexture), Xk;
        return []
      }
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((kk => {
          let Xk = null,
            Tk = null;
          if (Ik instanceof VF ? (Xk = Ik._baseDiffuseRoughness, Tk = Ik._baseDiffuseRoughnessTexture) : Ik instanceof MF && (Xk = Ik.baseDiffuseRoughness, Tk = Ik.baseDiffuseRoughnessTexture), !Xk) return void kk(Fk);
          this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
          const ik = {
            diffuseRoughnessFactor: Xk,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Tk) ?? void 0
          };
          null !== ik.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(Ik), Fk.extensions[Ui] = ik, kk(Fk)
        }))
      }
    }
    let Ni = !1;

    function ci() {
      Ni || (Ni = !0, bX.RegisterExtension(Ui, (kk => new Ci(kk))))
    }
    ci();
    const Wi = "KHR_materials_openpbr";
    class fi {
      constructor() {
        this.name = Wi, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(kk, Fk, Ik) {
        return new Promise((kk => {
          Ik instanceof MF && (this._wasUsed = !0, Fk.extensions = Fk.extensions || {}, Fk.extensions[Wi] = {}), kk(Fk)
        }))
      }
    }
    let Bi = !1;

    function di() {
      Bi || (Bi = !0, bX.RegisterExtension(Wi, (() => new fi)))
    }
    di();
    const Yi = "KHR_texture_transform";
    class Ai {
      constructor() {
        this.name = Yi, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(kk, Fk, Ik) {
        if (Ik.mG() || SF.h.Warn(`${kk}: "scene" is not defined for Babylon texture ${Ik.name}!`), (0 !== Ik.uAng || 0 !== Ik.vAng) && (SF.h.Warn(`${kk}: Texture ${Ik.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== Ik.uRotationCenter || 0 !== Ik.vRotationCenter)) return;
        const Xk = {};
        let Tk = !1;
        if (0 === Ik.uOffset && 0 === Ik.vOffset || (Xk.offset = [Ik.uOffset, Ik.vOffset], Tk = !0), 1 === Ik.uScale && 1 === Ik.vScale || (Xk.scale = [Ik.uScale, Ik.vScale], Tk = !0), 0 !== Ik.wAng) {
          if (0 !== Ik.uRotationCenter || 0 !== Ik.vRotationCenter) {
            if (Ik.homogeneousRotationInUVTransform && Ik.uScale !== Ik.vScale) return void SF.h.Warn(`${kk}: Texture ${Ik.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${Yi}.`);
            SF.h.Warn(`${kk}: Texture ${Ik.name} with non-origin rotation center will be exported using an adjusted offset with ${Yi}.`), Xk.offset = function(kk) {
              const {
                uOffset: Fk,
                vOffset: Ik,
                uRotationCenter: Xk,
                vRotationCenter: Tk,
                uScale: ik,
                vScale: yk,
                wAng: lk
              } = kk, ak = Math.cos(lk), qk = Math.sin(lk), Lk = Xk * ik, tk = Tk * yk;
              return [Fk + (Lk * (1 - ak) + tk * qk), Ik + (tk * (1 - ak) - Lk * qk)]
            }(Ik)
          }
          Xk.rotation = -Ik.wAng, Tk = !0
        }
        0 !== Ik.coordinatesIndex && (Xk.texCoord = Ik.coordinatesIndex, Tk = !0), Tk && (this._wasUsed = !0, Fk.extensions || (Fk.extensions = {}), Fk.extensions[Yi] = Xk)
      }
    }
    let gi = !1;

    function mi() {
      gi || (gi = !0, bX.RegisterExtension(Yi, (() => new Ai)))
    }
    mi();
    var ri = Ik(40038);
    const Di = "KHR_texture_basisu";
    class Mi {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(kk) {
        this.name = Di, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      postExportTexture(kk, Fk) {
        const Ik = this._exporter._textures[Fk.index],
          Xk = Ik.source;
        if (void 0 === Xk) return;
        const Tk = this._exporter._images[Xk];
        "image/ktx2" === (Tk.mimeType || (0, ri.l)(Tk.uri)) && (Ik.source = void 0, Ik.extensions || (Ik.extensions = {}), Ik.extensions[Di] = {
          source: Xk
        }, this._wasUsed = !0)
      }
    }
    let ky = !1;

    function Fy() {
      ky || (ky = !0, bX.RegisterExtension(Di, (kk => new Mi(kk))))
    }
    Fy();
    const Iy = "EXT_texture_webp";
    class Xy {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(kk) {
        this.name = Iy, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      postExportTexture(kk, Fk) {
        const Ik = this._exporter._textures[Fk.index],
          Xk = Ik.source;
        if (void 0 === Xk) return;
        const Tk = this._exporter._images[Xk];
        "image/webp" === (Tk.mimeType || (0, ri.l)(Tk.uri)) && (Ik.source = void 0, Ik.extensions || (Ik.extensions = {}), Ik.extensions[Iy] = {
          source: Xk
        }, this._wasUsed = !0)
      }
    }
    let Ty = !1;

    function iy() {
      Ty || (Ty = !0, bX.RegisterExtension(Iy, (kk => new Xy(kk))))
    }
    iy();
    const yy = "EXT_texture_avif";
    class ly {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(kk) {
        this.name = yy, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      postExportTexture(kk, Fk) {
        const Ik = this._exporter._textures[Fk.index],
          Xk = Ik.source;
        if (void 0 === Xk) return;
        const Tk = this._exporter._images[Xk];
        "image/avif" === (Tk.mimeType || (0, ri.l)(Tk.uri)) && (Ik.source = void 0, Ik.extensions || (Ik.extensions = {}), Ik.extensions[yy] = {
          source: Xk
        }, this._wasUsed = !0)
      }
    }
    let ay = !1;

    function qy() {
      ay || (ay = !0, bX.RegisterExtension(yy, (kk => new ly(kk))))
    }
    qy();
    class Ly {
      static CreateSTL(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ik = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          yk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          lk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          ak = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const qk = function(kk, Fk, Ik) {
            const Tk = [3 * kk[Ik], 3 * kk[Ik + 1], 3 * kk[Ik + 2]],
              ik = [new Xk.Ge(Fk[Tk[0]], Fk[Tk[0] + 2], Fk[Tk[0] + 1]), new Xk.Ge(Fk[Tk[1]], Fk[Tk[1] + 2], Fk[Tk[1] + 1]), new Xk.Ge(Fk[Tk[2]], Fk[Tk[2] + 2], Fk[Tk[2] + 1])],
              yk = ik[0].subtract(ik[1]),
              lk = ik[2].subtract(ik[1]);
            return {
              v: ik,
              n: Xk.Ge.Cross(lk, yk).normalize()
            }
          },
          tk = function(kk, Fk, Ik, Xk) {
            return Fk = Zk(kk, Fk, Ik.x, Xk), Fk = Zk(kk, Fk, Ik.y, Xk), Zk(kk, Fk, Ik.z, Xk)
          },
          Zk = function(kk, Fk, Ik, Xk) {
            return kk.setFloat32(Fk, Ik, Xk), Fk + 4
          },
          ek = function(kk) {
            if (lk) {
              let Fk = kk;
              kk instanceof jk.c && (Fk = kk.DXk);
              const Ik = Fk.getVerticesData(Lk.g.PositionKind, !0, !0);
              if (!Ik) return [];
              const Tk = Xk.Ge.Zero();
              let ik;
              for (ik = 0; ik < Ik.length; ik += 3) Xk.Ge.TransformCoordinatesFromFloatsToRef(Ik[ik], Ik[ik + 1], Ik[ik + 2], kk.computeWorldMatrix(!0), Tk).toArray(Ik, ik);
              return Ik
            }
            return kk.getVerticesData(Lk.g.PositionKind) || []
          };
        lk && (yk = !0);
        let wk = "",
          Hk = 0,
          Jk = 0;
        if (Tk) {
          for (let Ik = 0; Ik < kk.length; Ik++) {
            const Fk = kk[Ik].yXk();
            Hk += Fk ? Fk.length / 3 : 0
          }
          const Fk = new ArrayBuffer(84 + 50 * Hk);
          wk = new DataView(Fk), Jk += 80, wk.setUint32(Jk, Hk, ik), Jk += 4
        } else ak || (wk = "solid stlmesh\r\n");
        for (let Xk = 0; Xk < kk.length; Xk++) {
          const Fk = kk[Xk];
          !Tk && ak && (wk += "solid " + Fk.name + "\r\n"), !yk && Fk instanceof LX.c && Fk.bakeCurrentTransformIntoVertices();
          const Ik = ek(Fk),
            lk = Fk.yXk() || [];
          for (let kk = 0; kk < lk.length; kk += 3) {
            const Fk = qk(lk, Ik, kk);
            Tk ? (Jk = tk(wk, Jk, Fk.n, ik), Jk = tk(wk, Jk, Fk.v[0], ik), Jk = tk(wk, Jk, Fk.v[1], ik), Jk = tk(wk, Jk, Fk.v[2], ik), Jk += 2) : (wk += "\tfacet normal " + Fk.n.x + " " + Fk.n.y + " " + Fk.n.z + "\r\n", wk += "\t\touter loop\r\n", wk += "\t\t\tvertex " + Fk.v[0].x + " " + Fk.v[0].y + " " + Fk.v[0].z + "\r\n", wk += "\t\t\tvertex " + Fk.v[1].x + " " + Fk.v[1].y + " " + Fk.v[1].z + "\r\n", wk += "\t\t\tvertex " + Fk.v[2].x + " " + Fk.v[2].y + " " + Fk.v[2].z + "\r\n", wk += "\t\tendloop\r\n", wk += "\tendfacet\r\n")
          }!Tk && ak && (wk += "endsolid " + name + "\r\n")
        }
        if (Tk || ak || (wk += "endsolid stlmesh"), Fk) {
          const kk = document.createElement("a"),
            Fk = new Blob([wk], {
              type: "application/octet-stream"
            });
          kk.href = window.URL.createObjectURL(Fk), kk.download = Ik + ".stl", kk.click()
        }
        return wk
      }
    }

    function ty(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Tk = [];
      for (let ik = 0; ik < kk.length / Ik; ik++) {
        const yk = kk[ik * Ik] * (Xk ? -1 : 1),
          lk = kk[ik * Ik + 1],
          ak = kk[ik * Ik + 2];
        Tk.push(`(${yk.toPrecision(Fk.precision)}, ${lk.toPrecision(Fk.precision)}, ${ak.toPrecision(Fk.precision)})`)
      }
      return Tk.join(", ")
    }

    function Zy(kk, Fk) {
      const Ik = [];
      for (let Xk = 0; Xk < kk.length / 2; Xk++) {
        const Tk = kk[2 * Xk],
          ik = kk[2 * Xk + 1];
        Ik.push(`(${Tk.toPrecision(Fk.precision)}, ${(1-ik).toPrecision(Fk.precision)})`)
      }
      return Ik.join(", ")
    }

    function jy(kk, Fk, Ik, Xk) {
      const Tk = kk.getVerticesData(Lk.g.PositionKind),
        ik = kk.getVerticesData(Lk.g.NormalKind);
      if (Tk && ik) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${Ik}"\n\t\tint[] faceVertexCounts = [${function(kk){const Fk=kk.yXk()?.length?kk.getTotalIndices():kk.getTotalVertices();return Array(Fk/3).fill(3).join(", ")}(kk)}]\n\t\tint[] faceVertexIndices = [${function(kk){const Fk=kk.yXk(),Ik=Fk?.length??kk.getTotalVertices(),Xk=[];if(null!==Fk)for(let Tk=0;Tk<Ik;Tk++)Xk.push(Fk[Tk]);else for(let Tk=0;Tk<Ik;Tk++)Xk.push(Tk);return Xk.join(", ")}(kk)}]\n\t\tnormal3f[] normals = [${ty(ik,Fk,void 0,Xk)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${ty(Tk,Fk,void 0,Xk)}]\n        ${function(kk,Fk){let Ik="";for(let Tk=0;Tk<4;Tk++){const Xk=Tk>0?Tk:"",ik=kk.getVerticesData(Lk.g.UVKind+(Xk?Xk+1:""));ik&&(Ik+=`\n\t\ttexCoord2f[] primvars:st${Xk} = [${Zy(ik,Fk)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Xk=kk.getVerticesData(Lk.g.ColorKind);return Xk&&(Ik+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        ty(Xk, Fk, Xk.length / kk.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),Ik}(kk,Fk)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function ey(kk, Fk, Ik, Xk) {
      return `\n        def "Geometry"\n        {\n        ${jy(kk,Fk,Ik,Xk)}\n        }\n        `
    }

    function wy(kk) {
      let Fk = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return Fk += kk, fflate.strToU8(Fk)
    }

    function Hy(kk) {
      const Fk = kk.m;
      return `( ${Jy(Fk,0)}, ${Jy(Fk,4)}, ${Jy(Fk,8)}, ${Jy(Fk,12)} )`
    }

    function Jy(kk, Fk) {
      return `(${kk[Fk+0]}, ${kk[Fk+1]}, ${kk[Fk+2]}, ${kk[Fk+3]})`
    }

    function xy(kk, Fk) {
      const Ik = "Object_" + kk.uniqueId,
        Xk = Hy(Fk);
      return `def Xform "${Ik}" (\n\tprepend references = @./geometries/Geometry_${kk.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Xk}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${kk.material.uniqueId}>\n}\n\n`
    }

    function Py(kk) {
      switch (kk) {
        case Vk.d.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case Vk.d.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case Vk.d.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function Ky(kk) {
      return `(${kk.x}, ${kk.y})`
    }

    function Qy(kk) {
      return `(${kk.r}, ${kk.g}, ${kk.b})`
    }

    function sy(kk) {
      return "image/jpeg" === kk || "image/png" === kk
    }

    function Vy(kk, Fk, Ik, Tk, ik, yk) {
      const lk = kk.getInternalTexture().uniqueId + "_" + kk.invertY,
        qk = kk.mimeType || (0, ak.e)(kk.getInternalTexture()?.url ?? ""),
        Lk = sy(qk) ? qk : "image/png",
        tk = "image/jpeg" === Lk ? "jpg" : "png";
      ik[lk] = {
        texture: kk,
        mimeType: Lk,
        ext: tk
      };
      const Zk = kk.coordinatesIndex > 0 ? "st" + kk.coordinatesIndex : "st",
        jk = new Xk.Vector2(kk.uScale, kk.vScale),
        ek = new Xk.Vector2(kk.uOffset, kk.vOffset),
        wk = kk.wAng,
        Hk = Math.sin(wk),
        Jk = Math.cos(wk);
      return ek.y = 1 - ek.y - jk.y, ek.x += Hk * jk.x, ek.y += (1 - Jk) * jk.y, `\n    def Shader "PrimvarReader_${Ik}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Zk}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${Ik}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${Fk.uniqueId}/PrimvarReader_${Ik}.outputs:result>\n        float inputs:rotation = ${(wk*(180/Math.PI)).toFixed(yk.precision)}\n        float2 inputs:scale = ${Ky(jk)}\n        float2 inputs:translation = ${Ky(ek)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${kk.uniqueId}_${Ik}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${lk}.${tk}@\n        float2 inputs:st.connect = </Root/Materials/Material_${Fk.uniqueId}/Transform2d_${Ik}.outputs:result>\n        ${Tk?"float4 inputs:scale = "+function(kk){return`(${kk.r}, ${kk.g}, ${kk.b}, 1.0)`}(Tk):""}\n        token inputs:sourceColorSpace = "${kk.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Py(kk.wrapU)}"\n        token inputs:wrapT = "${Py(kk.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${Fk.needAlphaBlending()||Fk.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function zy(kk, Fk, Ik) {
      const Xk = "\t\t\t",
        Tk = [],
        ik = [],
        {
          diffuseMap: yk,
          diffuse: lk,
          alphaCutOff: ak,
          emissiveMap: qk,
          emissive: Lk,
          normalMap: tk,
          roughnessMap: Zk,
          roughnessChannel: jk,
          roughness: ek,
          metalnessMap: wk,
          metalnessChannel: Jk,
          metalness: xk,
          aoMap: Pk,
          aoMapChannel: Kk,
          aoMapIntensity: Qk,
          alphaMap: sk,
          ior: Vk,
          clearCoatEnabled: zk,
          clearCoat: Sk,
          clearCoatMap: vk,
          clearCoatRoughness: Ek,
          clearCoatRoughnessMap: Ok
        } = function(kk) {
          const Fk = {
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
          return kk instanceof yX.StandardMaterial ? {
            ...Fk,
            diffuseMap: kk.diffuseTexture,
            diffuse: kk.diffuseColor,
            alphaCutOff: kk.alphaCutOff,
            emissiveMap: kk.emissiveTexture,
            emissive: kk.emissiveColor,
            roughness: 1,
            alphaMap: kk.opacityTexture
          } : kk instanceof VF ? {
            ...Fk,
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
          } : Fk
        }(kk);
      return null !== yk ? (Tk.push(`${Xk}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${yk.uniqueId}_diffuse.outputs:rgb>`), kk.needAlphaBlending() ? Tk.push(`${Xk}float inputs:opacity.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${yk.uniqueId}_diffuse.outputs:a>`) : kk.needAlphaTesting() && (Tk.push(`${Xk}float inputs:opacity.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${yk.uniqueId}_diffuse.outputs:a>`), Tk.push(`${Xk}float inputs:opacityThreshold = ${ak}`)), ik.push(Vy(yk, kk, "diffuse", lk, Fk, Ik))) : Tk.push(`${Xk}color3f inputs:diffuseColor = ${Qy(lk||Hk.Color3.White())}`), null !== qk ? (Tk.push(`${Xk}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${qk.uniqueId}_emissive.outputs:rgb>`), ik.push(Vy(qk, kk, "emissive", Lk, Fk, Ik))) : Lk && Lk.toLuminance() > 0 && Tk.push(`${Xk}color3f inputs:emissiveColor = ${Qy(Lk)}`), null !== tk && (Tk.push(`${Xk}normal3f inputs:normal.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${tk.uniqueId}_normal.outputs:rgb>`), ik.push(Vy(tk, kk, "normal", null, Fk, Ik))), null !== Pk && (Tk.push(`${Xk}float inputs:occlusion.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Pk.uniqueId}_occlusion.outputs:${Kk}>`), ik.push(Vy(Pk, kk, "occlusion", new Hk.Color3(Qk, Qk, Qk), Fk, Ik))), null !== Zk ? (Tk.push(`${Xk}float inputs:roughness.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Zk.uniqueId}_roughness.outputs:${jk}>`), ik.push(Vy(Zk, kk, "roughness", new Hk.Color3(ek, ek, ek), Fk, Ik))) : Tk.push(`${Xk}float inputs:roughness = ${ek}`), null !== wk ? (Tk.push(`${Xk}float inputs:metallic.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${wk.uniqueId}_metallic.outputs:${Jk}>`), ik.push(Vy(wk, kk, "metallic", new Hk.Color3(xk, xk, xk), Fk, Ik))) : Tk.push(`${Xk}float inputs:metallic = ${xk}`), null !== sk ? (Tk.push(`${Xk}float inputs:opacity.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${sk.uniqueId}_opacity.outputs:r>`), Tk.push(`${Xk}float inputs:opacityThreshold = 0.0001`), ik.push(Vy(sk, kk, "opacity", null, Fk, Ik))) : Tk.push(`${Xk}float inputs:opacity = ${kk.alpha}`), zk && (null !== vk ? (Tk.push(`${Xk}float inputs:clearcoat.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${vk.uniqueId}_clearcoat.outputs:r>`), ik.push(Vy(vk, kk, "clearcoat", new Hk.Color3(Sk, Sk, Sk), Fk, Ik))) : Tk.push(`${Xk}float inputs:clearcoat = ${Sk}`), null !== Ok ? (Tk.push(`${Xk}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Ok.uniqueId}_clearcoatRoughness.outputs:g>`), ik.push(Vy(Ok, kk, "clearcoatRoughness", new Hk.Color3(Ek, Ek, Ek), Fk, Ik))) : Tk.push(`${Xk}float inputs:clearcoatRoughness = ${Ek}`)), Tk.push(`${Xk}float inputs:ior = ${Vk}`), `\n\tdef Material "Material_${kk.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Tk.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${kk.uniqueId}/PreviewSurface.outputs:surface>\n\n${ik.join("\n")}\n\n\t}\n`
    }

    function Sy(kk) {
      kk.computeWorldMatrix(!0);
      const Fk = kk.getWorldMatrix().clone(),
        Ik = kk.mG().useRightHandedSystem;
      let Xk = kk.material?._getEffectiveOrientation(kk) ?? kk.sideOrientation,
        yk = !Ik,
        lk = kk.parent;
      for (; lk;) {
        if (RI(lk, Ik) && null === lk.parent) {
          Ik || (Fk.multiplyToRef(lk.getWorldMatrix().invert(), Fk), Xk = Xk === ik.c.ClockWiseSideOrientation ? ik.c.CounterClockWiseSideOrientation : ik.c.ClockWiseSideOrientation), yk = !1;
          break
        }
        lk = lk.parent
      }
      return Fk.determinant() < 0 && Tk.Tools.Warn(`Mesh ${kk.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: Fk,
        windingOrder: Xk === ik.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: yk
      }
    }
    async function oy(kk, Fk, Ik) {
      const ik = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...Fk
      };
      "undefined" === typeof fflate && await Tk.Tools.LoadScriptAsync(ik.fflateUrl);
      const yk = {};
      yk[ik.modelFileName] = null;
      let lk = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      lk += function(kk) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===kk.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${kk.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${kk.planeAnchoringAlignment}"`:""}\n            `
      }(ik);
      const ak = {};
      for (const Xk of kk.meshes) {
        if (0 === Xk.getTotalVertices()) continue;
        const kk = Xk,
          Fk = kk.geometry,
          qk = kk.material;
        if (!qk || !Fk || Ik && !Ik(kk)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(qk.getClassName())) {
          const Ik = "geometries/Geometry_" + Fk.uniqueId + ".usda",
            {
              matrix: Xk,
              windingOrder: Tk,
              convertToRightHanded: Lk
            } = Sy(kk);
          if (!(Ik in yk)) {
            const kk = ey(Fk, ik, Tk, Lk);
            yk[Ik] = wy(kk)
          }
          qk.uniqueId in ak || (ak[qk.uniqueId] = qk), lk += xy(kk, Xk)
        } else Tk.Tools.Warn("USDZExportAsync does not support this material type: " + qk.getClassName())
      }
      kk.activeCamera && ik.exportCamera && (lk += function(kk, Fk) {
        const Ik = "Camera_" + kk.uniqueId,
          Tk = Hy(Xk.Matrix.RotationY(Math.PI).multiply(kk.getWorldMatrix()));
        if (kk.mode === Vk.d.ORTHOGRAPHIC_CAMERA) return `def Camera "${Ik}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Tk}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${kk.minZ.toPrecision(Fk.precision)}, ${kk.maxZ.toPrecision(Fk.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(kk.orthoLeft||1)+Math.abs(kk.orthoRight||1))).toPrecision(Fk.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(kk.orthoTop||1)+Math.abs(kk.orthoBottom||1))).toPrecision(Fk.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Xk = kk.Oe().getAspectRatio(kk),
            ik = Fk.cameraSensorWidth || 35;
          return `def Camera "${Ik}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Tk}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${kk.minZ.toPrecision(Fk.precision)}, ${kk.maxZ.toPrecision(Fk.precision)})\n\t\t\tfloat focalLength = ${(ik/(2*Math.tan(.5*kk.fov))).toPrecision(Fk.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(ik*Xk).toPrecision(Fk.precision)}\n\t\t\tfloat verticalAperture = ${(ik/Xk).toPrecision(Fk.precision)}            \n\t\t}\n\t\n\t`
        }
      }(kk.activeCamera, ik)), lk += "\n            }\n        }";
      const qk = {};
      lk += function(kk, Fk, Ik) {
        const Xk = [];
        for (const Tk in kk) {
          const ik = kk[Tk];
          Xk.push(zy(ik, Fk, Ik))
        }
        return `\n    def "Materials"\n{\n${Xk.join("")}\n}\n\n`
      }(ak, qk, ik), lk += "\n    }", yk[ik.modelFileName] = fflate.strToU8(lk);
      for (const Xk in qk) {
        const {
          texture: kk,
          ext: Fk,
          mimeType: Ik
        } = qk[Xk], Tk = await xI(kk);
        if (Tk && sy(Tk.mimeType) && Tk.mimeType === Ik) yk[`textures/Texture_${Xk}.${Fk}`] = new Uint8Array(Tk.data);
        else {
          const Tk = kk.getSize(),
            ik = await (0, Kk.f)(kk),
            lk = await zk.DumpTools.DumpDataAsync(Tk.width, Tk.height, ik, Ik, void 0, !1, !0);
          yk[`textures/Texture_${Xk}.${Fk}`] = new Uint8Array(lk).slice()
        }
      }
      let Lk = 0;
      for (const Xk in yk) {
        const kk = yk[Xk];
        if (!kk) continue;
        Lk += 34 + Xk.length;
        const Fk = 63 & Lk;
        if (4 !== Fk) {
          const Ik = new Uint8Array(64 - Fk);
          yk[Xk] = [kk, {
            extra: {
              12345: Ik
            }
          }]
        }
        Lk = kk.length
      }
      return fflate.zipSync(yk, {
        level: 0
      })
    }
    var vy = Ik(41111);
    class Ey {
      static Export(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        if (!kk || 0 === kk.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Xk = Fk;
        Fk && 0 !== Fk.length || (Xk = kk.animations.map((kk => kk.name)));
        let Tk = null;
        for (const qk of Xk) {
          const Fk = kk.getAnimationRange(qk);
          Fk && (Tk = Tk ? new vy.b("animation-range", Math.min(Tk.from, Fk.from), Math.max(Tk.to, Fk.to)) : Fk)
        }
        if (!Tk && (kk.animations.length > 0 && (Tk = kk.getAnimationRange(kk.animations[0].name)), !Tk)) throw new Error("No animation range found in skeleton");
        const ik = Ik || 1 / (kk.animations[0]?.framePerSecond || 30),
          yk = this._BuildBoneHierarchy(kk, Xk);
        let lk = 0;
        for (const qk of yk) qk.positionKeys.length > 0 && (lk = Math.max(lk, qk.positionKeys.length)), qk.rotationKeys.length > 0 && (lk = Math.max(lk, qk.rotationKeys.length));
        0 === lk && (lk = Math.floor((Tk.to - Tk.from) / ik) + 1);
        let ak = "";
        return ak += "HIERARCHY\n", ak += this._ExportHierarchy(yk, 0), ak += "MOTION\n", ak += `Frames: ${lk}\n`, ak += `Frame Time: ${ik.toFixed(6)}\n`, ak += this._ExportMotionData(yk, lk, 0, Xk), ak
      }
      static _BuildBoneHierarchy(kk, Fk) {
        const Ik = new Map,
          Xk = [];
        for (const Tk of kk.bones) {
          const kk = {
            bone: Tk,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          Ik.set(Tk, kk)
        }
        for (const Tk of kk.bones) {
          const kk = Ik.get(Tk);
          if (Tk.animations.length > 0)
            for (const Ik of Tk.animations) Fk.includes(Ik.name) && ("position" === Ik.targetProperty ? (kk.hasPositionChannels = !0, kk.positionKeys.push(...Ik.getKeys())) : "rotationQuaternion" === Ik.targetProperty && (kk.hasRotationChannels = !0, kk.rotationKeys.push(...Ik.getKeys())));
          if (Tk.getParent()) {
            const Fk = Ik.get(Tk.getParent());
            Fk && Fk.children.push(kk)
          } else Xk.push(kk)
        }
        return Xk
      }
      static _ExportHierarchy(kk, Fk) {
        let Ik = "";
        const Xk = "    ".repeat(Fk);
        for (const Tk of kk) {
          const kk = Tk.bone;
          if (this._IsEndSite(Tk)) {
            Ik += `${Xk}End Site\n`, Ik += `${Xk}{\n`;
            const Fk = this._GetBoneOffset(kk);
            Ik += `${Xk}    OFFSET ${Fk.x.toFixed(6)} ${Fk.y.toFixed(6)} ${Fk.z.toFixed(6)}\n`, Ik += `${Xk}}\n`
          } else {
            Ik += `${0===Fk?"ROOT":`${Xk}JOINT`} ${kk.name}\n`, Ik += `${Xk}{\n`;
            const ik = this._GetBoneOffset(kk);
            Ik += `${Xk}    OFFSET ${ik.x.toFixed(6)} ${ik.y.toFixed(6)} ${ik.z.toFixed(6)}\n`;
            const yk = [];
            Tk.hasPositionChannels && yk.push("Xposition", "Yposition", "Zposition"), Tk.hasRotationChannels && yk.push("Zrotation", "Xrotation", "Yrotation"), yk.length > 0 && (Ik += `${Xk}    CHANNELS ${yk.length} ${yk.join(" ")}\n`), Tk.children.length > 0 && (Ik += this._ExportHierarchy(Tk.children, Fk + 1)), Ik += `${Xk}}\n`
          }
        }
        return Ik
      }
      static _IsEndSite(kk) {
        return 0 === kk.children.length
      }
      static _GetBoneOffset(kk) {
        try {
          if (!kk.getParent()) return kk.getRestMatrix().getTranslation();
          return kk.getLocalMatrix().getTranslation()
        } catch (Fk) {
          return Xk.Ge.Zero()
        }
      }
      static _ExportMotionData(kk, Fk, Ik, Xk) {
        let Tk = "";
        for (let ik = 0; ik < Fk; ik++) {
          const Fk = [];
          this._CollectFrameValues(kk, ik + Ik, Fk, Xk), Tk += Fk.map((kk => kk.toFixed(6))).join(" ") + "\n"
        }
        return Tk
      }
      static _CollectFrameValues(kk, Fk, Ik, Xk) {
        for (const Tk of kk)
          if (!this._IsEndSite(Tk)) {
            if (Tk.hasPositionChannels) {
              const kk = this._GetPositionAtFrameIndex(Tk.positionKeys, Fk);
              Ik.push(kk.x, kk.y, kk.z)
            }
            if (Tk.hasRotationChannels) {
              const kk = this._GetRotationAtFrameIndex(Tk.rotationKeys, Fk),
                Xk = this._QuaternionToEuler(kk);
              Ik.push(Xk.z, Xk.x, Xk.y)
            }
            Tk.children.length > 0 && this._CollectFrameValues(Tk.children, Fk, Ik, Xk)
          }
      }
      static _GetPositionAtFrameIndex(kk, Fk) {
        if (0 === kk.length) return Xk.Ge.Zero();
        return kk[Math.max(0, Math.min(Fk, kk.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(kk, Fk) {
        if (0 === kk.length) return Xk.Quaternion.Identity();
        return kk[Math.max(0, Math.min(Fk, kk.length - 1))].value.clone()
      }
      static _QuaternionToEuler(kk) {
        const Fk = new Xk.Matrix;
        kk.toRotationMatrix(Fk);
        const Ik = Fk.m;
        let ik, yk, lk;
        const ak = Math.sqrt(Ik[0] * Ik[0] + Ik[1] * Ik[1]);
        return ak > uI.b ? (ik = Math.atan2(Ik[6], Ik[10]), yk = Math.atan2(-Ik[2], ak), lk = Math.atan2(Ik[1], Ik[0])) : (ik = Math.atan2(-Ik[9], Ik[5]), yk = Math.atan2(-Ik[2], ak), lk = 0), new Xk.Ge(Tk.Tools.ToDegrees(ik), Tk.Tools.ToDegrees(yk), Tk.Tools.ToDegrees(lk))
      }
    }

    function Oy(kk) {
      return "string" === typeof kk?.name
    }
    const ny = Symbol("__xml:meta$__"),
      Gy = Symbol("__xml:name$__");

    function py(kk, Fk) {
      Object.prototype.hasOwnProperty.call(kk.metadata, ny) || (kk.metadata[ny] = []), kk.metadata[ny].push(Fk)
    }

    function uy(kk) {
      return (Fk, Ik) => {
        Fk[Gy] = kk
      }
    }

    function by() {
      return (kk, Fk) => py(Fk, {
        kind: "none",
        prop: String(Fk.name),
        ignore: !0
      })
    }

    function Ry(kk) {
      return (Fk, Ik) => py(Ik, {
        kind: "attr",
        prop: String(Ik.name),
        ...kk
      })
    }

    function Uy(kk) {
      return (Fk, Ik) => py(Ik, {
        kind: "elem",
        prop: String(Ik.name),
        ...kk
      })
    }

    function Cy(kk) {
      const Fk = "function" === typeof kk ? kk : kk?.constructor,
        Ik = Fk?.[Symbol.metadata];
      if (!Ik) return [];
      const Xk = [];
      let Tk = Ik;
      for (; Tk;) Object.prototype.hasOwnProperty.call(Tk, ny) && Xk.push(...Tk[ny]), Tk = Object.getPrototypeOf(Tk);
      return Xk
    }

    function Ny(kk) {
      const Fk = kk?.constructor?.[Gy];
      return Fk || void 0
    }

    function cy(kk) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(kk)
    }

    function Wy(kk) {
      if (Oy(kk)) return kk;
      const Fk = (kk ?? "").trim();
      if (!Fk) return {
        name: ""
      };
      const Ik = Fk.indexOf(":");
      if (-1 === Ik) return {
        name: Fk
      };
      if (-1 !== Fk.indexOf(":", Ik + 1)) return {
        name: Fk
      };
      const Xk = Fk.slice(0, Ik),
        Tk = Fk.slice(Ik + 1);
      return cy(Xk) && cy(Tk) ? {
        ns: Xk,
        name: Tk
      } : {
        name: Fk
      }
    }

    function fy(kk, Fk) {
      return Fk ? `${Fk}:${kk}` : kk
    }
    const By = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      dy = Object.freeze({
        number: By
      });

    function Yy(kk) {
      const Fk = kk?.eps ?? By.eps;
      return {
        eps: Fk,
        maxDecimalsCap: kk?.maxDecimalsCap ?? By.maxDecimalsCap,
        trimTrailingZeros: kk?.trimTrailingZeros ?? By.trimTrailingZeros,
        fixedDecimals: kk?.fixedDecimals,
        allowScientific: kk?.allowScientific ?? By.allowScientific,
        snapNearZero: kk?.snapNearZero ?? By.snapNearZero,
        zeroThreshold: kk?.zeroThreshold ?? Fk,
        perAttributeEps: kk?.perAttributeEps
      }
    }

    function Ay(kk) {
      return {
        number: Yy(kk?.number)
      }
    }
    class gy {
      constructor(kk) {
        if (this.o = kk, this._o = kk.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(kk) {
        if (!Number.isFinite(kk)) throw new Error(`Cannot format non-finite number: ${kk}`);
        const Fk = this._o,
          Ik = this._clampInt(Fk.maxDecimalsCap ?? 15, 0, 20),
          Xk = Fk.trimTrailingZeros ?? !0,
          Tk = Fk.snapNearZero ?? !0,
          ik = Fk.zeroThreshold ?? Fk.eps,
          yk = 1 / Fk.eps;
        let lk, ak = Math.round(kk * yk) / yk;
        if (Object.is(ak, -0) && (ak = 0), Tk && Math.abs(ak) <= ik && (ak = 0), lk = void 0 !== Fk.fixedDecimals ? this._clampInt(Fk.fixedDecimals, 0, Ik) : this._clampInt(Math.ceil(-Math.log10(Fk.eps)), 0, Ik), Fk.allowScientific, 0 === lk) return String(Math.trunc(ak));
        let qk = ak.toFixed(lk);
        if (Xk && void 0 === Fk.fixedDecimals && (qk = qk.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(qk)) throw new Error(`Scientific notation not allowed in XML output: ${qk}`);
        return qk
      }
      _clampInt(kk, Fk, Ik) {
        return Number.isFinite(kk) ? (kk = Math.trunc(kk), Math.max(Fk, Math.min(Ik, kk))) : Fk
      }
    }

    function my(kk) {
      return kk instanceof Date
    }

    function hy(kk) {
      return "string" === typeof kk
    }

    function ry(kk) {
      return "string" === typeof kk || "number" === typeof kk || "boolean" === typeof kk || "bigint" === typeof kk || my(kk)
    }

    function Dy(kk) {
      return "number" === typeof kk || "boolean" === typeof kk || "bigint" === typeof kk || my(kk)
    }
    class My {
      constructor(kk, Fk) {
        this._ns = new Map, this._prefixCount = 0, this._builder = kk, this._format = Ay(Fk), this._nFmt = new gy(this._format)
      }
      withNamespace() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        for (const Xk of Fk) this._assignNamespace(Xk);
        return this
      }
      serialize(kk, Fk) {
        if (!(Fk = Fk ?? Ny(kk))) throw new Error("can not find name for given object");
        const Ik = Wy(Fk);
        Ik.ns && this._assignNamespace(Ik.ns, "xmlns"), this._gatherNamespaces(kk, new WeakSet);
        const Xk = this._builder.ele(null, Ik.name);
        for (const [Tk, ik] of Array.from(this._ns.entries())) Xk.att("xmlns", ik, Tk);
        this._writeObjectContent(Xk, kk, (new WeakSet).add(kk)), this._builder.end()
      }
      _writeObject(kk, Fk, Ik) {
        if (Ik.has(Fk)) return;
        if (Ik.add(Fk), Array.isArray(Fk)) {
          for (const Xk of Fk) Dy(Xk) || (hy(Xk) ? this._builder.text(Xk) : this._writeObject(kk, Xk, Ik));
          return
        }
        const Xk = Ny(Fk);
        if (!Xk) return;
        const Tk = Wy(Xk),
          ik = this._getPrefix(Tk),
          yk = fy(Tk.name, ik);
        kk.ele(null, yk), this._writeObjectContent(kk, Fk, Ik), this._builder.end()
      }
      _getPrefix(kk) {
        if (kk.ns) {
          const Fk = this._ns.get(kk.ns.toLowerCase());
          if ("xmlns" !== Fk) return Fk
        }
      }
      _writeObjectContent(kk, Fk, Ik) {
        const Xk = Cy(Fk) ?? [],
          Tk = new Map;
        for (const yk of Xk) {
          const kk = Tk.get(yk.prop) ?? [];
          kk.push(yk), Tk.set(yk.prop, kk)
        }
        const ik = Object.keys(Fk).sort(((kk, Fk) => {
          const Ik = (Tk.get(kk) ?? []).some((kk => "attr" === kk.kind));
          return Ik === (Tk.get(Fk) ?? []).some((kk => "attr" === kk.kind)) ? 0 : Ik ? -1 : 1
        }));
        for (const yk of ik) {
          const Xk = Fk[yk];
          if (null === Xk || void 0 === Xk) continue;
          const ik = Tk.get(yk);
          if (ik) {
            if (ik.some((kk => !0 === kk.ignore || "none" === kk.kind))) continue;
            for (const Fk of ik) {
              const Ik = Fk.name ?? Fk.prop.toLowerCase();
              if (Ik) switch (Fk.kind) {
                case "attr": {
                  let Tk = null;
                  if ("number" === typeof Xk && this._nFmt && (Tk = this._nFmt.toString(Xk)), Fk.formatter) {
                    Tk = new Fk.formatter(this._format).toString(Xk)
                  }
                  if (Tk = Tk ?? Xk.toString(), Tk) {
                    const Fk = Wy(Ik),
                      Xk = this._getPrefix(Fk),
                      ik = fy(Fk.name, Xk);
                    kk.att(null, ik, Tk)
                  }
                  break
                }
              }
            }
          } else Dy(Xk) || (hy(Xk) ? this._builder.text(Xk) : this._writeObject(kk, Xk, Ik))
        }
      }
      _gatherNamespaces(kk, Fk) {
        if (Fk.has(kk)) return;
        if (Fk.add(kk), Array.isArray(kk)) {
          for (const Ik of kk) ry(Ik) || this._gatherNamespaces(Ik, Fk);
          return
        }
        const Ik = Ny(kk);
        Ik && this._assignNamespace(Ik);
        const Xk = Cy(kk) ?? [],
          Tk = new Map;
        for (const yk of Xk) {
          const kk = Tk.get(yk.prop) ?? [];
          kk.push(yk), Tk.set(yk.prop, kk)
        }
        const ik = [];
        for (const yk of Object.keys(kk)) {
          const Fk = kk[yk];
          if (null === Fk || void 0 === Fk) continue;
          const Ik = Tk.get(yk);
          if (Ik) {
            if (Ik.some((kk => !0 === kk.ignore || "none" === kk.kind))) continue;
            for (const kk of Ik) kk.name && this._assignNamespace(kk.name)
          }
          ik.push(Fk)
        }
        for (const yk of ik) ry(yk) || this._gatherNamespaces(yk, Fk)
      }
      _assignNamespace(kk, Fk) {
        const Ik = Wy(kk);
        if (Ik?.ns) {
          const kk = Ik.ns.toLowerCase();
          this._ns.get(kk) || this._ns.set(kk, Fk ?? this._buildNsPrefix(kk))
        } else if ("xmlns" === Fk) {
          const kk = Ik.name.toLowerCase();
          this._ns.get(kk) || this._ns.set(kk, Fk ?? this._buildNsPrefix(kk))
        }
      }
      _buildNsPrefix(kk) {
        let Fk, Ik = !1;
        do {
          Fk = "ns" + this._prefixCount++;
          for (const kk of Array.from(this._ns.values()))
            if (kk === Fk) {
              Ik = !0;
              break
            }
        } while (Ik);
        return Fk
      }
    }
    class kl {}
    var Fl;
    kl.OpenTag = "<", kl.CloseTag = ">", kl.Slash = "/", kl.Question = "?", kl.Quote = '"', kl.Equal = "=", kl.Space = " ", kl.Semicolon = ":", kl.Dec = "<?xml", kl.Xml = "xml", kl.Xmlns = "xmlns", kl.Xsi = "xsi", kl.VersionKeyword = "version", kl.EncodingKeyword = "encoding", kl.StandaloneKeyword = "standalone",
      function(kk) {
        kk[kk.Declaration = 0] = "Declaration", kk[kk.Tag = 1] = "Tag", kk[kk.Attribute = 2] = "Attribute", kk[kk.Text = 3] = "Text"
      }(Fl || (Fl = {}));
    class Il {
      constructor(kk) {
        this._ctxStack = [], this._d = 0, this._w = kk
      }
      dec(kk, Fk, Ik) {
        return this._w.write(kl.Dec), this._writeAttStr(kl.VersionKeyword, kk), Fk && this._writeAttStr(kl.EncodingKeyword, Fk), void 0 !== Ik && this._writeAttStr(kl.StandaloneKeyword, Ik ? "yes" : "no"), this._w.write(kl.Question, kl.CloseTag), this
      }
      att(kk, Fk, Ik) {
        const Xk = this._peekContext();
        if (!Xk) throw new Error("att() without open element");
        if (Xk.closed) throw new Error(`att() after start tag closed for <${Xk.name}>`);
        if (this._isXmlnsDecl(kk, Fk)) {
          if (Fk === kl.Xmlns) Xk.defaultNs = Ik, this._registerNamespace(Xk, "", Ik), this._writeAttStr(kl.Xmlns, Ik);
          else if (kk) this._registerNamespace(Xk, Fk, Ik), this._writeAttStr(`${kk}:${Fk}`, Ik);
          else {
            const kk = Fk.slice(6);
            this._registerNamespace(Xk, kk, Ik), this._writeAttStr(Fk, Ik)
          }
          return Xk.lastToken = Fl.Attribute, this
        }
        let Tk = Fk;
        if (kk) {
          Tk = `${this._ensurePrefixDeclared(Xk,kk)}:${Fk}`
        }
        return Xk.lastToken = Fl.Attribute, this._writeAttStr(Tk, Ik), this
      }
      ele(kk, Fk) {
        const Ik = this._peekContext();
        Ik && this._closeOpenTagIfNeeded(Ik);
        let Xk = Fk;
        if (kk) {
          Xk = `${this._lookupPrefix(kk)??kk}:${Fk}`
        }
        return this._pushContext(Xk, ++this._d), this._w.write(kl.OpenTag, Xk), this
      }
      text(kk) {
        const Fk = this._peekContext();
        if (!Fk) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(Fk), Fk.lastToken = Fl.Text, this._w.write(this._escText(kk)), this
      }
      end() {
        const kk = this._popContext();
        return kk && (this._d--, kk.closed ? this._w.write(kl.OpenTag, kl.Slash, kk.name, kl.CloseTag) : this._w.write(kl.Slash, kl.CloseTag)), this
      }
      _pushContext(kk, Fk) {
        const Ik = new Il.Context(kk, Fk);
        return this._ctxStack.push(Ik), Ik
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
      _writeAttStr(kk, Fk) {
        this._w.write(kl.Space, kk, kl.Equal, kl.Quote, this._escAttr(Fk), kl.Quote)
      }
      _lookupPrefix(kk) {
        let Fk = this._ctxStack.length - 1;
        if (Fk >= 0)
          do {
            const Ik = this._ctxStack[Fk--],
              Xk = Ik.ns2prefix?.get(kk);
            if (Xk) return Xk
          } while (Fk >= 0)
      }
      _escText(kk) {
        return kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(kk) {
        return this._escText(kk).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(kk, Fk) {
        if (kk) return kk === kl.Xmlns;
        const Ik = Fk.length,
          Xk = kl.Xmlns.length;
        return Ik >= Xk && (Fk.startsWith(kl.Xmlns) && (Fk.length == Xk || Fk[Xk] == kl.Semicolon))
      }
      _registerNamespace(kk, Fk, Ik) {
        if (Fk === kl.Xml || Fk === kl.Xmlns) throw new Error(`reserved prefix '${Fk}'`);
        const Xk = kk.prefix2ns.get(Fk);
        if (Xk && Xk !== Ik) throw new Error(`prefix '${Fk}' already bound to a different namespace`);
        kk.ns2prefix.get(Ik) || kk.ns2prefix.set(Ik, Fk), kk.prefix2ns.set(Fk, Ik)
      }
      _allocPrefix(kk) {
        let Fk = 1;
        for (;;) {
          const Ik = "ns" + Fk++;
          if (!kk.prefix2ns.has(Ik)) return Ik
        }
      }
      _ensurePrefixDeclared(kk, Fk) {
        const Ik = this._lookupPrefix(Fk);
        if (Ik) return Ik;
        if (kk.closed) throw new Error(`can not declare namespace after start tag closed for <${kk.name}>`);
        const Xk = this._allocPrefix(kk);
        return this._writeAttStr(`${kl.Xmlns}:${Xk}`, Fk), this._registerNamespace(kk, Xk, Fk), Xk
      }
      _closeOpenTagIfNeeded(kk) {
        kk.closed || (this._w.write(kl.CloseTag), kk.closed = !0)
      }
    }
    Il.Context = class {
      constructor(kk, Fk) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = kk, this.depth = Fk
      }
    };
    class Xl {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        if (0 === Fk.length) return this;
        const Xk = Fk.join("");
        return this._chunks.push(Xk), this.count += Xk.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Tl {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = kk, this._opts = Fk, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        if (0 === Fk.length) return this;
        const Xk = Fk.join("");
        if (0 === Xk.length) return this;
        this._pending += Xk, this._pendingChars += Xk.length;
        const Tk = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Tk && this.flush(), this
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
    const il = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      yl = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var ll, al;
    ! function(kk) {
      kk.micron = "micron", kk.millimeter = "millimeter", kk.centimeter = "centimeter", kk.inch = "inch", kk.foot = "foot", kk.meter = "meter"
    }(ll || (ll = {})),
    function(kk) {
      kk.model = "model", kk.solidsupport = "solidsupport", kk.support = "support", kk.surface = "surface", kk.other = "other"
    }(al || (al = {}));
    const ql = "http://schemas.openxmlformats.org/package/2006/content-types",
      Ll = "http://schemas.openxmlformats.org/package/2006/relationships";
    var tl;
    ! function(kk) {
      kk.Relationships = "application/vnd.openxmlformats-package.relationships+xml", kk.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", kk.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", kk.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", kk.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", kk.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", kk.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", kk.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", kk.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", kk.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", kk.Png = "image/png", kk.Jpeg = "image/jpeg", kk.Tiff = "image/tiff", kk.Xml = "application/xml"
    }(tl || (tl = {}));
    const Zl = "_rels/",
      jl = "3D/",
      el = "3dmodel.model",
      wl = ".rels",
      Hl = "[Content_Types].xml";
    class Jl {
      static IsKnown(kk) {
        return Jl.Known.has(kk)
      }
      static IsThreeDimModel(kk) {
        return kk === Jl.ThreeDimModel
      }
    }
    Jl.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Jl.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Jl.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Jl.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", Jl.Known = new Set([Jl.ThreeDimModel, Jl.Thumbnail, Jl.PrintTicket, Jl.MustPreserve]);
    let xl = (() => {
        let kk, Fk, Ik = [uy({
            ns: ql,
            name: "Types"
          })],
          Xk = [];
        Fk = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfContentTypes"), (() => {
          const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Ik, {
            kind: "class",
            name: Fk.name,
            metadata: Tk
          }, null, Xk), Fk = kk.value, Tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tk
          }), (0, Sk.n)(Fk, Xk)
        })(), Fk
      })(),
      Pl = (() => {
        let kk, Fk, Ik, Xk, Tk = [uy({
            ns: ql,
            name: "Default"
          })],
          ik = [],
          yk = [],
          lk = [],
          ak = [],
          qk = [];
        Fk = class {
          constructor(kk, Fk) {
            this.ext = (0, Sk.n)(this, yk, void 0), this.ct = ((0, Sk.n)(this, lk), (0, Sk.n)(this, ak, void 0)), (0, Sk.n)(this, qk), this.ext = kk, this.ct = Fk
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfContentType"), (() => {
          const Lk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ik = [Ry({
            name: {
              ns: ql,
              name: "Extension"
            }
          })], Xk = [Ry({
            name: {
              ns: ql,
              name: "ContentType"
            }
          })], (0, Sk.j)(null, null, Ik, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: kk => "ext" in kk,
              get: kk => kk.ext,
              set: (kk, Fk) => {
                kk.ext = Fk
              }
            },
            metadata: Lk
          }, yk, lk), (0, Sk.j)(null, null, Xk, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: kk => "ct" in kk,
              get: kk => kk.ct,
              set: (kk, Fk) => {
                kk.ct = Fk
              }
            },
            metadata: Lk
          }, ak, qk), (0, Sk.j)(null, kk = {
            value: Fk
          }, Tk, {
            kind: "class",
            name: Fk.name,
            metadata: Lk
          }, null, ik), Fk = kk.value, Lk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Lk
          }), (0, Sk.n)(Fk, ik)
        })(), Fk
      })(),
      Kl = (() => {
        let kk, Fk, Ik = [uy({
            ns: Ll,
            name: "Relationships"
          })],
          Xk = [];
        Fk = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfRelationships"), (() => {
          const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Ik, {
            kind: "class",
            name: Fk.name,
            metadata: Tk
          }, null, Xk), Fk = kk.value, Tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tk
          }), (0, Sk.n)(Fk, Xk)
        })(), Fk
      })(),
      Ql = (() => {
        let kk, Fk, Ik, Xk, Tk, ik = [uy({
            ns: Ll,
            name: "Relationship"
          })],
          yk = [],
          lk = [],
          ak = [],
          qk = [],
          Lk = [],
          tk = [],
          Zk = [];
        Fk = class {
          constructor(kk, Fk, Ik) {
            this.id = (0, Sk.n)(this, lk, void 0), this.type = ((0, Sk.n)(this, ak), (0, Sk.n)(this, qk, void 0)), this.target = ((0, Sk.n)(this, Lk), (0, Sk.n)(this, tk, void 0)), (0, Sk.n)(this, Zk), this.id = kk, this.type = Fk, this.target = Ik
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfRelationship"), (() => {
          const jk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ik = [Ry({
            name: "Id"
          })], Xk = [Ry({
            name: "Type"
          })], Tk = [Ry({
            name: "Target"
          })], (0, Sk.j)(null, null, Ik, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: kk => "id" in kk,
              get: kk => kk.id,
              set: (kk, Fk) => {
                kk.id = Fk
              }
            },
            metadata: jk
          }, lk, ak), (0, Sk.j)(null, null, Xk, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: kk => "type" in kk,
              get: kk => kk.type,
              set: (kk, Fk) => {
                kk.type = Fk
              }
            },
            metadata: jk
          }, qk, Lk), (0, Sk.j)(null, null, Tk, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: kk => "target" in kk,
              get: kk => kk.target,
              set: (kk, Fk) => {
                kk.target = Fk
              }
            },
            metadata: jk
          }, tk, Zk), (0, Sk.j)(null, kk = {
            value: Fk
          }, ik, {
            kind: "class",
            name: Fk.name,
            metadata: jk
          }, null, yk), Fk = kk.value, jk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jk
          }), (0, Sk.n)(Fk, yk)
        })(), Fk
      })();
    class sl {
      constructor(kk, Fk, Ik) {
        this.contentTypes = kk, this.relationships = Fk, this.model = Ik
      }
    }
    class Vl {
      static Zero() {
        return new Vl([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(kk) {
        this.values = kk
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class zl {
      constructor(kk) {
        this.o = kk, this._f = new gy(kk)
      }
      toString(kk) {
        return kk.values.map((kk => this._f.toString(kk))).join(" ")
      }
    }
    let Sl = (() => {
        let kk, Fk, Ik, Xk, Tk, ik = [uy({
            ns: il,
            name: "model"
          })],
          yk = [],
          lk = [],
          ak = [],
          qk = [],
          Lk = [],
          tk = [],
          Zk = [];
        Fk = class {
          constructor() {
            this.unit = (0, Sk.n)(this, lk, ll.millimeter), this.requiredextensions = ((0, Sk.n)(this, ak), (0, Sk.n)(this, qk, void 0)), this.recommendedextensions = ((0, Sk.n)(this, Lk), (0, Sk.n)(this, tk, void 0)), this.metadata = (0, Sk.n)(this, Zk)
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfModel"), (() => {
          const jk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ik = [Ry({
            name: "unit"
          })], Xk = [Ry({
            name: "requiredextensions"
          })], Tk = [Ry({
            name: "recommendedextensions"
          })], (0, Sk.j)(null, null, Ik, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: kk => "unit" in kk,
              get: kk => kk.unit,
              set: (kk, Fk) => {
                kk.unit = Fk
              }
            },
            metadata: jk
          }, lk, ak), (0, Sk.j)(null, null, Xk, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: kk => "requiredextensions" in kk,
              get: kk => kk.requiredextensions,
              set: (kk, Fk) => {
                kk.requiredextensions = Fk
              }
            },
            metadata: jk
          }, qk, Lk), (0, Sk.j)(null, null, Tk, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: kk => "recommendedextensions" in kk,
              get: kk => kk.recommendedextensions,
              set: (kk, Fk) => {
                kk.recommendedextensions = Fk
              }
            },
            metadata: jk
          }, tk, Zk), (0, Sk.j)(null, kk = {
            value: Fk
          }, ik, {
            kind: "class",
            name: Fk.name,
            metadata: jk
          }, null, yk), Fk = kk.value, jk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jk
          })
        })(), Fk.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, Sk.n)(Fk, yk), Fk
      })(),
      ol = (() => {
        let kk, Fk, Ik, Xk, Tk, ik = [uy({
            ns: il,
            name: "meta"
          })],
          yk = [],
          lk = [],
          ak = [],
          qk = [],
          Lk = [],
          tk = [],
          Zk = [];
        Fk = class {
          constructor(kk, Fk, Ik, Xk) {
            this.name = (0, Sk.n)(this, lk, void 0), this.preserve = ((0, Sk.n)(this, ak), (0, Sk.n)(this, qk, void 0)), this.type = ((0, Sk.n)(this, Lk), (0, Sk.n)(this, tk, void 0)), this.value = (0, Sk.n)(this, Zk), this.name = kk, this.value = Fk, this.preserve = Ik, this.type = Xk
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfMeta"), (() => {
          const jk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ik = [Ry({
            name: "name"
          })], Xk = [Ry({
            name: "preserve"
          })], Tk = [Ry({
            name: "type"
          })], (0, Sk.j)(null, null, Ik, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: kk => "name" in kk,
              get: kk => kk.name,
              set: (kk, Fk) => {
                kk.name = Fk
              }
            },
            metadata: jk
          }, lk, ak), (0, Sk.j)(null, null, Xk, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: kk => "preserve" in kk,
              get: kk => kk.preserve,
              set: (kk, Fk) => {
                kk.preserve = Fk
              }
            },
            metadata: jk
          }, qk, Lk), (0, Sk.j)(null, null, Tk, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: kk => "type" in kk,
              get: kk => kk.type,
              set: (kk, Fk) => {
                kk.type = Fk
              }
            },
            metadata: jk
          }, tk, Zk), (0, Sk.j)(null, kk = {
            value: Fk
          }, ik, {
            kind: "class",
            name: Fk.name,
            metadata: jk
          }, null, yk), Fk = kk.value, jk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jk
          }), (0, Sk.n)(Fk, yk)
        })(), Fk
      })(),
      vl = (() => {
        let kk, Fk, Ik = [uy({
            ns: il,
            name: "metadatagroup"
          })],
          Xk = [];
        Fk = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfMetadataGroup"), (() => {
          const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Ik, {
            kind: "class",
            name: Fk.name,
            metadata: Tk
          }, null, Xk), Fk = kk.value, Tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tk
          }), (0, Sk.n)(Fk, Xk)
        })(), Fk
      })(),
      El = (() => {
        let kk, Fk, Ik = [uy({
            ns: il,
            name: "resources"
          })],
          Xk = [];
        Fk = class {
          constructor() {
            this.object = []
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfResources"), (() => {
          const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Ik, {
            kind: "class",
            name: Fk.name,
            metadata: Tk
          }, null, Xk), Fk = kk.value, Tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tk
          }), (0, Sk.n)(Fk, Xk)
        })(), Fk
      })(),
      Ol = (() => {
        let kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk = [uy({
            ns: il,
            name: "object"
          })],
          Lk = [],
          tk = [],
          Zk = [],
          jk = [],
          ek = [],
          wk = [],
          Hk = [],
          Jk = [],
          xk = [],
          Pk = [],
          Kk = [],
          Qk = [],
          sk = [],
          Vk = [],
          zk = [];
        Fk = class {
          constructor(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : al.model;
            this.id = (0, Sk.n)(this, tk, void 0), this.type = ((0, Sk.n)(this, Zk), (0, Sk.n)(this, jk, void 0)), this.thumbnail = ((0, Sk.n)(this, ek), (0, Sk.n)(this, wk, void 0)), this.partnumber = ((0, Sk.n)(this, Hk), (0, Sk.n)(this, Jk, void 0)), this.name = ((0, Sk.n)(this, xk), (0, Sk.n)(this, Pk, void 0)), this.pid = ((0, Sk.n)(this, Kk), (0, Sk.n)(this, Qk, void 0)), this.pindex = ((0, Sk.n)(this, sk), (0, Sk.n)(this, Vk, void 0)), this.metadatagroup = (0, Sk.n)(this, zk), this.id = kk, this.type = Fk
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfObject"), (() => {
          const vk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ik = [Ry({
            name: "id"
          })], Xk = [Ry({
            name: "type"
          })], Tk = [Ry({
            name: "thumbnail"
          })], ik = [Ry({
            name: "partnumber"
          })], yk = [Ry({
            name: "name"
          })], lk = [Ry({
            name: "pid"
          })], ak = [Ry({
            name: "pindex"
          })], (0, Sk.j)(null, null, Ik, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: kk => "id" in kk,
              get: kk => kk.id,
              set: (kk, Fk) => {
                kk.id = Fk
              }
            },
            metadata: vk
          }, tk, Zk), (0, Sk.j)(null, null, Xk, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: kk => "type" in kk,
              get: kk => kk.type,
              set: (kk, Fk) => {
                kk.type = Fk
              }
            },
            metadata: vk
          }, jk, ek), (0, Sk.j)(null, null, Tk, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: kk => "thumbnail" in kk,
              get: kk => kk.thumbnail,
              set: (kk, Fk) => {
                kk.thumbnail = Fk
              }
            },
            metadata: vk
          }, wk, Hk), (0, Sk.j)(null, null, ik, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: kk => "partnumber" in kk,
              get: kk => kk.partnumber,
              set: (kk, Fk) => {
                kk.partnumber = Fk
              }
            },
            metadata: vk
          }, Jk, xk), (0, Sk.j)(null, null, yk, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: kk => "name" in kk,
              get: kk => kk.name,
              set: (kk, Fk) => {
                kk.name = Fk
              }
            },
            metadata: vk
          }, Pk, Kk), (0, Sk.j)(null, null, lk, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: kk => "pid" in kk,
              get: kk => kk.pid,
              set: (kk, Fk) => {
                kk.pid = Fk
              }
            },
            metadata: vk
          }, Qk, sk), (0, Sk.j)(null, null, ak, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: kk => "pindex" in kk,
              get: kk => kk.pindex,
              set: (kk, Fk) => {
                kk.pindex = Fk
              }
            },
            metadata: vk
          }, Vk, zk), (0, Sk.j)(null, kk = {
            value: Fk
          }, qk, {
            kind: "class",
            name: Fk.name,
            metadata: vk
          }, null, Lk), Fk = kk.value, vk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vk
          }), (0, Sk.n)(Fk, Lk)
        })(), Fk
      })(),
      nl = (() => {
        let kk, Fk, Ik = [uy({
            ns: il,
            name: "mesh"
          })],
          Xk = [];
        Fk = class {
          constructor(kk, Fk) {
            this.vertices = kk ?? new Gl, this.triangles = Fk ?? new ul
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfMesh"), (() => {
          const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Ik, {
            kind: "class",
            name: Fk.name,
            metadata: Tk
          }, null, Xk), Fk = kk.value, Tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tk
          }), (0, Sk.n)(Fk, Xk)
        })(), Fk
      })(),
      Gl = (() => {
        let kk, Fk, Ik = [uy({
            ns: il,
            name: "vertices"
          })],
          Xk = [];
        Fk = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfVertices"), (() => {
          const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Ik, {
            kind: "class",
            name: Fk.name,
            metadata: Tk
          }, null, Xk), Fk = kk.value, Tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tk
          }), (0, Sk.n)(Fk, Xk)
        })(), Fk
      })(),
      pl = (() => {
        let kk, Fk, Ik, Xk, Tk, ik = [uy({
            ns: il,
            name: "vertex"
          })],
          yk = [],
          lk = [],
          ak = [],
          qk = [],
          Lk = [],
          tk = [],
          Zk = [];
        Fk = class {
          constructor() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, Sk.n)(this, lk, void 0), this.y = ((0, Sk.n)(this, ak), (0, Sk.n)(this, qk, void 0)), this.z = ((0, Sk.n)(this, Lk), (0, Sk.n)(this, tk, void 0)), (0, Sk.n)(this, Zk), this.x = kk, this.y = Fk, this.z = Ik
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfVertex"), (() => {
          const jk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ik = [Ry({
            name: "x"
          })], Xk = [Ry({
            name: "y"
          })], Tk = [Ry({
            name: "z"
          })], (0, Sk.j)(null, null, Ik, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: kk => "x" in kk,
              get: kk => kk.x,
              set: (kk, Fk) => {
                kk.x = Fk
              }
            },
            metadata: jk
          }, lk, ak), (0, Sk.j)(null, null, Xk, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: kk => "y" in kk,
              get: kk => kk.y,
              set: (kk, Fk) => {
                kk.y = Fk
              }
            },
            metadata: jk
          }, qk, Lk), (0, Sk.j)(null, null, Tk, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: kk => "z" in kk,
              get: kk => kk.z,
              set: (kk, Fk) => {
                kk.z = Fk
              }
            },
            metadata: jk
          }, tk, Zk), (0, Sk.j)(null, kk = {
            value: Fk
          }, ik, {
            kind: "class",
            name: Fk.name,
            metadata: jk
          }, null, yk), Fk = kk.value, jk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jk
          }), (0, Sk.n)(Fk, yk)
        })(), Fk
      })(),
      ul = (() => {
        let kk, Fk, Ik = [uy({
            ns: il,
            name: "triangles"
          })],
          Xk = [];
        Fk = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfTriangles"), (() => {
          const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Ik, {
            kind: "class",
            name: Fk.name,
            metadata: Tk
          }, null, Xk), Fk = kk.value, Tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tk
          }), (0, Sk.n)(Fk, Xk)
        })(), Fk
      })(),
      bl = (() => {
        let kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk = [uy({
            ns: il,
            name: "triangle"
          })],
          Lk = [],
          tk = [],
          Zk = [],
          jk = [],
          ek = [],
          wk = [],
          Hk = [],
          Jk = [],
          xk = [],
          Pk = [],
          Kk = [],
          Qk = [],
          sk = [],
          Vk = [],
          zk = [];
        Fk = class {
          constructor(kk, Fk, Ik) {
            this.v1 = (0, Sk.n)(this, tk, void 0), this.v2 = ((0, Sk.n)(this, Zk), (0, Sk.n)(this, jk, void 0)), this.v3 = ((0, Sk.n)(this, ek), (0, Sk.n)(this, wk, void 0)), this.p1 = ((0, Sk.n)(this, Hk), (0, Sk.n)(this, Jk, void 0)), this.p2 = ((0, Sk.n)(this, xk), (0, Sk.n)(this, Pk, void 0)), this.p3 = ((0, Sk.n)(this, Kk), (0, Sk.n)(this, Qk, void 0)), this.pid = ((0, Sk.n)(this, sk), (0, Sk.n)(this, Vk, void 0)), (0, Sk.n)(this, zk), this.v1 = kk, this.v2 = Fk, this.v3 = Ik
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfTriangle"), (() => {
          const vk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ik = [Ry({
            name: "v1"
          })], Xk = [Ry({
            name: "v2"
          })], Tk = [Ry({
            name: "v3"
          })], ik = [Ry({
            name: "p1"
          })], yk = [Ry({
            name: "p2"
          })], lk = [Ry({
            name: "p3"
          })], ak = [Ry({
            name: "pid"
          })], (0, Sk.j)(null, null, Ik, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: kk => "v1" in kk,
              get: kk => kk.v1,
              set: (kk, Fk) => {
                kk.v1 = Fk
              }
            },
            metadata: vk
          }, tk, Zk), (0, Sk.j)(null, null, Xk, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: kk => "v2" in kk,
              get: kk => kk.v2,
              set: (kk, Fk) => {
                kk.v2 = Fk
              }
            },
            metadata: vk
          }, jk, ek), (0, Sk.j)(null, null, Tk, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: kk => "v3" in kk,
              get: kk => kk.v3,
              set: (kk, Fk) => {
                kk.v3 = Fk
              }
            },
            metadata: vk
          }, wk, Hk), (0, Sk.j)(null, null, ik, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: kk => "p1" in kk,
              get: kk => kk.p1,
              set: (kk, Fk) => {
                kk.p1 = Fk
              }
            },
            metadata: vk
          }, Jk, xk), (0, Sk.j)(null, null, yk, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: kk => "p2" in kk,
              get: kk => kk.p2,
              set: (kk, Fk) => {
                kk.p2 = Fk
              }
            },
            metadata: vk
          }, Pk, Kk), (0, Sk.j)(null, null, lk, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: kk => "p3" in kk,
              get: kk => kk.p3,
              set: (kk, Fk) => {
                kk.p3 = Fk
              }
            },
            metadata: vk
          }, Qk, sk), (0, Sk.j)(null, null, ak, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: kk => "pid" in kk,
              get: kk => kk.pid,
              set: (kk, Fk) => {
                kk.pid = Fk
              }
            },
            metadata: vk
          }, Vk, zk), (0, Sk.j)(null, kk = {
            value: Fk
          }, qk, {
            kind: "class",
            name: Fk.name,
            metadata: vk
          }, null, Lk), Fk = kk.value, vk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vk
          }), (0, Sk.n)(Fk, Lk)
        })(), Fk
      })(),
      Rl = (() => {
        let kk, Fk, Ik = [uy({
            ns: il,
            name: "components"
          })],
          Xk = [];
        Fk = class {
          constructor() {
            this.component = []
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfComponents"), (() => {
          const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Ik, {
            kind: "class",
            name: Fk.name,
            metadata: Tk
          }, null, Xk), Fk = kk.value, Tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tk
          }), (0, Sk.n)(Fk, Xk)
        })(), Fk
      })(),
      Ul = (() => {
        let kk, Fk, Ik, Xk, Tk = [uy({
            ns: il,
            name: "component"
          })],
          ik = [],
          yk = [],
          lk = [],
          ak = [],
          qk = [];
        Fk = class {
          constructor(kk, Fk) {
            this.objectid = (0, Sk.n)(this, yk, void 0), this.transform = ((0, Sk.n)(this, lk), (0, Sk.n)(this, ak, void 0)), (0, Sk.n)(this, qk), this.objectid = kk, this.transform = Fk
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfComponent"), (() => {
          const Lk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ik = [Ry({
            name: "objectid"
          })], Xk = [Ry({
            name: "transform",
            formatter: zl
          })], (0, Sk.j)(null, null, Ik, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: kk => "objectid" in kk,
              get: kk => kk.objectid,
              set: (kk, Fk) => {
                kk.objectid = Fk
              }
            },
            metadata: Lk
          }, yk, lk), (0, Sk.j)(null, null, Xk, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: kk => "transform" in kk,
              get: kk => kk.transform,
              set: (kk, Fk) => {
                kk.transform = Fk
              }
            },
            metadata: Lk
          }, ak, qk), (0, Sk.j)(null, kk = {
            value: Fk
          }, Tk, {
            kind: "class",
            name: Fk.name,
            metadata: Lk
          }, null, ik), Fk = kk.value, Lk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Lk
          }), (0, Sk.n)(Fk, ik)
        })(), Fk
      })(),
      Cl = (() => {
        let kk, Fk, Ik, Xk = [uy({
            ns: il,
            name: "basematerials"
          })],
          Tk = [],
          ik = [],
          yk = [];
        Fk = class {
          constructor(kk) {
            this.id = (0, Sk.n)(this, ik, void 0), this.base = ((0, Sk.n)(this, yk), []), this.id = kk
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfBaseMaterials"), (() => {
          const lk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ik = [Ry({
            name: "id"
          })], (0, Sk.j)(null, null, Ik, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: kk => "id" in kk,
              get: kk => kk.id,
              set: (kk, Fk) => {
                kk.id = Fk
              }
            },
            metadata: lk
          }, ik, yk), (0, Sk.j)(null, kk = {
            value: Fk
          }, Xk, {
            kind: "class",
            name: Fk.name,
            metadata: lk
          }, null, Tk), Fk = kk.value, lk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lk
          }), (0, Sk.n)(Fk, Tk)
        })(), Fk
      })(),
      Nl = (() => {
        let kk, Fk, Ik, Xk, Tk = [uy({
            ns: il,
            name: "base"
          })],
          ik = [],
          yk = [],
          lk = [],
          ak = [],
          qk = [];
        Fk = class {
          constructor(kk, Fk) {
            this.name = (0, Sk.n)(this, yk, void 0), this.displaycolor = ((0, Sk.n)(this, lk), (0, Sk.n)(this, ak, void 0)), (0, Sk.n)(this, qk), this.name = kk, this.displaycolor = Fk
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfBase"), (() => {
          const Lk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ik = [Ry({
            name: "name"
          })], Xk = [Ry({
            name: "displaycolor"
          })], (0, Sk.j)(null, null, Ik, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: kk => "name" in kk,
              get: kk => kk.name,
              set: (kk, Fk) => {
                kk.name = Fk
              }
            },
            metadata: Lk
          }, yk, lk), (0, Sk.j)(null, null, Xk, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: kk => "displaycolor" in kk,
              get: kk => kk.displaycolor,
              set: (kk, Fk) => {
                kk.displaycolor = Fk
              }
            },
            metadata: Lk
          }, ak, qk), (0, Sk.j)(null, kk = {
            value: Fk
          }, Tk, {
            kind: "class",
            name: Fk.name,
            metadata: Lk
          }, null, ik), Fk = kk.value, Lk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Lk
          }), (0, Sk.n)(Fk, ik)
        })(), Fk
      })(),
      cl = (() => {
        let kk, Fk, Ik = [uy({
            ns: il,
            name: "build"
          })],
          Xk = [];
        Fk = class {
          constructor() {
            this.item = []
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfBuild"), (() => {
          const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Ik, {
            kind: "class",
            name: Fk.name,
            metadata: Tk
          }, null, Xk), Fk = kk.value, Tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tk
          }), (0, Sk.n)(Fk, Xk)
        })(), Fk
      })(),
      Wl = (() => {
        let kk, Fk, Ik, Xk, Tk, ik = [uy({
            ns: il,
            name: "item"
          })],
          yk = [],
          lk = [],
          ak = [],
          qk = [],
          Lk = [],
          tk = [],
          Zk = [];
        Fk = class {
          constructor(kk, Fk, Ik) {
            this.objectid = (0, Sk.n)(this, lk, void 0), this.transform = ((0, Sk.n)(this, ak), (0, Sk.n)(this, qk, void 0)), this.partnumber = ((0, Sk.n)(this, Lk), (0, Sk.n)(this, tk, void 0)), this.metadatagroup = (0, Sk.n)(this, Zk), this.objectid = kk, this.transform = Fk, this.partnumber = Ik
          }
        };
        return (0, Sk.q)(Fk, "ThreeMfItem"), (() => {
          const jk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ik = [Ry({
            name: "objectid"
          })], Xk = [Ry({
            name: "transform",
            formatter: zl
          })], Tk = [Ry({
            name: "partnumber"
          })], (0, Sk.j)(null, null, Ik, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: kk => "objectid" in kk,
              get: kk => kk.objectid,
              set: (kk, Fk) => {
                kk.objectid = Fk
              }
            },
            metadata: jk
          }, lk, ak), (0, Sk.j)(null, null, Xk, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: kk => "transform" in kk,
              get: kk => kk.transform,
              set: (kk, Fk) => {
                kk.transform = Fk
              }
            },
            metadata: jk
          }, qk, Lk), (0, Sk.j)(null, null, Tk, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: kk => "partnumber" in kk,
              get: kk => kk.partnumber,
              set: (kk, Fk) => {
                kk.partnumber = Fk
              }
            },
            metadata: jk
          }, tk, Zk), (0, Sk.j)(null, kk = {
            value: Fk
          }, ik, {
            kind: "class",
            name: Fk.name,
            metadata: jk
          }, null, yk), Fk = kk.value, jk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jk
          }), (0, Sk.n)(Fk, yk)
        })(), Fk
      })();
    class fl {
      constructor(kk, Fk) {
        this._object = new Ol(kk, Fk)
      }
      withName(kk) {
        return this._object.name = kk, this
      }
      withThumbnail(kk) {
        return this._object.thumbnail = kk, this
      }
      withProperty(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = kk, this._object.id = Fk, this
      }
      build() {
        return this._object
      }
      reset(kk, Fk) {
        this._object = new Ol(kk, Fk)
      }
    }
    class Bl extends fl {
      constructor(kk) {
        super(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : al.model), this._object.content = new Rl
      }
      withComponent(kk, Fk) {
        return this._object.content.component.push(new Ul(kk, Fk)), this
      }
    }
    class dl extends fl {
      constructor(kk) {
        super(kk, al.model)
      }
      withPostProcessHandlers(kk, Fk) {
        return this._vh = kk, this._th = Fk, this
      }
      withData(kk) {
        return this._object.content = this._buildMesh(kk), this
      }
      withMaterial(kk, Fk) {
        return this._object.pid = kk, this._object.pindex = Fk, this
      }
      _buildMesh(kk) {
        const Fk = this._buildVertices(kk.positions),
          Ik = this._buildTriangle(kk.indices);
        return new nl(Fk, Ik)
      }
      _buildVertices(kk) {
        const Fk = new Gl;
        if (kk)
          for (let Ik = 0; Ik < kk.length;) {
            const Xk = kk[Ik++],
              Tk = kk[Ik++],
              ik = kk[Ik++];
            let yk = new pl(Xk, Tk, ik);
            this._vh && (yk = this._vh(yk)), Fk.vertex.push(yk)
          }
        return Fk
      }
      _buildTriangle(kk) {
        const Fk = new ul;
        if (kk)
          for (let Ik = 0; Ik < kk.length;) {
            const Xk = kk[Ik++],
              Tk = kk[Ik++],
              ik = kk[Ik++];
            let yk = new bl(Xk, Tk, ik);
            this._th && (yk = this._th(yk)), Fk.triangle.push(yk)
          }
        return Fk
      }
    }
    class Yl {
      constructor(kk) {
        this._m = new Cl(kk)
      }
      withColor(kk, Fk) {
        this._m.base = this._m.base ?? [];
        let Ik = this._m.base.find((Fk => Fk.name.toLowerCase() === kk.toLowerCase()));
        return Ik ? (Ik.displaycolor = this._rgbaToHex(Fk), this) : (Ik = new Nl(kk, this._rgbaToHex(Fk)), this._m.base.push(Ik), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(kk) {
        const Fk = kk => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(kk, 1 / 2.2)))),
          Ik = Fk(kk.r).toString(16).padStart(2, "0").toUpperCase(),
          Xk = Fk(kk.g).toString(16).padStart(2, "0").toUpperCase(),
          Tk = Fk(kk.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof kk.a) {
          return `#${Ik}${Xk}${Tk}${Math.round(Math.min(255,Math.max(0,255*kk.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${Ik}${Xk}${Tk}`
      }
    }
    class Al {
      constructor() {
        this._model = new Sl, this._objects = new Map
      }
      withMetaData(kk, Fk, Ik, Xk) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new ol(kk, Fk, Ik, Xk)), this
      }
      withMaterial(kk) {
        return kk instanceof Yl && (kk = kk.build()), kk && (this._model.resources = this._model.resources ?? new El, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(kk)), this
      }
      withMesh(kk) {
        return kk instanceof dl && (kk = kk.build()), this._model.resources = this._model.resources ?? new El, this._model.resources.object.push(kk), this
      }
      withComponents(kk) {
        return kk instanceof Bl && (kk = kk.build()), this._model.resources = this._model.resources ?? new El, this._model.resources.object.push(kk), this
      }
      withBuild(kk, Fk, Ik) {
        return this._model.build = this._model.build ?? new cl, this._model.build.item?.push(new Wl(kk, Fk, Ik)), this
      }
      withUnit(kk) {
        return this._model.unit = kk, this
      }
      reset() {
        return this._model = new Sl, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    Al.KnownMetaSet = new Set(Sl.KnownMeta.map((kk => kk.toLowerCase())));
    class gl {
      withContentType(kk) {
        this._cts || (this._cts = new xl);
        const Fk = this._cts.items;
        return Fk.some((Fk => Fk.ext === kk.ext && Fk.ct === kk.ct)) || Fk.push(kk), this
      }
      withRelationship(kk) {
        this._rs || (this._rs = new Kl);
        const Fk = this._rs.items;
        return Fk.some((Fk => Fk.id === kk.id)) || Fk.push(kk), this.withContentType(new Pl("rels", tl.Relationships)), this
      }
      withModel(kk) {
        return kk instanceof Al && (kk = kk.build()), this._m = kk, this.withContentType(new Pl("model", tl.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const kk = `${jl}${el}`;
        if (!this._rs) {
          const Fk = `/${kk}`;
          this.withRelationship(new Ql("rel0", Jl.ThreeDimModel, Fk))
        }
        return new sl(this._cts, this._rs, this._m)
      }
    }
    class ml {
      constructor(kk) {
        this._o = kk
      }
      get options() {
        return this._o
      }
      async serializeAsync(kk) {
        const Fk = await this.ensureZipLibReadyAsync();
        if (!Fk) return;
        const Ik = Fk.Zip,
          Xk = Fk.ZipDeflate;
        if (!Ik || !Xk) throw new Error("fflate Zip / ZipDeflate not available");
        const Tk = function(kk, Fk, Ik) {
          const Tk = new Xk(Fk, {
            level: 6
          });
          kk.add(Tk);
          const ik = function(kk) {
              return {
                push: (Fk, Ik) => kk.push(Fk, Ik)
              }
            }(Tk),
            yk = new Tl(ik),
            lk = new Il(yk).dec("1.0", "UTF-8");
          new My(lk).serialize(Ik), yk.finish()
        };
        for (var ik = arguments.length, yk = new Array(ik > 1 ? ik - 1 : 0), lk = 1; lk < ik; lk++) yk[lk - 1] = arguments[lk];
        const ak = this.toDocument(...yk);
        if (!ak) return;
        const qk = new Ik(kk);
        Tk(qk, Hl, ak.contentTypes), Tk(qk, `${Zl}${wl}`, ak.relationships), Tk(qk, `${jl}${el}`, ak.model), qk.end()
      }
      toDocument() {
        const kk = (new Al).withUnit(this._o?.unit ?? ll.millimeter);
        if (this.options.metadata)
          for (const Tk in this.options.metadata) kk.withMetaData(Tk, this.options.metadata[Tk]);
        for (var Fk = arguments.length, Ik = new Array(Fk), Xk = 0; Xk < Fk; Xk++) Ik[Xk] = arguments[Xk];
        return (new gl).withModel(this.toModel(kk, ...Ik)).build()
      }
    }
    class hl {
      static async SerializeToMemoryAsync(kk) {
        const Fk = new Array;
        let Ik = 0;
        for (var Xk = arguments.length, Tk = new Array(Xk > 1 ? Xk - 1 : 0), ik = 1; ik < Xk; ik++) Tk[ik - 1] = arguments[ik];
        if (await kk.serializeAsync((function(kk, Xk, Tk) {
            Fk.push(Xk), Ik += Xk.length
          }), ...Tk), !Ik) return;
        const yk = new Uint8Array(Ik);
        let lk = 0;
        for (const ak of Fk) yk.set(ak, lk), lk += ak.length;
        return yk
      }
    }
    class rl {}
    rl.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Dl {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = kk, this._to = Fk, this._step = Ik, this._i = kk
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
    class Ml extends ml {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Ml.DefaultOptions,
          ...kk
        })
      }
      toModel(kk) {
        for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Xk = 1; Xk < Fk; Xk++) Ik[Xk - 1] = arguments[Xk];
        Ik = Ik.filter((kk => kk instanceof LX.c || kk instanceof jk.c));
        const Tk = new Dl,
          ik = kk,
          yk = new Map,
          lk = this.options.exportInstances ? [] : null;
        for (let ak = 0; ak < Ik.length; ak++) {
          const kk = Ik[ak];
          if (kk instanceof jk.c) {
            lk?.push(kk);
            continue
          }
          const Fk = kk.name || `mesh${ak}`,
            Xk = kk.getWorldMatrix(),
            qk = this._handleBabylonTo3mfMatrixTransformToRef(Xk, Vl.Zero()),
            Lk = kk.lK;
          if (void 0 === Lk) continue;
          const tk = 1 == Lk.length;
          for (let Ik = 0; Ik < Lk.length; Ik++) {
            const Xk = Lk[Ik],
              lk = this._extractSubMesh(kk, Xk);
            if (lk) {
              const kk = tk ? `${Fk}` : `${Fk}_${Ik}`,
                ak = new dl(Tk.next()).withData(lk).withName(kk).build();
              ik.withMesh(ak), ik.withBuild(ak.id, qk), yk.set(Xk, ak)
            }
          }
        }
        if (lk && lk.length) {
          const kk = this._groupBy(lk, (kk => kk.DXk));
          for (const [Fk, Ik] of Array.from(kk.entries()))
            if (Ik && Ik.length)
              for (let kk = 0; kk < Ik.length; kk++) {
                const Xk = Ik[kk].getWorldMatrix(),
                  Tk = Fk.lK;
                for (let kk = 0; kk < Tk.length; kk++) {
                  const Fk = Tk[kk],
                    Ik = yk.get(Fk);
                  Ik && ik.withBuild(Ik.id, this._handleBabylonTo3mfMatrixTransformToRef(Xk, Vl.Zero()))
                }
              }
        }
        return ik.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const kk = globalThis;
          return kk.fflate || await Tk.Tools.LoadScriptAsync(rl.FFLATEUrl), kk.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(kk, Fk) {
        const Ik = kk.yXk();
        if (!Ik) return;
        const Xk = kk.getVerticesData(Ml._PositionKind);
        if (!Xk) return;
        if (0 == Fk.indexStart && Fk.indexCount == Ik.length) return {
          positions: Xk,
          indices: Ik
        };
        const Tk = Fk.indexStart,
          ik = new Map,
          yk = [],
          lk = new Uint32Array(Fk.indexCount);
        for (let ak = 0; ak < Fk.indexCount; ak++) {
          const kk = Ik[Tk + ak];
          let Fk = ik.get(kk);
          if (void 0 === Fk) {
            Fk = ik.size, ik.set(kk, Fk);
            const Ik = 3 * kk;
            yk.push(Xk[Ik], Xk[Ik + 1], Xk[Ik + 2])
          }
          lk[ak] = Fk
        }
        return {
          positions: new Float32Array(yk),
          indices: lk
        }
      }
      _groupBy(kk, Fk) {
        const Ik = new Map;
        for (const Xk of kk) {
          const kk = Fk(Xk),
            Tk = Ik.get(kk);
          Tk ? Tk.push(Xk) : Ik.set(kk, [Xk])
        }
        return Ik
      }
      _handleBabylonTo3mfMatrixTransformToRef(kk, Fk) {
        const Ik = kk.multiplyToRef(Ml._R_BJS_TO_3MF, Nk.c.Zero()).m;
        return Fk.values = [Ik[0], Ik[1], Ik[2], Ik[4], Ik[5], Ik[6], Ik[8], Ik[9], Ik[10], Ik[12], Ik[13], Ik[14]], Fk
      }
    }
    Ml.DefaultOptions = {
      unit: ll.meter,
      exportInstances: !1
    }, Ml._PositionKind = "position", Ml._R_BJS_TO_3MF = Nk.c.RotationX(Math.PI / 2).multiply(Nk.c.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);