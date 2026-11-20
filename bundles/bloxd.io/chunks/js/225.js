export const id = 225;
export const ids = [225, 230];
export const modules = {
  41393: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(41333),
      MT = cT(39615);
    let KT = !1;

    function OT() {
      KT || (KT = !0, MT.c.prototype._sphericalPolynomialTargetSize = 0, MT.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(MT.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = lT.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((TT => {
              this._texture._sphericalPolynomial = TT, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(TT) {
          this._texture && (this._texture._sphericalPolynomial = TT)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  37086: (TT, kT, cT) => {
    cT.d(kT, {
      Color3: () => lT.c,
      e: () => lT.g
    });
    var lT = cT(37093);
    (0, lT.j)()
  },
  37632: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    var lT = cT(37637);
    class MT {
      static GetPlanes(TT) {
        const kT = [];
        for (let cT = 0; cT < 6; cT++) kT.push(new lT.e(0, 0, 0, 0));
        return MT.GetPlanesToRef(TT, kT), kT
      }
      static GetNearPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[2], kT.normal.y = cT[7] + cT[6], kT.normal.z = cT[11] + cT[10], kT.d = cT[15] + cT[14], kT.normalize()
      }
      static GetFarPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[2], kT.normal.y = cT[7] - cT[6], kT.normal.z = cT[11] - cT[10], kT.d = cT[15] - cT[14], kT.normalize()
      }
      static GetLeftPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[0], kT.normal.y = cT[7] + cT[4], kT.normal.z = cT[11] + cT[8], kT.d = cT[15] + cT[12], kT.normalize()
      }
      static GetRightPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[0], kT.normal.y = cT[7] - cT[4], kT.normal.z = cT[11] - cT[8], kT.d = cT[15] - cT[12], kT.normalize()
      }
      static GetTopPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[1], kT.normal.y = cT[7] - cT[5], kT.normal.z = cT[11] - cT[9], kT.d = cT[15] - cT[13], kT.normalize()
      }
      static GetBottomPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[1], kT.normal.y = cT[7] + cT[5], kT.normal.z = cT[11] + cT[9], kT.d = cT[15] + cT[13], kT.normalize()
      }
      static GetPlanesToRef(TT, kT) {
        MT.GetNearPlaneToRef(TT, kT[0]), MT.GetFarPlaneToRef(TT, kT[1]), MT.GetLeftPlaneToRef(TT, kT[2]), MT.GetRightPlaneToRef(TT, kT[3]), MT.GetTopPlaneToRef(TT, kT[4]), MT.GetBottomPlaneToRef(TT, kT[5])
      }
      static IsPointInFrustum(TT, kT) {
        for (let cT = 0; cT < 6; cT++)
          if (kT[cT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  37637: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT
    });
    var lT = cT(36892);
    class MT {
      constructor(TT, kT, cT, MT) {
        this.normal = new lT.m(TT, kT, cT), this.d = MT
      }
      acT() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new MT(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let TT = this.normal.getHashCode();
        return TT = 397 * TT ^ this.d, TT
      }
      normalize() {
        const TT = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let kT = 0;
        return 0 !== TT && (kT = 1 / TT), this.normal.x *= kT, this.normal.y *= kT, this.normal.z *= kT, this.d *= kT, this
      }
      transform(TT) {
        const kT = MT._TmpMatrix;
        TT.invertToRef(kT);
        const cT = kT.m,
          lT = this.normal.x,
          KT = this.normal.y,
          OT = this.normal.z,
          yT = this.d,
          fT = lT * cT[0] + KT * cT[1] + OT * cT[2] + yT * cT[3],
          xT = lT * cT[4] + KT * cT[5] + OT * cT[6] + yT * cT[7],
          IT = lT * cT[8] + KT * cT[9] + OT * cT[10] + yT * cT[11],
          AT = lT * cT[12] + KT * cT[13] + OT * cT[14] + yT * cT[15];
        return new MT(fT, xT, IT, AT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, kT, cT) {
        const lT = kT.x - TT.x,
          MT = kT.y - TT.y,
          KT = kT.z - TT.z,
          OT = cT.x - TT.x,
          yT = cT.y - TT.y,
          fT = cT.z - TT.z,
          xT = MT * fT - KT * yT,
          IT = KT * OT - lT * fT,
          AT = lT * yT - MT * OT,
          CT = Math.sqrt(xT * xT + IT * IT + AT * AT);
        let jT;
        return jT = 0 !== CT ? 1 / CT : 0, this.normal.x = xT * jT, this.normal.y = IT * jT, this.normal.z = AT * jT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, kT) {
        return lT.m.Dot(this.normal, TT) <= kT
      }
      signedDistanceTo(TT) {
        return lT.m.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new MT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, kT, cT) {
        const lT = new MT(0, 0, 0, 0);
        return lT.copyFromPoints(TT, kT, cT), lT
      }
      static FromPositionAndNormal(TT, kT) {
        const cT = new MT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, kT, cT)
      }
      static FromPositionAndNormalToRef(TT, kT, cT) {
        return cT.normal.UkT(kT), cT.normal.normalize(), cT.d = -TT.dot(cT.normal), cT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, kT, cT) {
        const MT = -(kT.x * TT.x + kT.y * TT.y + kT.z * TT.z);
        return lT.m.Dot(cT, kT) + MT
      }
    }
    MT._TmpMatrix = lT.d.Identity()
  },
  36885: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      Matrix: () => lT.d,
      Quaternion: () => lT.f,
      RegisterMathVector: () => lT.g,
      TmpVectors: () => lT.h,
      Vector2: () => lT.i,
      Fv: () => lT.m,
      Vector4: () => lT.o
    });
    var lT = cT(36892);
    (0, lT.g)()
  },
  37939: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      constructor(TT, kT, cT, lT) {
        this.x = TT, this.y = kT, this.width = cT, this.height = lT
      }
      toGlobal(TT, kT) {
        return new lT(this.x * TT, this.y * kT, this.width * TT, this.height * kT)
      }
      toGlobalToRef(TT, kT, cT) {
        return cT.x = this.x * TT, cT.y = this.y * kT, cT.width = this.width * TT, cT.height = this.height * kT, this
      }
      clone() {
        return new lT(this.x, this.y, this.width, this.height)
      }
    }
  },
  41333: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => xT
    });
    var lT = cT(36892),
      MT = cT(36937),
      KT = cT(39607),
      OT = cT(36901),
      yT = cT(37093);
    class fT {
      constructor(TT, kT, cT, lT) {
        this.name = TT, this.worldAxisForNormal = kT, this.worldAxisForFileX = cT, this.worldAxisForFileY = lT
      }
    }
    class xT {
      static _NearestPow2Floor(TT) {
        return TT <= 1 ? 1 : 1 << Math.floor(Math.log2(TT))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(TT) {
        if (!TT.isCube) return null;
        TT.NJ()?.Dv().flushFramebuffer();
        const kT = TT.getSize().width,
          cT = TT._sphericalPolynomialTargetSize,
          lT = cT > 0 ? this._NearestPow2Floor(cT) : 0,
          MT = !TT.noMipmap && !0 === TT._texture?.generateMipMaps,
          KT = lT > 0 && lT < kT && MT,
          OT = KT ? Math.max(0, Math.round(Math.log2(kT / lT))) : 0,
          yT = KT ? Math.max(1, Math.floor(kT / Math.pow(2, OT))) : kT,
          fT = TT.readPixels(0, OT, void 0, !1),
          xT = TT.readPixels(1, OT, void 0, !1);
        let IT, AT;
        TT.isRenderTarget ? (IT = TT.readPixels(3, OT, void 0, !1), AT = TT.readPixels(2, OT, void 0, !1)) : (IT = TT.readPixels(2, OT, void 0, !1), AT = TT.readPixels(3, OT, void 0, !1));
        const CT = TT.readPixels(4, OT, void 0, !1),
          jT = TT.readPixels(5, OT, void 0, !1),
          vT = TT.gammaSpace,
          tT = lT > 0 && lT < kT && !KT;
        return new Promise((TT => {
          Promise.all([xT, fT, IT, AT, CT, jT]).then((cT => {
            let [MT, KT, OT, fT, xT, IT] = cT, AT = yT;
            if (tT) {
              const TT = 4;
              MT = this._DownsampleFace(MT, kT, lT, TT), KT = this._DownsampleFace(KT, kT, lT, TT), OT = this._DownsampleFace(OT, kT, lT, TT), fT = this._DownsampleFace(fT, kT, lT, TT), xT = this._DownsampleFace(xT, kT, lT, TT), IT = this._DownsampleFace(IT, kT, lT, TT), AT = lT
            }
            const CT = {
              size: AT,
              right: KT,
              left: MT,
              up: OT,
              down: fT,
              front: xT,
              back: IT,
              format: 5,
              type: MT instanceof Float32Array ? 1 : 0,
              gammaSpace: vT
            };
            TT(this.ConvertCubeMapToSphericalPolynomial(CT))
          }))
        }))
      }
      static _AreaElement(TT, kT) {
        return Math.atan2(TT * kT, Math.sqrt(TT * TT + kT * kT + 1))
      }
      static _DownsampleFace(TT, kT, cT, lT) {
        const MT = TT instanceof Float32Array ? TT : Float32Array.from(TT),
          KT = cT * cT * lT,
          OT = new Float32Array(KT),
          yT = kT / cT,
          fT = 1 / (yT * yT);
        for (let IT = 0; IT < cT; IT++) {
          const TT = Math.floor(IT * yT),
            KT = Math.floor((IT + 1) * yT);
          for (let xT = 0; xT < cT; xT++) {
            const AT = Math.floor(xT * yT),
              CT = Math.floor((xT + 1) * yT),
              jT = (IT * cT + xT) * lT;
            for (let cT = 0; cT < lT; cT++) {
              let yT = 0;
              for (let OT = TT; OT < KT; OT++)
                for (let TT = AT; TT < CT; TT++) yT += MT[(OT * kT + TT) * lT + cT];
              OT[jT + cT] = yT * fT
            }
          }
        }
        if (TT instanceof Float32Array) return OT;
        const xT = new(0, TT.constructor)(KT);
        for (let IT = 0; IT < KT; IT++) xT[IT] = OT[IT] + .5 | 0;
        return xT
      }
      static ConvertCubeMapToSphericalPolynomial(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cT = kT > 0 ? this._NearestPow2Floor(kT) : 0;
        if (cT > 0 && TT.size > cT) {
          const kT = 5 === TT.format ? 4 : 3,
            lT = ["right", "left", "up", "down", "front", "back"],
            MT = {};
          for (const KT of lT) MT[KT] = this._DownsampleFace(TT[KT], TT.size, cT, kT);
          TT = {
            ...TT,
            ...MT,
            size: cT
          }
        }
        const lT = new KT.c;
        let fT = 0;
        const xT = 2 / TT.size,
          IT = xT,
          AT = .5 * xT,
          CT = AT - 1;
        for (let KT = 0; KT < 6; KT++) {
          const kT = this._FileFaces[KT],
            cT = TT[kT.name];
          let jT = CT;
          const vT = 5 === TT.format ? 4 : 3;
          for (let KT = 0; KT < TT.size; KT++) {
            let tT = CT;
            for (let IT = 0; IT < TT.size; IT++) {
              const CT = kT.worldAxisForFileX.scale(tT).add(kT.worldAxisForFileY.scale(jT)).add(kT.worldAxisForNormal);
              CT.normalize();
              const hT = this._AreaElement(tT - AT, jT - AT) - this._AreaElement(tT - AT, jT + AT) - this._AreaElement(tT + AT, jT - AT) + this._AreaElement(tT + AT, jT + AT);
              let NT = cT[KT * TT.size * vT + IT * vT + 0],
                QT = cT[KT * TT.size * vT + IT * vT + 1],
                ST = cT[KT * TT.size * vT + IT * vT + 2];
              isNaN(NT) && (NT = 0), isNaN(QT) && (QT = 0), isNaN(ST) && (ST = 0), 0 === TT.type && (NT /= 255, QT /= 255, ST /= 255), TT.gammaSpace && (NT = Math.pow((0, MT.Clamp)(NT), OT.g), QT = Math.pow((0, MT.Clamp)(QT), OT.g), ST = Math.pow((0, MT.Clamp)(ST), OT.g));
              const DT = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const TT = Math.max(NT, QT, ST);
                if (TT > DT) {
                  const kT = DT / TT;
                  NT *= kT, QT *= kT, ST *= kT
                }
              } else NT = (0, MT.Clamp)(NT, 0, DT), QT = (0, MT.Clamp)(QT, 0, DT), ST = (0, MT.Clamp)(ST, 0, DT);
              const aT = new yT.c(NT, QT, ST);
              lT.addLight(CT, aT, hT), fT += hT, tT += xT
            }
            jT += IT
          }
        }
        const jT = 6 * (4 * Math.PI) / 6 / fT;
        return lT.scaleInPlace(jT), lT.convertIncidentRadianceToIrradiance(), lT.convertIrradianceToLambertianRadiance(), KT.e.FromHarmonics(lT)
      }
    }
    xT._FileFaces = [new fT("right", new lT.m(1, 0, 0), new lT.m(0, 0, -1), new lT.m(0, -1, 0)), new fT("left", new lT.m(-1, 0, 0), new lT.m(0, 0, 1), new lT.m(0, -1, 0)), new fT("up", new lT.m(0, 1, 0), new lT.m(1, 0, 0), new lT.m(0, 0, 1)), new fT("down", new lT.m(0, -1, 0), new lT.m(1, 0, 0), new lT.m(0, 0, -1)), new fT("front", new lT.m(0, 0, 1), new lT.m(1, 0, 0), new lT.m(0, -1, 0)), new fT("back", new lT.m(0, 0, -1), new lT.m(-1, 0, 0), new lT.m(0, -1, 0))], xT.MAX_HDRI_VALUE = 4096, xT.PRESERVE_CLAMPED_COLORS = !1
  },
  41146: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT.f,
      g: () => lT.o
    });
    var lT = cT(39666);
    (0, lT.q)()
  },
  37760: (TT, kT, cT) => {
    function lT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const kT = 16 * Math.random() | 0;
        return ("x" === TT ? kT : 3 & kT | 8).toString(16)
      }))
    }
    cT.d(kT, {
      c: () => lT
    })
  },
  41368: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT
    });
    var lT = cT(41357),
      MT = cT(41377);
    class KT {
      static ExpandRGBDTexture(TT) {
        const kT = TT._texture;
        if (!kT || !TT.isRGBD) return;
        const MT = kT.Dv(),
          KT = MT.getCaps(),
          OT = kT.isReady;
        let yT = !1;
        KT.textureHalfFloatRender && KT.textureHalfFloatLinearFiltering ? (yT = !0, kT.type = 2) : KT.textureFloatRender && KT.textureFloatLinearFiltering && (yT = !0, kT.type = 1), yT && (kT.isReady = !1, kT._isRGBD = !1, kT.invertY = !1);
        const fT = async () => {
          const KT = MT.isWebGPU,
            OT = KT ? 1 : 0;
          kT.isReady = !1, KT ? await cT.e(333).then((() => cT(60771))) : await cT.e(315).then((() => cT(60773)));
          const yT = new lT.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, MT, !1, void 0, kT.type, void 0, null, !1, void 0, OT);
          yT.externalTextureSamplerBinding = !0;
          const fT = MT.createRenderTargetTexture(kT.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: kT.samplingMode,
            type: kT.type,
            format: 5
          });
          yT.onEffectCreatedObservable.addOnce((cT => {
            cT.executeWhenCompiled((() => {
              yT.onApply = TT => {
                TT._bindTexture("textureSampler", kT), TT.setFloat2("scale", 1, 1)
              }, TT.NJ()?.postProcessManager.directRender([yT], fT, !0), MT.restoreDefaultFramebuffer(), MT._releaseTexture(kT), yT && yT.dispose(), fT._swapAndDie(kT), kT.isReady = !0
            }))
          }))
        };
        yT && (OT ? fT() : TT.onLoadObservable.addOnce(fT))
      }
      static async EncodeTextureToRGBD(TT, kT) {
        let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return kT.Dv().isWebGPU ? await cT.e(334).then((() => cT(60793))) : await cT.e(316).then((() => cT(60788))), await (0, MT.b)("rgbdEncode", TT, kT, lT, 1, 5)
      }
    }
  },
  60548: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      AsyncLoop: () => lT.d,
      RegisterTools: () => lT.g,
      Tools: () => lT.h,
      className: () => lT.i
    });
    var lT = cT(39727);
    (0, lT.g)()
  },
  41405: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT
    });
    class lT {
      constructor(TT) {
        this._pendingActions = new Array, this._workerInfos = TT.map((TT => ({
          workerPromise: Promise.resolve(TT),
          idle: !0
        })))
      }
      dispose() {
        for (const TT of this._workerInfos) TT.workerPromise.then((TT => {
          TT.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(TT) {
        this._executeOnIdleWorker(TT) || this._pendingActions.push(TT)
      }
      _executeOnIdleWorker(TT) {
        for (const kT of this._workerInfos)
          if (kT.idle) return this._execute(kT, TT), !0;
        return !1
      }
      _execute(TT, kT) {
        TT.idle = !1, TT.workerPromise.then((cT => {
          kT(cT, (() => {
            const kT = this._pendingActions.shift();
            kT ? this._execute(TT, kT) : TT.idle = !0
          }))
        }))
      }
    }
    class MT extends lT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MT.DefaultOptions;
        super([]), this._maxWorkers = TT, this._createWorkerAsync = kT, this._options = cT
      }
      push(TT) {
        if (!this._executeOnIdleWorker(TT))
          if (this._workerInfos.length < this._maxWorkers) {
            const kT = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(kT), this._execute(kT, TT)
          } else this._pendingActions.push(TT)
      }
      _execute(TT, kT) {
        TT.timeoutId && (clearTimeout(TT.timeoutId), delete TT.timeoutId), super._execute(TT, ((cT, lT) => {
          kT(cT, (() => {
            lT(), TT.idle && (TT.timeoutId = setTimeout((() => {
              TT.workerPromise.then((TT => {
                TT.terminate()
              }));
              const kT = this._workerInfos.indexOf(TT); - 1 !== kT && this._workerInfos.splice(kT, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    MT.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60573: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      AbstractThreeMfSerializer: () => By,
      BVHExporter: () => mO,
      ContentTypeFileName: () => vy,
      DefaultXmlSerializerFormatOptions: () => RO,
      DefaultXmlSerializerNumberOptions: () => LO,
      EXT_lights_area: () => NM,
      EXT_mesh_gpu_instancing: () => Xl,
      EXT_texture_avif: () => KO,
      EXT_texture_webp: () => kO,
      GLTF2Export: () => El,
      GLTFData: () => xT,
      GetXmlFieldMeta: () => EO,
      GetXmlName: () => ZO,
      IsQualifiedName: () => bO,
      KHR_draco_mesh_compression: () => ql,
      KHR_interactivity: () => IM,
      KHR_lights_punctual: () => OM,
      KHR_materials_anisotropy: () => aM,
      KHR_materials_clearcoat: () => mM,
      KHR_materials_coat: () => eM,
      KHR_materials_diffuse_roughness: () => ZK,
      KHR_materials_diffuse_transmission: () => XM,
      KHR_materials_dispersion: () => gM,
      KHR_materials_emissive_strength: () => WM,
      KHR_materials_fuzz: () => AK,
      KHR_materials_ior: () => qM,
      KHR_materials_iridescence: () => cK,
      KHR_materials_openpbr: () => LK,
      KHR_materials_sheen: () => OK,
      KHR_materials_specular: () => tK,
      KHR_materials_transmission: () => SK,
      KHR_materials_unlit: () => PK,
      KHR_materials_volume: () => zK,
      KHR_materials_volume_scatter: () => eK,
      KHR_texture_basisu: () => iK,
      KHR_texture_transform: () => YK,
      Known3mfRelationshipTypes: () => ty,
      KnownI3mfContentType: () => xy,
      Matrix3d: () => ay,
      MatrixFormatter: () => Fy,
      ModelFileName: () => Cy,
      NumberFormatter: () => YO,
      OBJExport: () => OT,
      Object3dDirName: () => Ay,
      OpenXmlContentTypesNamespace: () => yy,
      OpenXmlRelationshipsNamespace: () => fy,
      RegisterEXT_lights_area: () => SM,
      RegisterEXT_mesh_gpu_instancing: () => Ll,
      RegisterEXT_texture_avif: () => yO,
      RegisterEXT_texture_webp: () => lO,
      RegisterKHR_draco_mesh_compression: () => TM,
      RegisterKHR_interactivity: () => CM,
      RegisterKHR_lights_punctual: () => fM,
      RegisterKHR_materials_anisotropy: () => rM,
      RegisterKHR_materials_clearcoat: () => zM,
      RegisterKHR_materials_coat: () => VM,
      RegisterKHR_materials_diffuse_roughness: () => XK,
      RegisterKHR_materials_diffuse_transmission: () => LM,
      RegisterKHR_materials_dispersion: () => YM,
      RegisterKHR_materials_emissive_strength: () => pM,
      RegisterKHR_materials_fuzz: () => jK,
      RegisterKHR_materials_ior: () => TK,
      RegisterKHR_materials_iridescence: () => MK,
      RegisterKHR_materials_openpbr: () => gK,
      RegisterKHR_materials_sheen: () => fK,
      RegisterKHR_materials_specular: () => NK,
      RegisterKHR_materials_transmission: () => aK,
      RegisterKHR_materials_unlit: () => mK,
      RegisterKHR_materials_volume: () => oK,
      RegisterKHR_materials_volume_scatter: () => VK,
      RegisterKHR_texture_basisu: () => sK,
      RegisterKHR_texture_transform: () => WK,
      RelationshipDirName: () => Iy,
      RelationshipFileName: () => jy,
      ResolveFormatOptions: () => UO,
      ResolveNumberOptions: () => gO,
      STLExport: () => fO,
      ST_ObjectType: () => Oy,
      ST_Unit: () => Ky,
      StringXmlWriter: () => ky,
      ThreeDimModelNamespace: () => ly,
      ThreeMf: () => Wy,
      ThreeMfBase: () => Zy,
      ThreeMfBaseMaterials: () => Ey,
      ThreeMfBuild: () => uy,
      ThreeMfComponent: () => Vy,
      ThreeMfComponents: () => Gy,
      ThreeMfComponentsBuilder: () => Ly,
      ThreeMfContentType: () => Ny,
      ThreeMfContentTypes: () => hy,
      ThreeMfDocument: () => Dy,
      ThreeMfDocumentBuilder: () => Yy,
      ThreeMfItem: () => Xy,
      ThreeMfMaterialBuilder: () => gy,
      ThreeMfMesh: () => zy,
      ThreeMfMeshBuilder: () => Ry,
      ThreeMfMeta: () => Py,
      ThreeMfMetadataGroup: () => wy,
      ThreeMfModel: () => ry,
      ThreeMfModelBuilder: () => Uy,
      ThreeMfObject: () => by,
      ThreeMfObjectBuilder: () => dy,
      ThreeMfRelationship: () => Sy,
      ThreeMfRelationships: () => Qy,
      ThreeMfResources: () => my,
      ThreeMfSerializer: () => iy,
      ThreeMfSerializerGlobalConfiguration: () => ny,
      ThreeMfTriangle: () => ey,
      ThreeMfTriangles: () => Hy,
      ThreeMfVertex: () => oy,
      ThreeMfVertices: () => Jy,
      ToQualifiedString: () => dO,
      TokenType: () => sO,
      TriangleSetsNamespace: () => My,
      USDZExportAsync: () => PO,
      Utf8XmlWriterToBytes: () => cy,
      XmlAttr: () => GO,
      XmlBuilder: () => Ty,
      XmlElem: () => VO,
      XmlIgnore: () => eO,
      XmlName: () => HO,
      XmlNameToParts: () => XO,
      XmlSerializer: () => iO,
      _ConvertToGLTFPBRMetallicRoughness: () => mc,
      _SolveMetallic: () => wc,
      __IGLTFExporterExtension: () => yT
    });
    var lT = cT(36885),
      MT = cT(60548),
      KT = cT(39908);
    class OT {
      static OBJ(TT, kT, cT, OT) {
        const yT = [];
        let fT = 1,
          xT = 1;
        kT && (cT || (cT = "mat"), yT.push("mtllib " + cT + ".mtl"));
        for (let IT = 0; IT < TT.length; IT++) {
          const cT = TT[IT],
            AT = cT.name || `mesh${IT}}`;
          yT.push(`o ${AT}`);
          let CT = null;
          if (OT) {
            const TT = cT.computeWorldMatrix(!0);
            CT = new lT.Matrix, TT.invertToRef(CT), cT.bakeTransformIntoVertices(TT)
          }
          if (kT) {
            const TT = cT.material;
            TT && yT.push("usemtl " + TT.id)
          }
          const jT = cT.geometry;
          if (!jT) {
            MT.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const vT = jT.getVerticesData("position"),
            tT = jT.getVerticesData("normal"),
            hT = jT.getVerticesData("uv"),
            NT = jT.FcT();
          let QT = 0,
            ST = 0;
          if (!vT || !NT) {
            MT.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const DT = TT[0].NJ().useRightHandedSystem ? 1 : -1;
          for (let TT = 0; TT < vT.length; TT += 3) yT.push("v " + vT[TT] * DT + " " + vT[TT + 1] + " " + vT[TT + 2]), QT++;
          if (null != tT)
            for (let TT = 0; TT < tT.length; TT += 3) yT.push("vn " + tT[TT] * DT + " " + tT[TT + 1] + " " + tT[TT + 2]);
          if (null != hT)
            for (let TT = 0; TT < hT.length; TT += 2) yT.push("vt " + hT[TT] + " " + hT[TT + 1]), ST++;
          const aT = ["", "", ""],
            FT = (cT.material || cT.NJ().defaultMaterial)._getEffectiveOrientation(cT),
            [rT, PT] = FT === KT.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let TT = 0; TT < NT.length; TT += 3) {
            const kT = [String(NT[TT] + fT), String(NT[TT + rT] + fT), String(NT[TT + PT] + fT)],
              cT = [String(NT[TT] + xT), String(NT[TT + rT] + xT), String(NT[TT + PT] + xT)],
              lT = kT,
              MT = null != hT ? cT : aT,
              KT = null != tT ? kT : aT;
            yT.push("f " + lT[0] + "/" + MT[0] + "/" + KT[0] + " " + lT[1] + "/" + MT[1] + "/" + KT[1] + " " + lT[2] + "/" + MT[2] + "/" + KT[2])
          }
          OT && CT && cT.bakeTransformIntoVertices(CT), fT += QT, xT += ST
        }
        return yT.join("\n")
      }
      static MTL(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const cT = [],
          lT = TT.material;
        cT.push("newmtl " + kT), cT.push("  Ns " + lT.specularPower.toFixed(4)), cT.push("  Ni 1.5000"), cT.push("  d " + lT.alpha.toFixed(4)), cT.push("  Tr 0.0000"), cT.push("  Tf 1.0000 1.0000 1.0000"), cT.push("  illum 2"), cT.push("  Ka " + lT.ambientColor.r.toFixed(4) + " " + lT.ambientColor.g.toFixed(4) + " " + lT.ambientColor.b.toFixed(4)), cT.push("  Kd " + lT.diffuseColor.r.toFixed(4) + " " + lT.diffuseColor.g.toFixed(4) + " " + lT.diffuseColor.b.toFixed(4)), cT.push("  Ks " + lT.specularColor.r.toFixed(4) + " " + lT.specularColor.g.toFixed(4) + " " + lT.specularColor.b.toFixed(4)), cT.push("  Ke " + lT.emissiveColor.r.toFixed(4) + " " + lT.emissiveColor.g.toFixed(4) + " " + lT.emissiveColor.b.toFixed(4));
        lT.ambientTexture && cT.push("  map_Ka " + lT.ambientTexture.name), lT.diffuseTexture && cT.push("  map_Kd " + lT.diffuseTexture.name), lT.specularTexture && cT.push("  map_Ks " + lT.specularTexture.name), lT.bumpTexture && cT.push("  map_bump -imfchan z " + lT.bumpTexture.name), lT.opacityTexture && cT.push("  map_d " + lT.opacityTexture.name);
        return cT.join("\n")
      }
    }
    var yT = 0,
      fT = cT(41146);
    class xT {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const TT in this.files) {
          const kT = this.files[TT],
            cT = new Blob([kT], {
              type: (0, fT.e)(TT)
            });
          MT.Tools.Download(cT, TT)
        }
      }
    }
    var IT = cT(40774),
      AT = cT(40726),
      CT = cT(41225),
      jT = cT(40734),
      vT = cT(39448),
      tT = cT(36925),
      hT = cT(37086),
      NT = cT(36937);
    const QT = NT.HighestCommonFactor,
      ST = {
        ...NT,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: QT
      };
    var DT = cT(41377),
      aT = cT(40752),
      FT = cT(41180),
      rT = cT(41188),
      PT = cT(41386);
    (0, PT.RegisterDumpTools)();
    var wT = cT(39620),
      mT = cT(39624),
      bT = cT(38512),
      zT = cT(39741),
      JT = cT(40111),
      oT = cT(41368);
    let HT = 0;
    const eT = (TT, kT, cT, lT) => {
        if (!TT[cT]) {
          const MT = TT.useDelayedTextureLoading;
          TT.useDelayedTextureLoading = !1;
          const KT = TT._blockEntityCollection;
          TT._blockEntityCollection = !1;
          const OT = JT.f.CreateFromBase64String(kT, lT + HT++, TT, !0, !1, JT.f.BILINEAR_SAMPLINGMODE);
          TT._blockEntityCollection = KT;
          const yT = TT.Dv().getLoadedTexturesCache(),
            fT = yT.indexOf(OT.getInternalTexture()); - 1 !== fT && yT.splice(fT, 1), OT.isRGBD = !0, OT.wrapU = JT.f.CLAMP_ADDRESSMODE, OT.wrapV = JT.f.CLAMP_ADDRESSMODE, TT[cT] = OT, TT.useDelayedTextureLoading = MT, oT.c.ExpandRGBDTexture(OT);
          const xT = TT.Dv().onContextRestoredObservable.add((() => {
            OT.isRGBD = !0;
            const kT = TT.onBeforeRenderObservable.add((() => {
              OT.isReady() && (TT.onBeforeRenderObservable.remove(kT), oT.c.ExpandRGBDTexture(OT))
            }))
          }));
          TT.QJ.add((() => {
            TT.Dv().onContextRestoredObservable.remove(xT)
          }))
        }
        return TT[cT]
      },
      GT = TT => eT(TT, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      VT = TT => eT(TT, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAF9UlEQVR4nGWVy64eVxGF16X27u7/HMcyuZGYAINwmTBigngBXoc34El4B0ZMGDJjFCExQUIKiRKZYBITHdvn/L1rF4P+c+yEUqmH9WmtrrWLkdB4C1/91h/9yn947D8+8CfdlBeGGAMtqwNd6K7VWAJrw9qwLtw2nDaernh6wKuHPD3S1Vs6vaPT97W9r/Wx1seKUWj7Uzz6vX79T//wF/Gbx/7rw/jsFB/39nlrX7q99LKrp5bJZXAtrqW1uJIncbNOXafBU+o0tZW28got0AJ3KACsE4OfYvmzfvDMb/+4//Td9snD9rfr9vHWnyz9361/1fpNLLde0mt5pTZ7a9pCm32SrqQTfZI3aqNXHAwvcAB4BPwnk/oMEcqX8eaz1t9cHjxs7133f5z6p2v/Ylme9eWmLbexjlhnrPBirz3WxWv30rw0L/Yi96PpDrcDcPMEfq+qvQCfsFF1blcv2js3vb2xLNd9O/XT1p8u/Vlfnvd+25bResXC6BFLj2WJpUdv7uEe0exGByPoOAC//BH+cgNqUjfkU4mOEetde+O2vf+y8br71Nva+9q/XpYXvZ97z9ardUXrra3RerQWrUU4myLk4AzYiADwJ+NRQ41i7MSNEBIcM5YR1+f21rnlXcPWtbVYW1/a7dL21mZvbK211lv01lpEtIi0MxTmFGzMAABAN6gF1CTPxI1gkXa5Z5xGPNrbfo6xB/bQubW9nXvkHtXDPfqIJd2bI+1mpZjmNK17QFuxDzhBJued8Fy0KLvcp7fpNzJuM3JE7daIWGKMqAylW0bLiHQ0e1ppTXEK8Qrwkzv8fUIua6oG553wQpRIme7lbfpBxm3GnoEMZ+wZlYGMlu6pNh1pT3nqALCEugCeAB2ohKqYk9hZd4JFS5ThDm/lB9N305nGtKfnNKZiqk23qZhySZOcYhHFewXfI54UMCBDOYlU3TMkSaYWaCtdwXu5yprOKUxrqk9FyUWXNKXiBfCNgucGboGAUBwUJzFYO3G+MCwFtdAn6K6UZZSyXCXBAUVdGCoS5IVxAcQNujAHKCiLLHJqDtWZh1GHV0Et8EYNqOABTUhglKJoyKBBgSwCBC6Ajz7Azz+GiJbwhFTkZCXnEM6EJcuHDmmlztCkBE2IkMGAAhQoSCBBvgYA0G6xN4DgLE5IU5iqZA1hJ8zDqCY2qktJHfEnZSpIk6bE++kEXwHUEBMCmBBBFzE5UzNZuyBRshlSSF0aEg6MaDHIgyFCPAqvA/YdIjTgQ3WBLNZkpWoQPnRIUljdGiIkHd9jumgeO0ESEI97cNTPJj6Z4ISOZh1JUSVLwiAs7pRp02aTypRUhwIzjvhfPCKF1wH/BTqwA5pQlnYyipgs6dDBQVncZatZaZUlsUxZYVq0jyfm8kNeBzz/Gu0ETrjABAURAoTJOVVJpDAoM3ZOc5olfmMK42CYMrRTAr6tIK6QiSA84VtIIEosslSTNYUkUxyS5aEDQ6tMmQ7YDMOmjziYx8E56oPEl8DdDgM2/BLeIJVw9CRSTClZg97ZrDl0BF6m49V0GTIZQL4CvNuxFj47w4ASmqUkAalYU+DBoIbK8hAG506aZTLonWFG0IMa1AAHXlegW9wFGuAJG97hhFkqiuCxUZyqSSWR5GCZHKxB7nSwDcZADHiACQ4eJ/Oot9+BvsaLQD2Hby9RUEEs1cUlcdKpmWKSQ2VyqAY56J0RiEEPOqHxXYv2W4yJuANWxBkBOKEGFcwyjlhMYdLJSjLJpA8FAxqMwXZRQA0wgdQ94Hcf4nqDFnQhBDcY5YJUIqSSpnxpRqone6ol+2Af7Il2MJJxnN/8lgIA8yWQUKItaBMRsGEdDIrQoYNTnGSyBqdZQSY16IEYaANOOKn/A+htXH+OdgLOiB1BBOEGCz5ejmO6JpGEeexVJTmohJNORqIlnVDyO4CvvsT2AGm0BVEHo0IMHeEooeQipzDFY5eSNcigLgwoGYlIKHF/ky9Z+xD/WrCfoQUuRCGAKBhlwIBRQvmSuykkMYHkqx7EAPK+/wdqEbWmfB0bfwAAAABJRU5ErkJggg==", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      ET = TT => eT(TT, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var ZT = cT(39720),
      uT = cT(36892),
      XT = cT(39782),
      dT = cT(39902),
      LT = cT(39980);
    class RT extends dT.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let gT = (() => {
      var TT, kT, cT, lT, MT, KT, OT, yT, fT, xT;
      let IT, AT, CT, jT, vT, tT, hT, NT, QT, ST = LT.b,
        DT = [],
        aT = [],
        FT = [],
        rT = [],
        PT = [],
        bT = [],
        zT = [],
        JT = [],
        oT = [],
        HT = [],
        eT = [],
        GT = [],
        VT = [],
        ET = [],
        ZT = [],
        uT = [],
        XT = [],
        dT = [];
      return TT = class extends ST {
        get useEnergyConservation() {
          return (0, wT.b)(this, kT, "f")
        }
        set useEnergyConservation(TT) {
          (0, wT.d)(this, kT, TT, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, wT.b)(this, cT, "f")
        }
        set useSmithVisibilityHeightCorrelated(TT) {
          (0, wT.d)(this, cT, TT, "f")
        }
        get useSphericalHarmonics() {
          return (0, wT.b)(this, lT, "f")
        }
        set useSphericalHarmonics(TT) {
          (0, wT.d)(this, lT, TT, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, wT.b)(this, MT, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(TT) {
          (0, wT.d)(this, MT, TT, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, wT.b)(this, KT, "f")
        }
        set mixIblRadianceWithIrradiance(TT) {
          (0, wT.d)(this, KT, TT, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, wT.b)(this, OT, "f")
        }
        set useLegacySpecularEnergyConservation(TT) {
          (0, wT.d)(this, OT, TT, "f")
        }
        get baseDiffuseModel() {
          return (0, wT.b)(this, yT, "f")
        }
        set baseDiffuseModel(TT) {
          (0, wT.d)(this, yT, TT, "f")
        }
        get dielectricSpecularModel() {
          return (0, wT.b)(this, fT, "f")
        }
        set dielectricSpecularModel(TT) {
          (0, wT.d)(this, fT, TT, "f")
        }
        get conductorSpecularModel() {
          return (0, wT.b)(this, xT, "f")
        }
        set conductorSpecularModel(TT) {
          (0, wT.d)(this, xT, TT, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(IT) {
          let AT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(IT, "PBRBRDF", 90, new RT, AT), this._useEnergyConservation = TT.DEFAULT_USE_ENERGY_CONSERVATION, kT.set(this, (0, wT.h)(this, DT, TT.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, wT.h)(this, aT), TT.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), cT.set(this, (0, wT.h)(this, FT, TT.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, wT.h)(this, rT), TT.DEFAULT_USE_SPHERICAL_HARMONICS), lT.set(this, (0, wT.h)(this, PT, TT.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, wT.h)(this, bT), TT.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), MT.set(this, (0, wT.h)(this, zT, TT.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, wT.h)(this, JT), TT.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), KT.set(this, (0, wT.h)(this, oT, TT.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, wT.h)(this, HT), TT.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), OT.set(this, (0, wT.h)(this, eT, TT.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, wT.h)(this, GT), TT.DEFAULT_DIFFUSE_MODEL), yT.set(this, (0, wT.h)(this, VT, TT.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, wT.h)(this, ET), TT.DEFAULT_DIELECTRIC_SPECULAR_MODEL), fT.set(this, (0, wT.h)(this, ZT, TT.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, wT.h)(this, uT), TT.DEFAULT_CONDUCTOR_SPECULAR_MODEL), xT.set(this, (0, wT.h)(this, XT, TT.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, wT.h)(this, dT), this._internalMarkAllSubMeshesAsMiscDirty = IT._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(TT) {
          TT.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, TT.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, TT.SPHERICAL_HARMONICS = this._useSphericalHarmonics, TT.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, TT.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, TT.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, TT.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, TT.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, TT.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, kT = new WeakMap, cT = new WeakMap, lT = new WeakMap, MT = new WeakMap, KT = new WeakMap, OT = new WeakMap, yT = new WeakMap, fT = new WeakMap, xT = new WeakMap, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(ST[Symbol.metadata] ?? null) : void 0;
        IT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], AT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], CT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], jT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], vT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], tT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], hT = [(0, mT.J)("baseDiffuseModel"), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], NT = [(0, mT.J)("dielectricSpecularModel"), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], QT = [(0, mT.J)("conductorSpecularModel"), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], (0, wT.e)(TT, null, IT, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: TT => "useEnergyConservation" in TT,
            get: TT => TT.useEnergyConservation,
            set: (TT, kT) => {
              TT.useEnergyConservation = kT
            }
          },
          metadata: kT
        }, DT, aT), (0, wT.e)(TT, null, AT, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSmithVisibilityHeightCorrelated" in TT,
            get: TT => TT.useSmithVisibilityHeightCorrelated,
            set: (TT, kT) => {
              TT.useSmithVisibilityHeightCorrelated = kT
            }
          },
          metadata: kT
        }, FT, rT), (0, wT.e)(TT, null, CT, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSphericalHarmonics" in TT,
            get: TT => TT.useSphericalHarmonics,
            set: (TT, kT) => {
              TT.useSphericalHarmonics = kT
            }
          },
          metadata: kT
        }, PT, bT), (0, wT.e)(TT, null, jT, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSpecularGlossinessInputEnergyConservation" in TT,
            get: TT => TT.useSpecularGlossinessInputEnergyConservation,
            set: (TT, kT) => {
              TT.useSpecularGlossinessInputEnergyConservation = kT
            }
          },
          metadata: kT
        }, zT, JT), (0, wT.e)(TT, null, vT, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: TT => "mixIblRadianceWithIrradiance" in TT,
            get: TT => TT.mixIblRadianceWithIrradiance,
            set: (TT, kT) => {
              TT.mixIblRadianceWithIrradiance = kT
            }
          },
          metadata: kT
        }, oT, HT), (0, wT.e)(TT, null, tT, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: TT => "useLegacySpecularEnergyConservation" in TT,
            get: TT => TT.useLegacySpecularEnergyConservation,
            set: (TT, kT) => {
              TT.useLegacySpecularEnergyConservation = kT
            }
          },
          metadata: kT
        }, eT, GT), (0, wT.e)(TT, null, hT, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseDiffuseModel" in TT,
            get: TT => TT.baseDiffuseModel,
            set: (TT, kT) => {
              TT.baseDiffuseModel = kT
            }
          },
          metadata: kT
        }, VT, ET), (0, wT.e)(TT, null, NT, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: TT => "dielectricSpecularModel" in TT,
            get: TT => TT.dielectricSpecularModel,
            set: (TT, kT) => {
              TT.dielectricSpecularModel = kT
            }
          },
          metadata: kT
        }, ZT, uT), (0, wT.e)(TT, null, QT, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: TT => "conductorSpecularModel" in TT,
            get: TT => TT.conductorSpecularModel,
            set: (TT, kT) => {
              TT.conductorSpecularModel = kT
            }
          },
          metadata: kT
        }, XT, dT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT.DEFAULT_USE_ENERGY_CONSERVATION = !0, TT.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, TT.DEFAULT_USE_SPHERICAL_HARMONICS = !0, TT.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, TT.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, TT.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, TT.DEFAULT_DIFFUSE_MODEL = 0, TT.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, TT.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, TT
    })();
    var UT = cT(39898),
      YT = cT(37093),
      BT = cT(39900),
      WT = cT(39746),
      nT = cT(39967),
      pT = cT(39959),
      iT = cT(39970),
      qT = cT(39943);
    class sT extends dT.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let Tk = (() => {
      var TT, kT, cT, lT, MT, KT, OT, yT, fT, xT;
      let IT, AT, CT, jT, vT, tT, hT, NT, QT, ST, DT, aT, FT, rT, PT = LT.b,
        bT = [],
        zT = [],
        JT = [],
        oT = [],
        HT = [],
        eT = [],
        GT = [],
        VT = [],
        ET = [],
        ZT = [],
        uT = [],
        XT = [],
        dT = [],
        RT = [],
        gT = [],
        UT = [],
        BT = [],
        WT = [],
        nT = [],
        iT = [],
        Tk = [],
        kk = [],
        ck = [],
        lk = [],
        Mk = [],
        Kk = [],
        Ok = [],
        yk = [];
      return TT = class extends PT {
        get isEnabled() {
          return (0, wT.b)(this, kT, "f")
        }
        set isEnabled(TT) {
          (0, wT.d)(this, kT, TT, "f")
        }
        get indexOfRefraction() {
          return (0, wT.b)(this, cT, "f")
        }
        set indexOfRefraction(TT) {
          (0, wT.d)(this, cT, TT, "f")
        }
        get texture() {
          return (0, wT.b)(this, lT, "f")
        }
        set texture(TT) {
          (0, wT.d)(this, lT, TT, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, wT.b)(this, MT, "f")
        }
        set useRoughnessFromMainTexture(TT) {
          (0, wT.d)(this, MT, TT, "f")
        }
        get textureRoughness() {
          return (0, wT.b)(this, KT, "f")
        }
        set textureRoughness(TT) {
          (0, wT.d)(this, KT, TT, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, wT.b)(this, OT, "f")
        }
        set remapF0OnInterfaceChange(TT) {
          (0, wT.d)(this, OT, TT, "f")
        }
        get bumpTexture() {
          return (0, wT.b)(this, yT, "f")
        }
        set bumpTexture(TT) {
          (0, wT.d)(this, yT, TT, "f")
        }
        get isTintEnabled() {
          return (0, wT.b)(this, fT, "f")
        }
        set isTintEnabled(TT) {
          (0, wT.d)(this, fT, TT, "f")
        }
        get tintTexture() {
          return (0, wT.b)(this, xT, "f")
        }
        set tintTexture(TT) {
          (0, wT.d)(this, xT, TT, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(IT) {
          let AT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(IT, "PBRClearCoat", 100, new sT, AT), this._isEnabled = !1, kT.set(this, (0, wT.h)(this, bT, !1)), this.intensity = ((0, wT.h)(this, zT), (0, wT.h)(this, JT, 1)), this.roughness = ((0, wT.h)(this, oT), (0, wT.h)(this, HT, 0)), this._indexOfRefraction = ((0, wT.h)(this, eT), TT._DefaultIndexOfRefraction), cT.set(this, (0, wT.h)(this, GT, TT._DefaultIndexOfRefraction)), this._texture = ((0, wT.h)(this, VT), null), lT.set(this, (0, wT.h)(this, ET, null)), this._useRoughnessFromMainTexture = ((0, wT.h)(this, ZT), !0), MT.set(this, (0, wT.h)(this, uT, !0)), this._textureRoughness = ((0, wT.h)(this, XT), null), KT.set(this, (0, wT.h)(this, dT, null)), this._remapF0OnInterfaceChange = ((0, wT.h)(this, RT), !0), OT.set(this, (0, wT.h)(this, gT, !0)), this._bumpTexture = ((0, wT.h)(this, UT), null), yT.set(this, (0, wT.h)(this, BT, null)), this._isTintEnabled = ((0, wT.h)(this, WT), !1), fT.set(this, (0, wT.h)(this, nT, !1)), this.tintColor = ((0, wT.h)(this, iT), (0, wT.h)(this, Tk, YT.c.White())), this.tintColorAtDistance = ((0, wT.h)(this, kk), (0, wT.h)(this, ck, 1)), this.tintThickness = ((0, wT.h)(this, lk), (0, wT.h)(this, Mk, 1)), this._tintTexture = ((0, wT.h)(this, Kk), null), xT.set(this, (0, wT.h)(this, Ok, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, wT.h)(this, yk), this._internalMarkAllSubMeshesAsTexturesDirty = IT._dirtyCallbacks[1]
        }
        isReadyForSubMesh(TT, kT, cT) {
          if (!this._isEnabled) return !0;
          const lT = this._material._disableBumpMap;
          if (TT._areTexturesDirty && kT.texturesEnabled) {
            if (this._texture && pT.b.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && pT.b.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (cT.getCaps().standardDerivatives && this._bumpTexture && pT.b.ClearCoatBumpTextureEnabled && !lT && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && pT.b.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(kT, cT) {
          this._isEnabled ? (kT.CLEARCOAT = !0, kT.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, kT.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, kT._areTexturesDirty && cT.texturesEnabled && (this._texture && pT.b.ClearCoatTextureEnabled ? (0, qT.V)(this._texture, kT, "CLEARCOAT_TEXTURE") : kT.CLEARCOAT_TEXTURE = !1, this._textureRoughness && pT.b.ClearCoatTextureEnabled ? (0, qT.V)(this._textureRoughness, kT, "CLEARCOAT_TEXTURE_ROUGHNESS") : kT.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && pT.b.ClearCoatBumpTextureEnabled ? (0, qT.V)(this._bumpTexture, kT, "CLEARCOAT_BUMP") : kT.CLEARCOAT_BUMP = !1, kT.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === TT._DefaultIndexOfRefraction, this._isTintEnabled ? (kT.CLEARCOAT_TINT = !0, this._tintTexture && pT.b.ClearCoatTintTextureEnabled ? ((0, qT.V)(this._tintTexture, kT, "CLEARCOAT_TINT_TEXTURE"), kT.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : kT.CLEARCOAT_TINT_TEXTURE = !1) : (kT.CLEARCOAT_TINT = !1, kT.CLEARCOAT_TINT_TEXTURE = !1))) : (kT.CLEARCOAT = !1, kT.CLEARCOAT_TEXTURE = !1, kT.CLEARCOAT_TEXTURE_ROUGHNESS = !1, kT.CLEARCOAT_BUMP = !1, kT.CLEARCOAT_TINT = !1, kT.CLEARCOAT_TINT_TEXTURE = !1, kT.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, kT.CLEARCOAT_DEFAULTIOR = !1, kT.CLEARCOAT_TEXTUREDIRECTUV = 0, kT.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, kT.CLEARCOAT_BUMPDIRECTUV = 0, kT.CLEARCOAT_REMAP_F0 = !1, kT.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, kT.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(TT, kT, cT, lT) {
          if (!this._isEnabled) return;
          const MT = lT.materialDefines,
            KT = this._material.isFrozen,
            OT = this._material._disableBumpMap,
            yT = this._material._invertNormalMapX,
            fT = this._material._invertNormalMapY;
          if (!TT.useUbo || !KT || !TT.isSync) {
            (this._texture || this._textureRoughness) && pT.b.ClearCoatTextureEnabled && (TT.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, qT.v)(this._texture, TT, "clearCoat"), this._textureRoughness && !MT.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, qT.v)(this._textureRoughness, TT, "clearCoatRoughness")), this._bumpTexture && cT.getCaps().standardDerivatives && pT.b.ClearCoatTextureEnabled && !OT && (TT.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, qT.v)(this._bumpTexture, TT, "clearCoatBump"), kT._mirroredCameraPosition ? TT.updateFloat2("vClearCoatTangentSpaceParams", yT ? 1 : -1, fT ? 1 : -1) : TT.updateFloat2("vClearCoatTangentSpaceParams", yT ? -1 : 1, fT ? -1 : 1)), this._tintTexture && pT.b.ClearCoatTintTextureEnabled && (TT.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, qT.v)(this._tintTexture, TT, "clearCoatTint")), TT.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const lT = 1 - this._indexOfRefraction,
              KT = 1 + this._indexOfRefraction,
              xT = Math.pow(-lT / KT, 2),
              IT = 1 / this._indexOfRefraction;
            TT.updateFloat4("vClearCoatRefractionParams", xT, IT, lT, KT), this._isTintEnabled && (TT.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), TT.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          kT.texturesEnabled && (this._texture && pT.b.ClearCoatTextureEnabled && TT.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !MT.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && pT.b.ClearCoatTextureEnabled && TT.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && cT.getCaps().standardDerivatives && pT.b.ClearCoatBumpTextureEnabled && !OT && TT.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && pT.b.ClearCoatTintTextureEnabled && TT.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(TT) {
          return this._texture === TT || (this._textureRoughness === TT || (this._bumpTexture === TT || this._tintTexture === TT))
        }
        getActiveTextures(TT) {
          this._texture && TT.push(this._texture), this._textureRoughness && TT.push(this._textureRoughness), this._bumpTexture && TT.push(this._bumpTexture), this._tintTexture && TT.push(this._tintTexture)
        }
        getAnimatables(TT) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && TT.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && TT.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && TT.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && TT.push(this._tintTexture)
        }
        dispose(TT) {
          TT && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(TT, kT, cT) {
          return TT.CLEARCOAT_BUMP && kT.addFallback(cT++, "CLEARCOAT_BUMP"), TT.CLEARCOAT_TINT && kT.addFallback(cT++, "CLEARCOAT_TINT"), TT.CLEARCOAT && kT.addFallback(cT++, "CLEARCOAT"), cT
        }
        getSamplers(TT) {
          TT.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, kT = new WeakMap, cT = new WeakMap, lT = new WeakMap, MT = new WeakMap, KT = new WeakMap, OT = new WeakMap, yT = new WeakMap, fT = new WeakMap, xT = new WeakMap, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(PT[Symbol.metadata] ?? null) : void 0;
        IT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], AT = [(0, mT.J)()], CT = [(0, mT.J)()], jT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], vT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], tT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], hT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], NT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], QT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], ST = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], DT = [(0, mT.m)()], aT = [(0, mT.J)()], FT = [(0, mT.J)()], rT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], (0, wT.e)(TT, null, IT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, kT) => {
              TT.isEnabled = kT
            }
          },
          metadata: kT
        }, bT, zT), (0, wT.e)(TT, null, jT, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "indexOfRefraction" in TT,
            get: TT => TT.indexOfRefraction,
            set: (TT, kT) => {
              TT.indexOfRefraction = kT
            }
          },
          metadata: kT
        }, GT, VT), (0, wT.e)(TT, null, vT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, kT) => {
              TT.texture = kT
            }
          },
          metadata: kT
        }, ET, ZT), (0, wT.e)(TT, null, tT, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRoughnessFromMainTexture" in TT,
            get: TT => TT.useRoughnessFromMainTexture,
            set: (TT, kT) => {
              TT.useRoughnessFromMainTexture = kT
            }
          },
          metadata: kT
        }, uT, XT), (0, wT.e)(TT, null, hT, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "textureRoughness" in TT,
            get: TT => TT.textureRoughness,
            set: (TT, kT) => {
              TT.textureRoughness = kT
            }
          },
          metadata: kT
        }, dT, RT), (0, wT.e)(TT, null, NT, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: TT => "remapF0OnInterfaceChange" in TT,
            get: TT => TT.remapF0OnInterfaceChange,
            set: (TT, kT) => {
              TT.remapF0OnInterfaceChange = kT
            }
          },
          metadata: kT
        }, gT, UT), (0, wT.e)(TT, null, QT, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "bumpTexture" in TT,
            get: TT => TT.bumpTexture,
            set: (TT, kT) => {
              TT.bumpTexture = kT
            }
          },
          metadata: kT
        }, BT, WT), (0, wT.e)(TT, null, ST, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isTintEnabled" in TT,
            get: TT => TT.isTintEnabled,
            set: (TT, kT) => {
              TT.isTintEnabled = kT
            }
          },
          metadata: kT
        }, nT, iT), (0, wT.e)(TT, null, rT, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintTexture" in TT,
            get: TT => TT.tintTexture,
            set: (TT, kT) => {
              TT.tintTexture = kT
            }
          },
          metadata: kT
        }, Ok, yk), (0, wT.e)(null, null, AT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, kT) => {
              TT.intensity = kT
            }
          },
          metadata: kT
        }, JT, oT), (0, wT.e)(null, null, CT, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "roughness" in TT,
            get: TT => TT.roughness,
            set: (TT, kT) => {
              TT.roughness = kT
            }
          },
          metadata: kT
        }, HT, eT), (0, wT.e)(null, null, DT, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintColor" in TT,
            get: TT => TT.tintColor,
            set: (TT, kT) => {
              TT.tintColor = kT
            }
          },
          metadata: kT
        }, Tk, kk), (0, wT.e)(null, null, aT, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintColorAtDistance" in TT,
            get: TT => TT.tintColorAtDistance,
            set: (TT, kT) => {
              TT.tintColorAtDistance = kT
            }
          },
          metadata: kT
        }, ck, lk), (0, wT.e)(null, null, FT, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintThickness" in TT,
            get: TT => TT.tintThickness,
            set: (TT, kT) => {
              TT.tintThickness = kT
            }
          },
          metadata: kT
        }, Mk, Kk), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT._DefaultIndexOfRefraction = 1.5, TT
    })();
    class kk extends dT.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let ck = (() => {
      var TT, kT, cT, lT;
      let MT, KT, OT, yT, fT, xT, IT, AT = LT.b,
        CT = [],
        jT = [],
        vT = [],
        tT = [],
        hT = [],
        NT = [],
        QT = [],
        ST = [],
        DT = [],
        aT = [],
        FT = [],
        rT = [],
        PT = [],
        bT = [];
      return TT = class extends AT {
        get isEnabled() {
          return (0, wT.b)(this, kT, "f")
        }
        set isEnabled(TT) {
          (0, wT.d)(this, kT, TT, "f")
        }
        get texture() {
          return (0, wT.b)(this, cT, "f")
        }
        set texture(TT) {
          (0, wT.d)(this, cT, TT, "f")
        }
        get thicknessTexture() {
          return (0, wT.b)(this, lT, "f")
        }
        set thicknessTexture(TT) {
          (0, wT.d)(this, lT, TT, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(MT) {
          let KT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(MT, "PBRIridescence", 110, new kk, KT), this._isEnabled = !1, kT.set(this, (0, wT.h)(this, CT, !1)), this.intensity = ((0, wT.h)(this, jT), (0, wT.h)(this, vT, 1)), this.minimumThickness = ((0, wT.h)(this, tT), (0, wT.h)(this, hT, TT._DefaultMinimumThickness)), this.maximumThickness = ((0, wT.h)(this, NT), (0, wT.h)(this, QT, TT._DefaultMaximumThickness)), this.indexOfRefraction = ((0, wT.h)(this, ST), (0, wT.h)(this, DT, TT._DefaultIndexOfRefraction)), this._texture = ((0, wT.h)(this, aT), null), cT.set(this, (0, wT.h)(this, FT, null)), this._thicknessTexture = ((0, wT.h)(this, rT), null), lT.set(this, (0, wT.h)(this, PT, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, wT.h)(this, bT), this._internalMarkAllSubMeshesAsTexturesDirty = MT._dirtyCallbacks[1]
        }
        isReadyForSubMesh(TT, kT) {
          if (!this._isEnabled) return !0;
          if (TT._areTexturesDirty && kT.texturesEnabled) {
            if (this._texture && pT.b.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && pT.b.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(TT, kT) {
          this._isEnabled ? (TT.IRIDESCENCE = !0, TT._areTexturesDirty && kT.texturesEnabled && (this._texture && pT.b.IridescenceTextureEnabled ? (0, qT.V)(this._texture, TT, "IRIDESCENCE_TEXTURE") : TT.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && pT.b.IridescenceTextureEnabled ? (0, qT.V)(this._thicknessTexture, TT, "IRIDESCENCE_THICKNESS_TEXTURE") : TT.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (TT.IRIDESCENCE = !1, TT.IRIDESCENCE_TEXTURE = !1, TT.IRIDESCENCE_THICKNESS_TEXTURE = !1, TT.IRIDESCENCE_TEXTUREDIRECTUV = 0, TT.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(TT, kT) {
          if (!this._isEnabled) return;
          const cT = this._material.isFrozen;
          TT.useUbo && cT && TT.isSync || ((this._texture || this._thicknessTexture) && pT.b.IridescenceTextureEnabled && (TT.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, qT.v)(this._texture, TT, "iridescence"), this._thicknessTexture && (0, qT.v)(this._thicknessTexture, TT, "iridescenceThickness")), TT.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), kT.texturesEnabled && (this._texture && pT.b.IridescenceTextureEnabled && TT.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && pT.b.IridescenceTextureEnabled && TT.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(TT) {
          return this._texture === TT || this._thicknessTexture === TT
        }
        getActiveTextures(TT) {
          this._texture && TT.push(this._texture), this._thicknessTexture && TT.push(this._thicknessTexture)
        }
        getAnimatables(TT) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && TT.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && TT.push(this._thicknessTexture)
        }
        dispose(TT) {
          TT && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(TT, kT, cT) {
          return TT.IRIDESCENCE && kT.addFallback(cT++, "IRIDESCENCE"), cT
        }
        getSamplers(TT) {
          TT.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, kT = new WeakMap, cT = new WeakMap, lT = new WeakMap, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(AT[Symbol.metadata] ?? null) : void 0;
        MT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], KT = [(0, mT.J)()], OT = [(0, mT.J)()], yT = [(0, mT.J)()], fT = [(0, mT.J)()], xT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], IT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], (0, wT.e)(TT, null, MT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, kT) => {
              TT.isEnabled = kT
            }
          },
          metadata: kT
        }, CT, jT), (0, wT.e)(TT, null, xT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, kT) => {
              TT.texture = kT
            }
          },
          metadata: kT
        }, FT, rT), (0, wT.e)(TT, null, IT, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "thicknessTexture" in TT,
            get: TT => TT.thicknessTexture,
            set: (TT, kT) => {
              TT.thicknessTexture = kT
            }
          },
          metadata: kT
        }, PT, bT), (0, wT.e)(null, null, KT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, kT) => {
              TT.intensity = kT
            }
          },
          metadata: kT
        }, vT, tT), (0, wT.e)(null, null, OT, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "minimumThickness" in TT,
            get: TT => TT.minimumThickness,
            set: (TT, kT) => {
              TT.minimumThickness = kT
            }
          },
          metadata: kT
        }, hT, NT), (0, wT.e)(null, null, yT, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "maximumThickness" in TT,
            get: TT => TT.maximumThickness,
            set: (TT, kT) => {
              TT.maximumThickness = kT
            }
          },
          metadata: kT
        }, QT, ST), (0, wT.e)(null, null, fT, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "indexOfRefraction" in TT,
            get: TT => TT.indexOfRefraction,
            set: (TT, kT) => {
              TT.indexOfRefraction = kT
            }
          },
          metadata: kT
        }, DT, aT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT._DefaultMinimumThickness = 100, TT._DefaultMaximumThickness = 400, TT._DefaultIndexOfRefraction = 1.3, TT
    })();
    class lk extends dT.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Mk = (() => {
      var TT, kT, cT, lT;
      let MT, KT, OT, yT, fT, xT = LT.b,
        IT = [],
        AT = [],
        CT = [],
        jT = [],
        vT = [],
        tT = [],
        hT = [],
        NT = [],
        QT = [],
        ST = [];
      return TT = class extends xT {
        get isEnabled() {
          return (0, wT.b)(this, kT, "f")
        }
        set isEnabled(TT) {
          (0, wT.d)(this, kT, TT, "f")
        }
        set angle(TT) {
          this.direction.x = Math.cos(TT), this.direction.y = Math.sin(TT)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, wT.b)(this, cT, "f")
        }
        set texture(TT) {
          (0, wT.d)(this, cT, TT, "f")
        }
        get legacy() {
          return (0, wT.b)(this, lT, "f")
        }
        set legacy(TT) {
          (0, wT.d)(this, lT, TT, "f")
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
        constructor(TT) {
          let MT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TT, "PBRAnisotropic", 110, new lk, MT), this._isEnabled = !1, kT.set(this, (0, wT.h)(this, IT, !1)), this.intensity = ((0, wT.h)(this, AT), (0, wT.h)(this, CT, 1)), this.direction = ((0, wT.h)(this, jT), (0, wT.h)(this, vT, new uT.i(1, 0))), this._texture = ((0, wT.h)(this, tT), null), cT.set(this, (0, wT.h)(this, hT, null)), this._legacy = ((0, wT.h)(this, NT), !1), lT.set(this, (0, wT.h)(this, QT, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, wT.h)(this, ST), this._internalMarkAllSubMeshesAsTexturesDirty = TT._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = TT._dirtyCallbacks[16]
        }
        isReadyForSubMesh(TT, kT) {
          return !this._isEnabled || !(TT._areTexturesDirty && kT.texturesEnabled && this._texture && pT.b.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(TT, kT, cT) {
          this._isEnabled ? (TT.ANISOTROPIC = this._isEnabled, this._isEnabled && !cT.isVerticesDataPresent(XT.l.TangentKind) && (TT._needUVs = !0, TT.MAINUV1 = !0), TT._areTexturesDirty && kT.texturesEnabled && (this._texture && pT.b.AnisotropicTextureEnabled ? (0, qT.V)(this._texture, TT, "ANISOTROPIC_TEXTURE") : TT.ANISOTROPIC_TEXTURE = !1), TT._areMiscDirty && (TT.ANISOTROPIC_LEGACY = this._legacy)) : (TT.ANISOTROPIC = !1, TT.ANISOTROPIC_TEXTURE = !1, TT.ANISOTROPIC_TEXTUREDIRECTUV = 0, TT.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(TT, kT) {
          if (!this._isEnabled) return;
          const cT = this._material.isFrozen;
          TT.useUbo && cT && TT.isSync || (this._texture && pT.b.AnisotropicTextureEnabled && (TT.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, qT.v)(this._texture, TT, "anisotropy")), TT.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), kT.texturesEnabled && this._texture && pT.b.AnisotropicTextureEnabled && TT.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(TT) {
          return this._texture === TT
        }
        getActiveTextures(TT) {
          this._texture && TT.push(this._texture)
        }
        getAnimatables(TT) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && TT.push(this._texture)
        }
        dispose(TT) {
          TT && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(TT, kT, cT) {
          return TT.ANISOTROPIC && kT.addFallback(cT++, "ANISOTROPIC"), cT
        }
        getSamplers(TT) {
          TT.push("anisotropySampler")
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
        parse(TT, kT, cT) {
          super.parse(TT, kT, cT), void 0 === TT.legacy && (this.legacy = !0)
        }
      }, kT = new WeakMap, cT = new WeakMap, lT = new WeakMap, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(xT[Symbol.metadata] ?? null) : void 0;
        MT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], KT = [(0, mT.J)()], OT = [(0, mT.C)()], yT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], fT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], (0, wT.e)(TT, null, MT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, kT) => {
              TT.isEnabled = kT
            }
          },
          metadata: kT
        }, IT, AT), (0, wT.e)(TT, null, yT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, kT) => {
              TT.texture = kT
            }
          },
          metadata: kT
        }, hT, NT), (0, wT.e)(TT, null, fT, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: TT => "legacy" in TT,
            get: TT => TT.legacy,
            set: (TT, kT) => {
              TT.legacy = kT
            }
          },
          metadata: kT
        }, QT, ST), (0, wT.e)(null, null, KT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, kT) => {
              TT.intensity = kT
            }
          },
          metadata: kT
        }, CT, jT), (0, wT.e)(null, null, OT, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: TT => "direction" in TT,
            get: TT => TT.direction,
            set: (TT, kT) => {
              TT.direction = kT
            }
          },
          metadata: kT
        }, vT, tT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT
    })();
    class Kk extends dT.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Ok = (() => {
      var TT, kT, cT, lT, MT, KT, OT, yT;
      let fT, xT, IT, AT, CT, jT, vT, tT, hT, NT = LT.b,
        QT = [],
        ST = [],
        DT = [],
        aT = [],
        FT = [],
        rT = [],
        PT = [],
        bT = [],
        zT = [],
        JT = [],
        oT = [],
        HT = [],
        eT = [],
        GT = [],
        VT = [],
        ET = [],
        ZT = [],
        uT = [];
      return TT = class extends NT {
        get isEnabled() {
          return (0, wT.b)(this, kT, "f")
        }
        set isEnabled(TT) {
          (0, wT.d)(this, kT, TT, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, wT.b)(this, cT, "f")
        }
        set linkSheenWithAlbedo(TT) {
          (0, wT.d)(this, cT, TT, "f")
        }
        get texture() {
          return (0, wT.b)(this, lT, "f")
        }
        set texture(TT) {
          (0, wT.d)(this, lT, TT, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, wT.b)(this, MT, "f")
        }
        set useRoughnessFromMainTexture(TT) {
          (0, wT.d)(this, MT, TT, "f")
        }
        get roughness() {
          return (0, wT.b)(this, KT, "f")
        }
        set roughness(TT) {
          (0, wT.d)(this, KT, TT, "f")
        }
        get textureRoughness() {
          return (0, wT.b)(this, OT, "f")
        }
        set textureRoughness(TT) {
          (0, wT.d)(this, OT, TT, "f")
        }
        get albedoScaling() {
          return (0, wT.b)(this, yT, "f")
        }
        set albedoScaling(TT) {
          (0, wT.d)(this, yT, TT, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(TT) {
          let fT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TT, "Sheen", 120, new Kk, fT), this._isEnabled = !1, kT.set(this, (0, wT.h)(this, QT, !1)), this._linkSheenWithAlbedo = ((0, wT.h)(this, ST), !1), cT.set(this, (0, wT.h)(this, DT, !1)), this.intensity = ((0, wT.h)(this, aT), (0, wT.h)(this, FT, 1)), this.color = ((0, wT.h)(this, rT), (0, wT.h)(this, PT, YT.c.White())), this._texture = ((0, wT.h)(this, bT), null), lT.set(this, (0, wT.h)(this, zT, null)), this._useRoughnessFromMainTexture = ((0, wT.h)(this, JT), !0), MT.set(this, (0, wT.h)(this, oT, !0)), this._roughness = ((0, wT.h)(this, HT), null), KT.set(this, (0, wT.h)(this, eT, null)), this._textureRoughness = ((0, wT.h)(this, GT), null), OT.set(this, (0, wT.h)(this, VT, null)), this._albedoScaling = ((0, wT.h)(this, ET), !1), yT.set(this, (0, wT.h)(this, ZT, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, wT.h)(this, uT), this._internalMarkAllSubMeshesAsTexturesDirty = TT._dirtyCallbacks[1]
        }
        isReadyForSubMesh(TT, kT) {
          if (!this._isEnabled) return !0;
          if (TT._areTexturesDirty && kT.texturesEnabled) {
            if (this._texture && pT.b.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && pT.b.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(TT, kT) {
          this._isEnabled ? (TT.SHEEN = !0, TT.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, TT.SHEEN_ROUGHNESS = null !== this._roughness, TT.SHEEN_ALBEDOSCALING = this._albedoScaling, TT.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, TT._areTexturesDirty && kT.texturesEnabled && (this._texture && pT.b.SheenTextureEnabled ? ((0, qT.V)(this._texture, TT, "SHEEN_TEXTURE"), TT.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : TT.SHEEN_TEXTURE = !1, this._textureRoughness && pT.b.SheenTextureEnabled ? (0, qT.V)(this._textureRoughness, TT, "SHEEN_TEXTURE_ROUGHNESS") : TT.SHEEN_TEXTURE_ROUGHNESS = !1)) : (TT.SHEEN = !1, TT.SHEEN_TEXTURE = !1, TT.SHEEN_TEXTURE_ROUGHNESS = !1, TT.SHEEN_LINKWITHALBEDO = !1, TT.SHEEN_ROUGHNESS = !1, TT.SHEEN_ALBEDOSCALING = !1, TT.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, TT.SHEEN_GAMMATEXTURE = !1, TT.SHEEN_TEXTUREDIRECTUV = 0, TT.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(TT, kT, cT, lT) {
          if (!this._isEnabled) return;
          const MT = lT.materialDefines,
            KT = this._material.isFrozen;
          TT.useUbo && KT && TT.isSync || ((this._texture || this._textureRoughness) && pT.b.SheenTextureEnabled && (TT.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, qT.v)(this._texture, TT, "sheen"), this._textureRoughness && !MT.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, qT.v)(this._textureRoughness, TT, "sheenRoughness")), TT.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && TT.updateFloat("vSheenRoughness", this._roughness)), kT.texturesEnabled && (this._texture && pT.b.SheenTextureEnabled && TT.setTexture("sheenSampler", this._texture), this._textureRoughness && !MT.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && pT.b.SheenTextureEnabled && TT.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(TT) {
          return this._texture === TT || this._textureRoughness === TT
        }
        getActiveTextures(TT) {
          this._texture && TT.push(this._texture), this._textureRoughness && TT.push(this._textureRoughness)
        }
        getAnimatables(TT) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && TT.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && TT.push(this._textureRoughness)
        }
        dispose(TT) {
          TT && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(TT, kT, cT) {
          return TT.SHEEN && kT.addFallback(cT++, "SHEEN"), cT
        }
        getSamplers(TT) {
          TT.push("sheenSampler", "sheenRoughnessSampler")
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
      }, kT = new WeakMap, cT = new WeakMap, lT = new WeakMap, MT = new WeakMap, KT = new WeakMap, OT = new WeakMap, yT = new WeakMap, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(NT[Symbol.metadata] ?? null) : void 0;
        fT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], xT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], IT = [(0, mT.J)()], AT = [(0, mT.m)()], CT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], jT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], vT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], tT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], hT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], (0, wT.e)(TT, null, fT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, kT) => {
              TT.isEnabled = kT
            }
          },
          metadata: kT
        }, QT, ST), (0, wT.e)(TT, null, xT, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: TT => "linkSheenWithAlbedo" in TT,
            get: TT => TT.linkSheenWithAlbedo,
            set: (TT, kT) => {
              TT.linkSheenWithAlbedo = kT
            }
          },
          metadata: kT
        }, DT, aT), (0, wT.e)(TT, null, CT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, kT) => {
              TT.texture = kT
            }
          },
          metadata: kT
        }, zT, JT), (0, wT.e)(TT, null, jT, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRoughnessFromMainTexture" in TT,
            get: TT => TT.useRoughnessFromMainTexture,
            set: (TT, kT) => {
              TT.useRoughnessFromMainTexture = kT
            }
          },
          metadata: kT
        }, oT, HT), (0, wT.e)(TT, null, vT, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "roughness" in TT,
            get: TT => TT.roughness,
            set: (TT, kT) => {
              TT.roughness = kT
            }
          },
          metadata: kT
        }, eT, GT), (0, wT.e)(TT, null, tT, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "textureRoughness" in TT,
            get: TT => TT.textureRoughness,
            set: (TT, kT) => {
              TT.textureRoughness = kT
            }
          },
          metadata: kT
        }, VT, ET), (0, wT.e)(TT, null, hT, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: TT => "albedoScaling" in TT,
            get: TT => TT.albedoScaling,
            set: (TT, kT) => {
              TT.albedoScaling = kT
            }
          },
          metadata: kT
        }, ZT, uT), (0, wT.e)(null, null, IT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, kT) => {
              TT.intensity = kT
            }
          },
          metadata: kT
        }, FT, rT), (0, wT.e)(null, null, AT, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: TT => "color" in TT,
            get: TT => TT.color,
            set: (TT, kT) => {
              TT.color = kT
            }
          },
          metadata: kT
        }, PT, bT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT
    })();
    class yk extends dT.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let fk = (() => {
      var TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT;
      let NT, QT, ST, DT, aT, FT, rT, PT, bT, zT, JT, oT, HT, eT, GT, VT, ET, ZT, XT, dT, RT, gT, UT, BT, WT, nT, iT, sT, Tk, kk, ck = LT.b,
        lk = [],
        Mk = [],
        Kk = [],
        Ok = [],
        fk = [],
        xk = [],
        Ik = [],
        Ak = [],
        Ck = [],
        jk = [],
        vk = [],
        tk = [],
        hk = [],
        Nk = [],
        Qk = [],
        Sk = [],
        Dk = [],
        ak = [],
        Fk = [],
        rk = [],
        Pk = [],
        wk = [],
        mk = [],
        bk = [],
        zk = [],
        Jk = [],
        Hk = [],
        ek = [],
        Gk = [],
        Vk = [],
        Ek = [],
        Zk = [],
        uk = [],
        Xk = [],
        dk = [],
        Lk = [],
        Rk = [],
        gk = [],
        Uk = [],
        Yk = [],
        Bk = [],
        Wk = [],
        nk = [],
        pk = [],
        ik = [],
        qk = [],
        sk = [],
        Tc = [],
        kc = [],
        cc = [],
        lc = [],
        Mc = [],
        Kc = [],
        Oc = [],
        yc = [],
        fc = [],
        xc = [],
        Ic = [],
        Ac = [],
        Cc = [];
      return TT = class extends ck {
        get isRefractionEnabled() {
          return (0, wT.b)(this, kT, "f")
        }
        set isRefractionEnabled(TT) {
          (0, wT.d)(this, kT, TT, "f")
        }
        get isTranslucencyEnabled() {
          return (0, wT.b)(this, cT, "f")
        }
        set isTranslucencyEnabled(TT) {
          (0, wT.d)(this, cT, TT, "f")
        }
        get isDispersionEnabled() {
          return (0, wT.b)(this, lT, "f")
        }
        set isDispersionEnabled(TT) {
          (0, wT.d)(this, lT, TT, "f")
        }
        get isScatteringEnabled() {
          return (0, wT.b)(this, MT, "f")
        }
        set isScatteringEnabled(TT) {
          (0, wT.d)(this, MT, TT, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(TT) {
          this._scene.enableSubSurfaceForPrePass() && TT && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(TT))
        }
        get useAlbedoToTintRefraction() {
          return (0, wT.b)(this, KT, "f")
        }
        set useAlbedoToTintRefraction(TT) {
          (0, wT.d)(this, KT, TT, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, wT.b)(this, OT, "f")
        }
        set useAlbedoToTintTranslucency(TT) {
          (0, wT.d)(this, OT, TT, "f")
        }
        get thicknessTexture() {
          return (0, wT.b)(this, yT, "f")
        }
        set thicknessTexture(TT) {
          (0, wT.d)(this, yT, TT, "f")
        }
        get refractionTexture() {
          return (0, wT.b)(this, fT, "f")
        }
        set refractionTexture(TT) {
          (0, wT.d)(this, fT, TT, "f")
        }
        get indexOfRefraction() {
          return (0, wT.b)(this, xT, "f")
        }
        set indexOfRefraction(TT) {
          (0, wT.d)(this, xT, TT, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(TT) {
          const kT = TT >= 1 ? TT : -1;
          this._volumeIndexOfRefraction !== kT && (this._volumeIndexOfRefraction = kT, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, wT.b)(this, IT, "f")
        }
        set invertRefractionY(TT) {
          (0, wT.d)(this, IT, TT, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, wT.b)(this, AT, "f")
        }
        set linkRefractionWithTransparency(TT) {
          (0, wT.d)(this, AT, TT, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, wT.b)(this, CT, "f")
        }
        set useMaskFromThicknessTexture(TT) {
          (0, wT.d)(this, CT, TT, "f")
        }
        get refractionIntensityTexture() {
          return (0, wT.b)(this, jT, "f")
        }
        set refractionIntensityTexture(TT) {
          (0, wT.d)(this, jT, TT, "f")
        }
        get translucencyIntensityTexture() {
          return (0, wT.b)(this, vT, "f")
        }
        set translucencyIntensityTexture(TT) {
          (0, wT.d)(this, vT, TT, "f")
        }
        get translucencyColorTexture() {
          return (0, wT.b)(this, tT, "f")
        }
        set translucencyColorTexture(TT) {
          (0, wT.d)(this, tT, TT, "f")
        }
        get useGltfStyleTextures() {
          return (0, wT.b)(this, hT, "f")
        }
        set useGltfStyleTextures(TT) {
          (0, wT.d)(this, hT, TT, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(TT) {
          this.legacyTranslucency = TT
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
        constructor(NT) {
          let QT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(NT, "PBRSubSurface", 130, new yk, QT), this._isRefractionEnabled = !1, kT.set(this, (0, wT.h)(this, lk, !1)), this._isTranslucencyEnabled = ((0, wT.h)(this, Mk), !1), cT.set(this, (0, wT.h)(this, Kk, !1)), this._isDispersionEnabled = ((0, wT.h)(this, Ok), !1), lT.set(this, (0, wT.h)(this, fk, !1)), this._isScatteringEnabled = ((0, wT.h)(this, xk), !1), MT.set(this, (0, wT.h)(this, Ik, !1)), this._scatteringDiffusionProfileIndex = ((0, wT.h)(this, Ak), (0, wT.h)(this, Ck, 0)), this.refractionIntensity = ((0, wT.h)(this, jk), (0, wT.h)(this, vk, 1)), this.translucencyIntensity = ((0, wT.h)(this, tk), (0, wT.h)(this, hk, 1)), this._useAlbedoToTintRefraction = ((0, wT.h)(this, Nk), !1), KT.set(this, (0, wT.h)(this, Qk, !1)), this._useAlbedoToTintTranslucency = ((0, wT.h)(this, Sk), !1), OT.set(this, (0, wT.h)(this, Dk, !1)), this._thicknessTexture = ((0, wT.h)(this, ak), null), yT.set(this, (0, wT.h)(this, Fk, null)), this._refractionTexture = ((0, wT.h)(this, rk), null), fT.set(this, (0, wT.h)(this, Pk, null)), this._indexOfRefraction = ((0, wT.h)(this, wk), 1.5), xT.set(this, (0, wT.h)(this, mk, 1.5)), this._volumeIndexOfRefraction = ((0, wT.h)(this, bk), (0, wT.h)(this, zk, -1)), this._invertRefractionY = ((0, wT.h)(this, Jk), !1), IT.set(this, (0, wT.h)(this, Hk, !1)), this._linkRefractionWithTransparency = ((0, wT.h)(this, ek), !1), AT.set(this, (0, wT.h)(this, Gk, !1)), this.minimumThickness = ((0, wT.h)(this, Vk), (0, wT.h)(this, Ek, 0)), this.maximumThickness = ((0, wT.h)(this, Zk), (0, wT.h)(this, uk, 1)), this.useThicknessAsDepth = ((0, wT.h)(this, Xk), (0, wT.h)(this, dk, !1)), this.tintColor = ((0, wT.h)(this, Lk), (0, wT.h)(this, Rk, YT.c.White())), this.tintColorAtDistance = ((0, wT.h)(this, gk), (0, wT.h)(this, Uk, 1)), this.dispersion = ((0, wT.h)(this, Yk), (0, wT.h)(this, Bk, 0)), this.diffusionDistance = ((0, wT.h)(this, Wk), (0, wT.h)(this, nk, YT.c.White())), this._useMaskFromThicknessTexture = ((0, wT.h)(this, pk), !1), CT.set(this, (0, wT.h)(this, ik, !1)), this._refractionIntensityTexture = ((0, wT.h)(this, qk), null), jT.set(this, (0, wT.h)(this, sk, null)), this._translucencyIntensityTexture = ((0, wT.h)(this, Tc), null), vT.set(this, (0, wT.h)(this, kc, null)), this.translucencyColor = ((0, wT.h)(this, cc), (0, wT.h)(this, lc, null)), this._translucencyColorTexture = ((0, wT.h)(this, Mc), null), tT.set(this, (0, wT.h)(this, Kc, null)), this._useGltfStyleTextures = ((0, wT.h)(this, Oc), !0), hT.set(this, (0, wT.h)(this, yc, !0)), this.applyAlbedoAfterSubSurface = ((0, wT.h)(this, fc), (0, wT.h)(this, xc, TT.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, wT.h)(this, Ic), (0, wT.h)(this, Ac, TT.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, wT.h)(this, Cc), this._scene = NT.NJ(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = NT._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = NT._dirtyCallbacks[32]
        }
        isReadyForSubMesh(TT, kT) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (TT._areTexturesDirty && kT.texturesEnabled) {
            if (this._thicknessTexture && pT.b.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && pT.b.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && pT.b.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && pT.b.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const TT = this._getRefractionTexture(kT);
            if (TT && pT.b.RefractionTextureEnabled && !TT.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(TT, kT) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return TT.SUBSURFACE = !1, TT.SS_DISPERSION = !1, TT.SS_TRANSLUCENCY = !1, TT.SS_SCATTERING = !1, TT.SS_REFRACTION = !1, TT.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, TT.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, TT.SS_THICKNESSANDMASK_TEXTURE = !1, TT.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, TT.SS_HAS_THICKNESS = !1, TT.SS_REFRACTIONINTENSITY_TEXTURE = !1, TT.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, TT.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, TT.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, TT.SS_REFRACTIONMAP_3D = !1, TT.SS_REFRACTIONMAP_OPPOSITEZ = !1, TT.SS_LODINREFRACTIONALPHA = !1, TT.SS_GAMMAREFRACTION = !1, TT.SS_RGBDREFRACTION = !1, TT.SS_LINEARSPECULARREFRACTION = !1, TT.SS_LINKREFRACTIONTOTRANSPARENCY = !1, TT.SS_ALBEDOFORREFRACTIONTINT = !1, TT.SS_ALBEDOFORTRANSLUCENCYTINT = !1, TT.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, TT.SS_USE_THICKNESS_AS_DEPTH = !1, TT.SS_USE_GLTF_TEXTURES = !1, TT.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, TT.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, TT.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(TT.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (TT._areTexturesDirty) {
            if (TT.SUBSURFACE = !0, TT.SS_DISPERSION = this._isDispersionEnabled, TT.SS_TRANSLUCENCY = this._isTranslucencyEnabled, TT.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, TT.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, TT.SS_SCATTERING = this._isScatteringEnabled, TT.SS_THICKNESSANDMASK_TEXTURE = !1, TT.SS_REFRACTIONINTENSITY_TEXTURE = !1, TT.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, TT.SS_HAS_THICKNESS = !1, TT.SS_USE_GLTF_TEXTURES = !1, TT.SS_REFRACTION = !1, TT.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, TT.SS_REFRACTIONMAP_3D = !1, TT.SS_GAMMAREFRACTION = !1, TT.SS_RGBDREFRACTION = !1, TT.SS_LINEARSPECULARREFRACTION = !1, TT.SS_REFRACTIONMAP_OPPOSITEZ = !1, TT.SS_LODINREFRACTIONALPHA = !1, TT.SS_LINKREFRACTIONTOTRANSPARENCY = !1, TT.SS_ALBEDOFORREFRACTIONTINT = !1, TT.SS_ALBEDOFORTRANSLUCENCYTINT = !1, TT.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, TT.SS_USE_THICKNESS_AS_DEPTH = !1, TT.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, TT.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, TT._areTexturesDirty && kT.texturesEnabled && (this._thicknessTexture && pT.b.ThicknessTextureEnabled && (0, qT.V)(this._thicknessTexture, TT, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && pT.b.RefractionIntensityTextureEnabled && (0, qT.V)(this._refractionIntensityTexture, TT, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && pT.b.TranslucencyIntensityTextureEnabled && (0, qT.V)(this._translucencyIntensityTexture, TT, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && pT.b.TranslucencyColorTextureEnabled && ((0, qT.V)(this._translucencyColorTexture, TT, "SS_TRANSLUCENCYCOLOR_TEXTURE"), TT.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), TT.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, TT.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, TT.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, TT.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && kT.texturesEnabled) {
              const cT = this._getRefractionTexture(kT);
              cT && pT.b.RefractionTextureEnabled && (TT.SS_REFRACTION = !0, TT.SS_REFRACTIONMAP_3D = cT.isCube, TT.SS_GAMMAREFRACTION = cT.gammaSpace, TT.SS_RGBDREFRACTION = cT.isRGBD, TT.SS_LINEARSPECULARREFRACTION = cT.linearSpecularLOD, TT.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && cT.isCube ? !cT.invertZ : cT.invertZ, TT.SS_LODINREFRACTIONALPHA = cT.lodLevelInAlpha, TT.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, TT.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, TT.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = cT.isCube && cT.boundingBoxSize, TT.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (TT.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(TT, kT, cT, lT) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) TT.updateFloat2("vThicknessParam", 0, 0);
            else {
              lT.getRenderingMesh().getWorldMatrix().decompose(uT.h.Fv[0]);
              const kT = Math.max(Math.abs(uT.h.Fv[0].x), Math.abs(uT.h.Fv[0].y), Math.abs(uT.h.Fv[0].z));
              TT.updateFloat2("vThicknessParam", this.minimumThickness * kT, (this.maximumThickness - this.minimumThickness) * kT)
            }
        }
        bindForSubMesh(TT, kT, cT, lT) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const MT = lT.materialDefines,
            KT = this._material.isFrozen,
            OT = this._material.realTimeFiltering,
            yT = MT.LODBASEDMICROSFURACE,
            fT = this._getRefractionTexture(kT);
          if (!TT.useUbo || !KT || !TT.isSync) {
            if (this._thicknessTexture && pT.b.ThicknessTextureEnabled && (TT.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, qT.v)(this._thicknessTexture, TT, "thickness")), this._refractionIntensityTexture && pT.b.RefractionIntensityTextureEnabled && MT.SS_REFRACTIONINTENSITY_TEXTURE && (TT.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, qT.v)(this._refractionIntensityTexture, TT, "refractionIntensity")), this._translucencyColorTexture && pT.b.TranslucencyColorTextureEnabled && MT.SS_TRANSLUCENCYCOLOR_TEXTURE && (TT.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, qT.v)(this._translucencyColorTexture, TT, "translucencyColor")), this._translucencyIntensityTexture && pT.b.TranslucencyIntensityTextureEnabled && MT.SS_TRANSLUCENCYINTENSITY_TEXTURE && (TT.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, qT.v)(this._translucencyIntensityTexture, TT, "translucencyIntensity")), fT && pT.b.RefractionTextureEnabled) {
              TT.X3("refractionMatrix", fT.getRefractionTextureMatrix());
              let kT = 1;
              fT.isCube || fT.depth && (kT = fT.depth);
              const cT = fT.getSize().width,
                lT = this.volumeIndexOfRefraction;
              if (TT.updateFloat4("vRefractionInfos", fT.level, 1 / lT, kT, this._invertRefractionY ? -1 : 1), TT.updateFloat4("vRefractionMicrosurfaceInfos", cT, fT.lodGenerationScale, fT.lodGenerationOffset, 1 / this.indexOfRefraction), OT && TT.updateFloat2("vRefractionFilteringInfo", cT, Math.log2(cT)), fT.boundingBoxSize) {
                const kT = fT;
                TT.updateVector3("vRefractionPosition", kT.boundingBoxPosition), TT.updateVector3("vRefractionSize", kT.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && TT.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), TT.updateColor3("vDiffusionDistance", this.diffusionDistance), TT.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), TT.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), TT.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), TT.updateFloat("dispersion", this.dispersion)
          }
          kT.texturesEnabled && (this._thicknessTexture && pT.b.ThicknessTextureEnabled && TT.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && pT.b.RefractionIntensityTextureEnabled && MT.SS_REFRACTIONINTENSITY_TEXTURE && TT.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && pT.b.TranslucencyIntensityTextureEnabled && MT.SS_TRANSLUCENCYINTENSITY_TEXTURE && TT.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && pT.b.TranslucencyColorTextureEnabled && MT.SS_TRANSLUCENCYCOLOR_TEXTURE && TT.setTexture("translucencyColorSampler", this._translucencyColorTexture), fT && pT.b.RefractionTextureEnabled && (yT ? TT.setTexture("refractionSampler", fT) : (TT.setTexture("refractionSampler", fT._lodTextureMid || fT), TT.setTexture("refractionSamplerLow", fT._lodTextureLow || fT), TT.setTexture("refractionSamplerHigh", fT._lodTextureHigh || fT))))
        }
        _getRefractionTexture(TT) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? TT.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(TT) {
          pT.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && TT.push(this._refractionTexture)
        }
        hasTexture(TT) {
          return this._thicknessTexture === TT || (this._refractionTexture === TT || (this._refractionIntensityTexture === TT || (this._translucencyIntensityTexture === TT || this._translucencyColorTexture === TT)))
        }
        hasRenderTargetTextures() {
          return !!(pT.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(TT) {
          this._thicknessTexture && TT.push(this._thicknessTexture), this._refractionTexture && TT.push(this._refractionTexture), this._refractionIntensityTexture && TT.push(this._refractionIntensityTexture), this._translucencyColorTexture && TT.push(this._translucencyColorTexture), this._translucencyIntensityTexture && TT.push(this._translucencyIntensityTexture)
        }
        getAnimatables(TT) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && TT.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && TT.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && TT.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && TT.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && TT.push(this._translucencyIntensityTexture)
        }
        dispose(TT) {
          TT && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(TT, kT, cT) {
          return TT.SS_SCATTERING && kT.addFallback(cT++, "SS_SCATTERING"), TT.SS_TRANSLUCENCY && kT.addFallback(cT++, "SS_TRANSLUCENCY"), cT
        }
        getSamplers(TT) {
          TT.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, kT = new WeakMap, cT = new WeakMap, lT = new WeakMap, MT = new WeakMap, KT = new WeakMap, OT = new WeakMap, yT = new WeakMap, fT = new WeakMap, xT = new WeakMap, IT = new WeakMap, AT = new WeakMap, CT = new WeakMap, jT = new WeakMap, vT = new WeakMap, tT = new WeakMap, hT = new WeakMap, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(ck[Symbol.metadata] ?? null) : void 0;
        NT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], QT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], ST = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], DT = [(0, mT.J)(), (0, mT.c)("_markScenePrePassDirty")], aT = [(0, mT.J)()], FT = [(0, mT.J)()], rT = [(0, mT.J)()], PT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], bT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], zT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], JT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], oT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], HT = [(0, mT.J)()], eT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], GT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], VT = [(0, mT.J)()], ET = [(0, mT.J)()], ZT = [(0, mT.J)()], XT = [(0, mT.m)()], dT = [(0, mT.J)()], RT = [(0, mT.J)()], gT = [(0, mT.m)()], UT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], BT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], WT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], nT = [(0, mT.m)()], iT = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], sT = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Tk = [(0, mT.J)()], kk = [(0, mT.J)()], (0, wT.e)(TT, null, NT, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isRefractionEnabled" in TT,
            get: TT => TT.isRefractionEnabled,
            set: (TT, kT) => {
              TT.isRefractionEnabled = kT
            }
          },
          metadata: kT
        }, lk, Mk), (0, wT.e)(TT, null, QT, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isTranslucencyEnabled" in TT,
            get: TT => TT.isTranslucencyEnabled,
            set: (TT, kT) => {
              TT.isTranslucencyEnabled = kT
            }
          },
          metadata: kT
        }, Kk, Ok), (0, wT.e)(TT, null, ST, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isDispersionEnabled" in TT,
            get: TT => TT.isDispersionEnabled,
            set: (TT, kT) => {
              TT.isDispersionEnabled = kT
            }
          },
          metadata: kT
        }, fk, xk), (0, wT.e)(TT, null, DT, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isScatteringEnabled" in TT,
            get: TT => TT.isScatteringEnabled,
            set: (TT, kT) => {
              TT.isScatteringEnabled = kT
            }
          },
          metadata: kT
        }, Ik, Ak), (0, wT.e)(TT, null, PT, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAlbedoToTintRefraction" in TT,
            get: TT => TT.useAlbedoToTintRefraction,
            set: (TT, kT) => {
              TT.useAlbedoToTintRefraction = kT
            }
          },
          metadata: kT
        }, Qk, Sk), (0, wT.e)(TT, null, bT, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAlbedoToTintTranslucency" in TT,
            get: TT => TT.useAlbedoToTintTranslucency,
            set: (TT, kT) => {
              TT.useAlbedoToTintTranslucency = kT
            }
          },
          metadata: kT
        }, Dk, ak), (0, wT.e)(TT, null, zT, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "thicknessTexture" in TT,
            get: TT => TT.thicknessTexture,
            set: (TT, kT) => {
              TT.thicknessTexture = kT
            }
          },
          metadata: kT
        }, Fk, rk), (0, wT.e)(TT, null, JT, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "refractionTexture" in TT,
            get: TT => TT.refractionTexture,
            set: (TT, kT) => {
              TT.refractionTexture = kT
            }
          },
          metadata: kT
        }, Pk, wk), (0, wT.e)(TT, null, oT, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "indexOfRefraction" in TT,
            get: TT => TT.indexOfRefraction,
            set: (TT, kT) => {
              TT.indexOfRefraction = kT
            }
          },
          metadata: kT
        }, mk, bk), (0, wT.e)(TT, null, eT, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: TT => "invertRefractionY" in TT,
            get: TT => TT.invertRefractionY,
            set: (TT, kT) => {
              TT.invertRefractionY = kT
            }
          },
          metadata: kT
        }, Hk, ek), (0, wT.e)(TT, null, GT, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: TT => "linkRefractionWithTransparency" in TT,
            get: TT => TT.linkRefractionWithTransparency,
            set: (TT, kT) => {
              TT.linkRefractionWithTransparency = kT
            }
          },
          metadata: kT
        }, Gk, Vk), (0, wT.e)(TT, null, UT, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useMaskFromThicknessTexture" in TT,
            get: TT => TT.useMaskFromThicknessTexture,
            set: (TT, kT) => {
              TT.useMaskFromThicknessTexture = kT
            }
          },
          metadata: kT
        }, ik, qk), (0, wT.e)(TT, null, BT, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "refractionIntensityTexture" in TT,
            get: TT => TT.refractionIntensityTexture,
            set: (TT, kT) => {
              TT.refractionIntensityTexture = kT
            }
          },
          metadata: kT
        }, sk, Tc), (0, wT.e)(TT, null, WT, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "translucencyIntensityTexture" in TT,
            get: TT => TT.translucencyIntensityTexture,
            set: (TT, kT) => {
              TT.translucencyIntensityTexture = kT
            }
          },
          metadata: kT
        }, kc, cc), (0, wT.e)(TT, null, iT, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "translucencyColorTexture" in TT,
            get: TT => TT.translucencyColorTexture,
            set: (TT, kT) => {
              TT.translucencyColorTexture = kT
            }
          },
          metadata: kT
        }, Kc, Oc), (0, wT.e)(TT, null, sT, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: TT => "useGltfStyleTextures" in TT,
            get: TT => TT.useGltfStyleTextures,
            set: (TT, kT) => {
              TT.useGltfStyleTextures = kT
            }
          },
          metadata: kT
        }, yc, fc), (0, wT.e)(null, null, aT, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: TT => "_scatteringDiffusionProfileIndex" in TT,
            get: TT => TT._scatteringDiffusionProfileIndex,
            set: (TT, kT) => {
              TT._scatteringDiffusionProfileIndex = kT
            }
          },
          metadata: kT
        }, Ck, jk), (0, wT.e)(null, null, FT, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "refractionIntensity" in TT,
            get: TT => TT.refractionIntensity,
            set: (TT, kT) => {
              TT.refractionIntensity = kT
            }
          },
          metadata: kT
        }, vk, tk), (0, wT.e)(null, null, rT, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "translucencyIntensity" in TT,
            get: TT => TT.translucencyIntensity,
            set: (TT, kT) => {
              TT.translucencyIntensity = kT
            }
          },
          metadata: kT
        }, hk, Nk), (0, wT.e)(null, null, HT, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "_volumeIndexOfRefraction" in TT,
            get: TT => TT._volumeIndexOfRefraction,
            set: (TT, kT) => {
              TT._volumeIndexOfRefraction = kT
            }
          },
          metadata: kT
        }, zk, Jk), (0, wT.e)(null, null, VT, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "minimumThickness" in TT,
            get: TT => TT.minimumThickness,
            set: (TT, kT) => {
              TT.minimumThickness = kT
            }
          },
          metadata: kT
        }, Ek, Zk), (0, wT.e)(null, null, ET, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "maximumThickness" in TT,
            get: TT => TT.maximumThickness,
            set: (TT, kT) => {
              TT.maximumThickness = kT
            }
          },
          metadata: kT
        }, uk, Xk), (0, wT.e)(null, null, ZT, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: TT => "useThicknessAsDepth" in TT,
            get: TT => TT.useThicknessAsDepth,
            set: (TT, kT) => {
              TT.useThicknessAsDepth = kT
            }
          },
          metadata: kT
        }, dk, Lk), (0, wT.e)(null, null, XT, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintColor" in TT,
            get: TT => TT.tintColor,
            set: (TT, kT) => {
              TT.tintColor = kT
            }
          },
          metadata: kT
        }, Rk, gk), (0, wT.e)(null, null, dT, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintColorAtDistance" in TT,
            get: TT => TT.tintColorAtDistance,
            set: (TT, kT) => {
              TT.tintColorAtDistance = kT
            }
          },
          metadata: kT
        }, Uk, Yk), (0, wT.e)(null, null, RT, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: TT => "dispersion" in TT,
            get: TT => TT.dispersion,
            set: (TT, kT) => {
              TT.dispersion = kT
            }
          },
          metadata: kT
        }, Bk, Wk), (0, wT.e)(null, null, gT, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "diffusionDistance" in TT,
            get: TT => TT.diffusionDistance,
            set: (TT, kT) => {
              TT.diffusionDistance = kT
            }
          },
          metadata: kT
        }, nk, pk), (0, wT.e)(null, null, nT, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "translucencyColor" in TT,
            get: TT => TT.translucencyColor,
            set: (TT, kT) => {
              TT.translucencyColor = kT
            }
          },
          metadata: kT
        }, lc, Mc), (0, wT.e)(null, null, Tk, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: TT => "applyAlbedoAfterSubSurface" in TT,
            get: TT => TT.applyAlbedoAfterSubSurface,
            set: (TT, kT) => {
              TT.applyAlbedoAfterSubSurface = kT
            }
          },
          metadata: kT
        }, xc, Ic), (0, wT.e)(null, null, kk, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: TT => "legacyTranslucency" in TT,
            get: TT => TT.legacyTranslucency,
            set: (TT, kT) => {
              TT.legacyTranslucency = kT
            }
          },
          metadata: kT
        }, Ac, Cc), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, TT.DEFAULT_LEGACY_TRANSLUCENCY = !1, TT
    })();
    var xk = cT(39975),
      Ik = cT(39951),
      Ak = cT(39985),
      Ck = cT(39989),
      jk = cT(39997),
      vk = cT(40004),
      tk = cT(40007),
      hk = cT(40014),
      Nk = cT(39500);
    const Qk = {
      effect: null,
      subMesh: null
    };
    class Sk extends((0, tk.b)((0, vk.c)(dT.e))) {}
    class Dk extends((0, BT.g)(Sk)) {
      constructor(TT) {
        super(TT), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class ak extends((0, hk.c)(nT.e)) {}
    let Fk = (() => {
      var TT, kT;
      let lT, MT = ak,
        OT = [],
        yT = [];
      return TT = class extends MT {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(TT) {
          this._realTimeFiltering = TT, this.pTT(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(TT) {
          this._realTimeFilteringQuality = TT, this.pTT(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, wT.b)(this, kT, "f")
        }
        set debugMode(TT) {
          (0, wT.d)(this, kT, TT, "f")
        }
        constructor(cT, lT) {
          super(cT, lT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || TT.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new uT.o(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = TT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = YT.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new YT.c(0, 0, 0), this._albedoColor = new YT.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new YT.c(1, 1, 1), this._reflectionColor = new YT.c(1, 1, 1), this._emissiveColor = new YT.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = TT.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new zT.g(16), this._globalAmbientColor = new YT.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, kT.set(this, (0, wT.h)(this, OT, 0)), this.debugLimit = ((0, wT.h)(this, yT), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new gT(this), this.clearCoat = new Tk(this), this.iridescence = new ck(this), this.anisotropy = new Mk(this), this.sheen = new Ok(this), this.subSurface = new fk(this), this.detailMap = new xk.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), pT.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = GT(this.NJ()), this.prePassConfiguration = new UT.c
        }
        get hasRenderTargetTextures() {
          return !!(pT.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === TT.PBRMATERIAL_OPAQUE || this._transparencyMode === TT.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === TT.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== TT.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(TT, kT, cT) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const lT = kT._drawWrapper;
          if (lT.effect && this.isFrozen && lT._wasPreviouslyReady && lT._wasPreviouslyUsingInstances === cT) return !0;
          kT.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), kT.materialDefines = new Dk(this._eventInfo.defineNames));
          const MT = kT.materialDefines;
          if (this._isReadyForSubMesh(kT)) return !0;
          const KT = this.NJ(),
            OT = KT.Dv();
          if (MT._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, KT.texturesEnabled)) {
            if (this._albedoTexture && pT.b.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && pT.b.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && pT.b.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && pT.b.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && pT.b.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const TT = this._getReflectionTexture();
            if (TT && pT.b.ReflectionTextureEnabled) {
              if (!TT.isReadyOrNotBlocking()) return !1;
              if (TT.irradianceTexture) {
                if (!TT.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!TT.sphericalPolynomial && TT.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && pT.b.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && pT.b.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (pT.b.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (OT.getCaps().standardDerivatives && this._bumpTexture && pT.b.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && pT.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = MT, this._eventInfo.subMesh = kT, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (MT._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (MT.AREALIGHTUSED || MT.CLUSTLIGHT_BATCH)
            for (let AT = 0; AT < TT.lightSources.length; AT++)
              if (!TT.lightSources[AT]._isReady()) return !1;
          if (OT.getCaps().standardDerivatives || TT.isVerticesDataPresent(XT.l.NormalKind) || (TT.createNormals(!0), bT.e.Warn("PBRMaterial: Normals have been created for the mesh: " + TT.name)), !(0, qT.d)(KT, TT, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const yT = kT.effect,
            fT = MT._areLightsDisposed,
            xT = this._prepareEffect(TT, kT.getRenderingMesh(), MT, this.onCompiled, this.onError, cT, null);
          let IT = !1;
          if (xT)
            if (this._onEffectCreatedObservable && (Qk.effect = xT, Qk.subMesh = kT, this._onEffectCreatedObservable.notifyObservers(Qk)), this.allowShaderHotSwapping && yT && !xT.isReady()) {
              if (MT.markAsUnprocessed(), IT = this.isFrozen, fT) return MT._areLightsDisposed = !0, !1
            } else KT.resetCachedMaterial(), kT.setEffect(xT, MT, this._materialContext);
          return !(!kT.effect || !kT.effect.isReady()) && (MT._renderId = KT.getRenderId(), lT._wasPreviouslyReady = !IT, lT._wasPreviouslyUsingInstances = !!cT, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(kT, cT, lT) {
          let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            OT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            yT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(kT, cT, lT, OT, yT), !lT.isDirty) return null;
          lT.markAsProcessed();
          const fT = this.NJ().Dv(),
            xT = new iT.e;
          let IT = 0;
          lT.USESPHERICALINVERTEX && xT.addFallback(IT++, "USESPHERICALINVERTEX"), lT.FOG && xT.addFallback(IT, "FOG"), lT.SPECULARAA && xT.addFallback(IT, "SPECULARAA"), lT.POINTSIZE && xT.addFallback(IT, "POINTSIZE"), lT.LOGARITHMICDEPTH && xT.addFallback(IT, "LOGARITHMICDEPTH"), lT.PARALLAX && xT.addFallback(IT, "PARALLAX"), lT.PARALLAX_RHS && xT.addFallback(IT, "PARALLAX_RHS"), lT.PARALLAXOCCLUSION && xT.addFallback(IT++, "PARALLAXOCCLUSION"), lT.ENVIRONMENTBRDF && xT.addFallback(IT++, "ENVIRONMENTBRDF"), lT.TANGENT && xT.addFallback(IT++, "TANGENT"), lT.BUMP && xT.addFallback(IT++, "BUMP"), IT = (0, qT.z)(lT, xT, this._maxSimultaneousLights, IT), lT.SPECULARTERM && xT.addFallback(IT++, "SPECULARTERM"), lT.USESPHERICALFROMREFLECTIONMAP && xT.addFallback(IT++, "USESPHERICALFROMREFLECTIONMAP"), lT.USEIRRADIANCEMAP && xT.addFallback(IT++, "USEIRRADIANCEMAP"), lT.LIGHTMAP && xT.addFallback(IT++, "LIGHTMAP"), lT.NORMAL && xT.addFallback(IT++, "NORMAL"), lT.AMBIENT && xT.addFallback(IT++, "AMBIENT"), lT.EMISSIVE && xT.addFallback(IT++, "EMISSIVE"), lT.VERTEXCOLOR && xT.addFallback(IT++, "VERTEXCOLOR"), lT.MORPHTARGETS && xT.addFallback(IT++, "MORPHTARGETS"), lT.MULTIVIEW && xT.addFallback(0, "MULTIVIEW");
          const AT = [XT.l.PositionKind];
          lT.NORMAL && AT.push(XT.l.NormalKind), lT.TANGENT && AT.push(XT.l.TangentKind);
          for (let TT = 1; TT <= 6; ++TT) lT["UV" + TT] && AT.push(`uv${1===TT?"":TT}`);
          lT.VERTEXCOLOR && AT.push(XT.l.ColorKind), (0, qT.F)(AT, kT, lT, xT), (0, qT.G)(AT, lT), (0, qT.I)(AT, kT, lT), (0, qT.D)(AT, kT, lT);
          let CT = "pbr";
          const jT = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            vT = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, qT.nb)(jT, vT, !0);
          const tT = ["Material", "Scene", "Mesh"],
            hT = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: lT.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = xT, this._eventInfo.fallbackRank = IT, this._eventInfo.defines = lT, this._eventInfo.uniforms = jT, this._eventInfo.attributes = AT, this._eventInfo.samplers = vT, this._eventInfo.uniformBuffersNames = tT, this._eventInfo.customCode = void 0, this._eventInfo.mesh = kT, this._eventInfo.indexParameters = hT, this._callbackPluginEventGeneric(128, this._eventInfo), jk.d.AddUniformsAndSamplers(jT, vT), UT.c.AddUniforms(jT), UT.c.AddSamplers(vT), (0, Ik.e)(jT), this._useVertexPulling) {
            const TT = cT?.geometry;
            TT && (this._vertexPullingMetadata = (0, Ak.f)(TT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, kT) => {
              jT.push(`vp_${kT}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          WT.c && (WT.c.PrepareUniforms(jT, lT), WT.c.PrepareSamplers(vT, lT)), (0, qT.qb)({
            uniformsNames: jT,
            uniformBuffersNames: tT,
            samplers: vT,
            defines: lT,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const NT = {};
          this.customShaderNameResolve && (CT = this.customShaderNameResolve(CT, jT, tT, vT, lT, AT, NT));
          const QT = lT.toString(),
            ST = fT.createEffect(CT, {
              attributes: AT,
              uniformsNames: jT,
              uniformBuffersNames: tT,
              samplers: vT,
              defines: QT,
              fallbacks: xT,
              onCompiled: MT,
              onError: KT,
              indexParameters: hT,
              processFinalCode: NT.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: lT.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: TT._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, fT);
          return this._eventInfo.customCode = void 0, ST
        }
        _prepareDefines(kT, cT, lT) {
          let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const OT = cT.hasThinInstances,
            yT = this.NJ(),
            fT = yT.Dv();
          (0, qT.U)(yT, kT, lT, !0, this._maxSimultaneousLights, this._disableLighting), lT._needNormals = !0, (0, qT._)(yT, lT);
          const xT = this.needAlphaBlendingForMesh(kT) && this.NJ().useOrderIndependentTransparency;
          if ((0, qT.fb)(yT, lT, this.canRenderToMRT && !xT), (0, qT.bb)(yT, lT, xT), jk.d.PrepareDefines(fT.currentRenderPassId, kT, lT), lT.METALLICWORKFLOW = this.isMetallicWorkflow(), lT._areTexturesDirty) {
            lT._needUVs = !1;
            for (let TT = 1; TT <= 6; ++TT) lT["MAINUV" + TT] = !1;
            if (yT.texturesEnabled) {
              lT.ALBEDODIRECTUV = 0, lT.BASE_WEIGHTDIRECTUV = 0, lT.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, lT.AMBIENTDIRECTUV = 0, lT.OPACITYDIRECTUV = 0, lT.EMISSIVEDIRECTUV = 0, lT.REFLECTIVITYDIRECTUV = 0, lT.MICROSURFACEMAPDIRECTUV = 0, lT.METALLIC_REFLECTANCEDIRECTUV = 0, lT.REFLECTANCEDIRECTUV = 0, lT.BUMPDIRECTUV = 0, lT.LIGHTMAPDIRECTUV = 0, fT.getCaps().textureLOD && (lT.LODBASEDMICROSFURACE = !0), this._albedoTexture && pT.b.DiffuseTextureEnabled ? ((0, qT.V)(this._albedoTexture, lT, "ALBEDO"), lT.GAMMAALBEDO = this._albedoTexture.gammaSpace) : lT.ALBEDO = !1, this._baseWeightTexture && pT.b.BaseWeightTextureEnabled ? (0, qT.V)(this._baseWeightTexture, lT, "BASE_WEIGHT") : lT.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && pT.b.BaseDiffuseRoughnessTextureEnabled ? (0, qT.V)(this._baseDiffuseRoughnessTexture, lT, "BASE_DIFFUSE_ROUGHNESS") : lT.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && pT.b.AmbientTextureEnabled ? ((0, qT.V)(this._ambientTexture, lT, "AMBIENT"), lT.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : lT.AMBIENT = !1, this._opacityTexture && pT.b.OpacityTextureEnabled ? ((0, qT.V)(this._opacityTexture, lT, "OPACITY"), lT.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : lT.OPACITY = !1;
              const TT = this._getReflectionTexture(),
                kT = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || fT.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, qT.Q)(yT, TT, lT, this.realTimeFiltering, this.realTimeFilteringQuality, !kT), this._lightmapTexture && pT.b.LightmapTextureEnabled ? ((0, qT.V)(this._lightmapTexture, lT, "LIGHTMAP"), lT.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, lT.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, lT.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : lT.LIGHTMAP = !1, this._emissiveTexture && pT.b.EmissiveTextureEnabled ? ((0, qT.V)(this._emissiveTexture, lT, "EMISSIVE"), lT.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : lT.EMISSIVE = !1, pT.b.SpecularTextureEnabled ? (this._metallicTexture ? ((0, qT.V)(this._metallicTexture, lT, "REFLECTIVITY"), lT.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, lT.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, lT.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, lT.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, lT.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, qT.V)(this._reflectivityTexture, lT, "REFLECTIVITY"), lT.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, lT.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, lT.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : lT.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (lT.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, qT.V)(this._metallicReflectanceTexture, lT, "METALLIC_REFLECTANCE"), lT.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : lT.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, qT.V)(this._reflectanceTexture, lT, "REFLECTANCE"), lT.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : lT.REFLECTANCE = !1) : (lT.METALLIC_REFLECTANCE = !1, lT.REFLECTANCE = !1), this._microSurfaceTexture ? (0, qT.V)(this._microSurfaceTexture, lT, "MICROSURFACEMAP") : lT.MICROSURFACEMAP = !1) : (lT.REFLECTIVITY = !1, lT.MICROSURFACEMAP = !1), fT.getCaps().standardDerivatives && this._bumpTexture && pT.b.BumpTextureEnabled && !this._disableBumpMap ? ((0, qT.V)(this._bumpTexture, lT, "BUMP"), this._useParallax && this._albedoTexture && pT.b.DiffuseTextureEnabled ? (lT.PARALLAX = !0, lT.PARALLAX_RHS = yT.useRightHandedSystem, lT.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : lT.PARALLAX = !1, lT.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (lT.BUMP = !1, lT.PARALLAX = !1, lT.PARALLAX_RHS = !1, lT.PARALLAXOCCLUSION = !1, lT.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && pT.b.ReflectionTextureEnabled ? (lT.ENVIRONMENTBRDF = !0, lT.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (lT.ENVIRONMENTBRDF = !1, lT.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? lT.ALPHAFROMALBEDO = !0 : lT.ALPHAFROMALBEDO = !1
            }
            lT.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === TT.LIGHTFALLOFF_STANDARD ? (lT.USEPHYSICALLIGHTFALLOFF = !1, lT.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === TT.LIGHTFALLOFF_GLTF ? (lT.USEPHYSICALLIGHTFALLOFF = !1, lT.USEGLTFLIGHTFALLOFF = !0) : (lT.USEPHYSICALLIGHTFALLOFF = !0, lT.USEGLTFLIGHTFALLOFF = !1), lT.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? lT.TWOSIDEDLIGHTING = !0 : lT.TWOSIDEDLIGHTING = !1, lT.MIRRORED = !!yT._mirroredCameraPosition, lT.SPECULARAA = fT.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(lT._areTexturesDirty || lT._areMiscDirty) && (lT.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, lT.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, lT.ALPHABLEND = this.needAlphaBlendingForMesh(kT), lT.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, lT.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), lT._areTexturesDirty && (lT.TEXTURE_REPETITION_MODE = fT.version > 1 || fT.isWebGPU ? this.textureRepetitionMode : 0), lT._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(lT), lT.FORCENORMALFORWARD = this._forceNormalForward, lT.RADIANCEOCCLUSION = this._useRadianceOcclusion, lT.HORIZONOCCLUSION = this._useHorizonOcclusion, lT._areMiscDirty && ((0, qT.X)(kT, yT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(kT), lT, this._applyDecalMapAfterDetailMap, this._useVertexPulling, cT, this._isVertexOutputInvariant), lT.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !kT.isVerticesDataPresent(XT.l.NormalKind), lT.DEBUGMODE = this._debugMode), (0, qT.O)(yT, fT, this, lT, !!MT, KT, OT), this._eventInfo.defines = lT, this._eventInfo.mesh = kT, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, qT.N)(kT, lT, !0, !0, !0, this._transparencyMode !== TT.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(TT, kT, cT) {
          const lT = {
            clipPlane: !1,
            useInstances: !1,
            ...cT
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const cT = new Dk(this._eventInfo.defineNames),
              MT = this._prepareEffect(TT, TT, cT, void 0, void 0, lT.useInstances, lT.clipPlane);
            this._onEffectCreatedObservable && (Qk.effect = MT, Qk.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Qk)), MT.isReady() ? kT && kT(this) : MT.onCompileObservable.add((() => {
              kT && kT(this)
            }))
          })()
        }
        buildUniformLayout() {
          const TT = this._uniformBuffer;
          TT.addUniform("vAlbedoInfos", 2), TT.addUniform("vBaseWeightInfos", 2), TT.addUniform("vBaseDiffuseRoughnessInfos", 2), TT.addUniform("vAmbientInfos", 4), TT.addUniform("vOpacityInfos", 2), TT.addUniform("vEmissiveInfos", 2), TT.addUniform("vLightmapInfos", 2), TT.addUniform("vReflectivityInfos", 3), TT.addUniform("vMicroSurfaceSamplerInfos", 2), TT.addUniform("vBumpInfos", 3), TT.addUniform("albedoMatrix", 16), TT.addUniform("baseWeightMatrix", 16), TT.addUniform("baseDiffuseRoughnessMatrix", 16), TT.addUniform("ambientMatrix", 16), TT.addUniform("opacityMatrix", 16), TT.addUniform("emissiveMatrix", 16), TT.addUniform("lightmapMatrix", 16), TT.addUniform("reflectivityMatrix", 16), TT.addUniform("microSurfaceSamplerMatrix", 16), TT.addUniform("bumpMatrix", 16), TT.addUniform("vTangentSpaceParams", 2), TT.addUniform("vAlbedoColor", 4), TT.addUniform("baseWeight", 1), TT.addUniform("baseDiffuseRoughness", 1), TT.addUniform("vLightingIntensity", 4), TT.addUniform("pointSize", 1), TT.addUniform("vReflectivityColor", 4), TT.addUniform("vEmissiveColor", 3), TT.addUniform("vAmbientColor", 3), TT.addUniform("vDebugMode", 2), TT.addUniform("vMetallicReflectanceFactors", 4), TT.addUniform("vMetallicReflectanceInfos", 2), TT.addUniform("metallicReflectanceMatrix", 16), TT.addUniform("vReflectanceInfos", 2), TT.addUniform("reflectanceMatrix", 16), TT.addUniform("cameraInfo", 4), TT.addUniform("vTextureRepetitionHexTilingParams", 4), (0, qT.jb)(TT, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(TT, kT, cT) {
          const lT = this.NJ(),
            MT = cT.materialDefines;
          if (!MT) return;
          const KT = cT.effect;
          if (!KT) return;
          this._activeEffect = KT, kT.getMeshUniformBuffer().bindToEffect(KT, "Mesh"), kT.transferToEffect(TT);
          const OT = lT.Dv();
          this._uniformBuffer.bindToEffect(KT, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, lT, kT, TT, this.isFrozen), jk.d.Bind(OT.currentRenderPassId, this._activeEffect, kT, TT, this);
          const yT = lT.activeCamera;
          yT ? this._uniformBuffer.updateFloat4("cameraInfo", yT.minZ, yT.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const fT = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", fT[0], fT[1], fT[2], fT[3]), this._eventInfo.subMesh = cT, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), MT.OBJECTSPACE_NORMALMAP && (TT.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const xT = this._mustRebind(lT, KT, cT, kT.visibility),
            IT = OT._features.needToAlwaysBindUniformBuffers;
          (0, qT.e)(kT, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Ak.c)(this._activeEffect, this._vertexPullingMetadata);
          let AT = null;
          const CT = this._uniformBuffer;
          if (xT) {
            if (this.bindViewProjection(KT), AT = this._getReflectionTexture(), !CT.useUbo || !this.isFrozen || !CT.isSync || cT._drawWrapper._forceRebindOnNextCall) {
              if (lT.texturesEnabled && (this._albedoTexture && pT.b.DiffuseTextureEnabled && (CT.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, qT.v)(this._albedoTexture, CT, "albedo")), this._baseWeightTexture && pT.b.BaseWeightTextureEnabled && (CT.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, qT.v)(this._baseWeightTexture, CT, "baseWeight")), this._baseDiffuseRoughnessTexture && pT.b.BaseDiffuseRoughnessTextureEnabled && (CT.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, qT.v)(this._baseDiffuseRoughnessTexture, CT, "baseDiffuseRoughness")), this._ambientTexture && pT.b.AmbientTextureEnabled && (CT.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, qT.v)(this._ambientTexture, CT, "ambient")), this._opacityTexture && pT.b.OpacityTextureEnabled && (CT.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, qT.v)(this._opacityTexture, CT, "opacity")), this._emissiveTexture && pT.b.EmissiveTextureEnabled && (CT.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, qT.v)(this._emissiveTexture, CT, "emissive")), this._lightmapTexture && pT.b.LightmapTextureEnabled && (CT.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, qT.v)(this._lightmapTexture, CT, "lightmap")), pT.b.SpecularTextureEnabled && (this._metallicTexture ? (CT.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, qT.v)(this._metallicTexture, CT, "reflectivity")) : this._reflectivityTexture && (CT.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, qT.v)(this._reflectivityTexture, CT, "reflectivity")), this._metallicReflectanceTexture && (CT.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, qT.v)(this._metallicReflectanceTexture, CT, "metallicReflectance")), this._reflectanceTexture && MT.REFLECTANCE && (CT.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, qT.v)(this._reflectanceTexture, CT, "reflectance")), this._microSurfaceTexture && (CT.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, qT.v)(this._microSurfaceTexture, CT, "microSurfaceSampler"))), this._bumpTexture && OT.getCaps().standardDerivatives && pT.b.BumpTextureEnabled && !this._disableBumpMap && (CT.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, qT.v)(this._bumpTexture, CT, "bump"), lT._mirroredCameraPosition ? CT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : CT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, qT.j)(lT, MT, CT, this._reflectionColor, AT, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && CT.updateFloat("pointSize", this.pointSize), MT.METALLICWORKFLOW) {
                YT.k.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, YT.k.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const TT = this.subSurface?._indexOfRefraction ?? 1.5,
                  kT = 1;
                YT.k.Color4[0].b = TT;
                const cT = Math.pow((TT - kT) / (TT + kT), 2);
                YT.k.Color4[0].a = cT, CT.updateDirectColor4("vReflectivityColor", YT.k.Color4[0]), CT.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else CT.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              CT.updateColor3("vEmissiveColor", pT.b.EmissiveTextureEnabled ? this._emissiveColor : YT.c.BlackReadOnly), !MT.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? CT.updateColor4("vAlbedoColor", this._albedoColor, 1) : CT.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), CT.updateFloat("baseWeight", this._baseWeight), CT.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * lT.environmentIntensity, this._lightingInfos.w = this._specularIntensity, CT.updateVector4("vLightingIntensity", this._lightingInfos), lT.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), CT.updateColor3("vAmbientColor", this._globalAmbientColor), CT.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            lT.texturesEnabled && (this._albedoTexture && pT.b.DiffuseTextureEnabled && CT.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && pT.b.BaseWeightTextureEnabled && CT.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && pT.b.BaseDiffuseRoughnessTextureEnabled && CT.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && pT.b.AmbientTextureEnabled && CT.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && pT.b.OpacityTextureEnabled && CT.setTexture("opacitySampler", this._opacityTexture), (0, qT.l)(lT, MT, CT, AT, this.realTimeFiltering), MT.ENVIRONMENTBRDF && CT.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && pT.b.EmissiveTextureEnabled && CT.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && pT.b.LightmapTextureEnabled && CT.setTexture("lightmapSampler", this._lightmapTexture), pT.b.SpecularTextureEnabled && (this._metallicTexture ? CT.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && CT.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && CT.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && MT.REFLECTANCE && CT.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && CT.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && OT.getCaps().standardDerivatives && pT.b.BumpTextureEnabled && !this._disableBumpMap && CT.setTexture("bumpSampler", this._bumpTexture)), this.NJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(kT) && this.NJ().depthPeelingRenderer.bind(KT), this._eventInfo.subMesh = cT, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Ik.g)(this._activeEffect, this, lT), this.bindEyePosition(KT)
          } else IT && (this._needToBindSceneUbo = !0);
          !xT && this.isFrozen && !IT || !lT.lightsEnabled || this._disableLighting || (0, qT.m)(lT, kT, this._activeEffect, MT, this._maxSimultaneousLights), !xT && this.isFrozen || ((lT.fogEnabled && kT.applyFog && lT.fogMode !== ZT.f.FOGMODE_NONE || AT || this.subSurface.refractionTexture || kT.receiveShadows || MT.PREPASS || MT.CLUSTLIGHT_BATCH) && this.bindView(KT), (0, qT.f)(lT, kT, this._activeEffect, !0), MT.NUM_MORPH_INFLUENCERS && (0, qT.q)(kT, this._activeEffect), MT.BAKED_VERTEX_ANIMATION_TEXTURE && kT.bakedVertexAnimationManager?.bind(KT, MT.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, qT.p)(MT, this._activeEffect, lT)), this._afterBind(kT, this._activeEffect, cT), CT.update()
        }
        getAnimatables() {
          const TT = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && TT.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && TT.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && TT.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && TT.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && TT.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && TT.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && TT.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? TT.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && TT.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && TT.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && TT.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && TT.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && TT.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && TT.push(this._microSurfaceTexture), TT
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.NJ().environmentTexture
        }
        getActiveTextures() {
          const TT = super.getActiveTextures();
          return this._albedoTexture && TT.push(this._albedoTexture), this._baseWeightTexture && TT.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && TT.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && TT.push(this._ambientTexture), this._opacityTexture && TT.push(this._opacityTexture), this._reflectionTexture && TT.push(this._reflectionTexture), this._emissiveTexture && TT.push(this._emissiveTexture), this._reflectivityTexture && TT.push(this._reflectivityTexture), this._metallicTexture && TT.push(this._metallicTexture), this._metallicReflectanceTexture && TT.push(this._metallicReflectanceTexture), this._reflectanceTexture && TT.push(this._reflectanceTexture), this._microSurfaceTexture && TT.push(this._microSurfaceTexture), this._bumpTexture && TT.push(this._bumpTexture), this._lightmapTexture && TT.push(this._lightmapTexture), TT
        }
        hasTexture(TT) {
          return !!super.hasTexture(TT) || (this._albedoTexture === TT || (this._baseWeightTexture === TT || (this._baseDiffuseRoughnessTexture === TT || (this._ambientTexture === TT || (this._opacityTexture === TT || (this._reflectionTexture === TT || (this._emissiveTexture === TT || (this._reflectivityTexture === TT || (this._metallicTexture === TT || (this._metallicReflectanceTexture === TT || (this._reflectanceTexture === TT || (this._microSurfaceTexture === TT || (this._bumpTexture === TT || this._lightmapTexture === TT)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const TT = this.NJ().enableSubSurfaceForPrePass();
          return TT && (TT.enabled = !0), !0
        }
        dispose(TT, kT) {
          this._breakShaderLoadedCheck = !0, kT && (this._environmentBRDFTexture && this.NJ().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(TT, kT)
        }
      }, kT = new WeakMap, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(MT[Symbol.metadata] ?? null) : void 0;
        lT = [(0, mT.c)("_markAllSubMeshesAsMiscDirty")], (0, wT.e)(TT, null, lT, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "debugMode" in TT,
            get: TT => TT.debugMode,
            set: (TT, kT) => {
              TT.debugMode = kT
            }
          },
          metadata: kT
        }, OT, yT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT.PBRMATERIAL_OPAQUE = KT.e.MATERIAL_OPAQUE, TT.PBRMATERIAL_ALPHATEST = KT.e.MATERIAL_ALPHATEST, TT.PBRMATERIAL_ALPHABLEND = KT.e.MATERIAL_ALPHABLEND, TT.PBRMATERIAL_ALPHATESTANDBLEND = KT.e.MATERIAL_ALPHATESTANDBLEND, TT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, TT.LIGHTFALLOFF_PHYSICAL = 0, TT.LIGHTFALLOFF_GLTF = 1, TT.LIGHTFALLOFF_STANDARD = 2, TT.ForceGLSL = !1, TT._ShaderLoader = new Ck.e((() => [Promise.all([cT.e(308), cT.e(319)]).then((() => cT(60920))), Promise.all([cT.e(313), cT.e(309), cT.e(373), cT.e(322), cT.e(372)]).then((() => cT(60937)))]), (() => [Promise.all([cT.e(327), cT.e(329), cT.e(336)]).then((() => cT(61016))), Promise.all([cT.e(327), cT.e(330), cT.e(376), cT.e(340), cT.e(375)]).then((() => cT(61040)))])), TT
    })();
    Object.getOwnPropertyDescriptor(Fk.prototype, "decalMap") || Object.defineProperty(Fk.prototype, "decalMap", (0, Nk.d)("PBRBaseMaterial", "decalMap")), (0, cT(41393).d)();
    var rk = cT(39645);
    var Pk = cT(39727),
      wk = cT(41380),
      mk = cT(39454),
      bk = cT(39463),
      zk = cT(39562);
    let Jk = !1;
    const Hk = new YT.g,
      ek = new YT.g;
    class Gk extends wk.c {
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
      set wrapU(TT) {
        if (this._textures)
          for (let kT = 0; kT < this._textures.length; kT++) this._textures[kT].wrapU = TT
      }
      set wrapV(TT) {
        if (this._textures)
          for (let kT = 0; kT < this._textures.length; kT++) this._textures[kT].wrapV = TT
      }
      constructor(TT, kT, cT, lT, MT, KT) {
        const OT = !(!MT || !MT.generateMipMaps) && MT.generateMipMaps,
          yT = !(!MT || !MT.generateDepthTexture) && MT.generateDepthTexture,
          fT = MT && MT.depthTextureFormat ? MT.depthTextureFormat : 15,
          xT = !MT || void 0 === MT.doNotChangeAspectRatio || MT.doNotChangeAspectRatio,
          IT = !(!MT || !MT.drawOnlyOnFirstAttachmentByDefault) && MT.drawOnlyOnFirstAttachmentByDefault;
        if (super(TT, kT, lT, OT, xT, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Jk || (Jk = !0, bk.ThinEngine.prototype.restoreSingleAttachment = function() {
            const TT = this._gl;
            this.bindAttachments([TT.BACK])
          }, bk.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const TT = this._gl;
            this.bindAttachments([TT.COLOR_ATTACHMENT0])
          }, bk.ThinEngine.prototype.buildTextureLayout = function(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const cT = this._gl,
              lT = [];
            if (kT) lT.push(cT.BACK);
            else
              for (let MT = 0; MT < TT.length; MT++) TT[MT] ? lT.push(cT["COLOR_ATTACHMENT" + MT]) : lT.push(cT.NONE);
            return lT
          }, bk.ThinEngine.prototype.bindAttachments = function(TT) {
            const kT = this._gl,
              cT = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, cT)
              for (let lT = 0; lT < TT.length; lT++) TT[lT] !== kT.NONE && cT[lT] && (0, zk.h)(cT[lT].format) && (this._integerMRTAttachmentsMask |= 1 << lT);
            kT.drawBuffers(TT)
          }, bk.ThinEngine.prototype.clearAttachments = function(TT, kT, cT, lT) {
            let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const OT = this._currentRenderTarget?.textures;
            let yT = !1;
            if (cT && TT && OT)
              for (let fT = 0; fT < kT.length; fT++) {
                const TT = OT[fT];
                if (kT[fT] !== this._gl.NONE && TT && (0, zk.h)(TT.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  yT = !0;
                  break
                }
              }
            if (!yT || !TT || !OT) return this.bindAttachments(kT), void this.clear(TT, cT, lT, MT, KT);
            this.bindAttachments(kT), this._applyColorWriteState();
            for (let fT = 0; fT < kT.length; fT++) {
              const cT = OT[fT];
              if (kT[fT] !== this._gl.NONE && cT) {
                let kT = TT;
                if ((0, zk.h)(cT.format)) {
                  const lT = (0, zk.j)(cT.type);
                  kT = lT ? Hk : ek;
                  const MT = lT ? 255 : 1;
                  kT.r = Math.round(TT.r * MT), kT.g = Math.round(TT.g * MT), kT.b = Math.round(TT.b * MT), kT.a = Math.round(TT.a * MT)
                }
                this._clearColorAttachment(fT, kT, cT.format, cT.type)
              }
            }
            if (lT || MT) {
              const TT = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, lT, MT, KT)
              } finally {
                this._integerMRTAttachmentsMask = TT
              }
            }
          }, bk.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              cT = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, TT.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(TT), kT || this.generateMipMapsMultiFramebuffer(TT), cT && (TT._MSAAFramebuffer && this._bindUnboundFramebuffer(TT._framebuffer), cT()), this._bindUnboundFramebuffer(null)
          }, bk.ThinEngine.prototype.createMultipleRenderTarget = function(TT, kT) {
            let cT, lT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              MT = !1,
              KT = !0,
              OT = !1,
              yT = !1,
              fT = 1,
              xT = 1,
              IT = [],
              AT = [],
              CT = [],
              jT = [],
              vT = [],
              tT = [],
              hT = [],
              NT = [],
              QT = [],
              ST = !1;
            const DT = this._createHardwareRenderTargetWrapper(!0, !1, TT);
            void 0 !== kT && (MT = void 0 !== kT.generateMipMaps && kT.generateMipMaps, KT = void 0 === kT.generateDepthBuffer || kT.generateDepthBuffer, OT = void 0 !== kT.generateStencilBuffer && kT.generateStencilBuffer, yT = void 0 !== kT.generateDepthTexture && kT.generateDepthTexture, fT = kT.pKT ?? 1, xT = kT.samples ?? xT, IT = kT.types || IT, AT = kT.samplingModes || AT, CT = kT.useSRGBBuffers || CT, jT = kT.formats || jT, vT = kT.targetTypes || vT, tT = kT.faceIndex || tT, hT = kT.layerIndex || hT, NT = kT.layerCounts || NT, QT = kT.labels || QT, ST = kT.dontCreateTextures ?? !1, this.qv > 1 && (13 === kT.depthTextureFormat || 17 === kT.depthTextureFormat || 16 === kT.depthTextureFormat || 14 === kT.depthTextureFormat || 18 === kT.depthTextureFormat) && (cT = kT.depthTextureFormat)), void 0 === cT && (cT = OT ? 13 : 14);
            const aT = this._gl,
              FT = this._currentFramebuffer,
              rT = aT.createFramebuffer();
            this._bindUnboundFramebuffer(rT);
            const PT = TT.width ?? TT,
              wT = TT.height ?? TT,
              mT = [],
              zT = [],
              JT = this.qv > 1 && (13 === cT || 17 === cT || 18 === cT);
            DT.label = kT?.label ?? "MultiRenderTargetWrapper", DT._framebuffer = rT, DT._generateDepthBuffer = yT || KT, DT._generateStencilBuffer = yT ? JT : OT, DT._depthStencilBuffer = this._setupFramebufferDepthAttachments(DT._generateStencilBuffer, DT._generateDepthBuffer, PT, wT, 1, cT), DT._attachments = zT;
            for (let oT = 0; oT < fT; oT++) {
              let TT = AT[oT] || 3,
                kT = IT[oT] || 0,
                cT = CT[oT] || !1;
              const lT = jT[oT] || 5,
                KT = vT[oT] || 3553,
                OT = NT[oT] ?? 1;
              (1 !== kT || this._caps.textureFloatLinearFiltering) && (2 !== kT || this._caps.textureHalfFloatLinearFiltering) || (TT = 1);
              const yT = this._getSamplingParameters(TT, MT);
              1 !== kT || this._caps.textureFloat || (kT = 0, bT.e.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), cT = cT && this._caps.supportSRGBBuffers && (this.qv > 1 || this.isWebGPU);
              const fT = this.qv > 1,
                xT = aT[fT ? "COLOR_ATTACHMENT" + oT : "COLOR_ATTACHMENT" + oT + "_WEBGL"];
              if (zT.push(xT), -1 === KT || ST) continue;
              const tT = new mk.b(this, 6);
              mT[oT] = tT, aT.activeTexture(aT["TEXTURE" + oT]), aT.bindTexture(KT, tT._hardwareTexture.underlyingResource), aT.texParameteri(KT, aT.TEXTURE_MAG_FILTER, yT.mag), aT.texParameteri(KT, aT.TEXTURE_MIN_FILTER, yT.min), aT.texParameteri(KT, aT.TEXTURE_WRAP_S, aT.CLAMP_TO_EDGE), aT.texParameteri(KT, aT.TEXTURE_WRAP_T, aT.CLAMP_TO_EDGE);
              const hT = this._getRGBABufferInternalSizedFormat(kT, lT, cT),
                FT = this._getInternalFormat(lT),
                rT = this._getWebGLTextureType(kT);
              if (!fT || 35866 !== KT && 32879 !== KT)
                if (34067 === KT) {
                  for (let TT = 0; TT < 6; TT++) aT.texImage2D(aT.TEXTURE_CUBE_MAP_POSITIVE_X + TT, 0, hT, PT, wT, 0, FT, rT, null);
                  tT.isCube = !0
                } else aT.texImage2D(aT.TEXTURE_2D, 0, hT, PT, wT, 0, FT, rT, null);
              else 35866 === KT ? tT.is2DArray = !0 : tT.is3D = !0, tT.baseDepth = tT.depth = OT, aT.texImage3D(KT, 0, hT, PT, wT, OT, 0, FT, rT, null);
              MT && aT.generateMipmap(KT), this._bindTextureDirectly(KT, null), tT.baseWidth = PT, tT.baseHeight = wT, tT.width = PT, tT.height = wT, tT.isReady = !0, tT.samples = 1, tT.generateMipMaps = MT, tT.samplingMode = TT, tT.type = kT, tT._useSRGBBuffer = cT, tT.format = lT, tT.label = QT[oT] ?? DT.label + "-Texture" + oT, this._internalTexturesCache.push(tT)
            }
            if (yT && this._caps.depthTextureExtension && !ST) {
              const TT = new mk.b(this, 14);
              let kT = 5,
                lT = aT.DEPTH_COMPONENT16,
                KT = aT.DEPTH_COMPONENT,
                OT = aT.UNSIGNED_SHORT,
                yT = aT.DEPTH_ATTACHMENT;
              this.qv < 2 ? lT = aT.DEPTH_COMPONENT : 14 === cT ? (kT = 1, OT = aT.FLOAT, lT = aT.DEPTH_COMPONENT32F) : 18 === cT ? (kT = 0, OT = aT.FLOAT_32_UNSIGNED_INT_24_8_REV, lT = aT.DEPTH32F_STENCIL8, KT = aT.DEPTH_STENCIL, yT = aT.DEPTH_STENCIL_ATTACHMENT) : 16 === cT ? (kT = 0, OT = aT.UNSIGNED_INT, lT = aT.DEPTH_COMPONENT24, yT = aT.DEPTH_ATTACHMENT) : 13 !== cT && 17 !== cT || (kT = 12, OT = aT.UNSIGNED_INT_24_8, lT = aT.DEPTH24_STENCIL8, KT = aT.DEPTH_STENCIL, yT = aT.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(aT.TEXTURE_2D, TT, !0), aT.texParameteri(aT.TEXTURE_2D, aT.TEXTURE_MAG_FILTER, aT.NEAREST), aT.texParameteri(aT.TEXTURE_2D, aT.TEXTURE_MIN_FILTER, aT.NEAREST), aT.texParameteri(aT.TEXTURE_2D, aT.TEXTURE_WRAP_S, aT.CLAMP_TO_EDGE), aT.texParameteri(aT.TEXTURE_2D, aT.TEXTURE_WRAP_T, aT.CLAMP_TO_EDGE), aT.texImage2D(aT.TEXTURE_2D, 0, lT, PT, wT, 0, KT, OT, null), aT.framebufferTexture2D(aT.FRAMEBUFFER, yT, aT.TEXTURE_2D, TT._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(aT.TEXTURE_2D, null), DT._depthStencilTexture = TT, DT._depthStencilTextureWithStencil = JT, TT.baseWidth = PT, TT.baseHeight = wT, TT.width = PT, TT.height = wT, TT.isReady = !0, TT.samples = 1, TT.generateMipMaps = MT, TT.samplingMode = 1, TT.format = cT, TT.type = kT, TT.label = DT.label + "-DepthStencil", mT[fT] = TT, this._internalTexturesCache.push(TT)
            }
            if (DT.setTextures(mT), lT && aT.drawBuffers(zT), this._bindUnboundFramebuffer(FT), DT.setLayerAndFaceIndices(hT, tT), this.resetTextureCache(), ST) {
              if (xT > 1) {
                const TT = aT.createFramebuffer();
                if (!TT) throw new Error("Unable to create multi sampled framebuffer");
                DT._samples = xT, DT._MSAAFramebuffer = TT, fT > 0 && lT && (this._bindUnboundFramebuffer(TT), aT.drawBuffers(zT), this._bindUnboundFramebuffer(FT))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(DT, xT, lT);
            return DT
          }, bk.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(TT, kT) {
            let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.qv < 2 || !TT) return 1;
            if (TT.samples === kT) return kT;
            const lT = this._gl;
            kT = Math.min(kT, this.getCaps().maxMSAASamples), TT._depthStencilBuffer && (lT.deleteRenderbuffer(TT._depthStencilBuffer), TT._depthStencilBuffer = null), TT._MSAAFramebuffer && (lT.deleteFramebuffer(TT._MSAAFramebuffer), TT._MSAAFramebuffer = null);
            const MT = TT._attachments.length;
            for (let OT = 0; OT < MT; OT++) {
              const kT = TT.textures[OT]._hardwareTexture;
              kT?.releaseMSAARenderBuffers()
            }
            if (kT > 1 && "function" === typeof lT.renderbufferStorageMultisample) {
              const KT = lT.createFramebuffer();
              if (!KT) throw new Error("Unable to create multi sampled framebuffer");
              TT._MSAAFramebuffer = KT, this._bindUnboundFramebuffer(KT);
              const OT = [];
              for (let cT = 0; cT < MT; cT++) {
                const MT = TT.textures[cT],
                  KT = MT._hardwareTexture,
                  yT = lT[this.qv > 1 ? "COLOR_ATTACHMENT" + cT : "COLOR_ATTACHMENT" + cT + "_WEBGL"],
                  fT = this._createRenderBuffer(MT.width, MT.height, kT, -1, this._getRGBABufferInternalSizedFormat(MT.type, MT.format, MT._useSRGBBuffer), yT);
                if (!fT) throw new Error("Unable to create multi sampled framebuffer");
                KT.addMSAARenderBuffer(fT), MT.samples = kT, OT.push(yT)
              }
              cT && lT.drawBuffers(OT)
            } else this._bindUnboundFramebuffer(TT._framebuffer);
            const KT = TT._depthStencilTexture ? TT._depthStencilTexture.format : void 0;
            return TT._depthStencilBuffer = this._setupFramebufferDepthAttachments(TT._generateStencilBuffer, TT._generateDepthBuffer, TT.width, TT.height, kT, KT), this._bindUnboundFramebuffer(null), TT._samples = kT, kT
          }, bk.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(TT) {
            const kT = TT,
              cT = this._gl;
            if (kT.isMulti)
              for (let lT = 0; lT < kT._attachments.length; lT++) {
                const TT = kT.textures[lT];
                !TT?.generateMipMaps || TT?.isCube || TT?.is3D || (this._bindTextureDirectly(cT.TEXTURE_2D, TT, !0), cT.generateMipmap(cT.TEXTURE_2D), this._bindTextureDirectly(cT.TEXTURE_2D, null))
              }
          }, bk.ThinEngine.prototype.resolveMultiFramebuffer = function(TT) {
            const kT = TT,
              cT = this._gl;
            if (!kT._MSAAFramebuffer || !kT.isMulti) return;
            let lT = kT.resolveMSAAColors ? cT.COLOR_BUFFER_BIT : 0;
            lT |= kT._generateDepthBuffer && kT.resolveMSAADepth ? cT.DEPTH_BUFFER_BIT : 0, lT |= kT._generateStencilBuffer && kT.resolveMSAAStencil ? cT.STENCIL_BUFFER_BIT : 0;
            const MT = kT._attachments,
              KT = MT.length;
            cT.bindFramebuffer(cT.READ_FRAMEBUFFER, kT._MSAAFramebuffer), cT.bindFramebuffer(cT.DRAW_FRAMEBUFFER, kT._framebuffer);
            for (let OT = 0; OT < KT; OT++) {
              const TT = kT.textures[OT];
              for (let kT = 0; kT < KT; kT++) MT[kT] = cT.NONE;
              MT[OT] = cT[this.qv > 1 ? "COLOR_ATTACHMENT" + OT : "COLOR_ATTACHMENT" + OT + "_WEBGL"], cT.readBuffer(MT[OT]), cT.drawBuffers(MT), cT.blitFramebuffer(0, 0, TT.width, TT.height, 0, 0, TT.width, TT.height, lT, cT.NEAREST)
            }
            for (let OT = 0; OT < KT; OT++) MT[OT] = cT[this.qv > 1 ? "COLOR_ATTACHMENT" + OT : "COLOR_ATTACHMENT" + OT + "_WEBGL"];
            cT.drawBuffers(MT), cT.bindFramebuffer(this._gl.FRAMEBUFFER, kT._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = KT;
        const AT = [],
          CT = [],
          jT = [],
          vT = [],
          tT = [],
          hT = [],
          NT = [],
          QT = [];
        this._initTypes(cT, AT, CT, jT, vT, tT, hT, NT, QT, MT);
        const ST = !MT || void 0 === MT.generateDepthBuffer || MT.generateDepthBuffer,
          DT = !(!MT || void 0 === MT.generateStencilBuffer) && MT.generateStencilBuffer,
          aT = MT && MT.samples ? MT.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: CT,
          generateMipMaps: OT,
          generateDepthBuffer: ST,
          generateStencilBuffer: DT,
          generateDepthTexture: yT,
          depthTextureFormat: fT,
          types: AT,
          pKT: cT,
          useSRGBBuffers: jT,
          samples: aT,
          formats: vT,
          targetTypes: tT,
          faceIndex: hT,
          layerIndex: NT,
          layerCounts: QT,
          labels: KT,
          label: TT
        }, this._count = cT, this._drawOnlyOnFirstAttachmentByDefault = IT, cT > 0 && (this._createInternalTextures(), this._createTextures(KT))
      }
      _initTypes(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
        for (let IT = 0; IT < TT; IT++) xT && xT.types && void 0 !== xT.types[IT] ? kT.push(xT.types[IT]) : kT.push(xT && xT.defaultType ? xT.defaultType : 0), xT && xT.samplingModes && void 0 !== xT.samplingModes[IT] ? cT.push(xT.samplingModes[IT]) : cT.push(JT.f.BILINEAR_SAMPLINGMODE), xT && xT.useSRGBBuffers && void 0 !== xT.useSRGBBuffers[IT] ? lT.push(xT.useSRGBBuffers[IT]) : lT.push(!1), xT && xT.formats && void 0 !== xT.formats[IT] ? MT.push(xT.formats[IT]) : MT.push(5), xT && xT.targetTypes && void 0 !== xT.targetTypes[IT] ? KT.push(xT.targetTypes[IT]) : KT.push(3553), xT && xT.faceIndex && void 0 !== xT.faceIndex[IT] ? OT.push(xT.faceIndex[IT]) : OT.push(0), xT && xT.layerIndex && void 0 !== xT.layerIndex[IT] ? yT.push(xT.layerIndex[IT]) : yT.push(0), xT && xT.layerCounts && void 0 !== xT.layerCounts[IT] ? fT.push(xT.layerCounts[IT]) : fT.push(1)
      }
      _createInternaTextureIndexMapping() {
        const TT = {},
          kT = [];
        if (!this._renderTarget) return kT;
        const cT = this._renderTarget.textures;
        for (let lT = 0; lT < cT.length; lT++) {
          const MT = cT[lT];
          if (!MT) continue;
          const KT = TT[MT.uniqueId];
          void 0 !== KT ? kT[lT] = KT : TT[MT.uniqueId] = lT
        }
        return kT
      }
      _rebuild() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || TT) return;
        const lT = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), kT && (this._releaseTextures(), this._createTextures(cT));
        const MT = this._renderTarget.textures;
        for (let KT = 0; KT < MT.length; KT++) {
          const TT = this._textures[KT];
          void 0 !== lT[KT] && this._renderTarget.setTexture(MT[lT[KT]], KT), TT._texture = MT[KT], TT._texture && (TT._noMipmap = !TT._texture.useMipMaps, TT._useSRGBBuffer = TT._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let TT = 0; TT < this._textures.length; TT++) this._textures[TT]._texture = null, this._textures[TT].dispose()
      }
      _createTextures(TT) {
        const kT = this._renderTarget.textures;
        this._textures = [];
        for (let cT = 0; cT < kT.length; cT++) {
          const lT = new JT.f(null, this.NJ());
          TT?.[cT] && (lT.name = TT[cT]), lT._texture = kT[cT], lT._texture && (lT._noMipmap = !lT._texture.useMipMaps, lT._useSRGBBuffer = lT._texture._useSRGBBuffer), this._textures.push(lT)
        }
      }
      setInternalTexture(TT, kT) {
        let cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === kT && (this._texture = TT), this.renderTarget.setTexture(TT, kT, cT), this.textures[kT] || (this.textures[kT] = new JT.f(null, this.NJ()), this.textures[kT].name = this._textureNames?.[kT] ?? this.textures[kT].name), this.textures[kT]._texture = TT, this.textures[kT]._noMipmap = !TT.useMipMaps, this.textures[kT]._useSRGBBuffer = TT._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[kT] = TT.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[kT] = TT.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[kT] = TT._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[kT])) {
          let cT;
          cT = TT.is2DArray ? 35866 : TT.isCube ? 34067 : TT.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[kT] = cT
        }
      }
      setLayerAndFaceIndex(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[TT] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[TT] = kT), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[TT] = cT), this.renderTarget.setLayerAndFaceIndex(TT, kT, cT))
      }
      setLayerAndFaceIndices(TT, kT) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = TT, this._multiRenderTargetOptions.faceIndex = kT, this.renderTarget.setLayerAndFaceIndices(TT, kT))
      }
      get samples() {
        return this._samples
      }
      set samples(TT) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(TT) : this._samples = TT
      }
      resize(TT) {
        this._processSizeParameter(TT), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(TT, kT, cT) {
        this._multiRenderTargetOptions.pKT = TT, this._count = TT;
        const lT = [],
          MT = [],
          KT = [],
          OT = [],
          yT = [],
          fT = [],
          xT = [],
          IT = [];
        this._textureNames = cT, this._initTypes(TT, lT, MT, KT, OT, yT, fT, xT, IT, kT), this._multiRenderTargetOptions.types = lT, this._multiRenderTargetOptions.samplingModes = MT, this._multiRenderTargetOptions.useSRGBBuffers = KT, this._multiRenderTargetOptions.formats = OT, this._multiRenderTargetOptions.targetTypes = yT, this._multiRenderTargetOptions.faceIndex = fT, this._multiRenderTargetOptions.layerIndex = xT, this._multiRenderTargetOptions.layerCounts = IT, this._multiRenderTargetOptions.labels = cT, this._rebuild(!1, !0, cT)
      }
      _unbindFrameBuffer(TT, kT) {
        this._renderTarget && TT.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(kT)
        }))
      }
      dispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), TT ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const TT = this._renderTarget?.textures;
        if (TT) {
          for (let kT = TT.length - 1; kT >= 0; kT--) this._textures[kT]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var Vk = cT(39809);
    class Ek {
      constructor(TT) {
        this.name = Vk.e.NAME_GEOMETRYBUFFERRENDERER, this.et = TT
      }
      register() {
        this.et._gatherRenderTargetsStage.registerStep(Vk.e.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(TT) {
        this.et._geometryBufferRenderer && TT.push(this.et._geometryBufferRenderer.getGBuffer())
      }
    }
    let Zk = !1;
    var uk;
    ! function(TT) {
      TT[TT.Small = 0] = "Small", TT[TT.Medium = 1] = "Medium", TT[TT.Large = 2] = "Large", TT[TT.ExtraLarge = 3] = "ExtraLarge"
    }(uk || (uk = {}));
    const Xk = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      dk = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class Lk {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(TT) {
        if (TT && this._enableMeshBlendTag && !this._scene.Dv().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = TT
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(TT) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = TT, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(TT, kT) {
        TT === Lk.POSITION_TEXTURE_TYPE ? (this._positionIndex = kT, this._enablePosition = !0) : TT === Lk.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = kT, this._enableVelocity = !0) : TT === Lk.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = kT, this._enableVelocityLinear = !0) : TT === Lk.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = kT, this._enableReflectivity = !0) : TT === Lk.DEPTH_TEXTURE_TYPE ? (this._depthIndex = kT, this._enableDepth = !0) : TT === Lk.NORMAL_TEXTURE_TYPE ? (this._normalIndex = kT, this._enableNormal = !0) : TT === Lk.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = kT, this._enableScreenspaceDepth = !0) : TT === Lk.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = kT, this._enableIrradiance = !0) : TT === Lk.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = kT, this._enableObjectId = !0) : TT === Lk.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = kT, this._enableMeshBlendTag = !0)
      }
      _setAttachments(TT) {
        this._attachmentsFromPrePass = TT
      }
      _linkInternalTexture(TT) {
        this._multiRenderTarget.setInternalTexture(TT, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(TT) {
        this._multiRenderTarget.renderList = TT
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(TT) {
        switch (TT) {
          case Lk.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case Lk.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case Lk.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case Lk.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case Lk.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case Lk.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case Lk.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case Lk.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case Lk.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case Lk.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(TT) {
        this._enableDepth = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(TT) {
        this._enableNormal = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(TT) {
        this._enablePosition = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(TT) {
        this._enableVelocity = TT, TT || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = TT
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(TT) {
        this._enableVelocityLinear = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(TT) {
        this._enableReflectivity = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(TT) {
        this._enableScreenspaceDepth = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(TT) {
        this._enableIrradiance = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(TT) {
        if (TT && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (TT && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (TT && !this._enableObjectId && !this._linkedWithPrePass) {
          const TT = this._scene.Dv(),
            kT = Math.min(TT.getCaps().maxDrawBuffers ?? 1, 8),
            cT = this._assignRenderTargetIndices()[0] + 1;
          if (TT.getCaps().drawBuffersExtension && cT > kT) throw new Error(`GeometryBufferRenderer: ${cT} color attachments were requested, but this engine supports at most ${kT}`)
        }
        this._enableObjectId = TT, TT || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(TT) {
        if (this._enableMeshBlendTag !== TT) {
          if (TT) {
            const TT = this._scene.Dv();
            if (! function(TT) {
                return "NATIVE" !== TT.shaderPlatformName && (TT.isWebGPU || 2 === TT.qv)
              }(TT)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !TT.isWebGPU && !TT.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const kT = Math.min(TT.getCaps().maxDrawBuffers ?? 1, 8),
                cT = this._assignRenderTargetIndices()[0] + 1;
              if (TT.getCaps().drawBuffersExtension && cT > kT) throw new Error(`GeometryBufferRenderer: ${cT} color attachments were requested, but this engine supports at most ${kT}`)
            }
          }
          this._enableMeshBlendTag = TT, TT || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get et() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          lT = arguments.length > 3 ? arguments[3] : void 0;
        var MT;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new YT.g(0, 0, 0, 0), this._clearDepthColor = new YT.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = TT, this._ratioOrDimensions = kT, this._useUbo = TT.Dv().supportsUniformBuffers, this._depthFormat = cT, this._textureTypesAndFormats = lT || {}, this._initShaderSourceAsync(), MT = Lk, Zk || (Zk = !0, Object.defineProperty(ZT.f.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(TT) {
            TT && TT.isSupported && (this._geometryBufferRenderer = TT)
          },
          enumerable: !0,
          configurable: !0
        }), ZT.f.prototype.enableGeometryBufferRenderer = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            cT = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new MT(this, TT, kT, cT), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, ZT.f.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, MT._SceneComponentInitialization = TT => {
          let kT = TT._getComponent(Vk.e.NAME_GEOMETRYBUFFERRENDERER);
          kT || (kT = new Ek(TT), TT.ycT(kT))
        }), Lk._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.Dv().isWebGPU && !Lk.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([cT.e(328).then((() => cT(61224))), Promise.all([cT.e(327), cT.e(339)]).then((() => cT(61232)))])) : await Promise.all([cT.e(311).then((() => cT(61237))), cT.e(310).then((() => cT(61245)))]), this._shadersLoaded = !0
      }
      isReady(TT, kT) {
        if (!this._shadersLoaded) return !1;
        const cT = TT.wv();
        if (cT && cT.disableDepthWrite) return !1;
        if (function(TT) {
            return TT._isGaussianSplatting || "GaussianSplattingMesh" === (kT = TT.getClassName()) || "GaussianSplattingStream" === kT;
            var kT
          }(TT.getMesh())) return !1;
        const lT = [],
          MT = [XT.l.PositionKind],
          KT = TT.getMesh();
        KT.isVerticesDataPresent(XT.l.NormalKind) && (lT.push("#define HAS_NORMAL_ATTRIBUTE"), MT.push(XT.l.NormalKind));
        let OT = !1,
          yT = !1;
        if (cT) {
          let TT = !1;
          if (cT.needAlphaTestingForMesh(KT) && cT.getAlphaTestTexture() && (lT.push("#define ALPHATEST"), lT.push(`#define ALPHATEST_UV${cT.getAlphaTestTexture().coordinatesIndex+1}`), TT = !0), (cT.bumpTexture || cT.normalTexture || cT.geometryNormalTexture) && pT.b.BumpTextureEnabled) {
            const kT = cT.bumpTexture || cT.normalTexture || cT.geometryNormalTexture;
            lT.push("#define BUMP"), lT.push(`#define BUMP_UV${kT.coordinatesIndex+1}`), TT = !0
          }
          if (this._enableReflectivity) {
            let kT = !1;
            if ("PBRMetallicRoughnessMaterial" === cT.getClassName()) cT.metallicRoughnessTexture && (lT.push("#define ORMTEXTURE"), lT.push(`#define REFLECTIVITY_UV${cT.metallicRoughnessTexture.coordinatesIndex+1}`), lT.push("#define METALLICWORKFLOW"), TT = !0, kT = !0), null != cT.metallic && (lT.push("#define METALLIC"), lT.push("#define METALLICWORKFLOW"), kT = !0), null != cT.roughness && (lT.push("#define ROUGHNESS"), lT.push("#define METALLICWORKFLOW"), kT = !0), kT && (cT.baseTexture && (lT.push("#define ALBEDOTEXTURE"), lT.push(`#define ALBEDO_UV${cT.baseTexture.coordinatesIndex+1}`), cT.baseTexture.gammaSpace && lT.push("#define GAMMAALBEDO"), TT = !0), cT.baseColor && lT.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === cT.getClassName()) cT.specularGlossinessTexture ? (lT.push("#define SPECULARGLOSSINESSTEXTURE"), lT.push(`#define REFLECTIVITY_UV${cT.specularGlossinessTexture.coordinatesIndex+1}`), TT = !0, cT.specularGlossinessTexture.gammaSpace && lT.push("#define GAMMAREFLECTIVITYTEXTURE")) : cT.specularColor && lT.push("#define REFLECTIVITYCOLOR"), null != cT.glossiness && lT.push("#define GLOSSINESS");
            else if ("PBRMaterial" === cT.getClassName()) cT.metallicTexture && (lT.push("#define ORMTEXTURE"), lT.push(`#define REFLECTIVITY_UV${cT.metallicTexture.coordinatesIndex+1}`), lT.push("#define METALLICWORKFLOW"), TT = !0, kT = !0), null != cT.metallic && (lT.push("#define METALLIC"), lT.push("#define METALLICWORKFLOW"), kT = !0), null != cT.roughness && (lT.push("#define ROUGHNESS"), lT.push("#define METALLICWORKFLOW"), kT = !0), kT ? (cT.albedoTexture && (lT.push("#define ALBEDOTEXTURE"), lT.push(`#define ALBEDO_UV${cT.albedoTexture.coordinatesIndex+1}`), cT.albedoTexture.gammaSpace && lT.push("#define GAMMAALBEDO"), TT = !0), cT.albedoColor && lT.push("#define ALBEDOCOLOR")) : (cT.reflectivityTexture ? (lT.push("#define SPECULARGLOSSINESSTEXTURE"), lT.push(`#define REFLECTIVITY_UV${cT.reflectivityTexture.coordinatesIndex+1}`), cT.reflectivityTexture.gammaSpace && lT.push("#define GAMMAREFLECTIVITYTEXTURE"), TT = !0) : cT.reflectivityColor && lT.push("#define REFLECTIVITYCOLOR"), null != cT.microSurface && lT.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === cT.getClassName()) cT.specularTexture && (lT.push("#define REFLECTIVITYTEXTURE"), lT.push(`#define REFLECTIVITY_UV${cT.specularTexture.coordinatesIndex+1}`), cT.specularTexture.gammaSpace && lT.push("#define GAMMAREFLECTIVITYTEXTURE"), TT = !0), cT.specularColor && lT.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === cT.getClassName()) {
              const kT = cT;
              lT.push("#define METALLIC"), lT.push("#define ROUGHNESS"), kT._useRoughnessFromMetallicTextureGreen && kT.baseMetalnessTexture ? (lT.push("#define ORMTEXTURE"), lT.push(`#define REFLECTIVITY_UV${kT.baseMetalnessTexture.coordinatesIndex+1}`), TT = !0) : kT.baseMetalnessTexture ? (lT.push("#define METALLIC_TEXTURE"), lT.push(`#define METALLIC_UV${kT.baseMetalnessTexture.coordinatesIndex+1}`), TT = !0) : kT.specularRoughnessTexture && (lT.push("#define ROUGHNESS_TEXTURE"), lT.push(`#define ROUGHNESS_UV${kT.specularRoughnessTexture.coordinatesIndex+1}`), TT = !0), kT.baseColorTexture && (lT.push("#define ALBEDOTEXTURE"), lT.push(`#define ALBEDO_UV${kT.baseColorTexture.coordinatesIndex+1}`), kT.baseColorTexture.gammaSpace && lT.push("#define GAMMAALBEDO"), TT = !0), kT.baseColor && lT.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (lT.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === cT.getClassName())) {
            const kT = cT;
            kT.subsurfaceWeight > 0 && kT.subsurfaceWeightTexture && (lT.push("#define SUBSURFACE_WEIGHT"), lT.push(`#define SUBSURFACEWEIGHT_UV${kT.subsurfaceWeightTexture.coordinatesIndex+1}`), TT = !0), kT.transmissionWeight > 0 && kT.transmissionWeightTexture && (lT.push("#define TRANSMISSION_WEIGHT"), lT.push(`#define TRANSMISSIONWEIGHT_UV${kT.transmissionWeightTexture.coordinatesIndex+1}`), TT = !0)
          }
          TT && (lT.push("#define NEED_UV"), KT.isVerticesDataPresent(XT.l.UVKind) && (MT.push(XT.l.UVKind), lT.push("#define UV1"), OT = !0), KT.isVerticesDataPresent(XT.l.UV2Kind) && (MT.push(XT.l.UV2Kind), lT.push("#define UV2"), yT = !0))
        }
        if (this._enableDepth && (lT.push("#define DEPTH"), lT.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (lT.push("#define NORMAL"), lT.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (lT.push("#define POSITION"), lT.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (lT.push("#define VELOCITY"), lT.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(KT) && lT.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (lT.push("#define VELOCITY_LINEAR"), lT.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(KT) && lT.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (lT.push("#define REFLECTIVITY"), lT.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (lT.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), lT.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          lT.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), lT.push("#define IRRADIANCE");
          const TT = this._scene;
          if (TT.environmentTexture) {
            const kT = {};
            let MT = !1,
              KT = 0;
            "OpenPBRMaterial" !== cT.getClassName() && "StandardMaterial" !== cT.getClassName() && "PBRMetallicRoughnessMaterial" !== cT.getClassName() && "PBRSpecularGlossinessMaterial" !== cT.getClassName() && "PBRMaterial" !== cT.getClassName() || (MT = !!cT.realtimeFiltering, KT = cT.realtimeFilteringQuality || 0), (0, qT.Q)(TT, TT.environmentTexture, kT, MT, KT, !0);
            for (const TT in kT) kT[TT] && lT.push("#define " + TT);
            kT.USEIRRADIANCEMAP || lT.push("#define SPHERICAL_HARMONICS");
            const OT = TT.postProcessRenderPipelineManager.supportedPipelines.find((TT => "IBLShadowsRenderPipeline" === TT.getClassName()));
            if (OT) {
              const TT = OT;
              TT._getAccumulatedTexture() && (lT.push("#define IBL_SHADOW_TEXTURE"), TT.coloredShadows && lT.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (lT.push("#define OBJECT_ID"), lT.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (lT.push("#define MESH_BLEND_TAG"), lT.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && lT.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && lT.push("#define ENCODE_NORMAL"), KT.useBones && KT.computeBonesUsingShaders && KT.skeleton ? (MT.push(XT.l.MatricesIndicesKind), MT.push(XT.l.MatricesWeightsKind), KT.numBoneInfluencers > 4 && (MT.push(XT.l.MatricesIndicesExtraKind), MT.push(XT.l.MatricesWeightsExtraKind)), lT.push("#define NUM_BONE_INFLUENCERS " + KT.numBoneInfluencers), lT.push("#define BONETEXTURE " + KT.skeleton.isUsingTextureForMatrices), lT.push("#define BonesPerMesh " + (KT.skeleton.bones.length + 1))) : (lT.push("#define NUM_BONE_INFLUENCERS 0"), lT.push("#define BONETEXTURE false"), lT.push("#define BonesPerMesh 0"));
        const fT = KT.morphTargetManager ? (0, qT.J)(KT.morphTargetManager, lT, MT, KT, !0, !0, !1, OT, yT, !1) : 0;
        kT && (lT.push("#define INSTANCES"), (0, qT.ub)(MT, this._enableVelocity || this._enableVelocityLinear), TT.getRenderingMesh().hasThinInstances && lT.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? lT.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : lT.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, Ik.n)(cT, this._scene, lT);
        const xT = this._scene.Dv(),
          IT = TT._getDrawWrapper(void 0, !0),
          AT = IT.defines,
          CT = lT.join("\n");
        return AT !== CT && IT.setEffect(xT.createEffect("geometry", {
          attributes: MT,
          uniformsNames: dk,
          samplers: Xk,
          defines: CT,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: fT
          },
          shaderLanguage: this.shaderLanguage
        }, xT), CT), IT.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(TT) {
        if (this._enableObjectId && 1 !== TT) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== TT) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = TT
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.Dv().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.et.Dv()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.et.Dv().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const TT = [],
          kT = [];
        let cT = 0;
        return this._enableDepth && (this._depthIndex = cT, cT++, TT.push("gBuffer_Depth"), kT.push(this._textureTypesAndFormats[Lk.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = cT, cT++, TT.push("gBuffer_Normal"), kT.push(this._textureTypesAndFormats[Lk.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = cT, cT++, TT.push("gBuffer_Position"), kT.push(this._textureTypesAndFormats[Lk.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = cT, cT++, TT.push("gBuffer_Velocity"), kT.push(this._textureTypesAndFormats[Lk.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = cT, cT++, TT.push("gBuffer_VelocityLinear"), kT.push(this._textureTypesAndFormats[Lk.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = cT, cT++, TT.push("gBuffer_Reflectivity"), kT.push(this._textureTypesAndFormats[Lk.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = cT, cT++, TT.push("gBuffer_ScreenspaceDepth"), kT.push(this._textureTypesAndFormats[Lk.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = cT, cT++, TT.push("gBuffer_Irradiance"), kT.push(this._textureTypesAndFormats[Lk.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = cT, cT++, TT.push("gBuffer_ObjectId"), kT.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = cT, cT++, TT.push("gBuffer_MeshBlendTag"), kT.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [cT, TT, kT]
      }
      _createRenderTargets() {
        const TT = this._scene.Dv(),
          [kT, cT, lT] = this._assignRenderTargetIndices(),
          MT = Math.min(TT.getCaps().maxDrawBuffers ?? 1, 8);
        if (TT.getCaps().drawBuffersExtension && kT > MT) throw new Error(`GeometryBufferRenderer: ${kT} color attachments were requested, but this engine supports at most ${MT}`);
        let OT = 0;
        TT._caps.textureFloat && TT._caps.textureFloatLinearFiltering ? OT = 1 : TT._caps.textureHalfFloat && TT._caps.textureHalfFloatLinearFiltering && (OT = 2);
        const yT = this._getRenderTargetDimensions(),
          fT = [],
          xT = [],
          IT = [];
        for (const KT of lT) KT ? (fT.push(KT.textureType), xT.push(KT.textureFormat), IT.push(KT.samplingMode ?? 2)) : (fT.push(OT), xT.push(5), IT.push(2));
        if (this._normalsAreUnsigned = 11 === fT[Lk.NORMAL_TEXTURE_TYPE] || 13 === fT[Lk.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new Gk("gBuffer", yT, kT, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: fT,
            formats: xT,
            samplingModes: IT,
            depthTextureFormat: this._depthFormat
          }, cT.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = JT.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = JT.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const AT = [!0],
          CT = [!1],
          jT = [!0];
        for (let KT = 1; KT < kT; ++KT) AT.push(!0), jT.push(!1), CT.push(!0);
        const vT = TT.buildTextureLayout(AT),
          tT = TT.buildTextureLayout(CT),
          hT = TT.buildTextureLayout(jT);
        this._multiRenderTarget.onClearObservable.add((TT => {
          const kT = this.useSpecificClearForDepthTexture ? tT : vT;
          TT.clearAttachments(this._clearColor, kT, !0, !0, !0), this.useSpecificClearForDepthTexture && TT.clearAttachments(this._clearDepthColor, hT, !0, !1, !1), TT.bindAttachments(vT)
        })), this._resizeObserver = TT.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const NT = TT => {
          const kT = TT.getRenderingMesh(),
            cT = TT.getEffectiveMesh(),
            lT = this._scene,
            MT = lT.Dv(),
            OT = TT.wv();
          if (!OT) return;
          if (cT._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[cT.uniqueId] && (this._previousTransformationMatrices[cT.uniqueId] = {
              pA: uT.d.Identity(),
              viewProjection: lT.getTransformMatrix()
            }, kT.skeleton)) {
            const TT = kT.skeleton.getTransformMatrices(kT);
            this._previousBonesTransformationMatrices[kT.uniqueId] = this._copyBonesTransformationMatrices(TT, new Float32Array(TT.length))
          }
          const yT = kT._getInstancesRenderList(TT._id, !!TT.getReplacementMesh());
          if (yT.mustReturn) return;
          const fT = MT.getCaps().instancedArrays && (null !== yT.visibleInstances[TT._id] || kT.hasThinInstances),
            xT = cT.getWorldMatrix();
          if (this.isReady(TT, fT)) {
            const IT = TT._getDrawWrapper();
            if (!IT) return;
            const AT = IT.effect;
            let CT;
            MT.enableEffect(IT), fT || kT._bind(TT, AT, OT.fillMode), this._useUbo ? ((0, qT.r)(AT, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (AT.setMatrix("viewProjection", lT.getTransformMatrix()), AT.setMatrix("view", lT.getViewMatrix()), this._scene.bindEyePosition(AT, "vEyePosition"));
            if (kT._instanceDataStorage.isFrozen || !OT.backFaceCulling && null === OT.sideOrientation) CT = kT._effectiveSideOrientation;
            else {
              const TT = cT._getWorldMatrixDeterminant();
              CT = OT._getEffectiveOrientation(kT), TT < 0 && (CT = CT === KT.e.ClockWiseSideOrientation ? KT.e.CounterClockWiseSideOrientation : KT.e.ClockWiseSideOrientation)
            }
            if (OT._preBind(IT, CT), OT.needAlphaTestingForMesh(cT)) {
              const TT = OT.getAlphaTestTexture();
              TT && (AT.setTexture("diffuseSampler", TT), AT.setMatrix("diffuseMatrix", TT.getTextureMatrix()), AT.setFloat("alphaCutOff", OT.alphaCutOff ?? .4))
            }
            if ((OT.bumpTexture || OT.normalTexture || OT.geometryNormalTexture) && lT.Dv().getCaps().standardDerivatives && pT.b.BumpTextureEnabled) {
              const TT = OT.bumpTexture || OT.normalTexture || OT.geometryNormalTexture;
              AT.setFloat3("vBumpInfos", TT.coordinatesIndex, 1 / TT.level, OT.parallaxScaleBias), AT.setMatrix("bumpMatrix", TT.getTextureMatrix()), AT.setTexture("bumpSampler", TT), AT.setFloat2("vTangentSpaceParams", OT.invertNormalMapX ? -1 : 1, OT.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === OT.getClassName()) null !== OT.metallicRoughnessTexture && (AT.setTexture("reflectivitySampler", OT.metallicRoughnessTexture), AT.setMatrix("reflectivityMatrix", OT.metallicRoughnessTexture.getTextureMatrix())), null !== OT.metallic && AT.setFloat("metallic", OT.metallic), null !== OT.roughness && AT.setFloat("glossiness", 1 - OT.roughness), null !== OT.baseTexture && (AT.setTexture("albedoSampler", OT.baseTexture), AT.setMatrix("albedoMatrix", OT.baseTexture.getTextureMatrix())), null !== OT.baseColor && AT.setColor3("albedoColor", OT.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === OT.getClassName()) null !== OT.specularGlossinessTexture ? (AT.setTexture("reflectivitySampler", OT.specularGlossinessTexture), AT.setMatrix("reflectivityMatrix", OT.specularGlossinessTexture.getTextureMatrix())) : null !== OT.specularColor && AT.setColor3("reflectivityColor", OT.specularColor), null !== OT.glossiness && AT.setFloat("glossiness", OT.glossiness);
            else if ("PBRMaterial" === OT.getClassName()) null !== OT.metallicTexture && (AT.setTexture("reflectivitySampler", OT.metallicTexture), AT.setMatrix("reflectivityMatrix", OT.metallicTexture.getTextureMatrix())), null !== OT.metallic && AT.setFloat("metallic", OT.metallic), null !== OT.roughness && AT.setFloat("glossiness", 1 - OT.roughness), null !== OT.roughness || null !== OT.metallic || null !== OT.metallicTexture ? (null !== OT.albedoTexture && (AT.setTexture("albedoSampler", OT.albedoTexture), AT.setMatrix("albedoMatrix", OT.albedoTexture.getTextureMatrix())), null !== OT.albedoColor && AT.setColor3("albedoColor", OT.albedoColor)) : (null !== OT.reflectivityTexture ? (AT.setTexture("reflectivitySampler", OT.reflectivityTexture), AT.setMatrix("reflectivityMatrix", OT.reflectivityTexture.getTextureMatrix())) : null !== OT.reflectivityColor && AT.setColor3("reflectivityColor", OT.reflectivityColor), null !== OT.microSurface && AT.setFloat("glossiness", OT.microSurface));
            else if ("StandardMaterial" === OT.getClassName()) null !== OT.specularTexture && (AT.setTexture("reflectivitySampler", OT.specularTexture), AT.setMatrix("reflectivityMatrix", OT.specularTexture.getTextureMatrix())), null !== OT.specularColor && AT.setColor3("reflectivityColor", OT.specularColor);
            else if ("OpenPBRMaterial" === OT.getClassName()) {
              const TT = OT;
              TT._useRoughnessFromMetallicTextureGreen && TT.baseMetalnessTexture ? (AT.setTexture("reflectivitySampler", TT.baseMetalnessTexture), AT.setMatrix("reflectivityMatrix", TT.baseMetalnessTexture.getTextureMatrix())) : TT.baseMetalnessTexture ? (AT.setTexture("metallicSampler", TT.baseMetalnessTexture), AT.setMatrix("metallicMatrix", TT.baseMetalnessTexture.getTextureMatrix())) : TT.specularRoughnessTexture && (AT.setTexture("roughnessSampler", TT.specularRoughnessTexture), AT.setMatrix("roughnessMatrix", TT.specularRoughnessTexture.getTextureMatrix())), AT.setFloat("metallic", TT.baseMetalness), AT.setFloat("glossiness", 1 - TT.specularRoughness), null !== TT.baseColorTexture && (AT.setTexture("albedoSampler", TT.baseColorTexture), AT.setMatrix("albedoMatrix", TT.baseColorTexture.getTextureMatrix())), null !== TT.baseColor && AT.setColor3("albedoColor", TT.baseColor)
            }
            if (this._enableIrradiance && lT.environmentTexture) {
              const TT = lT.environmentTexture,
                kT = lT.postProcessRenderPipelineManager.supportedPipelines.find((TT => "IBLShadowsRenderPipeline" === TT.getClassName()));
              if (kT) {
                const TT = kT._getAccumulatedTexture();
                TT && (AT.setTexture("iblShadowSampler", TT), AT.setFloat2("shadowTextureSize", TT.getSize().width, TT.getSize().height))
              }
              if (AT.setMatrix("reflectionMatrix", TT.getReflectionTextureMatrix()), AT.setFloat2("vReflectionInfos", TT.level * lT.iblIntensity, 0), AT.setTexture("reflectionSampler", TT), TT.irradianceTexture && (AT.setTexture("irradianceSampler", TT.irradianceTexture), TT.irradianceTexture._dominantDirection && AT.setVector3("vReflectionDominantDirection", TT.irradianceTexture._dominantDirection)), TT.sphericalPolynomial) {
                const kT = TT.sphericalPolynomial;
                if (kT.preScaledHarmonics) {
                  const TT = kT.preScaledHarmonics;
                  AT.setVector3("vSphericalL00", TT.l00), AT.setVector3("vSphericalL1_1", TT.l1_1), AT.setVector3("vSphericalL10", TT.l10), AT.setVector3("vSphericalL11", TT.l11), AT.setVector3("vSphericalL2_2", TT.l2_2), AT.setVector3("vSphericalL2_1", TT.l2_1), AT.setVector3("vSphericalL20", TT.l20), AT.setVector3("vSphericalL21", TT.l21), AT.setVector3("vSphericalL22", TT.l22)
                } else AT.setFloat3("vSphericalX", kT.x.x, kT.x.y, kT.x.z), AT.setFloat3("vSphericalY", kT.y.x, kT.y.y, kT.y.z), AT.setFloat3("vSphericalZ", kT.z.x, kT.z.y, kT.z.z), AT.setFloat3("vSphericalXX_ZZ", kT.xx.x - kT.zz.x, kT.xx.y - kT.zz.y, kT.xx.z - kT.zz.z), AT.setFloat3("vSphericalYY_ZZ", kT.yy.x - kT.zz.x, kT.yy.y - kT.zz.y, kT.yy.z - kT.zz.z), AT.setFloat3("vSphericalZZ", kT.zz.x, kT.zz.y, kT.zz.z), AT.setFloat3("vSphericalXY", kT.xy.x, kT.xy.y, kT.xy.z), AT.setFloat3("vSphericalYZ", kT.yz.x, kT.yz.y, kT.yz.z), AT.setFloat3("vSphericalZX", kT.zx.x, kT.zx.y, kT.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === OT.getClassName()) {
                const TT = OT;
                AT.setFloat("vSubsurfaceWeight", TT.subsurfaceWeight), TT.subsurfaceWeightTexture && (AT.setTexture("subsurfaceWeightSampler", TT.subsurfaceWeightTexture), AT.setMatrix("subsurfaceWeightMatrix", TT.subsurfaceWeightTexture.getTextureMatrix())), AT.setFloat("vTransmissionWeight", TT.transmissionWeight), TT.transmissionWeightTexture && (AT.setTexture("transmissionWeightSampler", TT.transmissionWeightTexture), AT.setMatrix("transmissionWeightMatrix", TT.transmissionWeightTexture.getTextureMatrix())), AT.setFloat("vTransmissionScatterAnisotropy", TT.transmissionScatterAnisotropy), AT.setFloat("vSubsurfaceScatterAnisotropy", TT.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, Ik.g)(AT, OT, this._scene), kT.useBones && kT.computeBonesUsingShaders && kT.skeleton) {
              const TT = kT.skeleton;
              if (TT.isUsingTextureForMatrices && AT.getUniformIndex("boneTextureInfo") > -1) {
                const cT = TT.getTransformMatrixTexture(kT);
                AT.setTexture("boneSampler", cT), AT.setFloat2("boneTextureInfo", TT._textureWidth, TT._textureHeight)
              } else AT.setMatrices("mBones", kT.skeleton.getTransformMatrices(kT));
              (this._enableVelocity || this._enableVelocityLinear) && AT.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[kT.uniqueId])
            }
            if ((0, qT.q)(kT, AT), kT.morphTargetManager && kT.morphTargetManager.isUsingTextureForTargets && kT.morphTargetManager._bind(AT), (this._enableVelocity || this._enableVelocityLinear) && (AT.setMatrix("previousWorld", this._previousTransformationMatrices[cT.uniqueId].pA), AT.setMatrix("previousViewProjection", this._previousTransformationMatrices[cT.uniqueId].viewProjection)), this._enableObjectId) {
              let TT = kT.uniqueId;
              if (this.objectIdProvider) TT = (0, jk.i)(kT, this.objectIdProvider);
              else if (TT > 16777215) throw new Error(`Invalid geometry object ID ${TT} for mesh "${kT.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              AT.setFloat("objectId", TT)
            }
            if (this._enableMeshBlendTag) {
              const TT = this.meshBlendTagProvider ? (0, jk.h)(kT, this.meshBlendTagProvider) : kT.meshBlendingTag;
              AT.setInt("meshBlendTag", TT)
            }
            fT && kT.hasThinInstances && AT.setMatrix("world", xT), kT._processRendering(cT, TT, AT, OT.fillMode, yT, fT, ((TT, kT) => {
              TT || AT.setMatrix("world", kT)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[cT.uniqueId].pA = xT.clone(), this._previousTransformationMatrices[cT.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), kT.skeleton && this._copyBonesTransformationMatrices(kT.skeleton.getTransformMatrices(kT), this._previousBonesTransformationMatrices[cT.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (kT, cT, lT) => {
          if ((lT || 0 === cT) && kT.kF)
            for (let MT = 0; MT < kT.kF.length; ++MT) {
              const cT = kT.kF[MT],
                lT = cT.wv(),
                KT = cT.getRenderingMesh();
              if (!lT) continue;
              const OT = KT._getInstancesRenderList(cT._id, !!cT.getReplacementMesh()),
                yT = TT.getCaps().instancedArrays && (null !== OT.visibleInstances[cT._id] || KT.hasThinInstances);
              if (!this.isReady(cT, yT)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (kT, cT, lT, MT) => {
          let KT;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.Dv().bindAttachments(this._attachmentsFromPrePass)
          }
          if (MT.length) {
            for (TT.setColorWrite(!1), KT = 0; KT < MT.length; KT++) NT(MT.data[KT]);
            TT.setColorWrite(!0)
          }
          for (KT = 0; KT < kT.length; KT++) NT(kT.data[KT]);
          for (TT.setDepthWrite(!1), KT = 0; KT < cT.length; KT++) NT(cT.data[KT]);
          if (this.renderTransparentMeshes)
            for (KT = 0; KT < lT.length; KT++) NT(lT.data[KT]);
          TT.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const TT = this._scene.Dv();
        return {
          width: Math.max(1, Math.floor(TT.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(TT.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(TT, kT) {
        for (let cT = 0; cT < TT.length; cT++) kT[cT] = TT[cT];
        return kT
      }
    }
    Lk.ForceGLSL = !1, Lk.DEPTH_TEXTURE_TYPE = 0, Lk.NORMAL_TEXTURE_TYPE = 1, Lk.POSITION_TEXTURE_TYPE = 2, Lk.VELOCITY_TEXTURE_TYPE = 3, Lk.REFLECTIVITY_TEXTURE_TYPE = 4, Lk.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, Lk.VELOCITY_LINEAR_TEXTURE_TYPE = 6, Lk.IRRADIANCE_TEXTURE_TYPE = 7, Lk.OBJECT_ID_TEXTURE_TYPE = 8, Lk.MESH_BLEND_TAG_TEXTURE_TYPE = 9, Lk._SceneComponentInitialization = TT => {
      throw (0, Nk.i)("GeometryBufferRendererSceneComponent")
    };
    var Rk = cT(36949);
    const gk = {
      effect: null,
      subMesh: null
    };

    function Uk(TT) {
      if ("number" === typeof TT) return 1;
      if (TT instanceof uT.i) return 2;
      if (TT instanceof uT.m || TT instanceof YT.c) return 3;
      if (TT instanceof uT.o || TT instanceof YT.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class Yk {
      populateVectorFromLinkedProperties(TT) {
        const kT = Uk(TT);
        for (const cT in this.linkedProperties) {
          const TT = this.linkedProperties[cT],
            lT = TT.numComponents;
          if (kT < lT || TT.targetUniformComponentOffset > kT - lT) return void(1 == lT ? bT.e.Error(`Float property ${TT.name} has an offset that is too large.`) : bT.e.Error(`Vector${lT} property ${TT.name} won't fit in Vector${kT} or has an offset that is too large.`));
          "number" === typeof TT.value ? Yk._tmpArray[TT.targetUniformComponentOffset] = TT.value : TT.value.toArray(Yk._tmpArray, TT.targetUniformComponentOffset)
        }
        TT.xkT(Yk._tmpArray)
      }
      constructor(TT, kT) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = TT, this.numComponents = kT
      }
    }
    Yk._tmpArray = [0, 0, 0, 0];
    class Bk {
      constructor(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          KT = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = TT, this.targetUniformName = cT, this.defaultValue = kT, this.value = kT, this.targetUniformComponentNum = lT, this.targetUniformComponentOffset = MT, this.requiredDefine = KT
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : Uk(this.defaultValue)
      }
    }
    class Wk {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(TT, kT, cT) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = TT, this.samplerPrefix = kT, this.textureDefine = cT
      }
    }
    class nk extends((0, tk.b)((0, vk.c)(dT.e))) {}
    class pk extends(function(TT) {
      return class extends TT {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(nk)) {}
    class ik extends((0, BT.g)(pk)) {
      constructor(TT) {
        super(TT), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class qk extends((0, hk.c)(nT.e)) {}
    let sk = (() => {
        var TT, kT, lT, MT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT, NT, QT, ST, DT, aT, FT, rT, PT, oT, HT, eT, GT, ZT, dT, LT, RT, gT, BT, nT, sT, Tk, kk, ck, lk, Mk, Kk, Ok, yk, fk, xk, vk, tk, hk, Nk, Qk, Sk, Dk, ak, Fk, wk, mk, bk, zk, Jk, Hk, ek, Gk, Vk, Ek, Zk, uk, Xk, dk, Rk, Uk, nk, pk, sk, Tc, kc, cc, lc, Mc, Kc, Oc, yc, fc, xc, Ic, Ac, Cc, jc, vc, tc, hc, Nc, Qc, Sc, Dc, ac, Fc, rc, Pc, wc, mc, bc, zc, Jc;
        let oc, Hc, ec, Gc, Vc, Ec, Zc, uc, Xc, dc, Lc, Rc, gc, Uc, Yc, Bc, Wc, nc, pc, ic, qc, sc, Tl, kl, cl, ll, Ml, Kl, Ol, yl, fl, xl, Il, Al, Cl, jl, vl, tl, hl, Nl, Ql, Sl, Dl, al, Fl, rl, Pl, wl, ml, bl, zl, Jl, ol, Hl, el, Gl, Vl, El, Zl, ul, Xl, dl, Ll, Rl, gl, Ul, Yl, Bl, Wl, nl, pl, il, ql, sl, TM, kM, cM, lM, MM, KM, OM, yM, fM, xM, IM, AM, CM, jM, vM, tM, hM, NM, QM, SM, DM, aM, FM, rM, PM, wM, mM, bM, zM, JM, oM, HM = qk,
          eM = [],
          GM = [],
          VM = [],
          EM = [],
          ZM = [],
          uM = [],
          XM = [],
          dM = [],
          LM = [],
          RM = [],
          gM = [],
          UM = [],
          YM = [],
          BM = [],
          WM = [],
          nM = [],
          pM = [],
          iM = [],
          qM = [],
          sM = [],
          TK = [],
          kK = [],
          cK = [],
          lK = [],
          MK = [],
          KK = [],
          OK = [],
          yK = [],
          fK = [],
          xK = [],
          IK = [],
          AK = [],
          CK = [],
          jK = [],
          vK = [],
          tK = [],
          hK = [],
          NK = [],
          QK = [],
          SK = [],
          DK = [],
          aK = [],
          FK = [],
          rK = [],
          PK = [],
          wK = [],
          mK = [],
          bK = [],
          zK = [],
          JK = [],
          oK = [],
          HK = [],
          eK = [],
          GK = [],
          VK = [],
          EK = [],
          ZK = [],
          uK = [],
          XK = [],
          dK = [],
          LK = [],
          RK = [],
          gK = [],
          UK = [],
          YK = [],
          BK = [],
          WK = [],
          nK = [],
          pK = [],
          iK = [],
          qK = [],
          sK = [],
          TO = [],
          kO = [],
          cO = [],
          lO = [],
          MO = [],
          KO = [],
          OO = [],
          yO = [],
          fO = [],
          xO = [],
          IO = [],
          AO = [],
          CO = [],
          jO = [],
          vO = [],
          tO = [],
          hO = [],
          NO = [],
          QO = [],
          SO = [],
          DO = [],
          aO = [],
          FO = [],
          rO = [],
          PO = [],
          wO = [],
          mO = [],
          bO = [],
          zO = [],
          JO = [],
          oO = [],
          HO = [],
          eO = [],
          GO = [],
          VO = [],
          EO = [],
          ZO = [],
          uO = [],
          XO = [],
          dO = [],
          LO = [],
          RO = [],
          gO = [],
          UO = [],
          YO = [],
          BO = [],
          WO = [],
          nO = [],
          pO = [],
          iO = [],
          qO = [],
          sO = [],
          Ty = [],
          ky = [],
          cy = [],
          ly = [],
          My = [],
          Ky = [],
          Oy = [],
          yy = [],
          fy = [],
          xy = [],
          Iy = [],
          Ay = [],
          Cy = [],
          jy = [],
          vy = [],
          ty = [],
          hy = [],
          Ny = [],
          Qy = [],
          Sy = [],
          Dy = [],
          ay = [],
          Fy = [],
          ry = [],
          Py = [],
          wy = [],
          my = [],
          by = [],
          zy = [],
          Jy = [],
          oy = [],
          Hy = [],
          ey = [],
          Gy = [],
          Vy = [],
          Ey = [],
          Zy = [],
          uy = [],
          Xy = [],
          dy = [],
          Ly = [],
          Ry = [],
          gy = [],
          Uy = [],
          Yy = [],
          By = [],
          Wy = [],
          ny = [],
          py = [],
          iy = [],
          qy = [],
          sy = [],
          Tf = [],
          kf = [],
          lf = [],
          Mf = [],
          Kf = [],
          Of = [],
          yf = [],
          ff = [],
          xf = [],
          If = [],
          Af = [],
          Cf = [],
          jf = [],
          vf = [],
          tf = [],
          hf = [],
          Nf = [],
          Qf = [],
          Sf = [],
          Df = [],
          af = [],
          Ff = [],
          rf = [],
          Pf = [],
          wf = [],
          mf = [],
          bf = [],
          zf = [],
          Jf = [];
        return TT = class extends HM {
          get baseWeight() {
            return (0, wT.b)(this, kT, "f")
          }
          set baseWeight(TT) {
            (0, wT.d)(this, kT, TT, "f")
          }
          get baseWeightTexture() {
            return (0, wT.b)(this, lT, "f")
          }
          set baseWeightTexture(TT) {
            (0, wT.d)(this, lT, TT, "f")
          }
          get baseColor() {
            return (0, wT.b)(this, MT, "f")
          }
          set baseColor(TT) {
            (0, wT.d)(this, MT, TT, "f")
          }
          get baseColorTexture() {
            return (0, wT.b)(this, OT, "f")
          }
          set baseColorTexture(TT) {
            (0, wT.d)(this, OT, TT, "f")
          }
          get baseDiffuseRoughness() {
            return (0, wT.b)(this, yT, "f")
          }
          set baseDiffuseRoughness(TT) {
            (0, wT.d)(this, yT, TT, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, wT.b)(this, fT, "f")
          }
          set baseDiffuseRoughnessTexture(TT) {
            (0, wT.d)(this, fT, TT, "f")
          }
          get baseMetalness() {
            return (0, wT.b)(this, xT, "f")
          }
          set baseMetalness(TT) {
            (0, wT.d)(this, xT, TT, "f")
          }
          get baseMetalnessTexture() {
            return (0, wT.b)(this, IT, "f")
          }
          set baseMetalnessTexture(TT) {
            (0, wT.d)(this, IT, TT, "f")
          }
          get specularWeight() {
            return (0, wT.b)(this, AT, "f")
          }
          set specularWeight(TT) {
            (0, wT.d)(this, AT, TT, "f")
          }
          get specularWeightTexture() {
            return (0, wT.b)(this, CT, "f")
          }
          set specularWeightTexture(TT) {
            (0, wT.d)(this, CT, TT, "f")
          }
          get specularColor() {
            return (0, wT.b)(this, jT, "f")
          }
          set specularColor(TT) {
            (0, wT.d)(this, jT, TT, "f")
          }
          get specularColorTexture() {
            return (0, wT.b)(this, vT, "f")
          }
          set specularColorTexture(TT) {
            (0, wT.d)(this, vT, TT, "f")
          }
          get specularRoughness() {
            return (0, wT.b)(this, tT, "f")
          }
          set specularRoughness(TT) {
            (0, wT.d)(this, tT, TT, "f")
          }
          get specularRoughnessTexture() {
            return (0, wT.b)(this, hT, "f")
          }
          set specularRoughnessTexture(TT) {
            (0, wT.d)(this, hT, TT, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, wT.b)(this, NT, "f")
          }
          set specularRoughnessAnisotropy(TT) {
            (0, wT.d)(this, NT, TT, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, wT.b)(this, QT, "f")
          }
          set specularRoughnessAnisotropyTexture(TT) {
            (0, wT.d)(this, QT, TT, "f")
          }
          get specularIor() {
            return (0, wT.b)(this, ST, "f")
          }
          set specularIor(TT) {
            (0, wT.d)(this, ST, TT, "f")
          }
          get transmissionWeight() {
            return (0, wT.b)(this, DT, "f")
          }
          set transmissionWeight(TT) {
            (0, wT.d)(this, DT, TT, "f")
          }
          get transmissionWeightTexture() {
            return (0, wT.b)(this, aT, "f")
          }
          set transmissionWeightTexture(TT) {
            (0, wT.d)(this, aT, TT, "f")
          }
          get transmissionColor() {
            return (0, wT.b)(this, FT, "f")
          }
          set transmissionColor(TT) {
            (0, wT.d)(this, FT, TT, "f")
          }
          get transmissionColorTexture() {
            return (0, wT.b)(this, rT, "f")
          }
          set transmissionColorTexture(TT) {
            (0, wT.d)(this, rT, TT, "f")
          }
          get transmissionDepth() {
            return (0, wT.b)(this, PT, "f")
          }
          set transmissionDepth(TT) {
            (0, wT.d)(this, PT, TT, "f")
          }
          get transmissionDepthTexture() {
            return (0, wT.b)(this, oT, "f")
          }
          set transmissionDepthTexture(TT) {
            (0, wT.d)(this, oT, TT, "f")
          }
          get transmissionScatter() {
            return (0, wT.b)(this, HT, "f")
          }
          set transmissionScatter(TT) {
            (0, wT.d)(this, HT, TT, "f")
          }
          get transmissionScatterTexture() {
            return (0, wT.b)(this, eT, "f")
          }
          set transmissionScatterTexture(TT) {
            (0, wT.d)(this, eT, TT, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, wT.b)(this, GT, "f")
          }
          set transmissionScatterAnisotropy(TT) {
            (0, wT.d)(this, GT, TT, "f")
          }
          get transmissionDispersionScale() {
            return (0, wT.b)(this, ZT, "f")
          }
          set transmissionDispersionScale(TT) {
            (0, wT.d)(this, ZT, TT, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, wT.b)(this, dT, "f")
          }
          set transmissionDispersionScaleTexture(TT) {
            (0, wT.d)(this, dT, TT, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, wT.b)(this, LT, "f")
          }
          set transmissionDispersionAbbeNumber(TT) {
            (0, wT.d)(this, LT, TT, "f")
          }
          get subsurfaceWeight() {
            return (0, wT.b)(this, RT, "f")
          }
          set subsurfaceWeight(TT) {
            (0, wT.d)(this, RT, TT, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, wT.b)(this, gT, "f")
          }
          set subsurfaceWeightTexture(TT) {
            (0, wT.d)(this, gT, TT, "f")
          }
          get subsurfaceColor() {
            return (0, wT.b)(this, BT, "f")
          }
          set subsurfaceColor(TT) {
            (0, wT.d)(this, BT, TT, "f")
          }
          get subsurfaceColorTexture() {
            return (0, wT.b)(this, nT, "f")
          }
          set subsurfaceColorTexture(TT) {
            (0, wT.d)(this, nT, TT, "f")
          }
          get subsurfaceRadius() {
            return (0, wT.b)(this, sT, "f")
          }
          set subsurfaceRadius(TT) {
            (0, wT.d)(this, sT, TT, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, wT.b)(this, Tk, "f")
          }
          set subsurfaceRadiusScale(TT) {
            (0, wT.d)(this, Tk, TT, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, wT.b)(this, kk, "f")
          }
          set subsurfaceRadiusScaleTexture(TT) {
            (0, wT.d)(this, kk, TT, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, wT.b)(this, ck, "f")
          }
          set subsurfaceScatterAnisotropy(TT) {
            (0, wT.d)(this, ck, TT, "f")
          }
          get coatWeight() {
            return (0, wT.b)(this, lk, "f")
          }
          set coatWeight(TT) {
            (0, wT.d)(this, lk, TT, "f")
          }
          get coatWeightTexture() {
            return (0, wT.b)(this, Mk, "f")
          }
          set coatWeightTexture(TT) {
            (0, wT.d)(this, Mk, TT, "f")
          }
          get coatColor() {
            return (0, wT.b)(this, Kk, "f")
          }
          set coatColor(TT) {
            (0, wT.d)(this, Kk, TT, "f")
          }
          get coatColorTexture() {
            return (0, wT.b)(this, Ok, "f")
          }
          set coatColorTexture(TT) {
            (0, wT.d)(this, Ok, TT, "f")
          }
          get coatRoughness() {
            return (0, wT.b)(this, yk, "f")
          }
          set coatRoughness(TT) {
            (0, wT.d)(this, yk, TT, "f")
          }
          get coatRoughnessTexture() {
            return (0, wT.b)(this, fk, "f")
          }
          set coatRoughnessTexture(TT) {
            (0, wT.d)(this, fk, TT, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, wT.b)(this, xk, "f")
          }
          set coatRoughnessAnisotropy(TT) {
            (0, wT.d)(this, xk, TT, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, wT.b)(this, vk, "f")
          }
          set coatRoughnessAnisotropyTexture(TT) {
            (0, wT.d)(this, vk, TT, "f")
          }
          get coatIor() {
            return (0, wT.b)(this, tk, "f")
          }
          set coatIor(TT) {
            (0, wT.d)(this, tk, TT, "f")
          }
          get coatDarkening() {
            return (0, wT.b)(this, hk, "f")
          }
          set coatDarkening(TT) {
            (0, wT.d)(this, hk, TT, "f")
          }
          get coatDarkeningTexture() {
            return (0, wT.b)(this, Nk, "f")
          }
          set coatDarkeningTexture(TT) {
            (0, wT.d)(this, Nk, TT, "f")
          }
          get fuzzWeight() {
            return (0, wT.b)(this, Qk, "f")
          }
          set fuzzWeight(TT) {
            (0, wT.d)(this, Qk, TT, "f")
          }
          get fuzzWeightTexture() {
            return (0, wT.b)(this, Sk, "f")
          }
          set fuzzWeightTexture(TT) {
            (0, wT.d)(this, Sk, TT, "f")
          }
          get fuzzColor() {
            return (0, wT.b)(this, Dk, "f")
          }
          set fuzzColor(TT) {
            (0, wT.d)(this, Dk, TT, "f")
          }
          get fuzzColorTexture() {
            return (0, wT.b)(this, ak, "f")
          }
          set fuzzColorTexture(TT) {
            (0, wT.d)(this, ak, TT, "f")
          }
          get fuzzRoughness() {
            return (0, wT.b)(this, Fk, "f")
          }
          set fuzzRoughness(TT) {
            (0, wT.d)(this, Fk, TT, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, wT.b)(this, wk, "f")
          }
          set fuzzRoughnessTexture(TT) {
            (0, wT.d)(this, wk, TT, "f")
          }
          get geometryThinWalled() {
            return (0, wT.b)(this, mk, "f")
          }
          set geometryThinWalled(TT) {
            (0, wT.d)(this, mk, TT, "f")
          }
          get geometryNormalTexture() {
            return (0, wT.b)(this, bk, "f")
          }
          set geometryNormalTexture(TT) {
            (0, wT.d)(this, bk, TT, "f")
          }
          get geometryTangent() {
            return (0, wT.b)(this, zk, "f")
          }
          set geometryTangent(TT) {
            (0, wT.d)(this, zk, TT, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(TT) {
            this.geometryTangent = new uT.i(Math.cos(TT), Math.sin(TT))
          }
          get geometryTangentTexture() {
            return (0, wT.b)(this, Jk, "f")
          }
          set geometryTangentTexture(TT) {
            (0, wT.d)(this, Jk, TT, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, wT.b)(this, Hk, "f")
          }
          set geometryCoatNormalTexture(TT) {
            (0, wT.d)(this, Hk, TT, "f")
          }
          get geometryCoatTangent() {
            return (0, wT.b)(this, ek, "f")
          }
          set geometryCoatTangent(TT) {
            (0, wT.d)(this, ek, TT, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(TT) {
            this.geometryCoatTangent = new uT.i(Math.cos(TT), Math.sin(TT))
          }
          get geometryCoatTangentTexture() {
            return (0, wT.b)(this, Gk, "f")
          }
          set geometryCoatTangentTexture(TT) {
            (0, wT.d)(this, Gk, TT, "f")
          }
          get geometryOpacity() {
            return (0, wT.b)(this, Vk, "f")
          }
          set geometryOpacity(TT) {
            (0, wT.d)(this, Vk, TT, "f")
          }
          get geometryOpacityTexture() {
            return (0, wT.b)(this, Ek, "f")
          }
          set geometryOpacityTexture(TT) {
            (0, wT.d)(this, Ek, TT, "f")
          }
          get geometryThickness() {
            return (0, wT.b)(this, Zk, "f")
          }
          set geometryThickness(TT) {
            (0, wT.d)(this, Zk, TT, "f")
          }
          get geometryThicknessTexture() {
            return (0, wT.b)(this, uk, "f")
          }
          set geometryThicknessTexture(TT) {
            (0, wT.d)(this, uk, TT, "f")
          }
          get emissionLuminance() {
            return (0, wT.b)(this, Xk, "f")
          }
          set emissionLuminance(TT) {
            (0, wT.d)(this, Xk, TT, "f")
          }
          get emissionColor() {
            return (0, wT.b)(this, dk, "f")
          }
          set emissionColor(TT) {
            (0, wT.d)(this, dk, TT, "f")
          }
          get emissionColorTexture() {
            return (0, wT.b)(this, Rk, "f")
          }
          set emissionColorTexture(TT) {
            (0, wT.d)(this, Rk, TT, "f")
          }
          get thinFilmWeight() {
            return (0, wT.b)(this, Uk, "f")
          }
          set thinFilmWeight(TT) {
            (0, wT.d)(this, Uk, TT, "f")
          }
          get thinFilmWeightTexture() {
            return (0, wT.b)(this, nk, "f")
          }
          set thinFilmWeightTexture(TT) {
            (0, wT.d)(this, nk, TT, "f")
          }
          get thinFilmThickness() {
            return (0, wT.b)(this, pk, "f")
          }
          set thinFilmThickness(TT) {
            (0, wT.d)(this, pk, TT, "f")
          }
          get thinFilmThicknessMin() {
            return (0, wT.b)(this, sk, "f")
          }
          set thinFilmThicknessMin(TT) {
            (0, wT.d)(this, sk, TT, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, wT.b)(this, Tc, "f")
          }
          set thinFilmThicknessTexture(TT) {
            (0, wT.d)(this, Tc, TT, "f")
          }
          get thinFilmIor() {
            return (0, wT.b)(this, kc, "f")
          }
          set thinFilmIor(TT) {
            (0, wT.d)(this, kc, TT, "f")
          }
          get ambientOcclusionTexture() {
            return (0, wT.b)(this, cc, "f")
          }
          set ambientOcclusionTexture(TT) {
            (0, wT.d)(this, cc, TT, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(TT) {
            this._sssQuality !== TT && (this._sssQuality = TT, this.pTT(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(TT) {
            this._sssIrradianceTexture !== TT && (this._sssIrradianceTexture = TT, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(TT) {
            this._sssDepthTexture !== TT && (this._sssDepthTexture = TT, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, wT.b)(this, lc, "f")
          }
          set directIntensity(TT) {
            (0, wT.d)(this, lc, TT, "f")
          }
          get environmentIntensity() {
            return (0, wT.b)(this, Mc, "f")
          }
          set environmentIntensity(TT) {
            (0, wT.d)(this, Mc, TT, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, wT.b)(this, Kc, "f")
          }
          set useSpecularWeightFromTextureAlpha(TT) {
            (0, wT.d)(this, Kc, TT, "f")
          }
          get forceAlphaTest() {
            return (0, wT.b)(this, Oc, "f")
          }
          set forceAlphaTest(TT) {
            (0, wT.d)(this, Oc, TT, "f")
          }
          get alphaCutOff() {
            return (0, wT.b)(this, yc, "f")
          }
          set alphaCutOff(TT) {
            (0, wT.d)(this, yc, TT, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, wT.b)(this, fc, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(TT) {
            (0, wT.d)(this, fc, TT, "f")
          }
          get useAmbientInGrayScale() {
            return (0, wT.b)(this, xc, "f")
          }
          set useAmbientInGrayScale(TT) {
            (0, wT.d)(this, xc, TT, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(YT.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === KT.e.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(TT) {
            TT !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? KT.e.LIGHTFALLOFF_PHYSICAL : KT.e.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === KT.e.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(TT) {
            TT !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? KT.e.LIGHTFALLOFF_GLTF : KT.e.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, wT.b)(this, Ic, "f")
          }
          set useObjectSpaceNormalMap(TT) {
            (0, wT.d)(this, Ic, TT, "f")
          }
          get useParallax() {
            return (0, wT.b)(this, Ac, "f")
          }
          set useParallax(TT) {
            (0, wT.d)(this, Ac, TT, "f")
          }
          get useParallaxOcclusion() {
            return (0, wT.b)(this, Cc, "f")
          }
          set useParallaxOcclusion(TT) {
            (0, wT.d)(this, Cc, TT, "f")
          }
          get parallaxScaleBias() {
            return (0, wT.b)(this, jc, "f")
          }
          set parallaxScaleBias(TT) {
            (0, wT.d)(this, jc, TT, "f")
          }
          get disableLighting() {
            return (0, wT.b)(this, vc, "f")
          }
          set disableLighting(TT) {
            (0, wT.d)(this, vc, TT, "f")
          }
          get forceIrradianceInFragment() {
            return (0, wT.b)(this, tc, "f")
          }
          set forceIrradianceInFragment(TT) {
            (0, wT.d)(this, tc, TT, "f")
          }
          get maxSimultaneousLights() {
            return (0, wT.b)(this, hc, "f")
          }
          set maxSimultaneousLights(TT) {
            (0, wT.d)(this, hc, TT, "f")
          }
          get invertNormalMapX() {
            return (0, wT.b)(this, Nc, "f")
          }
          set invertNormalMapX(TT) {
            (0, wT.d)(this, Nc, TT, "f")
          }
          get invertNormalMapY() {
            return (0, wT.b)(this, Qc, "f")
          }
          set invertNormalMapY(TT) {
            (0, wT.d)(this, Qc, TT, "f")
          }
          get twoSidedLighting() {
            return (0, wT.b)(this, Sc, "f")
          }
          set twoSidedLighting(TT) {
            (0, wT.d)(this, Sc, TT, "f")
          }
          get useAlphaFresnel() {
            return (0, wT.b)(this, Dc, "f")
          }
          set useAlphaFresnel(TT) {
            (0, wT.d)(this, Dc, TT, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, wT.b)(this, ac, "f")
          }
          set useLinearAlphaFresnel(TT) {
            (0, wT.d)(this, ac, TT, "f")
          }
          get environmentBRDFTexture() {
            return (0, wT.b)(this, Fc, "f")
          }
          set environmentBRDFTexture(TT) {
            (0, wT.d)(this, Fc, TT, "f")
          }
          get forceNormalForward() {
            return (0, wT.b)(this, rc, "f")
          }
          set forceNormalForward(TT) {
            (0, wT.d)(this, rc, TT, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, wT.b)(this, Pc, "f")
          }
          set enableSpecularAntiAliasing(TT) {
            (0, wT.d)(this, Pc, TT, "f")
          }
          get useHorizonOcclusion() {
            return (0, wT.b)(this, wc, "f")
          }
          set useHorizonOcclusion(TT) {
            (0, wT.d)(this, wc, TT, "f")
          }
          get useRadianceOcclusion() {
            return (0, wT.b)(this, mc, "f")
          }
          set useRadianceOcclusion(TT) {
            (0, wT.d)(this, mc, TT, "f")
          }
          get unlit() {
            return (0, wT.b)(this, bc, "f")
          }
          set unlit(TT) {
            (0, wT.d)(this, bc, TT, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, wT.b)(this, zc, "f")
          }
          set applyDecalMapAfterDetailMap(TT) {
            (0, wT.d)(this, zc, TT, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(TT) {
            this._backgroundRefractionTexture = TT, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(TT) {
            this._refractionHighQualityBlur !== TT && (this._refractionHighQualityBlur = TT, this.pTT(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(TT) {
            this._realTimeFiltering = TT, this.pTT(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(TT) {
            this._realTimeFilteringQuality = TT, this.pTT(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(TT) {
            this._fuzzSampleNumber = TT, this.pTT(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, wT.b)(this, Jc, "f")
          }
          set debugMode(TT) {
            (0, wT.d)(this, Jc, TT, "f")
          }
          constructor(cT, mT) {
            super(cT, mT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || TT.ForceGLSL), kT.set(this, ((0, wT.h)(this, eM), (0, wT.h)(this, GM, void 0))), this._baseWeight = ((0, wT.h)(this, VM), new Bk("base_weight", 1, "vBaseWeight", 1)), lT.set(this, (0, wT.h)(this, EM, void 0)), this._baseWeightTexture = ((0, wT.h)(this, ZM), new Wk("base_weight", "baseWeight", "BASE_WEIGHT")), MT.set(this, (0, wT.h)(this, uM, void 0)), this._baseColor = ((0, wT.h)(this, XM), new Bk("base_color", YT.c.White(), "vBaseColor", 4)), OT.set(this, (0, wT.h)(this, dM, void 0)), this._baseColorTexture = ((0, wT.h)(this, LM), new Wk("base_color", "baseColor", "BASE_COLOR")), yT.set(this, (0, wT.h)(this, RM, void 0)), this._baseDiffuseRoughness = ((0, wT.h)(this, gM), new Bk("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), fT.set(this, (0, wT.h)(this, UM, void 0)), this._baseDiffuseRoughnessTexture = ((0, wT.h)(this, YM), new Wk("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), xT.set(this, (0, wT.h)(this, BM, void 0)), this._baseMetalness = ((0, wT.h)(this, WM), new Bk("base_metalness", 0, "vReflectanceInfo", 4, 0)), IT.set(this, (0, wT.h)(this, nM, void 0)), this._baseMetalnessTexture = ((0, wT.h)(this, pM), new Wk("base_metalness", "baseMetalness", "BASE_METALNESS")), AT.set(this, (0, wT.h)(this, iM, void 0)), this._specularWeight = ((0, wT.h)(this, qM), new Bk("specular_weight", 1, "vReflectanceInfo", 4, 3)), CT.set(this, (0, wT.h)(this, sM, void 0)), this._specularWeightTexture = ((0, wT.h)(this, TK), new Wk("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), jT.set(this, (0, wT.h)(this, kK, void 0)), this._specularColor = ((0, wT.h)(this, cK), new Bk("specular_color", YT.c.White(), "vSpecularColor", 4)), vT.set(this, (0, wT.h)(this, lK, void 0)), this._specularColorTexture = ((0, wT.h)(this, MK), new Wk("specular_color", "specularColor", "SPECULAR_COLOR")), tT.set(this, (0, wT.h)(this, KK, void 0)), this._specularRoughness = ((0, wT.h)(this, OK), new Bk("specular_roughness", .3, "vReflectanceInfo", 4, 1)), hT.set(this, (0, wT.h)(this, yK, void 0)), this._specularRoughnessTexture = ((0, wT.h)(this, fK), new Wk("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), NT.set(this, (0, wT.h)(this, xK, void 0)), this._specularRoughnessAnisotropy = ((0, wT.h)(this, IK), new Bk("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), QT.set(this, (0, wT.h)(this, AK, void 0)), this._specularRoughnessAnisotropyTexture = ((0, wT.h)(this, CK), new Wk("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), ST.set(this, (0, wT.h)(this, jK, void 0)), this._specularIor = ((0, wT.h)(this, vK), new Bk("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), DT.set(this, (0, wT.h)(this, tK, void 0)), this._transmissionWeight = ((0, wT.h)(this, hK), new Bk("transmission_weight", 0, "vTransmissionWeight", 1)), aT.set(this, (0, wT.h)(this, NK, void 0)), this._transmissionWeightTexture = ((0, wT.h)(this, QK), new Wk("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), FT.set(this, (0, wT.h)(this, SK, void 0)), this._transmissionColor = ((0, wT.h)(this, DK), new Bk("transmission_color", YT.c.White(), "vTransmissionColor", 3, 0)), rT.set(this, (0, wT.h)(this, aK, void 0)), this._transmissionColorTexture = ((0, wT.h)(this, FK), new Wk("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), PT.set(this, (0, wT.h)(this, rK, void 0)), this._transmissionDepth = ((0, wT.h)(this, PK), new Bk("transmission_depth", 0, "vTransmissionDepth", 1, 0)), oT.set(this, (0, wT.h)(this, wK, void 0)), this._transmissionDepthTexture = ((0, wT.h)(this, mK), new Wk("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), HT.set(this, (0, wT.h)(this, bK, void 0)), this._transmissionScatter = ((0, wT.h)(this, zK), new Bk("transmission_scatter", YT.c.Black(), "vTransmissionScatter", 3, 0)), eT.set(this, (0, wT.h)(this, JK, void 0)), this._transmissionScatterTexture = ((0, wT.h)(this, oK), new Wk("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), GT.set(this, (0, wT.h)(this, HK, void 0)), this._transmissionScatterAnisotropy = ((0, wT.h)(this, eK), new Bk("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), ZT.set(this, (0, wT.h)(this, GK, void 0)), this._transmissionDispersionScale = ((0, wT.h)(this, VK), new Bk("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), dT.set(this, (0, wT.h)(this, EK, void 0)), this._transmissionDispersionScaleTexture = ((0, wT.h)(this, ZK), new Wk("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), LT.set(this, (0, wT.h)(this, uK, void 0)), this._transmissionDispersionAbbeNumber = ((0, wT.h)(this, XK), new Bk("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), RT.set(this, (0, wT.h)(this, dK, void 0)), this._subsurfaceWeight = ((0, wT.h)(this, LK), new Bk("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), gT.set(this, (0, wT.h)(this, RK, void 0)), this._subsurfaceWeightTexture = ((0, wT.h)(this, gK), new Wk("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), BT.set(this, (0, wT.h)(this, UK, void 0)), this._subsurfaceColor = ((0, wT.h)(this, YK), new Bk("subsurface_color", new YT.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), nT.set(this, (0, wT.h)(this, BK, void 0)), this._subsurfaceColorTexture = ((0, wT.h)(this, WK), new Wk("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), sT.set(this, (0, wT.h)(this, nK, void 0)), this._subsurfaceRadius = ((0, wT.h)(this, pK), new Bk("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), Tk.set(this, (0, wT.h)(this, iK, void 0)), this._subsurfaceRadiusScale = ((0, wT.h)(this, qK), new Bk("subsurface_radius_scale", new YT.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), kk.set(this, (0, wT.h)(this, sK, void 0)), this._subsurfaceRadiusScaleTexture = ((0, wT.h)(this, TO), new Wk("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), ck.set(this, (0, wT.h)(this, kO, void 0)), this._subsurfaceScatterAnisotropy = ((0, wT.h)(this, cO), new Bk("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), lk.set(this, (0, wT.h)(this, lO, void 0)), this._coatWeight = ((0, wT.h)(this, MO), new Bk("coat_weight", 0, "vCoatWeight", 1, 0)), Mk.set(this, (0, wT.h)(this, KO, void 0)), this._coatWeightTexture = ((0, wT.h)(this, OO), new Wk("coat_weight", "coatWeight", "COAT_WEIGHT")), Kk.set(this, (0, wT.h)(this, yO, void 0)), this._coatColor = ((0, wT.h)(this, fO), new Bk("coat_color", YT.c.White(), "vCoatColor", 3, 0)), Ok.set(this, (0, wT.h)(this, xO, void 0)), this._coatColorTexture = ((0, wT.h)(this, IO), new Wk("coat_color", "coatColor", "COAT_COLOR")), yk.set(this, (0, wT.h)(this, AO, void 0)), this._coatRoughness = ((0, wT.h)(this, CO), new Bk("coat_roughness", 0, "vCoatRoughness", 1, 0)), fk.set(this, (0, wT.h)(this, jO, void 0)), this._coatRoughnessTexture = ((0, wT.h)(this, vO), new Wk("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), xk.set(this, (0, wT.h)(this, tO, void 0)), this._coatRoughnessAnisotropy = ((0, wT.h)(this, hO), new Bk("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), vk.set(this, (0, wT.h)(this, NO, void 0)), this._coatRoughnessAnisotropyTexture = ((0, wT.h)(this, QO), new Wk("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), tk.set(this, (0, wT.h)(this, SO, void 0)), this._coatIor = ((0, wT.h)(this, DO), new Bk("coat_ior", 1.5, "vCoatIor", 1, 0)), hk.set(this, (0, wT.h)(this, aO, void 0)), this._coatDarkening = ((0, wT.h)(this, FO), new Bk("coat_darkening", 1, "vCoatDarkening", 1, 0)), Nk.set(this, (0, wT.h)(this, rO, void 0)), this._coatDarkeningTexture = ((0, wT.h)(this, PO), new Wk("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, Qk.set(this, (0, wT.h)(this, wO, void 0)), this._fuzzWeight = ((0, wT.h)(this, mO), new Bk("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Sk.set(this, (0, wT.h)(this, bO, void 0)), this._fuzzWeightTexture = ((0, wT.h)(this, zO), new Wk("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), Dk.set(this, (0, wT.h)(this, JO, void 0)), this._fuzzColor = ((0, wT.h)(this, oO), new Bk("fuzz_color", YT.c.White(), "vFuzzColor", 3, 0)), ak.set(this, (0, wT.h)(this, HO, void 0)), this._fuzzColorTexture = ((0, wT.h)(this, eO), new Wk("fuzz_color", "fuzzColor", "FUZZ_COLOR")), Fk.set(this, (0, wT.h)(this, GO, void 0)), this._fuzzRoughness = ((0, wT.h)(this, VO), new Bk("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), wk.set(this, (0, wT.h)(this, EO, void 0)), this._fuzzRoughnessTexture = ((0, wT.h)(this, ZO), new Wk("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), mk.set(this, (0, wT.h)(this, uO, void 0)), this._geometryThinWalled = ((0, wT.h)(this, XO), new Bk("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), bk.set(this, (0, wT.h)(this, dO, void 0)), this._geometryNormalTexture = ((0, wT.h)(this, LO), new Wk("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), zk.set(this, (0, wT.h)(this, RO, void 0)), this._geometryTangent = ((0, wT.h)(this, gO), new Bk("geometry_tangent", new uT.i(1, 0), "vSpecularAnisotropy", 3, 0)), Jk.set(this, (0, wT.h)(this, UO, void 0)), this._geometryTangentTexture = ((0, wT.h)(this, YO), new Wk("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), Hk.set(this, (0, wT.h)(this, BO, void 0)), this._geometryCoatNormalTexture = ((0, wT.h)(this, WO), new Wk("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), ek.set(this, (0, wT.h)(this, nO, void 0)), this._geometryCoatTangent = ((0, wT.h)(this, pO), new Bk("geometry_coat_tangent", new uT.i(1, 0), "vGeometryCoatTangent", 2, 0)), Gk.set(this, (0, wT.h)(this, iO, void 0)), this._geometryCoatTangentTexture = ((0, wT.h)(this, qO), new Wk("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), Vk.set(this, (0, wT.h)(this, sO, void 0)), this._geometryOpacity = ((0, wT.h)(this, Ty), new Bk("geometry_opacity", 1, "vBaseColor", 4, 3)), Ek.set(this, (0, wT.h)(this, ky, void 0)), this._geometryOpacityTexture = ((0, wT.h)(this, cy), new Wk("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Zk.set(this, (0, wT.h)(this, ly, void 0)), this._geometryThickness = ((0, wT.h)(this, My), new Bk("geometry_thickness", 0, "vGeometryThickness", 1, 0)), uk.set(this, (0, wT.h)(this, Ky, void 0)), this._geometryThicknessTexture = ((0, wT.h)(this, Oy), new Wk("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), Xk.set(this, (0, wT.h)(this, yy, void 0)), this._emissionLuminance = ((0, wT.h)(this, fy), new Bk("emission_luminance", 1, "vLightingIntensity", 4, 1)), dk.set(this, (0, wT.h)(this, xy, void 0)), this._emissionColor = ((0, wT.h)(this, Iy), new Bk("emission_color", YT.c.Black(), "vEmissionColor", 3)), Rk.set(this, (0, wT.h)(this, Ay, void 0)), this._emissionColorTexture = ((0, wT.h)(this, Cy), new Wk("emission_color", "emissionColor", "EMISSION_COLOR")), Uk.set(this, (0, wT.h)(this, jy, void 0)), this._thinFilmWeight = ((0, wT.h)(this, vy), new Bk("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), nk.set(this, (0, wT.h)(this, ty, void 0)), this._thinFilmWeightTexture = ((0, wT.h)(this, hy), new Wk("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), pk.set(this, (0, wT.h)(this, Ny, void 0)), this._thinFilmThickness = ((0, wT.h)(this, Qy), new Bk("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), sk.set(this, (0, wT.h)(this, Sy, void 0)), this._thinFilmThicknessMin = ((0, wT.h)(this, Dy), new Bk("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), Tc.set(this, (0, wT.h)(this, ay, void 0)), this._thinFilmThicknessTexture = ((0, wT.h)(this, Fy), new Wk("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), kc.set(this, (0, wT.h)(this, ry, void 0)), this._thinFilmIor = ((0, wT.h)(this, Py), new Bk("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), cc.set(this, (0, wT.h)(this, wy, void 0)), this._ambientOcclusionTexture = ((0, wT.h)(this, my), new Wk("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = TT.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, lc.set(this, (0, wT.h)(this, by, 1)), Mc.set(this, ((0, wT.h)(this, zy), (0, wT.h)(this, Jy, 1))), Kc.set(this, ((0, wT.h)(this, oy), (0, wT.h)(this, Hy, !1))), Oc.set(this, ((0, wT.h)(this, ey), (0, wT.h)(this, Gy, !1))), yc.set(this, ((0, wT.h)(this, Vy), (0, wT.h)(this, Ey, .4))), fc.set(this, ((0, wT.h)(this, Zy), (0, wT.h)(this, uy, !1))), xc.set(this, ((0, wT.h)(this, Xy), (0, wT.h)(this, dy, !1))), Ic.set(this, ((0, wT.h)(this, Ly), (0, wT.h)(this, Ry, !1))), Ac.set(this, ((0, wT.h)(this, gy), (0, wT.h)(this, Uy, !1))), Cc.set(this, ((0, wT.h)(this, Yy), (0, wT.h)(this, By, !1))), jc.set(this, ((0, wT.h)(this, Wy), (0, wT.h)(this, ny, .05))), vc.set(this, ((0, wT.h)(this, py), (0, wT.h)(this, iy, !1))), tc.set(this, ((0, wT.h)(this, qy), (0, wT.h)(this, sy, !1))), hc.set(this, ((0, wT.h)(this, Tf), (0, wT.h)(this, kf, 4))), Nc.set(this, ((0, wT.h)(this, lf), (0, wT.h)(this, Mf, !1))), Qc.set(this, ((0, wT.h)(this, Kf), (0, wT.h)(this, Of, !1))), Sc.set(this, ((0, wT.h)(this, yf), (0, wT.h)(this, ff, !1))), Dc.set(this, ((0, wT.h)(this, xf), (0, wT.h)(this, If, !1))), ac.set(this, ((0, wT.h)(this, Af), (0, wT.h)(this, Cf, !1))), Fc.set(this, ((0, wT.h)(this, jf), (0, wT.h)(this, vf, null))), rc.set(this, ((0, wT.h)(this, tf), (0, wT.h)(this, hf, !1))), Pc.set(this, ((0, wT.h)(this, Nf), (0, wT.h)(this, Qf, !1))), wc.set(this, ((0, wT.h)(this, Sf), (0, wT.h)(this, Df, !0))), mc.set(this, ((0, wT.h)(this, af), (0, wT.h)(this, Ff, !0))), bc.set(this, ((0, wT.h)(this, rf), (0, wT.h)(this, Pf, !1))), zc.set(this, ((0, wT.h)(this, wf), (0, wT.h)(this, mf, !1))), this._lightingInfos = ((0, wT.h)(this, bf), new uT.o(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = KT.e.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new zT.g(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Jc.set(this, (0, wT.h)(this, zf, 0)), this.debugLimit = ((0, wT.h)(this, Jf), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = KT.e.MATERIAL_OPAQUE, this.NJ() && !this.NJ()?.Dv().isWebGPU && this.NJ().Dv().qv < 2 && bT.e.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), TT._noiseTextures[this.NJ().uniqueId] || (TT._noiseTextures[this.NJ().uniqueId] = new JT.f(Pk.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.NJ(), !1, !0, 1), this.NJ().QJ.addOnce((() => {
              TT._noiseTextures[this.NJ().uniqueId]?.dispose(), delete TT._noiseTextures[this.NJ().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), pT.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), pT.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = ET(this.NJ()), this._environmentFuzzBRDFTexture = VT(this.NJ()), this.prePassConfiguration = new UT.c, this._propertyList = {};
            for (const TT of Object.getOwnPropertyNames(this)) {
              const kT = this[TT];
              kT instanceof Bk && (this._propertyList[TT] = kT)
            }
            Object.keys(this._propertyList).forEach((TT => {
              const kT = this._propertyList[TT];
              let cT = this._uniformsList[kT.targetUniformName];
              cT ? cT.numComponents !== kT.targetUniformComponentNum ? bT.e.Error(`Uniform ${kT.targetUniformName} already exists of size ${cT.numComponents}, but trying to set it to ${kT.targetUniformComponentNum}.`) : cT.requiredDefine !== kT.requiredDefine && (cT.requiredDefine = void 0) : (cT = new Yk(kT.targetUniformName, kT.targetUniformComponentNum), cT.requiredDefine = kT.requiredDefine, this._uniformsList[kT.targetUniformName] = cT), "" === cT.firstLinkedKey && (cT.firstLinkedKey = kT.name), cT.linkedProperties[kT.name] = kT
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const TT of Object.getOwnPropertyNames(this)) {
              const kT = this[TT];
              kT instanceof Wk && (this._samplersList[TT] = kT)
            }
            for (const TT in this._samplersList) {
              const kT = this._samplersList[TT].textureDefine;
              this._samplerDefines[kT] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[kT + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[kT + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(pT.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(pT.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(TT) {
            this._transparencyMode !== TT && (this._transparencyMode = TT, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== KT.e.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(TT) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(TT)
          }
          clone(kT) {
            let cT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const MT = rk.d.Clone((() => new TT(kT, this.NJ())), this, {
              cloneTexturesOnlyOnce: cT
            });
            return MT.id = kT, MT.name = kT, this.stencil.copyTo(MT.stencil), this._clonePlugins(MT, lT), MT
          }
          serialize() {
            const TT = super.serialize();
            return TT.customType = "BABYLON.OpenPBRMaterial", TT
          }
          static Parse(kT, cT, lT) {
            const MT = rk.d.Parse((() => new TT(kT.name, cT)), kT, cT, lT);
            return kT.stencil && MT.stencil.parse(kT.stencil, cT, lT), KT.e._ParsePlugins(kT, MT, cT, lT), MT
          }
          forceCompilation(TT, kT, cT) {
            const lT = {
              clipPlane: !1,
              useInstances: !1,
              ...cT
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const cT = new ik({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                MT = this._prepareEffect(TT, TT, cT, void 0, void 0, lT.useInstances, lT.clipPlane);
              this._onEffectCreatedObservable && (gk.effect = MT, gk.subMesh = null, this._onEffectCreatedObservable.notifyObservers(gk)), MT.isReady() ? kT && kT(this) : MT.onCompileObservable.add((() => {
                kT && kT(this)
              }))
            })()
          }
          isReadyForSubMesh(kT, cT, lT) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const MT = cT._drawWrapper;
            if (MT.effect && this.isFrozen && MT._wasPreviouslyReady && MT._wasPreviouslyUsingInstances === lT) return !0;
            cT.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), cT.materialDefines = new ik({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const KT = cT.materialDefines;
            if (this._isReadyForSubMesh(cT)) return !0;
            const OT = this.NJ(),
              yT = OT.Dv();
            if (KT._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, OT.texturesEnabled)) {
              for (const TT in this._samplersList) {
                const kT = this._samplersList[TT];
                if (kT.value && !kT.value.isReadyOrNotBlocking()) return !1
              }
              const kT = this._getRadianceTexture();
              if (kT && pT.b.ReflectionTextureEnabled) {
                if (!kT.isReadyOrNotBlocking()) return !1;
                if (kT.irradianceTexture) {
                  if (!kT.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!kT.sphericalPolynomial && kT.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && pT.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && pT.b.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && pT.b.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (TT._noiseTextures[OT.uniqueId] && !TT._noiseTextures[OT.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = KT, this._eventInfo.subMesh = cT, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (KT._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (KT.AREALIGHTUSED)
              for (let TT = 0; TT < kT.lightSources.length; TT++)
                if (!kT.lightSources[TT]._isReady()) return !1;
            if (yT.getCaps().standardDerivatives || kT.isVerticesDataPresent(XT.l.NormalKind) || (kT.createNormals(!0), bT.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + kT.name)), !(0, qT.d)(OT, kT, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const fT = cT.effect,
              xT = KT._areLightsDisposed,
              IT = this._prepareEffect(kT, cT.getRenderingMesh(), KT, this.onCompiled, this.onError, lT, null);
            let AT = !1;
            if (IT)
              if (this._onEffectCreatedObservable && (gk.effect = IT, gk.subMesh = cT, this._onEffectCreatedObservable.notifyObservers(gk)), this.allowShaderHotSwapping && fT && !IT.isReady()) {
                if (KT.markAsUnprocessed(), AT = this.isFrozen, xT) return KT._areLightsDisposed = !0, !1
              } else OT.resetCachedMaterial(), cT.setEffect(IT, KT, this._materialContext);
            return !(!cT.effect || !cT.effect.isReady()) && (KT._renderId = OT.getRenderId(), MT._wasPreviouslyReady = !AT, MT._wasPreviouslyUsingInstances = !!lT, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const TT = this._uniformBuffer;
            TT.addUniform("vTangentSpaceParams", 2), TT.addUniform("vLightingIntensity", 4), TT.addUniform("pointSize", 1), TT.addUniform("vDebugMode", 2), TT.addUniform("renderTargetSize", 2), TT.addUniform("cameraInfo", 4), TT.addUniform("vTextureRepetitionHexTilingParams", 4), TT.addUniform("backgroundRefractionMatrix", 16), TT.addUniform("vBackgroundRefractionInfos", 3), (0, qT.jb)(TT, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((kT => {
              TT.addUniform(kT.name, kT.numComponents)
            })), Object.values(this._samplersList).forEach((kT => {
              TT.addUniform(kT.samplerInfoName, 2), TT.addUniform(kT.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(TT, kT, cT, lT) {
            if (0 === this.geometryThickness) TT.updateFloat("vGeometryThickness", 0);
            else {
              lT.getRenderingMesh().getWorldMatrix().decompose(uT.h.Fv[0]);
              const kT = Math.max(Math.abs(uT.h.Fv[0].x), Math.abs(uT.h.Fv[0].y), Math.abs(uT.h.Fv[0].z));
              TT.updateFloat("vGeometryThickness", this.geometryThickness * kT)
            }
          }
          bindForSubMesh(kT, cT, lT) {
            const MT = this.NJ(),
              KT = lT.materialDefines;
            if (!KT) return;
            const OT = lT.effect;
            if (!OT) return;
            this._activeEffect = OT, cT.getMeshUniformBuffer().bindToEffect(OT, "Mesh"), cT.transferToEffect(kT);
            const yT = MT.Dv();
            this._uniformBuffer.bindToEffect(OT, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, MT, cT, kT, this.isFrozen), jk.d.Bind(yT.currentRenderPassId, this._activeEffect, cT, kT, this);
            const fT = MT.activeCamera;
            fT ? this._uniformBuffer.updateFloat4("cameraInfo", fT.minZ, fT.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const xT = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", xT[0], xT[1], xT[2], xT[3]), this._eventInfo.subMesh = lT, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), KT.OBJECTSPACE_NORMALMAP && (kT.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const IT = this._mustRebind(MT, OT, lT, cT.visibility),
              AT = yT._features.needToAlwaysBindUniformBuffers;
            (0, qT.e)(cT, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Ak.c)(this._activeEffect, this._vertexPullingMetadata);
            const CT = this._uniformBuffer;
            if (IT) {
              this.bindViewProjection(OT);
              const kT = this._getRadianceTexture();
              if (!CT.useUbo || !this.isFrozen || !CT.isSync || lT._drawWrapper._forceRebindOnNextCall) {
                if (MT.texturesEnabled) {
                  for (const TT in this._samplersList) {
                    const kT = this._samplersList[TT];
                    kT.value && (CT.updateFloat2(kT.samplerInfoName, kT.value.coordinatesIndex, kT.value.level), (0, qT.v)(kT.value, CT, kT.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (MT._mirroredCameraPosition ? CT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : CT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, qT.j)(MT, KT, CT, YT.c.White(), kT, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && CT.updateFloat("pointSize", this.pointSize);
                const TT = this._uniformsArray;
                for (let kT = 0, cT = TT.length; kT < cT; kT++) {
                  const cT = TT[kT];
                  (void 0 === cT.requiredDefine || KT[cT.requiredDefine]) && (4 === cT.numComponents ? (cT.populateVectorFromLinkedProperties(uT.h.Vector4[0]), CT.updateVector4(cT.name, uT.h.Vector4[0])) : 3 === cT.numComponents ? (cT.populateVectorFromLinkedProperties(uT.h.Fv[0]), CT.updateVector3(cT.name, uT.h.Fv[0])) : 2 === cT.numComponents ? (cT.populateVectorFromLinkedProperties(uT.h.Vector2[0]), CT.updateFloat2(cT.name, uT.h.Vector2[0].x, uT.h.Vector2[0].y)) : 1 === cT.numComponents && CT.updateFloat(cT.name, cT.linkedProperties[cT.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * MT.environmentIntensity, this._lightingInfos.w = 1, CT.updateVector4("vLightingIntensity", this._lightingInfos), CT.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (MT.texturesEnabled) {
                for (const TT in this._samplersList) {
                  const kT = this._samplersList[TT];
                  kT.value && CT.setTexture(kT.samplerName, kT.value)
                }
                if ((0, qT.l)(MT, KT, CT, kT, this.realTimeFiltering), KT.ENVIRONMENTBRDF && CT.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), KT.FUZZENVIRONMENTBRDF && CT.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), KT.REFRACTED_BACKGROUND && (CT.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), CT.X3("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), uT.h.Fv[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), CT.updateVector3("vBackgroundRefractionInfos", uT.h.Fv[1])), (KT.ANISOTROPIC || KT.FUZZ || KT.REFRACTED_BACKGROUND || KT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && CT.setTexture("blueNoiseSampler", TT._noiseTextures[this.NJ().uniqueId]), KT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const TT = this.sssIrradianceTexture.getSize().width,
                    kT = this.sssIrradianceTexture.getSize().height;
                  CT.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), CT.setTexture("sceneDepthSampler", this.sssDepthTexture), CT.updateFloat2("renderTargetSize", TT, kT)
                }
              }
              this.NJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(cT) && this.NJ().depthPeelingRenderer.bind(OT), this._eventInfo.subMesh = lT, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Ik.g)(this._activeEffect, this, MT), this.bindEyePosition(OT)
            } else AT && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, MT, MT.Dv(), lT), !IT && this.isFrozen && !AT || !MT.lightsEnabled || this._disableLighting || (0, qT.m)(MT, cT, this._activeEffect, KT, this._maxSimultaneousLights), !IT && this.isFrozen || (this.bindView(OT), (0, qT.f)(MT, cT, this._activeEffect, !0), KT.NUM_MORPH_INFLUENCERS && (0, qT.q)(cT, this._activeEffect), KT.BAKED_VERTEX_ANIMATION_TEXTURE && cT.bakedVertexAnimationManager?.bind(OT, KT.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, qT.p)(KT, this._activeEffect, MT)), this._afterBind(cT, this._activeEffect, lT), CT.update()
          }
          getAnimatables() {
            const TT = super.getAnimatables();
            for (const kT in this._samplersList) {
              const cT = this._samplersList[kT];
              cT.value && cT.value.animations && cT.value.animations.length > 0 && TT.push(cT.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && TT.push(this._radianceTexture), TT
          }
          getActiveTextures() {
            const TT = super.getActiveTextures();
            for (const kT in this._samplersList) {
              const cT = this._samplersList[kT];
              cT.value && TT.push(cT.value)
            }
            return this._radianceTexture && TT.push(this._radianceTexture), TT
          }
          hasTexture(TT) {
            if (super.hasTexture(TT)) return !0;
            for (const kT in this._samplersList) {
              if (this._samplersList[kT].value === TT) return !0
            }
            return this._radianceTexture === TT
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(TT, kT) {
            if (this._breakShaderLoadedCheck = !0, kT) {
              this._environmentBRDFTexture && this.NJ().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.NJ().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const TT in this._samplersList) {
                const kT = this._samplersList[TT];
                kT.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(TT, kT)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.NJ().environmentTexture
          }
          _prepareEffect(kT, cT, lT) {
            let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              OT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              yT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(kT, cT, lT, OT, yT), !lT.isDirty) return null;
            lT.markAsProcessed();
            const fT = this.NJ().Dv(),
              xT = new iT.e;
            let IT = 0;
            lT.USESPHERICALINVERTEX && xT.addFallback(IT++, "USESPHERICALINVERTEX"), lT.FOG && xT.addFallback(IT, "FOG"), lT.SPECULARAA && xT.addFallback(IT, "SPECULARAA"), lT.POINTSIZE && xT.addFallback(IT, "POINTSIZE"), lT.LOGARITHMICDEPTH && xT.addFallback(IT, "LOGARITHMICDEPTH"), lT.PARALLAX && xT.addFallback(IT, "PARALLAX"), lT.PARALLAX_RHS && xT.addFallback(IT, "PARALLAX_RHS"), lT.PARALLAXOCCLUSION && xT.addFallback(IT++, "PARALLAXOCCLUSION"), lT.ENVIRONMENTBRDF && xT.addFallback(IT++, "ENVIRONMENTBRDF"), lT.TANGENT && xT.addFallback(IT++, "TANGENT"), IT = (0, qT.z)(lT, xT, this._maxSimultaneousLights, IT), lT.SPECULARTERM && xT.addFallback(IT++, "SPECULARTERM"), lT.USESPHERICALFROMREFLECTIONMAP && xT.addFallback(IT++, "USESPHERICALFROMREFLECTIONMAP"), lT.USEIRRADIANCEMAP && xT.addFallback(IT++, "USEIRRADIANCEMAP"), lT.NORMAL && xT.addFallback(IT++, "NORMAL"), lT.VERTEXCOLOR && xT.addFallback(IT++, "VERTEXCOLOR"), lT.MORPHTARGETS && xT.addFallback(IT++, "MORPHTARGETS"), lT.MULTIVIEW && xT.addFallback(0, "MULTIVIEW");
            const AT = [XT.l.PositionKind];
            lT.NORMAL && AT.push(XT.l.NormalKind), lT.TANGENT && AT.push(XT.l.TangentKind);
            for (let TT = 1; TT <= 6; ++TT) lT["UV" + TT] && AT.push(`uv${1===TT?"":TT}`);
            lT.VERTEXCOLOR && AT.push(XT.l.ColorKind), (0, qT.F)(AT, kT, lT, xT), (0, qT.G)(AT, lT), (0, qT.I)(AT, kT, lT), (0, qT.D)(AT, kT, lT);
            let CT = "openpbr";
            const jT = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const TT in this._uniformsList) jT.push(TT);
            const vT = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            lT.FUZZENVIRONMENTBRDF && vT.push("environmentFuzzBrdfSampler"), lT.REFRACTED_BACKGROUND && vT.push("backgroundRefractionSampler"), (lT.ANISOTROPIC || lT.FUZZ || lT.REFRACTED_BACKGROUND || lT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && vT.push("blueNoiseSampler"), lT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (vT.push("sceneIrradianceSampler"), vT.push("sceneDepthSampler"));
            for (const TT in this._samplersList) {
              const kT = this._samplersList[TT];
              vT.push(kT.samplerName), jT.push(kT.samplerInfoName), jT.push(kT.samplerMatrixName)
            }(0, qT.nb)(jT, vT, !0);
            const tT = ["Material", "Scene", "Mesh"],
              hT = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: lT.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = xT, this._eventInfo.fallbackRank = IT, this._eventInfo.defines = lT, this._eventInfo.uniforms = jT, this._eventInfo.attributes = AT, this._eventInfo.samplers = vT, this._eventInfo.uniformBuffersNames = tT, this._eventInfo.customCode = void 0, this._eventInfo.mesh = kT, this._eventInfo.indexParameters = hT, this._callbackPluginEventGeneric(128, this._eventInfo), jk.d.AddUniformsAndSamplers(jT, vT), UT.c.AddUniforms(jT), UT.c.AddSamplers(vT), (0, Ik.e)(jT), this._useVertexPulling) {
              const TT = cT?.geometry;
              TT && (this._vertexPullingMetadata = (0, Ak.f)(TT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, kT) => {
                jT.push(`vp_${kT}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            WT.c && (WT.c.PrepareUniforms(jT, lT), WT.c.PrepareSamplers(vT, lT)), (0, qT.qb)({
              uniformsNames: jT,
              uniformBuffersNames: tT,
              samplers: vT,
              defines: lT,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const NT = {};
            this.customShaderNameResolve && (CT = this.customShaderNameResolve(CT, jT, tT, vT, lT, AT, NT));
            const QT = lT.toString(),
              ST = fT.createEffect(CT, {
                attributes: AT,
                uniformsNames: jT,
                uniformBuffersNames: tT,
                samplers: vT,
                defines: QT,
                fallbacks: xT,
                onCompiled: MT,
                onError: KT,
                indexParameters: hT,
                processFinalCode: NT.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: lT.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: TT._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, fT);
            return this._eventInfo.customCode = void 0, ST
          }
          _prepareDefines(kT, cT, lT) {
            let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              OT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const yT = cT.hasThinInstances,
              fT = this.NJ(),
              xT = fT.Dv();
            (0, qT.U)(fT, kT, lT, !0, this._maxSimultaneousLights, this._disableLighting), lT._needNormals = !0, (0, qT._)(fT, lT);
            const IT = this.needAlphaBlendingForMesh(kT) && this.NJ().useOrderIndependentTransparency;
            if ((0, qT.fb)(fT, lT, this.canRenderToMRT && !IT), (0, qT.bb)(fT, lT, IT), jk.d.PrepareDefines(xT.currentRenderPassId, kT, lT), lT._areTexturesDirty) {
              lT._needUVs = !1;
              for (let TT = 1; TT <= 6; ++TT) lT["MAINUV" + TT] = !1;
              if (fT.texturesEnabled) {
                for (const cT in this._samplersList) {
                  const TT = this._samplersList[cT];
                  TT.value ? ((0, qT.V)(TT.value, lT, TT.textureDefine), lT[TT.textureDefine + "_GAMMA"] = TT.value.gammaSpace) : lT[TT.textureDefine] = !1
                }
                const TT = this._getRadianceTexture(),
                  kT = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || xT.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, qT.Q)(fT, TT, lT, this.realTimeFiltering, this.realTimeFilteringQuality, !kT), this._baseMetalnessTexture && (lT.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), lT.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, lT.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, lT.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, lT.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, lT.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, lT.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, lT.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, lT.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, lT.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, lT.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, lT.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && pT.b.DiffuseTextureEnabled ? (lT.PARALLAX = !0, lT.PARALLAX_RHS = fT.useRightHandedSystem, lT.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : lT.PARALLAX = !1, lT.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (lT.PARALLAX = !1, lT.PARALLAX_RHS = !1, lT.PARALLAXOCCLUSION = !1, lT.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && pT.b.ReflectionTextureEnabled ? (lT.ENVIRONMENTBRDF = !0, lT.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (lT.ENVIRONMENTBRDF = !1, lT.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? lT.FUZZENVIRONMENTBRDF = !0 : lT.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  lT.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && pT.b.RefractionTextureEnabled, lT.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, lT.REFRACTED_LIGHTS = !0;
                  const TT = this._getRadianceTexture();
                  TT ? (lT.REFRACTED_ENVIRONMENT = pT.b.RefractionTextureEnabled, lT.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.NJ().useRightHandedSystem ? !TT.invertZ : TT.invertZ, lT.REFRACTED_ENVIRONMENT_LOCAL_CUBE = TT.isCube && TT.boundingBoxSize) : lT.REFRACTED_ENVIRONMENT = !1
                } else lT.REFRACTED_BACKGROUND = !1, lT.REFRACTED_LIGHTS = !1, lT.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? lT.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : lT.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === KT.e.LIGHTFALLOFF_STANDARD ? (lT.USEPHYSICALLIGHTFALLOFF = !1, lT.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === KT.e.LIGHTFALLOFF_GLTF ? (lT.USEPHYSICALLIGHTFALLOFF = !1, lT.USEGLTFLIGHTFALLOFF = !0) : (lT.USEPHYSICALLIGHTFALLOFF = !0, lT.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? lT.TWOSIDEDLIGHTING = !0 : lT.TWOSIDEDLIGHTING = !1, lT.MIRRORED = !!fT._mirroredCameraPosition, lT.SPECULARAA = xT.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(lT._areTexturesDirty || lT._areMiscDirty) && (lT.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, lT.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, lT.ALPHABLEND = this.needAlphaBlendingForMesh(kT)), lT._areTexturesDirty && (lT.TEXTURE_REPETITION_MODE = xT.version > 1 || xT.isWebGPU ? this.textureRepetitionMode : 0), lT._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(lT), lT.FORCENORMALFORWARD = this._forceNormalForward, lT.RADIANCEOCCLUSION = this._useRadianceOcclusion, lT.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && TT._noiseTextures[fT.uniqueId] && pT.b.ReflectionTextureEnabled ? (lT.ANISOTROPIC = !0, kT.isVerticesDataPresent(XT.l.TangentKind) || (lT._needUVs = !0, lT.MAINUV1 = !0), this._useGltfStyleAnisotropy && (lT.USE_GLTF_STYLE_ANISOTROPY = !0), lT.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, lT.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (lT.ANISOTROPIC = !1, lT.USE_GLTF_STYLE_ANISOTROPY = !1, lT.ANISOTROPIC_BASE = !1, lT.ANISOTROPIC_COAT = !1), lT.THIN_FILM = this.thinFilmWeight > 0, lT.IRIDESCENCE = this.thinFilmWeight > 0, lT.DISPERSION = this.transmissionDispersionScale > 0, lT.SCATTERING = this.hasScattering;
            if (lT.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, lT.TRANSMISSION_SLAB = this.transmissionWeight > 0, lT.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, lT.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !lT.PREPASS && (lT.SUBSURFACE_SLAB || lT.TRANSMISSION_SLAB_VOLUME)) {
              let TT = !1;
              if (!this.sssIrradianceTexture && fT.geometryBufferRenderer) {
                const kT = fT.geometryBufferRenderer.getTextureIndex(Lk.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = fT.geometryBufferRenderer.getGBuffer().textures[kT], TT = !0
              }
              if (!this.sssDepthTexture && fT.geometryBufferRenderer) {
                const kT = fT.geometryBufferRenderer.getTextureIndex(Lk.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = fT.geometryBufferRenderer.getGBuffer().textures[kT], TT = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (lT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, TT && (lT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            lT.FUZZ = this.fuzzWeight > 0 && pT.b.ReflectionTextureEnabled, lT.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, lT.FUZZ ? (kT.isVerticesDataPresent(XT.l.TangentKind) || (lT._needUVs = !0, lT.MAINUV1 = !0), this._environmentFuzzBRDFTexture = VT(this.NJ()), lT.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, lT.FUZZENVIRONMENTBRDF = !1, lT.FUZZ_IBL_SAMPLES = 0), lT._areMiscDirty && ((0, qT.X)(kT, fT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(kT), lT, this._applyDecalMapAfterDetailMap, this._useVertexPulling, cT, this._isVertexOutputInvariant), lT.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !kT.isVerticesDataPresent(XT.l.NormalKind), lT.DEBUGMODE = this._debugMode), (0, qT.O)(fT, xT, this, lT, !!MT, OT, yT), this._eventInfo.defines = lT, this._eventInfo.mesh = kT, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, qT.N)(kT, lT, !0, !0, !0, this._transparencyMode !== KT.e.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, kT = new WeakMap, lT = new WeakMap, MT = new WeakMap, OT = new WeakMap, yT = new WeakMap, fT = new WeakMap, xT = new WeakMap, IT = new WeakMap, AT = new WeakMap, CT = new WeakMap, jT = new WeakMap, vT = new WeakMap, tT = new WeakMap, hT = new WeakMap, NT = new WeakMap, QT = new WeakMap, ST = new WeakMap, DT = new WeakMap, aT = new WeakMap, FT = new WeakMap, rT = new WeakMap, PT = new WeakMap, oT = new WeakMap, HT = new WeakMap, eT = new WeakMap, GT = new WeakMap, ZT = new WeakMap, dT = new WeakMap, LT = new WeakMap, RT = new WeakMap, gT = new WeakMap, BT = new WeakMap, nT = new WeakMap, sT = new WeakMap, Tk = new WeakMap, kk = new WeakMap, ck = new WeakMap, lk = new WeakMap, Mk = new WeakMap, Kk = new WeakMap, Ok = new WeakMap, yk = new WeakMap, fk = new WeakMap, xk = new WeakMap, vk = new WeakMap, tk = new WeakMap, hk = new WeakMap, Nk = new WeakMap, Qk = new WeakMap, Sk = new WeakMap, Dk = new WeakMap, ak = new WeakMap, Fk = new WeakMap, wk = new WeakMap, mk = new WeakMap, bk = new WeakMap, zk = new WeakMap, Jk = new WeakMap, Hk = new WeakMap, ek = new WeakMap, Gk = new WeakMap, Vk = new WeakMap, Ek = new WeakMap, Zk = new WeakMap, uk = new WeakMap, Xk = new WeakMap, dk = new WeakMap, Rk = new WeakMap, Uk = new WeakMap, nk = new WeakMap, pk = new WeakMap, sk = new WeakMap, Tc = new WeakMap, kc = new WeakMap, cc = new WeakMap, lc = new WeakMap, Mc = new WeakMap, Kc = new WeakMap, Oc = new WeakMap, yc = new WeakMap, fc = new WeakMap, xc = new WeakMap, Ic = new WeakMap, Ac = new WeakMap, Cc = new WeakMap, jc = new WeakMap, vc = new WeakMap, tc = new WeakMap, hc = new WeakMap, Nc = new WeakMap, Qc = new WeakMap, Sc = new WeakMap, Dc = new WeakMap, ac = new WeakMap, Fc = new WeakMap, rc = new WeakMap, Pc = new WeakMap, wc = new WeakMap, mc = new WeakMap, bc = new WeakMap, zc = new WeakMap, Jc = new WeakMap, (() => {
          const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(HM[Symbol.metadata] ?? null) : void 0;
          oc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Hc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], ec = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Gc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Vc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Ec = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Zc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], uc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Xc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], dc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Lc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Rc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], gc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Uc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Yc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Bc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Wc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], nc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], pc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], ic = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], qc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], sc = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Tl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], kl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], cl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], ll = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Ml = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Kl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Ol = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], yl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], fl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], xl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Il = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Al = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Cl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], jl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], vl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], tl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], hl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Nl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Ql = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Sl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Dl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], al = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Fl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], rl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Pl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], wl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], ml = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], bl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], zl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Jl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], ol = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Hl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], el = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Gl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Vl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], El = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Zl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], ul = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Xl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], dl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Ll = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Rl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], gl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Ul = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Yl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Bl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], Wl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], nl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], pl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], il = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], ql = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], sl = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], TM = [(0, mT.b)("_markAllSubMeshesAsTexturesDirty")], kM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], cM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], lM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], MM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], KM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], OM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], yM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], fM = [(0, mT.J)()], xM = [(0, mT.J)()], IM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], AM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], CM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], jM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], vM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsLightsDirty")], tM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], hM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsLightsDirty")], NM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], QM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], SM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], DM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], aM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], FM = [(0, mT.c)("_markAllSubMeshesAsTexturesDirty")], rM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], PM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], wM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], mM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], bM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], zM = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], JM = [(0, mT.c)("_markAllSubMeshesAsMiscDirty")], oM = [(0, mT.J)()], (0, wT.e)(TT, null, oc, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseWeight" in TT,
              get: TT => TT.baseWeight,
              set: (TT, kT) => {
                TT.baseWeight = kT
              }
            },
            metadata: kT
          }, GM, VM), (0, wT.e)(TT, null, Hc, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseWeightTexture" in TT,
              get: TT => TT.baseWeightTexture,
              set: (TT, kT) => {
                TT.baseWeightTexture = kT
              }
            },
            metadata: kT
          }, EM, ZM), (0, wT.e)(TT, null, ec, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseColor" in TT,
              get: TT => TT.baseColor,
              set: (TT, kT) => {
                TT.baseColor = kT
              }
            },
            metadata: kT
          }, uM, XM), (0, wT.e)(TT, null, Gc, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseColorTexture" in TT,
              get: TT => TT.baseColorTexture,
              set: (TT, kT) => {
                TT.baseColorTexture = kT
              }
            },
            metadata: kT
          }, dM, LM), (0, wT.e)(TT, null, Vc, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseDiffuseRoughness" in TT,
              get: TT => TT.baseDiffuseRoughness,
              set: (TT, kT) => {
                TT.baseDiffuseRoughness = kT
              }
            },
            metadata: kT
          }, RM, gM), (0, wT.e)(TT, null, Ec, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseDiffuseRoughnessTexture" in TT,
              get: TT => TT.baseDiffuseRoughnessTexture,
              set: (TT, kT) => {
                TT.baseDiffuseRoughnessTexture = kT
              }
            },
            metadata: kT
          }, UM, YM), (0, wT.e)(TT, null, Zc, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseMetalness" in TT,
              get: TT => TT.baseMetalness,
              set: (TT, kT) => {
                TT.baseMetalness = kT
              }
            },
            metadata: kT
          }, BM, WM), (0, wT.e)(TT, null, uc, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseMetalnessTexture" in TT,
              get: TT => TT.baseMetalnessTexture,
              set: (TT, kT) => {
                TT.baseMetalnessTexture = kT
              }
            },
            metadata: kT
          }, nM, pM), (0, wT.e)(TT, null, Xc, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularWeight" in TT,
              get: TT => TT.specularWeight,
              set: (TT, kT) => {
                TT.specularWeight = kT
              }
            },
            metadata: kT
          }, iM, qM), (0, wT.e)(TT, null, dc, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularWeightTexture" in TT,
              get: TT => TT.specularWeightTexture,
              set: (TT, kT) => {
                TT.specularWeightTexture = kT
              }
            },
            metadata: kT
          }, sM, TK), (0, wT.e)(TT, null, Lc, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularColor" in TT,
              get: TT => TT.specularColor,
              set: (TT, kT) => {
                TT.specularColor = kT
              }
            },
            metadata: kT
          }, kK, cK), (0, wT.e)(TT, null, Rc, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularColorTexture" in TT,
              get: TT => TT.specularColorTexture,
              set: (TT, kT) => {
                TT.specularColorTexture = kT
              }
            },
            metadata: kT
          }, lK, MK), (0, wT.e)(TT, null, gc, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularRoughness" in TT,
              get: TT => TT.specularRoughness,
              set: (TT, kT) => {
                TT.specularRoughness = kT
              }
            },
            metadata: kT
          }, KK, OK), (0, wT.e)(TT, null, Uc, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularRoughnessTexture" in TT,
              get: TT => TT.specularRoughnessTexture,
              set: (TT, kT) => {
                TT.specularRoughnessTexture = kT
              }
            },
            metadata: kT
          }, yK, fK), (0, wT.e)(TT, null, Yc, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularRoughnessAnisotropy" in TT,
              get: TT => TT.specularRoughnessAnisotropy,
              set: (TT, kT) => {
                TT.specularRoughnessAnisotropy = kT
              }
            },
            metadata: kT
          }, xK, IK), (0, wT.e)(TT, null, Bc, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularRoughnessAnisotropyTexture" in TT,
              get: TT => TT.specularRoughnessAnisotropyTexture,
              set: (TT, kT) => {
                TT.specularRoughnessAnisotropyTexture = kT
              }
            },
            metadata: kT
          }, AK, CK), (0, wT.e)(TT, null, Wc, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularIor" in TT,
              get: TT => TT.specularIor,
              set: (TT, kT) => {
                TT.specularIor = kT
              }
            },
            metadata: kT
          }, jK, vK), (0, wT.e)(TT, null, nc, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionWeight" in TT,
              get: TT => TT.transmissionWeight,
              set: (TT, kT) => {
                TT.transmissionWeight = kT
              }
            },
            metadata: kT
          }, tK, hK), (0, wT.e)(TT, null, pc, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionWeightTexture" in TT,
              get: TT => TT.transmissionWeightTexture,
              set: (TT, kT) => {
                TT.transmissionWeightTexture = kT
              }
            },
            metadata: kT
          }, NK, QK), (0, wT.e)(TT, null, ic, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionColor" in TT,
              get: TT => TT.transmissionColor,
              set: (TT, kT) => {
                TT.transmissionColor = kT
              }
            },
            metadata: kT
          }, SK, DK), (0, wT.e)(TT, null, qc, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionColorTexture" in TT,
              get: TT => TT.transmissionColorTexture,
              set: (TT, kT) => {
                TT.transmissionColorTexture = kT
              }
            },
            metadata: kT
          }, aK, FK), (0, wT.e)(TT, null, sc, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDepth" in TT,
              get: TT => TT.transmissionDepth,
              set: (TT, kT) => {
                TT.transmissionDepth = kT
              }
            },
            metadata: kT
          }, rK, PK), (0, wT.e)(TT, null, Tl, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDepthTexture" in TT,
              get: TT => TT.transmissionDepthTexture,
              set: (TT, kT) => {
                TT.transmissionDepthTexture = kT
              }
            },
            metadata: kT
          }, wK, mK), (0, wT.e)(TT, null, kl, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionScatter" in TT,
              get: TT => TT.transmissionScatter,
              set: (TT, kT) => {
                TT.transmissionScatter = kT
              }
            },
            metadata: kT
          }, bK, zK), (0, wT.e)(TT, null, cl, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionScatterTexture" in TT,
              get: TT => TT.transmissionScatterTexture,
              set: (TT, kT) => {
                TT.transmissionScatterTexture = kT
              }
            },
            metadata: kT
          }, JK, oK), (0, wT.e)(TT, null, ll, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionScatterAnisotropy" in TT,
              get: TT => TT.transmissionScatterAnisotropy,
              set: (TT, kT) => {
                TT.transmissionScatterAnisotropy = kT
              }
            },
            metadata: kT
          }, HK, eK), (0, wT.e)(TT, null, Ml, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDispersionScale" in TT,
              get: TT => TT.transmissionDispersionScale,
              set: (TT, kT) => {
                TT.transmissionDispersionScale = kT
              }
            },
            metadata: kT
          }, GK, VK), (0, wT.e)(TT, null, Kl, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDispersionScaleTexture" in TT,
              get: TT => TT.transmissionDispersionScaleTexture,
              set: (TT, kT) => {
                TT.transmissionDispersionScaleTexture = kT
              }
            },
            metadata: kT
          }, EK, ZK), (0, wT.e)(TT, null, Ol, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDispersionAbbeNumber" in TT,
              get: TT => TT.transmissionDispersionAbbeNumber,
              set: (TT, kT) => {
                TT.transmissionDispersionAbbeNumber = kT
              }
            },
            metadata: kT
          }, uK, XK), (0, wT.e)(TT, null, yl, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceWeight" in TT,
              get: TT => TT.subsurfaceWeight,
              set: (TT, kT) => {
                TT.subsurfaceWeight = kT
              }
            },
            metadata: kT
          }, dK, LK), (0, wT.e)(TT, null, fl, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceWeightTexture" in TT,
              get: TT => TT.subsurfaceWeightTexture,
              set: (TT, kT) => {
                TT.subsurfaceWeightTexture = kT
              }
            },
            metadata: kT
          }, RK, gK), (0, wT.e)(TT, null, xl, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceColor" in TT,
              get: TT => TT.subsurfaceColor,
              set: (TT, kT) => {
                TT.subsurfaceColor = kT
              }
            },
            metadata: kT
          }, UK, YK), (0, wT.e)(TT, null, Il, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceColorTexture" in TT,
              get: TT => TT.subsurfaceColorTexture,
              set: (TT, kT) => {
                TT.subsurfaceColorTexture = kT
              }
            },
            metadata: kT
          }, BK, WK), (0, wT.e)(TT, null, Al, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceRadius" in TT,
              get: TT => TT.subsurfaceRadius,
              set: (TT, kT) => {
                TT.subsurfaceRadius = kT
              }
            },
            metadata: kT
          }, nK, pK), (0, wT.e)(TT, null, Cl, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceRadiusScale" in TT,
              get: TT => TT.subsurfaceRadiusScale,
              set: (TT, kT) => {
                TT.subsurfaceRadiusScale = kT
              }
            },
            metadata: kT
          }, iK, qK), (0, wT.e)(TT, null, jl, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceRadiusScaleTexture" in TT,
              get: TT => TT.subsurfaceRadiusScaleTexture,
              set: (TT, kT) => {
                TT.subsurfaceRadiusScaleTexture = kT
              }
            },
            metadata: kT
          }, sK, TO), (0, wT.e)(TT, null, vl, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceScatterAnisotropy" in TT,
              get: TT => TT.subsurfaceScatterAnisotropy,
              set: (TT, kT) => {
                TT.subsurfaceScatterAnisotropy = kT
              }
            },
            metadata: kT
          }, kO, cO), (0, wT.e)(TT, null, tl, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatWeight" in TT,
              get: TT => TT.coatWeight,
              set: (TT, kT) => {
                TT.coatWeight = kT
              }
            },
            metadata: kT
          }, lO, MO), (0, wT.e)(TT, null, hl, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatWeightTexture" in TT,
              get: TT => TT.coatWeightTexture,
              set: (TT, kT) => {
                TT.coatWeightTexture = kT
              }
            },
            metadata: kT
          }, KO, OO), (0, wT.e)(TT, null, Nl, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatColor" in TT,
              get: TT => TT.coatColor,
              set: (TT, kT) => {
                TT.coatColor = kT
              }
            },
            metadata: kT
          }, yO, fO), (0, wT.e)(TT, null, Ql, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatColorTexture" in TT,
              get: TT => TT.coatColorTexture,
              set: (TT, kT) => {
                TT.coatColorTexture = kT
              }
            },
            metadata: kT
          }, xO, IO), (0, wT.e)(TT, null, Sl, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatRoughness" in TT,
              get: TT => TT.coatRoughness,
              set: (TT, kT) => {
                TT.coatRoughness = kT
              }
            },
            metadata: kT
          }, AO, CO), (0, wT.e)(TT, null, Dl, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatRoughnessTexture" in TT,
              get: TT => TT.coatRoughnessTexture,
              set: (TT, kT) => {
                TT.coatRoughnessTexture = kT
              }
            },
            metadata: kT
          }, jO, vO), (0, wT.e)(TT, null, al, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatRoughnessAnisotropy" in TT,
              get: TT => TT.coatRoughnessAnisotropy,
              set: (TT, kT) => {
                TT.coatRoughnessAnisotropy = kT
              }
            },
            metadata: kT
          }, tO, hO), (0, wT.e)(TT, null, Fl, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatRoughnessAnisotropyTexture" in TT,
              get: TT => TT.coatRoughnessAnisotropyTexture,
              set: (TT, kT) => {
                TT.coatRoughnessAnisotropyTexture = kT
              }
            },
            metadata: kT
          }, NO, QO), (0, wT.e)(TT, null, rl, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatIor" in TT,
              get: TT => TT.coatIor,
              set: (TT, kT) => {
                TT.coatIor = kT
              }
            },
            metadata: kT
          }, SO, DO), (0, wT.e)(TT, null, Pl, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatDarkening" in TT,
              get: TT => TT.coatDarkening,
              set: (TT, kT) => {
                TT.coatDarkening = kT
              }
            },
            metadata: kT
          }, aO, FO), (0, wT.e)(TT, null, wl, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatDarkeningTexture" in TT,
              get: TT => TT.coatDarkeningTexture,
              set: (TT, kT) => {
                TT.coatDarkeningTexture = kT
              }
            },
            metadata: kT
          }, rO, PO), (0, wT.e)(TT, null, ml, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzWeight" in TT,
              get: TT => TT.fuzzWeight,
              set: (TT, kT) => {
                TT.fuzzWeight = kT
              }
            },
            metadata: kT
          }, wO, mO), (0, wT.e)(TT, null, bl, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzWeightTexture" in TT,
              get: TT => TT.fuzzWeightTexture,
              set: (TT, kT) => {
                TT.fuzzWeightTexture = kT
              }
            },
            metadata: kT
          }, bO, zO), (0, wT.e)(TT, null, zl, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzColor" in TT,
              get: TT => TT.fuzzColor,
              set: (TT, kT) => {
                TT.fuzzColor = kT
              }
            },
            metadata: kT
          }, JO, oO), (0, wT.e)(TT, null, Jl, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzColorTexture" in TT,
              get: TT => TT.fuzzColorTexture,
              set: (TT, kT) => {
                TT.fuzzColorTexture = kT
              }
            },
            metadata: kT
          }, HO, eO), (0, wT.e)(TT, null, ol, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzRoughness" in TT,
              get: TT => TT.fuzzRoughness,
              set: (TT, kT) => {
                TT.fuzzRoughness = kT
              }
            },
            metadata: kT
          }, GO, VO), (0, wT.e)(TT, null, Hl, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzRoughnessTexture" in TT,
              get: TT => TT.fuzzRoughnessTexture,
              set: (TT, kT) => {
                TT.fuzzRoughnessTexture = kT
              }
            },
            metadata: kT
          }, EO, ZO), (0, wT.e)(TT, null, el, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryThinWalled" in TT,
              get: TT => TT.geometryThinWalled,
              set: (TT, kT) => {
                TT.geometryThinWalled = kT
              }
            },
            metadata: kT
          }, uO, XO), (0, wT.e)(TT, null, Gl, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryNormalTexture" in TT,
              get: TT => TT.geometryNormalTexture,
              set: (TT, kT) => {
                TT.geometryNormalTexture = kT
              }
            },
            metadata: kT
          }, dO, LO), (0, wT.e)(TT, null, Vl, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryTangent" in TT,
              get: TT => TT.geometryTangent,
              set: (TT, kT) => {
                TT.geometryTangent = kT
              }
            },
            metadata: kT
          }, RO, gO), (0, wT.e)(TT, null, El, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryTangentTexture" in TT,
              get: TT => TT.geometryTangentTexture,
              set: (TT, kT) => {
                TT.geometryTangentTexture = kT
              }
            },
            metadata: kT
          }, UO, YO), (0, wT.e)(TT, null, Zl, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryCoatNormalTexture" in TT,
              get: TT => TT.geometryCoatNormalTexture,
              set: (TT, kT) => {
                TT.geometryCoatNormalTexture = kT
              }
            },
            metadata: kT
          }, BO, WO), (0, wT.e)(TT, null, ul, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryCoatTangent" in TT,
              get: TT => TT.geometryCoatTangent,
              set: (TT, kT) => {
                TT.geometryCoatTangent = kT
              }
            },
            metadata: kT
          }, nO, pO), (0, wT.e)(TT, null, Xl, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryCoatTangentTexture" in TT,
              get: TT => TT.geometryCoatTangentTexture,
              set: (TT, kT) => {
                TT.geometryCoatTangentTexture = kT
              }
            },
            metadata: kT
          }, iO, qO), (0, wT.e)(TT, null, dl, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryOpacity" in TT,
              get: TT => TT.geometryOpacity,
              set: (TT, kT) => {
                TT.geometryOpacity = kT
              }
            },
            metadata: kT
          }, sO, Ty), (0, wT.e)(TT, null, Ll, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryOpacityTexture" in TT,
              get: TT => TT.geometryOpacityTexture,
              set: (TT, kT) => {
                TT.geometryOpacityTexture = kT
              }
            },
            metadata: kT
          }, ky, cy), (0, wT.e)(TT, null, Rl, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryThickness" in TT,
              get: TT => TT.geometryThickness,
              set: (TT, kT) => {
                TT.geometryThickness = kT
              }
            },
            metadata: kT
          }, ly, My), (0, wT.e)(TT, null, gl, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryThicknessTexture" in TT,
              get: TT => TT.geometryThicknessTexture,
              set: (TT, kT) => {
                TT.geometryThicknessTexture = kT
              }
            },
            metadata: kT
          }, Ky, Oy), (0, wT.e)(TT, null, Ul, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissionLuminance" in TT,
              get: TT => TT.emissionLuminance,
              set: (TT, kT) => {
                TT.emissionLuminance = kT
              }
            },
            metadata: kT
          }, yy, fy), (0, wT.e)(TT, null, Yl, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissionColor" in TT,
              get: TT => TT.emissionColor,
              set: (TT, kT) => {
                TT.emissionColor = kT
              }
            },
            metadata: kT
          }, xy, Iy), (0, wT.e)(TT, null, Bl, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissionColorTexture" in TT,
              get: TT => TT.emissionColorTexture,
              set: (TT, kT) => {
                TT.emissionColorTexture = kT
              }
            },
            metadata: kT
          }, Ay, Cy), (0, wT.e)(TT, null, Wl, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmWeight" in TT,
              get: TT => TT.thinFilmWeight,
              set: (TT, kT) => {
                TT.thinFilmWeight = kT
              }
            },
            metadata: kT
          }, jy, vy), (0, wT.e)(TT, null, nl, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmWeightTexture" in TT,
              get: TT => TT.thinFilmWeightTexture,
              set: (TT, kT) => {
                TT.thinFilmWeightTexture = kT
              }
            },
            metadata: kT
          }, ty, hy), (0, wT.e)(TT, null, pl, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmThickness" in TT,
              get: TT => TT.thinFilmThickness,
              set: (TT, kT) => {
                TT.thinFilmThickness = kT
              }
            },
            metadata: kT
          }, Ny, Qy), (0, wT.e)(TT, null, il, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmThicknessMin" in TT,
              get: TT => TT.thinFilmThicknessMin,
              set: (TT, kT) => {
                TT.thinFilmThicknessMin = kT
              }
            },
            metadata: kT
          }, Sy, Dy), (0, wT.e)(TT, null, ql, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmThicknessTexture" in TT,
              get: TT => TT.thinFilmThicknessTexture,
              set: (TT, kT) => {
                TT.thinFilmThicknessTexture = kT
              }
            },
            metadata: kT
          }, ay, Fy), (0, wT.e)(TT, null, sl, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmIor" in TT,
              get: TT => TT.thinFilmIor,
              set: (TT, kT) => {
                TT.thinFilmIor = kT
              }
            },
            metadata: kT
          }, ry, Py), (0, wT.e)(TT, null, TM, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "ambientOcclusionTexture" in TT,
              get: TT => TT.ambientOcclusionTexture,
              set: (TT, kT) => {
                TT.ambientOcclusionTexture = kT
              }
            },
            metadata: kT
          }, wy, my), (0, wT.e)(TT, null, kM, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: TT => "directIntensity" in TT,
              get: TT => TT.directIntensity,
              set: (TT, kT) => {
                TT.directIntensity = kT
              }
            },
            metadata: kT
          }, by, zy), (0, wT.e)(TT, null, cM, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: TT => "environmentIntensity" in TT,
              get: TT => TT.environmentIntensity,
              set: (TT, kT) => {
                TT.environmentIntensity = kT
              }
            },
            metadata: kT
          }, Jy, oy), (0, wT.e)(TT, null, lM, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "useSpecularWeightFromTextureAlpha" in TT,
              get: TT => TT.useSpecularWeightFromTextureAlpha,
              set: (TT, kT) => {
                TT.useSpecularWeightFromTextureAlpha = kT
              }
            },
            metadata: kT
          }, Hy, ey), (0, wT.e)(TT, null, MM, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceAlphaTest" in TT,
              get: TT => TT.forceAlphaTest,
              set: (TT, kT) => {
                TT.forceAlphaTest = kT
              }
            },
            metadata: kT
          }, Gy, Vy), (0, wT.e)(TT, null, KM, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: TT => "alphaCutOff" in TT,
              get: TT => TT.alphaCutOff,
              set: (TT, kT) => {
                TT.alphaCutOff = kT
              }
            },
            metadata: kT
          }, Ey, Zy), (0, wT.e)(TT, null, OM, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: TT => "useAmbientOcclusionFromMetallicTextureRed" in TT,
              get: TT => TT.useAmbientOcclusionFromMetallicTextureRed,
              set: (TT, kT) => {
                TT.useAmbientOcclusionFromMetallicTextureRed = kT
              }
            },
            metadata: kT
          }, uy, Xy), (0, wT.e)(TT, null, yM, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "useAmbientInGrayScale" in TT,
              get: TT => TT.useAmbientInGrayScale,
              set: (TT, kT) => {
                TT.useAmbientInGrayScale = kT
              }
            },
            metadata: kT
          }, dy, Ly), (0, wT.e)(TT, null, fM, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: TT => "usePhysicalLightFalloff" in TT,
              get: TT => TT.usePhysicalLightFalloff
            },
            metadata: kT
          }, null, eM), (0, wT.e)(TT, null, xM, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: TT => "useGLTFLightFalloff" in TT,
              get: TT => TT.useGLTFLightFalloff
            },
            metadata: kT
          }, null, eM), (0, wT.e)(TT, null, IM, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "useObjectSpaceNormalMap" in TT,
              get: TT => TT.useObjectSpaceNormalMap,
              set: (TT, kT) => {
                TT.useObjectSpaceNormalMap = kT
              }
            },
            metadata: kT
          }, Ry, gy), (0, wT.e)(TT, null, AM, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: TT => "useParallax" in TT,
              get: TT => TT.useParallax,
              set: (TT, kT) => {
                TT.useParallax = kT
              }
            },
            metadata: kT
          }, Uy, Yy), (0, wT.e)(TT, null, CM, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "useParallaxOcclusion" in TT,
              get: TT => TT.useParallaxOcclusion,
              set: (TT, kT) => {
                TT.useParallaxOcclusion = kT
              }
            },
            metadata: kT
          }, By, Wy), (0, wT.e)(TT, null, jM, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: TT => "parallaxScaleBias" in TT,
              get: TT => TT.parallaxScaleBias,
              set: (TT, kT) => {
                TT.parallaxScaleBias = kT
              }
            },
            metadata: kT
          }, ny, py), (0, wT.e)(TT, null, vM, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "disableLighting" in TT,
              get: TT => TT.disableLighting,
              set: (TT, kT) => {
                TT.disableLighting = kT
              }
            },
            metadata: kT
          }, iy, qy), (0, wT.e)(TT, null, tM, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceIrradianceInFragment" in TT,
              get: TT => TT.forceIrradianceInFragment,
              set: (TT, kT) => {
                TT.forceIrradianceInFragment = kT
              }
            },
            metadata: kT
          }, sy, Tf), (0, wT.e)(TT, null, hM, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: TT => "maxSimultaneousLights" in TT,
              get: TT => TT.maxSimultaneousLights,
              set: (TT, kT) => {
                TT.maxSimultaneousLights = kT
              }
            },
            metadata: kT
          }, kf, lf), (0, wT.e)(TT, null, NM, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertNormalMapX" in TT,
              get: TT => TT.invertNormalMapX,
              set: (TT, kT) => {
                TT.invertNormalMapX = kT
              }
            },
            metadata: kT
          }, Mf, Kf), (0, wT.e)(TT, null, QM, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertNormalMapY" in TT,
              get: TT => TT.invertNormalMapY,
              set: (TT, kT) => {
                TT.invertNormalMapY = kT
              }
            },
            metadata: kT
          }, Of, yf), (0, wT.e)(TT, null, SM, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "twoSidedLighting" in TT,
              get: TT => TT.twoSidedLighting,
              set: (TT, kT) => {
                TT.twoSidedLighting = kT
              }
            },
            metadata: kT
          }, ff, xf), (0, wT.e)(TT, null, DM, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: TT => "useAlphaFresnel" in TT,
              get: TT => TT.useAlphaFresnel,
              set: (TT, kT) => {
                TT.useAlphaFresnel = kT
              }
            },
            metadata: kT
          }, If, Af), (0, wT.e)(TT, null, aM, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: TT => "useLinearAlphaFresnel" in TT,
              get: TT => TT.useLinearAlphaFresnel,
              set: (TT, kT) => {
                TT.useLinearAlphaFresnel = kT
              }
            },
            metadata: kT
          }, Cf, jf), (0, wT.e)(TT, null, FM, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "environmentBRDFTexture" in TT,
              get: TT => TT.environmentBRDFTexture,
              set: (TT, kT) => {
                TT.environmentBRDFTexture = kT
              }
            },
            metadata: kT
          }, vf, tf), (0, wT.e)(TT, null, rM, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceNormalForward" in TT,
              get: TT => TT.forceNormalForward,
              set: (TT, kT) => {
                TT.forceNormalForward = kT
              }
            },
            metadata: kT
          }, hf, Nf), (0, wT.e)(TT, null, PM, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: TT => "enableSpecularAntiAliasing" in TT,
              get: TT => TT.enableSpecularAntiAliasing,
              set: (TT, kT) => {
                TT.enableSpecularAntiAliasing = kT
              }
            },
            metadata: kT
          }, Qf, Sf), (0, wT.e)(TT, null, wM, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "useHorizonOcclusion" in TT,
              get: TT => TT.useHorizonOcclusion,
              set: (TT, kT) => {
                TT.useHorizonOcclusion = kT
              }
            },
            metadata: kT
          }, Df, af), (0, wT.e)(TT, null, mM, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "useRadianceOcclusion" in TT,
              get: TT => TT.useRadianceOcclusion,
              set: (TT, kT) => {
                TT.useRadianceOcclusion = kT
              }
            },
            metadata: kT
          }, Ff, rf), (0, wT.e)(TT, null, bM, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: TT => "unlit" in TT,
              get: TT => TT.unlit,
              set: (TT, kT) => {
                TT.unlit = kT
              }
            },
            metadata: kT
          }, Pf, wf), (0, wT.e)(TT, null, zM, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "applyDecalMapAfterDetailMap" in TT,
              get: TT => TT.applyDecalMapAfterDetailMap,
              set: (TT, kT) => {
                TT.applyDecalMapAfterDetailMap = kT
              }
            },
            metadata: kT
          }, mf, bf), (0, wT.e)(TT, null, JM, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "debugMode" in TT,
              get: TT => TT.debugMode,
              set: (TT, kT) => {
                TT.debugMode = kT
              }
            },
            metadata: kT
          }, zf, Jf), (0, wT.e)(TT, null, oM, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "transparencyMode" in TT,
              get: TT => TT.transparencyMode
            },
            metadata: kT
          }, null, eM), kT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kT
          })
        })(), TT.SSS_QUALITY_LOW = 0, TT.SSS_QUALITY_MEDIUM = 1, TT.SSS_QUALITY_HIGH = 2, TT._noiseTextures = {}, TT.ForceGLSL = !1, TT._ShaderLoader = new Ck.e((() => [Promise.all([cT.e(308), cT.e(374)]).then((() => cT(61132))), Promise.all([cT.e(313), cT.e(309), cT.e(373), cT.e(378)]).then((() => cT(61145)))]), (() => [Promise.all([cT.e(327), cT.e(329), cT.e(377)]).then((() => cT(61185))), Promise.all([cT.e(327), cT.e(330), cT.e(376), cT.e(379)]).then((() => cT(61192)))])), TT
      })(),
      Tc = !1;
    Tc || (Tc = !0, (0, WT.g)(), (0, Rk.g)("BABYLON.OpenPBRMaterial", sk));
    var kc = cT(36932);
    class cc {
      constructor(TT) {
        this.name = Vk.e.NAME_PROCEDURALTEXTURE, this.et = TT
      }
      register() {
        this.et._beforeClearStage.registerStep(Vk.e.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.et.proceduralTexturesEnabled) {
          Pk.h.StartPerformanceCounter("Procedural textures", this.et.proceduralTextures.length > 0);
          for (let TT = 0; TT < this.et.proceduralTextures.length; TT++) {
            const kT = this.et.proceduralTextures[TT];
            kT._shouldRender() && kT.render()
          }
          Pk.h.EndPerformanceCounter("Procedural textures", this.et.proceduralTextures.length > 0)
        }
      }
    }
    var lc = cT(39936);
    let Mc = (() => {
      var TT;
      let kT, lT, MT, OT, yT, fT = JT.f,
        xT = [],
        IT = [],
        AT = [],
        CT = [],
        jT = [],
        vT = [],
        hT = [],
        NT = [],
        QT = [];
      return TT = class extends fT {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(TT, kT, cT, lT) {
          let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            KT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, lT, !KT), this.isEnabled = ((0, wT.h)(this, xT), (0, wT.h)(this, IT, !0)), this.autoClear = ((0, wT.h)(this, AT), (0, wT.h)(this, CT, !0)), this.onGenerated = (0, wT.h)(this, jT), this.onGeneratedObservable = new kc.b, this.onBeforeGenerationObservable = new kc.b, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, wT.h)(this, vT, void 0), this._drawWrapper = (0, wT.h)(this, hT), this._textures = {}, this._size = (0, wT.h)(this, NT, void 0), this._textureType = (0, wT.h)(this, QT), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === MT || MT instanceof JT.f ? (this._options = {}, this._fallbackTexture = MT) : (this._options = MT, this._fallbackTexture = MT.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let fT = (lT = this.NJ() || tT.d.LastCreatedScene)._getComponent(Vk.e.NAME_PROCEDURALTEXTURE);
          fT || (fT = new cc(lT), lT.ycT(fT)), this._options.skipSceneRegistration || lT.proceduralTextures.push(this), this._fullEngine = lT.Dv(), this.name = TT, this.isRenderTarget = !0, this._size = kT, this._textureType = yT, this._generateMipMaps = KT, this._drawWrapper = new lc.b(this._fullEngine), this.setFragment(cT);
          const ST = this._createRtWrapper(OT, kT, KT, yT);
          this._texture = ST.texture;
          const DT = [];
          DT.push(1, 1), DT.push(-1, 1), DT.push(-1, -1), DT.push(1, -1), this._vertexBuffers[XT.l.PositionKind] = new XT.l(this._fullEngine, DT, XT.l.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(TT, kT, cT, lT) {
          return TT ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(kT, {
            generateMipMaps: cT,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: lT,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(kT, {
            generateMipMaps: cT,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: lT,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(TT) {
          this._drawWrapper.effect = TT
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((TT => {
            this._contentData = this.readPixels(0, 0, TT), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const TT = this._fullEngine,
            kT = [];
          kT.push(0), kT.push(1), kT.push(2), kT.push(0), kT.push(2), kT.push(3), this._indexBuffer = TT.createIndexBuffer(kT)
        }
        _rebuild() {
          const TT = this._vertexBuffers[XT.l.PositionKind];
          TT && TT._rebuild(), this._createIndexBuffer(), this.refreshRate === wk.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = wk.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(TT) {
          if (this.isReady()) return void TT(this);
          const kT = this.getEffect();
          kT && kT.executeWhenCompiled((() => {
            TT(this)
          }))
        }
        isReady() {
          const TT = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const kT = this._getDefines();
          if (this._drawWrapper.effect && kT === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const lT = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== kT && (this._cachedDefines = kT, this._drawWrapper.effect = TT.createEffect(lT, [XT.l.PositionKind], this._uniforms, this._samplers, kT, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([cT.e(382).then((() => cT(61264))), this._options.extraInitializationsAsync()]) : await Promise.all([cT.e(383).then((() => cT(61272))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await cT.e(382).then((() => cT(61264))) : await cT.e(383).then((() => cT(61272)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(TT) {
          this._fragment = TT
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(TT) {
          this._refreshRate = TT, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(TT, kT) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const cT = this._texture.isCube;
          this._rtWrapper.dispose();
          const lT = this._createRtWrapper(cT, TT, kT, this._textureType);
          this._texture = lT.texture, this._size = TT, this._generateMipMaps = kT
        }
        _checkUniform(TT) {
          -1 === this._uniforms.indexOf(TT) && this._uniforms.push(TT)
        }
        setTexture(TT, kT) {
          return -1 === this._samplers.indexOf(TT) && this._samplers.push(TT), this._textures[TT] = kT, this
        }
        setFloat(TT, kT) {
          return this._checkUniform(TT), this._floats[TT] = kT, this
        }
        setInt(TT, kT) {
          return this._checkUniform(TT), this._ints[TT] = kT, this
        }
        setFloats(TT, kT) {
          return this._checkUniform(TT), this._floatsArrays[TT] = kT, this
        }
        setColor3(TT, kT) {
          return this._checkUniform(TT), this._colors3[TT] = kT, this
        }
        setColor4(TT, kT) {
          return this._checkUniform(TT), this._colors4[TT] = kT, this
        }
        setVector2(TT, kT) {
          return this._checkUniform(TT), this._vectors2[TT] = kT, this
        }
        setVector3(TT, kT) {
          return this._checkUniform(TT), this._vectors3[TT] = kT, this
        }
        setVector4(TT, kT) {
          return this._checkUniform(TT), this._vectors4[TT] = kT, this
        }
        setMatrix(TT, kT) {
          return this._checkUniform(TT), this._matrices[TT] = kT, this
        }
        render(TT) {
          const kT = this.NJ();
          if (!kT) return;
          const cT = this._fullEngine;
          if (cT.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), cT.setState(!1), !this.nodeMaterialSource) {
            for (const TT in this._textures) this._drawWrapper.effect.setTexture(TT, this._textures[TT]);
            for (const TT in this._ints) this._drawWrapper.effect.setInt(TT, this._ints[TT]);
            for (const TT in this._floats) this._drawWrapper.effect.setFloat(TT, this._floats[TT]);
            for (const TT in this._floatsArrays) this._drawWrapper.effect.setArray(TT, this._floatsArrays[TT]);
            for (const TT in this._colors3) this._drawWrapper.effect.setColor3(TT, this._colors3[TT]);
            for (const TT in this._colors4) {
              const kT = this._colors4[TT];
              this._drawWrapper.effect.setFloat4(TT, kT.r, kT.g, kT.b, kT.a)
            }
            for (const TT in this._vectors2) this._drawWrapper.effect.setVector2(TT, this._vectors2[TT]);
            for (const TT in this._vectors3) this._drawWrapper.effect.setVector3(TT, this._vectors3[TT]);
            for (const TT in this._vectors4) this._drawWrapper.effect.setVector4(TT, this._vectors4[TT]);
            for (const TT in this._matrices) this._drawWrapper.effect.setMatrix(TT, this._matrices[TT])
          }
          if (!this._texture || !this._rtWrapper) return;
          cT._enableGPUDebugMarkers && cT._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const lT = cT.currentViewport;
          if (this.isCube)
            for (let MT = 0; MT < 6; MT++) cT.bindFramebuffer(this._rtWrapper, MT, void 0, void 0, !0), cT.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", MT), this.autoClear && cT.clear(kT.clearColor, !0, !1, !1), cT.drawElementsType(KT.e.TriangleFillMode, 0, 6), cT.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let TT = 1;
            this._rtWrapper.is3D ? TT = this._rtWrapper.depth : this._rtWrapper.is2DArray && (TT = this._rtWrapper.layers);
            for (let lT = 0; lT < TT; lT++) {
              if (cT.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, lT), cT.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== TT ? lT / (TT - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", lT);
                for (const TT in this._textures) this._drawWrapper.effect.setTexture(TT, this._textures[TT])
              }
              this.autoClear && cT.clear(kT.clearColor, !0, !1, !1), cT.drawElementsType(KT.e.TriangleFillMode, 0, 6), cT.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          lT && cT.setViewport(lT), this.isCube && cT.generateMipMapsForCubemap(this._texture, !0), cT._enableGPUDebugMarkers && cT._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const kT = this.getSize(),
            cT = new TT(this.name, kT.width, this._fragment, this.NJ(), this._fallbackTexture, this._generateMipMaps);
          return cT.hasAlpha = this.hasAlpha, cT.level = this.level, cT.coordinatesMode = this.coordinatesMode, cT
        }
        dispose() {
          const TT = this.NJ();
          if (!TT) return;
          const kT = TT.proceduralTextures.indexOf(this);
          kT >= 0 && TT.proceduralTextures.splice(kT, 1);
          const cT = this._vertexBuffers[XT.l.PositionKind];
          cT && (cT.dispose(), this._vertexBuffers[XT.l.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const cT = "function" === typeof Symbol && Symbol.metadata ? Object.create(fT[Symbol.metadata] ?? null) : void 0;
        kT = [(0, mT.J)()], lT = [(0, mT.J)()], MT = [(0, mT.J)()], OT = [(0, mT.J)()], yT = [(0, mT.J)()], (0, wT.e)(TT, null, yT, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: TT => "refreshRate" in TT,
            get: TT => TT.refreshRate
          },
          metadata: cT
        }, null, xT), (0, wT.e)(null, null, kT, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, kT) => {
              TT.isEnabled = kT
            }
          },
          metadata: cT
        }, IT, AT), (0, wT.e)(null, null, lT, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: TT => "autoClear" in TT,
            get: TT => TT.autoClear,
            set: (TT, kT) => {
              TT.autoClear = kT
            }
          },
          metadata: cT
        }, CT, jT), (0, wT.e)(null, null, MT, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: TT => "_generateMipMaps" in TT,
            get: TT => TT._generateMipMaps,
            set: (TT, kT) => {
              TT._generateMipMaps = kT
            }
          },
          metadata: cT
        }, vT, hT), (0, wT.e)(null, null, OT, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: TT => "_size" in TT,
            get: TT => TT._size,
            set: (TT, kT) => {
              TT._size = kT
            }
          },
          metadata: cT
        }, NT, QT), cT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cT
        })
      })(), TT
    })();

    function Kc(TT) {
      return "texture" in TT
    }

    function Oc(TT) {
      return "value" in TT
    }
    async function yc(TT, kT, lT) {
      const MT = [kT.red, kT.green, kT.blue, kT.alpha],
        KT = [],
        OT = [];
      for (let cT = 0; cT < 4; cT++) {
        const TT = MT[cT];
        if (TT)
          if (Kc(TT)) {
            if (TT.sourceChannel < 0 || TT.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let kT = KT.indexOf(TT.texture); - 1 === kT && (kT = KT.length, KT.push(TT.texture)), OT[cT] = kT
          } else {
            if (!Oc(TT)) throw new Error("Invalid channel input configuration");
            if (TT.value < 0 || TT.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            OT[cT] = -1
          }
        else OT[cT] = -1
      }
      let yT = kT.outputSize;
      if (!yT && KT.length > 0) {
        let TT = 0;
        for (const kT of KT) {
          const cT = kT.getSize(),
            lT = Math.max(cT.width, cT.height);
          lT > TT && (TT = lT, yT = cT.width === cT.height ? TT : cT)
        }
      }
      yT = yT || 512;
      const fT = [],
        xT = new Set;
      for (let cT = 0; cT < 4; cT++) {
        const TT = MT[cT],
          kT = ["RED", "GREEN", "BLUE", "ALPHA"][cT];
        if (TT && Kc(TT)) {
          fT.push(`${kT}_FROM_TEXTURE`);
          const TT = OT[cT];
          xT.add(TT)
        }
      }
      xT.forEach((TT => {
        fT.push(`USE_TEXTURE${TT}`)
      }));
      const IT = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: lT.Dv().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            lT.Dv().isWebGPU ? await Promise.all([cT.e(380).then((() => cT(61252)))]) : await Promise.all([cT.e(381).then((() => cT(61259)))])
          },
          skipSceneRegistration: !0
        },
        AT = new Mc(TT, yT, "textureMerger", lT, IT);
      AT.refreshRate = -1, AT.defines = fT.length > 0 ? "#define " + fT.join("\n#define ") + "\n" : "";
      for (let cT = 0; cT < KT.length; cT++) CT = KT[cT], (jT = AT).uOffset = CT.uOffset, jT.vOffset = CT.vOffset, jT.uScale = CT.uScale, jT.vScale = CT.vScale, jT.uAng = CT.uAng, jT.vAng = CT.vAng, jT.wAng = CT.wAng, jT.uRotationCenter = CT.uRotationCenter, jT.vRotationCenter = CT.vRotationCenter, AT.setTexture(`inputTexture${cT}`, KT[cT]);
      var CT, jT;
      for (let cT = 0; cT < 4; cT++) {
        const TT = MT[cT],
          kT = ["red", "green", "blue", "alpha"][cT];
        if (TT && Kc(TT)) {
          const lT = OT[cT];
          AT.setInt(`${kT}TextureIndex`, lT), AT.setInt(`${kT}SourceChannel`, TT.sourceChannel)
        } else {
          let lT;
          lT = TT && Oc(TT) ? TT.value : 3 === cT ? 1 : 0, AT.setFloat(`${kT}ConstantValue`, lT)
        }
      }
      return await new Promise(((TT, kT) => {
        AT.executeWhenReady((() => {
          try {
            AT.render(), TT(AT)
          } catch (cT) {
            kT(cT instanceof Error ? cT : new Error(String(cT)))
          }
        }))
      }))
    }

    function fc(TT, kT) {
      return {
        texture: TT,
        sourceChannel: kT
      }
    }

    function xc(TT) {
      return {
        value: TT
      }
    }

    function Ic(TT, kT, cT, lT) {
      return {
        red: TT,
        green: kT,
        blue: cT,
        alpha: lT
      }
    }
    var Ac = cT(39451),
      Cc = cT(39547),
      jc = cT(36918),
      vc = cT(39601),
      tc = cT(39533);
    class hc {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Nc extends Ac.c {
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
        return !!this._options?.enableMultiview || this.qv > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new hc;
        super(null), void 0 === TT.deterministicLockstep && (TT.deterministicLockstep = !1), void 0 !== TT.timeStep && (this._timeStep = TT.timeStep), void 0 === TT.lockstepMaxSteps && (TT.lockstepMaxSteps = 4), this._options = TT, jc.d.SetMatrixPrecision(!!TT.useHighPrecisionMatrix), this._caps = {
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
        }, TT.enableMultiview && (this._caps.multiview = {
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
        }, TT.renderingCanvas && (this._renderingCanvas = TT.renderingCanvas), bT.e.Log(`Babylon.js v${Ac.c.Version} - Null engine`);
        const kT = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (kT.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (kT.Blob = function() {})
      }
      createVertexBuffer(TT) {
        const kT = new Cc.c;
        return kT.references = 1, kT
      }
      createIndexBuffer(TT) {
        const kT = new Cc.c;
        return kT.references = 1, kT
      }
      clear(TT, kT, cT) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(TT, kT, cT) {
        this._cachedViewport = TT
      }
      createUniformBuffer(TT) {
        const kT = new Cc.c;
        return kT.references = 1, kT.DA = TT instanceof Array ? TT.length * Float32Array.BYTES_PER_ELEMENT : TT.byteLength, kT
      }
      createDynamicUniformBuffer(TT) {
        return this.createUniformBuffer(TT)
      }
      updateUniformBuffer(TT, kT, cT, lT) {}
      bindUniformBufferBase(TT, kT, cT) {}
      bindUniformBlock(TT, kT, cT) {}
      createShaderProgram(TT, kT, cT, lT, MT) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(TT, kT) {
        return []
      }
      getAttributes(TT, kT) {
        return []
      }
      bindSamplers(TT) {
        this._currentEffect = null
      }
      enableEffect(TT) {
        TT = null !== TT && (0, tc.d)(TT) ? TT.effect : TT, this._currentEffect = TT, TT && (TT.onBind && TT.onBind(TT), TT._onBindObservable && TT._onBindObservable.notifyObservers(TT))
      }
      setStateCullFaceType(TT, kT) {}
      setState(TT) {}
      setIntArray(TT, kT) {
        return !0
      }
      setIntArray2(TT, kT) {
        return !0
      }
      setIntArray3(TT, kT) {
        return !0
      }
      setIntArray4(TT, kT) {
        return !0
      }
      setFloatArray(TT, kT) {
        return !0
      }
      setFloatArray2(TT, kT) {
        return !0
      }
      setFloatArray3(TT, kT) {
        return !0
      }
      setFloatArray4(TT, kT) {
        return !0
      }
      setArray(TT, kT) {
        return !0
      }
      setArray2(TT, kT) {
        return !0
      }
      setArray3(TT, kT) {
        return !0
      }
      setArray4(TT, kT) {
        return !0
      }
      setMatrices(TT, kT) {
        return !0
      }
      setMatrix3x3(TT, kT) {
        return !0
      }
      setMatrix2x2(TT, kT) {
        return !0
      }
      setFloat(TT, kT) {
        return !0
      }
      setFloat2(TT, kT, cT) {
        return !0
      }
      setFloat3(TT, kT, cT, lT) {
        return !0
      }
      setBool(TT, kT) {
        return !0
      }
      setFloat4(TT, kT, cT, lT, MT) {
        return !0
      }
      setAlphaMode(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[cT] !== TT && (this.alphaState.setAlphaBlend(0 !== TT, 0), kT || this.setDepthWrite(0 === TT), this._alphaMode[cT] = TT)
      }
      bindBuffers(TT, kT, cT) {}
      wipeCaches(TT) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, TT && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(TT, kT, cT, lT) {}
      drawElementsType(TT, kT, cT, lT) {}
      drawArraysType(TT, kT, cT, lT) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(TT) {}
      createTexture(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          OT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          yT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const fT = new mk.b(this, 1),
          xT = String(TT);
        return fT.url = xT, fT.generateMipMaps = !kT, fT.samplingMode = MT, fT.invertY = cT, fT.baseWidth = this._options.textureSize, fT.baseHeight = this._options.textureSize, fT.width = this._options.textureSize, fT.height = this._options.textureSize, yT && (fT.format = yT), OT && (fT._buffer = OT), fT.isReady = !0, KT && setTimeout((() => {
          KT(fT)
        })), this._internalTexturesCache.push(fT), fT
      }
      _createHardwareRenderTargetWrapper(TT, kT, cT) {
        const lT = new vc.d(TT, kT, cT, this);
        return this._renderTargetWrapperCache.push(lT), lT
      }
      createRenderTargetTexture(TT, kT) {
        const cT = this._createHardwareRenderTargetWrapper(!1, !1, TT),
          lT = {};
        void 0 !== kT && "object" === typeof kT ? (lT.generateMipMaps = kT.generateMipMaps, lT.generateDepthBuffer = void 0 === kT.generateDepthBuffer || kT.generateDepthBuffer, lT.generateStencilBuffer = lT.generateDepthBuffer && kT.generateStencilBuffer, lT.type = void 0 === kT.type ? 0 : kT.type, lT.samplingMode = void 0 === kT.samplingMode ? 3 : kT.samplingMode) : (lT.generateMipMaps = kT, lT.generateDepthBuffer = !0, lT.generateStencilBuffer = !1, lT.type = 0, lT.samplingMode = 3);
        const MT = new mk.b(this, 5);
        cT.setTexture(MT);
        const KT = TT.width || TT,
          OT = TT.height || TT;
        return cT._generateDepthBuffer = lT.generateDepthBuffer, cT._generateStencilBuffer = !!lT.generateStencilBuffer, MT.baseWidth = KT, MT.baseHeight = OT, MT.width = KT, MT.height = OT, MT.isReady = !0, MT.samples = 1, MT.generateMipMaps = !!lT.generateMipMaps, MT.samplingMode = lT.samplingMode, MT.type = lT.type, this._internalTexturesCache.push(MT), cT
      }
      createMultiviewRenderTargetTexture(TT, kT) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const cT = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: TT,
            height: kT
          }),
          lT = new mk.b(this, 5, !0);
        return lT.baseWidth = TT, lT.baseHeight = kT, lT.width = TT, lT.height = kT, lT.isMultiview = !0, lT.isReady = !0, lT.format = 5, lT.samples = 1, cT.setTextures(lT), cT
      }
      bindMultiviewFramebuffer(TT) {
        this.bindFramebuffer(TT, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(TT, kT) {
        const cT = this._createHardwareRenderTargetWrapper(!1, !0, TT),
          lT = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...kT
          };
        lT.generateStencilBuffer = lT.generateDepthBuffer && lT.generateStencilBuffer, (1 !== lT.type || this._caps.textureFloatLinearFiltering) && (2 !== lT.type || this._caps.textureHalfFloatLinearFiltering) || (lT.samplingMode = 1), cT._generateDepthBuffer = lT.generateDepthBuffer, cT._generateStencilBuffer = !!lT.generateStencilBuffer;
        const MT = new mk.b(this, 5);
        return MT.baseWidth = TT, MT.baseHeight = TT, MT.width = TT, MT.height = TT, MT.isReady = !0, MT.isCube = !0, MT.samples = 1, MT.generateMipMaps = !!lT.generateMipMaps, MT.samplingMode = lT.samplingMode, MT.type = lT.type, this._internalTexturesCache.push(MT), cT
      }
      updateTextureSamplingMode(TT, kT) {
        kT.samplingMode = TT
      }
      createRawTexture(TT, kT, cT, lT, MT, KT, OT) {
        let yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          fT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          xT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const IT = new mk.b(this, 3);
        return IT.baseWidth = kT, IT.baseHeight = cT, IT.width = kT, IT.height = cT, IT.format = lT, IT.generateMipMaps = MT, IT.samplingMode = OT, IT.invertY = KT, IT._compression = yT, IT.type = fT, IT._useSRGBBuffer = xT, this._doNotHandleContextLost || (IT._bufferView = TT), IT
      }
      updateRawTexture(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        TT && (TT._bufferView = kT, TT.format = cT, TT.invertY = lT, TT._compression = MT, TT.type = KT, TT._useSRGBBuffer = OT)
      }
      bindFramebuffer(TT, kT, cT, lT, MT) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = TT, this._currentFramebuffer = null, this._cachedViewport && !MT && this.setViewport(this._cachedViewport, cT, lT)
      }
      unBindFramebuffer(TT) {
        let kT = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, kT && kT(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(TT) {
        const kT = new Cc.c;
        return kT.references = 1, kT.DA = 1, kT
      }
      updateDynamicTexture(TT, kT, cT) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(TT) {}
      updateDynamicIndexBuffer(TT, kT) {}
      updateDynamicVertexBuffer(TT, kT, cT, lT) {}
      _bindTextureDirectly(TT, kT) {
        return this._boundTexturesCache[this._activeChannel] !== kT && (this._boundTexturesCache[this._activeChannel] = kT, !0)
      }
      _bindTexture(TT, kT) {
        TT < 0 || this._bindTextureDirectly(0, kT)
      }
      _deleteBuffer(TT) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(TT) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(TT, kT, cT, lT, MT) {}
      _uploadDataToTextureDirectly(TT, kT) {}
      _uploadArrayBufferViewToTexture(TT, kT) {}
      _uploadImageToTexture(TT, kT) {}
    }
    cT(39657), cT(39703), cT(39651);
    async function Qc(TT) {
      const kT = TT.getInternalTexture();
      if (!kT || 1 !== kT.source) return null;
      if (kT.invertY) {
        const kT = TT.NJ()?.Dv();
        if (!(kT instanceof Nc)) return null
      }
      const cT = kT._buffer;
      let lT, KT = TT.mimeType;
      try {
        cT ? ArrayBuffer.isView(cT) ? lT = cT.buffer.slice(cT.byteOffset, cT.byteOffset + cT.byteLength) : cT instanceof ArrayBuffer ? lT = cT : cT instanceof Blob ? (lT = await cT.arrayBuffer(), KT = cT.type || KT) : "string" === typeof cT ? (lT = await MT.Tools.LoadFileAsync(cT), KT = (0, fT.e)(cT) || KT) : "undefined" !== typeof HTMLImageElement && cT instanceof HTMLImageElement && (lT = await MT.Tools.LoadFileAsync(cT.src), KT = (0, fT.e)(cT.src) || KT) : (lT = await MT.Tools.LoadFileAsync(kT.url), KT = (0, fT.e)(kT.url) || KT)
      } catch {
        return null
      }
      if (lT && !KT && kT.url) {
        const TT = kT.url.match(/^data:([^;,]+)/);
        KT = TT ? TT[1] : (0, fT.e)(kT.url)
      }
      return lT && KT ? {
        data: lT,
        mimeType: KT
      } : null
    }
    const Sc = 1e-6,
      Dc = new hT.Color3(.04, .04, .04),
      ac = 1024,
      Fc = hT.Color3.White(),
      rc = hT.Color3.BlackReadOnly;

    function Pc(TT) {
      switch (TT) {
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

    function wc(TT, kT, cT) {
      if (kT < Dc.r) return 0;
      const lT = Dc.r,
        MT = TT * cT / (1 - Dc.r) + kT - 2 * Dc.r,
        KT = MT * MT - 4 * lT * (Dc.r - kT);
      return ST.Clamp((-MT + Math.sqrt(KT)) / (2 * lT), 0, 1)
    }

    function mc(TT) {
      const kT = TT.diffuseColor.toLinearSpace(TT.NJ().Dv().useExactSrgbConversions).scale(.5),
        cT = TT.alpha,
        lT = function(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new uT.i(0, 1),
            cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uT.i(0, .1),
            lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uT.i(0, .1),
            MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new uT.i(1300, .1);
          return function(TT, kT, cT, lT, MT) {
            return (1 - TT) * (1 - TT) * (1 - TT) * kT + 3 * (1 - TT) * (1 - TT) * TT * cT + 3 * (1 - TT) * TT * TT * lT + TT * TT * TT * MT
          }(Math.pow(TT / MT.x, .333333), kT.y, cT.y, lT.y, MT.y)
        }(ST.Clamp(TT.specularPower, 0, ac));
      return {
        baseColorFactor: [kT.r, kT.g, kT.b, cT],
        metallicFactor: 0,
        roughnessFactor: lT
      }
    }

    function bc(TT, kT) {
      kT.needAlphaBlending() ? TT.alphaMode = "BLEND" : kT.needAlphaTesting() && (TT.alphaMode = "MASK", TT.alphaCutoff = kT.alphaCutOff)
    }

    function zc(TT, kT, cT) {
      const lT = new Uint8Array(TT * kT * 4);
      for (let MT = 0; MT < lT.length; MT += 4) lT[MT] = lT[MT + 1] = lT[MT + 2] = lT[MT + 3] = 255;
      return FT.c.CreateRGBATexture(lT, TT, kT, cT)
    }

    function Jc(TT) {
      if (TT instanceof Uint8Array) {
        const kT = TT.length,
          cT = new Float32Array(TT.length);
        for (let lT = 0; lT < kT; ++lT) cT[lT] = TT[lT] / 255;
        return cT
      }
      if (TT instanceof Float32Array) return TT;
      throw new Error("Unsupported pixel format!")
    }
    class oc {
      constructor(TT) {
        this._exporter = TT, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(TT) {
        return TT ? this._textureMap.get(TT.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(TT, kT) {
        const cT = mc(TT),
          lT = {
            name: TT.name
          };
        if (null == TT.backFaceCulling || TT.backFaceCulling || (TT.twoSidedLighting || MT.Tools.Warn(TT.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), lT.doubleSided = !0), kT) {
          const kT = [],
            MT = TT.diffuseTexture;
          MT && kT.push(this.exportTextureAsync(MT).then((TT => {
            TT && (cT.baseColorTexture = TT)
          })));
          const KT = TT.bumpTexture;
          KT && kT.push(this.exportTextureAsync(KT).then((TT => {
            TT && (lT.normalTexture = TT, 1 !== KT.level && (lT.normalTexture.scale = KT.level))
          })));
          const OT = TT.emissiveTexture;
          OT && (lT.emissiveFactor = [1, 1, 1], kT.push(this.exportTextureAsync(OT).then((TT => {
            TT && (lT.emissiveTexture = TT)
          }))));
          const yT = TT.ambientTexture;
          yT && kT.push(this.exportTextureAsync(yT).then((TT => {
            if (TT) {
              const kT = {
                index: TT.index
              };
              lT.occlusionTexture = kT
            }
          }))), kT.length > 0 && (this._exporter._materialNeedsUVsSet.add(TT), await Promise.all(kT))
        }(TT.alpha < 1 || TT.opacityTexture) && (TT.alphaMode === rT.e.ALPHA_COMBINE ? lT.alphaMode = "BLEND" : MT.Tools.Warn(TT.name + ": glTF 2.0 does not support alpha mode: " + TT.alphaMode.toString())), TT.emissiveColor && !TT.emissiveColor.equalsWithEpsilon(rc, Sc) && (lT.emissiveFactor = TT.emissiveColor.acT()), lT.pbrMetallicRoughness = cT, bc(lT, TT), await this._finishMaterialAsync(lT, TT);
        const KT = this._exporter._materials;
        return KT.push(lT), KT.length - 1
      }
      async _finishMaterialAsync(TT, kT) {
        const cT = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", TT, kT),
          lT = [];
        for (const MT of cT) lT.push(this.exportTextureAsync(MT));
        await Promise.all(lT), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", TT, kT)
      }
      _resizeTexturesToSameDimensions(TT, kT, cT) {
        const lT = TT ? TT.getSize() : {
            width: 0,
            height: 0
          },
          MT = kT ? kT.getSize() : {
            width: 0,
            height: 0
          };
        let KT, OT;
        return lT.width < MT.width ? (KT = TT && TT instanceof aT.c ? DT.f.CreateResizedCopy(TT, MT.width, MT.height, !0) : zc(MT.width, MT.height, cT), OT = kT) : lT.width > MT.width ? (OT = kT && kT instanceof aT.c ? DT.f.CreateResizedCopy(kT, lT.width, lT.height, !0) : zc(lT.width, lT.height, cT), KT = TT) : (KT = TT, OT = kT), {
          texture1: KT,
          texture2: OT
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(TT, kT, cT) {
        const lT = new Array;
        if (!TT && !kT) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const MT = TT ? TT.NJ() : kT ? kT.NJ() : null;
        if (MT) {
          const KT = this._resizeTexturesToSameDimensions(TT, kT, MT),
            OT = KT.texture1?.getSize();
          let yT, fT;
          const xT = OT.width,
            IT = OT.height,
            AT = await KT.texture1.readPixels(),
            CT = await KT.texture2.readPixels();
          if (!AT) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (yT = Jc(AT), !CT) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          fT = Jc(CT);
          const jT = fT.byteLength,
            vT = new Uint8Array(jT),
            tT = new Uint8Array(jT),
            NT = 4,
            QT = new hT.Color3(0, 0, 0);
          let ST = 0,
            DT = 0;
          for (let TT = 0; TT < IT; ++TT)
            for (let kT = 0; kT < xT; ++kT) {
              const lT = (xT * TT + kT) * NT,
                OT = {
                  diffuseColor: new hT.Color3(yT[lT], yT[lT + 1], yT[lT + 2]).toLinearSpace(MT.Dv().useExactSrgbConversions).multiply(cT.diffuseColor),
                  specularColor: new hT.Color3(fT[lT], fT[lT + 1], fT[lT + 2]).toLinearSpace(MT.Dv().useExactSrgbConversions).multiply(cT.specularColor),
                  glossiness: fT[lT + 3] * cT.glossiness
                },
                IT = this._convertSpecularGlossinessToMetallicRoughness(OT);
              QT.r = Math.max(QT.r, IT.baseColor.r), QT.g = Math.max(QT.g, IT.baseColor.g), QT.b = Math.max(QT.b, IT.baseColor.b), ST = Math.max(ST, IT.metallic), DT = Math.max(DT, IT.roughness), tT[lT] = 255 * IT.baseColor.r, tT[lT + 1] = 255 * IT.baseColor.g, tT[lT + 2] = 255 * IT.baseColor.b, tT[lT + 3] = KT.texture1.hasAlpha ? 255 * yT[lT + 3] : 255, vT[lT] = 0, vT[lT + 1] = 255 * IT.roughness, vT[lT + 2] = 255 * IT.metallic, vT[lT + 3] = 255
            }
          const aT = {
            baseColor: QT,
            metallic: ST,
            roughness: DT
          };
          let FT = !1,
            rT = !1;
          for (let TT = 0; TT < IT; ++TT)
            for (let kT = 0; kT < xT; ++kT) {
              const cT = (xT * TT + kT) * NT;
              tT[cT] /= aT.baseColor.r > Sc ? aT.baseColor.r : 1, tT[cT + 1] /= aT.baseColor.g > Sc ? aT.baseColor.g : 1, tT[cT + 2] /= aT.baseColor.b > Sc ? aT.baseColor.b : 1;
              const lT = hT.Color3.FromInts(tT[cT], tT[cT + 1], tT[cT + 2]).toGammaSpace(MT.Dv().useExactSrgbConversions);
              tT[cT] = 255 * lT.r, tT[cT + 1] = 255 * lT.g, tT[cT + 2] = 255 * lT.b, lT.equalsWithEpsilon(Fc, Sc) || (rT = !0), vT[cT + 1] /= aT.roughness > Sc ? aT.roughness : 1, vT[cT + 2] /= aT.metallic > Sc ? aT.metallic : 1;
              hT.Color3.FromInts(255, vT[cT + 1], vT[cT + 2]).equalsWithEpsilon(Fc, Sc) || (FT = !0)
            }
          return FT && lT.push((0, PT.EncodeImageAsync)(vT, xT, IT).then((TT => {
            aT.metallicRoughnessTextureData = TT
          }))), rT && lT.push((0, PT.EncodeImageAsync)(tT, xT, IT).then((TT => {
            aT.baseColorTextureData = TT
          }))), await Promise.all(lT).then((() => aT))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(TT) {
        const kT = this._getPerceivedBrightness(TT.diffuseColor),
          cT = this._getPerceivedBrightness(TT.specularColor),
          lT = 1 - this._getMaxComponent(TT.specularColor),
          MT = wc(kT, cT, lT),
          KT = TT.diffuseColor.scale(lT / (1 - Dc.r) / Math.max(1 - MT, Sc)),
          OT = TT.specularColor.subtract(Dc.scale(1 - MT)).scale(1 / Math.max(MT, Sc));
        let yT = hT.Color3.Lerp(KT, OT, MT * MT);
        yT = yT.clampToRef(0, 1, yT);
        return {
          baseColor: yT,
          metallic: MT,
          roughness: 1 - TT.glossiness
        }
      }
      _getPerceivedBrightness(TT) {
        return Math.sqrt(.299 * TT.r * TT.r + .587 * TT.g * TT.g + .114 * TT.b * TT.b)
      }
      _getMaxComponent(TT) {
        return Math.max(TT.r, Math.max(TT.g, TT.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(TT, kT, cT, lT, MT, KT, OT, yT, fT) {
        const xT = [],
          IT = {
            baseColor: TT,
            metallic: kT,
            roughness: cT
          };
        if (fT)
          if (OT instanceof sk) {
            if (OT.geometryOpacityTexture) {
              const TT = lT && lT.getInternalTexture() ? lT.getInternalTexture().uniqueId : 0,
                kT = OT.geometryOpacityTexture && OT.geometryOpacityTexture.getInternalTexture() ? OT.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                cT = Number(`${TT}${kT}`),
                MT = this._textureMap.get(cT);
              MT ? yT.baseColorTexture = MT : xT.push(yc("baseColorOpacityTexture", Ic(lT ? fc(lT, 0) : xc(1), lT ? fc(lT, 1) : xc(1), lT ? fc(lT, 2) : xc(1), fc(OT.geometryOpacityTexture, 0)), OT.NJ()).then((async TT => {
                const kT = await this.exportTextureAsync(TT, cT);
                kT && (yT.baseColorTexture = kT)
              })))
            } else lT && xT.push(this.exportTextureAsync(lT).then((TT => {
              TT && (yT.baseColorTexture = TT)
            })));
            if (OT._useMetallicFromMetallicTextureBlue && MT) xT.push(this.exportTextureAsync(MT).then((TT => {
              TT && (yT.metallicRoughnessTexture = TT)
            })));
            else if (KT || MT) {
              const TT = MT && MT.getInternalTexture() ? MT.getInternalTexture().uniqueId : 0,
                kT = KT && KT.getInternalTexture() ? KT.getInternalTexture().uniqueId : 0,
                cT = Number(`${TT}${kT}`),
                lT = this._textureMap.get(cT);
              lT ? yT.metallicRoughnessTexture = lT : xT.push(yc("MetalRoughTexture", Ic(OT.ambientOcclusionTexture ? fc(OT.ambientOcclusionTexture, 0) : xc(1), KT ? fc(KT, 0) : xc(1), MT ? fc(MT, 0) : xc(1)), OT.NJ()).then((async TT => {
                const kT = await this.exportTextureAsync(TT, cT);
                kT && (yT.metallicRoughnessTexture = kT)
              })))
            }
          } else lT && xT.push(this.exportTextureAsync(lT).then((TT => {
            TT && (yT.baseColorTexture = TT)
          }))), MT && xT.push(this.exportTextureAsync(MT).then((TT => {
            TT && (yT.metallicRoughnessTexture = TT)
          })));
        return xT.length > 0 && (this._exporter._materialNeedsUVsSet.add(OT), await Promise.all(xT)), IT
      }
      _getTextureSampler(TT) {
        const kT = {};
        if (!TT || !(TT instanceof aT.c)) return kT;
        const cT = this._getGLTFTextureWrapMode(TT.wrapU);
        10497 !== cT && (kT.wrapS = cT);
        const lT = this._getGLTFTextureWrapMode(TT.wrapV);
        switch (10497 !== lT && (kT.wrapT = lT), TT.samplingMode) {
          case aT.c.LINEAR_LINEAR:
            kT.magFilter = 9729, kT.minFilter = 9729;
            break;
          case aT.c.LINEAR_NEAREST:
            kT.magFilter = 9729, kT.minFilter = 9728;
            break;
          case aT.c.NEAREST_LINEAR:
            kT.magFilter = 9728, kT.minFilter = 9729;
            break;
          case aT.c.NEAREST_LINEAR_MIPLINEAR:
            kT.magFilter = 9728, kT.minFilter = 9987;
            break;
          case aT.c.NEAREST_NEAREST:
            kT.magFilter = 9728, kT.minFilter = 9728;
            break;
          case aT.c.NEAREST_LINEAR_MIPNEAREST:
            kT.magFilter = 9728, kT.minFilter = 9985;
            break;
          case aT.c.LINEAR_NEAREST_MIPNEAREST:
            kT.magFilter = 9729, kT.minFilter = 9984;
            break;
          case aT.c.LINEAR_NEAREST_MIPLINEAR:
            kT.magFilter = 9729, kT.minFilter = 9986;
            break;
          case aT.c.NEAREST_NEAREST_MIPLINEAR:
            kT.magFilter = 9728, kT.minFilter = 9986;
            break;
          case aT.c.LINEAR_LINEAR_MIPLINEAR:
            kT.magFilter = 9729, kT.minFilter = 9987;
            break;
          case aT.c.LINEAR_LINEAR_MIPNEAREST:
            kT.magFilter = 9729, kT.minFilter = 9985;
            break;
          case aT.c.NEAREST_NEAREST_MIPNEAREST:
            kT.magFilter = 9728, kT.minFilter = 9984
        }
        return kT
      }
      _getGLTFTextureWrapMode(TT) {
        switch (TT) {
          case aT.c.WRAP_ADDRESSMODE:
            return 10497;
          case aT.c.CLAMP_ADDRESSMODE:
            return 33071;
          case aT.c.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return MT.Tools.Error(`Unsupported Texture Wrap Mode ${TT}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(TT, kT, cT) {
        const lT = {
            diffuseColor: TT._albedoColor,
            specularColor: TT._reflectivityColor,
            glossiness: TT._microSurface
          },
          MT = TT._albedoTexture,
          KT = TT._reflectivityTexture,
          OT = TT._useMicroSurfaceFromReflectivityMapAlpha;
        if (KT && !OT) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((MT || KT) && cT) {
          this._exporter._materialNeedsUVsSet.add(TT);
          const cT = this._exportTextureSampler(MT || KT),
            OT = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(MT, KT, lT),
            yT = this._exporter._textures;
          if (OT.baseColorTextureData) {
            const TT = await this._exportImageAsync(`baseColor${yT.length}`, OT.baseColorTextureData);
            kT.baseColorTexture = this._exportTextureInfo(TT, cT, MT?.coordinatesIndex)
          }
          if (OT.metallicRoughnessTextureData) {
            const TT = await this._exportImageAsync(`metallicRoughness${yT.length}`, OT.metallicRoughnessTextureData);
            kT.metallicRoughnessTexture = this._exportTextureInfo(TT, cT, KT?.coordinatesIndex)
          }
          return OT
        }
        return this._convertSpecularGlossinessToMetallicRoughness(lT)
      }
      async exportPBRMaterialAsync(TT, kT) {
        const cT = {},
          lT = {
            name: TT.name
          },
          MT = TT.isMetallicWorkflow();
        if (MT) {
          const kT = TT._albedoColor,
            lT = TT.alpha;
          kT && (cT.baseColorFactor = [kT.r, kT.g, kT.b, lT])
        }
        const KT = MT ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(TT._albedoColor, TT._metallic, TT._roughness, TT._albedoTexture, TT._metallicTexture, TT._metallicTexture, TT, cT, kT) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(TT, cT, kT);
        await this._setMetallicRoughnessPbrMaterialAsync(KT, TT, lT, cT, kT), await this._finishMaterialAsync(lT, TT);
        const OT = this._exporter._materials;
        return OT.push(lT), OT.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(TT, kT, cT, lT, KT) {
        if (bc(cT, kT), TT.baseColor.equalsWithEpsilon(Fc, Sc) && ST.WithinEpsilon(kT.alpha, 1, Sc) || (lT.baseColorFactor = [TT.baseColor.r, TT.baseColor.g, TT.baseColor.b, kT.alpha]), null != TT.metallic && 1 !== TT.metallic && (lT.metallicFactor = TT.metallic), null != TT.roughness && 1 !== TT.roughness && (lT.roughnessFactor = TT.roughness), null == kT.backFaceCulling || kT.backFaceCulling || (kT._twoSidedLighting || MT.Tools.Warn(kT.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), cT.doubleSided = !0), KT) {
          const TT = [],
            MT = kT instanceof Fk ? kT._bumpTexture : kT.geometryNormalTexture;
          MT && TT.push(this.exportTextureAsync(MT).then((TT => {
            TT && (cT.normalTexture = TT, 1 !== MT.level && (cT.normalTexture.scale = MT.level))
          })));
          const KT = kT instanceof Fk ? kT._ambientTexture : kT.ambientOcclusionTexture;
          KT && TT.push(new Promise((async TT => {
            if (kT instanceof sk && lT.metallicRoughnessTexture) {
              const kT = this._exportTextureSampler(KT),
                cT = this._exporter._textures[lT.metallicRoughnessTexture.index].source,
                MT = this._exportTextureInfo(cT, kT, KT.coordinatesIndex);
              return this._textureMap.set(KT.uniqueId, MT), this._exporter._extensionsPostExportTextures("exporter", MT, KT), TT(MT)
            }
            return TT(await this.exportTextureAsync(KT))
          })).then((async TT => {
            if (TT) {
              const lT = {
                index: TT.index,
                texCoord: TT.texCoord,
                extensions: TT.extensions
              };
              cT.occlusionTexture = lT, lT.strength = kT instanceof Fk ? kT._ambientTextureStrength : kT.ambientOcclusionTexture.level
            }
          })));
          const OT = kT instanceof Fk ? kT._emissiveTexture : kT.emissionColorTexture;
          OT && TT.push(this.exportTextureAsync(OT).then((TT => {
            TT && (cT.emissiveTexture = TT)
          }))), TT.length > 0 && (this._exporter._materialNeedsUVsSet.add(kT), await Promise.all(TT))
        }
        const OT = kT instanceof Fk ? kT._emissiveColor : kT.emissionColor;
        OT.equalsWithEpsilon(rc, Sc) || (cT.emissiveFactor = OT.acT()), cT.pbrMetallicRoughness = lT
      }
      async exportOpenPBRMaterialAsync(TT, kT) {
        const cT = {},
          lT = {
            name: TT.name
          },
          MT = TT.baseColor,
          KT = TT.geometryOpacity;
        MT && (cT.baseColorFactor = [MT.r, MT.g, MT.b, KT]);
        const OT = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(TT.baseColor, TT.baseMetalness, TT.specularRoughness, TT.baseColorTexture, TT.baseMetalnessTexture, TT.specularRoughnessTexture, TT, cT, kT);
        await this._setMetallicRoughnessPbrMaterialAsync(OT, TT, lT, cT, kT), await this._finishMaterialAsync(lT, TT);
        const yT = this._exporter._materials;
        return yT.push(lT), yT.length - 1
      }
      async exportTextureAsync(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = this._textureMap.get(kT ?? TT.uniqueId);
        if (cT) return cT;
        const lT = this._exportTextureSampler(TT),
          MT = await this._exportTextureImageAsync(TT);
        return cT = this._exportTextureInfo(MT, lT, TT.coordinatesIndex), this._textureMap.set(kT ?? TT.uniqueId, cT), this._exporter._extensionsPostExportTextures("exporter", cT, TT), cT
      }
      async _exportTextureImageAsync(TT) {
        const kT = TT.mimeType ?? "none",
          cT = this._internalTextureToImage,
          lT = TT.getInternalTexture().uniqueId;
        cT[lT] = cT[lT] || {};
        let KT = cT[lT][kT];
        return void 0 === KT && (KT = (async () => {
          const cT = await Qc(TT);
          if (cT && Pc(cT.mimeType) && ("none" === kT || cT.mimeType === kT)) return await this._exportImageAsync(TT.name, new Blob([cT.data], {
            type: cT.mimeType
          }));
          let lT = "image/png";
          "none" !== kT && (Pc(kT) ? lT = kT : (lT = "image/png", MT.Tools.Warn(`Unsupported media type: ${kT}. Exporting texture as PNG.`)));
          const KT = TT.getSize(),
            OT = await (0, DT.c)(TT),
            yT = await (0, PT.EncodeImageAsync)(OT, KT.width, KT.height, lT);
          return await this._exportImageAsync(TT.name, yT)
        })(), cT[lT][kT] = KT), await KT
      }
      async _exportImageAsync(TT, kT) {
        const cT = this._exporter._images;
        let lT;
        if (this._exporter._shouldUseGlb) {
          lT = {
            name: TT,
            mimeType: kT.type,
            bufferView: void 0
          };
          const cT = await kT.arrayBuffer(),
            MT = this._exporter._bufferManager.createBufferView(new Uint8Array(cT));
          this._exporter._bufferManager.setBufferView(lT, MT)
        } else {
          const KT = TT.replace(/\.\/|\/|\.\\|\\/g, "_"),
            OT = function(TT) {
              switch (TT) {
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
            }(kT.type);
          let yT = KT + OT;
          cT.some((TT => TT.uri === yT)) && (yT = `${KT}_${MT.Tools.RandomId()}${OT}`), lT = {
            name: TT,
            uri: yT
          }, this._exporter._imageData[yT] = kT
        }
        return cT.push(lT), cT.length - 1
      }
      _exportTextureInfo(TT, kT, cT) {
        const lT = this._exporter._textures;
        let MT = lT.findIndex((cT => cT.sampler == kT && cT.source === TT)); - 1 === MT && (MT = lT.length, lT.push({
          source: TT,
          sampler: kT
        }));
        const KT = {
          index: MT
        };
        return cT && (KT.texCoord = cT), KT
      }
      _exportTextureSampler(TT) {
        const kT = this._getTextureSampler(TT),
          cT = this._exporter._samplers,
          lT = cT.findIndex((TT => TT.minFilter === kT.minFilter && TT.magFilter === kT.magFilter && TT.wrapS === kT.wrapS && TT.wrapT === kT.wrapT));
        return -1 !== lT ? lT : (cT.push(kT), cT.length - 1)
      }
    }
    var Hc = cT(39689),
      ec = cT(39839);
    (0, ec.c)();
    var Gc = cT(36901);
    const Vc = lT.Matrix.Compose(new lT.Fv(-1, 1, 1), lT.Quaternion.Identity(), lT.Fv.Zero());

    function Ec(TT, kT) {
      if (!(TT instanceof AT.b)) return !1;
      if (kT) {
        if (!TT.getWorldMatrix().equalsWithEpsilon(lT.Matrix.IdentityReadOnly, Gc.b)) return !1
      } else {
        if (!TT.getWorldMatrix().multiplyToRef(Vc, lT.TmpVectors.Matrix[0]).equalsWithEpsilon(lT.Matrix.IdentityReadOnly, Gc.b)) return !1
      }
      return !(TT instanceof CT.d && TT.geometry)
    }
    const Zc = lT.Fv.ZeroReadOnly,
      uc = lT.Quaternion.Identity(),
      Xc = lT.Fv.OneReadOnly,
      dc = new lT.Fv(-1, 1, 1);

    function Lc(TT, kT) {
      const {
        byteOffset: cT,
        byteStride: lT,
        type: MT,
        normalized: KT
      } = TT, OT = TT.getSize(), yT = kT.reduce(((TT, kT) => kT.getTotalVertices() > TT ? kT.getTotalVertices() : TT), -Number.MAX_VALUE);
      return {
        byteOffset: cT,
        byteStride: lT,
        componentCount: OT,
        type: MT,
        count: yT * OT,
        normalized: KT,
        totalVertices: yT,
        kind: TT.getKind()
      }
    }

    function Rc(TT) {
      switch (TT) {
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

    function gc(TT) {
      switch (TT) {
        case IT.i.PositionKind:
        case IT.i.NormalKind:
        case IT.i.TangentKind:
        case IT.i.ColorKind:
        case IT.i.MatricesIndicesKind:
        case IT.i.MatricesIndicesExtraKind:
        case IT.i.MatricesWeightsKind:
        case IT.i.MatricesWeightsExtraKind:
        case IT.i.UVKind:
        case IT.i.UV2Kind:
        case IT.i.UV3Kind:
        case IT.i.UV4Kind:
        case IT.i.UV5Kind:
        case IT.i.UV6Kind:
          return !0
      }
      return !1
    }

    function Uc(TT) {
      const kT = Math.sqrt(TT.x * TT.x + TT.y * TT.y + TT.z * TT.z);
      kT > 0 && (TT.x /= kT, TT.y /= kT, TT.z /= kT)
    }

    function Yc(TT) {
      return TT.x *= -1, TT
    }

    function Bc(TT) {
      if (TT.x * TT.x + TT.y * TT.y > .5) {
        const kT = Math.abs(TT.x),
          cT = Math.abs(TT.y);
        if (kT > cT) {
          const cT = Math.sign(TT.x);
          TT.x = kT, TT.y *= -cT, TT.z *= -cT, TT.w *= cT
        } else {
          const kT = Math.sign(TT.y);
          TT.x *= -kT, TT.y = cT, TT.z *= kT, TT.w *= -kT
        }
      } else {
        const kT = Math.abs(TT.z),
          cT = Math.abs(TT.w);
        if (kT > cT) {
          const cT = Math.sign(TT.z);
          TT.x *= -cT, TT.y *= cT, TT.z = kT, TT.w *= -cT
        } else {
          const kT = Math.sign(TT.w);
          TT.x *= kT, TT.y *= -kT, TT.z *= -kT, TT.w = cT
        }
      }
      return TT
    }

    function Wc(TT) {
      TT.I5(-TT.z, TT.w, TT.x, -TT.y)
    }

    function nc(TT, kT) {
      const cT = lT.Fv.FromArrayToRef(kT.translation || [0, 0, 0], 0, lT.TmpVectors.Fv[0]),
        MT = lT.Quaternion.FromArrayToRef(kT.rotation || [0, 0, 0, 1], 0, lT.TmpVectors.Quaternion[0]),
        KT = lT.Matrix.ComposeToRef(Xc, MT, cT, lT.TmpVectors.Matrix[0]),
        OT = lT.Fv.FromArrayToRef(TT.translation || [0, 0, 0], 0, lT.TmpVectors.Fv[2]),
        yT = lT.Quaternion.FromArrayToRef(TT.rotation || [0, 0, 0, 1], 0, lT.TmpVectors.Quaternion[1]),
        fT = lT.Matrix.ComposeToRef(Xc, yT, OT, lT.TmpVectors.Matrix[1]);
      KT.multiplyToRef(fT, fT), fT.decompose(void 0, MT, cT), cT.equalsWithEpsilon(Zc, Gc.b) ? delete kT.translation : kT.translation = cT.acT(), MT.equalsWithEpsilon(uc, Gc.b) ? delete kT.rotation : kT.rotation = MT.acT(), kT.scale && delete kT.scale
    }

    function pc(TT, kT) {
      if (!(kT instanceof AT.b)) return !1;
      if (!(1 === kT.getChildren().length && 0 === TT.getChildren().length && TT.parent === kT)) return !1;
      const cT = TT.NJ(),
        lT = TT instanceof ec.g && !cT.useRightHandedSystem ? dc : Xc;
      return !!kT.GA.equalsWithEpsilon(lT, Gc.b) || (bT.e.Warn(`Cannot collapse node ${TT.name} into parent node ${kT.name} with modified scaling.`), !1)
    }

    function ic(TT) {
      if (TT instanceof Array) {
        const kT = new Float32Array(TT);
        return new Uint8Array(kT.buffer, kT.byteOffset, kT.byteLength)
      }
      return ArrayBuffer.isView(TT) ? new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength) : new Uint8Array(TT)
    }

    function qc(TT, kT) {
      for (const [cT, lT] of Object.entries(TT)) {
        const MT = kT[cT];
        (Array.isArray(lT) && Array.isArray(MT) && sc(lT, MT) || lT === MT) && delete TT[cT]
      }
      return TT
    }

    function sc(TT, kT) {
      return TT.length === kT.length && TT.every(((TT, cT) => TT === kT[cT]))
    }
    const Tl = new Map([
      [Int8Array, (TT, kT, cT) => TT.setInt8(kT, cT)],
      [Uint8Array, (TT, kT, cT) => TT.setUint8(kT, cT)],
      [Uint8ClampedArray, (TT, kT, cT) => TT.setUint8(kT, cT)],
      [Int16Array, (TT, kT, cT) => TT.setInt16(kT, cT, !0)],
      [Uint16Array, (TT, kT, cT) => TT.setUint16(kT, cT, !0)],
      [Int32Array, (TT, kT, cT) => TT.setInt32(kT, cT, !0)],
      [Uint32Array, (TT, kT, cT) => TT.setUint32(kT, cT, !0)],
      [Float32Array, (TT, kT, cT) => TT.setFloat32(kT, cT, !0)],
      [Float64Array, (TT, kT, cT) => TT.setFloat64(kT, cT, !0)]
    ]);
    class kl {
      writeTypedArray(TT) {
        this._checkGrowBuffer(TT.byteLength);
        const kT = Tl.get(TT.constructor);
        for (let cT = 0; cT < TT.length; cT++) kT(this._dataView, this._byteOffset, TT[cT]), this._byteOffset += TT.BYTES_PER_ELEMENT
      }
      constructor(TT) {
        this._data = new Uint8Array(TT), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(TT) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, TT), this._byteOffset++
      }
      writeInt8(TT) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, TT), this._byteOffset++
      }
      writeInt16(TT) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, TT, !0), this._byteOffset += 2
      }
      writeUInt16(TT) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, TT, !0), this._byteOffset += 2
      }
      writeInt32(TT) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, TT, !0), this._byteOffset += 4
      }
      writeUInt32(TT) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, TT, !0), this._byteOffset += 4
      }
      writeFloat32(TT) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, TT, !0), this._byteOffset += 4
      }
      writeFloat64(TT) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, TT, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(TT) {
        const kT = this.byteOffset + TT;
        if (kT > this._data.byteLength) {
          const TT = new Uint8Array(2 * kT);
          TT.set(this._data), this._data = TT, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function cl(TT) {
      return TT % 4 === 0 ? 4 : TT % 2 === 0 ? 2 : 1
    }
    class ll {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(TT) {
        let kT = 0;
        this._bufferViewToData.forEach((TT => {
          kT += TT.byteLength
        }));
        const cT = new kl(kT),
          lT = Array.from(this._bufferViewToData.keys()).sort(((TT, kT) => cl(kT.byteLength) - cl(TT.byteLength)));
        for (const MT of lT) {
          MT.byteOffset = cT.byteOffset, TT.push(MT);
          const kT = TT.length - 1,
            lT = this.getPropertiesWithBufferView(MT);
          for (const TT of lT) TT.bufferView = kT;
          cT.writeTypedArray(this._bufferViewToData.get(MT)), this._bufferViewToData.delete(MT)
        }
        return cT.getOutputData()
      }
      createBufferView(TT, kT) {
        const cT = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: TT.byteLength,
          byteStride: kT
        };
        return this._bufferViewToData.set(cT, TT), cT
      }
      createAccessor(TT, kT, cT, lT, MT, KT, OT) {
        this._verifyBufferView(TT);
        const yT = {
          bufferView: void 0,
          componentType: cT,
          count: lT,
          type: kT,
          min: KT?.min,
          max: KT?.max,
          normalized: OT,
          byteOffset: MT
        };
        return this.setBufferView(yT, TT), this._accessorToBufferView.set(yT, TT), yT
      }
      setBufferView(TT, kT) {
        this._verifyBufferView(kT);
        this.getPropertiesWithBufferView(kT).push(TT)
      }
      removeBufferView(TT) {
        const kT = this.getPropertiesWithBufferView(TT);
        for (const cT of kT) void 0 !== cT.bufferView && delete cT.bufferView;
        this._bufferViewToData.delete(TT), this._bufferViewToProperties.delete(TT), this._accessorToBufferView.forEach(((kT, cT) => {
          kT === TT && (void 0 !== cT.byteOffset && delete cT.byteOffset, this._accessorToBufferView.delete(cT))
        }))
      }
      getBufferView(TT) {
        const kT = this._accessorToBufferView.get(TT);
        return this._verifyBufferView(kT), kT
      }
      getPropertiesWithBufferView(TT) {
        return this._verifyBufferView(TT), this._bufferViewToProperties.set(TT, this._bufferViewToProperties.get(TT) ?? []), this._bufferViewToProperties.get(TT)
      }
      getData(TT) {
        return this._verifyBufferView(TT), this._bufferViewToData.get(TT)
      }
      _verifyBufferView(TT) {
        if (void 0 === TT || !this._bufferViewToData.has(TT)) throw new Error(`BufferView ${TT} not found in BufferManager.`)
      }
    }
    var Ml = cT(39841);
    (0, Ml.e)();
    var Kl = cT(40077);
    (0, Kl.e)();
    var Ol = cT(39889),
      yl = cT(40709);
    (0, yl.d)();
    let fl = (() => {
      var TT;
      let kT, cT, lT = [],
        MT = [],
        KT = [],
        OT = [];
      return TT = class {
        get influence() {
          return this._influence
        }
        set influence(TT) {
          if (this._influence === TT) return;
          const kT = this._influence;
          this._influence = TT, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === kT || 0 === TT)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(TT) {
          this._animationPropertiesOverride = TT
        }
        constructor(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            yT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = TT, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new kc.b, this._onDataLayoutChanged = new kc.b, this.id = (0, wT.h)(this, lT, void 0), this.morphTargetManager = ((0, wT.h)(this, MT), (0, wT.h)(this, KT, null)), this._animationPropertiesOverride = ((0, wT.h)(this, OT), null), this.id = TT, this.morphTargetManager = yT, this._scene = cT || tT.d.LastCreatedScene, this.influence = kT, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        iKT(TT) {
          const kT = this.hasPositions;
          this._positions = TT, kT !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(TT) {
          const kT = this.hasNormals;
          this._normals = TT, kT !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(TT) {
          const kT = this.hasTangents;
          this._tangents = TT, kT !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(TT) {
          const kT = this.hasUVs;
          this._uvs = TT, kT !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(TT) {
          const kT = this.hasUV2s;
          this._uv2s = TT, kT !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(TT) {
          const kT = this.hasColors;
          this._colors = TT, kT !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const kT = rk.d.Clone((() => new TT(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return kT._positions = this._positions, kT._normals = this._normals, kT._tangents = this._tangents, kT._uvs = this._uvs, kT._uv2s = this._uv2s, kT._colors = this._colors, kT
        }
        serialize() {
          const TT = {};
          return TT.name = this.name, TT.influence = this.influence, null != this.id && (TT.id = this.id), TT.uniqueId = this.uniqueId, TT.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (TT.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (TT.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (TT.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (TT.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (TT.colors = Array.prototype.slice.call(this.getColors())), rk.d.AppendSerializedAnimations(this, TT), TT
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(kT, cT) {
          let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const MT = new TT(kT.name, kT.influence, cT, lT);
          if (MT.iKT(kT.positions), null != kT.id && (MT.id = kT.id), kT.normals && MT.setNormals(kT.normals), kT.tangents && MT.setTangents(kT.tangents), kT.uvs && MT.setUVs(kT.uvs), kT.uv2s && MT.setUV2s(kT.uv2s), kT.colors && MT.setColors(kT.colors), kT.animations) {
            for (let TT = 0; TT < kT.animations.length; TT++) {
              const cT = kT.animations[TT],
                lT = (0, Rk.e)("BABYLON.Animation");
              lT && MT.animations.push(lT.Parse(cT))
            }
            kT.autoAnimate && cT && cT.beginAnimation(MT, kT.autoAnimateFrom, kT.autoAnimateTo, kT.autoAnimateLoop, kT.autoAnimateSpeed || 1)
          }
          return MT
        }
        static FromMesh(kT, cT, lT) {
          cT || (cT = kT.name);
          const MT = new TT(cT, lT, kT.NJ(), kT.morphTargetManager);
          return MT.iKT(kT.getVerticesData(XT.l.PositionKind)), kT.isVerticesDataPresent(XT.l.NormalKind) && MT.setNormals(kT.getVerticesData(XT.l.NormalKind)), kT.isVerticesDataPresent(XT.l.TangentKind) && MT.setTangents(kT.getVerticesData(XT.l.TangentKind)), kT.isVerticesDataPresent(XT.l.UVKind) && MT.setUVs(kT.getVerticesData(XT.l.UVKind)), kT.isVerticesDataPresent(XT.l.UV2Kind) && MT.setUV2s(kT.getVerticesData(XT.l.UV2Kind)), kT.isVerticesDataPresent(XT.l.ColorKind) && MT.setColors(kT.getVerticesData(XT.l.ColorKind)), MT
        }
      }, (() => {
        const yT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [(0, mT.J)()], cT = [(0, mT.J)()], (0, wT.e)(null, null, kT, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: TT => "id" in TT,
            get: TT => TT.id,
            set: (TT, kT) => {
              TT.id = kT
            }
          },
          metadata: yT
        }, lT, MT), (0, wT.e)(null, null, cT, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: TT => "morphTargetManager" in TT,
            get: TT => TT.morphTargetManager,
            set: (TT, kT) => {
              TT.morphTargetManager = kT
            }
          },
          metadata: yT
        }, KT, OT), yT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yT
        })
      })(), TT
    })();
    var xl, Il = cT(40778),
      Al = cT(39883);
    ! function(TT) {
      TT[TT.INTANGENT = 0] = "INTANGENT", TT[TT.OUTTANGENT = 1] = "OUTTANGENT"
    }(xl || (xl = {}));
    class Cl {
      static _IsTransformable(TT) {
        return TT && (TT instanceof AT.b || TT instanceof Ml.c || TT instanceof Al.d)
      }
      static _CreateNodeAnimation(TT, kT, cT, lT, KT) {
        if (this._IsTransformable(TT)) {
          const OT = [],
            yT = [],
            fT = kT.getKeys(),
            xT = Cl._CalculateMinMaxKeyFrames(fT),
            IT = Cl._DeduceInterpolation(fT, cT, lT),
            AT = IT.interpolationType,
            CT = IT.shouldBakeAnimation;
          if (CT ? Cl._CreateBakedAnimation(TT, kT, cT, xT.min, xT.max, kT.framePerSecond, KT, OT, yT, xT, lT) : "LINEAR" === AT || "STEP" === AT ? Cl._CreateLinearOrStepAnimation(TT, kT, cT, OT, yT, lT) : "CUBICSPLINE" === AT ? Cl._CreateCubicSplineAnimation(TT, kT, cT, OT, yT, lT) : Cl._CreateBakedAnimation(TT, kT, cT, xT.min, xT.max, kT.framePerSecond, KT, OT, yT, xT, lT), OT.length && yT.length) {
            return {
              inputs: OT,
              outputs: yT,
              samplerInterpolation: AT,
              inputsMin: CT ? xT.min : MT.Tools.FloatRound(xT.min / kT.framePerSecond),
              inputsMax: CT ? xT.max : MT.Tools.FloatRound(xT.max / kT.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(TT) {
        let kT = null,
          cT = "VEC3",
          lT = !1;
        const KT = TT.targetProperty.split(".");
        switch (KT[0]) {
          case "GA":
            kT = "scale";
            break;
          case "position":
            kT = "translation";
            break;
          case "rotation":
            cT = "VEC4", kT = "rotation";
            break;
          case "rotationQuaternion":
            cT = "VEC4", lT = !0, kT = "rotation";
            break;
          case "influence":
            cT = "SCALAR", kT = "weights";
            break;
          default:
            MT.Tools.Error(`Unsupported animatable property ${KT[0]}`)
        }
        return kT ? {
          animationChannelTargetPath: kT,
          dataAccessorType: cT,
          useQuaternion: lT
        } : (MT.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT) {
        let AT;
        if (Cl._IsTransformable(TT) && TT.animations)
          for (const CT of TT.animations) {
            if (IT && !IT(CT)) continue;
            const MT = Cl._DeduceAnimationInfo(CT);
            MT && (AT = {
              name: CT.name,
              samplers: [],
              channels: []
            }, Cl._AddAnimation(`${CT.name}`, CT.hasRunningRuntimeAnimations ? kT : AT, TT, CT, MT.dataAccessorType, MT.animationChannelTargetPath, lT, KT, OT, yT, MT.useQuaternion, fT, xT), AT.samplers.length && AT.channels.length && cT.push(AT))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT) {
        let AT;
        if (TT instanceof Il.c) {
          const MT = TT.morphTargetManager;
          if (MT)
            for (let CT = 0; CT < MT.numTargets; ++CT) {
              const jT = MT.getTarget(CT);
              for (const vT of jT.animations) {
                if (IT && !IT(vT)) continue;
                const jT = new yl.b(`${vT.name}`, "influence", vT.framePerSecond, vT.dataType, vT.tM, vT.enableBlending),
                  tT = [],
                  hT = vT.getKeys();
                for (let TT = 0; TT < hT.length; ++TT) {
                  const kT = hT[TT];
                  for (let TT = 0; TT < MT.numTargets; ++TT) TT == CT ? tT.push(kT) : tT.push({
                    frame: kT.frame,
                    value: 0
                  })
                }
                jT.setKeys(tT, !0);
                const NT = Cl._DeduceAnimationInfo(jT);
                NT && (AT = {
                  name: jT.name,
                  samplers: [],
                  channels: []
                }, Cl._AddAnimation(vT.name, vT.hasRunningRuntimeAnimations ? kT : AT, TT, jT, NT.dataAccessorType, NT.animationChannelTargetPath, lT, KT, OT, yT, NT.useQuaternion, fT, xT, MT.numTargets), AT.samplers.length && AT.channels.length && cT.push(AT))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
        let IT;
        if (TT.animationGroups) {
          const AT = TT.animationGroups;
          for (const CT of AT) {
            const AT = new Map,
              jT = new Map,
              vT = new Set,
              tT = CT.to - CT.from;
            IT = {
              name: CT.name,
              channels: [],
              samplers: []
            };
            for (let kT = 0; kT < CT.targetedAnimations.length; ++kT) {
              const xT = CT.targetedAnimations[kT],
                tT = xT.target,
                hT = xT.animation;
              if (fT && !fT(hT)) continue;
              const NT = yT.has(tT);
              if (this._IsTransformable(tT) || 1 === tT.length && this._IsTransformable(tT[0])) {
                const TT = Cl._DeduceAnimationInfo(xT.animation);
                if (TT) {
                  const kT = this._IsTransformable(tT) ? tT : this._IsTransformable(tT[0]) ? tT[0] : null;
                  kT && Cl._AddAnimation(`${hT.name}`, IT, kT, hT, TT.dataAccessorType, TT.animationChannelTargetPath, cT, lT, MT, KT, TT.useQuaternion, OT, NT)
                }
              } else if (tT instanceof fl || 1 === tT.length && tT[0] instanceof fl) {
                if (Cl._DeduceAnimationInfo(xT.animation)) {
                  const kT = tT instanceof fl ? tT : tT[0];
                  if (kT) {
                    const cT = TT.morphTargetManagers.find((TT => {
                      for (let cT = 0; cT < TT.numTargets; ++cT)
                        if (TT.getTarget(cT) === kT) return !0;
                      return !1
                    }));
                    if (cT) {
                      const lT = TT.meshes.find((TT => TT.morphTargetManager === cT));
                      lT && (AT.has(lT) || AT.set(lT, new Map), AT.get(lT)?.set(kT, hT), vT.add(lT), jT.set(lT, hT))
                    }
                  }
                }
              }
            }
            vT.forEach((TT => {
              const kT = TT.morphTargetManager;
              let yT = null;
              const fT = [],
                xT = jT.get(TT).getKeys(),
                vT = xT.length;
              for (let cT = 0; cT < vT; ++cT)
                for (let lT = 0; lT < kT.numTargets; ++lT) {
                  const MT = kT.getTarget(lT),
                    KT = AT.get(TT);
                  if (KT) {
                    const kT = KT.get(MT);
                    kT ? (yT || (yT = new yl.b(`${CT.name}_${TT.name}_MorphWeightAnimation`, "influence", kT.framePerSecond, yl.b.ANIMATIONTYPE_FLOAT, kT.tM, kT.enableBlending)), fT.push(kT.getKeys()[cT])) : fT.push({
                      frame: CT.from + tT / vT * cT,
                      value: MT.influence,
                      inTangent: xT[0].inTangent ? 0 : void 0,
                      outTangent: xT[0].outTangent ? 0 : void 0
                    })
                  }
                }
              yT.setKeys(fT, !0);
              const hT = Cl._DeduceAnimationInfo(yT);
              hT && Cl._AddAnimation(`${CT.name}_${TT.name}_MorphWeightAnimation`, IT, TT, yT, hT.dataAccessorType, hT.animationChannelTargetPath, cT, lT, MT, KT, hT.useQuaternion, OT, !1, kT?.numTargets)
            })), IT.channels.length && IT.samplers.length && (xT?.set(CT, kT.length), kT.push(IT))
          }
        }
      }
      static _AddAnimation(TT, kT, cT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT) {
        const tT = Cl._CreateNodeAnimation(cT, MT, OT, AT, CT);
        let hT, NT, QT, ST, DT, aT;
        if (tT) {
          if (vT) {
            let TT, kT = 0;
            const cT = [];
            for (; tT.inputs.length > 0;) TT = tT.inputs.shift(), kT % vT == 0 && cT.push(TT), kT++;
            tT.inputs = cT
          }
          const TT = yT.get(cT),
            MT = new Float32Array(tT.inputs);
          hT = fT.createBufferView(MT), NT = fT.createAccessor(hT, "SCALAR", 5126, tT.inputs.length, void 0, {
            min: [tT.inputsMin],
            max: [tT.inputsMax]
          }), IT.push(NT), QT = IT.length - 1;
          const xT = new lT.Quaternion,
            AT = new lT.Fv,
            CT = new lT.Fv,
            FT = cT instanceof Ml.c,
            rT = Rc(KT),
            PT = new Float32Array(tT.outputs.length * rT);
          tT.outputs.forEach((function(TT, kT) {
            let cT = TT;
            switch (OT) {
              case "translation":
                jT && (lT.Fv.FromArrayToRef(TT, 0, CT), Yc(CT), CT.toArray(cT));
                break;
              case "rotation":
                4 === TT.length ? lT.Quaternion.FromArrayToRef(TT, 0, xT) : (cT = new Array(4), lT.Fv.FromArrayToRef(TT, 0, AT), lT.Quaternion.FromEulerVectorToRef(AT, xT)), jT && (Bc(xT), FT && Wc(xT)), xT.toArray(cT)
            }
            PT.set(cT, kT * rT)
          })), hT = fT.createBufferView(PT), NT = fT.createAccessor(hT, KT, 5126, tT.outputs.length), IT.push(NT), ST = IT.length - 1, DT = {
            interpolation: tT.samplerInterpolation,
            input: QT,
            output: ST
          }, kT.samplers.push(DT), aT = {
            sampler: kT.samplers.length - 1,
            target: {
              node: TT,
              path: OT
            }
          }, kT.channels.push(aT)
        }
      }
      static _CreateBakedAnimation(TT, kT, cT, KT, OT, yT, fT, xT, IT, AT, CT) {
        let jT;
        const vT = lT.Quaternion.Identity();
        let tT, hT, NT, QT, ST, DT = null,
          aT = null;
        AT.min = MT.Tools.FloatRound(KT / yT);
        const FT = kT.getKeys();
        for (let lT = 0, rT = FT.length; lT < rT; ++lT) {
          if (hT = FT[lT], lT + 1 < rT)
            if (NT = FT[lT + 1], hT.value.equals && hT.value.equals(NT.value) || hT.value === NT.value) {
              if (0 !== lT) continue;
              ST = hT.frame
            } else ST = NT.frame;
          else {
            if (QT = FT[lT - 1], hT.value.equals && hT.value.equals(QT.value) || hT.value === QT.value) continue;
            ST = OT
          }
          if (ST)
            for (let lT = hT.frame; lT <= ST; lT += fT) {
              if (tT = MT.Tools.FloatRound(lT / yT), tT === DT) continue;
              DT = tT, aT = tT;
              const KT = {
                key: 0,
                repeatCount: 0,
                tM: kT.tM
              };
              jT = kT._interpolate(lT, KT), Cl._SetInterpolatedValue(TT, jT, tT, kT, cT, vT, xT, IT, CT)
            }
        }
        aT && (AT.max = aT)
      }
      static _ConvertFactorToVector3OrQuaternion(TT, kT, cT, KT, OT) {
        const yT = Cl._GetBasePositionRotationOrScale(kT, KT, OT),
          fT = cT.targetProperty.split("."),
          xT = fT ? fT[1] : "",
          IT = OT ? lT.Quaternion.FromArray(yT).normalize() : lT.Fv.FromArray(yT);
        switch (xT) {
          case "x":
          case "y":
          case "z":
            IT[xT] = TT;
            break;
          case "w":
            IT.w = TT;
            break;
          default:
            MT.Tools.Error(`glTFAnimation: Unsupported component name "${xT}"!`)
        }
        return IT
      }
      static _SetInterpolatedValue(TT, kT, cT, MT, KT, OT, yT, fT, xT) {
        let IT;
        yT.push(cT), "weights" !== KT ? (MT.dataType === yl.b.ANIMATIONTYPE_FLOAT && (kT = this._ConvertFactorToVector3OrQuaternion(kT, TT, MT, KT, xT)), "rotation" === KT ? (xT ? OT = kT : (IT = kT, lT.Quaternion.RotationYawPitchRollToRef(IT.y, IT.x, IT.z, OT)), fT.push(OT.acT())) : (IT = kT, fT.push(IT.acT()))) : fT.push([kT])
      }
      static _CreateLinearOrStepAnimation(TT, kT, cT, lT, MT, KT) {
        for (const OT of kT.getKeys()) lT.push(OT.frame / kT.framePerSecond), Cl._AddKeyframeValue(OT, kT, MT, cT, TT, KT)
      }
      static _CreateCubicSplineAnimation(TT, kT, cT, lT, MT, KT) {
        kT.getKeys().forEach((function(OT) {
          lT.push(OT.frame / kT.framePerSecond), Cl._AddSplineTangent(xl.INTANGENT, MT, cT, "CUBICSPLINE", OT, KT), Cl._AddKeyframeValue(OT, kT, MT, cT, TT, KT), Cl._AddSplineTangent(xl.OUTTANGENT, MT, cT, "CUBICSPLINE", OT, KT)
        }))
      }
      static _GetBasePositionRotationOrScale(TT, kT, cT) {
        let MT;
        if ("rotation" === kT)
          if (cT) {
            MT = (TT.rotationQuaternion ?? lT.Quaternion.Identity()).acT()
          } else {
            MT = (TT.rotation ?? lT.Fv.Zero()).acT()
          }
        else if ("translation" === kT) {
          MT = (TT.position ?? lT.Fv.Zero()).acT()
        } else {
          MT = (TT.GA ?? lT.Fv.One()).acT()
        }
        return MT
      }
      static _AddKeyframeValue(TT, kT, cT, KT, OT, yT) {
        let fT;
        const xT = kT.dataType;
        if (xT === yl.b.ANIMATIONTYPE_VECTOR3) {
          let kT = TT.value.acT();
          if ("rotation" === KT) {
            const TT = lT.Fv.FromArray(kT);
            kT = lT.Quaternion.RotationYawPitchRoll(TT.y, TT.x, TT.z).acT()
          }
          cT.push(kT)
        } else if (xT === yl.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === KT) cT.push([TT.value]);
          else if (fT = this._ConvertFactorToVector3OrQuaternion(TT.value, OT, kT, KT, yT), fT) {
            if ("rotation" === KT) {
              const TT = yT ? fT : lT.Quaternion.RotationYawPitchRoll(fT.y, fT.x, fT.z).normalize();
              cT.push(TT.acT())
            }
            cT.push(fT.acT())
          }
        } else xT === yl.b.ANIMATIONTYPE_QUATERNION ? cT.push(TT.value.normalize().acT()) : MT.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(TT, kT, cT) {
        let lT, MT, KT = !1;
        if ("rotation" === kT && !cT) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let OT = 0, yT = TT.length; OT < yT; ++OT)
          if (MT = TT[OT], MT.inTangent || MT.outTangent)
            if (lT) {
              if ("CUBICSPLINE" !== lT) {
                lT = "LINEAR", KT = !0;
                break
              }
            } else lT = "CUBICSPLINE";
        else if (lT) {
          if ("CUBICSPLINE" === lT || MT.interpolation && 1 === MT.interpolation && "STEP" !== lT) {
            lT = "LINEAR", KT = !0;
            break
          }
        } else lT = MT.interpolation && 1 === MT.interpolation ? "STEP" : "LINEAR";
        return lT || (lT = "LINEAR"), {
          interpolationType: lT,
          shouldBakeAnimation: KT
        }
      }
      static _AddSplineTangent(TT, kT, cT, MT, KT, OT) {
        let yT;
        const fT = TT === xl.INTANGENT ? KT.inTangent : KT.outTangent;
        if ("CUBICSPLINE" === MT) {
          if ("rotation" === cT)
            if (fT)
              if (OT) yT = fT.acT();
              else {
                const TT = fT;
                yT = lT.Quaternion.RotationYawPitchRoll(TT.y, TT.x, TT.z).acT()
              }
          else yT = [0, 0, 0, 0];
          else yT = "weights" === cT ? fT ? [fT] : [0] : fT ? fT.acT() : [0, 0, 0];
          kT.push(yT)
        }
      }
      static _CalculateMinMaxKeyFrames(TT) {
        let kT = 1 / 0,
          cT = -1 / 0;
        return TT.forEach((function(TT) {
          kT = Math.min(kT, TT.frame), cT = Math.max(cT, TT.frame)
        })), {
          min: kT,
          max: cT
        }
      }
    }

    function jl(TT, kT, cT, KT, OT, yT) {
      const fT = {
          attributes: {},
          influence: TT.influence,
          name: TT.name
        },
        xT = kT.geometry;
      if (!xT) return MT.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), fT;
      const AT = yT ? -1 : 1,
        CT = lT.Fv.Zero();
      let jT, vT;
      if (TT.hasPositions) {
        const KT = TT.getPositions(),
          yT = xT.getVerticesData(IT.i.PositionKind);
        if (yT) {
          const TT = new Float32Array(yT.length),
            kT = [1 / 0, 1 / 0, 1 / 0],
            MT = [-1 / 0, -1 / 0, -1 / 0];
          vT = yT.length / 3, jT = 0;
          for (let cT = jT; cT < vT; ++cT) {
            const OT = lT.Fv.FromArray(yT, 3 * cT);
            lT.Fv.FromArray(KT, 3 * cT).subtractToRef(OT, CT), CT.x *= AT, kT[0] = Math.min(kT[0], CT.x), MT[0] = Math.max(MT[0], CT.x), kT[1] = Math.min(kT[1], CT.y), MT[1] = Math.max(MT[1], CT.y), kT[2] = Math.min(kT[2], CT.z), MT[2] = Math.max(MT[2], CT.z), TT[3 * cT] = CT.x, TT[3 * cT + 1] = CT.y, TT[3 * cT + 2] = CT.z
          }
          const xT = cT.createBufferView(TT, 12),
            IT = cT.createAccessor(xT, "VEC3", 5126, KT.length / 3, 0, {
              min: kT,
              max: MT
            });
          OT.push(IT), fT.attributes.POSITION = OT.length - 1
        } else MT.Tools.Warn(`Morph target positions for mesh ${kT.name} were not exported. Mesh does not have position vertex data`)
      }
      if (TT.hasNormals) {
        const KT = TT.getNormals(),
          yT = xT.getVerticesData(IT.i.NormalKind);
        if (yT) {
          const TT = new Float32Array(yT.length);
          vT = yT.length / 3, jT = 0;
          for (let cT = jT; cT < vT; ++cT) {
            const kT = lT.Fv.FromArray(yT, 3 * cT).normalize();
            lT.Fv.FromArray(KT, 3 * cT).normalize().subtractToRef(kT, CT), TT[3 * cT] = CT.x * AT, TT[3 * cT + 1] = CT.y, TT[3 * cT + 2] = CT.z
          }
          const kT = cT.createBufferView(TT, 12),
            MT = cT.createAccessor(kT, "VEC3", 5126, KT.length / 3, 0);
          OT.push(MT), fT.attributes.NORMAL = OT.length - 1
        } else MT.Tools.Warn(`Morph target normals for mesh ${kT.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (TT.hasTangents) {
        const KT = TT.getTangents(),
          yT = xT.getVerticesData(IT.i.TangentKind);
        if (yT) {
          vT = yT.length / 4;
          const TT = new Float32Array(3 * vT);
          jT = 0;
          for (let cT = jT; cT < vT; ++cT) {
            const kT = lT.Fv.FromArray(yT, 4 * cT);
            Uc(kT);
            const MT = lT.Fv.FromArray(KT, 3 * cT);
            Uc(MT), MT.subtractToRef(kT, CT), TT[3 * cT] = CT.x * AT, TT[3 * cT + 1] = CT.y, TT[3 * cT + 2] = CT.z
          }
          const kT = cT.createBufferView(TT, 12),
            MT = cT.createAccessor(kT, "VEC3", 5126, vT, 0);
          OT.push(MT), fT.attributes.TANGENT = OT.length - 1
        } else MT.Tools.Warn(`Morph target tangents for mesh ${kT.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (TT.hasColors) {
        const KT = TT.getColors(),
          yT = xT.getVerticesData(IT.i.ColorKind),
          AT = xT.getVertexBuffer(IT.i.ColorKind);
        if (yT && AT) {
          const TT = AT.getSize();
          vT = yT.length / TT;
          const kT = new Float32Array(vT * TT);
          jT = 0;
          for (let cT = jT; cT < vT; ++cT)
            if (3 === TT) {
              const MT = lT.Fv.FromArray(yT, cT * TT);
              lT.Fv.FromArray(KT, cT * TT).subtractToRef(MT, CT), kT[3 * cT] = CT.x, kT[3 * cT + 1] = CT.y, kT[3 * cT + 2] = CT.z
            } else if (4 === TT) {
            const MT = new lT.Vector4,
              OT = lT.Vector4.FromArray(yT, cT * TT);
            lT.Vector4.FromArray(KT, cT * TT).subtractToRef(OT, MT), kT[4 * cT] = MT.x, kT[4 * cT + 1] = MT.y, kT[4 * cT + 2] = MT.z, kT[4 * cT + 3] = MT.w
          } else MT.Tools.Warn(`Unsupported number of components for color attribute: ${TT}`);
          const xT = cT.createBufferView(kT, 4 * TT),
            IT = cT.createAccessor(xT, 3 === TT ? "VEC3" : "VEC4", 5126, vT, 0);
          OT.push(IT), fT.attributes.COLOR_0 = OT.length - 1
        } else MT.Tools.Warn(`Morph target colors for mesh ${kT.name} were not exported. Mesh does not have colors vertex data`)
      }
      return fT
    }
    var vl = cT(41166);
    class tl {}
    tl.DEFAULT_COLOR = YT.c.White(), tl.DEFAULT_WIDTH_ATTENUATED = 1, tl.DEFAULT_WIDTH = .1;
    var hl = cT(40706);
    class Nl {
      constructor(TT) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = TT
      }
      moveTo(TT, kT) {
        this._currentPath = new hl.e(TT, kT), this._tempPaths.push(this._currentPath)
      }
      lineTo(TT, kT) {
        this._currentPath.addLineTo(TT, kT)
      }
      quadraticCurveTo(TT, kT, cT, lT) {
        this._currentPath.addQuadraticCurveTo(TT, kT, cT, lT, this._resolution)
      }
      bezierCurveTo(TT, kT, cT, lT, MT, KT) {
        this._currentPath.addBezierCurveTo(TT, kT, cT, lT, MT, KT, this._resolution)
      }
      extractHoles() {
        for (const TT of this._tempPaths) TT.area() > 0 ? this._holes.push(TT) : this._paths.push(TT);
        if (!this._paths.length && this._holes.length) {
          const TT = this._holes;
          this._holes = this._paths, this._paths = TT
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

    function Ql(TT, kT, cT, lT, MT, KT) {
      const OT = KT.glyphs[TT] || KT.glyphs["?"];
      if (!OT) return null;
      const yT = new Nl(MT);
      if (OT.o) {
        const TT = OT.o.split(" ");
        for (let MT = 0, KT = TT.length; MT < KT;) {
          switch (TT[MT++]) {
            case "m": {
              const KT = parseInt(TT[MT++]) * kT + cT,
                OT = parseInt(TT[MT++]) * kT + lT;
              yT.moveTo(KT, OT);
              break
            }
            case "l": {
              const KT = parseInt(TT[MT++]) * kT + cT,
                OT = parseInt(TT[MT++]) * kT + lT;
              yT.lineTo(KT, OT);
              break
            }
            case "q": {
              const KT = parseInt(TT[MT++]) * kT + cT,
                OT = parseInt(TT[MT++]) * kT + lT,
                fT = parseInt(TT[MT++]) * kT + cT,
                xT = parseInt(TT[MT++]) * kT + lT;
              yT.quadraticCurveTo(fT, xT, KT, OT);
              break
            }
            case "b": {
              const KT = parseInt(TT[MT++]) * kT + cT,
                OT = parseInt(TT[MT++]) * kT + lT,
                fT = parseInt(TT[MT++]) * kT + cT,
                xT = parseInt(TT[MT++]) * kT + lT,
                IT = parseInt(TT[MT++]) * kT + cT,
                AT = parseInt(TT[MT++]) * kT + lT;
              yT.bezierCurveTo(fT, xT, IT, AT, KT, OT);
              break
            }
          }
        }
      }
      return yT.extractHoles(), {
        offsetX: OT.ha * kT,
        shapePath: yT
      }
    }

    function Sl(TT, kT, cT, lT) {
      const MT = Array.from(TT),
        KT = kT / lT.resolution,
        OT = (lT.boundingBox.yMax - lT.boundingBox.yMin + lT.underlineThickness) * KT,
        yT = [];
      let fT = 0,
        xT = 0;
      for (let IT = 0; IT < MT.length; IT++) {
        const TT = MT[IT];
        if ("\n" === TT) fT = 0, xT -= OT;
        else {
          const kT = Ql(TT, KT, fT, xT, cT, lT);
          kT && (fT += kT.offsetX, yT.push(kT.shapePath))
        }
      }
      return yT
    }
    class Dl {
      static ConvertPoints(TT, kT) {
        if (TT.length && Array.isArray(TT) && "number" === typeof TT[0]) return [TT];
        if (TT.length && Array.isArray(TT[0]) && "number" === typeof TT[0][0]) return TT;
        if (TT.length && !Array.isArray(TT[0]) && TT[0] instanceof uT.m) {
          const kT = [];
          for (let cT = 0; cT < TT.length; cT++) {
            const lT = TT[cT];
            kT.push(lT.x, lT.y, lT.z)
          }
          return [kT]
        }
        if (TT.length > 0 && Array.isArray(TT[0]) && TT[0].length > 0 && TT[0][0] instanceof uT.m) {
          const kT = [],
            cT = TT;
          for (const TT of cT) kT.push(TT.flatMap((TT => [TT.x, TT.y, TT.z])));
          return kT
        }
        if (TT instanceof Float32Array) {
          if (kT?.floatArrayStride) {
            const cT = [],
              lT = 3 * kT.floatArrayStride;
            for (let kT = 0; kT < TT.length; kT += lT) {
              const MT = new Array(lT);
              for (let cT = 0; cT < lT; cT++) MT[cT] = TT[kT + cT];
              cT.push(MT)
            }
            return cT
          }
          return [Array.from(TT)]
        }
        if (TT.length && TT[0] instanceof Float32Array) {
          const kT = [];
          for (const cT of TT) kT.push(Array.from(cT));
          return kT
        }
        return []
      }
      static OmitZeroLengthPredicate(TT, kT, cT) {
        const lT = [];
        return kT.subtract(TT).lengthSquared() > 0 && lT.push([TT, kT]), cT.subtract(kT).lengthSquared() > 0 && lT.push([kT, cT]), TT.subtract(cT).lengthSquared() > 0 && lT.push([cT, TT]), 0 === lT.length ? null : lT
      }
      static OmitDuplicatesPredicate(TT, kT, cT, lT) {
        const MT = [];
        return Dl._SearchInPoints(TT, kT, lT) || MT.push([TT, kT]), Dl._SearchInPoints(kT, cT, lT) || MT.push([kT, cT]), Dl._SearchInPoints(cT, TT, lT) || MT.push([cT, TT]), 0 === MT.length ? null : MT
      }
      static _SearchInPoints(TT, kT, cT) {
        for (const lT of cT)
          for (let cT = 0; cT < lT.length; cT++)
            if (lT[cT]?.equals(TT) && (lT[cT + 1]?.equals(kT) || lT[cT - 1]?.equals(kT))) return !0;
        return !1
      }
      static MeshesToLines(TT, kT) {
        const cT = [];
        for (let lT = 0; lT < TT.length; lT++) {
          const MT = TT[lT],
            KT = MT.getVerticesData(XT.l.PositionKind),
            OT = MT.FcT();
          if (KT && OT)
            for (let TT = 0, yT = 0; TT < OT.length; TT++) {
              const fT = 3 * OT[yT++],
                xT = 3 * OT[yT++],
                IT = 3 * OT[yT++],
                AT = new uT.m(KT[fT], KT[fT + 1], KT[fT + 2]),
                CT = new uT.m(KT[xT], KT[xT + 1], KT[xT + 2]),
                jT = new uT.m(KT[IT], KT[IT + 1], KT[IT + 2]);
              if (kT) {
                const yT = kT(AT, CT, jT, cT, TT, fT, MT, lT, KT, OT);
                if (yT)
                  for (const TT of yT) cT.push(TT)
              } else cT.push([AT, CT], [CT, jT], [jT, AT])
            }
        }
        return cT
      }
      static ToVector3Array(TT) {
        if (Array.isArray(TT[0])) {
          const kT = [],
            cT = TT;
          for (const TT of cT) {
            const cT = [];
            for (let kT = 0; kT < TT.length; kT += 3) cT.push(new uT.m(TT[kT], TT[kT + 1], TT[kT + 2]));
            kT.push(cT)
          }
          return kT
        }
        const kT = TT,
          cT = [];
        for (let lT = 0; lT < kT.length; lT += 3) cT.push(new uT.m(kT[lT], kT[lT + 1], kT[lT + 2]));
        return cT
      }
      static ToNumberArray(TT) {
        return TT.flatMap((TT => [TT.x, TT.y, TT.z]))
      }
      static GetPointsCountInfo(TT) {
        const kT = new Array(TT.length);
        let cT = 0;
        for (let lT = TT.length; lT--;) kT[lT] = TT[lT].length / 3, cT += kT[lT];
        return {
          total: cT,
          counts: kT
        }
      }
      static GetLineLength(TT) {
        if (0 === TT.length) return 0;
        let kT;
        kT = "number" === typeof TT[0] ? Dl.ToVector3Array(TT) : TT;
        const cT = uT.h.Fv[0];
        let lT = 0;
        for (let MT = 0; MT < kT.length - 1; MT++) {
          const TT = kT[MT];
          lT += kT[MT + 1].subtractToRef(TT, cT).length()
        }
        return lT
      }
      static GetLineLengthArray(TT, kT) {
        const cT = kT ? new Float32Array(kT, 0, TT.length / 3) : new Float32Array(TT.length / 3);
        let lT = 0;
        for (let MT = 0, KT = TT.length / 3 - 1; MT < KT; MT++) {
          let kT = TT[3 * MT + 0],
            KT = TT[3 * MT + 1],
            OT = TT[3 * MT + 2];
          kT -= TT[3 * MT + 3], KT -= TT[3 * MT + 4], OT -= TT[3 * MT + 5];
          lT += Math.sqrt(kT * kT + KT * KT + OT * OT), cT[MT + 1] = lT
        }
        return cT
      }
      static SegmentizeSegmentByCount(TT, kT, cT) {
        const lT = [],
          MT = kT.subtract(TT),
          KT = uT.h.Fv[0];
        KT.Xs(cT);
        const OT = uT.h.Fv[1];
        MT.divideToRef(KT, OT);
        let yT = TT.clone();
        lT.push(yT);
        for (let fT = 0; fT < cT; fT++) yT = yT.clone(), lT.push(yT.addInPlace(OT));
        return lT
      }
      static SegmentizeLineBySegmentLength(TT, kT) {
        const cT = TT[0] instanceof uT.m ? Dl.GetLineSegments(TT) : "number" === typeof TT[0] ? Dl.GetLineSegments(Dl.ToVector3Array(TT)) : TT,
          lT = [];
        for (const MT of cT)
          if (MT.length > kT) {
            const TT = Dl.SegmentizeSegmentByCount(MT.point1, MT.point2, Math.ceil(MT.length / kT));
            for (const kT of TT) lT.push(kT)
          } else lT.push(MT.point1), lT.push(MT.point2);
        return lT
      }
      static SegmentizeLineBySegmentCount(TT, kT) {
        const cT = "number" === typeof TT[0] ? Dl.ToVector3Array(TT) : TT,
          lT = Dl.GetLineLength(cT) / kT;
        return Dl.SegmentizeLineBySegmentLength(cT, lT)
      }
      static GetLineSegments(TT) {
        const kT = [];
        for (let cT = 0; cT < TT.length - 1; cT++) {
          const lT = TT[cT],
            MT = TT[cT + 1],
            KT = MT.subtract(lT).length();
          kT.push({
            point1: lT,
            point2: MT,
            length: KT
          })
        }
        return kT
      }
      static GetMinMaxSegmentLength(TT) {
        const kT = Dl.GetLineSegments(TT).sort((TT => TT.length));
        return {
          min: kT[0].length,
          max: kT[kT.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const MT = kT * cT;
        let KT = 0,
          OT = 0;
        const yT = TT.length;
        for (let xT = 0; xT < yT; xT++) {
          if (MT <= KT + TT[xT].length) {
            OT = xT;
            break
          }
          KT += TT[xT].length
        }
        const fT = (MT - KT) / TT[OT].length;
        return TT[OT].point2.subtractToRef(TT[OT].point1, uT.h.Fv[0]), uT.h.Fv[0].scaleToRef(fT, uT.h.Fv[1]), lT || uT.h.Fv[1].addInPlace(TT[OT].point1), uT.h.Fv[1].clone()
      }
      static GetCircleLinePoints(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT,
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / kT;
        const KT = [];
        for (let OT = 0; OT <= kT; OT++) KT.push(new uT.m(Math.cos(OT * MT) * TT, Math.sin(OT * MT) * lT, cT));
        return KT
      }
      static GetBezierLinePoints(TT, kT, cT, lT) {
        return hl.d.CreateQuadraticBezier(TT, kT, cT, lT).getPoints().flatMap((TT => [TT.x, TT.y, TT.z]))
      }
      static GetArrowCap(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [TT.clone(), TT.add(kT.multiplyByFloats(cT, cT, cT))],
          widths: [lT, MT, KT, OT]
        }
      }
      static GetPointsFromText(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          KT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const OT = [],
          yT = Sl(TT, kT, cT, lT);
        for (const fT of yT) {
          for (const TT of fT.paths) {
            const kT = [],
              cT = TT.getPoints();
            for (const TT of cT) kT.push(TT.x, TT.y, MT);
            OT.push(kT)
          }
          if (KT)
            for (const TT of fT.holes) {
              const kT = [],
                cT = TT.getPoints();
              for (const TT of cT) kT.push(TT.x, TT.y, MT);
              OT.push(kT)
            }
        }
        return OT
      }
      static Color3toRGBAUint8(TT) {
        const kT = new Uint8Array(4 * TT.length);
        for (let cT = 0, lT = 0; cT < TT.length; cT++) kT[lT++] = 255 * TT[cT].r, kT[lT++] = 255 * TT[cT].g, kT[lT++] = 255 * TT[cT].b, kT[lT++] = 255;
        return kT
      }
      static CreateColorsTexture(TT, kT, cT, lT) {
        const MT = lT.Dv().getCaps().maxTextureSize ?? 1,
          KT = kT.length > MT ? MT : kT.length,
          OT = Math.ceil(kT.length / MT);
        OT > 1 && (kT = [...kT, ...Array(KT * OT - kT.length).fill(kT[0])]);
        const yT = Dl.Color3toRGBAUint8(kT),
          fT = new FT.c(yT, KT, OT, Ac.c.TEXTUREFORMAT_RGBA, lT, !1, !0, cT);
        return fT.name = TT, fT
      }
      static PrepareEmptyColorsTexture(TT) {
        if (!tl.EmptyColorsTexture) {
          const kT = new Uint8Array(4);
          tl.EmptyColorsTexture = new FT.c(kT, 1, 1, Ac.c.TEXTUREFORMAT_RGBA, TT, !1, !1, FT.c.NEAREST_NEAREST), tl.EmptyColorsTexture.name = "grlEmptyColorsTexture", tl.EmptyColorsTexture.QJ.addOnce((() => {
            tl.EmptyColorsTexture = null
          }))
        }
        return tl.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        tl.EmptyColorsTexture?.dispose(), tl.EmptyColorsTexture = null
      }
      static BooleanToNumber(TT) {
        return TT ? 1 : 0
      }
    }
    class al extends dT.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class Fl extends LT.b {
      isCompatible(TT) {
        return !0
      }
      constructor(TT, kT, cT) {
        cT = cT || {
          color: tl.DEFAULT_COLOR
        };
        const lT = new al;
        lT.GREASED_LINE_HAS_COLOR = !!cT.color && !cT.useColors, lT.GREASED_LINE_SIZE_ATTENUATION = cT.sizeAttenuation ?? !1, lT.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === cT.colorDistributionType, lT.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (kT ?? TT.NJ()).useRightHandedSystem, lT.GREASED_LINE_CAMERA_FACING = cT.cameraFacing ?? !0, super(TT, Fl.GREASED_LINE_MATERIAL_NAME, 200, lT, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = cT?.forceGLSL || Fl.ForceGLSL, this._scene = kT ?? TT.NJ(), this._engine = this._scene.Dv(), this._cameraFacing = cT.cameraFacing ?? !0, this.visibility = cT.visibility ?? 1, this.useDash = cT.useDash ?? !1, this.dashRatio = cT.dashRatio ?? .5, this.dashOffset = cT.dashOffset ?? 0, this.width = cT.width ? cT.width : cT.sizeAttenuation ? tl.DEFAULT_WIDTH_ATTENUATED : tl.DEFAULT_WIDTH, this._sizeAttenuation = cT.sizeAttenuation ?? !1, this.colorMode = cT.colorMode ?? 0, this._color = cT.color ?? null, this.useColors = cT.useColors ?? !1, this._colorsDistributionType = cT.colorDistributionType ?? 0, this.colorsSampling = cT.colorsSampling ?? FT.c.NEAREST_NEAREST, this._colors = cT.colors ?? null, this.dashCount = cT.dashCount ?? 1, this.resolution = cT.resolution ?? new uT.i(this._engine.getRenderWidth(), this._engine.getRenderHeight()), cT.colorsTexture ? this.colorsTexture = cT.colorsTexture : this._colors ? this.colorsTexture = Dl.CreateColorsTexture(`${TT.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? tl.DEFAULT_COLOR, Dl.PrepareEmptyColorsTexture(this._scene)), this._engine.QJ.add((() => {
          Dl.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(TT) {
        TT.push("grl_offsets"), TT.push("grl_widths"), TT.push("grl_colorPointers"), TT.push("grl_counters"), this._cameraFacing ? (TT.push("grl_previousAndSide"), TT.push("grl_nextAndCounters")) : TT.push("grl_slopes")
      }
      getSamplers(TT) {
        TT.push("grl_colors")
      }
      getActiveTextures(TT) {
        this.colorsTexture && TT.push(this.colorsTexture)
      }
      getUniforms() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const kT = [{
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
        return this._cameraFacing && kT.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === TT && kT.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: kT,
          vertex: this._cameraFacing && this._isGLSL(TT) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(TT) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(TT) {
        if (this._cameraFacing) {
          TT.X3("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || TT.X3("viewProjection", this._scene.getTransformMatrix());
          const kT = uT.h.Vector4[0];
          kT.x = this._aspect, kT.y = this._resolution.x, kT.z = this._resolution.y, kT.w = this.width, TT.updateVector4("grl_aspect_resolution_lineWidth", kT)
        }
        const kT = uT.h.Vector4[0];
        kT.x = Dl.BooleanToNumber(this.useDash), kT.y = this._dashArray, kT.z = this.dashOffset, kT.w = this.dashRatio, TT.updateVector4("grl_dashOptions", kT);
        const cT = uT.h.Vector4[1];
        cT.x = this.colorMode, cT.y = this.visibility, cT.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, cT.w = Dl.BooleanToNumber(this.useColors), TT.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", cT), this._color && TT.updateColor3("grl_singleColor", this._color);
        const lT = this.colorsTexture ?? tl.EmptyColorsTexture;
        TT.setTexture("grl_colors", lT), TT.updateFloat2("grl_textureSize", lT?.getSize().width ?? 1, lT?.getSize().height ?? 1)
      }
      prepareDefines(TT, kT, cT) {
        TT.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, TT.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, TT.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, TT.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = kT.useRightHandedSystem, TT.GREASED_LINE_CAMERA_FACING = this._cameraFacing, TT.GREASED_LINE_USE_OFFSETS = !!cT.offsets
      }
      getClassName() {
        return Fl.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(kT) ? function(TT, kT) {
          if ("vertex" === TT) {
            const TT = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return kT && (TT["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), TT
          }
          return "fragment" === TT ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(TT, this._cameraFacing) : function(TT, kT) {
          if ("vertex" === TT) {
            const TT = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return kT && (TT["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), TT
          }
          return "fragment" === TT ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(TT, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(TT) {
        this.setColors(TT)
      }
      setColors(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const lT = this._colors?.length ?? 0;
        if (this._colors = TT, null !== TT && 0 !== TT.length) {
          if (!kT || cT)
            if (this.colorsTexture && lT === TT.length && !cT) {
              const kT = Dl.Color3toRGBAUint8(TT);
              this.colorsTexture.update(kT)
            } else this.colorsTexture?.dispose(), this.colorsTexture = Dl.CreateColorsTexture(`${this._material.name}-colors-texture`, TT, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(TT) {
        this._dashCount = TT, this._dashArray = 1 / TT
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(TT) {
        this._sizeAttenuation = TT, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(TT) {
        this.setColor(TT)
      }
      setColor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== TT || null !== this._color && null === TT ? (this._color = TT, kT || this.markAllDefinesAsDirty()) : this._color = TT
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(TT) {
        this._colorsDistributionType = TT, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(TT) {
        this._aspect = TT.x / TT.y, this._resolution = TT
      }
      serialize() {
        const TT = super.serialize(),
          kT = {
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
        return this._colors && (kT.colors = this._colors), this._color && (kT.color = this._color), TT.greasedLineMaterialOptions = kT, TT
      }
      parse(TT, kT, cT) {
        super.parse(TT, kT, cT);
        const lT = TT.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), lT.color && this.setColor(lT.color, !0), lT.colorDistributionType && (this.colorsDistributionType = lT.colorDistributionType), lT.colors && (this.colors = lT.colors), lT.colorsSampling && (this.colorsSampling = lT.colorsSampling), lT.colorMode && (this.colorMode = lT.colorMode), lT.useColors && (this.useColors = lT.useColors), lT.visibility && (this.visibility = lT.visibility), lT.useDash && (this.useDash = lT.useDash), lT.dashCount && (this.dashCount = lT.dashCount), lT.dashRatio && (this.dashRatio = lT.dashRatio), lT.dashOffset && (this.dashOffset = lT.dashOffset), lT.width && (this.width = lT.width), lT.sizeAttenuation && (this.sizeAttenuation = lT.sizeAttenuation), lT.resolution && (this.resolution = lT.resolution), this.colors ? this.colorsTexture = Dl.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, kT) : Dl.PrepareEmptyColorsTexture(kT), this.markAllDefinesAsDirty()
      }
      copyTo(TT) {
        const kT = TT;
        kT.colorsTexture?.dispose(), this._colors && (kT.colorsTexture = Dl.CreateColorsTexture(`${kT._material.name}-colors-texture`, this._colors, kT.colorsSampling, this._scene)), kT.setColor(this.color, !0), kT.colorsDistributionType = this.colorsDistributionType, kT.colorsSampling = this.colorsSampling, kT.colorMode = this.colorMode, kT.useColors = this.useColors, kT.visibility = this.visibility, kT.useDash = this.useDash, kT.dashCount = this.dashCount, kT.dashRatio = this.dashRatio, kT.dashOffset = this.dashOffset, kT.width = this.width, kT.sizeAttenuation = this.sizeAttenuation, kT.resolution = this.resolution, kT.markAllDefinesAsDirty()
      }
      _isGLSL(TT) {
        return 0 === TT || this._forceGLSL
      }
    }
    Fl.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", Fl.ForceGLSL = !1;
    var rl = cT(40025),
      Pl = cT(40038),
      wl = cT(38507),
      ml = cT(40104),
      bl = cT(39458);
    class zl extends ml.q {
      constructor(TT, kT, lT) {
        const MT = kT.Dv(),
          KT = MT.isWebGPU && !(lT.forceGLSL || zl.ForceGLSL),
          OT = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        kT.useRightHandedSystem && OT.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const yT = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        lT.cameraFacing ? (OT.push("GREASED_LINE_CAMERA_FACING"), yT.push("grl_previousAndSide", "grl_nextAndCounters")) : (yT.push("grl_slopes"), yT.push("grl_counters"));
        const fT = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (KT || fT.push("world", "viewProjection", "view", "projection"), super(TT, kT, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: KT ? ["Scene", "Mesh"] : void 0,
            attributes: yT,
            uniforms: fT,
            samplers: KT ? [] : ["grlColors"],
            defines: OT,
            extraInitializationsAsync: async () => {
              KT ? await Promise.all([cT.e(325).then((() => cT(61278))), cT.e(384).then((() => cT(61287)))]) : await Promise.all([cT.e(318).then((() => cT(61289))), cT.e(385).then((() => cT(61295)))])
            },
            shaderLanguage: KT ? 1 : 0
          }), this._color = YT.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, lT = lT || {
            color: tl.DEFAULT_COLOR
          }, this.visibility = lT.visibility ?? 1, this.useDash = lT.useDash ?? !1, this.dashRatio = lT.dashRatio ?? .5, this.dashOffset = lT.dashOffset ?? 0, this.dashCount = lT.dashCount ?? 1, this.width = lT.width ? lT.width : lT.sizeAttenuation && lT.cameraFacing ? tl.DEFAULT_WIDTH_ATTENUATED : tl.DEFAULT_WIDTH, this.sizeAttenuation = lT.sizeAttenuation ?? !1, this.color = lT.color ?? YT.c.White(), this.useColors = lT.useColors ?? !1, this.colorsDistributionType = lT.colorDistributionType ?? 0, this.colorsSampling = lT.colorsSampling ?? FT.c.NEAREST_NEAREST, this.colorMode = lT.colorMode ?? 0, this._colors = lT.colors ?? null, this._cameraFacing = lT.cameraFacing ?? !0, this.resolution = lT.resolution ?? new uT.i(MT.getRenderWidth(), MT.getRenderHeight()), lT.colorsTexture ? this.colorsTexture = lT.colorsTexture : this._colors ? this.colorsTexture = Dl.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, kT) : (this._color = this._color ?? tl.DEFAULT_COLOR, this.colorsTexture = Dl.PrepareEmptyColorsTexture(kT)), KT) {
          const TT = new bl.b;
          TT.setParameters(), TT.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", TT)
        }
        MT.QJ.add((() => {
          Dl.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== tl.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new uT.i(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(TT) {
        this.setColors(TT)
      }
      setColors(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const lT = this._colors?.length ?? 0;
        if (this._colors = TT, null !== TT && 0 !== TT.length) {
          if (!kT || cT)
            if (this._colorsTexture && lT === TT.length && !cT) {
              const kT = Dl.Color3toRGBAUint8(TT);
              this._colorsTexture.update(kT)
            } else this._colorsTexture && this._colorsTexture !== tl.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = Dl.CreateColorsTexture(`${this.name}-colors-texture`, TT, this.colorsSampling, this.NJ())
        } else {
          this._colorsTexture && this._colorsTexture !== tl.EmptyColorsTexture && this._colorsTexture.dispose();
          const TT = this.NJ();
          TT && (this.colorsTexture = Dl.PrepareEmptyColorsTexture(TT))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(TT) {
        this._colorsTexture = TT, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(TT) {
        this._width = TT, this.setFloat("grlWidth", TT)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(TT) {
        this._useColors = TT, this.setFloat("grlUseColors", Dl.BooleanToNumber(TT))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(TT) {
        this._colorsSampling = TT
      }
      get visibility() {
        return this._visibility
      }
      set visibility(TT) {
        this._visibility = TT, this.setFloat("grlVisibility", TT)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(TT) {
        this._useDash = TT, this.setFloat("grlUseDash", Dl.BooleanToNumber(TT))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(TT) {
        this._dashOffset = TT, this.setFloat("grlDashOffset", TT)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(TT) {
        this._dashRatio = TT, this.setFloat("grlDashRatio", TT)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(TT) {
        this._dashCount = TT, this._dashArray = 1 / TT, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(TT) {
        this._sizeAttenuation = TT, this.setFloat("grlSizeAttenuation", Dl.BooleanToNumber(TT))
      }
      get color() {
        return this._color
      }
      set color(TT) {
        this.setColor(TT)
      }
      setColor(TT) {
        TT = TT ?? tl.DEFAULT_COLOR, this._color = TT, this.setColor3("grlColor", TT)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(TT) {
        this._colorsDistributionType = TT, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(TT) {
        this._colorMode = TT, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(TT) {
        this._resolution = TT, this.setVector2("grlResolution", TT), this.setFloat("grlAspect", TT.x / TT.y)
      }
      serialize() {
        const TT = super.serialize(),
          kT = {
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
        return this._colors && (kT.colors = this._colors), TT.greasedLineMaterialOptions = kT, TT
      }
      parse(TT, kT, cT) {
        const lT = TT.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), lT.color && (this.color = lT.color), lT.colorDistributionType && (this.colorsDistributionType = lT.colorDistributionType), lT.colorsSampling && (this.colorsSampling = lT.colorsSampling), lT.colorMode && (this.colorMode = lT.colorMode), lT.useColors && (this.useColors = lT.useColors), lT.visibility && (this.visibility = lT.visibility), lT.useDash && (this.useDash = lT.useDash), lT.dashCount && (this.dashCount = lT.dashCount), lT.dashRatio && (this.dashRatio = lT.dashRatio), lT.dashOffset && (this.dashOffset = lT.dashOffset), lT.width && (this.width = lT.width), lT.sizeAttenuation && (this.sizeAttenuation = lT.sizeAttenuation), lT.resolution && (this.resolution = lT.resolution), lT.colors ? this.colorsTexture = Dl.CreateColorsTexture(`${this.name}-colors-texture`, lT.colors, this.colorsSampling, this.NJ()) : this.colorsTexture = Dl.PrepareEmptyColorsTexture(kT), this._cameraFacing = lT.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var Jl, ol, Hl;
    zl.ForceGLSL = !1,
      function(TT) {
        TT[TT.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", TT[TT.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(Jl || (Jl = {})),
      function(TT) {
        TT[TT.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", TT[TT.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", TT[TT.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(ol || (ol = {})),
      function(TT) {
        TT[TT.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", TT[TT.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", TT[TT.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", TT[TT.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", TT[TT.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(Hl || (Hl = {}));
    class el extends rl.e {
      constructor(TT, kT, cT) {
        super(TT, kT, null, null, !1, !1), this.name = TT, this._options = cT, this._lazy = !1, this._updatable = !1, this._engine = kT.Dv(), this._lazy = cT.lazy ?? !1, this._updatable = cT.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = cT.colorPointers ?? [], this._widths = cT.widths ?? new Array(cT.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(TT) {
        let kT = 0;
        for (const lT of this._points) kT += lT.length;
        const cT = kT / 3 * 2 - this._widths.length;
        for (let lT = 0; lT < cT; lT++) this._widths.push(TT)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Pv && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(TT, kT) {
        for (const cT of TT) this._points.push(cT);
        this._lazy || this.setPoints(this._points, kT)
      }
      dispose(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(TT, kT)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(TT) {
        this._uvs = TT instanceof Float32Array ? TT : new Float32Array(TT), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(TT) {
        this.material instanceof zl && this.material.setDefine("GREASED_LINE_USE_OFFSETS", TT?.length > 0), this._offsets = TT, this._offsetsBuffer ? this._offsetsBuffer.update(TT) : this._createOffsetsBuffer(TT)
      }
      get widths() {
        return this._widths
      }
      set widths(TT) {
        this._widths = TT, this._lazy || this._widthsBuffer && this._widthsBuffer.update(TT)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(TT) {
        this._colorPointers = TT, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(TT)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof zl) return this.material;
        const TT = this.material?.pluginManager?.getPlugin(Fl.GREASED_LINE_MATERIAL_NAME);
        return TT || void 0
      }
      get points() {
        const TT = [];
        return wl.d.DeepCopy(this._points, TT), TT
      }
      setPoints(TT, kT) {
        this._points = Dl.ConvertPoints(TT, kT?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), kT?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, kT)
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
      serialize(TT) {
        super.serialize(TT), TT.type = this.getClassName(), TT.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const kT = new Pl.d;
        return kT.positions = this._vertexPositions, kT.indices = this._indices, kT.uvs = this._uvs, TT && (kT.normals = [], Pl.d.ComputeNormals(this._vertexPositions, this._indices, kT.normals)), kT.applyToMesh(this, this._options.updatable), kT
      }
      _createOffsetsBuffer(TT) {
        const kT = this._scene.Dv(),
          cT = new XT.d(kT, TT, this._updatable, 3);
        this.setVerticesBuffer(cT.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = cT
      }
    }
    class Gl {
      constructor(TT, kT) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = TT, this.wasAddedByNoopNode = kT
      }
      getIndicesAccessor(TT, kT, cT, lT, MT) {
        return this._indicesAccessorMap.get(TT)?.get(kT)?.get(cT)?.get(lT)?.get(MT)
      }
      setIndicesAccessor(TT, kT, cT, lT, MT, KT) {
        let OT = this._indicesAccessorMap.get(TT);
        OT || (OT = new Map, this._indicesAccessorMap.set(TT, OT));
        let yT = OT.get(kT);
        yT || (yT = new Map, OT.set(kT, yT));
        let fT = yT.get(cT);
        fT || (fT = new Map, yT.set(cT, fT));
        let xT = fT.get(lT);
        xT || (xT = new Map, fT.set(lT, xT)), xT.set(MT, KT)
      }
      pushExportedNode(TT) {
        this._exportedNodes.has(TT) || this._exportedNodes.add(TT)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(TT) {
        return this._vertexBufferViewMap.get(TT)
      }
      setVertexBufferView(TT, kT) {
        this._vertexBufferViewMap.set(TT, kT)
      }
      setRemappedBufferView(TT, kT, cT) {
        this._remappedBufferView.set(TT, new Map), this._remappedBufferView.get(TT).set(kT, cT)
      }
      getRemappedBufferView(TT, kT) {
        return this._remappedBufferView.get(TT)?.get(kT)
      }
      getVertexAccessor(TT, kT, cT) {
        return this._vertexAccessorMap.get(TT)?.get(kT)?.get(cT)
      }
      setVertexAccessor(TT, kT, cT, lT) {
        let MT = this._vertexAccessorMap.get(TT);
        MT || (MT = new Map, this._vertexAccessorMap.set(TT, MT));
        let KT = MT.get(kT);
        KT || (KT = new Map, MT.set(kT, KT)), KT.set(cT, lT)
      }
      hasVertexColorAlpha(TT) {
        return this._vertexMapColorAlpha.get(TT) || !1
      }
      setHasVertexColorAlpha(TT, kT) {
        return this._vertexMapColorAlpha.set(TT, kT)
      }
      getMesh(TT) {
        return this._meshMap.get(TT)
      }
      setMesh(TT, kT) {
        this._meshMap.set(TT, kT)
      }
      bindMorphDataToMesh(TT, kT) {
        const cT = this._meshMorphTargetMap.get(TT) || [];
        this._meshMorphTargetMap.set(TT, cT), -1 === cT.indexOf(kT) && cT.push(kT)
      }
      getMorphTargetsFromMesh(TT) {
        return this._meshMorphTargetMap.get(TT)
      }
    }
    class Vl {
      _ApplyExtension(TT, kT, cT, lT) {
        if (cT >= kT.length) return Promise.resolve(TT);
        const MT = lT(kT[cT], TT);
        return MT ? MT.then((async TT => TT ? await this._ApplyExtension(TT, kT, cT + 1, lT) : null)) : this._ApplyExtension(TT, kT, cT + 1, lT)
      }
      _ApplyExtensions(TT, kT) {
        const cT = [];
        for (const lT of Vl._ExtensionNames) cT.push(this._extensions[lT]);
        return this._ApplyExtension(TT, cT, 0, kT)
      }
      _extensionsPostExportNodeAsync(TT, kT, cT, lT, MT) {
        return this._ApplyExtensions(kT, ((kT, KT) => kT.postExportNodeAsync && kT.postExportNodeAsync(TT, KT, cT, lT, MT, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(TT, kT, cT) {
        return this._ApplyExtensions(kT, ((kT, lT) => kT.postExportMaterialAsync && kT.postExportMaterialAsync(TT, lT, cT)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        const lT = [];
        return await Promise.all(Vl._ExtensionNames.map((async MT => {
          const KT = this._extensions[MT];
          if (KT.postExportMaterialAdditionalTexturesAsync) {
            const MT = await KT.postExportMaterialAdditionalTexturesAsync(TT, kT, cT);
            lT.push(...MT)
          }
        }))), lT
      }
      _extensionsPostExportTextures(TT, kT, cT) {
        for (const lT of Vl._ExtensionNames) {
          const MT = this._extensions[lT];
          MT.postExportTexture && MT.postExportTexture(TT, kT, cT)
        }
      }
      _extensionsPostExportMeshPrimitive(TT) {
        for (const kT of Vl._ExtensionNames) {
          const cT = this._extensions[kT];
          cT.postExportMeshPrimitive && cT.postExportMeshPrimitive(TT, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const TT of Vl._ExtensionNames) {
          const kT = this._extensions[TT];
          kT.preGenerateBinaryAsync && await kT.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(TT) {
        for (const kT of Vl._ExtensionNames) {
          const cT = this._extensions[kT];
          cT.enabled && TT(cT)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((TT => {
          var kT, cT, lT;
          TT.wasUsed && ((kT = this._glTF).extensionsUsed || (kT.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(TT.name) && this._glTF.extensionsUsed.push(TT.name), TT.required && ((cT = this._glTF).extensionsRequired || (cT.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(TT.name) && this._glTF.extensionsRequired.push(TT.name)), (lT = this._glTF).extensions || (lT.extensions = {}), TT.onExporting && TT.onExporting())
        }))
      }
      _loadExtensions() {
        for (const TT of Vl._ExtensionNames) {
          const kT = Vl._ExtensionFactories[TT](this);
          this._extensions[TT] = kT
        }
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT.d.LastCreatedScene,
          kT = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${vT.d.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new oc(this), this._extensions = {}, this._bufferManager = new ll, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !TT) throw new Error("No scene available to export");
        this._babylonScene = TT, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: TT => TT?.KJ?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...kT
        }, this._loadExtensions()
      }
      dispose() {
        for (const TT in this._extensions) {
          this._extensions[TT].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        Vl.UnregisterExtension(TT) && MT.Tools.Warn(`Extension with the name ${TT} already exists`), Vl._ExtensionFactories[TT] = kT;
        const lT = cT ?? 0;
        Vl._ExtensionOrders[TT] = lT;
        let KT = Vl._ExtensionNames.length;
        for (let MT = 0; MT < Vl._ExtensionNames.length; MT++) {
          const TT = Vl._ExtensionNames[MT];
          if (lT < Vl._ExtensionOrders[TT]) {
            KT = MT;
            break
          }
        }
        Vl._ExtensionNames.splice(KT, 0, TT)
      }
      static UnregisterExtension(TT) {
        if (!Vl._ExtensionFactories[TT]) return !1;
        delete Vl._ExtensionFactories[TT], delete Vl._ExtensionOrders[TT];
        const kT = Vl._ExtensionNames.indexOf(TT);
        return -1 !== kT && Vl._ExtensionNames.splice(kT, 1), !0
      }
      _generateJSON(TT, kT, cT) {
        const lT = {
          byteLength: TT
        };
        return lT.byteLength && (this._glTF.buffers = [lT]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.et = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (lT.uri = kT + ".bin"), cT ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(TT) {
        const kT = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const cT = this._generateJSON(kT.byteLength, TT, !0),
          lT = new Blob([kT], {
            type: "application/octet-stream"
          }),
          MT = TT + ".gltf",
          KT = TT + ".bin",
          OT = new xT;
        if (OT.files[MT] = cT, OT.files[KT] = lT, this._imageData)
          for (const yT in this._imageData) OT.files[yT] = this._imageData[yT];
        return OT
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(TT) {
        const kT = TT % 4;
        return 0 === kT ? kT : 4 - kT
      }
      async generateGLBAsync(TT) {
        this._shouldUseGlb = !0;
        const kT = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const cT = this._generateJSON(kT.byteLength),
          lT = TT + ".glb";
        let MT, KT = cT.length;
        if ("undefined" !== typeof TextEncoder) {
          MT = (new TextEncoder).encode(cT), KT = MT.length
        }
        const OT = this._getPadding(KT),
          yT = this._getPadding(kT.byteLength),
          fT = 28 + KT + OT + kT.byteLength + yT,
          IT = new kl(fT);
        if (IT.writeUInt32(1179937895), IT.writeUInt32(2), IT.writeUInt32(fT), IT.writeUInt32(KT + OT), IT.writeUInt32(1313821514), MT) IT.writeTypedArray(MT);
        else {
          const TT = "_".charCodeAt(0);
          for (let kT = 0; kT < KT; ++kT) {
            const lT = cT.charCodeAt(kT);
            lT != cT.codePointAt(kT) ? IT.writeUInt8(TT) : IT.writeUInt8(lT)
          }
        }
        for (let xT = 0; xT < OT; ++xT) IT.writeUInt8(32);
        IT.writeUInt32(kT.byteLength + yT), IT.writeUInt32(5130562), IT.writeTypedArray(kT);
        for (let xT = 0; xT < yT; ++xT) IT.writeUInt8(0);
        const AT = new xT;
        return AT.files[lT] = new Blob([IT.getOutputData()], {
          type: "application/octet-stream"
        }), AT
      }
      _setNodeTransformation(TT, kT, cT) {
        if (kT.getPivotPoint().equalsWithEpsilon(Zc, Gc.b) || MT.Tools.Warn("Pivot points are not supported in the glTF serializer"), !kT.position.equalsWithEpsilon(Zc, Gc.b)) {
          const MT = lT.TmpVectors.Fv[0].UkT(kT.position);
          cT && Yc(MT), TT.translation = MT.acT()
        }
        kT.GA.equalsWithEpsilon(Xc, Gc.b) || (TT.scale = kT.GA.acT());
        const KT = kT.rotationQuaternion?.clone() || lT.Quaternion.FromEulerAngles(kT.rotation.x, kT.rotation.y, kT.rotation.z);
        KT.equalsWithEpsilon(uc, Gc.b) || (cT && Bc(KT), TT.rotation = KT.normalize().acT())
      }
      _setCameraTransformation(TT, kT, cT) {
        const MT = lT.TmpVectors.Fv[0],
          KT = lT.TmpVectors.Quaternion[0],
          OT = kT.getWorldMatrix();
        if (kT.parent) {
          const TT = kT.parent.getWorldMatrix().invertToRef(lT.TmpVectors.Matrix[0]);
          OT.multiplyToRef(TT, lT.TmpVectors.Matrix[1]).decompose(void 0, KT, MT)
        } else OT.decompose(void 0, KT, MT);
        MT.equalsWithEpsilon(Zc, Gc.b) || (cT && Yc(MT), TT.translation = MT.acT()), cT && Bc(KT), this._babylonScene.useRightHandedSystem || Wc(KT), KT.equalsWithEpsilon(uc, Gc.b) || (TT.rotation = KT.acT())
      }
      _listAvailableCameras() {
        for (const TT of this._babylonScene.cameras) {
          const kT = {
            type: TT.mode === Ml.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (TT.name && (kT.name = TT.name), "perspective" === kT.type) kT.perspective = {
            aspectRatio: TT.Dv().getAspectRatio(TT),
            yfov: TT.fovMode === Ml.c.FOVMODE_VERTICAL_FIXED ? TT.fov : TT.fov * TT.Dv().getAspectRatio(TT),
            znear: TT.minZ,
            zfar: TT.maxZ
          };
          else if ("orthographic" === kT.type) {
            const cT = TT.orthoLeft && TT.orthoRight ? .5 * (TT.orthoRight - TT.orthoLeft) : .5 * TT.Dv().getRenderWidth(),
              lT = TT.orthoBottom && TT.orthoTop ? .5 * (TT.orthoTop - TT.orthoBottom) : .5 * TT.Dv().getRenderHeight();
            kT.orthographic = {
              xmag: cT,
              ymag: lT,
              znear: TT.minZ,
              zfar: TT.maxZ
            }
          }
          this._camerasMap.set(TT, kT)
        }
      }
      _exportAndAssignCameras() {
        const TT = Array.from(this._camerasMap.values());
        for (const kT of TT) {
          const TT = this._nodesCameraMap.get(kT);
          if (void 0 !== TT) {
            this._cameras.push(kT);
            for (const kT of TT) kT.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const TT of this._babylonScene.skeletons) {
          if (TT.bones.length <= 0) continue;
          const kT = {
            joints: []
          };
          this._skinMap.set(TT, kT)
        }
      }
      _exportAndAssignSkeletons(TT) {
        for (const cT of this._babylonScene.skeletons) {
          if (cT.bones.length <= 0) continue;
          const KT = this._skinMap.get(cT);
          if (void 0 == KT) continue;
          const OT = {};
          let yT = -1;
          for (let TT = 0; TT < cT.bones.length; ++TT) {
            const kT = cT.bones[TT],
              lT = kT.getIndex() ?? TT; - 1 !== lT && (OT[lT] = kT, lT > yT && (yT = lT))
          }
          const fT = [];
          for (let cT = 0; cT <= yT; ++cT) {
            const yT = OT[cT],
              xT = yT.getTransformNode(),
              IT = xT ? this._nodeMap.get(xT) : void 0;
            if (void 0 === IT) {
              MT.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            KT.joints.push(IT);
            const AT = yT.getAbsoluteInverseBindMatrix().clone();
            TT.has(xT) && (kT = AT, Vc.invertToRef(lT.TmpVectors.Matrix[0]).multiplyToRef(kT, kT).multiplyToRef(Vc, kT)), fT.push(AT)
          }
          const xT = this._nodesSkinMap.get(KT);
          if (KT.joints.length > 0 && void 0 !== xT) {
            const TT = new Float32Array(16 * fT.length);
            fT.forEach(((kT, cT) => {
              TT.set(kT.m, 16 * cT)
            }));
            const kT = this._bufferManager.createBufferView(TT);
            this._accessors.push(this._bufferManager.createAccessor(kT, "MAT4", 5126, fT.length)), KT.inverseBindMatrices = this._accessors.length - 1, this._skins.push(KT);
            const cT = this._skins.length - 1;
            for (const lT of xT) lT.skin = cT
          }
        }
        var kT
      }
      async _exportSceneAsync() {
        const TT = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const kT = this._options.metadataSelector(this._babylonScene.metadata);
          kT && (TT.extras = kT)
        }
        const kT = new Array,
          cT = new Array,
          lT = new Array,
          MT = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let KT;
        if (MT && !this._options.includeCoordinateSystemConversionNodes)
          for (const xT of this._babylonScene.animationGroups)
            for (const TT of xT.targetedAnimations) {
              const kT = TT.target;
              kT instanceof AT.b && !kT.parent && (KT ?? (KT = new Set)).add(kT)
            }
        for (const xT of this._babylonScene.rootNodes) {
          const TT = xT.animations,
            OT = !!TT && TT.length > 0 || KT?.has(xT);
          MT && !this._options.includeCoordinateSystemConversionNodes && Ec(xT, this._babylonScene.useRightHandedSystem) && !OT ? lT.push(...xT.getChildren()) : this._babylonScene.useRightHandedSystem ? kT.push(xT) : cT.push(xT)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const OT = new Gl(!0, !1);
        TT.nodes.push(...await this._exportNodesAsync(cT, OT));
        const yT = new Gl(!1, !1);
        TT.nodes.push(...await this._exportNodesAsync(kT, yT));
        const fT = new Gl(!1, !0);
        TT.nodes.push(...await this._exportNodesAsync(lT, fT)), TT.nodes.length && this._scenes.push(TT), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(OT.getNodesSet()), this._babylonScene.animationGroups.length && Cl._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, OT.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(TT) {
        return this._nodeMap.get(TT)
      }
      _getAnimationIndex(TT) {
        return this._animationGroupMap.get(TT)
      }
      _getCameraIndex(TT) {
        const kT = this._camerasMap.get(TT);
        if (!kT) return;
        const cT = this._cameras.indexOf(kT);
        return cT >= 0 ? cT : void 0
      }
      _getMaterialIndex(TT) {
        return this._materialMap.get(TT)
      }
      _getRootIndex(TT, kT) {
        switch (TT) {
          case "nodes":
            return this._getNodeIndex(kT);
          case "animations":
            return this._getAnimationIndex(kT);
          case "cameras":
            return this._getCameraIndex(kT);
          case "materials":
            return this._getMaterialIndex(kT);
          case "meshes": {
            const TT = this._getNodeIndex(kT);
            return void 0 === TT ? void 0 : this._nodes[TT]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(kT)?.index;
          case "images": {
            const TT = this._materialExporter.getTextureInfo(kT)?.index;
            if (void 0 === TT) return;
            const cT = this._textures[TT];
            for (const kT of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const TT = cT?.extensions?.[kT]?.source;
              if ("number" === typeof TT) return TT
            }
            return cT?.source
          }
          case "samplers": {
            const TT = this._materialExporter.getTextureInfo(kT)?.index;
            return void 0 === TT ? void 0 : this._textures[TT]?.sampler
          }
          case "skins": {
            const TT = this._skinMap.get(kT),
              cT = TT ? this._skins.indexOf(TT) : -1;
            return cT >= 0 ? cT : void 0
          }
          case "scenes":
            return kT === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(TT, kT, cT) {
        const lT = this._nodes[TT];
        if (!lT) throw new Error(`Cannot write ${kT}: glTF node ${TT} does not exist.`);
        lT.extensions || (lT.extensions = {}), lT.extensions[kT] = cT
      }
      _shouldExportNode(TT) {
        let kT = this._shouldExportNodeMap.get(TT);
        return void 0 === kT && (kT = this._options.shouldExportNode(TT), this._shouldExportNodeMap.set(TT, kT)), kT
      }
      async _exportNodesAsync(TT, kT) {
        const cT = new Array;
        this._exportBuffers(TT, kT);
        for (const lT of TT) await this._exportNodeAsync(lT, cT, kT);
        return cT
      }
      _collectBuffers(TT, kT, cT, lT, MT) {
        if (this._shouldExportNode(TT) && TT instanceof CT.d && TT.geometry) {
          const KT = TT.geometry.getVertexBuffers();
          if (KT)
            for (const lT in KT) {
              if (!gc(lT)) continue;
              const OT = KT[lT];
              MT.setHasVertexColorAlpha(OT, TT.hasVertexAlpha);
              const yT = OT._buffer,
                fT = kT.get(yT) || [];
              kT.set(yT, fT), -1 === fT.indexOf(OT) && fT.push(OT);
              const xT = cT.get(OT) || [];
              cT.set(OT, xT), -1 === xT.indexOf(TT) && xT.push(TT)
            }
          const OT = TT.morphTargetManager;
          if (OT)
            for (let kT = 0; kT < OT.numTargets; kT++) {
              const cT = OT.getTarget(kT),
                MT = lT.get(cT) || [];
              lT.set(cT, MT), -1 === MT.indexOf(TT) && MT.push(TT)
            }
        }
        for (const KT of TT.getChildren()) this._collectBuffers(KT, kT, cT, lT, MT)
      }
      _exportBuffers(TT, kT) {
        const cT = new Map,
          lT = new Map,
          MT = new Map;
        for (const yT of TT) this._collectBuffers(yT, cT, lT, MT, kT);
        const KT = Array.from(cT.keys());
        for (const yT of KT) {
          const TT = yT.getData();
          if (!TT) throw new Error("Buffer data is not available");
          const MT = cT.get(yT);
          if (!MT) continue;
          const KT = MT[0].byteStride;
          if (MT.some((TT => TT.byteStride !== KT))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const OT = ic(TT).slice();
          for (const kT of MT) {
            const TT = lT.get(kT),
              {
                byteOffset: cT,
                byteStride: MT,
                componentCount: KT,
                type: yT,
                count: fT,
                normalized: xT,
                kind: AT
              } = Lc(kT, TT);
            switch (AT) {
              case IT.i.NormalKind:
              case IT.i.TangentKind:
                (0, Hc.g)(OT, cT, MT, KT, yT, fT, xT, (TT => {
                  const kT = Math.sqrt(TT[0] * TT[0] + TT[1] * TT[1] + TT[2] * TT[2]);
                  if (kT > 0) {
                    const cT = 1 / kT;
                    TT[0] *= cT, TT[1] *= cT, TT[2] *= cT
                  }
                }));
                break;
              case IT.i.ColorKind: {
                const kT = TT.filter((TT => TT.material instanceof Ol.StandardMaterial || null == TT.material)).length;
                if (0 == kT) break;
                if (kT != TT.length) {
                  bT.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                yT == IT.i.UNSIGNED_BYTE && bT.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const lT = new hT.Color3,
                  AT = new hT.e,
                  CT = this._babylonScene.Dv().useExactSrgbConversions;
                (0, Hc.g)(OT, cT, MT, KT, yT, fT, xT, (TT => {
                  3 === TT.length ? (lT.xkT(TT, 0), lT.toLinearSpaceToRef(lT, CT), lT.toArray(TT, 0)) : (AT.xkT(TT, 0), AT.toLinearSpaceToRef(AT, CT), AT.toArray(TT, 0))
                }))
              }
            }
          }
          if (kT.convertToRightHanded) {
            for (const TT of MT) {
              const kT = lT.get(TT),
                {
                  byteOffset: cT,
                  byteStride: MT,
                  componentCount: KT,
                  type: yT,
                  count: fT,
                  normalized: xT,
                  kind: AT
                } = Lc(TT, kT);
              switch (AT) {
                case IT.i.PositionKind:
                case IT.i.NormalKind:
                case IT.i.TangentKind:
                  (0, Hc.g)(OT, cT, MT, KT, yT, fT, xT, (TT => {
                    TT[0] = -TT[0]
                  }))
              }
            }
            kT.convertedToRightHandedBuffers.set(yT, OT)
          }
          const fT = this._bufferManager.createBufferView(OT, KT);
          kT.setVertexBufferView(yT, fT);
          const xT = new Map;
          for (const kT of MT) {
            const TT = lT.get(kT),
              {
                kind: cT,
                totalVertices: MT
              } = Lc(kT, TT);
            switch (cT) {
              case IT.i.MatricesIndicesKind:
              case IT.i.MatricesIndicesExtraKind:
                if (kT.type == IT.i.FLOAT) {
                  const TT = kT.getFloatData(MT);
                  null !== TT && xT.set(kT, TT)
                }
            }
          }
          0 !== xT.size && bT.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const AT = Array.from(xT.keys());
          for (const cT of AT) {
            const TT = xT.get(cT);
            if (!TT) continue;
            const lT = TT.some((TT => TT >= 256)),
              MT = new(lT ? Uint16Array : Uint8Array)(TT.length);
            for (let kT = 0; kT < TT.length; kT++) MT[kT] = TT[kT];
            const KT = this._bufferManager.createBufferView(MT, 4 * (lT ? 2 : 1));
            kT.setRemappedBufferView(yT, cT, KT)
          }
        }
        const OT = Array.from(MT.keys());
        for (const yT of OT) {
          const TT = MT.get(yT);
          if (!TT) continue;
          const cT = jl(yT, TT[0], this._bufferManager, this._bufferViews, this._accessors, kT.convertToRightHanded);
          for (const lT of TT) kT.bindMorphDataToMesh(lT, cT)
        }
      }
      async _exportNodeAsync(TT, kT, cT) {
        let lT = this._nodeMap.get(TT);
        if (void 0 !== lT) return void(kT.includes(lT) || kT.push(lT));
        const MT = await this._createNodeAsync(TT, cT);
        if (MT) {
          lT = this._nodes.length, this._nodes.push(MT), this._nodeMap.set(TT, lT), cT.pushExportedNode(TT), kT.push(lT);
          const KT = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            OT = [];
          this._babylonScene.animationGroups.length || (Cl._CreateMorphTargetAnimationFromMorphTargetAnimations(TT, KT, OT, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, cT.convertToRightHanded, this._options.shouldExportAnimation), TT.animations.length && Cl._CreateNodeAnimationFromNodeAnimations(TT, KT, OT, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, cT.convertToRightHanded, this._options.shouldExportAnimation)), KT.channels.length && KT.samplers.length && this._animations.push(KT), OT.forEach((TT => {
            TT.channels.length && TT.samplers.length && this._animations.push(TT)
          }))
        }
        const KT = MT ? [] : kT;
        for (const OT of TT.getChildren()) await this._exportNodeAsync(OT, KT, cT);
        MT && KT.length && (MT.children = KT)
      }
      async _createNodeAsync(TT, kT) {
        if (!this._shouldExportNode(TT)) return null;
        const cT = {};
        if (TT.name && (cT.name = TT.name), TT.metadata) {
          const kT = this._options.metadataSelector(TT.metadata);
          kT && (cT.extras = kT)
        }
        if (TT instanceof AT.b && (this._setNodeTransformation(cT, TT, kT.convertToRightHanded), TT instanceof CT.d)) {
          const lT = TT instanceof jT.e ? TT.hlT : TT;
          if (lT.kF && lT.kF.length > 0 && (cT.mesh = await this._exportMeshAsync(lT, kT)), TT.skeleton) {
            const kT = this._skinMap.get(TT.skeleton);
            void 0 !== kT && (void 0 === this._nodesSkinMap.get(kT) && this._nodesSkinMap.set(kT, []), this._nodesSkinMap.get(kT)?.push(cT))
          }
        }
        if (TT instanceof ec.g) {
          const lT = this._camerasMap.get(TT);
          if (lT) {
            void 0 === this._nodesCameraMap.get(lT) && this._nodesCameraMap.set(lT, []), this._setCameraTransformation(cT, TT, kT.convertToRightHanded);
            const MT = TT.parent;
            if (null !== MT && pc(TT, MT)) {
              const TT = this._nodeMap.get(MT);
              if (void 0 !== TT) {
                const kT = this._nodes[TT];
                return nc(cT, kT), this._nodesCameraMap.get(lT)?.push(kT), null
              }
            }
            this._nodesCameraMap.get(lT)?.push(cT)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", cT, TT, this._nodeMap, kT.convertToRightHanded) ? cT : (bT.e.Warn(`Not exporting node ${TT.name}`), null)
      }
      _exportIndices(TT, kT, cT, lT, MT, OT, yT, fT, xT) {
        let IT = null;
        xT.mode = function(TT) {
          switch (TT) {
            case KT.e.TriangleFillMode:
              return 4;
            case KT.e.TriangleStripDrawMode:
              return 5;
            case KT.e.TriangleFanDrawMode:
              return 6;
            case KT.e.PointListDrawMode:
            case KT.e.PointFillMode:
              return 0;
            case KT.e.LineLoopDrawMode:
              return 2;
            case KT.e.LineListDrawMode:
              return 1;
            case KT.e.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${TT}`)
        }(OT);
        const AT = yT !== KT.e.CounterClockWiseSideOrientation && function(TT) {
          switch (TT) {
            case KT.e.TriangleFillMode:
            case KT.e.TriangleStripDrawMode:
            case KT.e.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(OT);
        if (AT) {
          if (OT === KT.e.TriangleStripDrawMode || OT === KT.e.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const yT = kT ? new Uint32Array(lT) : new Uint16Array(lT);
          if (TT)
            for (let kT = 0; kT + 2 < lT; kT += 3) yT[kT] = TT[cT + kT] + MT, yT[kT + 1] = TT[cT + kT + 2] + MT, yT[kT + 2] = TT[cT + kT + 1] + MT;
          else
            for (let TT = 0; TT + 2 < lT; TT += 3) yT[TT] = TT, yT[TT + 1] = TT + 2, yT[TT + 2] = TT + 1;
          IT = yT
        } else if (TT && 0 !== MT) {
          const KT = kT ? new Uint32Array(lT) : new Uint16Array(lT);
          for (let kT = 0; kT < lT; kT++) KT[kT] = TT[cT + kT] + MT;
          IT = KT
        } else TT && (IT = function(TT, kT, cT, lT) {
          let MT = TT;
          return 0 === kT && cT === TT.length || (MT = Array.isArray(TT) ? TT.slice(kT, kT + cT) : TT.subarray(kT, kT + cT)), MT instanceof Int32Array ? new Uint32Array(MT.buffer, MT.byteOffset, MT.length) : Array.isArray(MT) ? lT ? new Uint32Array(MT) : new Uint16Array(MT) : MT
        }(TT, cT, lT, kT));
        if (IT) {
          let KT = fT.getIndicesAccessor(TT, cT, lT, MT, AT);
          if (void 0 === KT) {
            const OT = this._bufferManager.createBufferView(IT),
              yT = kT ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(OT, "SCALAR", yT, lT, 0)), KT = this._accessors.length - 1, fT.setIndicesAccessor(TT, cT, lT, MT, AT, KT)
          }
          xT.indices = KT
        }
      }
      _exportVertexBuffer(TT, kT, cT, lT, MT, KT) {
        const OT = TT.getKind();
        if (!gc(OT)) return;
        if (OT.startsWith("uv") && !this._options.exportUnusedUVs && (!kT || !this._materialNeedsUVsSet.has(kT))) return;
        let yT = MT.getVertexAccessor(TT, cT, lT);
        if (void 0 === yT) {
          const kT = MT.convertedToRightHandedBuffers.get(TT._buffer) || TT._buffer.getData(),
            KT = OT === IT.i.PositionKind ? function(TT, kT, cT, lT) {
              const {
                byteOffset: MT,
                byteStride: KT,
                type: OT,
                normalized: yT
              } = kT, fT = kT.getSize(), xT = new Array(fT).fill(1 / 0), IT = new Array(fT).fill(-1 / 0);
              return (0, Hc.g)(TT, MT + cT * KT, KT, fT, OT, lT * fT, yT, (TT => {
                for (let kT = 0; kT < fT; kT++) xT[kT] = Math.min(xT[kT], TT[kT]), IT[kT] = Math.max(IT[kT], TT[kT])
              })), {
                min: xT,
                max: IT
              }
            }(kT, TT, cT, lT) : void 0,
            fT = (OT === IT.i.MatricesIndicesKind || OT === IT.i.MatricesIndicesExtraKind) && TT.type === IT.i.FLOAT,
            xT = fT ? IT.i.UNSIGNED_BYTE : TT.type,
            AT = fT ? void 0 : TT.normalized,
            CT = fT ? MT.getRemappedBufferView(TT._buffer, TT) : MT.getVertexBufferView(TT._buffer),
            jT = TT.byteOffset + cT * TT.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(CT, function(TT, kT) {
            if (TT == IT.i.ColorKind) return kT ? "VEC4" : "VEC3";
            switch (TT) {
              case IT.i.PositionKind:
              case IT.i.NormalKind:
                return "VEC3";
              case IT.i.TangentKind:
              case IT.i.MatricesIndicesKind:
              case IT.i.MatricesIndicesExtraKind:
              case IT.i.MatricesWeightsKind:
              case IT.i.MatricesWeightsExtraKind:
                return "VEC4";
              case IT.i.UVKind:
              case IT.i.UV2Kind:
              case IT.i.UV3Kind:
              case IT.i.UV4Kind:
              case IT.i.UV5Kind:
              case IT.i.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${TT}`)
          }(OT, MT.hasVertexColorAlpha(TT)), xT, lT, jT, KT, AT)), yT = this._accessors.length - 1, MT.setVertexAccessor(TT, cT, lT, yT)
        }
        KT.attributes[function(TT) {
          switch (TT) {
            case IT.i.PositionKind:
              return "POSITION";
            case IT.i.NormalKind:
              return "NORMAL";
            case IT.i.TangentKind:
              return "TANGENT";
            case IT.i.ColorKind:
              return "COLOR_0";
            case IT.i.UVKind:
              return "TEXCOORD_0";
            case IT.i.UV2Kind:
              return "TEXCOORD_1";
            case IT.i.UV3Kind:
              return "TEXCOORD_2";
            case IT.i.UV4Kind:
              return "TEXCOORD_3";
            case IT.i.UV5Kind:
              return "TEXCOORD_4";
            case IT.i.UV6Kind:
              return "TEXCOORD_5";
            case IT.i.MatricesIndicesKind:
              return "JOINTS_0";
            case IT.i.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case IT.i.MatricesWeightsKind:
              return "WEIGHTS_0";
            case IT.i.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${TT}`)
        }(OT)] = yT
      }
      async _exportMaterialAsync(TT, kT, cT, lT) {
        let MT = this._materialMap.get(TT);
        if (void 0 === MT) {
          const lT = kT && Object.keys(kT).some((TT => TT.startsWith("uv")));
          if ((TT = TT instanceof Kl.c ? TT.o4[cT.materialIndex] : TT) instanceof Fk) MT = await this._materialExporter.exportPBRMaterialAsync(TT, lT);
          else if (TT instanceof Ol.StandardMaterial) MT = await this._materialExporter.exportStandardMaterialAsync(TT, lT);
          else {
            if (!(TT instanceof sk)) return void bT.e.Warn(`Unsupported material '${TT.name}' with type ${TT.getClassName()}`);
            MT = await this._materialExporter.exportOpenPBRMaterialAsync(TT, lT)
          }
          this._materialMap.set(TT, MT)
        }
        lT.material = MT
      }
      async _exportMeshAsync(TT, kT) {
        let cT = kT.getMesh(TT);
        if (void 0 !== cT) return cT;
        const lT = {
          primitives: []
        };
        cT = this._meshes.length, this._meshes.push(lT), kT.setMesh(TT, cT);
        const MT = TT.isUnIndexed ? null : TT.FcT(),
          OT = TT.geometry?.getVertexBuffers(),
          yT = kT.getMorphTargetsFromMesh(TT),
          fT = TT instanceof vl.c,
          xT = TT instanceof el,
          IT = TT.kF;
        if (OT && IT && IT.length > 0)
          for (const AT of IT) {
            const cT = {
                attributes: {}
              },
              IT = AT.wv() || this._babylonScene.defaultMaterial;
            if (xT) {
              const kT = {
                  name: IT.name
                },
                lT = TT,
                MT = hT.Color3.White(),
                KT = lT.material?.alpha ?? 1,
                OT = lT.greasedLineMaterial?.color ?? MT;
              (!OT.equalsWithEpsilon(MT, Gc.b) || KT < 1) && (kT.pbrMetallicRoughness = {
                baseColorFactor: [...OT.acT(), KT]
              }), this._materials.push(kT), cT.material = this._materials.length - 1
            } else if (fT) {
              const kT = {
                  name: IT.name
                },
                lT = TT;
              (!lT.color.equalsWithEpsilon(hT.Color3.White(), Gc.b) || lT.alpha < 1) && (kT.pbrMetallicRoughness = {
                baseColorFactor: [...lT.color.acT(), lT.alpha]
              }), this._materials.push(kT), cT.material = this._materials.length - 1
            } else await this._exportMaterialAsync(IT, OT, AT, cT);
            const CT = fT || xT ? KT.e.LineListDrawMode : TT.overrideRenderingFillMode ?? IT.fillMode;
            let jT = IT._getEffectiveOrientation(TT);
            kT.wasAddedByNoopNode && !TT.NJ().useRightHandedSystem && (jT = jT === KT.e.ClockWiseSideOrientation ? KT.e.CounterClockWiseSideOrientation : KT.e.ClockWiseSideOrientation), this._exportIndices(MT, MT ? (0, Hc.e)(MT, AT.indexCount, AT.indexStart, AT.verticesStart) : AT.verticesCount > 65535, MT ? AT.indexStart : AT.verticesStart, MT ? AT.indexCount : AT.verticesCount, -AT.verticesStart, CT, jT, kT, cT);
            for (const TT of Object.values(OT)) this._exportVertexBuffer(TT, IT, AT.verticesStart, AT.verticesCount, kT, cT);
            if (yT) {
              cT.targets = [];
              for (const TT of yT) cT.targets.push(TT.attributes)
            }
            lT.primitives.push(cT), this._extensionsPostExportMeshPrimitive(cT)
          }
        if (yT) {
          lT.weights = [], lT.extras || (lT.extras = {}), lT.extras.targetNames = [];
          for (const TT of yT) lT.weights.push(TT.influence), lT.extras.targetNames.push(TT.name)
        }
        return cT
      }
    }
    Vl._ExtensionNames = new Array, Vl._ExtensionFactories = {}, Vl._ExtensionOrders = {};
    class El {
      static async GLTFAsync(TT, kT, cT) {
        cT && cT.exportWithoutWaitingForScene || await TT.whenReadyAsync();
        const lT = new Vl(TT, cT),
          MT = await lT.generateGLTFAsync(kT.replace(/\.[^/.]+$/, ""));
        return lT.dispose(), MT
      }
      static async GLBAsync(TT, kT, cT) {
        cT && cT.exportWithoutWaitingForScene || await TT.whenReadyAsync();
        const lT = new Vl(TT, cT),
          MT = await lT.generateGLBAsync(kT.replace(/\.[^/.]+$/, ""));
        return lT.dispose(), MT
      }
    }
    const Zl = "EXT_mesh_gpu_instancing";

    function ul(TT, kT) {
      const cT = new Float32Array(3 * kT);
      for (let lT = 0; lT < kT; lT++) cT[3 * lT + 0] = TT[4 * lT + 0], cT[3 * lT + 1] = TT[4 * lT + 1], cT[3 * lT + 2] = TT[4 * lT + 2];
      return cT
    }
    class Xl {
      constructor(TT) {
        this.name = Zl, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(TT, kT, cT, lT, MT, KT) {
        return await new Promise((TT => {
          if (kT && cT instanceof rl.e && cT.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const TT = uT.m.Zero(),
              lT = uT.f.Identity(),
              OT = uT.m.One(),
              yT = cT.thinInstanceGetWorldMatrices(),
              fT = uT.h.Fv[2],
              xT = uT.h.Quaternion[1],
              IT = uT.h.Fv[3];
            let AT = !1,
              CT = !1,
              jT = !1;
            const vT = new Float32Array(3 * cT.w6),
              tT = new Float32Array(4 * cT.w6),
              hT = new Float32Array(3 * cT.w6);
            let NT = 0;
            for (const kT of yT) kT.decompose(IT, xT, fT), MT && (Yc(fT), Bc(xT)), vT.set(fT.acT(), 3 * NT), tT.set(xT.normalize().acT(), 4 * NT), hT.set(IT.acT(), 3 * NT), AT = AT || !fT.equalsWithEpsilon(TT), CT = CT || !xT.equalsWithEpsilon(lT), jT = jT || !IT.equalsWithEpsilon(OT), NT++;
            const QT = {
              attributes: {}
            };
            AT && (QT.attributes.TRANSLATION = this._buildAccessor(vT, "VEC3", cT.w6, KT)), CT && (QT.attributes.ROTATION = this._buildAccessor(tT, "VEC4", cT.w6, KT)), jT && (QT.attributes.SCALE = this._buildAccessor(hT, "VEC3", cT.w6, KT));
            let ST = cT._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (ST) {
              const TT = cT.w6,
                kT = "VEC3";
              cT.hasVertexAlpha && ST.length === 4 * TT ? (this._instanceColorWarned || (bT.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), ST = ul(ST, TT)) : ST.length === 4 * TT && (ST = ul(ST, TT)), ST.length === 3 * TT && (QT.attributes._COLOR_0 = this._buildAccessor(ST, kT, TT, KT))
            }
            kT.extensions = kT.extensions || {}, kT.extensions[Zl] = QT
          }
          TT(kT)
        }))
      }
      _buildAccessor(TT, kT, cT, lT) {
        const MT = lT.createBufferView(TT),
          KT = lT.createAccessor(MT, kT, 5126, cT);
        return this._exporter._accessors.push(KT), this._exporter._accessors.length - 1
      }
    }
    let dl = !1;

    function Ll() {
      dl || (dl = !0, Vl.RegisterExtension(Zl, (TT => new Xl(TT))))
    }
    cT(40120);
    Ll();
    var Rl = cT(41405);

    function gl(TT, kT, cT, lT) {
      const MT = TT;
      let KT = null,
        OT = null,
        yT = null,
        fT = null;
      const xT = {},
        IT = kT.find((TT => "POSITION" === TT.dracoName));
      if (!IT) throw new Error("Draco: Missing position attribute for encoding.");
      if (!cT) {
        const TT = IT.data.length / IT.size;
        cT = new(TT > 65535 ? Uint32Array : Uint16Array)(TT);
        for (let kT = 0; kT < TT; kT++) cT[kT] = kT
      }
      try {
        KT = new MT.Encoder, OT = new MT.MeshBuilder, yT = new MT.Mesh, OT.AddFacesToMesh(yT, cT.length / 3, cT);
        const TT = new Map([
          [Float32Array, (TT, kT, cT, lT, MT, KT) => TT.AddFloatAttribute(kT, cT, lT, MT, KT)],
          [Uint32Array, (TT, kT, cT, lT, MT, KT) => TT.AddUInt32Attribute(kT, cT, lT, MT, KT)],
          [Uint16Array, (TT, kT, cT, lT, MT, KT) => TT.AddUInt16Attribute(kT, cT, lT, MT, KT)],
          [Uint8Array, (TT, kT, cT, lT, MT, KT) => TT.AddUInt8Attribute(kT, cT, lT, MT, KT)],
          [Int32Array, (TT, kT, cT, lT, MT, KT) => TT.AddInt32Attribute(kT, cT, lT, MT, KT)],
          [Int16Array, (TT, kT, cT, lT, MT, KT) => TT.AddInt16Attribute(kT, cT, lT, MT, KT)],
          [Int8Array, (TT, kT, cT, lT, MT, KT) => TT.AddInt8Attribute(kT, cT, lT, MT, KT)]
        ]);
        for (const cT of kT) {
          cT.data instanceof Uint8ClampedArray && (cT.data = new Uint8Array(cT.data));
          const kT = TT.get(cT.data.constructor),
            fT = cT.data.length / cT.size;
          xT[cT.kind] = kT(OT, yT, MT[cT.dracoName], fT, cT.size, cT.data), lT.quantizationBits && lT.quantizationBits[cT.dracoName] && KT.SetAttributeQuantization(MT[cT.dracoName], lT.quantizationBits[cT.dracoName])
        }
        lT.method && KT.SetEncodingMethod(MT[lT.method]), void 0 !== lT.encodeSpeed && void 0 !== lT.decodeSpeed && KT.SetSpeedOptions(lT.encodeSpeed, lT.decodeSpeed), fT = new MT.DracoInt8Array;
        const IT = KT.EncodeMeshToDracoBuffer(yT, fT);
        if (IT <= 0) throw new Error("Draco: Failed to encode.");
        const AT = new Int8Array(IT);
        for (let kT = 0; kT < IT; kT++) AT[kT] = fT.GetValue(kT);
        return {
          data: AT,
          attributeIds: xT
        }
      } finally {
        yT && MT.destroy(yT), OT && MT.destroy(OT), KT && MT.destroy(KT), fT && MT.destroy(fT)
      }
    }

    function Ul() {
      let TT;
      onmessage = kT => {
        const cT = kT.data;
        switch (cT.id) {
          case "init": {
            cT.url && importScripts(cT.url);
            const kT = cT.wasmBinary ? {
              wasmBinary: cT.wasmBinary
            } : {};
            TT = DracoEncoderModule(kT), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!TT) throw new Error("Draco: Encoder module is not available.");
            TT.then((TT => {
              const kT = gl(TT, cT.attributes, cT.indices, cT.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: kT
              }, kT ? [kT.data.buffer] : void 0)
            })).catch((TT => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: TT.message
              })
            }))
        }
      }
    }
    class Yl {
      constructor(TT) {
        if (TT.workerPool) return void(this._workerPoolPromise = Promise.resolve(TT.workerPool));
        const kT = TT.wasmBinary,
          cT = TT.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          lT = cT && "function" === typeof Worker && "function" === typeof URL,
          MT = lT || !TT.jsModule,
          KT = TT.wasmUrl && TT.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: MT ? Pk.h.GetBabylonScriptURL(TT.wasmUrl, !0) : "",
            wasmBinaryPromise: kT ? Promise.resolve(kT) : Pk.h.LoadFileAsync(Pk.h.GetBabylonScriptURL(TT.wasmBinaryUrl, !0))
          } : {
            url: MT ? Pk.h.GetBabylonScriptURL(TT.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        lT ? this._workerPoolPromise = KT.wasmBinaryPromise.then((TT => {
          const kT = this._getWorkerContent(),
            lT = URL.createObjectURL(new Blob([kT], {
              type: "application/javascript"
            }));
          return new Rl.d(cT, (() => async function(TT, kT, cT) {
            return await new Promise(((lT, MT) => {
              const KT = kT => {
                  TT.removeEventListener("error", KT), TT.removeEventListener("message", OT), MT(kT)
                },
                OT = kT => {
                  "initDone" === kT.data.id && (TT.removeEventListener("error", KT), TT.removeEventListener("message", OT), lT(TT))
                };
              if (TT.addEventListener("error", KT), TT.addEventListener("message", OT), kT) {
                const lT = kT.slice(0);
                TT.postMessage({
                  id: "init",
                  url: cT,
                  wasmBinary: lT
                }, [lT])
              } else TT.postMessage({
                id: "init",
                url: cT
              })
            }))
          }(new Worker(lT), TT, KT.url)))
        })) : this._modulePromise = KT.wasmBinaryPromise.then((async kT => {
          if (!this._isModuleAvailable() && !TT.jsModule) {
            if (!KT.url) throw new Error("Draco codec module is not available");
            await Pk.h.LoadBabylonScriptAsync(KT.url)
          }
          return await this._createModuleAsync(kT, TT.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((TT => {
          TT.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function Bl() {
      const TT = TT => !!TT && "object" === typeof TT;
      for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
      return cT.reduce(((kT, cT) => {
        const lT = Object.keys(cT);
        for (const MT of lT) {
          const lT = kT[MT],
            KT = cT[MT];
          Array.isArray(lT) && Array.isArray(KT) ? kT[MT] = lT.concat(KT) : TT(lT) && TT(KT) ? kT[MT] = Bl(lT, KT) : kT[MT] = KT
        }
        return kT
      }), {})
    }

    function Wl(TT) {
      return TT === XT.l.PositionKind ? "POSITION" : TT === XT.l.NormalKind ? "NORMAL" : TT === XT.l.ColorKind ? "COLOR" : TT.startsWith(XT.l.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const nl = {
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
    class pl extends Yl {
      static get DefaultAvailable() {
        return !!((TT = pl.DefaultConfiguration).wasmUrl && (TT.wasmBinary || TT.wasmBinaryUrl) && "object" === typeof WebAssembly || TT.fallbackUrl);
        var TT
      }
      static get Default() {
        return pl._Default ?? (pl._Default = new pl), pl._Default
      }
      static ResetDefault(TT) {
        pl._Default && (TT || pl._Default.dispose(), pl._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(TT, kT) {
        return {
          module: await (kT || DracoEncoderModule)({
            wasmBinary: TT
          })
        }
      }
      _getWorkerContent() {
        return `${gl}(${Ul})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pl.DefaultConfiguration)
      }
      async _encodeAsync(TT, kT, cT) {
        const lT = cT ? Bl(nl, cT) : nl;
        if (this._workerPoolPromise) {
          const cT = await this._workerPoolPromise;
          return await new Promise(((MT, KT) => {
            cT.push(((cT, OT) => {
              const yT = TT => {
                  cT.removeEventListener("error", yT), cT.removeEventListener("message", fT), KT(TT), OT()
                },
                fT = TT => {
                  "encodeMeshSuccess" === TT.data.id ? (cT.removeEventListener("error", yT), cT.removeEventListener("message", fT), MT(TT.data.encodedMeshData), OT()) : "encodeMeshError" === TT.data.id && (cT.removeEventListener("error", yT), cT.removeEventListener("message", fT), KT(new Error(TT.data.errorMessage)), OT())
                };
              cT.addEventListener("error", yT), cT.addEventListener("message", fT);
              const xT = [];
              for (const kT of TT) xT.push(kT.data.buffer);
              kT && xT.push(kT.buffer), cT.postMessage({
                id: "encodeMesh",
                attributes: TT,
                indices: kT,
                options: lT
              }, xT)
            }))
          }))
        }
        if (this._modulePromise) {
          return gl((await this._modulePromise).module, TT, kT, lT)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(TT, kT) {
        if (0 == TT.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        TT instanceof rl.e && TT.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === kT?.method && (bT.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), kT.method = "MESH_SEQUENTIAL_ENCODING");
        const cT = function(TT) {
            let kT = TT.FcT(void 0, !0);
            return !kT || kT instanceof Uint32Array || kT instanceof Uint16Array || (kT = ((0, Hc.e)(kT, kT.length) ? Uint32Array : Uint16Array).from(kT)), kT
          }(TT),
          lT = function(TT, kT) {
            const cT = [];
            for (const lT of TT.getVerticesDataKinds()) {
              if (kT?.includes(lT)) {
                if (lT === XT.l.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const MT = TT.getVertexBuffer(lT),
                KT = MT.getSize(),
                OT = (0, Hc.m)(MT.getData(), KT, MT.type, MT.byteOffset, MT.byteStride, TT.getTotalVertices(), !0);
              cT.push({
                kind: lT,
                dracoName: Wl(lT),
                size: KT,
                data: OT
              })
            }
            return cT
          }(TT, kT?.excludedAttributes);
        return await this._encodeAsync(lT, cT, kT)
      }
    }
    pl.DefaultConfiguration = {
      wasmUrl: `${Pk.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${Pk.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${Pk.h._DefaultCdnUrl}/draco_encoder.js`
    }, pl._Default = null;
    const il = "KHR_draco_mesh_compression";
    class ql {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(TT) {
        this.name = il, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === TT.options.meshCompressionMethod && pl.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(TT, kT, cT) {
        if (!this.enabled) return;
        if (4 !== TT.mode && 5 !== TT.mode) return void bT.e.Warn("Cannot compress primitive with mode " + TT.mode + ".");
        const lT = [],
          MT = [];
        let KT = null;
        if (void 0 !== TT.indices) {
          const OT = cT[TT.indices],
            yT = kT.getBufferView(OT);
          KT = kT.getData(yT).slice(), lT.push(yT), MT.push(OT)
        }
        const OT = [];
        for (const [IT, AT] of Object.entries(TT.attributes)) {
          const TT = cT[AT],
            KT = kT.getBufferView(TT),
            fT = Rc(TT.type),
            xT = (0, Hc.m)(kT.getData(KT), fT, TT.componentType, TT.byteOffset || 0, KT.byteStride || (0, Hc.j)(TT.componentType) * fT, TT.count, !0);
          OT.push({
            kind: IT,
            dracoName: (yT = IT, "POSITION" === yT ? "POSITION" : "NORMAL" === yT ? "NORMAL" : yT.startsWith("COLOR") ? "COLOR" : yT.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Rc(TT.type),
            data: xT
          }), lT.push(KT), MT.push(TT)
        }
        var yT;
        const fT = {
            method: TT.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          xT = pl.Default._encodeAsync(OT, KT, fT).then((cT => {
            const KT = {
                bufferView: -1,
                attributes: cT.attributeIds
              },
              OT = kT.createBufferView(cT.data);
            kT.setBufferView(KT, OT);
            for (const TT of lT) this._bufferViewsUsed.add(TT);
            for (const TT of MT) this._accessorsUsed.add(TT);
            TT.extensions || (TT.extensions = {}), TT.extensions[il] = KT
          })).catch((TT => {
            bT.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + TT.message)
          }));
        this._encodePromises.push(xT), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(TT) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((kT => {
          TT.getPropertiesWithBufferView(kT).every((TT => this._accessorsUsed.has(TT))) && TT.removeBufferView(kT)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let sl = !1;

    function TM() {
      sl || (sl = !0, Vl.RegisterExtension(il, (TT => new ql(TT))))
    }
    TM();
    var kM = cT(41164);
    const cM = "KHR_lights_punctual",
      lM = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      MM = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      KM = uT.m.Backward();
    class OM {
      constructor(TT) {
        this.name = cM, this.enabled = !0, this.required = !1, this._exporter = TT
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[cM] = this._lights
      }
      async postExportNodeAsync(TT, kT, cT, lT, MT) {
        return await new Promise((KT => {
          if (!(cT instanceof Al.d)) return void KT(kT);
          const OT = cT.getTypeID() == Al.d.LIGHTTYPEID_POINTLIGHT ? "point" : cT.getTypeID() == Al.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : cT.getTypeID() == Al.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!OT || !(cT instanceof kM.c)) return bT.e.Warn(`${TT}: Light ${cT.name} is not supported in ${cM}`), void KT(kT);
          if (cT.falloffType !== Al.d.FALLOFF_GLTF && bT.e.Warn(`${TT}: Light falloff for ${cT.name} does not match the ${cM} specification!`), !cT.position.qKT(0, 0, 0)) {
            const TT = uT.h.Fv[0].UkT(cT.position);
            MT && Yc(TT), kT.translation = TT.acT()
          }
          if ("point" !== OT) {
            const TT = cT.direction.normalizeToRef(uT.h.Fv[0]);
            MT && Yc(TT);
            const lT = uT.f.FromUnitVectorsToRef(KM, TT, uT.h.Quaternion[0]);
            uT.f.IsIdentity(lT) || (kT.rotation = lT.acT())
          }
          const yT = {
            type: OT,
            name: cT.name,
            color: cT.diffuse.acT(),
            intensity: cT.intensity,
            range: cT.range
          };
          if (qc(yT, lM), "spot" === OT) {
            const TT = cT;
            yT.spot = {
              innerConeAngle: TT.innerAngle / 2,
              outerConeAngle: TT.angle / 2
            }, qc(yT.spot, MM)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(yT);
          const fT = {
              light: this._lights.lights.length - 1
            },
            xT = cT.parent;
          if (xT && pc(cT, xT)) {
            const TT = lT.get(xT);
            if (TT) {
              const cT = this._exporter._nodes[TT];
              return nc(kT, cT), cT.extensions || (cT.extensions = {}), cT.extensions[cM] = fT, void KT(null)
            }
          }
          kT.extensions || (kT.extensions = {}), kT.extensions[cM] = fT, KT(kT)
        }))
      }
    }
    let yM = !1;

    function fM() {
      yM || (yM = !0, Vl.RegisterExtension(cM, (TT => new OM(TT))))
    }
    fM();
    const xM = "KHR_interactivity";
    class IM {
      constructor(TT) {
        this._exporter = TT, this.name = xM, this.enabled = !!TT.options.khrInteractivity, this.required = TT.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var TT, kT, cT;
        const lT = this._exporter.options.khrInteractivity;
        if (!lT) return;
        const MT = lT.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: TT => this._exporter._getNodeIndex(TT),
          getAnimationIndex: TT => this._exporter._getAnimationIndex(TT),
          getCameraIndex: TT => this._exporter._getCameraIndex(TT),
          getMaterialIndex: TT => this._exporter._getMaterialIndex(TT),
          getRootIndex: (TT, kT) => this._exporter._getRootIndex(TT, kT),
          setNodeExtension: (TT, kT, cT) => this._exporter._setNodeExtension(TT, kT, cT)
        });
        this._exporter._glTF.extensions[xM] = MT;
        for (const KT of lT.additionalExtensionsUsed)(TT = this._exporter._glTF).extensionsUsed || (TT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(KT) && this._exporter._glTF.extensionsUsed.push(KT);
        for (const KT of lT.additionalExtensionsRequired)(kT = this._exporter._glTF).extensionsUsed || (kT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(KT) && this._exporter._glTF.extensionsUsed.push(KT), (cT = this._exporter._glTF).extensionsRequired || (cT.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(KT) && this._exporter._glTF.extensionsRequired.push(KT)
      }
    }
    let AM = !1;

    function CM() {
      AM || (AM = !0, Vl.RegisterExtension(xM, (TT => new IM(TT)), 200))
    }
    CM();
    const jM = "EXT_lights_area",
      vM = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      tM = {
        aspect: 1
      },
      hM = uT.m.Backward();
    class NM {
      constructor(TT) {
        this.name = jM, this.enabled = !0, this.required = !1, this._exporter = TT
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[jM] = this._lights
      }
      async postExportNodeAsync(TT, kT, cT, lT, MT) {
        return await new Promise((KT => {
          if (!(cT instanceof Al.d)) return void KT(kT);
          const OT = cT.getTypeID() == Al.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!OT) return bT.e.Warn(`${TT}: Light ${cT.name} is not supported in ${jM}`), void KT(kT);
          const yT = cT;
          if (yT.falloffType !== Al.d.FALLOFF_GLTF && bT.e.Warn(`${TT}: Light falloff for ${cT.name} does not match the ${jM} specification!`), !yT.position.qKT(0, 0, 0)) {
            const TT = uT.h.Fv[0].UkT(yT.position);
            MT && Yc(TT), kT.translation = TT.acT()
          }
          const fT = uT.m.Forward();
          MT && Yc(fT);
          const xT = uT.f.FromUnitVectorsToRef(hM, fT, uT.h.Quaternion[0]);
          uT.f.IsIdentity(xT) || (kT.rotation = xT.acT());
          const IT = {
            type: OT,
            name: yT.name,
            color: yT.diffuse.acT(),
            intensity: yT.intensity,
            size: yT.height,
            rect: {
              aspect: yT.width / yT.height
            }
          };
          qc(IT, vM), IT.rect && qc(IT.rect, tM), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(IT);
          const AT = {
              light: this._lights.lights.length - 1
            },
            CT = cT.parent;
          if (CT && pc(yT, CT)) {
            const TT = lT.get(CT);
            if (TT) {
              const cT = this._exporter._nodes[TT];
              return nc(kT, cT), cT.extensions || (cT.extensions = {}), cT.extensions[jM] = AT, void KT(null)
            }
          }
          kT.extensions || (kT.extensions = {}), kT.extensions[jM] = AT, KT(kT)
        }))
      }
    }
    let QM = !1;

    function SM() {
      QM || (QM = !0, Vl.RegisterExtension(jM, (TT => new NM(TT))))
    }
    SM();
    const DM = "KHR_materials_anisotropy";
    class aM {
      constructor(TT) {
        this.name = DM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        const lT = [];
        if (cT instanceof Fk) {
          if (cT.anisotropy.isEnabled && !cT.anisotropy.legacy) return cT.anisotropy.texture && lT.push(cT.anisotropy.texture), lT
        } else if (cT instanceof sk && cT.specularRoughnessAnisotropy > 0) {
          const TT = function(TT) {
            const kT = TT.specularRoughnessAnisotropyTexture,
              cT = TT.geometryTangentTexture;
            return `${kT&&kT.getInternalTexture()?kT.getInternalTexture().uniqueId:"NoStrength"}_${cT&&cT.getInternalTexture()?cT.getInternalTexture().uniqueId:"NoTangent"}`
          }(cT);
          if (this._anisoTexturesMap[TT]) lT.push(this._anisoTexturesMap[TT]);
          else {
            const kT = await async function(TT) {
              const kT = TT.NJ(),
                cT = TT.specularRoughnessAnisotropyTexture,
                lT = TT.geometryTangentTexture;
              return cT || lT ? await yc("AnisotropyTexture", Ic(lT ? fc(lT, 0) : xc(1), lT ? fc(lT, 1) : xc(0), cT ? fc(cT, 0) : xc(1)), kT) : null
            }(cT);
            kT && (lT.push(kT), this._anisoTexturesMap[TT] = kT)
          }
          return lT
        }
        return []
      }
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((TT => {
          var lT;
          if (cT instanceof Fk) {
            if (!cT.anisotropy.isEnabled || cT.anisotropy.legacy) return void TT(kT);
            this._wasUsed = !0, kT.extensions = kT.extensions || {};
            const lT = this._exporter._materialExporter.getTextureInfo(cT.anisotropy.texture),
              MT = {
                anisotropyStrength: cT.anisotropy.intensity,
                anisotropyRotation: cT.anisotropy.angle,
                anisotropyTexture: lT ?? void 0
              };
            null !== MT.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(cT), kT.extensions[DM] = MT
          } else if (cT instanceof sk && cT.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, kT.extensions = kT.extensions || {};
            let MT = cT.specularRoughnessTexture;
            cT._useRoughnessFromMetallicTextureGreen && (MT = cT.baseMetalnessTexture);
            const KT = this._anisoTexturesMap[cT.id];
            if (!MT && !KT) {
              let lT = cT.specularRoughness,
                MT = cT.specularRoughnessAnisotropy;
              if (!cT._useGltfStyleAnisotropy) {
                const TT = function(TT, kT) {
                  const cT = TT * TT,
                    lT = cT * Math.sqrt(2 / (1 + (1 - kT) * (1 - kT))),
                    MT = (1 - kT) * lT;
                  return {
                    newBaseRoughness: Math.sqrt(MT),
                    newAnisotropyStrength: Math.min(Math.sqrt((lT - cT) / Math.max(1 - cT, 1e-4)), 1)
                  }
                }(cT.specularRoughness, cT.specularRoughnessAnisotropy);
                lT = TT.newBaseRoughness, MT = TT.newAnisotropyStrength
              }
              kT.pbrMetallicRoughness && (kT.pbrMetallicRoughness.roughnessFactor = lT);
              const KT = {
                anisotropyStrength: MT,
                anisotropyRotation: cT.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return kT.extensions[DM] = KT, TT(kT)
            }
            const OT = KT ? this._exporter._materialExporter.getTextureInfo(KT) : null,
              yT = {
                anisotropyStrength: cT.specularRoughnessAnisotropy,
                anisotropyRotation: cT.geometryTangentAngle,
                anisotropyTexture: OT || void 0,
                extensions: {}
              };
            cT._useGltfStyleAnisotropy || (kT.extensions.KHR_materials_openpbr = {}, (lT = this._exporter._glTF).extensionsUsed || (lT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(cT), kT.extensions[DM] = yT
          }
          TT(kT)
        }))
      }
    }
    let FM = !1;

    function rM() {
      FM || (FM = !0, Vl.RegisterExtension(DM, (TT => new aM(TT))))
    }
    rM();
    const PM = "KHR_materials_clearcoat";

    function wM(TT, kT) {
      const cT = new JT.f(kT.name, kT.NJ());
      return cT._texture = TT, cT.coordinatesIndex = kT.coordinatesIndex, kT instanceof JT.f && (cT.uOffset = kT.uOffset, cT.vOffset = kT.vOffset, cT.uScale = kT.uScale, cT.vScale = kT.vScale, cT.wAng = kT.wAng), cT.wrapU = kT.wrapU, cT.wrapV = kT.wrapV, cT
    }
    class mM {
      constructor(TT) {
        this.name = PM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = TT
      }
      dispose() {
        for (const TT of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[TT].dispose()
        }
        this._mergedTexturesMap = {};
        for (const TT of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[TT].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        const lT = [];
        if (cT instanceof Fk) {
          if (cT.clearCoat.isEnabled) return cT.clearCoat.texture && lT.push(cT.clearCoat.texture), !cT.clearCoat.useRoughnessFromMainTexture && cT.clearCoat.textureRoughness && lT.push(cT.clearCoat.textureRoughness), cT.clearCoat.bumpTexture && lT.push(cT.clearCoat.bumpTexture), lT
        } else if (cT instanceof sk && cT.coatWeight > 0) {
          let TT = !1;
          if (cT.coatWeightTexture ? cT.coatRoughnessTexture ? cT._useCoatRoughnessFromGreenChannel && cT.coatWeightTexture.getInternalTexture() === cT.coatRoughnessTexture.getInternalTexture() ? (lT.push(cT.coatWeightTexture), lT.push(cT.coatRoughnessTexture)) : TT = !0 : lT.push(cT.coatWeightTexture) : cT.coatRoughnessTexture && (cT._useCoatRoughnessFromGreenChannel ? lT.push(cT.coatRoughnessTexture) : TT = !0), TT) {
            const TT = function(TT) {
              const kT = TT.coatWeightTexture,
                cT = kT && kT.getInternalTexture() ? kT.getInternalTexture().uniqueId : "NoCoat",
                lT = TT.coatRoughnessTexture;
              return `${cT}_${lT&&lT.getInternalTexture()?lT.getInternalTexture().uniqueId:"NoRoughness"}`
            }(cT);
            if (!this._cachedInternalTexturesMap[TT]) {
              const kT = await async function(TT) {
                const kT = TT.NJ(),
                  cT = TT.coatWeightTexture,
                  lT = TT.coatRoughnessTexture;
                return cT || lT ? (await yc("CoatTexture", Ic(cT ? fc(cT, 0) : xc(1), lT ? fc(lT, TT._useCoatRoughnessFromGreenChannel ? 1 : 0) : xc(1)), kT)).getInternalTexture() : null
              }(cT);
              kT && (this._cachedInternalTexturesMap[TT] = kT)
            }
            this._cachedInternalTexturesMap[TT] && (cT.coatWeightTexture && (this._mergedTexturesMap[cT.coatWeightTexture.uniqueId] = wM(this._cachedInternalTexturesMap[TT], cT.coatWeightTexture), lT.push(this._mergedTexturesMap[cT.coatWeightTexture.uniqueId])), cT.coatRoughnessTexture && (this._mergedTexturesMap[cT.coatRoughnessTexture.uniqueId] = wM(this._cachedInternalTexturesMap[TT], cT.coatRoughnessTexture), lT.push(this._mergedTexturesMap[cT.coatRoughnessTexture.uniqueId])))
          }
          return cT.geometryCoatNormalTexture && lT.push(cT.geometryCoatNormalTexture), lT
        }
        return []
      }
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((TT => {
          if (cT instanceof Fk) {
            if (!cT.clearCoat.isEnabled) return void TT(kT);
            this._wasUsed = !0, kT.extensions = kT.extensions || {};
            const lT = this._exporter._materialExporter.getTextureInfo(cT.clearCoat.texture);
            let MT;
            MT = cT.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(cT.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(cT.clearCoat.textureRoughness), cT.clearCoat.isTintEnabled && Pk.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${cT.name}`), cT.clearCoat.remapF0OnInterfaceChange && Pk.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${cT.name}`);
            const KT = this._exporter._materialExporter.getTextureInfo(cT.clearCoat.bumpTexture),
              OT = {
                clearcoatFactor: cT.clearCoat.intensity,
                clearcoatTexture: lT ?? void 0,
                clearcoatRoughnessFactor: cT.clearCoat.roughness,
                clearcoatRoughnessTexture: MT ?? void 0,
                clearcoatNormalTexture: KT ?? void 0
              };
            null === OT.clearcoatTexture && null === OT.clearcoatRoughnessTexture && null === OT.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(cT), kT.extensions[PM] = OT
          } else if (cT instanceof sk) {
            if (0 == cT.coatWeight) return void TT(kT);
            let lT, MT, KT, OT;
            this._wasUsed = !0, kT.extensions = kT.extensions || {}, cT.coatWeightTexture && (lT = this._mergedTexturesMap[cT.coatWeightTexture.uniqueId], MT = this._exporter._materialExporter.getTextureInfo(lT)), cT.coatRoughnessTexture && (KT = this._mergedTexturesMap[cT.coatRoughnessTexture.uniqueId], OT = this._exporter._materialExporter.getTextureInfo(KT)), cT.coatColorTexture && Pk.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${cT.name}`);
            const yT = this._exporter._materialExporter.getTextureInfo(cT.geometryCoatNormalTexture),
              fT = {
                clearcoatFactor: cT.coatWeight,
                clearcoatTexture: MT ?? void 0,
                clearcoatRoughnessFactor: cT.coatRoughness,
                clearcoatRoughnessTexture: OT ?? void 0,
                clearcoatNormalTexture: yT ?? void 0
              };
            null === fT.clearcoatTexture && null === fT.clearcoatRoughnessTexture && null === fT.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(cT), kT.extensions[PM] = fT
          }
          TT(kT)
        }))
      }
    }
    let bM = !1;

    function zM() {
      bM || (bM = !0, Vl.RegisterExtension(PM, (TT => new mM(TT))))
    }
    zM();
    const JM = "KHR_materials_coat";

    function oM(TT) {
      const kT = TT.coatRoughnessAnisotropyTexture,
        cT = TT.geometryCoatTangentTexture;
      return `${kT&&kT.getInternalTexture()?kT.getInternalTexture().uniqueId:"NoStrength"}_${cT&&cT.getInternalTexture()?cT.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function HM(TT, kT) {
      const cT = new JT.f(kT.name, kT.NJ());
      return cT._texture = TT, cT.coordinatesIndex = kT.coordinatesIndex, kT instanceof JT.f && (cT.uOffset = kT.uOffset, cT.vOffset = kT.vOffset, cT.uScale = kT.uScale, cT.vScale = kT.vScale, cT.wAng = kT.wAng), cT.wrapU = kT.wrapU, cT.wrapV = kT.wrapV, cT
    }
    class eM {
      constructor(TT) {
        this.name = JM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = TT
      }
      dispose() {
        for (const TT of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[TT].dispose()
        }
        this._mergedTexturesMap = {};
        for (const TT of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[TT].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        const lT = [];
        if (cT instanceof Fk) {
          if (cT.clearCoat.isEnabled) return cT.clearCoat.texture && lT.push(cT.clearCoat.texture), !cT.clearCoat.useRoughnessFromMainTexture && cT.clearCoat.textureRoughness && lT.push(cT.clearCoat.textureRoughness), cT.clearCoat.bumpTexture && lT.push(cT.clearCoat.bumpTexture), cT.clearCoat.tintTexture && lT.push(cT.clearCoat.tintTexture), lT
        } else if (cT instanceof sk && cT.coatWeight > 0) {
          let TT = !1;
          if (cT.coatWeightTexture ? cT.coatRoughnessTexture ? cT._useCoatRoughnessFromGreenChannel && cT.coatWeightTexture.getInternalTexture() === cT.coatRoughnessTexture.getInternalTexture() ? (lT.push(cT.coatWeightTexture), lT.push(cT.coatRoughnessTexture)) : TT = !0 : lT.push(cT.coatWeightTexture) : cT.coatRoughnessTexture && (cT._useCoatRoughnessFromGreenChannel ? lT.push(cT.coatRoughnessTexture) : TT = !0), TT) {
            const TT = function(TT) {
              const kT = TT.coatWeightTexture,
                cT = kT && kT.getInternalTexture() ? kT.getInternalTexture().uniqueId : "NoCoat",
                lT = TT.coatRoughnessTexture;
              return `${cT}_${lT&&lT.getInternalTexture()?lT.getInternalTexture().uniqueId:"NoRoughness"}`
            }(cT);
            if (!this._cachedInternalTexturesMap[TT]) {
              const kT = await async function(TT) {
                const kT = TT.NJ(),
                  cT = TT.coatWeightTexture,
                  lT = TT.coatRoughnessTexture;
                return cT || lT ? (await yc("CoatTexture", Ic(cT ? fc(cT, 0) : xc(1), lT ? fc(lT, TT._useCoatRoughnessFromGreenChannel ? 1 : 0) : xc(1)), kT)).getInternalTexture() : null
              }(cT);
              kT && (this._cachedInternalTexturesMap[TT] = kT)
            }
            this._cachedInternalTexturesMap[TT] && (cT.coatWeightTexture && (this._mergedTexturesMap[cT.coatWeightTexture.uniqueId] = HM(this._cachedInternalTexturesMap[TT], cT.coatWeightTexture), lT.push(this._mergedTexturesMap[cT.coatWeightTexture.uniqueId])), cT.coatRoughnessTexture && (this._mergedTexturesMap[cT.coatRoughnessTexture.uniqueId] = HM(this._cachedInternalTexturesMap[TT], cT.coatRoughnessTexture), lT.push(this._mergedTexturesMap[cT.coatRoughnessTexture.uniqueId])))
          }
          if (cT.geometryCoatNormalTexture && lT.push(cT.geometryCoatNormalTexture), cT.coatColorTexture && lT.push(cT.coatColorTexture), cT.coatRoughnessAnisotropy > 0) {
            const TT = oM(cT);
            if (this._mergedTexturesMap[TT]) lT.push(this._mergedTexturesMap[TT]);
            else {
              const kT = await async function(TT) {
                const kT = TT.NJ(),
                  cT = TT.coatRoughnessAnisotropyTexture,
                  lT = TT.geometryCoatTangentTexture;
                return cT || lT ? await yc("AnisotropyTexture", Ic(lT ? fc(lT, 0) : xc(1), lT ? fc(lT, 1) : xc(0), cT ? fc(cT, 0) : xc(1)), kT) : null
              }(cT);
              kT && (lT.push(kT), this._mergedTexturesMap[TT] = kT)
            }
            return lT
          }
          return lT
        }
        return []
      }
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((TT => {
          var lT;
          if (cT instanceof Fk) {
            if (!cT.clearCoat.isEnabled) return void TT(kT);
            this._wasUsed = !0, kT.extensions = kT.extensions || {};
            const lT = this._exporter._materialExporter.getTextureInfo(cT.clearCoat.texture);
            let MT, KT;
            MT = cT.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(cT.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(cT.clearCoat.textureRoughness), cT.clearCoat.isTintEnabled && (KT = this._exporter._materialExporter.getTextureInfo(cT.clearCoat.tintTexture));
            const OT = this._exporter._materialExporter.getTextureInfo(cT.clearCoat.bumpTexture),
              yT = cT.clearCoat.indexOfRefraction,
              fT = {
                coatFactor: cT.clearCoat.intensity,
                coatTexture: lT ?? void 0,
                coatRoughnessFactor: cT.clearCoat.roughness,
                coatRoughnessTexture: MT ?? void 0,
                coatNormalTexture: OT ?? void 0,
                coatColorFactor: cT.clearCoat.tintColor.acT(),
                coatColorTexture: KT ?? void 0,
                coatIor: 1.5 !== yT ? yT : void 0
              };
            null === fT.coatTexture && null === fT.coatRoughnessTexture && null === fT.coatRoughnessTexture && null === fT.coatColorTexture || this._exporter._materialNeedsUVsSet.add(cT), kT.extensions[JM] = fT
          } else if (cT instanceof sk) {
            if (0 == cT.coatWeight) return void TT(kT);
            let MT, KT, OT, yT;
            this._wasUsed = !0, kT.extensions = kT.extensions || {}, cT.coatWeightTexture && (MT = this._mergedTexturesMap[cT.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[cT.coatWeightTexture.uniqueId] : cT.coatWeightTexture, KT = this._exporter._materialExporter.getTextureInfo(MT)), cT.coatRoughnessTexture && (OT = this._mergedTexturesMap[cT.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[cT.coatRoughnessTexture.uniqueId] : cT.coatRoughnessTexture, yT = this._exporter._materialExporter.getTextureInfo(OT));
            const fT = this._exporter._materialExporter.getTextureInfo(cT.geometryCoatNormalTexture),
              xT = this._exporter._materialExporter.getTextureInfo(cT.coatColorTexture),
              IT = cT.coatIor,
              AT = cT.coatDarkening,
              CT = cT.coatRoughnessTexture,
              jT = oM(cT),
              vT = this._mergedTexturesMap[jT];
            let tT, hT = 0,
              NT = 0;
            if (cT.coatRoughnessAnisotropy > 0) {
              if (CT || vT) {
                const TT = vT ? this._exporter._materialExporter.getTextureInfo(vT) : null;
                hT = cT.coatRoughnessAnisotropy, NT = cT.geometryCoatTangentAngle, tT = TT || void 0
              } else {
                let TT = cT.coatRoughness,
                  lT = cT.coatRoughnessAnisotropy;
                if (!cT._useGltfStyleAnisotropy) {
                  const kT = function(TT, kT) {
                    const cT = TT * TT,
                      lT = cT * Math.sqrt(2 / (1 + (1 - kT) * (1 - kT))),
                      MT = (1 - kT) * lT;
                    return {
                      newBaseRoughness: Math.sqrt(MT),
                      newAnisotropyStrength: Math.min(Math.sqrt((lT - cT) / Math.max(1 - cT, 1e-4)), 1)
                    }
                  }(cT.coatRoughness, cT.coatRoughnessAnisotropy);
                  TT = kT.newBaseRoughness, lT = kT.newAnisotropyStrength
                }
                kT.pbrMetallicRoughness && (kT.pbrMetallicRoughness.roughnessFactor = TT), hT = lT, NT = cT.geometryCoatTangentAngle + .5 * Math.PI, tT = void 0
              }
              cT._useGltfStyleAnisotropy || (kT.extensions.KHR_materials_openpbr = {}, (lT = this._exporter._glTF).extensionsUsed || (lT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const QT = {
              coatFactor: cT.coatWeight,
              coatTexture: KT ?? void 0,
              coatRoughnessFactor: cT.coatRoughness,
              coatRoughnessTexture: yT ?? void 0,
              coatNormalTexture: fT ?? void 0,
              coatColorFactor: cT.coatColor.acT(),
              coatColorTexture: xT ?? void 0,
              coatIor: 1.5 !== IT ? IT : void 0,
              coatDarkeningFactor: 1 !== AT ? AT : void 0,
              coatAnisotropyRotation: NT,
              coatAnisotropyStrength: hT,
              coatAnisotropyTexture: tT
            };
            null === QT.coatTexture && null === QT.coatRoughnessTexture && null === QT.coatRoughnessTexture && null === QT.coatAnisotropyTexture && null === QT.coatColorTexture || this._exporter._materialNeedsUVsSet.add(cT), kT.extensions[JM] = QT
          }
          TT(kT)
        }))
      }
    }
    let GM = !1;

    function VM() {
      GM || (GM = !0, Vl.RegisterExtension(JM, (TT => new eM(TT))))
    }
    VM();
    let EM = (() => {
      var TT, kT, cT, lT, MT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT, NT, QT, ST, DT, aT, FT, rT, PT, bT, zT, JT, oT, HT, eT, VT, ET, ZT, uT, XT, dT, LT, RT, gT, UT, BT, WT, nT, pT, iT, qT, sT, Tk, kk, ck, lk, Mk, Kk, Ok, yk, fk, xk, Ik, Ak, Ck, jk, vk, tk, hk, Nk, Qk, Sk;
      let Dk, ak, Pk, wk, mk, bk, zk, Jk, Hk, ek, Gk, Vk, Ek, Zk, uk, Xk, dk, Lk, Rk, gk, Uk, Yk, Bk, Wk, nk, pk, ik, qk, sk, Tc, kc, cc, lc, Mc, Kc, Oc, yc, fc, xc, Ic, Ac, Cc, jc, vc, tc, hc, Nc, Qc, Sc, Dc, ac, Fc, rc, Pc, wc, mc, bc, zc, Jc, oc, Hc, ec, Gc, Vc, Ec, Zc, uc, Xc, dc = Fk,
        Lc = [],
        Rc = [],
        gc = [],
        Uc = [],
        Yc = [],
        Bc = [],
        Wc = [],
        nc = [],
        pc = [],
        ic = [],
        qc = [],
        sc = [],
        Tl = [],
        kl = [],
        cl = [],
        ll = [],
        Ml = [],
        Kl = [],
        Ol = [],
        yl = [],
        fl = [],
        xl = [],
        Il = [],
        Al = [],
        Cl = [],
        jl = [],
        vl = [],
        tl = [],
        hl = [],
        Nl = [],
        Ql = [],
        Sl = [],
        Dl = [],
        al = [],
        Fl = [],
        rl = [],
        Pl = [],
        wl = [],
        ml = [],
        bl = [],
        zl = [],
        Jl = [],
        ol = [],
        Hl = [],
        el = [],
        Gl = [],
        Vl = [],
        El = [],
        Zl = [],
        ul = [],
        Xl = [],
        dl = [],
        Ll = [],
        Rl = [],
        gl = [],
        Ul = [],
        Yl = [],
        Bl = [],
        Wl = [],
        nl = [],
        pl = [],
        il = [],
        ql = [],
        sl = [],
        TM = [],
        kM = [],
        cM = [],
        lM = [],
        MM = [],
        KM = [],
        OM = [],
        yM = [],
        fM = [],
        xM = [],
        IM = [],
        AM = [],
        CM = [],
        jM = [],
        vM = [],
        tM = [],
        hM = [],
        NM = [],
        QM = [],
        SM = [],
        DM = [],
        aM = [],
        FM = [],
        rM = [],
        PM = [],
        wM = [],
        mM = [],
        bM = [],
        zM = [],
        JM = [],
        oM = [],
        HM = [],
        eM = [],
        GM = [],
        VM = [],
        EM = [],
        ZM = [],
        uM = [],
        XM = [],
        dM = [],
        LM = [],
        RM = [],
        gM = [],
        UM = [],
        YM = [],
        BM = [],
        WM = [],
        nM = [],
        pM = [],
        iM = [],
        qM = [],
        sM = [],
        TK = [],
        kK = [],
        cK = [],
        lK = [],
        MK = [],
        KK = [],
        OK = [],
        yK = [],
        fK = [],
        xK = [],
        IK = [],
        AK = [],
        CK = [],
        jK = [],
        vK = [],
        tK = [],
        hK = [];
      return TT = class extends dc {
        get directIntensity() {
          return (0, wT.b)(this, kT, "f")
        }
        set directIntensity(TT) {
          (0, wT.d)(this, kT, TT, "f")
        }
        get emissiveIntensity() {
          return (0, wT.b)(this, cT, "f")
        }
        set emissiveIntensity(TT) {
          (0, wT.d)(this, cT, TT, "f")
        }
        get environmentIntensity() {
          return (0, wT.b)(this, lT, "f")
        }
        set environmentIntensity(TT) {
          (0, wT.d)(this, lT, TT, "f")
        }
        get specularIntensity() {
          return (0, wT.b)(this, MT, "f")
        }
        set specularIntensity(TT) {
          (0, wT.d)(this, MT, TT, "f")
        }
        get disableBumpMap() {
          return (0, wT.b)(this, OT, "f")
        }
        set disableBumpMap(TT) {
          (0, wT.d)(this, OT, TT, "f")
        }
        get albedoTexture() {
          return (0, wT.b)(this, yT, "f")
        }
        set albedoTexture(TT) {
          (0, wT.d)(this, yT, TT, "f")
        }
        get baseWeightTexture() {
          return (0, wT.b)(this, fT, "f")
        }
        set baseWeightTexture(TT) {
          (0, wT.d)(this, fT, TT, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, wT.b)(this, xT, "f")
        }
        set baseDiffuseRoughnessTexture(TT) {
          (0, wT.d)(this, xT, TT, "f")
        }
        get ambientTexture() {
          return (0, wT.b)(this, IT, "f")
        }
        set ambientTexture(TT) {
          (0, wT.d)(this, IT, TT, "f")
        }
        get ambientTextureStrength() {
          return (0, wT.b)(this, AT, "f")
        }
        set ambientTextureStrength(TT) {
          (0, wT.d)(this, AT, TT, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, wT.b)(this, CT, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(TT) {
          (0, wT.d)(this, CT, TT, "f")
        }
        get opacityTexture() {
          return (0, wT.b)(this, jT, "f")
        }
        set opacityTexture(TT) {
          (0, wT.d)(this, jT, TT, "f")
        }
        get reflectionTexture() {
          return (0, wT.b)(this, vT, "f")
        }
        set reflectionTexture(TT) {
          (0, wT.d)(this, vT, TT, "f")
        }
        get emissiveTexture() {
          return (0, wT.b)(this, tT, "f")
        }
        set emissiveTexture(TT) {
          (0, wT.d)(this, tT, TT, "f")
        }
        get reflectivityTexture() {
          return (0, wT.b)(this, hT, "f")
        }
        set reflectivityTexture(TT) {
          (0, wT.d)(this, hT, TT, "f")
        }
        get metallicTexture() {
          return (0, wT.b)(this, NT, "f")
        }
        set metallicTexture(TT) {
          (0, wT.d)(this, NT, TT, "f")
        }
        get metallic() {
          return (0, wT.b)(this, QT, "f")
        }
        set metallic(TT) {
          (0, wT.d)(this, QT, TT, "f")
        }
        get roughness() {
          return (0, wT.b)(this, ST, "f")
        }
        set roughness(TT) {
          (0, wT.d)(this, ST, TT, "f")
        }
        get metallicF0Factor() {
          return (0, wT.b)(this, DT, "f")
        }
        set metallicF0Factor(TT) {
          (0, wT.d)(this, DT, TT, "f")
        }
        get metallicReflectanceColor() {
          return (0, wT.b)(this, aT, "f")
        }
        set metallicReflectanceColor(TT) {
          (0, wT.d)(this, aT, TT, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, wT.b)(this, FT, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(TT) {
          (0, wT.d)(this, FT, TT, "f")
        }
        get metallicReflectanceTexture() {
          return (0, wT.b)(this, rT, "f")
        }
        set metallicReflectanceTexture(TT) {
          (0, wT.d)(this, rT, TT, "f")
        }
        get reflectanceTexture() {
          return (0, wT.b)(this, PT, "f")
        }
        set reflectanceTexture(TT) {
          (0, wT.d)(this, PT, TT, "f")
        }
        get microSurfaceTexture() {
          return (0, wT.b)(this, bT, "f")
        }
        set microSurfaceTexture(TT) {
          (0, wT.d)(this, bT, TT, "f")
        }
        get bumpTexture() {
          return (0, wT.b)(this, zT, "f")
        }
        set bumpTexture(TT) {
          (0, wT.d)(this, zT, TT, "f")
        }
        get lightmapTexture() {
          return (0, wT.b)(this, JT, "f")
        }
        set lightmapTexture(TT) {
          (0, wT.d)(this, JT, TT, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(TT) {
          this.subSurface.refractionTexture = TT, TT ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, wT.b)(this, oT, "f")
        }
        set ambientColor(TT) {
          (0, wT.d)(this, oT, TT, "f")
        }
        get albedoColor() {
          return (0, wT.b)(this, HT, "f")
        }
        set albedoColor(TT) {
          (0, wT.d)(this, HT, TT, "f")
        }
        get baseWeight() {
          return (0, wT.b)(this, eT, "f")
        }
        set baseWeight(TT) {
          (0, wT.d)(this, eT, TT, "f")
        }
        get baseDiffuseRoughness() {
          return (0, wT.b)(this, VT, "f")
        }
        set baseDiffuseRoughness(TT) {
          (0, wT.d)(this, VT, TT, "f")
        }
        get reflectivityColor() {
          return (0, wT.b)(this, ET, "f")
        }
        set reflectivityColor(TT) {
          (0, wT.d)(this, ET, TT, "f")
        }
        get reflectionColor() {
          return (0, wT.b)(this, ZT, "f")
        }
        set reflectionColor(TT) {
          (0, wT.d)(this, ZT, TT, "f")
        }
        get emissiveColor() {
          return (0, wT.b)(this, uT, "f")
        }
        set emissiveColor(TT) {
          (0, wT.d)(this, uT, TT, "f")
        }
        get microSurface() {
          return (0, wT.b)(this, XT, "f")
        }
        set microSurface(TT) {
          (0, wT.d)(this, XT, TT, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(TT) {
          this.subSurface.indexOfRefraction = TT
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(TT) {
          this.subSurface.invertRefractionY = TT
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(TT) {
          this.subSurface.linkRefractionWithTransparency = TT, TT && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, wT.b)(this, dT, "f")
        }
        set useLightmapAsShadowmap(TT) {
          (0, wT.d)(this, dT, TT, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, wT.b)(this, LT, "f")
        }
        set useAlphaFromAlbedoTexture(TT) {
          (0, wT.d)(this, LT, TT, "f")
        }
        get forceAlphaTest() {
          return (0, wT.b)(this, RT, "f")
        }
        set forceAlphaTest(TT) {
          (0, wT.d)(this, RT, TT, "f")
        }
        get alphaCutOff() {
          return (0, wT.b)(this, gT, "f")
        }
        set alphaCutOff(TT) {
          (0, wT.d)(this, gT, TT, "f")
        }
        get useSpecularOverAlpha() {
          return (0, wT.b)(this, UT, "f")
        }
        set useSpecularOverAlpha(TT) {
          (0, wT.d)(this, UT, TT, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, wT.b)(this, BT, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(TT) {
          (0, wT.d)(this, BT, TT, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, wT.b)(this, WT, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(TT) {
          (0, wT.d)(this, WT, TT, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, wT.b)(this, nT, "f")
        }
        set useRoughnessFromMetallicTextureGreen(TT) {
          (0, wT.d)(this, nT, TT, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, wT.b)(this, pT, "f")
        }
        set useMetallnessFromMetallicTextureBlue(TT) {
          (0, wT.d)(this, pT, TT, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, wT.b)(this, iT, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(TT) {
          (0, wT.d)(this, iT, TT, "f")
        }
        get useAmbientInGrayScale() {
          return (0, wT.b)(this, qT, "f")
        }
        set useAmbientInGrayScale(TT) {
          (0, wT.d)(this, qT, TT, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, wT.b)(this, sT, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(TT) {
          (0, wT.d)(this, sT, TT, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === Fk.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(TT) {
          TT !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? Fk.LIGHTFALLOFF_PHYSICAL : Fk.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === Fk.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(TT) {
          TT !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? Fk.LIGHTFALLOFF_GLTF : Fk.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, wT.b)(this, Tk, "f")
        }
        set useRadianceOverAlpha(TT) {
          (0, wT.d)(this, Tk, TT, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, wT.b)(this, kk, "f")
        }
        set useObjectSpaceNormalMap(TT) {
          (0, wT.d)(this, kk, TT, "f")
        }
        get useParallax() {
          return (0, wT.b)(this, ck, "f")
        }
        set useParallax(TT) {
          (0, wT.d)(this, ck, TT, "f")
        }
        get useParallaxOcclusion() {
          return (0, wT.b)(this, lk, "f")
        }
        set useParallaxOcclusion(TT) {
          (0, wT.d)(this, lk, TT, "f")
        }
        get parallaxScaleBias() {
          return (0, wT.b)(this, Mk, "f")
        }
        set parallaxScaleBias(TT) {
          (0, wT.d)(this, Mk, TT, "f")
        }
        get disableLighting() {
          return (0, wT.b)(this, Kk, "f")
        }
        set disableLighting(TT) {
          (0, wT.d)(this, Kk, TT, "f")
        }
        get forceIrradianceInFragment() {
          return (0, wT.b)(this, Ok, "f")
        }
        set forceIrradianceInFragment(TT) {
          (0, wT.d)(this, Ok, TT, "f")
        }
        get maxSimultaneousLights() {
          return (0, wT.b)(this, yk, "f")
        }
        set maxSimultaneousLights(TT) {
          (0, wT.d)(this, yk, TT, "f")
        }
        get invertNormalMapX() {
          return (0, wT.b)(this, fk, "f")
        }
        set invertNormalMapX(TT) {
          (0, wT.d)(this, fk, TT, "f")
        }
        get invertNormalMapY() {
          return (0, wT.b)(this, xk, "f")
        }
        set invertNormalMapY(TT) {
          (0, wT.d)(this, xk, TT, "f")
        }
        get twoSidedLighting() {
          return (0, wT.b)(this, Ik, "f")
        }
        set twoSidedLighting(TT) {
          (0, wT.d)(this, Ik, TT, "f")
        }
        get useAlphaFresnel() {
          return (0, wT.b)(this, Ak, "f")
        }
        set useAlphaFresnel(TT) {
          (0, wT.d)(this, Ak, TT, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, wT.b)(this, Ck, "f")
        }
        set useLinearAlphaFresnel(TT) {
          (0, wT.d)(this, Ck, TT, "f")
        }
        get environmentBRDFTexture() {
          return (0, wT.b)(this, jk, "f")
        }
        set environmentBRDFTexture(TT) {
          (0, wT.d)(this, jk, TT, "f")
        }
        get forceNormalForward() {
          return (0, wT.b)(this, vk, "f")
        }
        set forceNormalForward(TT) {
          (0, wT.d)(this, vk, TT, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, wT.b)(this, tk, "f")
        }
        set enableSpecularAntiAliasing(TT) {
          (0, wT.d)(this, tk, TT, "f")
        }
        get useHorizonOcclusion() {
          return (0, wT.b)(this, hk, "f")
        }
        set useHorizonOcclusion(TT) {
          (0, wT.d)(this, hk, TT, "f")
        }
        get useRadianceOcclusion() {
          return (0, wT.b)(this, Nk, "f")
        }
        set useRadianceOcclusion(TT) {
          (0, wT.d)(this, Nk, TT, "f")
        }
        get unlit() {
          return (0, wT.b)(this, Qk, "f")
        }
        set unlit(TT) {
          (0, wT.d)(this, Qk, TT, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, wT.b)(this, Sk, "f")
        }
        set applyDecalMapAfterDetailMap(TT) {
          (0, wT.d)(this, Sk, TT, "f")
        }
        constructor(KT, mT) {
          super(KT, mT, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), kT.set(this, ((0, wT.h)(this, Lc), (0, wT.h)(this, Rc, 1))), cT.set(this, ((0, wT.h)(this, gc), (0, wT.h)(this, Uc, 1))), lT.set(this, ((0, wT.h)(this, Yc), (0, wT.h)(this, Bc, 1))), MT.set(this, ((0, wT.h)(this, Wc), (0, wT.h)(this, nc, 1))), OT.set(this, ((0, wT.h)(this, pc), (0, wT.h)(this, ic, !1))), yT.set(this, ((0, wT.h)(this, qc), (0, wT.h)(this, sc, void 0))), fT.set(this, ((0, wT.h)(this, Tl), (0, wT.h)(this, kl, void 0))), xT.set(this, ((0, wT.h)(this, cl), (0, wT.h)(this, ll, void 0))), IT.set(this, ((0, wT.h)(this, Ml), (0, wT.h)(this, Kl, void 0))), AT.set(this, ((0, wT.h)(this, Ol), (0, wT.h)(this, yl, 1))), CT.set(this, ((0, wT.h)(this, fl), (0, wT.h)(this, xl, TT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), jT.set(this, ((0, wT.h)(this, Il), (0, wT.h)(this, Al, void 0))), vT.set(this, ((0, wT.h)(this, Cl), (0, wT.h)(this, jl, void 0))), tT.set(this, ((0, wT.h)(this, vl), (0, wT.h)(this, tl, void 0))), hT.set(this, ((0, wT.h)(this, hl), (0, wT.h)(this, Nl, void 0))), NT.set(this, ((0, wT.h)(this, Ql), (0, wT.h)(this, Sl, void 0))), QT.set(this, ((0, wT.h)(this, Dl), (0, wT.h)(this, al, void 0))), ST.set(this, ((0, wT.h)(this, Fl), (0, wT.h)(this, rl, void 0))), DT.set(this, ((0, wT.h)(this, Pl), (0, wT.h)(this, wl, 1))), aT.set(this, ((0, wT.h)(this, ml), (0, wT.h)(this, bl, YT.c.White()))), FT.set(this, ((0, wT.h)(this, zl), (0, wT.h)(this, Jl, !1))), rT.set(this, ((0, wT.h)(this, ol), (0, wT.h)(this, Hl, void 0))), PT.set(this, ((0, wT.h)(this, el), (0, wT.h)(this, Gl, void 0))), bT.set(this, ((0, wT.h)(this, Vl), (0, wT.h)(this, El, void 0))), zT.set(this, ((0, wT.h)(this, Zl), (0, wT.h)(this, ul, void 0))), JT.set(this, ((0, wT.h)(this, Xl), (0, wT.h)(this, dl, void 0))), oT.set(this, ((0, wT.h)(this, Ll), (0, wT.h)(this, Rl, new YT.c(0, 0, 0)))), HT.set(this, ((0, wT.h)(this, gl), (0, wT.h)(this, Ul, new YT.c(1, 1, 1)))), eT.set(this, ((0, wT.h)(this, Yl), (0, wT.h)(this, Bl, 1))), VT.set(this, ((0, wT.h)(this, Wl), (0, wT.h)(this, nl, void 0))), ET.set(this, ((0, wT.h)(this, pl), (0, wT.h)(this, il, new YT.c(1, 1, 1)))), ZT.set(this, ((0, wT.h)(this, ql), (0, wT.h)(this, sl, new YT.c(1, 1, 1)))), uT.set(this, ((0, wT.h)(this, TM), (0, wT.h)(this, kM, new YT.c(0, 0, 0)))), XT.set(this, ((0, wT.h)(this, cM), (0, wT.h)(this, lM, 1))), dT.set(this, ((0, wT.h)(this, MM), (0, wT.h)(this, KM, !1))), LT.set(this, ((0, wT.h)(this, OM), (0, wT.h)(this, yM, !1))), RT.set(this, ((0, wT.h)(this, fM), (0, wT.h)(this, xM, !1))), gT.set(this, ((0, wT.h)(this, IM), (0, wT.h)(this, AM, .4))), UT.set(this, ((0, wT.h)(this, CM), (0, wT.h)(this, jM, !0))), BT.set(this, ((0, wT.h)(this, vM), (0, wT.h)(this, tM, !1))), WT.set(this, ((0, wT.h)(this, hM), (0, wT.h)(this, NM, !0))), nT.set(this, ((0, wT.h)(this, QM), (0, wT.h)(this, SM, !1))), pT.set(this, ((0, wT.h)(this, DM), (0, wT.h)(this, aM, !1))), iT.set(this, ((0, wT.h)(this, FM), (0, wT.h)(this, rM, !1))), qT.set(this, ((0, wT.h)(this, PM), (0, wT.h)(this, wM, !1))), sT.set(this, ((0, wT.h)(this, mM), (0, wT.h)(this, bM, !1))), Tk.set(this, ((0, wT.h)(this, zM), (0, wT.h)(this, JM, !0))), kk.set(this, ((0, wT.h)(this, oM), (0, wT.h)(this, HM, !1))), ck.set(this, ((0, wT.h)(this, eM), (0, wT.h)(this, GM, !1))), lk.set(this, ((0, wT.h)(this, VM), (0, wT.h)(this, EM, !1))), Mk.set(this, ((0, wT.h)(this, ZM), (0, wT.h)(this, uM, .05))), Kk.set(this, ((0, wT.h)(this, XM), (0, wT.h)(this, dM, !1))), Ok.set(this, ((0, wT.h)(this, LM), (0, wT.h)(this, RM, !1))), yk.set(this, ((0, wT.h)(this, gM), (0, wT.h)(this, UM, 4))), fk.set(this, ((0, wT.h)(this, YM), (0, wT.h)(this, BM, !1))), xk.set(this, ((0, wT.h)(this, WM), (0, wT.h)(this, nM, !1))), Ik.set(this, ((0, wT.h)(this, pM), (0, wT.h)(this, iM, !1))), Ak.set(this, ((0, wT.h)(this, qM), (0, wT.h)(this, sM, !1))), Ck.set(this, ((0, wT.h)(this, TK), (0, wT.h)(this, kK, !1))), jk.set(this, ((0, wT.h)(this, cK), (0, wT.h)(this, lK, null))), vk.set(this, ((0, wT.h)(this, MK), (0, wT.h)(this, KK, !1))), tk.set(this, ((0, wT.h)(this, OK), (0, wT.h)(this, yK, !1))), hk.set(this, ((0, wT.h)(this, fK), (0, wT.h)(this, xK, !0))), Nk.set(this, ((0, wT.h)(this, IK), (0, wT.h)(this, AK, !0))), Qk.set(this, ((0, wT.h)(this, CK), (0, wT.h)(this, jK, !1))), Sk.set(this, ((0, wT.h)(this, vK), (0, wT.h)(this, tK, !1))), (0, wT.h)(this, hK), this._environmentBRDFTexture = GT(this.NJ())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(kT) {
          let cT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const MT = rk.d.Clone((() => new TT(kT, this.NJ())), this, {
            cloneTexturesOnlyOnce: cT
          });
          return MT.id = kT, MT.name = kT, this.stencil.copyTo(MT.stencil), this._clonePlugins(MT, lT), MT
        }
        serialize() {
          const TT = super.serialize();
          return TT.customType = "BABYLON.PBRMaterial", TT
        }
        static Parse(kT, cT, lT) {
          const MT = rk.d.Parse((() => new TT(kT.name, cT)), kT, cT, lT);
          return kT.stencil && MT.stencil.parse(kT.stencil, cT, lT), KT.e._ParsePlugins(kT, MT, cT, lT), kT.clearCoat && MT.clearCoat.parse(kT.clearCoat, cT, lT), kT.anisotropy && MT.anisotropy.parse(kT.anisotropy, cT, lT), kT.brdf && MT.brdf.parse(kT.brdf, cT, lT), kT.sheen && MT.sheen.parse(kT.sheen, cT, lT), kT.subSurface && MT.subSurface.parse(kT.subSurface, cT, lT), kT.iridescence && MT.iridescence.parse(kT.iridescence, cT, lT), MT
        }
      }, kT = new WeakMap, cT = new WeakMap, lT = new WeakMap, MT = new WeakMap, OT = new WeakMap, yT = new WeakMap, fT = new WeakMap, xT = new WeakMap, IT = new WeakMap, AT = new WeakMap, CT = new WeakMap, jT = new WeakMap, vT = new WeakMap, tT = new WeakMap, hT = new WeakMap, NT = new WeakMap, QT = new WeakMap, ST = new WeakMap, DT = new WeakMap, aT = new WeakMap, FT = new WeakMap, rT = new WeakMap, PT = new WeakMap, bT = new WeakMap, zT = new WeakMap, JT = new WeakMap, oT = new WeakMap, HT = new WeakMap, eT = new WeakMap, VT = new WeakMap, ET = new WeakMap, ZT = new WeakMap, uT = new WeakMap, XT = new WeakMap, dT = new WeakMap, LT = new WeakMap, RT = new WeakMap, gT = new WeakMap, UT = new WeakMap, BT = new WeakMap, WT = new WeakMap, nT = new WeakMap, pT = new WeakMap, iT = new WeakMap, qT = new WeakMap, sT = new WeakMap, Tk = new WeakMap, kk = new WeakMap, ck = new WeakMap, lk = new WeakMap, Mk = new WeakMap, Kk = new WeakMap, Ok = new WeakMap, yk = new WeakMap, fk = new WeakMap, xk = new WeakMap, Ik = new WeakMap, Ak = new WeakMap, Ck = new WeakMap, jk = new WeakMap, vk = new WeakMap, tk = new WeakMap, hk = new WeakMap, Nk = new WeakMap, Qk = new WeakMap, Sk = new WeakMap, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(dc[Symbol.metadata] ?? null) : void 0;
        Dk = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], ak = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Pk = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], wk = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], mk = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], bk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], zk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Jk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Hk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], ek = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Gk = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Vk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ek = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Zk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], uk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Xk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], dk = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Lk = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Rk = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], gk = [(0, mT.m)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Uk = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Yk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Bk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Wk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], nk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], pk = [(0, mT.A)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty", null)], ik = [(0, mT.m)("ambient"), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], qk = [(0, mT.m)("albedo"), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], sk = [(0, mT.J)("baseWeight"), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Tc = [(0, mT.J)("baseDiffuseRoughness"), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], kc = [(0, mT.m)("reflectivity"), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], cc = [(0, mT.m)("reflection"), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], lc = [(0, mT.m)("emissive"), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Mc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Kc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Oc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], yc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], fc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], xc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Ic = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Ac = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Cc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], jc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], vc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], tc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], hc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Nc = [(0, mT.J)()], Qc = [(0, mT.J)()], Sc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Dc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], ac = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Fc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], rc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Pc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsLightsDirty")], wc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], mc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsLightsDirty")], bc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], zc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Jc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], oc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Hc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], ec = [(0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Gc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Vc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Ec = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], Zc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsTexturesDirty")], uc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], Xc = [(0, mT.J)(), (0, mT.c)("_markAllSubMeshesAsMiscDirty")], (0, wT.e)(TT, null, Dk, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "directIntensity" in TT,
            get: TT => TT.directIntensity,
            set: (TT, kT) => {
              TT.directIntensity = kT
            }
          },
          metadata: kT
        }, Rc, gc), (0, wT.e)(TT, null, ak, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "emissiveIntensity" in TT,
            get: TT => TT.emissiveIntensity,
            set: (TT, kT) => {
              TT.emissiveIntensity = kT
            }
          },
          metadata: kT
        }, Uc, Yc), (0, wT.e)(TT, null, Pk, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "environmentIntensity" in TT,
            get: TT => TT.environmentIntensity,
            set: (TT, kT) => {
              TT.environmentIntensity = kT
            }
          },
          metadata: kT
        }, Bc, Wc), (0, wT.e)(TT, null, wk, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "specularIntensity" in TT,
            get: TT => TT.specularIntensity,
            set: (TT, kT) => {
              TT.specularIntensity = kT
            }
          },
          metadata: kT
        }, nc, pc), (0, wT.e)(TT, null, mk, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: TT => "disableBumpMap" in TT,
            get: TT => TT.disableBumpMap,
            set: (TT, kT) => {
              TT.disableBumpMap = kT
            }
          },
          metadata: kT
        }, ic, qc), (0, wT.e)(TT, null, bk, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "albedoTexture" in TT,
            get: TT => TT.albedoTexture,
            set: (TT, kT) => {
              TT.albedoTexture = kT
            }
          },
          metadata: kT
        }, sc, Tl), (0, wT.e)(TT, null, zk, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseWeightTexture" in TT,
            get: TT => TT.baseWeightTexture,
            set: (TT, kT) => {
              TT.baseWeightTexture = kT
            }
          },
          metadata: kT
        }, kl, cl), (0, wT.e)(TT, null, Jk, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseDiffuseRoughnessTexture" in TT,
            get: TT => TT.baseDiffuseRoughnessTexture,
            set: (TT, kT) => {
              TT.baseDiffuseRoughnessTexture = kT
            }
          },
          metadata: kT
        }, ll, Ml), (0, wT.e)(TT, null, Hk, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "ambientTexture" in TT,
            get: TT => TT.ambientTexture,
            set: (TT, kT) => {
              TT.ambientTexture = kT
            }
          },
          metadata: kT
        }, Kl, Ol), (0, wT.e)(TT, null, ek, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: TT => "ambientTextureStrength" in TT,
            get: TT => TT.ambientTextureStrength,
            set: (TT, kT) => {
              TT.ambientTextureStrength = kT
            }
          },
          metadata: kT
        }, yl, fl), (0, wT.e)(TT, null, Gk, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: TT => "ambientTextureImpactOnAnalyticalLights" in TT,
            get: TT => TT.ambientTextureImpactOnAnalyticalLights,
            set: (TT, kT) => {
              TT.ambientTextureImpactOnAnalyticalLights = kT
            }
          },
          metadata: kT
        }, xl, Il), (0, wT.e)(TT, null, Vk, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "opacityTexture" in TT,
            get: TT => TT.opacityTexture,
            set: (TT, kT) => {
              TT.opacityTexture = kT
            }
          },
          metadata: kT
        }, Al, Cl), (0, wT.e)(TT, null, Ek, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectionTexture" in TT,
            get: TT => TT.reflectionTexture,
            set: (TT, kT) => {
              TT.reflectionTexture = kT
            }
          },
          metadata: kT
        }, jl, vl), (0, wT.e)(TT, null, Zk, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "emissiveTexture" in TT,
            get: TT => TT.emissiveTexture,
            set: (TT, kT) => {
              TT.emissiveTexture = kT
            }
          },
          metadata: kT
        }, tl, hl), (0, wT.e)(TT, null, uk, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectivityTexture" in TT,
            get: TT => TT.reflectivityTexture,
            set: (TT, kT) => {
              TT.reflectivityTexture = kT
            }
          },
          metadata: kT
        }, Nl, Ql), (0, wT.e)(TT, null, Xk, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallicTexture" in TT,
            get: TT => TT.metallicTexture,
            set: (TT, kT) => {
              TT.metallicTexture = kT
            }
          },
          metadata: kT
        }, Sl, Dl), (0, wT.e)(TT, null, dk, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallic" in TT,
            get: TT => TT.metallic,
            set: (TT, kT) => {
              TT.metallic = kT
            }
          },
          metadata: kT
        }, al, Fl), (0, wT.e)(TT, null, Lk, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "roughness" in TT,
            get: TT => TT.roughness,
            set: (TT, kT) => {
              TT.roughness = kT
            }
          },
          metadata: kT
        }, rl, Pl), (0, wT.e)(TT, null, Rk, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallicF0Factor" in TT,
            get: TT => TT.metallicF0Factor,
            set: (TT, kT) => {
              TT.metallicF0Factor = kT
            }
          },
          metadata: kT
        }, wl, ml), (0, wT.e)(TT, null, gk, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallicReflectanceColor" in TT,
            get: TT => TT.metallicReflectanceColor,
            set: (TT, kT) => {
              TT.metallicReflectanceColor = kT
            }
          },
          metadata: kT
        }, bl, zl), (0, wT.e)(TT, null, Uk, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useOnlyMetallicFromMetallicReflectanceTexture" in TT,
            get: TT => TT.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (TT, kT) => {
              TT.useOnlyMetallicFromMetallicReflectanceTexture = kT
            }
          },
          metadata: kT
        }, Jl, ol), (0, wT.e)(TT, null, Yk, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallicReflectanceTexture" in TT,
            get: TT => TT.metallicReflectanceTexture,
            set: (TT, kT) => {
              TT.metallicReflectanceTexture = kT
            }
          },
          metadata: kT
        }, Hl, el), (0, wT.e)(TT, null, Bk, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectanceTexture" in TT,
            get: TT => TT.reflectanceTexture,
            set: (TT, kT) => {
              TT.reflectanceTexture = kT
            }
          },
          metadata: kT
        }, Gl, Vl), (0, wT.e)(TT, null, Wk, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "microSurfaceTexture" in TT,
            get: TT => TT.microSurfaceTexture,
            set: (TT, kT) => {
              TT.microSurfaceTexture = kT
            }
          },
          metadata: kT
        }, El, Zl), (0, wT.e)(TT, null, nk, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "bumpTexture" in TT,
            get: TT => TT.bumpTexture,
            set: (TT, kT) => {
              TT.bumpTexture = kT
            }
          },
          metadata: kT
        }, ul, Xl), (0, wT.e)(TT, null, pk, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "lightmapTexture" in TT,
            get: TT => TT.lightmapTexture,
            set: (TT, kT) => {
              TT.lightmapTexture = kT
            }
          },
          metadata: kT
        }, dl, Ll), (0, wT.e)(TT, null, ik, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "ambientColor" in TT,
            get: TT => TT.ambientColor,
            set: (TT, kT) => {
              TT.ambientColor = kT
            }
          },
          metadata: kT
        }, Rl, gl), (0, wT.e)(TT, null, qk, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "albedoColor" in TT,
            get: TT => TT.albedoColor,
            set: (TT, kT) => {
              TT.albedoColor = kT
            }
          },
          metadata: kT
        }, Ul, Yl), (0, wT.e)(TT, null, sk, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseWeight" in TT,
            get: TT => TT.baseWeight,
            set: (TT, kT) => {
              TT.baseWeight = kT
            }
          },
          metadata: kT
        }, Bl, Wl), (0, wT.e)(TT, null, Tc, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseDiffuseRoughness" in TT,
            get: TT => TT.baseDiffuseRoughness,
            set: (TT, kT) => {
              TT.baseDiffuseRoughness = kT
            }
          },
          metadata: kT
        }, nl, pl), (0, wT.e)(TT, null, kc, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectivityColor" in TT,
            get: TT => TT.reflectivityColor,
            set: (TT, kT) => {
              TT.reflectivityColor = kT
            }
          },
          metadata: kT
        }, il, ql), (0, wT.e)(TT, null, cc, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectionColor" in TT,
            get: TT => TT.reflectionColor,
            set: (TT, kT) => {
              TT.reflectionColor = kT
            }
          },
          metadata: kT
        }, sl, TM), (0, wT.e)(TT, null, lc, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "emissiveColor" in TT,
            get: TT => TT.emissiveColor,
            set: (TT, kT) => {
              TT.emissiveColor = kT
            }
          },
          metadata: kT
        }, kM, cM), (0, wT.e)(TT, null, Mc, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: TT => "microSurface" in TT,
            get: TT => TT.microSurface,
            set: (TT, kT) => {
              TT.microSurface = kT
            }
          },
          metadata: kT
        }, lM, MM), (0, wT.e)(TT, null, Kc, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: TT => "useLightmapAsShadowmap" in TT,
            get: TT => TT.useLightmapAsShadowmap,
            set: (TT, kT) => {
              TT.useLightmapAsShadowmap = kT
            }
          },
          metadata: kT
        }, KM, OM), (0, wT.e)(TT, null, Oc, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAlphaFromAlbedoTexture" in TT,
            get: TT => TT.useAlphaFromAlbedoTexture,
            set: (TT, kT) => {
              TT.useAlphaFromAlbedoTexture = kT
            }
          },
          metadata: kT
        }, yM, fM), (0, wT.e)(TT, null, yc, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: TT => "forceAlphaTest" in TT,
            get: TT => TT.forceAlphaTest,
            set: (TT, kT) => {
              TT.forceAlphaTest = kT
            }
          },
          metadata: kT
        }, xM, IM), (0, wT.e)(TT, null, fc, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: TT => "alphaCutOff" in TT,
            get: TT => TT.alphaCutOff,
            set: (TT, kT) => {
              TT.alphaCutOff = kT
            }
          },
          metadata: kT
        }, AM, CM), (0, wT.e)(TT, null, xc, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSpecularOverAlpha" in TT,
            get: TT => TT.useSpecularOverAlpha,
            set: (TT, kT) => {
              TT.useSpecularOverAlpha = kT
            }
          },
          metadata: kT
        }, jM, vM), (0, wT.e)(TT, null, Ic, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "useMicroSurfaceFromReflectivityMapAlpha" in TT,
            get: TT => TT.useMicroSurfaceFromReflectivityMapAlpha,
            set: (TT, kT) => {
              TT.useMicroSurfaceFromReflectivityMapAlpha = kT
            }
          },
          metadata: kT
        }, tM, hM), (0, wT.e)(TT, null, Ac, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRoughnessFromMetallicTextureAlpha" in TT,
            get: TT => TT.useRoughnessFromMetallicTextureAlpha,
            set: (TT, kT) => {
              TT.useRoughnessFromMetallicTextureAlpha = kT
            }
          },
          metadata: kT
        }, NM, QM), (0, wT.e)(TT, null, Cc, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRoughnessFromMetallicTextureGreen" in TT,
            get: TT => TT.useRoughnessFromMetallicTextureGreen,
            set: (TT, kT) => {
              TT.useRoughnessFromMetallicTextureGreen = kT
            }
          },
          metadata: kT
        }, SM, DM), (0, wT.e)(TT, null, jc, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: TT => "useMetallnessFromMetallicTextureBlue" in TT,
            get: TT => TT.useMetallnessFromMetallicTextureBlue,
            set: (TT, kT) => {
              TT.useMetallnessFromMetallicTextureBlue = kT
            }
          },
          metadata: kT
        }, aM, FM), (0, wT.e)(TT, null, vc, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAmbientOcclusionFromMetallicTextureRed" in TT,
            get: TT => TT.useAmbientOcclusionFromMetallicTextureRed,
            set: (TT, kT) => {
              TT.useAmbientOcclusionFromMetallicTextureRed = kT
            }
          },
          metadata: kT
        }, rM, PM), (0, wT.e)(TT, null, tc, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAmbientInGrayScale" in TT,
            get: TT => TT.useAmbientInGrayScale,
            set: (TT, kT) => {
              TT.useAmbientInGrayScale = kT
            }
          },
          metadata: kT
        }, wM, mM), (0, wT.e)(TT, null, hc, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAutoMicroSurfaceFromReflectivityMap" in TT,
            get: TT => TT.useAutoMicroSurfaceFromReflectivityMap,
            set: (TT, kT) => {
              TT.useAutoMicroSurfaceFromReflectivityMap = kT
            }
          },
          metadata: kT
        }, bM, zM), (0, wT.e)(TT, null, Nc, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: TT => "usePhysicalLightFalloff" in TT,
            get: TT => TT.usePhysicalLightFalloff
          },
          metadata: kT
        }, null, Lc), (0, wT.e)(TT, null, Qc, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: TT => "useGLTFLightFalloff" in TT,
            get: TT => TT.useGLTFLightFalloff
          },
          metadata: kT
        }, null, Lc), (0, wT.e)(TT, null, Sc, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRadianceOverAlpha" in TT,
            get: TT => TT.useRadianceOverAlpha,
            set: (TT, kT) => {
              TT.useRadianceOverAlpha = kT
            }
          },
          metadata: kT
        }, JM, oM), (0, wT.e)(TT, null, Dc, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: TT => "useObjectSpaceNormalMap" in TT,
            get: TT => TT.useObjectSpaceNormalMap,
            set: (TT, kT) => {
              TT.useObjectSpaceNormalMap = kT
            }
          },
          metadata: kT
        }, HM, eM), (0, wT.e)(TT, null, ac, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: TT => "useParallax" in TT,
            get: TT => TT.useParallax,
            set: (TT, kT) => {
              TT.useParallax = kT
            }
          },
          metadata: kT
        }, GM, VM), (0, wT.e)(TT, null, Fc, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: TT => "useParallaxOcclusion" in TT,
            get: TT => TT.useParallaxOcclusion,
            set: (TT, kT) => {
              TT.useParallaxOcclusion = kT
            }
          },
          metadata: kT
        }, EM, ZM), (0, wT.e)(TT, null, rc, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: TT => "parallaxScaleBias" in TT,
            get: TT => TT.parallaxScaleBias,
            set: (TT, kT) => {
              TT.parallaxScaleBias = kT
            }
          },
          metadata: kT
        }, uM, XM), (0, wT.e)(TT, null, Pc, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: TT => "disableLighting" in TT,
            get: TT => TT.disableLighting,
            set: (TT, kT) => {
              TT.disableLighting = kT
            }
          },
          metadata: kT
        }, dM, LM), (0, wT.e)(TT, null, wc, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: TT => "forceIrradianceInFragment" in TT,
            get: TT => TT.forceIrradianceInFragment,
            set: (TT, kT) => {
              TT.forceIrradianceInFragment = kT
            }
          },
          metadata: kT
        }, RM, gM), (0, wT.e)(TT, null, mc, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: TT => "maxSimultaneousLights" in TT,
            get: TT => TT.maxSimultaneousLights,
            set: (TT, kT) => {
              TT.maxSimultaneousLights = kT
            }
          },
          metadata: kT
        }, UM, YM), (0, wT.e)(TT, null, bc, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: TT => "invertNormalMapX" in TT,
            get: TT => TT.invertNormalMapX,
            set: (TT, kT) => {
              TT.invertNormalMapX = kT
            }
          },
          metadata: kT
        }, BM, WM), (0, wT.e)(TT, null, zc, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: TT => "invertNormalMapY" in TT,
            get: TT => TT.invertNormalMapY,
            set: (TT, kT) => {
              TT.invertNormalMapY = kT
            }
          },
          metadata: kT
        }, nM, pM), (0, wT.e)(TT, null, Jc, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: TT => "twoSidedLighting" in TT,
            get: TT => TT.twoSidedLighting,
            set: (TT, kT) => {
              TT.twoSidedLighting = kT
            }
          },
          metadata: kT
        }, iM, qM), (0, wT.e)(TT, null, oc, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAlphaFresnel" in TT,
            get: TT => TT.useAlphaFresnel,
            set: (TT, kT) => {
              TT.useAlphaFresnel = kT
            }
          },
          metadata: kT
        }, sM, TK), (0, wT.e)(TT, null, Hc, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: TT => "useLinearAlphaFresnel" in TT,
            get: TT => TT.useLinearAlphaFresnel,
            set: (TT, kT) => {
              TT.useLinearAlphaFresnel = kT
            }
          },
          metadata: kT
        }, kK, cK), (0, wT.e)(TT, null, ec, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "environmentBRDFTexture" in TT,
            get: TT => TT.environmentBRDFTexture,
            set: (TT, kT) => {
              TT.environmentBRDFTexture = kT
            }
          },
          metadata: kT
        }, lK, MK), (0, wT.e)(TT, null, Gc, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: TT => "forceNormalForward" in TT,
            get: TT => TT.forceNormalForward,
            set: (TT, kT) => {
              TT.forceNormalForward = kT
            }
          },
          metadata: kT
        }, KK, OK), (0, wT.e)(TT, null, Vc, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: TT => "enableSpecularAntiAliasing" in TT,
            get: TT => TT.enableSpecularAntiAliasing,
            set: (TT, kT) => {
              TT.enableSpecularAntiAliasing = kT
            }
          },
          metadata: kT
        }, yK, fK), (0, wT.e)(TT, null, Ec, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: TT => "useHorizonOcclusion" in TT,
            get: TT => TT.useHorizonOcclusion,
            set: (TT, kT) => {
              TT.useHorizonOcclusion = kT
            }
          },
          metadata: kT
        }, xK, IK), (0, wT.e)(TT, null, Zc, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRadianceOcclusion" in TT,
            get: TT => TT.useRadianceOcclusion,
            set: (TT, kT) => {
              TT.useRadianceOcclusion = kT
            }
          },
          metadata: kT
        }, AK, CK), (0, wT.e)(TT, null, uc, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: TT => "unlit" in TT,
            get: TT => TT.unlit,
            set: (TT, kT) => {
              TT.unlit = kT
            }
          },
          metadata: kT
        }, jK, vK), (0, wT.e)(TT, null, Xc, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: TT => "applyDecalMapAfterDetailMap" in TT,
            get: TT => TT.applyDecalMapAfterDetailMap,
            set: (TT, kT) => {
              TT.applyDecalMapAfterDetailMap = kT
            }
          },
          metadata: kT
        }, tK, hK), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT.PBRMATERIAL_OPAQUE = Fk.PBRMATERIAL_OPAQUE, TT.PBRMATERIAL_ALPHATEST = Fk.PBRMATERIAL_ALPHATEST, TT.PBRMATERIAL_ALPHABLEND = Fk.PBRMATERIAL_ALPHABLEND, TT.PBRMATERIAL_ALPHATESTANDBLEND = Fk.PBRMATERIAL_ALPHATESTANDBLEND, TT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = Fk.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, TT
    })();
    const ZM = "KHR_materials_diffuse_transmission";

    function uM(TT, kT) {
      const cT = kT.subSurface;
      let lT = null;
      return cT.translucencyIntensityTexture ? lT = cT.translucencyIntensityTexture : cT.thicknessTexture && cT.useMaskFromThicknessTexture && (lT = cT.thicknessTexture), lT && !cT.useGltfStyleTextures ? (bT.e.Warn(`${TT}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${kT.name}`, 1), null) : lT
    }
    class XM {
      constructor(TT) {
        this.name = ZM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        const lT = [];
        if (cT instanceof EM && this._isExtensionEnabled(cT)) {
          const kT = uM(TT, cT);
          return kT && lT.push(kT), cT.subSurface.translucencyColorTexture && lT.push(cT.subSurface.translucencyColorTexture), lT
        }
        return lT
      }
      _isExtensionEnabled(TT) {
        if (TT.unlit) return !1;
        const kT = TT.subSurface;
        return !!kT.isTranslucencyEnabled && (!TT.unlit && !kT.useAlbedoToTintTranslucency && kT.useGltfStyleTextures && 1 === kT.volumeIndexOfRefraction && 0 === kT.minimumThickness && 0 === kT.maximumThickness)
      }
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((lT => {
          if (cT instanceof EM && this._isExtensionEnabled(cT)) {
            this._wasUsed = !0;
            const lT = cT.subSurface,
              MT = uM(TT, cT),
              KT = 0 == lT.translucencyIntensity ? void 0 : lT.translucencyIntensity,
              OT = this._exporter._materialExporter.getTextureInfo(MT) ?? void 0,
              yT = !lT.translucencyColor || lT.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : lT.translucencyColor.acT(),
              fT = this._exporter._materialExporter.getTextureInfo(lT.translucencyColorTexture) ?? void 0,
              xT = {
                diffuseTransmissionFactor: KT,
                diffuseTransmissionTexture: OT,
                diffuseTransmissionColorFactor: yT,
                diffuseTransmissionColorTexture: fT
              };
            (OT || fT) && this._exporter._materialNeedsUVsSet.add(cT), kT.extensions = kT.extensions || {}, kT.extensions[ZM] = xT
          }
          lT(kT)
        }))
      }
    }
    let dM = !1;

    function LM() {
      dM || (dM = !0, Vl.RegisterExtension(ZM, (TT => new XM(TT))))
    }
    LM();
    const RM = "KHR_materials_dispersion";
    class gM {
      constructor() {
        this.name = RM, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(TT) {
        if (TT.unlit) return !1;
        const kT = TT.subSurface;
        return !(!kT.isRefractionEnabled && !kT.isDispersionEnabled)
      }
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((TT => {
          if (cT instanceof EM && this._isExtensionEnabled(cT)) {
            this._wasUsed = !0;
            const TT = {
              dispersion: cT.subSurface.dispersion
            };
            kT.extensions = kT.extensions || {}, kT.extensions[RM] = TT
          }
          TT(kT)
        }))
      }
    }
    let UM = !1;

    function YM() {
      UM || (UM = !0, Vl.RegisterExtension(RM, (() => new gM)))
    }
    YM();
    const BM = "KHR_materials_emissive_strength";
    class WM {
      constructor() {
        this.name = BM, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(TT, kT, cT) {
        return await new Promise((TT => {
          if (!(cT instanceof EM)) return TT(kT);
          const lT = cT.emissiveColor.scale(cT.emissiveIntensity),
            MT = Math.max(...lT.acT());
          if (MT > 1) {
            kT.emissiveFactor = lT.scale(1 / MT).acT(), this._wasUsed = !0;
            const TT = {
              emissiveStrength: MT
            };
            kT.extensions || (kT.extensions = {}), kT.extensions[BM] = TT
          } else kT.emissiveFactor = lT.acT();
          return TT(kT)
        }))
      }
    }
    let nM = !1;

    function pM() {
      nM || (nM = !0, Vl.RegisterExtension(BM, (() => new WM)))
    }
    pM();
    const iM = "KHR_materials_ior";
    class qM {
      constructor() {
        this.name = iM, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(TT) {
        return !TT.unlit && (TT instanceof sk ? 1.5 != TT.specularIor : TT instanceof EM && (void 0 != TT.indexOfRefraction && 1.5 != TT.indexOfRefraction))
      }
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((TT => {
          if (cT instanceof EM && this._isExtensionEnabled(cT)) {
            this._wasUsed = !0;
            const TT = {
              ior: cT.indexOfRefraction
            };
            kT.extensions = kT.extensions || {}, kT.extensions[iM] = TT
          } else if (cT instanceof sk && this._isExtensionEnabled(cT)) {
            this._wasUsed = !0;
            const TT = {
              ior: cT.specularIor
            };
            kT.extensions = kT.extensions || {}, kT.extensions[iM] = TT
          }
          TT(kT)
        }))
      }
    }
    let sM = !1;

    function TK() {
      sM || (sM = !0, Vl.RegisterExtension(iM, (() => new qM)))
    }
    TK();
    const kK = "KHR_materials_iridescence";
    class cK {
      constructor(TT) {
        this.name = kK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        const lT = [];
        if (cT instanceof Fk) {
          if (cT.iridescence.isEnabled) return cT.iridescence.texture && lT.push(cT.iridescence.texture), cT.iridescence.thicknessTexture && cT.iridescence.thicknessTexture !== cT.iridescence.texture && lT.push(cT.iridescence.thicknessTexture), lT
        } else if (cT instanceof sk && cT.thinFilmWeight > 0) return cT.thinFilmWeightTexture && lT.push(cT.thinFilmWeightTexture), cT.thinFilmThicknessTexture && cT.thinFilmThicknessTexture !== cT.thinFilmWeightTexture && lT.push(cT.thinFilmThicknessTexture), lT;
        return []
      }
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((TT => {
          if (cT instanceof Fk) {
            if (!cT.iridescence.isEnabled) return void TT(kT);
            this._wasUsed = !0, kT.extensions = kT.extensions || {};
            const lT = this._exporter._materialExporter.getTextureInfo(cT.iridescence.texture),
              MT = this._exporter._materialExporter.getTextureInfo(cT.iridescence.thicknessTexture),
              KT = {
                iridescenceFactor: cT.iridescence.intensity,
                iridescenceIor: cT.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: cT.iridescence.minimumThickness,
                iridescenceThicknessMaximum: cT.iridescence.maximumThickness,
                iridescenceTexture: lT ?? void 0,
                iridescenceThicknessTexture: MT ?? void 0
              };
            null === KT.iridescenceTexture && null === KT.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(cT), kT.extensions[kK] = KT
          } else if (cT instanceof sk) {
            if (cT.thinFilmWeight <= 0) return void TT(kT);
            this._wasUsed = !0, kT.extensions = kT.extensions || {};
            const lT = this._exporter._materialExporter.getTextureInfo(cT.thinFilmWeightTexture),
              MT = this._exporter._materialExporter.getTextureInfo(cT.thinFilmThicknessTexture),
              KT = {
                iridescenceFactor: cT.thinFilmWeight,
                iridescenceIor: cT.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * cT.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * cT.thinFilmThickness,
                iridescenceTexture: lT ?? void 0,
                iridescenceThicknessTexture: MT ?? void 0
              };
            null === KT.iridescenceTexture && null === KT.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(cT), kT.extensions[kK] = KT
          }
          TT(kT)
        }))
      }
    }
    let lK = !1;

    function MK() {
      lK || (lK = !0, Vl.RegisterExtension(kK, (TT => new cK(TT))))
    }
    MK();
    const KK = "KHR_materials_sheen";
    class OK {
      constructor(TT) {
        this.name = KK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        return cT instanceof EM && cT.sheen.isEnabled && cT.sheen.texture ? [cT.sheen.texture] : []
      }
      async postExportMaterialAsync(TT, kT, cT) {
        return await new Promise((TT => {
          if (cT instanceof EM) {
            if (!cT.sheen.isEnabled) return void TT(kT);
            this._wasUsed = !0, null == kT.extensions && (kT.extensions = {});
            const lT = {
              sheenColorFactor: cT.sheen.color.acT(),
              sheenRoughnessFactor: cT.sheen.roughness ?? 0
            };
            null === lT.sheenColorTexture && null === lT.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(cT), cT.sheen.texture && (lT.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(cT.sheen.texture) ?? void 0), cT.sheen.textureRoughness && !cT.sheen.useRoughnessFromMainTexture ? lT.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(cT.sheen.textureRoughness) ?? void 0 : cT.sheen.texture && cT.sheen.useRoughnessFromMainTexture && (lT.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(cT.sheen.texture) ?? void 0), kT.extensions[KK] = lT
          }
          TT(kT)
        }))
      }
    }
    let yK = !1;

    function fK() {
      yK || (yK = !0, Vl.RegisterExtension(KK, (TT => new OK(TT))))
    }
    fK();
    const xK = "KHR_materials_fuzz";

    function IK(TT, kT) {
      const cT = new JT.f(kT.name, kT.NJ());
      return cT._texture = TT, cT.coordinatesIndex = kT.coordinatesIndex, kT instanceof JT.f && (cT.uOffset = kT.uOffset, cT.vOffset = kT.vOffset, cT.uScale = kT.uScale, cT.vScale = kT.vScale, cT.wAng = kT.wAng), cT.wrapU = kT.wrapU, cT.wrapV = kT.wrapV, cT
    }
    class AK {
      constructor(TT) {
        this.name = xK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = TT
      }
      dispose() {
        for (const TT of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[TT].dispose()
        }
        this._mergedTexturesMap = {};
        for (const TT of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[TT].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        if (cT instanceof sk) {
          const TT = [];
          if (cT.fuzzWeight > 0) {
            cT.fuzzWeightTexture && TT.push(cT.fuzzWeightTexture);
            let kT = !1;
            if (cT.fuzzRoughnessTexture && (cT._useFuzzRoughnessFromTextureAlpha ? TT.push(cT.fuzzRoughnessTexture) : kT = !0), cT.fuzzColorTexture && !kT && TT.push(cT.fuzzColorTexture), kT) {
              const kT = function(TT) {
                const kT = TT.fuzzColorTexture,
                  cT = kT && kT.getInternalTexture() ? kT.getInternalTexture().uniqueId : "NoFuzzColor",
                  lT = TT.fuzzRoughnessTexture;
                return `FuzzColor_${cT}_FuzzRoughness_${lT&&lT.getInternalTexture()?lT.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(cT);
              if (!this._cachedInternalTexturesMap[kT]) {
                const TT = await async function(TT) {
                  const kT = TT.NJ(),
                    cT = TT.fuzzColorTexture,
                    lT = TT.fuzzRoughnessTexture;
                  return cT || lT ? (await yc("FuzzTexture", Ic(cT ? fc(cT, 0) : xc(1), cT ? fc(cT, 1) : xc(1), cT ? fc(cT, 2) : xc(1), lT ? fc(lT, TT._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : xc(1)), kT)).getInternalTexture() : null
                }(cT);
                TT && (this._cachedInternalTexturesMap[kT] = TT)
              }
              this._cachedInternalTexturesMap[kT] && (cT.fuzzColorTexture && (this._mergedTexturesMap[cT.fuzzColorTexture.uniqueId] = IK(this._cachedInternalTexturesMap[kT], cT.fuzzColorTexture), TT.push(this._mergedTexturesMap[cT.fuzzColorTexture.uniqueId])), cT.fuzzRoughnessTexture && (this._mergedTexturesMap[cT.fuzzRoughnessTexture.uniqueId] = IK(this._cachedInternalTexturesMap[kT], cT.fuzzRoughnessTexture), TT.push(this._mergedTexturesMap[cT.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return TT
        }
        return []
      }
      async postExportMaterialAsync(TT, kT, cT) {
        return await new Promise((TT => {
          if (cT instanceof sk) {
            if (0 == cT.fuzzWeight) return void TT(kT);
            this._wasUsed = !0, null == kT.extensions && (kT.extensions = {});
            const lT = {
              fuzzFactor: cT.fuzzWeight,
              fuzzColorFactor: cT.fuzzColor.acT(),
              fuzzRoughnessFactor: cT.fuzzRoughness
            };
            let MT, KT;
            cT.fuzzWeightTexture && (lT.fuzzTexture = this._exporter._materialExporter.getTextureInfo(cT.fuzzWeightTexture) ?? void 0), cT.fuzzColorTexture && (MT = this._mergedTexturesMap[cT.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[cT.fuzzColorTexture.uniqueId] : cT.fuzzColorTexture, lT.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(MT) ?? void 0), cT.fuzzRoughnessTexture && (KT = this._mergedTexturesMap[cT.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[cT.fuzzRoughnessTexture.uniqueId] : cT.fuzzRoughnessTexture, lT.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(KT) ?? void 0), null === lT.fuzzColorTexture && null === lT.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(cT), kT.extensions[xK] = lT
          }
          TT(kT)
        }))
      }
    }
    let CK = !1;

    function jK() {
      CK || (CK = !0, Vl.RegisterExtension(xK, (TT => new AK(TT))))
    }
    jK();
    const vK = "KHR_materials_specular";
    class tK {
      constructor(TT) {
        this.name = vK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        const lT = [];
        return cT instanceof EM && this._isExtensionEnabled(cT) ? (cT.metallicReflectanceTexture && lT.push(cT.metallicReflectanceTexture), cT.reflectanceTexture && lT.push(cT.reflectanceTexture), lT) : lT
      }
      _isExtensionEnabled(TT) {
        return !TT.unlit && (void 0 != TT.metallicF0Factor && 1 != TT.metallicF0Factor || void 0 != TT.metallicReflectanceColor && !TT.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(TT))
      }
      _hasTexturesExtension(TT) {
        return null != TT.metallicReflectanceTexture || null != TT.reflectanceTexture
      }
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((TT => {
          var lT;
          if (cT instanceof EM && this._isExtensionEnabled(cT)) {
            this._wasUsed = !0, kT.extensions = kT.extensions || {};
            const TT = this._exporter._materialExporter.getTextureInfo(cT.metallicReflectanceTexture) ?? void 0,
              lT = this._exporter._materialExporter.getTextureInfo(cT.reflectanceTexture) ?? void 0,
              MT = {
                specularFactor: 1 == cT.metallicF0Factor ? void 0 : cT.metallicF0Factor,
                specularTexture: TT,
                specularColorFactor: cT.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : cT.metallicReflectanceColor.acT(),
                specularColorTexture: lT
              };
            this._hasTexturesExtension(cT) && this._exporter._materialNeedsUVsSet.add(cT), kT.extensions[vK] = MT
          } else if (cT instanceof sk) {
            kT.extensions = kT.extensions || {};
            const MT = this._exporter._materialExporter.getTextureInfo(cT.specularWeightTexture) ?? void 0,
              KT = this._exporter._materialExporter.getTextureInfo(cT.specularColorTexture) ?? void 0,
              OT = 1 == cT.specularWeight ? void 0 : cT.specularWeight,
              yT = cT.specularColor.equalsFloats(1, 1, 1) ? void 0 : cT.specularColor.acT();
            if (!KT && !MT && void 0 === OT && void 0 === yT) return TT(kT);
            this._wasUsed = !0;
            const fT = {
                specularEdgeColorEnabled: !0
              },
              xT = {
                specularFactor: OT,
                specularTexture: MT,
                specularColorFactor: yT,
                specularColorTexture: KT,
                extensions: {}
              };
            xT.extensions.EXT_materials_specular_edge_color = fT, (lT = this._exporter._glTF).extensionsUsed || (lT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (MT || KT) && this._exporter._materialNeedsUVsSet.add(cT), kT.extensions[vK] = xT
          }
          TT(kT)
        }))
      }
    }
    let hK = !1;

    function NK() {
      hK || (hK = !0, Vl.RegisterExtension(vK, (TT => new tK(TT))))
    }
    NK();
    const QK = "KHR_materials_transmission";
    class SK {
      constructor(TT) {
        this.name = QK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        const lT = [];
        if (cT instanceof EM) {
          if (this._isExtensionEnabled(cT)) return cT.subSurface.refractionIntensityTexture && cT.subSurface.useGltfStyleTextures && lT.push(cT.subSurface.refractionIntensityTexture), lT
        } else cT instanceof sk && (cT.transmissionWeight > 0 && cT.transmissionWeightTexture && (lT.push(cT.transmissionWeightTexture), cT.transmissionColorTexture && lT.push(cT.transmissionColorTexture)), cT.subsurfaceWeight > 0 && cT.subsurfaceWeightTexture && lT.push(cT.subsurfaceWeightTexture));
        return lT
      }
      _isExtensionEnabled(TT) {
        if (TT instanceof sk && !TT.unlit) return TT.transmissionWeight > 0 || TT.subsurfaceWeight > 0;
        if (TT instanceof EM && !TT.unlit) {
          const kT = TT.subSurface;
          return kT.isRefractionEnabled && void 0 != kT.refractionIntensity && 0 != kT.refractionIntensity || null != kT.refractionIntensityTexture && kT.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(TT, kT, cT) {
        if (!this._isExtensionEnabled(cT)) return kT;
        if (cT instanceof EM) {
          this._wasUsed = !0;
          const lT = cT.subSurface,
            MT = {
              transmissionFactor: 0 === lT.refractionIntensity ? void 0 : lT.refractionIntensity
            };
          if (lT.refractionIntensityTexture)
            if (lT.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(cT);
              const TT = this._exporter._materialExporter.getTextureInfo(lT.refractionIntensityTexture);
              TT && (MT.transmissionTexture = TT)
            } else bT.e.Warn(`${TT}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          kT.extensions || (kT.extensions = {}), kT.extensions[QK] = MT
        } else if (cT instanceof sk) {
          this._wasUsed = !0;
          const TT = {
            transmissionFactor: (1 - cT.transmissionWeight) * cT.subsurfaceWeight + cT.transmissionWeight
          };
          if (cT.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(cT);
            const kT = this._exporter._materialExporter.getTextureInfo(cT.transmissionWeightTexture);
            kT && (TT.transmissionTexture = kT)
          } else if (cT.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(cT);
            const kT = this._exporter._materialExporter.getTextureInfo(cT.subsurfaceWeightTexture);
            kT && (TT.transmissionTexture = kT)
          }
          if (0 == cT.transmissionDepth && (!cT.transmissionColor.equals(YT.c.White()) || cT.transmissionColorTexture) && kT.pbrMetallicRoughness && (kT.pbrMetallicRoughness.baseColorFactor || (kT.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), kT.pbrMetallicRoughness.baseColorFactor[0] *= cT.transmissionColor.r, kT.pbrMetallicRoughness.baseColorFactor[1] *= cT.transmissionColor.g, kT.pbrMetallicRoughness.baseColorFactor[2] *= cT.transmissionColor.b, cT.transmissionColorTexture && !kT.pbrMetallicRoughness.baseColorTexture)) {
            const TT = this._exporter._materialExporter.getTextureInfo(cT.transmissionColorTexture);
            TT && (kT.pbrMetallicRoughness.baseColorTexture = TT, this._exporter._materialNeedsUVsSet.add(cT))
          }
          kT.extensions || (kT.extensions = {}), kT.extensions[QK] = TT
        }
        return kT
      }
    }
    let DK = !1;

    function aK() {
      DK || (DK = !0, Vl.RegisterExtension(QK, (TT => new SK(TT))))
    }
    aK();
    var FK = cT(39896);
    const rK = "KHR_materials_unlit";
    class PK {
      constructor() {
        this.name = rK, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((TT => {
          let lT = !1;
          cT instanceof EM ? lT = cT.unlit : cT instanceof FK.f && (lT = cT.disableLighting), lT && (this._wasUsed = !0, null == kT.extensions && (kT.extensions = {}), kT.extensions[rK] = {}), TT(kT)
        }))
      }
    }
    let wK = !1;

    function mK() {
      wK || (wK = !0, Vl.RegisterExtension(rK, (() => new PK)))
    }
    mK();
    const bK = "KHR_materials_volume";
    class zK {
      constructor(TT) {
        this.name = bK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        const lT = [];
        if (cT instanceof EM) {
          if (this._isExtensionEnabled(cT)) return cT.subSurface.thicknessTexture && lT.push(cT.subSurface.thicknessTexture), lT
        } else cT instanceof sk && (cT.transmissionWeight > 0 || cT.subsurfaceWeight > 0) && cT.geometryThicknessTexture && lT.push(cT.geometryThicknessTexture);
        return lT
      }
      _isExtensionEnabled(TT) {
        if (TT.unlit) return !1;
        const kT = TT.subSurface;
        return !(!kT.isRefractionEnabled && !kT.isTranslucencyEnabled) && (void 0 != kT.maximumThickness && 0 != kT.maximumThickness || void 0 != kT.tintColorAtDistance && kT.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != kT.tintColor && kT.tintColor != YT.c.White() || this._hasTexturesExtension(TT))
      }
      _hasTexturesExtension(TT) {
        return null != TT.subSurface.thicknessTexture
      }
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((TT => {
          if (cT instanceof EM && this._isExtensionEnabled(cT)) {
            this._wasUsed = !0;
            const TT = cT.subSurface,
              lT = {
                thicknessFactor: 0 == TT.maximumThickness ? void 0 : TT.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(TT.thicknessTexture) ?? void 0,
                attenuationDistance: TT.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : TT.tintColorAtDistance,
                attenuationColor: TT.tintColor.equalsFloats(1, 1, 1) ? void 0 : TT.tintColor.acT()
              };
            this._hasTexturesExtension(cT) && this._exporter._materialNeedsUVsSet.add(cT), kT.extensions = kT.extensions || {}, kT.extensions[bK] = lT
          } else if (cT instanceof sk) {
            const TT = cT.transmissionWeight > 0 && !cT.geometryThinWalled,
              lT = cT.subsurfaceWeight > 0 && !cT.geometryThinWalled;
            if (TT || lT) {
              this._wasUsed = !0;
              const MT = cT.geometryThickness,
                KT = this._exporter._materialExporter.getTextureInfo(cT.geometryThicknessTexture) ?? void 0;
              let OT;
              KT && this._exporter._materialNeedsUVsSet.add(cT);
              const yT = YT.c.White().acT();
              if (TT && cT.transmissionDepth > 0) {
                const TT = 1 / cT.transmissionDepth;
                let kT = new uT.m(-Math.log(cT.transmissionColor.r) * TT, -Math.log(cT.transmissionColor.g) * TT, -Math.log(cT.transmissionColor.b) * TT);
                const lT = new uT.m(cT.transmissionScatter.r * TT, cT.transmissionScatter.g * TT, cT.transmissionScatter.b * TT),
                  MT = kT.subtract(lT),
                  KT = Math.min(MT.x, MT.y, MT.z);
                KT < 0 && (MT.x = MT.x - KT, MT.y = MT.y - KT, MT.z = MT.z - KT), kT = MT.add(lT);
                OT = 1 / Math.max(kT.x, kT.y, kT.z), yT[0] = Math.exp(-kT.x * OT), yT[1] = Math.exp(-kT.y * OT), yT[2] = Math.exp(-kT.z * OT)
              } else OT = Number.MAX_VALUE, yT[0] = 1, yT[1] = 1, yT[2] = 1;
              let fT = 1;
              const xT = YT.c.White().acT();
              if (lT) {
                const TT = cT.subsurfaceRadius,
                  kT = cT.subsurfaceRadiusScale,
                  lT = new uT.m(kT.r, kT.g, kT.b).multiplyByFloats(TT, TT, TT),
                  MT = new uT.m(1 / Math.max(lT.x, 1e-6), 1 / Math.max(lT.y, 1e-6), 1 / Math.max(lT.z, 1e-6));
                fT = 1 / Math.max(MT.x, MT.y, MT.z), xT[0] = Math.exp(-MT.x * fT), xT[1] = Math.exp(-MT.y * fT), xT[2] = Math.exp(-MT.z * fT)
              }
              const IT = (1 - cT.transmissionWeight) * cT.subsurfaceWeight,
                AT = IT + cT.transmissionWeight,
                CT = 1 / Math.max(AT, 1e-6),
                jT = cT.transmissionWeight * CT,
                vT = IT * CT,
                tT = yT.map(((TT, kT) => TT * jT + xT[kT] * vT)),
                hT = {
                  thicknessFactor: MT,
                  thicknessTexture: KT,
                  attenuationDistance: OT * jT + fT * vT,
                  attenuationColor: tT
                };
              kT.extensions = kT.extensions || {}, kT.extensions[bK] = hT
            }
          }
          TT(kT)
        }))
      }
    }
    let JK = !1;

    function oK() {
      JK || (JK = !0, Vl.RegisterExtension(bK, (TT => new zK(TT))))
    }
    oK();
    const HK = "KHR_materials_volume_scatter";
    class eK {
      constructor(TT) {
        this.name = HK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        const lT = [];
        return cT instanceof sk && (cT.transmissionWeight > 0 && cT.transmissionScatterTexture && lT.push(cT.transmissionScatterTexture), cT.subsurfaceWeight > 0 && cT.subsurfaceColorTexture && lT.push(cT.subsurfaceColorTexture)), lT
      }
      _isExtensionEnabled(TT) {
        if (TT.unlit) return !1;
        const kT = TT.transmissionWeight > 0 && !TT.geometryThinWalled && TT.transmissionDepth > 0 && !TT.transmissionScatter.equals(YT.c.Black()),
          cT = TT.subsurfaceWeight > 0 && !TT.geometryThinWalled;
        return !(!kT && !cT)
      }
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((TT => {
          if (cT instanceof sk && this._isExtensionEnabled(cT)) {
            this._wasUsed = !0;
            let TT = uT.m.Zero(),
              lT = 0;
            if (cT.transmissionWeight > 0) {
              TT = function(TT) {
                const kT = new uT.m(Math.sqrt(1 - TT.x), Math.sqrt(1 - TT.y), Math.sqrt(1 - TT.z)),
                  cT = new uT.m(1, 1, 1),
                  lT = cT.subtract(kT),
                  MT = cT.subtract(new uT.m(.139, .139, .139).multiplyInPlace(kT)),
                  KT = cT.add(new uT.m(1.17, 1.17, 1.17).multiplyInPlace(kT));
                return lT.multiplyInPlace(MT).divideInPlace(KT)
              }(new uT.m(cT.transmissionScatter.r, cT.transmissionScatter.g, cT.transmissionScatter.b)), lT = cT.transmissionScatterAnisotropy
            }
            const MT = uT.m.Zero();
            let KT = 0;
            cT.subsurfaceWeight > 0 && (MT.set(cT.subsurfaceColor.r, cT.subsurfaceColor.g, cT.subsurfaceColor.b), KT = cT.subsurfaceScatterAnisotropy);
            const OT = (1 - cT.transmissionWeight) * cT.subsurfaceWeight,
              yT = OT + cT.transmissionWeight,
              fT = 1 / Math.max(yT, 1e-6),
              xT = cT.transmissionWeight * fT,
              IT = OT * fT,
              AT = {
                multiscatterColorFactor: TT.multiplyByFloats(xT, xT, xT).addInPlace(MT.multiplyByFloats(IT, IT, IT)).acT(),
                scatterAnisotropy: lT * xT + KT * IT
              };
            if (cT.subsurfaceWeight > 0 && cT.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(cT);
              const TT = this._exporter._materialExporter.getTextureInfo(cT.subsurfaceColorTexture);
              TT && (AT.multiscatterColorTexture = TT)
            } else if (cT.transmissionWeight > 0 && cT.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(cT);
              const TT = this._exporter._materialExporter.getTextureInfo(cT.transmissionScatterTexture);
              TT && (AT.multiscatterColorTexture = TT)
            }
            kT.extensions = kT.extensions || {}, kT.extensions[HK] = AT
          }
          TT(kT)
        }))
      }
    }
    let GK = !1;

    function VK() {
      GK || (GK = !0, Vl.RegisterExtension(HK, (TT => new eK(TT)), 101))
    }
    VK();
    const EK = "KHR_materials_diffuse_roughness";
    class ZK {
      constructor(TT) {
        this.name = EK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, kT, cT) {
        const lT = [];
        if (cT instanceof Fk) {
          if (cT._baseDiffuseRoughness) return cT._baseDiffuseRoughnessTexture && lT.push(cT._baseDiffuseRoughnessTexture), lT
        } else if (cT instanceof sk && cT.baseDiffuseRoughness) return cT.baseDiffuseRoughnessTexture && lT.push(cT.baseDiffuseRoughnessTexture), lT;
        return []
      }
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((TT => {
          let lT = null,
            MT = null;
          if (cT instanceof Fk ? (lT = cT._baseDiffuseRoughness, MT = cT._baseDiffuseRoughnessTexture) : cT instanceof sk && (lT = cT.baseDiffuseRoughness, MT = cT.baseDiffuseRoughnessTexture), !lT) return void TT(kT);
          this._wasUsed = !0, kT.extensions = kT.extensions || {};
          const KT = {
            diffuseRoughnessFactor: lT,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(MT) ?? void 0
          };
          null !== KT.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(cT), kT.extensions[EK] = KT, TT(kT)
        }))
      }
    }
    let uK = !1;

    function XK() {
      uK || (uK = !0, Vl.RegisterExtension(EK, (TT => new ZK(TT))))
    }
    XK();
    const dK = "KHR_materials_openpbr";
    class LK {
      constructor() {
        this.name = dK, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(TT, kT, cT) {
        return new Promise((TT => {
          cT instanceof sk && (this._wasUsed = !0, kT.extensions = kT.extensions || {}, kT.extensions[dK] = {}), TT(kT)
        }))
      }
    }
    let RK = !1;

    function gK() {
      RK || (RK = !0, Vl.RegisterExtension(dK, (() => new LK)))
    }
    gK();
    const UK = "KHR_texture_transform";
    class YK {
      constructor() {
        this.name = UK, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(TT, kT, cT) {
        if (cT.NJ() || Pk.h.Warn(`${TT}: "scene" is not defined for Babylon texture ${cT.name}!`), (0 !== cT.uAng || 0 !== cT.vAng) && (Pk.h.Warn(`${TT}: Texture ${cT.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== cT.uRotationCenter || 0 !== cT.vRotationCenter)) return;
        const lT = {};
        let MT = !1;
        if (0 === cT.uOffset && 0 === cT.vOffset || (lT.offset = [cT.uOffset, cT.vOffset], MT = !0), 1 === cT.uScale && 1 === cT.vScale || (lT.scale = [cT.uScale, cT.vScale], MT = !0), 0 !== cT.wAng) {
          if (0 !== cT.uRotationCenter || 0 !== cT.vRotationCenter) {
            if (cT.homogeneousRotationInUVTransform && cT.uScale !== cT.vScale) return void Pk.h.Warn(`${TT}: Texture ${cT.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${UK}.`);
            Pk.h.Warn(`${TT}: Texture ${cT.name} with non-origin rotation center will be exported using an adjusted offset with ${UK}.`), lT.offset = function(TT) {
              const {
                uOffset: kT,
                vOffset: cT,
                uRotationCenter: lT,
                vRotationCenter: MT,
                uScale: KT,
                vScale: OT,
                wAng: yT
              } = TT, fT = Math.cos(yT), xT = Math.sin(yT), IT = lT * KT, AT = MT * OT;
              return [kT + (IT * (1 - fT) + AT * xT), cT + (AT * (1 - fT) - IT * xT)]
            }(cT)
          }
          lT.rotation = -cT.wAng, MT = !0
        }
        0 !== cT.coordinatesIndex && (lT.texCoord = cT.coordinatesIndex, MT = !0), MT && (this._wasUsed = !0, kT.extensions || (kT.extensions = {}), kT.extensions[UK] = lT)
      }
    }
    let BK = !1;

    function WK() {
      BK || (BK = !0, Vl.RegisterExtension(UK, (() => new YK)))
    }
    WK();
    var nK = cT(39666);
    const pK = "KHR_texture_basisu";
    class iK {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(TT) {
        this.name = pK, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      postExportTexture(TT, kT) {
        const cT = this._exporter._textures[kT.index],
          lT = cT.source;
        if (void 0 === lT) return;
        const MT = this._exporter._images[lT];
        "image/ktx2" === (MT.mimeType || (0, nK.f)(MT.uri)) && (cT.source = void 0, cT.extensions || (cT.extensions = {}), cT.extensions[pK] = {
          source: lT
        }, this._wasUsed = !0)
      }
    }
    let qK = !1;

    function sK() {
      qK || (qK = !0, Vl.RegisterExtension(pK, (TT => new iK(TT))))
    }
    sK();
    const TO = "EXT_texture_webp";
    class kO {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(TT) {
        this.name = TO, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      postExportTexture(TT, kT) {
        const cT = this._exporter._textures[kT.index],
          lT = cT.source;
        if (void 0 === lT) return;
        const MT = this._exporter._images[lT];
        "image/webp" === (MT.mimeType || (0, nK.f)(MT.uri)) && (cT.source = void 0, cT.extensions || (cT.extensions = {}), cT.extensions[TO] = {
          source: lT
        }, this._wasUsed = !0)
      }
    }
    let cO = !1;

    function lO() {
      cO || (cO = !0, Vl.RegisterExtension(TO, (TT => new kO(TT))))
    }
    lO();
    const MO = "EXT_texture_avif";
    class KO {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(TT) {
        this.name = MO, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      postExportTexture(TT, kT) {
        const cT = this._exporter._textures[kT.index],
          lT = cT.source;
        if (void 0 === lT) return;
        const MT = this._exporter._images[lT];
        "image/avif" === (MT.mimeType || (0, nK.f)(MT.uri)) && (cT.source = void 0, cT.extensions || (cT.extensions = {}), cT.extensions[MO] = {
          source: lT
        }, this._wasUsed = !0)
      }
    }
    let OO = !1;

    function yO() {
      OO || (OO = !0, Vl.RegisterExtension(MO, (TT => new KO(TT))))
    }
    yO();
    class fO {
      static CreateSTL(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          MT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          KT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          OT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          yT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          fT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const xT = function(TT, kT, cT) {
            const MT = [3 * TT[cT], 3 * TT[cT + 1], 3 * TT[cT + 2]],
              KT = [new lT.Fv(kT[MT[0]], kT[MT[0] + 2], kT[MT[0] + 1]), new lT.Fv(kT[MT[1]], kT[MT[1] + 2], kT[MT[1] + 1]), new lT.Fv(kT[MT[2]], kT[MT[2] + 2], kT[MT[2] + 1])],
              OT = KT[0].subtract(KT[1]),
              yT = KT[2].subtract(KT[1]);
            return {
              v: KT,
              n: lT.Fv.Cross(yT, OT).normalize()
            }
          },
          AT = function(TT, kT, cT, lT) {
            return kT = CT(TT, kT, cT.x, lT), kT = CT(TT, kT, cT.y, lT), CT(TT, kT, cT.z, lT)
          },
          CT = function(TT, kT, cT, lT) {
            return TT.setFloat32(kT, cT, lT), kT + 4
          },
          vT = function(TT) {
            if (yT) {
              let kT = TT;
              TT instanceof jT.e && (kT = TT.hlT);
              const cT = kT.getVerticesData(IT.i.PositionKind, !0, !0);
              if (!cT) return [];
              const MT = lT.Fv.Zero();
              let KT;
              for (KT = 0; KT < cT.length; KT += 3) lT.Fv.TransformCoordinatesFromFloatsToRef(cT[KT], cT[KT + 1], cT[KT + 2], TT.computeWorldMatrix(!0), MT).toArray(cT, KT);
              return cT
            }
            return TT.getVerticesData(IT.i.PositionKind) || []
          };
        yT && (OT = !0);
        let tT = "",
          hT = 0,
          NT = 0;
        if (MT) {
          for (let cT = 0; cT < TT.length; cT++) {
            const kT = TT[cT].FcT();
            hT += kT ? kT.length / 3 : 0
          }
          const kT = new ArrayBuffer(84 + 50 * hT);
          tT = new DataView(kT), NT += 80, tT.setUint32(NT, hT, KT), NT += 4
        } else fT || (tT = "solid stlmesh\r\n");
        for (let lT = 0; lT < TT.length; lT++) {
          const kT = TT[lT];
          !MT && fT && (tT += "solid " + kT.name + "\r\n"), !OT && kT instanceof Il.c && kT.bakeCurrentTransformIntoVertices();
          const cT = vT(kT),
            yT = kT.FcT() || [];
          for (let TT = 0; TT < yT.length; TT += 3) {
            const kT = xT(yT, cT, TT);
            MT ? (NT = AT(tT, NT, kT.n, KT), NT = AT(tT, NT, kT.v[0], KT), NT = AT(tT, NT, kT.v[1], KT), NT = AT(tT, NT, kT.v[2], KT), NT += 2) : (tT += "\tfacet normal " + kT.n.x + " " + kT.n.y + " " + kT.n.z + "\r\n", tT += "\t\touter loop\r\n", tT += "\t\t\tvertex " + kT.v[0].x + " " + kT.v[0].y + " " + kT.v[0].z + "\r\n", tT += "\t\t\tvertex " + kT.v[1].x + " " + kT.v[1].y + " " + kT.v[1].z + "\r\n", tT += "\t\t\tvertex " + kT.v[2].x + " " + kT.v[2].y + " " + kT.v[2].z + "\r\n", tT += "\t\tendloop\r\n", tT += "\tendfacet\r\n")
          }!MT && fT && (tT += "endsolid " + name + "\r\n")
        }
        if (MT || fT || (tT += "endsolid stlmesh"), kT) {
          const TT = document.createElement("a"),
            kT = new Blob([tT], {
              type: "application/octet-stream"
            });
          TT.href = window.URL.createObjectURL(kT), TT.download = cT + ".stl", TT.click()
        }
        return tT
      }
    }

    function xO(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const MT = [];
      for (let KT = 0; KT < TT.length / cT; KT++) {
        const OT = TT[KT * cT] * (lT ? -1 : 1),
          yT = TT[KT * cT + 1],
          fT = TT[KT * cT + 2];
        MT.push(`(${OT.toPrecision(kT.precision)}, ${yT.toPrecision(kT.precision)}, ${fT.toPrecision(kT.precision)})`)
      }
      return MT.join(", ")
    }

    function IO(TT, kT) {
      const cT = [];
      for (let lT = 0; lT < TT.length / 2; lT++) {
        const MT = TT[2 * lT],
          KT = TT[2 * lT + 1];
        cT.push(`(${MT.toPrecision(kT.precision)}, ${(1-KT).toPrecision(kT.precision)})`)
      }
      return cT.join(", ")
    }

    function AO(TT, kT, cT, lT) {
      const MT = TT.getVerticesData(IT.i.PositionKind),
        KT = TT.getVerticesData(IT.i.NormalKind);
      if (MT && KT) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${cT}"\n\t\tint[] faceVertexCounts = [${function(TT){const kT=TT.FcT()?.length?TT.getTotalIndices():TT.getTotalVertices();return Array(kT/3).fill(3).join(", ")}(TT)}]\n\t\tint[] faceVertexIndices = [${function(TT){const kT=TT.FcT(),cT=kT?.length??TT.getTotalVertices(),lT=[];if(null!==kT)for(let MT=0;MT<cT;MT++)lT.push(kT[MT]);else for(let MT=0;MT<cT;MT++)lT.push(MT);return lT.join(", ")}(TT)}]\n\t\tnormal3f[] normals = [${xO(KT,kT,void 0,lT)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${xO(MT,kT,void 0,lT)}]\n        ${function(TT,kT){let cT="";for(let MT=0;MT<4;MT++){const lT=MT>0?MT:"",KT=TT.getVerticesData(IT.i.UVKind+(lT?lT+1:""));KT&&(cT+=`\n\t\ttexCoord2f[] primvars:st${lT} = [${IO(KT,kT)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const lT=TT.getVerticesData(IT.i.ColorKind);return lT&&(cT+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        xO(lT, kT, lT.length / TT.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),cT}(TT,kT)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function CO(TT, kT, cT, lT) {
      return `\n        def "Geometry"\n        {\n        ${AO(TT,kT,cT,lT)}\n        }\n        `
    }

    function jO(TT) {
      let kT = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return kT += TT, fflate.strToU8(kT)
    }

    function vO(TT) {
      const kT = TT.m;
      return `( ${tO(kT,0)}, ${tO(kT,4)}, ${tO(kT,8)}, ${tO(kT,12)} )`
    }

    function tO(TT, kT) {
      return `(${TT[kT+0]}, ${TT[kT+1]}, ${TT[kT+2]}, ${TT[kT+3]})`
    }

    function hO(TT, kT) {
      const cT = "Object_" + TT.uniqueId,
        lT = vO(kT);
      return `def Xform "${cT}" (\n\tprepend references = @./geometries/Geometry_${TT.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${lT}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${TT.material.uniqueId}>\n}\n\n`
    }

    function NO(TT) {
      switch (TT) {
        case rT.e.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case rT.e.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case rT.e.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function QO(TT) {
      return `(${TT.x}, ${TT.y})`
    }

    function SO(TT) {
      return `(${TT.r}, ${TT.g}, ${TT.b})`
    }

    function DO(TT) {
      return "image/jpeg" === TT || "image/png" === TT
    }

    function aO(TT, kT, cT, MT, KT, OT) {
      const yT = TT.getInternalTexture().uniqueId + "_" + TT.invertY,
        xT = TT.mimeType || (0, fT.e)(TT.getInternalTexture()?.url ?? ""),
        IT = DO(xT) ? xT : "image/png",
        AT = "image/jpeg" === IT ? "jpg" : "png";
      KT[yT] = {
        texture: TT,
        mimeType: IT,
        ext: AT
      };
      const CT = TT.coordinatesIndex > 0 ? "st" + TT.coordinatesIndex : "st",
        jT = new lT.Vector2(TT.uScale, TT.vScale),
        vT = new lT.Vector2(TT.uOffset, TT.vOffset),
        tT = TT.wAng,
        hT = Math.sin(tT),
        NT = Math.cos(tT);
      return vT.y = 1 - vT.y - jT.y, vT.x += hT * jT.x, vT.y += (1 - NT) * jT.y, `\n    def Shader "PrimvarReader_${cT}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${CT}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${cT}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${kT.uniqueId}/PrimvarReader_${cT}.outputs:result>\n        float inputs:rotation = ${(tT*(180/Math.PI)).toFixed(OT.precision)}\n        float2 inputs:scale = ${QO(jT)}\n        float2 inputs:translation = ${QO(vT)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${TT.uniqueId}_${cT}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${yT}.${AT}@\n        float2 inputs:st.connect = </Root/Materials/Material_${kT.uniqueId}/Transform2d_${cT}.outputs:result>\n        ${MT?"float4 inputs:scale = "+function(TT){return`(${TT.r}, ${TT.g}, ${TT.b}, 1.0)`}(MT):""}\n        token inputs:sourceColorSpace = "${TT.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${NO(TT.wrapU)}"\n        token inputs:wrapT = "${NO(TT.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${kT.needAlphaBlending()||kT.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function FO(TT, kT, cT) {
      const lT = "\t\t\t",
        MT = [],
        KT = [],
        {
          diffuseMap: OT,
          diffuse: yT,
          alphaCutOff: fT,
          emissiveMap: xT,
          emissive: IT,
          normalMap: AT,
          roughnessMap: CT,
          roughnessChannel: jT,
          roughness: vT,
          metalnessMap: tT,
          metalnessChannel: NT,
          metalness: QT,
          aoMap: ST,
          aoMapChannel: DT,
          aoMapIntensity: aT,
          alphaMap: FT,
          ior: rT,
          clearCoatEnabled: PT,
          clearCoat: wT,
          clearCoatMap: mT,
          clearCoatRoughness: bT,
          clearCoatRoughnessMap: zT
        } = function(TT) {
          const kT = {
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
          return TT instanceof Ol.StandardMaterial ? {
            ...kT,
            diffuseMap: TT.diffuseTexture,
            diffuse: TT.diffuseColor,
            alphaCutOff: TT.alphaCutOff,
            emissiveMap: TT.emissiveTexture,
            emissive: TT.emissiveColor,
            roughness: 1,
            alphaMap: TT.opacityTexture
          } : TT instanceof Fk ? {
            ...kT,
            diffuseMap: TT._albedoTexture,
            diffuse: TT._albedoColor,
            alphaCutOff: TT._alphaCutOff,
            emissiveMap: TT._emissiveTexture,
            emissive: TT._emissiveColor,
            normalMap: TT._bumpTexture,
            roughnessMap: TT._metallicTexture,
            roughnessChannel: TT._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: TT._roughness ?? 1,
            metalnessMap: TT._metallicTexture,
            metalnessChannel: TT._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: TT._metallic ?? 0,
            aoMap: TT._ambientTexture,
            aoMapChannel: TT._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: TT._ambientTextureStrength,
            alphaMap: TT._opacityTexture,
            ior: TT.subSurface.indexOfRefraction,
            clearCoatEnabled: TT.clearCoat.isEnabled,
            clearCoat: TT.clearCoat.intensity,
            clearCoatMap: TT.clearCoat.texture,
            clearCoatRoughness: TT.clearCoat.roughness,
            clearCoatRoughnessMap: TT.clearCoat.useRoughnessFromMainTexture ? TT.clearCoat.texture : TT.clearCoat.textureRoughness
          } : kT
        }(TT);
      return null !== OT ? (MT.push(`${lT}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${OT.uniqueId}_diffuse.outputs:rgb>`), TT.needAlphaBlending() ? MT.push(`${lT}float inputs:opacity.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${OT.uniqueId}_diffuse.outputs:a>`) : TT.needAlphaTesting() && (MT.push(`${lT}float inputs:opacity.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${OT.uniqueId}_diffuse.outputs:a>`), MT.push(`${lT}float inputs:opacityThreshold = ${fT}`)), KT.push(aO(OT, TT, "diffuse", yT, kT, cT))) : MT.push(`${lT}color3f inputs:diffuseColor = ${SO(yT||hT.Color3.White())}`), null !== xT ? (MT.push(`${lT}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${xT.uniqueId}_emissive.outputs:rgb>`), KT.push(aO(xT, TT, "emissive", IT, kT, cT))) : IT && IT.toLuminance() > 0 && MT.push(`${lT}color3f inputs:emissiveColor = ${SO(IT)}`), null !== AT && (MT.push(`${lT}normal3f inputs:normal.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${AT.uniqueId}_normal.outputs:rgb>`), KT.push(aO(AT, TT, "normal", null, kT, cT))), null !== ST && (MT.push(`${lT}float inputs:occlusion.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${ST.uniqueId}_occlusion.outputs:${DT}>`), KT.push(aO(ST, TT, "occlusion", new hT.Color3(aT, aT, aT), kT, cT))), null !== CT ? (MT.push(`${lT}float inputs:roughness.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${CT.uniqueId}_roughness.outputs:${jT}>`), KT.push(aO(CT, TT, "roughness", new hT.Color3(vT, vT, vT), kT, cT))) : MT.push(`${lT}float inputs:roughness = ${vT}`), null !== tT ? (MT.push(`${lT}float inputs:metallic.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${tT.uniqueId}_metallic.outputs:${NT}>`), KT.push(aO(tT, TT, "metallic", new hT.Color3(QT, QT, QT), kT, cT))) : MT.push(`${lT}float inputs:metallic = ${QT}`), null !== FT ? (MT.push(`${lT}float inputs:opacity.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${FT.uniqueId}_opacity.outputs:r>`), MT.push(`${lT}float inputs:opacityThreshold = 0.0001`), KT.push(aO(FT, TT, "opacity", null, kT, cT))) : MT.push(`${lT}float inputs:opacity = ${TT.alpha}`), PT && (null !== mT ? (MT.push(`${lT}float inputs:clearcoat.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${mT.uniqueId}_clearcoat.outputs:r>`), KT.push(aO(mT, TT, "clearcoat", new hT.Color3(wT, wT, wT), kT, cT))) : MT.push(`${lT}float inputs:clearcoat = ${wT}`), null !== zT ? (MT.push(`${lT}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${zT.uniqueId}_clearcoatRoughness.outputs:g>`), KT.push(aO(zT, TT, "clearcoatRoughness", new hT.Color3(bT, bT, bT), kT, cT))) : MT.push(`${lT}float inputs:clearcoatRoughness = ${bT}`)), MT.push(`${lT}float inputs:ior = ${rT}`), `\n\tdef Material "Material_${TT.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${MT.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${TT.uniqueId}/PreviewSurface.outputs:surface>\n\n${KT.join("\n")}\n\n\t}\n`
    }

    function rO(TT) {
      TT.computeWorldMatrix(!0);
      const kT = TT.getWorldMatrix().clone(),
        cT = TT.NJ().useRightHandedSystem;
      let lT = TT.material?._getEffectiveOrientation(TT) ?? TT.sideOrientation,
        OT = !cT,
        yT = TT.parent;
      for (; yT;) {
        if (Ec(yT, cT) && null === yT.parent) {
          cT || (kT.multiplyToRef(yT.getWorldMatrix().invert(), kT), lT = lT === KT.e.ClockWiseSideOrientation ? KT.e.CounterClockWiseSideOrientation : KT.e.ClockWiseSideOrientation), OT = !1;
          break
        }
        yT = yT.parent
      }
      return kT.determinant() < 0 && MT.Tools.Warn(`Mesh ${TT.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: kT,
        windingOrder: lT === KT.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: OT
      }
    }
    async function PO(TT, kT, cT) {
      const KT = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...kT
      };
      "undefined" === typeof fflate && await MT.Tools.LoadScriptAsync(KT.fflateUrl);
      const OT = {};
      OT[KT.modelFileName] = null;
      let yT = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      yT += function(TT) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===TT.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${TT.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${TT.planeAnchoringAlignment}"`:""}\n            `
      }(KT);
      const fT = {};
      for (const lT of TT.meshes) {
        if (0 === lT.getTotalVertices()) continue;
        const TT = lT,
          kT = TT.geometry,
          xT = TT.material;
        if (!xT || !kT || cT && !cT(TT)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(xT.getClassName())) {
          const cT = "geometries/Geometry_" + kT.uniqueId + ".usda",
            {
              matrix: lT,
              windingOrder: MT,
              convertToRightHanded: IT
            } = rO(TT);
          if (!(cT in OT)) {
            const TT = CO(kT, KT, MT, IT);
            OT[cT] = jO(TT)
          }
          xT.uniqueId in fT || (fT[xT.uniqueId] = xT), yT += hO(TT, lT)
        } else MT.Tools.Warn("USDZExportAsync does not support this material type: " + xT.getClassName())
      }
      TT.activeCamera && KT.exportCamera && (yT += function(TT, kT) {
        const cT = "Camera_" + TT.uniqueId,
          MT = vO(lT.Matrix.RotationY(Math.PI).multiply(TT.getWorldMatrix()));
        if (TT.mode === rT.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${cT}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${MT}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${TT.minZ.toPrecision(kT.precision)}, ${TT.maxZ.toPrecision(kT.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(TT.orthoLeft||1)+Math.abs(TT.orthoRight||1))).toPrecision(kT.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(TT.orthoTop||1)+Math.abs(TT.orthoBottom||1))).toPrecision(kT.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const lT = TT.Dv().getAspectRatio(TT),
            KT = kT.cameraSensorWidth || 35;
          return `def Camera "${cT}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${MT}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${TT.minZ.toPrecision(kT.precision)}, ${TT.maxZ.toPrecision(kT.precision)})\n\t\t\tfloat focalLength = ${(KT/(2*Math.tan(.5*TT.fov))).toPrecision(kT.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(KT*lT).toPrecision(kT.precision)}\n\t\t\tfloat verticalAperture = ${(KT/lT).toPrecision(kT.precision)}            \n\t\t}\n\t\n\t`
        }
      }(TT.activeCamera, KT)), yT += "\n            }\n        }";
      const xT = {};
      yT += function(TT, kT, cT) {
        const lT = [];
        for (const MT in TT) {
          const KT = TT[MT];
          lT.push(FO(KT, kT, cT))
        }
        return `\n    def "Materials"\n{\n${lT.join("")}\n}\n\n`
      }(fT, xT, KT), yT += "\n    }", OT[KT.modelFileName] = fflate.strToU8(yT);
      for (const lT in xT) {
        const {
          texture: TT,
          ext: kT,
          mimeType: cT
        } = xT[lT], MT = await Qc(TT);
        if (MT && DO(MT.mimeType) && MT.mimeType === cT) OT[`textures/Texture_${lT}.${kT}`] = new Uint8Array(MT.data);
        else {
          const MT = TT.getSize(),
            KT = await (0, DT.c)(TT),
            yT = await PT.DumpTools.DumpDataAsync(MT.width, MT.height, KT, cT, void 0, !1, !0);
          OT[`textures/Texture_${lT}.${kT}`] = new Uint8Array(yT).slice()
        }
      }
      let IT = 0;
      for (const lT in OT) {
        const TT = OT[lT];
        if (!TT) continue;
        IT += 34 + lT.length;
        const kT = 63 & IT;
        if (4 !== kT) {
          const cT = new Uint8Array(64 - kT);
          OT[lT] = [TT, {
            extra: {
              12345: cT
            }
          }]
        }
        IT = TT.length
      }
      return fflate.zipSync(OT, {
        level: 0
      })
    }
    var wO = cT(40718);
    class mO {
      static Export(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          cT = arguments.length > 2 ? arguments[2] : void 0;
        if (!TT || 0 === TT.bones.length) throw new Error("Invalid or empty skeleton provided");
        let lT = kT;
        kT && 0 !== kT.length || (lT = TT.animations.map((TT => TT.name)));
        let MT = null;
        for (const xT of lT) {
          const kT = TT.getAnimationRange(xT);
          kT && (MT = MT ? new wO.d("animation-range", Math.min(MT.from, kT.from), Math.max(MT.to, kT.to)) : kT)
        }
        if (!MT && (TT.animations.length > 0 && (MT = TT.getAnimationRange(TT.animations[0].name)), !MT)) throw new Error("No animation range found in skeleton");
        const KT = cT || 1 / (TT.animations[0]?.framePerSecond || 30),
          OT = this._BuildBoneHierarchy(TT, lT);
        let yT = 0;
        for (const xT of OT) xT.positionKeys.length > 0 && (yT = Math.max(yT, xT.positionKeys.length)), xT.rotationKeys.length > 0 && (yT = Math.max(yT, xT.rotationKeys.length));
        0 === yT && (yT = Math.floor((MT.to - MT.from) / KT) + 1);
        let fT = "";
        return fT += "HIERARCHY\n", fT += this._ExportHierarchy(OT, 0), fT += "MOTION\n", fT += `Frames: ${yT}\n`, fT += `Frame Time: ${KT.toFixed(6)}\n`, fT += this._ExportMotionData(OT, yT, 0, lT), fT
      }
      static _BuildBoneHierarchy(TT, kT) {
        const cT = new Map,
          lT = [];
        for (const MT of TT.bones) {
          const TT = {
            bone: MT,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          cT.set(MT, TT)
        }
        for (const MT of TT.bones) {
          const TT = cT.get(MT);
          if (MT.animations.length > 0)
            for (const cT of MT.animations) kT.includes(cT.name) && ("position" === cT.targetProperty ? (TT.hasPositionChannels = !0, TT.positionKeys.push(...cT.getKeys())) : "rotationQuaternion" === cT.targetProperty && (TT.hasRotationChannels = !0, TT.rotationKeys.push(...cT.getKeys())));
          if (MT.getParent()) {
            const kT = cT.get(MT.getParent());
            kT && kT.children.push(TT)
          } else lT.push(TT)
        }
        return lT
      }
      static _ExportHierarchy(TT, kT) {
        let cT = "";
        const lT = "    ".repeat(kT);
        for (const MT of TT) {
          const TT = MT.bone;
          if (this._IsEndSite(MT)) {
            cT += `${lT}End Site\n`, cT += `${lT}{\n`;
            const kT = this._GetBoneOffset(TT);
            cT += `${lT}    OFFSET ${kT.x.toFixed(6)} ${kT.y.toFixed(6)} ${kT.z.toFixed(6)}\n`, cT += `${lT}}\n`
          } else {
            cT += `${0===kT?"ROOT":`${lT}JOINT`} ${TT.name}\n`, cT += `${lT}{\n`;
            const KT = this._GetBoneOffset(TT);
            cT += `${lT}    OFFSET ${KT.x.toFixed(6)} ${KT.y.toFixed(6)} ${KT.z.toFixed(6)}\n`;
            const OT = [];
            MT.hasPositionChannels && OT.push("Xposition", "Yposition", "Zposition"), MT.hasRotationChannels && OT.push("Zrotation", "Xrotation", "Yrotation"), OT.length > 0 && (cT += `${lT}    CHANNELS ${OT.length} ${OT.join(" ")}\n`), MT.children.length > 0 && (cT += this._ExportHierarchy(MT.children, kT + 1)), cT += `${lT}}\n`
          }
        }
        return cT
      }
      static _IsEndSite(TT) {
        return 0 === TT.children.length
      }
      static _GetBoneOffset(TT) {
        try {
          if (!TT.getParent()) return TT.getRestMatrix().getTranslation();
          return TT.getLocalMatrix().getTranslation()
        } catch (kT) {
          return lT.Fv.Zero()
        }
      }
      static _ExportMotionData(TT, kT, cT, lT) {
        let MT = "";
        for (let KT = 0; KT < kT; KT++) {
          const kT = [];
          this._CollectFrameValues(TT, KT + cT, kT, lT), MT += kT.map((TT => TT.toFixed(6))).join(" ") + "\n"
        }
        return MT
      }
      static _CollectFrameValues(TT, kT, cT, lT) {
        for (const MT of TT)
          if (!this._IsEndSite(MT)) {
            if (MT.hasPositionChannels) {
              const TT = this._GetPositionAtFrameIndex(MT.positionKeys, kT);
              cT.push(TT.x, TT.y, TT.z)
            }
            if (MT.hasRotationChannels) {
              const TT = this._GetRotationAtFrameIndex(MT.rotationKeys, kT),
                lT = this._QuaternionToEuler(TT);
              cT.push(lT.z, lT.x, lT.y)
            }
            MT.children.length > 0 && this._CollectFrameValues(MT.children, kT, cT, lT)
          }
      }
      static _GetPositionAtFrameIndex(TT, kT) {
        if (0 === TT.length) return lT.Fv.Zero();
        return TT[Math.max(0, Math.min(kT, TT.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(TT, kT) {
        if (0 === TT.length) return lT.Quaternion.Identity();
        return TT[Math.max(0, Math.min(kT, TT.length - 1))].value.clone()
      }
      static _QuaternionToEuler(TT) {
        const kT = new lT.Matrix;
        TT.toRotationMatrix(kT);
        const cT = kT.m;
        let KT, OT, yT;
        const fT = Math.sqrt(cT[0] * cT[0] + cT[1] * cT[1]);
        return fT > Gc.b ? (KT = Math.atan2(cT[6], cT[10]), OT = Math.atan2(-cT[2], fT), yT = Math.atan2(cT[1], cT[0])) : (KT = Math.atan2(-cT[9], cT[5]), OT = Math.atan2(-cT[2], fT), yT = 0), new lT.Fv(MT.Tools.ToDegrees(KT), MT.Tools.ToDegrees(OT), MT.Tools.ToDegrees(yT))
      }
    }

    function bO(TT) {
      return "string" === typeof TT?.name
    }
    const zO = Symbol("__xml:meta$__"),
      JO = Symbol("__xml:name$__");

    function oO(TT, kT) {
      Object.prototype.hasOwnProperty.call(TT.metadata, zO) || (TT.metadata[zO] = []), TT.metadata[zO].push(kT)
    }

    function HO(TT) {
      return (kT, cT) => {
        kT[JO] = TT
      }
    }

    function eO() {
      return (TT, kT) => oO(kT, {
        kind: "none",
        prop: String(kT.name),
        ignore: !0
      })
    }

    function GO(TT) {
      return (kT, cT) => oO(cT, {
        kind: "attr",
        prop: String(cT.name),
        ...TT
      })
    }

    function VO(TT) {
      return (kT, cT) => oO(cT, {
        kind: "elem",
        prop: String(cT.name),
        ...TT
      })
    }

    function EO(TT) {
      const kT = "function" === typeof TT ? TT : TT?.constructor,
        cT = kT?.[Symbol.metadata];
      if (!cT) return [];
      const lT = [];
      let MT = cT;
      for (; MT;) Object.prototype.hasOwnProperty.call(MT, zO) && lT.push(...MT[zO]), MT = Object.getPrototypeOf(MT);
      return lT
    }

    function ZO(TT) {
      const kT = TT?.constructor?.[JO];
      return kT || void 0
    }

    function uO(TT) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(TT)
    }

    function XO(TT) {
      if (bO(TT)) return TT;
      const kT = (TT ?? "").trim();
      if (!kT) return {
        name: ""
      };
      const cT = kT.indexOf(":");
      if (-1 === cT) return {
        name: kT
      };
      if (-1 !== kT.indexOf(":", cT + 1)) return {
        name: kT
      };
      const lT = kT.slice(0, cT),
        MT = kT.slice(cT + 1);
      return uO(lT) && uO(MT) ? {
        ns: lT,
        name: MT
      } : {
        name: kT
      }
    }

    function dO(TT, kT) {
      return kT ? `${kT}:${TT}` : TT
    }
    const LO = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      RO = Object.freeze({
        number: LO
      });

    function gO(TT) {
      const kT = TT?.eps ?? LO.eps;
      return {
        eps: kT,
        maxDecimalsCap: TT?.maxDecimalsCap ?? LO.maxDecimalsCap,
        trimTrailingZeros: TT?.trimTrailingZeros ?? LO.trimTrailingZeros,
        fixedDecimals: TT?.fixedDecimals,
        allowScientific: TT?.allowScientific ?? LO.allowScientific,
        snapNearZero: TT?.snapNearZero ?? LO.snapNearZero,
        zeroThreshold: TT?.zeroThreshold ?? kT,
        perAttributeEps: TT?.perAttributeEps
      }
    }

    function UO(TT) {
      return {
        number: gO(TT?.number)
      }
    }
    class YO {
      constructor(TT) {
        if (this.o = TT, this._o = TT.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(TT) {
        if (!Number.isFinite(TT)) throw new Error(`Cannot format non-finite number: ${TT}`);
        const kT = this._o,
          cT = this._clampInt(kT.maxDecimalsCap ?? 15, 0, 20),
          lT = kT.trimTrailingZeros ?? !0,
          MT = kT.snapNearZero ?? !0,
          KT = kT.zeroThreshold ?? kT.eps,
          OT = 1 / kT.eps;
        let yT, fT = Math.round(TT * OT) / OT;
        if (Object.is(fT, -0) && (fT = 0), MT && Math.abs(fT) <= KT && (fT = 0), yT = void 0 !== kT.fixedDecimals ? this._clampInt(kT.fixedDecimals, 0, cT) : this._clampInt(Math.ceil(-Math.log10(kT.eps)), 0, cT), kT.allowScientific, 0 === yT) return String(Math.trunc(fT));
        let xT = fT.toFixed(yT);
        if (lT && void 0 === kT.fixedDecimals && (xT = xT.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(xT)) throw new Error(`Scientific notation not allowed in XML output: ${xT}`);
        return xT
      }
      _clampInt(TT, kT, cT) {
        return Number.isFinite(TT) ? (TT = Math.trunc(TT), Math.max(kT, Math.min(cT, TT))) : kT
      }
    }

    function BO(TT) {
      return TT instanceof Date
    }

    function WO(TT) {
      return "string" === typeof TT
    }

    function nO(TT) {
      return "string" === typeof TT || "number" === typeof TT || "boolean" === typeof TT || "bigint" === typeof TT || BO(TT)
    }

    function pO(TT) {
      return "number" === typeof TT || "boolean" === typeof TT || "bigint" === typeof TT || BO(TT)
    }
    class iO {
      constructor(TT, kT) {
        this._ns = new Map, this._prefixCount = 0, this._builder = TT, this._format = UO(kT), this._nFmt = new YO(this._format)
      }
      withNamespace() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        for (const lT of kT) this._assignNamespace(lT);
        return this
      }
      serialize(TT, kT) {
        if (!(kT = kT ?? ZO(TT))) throw new Error("can not find name for given object");
        const cT = XO(kT);
        cT.ns && this._assignNamespace(cT.ns, "xmlns"), this._gatherNamespaces(TT, new WeakSet);
        const lT = this._builder.ele(null, cT.name);
        for (const [MT, KT] of Array.from(this._ns.entries())) lT.att("xmlns", KT, MT);
        this._writeObjectContent(lT, TT, (new WeakSet).add(TT)), this._builder.end()
      }
      _writeObject(TT, kT, cT) {
        if (cT.has(kT)) return;
        if (cT.add(kT), Array.isArray(kT)) {
          for (const lT of kT) pO(lT) || (WO(lT) ? this._builder.text(lT) : this._writeObject(TT, lT, cT));
          return
        }
        const lT = ZO(kT);
        if (!lT) return;
        const MT = XO(lT),
          KT = this._getPrefix(MT),
          OT = dO(MT.name, KT);
        TT.ele(null, OT), this._writeObjectContent(TT, kT, cT), this._builder.end()
      }
      _getPrefix(TT) {
        if (TT.ns) {
          const kT = this._ns.get(TT.ns.toLowerCase());
          if ("xmlns" !== kT) return kT
        }
      }
      _writeObjectContent(TT, kT, cT) {
        const lT = EO(kT) ?? [],
          MT = new Map;
        for (const OT of lT) {
          const TT = MT.get(OT.prop) ?? [];
          TT.push(OT), MT.set(OT.prop, TT)
        }
        const KT = Object.keys(kT).sort(((TT, kT) => {
          const cT = (MT.get(TT) ?? []).some((TT => "attr" === TT.kind));
          return cT === (MT.get(kT) ?? []).some((TT => "attr" === TT.kind)) ? 0 : cT ? -1 : 1
        }));
        for (const OT of KT) {
          const lT = kT[OT];
          if (null === lT || void 0 === lT) continue;
          const KT = MT.get(OT);
          if (KT) {
            if (KT.some((TT => !0 === TT.ignore || "none" === TT.kind))) continue;
            for (const kT of KT) {
              const cT = kT.name ?? kT.prop.toLowerCase();
              if (cT) switch (kT.kind) {
                case "attr": {
                  let MT = null;
                  if ("number" === typeof lT && this._nFmt && (MT = this._nFmt.toString(lT)), kT.formatter) {
                    MT = new kT.formatter(this._format).toString(lT)
                  }
                  if (MT = MT ?? lT.toString(), MT) {
                    const kT = XO(cT),
                      lT = this._getPrefix(kT),
                      KT = dO(kT.name, lT);
                    TT.att(null, KT, MT)
                  }
                  break
                }
              }
            }
          } else pO(lT) || (WO(lT) ? this._builder.text(lT) : this._writeObject(TT, lT, cT))
        }
      }
      _gatherNamespaces(TT, kT) {
        if (kT.has(TT)) return;
        if (kT.add(TT), Array.isArray(TT)) {
          for (const cT of TT) nO(cT) || this._gatherNamespaces(cT, kT);
          return
        }
        const cT = ZO(TT);
        cT && this._assignNamespace(cT);
        const lT = EO(TT) ?? [],
          MT = new Map;
        for (const OT of lT) {
          const TT = MT.get(OT.prop) ?? [];
          TT.push(OT), MT.set(OT.prop, TT)
        }
        const KT = [];
        for (const OT of Object.keys(TT)) {
          const kT = TT[OT];
          if (null === kT || void 0 === kT) continue;
          const cT = MT.get(OT);
          if (cT) {
            if (cT.some((TT => !0 === TT.ignore || "none" === TT.kind))) continue;
            for (const TT of cT) TT.name && this._assignNamespace(TT.name)
          }
          KT.push(kT)
        }
        for (const OT of KT) nO(OT) || this._gatherNamespaces(OT, kT)
      }
      _assignNamespace(TT, kT) {
        const cT = XO(TT);
        if (cT?.ns) {
          const TT = cT.ns.toLowerCase();
          this._ns.get(TT) || this._ns.set(TT, kT ?? this._buildNsPrefix(TT))
        } else if ("xmlns" === kT) {
          const TT = cT.name.toLowerCase();
          this._ns.get(TT) || this._ns.set(TT, kT ?? this._buildNsPrefix(TT))
        }
      }
      _buildNsPrefix(TT) {
        let kT, cT = !1;
        do {
          kT = "ns" + this._prefixCount++;
          for (const TT of Array.from(this._ns.values()))
            if (TT === kT) {
              cT = !0;
              break
            }
        } while (cT);
        return kT
      }
    }
    class qO {}
    var sO;
    qO.OpenTag = "<", qO.CloseTag = ">", qO.Slash = "/", qO.Question = "?", qO.Quote = '"', qO.Equal = "=", qO.Space = " ", qO.Semicolon = ":", qO.Dec = "<?xml", qO.Xml = "xml", qO.Xmlns = "xmlns", qO.Xsi = "xsi", qO.VersionKeyword = "version", qO.EncodingKeyword = "encoding", qO.StandaloneKeyword = "standalone",
      function(TT) {
        TT[TT.Declaration = 0] = "Declaration", TT[TT.Tag = 1] = "Tag", TT[TT.Attribute = 2] = "Attribute", TT[TT.Text = 3] = "Text"
      }(sO || (sO = {}));
    class Ty {
      constructor(TT) {
        this._ctxStack = [], this._d = 0, this._w = TT
      }
      dec(TT, kT, cT) {
        return this._w.write(qO.Dec), this._writeAttStr(qO.VersionKeyword, TT), kT && this._writeAttStr(qO.EncodingKeyword, kT), void 0 !== cT && this._writeAttStr(qO.StandaloneKeyword, cT ? "yes" : "no"), this._w.write(qO.Question, qO.CloseTag), this
      }
      att(TT, kT, cT) {
        const lT = this._peekContext();
        if (!lT) throw new Error("att() without open element");
        if (lT.closed) throw new Error(`att() after start tag closed for <${lT.name}>`);
        if (this._isXmlnsDecl(TT, kT)) {
          if (kT === qO.Xmlns) lT.defaultNs = cT, this._registerNamespace(lT, "", cT), this._writeAttStr(qO.Xmlns, cT);
          else if (TT) this._registerNamespace(lT, kT, cT), this._writeAttStr(`${TT}:${kT}`, cT);
          else {
            const TT = kT.slice(6);
            this._registerNamespace(lT, TT, cT), this._writeAttStr(kT, cT)
          }
          return lT.lastToken = sO.Attribute, this
        }
        let MT = kT;
        if (TT) {
          MT = `${this._ensurePrefixDeclared(lT,TT)}:${kT}`
        }
        return lT.lastToken = sO.Attribute, this._writeAttStr(MT, cT), this
      }
      ele(TT, kT) {
        const cT = this._peekContext();
        cT && this._closeOpenTagIfNeeded(cT);
        let lT = kT;
        if (TT) {
          lT = `${this._lookupPrefix(TT)??TT}:${kT}`
        }
        return this._pushContext(lT, ++this._d), this._w.write(qO.OpenTag, lT), this
      }
      text(TT) {
        const kT = this._peekContext();
        if (!kT) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(kT), kT.lastToken = sO.Text, this._w.write(this._escText(TT)), this
      }
      end() {
        const TT = this._popContext();
        return TT && (this._d--, TT.closed ? this._w.write(qO.OpenTag, qO.Slash, TT.name, qO.CloseTag) : this._w.write(qO.Slash, qO.CloseTag)), this
      }
      _pushContext(TT, kT) {
        const cT = new Ty.Context(TT, kT);
        return this._ctxStack.push(cT), cT
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
      _writeAttStr(TT, kT) {
        this._w.write(qO.Space, TT, qO.Equal, qO.Quote, this._escAttr(kT), qO.Quote)
      }
      _lookupPrefix(TT) {
        let kT = this._ctxStack.length - 1;
        if (kT >= 0)
          do {
            const cT = this._ctxStack[kT--],
              lT = cT.ns2prefix?.get(TT);
            if (lT) return lT
          } while (kT >= 0)
      }
      _escText(TT) {
        return TT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(TT) {
        return this._escText(TT).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(TT, kT) {
        if (TT) return TT === qO.Xmlns;
        const cT = kT.length,
          lT = qO.Xmlns.length;
        return cT >= lT && (kT.startsWith(qO.Xmlns) && (kT.length == lT || kT[lT] == qO.Semicolon))
      }
      _registerNamespace(TT, kT, cT) {
        if (kT === qO.Xml || kT === qO.Xmlns) throw new Error(`reserved prefix '${kT}'`);
        const lT = TT.prefix2ns.get(kT);
        if (lT && lT !== cT) throw new Error(`prefix '${kT}' already bound to a different namespace`);
        TT.ns2prefix.get(cT) || TT.ns2prefix.set(cT, kT), TT.prefix2ns.set(kT, cT)
      }
      _allocPrefix(TT) {
        let kT = 1;
        for (;;) {
          const cT = "ns" + kT++;
          if (!TT.prefix2ns.has(cT)) return cT
        }
      }
      _ensurePrefixDeclared(TT, kT) {
        const cT = this._lookupPrefix(kT);
        if (cT) return cT;
        if (TT.closed) throw new Error(`can not declare namespace after start tag closed for <${TT.name}>`);
        const lT = this._allocPrefix(TT);
        return this._writeAttStr(`${qO.Xmlns}:${lT}`, kT), this._registerNamespace(TT, lT, kT), lT
      }
      _closeOpenTagIfNeeded(TT) {
        TT.closed || (this._w.write(qO.CloseTag), TT.closed = !0)
      }
    }
    Ty.Context = class {
      constructor(TT, kT) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = TT, this.depth = kT
      }
    };
    class ky {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        if (0 === kT.length) return this;
        const lT = kT.join("");
        return this._chunks.push(lT), this.count += lT.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class cy {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = TT, this._opts = kT, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        if (0 === kT.length) return this;
        const lT = kT.join("");
        if (0 === lT.length) return this;
        this._pending += lT, this._pendingChars += lT.length;
        const MT = this._opts.flushChars ?? 65536;
        return this._pendingChars >= MT && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const TT = this._encoder.encode(this._pending);
        return this._sink.push(TT), this.count += TT.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const ly = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      My = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Ky, Oy;
    ! function(TT) {
      TT.micron = "micron", TT.millimeter = "millimeter", TT.centimeter = "centimeter", TT.inch = "inch", TT.foot = "foot", TT.meter = "meter"
    }(Ky || (Ky = {})),
    function(TT) {
      TT.model = "model", TT.solidsupport = "solidsupport", TT.support = "support", TT.surface = "surface", TT.other = "other"
    }(Oy || (Oy = {}));
    const yy = "http://schemas.openxmlformats.org/package/2006/content-types",
      fy = "http://schemas.openxmlformats.org/package/2006/relationships";
    var xy;
    ! function(TT) {
      TT.Relationships = "application/vnd.openxmlformats-package.relationships+xml", TT.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", TT.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", TT.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", TT.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", TT.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", TT.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", TT.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", TT.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", TT.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", TT.Png = "image/png", TT.Jpeg = "image/jpeg", TT.Tiff = "image/tiff", TT.Xml = "application/xml"
    }(xy || (xy = {}));
    const Iy = "_rels/",
      Ay = "3D/",
      Cy = "3dmodel.model",
      jy = ".rels",
      vy = "[Content_Types].xml";
    class ty {
      static IsKnown(TT) {
        return ty.Known.has(TT)
      }
      static IsThreeDimModel(TT) {
        return TT === ty.ThreeDimModel
      }
    }
    ty.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", ty.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", ty.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", ty.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", ty.Known = new Set([ty.ThreeDimModel, ty.Thumbnail, ty.PrintTicket, ty.MustPreserve]);
    let hy = (() => {
        let TT, kT, cT = [HO({
            ns: yy,
            name: "Types"
          })],
          lT = [];
        kT = class {
          constructor() {
            this.items = []
          }
        };
        return (0, wT.l)(kT, "ThreeMfContentTypes"), (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wT.e)(null, TT = {
            value: kT
          }, cT, {
            kind: "class",
            name: kT.name,
            metadata: MT
          }, null, lT), kT = TT.value, MT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          }), (0, wT.h)(kT, lT)
        })(), kT
      })(),
      Ny = (() => {
        let TT, kT, cT, lT, MT = [HO({
            ns: yy,
            name: "Default"
          })],
          KT = [],
          OT = [],
          yT = [],
          fT = [],
          xT = [];
        kT = class {
          constructor(TT, kT) {
            this.ext = (0, wT.h)(this, OT, void 0), this.ct = ((0, wT.h)(this, yT), (0, wT.h)(this, fT, void 0)), (0, wT.h)(this, xT), this.ext = TT, this.ct = kT
          }
        };
        return (0, wT.l)(kT, "ThreeMfContentType"), (() => {
          const IT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cT = [GO({
            name: {
              ns: yy,
              name: "Extension"
            }
          })], lT = [GO({
            name: {
              ns: yy,
              name: "ContentType"
            }
          })], (0, wT.e)(null, null, cT, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: TT => "ext" in TT,
              get: TT => TT.ext,
              set: (TT, kT) => {
                TT.ext = kT
              }
            },
            metadata: IT
          }, OT, yT), (0, wT.e)(null, null, lT, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: TT => "ct" in TT,
              get: TT => TT.ct,
              set: (TT, kT) => {
                TT.ct = kT
              }
            },
            metadata: IT
          }, fT, xT), (0, wT.e)(null, TT = {
            value: kT
          }, MT, {
            kind: "class",
            name: kT.name,
            metadata: IT
          }, null, KT), kT = TT.value, IT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IT
          }), (0, wT.h)(kT, KT)
        })(), kT
      })(),
      Qy = (() => {
        let TT, kT, cT = [HO({
            ns: fy,
            name: "Relationships"
          })],
          lT = [];
        kT = class {
          constructor() {
            this.items = []
          }
        };
        return (0, wT.l)(kT, "ThreeMfRelationships"), (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wT.e)(null, TT = {
            value: kT
          }, cT, {
            kind: "class",
            name: kT.name,
            metadata: MT
          }, null, lT), kT = TT.value, MT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          }), (0, wT.h)(kT, lT)
        })(), kT
      })(),
      Sy = (() => {
        let TT, kT, cT, lT, MT, KT = [HO({
            ns: fy,
            name: "Relationship"
          })],
          OT = [],
          yT = [],
          fT = [],
          xT = [],
          IT = [],
          AT = [],
          CT = [];
        kT = class {
          constructor(TT, kT, cT) {
            this.id = (0, wT.h)(this, yT, void 0), this.type = ((0, wT.h)(this, fT), (0, wT.h)(this, xT, void 0)), this.target = ((0, wT.h)(this, IT), (0, wT.h)(this, AT, void 0)), (0, wT.h)(this, CT), this.id = TT, this.type = kT, this.target = cT
          }
        };
        return (0, wT.l)(kT, "ThreeMfRelationship"), (() => {
          const jT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cT = [GO({
            name: "Id"
          })], lT = [GO({
            name: "Type"
          })], MT = [GO({
            name: "Target"
          })], (0, wT.e)(null, null, cT, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: TT => "id" in TT,
              get: TT => TT.id,
              set: (TT, kT) => {
                TT.id = kT
              }
            },
            metadata: jT
          }, yT, fT), (0, wT.e)(null, null, lT, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: TT => "type" in TT,
              get: TT => TT.type,
              set: (TT, kT) => {
                TT.type = kT
              }
            },
            metadata: jT
          }, xT, IT), (0, wT.e)(null, null, MT, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: TT => "target" in TT,
              get: TT => TT.target,
              set: (TT, kT) => {
                TT.target = kT
              }
            },
            metadata: jT
          }, AT, CT), (0, wT.e)(null, TT = {
            value: kT
          }, KT, {
            kind: "class",
            name: kT.name,
            metadata: jT
          }, null, OT), kT = TT.value, jT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jT
          }), (0, wT.h)(kT, OT)
        })(), kT
      })();
    class Dy {
      constructor(TT, kT, cT) {
        this.contentTypes = TT, this.relationships = kT, this.model = cT
      }
    }
    class ay {
      static Zero() {
        return new ay([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(TT) {
        this.values = TT
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Fy {
      constructor(TT) {
        this.o = TT, this._f = new YO(TT)
      }
      toString(TT) {
        return TT.values.map((TT => this._f.toString(TT))).join(" ")
      }
    }
    let ry = (() => {
        let TT, kT, cT, lT, MT, KT = [HO({
            ns: ly,
            name: "model"
          })],
          OT = [],
          yT = [],
          fT = [],
          xT = [],
          IT = [],
          AT = [],
          CT = [];
        kT = class {
          constructor() {
            this.unit = (0, wT.h)(this, yT, Ky.millimeter), this.requiredextensions = ((0, wT.h)(this, fT), (0, wT.h)(this, xT, void 0)), this.recommendedextensions = ((0, wT.h)(this, IT), (0, wT.h)(this, AT, void 0)), this.metadata = (0, wT.h)(this, CT)
          }
        };
        return (0, wT.l)(kT, "ThreeMfModel"), (() => {
          const jT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cT = [GO({
            name: "unit"
          })], lT = [GO({
            name: "requiredextensions"
          })], MT = [GO({
            name: "recommendedextensions"
          })], (0, wT.e)(null, null, cT, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: TT => "unit" in TT,
              get: TT => TT.unit,
              set: (TT, kT) => {
                TT.unit = kT
              }
            },
            metadata: jT
          }, yT, fT), (0, wT.e)(null, null, lT, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: TT => "requiredextensions" in TT,
              get: TT => TT.requiredextensions,
              set: (TT, kT) => {
                TT.requiredextensions = kT
              }
            },
            metadata: jT
          }, xT, IT), (0, wT.e)(null, null, MT, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: TT => "recommendedextensions" in TT,
              get: TT => TT.recommendedextensions,
              set: (TT, kT) => {
                TT.recommendedextensions = kT
              }
            },
            metadata: jT
          }, AT, CT), (0, wT.e)(null, TT = {
            value: kT
          }, KT, {
            kind: "class",
            name: kT.name,
            metadata: jT
          }, null, OT), kT = TT.value, jT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jT
          })
        })(), kT.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, wT.h)(kT, OT), kT
      })(),
      Py = (() => {
        let TT, kT, cT, lT, MT, KT = [HO({
            ns: ly,
            name: "meta"
          })],
          OT = [],
          yT = [],
          fT = [],
          xT = [],
          IT = [],
          AT = [],
          CT = [];
        kT = class {
          constructor(TT, kT, cT, lT) {
            this.name = (0, wT.h)(this, yT, void 0), this.preserve = ((0, wT.h)(this, fT), (0, wT.h)(this, xT, void 0)), this.type = ((0, wT.h)(this, IT), (0, wT.h)(this, AT, void 0)), this.value = (0, wT.h)(this, CT), this.name = TT, this.value = kT, this.preserve = cT, this.type = lT
          }
        };
        return (0, wT.l)(kT, "ThreeMfMeta"), (() => {
          const jT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cT = [GO({
            name: "name"
          })], lT = [GO({
            name: "preserve"
          })], MT = [GO({
            name: "type"
          })], (0, wT.e)(null, null, cT, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name,
              set: (TT, kT) => {
                TT.name = kT
              }
            },
            metadata: jT
          }, yT, fT), (0, wT.e)(null, null, lT, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: TT => "preserve" in TT,
              get: TT => TT.preserve,
              set: (TT, kT) => {
                TT.preserve = kT
              }
            },
            metadata: jT
          }, xT, IT), (0, wT.e)(null, null, MT, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: TT => "type" in TT,
              get: TT => TT.type,
              set: (TT, kT) => {
                TT.type = kT
              }
            },
            metadata: jT
          }, AT, CT), (0, wT.e)(null, TT = {
            value: kT
          }, KT, {
            kind: "class",
            name: kT.name,
            metadata: jT
          }, null, OT), kT = TT.value, jT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jT
          }), (0, wT.h)(kT, OT)
        })(), kT
      })(),
      wy = (() => {
        let TT, kT, cT = [HO({
            ns: ly,
            name: "metadatagroup"
          })],
          lT = [];
        kT = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, wT.l)(kT, "ThreeMfMetadataGroup"), (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wT.e)(null, TT = {
            value: kT
          }, cT, {
            kind: "class",
            name: kT.name,
            metadata: MT
          }, null, lT), kT = TT.value, MT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          }), (0, wT.h)(kT, lT)
        })(), kT
      })(),
      my = (() => {
        let TT, kT, cT = [HO({
            ns: ly,
            name: "resources"
          })],
          lT = [];
        kT = class {
          constructor() {
            this.object = []
          }
        };
        return (0, wT.l)(kT, "ThreeMfResources"), (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wT.e)(null, TT = {
            value: kT
          }, cT, {
            kind: "class",
            name: kT.name,
            metadata: MT
          }, null, lT), kT = TT.value, MT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          }), (0, wT.h)(kT, lT)
        })(), kT
      })(),
      by = (() => {
        let TT, kT, cT, lT, MT, KT, OT, yT, fT, xT = [HO({
            ns: ly,
            name: "object"
          })],
          IT = [],
          AT = [],
          CT = [],
          jT = [],
          vT = [],
          tT = [],
          hT = [],
          NT = [],
          QT = [],
          ST = [],
          DT = [],
          aT = [],
          FT = [],
          rT = [],
          PT = [];
        kT = class {
          constructor(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oy.model;
            this.id = (0, wT.h)(this, AT, void 0), this.type = ((0, wT.h)(this, CT), (0, wT.h)(this, jT, void 0)), this.thumbnail = ((0, wT.h)(this, vT), (0, wT.h)(this, tT, void 0)), this.partnumber = ((0, wT.h)(this, hT), (0, wT.h)(this, NT, void 0)), this.name = ((0, wT.h)(this, QT), (0, wT.h)(this, ST, void 0)), this.pid = ((0, wT.h)(this, DT), (0, wT.h)(this, aT, void 0)), this.pindex = ((0, wT.h)(this, FT), (0, wT.h)(this, rT, void 0)), this.metadatagroup = (0, wT.h)(this, PT), this.id = TT, this.type = kT
          }
        };
        return (0, wT.l)(kT, "ThreeMfObject"), (() => {
          const mT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cT = [GO({
            name: "id"
          })], lT = [GO({
            name: "type"
          })], MT = [GO({
            name: "thumbnail"
          })], KT = [GO({
            name: "partnumber"
          })], OT = [GO({
            name: "name"
          })], yT = [GO({
            name: "pid"
          })], fT = [GO({
            name: "pindex"
          })], (0, wT.e)(null, null, cT, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: TT => "id" in TT,
              get: TT => TT.id,
              set: (TT, kT) => {
                TT.id = kT
              }
            },
            metadata: mT
          }, AT, CT), (0, wT.e)(null, null, lT, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: TT => "type" in TT,
              get: TT => TT.type,
              set: (TT, kT) => {
                TT.type = kT
              }
            },
            metadata: mT
          }, jT, vT), (0, wT.e)(null, null, MT, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: TT => "thumbnail" in TT,
              get: TT => TT.thumbnail,
              set: (TT, kT) => {
                TT.thumbnail = kT
              }
            },
            metadata: mT
          }, tT, hT), (0, wT.e)(null, null, KT, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: TT => "partnumber" in TT,
              get: TT => TT.partnumber,
              set: (TT, kT) => {
                TT.partnumber = kT
              }
            },
            metadata: mT
          }, NT, QT), (0, wT.e)(null, null, OT, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name,
              set: (TT, kT) => {
                TT.name = kT
              }
            },
            metadata: mT
          }, ST, DT), (0, wT.e)(null, null, yT, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: TT => "pid" in TT,
              get: TT => TT.pid,
              set: (TT, kT) => {
                TT.pid = kT
              }
            },
            metadata: mT
          }, aT, FT), (0, wT.e)(null, null, fT, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: TT => "pindex" in TT,
              get: TT => TT.pindex,
              set: (TT, kT) => {
                TT.pindex = kT
              }
            },
            metadata: mT
          }, rT, PT), (0, wT.e)(null, TT = {
            value: kT
          }, xT, {
            kind: "class",
            name: kT.name,
            metadata: mT
          }, null, IT), kT = TT.value, mT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: mT
          }), (0, wT.h)(kT, IT)
        })(), kT
      })(),
      zy = (() => {
        let TT, kT, cT = [HO({
            ns: ly,
            name: "mesh"
          })],
          lT = [];
        kT = class {
          constructor(TT, kT) {
            this.vertices = TT ?? new Jy, this.triangles = kT ?? new Hy
          }
        };
        return (0, wT.l)(kT, "ThreeMfMesh"), (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wT.e)(null, TT = {
            value: kT
          }, cT, {
            kind: "class",
            name: kT.name,
            metadata: MT
          }, null, lT), kT = TT.value, MT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          }), (0, wT.h)(kT, lT)
        })(), kT
      })(),
      Jy = (() => {
        let TT, kT, cT = [HO({
            ns: ly,
            name: "vertices"
          })],
          lT = [];
        kT = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, wT.l)(kT, "ThreeMfVertices"), (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wT.e)(null, TT = {
            value: kT
          }, cT, {
            kind: "class",
            name: kT.name,
            metadata: MT
          }, null, lT), kT = TT.value, MT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          }), (0, wT.h)(kT, lT)
        })(), kT
      })(),
      oy = (() => {
        let TT, kT, cT, lT, MT, KT = [HO({
            ns: ly,
            name: "vertex"
          })],
          OT = [],
          yT = [],
          fT = [],
          xT = [],
          IT = [],
          AT = [],
          CT = [];
        kT = class {
          constructor() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, wT.h)(this, yT, void 0), this.y = ((0, wT.h)(this, fT), (0, wT.h)(this, xT, void 0)), this.z = ((0, wT.h)(this, IT), (0, wT.h)(this, AT, void 0)), (0, wT.h)(this, CT), this.x = TT, this.y = kT, this.z = cT
          }
        };
        return (0, wT.l)(kT, "ThreeMfVertex"), (() => {
          const jT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cT = [GO({
            name: "x"
          })], lT = [GO({
            name: "y"
          })], MT = [GO({
            name: "z"
          })], (0, wT.e)(null, null, cT, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: TT => "x" in TT,
              get: TT => TT.x,
              set: (TT, kT) => {
                TT.x = kT
              }
            },
            metadata: jT
          }, yT, fT), (0, wT.e)(null, null, lT, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: TT => "y" in TT,
              get: TT => TT.y,
              set: (TT, kT) => {
                TT.y = kT
              }
            },
            metadata: jT
          }, xT, IT), (0, wT.e)(null, null, MT, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: TT => "z" in TT,
              get: TT => TT.z,
              set: (TT, kT) => {
                TT.z = kT
              }
            },
            metadata: jT
          }, AT, CT), (0, wT.e)(null, TT = {
            value: kT
          }, KT, {
            kind: "class",
            name: kT.name,
            metadata: jT
          }, null, OT), kT = TT.value, jT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jT
          }), (0, wT.h)(kT, OT)
        })(), kT
      })(),
      Hy = (() => {
        let TT, kT, cT = [HO({
            ns: ly,
            name: "triangles"
          })],
          lT = [];
        kT = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, wT.l)(kT, "ThreeMfTriangles"), (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wT.e)(null, TT = {
            value: kT
          }, cT, {
            kind: "class",
            name: kT.name,
            metadata: MT
          }, null, lT), kT = TT.value, MT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          }), (0, wT.h)(kT, lT)
        })(), kT
      })(),
      ey = (() => {
        let TT, kT, cT, lT, MT, KT, OT, yT, fT, xT = [HO({
            ns: ly,
            name: "triangle"
          })],
          IT = [],
          AT = [],
          CT = [],
          jT = [],
          vT = [],
          tT = [],
          hT = [],
          NT = [],
          QT = [],
          ST = [],
          DT = [],
          aT = [],
          FT = [],
          rT = [],
          PT = [];
        kT = class {
          constructor(TT, kT, cT) {
            this.v1 = (0, wT.h)(this, AT, void 0), this.v2 = ((0, wT.h)(this, CT), (0, wT.h)(this, jT, void 0)), this.v3 = ((0, wT.h)(this, vT), (0, wT.h)(this, tT, void 0)), this.p1 = ((0, wT.h)(this, hT), (0, wT.h)(this, NT, void 0)), this.p2 = ((0, wT.h)(this, QT), (0, wT.h)(this, ST, void 0)), this.p3 = ((0, wT.h)(this, DT), (0, wT.h)(this, aT, void 0)), this.pid = ((0, wT.h)(this, FT), (0, wT.h)(this, rT, void 0)), (0, wT.h)(this, PT), this.v1 = TT, this.v2 = kT, this.v3 = cT
          }
        };
        return (0, wT.l)(kT, "ThreeMfTriangle"), (() => {
          const mT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cT = [GO({
            name: "v1"
          })], lT = [GO({
            name: "v2"
          })], MT = [GO({
            name: "v3"
          })], KT = [GO({
            name: "p1"
          })], OT = [GO({
            name: "p2"
          })], yT = [GO({
            name: "p3"
          })], fT = [GO({
            name: "pid"
          })], (0, wT.e)(null, null, cT, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: TT => "v1" in TT,
              get: TT => TT.v1,
              set: (TT, kT) => {
                TT.v1 = kT
              }
            },
            metadata: mT
          }, AT, CT), (0, wT.e)(null, null, lT, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: TT => "v2" in TT,
              get: TT => TT.v2,
              set: (TT, kT) => {
                TT.v2 = kT
              }
            },
            metadata: mT
          }, jT, vT), (0, wT.e)(null, null, MT, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: TT => "v3" in TT,
              get: TT => TT.v3,
              set: (TT, kT) => {
                TT.v3 = kT
              }
            },
            metadata: mT
          }, tT, hT), (0, wT.e)(null, null, KT, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: TT => "p1" in TT,
              get: TT => TT.p1,
              set: (TT, kT) => {
                TT.p1 = kT
              }
            },
            metadata: mT
          }, NT, QT), (0, wT.e)(null, null, OT, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: TT => "p2" in TT,
              get: TT => TT.p2,
              set: (TT, kT) => {
                TT.p2 = kT
              }
            },
            metadata: mT
          }, ST, DT), (0, wT.e)(null, null, yT, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: TT => "p3" in TT,
              get: TT => TT.p3,
              set: (TT, kT) => {
                TT.p3 = kT
              }
            },
            metadata: mT
          }, aT, FT), (0, wT.e)(null, null, fT, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: TT => "pid" in TT,
              get: TT => TT.pid,
              set: (TT, kT) => {
                TT.pid = kT
              }
            },
            metadata: mT
          }, rT, PT), (0, wT.e)(null, TT = {
            value: kT
          }, xT, {
            kind: "class",
            name: kT.name,
            metadata: mT
          }, null, IT), kT = TT.value, mT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: mT
          }), (0, wT.h)(kT, IT)
        })(), kT
      })(),
      Gy = (() => {
        let TT, kT, cT = [HO({
            ns: ly,
            name: "components"
          })],
          lT = [];
        kT = class {
          constructor() {
            this.component = []
          }
        };
        return (0, wT.l)(kT, "ThreeMfComponents"), (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wT.e)(null, TT = {
            value: kT
          }, cT, {
            kind: "class",
            name: kT.name,
            metadata: MT
          }, null, lT), kT = TT.value, MT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          }), (0, wT.h)(kT, lT)
        })(), kT
      })(),
      Vy = (() => {
        let TT, kT, cT, lT, MT = [HO({
            ns: ly,
            name: "component"
          })],
          KT = [],
          OT = [],
          yT = [],
          fT = [],
          xT = [];
        kT = class {
          constructor(TT, kT) {
            this.objectid = (0, wT.h)(this, OT, void 0), this.transform = ((0, wT.h)(this, yT), (0, wT.h)(this, fT, void 0)), (0, wT.h)(this, xT), this.objectid = TT, this.transform = kT
          }
        };
        return (0, wT.l)(kT, "ThreeMfComponent"), (() => {
          const IT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cT = [GO({
            name: "objectid"
          })], lT = [GO({
            name: "transform",
            formatter: Fy
          })], (0, wT.e)(null, null, cT, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: TT => "objectid" in TT,
              get: TT => TT.objectid,
              set: (TT, kT) => {
                TT.objectid = kT
              }
            },
            metadata: IT
          }, OT, yT), (0, wT.e)(null, null, lT, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: TT => "transform" in TT,
              get: TT => TT.transform,
              set: (TT, kT) => {
                TT.transform = kT
              }
            },
            metadata: IT
          }, fT, xT), (0, wT.e)(null, TT = {
            value: kT
          }, MT, {
            kind: "class",
            name: kT.name,
            metadata: IT
          }, null, KT), kT = TT.value, IT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IT
          }), (0, wT.h)(kT, KT)
        })(), kT
      })(),
      Ey = (() => {
        let TT, kT, cT, lT = [HO({
            ns: ly,
            name: "basematerials"
          })],
          MT = [],
          KT = [],
          OT = [];
        kT = class {
          constructor(TT) {
            this.id = (0, wT.h)(this, KT, void 0), this.base = ((0, wT.h)(this, OT), []), this.id = TT
          }
        };
        return (0, wT.l)(kT, "ThreeMfBaseMaterials"), (() => {
          const yT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cT = [GO({
            name: "id"
          })], (0, wT.e)(null, null, cT, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: TT => "id" in TT,
              get: TT => TT.id,
              set: (TT, kT) => {
                TT.id = kT
              }
            },
            metadata: yT
          }, KT, OT), (0, wT.e)(null, TT = {
            value: kT
          }, lT, {
            kind: "class",
            name: kT.name,
            metadata: yT
          }, null, MT), kT = TT.value, yT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yT
          }), (0, wT.h)(kT, MT)
        })(), kT
      })(),
      Zy = (() => {
        let TT, kT, cT, lT, MT = [HO({
            ns: ly,
            name: "base"
          })],
          KT = [],
          OT = [],
          yT = [],
          fT = [],
          xT = [];
        kT = class {
          constructor(TT, kT) {
            this.name = (0, wT.h)(this, OT, void 0), this.displaycolor = ((0, wT.h)(this, yT), (0, wT.h)(this, fT, void 0)), (0, wT.h)(this, xT), this.name = TT, this.displaycolor = kT
          }
        };
        return (0, wT.l)(kT, "ThreeMfBase"), (() => {
          const IT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cT = [GO({
            name: "name"
          })], lT = [GO({
            name: "displaycolor"
          })], (0, wT.e)(null, null, cT, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name,
              set: (TT, kT) => {
                TT.name = kT
              }
            },
            metadata: IT
          }, OT, yT), (0, wT.e)(null, null, lT, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: TT => "displaycolor" in TT,
              get: TT => TT.displaycolor,
              set: (TT, kT) => {
                TT.displaycolor = kT
              }
            },
            metadata: IT
          }, fT, xT), (0, wT.e)(null, TT = {
            value: kT
          }, MT, {
            kind: "class",
            name: kT.name,
            metadata: IT
          }, null, KT), kT = TT.value, IT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IT
          }), (0, wT.h)(kT, KT)
        })(), kT
      })(),
      uy = (() => {
        let TT, kT, cT = [HO({
            ns: ly,
            name: "build"
          })],
          lT = [];
        kT = class {
          constructor() {
            this.item = []
          }
        };
        return (0, wT.l)(kT, "ThreeMfBuild"), (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wT.e)(null, TT = {
            value: kT
          }, cT, {
            kind: "class",
            name: kT.name,
            metadata: MT
          }, null, lT), kT = TT.value, MT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          }), (0, wT.h)(kT, lT)
        })(), kT
      })(),
      Xy = (() => {
        let TT, kT, cT, lT, MT, KT = [HO({
            ns: ly,
            name: "item"
          })],
          OT = [],
          yT = [],
          fT = [],
          xT = [],
          IT = [],
          AT = [],
          CT = [];
        kT = class {
          constructor(TT, kT, cT) {
            this.objectid = (0, wT.h)(this, yT, void 0), this.transform = ((0, wT.h)(this, fT), (0, wT.h)(this, xT, void 0)), this.partnumber = ((0, wT.h)(this, IT), (0, wT.h)(this, AT, void 0)), this.metadatagroup = (0, wT.h)(this, CT), this.objectid = TT, this.transform = kT, this.partnumber = cT
          }
        };
        return (0, wT.l)(kT, "ThreeMfItem"), (() => {
          const jT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cT = [GO({
            name: "objectid"
          })], lT = [GO({
            name: "transform",
            formatter: Fy
          })], MT = [GO({
            name: "partnumber"
          })], (0, wT.e)(null, null, cT, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: TT => "objectid" in TT,
              get: TT => TT.objectid,
              set: (TT, kT) => {
                TT.objectid = kT
              }
            },
            metadata: jT
          }, yT, fT), (0, wT.e)(null, null, lT, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: TT => "transform" in TT,
              get: TT => TT.transform,
              set: (TT, kT) => {
                TT.transform = kT
              }
            },
            metadata: jT
          }, xT, IT), (0, wT.e)(null, null, MT, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: TT => "partnumber" in TT,
              get: TT => TT.partnumber,
              set: (TT, kT) => {
                TT.partnumber = kT
              }
            },
            metadata: jT
          }, AT, CT), (0, wT.e)(null, TT = {
            value: kT
          }, KT, {
            kind: "class",
            name: kT.name,
            metadata: jT
          }, null, OT), kT = TT.value, jT && Object.defineProperty(kT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jT
          }), (0, wT.h)(kT, OT)
        })(), kT
      })();
    class dy {
      constructor(TT, kT) {
        this._object = new by(TT, kT)
      }
      withName(TT) {
        return this._object.name = TT, this
      }
      withThumbnail(TT) {
        return this._object.thumbnail = TT, this
      }
      withProperty(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = TT, this._object.id = kT, this
      }
      build() {
        return this._object
      }
      reset(TT, kT) {
        this._object = new by(TT, kT)
      }
    }
    class Ly extends dy {
      constructor(TT) {
        super(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oy.model), this._object.content = new Gy
      }
      withComponent(TT, kT) {
        return this._object.content.component.push(new Vy(TT, kT)), this
      }
    }
    class Ry extends dy {
      constructor(TT) {
        super(TT, Oy.model)
      }
      withPostProcessHandlers(TT, kT) {
        return this._vh = TT, this._th = kT, this
      }
      withData(TT) {
        return this._object.content = this._buildMesh(TT), this
      }
      withMaterial(TT, kT) {
        return this._object.pid = TT, this._object.pindex = kT, this
      }
      _buildMesh(TT) {
        const kT = this._buildVertices(TT.positions),
          cT = this._buildTriangle(TT.indices);
        return new zy(kT, cT)
      }
      _buildVertices(TT) {
        const kT = new Jy;
        if (TT)
          for (let cT = 0; cT < TT.length;) {
            const lT = TT[cT++],
              MT = TT[cT++],
              KT = TT[cT++];
            let OT = new oy(lT, MT, KT);
            this._vh && (OT = this._vh(OT)), kT.vertex.push(OT)
          }
        return kT
      }
      _buildTriangle(TT) {
        const kT = new Hy;
        if (TT)
          for (let cT = 0; cT < TT.length;) {
            const lT = TT[cT++],
              MT = TT[cT++],
              KT = TT[cT++];
            let OT = new ey(lT, MT, KT);
            this._th && (OT = this._th(OT)), kT.triangle.push(OT)
          }
        return kT
      }
    }
    class gy {
      constructor(TT) {
        this._m = new Ey(TT)
      }
      withColor(TT, kT) {
        this._m.base = this._m.base ?? [];
        let cT = this._m.base.find((kT => kT.name.toLowerCase() === TT.toLowerCase()));
        return cT ? (cT.displaycolor = this._rgbaToHex(kT), this) : (cT = new Zy(TT, this._rgbaToHex(kT)), this._m.base.push(cT), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(TT) {
        const kT = TT => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(TT, 1 / 2.2)))),
          cT = kT(TT.r).toString(16).padStart(2, "0").toUpperCase(),
          lT = kT(TT.g).toString(16).padStart(2, "0").toUpperCase(),
          MT = kT(TT.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof TT.a) {
          return `#${cT}${lT}${MT}${Math.round(Math.min(255,Math.max(0,255*TT.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${cT}${lT}${MT}`
      }
    }
    class Uy {
      constructor() {
        this._model = new ry, this._objects = new Map
      }
      withMetaData(TT, kT, cT, lT) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Py(TT, kT, cT, lT)), this
      }
      withMaterial(TT) {
        return TT instanceof gy && (TT = TT.build()), TT && (this._model.resources = this._model.resources ?? new my, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(TT)), this
      }
      withMesh(TT) {
        return TT instanceof Ry && (TT = TT.build()), this._model.resources = this._model.resources ?? new my, this._model.resources.object.push(TT), this
      }
      withComponents(TT) {
        return TT instanceof Ly && (TT = TT.build()), this._model.resources = this._model.resources ?? new my, this._model.resources.object.push(TT), this
      }
      withBuild(TT, kT, cT) {
        return this._model.build = this._model.build ?? new uy, this._model.build.item?.push(new Xy(TT, kT, cT)), this
      }
      withUnit(TT) {
        return this._model.unit = TT, this
      }
      reset() {
        return this._model = new ry, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    Uy.KnownMetaSet = new Set(ry.KnownMeta.map((TT => TT.toLowerCase())));
    class Yy {
      withContentType(TT) {
        this._cts || (this._cts = new hy);
        const kT = this._cts.items;
        return kT.some((kT => kT.ext === TT.ext && kT.ct === TT.ct)) || kT.push(TT), this
      }
      withRelationship(TT) {
        this._rs || (this._rs = new Qy);
        const kT = this._rs.items;
        return kT.some((kT => kT.id === TT.id)) || kT.push(TT), this.withContentType(new Ny("rels", xy.Relationships)), this
      }
      withModel(TT) {
        return TT instanceof Uy && (TT = TT.build()), this._m = TT, this.withContentType(new Ny("model", xy.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const TT = `${Ay}${Cy}`;
        if (!this._rs) {
          const kT = `/${TT}`;
          this.withRelationship(new Sy("rel0", ty.ThreeDimModel, kT))
        }
        return new Dy(this._cts, this._rs, this._m)
      }
    }
    class By {
      constructor(TT) {
        this._o = TT
      }
      get options() {
        return this._o
      }
      async serializeAsync(TT) {
        const kT = await this.ensureZipLibReadyAsync();
        if (!kT) return;
        const cT = kT.Zip,
          lT = kT.ZipDeflate;
        if (!cT || !lT) throw new Error("fflate Zip / ZipDeflate not available");
        const MT = function(TT, kT, cT) {
          const MT = new lT(kT, {
            level: 6
          });
          TT.add(MT);
          const KT = function(TT) {
              return {
                push: (kT, cT) => TT.push(kT, cT)
              }
            }(MT),
            OT = new cy(KT),
            yT = new Ty(OT).dec("1.0", "UTF-8");
          new iO(yT).serialize(cT), OT.finish()
        };
        for (var KT = arguments.length, OT = new Array(KT > 1 ? KT - 1 : 0), yT = 1; yT < KT; yT++) OT[yT - 1] = arguments[yT];
        const fT = this.toDocument(...OT);
        if (!fT) return;
        const xT = new cT(TT);
        MT(xT, vy, fT.contentTypes), MT(xT, `${Iy}${jy}`, fT.relationships), MT(xT, `${Ay}${Cy}`, fT.model), xT.end()
      }
      toDocument() {
        const TT = (new Uy).withUnit(this._o?.unit ?? Ky.millimeter);
        if (this.options.metadata)
          for (const MT in this.options.metadata) TT.withMetaData(MT, this.options.metadata[MT]);
        for (var kT = arguments.length, cT = new Array(kT), lT = 0; lT < kT; lT++) cT[lT] = arguments[lT];
        return (new Yy).withModel(this.toModel(TT, ...cT)).build()
      }
    }
    class Wy {
      static async SerializeToMemoryAsync(TT) {
        const kT = new Array;
        let cT = 0;
        for (var lT = arguments.length, MT = new Array(lT > 1 ? lT - 1 : 0), KT = 1; KT < lT; KT++) MT[KT - 1] = arguments[KT];
        if (await TT.serializeAsync((function(TT, lT, MT) {
            kT.push(lT), cT += lT.length
          }), ...MT), !cT) return;
        const OT = new Uint8Array(cT);
        let yT = 0;
        for (const fT of kT) OT.set(fT, yT), yT += fT.length;
        return OT
      }
    }
    class ny {}
    ny.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class py {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = TT, this._to = kT, this._step = cT, this._i = TT
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const TT = this._i;
        return this._i += this._step, TT
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class iy extends By {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...iy.DefaultOptions,
          ...TT
        })
      }
      toModel(TT) {
        for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
        cT = cT.filter((TT => TT instanceof Il.c || TT instanceof jT.e));
        const MT = new py,
          KT = TT,
          OT = new Map,
          yT = this.options.exportInstances ? [] : null;
        for (let fT = 0; fT < cT.length; fT++) {
          const TT = cT[fT];
          if (TT instanceof jT.e) {
            yT?.push(TT);
            continue
          }
          const kT = TT.name || `mesh${fT}`,
            lT = TT.getWorldMatrix(),
            xT = this._handleBabylonTo3mfMatrixTransformToRef(lT, ay.Zero()),
            IT = TT.kF;
          if (void 0 === IT) continue;
          const AT = 1 == IT.length;
          for (let cT = 0; cT < IT.length; cT++) {
            const lT = IT[cT],
              yT = this._extractSubMesh(TT, lT);
            if (yT) {
              const TT = AT ? `${kT}` : `${kT}_${cT}`,
                fT = new Ry(MT.next()).withData(yT).withName(TT).build();
              KT.withMesh(fT), KT.withBuild(fT.id, xT), OT.set(lT, fT)
            }
          }
        }
        if (yT && yT.length) {
          const TT = this._groupBy(yT, (TT => TT.hlT));
          for (const [kT, cT] of Array.from(TT.entries()))
            if (cT && cT.length)
              for (let TT = 0; TT < cT.length; TT++) {
                const lT = cT[TT].getWorldMatrix(),
                  MT = kT.kF;
                for (let TT = 0; TT < MT.length; TT++) {
                  const kT = MT[TT],
                    cT = OT.get(kT);
                  cT && KT.withBuild(cT.id, this._handleBabylonTo3mfMatrixTransformToRef(lT, ay.Zero()))
                }
              }
        }
        return KT.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const TT = globalThis;
          return TT.fflate || await MT.Tools.LoadScriptAsync(ny.FFLATEUrl), TT.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(TT, kT) {
        const cT = TT.FcT();
        if (!cT) return;
        const lT = TT.getVerticesData(iy._PositionKind);
        if (!lT) return;
        if (0 == kT.indexStart && kT.indexCount == cT.length) return {
          positions: lT,
          indices: cT
        };
        const MT = kT.indexStart,
          KT = new Map,
          OT = [],
          yT = new Uint32Array(kT.indexCount);
        for (let fT = 0; fT < kT.indexCount; fT++) {
          const TT = cT[MT + fT];
          let kT = KT.get(TT);
          if (void 0 === kT) {
            kT = KT.size, KT.set(TT, kT);
            const cT = 3 * TT;
            OT.push(lT[cT], lT[cT + 1], lT[cT + 2])
          }
          yT[fT] = kT
        }
        return {
          positions: new Float32Array(OT),
          indices: yT
        }
      }
      _groupBy(TT, kT) {
        const cT = new Map;
        for (const lT of TT) {
          const TT = kT(lT),
            MT = cT.get(TT);
          MT ? MT.push(lT) : cT.set(TT, [lT])
        }
        return cT
      }
      _handleBabylonTo3mfMatrixTransformToRef(TT, kT) {
        const cT = TT.multiplyToRef(iy._R_BJS_TO_3MF, uT.d.Zero()).m;
        return kT.values = [cT[0], cT[1], cT[2], cT[4], cT[5], cT[6], cT[8], cT[9], cT[10], cT[12], cT[13], cT[14]], kT
      }
    }
    iy.DefaultOptions = {
      unit: Ky.meter,
      exportInstances: !1
    }, iy._PositionKind = "position", iy._R_BJS_TO_3MF = uT.d.RotationX(Math.PI / 2).multiply(uT.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);