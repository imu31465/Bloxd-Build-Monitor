export const id = 235;
export const ids = [235, 241];
export const modules = {
  41978: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => gT
    });
    var WT = mT(41908),
      zT = mT(40088);
    let MT = !1;

    function gT() {
      MT || (MT = !0, zT.c.prototype._sphericalPolynomialTargetSize = 0, zT.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(zT.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = WT.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((TT => {
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
  37364: (TT, UT, mT) => {
    mT.d(UT, {
      Color3: () => WT.d,
      e: () => WT.g
    });
    var WT = mT(37367);
    (0, WT.k)()
  },
  37885: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT
    });
    var WT = mT(37889);
    class zT {
      static GetPlanes(TT) {
        const UT = [];
        for (let mT = 0; mT < 6; mT++) UT.push(new WT.e(0, 0, 0, 0));
        return zT.GetPlanesToRef(TT, UT), UT
      }
      static GetNearPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[2], UT.normal.y = mT[7] + mT[6], UT.normal.z = mT[11] + mT[10], UT.d = mT[15] + mT[14], UT.normalize()
      }
      static GetFarPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[2], UT.normal.y = mT[7] - mT[6], UT.normal.z = mT[11] - mT[10], UT.d = mT[15] - mT[14], UT.normalize()
      }
      static GetLeftPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[0], UT.normal.y = mT[7] + mT[4], UT.normal.z = mT[11] + mT[8], UT.d = mT[15] + mT[12], UT.normalize()
      }
      static GetRightPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[0], UT.normal.y = mT[7] - mT[4], UT.normal.z = mT[11] - mT[8], UT.d = mT[15] - mT[12], UT.normalize()
      }
      static GetTopPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[1], UT.normal.y = mT[7] - mT[5], UT.normal.z = mT[11] - mT[9], UT.d = mT[15] - mT[13], UT.normalize()
      }
      static GetBottomPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[1], UT.normal.y = mT[7] + mT[5], UT.normal.z = mT[11] + mT[9], UT.d = mT[15] + mT[13], UT.normalize()
      }
      static GetPlanesToRef(TT, UT) {
        zT.GetNearPlaneToRef(TT, UT[0]), zT.GetFarPlaneToRef(TT, UT[1]), zT.GetLeftPlaneToRef(TT, UT[2]), zT.GetRightPlaneToRef(TT, UT[3]), zT.GetTopPlaneToRef(TT, UT[4]), zT.GetBottomPlaneToRef(TT, UT[5])
      }
      static IsPointInFrustum(TT, UT) {
        for (let mT = 0; mT < 6; mT++)
          if (UT[mT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  37889: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(37188);
    class zT {
      constructor(TT, UT, mT, zT) {
        this.normal = new WT.p(TT, UT, mT), this.d = zT
      }
      cWT() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new zT(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let UT = 0;
        return 0 !== TT && (UT = 1 / TT), this.normal.x *= UT, this.normal.y *= UT, this.normal.z *= UT, this.d *= UT, this
      }
      transform(TT) {
        const UT = zT._TmpMatrix;
        TT.invertToRef(UT);
        const mT = UT.m,
          WT = this.normal.x,
          MT = this.normal.y,
          gT = this.normal.z,
          nT = this.d,
          HT = WT * mT[0] + MT * mT[1] + gT * mT[2] + nT * mT[3],
          kT = WT * mT[4] + MT * mT[5] + gT * mT[6] + nT * mT[7],
          jT = WT * mT[8] + MT * mT[9] + gT * mT[10] + nT * mT[11],
          lT = WT * mT[12] + MT * mT[13] + gT * mT[14] + nT * mT[15];
        return new zT(HT, kT, jT, lT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, UT, mT) {
        const WT = UT.x - TT.x,
          zT = UT.y - TT.y,
          MT = UT.z - TT.z,
          gT = mT.x - TT.x,
          nT = mT.y - TT.y,
          HT = mT.z - TT.z,
          kT = zT * HT - MT * nT,
          jT = MT * gT - WT * HT,
          lT = WT * nT - zT * gT,
          LT = Math.sqrt(kT * kT + jT * jT + lT * lT);
        let pT;
        return pT = 0 !== LT ? 1 / LT : 0, this.normal.x = kT * pT, this.normal.y = jT * pT, this.normal.z = lT * pT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, UT) {
        return WT.p.Dot(this.normal, TT) <= UT
      }
      signedDistanceTo(TT) {
        return WT.p.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new zT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, UT, mT) {
        const WT = new zT(0, 0, 0, 0);
        return WT.copyFromPoints(TT, UT, mT), WT
      }
      static FromPositionAndNormal(TT, UT) {
        const mT = new zT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, UT, mT)
      }
      static FromPositionAndNormalToRef(TT, UT, mT) {
        return mT.normal.Gw(UT), mT.normal.normalize(), mT.d = -TT.dot(mT.normal), mT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, UT, mT) {
        const zT = -(UT.x * TT.x + UT.y * TT.y + UT.z * TT.z);
        return WT.p.Dot(mT, UT) + zT
      }
    }
    zT._TmpMatrix = WT.e.Identity()
  },
  37185: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      Matrix: () => WT.e,
      Quaternion: () => WT.f,
      RegisterMathVector: () => WT.j,
      TmpVectors: () => WT.l,
      Vector2: () => WT.o,
      JB: () => WT.p,
      Vector4: () => WT.t
    });
    var WT = mT(37188);
    (0, WT.j)()
  },
  38229: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      constructor(TT, UT, mT, WT) {
        this.x = TT, this.y = UT, this.width = mT, this.height = WT
      }
      toGlobal(TT, UT) {
        return new WT(this.x * TT, this.y * UT, this.width * TT, this.height * UT)
      }
      toGlobalToRef(TT, UT, mT) {
        return mT.x = this.x * TT, mT.y = this.y * UT, mT.width = this.width * TT, mT.height = this.height * UT, this
      }
      clone() {
        return new WT(this.x, this.y, this.width, this.height)
      }
    }
  },
  41908: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => kT
    });
    var WT = mT(37188),
      zT = mT(37226),
      MT = mT(40080),
      gT = mT(37196),
      nT = mT(37367);
    class HT {
      constructor(TT, UT, mT, WT) {
        this.name = TT, this.worldAxisForNormal = UT, this.worldAxisForFileX = mT, this.worldAxisForFileY = WT
      }
    }
    class kT {
      static _NearestPow2Floor(TT) {
        return TT <= 1 ? 1 : 1 << Math.floor(Math.log2(TT))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(TT) {
        if (!TT.isCube) return null;
        TT.KF()?.eB().flushFramebuffer();
        const UT = TT.getSize().width,
          mT = TT._sphericalPolynomialTargetSize,
          WT = mT > 0 ? this._NearestPow2Floor(mT) : 0,
          zT = !TT.noMipmap && !0 === TT._texture?.generateMipMaps,
          MT = WT > 0 && WT < UT && zT,
          gT = MT ? Math.max(0, Math.round(Math.log2(UT / WT))) : 0,
          nT = MT ? Math.max(1, Math.floor(UT / Math.pow(2, gT))) : UT,
          HT = TT.readPixels(0, gT, void 0, !1),
          kT = TT.readPixels(1, gT, void 0, !1);
        let jT, lT;
        TT.isRenderTarget ? (jT = TT.readPixels(3, gT, void 0, !1), lT = TT.readPixels(2, gT, void 0, !1)) : (jT = TT.readPixels(2, gT, void 0, !1), lT = TT.readPixels(3, gT, void 0, !1));
        const LT = TT.readPixels(4, gT, void 0, !1),
          pT = TT.readPixels(5, gT, void 0, !1),
          BT = TT.gammaSpace,
          ZT = WT > 0 && WT < UT && !MT;
        return new Promise((TT => {
          Promise.all([kT, HT, jT, lT, LT, pT]).then((mT => {
            let [zT, MT, gT, HT, kT, jT] = mT, lT = nT;
            if (ZT) {
              const TT = 4;
              zT = this._DownsampleFace(zT, UT, WT, TT), MT = this._DownsampleFace(MT, UT, WT, TT), gT = this._DownsampleFace(gT, UT, WT, TT), HT = this._DownsampleFace(HT, UT, WT, TT), kT = this._DownsampleFace(kT, UT, WT, TT), jT = this._DownsampleFace(jT, UT, WT, TT), lT = WT
            }
            const LT = {
              size: lT,
              right: MT,
              left: zT,
              up: gT,
              down: HT,
              front: kT,
              back: jT,
              format: 5,
              type: zT instanceof Float32Array ? 1 : 0,
              gammaSpace: BT
            };
            TT(this.ConvertCubeMapToSphericalPolynomial(LT))
          }))
        }))
      }
      static _AreaElement(TT, UT) {
        return Math.atan2(TT * UT, Math.sqrt(TT * TT + UT * UT + 1))
      }
      static _DownsampleFace(TT, UT, mT, WT) {
        const zT = TT instanceof Float32Array ? TT : Float32Array.from(TT),
          MT = mT * mT * WT,
          gT = new Float32Array(MT),
          nT = UT / mT,
          HT = 1 / (nT * nT);
        for (let jT = 0; jT < mT; jT++) {
          const TT = Math.floor(jT * nT),
            MT = Math.floor((jT + 1) * nT);
          for (let kT = 0; kT < mT; kT++) {
            const lT = Math.floor(kT * nT),
              LT = Math.floor((kT + 1) * nT),
              pT = (jT * mT + kT) * WT;
            for (let mT = 0; mT < WT; mT++) {
              let nT = 0;
              for (let gT = TT; gT < MT; gT++)
                for (let TT = lT; TT < LT; TT++) nT += zT[(gT * UT + TT) * WT + mT];
              gT[pT + mT] = nT * HT
            }
          }
        }
        if (TT instanceof Float32Array) return gT;
        const kT = new(0, TT.constructor)(MT);
        for (let jT = 0; jT < MT; jT++) kT[jT] = gT[jT] + .5 | 0;
        return kT
      }
      static ConvertCubeMapToSphericalPolynomial(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const mT = UT > 0 ? this._NearestPow2Floor(UT) : 0;
        if (mT > 0 && TT.size > mT) {
          const UT = 5 === TT.format ? 4 : 3,
            WT = ["right", "left", "up", "down", "front", "back"],
            zT = {};
          for (const MT of WT) zT[MT] = this._DownsampleFace(TT[MT], TT.size, mT, UT);
          TT = {
            ...TT,
            ...zT,
            size: mT
          }
        }
        const WT = new MT.b;
        let HT = 0;
        const kT = 2 / TT.size,
          jT = kT,
          lT = .5 * kT,
          LT = lT - 1;
        for (let MT = 0; MT < 6; MT++) {
          const UT = this._FileFaces[MT],
            mT = TT[UT.name];
          let pT = LT;
          const BT = 5 === TT.format ? 4 : 3;
          for (let MT = 0; MT < TT.size; MT++) {
            let ZT = LT;
            for (let jT = 0; jT < TT.size; jT++) {
              const LT = UT.worldAxisForFileX.scale(ZT).add(UT.worldAxisForFileY.scale(pT)).add(UT.worldAxisForNormal);
              LT.normalize();
              const cT = this._AreaElement(ZT - lT, pT - lT) - this._AreaElement(ZT - lT, pT + lT) - this._AreaElement(ZT + lT, pT - lT) + this._AreaElement(ZT + lT, pT + lT);
              let vT = mT[MT * TT.size * BT + jT * BT + 0],
                fT = mT[MT * TT.size * BT + jT * BT + 1],
                qT = mT[MT * TT.size * BT + jT * BT + 2];
              isNaN(vT) && (vT = 0), isNaN(fT) && (fT = 0), isNaN(qT) && (qT = 0), 0 === TT.type && (vT /= 255, fT /= 255, qT /= 255), TT.gammaSpace && (vT = Math.pow((0, zT.Clamp)(vT), gT.f), fT = Math.pow((0, zT.Clamp)(fT), gT.f), qT = Math.pow((0, zT.Clamp)(qT), gT.f));
              const iT = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const TT = Math.max(vT, fT, qT);
                if (TT > iT) {
                  const UT = iT / TT;
                  vT *= UT, fT *= UT, qT *= UT
                }
              } else vT = (0, zT.Clamp)(vT, 0, iT), fT = (0, zT.Clamp)(fT, 0, iT), qT = (0, zT.Clamp)(qT, 0, iT);
              const bT = new nT.d(vT, fT, qT);
              WT.addLight(LT, bT, cT), HT += cT, ZT += kT
            }
            pT += jT
          }
        }
        const pT = 6 * (4 * Math.PI) / 6 / HT;
        return WT.scaleInPlace(pT), WT.convertIncidentRadianceToIrradiance(), WT.convertIrradianceToLambertianRadiance(), MT.c.FromHarmonics(WT)
      }
    }
    kT._FileFaces = [new HT("right", new WT.p(1, 0, 0), new WT.p(0, 0, -1), new WT.p(0, -1, 0)), new HT("left", new WT.p(-1, 0, 0), new WT.p(0, 0, 1), new WT.p(0, -1, 0)), new HT("up", new WT.p(0, 1, 0), new WT.p(1, 0, 0), new WT.p(0, 0, 1)), new HT("down", new WT.p(0, -1, 0), new WT.p(1, 0, 0), new WT.p(0, 0, -1)), new HT("front", new WT.p(0, 0, 1), new WT.p(1, 0, 0), new WT.p(0, -1, 0)), new HT("back", new WT.p(0, 0, -1), new WT.p(-1, 0, 0), new WT.p(0, -1, 0))], kT.MAX_HDRI_VALUE = 4096, kT.PRESERVE_CLAMPED_COLORS = !1
  },
  41686: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT.k,
      g: () => WT.q
    });
    var WT = mT(40151);
    (0, WT.y)()
  },
  38045: (TT, UT, mT) => {
    function WT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const UT = 16 * Math.random() | 0;
        return ("x" === TT ? UT : 3 & UT | 8).toString(16)
      }))
    }
    mT.d(UT, {
      c: () => WT
    })
  },
  41953: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT
    });
    var WT = mT(41939),
      zT = mT(41957);
    class MT {
      static ExpandRGBDTexture(TT) {
        const UT = TT._texture;
        if (!UT || !TT.isRGBD) return;
        const zT = UT.eB(),
          MT = zT.getCaps(),
          gT = UT.isReady;
        let nT = !1;
        MT.textureHalfFloatRender && MT.textureHalfFloatLinearFiltering ? (nT = !0, UT.type = 2) : MT.textureFloatRender && MT.textureFloatLinearFiltering && (nT = !0, UT.type = 1), nT && (UT.isReady = !1, UT._isRGBD = !1, UT.invertY = !1);
        const HT = async () => {
          const MT = zT.isWebGPU,
            gT = MT ? 1 : 0;
          UT.isReady = !1, MT ? await mT.e(347).then((() => mT(61264))) : await mT.e(329).then((() => mT(61266)));
          const nT = new WT.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, zT, !1, void 0, UT.type, void 0, null, !1, void 0, gT);
          nT.externalTextureSamplerBinding = !0;
          const HT = zT.createRenderTargetTexture(UT.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: UT.samplingMode,
            type: UT.type,
            format: 5
          });
          nT.onEffectCreatedObservable.addOnce((mT => {
            mT.executeWhenCompiled((() => {
              nT.onApply = TT => {
                TT._bindTexture("textureSampler", UT), TT.setFloat2("scale", 1, 1)
              }, TT.KF()?.postProcessManager.directRender([nT], HT, !0), zT.restoreDefaultFramebuffer(), zT._releaseTexture(UT), nT && nT.dispose(), HT._swapAndDie(UT), UT.isReady = !0
            }))
          }))
        };
        nT && (gT ? HT() : TT.onLoadObservable.addOnce(HT))
      }
      static async EncodeTextureToRGBD(TT, UT) {
        let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return UT.eB().isWebGPU ? await mT.e(348).then((() => mT(61282))) : await mT.e(330).then((() => mT(61273))), await (0, zT.d)("rgbdEncode", TT, UT, WT, 1, 5)
      }
    }
  },
  61126: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      AsyncLoop: () => WT.c,
      RegisterTools: () => WT.f,
      Tools: () => WT.j,
      className: () => WT.m
    });
    var WT = mT(40201);
    (0, WT.f)()
  },
  41995: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT
    });
    class WT {
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
        for (const UT of this._workerInfos)
          if (UT.idle) return this._execute(UT, TT), !0;
        return !1
      }
      _execute(TT, UT) {
        TT.idle = !1, TT.workerPromise.then((mT => {
          UT(mT, (() => {
            const UT = this._pendingActions.shift();
            UT ? this._execute(TT, UT) : TT.idle = !0
          }))
        }))
      }
    }
    class zT extends WT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.DefaultOptions;
        super([]), this._maxWorkers = TT, this._createWorkerAsync = UT, this._options = mT
      }
      push(TT) {
        if (!this._executeOnIdleWorker(TT))
          if (this._workerInfos.length < this._maxWorkers) {
            const UT = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(UT), this._execute(UT, TT)
          } else this._pendingActions.push(TT)
      }
      _execute(TT, UT) {
        TT.timeoutId && (clearTimeout(TT.timeoutId), delete TT.timeoutId), super._execute(TT, ((mT, WT) => {
          UT(mT, (() => {
            WT(), TT.idle && (TT.timeoutId = setTimeout((() => {
              TT.workerPromise.then((TT => {
                TT.terminate()
              }));
              const UT = this._workerInfos.indexOf(TT); - 1 !== UT && this._workerInfos.splice(UT, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    zT.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61159: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      AbstractThreeMfSerializer: () => hn,
      BVHExporter: () => xg,
      ContentTypeFileName: () => Zn,
      DefaultXmlSerializerFormatOptions: () => rg,
      DefaultXmlSerializerNumberOptions: () => Cg,
      EXT_lights_area: () => vz,
      EXT_mesh_gpu_instancing: () => VW,
      EXT_texture_avif: () => Mg,
      EXT_texture_webp: () => Ug,
      GLTF2Export: () => sW,
      GLTFData: () => kT,
      GetXmlFieldMeta: () => sg,
      GetXmlName: () => Fg,
      IsQualifiedName: () => dg,
      KHR_draco_mesh_compression: () => AW,
      KHR_interactivity: () => jz,
      KHR_lights_punctual: () => gz,
      KHR_materials_anisotropy: () => bz,
      KHR_materials_clearcoat: () => xz,
      KHR_materials_coat: () => Xz,
      KHR_materials_diffuse_roughness: () => FM,
      KHR_materials_diffuse_transmission: () => Vz,
      KHR_materials_dispersion: () => Kz,
      KHR_materials_emissive_strength: () => Ez,
      KHR_materials_fuzz: () => lM,
      KHR_materials_ior: () => Az,
      KHR_materials_iridescence: () => mM,
      KHR_materials_openpbr: () => CM,
      KHR_materials_sheen: () => gM,
      KHR_materials_specular: () => ZM,
      KHR_materials_transmission: () => qM,
      KHR_materials_unlit: () => YM,
      KHR_materials_volume: () => wM,
      KHR_materials_volume_scatter: () => XM,
      KHR_texture_basisu: () => oM,
      KHR_texture_transform: () => GM,
      Known3mfRelationshipTypes: () => cn,
      KnownI3mfContentType: () => kn,
      Matrix3d: () => en,
      MatrixFormatter: () => Yn,
      ModelFileName: () => pn,
      NumberFormatter: () => Gg,
      OBJExport: () => gT,
      Object3dDirName: () => Ln,
      OpenXmlContentTypesNamespace: () => nn,
      OpenXmlRelationshipsNamespace: () => Hn,
      RegisterEXT_lights_area: () => qz,
      RegisterEXT_mesh_gpu_instancing: () => CW,
      RegisterEXT_texture_avif: () => ng,
      RegisterEXT_texture_webp: () => Wg,
      RegisterKHR_draco_mesh_compression: () => Tz,
      RegisterKHR_interactivity: () => Lz,
      RegisterKHR_lights_punctual: () => Hz,
      RegisterKHR_materials_anisotropy: () => ez,
      RegisterKHR_materials_clearcoat: () => wz,
      RegisterKHR_materials_coat: () => Qz,
      RegisterKHR_materials_diffuse_roughness: () => VM,
      RegisterKHR_materials_diffuse_transmission: () => Cz,
      RegisterKHR_materials_dispersion: () => Gz,
      RegisterKHR_materials_emissive_strength: () => Dz,
      RegisterKHR_materials_fuzz: () => pM,
      RegisterKHR_materials_ior: () => TM,
      RegisterKHR_materials_iridescence: () => zM,
      RegisterKHR_materials_openpbr: () => KM,
      RegisterKHR_materials_sheen: () => HM,
      RegisterKHR_materials_specular: () => vM,
      RegisterKHR_materials_transmission: () => bM,
      RegisterKHR_materials_unlit: () => xM,
      RegisterKHR_materials_volume: () => aM,
      RegisterKHR_materials_volume_scatter: () => QM,
      RegisterKHR_texture_basisu: () => RM,
      RegisterKHR_texture_transform: () => EM,
      RelationshipDirName: () => jn,
      RelationshipFileName: () => Bn,
      ResolveFormatOptions: () => Sg,
      ResolveNumberOptions: () => Kg,
      STLExport: () => Hg,
      ST_ObjectType: () => gn,
      ST_Unit: () => Mn,
      StringXmlWriter: () => Un,
      ThreeDimModelNamespace: () => Wn,
      ThreeMf: () => Dn,
      ThreeMfBase: () => Vn,
      ThreeMfBaseMaterials: () => Pn,
      ThreeMfBuild: () => un,
      ThreeMfComponent: () => Fn,
      ThreeMfComponents: () => sn,
      ThreeMfComponentsBuilder: () => Kn,
      ThreeMfContentType: () => fn,
      ThreeMfContentTypes: () => vn,
      ThreeMfDocument: () => On,
      ThreeMfDocumentBuilder: () => En,
      ThreeMfItem: () => Cn,
      ThreeMfMaterialBuilder: () => Gn,
      ThreeMfMesh: () => an,
      ThreeMfMeshBuilder: () => Sn,
      ThreeMfMeta: () => xn,
      ThreeMfMetadataGroup: () => dn,
      ThreeMfModel: () => Jn,
      ThreeMfModelBuilder: () => Nn,
      ThreeMfObject: () => tn,
      ThreeMfObjectBuilder: () => rn,
      ThreeMfRelationship: () => bn,
      ThreeMfRelationships: () => qn,
      ThreeMfResources: () => wn,
      ThreeMfSerializer: () => TH,
      ThreeMfSerializerGlobalConfiguration: () => An,
      ThreeMfTriangle: () => Qn,
      ThreeMfTriangles: () => In,
      ThreeMfVertex: () => Xn,
      ThreeMfVertices: () => yn,
      ToQualifiedString: () => ug,
      TokenType: () => Rg,
      TriangleSetsNamespace: () => zn,
      USDZExportAsync: () => Yg,
      Utf8XmlWriterToBytes: () => mn,
      XmlAttr: () => Ig,
      XmlBuilder: () => Tn,
      XmlElem: () => Qg,
      XmlIgnore: () => Xg,
      XmlName: () => yg,
      XmlNameToParts: () => Vg,
      XmlSerializer: () => og,
      _ConvertToGLTFPBRMetallicRoughness: () => xm,
      _SolveMetallic: () => Jm,
      __IGLTFExporterExtension: () => nT
    });
    var WT = mT(37185),
      zT = mT(61126),
      MT = mT(40413);
    class gT {
      static OBJ(TT, UT, mT, gT) {
        const nT = [];
        let HT = 1,
          kT = 1;
        UT && (mT || (mT = "mat"), nT.push("mtllib " + mT + ".mtl"));
        for (let jT = 0; jT < TT.length; jT++) {
          const mT = TT[jT],
            lT = mT.name || `mesh${jT}}`;
          nT.push(`o ${lT}`);
          let LT = null;
          if (gT) {
            const TT = mT.computeWorldMatrix(!0);
            LT = new WT.Matrix, TT.invertToRef(LT), mT.bakeTransformIntoVertices(TT)
          }
          if (UT) {
            const TT = mT.material;
            TT && nT.push("usemtl " + TT.id)
          }
          const pT = mT.geometry;
          if (!pT) {
            zT.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const BT = pT.getVerticesData("position"),
            ZT = pT.getVerticesData("normal"),
            cT = pT.getVerticesData("uv"),
            vT = pT.vWT();
          let fT = 0,
            qT = 0;
          if (!BT || !vT) {
            zT.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const iT = TT[0].KF().useRightHandedSystem ? 1 : -1;
          for (let TT = 0; TT < BT.length; TT += 3) nT.push("v " + BT[TT] * iT + " " + BT[TT + 1] + " " + BT[TT + 2]), fT++;
          if (null != ZT)
            for (let TT = 0; TT < ZT.length; TT += 3) nT.push("vn " + ZT[TT] * iT + " " + ZT[TT + 1] + " " + ZT[TT + 2]);
          if (null != cT)
            for (let TT = 0; TT < cT.length; TT += 2) nT.push("vt " + cT[TT] + " " + cT[TT + 1]), qT++;
          const bT = ["", "", ""],
            OT = (mT.material || mT.KF().defaultMaterial)._getEffectiveOrientation(mT),
            [eT, YT] = OT === MT.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let TT = 0; TT < vT.length; TT += 3) {
            const UT = [String(vT[TT] + HT), String(vT[TT + eT] + HT), String(vT[TT + YT] + HT)],
              mT = [String(vT[TT] + kT), String(vT[TT + eT] + kT), String(vT[TT + YT] + kT)],
              WT = UT,
              zT = null != cT ? mT : bT,
              MT = null != ZT ? UT : bT;
            nT.push("f " + WT[0] + "/" + zT[0] + "/" + MT[0] + " " + WT[1] + "/" + zT[1] + "/" + MT[1] + " " + WT[2] + "/" + zT[2] + "/" + MT[2])
          }
          gT && LT && mT.bakeTransformIntoVertices(LT), HT += fT, kT += qT
        }
        return nT.join("\n")
      }
      static MTL(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const mT = [],
          WT = TT.material;
        mT.push("newmtl " + UT), mT.push("  Ns " + WT.specularPower.toFixed(4)), mT.push("  Ni 1.5000"), mT.push("  d " + WT.alpha.toFixed(4)), mT.push("  Tr 0.0000"), mT.push("  Tf 1.0000 1.0000 1.0000"), mT.push("  illum 2"), mT.push("  Ka " + WT.ambientColor.r.toFixed(4) + " " + WT.ambientColor.g.toFixed(4) + " " + WT.ambientColor.b.toFixed(4)), mT.push("  Kd " + WT.diffuseColor.r.toFixed(4) + " " + WT.diffuseColor.g.toFixed(4) + " " + WT.diffuseColor.b.toFixed(4)), mT.push("  Ks " + WT.specularColor.r.toFixed(4) + " " + WT.specularColor.g.toFixed(4) + " " + WT.specularColor.b.toFixed(4)), mT.push("  Ke " + WT.emissiveColor.r.toFixed(4) + " " + WT.emissiveColor.g.toFixed(4) + " " + WT.emissiveColor.b.toFixed(4));
        WT.ambientTexture && mT.push("  map_Ka " + WT.ambientTexture.name), WT.diffuseTexture && mT.push("  map_Kd " + WT.diffuseTexture.name), WT.specularTexture && mT.push("  map_Ks " + WT.specularTexture.name), WT.bumpTexture && mT.push("  map_bump -imfchan z " + WT.bumpTexture.name), WT.opacityTexture && mT.push("  map_d " + WT.opacityTexture.name);
        return mT.join("\n")
      }
    }
    var nT = 0,
      HT = mT(41686);
    class kT {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const TT in this.files) {
          const UT = this.files[TT],
            mT = new Blob([UT], {
              type: (0, HT.d)(TT)
            });
          zT.Tools.Download(mT, TT)
        }
      }
    }
    var jT = mT(41309),
      lT = mT(41256),
      LT = mT(41768),
      pT = mT(41265),
      BT = mT(39907),
      ZT = mT(37216),
      cT = mT(37364),
      vT = mT(37226);
    const fT = vT.HighestCommonFactor,
      qT = {
        ...vT,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: fT
      };
    var iT = mT(41957),
      bT = mT(41284),
      OT = mT(41727),
      eT = mT(41732),
      YT = mT(41976);
    (0, YT.RegisterDumpTools)();
    var JT = mT(40095),
      xT = mT(40102),
      dT = mT(38800),
      wT = mT(40215),
      tT = mT(40602),
      aT = mT(41953);
    let yT = 0;
    const XT = (TT, UT, mT, WT) => {
        if (!TT[mT]) {
          const zT = TT.useDelayedTextureLoading;
          TT.useDelayedTextureLoading = !1;
          const MT = TT._blockEntityCollection;
          TT._blockEntityCollection = !1;
          const gT = tT.g.CreateFromBase64String(UT, WT + yT++, TT, !0, !1, tT.g.BILINEAR_SAMPLINGMODE);
          TT._blockEntityCollection = MT;
          const nT = TT.eB().getLoadedTexturesCache(),
            HT = nT.indexOf(gT.getInternalTexture()); - 1 !== HT && nT.splice(HT, 1), gT.isRGBD = !0, gT.wrapU = tT.g.CLAMP_ADDRESSMODE, gT.wrapV = tT.g.CLAMP_ADDRESSMODE, TT[mT] = gT, TT.useDelayedTextureLoading = zT, aT.b.ExpandRGBDTexture(gT);
          const kT = TT.eB().OB.add((() => {
            gT.isRGBD = !0;
            const UT = TT.onBeforeRenderObservable.add((() => {
              gT.isReady() && (TT.onBeforeRenderObservable.remove(UT), aT.b.ExpandRGBDTexture(gT))
            }))
          }));
          TT.SF.add((() => {
            TT.eB().OB.remove(kT)
          }))
        }
        return TT[mT]
      },
      IT = TT => XT(TT, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      QT = TT => XT(TT, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      sT = TT => XT(TT, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAABGSklEQVR42u3cx4tb6brvcf0DmmpUoxrUoAY1KCgwFAZjME1jjGmMTWNs2tjY2MY2DjjinHPOOeec3dXOOeecU2VlaSksSc/9aq1X0pJKqmD3Dn3upvnCSe197v38nlfS2fscW1x+kbCMloAsFY/skEY5KbVySb7JXfkoT+WtvJGX8ol/67s8lDr+o065KW65Jl7+q/zyF3/nWTpJx+gQ/7H94pPd/Oe38yduEZds4E9dK/Wykj95GX/OYvkq8/kz58h7mcmfP41/hMnyTCbIIxkn9/nv5raMlOsyTK7IELkgg6RKBshp6ScnpI8ckd5yQHrJHvmd/3578I/QjX+E32SNdOEfobMskV9lAf+vmiOdZIZ0lKnSQSZKe/7kSv7kdjKchkoFf2q59Ke+UsafWCY9pZQ/rZQ/rUS6Umcp5k8q5k8p5k8p4k8p4k8o4u928Hc7+Dsd/F1mpWLn7zArVhWpHOlsRvYC/Yf++t8A/j8fQCxrADvTA/j6vwH8/zGAaOzX/w3g/+cBaJEuEkqMMQbg/t8A2jiA8n/+AHzB7qLFx8K2zBhAA5Q16QE8+98A/q8PwOXvLYHYePEllsO666cGcPR/A/jnDaDRN0C80Ynija8QV2K3GsBlywDe5h3AVYAvAv0X4IUH4P7fAP7bB9DgGyau0BRx6yvFGd8j9YlTUp24LF+g/gDKGwbwAqwnwD1o5QD2/VcPYMT/BmD9q94/Thq0GeKMrpbG2B6pi5+S78kBJAoNoDFrAFU/PICP/+UD6PL/xwDqAlOlNjBH6sMQ6XulJnZavsWvyGcG8D7BABJvsgZwxxiAK2sAZ9ID8P/gAF78QwbQ/v/eAGqDc6Tav1BqtA1SE90v1fpp+Rq7Ip/id+UdA3jNAJ4nPsnjRGYAN0C9whe8C+kB+BmAP2sAu/jPNx1AjRrAlzwDeNqKARz/3wD+7r+qtSXy1QdLcJN8Dx+Qb9Ez8kW/Ih9id+Vt/Jm8sgzgfqL5ARwxBuBjAN70ADbznSE5gDWMJzWARekBvGsygLFy738D+Hf+9T20Sj77VsuXwFb5oh2SL5Gz8lG/Ku8ZwJvYM3kZfyPP4h/lUeIbA6iV24lGuZ5IDcALjQ8aP4+zOYCD/Pt70wNwqQE0WAbwLWcAr/MM4FbOAP78Bw+g6L97AN/CG+Sjb6N89O+Qj9oR+Rg+J++jV+Wtfk9eMYAXsTfyhAE8jH+TuwzgVqLBGMDlhFvOJ7zyZyI5AB8D8EHjyxrAtjYN4EnWAEYYA7j8XzCAXwoMoOJvHsB/aARfwtvkvS/ZHnkfOCbvtCp5G74mb6L35KX+TJ4xgMexj/IgOYB4rdyMN8i1hFMuGQPwyDlGcJoRHE+YAzgA/l7jn1VwqwE0WgZQLUuNAXxmAB+MAcyQVxClBvCQAdxtxQD25x1A1x8ewB9tGEAljO3+7wzgU2SPvPPvlje+A/LGf0LeBP+S16Fr8jJyT55Hn8kT/Y080j/K/dhXuROvYQD1cjWeHIBL/lIDOEXH6TAdoD0JcwBbGcAmBrCeL4Br+AWQO4DZ/MQ0B/C8mQGczxnA4YIDaM0LUNmqAfz2LxmA/b9xAB8iB+VN4IC88h2Rl/5T8jJwXl5o1+V56L48jTyTx9HX8kD/IHf1r3IrViPXY/VyJd4oF+IuqYq75SzYJ0E/ZgzAI/tpD6/DDgaylZdiE9efHMBqYwDfGcBXBvBJ5uUMYJIxgAeWAVyzDODcv2gAA35oAEV5BpAZwT9sAO+iR+VV4Ii88B2X576z8tx/QZ4Fb8gT7b48Dj+Vh5HXcj/6Qe7oX+SmXi3XYnVyOdbAAJwMwCVnGMHJuEeOAn/IGICbAbiMAWzhC+NGvjOs49fD6kSNrFADWGgM4L0awEs1gMeWAdxUA7jUxgGs+Le8AP+nBvAmelJeBE/IM99peeqrkif+S/I4cFMeMYAHoadyP/xK7kTey63oF7muf5creq1c4hU4H2uUczGXnGYEJxjBETpE+4DfbQzAqQZQzwBqZVWiWlbwS2JJ4ossTHxUA3ijBvDMGMB4YwB3ZFTeAZz6FwzA+gL0+jcN4L/sl8BL/Yw8004Df04e+87LI98Veei/JQ+CD+Se9lTuhF7JrfB7uRH5JNei3+SyXiMX9Hqp0hvkbMwppxjBcTrCEA7SXtrF67Ad/C1c/wauf60awHJjAJ8ZwAeZm3gnsxJvZHrihUxNpAZwvxUDOKQGsJsBbP+bB/A7df/JAfzD/mcBz3WuXvtTHvmr5IHvotz3XZN7DOBu4IHcCT6VW9oruRF6J9fCn+RK5KtcjFbL+Wid/MkITuuNcpIRHKPDjGA/8HtoJ98RtvFrYTNfGDeAv5bnf2XiOwP4KosTn2SBMYC3DOCVMYApiacyKfFIxifuy5hEcgA3YLrKAC7KYPlLBjKA/nKSARzLM4DNagCr/4UD6PRvGsB/YARPda5eOy8PAhfknu+y3PVdlzu+O3LL/0BuBp7Kde2lXNPeyZXQR7kU/irnI9+lKlojZxnBKV6B44zgCB3iI2E/7aEd4G8Ff1O8Tjbw03FNvFpW8jNyGc//Yp7/BYn3lgE8ZwBPZKIxgHsM4LaMSlyXEYkrMjTBABJVDOCsMYC+lgH0VAPo/hMDqGhxAJ1bOYCyf+4AHuuX+Ky/yMVfAv6q3PLdlJsM4Ib/oVxnANeCL+WK9lYuaR/kQuiLVIW/yblItZyO1spJRnCMl+AwQzhAe2kXXxB38B1hC18WN4K/HvzV8e8M4KssjX+WRfGPMp/nfw7P/8zES5mWHsADGZe4ywBuGQMYbgzggjmAxBnpn2AAiaPSJ5EcwD4GsAuubWoA6/83gB/964F+Re6Grsjt4FW56b8uN3y35LrvrlzzPZQr/qdyOfBSLgbfyHntvVRpn+Rc6KucCX+Xk5EaOR6plSOM4FC0XvYzhD20U6+TbeBvidXKBn42rot9l1Vc/4r4FwbwiQF8kHnxtzI7/lpmxl8wgGcyOfE4awAjE9cYwGXLAE4zgBMM4AgDOCi9E3ulZ4IBJBhAYpN0S6QGsByyxX/bAEqyBtDxJwbwX/xL4J5+TW6Hr8nN4HW57r8B/G254rsnl32P5BIDuOB/IecDb6Qq+F7OaR/ljPZFToW+yXFGcJQRHGYEB3gN9tJufiHsoK18UdzET8YN4K+JfZOVsa+yPPZJlsQ+yML4OwbwhgG8khnx5zI1/lQmxx/JhPh9BnBHRiduqgFcYgDnGcCfWQP4Iz2AndkDSKySLgkGkGAAifnyS2K2GsCUv2UAxQUH8A//HwbdiV2Xm2HwtRtyNXAL/DtyyXdfLjCA876n8hcDqAq8lnOBd3Im+EFO8QqcYATHGMFhRnAwXC37GcIe2sl3g+18SdwC/kZ+Mq7Xv8lq/SsD+CzLYh9lcey9LIi9lbmx1zIr/lKmx58xgCcyKf6QAdyTsfHbMjp+Q0bGrxoDGMIABiXOqQEcVwM4wAD2qAFsVQNYl38ACQaQYAAJBpBgAIm2DKDrDwzg7/gp+G8ewc3YTbkevilXtZs897flov8u+PfBfyRVDOCc74Wc9b+S04G3cpJX4ETwoxzTPssR7ascYgT7+U6whyHs4svhDtoa/S6b+Lm4Afi1+hdZpX+WFfpHWap/kEWxdzI/9kbmxF7JzNgLmR57KlPijxnAAxkfv8sAbjEAvgDGr8iw+EUZEv9LBsX5CZjgJ6AxgMMMgF8AxgB2SA9jABuNAXRt7QASDCDBABIMIMEAEgwgwQAShQbQ+n9VUNP/WcA/4HvA9RhXH7nFl7xbciFwR84zgCrfA/mTAZzzPZEzvudy2v9STvrfyHFegaO8AkcYwSFGsJ+XYC/fCXbTDoawLfJNtvBTcSOtj36RNdFPshL85eAv0d/JQv2tzNNfyWzwZ8aeybTYE5kceyQTY/dlfOyOjInflFHxawzgMgO4wACqGMBZGRDnJ2D8mPSNH8oZwBY1gLUMYCUDWMYAFlkGML1tA0gwgAQDSDCARKEBFP7nA/6RA7jCAC5FbssFDfwg+P57wD8A/pGcZgAnGcAJ30s57n8tR/1v5XDgvRxiBPsZwV4+DvYwhJ38OthOW8JfZBNtiHyWtZFPsir6UVZEP8jS6DtZBP4C/bXM1V/KLP25zNCfylT9MQN4IBNid2Vc7LaMid2QUTGe/xif/3E+/+N/MoDTagD8AkgOIM4A4rulZ5wBxJMD2JBnAPPyDGAs+KPyDKBf4QEkGECCASQYQIIBJP5d/7OAf+MILvH/8Rcid+Sv0B35kwGcC9zn4h/IKQZwkgEc9z2TY3wMHPG9kkO8AgcZwX5GsJcR7GEEO/liuJ0hbAl9ks20IfxR1tHqyAdZGXkvyyPvZEn0rSyMvpZ50ZcyR+f69WcyHfwp+kOZpN+XCfodGcsQR/N9ZGTsCgO4KENjf8ngGJ//DKB//DgD4BdAnC+A8X0MgF8A8e3mAOIb5Lf4GukaTw5gqWUAsywDmNDGAXQrPIAEA0gwgAQDSDCABANIMIBEqZE9UaIqVhVZcqSzJf5LBnCep7cqeoefd3flrHaPz/r7PPcPuPpH4D+RowzgMK/AIV6BA3wX2M8I9vJ9YDcfBzv5TrCdIWzVPshm2hj6IOtpTei9rAy/kxW0NPJWFkVeywLw50ZfyOzoM5kRfSLT9EcyWX8gE/W7Ml6/LWP1GzKaXyQjYjz/sQsMoIoBnJWBsZPSP8bnf+wwA+ALYHwvA+ALYHwbA9icPYA4A4gvlF/jc+WXeGoAk/+GAfzSigGUtXEAagS5/bsHUMUAzkXv8tv+Lt/w78lJBnCcARxlAEd8j4F/KgcZwH5egX2MYA8j2M0IdjCC7bQ1+E4200btnayntbQq9FZW0rLwG1kSfiULIy9lXuSFzIk8k1ngT48+lqnRBzI5es+4/nH6TRmjX5dR+hUZoV+SYfp5GRLj+Y/x/BsD4PM/xvMf2y+9Y3z+x3YwgK0MgF8AcX4CxlczgBUMYEn2AOLTpGOcAcStAxje4gBK/5MDSGfL9K/86xwDOM0ATjGAEwzgePC+HAk8kMP+R+A/lgO8Avt5BfYygj2MYBcj2MEItvOdYEvgjWymjcE3sp7Wam9kNa2k5aFXsoQWhV/K/PBzmRt+JrMjT2RG5LFMizyUKdH7Mol/3PHRWzI2al7/SP2yDNe5fr1KhujnZJDOAHSe/9gRywB2mwOI8fzH+AIY4ydgfBUDWK4GsEANYGb2AOIMIM4A4gwgzgDihb4E9rAMoMvfMIDiHxxAzghy+7v+Os0ATgJxnAEcYwBHGMAhBnDQ/xD4R1z9Y+CfyG5GsJMR7GAE22gLvww2M4SNgVeyntYGX8lqWqm9kuXaS1lKi7UXsiD0XOaFnsmc8BOZGX4s08MPZWrkvkyO3JWJfPkcF+X6o9dkVJTrj15kAOcZwJ8yWD8jA/WT5gB0nn/9gPyh8/zHdjGA7WoAfAGMrZXfYiula4wBxBYbA/glPqd1A4gzgDgDiDOAOAOIM4A4A4gzgDgDiDOAeGoAnZoZQL7vAcXNvgI/PYC21NxfJ+N35Difw0cZwJHQPb7h35cDDGA/HwN7eQX2MIBdDGAHbWcEW2kLQ9jECDb4X8h6Wht4IatpZfCFLKelwefgP5eF2jOZrz2VOaHHMiv0SGaEHsi08H2Zwj/WJPAnRG7KuMh1GRO5ygAuMYALMizK9UfN6x+on5D++lHpqx9iAFy/vkd66Tulp87nf2yzGsAaYwBdYvwCiPEFMMZPwNgc6RSbwQCmMoBJDGA8AxhjGcCQtg0gzgDiDCDOAOK5A/iZL4L/xhEU6hgDOMIADnORB/kiuF+7L/sYwR5GsJtXYCevwA5GsI22MILNfCfYxAg20Hpa638uq2ll4LksDzyTpbQ4+EwWBp+A/0Tmao9ltvZIZoI/PQQ+/xiTwuCHwQ9fl7Hgj45clpGRCzI8wvVHuf7oGRkU5fqjxxkAz79+kOvfxwB2MwCef53Pf32TdNfXSzedz39jAEvVAPgFEJttDKBjjAHEGECMAcSSAxj59wwgzgDiDCBeYfZPHsARBnCIL2IHGcB+cPbyMbCHAeziy+AOXoHtvgdc/SPwH4H/WDbSBoawjtbQKlrpfyLLaWngiSymhYHHMj/4WOYGH4H/QGYyqun8uVO1uzI5dFsmhm7K+BD44WsyOnxFRoUvygjwh0W4/shZGRzh+qMnGMBR6Rfl+qP7jee/t87zr/P861sYAJ//Op//Op//Ol8AdT7/db4A6skB8AUwxi+AGD8BYxNpnDmA2EhpFxtGDCDGAGL9pTzGAGIMINaaAXTMGUBqBAwgXqZiAPF/0AAOxW/LAQawL3JH9jCA3SDtDN7jW/592ea/L1sZwRZGsMn3EPhHXP0jWUtrGMIqWknLaan/sSzmI2MhzQ88lLm8ILMZ0kyaEbwr07Q7MkW7JZO0mzJBuy7jQtdkTAj80CUZGT4vw8NVMjR8jgGclkERrj/C9Ue4/uhBcwBRnv/oDukZ3coAeP51nn+dz3+dz3+dz3+dz3+dL4A6XwB1BqAzAJ0B6AxAZwD6aKnUrQMY2HQAMQYQYwCx/AMoNgaQ7xXIMwCjYktFmbIG4PjPDmA/A9jH7/A9DGBX+I7sAGo7I9gWuMu3/Ht80bvP1d8H/z5X/wD8B7KaVjKIFbSMlvLvL6aFjGU+zeXvmc3fO4s/Y0bwjkwL3pYpwQz+eO2qjNWuyOgkfuiCjAhVybAQ+OEzMjh8UgaGjzOAI9Ivckj6RsCPcP2RXQyA649y/dGN0j3K8x9drQawjAEsYgDzGQBfAHW+AOp8AdT5AqjzBTA9gBHSTmcA+mCp0AeC38wAYgwgxgBi/BSMtXUApc0PIO5IZzOym/0nRrAnfkv26LdkV/S27OCzeXvojmxlBFuA2wTgBv9dvujdBf8eV3+fq78vK733ZQUt499eQotoIc3nv2Yu/7WzaZb/jswI3JZpgVsyJXBTJgevy8TgNRkfTOJfljHaRRmlga/9JcNDf8rQ0BkZEjolg0I8/eGj0j98WPqFuf7wPgawhwFw/ZFt8ntkMwPYwADWMgCe/yjPf5TP/yjPf5TnPzqb+AKo8/mvT1IDGEujmg5AZwA6A9AZgJ4aQPecAfxqDiDGAGIMIMYAYgwg1poBlLRtAAWzFe5nB7ArflN2MoAd/B7fFr4lW/iM3qzd5rf9HdkQuAP+Hb7o3eHq73L1Zsu9d2UpLaFF/PsLaL7vjsyl2b7b4N+SGTTNfxP8GzI5AH4giX9FxgUvyZhgEv+8jNSqZLj2pwzTzsoQ7bQMDnH9oWMyIMT1h7j+8H4GAH6Y6w9vZwBbGABf/iJcf4Rv/xGuP8LzH+H5j/L8R3n+ozz/0enEAKIMIDo+ZwBDCw9AZwA6A9AZgN6KAcQYQIwBxMpVDCBWavT3DqCFEfzMQHYwgO36TdnK7/EtDGBT6JZs4LN6A0/2Oq53DVe8yn8b+Ns8+be5+js8+Xdksfe2LKQFNM93C/xb4N+Smb6bMoOm+a/LFJrsvyYT/VdkQuCyjAuAH7ggo4PgB6tkRPCcgT80ia+dlEEaT792RPqD3y8Efmiv/BHazQC4/jCf/WGuP8z1h9dJtzDPf2QFA1jKAHj+Izz/EZ7/yExjAB2jU2iiOYAoXwCjDCA63DIAfgHo/ahP4QHoDEBnADoD0Ns4gFiJqlhVZCl3AI5/3QBaalv8hmzRb8jm6A3ZyO/yDXxDX89n9VpaHbwpq3i+V3LNy2kZwEtoMS303pT5NI/m0GzvDfCvy3Sa5rsmU2iy74qJ778k4/wXZWwSPwB+APzAORkePCNDg6dlSNDEH5jE18DXDkhfbZ/00bj+0E7pFeL6Q1x/aKP0CK1nAFx/mOsPc/3hJbRQOofnMQCe/wjPf4TP/wif/5EJDIDP/yif/9GR5gCifAGM8gsgah1A79YNQGcAOgPQGYDOAHQGoLd2AHlGoLIZ2bP7dw1gS/y6bNKvy4YoRa7LOn6br9FuyGpaGbwhK3jCl/tv8C3/BvA3ePJv8OTfAP+6zKU5NItmeq/JdJrmuwr+FfAvy0TfJZnguwj+BRnrPy+j/VUyyv+niR8AP3BKhgROyOAg+MEjMiB4iAFk8P/QdklvbYf00rh+jevXuP4Q1x/i+kMMIMSXvxDPf5jnP8zzH55FPP9hnv/IJHMAEZ7/CAOIjGAAw7IHEGUAUQYQZQDRnj8+AL1cxQD0UiO7/pMDyJvN7O8cwMb4NdmgX5P10WuyNnJN1vDbfBW/0VfybX0FX9yW8fm9hBbznC/kqhfQPJpLswGf5b0qM7xXwL8iU2mK95JMoonAj/ddkHG+8zLW95eM9iXxz8kI/1kZ7j8tw/wnTfzAMRkUAD8AfvCg9Avul75B8IMZ/J4a169x/RrXr62RbtpK+U1bzgC4/hDXH+L6Qzz/YZ7/8DTi+Q/z/Id5/iNjaJQxgHYRBhBhABF+Akb6Nx1AlAFEGUCUAUQZQJQBRFszgArLAMoyAzAqtlRklncAjtYPoFA/MoAN8auyLnZV1uhXZXXkqqwMX5UVoauynJ9qS/nGvoQWBa7yE+8qP/Gugn9F5tBsmgn4DO9lmQb4VJrivQj+BZlI473nZZz3L/CrwP9TRvnA952R4T6F7z8ug/3g+4/IwCR+4ID0C4Af2CN9ArsYAPjBbdIzCH4Q/CDXr/HNX1sFPp/9Gp/9Gtevcf2hucTzH+L5D3H9ockMgOsP8/yH+fwP8/yHef7DfP5HBmcGEOlLfP5HGECEAUR6GAMoif6WPYAoA4gygCgDiLZ1ACVNB2DkSGfT/6YBtKXUANbGr8ia2BVZpV+RlZErsiJ8RZaFrshSfqcvpkV8c18QuAL+ZX7iXQb/ksyimTQd9GmgTwV8Mk0CfQKN91aBXyVjvH/KaO85GeU9A/5p8E/KMN8JGeoD33fUxPcfkgF+8P3g+8H3gx/YIb0D26RXYIv0DGyS3wMbGMBa6R5cLd2CyetfxgC4fo3r17h+jevXZhLPf4jrD/H8h8YTz39otGUAQ4jnP8zzH2YAYQYQTg6gV2YAEQYQYQARBhApMIAoA4gygCgDiFaYNRlAaQsDyDMC3d60f+UIkq2OX5KVMdIvyfLoJVkaviRLQpdkkXZJFtJ8frbN49v7XJrNF7lZPO0zeNqn0zTQpwA+mSZy7RNAHw/6ONDH0GjgR3lPywjvKRnuBd97HPxj4B+RQb7DMtAHvu+A9Pftk74+he8H3w++H3y/wg+sk+4B8APgB3n6g1x/kG/+wQUMgOvXuH6N69f48qdx/RrPv8bzr/H8h3j+Q3z+h3j+Qzz/IQYQSg6A5z/M858cQJgBhHn+wwwg3M0ygM5SHGEAEQYQYQARBhApMIAoA4iWqcCP/k0DaJItu58dwMr4RVkRuyjL9IuyNHpRFkcuyqLQRVmgXZD5NDd4Qebw7X02zeSL3Ayaxuf6VD7Xp4A+CfSJNAH48aCP9Z4F/wz4p2Uk8COAH+49YeJ7j8pgL/jeQzLQe1AGePcb+P3A7+sD3we+D3wf+D7w/eD7wfevMfEDK2ipdA0sli4B8INcf5DrD3L9Qa5f4/o1rl/j+dd4/rXRxPVrXL/G86/x/Id4/kNcf4gBhBhAiOc/xC8A6wDCDCDchRhAOM8AIgwgwgAiDCDSzACiJapiS3/zAFpboQEsj1+QZbELskS/IIujF2Rh5IIsCJ+XeaHzMlc7L7P5zT6LZgb+kun+v/h9XwV+Fd/y/5RJNBH0JPw44MeCPoZGeU7JSM9JGeE5IcM9x2WY55gM8RwB/7DCP2Die/dKPy/43l3Sx7tD/vBuk97eLQxgEwPYIL/71ksP3xoGsEq6+cH38/T7efoDPP2B+TRHfg3wzT/A9QenEtcf5PqDPP9Bnn+N69e4fo3r14aYA9AYgMYANJ7/0B9qADz/IQYQ4gtgiAGEcgYQZgBhBhBmAOE8AzBiAJEyVakaQYEBpHOks/07RpCvpfHzsjh2Xhbp52VB9LzMj/wl88J/yZzQXzJbq5KZNCNYJdP57T6Vn3BT+CY/mS90k2iC7yz4Z8A/beCP5tpHAT8S+BHADwd+GPBDPIdlsOeQDPIclIGe/TLAs0/6e/ZIP89u6evZKX08Fnwv+F7wvQrfB76P6/cpfP8iAt/P0++fbeD/EuCbf4DrD0wirj/I9Qd5/oMMIMgAguYAKjSef43nX+tnDkBjABrPv8YAtB6WAfD8hxhAiAGEGEAoZwBhBhBmAGEGEC4wALJHSlTFZs0NIJ29af/KASyOV8nCWJUs0KtkXrRK5kaqZE64SmaF/gT/T5mhnZNpwXMyld/uUwJnZZL/DD/xzoB/mp95SfhTXP1J8E+Afxz84+Cb8EMN/EPgHwT/gMLfq/B3gb8D/O3yh2er9PaA7wHfo/C94HvB9ybxl9MS6eoD38fT75tn4P/q5+n38/T7uX4/1+/n+gPjCPwA+AGe/wDPf5DnP8j1B7n+INcfTA6A51/rrQbwuzkAjQFoXL/GALScAYQ6SVGIAYQYQChnAEYMIFymKjAAoyJLjjwjsLciW3Y/M4CF8T9lfuxPmaefkznRczI7ck5mhc/JjNA5ma6dlWk0JXhGJgdOyySayG/48f5T/L4/yU+8k+CfAP84X/aOAX+Uqz+i8A8p/AMyyL1fBrr3yQD3Hunv3i393Dulrxt8N/hu8N0WfM866eEB32Pid/OC7+Vz3wu+18Tv7OPp9/H0+7h+H9fvM/E7+nn6/Tz9fj77/Ul8rj/A9Qd4/gNcf2CAGgDXH2QAQQYQtA6A67cOQGMAGvga15/GVwMIMYAQAwhVmOUOgOzhElWxWZMBqBGobEb27FozgNZUaADz4udkbuyszNHPyqzoWZkZOSMzwmdkeui0TNVOyxSaHDwlEwOnZELgJPgnZZz/BPjHZYzPhB/Jl7sRfLkbzlM/DHQT/4AMBn4Q8AOBN/F3gb9D4W8Dfwv4m6WXe6P0dIPvBt9t4nf3gO8B3wO+hy99ngUMAHwv+F7wveB7k/g8/T6efh9Pv4/r93H9fq7fD76f6/dz/X6uPzDQGEB5gOsPMIDAH2oAPP9BBhDk+oMMIJgaQBL/18wANAagga+1V+UMIMQAQmWqUqMmAzAqyslhlh5AnhHkzWYW/cnmxk/L7NhpmaWflpnR0zI9clqmhU/J1NAp8E/KJJoYPCkTgidkfOA4+MD7j8lofseP4ufcSOBH8OVuOOjDeOqHAj+Ep34w8IPcexX+bvB3Sj8X+K7t0se1Vf5wge/aJL1cG8BfD/5aA7+HG3w3+G7w3SZ+V89CBsDnvofPfQ9Pv4en38vT7+Xp93L9Xp5+L9fv4/p9XL+P6/cNJ67fz/X7uX4/A/Bz/f4kPtcfAD/A9QcYQKCHZQDgB7n+IAMIMoBgMwPQGIBWoWIAWs4AQiWqYksFBkC2dPbsmhtAS7U0gNnxUzIzdkpm6KdkevSkTIuclCnhkzI5dEIm0UTtuIwPAh88JmMDx8A/KqP9R0x8fseP4Fv9MK8F3pMfvh/wfV3bwN8C/mbwN5r4LvBd4LtW00rp7loB/jLw+cx3g+8G3w2+ey4pfM90At8DvoenP4nvHUtcv5fr944w8X1cv4/r94Hv4/n39zMH4Of6/QzA35N+NwcQYAABrj/AAAI5AwgygCADCDKAYAq/wACMSo3sWolZ1giKcnKks4UKDCBvNrPITzYzflJmxIDXT8jU6AmZEjkuk8PHZSJNCB2T8doxGacdlbHBIzImALz/sIz0Aw/+cN9B8A/w+34/+PvA38uXvT3g7wZ/F/g71NVvM67exN9kwV8H/ppsfBf4riW0SLq6ePZdFnw3+G7w3eC7JzMAnn4PT7+Hp98DvmcUA+D6vVy/F3wv1+8dpAbA9fsYgK8PMQBfL2MApckB+MH3c/1+BuBXAwgwgAADCDCAAAMIWAYQrFQxgGCFWXMDMCpWFWWXOwAje/7yDaClWhrA9PhxmRY7LlN14PVjMil6TCZGjsqE8FEZHzoiYzXgtcMyOnhIRgUOgX9QRvgPgL9fhtFQ7z4Zwu/5wcAP4mfdQOAHAG/ibwN/a/rq/wC+N/C9uPqeXL2Jv0rhL8+DP4/Ad4Hvmkngu5L4Uwh89wQC383T7+Hp94Dv4fo9XL8HfA/X7wXfy/V7wfdy/d4kfm9zAD7wfVy/jwH4UgMA3w++H3w/+H4T3xhAgAEEGEAA/EA7I3MA5aoyVamRPZhvALkjcKSzpbMXHkE6W3bhH2xq/JhMiR0F/6hM0o/IxOgRGR85IuPCh2Vs6BD4h2Q0jQoelJGBA+Dvl+H+JP4+GerbA/4eGezdDf4ufubtUPjbwd8K/hbwN6ur36Dw10lPJ/hOrt650qi7M4m/FPjFOfhzmuK7wHeB7wLfNd7A7+AG3831u8F3D6OhBn47D9fvAd/D9XuS+H3MAXjB9/L8exmAt4eBX+oD38f1+xiAjwH4LAPwg+/voMoZQIABBMpVZWbWAaQrttSKARSquRE0V6EBTIkfkUkx4MGfoB+W8dFDMi5ySMaGwQ8dBP+AjNT2y4gg8IF9Msy/V4b6gQd/sA94r4I38LeDv5Vv+lsU/qb01fd2rpdewPd0rgF/lcJfAf4y6eYE3wm+c6F0dYLvBN8JvhN8Zwb/l1x8F/gunn4X+C7wXcNNfDfX7wbfzfW7+zOAfuYAPOB7uH4PA/AofC/X7+X6vQzAywC8DMCrBuBjAD4G4GMAPvB97c0B+BmAH3wjBuAvN0sNIFBqZA+UWMoZQDpHOluwFQPIyta0UBubFD8kE2OHwD8k42ls9KCMiRyQ0eH9Miq038TX9snw4F4ZFthj4vt3g79TBvl2yEBvEh94zzYD3sTfDP5G8JNXn4RfR2vAXw3+SoW/XOHz5DsXKfz5FvxZJr4TfCf4TvCd4Dsn5sEfaeK7ePpd4Lu4flcSf4AxgHI3+G6u380A3En8nuYAPAzAwwA84HvA9yh8L/he8L2dVJYB+CpV4PsqzFID8JepwDcqMUsNIF2RJUfTERjZm9aaAbQm6wAmxA/K+NhBGacfkLH6fhkT3S+jI+CH98nI0F7w98hwGhbcLUMDu8DfKYP9OxT+dhng3QY+8NSX3/R9+U3fB3gTf526+tW0SuGbV9+dq+/WyNU3gt+4QLo2gt84l8BvBL9xBmXjd0riO8F3gu8E3wm+cyQDMPErXUMVPtfvAt/F9bu4fhf4riR+b3MAbvDd4LvBd3P9bssAPAzAwwA8DMCj8I0YgJcBeCtVDMCrBuArV5WpwPdZBmBUbKnILDUAS7Z0drNgc9my+5ExjI/vl3Gx/Sa+vk9GR/fKqAjwYeBDwGvAa8AHd8qQwA4T379dBvq2gb9F+nuT+En4TdLHvUHhrwd/bfrqewL/u+XquzcuUfgLFf48hT87G78R/EbwG8FvBL9xPPGlr3EMAxht4jt5+p3gO8F3gu9M4g+04PdVAwDfBb6L63cxABcDcCUHAL4bfDf47s5GxW4G4FYD8IDv6aBiAB7wPe0yAzAqV5Wp1AB8Jari7FIDMHJkZUuVGkCz2ZqOoLnyDWBcfJ+Mie2V0Trw+h4ZGd0jIyK7ZXh4twwL7QIfeA34IPAB4P1bZYB/iwzwJfE3Sz/vJunr2Wjg/+FeD/468NfwZS9z9b9z9T0M+KUKf5HCn6/w5yj8mQp/msKfrPAnZOM3gt8IfiP4jeA3JvGHGPjtnOA7uX4n+E7wneA7uX5nHnwX1+9iAC4G4GIALvBdCt/dScUA3OC726vMATiMwPeUq8pUpeYAjEpUxZl8RTk5skoPwG8vnHUALdXSKMbE98jo2B4TX98tI6K7ZHhkpwwL75ChoR3gb5fB2jYZFNwqAwNbDPz+/s3S37cJ/I3gc/Ue4N3rjKvvDXwvftr1VPC/c/U9LFffTV29ic/VN4DfMEs6N4DfMJ3AbwC/AfwG8BvAbwC/gWe/AfwGK/5wE78R/EauvxH8RvAbuf5G8BtT+L3NATgZgJMBOMF38s3facW3DMDFAFzguzoaFbkYgEvhG4HvrlCVqywDILtRicoyAG9RTg6z1ADS2ZuWdxC2pgXa0Oj4bhkV2wX+Lhmh75Th0R0yLAJ+eLsMCW0Df6sM0rbIwCD4AeD9wPuA922Qvt714K+TPzzAu9cY8L34Td/Tlbn6Hs7k1S82rr6b5eq7NiTxZyv8GRb8KQp/Yn78BvAbwG8Av2Eogd8AfgP4DeA3JPG5fmMAfxD4jeA3gt8IfiPX32gOoCQ5ACcDcILvBN8JvvMXMzWANL5RpYoBuCpU5WbJARiVGtndJZmSA0hXlJMjMwKypbNn8jWXLZO/DaUGMDK+U0bEdshwHXgaGgU+Anx4qwwObTHxtc0yILhJ+gc2Sj//BgO/j2+d9PGuBX8N+Fy9e6XC5+pdyw34HnzD7+40r76b5eq7GlefxJ9pwZ+ajV8Pfj349eDXg18Pfj349SMYQC7+oAx+A/gN4Ddw/Q3gN4DfAH6DBb+R628EvxH8RvAbOxsVN6YGAL6zo1GRkwE426vAd7bLPwBXmarUyO6yDMBdbKkou+QALNnS2c28LWXLHkFL5Q5hRBz82Hbwt8lQGhIFPgJ8GPjQZvA3yQBto/QPbpB+AfD9wPuA966h1dLbs8rAT8L3BP531zKFvxj8RQp/PvjzFL559Sa+efW/1oNfD349T359Cn+cBX9UBr8e/Hrw68GvB7+ez/168OvBrwe/Hvx68Ot5+uutAwDfiAE0cP0NDKCBATQwgAaF3/iLigE0gt/YQQV+Y6UZA3AYge8sV5VlDcCeGkC6YktFZukROLKypbNnRtBcyQG0pkKDGB7fJsNiW8HfIkNocBT8CPBh4EPAaxtM/OB66RtYK338wPtWg78KfK6eerqXg78MfOBdSwz47vyu7+Y0r/63JDxf9LpannwDvz6Jn4SfbMEf3zJ+Hfh14Ncl8Qem8Sss+OVJ/Hrw68Gv5/rrwa8Hv57rrwe/Hvx6E98YQAMDaAC/AfyGjkZFDeA3tDczBtDOyNFYoSo3Sw7AqNTIblSSKd8A0jmysqVKDqCljBHYWq65YQyLb5GhsST+ZhlMg6KbZGBkowwIAx8CXlsP/joTPwC8H3jfSuntTeKvMPB/dy8Ffwn4XL0rib8AfPPqM/iz0k++iT/Vgm9evYFfB34d+HWjCfw68OvAr+Pbfl0Ofh34deDXgV8Hfh34deDXgV8Hfh34deDXgV8Hfp0VXw2gHvx68Ot/UTGAevDrO5gZA6hUtTNyNFSo1AAay1SlRnajkkzOYktFORUYgMvefOkh2JqvpXEMjW+WIbFN4G+SQfpGGRjdIAMi4IeBDwGvrZW+wTXgrwIfeOrlWyG9vFy9Z5nCXww+8K6FGXznXPCB5+ediW/Cd1ZP/q/qyU/j14034DvWjcnBH94Uvxb8WvBrwa8Fvxb8WvBrwa8FvzaDX2bFp5I6BlAHfh34dVx/HfhG4NeBX9fRqKguOYD2qkoV+PUVqnJzAA1llkqN7A0lmRqLcyrKLjkAS7Z09kzNjsFWOHcrGhLfKINjG8HfIANpQHS99I+sk35h4EPAa6ulTxD8QBIfeN9yWiY9vcB7uHp3Eh94F/Cu+eDPU/jANwLPb/sMvgn/q3ryDfy6JP64PPhcfS34teDXgl8Lfm0r8WvBrwW/FnwjBlDLAGrBrwW/FvzazkbFteDXgl/bySyFbwR+XaWqnZGjzjIAozJVqZHdqMTMGEFxTkXZNTrS2bKyZ3I2l83M9YMNjm+QQbEk/noZoK+T/tG14K8BH3htFa2UP4LgB8D3A+9bCv4S8IH3LGIAKfx5BLxzDqXwZ4BvXn02/kQyrz4bf5R0qOXqa5viV6bwa/jCVwN+Dfg14NeAXwN+TW8Cv6aniqe/Bvwa8GvArwG/BvyaLioGUAN+zS9mxgA6GhXVgl/bXlWpAr9WDcCoXFWmKjWyG5WYGUMotlTUtAZHOltW9kyNzWUzc7ay3AEMiq+XgbF14K+V/voa6RdZLX3DwIeAT+JrK6R3kKsPgO8H37dYfvcC71kI/gLw51vwgXfOAn9mDr4J/6u6+mz8McTV1xbArwG/Bvyaga3A79UCftcc/NQAOqnAr+mgAr+mUtXOyFFboSpXlVkqNbIblWRGUFdsqahp9Y50tqzsmRqay2bW2MpyBzEwvlYGxNaAv1r6RVdJ38hK6RMGPrQC/OXSW1smvYLAB5YwAPB94HsXMID50t1twndzcfUuhe8EvnE6mVffFN+E76SuvmNtHvyaYWn4yppB2fjV4Ff3JfCrwa/ubVRWDX41+NU8/dXgV4NfDX71b0Yl1eBXg1/d2ai4Gvxq8Ks7qbj+auCN2qsqzZL4RhWqclWZqtTIblRilhxBbXFORU2rc6SzZWXPVN9ctkwNrcw6iAHx1dI/tkr66SulbxT8CPDh5QxgGfhLpZcGfHAxA1gkv/u5eh9X7wXfA77bhP/NlYSfmQcf+IZJ4JtX3zy+Cd++ZmhT/Grwq1vA/w7+d/C/g/8d/O/dVOB/B/87+N87q8D//osK/O8djYq+d1BZ8KvbGTmqK1TllspUpUZ2o5LMCGqKcyrKCfjaTLas7NnVFcqWXX0rS42hfxz8GPgMoE8U/AhXHwY/lMH/PbAQfK7eB7x3HvhzTXy3wnfNAB945zTwgW/k6hX+L03wzSe/o4LvYLn6LPxq8KtN/HZW/O/gfwf/e2+jsu/N4H8D/xv437qowP8G/rdfVJ1UOfhGlSrwjSpU5aoyS6VG9u8lZtWpii0V5clhjkBlS2dvWm2hbE2ra2XJIfSLgx9bIX10rj4KfGQpA1givUJcvcbVB8EPgO8H3we+d4508wDvngX+TBPfZeJ3dqbwufoG4BsUfL159Xnxa3Lwq/Pgfwf/ewH8b+B/A/8b+N/A/9ZNVQj/1yb4xd+AN2qvqlS1M3J8q1CVWypTlRrZjUrMjCEU51SUJ4c5ApUtnT1/+YZRY8tfbSvrG18ufWLL5A8d+OgSBrBYeoUXSc8Q8NoCBjBfegSA989lAOB7wfeA755pwHd1cfVJeOcU8Ln6xjz49T+I/z0P/jfwvyXh8+HTV/C/gv+1qwr8r+B/Bd4I/K+dVB2Nir52UIH/tVLVzsjxtcJSuarMUqmR3agkM4JvxTkV5clhxhBsWdmbL2sYtsLVtKI+cfBj4OvgR8GPgB8GPwS+Bn4Q/MAcBjBbuvmA985kAFy9W+G7FL5T4Tcq/AYFX6/g+YnXUcF3sDz57S3wlQY8fc/B/wb+tzz4X8H/Cv7X7ioTvzSF/wX8L51V4H/5RQX+l45GRV86qNqrKlXtjBxfKlTllspUpUZ2oxJzAOmKcyrKyZGV7Zs1e8ulB2FrueZG8kcc+NhiBrBIekUXSs8I8OH5DGCe9NC4+iD4AfD9VnwTvosLeNdk8E34XxuT8OPz49e1Al/Bp/G/5cH/miwP/hfwv4D/JQnfEr4awGfgjdqrKlXtjByfKyyVq8oslRrZjUrMERgV51SUJ0dWtmRfU9lb3zdb68s3jj/i4MfA18GPgh8BP6zwNfCDs8AH3jeDAXD1HvDdOfhOhd+Yg1//I/hJ+Bz8r+Cn4RX+F/C/dFdZ8D8nA/9zZxX4n4H/lKyTqqNR0SfwP7VXVaraGTmMKlTlqjJLpUZ2o5KcinMqyu5zMkdWNmtf7G3IZva1jaVG0Tu+UHrFFkhPHfjoPAYwV3qEgddmE/gB8P3g+8D3gu8B353En0TAOycQ8I3jwAe+YQz4wNeb8B3rTPgOtcNaid83g/81g1+ewv9i4pel8D+D/xn8JPynZOB/6qwC36gA/sdk7VWVqnZGjo8VqnJLZZZKjexGJZaK81TUtE+OrGzp7K3rcypb0760oV5x8GPzGQD4UfAj4IcUfhD8wHQGME26+oD3TgGfq3crfJcFv7EAfp3CrzXh2xs/8fLgW66+Cf6XJHwO/meF/wn8T3nwPwJvBP7HTqqORia8Bf9DpaqdkeNDhaVyVZmlUiO7UUlOxTkV5cmR6SPoWdnbGIiffrDkWHrGwY+Br4MfBT4yiwHMlG4aVx8EPwC+H3wf+J48+E4LfoPCr28O34QviG/A5+L/bvYZ/CT8p2Q5+B+7qEz8kjS+GsCHjirgjdqrcvDfJ6tQlVsqs1RqZDcqyak4p6I8ObKypfqQzN7GbE372IZ6xufK77E50kMHPwp+GPwQ+Br4QfAD4PvB94LvmcgAgHeNJ+CdY8EHvnE0+MA3jGwVfuonXrP4Xyz4nxX+pxz8j0n4HPwPvxoVf/hFlYP/Pll7VaWldkZp/HfllsoslRrZjUpyKs6pqECOrGxZ2TO9b022lvvQTL/HwY/NZgDgR8EPgx8CXwM/OIUBTOb6uXov+B7w3QrfBb5T4Tem8EcQ8HXDaKiJX6vwa3Lx++XB750f/1MKv5vZxxz8D8ny4L/vpAL/fQ7+u2SVqnZGjncVlhT+2zJLpensRiWWivNUlCdHVrYm2Qv3Ll+2Hys1jh5x8GPg6+BHpzOAaQxgqnTVwA+C7wffB743D77Tgt+Qiw987eBm8NWXva8W/C8WfAM+B/9jBr/0Q1cFb8F/D/77X1QW/Hd87r/roLLgv03WzsjxtsJSuSXg36QqNbIbleRUnFNRgRxZ2bKy/0A2s7c/WI/4TOkemyHddPAj4IfBD4GvgR8A3w++D3wP+G6F77LgN1rw63PxB6XxK1vE75WD3yOD/9GC/yEH/31nAz4L/10nVUcV8G+TtVdl4xe9YQBvKlTllpriO16Db1Riqbhpr4oK5MjKlpW9cK8LZWu5N83UPT6DAYCvgx8BPwx+CHxtEgMA3w++F3wP8O4x4APvGsUARmbwGyz4dQq/NolvwjfF75Mf/3MO/kcL/gcL/vsuKgv+u19UCv9tR5UF/02ySlW7dAb861TlZq/Kcio1shuV5FSc3ctkRXlyZGVrkr2N2bJ79QN1j4MfA1+fygDADyv8IPgB4P3jGAD4HvDdFnwn8I3DwR9m4tfnwa9J4vc3/gkdA/975vO+IufLnoH/KQ/+Bwv++xz8d78apfHfdlJZ8N90UPAK/3WqdkaOVxWWyi0p+JfJSo3sRiU5FWf3IllRgRxZ2bKy/0C2H8s6mm5x8GPg6+BHwA+Dr02QzsHxDAB8H/heC77Lgt8IfMPQDH5dK/C/tYD/sRX473Lw31rw33RUWfBftzfRX6VqZ5SGf5ms3FKZJfBfmNmNSnIqzu55sqI8OZpky8r+A9l+vm5x8GPg65MZAPgh8DXwg+AHxjIA8L2jGYCJ38kFvtOKD3z94Ax+rcKvSeL3y4Pfuxn87k3x31vw31nw3/6q4BX+mxz81x1M+FftLfD0sp2RiW7Bf5GqzJIF/3mykpyKm/asqECOrGxNsv9Atp/vtzj4MfCjE6VLBPwQ+Br4QfD94PvA94DvVvgu8J3gN4LfkMIfZNQEv7pvC/i/N8VPX70FPw3f2YA3U/hvLPivkwH/qoOCV72sVJn4RS8YwIsKlQX/eVlOpUYG/rOSPBVn97SoQKA/yc6Wlf0Hs/18v8XB17n86AQGAH4IfA38IPh+8L3ge8B358FvAL/egl+bB//7D+C/z4P/Ngf/jQU/Cf8qmQX/ZSqF/6JdujT+82TllkB/lqo0nf2ZGsBTa4A/ya0of48dWdmaZG97j5LZfr6u8UkMAPwo+JFxDAB8DfwA+H7wveB7FL4LfCf4jUMYgMKvB77Ogl+Twu+Tg9+rbfjvCuC/seC/7qTgTfzilx0s8PSiUqXwn7dT6Kpn5ZYs+E9L09mfJCvJSYE/tlaUv0eOJtmaZM/fw+aytb0Heeoa5+nXwY+CHwE/NIYBgB8A3w++F3y3wneB7wS/EfyGHPxaC361Bf/bT+C/teC/seAb8Bb8lxb8F6kU/vN26Uz0VBb8p2VmT5KVpjPwH5fkSaE/slaUv4eOrGzJHlizt637qWx/T13iE9QAwA+DHwJfG8UAwPeNYADgu4cxgBz8BuDrga+z4NdY8L9b8L/+BP4bC/7rXxS8wn9pwX9hwX9eqVL4z9pZ4OlpudmTcoVu6XFpOvtjNYBH1izoD1MVmT3IzdEk2/3c7M13r1C27O7+YF3i4OtcfxT8MPgh8IPgB8D3ge8B3w2+C3wn+I0mfvsUfh34tRb86gx+hRX/S/Zv/Dbhv87Bf2nBf5HEVwN4bsF/VmnAmyXR6UmFQrfgP7YG/CMzu5FCf5gK7Ae5WcDv5+bI7h7gWQF5t43dSWX7e+oSB1/n+o0BgK+BHwTfD74PfI/Cd4HvBL8R/IYB6vot+DU5+N9y8D9n45dZ8d8p/LcK/00O/qs8+C8s+M8t+M8s+E+TpeAV/mNrCv5RWRrewH9YaoI/yA3w+7lZwO9Zuutoks3aHYcFs4Vu58tmdusn6xwHXwc/yvUbAwA/CL4ffC/4HhO/gwt8J/iNwBsD6M8AwK818c3rB/+7Bf+riV+ehd8tD34XKW0J/6XCf2HBf67wn7XPwD+tNOGfJFPwj1Mp+EflCl0FuNED4I0U+H1rFvR7qZLQBQI4N1uq26ksoLda2c1kth/vRk6d4+Dr4EfBD3P9xgDA9w9lAOC7W8Cv7aOu34L/LQ/+pzz47wvgv6ZXzeA/z4P/VPWkXboMfIVCt+A/VD0oM+CN7oNvZIG/V2Ji381XEjpfgN+2dAvsJllBW9ENawrv+k90TfVrfDQDAD8Kfhh8jetXA+igBtBeDaDSGAD49eDX5eBXg/89B//LT+K/VPgv8uA/U/hpeAv+Ywv+Iwv+w3ILuup+aToD/55Cv5vKAn7HmsK+rbplzZHpJth5y0Wl663omj2D15quttCvcfD1kQwA/PBwBgB+AHwf+F7w3eC7uH4n+I3gN4BfD35dH2MAFTU5+N/A/6rwP1vwP7YevyQf/nMTv/hZDv4TC/5jhf+oItNDBf+g3IKeSuHfA/5uqQWd7qSyoN9W3Spq2s1UjuxugJ3qeqpCsM10NZUF70obulwgcwDgR8APga/x9AfA9/H0exS+C3yniV+ZD7+6lxpAHvxP/wL8p+0t8JVp+KJHyVLwFRb48hz4MgPdcdcsjX8npzR4blZw1Y0iA9voeiabtWupCuGqrjRXHsRLbehiTr/ER6YH0DEEvgZ+AHwf+B4LfiP4DX0t1w9+TR78rz3Mf+Wugd89g/8h81Ov9F0L+C8U/vOOaXgD/2kO/uNKC7zCT8I/qMjA3y+3oKvuZvAdd0ot4KpbJdngN61Zwem6NQV/LVMa/WqqFoAvW7qUr2YwL7Sh86pf4uDrXH9kmGUAgxgA+J4BDAB8Zz9jAO2MAYBfB34t+DW9jAGUfwf/2++W6+9uefpbif8yH37HbPwn7S3wOfhp+AoLvMpAT2Wip7LfLrWgW/Bv5nSjOA84XUtlgb9qZruSpxaBVRctXbDWDGZz/ZWnKmMA4OvgR8APgR/k+v1cv5cBuLl+NYB2jbn4vbPxv6Wuv7vl6c/+Z/XMp/9n8Ntn8NPw9MCCnwVfboEvy4J3JOFvlWbQb1pLgdP1VLngqqsqcHOzXVZdStVaZEvnrbWAWtWK/sypkzEA8CNDGAD4QfD94HvBd4Pv4vqd4DeAXw9+XW/L9YP/PQf/cw7+hxz8t23Af9rBAq/wHxXAv1+RA2/Bv6O6bcI7blnwrfA3SnLQ6VqqXHBrgF9WXTKzWbuYqjXIlv6yVGVvPeq5FjprqVN8WHoAHYwBgO/n6feC7wbfBX4j+A1/WAYAfg346QGA/7W7un6F/zEXv0vr8J+1At+AV/j3LaXhyzPoBnyZgZ7KfrM0B52ul+RBVzUBp8uqS47sLlrAL1hrBXRVgf5M1QbYZGdyOp2nTnHwda4/An6I61cDqPRYrl8NoKI+P37m+rsZA8jCf9/F8rmf/YWvJI3fqQl+cSvwi9LwFRl4K74Bb8G/aZaGv24pC1x1pbgp+iVrJrjRhUwG+HlrhS66APS5fP0AbqpTOZ20ZA4A/Ahf/DTwg1y/D3yPun4n+I3J6we/rpcxgHJjAOB/72G5/m6W6++qBtCl6Ze+tuI/UvgPKxU83W9n4hvwFvw75TnwZVnwjhvgJ8uCT2VFV13Og35RdaEoC91+3iyN/pelghddAPus6oyl1uCebKYTOR1XdYwPSQ+gfXIAAfB94HvAd4HvBL+ht3n9xgDAr8mDb1x/U/yCn/vN4T9uI/4dVRZ8WRa843oSvjQHna6WZMNfVl0qLoBuwT9v6S8zW1VOzWGfzYN9Ok+tQc6Hm69jOXWMg69z/WHwtQF5B1BhDAD8OoWvrr/sW3fL9Vs+9z90UQNoBf7zVuLfV6XhKzLwufg3y7Lg0/i58FdKsuEvWcqHfj5VNrq9yswEV51L1VZs1UlrbUC24h7N6UiesgcAfgB8H/hu8F1cfyP4DeDX98xcfzXX/727GkDy+n+zXH8e/Dd5vvQ1we/QFP9BK/Bv061yC3xZFryBf63Ucu0p+JKca0/BFxdAp79UVY7sssBVZx0/iK06oTpubz3ykQIdtnQop45x8HXwwwMyA/BmBlCRGkDy+mvBr+lhuX7wv/xmDCD99BsDsPwrePN97reE/7AZ/DsVGfi8+GUZ/GtmTeFLsuEvpuCLm0FPZYIbncuURj+j+mHsnFoL3RxyqoOWDqg6pAfQnwGAH+jLAMB3c/1O8BvN6y+v+90cQPr6u6UHkPzf0W96/Zl/Tj/7S19T/OKW8IEvysW/pcqCL8uCd1wtbQp/qSTn2i2dL86Gr7L0Z1ETdPtZswy6pULgzWKrjqqO2NsOnQ852f4CdYgPZAADjAFUJgfg5/q94LvAd4Lf2DMzgOT1V4OfGoBx/V3VALpYrj/zr+BN47/M81v/ieVzPx/+vVbgp+HLMvAp/CbwqrzwxXmuXcGfS5VBtwNuP52LrmoNeF7snA7b2wZdCHmfpb2W9qgBtI9y/WHwNa7f3yd7AA3g1yevv4cxgLLq1PX/Zrn+LvmffuP6O2U//Xnx27eMf7vCAt8MPvCOK0n80jzwJU3RDfjiZtDpbFEWujUTPKd86C2BH1YdspaD3dJFF0LO125Vh/gAYwCVagDt/OB7wHeB7+T6G35Xz39yAMnr75YeQPL/KldmAJ0LX39z3/gftbd84au04LdrHf61six4A/9yDr4BX1IAvrh5+DNFTeFBt2eBq447mqK3CZwOqg7YC2Pnu+jmkJPtsrTTUodYcgDgh7n+YJ/sAfD8lxsDAL+2u3n9xgCS19/V+L/MVfDpV9ef/fRn8ItbgV+UDz/r6pviO5L4TeBLCsAXq8/23GtX8KeLmqCnykZXNXflrQKn/al+EDsf9I4Cbaf2sf7mAEJqAL7eDAB8F9ffCH59D3MAyeuvBv/7b5br75K+fuN/T/+d+b+2ZV5/HvxnzXzps+LfycG/mcIvz8a/WpYF77hU2hTeip8Fr2py7Sl4OlXUBN7eBF111NE69ILgqn2qtmDvbAF7u6Vtqq2qzADAD/5hDKDCbQ6gPDWA5PXXdDMHkLz+r10tA8jz9L9Ofe7n/LN7hb70tQX/Whvwz6vywhdnw5/OgT9ZlIVuP54pG52OOLLRm7vyguCqPfafu+xcaCv2ljy1j4Ef7WsZAPhurt8JfmOP7AEkr/+bwv+s8Ft7/blP/8NWPPst4St4Az8vfEkB+OIW4IvywtuboKsKoee78rzglnbb8193a7C3toC9WbXJUmYA4Ae5fusAGpLPP/i13SzPf3IAXTLX/yEH/3Whpz/P5376d34ufkUG/3oO/pV8+KUt46fhi5uHP1GUDX9M1QRddcjxc+i7VbtUhcCbe8Zbi71RtcFS+xj4Ua4/OYAAA/AmBwC+s0fOANT1pwfQ2RhA9vV3Utdv+RdzNvnWn/Ol767l6W8rPvCOC6V54EsKwNPp4mbg6XhRBv6o6ohZNrqqNeh7WkKnHal+4Lpbi51qvaXKrAGA7+X6XakBgF8Hfs1vlgF0ST//qf/TbCXvLNf/Kv/T3+LnfnP4V/9m/ILwRRn4I5aaoKvaim4Fz0JXWdHbct2twV5naa1qjU3+HwuefjlXE4+yAAAAAElFTkSuQmCC", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var FT = mT(40198),
      PT = mT(37188),
      VT = mT(40257),
      uT = mT(40407),
      CT = mT(40487);
    class rT extends uT.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let KT = (() => {
      var TT, UT, mT, WT, zT, MT, gT, nT, HT, kT;
      let jT, lT, LT, pT, BT, ZT, cT, vT, fT, qT = CT.e,
        iT = [],
        bT = [],
        OT = [],
        eT = [],
        YT = [],
        dT = [],
        wT = [],
        tT = [],
        aT = [],
        yT = [],
        XT = [],
        IT = [],
        QT = [],
        sT = [],
        FT = [],
        PT = [],
        VT = [],
        uT = [];
      return TT = class extends qT {
        get useEnergyConservation() {
          return (0, JT.d)(this, UT, "f")
        }
        set useEnergyConservation(TT) {
          (0, JT.e)(this, UT, TT, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, JT.d)(this, mT, "f")
        }
        set useSmithVisibilityHeightCorrelated(TT) {
          (0, JT.e)(this, mT, TT, "f")
        }
        get useSphericalHarmonics() {
          return (0, JT.d)(this, WT, "f")
        }
        set useSphericalHarmonics(TT) {
          (0, JT.e)(this, WT, TT, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, JT.d)(this, zT, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(TT) {
          (0, JT.e)(this, zT, TT, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, JT.d)(this, MT, "f")
        }
        set mixIblRadianceWithIrradiance(TT) {
          (0, JT.e)(this, MT, TT, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, JT.d)(this, gT, "f")
        }
        set useLegacySpecularEnergyConservation(TT) {
          (0, JT.e)(this, gT, TT, "f")
        }
        get baseDiffuseModel() {
          return (0, JT.d)(this, nT, "f")
        }
        set baseDiffuseModel(TT) {
          (0, JT.e)(this, nT, TT, "f")
        }
        get dielectricSpecularModel() {
          return (0, JT.d)(this, HT, "f")
        }
        set dielectricSpecularModel(TT) {
          (0, JT.e)(this, HT, TT, "f")
        }
        get conductorSpecularModel() {
          return (0, JT.d)(this, kT, "f")
        }
        set conductorSpecularModel(TT) {
          (0, JT.e)(this, kT, TT, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(jT) {
          let lT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(jT, "PBRBRDF", 90, new rT, lT), this._useEnergyConservation = TT.DEFAULT_USE_ENERGY_CONSERVATION, UT.set(this, (0, JT.k)(this, iT, TT.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, JT.k)(this, bT), TT.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), mT.set(this, (0, JT.k)(this, OT, TT.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, JT.k)(this, eT), TT.DEFAULT_USE_SPHERICAL_HARMONICS), WT.set(this, (0, JT.k)(this, YT, TT.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, JT.k)(this, dT), TT.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), zT.set(this, (0, JT.k)(this, wT, TT.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, JT.k)(this, tT), TT.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), MT.set(this, (0, JT.k)(this, aT, TT.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, JT.k)(this, yT), TT.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), gT.set(this, (0, JT.k)(this, XT, TT.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, JT.k)(this, IT), TT.DEFAULT_DIFFUSE_MODEL), nT.set(this, (0, JT.k)(this, QT, TT.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, JT.k)(this, sT), TT.DEFAULT_DIELECTRIC_SPECULAR_MODEL), HT.set(this, (0, JT.k)(this, FT, TT.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, JT.k)(this, PT), TT.DEFAULT_CONDUCTOR_SPECULAR_MODEL), kT.set(this, (0, JT.k)(this, VT, TT.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, JT.k)(this, uT), this._internalMarkAllSubMeshesAsMiscDirty = jT._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(TT) {
          TT.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, TT.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, TT.SPHERICAL_HARMONICS = this._useSphericalHarmonics, TT.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, TT.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, TT.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, TT.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, TT.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, TT.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, UT = new WeakMap, mT = new WeakMap, WT = new WeakMap, zT = new WeakMap, MT = new WeakMap, gT = new WeakMap, nT = new WeakMap, HT = new WeakMap, kT = new WeakMap, (() => {
        const UT = "function" === typeof Symbol && Symbol.metadata ? Object.create(qT[Symbol.metadata] ?? null) : void 0;
        jT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], lT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], LT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], pT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], BT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], ZT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], cT = [(0, xT.L)("baseDiffuseModel"), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], vT = [(0, xT.L)("dielectricSpecularModel"), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], fT = [(0, xT.L)("conductorSpecularModel"), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], (0, JT.h)(TT, null, jT, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: TT => "useEnergyConservation" in TT,
            get: TT => TT.useEnergyConservation,
            set: (TT, UT) => {
              TT.useEnergyConservation = UT
            }
          },
          metadata: UT
        }, iT, bT), (0, JT.h)(TT, null, lT, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSmithVisibilityHeightCorrelated" in TT,
            get: TT => TT.useSmithVisibilityHeightCorrelated,
            set: (TT, UT) => {
              TT.useSmithVisibilityHeightCorrelated = UT
            }
          },
          metadata: UT
        }, OT, eT), (0, JT.h)(TT, null, LT, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSphericalHarmonics" in TT,
            get: TT => TT.useSphericalHarmonics,
            set: (TT, UT) => {
              TT.useSphericalHarmonics = UT
            }
          },
          metadata: UT
        }, YT, dT), (0, JT.h)(TT, null, pT, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSpecularGlossinessInputEnergyConservation" in TT,
            get: TT => TT.useSpecularGlossinessInputEnergyConservation,
            set: (TT, UT) => {
              TT.useSpecularGlossinessInputEnergyConservation = UT
            }
          },
          metadata: UT
        }, wT, tT), (0, JT.h)(TT, null, BT, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: TT => "mixIblRadianceWithIrradiance" in TT,
            get: TT => TT.mixIblRadianceWithIrradiance,
            set: (TT, UT) => {
              TT.mixIblRadianceWithIrradiance = UT
            }
          },
          metadata: UT
        }, aT, yT), (0, JT.h)(TT, null, ZT, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: TT => "useLegacySpecularEnergyConservation" in TT,
            get: TT => TT.useLegacySpecularEnergyConservation,
            set: (TT, UT) => {
              TT.useLegacySpecularEnergyConservation = UT
            }
          },
          metadata: UT
        }, XT, IT), (0, JT.h)(TT, null, cT, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseDiffuseModel" in TT,
            get: TT => TT.baseDiffuseModel,
            set: (TT, UT) => {
              TT.baseDiffuseModel = UT
            }
          },
          metadata: UT
        }, QT, sT), (0, JT.h)(TT, null, vT, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: TT => "dielectricSpecularModel" in TT,
            get: TT => TT.dielectricSpecularModel,
            set: (TT, UT) => {
              TT.dielectricSpecularModel = UT
            }
          },
          metadata: UT
        }, FT, PT), (0, JT.h)(TT, null, fT, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: TT => "conductorSpecularModel" in TT,
            get: TT => TT.conductorSpecularModel,
            set: (TT, UT) => {
              TT.conductorSpecularModel = UT
            }
          },
          metadata: UT
        }, VT, uT), UT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UT
        })
      })(), TT.DEFAULT_USE_ENERGY_CONSERVATION = !0, TT.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, TT.DEFAULT_USE_SPHERICAL_HARMONICS = !0, TT.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, TT.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, TT.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, TT.DEFAULT_DIFFUSE_MODEL = 0, TT.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, TT.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, TT
    })();
    var ST = mT(40394),
      GT = mT(37367),
      NT = mT(40399),
      ET = mT(40223),
      hT = mT(40474),
      DT = mT(40465),
      oT = mT(40479),
      AT = mT(40456);
    class RT extends uT.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let TU = (() => {
      var TT, UT, mT, WT, zT, MT, gT, nT, HT, kT;
      let jT, lT, LT, pT, BT, ZT, cT, vT, fT, qT, iT, bT, OT, eT, YT = CT.e,
        dT = [],
        wT = [],
        tT = [],
        aT = [],
        yT = [],
        XT = [],
        IT = [],
        QT = [],
        sT = [],
        FT = [],
        PT = [],
        VT = [],
        uT = [],
        rT = [],
        KT = [],
        ST = [],
        NT = [],
        ET = [],
        hT = [],
        oT = [],
        TU = [],
        UU = [],
        mU = [],
        WU = [],
        zU = [],
        MU = [],
        gU = [],
        nU = [];
      return TT = class extends YT {
        get isEnabled() {
          return (0, JT.d)(this, UT, "f")
        }
        set isEnabled(TT) {
          (0, JT.e)(this, UT, TT, "f")
        }
        get indexOfRefraction() {
          return (0, JT.d)(this, mT, "f")
        }
        set indexOfRefraction(TT) {
          (0, JT.e)(this, mT, TT, "f")
        }
        get texture() {
          return (0, JT.d)(this, WT, "f")
        }
        set texture(TT) {
          (0, JT.e)(this, WT, TT, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, JT.d)(this, zT, "f")
        }
        set useRoughnessFromMainTexture(TT) {
          (0, JT.e)(this, zT, TT, "f")
        }
        get textureRoughness() {
          return (0, JT.d)(this, MT, "f")
        }
        set textureRoughness(TT) {
          (0, JT.e)(this, MT, TT, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, JT.d)(this, gT, "f")
        }
        set remapF0OnInterfaceChange(TT) {
          (0, JT.e)(this, gT, TT, "f")
        }
        get bumpTexture() {
          return (0, JT.d)(this, nT, "f")
        }
        set bumpTexture(TT) {
          (0, JT.e)(this, nT, TT, "f")
        }
        get isTintEnabled() {
          return (0, JT.d)(this, HT, "f")
        }
        set isTintEnabled(TT) {
          (0, JT.e)(this, HT, TT, "f")
        }
        get tintTexture() {
          return (0, JT.d)(this, kT, "f")
        }
        set tintTexture(TT) {
          (0, JT.e)(this, kT, TT, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(jT) {
          let lT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(jT, "PBRClearCoat", 100, new RT, lT), this._isEnabled = !1, UT.set(this, (0, JT.k)(this, dT, !1)), this.intensity = ((0, JT.k)(this, wT), (0, JT.k)(this, tT, 1)), this.roughness = ((0, JT.k)(this, aT), (0, JT.k)(this, yT, 0)), this._indexOfRefraction = ((0, JT.k)(this, XT), TT._DefaultIndexOfRefraction), mT.set(this, (0, JT.k)(this, IT, TT._DefaultIndexOfRefraction)), this._texture = ((0, JT.k)(this, QT), null), WT.set(this, (0, JT.k)(this, sT, null)), this._useRoughnessFromMainTexture = ((0, JT.k)(this, FT), !0), zT.set(this, (0, JT.k)(this, PT, !0)), this._textureRoughness = ((0, JT.k)(this, VT), null), MT.set(this, (0, JT.k)(this, uT, null)), this._remapF0OnInterfaceChange = ((0, JT.k)(this, rT), !0), gT.set(this, (0, JT.k)(this, KT, !0)), this._bumpTexture = ((0, JT.k)(this, ST), null), nT.set(this, (0, JT.k)(this, NT, null)), this._isTintEnabled = ((0, JT.k)(this, ET), !1), HT.set(this, (0, JT.k)(this, hT, !1)), this.tintColor = ((0, JT.k)(this, oT), (0, JT.k)(this, TU, GT.d.White())), this.tintColorAtDistance = ((0, JT.k)(this, UU), (0, JT.k)(this, mU, 1)), this.tintThickness = ((0, JT.k)(this, WU), (0, JT.k)(this, zU, 1)), this._tintTexture = ((0, JT.k)(this, MU), null), kT.set(this, (0, JT.k)(this, gU, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, JT.k)(this, nU), this._internalMarkAllSubMeshesAsTexturesDirty = jT._dirtyCallbacks[1]
        }
        isReadyForSubMesh(TT, UT, mT) {
          if (!this._isEnabled) return !0;
          const WT = this._material._disableBumpMap;
          if (TT._areTexturesDirty && UT.texturesEnabled) {
            if (this._texture && DT.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && DT.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (mT.getCaps().standardDerivatives && this._bumpTexture && DT.e.ClearCoatBumpTextureEnabled && !WT && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && DT.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(UT, mT) {
          this._isEnabled ? (UT.CLEARCOAT = !0, UT.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, UT.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, UT._areTexturesDirty && mT.texturesEnabled && (this._texture && DT.e.ClearCoatTextureEnabled ? (0, AT.X)(this._texture, UT, "CLEARCOAT_TEXTURE") : UT.CLEARCOAT_TEXTURE = !1, this._textureRoughness && DT.e.ClearCoatTextureEnabled ? (0, AT.X)(this._textureRoughness, UT, "CLEARCOAT_TEXTURE_ROUGHNESS") : UT.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && DT.e.ClearCoatBumpTextureEnabled ? (0, AT.X)(this._bumpTexture, UT, "CLEARCOAT_BUMP") : UT.CLEARCOAT_BUMP = !1, UT.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === TT._DefaultIndexOfRefraction, this._isTintEnabled ? (UT.CLEARCOAT_TINT = !0, this._tintTexture && DT.e.ClearCoatTintTextureEnabled ? ((0, AT.X)(this._tintTexture, UT, "CLEARCOAT_TINT_TEXTURE"), UT.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : UT.CLEARCOAT_TINT_TEXTURE = !1) : (UT.CLEARCOAT_TINT = !1, UT.CLEARCOAT_TINT_TEXTURE = !1))) : (UT.CLEARCOAT = !1, UT.CLEARCOAT_TEXTURE = !1, UT.CLEARCOAT_TEXTURE_ROUGHNESS = !1, UT.CLEARCOAT_BUMP = !1, UT.CLEARCOAT_TINT = !1, UT.CLEARCOAT_TINT_TEXTURE = !1, UT.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, UT.CLEARCOAT_DEFAULTIOR = !1, UT.CLEARCOAT_TEXTUREDIRECTUV = 0, UT.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, UT.CLEARCOAT_BUMPDIRECTUV = 0, UT.CLEARCOAT_REMAP_F0 = !1, UT.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, UT.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(TT, UT, mT, WT) {
          if (!this._isEnabled) return;
          const zT = WT.materialDefines,
            MT = this._material.isFrozen,
            gT = this._material._disableBumpMap,
            nT = this._material._invertNormalMapX,
            HT = this._material._invertNormalMapY;
          if (!TT.useUbo || !MT || !TT.isSync) {
            (this._texture || this._textureRoughness) && DT.e.ClearCoatTextureEnabled && (TT.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, AT.x)(this._texture, TT, "clearCoat"), this._textureRoughness && !zT.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, AT.x)(this._textureRoughness, TT, "clearCoatRoughness")), this._bumpTexture && mT.getCaps().standardDerivatives && DT.e.ClearCoatTextureEnabled && !gT && (TT.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, AT.x)(this._bumpTexture, TT, "clearCoatBump"), UT._mirroredCameraPosition ? TT.updateFloat2("vClearCoatTangentSpaceParams", nT ? 1 : -1, HT ? 1 : -1) : TT.updateFloat2("vClearCoatTangentSpaceParams", nT ? -1 : 1, HT ? -1 : 1)), this._tintTexture && DT.e.ClearCoatTintTextureEnabled && (TT.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, AT.x)(this._tintTexture, TT, "clearCoatTint")), TT.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const WT = 1 - this._indexOfRefraction,
              MT = 1 + this._indexOfRefraction,
              kT = Math.pow(-WT / MT, 2),
              jT = 1 / this._indexOfRefraction;
            TT.updateFloat4("vClearCoatRefractionParams", kT, jT, WT, MT), this._isTintEnabled && (TT.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), TT.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          UT.texturesEnabled && (this._texture && DT.e.ClearCoatTextureEnabled && TT.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !zT.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && DT.e.ClearCoatTextureEnabled && TT.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && mT.getCaps().standardDerivatives && DT.e.ClearCoatBumpTextureEnabled && !gT && TT.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && DT.e.ClearCoatTintTextureEnabled && TT.setTexture("clearCoatTintSampler", this._tintTexture))
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
        addFallbacks(TT, UT, mT) {
          return TT.CLEARCOAT_BUMP && UT.addFallback(mT++, "CLEARCOAT_BUMP"), TT.CLEARCOAT_TINT && UT.addFallback(mT++, "CLEARCOAT_TINT"), TT.CLEARCOAT && UT.addFallback(mT++, "CLEARCOAT"), mT
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
      }, UT = new WeakMap, mT = new WeakMap, WT = new WeakMap, zT = new WeakMap, MT = new WeakMap, gT = new WeakMap, nT = new WeakMap, HT = new WeakMap, kT = new WeakMap, (() => {
        const UT = "function" === typeof Symbol && Symbol.metadata ? Object.create(YT[Symbol.metadata] ?? null) : void 0;
        jT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], lT = [(0, xT.L)()], LT = [(0, xT.L)()], pT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], BT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], ZT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], cT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], vT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], fT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], qT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], iT = [(0, xT.l)()], bT = [(0, xT.L)()], OT = [(0, xT.L)()], eT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], (0, JT.h)(TT, null, jT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, UT) => {
              TT.isEnabled = UT
            }
          },
          metadata: UT
        }, dT, wT), (0, JT.h)(TT, null, pT, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "indexOfRefraction" in TT,
            get: TT => TT.indexOfRefraction,
            set: (TT, UT) => {
              TT.indexOfRefraction = UT
            }
          },
          metadata: UT
        }, IT, QT), (0, JT.h)(TT, null, BT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, UT) => {
              TT.texture = UT
            }
          },
          metadata: UT
        }, sT, FT), (0, JT.h)(TT, null, ZT, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRoughnessFromMainTexture" in TT,
            get: TT => TT.useRoughnessFromMainTexture,
            set: (TT, UT) => {
              TT.useRoughnessFromMainTexture = UT
            }
          },
          metadata: UT
        }, PT, VT), (0, JT.h)(TT, null, cT, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "textureRoughness" in TT,
            get: TT => TT.textureRoughness,
            set: (TT, UT) => {
              TT.textureRoughness = UT
            }
          },
          metadata: UT
        }, uT, rT), (0, JT.h)(TT, null, vT, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: TT => "remapF0OnInterfaceChange" in TT,
            get: TT => TT.remapF0OnInterfaceChange,
            set: (TT, UT) => {
              TT.remapF0OnInterfaceChange = UT
            }
          },
          metadata: UT
        }, KT, ST), (0, JT.h)(TT, null, fT, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "bumpTexture" in TT,
            get: TT => TT.bumpTexture,
            set: (TT, UT) => {
              TT.bumpTexture = UT
            }
          },
          metadata: UT
        }, NT, ET), (0, JT.h)(TT, null, qT, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isTintEnabled" in TT,
            get: TT => TT.isTintEnabled,
            set: (TT, UT) => {
              TT.isTintEnabled = UT
            }
          },
          metadata: UT
        }, hT, oT), (0, JT.h)(TT, null, eT, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintTexture" in TT,
            get: TT => TT.tintTexture,
            set: (TT, UT) => {
              TT.tintTexture = UT
            }
          },
          metadata: UT
        }, gU, nU), (0, JT.h)(null, null, lT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, UT) => {
              TT.intensity = UT
            }
          },
          metadata: UT
        }, tT, aT), (0, JT.h)(null, null, LT, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "roughness" in TT,
            get: TT => TT.roughness,
            set: (TT, UT) => {
              TT.roughness = UT
            }
          },
          metadata: UT
        }, yT, XT), (0, JT.h)(null, null, iT, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintColor" in TT,
            get: TT => TT.tintColor,
            set: (TT, UT) => {
              TT.tintColor = UT
            }
          },
          metadata: UT
        }, TU, UU), (0, JT.h)(null, null, bT, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintColorAtDistance" in TT,
            get: TT => TT.tintColorAtDistance,
            set: (TT, UT) => {
              TT.tintColorAtDistance = UT
            }
          },
          metadata: UT
        }, mU, WU), (0, JT.h)(null, null, OT, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintThickness" in TT,
            get: TT => TT.tintThickness,
            set: (TT, UT) => {
              TT.tintThickness = UT
            }
          },
          metadata: UT
        }, zU, MU), UT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UT
        })
      })(), TT._DefaultIndexOfRefraction = 1.5, TT
    })();
    class UU extends uT.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let mU = (() => {
      var TT, UT, mT, WT;
      let zT, MT, gT, nT, HT, kT, jT, lT = CT.e,
        LT = [],
        pT = [],
        BT = [],
        ZT = [],
        cT = [],
        vT = [],
        fT = [],
        qT = [],
        iT = [],
        bT = [],
        OT = [],
        eT = [],
        YT = [],
        dT = [];
      return TT = class extends lT {
        get isEnabled() {
          return (0, JT.d)(this, UT, "f")
        }
        set isEnabled(TT) {
          (0, JT.e)(this, UT, TT, "f")
        }
        get texture() {
          return (0, JT.d)(this, mT, "f")
        }
        set texture(TT) {
          (0, JT.e)(this, mT, TT, "f")
        }
        get thicknessTexture() {
          return (0, JT.d)(this, WT, "f")
        }
        set thicknessTexture(TT) {
          (0, JT.e)(this, WT, TT, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(zT) {
          let MT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(zT, "PBRIridescence", 110, new UU, MT), this._isEnabled = !1, UT.set(this, (0, JT.k)(this, LT, !1)), this.intensity = ((0, JT.k)(this, pT), (0, JT.k)(this, BT, 1)), this.minimumThickness = ((0, JT.k)(this, ZT), (0, JT.k)(this, cT, TT._DefaultMinimumThickness)), this.maximumThickness = ((0, JT.k)(this, vT), (0, JT.k)(this, fT, TT._DefaultMaximumThickness)), this.indexOfRefraction = ((0, JT.k)(this, qT), (0, JT.k)(this, iT, TT._DefaultIndexOfRefraction)), this._texture = ((0, JT.k)(this, bT), null), mT.set(this, (0, JT.k)(this, OT, null)), this._thicknessTexture = ((0, JT.k)(this, eT), null), WT.set(this, (0, JT.k)(this, YT, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, JT.k)(this, dT), this._internalMarkAllSubMeshesAsTexturesDirty = zT._dirtyCallbacks[1]
        }
        isReadyForSubMesh(TT, UT) {
          if (!this._isEnabled) return !0;
          if (TT._areTexturesDirty && UT.texturesEnabled) {
            if (this._texture && DT.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && DT.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(TT, UT) {
          this._isEnabled ? (TT.IRIDESCENCE = !0, TT._areTexturesDirty && UT.texturesEnabled && (this._texture && DT.e.IridescenceTextureEnabled ? (0, AT.X)(this._texture, TT, "IRIDESCENCE_TEXTURE") : TT.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && DT.e.IridescenceTextureEnabled ? (0, AT.X)(this._thicknessTexture, TT, "IRIDESCENCE_THICKNESS_TEXTURE") : TT.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (TT.IRIDESCENCE = !1, TT.IRIDESCENCE_TEXTURE = !1, TT.IRIDESCENCE_THICKNESS_TEXTURE = !1, TT.IRIDESCENCE_TEXTUREDIRECTUV = 0, TT.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(TT, UT) {
          if (!this._isEnabled) return;
          const mT = this._material.isFrozen;
          TT.useUbo && mT && TT.isSync || ((this._texture || this._thicknessTexture) && DT.e.IridescenceTextureEnabled && (TT.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, AT.x)(this._texture, TT, "iridescence"), this._thicknessTexture && (0, AT.x)(this._thicknessTexture, TT, "iridescenceThickness")), TT.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), UT.texturesEnabled && (this._texture && DT.e.IridescenceTextureEnabled && TT.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && DT.e.IridescenceTextureEnabled && TT.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
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
        addFallbacks(TT, UT, mT) {
          return TT.IRIDESCENCE && UT.addFallback(mT++, "IRIDESCENCE"), mT
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
      }, UT = new WeakMap, mT = new WeakMap, WT = new WeakMap, (() => {
        const UT = "function" === typeof Symbol && Symbol.metadata ? Object.create(lT[Symbol.metadata] ?? null) : void 0;
        zT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], MT = [(0, xT.L)()], gT = [(0, xT.L)()], nT = [(0, xT.L)()], HT = [(0, xT.L)()], kT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], jT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], (0, JT.h)(TT, null, zT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, UT) => {
              TT.isEnabled = UT
            }
          },
          metadata: UT
        }, LT, pT), (0, JT.h)(TT, null, kT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, UT) => {
              TT.texture = UT
            }
          },
          metadata: UT
        }, OT, eT), (0, JT.h)(TT, null, jT, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "thicknessTexture" in TT,
            get: TT => TT.thicknessTexture,
            set: (TT, UT) => {
              TT.thicknessTexture = UT
            }
          },
          metadata: UT
        }, YT, dT), (0, JT.h)(null, null, MT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, UT) => {
              TT.intensity = UT
            }
          },
          metadata: UT
        }, BT, ZT), (0, JT.h)(null, null, gT, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "minimumThickness" in TT,
            get: TT => TT.minimumThickness,
            set: (TT, UT) => {
              TT.minimumThickness = UT
            }
          },
          metadata: UT
        }, cT, vT), (0, JT.h)(null, null, nT, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "maximumThickness" in TT,
            get: TT => TT.maximumThickness,
            set: (TT, UT) => {
              TT.maximumThickness = UT
            }
          },
          metadata: UT
        }, fT, qT), (0, JT.h)(null, null, HT, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "indexOfRefraction" in TT,
            get: TT => TT.indexOfRefraction,
            set: (TT, UT) => {
              TT.indexOfRefraction = UT
            }
          },
          metadata: UT
        }, iT, bT), UT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UT
        })
      })(), TT._DefaultMinimumThickness = 100, TT._DefaultMaximumThickness = 400, TT._DefaultIndexOfRefraction = 1.3, TT
    })();
    class WU extends uT.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let zU = (() => {
      var TT, UT, mT, WT;
      let zT, MT, gT, nT, HT, kT = CT.e,
        jT = [],
        lT = [],
        LT = [],
        pT = [],
        BT = [],
        ZT = [],
        cT = [],
        vT = [],
        fT = [],
        qT = [];
      return TT = class extends kT {
        get isEnabled() {
          return (0, JT.d)(this, UT, "f")
        }
        set isEnabled(TT) {
          (0, JT.e)(this, UT, TT, "f")
        }
        set angle(TT) {
          this.direction.x = Math.cos(TT), this.direction.y = Math.sin(TT)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, JT.d)(this, mT, "f")
        }
        set texture(TT) {
          (0, JT.e)(this, mT, TT, "f")
        }
        get legacy() {
          return (0, JT.d)(this, WT, "f")
        }
        set legacy(TT) {
          (0, JT.e)(this, WT, TT, "f")
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
          let zT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TT, "PBRAnisotropic", 110, new WU, zT), this._isEnabled = !1, UT.set(this, (0, JT.k)(this, jT, !1)), this.intensity = ((0, JT.k)(this, lT), (0, JT.k)(this, LT, 1)), this.direction = ((0, JT.k)(this, pT), (0, JT.k)(this, BT, new PT.o(1, 0))), this._texture = ((0, JT.k)(this, ZT), null), mT.set(this, (0, JT.k)(this, cT, null)), this._legacy = ((0, JT.k)(this, vT), !1), WT.set(this, (0, JT.k)(this, fT, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, JT.k)(this, qT), this._internalMarkAllSubMeshesAsTexturesDirty = TT._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = TT._dirtyCallbacks[16]
        }
        isReadyForSubMesh(TT, UT) {
          return !this._isEnabled || !(TT._areTexturesDirty && UT.texturesEnabled && this._texture && DT.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(TT, UT, mT) {
          this._isEnabled ? (TT.ANISOTROPIC = this._isEnabled, this._isEnabled && !mT.isVerticesDataPresent(VT.i.TangentKind) && (TT._needUVs = !0, TT.MAINUV1 = !0), TT._areTexturesDirty && UT.texturesEnabled && (this._texture && DT.e.AnisotropicTextureEnabled ? (0, AT.X)(this._texture, TT, "ANISOTROPIC_TEXTURE") : TT.ANISOTROPIC_TEXTURE = !1), TT._areMiscDirty && (TT.ANISOTROPIC_LEGACY = this._legacy)) : (TT.ANISOTROPIC = !1, TT.ANISOTROPIC_TEXTURE = !1, TT.ANISOTROPIC_TEXTUREDIRECTUV = 0, TT.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(TT, UT) {
          if (!this._isEnabled) return;
          const mT = this._material.isFrozen;
          TT.useUbo && mT && TT.isSync || (this._texture && DT.e.AnisotropicTextureEnabled && (TT.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, AT.x)(this._texture, TT, "anisotropy")), TT.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), UT.texturesEnabled && this._texture && DT.e.AnisotropicTextureEnabled && TT.setTexture("anisotropySampler", this._texture)
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
        addFallbacks(TT, UT, mT) {
          return TT.ANISOTROPIC && UT.addFallback(mT++, "ANISOTROPIC"), mT
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
        parse(TT, UT, mT) {
          super.parse(TT, UT, mT), void 0 === TT.legacy && (this.legacy = !0)
        }
      }, UT = new WeakMap, mT = new WeakMap, WT = new WeakMap, (() => {
        const UT = "function" === typeof Symbol && Symbol.metadata ? Object.create(kT[Symbol.metadata] ?? null) : void 0;
        zT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], MT = [(0, xT.L)()], gT = [(0, xT.F)()], nT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], HT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], (0, JT.h)(TT, null, zT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, UT) => {
              TT.isEnabled = UT
            }
          },
          metadata: UT
        }, jT, lT), (0, JT.h)(TT, null, nT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, UT) => {
              TT.texture = UT
            }
          },
          metadata: UT
        }, cT, vT), (0, JT.h)(TT, null, HT, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: TT => "legacy" in TT,
            get: TT => TT.legacy,
            set: (TT, UT) => {
              TT.legacy = UT
            }
          },
          metadata: UT
        }, fT, qT), (0, JT.h)(null, null, MT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, UT) => {
              TT.intensity = UT
            }
          },
          metadata: UT
        }, LT, pT), (0, JT.h)(null, null, gT, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: TT => "direction" in TT,
            get: TT => TT.direction,
            set: (TT, UT) => {
              TT.direction = UT
            }
          },
          metadata: UT
        }, BT, ZT), UT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UT
        })
      })(), TT
    })();
    class MU extends uT.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let gU = (() => {
      var TT, UT, mT, WT, zT, MT, gT, nT;
      let HT, kT, jT, lT, LT, pT, BT, ZT, cT, vT = CT.e,
        fT = [],
        qT = [],
        iT = [],
        bT = [],
        OT = [],
        eT = [],
        YT = [],
        dT = [],
        wT = [],
        tT = [],
        aT = [],
        yT = [],
        XT = [],
        IT = [],
        QT = [],
        sT = [],
        FT = [],
        PT = [];
      return TT = class extends vT {
        get isEnabled() {
          return (0, JT.d)(this, UT, "f")
        }
        set isEnabled(TT) {
          (0, JT.e)(this, UT, TT, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, JT.d)(this, mT, "f")
        }
        set linkSheenWithAlbedo(TT) {
          (0, JT.e)(this, mT, TT, "f")
        }
        get texture() {
          return (0, JT.d)(this, WT, "f")
        }
        set texture(TT) {
          (0, JT.e)(this, WT, TT, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, JT.d)(this, zT, "f")
        }
        set useRoughnessFromMainTexture(TT) {
          (0, JT.e)(this, zT, TT, "f")
        }
        get roughness() {
          return (0, JT.d)(this, MT, "f")
        }
        set roughness(TT) {
          (0, JT.e)(this, MT, TT, "f")
        }
        get textureRoughness() {
          return (0, JT.d)(this, gT, "f")
        }
        set textureRoughness(TT) {
          (0, JT.e)(this, gT, TT, "f")
        }
        get albedoScaling() {
          return (0, JT.d)(this, nT, "f")
        }
        set albedoScaling(TT) {
          (0, JT.e)(this, nT, TT, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(TT) {
          let HT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TT, "Sheen", 120, new MU, HT), this._isEnabled = !1, UT.set(this, (0, JT.k)(this, fT, !1)), this._linkSheenWithAlbedo = ((0, JT.k)(this, qT), !1), mT.set(this, (0, JT.k)(this, iT, !1)), this.intensity = ((0, JT.k)(this, bT), (0, JT.k)(this, OT, 1)), this.color = ((0, JT.k)(this, eT), (0, JT.k)(this, YT, GT.d.White())), this._texture = ((0, JT.k)(this, dT), null), WT.set(this, (0, JT.k)(this, wT, null)), this._useRoughnessFromMainTexture = ((0, JT.k)(this, tT), !0), zT.set(this, (0, JT.k)(this, aT, !0)), this._roughness = ((0, JT.k)(this, yT), null), MT.set(this, (0, JT.k)(this, XT, null)), this._textureRoughness = ((0, JT.k)(this, IT), null), gT.set(this, (0, JT.k)(this, QT, null)), this._albedoScaling = ((0, JT.k)(this, sT), !1), nT.set(this, (0, JT.k)(this, FT, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, JT.k)(this, PT), this._internalMarkAllSubMeshesAsTexturesDirty = TT._dirtyCallbacks[1]
        }
        isReadyForSubMesh(TT, UT) {
          if (!this._isEnabled) return !0;
          if (TT._areTexturesDirty && UT.texturesEnabled) {
            if (this._texture && DT.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && DT.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(TT, UT) {
          this._isEnabled ? (TT.SHEEN = !0, TT.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, TT.SHEEN_ROUGHNESS = null !== this._roughness, TT.SHEEN_ALBEDOSCALING = this._albedoScaling, TT.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, TT._areTexturesDirty && UT.texturesEnabled && (this._texture && DT.e.SheenTextureEnabled ? ((0, AT.X)(this._texture, TT, "SHEEN_TEXTURE"), TT.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : TT.SHEEN_TEXTURE = !1, this._textureRoughness && DT.e.SheenTextureEnabled ? (0, AT.X)(this._textureRoughness, TT, "SHEEN_TEXTURE_ROUGHNESS") : TT.SHEEN_TEXTURE_ROUGHNESS = !1)) : (TT.SHEEN = !1, TT.SHEEN_TEXTURE = !1, TT.SHEEN_TEXTURE_ROUGHNESS = !1, TT.SHEEN_LINKWITHALBEDO = !1, TT.SHEEN_ROUGHNESS = !1, TT.SHEEN_ALBEDOSCALING = !1, TT.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, TT.SHEEN_GAMMATEXTURE = !1, TT.SHEEN_TEXTUREDIRECTUV = 0, TT.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(TT, UT, mT, WT) {
          if (!this._isEnabled) return;
          const zT = WT.materialDefines,
            MT = this._material.isFrozen;
          TT.useUbo && MT && TT.isSync || ((this._texture || this._textureRoughness) && DT.e.SheenTextureEnabled && (TT.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, AT.x)(this._texture, TT, "sheen"), this._textureRoughness && !zT.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, AT.x)(this._textureRoughness, TT, "sheenRoughness")), TT.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && TT.updateFloat("vSheenRoughness", this._roughness)), UT.texturesEnabled && (this._texture && DT.e.SheenTextureEnabled && TT.setTexture("sheenSampler", this._texture), this._textureRoughness && !zT.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && DT.e.SheenTextureEnabled && TT.setTexture("sheenRoughnessSampler", this._textureRoughness))
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
        addFallbacks(TT, UT, mT) {
          return TT.SHEEN && UT.addFallback(mT++, "SHEEN"), mT
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
      }, UT = new WeakMap, mT = new WeakMap, WT = new WeakMap, zT = new WeakMap, MT = new WeakMap, gT = new WeakMap, nT = new WeakMap, (() => {
        const UT = "function" === typeof Symbol && Symbol.metadata ? Object.create(vT[Symbol.metadata] ?? null) : void 0;
        HT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], kT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], jT = [(0, xT.L)()], lT = [(0, xT.l)()], LT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], pT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], BT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], ZT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], cT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], (0, JT.h)(TT, null, HT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, UT) => {
              TT.isEnabled = UT
            }
          },
          metadata: UT
        }, fT, qT), (0, JT.h)(TT, null, kT, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: TT => "linkSheenWithAlbedo" in TT,
            get: TT => TT.linkSheenWithAlbedo,
            set: (TT, UT) => {
              TT.linkSheenWithAlbedo = UT
            }
          },
          metadata: UT
        }, iT, bT), (0, JT.h)(TT, null, LT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, UT) => {
              TT.texture = UT
            }
          },
          metadata: UT
        }, wT, tT), (0, JT.h)(TT, null, pT, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRoughnessFromMainTexture" in TT,
            get: TT => TT.useRoughnessFromMainTexture,
            set: (TT, UT) => {
              TT.useRoughnessFromMainTexture = UT
            }
          },
          metadata: UT
        }, aT, yT), (0, JT.h)(TT, null, BT, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "roughness" in TT,
            get: TT => TT.roughness,
            set: (TT, UT) => {
              TT.roughness = UT
            }
          },
          metadata: UT
        }, XT, IT), (0, JT.h)(TT, null, ZT, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "textureRoughness" in TT,
            get: TT => TT.textureRoughness,
            set: (TT, UT) => {
              TT.textureRoughness = UT
            }
          },
          metadata: UT
        }, QT, sT), (0, JT.h)(TT, null, cT, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: TT => "albedoScaling" in TT,
            get: TT => TT.albedoScaling,
            set: (TT, UT) => {
              TT.albedoScaling = UT
            }
          },
          metadata: UT
        }, FT, PT), (0, JT.h)(null, null, jT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, UT) => {
              TT.intensity = UT
            }
          },
          metadata: UT
        }, OT, eT), (0, JT.h)(null, null, lT, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: TT => "color" in TT,
            get: TT => TT.color,
            set: (TT, UT) => {
              TT.color = UT
            }
          },
          metadata: UT
        }, YT, dT), UT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UT
        })
      })(), TT
    })();
    class nU extends uT.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let HU = (() => {
      var TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT;
      let vT, fT, qT, iT, bT, OT, eT, YT, dT, wT, tT, aT, yT, XT, IT, QT, sT, FT, VT, uT, rT, KT, ST, NT, ET, hT, oT, RT, TU, UU, mU = CT.e,
        WU = [],
        zU = [],
        MU = [],
        gU = [],
        HU = [],
        kU = [],
        jU = [],
        lU = [],
        LU = [],
        pU = [],
        BU = [],
        ZU = [],
        cU = [],
        vU = [],
        fU = [],
        qU = [],
        iU = [],
        bU = [],
        OU = [],
        eU = [],
        YU = [],
        JU = [],
        xU = [],
        dU = [],
        wU = [],
        tU = [],
        aU = [],
        yU = [],
        XU = [],
        IU = [],
        QU = [],
        sU = [],
        FU = [],
        PU = [],
        VU = [],
        uU = [],
        CU = [],
        rU = [],
        KU = [],
        SU = [],
        GU = [],
        NU = [],
        EU = [],
        hU = [],
        DU = [],
        oU = [],
        AU = [],
        RU = [],
        Tm = [],
        Um = [],
        mm = [],
        Wm = [],
        zm = [],
        Mm = [],
        gm = [],
        nm = [],
        Hm = [],
        km = [],
        jm = [],
        lm = [];
      return TT = class extends mU {
        get isRefractionEnabled() {
          return (0, JT.d)(this, UT, "f")
        }
        set isRefractionEnabled(TT) {
          (0, JT.e)(this, UT, TT, "f")
        }
        get isTranslucencyEnabled() {
          return (0, JT.d)(this, mT, "f")
        }
        set isTranslucencyEnabled(TT) {
          (0, JT.e)(this, mT, TT, "f")
        }
        get isDispersionEnabled() {
          return (0, JT.d)(this, WT, "f")
        }
        set isDispersionEnabled(TT) {
          (0, JT.e)(this, WT, TT, "f")
        }
        get isScatteringEnabled() {
          return (0, JT.d)(this, zT, "f")
        }
        set isScatteringEnabled(TT) {
          (0, JT.e)(this, zT, TT, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(TT) {
          this._scene.enableSubSurfaceForPrePass() && TT && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(TT))
        }
        get useAlbedoToTintRefraction() {
          return (0, JT.d)(this, MT, "f")
        }
        set useAlbedoToTintRefraction(TT) {
          (0, JT.e)(this, MT, TT, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, JT.d)(this, gT, "f")
        }
        set useAlbedoToTintTranslucency(TT) {
          (0, JT.e)(this, gT, TT, "f")
        }
        get thicknessTexture() {
          return (0, JT.d)(this, nT, "f")
        }
        set thicknessTexture(TT) {
          (0, JT.e)(this, nT, TT, "f")
        }
        get refractionTexture() {
          return (0, JT.d)(this, HT, "f")
        }
        set refractionTexture(TT) {
          (0, JT.e)(this, HT, TT, "f")
        }
        get indexOfRefraction() {
          return (0, JT.d)(this, kT, "f")
        }
        set indexOfRefraction(TT) {
          (0, JT.e)(this, kT, TT, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(TT) {
          const UT = TT >= 1 ? TT : -1;
          this._volumeIndexOfRefraction !== UT && (this._volumeIndexOfRefraction = UT, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, JT.d)(this, jT, "f")
        }
        set invertRefractionY(TT) {
          (0, JT.e)(this, jT, TT, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, JT.d)(this, lT, "f")
        }
        set linkRefractionWithTransparency(TT) {
          (0, JT.e)(this, lT, TT, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, JT.d)(this, LT, "f")
        }
        set useMaskFromThicknessTexture(TT) {
          (0, JT.e)(this, LT, TT, "f")
        }
        get refractionIntensityTexture() {
          return (0, JT.d)(this, pT, "f")
        }
        set refractionIntensityTexture(TT) {
          (0, JT.e)(this, pT, TT, "f")
        }
        get translucencyIntensityTexture() {
          return (0, JT.d)(this, BT, "f")
        }
        set translucencyIntensityTexture(TT) {
          (0, JT.e)(this, BT, TT, "f")
        }
        get translucencyColorTexture() {
          return (0, JT.d)(this, ZT, "f")
        }
        set translucencyColorTexture(TT) {
          (0, JT.e)(this, ZT, TT, "f")
        }
        get useGltfStyleTextures() {
          return (0, JT.d)(this, cT, "f")
        }
        set useGltfStyleTextures(TT) {
          (0, JT.e)(this, cT, TT, "f")
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
        constructor(vT) {
          let fT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(vT, "PBRSubSurface", 130, new nU, fT), this._isRefractionEnabled = !1, UT.set(this, (0, JT.k)(this, WU, !1)), this._isTranslucencyEnabled = ((0, JT.k)(this, zU), !1), mT.set(this, (0, JT.k)(this, MU, !1)), this._isDispersionEnabled = ((0, JT.k)(this, gU), !1), WT.set(this, (0, JT.k)(this, HU, !1)), this._isScatteringEnabled = ((0, JT.k)(this, kU), !1), zT.set(this, (0, JT.k)(this, jU, !1)), this._scatteringDiffusionProfileIndex = ((0, JT.k)(this, lU), (0, JT.k)(this, LU, 0)), this.refractionIntensity = ((0, JT.k)(this, pU), (0, JT.k)(this, BU, 1)), this.translucencyIntensity = ((0, JT.k)(this, ZU), (0, JT.k)(this, cU, 1)), this._useAlbedoToTintRefraction = ((0, JT.k)(this, vU), !1), MT.set(this, (0, JT.k)(this, fU, !1)), this._useAlbedoToTintTranslucency = ((0, JT.k)(this, qU), !1), gT.set(this, (0, JT.k)(this, iU, !1)), this._thicknessTexture = ((0, JT.k)(this, bU), null), nT.set(this, (0, JT.k)(this, OU, null)), this._refractionTexture = ((0, JT.k)(this, eU), null), HT.set(this, (0, JT.k)(this, YU, null)), this._indexOfRefraction = ((0, JT.k)(this, JU), 1.5), kT.set(this, (0, JT.k)(this, xU, 1.5)), this._volumeIndexOfRefraction = ((0, JT.k)(this, dU), (0, JT.k)(this, wU, -1)), this._invertRefractionY = ((0, JT.k)(this, tU), !1), jT.set(this, (0, JT.k)(this, aU, !1)), this._linkRefractionWithTransparency = ((0, JT.k)(this, yU), !1), lT.set(this, (0, JT.k)(this, XU, !1)), this.minimumThickness = ((0, JT.k)(this, IU), (0, JT.k)(this, QU, 0)), this.maximumThickness = ((0, JT.k)(this, sU), (0, JT.k)(this, FU, 1)), this.useThicknessAsDepth = ((0, JT.k)(this, PU), (0, JT.k)(this, VU, !1)), this.tintColor = ((0, JT.k)(this, uU), (0, JT.k)(this, CU, GT.d.White())), this.tintColorAtDistance = ((0, JT.k)(this, rU), (0, JT.k)(this, KU, 1)), this.dispersion = ((0, JT.k)(this, SU), (0, JT.k)(this, GU, 0)), this.diffusionDistance = ((0, JT.k)(this, NU), (0, JT.k)(this, EU, GT.d.White())), this._useMaskFromThicknessTexture = ((0, JT.k)(this, hU), !1), LT.set(this, (0, JT.k)(this, DU, !1)), this._refractionIntensityTexture = ((0, JT.k)(this, oU), null), pT.set(this, (0, JT.k)(this, AU, null)), this._translucencyIntensityTexture = ((0, JT.k)(this, RU), null), BT.set(this, (0, JT.k)(this, Tm, null)), this.translucencyColor = ((0, JT.k)(this, Um), (0, JT.k)(this, mm, null)), this._translucencyColorTexture = ((0, JT.k)(this, Wm), null), ZT.set(this, (0, JT.k)(this, zm, null)), this._useGltfStyleTextures = ((0, JT.k)(this, Mm), !0), cT.set(this, (0, JT.k)(this, gm, !0)), this.applyAlbedoAfterSubSurface = ((0, JT.k)(this, nm), (0, JT.k)(this, Hm, TT.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, JT.k)(this, km), (0, JT.k)(this, jm, TT.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, JT.k)(this, lm), this._scene = vT.KF(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = vT._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = vT._dirtyCallbacks[32]
        }
        isReadyForSubMesh(TT, UT) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (TT._areTexturesDirty && UT.texturesEnabled) {
            if (this._thicknessTexture && DT.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && DT.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && DT.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && DT.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const TT = this._getRefractionTexture(UT);
            if (TT && DT.e.RefractionTextureEnabled && !TT.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(TT, UT) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return TT.SUBSURFACE = !1, TT.SS_DISPERSION = !1, TT.SS_TRANSLUCENCY = !1, TT.SS_SCATTERING = !1, TT.SS_REFRACTION = !1, TT.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, TT.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, TT.SS_THICKNESSANDMASK_TEXTURE = !1, TT.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, TT.SS_HAS_THICKNESS = !1, TT.SS_REFRACTIONINTENSITY_TEXTURE = !1, TT.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, TT.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, TT.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, TT.SS_REFRACTIONMAP_3D = !1, TT.SS_REFRACTIONMAP_OPPOSITEZ = !1, TT.SS_LODINREFRACTIONALPHA = !1, TT.SS_GAMMAREFRACTION = !1, TT.SS_RGBDREFRACTION = !1, TT.SS_LINEARSPECULARREFRACTION = !1, TT.SS_LINKREFRACTIONTOTRANSPARENCY = !1, TT.SS_ALBEDOFORREFRACTIONTINT = !1, TT.SS_ALBEDOFORTRANSLUCENCYTINT = !1, TT.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, TT.SS_USE_THICKNESS_AS_DEPTH = !1, TT.SS_USE_GLTF_TEXTURES = !1, TT.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, TT.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, TT.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(TT.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (TT._areTexturesDirty) {
            if (TT.SUBSURFACE = !0, TT.SS_DISPERSION = this._isDispersionEnabled, TT.SS_TRANSLUCENCY = this._isTranslucencyEnabled, TT.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, TT.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, TT.SS_SCATTERING = this._isScatteringEnabled, TT.SS_THICKNESSANDMASK_TEXTURE = !1, TT.SS_REFRACTIONINTENSITY_TEXTURE = !1, TT.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, TT.SS_HAS_THICKNESS = !1, TT.SS_USE_GLTF_TEXTURES = !1, TT.SS_REFRACTION = !1, TT.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, TT.SS_REFRACTIONMAP_3D = !1, TT.SS_GAMMAREFRACTION = !1, TT.SS_RGBDREFRACTION = !1, TT.SS_LINEARSPECULARREFRACTION = !1, TT.SS_REFRACTIONMAP_OPPOSITEZ = !1, TT.SS_LODINREFRACTIONALPHA = !1, TT.SS_LINKREFRACTIONTOTRANSPARENCY = !1, TT.SS_ALBEDOFORREFRACTIONTINT = !1, TT.SS_ALBEDOFORTRANSLUCENCYTINT = !1, TT.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, TT.SS_USE_THICKNESS_AS_DEPTH = !1, TT.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, TT.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, TT._areTexturesDirty && UT.texturesEnabled && (this._thicknessTexture && DT.e.ThicknessTextureEnabled && (0, AT.X)(this._thicknessTexture, TT, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && DT.e.RefractionIntensityTextureEnabled && (0, AT.X)(this._refractionIntensityTexture, TT, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && DT.e.TranslucencyIntensityTextureEnabled && (0, AT.X)(this._translucencyIntensityTexture, TT, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && DT.e.TranslucencyColorTextureEnabled && ((0, AT.X)(this._translucencyColorTexture, TT, "SS_TRANSLUCENCYCOLOR_TEXTURE"), TT.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), TT.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, TT.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, TT.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, TT.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && UT.texturesEnabled) {
              const mT = this._getRefractionTexture(UT);
              mT && DT.e.RefractionTextureEnabled && (TT.SS_REFRACTION = !0, TT.SS_REFRACTIONMAP_3D = mT.isCube, TT.SS_GAMMAREFRACTION = mT.gammaSpace, TT.SS_RGBDREFRACTION = mT.isRGBD, TT.SS_LINEARSPECULARREFRACTION = mT.linearSpecularLOD, TT.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && mT.isCube ? !mT.invertZ : mT.invertZ, TT.SS_LODINREFRACTIONALPHA = mT.lodLevelInAlpha, TT.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, TT.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, TT.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = mT.isCube && mT.boundingBoxSize, TT.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (TT.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(TT, UT, mT, WT) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) TT.updateFloat2("vThicknessParam", 0, 0);
            else {
              WT.getRenderingMesh().getWorldMatrix().decompose(PT.l.JB[0]);
              const UT = Math.max(Math.abs(PT.l.JB[0].x), Math.abs(PT.l.JB[0].y), Math.abs(PT.l.JB[0].z));
              TT.updateFloat2("vThicknessParam", this.minimumThickness * UT, (this.maximumThickness - this.minimumThickness) * UT)
            }
        }
        bindForSubMesh(TT, UT, mT, WT) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const zT = WT.materialDefines,
            MT = this._material.isFrozen,
            gT = this._material.realTimeFiltering,
            nT = zT.LODBASEDMICROSFURACE,
            HT = this._getRefractionTexture(UT);
          if (!TT.useUbo || !MT || !TT.isSync) {
            if (this._thicknessTexture && DT.e.ThicknessTextureEnabled && (TT.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, AT.x)(this._thicknessTexture, TT, "thickness")), this._refractionIntensityTexture && DT.e.RefractionIntensityTextureEnabled && zT.SS_REFRACTIONINTENSITY_TEXTURE && (TT.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, AT.x)(this._refractionIntensityTexture, TT, "refractionIntensity")), this._translucencyColorTexture && DT.e.TranslucencyColorTextureEnabled && zT.SS_TRANSLUCENCYCOLOR_TEXTURE && (TT.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, AT.x)(this._translucencyColorTexture, TT, "translucencyColor")), this._translucencyIntensityTexture && DT.e.TranslucencyIntensityTextureEnabled && zT.SS_TRANSLUCENCYINTENSITY_TEXTURE && (TT.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, AT.x)(this._translucencyIntensityTexture, TT, "translucencyIntensity")), HT && DT.e.RefractionTextureEnabled) {
              TT.R7("refractionMatrix", HT.getRefractionTextureMatrix());
              let UT = 1;
              HT.isCube || HT.depth && (UT = HT.depth);
              const mT = HT.getSize().width,
                WT = this.volumeIndexOfRefraction;
              if (TT.updateFloat4("vRefractionInfos", HT.level, 1 / WT, UT, this._invertRefractionY ? -1 : 1), TT.updateFloat4("vRefractionMicrosurfaceInfos", mT, HT.lodGenerationScale, HT.lodGenerationOffset, 1 / this.indexOfRefraction), gT && TT.updateFloat2("vRefractionFilteringInfo", mT, Math.log2(mT)), HT.boundingBoxSize) {
                const UT = HT;
                TT.updateVector3("vRefractionPosition", UT.boundingBoxPosition), TT.updateVector3("vRefractionSize", UT.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && TT.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), TT.updateColor3("vDiffusionDistance", this.diffusionDistance), TT.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), TT.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), TT.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), TT.updateFloat("dispersion", this.dispersion)
          }
          UT.texturesEnabled && (this._thicknessTexture && DT.e.ThicknessTextureEnabled && TT.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && DT.e.RefractionIntensityTextureEnabled && zT.SS_REFRACTIONINTENSITY_TEXTURE && TT.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && DT.e.TranslucencyIntensityTextureEnabled && zT.SS_TRANSLUCENCYINTENSITY_TEXTURE && TT.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && DT.e.TranslucencyColorTextureEnabled && zT.SS_TRANSLUCENCYCOLOR_TEXTURE && TT.setTexture("translucencyColorSampler", this._translucencyColorTexture), HT && DT.e.RefractionTextureEnabled && (nT ? TT.setTexture("refractionSampler", HT) : (TT.setTexture("refractionSampler", HT._lodTextureMid || HT), TT.setTexture("refractionSamplerLow", HT._lodTextureLow || HT), TT.setTexture("refractionSamplerHigh", HT._lodTextureHigh || HT))))
        }
        _getRefractionTexture(TT) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? TT.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(TT) {
          DT.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && TT.push(this._refractionTexture)
        }
        hasTexture(TT) {
          return this._thicknessTexture === TT || (this._refractionTexture === TT || (this._refractionIntensityTexture === TT || (this._translucencyIntensityTexture === TT || this._translucencyColorTexture === TT)))
        }
        hasRenderTargetTextures() {
          return !!(DT.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
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
        addFallbacks(TT, UT, mT) {
          return TT.SS_SCATTERING && UT.addFallback(mT++, "SS_SCATTERING"), TT.SS_TRANSLUCENCY && UT.addFallback(mT++, "SS_TRANSLUCENCY"), mT
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
      }, UT = new WeakMap, mT = new WeakMap, WT = new WeakMap, zT = new WeakMap, MT = new WeakMap, gT = new WeakMap, nT = new WeakMap, HT = new WeakMap, kT = new WeakMap, jT = new WeakMap, lT = new WeakMap, LT = new WeakMap, pT = new WeakMap, BT = new WeakMap, ZT = new WeakMap, cT = new WeakMap, (() => {
        const UT = "function" === typeof Symbol && Symbol.metadata ? Object.create(mU[Symbol.metadata] ?? null) : void 0;
        vT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], fT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], qT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], iT = [(0, xT.L)(), (0, xT.g)("_markScenePrePassDirty")], bT = [(0, xT.L)()], OT = [(0, xT.L)()], eT = [(0, xT.L)()], YT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], dT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], wT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], tT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], aT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], yT = [(0, xT.L)()], XT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], IT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], QT = [(0, xT.L)()], sT = [(0, xT.L)()], FT = [(0, xT.L)()], VT = [(0, xT.l)()], uT = [(0, xT.L)()], rT = [(0, xT.L)()], KT = [(0, xT.l)()], ST = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], NT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], ET = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], hT = [(0, xT.l)()], oT = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], RT = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], TU = [(0, xT.L)()], UU = [(0, xT.L)()], (0, JT.h)(TT, null, vT, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isRefractionEnabled" in TT,
            get: TT => TT.isRefractionEnabled,
            set: (TT, UT) => {
              TT.isRefractionEnabled = UT
            }
          },
          metadata: UT
        }, WU, zU), (0, JT.h)(TT, null, fT, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isTranslucencyEnabled" in TT,
            get: TT => TT.isTranslucencyEnabled,
            set: (TT, UT) => {
              TT.isTranslucencyEnabled = UT
            }
          },
          metadata: UT
        }, MU, gU), (0, JT.h)(TT, null, qT, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isDispersionEnabled" in TT,
            get: TT => TT.isDispersionEnabled,
            set: (TT, UT) => {
              TT.isDispersionEnabled = UT
            }
          },
          metadata: UT
        }, HU, kU), (0, JT.h)(TT, null, iT, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isScatteringEnabled" in TT,
            get: TT => TT.isScatteringEnabled,
            set: (TT, UT) => {
              TT.isScatteringEnabled = UT
            }
          },
          metadata: UT
        }, jU, lU), (0, JT.h)(TT, null, YT, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAlbedoToTintRefraction" in TT,
            get: TT => TT.useAlbedoToTintRefraction,
            set: (TT, UT) => {
              TT.useAlbedoToTintRefraction = UT
            }
          },
          metadata: UT
        }, fU, qU), (0, JT.h)(TT, null, dT, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAlbedoToTintTranslucency" in TT,
            get: TT => TT.useAlbedoToTintTranslucency,
            set: (TT, UT) => {
              TT.useAlbedoToTintTranslucency = UT
            }
          },
          metadata: UT
        }, iU, bU), (0, JT.h)(TT, null, wT, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "thicknessTexture" in TT,
            get: TT => TT.thicknessTexture,
            set: (TT, UT) => {
              TT.thicknessTexture = UT
            }
          },
          metadata: UT
        }, OU, eU), (0, JT.h)(TT, null, tT, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "refractionTexture" in TT,
            get: TT => TT.refractionTexture,
            set: (TT, UT) => {
              TT.refractionTexture = UT
            }
          },
          metadata: UT
        }, YU, JU), (0, JT.h)(TT, null, aT, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "indexOfRefraction" in TT,
            get: TT => TT.indexOfRefraction,
            set: (TT, UT) => {
              TT.indexOfRefraction = UT
            }
          },
          metadata: UT
        }, xU, dU), (0, JT.h)(TT, null, XT, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: TT => "invertRefractionY" in TT,
            get: TT => TT.invertRefractionY,
            set: (TT, UT) => {
              TT.invertRefractionY = UT
            }
          },
          metadata: UT
        }, aU, yU), (0, JT.h)(TT, null, IT, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: TT => "linkRefractionWithTransparency" in TT,
            get: TT => TT.linkRefractionWithTransparency,
            set: (TT, UT) => {
              TT.linkRefractionWithTransparency = UT
            }
          },
          metadata: UT
        }, XU, IU), (0, JT.h)(TT, null, ST, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useMaskFromThicknessTexture" in TT,
            get: TT => TT.useMaskFromThicknessTexture,
            set: (TT, UT) => {
              TT.useMaskFromThicknessTexture = UT
            }
          },
          metadata: UT
        }, DU, oU), (0, JT.h)(TT, null, NT, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "refractionIntensityTexture" in TT,
            get: TT => TT.refractionIntensityTexture,
            set: (TT, UT) => {
              TT.refractionIntensityTexture = UT
            }
          },
          metadata: UT
        }, AU, RU), (0, JT.h)(TT, null, ET, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "translucencyIntensityTexture" in TT,
            get: TT => TT.translucencyIntensityTexture,
            set: (TT, UT) => {
              TT.translucencyIntensityTexture = UT
            }
          },
          metadata: UT
        }, Tm, Um), (0, JT.h)(TT, null, oT, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "translucencyColorTexture" in TT,
            get: TT => TT.translucencyColorTexture,
            set: (TT, UT) => {
              TT.translucencyColorTexture = UT
            }
          },
          metadata: UT
        }, zm, Mm), (0, JT.h)(TT, null, RT, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: TT => "useGltfStyleTextures" in TT,
            get: TT => TT.useGltfStyleTextures,
            set: (TT, UT) => {
              TT.useGltfStyleTextures = UT
            }
          },
          metadata: UT
        }, gm, nm), (0, JT.h)(null, null, bT, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: TT => "_scatteringDiffusionProfileIndex" in TT,
            get: TT => TT._scatteringDiffusionProfileIndex,
            set: (TT, UT) => {
              TT._scatteringDiffusionProfileIndex = UT
            }
          },
          metadata: UT
        }, LU, pU), (0, JT.h)(null, null, OT, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "refractionIntensity" in TT,
            get: TT => TT.refractionIntensity,
            set: (TT, UT) => {
              TT.refractionIntensity = UT
            }
          },
          metadata: UT
        }, BU, ZU), (0, JT.h)(null, null, eT, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "translucencyIntensity" in TT,
            get: TT => TT.translucencyIntensity,
            set: (TT, UT) => {
              TT.translucencyIntensity = UT
            }
          },
          metadata: UT
        }, cU, vU), (0, JT.h)(null, null, yT, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "_volumeIndexOfRefraction" in TT,
            get: TT => TT._volumeIndexOfRefraction,
            set: (TT, UT) => {
              TT._volumeIndexOfRefraction = UT
            }
          },
          metadata: UT
        }, wU, tU), (0, JT.h)(null, null, QT, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "minimumThickness" in TT,
            get: TT => TT.minimumThickness,
            set: (TT, UT) => {
              TT.minimumThickness = UT
            }
          },
          metadata: UT
        }, QU, sU), (0, JT.h)(null, null, sT, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "maximumThickness" in TT,
            get: TT => TT.maximumThickness,
            set: (TT, UT) => {
              TT.maximumThickness = UT
            }
          },
          metadata: UT
        }, FU, PU), (0, JT.h)(null, null, FT, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: TT => "useThicknessAsDepth" in TT,
            get: TT => TT.useThicknessAsDepth,
            set: (TT, UT) => {
              TT.useThicknessAsDepth = UT
            }
          },
          metadata: UT
        }, VU, uU), (0, JT.h)(null, null, VT, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintColor" in TT,
            get: TT => TT.tintColor,
            set: (TT, UT) => {
              TT.tintColor = UT
            }
          },
          metadata: UT
        }, CU, rU), (0, JT.h)(null, null, uT, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintColorAtDistance" in TT,
            get: TT => TT.tintColorAtDistance,
            set: (TT, UT) => {
              TT.tintColorAtDistance = UT
            }
          },
          metadata: UT
        }, KU, SU), (0, JT.h)(null, null, rT, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: TT => "dispersion" in TT,
            get: TT => TT.dispersion,
            set: (TT, UT) => {
              TT.dispersion = UT
            }
          },
          metadata: UT
        }, GU, NU), (0, JT.h)(null, null, KT, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "diffusionDistance" in TT,
            get: TT => TT.diffusionDistance,
            set: (TT, UT) => {
              TT.diffusionDistance = UT
            }
          },
          metadata: UT
        }, EU, hU), (0, JT.h)(null, null, hT, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "translucencyColor" in TT,
            get: TT => TT.translucencyColor,
            set: (TT, UT) => {
              TT.translucencyColor = UT
            }
          },
          metadata: UT
        }, mm, Wm), (0, JT.h)(null, null, TU, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: TT => "applyAlbedoAfterSubSurface" in TT,
            get: TT => TT.applyAlbedoAfterSubSurface,
            set: (TT, UT) => {
              TT.applyAlbedoAfterSubSurface = UT
            }
          },
          metadata: UT
        }, Hm, km), (0, JT.h)(null, null, UU, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: TT => "legacyTranslucency" in TT,
            get: TT => TT.legacyTranslucency,
            set: (TT, UT) => {
              TT.legacyTranslucency = UT
            }
          },
          metadata: UT
        }, jm, lm), UT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UT
        })
      })(), TT.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, TT.DEFAULT_LEGACY_TRANSLUCENCY = !1, TT
    })();
    var kU = mT(40484),
      jU = mT(40463),
      lU = mT(40495),
      LU = mT(40503),
      pU = mT(40511),
      BU = mT(40513),
      ZU = mT(40521),
      cU = mT(40524),
      vU = mT(39965);
    const fU = {
      effect: null,
      subMesh: null
    };
    class qU extends((0, ZU.e)((0, BU.b)(uT.d))) {}
    class iU extends((0, NT.f)(qU)) {
      constructor(TT) {
        super(TT), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class bU extends((0, cU.b)(hT.c)) {}
    let OU = (() => {
      var TT, UT;
      let WT, zT = bU,
        gT = [],
        nT = [];
      return TT = class extends zT {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(TT) {
          this._realTimeFiltering = TT, this.NUT(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(TT) {
          this._realTimeFilteringQuality = TT, this.NUT(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, JT.d)(this, UT, "f")
        }
        set debugMode(TT) {
          (0, JT.e)(this, UT, TT, "f")
        }
        constructor(mT, WT) {
          super(mT, WT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || TT.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new PT.t(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = TT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = GT.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new GT.d(0, 0, 0), this._albedoColor = new GT.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new GT.d(1, 1, 1), this._reflectionColor = new GT.d(1, 1, 1), this._emissiveColor = new GT.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = TT.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new wT.f(16), this._globalAmbientColor = new GT.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, UT.set(this, (0, JT.k)(this, gT, 0)), this.debugLimit = ((0, JT.k)(this, nT), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new KT(this), this.clearCoat = new TU(this), this.iridescence = new mU(this), this.anisotropy = new zU(this), this.sheen = new gU(this), this.subSurface = new HU(this), this.detailMap = new kU.c(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), DT.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = IT(this.KF()), this.prePassConfiguration = new ST.d
        }
        get hasRenderTargetTextures() {
          return !!(DT.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
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
        isReadyForSubMesh(TT, UT, mT) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const WT = UT._drawWrapper;
          if (WT.effect && this.isFrozen && WT._wasPreviouslyReady && WT._wasPreviouslyUsingInstances === mT) return !0;
          UT.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), UT.materialDefines = new iU(this._eventInfo.defineNames));
          const zT = UT.materialDefines;
          if (this._isReadyForSubMesh(UT)) return !0;
          const MT = this.KF(),
            gT = MT.eB();
          if (zT._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, MT.texturesEnabled)) {
            if (this._albedoTexture && DT.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && DT.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && DT.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && DT.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && DT.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const TT = this._getReflectionTexture();
            if (TT && DT.e.ReflectionTextureEnabled) {
              if (!TT.isReadyOrNotBlocking()) return !1;
              if (TT.irradianceTexture) {
                if (!TT.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!TT.sphericalPolynomial && TT.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && DT.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && DT.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (DT.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (gT.getCaps().standardDerivatives && this._bumpTexture && DT.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && DT.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = zT, this._eventInfo.subMesh = UT, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (zT._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (zT.AREALIGHTUSED || zT.CLUSTLIGHT_BATCH)
            for (let lT = 0; lT < TT.lightSources.length; lT++)
              if (!TT.lightSources[lT]._isReady()) return !1;
          if (gT.getCaps().standardDerivatives || TT.isVerticesDataPresent(VT.i.NormalKind) || (TT.createNormals(!0), dT.b.Warn("PBRMaterial: Normals have been created for the mesh: " + TT.name)), !(0, AT.c)(MT, TT, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const nT = UT.effect,
            HT = zT._areLightsDisposed,
            kT = this._prepareEffect(TT, UT.getRenderingMesh(), zT, this.onCompiled, this.onError, mT, null);
          let jT = !1;
          if (kT)
            if (this._onEffectCreatedObservable && (fU.effect = kT, fU.subMesh = UT, this._onEffectCreatedObservable.notifyObservers(fU)), this.allowShaderHotSwapping && nT && !kT.isReady()) {
              if (zT.markAsUnprocessed(), jT = this.isFrozen, HT) return zT._areLightsDisposed = !0, !1
            } else MT.resetCachedMaterial(), UT.setEffect(kT, zT, this._materialContext);
          return !(!UT.effect || !UT.effect.isReady()) && (zT._renderId = MT.getRenderId(), WT._wasPreviouslyReady = !jT, WT._wasPreviouslyUsingInstances = !!mT, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(UT, mT, WT) {
          let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            gT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            nT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(UT, mT, WT, gT, nT), !WT.isDirty) return null;
          WT.markAsProcessed();
          const HT = this.KF().eB(),
            kT = new oT.c;
          let jT = 0;
          WT.USESPHERICALINVERTEX && kT.addFallback(jT++, "USESPHERICALINVERTEX"), WT.FOG && kT.addFallback(jT, "FOG"), WT.SPECULARAA && kT.addFallback(jT, "SPECULARAA"), WT.POINTSIZE && kT.addFallback(jT, "POINTSIZE"), WT.LOGARITHMICDEPTH && kT.addFallback(jT, "LOGARITHMICDEPTH"), WT.PARALLAX && kT.addFallback(jT, "PARALLAX"), WT.PARALLAX_RHS && kT.addFallback(jT, "PARALLAX_RHS"), WT.PARALLAXOCCLUSION && kT.addFallback(jT++, "PARALLAXOCCLUSION"), WT.ENVIRONMENTBRDF && kT.addFallback(jT++, "ENVIRONMENTBRDF"), WT.TANGENT && kT.addFallback(jT++, "TANGENT"), WT.BUMP && kT.addFallback(jT++, "BUMP"), jT = (0, AT.y)(WT, kT, this._maxSimultaneousLights, jT), WT.SPECULARTERM && kT.addFallback(jT++, "SPECULARTERM"), WT.USESPHERICALFROMREFLECTIONMAP && kT.addFallback(jT++, "USESPHERICALFROMREFLECTIONMAP"), WT.USEIRRADIANCEMAP && kT.addFallback(jT++, "USEIRRADIANCEMAP"), WT.LIGHTMAP && kT.addFallback(jT++, "LIGHTMAP"), WT.NORMAL && kT.addFallback(jT++, "NORMAL"), WT.AMBIENT && kT.addFallback(jT++, "AMBIENT"), WT.EMISSIVE && kT.addFallback(jT++, "EMISSIVE"), WT.VERTEXCOLOR && kT.addFallback(jT++, "VERTEXCOLOR"), WT.MORPHTARGETS && kT.addFallback(jT++, "MORPHTARGETS"), WT.MULTIVIEW && kT.addFallback(0, "MULTIVIEW");
          const lT = [VT.i.PositionKind];
          WT.NORMAL && lT.push(VT.i.NormalKind), WT.TANGENT && lT.push(VT.i.TangentKind);
          for (let TT = 1; TT <= 6; ++TT) WT["UV" + TT] && lT.push(`uv${1===TT?"":TT}`);
          WT.VERTEXCOLOR && lT.push(VT.i.ColorKind), (0, AT.E)(lT, UT, WT, kT), (0, AT.G)(lT, WT), (0, AT.J)(lT, UT, WT), (0, AT.C)(lT, UT, WT);
          let LT = "pbr";
          const pT = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            BT = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, AT.ob)(pT, BT, !0);
          const ZT = ["Material", "Scene", "Mesh"],
            cT = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: WT.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = kT, this._eventInfo.fallbackRank = jT, this._eventInfo.defines = WT, this._eventInfo.uniforms = pT, this._eventInfo.attributes = lT, this._eventInfo.samplers = BT, this._eventInfo.uniformBuffersNames = ZT, this._eventInfo.customCode = void 0, this._eventInfo.mesh = UT, this._eventInfo.indexParameters = cT, this._callbackPluginEventGeneric(128, this._eventInfo), pU.c.AddUniformsAndSamplers(pT, BT), ST.d.AddUniforms(pT), ST.d.AddSamplers(BT), (0, jU.b)(pT), this._useVertexPulling) {
            const TT = mT?.geometry;
            TT && (this._vertexPullingMetadata = (0, lU.f)(TT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, UT) => {
              pT.push(`vp_${UT}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          ET.b && (ET.b.PrepareUniforms(pT, WT), ET.b.PrepareSamplers(BT, WT)), (0, AT.rb)({
            uniformsNames: pT,
            uniformBuffersNames: ZT,
            samplers: BT,
            defines: WT,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const vT = {};
          this.customShaderNameResolve && (LT = this.customShaderNameResolve(LT, pT, ZT, BT, WT, lT, vT));
          const fT = WT.toString(),
            qT = HT.createEffect(LT, {
              attributes: lT,
              uniformsNames: pT,
              uniformBuffersNames: ZT,
              samplers: BT,
              defines: fT,
              fallbacks: kT,
              onCompiled: zT,
              onError: MT,
              indexParameters: cT,
              processFinalCode: vT.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: WT.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: TT._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, HT);
          return this._eventInfo.customCode = void 0, qT
        }
        _prepareDefines(UT, mT, WT) {
          let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const gT = mT.hasThinInstances,
            nT = this.KF(),
            HT = nT.eB();
          (0, AT.W)(nT, UT, WT, !0, this._maxSimultaneousLights, this._disableLighting), WT._needNormals = !0, (0, AT.db)(nT, WT);
          const kT = this.needAlphaBlendingForMesh(UT) && this.KF().useOrderIndependentTransparency;
          if ((0, AT.ib)(nT, WT, this.canRenderToMRT && !kT), (0, AT.gb)(nT, WT, kT), pU.c.PrepareDefines(HT.currentRenderPassId, UT, WT), WT.METALLICWORKFLOW = this.isMetallicWorkflow(), WT._areTexturesDirty) {
            WT._needUVs = !1;
            for (let TT = 1; TT <= 6; ++TT) WT["MAINUV" + TT] = !1;
            if (nT.texturesEnabled) {
              WT.ALBEDODIRECTUV = 0, WT.BASE_WEIGHTDIRECTUV = 0, WT.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, WT.AMBIENTDIRECTUV = 0, WT.OPACITYDIRECTUV = 0, WT.EMISSIVEDIRECTUV = 0, WT.REFLECTIVITYDIRECTUV = 0, WT.MICROSURFACEMAPDIRECTUV = 0, WT.METALLIC_REFLECTANCEDIRECTUV = 0, WT.REFLECTANCEDIRECTUV = 0, WT.BUMPDIRECTUV = 0, WT.LIGHTMAPDIRECTUV = 0, HT.getCaps().textureLOD && (WT.LODBASEDMICROSFURACE = !0), this._albedoTexture && DT.e.DiffuseTextureEnabled ? ((0, AT.X)(this._albedoTexture, WT, "ALBEDO"), WT.GAMMAALBEDO = this._albedoTexture.gammaSpace) : WT.ALBEDO = !1, this._baseWeightTexture && DT.e.BaseWeightTextureEnabled ? (0, AT.X)(this._baseWeightTexture, WT, "BASE_WEIGHT") : WT.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && DT.e.BaseDiffuseRoughnessTextureEnabled ? (0, AT.X)(this._baseDiffuseRoughnessTexture, WT, "BASE_DIFFUSE_ROUGHNESS") : WT.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && DT.e.AmbientTextureEnabled ? ((0, AT.X)(this._ambientTexture, WT, "AMBIENT"), WT.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : WT.AMBIENT = !1, this._opacityTexture && DT.e.OpacityTextureEnabled ? ((0, AT.X)(this._opacityTexture, WT, "OPACITY"), WT.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : WT.OPACITY = !1;
              const TT = this._getReflectionTexture(),
                UT = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || HT.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, AT.S)(nT, TT, WT, this.realTimeFiltering, this.realTimeFilteringQuality, !UT), this._lightmapTexture && DT.e.LightmapTextureEnabled ? ((0, AT.X)(this._lightmapTexture, WT, "LIGHTMAP"), WT.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, WT.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, WT.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : WT.LIGHTMAP = !1, this._emissiveTexture && DT.e.EmissiveTextureEnabled ? ((0, AT.X)(this._emissiveTexture, WT, "EMISSIVE"), WT.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : WT.EMISSIVE = !1, DT.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, AT.X)(this._metallicTexture, WT, "REFLECTIVITY"), WT.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, WT.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, WT.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, WT.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, WT.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, AT.X)(this._reflectivityTexture, WT, "REFLECTIVITY"), WT.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, WT.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, WT.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : WT.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (WT.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, AT.X)(this._metallicReflectanceTexture, WT, "METALLIC_REFLECTANCE"), WT.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : WT.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, AT.X)(this._reflectanceTexture, WT, "REFLECTANCE"), WT.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : WT.REFLECTANCE = !1) : (WT.METALLIC_REFLECTANCE = !1, WT.REFLECTANCE = !1), this._microSurfaceTexture ? (0, AT.X)(this._microSurfaceTexture, WT, "MICROSURFACEMAP") : WT.MICROSURFACEMAP = !1) : (WT.REFLECTIVITY = !1, WT.MICROSURFACEMAP = !1), HT.getCaps().standardDerivatives && this._bumpTexture && DT.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, AT.X)(this._bumpTexture, WT, "BUMP"), this._useParallax && this._albedoTexture && DT.e.DiffuseTextureEnabled ? (WT.PARALLAX = !0, WT.PARALLAX_RHS = nT.useRightHandedSystem, WT.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : WT.PARALLAX = !1, WT.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (WT.BUMP = !1, WT.PARALLAX = !1, WT.PARALLAX_RHS = !1, WT.PARALLAXOCCLUSION = !1, WT.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && DT.e.ReflectionTextureEnabled ? (WT.ENVIRONMENTBRDF = !0, WT.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (WT.ENVIRONMENTBRDF = !1, WT.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? WT.ALPHAFROMALBEDO = !0 : WT.ALPHAFROMALBEDO = !1
            }
            WT.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === TT.LIGHTFALLOFF_STANDARD ? (WT.USEPHYSICALLIGHTFALLOFF = !1, WT.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === TT.LIGHTFALLOFF_GLTF ? (WT.USEPHYSICALLIGHTFALLOFF = !1, WT.USEGLTFLIGHTFALLOFF = !0) : (WT.USEPHYSICALLIGHTFALLOFF = !0, WT.USEGLTFLIGHTFALLOFF = !1), WT.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? WT.TWOSIDEDLIGHTING = !0 : WT.TWOSIDEDLIGHTING = !1, WT.MIRRORED = !!nT._mirroredCameraPosition, WT.SPECULARAA = HT.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(WT._areTexturesDirty || WT._areMiscDirty) && (WT.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, WT.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, WT.ALPHABLEND = this.needAlphaBlendingForMesh(UT), WT.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, WT.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), WT._areTexturesDirty && (WT.TEXTURE_REPETITION_MODE = HT.version > 1 || HT.isWebGPU ? this.textureRepetitionMode : 0), WT._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(WT), WT.FORCENORMALFORWARD = this._forceNormalForward, WT.RADIANCEOCCLUSION = this._useRadianceOcclusion, WT.HORIZONOCCLUSION = this._useHorizonOcclusion, WT._areMiscDirty && ((0, AT.$)(UT, nT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(UT), WT, this._applyDecalMapAfterDetailMap, this._useVertexPulling, mT, this._isVertexOutputInvariant), WT.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !UT.isVerticesDataPresent(VT.i.NormalKind), WT.DEBUGMODE = this._debugMode), (0, AT.R)(nT, HT, this, WT, !!zT, MT, gT), this._eventInfo.defines = WT, this._eventInfo.mesh = UT, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, AT.O)(UT, WT, !0, !0, !0, this._transparencyMode !== TT.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(TT, UT, mT) {
          const WT = {
            clipPlane: !1,
            useInstances: !1,
            ...mT
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const mT = new iU(this._eventInfo.defineNames),
              zT = this._prepareEffect(TT, TT, mT, void 0, void 0, WT.useInstances, WT.clipPlane);
            this._onEffectCreatedObservable && (fU.effect = zT, fU.subMesh = null, this._onEffectCreatedObservable.notifyObservers(fU)), zT.isReady() ? UT && UT(this) : zT.onCompileObservable.add((() => {
              UT && UT(this)
            }))
          })()
        }
        buildUniformLayout() {
          const TT = this._uniformBuffer;
          TT.addUniform("vAlbedoInfos", 2), TT.addUniform("vBaseWeightInfos", 2), TT.addUniform("vBaseDiffuseRoughnessInfos", 2), TT.addUniform("vAmbientInfos", 4), TT.addUniform("vOpacityInfos", 2), TT.addUniform("vEmissiveInfos", 2), TT.addUniform("vLightmapInfos", 2), TT.addUniform("vReflectivityInfos", 3), TT.addUniform("vMicroSurfaceSamplerInfos", 2), TT.addUniform("vBumpInfos", 3), TT.addUniform("albedoMatrix", 16), TT.addUniform("baseWeightMatrix", 16), TT.addUniform("baseDiffuseRoughnessMatrix", 16), TT.addUniform("ambientMatrix", 16), TT.addUniform("opacityMatrix", 16), TT.addUniform("emissiveMatrix", 16), TT.addUniform("lightmapMatrix", 16), TT.addUniform("reflectivityMatrix", 16), TT.addUniform("microSurfaceSamplerMatrix", 16), TT.addUniform("bumpMatrix", 16), TT.addUniform("vTangentSpaceParams", 2), TT.addUniform("vAlbedoColor", 4), TT.addUniform("baseWeight", 1), TT.addUniform("baseDiffuseRoughness", 1), TT.addUniform("vLightingIntensity", 4), TT.addUniform("pointSize", 1), TT.addUniform("vReflectivityColor", 4), TT.addUniform("vEmissiveColor", 3), TT.addUniform("vAmbientColor", 3), TT.addUniform("vDebugMode", 2), TT.addUniform("vMetallicReflectanceFactors", 4), TT.addUniform("vMetallicReflectanceInfos", 2), TT.addUniform("metallicReflectanceMatrix", 16), TT.addUniform("vReflectanceInfos", 2), TT.addUniform("reflectanceMatrix", 16), TT.addUniform("cameraInfo", 4), TT.addUniform("vTextureRepetitionHexTilingParams", 4), (0, AT.kb)(TT, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(TT, UT, mT) {
          const WT = this.KF(),
            zT = mT.materialDefines;
          if (!zT) return;
          const MT = mT.effect;
          if (!MT) return;
          this._activeEffect = MT, UT.getMeshUniformBuffer().bindToEffect(MT, "Mesh"), UT.transferToEffect(TT);
          const gT = WT.eB();
          this._uniformBuffer.bindToEffect(MT, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, WT, UT, TT, this.isFrozen), pU.c.Bind(gT.currentRenderPassId, this._activeEffect, UT, TT, this);
          const nT = WT.activeCamera;
          nT ? this._uniformBuffer.updateFloat4("cameraInfo", nT.minZ, nT.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const HT = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", HT[0], HT[1], HT[2], HT[3]), this._eventInfo.subMesh = mT, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), zT.OBJECTSPACE_NORMALMAP && (TT.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const kT = this._mustRebind(WT, MT, mT, UT.visibility),
            jT = gT._features.needToAlwaysBindUniformBuffers;
          (0, AT.d)(UT, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, lU.c)(this._activeEffect, this._vertexPullingMetadata);
          let lT = null;
          const LT = this._uniformBuffer;
          if (kT) {
            if (this.bindViewProjection(MT), lT = this._getReflectionTexture(), !LT.useUbo || !this.isFrozen || !LT.isSync || mT._drawWrapper._forceRebindOnNextCall) {
              if (WT.texturesEnabled && (this._albedoTexture && DT.e.DiffuseTextureEnabled && (LT.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, AT.x)(this._albedoTexture, LT, "albedo")), this._baseWeightTexture && DT.e.BaseWeightTextureEnabled && (LT.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, AT.x)(this._baseWeightTexture, LT, "baseWeight")), this._baseDiffuseRoughnessTexture && DT.e.BaseDiffuseRoughnessTextureEnabled && (LT.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, AT.x)(this._baseDiffuseRoughnessTexture, LT, "baseDiffuseRoughness")), this._ambientTexture && DT.e.AmbientTextureEnabled && (LT.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, AT.x)(this._ambientTexture, LT, "ambient")), this._opacityTexture && DT.e.OpacityTextureEnabled && (LT.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, AT.x)(this._opacityTexture, LT, "opacity")), this._emissiveTexture && DT.e.EmissiveTextureEnabled && (LT.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, AT.x)(this._emissiveTexture, LT, "emissive")), this._lightmapTexture && DT.e.LightmapTextureEnabled && (LT.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, AT.x)(this._lightmapTexture, LT, "lightmap")), DT.e.SpecularTextureEnabled && (this._metallicTexture ? (LT.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, AT.x)(this._metallicTexture, LT, "reflectivity")) : this._reflectivityTexture && (LT.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, AT.x)(this._reflectivityTexture, LT, "reflectivity")), this._metallicReflectanceTexture && (LT.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, AT.x)(this._metallicReflectanceTexture, LT, "metallicReflectance")), this._reflectanceTexture && zT.REFLECTANCE && (LT.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, AT.x)(this._reflectanceTexture, LT, "reflectance")), this._microSurfaceTexture && (LT.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, AT.x)(this._microSurfaceTexture, LT, "microSurfaceSampler"))), this._bumpTexture && gT.getCaps().standardDerivatives && DT.e.BumpTextureEnabled && !this._disableBumpMap && (LT.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, AT.x)(this._bumpTexture, LT, "bump"), WT._mirroredCameraPosition ? LT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : LT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, AT.i)(WT, zT, LT, this._reflectionColor, lT, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && LT.updateFloat("pointSize", this.pointSize), zT.METALLICWORKFLOW) {
                GT.m.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, GT.m.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const TT = this.subSurface?._indexOfRefraction ?? 1.5,
                  UT = 1;
                GT.m.Color4[0].b = TT;
                const mT = Math.pow((TT - UT) / (TT + UT), 2);
                GT.m.Color4[0].a = mT, LT.updateDirectColor4("vReflectivityColor", GT.m.Color4[0]), LT.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else LT.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              LT.updateColor3("vEmissiveColor", DT.e.EmissiveTextureEnabled ? this._emissiveColor : GT.d.BlackReadOnly), !zT.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? LT.updateColor4("vAlbedoColor", this._albedoColor, 1) : LT.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), LT.updateFloat("baseWeight", this._baseWeight), LT.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * WT.environmentIntensity, this._lightingInfos.w = this._specularIntensity, LT.updateVector4("vLightingIntensity", this._lightingInfos), WT.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), LT.updateColor3("vAmbientColor", this._globalAmbientColor), LT.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            WT.texturesEnabled && (this._albedoTexture && DT.e.DiffuseTextureEnabled && LT.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && DT.e.BaseWeightTextureEnabled && LT.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && DT.e.BaseDiffuseRoughnessTextureEnabled && LT.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && DT.e.AmbientTextureEnabled && LT.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && DT.e.OpacityTextureEnabled && LT.setTexture("opacitySampler", this._opacityTexture), (0, AT.j)(WT, zT, LT, lT, this.realTimeFiltering), zT.ENVIRONMENTBRDF && LT.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && DT.e.EmissiveTextureEnabled && LT.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && DT.e.LightmapTextureEnabled && LT.setTexture("lightmapSampler", this._lightmapTexture), DT.e.SpecularTextureEnabled && (this._metallicTexture ? LT.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && LT.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && LT.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && zT.REFLECTANCE && LT.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && LT.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && gT.getCaps().standardDerivatives && DT.e.BumpTextureEnabled && !this._disableBumpMap && LT.setTexture("bumpSampler", this._bumpTexture)), this.KF().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(UT) && this.KF().depthPeelingRenderer.bind(MT), this._eventInfo.subMesh = mT, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, jU.c)(this._activeEffect, this, WT), this.bindEyePosition(MT)
          } else jT && (this._needToBindSceneUbo = !0);
          !kT && this.isFrozen && !jT || !WT.lightsEnabled || this._disableLighting || (0, AT.l)(WT, UT, this._activeEffect, zT, this._maxSimultaneousLights), !kT && this.isFrozen || ((WT.fogEnabled && UT.applyFog && WT.fogMode !== FT.i.FOGMODE_NONE || lT || this.subSurface.refractionTexture || UT.receiveShadows || zT.PREPASS || zT.CLUSTLIGHT_BATCH) && this.bindView(MT), (0, AT.f)(WT, UT, this._activeEffect, !0), zT.NUM_MORPH_INFLUENCERS && (0, AT.s)(UT, this._activeEffect), zT.BAKED_VERTEX_ANIMATION_TEXTURE && UT.bakedVertexAnimationManager?.bind(MT, zT.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, AT.p)(zT, this._activeEffect, WT)), this._afterBind(UT, this._activeEffect, mT), LT.update()
        }
        getAnimatables() {
          const TT = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && TT.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && TT.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && TT.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && TT.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && TT.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && TT.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && TT.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? TT.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && TT.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && TT.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && TT.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && TT.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && TT.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && TT.push(this._microSurfaceTexture), TT
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.KF().environmentTexture
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
          const TT = this.KF().enableSubSurfaceForPrePass();
          return TT && (TT.enabled = !0), !0
        }
        dispose(TT, UT) {
          this._breakShaderLoadedCheck = !0, UT && (this._environmentBRDFTexture && this.KF().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(TT, UT)
        }
      }, UT = new WeakMap, (() => {
        const UT = "function" === typeof Symbol && Symbol.metadata ? Object.create(zT[Symbol.metadata] ?? null) : void 0;
        WT = [(0, xT.g)("_markAllSubMeshesAsMiscDirty")], (0, JT.h)(TT, null, WT, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "debugMode" in TT,
            get: TT => TT.debugMode,
            set: (TT, UT) => {
              TT.debugMode = UT
            }
          },
          metadata: UT
        }, gT, nT), UT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UT
        })
      })(), TT.PBRMATERIAL_OPAQUE = MT.b.MATERIAL_OPAQUE, TT.PBRMATERIAL_ALPHATEST = MT.b.MATERIAL_ALPHATEST, TT.PBRMATERIAL_ALPHABLEND = MT.b.MATERIAL_ALPHABLEND, TT.PBRMATERIAL_ALPHATESTANDBLEND = MT.b.MATERIAL_ALPHATESTANDBLEND, TT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, TT.LIGHTFALLOFF_PHYSICAL = 0, TT.LIGHTFALLOFF_GLTF = 1, TT.LIGHTFALLOFF_STANDARD = 2, TT.ForceGLSL = !1, TT._ShaderLoader = new LU.c((() => [Promise.all([mT.e(322), mT.e(333)]).then((() => mT(61385))), Promise.all([mT.e(327), mT.e(323), mT.e(384), mT.e(336), mT.e(383)]).then((() => mT(61403)))]), (() => [Promise.all([mT.e(341), mT.e(343), mT.e(350)]).then((() => mT(61483))), Promise.all([mT.e(341), mT.e(344), mT.e(387), mT.e(354), mT.e(386)]).then((() => mT(61508)))])), TT
    })();
    Object.getOwnPropertyDescriptor(OU.prototype, "decalMap") || Object.defineProperty(OU.prototype, "decalMap", (0, vU.h)("PBRBaseMaterial", "decalMap")), (0, mT(41978).c)();
    var eU = mT(40122);
    var YU = mT(40201),
      JU = mT(41960),
      xU = mT(39913),
      dU = mT(39922),
      wU = mT(40036);
    let tU = !1;
    const aU = new GT.g,
      yU = new GT.g;
    class XU extends JU.d {
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
          for (let UT = 0; UT < this._textures.length; UT++) this._textures[UT].wrapU = TT
      }
      set wrapV(TT) {
        if (this._textures)
          for (let UT = 0; UT < this._textures.length; UT++) this._textures[UT].wrapV = TT
      }
      constructor(TT, UT, mT, WT, zT, MT) {
        const gT = !(!zT || !zT.generateMipMaps) && zT.generateMipMaps,
          nT = !(!zT || !zT.generateDepthTexture) && zT.generateDepthTexture,
          HT = zT && zT.depthTextureFormat ? zT.depthTextureFormat : 15,
          kT = !zT || void 0 === zT.doNotChangeAspectRatio || zT.doNotChangeAspectRatio,
          jT = !(!zT || !zT.drawOnlyOnFirstAttachmentByDefault) && zT.drawOnlyOnFirstAttachmentByDefault;
        if (super(TT, UT, WT, gT, kT, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), tU || (tU = !0, dU.ThinEngine.prototype.restoreSingleAttachment = function() {
            const TT = this._gl;
            this.bindAttachments([TT.BACK])
          }, dU.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const TT = this._gl;
            this.bindAttachments([TT.COLOR_ATTACHMENT0])
          }, dU.ThinEngine.prototype.buildTextureLayout = function(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const mT = this._gl,
              WT = [];
            if (UT) WT.push(mT.BACK);
            else
              for (let zT = 0; zT < TT.length; zT++) TT[zT] ? WT.push(mT["COLOR_ATTACHMENT" + zT]) : WT.push(mT.NONE);
            return WT
          }, dU.ThinEngine.prototype.bindAttachments = function(TT) {
            const UT = this._gl,
              mT = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, mT)
              for (let WT = 0; WT < TT.length; WT++) TT[WT] !== UT.NONE && mT[WT] && (0, wU.k)(mT[WT].format) && (this._integerMRTAttachmentsMask |= 1 << WT);
            UT.drawBuffers(TT)
          }, dU.ThinEngine.prototype.clearAttachments = function(TT, UT, mT, WT) {
            let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const gT = this._currentRenderTarget?.textures;
            let nT = !1;
            if (mT && TT && gT)
              for (let HT = 0; HT < UT.length; HT++) {
                const TT = gT[HT];
                if (UT[HT] !== this._gl.NONE && TT && (0, wU.k)(TT.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  nT = !0;
                  break
                }
              }
            if (!nT || !TT || !gT) return this.bindAttachments(UT), void this.clear(TT, mT, WT, zT, MT);
            this.bindAttachments(UT), this._applyColorWriteState();
            for (let HT = 0; HT < UT.length; HT++) {
              const mT = gT[HT];
              if (UT[HT] !== this._gl.NONE && mT) {
                let UT = TT;
                if ((0, wU.k)(mT.format)) {
                  const WT = (0, wU.m)(mT.type);
                  UT = WT ? aU : yU;
                  const zT = WT ? 255 : 1;
                  UT.r = Math.round(TT.r * zT), UT.g = Math.round(TT.g * zT), UT.b = Math.round(TT.b * zT), UT.a = Math.round(TT.a * zT)
                }
                this._clearColorAttachment(HT, UT, mT.format, mT.type)
              }
            }
            if (WT || zT) {
              const TT = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, WT, zT, MT)
              } finally {
                this._integerMRTAttachmentsMask = TT
              }
            }
          }, dU.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              mT = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, TT.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(TT), UT || this.generateMipMapsMultiFramebuffer(TT), mT && (TT._MSAAFramebuffer && this._bindUnboundFramebuffer(TT._framebuffer), mT()), this._bindUnboundFramebuffer(null)
          }, dU.ThinEngine.prototype.createMultipleRenderTarget = function(TT, UT) {
            let mT, WT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              zT = !1,
              MT = !0,
              gT = !1,
              nT = !1,
              HT = 1,
              kT = 1,
              jT = [],
              lT = [],
              LT = [],
              pT = [],
              BT = [],
              ZT = [],
              cT = [],
              vT = [],
              fT = [],
              qT = !1;
            const iT = this._createHardwareRenderTargetWrapper(!0, !1, TT);
            void 0 !== UT && (zT = void 0 !== UT.generateMipMaps && UT.generateMipMaps, MT = void 0 === UT.generateDepthBuffer || UT.generateDepthBuffer, gT = void 0 !== UT.generateStencilBuffer && UT.generateStencilBuffer, nT = void 0 !== UT.generateDepthTexture && UT.generateDepthTexture, HT = UT.RgT ?? 1, kT = UT.samples ?? kT, jT = UT.types || jT, lT = UT.samplingModes || lT, LT = UT.useSRGBBuffers || LT, pT = UT.formats || pT, BT = UT.targetTypes || BT, ZT = UT.faceIndex || ZT, cT = UT.layerIndex || cT, vT = UT.layerCounts || vT, fT = UT.labels || fT, qT = UT.dontCreateTextures ?? !1, this.TZ > 1 && (13 === UT.depthTextureFormat || 17 === UT.depthTextureFormat || 16 === UT.depthTextureFormat || 14 === UT.depthTextureFormat || 18 === UT.depthTextureFormat) && (mT = UT.depthTextureFormat)), void 0 === mT && (mT = gT ? 13 : 14);
            const bT = this._gl,
              OT = this._currentFramebuffer,
              eT = bT.createFramebuffer();
            this._bindUnboundFramebuffer(eT);
            const YT = TT.width ?? TT,
              JT = TT.height ?? TT,
              xT = [],
              wT = [],
              tT = this.TZ > 1 && (13 === mT || 17 === mT || 18 === mT);
            iT.label = UT?.label ?? "MultiRenderTargetWrapper", iT._framebuffer = eT, iT._generateDepthBuffer = nT || MT, iT._generateStencilBuffer = nT ? tT : gT, iT._depthStencilBuffer = this._setupFramebufferDepthAttachments(iT._generateStencilBuffer, iT._generateDepthBuffer, YT, JT, 1, mT), iT._attachments = wT;
            for (let aT = 0; aT < HT; aT++) {
              let TT = lT[aT] || 3,
                UT = jT[aT] || 0,
                mT = LT[aT] || !1;
              const WT = pT[aT] || 5,
                MT = BT[aT] || 3553,
                gT = vT[aT] ?? 1;
              (1 !== UT || this._caps.textureFloatLinearFiltering) && (2 !== UT || this._caps.textureHalfFloatLinearFiltering) || (TT = 1);
              const nT = this._getSamplingParameters(TT, zT);
              1 !== UT || this._caps.textureFloat || (UT = 0, dT.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), mT = mT && this._caps.supportSRGBBuffers && (this.TZ > 1 || this.isWebGPU);
              const HT = this.TZ > 1,
                kT = bT[HT ? "COLOR_ATTACHMENT" + aT : "COLOR_ATTACHMENT" + aT + "_WEBGL"];
              if (wT.push(kT), -1 === MT || qT) continue;
              const ZT = new xU.b(this, 6);
              xT[aT] = ZT, bT.activeTexture(bT["TEXTURE" + aT]), bT.bindTexture(MT, ZT._hardwareTexture.underlyingResource), bT.texParameteri(MT, bT.TEXTURE_MAG_FILTER, nT.mag), bT.texParameteri(MT, bT.TEXTURE_MIN_FILTER, nT.min), bT.texParameteri(MT, bT.TEXTURE_WRAP_S, bT.CLAMP_TO_EDGE), bT.texParameteri(MT, bT.TEXTURE_WRAP_T, bT.CLAMP_TO_EDGE);
              const cT = this._getRGBABufferInternalSizedFormat(UT, WT, mT),
                OT = this._getInternalFormat(WT),
                eT = this._getWebGLTextureType(UT);
              if (!HT || 35866 !== MT && 32879 !== MT)
                if (34067 === MT) {
                  for (let TT = 0; TT < 6; TT++) bT.texImage2D(bT.TEXTURE_CUBE_MAP_POSITIVE_X + TT, 0, cT, YT, JT, 0, OT, eT, null);
                  ZT.isCube = !0
                } else bT.texImage2D(bT.TEXTURE_2D, 0, cT, YT, JT, 0, OT, eT, null);
              else 35866 === MT ? ZT.is2DArray = !0 : ZT.is3D = !0, ZT.baseDepth = ZT.depth = gT, bT.texImage3D(MT, 0, cT, YT, JT, gT, 0, OT, eT, null);
              zT && bT.generateMipmap(MT), this._bindTextureDirectly(MT, null), ZT.baseWidth = YT, ZT.baseHeight = JT, ZT.width = YT, ZT.height = JT, ZT.isReady = !0, ZT.samples = 1, ZT.generateMipMaps = zT, ZT.samplingMode = TT, ZT.type = UT, ZT._useSRGBBuffer = mT, ZT.format = WT, ZT.label = fT[aT] ?? iT.label + "-Texture" + aT, this._internalTexturesCache.push(ZT)
            }
            if (nT && this._caps.depthTextureExtension && !qT) {
              const TT = new xU.b(this, 14);
              let UT = 5,
                WT = bT.DEPTH_COMPONENT16,
                MT = bT.DEPTH_COMPONENT,
                gT = bT.UNSIGNED_SHORT,
                nT = bT.DEPTH_ATTACHMENT;
              this.TZ < 2 ? WT = bT.DEPTH_COMPONENT : 14 === mT ? (UT = 1, gT = bT.FLOAT, WT = bT.DEPTH_COMPONENT32F) : 18 === mT ? (UT = 0, gT = bT.FLOAT_32_UNSIGNED_INT_24_8_REV, WT = bT.DEPTH32F_STENCIL8, MT = bT.DEPTH_STENCIL, nT = bT.DEPTH_STENCIL_ATTACHMENT) : 16 === mT ? (UT = 0, gT = bT.UNSIGNED_INT, WT = bT.DEPTH_COMPONENT24, nT = bT.DEPTH_ATTACHMENT) : 13 !== mT && 17 !== mT || (UT = 12, gT = bT.UNSIGNED_INT_24_8, WT = bT.DEPTH24_STENCIL8, MT = bT.DEPTH_STENCIL, nT = bT.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(bT.TEXTURE_2D, TT, !0), bT.texParameteri(bT.TEXTURE_2D, bT.TEXTURE_MAG_FILTER, bT.NEAREST), bT.texParameteri(bT.TEXTURE_2D, bT.TEXTURE_MIN_FILTER, bT.NEAREST), bT.texParameteri(bT.TEXTURE_2D, bT.TEXTURE_WRAP_S, bT.CLAMP_TO_EDGE), bT.texParameteri(bT.TEXTURE_2D, bT.TEXTURE_WRAP_T, bT.CLAMP_TO_EDGE), bT.texImage2D(bT.TEXTURE_2D, 0, WT, YT, JT, 0, MT, gT, null), bT.framebufferTexture2D(bT.FRAMEBUFFER, nT, bT.TEXTURE_2D, TT._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(bT.TEXTURE_2D, null), iT._depthStencilTexture = TT, iT._depthStencilTextureWithStencil = tT, TT.baseWidth = YT, TT.baseHeight = JT, TT.width = YT, TT.height = JT, TT.isReady = !0, TT.samples = 1, TT.generateMipMaps = zT, TT.samplingMode = 1, TT.format = mT, TT.type = UT, TT.label = iT.label + "-DepthStencil", xT[HT] = TT, this._internalTexturesCache.push(TT)
            }
            if (iT.setTextures(xT), WT && bT.drawBuffers(wT), this._bindUnboundFramebuffer(OT), iT.setLayerAndFaceIndices(cT, ZT), this.resetTextureCache(), qT) {
              if (kT > 1) {
                const TT = bT.createFramebuffer();
                if (!TT) throw new Error("Unable to create multi sampled framebuffer");
                iT._samples = kT, iT._MSAAFramebuffer = TT, HT > 0 && WT && (this._bindUnboundFramebuffer(TT), bT.drawBuffers(wT), this._bindUnboundFramebuffer(OT))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(iT, kT, WT);
            return iT
          }, dU.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(TT, UT) {
            let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.TZ < 2 || !TT) return 1;
            if (TT.samples === UT) return UT;
            const WT = this._gl;
            UT = Math.min(UT, this.getCaps().maxMSAASamples), TT._depthStencilBuffer && (WT.deleteRenderbuffer(TT._depthStencilBuffer), TT._depthStencilBuffer = null), TT._MSAAFramebuffer && (WT.deleteFramebuffer(TT._MSAAFramebuffer), TT._MSAAFramebuffer = null);
            const zT = TT._attachments.length;
            for (let gT = 0; gT < zT; gT++) {
              const UT = TT.textures[gT]._hardwareTexture;
              UT?.releaseMSAARenderBuffers()
            }
            if (UT > 1 && "function" === typeof WT.renderbufferStorageMultisample) {
              const MT = WT.createFramebuffer();
              if (!MT) throw new Error("Unable to create multi sampled framebuffer");
              TT._MSAAFramebuffer = MT, this._bindUnboundFramebuffer(MT);
              const gT = [];
              for (let mT = 0; mT < zT; mT++) {
                const zT = TT.textures[mT],
                  MT = zT._hardwareTexture,
                  nT = WT[this.TZ > 1 ? "COLOR_ATTACHMENT" + mT : "COLOR_ATTACHMENT" + mT + "_WEBGL"],
                  HT = this._createRenderBuffer(zT.width, zT.height, UT, -1, this._getRGBABufferInternalSizedFormat(zT.type, zT.format, zT._useSRGBBuffer), nT);
                if (!HT) throw new Error("Unable to create multi sampled framebuffer");
                MT.addMSAARenderBuffer(HT), zT.samples = UT, gT.push(nT)
              }
              mT && WT.drawBuffers(gT)
            } else this._bindUnboundFramebuffer(TT._framebuffer);
            const MT = TT._depthStencilTexture ? TT._depthStencilTexture.format : void 0;
            return TT._depthStencilBuffer = this._setupFramebufferDepthAttachments(TT._generateStencilBuffer, TT._generateDepthBuffer, TT.width, TT.height, UT, MT), this._bindUnboundFramebuffer(null), TT._samples = UT, UT
          }, dU.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(TT) {
            const UT = TT,
              mT = this._gl;
            if (UT.isMulti)
              for (let WT = 0; WT < UT._attachments.length; WT++) {
                const TT = UT.textures[WT];
                !TT?.generateMipMaps || TT?.isCube || TT?.is3D || (this._bindTextureDirectly(mT.TEXTURE_2D, TT, !0), mT.generateMipmap(mT.TEXTURE_2D), this._bindTextureDirectly(mT.TEXTURE_2D, null))
              }
          }, dU.ThinEngine.prototype.resolveMultiFramebuffer = function(TT) {
            const UT = TT,
              mT = this._gl;
            if (!UT._MSAAFramebuffer || !UT.isMulti) return;
            let WT = UT.resolveMSAAColors ? mT.COLOR_BUFFER_BIT : 0;
            WT |= UT._generateDepthBuffer && UT.resolveMSAADepth ? mT.DEPTH_BUFFER_BIT : 0, WT |= UT._generateStencilBuffer && UT.resolveMSAAStencil ? mT.STENCIL_BUFFER_BIT : 0;
            const zT = UT._attachments,
              MT = zT.length;
            mT.bindFramebuffer(mT.READ_FRAMEBUFFER, UT._MSAAFramebuffer), mT.bindFramebuffer(mT.DRAW_FRAMEBUFFER, UT._framebuffer);
            for (let gT = 0; gT < MT; gT++) {
              const TT = UT.textures[gT];
              for (let UT = 0; UT < MT; UT++) zT[UT] = mT.NONE;
              zT[gT] = mT[this.TZ > 1 ? "COLOR_ATTACHMENT" + gT : "COLOR_ATTACHMENT" + gT + "_WEBGL"], mT.readBuffer(zT[gT]), mT.drawBuffers(zT), mT.blitFramebuffer(0, 0, TT.width, TT.height, 0, 0, TT.width, TT.height, WT, mT.NEAREST)
            }
            for (let gT = 0; gT < MT; gT++) zT[gT] = mT[this.TZ > 1 ? "COLOR_ATTACHMENT" + gT : "COLOR_ATTACHMENT" + gT + "_WEBGL"];
            mT.drawBuffers(zT), mT.bindFramebuffer(this._gl.FRAMEBUFFER, UT._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = MT;
        const lT = [],
          LT = [],
          pT = [],
          BT = [],
          ZT = [],
          cT = [],
          vT = [],
          fT = [];
        this._initTypes(mT, lT, LT, pT, BT, ZT, cT, vT, fT, zT);
        const qT = !zT || void 0 === zT.generateDepthBuffer || zT.generateDepthBuffer,
          iT = !(!zT || void 0 === zT.generateStencilBuffer) && zT.generateStencilBuffer,
          bT = zT && zT.samples ? zT.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: LT,
          generateMipMaps: gT,
          generateDepthBuffer: qT,
          generateStencilBuffer: iT,
          generateDepthTexture: nT,
          depthTextureFormat: HT,
          types: lT,
          RgT: mT,
          useSRGBBuffers: pT,
          samples: bT,
          formats: BT,
          targetTypes: ZT,
          faceIndex: cT,
          layerIndex: vT,
          layerCounts: fT,
          labels: MT,
          label: TT
        }, this._count = mT, this._drawOnlyOnFirstAttachmentByDefault = jT, mT > 0 && (this._createInternalTextures(), this._createTextures(MT))
      }
      _initTypes(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
        for (let jT = 0; jT < TT; jT++) kT && kT.types && void 0 !== kT.types[jT] ? UT.push(kT.types[jT]) : UT.push(kT && kT.defaultType ? kT.defaultType : 0), kT && kT.samplingModes && void 0 !== kT.samplingModes[jT] ? mT.push(kT.samplingModes[jT]) : mT.push(tT.g.BILINEAR_SAMPLINGMODE), kT && kT.useSRGBBuffers && void 0 !== kT.useSRGBBuffers[jT] ? WT.push(kT.useSRGBBuffers[jT]) : WT.push(!1), kT && kT.formats && void 0 !== kT.formats[jT] ? zT.push(kT.formats[jT]) : zT.push(5), kT && kT.targetTypes && void 0 !== kT.targetTypes[jT] ? MT.push(kT.targetTypes[jT]) : MT.push(3553), kT && kT.faceIndex && void 0 !== kT.faceIndex[jT] ? gT.push(kT.faceIndex[jT]) : gT.push(0), kT && kT.layerIndex && void 0 !== kT.layerIndex[jT] ? nT.push(kT.layerIndex[jT]) : nT.push(0), kT && kT.layerCounts && void 0 !== kT.layerCounts[jT] ? HT.push(kT.layerCounts[jT]) : HT.push(1)
      }
      _createInternaTextureIndexMapping() {
        const TT = {},
          UT = [];
        if (!this._renderTarget) return UT;
        const mT = this._renderTarget.textures;
        for (let WT = 0; WT < mT.length; WT++) {
          const zT = mT[WT];
          if (!zT) continue;
          const MT = TT[zT.uniqueId];
          void 0 !== MT ? UT[WT] = MT : TT[zT.uniqueId] = WT
        }
        return UT
      }
      _rebuild() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || TT) return;
        const WT = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), UT && (this._releaseTextures(), this._createTextures(mT));
        const zT = this._renderTarget.textures;
        for (let MT = 0; MT < zT.length; MT++) {
          const TT = this._textures[MT];
          void 0 !== WT[MT] && this._renderTarget.setTexture(zT[WT[MT]], MT), TT._texture = zT[MT], TT._texture && (TT._noMipmap = !TT._texture.useMipMaps, TT._useSRGBBuffer = TT._texture._useSRGBBuffer)
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
        const UT = this._renderTarget.textures;
        this._textures = [];
        for (let mT = 0; mT < UT.length; mT++) {
          const WT = new tT.g(null, this.KF());
          TT?.[mT] && (WT.name = TT[mT]), WT._texture = UT[mT], WT._texture && (WT._noMipmap = !WT._texture.useMipMaps, WT._useSRGBBuffer = WT._texture._useSRGBBuffer), this._textures.push(WT)
        }
      }
      setInternalTexture(TT, UT) {
        let mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === UT && (this._texture = TT), this.renderTarget.setTexture(TT, UT, mT), this.textures[UT] || (this.textures[UT] = new tT.g(null, this.KF()), this.textures[UT].name = this._textureNames?.[UT] ?? this.textures[UT].name), this.textures[UT]._texture = TT, this.textures[UT]._noMipmap = !TT.useMipMaps, this.textures[UT]._useSRGBBuffer = TT._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[UT] = TT.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[UT] = TT.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[UT] = TT._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[UT])) {
          let mT;
          mT = TT.is2DArray ? 35866 : TT.isCube ? 34067 : TT.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[UT] = mT
        }
      }
      setLayerAndFaceIndex(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[TT] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[TT] = UT), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[TT] = mT), this.renderTarget.setLayerAndFaceIndex(TT, UT, mT))
      }
      setLayerAndFaceIndices(TT, UT) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = TT, this._multiRenderTargetOptions.faceIndex = UT, this.renderTarget.setLayerAndFaceIndices(TT, UT))
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
      updateCount(TT, UT, mT) {
        this._multiRenderTargetOptions.RgT = TT, this._count = TT;
        const WT = [],
          zT = [],
          MT = [],
          gT = [],
          nT = [],
          HT = [],
          kT = [],
          jT = [];
        this._textureNames = mT, this._initTypes(TT, WT, zT, MT, gT, nT, HT, kT, jT, UT), this._multiRenderTargetOptions.types = WT, this._multiRenderTargetOptions.samplingModes = zT, this._multiRenderTargetOptions.useSRGBBuffers = MT, this._multiRenderTargetOptions.formats = gT, this._multiRenderTargetOptions.targetTypes = nT, this._multiRenderTargetOptions.faceIndex = HT, this._multiRenderTargetOptions.layerIndex = kT, this._multiRenderTargetOptions.layerCounts = jT, this._multiRenderTargetOptions.labels = mT, this._rebuild(!1, !0, mT)
      }
      _unbindFrameBuffer(TT, UT) {
        this._renderTarget && TT.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(UT)
        }))
      }
      dispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), TT ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const TT = this._renderTarget?.textures;
        if (TT) {
          for (let UT = TT.length - 1; UT >= 0; UT--) this._textures[UT]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var IU = mT(40283);
    class QU {
      constructor(TT) {
        this.name = IU.b.NAME_GEOMETRYBUFFERRENDERER, this.XZ = TT
      }
      register() {
        this.XZ._gatherRenderTargetsStage.registerStep(IU.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(TT) {
        this.XZ._geometryBufferRenderer && TT.push(this.XZ._geometryBufferRenderer.getGBuffer())
      }
    }
    let sU = !1;
    var FU;
    ! function(TT) {
      TT[TT.Small = 0] = "Small", TT[TT.Medium = 1] = "Medium", TT[TT.Large = 2] = "Large", TT[TT.ExtraLarge = 3] = "ExtraLarge"
    }(FU || (FU = {}));
    const PU = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      VU = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class uU {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(TT) {
        if (TT && this._enableMeshBlendTag && !this._scene.eB().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
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
      _forceTextureType(TT, UT) {
        TT === uU.POSITION_TEXTURE_TYPE ? (this._positionIndex = UT, this._enablePosition = !0) : TT === uU.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = UT, this._enableVelocity = !0) : TT === uU.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = UT, this._enableVelocityLinear = !0) : TT === uU.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = UT, this._enableReflectivity = !0) : TT === uU.DEPTH_TEXTURE_TYPE ? (this._depthIndex = UT, this._enableDepth = !0) : TT === uU.NORMAL_TEXTURE_TYPE ? (this._normalIndex = UT, this._enableNormal = !0) : TT === uU.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = UT, this._enableScreenspaceDepth = !0) : TT === uU.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = UT, this._enableIrradiance = !0) : TT === uU.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = UT, this._enableObjectId = !0) : TT === uU.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = UT, this._enableMeshBlendTag = !0)
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
          case uU.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case uU.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case uU.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case uU.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case uU.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case uU.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case uU.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case uU.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case uU.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case uU.MESH_BLEND_TAG_TEXTURE_TYPE:
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
          const TT = this._scene.eB(),
            UT = Math.min(TT.getCaps().maxDrawBuffers ?? 1, 8),
            mT = this._assignRenderTargetIndices()[0] + 1;
          if (TT.getCaps().drawBuffersExtension && mT > UT) throw new Error(`GeometryBufferRenderer: ${mT} color attachments were requested, but this engine supports at most ${UT}`)
        }
        this._enableObjectId = TT, TT || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(TT) {
        if (this._enableMeshBlendTag !== TT) {
          if (TT) {
            const TT = this._scene.eB();
            if (! function(TT) {
                return "NATIVE" !== TT.shaderPlatformName && (TT.isWebGPU || 2 === TT.TZ)
              }(TT)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !TT.isWebGPU && !TT.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const UT = Math.min(TT.getCaps().maxDrawBuffers ?? 1, 8),
                mT = this._assignRenderTargetIndices()[0] + 1;
              if (TT.getCaps().drawBuffersExtension && mT > UT) throw new Error(`GeometryBufferRenderer: ${mT} color attachments were requested, but this engine supports at most ${UT}`)
            }
          }
          this._enableMeshBlendTag = TT, TT || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get XZ() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          WT = arguments.length > 3 ? arguments[3] : void 0;
        var zT;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new GT.g(0, 0, 0, 0), this._clearDepthColor = new GT.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = TT, this._ratioOrDimensions = UT, this._useUbo = TT.eB().supportsUniformBuffers, this._depthFormat = mT, this._textureTypesAndFormats = WT || {}, this._initShaderSourceAsync(), zT = uU, sU || (sU = !0, Object.defineProperty(FT.i.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(TT) {
            TT && TT.isSupported && (this._geometryBufferRenderer = TT)
          },
          enumerable: !0,
          configurable: !0
        }), FT.i.prototype.enableGeometryBufferRenderer = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            mT = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new zT(this, TT, UT, mT), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, FT.i.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, zT._SceneComponentInitialization = TT => {
          let UT = TT._getComponent(IU.b.NAME_GEOMETRYBUFFERRENDERER);
          UT || (UT = new QU(TT), TT.WWT(UT))
        }), uU._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.eB().isWebGPU && !uU.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([mT.e(342).then((() => mT(61713))), Promise.all([mT.e(341), mT.e(353)]).then((() => mT(61716)))])) : await Promise.all([mT.e(325).then((() => mT(61720))), mT.e(324).then((() => mT(61723)))]), this._shadersLoaded = !0
      }
      isReady(TT, UT) {
        if (!this._shadersLoaded) return !1;
        const mT = TT.wB();
        if (mT && mT.disableDepthWrite) return !1;
        if (function(TT) {
            return TT._isGaussianSplatting || "GaussianSplattingMesh" === (UT = TT.getClassName()) || "GaussianSplattingStream" === UT;
            var UT
          }(TT.getMesh())) return !1;
        const WT = [],
          zT = [VT.i.PositionKind],
          MT = TT.getMesh();
        MT.isVerticesDataPresent(VT.i.NormalKind) && (WT.push("#define HAS_NORMAL_ATTRIBUTE"), zT.push(VT.i.NormalKind));
        let gT = !1,
          nT = !1;
        if (mT) {
          let TT = !1;
          if (mT.needAlphaTestingForMesh(MT) && mT.getAlphaTestTexture() && (WT.push("#define ALPHATEST"), WT.push(`#define ALPHATEST_UV${mT.getAlphaTestTexture().coordinatesIndex+1}`), TT = !0), (mT.bumpTexture || mT.normalTexture || mT.geometryNormalTexture) && DT.e.BumpTextureEnabled) {
            const UT = mT.bumpTexture || mT.normalTexture || mT.geometryNormalTexture;
            WT.push("#define BUMP"), WT.push(`#define BUMP_UV${UT.coordinatesIndex+1}`), TT = !0
          }
          if (this._enableReflectivity) {
            let UT = !1;
            if ("PBRMetallicRoughnessMaterial" === mT.getClassName()) mT.metallicRoughnessTexture && (WT.push("#define ORMTEXTURE"), WT.push(`#define REFLECTIVITY_UV${mT.metallicRoughnessTexture.coordinatesIndex+1}`), WT.push("#define METALLICWORKFLOW"), TT = !0, UT = !0), null != mT.metallic && (WT.push("#define METALLIC"), WT.push("#define METALLICWORKFLOW"), UT = !0), null != mT.roughness && (WT.push("#define ROUGHNESS"), WT.push("#define METALLICWORKFLOW"), UT = !0), UT && (mT.baseTexture && (WT.push("#define ALBEDOTEXTURE"), WT.push(`#define ALBEDO_UV${mT.baseTexture.coordinatesIndex+1}`), mT.baseTexture.gammaSpace && WT.push("#define GAMMAALBEDO"), TT = !0), mT.baseColor && WT.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === mT.getClassName()) mT.specularGlossinessTexture ? (WT.push("#define SPECULARGLOSSINESSTEXTURE"), WT.push(`#define REFLECTIVITY_UV${mT.specularGlossinessTexture.coordinatesIndex+1}`), TT = !0, mT.specularGlossinessTexture.gammaSpace && WT.push("#define GAMMAREFLECTIVITYTEXTURE")) : mT.specularColor && WT.push("#define REFLECTIVITYCOLOR"), null != mT.glossiness && WT.push("#define GLOSSINESS");
            else if ("PBRMaterial" === mT.getClassName()) mT.metallicTexture && (WT.push("#define ORMTEXTURE"), WT.push(`#define REFLECTIVITY_UV${mT.metallicTexture.coordinatesIndex+1}`), WT.push("#define METALLICWORKFLOW"), TT = !0, UT = !0), null != mT.metallic && (WT.push("#define METALLIC"), WT.push("#define METALLICWORKFLOW"), UT = !0), null != mT.roughness && (WT.push("#define ROUGHNESS"), WT.push("#define METALLICWORKFLOW"), UT = !0), UT ? (mT.albedoTexture && (WT.push("#define ALBEDOTEXTURE"), WT.push(`#define ALBEDO_UV${mT.albedoTexture.coordinatesIndex+1}`), mT.albedoTexture.gammaSpace && WT.push("#define GAMMAALBEDO"), TT = !0), mT.albedoColor && WT.push("#define ALBEDOCOLOR")) : (mT.reflectivityTexture ? (WT.push("#define SPECULARGLOSSINESSTEXTURE"), WT.push(`#define REFLECTIVITY_UV${mT.reflectivityTexture.coordinatesIndex+1}`), mT.reflectivityTexture.gammaSpace && WT.push("#define GAMMAREFLECTIVITYTEXTURE"), TT = !0) : mT.reflectivityColor && WT.push("#define REFLECTIVITYCOLOR"), null != mT.microSurface && WT.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === mT.getClassName()) mT.specularTexture && (WT.push("#define REFLECTIVITYTEXTURE"), WT.push(`#define REFLECTIVITY_UV${mT.specularTexture.coordinatesIndex+1}`), mT.specularTexture.gammaSpace && WT.push("#define GAMMAREFLECTIVITYTEXTURE"), TT = !0), mT.specularColor && WT.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === mT.getClassName()) {
              const UT = mT;
              WT.push("#define METALLIC"), WT.push("#define ROUGHNESS"), UT._useRoughnessFromMetallicTextureGreen && UT.baseMetalnessTexture ? (WT.push("#define ORMTEXTURE"), WT.push(`#define REFLECTIVITY_UV${UT.baseMetalnessTexture.coordinatesIndex+1}`), TT = !0) : UT.baseMetalnessTexture ? (WT.push("#define METALLIC_TEXTURE"), WT.push(`#define METALLIC_UV${UT.baseMetalnessTexture.coordinatesIndex+1}`), TT = !0) : UT.specularRoughnessTexture && (WT.push("#define ROUGHNESS_TEXTURE"), WT.push(`#define ROUGHNESS_UV${UT.specularRoughnessTexture.coordinatesIndex+1}`), TT = !0), UT.baseColorTexture && (WT.push("#define ALBEDOTEXTURE"), WT.push(`#define ALBEDO_UV${UT.baseColorTexture.coordinatesIndex+1}`), UT.baseColorTexture.gammaSpace && WT.push("#define GAMMAALBEDO"), TT = !0), UT.baseColor && WT.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (WT.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === mT.getClassName())) {
            const UT = mT;
            UT.subsurfaceWeight > 0 && UT.subsurfaceWeightTexture && (WT.push("#define SUBSURFACE_WEIGHT"), WT.push(`#define SUBSURFACEWEIGHT_UV${UT.subsurfaceWeightTexture.coordinatesIndex+1}`), TT = !0), UT.transmissionWeight > 0 && UT.transmissionWeightTexture && (WT.push("#define TRANSMISSION_WEIGHT"), WT.push(`#define TRANSMISSIONWEIGHT_UV${UT.transmissionWeightTexture.coordinatesIndex+1}`), TT = !0)
          }
          TT && (WT.push("#define NEED_UV"), MT.isVerticesDataPresent(VT.i.UVKind) && (zT.push(VT.i.UVKind), WT.push("#define UV1"), gT = !0), MT.isVerticesDataPresent(VT.i.UV2Kind) && (zT.push(VT.i.UV2Kind), WT.push("#define UV2"), nT = !0))
        }
        if (this._enableDepth && (WT.push("#define DEPTH"), WT.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (WT.push("#define NORMAL"), WT.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (WT.push("#define POSITION"), WT.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (WT.push("#define VELOCITY"), WT.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(MT) && WT.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (WT.push("#define VELOCITY_LINEAR"), WT.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(MT) && WT.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (WT.push("#define REFLECTIVITY"), WT.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (WT.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), WT.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          WT.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), WT.push("#define IRRADIANCE");
          const TT = this._scene;
          if (TT.environmentTexture) {
            const UT = {};
            let zT = !1,
              MT = 0;
            "OpenPBRMaterial" !== mT.getClassName() && "StandardMaterial" !== mT.getClassName() && "PBRMetallicRoughnessMaterial" !== mT.getClassName() && "PBRSpecularGlossinessMaterial" !== mT.getClassName() && "PBRMaterial" !== mT.getClassName() || (zT = !!mT.realtimeFiltering, MT = mT.realtimeFilteringQuality || 0), (0, AT.S)(TT, TT.environmentTexture, UT, zT, MT, !0);
            for (const TT in UT) UT[TT] && WT.push("#define " + TT);
            UT.USEIRRADIANCEMAP || WT.push("#define SPHERICAL_HARMONICS");
            const gT = TT.postProcessRenderPipelineManager.supportedPipelines.find((TT => "IBLShadowsRenderPipeline" === TT.getClassName()));
            if (gT) {
              const TT = gT;
              TT._getAccumulatedTexture() && (WT.push("#define IBL_SHADOW_TEXTURE"), TT.coloredShadows && WT.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (WT.push("#define OBJECT_ID"), WT.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (WT.push("#define MESH_BLEND_TAG"), WT.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && WT.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && WT.push("#define ENCODE_NORMAL"), MT.useBones && MT.computeBonesUsingShaders && MT.skeleton ? (zT.push(VT.i.MatricesIndicesKind), zT.push(VT.i.MatricesWeightsKind), MT.numBoneInfluencers > 4 && (zT.push(VT.i.MatricesIndicesExtraKind), zT.push(VT.i.MatricesWeightsExtraKind)), WT.push("#define NUM_BONE_INFLUENCERS " + MT.numBoneInfluencers), WT.push("#define BONETEXTURE " + MT.skeleton.isUsingTextureForMatrices), WT.push("#define BonesPerMesh " + (MT.skeleton.bones.length + 1))) : (WT.push("#define NUM_BONE_INFLUENCERS 0"), WT.push("#define BONETEXTURE false"), WT.push("#define BonesPerMesh 0"));
        const HT = MT.morphTargetManager ? (0, AT.L)(MT.morphTargetManager, WT, zT, MT, !0, !0, !1, gT, nT, !1) : 0;
        UT && (WT.push("#define INSTANCES"), (0, AT.sb)(zT, this._enableVelocity || this._enableVelocityLinear), TT.getRenderingMesh().hasThinInstances && WT.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? WT.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : WT.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, jU.k)(mT, this._scene, WT);
        const kT = this._scene.eB(),
          jT = TT._getDrawWrapper(void 0, !0),
          lT = jT.defines,
          LT = WT.join("\n");
        return lT !== LT && jT.setEffect(kT.createEffect("geometry", {
          attributes: zT,
          uniformsNames: VU,
          samplers: PU,
          defines: LT,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: HT
          },
          shaderLanguage: this.shaderLanguage
        }, kT), LT), jT.effect.isReady()
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
          this._scene.eB().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.XZ.eB()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.XZ.eB().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const TT = [],
          UT = [];
        let mT = 0;
        return this._enableDepth && (this._depthIndex = mT, mT++, TT.push("gBuffer_Depth"), UT.push(this._textureTypesAndFormats[uU.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = mT, mT++, TT.push("gBuffer_Normal"), UT.push(this._textureTypesAndFormats[uU.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = mT, mT++, TT.push("gBuffer_Position"), UT.push(this._textureTypesAndFormats[uU.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = mT, mT++, TT.push("gBuffer_Velocity"), UT.push(this._textureTypesAndFormats[uU.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = mT, mT++, TT.push("gBuffer_VelocityLinear"), UT.push(this._textureTypesAndFormats[uU.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = mT, mT++, TT.push("gBuffer_Reflectivity"), UT.push(this._textureTypesAndFormats[uU.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = mT, mT++, TT.push("gBuffer_ScreenspaceDepth"), UT.push(this._textureTypesAndFormats[uU.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = mT, mT++, TT.push("gBuffer_Irradiance"), UT.push(this._textureTypesAndFormats[uU.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = mT, mT++, TT.push("gBuffer_ObjectId"), UT.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = mT, mT++, TT.push("gBuffer_MeshBlendTag"), UT.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [mT, TT, UT]
      }
      _createRenderTargets() {
        const TT = this._scene.eB(),
          [UT, mT, WT] = this._assignRenderTargetIndices(),
          zT = Math.min(TT.getCaps().maxDrawBuffers ?? 1, 8);
        if (TT.getCaps().drawBuffersExtension && UT > zT) throw new Error(`GeometryBufferRenderer: ${UT} color attachments were requested, but this engine supports at most ${zT}`);
        let gT = 0;
        TT._caps.textureFloat && TT._caps.textureFloatLinearFiltering ? gT = 1 : TT._caps.textureHalfFloat && TT._caps.textureHalfFloatLinearFiltering && (gT = 2);
        const nT = this._getRenderTargetDimensions(),
          HT = [],
          kT = [],
          jT = [];
        for (const MT of WT) MT ? (HT.push(MT.textureType), kT.push(MT.textureFormat), jT.push(MT.samplingMode ?? 2)) : (HT.push(gT), kT.push(5), jT.push(2));
        if (this._normalsAreUnsigned = 11 === HT[uU.NORMAL_TEXTURE_TYPE] || 13 === HT[uU.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new XU("gBuffer", nT, UT, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: HT,
            formats: kT,
            samplingModes: jT,
            depthTextureFormat: this._depthFormat
          }, mT.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = tT.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = tT.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const lT = [!0],
          LT = [!1],
          pT = [!0];
        for (let MT = 1; MT < UT; ++MT) lT.push(!0), pT.push(!1), LT.push(!0);
        const BT = TT.buildTextureLayout(lT),
          ZT = TT.buildTextureLayout(LT),
          cT = TT.buildTextureLayout(pT);
        this._multiRenderTarget.onClearObservable.add((TT => {
          const UT = this.useSpecificClearForDepthTexture ? ZT : BT;
          TT.clearAttachments(this._clearColor, UT, !0, !0, !0), this.useSpecificClearForDepthTexture && TT.clearAttachments(this._clearDepthColor, cT, !0, !1, !1), TT.bindAttachments(BT)
        })), this._resizeObserver = TT.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const vT = TT => {
          const UT = TT.getRenderingMesh(),
            mT = TT.getEffectiveMesh(),
            WT = this._scene,
            zT = WT.eB(),
            gT = TT.wB();
          if (!gT) return;
          if (mT._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[mT.uniqueId] && (this._previousTransformationMatrices[mT.uniqueId] = {
              Nl: PT.e.Identity(),
              viewProjection: WT.getTransformMatrix()
            }, UT.skeleton)) {
            const TT = UT.skeleton.getTransformMatrices(UT);
            this._previousBonesTransformationMatrices[UT.uniqueId] = this._copyBonesTransformationMatrices(TT, new Float32Array(TT.length))
          }
          const nT = UT._getInstancesRenderList(TT._id, !!TT.getReplacementMesh());
          if (nT.mustReturn) return;
          const HT = zT.getCaps().instancedArrays && (null !== nT.visibleInstances[TT._id] || UT.hasThinInstances),
            kT = mT.getWorldMatrix();
          if (this.isReady(TT, HT)) {
            const jT = TT._getDrawWrapper();
            if (!jT) return;
            const lT = jT.effect;
            let LT;
            zT.enableEffect(jT), HT || UT._bind(TT, lT, gT.fillMode), this._useUbo ? ((0, AT.v)(lT, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (lT.setMatrix("viewProjection", WT.getTransformMatrix()), lT.setMatrix("view", WT.getViewMatrix()), this._scene.bindEyePosition(lT, "vEyePosition"));
            if (UT._instanceDataStorage.isFrozen || !gT.backFaceCulling && null === gT.sideOrientation) LT = UT._effectiveSideOrientation;
            else {
              const TT = mT._getWorldMatrixDeterminant();
              LT = gT._getEffectiveOrientation(UT), TT < 0 && (LT = LT === MT.b.ClockWiseSideOrientation ? MT.b.CounterClockWiseSideOrientation : MT.b.ClockWiseSideOrientation)
            }
            if (gT._preBind(jT, LT), gT.needAlphaTestingForMesh(mT)) {
              const TT = gT.getAlphaTestTexture();
              TT && (lT.setTexture("diffuseSampler", TT), lT.setMatrix("diffuseMatrix", TT.getTextureMatrix()), lT.setFloat("alphaCutOff", gT.alphaCutOff ?? .4))
            }
            if ((gT.bumpTexture || gT.normalTexture || gT.geometryNormalTexture) && WT.eB().getCaps().standardDerivatives && DT.e.BumpTextureEnabled) {
              const TT = gT.bumpTexture || gT.normalTexture || gT.geometryNormalTexture;
              lT.setFloat3("vBumpInfos", TT.coordinatesIndex, 1 / TT.level, gT.parallaxScaleBias), lT.setMatrix("bumpMatrix", TT.getTextureMatrix()), lT.setTexture("bumpSampler", TT), lT.setFloat2("vTangentSpaceParams", gT.invertNormalMapX ? -1 : 1, gT.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === gT.getClassName()) null !== gT.metallicRoughnessTexture && (lT.setTexture("reflectivitySampler", gT.metallicRoughnessTexture), lT.setMatrix("reflectivityMatrix", gT.metallicRoughnessTexture.getTextureMatrix())), null !== gT.metallic && lT.setFloat("metallic", gT.metallic), null !== gT.roughness && lT.setFloat("glossiness", 1 - gT.roughness), null !== gT.baseTexture && (lT.setTexture("albedoSampler", gT.baseTexture), lT.setMatrix("albedoMatrix", gT.baseTexture.getTextureMatrix())), null !== gT.baseColor && lT.setColor3("albedoColor", gT.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === gT.getClassName()) null !== gT.specularGlossinessTexture ? (lT.setTexture("reflectivitySampler", gT.specularGlossinessTexture), lT.setMatrix("reflectivityMatrix", gT.specularGlossinessTexture.getTextureMatrix())) : null !== gT.specularColor && lT.setColor3("reflectivityColor", gT.specularColor), null !== gT.glossiness && lT.setFloat("glossiness", gT.glossiness);
            else if ("PBRMaterial" === gT.getClassName()) null !== gT.metallicTexture && (lT.setTexture("reflectivitySampler", gT.metallicTexture), lT.setMatrix("reflectivityMatrix", gT.metallicTexture.getTextureMatrix())), null !== gT.metallic && lT.setFloat("metallic", gT.metallic), null !== gT.roughness && lT.setFloat("glossiness", 1 - gT.roughness), null !== gT.roughness || null !== gT.metallic || null !== gT.metallicTexture ? (null !== gT.albedoTexture && (lT.setTexture("albedoSampler", gT.albedoTexture), lT.setMatrix("albedoMatrix", gT.albedoTexture.getTextureMatrix())), null !== gT.albedoColor && lT.setColor3("albedoColor", gT.albedoColor)) : (null !== gT.reflectivityTexture ? (lT.setTexture("reflectivitySampler", gT.reflectivityTexture), lT.setMatrix("reflectivityMatrix", gT.reflectivityTexture.getTextureMatrix())) : null !== gT.reflectivityColor && lT.setColor3("reflectivityColor", gT.reflectivityColor), null !== gT.microSurface && lT.setFloat("glossiness", gT.microSurface));
            else if ("StandardMaterial" === gT.getClassName()) null !== gT.specularTexture && (lT.setTexture("reflectivitySampler", gT.specularTexture), lT.setMatrix("reflectivityMatrix", gT.specularTexture.getTextureMatrix())), null !== gT.specularColor && lT.setColor3("reflectivityColor", gT.specularColor);
            else if ("OpenPBRMaterial" === gT.getClassName()) {
              const TT = gT;
              TT._useRoughnessFromMetallicTextureGreen && TT.baseMetalnessTexture ? (lT.setTexture("reflectivitySampler", TT.baseMetalnessTexture), lT.setMatrix("reflectivityMatrix", TT.baseMetalnessTexture.getTextureMatrix())) : TT.baseMetalnessTexture ? (lT.setTexture("metallicSampler", TT.baseMetalnessTexture), lT.setMatrix("metallicMatrix", TT.baseMetalnessTexture.getTextureMatrix())) : TT.specularRoughnessTexture && (lT.setTexture("roughnessSampler", TT.specularRoughnessTexture), lT.setMatrix("roughnessMatrix", TT.specularRoughnessTexture.getTextureMatrix())), lT.setFloat("metallic", TT.baseMetalness), lT.setFloat("glossiness", 1 - TT.specularRoughness), null !== TT.baseColorTexture && (lT.setTexture("albedoSampler", TT.baseColorTexture), lT.setMatrix("albedoMatrix", TT.baseColorTexture.getTextureMatrix())), null !== TT.baseColor && lT.setColor3("albedoColor", TT.baseColor)
            }
            if (this._enableIrradiance && WT.environmentTexture) {
              const TT = WT.environmentTexture,
                UT = WT.postProcessRenderPipelineManager.supportedPipelines.find((TT => "IBLShadowsRenderPipeline" === TT.getClassName()));
              if (UT) {
                const TT = UT._getAccumulatedTexture();
                TT && (lT.setTexture("iblShadowSampler", TT), lT.setFloat2("shadowTextureSize", TT.getSize().width, TT.getSize().height))
              }
              if (lT.setMatrix("reflectionMatrix", TT.getReflectionTextureMatrix()), lT.setFloat2("vReflectionInfos", TT.level * WT.iblIntensity, 0), lT.setTexture("reflectionSampler", TT), TT.irradianceTexture && (lT.setTexture("irradianceSampler", TT.irradianceTexture), TT.irradianceTexture._dominantDirection && lT.setVector3("vReflectionDominantDirection", TT.irradianceTexture._dominantDirection)), TT.sphericalPolynomial) {
                const UT = TT.sphericalPolynomial;
                if (UT.preScaledHarmonics) {
                  const TT = UT.preScaledHarmonics;
                  lT.setVector3("vSphericalL00", TT.l00), lT.setVector3("vSphericalL1_1", TT.l1_1), lT.setVector3("vSphericalL10", TT.l10), lT.setVector3("vSphericalL11", TT.l11), lT.setVector3("vSphericalL2_2", TT.l2_2), lT.setVector3("vSphericalL2_1", TT.l2_1), lT.setVector3("vSphericalL20", TT.l20), lT.setVector3("vSphericalL21", TT.l21), lT.setVector3("vSphericalL22", TT.l22)
                } else lT.setFloat3("vSphericalX", UT.x.x, UT.x.y, UT.x.z), lT.setFloat3("vSphericalY", UT.y.x, UT.y.y, UT.y.z), lT.setFloat3("vSphericalZ", UT.z.x, UT.z.y, UT.z.z), lT.setFloat3("vSphericalXX_ZZ", UT.xx.x - UT.zz.x, UT.xx.y - UT.zz.y, UT.xx.z - UT.zz.z), lT.setFloat3("vSphericalYY_ZZ", UT.yy.x - UT.zz.x, UT.yy.y - UT.zz.y, UT.yy.z - UT.zz.z), lT.setFloat3("vSphericalZZ", UT.zz.x, UT.zz.y, UT.zz.z), lT.setFloat3("vSphericalXY", UT.xy.x, UT.xy.y, UT.xy.z), lT.setFloat3("vSphericalYZ", UT.yz.x, UT.yz.y, UT.yz.z), lT.setFloat3("vSphericalZX", UT.zx.x, UT.zx.y, UT.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === gT.getClassName()) {
                const TT = gT;
                lT.setFloat("vSubsurfaceWeight", TT.subsurfaceWeight), TT.subsurfaceWeightTexture && (lT.setTexture("subsurfaceWeightSampler", TT.subsurfaceWeightTexture), lT.setMatrix("subsurfaceWeightMatrix", TT.subsurfaceWeightTexture.getTextureMatrix())), lT.setFloat("vTransmissionWeight", TT.transmissionWeight), TT.transmissionWeightTexture && (lT.setTexture("transmissionWeightSampler", TT.transmissionWeightTexture), lT.setMatrix("transmissionWeightMatrix", TT.transmissionWeightTexture.getTextureMatrix())), lT.setFloat("vTransmissionScatterAnisotropy", TT.transmissionScatterAnisotropy), lT.setFloat("vSubsurfaceScatterAnisotropy", TT.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, jU.c)(lT, gT, this._scene), UT.useBones && UT.computeBonesUsingShaders && UT.skeleton) {
              const TT = UT.skeleton;
              if (TT.isUsingTextureForMatrices && lT.getUniformIndex("boneTextureInfo") > -1) {
                const mT = TT.getTransformMatrixTexture(UT);
                lT.setTexture("boneSampler", mT), lT.setFloat2("boneTextureInfo", TT._textureWidth, TT._textureHeight)
              } else lT.setMatrices("mBones", UT.skeleton.getTransformMatrices(UT));
              (this._enableVelocity || this._enableVelocityLinear) && lT.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[UT.uniqueId])
            }
            if ((0, AT.s)(UT, lT), UT.morphTargetManager && UT.morphTargetManager.isUsingTextureForTargets && UT.morphTargetManager._bind(lT), (this._enableVelocity || this._enableVelocityLinear) && (lT.setMatrix("previousWorld", this._previousTransformationMatrices[mT.uniqueId].Nl), lT.setMatrix("previousViewProjection", this._previousTransformationMatrices[mT.uniqueId].viewProjection)), this._enableObjectId) {
              let TT = UT.uniqueId;
              if (this.objectIdProvider) TT = (0, pU.e)(UT, this.objectIdProvider);
              else if (TT > 16777215) throw new Error(`Invalid geometry object ID ${TT} for mesh "${UT.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              lT.setFloat("objectId", TT)
            }
            if (this._enableMeshBlendTag) {
              const TT = this.meshBlendTagProvider ? (0, pU.d)(UT, this.meshBlendTagProvider) : UT.meshBlendingTag;
              lT.setInt("meshBlendTag", TT)
            }
            HT && UT.hasThinInstances && lT.setMatrix("world", kT), UT._processRendering(mT, TT, lT, gT.fillMode, nT, HT, ((TT, UT) => {
              TT || lT.setMatrix("world", UT)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[mT.uniqueId].Nl = kT.clone(), this._previousTransformationMatrices[mT.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), UT.skeleton && this._copyBonesTransformationMatrices(UT.skeleton.getTransformMatrices(UT), this._previousBonesTransformationMatrices[mT.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (UT, mT, WT) => {
          if ((WT || 0 === mT) && UT.rY)
            for (let zT = 0; zT < UT.rY.length; ++zT) {
              const mT = UT.rY[zT],
                WT = mT.wB(),
                MT = mT.getRenderingMesh();
              if (!WT) continue;
              const gT = MT._getInstancesRenderList(mT._id, !!mT.getReplacementMesh()),
                nT = TT.getCaps().instancedArrays && (null !== gT.visibleInstances[mT._id] || MT.hasThinInstances);
              if (!this.isReady(mT, nT)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (UT, mT, WT, zT) => {
          let MT;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.eB().bindAttachments(this._attachmentsFromPrePass)
          }
          if (zT.length) {
            for (TT.setColorWrite(!1), MT = 0; MT < zT.length; MT++) vT(zT.data[MT]);
            TT.setColorWrite(!0)
          }
          for (MT = 0; MT < UT.length; MT++) vT(UT.data[MT]);
          for (TT.setDepthWrite(!1), MT = 0; MT < mT.length; MT++) vT(mT.data[MT]);
          if (this.renderTransparentMeshes)
            for (MT = 0; MT < WT.length; MT++) vT(WT.data[MT]);
          TT.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const TT = this._scene.eB();
        return {
          width: Math.max(1, Math.floor(TT.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(TT.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(TT, UT) {
        for (let mT = 0; mT < TT.length; mT++) UT[mT] = TT[mT];
        return UT
      }
    }
    uU.ForceGLSL = !1, uU.DEPTH_TEXTURE_TYPE = 0, uU.NORMAL_TEXTURE_TYPE = 1, uU.POSITION_TEXTURE_TYPE = 2, uU.VELOCITY_TEXTURE_TYPE = 3, uU.REFLECTIVITY_TEXTURE_TYPE = 4, uU.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, uU.VELOCITY_LINEAR_TEXTURE_TYPE = 6, uU.IRRADIANCE_TEXTURE_TYPE = 7, uU.OBJECT_ID_TEXTURE_TYPE = 8, uU.MESH_BLEND_TAG_TEXTURE_TYPE = 9, uU._SceneComponentInitialization = TT => {
      throw (0, vU.k)("GeometryBufferRendererSceneComponent")
    };
    var CU = mT(37239);
    const rU = {
      effect: null,
      subMesh: null
    };

    function KU(TT) {
      if ("number" === typeof TT) return 1;
      if (TT instanceof PT.o) return 2;
      if (TT instanceof PT.p || TT instanceof GT.d) return 3;
      if (TT instanceof PT.t || TT instanceof GT.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class SU {
      populateVectorFromLinkedProperties(TT) {
        const UT = KU(TT);
        for (const mT in this.linkedProperties) {
          const TT = this.linkedProperties[mT],
            WT = TT.numComponents;
          if (UT < WT || TT.targetUniformComponentOffset > UT - WT) return void(1 == WT ? dT.b.Error(`Float property ${TT.name} has an offset that is too large.`) : dT.b.Error(`Vector${WT} property ${TT.name} won't fit in Vector${UT} or has an offset that is too large.`));
          "number" === typeof TT.value ? SU._tmpArray[TT.targetUniformComponentOffset] = TT.value : TT.value.toArray(SU._tmpArray, TT.targetUniformComponentOffset)
        }
        TT.MmT(SU._tmpArray)
      }
      constructor(TT, UT) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = TT, this.numComponents = UT
      }
    }
    SU._tmpArray = [0, 0, 0, 0];
    class GU {
      constructor(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          MT = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = TT, this.targetUniformName = mT, this.defaultValue = UT, this.value = UT, this.targetUniformComponentNum = WT, this.targetUniformComponentOffset = zT, this.requiredDefine = MT
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : KU(this.defaultValue)
      }
    }
    class NU {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(TT, UT, mT) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = TT, this.samplerPrefix = UT, this.textureDefine = mT
      }
    }
    class EU extends((0, ZU.e)((0, BU.b)(uT.d))) {}
    class hU extends(function(TT) {
      return class extends TT {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(EU)) {}
    class DU extends((0, NT.f)(hU)) {
      constructor(TT) {
        super(TT), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class oU extends((0, cU.b)(hT.c)) {}
    let AU = (() => {
        var TT, UT, WT, zT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT, vT, fT, qT, iT, bT, OT, eT, YT, aT, yT, XT, IT, FT, uT, CT, rT, KT, NT, hT, RT, TU, UU, mU, WU, zU, MU, gU, nU, HU, kU, BU, ZU, cU, vU, fU, qU, iU, bU, OU, JU, xU, dU, wU, tU, aU, yU, XU, IU, QU, sU, FU, PU, VU, CU, KU, EU, hU, AU, RU, Tm, Um, mm, Wm, zm, Mm, gm, nm, Hm, km, jm, lm, Lm, pm, Bm, Zm, cm, fm, qm, im, bm, Om, em, Ym, Jm, xm, dm, wm, tm;
        let am, ym, Xm, Im, Qm, sm, Fm, Pm, Vm, um, Cm, rm, Km, Sm, Gm, Nm, Em, hm, Dm, om, Am, Rm, TW, UW, mW, WW, zW, MW, gW, nW, HW, kW, jW, lW, LW, pW, BW, ZW, cW, vW, fW, qW, iW, bW, OW, eW, YW, JW, xW, dW, wW, tW, aW, yW, XW, IW, QW, sW, FW, PW, VW, uW, CW, rW, KW, SW, GW, NW, EW, hW, DW, oW, AW, RW, Tz, Uz, mz, Wz, zz, Mz, gz, nz, Hz, kz, jz, lz, Lz, pz, Bz, Zz, cz, vz, fz, qz, iz, bz, Oz, ez, Yz, Jz, xz, dz, wz, tz, az, yz = oU,
          Xz = [],
          Iz = [],
          Qz = [],
          sz = [],
          Fz = [],
          Pz = [],
          Vz = [],
          uz = [],
          Cz = [],
          rz = [],
          Kz = [],
          Sz = [],
          Gz = [],
          Nz = [],
          Ez = [],
          hz = [],
          Dz = [],
          oz = [],
          Az = [],
          Rz = [],
          TM = [],
          UM = [],
          mM = [],
          WM = [],
          zM = [],
          MM = [],
          gM = [],
          nM = [],
          HM = [],
          kM = [],
          jM = [],
          lM = [],
          LM = [],
          pM = [],
          BM = [],
          ZM = [],
          cM = [],
          vM = [],
          fM = [],
          qM = [],
          iM = [],
          bM = [],
          OM = [],
          eM = [],
          YM = [],
          JM = [],
          xM = [],
          dM = [],
          wM = [],
          tM = [],
          aM = [],
          yM = [],
          XM = [],
          IM = [],
          QM = [],
          sM = [],
          FM = [],
          PM = [],
          VM = [],
          uM = [],
          CM = [],
          rM = [],
          KM = [],
          SM = [],
          GM = [],
          NM = [],
          EM = [],
          hM = [],
          DM = [],
          oM = [],
          AM = [],
          RM = [],
          Tg = [],
          Ug = [],
          mg = [],
          Wg = [],
          zg = [],
          Mg = [],
          gg = [],
          ng = [],
          Hg = [],
          kg = [],
          jg = [],
          lg = [],
          Lg = [],
          pg = [],
          Bg = [],
          Zg = [],
          cg = [],
          vg = [],
          fg = [],
          qg = [],
          ig = [],
          bg = [],
          Og = [],
          eg = [],
          Yg = [],
          Jg = [],
          xg = [],
          dg = [],
          wg = [],
          tg = [],
          ag = [],
          yg = [],
          Xg = [],
          Ig = [],
          Qg = [],
          sg = [],
          Fg = [],
          Pg = [],
          Vg = [],
          ug = [],
          Cg = [],
          rg = [],
          Kg = [],
          Sg = [],
          Gg = [],
          Ng = [],
          Eg = [],
          hg = [],
          Dg = [],
          og = [],
          Ag = [],
          Rg = [],
          Tn = [],
          Un = [],
          mn = [],
          Wn = [],
          zn = [],
          Mn = [],
          gn = [],
          nn = [],
          Hn = [],
          kn = [],
          jn = [],
          Ln = [],
          pn = [],
          Bn = [],
          Zn = [],
          cn = [],
          vn = [],
          fn = [],
          qn = [],
          bn = [],
          On = [],
          en = [],
          Yn = [],
          Jn = [],
          xn = [],
          dn = [],
          wn = [],
          tn = [],
          an = [],
          yn = [],
          Xn = [],
          In = [],
          Qn = [],
          sn = [],
          Fn = [],
          Pn = [],
          Vn = [],
          un = [],
          Cn = [],
          rn = [],
          Kn = [],
          Sn = [],
          Gn = [],
          Nn = [],
          En = [],
          hn = [],
          Dn = [],
          An = [],
          Rn = [],
          TH = [],
          UH = [],
          mH = [],
          WH = [],
          zH = [],
          MH = [],
          gH = [],
          nH = [],
          HH = [],
          kH = [],
          jH = [],
          lH = [],
          LH = [],
          pH = [],
          BH = [],
          ZH = [],
          cH = [],
          vH = [],
          fH = [],
          qH = [],
          iH = [],
          bH = [],
          OH = [],
          eH = [],
          YH = [],
          JH = [],
          xH = [],
          dH = [],
          wH = [],
          tH = [],
          aH = [],
          yH = [];
        return TT = class extends yz {
          get baseWeight() {
            return (0, JT.d)(this, UT, "f")
          }
          set baseWeight(TT) {
            (0, JT.e)(this, UT, TT, "f")
          }
          get baseWeightTexture() {
            return (0, JT.d)(this, WT, "f")
          }
          set baseWeightTexture(TT) {
            (0, JT.e)(this, WT, TT, "f")
          }
          get baseColor() {
            return (0, JT.d)(this, zT, "f")
          }
          set baseColor(TT) {
            (0, JT.e)(this, zT, TT, "f")
          }
          get baseColorTexture() {
            return (0, JT.d)(this, gT, "f")
          }
          set baseColorTexture(TT) {
            (0, JT.e)(this, gT, TT, "f")
          }
          get baseDiffuseRoughness() {
            return (0, JT.d)(this, nT, "f")
          }
          set baseDiffuseRoughness(TT) {
            (0, JT.e)(this, nT, TT, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, JT.d)(this, HT, "f")
          }
          set baseDiffuseRoughnessTexture(TT) {
            (0, JT.e)(this, HT, TT, "f")
          }
          get baseMetalness() {
            return (0, JT.d)(this, kT, "f")
          }
          set baseMetalness(TT) {
            (0, JT.e)(this, kT, TT, "f")
          }
          get baseMetalnessTexture() {
            return (0, JT.d)(this, jT, "f")
          }
          set baseMetalnessTexture(TT) {
            (0, JT.e)(this, jT, TT, "f")
          }
          get specularWeight() {
            return (0, JT.d)(this, lT, "f")
          }
          set specularWeight(TT) {
            (0, JT.e)(this, lT, TT, "f")
          }
          get specularWeightTexture() {
            return (0, JT.d)(this, LT, "f")
          }
          set specularWeightTexture(TT) {
            (0, JT.e)(this, LT, TT, "f")
          }
          get specularColor() {
            return (0, JT.d)(this, pT, "f")
          }
          set specularColor(TT) {
            (0, JT.e)(this, pT, TT, "f")
          }
          get specularColorTexture() {
            return (0, JT.d)(this, BT, "f")
          }
          set specularColorTexture(TT) {
            (0, JT.e)(this, BT, TT, "f")
          }
          get specularRoughness() {
            return (0, JT.d)(this, ZT, "f")
          }
          set specularRoughness(TT) {
            (0, JT.e)(this, ZT, TT, "f")
          }
          get specularRoughnessTexture() {
            return (0, JT.d)(this, cT, "f")
          }
          set specularRoughnessTexture(TT) {
            (0, JT.e)(this, cT, TT, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, JT.d)(this, vT, "f")
          }
          set specularRoughnessAnisotropy(TT) {
            (0, JT.e)(this, vT, TT, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, JT.d)(this, fT, "f")
          }
          set specularRoughnessAnisotropyTexture(TT) {
            (0, JT.e)(this, fT, TT, "f")
          }
          get specularIor() {
            return (0, JT.d)(this, qT, "f")
          }
          set specularIor(TT) {
            (0, JT.e)(this, qT, TT, "f")
          }
          get transmissionWeight() {
            return (0, JT.d)(this, iT, "f")
          }
          set transmissionWeight(TT) {
            (0, JT.e)(this, iT, TT, "f")
          }
          get transmissionWeightTexture() {
            return (0, JT.d)(this, bT, "f")
          }
          set transmissionWeightTexture(TT) {
            (0, JT.e)(this, bT, TT, "f")
          }
          get transmissionColor() {
            return (0, JT.d)(this, OT, "f")
          }
          set transmissionColor(TT) {
            (0, JT.e)(this, OT, TT, "f")
          }
          get transmissionColorTexture() {
            return (0, JT.d)(this, eT, "f")
          }
          set transmissionColorTexture(TT) {
            (0, JT.e)(this, eT, TT, "f")
          }
          get transmissionDepth() {
            return (0, JT.d)(this, YT, "f")
          }
          set transmissionDepth(TT) {
            (0, JT.e)(this, YT, TT, "f")
          }
          get transmissionDepthTexture() {
            return (0, JT.d)(this, aT, "f")
          }
          set transmissionDepthTexture(TT) {
            (0, JT.e)(this, aT, TT, "f")
          }
          get transmissionScatter() {
            return (0, JT.d)(this, yT, "f")
          }
          set transmissionScatter(TT) {
            (0, JT.e)(this, yT, TT, "f")
          }
          get transmissionScatterTexture() {
            return (0, JT.d)(this, XT, "f")
          }
          set transmissionScatterTexture(TT) {
            (0, JT.e)(this, XT, TT, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, JT.d)(this, IT, "f")
          }
          set transmissionScatterAnisotropy(TT) {
            (0, JT.e)(this, IT, TT, "f")
          }
          get transmissionDispersionScale() {
            return (0, JT.d)(this, FT, "f")
          }
          set transmissionDispersionScale(TT) {
            (0, JT.e)(this, FT, TT, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, JT.d)(this, uT, "f")
          }
          set transmissionDispersionScaleTexture(TT) {
            (0, JT.e)(this, uT, TT, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, JT.d)(this, CT, "f")
          }
          set transmissionDispersionAbbeNumber(TT) {
            (0, JT.e)(this, CT, TT, "f")
          }
          get subsurfaceWeight() {
            return (0, JT.d)(this, rT, "f")
          }
          set subsurfaceWeight(TT) {
            (0, JT.e)(this, rT, TT, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, JT.d)(this, KT, "f")
          }
          set subsurfaceWeightTexture(TT) {
            (0, JT.e)(this, KT, TT, "f")
          }
          get subsurfaceColor() {
            return (0, JT.d)(this, NT, "f")
          }
          set subsurfaceColor(TT) {
            (0, JT.e)(this, NT, TT, "f")
          }
          get subsurfaceColorTexture() {
            return (0, JT.d)(this, hT, "f")
          }
          set subsurfaceColorTexture(TT) {
            (0, JT.e)(this, hT, TT, "f")
          }
          get subsurfaceRadius() {
            return (0, JT.d)(this, RT, "f")
          }
          set subsurfaceRadius(TT) {
            (0, JT.e)(this, RT, TT, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, JT.d)(this, TU, "f")
          }
          set subsurfaceRadiusScale(TT) {
            (0, JT.e)(this, TU, TT, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, JT.d)(this, UU, "f")
          }
          set subsurfaceRadiusScaleTexture(TT) {
            (0, JT.e)(this, UU, TT, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, JT.d)(this, mU, "f")
          }
          set subsurfaceScatterAnisotropy(TT) {
            (0, JT.e)(this, mU, TT, "f")
          }
          get coatWeight() {
            return (0, JT.d)(this, WU, "f")
          }
          set coatWeight(TT) {
            (0, JT.e)(this, WU, TT, "f")
          }
          get coatWeightTexture() {
            return (0, JT.d)(this, zU, "f")
          }
          set coatWeightTexture(TT) {
            (0, JT.e)(this, zU, TT, "f")
          }
          get coatColor() {
            return (0, JT.d)(this, MU, "f")
          }
          set coatColor(TT) {
            (0, JT.e)(this, MU, TT, "f")
          }
          get coatColorTexture() {
            return (0, JT.d)(this, gU, "f")
          }
          set coatColorTexture(TT) {
            (0, JT.e)(this, gU, TT, "f")
          }
          get coatRoughness() {
            return (0, JT.d)(this, nU, "f")
          }
          set coatRoughness(TT) {
            (0, JT.e)(this, nU, TT, "f")
          }
          get coatRoughnessTexture() {
            return (0, JT.d)(this, HU, "f")
          }
          set coatRoughnessTexture(TT) {
            (0, JT.e)(this, HU, TT, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, JT.d)(this, kU, "f")
          }
          set coatRoughnessAnisotropy(TT) {
            (0, JT.e)(this, kU, TT, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, JT.d)(this, BU, "f")
          }
          set coatRoughnessAnisotropyTexture(TT) {
            (0, JT.e)(this, BU, TT, "f")
          }
          get coatIor() {
            return (0, JT.d)(this, ZU, "f")
          }
          set coatIor(TT) {
            (0, JT.e)(this, ZU, TT, "f")
          }
          get coatDarkening() {
            return (0, JT.d)(this, cU, "f")
          }
          set coatDarkening(TT) {
            (0, JT.e)(this, cU, TT, "f")
          }
          get coatDarkeningTexture() {
            return (0, JT.d)(this, vU, "f")
          }
          set coatDarkeningTexture(TT) {
            (0, JT.e)(this, vU, TT, "f")
          }
          get fuzzWeight() {
            return (0, JT.d)(this, fU, "f")
          }
          set fuzzWeight(TT) {
            (0, JT.e)(this, fU, TT, "f")
          }
          get fuzzWeightTexture() {
            return (0, JT.d)(this, qU, "f")
          }
          set fuzzWeightTexture(TT) {
            (0, JT.e)(this, qU, TT, "f")
          }
          get fuzzColor() {
            return (0, JT.d)(this, iU, "f")
          }
          set fuzzColor(TT) {
            (0, JT.e)(this, iU, TT, "f")
          }
          get fuzzColorTexture() {
            return (0, JT.d)(this, bU, "f")
          }
          set fuzzColorTexture(TT) {
            (0, JT.e)(this, bU, TT, "f")
          }
          get fuzzRoughness() {
            return (0, JT.d)(this, OU, "f")
          }
          set fuzzRoughness(TT) {
            (0, JT.e)(this, OU, TT, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, JT.d)(this, JU, "f")
          }
          set fuzzRoughnessTexture(TT) {
            (0, JT.e)(this, JU, TT, "f")
          }
          get geometryThinWalled() {
            return (0, JT.d)(this, xU, "f")
          }
          set geometryThinWalled(TT) {
            (0, JT.e)(this, xU, TT, "f")
          }
          get geometryNormalTexture() {
            return (0, JT.d)(this, dU, "f")
          }
          set geometryNormalTexture(TT) {
            (0, JT.e)(this, dU, TT, "f")
          }
          get geometryTangent() {
            return (0, JT.d)(this, wU, "f")
          }
          set geometryTangent(TT) {
            (0, JT.e)(this, wU, TT, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(TT) {
            this.geometryTangent = new PT.o(Math.cos(TT), Math.sin(TT))
          }
          get geometryTangentTexture() {
            return (0, JT.d)(this, tU, "f")
          }
          set geometryTangentTexture(TT) {
            (0, JT.e)(this, tU, TT, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, JT.d)(this, aU, "f")
          }
          set geometryCoatNormalTexture(TT) {
            (0, JT.e)(this, aU, TT, "f")
          }
          get geometryCoatTangent() {
            return (0, JT.d)(this, yU, "f")
          }
          set geometryCoatTangent(TT) {
            (0, JT.e)(this, yU, TT, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(TT) {
            this.geometryCoatTangent = new PT.o(Math.cos(TT), Math.sin(TT))
          }
          get geometryCoatTangentTexture() {
            return (0, JT.d)(this, XU, "f")
          }
          set geometryCoatTangentTexture(TT) {
            (0, JT.e)(this, XU, TT, "f")
          }
          get geometryOpacity() {
            return (0, JT.d)(this, IU, "f")
          }
          set geometryOpacity(TT) {
            (0, JT.e)(this, IU, TT, "f")
          }
          get geometryOpacityTexture() {
            return (0, JT.d)(this, QU, "f")
          }
          set geometryOpacityTexture(TT) {
            (0, JT.e)(this, QU, TT, "f")
          }
          get geometryThickness() {
            return (0, JT.d)(this, sU, "f")
          }
          set geometryThickness(TT) {
            (0, JT.e)(this, sU, TT, "f")
          }
          get geometryThicknessTexture() {
            return (0, JT.d)(this, FU, "f")
          }
          set geometryThicknessTexture(TT) {
            (0, JT.e)(this, FU, TT, "f")
          }
          get emissionLuminance() {
            return (0, JT.d)(this, PU, "f")
          }
          set emissionLuminance(TT) {
            (0, JT.e)(this, PU, TT, "f")
          }
          get emissionColor() {
            return (0, JT.d)(this, VU, "f")
          }
          set emissionColor(TT) {
            (0, JT.e)(this, VU, TT, "f")
          }
          get emissionColorTexture() {
            return (0, JT.d)(this, CU, "f")
          }
          set emissionColorTexture(TT) {
            (0, JT.e)(this, CU, TT, "f")
          }
          get thinFilmWeight() {
            return (0, JT.d)(this, KU, "f")
          }
          set thinFilmWeight(TT) {
            (0, JT.e)(this, KU, TT, "f")
          }
          get thinFilmWeightTexture() {
            return (0, JT.d)(this, EU, "f")
          }
          set thinFilmWeightTexture(TT) {
            (0, JT.e)(this, EU, TT, "f")
          }
          get thinFilmThickness() {
            return (0, JT.d)(this, hU, "f")
          }
          set thinFilmThickness(TT) {
            (0, JT.e)(this, hU, TT, "f")
          }
          get thinFilmThicknessMin() {
            return (0, JT.d)(this, AU, "f")
          }
          set thinFilmThicknessMin(TT) {
            (0, JT.e)(this, AU, TT, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, JT.d)(this, RU, "f")
          }
          set thinFilmThicknessTexture(TT) {
            (0, JT.e)(this, RU, TT, "f")
          }
          get thinFilmIor() {
            return (0, JT.d)(this, Tm, "f")
          }
          set thinFilmIor(TT) {
            (0, JT.e)(this, Tm, TT, "f")
          }
          get ambientOcclusionTexture() {
            return (0, JT.d)(this, Um, "f")
          }
          set ambientOcclusionTexture(TT) {
            (0, JT.e)(this, Um, TT, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(TT) {
            this._sssQuality !== TT && (this._sssQuality = TT, this.NUT(1))
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
            return (0, JT.d)(this, mm, "f")
          }
          set directIntensity(TT) {
            (0, JT.e)(this, mm, TT, "f")
          }
          get environmentIntensity() {
            return (0, JT.d)(this, Wm, "f")
          }
          set environmentIntensity(TT) {
            (0, JT.e)(this, Wm, TT, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, JT.d)(this, zm, "f")
          }
          set useSpecularWeightFromTextureAlpha(TT) {
            (0, JT.e)(this, zm, TT, "f")
          }
          get forceAlphaTest() {
            return (0, JT.d)(this, Mm, "f")
          }
          set forceAlphaTest(TT) {
            (0, JT.e)(this, Mm, TT, "f")
          }
          get alphaCutOff() {
            return (0, JT.d)(this, gm, "f")
          }
          set alphaCutOff(TT) {
            (0, JT.e)(this, gm, TT, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, JT.d)(this, nm, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(TT) {
            (0, JT.e)(this, nm, TT, "f")
          }
          get useAmbientInGrayScale() {
            return (0, JT.d)(this, Hm, "f")
          }
          set useAmbientInGrayScale(TT) {
            (0, JT.e)(this, Hm, TT, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(GT.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === MT.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(TT) {
            TT !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? MT.b.LIGHTFALLOFF_PHYSICAL : MT.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === MT.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(TT) {
            TT !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? MT.b.LIGHTFALLOFF_GLTF : MT.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, JT.d)(this, km, "f")
          }
          set useObjectSpaceNormalMap(TT) {
            (0, JT.e)(this, km, TT, "f")
          }
          get useParallax() {
            return (0, JT.d)(this, jm, "f")
          }
          set useParallax(TT) {
            (0, JT.e)(this, jm, TT, "f")
          }
          get useParallaxOcclusion() {
            return (0, JT.d)(this, lm, "f")
          }
          set useParallaxOcclusion(TT) {
            (0, JT.e)(this, lm, TT, "f")
          }
          get parallaxScaleBias() {
            return (0, JT.d)(this, Lm, "f")
          }
          set parallaxScaleBias(TT) {
            (0, JT.e)(this, Lm, TT, "f")
          }
          get disableLighting() {
            return (0, JT.d)(this, pm, "f")
          }
          set disableLighting(TT) {
            (0, JT.e)(this, pm, TT, "f")
          }
          get forceIrradianceInFragment() {
            return (0, JT.d)(this, Bm, "f")
          }
          set forceIrradianceInFragment(TT) {
            (0, JT.e)(this, Bm, TT, "f")
          }
          get maxSimultaneousLights() {
            return (0, JT.d)(this, Zm, "f")
          }
          set maxSimultaneousLights(TT) {
            (0, JT.e)(this, Zm, TT, "f")
          }
          get invertNormalMapX() {
            return (0, JT.d)(this, cm, "f")
          }
          set invertNormalMapX(TT) {
            (0, JT.e)(this, cm, TT, "f")
          }
          get invertNormalMapY() {
            return (0, JT.d)(this, fm, "f")
          }
          set invertNormalMapY(TT) {
            (0, JT.e)(this, fm, TT, "f")
          }
          get twoSidedLighting() {
            return (0, JT.d)(this, qm, "f")
          }
          set twoSidedLighting(TT) {
            (0, JT.e)(this, qm, TT, "f")
          }
          get useAlphaFresnel() {
            return (0, JT.d)(this, im, "f")
          }
          set useAlphaFresnel(TT) {
            (0, JT.e)(this, im, TT, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, JT.d)(this, bm, "f")
          }
          set useLinearAlphaFresnel(TT) {
            (0, JT.e)(this, bm, TT, "f")
          }
          get environmentBRDFTexture() {
            return (0, JT.d)(this, Om, "f")
          }
          set environmentBRDFTexture(TT) {
            (0, JT.e)(this, Om, TT, "f")
          }
          get forceNormalForward() {
            return (0, JT.d)(this, em, "f")
          }
          set forceNormalForward(TT) {
            (0, JT.e)(this, em, TT, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, JT.d)(this, Ym, "f")
          }
          set enableSpecularAntiAliasing(TT) {
            (0, JT.e)(this, Ym, TT, "f")
          }
          get useHorizonOcclusion() {
            return (0, JT.d)(this, Jm, "f")
          }
          set useHorizonOcclusion(TT) {
            (0, JT.e)(this, Jm, TT, "f")
          }
          get useRadianceOcclusion() {
            return (0, JT.d)(this, xm, "f")
          }
          set useRadianceOcclusion(TT) {
            (0, JT.e)(this, xm, TT, "f")
          }
          get unlit() {
            return (0, JT.d)(this, dm, "f")
          }
          set unlit(TT) {
            (0, JT.e)(this, dm, TT, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, JT.d)(this, wm, "f")
          }
          set applyDecalMapAfterDetailMap(TT) {
            (0, JT.e)(this, wm, TT, "f")
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
            this._refractionHighQualityBlur !== TT && (this._refractionHighQualityBlur = TT, this.NUT(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(TT) {
            this._realTimeFiltering = TT, this.NUT(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(TT) {
            this._realTimeFilteringQuality = TT, this.NUT(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(TT) {
            this._fuzzSampleNumber = TT, this.NUT(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, JT.d)(this, tm, "f")
          }
          set debugMode(TT) {
            (0, JT.e)(this, tm, TT, "f")
          }
          constructor(mT, xT) {
            super(mT, xT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || TT.ForceGLSL), UT.set(this, ((0, JT.k)(this, Xz), (0, JT.k)(this, Iz, void 0))), this._baseWeight = ((0, JT.k)(this, Qz), new GU("base_weight", 1, "vBaseWeight", 1)), WT.set(this, (0, JT.k)(this, sz, void 0)), this._baseWeightTexture = ((0, JT.k)(this, Fz), new NU("base_weight", "baseWeight", "BASE_WEIGHT")), zT.set(this, (0, JT.k)(this, Pz, void 0)), this._baseColor = ((0, JT.k)(this, Vz), new GU("base_color", GT.d.White(), "vBaseColor", 4)), gT.set(this, (0, JT.k)(this, uz, void 0)), this._baseColorTexture = ((0, JT.k)(this, Cz), new NU("base_color", "baseColor", "BASE_COLOR")), nT.set(this, (0, JT.k)(this, rz, void 0)), this._baseDiffuseRoughness = ((0, JT.k)(this, Kz), new GU("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), HT.set(this, (0, JT.k)(this, Sz, void 0)), this._baseDiffuseRoughnessTexture = ((0, JT.k)(this, Gz), new NU("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), kT.set(this, (0, JT.k)(this, Nz, void 0)), this._baseMetalness = ((0, JT.k)(this, Ez), new GU("base_metalness", 0, "vReflectanceInfo", 4, 0)), jT.set(this, (0, JT.k)(this, hz, void 0)), this._baseMetalnessTexture = ((0, JT.k)(this, Dz), new NU("base_metalness", "baseMetalness", "BASE_METALNESS")), lT.set(this, (0, JT.k)(this, oz, void 0)), this._specularWeight = ((0, JT.k)(this, Az), new GU("specular_weight", 1, "vReflectanceInfo", 4, 3)), LT.set(this, (0, JT.k)(this, Rz, void 0)), this._specularWeightTexture = ((0, JT.k)(this, TM), new NU("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), pT.set(this, (0, JT.k)(this, UM, void 0)), this._specularColor = ((0, JT.k)(this, mM), new GU("specular_color", GT.d.White(), "vSpecularColor", 4)), BT.set(this, (0, JT.k)(this, WM, void 0)), this._specularColorTexture = ((0, JT.k)(this, zM), new NU("specular_color", "specularColor", "SPECULAR_COLOR")), ZT.set(this, (0, JT.k)(this, MM, void 0)), this._specularRoughness = ((0, JT.k)(this, gM), new GU("specular_roughness", .3, "vReflectanceInfo", 4, 1)), cT.set(this, (0, JT.k)(this, nM, void 0)), this._specularRoughnessTexture = ((0, JT.k)(this, HM), new NU("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), vT.set(this, (0, JT.k)(this, kM, void 0)), this._specularRoughnessAnisotropy = ((0, JT.k)(this, jM), new GU("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), fT.set(this, (0, JT.k)(this, lM, void 0)), this._specularRoughnessAnisotropyTexture = ((0, JT.k)(this, LM), new NU("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), qT.set(this, (0, JT.k)(this, pM, void 0)), this._specularIor = ((0, JT.k)(this, BM), new GU("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), iT.set(this, (0, JT.k)(this, ZM, void 0)), this._transmissionWeight = ((0, JT.k)(this, cM), new GU("transmission_weight", 0, "vTransmissionWeight", 1)), bT.set(this, (0, JT.k)(this, vM, void 0)), this._transmissionWeightTexture = ((0, JT.k)(this, fM), new NU("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), OT.set(this, (0, JT.k)(this, qM, void 0)), this._transmissionColor = ((0, JT.k)(this, iM), new GU("transmission_color", GT.d.White(), "vTransmissionColor", 3, 0)), eT.set(this, (0, JT.k)(this, bM, void 0)), this._transmissionColorTexture = ((0, JT.k)(this, OM), new NU("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), YT.set(this, (0, JT.k)(this, eM, void 0)), this._transmissionDepth = ((0, JT.k)(this, YM), new GU("transmission_depth", 0, "vTransmissionDepth", 1, 0)), aT.set(this, (0, JT.k)(this, JM, void 0)), this._transmissionDepthTexture = ((0, JT.k)(this, xM), new NU("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), yT.set(this, (0, JT.k)(this, dM, void 0)), this._transmissionScatter = ((0, JT.k)(this, wM), new GU("transmission_scatter", GT.d.Black(), "vTransmissionScatter", 3, 0)), XT.set(this, (0, JT.k)(this, tM, void 0)), this._transmissionScatterTexture = ((0, JT.k)(this, aM), new NU("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), IT.set(this, (0, JT.k)(this, yM, void 0)), this._transmissionScatterAnisotropy = ((0, JT.k)(this, XM), new GU("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), FT.set(this, (0, JT.k)(this, IM, void 0)), this._transmissionDispersionScale = ((0, JT.k)(this, QM), new GU("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), uT.set(this, (0, JT.k)(this, sM, void 0)), this._transmissionDispersionScaleTexture = ((0, JT.k)(this, FM), new NU("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), CT.set(this, (0, JT.k)(this, PM, void 0)), this._transmissionDispersionAbbeNumber = ((0, JT.k)(this, VM), new GU("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), rT.set(this, (0, JT.k)(this, uM, void 0)), this._subsurfaceWeight = ((0, JT.k)(this, CM), new GU("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), KT.set(this, (0, JT.k)(this, rM, void 0)), this._subsurfaceWeightTexture = ((0, JT.k)(this, KM), new NU("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), NT.set(this, (0, JT.k)(this, SM, void 0)), this._subsurfaceColor = ((0, JT.k)(this, GM), new GU("subsurface_color", new GT.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), hT.set(this, (0, JT.k)(this, NM, void 0)), this._subsurfaceColorTexture = ((0, JT.k)(this, EM), new NU("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), RT.set(this, (0, JT.k)(this, hM, void 0)), this._subsurfaceRadius = ((0, JT.k)(this, DM), new GU("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), TU.set(this, (0, JT.k)(this, oM, void 0)), this._subsurfaceRadiusScale = ((0, JT.k)(this, AM), new GU("subsurface_radius_scale", new GT.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), UU.set(this, (0, JT.k)(this, RM, void 0)), this._subsurfaceRadiusScaleTexture = ((0, JT.k)(this, Tg), new NU("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), mU.set(this, (0, JT.k)(this, Ug, void 0)), this._subsurfaceScatterAnisotropy = ((0, JT.k)(this, mg), new GU("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), WU.set(this, (0, JT.k)(this, Wg, void 0)), this._coatWeight = ((0, JT.k)(this, zg), new GU("coat_weight", 0, "vCoatWeight", 1, 0)), zU.set(this, (0, JT.k)(this, Mg, void 0)), this._coatWeightTexture = ((0, JT.k)(this, gg), new NU("coat_weight", "coatWeight", "COAT_WEIGHT")), MU.set(this, (0, JT.k)(this, ng, void 0)), this._coatColor = ((0, JT.k)(this, Hg), new GU("coat_color", GT.d.White(), "vCoatColor", 3, 0)), gU.set(this, (0, JT.k)(this, kg, void 0)), this._coatColorTexture = ((0, JT.k)(this, jg), new NU("coat_color", "coatColor", "COAT_COLOR")), nU.set(this, (0, JT.k)(this, lg, void 0)), this._coatRoughness = ((0, JT.k)(this, Lg), new GU("coat_roughness", 0, "vCoatRoughness", 1, 0)), HU.set(this, (0, JT.k)(this, pg, void 0)), this._coatRoughnessTexture = ((0, JT.k)(this, Bg), new NU("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), kU.set(this, (0, JT.k)(this, Zg, void 0)), this._coatRoughnessAnisotropy = ((0, JT.k)(this, cg), new GU("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), BU.set(this, (0, JT.k)(this, vg, void 0)), this._coatRoughnessAnisotropyTexture = ((0, JT.k)(this, fg), new NU("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), ZU.set(this, (0, JT.k)(this, qg, void 0)), this._coatIor = ((0, JT.k)(this, ig), new GU("coat_ior", 1.5, "vCoatIor", 1, 0)), cU.set(this, (0, JT.k)(this, bg, void 0)), this._coatDarkening = ((0, JT.k)(this, Og), new GU("coat_darkening", 1, "vCoatDarkening", 1, 0)), vU.set(this, (0, JT.k)(this, eg, void 0)), this._coatDarkeningTexture = ((0, JT.k)(this, Yg), new NU("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, fU.set(this, (0, JT.k)(this, Jg, void 0)), this._fuzzWeight = ((0, JT.k)(this, xg), new GU("fuzz_weight", 0, "vFuzzWeight", 1, 0)), qU.set(this, (0, JT.k)(this, dg, void 0)), this._fuzzWeightTexture = ((0, JT.k)(this, wg), new NU("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), iU.set(this, (0, JT.k)(this, tg, void 0)), this._fuzzColor = ((0, JT.k)(this, ag), new GU("fuzz_color", GT.d.White(), "vFuzzColor", 3, 0)), bU.set(this, (0, JT.k)(this, yg, void 0)), this._fuzzColorTexture = ((0, JT.k)(this, Xg), new NU("fuzz_color", "fuzzColor", "FUZZ_COLOR")), OU.set(this, (0, JT.k)(this, Ig, void 0)), this._fuzzRoughness = ((0, JT.k)(this, Qg), new GU("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), JU.set(this, (0, JT.k)(this, sg, void 0)), this._fuzzRoughnessTexture = ((0, JT.k)(this, Fg), new NU("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), xU.set(this, (0, JT.k)(this, Pg, void 0)), this._geometryThinWalled = ((0, JT.k)(this, Vg), new GU("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), dU.set(this, (0, JT.k)(this, ug, void 0)), this._geometryNormalTexture = ((0, JT.k)(this, Cg), new NU("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), wU.set(this, (0, JT.k)(this, rg, void 0)), this._geometryTangent = ((0, JT.k)(this, Kg), new GU("geometry_tangent", new PT.o(1, 0), "vSpecularAnisotropy", 3, 0)), tU.set(this, (0, JT.k)(this, Sg, void 0)), this._geometryTangentTexture = ((0, JT.k)(this, Gg), new NU("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), aU.set(this, (0, JT.k)(this, Ng, void 0)), this._geometryCoatNormalTexture = ((0, JT.k)(this, Eg), new NU("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), yU.set(this, (0, JT.k)(this, hg, void 0)), this._geometryCoatTangent = ((0, JT.k)(this, Dg), new GU("geometry_coat_tangent", new PT.o(1, 0), "vGeometryCoatTangent", 2, 0)), XU.set(this, (0, JT.k)(this, og, void 0)), this._geometryCoatTangentTexture = ((0, JT.k)(this, Ag), new NU("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), IU.set(this, (0, JT.k)(this, Rg, void 0)), this._geometryOpacity = ((0, JT.k)(this, Tn), new GU("geometry_opacity", 1, "vBaseColor", 4, 3)), QU.set(this, (0, JT.k)(this, Un, void 0)), this._geometryOpacityTexture = ((0, JT.k)(this, mn), new NU("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), sU.set(this, (0, JT.k)(this, Wn, void 0)), this._geometryThickness = ((0, JT.k)(this, zn), new GU("geometry_thickness", 0, "vGeometryThickness", 1, 0)), FU.set(this, (0, JT.k)(this, Mn, void 0)), this._geometryThicknessTexture = ((0, JT.k)(this, gn), new NU("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), PU.set(this, (0, JT.k)(this, nn, void 0)), this._emissionLuminance = ((0, JT.k)(this, Hn), new GU("emission_luminance", 1, "vLightingIntensity", 4, 1)), VU.set(this, (0, JT.k)(this, kn, void 0)), this._emissionColor = ((0, JT.k)(this, jn), new GU("emission_color", GT.d.Black(), "vEmissionColor", 3)), CU.set(this, (0, JT.k)(this, Ln, void 0)), this._emissionColorTexture = ((0, JT.k)(this, pn), new NU("emission_color", "emissionColor", "EMISSION_COLOR")), KU.set(this, (0, JT.k)(this, Bn, void 0)), this._thinFilmWeight = ((0, JT.k)(this, Zn), new GU("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), EU.set(this, (0, JT.k)(this, cn, void 0)), this._thinFilmWeightTexture = ((0, JT.k)(this, vn), new NU("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), hU.set(this, (0, JT.k)(this, fn, void 0)), this._thinFilmThickness = ((0, JT.k)(this, qn), new GU("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), AU.set(this, (0, JT.k)(this, bn, void 0)), this._thinFilmThicknessMin = ((0, JT.k)(this, On), new GU("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), RU.set(this, (0, JT.k)(this, en, void 0)), this._thinFilmThicknessTexture = ((0, JT.k)(this, Yn), new NU("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Tm.set(this, (0, JT.k)(this, Jn, void 0)), this._thinFilmIor = ((0, JT.k)(this, xn), new GU("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), Um.set(this, (0, JT.k)(this, dn, void 0)), this._ambientOcclusionTexture = ((0, JT.k)(this, wn), new NU("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = TT.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, mm.set(this, (0, JT.k)(this, tn, 1)), Wm.set(this, ((0, JT.k)(this, an), (0, JT.k)(this, yn, 1))), zm.set(this, ((0, JT.k)(this, Xn), (0, JT.k)(this, In, !1))), Mm.set(this, ((0, JT.k)(this, Qn), (0, JT.k)(this, sn, !1))), gm.set(this, ((0, JT.k)(this, Fn), (0, JT.k)(this, Pn, .4))), nm.set(this, ((0, JT.k)(this, Vn), (0, JT.k)(this, un, !1))), Hm.set(this, ((0, JT.k)(this, Cn), (0, JT.k)(this, rn, !1))), km.set(this, ((0, JT.k)(this, Kn), (0, JT.k)(this, Sn, !1))), jm.set(this, ((0, JT.k)(this, Gn), (0, JT.k)(this, Nn, !1))), lm.set(this, ((0, JT.k)(this, En), (0, JT.k)(this, hn, !1))), Lm.set(this, ((0, JT.k)(this, Dn), (0, JT.k)(this, An, .05))), pm.set(this, ((0, JT.k)(this, Rn), (0, JT.k)(this, TH, !1))), Bm.set(this, ((0, JT.k)(this, UH), (0, JT.k)(this, mH, !1))), Zm.set(this, ((0, JT.k)(this, WH), (0, JT.k)(this, zH, 4))), cm.set(this, ((0, JT.k)(this, MH), (0, JT.k)(this, gH, !1))), fm.set(this, ((0, JT.k)(this, nH), (0, JT.k)(this, HH, !1))), qm.set(this, ((0, JT.k)(this, kH), (0, JT.k)(this, jH, !1))), im.set(this, ((0, JT.k)(this, lH), (0, JT.k)(this, LH, !1))), bm.set(this, ((0, JT.k)(this, pH), (0, JT.k)(this, BH, !1))), Om.set(this, ((0, JT.k)(this, ZH), (0, JT.k)(this, cH, null))), em.set(this, ((0, JT.k)(this, vH), (0, JT.k)(this, fH, !1))), Ym.set(this, ((0, JT.k)(this, qH), (0, JT.k)(this, iH, !1))), Jm.set(this, ((0, JT.k)(this, bH), (0, JT.k)(this, OH, !0))), xm.set(this, ((0, JT.k)(this, eH), (0, JT.k)(this, YH, !0))), dm.set(this, ((0, JT.k)(this, JH), (0, JT.k)(this, xH, !1))), wm.set(this, ((0, JT.k)(this, dH), (0, JT.k)(this, wH, !1))), this._lightingInfos = ((0, JT.k)(this, tH), new PT.t(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = MT.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new wT.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, tm.set(this, (0, JT.k)(this, aH, 0)), this.debugLimit = ((0, JT.k)(this, yH), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = MT.b.MATERIAL_OPAQUE, this.KF() && !this.KF()?.eB().isWebGPU && this.KF().eB().TZ < 2 && dT.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), TT._noiseTextures[this.KF().uniqueId] || (TT._noiseTextures[this.KF().uniqueId] = new tT.g(YU.j.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.KF(), !1, !0, 1), this.KF().SF.addOnce((() => {
              TT._noiseTextures[this.KF().uniqueId]?.dispose(), delete TT._noiseTextures[this.KF().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), DT.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), DT.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = sT(this.KF()), this._environmentFuzzBRDFTexture = QT(this.KF()), this.prePassConfiguration = new ST.d, this._propertyList = {};
            for (const TT of Object.getOwnPropertyNames(this)) {
              const UT = this[TT];
              UT instanceof GU && (this._propertyList[TT] = UT)
            }
            Object.keys(this._propertyList).forEach((TT => {
              const UT = this._propertyList[TT];
              let mT = this._uniformsList[UT.targetUniformName];
              mT ? mT.numComponents !== UT.targetUniformComponentNum ? dT.b.Error(`Uniform ${UT.targetUniformName} already exists of size ${mT.numComponents}, but trying to set it to ${UT.targetUniformComponentNum}.`) : mT.requiredDefine !== UT.requiredDefine && (mT.requiredDefine = void 0) : (mT = new SU(UT.targetUniformName, UT.targetUniformComponentNum), mT.requiredDefine = UT.requiredDefine, this._uniformsList[UT.targetUniformName] = mT), "" === mT.firstLinkedKey && (mT.firstLinkedKey = UT.name), mT.linkedProperties[UT.name] = UT
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const TT of Object.getOwnPropertyNames(this)) {
              const UT = this[TT];
              UT instanceof NU && (this._samplersList[TT] = UT)
            }
            for (const TT in this._samplersList) {
              const UT = this._samplersList[TT].textureDefine;
              this._samplerDefines[UT] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[UT + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[UT + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(DT.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(DT.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
            return this._hasAlphaChannel() && this._transparencyMode !== MT.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
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
          clone(UT) {
            let mT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const zT = eU.e.Clone((() => new TT(UT, this.KF())), this, {
              cloneTexturesOnlyOnce: mT
            });
            return zT.id = UT, zT.name = UT, this.stencil.copyTo(zT.stencil), this._clonePlugins(zT, WT), zT
          }
          serialize() {
            const TT = super.serialize();
            return TT.customType = "BABYLON.OpenPBRMaterial", TT
          }
          static Parse(UT, mT, WT) {
            const zT = eU.e.Parse((() => new TT(UT.name, mT)), UT, mT, WT);
            return UT.stencil && zT.stencil.parse(UT.stencil, mT, WT), MT.b._ParsePlugins(UT, zT, mT, WT), zT
          }
          forceCompilation(TT, UT, mT) {
            const WT = {
              clipPlane: !1,
              useInstances: !1,
              ...mT
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const mT = new DU({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                zT = this._prepareEffect(TT, TT, mT, void 0, void 0, WT.useInstances, WT.clipPlane);
              this._onEffectCreatedObservable && (rU.effect = zT, rU.subMesh = null, this._onEffectCreatedObservable.notifyObservers(rU)), zT.isReady() ? UT && UT(this) : zT.onCompileObservable.add((() => {
                UT && UT(this)
              }))
            })()
          }
          isReadyForSubMesh(UT, mT, WT) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const zT = mT._drawWrapper;
            if (zT.effect && this.isFrozen && zT._wasPreviouslyReady && zT._wasPreviouslyUsingInstances === WT) return !0;
            mT.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), mT.materialDefines = new DU({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const MT = mT.materialDefines;
            if (this._isReadyForSubMesh(mT)) return !0;
            const gT = this.KF(),
              nT = gT.eB();
            if (MT._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, gT.texturesEnabled)) {
              for (const TT in this._samplersList) {
                const UT = this._samplersList[TT];
                if (UT.value && !UT.value.isReadyOrNotBlocking()) return !1
              }
              const UT = this._getRadianceTexture();
              if (UT && DT.e.ReflectionTextureEnabled) {
                if (!UT.isReadyOrNotBlocking()) return !1;
                if (UT.irradianceTexture) {
                  if (!UT.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!UT.sphericalPolynomial && UT.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && DT.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && DT.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && DT.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (TT._noiseTextures[gT.uniqueId] && !TT._noiseTextures[gT.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = MT, this._eventInfo.subMesh = mT, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (MT._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (MT.AREALIGHTUSED)
              for (let TT = 0; TT < UT.lightSources.length; TT++)
                if (!UT.lightSources[TT]._isReady()) return !1;
            if (nT.getCaps().standardDerivatives || UT.isVerticesDataPresent(VT.i.NormalKind) || (UT.createNormals(!0), dT.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + UT.name)), !(0, AT.c)(gT, UT, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const HT = mT.effect,
              kT = MT._areLightsDisposed,
              jT = this._prepareEffect(UT, mT.getRenderingMesh(), MT, this.onCompiled, this.onError, WT, null);
            let lT = !1;
            if (jT)
              if (this._onEffectCreatedObservable && (rU.effect = jT, rU.subMesh = mT, this._onEffectCreatedObservable.notifyObservers(rU)), this.allowShaderHotSwapping && HT && !jT.isReady()) {
                if (MT.markAsUnprocessed(), lT = this.isFrozen, kT) return MT._areLightsDisposed = !0, !1
              } else gT.resetCachedMaterial(), mT.setEffect(jT, MT, this._materialContext);
            return !(!mT.effect || !mT.effect.isReady()) && (MT._renderId = gT.getRenderId(), zT._wasPreviouslyReady = !lT, zT._wasPreviouslyUsingInstances = !!WT, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const TT = this._uniformBuffer;
            TT.addUniform("vTangentSpaceParams", 2), TT.addUniform("vLightingIntensity", 4), TT.addUniform("pointSize", 1), TT.addUniform("vDebugMode", 2), TT.addUniform("renderTargetSize", 2), TT.addUniform("cameraInfo", 4), TT.addUniform("vTextureRepetitionHexTilingParams", 4), TT.addUniform("backgroundRefractionMatrix", 16), TT.addUniform("vBackgroundRefractionInfos", 3), (0, AT.kb)(TT, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((UT => {
              TT.addUniform(UT.name, UT.numComponents)
            })), Object.values(this._samplersList).forEach((UT => {
              TT.addUniform(UT.samplerInfoName, 2), TT.addUniform(UT.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(TT, UT, mT, WT) {
            if (0 === this.geometryThickness) TT.updateFloat("vGeometryThickness", 0);
            else {
              WT.getRenderingMesh().getWorldMatrix().decompose(PT.l.JB[0]);
              const UT = Math.max(Math.abs(PT.l.JB[0].x), Math.abs(PT.l.JB[0].y), Math.abs(PT.l.JB[0].z));
              TT.updateFloat("vGeometryThickness", this.geometryThickness * UT)
            }
          }
          bindForSubMesh(UT, mT, WT) {
            const zT = this.KF(),
              MT = WT.materialDefines;
            if (!MT) return;
            const gT = WT.effect;
            if (!gT) return;
            this._activeEffect = gT, mT.getMeshUniformBuffer().bindToEffect(gT, "Mesh"), mT.transferToEffect(UT);
            const nT = zT.eB();
            this._uniformBuffer.bindToEffect(gT, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, zT, mT, UT, this.isFrozen), pU.c.Bind(nT.currentRenderPassId, this._activeEffect, mT, UT, this);
            const HT = zT.activeCamera;
            HT ? this._uniformBuffer.updateFloat4("cameraInfo", HT.minZ, HT.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const kT = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", kT[0], kT[1], kT[2], kT[3]), this._eventInfo.subMesh = WT, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), MT.OBJECTSPACE_NORMALMAP && (UT.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const jT = this._mustRebind(zT, gT, WT, mT.visibility),
              lT = nT._features.needToAlwaysBindUniformBuffers;
            (0, AT.d)(mT, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, lU.c)(this._activeEffect, this._vertexPullingMetadata);
            const LT = this._uniformBuffer;
            if (jT) {
              this.bindViewProjection(gT);
              const UT = this._getRadianceTexture();
              if (!LT.useUbo || !this.isFrozen || !LT.isSync || WT._drawWrapper._forceRebindOnNextCall) {
                if (zT.texturesEnabled) {
                  for (const TT in this._samplersList) {
                    const UT = this._samplersList[TT];
                    UT.value && (LT.updateFloat2(UT.samplerInfoName, UT.value.coordinatesIndex, UT.value.level), (0, AT.x)(UT.value, LT, UT.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (zT._mirroredCameraPosition ? LT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : LT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, AT.i)(zT, MT, LT, GT.d.White(), UT, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && LT.updateFloat("pointSize", this.pointSize);
                const TT = this._uniformsArray;
                for (let UT = 0, mT = TT.length; UT < mT; UT++) {
                  const mT = TT[UT];
                  (void 0 === mT.requiredDefine || MT[mT.requiredDefine]) && (4 === mT.numComponents ? (mT.populateVectorFromLinkedProperties(PT.l.Vector4[0]), LT.updateVector4(mT.name, PT.l.Vector4[0])) : 3 === mT.numComponents ? (mT.populateVectorFromLinkedProperties(PT.l.JB[0]), LT.updateVector3(mT.name, PT.l.JB[0])) : 2 === mT.numComponents ? (mT.populateVectorFromLinkedProperties(PT.l.Vector2[0]), LT.updateFloat2(mT.name, PT.l.Vector2[0].x, PT.l.Vector2[0].y)) : 1 === mT.numComponents && LT.updateFloat(mT.name, mT.linkedProperties[mT.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * zT.environmentIntensity, this._lightingInfos.w = 1, LT.updateVector4("vLightingIntensity", this._lightingInfos), LT.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (zT.texturesEnabled) {
                for (const TT in this._samplersList) {
                  const UT = this._samplersList[TT];
                  UT.value && LT.setTexture(UT.samplerName, UT.value)
                }
                if ((0, AT.j)(zT, MT, LT, UT, this.realTimeFiltering), MT.ENVIRONMENTBRDF && LT.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), MT.FUZZENVIRONMENTBRDF && LT.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), MT.REFRACTED_BACKGROUND && (LT.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), LT.R7("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), PT.l.JB[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), LT.updateVector3("vBackgroundRefractionInfos", PT.l.JB[1])), (MT.ANISOTROPIC || MT.FUZZ || MT.REFRACTED_BACKGROUND || MT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && LT.setTexture("blueNoiseSampler", TT._noiseTextures[this.KF().uniqueId]), MT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const TT = this.sssIrradianceTexture.getSize().width,
                    UT = this.sssIrradianceTexture.getSize().height;
                  LT.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), LT.setTexture("sceneDepthSampler", this.sssDepthTexture), LT.updateFloat2("renderTargetSize", TT, UT)
                }
              }
              this.KF().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(mT) && this.KF().depthPeelingRenderer.bind(gT), this._eventInfo.subMesh = WT, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, jU.c)(this._activeEffect, this, zT), this.bindEyePosition(gT)
            } else lT && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, zT, zT.eB(), WT), !jT && this.isFrozen && !lT || !zT.lightsEnabled || this._disableLighting || (0, AT.l)(zT, mT, this._activeEffect, MT, this._maxSimultaneousLights), !jT && this.isFrozen || (this.bindView(gT), (0, AT.f)(zT, mT, this._activeEffect, !0), MT.NUM_MORPH_INFLUENCERS && (0, AT.s)(mT, this._activeEffect), MT.BAKED_VERTEX_ANIMATION_TEXTURE && mT.bakedVertexAnimationManager?.bind(gT, MT.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, AT.p)(MT, this._activeEffect, zT)), this._afterBind(mT, this._activeEffect, WT), LT.update()
          }
          getAnimatables() {
            const TT = super.getAnimatables();
            for (const UT in this._samplersList) {
              const mT = this._samplersList[UT];
              mT.value && mT.value.animations && mT.value.animations.length > 0 && TT.push(mT.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && TT.push(this._radianceTexture), TT
          }
          getActiveTextures() {
            const TT = super.getActiveTextures();
            for (const UT in this._samplersList) {
              const mT = this._samplersList[UT];
              mT.value && TT.push(mT.value)
            }
            return this._radianceTexture && TT.push(this._radianceTexture), TT
          }
          hasTexture(TT) {
            if (super.hasTexture(TT)) return !0;
            for (const UT in this._samplersList) {
              if (this._samplersList[UT].value === TT) return !0
            }
            return this._radianceTexture === TT
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(TT, UT) {
            if (this._breakShaderLoadedCheck = !0, UT) {
              this._environmentBRDFTexture && this.KF().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.KF().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const TT in this._samplersList) {
                const UT = this._samplersList[TT];
                UT.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(TT, UT)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.KF().environmentTexture
          }
          _prepareEffect(UT, mT, WT) {
            let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              gT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              nT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(UT, mT, WT, gT, nT), !WT.isDirty) return null;
            WT.markAsProcessed();
            const HT = this.KF().eB(),
              kT = new oT.c;
            let jT = 0;
            WT.USESPHERICALINVERTEX && kT.addFallback(jT++, "USESPHERICALINVERTEX"), WT.FOG && kT.addFallback(jT, "FOG"), WT.SPECULARAA && kT.addFallback(jT, "SPECULARAA"), WT.POINTSIZE && kT.addFallback(jT, "POINTSIZE"), WT.LOGARITHMICDEPTH && kT.addFallback(jT, "LOGARITHMICDEPTH"), WT.PARALLAX && kT.addFallback(jT, "PARALLAX"), WT.PARALLAX_RHS && kT.addFallback(jT, "PARALLAX_RHS"), WT.PARALLAXOCCLUSION && kT.addFallback(jT++, "PARALLAXOCCLUSION"), WT.ENVIRONMENTBRDF && kT.addFallback(jT++, "ENVIRONMENTBRDF"), WT.TANGENT && kT.addFallback(jT++, "TANGENT"), jT = (0, AT.y)(WT, kT, this._maxSimultaneousLights, jT), WT.SPECULARTERM && kT.addFallback(jT++, "SPECULARTERM"), WT.USESPHERICALFROMREFLECTIONMAP && kT.addFallback(jT++, "USESPHERICALFROMREFLECTIONMAP"), WT.USEIRRADIANCEMAP && kT.addFallback(jT++, "USEIRRADIANCEMAP"), WT.NORMAL && kT.addFallback(jT++, "NORMAL"), WT.VERTEXCOLOR && kT.addFallback(jT++, "VERTEXCOLOR"), WT.MORPHTARGETS && kT.addFallback(jT++, "MORPHTARGETS"), WT.MULTIVIEW && kT.addFallback(0, "MULTIVIEW");
            const lT = [VT.i.PositionKind];
            WT.NORMAL && lT.push(VT.i.NormalKind), WT.TANGENT && lT.push(VT.i.TangentKind);
            for (let TT = 1; TT <= 6; ++TT) WT["UV" + TT] && lT.push(`uv${1===TT?"":TT}`);
            WT.VERTEXCOLOR && lT.push(VT.i.ColorKind), (0, AT.E)(lT, UT, WT, kT), (0, AT.G)(lT, WT), (0, AT.J)(lT, UT, WT), (0, AT.C)(lT, UT, WT);
            let LT = "openpbr";
            const pT = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const TT in this._uniformsList) pT.push(TT);
            const BT = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            WT.FUZZENVIRONMENTBRDF && BT.push("environmentFuzzBrdfSampler"), WT.REFRACTED_BACKGROUND && BT.push("backgroundRefractionSampler"), (WT.ANISOTROPIC || WT.FUZZ || WT.REFRACTED_BACKGROUND || WT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && BT.push("blueNoiseSampler"), WT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (BT.push("sceneIrradianceSampler"), BT.push("sceneDepthSampler"));
            for (const TT in this._samplersList) {
              const UT = this._samplersList[TT];
              BT.push(UT.samplerName), pT.push(UT.samplerInfoName), pT.push(UT.samplerMatrixName)
            }(0, AT.ob)(pT, BT, !0);
            const ZT = ["Material", "Scene", "Mesh"],
              cT = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: WT.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = kT, this._eventInfo.fallbackRank = jT, this._eventInfo.defines = WT, this._eventInfo.uniforms = pT, this._eventInfo.attributes = lT, this._eventInfo.samplers = BT, this._eventInfo.uniformBuffersNames = ZT, this._eventInfo.customCode = void 0, this._eventInfo.mesh = UT, this._eventInfo.indexParameters = cT, this._callbackPluginEventGeneric(128, this._eventInfo), pU.c.AddUniformsAndSamplers(pT, BT), ST.d.AddUniforms(pT), ST.d.AddSamplers(BT), (0, jU.b)(pT), this._useVertexPulling) {
              const TT = mT?.geometry;
              TT && (this._vertexPullingMetadata = (0, lU.f)(TT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, UT) => {
                pT.push(`vp_${UT}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            ET.b && (ET.b.PrepareUniforms(pT, WT), ET.b.PrepareSamplers(BT, WT)), (0, AT.rb)({
              uniformsNames: pT,
              uniformBuffersNames: ZT,
              samplers: BT,
              defines: WT,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const vT = {};
            this.customShaderNameResolve && (LT = this.customShaderNameResolve(LT, pT, ZT, BT, WT, lT, vT));
            const fT = WT.toString(),
              qT = HT.createEffect(LT, {
                attributes: lT,
                uniformsNames: pT,
                uniformBuffersNames: ZT,
                samplers: BT,
                defines: fT,
                fallbacks: kT,
                onCompiled: zT,
                onError: MT,
                indexParameters: cT,
                processFinalCode: vT.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: WT.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: TT._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, HT);
            return this._eventInfo.customCode = void 0, qT
          }
          _prepareDefines(UT, mT, WT) {
            let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              gT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const nT = mT.hasThinInstances,
              HT = this.KF(),
              kT = HT.eB();
            (0, AT.W)(HT, UT, WT, !0, this._maxSimultaneousLights, this._disableLighting), WT._needNormals = !0, (0, AT.db)(HT, WT);
            const jT = this.needAlphaBlendingForMesh(UT) && this.KF().useOrderIndependentTransparency;
            if ((0, AT.ib)(HT, WT, this.canRenderToMRT && !jT), (0, AT.gb)(HT, WT, jT), pU.c.PrepareDefines(kT.currentRenderPassId, UT, WT), WT._areTexturesDirty) {
              WT._needUVs = !1;
              for (let TT = 1; TT <= 6; ++TT) WT["MAINUV" + TT] = !1;
              if (HT.texturesEnabled) {
                for (const mT in this._samplersList) {
                  const TT = this._samplersList[mT];
                  TT.value ? ((0, AT.X)(TT.value, WT, TT.textureDefine), WT[TT.textureDefine + "_GAMMA"] = TT.value.gammaSpace) : WT[TT.textureDefine] = !1
                }
                const TT = this._getRadianceTexture(),
                  UT = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || kT.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, AT.S)(HT, TT, WT, this.realTimeFiltering, this.realTimeFilteringQuality, !UT), this._baseMetalnessTexture && (WT.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), WT.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, WT.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, WT.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, WT.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, WT.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, WT.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, WT.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, WT.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, WT.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, WT.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, WT.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && DT.e.DiffuseTextureEnabled ? (WT.PARALLAX = !0, WT.PARALLAX_RHS = HT.useRightHandedSystem, WT.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : WT.PARALLAX = !1, WT.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (WT.PARALLAX = !1, WT.PARALLAX_RHS = !1, WT.PARALLAXOCCLUSION = !1, WT.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && DT.e.ReflectionTextureEnabled ? (WT.ENVIRONMENTBRDF = !0, WT.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (WT.ENVIRONMENTBRDF = !1, WT.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? WT.FUZZENVIRONMENTBRDF = !0 : WT.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  WT.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && DT.e.RefractionTextureEnabled, WT.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, WT.REFRACTED_LIGHTS = !0;
                  const TT = this._getRadianceTexture();
                  TT ? (WT.REFRACTED_ENVIRONMENT = DT.e.RefractionTextureEnabled, WT.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.KF().useRightHandedSystem ? !TT.invertZ : TT.invertZ, WT.REFRACTED_ENVIRONMENT_LOCAL_CUBE = TT.isCube && TT.boundingBoxSize) : WT.REFRACTED_ENVIRONMENT = !1
                } else WT.REFRACTED_BACKGROUND = !1, WT.REFRACTED_LIGHTS = !1, WT.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? WT.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : WT.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === MT.b.LIGHTFALLOFF_STANDARD ? (WT.USEPHYSICALLIGHTFALLOFF = !1, WT.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === MT.b.LIGHTFALLOFF_GLTF ? (WT.USEPHYSICALLIGHTFALLOFF = !1, WT.USEGLTFLIGHTFALLOFF = !0) : (WT.USEPHYSICALLIGHTFALLOFF = !0, WT.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? WT.TWOSIDEDLIGHTING = !0 : WT.TWOSIDEDLIGHTING = !1, WT.MIRRORED = !!HT._mirroredCameraPosition, WT.SPECULARAA = kT.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(WT._areTexturesDirty || WT._areMiscDirty) && (WT.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, WT.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, WT.ALPHABLEND = this.needAlphaBlendingForMesh(UT)), WT._areTexturesDirty && (WT.TEXTURE_REPETITION_MODE = kT.version > 1 || kT.isWebGPU ? this.textureRepetitionMode : 0), WT._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(WT), WT.FORCENORMALFORWARD = this._forceNormalForward, WT.RADIANCEOCCLUSION = this._useRadianceOcclusion, WT.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && TT._noiseTextures[HT.uniqueId] && DT.e.ReflectionTextureEnabled ? (WT.ANISOTROPIC = !0, UT.isVerticesDataPresent(VT.i.TangentKind) || (WT._needUVs = !0, WT.MAINUV1 = !0), this._useGltfStyleAnisotropy && (WT.USE_GLTF_STYLE_ANISOTROPY = !0), WT.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, WT.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (WT.ANISOTROPIC = !1, WT.USE_GLTF_STYLE_ANISOTROPY = !1, WT.ANISOTROPIC_BASE = !1, WT.ANISOTROPIC_COAT = !1), WT.THIN_FILM = this.thinFilmWeight > 0, WT.IRIDESCENCE = this.thinFilmWeight > 0, WT.DISPERSION = this.transmissionDispersionScale > 0, WT.SCATTERING = this.hasScattering;
            if (WT.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, WT.TRANSMISSION_SLAB = this.transmissionWeight > 0, WT.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, WT.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !WT.PREPASS && (WT.SUBSURFACE_SLAB || WT.TRANSMISSION_SLAB_VOLUME)) {
              let TT = !1;
              if (!this.sssIrradianceTexture && HT.geometryBufferRenderer) {
                const UT = HT.geometryBufferRenderer.getTextureIndex(uU.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = HT.geometryBufferRenderer.getGBuffer().textures[UT], TT = !0
              }
              if (!this.sssDepthTexture && HT.geometryBufferRenderer) {
                const UT = HT.geometryBufferRenderer.getTextureIndex(uU.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = HT.geometryBufferRenderer.getGBuffer().textures[UT], TT = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (WT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, TT && (WT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            WT.FUZZ = this.fuzzWeight > 0 && DT.e.ReflectionTextureEnabled, WT.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, WT.FUZZ ? (UT.isVerticesDataPresent(VT.i.TangentKind) || (WT._needUVs = !0, WT.MAINUV1 = !0), this._environmentFuzzBRDFTexture = QT(this.KF()), WT.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, WT.FUZZENVIRONMENTBRDF = !1, WT.FUZZ_IBL_SAMPLES = 0), WT._areMiscDirty && ((0, AT.$)(UT, HT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(UT), WT, this._applyDecalMapAfterDetailMap, this._useVertexPulling, mT, this._isVertexOutputInvariant), WT.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !UT.isVerticesDataPresent(VT.i.NormalKind), WT.DEBUGMODE = this._debugMode), (0, AT.R)(HT, kT, this, WT, !!zT, gT, nT), this._eventInfo.defines = WT, this._eventInfo.mesh = UT, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, AT.O)(UT, WT, !0, !0, !0, this._transparencyMode !== MT.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, UT = new WeakMap, WT = new WeakMap, zT = new WeakMap, gT = new WeakMap, nT = new WeakMap, HT = new WeakMap, kT = new WeakMap, jT = new WeakMap, lT = new WeakMap, LT = new WeakMap, pT = new WeakMap, BT = new WeakMap, ZT = new WeakMap, cT = new WeakMap, vT = new WeakMap, fT = new WeakMap, qT = new WeakMap, iT = new WeakMap, bT = new WeakMap, OT = new WeakMap, eT = new WeakMap, YT = new WeakMap, aT = new WeakMap, yT = new WeakMap, XT = new WeakMap, IT = new WeakMap, FT = new WeakMap, uT = new WeakMap, CT = new WeakMap, rT = new WeakMap, KT = new WeakMap, NT = new WeakMap, hT = new WeakMap, RT = new WeakMap, TU = new WeakMap, UU = new WeakMap, mU = new WeakMap, WU = new WeakMap, zU = new WeakMap, MU = new WeakMap, gU = new WeakMap, nU = new WeakMap, HU = new WeakMap, kU = new WeakMap, BU = new WeakMap, ZU = new WeakMap, cU = new WeakMap, vU = new WeakMap, fU = new WeakMap, qU = new WeakMap, iU = new WeakMap, bU = new WeakMap, OU = new WeakMap, JU = new WeakMap, xU = new WeakMap, dU = new WeakMap, wU = new WeakMap, tU = new WeakMap, aU = new WeakMap, yU = new WeakMap, XU = new WeakMap, IU = new WeakMap, QU = new WeakMap, sU = new WeakMap, FU = new WeakMap, PU = new WeakMap, VU = new WeakMap, CU = new WeakMap, KU = new WeakMap, EU = new WeakMap, hU = new WeakMap, AU = new WeakMap, RU = new WeakMap, Tm = new WeakMap, Um = new WeakMap, mm = new WeakMap, Wm = new WeakMap, zm = new WeakMap, Mm = new WeakMap, gm = new WeakMap, nm = new WeakMap, Hm = new WeakMap, km = new WeakMap, jm = new WeakMap, lm = new WeakMap, Lm = new WeakMap, pm = new WeakMap, Bm = new WeakMap, Zm = new WeakMap, cm = new WeakMap, fm = new WeakMap, qm = new WeakMap, im = new WeakMap, bm = new WeakMap, Om = new WeakMap, em = new WeakMap, Ym = new WeakMap, Jm = new WeakMap, xm = new WeakMap, dm = new WeakMap, wm = new WeakMap, tm = new WeakMap, (() => {
          const UT = "function" === typeof Symbol && Symbol.metadata ? Object.create(yz[Symbol.metadata] ?? null) : void 0;
          am = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], ym = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Xm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Im = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Qm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], sm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Fm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Pm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Vm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], um = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Cm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], rm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Km = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Sm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Gm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Nm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Em = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], hm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Dm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], om = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Am = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Rm = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], TW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], UW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], mW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], WW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], zW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], MW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], gW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], nW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], HW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], kW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], jW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], lW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], LW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], pW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], BW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], ZW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], cW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], vW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], fW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], qW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], iW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], bW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], OW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], eW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], JW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], xW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], dW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], wW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], aW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], yW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], XW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], IW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], QW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], sW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], FW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], PW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], VW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], uW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], CW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], rW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], KW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], SW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], GW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], NW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], EW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], hW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], DW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], oW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], AW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], RW = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Tz = [(0, xT.d)("_markAllSubMeshesAsTexturesDirty")], Uz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], mz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Wz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], zz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], Mz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], gz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], nz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Hz = [(0, xT.L)()], kz = [(0, xT.L)()], jz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], lz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Lz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], pz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Bz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsLightsDirty")], Zz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], cz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsLightsDirty")], vz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], fz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], qz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], iz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], bz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Oz = [(0, xT.g)("_markAllSubMeshesAsTexturesDirty")], ez = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Yz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Jz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], xz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], dz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], wz = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], tz = [(0, xT.g)("_markAllSubMeshesAsMiscDirty")], az = [(0, xT.L)()], (0, JT.h)(TT, null, am, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseWeight" in TT,
              get: TT => TT.baseWeight,
              set: (TT, UT) => {
                TT.baseWeight = UT
              }
            },
            metadata: UT
          }, Iz, Qz), (0, JT.h)(TT, null, ym, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseWeightTexture" in TT,
              get: TT => TT.baseWeightTexture,
              set: (TT, UT) => {
                TT.baseWeightTexture = UT
              }
            },
            metadata: UT
          }, sz, Fz), (0, JT.h)(TT, null, Xm, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseColor" in TT,
              get: TT => TT.baseColor,
              set: (TT, UT) => {
                TT.baseColor = UT
              }
            },
            metadata: UT
          }, Pz, Vz), (0, JT.h)(TT, null, Im, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseColorTexture" in TT,
              get: TT => TT.baseColorTexture,
              set: (TT, UT) => {
                TT.baseColorTexture = UT
              }
            },
            metadata: UT
          }, uz, Cz), (0, JT.h)(TT, null, Qm, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseDiffuseRoughness" in TT,
              get: TT => TT.baseDiffuseRoughness,
              set: (TT, UT) => {
                TT.baseDiffuseRoughness = UT
              }
            },
            metadata: UT
          }, rz, Kz), (0, JT.h)(TT, null, sm, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseDiffuseRoughnessTexture" in TT,
              get: TT => TT.baseDiffuseRoughnessTexture,
              set: (TT, UT) => {
                TT.baseDiffuseRoughnessTexture = UT
              }
            },
            metadata: UT
          }, Sz, Gz), (0, JT.h)(TT, null, Fm, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseMetalness" in TT,
              get: TT => TT.baseMetalness,
              set: (TT, UT) => {
                TT.baseMetalness = UT
              }
            },
            metadata: UT
          }, Nz, Ez), (0, JT.h)(TT, null, Pm, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseMetalnessTexture" in TT,
              get: TT => TT.baseMetalnessTexture,
              set: (TT, UT) => {
                TT.baseMetalnessTexture = UT
              }
            },
            metadata: UT
          }, hz, Dz), (0, JT.h)(TT, null, Vm, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularWeight" in TT,
              get: TT => TT.specularWeight,
              set: (TT, UT) => {
                TT.specularWeight = UT
              }
            },
            metadata: UT
          }, oz, Az), (0, JT.h)(TT, null, um, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularWeightTexture" in TT,
              get: TT => TT.specularWeightTexture,
              set: (TT, UT) => {
                TT.specularWeightTexture = UT
              }
            },
            metadata: UT
          }, Rz, TM), (0, JT.h)(TT, null, Cm, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularColor" in TT,
              get: TT => TT.specularColor,
              set: (TT, UT) => {
                TT.specularColor = UT
              }
            },
            metadata: UT
          }, UM, mM), (0, JT.h)(TT, null, rm, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularColorTexture" in TT,
              get: TT => TT.specularColorTexture,
              set: (TT, UT) => {
                TT.specularColorTexture = UT
              }
            },
            metadata: UT
          }, WM, zM), (0, JT.h)(TT, null, Km, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularRoughness" in TT,
              get: TT => TT.specularRoughness,
              set: (TT, UT) => {
                TT.specularRoughness = UT
              }
            },
            metadata: UT
          }, MM, gM), (0, JT.h)(TT, null, Sm, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularRoughnessTexture" in TT,
              get: TT => TT.specularRoughnessTexture,
              set: (TT, UT) => {
                TT.specularRoughnessTexture = UT
              }
            },
            metadata: UT
          }, nM, HM), (0, JT.h)(TT, null, Gm, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularRoughnessAnisotropy" in TT,
              get: TT => TT.specularRoughnessAnisotropy,
              set: (TT, UT) => {
                TT.specularRoughnessAnisotropy = UT
              }
            },
            metadata: UT
          }, kM, jM), (0, JT.h)(TT, null, Nm, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularRoughnessAnisotropyTexture" in TT,
              get: TT => TT.specularRoughnessAnisotropyTexture,
              set: (TT, UT) => {
                TT.specularRoughnessAnisotropyTexture = UT
              }
            },
            metadata: UT
          }, lM, LM), (0, JT.h)(TT, null, Em, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularIor" in TT,
              get: TT => TT.specularIor,
              set: (TT, UT) => {
                TT.specularIor = UT
              }
            },
            metadata: UT
          }, pM, BM), (0, JT.h)(TT, null, hm, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionWeight" in TT,
              get: TT => TT.transmissionWeight,
              set: (TT, UT) => {
                TT.transmissionWeight = UT
              }
            },
            metadata: UT
          }, ZM, cM), (0, JT.h)(TT, null, Dm, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionWeightTexture" in TT,
              get: TT => TT.transmissionWeightTexture,
              set: (TT, UT) => {
                TT.transmissionWeightTexture = UT
              }
            },
            metadata: UT
          }, vM, fM), (0, JT.h)(TT, null, om, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionColor" in TT,
              get: TT => TT.transmissionColor,
              set: (TT, UT) => {
                TT.transmissionColor = UT
              }
            },
            metadata: UT
          }, qM, iM), (0, JT.h)(TT, null, Am, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionColorTexture" in TT,
              get: TT => TT.transmissionColorTexture,
              set: (TT, UT) => {
                TT.transmissionColorTexture = UT
              }
            },
            metadata: UT
          }, bM, OM), (0, JT.h)(TT, null, Rm, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDepth" in TT,
              get: TT => TT.transmissionDepth,
              set: (TT, UT) => {
                TT.transmissionDepth = UT
              }
            },
            metadata: UT
          }, eM, YM), (0, JT.h)(TT, null, TW, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDepthTexture" in TT,
              get: TT => TT.transmissionDepthTexture,
              set: (TT, UT) => {
                TT.transmissionDepthTexture = UT
              }
            },
            metadata: UT
          }, JM, xM), (0, JT.h)(TT, null, UW, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionScatter" in TT,
              get: TT => TT.transmissionScatter,
              set: (TT, UT) => {
                TT.transmissionScatter = UT
              }
            },
            metadata: UT
          }, dM, wM), (0, JT.h)(TT, null, mW, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionScatterTexture" in TT,
              get: TT => TT.transmissionScatterTexture,
              set: (TT, UT) => {
                TT.transmissionScatterTexture = UT
              }
            },
            metadata: UT
          }, tM, aM), (0, JT.h)(TT, null, WW, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionScatterAnisotropy" in TT,
              get: TT => TT.transmissionScatterAnisotropy,
              set: (TT, UT) => {
                TT.transmissionScatterAnisotropy = UT
              }
            },
            metadata: UT
          }, yM, XM), (0, JT.h)(TT, null, zW, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDispersionScale" in TT,
              get: TT => TT.transmissionDispersionScale,
              set: (TT, UT) => {
                TT.transmissionDispersionScale = UT
              }
            },
            metadata: UT
          }, IM, QM), (0, JT.h)(TT, null, MW, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDispersionScaleTexture" in TT,
              get: TT => TT.transmissionDispersionScaleTexture,
              set: (TT, UT) => {
                TT.transmissionDispersionScaleTexture = UT
              }
            },
            metadata: UT
          }, sM, FM), (0, JT.h)(TT, null, gW, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDispersionAbbeNumber" in TT,
              get: TT => TT.transmissionDispersionAbbeNumber,
              set: (TT, UT) => {
                TT.transmissionDispersionAbbeNumber = UT
              }
            },
            metadata: UT
          }, PM, VM), (0, JT.h)(TT, null, nW, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceWeight" in TT,
              get: TT => TT.subsurfaceWeight,
              set: (TT, UT) => {
                TT.subsurfaceWeight = UT
              }
            },
            metadata: UT
          }, uM, CM), (0, JT.h)(TT, null, HW, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceWeightTexture" in TT,
              get: TT => TT.subsurfaceWeightTexture,
              set: (TT, UT) => {
                TT.subsurfaceWeightTexture = UT
              }
            },
            metadata: UT
          }, rM, KM), (0, JT.h)(TT, null, kW, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceColor" in TT,
              get: TT => TT.subsurfaceColor,
              set: (TT, UT) => {
                TT.subsurfaceColor = UT
              }
            },
            metadata: UT
          }, SM, GM), (0, JT.h)(TT, null, jW, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceColorTexture" in TT,
              get: TT => TT.subsurfaceColorTexture,
              set: (TT, UT) => {
                TT.subsurfaceColorTexture = UT
              }
            },
            metadata: UT
          }, NM, EM), (0, JT.h)(TT, null, lW, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceRadius" in TT,
              get: TT => TT.subsurfaceRadius,
              set: (TT, UT) => {
                TT.subsurfaceRadius = UT
              }
            },
            metadata: UT
          }, hM, DM), (0, JT.h)(TT, null, LW, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceRadiusScale" in TT,
              get: TT => TT.subsurfaceRadiusScale,
              set: (TT, UT) => {
                TT.subsurfaceRadiusScale = UT
              }
            },
            metadata: UT
          }, oM, AM), (0, JT.h)(TT, null, pW, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceRadiusScaleTexture" in TT,
              get: TT => TT.subsurfaceRadiusScaleTexture,
              set: (TT, UT) => {
                TT.subsurfaceRadiusScaleTexture = UT
              }
            },
            metadata: UT
          }, RM, Tg), (0, JT.h)(TT, null, BW, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceScatterAnisotropy" in TT,
              get: TT => TT.subsurfaceScatterAnisotropy,
              set: (TT, UT) => {
                TT.subsurfaceScatterAnisotropy = UT
              }
            },
            metadata: UT
          }, Ug, mg), (0, JT.h)(TT, null, ZW, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatWeight" in TT,
              get: TT => TT.coatWeight,
              set: (TT, UT) => {
                TT.coatWeight = UT
              }
            },
            metadata: UT
          }, Wg, zg), (0, JT.h)(TT, null, cW, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatWeightTexture" in TT,
              get: TT => TT.coatWeightTexture,
              set: (TT, UT) => {
                TT.coatWeightTexture = UT
              }
            },
            metadata: UT
          }, Mg, gg), (0, JT.h)(TT, null, vW, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatColor" in TT,
              get: TT => TT.coatColor,
              set: (TT, UT) => {
                TT.coatColor = UT
              }
            },
            metadata: UT
          }, ng, Hg), (0, JT.h)(TT, null, fW, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatColorTexture" in TT,
              get: TT => TT.coatColorTexture,
              set: (TT, UT) => {
                TT.coatColorTexture = UT
              }
            },
            metadata: UT
          }, kg, jg), (0, JT.h)(TT, null, qW, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatRoughness" in TT,
              get: TT => TT.coatRoughness,
              set: (TT, UT) => {
                TT.coatRoughness = UT
              }
            },
            metadata: UT
          }, lg, Lg), (0, JT.h)(TT, null, iW, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatRoughnessTexture" in TT,
              get: TT => TT.coatRoughnessTexture,
              set: (TT, UT) => {
                TT.coatRoughnessTexture = UT
              }
            },
            metadata: UT
          }, pg, Bg), (0, JT.h)(TT, null, bW, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatRoughnessAnisotropy" in TT,
              get: TT => TT.coatRoughnessAnisotropy,
              set: (TT, UT) => {
                TT.coatRoughnessAnisotropy = UT
              }
            },
            metadata: UT
          }, Zg, cg), (0, JT.h)(TT, null, OW, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatRoughnessAnisotropyTexture" in TT,
              get: TT => TT.coatRoughnessAnisotropyTexture,
              set: (TT, UT) => {
                TT.coatRoughnessAnisotropyTexture = UT
              }
            },
            metadata: UT
          }, vg, fg), (0, JT.h)(TT, null, eW, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatIor" in TT,
              get: TT => TT.coatIor,
              set: (TT, UT) => {
                TT.coatIor = UT
              }
            },
            metadata: UT
          }, qg, ig), (0, JT.h)(TT, null, YW, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatDarkening" in TT,
              get: TT => TT.coatDarkening,
              set: (TT, UT) => {
                TT.coatDarkening = UT
              }
            },
            metadata: UT
          }, bg, Og), (0, JT.h)(TT, null, JW, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatDarkeningTexture" in TT,
              get: TT => TT.coatDarkeningTexture,
              set: (TT, UT) => {
                TT.coatDarkeningTexture = UT
              }
            },
            metadata: UT
          }, eg, Yg), (0, JT.h)(TT, null, xW, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzWeight" in TT,
              get: TT => TT.fuzzWeight,
              set: (TT, UT) => {
                TT.fuzzWeight = UT
              }
            },
            metadata: UT
          }, Jg, xg), (0, JT.h)(TT, null, dW, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzWeightTexture" in TT,
              get: TT => TT.fuzzWeightTexture,
              set: (TT, UT) => {
                TT.fuzzWeightTexture = UT
              }
            },
            metadata: UT
          }, dg, wg), (0, JT.h)(TT, null, wW, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzColor" in TT,
              get: TT => TT.fuzzColor,
              set: (TT, UT) => {
                TT.fuzzColor = UT
              }
            },
            metadata: UT
          }, tg, ag), (0, JT.h)(TT, null, tW, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzColorTexture" in TT,
              get: TT => TT.fuzzColorTexture,
              set: (TT, UT) => {
                TT.fuzzColorTexture = UT
              }
            },
            metadata: UT
          }, yg, Xg), (0, JT.h)(TT, null, aW, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzRoughness" in TT,
              get: TT => TT.fuzzRoughness,
              set: (TT, UT) => {
                TT.fuzzRoughness = UT
              }
            },
            metadata: UT
          }, Ig, Qg), (0, JT.h)(TT, null, yW, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzRoughnessTexture" in TT,
              get: TT => TT.fuzzRoughnessTexture,
              set: (TT, UT) => {
                TT.fuzzRoughnessTexture = UT
              }
            },
            metadata: UT
          }, sg, Fg), (0, JT.h)(TT, null, XW, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryThinWalled" in TT,
              get: TT => TT.geometryThinWalled,
              set: (TT, UT) => {
                TT.geometryThinWalled = UT
              }
            },
            metadata: UT
          }, Pg, Vg), (0, JT.h)(TT, null, IW, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryNormalTexture" in TT,
              get: TT => TT.geometryNormalTexture,
              set: (TT, UT) => {
                TT.geometryNormalTexture = UT
              }
            },
            metadata: UT
          }, ug, Cg), (0, JT.h)(TT, null, QW, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryTangent" in TT,
              get: TT => TT.geometryTangent,
              set: (TT, UT) => {
                TT.geometryTangent = UT
              }
            },
            metadata: UT
          }, rg, Kg), (0, JT.h)(TT, null, sW, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryTangentTexture" in TT,
              get: TT => TT.geometryTangentTexture,
              set: (TT, UT) => {
                TT.geometryTangentTexture = UT
              }
            },
            metadata: UT
          }, Sg, Gg), (0, JT.h)(TT, null, FW, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryCoatNormalTexture" in TT,
              get: TT => TT.geometryCoatNormalTexture,
              set: (TT, UT) => {
                TT.geometryCoatNormalTexture = UT
              }
            },
            metadata: UT
          }, Ng, Eg), (0, JT.h)(TT, null, PW, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryCoatTangent" in TT,
              get: TT => TT.geometryCoatTangent,
              set: (TT, UT) => {
                TT.geometryCoatTangent = UT
              }
            },
            metadata: UT
          }, hg, Dg), (0, JT.h)(TT, null, VW, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryCoatTangentTexture" in TT,
              get: TT => TT.geometryCoatTangentTexture,
              set: (TT, UT) => {
                TT.geometryCoatTangentTexture = UT
              }
            },
            metadata: UT
          }, og, Ag), (0, JT.h)(TT, null, uW, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryOpacity" in TT,
              get: TT => TT.geometryOpacity,
              set: (TT, UT) => {
                TT.geometryOpacity = UT
              }
            },
            metadata: UT
          }, Rg, Tn), (0, JT.h)(TT, null, CW, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryOpacityTexture" in TT,
              get: TT => TT.geometryOpacityTexture,
              set: (TT, UT) => {
                TT.geometryOpacityTexture = UT
              }
            },
            metadata: UT
          }, Un, mn), (0, JT.h)(TT, null, rW, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryThickness" in TT,
              get: TT => TT.geometryThickness,
              set: (TT, UT) => {
                TT.geometryThickness = UT
              }
            },
            metadata: UT
          }, Wn, zn), (0, JT.h)(TT, null, KW, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryThicknessTexture" in TT,
              get: TT => TT.geometryThicknessTexture,
              set: (TT, UT) => {
                TT.geometryThicknessTexture = UT
              }
            },
            metadata: UT
          }, Mn, gn), (0, JT.h)(TT, null, SW, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissionLuminance" in TT,
              get: TT => TT.emissionLuminance,
              set: (TT, UT) => {
                TT.emissionLuminance = UT
              }
            },
            metadata: UT
          }, nn, Hn), (0, JT.h)(TT, null, GW, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissionColor" in TT,
              get: TT => TT.emissionColor,
              set: (TT, UT) => {
                TT.emissionColor = UT
              }
            },
            metadata: UT
          }, kn, jn), (0, JT.h)(TT, null, NW, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissionColorTexture" in TT,
              get: TT => TT.emissionColorTexture,
              set: (TT, UT) => {
                TT.emissionColorTexture = UT
              }
            },
            metadata: UT
          }, Ln, pn), (0, JT.h)(TT, null, EW, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmWeight" in TT,
              get: TT => TT.thinFilmWeight,
              set: (TT, UT) => {
                TT.thinFilmWeight = UT
              }
            },
            metadata: UT
          }, Bn, Zn), (0, JT.h)(TT, null, hW, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmWeightTexture" in TT,
              get: TT => TT.thinFilmWeightTexture,
              set: (TT, UT) => {
                TT.thinFilmWeightTexture = UT
              }
            },
            metadata: UT
          }, cn, vn), (0, JT.h)(TT, null, DW, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmThickness" in TT,
              get: TT => TT.thinFilmThickness,
              set: (TT, UT) => {
                TT.thinFilmThickness = UT
              }
            },
            metadata: UT
          }, fn, qn), (0, JT.h)(TT, null, oW, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmThicknessMin" in TT,
              get: TT => TT.thinFilmThicknessMin,
              set: (TT, UT) => {
                TT.thinFilmThicknessMin = UT
              }
            },
            metadata: UT
          }, bn, On), (0, JT.h)(TT, null, AW, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmThicknessTexture" in TT,
              get: TT => TT.thinFilmThicknessTexture,
              set: (TT, UT) => {
                TT.thinFilmThicknessTexture = UT
              }
            },
            metadata: UT
          }, en, Yn), (0, JT.h)(TT, null, RW, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmIor" in TT,
              get: TT => TT.thinFilmIor,
              set: (TT, UT) => {
                TT.thinFilmIor = UT
              }
            },
            metadata: UT
          }, Jn, xn), (0, JT.h)(TT, null, Tz, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "ambientOcclusionTexture" in TT,
              get: TT => TT.ambientOcclusionTexture,
              set: (TT, UT) => {
                TT.ambientOcclusionTexture = UT
              }
            },
            metadata: UT
          }, dn, wn), (0, JT.h)(TT, null, Uz, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: TT => "directIntensity" in TT,
              get: TT => TT.directIntensity,
              set: (TT, UT) => {
                TT.directIntensity = UT
              }
            },
            metadata: UT
          }, tn, an), (0, JT.h)(TT, null, mz, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: TT => "environmentIntensity" in TT,
              get: TT => TT.environmentIntensity,
              set: (TT, UT) => {
                TT.environmentIntensity = UT
              }
            },
            metadata: UT
          }, yn, Xn), (0, JT.h)(TT, null, Wz, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "useSpecularWeightFromTextureAlpha" in TT,
              get: TT => TT.useSpecularWeightFromTextureAlpha,
              set: (TT, UT) => {
                TT.useSpecularWeightFromTextureAlpha = UT
              }
            },
            metadata: UT
          }, In, Qn), (0, JT.h)(TT, null, zz, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceAlphaTest" in TT,
              get: TT => TT.forceAlphaTest,
              set: (TT, UT) => {
                TT.forceAlphaTest = UT
              }
            },
            metadata: UT
          }, sn, Fn), (0, JT.h)(TT, null, Mz, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: TT => "alphaCutOff" in TT,
              get: TT => TT.alphaCutOff,
              set: (TT, UT) => {
                TT.alphaCutOff = UT
              }
            },
            metadata: UT
          }, Pn, Vn), (0, JT.h)(TT, null, gz, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: TT => "useAmbientOcclusionFromMetallicTextureRed" in TT,
              get: TT => TT.useAmbientOcclusionFromMetallicTextureRed,
              set: (TT, UT) => {
                TT.useAmbientOcclusionFromMetallicTextureRed = UT
              }
            },
            metadata: UT
          }, un, Cn), (0, JT.h)(TT, null, nz, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "useAmbientInGrayScale" in TT,
              get: TT => TT.useAmbientInGrayScale,
              set: (TT, UT) => {
                TT.useAmbientInGrayScale = UT
              }
            },
            metadata: UT
          }, rn, Kn), (0, JT.h)(TT, null, Hz, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: TT => "usePhysicalLightFalloff" in TT,
              get: TT => TT.usePhysicalLightFalloff
            },
            metadata: UT
          }, null, Xz), (0, JT.h)(TT, null, kz, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: TT => "useGLTFLightFalloff" in TT,
              get: TT => TT.useGLTFLightFalloff
            },
            metadata: UT
          }, null, Xz), (0, JT.h)(TT, null, jz, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "useObjectSpaceNormalMap" in TT,
              get: TT => TT.useObjectSpaceNormalMap,
              set: (TT, UT) => {
                TT.useObjectSpaceNormalMap = UT
              }
            },
            metadata: UT
          }, Sn, Gn), (0, JT.h)(TT, null, lz, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: TT => "useParallax" in TT,
              get: TT => TT.useParallax,
              set: (TT, UT) => {
                TT.useParallax = UT
              }
            },
            metadata: UT
          }, Nn, En), (0, JT.h)(TT, null, Lz, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "useParallaxOcclusion" in TT,
              get: TT => TT.useParallaxOcclusion,
              set: (TT, UT) => {
                TT.useParallaxOcclusion = UT
              }
            },
            metadata: UT
          }, hn, Dn), (0, JT.h)(TT, null, pz, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: TT => "parallaxScaleBias" in TT,
              get: TT => TT.parallaxScaleBias,
              set: (TT, UT) => {
                TT.parallaxScaleBias = UT
              }
            },
            metadata: UT
          }, An, Rn), (0, JT.h)(TT, null, Bz, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "disableLighting" in TT,
              get: TT => TT.disableLighting,
              set: (TT, UT) => {
                TT.disableLighting = UT
              }
            },
            metadata: UT
          }, TH, UH), (0, JT.h)(TT, null, Zz, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceIrradianceInFragment" in TT,
              get: TT => TT.forceIrradianceInFragment,
              set: (TT, UT) => {
                TT.forceIrradianceInFragment = UT
              }
            },
            metadata: UT
          }, mH, WH), (0, JT.h)(TT, null, cz, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: TT => "maxSimultaneousLights" in TT,
              get: TT => TT.maxSimultaneousLights,
              set: (TT, UT) => {
                TT.maxSimultaneousLights = UT
              }
            },
            metadata: UT
          }, zH, MH), (0, JT.h)(TT, null, vz, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertNormalMapX" in TT,
              get: TT => TT.invertNormalMapX,
              set: (TT, UT) => {
                TT.invertNormalMapX = UT
              }
            },
            metadata: UT
          }, gH, nH), (0, JT.h)(TT, null, fz, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertNormalMapY" in TT,
              get: TT => TT.invertNormalMapY,
              set: (TT, UT) => {
                TT.invertNormalMapY = UT
              }
            },
            metadata: UT
          }, HH, kH), (0, JT.h)(TT, null, qz, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "twoSidedLighting" in TT,
              get: TT => TT.twoSidedLighting,
              set: (TT, UT) => {
                TT.twoSidedLighting = UT
              }
            },
            metadata: UT
          }, jH, lH), (0, JT.h)(TT, null, iz, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: TT => "useAlphaFresnel" in TT,
              get: TT => TT.useAlphaFresnel,
              set: (TT, UT) => {
                TT.useAlphaFresnel = UT
              }
            },
            metadata: UT
          }, LH, pH), (0, JT.h)(TT, null, bz, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: TT => "useLinearAlphaFresnel" in TT,
              get: TT => TT.useLinearAlphaFresnel,
              set: (TT, UT) => {
                TT.useLinearAlphaFresnel = UT
              }
            },
            metadata: UT
          }, BH, ZH), (0, JT.h)(TT, null, Oz, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "environmentBRDFTexture" in TT,
              get: TT => TT.environmentBRDFTexture,
              set: (TT, UT) => {
                TT.environmentBRDFTexture = UT
              }
            },
            metadata: UT
          }, cH, vH), (0, JT.h)(TT, null, ez, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceNormalForward" in TT,
              get: TT => TT.forceNormalForward,
              set: (TT, UT) => {
                TT.forceNormalForward = UT
              }
            },
            metadata: UT
          }, fH, qH), (0, JT.h)(TT, null, Yz, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: TT => "enableSpecularAntiAliasing" in TT,
              get: TT => TT.enableSpecularAntiAliasing,
              set: (TT, UT) => {
                TT.enableSpecularAntiAliasing = UT
              }
            },
            metadata: UT
          }, iH, bH), (0, JT.h)(TT, null, Jz, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "useHorizonOcclusion" in TT,
              get: TT => TT.useHorizonOcclusion,
              set: (TT, UT) => {
                TT.useHorizonOcclusion = UT
              }
            },
            metadata: UT
          }, OH, eH), (0, JT.h)(TT, null, xz, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "useRadianceOcclusion" in TT,
              get: TT => TT.useRadianceOcclusion,
              set: (TT, UT) => {
                TT.useRadianceOcclusion = UT
              }
            },
            metadata: UT
          }, YH, JH), (0, JT.h)(TT, null, dz, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: TT => "unlit" in TT,
              get: TT => TT.unlit,
              set: (TT, UT) => {
                TT.unlit = UT
              }
            },
            metadata: UT
          }, xH, dH), (0, JT.h)(TT, null, wz, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "applyDecalMapAfterDetailMap" in TT,
              get: TT => TT.applyDecalMapAfterDetailMap,
              set: (TT, UT) => {
                TT.applyDecalMapAfterDetailMap = UT
              }
            },
            metadata: UT
          }, wH, tH), (0, JT.h)(TT, null, tz, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "debugMode" in TT,
              get: TT => TT.debugMode,
              set: (TT, UT) => {
                TT.debugMode = UT
              }
            },
            metadata: UT
          }, aH, yH), (0, JT.h)(TT, null, az, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "transparencyMode" in TT,
              get: TT => TT.transparencyMode
            },
            metadata: UT
          }, null, Xz), UT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UT
          })
        })(), TT.SSS_QUALITY_LOW = 0, TT.SSS_QUALITY_MEDIUM = 1, TT.SSS_QUALITY_HIGH = 2, TT._noiseTextures = {}, TT.ForceGLSL = !1, TT._ShaderLoader = new LU.c((() => [Promise.all([mT.e(322), mT.e(385)]).then((() => mT(61621))), Promise.all([mT.e(327), mT.e(323), mT.e(384), mT.e(389)]).then((() => mT(61634)))]), (() => [Promise.all([mT.e(341), mT.e(343), mT.e(388)]).then((() => mT(61668))), Promise.all([mT.e(341), mT.e(344), mT.e(387), mT.e(390)]).then((() => mT(61676)))])), TT
      })(),
      RU = !1;
    RU || (RU = !0, (0, ET.d)(), (0, CU.h)("BABYLON.OpenPBRMaterial", AU));
    var Tm = mT(37219);
    class Um {
      constructor(TT) {
        this.name = IU.b.NAME_PROCEDURALTEXTURE, this.XZ = TT
      }
      register() {
        this.XZ._beforeClearStage.registerStep(IU.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.XZ.proceduralTexturesEnabled) {
          YU.j.StartPerformanceCounter("Procedural textures", this.XZ.proceduralTextures.length > 0);
          for (let TT = 0; TT < this.XZ.proceduralTextures.length; TT++) {
            const UT = this.XZ.proceduralTextures[TT];
            UT._shouldRender() && UT.render()
          }
          YU.j.EndPerformanceCounter("Procedural textures", this.XZ.proceduralTextures.length > 0)
        }
      }
    }
    var mm = mT(40449);
    let Wm = (() => {
      var TT;
      let UT, WT, zT, gT, nT, HT = tT.g,
        kT = [],
        jT = [],
        lT = [],
        LT = [],
        pT = [],
        BT = [],
        cT = [],
        vT = [],
        fT = [];
      return TT = class extends HT {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(TT, UT, mT, WT) {
          let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            MT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, WT, !MT), this.isEnabled = ((0, JT.k)(this, kT), (0, JT.k)(this, jT, !0)), this.autoClear = ((0, JT.k)(this, lT), (0, JT.k)(this, LT, !0)), this.onGenerated = (0, JT.k)(this, pT), this.onGeneratedObservable = new Tm.d, this.onBeforeGenerationObservable = new Tm.d, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, JT.k)(this, BT, void 0), this._drawWrapper = (0, JT.k)(this, cT), this._textures = {}, this._size = (0, JT.k)(this, vT, void 0), this._textureType = (0, JT.k)(this, fT), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === zT || zT instanceof tT.g ? (this._options = {}, this._fallbackTexture = zT) : (this._options = zT, this._fallbackTexture = zT.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let HT = (WT = this.KF() || ZT.c.LastCreatedScene)._getComponent(IU.b.NAME_PROCEDURALTEXTURE);
          HT || (HT = new Um(WT), WT.WWT(HT)), this._options.skipSceneRegistration || WT.proceduralTextures.push(this), this._fullEngine = WT.eB(), this.name = TT, this.isRenderTarget = !0, this._size = UT, this._textureType = nT, this._generateMipMaps = MT, this._drawWrapper = new mm.b(this._fullEngine), this.setFragment(mT);
          const qT = this._createRtWrapper(gT, UT, MT, nT);
          this._texture = qT.texture;
          const iT = [];
          iT.push(1, 1), iT.push(-1, 1), iT.push(-1, -1), iT.push(1, -1), this._vertexBuffers[VT.i.PositionKind] = new VT.i(this._fullEngine, iT, VT.i.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(TT, UT, mT, WT) {
          return TT ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(UT, {
            generateMipMaps: mT,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: WT,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(UT, {
            generateMipMaps: mT,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: WT,
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
            UT = [];
          UT.push(0), UT.push(1), UT.push(2), UT.push(0), UT.push(2), UT.push(3), this._indexBuffer = TT.createIndexBuffer(UT)
        }
        _rebuild() {
          const TT = this._vertexBuffers[VT.i.PositionKind];
          TT && TT._rebuild(), this._createIndexBuffer(), this.refreshRate === JU.d.REFRESHRATE_RENDER_ONCE && (this.refreshRate = JU.d.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(TT) {
          if (this.isReady()) return void TT(this);
          const UT = this.getEffect();
          UT && UT.executeWhenCompiled((() => {
            TT(this)
          }))
        }
        isReady() {
          const TT = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const UT = this._getDefines();
          if (this._drawWrapper.effect && UT === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const WT = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== UT && (this._cachedDefines = UT, this._drawWrapper.effect = TT.createEffect(WT, [VT.i.PositionKind], this._uniforms, this._samplers, UT, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([mT.e(393).then((() => mT(61741))), this._options.extraInitializationsAsync()]) : await Promise.all([mT.e(394).then((() => mT(61743))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await mT.e(393).then((() => mT(61741))) : await mT.e(394).then((() => mT(61743)))
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
        resize(TT, UT) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const mT = this._texture.isCube;
          this._rtWrapper.dispose();
          const WT = this._createRtWrapper(mT, TT, UT, this._textureType);
          this._texture = WT.texture, this._size = TT, this._generateMipMaps = UT
        }
        _checkUniform(TT) {
          -1 === this._uniforms.indexOf(TT) && this._uniforms.push(TT)
        }
        setTexture(TT, UT) {
          return -1 === this._samplers.indexOf(TT) && this._samplers.push(TT), this._textures[TT] = UT, this
        }
        setFloat(TT, UT) {
          return this._checkUniform(TT), this._floats[TT] = UT, this
        }
        setInt(TT, UT) {
          return this._checkUniform(TT), this._ints[TT] = UT, this
        }
        setFloats(TT, UT) {
          return this._checkUniform(TT), this._floatsArrays[TT] = UT, this
        }
        setColor3(TT, UT) {
          return this._checkUniform(TT), this._colors3[TT] = UT, this
        }
        setColor4(TT, UT) {
          return this._checkUniform(TT), this._colors4[TT] = UT, this
        }
        setVector2(TT, UT) {
          return this._checkUniform(TT), this._vectors2[TT] = UT, this
        }
        setVector3(TT, UT) {
          return this._checkUniform(TT), this._vectors3[TT] = UT, this
        }
        setVector4(TT, UT) {
          return this._checkUniform(TT), this._vectors4[TT] = UT, this
        }
        setMatrix(TT, UT) {
          return this._checkUniform(TT), this._matrices[TT] = UT, this
        }
        render(TT) {
          const UT = this.KF();
          if (!UT) return;
          const mT = this._fullEngine;
          if (mT.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), mT.setState(!1), !this.nodeMaterialSource) {
            for (const TT in this._textures) this._drawWrapper.effect.setTexture(TT, this._textures[TT]);
            for (const TT in this._ints) this._drawWrapper.effect.setInt(TT, this._ints[TT]);
            for (const TT in this._floats) this._drawWrapper.effect.setFloat(TT, this._floats[TT]);
            for (const TT in this._floatsArrays) this._drawWrapper.effect.setArray(TT, this._floatsArrays[TT]);
            for (const TT in this._colors3) this._drawWrapper.effect.setColor3(TT, this._colors3[TT]);
            for (const TT in this._colors4) {
              const UT = this._colors4[TT];
              this._drawWrapper.effect.setFloat4(TT, UT.r, UT.g, UT.b, UT.a)
            }
            for (const TT in this._vectors2) this._drawWrapper.effect.setVector2(TT, this._vectors2[TT]);
            for (const TT in this._vectors3) this._drawWrapper.effect.setVector3(TT, this._vectors3[TT]);
            for (const TT in this._vectors4) this._drawWrapper.effect.setVector4(TT, this._vectors4[TT]);
            for (const TT in this._matrices) this._drawWrapper.effect.setMatrix(TT, this._matrices[TT])
          }
          if (!this._texture || !this._rtWrapper) return;
          mT._enableGPUDebugMarkers && mT._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const WT = mT.currentViewport;
          if (this.isCube)
            for (let zT = 0; zT < 6; zT++) mT.bindFramebuffer(this._rtWrapper, zT, void 0, void 0, !0), mT.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", zT), this.autoClear && mT.clear(UT.clearColor, !0, !1, !1), mT.drawElementsType(MT.b.TriangleFillMode, 0, 6), mT.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let TT = 1;
            this._rtWrapper.is3D ? TT = this._rtWrapper.depth : this._rtWrapper.is2DArray && (TT = this._rtWrapper.layers);
            for (let WT = 0; WT < TT; WT++) {
              if (mT.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, WT), mT.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== TT ? WT / (TT - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", WT);
                for (const TT in this._textures) this._drawWrapper.effect.setTexture(TT, this._textures[TT])
              }
              this.autoClear && mT.clear(UT.clearColor, !0, !1, !1), mT.drawElementsType(MT.b.TriangleFillMode, 0, 6), mT.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          WT && mT.setViewport(WT), this.isCube && mT.generateMipMapsForCubemap(this._texture, !0), mT._enableGPUDebugMarkers && mT._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const UT = this.getSize(),
            mT = new TT(this.name, UT.width, this._fragment, this.KF(), this._fallbackTexture, this._generateMipMaps);
          return mT.hasAlpha = this.hasAlpha, mT.level = this.level, mT.coordinatesMode = this.coordinatesMode, mT
        }
        dispose() {
          const TT = this.KF();
          if (!TT) return;
          const UT = TT.proceduralTextures.indexOf(this);
          UT >= 0 && TT.proceduralTextures.splice(UT, 1);
          const mT = this._vertexBuffers[VT.i.PositionKind];
          mT && (mT.dispose(), this._vertexBuffers[VT.i.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const mT = "function" === typeof Symbol && Symbol.metadata ? Object.create(HT[Symbol.metadata] ?? null) : void 0;
        UT = [(0, xT.L)()], WT = [(0, xT.L)()], zT = [(0, xT.L)()], gT = [(0, xT.L)()], nT = [(0, xT.L)()], (0, JT.h)(TT, null, nT, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: TT => "refreshRate" in TT,
            get: TT => TT.refreshRate
          },
          metadata: mT
        }, null, kT), (0, JT.h)(null, null, UT, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, UT) => {
              TT.isEnabled = UT
            }
          },
          metadata: mT
        }, jT, lT), (0, JT.h)(null, null, WT, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: TT => "autoClear" in TT,
            get: TT => TT.autoClear,
            set: (TT, UT) => {
              TT.autoClear = UT
            }
          },
          metadata: mT
        }, LT, pT), (0, JT.h)(null, null, zT, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: TT => "_generateMipMaps" in TT,
            get: TT => TT._generateMipMaps,
            set: (TT, UT) => {
              TT._generateMipMaps = UT
            }
          },
          metadata: mT
        }, BT, cT), (0, JT.h)(null, null, gT, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: TT => "_size" in TT,
            get: TT => TT._size,
            set: (TT, UT) => {
              TT._size = UT
            }
          },
          metadata: mT
        }, vT, fT), mT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: mT
        })
      })(), TT
    })();

    function zm(TT) {
      return "texture" in TT
    }

    function Mm(TT) {
      return "value" in TT
    }
    async function gm(TT, UT, WT) {
      const zT = [UT.red, UT.green, UT.blue, UT.alpha],
        MT = [],
        gT = [];
      for (let mT = 0; mT < 4; mT++) {
        const TT = zT[mT];
        if (TT)
          if (zm(TT)) {
            if (TT.sourceChannel < 0 || TT.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let UT = MT.indexOf(TT.texture); - 1 === UT && (UT = MT.length, MT.push(TT.texture)), gT[mT] = UT
          } else {
            if (!Mm(TT)) throw new Error("Invalid channel input configuration");
            if (TT.value < 0 || TT.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            gT[mT] = -1
          }
        else gT[mT] = -1
      }
      let nT = UT.outputSize;
      if (!nT && MT.length > 0) {
        let TT = 0;
        for (const UT of MT) {
          const mT = UT.getSize(),
            WT = Math.max(mT.width, mT.height);
          WT > TT && (TT = WT, nT = mT.width === mT.height ? TT : mT)
        }
      }
      nT = nT || 512;
      const HT = [],
        kT = new Set;
      for (let mT = 0; mT < 4; mT++) {
        const TT = zT[mT],
          UT = ["RED", "GREEN", "BLUE", "ALPHA"][mT];
        if (TT && zm(TT)) {
          HT.push(`${UT}_FROM_TEXTURE`);
          const TT = gT[mT];
          kT.add(TT)
        }
      }
      kT.forEach((TT => {
        HT.push(`USE_TEXTURE${TT}`)
      }));
      const jT = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: WT.eB().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            WT.eB().isWebGPU ? await Promise.all([mT.e(391).then((() => mT(61731)))]) : await Promise.all([mT.e(392).then((() => mT(61734)))])
          },
          skipSceneRegistration: !0
        },
        lT = new Wm(TT, nT, "textureMerger", WT, jT);
      lT.refreshRate = -1, lT.defines = HT.length > 0 ? "#define " + HT.join("\n#define ") + "\n" : "";
      for (let mT = 0; mT < MT.length; mT++) LT = MT[mT], (pT = lT).uOffset = LT.uOffset, pT.vOffset = LT.vOffset, pT.uScale = LT.uScale, pT.vScale = LT.vScale, pT.uAng = LT.uAng, pT.vAng = LT.vAng, pT.wAng = LT.wAng, pT.uRotationCenter = LT.uRotationCenter, pT.vRotationCenter = LT.vRotationCenter, lT.setTexture(`inputTexture${mT}`, MT[mT]);
      var LT, pT;
      for (let mT = 0; mT < 4; mT++) {
        const TT = zT[mT],
          UT = ["red", "green", "blue", "alpha"][mT];
        if (TT && zm(TT)) {
          const WT = gT[mT];
          lT.setInt(`${UT}TextureIndex`, WT), lT.setInt(`${UT}SourceChannel`, TT.sourceChannel)
        } else {
          let WT;
          WT = TT && Mm(TT) ? TT.value : 3 === mT ? 1 : 0, lT.setFloat(`${UT}ConstantValue`, WT)
        }
      }
      return await new Promise(((TT, UT) => {
        lT.executeWhenReady((() => {
          try {
            lT.render(), TT(lT)
          } catch (mT) {
            UT(mT instanceof Error ? mT : new Error(String(mT)))
          }
        }))
      }))
    }

    function nm(TT, UT) {
      return {
        texture: TT,
        sourceChannel: UT
      }
    }

    function Hm(TT) {
      return {
        value: TT
      }
    }

    function km(TT, UT, mT, WT) {
      return {
        red: TT,
        green: UT,
        blue: mT,
        alpha: WT
      }
    }
    var jm = mT(39911),
      lm = mT(40016),
      Lm = mT(37211),
      pm = mT(40073),
      Bm = mT(40001);
    class Zm {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class cm extends jm.e {
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
        return !!this._options?.enableMultiview || this.TZ > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Zm;
        super(null), void 0 === TT.deterministicLockstep && (TT.deterministicLockstep = !1), void 0 !== TT.timeStep && (this._timeStep = TT.timeStep), void 0 === TT.lockstepMaxSteps && (TT.lockstepMaxSteps = 4), this._options = TT, Lm.c.SetMatrixPrecision(!!TT.useHighPrecisionMatrix), this._caps = {
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
        }, TT.renderingCanvas && (this._renderingCanvas = TT.renderingCanvas), dT.b.Log(`Babylon.js v${jm.e.Version} - Null engine`);
        const UT = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (UT.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (UT.Blob = function() {})
      }
      createVertexBuffer(TT) {
        const UT = new lm.e;
        return UT.references = 1, UT
      }
      createIndexBuffer(TT) {
        const UT = new lm.e;
        return UT.references = 1, UT
      }
      clear(TT, UT, mT) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(TT, UT, mT) {
        this._cachedViewport = TT
      }
      createUniformBuffer(TT) {
        const UT = new lm.e;
        return UT.references = 1, UT.fl = TT instanceof Array ? TT.length * Float32Array.BYTES_PER_ELEMENT : TT.byteLength, UT
      }
      createDynamicUniformBuffer(TT) {
        return this.createUniformBuffer(TT)
      }
      updateUniformBuffer(TT, UT, mT, WT) {}
      bindUniformBufferBase(TT, UT, mT) {}
      bindUniformBlock(TT, UT, mT) {}
      createShaderProgram(TT, UT, mT, WT, zT) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(TT, UT) {
        return []
      }
      getAttributes(TT, UT) {
        return []
      }
      bindSamplers(TT) {
        this._currentEffect = null
      }
      enableEffect(TT) {
        TT = null !== TT && (0, Bm.b)(TT) ? TT.effect : TT, this._currentEffect = TT, TT && (TT.onBind && TT.onBind(TT), TT._onBindObservable && TT._onBindObservable.notifyObservers(TT))
      }
      setStateCullFaceType(TT, UT) {}
      setState(TT) {}
      setIntArray(TT, UT) {
        return !0
      }
      setIntArray2(TT, UT) {
        return !0
      }
      setIntArray3(TT, UT) {
        return !0
      }
      setIntArray4(TT, UT) {
        return !0
      }
      setFloatArray(TT, UT) {
        return !0
      }
      setFloatArray2(TT, UT) {
        return !0
      }
      setFloatArray3(TT, UT) {
        return !0
      }
      setFloatArray4(TT, UT) {
        return !0
      }
      setArray(TT, UT) {
        return !0
      }
      setArray2(TT, UT) {
        return !0
      }
      setArray3(TT, UT) {
        return !0
      }
      setArray4(TT, UT) {
        return !0
      }
      setMatrices(TT, UT) {
        return !0
      }
      setMatrix3x3(TT, UT) {
        return !0
      }
      setMatrix2x2(TT, UT) {
        return !0
      }
      setFloat(TT, UT) {
        return !0
      }
      setFloat2(TT, UT, mT) {
        return !0
      }
      setFloat3(TT, UT, mT, WT) {
        return !0
      }
      setBool(TT, UT) {
        return !0
      }
      setFloat4(TT, UT, mT, WT, zT) {
        return !0
      }
      setAlphaMode(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[mT] !== TT && (this.alphaState.setAlphaBlend(0 !== TT, 0), UT || this.setDepthWrite(0 === TT), this._alphaMode[mT] = TT)
      }
      bindBuffers(TT, UT, mT) {}
      wipeCaches(TT) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, TT && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(TT, UT, mT, WT) {}
      drawElementsType(TT, UT, mT, WT) {}
      drawArraysType(TT, UT, mT, WT) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(TT) {}
      createTexture(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          gT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          nT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const HT = new xU.b(this, 1),
          kT = String(TT);
        return HT.url = kT, HT.generateMipMaps = !UT, HT.samplingMode = zT, HT.invertY = mT, HT.baseWidth = this._options.textureSize, HT.baseHeight = this._options.textureSize, HT.width = this._options.textureSize, HT.height = this._options.textureSize, nT && (HT.format = nT), gT && (HT._buffer = gT), HT.isReady = !0, MT && setTimeout((() => {
          MT(HT)
        })), this._internalTexturesCache.push(HT), HT
      }
      _createHardwareRenderTargetWrapper(TT, UT, mT) {
        const WT = new pm.b(TT, UT, mT, this);
        return this._renderTargetWrapperCache.push(WT), WT
      }
      createRenderTargetTexture(TT, UT) {
        const mT = this._createHardwareRenderTargetWrapper(!1, !1, TT),
          WT = {};
        void 0 !== UT && "object" === typeof UT ? (WT.generateMipMaps = UT.generateMipMaps, WT.generateDepthBuffer = void 0 === UT.generateDepthBuffer || UT.generateDepthBuffer, WT.generateStencilBuffer = WT.generateDepthBuffer && UT.generateStencilBuffer, WT.type = void 0 === UT.type ? 0 : UT.type, WT.samplingMode = void 0 === UT.samplingMode ? 3 : UT.samplingMode) : (WT.generateMipMaps = UT, WT.generateDepthBuffer = !0, WT.generateStencilBuffer = !1, WT.type = 0, WT.samplingMode = 3);
        const zT = new xU.b(this, 5);
        mT.setTexture(zT);
        const MT = TT.width || TT,
          gT = TT.height || TT;
        return mT._generateDepthBuffer = WT.generateDepthBuffer, mT._generateStencilBuffer = !!WT.generateStencilBuffer, zT.baseWidth = MT, zT.baseHeight = gT, zT.width = MT, zT.height = gT, zT.isReady = !0, zT.samples = 1, zT.generateMipMaps = !!WT.generateMipMaps, zT.samplingMode = WT.samplingMode, zT.type = WT.type, this._internalTexturesCache.push(zT), mT
      }
      createMultiviewRenderTargetTexture(TT, UT) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const mT = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: TT,
            height: UT
          }),
          WT = new xU.b(this, 5, !0);
        return WT.baseWidth = TT, WT.baseHeight = UT, WT.width = TT, WT.height = UT, WT.isMultiview = !0, WT.isReady = !0, WT.format = 5, WT.samples = 1, mT.setTextures(WT), mT
      }
      bindMultiviewFramebuffer(TT) {
        this.bindFramebuffer(TT, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(TT, UT) {
        const mT = this._createHardwareRenderTargetWrapper(!1, !0, TT),
          WT = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...UT
          };
        WT.generateStencilBuffer = WT.generateDepthBuffer && WT.generateStencilBuffer, (1 !== WT.type || this._caps.textureFloatLinearFiltering) && (2 !== WT.type || this._caps.textureHalfFloatLinearFiltering) || (WT.samplingMode = 1), mT._generateDepthBuffer = WT.generateDepthBuffer, mT._generateStencilBuffer = !!WT.generateStencilBuffer;
        const zT = new xU.b(this, 5);
        return zT.baseWidth = TT, zT.baseHeight = TT, zT.width = TT, zT.height = TT, zT.isReady = !0, zT.isCube = !0, zT.samples = 1, zT.generateMipMaps = !!WT.generateMipMaps, zT.samplingMode = WT.samplingMode, zT.type = WT.type, this._internalTexturesCache.push(zT), mT
      }
      updateTextureSamplingMode(TT, UT) {
        UT.samplingMode = TT
      }
      createRawTexture(TT, UT, mT, WT, zT, MT, gT) {
        let nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          HT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          kT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const jT = new xU.b(this, 3);
        return jT.baseWidth = UT, jT.baseHeight = mT, jT.width = UT, jT.height = mT, jT.format = WT, jT.generateMipMaps = zT, jT.samplingMode = gT, jT.invertY = MT, jT._compression = nT, jT.type = HT, jT._useSRGBBuffer = kT, this._doNotHandleContextLost || (jT._bufferView = TT), jT
      }
      updateRawTexture(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        TT && (TT._bufferView = UT, TT.format = mT, TT.invertY = WT, TT._compression = zT, TT.type = MT, TT._useSRGBBuffer = gT)
      }
      bindFramebuffer(TT, UT, mT, WT, zT) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = TT, this._currentFramebuffer = null, this._cachedViewport && !zT && this.setViewport(this._cachedViewport, mT, WT)
      }
      unBindFramebuffer(TT) {
        let UT = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, UT && UT(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(TT) {
        const UT = new lm.e;
        return UT.references = 1, UT.fl = 1, UT
      }
      updateDynamicTexture(TT, UT, mT) {}
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
      updateDynamicIndexBuffer(TT, UT) {}
      updateDynamicVertexBuffer(TT, UT, mT, WT) {}
      _bindTextureDirectly(TT, UT) {
        return this._boundTexturesCache[this._activeChannel] !== UT && (this._boundTexturesCache[this._activeChannel] = UT, !0)
      }
      _bindTexture(TT, UT) {
        TT < 0 || this._bindTextureDirectly(0, UT)
      }
      _deleteBuffer(TT) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(TT) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(TT, UT, mT, WT, zT) {}
      _uploadDataToTextureDirectly(TT, UT) {}
      _uploadArrayBufferViewToTexture(TT, UT) {}
      _uploadImageToTexture(TT, UT) {}
    }
    mT(40143), mT(40180), mT(40134);
    async function fm(TT) {
      const UT = TT.getInternalTexture();
      if (!UT || 1 !== UT.source) return null;
      if (UT.invertY) {
        const UT = TT.KF()?.eB();
        if (!(UT instanceof cm)) return null
      }
      const mT = UT._buffer;
      let WT, MT = TT.mimeType;
      try {
        mT ? ArrayBuffer.isView(mT) ? WT = mT.buffer.slice(mT.byteOffset, mT.byteOffset + mT.byteLength) : mT instanceof ArrayBuffer ? WT = mT : mT instanceof Blob ? (WT = await mT.arrayBuffer(), MT = mT.type || MT) : "string" === typeof mT ? (WT = await zT.Tools.LoadFileAsync(mT), MT = (0, HT.d)(mT) || MT) : "undefined" !== typeof HTMLImageElement && mT instanceof HTMLImageElement && (WT = await zT.Tools.LoadFileAsync(mT.src), MT = (0, HT.d)(mT.src) || MT) : (WT = await zT.Tools.LoadFileAsync(UT.url), MT = (0, HT.d)(UT.url) || MT)
      } catch {
        return null
      }
      if (WT && !MT && UT.url) {
        const TT = UT.url.match(/^data:([^;,]+)/);
        MT = TT ? TT[1] : (0, HT.d)(UT.url)
      }
      return WT && MT ? {
        data: WT,
        mimeType: MT
      } : null
    }
    const qm = 1e-6,
      im = new cT.Color3(.04, .04, .04),
      bm = 1024,
      Om = cT.Color3.White(),
      em = cT.Color3.BlackReadOnly;

    function Ym(TT) {
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

    function Jm(TT, UT, mT) {
      if (UT < im.r) return 0;
      const WT = im.r,
        zT = TT * mT / (1 - im.r) + UT - 2 * im.r,
        MT = zT * zT - 4 * WT * (im.r - UT);
      return qT.Clamp((-zT + Math.sqrt(MT)) / (2 * WT), 0, 1)
    }

    function xm(TT) {
      const UT = TT.diffuseColor.toLinearSpace(TT.KF().eB().useExactSrgbConversions).scale(.5),
        mT = TT.alpha,
        WT = function(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new PT.o(0, 1),
            mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new PT.o(0, .1),
            WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new PT.o(0, .1),
            zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new PT.o(1300, .1);
          return function(TT, UT, mT, WT, zT) {
            return (1 - TT) * (1 - TT) * (1 - TT) * UT + 3 * (1 - TT) * (1 - TT) * TT * mT + 3 * (1 - TT) * TT * TT * WT + TT * TT * TT * zT
          }(Math.pow(TT / zT.x, .333333), UT.y, mT.y, WT.y, zT.y)
        }(qT.Clamp(TT.specularPower, 0, bm));
      return {
        baseColorFactor: [UT.r, UT.g, UT.b, mT],
        metallicFactor: 0,
        roughnessFactor: WT
      }
    }

    function dm(TT, UT) {
      UT.needAlphaBlending() ? TT.alphaMode = "BLEND" : UT.needAlphaTesting() && (TT.alphaMode = "MASK", TT.alphaCutoff = UT.alphaCutOff)
    }

    function wm(TT, UT, mT) {
      const WT = new Uint8Array(TT * UT * 4);
      for (let zT = 0; zT < WT.length; zT += 4) WT[zT] = WT[zT + 1] = WT[zT + 2] = WT[zT + 3] = 255;
      return OT.b.CreateRGBATexture(WT, TT, UT, mT)
    }

    function tm(TT) {
      if (TT instanceof Uint8Array) {
        const UT = TT.length,
          mT = new Float32Array(TT.length);
        for (let WT = 0; WT < UT; ++WT) mT[WT] = TT[WT] / 255;
        return mT
      }
      if (TT instanceof Float32Array) return TT;
      throw new Error("Unsupported pixel format!")
    }
    class am {
      constructor(TT) {
        this._exporter = TT, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(TT) {
        return TT ? this._textureMap.get(TT.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(TT, UT) {
        const mT = xm(TT),
          WT = {
            name: TT.name
          };
        if (null == TT.backFaceCulling || TT.backFaceCulling || (TT.twoSidedLighting || zT.Tools.Warn(TT.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), WT.doubleSided = !0), UT) {
          const UT = [],
            zT = TT.diffuseTexture;
          zT && UT.push(this.exportTextureAsync(zT).then((TT => {
            TT && (mT.baseColorTexture = TT)
          })));
          const MT = TT.bumpTexture;
          MT && UT.push(this.exportTextureAsync(MT).then((TT => {
            TT && (WT.normalTexture = TT, 1 !== MT.level && (WT.normalTexture.scale = MT.level))
          })));
          const gT = TT.emissiveTexture;
          gT && (WT.emissiveFactor = [1, 1, 1], UT.push(this.exportTextureAsync(gT).then((TT => {
            TT && (WT.emissiveTexture = TT)
          }))));
          const nT = TT.ambientTexture;
          nT && UT.push(this.exportTextureAsync(nT).then((TT => {
            if (TT) {
              const UT = {
                index: TT.index
              };
              WT.occlusionTexture = UT
            }
          }))), UT.length > 0 && (this._exporter._materialNeedsUVsSet.add(TT), await Promise.all(UT))
        }(TT.alpha < 1 || TT.opacityTexture) && (TT.alphaMode === eT.b.ALPHA_COMBINE ? WT.alphaMode = "BLEND" : zT.Tools.Warn(TT.name + ": glTF 2.0 does not support alpha mode: " + TT.alphaMode.toString())), TT.emissiveColor && !TT.emissiveColor.equalsWithEpsilon(em, qm) && (WT.emissiveFactor = TT.emissiveColor.cWT()), WT.pbrMetallicRoughness = mT, dm(WT, TT), await this._finishMaterialAsync(WT, TT);
        const MT = this._exporter._materials;
        return MT.push(WT), MT.length - 1
      }
      async _finishMaterialAsync(TT, UT) {
        const mT = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", TT, UT),
          WT = [];
        for (const zT of mT) WT.push(this.exportTextureAsync(zT));
        await Promise.all(WT), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", TT, UT)
      }
      _resizeTexturesToSameDimensions(TT, UT, mT) {
        const WT = TT ? TT.getSize() : {
            width: 0,
            height: 0
          },
          zT = UT ? UT.getSize() : {
            width: 0,
            height: 0
          };
        let MT, gT;
        return WT.width < zT.width ? (MT = TT && TT instanceof bT.e ? iT.i.CreateResizedCopy(TT, zT.width, zT.height, !0) : wm(zT.width, zT.height, mT), gT = UT) : WT.width > zT.width ? (gT = UT && UT instanceof bT.e ? iT.i.CreateResizedCopy(UT, WT.width, WT.height, !0) : wm(WT.width, WT.height, mT), MT = TT) : (MT = TT, gT = UT), {
          texture1: MT,
          texture2: gT
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(TT, UT, mT) {
        const WT = new Array;
        if (!TT && !UT) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const zT = TT ? TT.KF() : UT ? UT.KF() : null;
        if (zT) {
          const MT = this._resizeTexturesToSameDimensions(TT, UT, zT),
            gT = MT.texture1?.getSize();
          let nT, HT;
          const kT = gT.width,
            jT = gT.height,
            lT = await MT.texture1.readPixels(),
            LT = await MT.texture2.readPixels();
          if (!lT) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (nT = tm(lT), !LT) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          HT = tm(LT);
          const pT = HT.byteLength,
            BT = new Uint8Array(pT),
            ZT = new Uint8Array(pT),
            vT = 4,
            fT = new cT.Color3(0, 0, 0);
          let qT = 0,
            iT = 0;
          for (let TT = 0; TT < jT; ++TT)
            for (let UT = 0; UT < kT; ++UT) {
              const WT = (kT * TT + UT) * vT,
                gT = {
                  diffuseColor: new cT.Color3(nT[WT], nT[WT + 1], nT[WT + 2]).toLinearSpace(zT.eB().useExactSrgbConversions).multiply(mT.diffuseColor),
                  specularColor: new cT.Color3(HT[WT], HT[WT + 1], HT[WT + 2]).toLinearSpace(zT.eB().useExactSrgbConversions).multiply(mT.specularColor),
                  glossiness: HT[WT + 3] * mT.glossiness
                },
                jT = this._convertSpecularGlossinessToMetallicRoughness(gT);
              fT.r = Math.max(fT.r, jT.baseColor.r), fT.g = Math.max(fT.g, jT.baseColor.g), fT.b = Math.max(fT.b, jT.baseColor.b), qT = Math.max(qT, jT.metallic), iT = Math.max(iT, jT.roughness), ZT[WT] = 255 * jT.baseColor.r, ZT[WT + 1] = 255 * jT.baseColor.g, ZT[WT + 2] = 255 * jT.baseColor.b, ZT[WT + 3] = MT.texture1.hasAlpha ? 255 * nT[WT + 3] : 255, BT[WT] = 0, BT[WT + 1] = 255 * jT.roughness, BT[WT + 2] = 255 * jT.metallic, BT[WT + 3] = 255
            }
          const bT = {
            baseColor: fT,
            metallic: qT,
            roughness: iT
          };
          let OT = !1,
            eT = !1;
          for (let TT = 0; TT < jT; ++TT)
            for (let UT = 0; UT < kT; ++UT) {
              const mT = (kT * TT + UT) * vT;
              ZT[mT] /= bT.baseColor.r > qm ? bT.baseColor.r : 1, ZT[mT + 1] /= bT.baseColor.g > qm ? bT.baseColor.g : 1, ZT[mT + 2] /= bT.baseColor.b > qm ? bT.baseColor.b : 1;
              const WT = cT.Color3.FromInts(ZT[mT], ZT[mT + 1], ZT[mT + 2]).toGammaSpace(zT.eB().useExactSrgbConversions);
              ZT[mT] = 255 * WT.r, ZT[mT + 1] = 255 * WT.g, ZT[mT + 2] = 255 * WT.b, WT.equalsWithEpsilon(Om, qm) || (eT = !0), BT[mT + 1] /= bT.roughness > qm ? bT.roughness : 1, BT[mT + 2] /= bT.metallic > qm ? bT.metallic : 1;
              cT.Color3.FromInts(255, BT[mT + 1], BT[mT + 2]).equalsWithEpsilon(Om, qm) || (OT = !0)
            }
          return OT && WT.push((0, YT.EncodeImageAsync)(BT, kT, jT).then((TT => {
            bT.metallicRoughnessTextureData = TT
          }))), eT && WT.push((0, YT.EncodeImageAsync)(ZT, kT, jT).then((TT => {
            bT.baseColorTextureData = TT
          }))), await Promise.all(WT).then((() => bT))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(TT) {
        const UT = this._getPerceivedBrightness(TT.diffuseColor),
          mT = this._getPerceivedBrightness(TT.specularColor),
          WT = 1 - this._getMaxComponent(TT.specularColor),
          zT = Jm(UT, mT, WT),
          MT = TT.diffuseColor.scale(WT / (1 - im.r) / Math.max(1 - zT, qm)),
          gT = TT.specularColor.subtract(im.scale(1 - zT)).scale(1 / Math.max(zT, qm));
        let nT = cT.Color3.Lerp(MT, gT, zT * zT);
        nT = nT.clampToRef(0, 1, nT);
        return {
          baseColor: nT,
          metallic: zT,
          roughness: 1 - TT.glossiness
        }
      }
      _getPerceivedBrightness(TT) {
        return Math.sqrt(.299 * TT.r * TT.r + .587 * TT.g * TT.g + .114 * TT.b * TT.b)
      }
      _getMaxComponent(TT) {
        return Math.max(TT.r, Math.max(TT.g, TT.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        const kT = [],
          jT = {
            baseColor: TT,
            metallic: UT,
            roughness: mT
          };
        if (HT)
          if (gT instanceof AU) {
            if (gT.geometryOpacityTexture) {
              const TT = WT && WT.getInternalTexture() ? WT.getInternalTexture().uniqueId : 0,
                UT = gT.geometryOpacityTexture && gT.geometryOpacityTexture.getInternalTexture() ? gT.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                mT = Number(`${TT}${UT}`),
                zT = this._textureMap.get(mT);
              zT ? nT.baseColorTexture = zT : kT.push(gm("baseColorOpacityTexture", km(WT ? nm(WT, 0) : Hm(1), WT ? nm(WT, 1) : Hm(1), WT ? nm(WT, 2) : Hm(1), nm(gT.geometryOpacityTexture, 0)), gT.KF()).then((async TT => {
                const UT = await this.exportTextureAsync(TT, mT);
                UT && (nT.baseColorTexture = UT)
              })))
            } else WT && kT.push(this.exportTextureAsync(WT).then((TT => {
              TT && (nT.baseColorTexture = TT)
            })));
            if (gT._useMetallicFromMetallicTextureBlue && zT) kT.push(this.exportTextureAsync(zT).then((TT => {
              TT && (nT.metallicRoughnessTexture = TT)
            })));
            else if (MT || zT) {
              const TT = zT && zT.getInternalTexture() ? zT.getInternalTexture().uniqueId : 0,
                UT = MT && MT.getInternalTexture() ? MT.getInternalTexture().uniqueId : 0,
                mT = Number(`${TT}${UT}`),
                WT = this._textureMap.get(mT);
              WT ? nT.metallicRoughnessTexture = WT : kT.push(gm("MetalRoughTexture", km(gT.ambientOcclusionTexture ? nm(gT.ambientOcclusionTexture, 0) : Hm(1), MT ? nm(MT, 0) : Hm(1), zT ? nm(zT, 0) : Hm(1)), gT.KF()).then((async TT => {
                const UT = await this.exportTextureAsync(TT, mT);
                UT && (nT.metallicRoughnessTexture = UT)
              })))
            }
          } else WT && kT.push(this.exportTextureAsync(WT).then((TT => {
            TT && (nT.baseColorTexture = TT)
          }))), zT && kT.push(this.exportTextureAsync(zT).then((TT => {
            TT && (nT.metallicRoughnessTexture = TT)
          })));
        return kT.length > 0 && (this._exporter._materialNeedsUVsSet.add(gT), await Promise.all(kT)), jT
      }
      _getTextureSampler(TT) {
        const UT = {};
        if (!TT || !(TT instanceof bT.e)) return UT;
        const mT = this._getGLTFTextureWrapMode(TT.wrapU);
        10497 !== mT && (UT.wrapS = mT);
        const WT = this._getGLTFTextureWrapMode(TT.wrapV);
        switch (10497 !== WT && (UT.wrapT = WT), TT.samplingMode) {
          case bT.e.LINEAR_LINEAR:
            UT.magFilter = 9729, UT.minFilter = 9729;
            break;
          case bT.e.LINEAR_NEAREST:
            UT.magFilter = 9729, UT.minFilter = 9728;
            break;
          case bT.e.NEAREST_LINEAR:
            UT.magFilter = 9728, UT.minFilter = 9729;
            break;
          case bT.e.NEAREST_LINEAR_MIPLINEAR:
            UT.magFilter = 9728, UT.minFilter = 9987;
            break;
          case bT.e.NEAREST_NEAREST:
            UT.magFilter = 9728, UT.minFilter = 9728;
            break;
          case bT.e.NEAREST_LINEAR_MIPNEAREST:
            UT.magFilter = 9728, UT.minFilter = 9985;
            break;
          case bT.e.LINEAR_NEAREST_MIPNEAREST:
            UT.magFilter = 9729, UT.minFilter = 9984;
            break;
          case bT.e.LINEAR_NEAREST_MIPLINEAR:
            UT.magFilter = 9729, UT.minFilter = 9986;
            break;
          case bT.e.NEAREST_NEAREST_MIPLINEAR:
            UT.magFilter = 9728, UT.minFilter = 9986;
            break;
          case bT.e.LINEAR_LINEAR_MIPLINEAR:
            UT.magFilter = 9729, UT.minFilter = 9987;
            break;
          case bT.e.LINEAR_LINEAR_MIPNEAREST:
            UT.magFilter = 9729, UT.minFilter = 9985;
            break;
          case bT.e.NEAREST_NEAREST_MIPNEAREST:
            UT.magFilter = 9728, UT.minFilter = 9984
        }
        return UT
      }
      _getGLTFTextureWrapMode(TT) {
        switch (TT) {
          case bT.e.WRAP_ADDRESSMODE:
            return 10497;
          case bT.e.CLAMP_ADDRESSMODE:
            return 33071;
          case bT.e.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return zT.Tools.Error(`Unsupported Texture Wrap Mode ${TT}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(TT, UT, mT) {
        const WT = {
            diffuseColor: TT._albedoColor,
            specularColor: TT._reflectivityColor,
            glossiness: TT._microSurface
          },
          zT = TT._albedoTexture,
          MT = TT._reflectivityTexture,
          gT = TT._useMicroSurfaceFromReflectivityMapAlpha;
        if (MT && !gT) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((zT || MT) && mT) {
          this._exporter._materialNeedsUVsSet.add(TT);
          const mT = this._exportTextureSampler(zT || MT),
            gT = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(zT, MT, WT),
            nT = this._exporter._textures;
          if (gT.baseColorTextureData) {
            const TT = await this._exportImageAsync(`baseColor${nT.length}`, gT.baseColorTextureData);
            UT.baseColorTexture = this._exportTextureInfo(TT, mT, zT?.coordinatesIndex)
          }
          if (gT.metallicRoughnessTextureData) {
            const TT = await this._exportImageAsync(`metallicRoughness${nT.length}`, gT.metallicRoughnessTextureData);
            UT.metallicRoughnessTexture = this._exportTextureInfo(TT, mT, MT?.coordinatesIndex)
          }
          return gT
        }
        return this._convertSpecularGlossinessToMetallicRoughness(WT)
      }
      async exportPBRMaterialAsync(TT, UT) {
        const mT = {},
          WT = {
            name: TT.name
          },
          zT = TT.isMetallicWorkflow();
        if (zT) {
          const UT = TT._albedoColor,
            WT = TT.alpha;
          UT && (mT.baseColorFactor = [UT.r, UT.g, UT.b, WT])
        }
        const MT = zT ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(TT._albedoColor, TT._metallic, TT._roughness, TT._albedoTexture, TT._metallicTexture, TT._metallicTexture, TT, mT, UT) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(TT, mT, UT);
        await this._setMetallicRoughnessPbrMaterialAsync(MT, TT, WT, mT, UT), await this._finishMaterialAsync(WT, TT);
        const gT = this._exporter._materials;
        return gT.push(WT), gT.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(TT, UT, mT, WT, MT) {
        if (dm(mT, UT), TT.baseColor.equalsWithEpsilon(Om, qm) && qT.WithinEpsilon(UT.alpha, 1, qm) || (WT.baseColorFactor = [TT.baseColor.r, TT.baseColor.g, TT.baseColor.b, UT.alpha]), null != TT.metallic && 1 !== TT.metallic && (WT.metallicFactor = TT.metallic), null != TT.roughness && 1 !== TT.roughness && (WT.roughnessFactor = TT.roughness), null == UT.backFaceCulling || UT.backFaceCulling || (UT._twoSidedLighting || zT.Tools.Warn(UT.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), mT.doubleSided = !0), MT) {
          const TT = [],
            zT = UT instanceof OU ? UT._bumpTexture : UT.geometryNormalTexture;
          zT && TT.push(this.exportTextureAsync(zT).then((TT => {
            TT && (mT.normalTexture = TT, 1 !== zT.level && (mT.normalTexture.scale = zT.level))
          })));
          const MT = UT instanceof OU ? UT._ambientTexture : UT.ambientOcclusionTexture;
          MT && TT.push(new Promise((async TT => {
            if (UT instanceof AU && WT.metallicRoughnessTexture) {
              const UT = this._exportTextureSampler(MT),
                mT = this._exporter._textures[WT.metallicRoughnessTexture.index].source,
                zT = this._exportTextureInfo(mT, UT, MT.coordinatesIndex);
              return this._textureMap.set(MT.uniqueId, zT), this._exporter._extensionsPostExportTextures("exporter", zT, MT), TT(zT)
            }
            return TT(await this.exportTextureAsync(MT))
          })).then((async TT => {
            if (TT) {
              const WT = {
                index: TT.index,
                texCoord: TT.texCoord,
                extensions: TT.extensions
              };
              mT.occlusionTexture = WT, WT.strength = UT instanceof OU ? UT._ambientTextureStrength : UT.ambientOcclusionTexture.level
            }
          })));
          const gT = UT instanceof OU ? UT._emissiveTexture : UT.emissionColorTexture;
          gT && TT.push(this.exportTextureAsync(gT).then((TT => {
            TT && (mT.emissiveTexture = TT)
          }))), TT.length > 0 && (this._exporter._materialNeedsUVsSet.add(UT), await Promise.all(TT))
        }
        const gT = UT instanceof OU ? UT._emissiveColor : UT.emissionColor;
        gT.equalsWithEpsilon(em, qm) || (mT.emissiveFactor = gT.cWT()), mT.pbrMetallicRoughness = WT
      }
      async exportOpenPBRMaterialAsync(TT, UT) {
        const mT = {},
          WT = {
            name: TT.name
          },
          zT = TT.baseColor,
          MT = TT.geometryOpacity;
        zT && (mT.baseColorFactor = [zT.r, zT.g, zT.b, MT]);
        const gT = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(TT.baseColor, TT.baseMetalness, TT.specularRoughness, TT.baseColorTexture, TT.baseMetalnessTexture, TT.specularRoughnessTexture, TT, mT, UT);
        await this._setMetallicRoughnessPbrMaterialAsync(gT, TT, WT, mT, UT), await this._finishMaterialAsync(WT, TT);
        const nT = this._exporter._materials;
        return nT.push(WT), nT.length - 1
      }
      async exportTextureAsync(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = this._textureMap.get(UT ?? TT.uniqueId);
        if (mT) return mT;
        const WT = this._exportTextureSampler(TT),
          zT = await this._exportTextureImageAsync(TT);
        return mT = this._exportTextureInfo(zT, WT, TT.coordinatesIndex), this._textureMap.set(UT ?? TT.uniqueId, mT), this._exporter._extensionsPostExportTextures("exporter", mT, TT), mT
      }
      async _exportTextureImageAsync(TT) {
        const UT = TT.mimeType ?? "none",
          mT = this._internalTextureToImage,
          WT = TT.getInternalTexture().uniqueId;
        mT[WT] = mT[WT] || {};
        let MT = mT[WT][UT];
        return void 0 === MT && (MT = (async () => {
          const mT = await fm(TT);
          if (mT && Ym(mT.mimeType) && ("none" === UT || mT.mimeType === UT)) return await this._exportImageAsync(TT.name, new Blob([mT.data], {
            type: mT.mimeType
          }));
          let WT = "image/png";
          "none" !== UT && (Ym(UT) ? WT = UT : (WT = "image/png", zT.Tools.Warn(`Unsupported media type: ${UT}. Exporting texture as PNG.`)));
          const MT = TT.getSize(),
            gT = await (0, iT.f)(TT),
            nT = await (0, YT.EncodeImageAsync)(gT, MT.width, MT.height, WT);
          return await this._exportImageAsync(TT.name, nT)
        })(), mT[WT][UT] = MT), await MT
      }
      async _exportImageAsync(TT, UT) {
        const mT = this._exporter._images;
        let WT;
        if (this._exporter._shouldUseGlb) {
          WT = {
            name: TT,
            mimeType: UT.type,
            bufferView: void 0
          };
          const mT = await UT.arrayBuffer(),
            zT = this._exporter._bufferManager.createBufferView(new Uint8Array(mT));
          this._exporter._bufferManager.setBufferView(WT, zT)
        } else {
          const MT = TT.replace(/\.\/|\/|\.\\|\\/g, "_"),
            gT = function(TT) {
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
            }(UT.type);
          let nT = MT + gT;
          mT.some((TT => TT.uri === nT)) && (nT = `${MT}_${zT.Tools.RandomId()}${gT}`), WT = {
            name: TT,
            uri: nT
          }, this._exporter._imageData[nT] = UT
        }
        return mT.push(WT), mT.length - 1
      }
      _exportTextureInfo(TT, UT, mT) {
        const WT = this._exporter._textures;
        let zT = WT.findIndex((mT => mT.sampler == UT && mT.source === TT)); - 1 === zT && (zT = WT.length, WT.push({
          source: TT,
          sampler: UT
        }));
        const MT = {
          index: zT
        };
        return mT && (MT.texCoord = mT), MT
      }
      _exportTextureSampler(TT) {
        const UT = this._getTextureSampler(TT),
          mT = this._exporter._samplers,
          WT = mT.findIndex((TT => TT.minFilter === UT.minFilter && TT.magFilter === UT.magFilter && TT.wrapS === UT.wrapS && TT.wrapT === UT.wrapT));
        return -1 !== WT ? WT : (mT.push(UT), mT.length - 1)
      }
    }
    var ym = mT(40171),
      Xm = mT(40323);
    (0, Xm.c)();
    var Im = mT(37196);
    const Qm = WT.Matrix.Compose(new WT.JB(-1, 1, 1), WT.Quaternion.Identity(), WT.JB.Zero());

    function sm(TT, UT) {
      if (!(TT instanceof lT.d)) return !1;
      if (UT) {
        if (!TT.getWorldMatrix().equalsWithEpsilon(WT.Matrix.IdentityReadOnly, Im.c)) return !1
      } else {
        if (!TT.getWorldMatrix().multiplyToRef(Qm, WT.TmpVectors.Matrix[0]).equalsWithEpsilon(WT.Matrix.IdentityReadOnly, Im.c)) return !1
      }
      return !(TT instanceof LT.d && TT.geometry)
    }
    const Fm = WT.JB.ZeroReadOnly,
      Pm = WT.Quaternion.Identity(),
      Vm = WT.JB.OneReadOnly,
      um = new WT.JB(-1, 1, 1);

    function Cm(TT, UT) {
      const {
        byteOffset: mT,
        byteStride: WT,
        type: zT,
        normalized: MT
      } = TT, gT = TT.getSize(), nT = UT.reduce(((TT, UT) => UT.getTotalVertices() > TT ? UT.getTotalVertices() : TT), -Number.MAX_VALUE);
      return {
        byteOffset: mT,
        byteStride: WT,
        componentCount: gT,
        type: zT,
        count: nT * gT,
        normalized: MT,
        totalVertices: nT,
        kind: TT.getKind()
      }
    }

    function rm(TT) {
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

    function Km(TT) {
      switch (TT) {
        case jT.i.PositionKind:
        case jT.i.NormalKind:
        case jT.i.TangentKind:
        case jT.i.ColorKind:
        case jT.i.MatricesIndicesKind:
        case jT.i.MatricesIndicesExtraKind:
        case jT.i.MatricesWeightsKind:
        case jT.i.MatricesWeightsExtraKind:
        case jT.i.UVKind:
        case jT.i.UV2Kind:
        case jT.i.UV3Kind:
        case jT.i.UV4Kind:
        case jT.i.UV5Kind:
        case jT.i.UV6Kind:
          return !0
      }
      return !1
    }

    function Sm(TT) {
      const UT = Math.sqrt(TT.x * TT.x + TT.y * TT.y + TT.z * TT.z);
      UT > 0 && (TT.x /= UT, TT.y /= UT, TT.z /= UT)
    }

    function Gm(TT) {
      return TT.x *= -1, TT
    }

    function Nm(TT) {
      if (TT.x * TT.x + TT.y * TT.y > .5) {
        const UT = Math.abs(TT.x),
          mT = Math.abs(TT.y);
        if (UT > mT) {
          const mT = Math.sign(TT.x);
          TT.x = UT, TT.y *= -mT, TT.z *= -mT, TT.w *= mT
        } else {
          const UT = Math.sign(TT.y);
          TT.x *= -UT, TT.y = mT, TT.z *= UT, TT.w *= -UT
        }
      } else {
        const UT = Math.abs(TT.z),
          mT = Math.abs(TT.w);
        if (UT > mT) {
          const mT = Math.sign(TT.z);
          TT.x *= -mT, TT.y *= mT, TT.z = UT, TT.w *= -mT
        } else {
          const UT = Math.sign(TT.w);
          TT.x *= UT, TT.y *= -UT, TT.z *= -UT, TT.w = mT
        }
      }
      return TT
    }

    function Em(TT) {
      TT.J9(-TT.z, TT.w, TT.x, -TT.y)
    }

    function hm(TT, UT) {
      const mT = WT.JB.FromArrayToRef(UT.translation || [0, 0, 0], 0, WT.TmpVectors.JB[0]),
        zT = WT.Quaternion.FromArrayToRef(UT.rotation || [0, 0, 0, 1], 0, WT.TmpVectors.Quaternion[0]),
        MT = WT.Matrix.ComposeToRef(Vm, zT, mT, WT.TmpVectors.Matrix[0]),
        gT = WT.JB.FromArrayToRef(TT.translation || [0, 0, 0], 0, WT.TmpVectors.JB[2]),
        nT = WT.Quaternion.FromArrayToRef(TT.rotation || [0, 0, 0, 1], 0, WT.TmpVectors.Quaternion[1]),
        HT = WT.Matrix.ComposeToRef(Vm, nT, gT, WT.TmpVectors.Matrix[1]);
      MT.multiplyToRef(HT, HT), HT.decompose(void 0, zT, mT), mT.equalsWithEpsilon(Fm, Im.c) ? delete UT.translation : UT.translation = mT.cWT(), zT.equalsWithEpsilon(Pm, Im.c) ? delete UT.rotation : UT.rotation = zT.cWT(), UT.scale && delete UT.scale
    }

    function Dm(TT, UT) {
      if (!(UT instanceof lT.d)) return !1;
      if (!(1 === UT.getChildren().length && 0 === TT.getChildren().length && TT.parent === UT)) return !1;
      const mT = TT.KF(),
        WT = TT instanceof Xm.d && !mT.useRightHandedSystem ? um : Vm;
      return !!UT.gp.equalsWithEpsilon(WT, Im.c) || (dT.b.Warn(`Cannot collapse node ${TT.name} into parent node ${UT.name} with modified scaling.`), !1)
    }

    function om(TT) {
      if (TT instanceof Array) {
        const UT = new Float32Array(TT);
        return new Uint8Array(UT.buffer, UT.byteOffset, UT.byteLength)
      }
      return ArrayBuffer.isView(TT) ? new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength) : new Uint8Array(TT)
    }

    function Am(TT, UT) {
      for (const [mT, WT] of Object.entries(TT)) {
        const zT = UT[mT];
        (Array.isArray(WT) && Array.isArray(zT) && Rm(WT, zT) || WT === zT) && delete TT[mT]
      }
      return TT
    }

    function Rm(TT, UT) {
      return TT.length === UT.length && TT.every(((TT, mT) => TT === UT[mT]))
    }
    const TW = new Map([
      [Int8Array, (TT, UT, mT) => TT.setInt8(UT, mT)],
      [Uint8Array, (TT, UT, mT) => TT.setUint8(UT, mT)],
      [Uint8ClampedArray, (TT, UT, mT) => TT.setUint8(UT, mT)],
      [Int16Array, (TT, UT, mT) => TT.setInt16(UT, mT, !0)],
      [Uint16Array, (TT, UT, mT) => TT.setUint16(UT, mT, !0)],
      [Int32Array, (TT, UT, mT) => TT.setInt32(UT, mT, !0)],
      [Uint32Array, (TT, UT, mT) => TT.setUint32(UT, mT, !0)],
      [Float32Array, (TT, UT, mT) => TT.setFloat32(UT, mT, !0)],
      [Float64Array, (TT, UT, mT) => TT.setFloat64(UT, mT, !0)]
    ]);
    class UW {
      writeTypedArray(TT) {
        this._checkGrowBuffer(TT.byteLength);
        const UT = TW.get(TT.constructor);
        for (let mT = 0; mT < TT.length; mT++) UT(this._dataView, this._byteOffset, TT[mT]), this._byteOffset += TT.BYTES_PER_ELEMENT
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
        const UT = this.byteOffset + TT;
        if (UT > this._data.byteLength) {
          const TT = new Uint8Array(2 * UT);
          TT.set(this._data), this._data = TT, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function mW(TT) {
      return TT % 4 === 0 ? 4 : TT % 2 === 0 ? 2 : 1
    }
    class WW {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(TT) {
        let UT = 0;
        this._bufferViewToData.forEach((TT => {
          UT += TT.byteLength
        }));
        const mT = new UW(UT),
          WT = Array.from(this._bufferViewToData.keys()).sort(((TT, UT) => mW(UT.byteLength) - mW(TT.byteLength)));
        for (const zT of WT) {
          zT.byteOffset = mT.byteOffset, TT.push(zT);
          const UT = TT.length - 1,
            WT = this.getPropertiesWithBufferView(zT);
          for (const TT of WT) TT.bufferView = UT;
          mT.writeTypedArray(this._bufferViewToData.get(zT)), this._bufferViewToData.delete(zT)
        }
        return mT.getOutputData()
      }
      createBufferView(TT, UT) {
        const mT = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: TT.byteLength,
          byteStride: UT
        };
        return this._bufferViewToData.set(mT, TT), mT
      }
      createAccessor(TT, UT, mT, WT, zT, MT, gT) {
        this._verifyBufferView(TT);
        const nT = {
          bufferView: void 0,
          componentType: mT,
          count: WT,
          type: UT,
          min: MT?.min,
          max: MT?.max,
          normalized: gT,
          byteOffset: zT
        };
        return this.setBufferView(nT, TT), this._accessorToBufferView.set(nT, TT), nT
      }
      setBufferView(TT, UT) {
        this._verifyBufferView(UT);
        this.getPropertiesWithBufferView(UT).push(TT)
      }
      removeBufferView(TT) {
        const UT = this.getPropertiesWithBufferView(TT);
        for (const mT of UT) void 0 !== mT.bufferView && delete mT.bufferView;
        this._bufferViewToData.delete(TT), this._bufferViewToProperties.delete(TT), this._accessorToBufferView.forEach(((UT, mT) => {
          UT === TT && (void 0 !== mT.byteOffset && delete mT.byteOffset, this._accessorToBufferView.delete(mT))
        }))
      }
      getBufferView(TT) {
        const UT = this._accessorToBufferView.get(TT);
        return this._verifyBufferView(UT), UT
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
    var zW = mT(40330);
    (0, zW.c)();
    var MW = mT(40571);
    (0, MW.i)();
    var gW = mT(40379),
      nW = mT(41242);
    (0, nW.g)();
    let HW = (() => {
      var TT;
      let UT, mT, WT = [],
        zT = [],
        MT = [],
        gT = [];
      return TT = class {
        get influence() {
          return this._influence
        }
        set influence(TT) {
          if (this._influence === TT) return;
          const UT = this._influence;
          this._influence = TT, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === UT || 0 === TT)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(TT) {
          this._animationPropertiesOverride = TT
        }
        constructor(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            nT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = TT, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Tm.d, this._onDataLayoutChanged = new Tm.d, this.id = (0, JT.k)(this, WT, void 0), this.morphTargetManager = ((0, JT.k)(this, zT), (0, JT.k)(this, MT, null)), this._animationPropertiesOverride = ((0, JT.k)(this, gT), null), this.id = TT, this.morphTargetManager = nT, this._scene = mT || ZT.c.LastCreatedScene, this.influence = UT, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        TnT(TT) {
          const UT = this.hasPositions;
          this._positions = TT, UT !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(TT) {
          const UT = this.hasNormals;
          this._normals = TT, UT !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(TT) {
          const UT = this.hasTangents;
          this._tangents = TT, UT !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(TT) {
          const UT = this.hasUVs;
          this._uvs = TT, UT !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(TT) {
          const UT = this.hasUV2s;
          this._uv2s = TT, UT !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(TT) {
          const UT = this.hasColors;
          this._colors = TT, UT !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const UT = eU.e.Clone((() => new TT(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return UT._positions = this._positions, UT._normals = this._normals, UT._tangents = this._tangents, UT._uvs = this._uvs, UT._uv2s = this._uv2s, UT._colors = this._colors, UT
        }
        serialize() {
          const TT = {};
          return TT.name = this.name, TT.influence = this.influence, null != this.id && (TT.id = this.id), TT.uniqueId = this.uniqueId, TT.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (TT.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (TT.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (TT.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (TT.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (TT.colors = Array.prototype.slice.call(this.getColors())), eU.e.AppendSerializedAnimations(this, TT), TT
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(UT, mT) {
          let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const zT = new TT(UT.name, UT.influence, mT, WT);
          if (zT.TnT(UT.positions), null != UT.id && (zT.id = UT.id), UT.normals && zT.setNormals(UT.normals), UT.tangents && zT.setTangents(UT.tangents), UT.uvs && zT.setUVs(UT.uvs), UT.uv2s && zT.setUV2s(UT.uv2s), UT.colors && zT.setColors(UT.colors), UT.animations) {
            for (let TT = 0; TT < UT.animations.length; TT++) {
              const mT = UT.animations[TT],
                WT = (0, CU.d)("BABYLON.Animation");
              WT && zT.animations.push(WT.Parse(mT))
            }
            UT.autoAnimate && mT && mT.beginAnimation(zT, UT.autoAnimateFrom, UT.autoAnimateTo, UT.autoAnimateLoop, UT.autoAnimateSpeed || 1)
          }
          return zT
        }
        static FromMesh(UT, mT, WT) {
          mT || (mT = UT.name);
          const zT = new TT(mT, WT, UT.KF(), UT.morphTargetManager);
          return zT.TnT(UT.getVerticesData(VT.i.PositionKind)), UT.isVerticesDataPresent(VT.i.NormalKind) && zT.setNormals(UT.getVerticesData(VT.i.NormalKind)), UT.isVerticesDataPresent(VT.i.TangentKind) && zT.setTangents(UT.getVerticesData(VT.i.TangentKind)), UT.isVerticesDataPresent(VT.i.UVKind) && zT.setUVs(UT.getVerticesData(VT.i.UVKind)), UT.isVerticesDataPresent(VT.i.UV2Kind) && zT.setUV2s(UT.getVerticesData(VT.i.UV2Kind)), UT.isVerticesDataPresent(VT.i.ColorKind) && zT.setColors(UT.getVerticesData(VT.i.ColorKind)), zT
        }
      }, (() => {
        const nT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [(0, xT.L)()], mT = [(0, xT.L)()], (0, JT.h)(null, null, UT, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: TT => "id" in TT,
            get: TT => TT.id,
            set: (TT, UT) => {
              TT.id = UT
            }
          },
          metadata: nT
        }, WT, zT), (0, JT.h)(null, null, mT, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: TT => "morphTargetManager" in TT,
            get: TT => TT.morphTargetManager,
            set: (TT, UT) => {
              TT.morphTargetManager = UT
            }
          },
          metadata: nT
        }, MT, gT), nT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nT
        })
      })(), TT
    })();
    var kW, jW = mT(41318),
      lW = mT(40373);
    ! function(TT) {
      TT[TT.INTANGENT = 0] = "INTANGENT", TT[TT.OUTTANGENT = 1] = "OUTTANGENT"
    }(kW || (kW = {}));
    class LW {
      static _IsTransformable(TT) {
        return TT && (TT instanceof lT.d || TT instanceof zW.b || TT instanceof lW.e)
      }
      static _CreateNodeAnimation(TT, UT, mT, WT, MT) {
        if (this._IsTransformable(TT)) {
          const gT = [],
            nT = [],
            HT = UT.getKeys(),
            kT = LW._CalculateMinMaxKeyFrames(HT),
            jT = LW._DeduceInterpolation(HT, mT, WT),
            lT = jT.interpolationType,
            LT = jT.shouldBakeAnimation;
          if (LT ? LW._CreateBakedAnimation(TT, UT, mT, kT.min, kT.max, UT.framePerSecond, MT, gT, nT, kT, WT) : "LINEAR" === lT || "STEP" === lT ? LW._CreateLinearOrStepAnimation(TT, UT, mT, gT, nT, WT) : "CUBICSPLINE" === lT ? LW._CreateCubicSplineAnimation(TT, UT, mT, gT, nT, WT) : LW._CreateBakedAnimation(TT, UT, mT, kT.min, kT.max, UT.framePerSecond, MT, gT, nT, kT, WT), gT.length && nT.length) {
            return {
              inputs: gT,
              outputs: nT,
              samplerInterpolation: lT,
              inputsMin: LT ? kT.min : zT.Tools.FloatRound(kT.min / UT.framePerSecond),
              inputsMax: LT ? kT.max : zT.Tools.FloatRound(kT.max / UT.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(TT) {
        let UT = null,
          mT = "VEC3",
          WT = !1;
        const MT = TT.targetProperty.split(".");
        switch (MT[0]) {
          case "gp":
            UT = "scale";
            break;
          case "position":
            UT = "translation";
            break;
          case "rotation":
            mT = "VEC4", UT = "rotation";
            break;
          case "rotationQuaternion":
            mT = "VEC4", WT = !0, UT = "rotation";
            break;
          case "influence":
            mT = "SCALAR", UT = "weights";
            break;
          default:
            zT.Tools.Error(`Unsupported animatable property ${MT[0]}`)
        }
        return UT ? {
          animationChannelTargetPath: UT,
          dataAccessorType: mT,
          useQuaternion: WT
        } : (zT.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT) {
        let lT;
        if (LW._IsTransformable(TT) && TT.animations)
          for (const LT of TT.animations) {
            if (jT && !jT(LT)) continue;
            const zT = LW._DeduceAnimationInfo(LT);
            zT && (lT = {
              name: LT.name,
              samplers: [],
              channels: []
            }, LW._AddAnimation(`${LT.name}`, LT.hasRunningRuntimeAnimations ? UT : lT, TT, LT, zT.dataAccessorType, zT.animationChannelTargetPath, WT, MT, gT, nT, zT.useQuaternion, HT, kT), lT.samplers.length && lT.channels.length && mT.push(lT))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT) {
        let lT;
        if (TT instanceof jW.d) {
          const zT = TT.morphTargetManager;
          if (zT)
            for (let LT = 0; LT < zT.numTargets; ++LT) {
              const pT = zT.getTarget(LT);
              for (const BT of pT.animations) {
                if (jT && !jT(BT)) continue;
                const pT = new nW.c(`${BT.name}`, "influence", BT.framePerSecond, BT.dataType, BT.NW, BT.enableBlending),
                  ZT = [],
                  cT = BT.getKeys();
                for (let TT = 0; TT < cT.length; ++TT) {
                  const UT = cT[TT];
                  for (let TT = 0; TT < zT.numTargets; ++TT) TT == LT ? ZT.push(UT) : ZT.push({
                    frame: UT.frame,
                    value: 0
                  })
                }
                pT.setKeys(ZT, !0);
                const vT = LW._DeduceAnimationInfo(pT);
                vT && (lT = {
                  name: pT.name,
                  samplers: [],
                  channels: []
                }, LW._AddAnimation(BT.name, BT.hasRunningRuntimeAnimations ? UT : lT, TT, pT, vT.dataAccessorType, vT.animationChannelTargetPath, WT, MT, gT, nT, vT.useQuaternion, HT, kT, zT.numTargets), lT.samplers.length && lT.channels.length && mT.push(lT))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
        let jT;
        if (TT.animationGroups) {
          const lT = TT.animationGroups;
          for (const LT of lT) {
            const lT = new Map,
              pT = new Map,
              BT = new Set,
              ZT = LT.to - LT.from;
            jT = {
              name: LT.name,
              channels: [],
              samplers: []
            };
            for (let UT = 0; UT < LT.targetedAnimations.length; ++UT) {
              const kT = LT.targetedAnimations[UT],
                ZT = kT.target,
                cT = kT.animation;
              if (HT && !HT(cT)) continue;
              const vT = nT.has(ZT);
              if (this._IsTransformable(ZT) || 1 === ZT.length && this._IsTransformable(ZT[0])) {
                const TT = LW._DeduceAnimationInfo(kT.animation);
                if (TT) {
                  const UT = this._IsTransformable(ZT) ? ZT : this._IsTransformable(ZT[0]) ? ZT[0] : null;
                  UT && LW._AddAnimation(`${cT.name}`, jT, UT, cT, TT.dataAccessorType, TT.animationChannelTargetPath, mT, WT, zT, MT, TT.useQuaternion, gT, vT)
                }
              } else if (ZT instanceof HW || 1 === ZT.length && ZT[0] instanceof HW) {
                if (LW._DeduceAnimationInfo(kT.animation)) {
                  const UT = ZT instanceof HW ? ZT : ZT[0];
                  if (UT) {
                    const mT = TT.morphTargetManagers.find((TT => {
                      for (let mT = 0; mT < TT.numTargets; ++mT)
                        if (TT.getTarget(mT) === UT) return !0;
                      return !1
                    }));
                    if (mT) {
                      const WT = TT.meshes.find((TT => TT.morphTargetManager === mT));
                      WT && (lT.has(WT) || lT.set(WT, new Map), lT.get(WT)?.set(UT, cT), BT.add(WT), pT.set(WT, cT))
                    }
                  }
                }
              }
            }
            BT.forEach((TT => {
              const UT = TT.morphTargetManager;
              let nT = null;
              const HT = [],
                kT = pT.get(TT).getKeys(),
                BT = kT.length;
              for (let mT = 0; mT < BT; ++mT)
                for (let WT = 0; WT < UT.numTargets; ++WT) {
                  const zT = UT.getTarget(WT),
                    MT = lT.get(TT);
                  if (MT) {
                    const UT = MT.get(zT);
                    UT ? (nT || (nT = new nW.c(`${LT.name}_${TT.name}_MorphWeightAnimation`, "influence", UT.framePerSecond, nW.c.ANIMATIONTYPE_FLOAT, UT.NW, UT.enableBlending)), HT.push(UT.getKeys()[mT])) : HT.push({
                      frame: LT.from + ZT / BT * mT,
                      value: zT.influence,
                      inTangent: kT[0].inTangent ? 0 : void 0,
                      outTangent: kT[0].outTangent ? 0 : void 0
                    })
                  }
                }
              nT.setKeys(HT, !0);
              const cT = LW._DeduceAnimationInfo(nT);
              cT && LW._AddAnimation(`${LT.name}_${TT.name}_MorphWeightAnimation`, jT, TT, nT, cT.dataAccessorType, cT.animationChannelTargetPath, mT, WT, zT, MT, cT.useQuaternion, gT, !1, UT?.numTargets)
            })), jT.channels.length && jT.samplers.length && (kT?.set(LT, UT.length), UT.push(jT))
          }
        }
      }
      static _AddAnimation(TT, UT, mT, zT, MT, gT, nT, HT, kT, jT, lT, LT, pT, BT) {
        const ZT = LW._CreateNodeAnimation(mT, zT, gT, lT, LT);
        let cT, vT, fT, qT, iT, bT;
        if (ZT) {
          if (BT) {
            let TT, UT = 0;
            const mT = [];
            for (; ZT.inputs.length > 0;) TT = ZT.inputs.shift(), UT % BT == 0 && mT.push(TT), UT++;
            ZT.inputs = mT
          }
          const TT = nT.get(mT),
            zT = new Float32Array(ZT.inputs);
          cT = HT.createBufferView(zT), vT = HT.createAccessor(cT, "SCALAR", 5126, ZT.inputs.length, void 0, {
            min: [ZT.inputsMin],
            max: [ZT.inputsMax]
          }), jT.push(vT), fT = jT.length - 1;
          const kT = new WT.Quaternion,
            lT = new WT.JB,
            LT = new WT.JB,
            OT = mT instanceof zW.b,
            eT = rm(MT),
            YT = new Float32Array(ZT.outputs.length * eT);
          ZT.outputs.forEach((function(TT, UT) {
            let mT = TT;
            switch (gT) {
              case "translation":
                pT && (WT.JB.FromArrayToRef(TT, 0, LT), Gm(LT), LT.toArray(mT));
                break;
              case "rotation":
                4 === TT.length ? WT.Quaternion.FromArrayToRef(TT, 0, kT) : (mT = new Array(4), WT.JB.FromArrayToRef(TT, 0, lT), WT.Quaternion.FromEulerVectorToRef(lT, kT)), pT && (Nm(kT), OT && Em(kT)), kT.toArray(mT)
            }
            YT.set(mT, UT * eT)
          })), cT = HT.createBufferView(YT), vT = HT.createAccessor(cT, MT, 5126, ZT.outputs.length), jT.push(vT), qT = jT.length - 1, iT = {
            interpolation: ZT.samplerInterpolation,
            input: fT,
            output: qT
          }, UT.samplers.push(iT), bT = {
            sampler: UT.samplers.length - 1,
            target: {
              node: TT,
              path: gT
            }
          }, UT.channels.push(bT)
        }
      }
      static _CreateBakedAnimation(TT, UT, mT, MT, gT, nT, HT, kT, jT, lT, LT) {
        let pT;
        const BT = WT.Quaternion.Identity();
        let ZT, cT, vT, fT, qT, iT = null,
          bT = null;
        lT.min = zT.Tools.FloatRound(MT / nT);
        const OT = UT.getKeys();
        for (let WT = 0, eT = OT.length; WT < eT; ++WT) {
          if (cT = OT[WT], WT + 1 < eT)
            if (vT = OT[WT + 1], cT.value.equals && cT.value.equals(vT.value) || cT.value === vT.value) {
              if (0 !== WT) continue;
              qT = cT.frame
            } else qT = vT.frame;
          else {
            if (fT = OT[WT - 1], cT.value.equals && cT.value.equals(fT.value) || cT.value === fT.value) continue;
            qT = gT
          }
          if (qT)
            for (let WT = cT.frame; WT <= qT; WT += HT) {
              if (ZT = zT.Tools.FloatRound(WT / nT), ZT === iT) continue;
              iT = ZT, bT = ZT;
              const MT = {
                key: 0,
                repeatCount: 0,
                NW: UT.NW
              };
              pT = UT._interpolate(WT, MT), LW._SetInterpolatedValue(TT, pT, ZT, UT, mT, BT, kT, jT, LT)
            }
        }
        bT && (lT.max = bT)
      }
      static _ConvertFactorToVector3OrQuaternion(TT, UT, mT, MT, gT) {
        const nT = LW._GetBasePositionRotationOrScale(UT, MT, gT),
          HT = mT.targetProperty.split("."),
          kT = HT ? HT[1] : "",
          jT = gT ? WT.Quaternion.FromArray(nT).normalize() : WT.JB.FromArray(nT);
        switch (kT) {
          case "x":
          case "y":
          case "z":
            jT[kT] = TT;
            break;
          case "w":
            jT.w = TT;
            break;
          default:
            zT.Tools.Error(`glTFAnimation: Unsupported component name "${kT}"!`)
        }
        return jT
      }
      static _SetInterpolatedValue(TT, UT, mT, zT, MT, gT, nT, HT, kT) {
        let jT;
        nT.push(mT), "weights" !== MT ? (zT.dataType === nW.c.ANIMATIONTYPE_FLOAT && (UT = this._ConvertFactorToVector3OrQuaternion(UT, TT, zT, MT, kT)), "rotation" === MT ? (kT ? gT = UT : (jT = UT, WT.Quaternion.RotationYawPitchRollToRef(jT.y, jT.x, jT.z, gT)), HT.push(gT.cWT())) : (jT = UT, HT.push(jT.cWT()))) : HT.push([UT])
      }
      static _CreateLinearOrStepAnimation(TT, UT, mT, WT, zT, MT) {
        for (const gT of UT.getKeys()) WT.push(gT.frame / UT.framePerSecond), LW._AddKeyframeValue(gT, UT, zT, mT, TT, MT)
      }
      static _CreateCubicSplineAnimation(TT, UT, mT, WT, zT, MT) {
        UT.getKeys().forEach((function(gT) {
          WT.push(gT.frame / UT.framePerSecond), LW._AddSplineTangent(kW.INTANGENT, zT, mT, "CUBICSPLINE", gT, MT), LW._AddKeyframeValue(gT, UT, zT, mT, TT, MT), LW._AddSplineTangent(kW.OUTTANGENT, zT, mT, "CUBICSPLINE", gT, MT)
        }))
      }
      static _GetBasePositionRotationOrScale(TT, UT, mT) {
        let zT;
        if ("rotation" === UT)
          if (mT) {
            zT = (TT.rotationQuaternion ?? WT.Quaternion.Identity()).cWT()
          } else {
            zT = (TT.rotation ?? WT.JB.Zero()).cWT()
          }
        else if ("translation" === UT) {
          zT = (TT.position ?? WT.JB.Zero()).cWT()
        } else {
          zT = (TT.gp ?? WT.JB.One()).cWT()
        }
        return zT
      }
      static _AddKeyframeValue(TT, UT, mT, MT, gT, nT) {
        let HT;
        const kT = UT.dataType;
        if (kT === nW.c.ANIMATIONTYPE_VECTOR3) {
          let UT = TT.value.cWT();
          if ("rotation" === MT) {
            const TT = WT.JB.FromArray(UT);
            UT = WT.Quaternion.RotationYawPitchRoll(TT.y, TT.x, TT.z).cWT()
          }
          mT.push(UT)
        } else if (kT === nW.c.ANIMATIONTYPE_FLOAT) {
          if ("weights" === MT) mT.push([TT.value]);
          else if (HT = this._ConvertFactorToVector3OrQuaternion(TT.value, gT, UT, MT, nT), HT) {
            if ("rotation" === MT) {
              const TT = nT ? HT : WT.Quaternion.RotationYawPitchRoll(HT.y, HT.x, HT.z).normalize();
              mT.push(TT.cWT())
            }
            mT.push(HT.cWT())
          }
        } else kT === nW.c.ANIMATIONTYPE_QUATERNION ? mT.push(TT.value.normalize().cWT()) : zT.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(TT, UT, mT) {
        let WT, zT, MT = !1;
        if ("rotation" === UT && !mT) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let gT = 0, nT = TT.length; gT < nT; ++gT)
          if (zT = TT[gT], zT.inTangent || zT.outTangent)
            if (WT) {
              if ("CUBICSPLINE" !== WT) {
                WT = "LINEAR", MT = !0;
                break
              }
            } else WT = "CUBICSPLINE";
        else if (WT) {
          if ("CUBICSPLINE" === WT || zT.interpolation && 1 === zT.interpolation && "STEP" !== WT) {
            WT = "LINEAR", MT = !0;
            break
          }
        } else WT = zT.interpolation && 1 === zT.interpolation ? "STEP" : "LINEAR";
        return WT || (WT = "LINEAR"), {
          interpolationType: WT,
          shouldBakeAnimation: MT
        }
      }
      static _AddSplineTangent(TT, UT, mT, zT, MT, gT) {
        let nT;
        const HT = TT === kW.INTANGENT ? MT.inTangent : MT.outTangent;
        if ("CUBICSPLINE" === zT) {
          if ("rotation" === mT)
            if (HT)
              if (gT) nT = HT.cWT();
              else {
                const TT = HT;
                nT = WT.Quaternion.RotationYawPitchRoll(TT.y, TT.x, TT.z).cWT()
              }
          else nT = [0, 0, 0, 0];
          else nT = "weights" === mT ? HT ? [HT] : [0] : HT ? HT.cWT() : [0, 0, 0];
          UT.push(nT)
        }
      }
      static _CalculateMinMaxKeyFrames(TT) {
        let UT = 1 / 0,
          mT = -1 / 0;
        return TT.forEach((function(TT) {
          UT = Math.min(UT, TT.frame), mT = Math.max(mT, TT.frame)
        })), {
          min: UT,
          max: mT
        }
      }
    }

    function pW(TT, UT, mT, MT, gT, nT) {
      const HT = {
          attributes: {},
          influence: TT.influence,
          name: TT.name
        },
        kT = UT.geometry;
      if (!kT) return zT.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), HT;
      const lT = nT ? -1 : 1,
        LT = WT.JB.Zero();
      let pT, BT;
      if (TT.hasPositions) {
        const MT = TT.getPositions(),
          nT = kT.getVerticesData(jT.i.PositionKind);
        if (nT) {
          const TT = new Float32Array(nT.length),
            UT = [1 / 0, 1 / 0, 1 / 0],
            zT = [-1 / 0, -1 / 0, -1 / 0];
          BT = nT.length / 3, pT = 0;
          for (let mT = pT; mT < BT; ++mT) {
            const gT = WT.JB.FromArray(nT, 3 * mT);
            WT.JB.FromArray(MT, 3 * mT).subtractToRef(gT, LT), LT.x *= lT, UT[0] = Math.min(UT[0], LT.x), zT[0] = Math.max(zT[0], LT.x), UT[1] = Math.min(UT[1], LT.y), zT[1] = Math.max(zT[1], LT.y), UT[2] = Math.min(UT[2], LT.z), zT[2] = Math.max(zT[2], LT.z), TT[3 * mT] = LT.x, TT[3 * mT + 1] = LT.y, TT[3 * mT + 2] = LT.z
          }
          const kT = mT.createBufferView(TT, 12),
            jT = mT.createAccessor(kT, "VEC3", 5126, MT.length / 3, 0, {
              min: UT,
              max: zT
            });
          gT.push(jT), HT.attributes.POSITION = gT.length - 1
        } else zT.Tools.Warn(`Morph target positions for mesh ${UT.name} were not exported. Mesh does not have position vertex data`)
      }
      if (TT.hasNormals) {
        const MT = TT.getNormals(),
          nT = kT.getVerticesData(jT.i.NormalKind);
        if (nT) {
          const TT = new Float32Array(nT.length);
          BT = nT.length / 3, pT = 0;
          for (let mT = pT; mT < BT; ++mT) {
            const UT = WT.JB.FromArray(nT, 3 * mT).normalize();
            WT.JB.FromArray(MT, 3 * mT).normalize().subtractToRef(UT, LT), TT[3 * mT] = LT.x * lT, TT[3 * mT + 1] = LT.y, TT[3 * mT + 2] = LT.z
          }
          const UT = mT.createBufferView(TT, 12),
            zT = mT.createAccessor(UT, "VEC3", 5126, MT.length / 3, 0);
          gT.push(zT), HT.attributes.NORMAL = gT.length - 1
        } else zT.Tools.Warn(`Morph target normals for mesh ${UT.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (TT.hasTangents) {
        const MT = TT.getTangents(),
          nT = kT.getVerticesData(jT.i.TangentKind);
        if (nT) {
          BT = nT.length / 4;
          const TT = new Float32Array(3 * BT);
          pT = 0;
          for (let mT = pT; mT < BT; ++mT) {
            const UT = WT.JB.FromArray(nT, 4 * mT);
            Sm(UT);
            const zT = WT.JB.FromArray(MT, 3 * mT);
            Sm(zT), zT.subtractToRef(UT, LT), TT[3 * mT] = LT.x * lT, TT[3 * mT + 1] = LT.y, TT[3 * mT + 2] = LT.z
          }
          const UT = mT.createBufferView(TT, 12),
            zT = mT.createAccessor(UT, "VEC3", 5126, BT, 0);
          gT.push(zT), HT.attributes.TANGENT = gT.length - 1
        } else zT.Tools.Warn(`Morph target tangents for mesh ${UT.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (TT.hasColors) {
        const MT = TT.getColors(),
          nT = kT.getVerticesData(jT.i.ColorKind),
          lT = kT.getVertexBuffer(jT.i.ColorKind);
        if (nT && lT) {
          const TT = lT.getSize();
          BT = nT.length / TT;
          const UT = new Float32Array(BT * TT);
          pT = 0;
          for (let mT = pT; mT < BT; ++mT)
            if (3 === TT) {
              const zT = WT.JB.FromArray(nT, mT * TT);
              WT.JB.FromArray(MT, mT * TT).subtractToRef(zT, LT), UT[3 * mT] = LT.x, UT[3 * mT + 1] = LT.y, UT[3 * mT + 2] = LT.z
            } else if (4 === TT) {
            const zT = new WT.Vector4,
              gT = WT.Vector4.FromArray(nT, mT * TT);
            WT.Vector4.FromArray(MT, mT * TT).subtractToRef(gT, zT), UT[4 * mT] = zT.x, UT[4 * mT + 1] = zT.y, UT[4 * mT + 2] = zT.z, UT[4 * mT + 3] = zT.w
          } else zT.Tools.Warn(`Unsupported number of components for color attribute: ${TT}`);
          const kT = mT.createBufferView(UT, 4 * TT),
            jT = mT.createAccessor(kT, 3 === TT ? "VEC3" : "VEC4", 5126, BT, 0);
          gT.push(jT), HT.attributes.COLOR_0 = gT.length - 1
        } else zT.Tools.Warn(`Morph target colors for mesh ${UT.name} were not exported. Mesh does not have colors vertex data`)
      }
      return HT
    }
    var BW = mT(41714);
    class ZW {}
    ZW.DEFAULT_COLOR = GT.d.White(), ZW.DEFAULT_WIDTH_ATTENUATED = 1, ZW.DEFAULT_WIDTH = .1;
    var cW = mT(41239);
    class vW {
      constructor(TT) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = TT
      }
      moveTo(TT, UT) {
        this._currentPath = new cW.g(TT, UT), this._tempPaths.push(this._currentPath)
      }
      lineTo(TT, UT) {
        this._currentPath.addLineTo(TT, UT)
      }
      quadraticCurveTo(TT, UT, mT, WT) {
        this._currentPath.addQuadraticCurveTo(TT, UT, mT, WT, this._resolution)
      }
      bezierCurveTo(TT, UT, mT, WT, zT, MT) {
        this._currentPath.addBezierCurveTo(TT, UT, mT, WT, zT, MT, this._resolution)
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

    function fW(TT, UT, mT, WT, zT, MT) {
      const gT = MT.glyphs[TT] || MT.glyphs["?"];
      if (!gT) return null;
      const nT = new vW(zT);
      if (gT.o) {
        const TT = gT.o.split(" ");
        for (let zT = 0, MT = TT.length; zT < MT;) {
          switch (TT[zT++]) {
            case "m": {
              const MT = parseInt(TT[zT++]) * UT + mT,
                gT = parseInt(TT[zT++]) * UT + WT;
              nT.moveTo(MT, gT);
              break
            }
            case "l": {
              const MT = parseInt(TT[zT++]) * UT + mT,
                gT = parseInt(TT[zT++]) * UT + WT;
              nT.lineTo(MT, gT);
              break
            }
            case "q": {
              const MT = parseInt(TT[zT++]) * UT + mT,
                gT = parseInt(TT[zT++]) * UT + WT,
                HT = parseInt(TT[zT++]) * UT + mT,
                kT = parseInt(TT[zT++]) * UT + WT;
              nT.quadraticCurveTo(HT, kT, MT, gT);
              break
            }
            case "b": {
              const MT = parseInt(TT[zT++]) * UT + mT,
                gT = parseInt(TT[zT++]) * UT + WT,
                HT = parseInt(TT[zT++]) * UT + mT,
                kT = parseInt(TT[zT++]) * UT + WT,
                jT = parseInt(TT[zT++]) * UT + mT,
                lT = parseInt(TT[zT++]) * UT + WT;
              nT.bezierCurveTo(HT, kT, jT, lT, MT, gT);
              break
            }
          }
        }
      }
      return nT.extractHoles(), {
        offsetX: gT.ha * UT,
        shapePath: nT
      }
    }

    function qW(TT, UT, mT, WT) {
      const zT = Array.from(TT),
        MT = UT / WT.resolution,
        gT = (WT.boundingBox.yMax - WT.boundingBox.yMin + WT.underlineThickness) * MT,
        nT = [];
      let HT = 0,
        kT = 0;
      for (let jT = 0; jT < zT.length; jT++) {
        const TT = zT[jT];
        if ("\n" === TT) HT = 0, kT -= gT;
        else {
          const UT = fW(TT, MT, HT, kT, mT, WT);
          UT && (HT += UT.offsetX, nT.push(UT.shapePath))
        }
      }
      return nT
    }
    class iW {
      static ConvertPoints(TT, UT) {
        if (TT.length && Array.isArray(TT) && "number" === typeof TT[0]) return [TT];
        if (TT.length && Array.isArray(TT[0]) && "number" === typeof TT[0][0]) return TT;
        if (TT.length && !Array.isArray(TT[0]) && TT[0] instanceof PT.p) {
          const UT = [];
          for (let mT = 0; mT < TT.length; mT++) {
            const WT = TT[mT];
            UT.push(WT.x, WT.y, WT.z)
          }
          return [UT]
        }
        if (TT.length > 0 && Array.isArray(TT[0]) && TT[0].length > 0 && TT[0][0] instanceof PT.p) {
          const UT = [],
            mT = TT;
          for (const TT of mT) UT.push(TT.flatMap((TT => [TT.x, TT.y, TT.z])));
          return UT
        }
        if (TT instanceof Float32Array) {
          if (UT?.floatArrayStride) {
            const mT = [],
              WT = 3 * UT.floatArrayStride;
            for (let UT = 0; UT < TT.length; UT += WT) {
              const zT = new Array(WT);
              for (let mT = 0; mT < WT; mT++) zT[mT] = TT[UT + mT];
              mT.push(zT)
            }
            return mT
          }
          return [Array.from(TT)]
        }
        if (TT.length && TT[0] instanceof Float32Array) {
          const UT = [];
          for (const mT of TT) UT.push(Array.from(mT));
          return UT
        }
        return []
      }
      static OmitZeroLengthPredicate(TT, UT, mT) {
        const WT = [];
        return UT.subtract(TT).lengthSquared() > 0 && WT.push([TT, UT]), mT.subtract(UT).lengthSquared() > 0 && WT.push([UT, mT]), TT.subtract(mT).lengthSquared() > 0 && WT.push([mT, TT]), 0 === WT.length ? null : WT
      }
      static OmitDuplicatesPredicate(TT, UT, mT, WT) {
        const zT = [];
        return iW._SearchInPoints(TT, UT, WT) || zT.push([TT, UT]), iW._SearchInPoints(UT, mT, WT) || zT.push([UT, mT]), iW._SearchInPoints(mT, TT, WT) || zT.push([mT, TT]), 0 === zT.length ? null : zT
      }
      static _SearchInPoints(TT, UT, mT) {
        for (const WT of mT)
          for (let mT = 0; mT < WT.length; mT++)
            if (WT[mT]?.equals(TT) && (WT[mT + 1]?.equals(UT) || WT[mT - 1]?.equals(UT))) return !0;
        return !1
      }
      static MeshesToLines(TT, UT) {
        const mT = [];
        for (let WT = 0; WT < TT.length; WT++) {
          const zT = TT[WT],
            MT = zT.getVerticesData(VT.i.PositionKind),
            gT = zT.vWT();
          if (MT && gT)
            for (let TT = 0, nT = 0; TT < gT.length; TT++) {
              const HT = 3 * gT[nT++],
                kT = 3 * gT[nT++],
                jT = 3 * gT[nT++],
                lT = new PT.p(MT[HT], MT[HT + 1], MT[HT + 2]),
                LT = new PT.p(MT[kT], MT[kT + 1], MT[kT + 2]),
                pT = new PT.p(MT[jT], MT[jT + 1], MT[jT + 2]);
              if (UT) {
                const nT = UT(lT, LT, pT, mT, TT, HT, zT, WT, MT, gT);
                if (nT)
                  for (const TT of nT) mT.push(TT)
              } else mT.push([lT, LT], [LT, pT], [pT, lT])
            }
        }
        return mT
      }
      static ToVector3Array(TT) {
        if (Array.isArray(TT[0])) {
          const UT = [],
            mT = TT;
          for (const TT of mT) {
            const mT = [];
            for (let UT = 0; UT < TT.length; UT += 3) mT.push(new PT.p(TT[UT], TT[UT + 1], TT[UT + 2]));
            UT.push(mT)
          }
          return UT
        }
        const UT = TT,
          mT = [];
        for (let WT = 0; WT < UT.length; WT += 3) mT.push(new PT.p(UT[WT], UT[WT + 1], UT[WT + 2]));
        return mT
      }
      static ToNumberArray(TT) {
        return TT.flatMap((TT => [TT.x, TT.y, TT.z]))
      }
      static GetPointsCountInfo(TT) {
        const UT = new Array(TT.length);
        let mT = 0;
        for (let WT = TT.length; WT--;) UT[WT] = TT[WT].length / 3, mT += UT[WT];
        return {
          total: mT,
          counts: UT
        }
      }
      static GetLineLength(TT) {
        if (0 === TT.length) return 0;
        let UT;
        UT = "number" === typeof TT[0] ? iW.ToVector3Array(TT) : TT;
        const mT = PT.l.JB[0];
        let WT = 0;
        for (let zT = 0; zT < UT.length - 1; zT++) {
          const TT = UT[zT];
          WT += UT[zT + 1].subtractToRef(TT, mT).length()
        }
        return WT
      }
      static GetLineLengthArray(TT, UT) {
        const mT = UT ? new Float32Array(UT, 0, TT.length / 3) : new Float32Array(TT.length / 3);
        let WT = 0;
        for (let zT = 0, MT = TT.length / 3 - 1; zT < MT; zT++) {
          let UT = TT[3 * zT + 0],
            MT = TT[3 * zT + 1],
            gT = TT[3 * zT + 2];
          UT -= TT[3 * zT + 3], MT -= TT[3 * zT + 4], gT -= TT[3 * zT + 5];
          WT += Math.sqrt(UT * UT + MT * MT + gT * gT), mT[zT + 1] = WT
        }
        return mT
      }
      static SegmentizeSegmentByCount(TT, UT, mT) {
        const WT = [],
          zT = UT.subtract(TT),
          MT = PT.l.JB[0];
        MT.B3(mT);
        const gT = PT.l.JB[1];
        zT.divideToRef(MT, gT);
        let nT = TT.clone();
        WT.push(nT);
        for (let HT = 0; HT < mT; HT++) nT = nT.clone(), WT.push(nT.addInPlace(gT));
        return WT
      }
      static SegmentizeLineBySegmentLength(TT, UT) {
        const mT = TT[0] instanceof PT.p ? iW.GetLineSegments(TT) : "number" === typeof TT[0] ? iW.GetLineSegments(iW.ToVector3Array(TT)) : TT,
          WT = [];
        for (const zT of mT)
          if (zT.length > UT) {
            const TT = iW.SegmentizeSegmentByCount(zT.point1, zT.point2, Math.ceil(zT.length / UT));
            for (const UT of TT) WT.push(UT)
          } else WT.push(zT.point1), WT.push(zT.point2);
        return WT
      }
      static SegmentizeLineBySegmentCount(TT, UT) {
        const mT = "number" === typeof TT[0] ? iW.ToVector3Array(TT) : TT,
          WT = iW.GetLineLength(mT) / UT;
        return iW.SegmentizeLineBySegmentLength(mT, WT)
      }
      static GetLineSegments(TT) {
        const UT = [];
        for (let mT = 0; mT < TT.length - 1; mT++) {
          const WT = TT[mT],
            zT = TT[mT + 1],
            MT = zT.subtract(WT).length();
          UT.push({
            point1: WT,
            point2: zT,
            length: MT
          })
        }
        return UT
      }
      static GetMinMaxSegmentLength(TT) {
        const UT = iW.GetLineSegments(TT).sort((TT => TT.length));
        return {
          min: UT[0].length,
          max: UT[UT.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const zT = UT * mT;
        let MT = 0,
          gT = 0;
        const nT = TT.length;
        for (let kT = 0; kT < nT; kT++) {
          if (zT <= MT + TT[kT].length) {
            gT = kT;
            break
          }
          MT += TT[kT].length
        }
        const HT = (zT - MT) / TT[gT].length;
        return TT[gT].point2.subtractToRef(TT[gT].point1, PT.l.JB[0]), PT.l.JB[0].scaleToRef(HT, PT.l.JB[1]), WT || PT.l.JB[1].addInPlace(TT[gT].point1), PT.l.JB[1].clone()
      }
      static GetCircleLinePoints(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / UT;
        const MT = [];
        for (let gT = 0; gT <= UT; gT++) MT.push(new PT.p(Math.cos(gT * zT) * TT, Math.sin(gT * zT) * WT, mT));
        return MT
      }
      static GetBezierLinePoints(TT, UT, mT, WT) {
        return cW.e.CreateQuadraticBezier(TT, UT, mT, WT).getPoints().flatMap((TT => [TT.x, TT.y, TT.z]))
      }
      static GetArrowCap(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [TT.clone(), TT.add(UT.multiplyByFloats(mT, mT, mT))],
          widths: [WT, zT, MT, gT]
        }
      }
      static GetPointsFromText(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          MT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const gT = [],
          nT = qW(TT, UT, mT, WT);
        for (const HT of nT) {
          for (const TT of HT.paths) {
            const UT = [],
              mT = TT.getPoints();
            for (const TT of mT) UT.push(TT.x, TT.y, zT);
            gT.push(UT)
          }
          if (MT)
            for (const TT of HT.holes) {
              const UT = [],
                mT = TT.getPoints();
              for (const TT of mT) UT.push(TT.x, TT.y, zT);
              gT.push(UT)
            }
        }
        return gT
      }
      static Color3toRGBAUint8(TT) {
        const UT = new Uint8Array(4 * TT.length);
        for (let mT = 0, WT = 0; mT < TT.length; mT++) UT[WT++] = 255 * TT[mT].r, UT[WT++] = 255 * TT[mT].g, UT[WT++] = 255 * TT[mT].b, UT[WT++] = 255;
        return UT
      }
      static CreateColorsTexture(TT, UT, mT, WT) {
        const zT = WT.eB().getCaps().maxTextureSize ?? 1,
          MT = UT.length > zT ? zT : UT.length,
          gT = Math.ceil(UT.length / zT);
        gT > 1 && (UT = [...UT, ...Array(MT * gT - UT.length).fill(UT[0])]);
        const nT = iW.Color3toRGBAUint8(UT),
          HT = new OT.b(nT, MT, gT, jm.e.TEXTUREFORMAT_RGBA, WT, !1, !0, mT);
        return HT.name = TT, HT
      }
      static PrepareEmptyColorsTexture(TT) {
        if (!ZW.EmptyColorsTexture) {
          const UT = new Uint8Array(4);
          ZW.EmptyColorsTexture = new OT.b(UT, 1, 1, jm.e.TEXTUREFORMAT_RGBA, TT, !1, !1, OT.b.NEAREST_NEAREST), ZW.EmptyColorsTexture.name = "grlEmptyColorsTexture", ZW.EmptyColorsTexture.SF.addOnce((() => {
            ZW.EmptyColorsTexture = null
          }))
        }
        return ZW.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        ZW.EmptyColorsTexture?.dispose(), ZW.EmptyColorsTexture = null
      }
      static BooleanToNumber(TT) {
        return TT ? 1 : 0
      }
    }
    class bW extends uT.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class OW extends CT.e {
      isCompatible(TT) {
        return !0
      }
      constructor(TT, UT, mT) {
        mT = mT || {
          color: ZW.DEFAULT_COLOR
        };
        const WT = new bW;
        WT.GREASED_LINE_HAS_COLOR = !!mT.color && !mT.useColors, WT.GREASED_LINE_SIZE_ATTENUATION = mT.sizeAttenuation ?? !1, WT.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === mT.colorDistributionType, WT.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (UT ?? TT.KF()).useRightHandedSystem, WT.GREASED_LINE_CAMERA_FACING = mT.cameraFacing ?? !0, super(TT, OW.GREASED_LINE_MATERIAL_NAME, 200, WT, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = mT?.forceGLSL || OW.ForceGLSL, this._scene = UT ?? TT.KF(), this._engine = this._scene.eB(), this._cameraFacing = mT.cameraFacing ?? !0, this.visibility = mT.visibility ?? 1, this.useDash = mT.useDash ?? !1, this.dashRatio = mT.dashRatio ?? .5, this.dashOffset = mT.dashOffset ?? 0, this.width = mT.width ? mT.width : mT.sizeAttenuation ? ZW.DEFAULT_WIDTH_ATTENUATED : ZW.DEFAULT_WIDTH, this._sizeAttenuation = mT.sizeAttenuation ?? !1, this.colorMode = mT.colorMode ?? 0, this._color = mT.color ?? null, this.useColors = mT.useColors ?? !1, this._colorsDistributionType = mT.colorDistributionType ?? 0, this.colorsSampling = mT.colorsSampling ?? OT.b.NEAREST_NEAREST, this._colors = mT.colors ?? null, this.dashCount = mT.dashCount ?? 1, this.resolution = mT.resolution ?? new PT.o(this._engine.getRenderWidth(), this._engine.getRenderHeight()), mT.colorsTexture ? this.colorsTexture = mT.colorsTexture : this._colors ? this.colorsTexture = iW.CreateColorsTexture(`${TT.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? ZW.DEFAULT_COLOR, iW.PrepareEmptyColorsTexture(this._scene)), this._engine.SF.add((() => {
          iW.DisposeEmptyColorsTexture()
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
        const UT = [{
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
        return this._cameraFacing && UT.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === TT && UT.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: UT,
          vertex: this._cameraFacing && this._isGLSL(TT) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(TT) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(TT) {
        if (this._cameraFacing) {
          TT.R7("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || TT.R7("viewProjection", this._scene.getTransformMatrix());
          const UT = PT.l.Vector4[0];
          UT.x = this._aspect, UT.y = this._resolution.x, UT.z = this._resolution.y, UT.w = this.width, TT.updateVector4("grl_aspect_resolution_lineWidth", UT)
        }
        const UT = PT.l.Vector4[0];
        UT.x = iW.BooleanToNumber(this.useDash), UT.y = this._dashArray, UT.z = this.dashOffset, UT.w = this.dashRatio, TT.updateVector4("grl_dashOptions", UT);
        const mT = PT.l.Vector4[1];
        mT.x = this.colorMode, mT.y = this.visibility, mT.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, mT.w = iW.BooleanToNumber(this.useColors), TT.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", mT), this._color && TT.updateColor3("grl_singleColor", this._color);
        const WT = this.colorsTexture ?? ZW.EmptyColorsTexture;
        TT.setTexture("grl_colors", WT), TT.updateFloat2("grl_textureSize", WT?.getSize().width ?? 1, WT?.getSize().height ?? 1)
      }
      prepareDefines(TT, UT, mT) {
        TT.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, TT.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, TT.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, TT.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = UT.useRightHandedSystem, TT.GREASED_LINE_CAMERA_FACING = this._cameraFacing, TT.GREASED_LINE_USE_OFFSETS = !!mT.offsets
      }
      getClassName() {
        return OW.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(UT) ? function(TT, UT) {
          if ("vertex" === TT) {
            const TT = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return UT && (TT["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), TT
          }
          return "fragment" === TT ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(TT, this._cameraFacing) : function(TT, UT) {
          if ("vertex" === TT) {
            const TT = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return UT && (TT["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), TT
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
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const WT = this._colors?.length ?? 0;
        if (this._colors = TT, null !== TT && 0 !== TT.length) {
          if (!UT || mT)
            if (this.colorsTexture && WT === TT.length && !mT) {
              const UT = iW.Color3toRGBAUint8(TT);
              this.colorsTexture.update(UT)
            } else this.colorsTexture?.dispose(), this.colorsTexture = iW.CreateColorsTexture(`${this._material.name}-colors-texture`, TT, this.colorsSampling, this._scene)
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
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== TT || null !== this._color && null === TT ? (this._color = TT, UT || this.markAllDefinesAsDirty()) : this._color = TT
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
          UT = {
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
        return this._colors && (UT.colors = this._colors), this._color && (UT.color = this._color), TT.greasedLineMaterialOptions = UT, TT
      }
      parse(TT, UT, mT) {
        super.parse(TT, UT, mT);
        const WT = TT.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), WT.color && this.setColor(WT.color, !0), WT.colorDistributionType && (this.colorsDistributionType = WT.colorDistributionType), WT.colors && (this.colors = WT.colors), WT.colorsSampling && (this.colorsSampling = WT.colorsSampling), WT.colorMode && (this.colorMode = WT.colorMode), WT.useColors && (this.useColors = WT.useColors), WT.visibility && (this.visibility = WT.visibility), WT.useDash && (this.useDash = WT.useDash), WT.dashCount && (this.dashCount = WT.dashCount), WT.dashRatio && (this.dashRatio = WT.dashRatio), WT.dashOffset && (this.dashOffset = WT.dashOffset), WT.width && (this.width = WT.width), WT.sizeAttenuation && (this.sizeAttenuation = WT.sizeAttenuation), WT.resolution && (this.resolution = WT.resolution), this.colors ? this.colorsTexture = iW.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, UT) : iW.PrepareEmptyColorsTexture(UT), this.markAllDefinesAsDirty()
      }
      copyTo(TT) {
        const UT = TT;
        UT.colorsTexture?.dispose(), this._colors && (UT.colorsTexture = iW.CreateColorsTexture(`${UT._material.name}-colors-texture`, this._colors, UT.colorsSampling, this._scene)), UT.setColor(this.color, !0), UT.colorsDistributionType = this.colorsDistributionType, UT.colorsSampling = this.colorsSampling, UT.colorMode = this.colorMode, UT.useColors = this.useColors, UT.visibility = this.visibility, UT.useDash = this.useDash, UT.dashCount = this.dashCount, UT.dashRatio = this.dashRatio, UT.dashOffset = this.dashOffset, UT.width = this.width, UT.sizeAttenuation = this.sizeAttenuation, UT.resolution = this.resolution, UT.markAllDefinesAsDirty()
      }
      _isGLSL(TT) {
        return 0 === TT || this._forceGLSL
      }
    }
    OW.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", OW.ForceGLSL = !1;
    var eW = mT(40535),
      YW = mT(40546),
      JW = mT(38793),
      xW = mT(40593),
      dW = mT(39916);
    class wW extends xW.o {
      constructor(TT, UT, WT) {
        const zT = UT.eB(),
          MT = zT.isWebGPU && !(WT.forceGLSL || wW.ForceGLSL),
          gT = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        UT.useRightHandedSystem && gT.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const nT = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        WT.cameraFacing ? (gT.push("GREASED_LINE_CAMERA_FACING"), nT.push("grl_previousAndSide", "grl_nextAndCounters")) : (nT.push("grl_slopes"), nT.push("grl_counters"));
        const HT = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (MT || HT.push("world", "viewProjection", "view", "projection"), super(TT, UT, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: MT ? ["Scene", "Mesh"] : void 0,
            attributes: nT,
            uniforms: HT,
            samplers: MT ? [] : ["grlColors"],
            defines: gT,
            extraInitializationsAsync: async () => {
              MT ? await Promise.all([mT.e(339).then((() => mT(61751))), mT.e(395).then((() => mT(61755)))]) : await Promise.all([mT.e(332).then((() => mT(61761))), mT.e(396).then((() => mT(61767)))])
            },
            shaderLanguage: MT ? 1 : 0
          }), this._color = GT.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, WT = WT || {
            color: ZW.DEFAULT_COLOR
          }, this.visibility = WT.visibility ?? 1, this.useDash = WT.useDash ?? !1, this.dashRatio = WT.dashRatio ?? .5, this.dashOffset = WT.dashOffset ?? 0, this.dashCount = WT.dashCount ?? 1, this.width = WT.width ? WT.width : WT.sizeAttenuation && WT.cameraFacing ? ZW.DEFAULT_WIDTH_ATTENUATED : ZW.DEFAULT_WIDTH, this.sizeAttenuation = WT.sizeAttenuation ?? !1, this.color = WT.color ?? GT.d.White(), this.useColors = WT.useColors ?? !1, this.colorsDistributionType = WT.colorDistributionType ?? 0, this.colorsSampling = WT.colorsSampling ?? OT.b.NEAREST_NEAREST, this.colorMode = WT.colorMode ?? 0, this._colors = WT.colors ?? null, this._cameraFacing = WT.cameraFacing ?? !0, this.resolution = WT.resolution ?? new PT.o(zT.getRenderWidth(), zT.getRenderHeight()), WT.colorsTexture ? this.colorsTexture = WT.colorsTexture : this._colors ? this.colorsTexture = iW.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, UT) : (this._color = this._color ?? ZW.DEFAULT_COLOR, this.colorsTexture = iW.PrepareEmptyColorsTexture(UT)), MT) {
          const TT = new dW.b;
          TT.setParameters(), TT.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", TT)
        }
        zT.SF.add((() => {
          iW.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== ZW.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new PT.o(this._colorMode, this._colorsDistributionType))
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
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const WT = this._colors?.length ?? 0;
        if (this._colors = TT, null !== TT && 0 !== TT.length) {
          if (!UT || mT)
            if (this._colorsTexture && WT === TT.length && !mT) {
              const UT = iW.Color3toRGBAUint8(TT);
              this._colorsTexture.update(UT)
            } else this._colorsTexture && this._colorsTexture !== ZW.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = iW.CreateColorsTexture(`${this.name}-colors-texture`, TT, this.colorsSampling, this.KF())
        } else {
          this._colorsTexture && this._colorsTexture !== ZW.EmptyColorsTexture && this._colorsTexture.dispose();
          const TT = this.KF();
          TT && (this.colorsTexture = iW.PrepareEmptyColorsTexture(TT))
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
        this._useColors = TT, this.setFloat("grlUseColors", iW.BooleanToNumber(TT))
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
        this._useDash = TT, this.setFloat("grlUseDash", iW.BooleanToNumber(TT))
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
        this._sizeAttenuation = TT, this.setFloat("grlSizeAttenuation", iW.BooleanToNumber(TT))
      }
      get color() {
        return this._color
      }
      set color(TT) {
        this.setColor(TT)
      }
      setColor(TT) {
        TT = TT ?? ZW.DEFAULT_COLOR, this._color = TT, this.setColor3("grlColor", TT)
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
          UT = {
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
        return this._colors && (UT.colors = this._colors), TT.greasedLineMaterialOptions = UT, TT
      }
      parse(TT, UT, mT) {
        const WT = TT.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), WT.color && (this.color = WT.color), WT.colorDistributionType && (this.colorsDistributionType = WT.colorDistributionType), WT.colorsSampling && (this.colorsSampling = WT.colorsSampling), WT.colorMode && (this.colorMode = WT.colorMode), WT.useColors && (this.useColors = WT.useColors), WT.visibility && (this.visibility = WT.visibility), WT.useDash && (this.useDash = WT.useDash), WT.dashCount && (this.dashCount = WT.dashCount), WT.dashRatio && (this.dashRatio = WT.dashRatio), WT.dashOffset && (this.dashOffset = WT.dashOffset), WT.width && (this.width = WT.width), WT.sizeAttenuation && (this.sizeAttenuation = WT.sizeAttenuation), WT.resolution && (this.resolution = WT.resolution), WT.colors ? this.colorsTexture = iW.CreateColorsTexture(`${this.name}-colors-texture`, WT.colors, this.colorsSampling, this.KF()) : this.colorsTexture = iW.PrepareEmptyColorsTexture(UT), this._cameraFacing = WT.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var tW, aW, yW;
    wW.ForceGLSL = !1,
      function(TT) {
        TT[TT.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", TT[TT.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(tW || (tW = {})),
      function(TT) {
        TT[TT.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", TT[TT.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", TT[TT.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(aW || (aW = {})),
      function(TT) {
        TT[TT.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", TT[TT.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", TT[TT.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", TT[TT.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", TT[TT.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(yW || (yW = {}));
    class XW extends eW.d {
      constructor(TT, UT, mT) {
        super(TT, UT, null, null, !1, !1), this.name = TT, this._options = mT, this._lazy = !1, this._updatable = !1, this._engine = UT.eB(), this._lazy = mT.lazy ?? !1, this._updatable = mT.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = mT.colorPointers ?? [], this._widths = mT.widths ?? new Array(mT.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(TT) {
        let UT = 0;
        for (const WT of this._points) UT += WT.length;
        const mT = UT / 3 * 2 - this._widths.length;
        for (let WT = 0; WT < mT; WT++) this._widths.push(TT)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.dB && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(TT, UT) {
        for (const mT of TT) this._points.push(mT);
        this._lazy || this.setPoints(this._points, UT)
      }
      dispose(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(TT, UT)
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
        this.material instanceof wW && this.material.setDefine("GREASED_LINE_USE_OFFSETS", TT?.length > 0), this._offsets = TT, this._offsetsBuffer ? this._offsetsBuffer.update(TT) : this._createOffsetsBuffer(TT)
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
        if (this.material && this.material instanceof wW) return this.material;
        const TT = this.material?.pluginManager?.getPlugin(OW.GREASED_LINE_MATERIAL_NAME);
        return TT || void 0
      }
      get points() {
        const TT = [];
        return JW.c.DeepCopy(this._points, TT), TT
      }
      setPoints(TT, UT) {
        this._points = iW.ConvertPoints(TT, UT?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), UT?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, UT)
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
        const UT = new YW.d;
        return UT.positions = this._vertexPositions, UT.indices = this._indices, UT.uvs = this._uvs, TT && (UT.normals = [], YW.d.ComputeNormals(this._vertexPositions, this._indices, UT.normals)), UT.applyToMesh(this, this._options.updatable), UT
      }
      _createOffsetsBuffer(TT) {
        const UT = this._scene.eB(),
          mT = new VT.c(UT, TT, this._updatable, 3);
        this.setVerticesBuffer(mT.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = mT
      }
    }
    class IW {
      constructor(TT, UT) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = TT, this.wasAddedByNoopNode = UT
      }
      getIndicesAccessor(TT, UT, mT, WT, zT) {
        return this._indicesAccessorMap.get(TT)?.get(UT)?.get(mT)?.get(WT)?.get(zT)
      }
      setIndicesAccessor(TT, UT, mT, WT, zT, MT) {
        let gT = this._indicesAccessorMap.get(TT);
        gT || (gT = new Map, this._indicesAccessorMap.set(TT, gT));
        let nT = gT.get(UT);
        nT || (nT = new Map, gT.set(UT, nT));
        let HT = nT.get(mT);
        HT || (HT = new Map, nT.set(mT, HT));
        let kT = HT.get(WT);
        kT || (kT = new Map, HT.set(WT, kT)), kT.set(zT, MT)
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
      setVertexBufferView(TT, UT) {
        this._vertexBufferViewMap.set(TT, UT)
      }
      setRemappedBufferView(TT, UT, mT) {
        this._remappedBufferView.set(TT, new Map), this._remappedBufferView.get(TT).set(UT, mT)
      }
      getRemappedBufferView(TT, UT) {
        return this._remappedBufferView.get(TT)?.get(UT)
      }
      getVertexAccessor(TT, UT, mT) {
        return this._vertexAccessorMap.get(TT)?.get(UT)?.get(mT)
      }
      setVertexAccessor(TT, UT, mT, WT) {
        let zT = this._vertexAccessorMap.get(TT);
        zT || (zT = new Map, this._vertexAccessorMap.set(TT, zT));
        let MT = zT.get(UT);
        MT || (MT = new Map, zT.set(UT, MT)), MT.set(mT, WT)
      }
      hasVertexColorAlpha(TT) {
        return this._vertexMapColorAlpha.get(TT) || !1
      }
      setHasVertexColorAlpha(TT, UT) {
        return this._vertexMapColorAlpha.set(TT, UT)
      }
      getMesh(TT) {
        return this._meshMap.get(TT)
      }
      setMesh(TT, UT) {
        this._meshMap.set(TT, UT)
      }
      bindMorphDataToMesh(TT, UT) {
        const mT = this._meshMorphTargetMap.get(TT) || [];
        this._meshMorphTargetMap.set(TT, mT), -1 === mT.indexOf(UT) && mT.push(UT)
      }
      getMorphTargetsFromMesh(TT) {
        return this._meshMorphTargetMap.get(TT)
      }
    }
    class QW {
      _ApplyExtension(TT, UT, mT, WT) {
        if (mT >= UT.length) return Promise.resolve(TT);
        const zT = WT(UT[mT], TT);
        return zT ? zT.then((async TT => TT ? await this._ApplyExtension(TT, UT, mT + 1, WT) : null)) : this._ApplyExtension(TT, UT, mT + 1, WT)
      }
      _ApplyExtensions(TT, UT) {
        const mT = [];
        for (const WT of QW._ExtensionNames) mT.push(this._extensions[WT]);
        return this._ApplyExtension(TT, mT, 0, UT)
      }
      _extensionsPostExportNodeAsync(TT, UT, mT, WT, zT) {
        return this._ApplyExtensions(UT, ((UT, MT) => UT.postExportNodeAsync && UT.postExportNodeAsync(TT, MT, mT, WT, zT, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(TT, UT, mT) {
        return this._ApplyExtensions(UT, ((UT, WT) => UT.postExportMaterialAsync && UT.postExportMaterialAsync(TT, WT, mT)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        const WT = [];
        return await Promise.all(QW._ExtensionNames.map((async zT => {
          const MT = this._extensions[zT];
          if (MT.postExportMaterialAdditionalTexturesAsync) {
            const zT = await MT.postExportMaterialAdditionalTexturesAsync(TT, UT, mT);
            WT.push(...zT)
          }
        }))), WT
      }
      _extensionsPostExportTextures(TT, UT, mT) {
        for (const WT of QW._ExtensionNames) {
          const zT = this._extensions[WT];
          zT.postExportTexture && zT.postExportTexture(TT, UT, mT)
        }
      }
      _extensionsPostExportMeshPrimitive(TT) {
        for (const UT of QW._ExtensionNames) {
          const mT = this._extensions[UT];
          mT.postExportMeshPrimitive && mT.postExportMeshPrimitive(TT, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const TT of QW._ExtensionNames) {
          const UT = this._extensions[TT];
          UT.preGenerateBinaryAsync && await UT.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(TT) {
        for (const UT of QW._ExtensionNames) {
          const mT = this._extensions[UT];
          mT.enabled && TT(mT)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((TT => {
          var UT, mT, WT;
          TT.wasUsed && ((UT = this._glTF).extensionsUsed || (UT.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(TT.name) && this._glTF.extensionsUsed.push(TT.name), TT.required && ((mT = this._glTF).extensionsRequired || (mT.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(TT.name) && this._glTF.extensionsRequired.push(TT.name)), (WT = this._glTF).extensions || (WT.extensions = {}), TT.onExporting && TT.onExporting())
        }))
      }
      _loadExtensions() {
        for (const TT of QW._ExtensionNames) {
          const UT = QW._ExtensionFactories[TT](this);
          this._extensions[TT] = UT
        }
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ZT.c.LastCreatedScene,
          UT = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${BT.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new am(this), this._extensions = {}, this._bufferManager = new WW, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !TT) throw new Error("No scene available to export");
        this._babylonScene = TT, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: TT => TT?.mF?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...UT
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
      static RegisterExtension(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        QW.UnregisterExtension(TT) && zT.Tools.Warn(`Extension with the name ${TT} already exists`), QW._ExtensionFactories[TT] = UT;
        const WT = mT ?? 0;
        QW._ExtensionOrders[TT] = WT;
        let MT = QW._ExtensionNames.length;
        for (let zT = 0; zT < QW._ExtensionNames.length; zT++) {
          const TT = QW._ExtensionNames[zT];
          if (WT < QW._ExtensionOrders[TT]) {
            MT = zT;
            break
          }
        }
        QW._ExtensionNames.splice(MT, 0, TT)
      }
      static UnregisterExtension(TT) {
        if (!QW._ExtensionFactories[TT]) return !1;
        delete QW._ExtensionFactories[TT], delete QW._ExtensionOrders[TT];
        const UT = QW._ExtensionNames.indexOf(TT);
        return -1 !== UT && QW._ExtensionNames.splice(UT, 1), !0
      }
      _generateJSON(TT, UT, mT) {
        const WT = {
          byteLength: TT
        };
        return WT.byteLength && (this._glTF.buffers = [WT]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.XZ = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (WT.uri = UT + ".bin"), mT ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(TT) {
        const UT = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const mT = this._generateJSON(UT.byteLength, TT, !0),
          WT = new Blob([UT], {
            type: "application/octet-stream"
          }),
          zT = TT + ".gltf",
          MT = TT + ".bin",
          gT = new kT;
        if (gT.files[zT] = mT, gT.files[MT] = WT, this._imageData)
          for (const nT in this._imageData) gT.files[nT] = this._imageData[nT];
        return gT
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(TT) {
        const UT = TT % 4;
        return 0 === UT ? UT : 4 - UT
      }
      async generateGLBAsync(TT) {
        this._shouldUseGlb = !0;
        const UT = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const mT = this._generateJSON(UT.byteLength),
          WT = TT + ".glb";
        let zT, MT = mT.length;
        if ("undefined" !== typeof TextEncoder) {
          zT = (new TextEncoder).encode(mT), MT = zT.length
        }
        const gT = this._getPadding(MT),
          nT = this._getPadding(UT.byteLength),
          HT = 28 + MT + gT + UT.byteLength + nT,
          jT = new UW(HT);
        if (jT.writeUInt32(1179937895), jT.writeUInt32(2), jT.writeUInt32(HT), jT.writeUInt32(MT + gT), jT.writeUInt32(1313821514), zT) jT.writeTypedArray(zT);
        else {
          const TT = "_".charCodeAt(0);
          for (let UT = 0; UT < MT; ++UT) {
            const WT = mT.charCodeAt(UT);
            WT != mT.codePointAt(UT) ? jT.writeUInt8(TT) : jT.writeUInt8(WT)
          }
        }
        for (let kT = 0; kT < gT; ++kT) jT.writeUInt8(32);
        jT.writeUInt32(UT.byteLength + nT), jT.writeUInt32(5130562), jT.writeTypedArray(UT);
        for (let kT = 0; kT < nT; ++kT) jT.writeUInt8(0);
        const lT = new kT;
        return lT.files[WT] = new Blob([jT.getOutputData()], {
          type: "application/octet-stream"
        }), lT
      }
      _setNodeTransformation(TT, UT, mT) {
        if (UT.getPivotPoint().equalsWithEpsilon(Fm, Im.c) || zT.Tools.Warn("Pivot points are not supported in the glTF serializer"), !UT.position.equalsWithEpsilon(Fm, Im.c)) {
          const zT = WT.TmpVectors.JB[0].Gw(UT.position);
          mT && Gm(zT), TT.translation = zT.cWT()
        }
        UT.gp.equalsWithEpsilon(Vm, Im.c) || (TT.scale = UT.gp.cWT());
        const MT = UT.rotationQuaternion?.clone() || WT.Quaternion.FromEulerAngles(UT.rotation.x, UT.rotation.y, UT.rotation.z);
        MT.equalsWithEpsilon(Pm, Im.c) || (mT && Nm(MT), TT.rotation = MT.normalize().cWT())
      }
      _setCameraTransformation(TT, UT, mT) {
        const zT = WT.TmpVectors.JB[0],
          MT = WT.TmpVectors.Quaternion[0],
          gT = UT.getWorldMatrix();
        if (UT.parent) {
          const TT = UT.parent.getWorldMatrix().invertToRef(WT.TmpVectors.Matrix[0]);
          gT.multiplyToRef(TT, WT.TmpVectors.Matrix[1]).decompose(void 0, MT, zT)
        } else gT.decompose(void 0, MT, zT);
        zT.equalsWithEpsilon(Fm, Im.c) || (mT && Gm(zT), TT.translation = zT.cWT()), mT && Nm(MT), this._babylonScene.useRightHandedSystem || Em(MT), MT.equalsWithEpsilon(Pm, Im.c) || (TT.rotation = MT.cWT())
      }
      _listAvailableCameras() {
        for (const TT of this._babylonScene.cameras) {
          const UT = {
            type: TT.mode === zW.b.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (TT.name && (UT.name = TT.name), "perspective" === UT.type) UT.perspective = {
            aspectRatio: TT.eB().getAspectRatio(TT),
            yfov: TT.fovMode === zW.b.FOVMODE_VERTICAL_FIXED ? TT.fov : TT.fov * TT.eB().getAspectRatio(TT),
            znear: TT.minZ,
            zfar: TT.maxZ
          };
          else if ("orthographic" === UT.type) {
            const mT = TT.orthoLeft && TT.orthoRight ? .5 * (TT.orthoRight - TT.orthoLeft) : .5 * TT.eB().getRenderWidth(),
              WT = TT.orthoBottom && TT.orthoTop ? .5 * (TT.orthoTop - TT.orthoBottom) : .5 * TT.eB().getRenderHeight();
            UT.orthographic = {
              xmag: mT,
              ymag: WT,
              znear: TT.minZ,
              zfar: TT.maxZ
            }
          }
          this._camerasMap.set(TT, UT)
        }
      }
      _exportAndAssignCameras() {
        const TT = Array.from(this._camerasMap.values());
        for (const UT of TT) {
          const TT = this._nodesCameraMap.get(UT);
          if (void 0 !== TT) {
            this._cameras.push(UT);
            for (const UT of TT) UT.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const TT of this._babylonScene.skeletons) {
          if (TT.bones.length <= 0) continue;
          const UT = {
            joints: []
          };
          this._skinMap.set(TT, UT)
        }
      }
      _exportAndAssignSkeletons(TT) {
        for (const mT of this._babylonScene.skeletons) {
          if (mT.bones.length <= 0) continue;
          const MT = this._skinMap.get(mT);
          if (void 0 == MT) continue;
          const gT = {};
          let nT = -1;
          for (let TT = 0; TT < mT.bones.length; ++TT) {
            const UT = mT.bones[TT],
              WT = UT.getIndex() ?? TT; - 1 !== WT && (gT[WT] = UT, WT > nT && (nT = WT))
          }
          const HT = [];
          for (let mT = 0; mT <= nT; ++mT) {
            const nT = gT[mT],
              kT = nT.getTransformNode(),
              jT = kT ? this._nodeMap.get(kT) : void 0;
            if (void 0 === jT) {
              zT.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            MT.joints.push(jT);
            const lT = nT.getAbsoluteInverseBindMatrix().clone();
            TT.has(kT) && (UT = lT, Qm.invertToRef(WT.TmpVectors.Matrix[0]).multiplyToRef(UT, UT).multiplyToRef(Qm, UT)), HT.push(lT)
          }
          const kT = this._nodesSkinMap.get(MT);
          if (MT.joints.length > 0 && void 0 !== kT) {
            const TT = new Float32Array(16 * HT.length);
            HT.forEach(((UT, mT) => {
              TT.set(UT.m, 16 * mT)
            }));
            const UT = this._bufferManager.createBufferView(TT);
            this._accessors.push(this._bufferManager.createAccessor(UT, "MAT4", 5126, HT.length)), MT.inverseBindMatrices = this._accessors.length - 1, this._skins.push(MT);
            const mT = this._skins.length - 1;
            for (const WT of kT) WT.skin = mT
          }
        }
        var UT
      }
      async _exportSceneAsync() {
        const TT = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const UT = this._options.metadataSelector(this._babylonScene.metadata);
          UT && (TT.extras = UT)
        }
        const UT = new Array,
          mT = new Array,
          WT = new Array,
          zT = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let MT;
        if (zT && !this._options.includeCoordinateSystemConversionNodes)
          for (const kT of this._babylonScene.animationGroups)
            for (const TT of kT.targetedAnimations) {
              const UT = TT.target;
              UT instanceof lT.d && !UT.parent && (MT ?? (MT = new Set)).add(UT)
            }
        for (const kT of this._babylonScene.rootNodes) {
          const TT = kT.animations,
            gT = !!TT && TT.length > 0 || MT?.has(kT);
          zT && !this._options.includeCoordinateSystemConversionNodes && sm(kT, this._babylonScene.useRightHandedSystem) && !gT ? WT.push(...kT.getChildren()) : this._babylonScene.useRightHandedSystem ? UT.push(kT) : mT.push(kT)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const gT = new IW(!0, !1);
        TT.nodes.push(...await this._exportNodesAsync(mT, gT));
        const nT = new IW(!1, !1);
        TT.nodes.push(...await this._exportNodesAsync(UT, nT));
        const HT = new IW(!1, !0);
        TT.nodes.push(...await this._exportNodesAsync(WT, HT)), TT.nodes.length && this._scenes.push(TT), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(gT.getNodesSet()), this._babylonScene.animationGroups.length && LW._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, gT.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(TT) {
        return this._nodeMap.get(TT)
      }
      _getAnimationIndex(TT) {
        return this._animationGroupMap.get(TT)
      }
      _getCameraIndex(TT) {
        const UT = this._camerasMap.get(TT);
        if (!UT) return;
        const mT = this._cameras.indexOf(UT);
        return mT >= 0 ? mT : void 0
      }
      _getMaterialIndex(TT) {
        return this._materialMap.get(TT)
      }
      _getRootIndex(TT, UT) {
        switch (TT) {
          case "nodes":
            return this._getNodeIndex(UT);
          case "animations":
            return this._getAnimationIndex(UT);
          case "cameras":
            return this._getCameraIndex(UT);
          case "materials":
            return this._getMaterialIndex(UT);
          case "meshes": {
            const TT = this._getNodeIndex(UT);
            return void 0 === TT ? void 0 : this._nodes[TT]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(UT)?.index;
          case "images": {
            const TT = this._materialExporter.getTextureInfo(UT)?.index;
            if (void 0 === TT) return;
            const mT = this._textures[TT];
            for (const UT of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const TT = mT?.extensions?.[UT]?.source;
              if ("number" === typeof TT) return TT
            }
            return mT?.source
          }
          case "samplers": {
            const TT = this._materialExporter.getTextureInfo(UT)?.index;
            return void 0 === TT ? void 0 : this._textures[TT]?.sampler
          }
          case "skins": {
            const TT = this._skinMap.get(UT),
              mT = TT ? this._skins.indexOf(TT) : -1;
            return mT >= 0 ? mT : void 0
          }
          case "scenes":
            return UT === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(TT, UT, mT) {
        const WT = this._nodes[TT];
        if (!WT) throw new Error(`Cannot write ${UT}: glTF node ${TT} does not exist.`);
        WT.extensions || (WT.extensions = {}), WT.extensions[UT] = mT
      }
      _shouldExportNode(TT) {
        let UT = this._shouldExportNodeMap.get(TT);
        return void 0 === UT && (UT = this._options.shouldExportNode(TT), this._shouldExportNodeMap.set(TT, UT)), UT
      }
      async _exportNodesAsync(TT, UT) {
        const mT = new Array;
        this._exportBuffers(TT, UT);
        for (const WT of TT) await this._exportNodeAsync(WT, mT, UT);
        return mT
      }
      _collectBuffers(TT, UT, mT, WT, zT) {
        if (this._shouldExportNode(TT) && TT instanceof LT.d && TT.geometry) {
          const MT = TT.geometry.getVertexBuffers();
          if (MT)
            for (const WT in MT) {
              if (!Km(WT)) continue;
              const gT = MT[WT];
              zT.setHasVertexColorAlpha(gT, TT.hasVertexAlpha);
              const nT = gT._buffer,
                HT = UT.get(nT) || [];
              UT.set(nT, HT), -1 === HT.indexOf(gT) && HT.push(gT);
              const kT = mT.get(gT) || [];
              mT.set(gT, kT), -1 === kT.indexOf(TT) && kT.push(TT)
            }
          const gT = TT.morphTargetManager;
          if (gT)
            for (let UT = 0; UT < gT.numTargets; UT++) {
              const mT = gT.getTarget(UT),
                zT = WT.get(mT) || [];
              WT.set(mT, zT), -1 === zT.indexOf(TT) && zT.push(TT)
            }
        }
        for (const MT of TT.getChildren()) this._collectBuffers(MT, UT, mT, WT, zT)
      }
      _exportBuffers(TT, UT) {
        const mT = new Map,
          WT = new Map,
          zT = new Map;
        for (const nT of TT) this._collectBuffers(nT, mT, WT, zT, UT);
        const MT = Array.from(mT.keys());
        for (const nT of MT) {
          const TT = nT.getData();
          if (!TT) throw new Error("Buffer data is not available");
          const zT = mT.get(nT);
          if (!zT) continue;
          const MT = zT[0].byteStride;
          if (zT.some((TT => TT.byteStride !== MT))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const gT = om(TT).slice();
          for (const UT of zT) {
            const TT = WT.get(UT),
              {
                byteOffset: mT,
                byteStride: zT,
                componentCount: MT,
                type: nT,
                count: HT,
                normalized: kT,
                kind: lT
              } = Cm(UT, TT);
            switch (lT) {
              case jT.i.NormalKind:
              case jT.i.TangentKind:
                (0, ym.l)(gT, mT, zT, MT, nT, HT, kT, (TT => {
                  const UT = Math.sqrt(TT[0] * TT[0] + TT[1] * TT[1] + TT[2] * TT[2]);
                  if (UT > 0) {
                    const mT = 1 / UT;
                    TT[0] *= mT, TT[1] *= mT, TT[2] *= mT
                  }
                }));
                break;
              case jT.i.ColorKind: {
                const UT = TT.filter((TT => TT.material instanceof gW.StandardMaterial || null == TT.material)).length;
                if (0 == UT) break;
                if (UT != TT.length) {
                  dT.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                nT == jT.i.UNSIGNED_BYTE && dT.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const WT = new cT.Color3,
                  lT = new cT.e,
                  LT = this._babylonScene.eB().useExactSrgbConversions;
                (0, ym.l)(gT, mT, zT, MT, nT, HT, kT, (TT => {
                  3 === TT.length ? (WT.MmT(TT, 0), WT.toLinearSpaceToRef(WT, LT), WT.toArray(TT, 0)) : (lT.MmT(TT, 0), lT.toLinearSpaceToRef(lT, LT), lT.toArray(TT, 0))
                }))
              }
            }
          }
          if (UT.convertToRightHanded) {
            for (const TT of zT) {
              const UT = WT.get(TT),
                {
                  byteOffset: mT,
                  byteStride: zT,
                  componentCount: MT,
                  type: nT,
                  count: HT,
                  normalized: kT,
                  kind: lT
                } = Cm(TT, UT);
              switch (lT) {
                case jT.i.PositionKind:
                case jT.i.NormalKind:
                case jT.i.TangentKind:
                  (0, ym.l)(gT, mT, zT, MT, nT, HT, kT, (TT => {
                    TT[0] = -TT[0]
                  }))
              }
            }
            UT.convertedToRightHandedBuffers.set(nT, gT)
          }
          const HT = this._bufferManager.createBufferView(gT, MT);
          UT.setVertexBufferView(nT, HT);
          const kT = new Map;
          for (const UT of zT) {
            const TT = WT.get(UT),
              {
                kind: mT,
                totalVertices: zT
              } = Cm(UT, TT);
            switch (mT) {
              case jT.i.MatricesIndicesKind:
              case jT.i.MatricesIndicesExtraKind:
                if (UT.type == jT.i.FLOAT) {
                  const TT = UT.getFloatData(zT);
                  null !== TT && kT.set(UT, TT)
                }
            }
          }
          0 !== kT.size && dT.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const lT = Array.from(kT.keys());
          for (const mT of lT) {
            const TT = kT.get(mT);
            if (!TT) continue;
            const WT = TT.some((TT => TT >= 256)),
              zT = new(WT ? Uint16Array : Uint8Array)(TT.length);
            for (let UT = 0; UT < TT.length; UT++) zT[UT] = TT[UT];
            const MT = this._bufferManager.createBufferView(zT, 4 * (WT ? 2 : 1));
            UT.setRemappedBufferView(nT, mT, MT)
          }
        }
        const gT = Array.from(zT.keys());
        for (const nT of gT) {
          const TT = zT.get(nT);
          if (!TT) continue;
          const mT = pW(nT, TT[0], this._bufferManager, this._bufferViews, this._accessors, UT.convertToRightHanded);
          for (const WT of TT) UT.bindMorphDataToMesh(WT, mT)
        }
      }
      async _exportNodeAsync(TT, UT, mT) {
        let WT = this._nodeMap.get(TT);
        if (void 0 !== WT) return void(UT.includes(WT) || UT.push(WT));
        const zT = await this._createNodeAsync(TT, mT);
        if (zT) {
          WT = this._nodes.length, this._nodes.push(zT), this._nodeMap.set(TT, WT), mT.pushExportedNode(TT), UT.push(WT);
          const MT = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            gT = [];
          this._babylonScene.animationGroups.length || (LW._CreateMorphTargetAnimationFromMorphTargetAnimations(TT, MT, gT, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, mT.convertToRightHanded, this._options.shouldExportAnimation), TT.animations.length && LW._CreateNodeAnimationFromNodeAnimations(TT, MT, gT, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, mT.convertToRightHanded, this._options.shouldExportAnimation)), MT.channels.length && MT.samplers.length && this._animations.push(MT), gT.forEach((TT => {
            TT.channels.length && TT.samplers.length && this._animations.push(TT)
          }))
        }
        const MT = zT ? [] : UT;
        for (const gT of TT.getChildren()) await this._exportNodeAsync(gT, MT, mT);
        zT && MT.length && (zT.children = MT)
      }
      async _createNodeAsync(TT, UT) {
        if (!this._shouldExportNode(TT)) return null;
        const mT = {};
        if (TT.name && (mT.name = TT.name), TT.metadata) {
          const UT = this._options.metadataSelector(TT.metadata);
          UT && (mT.extras = UT)
        }
        if (TT instanceof lT.d && (this._setNodeTransformation(mT, TT, UT.convertToRightHanded), TT instanceof LT.d)) {
          const WT = TT instanceof pT.e ? TT.czT : TT;
          if (WT.rY && WT.rY.length > 0 && (mT.mesh = await this._exportMeshAsync(WT, UT)), TT.skeleton) {
            const UT = this._skinMap.get(TT.skeleton);
            void 0 !== UT && (void 0 === this._nodesSkinMap.get(UT) && this._nodesSkinMap.set(UT, []), this._nodesSkinMap.get(UT)?.push(mT))
          }
        }
        if (TT instanceof Xm.d) {
          const WT = this._camerasMap.get(TT);
          if (WT) {
            void 0 === this._nodesCameraMap.get(WT) && this._nodesCameraMap.set(WT, []), this._setCameraTransformation(mT, TT, UT.convertToRightHanded);
            const zT = TT.parent;
            if (null !== zT && Dm(TT, zT)) {
              const TT = this._nodeMap.get(zT);
              if (void 0 !== TT) {
                const UT = this._nodes[TT];
                return hm(mT, UT), this._nodesCameraMap.get(WT)?.push(UT), null
              }
            }
            this._nodesCameraMap.get(WT)?.push(mT)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", mT, TT, this._nodeMap, UT.convertToRightHanded) ? mT : (dT.b.Warn(`Not exporting node ${TT.name}`), null)
      }
      _exportIndices(TT, UT, mT, WT, zT, gT, nT, HT, kT) {
        let jT = null;
        kT.mode = function(TT) {
          switch (TT) {
            case MT.b.TriangleFillMode:
              return 4;
            case MT.b.TriangleStripDrawMode:
              return 5;
            case MT.b.TriangleFanDrawMode:
              return 6;
            case MT.b.PointListDrawMode:
            case MT.b.PointFillMode:
              return 0;
            case MT.b.LineLoopDrawMode:
              return 2;
            case MT.b.LineListDrawMode:
              return 1;
            case MT.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${TT}`)
        }(gT);
        const lT = nT !== MT.b.CounterClockWiseSideOrientation && function(TT) {
          switch (TT) {
            case MT.b.TriangleFillMode:
            case MT.b.TriangleStripDrawMode:
            case MT.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(gT);
        if (lT) {
          if (gT === MT.b.TriangleStripDrawMode || gT === MT.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const nT = UT ? new Uint32Array(WT) : new Uint16Array(WT);
          if (TT)
            for (let UT = 0; UT + 2 < WT; UT += 3) nT[UT] = TT[mT + UT] + zT, nT[UT + 1] = TT[mT + UT + 2] + zT, nT[UT + 2] = TT[mT + UT + 1] + zT;
          else
            for (let TT = 0; TT + 2 < WT; TT += 3) nT[TT] = TT, nT[TT + 1] = TT + 2, nT[TT + 2] = TT + 1;
          jT = nT
        } else if (TT && 0 !== zT) {
          const MT = UT ? new Uint32Array(WT) : new Uint16Array(WT);
          for (let UT = 0; UT < WT; UT++) MT[UT] = TT[mT + UT] + zT;
          jT = MT
        } else TT && (jT = function(TT, UT, mT, WT) {
          let zT = TT;
          return 0 === UT && mT === TT.length || (zT = Array.isArray(TT) ? TT.slice(UT, UT + mT) : TT.subarray(UT, UT + mT)), zT instanceof Int32Array ? new Uint32Array(zT.buffer, zT.byteOffset, zT.length) : Array.isArray(zT) ? WT ? new Uint32Array(zT) : new Uint16Array(zT) : zT
        }(TT, mT, WT, UT));
        if (jT) {
          let MT = HT.getIndicesAccessor(TT, mT, WT, zT, lT);
          if (void 0 === MT) {
            const gT = this._bufferManager.createBufferView(jT),
              nT = UT ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(gT, "SCALAR", nT, WT, 0)), MT = this._accessors.length - 1, HT.setIndicesAccessor(TT, mT, WT, zT, lT, MT)
          }
          kT.indices = MT
        }
      }
      _exportVertexBuffer(TT, UT, mT, WT, zT, MT) {
        const gT = TT.getKind();
        if (!Km(gT)) return;
        if (gT.startsWith("uv") && !this._options.exportUnusedUVs && (!UT || !this._materialNeedsUVsSet.has(UT))) return;
        let nT = zT.getVertexAccessor(TT, mT, WT);
        if (void 0 === nT) {
          const UT = zT.convertedToRightHandedBuffers.get(TT._buffer) || TT._buffer.getData(),
            MT = gT === jT.i.PositionKind ? function(TT, UT, mT, WT) {
              const {
                byteOffset: zT,
                byteStride: MT,
                type: gT,
                normalized: nT
              } = UT, HT = UT.getSize(), kT = new Array(HT).fill(1 / 0), jT = new Array(HT).fill(-1 / 0);
              return (0, ym.l)(TT, zT + mT * MT, MT, HT, gT, WT * HT, nT, (TT => {
                for (let UT = 0; UT < HT; UT++) kT[UT] = Math.min(kT[UT], TT[UT]), jT[UT] = Math.max(jT[UT], TT[UT])
              })), {
                min: kT,
                max: jT
              }
            }(UT, TT, mT, WT) : void 0,
            HT = (gT === jT.i.MatricesIndicesKind || gT === jT.i.MatricesIndicesExtraKind) && TT.type === jT.i.FLOAT,
            kT = HT ? jT.i.UNSIGNED_BYTE : TT.type,
            lT = HT ? void 0 : TT.normalized,
            LT = HT ? zT.getRemappedBufferView(TT._buffer, TT) : zT.getVertexBufferView(TT._buffer),
            pT = TT.byteOffset + mT * TT.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(LT, function(TT, UT) {
            if (TT == jT.i.ColorKind) return UT ? "VEC4" : "VEC3";
            switch (TT) {
              case jT.i.PositionKind:
              case jT.i.NormalKind:
                return "VEC3";
              case jT.i.TangentKind:
              case jT.i.MatricesIndicesKind:
              case jT.i.MatricesIndicesExtraKind:
              case jT.i.MatricesWeightsKind:
              case jT.i.MatricesWeightsExtraKind:
                return "VEC4";
              case jT.i.UVKind:
              case jT.i.UV2Kind:
              case jT.i.UV3Kind:
              case jT.i.UV4Kind:
              case jT.i.UV5Kind:
              case jT.i.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${TT}`)
          }(gT, zT.hasVertexColorAlpha(TT)), kT, WT, pT, MT, lT)), nT = this._accessors.length - 1, zT.setVertexAccessor(TT, mT, WT, nT)
        }
        MT.attributes[function(TT) {
          switch (TT) {
            case jT.i.PositionKind:
              return "POSITION";
            case jT.i.NormalKind:
              return "NORMAL";
            case jT.i.TangentKind:
              return "TANGENT";
            case jT.i.ColorKind:
              return "COLOR_0";
            case jT.i.UVKind:
              return "TEXCOORD_0";
            case jT.i.UV2Kind:
              return "TEXCOORD_1";
            case jT.i.UV3Kind:
              return "TEXCOORD_2";
            case jT.i.UV4Kind:
              return "TEXCOORD_3";
            case jT.i.UV5Kind:
              return "TEXCOORD_4";
            case jT.i.UV6Kind:
              return "TEXCOORD_5";
            case jT.i.MatricesIndicesKind:
              return "JOINTS_0";
            case jT.i.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case jT.i.MatricesWeightsKind:
              return "WEIGHTS_0";
            case jT.i.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${TT}`)
        }(gT)] = nT
      }
      async _exportMaterialAsync(TT, UT, mT, WT) {
        let zT = this._materialMap.get(TT);
        if (void 0 === zT) {
          const WT = UT && Object.keys(UT).some((TT => TT.startsWith("uv")));
          if ((TT = TT instanceof MW.e ? TT.w6[mT.materialIndex] : TT) instanceof OU) zT = await this._materialExporter.exportPBRMaterialAsync(TT, WT);
          else if (TT instanceof gW.StandardMaterial) zT = await this._materialExporter.exportStandardMaterialAsync(TT, WT);
          else {
            if (!(TT instanceof AU)) return void dT.b.Warn(`Unsupported material '${TT.name}' with type ${TT.getClassName()}`);
            zT = await this._materialExporter.exportOpenPBRMaterialAsync(TT, WT)
          }
          this._materialMap.set(TT, zT)
        }
        WT.material = zT
      }
      async _exportMeshAsync(TT, UT) {
        let mT = UT.getMesh(TT);
        if (void 0 !== mT) return mT;
        const WT = {
          primitives: []
        };
        mT = this._meshes.length, this._meshes.push(WT), UT.setMesh(TT, mT);
        const zT = TT.isUnIndexed ? null : TT.vWT(),
          gT = TT.geometry?.getVertexBuffers(),
          nT = UT.getMorphTargetsFromMesh(TT),
          HT = TT instanceof BW.b,
          kT = TT instanceof XW,
          jT = TT.rY;
        if (gT && jT && jT.length > 0)
          for (const lT of jT) {
            const mT = {
                attributes: {}
              },
              jT = lT.wB() || this._babylonScene.defaultMaterial;
            if (kT) {
              const UT = {
                  name: jT.name
                },
                WT = TT,
                zT = cT.Color3.White(),
                MT = WT.material?.alpha ?? 1,
                gT = WT.greasedLineMaterial?.color ?? zT;
              (!gT.equalsWithEpsilon(zT, Im.c) || MT < 1) && (UT.pbrMetallicRoughness = {
                baseColorFactor: [...gT.cWT(), MT]
              }), this._materials.push(UT), mT.material = this._materials.length - 1
            } else if (HT) {
              const UT = {
                  name: jT.name
                },
                WT = TT;
              (!WT.color.equalsWithEpsilon(cT.Color3.White(), Im.c) || WT.alpha < 1) && (UT.pbrMetallicRoughness = {
                baseColorFactor: [...WT.color.cWT(), WT.alpha]
              }), this._materials.push(UT), mT.material = this._materials.length - 1
            } else await this._exportMaterialAsync(jT, gT, lT, mT);
            const LT = HT || kT ? MT.b.LineListDrawMode : TT.overrideRenderingFillMode ?? jT.fillMode;
            let pT = jT._getEffectiveOrientation(TT);
            UT.wasAddedByNoopNode && !TT.KF().useRightHandedSystem && (pT = pT === MT.b.ClockWiseSideOrientation ? MT.b.CounterClockWiseSideOrientation : MT.b.ClockWiseSideOrientation), this._exportIndices(zT, zT ? (0, ym.d)(zT, lT.indexCount, lT.indexStart, lT.verticesStart) : lT.verticesCount > 65535, zT ? lT.indexStart : lT.verticesStart, zT ? lT.indexCount : lT.verticesCount, -lT.verticesStart, LT, pT, UT, mT);
            for (const TT of Object.values(gT)) this._exportVertexBuffer(TT, jT, lT.verticesStart, lT.verticesCount, UT, mT);
            if (nT) {
              mT.targets = [];
              for (const TT of nT) mT.targets.push(TT.attributes)
            }
            WT.primitives.push(mT), this._extensionsPostExportMeshPrimitive(mT)
          }
        if (nT) {
          WT.weights = [], WT.extras || (WT.extras = {}), WT.extras.targetNames = [];
          for (const TT of nT) WT.weights.push(TT.influence), WT.extras.targetNames.push(TT.name)
        }
        return mT
      }
    }
    QW._ExtensionNames = new Array, QW._ExtensionFactories = {}, QW._ExtensionOrders = {};
    class sW {
      static async GLTFAsync(TT, UT, mT) {
        mT && mT.exportWithoutWaitingForScene || await TT.whenReadyAsync();
        const WT = new QW(TT, mT),
          zT = await WT.generateGLTFAsync(UT.replace(/\.[^/.]+$/, ""));
        return WT.dispose(), zT
      }
      static async GLBAsync(TT, UT, mT) {
        mT && mT.exportWithoutWaitingForScene || await TT.whenReadyAsync();
        const WT = new QW(TT, mT),
          zT = await WT.generateGLBAsync(UT.replace(/\.[^/.]+$/, ""));
        return WT.dispose(), zT
      }
    }
    const FW = "EXT_mesh_gpu_instancing";

    function PW(TT, UT) {
      const mT = new Float32Array(3 * UT);
      for (let WT = 0; WT < UT; WT++) mT[3 * WT + 0] = TT[4 * WT + 0], mT[3 * WT + 1] = TT[4 * WT + 1], mT[3 * WT + 2] = TT[4 * WT + 2];
      return mT
    }
    class VW {
      constructor(TT) {
        this.name = FW, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(TT, UT, mT, WT, zT, MT) {
        return await new Promise((TT => {
          if (UT && mT instanceof eW.d && mT.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const TT = PT.p.Zero(),
              WT = PT.f.Identity(),
              gT = PT.p.One(),
              nT = mT.thinInstanceGetWorldMatrices(),
              HT = PT.l.JB[2],
              kT = PT.l.Quaternion[1],
              jT = PT.l.JB[3];
            let lT = !1,
              LT = !1,
              pT = !1;
            const BT = new Float32Array(3 * mT.i5),
              ZT = new Float32Array(4 * mT.i5),
              cT = new Float32Array(3 * mT.i5);
            let vT = 0;
            for (const UT of nT) UT.decompose(jT, kT, HT), zT && (Gm(HT), Nm(kT)), BT.set(HT.cWT(), 3 * vT), ZT.set(kT.normalize().cWT(), 4 * vT), cT.set(jT.cWT(), 3 * vT), lT = lT || !HT.equalsWithEpsilon(TT), LT = LT || !kT.equalsWithEpsilon(WT), pT = pT || !jT.equalsWithEpsilon(gT), vT++;
            const fT = {
              attributes: {}
            };
            lT && (fT.attributes.TRANSLATION = this._buildAccessor(BT, "VEC3", mT.i5, MT)), LT && (fT.attributes.ROTATION = this._buildAccessor(ZT, "VEC4", mT.i5, MT)), pT && (fT.attributes.SCALE = this._buildAccessor(cT, "VEC3", mT.i5, MT));
            let qT = mT._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (qT) {
              const TT = mT.i5,
                UT = "VEC3";
              mT.hasVertexAlpha && qT.length === 4 * TT ? (this._instanceColorWarned || (dT.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), qT = PW(qT, TT)) : qT.length === 4 * TT && (qT = PW(qT, TT)), qT.length === 3 * TT && (fT.attributes._COLOR_0 = this._buildAccessor(qT, UT, TT, MT))
            }
            UT.extensions = UT.extensions || {}, UT.extensions[FW] = fT
          }
          TT(UT)
        }))
      }
      _buildAccessor(TT, UT, mT, WT) {
        const zT = WT.createBufferView(TT),
          MT = WT.createAccessor(zT, UT, 5126, mT);
        return this._exporter._accessors.push(MT), this._exporter._accessors.length - 1
      }
    }
    let uW = !1;

    function CW() {
      uW || (uW = !0, QW.RegisterExtension(FW, (TT => new VW(TT))))
    }
    mT(40611);
    CW();
    var rW = mT(41995);

    function KW(TT, UT, mT, WT) {
      const zT = TT;
      let MT = null,
        gT = null,
        nT = null,
        HT = null;
      const kT = {},
        jT = UT.find((TT => "POSITION" === TT.dracoName));
      if (!jT) throw new Error("Draco: Missing position attribute for encoding.");
      if (!mT) {
        const TT = jT.data.length / jT.size;
        mT = new(TT > 65535 ? Uint32Array : Uint16Array)(TT);
        for (let UT = 0; UT < TT; UT++) mT[UT] = UT
      }
      try {
        MT = new zT.Encoder, gT = new zT.MeshBuilder, nT = new zT.Mesh, gT.AddFacesToMesh(nT, mT.length / 3, mT);
        const TT = new Map([
          [Float32Array, (TT, UT, mT, WT, zT, MT) => TT.AddFloatAttribute(UT, mT, WT, zT, MT)],
          [Uint32Array, (TT, UT, mT, WT, zT, MT) => TT.AddUInt32Attribute(UT, mT, WT, zT, MT)],
          [Uint16Array, (TT, UT, mT, WT, zT, MT) => TT.AddUInt16Attribute(UT, mT, WT, zT, MT)],
          [Uint8Array, (TT, UT, mT, WT, zT, MT) => TT.AddUInt8Attribute(UT, mT, WT, zT, MT)],
          [Int32Array, (TT, UT, mT, WT, zT, MT) => TT.AddInt32Attribute(UT, mT, WT, zT, MT)],
          [Int16Array, (TT, UT, mT, WT, zT, MT) => TT.AddInt16Attribute(UT, mT, WT, zT, MT)],
          [Int8Array, (TT, UT, mT, WT, zT, MT) => TT.AddInt8Attribute(UT, mT, WT, zT, MT)]
        ]);
        for (const mT of UT) {
          mT.data instanceof Uint8ClampedArray && (mT.data = new Uint8Array(mT.data));
          const UT = TT.get(mT.data.constructor),
            HT = mT.data.length / mT.size;
          kT[mT.kind] = UT(gT, nT, zT[mT.dracoName], HT, mT.size, mT.data), WT.quantizationBits && WT.quantizationBits[mT.dracoName] && MT.SetAttributeQuantization(zT[mT.dracoName], WT.quantizationBits[mT.dracoName])
        }
        WT.method && MT.SetEncodingMethod(zT[WT.method]), void 0 !== WT.encodeSpeed && void 0 !== WT.decodeSpeed && MT.SetSpeedOptions(WT.encodeSpeed, WT.decodeSpeed), HT = new zT.DracoInt8Array;
        const jT = MT.EncodeMeshToDracoBuffer(nT, HT);
        if (jT <= 0) throw new Error("Draco: Failed to encode.");
        const lT = new Int8Array(jT);
        for (let UT = 0; UT < jT; UT++) lT[UT] = HT.GetValue(UT);
        return {
          data: lT,
          attributeIds: kT
        }
      } finally {
        nT && zT.destroy(nT), gT && zT.destroy(gT), MT && zT.destroy(MT), HT && zT.destroy(HT)
      }
    }

    function SW() {
      let TT;
      onmessage = UT => {
        const mT = UT.data;
        switch (mT.id) {
          case "init": {
            mT.url && importScripts(mT.url);
            const UT = mT.wasmBinary ? {
              wasmBinary: mT.wasmBinary
            } : {};
            TT = DracoEncoderModule(UT), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!TT) throw new Error("Draco: Encoder module is not available.");
            TT.then((TT => {
              const UT = KW(TT, mT.attributes, mT.indices, mT.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: UT
              }, UT ? [UT.data.buffer] : void 0)
            })).catch((TT => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: TT.message
              })
            }))
        }
      }
    }
    class GW {
      constructor(TT) {
        if (TT.workerPool) return void(this._workerPoolPromise = Promise.resolve(TT.workerPool));
        const UT = TT.wasmBinary,
          mT = TT.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          WT = mT && "function" === typeof Worker && "function" === typeof URL,
          zT = WT || !TT.jsModule,
          MT = TT.wasmUrl && TT.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: zT ? YU.j.GetBabylonScriptURL(TT.wasmUrl, !0) : "",
            wasmBinaryPromise: UT ? Promise.resolve(UT) : YU.j.LoadFileAsync(YU.j.GetBabylonScriptURL(TT.wasmBinaryUrl, !0))
          } : {
            url: zT ? YU.j.GetBabylonScriptURL(TT.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        WT ? this._workerPoolPromise = MT.wasmBinaryPromise.then((TT => {
          const UT = this._getWorkerContent(),
            WT = URL.createObjectURL(new Blob([UT], {
              type: "application/javascript"
            }));
          return new rW.b(mT, (() => async function(TT, UT, mT) {
            return await new Promise(((WT, zT) => {
              const MT = UT => {
                  TT.removeEventListener("error", MT), TT.removeEventListener("message", gT), zT(UT)
                },
                gT = UT => {
                  "initDone" === UT.data.id && (TT.removeEventListener("error", MT), TT.removeEventListener("message", gT), WT(TT))
                };
              if (TT.addEventListener("error", MT), TT.addEventListener("message", gT), UT) {
                const WT = UT.slice(0);
                TT.postMessage({
                  id: "init",
                  url: mT,
                  wasmBinary: WT
                }, [WT])
              } else TT.postMessage({
                id: "init",
                url: mT
              })
            }))
          }(new Worker(WT), TT, MT.url)))
        })) : this._modulePromise = MT.wasmBinaryPromise.then((async UT => {
          if (!this._isModuleAvailable() && !TT.jsModule) {
            if (!MT.url) throw new Error("Draco codec module is not available");
            await YU.j.LoadBabylonScriptAsync(MT.url)
          }
          return await this._createModuleAsync(UT, TT.jsModule)
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

    function NW() {
      const TT = TT => !!TT && "object" === typeof TT;
      for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
      return mT.reduce(((UT, mT) => {
        const WT = Object.keys(mT);
        for (const zT of WT) {
          const WT = UT[zT],
            MT = mT[zT];
          Array.isArray(WT) && Array.isArray(MT) ? UT[zT] = WT.concat(MT) : TT(WT) && TT(MT) ? UT[zT] = NW(WT, MT) : UT[zT] = MT
        }
        return UT
      }), {})
    }

    function EW(TT) {
      return TT === VT.i.PositionKind ? "POSITION" : TT === VT.i.NormalKind ? "NORMAL" : TT === VT.i.ColorKind ? "COLOR" : TT.startsWith(VT.i.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const hW = {
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
    class DW extends GW {
      static get DefaultAvailable() {
        return !!((TT = DW.DefaultConfiguration).wasmUrl && (TT.wasmBinary || TT.wasmBinaryUrl) && "object" === typeof WebAssembly || TT.fallbackUrl);
        var TT
      }
      static get Default() {
        return DW._Default ?? (DW._Default = new DW), DW._Default
      }
      static ResetDefault(TT) {
        DW._Default && (TT || DW._Default.dispose(), DW._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(TT, UT) {
        return {
          module: await (UT || DracoEncoderModule)({
            wasmBinary: TT
          })
        }
      }
      _getWorkerContent() {
        return `${KW}(${SW})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DW.DefaultConfiguration)
      }
      async _encodeAsync(TT, UT, mT) {
        const WT = mT ? NW(hW, mT) : hW;
        if (this._workerPoolPromise) {
          const mT = await this._workerPoolPromise;
          return await new Promise(((zT, MT) => {
            mT.push(((mT, gT) => {
              const nT = TT => {
                  mT.removeEventListener("error", nT), mT.removeEventListener("message", HT), MT(TT), gT()
                },
                HT = TT => {
                  "encodeMeshSuccess" === TT.data.id ? (mT.removeEventListener("error", nT), mT.removeEventListener("message", HT), zT(TT.data.encodedMeshData), gT()) : "encodeMeshError" === TT.data.id && (mT.removeEventListener("error", nT), mT.removeEventListener("message", HT), MT(new Error(TT.data.errorMessage)), gT())
                };
              mT.addEventListener("error", nT), mT.addEventListener("message", HT);
              const kT = [];
              for (const UT of TT) kT.push(UT.data.buffer);
              UT && kT.push(UT.buffer), mT.postMessage({
                id: "encodeMesh",
                attributes: TT,
                indices: UT,
                options: WT
              }, kT)
            }))
          }))
        }
        if (this._modulePromise) {
          return KW((await this._modulePromise).module, TT, UT, WT)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(TT, UT) {
        if (0 == TT.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        TT instanceof eW.d && TT.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === UT?.method && (dT.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), UT.method = "MESH_SEQUENTIAL_ENCODING");
        const mT = function(TT) {
            let UT = TT.vWT(void 0, !0);
            return !UT || UT instanceof Uint32Array || UT instanceof Uint16Array || (UT = ((0, ym.d)(UT, UT.length) ? Uint32Array : Uint16Array).from(UT)), UT
          }(TT),
          WT = function(TT, UT) {
            const mT = [];
            for (const WT of TT.getVerticesDataKinds()) {
              if (UT?.includes(WT)) {
                if (WT === VT.i.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const zT = TT.getVertexBuffer(WT),
                MT = zT.getSize(),
                gT = (0, ym.v)(zT.getData(), MT, zT.type, zT.byteOffset, zT.byteStride, TT.getTotalVertices(), !0);
              mT.push({
                kind: WT,
                dracoName: EW(WT),
                size: MT,
                data: gT
              })
            }
            return mT
          }(TT, UT?.excludedAttributes);
        return await this._encodeAsync(WT, mT, UT)
      }
    }
    DW.DefaultConfiguration = {
      wasmUrl: `${YU.j._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${YU.j._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${YU.j._DefaultCdnUrl}/draco_encoder.js`
    }, DW._Default = null;
    const oW = "KHR_draco_mesh_compression";
    class AW {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(TT) {
        this.name = oW, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === TT.options.meshCompressionMethod && DW.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(TT, UT, mT) {
        if (!this.enabled) return;
        if (4 !== TT.mode && 5 !== TT.mode) return void dT.b.Warn("Cannot compress primitive with mode " + TT.mode + ".");
        const WT = [],
          zT = [];
        let MT = null;
        if (void 0 !== TT.indices) {
          const gT = mT[TT.indices],
            nT = UT.getBufferView(gT);
          MT = UT.getData(nT).slice(), WT.push(nT), zT.push(gT)
        }
        const gT = [];
        for (const [jT, lT] of Object.entries(TT.attributes)) {
          const TT = mT[lT],
            MT = UT.getBufferView(TT),
            HT = rm(TT.type),
            kT = (0, ym.v)(UT.getData(MT), HT, TT.componentType, TT.byteOffset || 0, MT.byteStride || (0, ym.s)(TT.componentType) * HT, TT.count, !0);
          gT.push({
            kind: jT,
            dracoName: (nT = jT, "POSITION" === nT ? "POSITION" : "NORMAL" === nT ? "NORMAL" : nT.startsWith("COLOR") ? "COLOR" : nT.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: rm(TT.type),
            data: kT
          }), WT.push(MT), zT.push(TT)
        }
        var nT;
        const HT = {
            method: TT.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          kT = DW.Default._encodeAsync(gT, MT, HT).then((mT => {
            const MT = {
                bufferView: -1,
                attributes: mT.attributeIds
              },
              gT = UT.createBufferView(mT.data);
            UT.setBufferView(MT, gT);
            for (const TT of WT) this._bufferViewsUsed.add(TT);
            for (const TT of zT) this._accessorsUsed.add(TT);
            TT.extensions || (TT.extensions = {}), TT.extensions[oW] = MT
          })).catch((TT => {
            dT.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + TT.message)
          }));
        this._encodePromises.push(kT), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(TT) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((UT => {
          TT.getPropertiesWithBufferView(UT).every((TT => this._accessorsUsed.has(TT))) && TT.removeBufferView(UT)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let RW = !1;

    function Tz() {
      RW || (RW = !0, QW.RegisterExtension(oW, (TT => new AW(TT))))
    }
    Tz();
    var Uz = mT(41710);
    const mz = "KHR_lights_punctual",
      Wz = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      zz = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      Mz = PT.p.Backward();
    class gz {
      constructor(TT) {
        this.name = mz, this.enabled = !0, this.required = !1, this._exporter = TT
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[mz] = this._lights
      }
      async postExportNodeAsync(TT, UT, mT, WT, zT) {
        return await new Promise((MT => {
          if (!(mT instanceof lW.e)) return void MT(UT);
          const gT = mT.getTypeID() == lW.e.LIGHTTYPEID_POINTLIGHT ? "point" : mT.getTypeID() == lW.e.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : mT.getTypeID() == lW.e.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!gT || !(mT instanceof Uz.e)) return dT.b.Warn(`${TT}: Light ${mT.name} is not supported in ${mz}`), void MT(UT);
          if (mT.falloffType !== lW.e.FALLOFF_GLTF && dT.b.Warn(`${TT}: Light falloff for ${mT.name} does not match the ${mz} specification!`), !mT.position.UnT(0, 0, 0)) {
            const TT = PT.l.JB[0].Gw(mT.position);
            zT && Gm(TT), UT.translation = TT.cWT()
          }
          if ("point" !== gT) {
            const TT = mT.direction.normalizeToRef(PT.l.JB[0]);
            zT && Gm(TT);
            const WT = PT.f.FromUnitVectorsToRef(Mz, TT, PT.l.Quaternion[0]);
            PT.f.IsIdentity(WT) || (UT.rotation = WT.cWT())
          }
          const nT = {
            type: gT,
            name: mT.name,
            color: mT.diffuse.cWT(),
            intensity: mT.intensity,
            range: mT.range
          };
          if (Am(nT, Wz), "spot" === gT) {
            const TT = mT;
            nT.spot = {
              innerConeAngle: TT.innerAngle / 2,
              outerConeAngle: TT.angle / 2
            }, Am(nT.spot, zz)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(nT);
          const HT = {
              light: this._lights.lights.length - 1
            },
            kT = mT.parent;
          if (kT && Dm(mT, kT)) {
            const TT = WT.get(kT);
            if (TT) {
              const mT = this._exporter._nodes[TT];
              return hm(UT, mT), mT.extensions || (mT.extensions = {}), mT.extensions[mz] = HT, void MT(null)
            }
          }
          UT.extensions || (UT.extensions = {}), UT.extensions[mz] = HT, MT(UT)
        }))
      }
    }
    let nz = !1;

    function Hz() {
      nz || (nz = !0, QW.RegisterExtension(mz, (TT => new gz(TT))))
    }
    Hz();
    const kz = "KHR_interactivity";
    class jz {
      constructor(TT) {
        this._exporter = TT, this.name = kz, this.enabled = !!TT.options.khrInteractivity, this.required = TT.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var TT, UT, mT;
        const WT = this._exporter.options.khrInteractivity;
        if (!WT) return;
        const zT = WT.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: TT => this._exporter._getNodeIndex(TT),
          getAnimationIndex: TT => this._exporter._getAnimationIndex(TT),
          getCameraIndex: TT => this._exporter._getCameraIndex(TT),
          getMaterialIndex: TT => this._exporter._getMaterialIndex(TT),
          getRootIndex: (TT, UT) => this._exporter._getRootIndex(TT, UT),
          setNodeExtension: (TT, UT, mT) => this._exporter._setNodeExtension(TT, UT, mT)
        });
        this._exporter._glTF.extensions[kz] = zT;
        for (const MT of WT.additionalExtensionsUsed)(TT = this._exporter._glTF).extensionsUsed || (TT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(MT) && this._exporter._glTF.extensionsUsed.push(MT);
        for (const MT of WT.additionalExtensionsRequired)(UT = this._exporter._glTF).extensionsUsed || (UT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(MT) && this._exporter._glTF.extensionsUsed.push(MT), (mT = this._exporter._glTF).extensionsRequired || (mT.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(MT) && this._exporter._glTF.extensionsRequired.push(MT)
      }
    }
    let lz = !1;

    function Lz() {
      lz || (lz = !0, QW.RegisterExtension(kz, (TT => new jz(TT)), 200))
    }
    Lz();
    const pz = "EXT_lights_area",
      Bz = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      Zz = {
        aspect: 1
      },
      cz = PT.p.Backward();
    class vz {
      constructor(TT) {
        this.name = pz, this.enabled = !0, this.required = !1, this._exporter = TT
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[pz] = this._lights
      }
      async postExportNodeAsync(TT, UT, mT, WT, zT) {
        return await new Promise((MT => {
          if (!(mT instanceof lW.e)) return void MT(UT);
          const gT = mT.getTypeID() == lW.e.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!gT) return dT.b.Warn(`${TT}: Light ${mT.name} is not supported in ${pz}`), void MT(UT);
          const nT = mT;
          if (nT.falloffType !== lW.e.FALLOFF_GLTF && dT.b.Warn(`${TT}: Light falloff for ${mT.name} does not match the ${pz} specification!`), !nT.position.UnT(0, 0, 0)) {
            const TT = PT.l.JB[0].Gw(nT.position);
            zT && Gm(TT), UT.translation = TT.cWT()
          }
          const HT = PT.p.Forward();
          zT && Gm(HT);
          const kT = PT.f.FromUnitVectorsToRef(cz, HT, PT.l.Quaternion[0]);
          PT.f.IsIdentity(kT) || (UT.rotation = kT.cWT());
          const jT = {
            type: gT,
            name: nT.name,
            color: nT.diffuse.cWT(),
            intensity: nT.intensity,
            size: nT.height,
            rect: {
              aspect: nT.width / nT.height
            }
          };
          Am(jT, Bz), jT.rect && Am(jT.rect, Zz), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(jT);
          const lT = {
              light: this._lights.lights.length - 1
            },
            LT = mT.parent;
          if (LT && Dm(nT, LT)) {
            const TT = WT.get(LT);
            if (TT) {
              const mT = this._exporter._nodes[TT];
              return hm(UT, mT), mT.extensions || (mT.extensions = {}), mT.extensions[pz] = lT, void MT(null)
            }
          }
          UT.extensions || (UT.extensions = {}), UT.extensions[pz] = lT, MT(UT)
        }))
      }
    }
    let fz = !1;

    function qz() {
      fz || (fz = !0, QW.RegisterExtension(pz, (TT => new vz(TT))))
    }
    qz();
    const iz = "KHR_materials_anisotropy";
    class bz {
      constructor(TT) {
        this.name = iz, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        const WT = [];
        if (mT instanceof OU) {
          if (mT.anisotropy.isEnabled && !mT.anisotropy.legacy) return mT.anisotropy.texture && WT.push(mT.anisotropy.texture), WT
        } else if (mT instanceof AU && mT.specularRoughnessAnisotropy > 0) {
          const TT = function(TT) {
            const UT = TT.specularRoughnessAnisotropyTexture,
              mT = TT.geometryTangentTexture;
            return `${UT&&UT.getInternalTexture()?UT.getInternalTexture().uniqueId:"NoStrength"}_${mT&&mT.getInternalTexture()?mT.getInternalTexture().uniqueId:"NoTangent"}`
          }(mT);
          if (this._anisoTexturesMap[TT]) WT.push(this._anisoTexturesMap[TT]);
          else {
            const UT = await async function(TT) {
              const UT = TT.KF(),
                mT = TT.specularRoughnessAnisotropyTexture,
                WT = TT.geometryTangentTexture;
              return mT || WT ? await gm("AnisotropyTexture", km(WT ? nm(WT, 0) : Hm(1), WT ? nm(WT, 1) : Hm(0), mT ? nm(mT, 0) : Hm(1)), UT) : null
            }(mT);
            UT && (WT.push(UT), this._anisoTexturesMap[TT] = UT)
          }
          return WT
        }
        return []
      }
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((TT => {
          var WT;
          if (mT instanceof OU) {
            if (!mT.anisotropy.isEnabled || mT.anisotropy.legacy) return void TT(UT);
            this._wasUsed = !0, UT.extensions = UT.extensions || {};
            const WT = this._exporter._materialExporter.getTextureInfo(mT.anisotropy.texture),
              zT = {
                anisotropyStrength: mT.anisotropy.intensity,
                anisotropyRotation: mT.anisotropy.angle,
                anisotropyTexture: WT ?? void 0
              };
            null !== zT.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(mT), UT.extensions[iz] = zT
          } else if (mT instanceof AU && mT.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, UT.extensions = UT.extensions || {};
            let zT = mT.specularRoughnessTexture;
            mT._useRoughnessFromMetallicTextureGreen && (zT = mT.baseMetalnessTexture);
            const MT = this._anisoTexturesMap[mT.id];
            if (!zT && !MT) {
              let WT = mT.specularRoughness,
                zT = mT.specularRoughnessAnisotropy;
              if (!mT._useGltfStyleAnisotropy) {
                const TT = function(TT, UT) {
                  const mT = TT * TT,
                    WT = mT * Math.sqrt(2 / (1 + (1 - UT) * (1 - UT))),
                    zT = (1 - UT) * WT;
                  return {
                    newBaseRoughness: Math.sqrt(zT),
                    newAnisotropyStrength: Math.min(Math.sqrt((WT - mT) / Math.max(1 - mT, 1e-4)), 1)
                  }
                }(mT.specularRoughness, mT.specularRoughnessAnisotropy);
                WT = TT.newBaseRoughness, zT = TT.newAnisotropyStrength
              }
              UT.pbrMetallicRoughness && (UT.pbrMetallicRoughness.roughnessFactor = WT);
              const MT = {
                anisotropyStrength: zT,
                anisotropyRotation: mT.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return UT.extensions[iz] = MT, TT(UT)
            }
            const gT = MT ? this._exporter._materialExporter.getTextureInfo(MT) : null,
              nT = {
                anisotropyStrength: mT.specularRoughnessAnisotropy,
                anisotropyRotation: mT.geometryTangentAngle,
                anisotropyTexture: gT || void 0,
                extensions: {}
              };
            mT._useGltfStyleAnisotropy || (UT.extensions.KHR_materials_openpbr = {}, (WT = this._exporter._glTF).extensionsUsed || (WT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(mT), UT.extensions[iz] = nT
          }
          TT(UT)
        }))
      }
    }
    let Oz = !1;

    function ez() {
      Oz || (Oz = !0, QW.RegisterExtension(iz, (TT => new bz(TT))))
    }
    ez();
    const Yz = "KHR_materials_clearcoat";

    function Jz(TT, UT) {
      const mT = new tT.g(UT.name, UT.KF());
      return mT._texture = TT, mT.coordinatesIndex = UT.coordinatesIndex, UT instanceof tT.g && (mT.uOffset = UT.uOffset, mT.vOffset = UT.vOffset, mT.uScale = UT.uScale, mT.vScale = UT.vScale, mT.wAng = UT.wAng), mT.wrapU = UT.wrapU, mT.wrapV = UT.wrapV, mT
    }
    class xz {
      constructor(TT) {
        this.name = Yz, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = TT
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
      async postExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        const WT = [];
        if (mT instanceof OU) {
          if (mT.clearCoat.isEnabled) return mT.clearCoat.texture && WT.push(mT.clearCoat.texture), !mT.clearCoat.useRoughnessFromMainTexture && mT.clearCoat.textureRoughness && WT.push(mT.clearCoat.textureRoughness), mT.clearCoat.bumpTexture && WT.push(mT.clearCoat.bumpTexture), WT
        } else if (mT instanceof AU && mT.coatWeight > 0) {
          let TT = !1;
          if (mT.coatWeightTexture ? mT.coatRoughnessTexture ? mT._useCoatRoughnessFromGreenChannel && mT.coatWeightTexture.getInternalTexture() === mT.coatRoughnessTexture.getInternalTexture() ? (WT.push(mT.coatWeightTexture), WT.push(mT.coatRoughnessTexture)) : TT = !0 : WT.push(mT.coatWeightTexture) : mT.coatRoughnessTexture && (mT._useCoatRoughnessFromGreenChannel ? WT.push(mT.coatRoughnessTexture) : TT = !0), TT) {
            const TT = function(TT) {
              const UT = TT.coatWeightTexture,
                mT = UT && UT.getInternalTexture() ? UT.getInternalTexture().uniqueId : "NoCoat",
                WT = TT.coatRoughnessTexture;
              return `${mT}_${WT&&WT.getInternalTexture()?WT.getInternalTexture().uniqueId:"NoRoughness"}`
            }(mT);
            if (!this._cachedInternalTexturesMap[TT]) {
              const UT = await async function(TT) {
                const UT = TT.KF(),
                  mT = TT.coatWeightTexture,
                  WT = TT.coatRoughnessTexture;
                return mT || WT ? (await gm("CoatTexture", km(mT ? nm(mT, 0) : Hm(1), WT ? nm(WT, TT._useCoatRoughnessFromGreenChannel ? 1 : 0) : Hm(1)), UT)).getInternalTexture() : null
              }(mT);
              UT && (this._cachedInternalTexturesMap[TT] = UT)
            }
            this._cachedInternalTexturesMap[TT] && (mT.coatWeightTexture && (this._mergedTexturesMap[mT.coatWeightTexture.uniqueId] = Jz(this._cachedInternalTexturesMap[TT], mT.coatWeightTexture), WT.push(this._mergedTexturesMap[mT.coatWeightTexture.uniqueId])), mT.coatRoughnessTexture && (this._mergedTexturesMap[mT.coatRoughnessTexture.uniqueId] = Jz(this._cachedInternalTexturesMap[TT], mT.coatRoughnessTexture), WT.push(this._mergedTexturesMap[mT.coatRoughnessTexture.uniqueId])))
          }
          return mT.geometryCoatNormalTexture && WT.push(mT.geometryCoatNormalTexture), WT
        }
        return []
      }
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((TT => {
          if (mT instanceof OU) {
            if (!mT.clearCoat.isEnabled) return void TT(UT);
            this._wasUsed = !0, UT.extensions = UT.extensions || {};
            const WT = this._exporter._materialExporter.getTextureInfo(mT.clearCoat.texture);
            let zT;
            zT = mT.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(mT.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(mT.clearCoat.textureRoughness), mT.clearCoat.isTintEnabled && YU.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${mT.name}`), mT.clearCoat.remapF0OnInterfaceChange && YU.j.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${mT.name}`);
            const MT = this._exporter._materialExporter.getTextureInfo(mT.clearCoat.bumpTexture),
              gT = {
                clearcoatFactor: mT.clearCoat.intensity,
                clearcoatTexture: WT ?? void 0,
                clearcoatRoughnessFactor: mT.clearCoat.roughness,
                clearcoatRoughnessTexture: zT ?? void 0,
                clearcoatNormalTexture: MT ?? void 0
              };
            null === gT.clearcoatTexture && null === gT.clearcoatRoughnessTexture && null === gT.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(mT), UT.extensions[Yz] = gT
          } else if (mT instanceof AU) {
            if (0 == mT.coatWeight) return void TT(UT);
            let WT, zT, MT, gT;
            this._wasUsed = !0, UT.extensions = UT.extensions || {}, mT.coatWeightTexture && (WT = this._mergedTexturesMap[mT.coatWeightTexture.uniqueId], zT = this._exporter._materialExporter.getTextureInfo(WT)), mT.coatRoughnessTexture && (MT = this._mergedTexturesMap[mT.coatRoughnessTexture.uniqueId], gT = this._exporter._materialExporter.getTextureInfo(MT)), mT.coatColorTexture && YU.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${mT.name}`);
            const nT = this._exporter._materialExporter.getTextureInfo(mT.geometryCoatNormalTexture),
              HT = {
                clearcoatFactor: mT.coatWeight,
                clearcoatTexture: zT ?? void 0,
                clearcoatRoughnessFactor: mT.coatRoughness,
                clearcoatRoughnessTexture: gT ?? void 0,
                clearcoatNormalTexture: nT ?? void 0
              };
            null === HT.clearcoatTexture && null === HT.clearcoatRoughnessTexture && null === HT.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(mT), UT.extensions[Yz] = HT
          }
          TT(UT)
        }))
      }
    }
    let dz = !1;

    function wz() {
      dz || (dz = !0, QW.RegisterExtension(Yz, (TT => new xz(TT))))
    }
    wz();
    const tz = "KHR_materials_coat";

    function az(TT) {
      const UT = TT.coatRoughnessAnisotropyTexture,
        mT = TT.geometryCoatTangentTexture;
      return `${UT&&UT.getInternalTexture()?UT.getInternalTexture().uniqueId:"NoStrength"}_${mT&&mT.getInternalTexture()?mT.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function yz(TT, UT) {
      const mT = new tT.g(UT.name, UT.KF());
      return mT._texture = TT, mT.coordinatesIndex = UT.coordinatesIndex, UT instanceof tT.g && (mT.uOffset = UT.uOffset, mT.vOffset = UT.vOffset, mT.uScale = UT.uScale, mT.vScale = UT.vScale, mT.wAng = UT.wAng), mT.wrapU = UT.wrapU, mT.wrapV = UT.wrapV, mT
    }
    class Xz {
      constructor(TT) {
        this.name = tz, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = TT
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
      async postExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        const WT = [];
        if (mT instanceof OU) {
          if (mT.clearCoat.isEnabled) return mT.clearCoat.texture && WT.push(mT.clearCoat.texture), !mT.clearCoat.useRoughnessFromMainTexture && mT.clearCoat.textureRoughness && WT.push(mT.clearCoat.textureRoughness), mT.clearCoat.bumpTexture && WT.push(mT.clearCoat.bumpTexture), mT.clearCoat.tintTexture && WT.push(mT.clearCoat.tintTexture), WT
        } else if (mT instanceof AU && mT.coatWeight > 0) {
          let TT = !1;
          if (mT.coatWeightTexture ? mT.coatRoughnessTexture ? mT._useCoatRoughnessFromGreenChannel && mT.coatWeightTexture.getInternalTexture() === mT.coatRoughnessTexture.getInternalTexture() ? (WT.push(mT.coatWeightTexture), WT.push(mT.coatRoughnessTexture)) : TT = !0 : WT.push(mT.coatWeightTexture) : mT.coatRoughnessTexture && (mT._useCoatRoughnessFromGreenChannel ? WT.push(mT.coatRoughnessTexture) : TT = !0), TT) {
            const TT = function(TT) {
              const UT = TT.coatWeightTexture,
                mT = UT && UT.getInternalTexture() ? UT.getInternalTexture().uniqueId : "NoCoat",
                WT = TT.coatRoughnessTexture;
              return `${mT}_${WT&&WT.getInternalTexture()?WT.getInternalTexture().uniqueId:"NoRoughness"}`
            }(mT);
            if (!this._cachedInternalTexturesMap[TT]) {
              const UT = await async function(TT) {
                const UT = TT.KF(),
                  mT = TT.coatWeightTexture,
                  WT = TT.coatRoughnessTexture;
                return mT || WT ? (await gm("CoatTexture", km(mT ? nm(mT, 0) : Hm(1), WT ? nm(WT, TT._useCoatRoughnessFromGreenChannel ? 1 : 0) : Hm(1)), UT)).getInternalTexture() : null
              }(mT);
              UT && (this._cachedInternalTexturesMap[TT] = UT)
            }
            this._cachedInternalTexturesMap[TT] && (mT.coatWeightTexture && (this._mergedTexturesMap[mT.coatWeightTexture.uniqueId] = yz(this._cachedInternalTexturesMap[TT], mT.coatWeightTexture), WT.push(this._mergedTexturesMap[mT.coatWeightTexture.uniqueId])), mT.coatRoughnessTexture && (this._mergedTexturesMap[mT.coatRoughnessTexture.uniqueId] = yz(this._cachedInternalTexturesMap[TT], mT.coatRoughnessTexture), WT.push(this._mergedTexturesMap[mT.coatRoughnessTexture.uniqueId])))
          }
          if (mT.geometryCoatNormalTexture && WT.push(mT.geometryCoatNormalTexture), mT.coatColorTexture && WT.push(mT.coatColorTexture), mT.coatRoughnessAnisotropy > 0) {
            const TT = az(mT);
            if (this._mergedTexturesMap[TT]) WT.push(this._mergedTexturesMap[TT]);
            else {
              const UT = await async function(TT) {
                const UT = TT.KF(),
                  mT = TT.coatRoughnessAnisotropyTexture,
                  WT = TT.geometryCoatTangentTexture;
                return mT || WT ? await gm("AnisotropyTexture", km(WT ? nm(WT, 0) : Hm(1), WT ? nm(WT, 1) : Hm(0), mT ? nm(mT, 0) : Hm(1)), UT) : null
              }(mT);
              UT && (WT.push(UT), this._mergedTexturesMap[TT] = UT)
            }
            return WT
          }
          return WT
        }
        return []
      }
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((TT => {
          var WT;
          if (mT instanceof OU) {
            if (!mT.clearCoat.isEnabled) return void TT(UT);
            this._wasUsed = !0, UT.extensions = UT.extensions || {};
            const WT = this._exporter._materialExporter.getTextureInfo(mT.clearCoat.texture);
            let zT, MT;
            zT = mT.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(mT.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(mT.clearCoat.textureRoughness), mT.clearCoat.isTintEnabled && (MT = this._exporter._materialExporter.getTextureInfo(mT.clearCoat.tintTexture));
            const gT = this._exporter._materialExporter.getTextureInfo(mT.clearCoat.bumpTexture),
              nT = mT.clearCoat.indexOfRefraction,
              HT = {
                coatFactor: mT.clearCoat.intensity,
                coatTexture: WT ?? void 0,
                coatRoughnessFactor: mT.clearCoat.roughness,
                coatRoughnessTexture: zT ?? void 0,
                coatNormalTexture: gT ?? void 0,
                coatColorFactor: mT.clearCoat.tintColor.cWT(),
                coatColorTexture: MT ?? void 0,
                coatIor: 1.5 !== nT ? nT : void 0
              };
            null === HT.coatTexture && null === HT.coatRoughnessTexture && null === HT.coatRoughnessTexture && null === HT.coatColorTexture || this._exporter._materialNeedsUVsSet.add(mT), UT.extensions[tz] = HT
          } else if (mT instanceof AU) {
            if (0 == mT.coatWeight) return void TT(UT);
            let zT, MT, gT, nT;
            this._wasUsed = !0, UT.extensions = UT.extensions || {}, mT.coatWeightTexture && (zT = this._mergedTexturesMap[mT.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[mT.coatWeightTexture.uniqueId] : mT.coatWeightTexture, MT = this._exporter._materialExporter.getTextureInfo(zT)), mT.coatRoughnessTexture && (gT = this._mergedTexturesMap[mT.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[mT.coatRoughnessTexture.uniqueId] : mT.coatRoughnessTexture, nT = this._exporter._materialExporter.getTextureInfo(gT));
            const HT = this._exporter._materialExporter.getTextureInfo(mT.geometryCoatNormalTexture),
              kT = this._exporter._materialExporter.getTextureInfo(mT.coatColorTexture),
              jT = mT.coatIor,
              lT = mT.coatDarkening,
              LT = mT.coatRoughnessTexture,
              pT = az(mT),
              BT = this._mergedTexturesMap[pT];
            let ZT, cT = 0,
              vT = 0;
            if (mT.coatRoughnessAnisotropy > 0) {
              if (LT || BT) {
                const TT = BT ? this._exporter._materialExporter.getTextureInfo(BT) : null;
                cT = mT.coatRoughnessAnisotropy, vT = mT.geometryCoatTangentAngle, ZT = TT || void 0
              } else {
                let TT = mT.coatRoughness,
                  WT = mT.coatRoughnessAnisotropy;
                if (!mT._useGltfStyleAnisotropy) {
                  const UT = function(TT, UT) {
                    const mT = TT * TT,
                      WT = mT * Math.sqrt(2 / (1 + (1 - UT) * (1 - UT))),
                      zT = (1 - UT) * WT;
                    return {
                      newBaseRoughness: Math.sqrt(zT),
                      newAnisotropyStrength: Math.min(Math.sqrt((WT - mT) / Math.max(1 - mT, 1e-4)), 1)
                    }
                  }(mT.coatRoughness, mT.coatRoughnessAnisotropy);
                  TT = UT.newBaseRoughness, WT = UT.newAnisotropyStrength
                }
                UT.pbrMetallicRoughness && (UT.pbrMetallicRoughness.roughnessFactor = TT), cT = WT, vT = mT.geometryCoatTangentAngle + .5 * Math.PI, ZT = void 0
              }
              mT._useGltfStyleAnisotropy || (UT.extensions.KHR_materials_openpbr = {}, (WT = this._exporter._glTF).extensionsUsed || (WT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const fT = {
              coatFactor: mT.coatWeight,
              coatTexture: MT ?? void 0,
              coatRoughnessFactor: mT.coatRoughness,
              coatRoughnessTexture: nT ?? void 0,
              coatNormalTexture: HT ?? void 0,
              coatColorFactor: mT.coatColor.cWT(),
              coatColorTexture: kT ?? void 0,
              coatIor: 1.5 !== jT ? jT : void 0,
              coatDarkeningFactor: 1 !== lT ? lT : void 0,
              coatAnisotropyRotation: vT,
              coatAnisotropyStrength: cT,
              coatAnisotropyTexture: ZT
            };
            null === fT.coatTexture && null === fT.coatRoughnessTexture && null === fT.coatRoughnessTexture && null === fT.coatAnisotropyTexture && null === fT.coatColorTexture || this._exporter._materialNeedsUVsSet.add(mT), UT.extensions[tz] = fT
          }
          TT(UT)
        }))
      }
    }
    let Iz = !1;

    function Qz() {
      Iz || (Iz = !0, QW.RegisterExtension(tz, (TT => new Xz(TT))))
    }
    Qz();
    let sz = (() => {
      var TT, UT, mT, WT, zT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT, vT, fT, qT, iT, bT, OT, eT, YT, dT, wT, tT, aT, yT, XT, QT, sT, FT, PT, VT, uT, CT, rT, KT, ST, NT, ET, hT, DT, oT, AT, RT, TU, UU, mU, WU, zU, MU, gU, nU, HU, kU, jU, lU, LU, pU, BU, ZU, cU, vU, fU, qU;
      let iU, bU, YU, JU, xU, dU, wU, tU, aU, yU, XU, IU, QU, sU, FU, PU, VU, uU, CU, rU, KU, SU, GU, NU, EU, hU, DU, oU, AU, RU, Tm, Um, mm, Wm, zm, Mm, gm, nm, Hm, km, jm, lm, Lm, pm, Bm, Zm, cm, fm, qm, im, bm, Om, em, Ym, Jm, xm, dm, wm, tm, am, ym, Xm, Im, Qm, sm, Fm, Pm, Vm, um = OU,
        Cm = [],
        rm = [],
        Km = [],
        Sm = [],
        Gm = [],
        Nm = [],
        Em = [],
        hm = [],
        Dm = [],
        om = [],
        Am = [],
        Rm = [],
        TW = [],
        UW = [],
        mW = [],
        WW = [],
        zW = [],
        MW = [],
        gW = [],
        nW = [],
        HW = [],
        kW = [],
        jW = [],
        lW = [],
        LW = [],
        pW = [],
        BW = [],
        ZW = [],
        cW = [],
        vW = [],
        fW = [],
        qW = [],
        iW = [],
        bW = [],
        OW = [],
        eW = [],
        YW = [],
        JW = [],
        xW = [],
        dW = [],
        wW = [],
        tW = [],
        aW = [],
        yW = [],
        XW = [],
        IW = [],
        QW = [],
        sW = [],
        FW = [],
        PW = [],
        VW = [],
        uW = [],
        CW = [],
        rW = [],
        KW = [],
        SW = [],
        GW = [],
        NW = [],
        EW = [],
        hW = [],
        DW = [],
        oW = [],
        AW = [],
        RW = [],
        Tz = [],
        Uz = [],
        mz = [],
        Wz = [],
        zz = [],
        Mz = [],
        gz = [],
        nz = [],
        Hz = [],
        kz = [],
        jz = [],
        lz = [],
        Lz = [],
        pz = [],
        Bz = [],
        Zz = [],
        cz = [],
        vz = [],
        fz = [],
        qz = [],
        iz = [],
        bz = [],
        Oz = [],
        ez = [],
        Yz = [],
        Jz = [],
        xz = [],
        dz = [],
        wz = [],
        tz = [],
        az = [],
        yz = [],
        Xz = [],
        Iz = [],
        Qz = [],
        sz = [],
        Fz = [],
        Pz = [],
        Vz = [],
        uz = [],
        Cz = [],
        rz = [],
        Kz = [],
        Sz = [],
        Gz = [],
        Nz = [],
        Ez = [],
        hz = [],
        Dz = [],
        oz = [],
        Az = [],
        Rz = [],
        TM = [],
        UM = [],
        mM = [],
        WM = [],
        zM = [],
        MM = [],
        gM = [],
        nM = [],
        HM = [],
        kM = [],
        jM = [],
        lM = [],
        LM = [],
        pM = [],
        BM = [],
        ZM = [],
        cM = [];
      return TT = class extends um {
        get directIntensity() {
          return (0, JT.d)(this, UT, "f")
        }
        set directIntensity(TT) {
          (0, JT.e)(this, UT, TT, "f")
        }
        get emissiveIntensity() {
          return (0, JT.d)(this, mT, "f")
        }
        set emissiveIntensity(TT) {
          (0, JT.e)(this, mT, TT, "f")
        }
        get environmentIntensity() {
          return (0, JT.d)(this, WT, "f")
        }
        set environmentIntensity(TT) {
          (0, JT.e)(this, WT, TT, "f")
        }
        get specularIntensity() {
          return (0, JT.d)(this, zT, "f")
        }
        set specularIntensity(TT) {
          (0, JT.e)(this, zT, TT, "f")
        }
        get disableBumpMap() {
          return (0, JT.d)(this, gT, "f")
        }
        set disableBumpMap(TT) {
          (0, JT.e)(this, gT, TT, "f")
        }
        get albedoTexture() {
          return (0, JT.d)(this, nT, "f")
        }
        set albedoTexture(TT) {
          (0, JT.e)(this, nT, TT, "f")
        }
        get baseWeightTexture() {
          return (0, JT.d)(this, HT, "f")
        }
        set baseWeightTexture(TT) {
          (0, JT.e)(this, HT, TT, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, JT.d)(this, kT, "f")
        }
        set baseDiffuseRoughnessTexture(TT) {
          (0, JT.e)(this, kT, TT, "f")
        }
        get ambientTexture() {
          return (0, JT.d)(this, jT, "f")
        }
        set ambientTexture(TT) {
          (0, JT.e)(this, jT, TT, "f")
        }
        get ambientTextureStrength() {
          return (0, JT.d)(this, lT, "f")
        }
        set ambientTextureStrength(TT) {
          (0, JT.e)(this, lT, TT, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, JT.d)(this, LT, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(TT) {
          (0, JT.e)(this, LT, TT, "f")
        }
        get opacityTexture() {
          return (0, JT.d)(this, pT, "f")
        }
        set opacityTexture(TT) {
          (0, JT.e)(this, pT, TT, "f")
        }
        get reflectionTexture() {
          return (0, JT.d)(this, BT, "f")
        }
        set reflectionTexture(TT) {
          (0, JT.e)(this, BT, TT, "f")
        }
        get emissiveTexture() {
          return (0, JT.d)(this, ZT, "f")
        }
        set emissiveTexture(TT) {
          (0, JT.e)(this, ZT, TT, "f")
        }
        get reflectivityTexture() {
          return (0, JT.d)(this, cT, "f")
        }
        set reflectivityTexture(TT) {
          (0, JT.e)(this, cT, TT, "f")
        }
        get metallicTexture() {
          return (0, JT.d)(this, vT, "f")
        }
        set metallicTexture(TT) {
          (0, JT.e)(this, vT, TT, "f")
        }
        get metallic() {
          return (0, JT.d)(this, fT, "f")
        }
        set metallic(TT) {
          (0, JT.e)(this, fT, TT, "f")
        }
        get roughness() {
          return (0, JT.d)(this, qT, "f")
        }
        set roughness(TT) {
          (0, JT.e)(this, qT, TT, "f")
        }
        get metallicF0Factor() {
          return (0, JT.d)(this, iT, "f")
        }
        set metallicF0Factor(TT) {
          (0, JT.e)(this, iT, TT, "f")
        }
        get metallicReflectanceColor() {
          return (0, JT.d)(this, bT, "f")
        }
        set metallicReflectanceColor(TT) {
          (0, JT.e)(this, bT, TT, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, JT.d)(this, OT, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(TT) {
          (0, JT.e)(this, OT, TT, "f")
        }
        get metallicReflectanceTexture() {
          return (0, JT.d)(this, eT, "f")
        }
        set metallicReflectanceTexture(TT) {
          (0, JT.e)(this, eT, TT, "f")
        }
        get reflectanceTexture() {
          return (0, JT.d)(this, YT, "f")
        }
        set reflectanceTexture(TT) {
          (0, JT.e)(this, YT, TT, "f")
        }
        get microSurfaceTexture() {
          return (0, JT.d)(this, dT, "f")
        }
        set microSurfaceTexture(TT) {
          (0, JT.e)(this, dT, TT, "f")
        }
        get bumpTexture() {
          return (0, JT.d)(this, wT, "f")
        }
        set bumpTexture(TT) {
          (0, JT.e)(this, wT, TT, "f")
        }
        get lightmapTexture() {
          return (0, JT.d)(this, tT, "f")
        }
        set lightmapTexture(TT) {
          (0, JT.e)(this, tT, TT, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(TT) {
          this.subSurface.refractionTexture = TT, TT ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, JT.d)(this, aT, "f")
        }
        set ambientColor(TT) {
          (0, JT.e)(this, aT, TT, "f")
        }
        get albedoColor() {
          return (0, JT.d)(this, yT, "f")
        }
        set albedoColor(TT) {
          (0, JT.e)(this, yT, TT, "f")
        }
        get baseWeight() {
          return (0, JT.d)(this, XT, "f")
        }
        set baseWeight(TT) {
          (0, JT.e)(this, XT, TT, "f")
        }
        get baseDiffuseRoughness() {
          return (0, JT.d)(this, QT, "f")
        }
        set baseDiffuseRoughness(TT) {
          (0, JT.e)(this, QT, TT, "f")
        }
        get reflectivityColor() {
          return (0, JT.d)(this, sT, "f")
        }
        set reflectivityColor(TT) {
          (0, JT.e)(this, sT, TT, "f")
        }
        get reflectionColor() {
          return (0, JT.d)(this, FT, "f")
        }
        set reflectionColor(TT) {
          (0, JT.e)(this, FT, TT, "f")
        }
        get emissiveColor() {
          return (0, JT.d)(this, PT, "f")
        }
        set emissiveColor(TT) {
          (0, JT.e)(this, PT, TT, "f")
        }
        get microSurface() {
          return (0, JT.d)(this, VT, "f")
        }
        set microSurface(TT) {
          (0, JT.e)(this, VT, TT, "f")
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
          return (0, JT.d)(this, uT, "f")
        }
        set useLightmapAsShadowmap(TT) {
          (0, JT.e)(this, uT, TT, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, JT.d)(this, CT, "f")
        }
        set useAlphaFromAlbedoTexture(TT) {
          (0, JT.e)(this, CT, TT, "f")
        }
        get forceAlphaTest() {
          return (0, JT.d)(this, rT, "f")
        }
        set forceAlphaTest(TT) {
          (0, JT.e)(this, rT, TT, "f")
        }
        get alphaCutOff() {
          return (0, JT.d)(this, KT, "f")
        }
        set alphaCutOff(TT) {
          (0, JT.e)(this, KT, TT, "f")
        }
        get useSpecularOverAlpha() {
          return (0, JT.d)(this, ST, "f")
        }
        set useSpecularOverAlpha(TT) {
          (0, JT.e)(this, ST, TT, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, JT.d)(this, NT, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(TT) {
          (0, JT.e)(this, NT, TT, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, JT.d)(this, ET, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(TT) {
          (0, JT.e)(this, ET, TT, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, JT.d)(this, hT, "f")
        }
        set useRoughnessFromMetallicTextureGreen(TT) {
          (0, JT.e)(this, hT, TT, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, JT.d)(this, DT, "f")
        }
        set useMetallnessFromMetallicTextureBlue(TT) {
          (0, JT.e)(this, DT, TT, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, JT.d)(this, oT, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(TT) {
          (0, JT.e)(this, oT, TT, "f")
        }
        get useAmbientInGrayScale() {
          return (0, JT.d)(this, AT, "f")
        }
        set useAmbientInGrayScale(TT) {
          (0, JT.e)(this, AT, TT, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, JT.d)(this, RT, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(TT) {
          (0, JT.e)(this, RT, TT, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === OU.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(TT) {
          TT !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? OU.LIGHTFALLOFF_PHYSICAL : OU.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === OU.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(TT) {
          TT !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? OU.LIGHTFALLOFF_GLTF : OU.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, JT.d)(this, TU, "f")
        }
        set useRadianceOverAlpha(TT) {
          (0, JT.e)(this, TU, TT, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, JT.d)(this, UU, "f")
        }
        set useObjectSpaceNormalMap(TT) {
          (0, JT.e)(this, UU, TT, "f")
        }
        get useParallax() {
          return (0, JT.d)(this, mU, "f")
        }
        set useParallax(TT) {
          (0, JT.e)(this, mU, TT, "f")
        }
        get useParallaxOcclusion() {
          return (0, JT.d)(this, WU, "f")
        }
        set useParallaxOcclusion(TT) {
          (0, JT.e)(this, WU, TT, "f")
        }
        get parallaxScaleBias() {
          return (0, JT.d)(this, zU, "f")
        }
        set parallaxScaleBias(TT) {
          (0, JT.e)(this, zU, TT, "f")
        }
        get disableLighting() {
          return (0, JT.d)(this, MU, "f")
        }
        set disableLighting(TT) {
          (0, JT.e)(this, MU, TT, "f")
        }
        get forceIrradianceInFragment() {
          return (0, JT.d)(this, gU, "f")
        }
        set forceIrradianceInFragment(TT) {
          (0, JT.e)(this, gU, TT, "f")
        }
        get maxSimultaneousLights() {
          return (0, JT.d)(this, nU, "f")
        }
        set maxSimultaneousLights(TT) {
          (0, JT.e)(this, nU, TT, "f")
        }
        get invertNormalMapX() {
          return (0, JT.d)(this, HU, "f")
        }
        set invertNormalMapX(TT) {
          (0, JT.e)(this, HU, TT, "f")
        }
        get invertNormalMapY() {
          return (0, JT.d)(this, kU, "f")
        }
        set invertNormalMapY(TT) {
          (0, JT.e)(this, kU, TT, "f")
        }
        get twoSidedLighting() {
          return (0, JT.d)(this, jU, "f")
        }
        set twoSidedLighting(TT) {
          (0, JT.e)(this, jU, TT, "f")
        }
        get useAlphaFresnel() {
          return (0, JT.d)(this, lU, "f")
        }
        set useAlphaFresnel(TT) {
          (0, JT.e)(this, lU, TT, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, JT.d)(this, LU, "f")
        }
        set useLinearAlphaFresnel(TT) {
          (0, JT.e)(this, LU, TT, "f")
        }
        get environmentBRDFTexture() {
          return (0, JT.d)(this, pU, "f")
        }
        set environmentBRDFTexture(TT) {
          (0, JT.e)(this, pU, TT, "f")
        }
        get forceNormalForward() {
          return (0, JT.d)(this, BU, "f")
        }
        set forceNormalForward(TT) {
          (0, JT.e)(this, BU, TT, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, JT.d)(this, ZU, "f")
        }
        set enableSpecularAntiAliasing(TT) {
          (0, JT.e)(this, ZU, TT, "f")
        }
        get useHorizonOcclusion() {
          return (0, JT.d)(this, cU, "f")
        }
        set useHorizonOcclusion(TT) {
          (0, JT.e)(this, cU, TT, "f")
        }
        get useRadianceOcclusion() {
          return (0, JT.d)(this, vU, "f")
        }
        set useRadianceOcclusion(TT) {
          (0, JT.e)(this, vU, TT, "f")
        }
        get unlit() {
          return (0, JT.d)(this, fU, "f")
        }
        set unlit(TT) {
          (0, JT.e)(this, fU, TT, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, JT.d)(this, qU, "f")
        }
        set applyDecalMapAfterDetailMap(TT) {
          (0, JT.e)(this, qU, TT, "f")
        }
        constructor(MT, xT) {
          super(MT, xT, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), UT.set(this, ((0, JT.k)(this, Cm), (0, JT.k)(this, rm, 1))), mT.set(this, ((0, JT.k)(this, Km), (0, JT.k)(this, Sm, 1))), WT.set(this, ((0, JT.k)(this, Gm), (0, JT.k)(this, Nm, 1))), zT.set(this, ((0, JT.k)(this, Em), (0, JT.k)(this, hm, 1))), gT.set(this, ((0, JT.k)(this, Dm), (0, JT.k)(this, om, !1))), nT.set(this, ((0, JT.k)(this, Am), (0, JT.k)(this, Rm, void 0))), HT.set(this, ((0, JT.k)(this, TW), (0, JT.k)(this, UW, void 0))), kT.set(this, ((0, JT.k)(this, mW), (0, JT.k)(this, WW, void 0))), jT.set(this, ((0, JT.k)(this, zW), (0, JT.k)(this, MW, void 0))), lT.set(this, ((0, JT.k)(this, gW), (0, JT.k)(this, nW, 1))), LT.set(this, ((0, JT.k)(this, HW), (0, JT.k)(this, kW, TT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), pT.set(this, ((0, JT.k)(this, jW), (0, JT.k)(this, lW, void 0))), BT.set(this, ((0, JT.k)(this, LW), (0, JT.k)(this, pW, void 0))), ZT.set(this, ((0, JT.k)(this, BW), (0, JT.k)(this, ZW, void 0))), cT.set(this, ((0, JT.k)(this, cW), (0, JT.k)(this, vW, void 0))), vT.set(this, ((0, JT.k)(this, fW), (0, JT.k)(this, qW, void 0))), fT.set(this, ((0, JT.k)(this, iW), (0, JT.k)(this, bW, void 0))), qT.set(this, ((0, JT.k)(this, OW), (0, JT.k)(this, eW, void 0))), iT.set(this, ((0, JT.k)(this, YW), (0, JT.k)(this, JW, 1))), bT.set(this, ((0, JT.k)(this, xW), (0, JT.k)(this, dW, GT.d.White()))), OT.set(this, ((0, JT.k)(this, wW), (0, JT.k)(this, tW, !1))), eT.set(this, ((0, JT.k)(this, aW), (0, JT.k)(this, yW, void 0))), YT.set(this, ((0, JT.k)(this, XW), (0, JT.k)(this, IW, void 0))), dT.set(this, ((0, JT.k)(this, QW), (0, JT.k)(this, sW, void 0))), wT.set(this, ((0, JT.k)(this, FW), (0, JT.k)(this, PW, void 0))), tT.set(this, ((0, JT.k)(this, VW), (0, JT.k)(this, uW, void 0))), aT.set(this, ((0, JT.k)(this, CW), (0, JT.k)(this, rW, new GT.d(0, 0, 0)))), yT.set(this, ((0, JT.k)(this, KW), (0, JT.k)(this, SW, new GT.d(1, 1, 1)))), XT.set(this, ((0, JT.k)(this, GW), (0, JT.k)(this, NW, 1))), QT.set(this, ((0, JT.k)(this, EW), (0, JT.k)(this, hW, void 0))), sT.set(this, ((0, JT.k)(this, DW), (0, JT.k)(this, oW, new GT.d(1, 1, 1)))), FT.set(this, ((0, JT.k)(this, AW), (0, JT.k)(this, RW, new GT.d(1, 1, 1)))), PT.set(this, ((0, JT.k)(this, Tz), (0, JT.k)(this, Uz, new GT.d(0, 0, 0)))), VT.set(this, ((0, JT.k)(this, mz), (0, JT.k)(this, Wz, 1))), uT.set(this, ((0, JT.k)(this, zz), (0, JT.k)(this, Mz, !1))), CT.set(this, ((0, JT.k)(this, gz), (0, JT.k)(this, nz, !1))), rT.set(this, ((0, JT.k)(this, Hz), (0, JT.k)(this, kz, !1))), KT.set(this, ((0, JT.k)(this, jz), (0, JT.k)(this, lz, .4))), ST.set(this, ((0, JT.k)(this, Lz), (0, JT.k)(this, pz, !0))), NT.set(this, ((0, JT.k)(this, Bz), (0, JT.k)(this, Zz, !1))), ET.set(this, ((0, JT.k)(this, cz), (0, JT.k)(this, vz, !0))), hT.set(this, ((0, JT.k)(this, fz), (0, JT.k)(this, qz, !1))), DT.set(this, ((0, JT.k)(this, iz), (0, JT.k)(this, bz, !1))), oT.set(this, ((0, JT.k)(this, Oz), (0, JT.k)(this, ez, !1))), AT.set(this, ((0, JT.k)(this, Yz), (0, JT.k)(this, Jz, !1))), RT.set(this, ((0, JT.k)(this, xz), (0, JT.k)(this, dz, !1))), TU.set(this, ((0, JT.k)(this, wz), (0, JT.k)(this, tz, !0))), UU.set(this, ((0, JT.k)(this, az), (0, JT.k)(this, yz, !1))), mU.set(this, ((0, JT.k)(this, Xz), (0, JT.k)(this, Iz, !1))), WU.set(this, ((0, JT.k)(this, Qz), (0, JT.k)(this, sz, !1))), zU.set(this, ((0, JT.k)(this, Fz), (0, JT.k)(this, Pz, .05))), MU.set(this, ((0, JT.k)(this, Vz), (0, JT.k)(this, uz, !1))), gU.set(this, ((0, JT.k)(this, Cz), (0, JT.k)(this, rz, !1))), nU.set(this, ((0, JT.k)(this, Kz), (0, JT.k)(this, Sz, 4))), HU.set(this, ((0, JT.k)(this, Gz), (0, JT.k)(this, Nz, !1))), kU.set(this, ((0, JT.k)(this, Ez), (0, JT.k)(this, hz, !1))), jU.set(this, ((0, JT.k)(this, Dz), (0, JT.k)(this, oz, !1))), lU.set(this, ((0, JT.k)(this, Az), (0, JT.k)(this, Rz, !1))), LU.set(this, ((0, JT.k)(this, TM), (0, JT.k)(this, UM, !1))), pU.set(this, ((0, JT.k)(this, mM), (0, JT.k)(this, WM, null))), BU.set(this, ((0, JT.k)(this, zM), (0, JT.k)(this, MM, !1))), ZU.set(this, ((0, JT.k)(this, gM), (0, JT.k)(this, nM, !1))), cU.set(this, ((0, JT.k)(this, HM), (0, JT.k)(this, kM, !0))), vU.set(this, ((0, JT.k)(this, jM), (0, JT.k)(this, lM, !0))), fU.set(this, ((0, JT.k)(this, LM), (0, JT.k)(this, pM, !1))), qU.set(this, ((0, JT.k)(this, BM), (0, JT.k)(this, ZM, !1))), (0, JT.k)(this, cM), this._environmentBRDFTexture = IT(this.KF())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(UT) {
          let mT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const zT = eU.e.Clone((() => new TT(UT, this.KF())), this, {
            cloneTexturesOnlyOnce: mT
          });
          return zT.id = UT, zT.name = UT, this.stencil.copyTo(zT.stencil), this._clonePlugins(zT, WT), zT
        }
        serialize() {
          const TT = super.serialize();
          return TT.customType = "BABYLON.PBRMaterial", TT
        }
        static Parse(UT, mT, WT) {
          const zT = eU.e.Parse((() => new TT(UT.name, mT)), UT, mT, WT);
          return UT.stencil && zT.stencil.parse(UT.stencil, mT, WT), MT.b._ParsePlugins(UT, zT, mT, WT), UT.clearCoat && zT.clearCoat.parse(UT.clearCoat, mT, WT), UT.anisotropy && zT.anisotropy.parse(UT.anisotropy, mT, WT), UT.brdf && zT.brdf.parse(UT.brdf, mT, WT), UT.sheen && zT.sheen.parse(UT.sheen, mT, WT), UT.subSurface && zT.subSurface.parse(UT.subSurface, mT, WT), UT.iridescence && zT.iridescence.parse(UT.iridescence, mT, WT), zT
        }
      }, UT = new WeakMap, mT = new WeakMap, WT = new WeakMap, zT = new WeakMap, gT = new WeakMap, nT = new WeakMap, HT = new WeakMap, kT = new WeakMap, jT = new WeakMap, lT = new WeakMap, LT = new WeakMap, pT = new WeakMap, BT = new WeakMap, ZT = new WeakMap, cT = new WeakMap, vT = new WeakMap, fT = new WeakMap, qT = new WeakMap, iT = new WeakMap, bT = new WeakMap, OT = new WeakMap, eT = new WeakMap, YT = new WeakMap, dT = new WeakMap, wT = new WeakMap, tT = new WeakMap, aT = new WeakMap, yT = new WeakMap, XT = new WeakMap, QT = new WeakMap, sT = new WeakMap, FT = new WeakMap, PT = new WeakMap, VT = new WeakMap, uT = new WeakMap, CT = new WeakMap, rT = new WeakMap, KT = new WeakMap, ST = new WeakMap, NT = new WeakMap, ET = new WeakMap, hT = new WeakMap, DT = new WeakMap, oT = new WeakMap, AT = new WeakMap, RT = new WeakMap, TU = new WeakMap, UU = new WeakMap, mU = new WeakMap, WU = new WeakMap, zU = new WeakMap, MU = new WeakMap, gU = new WeakMap, nU = new WeakMap, HU = new WeakMap, kU = new WeakMap, jU = new WeakMap, lU = new WeakMap, LU = new WeakMap, pU = new WeakMap, BU = new WeakMap, ZU = new WeakMap, cU = new WeakMap, vU = new WeakMap, fU = new WeakMap, qU = new WeakMap, (() => {
        const UT = "function" === typeof Symbol && Symbol.metadata ? Object.create(um[Symbol.metadata] ?? null) : void 0;
        iU = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], bU = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], YU = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], JU = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], xU = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], dU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], wU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], tU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], aU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], yU = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], XU = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], IU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], QU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], sU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], FU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], PU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], VU = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], uU = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], CU = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], rU = [(0, xT.l)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], KU = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], SU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], GU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], NU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], EU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], hU = [(0, xT.C)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty", null)], DU = [(0, xT.l)("ambient"), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], oU = [(0, xT.l)("albedo"), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], AU = [(0, xT.L)("baseWeight"), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], RU = [(0, xT.L)("baseDiffuseRoughness"), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Tm = [(0, xT.l)("reflectivity"), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Um = [(0, xT.l)("reflection"), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], mm = [(0, xT.l)("emissive"), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Wm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], zm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Mm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], gm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], nm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], Hm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], km = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], jm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], lm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Lm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], pm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Bm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Zm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], cm = [(0, xT.L)()], fm = [(0, xT.L)()], qm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], im = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], bm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Om = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], em = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Ym = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsLightsDirty")], Jm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], xm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsLightsDirty")], dm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], wm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], tm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], am = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], ym = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Xm = [(0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Im = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Qm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], sm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Fm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsTexturesDirty")], Pm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], Vm = [(0, xT.L)(), (0, xT.g)("_markAllSubMeshesAsMiscDirty")], (0, JT.h)(TT, null, iU, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "directIntensity" in TT,
            get: TT => TT.directIntensity,
            set: (TT, UT) => {
              TT.directIntensity = UT
            }
          },
          metadata: UT
        }, rm, Km), (0, JT.h)(TT, null, bU, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "emissiveIntensity" in TT,
            get: TT => TT.emissiveIntensity,
            set: (TT, UT) => {
              TT.emissiveIntensity = UT
            }
          },
          metadata: UT
        }, Sm, Gm), (0, JT.h)(TT, null, YU, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "environmentIntensity" in TT,
            get: TT => TT.environmentIntensity,
            set: (TT, UT) => {
              TT.environmentIntensity = UT
            }
          },
          metadata: UT
        }, Nm, Em), (0, JT.h)(TT, null, JU, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "specularIntensity" in TT,
            get: TT => TT.specularIntensity,
            set: (TT, UT) => {
              TT.specularIntensity = UT
            }
          },
          metadata: UT
        }, hm, Dm), (0, JT.h)(TT, null, xU, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: TT => "disableBumpMap" in TT,
            get: TT => TT.disableBumpMap,
            set: (TT, UT) => {
              TT.disableBumpMap = UT
            }
          },
          metadata: UT
        }, om, Am), (0, JT.h)(TT, null, dU, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "albedoTexture" in TT,
            get: TT => TT.albedoTexture,
            set: (TT, UT) => {
              TT.albedoTexture = UT
            }
          },
          metadata: UT
        }, Rm, TW), (0, JT.h)(TT, null, wU, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseWeightTexture" in TT,
            get: TT => TT.baseWeightTexture,
            set: (TT, UT) => {
              TT.baseWeightTexture = UT
            }
          },
          metadata: UT
        }, UW, mW), (0, JT.h)(TT, null, tU, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseDiffuseRoughnessTexture" in TT,
            get: TT => TT.baseDiffuseRoughnessTexture,
            set: (TT, UT) => {
              TT.baseDiffuseRoughnessTexture = UT
            }
          },
          metadata: UT
        }, WW, zW), (0, JT.h)(TT, null, aU, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "ambientTexture" in TT,
            get: TT => TT.ambientTexture,
            set: (TT, UT) => {
              TT.ambientTexture = UT
            }
          },
          metadata: UT
        }, MW, gW), (0, JT.h)(TT, null, yU, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: TT => "ambientTextureStrength" in TT,
            get: TT => TT.ambientTextureStrength,
            set: (TT, UT) => {
              TT.ambientTextureStrength = UT
            }
          },
          metadata: UT
        }, nW, HW), (0, JT.h)(TT, null, XU, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: TT => "ambientTextureImpactOnAnalyticalLights" in TT,
            get: TT => TT.ambientTextureImpactOnAnalyticalLights,
            set: (TT, UT) => {
              TT.ambientTextureImpactOnAnalyticalLights = UT
            }
          },
          metadata: UT
        }, kW, jW), (0, JT.h)(TT, null, IU, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "opacityTexture" in TT,
            get: TT => TT.opacityTexture,
            set: (TT, UT) => {
              TT.opacityTexture = UT
            }
          },
          metadata: UT
        }, lW, LW), (0, JT.h)(TT, null, QU, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectionTexture" in TT,
            get: TT => TT.reflectionTexture,
            set: (TT, UT) => {
              TT.reflectionTexture = UT
            }
          },
          metadata: UT
        }, pW, BW), (0, JT.h)(TT, null, sU, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "emissiveTexture" in TT,
            get: TT => TT.emissiveTexture,
            set: (TT, UT) => {
              TT.emissiveTexture = UT
            }
          },
          metadata: UT
        }, ZW, cW), (0, JT.h)(TT, null, FU, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectivityTexture" in TT,
            get: TT => TT.reflectivityTexture,
            set: (TT, UT) => {
              TT.reflectivityTexture = UT
            }
          },
          metadata: UT
        }, vW, fW), (0, JT.h)(TT, null, PU, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallicTexture" in TT,
            get: TT => TT.metallicTexture,
            set: (TT, UT) => {
              TT.metallicTexture = UT
            }
          },
          metadata: UT
        }, qW, iW), (0, JT.h)(TT, null, VU, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallic" in TT,
            get: TT => TT.metallic,
            set: (TT, UT) => {
              TT.metallic = UT
            }
          },
          metadata: UT
        }, bW, OW), (0, JT.h)(TT, null, uU, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "roughness" in TT,
            get: TT => TT.roughness,
            set: (TT, UT) => {
              TT.roughness = UT
            }
          },
          metadata: UT
        }, eW, YW), (0, JT.h)(TT, null, CU, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallicF0Factor" in TT,
            get: TT => TT.metallicF0Factor,
            set: (TT, UT) => {
              TT.metallicF0Factor = UT
            }
          },
          metadata: UT
        }, JW, xW), (0, JT.h)(TT, null, rU, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallicReflectanceColor" in TT,
            get: TT => TT.metallicReflectanceColor,
            set: (TT, UT) => {
              TT.metallicReflectanceColor = UT
            }
          },
          metadata: UT
        }, dW, wW), (0, JT.h)(TT, null, KU, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useOnlyMetallicFromMetallicReflectanceTexture" in TT,
            get: TT => TT.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (TT, UT) => {
              TT.useOnlyMetallicFromMetallicReflectanceTexture = UT
            }
          },
          metadata: UT
        }, tW, aW), (0, JT.h)(TT, null, SU, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallicReflectanceTexture" in TT,
            get: TT => TT.metallicReflectanceTexture,
            set: (TT, UT) => {
              TT.metallicReflectanceTexture = UT
            }
          },
          metadata: UT
        }, yW, XW), (0, JT.h)(TT, null, GU, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectanceTexture" in TT,
            get: TT => TT.reflectanceTexture,
            set: (TT, UT) => {
              TT.reflectanceTexture = UT
            }
          },
          metadata: UT
        }, IW, QW), (0, JT.h)(TT, null, NU, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "microSurfaceTexture" in TT,
            get: TT => TT.microSurfaceTexture,
            set: (TT, UT) => {
              TT.microSurfaceTexture = UT
            }
          },
          metadata: UT
        }, sW, FW), (0, JT.h)(TT, null, EU, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "bumpTexture" in TT,
            get: TT => TT.bumpTexture,
            set: (TT, UT) => {
              TT.bumpTexture = UT
            }
          },
          metadata: UT
        }, PW, VW), (0, JT.h)(TT, null, hU, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "lightmapTexture" in TT,
            get: TT => TT.lightmapTexture,
            set: (TT, UT) => {
              TT.lightmapTexture = UT
            }
          },
          metadata: UT
        }, uW, CW), (0, JT.h)(TT, null, DU, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "ambientColor" in TT,
            get: TT => TT.ambientColor,
            set: (TT, UT) => {
              TT.ambientColor = UT
            }
          },
          metadata: UT
        }, rW, KW), (0, JT.h)(TT, null, oU, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "albedoColor" in TT,
            get: TT => TT.albedoColor,
            set: (TT, UT) => {
              TT.albedoColor = UT
            }
          },
          metadata: UT
        }, SW, GW), (0, JT.h)(TT, null, AU, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseWeight" in TT,
            get: TT => TT.baseWeight,
            set: (TT, UT) => {
              TT.baseWeight = UT
            }
          },
          metadata: UT
        }, NW, EW), (0, JT.h)(TT, null, RU, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseDiffuseRoughness" in TT,
            get: TT => TT.baseDiffuseRoughness,
            set: (TT, UT) => {
              TT.baseDiffuseRoughness = UT
            }
          },
          metadata: UT
        }, hW, DW), (0, JT.h)(TT, null, Tm, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectivityColor" in TT,
            get: TT => TT.reflectivityColor,
            set: (TT, UT) => {
              TT.reflectivityColor = UT
            }
          },
          metadata: UT
        }, oW, AW), (0, JT.h)(TT, null, Um, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectionColor" in TT,
            get: TT => TT.reflectionColor,
            set: (TT, UT) => {
              TT.reflectionColor = UT
            }
          },
          metadata: UT
        }, RW, Tz), (0, JT.h)(TT, null, mm, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "emissiveColor" in TT,
            get: TT => TT.emissiveColor,
            set: (TT, UT) => {
              TT.emissiveColor = UT
            }
          },
          metadata: UT
        }, Uz, mz), (0, JT.h)(TT, null, Wm, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: TT => "microSurface" in TT,
            get: TT => TT.microSurface,
            set: (TT, UT) => {
              TT.microSurface = UT
            }
          },
          metadata: UT
        }, Wz, zz), (0, JT.h)(TT, null, zm, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: TT => "useLightmapAsShadowmap" in TT,
            get: TT => TT.useLightmapAsShadowmap,
            set: (TT, UT) => {
              TT.useLightmapAsShadowmap = UT
            }
          },
          metadata: UT
        }, Mz, gz), (0, JT.h)(TT, null, Mm, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAlphaFromAlbedoTexture" in TT,
            get: TT => TT.useAlphaFromAlbedoTexture,
            set: (TT, UT) => {
              TT.useAlphaFromAlbedoTexture = UT
            }
          },
          metadata: UT
        }, nz, Hz), (0, JT.h)(TT, null, gm, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: TT => "forceAlphaTest" in TT,
            get: TT => TT.forceAlphaTest,
            set: (TT, UT) => {
              TT.forceAlphaTest = UT
            }
          },
          metadata: UT
        }, kz, jz), (0, JT.h)(TT, null, nm, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: TT => "alphaCutOff" in TT,
            get: TT => TT.alphaCutOff,
            set: (TT, UT) => {
              TT.alphaCutOff = UT
            }
          },
          metadata: UT
        }, lz, Lz), (0, JT.h)(TT, null, Hm, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSpecularOverAlpha" in TT,
            get: TT => TT.useSpecularOverAlpha,
            set: (TT, UT) => {
              TT.useSpecularOverAlpha = UT
            }
          },
          metadata: UT
        }, pz, Bz), (0, JT.h)(TT, null, km, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "useMicroSurfaceFromReflectivityMapAlpha" in TT,
            get: TT => TT.useMicroSurfaceFromReflectivityMapAlpha,
            set: (TT, UT) => {
              TT.useMicroSurfaceFromReflectivityMapAlpha = UT
            }
          },
          metadata: UT
        }, Zz, cz), (0, JT.h)(TT, null, jm, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRoughnessFromMetallicTextureAlpha" in TT,
            get: TT => TT.useRoughnessFromMetallicTextureAlpha,
            set: (TT, UT) => {
              TT.useRoughnessFromMetallicTextureAlpha = UT
            }
          },
          metadata: UT
        }, vz, fz), (0, JT.h)(TT, null, lm, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRoughnessFromMetallicTextureGreen" in TT,
            get: TT => TT.useRoughnessFromMetallicTextureGreen,
            set: (TT, UT) => {
              TT.useRoughnessFromMetallicTextureGreen = UT
            }
          },
          metadata: UT
        }, qz, iz), (0, JT.h)(TT, null, Lm, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: TT => "useMetallnessFromMetallicTextureBlue" in TT,
            get: TT => TT.useMetallnessFromMetallicTextureBlue,
            set: (TT, UT) => {
              TT.useMetallnessFromMetallicTextureBlue = UT
            }
          },
          metadata: UT
        }, bz, Oz), (0, JT.h)(TT, null, pm, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAmbientOcclusionFromMetallicTextureRed" in TT,
            get: TT => TT.useAmbientOcclusionFromMetallicTextureRed,
            set: (TT, UT) => {
              TT.useAmbientOcclusionFromMetallicTextureRed = UT
            }
          },
          metadata: UT
        }, ez, Yz), (0, JT.h)(TT, null, Bm, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAmbientInGrayScale" in TT,
            get: TT => TT.useAmbientInGrayScale,
            set: (TT, UT) => {
              TT.useAmbientInGrayScale = UT
            }
          },
          metadata: UT
        }, Jz, xz), (0, JT.h)(TT, null, Zm, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAutoMicroSurfaceFromReflectivityMap" in TT,
            get: TT => TT.useAutoMicroSurfaceFromReflectivityMap,
            set: (TT, UT) => {
              TT.useAutoMicroSurfaceFromReflectivityMap = UT
            }
          },
          metadata: UT
        }, dz, wz), (0, JT.h)(TT, null, cm, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: TT => "usePhysicalLightFalloff" in TT,
            get: TT => TT.usePhysicalLightFalloff
          },
          metadata: UT
        }, null, Cm), (0, JT.h)(TT, null, fm, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: TT => "useGLTFLightFalloff" in TT,
            get: TT => TT.useGLTFLightFalloff
          },
          metadata: UT
        }, null, Cm), (0, JT.h)(TT, null, qm, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRadianceOverAlpha" in TT,
            get: TT => TT.useRadianceOverAlpha,
            set: (TT, UT) => {
              TT.useRadianceOverAlpha = UT
            }
          },
          metadata: UT
        }, tz, az), (0, JT.h)(TT, null, im, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: TT => "useObjectSpaceNormalMap" in TT,
            get: TT => TT.useObjectSpaceNormalMap,
            set: (TT, UT) => {
              TT.useObjectSpaceNormalMap = UT
            }
          },
          metadata: UT
        }, yz, Xz), (0, JT.h)(TT, null, bm, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: TT => "useParallax" in TT,
            get: TT => TT.useParallax,
            set: (TT, UT) => {
              TT.useParallax = UT
            }
          },
          metadata: UT
        }, Iz, Qz), (0, JT.h)(TT, null, Om, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: TT => "useParallaxOcclusion" in TT,
            get: TT => TT.useParallaxOcclusion,
            set: (TT, UT) => {
              TT.useParallaxOcclusion = UT
            }
          },
          metadata: UT
        }, sz, Fz), (0, JT.h)(TT, null, em, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: TT => "parallaxScaleBias" in TT,
            get: TT => TT.parallaxScaleBias,
            set: (TT, UT) => {
              TT.parallaxScaleBias = UT
            }
          },
          metadata: UT
        }, Pz, Vz), (0, JT.h)(TT, null, Ym, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: TT => "disableLighting" in TT,
            get: TT => TT.disableLighting,
            set: (TT, UT) => {
              TT.disableLighting = UT
            }
          },
          metadata: UT
        }, uz, Cz), (0, JT.h)(TT, null, Jm, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: TT => "forceIrradianceInFragment" in TT,
            get: TT => TT.forceIrradianceInFragment,
            set: (TT, UT) => {
              TT.forceIrradianceInFragment = UT
            }
          },
          metadata: UT
        }, rz, Kz), (0, JT.h)(TT, null, xm, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: TT => "maxSimultaneousLights" in TT,
            get: TT => TT.maxSimultaneousLights,
            set: (TT, UT) => {
              TT.maxSimultaneousLights = UT
            }
          },
          metadata: UT
        }, Sz, Gz), (0, JT.h)(TT, null, dm, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: TT => "invertNormalMapX" in TT,
            get: TT => TT.invertNormalMapX,
            set: (TT, UT) => {
              TT.invertNormalMapX = UT
            }
          },
          metadata: UT
        }, Nz, Ez), (0, JT.h)(TT, null, wm, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: TT => "invertNormalMapY" in TT,
            get: TT => TT.invertNormalMapY,
            set: (TT, UT) => {
              TT.invertNormalMapY = UT
            }
          },
          metadata: UT
        }, hz, Dz), (0, JT.h)(TT, null, tm, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: TT => "twoSidedLighting" in TT,
            get: TT => TT.twoSidedLighting,
            set: (TT, UT) => {
              TT.twoSidedLighting = UT
            }
          },
          metadata: UT
        }, oz, Az), (0, JT.h)(TT, null, am, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAlphaFresnel" in TT,
            get: TT => TT.useAlphaFresnel,
            set: (TT, UT) => {
              TT.useAlphaFresnel = UT
            }
          },
          metadata: UT
        }, Rz, TM), (0, JT.h)(TT, null, ym, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: TT => "useLinearAlphaFresnel" in TT,
            get: TT => TT.useLinearAlphaFresnel,
            set: (TT, UT) => {
              TT.useLinearAlphaFresnel = UT
            }
          },
          metadata: UT
        }, UM, mM), (0, JT.h)(TT, null, Xm, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "environmentBRDFTexture" in TT,
            get: TT => TT.environmentBRDFTexture,
            set: (TT, UT) => {
              TT.environmentBRDFTexture = UT
            }
          },
          metadata: UT
        }, WM, zM), (0, JT.h)(TT, null, Im, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: TT => "forceNormalForward" in TT,
            get: TT => TT.forceNormalForward,
            set: (TT, UT) => {
              TT.forceNormalForward = UT
            }
          },
          metadata: UT
        }, MM, gM), (0, JT.h)(TT, null, Qm, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: TT => "enableSpecularAntiAliasing" in TT,
            get: TT => TT.enableSpecularAntiAliasing,
            set: (TT, UT) => {
              TT.enableSpecularAntiAliasing = UT
            }
          },
          metadata: UT
        }, nM, HM), (0, JT.h)(TT, null, sm, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: TT => "useHorizonOcclusion" in TT,
            get: TT => TT.useHorizonOcclusion,
            set: (TT, UT) => {
              TT.useHorizonOcclusion = UT
            }
          },
          metadata: UT
        }, kM, jM), (0, JT.h)(TT, null, Fm, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRadianceOcclusion" in TT,
            get: TT => TT.useRadianceOcclusion,
            set: (TT, UT) => {
              TT.useRadianceOcclusion = UT
            }
          },
          metadata: UT
        }, lM, LM), (0, JT.h)(TT, null, Pm, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: TT => "unlit" in TT,
            get: TT => TT.unlit,
            set: (TT, UT) => {
              TT.unlit = UT
            }
          },
          metadata: UT
        }, pM, BM), (0, JT.h)(TT, null, Vm, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: TT => "applyDecalMapAfterDetailMap" in TT,
            get: TT => TT.applyDecalMapAfterDetailMap,
            set: (TT, UT) => {
              TT.applyDecalMapAfterDetailMap = UT
            }
          },
          metadata: UT
        }, ZM, cM), UT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UT
        })
      })(), TT.PBRMATERIAL_OPAQUE = OU.PBRMATERIAL_OPAQUE, TT.PBRMATERIAL_ALPHATEST = OU.PBRMATERIAL_ALPHATEST, TT.PBRMATERIAL_ALPHABLEND = OU.PBRMATERIAL_ALPHABLEND, TT.PBRMATERIAL_ALPHATESTANDBLEND = OU.PBRMATERIAL_ALPHATESTANDBLEND, TT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = OU.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, TT
    })();
    const Fz = "KHR_materials_diffuse_transmission";

    function Pz(TT, UT) {
      const mT = UT.subSurface;
      let WT = null;
      return mT.translucencyIntensityTexture ? WT = mT.translucencyIntensityTexture : mT.thicknessTexture && mT.useMaskFromThicknessTexture && (WT = mT.thicknessTexture), WT && !mT.useGltfStyleTextures ? (dT.b.Warn(`${TT}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${UT.name}`, 1), null) : WT
    }
    class Vz {
      constructor(TT) {
        this.name = Fz, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        const WT = [];
        if (mT instanceof sz && this._isExtensionEnabled(mT)) {
          const UT = Pz(TT, mT);
          return UT && WT.push(UT), mT.subSurface.translucencyColorTexture && WT.push(mT.subSurface.translucencyColorTexture), WT
        }
        return WT
      }
      _isExtensionEnabled(TT) {
        if (TT.unlit) return !1;
        const UT = TT.subSurface;
        return !!UT.isTranslucencyEnabled && (!TT.unlit && !UT.useAlbedoToTintTranslucency && UT.useGltfStyleTextures && 1 === UT.volumeIndexOfRefraction && 0 === UT.minimumThickness && 0 === UT.maximumThickness)
      }
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((WT => {
          if (mT instanceof sz && this._isExtensionEnabled(mT)) {
            this._wasUsed = !0;
            const WT = mT.subSurface,
              zT = Pz(TT, mT),
              MT = 0 == WT.translucencyIntensity ? void 0 : WT.translucencyIntensity,
              gT = this._exporter._materialExporter.getTextureInfo(zT) ?? void 0,
              nT = !WT.translucencyColor || WT.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : WT.translucencyColor.cWT(),
              HT = this._exporter._materialExporter.getTextureInfo(WT.translucencyColorTexture) ?? void 0,
              kT = {
                diffuseTransmissionFactor: MT,
                diffuseTransmissionTexture: gT,
                diffuseTransmissionColorFactor: nT,
                diffuseTransmissionColorTexture: HT
              };
            (gT || HT) && this._exporter._materialNeedsUVsSet.add(mT), UT.extensions = UT.extensions || {}, UT.extensions[Fz] = kT
          }
          WT(UT)
        }))
      }
    }
    let uz = !1;

    function Cz() {
      uz || (uz = !0, QW.RegisterExtension(Fz, (TT => new Vz(TT))))
    }
    Cz();
    const rz = "KHR_materials_dispersion";
    class Kz {
      constructor() {
        this.name = rz, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(TT) {
        if (TT.unlit) return !1;
        const UT = TT.subSurface;
        return !(!UT.isRefractionEnabled && !UT.isDispersionEnabled)
      }
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((TT => {
          if (mT instanceof sz && this._isExtensionEnabled(mT)) {
            this._wasUsed = !0;
            const TT = {
              dispersion: mT.subSurface.dispersion
            };
            UT.extensions = UT.extensions || {}, UT.extensions[rz] = TT
          }
          TT(UT)
        }))
      }
    }
    let Sz = !1;

    function Gz() {
      Sz || (Sz = !0, QW.RegisterExtension(rz, (() => new Kz)))
    }
    Gz();
    const Nz = "KHR_materials_emissive_strength";
    class Ez {
      constructor() {
        this.name = Nz, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(TT, UT, mT) {
        return await new Promise((TT => {
          if (!(mT instanceof sz)) return TT(UT);
          const WT = mT.emissiveColor.scale(mT.emissiveIntensity),
            zT = Math.max(...WT.cWT());
          if (zT > 1) {
            UT.emissiveFactor = WT.scale(1 / zT).cWT(), this._wasUsed = !0;
            const TT = {
              emissiveStrength: zT
            };
            UT.extensions || (UT.extensions = {}), UT.extensions[Nz] = TT
          } else UT.emissiveFactor = WT.cWT();
          return TT(UT)
        }))
      }
    }
    let hz = !1;

    function Dz() {
      hz || (hz = !0, QW.RegisterExtension(Nz, (() => new Ez)))
    }
    Dz();
    const oz = "KHR_materials_ior";
    class Az {
      constructor() {
        this.name = oz, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(TT) {
        return !TT.unlit && (TT instanceof AU ? 1.5 != TT.specularIor : TT instanceof sz && (void 0 != TT.indexOfRefraction && 1.5 != TT.indexOfRefraction))
      }
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((TT => {
          if (mT instanceof sz && this._isExtensionEnabled(mT)) {
            this._wasUsed = !0;
            const TT = {
              ior: mT.indexOfRefraction
            };
            UT.extensions = UT.extensions || {}, UT.extensions[oz] = TT
          } else if (mT instanceof AU && this._isExtensionEnabled(mT)) {
            this._wasUsed = !0;
            const TT = {
              ior: mT.specularIor
            };
            UT.extensions = UT.extensions || {}, UT.extensions[oz] = TT
          }
          TT(UT)
        }))
      }
    }
    let Rz = !1;

    function TM() {
      Rz || (Rz = !0, QW.RegisterExtension(oz, (() => new Az)))
    }
    TM();
    const UM = "KHR_materials_iridescence";
    class mM {
      constructor(TT) {
        this.name = UM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        const WT = [];
        if (mT instanceof OU) {
          if (mT.iridescence.isEnabled) return mT.iridescence.texture && WT.push(mT.iridescence.texture), mT.iridescence.thicknessTexture && mT.iridescence.thicknessTexture !== mT.iridescence.texture && WT.push(mT.iridescence.thicknessTexture), WT
        } else if (mT instanceof AU && mT.thinFilmWeight > 0) return mT.thinFilmWeightTexture && WT.push(mT.thinFilmWeightTexture), mT.thinFilmThicknessTexture && mT.thinFilmThicknessTexture !== mT.thinFilmWeightTexture && WT.push(mT.thinFilmThicknessTexture), WT;
        return []
      }
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((TT => {
          if (mT instanceof OU) {
            if (!mT.iridescence.isEnabled) return void TT(UT);
            this._wasUsed = !0, UT.extensions = UT.extensions || {};
            const WT = this._exporter._materialExporter.getTextureInfo(mT.iridescence.texture),
              zT = this._exporter._materialExporter.getTextureInfo(mT.iridescence.thicknessTexture),
              MT = {
                iridescenceFactor: mT.iridescence.intensity,
                iridescenceIor: mT.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: mT.iridescence.minimumThickness,
                iridescenceThicknessMaximum: mT.iridescence.maximumThickness,
                iridescenceTexture: WT ?? void 0,
                iridescenceThicknessTexture: zT ?? void 0
              };
            null === MT.iridescenceTexture && null === MT.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(mT), UT.extensions[UM] = MT
          } else if (mT instanceof AU) {
            if (mT.thinFilmWeight <= 0) return void TT(UT);
            this._wasUsed = !0, UT.extensions = UT.extensions || {};
            const WT = this._exporter._materialExporter.getTextureInfo(mT.thinFilmWeightTexture),
              zT = this._exporter._materialExporter.getTextureInfo(mT.thinFilmThicknessTexture),
              MT = {
                iridescenceFactor: mT.thinFilmWeight,
                iridescenceIor: mT.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * mT.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * mT.thinFilmThickness,
                iridescenceTexture: WT ?? void 0,
                iridescenceThicknessTexture: zT ?? void 0
              };
            null === MT.iridescenceTexture && null === MT.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(mT), UT.extensions[UM] = MT
          }
          TT(UT)
        }))
      }
    }
    let WM = !1;

    function zM() {
      WM || (WM = !0, QW.RegisterExtension(UM, (TT => new mM(TT))))
    }
    zM();
    const MM = "KHR_materials_sheen";
    class gM {
      constructor(TT) {
        this.name = MM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        return mT instanceof sz && mT.sheen.isEnabled && mT.sheen.texture ? [mT.sheen.texture] : []
      }
      async postExportMaterialAsync(TT, UT, mT) {
        return await new Promise((TT => {
          if (mT instanceof sz) {
            if (!mT.sheen.isEnabled) return void TT(UT);
            this._wasUsed = !0, null == UT.extensions && (UT.extensions = {});
            const WT = {
              sheenColorFactor: mT.sheen.color.cWT(),
              sheenRoughnessFactor: mT.sheen.roughness ?? 0
            };
            null === WT.sheenColorTexture && null === WT.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(mT), mT.sheen.texture && (WT.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(mT.sheen.texture) ?? void 0), mT.sheen.textureRoughness && !mT.sheen.useRoughnessFromMainTexture ? WT.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(mT.sheen.textureRoughness) ?? void 0 : mT.sheen.texture && mT.sheen.useRoughnessFromMainTexture && (WT.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(mT.sheen.texture) ?? void 0), UT.extensions[MM] = WT
          }
          TT(UT)
        }))
      }
    }
    let nM = !1;

    function HM() {
      nM || (nM = !0, QW.RegisterExtension(MM, (TT => new gM(TT))))
    }
    HM();
    const kM = "KHR_materials_fuzz";

    function jM(TT, UT) {
      const mT = new tT.g(UT.name, UT.KF());
      return mT._texture = TT, mT.coordinatesIndex = UT.coordinatesIndex, UT instanceof tT.g && (mT.uOffset = UT.uOffset, mT.vOffset = UT.vOffset, mT.uScale = UT.uScale, mT.vScale = UT.vScale, mT.wAng = UT.wAng), mT.wrapU = UT.wrapU, mT.wrapV = UT.wrapV, mT
    }
    class lM {
      constructor(TT) {
        this.name = kM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = TT
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
      async postExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        if (mT instanceof AU) {
          const TT = [];
          if (mT.fuzzWeight > 0) {
            mT.fuzzWeightTexture && TT.push(mT.fuzzWeightTexture);
            let UT = !1;
            if (mT.fuzzRoughnessTexture && (mT._useFuzzRoughnessFromTextureAlpha ? TT.push(mT.fuzzRoughnessTexture) : UT = !0), mT.fuzzColorTexture && !UT && TT.push(mT.fuzzColorTexture), UT) {
              const UT = function(TT) {
                const UT = TT.fuzzColorTexture,
                  mT = UT && UT.getInternalTexture() ? UT.getInternalTexture().uniqueId : "NoFuzzColor",
                  WT = TT.fuzzRoughnessTexture;
                return `FuzzColor_${mT}_FuzzRoughness_${WT&&WT.getInternalTexture()?WT.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(mT);
              if (!this._cachedInternalTexturesMap[UT]) {
                const TT = await async function(TT) {
                  const UT = TT.KF(),
                    mT = TT.fuzzColorTexture,
                    WT = TT.fuzzRoughnessTexture;
                  return mT || WT ? (await gm("FuzzTexture", km(mT ? nm(mT, 0) : Hm(1), mT ? nm(mT, 1) : Hm(1), mT ? nm(mT, 2) : Hm(1), WT ? nm(WT, TT._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Hm(1)), UT)).getInternalTexture() : null
                }(mT);
                TT && (this._cachedInternalTexturesMap[UT] = TT)
              }
              this._cachedInternalTexturesMap[UT] && (mT.fuzzColorTexture && (this._mergedTexturesMap[mT.fuzzColorTexture.uniqueId] = jM(this._cachedInternalTexturesMap[UT], mT.fuzzColorTexture), TT.push(this._mergedTexturesMap[mT.fuzzColorTexture.uniqueId])), mT.fuzzRoughnessTexture && (this._mergedTexturesMap[mT.fuzzRoughnessTexture.uniqueId] = jM(this._cachedInternalTexturesMap[UT], mT.fuzzRoughnessTexture), TT.push(this._mergedTexturesMap[mT.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return TT
        }
        return []
      }
      async postExportMaterialAsync(TT, UT, mT) {
        return await new Promise((TT => {
          if (mT instanceof AU) {
            if (0 == mT.fuzzWeight) return void TT(UT);
            this._wasUsed = !0, null == UT.extensions && (UT.extensions = {});
            const WT = {
              fuzzFactor: mT.fuzzWeight,
              fuzzColorFactor: mT.fuzzColor.cWT(),
              fuzzRoughnessFactor: mT.fuzzRoughness
            };
            let zT, MT;
            mT.fuzzWeightTexture && (WT.fuzzTexture = this._exporter._materialExporter.getTextureInfo(mT.fuzzWeightTexture) ?? void 0), mT.fuzzColorTexture && (zT = this._mergedTexturesMap[mT.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[mT.fuzzColorTexture.uniqueId] : mT.fuzzColorTexture, WT.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(zT) ?? void 0), mT.fuzzRoughnessTexture && (MT = this._mergedTexturesMap[mT.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[mT.fuzzRoughnessTexture.uniqueId] : mT.fuzzRoughnessTexture, WT.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(MT) ?? void 0), null === WT.fuzzColorTexture && null === WT.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(mT), UT.extensions[kM] = WT
          }
          TT(UT)
        }))
      }
    }
    let LM = !1;

    function pM() {
      LM || (LM = !0, QW.RegisterExtension(kM, (TT => new lM(TT))))
    }
    pM();
    const BM = "KHR_materials_specular";
    class ZM {
      constructor(TT) {
        this.name = BM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        const WT = [];
        return mT instanceof sz && this._isExtensionEnabled(mT) ? (mT.metallicReflectanceTexture && WT.push(mT.metallicReflectanceTexture), mT.reflectanceTexture && WT.push(mT.reflectanceTexture), WT) : WT
      }
      _isExtensionEnabled(TT) {
        return !TT.unlit && (void 0 != TT.metallicF0Factor && 1 != TT.metallicF0Factor || void 0 != TT.metallicReflectanceColor && !TT.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(TT))
      }
      _hasTexturesExtension(TT) {
        return null != TT.metallicReflectanceTexture || null != TT.reflectanceTexture
      }
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((TT => {
          var WT;
          if (mT instanceof sz && this._isExtensionEnabled(mT)) {
            this._wasUsed = !0, UT.extensions = UT.extensions || {};
            const TT = this._exporter._materialExporter.getTextureInfo(mT.metallicReflectanceTexture) ?? void 0,
              WT = this._exporter._materialExporter.getTextureInfo(mT.reflectanceTexture) ?? void 0,
              zT = {
                specularFactor: 1 == mT.metallicF0Factor ? void 0 : mT.metallicF0Factor,
                specularTexture: TT,
                specularColorFactor: mT.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : mT.metallicReflectanceColor.cWT(),
                specularColorTexture: WT
              };
            this._hasTexturesExtension(mT) && this._exporter._materialNeedsUVsSet.add(mT), UT.extensions[BM] = zT
          } else if (mT instanceof AU) {
            UT.extensions = UT.extensions || {};
            const zT = this._exporter._materialExporter.getTextureInfo(mT.specularWeightTexture) ?? void 0,
              MT = this._exporter._materialExporter.getTextureInfo(mT.specularColorTexture) ?? void 0,
              gT = 1 == mT.specularWeight ? void 0 : mT.specularWeight,
              nT = mT.specularColor.equalsFloats(1, 1, 1) ? void 0 : mT.specularColor.cWT();
            if (!MT && !zT && void 0 === gT && void 0 === nT) return TT(UT);
            this._wasUsed = !0;
            const HT = {
                specularEdgeColorEnabled: !0
              },
              kT = {
                specularFactor: gT,
                specularTexture: zT,
                specularColorFactor: nT,
                specularColorTexture: MT,
                extensions: {}
              };
            kT.extensions.EXT_materials_specular_edge_color = HT, (WT = this._exporter._glTF).extensionsUsed || (WT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (zT || MT) && this._exporter._materialNeedsUVsSet.add(mT), UT.extensions[BM] = kT
          }
          TT(UT)
        }))
      }
    }
    let cM = !1;

    function vM() {
      cM || (cM = !0, QW.RegisterExtension(BM, (TT => new ZM(TT))))
    }
    vM();
    const fM = "KHR_materials_transmission";
    class qM {
      constructor(TT) {
        this.name = fM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        const WT = [];
        if (mT instanceof sz) {
          if (this._isExtensionEnabled(mT)) return mT.subSurface.refractionIntensityTexture && mT.subSurface.useGltfStyleTextures && WT.push(mT.subSurface.refractionIntensityTexture), WT
        } else mT instanceof AU && (mT.transmissionWeight > 0 && mT.transmissionWeightTexture && (WT.push(mT.transmissionWeightTexture), mT.transmissionColorTexture && WT.push(mT.transmissionColorTexture)), mT.subsurfaceWeight > 0 && mT.subsurfaceWeightTexture && WT.push(mT.subsurfaceWeightTexture));
        return WT
      }
      _isExtensionEnabled(TT) {
        if (TT instanceof AU && !TT.unlit) return TT.transmissionWeight > 0 || TT.subsurfaceWeight > 0;
        if (TT instanceof sz && !TT.unlit) {
          const UT = TT.subSurface;
          return UT.isRefractionEnabled && void 0 != UT.refractionIntensity && 0 != UT.refractionIntensity || null != UT.refractionIntensityTexture && UT.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(TT, UT, mT) {
        if (!this._isExtensionEnabled(mT)) return UT;
        if (mT instanceof sz) {
          this._wasUsed = !0;
          const WT = mT.subSurface,
            zT = {
              transmissionFactor: 0 === WT.refractionIntensity ? void 0 : WT.refractionIntensity
            };
          if (WT.refractionIntensityTexture)
            if (WT.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(mT);
              const TT = this._exporter._materialExporter.getTextureInfo(WT.refractionIntensityTexture);
              TT && (zT.transmissionTexture = TT)
            } else dT.b.Warn(`${TT}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          UT.extensions || (UT.extensions = {}), UT.extensions[fM] = zT
        } else if (mT instanceof AU) {
          this._wasUsed = !0;
          const TT = {
            transmissionFactor: (1 - mT.transmissionWeight) * mT.subsurfaceWeight + mT.transmissionWeight
          };
          if (mT.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(mT);
            const UT = this._exporter._materialExporter.getTextureInfo(mT.transmissionWeightTexture);
            UT && (TT.transmissionTexture = UT)
          } else if (mT.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(mT);
            const UT = this._exporter._materialExporter.getTextureInfo(mT.subsurfaceWeightTexture);
            UT && (TT.transmissionTexture = UT)
          }
          if (0 == mT.transmissionDepth && (!mT.transmissionColor.equals(GT.d.White()) || mT.transmissionColorTexture) && UT.pbrMetallicRoughness && (UT.pbrMetallicRoughness.baseColorFactor || (UT.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), UT.pbrMetallicRoughness.baseColorFactor[0] *= mT.transmissionColor.r, UT.pbrMetallicRoughness.baseColorFactor[1] *= mT.transmissionColor.g, UT.pbrMetallicRoughness.baseColorFactor[2] *= mT.transmissionColor.b, mT.transmissionColorTexture && !UT.pbrMetallicRoughness.baseColorTexture)) {
            const TT = this._exporter._materialExporter.getTextureInfo(mT.transmissionColorTexture);
            TT && (UT.pbrMetallicRoughness.baseColorTexture = TT, this._exporter._materialNeedsUVsSet.add(mT))
          }
          UT.extensions || (UT.extensions = {}), UT.extensions[fM] = TT
        }
        return UT
      }
    }
    let iM = !1;

    function bM() {
      iM || (iM = !0, QW.RegisterExtension(fM, (TT => new qM(TT))))
    }
    bM();
    var OM = mT(40387);
    const eM = "KHR_materials_unlit";
    class YM {
      constructor() {
        this.name = eM, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((TT => {
          let WT = !1;
          mT instanceof sz ? WT = mT.unlit : mT instanceof OM.f && (WT = mT.disableLighting), WT && (this._wasUsed = !0, null == UT.extensions && (UT.extensions = {}), UT.extensions[eM] = {}), TT(UT)
        }))
      }
    }
    let JM = !1;

    function xM() {
      JM || (JM = !0, QW.RegisterExtension(eM, (() => new YM)))
    }
    xM();
    const dM = "KHR_materials_volume";
    class wM {
      constructor(TT) {
        this.name = dM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        const WT = [];
        if (mT instanceof sz) {
          if (this._isExtensionEnabled(mT)) return mT.subSurface.thicknessTexture && WT.push(mT.subSurface.thicknessTexture), WT
        } else mT instanceof AU && (mT.transmissionWeight > 0 || mT.subsurfaceWeight > 0) && mT.geometryThicknessTexture && WT.push(mT.geometryThicknessTexture);
        return WT
      }
      _isExtensionEnabled(TT) {
        if (TT.unlit) return !1;
        const UT = TT.subSurface;
        return !(!UT.isRefractionEnabled && !UT.isTranslucencyEnabled) && (void 0 != UT.maximumThickness && 0 != UT.maximumThickness || void 0 != UT.tintColorAtDistance && UT.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != UT.tintColor && UT.tintColor != GT.d.White() || this._hasTexturesExtension(TT))
      }
      _hasTexturesExtension(TT) {
        return null != TT.subSurface.thicknessTexture
      }
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((TT => {
          if (mT instanceof sz && this._isExtensionEnabled(mT)) {
            this._wasUsed = !0;
            const TT = mT.subSurface,
              WT = {
                thicknessFactor: 0 == TT.maximumThickness ? void 0 : TT.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(TT.thicknessTexture) ?? void 0,
                attenuationDistance: TT.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : TT.tintColorAtDistance,
                attenuationColor: TT.tintColor.equalsFloats(1, 1, 1) ? void 0 : TT.tintColor.cWT()
              };
            this._hasTexturesExtension(mT) && this._exporter._materialNeedsUVsSet.add(mT), UT.extensions = UT.extensions || {}, UT.extensions[dM] = WT
          } else if (mT instanceof AU) {
            const TT = mT.transmissionWeight > 0 && !mT.geometryThinWalled,
              WT = mT.subsurfaceWeight > 0 && !mT.geometryThinWalled;
            if (TT || WT) {
              this._wasUsed = !0;
              const zT = mT.geometryThickness,
                MT = this._exporter._materialExporter.getTextureInfo(mT.geometryThicknessTexture) ?? void 0;
              let gT;
              MT && this._exporter._materialNeedsUVsSet.add(mT);
              const nT = GT.d.White().cWT();
              if (TT && mT.transmissionDepth > 0) {
                const TT = 1 / mT.transmissionDepth;
                let UT = new PT.p(-Math.log(mT.transmissionColor.r) * TT, -Math.log(mT.transmissionColor.g) * TT, -Math.log(mT.transmissionColor.b) * TT);
                const WT = new PT.p(mT.transmissionScatter.r * TT, mT.transmissionScatter.g * TT, mT.transmissionScatter.b * TT),
                  zT = UT.subtract(WT),
                  MT = Math.min(zT.x, zT.y, zT.z);
                MT < 0 && (zT.x = zT.x - MT, zT.y = zT.y - MT, zT.z = zT.z - MT), UT = zT.add(WT);
                gT = 1 / Math.max(UT.x, UT.y, UT.z), nT[0] = Math.exp(-UT.x * gT), nT[1] = Math.exp(-UT.y * gT), nT[2] = Math.exp(-UT.z * gT)
              } else gT = Number.MAX_VALUE, nT[0] = 1, nT[1] = 1, nT[2] = 1;
              let HT = 1;
              const kT = GT.d.White().cWT();
              if (WT) {
                const TT = mT.subsurfaceRadius,
                  UT = mT.subsurfaceRadiusScale,
                  WT = new PT.p(UT.r, UT.g, UT.b).multiplyByFloats(TT, TT, TT),
                  zT = new PT.p(1 / Math.max(WT.x, 1e-6), 1 / Math.max(WT.y, 1e-6), 1 / Math.max(WT.z, 1e-6));
                HT = 1 / Math.max(zT.x, zT.y, zT.z), kT[0] = Math.exp(-zT.x * HT), kT[1] = Math.exp(-zT.y * HT), kT[2] = Math.exp(-zT.z * HT)
              }
              const jT = (1 - mT.transmissionWeight) * mT.subsurfaceWeight,
                lT = jT + mT.transmissionWeight,
                LT = 1 / Math.max(lT, 1e-6),
                pT = mT.transmissionWeight * LT,
                BT = jT * LT,
                ZT = nT.map(((TT, UT) => TT * pT + kT[UT] * BT)),
                cT = {
                  thicknessFactor: zT,
                  thicknessTexture: MT,
                  attenuationDistance: gT * pT + HT * BT,
                  attenuationColor: ZT
                };
              UT.extensions = UT.extensions || {}, UT.extensions[dM] = cT
            }
          }
          TT(UT)
        }))
      }
    }
    let tM = !1;

    function aM() {
      tM || (tM = !0, QW.RegisterExtension(dM, (TT => new wM(TT))))
    }
    aM();
    const yM = "KHR_materials_volume_scatter";
    class XM {
      constructor(TT) {
        this.name = yM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        const WT = [];
        return mT instanceof AU && (mT.transmissionWeight > 0 && mT.transmissionScatterTexture && WT.push(mT.transmissionScatterTexture), mT.subsurfaceWeight > 0 && mT.subsurfaceColorTexture && WT.push(mT.subsurfaceColorTexture)), WT
      }
      _isExtensionEnabled(TT) {
        if (TT.unlit) return !1;
        const UT = TT.transmissionWeight > 0 && !TT.geometryThinWalled && TT.transmissionDepth > 0 && !TT.transmissionScatter.equals(GT.d.Black()),
          mT = TT.subsurfaceWeight > 0 && !TT.geometryThinWalled;
        return !(!UT && !mT)
      }
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((TT => {
          if (mT instanceof AU && this._isExtensionEnabled(mT)) {
            this._wasUsed = !0;
            let TT = PT.p.Zero(),
              WT = 0;
            if (mT.transmissionWeight > 0) {
              TT = function(TT) {
                const UT = new PT.p(Math.sqrt(1 - TT.x), Math.sqrt(1 - TT.y), Math.sqrt(1 - TT.z)),
                  mT = new PT.p(1, 1, 1),
                  WT = mT.subtract(UT),
                  zT = mT.subtract(new PT.p(.139, .139, .139).multiplyInPlace(UT)),
                  MT = mT.add(new PT.p(1.17, 1.17, 1.17).multiplyInPlace(UT));
                return WT.multiplyInPlace(zT).divideInPlace(MT)
              }(new PT.p(mT.transmissionScatter.r, mT.transmissionScatter.g, mT.transmissionScatter.b)), WT = mT.transmissionScatterAnisotropy
            }
            const zT = PT.p.Zero();
            let MT = 0;
            mT.subsurfaceWeight > 0 && (zT.set(mT.subsurfaceColor.r, mT.subsurfaceColor.g, mT.subsurfaceColor.b), MT = mT.subsurfaceScatterAnisotropy);
            const gT = (1 - mT.transmissionWeight) * mT.subsurfaceWeight,
              nT = gT + mT.transmissionWeight,
              HT = 1 / Math.max(nT, 1e-6),
              kT = mT.transmissionWeight * HT,
              jT = gT * HT,
              lT = {
                multiscatterColorFactor: TT.multiplyByFloats(kT, kT, kT).addInPlace(zT.multiplyByFloats(jT, jT, jT)).cWT(),
                scatterAnisotropy: WT * kT + MT * jT
              };
            if (mT.subsurfaceWeight > 0 && mT.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(mT);
              const TT = this._exporter._materialExporter.getTextureInfo(mT.subsurfaceColorTexture);
              TT && (lT.multiscatterColorTexture = TT)
            } else if (mT.transmissionWeight > 0 && mT.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(mT);
              const TT = this._exporter._materialExporter.getTextureInfo(mT.transmissionScatterTexture);
              TT && (lT.multiscatterColorTexture = TT)
            }
            UT.extensions = UT.extensions || {}, UT.extensions[yM] = lT
          }
          TT(UT)
        }))
      }
    }
    let IM = !1;

    function QM() {
      IM || (IM = !0, QW.RegisterExtension(yM, (TT => new XM(TT)), 101))
    }
    QM();
    const sM = "KHR_materials_diffuse_roughness";
    class FM {
      constructor(TT) {
        this.name = sM, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, UT, mT) {
        const WT = [];
        if (mT instanceof OU) {
          if (mT._baseDiffuseRoughness) return mT._baseDiffuseRoughnessTexture && WT.push(mT._baseDiffuseRoughnessTexture), WT
        } else if (mT instanceof AU && mT.baseDiffuseRoughness) return mT.baseDiffuseRoughnessTexture && WT.push(mT.baseDiffuseRoughnessTexture), WT;
        return []
      }
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((TT => {
          let WT = null,
            zT = null;
          if (mT instanceof OU ? (WT = mT._baseDiffuseRoughness, zT = mT._baseDiffuseRoughnessTexture) : mT instanceof AU && (WT = mT.baseDiffuseRoughness, zT = mT.baseDiffuseRoughnessTexture), !WT) return void TT(UT);
          this._wasUsed = !0, UT.extensions = UT.extensions || {};
          const MT = {
            diffuseRoughnessFactor: WT,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(zT) ?? void 0
          };
          null !== MT.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(mT), UT.extensions[sM] = MT, TT(UT)
        }))
      }
    }
    let PM = !1;

    function VM() {
      PM || (PM = !0, QW.RegisterExtension(sM, (TT => new FM(TT))))
    }
    VM();
    const uM = "KHR_materials_openpbr";
    class CM {
      constructor() {
        this.name = uM, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(TT, UT, mT) {
        return new Promise((TT => {
          mT instanceof AU && (this._wasUsed = !0, UT.extensions = UT.extensions || {}, UT.extensions[uM] = {}), TT(UT)
        }))
      }
    }
    let rM = !1;

    function KM() {
      rM || (rM = !0, QW.RegisterExtension(uM, (() => new CM)))
    }
    KM();
    const SM = "KHR_texture_transform";
    class GM {
      constructor() {
        this.name = SM, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(TT, UT, mT) {
        if (mT.KF() || YU.j.Warn(`${TT}: "scene" is not defined for Babylon texture ${mT.name}!`), (0 !== mT.uAng || 0 !== mT.vAng) && (YU.j.Warn(`${TT}: Texture ${mT.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== mT.uRotationCenter || 0 !== mT.vRotationCenter)) return;
        const WT = {};
        let zT = !1;
        if (0 === mT.uOffset && 0 === mT.vOffset || (WT.offset = [mT.uOffset, mT.vOffset], zT = !0), 1 === mT.uScale && 1 === mT.vScale || (WT.scale = [mT.uScale, mT.vScale], zT = !0), 0 !== mT.wAng) {
          if (0 !== mT.uRotationCenter || 0 !== mT.vRotationCenter) {
            if (mT.homogeneousRotationInUVTransform && mT.uScale !== mT.vScale) return void YU.j.Warn(`${TT}: Texture ${mT.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${SM}.`);
            YU.j.Warn(`${TT}: Texture ${mT.name} with non-origin rotation center will be exported using an adjusted offset with ${SM}.`), WT.offset = function(TT) {
              const {
                uOffset: UT,
                vOffset: mT,
                uRotationCenter: WT,
                vRotationCenter: zT,
                uScale: MT,
                vScale: gT,
                wAng: nT
              } = TT, HT = Math.cos(nT), kT = Math.sin(nT), jT = WT * MT, lT = zT * gT;
              return [UT + (jT * (1 - HT) + lT * kT), mT + (lT * (1 - HT) - jT * kT)]
            }(mT)
          }
          WT.rotation = -mT.wAng, zT = !0
        }
        0 !== mT.coordinatesIndex && (WT.texCoord = mT.coordinatesIndex, zT = !0), zT && (this._wasUsed = !0, UT.extensions || (UT.extensions = {}), UT.extensions[SM] = WT)
      }
    }
    let NM = !1;

    function EM() {
      NM || (NM = !0, QW.RegisterExtension(SM, (() => new GM)))
    }
    EM();
    var hM = mT(40151);
    const DM = "KHR_texture_basisu";
    class oM {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(TT) {
        this.name = DM, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      postExportTexture(TT, UT) {
        const mT = this._exporter._textures[UT.index],
          WT = mT.source;
        if (void 0 === WT) return;
        const zT = this._exporter._images[WT];
        "image/ktx2" === (zT.mimeType || (0, hM.k)(zT.uri)) && (mT.source = void 0, mT.extensions || (mT.extensions = {}), mT.extensions[DM] = {
          source: WT
        }, this._wasUsed = !0)
      }
    }
    let AM = !1;

    function RM() {
      AM || (AM = !0, QW.RegisterExtension(DM, (TT => new oM(TT))))
    }
    RM();
    const Tg = "EXT_texture_webp";
    class Ug {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(TT) {
        this.name = Tg, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      postExportTexture(TT, UT) {
        const mT = this._exporter._textures[UT.index],
          WT = mT.source;
        if (void 0 === WT) return;
        const zT = this._exporter._images[WT];
        "image/webp" === (zT.mimeType || (0, hM.k)(zT.uri)) && (mT.source = void 0, mT.extensions || (mT.extensions = {}), mT.extensions[Tg] = {
          source: WT
        }, this._wasUsed = !0)
      }
    }
    let mg = !1;

    function Wg() {
      mg || (mg = !0, QW.RegisterExtension(Tg, (TT => new Ug(TT))))
    }
    Wg();
    const zg = "EXT_texture_avif";
    class Mg {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(TT) {
        this.name = zg, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      postExportTexture(TT, UT) {
        const mT = this._exporter._textures[UT.index],
          WT = mT.source;
        if (void 0 === WT) return;
        const zT = this._exporter._images[WT];
        "image/avif" === (zT.mimeType || (0, hM.k)(zT.uri)) && (mT.source = void 0, mT.extensions || (mT.extensions = {}), mT.extensions[zg] = {
          source: WT
        }, this._wasUsed = !0)
      }
    }
    let gg = !1;

    function ng() {
      gg || (gg = !0, QW.RegisterExtension(zg, (TT => new Mg(TT))))
    }
    ng();
    class Hg {
      static CreateSTL(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          gT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          nT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          HT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const kT = function(TT, UT, mT) {
            const zT = [3 * TT[mT], 3 * TT[mT + 1], 3 * TT[mT + 2]],
              MT = [new WT.JB(UT[zT[0]], UT[zT[0] + 2], UT[zT[0] + 1]), new WT.JB(UT[zT[1]], UT[zT[1] + 2], UT[zT[1] + 1]), new WT.JB(UT[zT[2]], UT[zT[2] + 2], UT[zT[2] + 1])],
              gT = MT[0].subtract(MT[1]),
              nT = MT[2].subtract(MT[1]);
            return {
              v: MT,
              n: WT.JB.Cross(nT, gT).normalize()
            }
          },
          lT = function(TT, UT, mT, WT) {
            return UT = LT(TT, UT, mT.x, WT), UT = LT(TT, UT, mT.y, WT), LT(TT, UT, mT.z, WT)
          },
          LT = function(TT, UT, mT, WT) {
            return TT.setFloat32(UT, mT, WT), UT + 4
          },
          BT = function(TT) {
            if (nT) {
              let UT = TT;
              TT instanceof pT.e && (UT = TT.czT);
              const mT = UT.getVerticesData(jT.i.PositionKind, !0, !0);
              if (!mT) return [];
              const zT = WT.JB.Zero();
              let MT;
              for (MT = 0; MT < mT.length; MT += 3) WT.JB.TransformCoordinatesFromFloatsToRef(mT[MT], mT[MT + 1], mT[MT + 2], TT.computeWorldMatrix(!0), zT).toArray(mT, MT);
              return mT
            }
            return TT.getVerticesData(jT.i.PositionKind) || []
          };
        nT && (gT = !0);
        let ZT = "",
          cT = 0,
          vT = 0;
        if (zT) {
          for (let mT = 0; mT < TT.length; mT++) {
            const UT = TT[mT].vWT();
            cT += UT ? UT.length / 3 : 0
          }
          const UT = new ArrayBuffer(84 + 50 * cT);
          ZT = new DataView(UT), vT += 80, ZT.setUint32(vT, cT, MT), vT += 4
        } else HT || (ZT = "solid stlmesh\r\n");
        for (let WT = 0; WT < TT.length; WT++) {
          const UT = TT[WT];
          !zT && HT && (ZT += "solid " + UT.name + "\r\n"), !gT && UT instanceof jW.d && UT.bakeCurrentTransformIntoVertices();
          const mT = BT(UT),
            nT = UT.vWT() || [];
          for (let TT = 0; TT < nT.length; TT += 3) {
            const UT = kT(nT, mT, TT);
            zT ? (vT = lT(ZT, vT, UT.n, MT), vT = lT(ZT, vT, UT.v[0], MT), vT = lT(ZT, vT, UT.v[1], MT), vT = lT(ZT, vT, UT.v[2], MT), vT += 2) : (ZT += "\tfacet normal " + UT.n.x + " " + UT.n.y + " " + UT.n.z + "\r\n", ZT += "\t\touter loop\r\n", ZT += "\t\t\tvertex " + UT.v[0].x + " " + UT.v[0].y + " " + UT.v[0].z + "\r\n", ZT += "\t\t\tvertex " + UT.v[1].x + " " + UT.v[1].y + " " + UT.v[1].z + "\r\n", ZT += "\t\t\tvertex " + UT.v[2].x + " " + UT.v[2].y + " " + UT.v[2].z + "\r\n", ZT += "\t\tendloop\r\n", ZT += "\tendfacet\r\n")
          }!zT && HT && (ZT += "endsolid " + name + "\r\n")
        }
        if (zT || HT || (ZT += "endsolid stlmesh"), UT) {
          const TT = document.createElement("a"),
            UT = new Blob([ZT], {
              type: "application/octet-stream"
            });
          TT.href = window.URL.createObjectURL(UT), TT.download = mT + ".stl", TT.click()
        }
        return ZT
      }
    }

    function kg(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const zT = [];
      for (let MT = 0; MT < TT.length / mT; MT++) {
        const gT = TT[MT * mT] * (WT ? -1 : 1),
          nT = TT[MT * mT + 1],
          HT = TT[MT * mT + 2];
        zT.push(`(${gT.toPrecision(UT.precision)}, ${nT.toPrecision(UT.precision)}, ${HT.toPrecision(UT.precision)})`)
      }
      return zT.join(", ")
    }

    function jg(TT, UT) {
      const mT = [];
      for (let WT = 0; WT < TT.length / 2; WT++) {
        const zT = TT[2 * WT],
          MT = TT[2 * WT + 1];
        mT.push(`(${zT.toPrecision(UT.precision)}, ${(1-MT).toPrecision(UT.precision)})`)
      }
      return mT.join(", ")
    }

    function lg(TT, UT, mT, WT) {
      const zT = TT.getVerticesData(jT.i.PositionKind),
        MT = TT.getVerticesData(jT.i.NormalKind);
      if (zT && MT) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${mT}"\n\t\tint[] faceVertexCounts = [${function(TT){const UT=TT.vWT()?.length?TT.getTotalIndices():TT.getTotalVertices();return Array(UT/3).fill(3).join(", ")}(TT)}]\n\t\tint[] faceVertexIndices = [${function(TT){const UT=TT.vWT(),mT=UT?.length??TT.getTotalVertices(),WT=[];if(null!==UT)for(let zT=0;zT<mT;zT++)WT.push(UT[zT]);else for(let zT=0;zT<mT;zT++)WT.push(zT);return WT.join(", ")}(TT)}]\n\t\tnormal3f[] normals = [${kg(MT,UT,void 0,WT)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${kg(zT,UT,void 0,WT)}]\n        ${function(TT,UT){let mT="";for(let zT=0;zT<4;zT++){const WT=zT>0?zT:"",MT=TT.getVerticesData(jT.i.UVKind+(WT?WT+1:""));MT&&(mT+=`\n\t\ttexCoord2f[] primvars:st${WT} = [${jg(MT,UT)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const WT=TT.getVerticesData(jT.i.ColorKind);return WT&&(mT+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        kg(WT, UT, WT.length / TT.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),mT}(TT,UT)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Lg(TT, UT, mT, WT) {
      return `\n        def "Geometry"\n        {\n        ${lg(TT,UT,mT,WT)}\n        }\n        `
    }

    function pg(TT) {
      let UT = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return UT += TT, fflate.strToU8(UT)
    }

    function Bg(TT) {
      const UT = TT.m;
      return `( ${Zg(UT,0)}, ${Zg(UT,4)}, ${Zg(UT,8)}, ${Zg(UT,12)} )`
    }

    function Zg(TT, UT) {
      return `(${TT[UT+0]}, ${TT[UT+1]}, ${TT[UT+2]}, ${TT[UT+3]})`
    }

    function cg(TT, UT) {
      const mT = "Object_" + TT.uniqueId,
        WT = Bg(UT);
      return `def Xform "${mT}" (\n\tprepend references = @./geometries/Geometry_${TT.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${WT}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${TT.material.uniqueId}>\n}\n\n`
    }

    function vg(TT) {
      switch (TT) {
        case eT.b.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case eT.b.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case eT.b.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function fg(TT) {
      return `(${TT.x}, ${TT.y})`
    }

    function qg(TT) {
      return `(${TT.r}, ${TT.g}, ${TT.b})`
    }

    function ig(TT) {
      return "image/jpeg" === TT || "image/png" === TT
    }

    function bg(TT, UT, mT, zT, MT, gT) {
      const nT = TT.getInternalTexture().uniqueId + "_" + TT.invertY,
        kT = TT.mimeType || (0, HT.d)(TT.getInternalTexture()?.url ?? ""),
        jT = ig(kT) ? kT : "image/png",
        lT = "image/jpeg" === jT ? "jpg" : "png";
      MT[nT] = {
        texture: TT,
        mimeType: jT,
        ext: lT
      };
      const LT = TT.coordinatesIndex > 0 ? "st" + TT.coordinatesIndex : "st",
        pT = new WT.Vector2(TT.uScale, TT.vScale),
        BT = new WT.Vector2(TT.uOffset, TT.vOffset),
        ZT = TT.wAng,
        cT = Math.sin(ZT),
        vT = Math.cos(ZT);
      return BT.y = 1 - BT.y - pT.y, BT.x += cT * pT.x, BT.y += (1 - vT) * pT.y, `\n    def Shader "PrimvarReader_${mT}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${LT}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${mT}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${UT.uniqueId}/PrimvarReader_${mT}.outputs:result>\n        float inputs:rotation = ${(ZT*(180/Math.PI)).toFixed(gT.precision)}\n        float2 inputs:scale = ${fg(pT)}\n        float2 inputs:translation = ${fg(BT)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${TT.uniqueId}_${mT}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${nT}.${lT}@\n        float2 inputs:st.connect = </Root/Materials/Material_${UT.uniqueId}/Transform2d_${mT}.outputs:result>\n        ${zT?"float4 inputs:scale = "+function(TT){return`(${TT.r}, ${TT.g}, ${TT.b}, 1.0)`}(zT):""}\n        token inputs:sourceColorSpace = "${TT.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${vg(TT.wrapU)}"\n        token inputs:wrapT = "${vg(TT.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${UT.needAlphaBlending()||UT.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function Og(TT, UT, mT) {
      const WT = "\t\t\t",
        zT = [],
        MT = [],
        {
          diffuseMap: gT,
          diffuse: nT,
          alphaCutOff: HT,
          emissiveMap: kT,
          emissive: jT,
          normalMap: lT,
          roughnessMap: LT,
          roughnessChannel: pT,
          roughness: BT,
          metalnessMap: ZT,
          metalnessChannel: vT,
          metalness: fT,
          aoMap: qT,
          aoMapChannel: iT,
          aoMapIntensity: bT,
          alphaMap: OT,
          ior: eT,
          clearCoatEnabled: YT,
          clearCoat: JT,
          clearCoatMap: xT,
          clearCoatRoughness: dT,
          clearCoatRoughnessMap: wT
        } = function(TT) {
          const UT = {
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
          return TT instanceof gW.StandardMaterial ? {
            ...UT,
            diffuseMap: TT.diffuseTexture,
            diffuse: TT.diffuseColor,
            alphaCutOff: TT.alphaCutOff,
            emissiveMap: TT.emissiveTexture,
            emissive: TT.emissiveColor,
            roughness: 1,
            alphaMap: TT.opacityTexture
          } : TT instanceof OU ? {
            ...UT,
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
          } : UT
        }(TT);
      return null !== gT ? (zT.push(`${WT}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${gT.uniqueId}_diffuse.outputs:rgb>`), TT.needAlphaBlending() ? zT.push(`${WT}float inputs:opacity.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${gT.uniqueId}_diffuse.outputs:a>`) : TT.needAlphaTesting() && (zT.push(`${WT}float inputs:opacity.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${gT.uniqueId}_diffuse.outputs:a>`), zT.push(`${WT}float inputs:opacityThreshold = ${HT}`)), MT.push(bg(gT, TT, "diffuse", nT, UT, mT))) : zT.push(`${WT}color3f inputs:diffuseColor = ${qg(nT||cT.Color3.White())}`), null !== kT ? (zT.push(`${WT}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${kT.uniqueId}_emissive.outputs:rgb>`), MT.push(bg(kT, TT, "emissive", jT, UT, mT))) : jT && jT.toLuminance() > 0 && zT.push(`${WT}color3f inputs:emissiveColor = ${qg(jT)}`), null !== lT && (zT.push(`${WT}normal3f inputs:normal.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${lT.uniqueId}_normal.outputs:rgb>`), MT.push(bg(lT, TT, "normal", null, UT, mT))), null !== qT && (zT.push(`${WT}float inputs:occlusion.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${qT.uniqueId}_occlusion.outputs:${iT}>`), MT.push(bg(qT, TT, "occlusion", new cT.Color3(bT, bT, bT), UT, mT))), null !== LT ? (zT.push(`${WT}float inputs:roughness.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${LT.uniqueId}_roughness.outputs:${pT}>`), MT.push(bg(LT, TT, "roughness", new cT.Color3(BT, BT, BT), UT, mT))) : zT.push(`${WT}float inputs:roughness = ${BT}`), null !== ZT ? (zT.push(`${WT}float inputs:metallic.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${ZT.uniqueId}_metallic.outputs:${vT}>`), MT.push(bg(ZT, TT, "metallic", new cT.Color3(fT, fT, fT), UT, mT))) : zT.push(`${WT}float inputs:metallic = ${fT}`), null !== OT ? (zT.push(`${WT}float inputs:opacity.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${OT.uniqueId}_opacity.outputs:r>`), zT.push(`${WT}float inputs:opacityThreshold = 0.0001`), MT.push(bg(OT, TT, "opacity", null, UT, mT))) : zT.push(`${WT}float inputs:opacity = ${TT.alpha}`), YT && (null !== xT ? (zT.push(`${WT}float inputs:clearcoat.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${xT.uniqueId}_clearcoat.outputs:r>`), MT.push(bg(xT, TT, "clearcoat", new cT.Color3(JT, JT, JT), UT, mT))) : zT.push(`${WT}float inputs:clearcoat = ${JT}`), null !== wT ? (zT.push(`${WT}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${wT.uniqueId}_clearcoatRoughness.outputs:g>`), MT.push(bg(wT, TT, "clearcoatRoughness", new cT.Color3(dT, dT, dT), UT, mT))) : zT.push(`${WT}float inputs:clearcoatRoughness = ${dT}`)), zT.push(`${WT}float inputs:ior = ${eT}`), `\n\tdef Material "Material_${TT.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${zT.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${TT.uniqueId}/PreviewSurface.outputs:surface>\n\n${MT.join("\n")}\n\n\t}\n`
    }

    function eg(TT) {
      TT.computeWorldMatrix(!0);
      const UT = TT.getWorldMatrix().clone(),
        mT = TT.KF().useRightHandedSystem;
      let WT = TT.material?._getEffectiveOrientation(TT) ?? TT.sideOrientation,
        gT = !mT,
        nT = TT.parent;
      for (; nT;) {
        if (sm(nT, mT) && null === nT.parent) {
          mT || (UT.multiplyToRef(nT.getWorldMatrix().invert(), UT), WT = WT === MT.b.ClockWiseSideOrientation ? MT.b.CounterClockWiseSideOrientation : MT.b.ClockWiseSideOrientation), gT = !1;
          break
        }
        nT = nT.parent
      }
      return UT.determinant() < 0 && zT.Tools.Warn(`Mesh ${TT.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: UT,
        windingOrder: WT === MT.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: gT
      }
    }
    async function Yg(TT, UT, mT) {
      const MT = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...UT
      };
      "undefined" === typeof fflate && await zT.Tools.LoadScriptAsync(MT.fflateUrl);
      const gT = {};
      gT[MT.modelFileName] = null;
      let nT = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      nT += function(TT) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===TT.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${TT.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${TT.planeAnchoringAlignment}"`:""}\n            `
      }(MT);
      const HT = {};
      for (const WT of TT.meshes) {
        if (0 === WT.getTotalVertices()) continue;
        const TT = WT,
          UT = TT.geometry,
          kT = TT.material;
        if (!kT || !UT || mT && !mT(TT)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(kT.getClassName())) {
          const mT = "geometries/Geometry_" + UT.uniqueId + ".usda",
            {
              matrix: WT,
              windingOrder: zT,
              convertToRightHanded: jT
            } = eg(TT);
          if (!(mT in gT)) {
            const TT = Lg(UT, MT, zT, jT);
            gT[mT] = pg(TT)
          }
          kT.uniqueId in HT || (HT[kT.uniqueId] = kT), nT += cg(TT, WT)
        } else zT.Tools.Warn("USDZExportAsync does not support this material type: " + kT.getClassName())
      }
      TT.activeCamera && MT.exportCamera && (nT += function(TT, UT) {
        const mT = "Camera_" + TT.uniqueId,
          zT = Bg(WT.Matrix.RotationY(Math.PI).multiply(TT.getWorldMatrix()));
        if (TT.mode === eT.b.ORTHOGRAPHIC_CAMERA) return `def Camera "${mT}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${zT}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${TT.minZ.toPrecision(UT.precision)}, ${TT.maxZ.toPrecision(UT.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(TT.orthoLeft||1)+Math.abs(TT.orthoRight||1))).toPrecision(UT.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(TT.orthoTop||1)+Math.abs(TT.orthoBottom||1))).toPrecision(UT.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const WT = TT.eB().getAspectRatio(TT),
            MT = UT.cameraSensorWidth || 35;
          return `def Camera "${mT}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${zT}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${TT.minZ.toPrecision(UT.precision)}, ${TT.maxZ.toPrecision(UT.precision)})\n\t\t\tfloat focalLength = ${(MT/(2*Math.tan(.5*TT.fov))).toPrecision(UT.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(MT*WT).toPrecision(UT.precision)}\n\t\t\tfloat verticalAperture = ${(MT/WT).toPrecision(UT.precision)}            \n\t\t}\n\t\n\t`
        }
      }(TT.activeCamera, MT)), nT += "\n            }\n        }";
      const kT = {};
      nT += function(TT, UT, mT) {
        const WT = [];
        for (const zT in TT) {
          const MT = TT[zT];
          WT.push(Og(MT, UT, mT))
        }
        return `\n    def "Materials"\n{\n${WT.join("")}\n}\n\n`
      }(HT, kT, MT), nT += "\n    }", gT[MT.modelFileName] = fflate.strToU8(nT);
      for (const WT in kT) {
        const {
          texture: TT,
          ext: UT,
          mimeType: mT
        } = kT[WT], zT = await fm(TT);
        if (zT && ig(zT.mimeType) && zT.mimeType === mT) gT[`textures/Texture_${WT}.${UT}`] = new Uint8Array(zT.data);
        else {
          const zT = TT.getSize(),
            MT = await (0, iT.f)(TT),
            nT = await YT.DumpTools.DumpDataAsync(zT.width, zT.height, MT, mT, void 0, !1, !0);
          gT[`textures/Texture_${WT}.${UT}`] = new Uint8Array(nT).slice()
        }
      }
      let jT = 0;
      for (const WT in gT) {
        const TT = gT[WT];
        if (!TT) continue;
        jT += 34 + WT.length;
        const UT = 63 & jT;
        if (4 !== UT) {
          const mT = new Uint8Array(64 - UT);
          gT[WT] = [TT, {
            extra: {
              12345: mT
            }
          }]
        }
        jT = TT.length
      }
      return fflate.zipSync(gT, {
        level: 0
      })
    }
    var Jg = mT(41249);
    class xg {
      static Export(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          mT = arguments.length > 2 ? arguments[2] : void 0;
        if (!TT || 0 === TT.bones.length) throw new Error("Invalid or empty skeleton provided");
        let WT = UT;
        UT && 0 !== UT.length || (WT = TT.animations.map((TT => TT.name)));
        let zT = null;
        for (const kT of WT) {
          const UT = TT.getAnimationRange(kT);
          UT && (zT = zT ? new Jg.d("animation-range", Math.min(zT.from, UT.from), Math.max(zT.to, UT.to)) : UT)
        }
        if (!zT && (TT.animations.length > 0 && (zT = TT.getAnimationRange(TT.animations[0].name)), !zT)) throw new Error("No animation range found in skeleton");
        const MT = mT || 1 / (TT.animations[0]?.framePerSecond || 30),
          gT = this._BuildBoneHierarchy(TT, WT);
        let nT = 0;
        for (const kT of gT) kT.positionKeys.length > 0 && (nT = Math.max(nT, kT.positionKeys.length)), kT.rotationKeys.length > 0 && (nT = Math.max(nT, kT.rotationKeys.length));
        0 === nT && (nT = Math.floor((zT.to - zT.from) / MT) + 1);
        let HT = "";
        return HT += "HIERARCHY\n", HT += this._ExportHierarchy(gT, 0), HT += "MOTION\n", HT += `Frames: ${nT}\n`, HT += `Frame Time: ${MT.toFixed(6)}\n`, HT += this._ExportMotionData(gT, nT, 0, WT), HT
      }
      static _BuildBoneHierarchy(TT, UT) {
        const mT = new Map,
          WT = [];
        for (const zT of TT.bones) {
          const TT = {
            bone: zT,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          mT.set(zT, TT)
        }
        for (const zT of TT.bones) {
          const TT = mT.get(zT);
          if (zT.animations.length > 0)
            for (const mT of zT.animations) UT.includes(mT.name) && ("position" === mT.targetProperty ? (TT.hasPositionChannels = !0, TT.positionKeys.push(...mT.getKeys())) : "rotationQuaternion" === mT.targetProperty && (TT.hasRotationChannels = !0, TT.rotationKeys.push(...mT.getKeys())));
          if (zT.getParent()) {
            const UT = mT.get(zT.getParent());
            UT && UT.children.push(TT)
          } else WT.push(TT)
        }
        return WT
      }
      static _ExportHierarchy(TT, UT) {
        let mT = "";
        const WT = "    ".repeat(UT);
        for (const zT of TT) {
          const TT = zT.bone;
          if (this._IsEndSite(zT)) {
            mT += `${WT}End Site\n`, mT += `${WT}{\n`;
            const UT = this._GetBoneOffset(TT);
            mT += `${WT}    OFFSET ${UT.x.toFixed(6)} ${UT.y.toFixed(6)} ${UT.z.toFixed(6)}\n`, mT += `${WT}}\n`
          } else {
            mT += `${0===UT?"ROOT":`${WT}JOINT`} ${TT.name}\n`, mT += `${WT}{\n`;
            const MT = this._GetBoneOffset(TT);
            mT += `${WT}    OFFSET ${MT.x.toFixed(6)} ${MT.y.toFixed(6)} ${MT.z.toFixed(6)}\n`;
            const gT = [];
            zT.hasPositionChannels && gT.push("Xposition", "Yposition", "Zposition"), zT.hasRotationChannels && gT.push("Zrotation", "Xrotation", "Yrotation"), gT.length > 0 && (mT += `${WT}    CHANNELS ${gT.length} ${gT.join(" ")}\n`), zT.children.length > 0 && (mT += this._ExportHierarchy(zT.children, UT + 1)), mT += `${WT}}\n`
          }
        }
        return mT
      }
      static _IsEndSite(TT) {
        return 0 === TT.children.length
      }
      static _GetBoneOffset(TT) {
        try {
          if (!TT.getParent()) return TT.getRestMatrix().getTranslation();
          return TT.getLocalMatrix().getTranslation()
        } catch (UT) {
          return WT.JB.Zero()
        }
      }
      static _ExportMotionData(TT, UT, mT, WT) {
        let zT = "";
        for (let MT = 0; MT < UT; MT++) {
          const UT = [];
          this._CollectFrameValues(TT, MT + mT, UT, WT), zT += UT.map((TT => TT.toFixed(6))).join(" ") + "\n"
        }
        return zT
      }
      static _CollectFrameValues(TT, UT, mT, WT) {
        for (const zT of TT)
          if (!this._IsEndSite(zT)) {
            if (zT.hasPositionChannels) {
              const TT = this._GetPositionAtFrameIndex(zT.positionKeys, UT);
              mT.push(TT.x, TT.y, TT.z)
            }
            if (zT.hasRotationChannels) {
              const TT = this._GetRotationAtFrameIndex(zT.rotationKeys, UT),
                WT = this._QuaternionToEuler(TT);
              mT.push(WT.z, WT.x, WT.y)
            }
            zT.children.length > 0 && this._CollectFrameValues(zT.children, UT, mT, WT)
          }
      }
      static _GetPositionAtFrameIndex(TT, UT) {
        if (0 === TT.length) return WT.JB.Zero();
        return TT[Math.max(0, Math.min(UT, TT.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(TT, UT) {
        if (0 === TT.length) return WT.Quaternion.Identity();
        return TT[Math.max(0, Math.min(UT, TT.length - 1))].value.clone()
      }
      static _QuaternionToEuler(TT) {
        const UT = new WT.Matrix;
        TT.toRotationMatrix(UT);
        const mT = UT.m;
        let MT, gT, nT;
        const HT = Math.sqrt(mT[0] * mT[0] + mT[1] * mT[1]);
        return HT > Im.c ? (MT = Math.atan2(mT[6], mT[10]), gT = Math.atan2(-mT[2], HT), nT = Math.atan2(mT[1], mT[0])) : (MT = Math.atan2(-mT[9], mT[5]), gT = Math.atan2(-mT[2], HT), nT = 0), new WT.JB(zT.Tools.ToDegrees(MT), zT.Tools.ToDegrees(gT), zT.Tools.ToDegrees(nT))
      }
    }

    function dg(TT) {
      return "string" === typeof TT?.name
    }
    const wg = Symbol("__xml:meta$__"),
      tg = Symbol("__xml:name$__");

    function ag(TT, UT) {
      Object.prototype.hasOwnProperty.call(TT.metadata, wg) || (TT.metadata[wg] = []), TT.metadata[wg].push(UT)
    }

    function yg(TT) {
      return (UT, mT) => {
        UT[tg] = TT
      }
    }

    function Xg() {
      return (TT, UT) => ag(UT, {
        kind: "none",
        prop: String(UT.name),
        ignore: !0
      })
    }

    function Ig(TT) {
      return (UT, mT) => ag(mT, {
        kind: "attr",
        prop: String(mT.name),
        ...TT
      })
    }

    function Qg(TT) {
      return (UT, mT) => ag(mT, {
        kind: "elem",
        prop: String(mT.name),
        ...TT
      })
    }

    function sg(TT) {
      const UT = "function" === typeof TT ? TT : TT?.constructor,
        mT = UT?.[Symbol.metadata];
      if (!mT) return [];
      const WT = [];
      let zT = mT;
      for (; zT;) Object.prototype.hasOwnProperty.call(zT, wg) && WT.push(...zT[wg]), zT = Object.getPrototypeOf(zT);
      return WT
    }

    function Fg(TT) {
      const UT = TT?.constructor?.[tg];
      return UT || void 0
    }

    function Pg(TT) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(TT)
    }

    function Vg(TT) {
      if (dg(TT)) return TT;
      const UT = (TT ?? "").trim();
      if (!UT) return {
        name: ""
      };
      const mT = UT.indexOf(":");
      if (-1 === mT) return {
        name: UT
      };
      if (-1 !== UT.indexOf(":", mT + 1)) return {
        name: UT
      };
      const WT = UT.slice(0, mT),
        zT = UT.slice(mT + 1);
      return Pg(WT) && Pg(zT) ? {
        ns: WT,
        name: zT
      } : {
        name: UT
      }
    }

    function ug(TT, UT) {
      return UT ? `${UT}:${TT}` : TT
    }
    const Cg = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      rg = Object.freeze({
        number: Cg
      });

    function Kg(TT) {
      const UT = TT?.eps ?? Cg.eps;
      return {
        eps: UT,
        maxDecimalsCap: TT?.maxDecimalsCap ?? Cg.maxDecimalsCap,
        trimTrailingZeros: TT?.trimTrailingZeros ?? Cg.trimTrailingZeros,
        fixedDecimals: TT?.fixedDecimals,
        allowScientific: TT?.allowScientific ?? Cg.allowScientific,
        snapNearZero: TT?.snapNearZero ?? Cg.snapNearZero,
        zeroThreshold: TT?.zeroThreshold ?? UT,
        perAttributeEps: TT?.perAttributeEps
      }
    }

    function Sg(TT) {
      return {
        number: Kg(TT?.number)
      }
    }
    class Gg {
      constructor(TT) {
        if (this.o = TT, this._o = TT.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(TT) {
        if (!Number.isFinite(TT)) throw new Error(`Cannot format non-finite number: ${TT}`);
        const UT = this._o,
          mT = this._clampInt(UT.maxDecimalsCap ?? 15, 0, 20),
          WT = UT.trimTrailingZeros ?? !0,
          zT = UT.snapNearZero ?? !0,
          MT = UT.zeroThreshold ?? UT.eps,
          gT = 1 / UT.eps;
        let nT, HT = Math.round(TT * gT) / gT;
        if (Object.is(HT, -0) && (HT = 0), zT && Math.abs(HT) <= MT && (HT = 0), nT = void 0 !== UT.fixedDecimals ? this._clampInt(UT.fixedDecimals, 0, mT) : this._clampInt(Math.ceil(-Math.log10(UT.eps)), 0, mT), UT.allowScientific, 0 === nT) return String(Math.trunc(HT));
        let kT = HT.toFixed(nT);
        if (WT && void 0 === UT.fixedDecimals && (kT = kT.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(kT)) throw new Error(`Scientific notation not allowed in XML output: ${kT}`);
        return kT
      }
      _clampInt(TT, UT, mT) {
        return Number.isFinite(TT) ? (TT = Math.trunc(TT), Math.max(UT, Math.min(mT, TT))) : UT
      }
    }

    function Ng(TT) {
      return TT instanceof Date
    }

    function Eg(TT) {
      return "string" === typeof TT
    }

    function hg(TT) {
      return "string" === typeof TT || "number" === typeof TT || "boolean" === typeof TT || "bigint" === typeof TT || Ng(TT)
    }

    function Dg(TT) {
      return "number" === typeof TT || "boolean" === typeof TT || "bigint" === typeof TT || Ng(TT)
    }
    class og {
      constructor(TT, UT) {
        this._ns = new Map, this._prefixCount = 0, this._builder = TT, this._format = Sg(UT), this._nFmt = new Gg(this._format)
      }
      withNamespace() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        for (const WT of UT) this._assignNamespace(WT);
        return this
      }
      serialize(TT, UT) {
        if (!(UT = UT ?? Fg(TT))) throw new Error("can not find name for given object");
        const mT = Vg(UT);
        mT.ns && this._assignNamespace(mT.ns, "xmlns"), this._gatherNamespaces(TT, new WeakSet);
        const WT = this._builder.ele(null, mT.name);
        for (const [zT, MT] of Array.from(this._ns.entries())) WT.att("xmlns", MT, zT);
        this._writeObjectContent(WT, TT, (new WeakSet).add(TT)), this._builder.end()
      }
      _writeObject(TT, UT, mT) {
        if (mT.has(UT)) return;
        if (mT.add(UT), Array.isArray(UT)) {
          for (const WT of UT) Dg(WT) || (Eg(WT) ? this._builder.text(WT) : this._writeObject(TT, WT, mT));
          return
        }
        const WT = Fg(UT);
        if (!WT) return;
        const zT = Vg(WT),
          MT = this._getPrefix(zT),
          gT = ug(zT.name, MT);
        TT.ele(null, gT), this._writeObjectContent(TT, UT, mT), this._builder.end()
      }
      _getPrefix(TT) {
        if (TT.ns) {
          const UT = this._ns.get(TT.ns.toLowerCase());
          if ("xmlns" !== UT) return UT
        }
      }
      _writeObjectContent(TT, UT, mT) {
        const WT = sg(UT) ?? [],
          zT = new Map;
        for (const gT of WT) {
          const TT = zT.get(gT.prop) ?? [];
          TT.push(gT), zT.set(gT.prop, TT)
        }
        const MT = Object.keys(UT).sort(((TT, UT) => {
          const mT = (zT.get(TT) ?? []).some((TT => "attr" === TT.kind));
          return mT === (zT.get(UT) ?? []).some((TT => "attr" === TT.kind)) ? 0 : mT ? -1 : 1
        }));
        for (const gT of MT) {
          const WT = UT[gT];
          if (null === WT || void 0 === WT) continue;
          const MT = zT.get(gT);
          if (MT) {
            if (MT.some((TT => !0 === TT.ignore || "none" === TT.kind))) continue;
            for (const UT of MT) {
              const mT = UT.name ?? UT.prop.toLowerCase();
              if (mT) switch (UT.kind) {
                case "attr": {
                  let zT = null;
                  if ("number" === typeof WT && this._nFmt && (zT = this._nFmt.toString(WT)), UT.formatter) {
                    zT = new UT.formatter(this._format).toString(WT)
                  }
                  if (zT = zT ?? WT.toString(), zT) {
                    const UT = Vg(mT),
                      WT = this._getPrefix(UT),
                      MT = ug(UT.name, WT);
                    TT.att(null, MT, zT)
                  }
                  break
                }
              }
            }
          } else Dg(WT) || (Eg(WT) ? this._builder.text(WT) : this._writeObject(TT, WT, mT))
        }
      }
      _gatherNamespaces(TT, UT) {
        if (UT.has(TT)) return;
        if (UT.add(TT), Array.isArray(TT)) {
          for (const mT of TT) hg(mT) || this._gatherNamespaces(mT, UT);
          return
        }
        const mT = Fg(TT);
        mT && this._assignNamespace(mT);
        const WT = sg(TT) ?? [],
          zT = new Map;
        for (const gT of WT) {
          const TT = zT.get(gT.prop) ?? [];
          TT.push(gT), zT.set(gT.prop, TT)
        }
        const MT = [];
        for (const gT of Object.keys(TT)) {
          const UT = TT[gT];
          if (null === UT || void 0 === UT) continue;
          const mT = zT.get(gT);
          if (mT) {
            if (mT.some((TT => !0 === TT.ignore || "none" === TT.kind))) continue;
            for (const TT of mT) TT.name && this._assignNamespace(TT.name)
          }
          MT.push(UT)
        }
        for (const gT of MT) hg(gT) || this._gatherNamespaces(gT, UT)
      }
      _assignNamespace(TT, UT) {
        const mT = Vg(TT);
        if (mT?.ns) {
          const TT = mT.ns.toLowerCase();
          this._ns.get(TT) || this._ns.set(TT, UT ?? this._buildNsPrefix(TT))
        } else if ("xmlns" === UT) {
          const TT = mT.name.toLowerCase();
          this._ns.get(TT) || this._ns.set(TT, UT ?? this._buildNsPrefix(TT))
        }
      }
      _buildNsPrefix(TT) {
        let UT, mT = !1;
        do {
          UT = "ns" + this._prefixCount++;
          for (const TT of Array.from(this._ns.values()))
            if (TT === UT) {
              mT = !0;
              break
            }
        } while (mT);
        return UT
      }
    }
    class Ag {}
    var Rg;
    Ag.OpenTag = "<", Ag.CloseTag = ">", Ag.Slash = "/", Ag.Question = "?", Ag.Quote = '"', Ag.Equal = "=", Ag.Space = " ", Ag.Semicolon = ":", Ag.Dec = "<?xml", Ag.Xml = "xml", Ag.Xmlns = "xmlns", Ag.Xsi = "xsi", Ag.VersionKeyword = "version", Ag.EncodingKeyword = "encoding", Ag.StandaloneKeyword = "standalone",
      function(TT) {
        TT[TT.Declaration = 0] = "Declaration", TT[TT.Tag = 1] = "Tag", TT[TT.Attribute = 2] = "Attribute", TT[TT.Text = 3] = "Text"
      }(Rg || (Rg = {}));
    class Tn {
      constructor(TT) {
        this._ctxStack = [], this._d = 0, this._w = TT
      }
      dec(TT, UT, mT) {
        return this._w.write(Ag.Dec), this._writeAttStr(Ag.VersionKeyword, TT), UT && this._writeAttStr(Ag.EncodingKeyword, UT), void 0 !== mT && this._writeAttStr(Ag.StandaloneKeyword, mT ? "yes" : "no"), this._w.write(Ag.Question, Ag.CloseTag), this
      }
      att(TT, UT, mT) {
        const WT = this._peekContext();
        if (!WT) throw new Error("att() without open element");
        if (WT.closed) throw new Error(`att() after start tag closed for <${WT.name}>`);
        if (this._isXmlnsDecl(TT, UT)) {
          if (UT === Ag.Xmlns) WT.defaultNs = mT, this._registerNamespace(WT, "", mT), this._writeAttStr(Ag.Xmlns, mT);
          else if (TT) this._registerNamespace(WT, UT, mT), this._writeAttStr(`${TT}:${UT}`, mT);
          else {
            const TT = UT.slice(6);
            this._registerNamespace(WT, TT, mT), this._writeAttStr(UT, mT)
          }
          return WT.lastToken = Rg.Attribute, this
        }
        let zT = UT;
        if (TT) {
          zT = `${this._ensurePrefixDeclared(WT,TT)}:${UT}`
        }
        return WT.lastToken = Rg.Attribute, this._writeAttStr(zT, mT), this
      }
      ele(TT, UT) {
        const mT = this._peekContext();
        mT && this._closeOpenTagIfNeeded(mT);
        let WT = UT;
        if (TT) {
          WT = `${this._lookupPrefix(TT)??TT}:${UT}`
        }
        return this._pushContext(WT, ++this._d), this._w.write(Ag.OpenTag, WT), this
      }
      text(TT) {
        const UT = this._peekContext();
        if (!UT) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(UT), UT.lastToken = Rg.Text, this._w.write(this._escText(TT)), this
      }
      end() {
        const TT = this._popContext();
        return TT && (this._d--, TT.closed ? this._w.write(Ag.OpenTag, Ag.Slash, TT.name, Ag.CloseTag) : this._w.write(Ag.Slash, Ag.CloseTag)), this
      }
      _pushContext(TT, UT) {
        const mT = new Tn.Context(TT, UT);
        return this._ctxStack.push(mT), mT
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
      _writeAttStr(TT, UT) {
        this._w.write(Ag.Space, TT, Ag.Equal, Ag.Quote, this._escAttr(UT), Ag.Quote)
      }
      _lookupPrefix(TT) {
        let UT = this._ctxStack.length - 1;
        if (UT >= 0)
          do {
            const mT = this._ctxStack[UT--],
              WT = mT.ns2prefix?.get(TT);
            if (WT) return WT
          } while (UT >= 0)
      }
      _escText(TT) {
        return TT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(TT) {
        return this._escText(TT).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(TT, UT) {
        if (TT) return TT === Ag.Xmlns;
        const mT = UT.length,
          WT = Ag.Xmlns.length;
        return mT >= WT && (UT.startsWith(Ag.Xmlns) && (UT.length == WT || UT[WT] == Ag.Semicolon))
      }
      _registerNamespace(TT, UT, mT) {
        if (UT === Ag.Xml || UT === Ag.Xmlns) throw new Error(`reserved prefix '${UT}'`);
        const WT = TT.prefix2ns.get(UT);
        if (WT && WT !== mT) throw new Error(`prefix '${UT}' already bound to a different namespace`);
        TT.ns2prefix.get(mT) || TT.ns2prefix.set(mT, UT), TT.prefix2ns.set(UT, mT)
      }
      _allocPrefix(TT) {
        let UT = 1;
        for (;;) {
          const mT = "ns" + UT++;
          if (!TT.prefix2ns.has(mT)) return mT
        }
      }
      _ensurePrefixDeclared(TT, UT) {
        const mT = this._lookupPrefix(UT);
        if (mT) return mT;
        if (TT.closed) throw new Error(`can not declare namespace after start tag closed for <${TT.name}>`);
        const WT = this._allocPrefix(TT);
        return this._writeAttStr(`${Ag.Xmlns}:${WT}`, UT), this._registerNamespace(TT, WT, UT), WT
      }
      _closeOpenTagIfNeeded(TT) {
        TT.closed || (this._w.write(Ag.CloseTag), TT.closed = !0)
      }
    }
    Tn.Context = class {
      constructor(TT, UT) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = TT, this.depth = UT
      }
    };
    class Un {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        if (0 === UT.length) return this;
        const WT = UT.join("");
        return this._chunks.push(WT), this.count += WT.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class mn {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = TT, this._opts = UT, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        if (0 === UT.length) return this;
        const WT = UT.join("");
        if (0 === WT.length) return this;
        this._pending += WT, this._pendingChars += WT.length;
        const zT = this._opts.flushChars ?? 65536;
        return this._pendingChars >= zT && this.flush(), this
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
    const Wn = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      zn = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Mn, gn;
    ! function(TT) {
      TT.micron = "micron", TT.millimeter = "millimeter", TT.centimeter = "centimeter", TT.inch = "inch", TT.foot = "foot", TT.meter = "meter"
    }(Mn || (Mn = {})),
    function(TT) {
      TT.model = "model", TT.solidsupport = "solidsupport", TT.support = "support", TT.surface = "surface", TT.other = "other"
    }(gn || (gn = {}));
    const nn = "http://schemas.openxmlformats.org/package/2006/content-types",
      Hn = "http://schemas.openxmlformats.org/package/2006/relationships";
    var kn;
    ! function(TT) {
      TT.Relationships = "application/vnd.openxmlformats-package.relationships+xml", TT.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", TT.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", TT.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", TT.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", TT.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", TT.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", TT.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", TT.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", TT.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", TT.Png = "image/png", TT.Jpeg = "image/jpeg", TT.Tiff = "image/tiff", TT.Xml = "application/xml"
    }(kn || (kn = {}));
    const jn = "_rels/",
      Ln = "3D/",
      pn = "3dmodel.model",
      Bn = ".rels",
      Zn = "[Content_Types].xml";
    class cn {
      static IsKnown(TT) {
        return cn.Known.has(TT)
      }
      static IsThreeDimModel(TT) {
        return TT === cn.ThreeDimModel
      }
    }
    cn.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", cn.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", cn.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", cn.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", cn.Known = new Set([cn.ThreeDimModel, cn.Thumbnail, cn.PrintTicket, cn.MustPreserve]);
    let vn = (() => {
        let TT, UT, mT = [yg({
            ns: nn,
            name: "Types"
          })],
          WT = [];
        UT = class {
          constructor() {
            this.items = []
          }
        };
        return (0, JT.m)(UT, "ThreeMfContentTypes"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JT.h)(null, TT = {
            value: UT
          }, mT, {
            kind: "class",
            name: UT.name,
            metadata: zT
          }, null, WT), UT = TT.value, zT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, JT.k)(UT, WT)
        })(), UT
      })(),
      fn = (() => {
        let TT, UT, mT, WT, zT = [yg({
            ns: nn,
            name: "Default"
          })],
          MT = [],
          gT = [],
          nT = [],
          HT = [],
          kT = [];
        UT = class {
          constructor(TT, UT) {
            this.ext = (0, JT.k)(this, gT, void 0), this.ct = ((0, JT.k)(this, nT), (0, JT.k)(this, HT, void 0)), (0, JT.k)(this, kT), this.ext = TT, this.ct = UT
          }
        };
        return (0, JT.m)(UT, "ThreeMfContentType"), (() => {
          const jT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          mT = [Ig({
            name: {
              ns: nn,
              name: "Extension"
            }
          })], WT = [Ig({
            name: {
              ns: nn,
              name: "ContentType"
            }
          })], (0, JT.h)(null, null, mT, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: TT => "ext" in TT,
              get: TT => TT.ext,
              set: (TT, UT) => {
                TT.ext = UT
              }
            },
            metadata: jT
          }, gT, nT), (0, JT.h)(null, null, WT, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: TT => "ct" in TT,
              get: TT => TT.ct,
              set: (TT, UT) => {
                TT.ct = UT
              }
            },
            metadata: jT
          }, HT, kT), (0, JT.h)(null, TT = {
            value: UT
          }, zT, {
            kind: "class",
            name: UT.name,
            metadata: jT
          }, null, MT), UT = TT.value, jT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jT
          }), (0, JT.k)(UT, MT)
        })(), UT
      })(),
      qn = (() => {
        let TT, UT, mT = [yg({
            ns: Hn,
            name: "Relationships"
          })],
          WT = [];
        UT = class {
          constructor() {
            this.items = []
          }
        };
        return (0, JT.m)(UT, "ThreeMfRelationships"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JT.h)(null, TT = {
            value: UT
          }, mT, {
            kind: "class",
            name: UT.name,
            metadata: zT
          }, null, WT), UT = TT.value, zT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, JT.k)(UT, WT)
        })(), UT
      })(),
      bn = (() => {
        let TT, UT, mT, WT, zT, MT = [yg({
            ns: Hn,
            name: "Relationship"
          })],
          gT = [],
          nT = [],
          HT = [],
          kT = [],
          jT = [],
          lT = [],
          LT = [];
        UT = class {
          constructor(TT, UT, mT) {
            this.id = (0, JT.k)(this, nT, void 0), this.type = ((0, JT.k)(this, HT), (0, JT.k)(this, kT, void 0)), this.target = ((0, JT.k)(this, jT), (0, JT.k)(this, lT, void 0)), (0, JT.k)(this, LT), this.id = TT, this.type = UT, this.target = mT
          }
        };
        return (0, JT.m)(UT, "ThreeMfRelationship"), (() => {
          const pT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          mT = [Ig({
            name: "Id"
          })], WT = [Ig({
            name: "Type"
          })], zT = [Ig({
            name: "Target"
          })], (0, JT.h)(null, null, mT, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: TT => "id" in TT,
              get: TT => TT.id,
              set: (TT, UT) => {
                TT.id = UT
              }
            },
            metadata: pT
          }, nT, HT), (0, JT.h)(null, null, WT, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: TT => "type" in TT,
              get: TT => TT.type,
              set: (TT, UT) => {
                TT.type = UT
              }
            },
            metadata: pT
          }, kT, jT), (0, JT.h)(null, null, zT, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: TT => "target" in TT,
              get: TT => TT.target,
              set: (TT, UT) => {
                TT.target = UT
              }
            },
            metadata: pT
          }, lT, LT), (0, JT.h)(null, TT = {
            value: UT
          }, MT, {
            kind: "class",
            name: UT.name,
            metadata: pT
          }, null, gT), UT = TT.value, pT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pT
          }), (0, JT.k)(UT, gT)
        })(), UT
      })();
    class On {
      constructor(TT, UT, mT) {
        this.contentTypes = TT, this.relationships = UT, this.model = mT
      }
    }
    class en {
      static Zero() {
        return new en([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(TT) {
        this.values = TT
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class Yn {
      constructor(TT) {
        this.o = TT, this._f = new Gg(TT)
      }
      toString(TT) {
        return TT.values.map((TT => this._f.toString(TT))).join(" ")
      }
    }
    let Jn = (() => {
        let TT, UT, mT, WT, zT, MT = [yg({
            ns: Wn,
            name: "model"
          })],
          gT = [],
          nT = [],
          HT = [],
          kT = [],
          jT = [],
          lT = [],
          LT = [];
        UT = class {
          constructor() {
            this.unit = (0, JT.k)(this, nT, Mn.millimeter), this.requiredextensions = ((0, JT.k)(this, HT), (0, JT.k)(this, kT, void 0)), this.recommendedextensions = ((0, JT.k)(this, jT), (0, JT.k)(this, lT, void 0)), this.metadata = (0, JT.k)(this, LT)
          }
        };
        return (0, JT.m)(UT, "ThreeMfModel"), (() => {
          const pT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          mT = [Ig({
            name: "unit"
          })], WT = [Ig({
            name: "requiredextensions"
          })], zT = [Ig({
            name: "recommendedextensions"
          })], (0, JT.h)(null, null, mT, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: TT => "unit" in TT,
              get: TT => TT.unit,
              set: (TT, UT) => {
                TT.unit = UT
              }
            },
            metadata: pT
          }, nT, HT), (0, JT.h)(null, null, WT, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: TT => "requiredextensions" in TT,
              get: TT => TT.requiredextensions,
              set: (TT, UT) => {
                TT.requiredextensions = UT
              }
            },
            metadata: pT
          }, kT, jT), (0, JT.h)(null, null, zT, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: TT => "recommendedextensions" in TT,
              get: TT => TT.recommendedextensions,
              set: (TT, UT) => {
                TT.recommendedextensions = UT
              }
            },
            metadata: pT
          }, lT, LT), (0, JT.h)(null, TT = {
            value: UT
          }, MT, {
            kind: "class",
            name: UT.name,
            metadata: pT
          }, null, gT), UT = TT.value, pT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pT
          })
        })(), UT.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, JT.k)(UT, gT), UT
      })(),
      xn = (() => {
        let TT, UT, mT, WT, zT, MT = [yg({
            ns: Wn,
            name: "meta"
          })],
          gT = [],
          nT = [],
          HT = [],
          kT = [],
          jT = [],
          lT = [],
          LT = [];
        UT = class {
          constructor(TT, UT, mT, WT) {
            this.name = (0, JT.k)(this, nT, void 0), this.preserve = ((0, JT.k)(this, HT), (0, JT.k)(this, kT, void 0)), this.type = ((0, JT.k)(this, jT), (0, JT.k)(this, lT, void 0)), this.value = (0, JT.k)(this, LT), this.name = TT, this.value = UT, this.preserve = mT, this.type = WT
          }
        };
        return (0, JT.m)(UT, "ThreeMfMeta"), (() => {
          const pT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          mT = [Ig({
            name: "name"
          })], WT = [Ig({
            name: "preserve"
          })], zT = [Ig({
            name: "type"
          })], (0, JT.h)(null, null, mT, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name,
              set: (TT, UT) => {
                TT.name = UT
              }
            },
            metadata: pT
          }, nT, HT), (0, JT.h)(null, null, WT, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: TT => "preserve" in TT,
              get: TT => TT.preserve,
              set: (TT, UT) => {
                TT.preserve = UT
              }
            },
            metadata: pT
          }, kT, jT), (0, JT.h)(null, null, zT, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: TT => "type" in TT,
              get: TT => TT.type,
              set: (TT, UT) => {
                TT.type = UT
              }
            },
            metadata: pT
          }, lT, LT), (0, JT.h)(null, TT = {
            value: UT
          }, MT, {
            kind: "class",
            name: UT.name,
            metadata: pT
          }, null, gT), UT = TT.value, pT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pT
          }), (0, JT.k)(UT, gT)
        })(), UT
      })(),
      dn = (() => {
        let TT, UT, mT = [yg({
            ns: Wn,
            name: "metadatagroup"
          })],
          WT = [];
        UT = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, JT.m)(UT, "ThreeMfMetadataGroup"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JT.h)(null, TT = {
            value: UT
          }, mT, {
            kind: "class",
            name: UT.name,
            metadata: zT
          }, null, WT), UT = TT.value, zT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, JT.k)(UT, WT)
        })(), UT
      })(),
      wn = (() => {
        let TT, UT, mT = [yg({
            ns: Wn,
            name: "resources"
          })],
          WT = [];
        UT = class {
          constructor() {
            this.object = []
          }
        };
        return (0, JT.m)(UT, "ThreeMfResources"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JT.h)(null, TT = {
            value: UT
          }, mT, {
            kind: "class",
            name: UT.name,
            metadata: zT
          }, null, WT), UT = TT.value, zT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, JT.k)(UT, WT)
        })(), UT
      })(),
      tn = (() => {
        let TT, UT, mT, WT, zT, MT, gT, nT, HT, kT = [yg({
            ns: Wn,
            name: "object"
          })],
          jT = [],
          lT = [],
          LT = [],
          pT = [],
          BT = [],
          ZT = [],
          cT = [],
          vT = [],
          fT = [],
          qT = [],
          iT = [],
          bT = [],
          OT = [],
          eT = [],
          YT = [];
        UT = class {
          constructor(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gn.model;
            this.id = (0, JT.k)(this, lT, void 0), this.type = ((0, JT.k)(this, LT), (0, JT.k)(this, pT, void 0)), this.thumbnail = ((0, JT.k)(this, BT), (0, JT.k)(this, ZT, void 0)), this.partnumber = ((0, JT.k)(this, cT), (0, JT.k)(this, vT, void 0)), this.name = ((0, JT.k)(this, fT), (0, JT.k)(this, qT, void 0)), this.pid = ((0, JT.k)(this, iT), (0, JT.k)(this, bT, void 0)), this.pindex = ((0, JT.k)(this, OT), (0, JT.k)(this, eT, void 0)), this.metadatagroup = (0, JT.k)(this, YT), this.id = TT, this.type = UT
          }
        };
        return (0, JT.m)(UT, "ThreeMfObject"), (() => {
          const xT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          mT = [Ig({
            name: "id"
          })], WT = [Ig({
            name: "type"
          })], zT = [Ig({
            name: "thumbnail"
          })], MT = [Ig({
            name: "partnumber"
          })], gT = [Ig({
            name: "name"
          })], nT = [Ig({
            name: "pid"
          })], HT = [Ig({
            name: "pindex"
          })], (0, JT.h)(null, null, mT, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: TT => "id" in TT,
              get: TT => TT.id,
              set: (TT, UT) => {
                TT.id = UT
              }
            },
            metadata: xT
          }, lT, LT), (0, JT.h)(null, null, WT, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: TT => "type" in TT,
              get: TT => TT.type,
              set: (TT, UT) => {
                TT.type = UT
              }
            },
            metadata: xT
          }, pT, BT), (0, JT.h)(null, null, zT, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: TT => "thumbnail" in TT,
              get: TT => TT.thumbnail,
              set: (TT, UT) => {
                TT.thumbnail = UT
              }
            },
            metadata: xT
          }, ZT, cT), (0, JT.h)(null, null, MT, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: TT => "partnumber" in TT,
              get: TT => TT.partnumber,
              set: (TT, UT) => {
                TT.partnumber = UT
              }
            },
            metadata: xT
          }, vT, fT), (0, JT.h)(null, null, gT, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name,
              set: (TT, UT) => {
                TT.name = UT
              }
            },
            metadata: xT
          }, qT, iT), (0, JT.h)(null, null, nT, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: TT => "pid" in TT,
              get: TT => TT.pid,
              set: (TT, UT) => {
                TT.pid = UT
              }
            },
            metadata: xT
          }, bT, OT), (0, JT.h)(null, null, HT, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: TT => "pindex" in TT,
              get: TT => TT.pindex,
              set: (TT, UT) => {
                TT.pindex = UT
              }
            },
            metadata: xT
          }, eT, YT), (0, JT.h)(null, TT = {
            value: UT
          }, kT, {
            kind: "class",
            name: UT.name,
            metadata: xT
          }, null, jT), UT = TT.value, xT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xT
          }), (0, JT.k)(UT, jT)
        })(), UT
      })(),
      an = (() => {
        let TT, UT, mT = [yg({
            ns: Wn,
            name: "mesh"
          })],
          WT = [];
        UT = class {
          constructor(TT, UT) {
            this.vertices = TT ?? new yn, this.triangles = UT ?? new In
          }
        };
        return (0, JT.m)(UT, "ThreeMfMesh"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JT.h)(null, TT = {
            value: UT
          }, mT, {
            kind: "class",
            name: UT.name,
            metadata: zT
          }, null, WT), UT = TT.value, zT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, JT.k)(UT, WT)
        })(), UT
      })(),
      yn = (() => {
        let TT, UT, mT = [yg({
            ns: Wn,
            name: "vertices"
          })],
          WT = [];
        UT = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, JT.m)(UT, "ThreeMfVertices"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JT.h)(null, TT = {
            value: UT
          }, mT, {
            kind: "class",
            name: UT.name,
            metadata: zT
          }, null, WT), UT = TT.value, zT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, JT.k)(UT, WT)
        })(), UT
      })(),
      Xn = (() => {
        let TT, UT, mT, WT, zT, MT = [yg({
            ns: Wn,
            name: "vertex"
          })],
          gT = [],
          nT = [],
          HT = [],
          kT = [],
          jT = [],
          lT = [],
          LT = [];
        UT = class {
          constructor() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, JT.k)(this, nT, void 0), this.y = ((0, JT.k)(this, HT), (0, JT.k)(this, kT, void 0)), this.z = ((0, JT.k)(this, jT), (0, JT.k)(this, lT, void 0)), (0, JT.k)(this, LT), this.x = TT, this.y = UT, this.z = mT
          }
        };
        return (0, JT.m)(UT, "ThreeMfVertex"), (() => {
          const pT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          mT = [Ig({
            name: "x"
          })], WT = [Ig({
            name: "y"
          })], zT = [Ig({
            name: "z"
          })], (0, JT.h)(null, null, mT, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: TT => "x" in TT,
              get: TT => TT.x,
              set: (TT, UT) => {
                TT.x = UT
              }
            },
            metadata: pT
          }, nT, HT), (0, JT.h)(null, null, WT, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: TT => "y" in TT,
              get: TT => TT.y,
              set: (TT, UT) => {
                TT.y = UT
              }
            },
            metadata: pT
          }, kT, jT), (0, JT.h)(null, null, zT, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: TT => "z" in TT,
              get: TT => TT.z,
              set: (TT, UT) => {
                TT.z = UT
              }
            },
            metadata: pT
          }, lT, LT), (0, JT.h)(null, TT = {
            value: UT
          }, MT, {
            kind: "class",
            name: UT.name,
            metadata: pT
          }, null, gT), UT = TT.value, pT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pT
          }), (0, JT.k)(UT, gT)
        })(), UT
      })(),
      In = (() => {
        let TT, UT, mT = [yg({
            ns: Wn,
            name: "triangles"
          })],
          WT = [];
        UT = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, JT.m)(UT, "ThreeMfTriangles"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JT.h)(null, TT = {
            value: UT
          }, mT, {
            kind: "class",
            name: UT.name,
            metadata: zT
          }, null, WT), UT = TT.value, zT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, JT.k)(UT, WT)
        })(), UT
      })(),
      Qn = (() => {
        let TT, UT, mT, WT, zT, MT, gT, nT, HT, kT = [yg({
            ns: Wn,
            name: "triangle"
          })],
          jT = [],
          lT = [],
          LT = [],
          pT = [],
          BT = [],
          ZT = [],
          cT = [],
          vT = [],
          fT = [],
          qT = [],
          iT = [],
          bT = [],
          OT = [],
          eT = [],
          YT = [];
        UT = class {
          constructor(TT, UT, mT) {
            this.v1 = (0, JT.k)(this, lT, void 0), this.v2 = ((0, JT.k)(this, LT), (0, JT.k)(this, pT, void 0)), this.v3 = ((0, JT.k)(this, BT), (0, JT.k)(this, ZT, void 0)), this.p1 = ((0, JT.k)(this, cT), (0, JT.k)(this, vT, void 0)), this.p2 = ((0, JT.k)(this, fT), (0, JT.k)(this, qT, void 0)), this.p3 = ((0, JT.k)(this, iT), (0, JT.k)(this, bT, void 0)), this.pid = ((0, JT.k)(this, OT), (0, JT.k)(this, eT, void 0)), (0, JT.k)(this, YT), this.v1 = TT, this.v2 = UT, this.v3 = mT
          }
        };
        return (0, JT.m)(UT, "ThreeMfTriangle"), (() => {
          const xT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          mT = [Ig({
            name: "v1"
          })], WT = [Ig({
            name: "v2"
          })], zT = [Ig({
            name: "v3"
          })], MT = [Ig({
            name: "p1"
          })], gT = [Ig({
            name: "p2"
          })], nT = [Ig({
            name: "p3"
          })], HT = [Ig({
            name: "pid"
          })], (0, JT.h)(null, null, mT, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: TT => "v1" in TT,
              get: TT => TT.v1,
              set: (TT, UT) => {
                TT.v1 = UT
              }
            },
            metadata: xT
          }, lT, LT), (0, JT.h)(null, null, WT, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: TT => "v2" in TT,
              get: TT => TT.v2,
              set: (TT, UT) => {
                TT.v2 = UT
              }
            },
            metadata: xT
          }, pT, BT), (0, JT.h)(null, null, zT, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: TT => "v3" in TT,
              get: TT => TT.v3,
              set: (TT, UT) => {
                TT.v3 = UT
              }
            },
            metadata: xT
          }, ZT, cT), (0, JT.h)(null, null, MT, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: TT => "p1" in TT,
              get: TT => TT.p1,
              set: (TT, UT) => {
                TT.p1 = UT
              }
            },
            metadata: xT
          }, vT, fT), (0, JT.h)(null, null, gT, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: TT => "p2" in TT,
              get: TT => TT.p2,
              set: (TT, UT) => {
                TT.p2 = UT
              }
            },
            metadata: xT
          }, qT, iT), (0, JT.h)(null, null, nT, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: TT => "p3" in TT,
              get: TT => TT.p3,
              set: (TT, UT) => {
                TT.p3 = UT
              }
            },
            metadata: xT
          }, bT, OT), (0, JT.h)(null, null, HT, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: TT => "pid" in TT,
              get: TT => TT.pid,
              set: (TT, UT) => {
                TT.pid = UT
              }
            },
            metadata: xT
          }, eT, YT), (0, JT.h)(null, TT = {
            value: UT
          }, kT, {
            kind: "class",
            name: UT.name,
            metadata: xT
          }, null, jT), UT = TT.value, xT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xT
          }), (0, JT.k)(UT, jT)
        })(), UT
      })(),
      sn = (() => {
        let TT, UT, mT = [yg({
            ns: Wn,
            name: "components"
          })],
          WT = [];
        UT = class {
          constructor() {
            this.component = []
          }
        };
        return (0, JT.m)(UT, "ThreeMfComponents"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JT.h)(null, TT = {
            value: UT
          }, mT, {
            kind: "class",
            name: UT.name,
            metadata: zT
          }, null, WT), UT = TT.value, zT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, JT.k)(UT, WT)
        })(), UT
      })(),
      Fn = (() => {
        let TT, UT, mT, WT, zT = [yg({
            ns: Wn,
            name: "component"
          })],
          MT = [],
          gT = [],
          nT = [],
          HT = [],
          kT = [];
        UT = class {
          constructor(TT, UT) {
            this.objectid = (0, JT.k)(this, gT, void 0), this.transform = ((0, JT.k)(this, nT), (0, JT.k)(this, HT, void 0)), (0, JT.k)(this, kT), this.objectid = TT, this.transform = UT
          }
        };
        return (0, JT.m)(UT, "ThreeMfComponent"), (() => {
          const jT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          mT = [Ig({
            name: "objectid"
          })], WT = [Ig({
            name: "transform",
            formatter: Yn
          })], (0, JT.h)(null, null, mT, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: TT => "objectid" in TT,
              get: TT => TT.objectid,
              set: (TT, UT) => {
                TT.objectid = UT
              }
            },
            metadata: jT
          }, gT, nT), (0, JT.h)(null, null, WT, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: TT => "transform" in TT,
              get: TT => TT.transform,
              set: (TT, UT) => {
                TT.transform = UT
              }
            },
            metadata: jT
          }, HT, kT), (0, JT.h)(null, TT = {
            value: UT
          }, zT, {
            kind: "class",
            name: UT.name,
            metadata: jT
          }, null, MT), UT = TT.value, jT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jT
          }), (0, JT.k)(UT, MT)
        })(), UT
      })(),
      Pn = (() => {
        let TT, UT, mT, WT = [yg({
            ns: Wn,
            name: "basematerials"
          })],
          zT = [],
          MT = [],
          gT = [];
        UT = class {
          constructor(TT) {
            this.id = (0, JT.k)(this, MT, void 0), this.base = ((0, JT.k)(this, gT), []), this.id = TT
          }
        };
        return (0, JT.m)(UT, "ThreeMfBaseMaterials"), (() => {
          const nT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          mT = [Ig({
            name: "id"
          })], (0, JT.h)(null, null, mT, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: TT => "id" in TT,
              get: TT => TT.id,
              set: (TT, UT) => {
                TT.id = UT
              }
            },
            metadata: nT
          }, MT, gT), (0, JT.h)(null, TT = {
            value: UT
          }, WT, {
            kind: "class",
            name: UT.name,
            metadata: nT
          }, null, zT), UT = TT.value, nT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nT
          }), (0, JT.k)(UT, zT)
        })(), UT
      })(),
      Vn = (() => {
        let TT, UT, mT, WT, zT = [yg({
            ns: Wn,
            name: "base"
          })],
          MT = [],
          gT = [],
          nT = [],
          HT = [],
          kT = [];
        UT = class {
          constructor(TT, UT) {
            this.name = (0, JT.k)(this, gT, void 0), this.displaycolor = ((0, JT.k)(this, nT), (0, JT.k)(this, HT, void 0)), (0, JT.k)(this, kT), this.name = TT, this.displaycolor = UT
          }
        };
        return (0, JT.m)(UT, "ThreeMfBase"), (() => {
          const jT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          mT = [Ig({
            name: "name"
          })], WT = [Ig({
            name: "displaycolor"
          })], (0, JT.h)(null, null, mT, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name,
              set: (TT, UT) => {
                TT.name = UT
              }
            },
            metadata: jT
          }, gT, nT), (0, JT.h)(null, null, WT, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: TT => "displaycolor" in TT,
              get: TT => TT.displaycolor,
              set: (TT, UT) => {
                TT.displaycolor = UT
              }
            },
            metadata: jT
          }, HT, kT), (0, JT.h)(null, TT = {
            value: UT
          }, zT, {
            kind: "class",
            name: UT.name,
            metadata: jT
          }, null, MT), UT = TT.value, jT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jT
          }), (0, JT.k)(UT, MT)
        })(), UT
      })(),
      un = (() => {
        let TT, UT, mT = [yg({
            ns: Wn,
            name: "build"
          })],
          WT = [];
        UT = class {
          constructor() {
            this.item = []
          }
        };
        return (0, JT.m)(UT, "ThreeMfBuild"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, JT.h)(null, TT = {
            value: UT
          }, mT, {
            kind: "class",
            name: UT.name,
            metadata: zT
          }, null, WT), UT = TT.value, zT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, JT.k)(UT, WT)
        })(), UT
      })(),
      Cn = (() => {
        let TT, UT, mT, WT, zT, MT = [yg({
            ns: Wn,
            name: "item"
          })],
          gT = [],
          nT = [],
          HT = [],
          kT = [],
          jT = [],
          lT = [],
          LT = [];
        UT = class {
          constructor(TT, UT, mT) {
            this.objectid = (0, JT.k)(this, nT, void 0), this.transform = ((0, JT.k)(this, HT), (0, JT.k)(this, kT, void 0)), this.partnumber = ((0, JT.k)(this, jT), (0, JT.k)(this, lT, void 0)), this.metadatagroup = (0, JT.k)(this, LT), this.objectid = TT, this.transform = UT, this.partnumber = mT
          }
        };
        return (0, JT.m)(UT, "ThreeMfItem"), (() => {
          const pT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          mT = [Ig({
            name: "objectid"
          })], WT = [Ig({
            name: "transform",
            formatter: Yn
          })], zT = [Ig({
            name: "partnumber"
          })], (0, JT.h)(null, null, mT, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: TT => "objectid" in TT,
              get: TT => TT.objectid,
              set: (TT, UT) => {
                TT.objectid = UT
              }
            },
            metadata: pT
          }, nT, HT), (0, JT.h)(null, null, WT, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: TT => "transform" in TT,
              get: TT => TT.transform,
              set: (TT, UT) => {
                TT.transform = UT
              }
            },
            metadata: pT
          }, kT, jT), (0, JT.h)(null, null, zT, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: TT => "partnumber" in TT,
              get: TT => TT.partnumber,
              set: (TT, UT) => {
                TT.partnumber = UT
              }
            },
            metadata: pT
          }, lT, LT), (0, JT.h)(null, TT = {
            value: UT
          }, MT, {
            kind: "class",
            name: UT.name,
            metadata: pT
          }, null, gT), UT = TT.value, pT && Object.defineProperty(UT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pT
          }), (0, JT.k)(UT, gT)
        })(), UT
      })();
    class rn {
      constructor(TT, UT) {
        this._object = new tn(TT, UT)
      }
      withName(TT) {
        return this._object.name = TT, this
      }
      withThumbnail(TT) {
        return this._object.thumbnail = TT, this
      }
      withProperty(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = TT, this._object.id = UT, this
      }
      build() {
        return this._object
      }
      reset(TT, UT) {
        this._object = new tn(TT, UT)
      }
    }
    class Kn extends rn {
      constructor(TT) {
        super(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gn.model), this._object.content = new sn
      }
      withComponent(TT, UT) {
        return this._object.content.component.push(new Fn(TT, UT)), this
      }
    }
    class Sn extends rn {
      constructor(TT) {
        super(TT, gn.model)
      }
      withPostProcessHandlers(TT, UT) {
        return this._vh = TT, this._th = UT, this
      }
      withData(TT) {
        return this._object.content = this._buildMesh(TT), this
      }
      withMaterial(TT, UT) {
        return this._object.pid = TT, this._object.pindex = UT, this
      }
      _buildMesh(TT) {
        const UT = this._buildVertices(TT.positions),
          mT = this._buildTriangle(TT.indices);
        return new an(UT, mT)
      }
      _buildVertices(TT) {
        const UT = new yn;
        if (TT)
          for (let mT = 0; mT < TT.length;) {
            const WT = TT[mT++],
              zT = TT[mT++],
              MT = TT[mT++];
            let gT = new Xn(WT, zT, MT);
            this._vh && (gT = this._vh(gT)), UT.vertex.push(gT)
          }
        return UT
      }
      _buildTriangle(TT) {
        const UT = new In;
        if (TT)
          for (let mT = 0; mT < TT.length;) {
            const WT = TT[mT++],
              zT = TT[mT++],
              MT = TT[mT++];
            let gT = new Qn(WT, zT, MT);
            this._th && (gT = this._th(gT)), UT.triangle.push(gT)
          }
        return UT
      }
    }
    class Gn {
      constructor(TT) {
        this._m = new Pn(TT)
      }
      withColor(TT, UT) {
        this._m.base = this._m.base ?? [];
        let mT = this._m.base.find((UT => UT.name.toLowerCase() === TT.toLowerCase()));
        return mT ? (mT.displaycolor = this._rgbaToHex(UT), this) : (mT = new Vn(TT, this._rgbaToHex(UT)), this._m.base.push(mT), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(TT) {
        const UT = TT => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(TT, 1 / 2.2)))),
          mT = UT(TT.r).toString(16).padStart(2, "0").toUpperCase(),
          WT = UT(TT.g).toString(16).padStart(2, "0").toUpperCase(),
          zT = UT(TT.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof TT.a) {
          return `#${mT}${WT}${zT}${Math.round(Math.min(255,Math.max(0,255*TT.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${mT}${WT}${zT}`
      }
    }
    class Nn {
      constructor() {
        this._model = new Jn, this._objects = new Map
      }
      withMetaData(TT, UT, mT, WT) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new xn(TT, UT, mT, WT)), this
      }
      withMaterial(TT) {
        return TT instanceof Gn && (TT = TT.build()), TT && (this._model.resources = this._model.resources ?? new wn, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(TT)), this
      }
      withMesh(TT) {
        return TT instanceof Sn && (TT = TT.build()), this._model.resources = this._model.resources ?? new wn, this._model.resources.object.push(TT), this
      }
      withComponents(TT) {
        return TT instanceof Kn && (TT = TT.build()), this._model.resources = this._model.resources ?? new wn, this._model.resources.object.push(TT), this
      }
      withBuild(TT, UT, mT) {
        return this._model.build = this._model.build ?? new un, this._model.build.item?.push(new Cn(TT, UT, mT)), this
      }
      withUnit(TT) {
        return this._model.unit = TT, this
      }
      reset() {
        return this._model = new Jn, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    Nn.KnownMetaSet = new Set(Jn.KnownMeta.map((TT => TT.toLowerCase())));
    class En {
      withContentType(TT) {
        this._cts || (this._cts = new vn);
        const UT = this._cts.items;
        return UT.some((UT => UT.ext === TT.ext && UT.ct === TT.ct)) || UT.push(TT), this
      }
      withRelationship(TT) {
        this._rs || (this._rs = new qn);
        const UT = this._rs.items;
        return UT.some((UT => UT.id === TT.id)) || UT.push(TT), this.withContentType(new fn("rels", kn.Relationships)), this
      }
      withModel(TT) {
        return TT instanceof Nn && (TT = TT.build()), this._m = TT, this.withContentType(new fn("model", kn.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const TT = `${Ln}${pn}`;
        if (!this._rs) {
          const UT = `/${TT}`;
          this.withRelationship(new bn("rel0", cn.ThreeDimModel, UT))
        }
        return new On(this._cts, this._rs, this._m)
      }
    }
    class hn {
      constructor(TT) {
        this._o = TT
      }
      get options() {
        return this._o
      }
      async serializeAsync(TT) {
        const UT = await this.ensureZipLibReadyAsync();
        if (!UT) return;
        const mT = UT.Zip,
          WT = UT.ZipDeflate;
        if (!mT || !WT) throw new Error("fflate Zip / ZipDeflate not available");
        const zT = function(TT, UT, mT) {
          const zT = new WT(UT, {
            level: 6
          });
          TT.add(zT);
          const MT = function(TT) {
              return {
                push: (UT, mT) => TT.push(UT, mT)
              }
            }(zT),
            gT = new mn(MT),
            nT = new Tn(gT).dec("1.0", "UTF-8");
          new og(nT).serialize(mT), gT.finish()
        };
        for (var MT = arguments.length, gT = new Array(MT > 1 ? MT - 1 : 0), nT = 1; nT < MT; nT++) gT[nT - 1] = arguments[nT];
        const HT = this.toDocument(...gT);
        if (!HT) return;
        const kT = new mT(TT);
        zT(kT, Zn, HT.contentTypes), zT(kT, `${jn}${Bn}`, HT.relationships), zT(kT, `${Ln}${pn}`, HT.model), kT.end()
      }
      toDocument() {
        const TT = (new Nn).withUnit(this._o?.unit ?? Mn.millimeter);
        if (this.options.metadata)
          for (const zT in this.options.metadata) TT.withMetaData(zT, this.options.metadata[zT]);
        for (var UT = arguments.length, mT = new Array(UT), WT = 0; WT < UT; WT++) mT[WT] = arguments[WT];
        return (new En).withModel(this.toModel(TT, ...mT)).build()
      }
    }
    class Dn {
      static async SerializeToMemoryAsync(TT) {
        const UT = new Array;
        let mT = 0;
        for (var WT = arguments.length, zT = new Array(WT > 1 ? WT - 1 : 0), MT = 1; MT < WT; MT++) zT[MT - 1] = arguments[MT];
        if (await TT.serializeAsync((function(TT, WT, zT) {
            UT.push(WT), mT += WT.length
          }), ...zT), !mT) return;
        const gT = new Uint8Array(mT);
        let nT = 0;
        for (const HT of UT) gT.set(HT, nT), nT += HT.length;
        return gT
      }
    }
    class An {}
    An.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Rn {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = TT, this._to = UT, this._step = mT, this._i = TT
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
    class TH extends hn {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...TH.DefaultOptions,
          ...TT
        })
      }
      toModel(TT) {
        for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
        mT = mT.filter((TT => TT instanceof jW.d || TT instanceof pT.e));
        const zT = new Rn,
          MT = TT,
          gT = new Map,
          nT = this.options.exportInstances ? [] : null;
        for (let HT = 0; HT < mT.length; HT++) {
          const TT = mT[HT];
          if (TT instanceof pT.e) {
            nT?.push(TT);
            continue
          }
          const UT = TT.name || `mesh${HT}`,
            WT = TT.getWorldMatrix(),
            kT = this._handleBabylonTo3mfMatrixTransformToRef(WT, en.Zero()),
            jT = TT.rY;
          if (void 0 === jT) continue;
          const lT = 1 == jT.length;
          for (let mT = 0; mT < jT.length; mT++) {
            const WT = jT[mT],
              nT = this._extractSubMesh(TT, WT);
            if (nT) {
              const TT = lT ? `${UT}` : `${UT}_${mT}`,
                HT = new Sn(zT.next()).withData(nT).withName(TT).build();
              MT.withMesh(HT), MT.withBuild(HT.id, kT), gT.set(WT, HT)
            }
          }
        }
        if (nT && nT.length) {
          const TT = this._groupBy(nT, (TT => TT.czT));
          for (const [UT, mT] of Array.from(TT.entries()))
            if (mT && mT.length)
              for (let TT = 0; TT < mT.length; TT++) {
                const WT = mT[TT].getWorldMatrix(),
                  zT = UT.rY;
                for (let TT = 0; TT < zT.length; TT++) {
                  const UT = zT[TT],
                    mT = gT.get(UT);
                  mT && MT.withBuild(mT.id, this._handleBabylonTo3mfMatrixTransformToRef(WT, en.Zero()))
                }
              }
        }
        return MT.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const TT = globalThis;
          return TT.fflate || await zT.Tools.LoadScriptAsync(An.FFLATEUrl), TT.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(TT, UT) {
        const mT = TT.vWT();
        if (!mT) return;
        const WT = TT.getVerticesData(TH._PositionKind);
        if (!WT) return;
        if (0 == UT.indexStart && UT.indexCount == mT.length) return {
          positions: WT,
          indices: mT
        };
        const zT = UT.indexStart,
          MT = new Map,
          gT = [],
          nT = new Uint32Array(UT.indexCount);
        for (let HT = 0; HT < UT.indexCount; HT++) {
          const TT = mT[zT + HT];
          let UT = MT.get(TT);
          if (void 0 === UT) {
            UT = MT.size, MT.set(TT, UT);
            const mT = 3 * TT;
            gT.push(WT[mT], WT[mT + 1], WT[mT + 2])
          }
          nT[HT] = UT
        }
        return {
          positions: new Float32Array(gT),
          indices: nT
        }
      }
      _groupBy(TT, UT) {
        const mT = new Map;
        for (const WT of TT) {
          const TT = UT(WT),
            zT = mT.get(TT);
          zT ? zT.push(WT) : mT.set(TT, [WT])
        }
        return mT
      }
      _handleBabylonTo3mfMatrixTransformToRef(TT, UT) {
        const mT = TT.multiplyToRef(TH._R_BJS_TO_3MF, PT.e.Zero()).m;
        return UT.values = [mT[0], mT[1], mT[2], mT[4], mT[5], mT[6], mT[8], mT[9], mT[10], mT[12], mT[13], mT[14]], UT
      }
    }
    TH.DefaultOptions = {
      unit: Mn.meter,
      exportInstances: !1
    }, TH._PositionKind = "position", TH._R_BJS_TO_3MF = PT.e.RotationX(Math.PI / 2).multiply(PT.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);