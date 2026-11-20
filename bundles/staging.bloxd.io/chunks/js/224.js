export const id = 224;
export const ids = [224, 229];
export const modules = {
  41252: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(41182),
      tk = Bk(39392);
    let ak = !1;

    function Xk() {
      ak || (ak = !0, tk.e.prototype._sphericalPolynomialTargetSize = 0, tk.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(tk.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Rk.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((kk => {
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
  36911: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      Color3: () => Rk.e,
      c: () => Rk.i
    });
    var Rk = Bk(36917);
    (0, Rk.j)()
  },
  37459: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(37467);
    class tk {
      static GetPlanes(kk) {
        const Fk = [];
        for (let Bk = 0; Bk < 6; Bk++) Fk.push(new Rk.c(0, 0, 0, 0));
        return tk.GetPlanesToRef(kk, Fk), Fk
      }
      static GetNearPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[2], Fk.normal.y = Bk[7] + Bk[6], Fk.normal.z = Bk[11] + Bk[10], Fk.d = Bk[15] + Bk[14], Fk.normalize()
      }
      static GetFarPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[2], Fk.normal.y = Bk[7] - Bk[6], Fk.normal.z = Bk[11] - Bk[10], Fk.d = Bk[15] - Bk[14], Fk.normalize()
      }
      static GetLeftPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[0], Fk.normal.y = Bk[7] + Bk[4], Fk.normal.z = Bk[11] + Bk[8], Fk.d = Bk[15] + Bk[12], Fk.normalize()
      }
      static GetRightPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[0], Fk.normal.y = Bk[7] - Bk[4], Fk.normal.z = Bk[11] - Bk[8], Fk.d = Bk[15] - Bk[12], Fk.normalize()
      }
      static GetTopPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[1], Fk.normal.y = Bk[7] - Bk[5], Fk.normal.z = Bk[11] - Bk[9], Fk.d = Bk[15] - Bk[13], Fk.normalize()
      }
      static GetBottomPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[1], Fk.normal.y = Bk[7] + Bk[5], Fk.normal.z = Bk[11] + Bk[9], Fk.d = Bk[15] + Bk[13], Fk.normalize()
      }
      static GetPlanesToRef(kk, Fk) {
        tk.GetNearPlaneToRef(kk, Fk[0]), tk.GetFarPlaneToRef(kk, Fk[1]), tk.GetLeftPlaneToRef(kk, Fk[2]), tk.GetRightPlaneToRef(kk, Fk[3]), tk.GetTopPlaneToRef(kk, Fk[4]), tk.GetBottomPlaneToRef(kk, Fk[5])
      }
      static IsPointInFrustum(kk, Fk) {
        for (let Bk = 0; Bk < 6; Bk++)
          if (Fk[Bk].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37467: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(36758);
    class tk {
      constructor(kk, Fk, Bk, tk) {
        this.normal = new Rk.s(kk, Fk, Bk), this.d = tk
      }
      PBk() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new tk(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        const Fk = tk._TmpMatrix;
        kk.invertToRef(Fk);
        const Bk = Fk.m,
          Rk = this.normal.x,
          ak = this.normal.y,
          Xk = this.normal.z,
          bk = this.d,
          wk = Rk * Bk[0] + ak * Bk[1] + Xk * Bk[2] + bk * Bk[3],
          dk = Rk * Bk[4] + ak * Bk[5] + Xk * Bk[6] + bk * Bk[7],
          sk = Rk * Bk[8] + ak * Bk[9] + Xk * Bk[10] + bk * Bk[11],
          Vk = Rk * Bk[12] + ak * Bk[13] + Xk * Bk[14] + bk * Bk[15];
        return new tk(wk, dk, sk, Vk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, Fk, Bk) {
        const Rk = Fk.x - kk.x,
          tk = Fk.y - kk.y,
          ak = Fk.z - kk.z,
          Xk = Bk.x - kk.x,
          bk = Bk.y - kk.y,
          wk = Bk.z - kk.z,
          dk = tk * wk - ak * bk,
          sk = ak * Xk - Rk * wk,
          Vk = Rk * bk - tk * Xk,
          Jk = Math.sqrt(dk * dk + sk * sk + Vk * Vk);
        let Ak;
        return Ak = 0 !== Jk ? 1 / Jk : 0, this.normal.x = dk * Ak, this.normal.y = sk * Ak, this.normal.z = Vk * Ak, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, Fk) {
        return Rk.s.Dot(this.normal, kk) <= Fk
      }
      signedDistanceTo(kk) {
        return Rk.s.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new tk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, Fk, Bk) {
        const Rk = new tk(0, 0, 0, 0);
        return Rk.copyFromPoints(kk, Fk, Bk), Rk
      }
      static FromPositionAndNormal(kk, Fk) {
        const Bk = new tk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, Fk, Bk)
      }
      static FromPositionAndNormalToRef(kk, Fk, Bk) {
        return Bk.normal.sBk(Fk), Bk.normal.normalize(), Bk.d = -kk.dot(Bk.normal), Bk
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, Fk, Bk) {
        const tk = -(Fk.x * kk.x + Fk.y * kk.y + Fk.z * kk.z);
        return Rk.s.Dot(Bk, Fk) + tk
      }
    }
    tk._TmpMatrix = Rk.c.Identity()
  },
  36754: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      Matrix: () => Rk.c,
      Quaternion: () => Rk.e,
      RegisterMathVector: () => Rk.i,
      TmpVectors: () => Rk.l,
      Vector2: () => Rk.p,
      Qe: () => Rk.s,
      Vector4: () => Rk.v
    });
    var Rk = Bk(36758);
    (0, Rk.i)()
  },
  37759: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      constructor(kk, Fk, Bk, Rk) {
        this.x = kk, this.y = Fk, this.width = Bk, this.height = Rk
      }
      toGlobal(kk, Fk) {
        return new Rk(this.x * kk, this.y * Fk, this.width * kk, this.height * Fk)
      }
      toGlobalToRef(kk, Fk, Bk) {
        return Bk.x = this.x * kk, Bk.y = this.y * Fk, Bk.width = this.width * kk, Bk.height = this.height * Fk, this
      }
      clone() {
        return new Rk(this.x, this.y, this.width, this.height)
      }
    }
  },
  41182: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => dk
    });
    var Rk = Bk(36758),
      tk = Bk(36790),
      ak = Bk(39384),
      Xk = Bk(36764),
      bk = Bk(36917);
    class wk {
      constructor(kk, Fk, Bk, Rk) {
        this.name = kk, this.worldAxisForNormal = Fk, this.worldAxisForFileX = Bk, this.worldAxisForFileY = Rk
      }
    }
    class dk {
      static _NearestPow2Floor(kk) {
        return kk <= 1 ? 1 : 1 << Math.floor(Math.log2(kk))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(kk) {
        if (!kk.isCube) return null;
        kk.XN()?.ne().flushFramebuffer();
        const Fk = kk.getSize().width,
          Bk = kk._sphericalPolynomialTargetSize,
          Rk = Bk > 0 ? this._NearestPow2Floor(Bk) : 0,
          tk = !kk.noMipmap && !0 === kk._texture?.generateMipMaps,
          ak = Rk > 0 && Rk < Fk && tk,
          Xk = ak ? Math.max(0, Math.round(Math.log2(Fk / Rk))) : 0,
          bk = ak ? Math.max(1, Math.floor(Fk / Math.pow(2, Xk))) : Fk,
          wk = kk.readPixels(0, Xk, void 0, !1),
          dk = kk.readPixels(1, Xk, void 0, !1);
        let sk, Vk;
        kk.isRenderTarget ? (sk = kk.readPixels(3, Xk, void 0, !1), Vk = kk.readPixels(2, Xk, void 0, !1)) : (sk = kk.readPixels(2, Xk, void 0, !1), Vk = kk.readPixels(3, Xk, void 0, !1));
        const Jk = kk.readPixels(4, Xk, void 0, !1),
          Ak = kk.readPixels(5, Xk, void 0, !1),
          ek = kk.gammaSpace,
          yk = Rk > 0 && Rk < Fk && !ak;
        return new Promise((kk => {
          Promise.all([dk, wk, sk, Vk, Jk, Ak]).then((Bk => {
            let [tk, ak, Xk, wk, dk, sk] = Bk, Vk = bk;
            if (yk) {
              const kk = 4;
              tk = this._DownsampleFace(tk, Fk, Rk, kk), ak = this._DownsampleFace(ak, Fk, Rk, kk), Xk = this._DownsampleFace(Xk, Fk, Rk, kk), wk = this._DownsampleFace(wk, Fk, Rk, kk), dk = this._DownsampleFace(dk, Fk, Rk, kk), sk = this._DownsampleFace(sk, Fk, Rk, kk), Vk = Rk
            }
            const Jk = {
              size: Vk,
              right: ak,
              left: tk,
              up: Xk,
              down: wk,
              front: dk,
              back: sk,
              format: 5,
              type: tk instanceof Float32Array ? 1 : 0,
              gammaSpace: ek
            };
            kk(this.ConvertCubeMapToSphericalPolynomial(Jk))
          }))
        }))
      }
      static _AreaElement(kk, Fk) {
        return Math.atan2(kk * Fk, Math.sqrt(kk * kk + Fk * Fk + 1))
      }
      static _DownsampleFace(kk, Fk, Bk, Rk) {
        const tk = kk instanceof Float32Array ? kk : Float32Array.from(kk),
          ak = Bk * Bk * Rk,
          Xk = new Float32Array(ak),
          bk = Fk / Bk,
          wk = 1 / (bk * bk);
        for (let sk = 0; sk < Bk; sk++) {
          const kk = Math.floor(sk * bk),
            ak = Math.floor((sk + 1) * bk);
          for (let dk = 0; dk < Bk; dk++) {
            const Vk = Math.floor(dk * bk),
              Jk = Math.floor((dk + 1) * bk),
              Ak = (sk * Bk + dk) * Rk;
            for (let Bk = 0; Bk < Rk; Bk++) {
              let bk = 0;
              for (let Xk = kk; Xk < ak; Xk++)
                for (let kk = Vk; kk < Jk; kk++) bk += tk[(Xk * Fk + kk) * Rk + Bk];
              Xk[Ak + Bk] = bk * wk
            }
          }
        }
        if (kk instanceof Float32Array) return Xk;
        const dk = new(0, kk.constructor)(ak);
        for (let sk = 0; sk < ak; sk++) dk[sk] = Xk[sk] + .5 | 0;
        return dk
      }
      static ConvertCubeMapToSphericalPolynomial(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Bk = Fk > 0 ? this._NearestPow2Floor(Fk) : 0;
        if (Bk > 0 && kk.size > Bk) {
          const Fk = 5 === kk.format ? 4 : 3,
            Rk = ["right", "left", "up", "down", "front", "back"],
            tk = {};
          for (const ak of Rk) tk[ak] = this._DownsampleFace(kk[ak], kk.size, Bk, Fk);
          kk = {
            ...kk,
            ...tk,
            size: Bk
          }
        }
        const Rk = new ak.b;
        let wk = 0;
        const dk = 2 / kk.size,
          sk = dk,
          Vk = .5 * dk,
          Jk = Vk - 1;
        for (let ak = 0; ak < 6; ak++) {
          const Fk = this._FileFaces[ak],
            Bk = kk[Fk.name];
          let Ak = Jk;
          const ek = 5 === kk.format ? 4 : 3;
          for (let ak = 0; ak < kk.size; ak++) {
            let yk = Jk;
            for (let sk = 0; sk < kk.size; sk++) {
              const Jk = Fk.worldAxisForFileX.scale(yk).add(Fk.worldAxisForFileY.scale(Ak)).add(Fk.worldAxisForNormal);
              Jk.normalize();
              const fk = this._AreaElement(yk - Vk, Ak - Vk) - this._AreaElement(yk - Vk, Ak + Vk) - this._AreaElement(yk + Vk, Ak - Vk) + this._AreaElement(yk + Vk, Ak + Vk);
              let mk = Bk[ak * kk.size * ek + sk * ek + 0],
                Wk = Bk[ak * kk.size * ek + sk * ek + 1],
                vk = Bk[ak * kk.size * ek + sk * ek + 2];
              isNaN(mk) && (mk = 0), isNaN(Wk) && (Wk = 0), isNaN(vk) && (vk = 0), 0 === kk.type && (mk /= 255, Wk /= 255, vk /= 255), kk.gammaSpace && (mk = Math.pow((0, tk.Clamp)(mk), Xk.i), Wk = Math.pow((0, tk.Clamp)(Wk), Xk.i), vk = Math.pow((0, tk.Clamp)(vk), Xk.i));
              const ik = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const kk = Math.max(mk, Wk, vk);
                if (kk > ik) {
                  const Fk = ik / kk;
                  mk *= Fk, Wk *= Fk, vk *= Fk
                }
              } else mk = (0, tk.Clamp)(mk, 0, ik), Wk = (0, tk.Clamp)(Wk, 0, ik), vk = (0, tk.Clamp)(vk, 0, ik);
              const Yk = new bk.e(mk, Wk, vk);
              Rk.addLight(Jk, Yk, fk), wk += fk, yk += dk
            }
            Ak += sk
          }
        }
        const Ak = 6 * (4 * Math.PI) / 6 / wk;
        return Rk.scaleInPlace(Ak), Rk.convertIncidentRadianceToIrradiance(), Rk.convertIrradianceToLambertianRadiance(), ak.f.FromHarmonics(Rk)
      }
    }
    dk._FileFaces = [new wk("right", new Rk.s(1, 0, 0), new Rk.s(0, 0, -1), new Rk.s(0, -1, 0)), new wk("left", new Rk.s(-1, 0, 0), new Rk.s(0, 0, 1), new Rk.s(0, -1, 0)), new wk("up", new Rk.s(0, 1, 0), new Rk.s(1, 0, 0), new Rk.s(0, 0, 1)), new wk("down", new Rk.s(0, -1, 0), new Rk.s(1, 0, 0), new Rk.s(0, 0, -1)), new wk("front", new Rk.s(0, 0, 1), new Rk.s(1, 0, 0), new Rk.s(0, -1, 0)), new wk("back", new Rk.s(0, 0, -1), new Rk.s(-1, 0, 0), new Rk.s(0, -1, 0))], dk.MAX_HDRI_VALUE = 4096, dk.PRESERVE_CLAMPED_COLORS = !1
  },
  40981: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk.f,
      f: () => Rk.j
    });
    var Rk = Bk(39436);
    (0, Rk.p)()
  },
  37578: (kk, Fk, Bk) => {
    function Rk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const Fk = 16 * Math.random() | 0;
        return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
      }))
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  },
  41222: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(41215),
      tk = Bk(41230);
    class ak {
      static ExpandRGBDTexture(kk) {
        const Fk = kk._texture;
        if (!Fk || !kk.isRGBD) return;
        const tk = Fk.ne(),
          ak = tk.getCaps(),
          Xk = Fk.isReady;
        let bk = !1;
        ak.textureHalfFloatRender && ak.textureHalfFloatLinearFiltering ? (bk = !0, Fk.type = 2) : ak.textureFloatRender && ak.textureFloatLinearFiltering && (bk = !0, Fk.type = 1), bk && (Fk.isReady = !1, Fk._isRGBD = !1, Fk.invertY = !1);
        const wk = async () => {
          const ak = tk.isWebGPU,
            Xk = ak ? 1 : 0;
          Fk.isReady = !1, ak ? await Bk.e(332).then((() => Bk(61139))) : await Bk.e(314).then((() => Bk(61143)));
          const bk = new Rk.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, tk, !1, void 0, Fk.type, void 0, null, !1, void 0, Xk);
          bk.externalTextureSamplerBinding = !0;
          const wk = tk.createRenderTargetTexture(Fk.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Fk.samplingMode,
            type: Fk.type,
            format: 5
          });
          bk.onEffectCreatedObservable.addOnce((Bk => {
            Bk.executeWhenCompiled((() => {
              bk.onApply = kk => {
                kk._bindTexture("textureSampler", Fk), kk.setFloat2("scale", 1, 1)
              }, kk.XN()?.postProcessManager.directRender([bk], wk, !0), tk.restoreDefaultFramebuffer(), tk._releaseTexture(Fk), bk && bk.dispose(), wk._swapAndDie(Fk), Fk.isReady = !0
            }))
          }))
        };
        bk && (Xk ? wk() : kk.onLoadObservable.addOnce(wk))
      }
      static async EncodeTextureToRGBD(kk, Fk) {
        let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Fk.ne().isWebGPU ? await Bk.e(333).then((() => Bk(61165))) : await Bk.e(315).then((() => Bk(61157))), await (0, tk.d)("rgbdEncode", kk, Fk, Rk, 1, 5)
      }
    }
  },
  60903: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      AsyncLoop: () => Rk.d,
      RegisterTools: () => Rk.f,
      Tools: () => Rk.h,
      className: () => Rk.k
    });
    var Rk = Bk(39492);
    (0, Rk.f)()
  },
  41267: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk
    });
    class Rk {
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
        kk.idle = !1, kk.workerPromise.then((Bk => {
          Fk(Bk, (() => {
            const Fk = this._pendingActions.shift();
            Fk ? this._execute(kk, Fk) : kk.idle = !0
          }))
        }))
      }
    }
    class tk extends Rk {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tk.DefaultOptions;
        super([]), this._maxWorkers = kk, this._createWorkerAsync = Fk, this._options = Bk
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
        kk.timeoutId && (clearTimeout(kk.timeoutId), delete kk.timeoutId), super._execute(kk, ((Bk, Rk) => {
          Fk(Bk, (() => {
            Rk(), kk.idle && (kk.timeoutId = setTimeout((() => {
              kk.workerPromise.then((kk => {
                kk.terminate()
              }));
              const Fk = this._workerInfos.indexOf(kk); - 1 !== Fk && this._workerInfos.splice(Fk, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    tk.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60934: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      AbstractThreeMfSerializer: () => xb,
      BVHExporter: () => NX,
      ContentTypeFileName: () => yb,
      DefaultXmlSerializerFormatOptions: () => CX,
      DefaultXmlSerializerNumberOptions: () => qX,
      EXT_lights_area: () => Wt,
      EXT_mesh_gpu_instancing: () => zR,
      EXT_texture_avif: () => XX,
      EXT_texture_webp: () => BX,
      GLTF2Export: () => TR,
      GLTFData: () => dk,
      GetXmlFieldMeta: () => rX,
      GetXmlName: () => DX,
      IsQualifiedName: () => HX,
      KHR_draco_mesh_compression: () => IR,
      KHR_interactivity: () => Vt,
      KHR_lights_punctual: () => bt,
      KHR_materials_anisotropy: () => ot,
      KHR_materials_clearcoat: () => Nt,
      KHR_materials_coat: () => ct,
      KHR_materials_diffuse_roughness: () => Da,
      KHR_materials_diffuse_transmission: () => Pt,
      KHR_materials_dispersion: () => Zt,
      KHR_materials_emissive_strength: () => jt,
      KHR_materials_fuzz: () => Ja,
      KHR_materials_ior: () => Qt,
      KHR_materials_iridescence: () => Ra,
      KHR_materials_openpbr: () => qa,
      KHR_materials_sheen: () => ba,
      KHR_materials_specular: () => fa,
      KHR_materials_transmission: () => ia,
      KHR_materials_unlit: () => Ea,
      KHR_materials_volume: () => ua,
      KHR_materials_volume_scatter: () => ca,
      KHR_texture_basisu: () => Ia,
      KHR_texture_transform: () => Ka,
      Known3mfRelationshipTypes: () => fb,
      KnownI3mfContentType: () => sb,
      Matrix3d: () => ob,
      MatrixFormatter: () => Lb,
      ModelFileName: () => Ab,
      NumberFormatter: () => KX,
      OBJExport: () => Xk,
      Object3dDirName: () => Jb,
      OpenXmlContentTypesNamespace: () => wb,
      OpenXmlRelationshipsNamespace: () => db,
      RegisterEXT_lights_area: () => it,
      RegisterEXT_mesh_gpu_instancing: () => hR,
      RegisterEXT_texture_avif: () => wX,
      RegisterEXT_texture_webp: () => tX,
      RegisterKHR_draco_mesh_compression: () => kt,
      RegisterKHR_interactivity: () => At,
      RegisterKHR_lights_punctual: () => dt,
      RegisterKHR_materials_anisotropy: () => Ot,
      RegisterKHR_materials_clearcoat: () => ut,
      RegisterKHR_materials_coat: () => Tt,
      RegisterKHR_materials_diffuse_roughness: () => Pa,
      RegisterKHR_materials_diffuse_transmission: () => qt,
      RegisterKHR_materials_dispersion: () => Kt,
      RegisterKHR_materials_emissive_strength: () => nt,
      RegisterKHR_materials_fuzz: () => ea,
      RegisterKHR_materials_ior: () => Fa,
      RegisterKHR_materials_iridescence: () => aa,
      RegisterKHR_materials_openpbr: () => Za,
      RegisterKHR_materials_sheen: () => da,
      RegisterKHR_materials_specular: () => Wa,
      RegisterKHR_materials_transmission: () => oa,
      RegisterKHR_materials_unlit: () => Na,
      RegisterKHR_materials_volume: () => ga,
      RegisterKHR_materials_volume_scatter: () => Ta,
      RegisterKHR_texture_basisu: () => kX,
      RegisterKHR_texture_transform: () => ja,
      RelationshipDirName: () => Vb,
      RelationshipFileName: () => eb,
      ResolveFormatOptions: () => pX,
      ResolveNumberOptions: () => ZX,
      STLExport: () => dX,
      ST_ObjectType: () => bb,
      ST_Unit: () => Xb,
      StringXmlWriter: () => Bb,
      ThreeDimModelNamespace: () => tb,
      ThreeMf: () => jb,
      ThreeMfBase: () => Db,
      ThreeMfBaseMaterials: () => rb,
      ThreeMfBuild: () => zb,
      ThreeMfComponent: () => Tb,
      ThreeMfComponents: () => Gb,
      ThreeMfComponentsBuilder: () => qb,
      ThreeMfContentType: () => Wb,
      ThreeMfContentTypes: () => mb,
      ThreeMfDocument: () => Yb,
      ThreeMfDocumentBuilder: () => Kb,
      ThreeMfItem: () => Pb,
      ThreeMfMaterialBuilder: () => Zb,
      ThreeMfMesh: () => ub,
      ThreeMfMeshBuilder: () => Cb,
      ThreeMfMeta: () => Eb,
      ThreeMfMetadataGroup: () => Sb,
      ThreeMfModel: () => Ob,
      ThreeMfModelBuilder: () => pb,
      ThreeMfObject: () => Hb,
      ThreeMfObjectBuilder: () => hb,
      ThreeMfRelationship: () => ib,
      ThreeMfRelationships: () => vb,
      ThreeMfResources: () => Nb,
      ThreeMfSerializer: () => Ib,
      ThreeMfSerializerGlobalConfiguration: () => lb,
      ThreeMfTriangle: () => cb,
      ThreeMfTriangles: () => Ub,
      ThreeMfVertex: () => gb,
      ThreeMfVertices: () => Mb,
      ToQualifiedString: () => hX,
      TokenType: () => kb,
      TriangleSetsNamespace: () => ab,
      USDZExportAsync: () => EX,
      Utf8XmlWriterToBytes: () => Rb,
      XmlAttr: () => GX,
      XmlBuilder: () => Fb,
      XmlElem: () => TX,
      XmlIgnore: () => cX,
      XmlName: () => UX,
      XmlNameToParts: () => PX,
      XmlSerializer: () => IX,
      _ConvertToGLTFPBRMetallicRoughness: () => SB,
      _SolveMetallic: () => EB,
      __IGLTFExporterExtension: () => bk
    });
    var Rk = Bk(36754),
      tk = Bk(60903),
      ak = Bk(39695);
    class Xk {
      static OBJ(kk, Fk, Bk, Xk) {
        const bk = [];
        let wk = 1,
          dk = 1;
        Fk && (Bk || (Bk = "mat"), bk.push("mtllib " + Bk + ".mtl"));
        for (let sk = 0; sk < kk.length; sk++) {
          const Bk = kk[sk],
            Vk = Bk.name || `mesh${sk}}`;
          bk.push(`o ${Vk}`);
          let Jk = null;
          if (Xk) {
            const kk = Bk.computeWorldMatrix(!0);
            Jk = new Rk.Matrix, kk.invertToRef(Jk), Bk.bakeTransformIntoVertices(kk)
          }
          if (Fk) {
            const kk = Bk.material;
            kk && bk.push("usemtl " + kk.id)
          }
          const Ak = Bk.geometry;
          if (!Ak) {
            tk.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const ek = Ak.getVerticesData("position"),
            yk = Ak.getVerticesData("normal"),
            fk = Ak.getVerticesData("uv"),
            mk = Ak.hBk();
          let Wk = 0,
            vk = 0;
          if (!ek || !mk) {
            tk.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const ik = kk[0].XN().useRightHandedSystem ? 1 : -1;
          for (let kk = 0; kk < ek.length; kk += 3) bk.push("v " + ek[kk] * ik + " " + ek[kk + 1] + " " + ek[kk + 2]), Wk++;
          if (null != yk)
            for (let kk = 0; kk < yk.length; kk += 3) bk.push("vn " + yk[kk] * ik + " " + yk[kk + 1] + " " + yk[kk + 2]);
          if (null != fk)
            for (let kk = 0; kk < fk.length; kk += 2) bk.push("vt " + fk[kk] + " " + fk[kk + 1]), vk++;
          const Yk = ["", "", ""],
            Lk = (Bk.material || Bk.XN().defaultMaterial)._getEffectiveOrientation(Bk),
            [Ok, Ek] = Lk === ak.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let kk = 0; kk < mk.length; kk += 3) {
            const Fk = [String(mk[kk] + wk), String(mk[kk + Ok] + wk), String(mk[kk + Ek] + wk)],
              Bk = [String(mk[kk] + dk), String(mk[kk + Ok] + dk), String(mk[kk + Ek] + dk)],
              Rk = Fk,
              tk = null != fk ? Bk : Yk,
              ak = null != yk ? Fk : Yk;
            bk.push("f " + Rk[0] + "/" + tk[0] + "/" + ak[0] + " " + Rk[1] + "/" + tk[1] + "/" + ak[1] + " " + Rk[2] + "/" + tk[2] + "/" + ak[2])
          }
          Xk && Jk && Bk.bakeTransformIntoVertices(Jk), wk += Wk, dk += vk
        }
        return bk.join("\n")
      }
      static MTL(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const Bk = [],
          Rk = kk.material;
        Bk.push("newmtl " + Fk), Bk.push("  Ns " + Rk.specularPower.toFixed(4)), Bk.push("  Ni 1.5000"), Bk.push("  d " + Rk.alpha.toFixed(4)), Bk.push("  Tr 0.0000"), Bk.push("  Tf 1.0000 1.0000 1.0000"), Bk.push("  illum 2"), Bk.push("  Ka " + Rk.ambientColor.r.toFixed(4) + " " + Rk.ambientColor.g.toFixed(4) + " " + Rk.ambientColor.b.toFixed(4)), Bk.push("  Kd " + Rk.diffuseColor.r.toFixed(4) + " " + Rk.diffuseColor.g.toFixed(4) + " " + Rk.diffuseColor.b.toFixed(4)), Bk.push("  Ks " + Rk.specularColor.r.toFixed(4) + " " + Rk.specularColor.g.toFixed(4) + " " + Rk.specularColor.b.toFixed(4)), Bk.push("  Ke " + Rk.emissiveColor.r.toFixed(4) + " " + Rk.emissiveColor.g.toFixed(4) + " " + Rk.emissiveColor.b.toFixed(4));
        Rk.ambientTexture && Bk.push("  map_Ka " + Rk.ambientTexture.name), Rk.diffuseTexture && Bk.push("  map_Kd " + Rk.diffuseTexture.name), Rk.specularTexture && Bk.push("  map_Ks " + Rk.specularTexture.name), Rk.bumpTexture && Bk.push("  map_bump -imfchan z " + Rk.bumpTexture.name), Rk.opacityTexture && Bk.push("  map_d " + Rk.opacityTexture.name);
        return Bk.join("\n")
      }
    }
    var bk = 0,
      wk = Bk(40981);
    class dk {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const kk in this.files) {
          const Fk = this.files[kk],
            Bk = new Blob([Fk], {
              type: (0, wk.e)(kk)
            });
          tk.Tools.Download(Bk, kk)
        }
      }
    }
    var sk = Bk(40583),
      Vk = Bk(40536),
      Jk = Bk(41060),
      Ak = Bk(40541),
      ek = Bk(39236),
      yk = Bk(36772),
      fk = Bk(36911),
      mk = Bk(36790);
    const Wk = mk.HighestCommonFactor,
      vk = {
        ...mk,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: Wk
      };
    var ik = Bk(41230),
      Yk = Bk(40570),
      Lk = Bk(41021),
      Ok = Bk(41024),
      Ek = Bk(41248);
    (0, Ek.RegisterDumpTools)();
    var Sk = Bk(39397),
      Nk = Bk(39404),
      Hk = Bk(38320),
      uk = Bk(39506),
      Mk = Bk(39895),
      gk = Bk(41222);
    let Uk = 0;
    const ck = (kk, Fk, Bk, Rk) => {
        if (!kk[Bk]) {
          const tk = kk.useDelayedTextureLoading;
          kk.useDelayedTextureLoading = !1;
          const ak = kk._blockEntityCollection;
          kk._blockEntityCollection = !1;
          const Xk = Mk.f.CreateFromBase64String(Fk, Rk + Uk++, kk, !0, !1, Mk.f.BILINEAR_SAMPLINGMODE);
          kk._blockEntityCollection = ak;
          const bk = kk.ne().getLoadedTexturesCache(),
            wk = bk.indexOf(Xk.getInternalTexture()); - 1 !== wk && bk.splice(wk, 1), Xk.isRGBD = !0, Xk.wrapU = Mk.f.CLAMP_ADDRESSMODE, Xk.wrapV = Mk.f.CLAMP_ADDRESSMODE, kk[Bk] = Xk, kk.useDelayedTextureLoading = tk, gk.e.ExpandRGBDTexture(Xk);
          const dk = kk.ne().onContextRestoredObservable.add((() => {
            Xk.isRGBD = !0;
            const Fk = kk.onBeforeRenderObservable.add((() => {
              Xk.isReady() && (kk.onBeforeRenderObservable.remove(Fk), gk.e.ExpandRGBDTexture(Xk))
            }))
          }));
          kk.yN.add((() => {
            kk.ne().onContextRestoredObservable.remove(dk)
          }))
        }
        return kk[Bk]
      },
      Gk = kk => ck(kk, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR42u29yY5tWXIlZnbuiSaTbZFUkZRKrCKhElASQA0EoQABgn6hJvoXzfUP+gP9hWb6Bg00IgRoQJaKqUxmZmTEe8/v0uB2u7Fm2T7HIyIrnz88uPvt3f2a2WrMbOvf/u3PvvzP/sUf/N6//i8vf/lv/3v5H//d//Sb//Uq/5u8yf8hV/m/5Cp/L1f5hVzlG7nKJ7mKyJuIXN/hPwqXI/g++zq6rPI5u8z+WqfLre+zy7PrVv9L8brsMiGvk8XLmM/sdfHXal4e3ad6GXPdyu2ij8u/+uv/5cuf/OSLfdtEfvUr+dnf/d0X//t3H/7bf/hP//N/928h/0Yg/4VA/kogfyGQP5Wr/IFAvhbIlwK5CGQTPP+9z5uPeePJSW+yo2+s/GtN30Rnv1E+f5zxof9R/lSXv/nr//mrr3+i+5dfyX7ZZQP07Tffys//8R/l/9TtX7790T/7r/8G8pdy+/8XAvnnAvkzgfwzgfyxQP5AIL8vkJ8K5KsmMVzu1U7p5PA5AXxOAJ8TwPf7sX/51ZeXfcemqnp9w/W77/S7X/6T/vzf/7383RWCX3/z05/9i3/13/0PX//eX/2FyP8tIv+PiPy9iPy/IvIzEfm5iPxCRH4lIt/c/393//9BRD6KyKf7f488fP74/PH544dJAF9cLl98IZfLBZtuqterXr/7Dt9982v95S9+Lv+gF/3i7Spv/8lf/vnf/vGf/dF/JfKnIvLnIvLvReQ/NEngn0TklyLy6/v/34jIt00iGJOBlxAsdvv54/PH5493SQCXy9t2ueh2ueimKorrFbjq9eNH+fDtb+TXv/ol/vHyhX4Fxfbx7euPf/Lnf/PfiPyeiPyhiPxxkwB+fk8AvxzQgJcIrGTwFsiAEXH4/PH54/PHUgLY7whgu2C7bLqpQgHB2xvePn6SDx8+6G9+84384vKF/IPu8iVU9Y/+7C/+jWxffiHytYj8VER+X0T+oEEBvxqQwCMJeIngo5EI3goIwVMIPn98/vj8ESaAbbtu2ybbvl8u2ybbdtluSECA65u8ffqIDx8+6G++/VZ/efkV/sO261dQXP7wT/7kX8vl8qXIFyLylbySwe/dE0CLAr65B/9vGn0gQwRMMqgmhM/J4fPH548eAezbZd/lsm3YtssNAYiqiogAAkCvb5/k46cP8u2HD/rrb7+R/2/b9Wu9yJe//8d/9Ney6S5yEZFdRL68/38khG/uKOCnAwoYkcCoEXwkEgGDDq7CeQfyOTl8/vhd1QCum26ybZtu2yabbrKpQvXue1yvuF6v+vbpTT5+/CDffviAX1++1V9sO77WXb/66R/+4V/dgkbllQi+aBLBV/dE8LWRALwkYCWCNyMZXElkwLTMeMkga/P4/PH547ccAVwuctkvdxSw6bbdtYDbTfSZBN7e8PHTR/3u4wf55vKd/nL7DX6mu3791U9//5+/gkNFZGuSgZUQvnKowKgLWLTAQgRtEniTuEfwaELw0MJvf3LQzynud+53uG+X6y3gN9kul+2y6XVT1U27JCDAFVc8ksAn/e7jR/nN5YP+avtWfq6Xy9f7Vz/9w1dgRYngiyYhfNkkgzYBWHTg44AEMmqQUYQKOmDaiCIa8TmsfmzB+DnZDQjgcpGLbti2y3bZHjRAdRMVvb/dcYU8kcDbPQlsH/CrbddfbF98+RPZfvLFnAQeieCRDC5DMvju/vmD4JkEvjRQgKULeGggowdHkAHTYxihg89vu88I5UeGAPSOAFTlrgPopiqbKPSmCKreUoAAkCcSePukHz590m8vH+WbD9/JP335k6/+tA86KxFchv8jMvhiogE4JQm8XhfKqOAqx5qRPyeGzx8/cgSwbXcUoLJtim27C4Oi93+4v6VxQwKAvl2v+Hj9pB8+fZJvt4/yzfbF9lPdv/wJnsE2BogmyeCRED40tGFvksIXiSbgiYSRRpDNDZ6BDI6ghM+J4fPHeyKAO+zX7cb9t4tedMMNAQju5V+f1uAtBSiu1zsduMrHy5t8ePsk3376KN98sX/xE5FPAnm7/782o0DiUINXMkCXCB7/P94/e87AWUmARQWVvgMuKej9t1RLBp+Tw+ePgwngsutFFdu26WXbbl+rSvdfbnqAiuA23QcBgCugV1zl7e1NPm5v+LC96XfbJ/1W9y++fgXjA3bDYXV+MuhRwSPwL3JLMFYC+HS/LU8HYrGwIhwyNOF12SvgM4SgztdifP85MXz+KGsA2C6X7aJ6bXSAOwrY5OYIqGy3d5uq4P5GhABXuV6veLvRAf10fZMPb2/y3b7vX7+g+9v98/WOBq7GG7RNAlYy+Dgkhhb+Xxp0sE8IAC4SGAP/TbgVJK/PoJPBnAiwPKxsXfbbnRg+i3s/JAK4Q/4b9NfLtomBAqCickMBjy7BuywAUVyv8na94tMjCVzf9KNcLl/0SeA6oAEYb1i9g+FtSALb/bKL8/+t+wxXFMyswqiHoK4ToIgKqslgpg1qUC0QoYbvJZg/B/q5v4szHmPX7YEAsD0CX25OwEUVm9xag1+agKg+nxQArnKjAtDr9U0+Xd/k4/UqH7bL5YsewrcBBiMJZPRAp6TwQgWfjM9vgRbgUYGL8AvLWH2gqhesCokeUmCSwPsnhs8fP2YNYMO2XeSmAWxy2VQaXeDmDIhApf33rD4PTUCuV+DtCn27XuXT5ir8VmCJ2G5BpBM8/r/dEcJb8/0lEQMtJHA5TAlqNuLRhJChhEpSqFabH3di+G1AGj+W1/dyAR4IYJNNnuLf6+tWC9CHHiAtFhAIFLjK2/Uqn65X+SS67aK+3QeTDoy/IG2ogQ7fb/dAtz5vBgrYGqrwNtCHsVfgIvwK07OTQBURVNCBFpKCOjqCHn5L/67TgTN+fpySAC56nwSUi256kXsSuFGAVyLoUIDo8/Pz7fdoErr/v17lk162HbgHvFpIYDfoAJJfW4sGPjkU4VNAF8ZEcLmLhdc7kljdY1y1Dq9yLiI4IiRqcLujb138KIPn80ejATwRwIbtBvn1cqv+2J78/5EI5N4cJA8qIPcmwRsKAHDF9WYP6mV7VmrgLuTpxYTcMEW0LAmoQxFsuvAI8tv/a/C5fV2ZMMiKg++FCM7RDPRu8ebWY7VG6VJi+Bzk35MI2LsAckMAgwvQ0gC5DQjd3ABg2HQLAPpEAlZ1Bu7VV7MGHDFRAbo3VKsTbAY9sPWC/uvx86gBbDK3D1eEQS8pbAeSgSwmhepnJb6uBv/o/PzHLzxWA/X7TH77De5j6AGQi6o0CUGfCOD2X7cXAlCFQABtEsGLDtxuOyQB2UTQBKZe5GUPXgkUYCUAbZJRhBDeuq8xBf+bgwbehDm+BFQi2IJksOocvA8ysIMfxluVcRsY/eB3JzH8GFDAXQO48X/dcIf9jyDHptIigDsFkEe066tBSETQUYF7ElDdYEBytN4+rk9UcBPfrKaZqFHWcw3i4J8/X4ev2//bSXqAhwTay6OEIPLD2Ipt8OtAGzxkwLw9WVFRjTc/qC6H3+YK/b1oAA0KuOizHfieCLaHHiAb5NYTIC9EMEbZrVEQt1xwhVy1UfBh8PUOquMizwaap3tQXfY5B//tea/NZdfhsvbz+PURQTDSGWB87VX/7WSd4KxjUqrIgE0IUkoKGnhIvwvawpGf6eECXJ7tv4qbA7DJgwpsKthEmmYgfaAAffYF3HLxo0vwNjJ0SwRWMG4db4eh1gPNm18vQ+us/0eGmxDemu/fnM/X4evq/8342ksGHgLY5LyT/zg0wM8lcMjgGFXwqIOVFJBQw99eCvF9oZL9Mfl3QwAvIXDsBRC9R+fz8x0FPBLB0xJEpwUobrfAkARgIAF41h3wQgP6QAmX5E/7eI43IxGwwf/moIkRyWRJQIPgt9CA9b39nzt4bYUWjAlCjWDPgv8IEjgLJfzuaAsrv9VdVG4OwOXW/fdoA35qAdL0BDwvf6AAUVHd8LIEu94A3K+Q+2YxaB84MOH62P//qoo38fCRDERE2zf0JfmDa+MieElAjcDPKz+mRKCOtdgGtXaBjgNJ4H2owSpNeAW/rRH4CaHSpMwnBYYycjgSJwfie9CR6mPu20Uv8kABF206AvXlBMiIBPSlB9wjBW1fwEuSb94296VCqgMaGCt/G1BbExi3IG+r3a3J6P48Gv/J0YmEYoiGY7V/SxwFCwGoE/xa0AJ0CEiV9QPCJb1OJ5F1VTjEY2/MO9AEJvj1BJTQpqLfTlGwjABuzT962e4IoKnyrdh3+/6mzDVJ4PHOxj0JqGKoy20+wBMN6D1gLWi9NQHfVP5MEEPzjGYy8BMAOnTAJgEr8HUIejRo5xrA5xkR5AngmiSHs+zDDAmMgWzTg55GSJEmHE8IvWPAoYTfhWak/Wn/bQ0CGLSAjv83SUEfKp5q24LXuQICpzrjrgWoza8xVE00CQCORdhMJuTUT/rjuls0gO4Iby8BIEgK6gS7BsGuTtDrScH/fR68biUHNVGBnxjeNyHEvQe/ve3LZQqgG3rof6cEclsNflG9J4KtaQ8WHcVBHS1BtHE4QP9OBMS98mpbKTeDW7dJwRsnHpMBTFJpV4I+b0kY/NqInVFSyBLANbnMSgBM8F+Fqfxq/h657/Up+GaBnwV9hRqc9bZ/vA6vu+T9E8KPJWns94UfTeCj2QXwCHS9dNL8Xf3Ho/rfewSeFODGDV69AU0y6NFAE1DP3qK++rdB7/1HRxf86gT376zOr99T/h/ioBiXWQkgQgVeIrCC/WomhDmQK+hASI2ARQZKooHMLdCJwGEBBXC3+uERwg+VOHZ9ioAt9H80AI06wGgJ3nQA3BoCut6AhxYwgcPOFnxuFnrphk+NIKIGrWPQtgz3b0i7Y6D5rs1GKqTop0nQX52vmQC4BkjA+r4a7Kx9WLENGeegkhSETBCrNXIMdi/444Rw1n6E96ry7OPuj8UfLxtQ78NA2iSBbg7gIiIbdDLsb5agPhLC3RkYKv8NDbS2YGsatNRAG2oQwf9ZIOydgy1MAzBkAw8UwEEIDzSAqdPQ6za0PkeJAMH3Z0wXniUSZoHvBXU2mcjQgv56TedIKglCpIoQfgwCIjOytd8WgN0bfxoR8Fn9Gx0Aj5Zgq0lIZbsH/ibSJoFnS+C98g9ooHEELI3gliy25yONIiE6pb0NfBlyNEYyENoodkKwgl6I6s8kARgJ4ZoEfuYWHLEJa0LhSBXm7kImGeSfVdoJ1DO2G7WXsehAptupSOoyrCSF904k+6vt98X/ZcM98Hsd4JYIXhQAIg3/f9AAUYhsLQKAtkHVBnzjCKhOoYl2ym+iBtvzDzQ2DLXJ4PUmbJHAVnBQX4jkxfvHhNDqAdHXGQJgv0aSDGItgOseHIU+K9hXnIJzkoGlEKzNHagTdJ6VWEUH4iCKH4fd2AwDPaYBm4Wgng4gQ9V/CoGiuNmD04AQtNGMGzSAAQ2I2pzfogY9LRh7BrbOh4+D30sAencljFu2CUFrwY8UAWRfWwGvVOVfbx2uIILM0pwDv082dUTw8hYs8L+uIWiHGpWgClnAa1lMPJogovvvbePPs/q3Xr++kgCsfgB5oQF9WYKPJqEn6G+OE3i5AqouF59FQOmahQC8rlPLj38kg1c2f30vw+XaoIX24/pMGIgSBoZqoH3wo0sIIGlA9PWcCPrAtpPB8eBf6x1o6cHra+2+tpIFP4PgBfxZtZUJfo4qxELT948D9ucK8Mt9+ccjIQw6QJcEbrD/1g340ATuDgDkFfx6twSf1f9xvuBECYxq/7ythQQGm+5JDx6Brw4CkMGT3wgscCUoQ4sU2t6DR2ciBjTgtcpenQoZVX9NuL4Owc+dVaDursYVkVALX+shjSBKBuvCYDUZjE5BdNkxdHAUBexyHwB6NP7Iyw7sxUDViwge1t+mz8B/LAvVx/c3PeBBCToB8IUGOgqA3iV4yUg6UAOxaUFHDx6CYS8SorMOue0CCJGAf5YfRhoAI+A1CvwxqNkAY5yAIx2EQmkFfeWOXi+nEdSQQA0ZHMEItiagJArQxDXIrj8nCfQi4HZPAttrIahso9oPQ/2/JwV5JQU8zw+7I4D7/sBn4EO6rjw0FR+i3Z9fHtahzsFvJgM0X+tmVH5vaYiNDGAigewAz+gyNLThnjCURQFR1b9d3lZvnVqmj9mEPDKIUIC4KCCjBXywS4N+otp/Hk3QVthOkwEKlV9PQwXjT7s/zwF4Qf9toAAzFdjuaEB6S7D1//U5FIQu2MevO0rQQH8ZmoXE6B/IkgE60XCjVoq8gt2iCG0S8L5GdxkM1cGsfsCMArSCAnrr7dzAZxCEEpepvB8tqHJ/q+bmJGGts/AcAXFOMMeTwC7Pw0B6CtCtA2vWgonqBQJFSwH0JQK29OB2kvgj2HHXAoyeAIsCQO0kMNECAhFMqCBf8mElAkyBbX1tJQP2RJ/ha0gpAfS9l+/5n00CkrQpq0MZbOdAuxmMvHswog62jZj7BnYQe19b14kxNq2D/ehX/p68HEcF+x3yP7z/V/A/q/5DA3i5A/dzA5pdgbKp3v3/wQF4Bb70WkCTHGRAA6+KL0bFl6FJaFw0ImZwm6igSwbbwPn9RMBWf3sN2JgA/BVh/Rg0kQBgePf6HglAHLFQwqQQOwDjbdVxNZjR4iM6Qa3WxwvNxh0JFb3g/WzFQQS8b/ttKcDWoABtUMAd8j9hf0MB2uDXhzX4CHj03L9DBU3Qjz0C0l4mLSLQPicOOwZoVCB6P6dA7nDbGkVuxcNr8PU2JQO4wX5trEqmccZaHU4q8oCDFOpzAnOwqyMIMktNNNAHouDGxO37DgArQZzlmp/14W1QlqHTMaIIx7SCx0+5yza7AKJ3IXBrNAHVDcMZAU/BT/vgv/ULPOA+XiLggAREDF2g0ci6xNDRglegd7P7TWWH5oJfayliEg7bScQRBVgI4Ookg/F6rvpLWP29swREqA3CaG8/FpKqS8DTAV4TiBqIqtxfzaQRLys5I0XEFIFrPbZRQb+16Fgi2LvJv8EFUPW1gGfQv1T/F/d/HBnccP7rAwnIIyHI4ArgWeGbU4eHy6Tx/EeTZIb5bo/BsMBjmjBE08f/RB0PHYBd9eVRAGY7cHRwiBf8WeCPHY1bgBTa9xKTELzEkQX9CPtl0gJiqsAmCT7I8xbjivh3JGFI+D2nBcSJQJ8agDX+O9iBL7UfG4bzAkcaICrbtYHz1ycSmGmAjJfL3CMgT3tQpmrfB7gxSzC1DnvdhQMieG47u75+kTouKNkM8c/+vq/Q7ZYjO/hhVvRq8F/9gGfhP8aqE9EIdR6LTwJ1h0BItyDqB8iFwuNqASscRnYioxOg9ApvnYA35f8e9Ohbfe8J4rknoFkO0lmA2gmAG0YK0DkB4ieEjiLoMD8wBzom27ANZkzIoU8EMHk/uo1mzeVoEoRWKn8L/62EYAX/lsB7D/LXg74uAMr9oGivJ0CNJCGD6i9DhZdQF+gtOp4S+NODRzsDVbhdgv4BqTMNyIL9SCKwL9/FGPp5oQKxIf8A/UX6r231H7YIqLML0Ae2GtrADOvRQH5b/MPE9dt9BGLNG8jVTAQvIaK5TtvvvWQgDvyXIClUA78S9Nfg7VtIBlO7cbsEYkQDMot+ygQ7QwmOawTHnAM2XUSnJvPIYRYMmYPS+sv3J+cfP3d04JYIXsF/EwMbBKB9Q9AY+BiSwFj9mzrSXmcJhFPVHySTbgHJCPvRQ/z7G/SVUETsg0ZF+i3CRoCjhf7y1A9mOiDD7TwdwEoEXjLwAv+avLE2B7Jnb+OqDpBoAchoQJskxKnss0vu7Q2YhcDv4ySeLOg9GsCKiUIihP7yfW7zbTsBh0TQfN0iAWn9f72Z56/Ax9P7j5OAH/Qvv3/QxKfk0DgDuP+R3USg3bzBC7bO/QT9Eeh9QvDPG7glBQzJwK740lAFFgFk8P88CqDGAa223YckWYhr+c0BPdwetl2ocnsfzePAWcVnnAIp6gDVhDLyfV4nqFEDPxHsbWD3k4BDkN+pARqKMLYBPzYEvxp9xmCHQQdgWH/9EtH2TIFpu3AH/cdGydv1j0TQbRrq+D/mLcX3ZACZ15bF378CG0My6Kq/zoGOQwhASDFwFbxyNGBuSxbCEhQ/uEPe/6gAERWQObCVVfjPpQX+rexxYhYFxIkgpgX7Y/vPs+Pvxf9vwt8kAs7i32t3QCP+3SPaTwIytQXP38u0PESm+YER+o9B3vr8mETAUfDrEkPI80ck0FZ0dXh9U+HRbhey0cAc2H7A4y4egoD6y8JfkBiigLdFP8v2W00E8deT2IeAKujZ/QAVKpAtKI20gLWksHedfgPcb+0+NEHefd9vB9rayi8h7J91gBbaw20MsnWAF5xHkyDUCOoXp+yrOwwxcKj0aL6fFppaaKDv6OpHR5sgx5BAlK/+fYhuP1D196o8e7lFBaKqv5YIMnFQpd0FGVR35RJCnCDaABaXBtgbiSwtICMtalKC+1JQ6bx/PLcDPQL91QFodQNKpwOgF/9eqcBxBBqRcKAAVk+ArQOMx1RYGgB6naDhlK+uQQwJYx4meQbxtNnYQwMjt/d4f3M9ZE4UOld1LAh99fbfzOxiEkKFCkTJIUIMUeVnJ/9sDt8/e1NEJOi9oVHDGYhgnSLss9DX2IAqw1zALUncKcDr0FB5NP+0cBQNrEezDiyiADPkt9qGpwoPdL0AGPx/NOKeyf3b9WJNdfcFv6bKd2cLMJVfJ6Y3B6wB9WFUfWWEwKMfGiQL+3bz9XGQz2EHKhF41GCtZyDi/gUCsNhYoAr3UNJ58YidHKqnMb/6AB5J4N73/4L+t7mAkeeP3P+1LNSB/l0SkMEd8DcEuUlguEw6t2AU/PCE/q++Akw6QFf1u6SBrj1ZnnhG50AfkoGIdf7gJv1KcSfgzWWkQ9U33Z3tHXYASKJ9e/YhU90rvD+q9Ej69/wxYJVs506Eg/r3DkMDzEdDBRGgcZay49XihLA30P+l8N+hf1f57/0AoxbQbwYaan/rBMirE9Dk+sBzTkC8JNDEUlv5McB8PP19Y01Gayep+hC/2zvQ/2HGLAurowsNGlA1cnqGGzeH5weiYLZm7h3QQC4O2tXdhvMMk1ZS5ebpgI8eMrPvPGkwaxayk8Yc6PMOBPEdC1XZ+2UfbfOPtxLMQQAG9BcZFoF0gp/RKjxe7+oAw9T7ZPWhgedodgz0gf5KBtrtIZhQAZpAV1Bi36w6t98qVfH7hqGI318lLCjLCUFlxRHwqYEH9a2qb4XjWvDT7kBwfbZA5P0+PNuRuW1yf4yNQH3zzwv6b70QOJ0G9OT/dhoYRUGT15uQH/71MjQLtQlxfDuiCXrtM+SkA+icQdH6sU/xz7Ze7FlubV4TpoTQ2osdpaEjtqADmEU7OkBEFoLeC3IWFFeswJXKXzkboNL+wzcFHU8hTGKIboO7CLi1/P+5F+gydQhuvRbwEgxvtACmANikhLTbj0gCYk8KdlYgmj+4Ymaod7TwahwadICuX0Cm2fE5iNHPK0x/CDV66Kyg1MnqjNFBnhBoLQCgUULfaVe5nq/6EQWY67bXCszUb+7232fVPz51iGB12owK9peyP1T4raMFF/OEYJP792mgXYfZ04GHMAhBkCSmSj+dKqRPgVFGHbpLEGMiGFeQWfSgrY52VxaeDUPSNJI0P7NoisG729HHl78z6hxfs9rV3m4JjgM/lsui2qmThjCfDFSb+I9vwUqG5wwL55U7C+6ot8B+7N2o6r3q37T9trfpjgmTvv7PSQATLLeRAOZhIJHBQfDQQJPBdUwEbVW3+L08EcEE/9G4ANrCeWcnPKRHDupbNynMx5AA9IRYLmrc/YLSiD5EaEBS/s/TgnU9ILcH19n+CpHwegLejx7Mn/d25fdN+e9U/1vgb7bqf08MOtf8EXxaoh+GY8L6gDfhvs4i6HQ7seYI2sv1GchdMsBIG3xlvxcCRzdgCPTn+6q/TW00VE8Q9FaFv+R2VlOM1vm/hhjhDCdgNflVKME5B47I9xT8z0YgPAJ8myb/LqHy36j/Mwqw9AALxuO1JVjiuQAYLcFzIhiEPe05fk8tRjGw7yWQbsfuLAT2VqOId1osnr0F49VM8INACPHDoBz4B5mqqSnUgyh3ArjXxfQH5BbgUS8gP7aU+w0zHD9GGD0CGHf+P1p/DeivlhU4BbxR9a2kYFR58YaDZCUR2P0DMmgED2eg77puegy6PgDphEB0CwlG/i9d+/Hs34pBEQrBn0W51mqGnJAk3ACCHeiqkQ1XFQA5AlKH7Lk8yJKWY3/nym14h2C3JvxeMwD9ZVMz0BPMi1n1RbKl1cYhIVblF3G0ATsRiCMUvoK9//OgcwYMoe+ZKOLlC6/Xk50br9NFz9fanqA8UIYSpCwlBO4kHc4WLLBfBHVaKwKgLQjmP4Un61Vq+3s7Bsyi0WztmLjJwJwFeE0I2vD/1Q6MVwefxfUf32skCPbCnxQqf+QMPEUDHZ7vGeyj020JgkPXXwsldA7SYR1RE3h94NvNtugswcgxXEkIcBPCGZ1rmrgDC0A4K88nm2fn/eTnpQtWyZfybRoK8Dro4zYDIMGsf7saTBzvX0SMbkAD6o9CYbsfMK38cJKD9l2FJt9/VGs0h5Gib33pxMKWNsigFUh3G2un+/N1WUglI/EEx8fq27vUNnwsiOoKecL7kQS8VnWAGCFUgn6dBtQhv40CmIYggwK0uwDHRGAuBXVdfwzHUjZzATLMAoyJ4FmBhzaWBlrHld9CCWpPHRqofBqMReMGTJ78q9rDes1Tv7/0m0v0AFHXNR6P6g30SHivin7V1BOhh3iWPwvps/yE836L2XiwnUT8x2iHgfqhnwn667QHEE8oLQjEvtEW7GYBZDrDVkwNIO4G5GiBDf9fGoFM6n+vbEtzXwP6u9AduaWnGYSLAlVdl/AU+ikrSeEIKgwdaZ4AACAASURBVKj4/wtgHcHtdO2nWKcBkPfxcvnNQvsj2Me9f02r76T8q0IBn9OLKfz1HX8yVXQYGoAB/2UeBQ5/5kCL6+H/OGGoRnLSwdd3oH8r7KkGTbgIxEwVWvnF8KOpHnyzfF9Jod5Px+IF1h8owyitDw/XEgRb5bPqbt1uvn7qBIQ16vtS/u+DP3cR7CH0WWJgd5mTJKYgNzoGjQrfvu99NDBC+bnyW1x/qhTatv2OaMKgJWPvv5kwnMgxHYGFRtJW8VMl3uP+MgoqSZyWFKr7+KIDw1d6+IiOgZI4+d5iYL3imzbgyO+tph9t2oSBxOM3ugHtPoFZ1LM0hF4kXNEBssvVgPdjdXZWK7uKvyS3q1Xb1WQwtVDqSUggq+Vw3t56JA2cz7PXOwGNW1ecwxPhfe3QEUsDsFaAz8jg0nf+iZMAHNg/XSazDuC18Iq1HBRrOsAQ8NLB+16g614jmuSgs3bROxE55D+WDDQNA4ivdMJ9M1b309UqknaDU8ObV9/PwmMPATvTMAxpABLBzugUtV9bLdhNDQA+7B9tQJ06/7QNDHGSwtgZOCIA47InIoDdROQGtt0U1HI3GaoUnCnC/rzBMQJteN17+VaAzYNA7e+PFqHQUyXPUYB7iQYa5ZFjq1Zqpx8Uqu/XT7+6BWC1Xaj0GlBIwMoHu7UzcI/6/Acb8KIq+hzmGWmAYnADrIpvKP7TZeLaf0LAeQkGgebbq9FToI44p654F47tekKkI0L5PQNZPsDwPBpy/ni+wKMN76Vav4+2cFZFf8+JwAraMt0DFB7beA/u4Zz/a+RXx0M/ct4/jwaNAS8G17eSwmta0Fhx0VRxJkHMivso+onMXr+YwdWKbgioy1jp4x4AzIKg5lEA7wvHEYCRmdx11TAuT6lDLVl4KvXkAET9P4RT8H2u+lg9EPQIpw+/NpJ7RwE8HaDv/Mu4f3OdNkq/EfAiEiOANjEALvcWL9gfFV4NZbgbQc6qPky4Pm35QZxtH1f4j+P/jXuaYPcWwIEH/fmEPBoAO4m4LGxV3txOQqDU+dXgey+UwSzuqP++uImO/u/6ogCb7wTc1n61sL+vZi87rxnrNas+giTg6QLzaUCjIp6JfhwtGI7AjBBB9JjDY4ePYVR6ZPgN4owVv6Q2N5hhVHwNeYrM+w6dN6K1sMHZm/Ce7bHe3dzKr1xw1w4JrSQMZtgnoQHlr18fzunAszD4qurNUg/TDqzx/lfCaO6t4tACMUQ6P6htWjDPC1hCoZ8kpODzJ70MUR9AODcgwyqyPhmE+wfHYB/hvSqt6qeXUShhXH+d9SR8DzrDaZZdpSp/HxqLMQuATgDU/qDPRgOIeT8cvz/h/XC6BtE7ACLOWPE0KIS4UUjmZaJ2grBphiWgT41BUVWZfP3AnEIT6OrfoF122l2rMycBoU5i/OXoUZ4/aglsXwLzHNU++FVF3qikOj5HXm2PBitT1WuvJRAB+6O//W0/PY8vQH5IrAsMs/WuVmAdHBrQgrbOxJShXwRSsu08h8JMBpo0+aDTALwV4tbswgzHrftG/dJKIAQb5h9KCssWIMeto+GYqG12/HWGjx8kzqNJaa0noMWOr2KwW01AMwJoNvhMQda2/RKQP/3ecABM3g9uD6BY68Ntz9+nDOMb5iV+hIE+dP/Zs/wwJhJ9mgBnohBuStABUXjugF3hkXF9ZZJAjefKdHZCc389LoStKvIl7QIEb1d9RyciQgFDI9Cjyccc/23Aam7/PZJBhgDgin5CtQvbCzX8ip9YgIFtOAt+w0owp/hOiCWgEGbVHuYjRigPGR/YOnEoqPDoV5z5YqB3mRq2ox5ICmSSgAP1Ne+XV2NE+/vuFbCTRADxtS70VRBCjgBk2OyDUQiUgfl77b7DwaHm2rAZ7osRSOOUoHgKfNBSLI767+oDYrfwZvqChSpGfj3pFwZFsCJg2jeIQQBUiyI4WgD68ww4qO8khuWkkIuDrxWv2nv+UTBpJYiPd0KemTA8qqFiuUF1jWS3BoG6pADJq751JqBI0wvAVPyMQvjcX1zbELltKK+zBiXRFiRxG+b7q3M9xuLdzR8g0gCGNzSM5gNYfqGO9CBT8OHct6oB3KsSDBisUnwsFuISQaRHxDSv0vptt2oeLHMERfRn/FG/Cx01EpgIQG8LP+/i37PKw53xn6sYCM4/JwSRrCnIeB1ZkLsawDhaPKv/njU3wnZ/dBdGE8+YTHSG8+ofGgIjsC19YnwdM/KAnTSsqj6ig7uGgIPw3nYFzhhIIvriAxFP9CQd4HSlnzgxONIdrE7A8ZDPx9fjib8ifgegNIliRgdx95+E1T7+3nQVNNhEzDgGA3T2rEDLduwtPpuuouPcs8swwXFjdTaMKt+jA5gUAQPcf95KJQxYU0cYxEDvsBSmYuukp7AwnqniC9Afa5z8vboI68ImT0t26CvwBzSggkj447r9IojvCn7U92J/Hw0QSdwZKNNjxPCfSxRqnATkdwpOwh88oc4J8KTSm/wdbZjrc+4iFP8YO0/5JJDCfaijK5xVXevqfg6zGRrQf83chvX4aRfAE//6vv5+6490U4ADdO7QgM/5bcHP/n4OtCQhBEFeDWSvos8DPq8/IwzLzjpa8/U6MMSkBklDm8e0mn3QIY7XG1Om8wzN48y7HwhOK3P0/ZwUQHHv4psbdoVeb9VlAjChBCdtDDpOKTh9ZfcagOYq31RFjN4/gwBYzp8lAwYNwBELhZoxECeZxMlAzWGdCRV0fQWGHo8+8Kx+AAxnCIzowAxy9KvNepWfsfp4RR9kUrD88CPVTuXRybhqqTHcnxEGndsgub1Gdug8yz9fHt3Hpl57x/mfCOC29FOSQ7/noAZR5W3Ob24UMpuPYAYiQrQgk1gnFoUIKr4vKFpV15pHUJO3Y5rfH3UFHU4bGkU+NKJ9f2hJyOMxDBDpjAgwiYqvk5TqNl9EH2Arb6fA3yaA4cBtPWewhkEcIQJBlGzYp6zRmr1v+e3Fv27xpzvyI44NGDkCIi7CGNV9Dw0M8NtHC2vUwHINumCGNG8erxOwtQINsW88Tlwdoc+F85nI559ngEDpt2F/Uu3hiXYrkN/pBFS26hYDAkFgErMK67y9mGBA3L5ore5izf8b3n805MOq/t7XU4WHv1DUF/5gugCSOAIW/59uMwl6CHWAib8bvfxWl9/rBGEMTTwDfG+ezEYG4yk6FvRPuPwE+wvc39IRjENWM+/cm5b0W4Pf4WuKUnw/vD6eDbB1ETs5vl77Dhnm/51g6wPWwQAqxnivgQaeS3gy/u/1H4hpTPrIgHAN0mSgXUX13YP5PMIuQAfBr/f70cdeE+QoCX3i8nFMLcAjInBoAIYqt1LhC1WdtvmSab28AYffaeivCB+ohdYQgfUa/WS4ToMsNLHLc9nnvPZLwn1/EefPVf+U/xvnCVSEQEkEQEnEQJO7S7RvYDxNeNYKrG7DKMhtsQ8cMmhgPKKKj+F7CiHYFR5KIIPxOmg5IVAtu3ACQSPh7CzUQOgAej5CWEkIe3vgxz0ROGO//qYfz/dnLT+ZxDr4QW0eNCJBorCFOVC312Ec2TiY5Bk0cAaQmiA1VH1MOwDHQ0kHdEDDf+2UTWhS4Z8diQMicLx8MLBfverLcP/jQzF0P8EJj5+NGK9RCz755S6F/f1+X/gxeP+Wsedv+vF8/54aSPJYFjIQd624MDz/UDLQnr8HU3ztKHRf8Qeno1vyAQJBaLcMtTV3cvgP56COCqd/QP9xLgBkH4BxO13n4hNUDtACC6G1S3zqooZ6Ba4lp/zcAFb7iERKQwQcF39IFJjdXECGADw0IE4gg674pYAnk4HoHPx54tD5daO5vxrugSkMjgiiqc7TVKAT6AT8R4ckbHEQCYR/IZBxJgA+XZjsR7vaoRpIxWqeqfXuGC2CxwudicwePEB1kNkaZCuwyF0DuKv/4sz9mzP/Qxdg3BDkBTMC8Q+loD6UGBzx0Kz6eAX/KArOQTlPHFoI4vVtf4rNuLrca9edRn4xBP7k8w+9AgZCgBfEUZWfEs8iFNZ3UO7TqmkjCO/rWdgco/yIqHcQWaC2EGTzgz5y/iXQAvyx3riyxxV/JeBriaGB9OrTA5g9/eokM+37GszqfA/UZk9iW5UnCtBqBl3XoNN6Ag/+zy6A5evPAp+TIFDn15gQw9rjrOzFX0s2JBVAxa/nP1a6AsNWYGjPNGPLTQgBsNUFvOA3Ht9o/rGDN0tWOCcxJGp+f7++kkP7PxcGv1+GjkaLt/fawpwwerQxBJNW4b+PJsYEgiAYYdEAGIlDNaAbRkIgK3ut0jKByp+8yz23X6GttmBmjwDvChgiYLP5V/zhH6/110sGcKo5CkggCngxnIPoPja0j2B+1BRkiYJiviaLJqghDI63G2nAgAxMCuDdnoD0wIQm+urMB3VuAwbBrFGgGgnhAFqg9+ujKsLxB3qGCQNEEtPinIQlAj4WgIw7/iXc9V/x/yUWFs2KH504bAh4aYWf4TrTLGTy9YbftyLeVOWNfYNyt/ji29mQnqMAltU3ioTtbX343yv/1u0YPUBz6zB702tQucnX0gWaFh6DgPdmhXaapGotw0SFz1qDiTMdd8h45HfcqCPRUhA3+NmKz1l9teCPaMd4urGaewRitNBDdahR5c3AfQmDCFT9vmtQEwqAYXX4XI2n23Z9B/Yb1FL+LWox6wHGbZSo6FR1LzyG+3hriSZvWT6jfXhl2cmQZJDrAbuYAqAHo1GA/EOgD8eGcU7A8eDvH4fQBuAhBL/Zp/vamPTrRENDGLTV/7E1WEPLDlP/PwzU4YhusIMUgfIPAr6Dhv5R4y2r8ldFwiFoYHnmr8TAHbhRQSZOctH598ZYhqt6wP7q/ouqe77RJxvzFYaji/z4vna4v5cUMDXqDAJ5ytktqtBDckyjvJg04hl16LB0xFfyMfD77PZjErGQRRjYIfSvoAXntks0ok8MsUC4KARWnYPlJBeIgLeFrUgDOHYCag0/XNAbWgRwQuLAsaQwIhC1g7+jCNKuT38JfnYSyTi+QQEwwHeT4/dWHYxJPxfOj5oAnRQqgU3YgGZSOaDyK3n/qkDYBKptzR3oD6B4fyRKjp2AzSl80YR/3P+/1vBjX18Jbu+YsrMRgbqPP8zrDLTAaupphfeZtyPs9BPztpLSBZjowF3woYRwBwOWaqbev15b7X4RWsiqYiY6ZkFEIoUwUA2OrkeEQE8HYNyD/rl3m88jCGgO/nPW3xy8x4Q/HBcM1dYg5q8N+B/SBSYhtD0EY1PRGLDoKIBHF3yLz4H/gSYQJRETgqeB2d4vC8L2NVnQn4PoVJJAcP0inahAfdXVI8CFszjRagCTtRdV7Sr895NBpRKXIT64RMFw/iw5eChhEvmmyUIH+k+Qu3cLzOAN6ILlFvgWnx3YWFDz0f38ze9GlfP6UQ3ojEY0gtqRIEbA5/WgQFhsEuIeL75uTzvqHktAWfj/OD6sQXssROcGiRgFn0QVkld7OznMDT7CJKzhMIqxW9B+LCOQdH4uyxIcE49VTSeLj0wKjzcp2oDXQA8YoDEGBLMW0BJw+eAxXejPV/IXd59/tp5rVyYXDw5BlRetSpQAcvgfOwVM8ObzBq/AQ2wX4lwkQV3vNhYFfn2LFgaoDU1ogqsfqGkJYmrj9Tr22KQwBLzbLuzDeA9yzyJjVRfwegWq0H+FThDPA6ZhZwX2M2Kh4waovCzAWJTzD/qY00c+6PM8coz08VNqglzx54LfHuTJK7z2rwX35ABLg1DzsZ7Qv7l/f2yXDlbf4C/irg0MJ0aCuD0wP74MrxfdFlX7tq+vtRdCpvt599EG9Yz3V+P+Oj/n4zLruZHcJ7oMt/MNp9eD6HEeFb6/TMfbWo85Pb79HJo8t3371/PuIAZqMvjPC34nVV6ZB4hEuA7AzA5cfU0y2n6ux89D/35/n2/vWY5Bf0qwf3tPLISO1Tap9qzFB6eap/beqI94NCCbGwgqOItY3CGl446CaQ8i2Q9g0AvmgJOnBoAA0gu17tsKtKS7D4udgCYERy2QIceCX/P7mBW+g/7D9S6Mn50CS0eAoQPDcBjopIA5+EcxEjLweRjXq0UbLIjcBxsGx2IZvlf0ATjz/6qypAmY7bhrk4ahsIis6ccXKHdueAfUgk+RWPCLh42c6zEeKyJpRTdRAOqBbl/Wq/uT+q+Fx3FoTIuCzc6+hN8j4veGjuAnhSE5gKnco3A3XwYlq2sq+lmP4yEOpqEoG0M+mGDYuYT0pKCFHgLHKt3T7T9p8GcWH+n1UwGa8X6kQt2x4CeqPexegT6o/Z4Cr313PHdgrsS2ZReLfpKIf+IMFnmVmwxQ9AhithYT73+p2s+JIVfrjwiHnpAZrSsr9CMstQXP1+1+510N/q8E/YoekMN9OMFvi5LvkRDsy9rgFCOoPdpgaQIWBZjf5KCSQszZJ1ivTvLokpen6tsJAVND0NFqb6GUGg2Im4Dyx9Pn7/0dm4pADAslJzTv+dKNrAPQ0wyySm7bj1RQgbAXsRa4R+mBJzpaQmHLmy0BLoL+Nh2ZRca8uUc6P37k97n451fvTieAE8BdZ2ItqFEK6oOJIYPsiU4woo140Oh+H/UC++gatHYcOFT+2y3AYvD1rM/fpxdUcsAi70c0OxAEP45X/hymE9XeoC0zfYhbcqfbhs09HpwnKMDR6g0mmYyKth/UcLl9ITGQ8N1S6s+gA1HvQCc2pluPvN2Br8SyZyfyxPP/VhCi1L1HWX2CQCuAE8TIq/sBYdANZmTIwqq0sb0HIzhhugBeUpBZLFyA8y+EErsBUYDZHYN9QAAooQwOws+uQlhdESSSqk5Qsh8LSYI6LDS1AbmOvLlRBqQIeITvM36+TP63VfE5hFClCTr9zEyVFwS3STQBy66DMHB+PJWIrfgGnYBx2dTboPa2X49GaBVlePA7CFx4iaGi4ns0aLVjMGvtPTDtmO4XEE8E5Kb/8qYai+NHl60LgAICcUCoJPVeiYG6Pxw/X9VFNVbFn9FNPzXoIRDTyzcpREYB5Fm1EQQn3KRi9wKApR8Tz48SwxnV3qM0q7ZhpdKvr0zfY+gO4oQf+EGPFYW/Xf5hwWsUgxiBbShGoGIx+D2eH1h2EeR3UQMH4zMaUKr4033nzkSkfQADelFbLOQCalxdxvN8mInhPas9bxtGJw29Fx3Y8429MAS0fL33Oeo7qFZeiToCC3B/VSNYuU0fgDnkhxGgMFdxiYEY7MYel+OHPH30IMeVFK1C79l+QdXVpFqHlMAXEf3EYDyfkkGdNvJ8f3RAXU0jpgM7jMNA5yCrtfzOicKG/M9bgEkEjqqPPDEcDfqVwGZv6zcO9avDfOhf4OmLFd9OLBHHdxp51HvOBlnAoQksYjASA1xnIhPsapTCPjbsGB2YevpPpgM73EYeSYIftgPgte6CWesVBB9QEgfnWYMgoeC8ql69bWoRIqYHvSIv/u26bj/jdqZ9KSGk74JRo6QS9PuTiSHm6Z62kLUGH0UO4rwWrhtRETkR4iKRdI8giJ2D2nUCMjsA0TXiVDb98NAf/rCMlajA9wesWHZrAe1dlwRyVI2jx4KkyUHSx7YDe6YD4tOC6XW01puEdAJwaEJzf1uATHi6ZlSCpBQscsh6C1xRcWEG4bCFeKcAVhVlDu54JQIkTT21hptIT/Afk0kMcS9BKfjBJozcDXCrtgbWXxbMAw3INQIxtQJPAGwXmYaBbYh4SCsuKwLOAQ5awKskCMmRg8P3xwlBfbosQaDqyZqBkyQe1CLQACoTgN4qbyHsPwkTiF2pYaj6MAXBmUosQHnUEYCsBL3MW39SNKMJ5PfoBsT33DVJCEbFnBCMOkHfvj6Xq8uw+dgRIhGgAiUqf5QgKDFyhe8nnYrlqn9sG1GoAfirubygX4H+8IM1CmQrMFAJ5ExzKIp54nPoVU2Auh6eBShDlTV4u5c4HE/fVvjFrsII0Ik6QX+Iq68jB19ziLoKC27FYe0gC+j1RSS+BgB7AvAM3m8HLdy5fV60C8RMVuhD1ieQB32MCCq0QPJuvuw5IHF/geMKwOPdpmsxBwVEfGEOgeincJqNmuSFIPhPq/xM81CWIIi+gCFBqDX3QPYd2OcCRo6GZBoA3AM+00aesAOQ7/2Pe/vBCXoguD4OBD1WfPwClzcui12AuH+gC0gEwW72KfjBCQRBr05D0IQc7N8PzOCMehPWK384MPVDJQim7yDdoiRTItzzFV/ZOX9sYFetP0fsQzb6O7wOoFjxk89YoQXv+BmSN+yYHYO+BsDRAXHhuJXsEFbdIEGZQWUkNVNzGA9NZUVBIQL7jASR0AclE4Pb7JN3BO72mG92+o8UG3nybj+mASh0FsLKn9GPxDrEcS2Au35BzHO1BksriIJdpqWjKR1wlpR4fN977rZqI+XbYjYDgVDpcYQalOYKMiuQbB3G6Pu/HlMbi9a0EMkksXtjvvXTfgMKAEZRN/i/O7yD8Da2S2Bdh3ICWfp8yuMkYl5a4df4vVWt4UF0yyqEnaT6swYyWB8/j111Y1ERS9oB0SLMtBGDEBD1PEHwtdjUEAHnqmoHU4wCDAoAS+lHwtu9eQLUAgmxVvAuMB9cELMV3m8EUtcBYYI9nkNIEEJYrQeUHfnzzRyC39j8CgSkir/E0P2odnAmAqDnDIhqrtV9BDNS2POjv/0pwKr6z1h/PMz3uf9ykFYq9TtoAXSwpz0HljdvBCVAPY6t7osv6gFhMpkX13rcfXQMIpuTsfTibkfOPRAC2meLRipI4mDPwMD5x+v3+Ey+qEfACwoUEkKQSMZxYJDz9R68PyP43yvo2aYf881rNQbZgRU/jp80QnW/hdXqJxMvCFxXQSNHpE8QiF4XI+wFfQcw7VL2Md7RRajsKgh2D+6SLAKPF356+/7yXYBTUgFy/38StUjFHweD+iiHh8/LV/i/TSvGk4L5x7F6AsIKbgb4C0YjgdGRIToGUx7cgS3JKP8pRcgak95BJGQbjaJdBYQ1qHYnYHL8F45QgHx2gLMQ2cDxBD/4SeR0LSDi5XzPQNjM4ySE/HGG6g+ugltLNSARn281BPtNO72eJLjdX4ITSEgpQvJYFEUg24f1qAYQNQdxx6Q/RcB85j9f+03zf2QV33IDPHegNgPABTfqFR8cZK9TA7/ll0EQbUUHW8Gr1d+MSadia+LRHwhunv87yWoJ3h/pRDwJAbDNQQFd2P2mH4kP/wDT/ZeN3CK3+ZjvgVpw4r20AMafb58j4N1UMknuj6iCx883PU9g2VHVH5JX2eEcPghSgRBCKPzK0Q3fknwPN0Hk0CyC0zBkz//7duEetgFjVtypASDI4CsknYJgYDhqsBxxy29+eyxrAZX75EEf8f+CkOcijMDDHx4ASYGGu8WHgPwpHJc0qOG8FgFTuVk0cRZVePFwHEIUEu8xSHoL5qWg4I7/HgOKXe2dcnu2SSdCGIDTA+AcxY1zYL6Q6AAFu+/1GvjKPSeEoJV3NiM4Dz9C6oWkEav+NWjPWXNOIkKgNTi2I8LeBgaZHJxqrC4oNXoB9pzzMws/OW3ghSyQJgjbygOVEDhoj4nHLld8HPD6UUMFVLIgKrTL7cFoBRLQgEdXIseZ2/HhFPKbk4d5tYWwwR0nIFQSD2P5gQhs6meVfB+Bkyz2fOIvX/zxqsSODuAGIOLtPNnmIPCrv6Kqvgz3q4tCwNl9lWYfnsdHj2HTgQw5IBHwULmfSu1jEV3gDFSxTBmqSEVqiYK2IkWcRiAkwV/cyW9YhqHXDw9dkNQAcO6HFNJT7oChfrPUYc3KY17zAd+evAwF2w5SCKLV4EuCEKsKfjBVWHu9Q9Arh4CoBqEMWYBsNX7YgKP/69uC3M7/mOOz232QT+ox4iCyJGEFP4oBHd+GVvXBwX35nqp7qeIbV6L6tdZub3ueJ+gBIKgC6S5gOQFxDoGr+Bv2nzqbknd7ph/EmXzO0o+kZdc/wqvQkAOUffVMzKtYgx5Vob1/+HAfCdzHSiXHenX35/2JTr3KZ9Ruj2lYiMhLIFoNyMq9hFroeYMTE0bSLbhb4l3YlFPa6hMd2jk8dmrDgdQCnC4/+ANFlYTB6ATlx2GDGXP1rvL+SnWHw+cJes5/rRWt4H2pw9GklD4uSMpwasIQiaYR92gIyFX5S8dtRZt/nCAH48VXW3hRE/HKOsGquj8EM85Q9cfeAV4XwNGAlmIFIwPYrfLKuxV476RRetzcdeAsRSZhiHizCKEIOHn3EMOWy5X4uIJnXX6sFiBFLaBm/THOQAkVJK9j6TKwiSDTBWpwHkSPQJX7U959uAkoaTUuug6oQCBz1Zlxm0OJSIoIw04M+7zCGuYiznCfHww9AN6Ir+HXA7lfn2oBSJ2FOOh8SzINfmcAyITq8JX/sOMPx6A9LeYtVfwgCBZhdu25OB9/XmWWNPUEPD5dUuJ68wd1AqD2+w1PI9KxE9BW5t3z/igdYGWiL7L+wPv9jgVY8f0ZcbCKCuLAHN+c5wa69Zpr0J9t2KnpAGzyiAIPiFalJ8/xXrrA6Y+/8NoDnWCPNwFJzf5DpVkHte8hx76P+HU1+HEytEeSEIzAsu5r6wPJGu6oLz8VrKofXLce+ywIHhNa/Dmw8LrptWXZ4NKZm4pr/QQ7Qk8ehMrPtAF7PQCD309QgRgRZMKgAbFREAfBBXNalbHA9cEHMo4IgIUuPjjBWEUFEQpYTkhVO43eRiynJw9Jjj8TOUIlJExK+0wA4gWgQvcFBHAc7P4/u78/Ff4CC5ATB3P3oUwFClYgcALcxzp/B9Ez4DUV8RjBbsCBrMH4dLNwIDaCGhA6o3pXksdBvYBsktrXDgNJKAFy1Z+ZGIy5NXgXoBT8a3ZgVSPIUAMV6DjLxhsV8wX4n4ibbONObHNyCr8Z4FinNFjg8ziiF5zSV8A99u7Zdf5OisvVaAAAG3VJREFU/kIPAJLWX3hUIFD6o7MD4WkHIMXBk4IftSrPNBJVk0OoC7ice8HGS8XBKDoz/YFBLaQi392lGpCMJfhD9xVkx5Xbj73P9V4m1j0v73x9FjDDPlYvATkgFAVWcdNvJBamliOjAwRV0EpeRymAe717kMYRyy/j5FwFBX0fP7Dyx8gq8wn2ZXi8GfGYR+lFcGJSxa3Y84WgzBHetlU4cvKY44Ps4iP9fsgsPGEhQTAcHqwwGCj61SoPexKwasXFqtxq8qhD9SixoBBYcJEDNzmIoi3J7QkoJActVHocTVpPBCDhElAvMDK1PT/Sq3DwB/ygmyB9GNhYDH4so4Foy48kkPtZfZEv1PQTxYpyX0EI3Bu+/5krcN8fgwVdwWu2JNVNWAk+PcOOPMNdGFyAZ5Aj6gicgzNfwuHZg0HrLxBWfjSRl88fVCo/apX/IBrIvf65ZxtEoK9Bec4KZIPLe76osQns46NwW0pUPCPAyMc4A/KXOwZzFLGbAqD5xhhbgBcWfoJBAlarcCSQgdQJ+Movnih4gjZQTw51rz588y/ZgxVUEAQ8soCfX8OR26JwujCLGFAMsOjnwGrlPuQw9D/PPv8BYVR7pG/eeFtQpsLzR2KFI8SwKj9KlX++HeLOPuSBKrKeHBi7L4b+Kx184+ptAp4Trcscv69oARVYzWgaK01H1X0K3zNSmARKtxXYHvwJuT+8gLGGWgpHcWOmBeljFB2Ckg6wiAYOqfxEK3GMCAj6kIiTWdCBCXhkjUKMgJcLk271N9uLSbtvvK0S69OXAvoA5z94VsFubbmZvx4QAnXgBnJxENyQjy38wef81uPhxMpPJIQzr5ckuUTKe0wZyN57iFTWga8GvCwlh5UqvYgmaNV9XSxEVWs40kkosFwA70RgNOu8mLZfR6wDiwRa35y7j08NksqPQhcfkRBK/J8R75Iz+9C8gJpqzwiIeZII3QnYOkJWbVEI5jNuA+o2BwK82ifwnpSgHwaC+GNAdmW2VXfC+vPu6wR6lBj84C9WfvivZyUhZMJlJhjSukDlFJ3g4AvGJfC1iEpQJ/CaEd7G9wds7p71+odruKrHip/C7RdsxeVjzIxhoNkFGOW/+sk/YVAGtltfzZAIfzix8gcHhZCXpcGN2u69qWqD9OlRFAy7x2fQBhHUiETB+DocqvArYt98f+AEAXApsEmEcNLC0t2uPHCqPQIXwHYDfI4/9+8LMpchqr5HK39MJSrBXwnutNqjovjHFdq+fcHLp7YLR4mGgduW5hFpAXUoL4cTTuW5HJSkB5PC0S7A+8c+837DyoM1J9iv/po/o3BunlDqPjOSO/YbLFd+FGy9sxKFeT8b+nLNPrkAyD53FtT27yUS32yqUaEGTMBiASGcZ0FmK8nWxbvjC1q6WQC4VdWdAcBY8eFoAzIrC0b7Wt8wlPcIdE1FhUWeKU1Igv8Q/0dl4k/NnYSxdlDon8diUDeuQB4c8XVzcahRgyyZmNC+LAgeCfSVALde8/t1DCYawNoePGT83wlOpFUdOZKwxn89OsMEf0X8CxJCBN/dwKbFwkSMgx0ACJJDJD4iC1JEYh6XcEqVHpx4+J4I4UiAl26r5x64sttvSlAn3LBuQCz6edU8C+J5epBrC4YP52EFDgHrCw1B0eU9bOaTgh3wmYvQV3Oqqcf53XnVNXUBELX1xtSgFrirlII5d3HFulxBCNEfZx0h7K2f34XwdHpuYQcguN189Ow/nPXclaUcqMH5leCXjKOjbv3F0a7i2ZaRHmBe5zwnhA9S736ZC8AH8LHkg/T5znYgmES1dtuzGo92qwHIquiWX+4KgVLd8utv9Ml1BQNhEJW/FOgweiTguCUoQHkEwYhjfQIgm8eAzPKzHqAG5xGiiPyxeGRRaYetUpDVpHVC1T9bHGyaknb/TQTnuG7rDYwYCUT7/cMjtILzA+Go/FPw581F/mWeTkDuBsBCAK8ki+A29nMzPn4Rzjv6QV7xWW4fzQFUxb9jQQ1qc28kMi4mDl1NBr4usIsz5ltZqNm7AeJXfuTHd7nioLEyPBISU+8/tP1AC4Il/n+YGmjg2NiBRdl6yCw//zG5ph7bqaBuz8B4VMU/TqSsNPbwCeZA1cdxyG9SgKzRZPL+GXFOiH1/SFZ9wX8M3zUgvH8a4rMBjZj/h1W9MrwTiN6MlsCKiI4gycBzgV/xUaQGjGDHwHiYi0VIzeEAasCpNuL76AC7BIEl7i4AIxnAfoMxk35eJbZ68wWEUChs8IPz/EEE9BkUoNA4RCWSLJkY1h0Y/dG9bVCtUVPe7QRhtStXG4nOECDfUxc4Uw/Ik8JkA9o9+a83IrfHH11EdFUWc4phNgVFWkPsIHBnCvCCYBSgqEN9qtoXuwHhByYoJJA7BxIkkRwpDGgAHo+vQ3ZGOwCFJCJKUAx4MBpFZWvReeLgtBBkDDQu2OJxXa7SE/P4ZiUPHABjY1DsFIhPAaygWewiXK72hHjow/k8gCL6gKES8qcDZ7A+EhYlWCPGCX1wXIwzkQEKt8cP6iqkC0FEhFj/ZYtvXCtwuBLcDT5wXN+9H6ZEIkTwV/x/s78fXFX3siWHEKrC3tw7EFZ31Ll7ttknQyEMGgAqCaVe1bGk8r8nFWCQQR0h7CY0dsU/mIeIuA1AGCo02Q0YVXxub36sG1Qgfo0CBBUXxap+ECFEycQVyViBEBFPt14TK9rZHB9EwMG7DPXOv0OVHkdtx7OSCXfb3av4CFZGTwQBwT7/hKPHE4PzpJ4L4+FM9r1n8B+B+9R9I4Fu9brYUZgCunZWNxdQgIs8mASBQ4F8hJpEiaf4GPihk8FdAxin/kybjZjTj+mAQy6ihZ9whDvHAWB6BKrBXQr+5SBfqPaINwiz12UIwoTmbPACZY/fshBBBKNlW8ZCHwH/cVKSOZMm4Mxk4OwE9JeB+EFkn1IzcPQoiSB4vGgNeJSoik1A7m0TCmE/HrggB+/1M12C1Z18ACGoIeH1pH2IhAqFWgBq+kDFEWAvA3X8tpW0cnSD5WAOriOHhnYraF1eLTkS8P/QsHUBdtMPnOrMaANJE9AZiaKWII5Ue/8PTHn/UcCSTgIF2xN4zdmAQYIAKeBFl6FiO0aKfq5jcImHfPwTxcEdRmD3LcFoAva1Hdjm9UgGggI9YOoPkOBYLsT8HlG3nucMDGkOOJ8CkNOELdSO7D5qqAeJYBb2GpABgRi2gxLITgrOQ9C937HgB+0i7MeRx3gfPWCXLtgbLJAu/gCFBPzRX8eADJqCvA3FViC/BlOQC4LZyrBq8BdQAOUKoKjqR7v7EFfVFMojPgEoSlJesNIePyLHwW9NRgq7E6HvUN8A0yj0wyWDHRZ3J2A1jHdMyu3hCGwSDwdRir7h9VP7AKLgPoMCgKziOFLtrUm8aIFHlgxYfz8WBYUU55iAXauo+evJaIK/NTgRJM9sUcZRzcCnMdNKMJc7usnAyrpxHYkTRHK+n1HxS01LheAHqRWwKIDqLvQC0+PupHZgBawfVGsiniTVHwZHRqbUI/D4Cd+ftgyLAR1ehkIiqaKFw7MJEwUIuK5zsu4svoFYCFKgBJZACBuppOId2RDkPZas8H9kULcA9a0KTCQDGtpnzT+RMJiOGseHl4BQ1C29AWUXIIf/OIwwqoNEK3SCuA7FRiBrE9B4/PcrGJ1OQNj83F4Xbol/TgVHfMiIZLAdcaVkgh8sLrd+liNQH/FqsNTfj15m1J0X+ffZuq/gTY7QnvIfJz6UzBJLs83ItQpt3RfZz5iuGfNPajpngUm0R8DoA5jDlzsOTAwZjzsC3Jjxg7H914PjlcskGdghgx9HG4OOQH34uwQyzz61/0qiYNQjXxECuWYbGM/DrjtPH/Mw/K+gBLLSA+cEfPr4MroArzcDuybbr8Zc72i2UnzeHnTgzD4Ug78SzIvCoARVOQxaFFR3TzWnkkHUVFShEuqKxZnKz4p4YYcf8ZhYhuu8wFgSHcuuwCJagI4bgchJQK/qe9c/RT6nGcg6KGREJpb+MI0EY/b0jcsni3AJBeCQNsBOFVYoApcM2Aom4VFgIRdHpeIG8D3YaxBD+qCiQ+rBOSVnci8hzkAG1t/pgHA4uwDzmu8xFKkkkIqCfkIRs204r/hiDgutoAAcowBMZ9+KS0CcXVBOHCvJw2jMQSJyeoeExF2DuTuRcuWAo9sefyUQ6/oBaIjPtiRH1KvQKvygAHb171d+vc4GRMDPoxN/kL5pwlVh1mBQ1quQJAJ5j0TgOAis+h8d3mnC8xTKE34+8sDNjyVXE6nFMN+H39TQDmocHScENvN74LoGScGU4f7g6IG3n3C3qnG6JBS+Z5tHOOzRYQx+u7MZmAl0OSsRLAS/VIKfRAWU92+12aaVPksGDBWQuCMvgNy2M2Mt8EwqbjosZAec5xLEAmXmcFTHiOWARWglpNpjdEtBQRxJJU5VL5/7F1X86XntXgUK4q+KggsUoIIK8oA+kgy4+zLaACqQGTVOX6MBWdehL6BxHn+tlyBMDGAqufd7WOX5WTJwKYDfXJJP2GXDPk7Tj5Ed7BOG7DMFaBRAJgI/+H2Ngeb2SKb0zkoGlQBHkefDr7xMA5HZeJPtKIzyApI9gmnPgf1c3mulfhe0gFekDCdNFnrOwi4Gs6eTACNjB+Uegcgojog4V25P8bctRYY6RL8AJklE9ACFAGZdBEahd4d4CmghFhbzcwaXYH5qTlS6DY+KfNH5Avzjo2JJ0poDkSCMxLn73H/eB+ifvgvyIFCWAji7BWC8hd0qj0FziMdrS70BlVbgamIgcmotGZDNPwm0L9l5iHv7WRoAFx57ScFS2r2iwot8oKu8l+TOCOg2mZ2nFdjTgOFQENzKkJ8OjEnsE8f6AzyXwT6MNF3RDRnuj0Lwo6wTlBMDIyqaz6G+RiLJMg/KUrQV/rh9uH0tWduwoxmky0kSMQ+rnXxZsGadgnxfgk1pCnsIsGYltvfdzTOBIclIsN8MLAGcz5gBwj94AE8DuC9Molip/JGwB57nRyJiyD3pyk6q5ij+3TzRLohcqyqCEQBTepF15+WVmW8SEr5jMUUkx3oMIsrH3ndwAQganKzyMpOJNxMQooGBYwcByw7axIhgPRGEr6GSGJhkAELoQ1YRg+dPeD5IIRDIqq5PA2Jh0Rq0YcS8XBi0ghGRFpCtWTdum5+yLOsQf2EuYY8AfnbQZDgCjHxBSKwTGpt8QCIDVH3/4H5OwEvldhliINwAFLsEyyIfGKV+vm3eEehVqKTdNxtDiPoLHCRiuwTJxCECxMDqDjTvZ63KaPKvRgV2i/F3ohm88V8LN8hgJcXD5pVGIPPNn9EBqSQC0I4AMxBUcQNCkarkFgSn/oCs9GCVep4eUG5BRAOcQOCWlGSc3If0IFqRfURQGRrKewPKEJ9sLnIowKCcw+f48N6UHjqYtgInaCCkBbPSj8VEkCr2g8U43wY1xX/BNkwreQrzg+oaJghOCGTU8RBxuIp6VFOGoEXgEsBLIgV6gBgxoLSI5CgiYNT+GBHsU01GthrceiMUtv9KgAYktgVNeGrBbtiOQVi9x8WjiAW7UNUnm4Vet7WtsFgDCDYEwQ/EVL1PnQf/xCDLTowTh4c4HPRDoQaiwhKIAae4B7xgCBydI/CDPOrevK0FR4p6w3VfoXgQiB3T1N8Y1PCD0X19JqcHGfzB5WkQE4p/kdeXBcEVUXEIFqSij82lMyrWq/7c+LFHA7z5/dwOHHg8s/Y8C2CmhbmALtare+4UWLfb25BmXABKABTniC8gRAP2yvDAiUAsElnrxFzITQa/sAFecAOY7zPV/8jMQHSbWAiUPGkQNABhw85xrSCv+mMSzFR8+7mjw01A8f4F8S/td4jnDHYxpT8/OEyV3gz2+GTfdAeAszswfJNGlQhEIjB0Bls0BKn4Iw7WKu9f1gmSagmvqleEwJwnZwjO7npz1HdCJ1hS/mlBcRXyF3i/M7NxqJFoeH27z7nnJaBmpUZKHsTbGUc1ALEoIGsGYl9ixS50gjAT/VhB8IzvGTrBVfWEz1MzAkRFTtecW731VdjNQPukVdhdn0Y8d/a7WYH6i/TBPBzUFwAlHwtGHOQISrgb1AMUgDETTA3+THAdeRJhg59V/Ektofa9I8wxVICkC7QQSAd2O3cftzPzdMK6aA4iZI4ILfYRbb9RgqICt2AxVnYZ4kkBvHOBxT/zN9ybHx/f5Ql2fkGCX6ANm6F8WCfqAS+Eq5AGcHJd2IFHagTMHAAj+mWBnDXuc81CjhsAi5dL2K8QCYI1aJ/PJtSSxEFXASv7C2I3ZB9/a0j/7nDn/j1pHsz9Jr8fNpxPBUAUUYD4wz5GBlmyAiORjtAIGDFwzSUwqiNZ1d1tPiB7/Q9VeI9KeJU16/knkEeQJEALjY4rkp74fCZiMDSA/PgvT/aT2gYgp5E/P29AKBQAo6TRth5T4VesQFb0i4K7RA2MZpgyFXCEQHCOixuYMPgy2L7+45ezSSKt2oUkURlpXkEMOLSiXPuDQZjk63N5bmzOSxQdLHX7AhwUEA0BAeQPJIQzkAuFlOK/GtyLdiGDKEBdllQ7YouxV2Xdwza9So4Kp5Z0yAgUhTlJgFzSFrznIHYIwKcCu2/L3LsCg6UI1b1/CA+ApIV5/32HqOIjdQusE4azip5Wc1b0q/QGIAlaWEJbXP3r/L+AEipw/+BtkQVY9fIM2i/ZhgVEgJO6DZ1ksVtlYdoQAPhVO0oKmYBmnAYco4DRCRB3TwCziptaE0auER9/VzRqKNOEYINOQg2m1l9GpGNQAhh1v6UmxNQh2M4+LmlUzll0OTjYQOaGlZAEMCrdhmBphaMBwBADrSQQc3//He8KgFETT7p6BHnjj2X9EXsDjrgBS6ihoAmcSQVYmE4JgYWFpp1waAQRoqDzxDhU+HxSnZHz/9JEY6Y5MJA+cwoWrt99+U3Mc/9g/NQTFaigAEtwB1yBzwzucZSX7RZEILhR1d5GDCsBLVUdIQvsldZfEJt5i/MHx2hGJZFkVVyK242iFeh58oBUFqIQbkfp2DV2X0CkAYgv1sU+P+I/HmBu8nErugdRnUWhfp+A/ddlbEH3uQlBsNobUEMHasK1HOYn8BEEvCUaiuigXRIKj+sGOPA4KAWz9/s7WxcgB4+a6/fI2osEwv4yOENAiPf+wQhbc/5f0gGisWuQaRFmGoIqguARWsBQgTTocDLMT5OJUQnhqdCEig+/EShKSEgTVV0MBMnz04BcshPnLk/+OaV0/dwKzB4QUt1NB6uTDfGOP+cNm9mEsBAFiM7AQh9AKVEU75vy68jeOxrUC4mDEuYO0oLqoSdHaEF2eXYYSm0V+oEOwpLmYFOF3Z4CmAeBTIGueiIw2xoKPzDBJVBXQ5g5O8/twwA+QguIjJt3+g0NQEcDfUXgO5gsqlTBLkQLdl86K3CWneitQ8sg/5oWAUJP2C3V3RoEyji5n4b9lB4t9pz2CA+cAFn1Z9I/uzYsU/ELtEBOCHYQQqGcFejV+yeuRJX31zsKV5IGjway9z6PLDxKwNEPsBuOEiqw57jGgOtZ1Y++T50AuMFl7hPIbhskiOwsATtRoc7rS7dXrpcgrMCGJca6ELJo+Y0be0BW5ZKGcFz4y8W9BduwcDnK9iO5fagsKpp9ANnvDPxeP8THNyIVFo1AMas8Qk5v2Ytm0LCCYAXqn+wQsPTBh/5Bcnne14Os3uCQt28vsK1WUESJFviBgAW//3u9PLxusXchcCR2WsNzv/ImvgZzzkUByDUAIrjTvmSHAowpJBQE4SUlxMxnARlQbIqkArVAJ6pBBvELCCKlkyCDAP45BYfEPfcUpfMch3Vn4bheYK4E66BxAxHSVd5INgEPgU/NBCDfNQ8Ho1CoINAPQAW/QT8OCIZlNFCB84XhoDChFByHGjx35v9BLgyhmojqHYb5QYXnuAecvua0hZe6BV9f7v4ibvgvamrmAc1TmaEir0LQ9h97eYAYVoM/nWA60i8Q3Ifezha9BqaaL3zvqd6IAuwwLSCCuCLuJWch4h30giPtyiAphKEBcCu9BV5wwzkMxID8rhMwdwMhcSFgrBT3RUTQboAUg3+p+Qe1IGarOioVnazmefV3lHpwA0AcLWCahUiXwePHWJsP+GH1gnp/we5KfOhJAbsj0H/BIEb04TbrTPsAyb2LLu93KwfCvn5PLAwrOXAa72eEQRo1CNdw5IprsAZ3hApy9zlcITG2vpCihsRSYxNS+J4vdBZ6B52eqRcQ/QXmSjAWSfa/5GA5qEg4iJFtm624AqXLrSA2gx8p1Mdqcghv41S0lSp/xAYs9gakQc4Ie2RTUYwYgt748mV+FU1Xgp14eW3XYZ6cdqGTNHwHICTwEeTPl0jEZwIgP9gDEaogeg5IHWCF+1eoAhvEKPB/EAeTRsM/pSAP5wjWEUMM1/NJRhwJbpJSgK7S7zF3EOsI5jBQBK9DV80Z8Y0COzvmWzJXgDl40KEC6cqvqgi4OB5cpgLFYK/1CvDiItXqC6/S87wfAUfPtxqfGNzlYaOjlf1IsHPPvffHgDAoEeEST4ZLZUd/RSo91/BjXY5ggWgQ4In3fyj4mUqPrInHOCLKO3wUwRsfyXpt1nEIRLrqcWeTuk7bigsbid1zD4iDRQtnIdQsyIXnFCn1I9D7ADgxEhOvR5AJosoUbu1FkJyYCi9OhQERoIx+4AX/YqUXQhtYEwKN4Cy1HntLMmtaAQpqfrT/UCoLSxeswjA5UWPPi0mjajUWxMTdVusNvt/ChMdmILK5IRMFu90BMEzFYHdg2GAgeYVHMMJIBTA7EFTx/5fpgTFXz9w/en0ZjD8kCDoKPNGwlB01BmoWQbh+AxR689mBponGJOr9OwmMu3dtJ/ylW1Tik4ElUPmR9RqII+pVhD9ychABMQ51gOIZg+/G+5mGIzLB1JJC5WhzYjhJ7IWmLDpA8jzsAafUPkB2WnFBF4iSxkq1ty7f25rv/+EQLOxs2oUdTSA9HIR9swdBlCcFe9owPC3XWDDC0ISVzsEVbSCF/sWdA5Fu4HJqankp2SeQCYYrImNalfmhpVxYrGkUS4LeSUjg8dD7+D7w/ybIfy7vlB9/HJ978zr7/45Qgajzj+4EjIK/ULHPRAOlKr/aG0AFcqCyu0GcW45Igh6JMJmhA49/U+cEssHNJhtXDC1MOya3j/sAiAGcrEtqtgjBD6wEzSDc7D8o6C8rIqAZyPk+NQoNLAZ1hR64Yl1FBY648smUYKnSg1Xwk/0DyRyArByMUobyByhCcPnOaPyoegREFS4jNfYAw+IHCjdC1J2WDZBke/OyN85J24WiXwDYPoJyYuCD238ulvuzwt6KgHf0shWKsqCFFGjB/w8HU8eeTED9wAAAAABJRU5ErkJggg==", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      Tk = kk => ck(kk, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      rk = kk => ck(kk, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var Dk = Bk(39489),
      zk = Bk(36758),
      Pk = Bk(39541),
      hk = Bk(39692),
      qk = Bk(39771);
    class Ck extends hk.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let Zk = (() => {
      var kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk;
      let sk, Vk, Jk, Ak, ek, yk, fk, mk, Wk, vk = qk.e,
        ik = [],
        Yk = [],
        Lk = [],
        Ok = [],
        Ek = [],
        Hk = [],
        uk = [],
        Mk = [],
        gk = [],
        Uk = [],
        ck = [],
        Gk = [],
        Tk = [],
        rk = [],
        Dk = [],
        zk = [],
        Pk = [],
        hk = [];
      return kk = class extends vk {
        get useEnergyConservation() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set useEnergyConservation(kk) {
          (0, Sk.i)(this, Fk, kk, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, Sk.e)(this, Bk, "f")
        }
        set useSmithVisibilityHeightCorrelated(kk) {
          (0, Sk.i)(this, Bk, kk, "f")
        }
        get useSphericalHarmonics() {
          return (0, Sk.e)(this, Rk, "f")
        }
        set useSphericalHarmonics(kk) {
          (0, Sk.i)(this, Rk, kk, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, Sk.e)(this, tk, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(kk) {
          (0, Sk.i)(this, tk, kk, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, Sk.e)(this, ak, "f")
        }
        set mixIblRadianceWithIrradiance(kk) {
          (0, Sk.i)(this, ak, kk, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, Sk.e)(this, Xk, "f")
        }
        set useLegacySpecularEnergyConservation(kk) {
          (0, Sk.i)(this, Xk, kk, "f")
        }
        get baseDiffuseModel() {
          return (0, Sk.e)(this, bk, "f")
        }
        set baseDiffuseModel(kk) {
          (0, Sk.i)(this, bk, kk, "f")
        }
        get dielectricSpecularModel() {
          return (0, Sk.e)(this, wk, "f")
        }
        set dielectricSpecularModel(kk) {
          (0, Sk.i)(this, wk, kk, "f")
        }
        get conductorSpecularModel() {
          return (0, Sk.e)(this, dk, "f")
        }
        set conductorSpecularModel(kk) {
          (0, Sk.i)(this, dk, kk, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(sk) {
          let Vk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(sk, "PBRBRDF", 90, new Ck, Vk), this._useEnergyConservation = kk.DEFAULT_USE_ENERGY_CONSERVATION, Fk.set(this, (0, Sk.l)(this, ik, kk.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, Sk.l)(this, Yk), kk.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), Bk.set(this, (0, Sk.l)(this, Lk, kk.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, Sk.l)(this, Ok), kk.DEFAULT_USE_SPHERICAL_HARMONICS), Rk.set(this, (0, Sk.l)(this, Ek, kk.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, Sk.l)(this, Hk), kk.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), tk.set(this, (0, Sk.l)(this, uk, kk.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, Sk.l)(this, Mk), kk.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), ak.set(this, (0, Sk.l)(this, gk, kk.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, Sk.l)(this, Uk), kk.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), Xk.set(this, (0, Sk.l)(this, ck, kk.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, Sk.l)(this, Gk), kk.DEFAULT_DIFFUSE_MODEL), bk.set(this, (0, Sk.l)(this, Tk, kk.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, Sk.l)(this, rk), kk.DEFAULT_DIELECTRIC_SPECULAR_MODEL), wk.set(this, (0, Sk.l)(this, Dk, kk.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, Sk.l)(this, zk), kk.DEFAULT_CONDUCTOR_SPECULAR_MODEL), dk.set(this, (0, Sk.l)(this, Pk, kk.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, Sk.l)(this, hk), this._internalMarkAllSubMeshesAsMiscDirty = sk._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(kk) {
          kk.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, kk.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, kk.SPHERICAL_HARMONICS = this._useSphericalHarmonics, kk.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, kk.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, kk.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, kk.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, kk.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, kk.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, Fk = new WeakMap, Bk = new WeakMap, Rk = new WeakMap, tk = new WeakMap, ak = new WeakMap, Xk = new WeakMap, bk = new WeakMap, wk = new WeakMap, dk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(vk[Symbol.metadata] ?? null) : void 0;
        sk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], Vk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], Jk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], Ak = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], ek = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], yk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], fk = [(0, Nk.M)("baseDiffuseModel"), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], mk = [(0, Nk.M)("dielectricSpecularModel"), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], Wk = [(0, Nk.M)("conductorSpecularModel"), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], (0, Sk.j)(kk, null, sk, {
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
        }, ik, Yk), (0, Sk.j)(kk, null, Vk, {
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
        }, Lk, Ok), (0, Sk.j)(kk, null, Jk, {
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
        }, Ek, Hk), (0, Sk.j)(kk, null, Ak, {
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
        }, uk, Mk), (0, Sk.j)(kk, null, ek, {
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
        }, gk, Uk), (0, Sk.j)(kk, null, yk, {
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
        }, ck, Gk), (0, Sk.j)(kk, null, fk, {
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
        }, Tk, rk), (0, Sk.j)(kk, null, mk, {
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
        }, Dk, zk), (0, Sk.j)(kk, null, Wk, {
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
        }, Pk, hk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk.DEFAULT_USE_ENERGY_CONSERVATION = !0, kk.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, kk.DEFAULT_USE_SPHERICAL_HARMONICS = !0, kk.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, kk.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, kk.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, kk.DEFAULT_DIFFUSE_MODEL = 0, kk.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, kk.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, kk
    })();
    var pk = Bk(39684),
      Kk = Bk(36917),
      xk = Bk(39686),
      jk = Bk(39510),
      lk = Bk(39753),
      nk = Bk(39749),
      Ik = Bk(39762),
      Qk = Bk(39735);
    class kF extends hk.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let FF = (() => {
      var kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk;
      let sk, Vk, Jk, Ak, ek, yk, fk, mk, Wk, vk, ik, Yk, Lk, Ok, Ek = qk.e,
        Hk = [],
        uk = [],
        Mk = [],
        gk = [],
        Uk = [],
        ck = [],
        Gk = [],
        Tk = [],
        rk = [],
        Dk = [],
        zk = [],
        Pk = [],
        hk = [],
        Ck = [],
        Zk = [],
        pk = [],
        xk = [],
        jk = [],
        lk = [],
        Ik = [],
        FF = [],
        BF = [],
        RF = [],
        tF = [],
        aF = [],
        XF = [],
        bF = [],
        wF = [];
      return kk = class extends Ek {
        get isEnabled() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set isEnabled(kk) {
          (0, Sk.i)(this, Fk, kk, "f")
        }
        get indexOfRefraction() {
          return (0, Sk.e)(this, Bk, "f")
        }
        set indexOfRefraction(kk) {
          (0, Sk.i)(this, Bk, kk, "f")
        }
        get texture() {
          return (0, Sk.e)(this, Rk, "f")
        }
        set texture(kk) {
          (0, Sk.i)(this, Rk, kk, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Sk.e)(this, tk, "f")
        }
        set useRoughnessFromMainTexture(kk) {
          (0, Sk.i)(this, tk, kk, "f")
        }
        get textureRoughness() {
          return (0, Sk.e)(this, ak, "f")
        }
        set textureRoughness(kk) {
          (0, Sk.i)(this, ak, kk, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, Sk.e)(this, Xk, "f")
        }
        set remapF0OnInterfaceChange(kk) {
          (0, Sk.i)(this, Xk, kk, "f")
        }
        get bumpTexture() {
          return (0, Sk.e)(this, bk, "f")
        }
        set bumpTexture(kk) {
          (0, Sk.i)(this, bk, kk, "f")
        }
        get isTintEnabled() {
          return (0, Sk.e)(this, wk, "f")
        }
        set isTintEnabled(kk) {
          (0, Sk.i)(this, wk, kk, "f")
        }
        get tintTexture() {
          return (0, Sk.e)(this, dk, "f")
        }
        set tintTexture(kk) {
          (0, Sk.i)(this, dk, kk, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(sk) {
          let Vk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(sk, "PBRClearCoat", 100, new kF, Vk), this._isEnabled = !1, Fk.set(this, (0, Sk.l)(this, Hk, !1)), this.intensity = ((0, Sk.l)(this, uk), (0, Sk.l)(this, Mk, 1)), this.roughness = ((0, Sk.l)(this, gk), (0, Sk.l)(this, Uk, 0)), this._indexOfRefraction = ((0, Sk.l)(this, ck), kk._DefaultIndexOfRefraction), Bk.set(this, (0, Sk.l)(this, Gk, kk._DefaultIndexOfRefraction)), this._texture = ((0, Sk.l)(this, Tk), null), Rk.set(this, (0, Sk.l)(this, rk, null)), this._useRoughnessFromMainTexture = ((0, Sk.l)(this, Dk), !0), tk.set(this, (0, Sk.l)(this, zk, !0)), this._textureRoughness = ((0, Sk.l)(this, Pk), null), ak.set(this, (0, Sk.l)(this, hk, null)), this._remapF0OnInterfaceChange = ((0, Sk.l)(this, Ck), !0), Xk.set(this, (0, Sk.l)(this, Zk, !0)), this._bumpTexture = ((0, Sk.l)(this, pk), null), bk.set(this, (0, Sk.l)(this, xk, null)), this._isTintEnabled = ((0, Sk.l)(this, jk), !1), wk.set(this, (0, Sk.l)(this, lk, !1)), this.tintColor = ((0, Sk.l)(this, Ik), (0, Sk.l)(this, FF, Kk.e.White())), this.tintColorAtDistance = ((0, Sk.l)(this, BF), (0, Sk.l)(this, RF, 1)), this.tintThickness = ((0, Sk.l)(this, tF), (0, Sk.l)(this, aF, 1)), this._tintTexture = ((0, Sk.l)(this, XF), null), dk.set(this, (0, Sk.l)(this, bF, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Sk.l)(this, wF), this._internalMarkAllSubMeshesAsTexturesDirty = sk._dirtyCallbacks[1]
        }
        isReadyForSubMesh(kk, Fk, Bk) {
          if (!this._isEnabled) return !0;
          const Rk = this._material._disableBumpMap;
          if (kk._areTexturesDirty && Fk.texturesEnabled) {
            if (this._texture && nk.b.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && nk.b.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (Bk.getCaps().standardDerivatives && this._bumpTexture && nk.b.ClearCoatBumpTextureEnabled && !Rk && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && nk.b.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(Fk, Bk) {
          this._isEnabled ? (Fk.CLEARCOAT = !0, Fk.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, Fk.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, Fk._areTexturesDirty && Bk.texturesEnabled && (this._texture && nk.b.ClearCoatTextureEnabled ? (0, Qk._)(this._texture, Fk, "CLEARCOAT_TEXTURE") : Fk.CLEARCOAT_TEXTURE = !1, this._textureRoughness && nk.b.ClearCoatTextureEnabled ? (0, Qk._)(this._textureRoughness, Fk, "CLEARCOAT_TEXTURE_ROUGHNESS") : Fk.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && nk.b.ClearCoatBumpTextureEnabled ? (0, Qk._)(this._bumpTexture, Fk, "CLEARCOAT_BUMP") : Fk.CLEARCOAT_BUMP = !1, Fk.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === kk._DefaultIndexOfRefraction, this._isTintEnabled ? (Fk.CLEARCOAT_TINT = !0, this._tintTexture && nk.b.ClearCoatTintTextureEnabled ? ((0, Qk._)(this._tintTexture, Fk, "CLEARCOAT_TINT_TEXTURE"), Fk.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : Fk.CLEARCOAT_TINT_TEXTURE = !1) : (Fk.CLEARCOAT_TINT = !1, Fk.CLEARCOAT_TINT_TEXTURE = !1))) : (Fk.CLEARCOAT = !1, Fk.CLEARCOAT_TEXTURE = !1, Fk.CLEARCOAT_TEXTURE_ROUGHNESS = !1, Fk.CLEARCOAT_BUMP = !1, Fk.CLEARCOAT_TINT = !1, Fk.CLEARCOAT_TINT_TEXTURE = !1, Fk.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, Fk.CLEARCOAT_DEFAULTIOR = !1, Fk.CLEARCOAT_TEXTUREDIRECTUV = 0, Fk.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, Fk.CLEARCOAT_BUMPDIRECTUV = 0, Fk.CLEARCOAT_REMAP_F0 = !1, Fk.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, Fk.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(kk, Fk, Bk, Rk) {
          if (!this._isEnabled) return;
          const tk = Rk.materialDefines,
            ak = this._material.isFrozen,
            Xk = this._material._disableBumpMap,
            bk = this._material._invertNormalMapX,
            wk = this._material._invertNormalMapY;
          if (!kk.useUbo || !ak || !kk.isSync) {
            (this._texture || this._textureRoughness) && nk.b.ClearCoatTextureEnabled && (kk.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Qk.E)(this._texture, kk, "clearCoat"), this._textureRoughness && !tk.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Qk.E)(this._textureRoughness, kk, "clearCoatRoughness")), this._bumpTexture && Bk.getCaps().standardDerivatives && nk.b.ClearCoatTextureEnabled && !Xk && (kk.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, Qk.E)(this._bumpTexture, kk, "clearCoatBump"), Fk._mirroredCameraPosition ? kk.updateFloat2("vClearCoatTangentSpaceParams", bk ? 1 : -1, wk ? 1 : -1) : kk.updateFloat2("vClearCoatTangentSpaceParams", bk ? -1 : 1, wk ? -1 : 1)), this._tintTexture && nk.b.ClearCoatTintTextureEnabled && (kk.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, Qk.E)(this._tintTexture, kk, "clearCoatTint")), kk.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Rk = 1 - this._indexOfRefraction,
              ak = 1 + this._indexOfRefraction,
              dk = Math.pow(-Rk / ak, 2),
              sk = 1 / this._indexOfRefraction;
            kk.updateFloat4("vClearCoatRefractionParams", dk, sk, Rk, ak), this._isTintEnabled && (kk.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), kk.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          Fk.texturesEnabled && (this._texture && nk.b.ClearCoatTextureEnabled && kk.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !tk.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && nk.b.ClearCoatTextureEnabled && kk.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && Bk.getCaps().standardDerivatives && nk.b.ClearCoatBumpTextureEnabled && !Xk && kk.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && nk.b.ClearCoatTintTextureEnabled && kk.setTexture("clearCoatTintSampler", this._tintTexture))
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
        addFallbacks(kk, Fk, Bk) {
          return kk.CLEARCOAT_BUMP && Fk.addFallback(Bk++, "CLEARCOAT_BUMP"), kk.CLEARCOAT_TINT && Fk.addFallback(Bk++, "CLEARCOAT_TINT"), kk.CLEARCOAT && Fk.addFallback(Bk++, "CLEARCOAT"), Bk
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
      }, Fk = new WeakMap, Bk = new WeakMap, Rk = new WeakMap, tk = new WeakMap, ak = new WeakMap, Xk = new WeakMap, bk = new WeakMap, wk = new WeakMap, dk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ek[Symbol.metadata] ?? null) : void 0;
        sk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Vk = [(0, Nk.M)()], Jk = [(0, Nk.M)()], Ak = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], ek = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], yk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], fk = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], mk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Wk = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], vk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], ik = [(0, Nk.l)()], Yk = [(0, Nk.M)()], Lk = [(0, Nk.M)()], Ok = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], (0, Sk.j)(kk, null, sk, {
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
        }, Hk, uk), (0, Sk.j)(kk, null, Ak, {
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
        }, Gk, Tk), (0, Sk.j)(kk, null, ek, {
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
        }, rk, Dk), (0, Sk.j)(kk, null, yk, {
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
        }, zk, Pk), (0, Sk.j)(kk, null, fk, {
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
        }, hk, Ck), (0, Sk.j)(kk, null, mk, {
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
        }, Zk, pk), (0, Sk.j)(kk, null, Wk, {
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
        }, xk, jk), (0, Sk.j)(kk, null, vk, {
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
        }, lk, Ik), (0, Sk.j)(kk, null, Ok, {
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
        }, bF, wF), (0, Sk.j)(null, null, Vk, {
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
        }, Mk, gk), (0, Sk.j)(null, null, Jk, {
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
        }, Uk, ck), (0, Sk.j)(null, null, ik, {
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
        }, FF, BF), (0, Sk.j)(null, null, Yk, {
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
        }, RF, tF), (0, Sk.j)(null, null, Lk, {
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
        }, aF, XF), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk._DefaultIndexOfRefraction = 1.5, kk
    })();
    class BF extends hk.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let RF = (() => {
      var kk, Fk, Bk, Rk;
      let tk, ak, Xk, bk, wk, dk, sk, Vk = qk.e,
        Jk = [],
        Ak = [],
        ek = [],
        yk = [],
        fk = [],
        mk = [],
        Wk = [],
        vk = [],
        ik = [],
        Yk = [],
        Lk = [],
        Ok = [],
        Ek = [],
        Hk = [];
      return kk = class extends Vk {
        get isEnabled() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set isEnabled(kk) {
          (0, Sk.i)(this, Fk, kk, "f")
        }
        get texture() {
          return (0, Sk.e)(this, Bk, "f")
        }
        set texture(kk) {
          (0, Sk.i)(this, Bk, kk, "f")
        }
        get thicknessTexture() {
          return (0, Sk.e)(this, Rk, "f")
        }
        set thicknessTexture(kk) {
          (0, Sk.i)(this, Rk, kk, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(tk) {
          let ak = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(tk, "PBRIridescence", 110, new BF, ak), this._isEnabled = !1, Fk.set(this, (0, Sk.l)(this, Jk, !1)), this.intensity = ((0, Sk.l)(this, Ak), (0, Sk.l)(this, ek, 1)), this.minimumThickness = ((0, Sk.l)(this, yk), (0, Sk.l)(this, fk, kk._DefaultMinimumThickness)), this.maximumThickness = ((0, Sk.l)(this, mk), (0, Sk.l)(this, Wk, kk._DefaultMaximumThickness)), this.indexOfRefraction = ((0, Sk.l)(this, vk), (0, Sk.l)(this, ik, kk._DefaultIndexOfRefraction)), this._texture = ((0, Sk.l)(this, Yk), null), Bk.set(this, (0, Sk.l)(this, Lk, null)), this._thicknessTexture = ((0, Sk.l)(this, Ok), null), Rk.set(this, (0, Sk.l)(this, Ek, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Sk.l)(this, Hk), this._internalMarkAllSubMeshesAsTexturesDirty = tk._dirtyCallbacks[1]
        }
        isReadyForSubMesh(kk, Fk) {
          if (!this._isEnabled) return !0;
          if (kk._areTexturesDirty && Fk.texturesEnabled) {
            if (this._texture && nk.b.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && nk.b.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(kk, Fk) {
          this._isEnabled ? (kk.IRIDESCENCE = !0, kk._areTexturesDirty && Fk.texturesEnabled && (this._texture && nk.b.IridescenceTextureEnabled ? (0, Qk._)(this._texture, kk, "IRIDESCENCE_TEXTURE") : kk.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && nk.b.IridescenceTextureEnabled ? (0, Qk._)(this._thicknessTexture, kk, "IRIDESCENCE_THICKNESS_TEXTURE") : kk.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (kk.IRIDESCENCE = !1, kk.IRIDESCENCE_TEXTURE = !1, kk.IRIDESCENCE_THICKNESS_TEXTURE = !1, kk.IRIDESCENCE_TEXTUREDIRECTUV = 0, kk.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(kk, Fk) {
          if (!this._isEnabled) return;
          const Bk = this._material.isFrozen;
          kk.useUbo && Bk && kk.isSync || ((this._texture || this._thicknessTexture) && nk.b.IridescenceTextureEnabled && (kk.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, Qk.E)(this._texture, kk, "iridescence"), this._thicknessTexture && (0, Qk.E)(this._thicknessTexture, kk, "iridescenceThickness")), kk.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), Fk.texturesEnabled && (this._texture && nk.b.IridescenceTextureEnabled && kk.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && nk.b.IridescenceTextureEnabled && kk.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
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
        addFallbacks(kk, Fk, Bk) {
          return kk.IRIDESCENCE && Fk.addFallback(Bk++, "IRIDESCENCE"), Bk
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
      }, Fk = new WeakMap, Bk = new WeakMap, Rk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vk[Symbol.metadata] ?? null) : void 0;
        tk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], ak = [(0, Nk.M)()], Xk = [(0, Nk.M)()], bk = [(0, Nk.M)()], wk = [(0, Nk.M)()], dk = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], sk = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], (0, Sk.j)(kk, null, tk, {
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
        }, Jk, Ak), (0, Sk.j)(kk, null, dk, {
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
        }, Lk, Ok), (0, Sk.j)(kk, null, sk, {
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
        }, Ek, Hk), (0, Sk.j)(null, null, ak, {
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
        }, ek, yk), (0, Sk.j)(null, null, Xk, {
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
        }, fk, mk), (0, Sk.j)(null, null, bk, {
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
        }, Wk, vk), (0, Sk.j)(null, null, wk, {
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
        }, ik, Yk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk._DefaultMinimumThickness = 100, kk._DefaultMaximumThickness = 400, kk._DefaultIndexOfRefraction = 1.3, kk
    })();
    class tF extends hk.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let aF = (() => {
      var kk, Fk, Bk, Rk;
      let tk, ak, Xk, bk, wk, dk = qk.e,
        sk = [],
        Vk = [],
        Jk = [],
        Ak = [],
        ek = [],
        yk = [],
        fk = [],
        mk = [],
        Wk = [],
        vk = [];
      return kk = class extends dk {
        get isEnabled() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set isEnabled(kk) {
          (0, Sk.i)(this, Fk, kk, "f")
        }
        set angle(kk) {
          this.direction.x = Math.cos(kk), this.direction.y = Math.sin(kk)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, Sk.e)(this, Bk, "f")
        }
        set texture(kk) {
          (0, Sk.i)(this, Bk, kk, "f")
        }
        get legacy() {
          return (0, Sk.e)(this, Rk, "f")
        }
        set legacy(kk) {
          (0, Sk.i)(this, Rk, kk, "f")
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
          let tk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(kk, "PBRAnisotropic", 110, new tF, tk), this._isEnabled = !1, Fk.set(this, (0, Sk.l)(this, sk, !1)), this.intensity = ((0, Sk.l)(this, Vk), (0, Sk.l)(this, Jk, 1)), this.direction = ((0, Sk.l)(this, Ak), (0, Sk.l)(this, ek, new zk.p(1, 0))), this._texture = ((0, Sk.l)(this, yk), null), Bk.set(this, (0, Sk.l)(this, fk, null)), this._legacy = ((0, Sk.l)(this, mk), !1), Rk.set(this, (0, Sk.l)(this, Wk, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Sk.l)(this, vk), this._internalMarkAllSubMeshesAsTexturesDirty = kk._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = kk._dirtyCallbacks[16]
        }
        isReadyForSubMesh(kk, Fk) {
          return !this._isEnabled || !(kk._areTexturesDirty && Fk.texturesEnabled && this._texture && nk.b.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(kk, Fk, Bk) {
          this._isEnabled ? (kk.ANISOTROPIC = this._isEnabled, this._isEnabled && !Bk.isVerticesDataPresent(Pk.n.TangentKind) && (kk._needUVs = !0, kk.MAINUV1 = !0), kk._areTexturesDirty && Fk.texturesEnabled && (this._texture && nk.b.AnisotropicTextureEnabled ? (0, Qk._)(this._texture, kk, "ANISOTROPIC_TEXTURE") : kk.ANISOTROPIC_TEXTURE = !1), kk._areMiscDirty && (kk.ANISOTROPIC_LEGACY = this._legacy)) : (kk.ANISOTROPIC = !1, kk.ANISOTROPIC_TEXTURE = !1, kk.ANISOTROPIC_TEXTUREDIRECTUV = 0, kk.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(kk, Fk) {
          if (!this._isEnabled) return;
          const Bk = this._material.isFrozen;
          kk.useUbo && Bk && kk.isSync || (this._texture && nk.b.AnisotropicTextureEnabled && (kk.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Qk.E)(this._texture, kk, "anisotropy")), kk.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), Fk.texturesEnabled && this._texture && nk.b.AnisotropicTextureEnabled && kk.setTexture("anisotropySampler", this._texture)
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
        addFallbacks(kk, Fk, Bk) {
          return kk.ANISOTROPIC && Fk.addFallback(Bk++, "ANISOTROPIC"), Bk
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
        parse(kk, Fk, Bk) {
          super.parse(kk, Fk, Bk), void 0 === kk.legacy && (this.legacy = !0)
        }
      }, Fk = new WeakMap, Bk = new WeakMap, Rk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(dk[Symbol.metadata] ?? null) : void 0;
        tk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], ak = [(0, Nk.M)()], Xk = [(0, Nk.H)()], bk = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], wk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], (0, Sk.j)(kk, null, tk, {
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
        }, sk, Vk), (0, Sk.j)(kk, null, bk, {
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
        }, fk, mk), (0, Sk.j)(kk, null, wk, {
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
        }, Wk, vk), (0, Sk.j)(null, null, ak, {
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
        }, Jk, Ak), (0, Sk.j)(null, null, Xk, {
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
        }, ek, yk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk
    })();
    class XF extends hk.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let bF = (() => {
      var kk, Fk, Bk, Rk, tk, ak, Xk, bk;
      let wk, dk, sk, Vk, Jk, Ak, ek, yk, fk, mk = qk.e,
        Wk = [],
        vk = [],
        ik = [],
        Yk = [],
        Lk = [],
        Ok = [],
        Ek = [],
        Hk = [],
        uk = [],
        Mk = [],
        gk = [],
        Uk = [],
        ck = [],
        Gk = [],
        Tk = [],
        rk = [],
        Dk = [],
        zk = [];
      return kk = class extends mk {
        get isEnabled() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set isEnabled(kk) {
          (0, Sk.i)(this, Fk, kk, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, Sk.e)(this, Bk, "f")
        }
        set linkSheenWithAlbedo(kk) {
          (0, Sk.i)(this, Bk, kk, "f")
        }
        get texture() {
          return (0, Sk.e)(this, Rk, "f")
        }
        set texture(kk) {
          (0, Sk.i)(this, Rk, kk, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Sk.e)(this, tk, "f")
        }
        set useRoughnessFromMainTexture(kk) {
          (0, Sk.i)(this, tk, kk, "f")
        }
        get roughness() {
          return (0, Sk.e)(this, ak, "f")
        }
        set roughness(kk) {
          (0, Sk.i)(this, ak, kk, "f")
        }
        get textureRoughness() {
          return (0, Sk.e)(this, Xk, "f")
        }
        set textureRoughness(kk) {
          (0, Sk.i)(this, Xk, kk, "f")
        }
        get albedoScaling() {
          return (0, Sk.e)(this, bk, "f")
        }
        set albedoScaling(kk) {
          (0, Sk.i)(this, bk, kk, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(kk) {
          let wk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(kk, "Sheen", 120, new XF, wk), this._isEnabled = !1, Fk.set(this, (0, Sk.l)(this, Wk, !1)), this._linkSheenWithAlbedo = ((0, Sk.l)(this, vk), !1), Bk.set(this, (0, Sk.l)(this, ik, !1)), this.intensity = ((0, Sk.l)(this, Yk), (0, Sk.l)(this, Lk, 1)), this.color = ((0, Sk.l)(this, Ok), (0, Sk.l)(this, Ek, Kk.e.White())), this._texture = ((0, Sk.l)(this, Hk), null), Rk.set(this, (0, Sk.l)(this, uk, null)), this._useRoughnessFromMainTexture = ((0, Sk.l)(this, Mk), !0), tk.set(this, (0, Sk.l)(this, gk, !0)), this._roughness = ((0, Sk.l)(this, Uk), null), ak.set(this, (0, Sk.l)(this, ck, null)), this._textureRoughness = ((0, Sk.l)(this, Gk), null), Xk.set(this, (0, Sk.l)(this, Tk, null)), this._albedoScaling = ((0, Sk.l)(this, rk), !1), bk.set(this, (0, Sk.l)(this, Dk, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Sk.l)(this, zk), this._internalMarkAllSubMeshesAsTexturesDirty = kk._dirtyCallbacks[1]
        }
        isReadyForSubMesh(kk, Fk) {
          if (!this._isEnabled) return !0;
          if (kk._areTexturesDirty && Fk.texturesEnabled) {
            if (this._texture && nk.b.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && nk.b.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(kk, Fk) {
          this._isEnabled ? (kk.SHEEN = !0, kk.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, kk.SHEEN_ROUGHNESS = null !== this._roughness, kk.SHEEN_ALBEDOSCALING = this._albedoScaling, kk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, kk._areTexturesDirty && Fk.texturesEnabled && (this._texture && nk.b.SheenTextureEnabled ? ((0, Qk._)(this._texture, kk, "SHEEN_TEXTURE"), kk.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : kk.SHEEN_TEXTURE = !1, this._textureRoughness && nk.b.SheenTextureEnabled ? (0, Qk._)(this._textureRoughness, kk, "SHEEN_TEXTURE_ROUGHNESS") : kk.SHEEN_TEXTURE_ROUGHNESS = !1)) : (kk.SHEEN = !1, kk.SHEEN_TEXTURE = !1, kk.SHEEN_TEXTURE_ROUGHNESS = !1, kk.SHEEN_LINKWITHALBEDO = !1, kk.SHEEN_ROUGHNESS = !1, kk.SHEEN_ALBEDOSCALING = !1, kk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, kk.SHEEN_GAMMATEXTURE = !1, kk.SHEEN_TEXTUREDIRECTUV = 0, kk.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(kk, Fk, Bk, Rk) {
          if (!this._isEnabled) return;
          const tk = Rk.materialDefines,
            ak = this._material.isFrozen;
          kk.useUbo && ak && kk.isSync || ((this._texture || this._textureRoughness) && nk.b.SheenTextureEnabled && (kk.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Qk.E)(this._texture, kk, "sheen"), this._textureRoughness && !tk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Qk.E)(this._textureRoughness, kk, "sheenRoughness")), kk.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && kk.updateFloat("vSheenRoughness", this._roughness)), Fk.texturesEnabled && (this._texture && nk.b.SheenTextureEnabled && kk.setTexture("sheenSampler", this._texture), this._textureRoughness && !tk.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && nk.b.SheenTextureEnabled && kk.setTexture("sheenRoughnessSampler", this._textureRoughness))
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
        addFallbacks(kk, Fk, Bk) {
          return kk.SHEEN && Fk.addFallback(Bk++, "SHEEN"), Bk
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
      }, Fk = new WeakMap, Bk = new WeakMap, Rk = new WeakMap, tk = new WeakMap, ak = new WeakMap, Xk = new WeakMap, bk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(mk[Symbol.metadata] ?? null) : void 0;
        wk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], dk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], sk = [(0, Nk.M)()], Vk = [(0, Nk.l)()], Jk = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Ak = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], ek = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], yk = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], fk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], (0, Sk.j)(kk, null, wk, {
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
        }, Wk, vk), (0, Sk.j)(kk, null, dk, {
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
        }, ik, Yk), (0, Sk.j)(kk, null, Jk, {
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
        }, uk, Mk), (0, Sk.j)(kk, null, Ak, {
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
        }, gk, Uk), (0, Sk.j)(kk, null, ek, {
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
        }, ck, Gk), (0, Sk.j)(kk, null, yk, {
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
        }, Tk, rk), (0, Sk.j)(kk, null, fk, {
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
        }, Dk, zk), (0, Sk.j)(null, null, sk, {
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
        }, Lk, Ok), (0, Sk.j)(null, null, Vk, {
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
        }, Ek, Hk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk
    })();
    class wF extends hk.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let dF = (() => {
      var kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk;
      let mk, Wk, vk, ik, Yk, Lk, Ok, Ek, Hk, uk, Mk, gk, Uk, ck, Gk, Tk, rk, Dk, Pk, hk, Ck, Zk, pk, xk, jk, lk, Ik, kF, FF, BF, RF = qk.e,
        tF = [],
        aF = [],
        XF = [],
        bF = [],
        dF = [],
        sF = [],
        VF = [],
        JF = [],
        AF = [],
        eF = [],
        yF = [],
        fF = [],
        mF = [],
        WF = [],
        vF = [],
        iF = [],
        YF = [],
        oF = [],
        LF = [],
        OF = [],
        EF = [],
        SF = [],
        NF = [],
        HF = [],
        uF = [],
        MF = [],
        gF = [],
        UF = [],
        cF = [],
        GF = [],
        TF = [],
        rF = [],
        DF = [],
        zF = [],
        PF = [],
        hF = [],
        qF = [],
        CF = [],
        ZF = [],
        pF = [],
        KF = [],
        xF = [],
        jF = [],
        lF = [],
        nF = [],
        IF = [],
        QF = [],
        kB = [],
        FB = [],
        BB = [],
        RB = [],
        tB = [],
        aB = [],
        XB = [],
        bB = [],
        wB = [],
        dB = [],
        sB = [],
        VB = [],
        JB = [];
      return kk = class extends RF {
        get isRefractionEnabled() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set isRefractionEnabled(kk) {
          (0, Sk.i)(this, Fk, kk, "f")
        }
        get isTranslucencyEnabled() {
          return (0, Sk.e)(this, Bk, "f")
        }
        set isTranslucencyEnabled(kk) {
          (0, Sk.i)(this, Bk, kk, "f")
        }
        get isDispersionEnabled() {
          return (0, Sk.e)(this, Rk, "f")
        }
        set isDispersionEnabled(kk) {
          (0, Sk.i)(this, Rk, kk, "f")
        }
        get isScatteringEnabled() {
          return (0, Sk.e)(this, tk, "f")
        }
        set isScatteringEnabled(kk) {
          (0, Sk.i)(this, tk, kk, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(kk) {
          this._scene.enableSubSurfaceForPrePass() && kk && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(kk))
        }
        get useAlbedoToTintRefraction() {
          return (0, Sk.e)(this, ak, "f")
        }
        set useAlbedoToTintRefraction(kk) {
          (0, Sk.i)(this, ak, kk, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, Sk.e)(this, Xk, "f")
        }
        set useAlbedoToTintTranslucency(kk) {
          (0, Sk.i)(this, Xk, kk, "f")
        }
        get thicknessTexture() {
          return (0, Sk.e)(this, bk, "f")
        }
        set thicknessTexture(kk) {
          (0, Sk.i)(this, bk, kk, "f")
        }
        get refractionTexture() {
          return (0, Sk.e)(this, wk, "f")
        }
        set refractionTexture(kk) {
          (0, Sk.i)(this, wk, kk, "f")
        }
        get indexOfRefraction() {
          return (0, Sk.e)(this, dk, "f")
        }
        set indexOfRefraction(kk) {
          (0, Sk.i)(this, dk, kk, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(kk) {
          const Fk = kk >= 1 ? kk : -1;
          this._volumeIndexOfRefraction !== Fk && (this._volumeIndexOfRefraction = Fk, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, Sk.e)(this, sk, "f")
        }
        set invertRefractionY(kk) {
          (0, Sk.i)(this, sk, kk, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, Sk.e)(this, Vk, "f")
        }
        set linkRefractionWithTransparency(kk) {
          (0, Sk.i)(this, Vk, kk, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, Sk.e)(this, Jk, "f")
        }
        set useMaskFromThicknessTexture(kk) {
          (0, Sk.i)(this, Jk, kk, "f")
        }
        get refractionIntensityTexture() {
          return (0, Sk.e)(this, Ak, "f")
        }
        set refractionIntensityTexture(kk) {
          (0, Sk.i)(this, Ak, kk, "f")
        }
        get translucencyIntensityTexture() {
          return (0, Sk.e)(this, ek, "f")
        }
        set translucencyIntensityTexture(kk) {
          (0, Sk.i)(this, ek, kk, "f")
        }
        get translucencyColorTexture() {
          return (0, Sk.e)(this, yk, "f")
        }
        set translucencyColorTexture(kk) {
          (0, Sk.i)(this, yk, kk, "f")
        }
        get useGltfStyleTextures() {
          return (0, Sk.e)(this, fk, "f")
        }
        set useGltfStyleTextures(kk) {
          (0, Sk.i)(this, fk, kk, "f")
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
        constructor(mk) {
          let Wk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(mk, "PBRSubSurface", 130, new wF, Wk), this._isRefractionEnabled = !1, Fk.set(this, (0, Sk.l)(this, tF, !1)), this._isTranslucencyEnabled = ((0, Sk.l)(this, aF), !1), Bk.set(this, (0, Sk.l)(this, XF, !1)), this._isDispersionEnabled = ((0, Sk.l)(this, bF), !1), Rk.set(this, (0, Sk.l)(this, dF, !1)), this._isScatteringEnabled = ((0, Sk.l)(this, sF), !1), tk.set(this, (0, Sk.l)(this, VF, !1)), this._scatteringDiffusionProfileIndex = ((0, Sk.l)(this, JF), (0, Sk.l)(this, AF, 0)), this.refractionIntensity = ((0, Sk.l)(this, eF), (0, Sk.l)(this, yF, 1)), this.translucencyIntensity = ((0, Sk.l)(this, fF), (0, Sk.l)(this, mF, 1)), this._useAlbedoToTintRefraction = ((0, Sk.l)(this, WF), !1), ak.set(this, (0, Sk.l)(this, vF, !1)), this._useAlbedoToTintTranslucency = ((0, Sk.l)(this, iF), !1), Xk.set(this, (0, Sk.l)(this, YF, !1)), this._thicknessTexture = ((0, Sk.l)(this, oF), null), bk.set(this, (0, Sk.l)(this, LF, null)), this._refractionTexture = ((0, Sk.l)(this, OF), null), wk.set(this, (0, Sk.l)(this, EF, null)), this._indexOfRefraction = ((0, Sk.l)(this, SF), 1.5), dk.set(this, (0, Sk.l)(this, NF, 1.5)), this._volumeIndexOfRefraction = ((0, Sk.l)(this, HF), (0, Sk.l)(this, uF, -1)), this._invertRefractionY = ((0, Sk.l)(this, MF), !1), sk.set(this, (0, Sk.l)(this, gF, !1)), this._linkRefractionWithTransparency = ((0, Sk.l)(this, UF), !1), Vk.set(this, (0, Sk.l)(this, cF, !1)), this.minimumThickness = ((0, Sk.l)(this, GF), (0, Sk.l)(this, TF, 0)), this.maximumThickness = ((0, Sk.l)(this, rF), (0, Sk.l)(this, DF, 1)), this.useThicknessAsDepth = ((0, Sk.l)(this, zF), (0, Sk.l)(this, PF, !1)), this.tintColor = ((0, Sk.l)(this, hF), (0, Sk.l)(this, qF, Kk.e.White())), this.tintColorAtDistance = ((0, Sk.l)(this, CF), (0, Sk.l)(this, ZF, 1)), this.dispersion = ((0, Sk.l)(this, pF), (0, Sk.l)(this, KF, 0)), this.diffusionDistance = ((0, Sk.l)(this, xF), (0, Sk.l)(this, jF, Kk.e.White())), this._useMaskFromThicknessTexture = ((0, Sk.l)(this, lF), !1), Jk.set(this, (0, Sk.l)(this, nF, !1)), this._refractionIntensityTexture = ((0, Sk.l)(this, IF), null), Ak.set(this, (0, Sk.l)(this, QF, null)), this._translucencyIntensityTexture = ((0, Sk.l)(this, kB), null), ek.set(this, (0, Sk.l)(this, FB, null)), this.translucencyColor = ((0, Sk.l)(this, BB), (0, Sk.l)(this, RB, null)), this._translucencyColorTexture = ((0, Sk.l)(this, tB), null), yk.set(this, (0, Sk.l)(this, aB, null)), this._useGltfStyleTextures = ((0, Sk.l)(this, XB), !0), fk.set(this, (0, Sk.l)(this, bB, !0)), this.applyAlbedoAfterSubSurface = ((0, Sk.l)(this, wB), (0, Sk.l)(this, dB, kk.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, Sk.l)(this, sB), (0, Sk.l)(this, VB, kk.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, Sk.l)(this, JB), this._scene = mk.XN(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = mk._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = mk._dirtyCallbacks[32]
        }
        isReadyForSubMesh(kk, Fk) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (kk._areTexturesDirty && Fk.texturesEnabled) {
            if (this._thicknessTexture && nk.b.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && nk.b.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && nk.b.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && nk.b.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const kk = this._getRefractionTexture(Fk);
            if (kk && nk.b.RefractionTextureEnabled && !kk.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(kk, Fk) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return kk.SUBSURFACE = !1, kk.SS_DISPERSION = !1, kk.SS_TRANSLUCENCY = !1, kk.SS_SCATTERING = !1, kk.SS_REFRACTION = !1, kk.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_THICKNESSANDMASK_TEXTURE = !1, kk.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, kk.SS_HAS_THICKNESS = !1, kk.SS_REFRACTIONINTENSITY_TEXTURE = !1, kk.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, kk.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, kk.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, kk.SS_REFRACTIONMAP_3D = !1, kk.SS_REFRACTIONMAP_OPPOSITEZ = !1, kk.SS_LODINREFRACTIONALPHA = !1, kk.SS_GAMMAREFRACTION = !1, kk.SS_RGBDREFRACTION = !1, kk.SS_LINEARSPECULARREFRACTION = !1, kk.SS_LINKREFRACTIONTOTRANSPARENCY = !1, kk.SS_ALBEDOFORREFRACTIONTINT = !1, kk.SS_ALBEDOFORTRANSLUCENCYTINT = !1, kk.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, kk.SS_USE_THICKNESS_AS_DEPTH = !1, kk.SS_USE_GLTF_TEXTURES = !1, kk.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, kk.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, kk.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(kk.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (kk._areTexturesDirty) {
            if (kk.SUBSURFACE = !0, kk.SS_DISPERSION = this._isDispersionEnabled, kk.SS_TRANSLUCENCY = this._isTranslucencyEnabled, kk.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, kk.SS_SCATTERING = this._isScatteringEnabled, kk.SS_THICKNESSANDMASK_TEXTURE = !1, kk.SS_REFRACTIONINTENSITY_TEXTURE = !1, kk.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, kk.SS_HAS_THICKNESS = !1, kk.SS_USE_GLTF_TEXTURES = !1, kk.SS_REFRACTION = !1, kk.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, kk.SS_REFRACTIONMAP_3D = !1, kk.SS_GAMMAREFRACTION = !1, kk.SS_RGBDREFRACTION = !1, kk.SS_LINEARSPECULARREFRACTION = !1, kk.SS_REFRACTIONMAP_OPPOSITEZ = !1, kk.SS_LODINREFRACTIONALPHA = !1, kk.SS_LINKREFRACTIONTOTRANSPARENCY = !1, kk.SS_ALBEDOFORREFRACTIONTINT = !1, kk.SS_ALBEDOFORTRANSLUCENCYTINT = !1, kk.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, kk.SS_USE_THICKNESS_AS_DEPTH = !1, kk.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, kk.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, kk._areTexturesDirty && Fk.texturesEnabled && (this._thicknessTexture && nk.b.ThicknessTextureEnabled && (0, Qk._)(this._thicknessTexture, kk, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && nk.b.RefractionIntensityTextureEnabled && (0, Qk._)(this._refractionIntensityTexture, kk, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && nk.b.TranslucencyIntensityTextureEnabled && (0, Qk._)(this._translucencyIntensityTexture, kk, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && nk.b.TranslucencyColorTextureEnabled && ((0, Qk._)(this._translucencyColorTexture, kk, "SS_TRANSLUCENCYCOLOR_TEXTURE"), kk.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), kk.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, kk.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, kk.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, kk.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && Fk.texturesEnabled) {
              const Bk = this._getRefractionTexture(Fk);
              Bk && nk.b.RefractionTextureEnabled && (kk.SS_REFRACTION = !0, kk.SS_REFRACTIONMAP_3D = Bk.isCube, kk.SS_GAMMAREFRACTION = Bk.gammaSpace, kk.SS_RGBDREFRACTION = Bk.isRGBD, kk.SS_LINEARSPECULARREFRACTION = Bk.linearSpecularLOD, kk.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && Bk.isCube ? !Bk.invertZ : Bk.invertZ, kk.SS_LODINREFRACTIONALPHA = Bk.lodLevelInAlpha, kk.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, kk.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, kk.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = Bk.isCube && Bk.boundingBoxSize, kk.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (kk.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(kk, Fk, Bk, Rk) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) kk.updateFloat2("vThicknessParam", 0, 0);
            else {
              Rk.getRenderingMesh().getWorldMatrix().decompose(zk.l.Qe[0]);
              const Fk = Math.max(Math.abs(zk.l.Qe[0].x), Math.abs(zk.l.Qe[0].y), Math.abs(zk.l.Qe[0].z));
              kk.updateFloat2("vThicknessParam", this.minimumThickness * Fk, (this.maximumThickness - this.minimumThickness) * Fk)
            }
        }
        bindForSubMesh(kk, Fk, Bk, Rk) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const tk = Rk.materialDefines,
            ak = this._material.isFrozen,
            Xk = this._material.realTimeFiltering,
            bk = tk.LODBASEDMICROSFURACE,
            wk = this._getRefractionTexture(Fk);
          if (!kk.useUbo || !ak || !kk.isSync) {
            if (this._thicknessTexture && nk.b.ThicknessTextureEnabled && (kk.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Qk.E)(this._thicknessTexture, kk, "thickness")), this._refractionIntensityTexture && nk.b.RefractionIntensityTextureEnabled && tk.SS_REFRACTIONINTENSITY_TEXTURE && (kk.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, Qk.E)(this._refractionIntensityTexture, kk, "refractionIntensity")), this._translucencyColorTexture && nk.b.TranslucencyColorTextureEnabled && tk.SS_TRANSLUCENCYCOLOR_TEXTURE && (kk.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, Qk.E)(this._translucencyColorTexture, kk, "translucencyColor")), this._translucencyIntensityTexture && nk.b.TranslucencyIntensityTextureEnabled && tk.SS_TRANSLUCENCYINTENSITY_TEXTURE && (kk.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, Qk.E)(this._translucencyIntensityTexture, kk, "translucencyIntensity")), wk && nk.b.RefractionTextureEnabled) {
              kk.M_("refractionMatrix", wk.getRefractionTextureMatrix());
              let Fk = 1;
              wk.isCube || wk.depth && (Fk = wk.depth);
              const Bk = wk.getSize().width,
                Rk = this.volumeIndexOfRefraction;
              if (kk.updateFloat4("vRefractionInfos", wk.level, 1 / Rk, Fk, this._invertRefractionY ? -1 : 1), kk.updateFloat4("vRefractionMicrosurfaceInfos", Bk, wk.lodGenerationScale, wk.lodGenerationOffset, 1 / this.indexOfRefraction), Xk && kk.updateFloat2("vRefractionFilteringInfo", Bk, Math.log2(Bk)), wk.boundingBoxSize) {
                const Fk = wk;
                kk.updateVector3("vRefractionPosition", Fk.boundingBoxPosition), kk.updateVector3("vRefractionSize", Fk.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && kk.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), kk.updateColor3("vDiffusionDistance", this.diffusionDistance), kk.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), kk.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), kk.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), kk.updateFloat("dispersion", this.dispersion)
          }
          Fk.texturesEnabled && (this._thicknessTexture && nk.b.ThicknessTextureEnabled && kk.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && nk.b.RefractionIntensityTextureEnabled && tk.SS_REFRACTIONINTENSITY_TEXTURE && kk.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && nk.b.TranslucencyIntensityTextureEnabled && tk.SS_TRANSLUCENCYINTENSITY_TEXTURE && kk.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && nk.b.TranslucencyColorTextureEnabled && tk.SS_TRANSLUCENCYCOLOR_TEXTURE && kk.setTexture("translucencyColorSampler", this._translucencyColorTexture), wk && nk.b.RefractionTextureEnabled && (bk ? kk.setTexture("refractionSampler", wk) : (kk.setTexture("refractionSampler", wk._lodTextureMid || wk), kk.setTexture("refractionSamplerLow", wk._lodTextureLow || wk), kk.setTexture("refractionSamplerHigh", wk._lodTextureHigh || wk))))
        }
        _getRefractionTexture(kk) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? kk.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(kk) {
          nk.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && kk.push(this._refractionTexture)
        }
        hasTexture(kk) {
          return this._thicknessTexture === kk || (this._refractionTexture === kk || (this._refractionIntensityTexture === kk || (this._translucencyIntensityTexture === kk || this._translucencyColorTexture === kk)))
        }
        hasRenderTargetTextures() {
          return !!(nk.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
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
        addFallbacks(kk, Fk, Bk) {
          return kk.SS_SCATTERING && Fk.addFallback(Bk++, "SS_SCATTERING"), kk.SS_TRANSLUCENCY && Fk.addFallback(Bk++, "SS_TRANSLUCENCY"), Bk
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
      }, Fk = new WeakMap, Bk = new WeakMap, Rk = new WeakMap, tk = new WeakMap, ak = new WeakMap, Xk = new WeakMap, bk = new WeakMap, wk = new WeakMap, dk = new WeakMap, sk = new WeakMap, Vk = new WeakMap, Jk = new WeakMap, Ak = new WeakMap, ek = new WeakMap, yk = new WeakMap, fk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(RF[Symbol.metadata] ?? null) : void 0;
        mk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Wk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], vk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], ik = [(0, Nk.M)(), (0, Nk.d)("_markScenePrePassDirty")], Yk = [(0, Nk.M)()], Lk = [(0, Nk.M)()], Ok = [(0, Nk.M)()], Ek = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Hk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], uk = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Mk = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], gk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Uk = [(0, Nk.M)()], ck = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Gk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Tk = [(0, Nk.M)()], rk = [(0, Nk.M)()], Dk = [(0, Nk.M)()], Pk = [(0, Nk.l)()], hk = [(0, Nk.M)()], Ck = [(0, Nk.M)()], Zk = [(0, Nk.l)()], pk = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], xk = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], jk = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], lk = [(0, Nk.l)()], Ik = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], kF = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], FF = [(0, Nk.M)()], BF = [(0, Nk.M)()], (0, Sk.j)(kk, null, mk, {
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
        }, tF, aF), (0, Sk.j)(kk, null, Wk, {
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
        }, XF, bF), (0, Sk.j)(kk, null, vk, {
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
        }, dF, sF), (0, Sk.j)(kk, null, ik, {
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
        }, VF, JF), (0, Sk.j)(kk, null, Ek, {
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
        }, vF, iF), (0, Sk.j)(kk, null, Hk, {
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
        }, YF, oF), (0, Sk.j)(kk, null, uk, {
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
        }, LF, OF), (0, Sk.j)(kk, null, Mk, {
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
        }, EF, SF), (0, Sk.j)(kk, null, gk, {
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
        }, NF, HF), (0, Sk.j)(kk, null, ck, {
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
        }, gF, UF), (0, Sk.j)(kk, null, Gk, {
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
        }, cF, GF), (0, Sk.j)(kk, null, pk, {
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
        }, nF, IF), (0, Sk.j)(kk, null, xk, {
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
        }, QF, kB), (0, Sk.j)(kk, null, jk, {
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
        }, FB, BB), (0, Sk.j)(kk, null, Ik, {
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
        }, aB, XB), (0, Sk.j)(kk, null, kF, {
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
        }, bB, wB), (0, Sk.j)(null, null, Yk, {
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
        }, AF, eF), (0, Sk.j)(null, null, Lk, {
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
        }, yF, fF), (0, Sk.j)(null, null, Ok, {
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
        }, mF, WF), (0, Sk.j)(null, null, Uk, {
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
        }, uF, MF), (0, Sk.j)(null, null, Tk, {
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
        }, TF, rF), (0, Sk.j)(null, null, rk, {
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
        }, DF, zF), (0, Sk.j)(null, null, Dk, {
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
        }, PF, hF), (0, Sk.j)(null, null, Pk, {
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
        }, qF, CF), (0, Sk.j)(null, null, hk, {
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
        }, ZF, pF), (0, Sk.j)(null, null, Ck, {
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
        }, KF, xF), (0, Sk.j)(null, null, Zk, {
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
        }, jF, lF), (0, Sk.j)(null, null, lk, {
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
        }, RB, tB), (0, Sk.j)(null, null, FF, {
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
        }, dB, sB), (0, Sk.j)(null, null, BF, {
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
        }, VB, JB), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, kk.DEFAULT_LEGACY_TRANSLUCENCY = !1, kk
    })();
    var sF = Bk(39768),
      VF = Bk(39741),
      JF = Bk(39774),
      AF = Bk(39777),
      eF = Bk(39785),
      yF = Bk(39787),
      fF = Bk(39796),
      mF = Bk(39802),
      WF = Bk(39296);
    const vF = {
      effect: null,
      subMesh: null
    };
    class iF extends((0, fF.e)((0, yF.c)(hk.c))) {}
    class YF extends((0, xk.g)(iF)) {
      constructor(kk) {
        super(kk), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class oF extends((0, mF.b)(lk.d)) {}
    let LF = (() => {
      var kk, Fk;
      let Rk, tk = oF,
        Xk = [],
        bk = [];
      return kk = class extends tk {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(kk) {
          this._realTimeFiltering = kk, this.mFk(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(kk) {
          this._realTimeFilteringQuality = kk, this.mFk(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set debugMode(kk) {
          (0, Sk.i)(this, Fk, kk, "f")
        }
        constructor(Bk, Rk) {
          super(Bk, Rk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || kk.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new zk.v(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = kk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = Kk.e.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new Kk.e(0, 0, 0), this._albedoColor = new Kk.e(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new Kk.e(1, 1, 1), this._reflectionColor = new Kk.e(1, 1, 1), this._emissiveColor = new Kk.e(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = kk.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new uk.c(16), this._globalAmbientColor = new Kk.e(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Fk.set(this, (0, Sk.l)(this, Xk, 0)), this.debugLimit = ((0, Sk.l)(this, bk), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new Zk(this), this.clearCoat = new FF(this), this.iridescence = new RF(this), this.anisotropy = new aF(this), this.sheen = new bF(this), this.subSurface = new dF(this), this.detailMap = new sF.e(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), nk.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Gk(this.XN()), this.prePassConfiguration = new pk.d
        }
        get hasRenderTargetTextures() {
          return !!(nk.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
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
        isReadyForSubMesh(kk, Fk, Bk) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Rk = Fk._drawWrapper;
          if (Rk.effect && this.isFrozen && Rk._wasPreviouslyReady && Rk._wasPreviouslyUsingInstances === Bk) return !0;
          Fk.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Fk.materialDefines = new YF(this._eventInfo.defineNames));
          const tk = Fk.materialDefines;
          if (this._isReadyForSubMesh(Fk)) return !0;
          const ak = this.XN(),
            Xk = ak.ne();
          if (tk._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, ak.texturesEnabled)) {
            if (this._albedoTexture && nk.b.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && nk.b.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && nk.b.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && nk.b.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && nk.b.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const kk = this._getReflectionTexture();
            if (kk && nk.b.ReflectionTextureEnabled) {
              if (!kk.isReadyOrNotBlocking()) return !1;
              if (kk.irradianceTexture) {
                if (!kk.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!kk.sphericalPolynomial && kk.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && nk.b.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && nk.b.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (nk.b.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (Xk.getCaps().standardDerivatives && this._bumpTexture && nk.b.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && nk.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = tk, this._eventInfo.subMesh = Fk, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (tk._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (tk.AREALIGHTUSED || tk.CLUSTLIGHT_BATCH)
            for (let Vk = 0; Vk < kk.lightSources.length; Vk++)
              if (!kk.lightSources[Vk]._isReady()) return !1;
          if (Xk.getCaps().standardDerivatives || kk.isVerticesDataPresent(Pk.n.NormalKind) || (kk.createNormals(!0), Hk.b.Warn("PBRMaterial: Normals have been created for the mesh: " + kk.name)), !(0, Qk.c)(ak, kk, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const bk = Fk.effect,
            wk = tk._areLightsDisposed,
            dk = this._prepareEffect(kk, Fk.getRenderingMesh(), tk, this.onCompiled, this.onError, Bk, null);
          let sk = !1;
          if (dk)
            if (this._onEffectCreatedObservable && (vF.effect = dk, vF.subMesh = Fk, this._onEffectCreatedObservable.notifyObservers(vF)), this.allowShaderHotSwapping && bk && !dk.isReady()) {
              if (tk.markAsUnprocessed(), sk = this.isFrozen, wk) return tk._areLightsDisposed = !0, !1
            } else ak.resetCachedMaterial(), Fk.setEffect(dk, tk, this._materialContext);
          return !(!Fk.effect || !Fk.effect.isReady()) && (tk._renderId = ak.getRenderId(), Rk._wasPreviouslyReady = !sk, Rk._wasPreviouslyUsingInstances = !!Bk, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(Fk, Bk, Rk) {
          let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(Fk, Bk, Rk, Xk, bk), !Rk.isDirty) return null;
          Rk.markAsProcessed();
          const wk = this.XN().ne(),
            dk = new Ik.c;
          let sk = 0;
          Rk.USESPHERICALINVERTEX && dk.addFallback(sk++, "USESPHERICALINVERTEX"), Rk.FOG && dk.addFallback(sk, "FOG"), Rk.SPECULARAA && dk.addFallback(sk, "SPECULARAA"), Rk.POINTSIZE && dk.addFallback(sk, "POINTSIZE"), Rk.LOGARITHMICDEPTH && dk.addFallback(sk, "LOGARITHMICDEPTH"), Rk.PARALLAX && dk.addFallback(sk, "PARALLAX"), Rk.PARALLAX_RHS && dk.addFallback(sk, "PARALLAX_RHS"), Rk.PARALLAXOCCLUSION && dk.addFallback(sk++, "PARALLAXOCCLUSION"), Rk.ENVIRONMENTBRDF && dk.addFallback(sk++, "ENVIRONMENTBRDF"), Rk.TANGENT && dk.addFallback(sk++, "TANGENT"), Rk.BUMP && dk.addFallback(sk++, "BUMP"), sk = (0, Qk.I)(Rk, dk, this._maxSimultaneousLights, sk), Rk.SPECULARTERM && dk.addFallback(sk++, "SPECULARTERM"), Rk.USESPHERICALFROMREFLECTIONMAP && dk.addFallback(sk++, "USESPHERICALFROMREFLECTIONMAP"), Rk.USEIRRADIANCEMAP && dk.addFallback(sk++, "USEIRRADIANCEMAP"), Rk.LIGHTMAP && dk.addFallback(sk++, "LIGHTMAP"), Rk.NORMAL && dk.addFallback(sk++, "NORMAL"), Rk.AMBIENT && dk.addFallback(sk++, "AMBIENT"), Rk.EMISSIVE && dk.addFallback(sk++, "EMISSIVE"), Rk.VERTEXCOLOR && dk.addFallback(sk++, "VERTEXCOLOR"), Rk.MORPHTARGETS && dk.addFallback(sk++, "MORPHTARGETS"), Rk.MULTIVIEW && dk.addFallback(0, "MULTIVIEW");
          const Vk = [Pk.n.PositionKind];
          Rk.NORMAL && Vk.push(Pk.n.NormalKind), Rk.TANGENT && Vk.push(Pk.n.TangentKind);
          for (let kk = 1; kk <= 6; ++kk) Rk["UV" + kk] && Vk.push(`uv${1===kk?"":kk}`);
          Rk.VERTEXCOLOR && Vk.push(Pk.n.ColorKind), (0, Qk.M)(Vk, Fk, Rk, dk), (0, Qk.O)(Vk, Rk), (0, Qk.Q)(Vk, Fk, Rk), (0, Qk.L)(Vk, Fk, Rk);
          let Jk = "pbr";
          const Ak = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            ek = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, Qk.kb)(Ak, ek, !0);
          const yk = ["Material", "Scene", "Mesh"],
            fk = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Rk.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = dk, this._eventInfo.fallbackRank = sk, this._eventInfo.defines = Rk, this._eventInfo.uniforms = Ak, this._eventInfo.attributes = Vk, this._eventInfo.samplers = ek, this._eventInfo.uniformBuffersNames = yk, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Fk, this._eventInfo.indexParameters = fk, this._callbackPluginEventGeneric(128, this._eventInfo), eF.c.AddUniformsAndSamplers(Ak, ek), pk.d.AddUniforms(Ak), pk.d.AddSamplers(ek), (0, VF.b)(Ak), this._useVertexPulling) {
            const kk = Bk?.geometry;
            kk && (this._vertexPullingMetadata = (0, JF.f)(kk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, Fk) => {
              Ak.push(`vp_${Fk}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          jk.b && (jk.b.PrepareUniforms(Ak, Rk), jk.b.PrepareSamplers(ek, Rk)), (0, Qk.ob)({
            uniformsNames: Ak,
            uniformBuffersNames: yk,
            samplers: ek,
            defines: Rk,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const mk = {};
          this.customShaderNameResolve && (Jk = this.customShaderNameResolve(Jk, Ak, yk, ek, Rk, Vk, mk));
          const Wk = Rk.toString(),
            vk = wk.createEffect(Jk, {
              attributes: Vk,
              uniformsNames: Ak,
              uniformBuffersNames: yk,
              samplers: ek,
              defines: Wk,
              fallbacks: dk,
              onCompiled: tk,
              onError: ak,
              indexParameters: fk,
              processFinalCode: mk.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Rk.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: kk._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, wk);
          return this._eventInfo.customCode = void 0, vk
        }
        _prepareDefines(Fk, Bk, Rk) {
          let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const Xk = Bk.hasThinInstances,
            bk = this.XN(),
            wk = bk.ne();
          (0, Qk.Z)(bk, Fk, Rk, !0, this._maxSimultaneousLights, this._disableLighting), Rk._needNormals = !0, (0, Qk.cb)(bk, Rk);
          const dk = this.needAlphaBlendingForMesh(Fk) && this.XN().useOrderIndependentTransparency;
          if ((0, Qk.hb)(bk, Rk, this.canRenderToMRT && !dk), (0, Qk.eb)(bk, Rk, dk), eF.c.PrepareDefines(wk.currentRenderPassId, Fk, Rk), Rk.METALLICWORKFLOW = this.isMetallicWorkflow(), Rk._areTexturesDirty) {
            Rk._needUVs = !1;
            for (let kk = 1; kk <= 6; ++kk) Rk["MAINUV" + kk] = !1;
            if (bk.texturesEnabled) {
              Rk.ALBEDODIRECTUV = 0, Rk.BASE_WEIGHTDIRECTUV = 0, Rk.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Rk.AMBIENTDIRECTUV = 0, Rk.OPACITYDIRECTUV = 0, Rk.EMISSIVEDIRECTUV = 0, Rk.REFLECTIVITYDIRECTUV = 0, Rk.MICROSURFACEMAPDIRECTUV = 0, Rk.METALLIC_REFLECTANCEDIRECTUV = 0, Rk.REFLECTANCEDIRECTUV = 0, Rk.BUMPDIRECTUV = 0, Rk.LIGHTMAPDIRECTUV = 0, wk.getCaps().textureLOD && (Rk.LODBASEDMICROSFURACE = !0), this._albedoTexture && nk.b.DiffuseTextureEnabled ? ((0, Qk._)(this._albedoTexture, Rk, "ALBEDO"), Rk.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Rk.ALBEDO = !1, this._baseWeightTexture && nk.b.BaseWeightTextureEnabled ? (0, Qk._)(this._baseWeightTexture, Rk, "BASE_WEIGHT") : Rk.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && nk.b.BaseDiffuseRoughnessTextureEnabled ? (0, Qk._)(this._baseDiffuseRoughnessTexture, Rk, "BASE_DIFFUSE_ROUGHNESS") : Rk.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && nk.b.AmbientTextureEnabled ? ((0, Qk._)(this._ambientTexture, Rk, "AMBIENT"), Rk.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Rk.AMBIENT = !1, this._opacityTexture && nk.b.OpacityTextureEnabled ? ((0, Qk._)(this._opacityTexture, Rk, "OPACITY"), Rk.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Rk.OPACITY = !1;
              const kk = this._getReflectionTexture(),
                Fk = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || wk.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, Qk.X)(bk, kk, Rk, this.realTimeFiltering, this.realTimeFilteringQuality, !Fk), this._lightmapTexture && nk.b.LightmapTextureEnabled ? ((0, Qk._)(this._lightmapTexture, Rk, "LIGHTMAP"), Rk.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Rk.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Rk.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Rk.LIGHTMAP = !1, this._emissiveTexture && nk.b.EmissiveTextureEnabled ? ((0, Qk._)(this._emissiveTexture, Rk, "EMISSIVE"), Rk.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Rk.EMISSIVE = !1, nk.b.SpecularTextureEnabled ? (this._metallicTexture ? ((0, Qk._)(this._metallicTexture, Rk, "REFLECTIVITY"), Rk.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Rk.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Rk.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Rk.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Rk.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, Qk._)(this._reflectivityTexture, Rk, "REFLECTIVITY"), Rk.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Rk.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Rk.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Rk.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Rk.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, Qk._)(this._metallicReflectanceTexture, Rk, "METALLIC_REFLECTANCE"), Rk.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Rk.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, Qk._)(this._reflectanceTexture, Rk, "REFLECTANCE"), Rk.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Rk.REFLECTANCE = !1) : (Rk.METALLIC_REFLECTANCE = !1, Rk.REFLECTANCE = !1), this._microSurfaceTexture ? (0, Qk._)(this._microSurfaceTexture, Rk, "MICROSURFACEMAP") : Rk.MICROSURFACEMAP = !1) : (Rk.REFLECTIVITY = !1, Rk.MICROSURFACEMAP = !1), wk.getCaps().standardDerivatives && this._bumpTexture && nk.b.BumpTextureEnabled && !this._disableBumpMap ? ((0, Qk._)(this._bumpTexture, Rk, "BUMP"), this._useParallax && this._albedoTexture && nk.b.DiffuseTextureEnabled ? (Rk.PARALLAX = !0, Rk.PARALLAX_RHS = bk.useRightHandedSystem, Rk.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Rk.PARALLAX = !1, Rk.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Rk.BUMP = !1, Rk.PARALLAX = !1, Rk.PARALLAX_RHS = !1, Rk.PARALLAXOCCLUSION = !1, Rk.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && nk.b.ReflectionTextureEnabled ? (Rk.ENVIRONMENTBRDF = !0, Rk.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Rk.ENVIRONMENTBRDF = !1, Rk.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Rk.ALPHAFROMALBEDO = !0 : Rk.ALPHAFROMALBEDO = !1
            }
            Rk.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === kk.LIGHTFALLOFF_STANDARD ? (Rk.USEPHYSICALLIGHTFALLOFF = !1, Rk.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === kk.LIGHTFALLOFF_GLTF ? (Rk.USEPHYSICALLIGHTFALLOFF = !1, Rk.USEGLTFLIGHTFALLOFF = !0) : (Rk.USEPHYSICALLIGHTFALLOFF = !0, Rk.USEGLTFLIGHTFALLOFF = !1), Rk.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Rk.TWOSIDEDLIGHTING = !0 : Rk.TWOSIDEDLIGHTING = !1, Rk.MIRRORED = !!bk._mirroredCameraPosition, Rk.SPECULARAA = wk.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Rk._areTexturesDirty || Rk._areMiscDirty) && (Rk.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Rk.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Rk.ALPHABLEND = this.needAlphaBlendingForMesh(Fk), Rk.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Rk.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Rk._areTexturesDirty && (Rk.TEXTURE_REPETITION_MODE = wk.version > 1 || wk.isWebGPU ? this.textureRepetitionMode : 0), Rk._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Rk), Rk.FORCENORMALFORWARD = this._forceNormalForward, Rk.RADIANCEOCCLUSION = this._useRadianceOcclusion, Rk.HORIZONOCCLUSION = this._useHorizonOcclusion, Rk._areMiscDirty && ((0, Qk.ab)(Fk, bk, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Fk), Rk, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Bk, this._isVertexOutputInvariant), Rk.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Fk.isVerticesDataPresent(Pk.n.NormalKind), Rk.DEBUGMODE = this._debugMode), (0, Qk.V)(bk, wk, this, Rk, !!tk, ak, Xk), this._eventInfo.defines = Rk, this._eventInfo.mesh = Fk, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Qk.T)(Fk, Rk, !0, !0, !0, this._transparencyMode !== kk.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(kk, Fk, Bk) {
          const Rk = {
            clipPlane: !1,
            useInstances: !1,
            ...Bk
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const Bk = new YF(this._eventInfo.defineNames),
              tk = this._prepareEffect(kk, kk, Bk, void 0, void 0, Rk.useInstances, Rk.clipPlane);
            this._onEffectCreatedObservable && (vF.effect = tk, vF.subMesh = null, this._onEffectCreatedObservable.notifyObservers(vF)), tk.isReady() ? Fk && Fk(this) : tk.onCompileObservable.add((() => {
              Fk && Fk(this)
            }))
          })()
        }
        buildUniformLayout() {
          const kk = this._uniformBuffer;
          kk.addUniform("vAlbedoInfos", 2), kk.addUniform("vBaseWeightInfos", 2), kk.addUniform("vBaseDiffuseRoughnessInfos", 2), kk.addUniform("vAmbientInfos", 4), kk.addUniform("vOpacityInfos", 2), kk.addUniform("vEmissiveInfos", 2), kk.addUniform("vLightmapInfos", 2), kk.addUniform("vReflectivityInfos", 3), kk.addUniform("vMicroSurfaceSamplerInfos", 2), kk.addUniform("vBumpInfos", 3), kk.addUniform("albedoMatrix", 16), kk.addUniform("baseWeightMatrix", 16), kk.addUniform("baseDiffuseRoughnessMatrix", 16), kk.addUniform("ambientMatrix", 16), kk.addUniform("opacityMatrix", 16), kk.addUniform("emissiveMatrix", 16), kk.addUniform("lightmapMatrix", 16), kk.addUniform("reflectivityMatrix", 16), kk.addUniform("microSurfaceSamplerMatrix", 16), kk.addUniform("bumpMatrix", 16), kk.addUniform("vTangentSpaceParams", 2), kk.addUniform("vAlbedoColor", 4), kk.addUniform("baseWeight", 1), kk.addUniform("baseDiffuseRoughness", 1), kk.addUniform("vLightingIntensity", 4), kk.addUniform("pointSize", 1), kk.addUniform("vReflectivityColor", 4), kk.addUniform("vEmissiveColor", 3), kk.addUniform("vAmbientColor", 3), kk.addUniform("vDebugMode", 2), kk.addUniform("vMetallicReflectanceFactors", 4), kk.addUniform("vMetallicReflectanceInfos", 2), kk.addUniform("metallicReflectanceMatrix", 16), kk.addUniform("vReflectanceInfos", 2), kk.addUniform("reflectanceMatrix", 16), kk.addUniform("cameraInfo", 4), kk.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Qk.ib)(kk, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(kk, Fk, Bk) {
          const Rk = this.XN(),
            tk = Bk.materialDefines;
          if (!tk) return;
          const ak = Bk.effect;
          if (!ak) return;
          this._activeEffect = ak, Fk.getMeshUniformBuffer().bindToEffect(ak, "Mesh"), Fk.transferToEffect(kk);
          const Xk = Rk.ne();
          this._uniformBuffer.bindToEffect(ak, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Rk, Fk, kk, this.isFrozen), eF.c.Bind(Xk.currentRenderPassId, this._activeEffect, Fk, kk, this);
          const bk = Rk.activeCamera;
          bk ? this._uniformBuffer.updateFloat4("cameraInfo", bk.minZ, bk.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const wk = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", wk[0], wk[1], wk[2], wk[3]), this._eventInfo.subMesh = Bk, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), tk.OBJECTSPACE_NORMALMAP && (kk.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const dk = this._mustRebind(Rk, ak, Bk, Fk.visibility),
            sk = Xk._features.needToAlwaysBindUniformBuffers;
          (0, Qk.g)(Fk, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, JF.e)(this._activeEffect, this._vertexPullingMetadata);
          let Vk = null;
          const Jk = this._uniformBuffer;
          if (dk) {
            if (this.bindViewProjection(ak), Vk = this._getReflectionTexture(), !Jk.useUbo || !this.isFrozen || !Jk.isSync || Bk._drawWrapper._forceRebindOnNextCall) {
              if (Rk.texturesEnabled && (this._albedoTexture && nk.b.DiffuseTextureEnabled && (Jk.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, Qk.E)(this._albedoTexture, Jk, "albedo")), this._baseWeightTexture && nk.b.BaseWeightTextureEnabled && (Jk.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, Qk.E)(this._baseWeightTexture, Jk, "baseWeight")), this._baseDiffuseRoughnessTexture && nk.b.BaseDiffuseRoughnessTextureEnabled && (Jk.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, Qk.E)(this._baseDiffuseRoughnessTexture, Jk, "baseDiffuseRoughness")), this._ambientTexture && nk.b.AmbientTextureEnabled && (Jk.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, Qk.E)(this._ambientTexture, Jk, "ambient")), this._opacityTexture && nk.b.OpacityTextureEnabled && (Jk.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Qk.E)(this._opacityTexture, Jk, "opacity")), this._emissiveTexture && nk.b.EmissiveTextureEnabled && (Jk.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Qk.E)(this._emissiveTexture, Jk, "emissive")), this._lightmapTexture && nk.b.LightmapTextureEnabled && (Jk.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Qk.E)(this._lightmapTexture, Jk, "lightmap")), nk.b.SpecularTextureEnabled && (this._metallicTexture ? (Jk.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, Qk.E)(this._metallicTexture, Jk, "reflectivity")) : this._reflectivityTexture && (Jk.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, Qk.E)(this._reflectivityTexture, Jk, "reflectivity")), this._metallicReflectanceTexture && (Jk.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, Qk.E)(this._metallicReflectanceTexture, Jk, "metallicReflectance")), this._reflectanceTexture && tk.REFLECTANCE && (Jk.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, Qk.E)(this._reflectanceTexture, Jk, "reflectance")), this._microSurfaceTexture && (Jk.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, Qk.E)(this._microSurfaceTexture, Jk, "microSurfaceSampler"))), this._bumpTexture && Xk.getCaps().standardDerivatives && nk.b.BumpTextureEnabled && !this._disableBumpMap && (Jk.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, Qk.E)(this._bumpTexture, Jk, "bump"), Rk._mirroredCameraPosition ? Jk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Jk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Qk.j)(Rk, tk, Jk, this._reflectionColor, Vk, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && Jk.updateFloat("pointSize", this.pointSize), tk.METALLICWORKFLOW) {
                Kk.n.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, Kk.n.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const kk = this.subSurface?._indexOfRefraction ?? 1.5,
                  Fk = 1;
                Kk.n.Color4[0].b = kk;
                const Bk = Math.pow((kk - Fk) / (kk + Fk), 2);
                Kk.n.Color4[0].a = Bk, Jk.updateDirectColor4("vReflectivityColor", Kk.n.Color4[0]), Jk.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else Jk.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              Jk.updateColor3("vEmissiveColor", nk.b.EmissiveTextureEnabled ? this._emissiveColor : Kk.e.BlackReadOnly), !tk.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? Jk.updateColor4("vAlbedoColor", this._albedoColor, 1) : Jk.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), Jk.updateFloat("baseWeight", this._baseWeight), Jk.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Rk.environmentIntensity, this._lightingInfos.w = this._specularIntensity, Jk.updateVector4("vLightingIntensity", this._lightingInfos), Rk.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), Jk.updateColor3("vAmbientColor", this._globalAmbientColor), Jk.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Rk.texturesEnabled && (this._albedoTexture && nk.b.DiffuseTextureEnabled && Jk.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && nk.b.BaseWeightTextureEnabled && Jk.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && nk.b.BaseDiffuseRoughnessTextureEnabled && Jk.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && nk.b.AmbientTextureEnabled && Jk.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && nk.b.OpacityTextureEnabled && Jk.setTexture("opacitySampler", this._opacityTexture), (0, Qk.n)(Rk, tk, Jk, Vk, this.realTimeFiltering), tk.ENVIRONMENTBRDF && Jk.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && nk.b.EmissiveTextureEnabled && Jk.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && nk.b.LightmapTextureEnabled && Jk.setTexture("lightmapSampler", this._lightmapTexture), nk.b.SpecularTextureEnabled && (this._metallicTexture ? Jk.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && Jk.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && Jk.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && tk.REFLECTANCE && Jk.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && Jk.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && Xk.getCaps().standardDerivatives && nk.b.BumpTextureEnabled && !this._disableBumpMap && Jk.setTexture("bumpSampler", this._bumpTexture)), this.XN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Fk) && this.XN().depthPeelingRenderer.bind(ak), this._eventInfo.subMesh = Bk, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, VF.e)(this._activeEffect, this, Rk), this.bindEyePosition(ak)
          } else sk && (this._needToBindSceneUbo = !0);
          !dk && this.isFrozen && !sk || !Rk.lightsEnabled || this._disableLighting || (0, Qk.r)(Rk, Fk, this._activeEffect, tk, this._maxSimultaneousLights), !dk && this.isFrozen || ((Rk.fogEnabled && Fk.applyFog && Rk.fogMode !== Dk.c.FOGMODE_NONE || Vk || this.subSurface.refractionTexture || Fk.receiveShadows || tk.PREPASS || tk.CLUSTLIGHT_BATCH) && this.bindView(ak), (0, Qk.i)(Rk, Fk, this._activeEffect, !0), tk.NUM_MORPH_INFLUENCERS && (0, Qk.x)(Fk, this._activeEffect), tk.BAKED_VERTEX_ANIMATION_TEXTURE && Fk.bakedVertexAnimationManager?.bind(ak, tk.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Qk.u)(tk, this._activeEffect, Rk)), this._afterBind(Fk, this._activeEffect, Bk), Jk.update()
        }
        getAnimatables() {
          const kk = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && kk.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && kk.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && kk.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && kk.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && kk.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && kk.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && kk.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? kk.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && kk.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && kk.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && kk.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && kk.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && kk.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && kk.push(this._microSurfaceTexture), kk
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.XN().environmentTexture
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
          const kk = this.XN().enableSubSurfaceForPrePass();
          return kk && (kk.enabled = !0), !0
        }
        dispose(kk, Fk) {
          this._breakShaderLoadedCheck = !0, Fk && (this._environmentBRDFTexture && this.XN().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(kk, Fk)
        }
      }, Fk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(tk[Symbol.metadata] ?? null) : void 0;
        Rk = [(0, Nk.d)("_markAllSubMeshesAsMiscDirty")], (0, Sk.j)(kk, null, Rk, {
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
        }, Xk, bk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk.PBRMATERIAL_OPAQUE = ak.c.MATERIAL_OPAQUE, kk.PBRMATERIAL_ALPHATEST = ak.c.MATERIAL_ALPHATEST, kk.PBRMATERIAL_ALPHABLEND = ak.c.MATERIAL_ALPHABLEND, kk.PBRMATERIAL_ALPHATESTANDBLEND = ak.c.MATERIAL_ALPHATESTANDBLEND, kk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, kk.LIGHTFALLOFF_PHYSICAL = 0, kk.LIGHTFALLOFF_GLTF = 1, kk.LIGHTFALLOFF_STANDARD = 2, kk.ForceGLSL = !1, kk._ShaderLoader = new AF.d((() => [Promise.all([Bk.e(307), Bk.e(318)]).then((() => Bk(61280))), Promise.all([Bk.e(312), Bk.e(308), Bk.e(372), Bk.e(321), Bk.e(371)]).then((() => Bk(61298)))]), (() => [Promise.all([Bk.e(326), Bk.e(328), Bk.e(335)]).then((() => Bk(61387))), Promise.all([Bk.e(326), Bk.e(329), Bk.e(375), Bk.e(339), Bk.e(374)]).then((() => Bk(61407)))])), kk
    })();
    Object.getOwnPropertyDescriptor(LF.prototype, "decalMap") || Object.defineProperty(LF.prototype, "decalMap", (0, WF.f)("PBRBaseMaterial", "decalMap")), (0, Bk(41252).b)();
    var OF = Bk(39414);
    var EF = Bk(39492),
      SF = Bk(41237),
      NF = Bk(39248),
      HF = Bk(39258),
      uF = Bk(39342);
    let MF = !1;
    const gF = new Kk.i,
      UF = new Kk.i;
    class cF extends SF.d {
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
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = !(!tk || !tk.generateMipMaps) && tk.generateMipMaps,
          bk = !(!tk || !tk.generateDepthTexture) && tk.generateDepthTexture,
          wk = tk && tk.depthTextureFormat ? tk.depthTextureFormat : 15,
          dk = !tk || void 0 === tk.doNotChangeAspectRatio || tk.doNotChangeAspectRatio,
          sk = !(!tk || !tk.drawOnlyOnFirstAttachmentByDefault) && tk.drawOnlyOnFirstAttachmentByDefault;
        if (super(kk, Fk, Rk, Xk, dk, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), MF || (MF = !0, HF.ThinEngine.prototype.restoreSingleAttachment = function() {
            const kk = this._gl;
            this.bindAttachments([kk.BACK])
          }, HF.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const kk = this._gl;
            this.bindAttachments([kk.COLOR_ATTACHMENT0])
          }, HF.ThinEngine.prototype.buildTextureLayout = function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const Bk = this._gl,
              Rk = [];
            if (Fk) Rk.push(Bk.BACK);
            else
              for (let tk = 0; tk < kk.length; tk++) kk[tk] ? Rk.push(Bk["COLOR_ATTACHMENT" + tk]) : Rk.push(Bk.NONE);
            return Rk
          }, HF.ThinEngine.prototype.bindAttachments = function(kk) {
            const Fk = this._gl,
              Bk = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, Bk)
              for (let Rk = 0; Rk < kk.length; Rk++) kk[Rk] !== Fk.NONE && Bk[Rk] && (0, uF.l)(Bk[Rk].format) && (this._integerMRTAttachmentsMask |= 1 << Rk);
            Fk.drawBuffers(kk)
          }, HF.ThinEngine.prototype.clearAttachments = function(kk, Fk, Bk, Rk) {
            let tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const Xk = this._currentRenderTarget?.textures;
            let bk = !1;
            if (Bk && kk && Xk)
              for (let wk = 0; wk < Fk.length; wk++) {
                const kk = Xk[wk];
                if (Fk[wk] !== this._gl.NONE && kk && (0, uF.l)(kk.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  bk = !0;
                  break
                }
              }
            if (!bk || !kk || !Xk) return this.bindAttachments(Fk), void this.clear(kk, Bk, Rk, tk, ak);
            this.bindAttachments(Fk), this._applyColorWriteState();
            for (let wk = 0; wk < Fk.length; wk++) {
              const Bk = Xk[wk];
              if (Fk[wk] !== this._gl.NONE && Bk) {
                let Fk = kk;
                if ((0, uF.l)(Bk.format)) {
                  const Rk = (0, uF.m)(Bk.type);
                  Fk = Rk ? gF : UF;
                  const tk = Rk ? 255 : 1;
                  Fk.r = Math.round(kk.r * tk), Fk.g = Math.round(kk.g * tk), Fk.b = Math.round(kk.b * tk), Fk.a = Math.round(kk.a * tk)
                }
                this._clearColorAttachment(wk, Fk, Bk.format, Bk.type)
              }
            }
            if (Rk || tk) {
              const kk = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Rk, tk, ak)
              } finally {
                this._integerMRTAttachmentsMask = kk
              }
            }
          }, HF.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              Bk = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, kk.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(kk), Fk || this.generateMipMapsMultiFramebuffer(kk), Bk && (kk._MSAAFramebuffer && this._bindUnboundFramebuffer(kk._framebuffer), Bk()), this._bindUnboundFramebuffer(null)
          }, HF.ThinEngine.prototype.createMultipleRenderTarget = function(kk, Fk) {
            let Bk, Rk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              tk = !1,
              ak = !0,
              Xk = !1,
              bk = !1,
              wk = 1,
              dk = 1,
              sk = [],
              Vk = [],
              Jk = [],
              Ak = [],
              ek = [],
              yk = [],
              fk = [],
              mk = [],
              Wk = [],
              vk = !1;
            const ik = this._createHardwareRenderTargetWrapper(!0, !1, kk);
            void 0 !== Fk && (tk = void 0 !== Fk.generateMipMaps && Fk.generateMipMaps, ak = void 0 === Fk.generateDepthBuffer || Fk.generateDepthBuffer, Xk = void 0 !== Fk.generateStencilBuffer && Fk.generateStencilBuffer, bk = void 0 !== Fk.generateDepthTexture && Fk.generateDepthTexture, wk = Fk.YXk ?? 1, dk = Fk.samples ?? dk, sk = Fk.types || sk, Vk = Fk.samplingModes || Vk, Jk = Fk.useSRGBBuffers || Jk, Ak = Fk.formats || Ak, ek = Fk.targetTypes || ek, yk = Fk.faceIndex || yk, fk = Fk.layerIndex || fk, mk = Fk.layerCounts || mk, Wk = Fk.labels || Wk, vk = Fk.dontCreateTextures ?? !1, this.Uy > 1 && (13 === Fk.depthTextureFormat || 17 === Fk.depthTextureFormat || 16 === Fk.depthTextureFormat || 14 === Fk.depthTextureFormat || 18 === Fk.depthTextureFormat) && (Bk = Fk.depthTextureFormat)), void 0 === Bk && (Bk = Xk ? 13 : 14);
            const Yk = this._gl,
              Lk = this._currentFramebuffer,
              Ok = Yk.createFramebuffer();
            this._bindUnboundFramebuffer(Ok);
            const Ek = kk.width ?? kk,
              Sk = kk.height ?? kk,
              Nk = [],
              uk = [],
              Mk = this.Uy > 1 && (13 === Bk || 17 === Bk || 18 === Bk);
            ik.label = Fk?.label ?? "MultiRenderTargetWrapper", ik._framebuffer = Ok, ik._generateDepthBuffer = bk || ak, ik._generateStencilBuffer = bk ? Mk : Xk, ik._depthStencilBuffer = this._setupFramebufferDepthAttachments(ik._generateStencilBuffer, ik._generateDepthBuffer, Ek, Sk, 1, Bk), ik._attachments = uk;
            for (let gk = 0; gk < wk; gk++) {
              let kk = Vk[gk] || 3,
                Fk = sk[gk] || 0,
                Bk = Jk[gk] || !1;
              const Rk = Ak[gk] || 5,
                ak = ek[gk] || 3553,
                Xk = mk[gk] ?? 1;
              (1 !== Fk || this._caps.textureFloatLinearFiltering) && (2 !== Fk || this._caps.textureHalfFloatLinearFiltering) || (kk = 1);
              const bk = this._getSamplingParameters(kk, tk);
              1 !== Fk || this._caps.textureFloat || (Fk = 0, Hk.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), Bk = Bk && this._caps.supportSRGBBuffers && (this.Uy > 1 || this.isWebGPU);
              const wk = this.Uy > 1,
                dk = Yk[wk ? "COLOR_ATTACHMENT" + gk : "COLOR_ATTACHMENT" + gk + "_WEBGL"];
              if (uk.push(dk), -1 === ak || vk) continue;
              const yk = new NF.c(this, 6);
              Nk[gk] = yk, Yk.activeTexture(Yk["TEXTURE" + gk]), Yk.bindTexture(ak, yk._hardwareTexture.underlyingResource), Yk.texParameteri(ak, Yk.TEXTURE_MAG_FILTER, bk.mag), Yk.texParameteri(ak, Yk.TEXTURE_MIN_FILTER, bk.min), Yk.texParameteri(ak, Yk.TEXTURE_WRAP_S, Yk.CLAMP_TO_EDGE), Yk.texParameteri(ak, Yk.TEXTURE_WRAP_T, Yk.CLAMP_TO_EDGE);
              const fk = this._getRGBABufferInternalSizedFormat(Fk, Rk, Bk),
                Lk = this._getInternalFormat(Rk),
                Ok = this._getWebGLTextureType(Fk);
              if (!wk || 35866 !== ak && 32879 !== ak)
                if (34067 === ak) {
                  for (let kk = 0; kk < 6; kk++) Yk.texImage2D(Yk.TEXTURE_CUBE_MAP_POSITIVE_X + kk, 0, fk, Ek, Sk, 0, Lk, Ok, null);
                  yk.isCube = !0
                } else Yk.texImage2D(Yk.TEXTURE_2D, 0, fk, Ek, Sk, 0, Lk, Ok, null);
              else 35866 === ak ? yk.is2DArray = !0 : yk.is3D = !0, yk.baseDepth = yk.depth = Xk, Yk.texImage3D(ak, 0, fk, Ek, Sk, Xk, 0, Lk, Ok, null);
              tk && Yk.generateMipmap(ak), this._bindTextureDirectly(ak, null), yk.baseWidth = Ek, yk.baseHeight = Sk, yk.width = Ek, yk.height = Sk, yk.isReady = !0, yk.samples = 1, yk.generateMipMaps = tk, yk.samplingMode = kk, yk.type = Fk, yk._useSRGBBuffer = Bk, yk.format = Rk, yk.label = Wk[gk] ?? ik.label + "-Texture" + gk, this._internalTexturesCache.push(yk)
            }
            if (bk && this._caps.depthTextureExtension && !vk) {
              const kk = new NF.c(this, 14);
              let Fk = 5,
                Rk = Yk.DEPTH_COMPONENT16,
                ak = Yk.DEPTH_COMPONENT,
                Xk = Yk.UNSIGNED_SHORT,
                bk = Yk.DEPTH_ATTACHMENT;
              this.Uy < 2 ? Rk = Yk.DEPTH_COMPONENT : 14 === Bk ? (Fk = 1, Xk = Yk.FLOAT, Rk = Yk.DEPTH_COMPONENT32F) : 18 === Bk ? (Fk = 0, Xk = Yk.FLOAT_32_UNSIGNED_INT_24_8_REV, Rk = Yk.DEPTH32F_STENCIL8, ak = Yk.DEPTH_STENCIL, bk = Yk.DEPTH_STENCIL_ATTACHMENT) : 16 === Bk ? (Fk = 0, Xk = Yk.UNSIGNED_INT, Rk = Yk.DEPTH_COMPONENT24, bk = Yk.DEPTH_ATTACHMENT) : 13 !== Bk && 17 !== Bk || (Fk = 12, Xk = Yk.UNSIGNED_INT_24_8, Rk = Yk.DEPTH24_STENCIL8, ak = Yk.DEPTH_STENCIL, bk = Yk.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(Yk.TEXTURE_2D, kk, !0), Yk.texParameteri(Yk.TEXTURE_2D, Yk.TEXTURE_MAG_FILTER, Yk.NEAREST), Yk.texParameteri(Yk.TEXTURE_2D, Yk.TEXTURE_MIN_FILTER, Yk.NEAREST), Yk.texParameteri(Yk.TEXTURE_2D, Yk.TEXTURE_WRAP_S, Yk.CLAMP_TO_EDGE), Yk.texParameteri(Yk.TEXTURE_2D, Yk.TEXTURE_WRAP_T, Yk.CLAMP_TO_EDGE), Yk.texImage2D(Yk.TEXTURE_2D, 0, Rk, Ek, Sk, 0, ak, Xk, null), Yk.framebufferTexture2D(Yk.FRAMEBUFFER, bk, Yk.TEXTURE_2D, kk._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(Yk.TEXTURE_2D, null), ik._depthStencilTexture = kk, ik._depthStencilTextureWithStencil = Mk, kk.baseWidth = Ek, kk.baseHeight = Sk, kk.width = Ek, kk.height = Sk, kk.isReady = !0, kk.samples = 1, kk.generateMipMaps = tk, kk.samplingMode = 1, kk.format = Bk, kk.type = Fk, kk.label = ik.label + "-DepthStencil", Nk[wk] = kk, this._internalTexturesCache.push(kk)
            }
            if (ik.setTextures(Nk), Rk && Yk.drawBuffers(uk), this._bindUnboundFramebuffer(Lk), ik.setLayerAndFaceIndices(fk, yk), this.resetTextureCache(), vk) {
              if (dk > 1) {
                const kk = Yk.createFramebuffer();
                if (!kk) throw new Error("Unable to create multi sampled framebuffer");
                ik._samples = dk, ik._MSAAFramebuffer = kk, wk > 0 && Rk && (this._bindUnboundFramebuffer(kk), Yk.drawBuffers(uk), this._bindUnboundFramebuffer(Lk))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(ik, dk, Rk);
            return ik
          }, HF.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(kk, Fk) {
            let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Uy < 2 || !kk) return 1;
            if (kk.samples === Fk) return Fk;
            const Rk = this._gl;
            Fk = Math.min(Fk, this.getCaps().maxMSAASamples), kk._depthStencilBuffer && (Rk.deleteRenderbuffer(kk._depthStencilBuffer), kk._depthStencilBuffer = null), kk._MSAAFramebuffer && (Rk.deleteFramebuffer(kk._MSAAFramebuffer), kk._MSAAFramebuffer = null);
            const tk = kk._attachments.length;
            for (let Xk = 0; Xk < tk; Xk++) {
              const Fk = kk.textures[Xk]._hardwareTexture;
              Fk?.releaseMSAARenderBuffers()
            }
            if (Fk > 1 && "function" === typeof Rk.renderbufferStorageMultisample) {
              const ak = Rk.createFramebuffer();
              if (!ak) throw new Error("Unable to create multi sampled framebuffer");
              kk._MSAAFramebuffer = ak, this._bindUnboundFramebuffer(ak);
              const Xk = [];
              for (let Bk = 0; Bk < tk; Bk++) {
                const tk = kk.textures[Bk],
                  ak = tk._hardwareTexture,
                  bk = Rk[this.Uy > 1 ? "COLOR_ATTACHMENT" + Bk : "COLOR_ATTACHMENT" + Bk + "_WEBGL"],
                  wk = this._createRenderBuffer(tk.width, tk.height, Fk, -1, this._getRGBABufferInternalSizedFormat(tk.type, tk.format, tk._useSRGBBuffer), bk);
                if (!wk) throw new Error("Unable to create multi sampled framebuffer");
                ak.addMSAARenderBuffer(wk), tk.samples = Fk, Xk.push(bk)
              }
              Bk && Rk.drawBuffers(Xk)
            } else this._bindUnboundFramebuffer(kk._framebuffer);
            const ak = kk._depthStencilTexture ? kk._depthStencilTexture.format : void 0;
            return kk._depthStencilBuffer = this._setupFramebufferDepthAttachments(kk._generateStencilBuffer, kk._generateDepthBuffer, kk.width, kk.height, Fk, ak), this._bindUnboundFramebuffer(null), kk._samples = Fk, Fk
          }, HF.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(kk) {
            const Fk = kk,
              Bk = this._gl;
            if (Fk.isMulti)
              for (let Rk = 0; Rk < Fk._attachments.length; Rk++) {
                const kk = Fk.textures[Rk];
                !kk?.generateMipMaps || kk?.isCube || kk?.is3D || (this._bindTextureDirectly(Bk.TEXTURE_2D, kk, !0), Bk.generateMipmap(Bk.TEXTURE_2D), this._bindTextureDirectly(Bk.TEXTURE_2D, null))
              }
          }, HF.ThinEngine.prototype.resolveMultiFramebuffer = function(kk) {
            const Fk = kk,
              Bk = this._gl;
            if (!Fk._MSAAFramebuffer || !Fk.isMulti) return;
            let Rk = Fk.resolveMSAAColors ? Bk.COLOR_BUFFER_BIT : 0;
            Rk |= Fk._generateDepthBuffer && Fk.resolveMSAADepth ? Bk.DEPTH_BUFFER_BIT : 0, Rk |= Fk._generateStencilBuffer && Fk.resolveMSAAStencil ? Bk.STENCIL_BUFFER_BIT : 0;
            const tk = Fk._attachments,
              ak = tk.length;
            Bk.bindFramebuffer(Bk.READ_FRAMEBUFFER, Fk._MSAAFramebuffer), Bk.bindFramebuffer(Bk.DRAW_FRAMEBUFFER, Fk._framebuffer);
            for (let Xk = 0; Xk < ak; Xk++) {
              const kk = Fk.textures[Xk];
              for (let Fk = 0; Fk < ak; Fk++) tk[Fk] = Bk.NONE;
              tk[Xk] = Bk[this.Uy > 1 ? "COLOR_ATTACHMENT" + Xk : "COLOR_ATTACHMENT" + Xk + "_WEBGL"], Bk.readBuffer(tk[Xk]), Bk.drawBuffers(tk), Bk.blitFramebuffer(0, 0, kk.width, kk.height, 0, 0, kk.width, kk.height, Rk, Bk.NEAREST)
            }
            for (let Xk = 0; Xk < ak; Xk++) tk[Xk] = Bk[this.Uy > 1 ? "COLOR_ATTACHMENT" + Xk : "COLOR_ATTACHMENT" + Xk + "_WEBGL"];
            Bk.drawBuffers(tk), Bk.bindFramebuffer(this._gl.FRAMEBUFFER, Fk._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = ak;
        const Vk = [],
          Jk = [],
          Ak = [],
          ek = [],
          yk = [],
          fk = [],
          mk = [],
          Wk = [];
        this._initTypes(Bk, Vk, Jk, Ak, ek, yk, fk, mk, Wk, tk);
        const vk = !tk || void 0 === tk.generateDepthBuffer || tk.generateDepthBuffer,
          ik = !(!tk || void 0 === tk.generateStencilBuffer) && tk.generateStencilBuffer,
          Yk = tk && tk.samples ? tk.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: Jk,
          generateMipMaps: Xk,
          generateDepthBuffer: vk,
          generateStencilBuffer: ik,
          generateDepthTexture: bk,
          depthTextureFormat: wk,
          types: Vk,
          YXk: Bk,
          useSRGBBuffers: Ak,
          samples: Yk,
          formats: ek,
          targetTypes: yk,
          faceIndex: fk,
          layerIndex: mk,
          layerCounts: Wk,
          labels: ak,
          label: kk
        }, this._count = Bk, this._drawOnlyOnFirstAttachmentByDefault = sk, Bk > 0 && (this._createInternalTextures(), this._createTextures(ak))
      }
      _initTypes(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
        for (let sk = 0; sk < kk; sk++) dk && dk.types && void 0 !== dk.types[sk] ? Fk.push(dk.types[sk]) : Fk.push(dk && dk.defaultType ? dk.defaultType : 0), dk && dk.samplingModes && void 0 !== dk.samplingModes[sk] ? Bk.push(dk.samplingModes[sk]) : Bk.push(Mk.f.BILINEAR_SAMPLINGMODE), dk && dk.useSRGBBuffers && void 0 !== dk.useSRGBBuffers[sk] ? Rk.push(dk.useSRGBBuffers[sk]) : Rk.push(!1), dk && dk.formats && void 0 !== dk.formats[sk] ? tk.push(dk.formats[sk]) : tk.push(5), dk && dk.targetTypes && void 0 !== dk.targetTypes[sk] ? ak.push(dk.targetTypes[sk]) : ak.push(3553), dk && dk.faceIndex && void 0 !== dk.faceIndex[sk] ? Xk.push(dk.faceIndex[sk]) : Xk.push(0), dk && dk.layerIndex && void 0 !== dk.layerIndex[sk] ? bk.push(dk.layerIndex[sk]) : bk.push(0), dk && dk.layerCounts && void 0 !== dk.layerCounts[sk] ? wk.push(dk.layerCounts[sk]) : wk.push(1)
      }
      _createInternaTextureIndexMapping() {
        const kk = {},
          Fk = [];
        if (!this._renderTarget) return Fk;
        const Bk = this._renderTarget.textures;
        for (let Rk = 0; Rk < Bk.length; Rk++) {
          const tk = Bk[Rk];
          if (!tk) continue;
          const ak = kk[tk.uniqueId];
          void 0 !== ak ? Fk[Rk] = ak : kk[tk.uniqueId] = Rk
        }
        return Fk
      }
      _rebuild() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || kk) return;
        const Rk = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), Fk && (this._releaseTextures(), this._createTextures(Bk));
        const tk = this._renderTarget.textures;
        for (let ak = 0; ak < tk.length; ak++) {
          const kk = this._textures[ak];
          void 0 !== Rk[ak] && this._renderTarget.setTexture(tk[Rk[ak]], ak), kk._texture = tk[ak], kk._texture && (kk._noMipmap = !kk._texture.useMipMaps, kk._useSRGBBuffer = kk._texture._useSRGBBuffer)
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
        for (let Bk = 0; Bk < Fk.length; Bk++) {
          const Rk = new Mk.f(null, this.XN());
          kk?.[Bk] && (Rk.name = kk[Bk]), Rk._texture = Fk[Bk], Rk._texture && (Rk._noMipmap = !Rk._texture.useMipMaps, Rk._useSRGBBuffer = Rk._texture._useSRGBBuffer), this._textures.push(Rk)
        }
      }
      setInternalTexture(kk, Fk) {
        let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === Fk && (this._texture = kk), this.renderTarget.setTexture(kk, Fk, Bk), this.textures[Fk] || (this.textures[Fk] = new Mk.f(null, this.XN()), this.textures[Fk].name = this._textureNames?.[Fk] ?? this.textures[Fk].name), this.textures[Fk]._texture = kk, this.textures[Fk]._noMipmap = !kk.useMipMaps, this.textures[Fk]._useSRGBBuffer = kk._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[Fk] = kk.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[Fk] = kk.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[Fk] = kk._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[Fk])) {
          let Bk;
          Bk = kk.is2DArray ? 35866 : kk.isCube ? 34067 : kk.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[Fk] = Bk
        }
      }
      setLayerAndFaceIndex(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[kk] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[kk] = Fk), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[kk] = Bk), this.renderTarget.setLayerAndFaceIndex(kk, Fk, Bk))
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
      updateCount(kk, Fk, Bk) {
        this._multiRenderTargetOptions.YXk = kk, this._count = kk;
        const Rk = [],
          tk = [],
          ak = [],
          Xk = [],
          bk = [],
          wk = [],
          dk = [],
          sk = [];
        this._textureNames = Bk, this._initTypes(kk, Rk, tk, ak, Xk, bk, wk, dk, sk, Fk), this._multiRenderTargetOptions.types = Rk, this._multiRenderTargetOptions.samplingModes = tk, this._multiRenderTargetOptions.useSRGBBuffers = ak, this._multiRenderTargetOptions.formats = Xk, this._multiRenderTargetOptions.targetTypes = bk, this._multiRenderTargetOptions.faceIndex = wk, this._multiRenderTargetOptions.layerIndex = dk, this._multiRenderTargetOptions.layerCounts = sk, this._multiRenderTargetOptions.labels = Bk, this._rebuild(!1, !0, Bk)
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
    var GF = Bk(39575);
    class TF {
      constructor(kk) {
        this.name = GF.b.NAME_GEOMETRYBUFFERRENDERER, this.ef = kk
      }
      register() {
        this.ef._gatherRenderTargetsStage.registerStep(GF.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(kk) {
        this.ef._geometryBufferRenderer && kk.push(this.ef._geometryBufferRenderer.getGBuffer())
      }
    }
    let rF = !1;
    var DF;
    ! function(kk) {
      kk[kk.Small = 0] = "Small", kk[kk.Medium = 1] = "Medium", kk[kk.Large = 2] = "Large", kk[kk.ExtraLarge = 3] = "ExtraLarge"
    }(DF || (DF = {}));
    const zF = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      PF = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class hF {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(kk) {
        if (kk && this._enableMeshBlendTag && !this._scene.ne().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
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
        kk === hF.POSITION_TEXTURE_TYPE ? (this._positionIndex = Fk, this._enablePosition = !0) : kk === hF.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = Fk, this._enableVelocity = !0) : kk === hF.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = Fk, this._enableVelocityLinear = !0) : kk === hF.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = Fk, this._enableReflectivity = !0) : kk === hF.DEPTH_TEXTURE_TYPE ? (this._depthIndex = Fk, this._enableDepth = !0) : kk === hF.NORMAL_TEXTURE_TYPE ? (this._normalIndex = Fk, this._enableNormal = !0) : kk === hF.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = Fk, this._enableScreenspaceDepth = !0) : kk === hF.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = Fk, this._enableIrradiance = !0) : kk === hF.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = Fk, this._enableObjectId = !0) : kk === hF.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = Fk, this._enableMeshBlendTag = !0)
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
          case hF.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case hF.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case hF.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case hF.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case hF.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case hF.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case hF.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case hF.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case hF.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case hF.MESH_BLEND_TAG_TEXTURE_TYPE:
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
          const kk = this._scene.ne(),
            Fk = Math.min(kk.getCaps().maxDrawBuffers ?? 1, 8),
            Bk = this._assignRenderTargetIndices()[0] + 1;
          if (kk.getCaps().drawBuffersExtension && Bk > Fk) throw new Error(`GeometryBufferRenderer: ${Bk} color attachments were requested, but this engine supports at most ${Fk}`)
        }
        this._enableObjectId = kk, kk || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(kk) {
        if (this._enableMeshBlendTag !== kk) {
          if (kk) {
            const kk = this._scene.ne();
            if (! function(kk) {
                return "NATIVE" !== kk.shaderPlatformName && (kk.isWebGPU || 2 === kk.Uy)
              }(kk)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !kk.isWebGPU && !kk.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const Fk = Math.min(kk.getCaps().maxDrawBuffers ?? 1, 8),
                Bk = this._assignRenderTargetIndices()[0] + 1;
              if (kk.getCaps().drawBuffersExtension && Bk > Fk) throw new Error(`GeometryBufferRenderer: ${Bk} color attachments were requested, but this engine supports at most ${Fk}`)
            }
          }
          this._enableMeshBlendTag = kk, kk || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get ef() {
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
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        var tk;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new Kk.i(0, 0, 0, 0), this._clearDepthColor = new Kk.i(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = kk, this._ratioOrDimensions = Fk, this._useUbo = kk.ne().supportsUniformBuffers, this._depthFormat = Bk, this._textureTypesAndFormats = Rk || {}, this._initShaderSourceAsync(), tk = hF, rF || (rF = !0, Object.defineProperty(Dk.c.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(kk) {
            kk && kk.isSupported && (this._geometryBufferRenderer = kk)
          },
          enumerable: !0,
          configurable: !0
        }), Dk.c.prototype.enableGeometryBufferRenderer = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            Bk = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new tk(this, kk, Fk, Bk), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, Dk.c.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, tk._SceneComponentInitialization = kk => {
          let Fk = kk._getComponent(GF.b.NAME_GEOMETRYBUFFERRENDERER);
          Fk || (Fk = new TF(kk), kk.SBk(Fk))
        }), hF._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.ne().isWebGPU && !hF.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([Bk.e(327).then((() => Bk(61606))), Promise.all([Bk.e(326), Bk.e(338)]).then((() => Bk(61609)))])) : await Promise.all([Bk.e(310).then((() => Bk(61612))), Bk.e(309).then((() => Bk(61618)))]), this._shadersLoaded = !0
      }
      isReady(kk, Fk) {
        if (!this._shadersLoaded) return !1;
        const Bk = kk.Ry();
        if (Bk && Bk.disableDepthWrite) return !1;
        if (function(kk) {
            return kk._isGaussianSplatting || "GaussianSplattingMesh" === (Fk = kk.getClassName()) || "GaussianSplattingStream" === Fk;
            var Fk
          }(kk.getMesh())) return !1;
        const Rk = [],
          tk = [Pk.n.PositionKind],
          ak = kk.getMesh();
        ak.isVerticesDataPresent(Pk.n.NormalKind) && (Rk.push("#define HAS_NORMAL_ATTRIBUTE"), tk.push(Pk.n.NormalKind));
        let Xk = !1,
          bk = !1;
        if (Bk) {
          let kk = !1;
          if (Bk.needAlphaTestingForMesh(ak) && Bk.getAlphaTestTexture() && (Rk.push("#define ALPHATEST"), Rk.push(`#define ALPHATEST_UV${Bk.getAlphaTestTexture().coordinatesIndex+1}`), kk = !0), (Bk.bumpTexture || Bk.normalTexture || Bk.geometryNormalTexture) && nk.b.BumpTextureEnabled) {
            const Fk = Bk.bumpTexture || Bk.normalTexture || Bk.geometryNormalTexture;
            Rk.push("#define BUMP"), Rk.push(`#define BUMP_UV${Fk.coordinatesIndex+1}`), kk = !0
          }
          if (this._enableReflectivity) {
            let Fk = !1;
            if ("PBRMetallicRoughnessMaterial" === Bk.getClassName()) Bk.metallicRoughnessTexture && (Rk.push("#define ORMTEXTURE"), Rk.push(`#define REFLECTIVITY_UV${Bk.metallicRoughnessTexture.coordinatesIndex+1}`), Rk.push("#define METALLICWORKFLOW"), kk = !0, Fk = !0), null != Bk.metallic && (Rk.push("#define METALLIC"), Rk.push("#define METALLICWORKFLOW"), Fk = !0), null != Bk.roughness && (Rk.push("#define ROUGHNESS"), Rk.push("#define METALLICWORKFLOW"), Fk = !0), Fk && (Bk.baseTexture && (Rk.push("#define ALBEDOTEXTURE"), Rk.push(`#define ALBEDO_UV${Bk.baseTexture.coordinatesIndex+1}`), Bk.baseTexture.gammaSpace && Rk.push("#define GAMMAALBEDO"), kk = !0), Bk.baseColor && Rk.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === Bk.getClassName()) Bk.specularGlossinessTexture ? (Rk.push("#define SPECULARGLOSSINESSTEXTURE"), Rk.push(`#define REFLECTIVITY_UV${Bk.specularGlossinessTexture.coordinatesIndex+1}`), kk = !0, Bk.specularGlossinessTexture.gammaSpace && Rk.push("#define GAMMAREFLECTIVITYTEXTURE")) : Bk.specularColor && Rk.push("#define REFLECTIVITYCOLOR"), null != Bk.glossiness && Rk.push("#define GLOSSINESS");
            else if ("PBRMaterial" === Bk.getClassName()) Bk.metallicTexture && (Rk.push("#define ORMTEXTURE"), Rk.push(`#define REFLECTIVITY_UV${Bk.metallicTexture.coordinatesIndex+1}`), Rk.push("#define METALLICWORKFLOW"), kk = !0, Fk = !0), null != Bk.metallic && (Rk.push("#define METALLIC"), Rk.push("#define METALLICWORKFLOW"), Fk = !0), null != Bk.roughness && (Rk.push("#define ROUGHNESS"), Rk.push("#define METALLICWORKFLOW"), Fk = !0), Fk ? (Bk.albedoTexture && (Rk.push("#define ALBEDOTEXTURE"), Rk.push(`#define ALBEDO_UV${Bk.albedoTexture.coordinatesIndex+1}`), Bk.albedoTexture.gammaSpace && Rk.push("#define GAMMAALBEDO"), kk = !0), Bk.albedoColor && Rk.push("#define ALBEDOCOLOR")) : (Bk.reflectivityTexture ? (Rk.push("#define SPECULARGLOSSINESSTEXTURE"), Rk.push(`#define REFLECTIVITY_UV${Bk.reflectivityTexture.coordinatesIndex+1}`), Bk.reflectivityTexture.gammaSpace && Rk.push("#define GAMMAREFLECTIVITYTEXTURE"), kk = !0) : Bk.reflectivityColor && Rk.push("#define REFLECTIVITYCOLOR"), null != Bk.microSurface && Rk.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === Bk.getClassName()) Bk.specularTexture && (Rk.push("#define REFLECTIVITYTEXTURE"), Rk.push(`#define REFLECTIVITY_UV${Bk.specularTexture.coordinatesIndex+1}`), Bk.specularTexture.gammaSpace && Rk.push("#define GAMMAREFLECTIVITYTEXTURE"), kk = !0), Bk.specularColor && Rk.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === Bk.getClassName()) {
              const Fk = Bk;
              Rk.push("#define METALLIC"), Rk.push("#define ROUGHNESS"), Fk._useRoughnessFromMetallicTextureGreen && Fk.baseMetalnessTexture ? (Rk.push("#define ORMTEXTURE"), Rk.push(`#define REFLECTIVITY_UV${Fk.baseMetalnessTexture.coordinatesIndex+1}`), kk = !0) : Fk.baseMetalnessTexture ? (Rk.push("#define METALLIC_TEXTURE"), Rk.push(`#define METALLIC_UV${Fk.baseMetalnessTexture.coordinatesIndex+1}`), kk = !0) : Fk.specularRoughnessTexture && (Rk.push("#define ROUGHNESS_TEXTURE"), Rk.push(`#define ROUGHNESS_UV${Fk.specularRoughnessTexture.coordinatesIndex+1}`), kk = !0), Fk.baseColorTexture && (Rk.push("#define ALBEDOTEXTURE"), Rk.push(`#define ALBEDO_UV${Fk.baseColorTexture.coordinatesIndex+1}`), Fk.baseColorTexture.gammaSpace && Rk.push("#define GAMMAALBEDO"), kk = !0), Fk.baseColor && Rk.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Rk.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === Bk.getClassName())) {
            const Fk = Bk;
            Fk.subsurfaceWeight > 0 && Fk.subsurfaceWeightTexture && (Rk.push("#define SUBSURFACE_WEIGHT"), Rk.push(`#define SUBSURFACEWEIGHT_UV${Fk.subsurfaceWeightTexture.coordinatesIndex+1}`), kk = !0), Fk.transmissionWeight > 0 && Fk.transmissionWeightTexture && (Rk.push("#define TRANSMISSION_WEIGHT"), Rk.push(`#define TRANSMISSIONWEIGHT_UV${Fk.transmissionWeightTexture.coordinatesIndex+1}`), kk = !0)
          }
          kk && (Rk.push("#define NEED_UV"), ak.isVerticesDataPresent(Pk.n.UVKind) && (tk.push(Pk.n.UVKind), Rk.push("#define UV1"), Xk = !0), ak.isVerticesDataPresent(Pk.n.UV2Kind) && (tk.push(Pk.n.UV2Kind), Rk.push("#define UV2"), bk = !0))
        }
        if (this._enableDepth && (Rk.push("#define DEPTH"), Rk.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Rk.push("#define NORMAL"), Rk.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Rk.push("#define POSITION"), Rk.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Rk.push("#define VELOCITY"), Rk.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(ak) && Rk.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Rk.push("#define VELOCITY_LINEAR"), Rk.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(ak) && Rk.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Rk.push("#define REFLECTIVITY"), Rk.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Rk.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Rk.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Rk.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Rk.push("#define IRRADIANCE");
          const kk = this._scene;
          if (kk.environmentTexture) {
            const Fk = {};
            let tk = !1,
              ak = 0;
            "OpenPBRMaterial" !== Bk.getClassName() && "StandardMaterial" !== Bk.getClassName() && "PBRMetallicRoughnessMaterial" !== Bk.getClassName() && "PBRSpecularGlossinessMaterial" !== Bk.getClassName() && "PBRMaterial" !== Bk.getClassName() || (tk = !!Bk.realtimeFiltering, ak = Bk.realtimeFilteringQuality || 0), (0, Qk.X)(kk, kk.environmentTexture, Fk, tk, ak, !0);
            for (const kk in Fk) Fk[kk] && Rk.push("#define " + kk);
            Fk.USEIRRADIANCEMAP || Rk.push("#define SPHERICAL_HARMONICS");
            const Xk = kk.postProcessRenderPipelineManager.supportedPipelines.find((kk => "IBLShadowsRenderPipeline" === kk.getClassName()));
            if (Xk) {
              const kk = Xk;
              kk._getAccumulatedTexture() && (Rk.push("#define IBL_SHADOW_TEXTURE"), kk.coloredShadows && Rk.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Rk.push("#define OBJECT_ID"), Rk.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Rk.push("#define MESH_BLEND_TAG"), Rk.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Rk.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Rk.push("#define ENCODE_NORMAL"), ak.useBones && ak.computeBonesUsingShaders && ak.skeleton ? (tk.push(Pk.n.MatricesIndicesKind), tk.push(Pk.n.MatricesWeightsKind), ak.numBoneInfluencers > 4 && (tk.push(Pk.n.MatricesIndicesExtraKind), tk.push(Pk.n.MatricesWeightsExtraKind)), Rk.push("#define NUM_BONE_INFLUENCERS " + ak.numBoneInfluencers), Rk.push("#define BONETEXTURE " + ak.skeleton.isUsingTextureForMatrices), Rk.push("#define BonesPerMesh " + (ak.skeleton.bones.length + 1))) : (Rk.push("#define NUM_BONE_INFLUENCERS 0"), Rk.push("#define BONETEXTURE false"), Rk.push("#define BonesPerMesh 0"));
        const wk = ak.morphTargetManager ? (0, Qk.R)(ak.morphTargetManager, Rk, tk, ak, !0, !0, !1, Xk, bk, !1) : 0;
        Fk && (Rk.push("#define INSTANCES"), (0, Qk.pb)(tk, this._enableVelocity || this._enableVelocityLinear), kk.getRenderingMesh().hasThinInstances && Rk.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Rk.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Rk.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, VF.i)(Bk, this._scene, Rk);
        const dk = this._scene.ne(),
          sk = kk._getDrawWrapper(void 0, !0),
          Vk = sk.defines,
          Jk = Rk.join("\n");
        return Vk !== Jk && sk.setEffect(dk.createEffect("geometry", {
          attributes: tk,
          uniformsNames: PF,
          samplers: zF,
          defines: Jk,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: wk
          },
          shaderLanguage: this.shaderLanguage
        }, dk), Jk), sk.effect.isReady()
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
          this._scene.ne().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.ef.ne()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.ef.ne().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const kk = [],
          Fk = [];
        let Bk = 0;
        return this._enableDepth && (this._depthIndex = Bk, Bk++, kk.push("gBuffer_Depth"), Fk.push(this._textureTypesAndFormats[hF.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = Bk, Bk++, kk.push("gBuffer_Normal"), Fk.push(this._textureTypesAndFormats[hF.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = Bk, Bk++, kk.push("gBuffer_Position"), Fk.push(this._textureTypesAndFormats[hF.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = Bk, Bk++, kk.push("gBuffer_Velocity"), Fk.push(this._textureTypesAndFormats[hF.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = Bk, Bk++, kk.push("gBuffer_VelocityLinear"), Fk.push(this._textureTypesAndFormats[hF.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = Bk, Bk++, kk.push("gBuffer_Reflectivity"), Fk.push(this._textureTypesAndFormats[hF.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = Bk, Bk++, kk.push("gBuffer_ScreenspaceDepth"), Fk.push(this._textureTypesAndFormats[hF.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = Bk, Bk++, kk.push("gBuffer_Irradiance"), Fk.push(this._textureTypesAndFormats[hF.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = Bk, Bk++, kk.push("gBuffer_ObjectId"), Fk.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = Bk, Bk++, kk.push("gBuffer_MeshBlendTag"), Fk.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [Bk, kk, Fk]
      }
      _createRenderTargets() {
        const kk = this._scene.ne(),
          [Fk, Bk, Rk] = this._assignRenderTargetIndices(),
          tk = Math.min(kk.getCaps().maxDrawBuffers ?? 1, 8);
        if (kk.getCaps().drawBuffersExtension && Fk > tk) throw new Error(`GeometryBufferRenderer: ${Fk} color attachments were requested, but this engine supports at most ${tk}`);
        let Xk = 0;
        kk._caps.textureFloat && kk._caps.textureFloatLinearFiltering ? Xk = 1 : kk._caps.textureHalfFloat && kk._caps.textureHalfFloatLinearFiltering && (Xk = 2);
        const bk = this._getRenderTargetDimensions(),
          wk = [],
          dk = [],
          sk = [];
        for (const ak of Rk) ak ? (wk.push(ak.textureType), dk.push(ak.textureFormat), sk.push(ak.samplingMode ?? 2)) : (wk.push(Xk), dk.push(5), sk.push(2));
        if (this._normalsAreUnsigned = 11 === wk[hF.NORMAL_TEXTURE_TYPE] || 13 === wk[hF.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new cF("gBuffer", bk, Fk, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: wk,
            formats: dk,
            samplingModes: sk,
            depthTextureFormat: this._depthFormat
          }, Bk.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = Mk.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = Mk.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const Vk = [!0],
          Jk = [!1],
          Ak = [!0];
        for (let ak = 1; ak < Fk; ++ak) Vk.push(!0), Ak.push(!1), Jk.push(!0);
        const ek = kk.buildTextureLayout(Vk),
          yk = kk.buildTextureLayout(Jk),
          fk = kk.buildTextureLayout(Ak);
        this._multiRenderTarget.onClearObservable.add((kk => {
          const Fk = this.useSpecificClearForDepthTexture ? yk : ek;
          kk.clearAttachments(this._clearColor, Fk, !0, !0, !0), this.useSpecificClearForDepthTexture && kk.clearAttachments(this._clearDepthColor, fk, !0, !1, !1), kk.bindAttachments(ek)
        })), this._resizeObserver = kk.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const mk = kk => {
          const Fk = kk.getRenderingMesh(),
            Bk = kk.getEffectiveMesh(),
            Rk = this._scene,
            tk = Rk.ne(),
            Xk = kk.Ry();
          if (!Xk) return;
          if (Bk._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[Bk.uniqueId] && (this._previousTransformationMatrices[Bk.uniqueId] = {
              iJ: zk.c.Identity(),
              viewProjection: Rk.getTransformMatrix()
            }, Fk.skeleton)) {
            const kk = Fk.skeleton.getTransformMatrices(Fk);
            this._previousBonesTransformationMatrices[Fk.uniqueId] = this._copyBonesTransformationMatrices(kk, new Float32Array(kk.length))
          }
          const bk = Fk._getInstancesRenderList(kk._id, !!kk.getReplacementMesh());
          if (bk.mustReturn) return;
          const wk = tk.getCaps().instancedArrays && (null !== bk.visibleInstances[kk._id] || Fk.hasThinInstances),
            dk = Bk.getWorldMatrix();
          if (this.isReady(kk, wk)) {
            const sk = kk._getDrawWrapper();
            if (!sk) return;
            const Vk = sk.effect;
            let Jk;
            tk.enableEffect(sk), wk || Fk._bind(kk, Vk, Xk.fillMode), this._useUbo ? ((0, Qk.B)(Vk, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (Vk.setMatrix("viewProjection", Rk.getTransformMatrix()), Vk.setMatrix("view", Rk.getViewMatrix()), this._scene.bindEyePosition(Vk, "vEyePosition"));
            if (Fk._instanceDataStorage.isFrozen || !Xk.backFaceCulling && null === Xk.sideOrientation) Jk = Fk._effectiveSideOrientation;
            else {
              const kk = Bk._getWorldMatrixDeterminant();
              Jk = Xk._getEffectiveOrientation(Fk), kk < 0 && (Jk = Jk === ak.c.ClockWiseSideOrientation ? ak.c.CounterClockWiseSideOrientation : ak.c.ClockWiseSideOrientation)
            }
            if (Xk._preBind(sk, Jk), Xk.needAlphaTestingForMesh(Bk)) {
              const kk = Xk.getAlphaTestTexture();
              kk && (Vk.setTexture("diffuseSampler", kk), Vk.setMatrix("diffuseMatrix", kk.getTextureMatrix()), Vk.setFloat("alphaCutOff", Xk.alphaCutOff ?? .4))
            }
            if ((Xk.bumpTexture || Xk.normalTexture || Xk.geometryNormalTexture) && Rk.ne().getCaps().standardDerivatives && nk.b.BumpTextureEnabled) {
              const kk = Xk.bumpTexture || Xk.normalTexture || Xk.geometryNormalTexture;
              Vk.setFloat3("vBumpInfos", kk.coordinatesIndex, 1 / kk.level, Xk.parallaxScaleBias), Vk.setMatrix("bumpMatrix", kk.getTextureMatrix()), Vk.setTexture("bumpSampler", kk), Vk.setFloat2("vTangentSpaceParams", Xk.invertNormalMapX ? -1 : 1, Xk.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === Xk.getClassName()) null !== Xk.metallicRoughnessTexture && (Vk.setTexture("reflectivitySampler", Xk.metallicRoughnessTexture), Vk.setMatrix("reflectivityMatrix", Xk.metallicRoughnessTexture.getTextureMatrix())), null !== Xk.metallic && Vk.setFloat("metallic", Xk.metallic), null !== Xk.roughness && Vk.setFloat("glossiness", 1 - Xk.roughness), null !== Xk.baseTexture && (Vk.setTexture("albedoSampler", Xk.baseTexture), Vk.setMatrix("albedoMatrix", Xk.baseTexture.getTextureMatrix())), null !== Xk.baseColor && Vk.setColor3("albedoColor", Xk.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === Xk.getClassName()) null !== Xk.specularGlossinessTexture ? (Vk.setTexture("reflectivitySampler", Xk.specularGlossinessTexture), Vk.setMatrix("reflectivityMatrix", Xk.specularGlossinessTexture.getTextureMatrix())) : null !== Xk.specularColor && Vk.setColor3("reflectivityColor", Xk.specularColor), null !== Xk.glossiness && Vk.setFloat("glossiness", Xk.glossiness);
            else if ("PBRMaterial" === Xk.getClassName()) null !== Xk.metallicTexture && (Vk.setTexture("reflectivitySampler", Xk.metallicTexture), Vk.setMatrix("reflectivityMatrix", Xk.metallicTexture.getTextureMatrix())), null !== Xk.metallic && Vk.setFloat("metallic", Xk.metallic), null !== Xk.roughness && Vk.setFloat("glossiness", 1 - Xk.roughness), null !== Xk.roughness || null !== Xk.metallic || null !== Xk.metallicTexture ? (null !== Xk.albedoTexture && (Vk.setTexture("albedoSampler", Xk.albedoTexture), Vk.setMatrix("albedoMatrix", Xk.albedoTexture.getTextureMatrix())), null !== Xk.albedoColor && Vk.setColor3("albedoColor", Xk.albedoColor)) : (null !== Xk.reflectivityTexture ? (Vk.setTexture("reflectivitySampler", Xk.reflectivityTexture), Vk.setMatrix("reflectivityMatrix", Xk.reflectivityTexture.getTextureMatrix())) : null !== Xk.reflectivityColor && Vk.setColor3("reflectivityColor", Xk.reflectivityColor), null !== Xk.microSurface && Vk.setFloat("glossiness", Xk.microSurface));
            else if ("StandardMaterial" === Xk.getClassName()) null !== Xk.specularTexture && (Vk.setTexture("reflectivitySampler", Xk.specularTexture), Vk.setMatrix("reflectivityMatrix", Xk.specularTexture.getTextureMatrix())), null !== Xk.specularColor && Vk.setColor3("reflectivityColor", Xk.specularColor);
            else if ("OpenPBRMaterial" === Xk.getClassName()) {
              const kk = Xk;
              kk._useRoughnessFromMetallicTextureGreen && kk.baseMetalnessTexture ? (Vk.setTexture("reflectivitySampler", kk.baseMetalnessTexture), Vk.setMatrix("reflectivityMatrix", kk.baseMetalnessTexture.getTextureMatrix())) : kk.baseMetalnessTexture ? (Vk.setTexture("metallicSampler", kk.baseMetalnessTexture), Vk.setMatrix("metallicMatrix", kk.baseMetalnessTexture.getTextureMatrix())) : kk.specularRoughnessTexture && (Vk.setTexture("roughnessSampler", kk.specularRoughnessTexture), Vk.setMatrix("roughnessMatrix", kk.specularRoughnessTexture.getTextureMatrix())), Vk.setFloat("metallic", kk.baseMetalness), Vk.setFloat("glossiness", 1 - kk.specularRoughness), null !== kk.baseColorTexture && (Vk.setTexture("albedoSampler", kk.baseColorTexture), Vk.setMatrix("albedoMatrix", kk.baseColorTexture.getTextureMatrix())), null !== kk.baseColor && Vk.setColor3("albedoColor", kk.baseColor)
            }
            if (this._enableIrradiance && Rk.environmentTexture) {
              const kk = Rk.environmentTexture,
                Fk = Rk.postProcessRenderPipelineManager.supportedPipelines.find((kk => "IBLShadowsRenderPipeline" === kk.getClassName()));
              if (Fk) {
                const kk = Fk._getAccumulatedTexture();
                kk && (Vk.setTexture("iblShadowSampler", kk), Vk.setFloat2("shadowTextureSize", kk.getSize().width, kk.getSize().height))
              }
              if (Vk.setMatrix("reflectionMatrix", kk.getReflectionTextureMatrix()), Vk.setFloat2("vReflectionInfos", kk.level * Rk.iblIntensity, 0), Vk.setTexture("reflectionSampler", kk), kk.irradianceTexture && (Vk.setTexture("irradianceSampler", kk.irradianceTexture), kk.irradianceTexture._dominantDirection && Vk.setVector3("vReflectionDominantDirection", kk.irradianceTexture._dominantDirection)), kk.sphericalPolynomial) {
                const Fk = kk.sphericalPolynomial;
                if (Fk.preScaledHarmonics) {
                  const kk = Fk.preScaledHarmonics;
                  Vk.setVector3("vSphericalL00", kk.l00), Vk.setVector3("vSphericalL1_1", kk.l1_1), Vk.setVector3("vSphericalL10", kk.l10), Vk.setVector3("vSphericalL11", kk.l11), Vk.setVector3("vSphericalL2_2", kk.l2_2), Vk.setVector3("vSphericalL2_1", kk.l2_1), Vk.setVector3("vSphericalL20", kk.l20), Vk.setVector3("vSphericalL21", kk.l21), Vk.setVector3("vSphericalL22", kk.l22)
                } else Vk.setFloat3("vSphericalX", Fk.x.x, Fk.x.y, Fk.x.z), Vk.setFloat3("vSphericalY", Fk.y.x, Fk.y.y, Fk.y.z), Vk.setFloat3("vSphericalZ", Fk.z.x, Fk.z.y, Fk.z.z), Vk.setFloat3("vSphericalXX_ZZ", Fk.xx.x - Fk.zz.x, Fk.xx.y - Fk.zz.y, Fk.xx.z - Fk.zz.z), Vk.setFloat3("vSphericalYY_ZZ", Fk.yy.x - Fk.zz.x, Fk.yy.y - Fk.zz.y, Fk.yy.z - Fk.zz.z), Vk.setFloat3("vSphericalZZ", Fk.zz.x, Fk.zz.y, Fk.zz.z), Vk.setFloat3("vSphericalXY", Fk.xy.x, Fk.xy.y, Fk.xy.z), Vk.setFloat3("vSphericalYZ", Fk.yz.x, Fk.yz.y, Fk.yz.z), Vk.setFloat3("vSphericalZX", Fk.zx.x, Fk.zx.y, Fk.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === Xk.getClassName()) {
                const kk = Xk;
                Vk.setFloat("vSubsurfaceWeight", kk.subsurfaceWeight), kk.subsurfaceWeightTexture && (Vk.setTexture("subsurfaceWeightSampler", kk.subsurfaceWeightTexture), Vk.setMatrix("subsurfaceWeightMatrix", kk.subsurfaceWeightTexture.getTextureMatrix())), Vk.setFloat("vTransmissionWeight", kk.transmissionWeight), kk.transmissionWeightTexture && (Vk.setTexture("transmissionWeightSampler", kk.transmissionWeightTexture), Vk.setMatrix("transmissionWeightMatrix", kk.transmissionWeightTexture.getTextureMatrix())), Vk.setFloat("vTransmissionScatterAnisotropy", kk.transmissionScatterAnisotropy), Vk.setFloat("vSubsurfaceScatterAnisotropy", kk.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, VF.e)(Vk, Xk, this._scene), Fk.useBones && Fk.computeBonesUsingShaders && Fk.skeleton) {
              const kk = Fk.skeleton;
              if (kk.isUsingTextureForMatrices && Vk.getUniformIndex("boneTextureInfo") > -1) {
                const Bk = kk.getTransformMatrixTexture(Fk);
                Vk.setTexture("boneSampler", Bk), Vk.setFloat2("boneTextureInfo", kk._textureWidth, kk._textureHeight)
              } else Vk.setMatrices("mBones", Fk.skeleton.getTransformMatrices(Fk));
              (this._enableVelocity || this._enableVelocityLinear) && Vk.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[Fk.uniqueId])
            }
            if ((0, Qk.x)(Fk, Vk), Fk.morphTargetManager && Fk.morphTargetManager.isUsingTextureForTargets && Fk.morphTargetManager._bind(Vk), (this._enableVelocity || this._enableVelocityLinear) && (Vk.setMatrix("previousWorld", this._previousTransformationMatrices[Bk.uniqueId].iJ), Vk.setMatrix("previousViewProjection", this._previousTransformationMatrices[Bk.uniqueId].viewProjection)), this._enableObjectId) {
              let kk = Fk.uniqueId;
              if (this.objectIdProvider) kk = (0, eF.h)(Fk, this.objectIdProvider);
              else if (kk > 16777215) throw new Error(`Invalid geometry object ID ${kk} for mesh "${Fk.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              Vk.setFloat("objectId", kk)
            }
            if (this._enableMeshBlendTag) {
              const kk = this.meshBlendTagProvider ? (0, eF.d)(Fk, this.meshBlendTagProvider) : Fk.meshBlendingTag;
              Vk.setInt("meshBlendTag", kk)
            }
            wk && Fk.hasThinInstances && Vk.setMatrix("world", dk), Fk._processRendering(Bk, kk, Vk, Xk.fillMode, bk, wk, ((kk, Fk) => {
              kk || Vk.setMatrix("world", Fk)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[Bk.uniqueId].iJ = dk.clone(), this._previousTransformationMatrices[Bk.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), Fk.skeleton && this._copyBonesTransformationMatrices(Fk.skeleton.getTransformMatrices(Fk), this._previousBonesTransformationMatrices[Bk.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (Fk, Bk, Rk) => {
          if ((Rk || 0 === Bk) && Fk.AY)
            for (let tk = 0; tk < Fk.AY.length; ++tk) {
              const Bk = Fk.AY[tk],
                Rk = Bk.Ry(),
                ak = Bk.getRenderingMesh();
              if (!Rk) continue;
              const Xk = ak._getInstancesRenderList(Bk._id, !!Bk.getReplacementMesh()),
                bk = kk.getCaps().instancedArrays && (null !== Xk.visibleInstances[Bk._id] || ak.hasThinInstances);
              if (!this.isReady(Bk, bk)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (Fk, Bk, Rk, tk) => {
          let ak;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.ne().bindAttachments(this._attachmentsFromPrePass)
          }
          if (tk.length) {
            for (kk.setColorWrite(!1), ak = 0; ak < tk.length; ak++) mk(tk.data[ak]);
            kk.setColorWrite(!0)
          }
          for (ak = 0; ak < Fk.length; ak++) mk(Fk.data[ak]);
          for (kk.setDepthWrite(!1), ak = 0; ak < Bk.length; ak++) mk(Bk.data[ak]);
          if (this.renderTransparentMeshes)
            for (ak = 0; ak < Rk.length; ak++) mk(Rk.data[ak]);
          kk.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const kk = this._scene.ne();
        return {
          width: Math.max(1, Math.floor(kk.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(kk.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(kk, Fk) {
        for (let Bk = 0; Bk < kk.length; Bk++) Fk[Bk] = kk[Bk];
        return Fk
      }
    }
    hF.ForceGLSL = !1, hF.DEPTH_TEXTURE_TYPE = 0, hF.NORMAL_TEXTURE_TYPE = 1, hF.POSITION_TEXTURE_TYPE = 2, hF.VELOCITY_TEXTURE_TYPE = 3, hF.REFLECTIVITY_TEXTURE_TYPE = 4, hF.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, hF.VELOCITY_LINEAR_TEXTURE_TYPE = 6, hF.IRRADIANCE_TEXTURE_TYPE = 7, hF.OBJECT_ID_TEXTURE_TYPE = 8, hF.MESH_BLEND_TAG_TEXTURE_TYPE = 9, hF._SceneComponentInitialization = kk => {
      throw (0, WF.i)("GeometryBufferRendererSceneComponent")
    };
    var qF = Bk(36798);
    const CF = {
      effect: null,
      subMesh: null
    };

    function ZF(kk) {
      if ("number" === typeof kk) return 1;
      if (kk instanceof zk.p) return 2;
      if (kk instanceof zk.s || kk instanceof Kk.e) return 3;
      if (kk instanceof zk.v || kk instanceof Kk.i) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class pF {
      populateVectorFromLinkedProperties(kk) {
        const Fk = ZF(kk);
        for (const Bk in this.linkedProperties) {
          const kk = this.linkedProperties[Bk],
            Rk = kk.numComponents;
          if (Fk < Rk || kk.targetUniformComponentOffset > Fk - Rk) return void(1 == Rk ? Hk.b.Error(`Float property ${kk.name} has an offset that is too large.`) : Hk.b.Error(`Vector${Rk} property ${kk.name} won't fit in Vector${Fk} or has an offset that is too large.`));
          "number" === typeof kk.value ? pF._tmpArray[kk.targetUniformComponentOffset] = kk.value : kk.value.toArray(pF._tmpArray, kk.targetUniformComponentOffset)
        }
        kk.MFk(pF._tmpArray)
      }
      constructor(kk, Fk) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = kk, this.numComponents = Fk
      }
    }
    pF._tmpArray = [0, 0, 0, 0];
    class KF {
      constructor(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ak = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = kk, this.targetUniformName = Bk, this.defaultValue = Fk, this.value = Fk, this.targetUniformComponentNum = Rk, this.targetUniformComponentOffset = tk, this.requiredDefine = ak
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : ZF(this.defaultValue)
      }
    }
    class xF {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(kk, Fk, Bk) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = kk, this.samplerPrefix = Fk, this.textureDefine = Bk
      }
    }
    class jF extends((0, fF.e)((0, yF.c)(hk.c))) {}
    class lF extends(function(kk) {
      return class extends kk {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(jF)) {}
    class nF extends((0, xk.g)(lF)) {
      constructor(kk) {
        super(kk), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class IF extends((0, mF.b)(lk.d)) {}
    let QF = (() => {
        var kk, Fk, Rk, tk, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk, mk, Wk, vk, ik, Yk, Lk, Ok, Ek, gk, Uk, ck, Gk, Dk, hk, qk, Ck, Zk, xk, lk, kF, FF, BF, RF, tF, aF, XF, bF, wF, dF, sF, yF, fF, mF, WF, vF, iF, YF, oF, LF, SF, NF, HF, uF, MF, gF, UF, cF, GF, TF, rF, DF, zF, PF, qF, ZF, jF, lF, QF, kB, FB, BB, RB, tB, aB, XB, bB, wB, dB, sB, VB, JB, AB, eB, yB, fB, mB, WB, vB, iB, YB, oB, LB, OB, EB, SB, NB, HB, uB;
        let MB, gB, UB, cB, GB, TB, rB, DB, zB, PB, hB, qB, CB, ZB, pB, KB, xB, jB, lB, nB, IB, QB, kR, FR, BR, RR, tR, aR, XR, bR, wR, dR, sR, VR, JR, AR, eR, yR, fR, mR, WR, vR, iR, YR, oR, LR, OR, ER, SR, NR, HR, uR, MR, gR, UR, cR, GR, TR, rR, DR, zR, PR, hR, qR, CR, ZR, pR, KR, xR, jR, lR, nR, IR, QR, kt, Ft, Bt, Rt, tt, Xt, bt, wt, dt, st, Vt, Jt, At, et, yt, ft, mt, Wt, vt, it, Yt, ot, Lt, Ot, Et, St, Nt, Ht, ut, Mt, gt, Ut = IF,
          ct = [],
          Gt = [],
          Tt = [],
          rt = [],
          Dt = [],
          zt = [],
          Pt = [],
          ht = [],
          qt = [],
          Ct = [],
          Zt = [],
          pt = [],
          Kt = [],
          xt = [],
          jt = [],
          lt = [],
          nt = [],
          It = [],
          Qt = [],
          ka = [],
          Fa = [],
          Ba = [],
          Ra = [],
          ta = [],
          aa = [],
          Xa = [],
          ba = [],
          wa = [],
          da = [],
          sa = [],
          Va = [],
          Ja = [],
          Aa = [],
          ea = [],
          ya = [],
          fa = [],
          ma = [],
          Wa = [],
          va = [],
          ia = [],
          Ya = [],
          oa = [],
          La = [],
          Oa = [],
          Ea = [],
          Sa = [],
          Na = [],
          Ha = [],
          ua = [],
          Ma = [],
          ga = [],
          Ua = [],
          ca = [],
          Ga = [],
          Ta = [],
          ra = [],
          Da = [],
          za = [],
          Pa = [],
          ha = [],
          qa = [],
          Ca = [],
          Za = [],
          pa = [],
          Ka = [],
          xa = [],
          ja = [],
          la = [],
          na = [],
          Ia = [],
          Qa = [],
          kX = [],
          FX = [],
          BX = [],
          RX = [],
          tX = [],
          aX = [],
          XX = [],
          bX = [],
          wX = [],
          dX = [],
          sX = [],
          VX = [],
          JX = [],
          AX = [],
          eX = [],
          yX = [],
          fX = [],
          mX = [],
          WX = [],
          vX = [],
          iX = [],
          YX = [],
          oX = [],
          LX = [],
          OX = [],
          EX = [],
          SX = [],
          NX = [],
          HX = [],
          uX = [],
          MX = [],
          gX = [],
          UX = [],
          cX = [],
          GX = [],
          TX = [],
          rX = [],
          DX = [],
          zX = [],
          PX = [],
          hX = [],
          qX = [],
          CX = [],
          ZX = [],
          pX = [],
          KX = [],
          xX = [],
          jX = [],
          lX = [],
          nX = [],
          IX = [],
          QX = [],
          kb = [],
          Fb = [],
          Bb = [],
          Rb = [],
          tb = [],
          ab = [],
          Xb = [],
          bb = [],
          wb = [],
          db = [],
          sb = [],
          Vb = [],
          Jb = [],
          Ab = [],
          eb = [],
          yb = [],
          fb = [],
          mb = [],
          Wb = [],
          vb = [],
          ib = [],
          Yb = [],
          ob = [],
          Lb = [],
          Ob = [],
          Eb = [],
          Sb = [],
          Nb = [],
          Hb = [],
          ub = [],
          Mb = [],
          gb = [],
          Ub = [],
          cb = [],
          Gb = [],
          Tb = [],
          rb = [],
          Db = [],
          zb = [],
          Pb = [],
          hb = [],
          qb = [],
          Cb = [],
          Zb = [],
          pb = [],
          Kb = [],
          xb = [],
          jb = [],
          lb = [],
          nb = [],
          Ib = [],
          Qb = [],
          kw = [],
          Fw = [],
          Bw = [],
          Rw = [],
          tw = [],
          aw = [],
          Xw = [],
          bw = [],
          ww = [],
          dw = [],
          sw = [],
          Vw = [],
          Jw = [],
          Aw = [],
          ew = [],
          yw = [],
          fw = [],
          mw = [],
          Ww = [],
          vw = [],
          iw = [],
          Yw = [],
          ow = [],
          Lw = [],
          Ow = [],
          Ew = [],
          Sw = [],
          Nw = [],
          Hw = [],
          uw = [];
        return kk = class extends Ut {
          get baseWeight() {
            return (0, Sk.e)(this, Fk, "f")
          }
          set baseWeight(kk) {
            (0, Sk.i)(this, Fk, kk, "f")
          }
          get baseWeightTexture() {
            return (0, Sk.e)(this, Rk, "f")
          }
          set baseWeightTexture(kk) {
            (0, Sk.i)(this, Rk, kk, "f")
          }
          get baseColor() {
            return (0, Sk.e)(this, tk, "f")
          }
          set baseColor(kk) {
            (0, Sk.i)(this, tk, kk, "f")
          }
          get baseColorTexture() {
            return (0, Sk.e)(this, Xk, "f")
          }
          set baseColorTexture(kk) {
            (0, Sk.i)(this, Xk, kk, "f")
          }
          get baseDiffuseRoughness() {
            return (0, Sk.e)(this, bk, "f")
          }
          set baseDiffuseRoughness(kk) {
            (0, Sk.i)(this, bk, kk, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, Sk.e)(this, wk, "f")
          }
          set baseDiffuseRoughnessTexture(kk) {
            (0, Sk.i)(this, wk, kk, "f")
          }
          get baseMetalness() {
            return (0, Sk.e)(this, dk, "f")
          }
          set baseMetalness(kk) {
            (0, Sk.i)(this, dk, kk, "f")
          }
          get baseMetalnessTexture() {
            return (0, Sk.e)(this, sk, "f")
          }
          set baseMetalnessTexture(kk) {
            (0, Sk.i)(this, sk, kk, "f")
          }
          get specularWeight() {
            return (0, Sk.e)(this, Vk, "f")
          }
          set specularWeight(kk) {
            (0, Sk.i)(this, Vk, kk, "f")
          }
          get specularWeightTexture() {
            return (0, Sk.e)(this, Jk, "f")
          }
          set specularWeightTexture(kk) {
            (0, Sk.i)(this, Jk, kk, "f")
          }
          get specularColor() {
            return (0, Sk.e)(this, Ak, "f")
          }
          set specularColor(kk) {
            (0, Sk.i)(this, Ak, kk, "f")
          }
          get specularColorTexture() {
            return (0, Sk.e)(this, ek, "f")
          }
          set specularColorTexture(kk) {
            (0, Sk.i)(this, ek, kk, "f")
          }
          get specularRoughness() {
            return (0, Sk.e)(this, yk, "f")
          }
          set specularRoughness(kk) {
            (0, Sk.i)(this, yk, kk, "f")
          }
          get specularRoughnessTexture() {
            return (0, Sk.e)(this, fk, "f")
          }
          set specularRoughnessTexture(kk) {
            (0, Sk.i)(this, fk, kk, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, Sk.e)(this, mk, "f")
          }
          set specularRoughnessAnisotropy(kk) {
            (0, Sk.i)(this, mk, kk, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, Sk.e)(this, Wk, "f")
          }
          set specularRoughnessAnisotropyTexture(kk) {
            (0, Sk.i)(this, Wk, kk, "f")
          }
          get specularIor() {
            return (0, Sk.e)(this, vk, "f")
          }
          set specularIor(kk) {
            (0, Sk.i)(this, vk, kk, "f")
          }
          get transmissionWeight() {
            return (0, Sk.e)(this, ik, "f")
          }
          set transmissionWeight(kk) {
            (0, Sk.i)(this, ik, kk, "f")
          }
          get transmissionWeightTexture() {
            return (0, Sk.e)(this, Yk, "f")
          }
          set transmissionWeightTexture(kk) {
            (0, Sk.i)(this, Yk, kk, "f")
          }
          get transmissionColor() {
            return (0, Sk.e)(this, Lk, "f")
          }
          set transmissionColor(kk) {
            (0, Sk.i)(this, Lk, kk, "f")
          }
          get transmissionColorTexture() {
            return (0, Sk.e)(this, Ok, "f")
          }
          set transmissionColorTexture(kk) {
            (0, Sk.i)(this, Ok, kk, "f")
          }
          get transmissionDepth() {
            return (0, Sk.e)(this, Ek, "f")
          }
          set transmissionDepth(kk) {
            (0, Sk.i)(this, Ek, kk, "f")
          }
          get transmissionDepthTexture() {
            return (0, Sk.e)(this, gk, "f")
          }
          set transmissionDepthTexture(kk) {
            (0, Sk.i)(this, gk, kk, "f")
          }
          get transmissionScatter() {
            return (0, Sk.e)(this, Uk, "f")
          }
          set transmissionScatter(kk) {
            (0, Sk.i)(this, Uk, kk, "f")
          }
          get transmissionScatterTexture() {
            return (0, Sk.e)(this, ck, "f")
          }
          set transmissionScatterTexture(kk) {
            (0, Sk.i)(this, ck, kk, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, Sk.e)(this, Gk, "f")
          }
          set transmissionScatterAnisotropy(kk) {
            (0, Sk.i)(this, Gk, kk, "f")
          }
          get transmissionDispersionScale() {
            return (0, Sk.e)(this, Dk, "f")
          }
          set transmissionDispersionScale(kk) {
            (0, Sk.i)(this, Dk, kk, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, Sk.e)(this, hk, "f")
          }
          set transmissionDispersionScaleTexture(kk) {
            (0, Sk.i)(this, hk, kk, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, Sk.e)(this, qk, "f")
          }
          set transmissionDispersionAbbeNumber(kk) {
            (0, Sk.i)(this, qk, kk, "f")
          }
          get subsurfaceWeight() {
            return (0, Sk.e)(this, Ck, "f")
          }
          set subsurfaceWeight(kk) {
            (0, Sk.i)(this, Ck, kk, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, Sk.e)(this, Zk, "f")
          }
          set subsurfaceWeightTexture(kk) {
            (0, Sk.i)(this, Zk, kk, "f")
          }
          get subsurfaceColor() {
            return (0, Sk.e)(this, xk, "f")
          }
          set subsurfaceColor(kk) {
            (0, Sk.i)(this, xk, kk, "f")
          }
          get subsurfaceColorTexture() {
            return (0, Sk.e)(this, lk, "f")
          }
          set subsurfaceColorTexture(kk) {
            (0, Sk.i)(this, lk, kk, "f")
          }
          get subsurfaceRadius() {
            return (0, Sk.e)(this, kF, "f")
          }
          set subsurfaceRadius(kk) {
            (0, Sk.i)(this, kF, kk, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, Sk.e)(this, FF, "f")
          }
          set subsurfaceRadiusScale(kk) {
            (0, Sk.i)(this, FF, kk, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, Sk.e)(this, BF, "f")
          }
          set subsurfaceRadiusScaleTexture(kk) {
            (0, Sk.i)(this, BF, kk, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, Sk.e)(this, RF, "f")
          }
          set subsurfaceScatterAnisotropy(kk) {
            (0, Sk.i)(this, RF, kk, "f")
          }
          get coatWeight() {
            return (0, Sk.e)(this, tF, "f")
          }
          set coatWeight(kk) {
            (0, Sk.i)(this, tF, kk, "f")
          }
          get coatWeightTexture() {
            return (0, Sk.e)(this, aF, "f")
          }
          set coatWeightTexture(kk) {
            (0, Sk.i)(this, aF, kk, "f")
          }
          get coatColor() {
            return (0, Sk.e)(this, XF, "f")
          }
          set coatColor(kk) {
            (0, Sk.i)(this, XF, kk, "f")
          }
          get coatColorTexture() {
            return (0, Sk.e)(this, bF, "f")
          }
          set coatColorTexture(kk) {
            (0, Sk.i)(this, bF, kk, "f")
          }
          get coatRoughness() {
            return (0, Sk.e)(this, wF, "f")
          }
          set coatRoughness(kk) {
            (0, Sk.i)(this, wF, kk, "f")
          }
          get coatRoughnessTexture() {
            return (0, Sk.e)(this, dF, "f")
          }
          set coatRoughnessTexture(kk) {
            (0, Sk.i)(this, dF, kk, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, Sk.e)(this, sF, "f")
          }
          set coatRoughnessAnisotropy(kk) {
            (0, Sk.i)(this, sF, kk, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, Sk.e)(this, yF, "f")
          }
          set coatRoughnessAnisotropyTexture(kk) {
            (0, Sk.i)(this, yF, kk, "f")
          }
          get coatIor() {
            return (0, Sk.e)(this, fF, "f")
          }
          set coatIor(kk) {
            (0, Sk.i)(this, fF, kk, "f")
          }
          get coatDarkening() {
            return (0, Sk.e)(this, mF, "f")
          }
          set coatDarkening(kk) {
            (0, Sk.i)(this, mF, kk, "f")
          }
          get coatDarkeningTexture() {
            return (0, Sk.e)(this, WF, "f")
          }
          set coatDarkeningTexture(kk) {
            (0, Sk.i)(this, WF, kk, "f")
          }
          get fuzzWeight() {
            return (0, Sk.e)(this, vF, "f")
          }
          set fuzzWeight(kk) {
            (0, Sk.i)(this, vF, kk, "f")
          }
          get fuzzWeightTexture() {
            return (0, Sk.e)(this, iF, "f")
          }
          set fuzzWeightTexture(kk) {
            (0, Sk.i)(this, iF, kk, "f")
          }
          get fuzzColor() {
            return (0, Sk.e)(this, YF, "f")
          }
          set fuzzColor(kk) {
            (0, Sk.i)(this, YF, kk, "f")
          }
          get fuzzColorTexture() {
            return (0, Sk.e)(this, oF, "f")
          }
          set fuzzColorTexture(kk) {
            (0, Sk.i)(this, oF, kk, "f")
          }
          get fuzzRoughness() {
            return (0, Sk.e)(this, LF, "f")
          }
          set fuzzRoughness(kk) {
            (0, Sk.i)(this, LF, kk, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, Sk.e)(this, SF, "f")
          }
          set fuzzRoughnessTexture(kk) {
            (0, Sk.i)(this, SF, kk, "f")
          }
          get geometryThinWalled() {
            return (0, Sk.e)(this, NF, "f")
          }
          set geometryThinWalled(kk) {
            (0, Sk.i)(this, NF, kk, "f")
          }
          get geometryNormalTexture() {
            return (0, Sk.e)(this, HF, "f")
          }
          set geometryNormalTexture(kk) {
            (0, Sk.i)(this, HF, kk, "f")
          }
          get geometryTangent() {
            return (0, Sk.e)(this, uF, "f")
          }
          set geometryTangent(kk) {
            (0, Sk.i)(this, uF, kk, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(kk) {
            this.geometryTangent = new zk.p(Math.cos(kk), Math.sin(kk))
          }
          get geometryTangentTexture() {
            return (0, Sk.e)(this, MF, "f")
          }
          set geometryTangentTexture(kk) {
            (0, Sk.i)(this, MF, kk, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, Sk.e)(this, gF, "f")
          }
          set geometryCoatNormalTexture(kk) {
            (0, Sk.i)(this, gF, kk, "f")
          }
          get geometryCoatTangent() {
            return (0, Sk.e)(this, UF, "f")
          }
          set geometryCoatTangent(kk) {
            (0, Sk.i)(this, UF, kk, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(kk) {
            this.geometryCoatTangent = new zk.p(Math.cos(kk), Math.sin(kk))
          }
          get geometryCoatTangentTexture() {
            return (0, Sk.e)(this, cF, "f")
          }
          set geometryCoatTangentTexture(kk) {
            (0, Sk.i)(this, cF, kk, "f")
          }
          get geometryOpacity() {
            return (0, Sk.e)(this, GF, "f")
          }
          set geometryOpacity(kk) {
            (0, Sk.i)(this, GF, kk, "f")
          }
          get geometryOpacityTexture() {
            return (0, Sk.e)(this, TF, "f")
          }
          set geometryOpacityTexture(kk) {
            (0, Sk.i)(this, TF, kk, "f")
          }
          get geometryThickness() {
            return (0, Sk.e)(this, rF, "f")
          }
          set geometryThickness(kk) {
            (0, Sk.i)(this, rF, kk, "f")
          }
          get geometryThicknessTexture() {
            return (0, Sk.e)(this, DF, "f")
          }
          set geometryThicknessTexture(kk) {
            (0, Sk.i)(this, DF, kk, "f")
          }
          get emissionLuminance() {
            return (0, Sk.e)(this, zF, "f")
          }
          set emissionLuminance(kk) {
            (0, Sk.i)(this, zF, kk, "f")
          }
          get emissionColor() {
            return (0, Sk.e)(this, PF, "f")
          }
          set emissionColor(kk) {
            (0, Sk.i)(this, PF, kk, "f")
          }
          get emissionColorTexture() {
            return (0, Sk.e)(this, qF, "f")
          }
          set emissionColorTexture(kk) {
            (0, Sk.i)(this, qF, kk, "f")
          }
          get thinFilmWeight() {
            return (0, Sk.e)(this, ZF, "f")
          }
          set thinFilmWeight(kk) {
            (0, Sk.i)(this, ZF, kk, "f")
          }
          get thinFilmWeightTexture() {
            return (0, Sk.e)(this, jF, "f")
          }
          set thinFilmWeightTexture(kk) {
            (0, Sk.i)(this, jF, kk, "f")
          }
          get thinFilmThickness() {
            return (0, Sk.e)(this, lF, "f")
          }
          set thinFilmThickness(kk) {
            (0, Sk.i)(this, lF, kk, "f")
          }
          get thinFilmThicknessMin() {
            return (0, Sk.e)(this, QF, "f")
          }
          set thinFilmThicknessMin(kk) {
            (0, Sk.i)(this, QF, kk, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, Sk.e)(this, kB, "f")
          }
          set thinFilmThicknessTexture(kk) {
            (0, Sk.i)(this, kB, kk, "f")
          }
          get thinFilmIor() {
            return (0, Sk.e)(this, FB, "f")
          }
          set thinFilmIor(kk) {
            (0, Sk.i)(this, FB, kk, "f")
          }
          get ambientOcclusionTexture() {
            return (0, Sk.e)(this, BB, "f")
          }
          set ambientOcclusionTexture(kk) {
            (0, Sk.i)(this, BB, kk, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(kk) {
            this._sssQuality !== kk && (this._sssQuality = kk, this.mFk(1))
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
            return (0, Sk.e)(this, RB, "f")
          }
          set directIntensity(kk) {
            (0, Sk.i)(this, RB, kk, "f")
          }
          get environmentIntensity() {
            return (0, Sk.e)(this, tB, "f")
          }
          set environmentIntensity(kk) {
            (0, Sk.i)(this, tB, kk, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, Sk.e)(this, aB, "f")
          }
          set useSpecularWeightFromTextureAlpha(kk) {
            (0, Sk.i)(this, aB, kk, "f")
          }
          get forceAlphaTest() {
            return (0, Sk.e)(this, XB, "f")
          }
          set forceAlphaTest(kk) {
            (0, Sk.i)(this, XB, kk, "f")
          }
          get alphaCutOff() {
            return (0, Sk.e)(this, bB, "f")
          }
          set alphaCutOff(kk) {
            (0, Sk.i)(this, bB, kk, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, Sk.e)(this, wB, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(kk) {
            (0, Sk.i)(this, wB, kk, "f")
          }
          get useAmbientInGrayScale() {
            return (0, Sk.e)(this, dB, "f")
          }
          set useAmbientInGrayScale(kk) {
            (0, Sk.i)(this, dB, kk, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(Kk.e.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === ak.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(kk) {
            kk !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = kk ? ak.c.LIGHTFALLOFF_PHYSICAL : ak.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === ak.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(kk) {
            kk !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = kk ? ak.c.LIGHTFALLOFF_GLTF : ak.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, Sk.e)(this, sB, "f")
          }
          set useObjectSpaceNormalMap(kk) {
            (0, Sk.i)(this, sB, kk, "f")
          }
          get useParallax() {
            return (0, Sk.e)(this, VB, "f")
          }
          set useParallax(kk) {
            (0, Sk.i)(this, VB, kk, "f")
          }
          get useParallaxOcclusion() {
            return (0, Sk.e)(this, JB, "f")
          }
          set useParallaxOcclusion(kk) {
            (0, Sk.i)(this, JB, kk, "f")
          }
          get parallaxScaleBias() {
            return (0, Sk.e)(this, AB, "f")
          }
          set parallaxScaleBias(kk) {
            (0, Sk.i)(this, AB, kk, "f")
          }
          get disableLighting() {
            return (0, Sk.e)(this, eB, "f")
          }
          set disableLighting(kk) {
            (0, Sk.i)(this, eB, kk, "f")
          }
          get forceIrradianceInFragment() {
            return (0, Sk.e)(this, yB, "f")
          }
          set forceIrradianceInFragment(kk) {
            (0, Sk.i)(this, yB, kk, "f")
          }
          get maxSimultaneousLights() {
            return (0, Sk.e)(this, fB, "f")
          }
          set maxSimultaneousLights(kk) {
            (0, Sk.i)(this, fB, kk, "f")
          }
          get invertNormalMapX() {
            return (0, Sk.e)(this, mB, "f")
          }
          set invertNormalMapX(kk) {
            (0, Sk.i)(this, mB, kk, "f")
          }
          get invertNormalMapY() {
            return (0, Sk.e)(this, WB, "f")
          }
          set invertNormalMapY(kk) {
            (0, Sk.i)(this, WB, kk, "f")
          }
          get twoSidedLighting() {
            return (0, Sk.e)(this, vB, "f")
          }
          set twoSidedLighting(kk) {
            (0, Sk.i)(this, vB, kk, "f")
          }
          get useAlphaFresnel() {
            return (0, Sk.e)(this, iB, "f")
          }
          set useAlphaFresnel(kk) {
            (0, Sk.i)(this, iB, kk, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, Sk.e)(this, YB, "f")
          }
          set useLinearAlphaFresnel(kk) {
            (0, Sk.i)(this, YB, kk, "f")
          }
          get environmentBRDFTexture() {
            return (0, Sk.e)(this, oB, "f")
          }
          set environmentBRDFTexture(kk) {
            (0, Sk.i)(this, oB, kk, "f")
          }
          get forceNormalForward() {
            return (0, Sk.e)(this, LB, "f")
          }
          set forceNormalForward(kk) {
            (0, Sk.i)(this, LB, kk, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, Sk.e)(this, OB, "f")
          }
          set enableSpecularAntiAliasing(kk) {
            (0, Sk.i)(this, OB, kk, "f")
          }
          get useHorizonOcclusion() {
            return (0, Sk.e)(this, EB, "f")
          }
          set useHorizonOcclusion(kk) {
            (0, Sk.i)(this, EB, kk, "f")
          }
          get useRadianceOcclusion() {
            return (0, Sk.e)(this, SB, "f")
          }
          set useRadianceOcclusion(kk) {
            (0, Sk.i)(this, SB, kk, "f")
          }
          get unlit() {
            return (0, Sk.e)(this, NB, "f")
          }
          set unlit(kk) {
            (0, Sk.i)(this, NB, kk, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Sk.e)(this, HB, "f")
          }
          set applyDecalMapAfterDetailMap(kk) {
            (0, Sk.i)(this, HB, kk, "f")
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
            this._refractionHighQualityBlur !== kk && (this._refractionHighQualityBlur = kk, this.mFk(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(kk) {
            this._realTimeFiltering = kk, this.mFk(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(kk) {
            this._realTimeFilteringQuality = kk, this.mFk(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(kk) {
            this._fuzzSampleNumber = kk, this.mFk(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, Sk.e)(this, uB, "f")
          }
          set debugMode(kk) {
            (0, Sk.i)(this, uB, kk, "f")
          }
          constructor(Bk, Nk) {
            super(Bk, Nk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || kk.ForceGLSL), Fk.set(this, ((0, Sk.l)(this, ct), (0, Sk.l)(this, Gt, void 0))), this._baseWeight = ((0, Sk.l)(this, Tt), new KF("base_weight", 1, "vBaseWeight", 1)), Rk.set(this, (0, Sk.l)(this, rt, void 0)), this._baseWeightTexture = ((0, Sk.l)(this, Dt), new xF("base_weight", "baseWeight", "BASE_WEIGHT")), tk.set(this, (0, Sk.l)(this, zt, void 0)), this._baseColor = ((0, Sk.l)(this, Pt), new KF("base_color", Kk.e.White(), "vBaseColor", 4)), Xk.set(this, (0, Sk.l)(this, ht, void 0)), this._baseColorTexture = ((0, Sk.l)(this, qt), new xF("base_color", "baseColor", "BASE_COLOR")), bk.set(this, (0, Sk.l)(this, Ct, void 0)), this._baseDiffuseRoughness = ((0, Sk.l)(this, Zt), new KF("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), wk.set(this, (0, Sk.l)(this, pt, void 0)), this._baseDiffuseRoughnessTexture = ((0, Sk.l)(this, Kt), new xF("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), dk.set(this, (0, Sk.l)(this, xt, void 0)), this._baseMetalness = ((0, Sk.l)(this, jt), new KF("base_metalness", 0, "vReflectanceInfo", 4, 0)), sk.set(this, (0, Sk.l)(this, lt, void 0)), this._baseMetalnessTexture = ((0, Sk.l)(this, nt), new xF("base_metalness", "baseMetalness", "BASE_METALNESS")), Vk.set(this, (0, Sk.l)(this, It, void 0)), this._specularWeight = ((0, Sk.l)(this, Qt), new KF("specular_weight", 1, "vReflectanceInfo", 4, 3)), Jk.set(this, (0, Sk.l)(this, ka, void 0)), this._specularWeightTexture = ((0, Sk.l)(this, Fa), new xF("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), Ak.set(this, (0, Sk.l)(this, Ba, void 0)), this._specularColor = ((0, Sk.l)(this, Ra), new KF("specular_color", Kk.e.White(), "vSpecularColor", 4)), ek.set(this, (0, Sk.l)(this, ta, void 0)), this._specularColorTexture = ((0, Sk.l)(this, aa), new xF("specular_color", "specularColor", "SPECULAR_COLOR")), yk.set(this, (0, Sk.l)(this, Xa, void 0)), this._specularRoughness = ((0, Sk.l)(this, ba), new KF("specular_roughness", .3, "vReflectanceInfo", 4, 1)), fk.set(this, (0, Sk.l)(this, wa, void 0)), this._specularRoughnessTexture = ((0, Sk.l)(this, da), new xF("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), mk.set(this, (0, Sk.l)(this, sa, void 0)), this._specularRoughnessAnisotropy = ((0, Sk.l)(this, Va), new KF("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), Wk.set(this, (0, Sk.l)(this, Ja, void 0)), this._specularRoughnessAnisotropyTexture = ((0, Sk.l)(this, Aa), new xF("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), vk.set(this, (0, Sk.l)(this, ea, void 0)), this._specularIor = ((0, Sk.l)(this, ya), new KF("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), ik.set(this, (0, Sk.l)(this, fa, void 0)), this._transmissionWeight = ((0, Sk.l)(this, ma), new KF("transmission_weight", 0, "vTransmissionWeight", 1)), Yk.set(this, (0, Sk.l)(this, Wa, void 0)), this._transmissionWeightTexture = ((0, Sk.l)(this, va), new xF("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), Lk.set(this, (0, Sk.l)(this, ia, void 0)), this._transmissionColor = ((0, Sk.l)(this, Ya), new KF("transmission_color", Kk.e.White(), "vTransmissionColor", 3, 0)), Ok.set(this, (0, Sk.l)(this, oa, void 0)), this._transmissionColorTexture = ((0, Sk.l)(this, La), new xF("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), Ek.set(this, (0, Sk.l)(this, Oa, void 0)), this._transmissionDepth = ((0, Sk.l)(this, Ea), new KF("transmission_depth", 0, "vTransmissionDepth", 1, 0)), gk.set(this, (0, Sk.l)(this, Sa, void 0)), this._transmissionDepthTexture = ((0, Sk.l)(this, Na), new xF("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Uk.set(this, (0, Sk.l)(this, Ha, void 0)), this._transmissionScatter = ((0, Sk.l)(this, ua), new KF("transmission_scatter", Kk.e.Black(), "vTransmissionScatter", 3, 0)), ck.set(this, (0, Sk.l)(this, Ma, void 0)), this._transmissionScatterTexture = ((0, Sk.l)(this, ga), new xF("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Gk.set(this, (0, Sk.l)(this, Ua, void 0)), this._transmissionScatterAnisotropy = ((0, Sk.l)(this, ca), new KF("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), Dk.set(this, (0, Sk.l)(this, Ga, void 0)), this._transmissionDispersionScale = ((0, Sk.l)(this, Ta), new KF("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), hk.set(this, (0, Sk.l)(this, ra, void 0)), this._transmissionDispersionScaleTexture = ((0, Sk.l)(this, Da), new xF("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), qk.set(this, (0, Sk.l)(this, za, void 0)), this._transmissionDispersionAbbeNumber = ((0, Sk.l)(this, Pa), new KF("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), Ck.set(this, (0, Sk.l)(this, ha, void 0)), this._subsurfaceWeight = ((0, Sk.l)(this, qa), new KF("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), Zk.set(this, (0, Sk.l)(this, Ca, void 0)), this._subsurfaceWeightTexture = ((0, Sk.l)(this, Za), new xF("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), xk.set(this, (0, Sk.l)(this, pa, void 0)), this._subsurfaceColor = ((0, Sk.l)(this, Ka), new KF("subsurface_color", new Kk.e(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), lk.set(this, (0, Sk.l)(this, xa, void 0)), this._subsurfaceColorTexture = ((0, Sk.l)(this, ja), new xF("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), kF.set(this, (0, Sk.l)(this, la, void 0)), this._subsurfaceRadius = ((0, Sk.l)(this, na), new KF("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), FF.set(this, (0, Sk.l)(this, Ia, void 0)), this._subsurfaceRadiusScale = ((0, Sk.l)(this, Qa), new KF("subsurface_radius_scale", new Kk.e(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), BF.set(this, (0, Sk.l)(this, kX, void 0)), this._subsurfaceRadiusScaleTexture = ((0, Sk.l)(this, FX), new xF("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), RF.set(this, (0, Sk.l)(this, BX, void 0)), this._subsurfaceScatterAnisotropy = ((0, Sk.l)(this, RX), new KF("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), tF.set(this, (0, Sk.l)(this, tX, void 0)), this._coatWeight = ((0, Sk.l)(this, aX), new KF("coat_weight", 0, "vCoatWeight", 1, 0)), aF.set(this, (0, Sk.l)(this, XX, void 0)), this._coatWeightTexture = ((0, Sk.l)(this, bX), new xF("coat_weight", "coatWeight", "COAT_WEIGHT")), XF.set(this, (0, Sk.l)(this, wX, void 0)), this._coatColor = ((0, Sk.l)(this, dX), new KF("coat_color", Kk.e.White(), "vCoatColor", 3, 0)), bF.set(this, (0, Sk.l)(this, sX, void 0)), this._coatColorTexture = ((0, Sk.l)(this, VX), new xF("coat_color", "coatColor", "COAT_COLOR")), wF.set(this, (0, Sk.l)(this, JX, void 0)), this._coatRoughness = ((0, Sk.l)(this, AX), new KF("coat_roughness", 0, "vCoatRoughness", 1, 0)), dF.set(this, (0, Sk.l)(this, eX, void 0)), this._coatRoughnessTexture = ((0, Sk.l)(this, yX), new xF("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), sF.set(this, (0, Sk.l)(this, fX, void 0)), this._coatRoughnessAnisotropy = ((0, Sk.l)(this, mX), new KF("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), yF.set(this, (0, Sk.l)(this, WX, void 0)), this._coatRoughnessAnisotropyTexture = ((0, Sk.l)(this, vX), new xF("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), fF.set(this, (0, Sk.l)(this, iX, void 0)), this._coatIor = ((0, Sk.l)(this, YX), new KF("coat_ior", 1.5, "vCoatIor", 1, 0)), mF.set(this, (0, Sk.l)(this, oX, void 0)), this._coatDarkening = ((0, Sk.l)(this, LX), new KF("coat_darkening", 1, "vCoatDarkening", 1, 0)), WF.set(this, (0, Sk.l)(this, OX, void 0)), this._coatDarkeningTexture = ((0, Sk.l)(this, EX), new xF("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, vF.set(this, (0, Sk.l)(this, SX, void 0)), this._fuzzWeight = ((0, Sk.l)(this, NX), new KF("fuzz_weight", 0, "vFuzzWeight", 1, 0)), iF.set(this, (0, Sk.l)(this, HX, void 0)), this._fuzzWeightTexture = ((0, Sk.l)(this, uX), new xF("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), YF.set(this, (0, Sk.l)(this, MX, void 0)), this._fuzzColor = ((0, Sk.l)(this, gX), new KF("fuzz_color", Kk.e.White(), "vFuzzColor", 3, 0)), oF.set(this, (0, Sk.l)(this, UX, void 0)), this._fuzzColorTexture = ((0, Sk.l)(this, cX), new xF("fuzz_color", "fuzzColor", "FUZZ_COLOR")), LF.set(this, (0, Sk.l)(this, GX, void 0)), this._fuzzRoughness = ((0, Sk.l)(this, TX), new KF("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), SF.set(this, (0, Sk.l)(this, rX, void 0)), this._fuzzRoughnessTexture = ((0, Sk.l)(this, DX), new xF("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), NF.set(this, (0, Sk.l)(this, zX, void 0)), this._geometryThinWalled = ((0, Sk.l)(this, PX), new KF("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), HF.set(this, (0, Sk.l)(this, hX, void 0)), this._geometryNormalTexture = ((0, Sk.l)(this, qX), new xF("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), uF.set(this, (0, Sk.l)(this, CX, void 0)), this._geometryTangent = ((0, Sk.l)(this, ZX), new KF("geometry_tangent", new zk.p(1, 0), "vSpecularAnisotropy", 3, 0)), MF.set(this, (0, Sk.l)(this, pX, void 0)), this._geometryTangentTexture = ((0, Sk.l)(this, KX), new xF("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), gF.set(this, (0, Sk.l)(this, xX, void 0)), this._geometryCoatNormalTexture = ((0, Sk.l)(this, jX), new xF("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), UF.set(this, (0, Sk.l)(this, lX, void 0)), this._geometryCoatTangent = ((0, Sk.l)(this, nX), new KF("geometry_coat_tangent", new zk.p(1, 0), "vGeometryCoatTangent", 2, 0)), cF.set(this, (0, Sk.l)(this, IX, void 0)), this._geometryCoatTangentTexture = ((0, Sk.l)(this, QX), new xF("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), GF.set(this, (0, Sk.l)(this, kb, void 0)), this._geometryOpacity = ((0, Sk.l)(this, Fb), new KF("geometry_opacity", 1, "vBaseColor", 4, 3)), TF.set(this, (0, Sk.l)(this, Bb, void 0)), this._geometryOpacityTexture = ((0, Sk.l)(this, Rb), new xF("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), rF.set(this, (0, Sk.l)(this, tb, void 0)), this._geometryThickness = ((0, Sk.l)(this, ab), new KF("geometry_thickness", 0, "vGeometryThickness", 1, 0)), DF.set(this, (0, Sk.l)(this, Xb, void 0)), this._geometryThicknessTexture = ((0, Sk.l)(this, bb), new xF("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), zF.set(this, (0, Sk.l)(this, wb, void 0)), this._emissionLuminance = ((0, Sk.l)(this, db), new KF("emission_luminance", 1, "vLightingIntensity", 4, 1)), PF.set(this, (0, Sk.l)(this, sb, void 0)), this._emissionColor = ((0, Sk.l)(this, Vb), new KF("emission_color", Kk.e.Black(), "vEmissionColor", 3)), qF.set(this, (0, Sk.l)(this, Jb, void 0)), this._emissionColorTexture = ((0, Sk.l)(this, Ab), new xF("emission_color", "emissionColor", "EMISSION_COLOR")), ZF.set(this, (0, Sk.l)(this, eb, void 0)), this._thinFilmWeight = ((0, Sk.l)(this, yb), new KF("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), jF.set(this, (0, Sk.l)(this, fb, void 0)), this._thinFilmWeightTexture = ((0, Sk.l)(this, mb), new xF("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), lF.set(this, (0, Sk.l)(this, Wb, void 0)), this._thinFilmThickness = ((0, Sk.l)(this, vb), new KF("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), QF.set(this, (0, Sk.l)(this, ib, void 0)), this._thinFilmThicknessMin = ((0, Sk.l)(this, Yb), new KF("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), kB.set(this, (0, Sk.l)(this, ob, void 0)), this._thinFilmThicknessTexture = ((0, Sk.l)(this, Lb), new xF("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), FB.set(this, (0, Sk.l)(this, Ob, void 0)), this._thinFilmIor = ((0, Sk.l)(this, Eb), new KF("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), BB.set(this, (0, Sk.l)(this, Sb, void 0)), this._ambientOcclusionTexture = ((0, Sk.l)(this, Nb), new xF("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = kk.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, RB.set(this, (0, Sk.l)(this, Hb, 1)), tB.set(this, ((0, Sk.l)(this, ub), (0, Sk.l)(this, Mb, 1))), aB.set(this, ((0, Sk.l)(this, gb), (0, Sk.l)(this, Ub, !1))), XB.set(this, ((0, Sk.l)(this, cb), (0, Sk.l)(this, Gb, !1))), bB.set(this, ((0, Sk.l)(this, Tb), (0, Sk.l)(this, rb, .4))), wB.set(this, ((0, Sk.l)(this, Db), (0, Sk.l)(this, zb, !1))), dB.set(this, ((0, Sk.l)(this, Pb), (0, Sk.l)(this, hb, !1))), sB.set(this, ((0, Sk.l)(this, qb), (0, Sk.l)(this, Cb, !1))), VB.set(this, ((0, Sk.l)(this, Zb), (0, Sk.l)(this, pb, !1))), JB.set(this, ((0, Sk.l)(this, Kb), (0, Sk.l)(this, xb, !1))), AB.set(this, ((0, Sk.l)(this, jb), (0, Sk.l)(this, lb, .05))), eB.set(this, ((0, Sk.l)(this, nb), (0, Sk.l)(this, Ib, !1))), yB.set(this, ((0, Sk.l)(this, Qb), (0, Sk.l)(this, kw, !1))), fB.set(this, ((0, Sk.l)(this, Fw), (0, Sk.l)(this, Bw, 4))), mB.set(this, ((0, Sk.l)(this, Rw), (0, Sk.l)(this, tw, !1))), WB.set(this, ((0, Sk.l)(this, aw), (0, Sk.l)(this, Xw, !1))), vB.set(this, ((0, Sk.l)(this, bw), (0, Sk.l)(this, ww, !1))), iB.set(this, ((0, Sk.l)(this, dw), (0, Sk.l)(this, sw, !1))), YB.set(this, ((0, Sk.l)(this, Vw), (0, Sk.l)(this, Jw, !1))), oB.set(this, ((0, Sk.l)(this, Aw), (0, Sk.l)(this, ew, null))), LB.set(this, ((0, Sk.l)(this, yw), (0, Sk.l)(this, fw, !1))), OB.set(this, ((0, Sk.l)(this, mw), (0, Sk.l)(this, Ww, !1))), EB.set(this, ((0, Sk.l)(this, vw), (0, Sk.l)(this, iw, !0))), SB.set(this, ((0, Sk.l)(this, Yw), (0, Sk.l)(this, ow, !0))), NB.set(this, ((0, Sk.l)(this, Lw), (0, Sk.l)(this, Ow, !1))), HB.set(this, ((0, Sk.l)(this, Ew), (0, Sk.l)(this, Sw, !1))), this._lightingInfos = ((0, Sk.l)(this, Nw), new zk.v(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = ak.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new uk.c(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, uB.set(this, (0, Sk.l)(this, Hw, 0)), this.debugLimit = ((0, Sk.l)(this, uw), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = ak.c.MATERIAL_OPAQUE, this.XN() && !this.XN()?.ne().isWebGPU && this.XN().ne().Uy < 2 && Hk.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), kk._noiseTextures[this.XN().uniqueId] || (kk._noiseTextures[this.XN().uniqueId] = new Mk.f(EF.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.XN(), !1, !0, 1), this.XN().yN.addOnce((() => {
              kk._noiseTextures[this.XN().uniqueId]?.dispose(), delete kk._noiseTextures[this.XN().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), nk.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), nk.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = rk(this.XN()), this._environmentFuzzBRDFTexture = Tk(this.XN()), this.prePassConfiguration = new pk.d, this._propertyList = {};
            for (const kk of Object.getOwnPropertyNames(this)) {
              const Fk = this[kk];
              Fk instanceof KF && (this._propertyList[kk] = Fk)
            }
            Object.keys(this._propertyList).forEach((kk => {
              const Fk = this._propertyList[kk];
              let Bk = this._uniformsList[Fk.targetUniformName];
              Bk ? Bk.numComponents !== Fk.targetUniformComponentNum ? Hk.b.Error(`Uniform ${Fk.targetUniformName} already exists of size ${Bk.numComponents}, but trying to set it to ${Fk.targetUniformComponentNum}.`) : Bk.requiredDefine !== Fk.requiredDefine && (Bk.requiredDefine = void 0) : (Bk = new pF(Fk.targetUniformName, Fk.targetUniformComponentNum), Bk.requiredDefine = Fk.requiredDefine, this._uniformsList[Fk.targetUniformName] = Bk), "" === Bk.firstLinkedKey && (Bk.firstLinkedKey = Fk.name), Bk.linkedProperties[Fk.name] = Fk
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const kk of Object.getOwnPropertyNames(this)) {
              const Fk = this[kk];
              Fk instanceof xF && (this._samplersList[kk] = Fk)
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
            return !!(nk.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(nk.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
            return this._hasAlphaChannel() && this._transparencyMode !== ak.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
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
            let Bk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const tk = OF.c.Clone((() => new kk(Fk, this.XN())), this, {
              cloneTexturesOnlyOnce: Bk
            });
            return tk.id = Fk, tk.name = Fk, this.stencil.copyTo(tk.stencil), this._clonePlugins(tk, Rk), tk
          }
          serialize() {
            const kk = super.serialize();
            return kk.customType = "BABYLON.OpenPBRMaterial", kk
          }
          static Parse(Fk, Bk, Rk) {
            const tk = OF.c.Parse((() => new kk(Fk.name, Bk)), Fk, Bk, Rk);
            return Fk.stencil && tk.stencil.parse(Fk.stencil, Bk, Rk), ak.c._ParsePlugins(Fk, tk, Bk, Rk), tk
          }
          forceCompilation(kk, Fk, Bk) {
            const Rk = {
              clipPlane: !1,
              useInstances: !1,
              ...Bk
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const Bk = new nF({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                tk = this._prepareEffect(kk, kk, Bk, void 0, void 0, Rk.useInstances, Rk.clipPlane);
              this._onEffectCreatedObservable && (CF.effect = tk, CF.subMesh = null, this._onEffectCreatedObservable.notifyObservers(CF)), tk.isReady() ? Fk && Fk(this) : tk.onCompileObservable.add((() => {
                Fk && Fk(this)
              }))
            })()
          }
          isReadyForSubMesh(Fk, Bk, Rk) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const tk = Bk._drawWrapper;
            if (tk.effect && this.isFrozen && tk._wasPreviouslyReady && tk._wasPreviouslyUsingInstances === Rk) return !0;
            Bk.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Bk.materialDefines = new nF({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const ak = Bk.materialDefines;
            if (this._isReadyForSubMesh(Bk)) return !0;
            const Xk = this.XN(),
              bk = Xk.ne();
            if (ak._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Xk.texturesEnabled)) {
              for (const kk in this._samplersList) {
                const Fk = this._samplersList[kk];
                if (Fk.value && !Fk.value.isReadyOrNotBlocking()) return !1
              }
              const Fk = this._getRadianceTexture();
              if (Fk && nk.b.ReflectionTextureEnabled) {
                if (!Fk.isReadyOrNotBlocking()) return !1;
                if (Fk.irradianceTexture) {
                  if (!Fk.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!Fk.sphericalPolynomial && Fk.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && nk.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && nk.b.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && nk.b.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (kk._noiseTextures[Xk.uniqueId] && !kk._noiseTextures[Xk.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = ak, this._eventInfo.subMesh = Bk, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (ak._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (ak.AREALIGHTUSED)
              for (let kk = 0; kk < Fk.lightSources.length; kk++)
                if (!Fk.lightSources[kk]._isReady()) return !1;
            if (bk.getCaps().standardDerivatives || Fk.isVerticesDataPresent(Pk.n.NormalKind) || (Fk.createNormals(!0), Hk.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + Fk.name)), !(0, Qk.c)(Xk, Fk, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const wk = Bk.effect,
              dk = ak._areLightsDisposed,
              sk = this._prepareEffect(Fk, Bk.getRenderingMesh(), ak, this.onCompiled, this.onError, Rk, null);
            let Vk = !1;
            if (sk)
              if (this._onEffectCreatedObservable && (CF.effect = sk, CF.subMesh = Bk, this._onEffectCreatedObservable.notifyObservers(CF)), this.allowShaderHotSwapping && wk && !sk.isReady()) {
                if (ak.markAsUnprocessed(), Vk = this.isFrozen, dk) return ak._areLightsDisposed = !0, !1
              } else Xk.resetCachedMaterial(), Bk.setEffect(sk, ak, this._materialContext);
            return !(!Bk.effect || !Bk.effect.isReady()) && (ak._renderId = Xk.getRenderId(), tk._wasPreviouslyReady = !Vk, tk._wasPreviouslyUsingInstances = !!Rk, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const kk = this._uniformBuffer;
            kk.addUniform("vTangentSpaceParams", 2), kk.addUniform("vLightingIntensity", 4), kk.addUniform("pointSize", 1), kk.addUniform("vDebugMode", 2), kk.addUniform("renderTargetSize", 2), kk.addUniform("cameraInfo", 4), kk.addUniform("vTextureRepetitionHexTilingParams", 4), kk.addUniform("backgroundRefractionMatrix", 16), kk.addUniform("vBackgroundRefractionInfos", 3), (0, Qk.ib)(kk, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((Fk => {
              kk.addUniform(Fk.name, Fk.numComponents)
            })), Object.values(this._samplersList).forEach((Fk => {
              kk.addUniform(Fk.samplerInfoName, 2), kk.addUniform(Fk.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(kk, Fk, Bk, Rk) {
            if (0 === this.geometryThickness) kk.updateFloat("vGeometryThickness", 0);
            else {
              Rk.getRenderingMesh().getWorldMatrix().decompose(zk.l.Qe[0]);
              const Fk = Math.max(Math.abs(zk.l.Qe[0].x), Math.abs(zk.l.Qe[0].y), Math.abs(zk.l.Qe[0].z));
              kk.updateFloat("vGeometryThickness", this.geometryThickness * Fk)
            }
          }
          bindForSubMesh(Fk, Bk, Rk) {
            const tk = this.XN(),
              ak = Rk.materialDefines;
            if (!ak) return;
            const Xk = Rk.effect;
            if (!Xk) return;
            this._activeEffect = Xk, Bk.getMeshUniformBuffer().bindToEffect(Xk, "Mesh"), Bk.transferToEffect(Fk);
            const bk = tk.ne();
            this._uniformBuffer.bindToEffect(Xk, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, tk, Bk, Fk, this.isFrozen), eF.c.Bind(bk.currentRenderPassId, this._activeEffect, Bk, Fk, this);
            const wk = tk.activeCamera;
            wk ? this._uniformBuffer.updateFloat4("cameraInfo", wk.minZ, wk.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const dk = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", dk[0], dk[1], dk[2], dk[3]), this._eventInfo.subMesh = Rk, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), ak.OBJECTSPACE_NORMALMAP && (Fk.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const sk = this._mustRebind(tk, Xk, Rk, Bk.visibility),
              Vk = bk._features.needToAlwaysBindUniformBuffers;
            (0, Qk.g)(Bk, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, JF.e)(this._activeEffect, this._vertexPullingMetadata);
            const Jk = this._uniformBuffer;
            if (sk) {
              this.bindViewProjection(Xk);
              const Fk = this._getRadianceTexture();
              if (!Jk.useUbo || !this.isFrozen || !Jk.isSync || Rk._drawWrapper._forceRebindOnNextCall) {
                if (tk.texturesEnabled) {
                  for (const kk in this._samplersList) {
                    const Fk = this._samplersList[kk];
                    Fk.value && (Jk.updateFloat2(Fk.samplerInfoName, Fk.value.coordinatesIndex, Fk.value.level), (0, Qk.E)(Fk.value, Jk, Fk.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (tk._mirroredCameraPosition ? Jk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Jk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Qk.j)(tk, ak, Jk, Kk.e.White(), Fk, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && Jk.updateFloat("pointSize", this.pointSize);
                const kk = this._uniformsArray;
                for (let Fk = 0, Bk = kk.length; Fk < Bk; Fk++) {
                  const Bk = kk[Fk];
                  (void 0 === Bk.requiredDefine || ak[Bk.requiredDefine]) && (4 === Bk.numComponents ? (Bk.populateVectorFromLinkedProperties(zk.l.Vector4[0]), Jk.updateVector4(Bk.name, zk.l.Vector4[0])) : 3 === Bk.numComponents ? (Bk.populateVectorFromLinkedProperties(zk.l.Qe[0]), Jk.updateVector3(Bk.name, zk.l.Qe[0])) : 2 === Bk.numComponents ? (Bk.populateVectorFromLinkedProperties(zk.l.Vector2[0]), Jk.updateFloat2(Bk.name, zk.l.Vector2[0].x, zk.l.Vector2[0].y)) : 1 === Bk.numComponents && Jk.updateFloat(Bk.name, Bk.linkedProperties[Bk.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * tk.environmentIntensity, this._lightingInfos.w = 1, Jk.updateVector4("vLightingIntensity", this._lightingInfos), Jk.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (tk.texturesEnabled) {
                for (const kk in this._samplersList) {
                  const Fk = this._samplersList[kk];
                  Fk.value && Jk.setTexture(Fk.samplerName, Fk.value)
                }
                if ((0, Qk.n)(tk, ak, Jk, Fk, this.realTimeFiltering), ak.ENVIRONMENTBRDF && Jk.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), ak.FUZZENVIRONMENTBRDF && Jk.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), ak.REFRACTED_BACKGROUND && (Jk.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), Jk.M_("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), zk.l.Qe[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), Jk.updateVector3("vBackgroundRefractionInfos", zk.l.Qe[1])), (ak.ANISOTROPIC || ak.FUZZ || ak.REFRACTED_BACKGROUND || ak.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Jk.setTexture("blueNoiseSampler", kk._noiseTextures[this.XN().uniqueId]), ak.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const kk = this.sssIrradianceTexture.getSize().width,
                    Fk = this.sssIrradianceTexture.getSize().height;
                  Jk.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), Jk.setTexture("sceneDepthSampler", this.sssDepthTexture), Jk.updateFloat2("renderTargetSize", kk, Fk)
                }
              }
              this.XN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Bk) && this.XN().depthPeelingRenderer.bind(Xk), this._eventInfo.subMesh = Rk, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, VF.e)(this._activeEffect, this, tk), this.bindEyePosition(Xk)
            } else Vk && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, tk, tk.ne(), Rk), !sk && this.isFrozen && !Vk || !tk.lightsEnabled || this._disableLighting || (0, Qk.r)(tk, Bk, this._activeEffect, ak, this._maxSimultaneousLights), !sk && this.isFrozen || (this.bindView(Xk), (0, Qk.i)(tk, Bk, this._activeEffect, !0), ak.NUM_MORPH_INFLUENCERS && (0, Qk.x)(Bk, this._activeEffect), ak.BAKED_VERTEX_ANIMATION_TEXTURE && Bk.bakedVertexAnimationManager?.bind(Xk, ak.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Qk.u)(ak, this._activeEffect, tk)), this._afterBind(Bk, this._activeEffect, Rk), Jk.update()
          }
          getAnimatables() {
            const kk = super.getAnimatables();
            for (const Fk in this._samplersList) {
              const Bk = this._samplersList[Fk];
              Bk.value && Bk.value.animations && Bk.value.animations.length > 0 && kk.push(Bk.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && kk.push(this._radianceTexture), kk
          }
          getActiveTextures() {
            const kk = super.getActiveTextures();
            for (const Fk in this._samplersList) {
              const Bk = this._samplersList[Fk];
              Bk.value && kk.push(Bk.value)
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
              this._environmentBRDFTexture && this.XN().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.XN().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const kk in this._samplersList) {
                const Fk = this._samplersList[kk];
                Fk.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(kk, Fk)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.XN().environmentTexture
          }
          _prepareEffect(Fk, Bk, Rk) {
            let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Xk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(Fk, Bk, Rk, Xk, bk), !Rk.isDirty) return null;
            Rk.markAsProcessed();
            const wk = this.XN().ne(),
              dk = new Ik.c;
            let sk = 0;
            Rk.USESPHERICALINVERTEX && dk.addFallback(sk++, "USESPHERICALINVERTEX"), Rk.FOG && dk.addFallback(sk, "FOG"), Rk.SPECULARAA && dk.addFallback(sk, "SPECULARAA"), Rk.POINTSIZE && dk.addFallback(sk, "POINTSIZE"), Rk.LOGARITHMICDEPTH && dk.addFallback(sk, "LOGARITHMICDEPTH"), Rk.PARALLAX && dk.addFallback(sk, "PARALLAX"), Rk.PARALLAX_RHS && dk.addFallback(sk, "PARALLAX_RHS"), Rk.PARALLAXOCCLUSION && dk.addFallback(sk++, "PARALLAXOCCLUSION"), Rk.ENVIRONMENTBRDF && dk.addFallback(sk++, "ENVIRONMENTBRDF"), Rk.TANGENT && dk.addFallback(sk++, "TANGENT"), sk = (0, Qk.I)(Rk, dk, this._maxSimultaneousLights, sk), Rk.SPECULARTERM && dk.addFallback(sk++, "SPECULARTERM"), Rk.USESPHERICALFROMREFLECTIONMAP && dk.addFallback(sk++, "USESPHERICALFROMREFLECTIONMAP"), Rk.USEIRRADIANCEMAP && dk.addFallback(sk++, "USEIRRADIANCEMAP"), Rk.NORMAL && dk.addFallback(sk++, "NORMAL"), Rk.VERTEXCOLOR && dk.addFallback(sk++, "VERTEXCOLOR"), Rk.MORPHTARGETS && dk.addFallback(sk++, "MORPHTARGETS"), Rk.MULTIVIEW && dk.addFallback(0, "MULTIVIEW");
            const Vk = [Pk.n.PositionKind];
            Rk.NORMAL && Vk.push(Pk.n.NormalKind), Rk.TANGENT && Vk.push(Pk.n.TangentKind);
            for (let kk = 1; kk <= 6; ++kk) Rk["UV" + kk] && Vk.push(`uv${1===kk?"":kk}`);
            Rk.VERTEXCOLOR && Vk.push(Pk.n.ColorKind), (0, Qk.M)(Vk, Fk, Rk, dk), (0, Qk.O)(Vk, Rk), (0, Qk.Q)(Vk, Fk, Rk), (0, Qk.L)(Vk, Fk, Rk);
            let Jk = "openpbr";
            const Ak = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const kk in this._uniformsList) Ak.push(kk);
            const ek = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Rk.FUZZENVIRONMENTBRDF && ek.push("environmentFuzzBrdfSampler"), Rk.REFRACTED_BACKGROUND && ek.push("backgroundRefractionSampler"), (Rk.ANISOTROPIC || Rk.FUZZ || Rk.REFRACTED_BACKGROUND || Rk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && ek.push("blueNoiseSampler"), Rk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (ek.push("sceneIrradianceSampler"), ek.push("sceneDepthSampler"));
            for (const kk in this._samplersList) {
              const Fk = this._samplersList[kk];
              ek.push(Fk.samplerName), Ak.push(Fk.samplerInfoName), Ak.push(Fk.samplerMatrixName)
            }(0, Qk.kb)(Ak, ek, !0);
            const yk = ["Material", "Scene", "Mesh"],
              fk = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Rk.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = dk, this._eventInfo.fallbackRank = sk, this._eventInfo.defines = Rk, this._eventInfo.uniforms = Ak, this._eventInfo.attributes = Vk, this._eventInfo.samplers = ek, this._eventInfo.uniformBuffersNames = yk, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Fk, this._eventInfo.indexParameters = fk, this._callbackPluginEventGeneric(128, this._eventInfo), eF.c.AddUniformsAndSamplers(Ak, ek), pk.d.AddUniforms(Ak), pk.d.AddSamplers(ek), (0, VF.b)(Ak), this._useVertexPulling) {
              const kk = Bk?.geometry;
              kk && (this._vertexPullingMetadata = (0, JF.f)(kk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, Fk) => {
                Ak.push(`vp_${Fk}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            jk.b && (jk.b.PrepareUniforms(Ak, Rk), jk.b.PrepareSamplers(ek, Rk)), (0, Qk.ob)({
              uniformsNames: Ak,
              uniformBuffersNames: yk,
              samplers: ek,
              defines: Rk,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const mk = {};
            this.customShaderNameResolve && (Jk = this.customShaderNameResolve(Jk, Ak, yk, ek, Rk, Vk, mk));
            const Wk = Rk.toString(),
              vk = wk.createEffect(Jk, {
                attributes: Vk,
                uniformsNames: Ak,
                uniformBuffersNames: yk,
                samplers: ek,
                defines: Wk,
                fallbacks: dk,
                onCompiled: tk,
                onError: ak,
                indexParameters: fk,
                processFinalCode: mk.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Rk.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: kk._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, wk);
            return this._eventInfo.customCode = void 0, vk
          }
          _prepareDefines(Fk, Bk, Rk) {
            let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Xk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const bk = Bk.hasThinInstances,
              wk = this.XN(),
              dk = wk.ne();
            (0, Qk.Z)(wk, Fk, Rk, !0, this._maxSimultaneousLights, this._disableLighting), Rk._needNormals = !0, (0, Qk.cb)(wk, Rk);
            const sk = this.needAlphaBlendingForMesh(Fk) && this.XN().useOrderIndependentTransparency;
            if ((0, Qk.hb)(wk, Rk, this.canRenderToMRT && !sk), (0, Qk.eb)(wk, Rk, sk), eF.c.PrepareDefines(dk.currentRenderPassId, Fk, Rk), Rk._areTexturesDirty) {
              Rk._needUVs = !1;
              for (let kk = 1; kk <= 6; ++kk) Rk["MAINUV" + kk] = !1;
              if (wk.texturesEnabled) {
                for (const Bk in this._samplersList) {
                  const kk = this._samplersList[Bk];
                  kk.value ? ((0, Qk._)(kk.value, Rk, kk.textureDefine), Rk[kk.textureDefine + "_GAMMA"] = kk.value.gammaSpace) : Rk[kk.textureDefine] = !1
                }
                const kk = this._getRadianceTexture(),
                  Fk = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || dk.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, Qk.X)(wk, kk, Rk, this.realTimeFiltering, this.realTimeFilteringQuality, !Fk), this._baseMetalnessTexture && (Rk.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Rk.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Rk.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Rk.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Rk.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Rk.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Rk.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Rk.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Rk.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Rk.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Rk.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Rk.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && nk.b.DiffuseTextureEnabled ? (Rk.PARALLAX = !0, Rk.PARALLAX_RHS = wk.useRightHandedSystem, Rk.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Rk.PARALLAX = !1, Rk.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Rk.PARALLAX = !1, Rk.PARALLAX_RHS = !1, Rk.PARALLAXOCCLUSION = !1, Rk.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && nk.b.ReflectionTextureEnabled ? (Rk.ENVIRONMENTBRDF = !0, Rk.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Rk.ENVIRONMENTBRDF = !1, Rk.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Rk.FUZZENVIRONMENTBRDF = !0 : Rk.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Rk.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && nk.b.RefractionTextureEnabled, Rk.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Rk.REFRACTED_LIGHTS = !0;
                  const kk = this._getRadianceTexture();
                  kk ? (Rk.REFRACTED_ENVIRONMENT = nk.b.RefractionTextureEnabled, Rk.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.XN().useRightHandedSystem ? !kk.invertZ : kk.invertZ, Rk.REFRACTED_ENVIRONMENT_LOCAL_CUBE = kk.isCube && kk.boundingBoxSize) : Rk.REFRACTED_ENVIRONMENT = !1
                } else Rk.REFRACTED_BACKGROUND = !1, Rk.REFRACTED_LIGHTS = !1, Rk.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Rk.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Rk.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === ak.c.LIGHTFALLOFF_STANDARD ? (Rk.USEPHYSICALLIGHTFALLOFF = !1, Rk.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === ak.c.LIGHTFALLOFF_GLTF ? (Rk.USEPHYSICALLIGHTFALLOFF = !1, Rk.USEGLTFLIGHTFALLOFF = !0) : (Rk.USEPHYSICALLIGHTFALLOFF = !0, Rk.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Rk.TWOSIDEDLIGHTING = !0 : Rk.TWOSIDEDLIGHTING = !1, Rk.MIRRORED = !!wk._mirroredCameraPosition, Rk.SPECULARAA = dk.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Rk._areTexturesDirty || Rk._areMiscDirty) && (Rk.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Rk.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Rk.ALPHABLEND = this.needAlphaBlendingForMesh(Fk)), Rk._areTexturesDirty && (Rk.TEXTURE_REPETITION_MODE = dk.version > 1 || dk.isWebGPU ? this.textureRepetitionMode : 0), Rk._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Rk), Rk.FORCENORMALFORWARD = this._forceNormalForward, Rk.RADIANCEOCCLUSION = this._useRadianceOcclusion, Rk.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && kk._noiseTextures[wk.uniqueId] && nk.b.ReflectionTextureEnabled ? (Rk.ANISOTROPIC = !0, Fk.isVerticesDataPresent(Pk.n.TangentKind) || (Rk._needUVs = !0, Rk.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Rk.USE_GLTF_STYLE_ANISOTROPY = !0), Rk.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Rk.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Rk.ANISOTROPIC = !1, Rk.USE_GLTF_STYLE_ANISOTROPY = !1, Rk.ANISOTROPIC_BASE = !1, Rk.ANISOTROPIC_COAT = !1), Rk.THIN_FILM = this.thinFilmWeight > 0, Rk.IRIDESCENCE = this.thinFilmWeight > 0, Rk.DISPERSION = this.transmissionDispersionScale > 0, Rk.SCATTERING = this.hasScattering;
            if (Rk.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Rk.TRANSMISSION_SLAB = this.transmissionWeight > 0, Rk.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Rk.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Rk.PREPASS && (Rk.SUBSURFACE_SLAB || Rk.TRANSMISSION_SLAB_VOLUME)) {
              let kk = !1;
              if (!this.sssIrradianceTexture && wk.geometryBufferRenderer) {
                const Fk = wk.geometryBufferRenderer.getTextureIndex(hF.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = wk.geometryBufferRenderer.getGBuffer().textures[Fk], kk = !0
              }
              if (!this.sssDepthTexture && wk.geometryBufferRenderer) {
                const Fk = wk.geometryBufferRenderer.getTextureIndex(hF.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = wk.geometryBufferRenderer.getGBuffer().textures[Fk], kk = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Rk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, kk && (Rk.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Rk.FUZZ = this.fuzzWeight > 0 && nk.b.ReflectionTextureEnabled, Rk.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Rk.FUZZ ? (Fk.isVerticesDataPresent(Pk.n.TangentKind) || (Rk._needUVs = !0, Rk.MAINUV1 = !0), this._environmentFuzzBRDFTexture = Tk(this.XN()), Rk.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Rk.FUZZENVIRONMENTBRDF = !1, Rk.FUZZ_IBL_SAMPLES = 0), Rk._areMiscDirty && ((0, Qk.ab)(Fk, wk, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Fk), Rk, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Bk, this._isVertexOutputInvariant), Rk.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Fk.isVerticesDataPresent(Pk.n.NormalKind), Rk.DEBUGMODE = this._debugMode), (0, Qk.V)(wk, dk, this, Rk, !!tk, Xk, bk), this._eventInfo.defines = Rk, this._eventInfo.mesh = Fk, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Qk.T)(Fk, Rk, !0, !0, !0, this._transparencyMode !== ak.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, Fk = new WeakMap, Rk = new WeakMap, tk = new WeakMap, Xk = new WeakMap, bk = new WeakMap, wk = new WeakMap, dk = new WeakMap, sk = new WeakMap, Vk = new WeakMap, Jk = new WeakMap, Ak = new WeakMap, ek = new WeakMap, yk = new WeakMap, fk = new WeakMap, mk = new WeakMap, Wk = new WeakMap, vk = new WeakMap, ik = new WeakMap, Yk = new WeakMap, Lk = new WeakMap, Ok = new WeakMap, Ek = new WeakMap, gk = new WeakMap, Uk = new WeakMap, ck = new WeakMap, Gk = new WeakMap, Dk = new WeakMap, hk = new WeakMap, qk = new WeakMap, Ck = new WeakMap, Zk = new WeakMap, xk = new WeakMap, lk = new WeakMap, kF = new WeakMap, FF = new WeakMap, BF = new WeakMap, RF = new WeakMap, tF = new WeakMap, aF = new WeakMap, XF = new WeakMap, bF = new WeakMap, wF = new WeakMap, dF = new WeakMap, sF = new WeakMap, yF = new WeakMap, fF = new WeakMap, mF = new WeakMap, WF = new WeakMap, vF = new WeakMap, iF = new WeakMap, YF = new WeakMap, oF = new WeakMap, LF = new WeakMap, SF = new WeakMap, NF = new WeakMap, HF = new WeakMap, uF = new WeakMap, MF = new WeakMap, gF = new WeakMap, UF = new WeakMap, cF = new WeakMap, GF = new WeakMap, TF = new WeakMap, rF = new WeakMap, DF = new WeakMap, zF = new WeakMap, PF = new WeakMap, qF = new WeakMap, ZF = new WeakMap, jF = new WeakMap, lF = new WeakMap, QF = new WeakMap, kB = new WeakMap, FB = new WeakMap, BB = new WeakMap, RB = new WeakMap, tB = new WeakMap, aB = new WeakMap, XB = new WeakMap, bB = new WeakMap, wB = new WeakMap, dB = new WeakMap, sB = new WeakMap, VB = new WeakMap, JB = new WeakMap, AB = new WeakMap, eB = new WeakMap, yB = new WeakMap, fB = new WeakMap, mB = new WeakMap, WB = new WeakMap, vB = new WeakMap, iB = new WeakMap, YB = new WeakMap, oB = new WeakMap, LB = new WeakMap, OB = new WeakMap, EB = new WeakMap, SB = new WeakMap, NB = new WeakMap, HB = new WeakMap, uB = new WeakMap, (() => {
          const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ut[Symbol.metadata] ?? null) : void 0;
          MB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], gB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], UB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], cB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], GB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], TB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], rB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], DB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], zB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], PB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], hB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], CB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], ZB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], pB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], KB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], xB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], jB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], lB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], nB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], IB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], QB = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], kR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], FR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], BR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], RR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], tR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], aR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], XR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], bR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], wR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], dR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], sR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], VR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], JR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], AR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], eR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], yR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], fR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], mR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], WR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], vR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], iR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], YR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], oR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], LR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], OR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], ER = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], SR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], NR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], HR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], uR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], MR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], gR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], UR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], cR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], GR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], TR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], rR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], DR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], zR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], PR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], hR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], qR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], CR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], ZR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], pR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], KR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], xR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], jR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], lR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], nR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], IR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], QR = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], kt = [(0, Nk.c)("_markAllSubMeshesAsTexturesDirty")], Ft = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Bt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Rt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], tt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Xt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], bt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], wt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], dt = [(0, Nk.M)()], st = [(0, Nk.M)()], Vt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Jt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], At = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], et = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], yt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsLightsDirty")], ft = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], mt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsLightsDirty")], Wt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], vt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], it = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Yt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], ot = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Lt = [(0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Ot = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Et = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], St = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Nt = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], Ht = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], ut = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], Mt = [(0, Nk.d)("_markAllSubMeshesAsMiscDirty")], gt = [(0, Nk.M)()], (0, Sk.j)(kk, null, MB, {
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
          }, Gt, Tt), (0, Sk.j)(kk, null, gB, {
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
          }, rt, Dt), (0, Sk.j)(kk, null, UB, {
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
          }, zt, Pt), (0, Sk.j)(kk, null, cB, {
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
          }, ht, qt), (0, Sk.j)(kk, null, GB, {
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
          }, Ct, Zt), (0, Sk.j)(kk, null, TB, {
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
          }, pt, Kt), (0, Sk.j)(kk, null, rB, {
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
          }, xt, jt), (0, Sk.j)(kk, null, DB, {
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
          }, lt, nt), (0, Sk.j)(kk, null, zB, {
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
          }, It, Qt), (0, Sk.j)(kk, null, PB, {
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
          }, ka, Fa), (0, Sk.j)(kk, null, hB, {
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
          }, Ba, Ra), (0, Sk.j)(kk, null, qB, {
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
          }, ta, aa), (0, Sk.j)(kk, null, CB, {
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
          }, Xa, ba), (0, Sk.j)(kk, null, ZB, {
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
          }, wa, da), (0, Sk.j)(kk, null, pB, {
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
          }, sa, Va), (0, Sk.j)(kk, null, KB, {
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
          }, Ja, Aa), (0, Sk.j)(kk, null, xB, {
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
          }, ea, ya), (0, Sk.j)(kk, null, jB, {
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
          }, fa, ma), (0, Sk.j)(kk, null, lB, {
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
          }, Wa, va), (0, Sk.j)(kk, null, nB, {
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
          }, ia, Ya), (0, Sk.j)(kk, null, IB, {
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
          }, oa, La), (0, Sk.j)(kk, null, QB, {
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
          }, Oa, Ea), (0, Sk.j)(kk, null, kR, {
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
          }, Sa, Na), (0, Sk.j)(kk, null, FR, {
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
          }, Ha, ua), (0, Sk.j)(kk, null, BR, {
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
          }, Ma, ga), (0, Sk.j)(kk, null, RR, {
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
          }, Ua, ca), (0, Sk.j)(kk, null, tR, {
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
          }, Ga, Ta), (0, Sk.j)(kk, null, aR, {
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
          }, ra, Da), (0, Sk.j)(kk, null, XR, {
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
          }, za, Pa), (0, Sk.j)(kk, null, bR, {
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
          }, ha, qa), (0, Sk.j)(kk, null, wR, {
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
          }, Ca, Za), (0, Sk.j)(kk, null, dR, {
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
          }, pa, Ka), (0, Sk.j)(kk, null, sR, {
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
          }, xa, ja), (0, Sk.j)(kk, null, VR, {
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
          }, la, na), (0, Sk.j)(kk, null, JR, {
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
          }, Ia, Qa), (0, Sk.j)(kk, null, AR, {
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
          }, kX, FX), (0, Sk.j)(kk, null, eR, {
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
          }, BX, RX), (0, Sk.j)(kk, null, yR, {
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
          }, tX, aX), (0, Sk.j)(kk, null, fR, {
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
          }, XX, bX), (0, Sk.j)(kk, null, mR, {
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
          }, wX, dX), (0, Sk.j)(kk, null, WR, {
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
          }, sX, VX), (0, Sk.j)(kk, null, vR, {
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
          }, JX, AX), (0, Sk.j)(kk, null, iR, {
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
          }, eX, yX), (0, Sk.j)(kk, null, YR, {
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
          }, fX, mX), (0, Sk.j)(kk, null, oR, {
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
          }, WX, vX), (0, Sk.j)(kk, null, LR, {
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
          }, iX, YX), (0, Sk.j)(kk, null, OR, {
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
          }, oX, LX), (0, Sk.j)(kk, null, ER, {
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
          }, OX, EX), (0, Sk.j)(kk, null, SR, {
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
          }, SX, NX), (0, Sk.j)(kk, null, NR, {
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
          }, HX, uX), (0, Sk.j)(kk, null, HR, {
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
          }, MX, gX), (0, Sk.j)(kk, null, uR, {
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
          }, UX, cX), (0, Sk.j)(kk, null, MR, {
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
          }, GX, TX), (0, Sk.j)(kk, null, gR, {
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
          }, rX, DX), (0, Sk.j)(kk, null, UR, {
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
          }, zX, PX), (0, Sk.j)(kk, null, cR, {
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
          }, hX, qX), (0, Sk.j)(kk, null, GR, {
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
          }, CX, ZX), (0, Sk.j)(kk, null, TR, {
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
          }, pX, KX), (0, Sk.j)(kk, null, rR, {
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
          }, xX, jX), (0, Sk.j)(kk, null, DR, {
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
          }, lX, nX), (0, Sk.j)(kk, null, zR, {
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
          }, IX, QX), (0, Sk.j)(kk, null, PR, {
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
          }, kb, Fb), (0, Sk.j)(kk, null, hR, {
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
          }, Bb, Rb), (0, Sk.j)(kk, null, qR, {
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
          }, tb, ab), (0, Sk.j)(kk, null, CR, {
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
          }, Xb, bb), (0, Sk.j)(kk, null, ZR, {
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
          }, wb, db), (0, Sk.j)(kk, null, pR, {
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
          }, sb, Vb), (0, Sk.j)(kk, null, KR, {
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
          }, Jb, Ab), (0, Sk.j)(kk, null, xR, {
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
          }, eb, yb), (0, Sk.j)(kk, null, jR, {
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
          }, fb, mb), (0, Sk.j)(kk, null, lR, {
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
          }, Wb, vb), (0, Sk.j)(kk, null, nR, {
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
          }, ib, Yb), (0, Sk.j)(kk, null, IR, {
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
          }, ob, Lb), (0, Sk.j)(kk, null, QR, {
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
          }, Ob, Eb), (0, Sk.j)(kk, null, kt, {
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
          }, Sb, Nb), (0, Sk.j)(kk, null, Ft, {
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
          }, Hb, ub), (0, Sk.j)(kk, null, Bt, {
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
          }, Mb, gb), (0, Sk.j)(kk, null, Rt, {
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
          }, Ub, cb), (0, Sk.j)(kk, null, tt, {
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
          }, Gb, Tb), (0, Sk.j)(kk, null, Xt, {
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
          }, rb, Db), (0, Sk.j)(kk, null, bt, {
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
          }, zb, Pb), (0, Sk.j)(kk, null, wt, {
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
          }, hb, qb), (0, Sk.j)(kk, null, dt, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: kk => "usePhysicalLightFalloff" in kk,
              get: kk => kk.usePhysicalLightFalloff
            },
            metadata: Fk
          }, null, ct), (0, Sk.j)(kk, null, st, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: kk => "useGLTFLightFalloff" in kk,
              get: kk => kk.useGLTFLightFalloff
            },
            metadata: Fk
          }, null, ct), (0, Sk.j)(kk, null, Vt, {
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
          }, Cb, Zb), (0, Sk.j)(kk, null, Jt, {
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
          }, pb, Kb), (0, Sk.j)(kk, null, At, {
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
          }, xb, jb), (0, Sk.j)(kk, null, et, {
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
          }, lb, nb), (0, Sk.j)(kk, null, yt, {
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
          }, Ib, Qb), (0, Sk.j)(kk, null, ft, {
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
          }, kw, Fw), (0, Sk.j)(kk, null, mt, {
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
          }, Bw, Rw), (0, Sk.j)(kk, null, Wt, {
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
          }, tw, aw), (0, Sk.j)(kk, null, vt, {
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
          }, Xw, bw), (0, Sk.j)(kk, null, it, {
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
          }, ww, dw), (0, Sk.j)(kk, null, Yt, {
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
          }, sw, Vw), (0, Sk.j)(kk, null, ot, {
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
          }, Jw, Aw), (0, Sk.j)(kk, null, Lt, {
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
          }, ew, yw), (0, Sk.j)(kk, null, Ot, {
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
          }, fw, mw), (0, Sk.j)(kk, null, Et, {
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
          }, Ww, vw), (0, Sk.j)(kk, null, St, {
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
          }, iw, Yw), (0, Sk.j)(kk, null, Nt, {
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
          }, ow, Lw), (0, Sk.j)(kk, null, Ht, {
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
          }, Ow, Ew), (0, Sk.j)(kk, null, ut, {
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
          }, Sw, Nw), (0, Sk.j)(kk, null, Mt, {
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
          }, Hw, uw), (0, Sk.j)(kk, null, gt, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: kk => "transparencyMode" in kk,
              get: kk => kk.transparencyMode
            },
            metadata: Fk
          }, null, ct), Fk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fk
          })
        })(), kk.SSS_QUALITY_LOW = 0, kk.SSS_QUALITY_MEDIUM = 1, kk.SSS_QUALITY_HIGH = 2, kk._noiseTextures = {}, kk.ForceGLSL = !1, kk._ShaderLoader = new AF.d((() => [Promise.all([Bk.e(307), Bk.e(373)]).then((() => Bk(61499))), Promise.all([Bk.e(312), Bk.e(308), Bk.e(372), Bk.e(377)]).then((() => Bk(61515)))]), (() => [Promise.all([Bk.e(326), Bk.e(328), Bk.e(376)]).then((() => Bk(61555))), Promise.all([Bk.e(326), Bk.e(329), Bk.e(375), Bk.e(378)]).then((() => Bk(61568)))])), kk
      })(),
      kB = !1;
    kB || (kB = !0, (0, jk.d)(), (0, qF.d)("BABYLON.OpenPBRMaterial", QF));
    var FB = Bk(36781);
    class BB {
      constructor(kk) {
        this.name = GF.b.NAME_PROCEDURALTEXTURE, this.ef = kk
      }
      register() {
        this.ef._beforeClearStage.registerStep(GF.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.ef.proceduralTexturesEnabled) {
          EF.h.StartPerformanceCounter("Procedural textures", this.ef.proceduralTextures.length > 0);
          for (let kk = 0; kk < this.ef.proceduralTextures.length; kk++) {
            const Fk = this.ef.proceduralTextures[kk];
            Fk._shouldRender() && Fk.render()
          }
          EF.h.EndPerformanceCounter("Procedural textures", this.ef.proceduralTextures.length > 0)
        }
      }
    }
    var RB = Bk(39733);
    let tB = (() => {
      var kk;
      let Fk, Rk, tk, Xk, bk, wk = Mk.f,
        dk = [],
        sk = [],
        Vk = [],
        Jk = [],
        Ak = [],
        ek = [],
        fk = [],
        mk = [],
        Wk = [];
      return kk = class extends wk {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(kk, Fk, Bk, Rk) {
          let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            ak = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Rk, !ak), this.isEnabled = ((0, Sk.l)(this, dk), (0, Sk.l)(this, sk, !0)), this.autoClear = ((0, Sk.l)(this, Vk), (0, Sk.l)(this, Jk, !0)), this.onGenerated = (0, Sk.l)(this, Ak), this.onGeneratedObservable = new FB.e, this.onBeforeGenerationObservable = new FB.e, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, Sk.l)(this, ek, void 0), this._drawWrapper = (0, Sk.l)(this, fk), this._textures = {}, this._size = (0, Sk.l)(this, mk, void 0), this._textureType = (0, Sk.l)(this, Wk), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === tk || tk instanceof Mk.f ? (this._options = {}, this._fallbackTexture = tk) : (this._options = tk, this._fallbackTexture = tk.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let wk = (Rk = this.XN() || yk.c.LastCreatedScene)._getComponent(GF.b.NAME_PROCEDURALTEXTURE);
          wk || (wk = new BB(Rk), Rk.SBk(wk)), this._options.skipSceneRegistration || Rk.proceduralTextures.push(this), this._fullEngine = Rk.ne(), this.name = kk, this.isRenderTarget = !0, this._size = Fk, this._textureType = bk, this._generateMipMaps = ak, this._drawWrapper = new RB.c(this._fullEngine), this.setFragment(Bk);
          const vk = this._createRtWrapper(Xk, Fk, ak, bk);
          this._texture = vk.texture;
          const ik = [];
          ik.push(1, 1), ik.push(-1, 1), ik.push(-1, -1), ik.push(1, -1), this._vertexBuffers[Pk.n.PositionKind] = new Pk.n(this._fullEngine, ik, Pk.n.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(kk, Fk, Bk, Rk) {
          return kk ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(Fk, {
            generateMipMaps: Bk,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Rk,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(Fk, {
            generateMipMaps: Bk,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Rk,
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
          const kk = this._vertexBuffers[Pk.n.PositionKind];
          kk && kk._rebuild(), this._createIndexBuffer(), this.refreshRate === SF.d.REFRESHRATE_RENDER_ONCE && (this.refreshRate = SF.d.REFRESHRATE_RENDER_ONCE)
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
          const Rk = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== Fk && (this._cachedDefines = Fk, this._drawWrapper.effect = kk.createEffect(Rk, [Pk.n.PositionKind], this._uniforms, this._samplers, Fk, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([Bk.e(381).then((() => Bk(61637))), this._options.extraInitializationsAsync()]) : await Promise.all([Bk.e(382).then((() => Bk(61640))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await Bk.e(381).then((() => Bk(61637))) : await Bk.e(382).then((() => Bk(61640)))
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
          const Bk = this._texture.isCube;
          this._rtWrapper.dispose();
          const Rk = this._createRtWrapper(Bk, kk, Fk, this._textureType);
          this._texture = Rk.texture, this._size = kk, this._generateMipMaps = Fk
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
          const Fk = this.XN();
          if (!Fk) return;
          const Bk = this._fullEngine;
          if (Bk.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), Bk.setState(!1), !this.nodeMaterialSource) {
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
          Bk._enableGPUDebugMarkers && Bk._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Rk = Bk.currentViewport;
          if (this.isCube)
            for (let tk = 0; tk < 6; tk++) Bk.bindFramebuffer(this._rtWrapper, tk, void 0, void 0, !0), Bk.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", tk), this.autoClear && Bk.clear(Fk.clearColor, !0, !1, !1), Bk.drawElementsType(ak.c.TriangleFillMode, 0, 6), Bk.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let kk = 1;
            this._rtWrapper.is3D ? kk = this._rtWrapper.depth : this._rtWrapper.is2DArray && (kk = this._rtWrapper.layers);
            for (let Rk = 0; Rk < kk; Rk++) {
              if (Bk.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Rk), Bk.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== kk ? Rk / (kk - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Rk);
                for (const kk in this._textures) this._drawWrapper.effect.setTexture(kk, this._textures[kk])
              }
              this.autoClear && Bk.clear(Fk.clearColor, !0, !1, !1), Bk.drawElementsType(ak.c.TriangleFillMode, 0, 6), Bk.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Rk && Bk.setViewport(Rk), this.isCube && Bk.generateMipMapsForCubemap(this._texture, !0), Bk._enableGPUDebugMarkers && Bk._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const Fk = this.getSize(),
            Bk = new kk(this.name, Fk.width, this._fragment, this.XN(), this._fallbackTexture, this._generateMipMaps);
          return Bk.hasAlpha = this.hasAlpha, Bk.level = this.level, Bk.coordinatesMode = this.coordinatesMode, Bk
        }
        dispose() {
          const kk = this.XN();
          if (!kk) return;
          const Fk = kk.proceduralTextures.indexOf(this);
          Fk >= 0 && kk.proceduralTextures.splice(Fk, 1);
          const Bk = this._vertexBuffers[Pk.n.PositionKind];
          Bk && (Bk.dispose(), this._vertexBuffers[Pk.n.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const Bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(wk[Symbol.metadata] ?? null) : void 0;
        Fk = [(0, Nk.M)()], Rk = [(0, Nk.M)()], tk = [(0, Nk.M)()], Xk = [(0, Nk.M)()], bk = [(0, Nk.M)()], (0, Sk.j)(kk, null, bk, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: kk => "refreshRate" in kk,
            get: kk => kk.refreshRate
          },
          metadata: Bk
        }, null, dk), (0, Sk.j)(null, null, Fk, {
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
          metadata: Bk
        }, sk, Vk), (0, Sk.j)(null, null, Rk, {
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
          metadata: Bk
        }, Jk, Ak), (0, Sk.j)(null, null, tk, {
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
          metadata: Bk
        }, ek, fk), (0, Sk.j)(null, null, Xk, {
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
          metadata: Bk
        }, mk, Wk), Bk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bk
        })
      })(), kk
    })();

    function aB(kk) {
      return "texture" in kk
    }

    function XB(kk) {
      return "value" in kk
    }
    async function bB(kk, Fk, Rk) {
      const tk = [Fk.red, Fk.green, Fk.blue, Fk.alpha],
        ak = [],
        Xk = [];
      for (let Bk = 0; Bk < 4; Bk++) {
        const kk = tk[Bk];
        if (kk)
          if (aB(kk)) {
            if (kk.sourceChannel < 0 || kk.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let Fk = ak.indexOf(kk.texture); - 1 === Fk && (Fk = ak.length, ak.push(kk.texture)), Xk[Bk] = Fk
          } else {
            if (!XB(kk)) throw new Error("Invalid channel input configuration");
            if (kk.value < 0 || kk.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            Xk[Bk] = -1
          }
        else Xk[Bk] = -1
      }
      let bk = Fk.outputSize;
      if (!bk && ak.length > 0) {
        let kk = 0;
        for (const Fk of ak) {
          const Bk = Fk.getSize(),
            Rk = Math.max(Bk.width, Bk.height);
          Rk > kk && (kk = Rk, bk = Bk.width === Bk.height ? kk : Bk)
        }
      }
      bk = bk || 512;
      const wk = [],
        dk = new Set;
      for (let Bk = 0; Bk < 4; Bk++) {
        const kk = tk[Bk],
          Fk = ["RED", "GREEN", "BLUE", "ALPHA"][Bk];
        if (kk && aB(kk)) {
          wk.push(`${Fk}_FROM_TEXTURE`);
          const kk = Xk[Bk];
          dk.add(kk)
        }
      }
      dk.forEach((kk => {
        wk.push(`USE_TEXTURE${kk}`)
      }));
      const sk = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Rk.ne().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Rk.ne().isWebGPU ? await Promise.all([Bk.e(379).then((() => Bk(61626)))]) : await Promise.all([Bk.e(380).then((() => Bk(61629)))])
          },
          skipSceneRegistration: !0
        },
        Vk = new tB(kk, bk, "textureMerger", Rk, sk);
      Vk.refreshRate = -1, Vk.defines = wk.length > 0 ? "#define " + wk.join("\n#define ") + "\n" : "";
      for (let Bk = 0; Bk < ak.length; Bk++) Jk = ak[Bk], (Ak = Vk).uOffset = Jk.uOffset, Ak.vOffset = Jk.vOffset, Ak.uScale = Jk.uScale, Ak.vScale = Jk.vScale, Ak.uAng = Jk.uAng, Ak.vAng = Jk.vAng, Ak.wAng = Jk.wAng, Ak.uRotationCenter = Jk.uRotationCenter, Ak.vRotationCenter = Jk.vRotationCenter, Vk.setTexture(`inputTexture${Bk}`, ak[Bk]);
      var Jk, Ak;
      for (let Bk = 0; Bk < 4; Bk++) {
        const kk = tk[Bk],
          Fk = ["red", "green", "blue", "alpha"][Bk];
        if (kk && aB(kk)) {
          const Rk = Xk[Bk];
          Vk.setInt(`${Fk}TextureIndex`, Rk), Vk.setInt(`${Fk}SourceChannel`, kk.sourceChannel)
        } else {
          let Rk;
          Rk = kk && XB(kk) ? kk.value : 3 === Bk ? 1 : 0, Vk.setFloat(`${Fk}ConstantValue`, Rk)
        }
      }
      return await new Promise(((kk, Fk) => {
        Vk.executeWhenReady((() => {
          try {
            Vk.render(), kk(Vk)
          } catch (Bk) {
            Fk(Bk instanceof Error ? Bk : new Error(String(Bk)))
          }
        }))
      }))
    }

    function wB(kk, Fk) {
      return {
        texture: kk,
        sourceChannel: Fk
      }
    }

    function dB(kk) {
      return {
        value: kk
      }
    }

    function sB(kk, Fk, Bk, Rk) {
      return {
        red: kk,
        green: Fk,
        blue: Bk,
        alpha: Rk
      }
    }
    var VB = Bk(39245),
      JB = Bk(39323),
      AB = Bk(36770),
      eB = Bk(39375),
      yB = Bk(39313);
    class fB {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class mB extends VB.d {
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
        return !!this._options?.enableMultiview || this.Uy > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new fB;
        super(null), void 0 === kk.deterministicLockstep && (kk.deterministicLockstep = !1), void 0 !== kk.timeStep && (this._timeStep = kk.timeStep), void 0 === kk.lockstepMaxSteps && (kk.lockstepMaxSteps = 4), this._options = kk, AB.e.SetMatrixPrecision(!!kk.useHighPrecisionMatrix), this._caps = {
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
        }, kk.renderingCanvas && (this._renderingCanvas = kk.renderingCanvas), Hk.b.Log(`Babylon.js v${VB.d.Version} - Null engine`);
        const Fk = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (Fk.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (Fk.Blob = function() {})
      }
      createVertexBuffer(kk) {
        const Fk = new JB.d;
        return Fk.references = 1, Fk
      }
      createIndexBuffer(kk) {
        const Fk = new JB.d;
        return Fk.references = 1, Fk
      }
      clear(kk, Fk, Bk) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(kk, Fk, Bk) {
        this._cachedViewport = kk
      }
      createUniformBuffer(kk) {
        const Fk = new JB.d;
        return Fk.references = 1, Fk.KV = kk instanceof Array ? kk.length * Float32Array.BYTES_PER_ELEMENT : kk.byteLength, Fk
      }
      createDynamicUniformBuffer(kk) {
        return this.createUniformBuffer(kk)
      }
      updateUniformBuffer(kk, Fk, Bk, Rk) {}
      bindUniformBufferBase(kk, Fk, Bk) {}
      bindUniformBlock(kk, Fk, Bk) {}
      createShaderProgram(kk, Fk, Bk, Rk, tk) {
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
        kk = null !== kk && (0, yB.c)(kk) ? kk.effect : kk, this._currentEffect = kk, kk && (kk.onBind && kk.onBind(kk), kk._onBindObservable && kk._onBindObservable.notifyObservers(kk))
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
      setFloat2(kk, Fk, Bk) {
        return !0
      }
      setFloat3(kk, Fk, Bk, Rk) {
        return !0
      }
      setBool(kk, Fk) {
        return !0
      }
      setFloat4(kk, Fk, Bk, Rk, tk) {
        return !0
      }
      setAlphaMode(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[Bk] !== kk && (this.alphaState.setAlphaBlend(0 !== kk, 0), Fk || this.setDepthWrite(0 === kk), this._alphaMode[Bk] = kk)
      }
      bindBuffers(kk, Fk, Bk) {}
      wipeCaches(kk) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, kk && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(kk, Fk, Bk, Rk) {}
      drawElementsType(kk, Fk, Bk, Rk) {}
      drawArraysType(kk, Fk, Bk, Rk) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(kk) {}
      createTexture(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Xk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          bk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const wk = new NF.c(this, 1),
          dk = String(kk);
        return wk.url = dk, wk.generateMipMaps = !Fk, wk.samplingMode = tk, wk.invertY = Bk, wk.baseWidth = this._options.textureSize, wk.baseHeight = this._options.textureSize, wk.width = this._options.textureSize, wk.height = this._options.textureSize, bk && (wk.format = bk), Xk && (wk._buffer = Xk), wk.isReady = !0, ak && setTimeout((() => {
          ak(wk)
        })), this._internalTexturesCache.push(wk), wk
      }
      _createHardwareRenderTargetWrapper(kk, Fk, Bk) {
        const Rk = new eB.d(kk, Fk, Bk, this);
        return this._renderTargetWrapperCache.push(Rk), Rk
      }
      createRenderTargetTexture(kk, Fk) {
        const Bk = this._createHardwareRenderTargetWrapper(!1, !1, kk),
          Rk = {};
        void 0 !== Fk && "object" === typeof Fk ? (Rk.generateMipMaps = Fk.generateMipMaps, Rk.generateDepthBuffer = void 0 === Fk.generateDepthBuffer || Fk.generateDepthBuffer, Rk.generateStencilBuffer = Rk.generateDepthBuffer && Fk.generateStencilBuffer, Rk.type = void 0 === Fk.type ? 0 : Fk.type, Rk.samplingMode = void 0 === Fk.samplingMode ? 3 : Fk.samplingMode) : (Rk.generateMipMaps = Fk, Rk.generateDepthBuffer = !0, Rk.generateStencilBuffer = !1, Rk.type = 0, Rk.samplingMode = 3);
        const tk = new NF.c(this, 5);
        Bk.setTexture(tk);
        const ak = kk.width || kk,
          Xk = kk.height || kk;
        return Bk._generateDepthBuffer = Rk.generateDepthBuffer, Bk._generateStencilBuffer = !!Rk.generateStencilBuffer, tk.baseWidth = ak, tk.baseHeight = Xk, tk.width = ak, tk.height = Xk, tk.isReady = !0, tk.samples = 1, tk.generateMipMaps = !!Rk.generateMipMaps, tk.samplingMode = Rk.samplingMode, tk.type = Rk.type, this._internalTexturesCache.push(tk), Bk
      }
      createMultiviewRenderTargetTexture(kk, Fk) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const Bk = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: kk,
            height: Fk
          }),
          Rk = new NF.c(this, 5, !0);
        return Rk.baseWidth = kk, Rk.baseHeight = Fk, Rk.width = kk, Rk.height = Fk, Rk.isMultiview = !0, Rk.isReady = !0, Rk.format = 5, Rk.samples = 1, Bk.setTextures(Rk), Bk
      }
      bindMultiviewFramebuffer(kk) {
        this.bindFramebuffer(kk, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(kk, Fk) {
        const Bk = this._createHardwareRenderTargetWrapper(!1, !0, kk),
          Rk = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...Fk
          };
        Rk.generateStencilBuffer = Rk.generateDepthBuffer && Rk.generateStencilBuffer, (1 !== Rk.type || this._caps.textureFloatLinearFiltering) && (2 !== Rk.type || this._caps.textureHalfFloatLinearFiltering) || (Rk.samplingMode = 1), Bk._generateDepthBuffer = Rk.generateDepthBuffer, Bk._generateStencilBuffer = !!Rk.generateStencilBuffer;
        const tk = new NF.c(this, 5);
        return tk.baseWidth = kk, tk.baseHeight = kk, tk.width = kk, tk.height = kk, tk.isReady = !0, tk.isCube = !0, tk.samples = 1, tk.generateMipMaps = !!Rk.generateMipMaps, tk.samplingMode = Rk.samplingMode, tk.type = Rk.type, this._internalTexturesCache.push(tk), Bk
      }
      updateTextureSamplingMode(kk, Fk) {
        Fk.samplingMode = kk
      }
      createRawTexture(kk, Fk, Bk, Rk, tk, ak, Xk) {
        let bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          wk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          dk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const sk = new NF.c(this, 3);
        return sk.baseWidth = Fk, sk.baseHeight = Bk, sk.width = Fk, sk.height = Bk, sk.format = Rk, sk.generateMipMaps = tk, sk.samplingMode = Xk, sk.invertY = ak, sk._compression = bk, sk.type = wk, sk._useSRGBBuffer = dk, this._doNotHandleContextLost || (sk._bufferView = kk), sk
      }
      updateRawTexture(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        kk && (kk._bufferView = Fk, kk.format = Bk, kk.invertY = Rk, kk._compression = tk, kk.type = ak, kk._useSRGBBuffer = Xk)
      }
      bindFramebuffer(kk, Fk, Bk, Rk, tk) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = kk, this._currentFramebuffer = null, this._cachedViewport && !tk && this.setViewport(this._cachedViewport, Bk, Rk)
      }
      unBindFramebuffer(kk) {
        let Fk = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, Fk && Fk(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(kk) {
        const Fk = new JB.d;
        return Fk.references = 1, Fk.KV = 1, Fk
      }
      updateDynamicTexture(kk, Fk, Bk) {}
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
      updateDynamicVertexBuffer(kk, Fk, Bk, Rk) {}
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
      _uploadCompressedDataToTextureDirectly(kk, Fk, Bk, Rk, tk) {}
      _uploadDataToTextureDirectly(kk, Fk) {}
      _uploadArrayBufferViewToTexture(kk, Fk) {}
      _uploadImageToTexture(kk, Fk) {}
    }
    Bk(39432), Bk(39472), Bk(39424);
    async function WB(kk) {
      const Fk = kk.getInternalTexture();
      if (!Fk || 1 !== Fk.source) return null;
      if (Fk.invertY) {
        const Fk = kk.XN()?.ne();
        if (!(Fk instanceof mB)) return null
      }
      const Bk = Fk._buffer;
      let Rk, ak = kk.mimeType;
      try {
        Bk ? ArrayBuffer.isView(Bk) ? Rk = Bk.buffer.slice(Bk.byteOffset, Bk.byteOffset + Bk.byteLength) : Bk instanceof ArrayBuffer ? Rk = Bk : Bk instanceof Blob ? (Rk = await Bk.arrayBuffer(), ak = Bk.type || ak) : "string" === typeof Bk ? (Rk = await tk.Tools.LoadFileAsync(Bk), ak = (0, wk.e)(Bk) || ak) : "undefined" !== typeof HTMLImageElement && Bk instanceof HTMLImageElement && (Rk = await tk.Tools.LoadFileAsync(Bk.src), ak = (0, wk.e)(Bk.src) || ak) : (Rk = await tk.Tools.LoadFileAsync(Fk.url), ak = (0, wk.e)(Fk.url) || ak)
      } catch {
        return null
      }
      if (Rk && !ak && Fk.url) {
        const kk = Fk.url.match(/^data:([^;,]+)/);
        ak = kk ? kk[1] : (0, wk.e)(Fk.url)
      }
      return Rk && ak ? {
        data: Rk,
        mimeType: ak
      } : null
    }
    const vB = 1e-6,
      iB = new fk.Color3(.04, .04, .04),
      YB = 1024,
      oB = fk.Color3.White(),
      LB = fk.Color3.BlackReadOnly;

    function OB(kk) {
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

    function EB(kk, Fk, Bk) {
      if (Fk < iB.r) return 0;
      const Rk = iB.r,
        tk = kk * Bk / (1 - iB.r) + Fk - 2 * iB.r,
        ak = tk * tk - 4 * Rk * (iB.r - Fk);
      return vk.Clamp((-tk + Math.sqrt(ak)) / (2 * Rk), 0, 1)
    }

    function SB(kk) {
      const Fk = kk.diffuseColor.toLinearSpace(kk.XN().ne().useExactSrgbConversions).scale(.5),
        Bk = kk.alpha,
        Rk = function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new zk.p(0, 1),
            Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new zk.p(0, .1),
            Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new zk.p(0, .1),
            tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new zk.p(1300, .1);
          return function(kk, Fk, Bk, Rk, tk) {
            return (1 - kk) * (1 - kk) * (1 - kk) * Fk + 3 * (1 - kk) * (1 - kk) * kk * Bk + 3 * (1 - kk) * kk * kk * Rk + kk * kk * kk * tk
          }(Math.pow(kk / tk.x, .333333), Fk.y, Bk.y, Rk.y, tk.y)
        }(vk.Clamp(kk.specularPower, 0, YB));
      return {
        baseColorFactor: [Fk.r, Fk.g, Fk.b, Bk],
        metallicFactor: 0,
        roughnessFactor: Rk
      }
    }

    function NB(kk, Fk) {
      Fk.needAlphaBlending() ? kk.alphaMode = "BLEND" : Fk.needAlphaTesting() && (kk.alphaMode = "MASK", kk.alphaCutoff = Fk.alphaCutOff)
    }

    function HB(kk, Fk, Bk) {
      const Rk = new Uint8Array(kk * Fk * 4);
      for (let tk = 0; tk < Rk.length; tk += 4) Rk[tk] = Rk[tk + 1] = Rk[tk + 2] = Rk[tk + 3] = 255;
      return Lk.d.CreateRGBATexture(Rk, kk, Fk, Bk)
    }

    function uB(kk) {
      if (kk instanceof Uint8Array) {
        const Fk = kk.length,
          Bk = new Float32Array(kk.length);
        for (let Rk = 0; Rk < Fk; ++Rk) Bk[Rk] = kk[Rk] / 255;
        return Bk
      }
      if (kk instanceof Float32Array) return kk;
      throw new Error("Unsupported pixel format!")
    }
    class MB {
      constructor(kk) {
        this._exporter = kk, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(kk) {
        return kk ? this._textureMap.get(kk.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(kk, Fk) {
        const Bk = SB(kk),
          Rk = {
            name: kk.name
          };
        if (null == kk.backFaceCulling || kk.backFaceCulling || (kk.twoSidedLighting || tk.Tools.Warn(kk.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Rk.doubleSided = !0), Fk) {
          const Fk = [],
            tk = kk.diffuseTexture;
          tk && Fk.push(this.exportTextureAsync(tk).then((kk => {
            kk && (Bk.baseColorTexture = kk)
          })));
          const ak = kk.bumpTexture;
          ak && Fk.push(this.exportTextureAsync(ak).then((kk => {
            kk && (Rk.normalTexture = kk, 1 !== ak.level && (Rk.normalTexture.scale = ak.level))
          })));
          const Xk = kk.emissiveTexture;
          Xk && (Rk.emissiveFactor = [1, 1, 1], Fk.push(this.exportTextureAsync(Xk).then((kk => {
            kk && (Rk.emissiveTexture = kk)
          }))));
          const bk = kk.ambientTexture;
          bk && Fk.push(this.exportTextureAsync(bk).then((kk => {
            if (kk) {
              const Fk = {
                index: kk.index
              };
              Rk.occlusionTexture = Fk
            }
          }))), Fk.length > 0 && (this._exporter._materialNeedsUVsSet.add(kk), await Promise.all(Fk))
        }(kk.alpha < 1 || kk.opacityTexture) && (kk.alphaMode === Ok.c.ALPHA_COMBINE ? Rk.alphaMode = "BLEND" : tk.Tools.Warn(kk.name + ": glTF 2.0 does not support alpha mode: " + kk.alphaMode.toString())), kk.emissiveColor && !kk.emissiveColor.equalsWithEpsilon(LB, vB) && (Rk.emissiveFactor = kk.emissiveColor.PBk()), Rk.pbrMetallicRoughness = Bk, NB(Rk, kk), await this._finishMaterialAsync(Rk, kk);
        const ak = this._exporter._materials;
        return ak.push(Rk), ak.length - 1
      }
      async _finishMaterialAsync(kk, Fk) {
        const Bk = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", kk, Fk),
          Rk = [];
        for (const tk of Bk) Rk.push(this.exportTextureAsync(tk));
        await Promise.all(Rk), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", kk, Fk)
      }
      _resizeTexturesToSameDimensions(kk, Fk, Bk) {
        const Rk = kk ? kk.getSize() : {
            width: 0,
            height: 0
          },
          tk = Fk ? Fk.getSize() : {
            width: 0,
            height: 0
          };
        let ak, Xk;
        return Rk.width < tk.width ? (ak = kk && kk instanceof Yk.c ? ik.i.CreateResizedCopy(kk, tk.width, tk.height, !0) : HB(tk.width, tk.height, Bk), Xk = Fk) : Rk.width > tk.width ? (Xk = Fk && Fk instanceof Yk.c ? ik.i.CreateResizedCopy(Fk, Rk.width, Rk.height, !0) : HB(Rk.width, Rk.height, Bk), ak = kk) : (ak = kk, Xk = Fk), {
          texture1: ak,
          texture2: Xk
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(kk, Fk, Bk) {
        const Rk = new Array;
        if (!kk && !Fk) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const tk = kk ? kk.XN() : Fk ? Fk.XN() : null;
        if (tk) {
          const ak = this._resizeTexturesToSameDimensions(kk, Fk, tk),
            Xk = ak.texture1?.getSize();
          let bk, wk;
          const dk = Xk.width,
            sk = Xk.height,
            Vk = await ak.texture1.readPixels(),
            Jk = await ak.texture2.readPixels();
          if (!Vk) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (bk = uB(Vk), !Jk) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          wk = uB(Jk);
          const Ak = wk.byteLength,
            ek = new Uint8Array(Ak),
            yk = new Uint8Array(Ak),
            mk = 4,
            Wk = new fk.Color3(0, 0, 0);
          let vk = 0,
            ik = 0;
          for (let kk = 0; kk < sk; ++kk)
            for (let Fk = 0; Fk < dk; ++Fk) {
              const Rk = (dk * kk + Fk) * mk,
                Xk = {
                  diffuseColor: new fk.Color3(bk[Rk], bk[Rk + 1], bk[Rk + 2]).toLinearSpace(tk.ne().useExactSrgbConversions).multiply(Bk.diffuseColor),
                  specularColor: new fk.Color3(wk[Rk], wk[Rk + 1], wk[Rk + 2]).toLinearSpace(tk.ne().useExactSrgbConversions).multiply(Bk.specularColor),
                  glossiness: wk[Rk + 3] * Bk.glossiness
                },
                sk = this._convertSpecularGlossinessToMetallicRoughness(Xk);
              Wk.r = Math.max(Wk.r, sk.baseColor.r), Wk.g = Math.max(Wk.g, sk.baseColor.g), Wk.b = Math.max(Wk.b, sk.baseColor.b), vk = Math.max(vk, sk.metallic), ik = Math.max(ik, sk.roughness), yk[Rk] = 255 * sk.baseColor.r, yk[Rk + 1] = 255 * sk.baseColor.g, yk[Rk + 2] = 255 * sk.baseColor.b, yk[Rk + 3] = ak.texture1.hasAlpha ? 255 * bk[Rk + 3] : 255, ek[Rk] = 0, ek[Rk + 1] = 255 * sk.roughness, ek[Rk + 2] = 255 * sk.metallic, ek[Rk + 3] = 255
            }
          const Yk = {
            baseColor: Wk,
            metallic: vk,
            roughness: ik
          };
          let Lk = !1,
            Ok = !1;
          for (let kk = 0; kk < sk; ++kk)
            for (let Fk = 0; Fk < dk; ++Fk) {
              const Bk = (dk * kk + Fk) * mk;
              yk[Bk] /= Yk.baseColor.r > vB ? Yk.baseColor.r : 1, yk[Bk + 1] /= Yk.baseColor.g > vB ? Yk.baseColor.g : 1, yk[Bk + 2] /= Yk.baseColor.b > vB ? Yk.baseColor.b : 1;
              const Rk = fk.Color3.FromInts(yk[Bk], yk[Bk + 1], yk[Bk + 2]).toGammaSpace(tk.ne().useExactSrgbConversions);
              yk[Bk] = 255 * Rk.r, yk[Bk + 1] = 255 * Rk.g, yk[Bk + 2] = 255 * Rk.b, Rk.equalsWithEpsilon(oB, vB) || (Ok = !0), ek[Bk + 1] /= Yk.roughness > vB ? Yk.roughness : 1, ek[Bk + 2] /= Yk.metallic > vB ? Yk.metallic : 1;
              fk.Color3.FromInts(255, ek[Bk + 1], ek[Bk + 2]).equalsWithEpsilon(oB, vB) || (Lk = !0)
            }
          return Lk && Rk.push((0, Ek.EncodeImageAsync)(ek, dk, sk).then((kk => {
            Yk.metallicRoughnessTextureData = kk
          }))), Ok && Rk.push((0, Ek.EncodeImageAsync)(yk, dk, sk).then((kk => {
            Yk.baseColorTextureData = kk
          }))), await Promise.all(Rk).then((() => Yk))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(kk) {
        const Fk = this._getPerceivedBrightness(kk.diffuseColor),
          Bk = this._getPerceivedBrightness(kk.specularColor),
          Rk = 1 - this._getMaxComponent(kk.specularColor),
          tk = EB(Fk, Bk, Rk),
          ak = kk.diffuseColor.scale(Rk / (1 - iB.r) / Math.max(1 - tk, vB)),
          Xk = kk.specularColor.subtract(iB.scale(1 - tk)).scale(1 / Math.max(tk, vB));
        let bk = fk.Color3.Lerp(ak, Xk, tk * tk);
        bk = bk.clampToRef(0, 1, bk);
        return {
          baseColor: bk,
          metallic: tk,
          roughness: 1 - kk.glossiness
        }
      }
      _getPerceivedBrightness(kk) {
        return Math.sqrt(.299 * kk.r * kk.r + .587 * kk.g * kk.g + .114 * kk.b * kk.b)
      }
      _getMaxComponent(kk) {
        return Math.max(kk.r, Math.max(kk.g, kk.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
        const dk = [],
          sk = {
            baseColor: kk,
            metallic: Fk,
            roughness: Bk
          };
        if (wk)
          if (Xk instanceof QF) {
            if (Xk.geometryOpacityTexture) {
              const kk = Rk && Rk.getInternalTexture() ? Rk.getInternalTexture().uniqueId : 0,
                Fk = Xk.geometryOpacityTexture && Xk.geometryOpacityTexture.getInternalTexture() ? Xk.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                Bk = Number(`${kk}${Fk}`),
                tk = this._textureMap.get(Bk);
              tk ? bk.baseColorTexture = tk : dk.push(bB("baseColorOpacityTexture", sB(Rk ? wB(Rk, 0) : dB(1), Rk ? wB(Rk, 1) : dB(1), Rk ? wB(Rk, 2) : dB(1), wB(Xk.geometryOpacityTexture, 0)), Xk.XN()).then((async kk => {
                const Fk = await this.exportTextureAsync(kk, Bk);
                Fk && (bk.baseColorTexture = Fk)
              })))
            } else Rk && dk.push(this.exportTextureAsync(Rk).then((kk => {
              kk && (bk.baseColorTexture = kk)
            })));
            if (Xk._useMetallicFromMetallicTextureBlue && tk) dk.push(this.exportTextureAsync(tk).then((kk => {
              kk && (bk.metallicRoughnessTexture = kk)
            })));
            else if (ak || tk) {
              const kk = tk && tk.getInternalTexture() ? tk.getInternalTexture().uniqueId : 0,
                Fk = ak && ak.getInternalTexture() ? ak.getInternalTexture().uniqueId : 0,
                Bk = Number(`${kk}${Fk}`),
                Rk = this._textureMap.get(Bk);
              Rk ? bk.metallicRoughnessTexture = Rk : dk.push(bB("MetalRoughTexture", sB(Xk.ambientOcclusionTexture ? wB(Xk.ambientOcclusionTexture, 0) : dB(1), ak ? wB(ak, 0) : dB(1), tk ? wB(tk, 0) : dB(1)), Xk.XN()).then((async kk => {
                const Fk = await this.exportTextureAsync(kk, Bk);
                Fk && (bk.metallicRoughnessTexture = Fk)
              })))
            }
          } else Rk && dk.push(this.exportTextureAsync(Rk).then((kk => {
            kk && (bk.baseColorTexture = kk)
          }))), tk && dk.push(this.exportTextureAsync(tk).then((kk => {
            kk && (bk.metallicRoughnessTexture = kk)
          })));
        return dk.length > 0 && (this._exporter._materialNeedsUVsSet.add(Xk), await Promise.all(dk)), sk
      }
      _getTextureSampler(kk) {
        const Fk = {};
        if (!kk || !(kk instanceof Yk.c)) return Fk;
        const Bk = this._getGLTFTextureWrapMode(kk.wrapU);
        10497 !== Bk && (Fk.wrapS = Bk);
        const Rk = this._getGLTFTextureWrapMode(kk.wrapV);
        switch (10497 !== Rk && (Fk.wrapT = Rk), kk.samplingMode) {
          case Yk.c.LINEAR_LINEAR:
            Fk.magFilter = 9729, Fk.minFilter = 9729;
            break;
          case Yk.c.LINEAR_NEAREST:
            Fk.magFilter = 9729, Fk.minFilter = 9728;
            break;
          case Yk.c.NEAREST_LINEAR:
            Fk.magFilter = 9728, Fk.minFilter = 9729;
            break;
          case Yk.c.NEAREST_LINEAR_MIPLINEAR:
            Fk.magFilter = 9728, Fk.minFilter = 9987;
            break;
          case Yk.c.NEAREST_NEAREST:
            Fk.magFilter = 9728, Fk.minFilter = 9728;
            break;
          case Yk.c.NEAREST_LINEAR_MIPNEAREST:
            Fk.magFilter = 9728, Fk.minFilter = 9985;
            break;
          case Yk.c.LINEAR_NEAREST_MIPNEAREST:
            Fk.magFilter = 9729, Fk.minFilter = 9984;
            break;
          case Yk.c.LINEAR_NEAREST_MIPLINEAR:
            Fk.magFilter = 9729, Fk.minFilter = 9986;
            break;
          case Yk.c.NEAREST_NEAREST_MIPLINEAR:
            Fk.magFilter = 9728, Fk.minFilter = 9986;
            break;
          case Yk.c.LINEAR_LINEAR_MIPLINEAR:
            Fk.magFilter = 9729, Fk.minFilter = 9987;
            break;
          case Yk.c.LINEAR_LINEAR_MIPNEAREST:
            Fk.magFilter = 9729, Fk.minFilter = 9985;
            break;
          case Yk.c.NEAREST_NEAREST_MIPNEAREST:
            Fk.magFilter = 9728, Fk.minFilter = 9984
        }
        return Fk
      }
      _getGLTFTextureWrapMode(kk) {
        switch (kk) {
          case Yk.c.WRAP_ADDRESSMODE:
            return 10497;
          case Yk.c.CLAMP_ADDRESSMODE:
            return 33071;
          case Yk.c.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return tk.Tools.Error(`Unsupported Texture Wrap Mode ${kk}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(kk, Fk, Bk) {
        const Rk = {
            diffuseColor: kk._albedoColor,
            specularColor: kk._reflectivityColor,
            glossiness: kk._microSurface
          },
          tk = kk._albedoTexture,
          ak = kk._reflectivityTexture,
          Xk = kk._useMicroSurfaceFromReflectivityMapAlpha;
        if (ak && !Xk) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((tk || ak) && Bk) {
          this._exporter._materialNeedsUVsSet.add(kk);
          const Bk = this._exportTextureSampler(tk || ak),
            Xk = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(tk, ak, Rk),
            bk = this._exporter._textures;
          if (Xk.baseColorTextureData) {
            const kk = await this._exportImageAsync(`baseColor${bk.length}`, Xk.baseColorTextureData);
            Fk.baseColorTexture = this._exportTextureInfo(kk, Bk, tk?.coordinatesIndex)
          }
          if (Xk.metallicRoughnessTextureData) {
            const kk = await this._exportImageAsync(`metallicRoughness${bk.length}`, Xk.metallicRoughnessTextureData);
            Fk.metallicRoughnessTexture = this._exportTextureInfo(kk, Bk, ak?.coordinatesIndex)
          }
          return Xk
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Rk)
      }
      async exportPBRMaterialAsync(kk, Fk) {
        const Bk = {},
          Rk = {
            name: kk.name
          },
          tk = kk.isMetallicWorkflow();
        if (tk) {
          const Fk = kk._albedoColor,
            Rk = kk.alpha;
          Fk && (Bk.baseColorFactor = [Fk.r, Fk.g, Fk.b, Rk])
        }
        const ak = tk ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(kk._albedoColor, kk._metallic, kk._roughness, kk._albedoTexture, kk._metallicTexture, kk._metallicTexture, kk, Bk, Fk) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(kk, Bk, Fk);
        await this._setMetallicRoughnessPbrMaterialAsync(ak, kk, Rk, Bk, Fk), await this._finishMaterialAsync(Rk, kk);
        const Xk = this._exporter._materials;
        return Xk.push(Rk), Xk.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(kk, Fk, Bk, Rk, ak) {
        if (NB(Bk, Fk), kk.baseColor.equalsWithEpsilon(oB, vB) && vk.WithinEpsilon(Fk.alpha, 1, vB) || (Rk.baseColorFactor = [kk.baseColor.r, kk.baseColor.g, kk.baseColor.b, Fk.alpha]), null != kk.metallic && 1 !== kk.metallic && (Rk.metallicFactor = kk.metallic), null != kk.roughness && 1 !== kk.roughness && (Rk.roughnessFactor = kk.roughness), null == Fk.backFaceCulling || Fk.backFaceCulling || (Fk._twoSidedLighting || tk.Tools.Warn(Fk.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Bk.doubleSided = !0), ak) {
          const kk = [],
            tk = Fk instanceof LF ? Fk._bumpTexture : Fk.geometryNormalTexture;
          tk && kk.push(this.exportTextureAsync(tk).then((kk => {
            kk && (Bk.normalTexture = kk, 1 !== tk.level && (Bk.normalTexture.scale = tk.level))
          })));
          const ak = Fk instanceof LF ? Fk._ambientTexture : Fk.ambientOcclusionTexture;
          ak && kk.push(new Promise((async kk => {
            if (Fk instanceof QF && Rk.metallicRoughnessTexture) {
              const Fk = this._exportTextureSampler(ak),
                Bk = this._exporter._textures[Rk.metallicRoughnessTexture.index].source,
                tk = this._exportTextureInfo(Bk, Fk, ak.coordinatesIndex);
              return this._textureMap.set(ak.uniqueId, tk), this._exporter._extensionsPostExportTextures("exporter", tk, ak), kk(tk)
            }
            return kk(await this.exportTextureAsync(ak))
          })).then((async kk => {
            if (kk) {
              const Rk = {
                index: kk.index,
                texCoord: kk.texCoord,
                extensions: kk.extensions
              };
              Bk.occlusionTexture = Rk, Rk.strength = Fk instanceof LF ? Fk._ambientTextureStrength : Fk.ambientOcclusionTexture.level
            }
          })));
          const Xk = Fk instanceof LF ? Fk._emissiveTexture : Fk.emissionColorTexture;
          Xk && kk.push(this.exportTextureAsync(Xk).then((kk => {
            kk && (Bk.emissiveTexture = kk)
          }))), kk.length > 0 && (this._exporter._materialNeedsUVsSet.add(Fk), await Promise.all(kk))
        }
        const Xk = Fk instanceof LF ? Fk._emissiveColor : Fk.emissionColor;
        Xk.equalsWithEpsilon(LB, vB) || (Bk.emissiveFactor = Xk.PBk()), Bk.pbrMetallicRoughness = Rk
      }
      async exportOpenPBRMaterialAsync(kk, Fk) {
        const Bk = {},
          Rk = {
            name: kk.name
          },
          tk = kk.baseColor,
          ak = kk.geometryOpacity;
        tk && (Bk.baseColorFactor = [tk.r, tk.g, tk.b, ak]);
        const Xk = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(kk.baseColor, kk.baseMetalness, kk.specularRoughness, kk.baseColorTexture, kk.baseMetalnessTexture, kk.specularRoughnessTexture, kk, Bk, Fk);
        await this._setMetallicRoughnessPbrMaterialAsync(Xk, kk, Rk, Bk, Fk), await this._finishMaterialAsync(Rk, kk);
        const bk = this._exporter._materials;
        return bk.push(Rk), bk.length - 1
      }
      async exportTextureAsync(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Bk = this._textureMap.get(Fk ?? kk.uniqueId);
        if (Bk) return Bk;
        const Rk = this._exportTextureSampler(kk),
          tk = await this._exportTextureImageAsync(kk);
        return Bk = this._exportTextureInfo(tk, Rk, kk.coordinatesIndex), this._textureMap.set(Fk ?? kk.uniqueId, Bk), this._exporter._extensionsPostExportTextures("exporter", Bk, kk), Bk
      }
      async _exportTextureImageAsync(kk) {
        const Fk = kk.mimeType ?? "none",
          Bk = this._internalTextureToImage,
          Rk = kk.getInternalTexture().uniqueId;
        Bk[Rk] = Bk[Rk] || {};
        let ak = Bk[Rk][Fk];
        return void 0 === ak && (ak = (async () => {
          const Bk = await WB(kk);
          if (Bk && OB(Bk.mimeType) && ("none" === Fk || Bk.mimeType === Fk)) return await this._exportImageAsync(kk.name, new Blob([Bk.data], {
            type: Bk.mimeType
          }));
          let Rk = "image/png";
          "none" !== Fk && (OB(Fk) ? Rk = Fk : (Rk = "image/png", tk.Tools.Warn(`Unsupported media type: ${Fk}. Exporting texture as PNG.`)));
          const ak = kk.getSize(),
            Xk = await (0, ik.h)(kk),
            bk = await (0, Ek.EncodeImageAsync)(Xk, ak.width, ak.height, Rk);
          return await this._exportImageAsync(kk.name, bk)
        })(), Bk[Rk][Fk] = ak), await ak
      }
      async _exportImageAsync(kk, Fk) {
        const Bk = this._exporter._images;
        let Rk;
        if (this._exporter._shouldUseGlb) {
          Rk = {
            name: kk,
            mimeType: Fk.type,
            bufferView: void 0
          };
          const Bk = await Fk.arrayBuffer(),
            tk = this._exporter._bufferManager.createBufferView(new Uint8Array(Bk));
          this._exporter._bufferManager.setBufferView(Rk, tk)
        } else {
          const ak = kk.replace(/\.\/|\/|\.\\|\\/g, "_"),
            Xk = function(kk) {
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
          let bk = ak + Xk;
          Bk.some((kk => kk.uri === bk)) && (bk = `${ak}_${tk.Tools.RandomId()}${Xk}`), Rk = {
            name: kk,
            uri: bk
          }, this._exporter._imageData[bk] = Fk
        }
        return Bk.push(Rk), Bk.length - 1
      }
      _exportTextureInfo(kk, Fk, Bk) {
        const Rk = this._exporter._textures;
        let tk = Rk.findIndex((Bk => Bk.sampler == Fk && Bk.source === kk)); - 1 === tk && (tk = Rk.length, Rk.push({
          source: kk,
          sampler: Fk
        }));
        const ak = {
          index: tk
        };
        return Bk && (ak.texCoord = Bk), ak
      }
      _exportTextureSampler(kk) {
        const Fk = this._getTextureSampler(kk),
          Bk = this._exporter._samplers,
          Rk = Bk.findIndex((kk => kk.minFilter === Fk.minFilter && kk.magFilter === Fk.magFilter && kk.wrapS === Fk.wrapS && kk.wrapT === Fk.wrapT));
        return -1 !== Rk ? Rk : (Bk.push(Fk), Bk.length - 1)
      }
    }
    var gB = Bk(39463),
      UB = Bk(39621);
    (0, UB.b)();
    var cB = Bk(36764);
    const GB = Rk.Matrix.Compose(new Rk.Qe(-1, 1, 1), Rk.Quaternion.Identity(), Rk.Qe.Zero());

    function TB(kk, Fk) {
      if (!(kk instanceof Vk.e)) return !1;
      if (Fk) {
        if (!kk.getWorldMatrix().equalsWithEpsilon(Rk.Matrix.IdentityReadOnly, cB.c)) return !1
      } else {
        if (!kk.getWorldMatrix().multiplyToRef(GB, Rk.TmpVectors.Matrix[0]).equalsWithEpsilon(Rk.Matrix.IdentityReadOnly, cB.c)) return !1
      }
      return !(kk instanceof Jk.c && kk.geometry)
    }
    const rB = Rk.Qe.ZeroReadOnly,
      DB = Rk.Quaternion.Identity(),
      zB = Rk.Qe.OneReadOnly,
      PB = new Rk.Qe(-1, 1, 1);

    function hB(kk, Fk) {
      const {
        byteOffset: Bk,
        byteStride: Rk,
        type: tk,
        normalized: ak
      } = kk, Xk = kk.getSize(), bk = Fk.reduce(((kk, Fk) => Fk.getTotalVertices() > kk ? Fk.getTotalVertices() : kk), -Number.MAX_VALUE);
      return {
        byteOffset: Bk,
        byteStride: Rk,
        componentCount: Xk,
        type: tk,
        count: bk * Xk,
        normalized: ak,
        totalVertices: bk,
        kind: kk.getKind()
      }
    }

    function qB(kk) {
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

    function CB(kk) {
      switch (kk) {
        case sk.e.PositionKind:
        case sk.e.NormalKind:
        case sk.e.TangentKind:
        case sk.e.ColorKind:
        case sk.e.MatricesIndicesKind:
        case sk.e.MatricesIndicesExtraKind:
        case sk.e.MatricesWeightsKind:
        case sk.e.MatricesWeightsExtraKind:
        case sk.e.UVKind:
        case sk.e.UV2Kind:
        case sk.e.UV3Kind:
        case sk.e.UV4Kind:
        case sk.e.UV5Kind:
        case sk.e.UV6Kind:
          return !0
      }
      return !1
    }

    function ZB(kk) {
      const Fk = Math.sqrt(kk.x * kk.x + kk.y * kk.y + kk.z * kk.z);
      Fk > 0 && (kk.x /= Fk, kk.y /= Fk, kk.z /= Fk)
    }

    function pB(kk) {
      return kk.x *= -1, kk
    }

    function KB(kk) {
      if (kk.x * kk.x + kk.y * kk.y > .5) {
        const Fk = Math.abs(kk.x),
          Bk = Math.abs(kk.y);
        if (Fk > Bk) {
          const Bk = Math.sign(kk.x);
          kk.x = Fk, kk.y *= -Bk, kk.z *= -Bk, kk.w *= Bk
        } else {
          const Fk = Math.sign(kk.y);
          kk.x *= -Fk, kk.y = Bk, kk.z *= Fk, kk.w *= -Fk
        }
      } else {
        const Fk = Math.abs(kk.z),
          Bk = Math.abs(kk.w);
        if (Fk > Bk) {
          const Bk = Math.sign(kk.z);
          kk.x *= -Bk, kk.y *= Bk, kk.z = Fk, kk.w *= -Bk
        } else {
          const Fk = Math.sign(kk.w);
          kk.x *= Fk, kk.y *= -Fk, kk.z *= -Fk, kk.w = Bk
        }
      }
      return kk
    }

    function xB(kk) {
      kk.E1(-kk.z, kk.w, kk.x, -kk.y)
    }

    function jB(kk, Fk) {
      const Bk = Rk.Qe.FromArrayToRef(Fk.translation || [0, 0, 0], 0, Rk.TmpVectors.Qe[0]),
        tk = Rk.Quaternion.FromArrayToRef(Fk.rotation || [0, 0, 0, 1], 0, Rk.TmpVectors.Quaternion[0]),
        ak = Rk.Matrix.ComposeToRef(zB, tk, Bk, Rk.TmpVectors.Matrix[0]),
        Xk = Rk.Qe.FromArrayToRef(kk.translation || [0, 0, 0], 0, Rk.TmpVectors.Qe[2]),
        bk = Rk.Quaternion.FromArrayToRef(kk.rotation || [0, 0, 0, 1], 0, Rk.TmpVectors.Quaternion[1]),
        wk = Rk.Matrix.ComposeToRef(zB, bk, Xk, Rk.TmpVectors.Matrix[1]);
      ak.multiplyToRef(wk, wk), wk.decompose(void 0, tk, Bk), Bk.equalsWithEpsilon(rB, cB.c) ? delete Fk.translation : Fk.translation = Bk.PBk(), tk.equalsWithEpsilon(DB, cB.c) ? delete Fk.rotation : Fk.rotation = tk.PBk(), Fk.scale && delete Fk.scale
    }

    function lB(kk, Fk) {
      if (!(Fk instanceof Vk.e)) return !1;
      if (!(1 === Fk.getChildren().length && 0 === kk.getChildren().length && kk.parent === Fk)) return !1;
      const Bk = kk.XN(),
        Rk = kk instanceof UB.d && !Bk.useRightHandedSystem ? PB : zB;
      return !!Fk.ta.equalsWithEpsilon(Rk, cB.c) || (Hk.b.Warn(`Cannot collapse node ${kk.name} into parent node ${Fk.name} with modified scaling.`), !1)
    }

    function nB(kk) {
      if (kk instanceof Array) {
        const Fk = new Float32Array(kk);
        return new Uint8Array(Fk.buffer, Fk.byteOffset, Fk.byteLength)
      }
      return ArrayBuffer.isView(kk) ? new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength) : new Uint8Array(kk)
    }

    function IB(kk, Fk) {
      for (const [Bk, Rk] of Object.entries(kk)) {
        const tk = Fk[Bk];
        (Array.isArray(Rk) && Array.isArray(tk) && QB(Rk, tk) || Rk === tk) && delete kk[Bk]
      }
      return kk
    }

    function QB(kk, Fk) {
      return kk.length === Fk.length && kk.every(((kk, Bk) => kk === Fk[Bk]))
    }
    const kR = new Map([
      [Int8Array, (kk, Fk, Bk) => kk.setInt8(Fk, Bk)],
      [Uint8Array, (kk, Fk, Bk) => kk.setUint8(Fk, Bk)],
      [Uint8ClampedArray, (kk, Fk, Bk) => kk.setUint8(Fk, Bk)],
      [Int16Array, (kk, Fk, Bk) => kk.setInt16(Fk, Bk, !0)],
      [Uint16Array, (kk, Fk, Bk) => kk.setUint16(Fk, Bk, !0)],
      [Int32Array, (kk, Fk, Bk) => kk.setInt32(Fk, Bk, !0)],
      [Uint32Array, (kk, Fk, Bk) => kk.setUint32(Fk, Bk, !0)],
      [Float32Array, (kk, Fk, Bk) => kk.setFloat32(Fk, Bk, !0)],
      [Float64Array, (kk, Fk, Bk) => kk.setFloat64(Fk, Bk, !0)]
    ]);
    class FR {
      writeTypedArray(kk) {
        this._checkGrowBuffer(kk.byteLength);
        const Fk = kR.get(kk.constructor);
        for (let Bk = 0; Bk < kk.length; Bk++) Fk(this._dataView, this._byteOffset, kk[Bk]), this._byteOffset += kk.BYTES_PER_ELEMENT
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

    function BR(kk) {
      return kk % 4 === 0 ? 4 : kk % 2 === 0 ? 2 : 1
    }
    class RR {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(kk) {
        let Fk = 0;
        this._bufferViewToData.forEach((kk => {
          Fk += kk.byteLength
        }));
        const Bk = new FR(Fk),
          Rk = Array.from(this._bufferViewToData.keys()).sort(((kk, Fk) => BR(Fk.byteLength) - BR(kk.byteLength)));
        for (const tk of Rk) {
          tk.byteOffset = Bk.byteOffset, kk.push(tk);
          const Fk = kk.length - 1,
            Rk = this.getPropertiesWithBufferView(tk);
          for (const kk of Rk) kk.bufferView = Fk;
          Bk.writeTypedArray(this._bufferViewToData.get(tk)), this._bufferViewToData.delete(tk)
        }
        return Bk.getOutputData()
      }
      createBufferView(kk, Fk) {
        const Bk = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: kk.byteLength,
          byteStride: Fk
        };
        return this._bufferViewToData.set(Bk, kk), Bk
      }
      createAccessor(kk, Fk, Bk, Rk, tk, ak, Xk) {
        this._verifyBufferView(kk);
        const bk = {
          bufferView: void 0,
          componentType: Bk,
          count: Rk,
          type: Fk,
          min: ak?.min,
          max: ak?.max,
          normalized: Xk,
          byteOffset: tk
        };
        return this.setBufferView(bk, kk), this._accessorToBufferView.set(bk, kk), bk
      }
      setBufferView(kk, Fk) {
        this._verifyBufferView(Fk);
        this.getPropertiesWithBufferView(Fk).push(kk)
      }
      removeBufferView(kk) {
        const Fk = this.getPropertiesWithBufferView(kk);
        for (const Bk of Fk) void 0 !== Bk.bufferView && delete Bk.bufferView;
        this._bufferViewToData.delete(kk), this._bufferViewToProperties.delete(kk), this._accessorToBufferView.forEach(((Fk, Bk) => {
          Fk === kk && (void 0 !== Bk.byteOffset && delete Bk.byteOffset, this._accessorToBufferView.delete(Bk))
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
    var tR = Bk(39623);
    (0, tR.d)();
    var aR = Bk(39861);
    (0, aR.f)();
    var XR = Bk(39674),
      bR = Bk(40521);
    (0, bR.e)();
    let wR = (() => {
      var kk;
      let Fk, Bk, Rk = [],
        tk = [],
        ak = [],
        Xk = [];
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
            Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            bk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = kk, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new FB.e, this._onDataLayoutChanged = new FB.e, this.id = (0, Sk.l)(this, Rk, void 0), this.morphTargetManager = ((0, Sk.l)(this, tk), (0, Sk.l)(this, ak, null)), this._animationPropertiesOverride = ((0, Sk.l)(this, Xk), null), this.id = kk, this.morphTargetManager = bk, this._scene = Bk || yk.c.LastCreatedScene, this.influence = Fk, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        oXk(kk) {
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
          const Fk = OF.c.Clone((() => new kk(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return Fk._positions = this._positions, Fk._normals = this._normals, Fk._tangents = this._tangents, Fk._uvs = this._uvs, Fk._uv2s = this._uv2s, Fk._colors = this._colors, Fk
        }
        serialize() {
          const kk = {};
          return kk.name = this.name, kk.influence = this.influence, null != this.id && (kk.id = this.id), kk.uniqueId = this.uniqueId, kk.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (kk.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (kk.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (kk.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (kk.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (kk.colors = Array.prototype.slice.call(this.getColors())), OF.c.AppendSerializedAnimations(this, kk), kk
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(Fk, Bk) {
          let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const tk = new kk(Fk.name, Fk.influence, Bk, Rk);
          if (tk.oXk(Fk.positions), null != Fk.id && (tk.id = Fk.id), Fk.normals && tk.setNormals(Fk.normals), Fk.tangents && tk.setTangents(Fk.tangents), Fk.uvs && tk.setUVs(Fk.uvs), Fk.uv2s && tk.setUV2s(Fk.uv2s), Fk.colors && tk.setColors(Fk.colors), Fk.animations) {
            for (let kk = 0; kk < Fk.animations.length; kk++) {
              const Bk = Fk.animations[kk],
                Rk = (0, qF.c)("BABYLON.Animation");
              Rk && tk.animations.push(Rk.Parse(Bk))
            }
            Fk.autoAnimate && Bk && Bk.beginAnimation(tk, Fk.autoAnimateFrom, Fk.autoAnimateTo, Fk.autoAnimateLoop, Fk.autoAnimateSpeed || 1)
          }
          return tk
        }
        static FromMesh(Fk, Bk, Rk) {
          Bk || (Bk = Fk.name);
          const tk = new kk(Bk, Rk, Fk.XN(), Fk.morphTargetManager);
          return tk.oXk(Fk.getVerticesData(Pk.n.PositionKind)), Fk.isVerticesDataPresent(Pk.n.NormalKind) && tk.setNormals(Fk.getVerticesData(Pk.n.NormalKind)), Fk.isVerticesDataPresent(Pk.n.TangentKind) && tk.setTangents(Fk.getVerticesData(Pk.n.TangentKind)), Fk.isVerticesDataPresent(Pk.n.UVKind) && tk.setUVs(Fk.getVerticesData(Pk.n.UVKind)), Fk.isVerticesDataPresent(Pk.n.UV2Kind) && tk.setUV2s(Fk.getVerticesData(Pk.n.UV2Kind)), Fk.isVerticesDataPresent(Pk.n.ColorKind) && tk.setColors(Fk.getVerticesData(Pk.n.ColorKind)), tk
        }
      }, (() => {
        const bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, Nk.M)()], Bk = [(0, Nk.M)()], (0, Sk.j)(null, null, Fk, {
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
          metadata: bk
        }, Rk, tk), (0, Sk.j)(null, null, Bk, {
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
          metadata: bk
        }, ak, Xk), bk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bk
        })
      })(), kk
    })();
    var dR, sR = Bk(40592),
      VR = Bk(39668);
    ! function(kk) {
      kk[kk.INTANGENT = 0] = "INTANGENT", kk[kk.OUTTANGENT = 1] = "OUTTANGENT"
    }(dR || (dR = {}));
    class JR {
      static _IsTransformable(kk) {
        return kk && (kk instanceof Vk.e || kk instanceof tR.c || kk instanceof VR.d)
      }
      static _CreateNodeAnimation(kk, Fk, Bk, Rk, ak) {
        if (this._IsTransformable(kk)) {
          const Xk = [],
            bk = [],
            wk = Fk.getKeys(),
            dk = JR._CalculateMinMaxKeyFrames(wk),
            sk = JR._DeduceInterpolation(wk, Bk, Rk),
            Vk = sk.interpolationType,
            Jk = sk.shouldBakeAnimation;
          if (Jk ? JR._CreateBakedAnimation(kk, Fk, Bk, dk.min, dk.max, Fk.framePerSecond, ak, Xk, bk, dk, Rk) : "LINEAR" === Vk || "STEP" === Vk ? JR._CreateLinearOrStepAnimation(kk, Fk, Bk, Xk, bk, Rk) : "CUBICSPLINE" === Vk ? JR._CreateCubicSplineAnimation(kk, Fk, Bk, Xk, bk, Rk) : JR._CreateBakedAnimation(kk, Fk, Bk, dk.min, dk.max, Fk.framePerSecond, ak, Xk, bk, dk, Rk), Xk.length && bk.length) {
            return {
              inputs: Xk,
              outputs: bk,
              samplerInterpolation: Vk,
              inputsMin: Jk ? dk.min : tk.Tools.FloatRound(dk.min / Fk.framePerSecond),
              inputsMax: Jk ? dk.max : tk.Tools.FloatRound(dk.max / Fk.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(kk) {
        let Fk = null,
          Bk = "VEC3",
          Rk = !1;
        const ak = kk.targetProperty.split(".");
        switch (ak[0]) {
          case "ta":
            Fk = "scale";
            break;
          case "position":
            Fk = "translation";
            break;
          case "rotation":
            Bk = "VEC4", Fk = "rotation";
            break;
          case "rotationQuaternion":
            Bk = "VEC4", Rk = !0, Fk = "rotation";
            break;
          case "influence":
            Bk = "SCALAR", Fk = "weights";
            break;
          default:
            tk.Tools.Error(`Unsupported animatable property ${ak[0]}`)
        }
        return Fk ? {
          animationChannelTargetPath: Fk,
          dataAccessorType: Bk,
          useQuaternion: Rk
        } : (tk.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk) {
        let Vk;
        if (JR._IsTransformable(kk) && kk.animations)
          for (const Jk of kk.animations) {
            if (sk && !sk(Jk)) continue;
            const tk = JR._DeduceAnimationInfo(Jk);
            tk && (Vk = {
              name: Jk.name,
              samplers: [],
              channels: []
            }, JR._AddAnimation(`${Jk.name}`, Jk.hasRunningRuntimeAnimations ? Fk : Vk, kk, Jk, tk.dataAccessorType, tk.animationChannelTargetPath, Rk, ak, Xk, bk, tk.useQuaternion, wk, dk), Vk.samplers.length && Vk.channels.length && Bk.push(Vk))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk) {
        let Vk;
        if (kk instanceof sR.d) {
          const tk = kk.morphTargetManager;
          if (tk)
            for (let Jk = 0; Jk < tk.numTargets; ++Jk) {
              const Ak = tk.getTarget(Jk);
              for (const ek of Ak.animations) {
                if (sk && !sk(ek)) continue;
                const Ak = new bR.b(`${ek.name}`, "influence", ek.framePerSecond, ek.dataType, ek.Oa, ek.enableBlending),
                  yk = [],
                  fk = ek.getKeys();
                for (let kk = 0; kk < fk.length; ++kk) {
                  const Fk = fk[kk];
                  for (let kk = 0; kk < tk.numTargets; ++kk) kk == Jk ? yk.push(Fk) : yk.push({
                    frame: Fk.frame,
                    value: 0
                  })
                }
                Ak.setKeys(yk, !0);
                const mk = JR._DeduceAnimationInfo(Ak);
                mk && (Vk = {
                  name: Ak.name,
                  samplers: [],
                  channels: []
                }, JR._AddAnimation(ek.name, ek.hasRunningRuntimeAnimations ? Fk : Vk, kk, Ak, mk.dataAccessorType, mk.animationChannelTargetPath, Rk, ak, Xk, bk, mk.useQuaternion, wk, dk, tk.numTargets), Vk.samplers.length && Vk.channels.length && Bk.push(Vk))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
        let sk;
        if (kk.animationGroups) {
          const Vk = kk.animationGroups;
          for (const Jk of Vk) {
            const Vk = new Map,
              Ak = new Map,
              ek = new Set,
              yk = Jk.to - Jk.from;
            sk = {
              name: Jk.name,
              channels: [],
              samplers: []
            };
            for (let Fk = 0; Fk < Jk.targetedAnimations.length; ++Fk) {
              const dk = Jk.targetedAnimations[Fk],
                yk = dk.target,
                fk = dk.animation;
              if (wk && !wk(fk)) continue;
              const mk = bk.has(yk);
              if (this._IsTransformable(yk) || 1 === yk.length && this._IsTransformable(yk[0])) {
                const kk = JR._DeduceAnimationInfo(dk.animation);
                if (kk) {
                  const Fk = this._IsTransformable(yk) ? yk : this._IsTransformable(yk[0]) ? yk[0] : null;
                  Fk && JR._AddAnimation(`${fk.name}`, sk, Fk, fk, kk.dataAccessorType, kk.animationChannelTargetPath, Bk, Rk, tk, ak, kk.useQuaternion, Xk, mk)
                }
              } else if (yk instanceof wR || 1 === yk.length && yk[0] instanceof wR) {
                if (JR._DeduceAnimationInfo(dk.animation)) {
                  const Fk = yk instanceof wR ? yk : yk[0];
                  if (Fk) {
                    const Bk = kk.morphTargetManagers.find((kk => {
                      for (let Bk = 0; Bk < kk.numTargets; ++Bk)
                        if (kk.getTarget(Bk) === Fk) return !0;
                      return !1
                    }));
                    if (Bk) {
                      const Rk = kk.meshes.find((kk => kk.morphTargetManager === Bk));
                      Rk && (Vk.has(Rk) || Vk.set(Rk, new Map), Vk.get(Rk)?.set(Fk, fk), ek.add(Rk), Ak.set(Rk, fk))
                    }
                  }
                }
              }
            }
            ek.forEach((kk => {
              const Fk = kk.morphTargetManager;
              let bk = null;
              const wk = [],
                dk = Ak.get(kk).getKeys(),
                ek = dk.length;
              for (let Bk = 0; Bk < ek; ++Bk)
                for (let Rk = 0; Rk < Fk.numTargets; ++Rk) {
                  const tk = Fk.getTarget(Rk),
                    ak = Vk.get(kk);
                  if (ak) {
                    const Fk = ak.get(tk);
                    Fk ? (bk || (bk = new bR.b(`${Jk.name}_${kk.name}_MorphWeightAnimation`, "influence", Fk.framePerSecond, bR.b.ANIMATIONTYPE_FLOAT, Fk.Oa, Fk.enableBlending)), wk.push(Fk.getKeys()[Bk])) : wk.push({
                      frame: Jk.from + yk / ek * Bk,
                      value: tk.influence,
                      inTangent: dk[0].inTangent ? 0 : void 0,
                      outTangent: dk[0].outTangent ? 0 : void 0
                    })
                  }
                }
              bk.setKeys(wk, !0);
              const fk = JR._DeduceAnimationInfo(bk);
              fk && JR._AddAnimation(`${Jk.name}_${kk.name}_MorphWeightAnimation`, sk, kk, bk, fk.dataAccessorType, fk.animationChannelTargetPath, Bk, Rk, tk, ak, fk.useQuaternion, Xk, !1, Fk?.numTargets)
            })), sk.channels.length && sk.samplers.length && (dk?.set(Jk, Fk.length), Fk.push(sk))
          }
        }
      }
      static _AddAnimation(kk, Fk, Bk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek) {
        const yk = JR._CreateNodeAnimation(Bk, tk, Xk, Vk, Jk);
        let fk, mk, Wk, vk, ik, Yk;
        if (yk) {
          if (ek) {
            let kk, Fk = 0;
            const Bk = [];
            for (; yk.inputs.length > 0;) kk = yk.inputs.shift(), Fk % ek == 0 && Bk.push(kk), Fk++;
            yk.inputs = Bk
          }
          const kk = bk.get(Bk),
            tk = new Float32Array(yk.inputs);
          fk = wk.createBufferView(tk), mk = wk.createAccessor(fk, "SCALAR", 5126, yk.inputs.length, void 0, {
            min: [yk.inputsMin],
            max: [yk.inputsMax]
          }), sk.push(mk), Wk = sk.length - 1;
          const dk = new Rk.Quaternion,
            Vk = new Rk.Qe,
            Jk = new Rk.Qe,
            Lk = Bk instanceof tR.c,
            Ok = qB(ak),
            Ek = new Float32Array(yk.outputs.length * Ok);
          yk.outputs.forEach((function(kk, Fk) {
            let Bk = kk;
            switch (Xk) {
              case "translation":
                Ak && (Rk.Qe.FromArrayToRef(kk, 0, Jk), pB(Jk), Jk.toArray(Bk));
                break;
              case "rotation":
                4 === kk.length ? Rk.Quaternion.FromArrayToRef(kk, 0, dk) : (Bk = new Array(4), Rk.Qe.FromArrayToRef(kk, 0, Vk), Rk.Quaternion.FromEulerVectorToRef(Vk, dk)), Ak && (KB(dk), Lk && xB(dk)), dk.toArray(Bk)
            }
            Ek.set(Bk, Fk * Ok)
          })), fk = wk.createBufferView(Ek), mk = wk.createAccessor(fk, ak, 5126, yk.outputs.length), sk.push(mk), vk = sk.length - 1, ik = {
            interpolation: yk.samplerInterpolation,
            input: Wk,
            output: vk
          }, Fk.samplers.push(ik), Yk = {
            sampler: Fk.samplers.length - 1,
            target: {
              node: kk,
              path: Xk
            }
          }, Fk.channels.push(Yk)
        }
      }
      static _CreateBakedAnimation(kk, Fk, Bk, ak, Xk, bk, wk, dk, sk, Vk, Jk) {
        let Ak;
        const ek = Rk.Quaternion.Identity();
        let yk, fk, mk, Wk, vk, ik = null,
          Yk = null;
        Vk.min = tk.Tools.FloatRound(ak / bk);
        const Lk = Fk.getKeys();
        for (let Rk = 0, Ok = Lk.length; Rk < Ok; ++Rk) {
          if (fk = Lk[Rk], Rk + 1 < Ok)
            if (mk = Lk[Rk + 1], fk.value.equals && fk.value.equals(mk.value) || fk.value === mk.value) {
              if (0 !== Rk) continue;
              vk = fk.frame
            } else vk = mk.frame;
          else {
            if (Wk = Lk[Rk - 1], fk.value.equals && fk.value.equals(Wk.value) || fk.value === Wk.value) continue;
            vk = Xk
          }
          if (vk)
            for (let Rk = fk.frame; Rk <= vk; Rk += wk) {
              if (yk = tk.Tools.FloatRound(Rk / bk), yk === ik) continue;
              ik = yk, Yk = yk;
              const ak = {
                key: 0,
                repeatCount: 0,
                Oa: Fk.Oa
              };
              Ak = Fk._interpolate(Rk, ak), JR._SetInterpolatedValue(kk, Ak, yk, Fk, Bk, ek, dk, sk, Jk)
            }
        }
        Yk && (Vk.max = Yk)
      }
      static _ConvertFactorToVector3OrQuaternion(kk, Fk, Bk, ak, Xk) {
        const bk = JR._GetBasePositionRotationOrScale(Fk, ak, Xk),
          wk = Bk.targetProperty.split("."),
          dk = wk ? wk[1] : "",
          sk = Xk ? Rk.Quaternion.FromArray(bk).normalize() : Rk.Qe.FromArray(bk);
        switch (dk) {
          case "x":
          case "y":
          case "z":
            sk[dk] = kk;
            break;
          case "w":
            sk.w = kk;
            break;
          default:
            tk.Tools.Error(`glTFAnimation: Unsupported component name "${dk}"!`)
        }
        return sk
      }
      static _SetInterpolatedValue(kk, Fk, Bk, tk, ak, Xk, bk, wk, dk) {
        let sk;
        bk.push(Bk), "weights" !== ak ? (tk.dataType === bR.b.ANIMATIONTYPE_FLOAT && (Fk = this._ConvertFactorToVector3OrQuaternion(Fk, kk, tk, ak, dk)), "rotation" === ak ? (dk ? Xk = Fk : (sk = Fk, Rk.Quaternion.RotationYawPitchRollToRef(sk.y, sk.x, sk.z, Xk)), wk.push(Xk.PBk())) : (sk = Fk, wk.push(sk.PBk()))) : wk.push([Fk])
      }
      static _CreateLinearOrStepAnimation(kk, Fk, Bk, Rk, tk, ak) {
        for (const Xk of Fk.getKeys()) Rk.push(Xk.frame / Fk.framePerSecond), JR._AddKeyframeValue(Xk, Fk, tk, Bk, kk, ak)
      }
      static _CreateCubicSplineAnimation(kk, Fk, Bk, Rk, tk, ak) {
        Fk.getKeys().forEach((function(Xk) {
          Rk.push(Xk.frame / Fk.framePerSecond), JR._AddSplineTangent(dR.INTANGENT, tk, Bk, "CUBICSPLINE", Xk, ak), JR._AddKeyframeValue(Xk, Fk, tk, Bk, kk, ak), JR._AddSplineTangent(dR.OUTTANGENT, tk, Bk, "CUBICSPLINE", Xk, ak)
        }))
      }
      static _GetBasePositionRotationOrScale(kk, Fk, Bk) {
        let tk;
        if ("rotation" === Fk)
          if (Bk) {
            tk = (kk.rotationQuaternion ?? Rk.Quaternion.Identity()).PBk()
          } else {
            tk = (kk.rotation ?? Rk.Qe.Zero()).PBk()
          }
        else if ("translation" === Fk) {
          tk = (kk.position ?? Rk.Qe.Zero()).PBk()
        } else {
          tk = (kk.ta ?? Rk.Qe.One()).PBk()
        }
        return tk
      }
      static _AddKeyframeValue(kk, Fk, Bk, ak, Xk, bk) {
        let wk;
        const dk = Fk.dataType;
        if (dk === bR.b.ANIMATIONTYPE_VECTOR3) {
          let Fk = kk.value.PBk();
          if ("rotation" === ak) {
            const kk = Rk.Qe.FromArray(Fk);
            Fk = Rk.Quaternion.RotationYawPitchRoll(kk.y, kk.x, kk.z).PBk()
          }
          Bk.push(Fk)
        } else if (dk === bR.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === ak) Bk.push([kk.value]);
          else if (wk = this._ConvertFactorToVector3OrQuaternion(kk.value, Xk, Fk, ak, bk), wk) {
            if ("rotation" === ak) {
              const kk = bk ? wk : Rk.Quaternion.RotationYawPitchRoll(wk.y, wk.x, wk.z).normalize();
              Bk.push(kk.PBk())
            }
            Bk.push(wk.PBk())
          }
        } else dk === bR.b.ANIMATIONTYPE_QUATERNION ? Bk.push(kk.value.normalize().PBk()) : tk.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(kk, Fk, Bk) {
        let Rk, tk, ak = !1;
        if ("rotation" === Fk && !Bk) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let Xk = 0, bk = kk.length; Xk < bk; ++Xk)
          if (tk = kk[Xk], tk.inTangent || tk.outTangent)
            if (Rk) {
              if ("CUBICSPLINE" !== Rk) {
                Rk = "LINEAR", ak = !0;
                break
              }
            } else Rk = "CUBICSPLINE";
        else if (Rk) {
          if ("CUBICSPLINE" === Rk || tk.interpolation && 1 === tk.interpolation && "STEP" !== Rk) {
            Rk = "LINEAR", ak = !0;
            break
          }
        } else Rk = tk.interpolation && 1 === tk.interpolation ? "STEP" : "LINEAR";
        return Rk || (Rk = "LINEAR"), {
          interpolationType: Rk,
          shouldBakeAnimation: ak
        }
      }
      static _AddSplineTangent(kk, Fk, Bk, tk, ak, Xk) {
        let bk;
        const wk = kk === dR.INTANGENT ? ak.inTangent : ak.outTangent;
        if ("CUBICSPLINE" === tk) {
          if ("rotation" === Bk)
            if (wk)
              if (Xk) bk = wk.PBk();
              else {
                const kk = wk;
                bk = Rk.Quaternion.RotationYawPitchRoll(kk.y, kk.x, kk.z).PBk()
              }
          else bk = [0, 0, 0, 0];
          else bk = "weights" === Bk ? wk ? [wk] : [0] : wk ? wk.PBk() : [0, 0, 0];
          Fk.push(bk)
        }
      }
      static _CalculateMinMaxKeyFrames(kk) {
        let Fk = 1 / 0,
          Bk = -1 / 0;
        return kk.forEach((function(kk) {
          Fk = Math.min(Fk, kk.frame), Bk = Math.max(Bk, kk.frame)
        })), {
          min: Fk,
          max: Bk
        }
      }
    }

    function AR(kk, Fk, Bk, ak, Xk, bk) {
      const wk = {
          attributes: {},
          influence: kk.influence,
          name: kk.name
        },
        dk = Fk.geometry;
      if (!dk) return tk.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), wk;
      const Vk = bk ? -1 : 1,
        Jk = Rk.Qe.Zero();
      let Ak, ek;
      if (kk.hasPositions) {
        const ak = kk.getPositions(),
          bk = dk.getVerticesData(sk.e.PositionKind);
        if (bk) {
          const kk = new Float32Array(bk.length),
            Fk = [1 / 0, 1 / 0, 1 / 0],
            tk = [-1 / 0, -1 / 0, -1 / 0];
          ek = bk.length / 3, Ak = 0;
          for (let Bk = Ak; Bk < ek; ++Bk) {
            const Xk = Rk.Qe.FromArray(bk, 3 * Bk);
            Rk.Qe.FromArray(ak, 3 * Bk).subtractToRef(Xk, Jk), Jk.x *= Vk, Fk[0] = Math.min(Fk[0], Jk.x), tk[0] = Math.max(tk[0], Jk.x), Fk[1] = Math.min(Fk[1], Jk.y), tk[1] = Math.max(tk[1], Jk.y), Fk[2] = Math.min(Fk[2], Jk.z), tk[2] = Math.max(tk[2], Jk.z), kk[3 * Bk] = Jk.x, kk[3 * Bk + 1] = Jk.y, kk[3 * Bk + 2] = Jk.z
          }
          const dk = Bk.createBufferView(kk, 12),
            sk = Bk.createAccessor(dk, "VEC3", 5126, ak.length / 3, 0, {
              min: Fk,
              max: tk
            });
          Xk.push(sk), wk.attributes.POSITION = Xk.length - 1
        } else tk.Tools.Warn(`Morph target positions for mesh ${Fk.name} were not exported. Mesh does not have position vertex data`)
      }
      if (kk.hasNormals) {
        const ak = kk.getNormals(),
          bk = dk.getVerticesData(sk.e.NormalKind);
        if (bk) {
          const kk = new Float32Array(bk.length);
          ek = bk.length / 3, Ak = 0;
          for (let Bk = Ak; Bk < ek; ++Bk) {
            const Fk = Rk.Qe.FromArray(bk, 3 * Bk).normalize();
            Rk.Qe.FromArray(ak, 3 * Bk).normalize().subtractToRef(Fk, Jk), kk[3 * Bk] = Jk.x * Vk, kk[3 * Bk + 1] = Jk.y, kk[3 * Bk + 2] = Jk.z
          }
          const Fk = Bk.createBufferView(kk, 12),
            tk = Bk.createAccessor(Fk, "VEC3", 5126, ak.length / 3, 0);
          Xk.push(tk), wk.attributes.NORMAL = Xk.length - 1
        } else tk.Tools.Warn(`Morph target normals for mesh ${Fk.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (kk.hasTangents) {
        const ak = kk.getTangents(),
          bk = dk.getVerticesData(sk.e.TangentKind);
        if (bk) {
          ek = bk.length / 4;
          const kk = new Float32Array(3 * ek);
          Ak = 0;
          for (let Bk = Ak; Bk < ek; ++Bk) {
            const Fk = Rk.Qe.FromArray(bk, 4 * Bk);
            ZB(Fk);
            const tk = Rk.Qe.FromArray(ak, 3 * Bk);
            ZB(tk), tk.subtractToRef(Fk, Jk), kk[3 * Bk] = Jk.x * Vk, kk[3 * Bk + 1] = Jk.y, kk[3 * Bk + 2] = Jk.z
          }
          const Fk = Bk.createBufferView(kk, 12),
            tk = Bk.createAccessor(Fk, "VEC3", 5126, ek, 0);
          Xk.push(tk), wk.attributes.TANGENT = Xk.length - 1
        } else tk.Tools.Warn(`Morph target tangents for mesh ${Fk.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (kk.hasColors) {
        const ak = kk.getColors(),
          bk = dk.getVerticesData(sk.e.ColorKind),
          Vk = dk.getVertexBuffer(sk.e.ColorKind);
        if (bk && Vk) {
          const kk = Vk.getSize();
          ek = bk.length / kk;
          const Fk = new Float32Array(ek * kk);
          Ak = 0;
          for (let Bk = Ak; Bk < ek; ++Bk)
            if (3 === kk) {
              const tk = Rk.Qe.FromArray(bk, Bk * kk);
              Rk.Qe.FromArray(ak, Bk * kk).subtractToRef(tk, Jk), Fk[3 * Bk] = Jk.x, Fk[3 * Bk + 1] = Jk.y, Fk[3 * Bk + 2] = Jk.z
            } else if (4 === kk) {
            const tk = new Rk.Vector4,
              Xk = Rk.Vector4.FromArray(bk, Bk * kk);
            Rk.Vector4.FromArray(ak, Bk * kk).subtractToRef(Xk, tk), Fk[4 * Bk] = tk.x, Fk[4 * Bk + 1] = tk.y, Fk[4 * Bk + 2] = tk.z, Fk[4 * Bk + 3] = tk.w
          } else tk.Tools.Warn(`Unsupported number of components for color attribute: ${kk}`);
          const dk = Bk.createBufferView(Fk, 4 * kk),
            sk = Bk.createAccessor(dk, 3 === kk ? "VEC3" : "VEC4", 5126, ek, 0);
          Xk.push(sk), wk.attributes.COLOR_0 = Xk.length - 1
        } else tk.Tools.Warn(`Morph target colors for mesh ${Fk.name} were not exported. Mesh does not have colors vertex data`)
      }
      return wk
    }
    var eR = Bk(41009);
    class yR {}
    yR.DEFAULT_COLOR = Kk.e.White(), yR.DEFAULT_WIDTH_ATTENUATED = 1, yR.DEFAULT_WIDTH = .1;
    var fR = Bk(40516);
    class mR {
      constructor(kk) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = kk
      }
      moveTo(kk, Fk) {
        this._currentPath = new fR.i(kk, Fk), this._tempPaths.push(this._currentPath)
      }
      lineTo(kk, Fk) {
        this._currentPath.addLineTo(kk, Fk)
      }
      quadraticCurveTo(kk, Fk, Bk, Rk) {
        this._currentPath.addQuadraticCurveTo(kk, Fk, Bk, Rk, this._resolution)
      }
      bezierCurveTo(kk, Fk, Bk, Rk, tk, ak) {
        this._currentPath.addBezierCurveTo(kk, Fk, Bk, Rk, tk, ak, this._resolution)
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

    function WR(kk, Fk, Bk, Rk, tk, ak) {
      const Xk = ak.glyphs[kk] || ak.glyphs["?"];
      if (!Xk) return null;
      const bk = new mR(tk);
      if (Xk.o) {
        const kk = Xk.o.split(" ");
        for (let tk = 0, ak = kk.length; tk < ak;) {
          switch (kk[tk++]) {
            case "m": {
              const ak = parseInt(kk[tk++]) * Fk + Bk,
                Xk = parseInt(kk[tk++]) * Fk + Rk;
              bk.moveTo(ak, Xk);
              break
            }
            case "l": {
              const ak = parseInt(kk[tk++]) * Fk + Bk,
                Xk = parseInt(kk[tk++]) * Fk + Rk;
              bk.lineTo(ak, Xk);
              break
            }
            case "q": {
              const ak = parseInt(kk[tk++]) * Fk + Bk,
                Xk = parseInt(kk[tk++]) * Fk + Rk,
                wk = parseInt(kk[tk++]) * Fk + Bk,
                dk = parseInt(kk[tk++]) * Fk + Rk;
              bk.quadraticCurveTo(wk, dk, ak, Xk);
              break
            }
            case "b": {
              const ak = parseInt(kk[tk++]) * Fk + Bk,
                Xk = parseInt(kk[tk++]) * Fk + Rk,
                wk = parseInt(kk[tk++]) * Fk + Bk,
                dk = parseInt(kk[tk++]) * Fk + Rk,
                sk = parseInt(kk[tk++]) * Fk + Bk,
                Vk = parseInt(kk[tk++]) * Fk + Rk;
              bk.bezierCurveTo(wk, dk, sk, Vk, ak, Xk);
              break
            }
          }
        }
      }
      return bk.extractHoles(), {
        offsetX: Xk.ha * Fk,
        shapePath: bk
      }
    }

    function vR(kk, Fk, Bk, Rk) {
      const tk = Array.from(kk),
        ak = Fk / Rk.resolution,
        Xk = (Rk.boundingBox.yMax - Rk.boundingBox.yMin + Rk.underlineThickness) * ak,
        bk = [];
      let wk = 0,
        dk = 0;
      for (let sk = 0; sk < tk.length; sk++) {
        const kk = tk[sk];
        if ("\n" === kk) wk = 0, dk -= Xk;
        else {
          const Fk = WR(kk, ak, wk, dk, Bk, Rk);
          Fk && (wk += Fk.offsetX, bk.push(Fk.shapePath))
        }
      }
      return bk
    }
    class iR {
      static ConvertPoints(kk, Fk) {
        if (kk.length && Array.isArray(kk) && "number" === typeof kk[0]) return [kk];
        if (kk.length && Array.isArray(kk[0]) && "number" === typeof kk[0][0]) return kk;
        if (kk.length && !Array.isArray(kk[0]) && kk[0] instanceof zk.s) {
          const Fk = [];
          for (let Bk = 0; Bk < kk.length; Bk++) {
            const Rk = kk[Bk];
            Fk.push(Rk.x, Rk.y, Rk.z)
          }
          return [Fk]
        }
        if (kk.length > 0 && Array.isArray(kk[0]) && kk[0].length > 0 && kk[0][0] instanceof zk.s) {
          const Fk = [],
            Bk = kk;
          for (const kk of Bk) Fk.push(kk.flatMap((kk => [kk.x, kk.y, kk.z])));
          return Fk
        }
        if (kk instanceof Float32Array) {
          if (Fk?.floatArrayStride) {
            const Bk = [],
              Rk = 3 * Fk.floatArrayStride;
            for (let Fk = 0; Fk < kk.length; Fk += Rk) {
              const tk = new Array(Rk);
              for (let Bk = 0; Bk < Rk; Bk++) tk[Bk] = kk[Fk + Bk];
              Bk.push(tk)
            }
            return Bk
          }
          return [Array.from(kk)]
        }
        if (kk.length && kk[0] instanceof Float32Array) {
          const Fk = [];
          for (const Bk of kk) Fk.push(Array.from(Bk));
          return Fk
        }
        return []
      }
      static OmitZeroLengthPredicate(kk, Fk, Bk) {
        const Rk = [];
        return Fk.subtract(kk).lengthSquared() > 0 && Rk.push([kk, Fk]), Bk.subtract(Fk).lengthSquared() > 0 && Rk.push([Fk, Bk]), kk.subtract(Bk).lengthSquared() > 0 && Rk.push([Bk, kk]), 0 === Rk.length ? null : Rk
      }
      static OmitDuplicatesPredicate(kk, Fk, Bk, Rk) {
        const tk = [];
        return iR._SearchInPoints(kk, Fk, Rk) || tk.push([kk, Fk]), iR._SearchInPoints(Fk, Bk, Rk) || tk.push([Fk, Bk]), iR._SearchInPoints(Bk, kk, Rk) || tk.push([Bk, kk]), 0 === tk.length ? null : tk
      }
      static _SearchInPoints(kk, Fk, Bk) {
        for (const Rk of Bk)
          for (let Bk = 0; Bk < Rk.length; Bk++)
            if (Rk[Bk]?.equals(kk) && (Rk[Bk + 1]?.equals(Fk) || Rk[Bk - 1]?.equals(Fk))) return !0;
        return !1
      }
      static MeshesToLines(kk, Fk) {
        const Bk = [];
        for (let Rk = 0; Rk < kk.length; Rk++) {
          const tk = kk[Rk],
            ak = tk.getVerticesData(Pk.n.PositionKind),
            Xk = tk.hBk();
          if (ak && Xk)
            for (let kk = 0, bk = 0; kk < Xk.length; kk++) {
              const wk = 3 * Xk[bk++],
                dk = 3 * Xk[bk++],
                sk = 3 * Xk[bk++],
                Vk = new zk.s(ak[wk], ak[wk + 1], ak[wk + 2]),
                Jk = new zk.s(ak[dk], ak[dk + 1], ak[dk + 2]),
                Ak = new zk.s(ak[sk], ak[sk + 1], ak[sk + 2]);
              if (Fk) {
                const bk = Fk(Vk, Jk, Ak, Bk, kk, wk, tk, Rk, ak, Xk);
                if (bk)
                  for (const kk of bk) Bk.push(kk)
              } else Bk.push([Vk, Jk], [Jk, Ak], [Ak, Vk])
            }
        }
        return Bk
      }
      static ToVector3Array(kk) {
        if (Array.isArray(kk[0])) {
          const Fk = [],
            Bk = kk;
          for (const kk of Bk) {
            const Bk = [];
            for (let Fk = 0; Fk < kk.length; Fk += 3) Bk.push(new zk.s(kk[Fk], kk[Fk + 1], kk[Fk + 2]));
            Fk.push(Bk)
          }
          return Fk
        }
        const Fk = kk,
          Bk = [];
        for (let Rk = 0; Rk < Fk.length; Rk += 3) Bk.push(new zk.s(Fk[Rk], Fk[Rk + 1], Fk[Rk + 2]));
        return Bk
      }
      static ToNumberArray(kk) {
        return kk.flatMap((kk => [kk.x, kk.y, kk.z]))
      }
      static GetPointsCountInfo(kk) {
        const Fk = new Array(kk.length);
        let Bk = 0;
        for (let Rk = kk.length; Rk--;) Fk[Rk] = kk[Rk].length / 3, Bk += Fk[Rk];
        return {
          total: Bk,
          counts: Fk
        }
      }
      static GetLineLength(kk) {
        if (0 === kk.length) return 0;
        let Fk;
        Fk = "number" === typeof kk[0] ? iR.ToVector3Array(kk) : kk;
        const Bk = zk.l.Qe[0];
        let Rk = 0;
        for (let tk = 0; tk < Fk.length - 1; tk++) {
          const kk = Fk[tk];
          Rk += Fk[tk + 1].subtractToRef(kk, Bk).length()
        }
        return Rk
      }
      static GetLineLengthArray(kk, Fk) {
        const Bk = Fk ? new Float32Array(Fk, 0, kk.length / 3) : new Float32Array(kk.length / 3);
        let Rk = 0;
        for (let tk = 0, ak = kk.length / 3 - 1; tk < ak; tk++) {
          let Fk = kk[3 * tk + 0],
            ak = kk[3 * tk + 1],
            Xk = kk[3 * tk + 2];
          Fk -= kk[3 * tk + 3], ak -= kk[3 * tk + 4], Xk -= kk[3 * tk + 5];
          Rk += Math.sqrt(Fk * Fk + ak * ak + Xk * Xk), Bk[tk + 1] = Rk
        }
        return Bk
      }
      static SegmentizeSegmentByCount(kk, Fk, Bk) {
        const Rk = [],
          tk = Fk.subtract(kk),
          ak = zk.l.Qe[0];
        ak.J_(Bk);
        const Xk = zk.l.Qe[1];
        tk.divideToRef(ak, Xk);
        let bk = kk.clone();
        Rk.push(bk);
        for (let wk = 0; wk < Bk; wk++) bk = bk.clone(), Rk.push(bk.addInPlace(Xk));
        return Rk
      }
      static SegmentizeLineBySegmentLength(kk, Fk) {
        const Bk = kk[0] instanceof zk.s ? iR.GetLineSegments(kk) : "number" === typeof kk[0] ? iR.GetLineSegments(iR.ToVector3Array(kk)) : kk,
          Rk = [];
        for (const tk of Bk)
          if (tk.length > Fk) {
            const kk = iR.SegmentizeSegmentByCount(tk.point1, tk.point2, Math.ceil(tk.length / Fk));
            for (const Fk of kk) Rk.push(Fk)
          } else Rk.push(tk.point1), Rk.push(tk.point2);
        return Rk
      }
      static SegmentizeLineBySegmentCount(kk, Fk) {
        const Bk = "number" === typeof kk[0] ? iR.ToVector3Array(kk) : kk,
          Rk = iR.GetLineLength(Bk) / Fk;
        return iR.SegmentizeLineBySegmentLength(Bk, Rk)
      }
      static GetLineSegments(kk) {
        const Fk = [];
        for (let Bk = 0; Bk < kk.length - 1; Bk++) {
          const Rk = kk[Bk],
            tk = kk[Bk + 1],
            ak = tk.subtract(Rk).length();
          Fk.push({
            point1: Rk,
            point2: tk,
            length: ak
          })
        }
        return Fk
      }
      static GetMinMaxSegmentLength(kk) {
        const Fk = iR.GetLineSegments(kk).sort((kk => kk.length));
        return {
          min: Fk[0].length,
          max: Fk[Fk.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const tk = Fk * Bk;
        let ak = 0,
          Xk = 0;
        const bk = kk.length;
        for (let dk = 0; dk < bk; dk++) {
          if (tk <= ak + kk[dk].length) {
            Xk = dk;
            break
          }
          ak += kk[dk].length
        }
        const wk = (tk - ak) / kk[Xk].length;
        return kk[Xk].point2.subtractToRef(kk[Xk].point1, zk.l.Qe[0]), zk.l.Qe[0].scaleToRef(wk, zk.l.Qe[1]), Rk || zk.l.Qe[1].addInPlace(kk[Xk].point1), zk.l.Qe[1].clone()
      }
      static GetCircleLinePoints(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk,
          tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / Fk;
        const ak = [];
        for (let Xk = 0; Xk <= Fk; Xk++) ak.push(new zk.s(Math.cos(Xk * tk) * kk, Math.sin(Xk * tk) * Rk, Bk));
        return ak
      }
      static GetBezierLinePoints(kk, Fk, Bk, Rk) {
        return fR.f.CreateQuadraticBezier(kk, Fk, Bk, Rk).getPoints().flatMap((kk => [kk.x, kk.y, kk.z]))
      }
      static GetArrowCap(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [kk.clone(), kk.add(Fk.multiplyByFloats(Bk, Bk, Bk))],
          widths: [Rk, tk, ak, Xk]
        }
      }
      static GetPointsFromText(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          ak = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const Xk = [],
          bk = vR(kk, Fk, Bk, Rk);
        for (const wk of bk) {
          for (const kk of wk.paths) {
            const Fk = [],
              Bk = kk.getPoints();
            for (const kk of Bk) Fk.push(kk.x, kk.y, tk);
            Xk.push(Fk)
          }
          if (ak)
            for (const kk of wk.holes) {
              const Fk = [],
                Bk = kk.getPoints();
              for (const kk of Bk) Fk.push(kk.x, kk.y, tk);
              Xk.push(Fk)
            }
        }
        return Xk
      }
      static Color3toRGBAUint8(kk) {
        const Fk = new Uint8Array(4 * kk.length);
        for (let Bk = 0, Rk = 0; Bk < kk.length; Bk++) Fk[Rk++] = 255 * kk[Bk].r, Fk[Rk++] = 255 * kk[Bk].g, Fk[Rk++] = 255 * kk[Bk].b, Fk[Rk++] = 255;
        return Fk
      }
      static CreateColorsTexture(kk, Fk, Bk, Rk) {
        const tk = Rk.ne().getCaps().maxTextureSize ?? 1,
          ak = Fk.length > tk ? tk : Fk.length,
          Xk = Math.ceil(Fk.length / tk);
        Xk > 1 && (Fk = [...Fk, ...Array(ak * Xk - Fk.length).fill(Fk[0])]);
        const bk = iR.Color3toRGBAUint8(Fk),
          wk = new Lk.d(bk, ak, Xk, VB.d.TEXTUREFORMAT_RGBA, Rk, !1, !0, Bk);
        return wk.name = kk, wk
      }
      static PrepareEmptyColorsTexture(kk) {
        if (!yR.EmptyColorsTexture) {
          const Fk = new Uint8Array(4);
          yR.EmptyColorsTexture = new Lk.d(Fk, 1, 1, VB.d.TEXTUREFORMAT_RGBA, kk, !1, !1, Lk.d.NEAREST_NEAREST), yR.EmptyColorsTexture.name = "grlEmptyColorsTexture", yR.EmptyColorsTexture.yN.addOnce((() => {
            yR.EmptyColorsTexture = null
          }))
        }
        return yR.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        yR.EmptyColorsTexture?.dispose(), yR.EmptyColorsTexture = null
      }
      static BooleanToNumber(kk) {
        return kk ? 1 : 0
      }
    }
    class YR extends hk.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class oR extends qk.e {
      isCompatible(kk) {
        return !0
      }
      constructor(kk, Fk, Bk) {
        Bk = Bk || {
          color: yR.DEFAULT_COLOR
        };
        const Rk = new YR;
        Rk.GREASED_LINE_HAS_COLOR = !!Bk.color && !Bk.useColors, Rk.GREASED_LINE_SIZE_ATTENUATION = Bk.sizeAttenuation ?? !1, Rk.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === Bk.colorDistributionType, Rk.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (Fk ?? kk.XN()).useRightHandedSystem, Rk.GREASED_LINE_CAMERA_FACING = Bk.cameraFacing ?? !0, super(kk, oR.GREASED_LINE_MATERIAL_NAME, 200, Rk, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = Bk?.forceGLSL || oR.ForceGLSL, this._scene = Fk ?? kk.XN(), this._engine = this._scene.ne(), this._cameraFacing = Bk.cameraFacing ?? !0, this.visibility = Bk.visibility ?? 1, this.useDash = Bk.useDash ?? !1, this.dashRatio = Bk.dashRatio ?? .5, this.dashOffset = Bk.dashOffset ?? 0, this.width = Bk.width ? Bk.width : Bk.sizeAttenuation ? yR.DEFAULT_WIDTH_ATTENUATED : yR.DEFAULT_WIDTH, this._sizeAttenuation = Bk.sizeAttenuation ?? !1, this.colorMode = Bk.colorMode ?? 0, this._color = Bk.color ?? null, this.useColors = Bk.useColors ?? !1, this._colorsDistributionType = Bk.colorDistributionType ?? 0, this.colorsSampling = Bk.colorsSampling ?? Lk.d.NEAREST_NEAREST, this._colors = Bk.colors ?? null, this.dashCount = Bk.dashCount ?? 1, this.resolution = Bk.resolution ?? new zk.p(this._engine.getRenderWidth(), this._engine.getRenderHeight()), Bk.colorsTexture ? this.colorsTexture = Bk.colorsTexture : this._colors ? this.colorsTexture = iR.CreateColorsTexture(`${kk.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? yR.DEFAULT_COLOR, iR.PrepareEmptyColorsTexture(this._scene)), this._engine.yN.add((() => {
          iR.DisposeEmptyColorsTexture()
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
          kk.M_("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || kk.M_("viewProjection", this._scene.getTransformMatrix());
          const Fk = zk.l.Vector4[0];
          Fk.x = this._aspect, Fk.y = this._resolution.x, Fk.z = this._resolution.y, Fk.w = this.width, kk.updateVector4("grl_aspect_resolution_lineWidth", Fk)
        }
        const Fk = zk.l.Vector4[0];
        Fk.x = iR.BooleanToNumber(this.useDash), Fk.y = this._dashArray, Fk.z = this.dashOffset, Fk.w = this.dashRatio, kk.updateVector4("grl_dashOptions", Fk);
        const Bk = zk.l.Vector4[1];
        Bk.x = this.colorMode, Bk.y = this.visibility, Bk.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, Bk.w = iR.BooleanToNumber(this.useColors), kk.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", Bk), this._color && kk.updateColor3("grl_singleColor", this._color);
        const Rk = this.colorsTexture ?? yR.EmptyColorsTexture;
        kk.setTexture("grl_colors", Rk), kk.updateFloat2("grl_textureSize", Rk?.getSize().width ?? 1, Rk?.getSize().height ?? 1)
      }
      prepareDefines(kk, Fk, Bk) {
        kk.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, kk.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, kk.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, kk.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = Fk.useRightHandedSystem, kk.GREASED_LINE_CAMERA_FACING = this._cameraFacing, kk.GREASED_LINE_USE_OFFSETS = !!Bk.offsets
      }
      getClassName() {
        return oR.GREASED_LINE_MATERIAL_NAME
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
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Rk = this._colors?.length ?? 0;
        if (this._colors = kk, null !== kk && 0 !== kk.length) {
          if (!Fk || Bk)
            if (this.colorsTexture && Rk === kk.length && !Bk) {
              const Fk = iR.Color3toRGBAUint8(kk);
              this.colorsTexture.update(Fk)
            } else this.colorsTexture?.dispose(), this.colorsTexture = iR.CreateColorsTexture(`${this._material.name}-colors-texture`, kk, this.colorsSampling, this._scene)
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
      parse(kk, Fk, Bk) {
        super.parse(kk, Fk, Bk);
        const Rk = kk.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Rk.color && this.setColor(Rk.color, !0), Rk.colorDistributionType && (this.colorsDistributionType = Rk.colorDistributionType), Rk.colors && (this.colors = Rk.colors), Rk.colorsSampling && (this.colorsSampling = Rk.colorsSampling), Rk.colorMode && (this.colorMode = Rk.colorMode), Rk.useColors && (this.useColors = Rk.useColors), Rk.visibility && (this.visibility = Rk.visibility), Rk.useDash && (this.useDash = Rk.useDash), Rk.dashCount && (this.dashCount = Rk.dashCount), Rk.dashRatio && (this.dashRatio = Rk.dashRatio), Rk.dashOffset && (this.dashOffset = Rk.dashOffset), Rk.width && (this.width = Rk.width), Rk.sizeAttenuation && (this.sizeAttenuation = Rk.sizeAttenuation), Rk.resolution && (this.resolution = Rk.resolution), this.colors ? this.colorsTexture = iR.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, Fk) : iR.PrepareEmptyColorsTexture(Fk), this.markAllDefinesAsDirty()
      }
      copyTo(kk) {
        const Fk = kk;
        Fk.colorsTexture?.dispose(), this._colors && (Fk.colorsTexture = iR.CreateColorsTexture(`${Fk._material.name}-colors-texture`, this._colors, Fk.colorsSampling, this._scene)), Fk.setColor(this.color, !0), Fk.colorsDistributionType = this.colorsDistributionType, Fk.colorsSampling = this.colorsSampling, Fk.colorMode = this.colorMode, Fk.useColors = this.useColors, Fk.visibility = this.visibility, Fk.useDash = this.useDash, Fk.dashCount = this.dashCount, Fk.dashRatio = this.dashRatio, Fk.dashOffset = this.dashOffset, Fk.width = this.width, Fk.sizeAttenuation = this.sizeAttenuation, Fk.resolution = this.resolution, Fk.markAllDefinesAsDirty()
      }
      _isGLSL(kk) {
        return 0 === kk || this._forceGLSL
      }
    }
    oR.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", oR.ForceGLSL = !1;
    var LR = Bk(39817),
      OR = Bk(39829),
      ER = Bk(38318),
      SR = Bk(39887),
      NR = Bk(39255);
    class HR extends SR.n {
      constructor(kk, Fk, Rk) {
        const tk = Fk.ne(),
          ak = tk.isWebGPU && !(Rk.forceGLSL || HR.ForceGLSL),
          Xk = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        Fk.useRightHandedSystem && Xk.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const bk = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Rk.cameraFacing ? (Xk.push("GREASED_LINE_CAMERA_FACING"), bk.push("grl_previousAndSide", "grl_nextAndCounters")) : (bk.push("grl_slopes"), bk.push("grl_counters"));
        const wk = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (ak || wk.push("world", "viewProjection", "view", "projection"), super(kk, Fk, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: ak ? ["Scene", "Mesh"] : void 0,
            attributes: bk,
            uniforms: wk,
            samplers: ak ? [] : ["grlColors"],
            defines: Xk,
            extraInitializationsAsync: async () => {
              ak ? await Promise.all([Bk.e(324).then((() => Bk(61644))), Bk.e(383).then((() => Bk(61651)))]) : await Promise.all([Bk.e(317).then((() => Bk(61655))), Bk.e(384).then((() => Bk(61664)))])
            },
            shaderLanguage: ak ? 1 : 0
          }), this._color = Kk.e.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Rk = Rk || {
            color: yR.DEFAULT_COLOR
          }, this.visibility = Rk.visibility ?? 1, this.useDash = Rk.useDash ?? !1, this.dashRatio = Rk.dashRatio ?? .5, this.dashOffset = Rk.dashOffset ?? 0, this.dashCount = Rk.dashCount ?? 1, this.width = Rk.width ? Rk.width : Rk.sizeAttenuation && Rk.cameraFacing ? yR.DEFAULT_WIDTH_ATTENUATED : yR.DEFAULT_WIDTH, this.sizeAttenuation = Rk.sizeAttenuation ?? !1, this.color = Rk.color ?? Kk.e.White(), this.useColors = Rk.useColors ?? !1, this.colorsDistributionType = Rk.colorDistributionType ?? 0, this.colorsSampling = Rk.colorsSampling ?? Lk.d.NEAREST_NEAREST, this.colorMode = Rk.colorMode ?? 0, this._colors = Rk.colors ?? null, this._cameraFacing = Rk.cameraFacing ?? !0, this.resolution = Rk.resolution ?? new zk.p(tk.getRenderWidth(), tk.getRenderHeight()), Rk.colorsTexture ? this.colorsTexture = Rk.colorsTexture : this._colors ? this.colorsTexture = iR.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, Fk) : (this._color = this._color ?? yR.DEFAULT_COLOR, this.colorsTexture = iR.PrepareEmptyColorsTexture(Fk)), ak) {
          const kk = new NR.d;
          kk.setParameters(), kk.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", kk)
        }
        tk.yN.add((() => {
          iR.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== yR.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new zk.p(this._colorMode, this._colorsDistributionType))
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
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Rk = this._colors?.length ?? 0;
        if (this._colors = kk, null !== kk && 0 !== kk.length) {
          if (!Fk || Bk)
            if (this._colorsTexture && Rk === kk.length && !Bk) {
              const Fk = iR.Color3toRGBAUint8(kk);
              this._colorsTexture.update(Fk)
            } else this._colorsTexture && this._colorsTexture !== yR.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = iR.CreateColorsTexture(`${this.name}-colors-texture`, kk, this.colorsSampling, this.XN())
        } else {
          this._colorsTexture && this._colorsTexture !== yR.EmptyColorsTexture && this._colorsTexture.dispose();
          const kk = this.XN();
          kk && (this.colorsTexture = iR.PrepareEmptyColorsTexture(kk))
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
        this._useColors = kk, this.setFloat("grlUseColors", iR.BooleanToNumber(kk))
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
        this._useDash = kk, this.setFloat("grlUseDash", iR.BooleanToNumber(kk))
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
        this._sizeAttenuation = kk, this.setFloat("grlSizeAttenuation", iR.BooleanToNumber(kk))
      }
      get color() {
        return this._color
      }
      set color(kk) {
        this.setColor(kk)
      }
      setColor(kk) {
        kk = kk ?? yR.DEFAULT_COLOR, this._color = kk, this.setColor3("grlColor", kk)
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
      parse(kk, Fk, Bk) {
        const Rk = kk.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Rk.color && (this.color = Rk.color), Rk.colorDistributionType && (this.colorsDistributionType = Rk.colorDistributionType), Rk.colorsSampling && (this.colorsSampling = Rk.colorsSampling), Rk.colorMode && (this.colorMode = Rk.colorMode), Rk.useColors && (this.useColors = Rk.useColors), Rk.visibility && (this.visibility = Rk.visibility), Rk.useDash && (this.useDash = Rk.useDash), Rk.dashCount && (this.dashCount = Rk.dashCount), Rk.dashRatio && (this.dashRatio = Rk.dashRatio), Rk.dashOffset && (this.dashOffset = Rk.dashOffset), Rk.width && (this.width = Rk.width), Rk.sizeAttenuation && (this.sizeAttenuation = Rk.sizeAttenuation), Rk.resolution && (this.resolution = Rk.resolution), Rk.colors ? this.colorsTexture = iR.CreateColorsTexture(`${this.name}-colors-texture`, Rk.colors, this.colorsSampling, this.XN()) : this.colorsTexture = iR.PrepareEmptyColorsTexture(Fk), this._cameraFacing = Rk.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var uR, MR, gR;
    HR.ForceGLSL = !1,
      function(kk) {
        kk[kk.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", kk[kk.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(uR || (uR = {})),
      function(kk) {
        kk[kk.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", kk[kk.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", kk[kk.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(MR || (MR = {})),
      function(kk) {
        kk[kk.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", kk[kk.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", kk[kk.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", kk[kk.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", kk[kk.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(gR || (gR = {}));
    class UR extends LR.b {
      constructor(kk, Fk, Bk) {
        super(kk, Fk, null, null, !1, !1), this.name = kk, this._options = Bk, this._lazy = !1, this._updatable = !1, this._engine = Fk.ne(), this._lazy = Bk.lazy ?? !1, this._updatable = Bk.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = Bk.colorPointers ?? [], this._widths = Bk.widths ?? new Array(Bk.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(kk) {
        let Fk = 0;
        for (const Rk of this._points) Fk += Rk.length;
        const Bk = Fk / 3 * 2 - this._widths.length;
        for (let Rk = 0; Rk < Bk; Rk++) this._widths.push(kk)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Fy && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(kk, Fk) {
        for (const Bk of kk) this._points.push(Bk);
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
        this.material instanceof HR && this.material.setDefine("GREASED_LINE_USE_OFFSETS", kk?.length > 0), this._offsets = kk, this._offsetsBuffer ? this._offsetsBuffer.update(kk) : this._createOffsetsBuffer(kk)
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
        if (this.material && this.material instanceof HR) return this.material;
        const kk = this.material?.pluginManager?.getPlugin(oR.GREASED_LINE_MATERIAL_NAME);
        return kk || void 0
      }
      get points() {
        const kk = [];
        return ER.e.DeepCopy(this._points, kk), kk
      }
      setPoints(kk, Fk) {
        this._points = iR.ConvertPoints(kk, Fk?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), Fk?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, Fk)
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
        const Fk = new OR.e;
        return Fk.positions = this._vertexPositions, Fk.indices = this._indices, Fk.uvs = this._uvs, kk && (Fk.normals = [], OR.e.ComputeNormals(this._vertexPositions, this._indices, Fk.normals)), Fk.applyToMesh(this, this._options.updatable), Fk
      }
      _createOffsetsBuffer(kk) {
        const Fk = this._scene.ne(),
          Bk = new Pk.d(Fk, kk, this._updatable, 3);
        this.setVerticesBuffer(Bk.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = Bk
      }
    }
    class cR {
      constructor(kk, Fk) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = kk, this.wasAddedByNoopNode = Fk
      }
      getIndicesAccessor(kk, Fk, Bk, Rk, tk) {
        return this._indicesAccessorMap.get(kk)?.get(Fk)?.get(Bk)?.get(Rk)?.get(tk)
      }
      setIndicesAccessor(kk, Fk, Bk, Rk, tk, ak) {
        let Xk = this._indicesAccessorMap.get(kk);
        Xk || (Xk = new Map, this._indicesAccessorMap.set(kk, Xk));
        let bk = Xk.get(Fk);
        bk || (bk = new Map, Xk.set(Fk, bk));
        let wk = bk.get(Bk);
        wk || (wk = new Map, bk.set(Bk, wk));
        let dk = wk.get(Rk);
        dk || (dk = new Map, wk.set(Rk, dk)), dk.set(tk, ak)
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
      setRemappedBufferView(kk, Fk, Bk) {
        this._remappedBufferView.set(kk, new Map), this._remappedBufferView.get(kk).set(Fk, Bk)
      }
      getRemappedBufferView(kk, Fk) {
        return this._remappedBufferView.get(kk)?.get(Fk)
      }
      getVertexAccessor(kk, Fk, Bk) {
        return this._vertexAccessorMap.get(kk)?.get(Fk)?.get(Bk)
      }
      setVertexAccessor(kk, Fk, Bk, Rk) {
        let tk = this._vertexAccessorMap.get(kk);
        tk || (tk = new Map, this._vertexAccessorMap.set(kk, tk));
        let ak = tk.get(Fk);
        ak || (ak = new Map, tk.set(Fk, ak)), ak.set(Bk, Rk)
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
        const Bk = this._meshMorphTargetMap.get(kk) || [];
        this._meshMorphTargetMap.set(kk, Bk), -1 === Bk.indexOf(Fk) && Bk.push(Fk)
      }
      getMorphTargetsFromMesh(kk) {
        return this._meshMorphTargetMap.get(kk)
      }
    }
    class GR {
      _ApplyExtension(kk, Fk, Bk, Rk) {
        if (Bk >= Fk.length) return Promise.resolve(kk);
        const tk = Rk(Fk[Bk], kk);
        return tk ? tk.then((async kk => kk ? await this._ApplyExtension(kk, Fk, Bk + 1, Rk) : null)) : this._ApplyExtension(kk, Fk, Bk + 1, Rk)
      }
      _ApplyExtensions(kk, Fk) {
        const Bk = [];
        for (const Rk of GR._ExtensionNames) Bk.push(this._extensions[Rk]);
        return this._ApplyExtension(kk, Bk, 0, Fk)
      }
      _extensionsPostExportNodeAsync(kk, Fk, Bk, Rk, tk) {
        return this._ApplyExtensions(Fk, ((Fk, ak) => Fk.postExportNodeAsync && Fk.postExportNodeAsync(kk, ak, Bk, Rk, tk, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(kk, Fk, Bk) {
        return this._ApplyExtensions(Fk, ((Fk, Rk) => Fk.postExportMaterialAsync && Fk.postExportMaterialAsync(kk, Rk, Bk)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        const Rk = [];
        return await Promise.all(GR._ExtensionNames.map((async tk => {
          const ak = this._extensions[tk];
          if (ak.postExportMaterialAdditionalTexturesAsync) {
            const tk = await ak.postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk);
            Rk.push(...tk)
          }
        }))), Rk
      }
      _extensionsPostExportTextures(kk, Fk, Bk) {
        for (const Rk of GR._ExtensionNames) {
          const tk = this._extensions[Rk];
          tk.postExportTexture && tk.postExportTexture(kk, Fk, Bk)
        }
      }
      _extensionsPostExportMeshPrimitive(kk) {
        for (const Fk of GR._ExtensionNames) {
          const Bk = this._extensions[Fk];
          Bk.postExportMeshPrimitive && Bk.postExportMeshPrimitive(kk, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const kk of GR._ExtensionNames) {
          const Fk = this._extensions[kk];
          Fk.preGenerateBinaryAsync && await Fk.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(kk) {
        for (const Fk of GR._ExtensionNames) {
          const Bk = this._extensions[Fk];
          Bk.enabled && kk(Bk)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((kk => {
          var Fk, Bk, Rk;
          kk.wasUsed && ((Fk = this._glTF).extensionsUsed || (Fk.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(kk.name) && this._glTF.extensionsUsed.push(kk.name), kk.required && ((Bk = this._glTF).extensionsRequired || (Bk.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(kk.name) && this._glTF.extensionsRequired.push(kk.name)), (Rk = this._glTF).extensions || (Rk.extensions = {}), kk.onExporting && kk.onExporting())
        }))
      }
      _loadExtensions() {
        for (const kk of GR._ExtensionNames) {
          const Fk = GR._ExtensionFactories[kk](this);
          this._extensions[kk] = Fk
        }
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yk.c.LastCreatedScene,
          Fk = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${ek.e.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new MB(this), this._extensions = {}, this._bufferManager = new RR, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !kk) throw new Error("No scene available to export");
        this._babylonScene = kk, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: kk => kk?.bS?.extras,
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
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        GR.UnregisterExtension(kk) && tk.Tools.Warn(`Extension with the name ${kk} already exists`), GR._ExtensionFactories[kk] = Fk;
        const Rk = Bk ?? 0;
        GR._ExtensionOrders[kk] = Rk;
        let ak = GR._ExtensionNames.length;
        for (let tk = 0; tk < GR._ExtensionNames.length; tk++) {
          const kk = GR._ExtensionNames[tk];
          if (Rk < GR._ExtensionOrders[kk]) {
            ak = tk;
            break
          }
        }
        GR._ExtensionNames.splice(ak, 0, kk)
      }
      static UnregisterExtension(kk) {
        if (!GR._ExtensionFactories[kk]) return !1;
        delete GR._ExtensionFactories[kk], delete GR._ExtensionOrders[kk];
        const Fk = GR._ExtensionNames.indexOf(kk);
        return -1 !== Fk && GR._ExtensionNames.splice(Fk, 1), !0
      }
      _generateJSON(kk, Fk, Bk) {
        const Rk = {
          byteLength: kk
        };
        return Rk.byteLength && (this._glTF.buffers = [Rk]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.ef = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Rk.uri = Fk + ".bin"), Bk ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(kk) {
        const Fk = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const Bk = this._generateJSON(Fk.byteLength, kk, !0),
          Rk = new Blob([Fk], {
            type: "application/octet-stream"
          }),
          tk = kk + ".gltf",
          ak = kk + ".bin",
          Xk = new dk;
        if (Xk.files[tk] = Bk, Xk.files[ak] = Rk, this._imageData)
          for (const bk in this._imageData) Xk.files[bk] = this._imageData[bk];
        return Xk
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
        const Bk = this._generateJSON(Fk.byteLength),
          Rk = kk + ".glb";
        let tk, ak = Bk.length;
        if ("undefined" !== typeof TextEncoder) {
          tk = (new TextEncoder).encode(Bk), ak = tk.length
        }
        const Xk = this._getPadding(ak),
          bk = this._getPadding(Fk.byteLength),
          wk = 28 + ak + Xk + Fk.byteLength + bk,
          sk = new FR(wk);
        if (sk.writeUInt32(1179937895), sk.writeUInt32(2), sk.writeUInt32(wk), sk.writeUInt32(ak + Xk), sk.writeUInt32(1313821514), tk) sk.writeTypedArray(tk);
        else {
          const kk = "_".charCodeAt(0);
          for (let Fk = 0; Fk < ak; ++Fk) {
            const Rk = Bk.charCodeAt(Fk);
            Rk != Bk.codePointAt(Fk) ? sk.writeUInt8(kk) : sk.writeUInt8(Rk)
          }
        }
        for (let dk = 0; dk < Xk; ++dk) sk.writeUInt8(32);
        sk.writeUInt32(Fk.byteLength + bk), sk.writeUInt32(5130562), sk.writeTypedArray(Fk);
        for (let dk = 0; dk < bk; ++dk) sk.writeUInt8(0);
        const Vk = new dk;
        return Vk.files[Rk] = new Blob([sk.getOutputData()], {
          type: "application/octet-stream"
        }), Vk
      }
      _setNodeTransformation(kk, Fk, Bk) {
        if (Fk.getPivotPoint().equalsWithEpsilon(rB, cB.c) || tk.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Fk.position.equalsWithEpsilon(rB, cB.c)) {
          const tk = Rk.TmpVectors.Qe[0].sBk(Fk.position);
          Bk && pB(tk), kk.translation = tk.PBk()
        }
        Fk.ta.equalsWithEpsilon(zB, cB.c) || (kk.scale = Fk.ta.PBk());
        const ak = Fk.rotationQuaternion?.clone() || Rk.Quaternion.FromEulerAngles(Fk.rotation.x, Fk.rotation.y, Fk.rotation.z);
        ak.equalsWithEpsilon(DB, cB.c) || (Bk && KB(ak), kk.rotation = ak.normalize().PBk())
      }
      _setCameraTransformation(kk, Fk, Bk) {
        const tk = Rk.TmpVectors.Qe[0],
          ak = Rk.TmpVectors.Quaternion[0],
          Xk = Fk.getWorldMatrix();
        if (Fk.parent) {
          const kk = Fk.parent.getWorldMatrix().invertToRef(Rk.TmpVectors.Matrix[0]);
          Xk.multiplyToRef(kk, Rk.TmpVectors.Matrix[1]).decompose(void 0, ak, tk)
        } else Xk.decompose(void 0, ak, tk);
        tk.equalsWithEpsilon(rB, cB.c) || (Bk && pB(tk), kk.translation = tk.PBk()), Bk && KB(ak), this._babylonScene.useRightHandedSystem || xB(ak), ak.equalsWithEpsilon(DB, cB.c) || (kk.rotation = ak.PBk())
      }
      _listAvailableCameras() {
        for (const kk of this._babylonScene.cameras) {
          const Fk = {
            type: kk.mode === tR.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (kk.name && (Fk.name = kk.name), "perspective" === Fk.type) Fk.perspective = {
            aspectRatio: kk.ne().getAspectRatio(kk),
            yfov: kk.fovMode === tR.c.FOVMODE_VERTICAL_FIXED ? kk.fov : kk.fov * kk.ne().getAspectRatio(kk),
            znear: kk.minZ,
            zfar: kk.maxZ
          };
          else if ("orthographic" === Fk.type) {
            const Bk = kk.orthoLeft && kk.orthoRight ? .5 * (kk.orthoRight - kk.orthoLeft) : .5 * kk.ne().getRenderWidth(),
              Rk = kk.orthoBottom && kk.orthoTop ? .5 * (kk.orthoTop - kk.orthoBottom) : .5 * kk.ne().getRenderHeight();
            Fk.orthographic = {
              xmag: Bk,
              ymag: Rk,
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
        for (const Bk of this._babylonScene.skeletons) {
          if (Bk.bones.length <= 0) continue;
          const ak = this._skinMap.get(Bk);
          if (void 0 == ak) continue;
          const Xk = {};
          let bk = -1;
          for (let kk = 0; kk < Bk.bones.length; ++kk) {
            const Fk = Bk.bones[kk],
              Rk = Fk.getIndex() ?? kk; - 1 !== Rk && (Xk[Rk] = Fk, Rk > bk && (bk = Rk))
          }
          const wk = [];
          for (let Bk = 0; Bk <= bk; ++Bk) {
            const bk = Xk[Bk],
              dk = bk.getTransformNode(),
              sk = dk ? this._nodeMap.get(dk) : void 0;
            if (void 0 === sk) {
              tk.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            ak.joints.push(sk);
            const Vk = bk.getAbsoluteInverseBindMatrix().clone();
            kk.has(dk) && (Fk = Vk, GB.invertToRef(Rk.TmpVectors.Matrix[0]).multiplyToRef(Fk, Fk).multiplyToRef(GB, Fk)), wk.push(Vk)
          }
          const dk = this._nodesSkinMap.get(ak);
          if (ak.joints.length > 0 && void 0 !== dk) {
            const kk = new Float32Array(16 * wk.length);
            wk.forEach(((Fk, Bk) => {
              kk.set(Fk.m, 16 * Bk)
            }));
            const Fk = this._bufferManager.createBufferView(kk);
            this._accessors.push(this._bufferManager.createAccessor(Fk, "MAT4", 5126, wk.length)), ak.inverseBindMatrices = this._accessors.length - 1, this._skins.push(ak);
            const Bk = this._skins.length - 1;
            for (const Rk of dk) Rk.skin = Bk
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
          Bk = new Array,
          Rk = new Array,
          tk = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let ak;
        if (tk && !this._options.includeCoordinateSystemConversionNodes)
          for (const dk of this._babylonScene.animationGroups)
            for (const kk of dk.targetedAnimations) {
              const Fk = kk.target;
              Fk instanceof Vk.e && !Fk.parent && (ak ?? (ak = new Set)).add(Fk)
            }
        for (const dk of this._babylonScene.rootNodes) {
          const kk = dk.animations,
            Xk = !!kk && kk.length > 0 || ak?.has(dk);
          tk && !this._options.includeCoordinateSystemConversionNodes && TB(dk, this._babylonScene.useRightHandedSystem) && !Xk ? Rk.push(...dk.getChildren()) : this._babylonScene.useRightHandedSystem ? Fk.push(dk) : Bk.push(dk)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const Xk = new cR(!0, !1);
        kk.nodes.push(...await this._exportNodesAsync(Bk, Xk));
        const bk = new cR(!1, !1);
        kk.nodes.push(...await this._exportNodesAsync(Fk, bk));
        const wk = new cR(!1, !0);
        kk.nodes.push(...await this._exportNodesAsync(Rk, wk)), kk.nodes.length && this._scenes.push(kk), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(Xk.getNodesSet()), this._babylonScene.animationGroups.length && JR._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Xk.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
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
        const Bk = this._cameras.indexOf(Fk);
        return Bk >= 0 ? Bk : void 0
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
            const Bk = this._textures[kk];
            for (const Fk of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const kk = Bk?.extensions?.[Fk]?.source;
              if ("number" === typeof kk) return kk
            }
            return Bk?.source
          }
          case "samplers": {
            const kk = this._materialExporter.getTextureInfo(Fk)?.index;
            return void 0 === kk ? void 0 : this._textures[kk]?.sampler
          }
          case "skins": {
            const kk = this._skinMap.get(Fk),
              Bk = kk ? this._skins.indexOf(kk) : -1;
            return Bk >= 0 ? Bk : void 0
          }
          case "scenes":
            return Fk === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(kk, Fk, Bk) {
        const Rk = this._nodes[kk];
        if (!Rk) throw new Error(`Cannot write ${Fk}: glTF node ${kk} does not exist.`);
        Rk.extensions || (Rk.extensions = {}), Rk.extensions[Fk] = Bk
      }
      _shouldExportNode(kk) {
        let Fk = this._shouldExportNodeMap.get(kk);
        return void 0 === Fk && (Fk = this._options.shouldExportNode(kk), this._shouldExportNodeMap.set(kk, Fk)), Fk
      }
      async _exportNodesAsync(kk, Fk) {
        const Bk = new Array;
        this._exportBuffers(kk, Fk);
        for (const Rk of kk) await this._exportNodeAsync(Rk, Bk, Fk);
        return Bk
      }
      _collectBuffers(kk, Fk, Bk, Rk, tk) {
        if (this._shouldExportNode(kk) && kk instanceof Jk.c && kk.geometry) {
          const ak = kk.geometry.getVertexBuffers();
          if (ak)
            for (const Rk in ak) {
              if (!CB(Rk)) continue;
              const Xk = ak[Rk];
              tk.setHasVertexColorAlpha(Xk, kk.hasVertexAlpha);
              const bk = Xk._buffer,
                wk = Fk.get(bk) || [];
              Fk.set(bk, wk), -1 === wk.indexOf(Xk) && wk.push(Xk);
              const dk = Bk.get(Xk) || [];
              Bk.set(Xk, dk), -1 === dk.indexOf(kk) && dk.push(kk)
            }
          const Xk = kk.morphTargetManager;
          if (Xk)
            for (let Fk = 0; Fk < Xk.numTargets; Fk++) {
              const Bk = Xk.getTarget(Fk),
                tk = Rk.get(Bk) || [];
              Rk.set(Bk, tk), -1 === tk.indexOf(kk) && tk.push(kk)
            }
        }
        for (const ak of kk.getChildren()) this._collectBuffers(ak, Fk, Bk, Rk, tk)
      }
      _exportBuffers(kk, Fk) {
        const Bk = new Map,
          Rk = new Map,
          tk = new Map;
        for (const bk of kk) this._collectBuffers(bk, Bk, Rk, tk, Fk);
        const ak = Array.from(Bk.keys());
        for (const bk of ak) {
          const kk = bk.getData();
          if (!kk) throw new Error("Buffer data is not available");
          const tk = Bk.get(bk);
          if (!tk) continue;
          const ak = tk[0].byteStride;
          if (tk.some((kk => kk.byteStride !== ak))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const Xk = nB(kk).slice();
          for (const Fk of tk) {
            const kk = Rk.get(Fk),
              {
                byteOffset: Bk,
                byteStride: tk,
                componentCount: ak,
                type: bk,
                count: wk,
                normalized: dk,
                kind: Vk
              } = hB(Fk, kk);
            switch (Vk) {
              case sk.e.NormalKind:
              case sk.e.TangentKind:
                (0, gB.i)(Xk, Bk, tk, ak, bk, wk, dk, (kk => {
                  const Fk = Math.sqrt(kk[0] * kk[0] + kk[1] * kk[1] + kk[2] * kk[2]);
                  if (Fk > 0) {
                    const Bk = 1 / Fk;
                    kk[0] *= Bk, kk[1] *= Bk, kk[2] *= Bk
                  }
                }));
                break;
              case sk.e.ColorKind: {
                const Fk = kk.filter((kk => kk.material instanceof XR.StandardMaterial || null == kk.material)).length;
                if (0 == Fk) break;
                if (Fk != kk.length) {
                  Hk.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                bk == sk.e.UNSIGNED_BYTE && Hk.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Rk = new fk.Color3,
                  Vk = new fk.c,
                  Jk = this._babylonScene.ne().useExactSrgbConversions;
                (0, gB.i)(Xk, Bk, tk, ak, bk, wk, dk, (kk => {
                  3 === kk.length ? (Rk.MFk(kk, 0), Rk.toLinearSpaceToRef(Rk, Jk), Rk.toArray(kk, 0)) : (Vk.MFk(kk, 0), Vk.toLinearSpaceToRef(Vk, Jk), Vk.toArray(kk, 0))
                }))
              }
            }
          }
          if (Fk.convertToRightHanded) {
            for (const kk of tk) {
              const Fk = Rk.get(kk),
                {
                  byteOffset: Bk,
                  byteStride: tk,
                  componentCount: ak,
                  type: bk,
                  count: wk,
                  normalized: dk,
                  kind: Vk
                } = hB(kk, Fk);
              switch (Vk) {
                case sk.e.PositionKind:
                case sk.e.NormalKind:
                case sk.e.TangentKind:
                  (0, gB.i)(Xk, Bk, tk, ak, bk, wk, dk, (kk => {
                    kk[0] = -kk[0]
                  }))
              }
            }
            Fk.convertedToRightHandedBuffers.set(bk, Xk)
          }
          const wk = this._bufferManager.createBufferView(Xk, ak);
          Fk.setVertexBufferView(bk, wk);
          const dk = new Map;
          for (const Fk of tk) {
            const kk = Rk.get(Fk),
              {
                kind: Bk,
                totalVertices: tk
              } = hB(Fk, kk);
            switch (Bk) {
              case sk.e.MatricesIndicesKind:
              case sk.e.MatricesIndicesExtraKind:
                if (Fk.type == sk.e.FLOAT) {
                  const kk = Fk.getFloatData(tk);
                  null !== kk && dk.set(Fk, kk)
                }
            }
          }
          0 !== dk.size && Hk.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const Vk = Array.from(dk.keys());
          for (const Bk of Vk) {
            const kk = dk.get(Bk);
            if (!kk) continue;
            const Rk = kk.some((kk => kk >= 256)),
              tk = new(Rk ? Uint16Array : Uint8Array)(kk.length);
            for (let Fk = 0; Fk < kk.length; Fk++) tk[Fk] = kk[Fk];
            const ak = this._bufferManager.createBufferView(tk, 4 * (Rk ? 2 : 1));
            Fk.setRemappedBufferView(bk, Bk, ak)
          }
        }
        const Xk = Array.from(tk.keys());
        for (const bk of Xk) {
          const kk = tk.get(bk);
          if (!kk) continue;
          const Bk = AR(bk, kk[0], this._bufferManager, this._bufferViews, this._accessors, Fk.convertToRightHanded);
          for (const Rk of kk) Fk.bindMorphDataToMesh(Rk, Bk)
        }
      }
      async _exportNodeAsync(kk, Fk, Bk) {
        let Rk = this._nodeMap.get(kk);
        if (void 0 !== Rk) return void(Fk.includes(Rk) || Fk.push(Rk));
        const tk = await this._createNodeAsync(kk, Bk);
        if (tk) {
          Rk = this._nodes.length, this._nodes.push(tk), this._nodeMap.set(kk, Rk), Bk.pushExportedNode(kk), Fk.push(Rk);
          const ak = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            Xk = [];
          this._babylonScene.animationGroups.length || (JR._CreateMorphTargetAnimationFromMorphTargetAnimations(kk, ak, Xk, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Bk.convertToRightHanded, this._options.shouldExportAnimation), kk.animations.length && JR._CreateNodeAnimationFromNodeAnimations(kk, ak, Xk, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Bk.convertToRightHanded, this._options.shouldExportAnimation)), ak.channels.length && ak.samplers.length && this._animations.push(ak), Xk.forEach((kk => {
            kk.channels.length && kk.samplers.length && this._animations.push(kk)
          }))
        }
        const ak = tk ? [] : Fk;
        for (const Xk of kk.getChildren()) await this._exportNodeAsync(Xk, ak, Bk);
        tk && ak.length && (tk.children = ak)
      }
      async _createNodeAsync(kk, Fk) {
        if (!this._shouldExportNode(kk)) return null;
        const Bk = {};
        if (kk.name && (Bk.name = kk.name), kk.metadata) {
          const Fk = this._options.metadataSelector(kk.metadata);
          Fk && (Bk.extras = Fk)
        }
        if (kk instanceof Vk.e && (this._setNodeTransformation(Bk, kk, Fk.convertToRightHanded), kk instanceof Jk.c)) {
          const Rk = kk instanceof Ak.b ? kk.rRk : kk;
          if (Rk.AY && Rk.AY.length > 0 && (Bk.mesh = await this._exportMeshAsync(Rk, Fk)), kk.skeleton) {
            const Fk = this._skinMap.get(kk.skeleton);
            void 0 !== Fk && (void 0 === this._nodesSkinMap.get(Fk) && this._nodesSkinMap.set(Fk, []), this._nodesSkinMap.get(Fk)?.push(Bk))
          }
        }
        if (kk instanceof UB.d) {
          const Rk = this._camerasMap.get(kk);
          if (Rk) {
            void 0 === this._nodesCameraMap.get(Rk) && this._nodesCameraMap.set(Rk, []), this._setCameraTransformation(Bk, kk, Fk.convertToRightHanded);
            const tk = kk.parent;
            if (null !== tk && lB(kk, tk)) {
              const kk = this._nodeMap.get(tk);
              if (void 0 !== kk) {
                const Fk = this._nodes[kk];
                return jB(Bk, Fk), this._nodesCameraMap.get(Rk)?.push(Fk), null
              }
            }
            this._nodesCameraMap.get(Rk)?.push(Bk)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", Bk, kk, this._nodeMap, Fk.convertToRightHanded) ? Bk : (Hk.b.Warn(`Not exporting node ${kk.name}`), null)
      }
      _exportIndices(kk, Fk, Bk, Rk, tk, Xk, bk, wk, dk) {
        let sk = null;
        dk.mode = function(kk) {
          switch (kk) {
            case ak.c.TriangleFillMode:
              return 4;
            case ak.c.TriangleStripDrawMode:
              return 5;
            case ak.c.TriangleFanDrawMode:
              return 6;
            case ak.c.PointListDrawMode:
            case ak.c.PointFillMode:
              return 0;
            case ak.c.LineLoopDrawMode:
              return 2;
            case ak.c.LineListDrawMode:
              return 1;
            case ak.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${kk}`)
        }(Xk);
        const Vk = bk !== ak.c.CounterClockWiseSideOrientation && function(kk) {
          switch (kk) {
            case ak.c.TriangleFillMode:
            case ak.c.TriangleStripDrawMode:
            case ak.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(Xk);
        if (Vk) {
          if (Xk === ak.c.TriangleStripDrawMode || Xk === ak.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const bk = Fk ? new Uint32Array(Rk) : new Uint16Array(Rk);
          if (kk)
            for (let Fk = 0; Fk + 2 < Rk; Fk += 3) bk[Fk] = kk[Bk + Fk] + tk, bk[Fk + 1] = kk[Bk + Fk + 2] + tk, bk[Fk + 2] = kk[Bk + Fk + 1] + tk;
          else
            for (let kk = 0; kk + 2 < Rk; kk += 3) bk[kk] = kk, bk[kk + 1] = kk + 2, bk[kk + 2] = kk + 1;
          sk = bk
        } else if (kk && 0 !== tk) {
          const ak = Fk ? new Uint32Array(Rk) : new Uint16Array(Rk);
          for (let Fk = 0; Fk < Rk; Fk++) ak[Fk] = kk[Bk + Fk] + tk;
          sk = ak
        } else kk && (sk = function(kk, Fk, Bk, Rk) {
          let tk = kk;
          return 0 === Fk && Bk === kk.length || (tk = Array.isArray(kk) ? kk.slice(Fk, Fk + Bk) : kk.subarray(Fk, Fk + Bk)), tk instanceof Int32Array ? new Uint32Array(tk.buffer, tk.byteOffset, tk.length) : Array.isArray(tk) ? Rk ? new Uint32Array(tk) : new Uint16Array(tk) : tk
        }(kk, Bk, Rk, Fk));
        if (sk) {
          let ak = wk.getIndicesAccessor(kk, Bk, Rk, tk, Vk);
          if (void 0 === ak) {
            const Xk = this._bufferManager.createBufferView(sk),
              bk = Fk ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(Xk, "SCALAR", bk, Rk, 0)), ak = this._accessors.length - 1, wk.setIndicesAccessor(kk, Bk, Rk, tk, Vk, ak)
          }
          dk.indices = ak
        }
      }
      _exportVertexBuffer(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = kk.getKind();
        if (!CB(Xk)) return;
        if (Xk.startsWith("uv") && !this._options.exportUnusedUVs && (!Fk || !this._materialNeedsUVsSet.has(Fk))) return;
        let bk = tk.getVertexAccessor(kk, Bk, Rk);
        if (void 0 === bk) {
          const Fk = tk.convertedToRightHandedBuffers.get(kk._buffer) || kk._buffer.getData(),
            ak = Xk === sk.e.PositionKind ? function(kk, Fk, Bk, Rk) {
              const {
                byteOffset: tk,
                byteStride: ak,
                type: Xk,
                normalized: bk
              } = Fk, wk = Fk.getSize(), dk = new Array(wk).fill(1 / 0), sk = new Array(wk).fill(-1 / 0);
              return (0, gB.i)(kk, tk + Bk * ak, ak, wk, Xk, Rk * wk, bk, (kk => {
                for (let Fk = 0; Fk < wk; Fk++) dk[Fk] = Math.min(dk[Fk], kk[Fk]), sk[Fk] = Math.max(sk[Fk], kk[Fk])
              })), {
                min: dk,
                max: sk
              }
            }(Fk, kk, Bk, Rk) : void 0,
            wk = (Xk === sk.e.MatricesIndicesKind || Xk === sk.e.MatricesIndicesExtraKind) && kk.type === sk.e.FLOAT,
            dk = wk ? sk.e.UNSIGNED_BYTE : kk.type,
            Vk = wk ? void 0 : kk.normalized,
            Jk = wk ? tk.getRemappedBufferView(kk._buffer, kk) : tk.getVertexBufferView(kk._buffer),
            Ak = kk.byteOffset + Bk * kk.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(Jk, function(kk, Fk) {
            if (kk == sk.e.ColorKind) return Fk ? "VEC4" : "VEC3";
            switch (kk) {
              case sk.e.PositionKind:
              case sk.e.NormalKind:
                return "VEC3";
              case sk.e.TangentKind:
              case sk.e.MatricesIndicesKind:
              case sk.e.MatricesIndicesExtraKind:
              case sk.e.MatricesWeightsKind:
              case sk.e.MatricesWeightsExtraKind:
                return "VEC4";
              case sk.e.UVKind:
              case sk.e.UV2Kind:
              case sk.e.UV3Kind:
              case sk.e.UV4Kind:
              case sk.e.UV5Kind:
              case sk.e.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${kk}`)
          }(Xk, tk.hasVertexColorAlpha(kk)), dk, Rk, Ak, ak, Vk)), bk = this._accessors.length - 1, tk.setVertexAccessor(kk, Bk, Rk, bk)
        }
        ak.attributes[function(kk) {
          switch (kk) {
            case sk.e.PositionKind:
              return "POSITION";
            case sk.e.NormalKind:
              return "NORMAL";
            case sk.e.TangentKind:
              return "TANGENT";
            case sk.e.ColorKind:
              return "COLOR_0";
            case sk.e.UVKind:
              return "TEXCOORD_0";
            case sk.e.UV2Kind:
              return "TEXCOORD_1";
            case sk.e.UV3Kind:
              return "TEXCOORD_2";
            case sk.e.UV4Kind:
              return "TEXCOORD_3";
            case sk.e.UV5Kind:
              return "TEXCOORD_4";
            case sk.e.UV6Kind:
              return "TEXCOORD_5";
            case sk.e.MatricesIndicesKind:
              return "JOINTS_0";
            case sk.e.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case sk.e.MatricesWeightsKind:
              return "WEIGHTS_0";
            case sk.e.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${kk}`)
        }(Xk)] = bk
      }
      async _exportMaterialAsync(kk, Fk, Bk, Rk) {
        let tk = this._materialMap.get(kk);
        if (void 0 === tk) {
          const Rk = Fk && Object.keys(Fk).some((kk => kk.startsWith("uv")));
          if ((kk = kk instanceof aR.e ? kk.l_[Bk.materialIndex] : kk) instanceof LF) tk = await this._materialExporter.exportPBRMaterialAsync(kk, Rk);
          else if (kk instanceof XR.StandardMaterial) tk = await this._materialExporter.exportStandardMaterialAsync(kk, Rk);
          else {
            if (!(kk instanceof QF)) return void Hk.b.Warn(`Unsupported material '${kk.name}' with type ${kk.getClassName()}`);
            tk = await this._materialExporter.exportOpenPBRMaterialAsync(kk, Rk)
          }
          this._materialMap.set(kk, tk)
        }
        Rk.material = tk
      }
      async _exportMeshAsync(kk, Fk) {
        let Bk = Fk.getMesh(kk);
        if (void 0 !== Bk) return Bk;
        const Rk = {
          primitives: []
        };
        Bk = this._meshes.length, this._meshes.push(Rk), Fk.setMesh(kk, Bk);
        const tk = kk.isUnIndexed ? null : kk.hBk(),
          Xk = kk.geometry?.getVertexBuffers(),
          bk = Fk.getMorphTargetsFromMesh(kk),
          wk = kk instanceof eR.e,
          dk = kk instanceof UR,
          sk = kk.AY;
        if (Xk && sk && sk.length > 0)
          for (const Vk of sk) {
            const Bk = {
                attributes: {}
              },
              sk = Vk.Ry() || this._babylonScene.defaultMaterial;
            if (dk) {
              const Fk = {
                  name: sk.name
                },
                Rk = kk,
                tk = fk.Color3.White(),
                ak = Rk.material?.alpha ?? 1,
                Xk = Rk.greasedLineMaterial?.color ?? tk;
              (!Xk.equalsWithEpsilon(tk, cB.c) || ak < 1) && (Fk.pbrMetallicRoughness = {
                baseColorFactor: [...Xk.PBk(), ak]
              }), this._materials.push(Fk), Bk.material = this._materials.length - 1
            } else if (wk) {
              const Fk = {
                  name: sk.name
                },
                Rk = kk;
              (!Rk.color.equalsWithEpsilon(fk.Color3.White(), cB.c) || Rk.alpha < 1) && (Fk.pbrMetallicRoughness = {
                baseColorFactor: [...Rk.color.PBk(), Rk.alpha]
              }), this._materials.push(Fk), Bk.material = this._materials.length - 1
            } else await this._exportMaterialAsync(sk, Xk, Vk, Bk);
            const Jk = wk || dk ? ak.c.LineListDrawMode : kk.overrideRenderingFillMode ?? sk.fillMode;
            let Ak = sk._getEffectiveOrientation(kk);
            Fk.wasAddedByNoopNode && !kk.XN().useRightHandedSystem && (Ak = Ak === ak.c.ClockWiseSideOrientation ? ak.c.CounterClockWiseSideOrientation : ak.c.ClockWiseSideOrientation), this._exportIndices(tk, tk ? (0, gB.b)(tk, Vk.indexCount, Vk.indexStart, Vk.verticesStart) : Vk.verticesCount > 65535, tk ? Vk.indexStart : Vk.verticesStart, tk ? Vk.indexCount : Vk.verticesCount, -Vk.verticesStart, Jk, Ak, Fk, Bk);
            for (const kk of Object.values(Xk)) this._exportVertexBuffer(kk, sk, Vk.verticesStart, Vk.verticesCount, Fk, Bk);
            if (bk) {
              Bk.targets = [];
              for (const kk of bk) Bk.targets.push(kk.attributes)
            }
            Rk.primitives.push(Bk), this._extensionsPostExportMeshPrimitive(Bk)
          }
        if (bk) {
          Rk.weights = [], Rk.extras || (Rk.extras = {}), Rk.extras.targetNames = [];
          for (const kk of bk) Rk.weights.push(kk.influence), Rk.extras.targetNames.push(kk.name)
        }
        return Bk
      }
    }
    GR._ExtensionNames = new Array, GR._ExtensionFactories = {}, GR._ExtensionOrders = {};
    class TR {
      static async GLTFAsync(kk, Fk, Bk) {
        Bk && Bk.exportWithoutWaitingForScene || await kk.whenReadyAsync();
        const Rk = new GR(kk, Bk),
          tk = await Rk.generateGLTFAsync(Fk.replace(/\.[^/.]+$/, ""));
        return Rk.dispose(), tk
      }
      static async GLBAsync(kk, Fk, Bk) {
        Bk && Bk.exportWithoutWaitingForScene || await kk.whenReadyAsync();
        const Rk = new GR(kk, Bk),
          tk = await Rk.generateGLBAsync(Fk.replace(/\.[^/.]+$/, ""));
        return Rk.dispose(), tk
      }
    }
    const rR = "EXT_mesh_gpu_instancing";

    function DR(kk, Fk) {
      const Bk = new Float32Array(3 * Fk);
      for (let Rk = 0; Rk < Fk; Rk++) Bk[3 * Rk + 0] = kk[4 * Rk + 0], Bk[3 * Rk + 1] = kk[4 * Rk + 1], Bk[3 * Rk + 2] = kk[4 * Rk + 2];
      return Bk
    }
    class zR {
      constructor(kk) {
        this.name = rR, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(kk, Fk, Bk, Rk, tk, ak) {
        return await new Promise((kk => {
          if (Fk && Bk instanceof LR.b && Bk.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const kk = zk.s.Zero(),
              Rk = zk.e.Identity(),
              Xk = zk.s.One(),
              bk = Bk.thinInstanceGetWorldMatrices(),
              wk = zk.l.Qe[2],
              dk = zk.l.Quaternion[1],
              sk = zk.l.Qe[3];
            let Vk = !1,
              Jk = !1,
              Ak = !1;
            const ek = new Float32Array(3 * Bk.i_),
              yk = new Float32Array(4 * Bk.i_),
              fk = new Float32Array(3 * Bk.i_);
            let mk = 0;
            for (const Fk of bk) Fk.decompose(sk, dk, wk), tk && (pB(wk), KB(dk)), ek.set(wk.PBk(), 3 * mk), yk.set(dk.normalize().PBk(), 4 * mk), fk.set(sk.PBk(), 3 * mk), Vk = Vk || !wk.equalsWithEpsilon(kk), Jk = Jk || !dk.equalsWithEpsilon(Rk), Ak = Ak || !sk.equalsWithEpsilon(Xk), mk++;
            const Wk = {
              attributes: {}
            };
            Vk && (Wk.attributes.TRANSLATION = this._buildAccessor(ek, "VEC3", Bk.i_, ak)), Jk && (Wk.attributes.ROTATION = this._buildAccessor(yk, "VEC4", Bk.i_, ak)), Ak && (Wk.attributes.SCALE = this._buildAccessor(fk, "VEC3", Bk.i_, ak));
            let vk = Bk._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (vk) {
              const kk = Bk.i_,
                Fk = "VEC3";
              Bk.hasVertexAlpha && vk.length === 4 * kk ? (this._instanceColorWarned || (Hk.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), vk = DR(vk, kk)) : vk.length === 4 * kk && (vk = DR(vk, kk)), vk.length === 3 * kk && (Wk.attributes._COLOR_0 = this._buildAccessor(vk, Fk, kk, ak))
            }
            Fk.extensions = Fk.extensions || {}, Fk.extensions[rR] = Wk
          }
          kk(Fk)
        }))
      }
      _buildAccessor(kk, Fk, Bk, Rk) {
        const tk = Rk.createBufferView(kk),
          ak = Rk.createAccessor(tk, Fk, 5126, Bk);
        return this._exporter._accessors.push(ak), this._exporter._accessors.length - 1
      }
    }
    let PR = !1;

    function hR() {
      PR || (PR = !0, GR.RegisterExtension(rR, (kk => new zR(kk))))
    }
    Bk(39897);
    hR();
    var qR = Bk(41267);

    function CR(kk, Fk, Bk, Rk) {
      const tk = kk;
      let ak = null,
        Xk = null,
        bk = null,
        wk = null;
      const dk = {},
        sk = Fk.find((kk => "POSITION" === kk.dracoName));
      if (!sk) throw new Error("Draco: Missing position attribute for encoding.");
      if (!Bk) {
        const kk = sk.data.length / sk.size;
        Bk = new(kk > 65535 ? Uint32Array : Uint16Array)(kk);
        for (let Fk = 0; Fk < kk; Fk++) Bk[Fk] = Fk
      }
      try {
        ak = new tk.Encoder, Xk = new tk.MeshBuilder, bk = new tk.Mesh, Xk.AddFacesToMesh(bk, Bk.length / 3, Bk);
        const kk = new Map([
          [Float32Array, (kk, Fk, Bk, Rk, tk, ak) => kk.AddFloatAttribute(Fk, Bk, Rk, tk, ak)],
          [Uint32Array, (kk, Fk, Bk, Rk, tk, ak) => kk.AddUInt32Attribute(Fk, Bk, Rk, tk, ak)],
          [Uint16Array, (kk, Fk, Bk, Rk, tk, ak) => kk.AddUInt16Attribute(Fk, Bk, Rk, tk, ak)],
          [Uint8Array, (kk, Fk, Bk, Rk, tk, ak) => kk.AddUInt8Attribute(Fk, Bk, Rk, tk, ak)],
          [Int32Array, (kk, Fk, Bk, Rk, tk, ak) => kk.AddInt32Attribute(Fk, Bk, Rk, tk, ak)],
          [Int16Array, (kk, Fk, Bk, Rk, tk, ak) => kk.AddInt16Attribute(Fk, Bk, Rk, tk, ak)],
          [Int8Array, (kk, Fk, Bk, Rk, tk, ak) => kk.AddInt8Attribute(Fk, Bk, Rk, tk, ak)]
        ]);
        for (const Bk of Fk) {
          Bk.data instanceof Uint8ClampedArray && (Bk.data = new Uint8Array(Bk.data));
          const Fk = kk.get(Bk.data.constructor),
            wk = Bk.data.length / Bk.size;
          dk[Bk.kind] = Fk(Xk, bk, tk[Bk.dracoName], wk, Bk.size, Bk.data), Rk.quantizationBits && Rk.quantizationBits[Bk.dracoName] && ak.SetAttributeQuantization(tk[Bk.dracoName], Rk.quantizationBits[Bk.dracoName])
        }
        Rk.method && ak.SetEncodingMethod(tk[Rk.method]), void 0 !== Rk.encodeSpeed && void 0 !== Rk.decodeSpeed && ak.SetSpeedOptions(Rk.encodeSpeed, Rk.decodeSpeed), wk = new tk.DracoInt8Array;
        const sk = ak.EncodeMeshToDracoBuffer(bk, wk);
        if (sk <= 0) throw new Error("Draco: Failed to encode.");
        const Vk = new Int8Array(sk);
        for (let Fk = 0; Fk < sk; Fk++) Vk[Fk] = wk.GetValue(Fk);
        return {
          data: Vk,
          attributeIds: dk
        }
      } finally {
        bk && tk.destroy(bk), Xk && tk.destroy(Xk), ak && tk.destroy(ak), wk && tk.destroy(wk)
      }
    }

    function ZR() {
      let kk;
      onmessage = Fk => {
        const Bk = Fk.data;
        switch (Bk.id) {
          case "init": {
            Bk.url && importScripts(Bk.url);
            const Fk = Bk.wasmBinary ? {
              wasmBinary: Bk.wasmBinary
            } : {};
            kk = DracoEncoderModule(Fk), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!kk) throw new Error("Draco: Encoder module is not available.");
            kk.then((kk => {
              const Fk = CR(kk, Bk.attributes, Bk.indices, Bk.options);
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
    class pR {
      constructor(kk) {
        if (kk.workerPool) return void(this._workerPoolPromise = Promise.resolve(kk.workerPool));
        const Fk = kk.wasmBinary,
          Bk = kk.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Rk = Bk && "function" === typeof Worker && "function" === typeof URL,
          tk = Rk || !kk.jsModule,
          ak = kk.wasmUrl && kk.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: tk ? EF.h.GetBabylonScriptURL(kk.wasmUrl, !0) : "",
            wasmBinaryPromise: Fk ? Promise.resolve(Fk) : EF.h.LoadFileAsync(EF.h.GetBabylonScriptURL(kk.wasmBinaryUrl, !0))
          } : {
            url: tk ? EF.h.GetBabylonScriptURL(kk.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Rk ? this._workerPoolPromise = ak.wasmBinaryPromise.then((kk => {
          const Fk = this._getWorkerContent(),
            Rk = URL.createObjectURL(new Blob([Fk], {
              type: "application/javascript"
            }));
          return new qR.d(Bk, (() => async function(kk, Fk, Bk) {
            return await new Promise(((Rk, tk) => {
              const ak = Fk => {
                  kk.removeEventListener("error", ak), kk.removeEventListener("message", Xk), tk(Fk)
                },
                Xk = Fk => {
                  "initDone" === Fk.data.id && (kk.removeEventListener("error", ak), kk.removeEventListener("message", Xk), Rk(kk))
                };
              if (kk.addEventListener("error", ak), kk.addEventListener("message", Xk), Fk) {
                const Rk = Fk.slice(0);
                kk.postMessage({
                  id: "init",
                  url: Bk,
                  wasmBinary: Rk
                }, [Rk])
              } else kk.postMessage({
                id: "init",
                url: Bk
              })
            }))
          }(new Worker(Rk), kk, ak.url)))
        })) : this._modulePromise = ak.wasmBinaryPromise.then((async Fk => {
          if (!this._isModuleAvailable() && !kk.jsModule) {
            if (!ak.url) throw new Error("Draco codec module is not available");
            await EF.h.LoadBabylonScriptAsync(ak.url)
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

    function KR() {
      const kk = kk => !!kk && "object" === typeof kk;
      for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
      return Bk.reduce(((Fk, Bk) => {
        const Rk = Object.keys(Bk);
        for (const tk of Rk) {
          const Rk = Fk[tk],
            ak = Bk[tk];
          Array.isArray(Rk) && Array.isArray(ak) ? Fk[tk] = Rk.concat(ak) : kk(Rk) && kk(ak) ? Fk[tk] = KR(Rk, ak) : Fk[tk] = ak
        }
        return Fk
      }), {})
    }

    function xR(kk) {
      return kk === Pk.n.PositionKind ? "POSITION" : kk === Pk.n.NormalKind ? "NORMAL" : kk === Pk.n.ColorKind ? "COLOR" : kk.startsWith(Pk.n.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const jR = {
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
    class lR extends pR {
      static get DefaultAvailable() {
        return !!((kk = lR.DefaultConfiguration).wasmUrl && (kk.wasmBinary || kk.wasmBinaryUrl) && "object" === typeof WebAssembly || kk.fallbackUrl);
        var kk
      }
      static get Default() {
        return lR._Default ?? (lR._Default = new lR), lR._Default
      }
      static ResetDefault(kk) {
        lR._Default && (kk || lR._Default.dispose(), lR._Default = null)
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
        return `${CR}(${ZR})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lR.DefaultConfiguration)
      }
      async _encodeAsync(kk, Fk, Bk) {
        const Rk = Bk ? KR(jR, Bk) : jR;
        if (this._workerPoolPromise) {
          const Bk = await this._workerPoolPromise;
          return await new Promise(((tk, ak) => {
            Bk.push(((Bk, Xk) => {
              const bk = kk => {
                  Bk.removeEventListener("error", bk), Bk.removeEventListener("message", wk), ak(kk), Xk()
                },
                wk = kk => {
                  "encodeMeshSuccess" === kk.data.id ? (Bk.removeEventListener("error", bk), Bk.removeEventListener("message", wk), tk(kk.data.encodedMeshData), Xk()) : "encodeMeshError" === kk.data.id && (Bk.removeEventListener("error", bk), Bk.removeEventListener("message", wk), ak(new Error(kk.data.errorMessage)), Xk())
                };
              Bk.addEventListener("error", bk), Bk.addEventListener("message", wk);
              const dk = [];
              for (const Fk of kk) dk.push(Fk.data.buffer);
              Fk && dk.push(Fk.buffer), Bk.postMessage({
                id: "encodeMesh",
                attributes: kk,
                indices: Fk,
                options: Rk
              }, dk)
            }))
          }))
        }
        if (this._modulePromise) {
          return CR((await this._modulePromise).module, kk, Fk, Rk)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(kk, Fk) {
        if (0 == kk.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        kk instanceof LR.b && kk.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === Fk?.method && (Hk.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), Fk.method = "MESH_SEQUENTIAL_ENCODING");
        const Bk = function(kk) {
            let Fk = kk.hBk(void 0, !0);
            return !Fk || Fk instanceof Uint32Array || Fk instanceof Uint16Array || (Fk = ((0, gB.b)(Fk, Fk.length) ? Uint32Array : Uint16Array).from(Fk)), Fk
          }(kk),
          Rk = function(kk, Fk) {
            const Bk = [];
            for (const Rk of kk.getVerticesDataKinds()) {
              if (Fk?.includes(Rk)) {
                if (Rk === Pk.n.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const tk = kk.getVertexBuffer(Rk),
                ak = tk.getSize(),
                Xk = (0, gB.p)(tk.getData(), ak, tk.type, tk.byteOffset, tk.byteStride, kk.getTotalVertices(), !0);
              Bk.push({
                kind: Rk,
                dracoName: xR(Rk),
                size: ak,
                data: Xk
              })
            }
            return Bk
          }(kk, Fk?.excludedAttributes);
        return await this._encodeAsync(Rk, Bk, Fk)
      }
    }
    lR.DefaultConfiguration = {
      wasmUrl: `${EF.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${EF.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${EF.h._DefaultCdnUrl}/draco_encoder.js`
    }, lR._Default = null;
    const nR = "KHR_draco_mesh_compression";
    class IR {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(kk) {
        this.name = nR, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === kk.options.meshCompressionMethod && lR.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(kk, Fk, Bk) {
        if (!this.enabled) return;
        if (4 !== kk.mode && 5 !== kk.mode) return void Hk.b.Warn("Cannot compress primitive with mode " + kk.mode + ".");
        const Rk = [],
          tk = [];
        let ak = null;
        if (void 0 !== kk.indices) {
          const Xk = Bk[kk.indices],
            bk = Fk.getBufferView(Xk);
          ak = Fk.getData(bk).slice(), Rk.push(bk), tk.push(Xk)
        }
        const Xk = [];
        for (const [sk, Vk] of Object.entries(kk.attributes)) {
          const kk = Bk[Vk],
            ak = Fk.getBufferView(kk),
            wk = qB(kk.type),
            dk = (0, gB.p)(Fk.getData(ak), wk, kk.componentType, kk.byteOffset || 0, ak.byteStride || (0, gB.n)(kk.componentType) * wk, kk.count, !0);
          Xk.push({
            kind: sk,
            dracoName: (bk = sk, "POSITION" === bk ? "POSITION" : "NORMAL" === bk ? "NORMAL" : bk.startsWith("COLOR") ? "COLOR" : bk.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: qB(kk.type),
            data: dk
          }), Rk.push(ak), tk.push(kk)
        }
        var bk;
        const wk = {
            method: kk.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          dk = lR.Default._encodeAsync(Xk, ak, wk).then((Bk => {
            const ak = {
                bufferView: -1,
                attributes: Bk.attributeIds
              },
              Xk = Fk.createBufferView(Bk.data);
            Fk.setBufferView(ak, Xk);
            for (const kk of Rk) this._bufferViewsUsed.add(kk);
            for (const kk of tk) this._accessorsUsed.add(kk);
            kk.extensions || (kk.extensions = {}), kk.extensions[nR] = ak
          })).catch((kk => {
            Hk.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + kk.message)
          }));
        this._encodePromises.push(dk), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(kk) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((Fk => {
          kk.getPropertiesWithBufferView(Fk).every((kk => this._accessorsUsed.has(kk))) && kk.removeBufferView(Fk)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let QR = !1;

    function kt() {
      QR || (QR = !0, GR.RegisterExtension(nR, (kk => new IR(kk))))
    }
    kt();
    var Ft = Bk(41003);
    const Bt = "KHR_lights_punctual",
      Rt = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      tt = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      Xt = zk.s.Backward();
    class bt {
      constructor(kk) {
        this.name = Bt, this.enabled = !0, this.required = !1, this._exporter = kk
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Bt] = this._lights
      }
      async postExportNodeAsync(kk, Fk, Bk, Rk, tk) {
        return await new Promise((ak => {
          if (!(Bk instanceof VR.d)) return void ak(Fk);
          const Xk = Bk.getTypeID() == VR.d.LIGHTTYPEID_POINTLIGHT ? "point" : Bk.getTypeID() == VR.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : Bk.getTypeID() == VR.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!Xk || !(Bk instanceof Ft.c)) return Hk.b.Warn(`${kk}: Light ${Bk.name} is not supported in ${Bt}`), void ak(Fk);
          if (Bk.falloffType !== VR.d.FALLOFF_GLTF && Hk.b.Warn(`${kk}: Light falloff for ${Bk.name} does not match the ${Bt} specification!`), !Bk.position.LXk(0, 0, 0)) {
            const kk = zk.l.Qe[0].sBk(Bk.position);
            tk && pB(kk), Fk.translation = kk.PBk()
          }
          if ("point" !== Xk) {
            const kk = Bk.direction.normalizeToRef(zk.l.Qe[0]);
            tk && pB(kk);
            const Rk = zk.e.FromUnitVectorsToRef(Xt, kk, zk.l.Quaternion[0]);
            zk.e.IsIdentity(Rk) || (Fk.rotation = Rk.PBk())
          }
          const bk = {
            type: Xk,
            name: Bk.name,
            color: Bk.diffuse.PBk(),
            intensity: Bk.intensity,
            range: Bk.range
          };
          if (IB(bk, Rt), "spot" === Xk) {
            const kk = Bk;
            bk.spot = {
              innerConeAngle: kk.innerAngle / 2,
              outerConeAngle: kk.angle / 2
            }, IB(bk.spot, tt)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(bk);
          const wk = {
              light: this._lights.lights.length - 1
            },
            dk = Bk.parent;
          if (dk && lB(Bk, dk)) {
            const kk = Rk.get(dk);
            if (kk) {
              const Bk = this._exporter._nodes[kk];
              return jB(Fk, Bk), Bk.extensions || (Bk.extensions = {}), Bk.extensions[Bt] = wk, void ak(null)
            }
          }
          Fk.extensions || (Fk.extensions = {}), Fk.extensions[Bt] = wk, ak(Fk)
        }))
      }
    }
    let wt = !1;

    function dt() {
      wt || (wt = !0, GR.RegisterExtension(Bt, (kk => new bt(kk))))
    }
    dt();
    const st = "KHR_interactivity";
    class Vt {
      constructor(kk) {
        this._exporter = kk, this.name = st, this.enabled = !!kk.options.khrInteractivity, this.required = kk.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var kk, Fk, Bk;
        const Rk = this._exporter.options.khrInteractivity;
        if (!Rk) return;
        const tk = Rk.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: kk => this._exporter._getNodeIndex(kk),
          getAnimationIndex: kk => this._exporter._getAnimationIndex(kk),
          getCameraIndex: kk => this._exporter._getCameraIndex(kk),
          getMaterialIndex: kk => this._exporter._getMaterialIndex(kk),
          getRootIndex: (kk, Fk) => this._exporter._getRootIndex(kk, Fk),
          setNodeExtension: (kk, Fk, Bk) => this._exporter._setNodeExtension(kk, Fk, Bk)
        });
        this._exporter._glTF.extensions[st] = tk;
        for (const ak of Rk.additionalExtensionsUsed)(kk = this._exporter._glTF).extensionsUsed || (kk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(ak) && this._exporter._glTF.extensionsUsed.push(ak);
        for (const ak of Rk.additionalExtensionsRequired)(Fk = this._exporter._glTF).extensionsUsed || (Fk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(ak) && this._exporter._glTF.extensionsUsed.push(ak), (Bk = this._exporter._glTF).extensionsRequired || (Bk.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(ak) && this._exporter._glTF.extensionsRequired.push(ak)
      }
    }
    let Jt = !1;

    function At() {
      Jt || (Jt = !0, GR.RegisterExtension(st, (kk => new Vt(kk)), 200))
    }
    At();
    const et = "EXT_lights_area",
      yt = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      ft = {
        aspect: 1
      },
      mt = zk.s.Backward();
    class Wt {
      constructor(kk) {
        this.name = et, this.enabled = !0, this.required = !1, this._exporter = kk
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[et] = this._lights
      }
      async postExportNodeAsync(kk, Fk, Bk, Rk, tk) {
        return await new Promise((ak => {
          if (!(Bk instanceof VR.d)) return void ak(Fk);
          const Xk = Bk.getTypeID() == VR.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!Xk) return Hk.b.Warn(`${kk}: Light ${Bk.name} is not supported in ${et}`), void ak(Fk);
          const bk = Bk;
          if (bk.falloffType !== VR.d.FALLOFF_GLTF && Hk.b.Warn(`${kk}: Light falloff for ${Bk.name} does not match the ${et} specification!`), !bk.position.LXk(0, 0, 0)) {
            const kk = zk.l.Qe[0].sBk(bk.position);
            tk && pB(kk), Fk.translation = kk.PBk()
          }
          const wk = zk.s.Forward();
          tk && pB(wk);
          const dk = zk.e.FromUnitVectorsToRef(mt, wk, zk.l.Quaternion[0]);
          zk.e.IsIdentity(dk) || (Fk.rotation = dk.PBk());
          const sk = {
            type: Xk,
            name: bk.name,
            color: bk.diffuse.PBk(),
            intensity: bk.intensity,
            size: bk.height,
            rect: {
              aspect: bk.width / bk.height
            }
          };
          IB(sk, yt), sk.rect && IB(sk.rect, ft), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(sk);
          const Vk = {
              light: this._lights.lights.length - 1
            },
            Jk = Bk.parent;
          if (Jk && lB(bk, Jk)) {
            const kk = Rk.get(Jk);
            if (kk) {
              const Bk = this._exporter._nodes[kk];
              return jB(Fk, Bk), Bk.extensions || (Bk.extensions = {}), Bk.extensions[et] = Vk, void ak(null)
            }
          }
          Fk.extensions || (Fk.extensions = {}), Fk.extensions[et] = Vk, ak(Fk)
        }))
      }
    }
    let vt = !1;

    function it() {
      vt || (vt = !0, GR.RegisterExtension(et, (kk => new Wt(kk))))
    }
    it();
    const Yt = "KHR_materials_anisotropy";
    class ot {
      constructor(kk) {
        this.name = Yt, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        const Rk = [];
        if (Bk instanceof LF) {
          if (Bk.anisotropy.isEnabled && !Bk.anisotropy.legacy) return Bk.anisotropy.texture && Rk.push(Bk.anisotropy.texture), Rk
        } else if (Bk instanceof QF && Bk.specularRoughnessAnisotropy > 0) {
          const kk = function(kk) {
            const Fk = kk.specularRoughnessAnisotropyTexture,
              Bk = kk.geometryTangentTexture;
            return `${Fk&&Fk.getInternalTexture()?Fk.getInternalTexture().uniqueId:"NoStrength"}_${Bk&&Bk.getInternalTexture()?Bk.getInternalTexture().uniqueId:"NoTangent"}`
          }(Bk);
          if (this._anisoTexturesMap[kk]) Rk.push(this._anisoTexturesMap[kk]);
          else {
            const Fk = await async function(kk) {
              const Fk = kk.XN(),
                Bk = kk.specularRoughnessAnisotropyTexture,
                Rk = kk.geometryTangentTexture;
              return Bk || Rk ? await bB("AnisotropyTexture", sB(Rk ? wB(Rk, 0) : dB(1), Rk ? wB(Rk, 1) : dB(0), Bk ? wB(Bk, 0) : dB(1)), Fk) : null
            }(Bk);
            Fk && (Rk.push(Fk), this._anisoTexturesMap[kk] = Fk)
          }
          return Rk
        }
        return []
      }
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((kk => {
          var Rk;
          if (Bk instanceof LF) {
            if (!Bk.anisotropy.isEnabled || Bk.anisotropy.legacy) return void kk(Fk);
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            const Rk = this._exporter._materialExporter.getTextureInfo(Bk.anisotropy.texture),
              tk = {
                anisotropyStrength: Bk.anisotropy.intensity,
                anisotropyRotation: Bk.anisotropy.angle,
                anisotropyTexture: Rk ?? void 0
              };
            null !== tk.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions[Yt] = tk
          } else if (Bk instanceof QF && Bk.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            let tk = Bk.specularRoughnessTexture;
            Bk._useRoughnessFromMetallicTextureGreen && (tk = Bk.baseMetalnessTexture);
            const ak = this._anisoTexturesMap[Bk.id];
            if (!tk && !ak) {
              let Rk = Bk.specularRoughness,
                tk = Bk.specularRoughnessAnisotropy;
              if (!Bk._useGltfStyleAnisotropy) {
                const kk = function(kk, Fk) {
                  const Bk = kk * kk,
                    Rk = Bk * Math.sqrt(2 / (1 + (1 - Fk) * (1 - Fk))),
                    tk = (1 - Fk) * Rk;
                  return {
                    newBaseRoughness: Math.sqrt(tk),
                    newAnisotropyStrength: Math.min(Math.sqrt((Rk - Bk) / Math.max(1 - Bk, 1e-4)), 1)
                  }
                }(Bk.specularRoughness, Bk.specularRoughnessAnisotropy);
                Rk = kk.newBaseRoughness, tk = kk.newAnisotropyStrength
              }
              Fk.pbrMetallicRoughness && (Fk.pbrMetallicRoughness.roughnessFactor = Rk);
              const ak = {
                anisotropyStrength: tk,
                anisotropyRotation: Bk.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return Fk.extensions[Yt] = ak, kk(Fk)
            }
            const Xk = ak ? this._exporter._materialExporter.getTextureInfo(ak) : null,
              bk = {
                anisotropyStrength: Bk.specularRoughnessAnisotropy,
                anisotropyRotation: Bk.geometryTangentAngle,
                anisotropyTexture: Xk || void 0,
                extensions: {}
              };
            Bk._useGltfStyleAnisotropy || (Fk.extensions.KHR_materials_openpbr = {}, (Rk = this._exporter._glTF).extensionsUsed || (Rk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions[Yt] = bk
          }
          kk(Fk)
        }))
      }
    }
    let Lt = !1;

    function Ot() {
      Lt || (Lt = !0, GR.RegisterExtension(Yt, (kk => new ot(kk))))
    }
    Ot();
    const Et = "KHR_materials_clearcoat";

    function St(kk, Fk) {
      const Bk = new Mk.f(Fk.name, Fk.XN());
      return Bk._texture = kk, Bk.coordinatesIndex = Fk.coordinatesIndex, Fk instanceof Mk.f && (Bk.uOffset = Fk.uOffset, Bk.vOffset = Fk.vOffset, Bk.uScale = Fk.uScale, Bk.vScale = Fk.vScale, Bk.wAng = Fk.wAng), Bk.wrapU = Fk.wrapU, Bk.wrapV = Fk.wrapV, Bk
    }
    class Nt {
      constructor(kk) {
        this.name = Et, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = kk
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
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        const Rk = [];
        if (Bk instanceof LF) {
          if (Bk.clearCoat.isEnabled) return Bk.clearCoat.texture && Rk.push(Bk.clearCoat.texture), !Bk.clearCoat.useRoughnessFromMainTexture && Bk.clearCoat.textureRoughness && Rk.push(Bk.clearCoat.textureRoughness), Bk.clearCoat.bumpTexture && Rk.push(Bk.clearCoat.bumpTexture), Rk
        } else if (Bk instanceof QF && Bk.coatWeight > 0) {
          let kk = !1;
          if (Bk.coatWeightTexture ? Bk.coatRoughnessTexture ? Bk._useCoatRoughnessFromGreenChannel && Bk.coatWeightTexture.getInternalTexture() === Bk.coatRoughnessTexture.getInternalTexture() ? (Rk.push(Bk.coatWeightTexture), Rk.push(Bk.coatRoughnessTexture)) : kk = !0 : Rk.push(Bk.coatWeightTexture) : Bk.coatRoughnessTexture && (Bk._useCoatRoughnessFromGreenChannel ? Rk.push(Bk.coatRoughnessTexture) : kk = !0), kk) {
            const kk = function(kk) {
              const Fk = kk.coatWeightTexture,
                Bk = Fk && Fk.getInternalTexture() ? Fk.getInternalTexture().uniqueId : "NoCoat",
                Rk = kk.coatRoughnessTexture;
              return `${Bk}_${Rk&&Rk.getInternalTexture()?Rk.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Bk);
            if (!this._cachedInternalTexturesMap[kk]) {
              const Fk = await async function(kk) {
                const Fk = kk.XN(),
                  Bk = kk.coatWeightTexture,
                  Rk = kk.coatRoughnessTexture;
                return Bk || Rk ? (await bB("CoatTexture", sB(Bk ? wB(Bk, 0) : dB(1), Rk ? wB(Rk, kk._useCoatRoughnessFromGreenChannel ? 1 : 0) : dB(1)), Fk)).getInternalTexture() : null
              }(Bk);
              Fk && (this._cachedInternalTexturesMap[kk] = Fk)
            }
            this._cachedInternalTexturesMap[kk] && (Bk.coatWeightTexture && (this._mergedTexturesMap[Bk.coatWeightTexture.uniqueId] = St(this._cachedInternalTexturesMap[kk], Bk.coatWeightTexture), Rk.push(this._mergedTexturesMap[Bk.coatWeightTexture.uniqueId])), Bk.coatRoughnessTexture && (this._mergedTexturesMap[Bk.coatRoughnessTexture.uniqueId] = St(this._cachedInternalTexturesMap[kk], Bk.coatRoughnessTexture), Rk.push(this._mergedTexturesMap[Bk.coatRoughnessTexture.uniqueId])))
          }
          return Bk.geometryCoatNormalTexture && Rk.push(Bk.geometryCoatNormalTexture), Rk
        }
        return []
      }
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((kk => {
          if (Bk instanceof LF) {
            if (!Bk.clearCoat.isEnabled) return void kk(Fk);
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            const Rk = this._exporter._materialExporter.getTextureInfo(Bk.clearCoat.texture);
            let tk;
            tk = Bk.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Bk.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Bk.clearCoat.textureRoughness), Bk.clearCoat.isTintEnabled && EF.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Bk.name}`), Bk.clearCoat.remapF0OnInterfaceChange && EF.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${Bk.name}`);
            const ak = this._exporter._materialExporter.getTextureInfo(Bk.clearCoat.bumpTexture),
              Xk = {
                clearcoatFactor: Bk.clearCoat.intensity,
                clearcoatTexture: Rk ?? void 0,
                clearcoatRoughnessFactor: Bk.clearCoat.roughness,
                clearcoatRoughnessTexture: tk ?? void 0,
                clearcoatNormalTexture: ak ?? void 0
              };
            null === Xk.clearcoatTexture && null === Xk.clearcoatRoughnessTexture && null === Xk.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions[Et] = Xk
          } else if (Bk instanceof QF) {
            if (0 == Bk.coatWeight) return void kk(Fk);
            let Rk, tk, ak, Xk;
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {}, Bk.coatWeightTexture && (Rk = this._mergedTexturesMap[Bk.coatWeightTexture.uniqueId], tk = this._exporter._materialExporter.getTextureInfo(Rk)), Bk.coatRoughnessTexture && (ak = this._mergedTexturesMap[Bk.coatRoughnessTexture.uniqueId], Xk = this._exporter._materialExporter.getTextureInfo(ak)), Bk.coatColorTexture && EF.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${Bk.name}`);
            const bk = this._exporter._materialExporter.getTextureInfo(Bk.geometryCoatNormalTexture),
              wk = {
                clearcoatFactor: Bk.coatWeight,
                clearcoatTexture: tk ?? void 0,
                clearcoatRoughnessFactor: Bk.coatRoughness,
                clearcoatRoughnessTexture: Xk ?? void 0,
                clearcoatNormalTexture: bk ?? void 0
              };
            null === wk.clearcoatTexture && null === wk.clearcoatRoughnessTexture && null === wk.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions[Et] = wk
          }
          kk(Fk)
        }))
      }
    }
    let Ht = !1;

    function ut() {
      Ht || (Ht = !0, GR.RegisterExtension(Et, (kk => new Nt(kk))))
    }
    ut();
    const Mt = "KHR_materials_coat";

    function gt(kk) {
      const Fk = kk.coatRoughnessAnisotropyTexture,
        Bk = kk.geometryCoatTangentTexture;
      return `${Fk&&Fk.getInternalTexture()?Fk.getInternalTexture().uniqueId:"NoStrength"}_${Bk&&Bk.getInternalTexture()?Bk.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Ut(kk, Fk) {
      const Bk = new Mk.f(Fk.name, Fk.XN());
      return Bk._texture = kk, Bk.coordinatesIndex = Fk.coordinatesIndex, Fk instanceof Mk.f && (Bk.uOffset = Fk.uOffset, Bk.vOffset = Fk.vOffset, Bk.uScale = Fk.uScale, Bk.vScale = Fk.vScale, Bk.wAng = Fk.wAng), Bk.wrapU = Fk.wrapU, Bk.wrapV = Fk.wrapV, Bk
    }
    class ct {
      constructor(kk) {
        this.name = Mt, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = kk
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
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        const Rk = [];
        if (Bk instanceof LF) {
          if (Bk.clearCoat.isEnabled) return Bk.clearCoat.texture && Rk.push(Bk.clearCoat.texture), !Bk.clearCoat.useRoughnessFromMainTexture && Bk.clearCoat.textureRoughness && Rk.push(Bk.clearCoat.textureRoughness), Bk.clearCoat.bumpTexture && Rk.push(Bk.clearCoat.bumpTexture), Bk.clearCoat.tintTexture && Rk.push(Bk.clearCoat.tintTexture), Rk
        } else if (Bk instanceof QF && Bk.coatWeight > 0) {
          let kk = !1;
          if (Bk.coatWeightTexture ? Bk.coatRoughnessTexture ? Bk._useCoatRoughnessFromGreenChannel && Bk.coatWeightTexture.getInternalTexture() === Bk.coatRoughnessTexture.getInternalTexture() ? (Rk.push(Bk.coatWeightTexture), Rk.push(Bk.coatRoughnessTexture)) : kk = !0 : Rk.push(Bk.coatWeightTexture) : Bk.coatRoughnessTexture && (Bk._useCoatRoughnessFromGreenChannel ? Rk.push(Bk.coatRoughnessTexture) : kk = !0), kk) {
            const kk = function(kk) {
              const Fk = kk.coatWeightTexture,
                Bk = Fk && Fk.getInternalTexture() ? Fk.getInternalTexture().uniqueId : "NoCoat",
                Rk = kk.coatRoughnessTexture;
              return `${Bk}_${Rk&&Rk.getInternalTexture()?Rk.getInternalTexture().uniqueId:"NoRoughness"}`
            }(Bk);
            if (!this._cachedInternalTexturesMap[kk]) {
              const Fk = await async function(kk) {
                const Fk = kk.XN(),
                  Bk = kk.coatWeightTexture,
                  Rk = kk.coatRoughnessTexture;
                return Bk || Rk ? (await bB("CoatTexture", sB(Bk ? wB(Bk, 0) : dB(1), Rk ? wB(Rk, kk._useCoatRoughnessFromGreenChannel ? 1 : 0) : dB(1)), Fk)).getInternalTexture() : null
              }(Bk);
              Fk && (this._cachedInternalTexturesMap[kk] = Fk)
            }
            this._cachedInternalTexturesMap[kk] && (Bk.coatWeightTexture && (this._mergedTexturesMap[Bk.coatWeightTexture.uniqueId] = Ut(this._cachedInternalTexturesMap[kk], Bk.coatWeightTexture), Rk.push(this._mergedTexturesMap[Bk.coatWeightTexture.uniqueId])), Bk.coatRoughnessTexture && (this._mergedTexturesMap[Bk.coatRoughnessTexture.uniqueId] = Ut(this._cachedInternalTexturesMap[kk], Bk.coatRoughnessTexture), Rk.push(this._mergedTexturesMap[Bk.coatRoughnessTexture.uniqueId])))
          }
          if (Bk.geometryCoatNormalTexture && Rk.push(Bk.geometryCoatNormalTexture), Bk.coatColorTexture && Rk.push(Bk.coatColorTexture), Bk.coatRoughnessAnisotropy > 0) {
            const kk = gt(Bk);
            if (this._mergedTexturesMap[kk]) Rk.push(this._mergedTexturesMap[kk]);
            else {
              const Fk = await async function(kk) {
                const Fk = kk.XN(),
                  Bk = kk.coatRoughnessAnisotropyTexture,
                  Rk = kk.geometryCoatTangentTexture;
                return Bk || Rk ? await bB("AnisotropyTexture", sB(Rk ? wB(Rk, 0) : dB(1), Rk ? wB(Rk, 1) : dB(0), Bk ? wB(Bk, 0) : dB(1)), Fk) : null
              }(Bk);
              Fk && (Rk.push(Fk), this._mergedTexturesMap[kk] = Fk)
            }
            return Rk
          }
          return Rk
        }
        return []
      }
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((kk => {
          var Rk;
          if (Bk instanceof LF) {
            if (!Bk.clearCoat.isEnabled) return void kk(Fk);
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            const Rk = this._exporter._materialExporter.getTextureInfo(Bk.clearCoat.texture);
            let tk, ak;
            tk = Bk.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(Bk.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(Bk.clearCoat.textureRoughness), Bk.clearCoat.isTintEnabled && (ak = this._exporter._materialExporter.getTextureInfo(Bk.clearCoat.tintTexture));
            const Xk = this._exporter._materialExporter.getTextureInfo(Bk.clearCoat.bumpTexture),
              bk = Bk.clearCoat.indexOfRefraction,
              wk = {
                coatFactor: Bk.clearCoat.intensity,
                coatTexture: Rk ?? void 0,
                coatRoughnessFactor: Bk.clearCoat.roughness,
                coatRoughnessTexture: tk ?? void 0,
                coatNormalTexture: Xk ?? void 0,
                coatColorFactor: Bk.clearCoat.tintColor.PBk(),
                coatColorTexture: ak ?? void 0,
                coatIor: 1.5 !== bk ? bk : void 0
              };
            null === wk.coatTexture && null === wk.coatRoughnessTexture && null === wk.coatRoughnessTexture && null === wk.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions[Mt] = wk
          } else if (Bk instanceof QF) {
            if (0 == Bk.coatWeight) return void kk(Fk);
            let tk, ak, Xk, bk;
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {}, Bk.coatWeightTexture && (tk = this._mergedTexturesMap[Bk.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[Bk.coatWeightTexture.uniqueId] : Bk.coatWeightTexture, ak = this._exporter._materialExporter.getTextureInfo(tk)), Bk.coatRoughnessTexture && (Xk = this._mergedTexturesMap[Bk.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Bk.coatRoughnessTexture.uniqueId] : Bk.coatRoughnessTexture, bk = this._exporter._materialExporter.getTextureInfo(Xk));
            const wk = this._exporter._materialExporter.getTextureInfo(Bk.geometryCoatNormalTexture),
              dk = this._exporter._materialExporter.getTextureInfo(Bk.coatColorTexture),
              sk = Bk.coatIor,
              Vk = Bk.coatDarkening,
              Jk = Bk.coatRoughnessTexture,
              Ak = gt(Bk),
              ek = this._mergedTexturesMap[Ak];
            let yk, fk = 0,
              mk = 0;
            if (Bk.coatRoughnessAnisotropy > 0) {
              if (Jk || ek) {
                const kk = ek ? this._exporter._materialExporter.getTextureInfo(ek) : null;
                fk = Bk.coatRoughnessAnisotropy, mk = Bk.geometryCoatTangentAngle, yk = kk || void 0
              } else {
                let kk = Bk.coatRoughness,
                  Rk = Bk.coatRoughnessAnisotropy;
                if (!Bk._useGltfStyleAnisotropy) {
                  const Fk = function(kk, Fk) {
                    const Bk = kk * kk,
                      Rk = Bk * Math.sqrt(2 / (1 + (1 - Fk) * (1 - Fk))),
                      tk = (1 - Fk) * Rk;
                    return {
                      newBaseRoughness: Math.sqrt(tk),
                      newAnisotropyStrength: Math.min(Math.sqrt((Rk - Bk) / Math.max(1 - Bk, 1e-4)), 1)
                    }
                  }(Bk.coatRoughness, Bk.coatRoughnessAnisotropy);
                  kk = Fk.newBaseRoughness, Rk = Fk.newAnisotropyStrength
                }
                Fk.pbrMetallicRoughness && (Fk.pbrMetallicRoughness.roughnessFactor = kk), fk = Rk, mk = Bk.geometryCoatTangentAngle + .5 * Math.PI, yk = void 0
              }
              Bk._useGltfStyleAnisotropy || (Fk.extensions.KHR_materials_openpbr = {}, (Rk = this._exporter._glTF).extensionsUsed || (Rk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const Wk = {
              coatFactor: Bk.coatWeight,
              coatTexture: ak ?? void 0,
              coatRoughnessFactor: Bk.coatRoughness,
              coatRoughnessTexture: bk ?? void 0,
              coatNormalTexture: wk ?? void 0,
              coatColorFactor: Bk.coatColor.PBk(),
              coatColorTexture: dk ?? void 0,
              coatIor: 1.5 !== sk ? sk : void 0,
              coatDarkeningFactor: 1 !== Vk ? Vk : void 0,
              coatAnisotropyRotation: mk,
              coatAnisotropyStrength: fk,
              coatAnisotropyTexture: yk
            };
            null === Wk.coatTexture && null === Wk.coatRoughnessTexture && null === Wk.coatRoughnessTexture && null === Wk.coatAnisotropyTexture && null === Wk.coatColorTexture || this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions[Mt] = Wk
          }
          kk(Fk)
        }))
      }
    }
    let Gt = !1;

    function Tt() {
      Gt || (Gt = !0, GR.RegisterExtension(Mt, (kk => new ct(kk))))
    }
    Tt();
    let rt = (() => {
      var kk, Fk, Bk, Rk, tk, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk, mk, Wk, vk, ik, Yk, Lk, Ok, Ek, Hk, uk, Mk, gk, Uk, ck, Tk, rk, Dk, zk, Pk, hk, qk, Ck, Zk, pk, xk, jk, lk, nk, Ik, Qk, kF, FF, BF, RF, tF, aF, XF, bF, wF, dF, sF, VF, JF, AF, eF, yF, fF, mF, WF, vF, iF;
      let YF, oF, EF, SF, NF, HF, uF, MF, gF, UF, cF, GF, TF, rF, DF, zF, PF, hF, qF, CF, ZF, pF, KF, xF, jF, lF, nF, IF, QF, kB, FB, BB, RB, tB, aB, XB, bB, wB, dB, sB, VB, JB, AB, eB, yB, fB, mB, WB, vB, iB, YB, oB, LB, OB, EB, SB, NB, HB, uB, MB, gB, UB, cB, GB, TB, rB, DB, zB, PB = LF,
        hB = [],
        qB = [],
        CB = [],
        ZB = [],
        pB = [],
        KB = [],
        xB = [],
        jB = [],
        lB = [],
        nB = [],
        IB = [],
        QB = [],
        kR = [],
        FR = [],
        BR = [],
        RR = [],
        tR = [],
        aR = [],
        XR = [],
        bR = [],
        wR = [],
        dR = [],
        sR = [],
        VR = [],
        JR = [],
        AR = [],
        eR = [],
        yR = [],
        fR = [],
        mR = [],
        WR = [],
        vR = [],
        iR = [],
        YR = [],
        oR = [],
        LR = [],
        OR = [],
        ER = [],
        SR = [],
        NR = [],
        HR = [],
        uR = [],
        MR = [],
        gR = [],
        UR = [],
        cR = [],
        GR = [],
        TR = [],
        rR = [],
        DR = [],
        zR = [],
        PR = [],
        hR = [],
        qR = [],
        CR = [],
        ZR = [],
        pR = [],
        KR = [],
        xR = [],
        jR = [],
        lR = [],
        nR = [],
        IR = [],
        QR = [],
        kt = [],
        Ft = [],
        Bt = [],
        Rt = [],
        tt = [],
        Xt = [],
        bt = [],
        wt = [],
        dt = [],
        st = [],
        Vt = [],
        Jt = [],
        At = [],
        et = [],
        yt = [],
        ft = [],
        mt = [],
        Wt = [],
        vt = [],
        it = [],
        Yt = [],
        ot = [],
        Lt = [],
        Ot = [],
        Et = [],
        St = [],
        Nt = [],
        Ht = [],
        ut = [],
        Mt = [],
        gt = [],
        Ut = [],
        ct = [],
        Gt = [],
        Tt = [],
        rt = [],
        Dt = [],
        zt = [],
        Pt = [],
        ht = [],
        qt = [],
        Ct = [],
        Zt = [],
        pt = [],
        Kt = [],
        xt = [],
        jt = [],
        lt = [],
        nt = [],
        It = [],
        Qt = [],
        ka = [],
        Fa = [],
        Ba = [],
        Ra = [],
        ta = [],
        aa = [],
        Xa = [],
        ba = [],
        wa = [],
        da = [],
        sa = [],
        Va = [],
        Ja = [],
        Aa = [],
        ea = [],
        ya = [],
        fa = [],
        ma = [];
      return kk = class extends PB {
        get directIntensity() {
          return (0, Sk.e)(this, Fk, "f")
        }
        set directIntensity(kk) {
          (0, Sk.i)(this, Fk, kk, "f")
        }
        get emissiveIntensity() {
          return (0, Sk.e)(this, Bk, "f")
        }
        set emissiveIntensity(kk) {
          (0, Sk.i)(this, Bk, kk, "f")
        }
        get environmentIntensity() {
          return (0, Sk.e)(this, Rk, "f")
        }
        set environmentIntensity(kk) {
          (0, Sk.i)(this, Rk, kk, "f")
        }
        get specularIntensity() {
          return (0, Sk.e)(this, tk, "f")
        }
        set specularIntensity(kk) {
          (0, Sk.i)(this, tk, kk, "f")
        }
        get disableBumpMap() {
          return (0, Sk.e)(this, Xk, "f")
        }
        set disableBumpMap(kk) {
          (0, Sk.i)(this, Xk, kk, "f")
        }
        get albedoTexture() {
          return (0, Sk.e)(this, bk, "f")
        }
        set albedoTexture(kk) {
          (0, Sk.i)(this, bk, kk, "f")
        }
        get baseWeightTexture() {
          return (0, Sk.e)(this, wk, "f")
        }
        set baseWeightTexture(kk) {
          (0, Sk.i)(this, wk, kk, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, Sk.e)(this, dk, "f")
        }
        set baseDiffuseRoughnessTexture(kk) {
          (0, Sk.i)(this, dk, kk, "f")
        }
        get ambientTexture() {
          return (0, Sk.e)(this, sk, "f")
        }
        set ambientTexture(kk) {
          (0, Sk.i)(this, sk, kk, "f")
        }
        get ambientTextureStrength() {
          return (0, Sk.e)(this, Vk, "f")
        }
        set ambientTextureStrength(kk) {
          (0, Sk.i)(this, Vk, kk, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, Sk.e)(this, Jk, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(kk) {
          (0, Sk.i)(this, Jk, kk, "f")
        }
        get opacityTexture() {
          return (0, Sk.e)(this, Ak, "f")
        }
        set opacityTexture(kk) {
          (0, Sk.i)(this, Ak, kk, "f")
        }
        get reflectionTexture() {
          return (0, Sk.e)(this, ek, "f")
        }
        set reflectionTexture(kk) {
          (0, Sk.i)(this, ek, kk, "f")
        }
        get emissiveTexture() {
          return (0, Sk.e)(this, yk, "f")
        }
        set emissiveTexture(kk) {
          (0, Sk.i)(this, yk, kk, "f")
        }
        get reflectivityTexture() {
          return (0, Sk.e)(this, fk, "f")
        }
        set reflectivityTexture(kk) {
          (0, Sk.i)(this, fk, kk, "f")
        }
        get metallicTexture() {
          return (0, Sk.e)(this, mk, "f")
        }
        set metallicTexture(kk) {
          (0, Sk.i)(this, mk, kk, "f")
        }
        get metallic() {
          return (0, Sk.e)(this, Wk, "f")
        }
        set metallic(kk) {
          (0, Sk.i)(this, Wk, kk, "f")
        }
        get roughness() {
          return (0, Sk.e)(this, vk, "f")
        }
        set roughness(kk) {
          (0, Sk.i)(this, vk, kk, "f")
        }
        get metallicF0Factor() {
          return (0, Sk.e)(this, ik, "f")
        }
        set metallicF0Factor(kk) {
          (0, Sk.i)(this, ik, kk, "f")
        }
        get metallicReflectanceColor() {
          return (0, Sk.e)(this, Yk, "f")
        }
        set metallicReflectanceColor(kk) {
          (0, Sk.i)(this, Yk, kk, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, Sk.e)(this, Lk, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(kk) {
          (0, Sk.i)(this, Lk, kk, "f")
        }
        get metallicReflectanceTexture() {
          return (0, Sk.e)(this, Ok, "f")
        }
        set metallicReflectanceTexture(kk) {
          (0, Sk.i)(this, Ok, kk, "f")
        }
        get reflectanceTexture() {
          return (0, Sk.e)(this, Ek, "f")
        }
        set reflectanceTexture(kk) {
          (0, Sk.i)(this, Ek, kk, "f")
        }
        get microSurfaceTexture() {
          return (0, Sk.e)(this, Hk, "f")
        }
        set microSurfaceTexture(kk) {
          (0, Sk.i)(this, Hk, kk, "f")
        }
        get bumpTexture() {
          return (0, Sk.e)(this, uk, "f")
        }
        set bumpTexture(kk) {
          (0, Sk.i)(this, uk, kk, "f")
        }
        get lightmapTexture() {
          return (0, Sk.e)(this, Mk, "f")
        }
        set lightmapTexture(kk) {
          (0, Sk.i)(this, Mk, kk, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(kk) {
          this.subSurface.refractionTexture = kk, kk ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, Sk.e)(this, gk, "f")
        }
        set ambientColor(kk) {
          (0, Sk.i)(this, gk, kk, "f")
        }
        get albedoColor() {
          return (0, Sk.e)(this, Uk, "f")
        }
        set albedoColor(kk) {
          (0, Sk.i)(this, Uk, kk, "f")
        }
        get baseWeight() {
          return (0, Sk.e)(this, ck, "f")
        }
        set baseWeight(kk) {
          (0, Sk.i)(this, ck, kk, "f")
        }
        get baseDiffuseRoughness() {
          return (0, Sk.e)(this, Tk, "f")
        }
        set baseDiffuseRoughness(kk) {
          (0, Sk.i)(this, Tk, kk, "f")
        }
        get reflectivityColor() {
          return (0, Sk.e)(this, rk, "f")
        }
        set reflectivityColor(kk) {
          (0, Sk.i)(this, rk, kk, "f")
        }
        get reflectionColor() {
          return (0, Sk.e)(this, Dk, "f")
        }
        set reflectionColor(kk) {
          (0, Sk.i)(this, Dk, kk, "f")
        }
        get emissiveColor() {
          return (0, Sk.e)(this, zk, "f")
        }
        set emissiveColor(kk) {
          (0, Sk.i)(this, zk, kk, "f")
        }
        get microSurface() {
          return (0, Sk.e)(this, Pk, "f")
        }
        set microSurface(kk) {
          (0, Sk.i)(this, Pk, kk, "f")
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
          return (0, Sk.e)(this, hk, "f")
        }
        set useLightmapAsShadowmap(kk) {
          (0, Sk.i)(this, hk, kk, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, Sk.e)(this, qk, "f")
        }
        set useAlphaFromAlbedoTexture(kk) {
          (0, Sk.i)(this, qk, kk, "f")
        }
        get forceAlphaTest() {
          return (0, Sk.e)(this, Ck, "f")
        }
        set forceAlphaTest(kk) {
          (0, Sk.i)(this, Ck, kk, "f")
        }
        get alphaCutOff() {
          return (0, Sk.e)(this, Zk, "f")
        }
        set alphaCutOff(kk) {
          (0, Sk.i)(this, Zk, kk, "f")
        }
        get useSpecularOverAlpha() {
          return (0, Sk.e)(this, pk, "f")
        }
        set useSpecularOverAlpha(kk) {
          (0, Sk.i)(this, pk, kk, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, Sk.e)(this, xk, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(kk) {
          (0, Sk.i)(this, xk, kk, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, Sk.e)(this, jk, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(kk) {
          (0, Sk.i)(this, jk, kk, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, Sk.e)(this, lk, "f")
        }
        set useRoughnessFromMetallicTextureGreen(kk) {
          (0, Sk.i)(this, lk, kk, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, Sk.e)(this, nk, "f")
        }
        set useMetallnessFromMetallicTextureBlue(kk) {
          (0, Sk.i)(this, nk, kk, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, Sk.e)(this, Ik, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(kk) {
          (0, Sk.i)(this, Ik, kk, "f")
        }
        get useAmbientInGrayScale() {
          return (0, Sk.e)(this, Qk, "f")
        }
        set useAmbientInGrayScale(kk) {
          (0, Sk.i)(this, Qk, kk, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, Sk.e)(this, kF, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(kk) {
          (0, Sk.i)(this, kF, kk, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === LF.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(kk) {
          kk !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = kk ? LF.LIGHTFALLOFF_PHYSICAL : LF.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === LF.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(kk) {
          kk !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = kk ? LF.LIGHTFALLOFF_GLTF : LF.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, Sk.e)(this, FF, "f")
        }
        set useRadianceOverAlpha(kk) {
          (0, Sk.i)(this, FF, kk, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, Sk.e)(this, BF, "f")
        }
        set useObjectSpaceNormalMap(kk) {
          (0, Sk.i)(this, BF, kk, "f")
        }
        get useParallax() {
          return (0, Sk.e)(this, RF, "f")
        }
        set useParallax(kk) {
          (0, Sk.i)(this, RF, kk, "f")
        }
        get useParallaxOcclusion() {
          return (0, Sk.e)(this, tF, "f")
        }
        set useParallaxOcclusion(kk) {
          (0, Sk.i)(this, tF, kk, "f")
        }
        get parallaxScaleBias() {
          return (0, Sk.e)(this, aF, "f")
        }
        set parallaxScaleBias(kk) {
          (0, Sk.i)(this, aF, kk, "f")
        }
        get disableLighting() {
          return (0, Sk.e)(this, XF, "f")
        }
        set disableLighting(kk) {
          (0, Sk.i)(this, XF, kk, "f")
        }
        get forceIrradianceInFragment() {
          return (0, Sk.e)(this, bF, "f")
        }
        set forceIrradianceInFragment(kk) {
          (0, Sk.i)(this, bF, kk, "f")
        }
        get maxSimultaneousLights() {
          return (0, Sk.e)(this, wF, "f")
        }
        set maxSimultaneousLights(kk) {
          (0, Sk.i)(this, wF, kk, "f")
        }
        get invertNormalMapX() {
          return (0, Sk.e)(this, dF, "f")
        }
        set invertNormalMapX(kk) {
          (0, Sk.i)(this, dF, kk, "f")
        }
        get invertNormalMapY() {
          return (0, Sk.e)(this, sF, "f")
        }
        set invertNormalMapY(kk) {
          (0, Sk.i)(this, sF, kk, "f")
        }
        get twoSidedLighting() {
          return (0, Sk.e)(this, VF, "f")
        }
        set twoSidedLighting(kk) {
          (0, Sk.i)(this, VF, kk, "f")
        }
        get useAlphaFresnel() {
          return (0, Sk.e)(this, JF, "f")
        }
        set useAlphaFresnel(kk) {
          (0, Sk.i)(this, JF, kk, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, Sk.e)(this, AF, "f")
        }
        set useLinearAlphaFresnel(kk) {
          (0, Sk.i)(this, AF, kk, "f")
        }
        get environmentBRDFTexture() {
          return (0, Sk.e)(this, eF, "f")
        }
        set environmentBRDFTexture(kk) {
          (0, Sk.i)(this, eF, kk, "f")
        }
        get forceNormalForward() {
          return (0, Sk.e)(this, yF, "f")
        }
        set forceNormalForward(kk) {
          (0, Sk.i)(this, yF, kk, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, Sk.e)(this, fF, "f")
        }
        set enableSpecularAntiAliasing(kk) {
          (0, Sk.i)(this, fF, kk, "f")
        }
        get useHorizonOcclusion() {
          return (0, Sk.e)(this, mF, "f")
        }
        set useHorizonOcclusion(kk) {
          (0, Sk.i)(this, mF, kk, "f")
        }
        get useRadianceOcclusion() {
          return (0, Sk.e)(this, WF, "f")
        }
        set useRadianceOcclusion(kk) {
          (0, Sk.i)(this, WF, kk, "f")
        }
        get unlit() {
          return (0, Sk.e)(this, vF, "f")
        }
        set unlit(kk) {
          (0, Sk.i)(this, vF, kk, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, Sk.e)(this, iF, "f")
        }
        set applyDecalMapAfterDetailMap(kk) {
          (0, Sk.i)(this, iF, kk, "f")
        }
        constructor(ak, Nk) {
          super(ak, Nk, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), Fk.set(this, ((0, Sk.l)(this, hB), (0, Sk.l)(this, qB, 1))), Bk.set(this, ((0, Sk.l)(this, CB), (0, Sk.l)(this, ZB, 1))), Rk.set(this, ((0, Sk.l)(this, pB), (0, Sk.l)(this, KB, 1))), tk.set(this, ((0, Sk.l)(this, xB), (0, Sk.l)(this, jB, 1))), Xk.set(this, ((0, Sk.l)(this, lB), (0, Sk.l)(this, nB, !1))), bk.set(this, ((0, Sk.l)(this, IB), (0, Sk.l)(this, QB, void 0))), wk.set(this, ((0, Sk.l)(this, kR), (0, Sk.l)(this, FR, void 0))), dk.set(this, ((0, Sk.l)(this, BR), (0, Sk.l)(this, RR, void 0))), sk.set(this, ((0, Sk.l)(this, tR), (0, Sk.l)(this, aR, void 0))), Vk.set(this, ((0, Sk.l)(this, XR), (0, Sk.l)(this, bR, 1))), Jk.set(this, ((0, Sk.l)(this, wR), (0, Sk.l)(this, dR, kk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), Ak.set(this, ((0, Sk.l)(this, sR), (0, Sk.l)(this, VR, void 0))), ek.set(this, ((0, Sk.l)(this, JR), (0, Sk.l)(this, AR, void 0))), yk.set(this, ((0, Sk.l)(this, eR), (0, Sk.l)(this, yR, void 0))), fk.set(this, ((0, Sk.l)(this, fR), (0, Sk.l)(this, mR, void 0))), mk.set(this, ((0, Sk.l)(this, WR), (0, Sk.l)(this, vR, void 0))), Wk.set(this, ((0, Sk.l)(this, iR), (0, Sk.l)(this, YR, void 0))), vk.set(this, ((0, Sk.l)(this, oR), (0, Sk.l)(this, LR, void 0))), ik.set(this, ((0, Sk.l)(this, OR), (0, Sk.l)(this, ER, 1))), Yk.set(this, ((0, Sk.l)(this, SR), (0, Sk.l)(this, NR, Kk.e.White()))), Lk.set(this, ((0, Sk.l)(this, HR), (0, Sk.l)(this, uR, !1))), Ok.set(this, ((0, Sk.l)(this, MR), (0, Sk.l)(this, gR, void 0))), Ek.set(this, ((0, Sk.l)(this, UR), (0, Sk.l)(this, cR, void 0))), Hk.set(this, ((0, Sk.l)(this, GR), (0, Sk.l)(this, TR, void 0))), uk.set(this, ((0, Sk.l)(this, rR), (0, Sk.l)(this, DR, void 0))), Mk.set(this, ((0, Sk.l)(this, zR), (0, Sk.l)(this, PR, void 0))), gk.set(this, ((0, Sk.l)(this, hR), (0, Sk.l)(this, qR, new Kk.e(0, 0, 0)))), Uk.set(this, ((0, Sk.l)(this, CR), (0, Sk.l)(this, ZR, new Kk.e(1, 1, 1)))), ck.set(this, ((0, Sk.l)(this, pR), (0, Sk.l)(this, KR, 1))), Tk.set(this, ((0, Sk.l)(this, xR), (0, Sk.l)(this, jR, void 0))), rk.set(this, ((0, Sk.l)(this, lR), (0, Sk.l)(this, nR, new Kk.e(1, 1, 1)))), Dk.set(this, ((0, Sk.l)(this, IR), (0, Sk.l)(this, QR, new Kk.e(1, 1, 1)))), zk.set(this, ((0, Sk.l)(this, kt), (0, Sk.l)(this, Ft, new Kk.e(0, 0, 0)))), Pk.set(this, ((0, Sk.l)(this, Bt), (0, Sk.l)(this, Rt, 1))), hk.set(this, ((0, Sk.l)(this, tt), (0, Sk.l)(this, Xt, !1))), qk.set(this, ((0, Sk.l)(this, bt), (0, Sk.l)(this, wt, !1))), Ck.set(this, ((0, Sk.l)(this, dt), (0, Sk.l)(this, st, !1))), Zk.set(this, ((0, Sk.l)(this, Vt), (0, Sk.l)(this, Jt, .4))), pk.set(this, ((0, Sk.l)(this, At), (0, Sk.l)(this, et, !0))), xk.set(this, ((0, Sk.l)(this, yt), (0, Sk.l)(this, ft, !1))), jk.set(this, ((0, Sk.l)(this, mt), (0, Sk.l)(this, Wt, !0))), lk.set(this, ((0, Sk.l)(this, vt), (0, Sk.l)(this, it, !1))), nk.set(this, ((0, Sk.l)(this, Yt), (0, Sk.l)(this, ot, !1))), Ik.set(this, ((0, Sk.l)(this, Lt), (0, Sk.l)(this, Ot, !1))), Qk.set(this, ((0, Sk.l)(this, Et), (0, Sk.l)(this, St, !1))), kF.set(this, ((0, Sk.l)(this, Nt), (0, Sk.l)(this, Ht, !1))), FF.set(this, ((0, Sk.l)(this, ut), (0, Sk.l)(this, Mt, !0))), BF.set(this, ((0, Sk.l)(this, gt), (0, Sk.l)(this, Ut, !1))), RF.set(this, ((0, Sk.l)(this, ct), (0, Sk.l)(this, Gt, !1))), tF.set(this, ((0, Sk.l)(this, Tt), (0, Sk.l)(this, rt, !1))), aF.set(this, ((0, Sk.l)(this, Dt), (0, Sk.l)(this, zt, .05))), XF.set(this, ((0, Sk.l)(this, Pt), (0, Sk.l)(this, ht, !1))), bF.set(this, ((0, Sk.l)(this, qt), (0, Sk.l)(this, Ct, !1))), wF.set(this, ((0, Sk.l)(this, Zt), (0, Sk.l)(this, pt, 4))), dF.set(this, ((0, Sk.l)(this, Kt), (0, Sk.l)(this, xt, !1))), sF.set(this, ((0, Sk.l)(this, jt), (0, Sk.l)(this, lt, !1))), VF.set(this, ((0, Sk.l)(this, nt), (0, Sk.l)(this, It, !1))), JF.set(this, ((0, Sk.l)(this, Qt), (0, Sk.l)(this, ka, !1))), AF.set(this, ((0, Sk.l)(this, Fa), (0, Sk.l)(this, Ba, !1))), eF.set(this, ((0, Sk.l)(this, Ra), (0, Sk.l)(this, ta, null))), yF.set(this, ((0, Sk.l)(this, aa), (0, Sk.l)(this, Xa, !1))), fF.set(this, ((0, Sk.l)(this, ba), (0, Sk.l)(this, wa, !1))), mF.set(this, ((0, Sk.l)(this, da), (0, Sk.l)(this, sa, !0))), WF.set(this, ((0, Sk.l)(this, Va), (0, Sk.l)(this, Ja, !0))), vF.set(this, ((0, Sk.l)(this, Aa), (0, Sk.l)(this, ea, !1))), iF.set(this, ((0, Sk.l)(this, ya), (0, Sk.l)(this, fa, !1))), (0, Sk.l)(this, ma), this._environmentBRDFTexture = Gk(this.XN())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(Fk) {
          let Bk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const tk = OF.c.Clone((() => new kk(Fk, this.XN())), this, {
            cloneTexturesOnlyOnce: Bk
          });
          return tk.id = Fk, tk.name = Fk, this.stencil.copyTo(tk.stencil), this._clonePlugins(tk, Rk), tk
        }
        serialize() {
          const kk = super.serialize();
          return kk.customType = "BABYLON.PBRMaterial", kk
        }
        static Parse(Fk, Bk, Rk) {
          const tk = OF.c.Parse((() => new kk(Fk.name, Bk)), Fk, Bk, Rk);
          return Fk.stencil && tk.stencil.parse(Fk.stencil, Bk, Rk), ak.c._ParsePlugins(Fk, tk, Bk, Rk), Fk.clearCoat && tk.clearCoat.parse(Fk.clearCoat, Bk, Rk), Fk.anisotropy && tk.anisotropy.parse(Fk.anisotropy, Bk, Rk), Fk.brdf && tk.brdf.parse(Fk.brdf, Bk, Rk), Fk.sheen && tk.sheen.parse(Fk.sheen, Bk, Rk), Fk.subSurface && tk.subSurface.parse(Fk.subSurface, Bk, Rk), Fk.iridescence && tk.iridescence.parse(Fk.iridescence, Bk, Rk), tk
        }
      }, Fk = new WeakMap, Bk = new WeakMap, Rk = new WeakMap, tk = new WeakMap, Xk = new WeakMap, bk = new WeakMap, wk = new WeakMap, dk = new WeakMap, sk = new WeakMap, Vk = new WeakMap, Jk = new WeakMap, Ak = new WeakMap, ek = new WeakMap, yk = new WeakMap, fk = new WeakMap, mk = new WeakMap, Wk = new WeakMap, vk = new WeakMap, ik = new WeakMap, Yk = new WeakMap, Lk = new WeakMap, Ok = new WeakMap, Ek = new WeakMap, Hk = new WeakMap, uk = new WeakMap, Mk = new WeakMap, gk = new WeakMap, Uk = new WeakMap, ck = new WeakMap, Tk = new WeakMap, rk = new WeakMap, Dk = new WeakMap, zk = new WeakMap, Pk = new WeakMap, hk = new WeakMap, qk = new WeakMap, Ck = new WeakMap, Zk = new WeakMap, pk = new WeakMap, xk = new WeakMap, jk = new WeakMap, lk = new WeakMap, nk = new WeakMap, Ik = new WeakMap, Qk = new WeakMap, kF = new WeakMap, FF = new WeakMap, BF = new WeakMap, RF = new WeakMap, tF = new WeakMap, aF = new WeakMap, XF = new WeakMap, bF = new WeakMap, wF = new WeakMap, dF = new WeakMap, sF = new WeakMap, VF = new WeakMap, JF = new WeakMap, AF = new WeakMap, eF = new WeakMap, yF = new WeakMap, fF = new WeakMap, mF = new WeakMap, WF = new WeakMap, vF = new WeakMap, iF = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(PB[Symbol.metadata] ?? null) : void 0;
        YF = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], oF = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], EF = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], SF = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], NF = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], HF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], uF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], MF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], gF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], UF = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], cF = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], GF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], TF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], rF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], DF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], zF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], PF = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], hF = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], qF = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], CF = [(0, Nk.l)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], ZF = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], pF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], KF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], xF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], jF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], lF = [(0, Nk.D)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty", null)], nF = [(0, Nk.l)("ambient"), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], IF = [(0, Nk.l)("albedo"), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], QF = [(0, Nk.M)("baseWeight"), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], kB = [(0, Nk.M)("baseDiffuseRoughness"), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], FB = [(0, Nk.l)("reflectivity"), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], BB = [(0, Nk.l)("reflection"), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], RB = [(0, Nk.l)("emissive"), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], tB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], aB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], XB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], bB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], wB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], dB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], sB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], VB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], JB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], AB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], eB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], yB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], fB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], mB = [(0, Nk.M)()], WB = [(0, Nk.M)()], vB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], iB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], YB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], oB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], LB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], OB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsLightsDirty")], EB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], SB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsLightsDirty")], NB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], HB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], uB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], MB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], gB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], UB = [(0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], cB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], GB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], TB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], rB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsTexturesDirty")], DB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], zB = [(0, Nk.M)(), (0, Nk.d)("_markAllSubMeshesAsMiscDirty")], (0, Sk.j)(kk, null, YF, {
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
        }, qB, CB), (0, Sk.j)(kk, null, oF, {
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
        }, ZB, pB), (0, Sk.j)(kk, null, EF, {
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
        }, KB, xB), (0, Sk.j)(kk, null, SF, {
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
        }, jB, lB), (0, Sk.j)(kk, null, NF, {
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
        }, nB, IB), (0, Sk.j)(kk, null, HF, {
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
        }, QB, kR), (0, Sk.j)(kk, null, uF, {
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
        }, FR, BR), (0, Sk.j)(kk, null, MF, {
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
        }, RR, tR), (0, Sk.j)(kk, null, gF, {
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
        }, aR, XR), (0, Sk.j)(kk, null, UF, {
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
        }, bR, wR), (0, Sk.j)(kk, null, cF, {
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
        }, dR, sR), (0, Sk.j)(kk, null, GF, {
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
        }, VR, JR), (0, Sk.j)(kk, null, TF, {
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
        }, AR, eR), (0, Sk.j)(kk, null, rF, {
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
        }, yR, fR), (0, Sk.j)(kk, null, DF, {
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
        }, mR, WR), (0, Sk.j)(kk, null, zF, {
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
        }, vR, iR), (0, Sk.j)(kk, null, PF, {
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
        }, YR, oR), (0, Sk.j)(kk, null, hF, {
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
        }, LR, OR), (0, Sk.j)(kk, null, qF, {
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
        }, ER, SR), (0, Sk.j)(kk, null, CF, {
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
        }, NR, HR), (0, Sk.j)(kk, null, ZF, {
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
        }, uR, MR), (0, Sk.j)(kk, null, pF, {
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
        }, gR, UR), (0, Sk.j)(kk, null, KF, {
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
        }, cR, GR), (0, Sk.j)(kk, null, xF, {
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
        }, TR, rR), (0, Sk.j)(kk, null, jF, {
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
        }, DR, zR), (0, Sk.j)(kk, null, lF, {
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
        }, PR, hR), (0, Sk.j)(kk, null, nF, {
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
        }, qR, CR), (0, Sk.j)(kk, null, IF, {
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
        }, ZR, pR), (0, Sk.j)(kk, null, QF, {
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
        }, KR, xR), (0, Sk.j)(kk, null, kB, {
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
        }, jR, lR), (0, Sk.j)(kk, null, FB, {
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
        }, nR, IR), (0, Sk.j)(kk, null, BB, {
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
        }, QR, kt), (0, Sk.j)(kk, null, RB, {
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
        }, Ft, Bt), (0, Sk.j)(kk, null, tB, {
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
        }, Rt, tt), (0, Sk.j)(kk, null, aB, {
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
        }, Xt, bt), (0, Sk.j)(kk, null, XB, {
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
        }, wt, dt), (0, Sk.j)(kk, null, bB, {
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
        }, st, Vt), (0, Sk.j)(kk, null, wB, {
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
        }, Jt, At), (0, Sk.j)(kk, null, dB, {
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
        }, et, yt), (0, Sk.j)(kk, null, sB, {
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
        }, ft, mt), (0, Sk.j)(kk, null, VB, {
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
        }, Wt, vt), (0, Sk.j)(kk, null, JB, {
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
        }, it, Yt), (0, Sk.j)(kk, null, AB, {
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
        }, ot, Lt), (0, Sk.j)(kk, null, eB, {
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
        }, Ot, Et), (0, Sk.j)(kk, null, yB, {
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
        }, St, Nt), (0, Sk.j)(kk, null, fB, {
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
        }, Ht, ut), (0, Sk.j)(kk, null, mB, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: kk => "usePhysicalLightFalloff" in kk,
            get: kk => kk.usePhysicalLightFalloff
          },
          metadata: Fk
        }, null, hB), (0, Sk.j)(kk, null, WB, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: kk => "useGLTFLightFalloff" in kk,
            get: kk => kk.useGLTFLightFalloff
          },
          metadata: Fk
        }, null, hB), (0, Sk.j)(kk, null, vB, {
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
        }, Mt, gt), (0, Sk.j)(kk, null, iB, {
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
        }, Ut, ct), (0, Sk.j)(kk, null, YB, {
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
        }, Gt, Tt), (0, Sk.j)(kk, null, oB, {
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
        }, rt, Dt), (0, Sk.j)(kk, null, LB, {
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
        }, zt, Pt), (0, Sk.j)(kk, null, OB, {
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
        }, ht, qt), (0, Sk.j)(kk, null, EB, {
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
        }, Ct, Zt), (0, Sk.j)(kk, null, SB, {
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
        }, pt, Kt), (0, Sk.j)(kk, null, NB, {
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
        }, xt, jt), (0, Sk.j)(kk, null, HB, {
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
        }, lt, nt), (0, Sk.j)(kk, null, uB, {
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
        }, It, Qt), (0, Sk.j)(kk, null, MB, {
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
        }, ka, Fa), (0, Sk.j)(kk, null, gB, {
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
        }, Ba, Ra), (0, Sk.j)(kk, null, UB, {
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
        }, ta, aa), (0, Sk.j)(kk, null, cB, {
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
        }, Xa, ba), (0, Sk.j)(kk, null, GB, {
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
        }, wa, da), (0, Sk.j)(kk, null, TB, {
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
        }, sa, Va), (0, Sk.j)(kk, null, rB, {
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
        }, Ja, Aa), (0, Sk.j)(kk, null, DB, {
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
        }, ea, ya), (0, Sk.j)(kk, null, zB, {
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
        }, fa, ma), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk.PBRMATERIAL_OPAQUE = LF.PBRMATERIAL_OPAQUE, kk.PBRMATERIAL_ALPHATEST = LF.PBRMATERIAL_ALPHATEST, kk.PBRMATERIAL_ALPHABLEND = LF.PBRMATERIAL_ALPHABLEND, kk.PBRMATERIAL_ALPHATESTANDBLEND = LF.PBRMATERIAL_ALPHATESTANDBLEND, kk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = LF.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, kk
    })();
    const Dt = "KHR_materials_diffuse_transmission";

    function zt(kk, Fk) {
      const Bk = Fk.subSurface;
      let Rk = null;
      return Bk.translucencyIntensityTexture ? Rk = Bk.translucencyIntensityTexture : Bk.thicknessTexture && Bk.useMaskFromThicknessTexture && (Rk = Bk.thicknessTexture), Rk && !Bk.useGltfStyleTextures ? (Hk.b.Warn(`${kk}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${Fk.name}`, 1), null) : Rk
    }
    class Pt {
      constructor(kk) {
        this.name = Dt, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        const Rk = [];
        if (Bk instanceof rt && this._isExtensionEnabled(Bk)) {
          const Fk = zt(kk, Bk);
          return Fk && Rk.push(Fk), Bk.subSurface.translucencyColorTexture && Rk.push(Bk.subSurface.translucencyColorTexture), Rk
        }
        return Rk
      }
      _isExtensionEnabled(kk) {
        if (kk.unlit) return !1;
        const Fk = kk.subSurface;
        return !!Fk.isTranslucencyEnabled && (!kk.unlit && !Fk.useAlbedoToTintTranslucency && Fk.useGltfStyleTextures && 1 === Fk.volumeIndexOfRefraction && 0 === Fk.minimumThickness && 0 === Fk.maximumThickness)
      }
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((Rk => {
          if (Bk instanceof rt && this._isExtensionEnabled(Bk)) {
            this._wasUsed = !0;
            const Rk = Bk.subSurface,
              tk = zt(kk, Bk),
              ak = 0 == Rk.translucencyIntensity ? void 0 : Rk.translucencyIntensity,
              Xk = this._exporter._materialExporter.getTextureInfo(tk) ?? void 0,
              bk = !Rk.translucencyColor || Rk.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Rk.translucencyColor.PBk(),
              wk = this._exporter._materialExporter.getTextureInfo(Rk.translucencyColorTexture) ?? void 0,
              dk = {
                diffuseTransmissionFactor: ak,
                diffuseTransmissionTexture: Xk,
                diffuseTransmissionColorFactor: bk,
                diffuseTransmissionColorTexture: wk
              };
            (Xk || wk) && this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions = Fk.extensions || {}, Fk.extensions[Dt] = dk
          }
          Rk(Fk)
        }))
      }
    }
    let ht = !1;

    function qt() {
      ht || (ht = !0, GR.RegisterExtension(Dt, (kk => new Pt(kk))))
    }
    qt();
    const Ct = "KHR_materials_dispersion";
    class Zt {
      constructor() {
        this.name = Ct, this.enabled = !0, this.required = !1, this._wasUsed = !1
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
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((kk => {
          if (Bk instanceof rt && this._isExtensionEnabled(Bk)) {
            this._wasUsed = !0;
            const kk = {
              dispersion: Bk.subSurface.dispersion
            };
            Fk.extensions = Fk.extensions || {}, Fk.extensions[Ct] = kk
          }
          kk(Fk)
        }))
      }
    }
    let pt = !1;

    function Kt() {
      pt || (pt = !0, GR.RegisterExtension(Ct, (() => new Zt)))
    }
    Kt();
    const xt = "KHR_materials_emissive_strength";
    class jt {
      constructor() {
        this.name = xt, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(kk, Fk, Bk) {
        return await new Promise((kk => {
          if (!(Bk instanceof rt)) return kk(Fk);
          const Rk = Bk.emissiveColor.scale(Bk.emissiveIntensity),
            tk = Math.max(...Rk.PBk());
          if (tk > 1) {
            Fk.emissiveFactor = Rk.scale(1 / tk).PBk(), this._wasUsed = !0;
            const kk = {
              emissiveStrength: tk
            };
            Fk.extensions || (Fk.extensions = {}), Fk.extensions[xt] = kk
          } else Fk.emissiveFactor = Rk.PBk();
          return kk(Fk)
        }))
      }
    }
    let lt = !1;

    function nt() {
      lt || (lt = !0, GR.RegisterExtension(xt, (() => new jt)))
    }
    nt();
    const It = "KHR_materials_ior";
    class Qt {
      constructor() {
        this.name = It, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(kk) {
        return !kk.unlit && (kk instanceof QF ? 1.5 != kk.specularIor : kk instanceof rt && (void 0 != kk.indexOfRefraction && 1.5 != kk.indexOfRefraction))
      }
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((kk => {
          if (Bk instanceof rt && this._isExtensionEnabled(Bk)) {
            this._wasUsed = !0;
            const kk = {
              ior: Bk.indexOfRefraction
            };
            Fk.extensions = Fk.extensions || {}, Fk.extensions[It] = kk
          } else if (Bk instanceof QF && this._isExtensionEnabled(Bk)) {
            this._wasUsed = !0;
            const kk = {
              ior: Bk.specularIor
            };
            Fk.extensions = Fk.extensions || {}, Fk.extensions[It] = kk
          }
          kk(Fk)
        }))
      }
    }
    let ka = !1;

    function Fa() {
      ka || (ka = !0, GR.RegisterExtension(It, (() => new Qt)))
    }
    Fa();
    const Ba = "KHR_materials_iridescence";
    class Ra {
      constructor(kk) {
        this.name = Ba, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        const Rk = [];
        if (Bk instanceof LF) {
          if (Bk.iridescence.isEnabled) return Bk.iridescence.texture && Rk.push(Bk.iridescence.texture), Bk.iridescence.thicknessTexture && Bk.iridescence.thicknessTexture !== Bk.iridescence.texture && Rk.push(Bk.iridescence.thicknessTexture), Rk
        } else if (Bk instanceof QF && Bk.thinFilmWeight > 0) return Bk.thinFilmWeightTexture && Rk.push(Bk.thinFilmWeightTexture), Bk.thinFilmThicknessTexture && Bk.thinFilmThicknessTexture !== Bk.thinFilmWeightTexture && Rk.push(Bk.thinFilmThicknessTexture), Rk;
        return []
      }
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((kk => {
          if (Bk instanceof LF) {
            if (!Bk.iridescence.isEnabled) return void kk(Fk);
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            const Rk = this._exporter._materialExporter.getTextureInfo(Bk.iridescence.texture),
              tk = this._exporter._materialExporter.getTextureInfo(Bk.iridescence.thicknessTexture),
              ak = {
                iridescenceFactor: Bk.iridescence.intensity,
                iridescenceIor: Bk.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: Bk.iridescence.minimumThickness,
                iridescenceThicknessMaximum: Bk.iridescence.maximumThickness,
                iridescenceTexture: Rk ?? void 0,
                iridescenceThicknessTexture: tk ?? void 0
              };
            null === ak.iridescenceTexture && null === ak.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions[Ba] = ak
          } else if (Bk instanceof QF) {
            if (Bk.thinFilmWeight <= 0) return void kk(Fk);
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            const Rk = this._exporter._materialExporter.getTextureInfo(Bk.thinFilmWeightTexture),
              tk = this._exporter._materialExporter.getTextureInfo(Bk.thinFilmThicknessTexture),
              ak = {
                iridescenceFactor: Bk.thinFilmWeight,
                iridescenceIor: Bk.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * Bk.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * Bk.thinFilmThickness,
                iridescenceTexture: Rk ?? void 0,
                iridescenceThicknessTexture: tk ?? void 0
              };
            null === ak.iridescenceTexture && null === ak.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions[Ba] = ak
          }
          kk(Fk)
        }))
      }
    }
    let ta = !1;

    function aa() {
      ta || (ta = !0, GR.RegisterExtension(Ba, (kk => new Ra(kk))))
    }
    aa();
    const Xa = "KHR_materials_sheen";
    class ba {
      constructor(kk) {
        this.name = Xa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        return Bk instanceof rt && Bk.sheen.isEnabled && Bk.sheen.texture ? [Bk.sheen.texture] : []
      }
      async postExportMaterialAsync(kk, Fk, Bk) {
        return await new Promise((kk => {
          if (Bk instanceof rt) {
            if (!Bk.sheen.isEnabled) return void kk(Fk);
            this._wasUsed = !0, null == Fk.extensions && (Fk.extensions = {});
            const Rk = {
              sheenColorFactor: Bk.sheen.color.PBk(),
              sheenRoughnessFactor: Bk.sheen.roughness ?? 0
            };
            null === Rk.sheenColorTexture && null === Rk.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Bk), Bk.sheen.texture && (Rk.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(Bk.sheen.texture) ?? void 0), Bk.sheen.textureRoughness && !Bk.sheen.useRoughnessFromMainTexture ? Rk.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Bk.sheen.textureRoughness) ?? void 0 : Bk.sheen.texture && Bk.sheen.useRoughnessFromMainTexture && (Rk.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Bk.sheen.texture) ?? void 0), Fk.extensions[Xa] = Rk
          }
          kk(Fk)
        }))
      }
    }
    let wa = !1;

    function da() {
      wa || (wa = !0, GR.RegisterExtension(Xa, (kk => new ba(kk))))
    }
    da();
    const sa = "KHR_materials_fuzz";

    function Va(kk, Fk) {
      const Bk = new Mk.f(Fk.name, Fk.XN());
      return Bk._texture = kk, Bk.coordinatesIndex = Fk.coordinatesIndex, Fk instanceof Mk.f && (Bk.uOffset = Fk.uOffset, Bk.vOffset = Fk.vOffset, Bk.uScale = Fk.uScale, Bk.vScale = Fk.vScale, Bk.wAng = Fk.wAng), Bk.wrapU = Fk.wrapU, Bk.wrapV = Fk.wrapV, Bk
    }
    class Ja {
      constructor(kk) {
        this.name = sa, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = kk
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
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        if (Bk instanceof QF) {
          const kk = [];
          if (Bk.fuzzWeight > 0) {
            Bk.fuzzWeightTexture && kk.push(Bk.fuzzWeightTexture);
            let Fk = !1;
            if (Bk.fuzzRoughnessTexture && (Bk._useFuzzRoughnessFromTextureAlpha ? kk.push(Bk.fuzzRoughnessTexture) : Fk = !0), Bk.fuzzColorTexture && !Fk && kk.push(Bk.fuzzColorTexture), Fk) {
              const Fk = function(kk) {
                const Fk = kk.fuzzColorTexture,
                  Bk = Fk && Fk.getInternalTexture() ? Fk.getInternalTexture().uniqueId : "NoFuzzColor",
                  Rk = kk.fuzzRoughnessTexture;
                return `FuzzColor_${Bk}_FuzzRoughness_${Rk&&Rk.getInternalTexture()?Rk.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(Bk);
              if (!this._cachedInternalTexturesMap[Fk]) {
                const kk = await async function(kk) {
                  const Fk = kk.XN(),
                    Bk = kk.fuzzColorTexture,
                    Rk = kk.fuzzRoughnessTexture;
                  return Bk || Rk ? (await bB("FuzzTexture", sB(Bk ? wB(Bk, 0) : dB(1), Bk ? wB(Bk, 1) : dB(1), Bk ? wB(Bk, 2) : dB(1), Rk ? wB(Rk, kk._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : dB(1)), Fk)).getInternalTexture() : null
                }(Bk);
                kk && (this._cachedInternalTexturesMap[Fk] = kk)
              }
              this._cachedInternalTexturesMap[Fk] && (Bk.fuzzColorTexture && (this._mergedTexturesMap[Bk.fuzzColorTexture.uniqueId] = Va(this._cachedInternalTexturesMap[Fk], Bk.fuzzColorTexture), kk.push(this._mergedTexturesMap[Bk.fuzzColorTexture.uniqueId])), Bk.fuzzRoughnessTexture && (this._mergedTexturesMap[Bk.fuzzRoughnessTexture.uniqueId] = Va(this._cachedInternalTexturesMap[Fk], Bk.fuzzRoughnessTexture), kk.push(this._mergedTexturesMap[Bk.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return kk
        }
        return []
      }
      async postExportMaterialAsync(kk, Fk, Bk) {
        return await new Promise((kk => {
          if (Bk instanceof QF) {
            if (0 == Bk.fuzzWeight) return void kk(Fk);
            this._wasUsed = !0, null == Fk.extensions && (Fk.extensions = {});
            const Rk = {
              fuzzFactor: Bk.fuzzWeight,
              fuzzColorFactor: Bk.fuzzColor.PBk(),
              fuzzRoughnessFactor: Bk.fuzzRoughness
            };
            let tk, ak;
            Bk.fuzzWeightTexture && (Rk.fuzzTexture = this._exporter._materialExporter.getTextureInfo(Bk.fuzzWeightTexture) ?? void 0), Bk.fuzzColorTexture && (tk = this._mergedTexturesMap[Bk.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[Bk.fuzzColorTexture.uniqueId] : Bk.fuzzColorTexture, Rk.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(tk) ?? void 0), Bk.fuzzRoughnessTexture && (ak = this._mergedTexturesMap[Bk.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[Bk.fuzzRoughnessTexture.uniqueId] : Bk.fuzzRoughnessTexture, Rk.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ak) ?? void 0), null === Rk.fuzzColorTexture && null === Rk.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions[sa] = Rk
          }
          kk(Fk)
        }))
      }
    }
    let Aa = !1;

    function ea() {
      Aa || (Aa = !0, GR.RegisterExtension(sa, (kk => new Ja(kk))))
    }
    ea();
    const ya = "KHR_materials_specular";
    class fa {
      constructor(kk) {
        this.name = ya, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        const Rk = [];
        return Bk instanceof rt && this._isExtensionEnabled(Bk) ? (Bk.metallicReflectanceTexture && Rk.push(Bk.metallicReflectanceTexture), Bk.reflectanceTexture && Rk.push(Bk.reflectanceTexture), Rk) : Rk
      }
      _isExtensionEnabled(kk) {
        return !kk.unlit && (void 0 != kk.metallicF0Factor && 1 != kk.metallicF0Factor || void 0 != kk.metallicReflectanceColor && !kk.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(kk))
      }
      _hasTexturesExtension(kk) {
        return null != kk.metallicReflectanceTexture || null != kk.reflectanceTexture
      }
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((kk => {
          var Rk;
          if (Bk instanceof rt && this._isExtensionEnabled(Bk)) {
            this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
            const kk = this._exporter._materialExporter.getTextureInfo(Bk.metallicReflectanceTexture) ?? void 0,
              Rk = this._exporter._materialExporter.getTextureInfo(Bk.reflectanceTexture) ?? void 0,
              tk = {
                specularFactor: 1 == Bk.metallicF0Factor ? void 0 : Bk.metallicF0Factor,
                specularTexture: kk,
                specularColorFactor: Bk.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : Bk.metallicReflectanceColor.PBk(),
                specularColorTexture: Rk
              };
            this._hasTexturesExtension(Bk) && this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions[ya] = tk
          } else if (Bk instanceof QF) {
            Fk.extensions = Fk.extensions || {};
            const tk = this._exporter._materialExporter.getTextureInfo(Bk.specularWeightTexture) ?? void 0,
              ak = this._exporter._materialExporter.getTextureInfo(Bk.specularColorTexture) ?? void 0,
              Xk = 1 == Bk.specularWeight ? void 0 : Bk.specularWeight,
              bk = Bk.specularColor.equalsFloats(1, 1, 1) ? void 0 : Bk.specularColor.PBk();
            if (!ak && !tk && void 0 === Xk && void 0 === bk) return kk(Fk);
            this._wasUsed = !0;
            const wk = {
                specularEdgeColorEnabled: !0
              },
              dk = {
                specularFactor: Xk,
                specularTexture: tk,
                specularColorFactor: bk,
                specularColorTexture: ak,
                extensions: {}
              };
            dk.extensions.EXT_materials_specular_edge_color = wk, (Rk = this._exporter._glTF).extensionsUsed || (Rk.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (tk || ak) && this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions[ya] = dk
          }
          kk(Fk)
        }))
      }
    }
    let ma = !1;

    function Wa() {
      ma || (ma = !0, GR.RegisterExtension(ya, (kk => new fa(kk))))
    }
    Wa();
    const va = "KHR_materials_transmission";
    class ia {
      constructor(kk) {
        this.name = va, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        const Rk = [];
        if (Bk instanceof rt) {
          if (this._isExtensionEnabled(Bk)) return Bk.subSurface.refractionIntensityTexture && Bk.subSurface.useGltfStyleTextures && Rk.push(Bk.subSurface.refractionIntensityTexture), Rk
        } else Bk instanceof QF && (Bk.transmissionWeight > 0 && Bk.transmissionWeightTexture && (Rk.push(Bk.transmissionWeightTexture), Bk.transmissionColorTexture && Rk.push(Bk.transmissionColorTexture)), Bk.subsurfaceWeight > 0 && Bk.subsurfaceWeightTexture && Rk.push(Bk.subsurfaceWeightTexture));
        return Rk
      }
      _isExtensionEnabled(kk) {
        if (kk instanceof QF && !kk.unlit) return kk.transmissionWeight > 0 || kk.subsurfaceWeight > 0;
        if (kk instanceof rt && !kk.unlit) {
          const Fk = kk.subSurface;
          return Fk.isRefractionEnabled && void 0 != Fk.refractionIntensity && 0 != Fk.refractionIntensity || null != Fk.refractionIntensityTexture && Fk.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(kk, Fk, Bk) {
        if (!this._isExtensionEnabled(Bk)) return Fk;
        if (Bk instanceof rt) {
          this._wasUsed = !0;
          const Rk = Bk.subSurface,
            tk = {
              transmissionFactor: 0 === Rk.refractionIntensity ? void 0 : Rk.refractionIntensity
            };
          if (Rk.refractionIntensityTexture)
            if (Rk.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(Bk);
              const kk = this._exporter._materialExporter.getTextureInfo(Rk.refractionIntensityTexture);
              kk && (tk.transmissionTexture = kk)
            } else Hk.b.Warn(`${kk}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          Fk.extensions || (Fk.extensions = {}), Fk.extensions[va] = tk
        } else if (Bk instanceof QF) {
          this._wasUsed = !0;
          const kk = {
            transmissionFactor: (1 - Bk.transmissionWeight) * Bk.subsurfaceWeight + Bk.transmissionWeight
          };
          if (Bk.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Bk);
            const Fk = this._exporter._materialExporter.getTextureInfo(Bk.transmissionWeightTexture);
            Fk && (kk.transmissionTexture = Fk)
          } else if (Bk.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(Bk);
            const Fk = this._exporter._materialExporter.getTextureInfo(Bk.subsurfaceWeightTexture);
            Fk && (kk.transmissionTexture = Fk)
          }
          if (0 == Bk.transmissionDepth && (!Bk.transmissionColor.equals(Kk.e.White()) || Bk.transmissionColorTexture) && Fk.pbrMetallicRoughness && (Fk.pbrMetallicRoughness.baseColorFactor || (Fk.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), Fk.pbrMetallicRoughness.baseColorFactor[0] *= Bk.transmissionColor.r, Fk.pbrMetallicRoughness.baseColorFactor[1] *= Bk.transmissionColor.g, Fk.pbrMetallicRoughness.baseColorFactor[2] *= Bk.transmissionColor.b, Bk.transmissionColorTexture && !Fk.pbrMetallicRoughness.baseColorTexture)) {
            const kk = this._exporter._materialExporter.getTextureInfo(Bk.transmissionColorTexture);
            kk && (Fk.pbrMetallicRoughness.baseColorTexture = kk, this._exporter._materialNeedsUVsSet.add(Bk))
          }
          Fk.extensions || (Fk.extensions = {}), Fk.extensions[va] = kk
        }
        return Fk
      }
    }
    let Ya = !1;

    function oa() {
      Ya || (Ya = !0, GR.RegisterExtension(va, (kk => new ia(kk))))
    }
    oa();
    var La = Bk(39678);
    const Oa = "KHR_materials_unlit";
    class Ea {
      constructor() {
        this.name = Oa, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((kk => {
          let Rk = !1;
          Bk instanceof rt ? Rk = Bk.unlit : Bk instanceof La.e && (Rk = Bk.disableLighting), Rk && (this._wasUsed = !0, null == Fk.extensions && (Fk.extensions = {}), Fk.extensions[Oa] = {}), kk(Fk)
        }))
      }
    }
    let Sa = !1;

    function Na() {
      Sa || (Sa = !0, GR.RegisterExtension(Oa, (() => new Ea)))
    }
    Na();
    const Ha = "KHR_materials_volume";
    class ua {
      constructor(kk) {
        this.name = Ha, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        const Rk = [];
        if (Bk instanceof rt) {
          if (this._isExtensionEnabled(Bk)) return Bk.subSurface.thicknessTexture && Rk.push(Bk.subSurface.thicknessTexture), Rk
        } else Bk instanceof QF && (Bk.transmissionWeight > 0 || Bk.subsurfaceWeight > 0) && Bk.geometryThicknessTexture && Rk.push(Bk.geometryThicknessTexture);
        return Rk
      }
      _isExtensionEnabled(kk) {
        if (kk.unlit) return !1;
        const Fk = kk.subSurface;
        return !(!Fk.isRefractionEnabled && !Fk.isTranslucencyEnabled) && (void 0 != Fk.maximumThickness && 0 != Fk.maximumThickness || void 0 != Fk.tintColorAtDistance && Fk.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Fk.tintColor && Fk.tintColor != Kk.e.White() || this._hasTexturesExtension(kk))
      }
      _hasTexturesExtension(kk) {
        return null != kk.subSurface.thicknessTexture
      }
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((kk => {
          if (Bk instanceof rt && this._isExtensionEnabled(Bk)) {
            this._wasUsed = !0;
            const kk = Bk.subSurface,
              Rk = {
                thicknessFactor: 0 == kk.maximumThickness ? void 0 : kk.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(kk.thicknessTexture) ?? void 0,
                attenuationDistance: kk.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : kk.tintColorAtDistance,
                attenuationColor: kk.tintColor.equalsFloats(1, 1, 1) ? void 0 : kk.tintColor.PBk()
              };
            this._hasTexturesExtension(Bk) && this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions = Fk.extensions || {}, Fk.extensions[Ha] = Rk
          } else if (Bk instanceof QF) {
            const kk = Bk.transmissionWeight > 0 && !Bk.geometryThinWalled,
              Rk = Bk.subsurfaceWeight > 0 && !Bk.geometryThinWalled;
            if (kk || Rk) {
              this._wasUsed = !0;
              const tk = Bk.geometryThickness,
                ak = this._exporter._materialExporter.getTextureInfo(Bk.geometryThicknessTexture) ?? void 0;
              let Xk;
              ak && this._exporter._materialNeedsUVsSet.add(Bk);
              const bk = Kk.e.White().PBk();
              if (kk && Bk.transmissionDepth > 0) {
                const kk = 1 / Bk.transmissionDepth;
                let Fk = new zk.s(-Math.log(Bk.transmissionColor.r) * kk, -Math.log(Bk.transmissionColor.g) * kk, -Math.log(Bk.transmissionColor.b) * kk);
                const Rk = new zk.s(Bk.transmissionScatter.r * kk, Bk.transmissionScatter.g * kk, Bk.transmissionScatter.b * kk),
                  tk = Fk.subtract(Rk),
                  ak = Math.min(tk.x, tk.y, tk.z);
                ak < 0 && (tk.x = tk.x - ak, tk.y = tk.y - ak, tk.z = tk.z - ak), Fk = tk.add(Rk);
                Xk = 1 / Math.max(Fk.x, Fk.y, Fk.z), bk[0] = Math.exp(-Fk.x * Xk), bk[1] = Math.exp(-Fk.y * Xk), bk[2] = Math.exp(-Fk.z * Xk)
              } else Xk = Number.MAX_VALUE, bk[0] = 1, bk[1] = 1, bk[2] = 1;
              let wk = 1;
              const dk = Kk.e.White().PBk();
              if (Rk) {
                const kk = Bk.subsurfaceRadius,
                  Fk = Bk.subsurfaceRadiusScale,
                  Rk = new zk.s(Fk.r, Fk.g, Fk.b).multiplyByFloats(kk, kk, kk),
                  tk = new zk.s(1 / Math.max(Rk.x, 1e-6), 1 / Math.max(Rk.y, 1e-6), 1 / Math.max(Rk.z, 1e-6));
                wk = 1 / Math.max(tk.x, tk.y, tk.z), dk[0] = Math.exp(-tk.x * wk), dk[1] = Math.exp(-tk.y * wk), dk[2] = Math.exp(-tk.z * wk)
              }
              const sk = (1 - Bk.transmissionWeight) * Bk.subsurfaceWeight,
                Vk = sk + Bk.transmissionWeight,
                Jk = 1 / Math.max(Vk, 1e-6),
                Ak = Bk.transmissionWeight * Jk,
                ek = sk * Jk,
                yk = bk.map(((kk, Fk) => kk * Ak + dk[Fk] * ek)),
                fk = {
                  thicknessFactor: tk,
                  thicknessTexture: ak,
                  attenuationDistance: Xk * Ak + wk * ek,
                  attenuationColor: yk
                };
              Fk.extensions = Fk.extensions || {}, Fk.extensions[Ha] = fk
            }
          }
          kk(Fk)
        }))
      }
    }
    let Ma = !1;

    function ga() {
      Ma || (Ma = !0, GR.RegisterExtension(Ha, (kk => new ua(kk))))
    }
    ga();
    const Ua = "KHR_materials_volume_scatter";
    class ca {
      constructor(kk) {
        this.name = Ua, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        const Rk = [];
        return Bk instanceof QF && (Bk.transmissionWeight > 0 && Bk.transmissionScatterTexture && Rk.push(Bk.transmissionScatterTexture), Bk.subsurfaceWeight > 0 && Bk.subsurfaceColorTexture && Rk.push(Bk.subsurfaceColorTexture)), Rk
      }
      _isExtensionEnabled(kk) {
        if (kk.unlit) return !1;
        const Fk = kk.transmissionWeight > 0 && !kk.geometryThinWalled && kk.transmissionDepth > 0 && !kk.transmissionScatter.equals(Kk.e.Black()),
          Bk = kk.subsurfaceWeight > 0 && !kk.geometryThinWalled;
        return !(!Fk && !Bk)
      }
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((kk => {
          if (Bk instanceof QF && this._isExtensionEnabled(Bk)) {
            this._wasUsed = !0;
            let kk = zk.s.Zero(),
              Rk = 0;
            if (Bk.transmissionWeight > 0) {
              kk = function(kk) {
                const Fk = new zk.s(Math.sqrt(1 - kk.x), Math.sqrt(1 - kk.y), Math.sqrt(1 - kk.z)),
                  Bk = new zk.s(1, 1, 1),
                  Rk = Bk.subtract(Fk),
                  tk = Bk.subtract(new zk.s(.139, .139, .139).multiplyInPlace(Fk)),
                  ak = Bk.add(new zk.s(1.17, 1.17, 1.17).multiplyInPlace(Fk));
                return Rk.multiplyInPlace(tk).divideInPlace(ak)
              }(new zk.s(Bk.transmissionScatter.r, Bk.transmissionScatter.g, Bk.transmissionScatter.b)), Rk = Bk.transmissionScatterAnisotropy
            }
            const tk = zk.s.Zero();
            let ak = 0;
            Bk.subsurfaceWeight > 0 && (tk.set(Bk.subsurfaceColor.r, Bk.subsurfaceColor.g, Bk.subsurfaceColor.b), ak = Bk.subsurfaceScatterAnisotropy);
            const Xk = (1 - Bk.transmissionWeight) * Bk.subsurfaceWeight,
              bk = Xk + Bk.transmissionWeight,
              wk = 1 / Math.max(bk, 1e-6),
              dk = Bk.transmissionWeight * wk,
              sk = Xk * wk,
              Vk = {
                multiscatterColorFactor: kk.multiplyByFloats(dk, dk, dk).addInPlace(tk.multiplyByFloats(sk, sk, sk)).PBk(),
                scatterAnisotropy: Rk * dk + ak * sk
              };
            if (Bk.subsurfaceWeight > 0 && Bk.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(Bk);
              const kk = this._exporter._materialExporter.getTextureInfo(Bk.subsurfaceColorTexture);
              kk && (Vk.multiscatterColorTexture = kk)
            } else if (Bk.transmissionWeight > 0 && Bk.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(Bk);
              const kk = this._exporter._materialExporter.getTextureInfo(Bk.transmissionScatterTexture);
              kk && (Vk.multiscatterColorTexture = kk)
            }
            Fk.extensions = Fk.extensions || {}, Fk.extensions[Ua] = Vk
          }
          kk(Fk)
        }))
      }
    }
    let Ga = !1;

    function Ta() {
      Ga || (Ga = !0, GR.RegisterExtension(Ua, (kk => new ca(kk)), 101))
    }
    Ta();
    const ra = "KHR_materials_diffuse_roughness";
    class Da {
      constructor(kk) {
        this.name = ra, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(kk, Fk, Bk) {
        const Rk = [];
        if (Bk instanceof LF) {
          if (Bk._baseDiffuseRoughness) return Bk._baseDiffuseRoughnessTexture && Rk.push(Bk._baseDiffuseRoughnessTexture), Rk
        } else if (Bk instanceof QF && Bk.baseDiffuseRoughness) return Bk.baseDiffuseRoughnessTexture && Rk.push(Bk.baseDiffuseRoughnessTexture), Rk;
        return []
      }
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((kk => {
          let Rk = null,
            tk = null;
          if (Bk instanceof LF ? (Rk = Bk._baseDiffuseRoughness, tk = Bk._baseDiffuseRoughnessTexture) : Bk instanceof QF && (Rk = Bk.baseDiffuseRoughness, tk = Bk.baseDiffuseRoughnessTexture), !Rk) return void kk(Fk);
          this._wasUsed = !0, Fk.extensions = Fk.extensions || {};
          const ak = {
            diffuseRoughnessFactor: Rk,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(tk) ?? void 0
          };
          null !== ak.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(Bk), Fk.extensions[ra] = ak, kk(Fk)
        }))
      }
    }
    let za = !1;

    function Pa() {
      za || (za = !0, GR.RegisterExtension(ra, (kk => new Da(kk))))
    }
    Pa();
    const ha = "KHR_materials_openpbr";
    class qa {
      constructor() {
        this.name = ha, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(kk, Fk, Bk) {
        return new Promise((kk => {
          Bk instanceof QF && (this._wasUsed = !0, Fk.extensions = Fk.extensions || {}, Fk.extensions[ha] = {}), kk(Fk)
        }))
      }
    }
    let Ca = !1;

    function Za() {
      Ca || (Ca = !0, GR.RegisterExtension(ha, (() => new qa)))
    }
    Za();
    const pa = "KHR_texture_transform";
    class Ka {
      constructor() {
        this.name = pa, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(kk, Fk, Bk) {
        if (Bk.XN() || EF.h.Warn(`${kk}: "scene" is not defined for Babylon texture ${Bk.name}!`), (0 !== Bk.uAng || 0 !== Bk.vAng) && (EF.h.Warn(`${kk}: Texture ${Bk.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== Bk.uRotationCenter || 0 !== Bk.vRotationCenter)) return;
        const Rk = {};
        let tk = !1;
        if (0 === Bk.uOffset && 0 === Bk.vOffset || (Rk.offset = [Bk.uOffset, Bk.vOffset], tk = !0), 1 === Bk.uScale && 1 === Bk.vScale || (Rk.scale = [Bk.uScale, Bk.vScale], tk = !0), 0 !== Bk.wAng) {
          if (0 !== Bk.uRotationCenter || 0 !== Bk.vRotationCenter) {
            if (Bk.homogeneousRotationInUVTransform && Bk.uScale !== Bk.vScale) return void EF.h.Warn(`${kk}: Texture ${Bk.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${pa}.`);
            EF.h.Warn(`${kk}: Texture ${Bk.name} with non-origin rotation center will be exported using an adjusted offset with ${pa}.`), Rk.offset = function(kk) {
              const {
                uOffset: Fk,
                vOffset: Bk,
                uRotationCenter: Rk,
                vRotationCenter: tk,
                uScale: ak,
                vScale: Xk,
                wAng: bk
              } = kk, wk = Math.cos(bk), dk = Math.sin(bk), sk = Rk * ak, Vk = tk * Xk;
              return [Fk + (sk * (1 - wk) + Vk * dk), Bk + (Vk * (1 - wk) - sk * dk)]
            }(Bk)
          }
          Rk.rotation = -Bk.wAng, tk = !0
        }
        0 !== Bk.coordinatesIndex && (Rk.texCoord = Bk.coordinatesIndex, tk = !0), tk && (this._wasUsed = !0, Fk.extensions || (Fk.extensions = {}), Fk.extensions[pa] = Rk)
      }
    }
    let xa = !1;

    function ja() {
      xa || (xa = !0, GR.RegisterExtension(pa, (() => new Ka)))
    }
    ja();
    var la = Bk(39436);
    const na = "KHR_texture_basisu";
    class Ia {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(kk) {
        this.name = na, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      postExportTexture(kk, Fk) {
        const Bk = this._exporter._textures[Fk.index],
          Rk = Bk.source;
        if (void 0 === Rk) return;
        const tk = this._exporter._images[Rk];
        "image/ktx2" === (tk.mimeType || (0, la.f)(tk.uri)) && (Bk.source = void 0, Bk.extensions || (Bk.extensions = {}), Bk.extensions[na] = {
          source: Rk
        }, this._wasUsed = !0)
      }
    }
    let Qa = !1;

    function kX() {
      Qa || (Qa = !0, GR.RegisterExtension(na, (kk => new Ia(kk))))
    }
    kX();
    const FX = "EXT_texture_webp";
    class BX {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(kk) {
        this.name = FX, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      postExportTexture(kk, Fk) {
        const Bk = this._exporter._textures[Fk.index],
          Rk = Bk.source;
        if (void 0 === Rk) return;
        const tk = this._exporter._images[Rk];
        "image/webp" === (tk.mimeType || (0, la.f)(tk.uri)) && (Bk.source = void 0, Bk.extensions || (Bk.extensions = {}), Bk.extensions[FX] = {
          source: Rk
        }, this._wasUsed = !0)
      }
    }
    let RX = !1;

    function tX() {
      RX || (RX = !0, GR.RegisterExtension(FX, (kk => new BX(kk))))
    }
    tX();
    const aX = "EXT_texture_avif";
    class XX {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(kk) {
        this.name = aX, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = kk
      }
      dispose() {}
      postExportTexture(kk, Fk) {
        const Bk = this._exporter._textures[Fk.index],
          Rk = Bk.source;
        if (void 0 === Rk) return;
        const tk = this._exporter._images[Rk];
        "image/avif" === (tk.mimeType || (0, la.f)(tk.uri)) && (Bk.source = void 0, Bk.extensions || (Bk.extensions = {}), Bk.extensions[aX] = {
          source: Rk
        }, this._wasUsed = !0)
      }
    }
    let bX = !1;

    function wX() {
      bX || (bX = !0, GR.RegisterExtension(aX, (kk => new XX(kk))))
    }
    wX();
    class dX {
      static CreateSTL(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          ak = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          wk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const dk = function(kk, Fk, Bk) {
            const tk = [3 * kk[Bk], 3 * kk[Bk + 1], 3 * kk[Bk + 2]],
              ak = [new Rk.Qe(Fk[tk[0]], Fk[tk[0] + 2], Fk[tk[0] + 1]), new Rk.Qe(Fk[tk[1]], Fk[tk[1] + 2], Fk[tk[1] + 1]), new Rk.Qe(Fk[tk[2]], Fk[tk[2] + 2], Fk[tk[2] + 1])],
              Xk = ak[0].subtract(ak[1]),
              bk = ak[2].subtract(ak[1]);
            return {
              v: ak,
              n: Rk.Qe.Cross(bk, Xk).normalize()
            }
          },
          Vk = function(kk, Fk, Bk, Rk) {
            return Fk = Jk(kk, Fk, Bk.x, Rk), Fk = Jk(kk, Fk, Bk.y, Rk), Jk(kk, Fk, Bk.z, Rk)
          },
          Jk = function(kk, Fk, Bk, Rk) {
            return kk.setFloat32(Fk, Bk, Rk), Fk + 4
          },
          ek = function(kk) {
            if (bk) {
              let Fk = kk;
              kk instanceof Ak.b && (Fk = kk.rRk);
              const Bk = Fk.getVerticesData(sk.e.PositionKind, !0, !0);
              if (!Bk) return [];
              const tk = Rk.Qe.Zero();
              let ak;
              for (ak = 0; ak < Bk.length; ak += 3) Rk.Qe.TransformCoordinatesFromFloatsToRef(Bk[ak], Bk[ak + 1], Bk[ak + 2], kk.computeWorldMatrix(!0), tk).toArray(Bk, ak);
              return Bk
            }
            return kk.getVerticesData(sk.e.PositionKind) || []
          };
        bk && (Xk = !0);
        let yk = "",
          fk = 0,
          mk = 0;
        if (tk) {
          for (let Bk = 0; Bk < kk.length; Bk++) {
            const Fk = kk[Bk].hBk();
            fk += Fk ? Fk.length / 3 : 0
          }
          const Fk = new ArrayBuffer(84 + 50 * fk);
          yk = new DataView(Fk), mk += 80, yk.setUint32(mk, fk, ak), mk += 4
        } else wk || (yk = "solid stlmesh\r\n");
        for (let Rk = 0; Rk < kk.length; Rk++) {
          const Fk = kk[Rk];
          !tk && wk && (yk += "solid " + Fk.name + "\r\n"), !Xk && Fk instanceof sR.d && Fk.bakeCurrentTransformIntoVertices();
          const Bk = ek(Fk),
            bk = Fk.hBk() || [];
          for (let kk = 0; kk < bk.length; kk += 3) {
            const Fk = dk(bk, Bk, kk);
            tk ? (mk = Vk(yk, mk, Fk.n, ak), mk = Vk(yk, mk, Fk.v[0], ak), mk = Vk(yk, mk, Fk.v[1], ak), mk = Vk(yk, mk, Fk.v[2], ak), mk += 2) : (yk += "\tfacet normal " + Fk.n.x + " " + Fk.n.y + " " + Fk.n.z + "\r\n", yk += "\t\touter loop\r\n", yk += "\t\t\tvertex " + Fk.v[0].x + " " + Fk.v[0].y + " " + Fk.v[0].z + "\r\n", yk += "\t\t\tvertex " + Fk.v[1].x + " " + Fk.v[1].y + " " + Fk.v[1].z + "\r\n", yk += "\t\t\tvertex " + Fk.v[2].x + " " + Fk.v[2].y + " " + Fk.v[2].z + "\r\n", yk += "\t\tendloop\r\n", yk += "\tendfacet\r\n")
          }!tk && wk && (yk += "endsolid " + name + "\r\n")
        }
        if (tk || wk || (yk += "endsolid stlmesh"), Fk) {
          const kk = document.createElement("a"),
            Fk = new Blob([yk], {
              type: "application/octet-stream"
            });
          kk.href = window.URL.createObjectURL(Fk), kk.download = Bk + ".stl", kk.click()
        }
        return yk
      }
    }

    function sX(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const tk = [];
      for (let ak = 0; ak < kk.length / Bk; ak++) {
        const Xk = kk[ak * Bk] * (Rk ? -1 : 1),
          bk = kk[ak * Bk + 1],
          wk = kk[ak * Bk + 2];
        tk.push(`(${Xk.toPrecision(Fk.precision)}, ${bk.toPrecision(Fk.precision)}, ${wk.toPrecision(Fk.precision)})`)
      }
      return tk.join(", ")
    }

    function VX(kk, Fk) {
      const Bk = [];
      for (let Rk = 0; Rk < kk.length / 2; Rk++) {
        const tk = kk[2 * Rk],
          ak = kk[2 * Rk + 1];
        Bk.push(`(${tk.toPrecision(Fk.precision)}, ${(1-ak).toPrecision(Fk.precision)})`)
      }
      return Bk.join(", ")
    }

    function JX(kk, Fk, Bk, Rk) {
      const tk = kk.getVerticesData(sk.e.PositionKind),
        ak = kk.getVerticesData(sk.e.NormalKind);
      if (tk && ak) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${Bk}"\n\t\tint[] faceVertexCounts = [${function(kk){const Fk=kk.hBk()?.length?kk.getTotalIndices():kk.getTotalVertices();return Array(Fk/3).fill(3).join(", ")}(kk)}]\n\t\tint[] faceVertexIndices = [${function(kk){const Fk=kk.hBk(),Bk=Fk?.length??kk.getTotalVertices(),Rk=[];if(null!==Fk)for(let tk=0;tk<Bk;tk++)Rk.push(Fk[tk]);else for(let tk=0;tk<Bk;tk++)Rk.push(tk);return Rk.join(", ")}(kk)}]\n\t\tnormal3f[] normals = [${sX(ak,Fk,void 0,Rk)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${sX(tk,Fk,void 0,Rk)}]\n        ${function(kk,Fk){let Bk="";for(let tk=0;tk<4;tk++){const Rk=tk>0?tk:"",ak=kk.getVerticesData(sk.e.UVKind+(Rk?Rk+1:""));ak&&(Bk+=`\n\t\ttexCoord2f[] primvars:st${Rk} = [${VX(ak,Fk)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Rk=kk.getVerticesData(sk.e.ColorKind);return Rk&&(Bk+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        sX(Rk, Fk, Rk.length / kk.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),Bk}(kk,Fk)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function AX(kk, Fk, Bk, Rk) {
      return `\n        def "Geometry"\n        {\n        ${JX(kk,Fk,Bk,Rk)}\n        }\n        `
    }

    function eX(kk) {
      let Fk = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return Fk += kk, fflate.strToU8(Fk)
    }

    function yX(kk) {
      const Fk = kk.m;
      return `( ${fX(Fk,0)}, ${fX(Fk,4)}, ${fX(Fk,8)}, ${fX(Fk,12)} )`
    }

    function fX(kk, Fk) {
      return `(${kk[Fk+0]}, ${kk[Fk+1]}, ${kk[Fk+2]}, ${kk[Fk+3]})`
    }

    function mX(kk, Fk) {
      const Bk = "Object_" + kk.uniqueId,
        Rk = yX(Fk);
      return `def Xform "${Bk}" (\n\tprepend references = @./geometries/Geometry_${kk.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Rk}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${kk.material.uniqueId}>\n}\n\n`
    }

    function WX(kk) {
      switch (kk) {
        case Ok.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case Ok.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case Ok.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function vX(kk) {
      return `(${kk.x}, ${kk.y})`
    }

    function iX(kk) {
      return `(${kk.r}, ${kk.g}, ${kk.b})`
    }

    function YX(kk) {
      return "image/jpeg" === kk || "image/png" === kk
    }

    function oX(kk, Fk, Bk, tk, ak, Xk) {
      const bk = kk.getInternalTexture().uniqueId + "_" + kk.invertY,
        dk = kk.mimeType || (0, wk.e)(kk.getInternalTexture()?.url ?? ""),
        sk = YX(dk) ? dk : "image/png",
        Vk = "image/jpeg" === sk ? "jpg" : "png";
      ak[bk] = {
        texture: kk,
        mimeType: sk,
        ext: Vk
      };
      const Jk = kk.coordinatesIndex > 0 ? "st" + kk.coordinatesIndex : "st",
        Ak = new Rk.Vector2(kk.uScale, kk.vScale),
        ek = new Rk.Vector2(kk.uOffset, kk.vOffset),
        yk = kk.wAng,
        fk = Math.sin(yk),
        mk = Math.cos(yk);
      return ek.y = 1 - ek.y - Ak.y, ek.x += fk * Ak.x, ek.y += (1 - mk) * Ak.y, `\n    def Shader "PrimvarReader_${Bk}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Jk}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${Bk}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${Fk.uniqueId}/PrimvarReader_${Bk}.outputs:result>\n        float inputs:rotation = ${(yk*(180/Math.PI)).toFixed(Xk.precision)}\n        float2 inputs:scale = ${vX(Ak)}\n        float2 inputs:translation = ${vX(ek)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${kk.uniqueId}_${Bk}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${bk}.${Vk}@\n        float2 inputs:st.connect = </Root/Materials/Material_${Fk.uniqueId}/Transform2d_${Bk}.outputs:result>\n        ${tk?"float4 inputs:scale = "+function(kk){return`(${kk.r}, ${kk.g}, ${kk.b}, 1.0)`}(tk):""}\n        token inputs:sourceColorSpace = "${kk.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${WX(kk.wrapU)}"\n        token inputs:wrapT = "${WX(kk.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${Fk.needAlphaBlending()||Fk.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function LX(kk, Fk, Bk) {
      const Rk = "\t\t\t",
        tk = [],
        ak = [],
        {
          diffuseMap: Xk,
          diffuse: bk,
          alphaCutOff: wk,
          emissiveMap: dk,
          emissive: sk,
          normalMap: Vk,
          roughnessMap: Jk,
          roughnessChannel: Ak,
          roughness: ek,
          metalnessMap: yk,
          metalnessChannel: mk,
          metalness: Wk,
          aoMap: vk,
          aoMapChannel: ik,
          aoMapIntensity: Yk,
          alphaMap: Lk,
          ior: Ok,
          clearCoatEnabled: Ek,
          clearCoat: Sk,
          clearCoatMap: Nk,
          clearCoatRoughness: Hk,
          clearCoatRoughnessMap: uk
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
          return kk instanceof XR.StandardMaterial ? {
            ...Fk,
            diffuseMap: kk.diffuseTexture,
            diffuse: kk.diffuseColor,
            alphaCutOff: kk.alphaCutOff,
            emissiveMap: kk.emissiveTexture,
            emissive: kk.emissiveColor,
            roughness: 1,
            alphaMap: kk.opacityTexture
          } : kk instanceof LF ? {
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
      return null !== Xk ? (tk.push(`${Rk}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Xk.uniqueId}_diffuse.outputs:rgb>`), kk.needAlphaBlending() ? tk.push(`${Rk}float inputs:opacity.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Xk.uniqueId}_diffuse.outputs:a>`) : kk.needAlphaTesting() && (tk.push(`${Rk}float inputs:opacity.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Xk.uniqueId}_diffuse.outputs:a>`), tk.push(`${Rk}float inputs:opacityThreshold = ${wk}`)), ak.push(oX(Xk, kk, "diffuse", bk, Fk, Bk))) : tk.push(`${Rk}color3f inputs:diffuseColor = ${iX(bk||fk.Color3.White())}`), null !== dk ? (tk.push(`${Rk}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${dk.uniqueId}_emissive.outputs:rgb>`), ak.push(oX(dk, kk, "emissive", sk, Fk, Bk))) : sk && sk.toLuminance() > 0 && tk.push(`${Rk}color3f inputs:emissiveColor = ${iX(sk)}`), null !== Vk && (tk.push(`${Rk}normal3f inputs:normal.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Vk.uniqueId}_normal.outputs:rgb>`), ak.push(oX(Vk, kk, "normal", null, Fk, Bk))), null !== vk && (tk.push(`${Rk}float inputs:occlusion.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${vk.uniqueId}_occlusion.outputs:${ik}>`), ak.push(oX(vk, kk, "occlusion", new fk.Color3(Yk, Yk, Yk), Fk, Bk))), null !== Jk ? (tk.push(`${Rk}float inputs:roughness.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Jk.uniqueId}_roughness.outputs:${Ak}>`), ak.push(oX(Jk, kk, "roughness", new fk.Color3(ek, ek, ek), Fk, Bk))) : tk.push(`${Rk}float inputs:roughness = ${ek}`), null !== yk ? (tk.push(`${Rk}float inputs:metallic.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${yk.uniqueId}_metallic.outputs:${mk}>`), ak.push(oX(yk, kk, "metallic", new fk.Color3(Wk, Wk, Wk), Fk, Bk))) : tk.push(`${Rk}float inputs:metallic = ${Wk}`), null !== Lk ? (tk.push(`${Rk}float inputs:opacity.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Lk.uniqueId}_opacity.outputs:r>`), tk.push(`${Rk}float inputs:opacityThreshold = 0.0001`), ak.push(oX(Lk, kk, "opacity", null, Fk, Bk))) : tk.push(`${Rk}float inputs:opacity = ${kk.alpha}`), Ek && (null !== Nk ? (tk.push(`${Rk}float inputs:clearcoat.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${Nk.uniqueId}_clearcoat.outputs:r>`), ak.push(oX(Nk, kk, "clearcoat", new fk.Color3(Sk, Sk, Sk), Fk, Bk))) : tk.push(`${Rk}float inputs:clearcoat = ${Sk}`), null !== uk ? (tk.push(`${Rk}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${kk.uniqueId}/Texture_${uk.uniqueId}_clearcoatRoughness.outputs:g>`), ak.push(oX(uk, kk, "clearcoatRoughness", new fk.Color3(Hk, Hk, Hk), Fk, Bk))) : tk.push(`${Rk}float inputs:clearcoatRoughness = ${Hk}`)), tk.push(`${Rk}float inputs:ior = ${Ok}`), `\n\tdef Material "Material_${kk.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${tk.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${kk.uniqueId}/PreviewSurface.outputs:surface>\n\n${ak.join("\n")}\n\n\t}\n`
    }

    function OX(kk) {
      kk.computeWorldMatrix(!0);
      const Fk = kk.getWorldMatrix().clone(),
        Bk = kk.XN().useRightHandedSystem;
      let Rk = kk.material?._getEffectiveOrientation(kk) ?? kk.sideOrientation,
        Xk = !Bk,
        bk = kk.parent;
      for (; bk;) {
        if (TB(bk, Bk) && null === bk.parent) {
          Bk || (Fk.multiplyToRef(bk.getWorldMatrix().invert(), Fk), Rk = Rk === ak.c.ClockWiseSideOrientation ? ak.c.CounterClockWiseSideOrientation : ak.c.ClockWiseSideOrientation), Xk = !1;
          break
        }
        bk = bk.parent
      }
      return Fk.determinant() < 0 && tk.Tools.Warn(`Mesh ${kk.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: Fk,
        windingOrder: Rk === ak.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: Xk
      }
    }
    async function EX(kk, Fk, Bk) {
      const ak = {
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
      "undefined" === typeof fflate && await tk.Tools.LoadScriptAsync(ak.fflateUrl);
      const Xk = {};
      Xk[ak.modelFileName] = null;
      let bk = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      bk += function(kk) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===kk.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${kk.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${kk.planeAnchoringAlignment}"`:""}\n            `
      }(ak);
      const wk = {};
      for (const Rk of kk.meshes) {
        if (0 === Rk.getTotalVertices()) continue;
        const kk = Rk,
          Fk = kk.geometry,
          dk = kk.material;
        if (!dk || !Fk || Bk && !Bk(kk)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(dk.getClassName())) {
          const Bk = "geometries/Geometry_" + Fk.uniqueId + ".usda",
            {
              matrix: Rk,
              windingOrder: tk,
              convertToRightHanded: sk
            } = OX(kk);
          if (!(Bk in Xk)) {
            const kk = AX(Fk, ak, tk, sk);
            Xk[Bk] = eX(kk)
          }
          dk.uniqueId in wk || (wk[dk.uniqueId] = dk), bk += mX(kk, Rk)
        } else tk.Tools.Warn("USDZExportAsync does not support this material type: " + dk.getClassName())
      }
      kk.activeCamera && ak.exportCamera && (bk += function(kk, Fk) {
        const Bk = "Camera_" + kk.uniqueId,
          tk = yX(Rk.Matrix.RotationY(Math.PI).multiply(kk.getWorldMatrix()));
        if (kk.mode === Ok.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${Bk}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${tk}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${kk.minZ.toPrecision(Fk.precision)}, ${kk.maxZ.toPrecision(Fk.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(kk.orthoLeft||1)+Math.abs(kk.orthoRight||1))).toPrecision(Fk.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(kk.orthoTop||1)+Math.abs(kk.orthoBottom||1))).toPrecision(Fk.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Rk = kk.ne().getAspectRatio(kk),
            ak = Fk.cameraSensorWidth || 35;
          return `def Camera "${Bk}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${tk}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${kk.minZ.toPrecision(Fk.precision)}, ${kk.maxZ.toPrecision(Fk.precision)})\n\t\t\tfloat focalLength = ${(ak/(2*Math.tan(.5*kk.fov))).toPrecision(Fk.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(ak*Rk).toPrecision(Fk.precision)}\n\t\t\tfloat verticalAperture = ${(ak/Rk).toPrecision(Fk.precision)}            \n\t\t}\n\t\n\t`
        }
      }(kk.activeCamera, ak)), bk += "\n            }\n        }";
      const dk = {};
      bk += function(kk, Fk, Bk) {
        const Rk = [];
        for (const tk in kk) {
          const ak = kk[tk];
          Rk.push(LX(ak, Fk, Bk))
        }
        return `\n    def "Materials"\n{\n${Rk.join("")}\n}\n\n`
      }(wk, dk, ak), bk += "\n    }", Xk[ak.modelFileName] = fflate.strToU8(bk);
      for (const Rk in dk) {
        const {
          texture: kk,
          ext: Fk,
          mimeType: Bk
        } = dk[Rk], tk = await WB(kk);
        if (tk && YX(tk.mimeType) && tk.mimeType === Bk) Xk[`textures/Texture_${Rk}.${Fk}`] = new Uint8Array(tk.data);
        else {
          const tk = kk.getSize(),
            ak = await (0, ik.h)(kk),
            bk = await Ek.DumpTools.DumpDataAsync(tk.width, tk.height, ak, Bk, void 0, !1, !0);
          Xk[`textures/Texture_${Rk}.${Fk}`] = new Uint8Array(bk).slice()
        }
      }
      let sk = 0;
      for (const Rk in Xk) {
        const kk = Xk[Rk];
        if (!kk) continue;
        sk += 34 + Rk.length;
        const Fk = 63 & sk;
        if (4 !== Fk) {
          const Bk = new Uint8Array(64 - Fk);
          Xk[Rk] = [kk, {
            extra: {
              12345: Bk
            }
          }]
        }
        sk = kk.length
      }
      return fflate.zipSync(Xk, {
        level: 0
      })
    }
    var SX = Bk(40527);
    class NX {
      static Export(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        if (!kk || 0 === kk.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Rk = Fk;
        Fk && 0 !== Fk.length || (Rk = kk.animations.map((kk => kk.name)));
        let tk = null;
        for (const dk of Rk) {
          const Fk = kk.getAnimationRange(dk);
          Fk && (tk = tk ? new SX.c("animation-range", Math.min(tk.from, Fk.from), Math.max(tk.to, Fk.to)) : Fk)
        }
        if (!tk && (kk.animations.length > 0 && (tk = kk.getAnimationRange(kk.animations[0].name)), !tk)) throw new Error("No animation range found in skeleton");
        const ak = Bk || 1 / (kk.animations[0]?.framePerSecond || 30),
          Xk = this._BuildBoneHierarchy(kk, Rk);
        let bk = 0;
        for (const dk of Xk) dk.positionKeys.length > 0 && (bk = Math.max(bk, dk.positionKeys.length)), dk.rotationKeys.length > 0 && (bk = Math.max(bk, dk.rotationKeys.length));
        0 === bk && (bk = Math.floor((tk.to - tk.from) / ak) + 1);
        let wk = "";
        return wk += "HIERARCHY\n", wk += this._ExportHierarchy(Xk, 0), wk += "MOTION\n", wk += `Frames: ${bk}\n`, wk += `Frame Time: ${ak.toFixed(6)}\n`, wk += this._ExportMotionData(Xk, bk, 0, Rk), wk
      }
      static _BuildBoneHierarchy(kk, Fk) {
        const Bk = new Map,
          Rk = [];
        for (const tk of kk.bones) {
          const kk = {
            bone: tk,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          Bk.set(tk, kk)
        }
        for (const tk of kk.bones) {
          const kk = Bk.get(tk);
          if (tk.animations.length > 0)
            for (const Bk of tk.animations) Fk.includes(Bk.name) && ("position" === Bk.targetProperty ? (kk.hasPositionChannels = !0, kk.positionKeys.push(...Bk.getKeys())) : "rotationQuaternion" === Bk.targetProperty && (kk.hasRotationChannels = !0, kk.rotationKeys.push(...Bk.getKeys())));
          if (tk.getParent()) {
            const Fk = Bk.get(tk.getParent());
            Fk && Fk.children.push(kk)
          } else Rk.push(kk)
        }
        return Rk
      }
      static _ExportHierarchy(kk, Fk) {
        let Bk = "";
        const Rk = "    ".repeat(Fk);
        for (const tk of kk) {
          const kk = tk.bone;
          if (this._IsEndSite(tk)) {
            Bk += `${Rk}End Site\n`, Bk += `${Rk}{\n`;
            const Fk = this._GetBoneOffset(kk);
            Bk += `${Rk}    OFFSET ${Fk.x.toFixed(6)} ${Fk.y.toFixed(6)} ${Fk.z.toFixed(6)}\n`, Bk += `${Rk}}\n`
          } else {
            Bk += `${0===Fk?"ROOT":`${Rk}JOINT`} ${kk.name}\n`, Bk += `${Rk}{\n`;
            const ak = this._GetBoneOffset(kk);
            Bk += `${Rk}    OFFSET ${ak.x.toFixed(6)} ${ak.y.toFixed(6)} ${ak.z.toFixed(6)}\n`;
            const Xk = [];
            tk.hasPositionChannels && Xk.push("Xposition", "Yposition", "Zposition"), tk.hasRotationChannels && Xk.push("Zrotation", "Xrotation", "Yrotation"), Xk.length > 0 && (Bk += `${Rk}    CHANNELS ${Xk.length} ${Xk.join(" ")}\n`), tk.children.length > 0 && (Bk += this._ExportHierarchy(tk.children, Fk + 1)), Bk += `${Rk}}\n`
          }
        }
        return Bk
      }
      static _IsEndSite(kk) {
        return 0 === kk.children.length
      }
      static _GetBoneOffset(kk) {
        try {
          if (!kk.getParent()) return kk.getRestMatrix().getTranslation();
          return kk.getLocalMatrix().getTranslation()
        } catch (Fk) {
          return Rk.Qe.Zero()
        }
      }
      static _ExportMotionData(kk, Fk, Bk, Rk) {
        let tk = "";
        for (let ak = 0; ak < Fk; ak++) {
          const Fk = [];
          this._CollectFrameValues(kk, ak + Bk, Fk, Rk), tk += Fk.map((kk => kk.toFixed(6))).join(" ") + "\n"
        }
        return tk
      }
      static _CollectFrameValues(kk, Fk, Bk, Rk) {
        for (const tk of kk)
          if (!this._IsEndSite(tk)) {
            if (tk.hasPositionChannels) {
              const kk = this._GetPositionAtFrameIndex(tk.positionKeys, Fk);
              Bk.push(kk.x, kk.y, kk.z)
            }
            if (tk.hasRotationChannels) {
              const kk = this._GetRotationAtFrameIndex(tk.rotationKeys, Fk),
                Rk = this._QuaternionToEuler(kk);
              Bk.push(Rk.z, Rk.x, Rk.y)
            }
            tk.children.length > 0 && this._CollectFrameValues(tk.children, Fk, Bk, Rk)
          }
      }
      static _GetPositionAtFrameIndex(kk, Fk) {
        if (0 === kk.length) return Rk.Qe.Zero();
        return kk[Math.max(0, Math.min(Fk, kk.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(kk, Fk) {
        if (0 === kk.length) return Rk.Quaternion.Identity();
        return kk[Math.max(0, Math.min(Fk, kk.length - 1))].value.clone()
      }
      static _QuaternionToEuler(kk) {
        const Fk = new Rk.Matrix;
        kk.toRotationMatrix(Fk);
        const Bk = Fk.m;
        let ak, Xk, bk;
        const wk = Math.sqrt(Bk[0] * Bk[0] + Bk[1] * Bk[1]);
        return wk > cB.c ? (ak = Math.atan2(Bk[6], Bk[10]), Xk = Math.atan2(-Bk[2], wk), bk = Math.atan2(Bk[1], Bk[0])) : (ak = Math.atan2(-Bk[9], Bk[5]), Xk = Math.atan2(-Bk[2], wk), bk = 0), new Rk.Qe(tk.Tools.ToDegrees(ak), tk.Tools.ToDegrees(Xk), tk.Tools.ToDegrees(bk))
      }
    }

    function HX(kk) {
      return "string" === typeof kk?.name
    }
    const uX = Symbol("__xml:meta$__"),
      MX = Symbol("__xml:name$__");

    function gX(kk, Fk) {
      Object.prototype.hasOwnProperty.call(kk.metadata, uX) || (kk.metadata[uX] = []), kk.metadata[uX].push(Fk)
    }

    function UX(kk) {
      return (Fk, Bk) => {
        Fk[MX] = kk
      }
    }

    function cX() {
      return (kk, Fk) => gX(Fk, {
        kind: "none",
        prop: String(Fk.name),
        ignore: !0
      })
    }

    function GX(kk) {
      return (Fk, Bk) => gX(Bk, {
        kind: "attr",
        prop: String(Bk.name),
        ...kk
      })
    }

    function TX(kk) {
      return (Fk, Bk) => gX(Bk, {
        kind: "elem",
        prop: String(Bk.name),
        ...kk
      })
    }

    function rX(kk) {
      const Fk = "function" === typeof kk ? kk : kk?.constructor,
        Bk = Fk?.[Symbol.metadata];
      if (!Bk) return [];
      const Rk = [];
      let tk = Bk;
      for (; tk;) Object.prototype.hasOwnProperty.call(tk, uX) && Rk.push(...tk[uX]), tk = Object.getPrototypeOf(tk);
      return Rk
    }

    function DX(kk) {
      const Fk = kk?.constructor?.[MX];
      return Fk || void 0
    }

    function zX(kk) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(kk)
    }

    function PX(kk) {
      if (HX(kk)) return kk;
      const Fk = (kk ?? "").trim();
      if (!Fk) return {
        name: ""
      };
      const Bk = Fk.indexOf(":");
      if (-1 === Bk) return {
        name: Fk
      };
      if (-1 !== Fk.indexOf(":", Bk + 1)) return {
        name: Fk
      };
      const Rk = Fk.slice(0, Bk),
        tk = Fk.slice(Bk + 1);
      return zX(Rk) && zX(tk) ? {
        ns: Rk,
        name: tk
      } : {
        name: Fk
      }
    }

    function hX(kk, Fk) {
      return Fk ? `${Fk}:${kk}` : kk
    }
    const qX = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      CX = Object.freeze({
        number: qX
      });

    function ZX(kk) {
      const Fk = kk?.eps ?? qX.eps;
      return {
        eps: Fk,
        maxDecimalsCap: kk?.maxDecimalsCap ?? qX.maxDecimalsCap,
        trimTrailingZeros: kk?.trimTrailingZeros ?? qX.trimTrailingZeros,
        fixedDecimals: kk?.fixedDecimals,
        allowScientific: kk?.allowScientific ?? qX.allowScientific,
        snapNearZero: kk?.snapNearZero ?? qX.snapNearZero,
        zeroThreshold: kk?.zeroThreshold ?? Fk,
        perAttributeEps: kk?.perAttributeEps
      }
    }

    function pX(kk) {
      return {
        number: ZX(kk?.number)
      }
    }
    class KX {
      constructor(kk) {
        if (this.o = kk, this._o = kk.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(kk) {
        if (!Number.isFinite(kk)) throw new Error(`Cannot format non-finite number: ${kk}`);
        const Fk = this._o,
          Bk = this._clampInt(Fk.maxDecimalsCap ?? 15, 0, 20),
          Rk = Fk.trimTrailingZeros ?? !0,
          tk = Fk.snapNearZero ?? !0,
          ak = Fk.zeroThreshold ?? Fk.eps,
          Xk = 1 / Fk.eps;
        let bk, wk = Math.round(kk * Xk) / Xk;
        if (Object.is(wk, -0) && (wk = 0), tk && Math.abs(wk) <= ak && (wk = 0), bk = void 0 !== Fk.fixedDecimals ? this._clampInt(Fk.fixedDecimals, 0, Bk) : this._clampInt(Math.ceil(-Math.log10(Fk.eps)), 0, Bk), Fk.allowScientific, 0 === bk) return String(Math.trunc(wk));
        let dk = wk.toFixed(bk);
        if (Rk && void 0 === Fk.fixedDecimals && (dk = dk.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(dk)) throw new Error(`Scientific notation not allowed in XML output: ${dk}`);
        return dk
      }
      _clampInt(kk, Fk, Bk) {
        return Number.isFinite(kk) ? (kk = Math.trunc(kk), Math.max(Fk, Math.min(Bk, kk))) : Fk
      }
    }

    function xX(kk) {
      return kk instanceof Date
    }

    function jX(kk) {
      return "string" === typeof kk
    }

    function lX(kk) {
      return "string" === typeof kk || "number" === typeof kk || "boolean" === typeof kk || "bigint" === typeof kk || xX(kk)
    }

    function nX(kk) {
      return "number" === typeof kk || "boolean" === typeof kk || "bigint" === typeof kk || xX(kk)
    }
    class IX {
      constructor(kk, Fk) {
        this._ns = new Map, this._prefixCount = 0, this._builder = kk, this._format = pX(Fk), this._nFmt = new KX(this._format)
      }
      withNamespace() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        for (const Rk of Fk) this._assignNamespace(Rk);
        return this
      }
      serialize(kk, Fk) {
        if (!(Fk = Fk ?? DX(kk))) throw new Error("can not find name for given object");
        const Bk = PX(Fk);
        Bk.ns && this._assignNamespace(Bk.ns, "xmlns"), this._gatherNamespaces(kk, new WeakSet);
        const Rk = this._builder.ele(null, Bk.name);
        for (const [tk, ak] of Array.from(this._ns.entries())) Rk.att("xmlns", ak, tk);
        this._writeObjectContent(Rk, kk, (new WeakSet).add(kk)), this._builder.end()
      }
      _writeObject(kk, Fk, Bk) {
        if (Bk.has(Fk)) return;
        if (Bk.add(Fk), Array.isArray(Fk)) {
          for (const Rk of Fk) nX(Rk) || (jX(Rk) ? this._builder.text(Rk) : this._writeObject(kk, Rk, Bk));
          return
        }
        const Rk = DX(Fk);
        if (!Rk) return;
        const tk = PX(Rk),
          ak = this._getPrefix(tk),
          Xk = hX(tk.name, ak);
        kk.ele(null, Xk), this._writeObjectContent(kk, Fk, Bk), this._builder.end()
      }
      _getPrefix(kk) {
        if (kk.ns) {
          const Fk = this._ns.get(kk.ns.toLowerCase());
          if ("xmlns" !== Fk) return Fk
        }
      }
      _writeObjectContent(kk, Fk, Bk) {
        const Rk = rX(Fk) ?? [],
          tk = new Map;
        for (const Xk of Rk) {
          const kk = tk.get(Xk.prop) ?? [];
          kk.push(Xk), tk.set(Xk.prop, kk)
        }
        const ak = Object.keys(Fk).sort(((kk, Fk) => {
          const Bk = (tk.get(kk) ?? []).some((kk => "attr" === kk.kind));
          return Bk === (tk.get(Fk) ?? []).some((kk => "attr" === kk.kind)) ? 0 : Bk ? -1 : 1
        }));
        for (const Xk of ak) {
          const Rk = Fk[Xk];
          if (null === Rk || void 0 === Rk) continue;
          const ak = tk.get(Xk);
          if (ak) {
            if (ak.some((kk => !0 === kk.ignore || "none" === kk.kind))) continue;
            for (const Fk of ak) {
              const Bk = Fk.name ?? Fk.prop.toLowerCase();
              if (Bk) switch (Fk.kind) {
                case "attr": {
                  let tk = null;
                  if ("number" === typeof Rk && this._nFmt && (tk = this._nFmt.toString(Rk)), Fk.formatter) {
                    tk = new Fk.formatter(this._format).toString(Rk)
                  }
                  if (tk = tk ?? Rk.toString(), tk) {
                    const Fk = PX(Bk),
                      Rk = this._getPrefix(Fk),
                      ak = hX(Fk.name, Rk);
                    kk.att(null, ak, tk)
                  }
                  break
                }
              }
            }
          } else nX(Rk) || (jX(Rk) ? this._builder.text(Rk) : this._writeObject(kk, Rk, Bk))
        }
      }
      _gatherNamespaces(kk, Fk) {
        if (Fk.has(kk)) return;
        if (Fk.add(kk), Array.isArray(kk)) {
          for (const Bk of kk) lX(Bk) || this._gatherNamespaces(Bk, Fk);
          return
        }
        const Bk = DX(kk);
        Bk && this._assignNamespace(Bk);
        const Rk = rX(kk) ?? [],
          tk = new Map;
        for (const Xk of Rk) {
          const kk = tk.get(Xk.prop) ?? [];
          kk.push(Xk), tk.set(Xk.prop, kk)
        }
        const ak = [];
        for (const Xk of Object.keys(kk)) {
          const Fk = kk[Xk];
          if (null === Fk || void 0 === Fk) continue;
          const Bk = tk.get(Xk);
          if (Bk) {
            if (Bk.some((kk => !0 === kk.ignore || "none" === kk.kind))) continue;
            for (const kk of Bk) kk.name && this._assignNamespace(kk.name)
          }
          ak.push(Fk)
        }
        for (const Xk of ak) lX(Xk) || this._gatherNamespaces(Xk, Fk)
      }
      _assignNamespace(kk, Fk) {
        const Bk = PX(kk);
        if (Bk?.ns) {
          const kk = Bk.ns.toLowerCase();
          this._ns.get(kk) || this._ns.set(kk, Fk ?? this._buildNsPrefix(kk))
        } else if ("xmlns" === Fk) {
          const kk = Bk.name.toLowerCase();
          this._ns.get(kk) || this._ns.set(kk, Fk ?? this._buildNsPrefix(kk))
        }
      }
      _buildNsPrefix(kk) {
        let Fk, Bk = !1;
        do {
          Fk = "ns" + this._prefixCount++;
          for (const kk of Array.from(this._ns.values()))
            if (kk === Fk) {
              Bk = !0;
              break
            }
        } while (Bk);
        return Fk
      }
    }
    class QX {}
    var kb;
    QX.OpenTag = "<", QX.CloseTag = ">", QX.Slash = "/", QX.Question = "?", QX.Quote = '"', QX.Equal = "=", QX.Space = " ", QX.Semicolon = ":", QX.Dec = "<?xml", QX.Xml = "xml", QX.Xmlns = "xmlns", QX.Xsi = "xsi", QX.VersionKeyword = "version", QX.EncodingKeyword = "encoding", QX.StandaloneKeyword = "standalone",
      function(kk) {
        kk[kk.Declaration = 0] = "Declaration", kk[kk.Tag = 1] = "Tag", kk[kk.Attribute = 2] = "Attribute", kk[kk.Text = 3] = "Text"
      }(kb || (kb = {}));
    class Fb {
      constructor(kk) {
        this._ctxStack = [], this._d = 0, this._w = kk
      }
      dec(kk, Fk, Bk) {
        return this._w.write(QX.Dec), this._writeAttStr(QX.VersionKeyword, kk), Fk && this._writeAttStr(QX.EncodingKeyword, Fk), void 0 !== Bk && this._writeAttStr(QX.StandaloneKeyword, Bk ? "yes" : "no"), this._w.write(QX.Question, QX.CloseTag), this
      }
      att(kk, Fk, Bk) {
        const Rk = this._peekContext();
        if (!Rk) throw new Error("att() without open element");
        if (Rk.closed) throw new Error(`att() after start tag closed for <${Rk.name}>`);
        if (this._isXmlnsDecl(kk, Fk)) {
          if (Fk === QX.Xmlns) Rk.defaultNs = Bk, this._registerNamespace(Rk, "", Bk), this._writeAttStr(QX.Xmlns, Bk);
          else if (kk) this._registerNamespace(Rk, Fk, Bk), this._writeAttStr(`${kk}:${Fk}`, Bk);
          else {
            const kk = Fk.slice(6);
            this._registerNamespace(Rk, kk, Bk), this._writeAttStr(Fk, Bk)
          }
          return Rk.lastToken = kb.Attribute, this
        }
        let tk = Fk;
        if (kk) {
          tk = `${this._ensurePrefixDeclared(Rk,kk)}:${Fk}`
        }
        return Rk.lastToken = kb.Attribute, this._writeAttStr(tk, Bk), this
      }
      ele(kk, Fk) {
        const Bk = this._peekContext();
        Bk && this._closeOpenTagIfNeeded(Bk);
        let Rk = Fk;
        if (kk) {
          Rk = `${this._lookupPrefix(kk)??kk}:${Fk}`
        }
        return this._pushContext(Rk, ++this._d), this._w.write(QX.OpenTag, Rk), this
      }
      text(kk) {
        const Fk = this._peekContext();
        if (!Fk) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(Fk), Fk.lastToken = kb.Text, this._w.write(this._escText(kk)), this
      }
      end() {
        const kk = this._popContext();
        return kk && (this._d--, kk.closed ? this._w.write(QX.OpenTag, QX.Slash, kk.name, QX.CloseTag) : this._w.write(QX.Slash, QX.CloseTag)), this
      }
      _pushContext(kk, Fk) {
        const Bk = new Fb.Context(kk, Fk);
        return this._ctxStack.push(Bk), Bk
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
        this._w.write(QX.Space, kk, QX.Equal, QX.Quote, this._escAttr(Fk), QX.Quote)
      }
      _lookupPrefix(kk) {
        let Fk = this._ctxStack.length - 1;
        if (Fk >= 0)
          do {
            const Bk = this._ctxStack[Fk--],
              Rk = Bk.ns2prefix?.get(kk);
            if (Rk) return Rk
          } while (Fk >= 0)
      }
      _escText(kk) {
        return kk.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(kk) {
        return this._escText(kk).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(kk, Fk) {
        if (kk) return kk === QX.Xmlns;
        const Bk = Fk.length,
          Rk = QX.Xmlns.length;
        return Bk >= Rk && (Fk.startsWith(QX.Xmlns) && (Fk.length == Rk || Fk[Rk] == QX.Semicolon))
      }
      _registerNamespace(kk, Fk, Bk) {
        if (Fk === QX.Xml || Fk === QX.Xmlns) throw new Error(`reserved prefix '${Fk}'`);
        const Rk = kk.prefix2ns.get(Fk);
        if (Rk && Rk !== Bk) throw new Error(`prefix '${Fk}' already bound to a different namespace`);
        kk.ns2prefix.get(Bk) || kk.ns2prefix.set(Bk, Fk), kk.prefix2ns.set(Fk, Bk)
      }
      _allocPrefix(kk) {
        let Fk = 1;
        for (;;) {
          const Bk = "ns" + Fk++;
          if (!kk.prefix2ns.has(Bk)) return Bk
        }
      }
      _ensurePrefixDeclared(kk, Fk) {
        const Bk = this._lookupPrefix(Fk);
        if (Bk) return Bk;
        if (kk.closed) throw new Error(`can not declare namespace after start tag closed for <${kk.name}>`);
        const Rk = this._allocPrefix(kk);
        return this._writeAttStr(`${QX.Xmlns}:${Rk}`, Fk), this._registerNamespace(kk, Rk, Fk), Rk
      }
      _closeOpenTagIfNeeded(kk) {
        kk.closed || (this._w.write(QX.CloseTag), kk.closed = !0)
      }
    }
    Fb.Context = class {
      constructor(kk, Fk) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = kk, this.depth = Fk
      }
    };
    class Bb {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        if (0 === Fk.length) return this;
        const Rk = Fk.join("");
        return this._chunks.push(Rk), this.count += Rk.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Rb {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = kk, this._opts = Fk, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        if (0 === Fk.length) return this;
        const Rk = Fk.join("");
        if (0 === Rk.length) return this;
        this._pending += Rk, this._pendingChars += Rk.length;
        const tk = this._opts.flushChars ?? 65536;
        return this._pendingChars >= tk && this.flush(), this
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
    const tb = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      ab = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Xb, bb;
    ! function(kk) {
      kk.micron = "micron", kk.millimeter = "millimeter", kk.centimeter = "centimeter", kk.inch = "inch", kk.foot = "foot", kk.meter = "meter"
    }(Xb || (Xb = {})),
    function(kk) {
      kk.model = "model", kk.solidsupport = "solidsupport", kk.support = "support", kk.surface = "surface", kk.other = "other"
    }(bb || (bb = {}));
    const wb = "http://schemas.openxmlformats.org/package/2006/content-types",
      db = "http://schemas.openxmlformats.org/package/2006/relationships";
    var sb;
    ! function(kk) {
      kk.Relationships = "application/vnd.openxmlformats-package.relationships+xml", kk.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", kk.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", kk.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", kk.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", kk.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", kk.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", kk.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", kk.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", kk.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", kk.Png = "image/png", kk.Jpeg = "image/jpeg", kk.Tiff = "image/tiff", kk.Xml = "application/xml"
    }(sb || (sb = {}));
    const Vb = "_rels/",
      Jb = "3D/",
      Ab = "3dmodel.model",
      eb = ".rels",
      yb = "[Content_Types].xml";
    class fb {
      static IsKnown(kk) {
        return fb.Known.has(kk)
      }
      static IsThreeDimModel(kk) {
        return kk === fb.ThreeDimModel
      }
    }
    fb.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", fb.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", fb.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", fb.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", fb.Known = new Set([fb.ThreeDimModel, fb.Thumbnail, fb.PrintTicket, fb.MustPreserve]);
    let mb = (() => {
        let kk, Fk, Bk = [UX({
            ns: wb,
            name: "Types"
          })],
          Rk = [];
        Fk = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfContentTypes"), (() => {
          const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Bk, {
            kind: "class",
            name: Fk.name,
            metadata: tk
          }, null, Rk), Fk = kk.value, tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tk
          }), (0, Sk.l)(Fk, Rk)
        })(), Fk
      })(),
      Wb = (() => {
        let kk, Fk, Bk, Rk, tk = [UX({
            ns: wb,
            name: "Default"
          })],
          ak = [],
          Xk = [],
          bk = [],
          wk = [],
          dk = [];
        Fk = class {
          constructor(kk, Fk) {
            this.ext = (0, Sk.l)(this, Xk, void 0), this.ct = ((0, Sk.l)(this, bk), (0, Sk.l)(this, wk, void 0)), (0, Sk.l)(this, dk), this.ext = kk, this.ct = Fk
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfContentType"), (() => {
          const sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bk = [GX({
            name: {
              ns: wb,
              name: "Extension"
            }
          })], Rk = [GX({
            name: {
              ns: wb,
              name: "ContentType"
            }
          })], (0, Sk.j)(null, null, Bk, {
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
            metadata: sk
          }, Xk, bk), (0, Sk.j)(null, null, Rk, {
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
            metadata: sk
          }, wk, dk), (0, Sk.j)(null, kk = {
            value: Fk
          }, tk, {
            kind: "class",
            name: Fk.name,
            metadata: sk
          }, null, ak), Fk = kk.value, sk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sk
          }), (0, Sk.l)(Fk, ak)
        })(), Fk
      })(),
      vb = (() => {
        let kk, Fk, Bk = [UX({
            ns: db,
            name: "Relationships"
          })],
          Rk = [];
        Fk = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfRelationships"), (() => {
          const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Bk, {
            kind: "class",
            name: Fk.name,
            metadata: tk
          }, null, Rk), Fk = kk.value, tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tk
          }), (0, Sk.l)(Fk, Rk)
        })(), Fk
      })(),
      ib = (() => {
        let kk, Fk, Bk, Rk, tk, ak = [UX({
            ns: db,
            name: "Relationship"
          })],
          Xk = [],
          bk = [],
          wk = [],
          dk = [],
          sk = [],
          Vk = [],
          Jk = [];
        Fk = class {
          constructor(kk, Fk, Bk) {
            this.id = (0, Sk.l)(this, bk, void 0), this.type = ((0, Sk.l)(this, wk), (0, Sk.l)(this, dk, void 0)), this.target = ((0, Sk.l)(this, sk), (0, Sk.l)(this, Vk, void 0)), (0, Sk.l)(this, Jk), this.id = kk, this.type = Fk, this.target = Bk
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfRelationship"), (() => {
          const Ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bk = [GX({
            name: "Id"
          })], Rk = [GX({
            name: "Type"
          })], tk = [GX({
            name: "Target"
          })], (0, Sk.j)(null, null, Bk, {
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
            metadata: Ak
          }, bk, wk), (0, Sk.j)(null, null, Rk, {
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
            metadata: Ak
          }, dk, sk), (0, Sk.j)(null, null, tk, {
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
            metadata: Ak
          }, Vk, Jk), (0, Sk.j)(null, kk = {
            value: Fk
          }, ak, {
            kind: "class",
            name: Fk.name,
            metadata: Ak
          }, null, Xk), Fk = kk.value, Ak && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ak
          }), (0, Sk.l)(Fk, Xk)
        })(), Fk
      })();
    class Yb {
      constructor(kk, Fk, Bk) {
        this.contentTypes = kk, this.relationships = Fk, this.model = Bk
      }
    }
    class ob {
      static Zero() {
        return new ob([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(kk) {
        this.values = kk
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Lb {
      constructor(kk) {
        this.o = kk, this._f = new KX(kk)
      }
      toString(kk) {
        return kk.values.map((kk => this._f.toString(kk))).join(" ")
      }
    }
    let Ob = (() => {
        let kk, Fk, Bk, Rk, tk, ak = [UX({
            ns: tb,
            name: "model"
          })],
          Xk = [],
          bk = [],
          wk = [],
          dk = [],
          sk = [],
          Vk = [],
          Jk = [];
        Fk = class {
          constructor() {
            this.unit = (0, Sk.l)(this, bk, Xb.millimeter), this.requiredextensions = ((0, Sk.l)(this, wk), (0, Sk.l)(this, dk, void 0)), this.recommendedextensions = ((0, Sk.l)(this, sk), (0, Sk.l)(this, Vk, void 0)), this.metadata = (0, Sk.l)(this, Jk)
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfModel"), (() => {
          const Ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bk = [GX({
            name: "unit"
          })], Rk = [GX({
            name: "requiredextensions"
          })], tk = [GX({
            name: "recommendedextensions"
          })], (0, Sk.j)(null, null, Bk, {
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
            metadata: Ak
          }, bk, wk), (0, Sk.j)(null, null, Rk, {
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
            metadata: Ak
          }, dk, sk), (0, Sk.j)(null, null, tk, {
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
            metadata: Ak
          }, Vk, Jk), (0, Sk.j)(null, kk = {
            value: Fk
          }, ak, {
            kind: "class",
            name: Fk.name,
            metadata: Ak
          }, null, Xk), Fk = kk.value, Ak && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ak
          })
        })(), Fk.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, Sk.l)(Fk, Xk), Fk
      })(),
      Eb = (() => {
        let kk, Fk, Bk, Rk, tk, ak = [UX({
            ns: tb,
            name: "meta"
          })],
          Xk = [],
          bk = [],
          wk = [],
          dk = [],
          sk = [],
          Vk = [],
          Jk = [];
        Fk = class {
          constructor(kk, Fk, Bk, Rk) {
            this.name = (0, Sk.l)(this, bk, void 0), this.preserve = ((0, Sk.l)(this, wk), (0, Sk.l)(this, dk, void 0)), this.type = ((0, Sk.l)(this, sk), (0, Sk.l)(this, Vk, void 0)), this.value = (0, Sk.l)(this, Jk), this.name = kk, this.value = Fk, this.preserve = Bk, this.type = Rk
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfMeta"), (() => {
          const Ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bk = [GX({
            name: "name"
          })], Rk = [GX({
            name: "preserve"
          })], tk = [GX({
            name: "type"
          })], (0, Sk.j)(null, null, Bk, {
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
            metadata: Ak
          }, bk, wk), (0, Sk.j)(null, null, Rk, {
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
            metadata: Ak
          }, dk, sk), (0, Sk.j)(null, null, tk, {
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
            metadata: Ak
          }, Vk, Jk), (0, Sk.j)(null, kk = {
            value: Fk
          }, ak, {
            kind: "class",
            name: Fk.name,
            metadata: Ak
          }, null, Xk), Fk = kk.value, Ak && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ak
          }), (0, Sk.l)(Fk, Xk)
        })(), Fk
      })(),
      Sb = (() => {
        let kk, Fk, Bk = [UX({
            ns: tb,
            name: "metadatagroup"
          })],
          Rk = [];
        Fk = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfMetadataGroup"), (() => {
          const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Bk, {
            kind: "class",
            name: Fk.name,
            metadata: tk
          }, null, Rk), Fk = kk.value, tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tk
          }), (0, Sk.l)(Fk, Rk)
        })(), Fk
      })(),
      Nb = (() => {
        let kk, Fk, Bk = [UX({
            ns: tb,
            name: "resources"
          })],
          Rk = [];
        Fk = class {
          constructor() {
            this.object = []
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfResources"), (() => {
          const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Bk, {
            kind: "class",
            name: Fk.name,
            metadata: tk
          }, null, Rk), Fk = kk.value, tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tk
          }), (0, Sk.l)(Fk, Rk)
        })(), Fk
      })(),
      Hb = (() => {
        let kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk = [UX({
            ns: tb,
            name: "object"
          })],
          sk = [],
          Vk = [],
          Jk = [],
          Ak = [],
          ek = [],
          yk = [],
          fk = [],
          mk = [],
          Wk = [],
          vk = [],
          ik = [],
          Yk = [],
          Lk = [],
          Ok = [],
          Ek = [];
        Fk = class {
          constructor(kk) {
            let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.model;
            this.id = (0, Sk.l)(this, Vk, void 0), this.type = ((0, Sk.l)(this, Jk), (0, Sk.l)(this, Ak, void 0)), this.thumbnail = ((0, Sk.l)(this, ek), (0, Sk.l)(this, yk, void 0)), this.partnumber = ((0, Sk.l)(this, fk), (0, Sk.l)(this, mk, void 0)), this.name = ((0, Sk.l)(this, Wk), (0, Sk.l)(this, vk, void 0)), this.pid = ((0, Sk.l)(this, ik), (0, Sk.l)(this, Yk, void 0)), this.pindex = ((0, Sk.l)(this, Lk), (0, Sk.l)(this, Ok, void 0)), this.metadatagroup = (0, Sk.l)(this, Ek), this.id = kk, this.type = Fk
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfObject"), (() => {
          const Nk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bk = [GX({
            name: "id"
          })], Rk = [GX({
            name: "type"
          })], tk = [GX({
            name: "thumbnail"
          })], ak = [GX({
            name: "partnumber"
          })], Xk = [GX({
            name: "name"
          })], bk = [GX({
            name: "pid"
          })], wk = [GX({
            name: "pindex"
          })], (0, Sk.j)(null, null, Bk, {
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
            metadata: Nk
          }, Vk, Jk), (0, Sk.j)(null, null, Rk, {
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
            metadata: Nk
          }, Ak, ek), (0, Sk.j)(null, null, tk, {
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
            metadata: Nk
          }, yk, fk), (0, Sk.j)(null, null, ak, {
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
            metadata: Nk
          }, mk, Wk), (0, Sk.j)(null, null, Xk, {
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
            metadata: Nk
          }, vk, ik), (0, Sk.j)(null, null, bk, {
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
            metadata: Nk
          }, Yk, Lk), (0, Sk.j)(null, null, wk, {
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
            metadata: Nk
          }, Ok, Ek), (0, Sk.j)(null, kk = {
            value: Fk
          }, dk, {
            kind: "class",
            name: Fk.name,
            metadata: Nk
          }, null, sk), Fk = kk.value, Nk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nk
          }), (0, Sk.l)(Fk, sk)
        })(), Fk
      })(),
      ub = (() => {
        let kk, Fk, Bk = [UX({
            ns: tb,
            name: "mesh"
          })],
          Rk = [];
        Fk = class {
          constructor(kk, Fk) {
            this.vertices = kk ?? new Mb, this.triangles = Fk ?? new Ub
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfMesh"), (() => {
          const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Bk, {
            kind: "class",
            name: Fk.name,
            metadata: tk
          }, null, Rk), Fk = kk.value, tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tk
          }), (0, Sk.l)(Fk, Rk)
        })(), Fk
      })(),
      Mb = (() => {
        let kk, Fk, Bk = [UX({
            ns: tb,
            name: "vertices"
          })],
          Rk = [];
        Fk = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfVertices"), (() => {
          const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Bk, {
            kind: "class",
            name: Fk.name,
            metadata: tk
          }, null, Rk), Fk = kk.value, tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tk
          }), (0, Sk.l)(Fk, Rk)
        })(), Fk
      })(),
      gb = (() => {
        let kk, Fk, Bk, Rk, tk, ak = [UX({
            ns: tb,
            name: "vertex"
          })],
          Xk = [],
          bk = [],
          wk = [],
          dk = [],
          sk = [],
          Vk = [],
          Jk = [];
        Fk = class {
          constructor() {
            let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, Sk.l)(this, bk, void 0), this.y = ((0, Sk.l)(this, wk), (0, Sk.l)(this, dk, void 0)), this.z = ((0, Sk.l)(this, sk), (0, Sk.l)(this, Vk, void 0)), (0, Sk.l)(this, Jk), this.x = kk, this.y = Fk, this.z = Bk
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfVertex"), (() => {
          const Ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bk = [GX({
            name: "x"
          })], Rk = [GX({
            name: "y"
          })], tk = [GX({
            name: "z"
          })], (0, Sk.j)(null, null, Bk, {
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
            metadata: Ak
          }, bk, wk), (0, Sk.j)(null, null, Rk, {
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
            metadata: Ak
          }, dk, sk), (0, Sk.j)(null, null, tk, {
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
            metadata: Ak
          }, Vk, Jk), (0, Sk.j)(null, kk = {
            value: Fk
          }, ak, {
            kind: "class",
            name: Fk.name,
            metadata: Ak
          }, null, Xk), Fk = kk.value, Ak && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ak
          }), (0, Sk.l)(Fk, Xk)
        })(), Fk
      })(),
      Ub = (() => {
        let kk, Fk, Bk = [UX({
            ns: tb,
            name: "triangles"
          })],
          Rk = [];
        Fk = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfTriangles"), (() => {
          const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Bk, {
            kind: "class",
            name: Fk.name,
            metadata: tk
          }, null, Rk), Fk = kk.value, tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tk
          }), (0, Sk.l)(Fk, Rk)
        })(), Fk
      })(),
      cb = (() => {
        let kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk = [UX({
            ns: tb,
            name: "triangle"
          })],
          sk = [],
          Vk = [],
          Jk = [],
          Ak = [],
          ek = [],
          yk = [],
          fk = [],
          mk = [],
          Wk = [],
          vk = [],
          ik = [],
          Yk = [],
          Lk = [],
          Ok = [],
          Ek = [];
        Fk = class {
          constructor(kk, Fk, Bk) {
            this.v1 = (0, Sk.l)(this, Vk, void 0), this.v2 = ((0, Sk.l)(this, Jk), (0, Sk.l)(this, Ak, void 0)), this.v3 = ((0, Sk.l)(this, ek), (0, Sk.l)(this, yk, void 0)), this.p1 = ((0, Sk.l)(this, fk), (0, Sk.l)(this, mk, void 0)), this.p2 = ((0, Sk.l)(this, Wk), (0, Sk.l)(this, vk, void 0)), this.p3 = ((0, Sk.l)(this, ik), (0, Sk.l)(this, Yk, void 0)), this.pid = ((0, Sk.l)(this, Lk), (0, Sk.l)(this, Ok, void 0)), (0, Sk.l)(this, Ek), this.v1 = kk, this.v2 = Fk, this.v3 = Bk
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfTriangle"), (() => {
          const Nk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bk = [GX({
            name: "v1"
          })], Rk = [GX({
            name: "v2"
          })], tk = [GX({
            name: "v3"
          })], ak = [GX({
            name: "p1"
          })], Xk = [GX({
            name: "p2"
          })], bk = [GX({
            name: "p3"
          })], wk = [GX({
            name: "pid"
          })], (0, Sk.j)(null, null, Bk, {
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
            metadata: Nk
          }, Vk, Jk), (0, Sk.j)(null, null, Rk, {
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
            metadata: Nk
          }, Ak, ek), (0, Sk.j)(null, null, tk, {
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
            metadata: Nk
          }, yk, fk), (0, Sk.j)(null, null, ak, {
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
            metadata: Nk
          }, mk, Wk), (0, Sk.j)(null, null, Xk, {
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
            metadata: Nk
          }, vk, ik), (0, Sk.j)(null, null, bk, {
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
            metadata: Nk
          }, Yk, Lk), (0, Sk.j)(null, null, wk, {
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
            metadata: Nk
          }, Ok, Ek), (0, Sk.j)(null, kk = {
            value: Fk
          }, dk, {
            kind: "class",
            name: Fk.name,
            metadata: Nk
          }, null, sk), Fk = kk.value, Nk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nk
          }), (0, Sk.l)(Fk, sk)
        })(), Fk
      })(),
      Gb = (() => {
        let kk, Fk, Bk = [UX({
            ns: tb,
            name: "components"
          })],
          Rk = [];
        Fk = class {
          constructor() {
            this.component = []
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfComponents"), (() => {
          const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Bk, {
            kind: "class",
            name: Fk.name,
            metadata: tk
          }, null, Rk), Fk = kk.value, tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tk
          }), (0, Sk.l)(Fk, Rk)
        })(), Fk
      })(),
      Tb = (() => {
        let kk, Fk, Bk, Rk, tk = [UX({
            ns: tb,
            name: "component"
          })],
          ak = [],
          Xk = [],
          bk = [],
          wk = [],
          dk = [];
        Fk = class {
          constructor(kk, Fk) {
            this.objectid = (0, Sk.l)(this, Xk, void 0), this.transform = ((0, Sk.l)(this, bk), (0, Sk.l)(this, wk, void 0)), (0, Sk.l)(this, dk), this.objectid = kk, this.transform = Fk
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfComponent"), (() => {
          const sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bk = [GX({
            name: "objectid"
          })], Rk = [GX({
            name: "transform",
            formatter: Lb
          })], (0, Sk.j)(null, null, Bk, {
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
            metadata: sk
          }, Xk, bk), (0, Sk.j)(null, null, Rk, {
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
            metadata: sk
          }, wk, dk), (0, Sk.j)(null, kk = {
            value: Fk
          }, tk, {
            kind: "class",
            name: Fk.name,
            metadata: sk
          }, null, ak), Fk = kk.value, sk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sk
          }), (0, Sk.l)(Fk, ak)
        })(), Fk
      })(),
      rb = (() => {
        let kk, Fk, Bk, Rk = [UX({
            ns: tb,
            name: "basematerials"
          })],
          tk = [],
          ak = [],
          Xk = [];
        Fk = class {
          constructor(kk) {
            this.id = (0, Sk.l)(this, ak, void 0), this.base = ((0, Sk.l)(this, Xk), []), this.id = kk
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfBaseMaterials"), (() => {
          const bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bk = [GX({
            name: "id"
          })], (0, Sk.j)(null, null, Bk, {
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
            metadata: bk
          }, ak, Xk), (0, Sk.j)(null, kk = {
            value: Fk
          }, Rk, {
            kind: "class",
            name: Fk.name,
            metadata: bk
          }, null, tk), Fk = kk.value, bk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bk
          }), (0, Sk.l)(Fk, tk)
        })(), Fk
      })(),
      Db = (() => {
        let kk, Fk, Bk, Rk, tk = [UX({
            ns: tb,
            name: "base"
          })],
          ak = [],
          Xk = [],
          bk = [],
          wk = [],
          dk = [];
        Fk = class {
          constructor(kk, Fk) {
            this.name = (0, Sk.l)(this, Xk, void 0), this.displaycolor = ((0, Sk.l)(this, bk), (0, Sk.l)(this, wk, void 0)), (0, Sk.l)(this, dk), this.name = kk, this.displaycolor = Fk
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfBase"), (() => {
          const sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bk = [GX({
            name: "name"
          })], Rk = [GX({
            name: "displaycolor"
          })], (0, Sk.j)(null, null, Bk, {
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
            metadata: sk
          }, Xk, bk), (0, Sk.j)(null, null, Rk, {
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
            metadata: sk
          }, wk, dk), (0, Sk.j)(null, kk = {
            value: Fk
          }, tk, {
            kind: "class",
            name: Fk.name,
            metadata: sk
          }, null, ak), Fk = kk.value, sk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sk
          }), (0, Sk.l)(Fk, ak)
        })(), Fk
      })(),
      zb = (() => {
        let kk, Fk, Bk = [UX({
            ns: tb,
            name: "build"
          })],
          Rk = [];
        Fk = class {
          constructor() {
            this.item = []
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfBuild"), (() => {
          const tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Sk.j)(null, kk = {
            value: Fk
          }, Bk, {
            kind: "class",
            name: Fk.name,
            metadata: tk
          }, null, Rk), Fk = kk.value, tk && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tk
          }), (0, Sk.l)(Fk, Rk)
        })(), Fk
      })(),
      Pb = (() => {
        let kk, Fk, Bk, Rk, tk, ak = [UX({
            ns: tb,
            name: "item"
          })],
          Xk = [],
          bk = [],
          wk = [],
          dk = [],
          sk = [],
          Vk = [],
          Jk = [];
        Fk = class {
          constructor(kk, Fk, Bk) {
            this.objectid = (0, Sk.l)(this, bk, void 0), this.transform = ((0, Sk.l)(this, wk), (0, Sk.l)(this, dk, void 0)), this.partnumber = ((0, Sk.l)(this, sk), (0, Sk.l)(this, Vk, void 0)), this.metadatagroup = (0, Sk.l)(this, Jk), this.objectid = kk, this.transform = Fk, this.partnumber = Bk
          }
        };
        return (0, Sk.o)(Fk, "ThreeMfItem"), (() => {
          const Ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bk = [GX({
            name: "objectid"
          })], Rk = [GX({
            name: "transform",
            formatter: Lb
          })], tk = [GX({
            name: "partnumber"
          })], (0, Sk.j)(null, null, Bk, {
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
            metadata: Ak
          }, bk, wk), (0, Sk.j)(null, null, Rk, {
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
            metadata: Ak
          }, dk, sk), (0, Sk.j)(null, null, tk, {
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
            metadata: Ak
          }, Vk, Jk), (0, Sk.j)(null, kk = {
            value: Fk
          }, ak, {
            kind: "class",
            name: Fk.name,
            metadata: Ak
          }, null, Xk), Fk = kk.value, Ak && Object.defineProperty(Fk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ak
          }), (0, Sk.l)(Fk, Xk)
        })(), Fk
      })();
    class hb {
      constructor(kk, Fk) {
        this._object = new Hb(kk, Fk)
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
        this._object = new Hb(kk, Fk)
      }
    }
    class qb extends hb {
      constructor(kk) {
        super(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb.model), this._object.content = new Gb
      }
      withComponent(kk, Fk) {
        return this._object.content.component.push(new Tb(kk, Fk)), this
      }
    }
    class Cb extends hb {
      constructor(kk) {
        super(kk, bb.model)
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
          Bk = this._buildTriangle(kk.indices);
        return new ub(Fk, Bk)
      }
      _buildVertices(kk) {
        const Fk = new Mb;
        if (kk)
          for (let Bk = 0; Bk < kk.length;) {
            const Rk = kk[Bk++],
              tk = kk[Bk++],
              ak = kk[Bk++];
            let Xk = new gb(Rk, tk, ak);
            this._vh && (Xk = this._vh(Xk)), Fk.vertex.push(Xk)
          }
        return Fk
      }
      _buildTriangle(kk) {
        const Fk = new Ub;
        if (kk)
          for (let Bk = 0; Bk < kk.length;) {
            const Rk = kk[Bk++],
              tk = kk[Bk++],
              ak = kk[Bk++];
            let Xk = new cb(Rk, tk, ak);
            this._th && (Xk = this._th(Xk)), Fk.triangle.push(Xk)
          }
        return Fk
      }
    }
    class Zb {
      constructor(kk) {
        this._m = new rb(kk)
      }
      withColor(kk, Fk) {
        this._m.base = this._m.base ?? [];
        let Bk = this._m.base.find((Fk => Fk.name.toLowerCase() === kk.toLowerCase()));
        return Bk ? (Bk.displaycolor = this._rgbaToHex(Fk), this) : (Bk = new Db(kk, this._rgbaToHex(Fk)), this._m.base.push(Bk), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(kk) {
        const Fk = kk => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(kk, 1 / 2.2)))),
          Bk = Fk(kk.r).toString(16).padStart(2, "0").toUpperCase(),
          Rk = Fk(kk.g).toString(16).padStart(2, "0").toUpperCase(),
          tk = Fk(kk.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof kk.a) {
          return `#${Bk}${Rk}${tk}${Math.round(Math.min(255,Math.max(0,255*kk.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${Bk}${Rk}${tk}`
      }
    }
    class pb {
      constructor() {
        this._model = new Ob, this._objects = new Map
      }
      withMetaData(kk, Fk, Bk, Rk) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Eb(kk, Fk, Bk, Rk)), this
      }
      withMaterial(kk) {
        return kk instanceof Zb && (kk = kk.build()), kk && (this._model.resources = this._model.resources ?? new Nb, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(kk)), this
      }
      withMesh(kk) {
        return kk instanceof Cb && (kk = kk.build()), this._model.resources = this._model.resources ?? new Nb, this._model.resources.object.push(kk), this
      }
      withComponents(kk) {
        return kk instanceof qb && (kk = kk.build()), this._model.resources = this._model.resources ?? new Nb, this._model.resources.object.push(kk), this
      }
      withBuild(kk, Fk, Bk) {
        return this._model.build = this._model.build ?? new zb, this._model.build.item?.push(new Pb(kk, Fk, Bk)), this
      }
      withUnit(kk) {
        return this._model.unit = kk, this
      }
      reset() {
        return this._model = new Ob, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    pb.KnownMetaSet = new Set(Ob.KnownMeta.map((kk => kk.toLowerCase())));
    class Kb {
      withContentType(kk) {
        this._cts || (this._cts = new mb);
        const Fk = this._cts.items;
        return Fk.some((Fk => Fk.ext === kk.ext && Fk.ct === kk.ct)) || Fk.push(kk), this
      }
      withRelationship(kk) {
        this._rs || (this._rs = new vb);
        const Fk = this._rs.items;
        return Fk.some((Fk => Fk.id === kk.id)) || Fk.push(kk), this.withContentType(new Wb("rels", sb.Relationships)), this
      }
      withModel(kk) {
        return kk instanceof pb && (kk = kk.build()), this._m = kk, this.withContentType(new Wb("model", sb.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const kk = `${Jb}${Ab}`;
        if (!this._rs) {
          const Fk = `/${kk}`;
          this.withRelationship(new ib("rel0", fb.ThreeDimModel, Fk))
        }
        return new Yb(this._cts, this._rs, this._m)
      }
    }
    class xb {
      constructor(kk) {
        this._o = kk
      }
      get options() {
        return this._o
      }
      async serializeAsync(kk) {
        const Fk = await this.ensureZipLibReadyAsync();
        if (!Fk) return;
        const Bk = Fk.Zip,
          Rk = Fk.ZipDeflate;
        if (!Bk || !Rk) throw new Error("fflate Zip / ZipDeflate not available");
        const tk = function(kk, Fk, Bk) {
          const tk = new Rk(Fk, {
            level: 6
          });
          kk.add(tk);
          const ak = function(kk) {
              return {
                push: (Fk, Bk) => kk.push(Fk, Bk)
              }
            }(tk),
            Xk = new Rb(ak),
            bk = new Fb(Xk).dec("1.0", "UTF-8");
          new IX(bk).serialize(Bk), Xk.finish()
        };
        for (var ak = arguments.length, Xk = new Array(ak > 1 ? ak - 1 : 0), bk = 1; bk < ak; bk++) Xk[bk - 1] = arguments[bk];
        const wk = this.toDocument(...Xk);
        if (!wk) return;
        const dk = new Bk(kk);
        tk(dk, yb, wk.contentTypes), tk(dk, `${Vb}${eb}`, wk.relationships), tk(dk, `${Jb}${Ab}`, wk.model), dk.end()
      }
      toDocument() {
        const kk = (new pb).withUnit(this._o?.unit ?? Xb.millimeter);
        if (this.options.metadata)
          for (const tk in this.options.metadata) kk.withMetaData(tk, this.options.metadata[tk]);
        for (var Fk = arguments.length, Bk = new Array(Fk), Rk = 0; Rk < Fk; Rk++) Bk[Rk] = arguments[Rk];
        return (new Kb).withModel(this.toModel(kk, ...Bk)).build()
      }
    }
    class jb {
      static async SerializeToMemoryAsync(kk) {
        const Fk = new Array;
        let Bk = 0;
        for (var Rk = arguments.length, tk = new Array(Rk > 1 ? Rk - 1 : 0), ak = 1; ak < Rk; ak++) tk[ak - 1] = arguments[ak];
        if (await kk.serializeAsync((function(kk, Rk, tk) {
            Fk.push(Rk), Bk += Rk.length
          }), ...tk), !Bk) return;
        const Xk = new Uint8Array(Bk);
        let bk = 0;
        for (const wk of Fk) Xk.set(wk, bk), bk += wk.length;
        return Xk
      }
    }
    class lb {}
    lb.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class nb {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = kk, this._to = Fk, this._step = Bk, this._i = kk
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
    class Ib extends xb {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Ib.DefaultOptions,
          ...kk
        })
      }
      toModel(kk) {
        for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
        Bk = Bk.filter((kk => kk instanceof sR.d || kk instanceof Ak.b));
        const tk = new nb,
          ak = kk,
          Xk = new Map,
          bk = this.options.exportInstances ? [] : null;
        for (let wk = 0; wk < Bk.length; wk++) {
          const kk = Bk[wk];
          if (kk instanceof Ak.b) {
            bk?.push(kk);
            continue
          }
          const Fk = kk.name || `mesh${wk}`,
            Rk = kk.getWorldMatrix(),
            dk = this._handleBabylonTo3mfMatrixTransformToRef(Rk, ob.Zero()),
            sk = kk.AY;
          if (void 0 === sk) continue;
          const Vk = 1 == sk.length;
          for (let Bk = 0; Bk < sk.length; Bk++) {
            const Rk = sk[Bk],
              bk = this._extractSubMesh(kk, Rk);
            if (bk) {
              const kk = Vk ? `${Fk}` : `${Fk}_${Bk}`,
                wk = new Cb(tk.next()).withData(bk).withName(kk).build();
              ak.withMesh(wk), ak.withBuild(wk.id, dk), Xk.set(Rk, wk)
            }
          }
        }
        if (bk && bk.length) {
          const kk = this._groupBy(bk, (kk => kk.rRk));
          for (const [Fk, Bk] of Array.from(kk.entries()))
            if (Bk && Bk.length)
              for (let kk = 0; kk < Bk.length; kk++) {
                const Rk = Bk[kk].getWorldMatrix(),
                  tk = Fk.AY;
                for (let kk = 0; kk < tk.length; kk++) {
                  const Fk = tk[kk],
                    Bk = Xk.get(Fk);
                  Bk && ak.withBuild(Bk.id, this._handleBabylonTo3mfMatrixTransformToRef(Rk, ob.Zero()))
                }
              }
        }
        return ak.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const kk = globalThis;
          return kk.fflate || await tk.Tools.LoadScriptAsync(lb.FFLATEUrl), kk.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(kk, Fk) {
        const Bk = kk.hBk();
        if (!Bk) return;
        const Rk = kk.getVerticesData(Ib._PositionKind);
        if (!Rk) return;
        if (0 == Fk.indexStart && Fk.indexCount == Bk.length) return {
          positions: Rk,
          indices: Bk
        };
        const tk = Fk.indexStart,
          ak = new Map,
          Xk = [],
          bk = new Uint32Array(Fk.indexCount);
        for (let wk = 0; wk < Fk.indexCount; wk++) {
          const kk = Bk[tk + wk];
          let Fk = ak.get(kk);
          if (void 0 === Fk) {
            Fk = ak.size, ak.set(kk, Fk);
            const Bk = 3 * kk;
            Xk.push(Rk[Bk], Rk[Bk + 1], Rk[Bk + 2])
          }
          bk[wk] = Fk
        }
        return {
          positions: new Float32Array(Xk),
          indices: bk
        }
      }
      _groupBy(kk, Fk) {
        const Bk = new Map;
        for (const Rk of kk) {
          const kk = Fk(Rk),
            tk = Bk.get(kk);
          tk ? tk.push(Rk) : Bk.set(kk, [Rk])
        }
        return Bk
      }
      _handleBabylonTo3mfMatrixTransformToRef(kk, Fk) {
        const Bk = kk.multiplyToRef(Ib._R_BJS_TO_3MF, zk.c.Zero()).m;
        return Fk.values = [Bk[0], Bk[1], Bk[2], Bk[4], Bk[5], Bk[6], Bk[8], Bk[9], Bk[10], Bk[12], Bk[13], Bk[14]], Fk
      }
    }
    Ib.DefaultOptions = {
      unit: Xb.meter,
      exportInstances: !1
    }, Ib._PositionKind = "position", Ib._R_BJS_TO_3MF = zk.c.RotationX(Math.PI / 2).multiply(zk.c.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);