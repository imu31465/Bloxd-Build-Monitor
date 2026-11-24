export const id = 230;
export const ids = [230, 235];
export const modules = {
  41744: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD
    });
    var pD = wD(41678),
      sD = wD(39918);
    let KD = !1;

    function rD() {
      KD || (KD = !0, sD.d.prototype._sphericalPolynomialTargetSize = 0, sD.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(sD.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = pD.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((DD => {
              this._texture._sphericalPolynomial = DD, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(DD) {
          this._texture && (this._texture._sphericalPolynomial = DD)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  37267: (DD, zD, wD) => {
    wD.d(zD, {
      Color3: () => pD.d,
      e: () => pD.h
    });
    var pD = wD(37273);
    (0, pD.i)()
  },
  37752: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(37754);
    class sD {
      static GetPlanes(DD) {
        const zD = [];
        for (let wD = 0; wD < 6; wD++) zD.push(new pD.e(0, 0, 0, 0));
        return sD.GetPlanesToRef(DD, zD), zD
      }
      static GetNearPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[2], zD.normal.y = wD[7] + wD[6], zD.normal.z = wD[11] + wD[10], zD.d = wD[15] + wD[14], zD.normalize()
      }
      static GetFarPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[2], zD.normal.y = wD[7] - wD[6], zD.normal.z = wD[11] - wD[10], zD.d = wD[15] - wD[14], zD.normalize()
      }
      static GetLeftPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[0], zD.normal.y = wD[7] + wD[4], zD.normal.z = wD[11] + wD[8], zD.d = wD[15] + wD[12], zD.normalize()
      }
      static GetRightPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[0], zD.normal.y = wD[7] - wD[4], zD.normal.z = wD[11] - wD[8], zD.d = wD[15] - wD[12], zD.normalize()
      }
      static GetTopPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[1], zD.normal.y = wD[7] - wD[5], zD.normal.z = wD[11] - wD[9], zD.d = wD[15] - wD[13], zD.normalize()
      }
      static GetBottomPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[1], zD.normal.y = wD[7] + wD[5], zD.normal.z = wD[11] + wD[9], zD.d = wD[15] + wD[13], zD.normalize()
      }
      static GetPlanesToRef(DD, zD) {
        sD.GetNearPlaneToRef(DD, zD[0]), sD.GetFarPlaneToRef(DD, zD[1]), sD.GetLeftPlaneToRef(DD, zD[2]), sD.GetRightPlaneToRef(DD, zD[3]), sD.GetTopPlaneToRef(DD, zD[4]), sD.GetBottomPlaneToRef(DD, zD[5])
      }
      static IsPointInFrustum(DD, zD) {
        for (let wD = 0; wD < 6; wD++)
          if (zD[wD].dotCoordinate(DD) < 0) return !1;
        return !0
      }
    }
  },
  37754: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(37079);
    class sD {
      constructor(DD, zD, wD, sD) {
        this.normal = new pD.s(DD, zD, wD), this.d = sD
      }
      QpD() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new sD(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let DD = this.normal.getHashCode();
        return DD = 397 * DD ^ this.d, DD
      }
      normalize() {
        const DD = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zD = 0;
        return 0 !== DD && (zD = 1 / DD), this.normal.x *= zD, this.normal.y *= zD, this.normal.z *= zD, this.d *= zD, this
      }
      transform(DD) {
        const zD = sD._TmpMatrix;
        DD.invertToRef(zD);
        const wD = zD.m,
          pD = this.normal.x,
          KD = this.normal.y,
          rD = this.normal.z,
          LD = this.d,
          cD = pD * wD[0] + KD * wD[1] + rD * wD[2] + LD * wD[3],
          gD = pD * wD[4] + KD * wD[5] + rD * wD[6] + LD * wD[7],
          RD = pD * wD[8] + KD * wD[9] + rD * wD[10] + LD * wD[11],
          AD = pD * wD[12] + KD * wD[13] + rD * wD[14] + LD * wD[15];
        return new sD(cD, gD, RD, AD)
      }
      dotCoordinate(DD) {
        return this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z + this.d
      }
      copyFromPoints(DD, zD, wD) {
        const pD = zD.x - DD.x,
          sD = zD.y - DD.y,
          KD = zD.z - DD.z,
          rD = wD.x - DD.x,
          LD = wD.y - DD.y,
          cD = wD.z - DD.z,
          gD = sD * cD - KD * LD,
          RD = KD * rD - pD * cD,
          AD = pD * LD - sD * rD,
          UD = Math.sqrt(gD * gD + RD * RD + AD * AD);
        let fD;
        return fD = 0 !== UD ? 1 / UD : 0, this.normal.x = gD * fD, this.normal.y = RD * fD, this.normal.z = AD * fD, this.d = -(this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z), this
      }
      isFrontFacingTo(DD, zD) {
        return pD.s.Dot(this.normal, DD) <= zD
      }
      signedDistanceTo(DD) {
        return pD.s.Dot(DD, this.normal) + this.d
      }
      static FromArray(DD) {
        return new sD(DD[0], DD[1], DD[2], DD[3])
      }
      static FromPoints(DD, zD, wD) {
        const pD = new sD(0, 0, 0, 0);
        return pD.copyFromPoints(DD, zD, wD), pD
      }
      static FromPositionAndNormal(DD, zD) {
        const wD = new sD(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(DD, zD, wD)
      }
      static FromPositionAndNormalToRef(DD, zD, wD) {
        return wD.normal.pC(zD), wD.normal.normalize(), wD.d = -DD.dot(wD.normal), wD
      }
      static SignedDistanceToPlaneFromPositionAndNormal(DD, zD, wD) {
        const sD = -(zD.x * DD.x + zD.y * DD.y + zD.z * DD.z);
        return pD.s.Dot(wD, zD) + sD
      }
    }
    sD._TmpMatrix = pD.e.Identity()
  },
  37070: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      Matrix: () => pD.e,
      Quaternion: () => pD.i,
      RegisterMathVector: () => pD.k,
      TmpVectors: () => pD.n,
      Vector2: () => pD.r,
      WI: () => pD.s,
      Vector4: () => pD.t
    });
    var pD = wD(37079);
    (0, pD.k)()
  },
  38074: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      constructor(DD, zD, wD, pD) {
        this.x = DD, this.y = zD, this.width = wD, this.height = pD
      }
      toGlobal(DD, zD) {
        return new pD(this.x * DD, this.y * zD, this.width * DD, this.height * zD)
      }
      toGlobalToRef(DD, zD, wD) {
        return wD.x = this.x * DD, wD.y = this.y * zD, wD.width = this.width * DD, wD.height = this.height * zD, this
      }
      clone() {
        return new pD(this.x, this.y, this.width, this.height)
      }
    }
  },
  41678: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => gD
    });
    var pD = wD(37079),
      sD = wD(37125),
      KD = wD(39916),
      rD = wD(37088),
      LD = wD(37273);
    class cD {
      constructor(DD, zD, wD, pD) {
        this.name = DD, this.worldAxisForNormal = zD, this.worldAxisForFileX = wD, this.worldAxisForFileY = pD
      }
    }
    class gD {
      static _NearestPow2Floor(DD) {
        return DD <= 1 ? 1 : 1 << Math.floor(Math.log2(DD))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(DD) {
        if (!DD.isCube) return null;
        DD.Ul()?.iI().flushFramebuffer();
        const zD = DD.getSize().width,
          wD = DD._sphericalPolynomialTargetSize,
          pD = wD > 0 ? this._NearestPow2Floor(wD) : 0,
          sD = !DD.noMipmap && !0 === DD._texture?.generateMipMaps,
          KD = pD > 0 && pD < zD && sD,
          rD = KD ? Math.max(0, Math.round(Math.log2(zD / pD))) : 0,
          LD = KD ? Math.max(1, Math.floor(zD / Math.pow(2, rD))) : zD,
          cD = DD.readPixels(0, rD, void 0, !1),
          gD = DD.readPixels(1, rD, void 0, !1);
        let RD, AD;
        DD.isRenderTarget ? (RD = DD.readPixels(3, rD, void 0, !1), AD = DD.readPixels(2, rD, void 0, !1)) : (RD = DD.readPixels(2, rD, void 0, !1), AD = DD.readPixels(3, rD, void 0, !1));
        const UD = DD.readPixels(4, rD, void 0, !1),
          fD = DD.readPixels(5, rD, void 0, !1),
          ID = DD.gammaSpace,
          BD = pD > 0 && pD < zD && !KD;
        return new Promise((DD => {
          Promise.all([gD, cD, RD, AD, UD, fD]).then((wD => {
            let [sD, KD, rD, cD, gD, RD] = wD, AD = LD;
            if (BD) {
              const DD = 4;
              sD = this._DownsampleFace(sD, zD, pD, DD), KD = this._DownsampleFace(KD, zD, pD, DD), rD = this._DownsampleFace(rD, zD, pD, DD), cD = this._DownsampleFace(cD, zD, pD, DD), gD = this._DownsampleFace(gD, zD, pD, DD), RD = this._DownsampleFace(RD, zD, pD, DD), AD = pD
            }
            const UD = {
              size: AD,
              right: KD,
              left: sD,
              up: rD,
              down: cD,
              front: gD,
              back: RD,
              format: 5,
              type: sD instanceof Float32Array ? 1 : 0,
              gammaSpace: ID
            };
            DD(this.ConvertCubeMapToSphericalPolynomial(UD))
          }))
        }))
      }
      static _AreaElement(DD, zD) {
        return Math.atan2(DD * zD, Math.sqrt(DD * DD + zD * zD + 1))
      }
      static _DownsampleFace(DD, zD, wD, pD) {
        const sD = DD instanceof Float32Array ? DD : Float32Array.from(DD),
          KD = wD * wD * pD,
          rD = new Float32Array(KD),
          LD = zD / wD,
          cD = 1 / (LD * LD);
        for (let RD = 0; RD < wD; RD++) {
          const DD = Math.floor(RD * LD),
            KD = Math.floor((RD + 1) * LD);
          for (let gD = 0; gD < wD; gD++) {
            const AD = Math.floor(gD * LD),
              UD = Math.floor((gD + 1) * LD),
              fD = (RD * wD + gD) * pD;
            for (let wD = 0; wD < pD; wD++) {
              let LD = 0;
              for (let rD = DD; rD < KD; rD++)
                for (let DD = AD; DD < UD; DD++) LD += sD[(rD * zD + DD) * pD + wD];
              rD[fD + wD] = LD * cD
            }
          }
        }
        if (DD instanceof Float32Array) return rD;
        const gD = new(0, DD.constructor)(KD);
        for (let RD = 0; RD < KD; RD++) gD[RD] = rD[RD] + .5 | 0;
        return gD
      }
      static ConvertCubeMapToSphericalPolynomial(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wD = zD > 0 ? this._NearestPow2Floor(zD) : 0;
        if (wD > 0 && DD.size > wD) {
          const zD = 5 === DD.format ? 4 : 3,
            pD = ["right", "left", "up", "down", "front", "back"],
            sD = {};
          for (const KD of pD) sD[KD] = this._DownsampleFace(DD[KD], DD.size, wD, zD);
          DD = {
            ...DD,
            ...sD,
            size: wD
          }
        }
        const pD = new KD.c;
        let cD = 0;
        const gD = 2 / DD.size,
          RD = gD,
          AD = .5 * gD,
          UD = AD - 1;
        for (let KD = 0; KD < 6; KD++) {
          const zD = this._FileFaces[KD],
            wD = DD[zD.name];
          let fD = UD;
          const ID = 5 === DD.format ? 4 : 3;
          for (let KD = 0; KD < DD.size; KD++) {
            let BD = UD;
            for (let RD = 0; RD < DD.size; RD++) {
              const UD = zD.worldAxisForFileX.scale(BD).add(zD.worldAxisForFileY.scale(fD)).add(zD.worldAxisForNormal);
              UD.normalize();
              const GD = this._AreaElement(BD - AD, fD - AD) - this._AreaElement(BD - AD, fD + AD) - this._AreaElement(BD + AD, fD - AD) + this._AreaElement(BD + AD, fD + AD);
              let hD = wD[KD * DD.size * ID + RD * ID + 0],
                nD = wD[KD * DD.size * ID + RD * ID + 1],
                MD = wD[KD * DD.size * ID + RD * ID + 2];
              isNaN(hD) && (hD = 0), isNaN(nD) && (nD = 0), isNaN(MD) && (MD = 0), 0 === DD.type && (hD /= 255, nD /= 255, MD /= 255), DD.gammaSpace && (hD = Math.pow((0, sD.Clamp)(hD), rD.g), nD = Math.pow((0, sD.Clamp)(nD), rD.g), MD = Math.pow((0, sD.Clamp)(MD), rD.g));
              const OD = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const DD = Math.max(hD, nD, MD);
                if (DD > OD) {
                  const zD = OD / DD;
                  hD *= zD, nD *= zD, MD *= zD
                }
              } else hD = (0, sD.Clamp)(hD, 0, OD), nD = (0, sD.Clamp)(nD, 0, OD), MD = (0, sD.Clamp)(MD, 0, OD);
              const JD = new LD.d(hD, nD, MD);
              pD.addLight(UD, JD, GD), cD += GD, BD += gD
            }
            fD += RD
          }
        }
        const fD = 6 * (4 * Math.PI) / 6 / cD;
        return pD.scaleInPlace(fD), pD.convertIncidentRadianceToIrradiance(), pD.convertIrradianceToLambertianRadiance(), KD.e.FromHarmonics(pD)
      }
    }
    gD._FileFaces = [new cD("right", new pD.s(1, 0, 0), new pD.s(0, 0, -1), new pD.s(0, -1, 0)), new cD("left", new pD.s(-1, 0, 0), new pD.s(0, 0, 1), new pD.s(0, -1, 0)), new cD("up", new pD.s(0, 1, 0), new pD.s(1, 0, 0), new pD.s(0, 0, 1)), new cD("down", new pD.s(0, -1, 0), new pD.s(1, 0, 0), new pD.s(0, 0, -1)), new cD("front", new pD.s(0, 0, 1), new pD.s(1, 0, 0), new pD.s(0, -1, 0)), new cD("back", new pD.s(0, 0, -1), new pD.s(-1, 0, 0), new pD.s(0, -1, 0))], gD.MAX_HDRI_VALUE = 4096, gD.PRESERVE_CLAMPED_COLORS = !1
  },
  41439: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.h,
      c: () => pD.r
    });
    var pD = wD(39960);
    (0, pD.y)()
  },
  37891: (DD, zD, wD) => {
    function pD() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
        const zD = 16 * Math.random() | 0;
        return ("x" === DD ? zD : 3 & zD | 8).toString(16)
      }))
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  41713: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD
    });
    var pD = wD(41709),
      sD = wD(41722);
    class KD {
      static ExpandRGBDTexture(DD) {
        const zD = DD._texture;
        if (!zD || !DD.isRGBD) return;
        const sD = zD.iI(),
          KD = sD.getCaps(),
          rD = zD.isReady;
        let LD = !1;
        KD.textureHalfFloatRender && KD.textureHalfFloatLinearFiltering ? (LD = !0, zD.type = 2) : KD.textureFloatRender && KD.textureFloatLinearFiltering && (LD = !0, zD.type = 1), LD && (zD.isReady = !1, zD._isRGBD = !1, zD.invertY = !1);
        const cD = async () => {
          const KD = sD.isWebGPU,
            rD = KD ? 1 : 0;
          zD.isReady = !1, KD ? await wD.e(342).then((() => wD(61148))) : await wD.e(324).then((() => wD(61150)));
          const LD = new pD.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, sD, !1, void 0, zD.type, void 0, null, !1, void 0, rD);
          LD.externalTextureSamplerBinding = !0;
          const cD = sD.createRenderTargetTexture(zD.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: zD.samplingMode,
            type: zD.type,
            format: 5
          });
          LD.onEffectCreatedObservable.addOnce((wD => {
            wD.executeWhenCompiled((() => {
              LD.onApply = DD => {
                DD._bindTexture("textureSampler", zD), DD.setFloat2("scale", 1, 1)
              }, DD.Ul()?.postProcessManager.directRender([LD], cD, !0), sD.restoreDefaultFramebuffer(), sD._releaseTexture(zD), LD && LD.dispose(), cD._swapAndDie(zD), zD.isReady = !0
            }))
          }))
        };
        LD && (rD ? cD() : DD.onLoadObservable.addOnce(cD))
      }
      static async EncodeTextureToRGBD(DD, zD) {
        let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return zD.iI().isWebGPU ? await wD.e(343).then((() => wD(61169))) : await wD.e(325).then((() => wD(61162))), await (0, sD.d)("rgbdEncode", DD, zD, pD, 1, 5)
      }
    }
  },
  61016: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      AsyncLoop: () => pD.c,
      RegisterTools: () => pD.g,
      Tools: () => pD.h,
      className: () => pD.j
    });
    var pD = wD(40027);
    (0, pD.g)()
  },
  41766: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD
    });
    class pD {
      constructor(DD) {
        this._pendingActions = new Array, this._workerInfos = DD.map((DD => ({
          workerPromise: Promise.resolve(DD),
          idle: !0
        })))
      }
      dispose() {
        for (const DD of this._workerInfos) DD.workerPromise.then((DD => {
          DD.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(DD) {
        this._executeOnIdleWorker(DD) || this._pendingActions.push(DD)
      }
      _executeOnIdleWorker(DD) {
        for (const zD of this._workerInfos)
          if (zD.idle) return this._execute(zD, DD), !0;
        return !1
      }
      _execute(DD, zD) {
        DD.idle = !1, DD.workerPromise.then((wD => {
          zD(wD, (() => {
            const zD = this._pendingActions.shift();
            zD ? this._execute(DD, zD) : DD.idle = !0
          }))
        }))
      }
    }
    class sD extends pD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sD.DefaultOptions;
        super([]), this._maxWorkers = DD, this._createWorkerAsync = zD, this._options = wD
      }
      push(DD) {
        if (!this._executeOnIdleWorker(DD))
          if (this._workerInfos.length < this._maxWorkers) {
            const zD = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(zD), this._execute(zD, DD)
          } else this._pendingActions.push(DD)
      }
      _execute(DD, zD) {
        DD.timeoutId && (clearTimeout(DD.timeoutId), delete DD.timeoutId), super._execute(DD, ((wD, pD) => {
          zD(wD, (() => {
            pD(), DD.idle && (DD.timeoutId = setTimeout((() => {
              DD.workerPromise.then((DD => {
                DD.terminate()
              }));
              const zD = this._workerInfos.indexOf(DD); - 1 !== zD && this._workerInfos.splice(zD, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    sD.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61046: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      AbstractThreeMfSerializer: () => FL,
      BVHExporter: () => Tr,
      ContentTypeFileName: () => hL,
      DefaultXmlSerializerFormatOptions: () => ar,
      DefaultXmlSerializerNumberOptions: () => or,
      EXT_lights_area: () => ns,
      EXT_mesh_gpu_instancing: () => Zp,
      EXT_texture_avif: () => cr,
      EXT_texture_webp: () => sr,
      GLTF2Export: () => lp,
      GLTFData: () => gD,
      GetXmlFieldMeta: () => Zr,
      GetXmlName: () => yr,
      IsQualifiedName: () => br,
      KHR_draco_mesh_compression: () => qp,
      KHR_interactivity: () => As,
      KHR_lights_punctual: () => Ls,
      KHR_materials_anisotropy: () => Qs,
      KHR_materials_clearcoat: () => xs,
      KHR_materials_coat: () => ls,
      KHR_materials_diffuse_roughness: () => yK,
      KHR_materials_diffuse_transmission: () => ms,
      KHR_materials_dispersion: () => us,
      KHR_materials_emissive_strength: () => Ys,
      KHR_materials_fuzz: () => IK,
      KHR_materials_ior: () => zK,
      KHR_materials_iridescence: () => KK,
      KHR_materials_openpbr: () => oK,
      KHR_materials_sheen: () => gK,
      KHR_materials_specular: () => nK,
      KHR_materials_transmission: () => EK,
      KHR_materials_unlit: () => CK,
      KHR_materials_volume: () => jK,
      KHR_materials_volume_scatter: () => lK,
      KHR_texture_basisu: () => Dr,
      KHR_texture_transform: () => tK,
      Known3mfRelationshipTypes: () => nL,
      KnownI3mfContentType: () => UL,
      Matrix3d: () => XL,
      MatrixFormatter: () => VL,
      ModelFileName: () => BL,
      NumberFormatter: () => tr,
      OBJExport: () => rD,
      Object3dDirName: () => IL,
      OpenXmlContentTypesNamespace: () => RL,
      OpenXmlRelationshipsNamespace: () => AL,
      RegisterEXT_lights_area: () => Os,
      RegisterEXT_mesh_gpu_instancing: () => kp,
      RegisterEXT_texture_avif: () => Rr,
      RegisterEXT_texture_webp: () => rr,
      RegisterKHR_draco_mesh_compression: () => zs,
      RegisterKHR_interactivity: () => fs,
      RegisterKHR_lights_punctual: () => gs,
      RegisterKHR_materials_anisotropy: () => Vs,
      RegisterKHR_materials_clearcoat: () => bs,
      RegisterKHR_materials_coat: () => Ns,
      RegisterKHR_materials_diffuse_roughness: () => mK,
      RegisterKHR_materials_diffuse_transmission: () => os,
      RegisterKHR_materials_dispersion: () => ts,
      RegisterKHR_materials_emissive_strength: () => qs,
      RegisterKHR_materials_fuzz: () => GK,
      RegisterKHR_materials_ior: () => pK,
      RegisterKHR_materials_iridescence: () => LK,
      RegisterKHR_materials_openpbr: () => uK,
      RegisterKHR_materials_sheen: () => AK,
      RegisterKHR_materials_specular: () => OK,
      RegisterKHR_materials_transmission: () => XK,
      RegisterKHR_materials_unlit: () => TK,
      RegisterKHR_materials_volume: () => SK,
      RegisterKHR_materials_volume_scatter: () => NK,
      RegisterKHR_texture_basisu: () => wr,
      RegisterKHR_texture_transform: () => YK,
      RelationshipDirName: () => fL,
      RelationshipFileName: () => GL,
      ResolveFormatOptions: () => vr,
      ResolveNumberOptions: () => ur,
      STLExport: () => Ar,
      ST_ObjectType: () => gL,
      ST_Unit: () => cL,
      StringXmlWriter: () => sL,
      ThreeDimModelNamespace: () => rL,
      ThreeMf: () => YL,
      ThreeMfBase: () => yL,
      ThreeMfBaseMaterials: () => ZL,
      ThreeMfBuild: () => kL,
      ThreeMfComponent: () => NL,
      ThreeMfComponents: () => WL,
      ThreeMfComponentsBuilder: () => oL,
      ThreeMfContentType: () => OL,
      ThreeMfContentTypes: () => ML,
      ThreeMfDocument: () => QL,
      ThreeMfDocumentBuilder: () => tL,
      ThreeMfItem: () => mL,
      ThreeMfMaterialBuilder: () => uL,
      ThreeMfMesh: () => jL,
      ThreeMfMeshBuilder: () => aL,
      ThreeMfMeta: () => CL,
      ThreeMfMetadataGroup: () => xL,
      ThreeMfModel: () => PL,
      ThreeMfModelBuilder: () => vL,
      ThreeMfObject: () => bL,
      ThreeMfObjectBuilder: () => eL,
      ThreeMfRelationship: () => EL,
      ThreeMfRelationships: () => JL,
      ThreeMfResources: () => TL,
      ThreeMfSerializer: () => Dc,
      ThreeMfSerializerGlobalConfiguration: () => HL,
      ThreeMfTriangle: () => lL,
      ThreeMfTriangles: () => iL,
      ThreeMfVertex: () => SL,
      ThreeMfVertices: () => dL,
      ToQualifiedString: () => er,
      TokenType: () => wL,
      TriangleSetsNamespace: () => LL,
      USDZExportAsync: () => Cr,
      Utf8XmlWriterToBytes: () => KL,
      XmlAttr: () => Wr,
      XmlBuilder: () => pL,
      XmlElem: () => Nr,
      XmlIgnore: () => lr,
      XmlName: () => ir,
      XmlNameToParts: () => mr,
      XmlSerializer: () => DL,
      _ConvertToGLTFPBRMetallicRoughness: () => Pw,
      _SolveMetallic: () => Vw,
      __IGLTFExporterExtension: () => LD
    });
    var pD = wD(37070),
      sD = wD(61016),
      KD = wD(40220);
    class rD {
      static OBJ(DD, zD, wD, rD) {
        const LD = [];
        let cD = 1,
          gD = 1;
        zD && (wD || (wD = "mat"), LD.push("mtllib " + wD + ".mtl"));
        for (let RD = 0; RD < DD.length; RD++) {
          const wD = DD[RD],
            AD = wD.name || `mesh${RD}}`;
          LD.push(`o ${AD}`);
          let UD = null;
          if (rD) {
            const DD = wD.computeWorldMatrix(!0);
            UD = new pD.Matrix, DD.invertToRef(UD), wD.bakeTransformIntoVertices(DD)
          }
          if (zD) {
            const DD = wD.material;
            DD && LD.push("usemtl " + DD.id)
          }
          const fD = wD.geometry;
          if (!fD) {
            sD.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const ID = fD.getVerticesData("position"),
            BD = fD.getVerticesData("normal"),
            GD = fD.getVerticesData("uv"),
            hD = fD.XpD();
          let nD = 0,
            MD = 0;
          if (!ID || !hD) {
            sD.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const OD = DD[0].Ul().useRightHandedSystem ? 1 : -1;
          for (let DD = 0; DD < ID.length; DD += 3) LD.push("v " + ID[DD] * OD + " " + ID[DD + 1] + " " + ID[DD + 2]), nD++;
          if (null != BD)
            for (let DD = 0; DD < BD.length; DD += 3) LD.push("vn " + BD[DD] * OD + " " + BD[DD + 1] + " " + BD[DD + 2]);
          if (null != GD)
            for (let DD = 0; DD < GD.length; DD += 2) LD.push("vt " + GD[DD] + " " + GD[DD + 1]), MD++;
          const JD = ["", "", ""],
            ED = (wD.material || wD.Ul().defaultMaterial)._getEffectiveOrientation(wD),
            [QD, XD] = ED === KD.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let DD = 0; DD < hD.length; DD += 3) {
            const zD = [String(hD[DD] + cD), String(hD[DD + QD] + cD), String(hD[DD + XD] + cD)],
              wD = [String(hD[DD] + gD), String(hD[DD + QD] + gD), String(hD[DD + XD] + gD)],
              pD = zD,
              sD = null != GD ? wD : JD,
              KD = null != BD ? zD : JD;
            LD.push("f " + pD[0] + "/" + sD[0] + "/" + KD[0] + " " + pD[1] + "/" + sD[1] + "/" + KD[1] + " " + pD[2] + "/" + sD[2] + "/" + KD[2])
          }
          rD && UD && wD.bakeTransformIntoVertices(UD), cD += nD, gD += MD
        }
        return LD.join("\n")
      }
      static MTL(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const wD = [],
          pD = DD.material;
        wD.push("newmtl " + zD), wD.push("  Ns " + pD.specularPower.toFixed(4)), wD.push("  Ni 1.5000"), wD.push("  d " + pD.alpha.toFixed(4)), wD.push("  Tr 0.0000"), wD.push("  Tf 1.0000 1.0000 1.0000"), wD.push("  illum 2"), wD.push("  Ka " + pD.ambientColor.r.toFixed(4) + " " + pD.ambientColor.g.toFixed(4) + " " + pD.ambientColor.b.toFixed(4)), wD.push("  Kd " + pD.diffuseColor.r.toFixed(4) + " " + pD.diffuseColor.g.toFixed(4) + " " + pD.diffuseColor.b.toFixed(4)), wD.push("  Ks " + pD.specularColor.r.toFixed(4) + " " + pD.specularColor.g.toFixed(4) + " " + pD.specularColor.b.toFixed(4)), wD.push("  Ke " + pD.emissiveColor.r.toFixed(4) + " " + pD.emissiveColor.g.toFixed(4) + " " + pD.emissiveColor.b.toFixed(4));
        pD.ambientTexture && wD.push("  map_Ka " + pD.ambientTexture.name), pD.diffuseTexture && wD.push("  map_Kd " + pD.diffuseTexture.name), pD.specularTexture && wD.push("  map_Ks " + pD.specularTexture.name), pD.bumpTexture && wD.push("  map_bump -imfchan z " + pD.bumpTexture.name), pD.opacityTexture && wD.push("  map_d " + pD.opacityTexture.name);
        return wD.join("\n")
      }
    }
    var LD = 0,
      cD = wD(41439);
    class gD {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const DD in this.files) {
          const zD = this.files[DD],
            wD = new Blob([zD], {
              type: (0, cD.b)(DD)
            });
          sD.Tools.Download(wD, DD)
        }
      }
    }
    var RD = wD(41066),
      AD = wD(41027),
      UD = wD(41522),
      fD = wD(41035),
      ID = wD(39744),
      BD = wD(37110),
      GD = wD(37267),
      hD = wD(37125);
    const nD = hD.HighestCommonFactor,
      MD = {
        ...hD,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: nD
      };
    var OD = wD(41722),
      JD = wD(41049),
      ED = wD(41485),
      QD = wD(41491),
      XD = wD(41742);
    (0, XD.RegisterDumpTools)();
    var VD = wD(39921),
      PD = wD(39927),
      CD = wD(38662),
      xD = wD(40043),
      TD = wD(40400),
      bD = wD(41713);
    let jD = 0;
    const dD = (DD, zD, wD, pD) => {
        if (!DD[wD]) {
          const sD = DD.useDelayedTextureLoading;
          DD.useDelayedTextureLoading = !1;
          const KD = DD._blockEntityCollection;
          DD._blockEntityCollection = !1;
          const rD = TD.d.CreateFromBase64String(zD, pD + jD++, DD, !0, !1, TD.d.BILINEAR_SAMPLINGMODE);
          DD._blockEntityCollection = KD;
          const LD = DD.iI().getLoadedTexturesCache(),
            cD = LD.indexOf(rD.getInternalTexture()); - 1 !== cD && LD.splice(cD, 1), rD.isRGBD = !0, rD.wrapU = TD.d.CLAMP_ADDRESSMODE, rD.wrapV = TD.d.CLAMP_ADDRESSMODE, DD[wD] = rD, DD.useDelayedTextureLoading = sD, bD.b.ExpandRGBDTexture(rD);
          const gD = DD.iI().SI.add((() => {
            rD.isRGBD = !0;
            const zD = DD.onBeforeRenderObservable.add((() => {
              rD.isReady() && (DD.onBeforeRenderObservable.remove(zD), bD.b.ExpandRGBDTexture(rD))
            }))
          }));
          DD.Bl.add((() => {
            DD.iI().SI.remove(gD)
          }))
        }
        return DD[wD]
      },
      SD = DD => dD(DD, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      iD = DD => dD(DD, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      lD = DD => dD(DD, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAABGSklEQVR42u3cx4tb6brvcf0DmmpUoxrUoAY1KCgwFAZjME1jjGmMTWNs2tjY2MY2DjjinHPOOeec3dXOOeecU2VlaSksSc/9aq1X0pJKqmD3Dn3upvnCSe197v38nlfS2fscW1x+kbCMloAsFY/skEY5KbVySb7JXfkoT+WtvJGX8ol/67s8lDr+o065KW65Jl7+q/zyF3/nWTpJx+gQ/7H94pPd/Oe38yduEZds4E9dK/Wykj95GX/OYvkq8/kz58h7mcmfP41/hMnyTCbIIxkn9/nv5raMlOsyTK7IELkgg6RKBshp6ScnpI8ckd5yQHrJHvmd/3578I/QjX+E32SNdOEfobMskV9lAf+vmiOdZIZ0lKnSQSZKe/7kSv7kdjKchkoFf2q59Ke+UsafWCY9pZQ/rZQ/rUS6Umcp5k8q5k8p5k8p4k8p4k8o4u928Hc7+Dsd/F1mpWLn7zArVhWpHOlsRvYC/Yf++t8A/j8fQCxrADvTA/j6vwH8/zGAaOzX/w3g/+cBaJEuEkqMMQbg/t8A2jiA8n/+AHzB7qLFx8K2zBhAA5Q16QE8+98A/q8PwOXvLYHYePEllsO666cGcPR/A/jnDaDRN0C80Ynija8QV2K3GsBlywDe5h3AVYAvAv0X4IUH4P7fAP7bB9DgGyau0BRx6yvFGd8j9YlTUp24LF+g/gDKGwbwAqwnwD1o5QD2/VcPYMT/BmD9q94/Thq0GeKMrpbG2B6pi5+S78kBJAoNoDFrAFU/PICP/+UD6PL/xwDqAlOlNjBH6sMQ6XulJnZavsWvyGcG8D7BABJvsgZwxxiAK2sAZ9ID8P/gAF78QwbQ/v/eAGqDc6Tav1BqtA1SE90v1fpp+Rq7Ip/id+UdA3jNAJ4nPsnjRGYAN0C9whe8C+kB+BmAP2sAu/jPNx1AjRrAlzwDeNqKARz/3wD+7r+qtSXy1QdLcJN8Dx+Qb9Ez8kW/Ih9id+Vt/Jm8sgzgfqL5ARwxBuBjAN70ADbznSE5gDWMJzWARekBvGsygLFy738D+Hf+9T20Sj77VsuXwFb5oh2SL5Gz8lG/Ku8ZwJvYM3kZfyPP4h/lUeIbA6iV24lGuZ5IDcALjQ8aP4+zOYCD/Pt70wNwqQE0WAbwLWcAr/MM4FbOAP78Bw+g6L97AN/CG+Sjb6N89O+Qj9oR+Rg+J++jV+Wtfk9eMYAXsTfyhAE8jH+TuwzgVqLBGMDlhFvOJ7zyZyI5AB8D8EHjyxrAtjYN4EnWAEYYA7j8XzCAXwoMoOJvHsB/aARfwtvkvS/ZHnkfOCbvtCp5G74mb6L35KX+TJ4xgMexj/IgOYB4rdyMN8i1hFMuGQPwyDlGcJoRHE+YAzgA/l7jn1VwqwE0WgZQLUuNAXxmAB+MAcyQVxClBvCQAdxtxQD25x1A1x8ewB9tGEAljO3+7wzgU2SPvPPvlje+A/LGf0LeBP+S16Fr8jJyT55Hn8kT/Y080j/K/dhXuROvYQD1cjWeHIBL/lIDOEXH6TAdoD0JcwBbGcAmBrCeL4Br+AWQO4DZ/MQ0B/C8mQGczxnA4YIDaM0LUNmqAfz2LxmA/b9xAB8iB+VN4IC88h2Rl/5T8jJwXl5o1+V56L48jTyTx9HX8kD/IHf1r3IrViPXY/VyJd4oF+IuqYq75SzYJ0E/ZgzAI/tpD6/DDgaylZdiE9efHMBqYwDfGcBXBvBJ5uUMYJIxgAeWAVyzDODcv2gAA35oAEV5BpAZwT9sAO+iR+VV4Ii88B2X576z8tx/QZ4Fb8gT7b48Dj+Vh5HXcj/6Qe7oX+SmXi3XYnVyOdbAAJwMwCVnGMHJuEeOAn/IGICbAbiMAWzhC+NGvjOs49fD6kSNrFADWGgM4L0awEs1gMeWAdxUA7jUxgGs+Le8AP+nBvAmelJeBE/IM99peeqrkif+S/I4cFMeMYAHoadyP/xK7kTey63oF7muf5creq1c4hU4H2uUczGXnGYEJxjBETpE+4DfbQzAqQZQzwBqZVWiWlbwS2JJ4ossTHxUA3ijBvDMGMB4YwB3ZFTeAZz6FwzA+gL0+jcN4L/sl8BL/Yw8004Df04e+87LI98Veei/JQ+CD+Se9lTuhF7JrfB7uRH5JNei3+SyXiMX9Hqp0hvkbMwppxjBcTrCEA7SXtrF67Ad/C1c/wauf60awHJjAJ8ZwAeZm3gnsxJvZHrihUxNpAZwvxUDOKQGsJsBbP+bB/A7df/JAfzD/mcBz3WuXvtTHvmr5IHvotz3XZN7DOBu4IHcCT6VW9oruRF6J9fCn+RK5KtcjFbL+Wid/MkITuuNcpIRHKPDjGA/8HtoJ98RtvFrYTNfGDeAv5bnf2XiOwP4KosTn2SBMYC3DOCVMYApiacyKfFIxifuy5hEcgA3YLrKAC7KYPlLBjKA/nKSARzLM4DNagCr/4UD6PRvGsB/YARPda5eOy8PAhfknu+y3PVdlzu+O3LL/0BuBp7Kde2lXNPeyZXQR7kU/irnI9+lKlojZxnBKV6B44zgCB3iI2E/7aEd4G8Ff1O8Tjbw03FNvFpW8jNyGc//Yp7/BYn3lgE8ZwBPZKIxgHsM4LaMSlyXEYkrMjTBABJVDOCsMYC+lgH0VAPo/hMDqGhxAJ1bOYCyf+4AHuuX+Ky/yMVfAv6q3PLdlJsM4Ib/oVxnANeCL+WK9lYuaR/kQuiLVIW/yblItZyO1spJRnCMl+AwQzhAe2kXXxB38B1hC18WN4K/HvzV8e8M4KssjX+WRfGPMp/nfw7P/8zES5mWHsADGZe4ywBuGQMYbgzggjmAxBnpn2AAiaPSJ5EcwD4GsAuubWoA6/83gB/964F+Re6Grsjt4FW56b8uN3y35LrvrlzzPZQr/qdyOfBSLgbfyHntvVRpn+Rc6KucCX+Xk5EaOR6plSOM4FC0XvYzhD20U6+TbeBvidXKBn42rot9l1Vc/4r4FwbwiQF8kHnxtzI7/lpmxl8wgGcyOfE4awAjE9cYwGXLAE4zgBMM4AgDOCi9E3ulZ4IBJBhAYpN0S6QGsByyxX/bAEqyBtDxJwbwX/xL4J5+TW6Hr8nN4HW57r8B/G254rsnl32P5BIDuOB/IecDb6Qq+F7OaR/ljPZFToW+yXFGcJQRHGYEB3gN9tJufiHsoK18UdzET8YN4K+JfZOVsa+yPPZJlsQ+yML4OwbwhgG8khnx5zI1/lQmxx/JhPh9BnBHRiduqgFcYgDnGcCfWQP4Iz2AndkDSKySLgkGkGAAifnyS2K2GsCUv2UAxQUH8A//HwbdiV2Xm2HwtRtyNXAL/DtyyXdfLjCA876n8hcDqAq8lnOBd3Im+EFO8QqcYATHGMFhRnAwXC37GcIe2sl3g+18SdwC/kZ+Mq7Xv8lq/SsD+CzLYh9lcey9LIi9lbmx1zIr/lKmx58xgCcyKf6QAdyTsfHbMjp+Q0bGrxoDGMIABiXOqQEcVwM4wAD2qAFsVQNYl38ACQaQYAAJBpBgAIm2DKDrDwzg7/gp+G8ewc3YTbkevilXtZs897flov8u+PfBfyRVDOCc74Wc9b+S04G3cpJX4ETwoxzTPssR7ascYgT7+U6whyHs4svhDtoa/S6b+Lm4Afi1+hdZpX+WFfpHWap/kEWxdzI/9kbmxF7JzNgLmR57KlPijxnAAxkfv8sAbjEAvgDGr8iw+EUZEv9LBsX5CZjgJ6AxgMMMgF8AxgB2SA9jABuNAXRt7QASDCDBABIMIMEAEgwgwQAShQbQ+n9VUNP/WcA/4HvA9RhXH7nFl7xbciFwR84zgCrfA/mTAZzzPZEzvudy2v9STvrfyHFegaO8AkcYwSFGsJ+XYC/fCXbTDoawLfJNtvBTcSOtj36RNdFPshL85eAv0d/JQv2tzNNfyWzwZ8aeybTYE5kceyQTY/dlfOyOjInflFHxawzgMgO4wACqGMBZGRDnJ2D8mPSNH8oZwBY1gLUMYCUDWMYAFlkGML1tA0gwgAQDSDCARKEBFP7nA/6RA7jCAC5FbssFDfwg+P57wD8A/pGcZgAnGcAJ30s57n8tR/1v5XDgvRxiBPsZwV4+DvYwhJ38OthOW8JfZBNtiHyWtZFPsir6UVZEP8jS6DtZBP4C/bXM1V/KLP25zNCfylT9MQN4IBNid2Vc7LaMid2QUTGe/xif/3E+/+N/MoDTagD8AkgOIM4A4rulZ5wBxJMD2JBnAPPyDGAs+KPyDKBf4QEkGECCASQYQIIBJP5d/7OAf+MILvH/8Rcid+Sv0B35kwGcC9zn4h/IKQZwkgEc9z2TY3wMHPG9kkO8AgcZwX5GsJcR7GEEO/liuJ0hbAl9ks20IfxR1tHqyAdZGXkvyyPvZEn0rSyMvpZ50ZcyR+f69WcyHfwp+kOZpN+XCfodGcsQR/N9ZGTsCgO4KENjf8ngGJ//DKB//DgD4BdAnC+A8X0MgF8A8e3mAOIb5Lf4GukaTw5gqWUAsywDmNDGAXQrPIAEA0gwgAQDSDCABANIMIBEqZE9UaIqVhVZcqSzJf5LBnCep7cqeoefd3flrHaPz/r7PPcPuPpH4D+RowzgMK/AIV6BA3wX2M8I9vJ9YDcfBzv5TrCdIWzVPshm2hj6IOtpTei9rAy/kxW0NPJWFkVeywLw50ZfyOzoM5kRfSLT9EcyWX8gE/W7Ml6/LWP1GzKaXyQjYjz/sQsMoIoBnJWBsZPSP8bnf+wwA+ALYHwvA+ALYHwbA9icPYA4A4gvlF/jc+WXeGoAk/+GAfzSigGUtXEAagS5/bsHUMUAzkXv8tv+Lt/w78lJBnCcARxlAEd8j4F/KgcZwH5egX2MYA8j2M0IdjCC7bQ1+E4200btnayntbQq9FZW0rLwG1kSfiULIy9lXuSFzIk8k1ngT48+lqnRBzI5es+4/nH6TRmjX5dR+hUZoV+SYfp5GRLj+Y/x/BsD4PM/xvMf2y+9Y3z+x3YwgK0MgF8AcX4CxlczgBUMYEn2AOLTpGOcAcStAxje4gBK/5MDSGfL9K/86xwDOM0ATjGAEwzgePC+HAk8kMP+R+A/lgO8Avt5BfYygj2MYBcj2MEItvOdYEvgjWymjcE3sp7Wam9kNa2k5aFXsoQWhV/K/PBzmRt+JrMjT2RG5LFMizyUKdH7Mol/3PHRWzI2al7/SP2yDNe5fr1KhujnZJDOAHSe/9gRywB2mwOI8fzH+AIY4ydgfBUDWK4GsEANYGb2AOIMIM4A4gwgzgDihb4E9rAMoMvfMIDiHxxAzghy+7v+Os0ATgJxnAEcYwBHGMAhBnDQ/xD4R1z9Y+CfyG5GsJMR7GAE22gLvww2M4SNgVeyntYGX8lqWqm9kuXaS1lKi7UXsiD0XOaFnsmc8BOZGX4s08MPZWrkvkyO3JWJfPkcF+X6o9dkVJTrj15kAOcZwJ8yWD8jA/WT5gB0nn/9gPyh8/zHdjGA7WoAfAGMrZXfYiula4wBxBYbA/glPqd1A4gzgDgDiDOAOAOIM4A4A4gzgDgDiDOAeGoAnZoZQL7vAcXNvgI/PYC21NxfJ+N35Difw0cZwJHQPb7h35cDDGA/HwN7eQX2MIBdDGAHbWcEW2kLQ9jECDb4X8h6Wht4IatpZfCFLKelwefgP5eF2jOZrz2VOaHHMiv0SGaEHsi08H2Zwj/WJPAnRG7KuMh1GRO5ygAuMYALMizK9UfN6x+on5D++lHpqx9iAFy/vkd66Tulp87nf2yzGsAaYwBdYvwCiPEFMMZPwNgc6RSbwQCmMoBJDGA8AxhjGcCQtg0gzgDiDCDOAOK5A/iZL4L/xhEU6hgDOMIADnORB/kiuF+7L/sYwR5GsJtXYCevwA5GsI22MILNfCfYxAg20Hpa638uq2ll4LksDzyTpbQ4+EwWBp+A/0Tmao9ltvZIZoI/PQQ+/xiTwuCHwQ9fl7Hgj45clpGRCzI8wvVHuf7oGRkU5fqjxxkAz79+kOvfxwB2MwCef53Pf32TdNfXSzedz39jAEvVAPgFEJttDKBjjAHEGECMAcSSAxj59wwgzgDiDCBeYfZPHsARBnCIL2IHGcB+cPbyMbCHAeziy+AOXoHtvgdc/SPwH4H/WDbSBoawjtbQKlrpfyLLaWngiSymhYHHMj/4WOYGH4H/QGYyqun8uVO1uzI5dFsmhm7K+BD44WsyOnxFRoUvygjwh0W4/shZGRzh+qMnGMBR6Rfl+qP7jee/t87zr/P861sYAJ//Op//Op//Ol8AdT7/db4A6skB8AUwxi+AGD8BYxNpnDmA2EhpFxtGDCDGAGL9pTzGAGIMINaaAXTMGUBqBAwgXqZiAPF/0AAOxW/LAQawL3JH9jCA3SDtDN7jW/592ea/L1sZwRZGsMn3EPhHXP0jWUtrGMIqWknLaan/sSzmI2MhzQ88lLm8ILMZ0kyaEbwr07Q7MkW7JZO0mzJBuy7jQtdkTAj80CUZGT4vw8NVMjR8jgGclkERrj/C9Ue4/uhBcwBRnv/oDukZ3coAeP51nn+dz3+dz3+dz3+dz3+dL4A6XwB1BqAzAJ0B6AxAZwD6aKnUrQMY2HQAMQYQYwCx/AMoNgaQ7xXIMwCjYktFmbIG4PjPDmA/A9jH7/A9DGBX+I7sAGo7I9gWuMu3/Ht80bvP1d8H/z5X/wD8B7KaVjKIFbSMlvLvL6aFjGU+zeXvmc3fO4s/Y0bwjkwL3pYpwQz+eO2qjNWuyOgkfuiCjAhVybAQ+OEzMjh8UgaGjzOAI9Ivckj6RsCPcP2RXQyA649y/dGN0j3K8x9drQawjAEsYgDzGQBfAHW+AOp8AdT5AqjzBTA9gBHSTmcA+mCp0AeC38wAYgwgxgBi/BSMtXUApc0PIO5IZzOym/0nRrAnfkv26LdkV/S27OCzeXvojmxlBFuA2wTgBv9dvujdBf8eV3+fq78vK733ZQUt499eQotoIc3nv2Yu/7WzaZb/jswI3JZpgVsyJXBTJgevy8TgNRkfTOJfljHaRRmlga/9JcNDf8rQ0BkZEjolg0I8/eGj0j98WPqFuf7wPgawhwFw/ZFt8ntkMwPYwADWMgCe/yjPf5TP/yjPf5TnPzqb+AKo8/mvT1IDGEujmg5AZwA6A9AZgJ4aQPecAfxqDiDGAGIMIMYAYgwg1poBlLRtAAWzFe5nB7ArflN2MoAd/B7fFr4lW/iM3qzd5rf9HdkQuAP+Hb7o3eHq73L1Zsu9d2UpLaFF/PsLaL7vjsyl2b7b4N+SGTTNfxP8GzI5AH4giX9FxgUvyZhgEv+8jNSqZLj2pwzTzsoQ7bQMDnH9oWMyIMT1h7j+8H4GAH6Y6w9vZwBbGABf/iJcf4Rv/xGuP8LzH+H5j/L8R3n+ozz/0enEAKIMIDo+ZwBDCw9AZwA6A9AZgN6KAcQYQIwBxMpVDCBWavT3DqCFEfzMQHYwgO36TdnK7/EtDGBT6JZs4LN6A0/2Oq53DVe8yn8b+Ns8+be5+js8+Xdksfe2LKQFNM93C/xb4N+Smb6bMoOm+a/LFJrsvyYT/VdkQuCyjAuAH7ggo4PgB6tkRPCcgT80ia+dlEEaT792RPqD3y8Efmiv/BHazQC4/jCf/WGuP8z1h9dJtzDPf2QFA1jKAHj+Izz/EZ7/yExjAB2jU2iiOYAoXwCjDCA63DIAfgHo/ahP4QHoDEBnADoD0Ns4gFiJqlhVZCl3AI5/3QBaalv8hmzRb8jm6A3ZyO/yDXxDX89n9VpaHbwpq3i+V3LNy2kZwEtoMS303pT5NI/m0GzvDfCvy3Sa5rsmU2iy74qJ778k4/wXZWwSPwB+APzAORkePCNDg6dlSNDEH5jE18DXDkhfbZ/00bj+0E7pFeL6Q1x/aKP0CK1nAFx/mOsPc/3hJbRQOofnMQCe/wjPf4TP/wif/5EJDIDP/yif/9GR5gCifAGM8gsgah1A79YNQGcAOgPQGYDOAHQGoLd2AHlGoLIZ2bP7dw1gS/y6bNKvy4YoRa7LOn6br9FuyGpaGbwhK3jCl/tv8C3/BvA3ePJv8OTfAP+6zKU5NItmeq/JdJrmuwr+FfAvy0TfJZnguwj+BRnrPy+j/VUyyv+niR8AP3BKhgROyOAg+MEjMiB4iAFk8P/QdklvbYf00rh+jevXuP4Q1x/i+kMMIMSXvxDPf5jnP8zzH55FPP9hnv/IJHMAEZ7/CAOIjGAAw7IHEGUAUQYQZQDRnj8+AL1cxQD0UiO7/pMDyJvN7O8cwMb4NdmgX5P10WuyNnJN1vDbfBW/0VfybX0FX9yW8fm9hBbznC/kqhfQPJpLswGf5b0qM7xXwL8iU2mK95JMoonAj/ddkHG+8zLW95eM9iXxz8kI/1kZ7j8tw/wnTfzAMRkUAD8AfvCg9Avul75B8IMZ/J4a169x/RrXr62RbtpK+U1bzgC4/hDXH+L6Qzz/YZ7/8DTi+Q/z/Id5/iNjaJQxgHYRBhBhABF+Akb6Nx1AlAFEGUCUAUQZQJQBRFszgArLAMoyAzAqtlRklncAjtYPoFA/MoAN8auyLnZV1uhXZXXkqqwMX5UVoauynJ9qS/nGvoQWBa7yE+8qP/Gugn9F5tBsmgn4DO9lmQb4VJrivQj+BZlI473nZZz3L/CrwP9TRvnA952R4T6F7z8ug/3g+4/IwCR+4ID0C4Af2CN9ArsYAPjBbdIzCH4Q/CDXr/HNX1sFPp/9Gp/9Gtevcf2hucTzH+L5D3H9ockMgOsP8/yH+fwP8/yHef7DfP5HBmcGEOlLfP5HGECEAUR6GAMoif6WPYAoA4gygCgDiLZ1ACVNB2DkSGfT/6YBtKXUANbGr8ia2BVZpV+RlZErsiJ8RZaFrshSfqcvpkV8c18QuAL+ZX7iXQb/ksyimTQd9GmgTwV8Mk0CfQKN91aBXyVjvH/KaO85GeU9A/5p8E/KMN8JGeoD33fUxPcfkgF+8P3g+8H3gx/YIb0D26RXYIv0DGyS3wMbGMBa6R5cLd2CyetfxgC4fo3r17h+jevXZhLPf4jrD/H8h8YTz39otGUAQ4jnP8zzH2YAYQYQTg6gV2YAEQYQYQARBhApMIAoA4gygCgDiFaYNRlAaQsDyDMC3d60f+UIkq2OX5KVMdIvyfLoJVkaviRLQpdkkXZJFtJ8frbN49v7XJrNF7lZPO0zeNqn0zTQpwA+mSZy7RNAHw/6ONDH0GjgR3lPywjvKRnuBd97HPxj4B+RQb7DMtAHvu+A9Pftk74+he8H3w++H3y/wg+sk+4B8APgB3n6g1x/kG/+wQUMgOvXuH6N69f48qdx/RrPv8bzr/H8h3j+Q3z+h3j+Qzz/IQYQSg6A5z/M858cQJgBhHn+wwwg3M0ygM5SHGEAEQYQYQARBhApMIAoA4iWqcCP/k0DaJItu58dwMr4RVkRuyjL9IuyNHpRFkcuyqLQRVmgXZD5NDd4Qebw7X02zeSL3Ayaxuf6VD7Xp4A+CfSJNAH48aCP9Z4F/wz4p2Uk8COAH+49YeJ7j8pgL/jeQzLQe1AGePcb+P3A7+sD3we+D3wf+D7w/eD7wfevMfEDK2ipdA0sli4B8INcf5DrD3L9Qa5f4/o1rl/j+dd4/rXRxPVrXL/G86/x/Id4/kNcf4gBhBhAiOc/xC8A6wDCDCDchRhAOM8AIgwgwgAiDCDSzACiJapiS3/zAFpboQEsj1+QZbELskS/IIujF2Rh5IIsCJ+XeaHzMlc7L7P5zT6LZgb+kun+v/h9XwV+Fd/y/5RJNBH0JPw44MeCPoZGeU7JSM9JGeE5IcM9x2WY55gM8RwB/7DCP2Die/dKPy/43l3Sx7tD/vBuk97eLQxgEwPYIL/71ksP3xoGsEq6+cH38/T7efoDPP2B+TRHfg3wzT/A9QenEtcf5PqDPP9Bnn+N69e4fo3r14aYA9AYgMYANJ7/0B9qADz/IQYQ4gtgiAGEcgYQZgBhBhBmAOE8AzBiAJEyVakaQYEBpHOks/07RpCvpfHzsjh2Xhbp52VB9LzMj/wl88J/yZzQXzJbq5KZNCNYJdP57T6Vn3BT+CY/mS90k2iC7yz4Z8A/beCP5tpHAT8S+BHADwd+GPBDPIdlsOeQDPIclIGe/TLAs0/6e/ZIP89u6evZKX08Fnwv+F7wvQrfB76P6/cpfP8iAt/P0++fbeD/EuCbf4DrD0wirj/I9Qd5/oMMIMgAguYAKjSef43nX+tnDkBjABrPv8YAtB6WAfD8hxhAiAGEGEAoZwBhBhBmAGEGEC4wALJHSlTFZs0NIJ29af/KASyOV8nCWJUs0KtkXrRK5kaqZE64SmaF/gT/T5mhnZNpwXMyld/uUwJnZZL/DD/xzoB/mp95SfhTXP1J8E+Afxz84+Cb8EMN/EPgHwT/gMLfq/B3gb8D/O3yh2er9PaA7wHfo/C94HvB9ybxl9MS6eoD38fT75tn4P/q5+n38/T7uX4/1+/n+gPjCPwA+AGe/wDPf5DnP8j1B7n+INcfTA6A51/rrQbwuzkAjQFoXL/GALScAYQ6SVGIAYQYQChnAEYMIFymKjAAoyJLjjwjsLciW3Y/M4CF8T9lfuxPmaefkznRczI7ck5mhc/JjNA5ma6dlWk0JXhGJgdOyySayG/48f5T/L4/yU+8k+CfAP84X/aOAX+Uqz+i8A8p/AMyyL1fBrr3yQD3Hunv3i393Dulrxt8N/hu8N0WfM866eEB32Pid/OC7+Vz3wu+18Tv7OPp9/H0+7h+H9fvM/E7+nn6/Tz9fj77/Ul8rj/A9Qd4/gNcf2CAGgDXH2QAQQYQtA6A67cOQGMAGvga15/GVwMIMYAQAwhVmOUOgOzhElWxWZMBqBGobEb27FozgNZUaADz4udkbuyszNHPyqzoWZkZOSMzwmdkeui0TNVOyxSaHDwlEwOnZELgJPgnZZz/BPjHZYzPhB/Jl7sRfLkbzlM/DHQT/4AMBn4Q8AOBN/F3gb9D4W8Dfwv4m6WXe6P0dIPvBt9t4nf3gO8B3wO+hy99ngUMAHwv+F7wveB7k/g8/T6efh9Pv4/r93H9fq7fD76f6/dz/X6uPzDQGEB5gOsPMIDAH2oAPP9BBhDk+oMMIJgaQBL/18wANAagga+1V+UMIMQAQmWqUqMmAzAqyslhlh5AnhHkzWYW/cnmxk/L7NhpmaWflpnR0zI9clqmhU/J1NAp8E/KJJoYPCkTgidkfOA4+MD7j8lofseP4ufcSOBH8OVuOOjDeOqHAj+Ep34w8IPcexX+bvB3Sj8X+K7t0se1Vf5wge/aJL1cG8BfD/5aA7+HG3w3+G7w3SZ+V89CBsDnvofPfQ9Pv4en38vT7+Xp93L9Xp5+L9fv4/p9XL+P6/cNJ67fz/X7uX4/A/Bz/f4kPtcfAD/A9QcYQKCHZQDgB7n+IAMIMoBgMwPQGIBWoWIAWs4AQiWqYksFBkC2dPbsmhtAS7U0gNnxUzIzdkpm6KdkevSkTIuclCnhkzI5dEIm0UTtuIwPAh88JmMDx8A/KqP9R0x8fseP4Fv9MK8F3pMfvh/wfV3bwN8C/mbwN5r4LvBd4LtW00rp7loB/jLw+cx3g+8G3w2+ey4pfM90At8DvoenP4nvHUtcv5fr944w8X1cv4/r94Hv4/n39zMH4Of6/QzA35N+NwcQYAABrj/AAAI5AwgygCADCDKAYAq/wACMSo3sWolZ1giKcnKks4UKDCBvNrPITzYzflJmxIDXT8jU6AmZEjkuk8PHZSJNCB2T8doxGacdlbHBIzImALz/sIz0Aw/+cN9B8A/w+34/+PvA38uXvT3g7wZ/F/g71NVvM67exN9kwV8H/ppsfBf4riW0SLq6ePZdFnw3+G7w3eC7JzMAnn4PT7+Hp98DvmcUA+D6vVy/F3wv1+8dpAbA9fsYgK8PMQBfL2MApckB+MH3c/1+BuBXAwgwgAADCDCAAAMIWAYQrFQxgGCFWXMDMCpWFWWXOwAje/7yDaClWhrA9PhxmRY7LlN14PVjMil6TCZGjsqE8FEZHzoiYzXgtcMyOnhIRgUOgX9QRvgPgL9fhtFQ7z4Zwu/5wcAP4mfdQOAHAG/ibwN/a/rq/wC+N/C9uPqeXL2Jv0rhL8+DP4/Ad4Hvmkngu5L4Uwh89wQC383T7+Hp94Dv4fo9XL8HfA/X7wXfy/V7wfdy/d4kfm9zAD7wfVy/jwH4UgMA3w++H3w/+H4T3xhAgAEEGEAA/EA7I3MA5aoyVamRPZhvALkjcKSzpbMXHkE6W3bhH2xq/JhMiR0F/6hM0o/IxOgRGR85IuPCh2Vs6BD4h2Q0jQoelJGBA+Dvl+H+JP4+GerbA/4eGezdDf4ufubtUPjbwd8K/hbwN6ur36Dw10lPJ/hOrt650qi7M4m/FPjFOfhzmuK7wHeB7wLfNd7A7+AG3831u8F3D6OhBn47D9fvAd/D9XuS+H3MAXjB9/L8exmAt4eBX+oD38f1+xiAjwH4LAPwg+/voMoZQIABBMpVZWbWAaQrttSKARSquRE0V6EBTIkfkUkx4MGfoB+W8dFDMi5ySMaGwQ8dBP+AjNT2y4gg8IF9Msy/V4b6gQd/sA94r4I38LeDv5Vv+lsU/qb01fd2rpdewPd0rgF/lcJfAf4y6eYE3wm+c6F0dYLvBN8JvhN8Zwb/l1x8F/gunn4X+C7wXcNNfDfX7wbfzfW7+zOAfuYAPOB7uH4PA/AofC/X7+X6vQzAywC8DMCrBuBjAD4G4GMAPvB97c0B+BmAH3wjBuAvN0sNIFBqZA+UWMoZQDpHOluwFQPIyta0UBubFD8kE2OHwD8k42ls9KCMiRyQ0eH9Miq038TX9snw4F4ZFthj4vt3g79TBvl2yEBvEh94zzYD3sTfDP5G8JNXn4RfR2vAXw3+SoW/XOHz5DsXKfz5FvxZJr4TfCf4TvCd4Dsn5sEfaeK7ePpd4Lu4flcSf4AxgHI3+G6u380A3En8nuYAPAzAwwA84HvA9yh8L/he8L2dVJYB+CpV4PsqzFID8JepwDcqMUsNIF2RJUfTERjZm9aaAbQm6wAmxA/K+NhBGacfkLH6fhkT3S+jI+CH98nI0F7w98hwGhbcLUMDu8DfKYP9OxT+dhng3QY+8NSX3/R9+U3fB3gTf526+tW0SuGbV9+dq+/WyNU3gt+4QLo2gt84l8BvBL9xBmXjd0riO8F3gu8E3wm+cyQDMPErXUMVPtfvAt/F9bu4fhf4riR+b3MAbvDd4LvBd3P9bssAPAzAwwA8DMCj8I0YgJcBeCtVDMCrBuArV5WpwPdZBmBUbKnILDUAS7Z0drNgc9my+5ExjI/vl3Gx/Sa+vk9GR/fKqAjwYeBDwGvAa8AHd8qQwA4T379dBvq2gb9F+nuT+En4TdLHvUHhrwd/bfrqewL/u+XquzcuUfgLFf48hT87G78R/EbwG8FvBL9xPPGlr3EMAxht4jt5+p3gO8F3gu9M4g+04PdVAwDfBb6L63cxABcDcCUHAL4bfDf47s5GxW4G4FYD8IDv6aBiAB7wPe0yAzAqV5Wp1AB8Jari7FIDMHJkZUuVGkCz2ZqOoLnyDWBcfJ+Mie2V0Trw+h4ZGd0jIyK7ZXh4twwL7QIfeA34IPAB4P1bZYB/iwzwJfE3Sz/vJunr2Wjg/+FeD/468NfwZS9z9b9z9T0M+KUKf5HCn6/w5yj8mQp/msKfrPAnZOM3gt8IfiP4jeA3JvGHGPjtnOA7uX4n+E7wneA7uX5nHnwX1+9iAC4G4GIALvBdCt/dScUA3OC726vMATiMwPeUq8pUpeYAjEpUxZl8RTk5skoPwG8vnHUALdXSKMbE98jo2B4TX98tI6K7ZHhkpwwL75ChoR3gb5fB2jYZFNwqAwNbDPz+/s3S37cJ/I3gc/Ue4N3rjKvvDXwvftr1VPC/c/U9LFffTV29ic/VN4DfMEs6N4DfMJ3AbwC/AfwG8BvAbwC/gWe/AfwGK/5wE78R/EauvxH8RvAbuf5G8BtT+L3NATgZgJMBOMF38s3facW3DMDFAFzguzoaFbkYgEvhG4HvrlCVqywDILtRicoyAG9RTg6z1ADS2ZuWdxC2pgXa0Oj4bhkV2wX+Lhmh75Th0R0yLAJ+eLsMCW0Df6sM0rbIwCD4AeD9wPuA922Qvt714K+TPzzAu9cY8L34Td/Tlbn6Hs7k1S82rr6b5eq7NiTxZyv8GRb8KQp/Yn78BvAbwG8Av2Eogd8AfgP4DeA3JPG5fmMAfxD4jeA3gt8IfiPX32gOoCQ5ACcDcILvBN8JvvMXMzWANL5RpYoBuCpU5WbJARiVGtndJZmSA0hXlJMjMwKypbNn8jWXLZO/DaUGMDK+U0bEdshwHXgaGgU+Anx4qwwObTHxtc0yILhJ+gc2Sj//BgO/j2+d9PGuBX8N+Fy9e6XC5+pdyw34HnzD7+40r76b5eq7GlefxJ9pwZ+ajV8Pfj349eDXg18Pfj349SMYQC7+oAx+A/gN4Ddw/Q3gN4DfAH6DBb+R628EvxH8RvAbOxsVN6YGAL6zo1GRkwE426vAd7bLPwBXmarUyO6yDMBdbKkou+QALNnS2c28LWXLHkFL5Q5hRBz82Hbwt8lQGhIFPgJ8GPjQZvA3yQBto/QPbpB+AfD9wPuA966h1dLbs8rAT8L3BP531zKFvxj8RQp/PvjzFL559Sa+efW/1oNfD349T359Cn+cBX9UBr8e/Hrw68GvB7+ez/168OvBrwe/Hvx68Ot5+uutAwDfiAE0cP0NDKCBATQwgAaF3/iLigE0gt/YQQV+Y6UZA3AYge8sV5VlDcCeGkC6YktFZukROLKypbNnRtBcyQG0pkKDGB7fJsNiW8HfIkNocBT8CPBh4EPAaxtM/OB66RtYK338wPtWg78KfK6eerqXg78MfOBdSwz47vyu7+Y0r/63JDxf9LpannwDvz6Jn4SfbMEf3zJ+Hfh14Ncl8Qem8Sss+OVJ/Hrw68Gv5/rrwa8Hv57rrwe/Hvx6E98YQAMDaAC/AfyGjkZFDeA3tDczBtDOyNFYoSo3Sw7AqNTIblSSKd8A0jmysqVKDqCljBHYWq65YQyLb5GhsST+ZhlMg6KbZGBkowwIAx8CXlsP/joTPwC8H3jfSuntTeKvMPB/dy8Ffwn4XL0rib8AfPPqM/iz0k++iT/Vgm9evYFfB34d+HWjCfw68OvAr+Pbfl0Ofh34deDXgV8Hfh34deDXgV8Hfh34deDXgV8Hfp0VXw2gHvx68Ot/UTGAevDrO5gZA6hUtTNyNFSo1AAay1SlRnajkkzOYktFORUYgMvefOkh2JqvpXEMjW+WIbFN4G+SQfpGGRjdIAMi4IeBDwGvrZW+wTXgrwIfeOrlWyG9vFy9Z5nCXww+8K6FGXznXPCB5+ediW/Cd1ZP/q/qyU/j14034DvWjcnBH94Uvxb8WvBrwa8Fvxb8WvBrwa8FvzaDX2bFp5I6BlAHfh34dVx/HfhG4NeBX9fRqKguOYD2qkoV+PUVqnJzAA1llkqN7A0lmRqLcyrKLjkAS7Z09kzNjsFWOHcrGhLfKINjG8HfIANpQHS99I+sk35h4EPAa6ulTxD8QBIfeN9yWiY9vcB7uHp3Eh94F/Cu+eDPU/jANwLPb/sMvgn/q3ryDfy6JP64PPhcfS34teDXgl8Lfm0r8WvBrwW/FnwjBlDLAGrBrwW/FvzazkbFteDXgl/bySyFbwR+XaWqnZGjzjIAozJVqZHdqMTMGEFxTkXZNTrS2bKyZ3I2l83M9YMNjm+QQbEk/noZoK+T/tG14K8BH3htFa2UP4LgB8D3A+9bCv4S8IH3LGIAKfx5BLxzDqXwZ4BvXn02/kQyrz4bf5R0qOXqa5viV6bwa/jCVwN+Dfg14NeAXwN+TW8Cv6aniqe/Bvwa8GvArwG/BvyaLioGUAN+zS9mxgA6GhXVgl/bXlWpAr9WDcCoXFWmKjWyG5WYGUMotlTUtAZHOltW9kyNzWUzc7ay3AEMiq+XgbF14K+V/voa6RdZLX3DwIeAT+JrK6R3kKsPgO8H37dYfvcC71kI/gLw51vwgXfOAn9mDr4J/6u6+mz8McTV1xbArwG/Bvyaga3A79UCftcc/NQAOqnAr+mgAr+mUtXOyFFboSpXlVkqNbIblWRGUFdsqahp9Y50tqzsmRqay2bW2MpyBzEwvlYGxNaAv1r6RVdJ38hK6RMGPrQC/OXSW1smvYLAB5YwAPB94HsXMID50t1twndzcfUuhe8EvnE6mVffFN+E76SuvmNtHvyaYWn4yppB2fjV4Ff3JfCrwa/ubVRWDX41+NU8/dXgV4NfDX71b0Yl1eBXg1/d2ai4Gvxq8Ks7qbj+auCN2qsqzZL4RhWqclWZqtTIblRilhxBbXFORU2rc6SzZWXPVN9ctkwNrcw6iAHx1dI/tkr66SulbxT8CPDh5QxgGfhLpZcGfHAxA1gkv/u5eh9X7wXfA77bhP/NlYSfmQcf+IZJ4JtX3zy+Cd++ZmhT/Grwq1vA/w7+d/C/g/8d/O/dVOB/B/87+N87q8D//osK/O8djYq+d1BZ8KvbGTmqK1TllspUpUZ2o5LMCGqKcyrKCfjaTLas7NnVFcqWXX0rS42hfxz8GPgMoE8U/AhXHwY/lMH/PbAQfK7eB7x3HvhzTXy3wnfNAB945zTwgW/k6hX+L03wzSe/o4LvYLn6LPxq8KtN/HZW/O/gfwf/e2+jsu/N4H8D/xv437qowP8G/rdfVJ1UOfhGlSrwjSpU5aoyS6VG9u8lZtWpii0V5clhjkBlS2dvWm2hbE2ra2XJIfSLgx9bIX10rj4KfGQpA1givUJcvcbVB8EPgO8H3we+d4508wDvngX+TBPfZeJ3dqbwufoG4BsUfL159Xnxa3Lwq/Pgfwf/ewH8b+B/A/8b+N/A/9ZNVQj/1yb4xd+AN2qvqlS1M3J8q1CVWypTlRrZjUrMjCEU51SUJ4c5ApUtnT1/+YZRY8tfbSvrG18ufWLL5A8d+OgSBrBYeoUXSc8Q8NoCBjBfegSA989lAOB7wfeA755pwHd1cfVJeOcU8Ln6xjz49T+I/z0P/jfwvyXh8+HTV/C/gv+1qwr8r+B/Bd4I/K+dVB2Nir52UIH/tVLVzsjxtcJSuarMUqmR3agkM4JvxTkV5clhxhBsWdmbL2sYtsLVtKI+cfBj4OvgR8GPgB8GPwS+Bn4Q/MAcBjBbuvmA985kAFy9W+G7FL5T4Tcq/AYFX6/g+YnXUcF3sDz57S3wlQY8fc/B/wb+tzz4X8H/Cv7X7ioTvzSF/wX8L51V4H/5RQX+l45GRV86qNqrKlXtjBxfKlTllspUpUZ2oxJzAOmKcyrKyZGV7Zs1e8ulB2FrueZG8kcc+NhiBrBIekUXSs8I8OH5DGCe9NC4+iD4AfD9VnwTvosLeNdk8E34XxuT8OPz49e1Al/Bp/G/5cH/miwP/hfwv4D/JQnfEr4awGfgjdqrKlXtjByfKyyVq8oslRrZjUrMERgV51SUJ0dWtmRfU9lb3zdb68s3jj/i4MfA18GPgh8BP6zwNfCDs8AH3jeDAXD1HvDdOfhOhd+Yg1//I/hJ+Bz8r+Cn4RX+F/C/dFdZ8D8nA/9zZxX4n4H/lKyTqqNR0SfwP7VXVaraGTmMKlTlqjJLpUZ2o5KcinMqyu5zMkdWNmtf7G3IZva1jaVG0Tu+UHrFFkhPHfjoPAYwV3qEgddmE/gB8P3g+8D3gu8B353En0TAOycQ8I3jwAe+YQz4wNeb8B3rTPgOtcNaid83g/81g1+ewv9i4pel8D+D/xn8JPynZOB/6qwC36gA/sdk7VWVqnZGjo8VqnJLZZZKjexGJZaK81TUtE+OrGzp7K3rcypb0760oV5x8GPzGQD4UfAj4IcUfhD8wHQGME26+oD3TgGfq3crfJcFv7EAfp3CrzXh2xs/8fLgW66+Cf6XJHwO/meF/wn8T3nwPwJvBP7HTqqORia8Bf9DpaqdkeNDhaVyVZmlUiO7UUlOxTkV5cmR6SPoWdnbGIiffrDkWHrGwY+Br4MfBT4yiwHMlG4aVx8EPwC+H3wf+J48+E4LfoPCr28O34QviG/A5+L/bvYZ/CT8p2Q5+B+7qEz8kjS+GsCHjirgjdqrcvDfJ6tQlVsqs1RqZDcqyak4p6I8ObKypfqQzN7GbE372IZ6xufK77E50kMHPwp+GPwQ+Br4QfAD4PvB94LvmcgAgHeNJ+CdY8EHvnE0+MA3jGwVfuonXrP4Xyz4nxX+pxz8j0n4HPwPvxoVf/hFlYP/Pll7VaWldkZp/HfllsoslRrZjUpyKs6pqECOrGxZ2TO9b022lvvQTL/HwY/NZgDgR8EPgx8CXwM/OIUBTOb6uXov+B7w3QrfBb5T4Tem8EcQ8HXDaKiJX6vwa3Lx++XB750f/1MKv5vZxxz8D8ny4L/vpAL/fQ7+u2SVqnZGjncVlhT+2zJLpensRiWWivNUlCdHVrYm2Qv3Ll+2Hys1jh5x8GPg6+BHpzOAaQxgqnTVwA+C7wffB743D77Tgt+Qiw987eBm8NWXva8W/C8WfAM+B/9jBr/0Q1cFb8F/D/77X1QW/Hd87r/roLLgv03WzsjxtsJSuSXg36QqNbIbleRUnFNRgRxZ2bKy/0A2s7c/WI/4TOkemyHddPAj4IfBD4GvgR8A3w++D3wP+G6F77LgN1rw63PxB6XxK1vE75WD3yOD/9GC/yEH/31nAz4L/10nVUcV8G+TtVdl4xe9YQBvKlTllpriO16Db1Riqbhpr4oK5MjKlpW9cK8LZWu5N83UPT6DAYCvgx8BPwx+CHxtEgMA3w++F3wP8O4x4APvGsUARmbwGyz4dQq/NolvwjfF75Mf/3MO/kcL/gcL/vsuKgv+u19UCv9tR5UF/02ySlW7dAb861TlZq/Kcio1shuV5FSc3ctkRXlyZGVrkr2N2bJ79QN1j4MfA1+fygDADyv8IPgB4P3jGAD4HvDdFnwn8I3DwR9m4tfnwa9J4vc3/gkdA/975vO+IufLnoH/KQ/+Bwv++xz8d78apfHfdlJZ8N90UPAK/3WqdkaOVxWWyi0p+JfJSo3sRiU5FWf3IllRgRxZ2bKy/0C2H8s6mm5x8GPg6+BHwA+Dr02QzsHxDAB8H/heC77Lgt8IfMPQDH5dK/C/tYD/sRX473Lw31rw33RUWfBftzfRX6VqZ5SGf5ms3FKZJfBfmNmNSnIqzu55sqI8OZpky8r+A9l+vm5x8GPg65MZAPgh8DXwg+AHxjIA8L2jGYCJ38kFvtOKD3z94Ax+rcKvSeL3y4Pfuxn87k3x31vw31nw3/6q4BX+mxz81x1M+FftLfD0sp2RiW7Bf5GqzJIF/3mykpyKm/asqECOrGxNsv9Atp/vtzj4MfCjE6VLBPwQ+Br4QfD94PvA94DvVvgu8J3gN4LfkMIfZNQEv7pvC/i/N8VPX70FPw3f2YA3U/hvLPivkwH/qoOCV72sVJn4RS8YwIsKlQX/eVlOpUYG/rOSPBVn97SoQKA/yc6Wlf0Hs/18v8XB17n86AQGAH4IfA38IPh+8L3ge8B358FvAL/egl+bB//7D+C/z4P/Ngf/jQU/Cf8qmQX/ZSqF/6JdujT+82TllkB/lqo0nf2ZGsBTa4A/ya0of48dWdmaZG97j5LZfr6u8UkMAPwo+JFxDAB8DfwA+H7wveB7FL4LfCf4jUMYgMKvB77Ogl+Twu+Tg9+rbfjvCuC/seC/7qTgTfzilx0s8PSiUqXwn7dT6Kpn5ZYs+E9L09mfJCvJSYE/tlaUv0eOJtmaZM/fw+aytb0Heeoa5+nXwY+CHwE/NIYBgB8A3w++F3y3wneB7wS/EfyGHPxaC361Bf/bT+C/teC/seAb8Bb8lxb8F6kU/vN26Uz0VBb8p2VmT5KVpjPwH5fkSaE/slaUv4eOrGzJHlizt637qWx/T13iE9QAwA+DHwJfG8UAwPeNYADgu4cxgBz8BuDrga+z4NdY8L9b8L/+BP4bC/7rXxS8wn9pwX9hwX9eqVL4z9pZ4OlpudmTcoVu6XFpOvtjNYBH1izoD1MVmT3IzdEk2/3c7M13r1C27O7+YF3i4OtcfxT8MPgh8IPgB8D3ge8B3w2+C3wn+I0mfvsUfh34tRb86gx+hRX/S/Zv/Dbhv87Bf2nBf5HEVwN4bsF/VmnAmyXR6UmFQrfgP7YG/CMzu5FCf5gK7Ae5WcDv5+bI7h7gWQF5t43dSWX7e+oSB1/n+o0BgK+BHwTfD74PfI/Cd4HvBL8R/IYB6vot+DU5+N9y8D9n45dZ8d8p/LcK/00O/qs8+C8s+M8t+M8s+E+TpeAV/mNrCv5RWRrewH9YaoI/yA3w+7lZwO9Zuutoks3aHYcFs4Vu58tmdusn6xwHXwc/yvUbAwA/CL4ffC/4HhO/gwt8J/iNwBsD6M8AwK818c3rB/+7Bf+riV+ehd8tD34XKW0J/6XCf2HBf67wn7XPwD+tNOGfJFPwj1Mp+EflCl0FuNED4I0U+H1rFvR7qZLQBQI4N1uq26ksoLda2c1kth/vRk6d4+Dr4EfBD3P9xgDA9w9lAOC7W8Cv7aOu34L/LQ/+pzz47wvgv6ZXzeA/z4P/VPWkXboMfIVCt+A/VD0oM+CN7oNvZIG/V2Ji381XEjpfgN+2dAvsJllBW9ENawrv+k90TfVrfDQDAD8Kfhh8jetXA+igBtBeDaDSGAD49eDX5eBXg/89B//LT+K/VPgv8uA/U/hpeAv+Ywv+Iwv+w3ILuup+aToD/55Cv5vKAn7HmsK+rbplzZHpJth5y0Wl663omj2D15quttCvcfD1kQwA/PBwBgB+AHwf+F7w3eC7uH4n+I3gN4BfD35dH2MAFTU5+N/A/6rwP1vwP7YevyQf/nMTv/hZDv4TC/5jhf+oItNDBf+g3IKeSuHfA/5uqQWd7qSyoN9W3Spq2s1UjuxugJ3qeqpCsM10NZUF70obulwgcwDgR8APga/x9AfA9/H0exS+C3yniV+ZD7+6lxpAHvxP/wL8p+0t8JVp+KJHyVLwFRb48hz4MgPdcdcsjX8npzR4blZw1Y0iA9voeiabtWupCuGqrjRXHsRLbehiTr/ER6YH0DEEvgZ+AHwf+B4LfiP4DX0t1w9+TR78rz3Mf+Wugd89g/8h81Ov9F0L+C8U/vOOaXgD/2kO/uNKC7zCT8I/qMjA3y+3oKvuZvAdd0ot4KpbJdngN61Zwem6NQV/LVMa/WqqFoAvW7qUr2YwL7Sh86pf4uDrXH9kmGUAgxgA+J4BDAB8Zz9jAO2MAYBfB34t+DW9jAGUfwf/2++W6+9uefpbif8yH37HbPwn7S3wOfhp+AoLvMpAT2Wip7LfLrWgW/Bv5nSjOA84XUtlgb9qZruSpxaBVRctXbDWDGZz/ZWnKmMA4OvgR8APgR/k+v1cv5cBuLl+NYB2jbn4vbPxv6Wuv7vl6c/+Z/XMp/9n8Ntn8NPw9MCCnwVfboEvy4J3JOFvlWbQb1pLgdP1VLngqqsqcHOzXVZdStVaZEvnrbWAWtWK/sypkzEA8CNDGAD4QfD94HvBd4Pv4vqd4DeAXw9+XW/L9YP/PQf/cw7+hxz8t23Af9rBAq/wHxXAv1+RA2/Bv6O6bcI7blnwrfA3SnLQ6VqqXHBrgF9WXTKzWbuYqjXIlv6yVGVvPeq5FjprqVN8WHoAHYwBgO/n6feC7wbfBX4j+A1/WAYAfg346QGA/7W7un6F/zEXv0vr8J+1At+AV/j3LaXhyzPoBnyZgZ7KfrM0B52ul+RBVzUBp8uqS47sLlrAL1hrBXRVgf5M1QbYZGdyOp2nTnHwda4/An6I61cDqPRYrl8NoKI+P37m+rsZA8jCf9/F8rmf/YWvJI3fqQl+cSvwi9LwFRl4K74Bb8G/aZaGv24pC1x1pbgp+iVrJrjRhUwG+HlrhS66APS5fP0AbqpTOZ20ZA4A/Ahf/DTwg1y/D3yPun4n+I3J6we/rpcxgHJjAOB/72G5/m6W6++qBtCl6Ze+tuI/UvgPKxU83W9n4hvwFvw75TnwZVnwjhvgJ8uCT2VFV13Og35RdaEoC91+3iyN/pelghddAPus6oyl1uCebKYTOR1XdYwPSQ+gfXIAAfB94HvAd4HvBL+ht3n9xgDAr8mDb1x/U/yCn/vN4T9uI/4dVRZ8WRa843oSvjQHna6WZMNfVl0qLoBuwT9v6S8zW1VOzWGfzYN9Ok+tQc6Hm69jOXWMg69z/WHwtQF5B1BhDAD8OoWvrr/sW3fL9Vs+9z90UQNoBf7zVuLfV6XhKzLwufg3y7Lg0/i58FdKsuEvWcqHfj5VNrq9yswEV51L1VZs1UlrbUC24h7N6UiesgcAfgB8H/hu8F1cfyP4DeDX98xcfzXX/727GkDy+n+zXH8e/Dd5vvQ1we/QFP9BK/Bv061yC3xZFryBf63Ucu0p+JKca0/BFxdAp79UVY7sssBVZx0/iK06oTpubz3ykQIdtnQop45x8HXwwwMyA/BmBlCRGkDy+mvBr+lhuX7wv/xmDCD99BsDsPwrePN97reE/7AZ/DsVGfi8+GUZ/GtmTeFLsuEvpuCLm0FPZYIbncuURj+j+mHsnFoL3RxyqoOWDqg6pAfQnwGAH+jLAMB3c/1O8BvN6y+v+90cQPr6u6UHkPzf0W96/Zl/Tj/7S19T/OKW8IEvysW/pcqCL8uCd1wtbQp/qSTn2i2dL86Gr7L0Z1ETdPtZswy6pULgzWKrjqqO2NsOnQ852f4CdYgPZAADjAFUJgfg5/q94LvAd4Lf2DMzgOT1V4OfGoBx/V3VALpYrj/zr+BN47/M81v/ieVzPx/+vVbgp+HLMvAp/CbwqrzwxXmuXcGfS5VBtwNuP52LrmoNeF7snA7b2wZdCHmfpb2W9qgBtI9y/WHwNa7f3yd7AA3g1yevv4cxgLLq1PX/Zrn+LvmffuP6O2U//Xnx27eMf7vCAt8MPvCOK0n80jzwJU3RDfjiZtDpbFEWujUTPKd86C2BH1YdspaD3dJFF0LO125Vh/gAYwCVagDt/OB7wHeB7+T6G35Xz39yAMnr75YeQPL/KldmAJ0LX39z3/gftbd84au04LdrHf61six4A/9yDr4BX1IAvrh5+DNFTeFBt2eBq447mqK3CZwOqg7YC2Pnu+jmkJPtsrTTUodYcgDgh7n+YJ/sAfD8lxsDAL+2u3n9xgCS19/V+L/MVfDpV9ef/fRn8ItbgV+UDz/r6pviO5L4TeBLCsAXq8/23GtX8KeLmqCnykZXNXflrQKn/al+EDsf9I4Cbaf2sf7mAEJqAL7eDAB8F9ffCH59D3MAyeuvBv/7b5br75K+fuN/T/+d+b+2ZV5/HvxnzXzps+LfycG/mcIvz8a/WpYF77hU2hTeip8Fr2py7Sl4OlXUBN7eBF111NE69ILgqn2qtmDvbAF7u6Vtqq2qzADAD/5hDKDCbQ6gPDWA5PXXdDMHkLz+r10tA8jz9L9Ofe7n/LN7hb70tQX/Whvwz6vywhdnw5/OgT9ZlIVuP54pG52OOLLRm7vyguCqPfafu+xcaCv2ljy1j4Ef7WsZAPhurt8JfmOP7AEkr/+bwv+s8Ft7/blP/8NWPPst4St4Az8vfEkB+OIW4IvywtuboKsKoee78rzglnbb8193a7C3toC9WbXJUmYA4Ae5fusAGpLPP/i13SzPf3IAXTLX/yEH/3Whpz/P5376d34ufkUG/3oO/pV8+KUt46fhi5uHP1GUDX9M1QRddcjxc+i7VbtUhcCbe8Zbi71RtcFS+xj4Ua4/OYAAA/AmBwC+s0fOANT1pwfQ2RhA9vV3Utdv+RdzNvnWn/Ol767l6W8rPvCOC6V54EsKwNPp4mbg6XhRBv6o6ohZNrqqNeh7WkKnHal+4Lpbi51qvaXKrAGA7+X6XakBgF8Hfs1vlgF0ST//qf/TbCXvLNf/Kv/T3+LnfnP4V/9m/ILwRRn4I5aaoKvaim4Fz0JXWdHbct2twV5naa1qjU3+HwuefjlXE4+yAAAAAElFTkSuQmCC", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var WD = wD(40022),
      ND = wD(37079),
      ZD = wD(40066),
      yD = wD(40217),
      kD = wD(40291);
    class mD extends yD.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let eD = (() => {
      var DD, zD, wD, pD, sD, KD, rD, LD, cD, gD;
      let RD, AD, UD, fD, ID, BD, GD, hD, nD, MD = kD.c,
        OD = [],
        JD = [],
        ED = [],
        QD = [],
        XD = [],
        CD = [],
        xD = [],
        TD = [],
        bD = [],
        jD = [],
        dD = [],
        SD = [],
        iD = [],
        lD = [],
        WD = [],
        ND = [],
        ZD = [],
        yD = [];
      return DD = class extends MD {
        get useEnergyConservation() {
          return (0, VD.c)(this, zD, "f")
        }
        set useEnergyConservation(DD) {
          (0, VD.g)(this, zD, DD, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, VD.c)(this, wD, "f")
        }
        set useSmithVisibilityHeightCorrelated(DD) {
          (0, VD.g)(this, wD, DD, "f")
        }
        get useSphericalHarmonics() {
          return (0, VD.c)(this, pD, "f")
        }
        set useSphericalHarmonics(DD) {
          (0, VD.g)(this, pD, DD, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, VD.c)(this, sD, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(DD) {
          (0, VD.g)(this, sD, DD, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, VD.c)(this, KD, "f")
        }
        set mixIblRadianceWithIrradiance(DD) {
          (0, VD.g)(this, KD, DD, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, VD.c)(this, rD, "f")
        }
        set useLegacySpecularEnergyConservation(DD) {
          (0, VD.g)(this, rD, DD, "f")
        }
        get baseDiffuseModel() {
          return (0, VD.c)(this, LD, "f")
        }
        set baseDiffuseModel(DD) {
          (0, VD.g)(this, LD, DD, "f")
        }
        get dielectricSpecularModel() {
          return (0, VD.c)(this, cD, "f")
        }
        set dielectricSpecularModel(DD) {
          (0, VD.g)(this, cD, DD, "f")
        }
        get conductorSpecularModel() {
          return (0, VD.c)(this, gD, "f")
        }
        set conductorSpecularModel(DD) {
          (0, VD.g)(this, gD, DD, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(RD) {
          let AD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(RD, "PBRBRDF", 90, new mD, AD), this._useEnergyConservation = DD.DEFAULT_USE_ENERGY_CONSERVATION, zD.set(this, (0, VD.m)(this, OD, DD.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, VD.m)(this, JD), DD.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), wD.set(this, (0, VD.m)(this, ED, DD.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, VD.m)(this, QD), DD.DEFAULT_USE_SPHERICAL_HARMONICS), pD.set(this, (0, VD.m)(this, XD, DD.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, VD.m)(this, CD), DD.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), sD.set(this, (0, VD.m)(this, xD, DD.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, VD.m)(this, TD), DD.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), KD.set(this, (0, VD.m)(this, bD, DD.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, VD.m)(this, jD), DD.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), rD.set(this, (0, VD.m)(this, dD, DD.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, VD.m)(this, SD), DD.DEFAULT_DIFFUSE_MODEL), LD.set(this, (0, VD.m)(this, iD, DD.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, VD.m)(this, lD), DD.DEFAULT_DIELECTRIC_SPECULAR_MODEL), cD.set(this, (0, VD.m)(this, WD, DD.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, VD.m)(this, ND), DD.DEFAULT_CONDUCTOR_SPECULAR_MODEL), gD.set(this, (0, VD.m)(this, ZD, DD.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, VD.m)(this, yD), this._internalMarkAllSubMeshesAsMiscDirty = RD._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(DD) {
          DD.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, DD.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, DD.SPHERICAL_HARMONICS = this._useSphericalHarmonics, DD.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, DD.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, DD.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, DD.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, DD.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, DD.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, zD = new WeakMap, wD = new WeakMap, pD = new WeakMap, sD = new WeakMap, KD = new WeakMap, rD = new WeakMap, LD = new WeakMap, cD = new WeakMap, gD = new WeakMap, (() => {
        const zD = "function" === typeof Symbol && Symbol.metadata ? Object.create(MD[Symbol.metadata] ?? null) : void 0;
        RD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], AD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], UD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], fD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], ID = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], BD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], GD = [(0, PD.C)("baseDiffuseModel"), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], hD = [(0, PD.C)("dielectricSpecularModel"), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], nD = [(0, PD.C)("conductorSpecularModel"), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], (0, VD.i)(DD, null, RD, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: DD => "useEnergyConservation" in DD,
            get: DD => DD.useEnergyConservation,
            set: (DD, zD) => {
              DD.useEnergyConservation = zD
            }
          },
          metadata: zD
        }, OD, JD), (0, VD.i)(DD, null, AD, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: DD => "useSmithVisibilityHeightCorrelated" in DD,
            get: DD => DD.useSmithVisibilityHeightCorrelated,
            set: (DD, zD) => {
              DD.useSmithVisibilityHeightCorrelated = zD
            }
          },
          metadata: zD
        }, ED, QD), (0, VD.i)(DD, null, UD, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: DD => "useSphericalHarmonics" in DD,
            get: DD => DD.useSphericalHarmonics,
            set: (DD, zD) => {
              DD.useSphericalHarmonics = zD
            }
          },
          metadata: zD
        }, XD, CD), (0, VD.i)(DD, null, fD, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: DD => "useSpecularGlossinessInputEnergyConservation" in DD,
            get: DD => DD.useSpecularGlossinessInputEnergyConservation,
            set: (DD, zD) => {
              DD.useSpecularGlossinessInputEnergyConservation = zD
            }
          },
          metadata: zD
        }, xD, TD), (0, VD.i)(DD, null, ID, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: DD => "mixIblRadianceWithIrradiance" in DD,
            get: DD => DD.mixIblRadianceWithIrradiance,
            set: (DD, zD) => {
              DD.mixIblRadianceWithIrradiance = zD
            }
          },
          metadata: zD
        }, bD, jD), (0, VD.i)(DD, null, BD, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: DD => "useLegacySpecularEnergyConservation" in DD,
            get: DD => DD.useLegacySpecularEnergyConservation,
            set: (DD, zD) => {
              DD.useLegacySpecularEnergyConservation = zD
            }
          },
          metadata: zD
        }, dD, SD), (0, VD.i)(DD, null, GD, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: DD => "baseDiffuseModel" in DD,
            get: DD => DD.baseDiffuseModel,
            set: (DD, zD) => {
              DD.baseDiffuseModel = zD
            }
          },
          metadata: zD
        }, iD, lD), (0, VD.i)(DD, null, hD, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: DD => "dielectricSpecularModel" in DD,
            get: DD => DD.dielectricSpecularModel,
            set: (DD, zD) => {
              DD.dielectricSpecularModel = zD
            }
          },
          metadata: zD
        }, WD, ND), (0, VD.i)(DD, null, nD, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: DD => "conductorSpecularModel" in DD,
            get: DD => DD.conductorSpecularModel,
            set: (DD, zD) => {
              DD.conductorSpecularModel = zD
            }
          },
          metadata: zD
        }, ZD, yD), zD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zD
        })
      })(), DD.DEFAULT_USE_ENERGY_CONSERVATION = !0, DD.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, DD.DEFAULT_USE_SPHERICAL_HARMONICS = !0, DD.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, DD.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, DD.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, DD.DEFAULT_DIFFUSE_MODEL = 0, DD.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, DD.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, DD
    })();
    var oD = wD(40208),
      aD = wD(37273),
      uD = wD(40211),
      vD = wD(40046),
      tD = wD(40270),
      FD = wD(40266),
      YD = wD(40278),
      HD = wD(40254);
    class qD extends yD.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let Dz = (() => {
      var DD, zD, wD, pD, sD, KD, rD, LD, cD, gD;
      let RD, AD, UD, fD, ID, BD, GD, hD, nD, MD, OD, JD, ED, QD, XD = kD.c,
        CD = [],
        xD = [],
        TD = [],
        bD = [],
        jD = [],
        dD = [],
        SD = [],
        iD = [],
        lD = [],
        WD = [],
        ND = [],
        ZD = [],
        yD = [],
        mD = [],
        eD = [],
        oD = [],
        uD = [],
        vD = [],
        tD = [],
        YD = [],
        Dz = [],
        zz = [],
        wz = [],
        pz = [],
        sz = [],
        Kz = [],
        rz = [],
        Lz = [];
      return DD = class extends XD {
        get isEnabled() {
          return (0, VD.c)(this, zD, "f")
        }
        set isEnabled(DD) {
          (0, VD.g)(this, zD, DD, "f")
        }
        get indexOfRefraction() {
          return (0, VD.c)(this, wD, "f")
        }
        set indexOfRefraction(DD) {
          (0, VD.g)(this, wD, DD, "f")
        }
        get texture() {
          return (0, VD.c)(this, pD, "f")
        }
        set texture(DD) {
          (0, VD.g)(this, pD, DD, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, VD.c)(this, sD, "f")
        }
        set useRoughnessFromMainTexture(DD) {
          (0, VD.g)(this, sD, DD, "f")
        }
        get textureRoughness() {
          return (0, VD.c)(this, KD, "f")
        }
        set textureRoughness(DD) {
          (0, VD.g)(this, KD, DD, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, VD.c)(this, rD, "f")
        }
        set remapF0OnInterfaceChange(DD) {
          (0, VD.g)(this, rD, DD, "f")
        }
        get bumpTexture() {
          return (0, VD.c)(this, LD, "f")
        }
        set bumpTexture(DD) {
          (0, VD.g)(this, LD, DD, "f")
        }
        get isTintEnabled() {
          return (0, VD.c)(this, cD, "f")
        }
        set isTintEnabled(DD) {
          (0, VD.g)(this, cD, DD, "f")
        }
        get tintTexture() {
          return (0, VD.c)(this, gD, "f")
        }
        set tintTexture(DD) {
          (0, VD.g)(this, gD, DD, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(RD) {
          let AD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(RD, "PBRClearCoat", 100, new qD, AD), this._isEnabled = !1, zD.set(this, (0, VD.m)(this, CD, !1)), this.intensity = ((0, VD.m)(this, xD), (0, VD.m)(this, TD, 1)), this.roughness = ((0, VD.m)(this, bD), (0, VD.m)(this, jD, 0)), this._indexOfRefraction = ((0, VD.m)(this, dD), DD._DefaultIndexOfRefraction), wD.set(this, (0, VD.m)(this, SD, DD._DefaultIndexOfRefraction)), this._texture = ((0, VD.m)(this, iD), null), pD.set(this, (0, VD.m)(this, lD, null)), this._useRoughnessFromMainTexture = ((0, VD.m)(this, WD), !0), sD.set(this, (0, VD.m)(this, ND, !0)), this._textureRoughness = ((0, VD.m)(this, ZD), null), KD.set(this, (0, VD.m)(this, yD, null)), this._remapF0OnInterfaceChange = ((0, VD.m)(this, mD), !0), rD.set(this, (0, VD.m)(this, eD, !0)), this._bumpTexture = ((0, VD.m)(this, oD), null), LD.set(this, (0, VD.m)(this, uD, null)), this._isTintEnabled = ((0, VD.m)(this, vD), !1), cD.set(this, (0, VD.m)(this, tD, !1)), this.tintColor = ((0, VD.m)(this, YD), (0, VD.m)(this, Dz, aD.d.White())), this.tintColorAtDistance = ((0, VD.m)(this, zz), (0, VD.m)(this, wz, 1)), this.tintThickness = ((0, VD.m)(this, pz), (0, VD.m)(this, sz, 1)), this._tintTexture = ((0, VD.m)(this, Kz), null), gD.set(this, (0, VD.m)(this, rz, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, VD.m)(this, Lz), this._internalMarkAllSubMeshesAsTexturesDirty = RD._dirtyCallbacks[1]
        }
        isReadyForSubMesh(DD, zD, wD) {
          if (!this._isEnabled) return !0;
          const pD = this._material._disableBumpMap;
          if (DD._areTexturesDirty && zD.texturesEnabled) {
            if (this._texture && FD.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && FD.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (wD.getCaps().standardDerivatives && this._bumpTexture && FD.d.ClearCoatBumpTextureEnabled && !pD && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && FD.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(zD, wD) {
          this._isEnabled ? (zD.CLEARCOAT = !0, zD.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, zD.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, zD._areTexturesDirty && wD.texturesEnabled && (this._texture && FD.d.ClearCoatTextureEnabled ? (0, HD.eb)(this._texture, zD, "CLEARCOAT_TEXTURE") : zD.CLEARCOAT_TEXTURE = !1, this._textureRoughness && FD.d.ClearCoatTextureEnabled ? (0, HD.eb)(this._textureRoughness, zD, "CLEARCOAT_TEXTURE_ROUGHNESS") : zD.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && FD.d.ClearCoatBumpTextureEnabled ? (0, HD.eb)(this._bumpTexture, zD, "CLEARCOAT_BUMP") : zD.CLEARCOAT_BUMP = !1, zD.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === DD._DefaultIndexOfRefraction, this._isTintEnabled ? (zD.CLEARCOAT_TINT = !0, this._tintTexture && FD.d.ClearCoatTintTextureEnabled ? ((0, HD.eb)(this._tintTexture, zD, "CLEARCOAT_TINT_TEXTURE"), zD.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : zD.CLEARCOAT_TINT_TEXTURE = !1) : (zD.CLEARCOAT_TINT = !1, zD.CLEARCOAT_TINT_TEXTURE = !1))) : (zD.CLEARCOAT = !1, zD.CLEARCOAT_TEXTURE = !1, zD.CLEARCOAT_TEXTURE_ROUGHNESS = !1, zD.CLEARCOAT_BUMP = !1, zD.CLEARCOAT_TINT = !1, zD.CLEARCOAT_TINT_TEXTURE = !1, zD.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, zD.CLEARCOAT_DEFAULTIOR = !1, zD.CLEARCOAT_TEXTUREDIRECTUV = 0, zD.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, zD.CLEARCOAT_BUMPDIRECTUV = 0, zD.CLEARCOAT_REMAP_F0 = !1, zD.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, zD.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(DD, zD, wD, pD) {
          if (!this._isEnabled) return;
          const sD = pD.materialDefines,
            KD = this._material.isFrozen,
            rD = this._material._disableBumpMap,
            LD = this._material._invertNormalMapX,
            cD = this._material._invertNormalMapY;
          if (!DD.useUbo || !KD || !DD.isSync) {
            (this._texture || this._textureRoughness) && FD.d.ClearCoatTextureEnabled && (DD.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, HD.z)(this._texture, DD, "clearCoat"), this._textureRoughness && !sD.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, HD.z)(this._textureRoughness, DD, "clearCoatRoughness")), this._bumpTexture && wD.getCaps().standardDerivatives && FD.d.ClearCoatTextureEnabled && !rD && (DD.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, HD.z)(this._bumpTexture, DD, "clearCoatBump"), zD._mirroredCameraPosition ? DD.updateFloat2("vClearCoatTangentSpaceParams", LD ? 1 : -1, cD ? 1 : -1) : DD.updateFloat2("vClearCoatTangentSpaceParams", LD ? -1 : 1, cD ? -1 : 1)), this._tintTexture && FD.d.ClearCoatTintTextureEnabled && (DD.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, HD.z)(this._tintTexture, DD, "clearCoatTint")), DD.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const pD = 1 - this._indexOfRefraction,
              KD = 1 + this._indexOfRefraction,
              gD = Math.pow(-pD / KD, 2),
              RD = 1 / this._indexOfRefraction;
            DD.updateFloat4("vClearCoatRefractionParams", gD, RD, pD, KD), this._isTintEnabled && (DD.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), DD.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          zD.texturesEnabled && (this._texture && FD.d.ClearCoatTextureEnabled && DD.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !sD.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && FD.d.ClearCoatTextureEnabled && DD.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && wD.getCaps().standardDerivatives && FD.d.ClearCoatBumpTextureEnabled && !rD && DD.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && FD.d.ClearCoatTintTextureEnabled && DD.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(DD) {
          return this._texture === DD || (this._textureRoughness === DD || (this._bumpTexture === DD || this._tintTexture === DD))
        }
        getActiveTextures(DD) {
          this._texture && DD.push(this._texture), this._textureRoughness && DD.push(this._textureRoughness), this._bumpTexture && DD.push(this._bumpTexture), this._tintTexture && DD.push(this._tintTexture)
        }
        getAnimatables(DD) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && DD.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && DD.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && DD.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && DD.push(this._tintTexture)
        }
        dispose(DD) {
          DD && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(DD, zD, wD) {
          return DD.CLEARCOAT_BUMP && zD.addFallback(wD++, "CLEARCOAT_BUMP"), DD.CLEARCOAT_TINT && zD.addFallback(wD++, "CLEARCOAT_TINT"), DD.CLEARCOAT && zD.addFallback(wD++, "CLEARCOAT"), wD
        }
        getSamplers(DD) {
          DD.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, zD = new WeakMap, wD = new WeakMap, pD = new WeakMap, sD = new WeakMap, KD = new WeakMap, rD = new WeakMap, LD = new WeakMap, cD = new WeakMap, gD = new WeakMap, (() => {
        const zD = "function" === typeof Symbol && Symbol.metadata ? Object.create(XD[Symbol.metadata] ?? null) : void 0;
        RD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], AD = [(0, PD.C)()], UD = [(0, PD.C)()], fD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], ID = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], BD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], GD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], hD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], nD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], MD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], OD = [(0, PD.k)()], JD = [(0, PD.C)()], ED = [(0, PD.C)()], QD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], (0, VD.i)(DD, null, RD, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isEnabled" in DD,
            get: DD => DD.isEnabled,
            set: (DD, zD) => {
              DD.isEnabled = zD
            }
          },
          metadata: zD
        }, CD, xD), (0, VD.i)(DD, null, fD, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: DD => "indexOfRefraction" in DD,
            get: DD => DD.indexOfRefraction,
            set: (DD, zD) => {
              DD.indexOfRefraction = zD
            }
          },
          metadata: zD
        }, SD, iD), (0, VD.i)(DD, null, ID, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: DD => "texture" in DD,
            get: DD => DD.texture,
            set: (DD, zD) => {
              DD.texture = zD
            }
          },
          metadata: zD
        }, lD, WD), (0, VD.i)(DD, null, BD, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "useRoughnessFromMainTexture" in DD,
            get: DD => DD.useRoughnessFromMainTexture,
            set: (DD, zD) => {
              DD.useRoughnessFromMainTexture = zD
            }
          },
          metadata: zD
        }, ND, ZD), (0, VD.i)(DD, null, GD, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: DD => "textureRoughness" in DD,
            get: DD => DD.textureRoughness,
            set: (DD, zD) => {
              DD.textureRoughness = zD
            }
          },
          metadata: zD
        }, yD, mD), (0, VD.i)(DD, null, hD, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: DD => "remapF0OnInterfaceChange" in DD,
            get: DD => DD.remapF0OnInterfaceChange,
            set: (DD, zD) => {
              DD.remapF0OnInterfaceChange = zD
            }
          },
          metadata: zD
        }, eD, oD), (0, VD.i)(DD, null, nD, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "bumpTexture" in DD,
            get: DD => DD.bumpTexture,
            set: (DD, zD) => {
              DD.bumpTexture = zD
            }
          },
          metadata: zD
        }, uD, vD), (0, VD.i)(DD, null, MD, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isTintEnabled" in DD,
            get: DD => DD.isTintEnabled,
            set: (DD, zD) => {
              DD.isTintEnabled = zD
            }
          },
          metadata: zD
        }, tD, YD), (0, VD.i)(DD, null, QD, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "tintTexture" in DD,
            get: DD => DD.tintTexture,
            set: (DD, zD) => {
              DD.tintTexture = zD
            }
          },
          metadata: zD
        }, rz, Lz), (0, VD.i)(null, null, AD, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "intensity" in DD,
            get: DD => DD.intensity,
            set: (DD, zD) => {
              DD.intensity = zD
            }
          },
          metadata: zD
        }, TD, bD), (0, VD.i)(null, null, UD, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: DD => "roughness" in DD,
            get: DD => DD.roughness,
            set: (DD, zD) => {
              DD.roughness = zD
            }
          },
          metadata: zD
        }, jD, dD), (0, VD.i)(null, null, OD, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "tintColor" in DD,
            get: DD => DD.tintColor,
            set: (DD, zD) => {
              DD.tintColor = zD
            }
          },
          metadata: zD
        }, Dz, zz), (0, VD.i)(null, null, JD, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: DD => "tintColorAtDistance" in DD,
            get: DD => DD.tintColorAtDistance,
            set: (DD, zD) => {
              DD.tintColorAtDistance = zD
            }
          },
          metadata: zD
        }, wz, pz), (0, VD.i)(null, null, ED, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: DD => "tintThickness" in DD,
            get: DD => DD.tintThickness,
            set: (DD, zD) => {
              DD.tintThickness = zD
            }
          },
          metadata: zD
        }, sz, Kz), zD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zD
        })
      })(), DD._DefaultIndexOfRefraction = 1.5, DD
    })();
    class zz extends yD.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let wz = (() => {
      var DD, zD, wD, pD;
      let sD, KD, rD, LD, cD, gD, RD, AD = kD.c,
        UD = [],
        fD = [],
        ID = [],
        BD = [],
        GD = [],
        hD = [],
        nD = [],
        MD = [],
        OD = [],
        JD = [],
        ED = [],
        QD = [],
        XD = [],
        CD = [];
      return DD = class extends AD {
        get isEnabled() {
          return (0, VD.c)(this, zD, "f")
        }
        set isEnabled(DD) {
          (0, VD.g)(this, zD, DD, "f")
        }
        get texture() {
          return (0, VD.c)(this, wD, "f")
        }
        set texture(DD) {
          (0, VD.g)(this, wD, DD, "f")
        }
        get thicknessTexture() {
          return (0, VD.c)(this, pD, "f")
        }
        set thicknessTexture(DD) {
          (0, VD.g)(this, pD, DD, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(sD) {
          let KD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(sD, "PBRIridescence", 110, new zz, KD), this._isEnabled = !1, zD.set(this, (0, VD.m)(this, UD, !1)), this.intensity = ((0, VD.m)(this, fD), (0, VD.m)(this, ID, 1)), this.minimumThickness = ((0, VD.m)(this, BD), (0, VD.m)(this, GD, DD._DefaultMinimumThickness)), this.maximumThickness = ((0, VD.m)(this, hD), (0, VD.m)(this, nD, DD._DefaultMaximumThickness)), this.indexOfRefraction = ((0, VD.m)(this, MD), (0, VD.m)(this, OD, DD._DefaultIndexOfRefraction)), this._texture = ((0, VD.m)(this, JD), null), wD.set(this, (0, VD.m)(this, ED, null)), this._thicknessTexture = ((0, VD.m)(this, QD), null), pD.set(this, (0, VD.m)(this, XD, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, VD.m)(this, CD), this._internalMarkAllSubMeshesAsTexturesDirty = sD._dirtyCallbacks[1]
        }
        isReadyForSubMesh(DD, zD) {
          if (!this._isEnabled) return !0;
          if (DD._areTexturesDirty && zD.texturesEnabled) {
            if (this._texture && FD.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && FD.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(DD, zD) {
          this._isEnabled ? (DD.IRIDESCENCE = !0, DD._areTexturesDirty && zD.texturesEnabled && (this._texture && FD.d.IridescenceTextureEnabled ? (0, HD.eb)(this._texture, DD, "IRIDESCENCE_TEXTURE") : DD.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && FD.d.IridescenceTextureEnabled ? (0, HD.eb)(this._thicknessTexture, DD, "IRIDESCENCE_THICKNESS_TEXTURE") : DD.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (DD.IRIDESCENCE = !1, DD.IRIDESCENCE_TEXTURE = !1, DD.IRIDESCENCE_THICKNESS_TEXTURE = !1, DD.IRIDESCENCE_TEXTUREDIRECTUV = 0, DD.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(DD, zD) {
          if (!this._isEnabled) return;
          const wD = this._material.isFrozen;
          DD.useUbo && wD && DD.isSync || ((this._texture || this._thicknessTexture) && FD.d.IridescenceTextureEnabled && (DD.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, HD.z)(this._texture, DD, "iridescence"), this._thicknessTexture && (0, HD.z)(this._thicknessTexture, DD, "iridescenceThickness")), DD.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), zD.texturesEnabled && (this._texture && FD.d.IridescenceTextureEnabled && DD.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && FD.d.IridescenceTextureEnabled && DD.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(DD) {
          return this._texture === DD || this._thicknessTexture === DD
        }
        getActiveTextures(DD) {
          this._texture && DD.push(this._texture), this._thicknessTexture && DD.push(this._thicknessTexture)
        }
        getAnimatables(DD) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && DD.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && DD.push(this._thicknessTexture)
        }
        dispose(DD) {
          DD && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(DD, zD, wD) {
          return DD.IRIDESCENCE && zD.addFallback(wD++, "IRIDESCENCE"), wD
        }
        getSamplers(DD) {
          DD.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, zD = new WeakMap, wD = new WeakMap, pD = new WeakMap, (() => {
        const zD = "function" === typeof Symbol && Symbol.metadata ? Object.create(AD[Symbol.metadata] ?? null) : void 0;
        sD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], KD = [(0, PD.C)()], rD = [(0, PD.C)()], LD = [(0, PD.C)()], cD = [(0, PD.C)()], gD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], RD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], (0, VD.i)(DD, null, sD, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isEnabled" in DD,
            get: DD => DD.isEnabled,
            set: (DD, zD) => {
              DD.isEnabled = zD
            }
          },
          metadata: zD
        }, UD, fD), (0, VD.i)(DD, null, gD, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: DD => "texture" in DD,
            get: DD => DD.texture,
            set: (DD, zD) => {
              DD.texture = zD
            }
          },
          metadata: zD
        }, ED, QD), (0, VD.i)(DD, null, RD, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "thicknessTexture" in DD,
            get: DD => DD.thicknessTexture,
            set: (DD, zD) => {
              DD.thicknessTexture = zD
            }
          },
          metadata: zD
        }, XD, CD), (0, VD.i)(null, null, KD, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "intensity" in DD,
            get: DD => DD.intensity,
            set: (DD, zD) => {
              DD.intensity = zD
            }
          },
          metadata: zD
        }, ID, BD), (0, VD.i)(null, null, rD, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: DD => "minimumThickness" in DD,
            get: DD => DD.minimumThickness,
            set: (DD, zD) => {
              DD.minimumThickness = zD
            }
          },
          metadata: zD
        }, GD, hD), (0, VD.i)(null, null, LD, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: DD => "maximumThickness" in DD,
            get: DD => DD.maximumThickness,
            set: (DD, zD) => {
              DD.maximumThickness = zD
            }
          },
          metadata: zD
        }, nD, MD), (0, VD.i)(null, null, cD, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: DD => "indexOfRefraction" in DD,
            get: DD => DD.indexOfRefraction,
            set: (DD, zD) => {
              DD.indexOfRefraction = zD
            }
          },
          metadata: zD
        }, OD, JD), zD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zD
        })
      })(), DD._DefaultMinimumThickness = 100, DD._DefaultMaximumThickness = 400, DD._DefaultIndexOfRefraction = 1.3, DD
    })();
    class pz extends yD.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let sz = (() => {
      var DD, zD, wD, pD;
      let sD, KD, rD, LD, cD, gD = kD.c,
        RD = [],
        AD = [],
        UD = [],
        fD = [],
        ID = [],
        BD = [],
        GD = [],
        hD = [],
        nD = [],
        MD = [];
      return DD = class extends gD {
        get isEnabled() {
          return (0, VD.c)(this, zD, "f")
        }
        set isEnabled(DD) {
          (0, VD.g)(this, zD, DD, "f")
        }
        set angle(DD) {
          this.direction.x = Math.cos(DD), this.direction.y = Math.sin(DD)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, VD.c)(this, wD, "f")
        }
        set texture(DD) {
          (0, VD.g)(this, wD, DD, "f")
        }
        get legacy() {
          return (0, VD.c)(this, pD, "f")
        }
        set legacy(DD) {
          (0, VD.g)(this, pD, DD, "f")
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
        constructor(DD) {
          let sD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(DD, "PBRAnisotropic", 110, new pz, sD), this._isEnabled = !1, zD.set(this, (0, VD.m)(this, RD, !1)), this.intensity = ((0, VD.m)(this, AD), (0, VD.m)(this, UD, 1)), this.direction = ((0, VD.m)(this, fD), (0, VD.m)(this, ID, new ND.r(1, 0))), this._texture = ((0, VD.m)(this, BD), null), wD.set(this, (0, VD.m)(this, GD, null)), this._legacy = ((0, VD.m)(this, hD), !1), pD.set(this, (0, VD.m)(this, nD, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, VD.m)(this, MD), this._internalMarkAllSubMeshesAsTexturesDirty = DD._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = DD._dirtyCallbacks[16]
        }
        isReadyForSubMesh(DD, zD) {
          return !this._isEnabled || !(DD._areTexturesDirty && zD.texturesEnabled && this._texture && FD.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(DD, zD, wD) {
          this._isEnabled ? (DD.ANISOTROPIC = this._isEnabled, this._isEnabled && !wD.isVerticesDataPresent(ZD.k.TangentKind) && (DD._needUVs = !0, DD.MAINUV1 = !0), DD._areTexturesDirty && zD.texturesEnabled && (this._texture && FD.d.AnisotropicTextureEnabled ? (0, HD.eb)(this._texture, DD, "ANISOTROPIC_TEXTURE") : DD.ANISOTROPIC_TEXTURE = !1), DD._areMiscDirty && (DD.ANISOTROPIC_LEGACY = this._legacy)) : (DD.ANISOTROPIC = !1, DD.ANISOTROPIC_TEXTURE = !1, DD.ANISOTROPIC_TEXTUREDIRECTUV = 0, DD.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(DD, zD) {
          if (!this._isEnabled) return;
          const wD = this._material.isFrozen;
          DD.useUbo && wD && DD.isSync || (this._texture && FD.d.AnisotropicTextureEnabled && (DD.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, HD.z)(this._texture, DD, "anisotropy")), DD.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), zD.texturesEnabled && this._texture && FD.d.AnisotropicTextureEnabled && DD.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(DD) {
          return this._texture === DD
        }
        getActiveTextures(DD) {
          this._texture && DD.push(this._texture)
        }
        getAnimatables(DD) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && DD.push(this._texture)
        }
        dispose(DD) {
          DD && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(DD, zD, wD) {
          return DD.ANISOTROPIC && zD.addFallback(wD++, "ANISOTROPIC"), wD
        }
        getSamplers(DD) {
          DD.push("anisotropySampler")
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
        parse(DD, zD, wD) {
          super.parse(DD, zD, wD), void 0 === DD.legacy && (this.legacy = !0)
        }
      }, zD = new WeakMap, wD = new WeakMap, pD = new WeakMap, (() => {
        const zD = "function" === typeof Symbol && Symbol.metadata ? Object.create(gD[Symbol.metadata] ?? null) : void 0;
        sD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], KD = [(0, PD.C)()], rD = [(0, PD.A)()], LD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], cD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], (0, VD.i)(DD, null, sD, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isEnabled" in DD,
            get: DD => DD.isEnabled,
            set: (DD, zD) => {
              DD.isEnabled = zD
            }
          },
          metadata: zD
        }, RD, AD), (0, VD.i)(DD, null, LD, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: DD => "texture" in DD,
            get: DD => DD.texture,
            set: (DD, zD) => {
              DD.texture = zD
            }
          },
          metadata: zD
        }, GD, hD), (0, VD.i)(DD, null, cD, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: DD => "legacy" in DD,
            get: DD => DD.legacy,
            set: (DD, zD) => {
              DD.legacy = zD
            }
          },
          metadata: zD
        }, nD, MD), (0, VD.i)(null, null, KD, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "intensity" in DD,
            get: DD => DD.intensity,
            set: (DD, zD) => {
              DD.intensity = zD
            }
          },
          metadata: zD
        }, UD, fD), (0, VD.i)(null, null, rD, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: DD => "direction" in DD,
            get: DD => DD.direction,
            set: (DD, zD) => {
              DD.direction = zD
            }
          },
          metadata: zD
        }, ID, BD), zD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zD
        })
      })(), DD
    })();
    class Kz extends yD.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let rz = (() => {
      var DD, zD, wD, pD, sD, KD, rD, LD;
      let cD, gD, RD, AD, UD, fD, ID, BD, GD, hD = kD.c,
        nD = [],
        MD = [],
        OD = [],
        JD = [],
        ED = [],
        QD = [],
        XD = [],
        CD = [],
        xD = [],
        TD = [],
        bD = [],
        jD = [],
        dD = [],
        SD = [],
        iD = [],
        lD = [],
        WD = [],
        ND = [];
      return DD = class extends hD {
        get isEnabled() {
          return (0, VD.c)(this, zD, "f")
        }
        set isEnabled(DD) {
          (0, VD.g)(this, zD, DD, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, VD.c)(this, wD, "f")
        }
        set linkSheenWithAlbedo(DD) {
          (0, VD.g)(this, wD, DD, "f")
        }
        get texture() {
          return (0, VD.c)(this, pD, "f")
        }
        set texture(DD) {
          (0, VD.g)(this, pD, DD, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, VD.c)(this, sD, "f")
        }
        set useRoughnessFromMainTexture(DD) {
          (0, VD.g)(this, sD, DD, "f")
        }
        get roughness() {
          return (0, VD.c)(this, KD, "f")
        }
        set roughness(DD) {
          (0, VD.g)(this, KD, DD, "f")
        }
        get textureRoughness() {
          return (0, VD.c)(this, rD, "f")
        }
        set textureRoughness(DD) {
          (0, VD.g)(this, rD, DD, "f")
        }
        get albedoScaling() {
          return (0, VD.c)(this, LD, "f")
        }
        set albedoScaling(DD) {
          (0, VD.g)(this, LD, DD, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(DD) {
          let cD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(DD, "Sheen", 120, new Kz, cD), this._isEnabled = !1, zD.set(this, (0, VD.m)(this, nD, !1)), this._linkSheenWithAlbedo = ((0, VD.m)(this, MD), !1), wD.set(this, (0, VD.m)(this, OD, !1)), this.intensity = ((0, VD.m)(this, JD), (0, VD.m)(this, ED, 1)), this.color = ((0, VD.m)(this, QD), (0, VD.m)(this, XD, aD.d.White())), this._texture = ((0, VD.m)(this, CD), null), pD.set(this, (0, VD.m)(this, xD, null)), this._useRoughnessFromMainTexture = ((0, VD.m)(this, TD), !0), sD.set(this, (0, VD.m)(this, bD, !0)), this._roughness = ((0, VD.m)(this, jD), null), KD.set(this, (0, VD.m)(this, dD, null)), this._textureRoughness = ((0, VD.m)(this, SD), null), rD.set(this, (0, VD.m)(this, iD, null)), this._albedoScaling = ((0, VD.m)(this, lD), !1), LD.set(this, (0, VD.m)(this, WD, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, VD.m)(this, ND), this._internalMarkAllSubMeshesAsTexturesDirty = DD._dirtyCallbacks[1]
        }
        isReadyForSubMesh(DD, zD) {
          if (!this._isEnabled) return !0;
          if (DD._areTexturesDirty && zD.texturesEnabled) {
            if (this._texture && FD.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && FD.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(DD, zD) {
          this._isEnabled ? (DD.SHEEN = !0, DD.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, DD.SHEEN_ROUGHNESS = null !== this._roughness, DD.SHEEN_ALBEDOSCALING = this._albedoScaling, DD.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, DD._areTexturesDirty && zD.texturesEnabled && (this._texture && FD.d.SheenTextureEnabled ? ((0, HD.eb)(this._texture, DD, "SHEEN_TEXTURE"), DD.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : DD.SHEEN_TEXTURE = !1, this._textureRoughness && FD.d.SheenTextureEnabled ? (0, HD.eb)(this._textureRoughness, DD, "SHEEN_TEXTURE_ROUGHNESS") : DD.SHEEN_TEXTURE_ROUGHNESS = !1)) : (DD.SHEEN = !1, DD.SHEEN_TEXTURE = !1, DD.SHEEN_TEXTURE_ROUGHNESS = !1, DD.SHEEN_LINKWITHALBEDO = !1, DD.SHEEN_ROUGHNESS = !1, DD.SHEEN_ALBEDOSCALING = !1, DD.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, DD.SHEEN_GAMMATEXTURE = !1, DD.SHEEN_TEXTUREDIRECTUV = 0, DD.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(DD, zD, wD, pD) {
          if (!this._isEnabled) return;
          const sD = pD.materialDefines,
            KD = this._material.isFrozen;
          DD.useUbo && KD && DD.isSync || ((this._texture || this._textureRoughness) && FD.d.SheenTextureEnabled && (DD.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, HD.z)(this._texture, DD, "sheen"), this._textureRoughness && !sD.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, HD.z)(this._textureRoughness, DD, "sheenRoughness")), DD.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && DD.updateFloat("vSheenRoughness", this._roughness)), zD.texturesEnabled && (this._texture && FD.d.SheenTextureEnabled && DD.setTexture("sheenSampler", this._texture), this._textureRoughness && !sD.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && FD.d.SheenTextureEnabled && DD.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(DD) {
          return this._texture === DD || this._textureRoughness === DD
        }
        getActiveTextures(DD) {
          this._texture && DD.push(this._texture), this._textureRoughness && DD.push(this._textureRoughness)
        }
        getAnimatables(DD) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && DD.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && DD.push(this._textureRoughness)
        }
        dispose(DD) {
          DD && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(DD, zD, wD) {
          return DD.SHEEN && zD.addFallback(wD++, "SHEEN"), wD
        }
        getSamplers(DD) {
          DD.push("sheenSampler", "sheenRoughnessSampler")
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
      }, zD = new WeakMap, wD = new WeakMap, pD = new WeakMap, sD = new WeakMap, KD = new WeakMap, rD = new WeakMap, LD = new WeakMap, (() => {
        const zD = "function" === typeof Symbol && Symbol.metadata ? Object.create(hD[Symbol.metadata] ?? null) : void 0;
        cD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], gD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], RD = [(0, PD.C)()], AD = [(0, PD.k)()], UD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], fD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], ID = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], BD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], GD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], (0, VD.i)(DD, null, cD, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isEnabled" in DD,
            get: DD => DD.isEnabled,
            set: (DD, zD) => {
              DD.isEnabled = zD
            }
          },
          metadata: zD
        }, nD, MD), (0, VD.i)(DD, null, gD, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: DD => "linkSheenWithAlbedo" in DD,
            get: DD => DD.linkSheenWithAlbedo,
            set: (DD, zD) => {
              DD.linkSheenWithAlbedo = zD
            }
          },
          metadata: zD
        }, OD, JD), (0, VD.i)(DD, null, UD, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: DD => "texture" in DD,
            get: DD => DD.texture,
            set: (DD, zD) => {
              DD.texture = zD
            }
          },
          metadata: zD
        }, xD, TD), (0, VD.i)(DD, null, fD, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "useRoughnessFromMainTexture" in DD,
            get: DD => DD.useRoughnessFromMainTexture,
            set: (DD, zD) => {
              DD.useRoughnessFromMainTexture = zD
            }
          },
          metadata: zD
        }, bD, jD), (0, VD.i)(DD, null, ID, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: DD => "roughness" in DD,
            get: DD => DD.roughness,
            set: (DD, zD) => {
              DD.roughness = zD
            }
          },
          metadata: zD
        }, dD, SD), (0, VD.i)(DD, null, BD, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: DD => "textureRoughness" in DD,
            get: DD => DD.textureRoughness,
            set: (DD, zD) => {
              DD.textureRoughness = zD
            }
          },
          metadata: zD
        }, iD, lD), (0, VD.i)(DD, null, GD, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: DD => "albedoScaling" in DD,
            get: DD => DD.albedoScaling,
            set: (DD, zD) => {
              DD.albedoScaling = zD
            }
          },
          metadata: zD
        }, WD, ND), (0, VD.i)(null, null, RD, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "intensity" in DD,
            get: DD => DD.intensity,
            set: (DD, zD) => {
              DD.intensity = zD
            }
          },
          metadata: zD
        }, ED, QD), (0, VD.i)(null, null, AD, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: DD => "color" in DD,
            get: DD => DD.color,
            set: (DD, zD) => {
              DD.color = zD
            }
          },
          metadata: zD
        }, XD, CD), zD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zD
        })
      })(), DD
    })();
    class Lz extends yD.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let cz = (() => {
      var DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD;
      let hD, nD, MD, OD, JD, ED, QD, XD, CD, xD, TD, bD, jD, dD, SD, iD, lD, WD, ZD, yD, mD, eD, oD, uD, vD, tD, YD, qD, Dz, zz, wz = kD.c,
        pz = [],
        sz = [],
        Kz = [],
        rz = [],
        cz = [],
        gz = [],
        Rz = [],
        Az = [],
        Uz = [],
        fz = [],
        Iz = [],
        Bz = [],
        Gz = [],
        hz = [],
        nz = [],
        Mz = [],
        Oz = [],
        Jz = [],
        Ez = [],
        Qz = [],
        Xz = [],
        Vz = [],
        Pz = [],
        Cz = [],
        xz = [],
        Tz = [],
        bz = [],
        jz = [],
        dz = [],
        Sz = [],
        iz = [],
        lz = [],
        Wz = [],
        Nz = [],
        Zz = [],
        yz = [],
        kz = [],
        mz = [],
        ez = [],
        oz = [],
        az = [],
        uz = [],
        vz = [],
        tz = [],
        Fz = [],
        Yz = [],
        Hz = [],
        qz = [],
        Dw = [],
        zw = [],
        ww = [],
        pw = [],
        sw = [],
        Kw = [],
        rw = [],
        Lw = [],
        gw = [],
        Rw = [],
        Aw = [],
        Uw = [];
      return DD = class extends wz {
        get isRefractionEnabled() {
          return (0, VD.c)(this, zD, "f")
        }
        set isRefractionEnabled(DD) {
          (0, VD.g)(this, zD, DD, "f")
        }
        get isTranslucencyEnabled() {
          return (0, VD.c)(this, wD, "f")
        }
        set isTranslucencyEnabled(DD) {
          (0, VD.g)(this, wD, DD, "f")
        }
        get isDispersionEnabled() {
          return (0, VD.c)(this, pD, "f")
        }
        set isDispersionEnabled(DD) {
          (0, VD.g)(this, pD, DD, "f")
        }
        get isScatteringEnabled() {
          return (0, VD.c)(this, sD, "f")
        }
        set isScatteringEnabled(DD) {
          (0, VD.g)(this, sD, DD, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(DD) {
          this._scene.enableSubSurfaceForPrePass() && DD && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(DD))
        }
        get useAlbedoToTintRefraction() {
          return (0, VD.c)(this, KD, "f")
        }
        set useAlbedoToTintRefraction(DD) {
          (0, VD.g)(this, KD, DD, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, VD.c)(this, rD, "f")
        }
        set useAlbedoToTintTranslucency(DD) {
          (0, VD.g)(this, rD, DD, "f")
        }
        get thicknessTexture() {
          return (0, VD.c)(this, LD, "f")
        }
        set thicknessTexture(DD) {
          (0, VD.g)(this, LD, DD, "f")
        }
        get refractionTexture() {
          return (0, VD.c)(this, cD, "f")
        }
        set refractionTexture(DD) {
          (0, VD.g)(this, cD, DD, "f")
        }
        get indexOfRefraction() {
          return (0, VD.c)(this, gD, "f")
        }
        set indexOfRefraction(DD) {
          (0, VD.g)(this, gD, DD, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(DD) {
          const zD = DD >= 1 ? DD : -1;
          this._volumeIndexOfRefraction !== zD && (this._volumeIndexOfRefraction = zD, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, VD.c)(this, RD, "f")
        }
        set invertRefractionY(DD) {
          (0, VD.g)(this, RD, DD, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, VD.c)(this, AD, "f")
        }
        set linkRefractionWithTransparency(DD) {
          (0, VD.g)(this, AD, DD, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, VD.c)(this, UD, "f")
        }
        set useMaskFromThicknessTexture(DD) {
          (0, VD.g)(this, UD, DD, "f")
        }
        get refractionIntensityTexture() {
          return (0, VD.c)(this, fD, "f")
        }
        set refractionIntensityTexture(DD) {
          (0, VD.g)(this, fD, DD, "f")
        }
        get translucencyIntensityTexture() {
          return (0, VD.c)(this, ID, "f")
        }
        set translucencyIntensityTexture(DD) {
          (0, VD.g)(this, ID, DD, "f")
        }
        get translucencyColorTexture() {
          return (0, VD.c)(this, BD, "f")
        }
        set translucencyColorTexture(DD) {
          (0, VD.g)(this, BD, DD, "f")
        }
        get useGltfStyleTextures() {
          return (0, VD.c)(this, GD, "f")
        }
        set useGltfStyleTextures(DD) {
          (0, VD.g)(this, GD, DD, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(DD) {
          this.legacyTranslucency = DD
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
        constructor(hD) {
          let nD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(hD, "PBRSubSurface", 130, new Lz, nD), this._isRefractionEnabled = !1, zD.set(this, (0, VD.m)(this, pz, !1)), this._isTranslucencyEnabled = ((0, VD.m)(this, sz), !1), wD.set(this, (0, VD.m)(this, Kz, !1)), this._isDispersionEnabled = ((0, VD.m)(this, rz), !1), pD.set(this, (0, VD.m)(this, cz, !1)), this._isScatteringEnabled = ((0, VD.m)(this, gz), !1), sD.set(this, (0, VD.m)(this, Rz, !1)), this._scatteringDiffusionProfileIndex = ((0, VD.m)(this, Az), (0, VD.m)(this, Uz, 0)), this.refractionIntensity = ((0, VD.m)(this, fz), (0, VD.m)(this, Iz, 1)), this.translucencyIntensity = ((0, VD.m)(this, Bz), (0, VD.m)(this, Gz, 1)), this._useAlbedoToTintRefraction = ((0, VD.m)(this, hz), !1), KD.set(this, (0, VD.m)(this, nz, !1)), this._useAlbedoToTintTranslucency = ((0, VD.m)(this, Mz), !1), rD.set(this, (0, VD.m)(this, Oz, !1)), this._thicknessTexture = ((0, VD.m)(this, Jz), null), LD.set(this, (0, VD.m)(this, Ez, null)), this._refractionTexture = ((0, VD.m)(this, Qz), null), cD.set(this, (0, VD.m)(this, Xz, null)), this._indexOfRefraction = ((0, VD.m)(this, Vz), 1.5), gD.set(this, (0, VD.m)(this, Pz, 1.5)), this._volumeIndexOfRefraction = ((0, VD.m)(this, Cz), (0, VD.m)(this, xz, -1)), this._invertRefractionY = ((0, VD.m)(this, Tz), !1), RD.set(this, (0, VD.m)(this, bz, !1)), this._linkRefractionWithTransparency = ((0, VD.m)(this, jz), !1), AD.set(this, (0, VD.m)(this, dz, !1)), this.minimumThickness = ((0, VD.m)(this, Sz), (0, VD.m)(this, iz, 0)), this.maximumThickness = ((0, VD.m)(this, lz), (0, VD.m)(this, Wz, 1)), this.useThicknessAsDepth = ((0, VD.m)(this, Nz), (0, VD.m)(this, Zz, !1)), this.tintColor = ((0, VD.m)(this, yz), (0, VD.m)(this, kz, aD.d.White())), this.tintColorAtDistance = ((0, VD.m)(this, mz), (0, VD.m)(this, ez, 1)), this.dispersion = ((0, VD.m)(this, oz), (0, VD.m)(this, az, 0)), this.diffusionDistance = ((0, VD.m)(this, uz), (0, VD.m)(this, vz, aD.d.White())), this._useMaskFromThicknessTexture = ((0, VD.m)(this, tz), !1), UD.set(this, (0, VD.m)(this, Fz, !1)), this._refractionIntensityTexture = ((0, VD.m)(this, Yz), null), fD.set(this, (0, VD.m)(this, Hz, null)), this._translucencyIntensityTexture = ((0, VD.m)(this, qz), null), ID.set(this, (0, VD.m)(this, Dw, null)), this.translucencyColor = ((0, VD.m)(this, zw), (0, VD.m)(this, ww, null)), this._translucencyColorTexture = ((0, VD.m)(this, pw), null), BD.set(this, (0, VD.m)(this, sw, null)), this._useGltfStyleTextures = ((0, VD.m)(this, Kw), !0), GD.set(this, (0, VD.m)(this, rw, !0)), this.applyAlbedoAfterSubSurface = ((0, VD.m)(this, Lw), (0, VD.m)(this, gw, DD.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, VD.m)(this, Rw), (0, VD.m)(this, Aw, DD.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, VD.m)(this, Uw), this._scene = hD.Ul(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = hD._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = hD._dirtyCallbacks[32]
        }
        isReadyForSubMesh(DD, zD) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (DD._areTexturesDirty && zD.texturesEnabled) {
            if (this._thicknessTexture && FD.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && FD.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && FD.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && FD.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const DD = this._getRefractionTexture(zD);
            if (DD && FD.d.RefractionTextureEnabled && !DD.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(DD, zD) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return DD.SUBSURFACE = !1, DD.SS_DISPERSION = !1, DD.SS_TRANSLUCENCY = !1, DD.SS_SCATTERING = !1, DD.SS_REFRACTION = !1, DD.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, DD.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, DD.SS_THICKNESSANDMASK_TEXTURE = !1, DD.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, DD.SS_HAS_THICKNESS = !1, DD.SS_REFRACTIONINTENSITY_TEXTURE = !1, DD.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, DD.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, DD.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, DD.SS_REFRACTIONMAP_3D = !1, DD.SS_REFRACTIONMAP_OPPOSITEZ = !1, DD.SS_LODINREFRACTIONALPHA = !1, DD.SS_GAMMAREFRACTION = !1, DD.SS_RGBDREFRACTION = !1, DD.SS_LINEARSPECULARREFRACTION = !1, DD.SS_LINKREFRACTIONTOTRANSPARENCY = !1, DD.SS_ALBEDOFORREFRACTIONTINT = !1, DD.SS_ALBEDOFORTRANSLUCENCYTINT = !1, DD.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, DD.SS_USE_THICKNESS_AS_DEPTH = !1, DD.SS_USE_GLTF_TEXTURES = !1, DD.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, DD.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, DD.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(DD.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (DD._areTexturesDirty) {
            if (DD.SUBSURFACE = !0, DD.SS_DISPERSION = this._isDispersionEnabled, DD.SS_TRANSLUCENCY = this._isTranslucencyEnabled, DD.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, DD.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, DD.SS_SCATTERING = this._isScatteringEnabled, DD.SS_THICKNESSANDMASK_TEXTURE = !1, DD.SS_REFRACTIONINTENSITY_TEXTURE = !1, DD.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, DD.SS_HAS_THICKNESS = !1, DD.SS_USE_GLTF_TEXTURES = !1, DD.SS_REFRACTION = !1, DD.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, DD.SS_REFRACTIONMAP_3D = !1, DD.SS_GAMMAREFRACTION = !1, DD.SS_RGBDREFRACTION = !1, DD.SS_LINEARSPECULARREFRACTION = !1, DD.SS_REFRACTIONMAP_OPPOSITEZ = !1, DD.SS_LODINREFRACTIONALPHA = !1, DD.SS_LINKREFRACTIONTOTRANSPARENCY = !1, DD.SS_ALBEDOFORREFRACTIONTINT = !1, DD.SS_ALBEDOFORTRANSLUCENCYTINT = !1, DD.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, DD.SS_USE_THICKNESS_AS_DEPTH = !1, DD.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, DD.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, DD._areTexturesDirty && zD.texturesEnabled && (this._thicknessTexture && FD.d.ThicknessTextureEnabled && (0, HD.eb)(this._thicknessTexture, DD, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && FD.d.RefractionIntensityTextureEnabled && (0, HD.eb)(this._refractionIntensityTexture, DD, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && FD.d.TranslucencyIntensityTextureEnabled && (0, HD.eb)(this._translucencyIntensityTexture, DD, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && FD.d.TranslucencyColorTextureEnabled && ((0, HD.eb)(this._translucencyColorTexture, DD, "SS_TRANSLUCENCYCOLOR_TEXTURE"), DD.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), DD.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, DD.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, DD.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, DD.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && zD.texturesEnabled) {
              const wD = this._getRefractionTexture(zD);
              wD && FD.d.RefractionTextureEnabled && (DD.SS_REFRACTION = !0, DD.SS_REFRACTIONMAP_3D = wD.isCube, DD.SS_GAMMAREFRACTION = wD.gammaSpace, DD.SS_RGBDREFRACTION = wD.isRGBD, DD.SS_LINEARSPECULARREFRACTION = wD.linearSpecularLOD, DD.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && wD.isCube ? !wD.invertZ : wD.invertZ, DD.SS_LODINREFRACTIONALPHA = wD.lodLevelInAlpha, DD.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, DD.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, DD.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = wD.isCube && wD.boundingBoxSize, DD.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (DD.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(DD, zD, wD, pD) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) DD.updateFloat2("vThicknessParam", 0, 0);
            else {
              pD.getRenderingMesh().getWorldMatrix().decompose(ND.n.WI[0]);
              const zD = Math.max(Math.abs(ND.n.WI[0].x), Math.abs(ND.n.WI[0].y), Math.abs(ND.n.WI[0].z));
              DD.updateFloat2("vThicknessParam", this.minimumThickness * zD, (this.maximumThickness - this.minimumThickness) * zD)
            }
        }
        bindForSubMesh(DD, zD, wD, pD) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const sD = pD.materialDefines,
            KD = this._material.isFrozen,
            rD = this._material.realTimeFiltering,
            LD = sD.LODBASEDMICROSFURACE,
            cD = this._getRefractionTexture(zD);
          if (!DD.useUbo || !KD || !DD.isSync) {
            if (this._thicknessTexture && FD.d.ThicknessTextureEnabled && (DD.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, HD.z)(this._thicknessTexture, DD, "thickness")), this._refractionIntensityTexture && FD.d.RefractionIntensityTextureEnabled && sD.SS_REFRACTIONINTENSITY_TEXTURE && (DD.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, HD.z)(this._refractionIntensityTexture, DD, "refractionIntensity")), this._translucencyColorTexture && FD.d.TranslucencyColorTextureEnabled && sD.SS_TRANSLUCENCYCOLOR_TEXTURE && (DD.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, HD.z)(this._translucencyColorTexture, DD, "translucencyColor")), this._translucencyIntensityTexture && FD.d.TranslucencyIntensityTextureEnabled && sD.SS_TRANSLUCENCYINTENSITY_TEXTURE && (DD.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, HD.z)(this._translucencyIntensityTexture, DD, "translucencyIntensity")), cD && FD.d.RefractionTextureEnabled) {
              DD.i5("refractionMatrix", cD.getRefractionTextureMatrix());
              let zD = 1;
              cD.isCube || cD.depth && (zD = cD.depth);
              const wD = cD.getSize().width,
                pD = this.volumeIndexOfRefraction;
              if (DD.updateFloat4("vRefractionInfos", cD.level, 1 / pD, zD, this._invertRefractionY ? -1 : 1), DD.updateFloat4("vRefractionMicrosurfaceInfos", wD, cD.lodGenerationScale, cD.lodGenerationOffset, 1 / this.indexOfRefraction), rD && DD.updateFloat2("vRefractionFilteringInfo", wD, Math.log2(wD)), cD.boundingBoxSize) {
                const zD = cD;
                DD.updateVector3("vRefractionPosition", zD.boundingBoxPosition), DD.updateVector3("vRefractionSize", zD.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && DD.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), DD.updateColor3("vDiffusionDistance", this.diffusionDistance), DD.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), DD.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), DD.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), DD.updateFloat("dispersion", this.dispersion)
          }
          zD.texturesEnabled && (this._thicknessTexture && FD.d.ThicknessTextureEnabled && DD.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && FD.d.RefractionIntensityTextureEnabled && sD.SS_REFRACTIONINTENSITY_TEXTURE && DD.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && FD.d.TranslucencyIntensityTextureEnabled && sD.SS_TRANSLUCENCYINTENSITY_TEXTURE && DD.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && FD.d.TranslucencyColorTextureEnabled && sD.SS_TRANSLUCENCYCOLOR_TEXTURE && DD.setTexture("translucencyColorSampler", this._translucencyColorTexture), cD && FD.d.RefractionTextureEnabled && (LD ? DD.setTexture("refractionSampler", cD) : (DD.setTexture("refractionSampler", cD._lodTextureMid || cD), DD.setTexture("refractionSamplerLow", cD._lodTextureLow || cD), DD.setTexture("refractionSamplerHigh", cD._lodTextureHigh || cD))))
        }
        _getRefractionTexture(DD) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? DD.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(DD) {
          FD.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && DD.push(this._refractionTexture)
        }
        hasTexture(DD) {
          return this._thicknessTexture === DD || (this._refractionTexture === DD || (this._refractionIntensityTexture === DD || (this._translucencyIntensityTexture === DD || this._translucencyColorTexture === DD)))
        }
        hasRenderTargetTextures() {
          return !!(FD.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(DD) {
          this._thicknessTexture && DD.push(this._thicknessTexture), this._refractionTexture && DD.push(this._refractionTexture), this._refractionIntensityTexture && DD.push(this._refractionIntensityTexture), this._translucencyColorTexture && DD.push(this._translucencyColorTexture), this._translucencyIntensityTexture && DD.push(this._translucencyIntensityTexture)
        }
        getAnimatables(DD) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && DD.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && DD.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && DD.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && DD.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && DD.push(this._translucencyIntensityTexture)
        }
        dispose(DD) {
          DD && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(DD, zD, wD) {
          return DD.SS_SCATTERING && zD.addFallback(wD++, "SS_SCATTERING"), DD.SS_TRANSLUCENCY && zD.addFallback(wD++, "SS_TRANSLUCENCY"), wD
        }
        getSamplers(DD) {
          DD.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, zD = new WeakMap, wD = new WeakMap, pD = new WeakMap, sD = new WeakMap, KD = new WeakMap, rD = new WeakMap, LD = new WeakMap, cD = new WeakMap, gD = new WeakMap, RD = new WeakMap, AD = new WeakMap, UD = new WeakMap, fD = new WeakMap, ID = new WeakMap, BD = new WeakMap, GD = new WeakMap, (() => {
        const zD = "function" === typeof Symbol && Symbol.metadata ? Object.create(wz[Symbol.metadata] ?? null) : void 0;
        hD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], nD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], MD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], OD = [(0, PD.C)(), (0, PD.e)("_markScenePrePassDirty")], JD = [(0, PD.C)()], ED = [(0, PD.C)()], QD = [(0, PD.C)()], XD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], CD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], xD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], TD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], bD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], jD = [(0, PD.C)()], dD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], SD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], iD = [(0, PD.C)()], lD = [(0, PD.C)()], WD = [(0, PD.C)()], ZD = [(0, PD.k)()], yD = [(0, PD.C)()], mD = [(0, PD.C)()], eD = [(0, PD.k)()], oD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], uD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], vD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], tD = [(0, PD.k)()], YD = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], qD = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Dz = [(0, PD.C)()], zz = [(0, PD.C)()], (0, VD.i)(DD, null, hD, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isRefractionEnabled" in DD,
            get: DD => DD.isRefractionEnabled,
            set: (DD, zD) => {
              DD.isRefractionEnabled = zD
            }
          },
          metadata: zD
        }, pz, sz), (0, VD.i)(DD, null, nD, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isTranslucencyEnabled" in DD,
            get: DD => DD.isTranslucencyEnabled,
            set: (DD, zD) => {
              DD.isTranslucencyEnabled = zD
            }
          },
          metadata: zD
        }, Kz, rz), (0, VD.i)(DD, null, MD, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isDispersionEnabled" in DD,
            get: DD => DD.isDispersionEnabled,
            set: (DD, zD) => {
              DD.isDispersionEnabled = zD
            }
          },
          metadata: zD
        }, cz, gz), (0, VD.i)(DD, null, OD, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isScatteringEnabled" in DD,
            get: DD => DD.isScatteringEnabled,
            set: (DD, zD) => {
              DD.isScatteringEnabled = zD
            }
          },
          metadata: zD
        }, Rz, Az), (0, VD.i)(DD, null, XD, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAlbedoToTintRefraction" in DD,
            get: DD => DD.useAlbedoToTintRefraction,
            set: (DD, zD) => {
              DD.useAlbedoToTintRefraction = zD
            }
          },
          metadata: zD
        }, nz, Mz), (0, VD.i)(DD, null, CD, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAlbedoToTintTranslucency" in DD,
            get: DD => DD.useAlbedoToTintTranslucency,
            set: (DD, zD) => {
              DD.useAlbedoToTintTranslucency = zD
            }
          },
          metadata: zD
        }, Oz, Jz), (0, VD.i)(DD, null, xD, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "thicknessTexture" in DD,
            get: DD => DD.thicknessTexture,
            set: (DD, zD) => {
              DD.thicknessTexture = zD
            }
          },
          metadata: zD
        }, Ez, Qz), (0, VD.i)(DD, null, TD, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "refractionTexture" in DD,
            get: DD => DD.refractionTexture,
            set: (DD, zD) => {
              DD.refractionTexture = zD
            }
          },
          metadata: zD
        }, Xz, Vz), (0, VD.i)(DD, null, bD, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: DD => "indexOfRefraction" in DD,
            get: DD => DD.indexOfRefraction,
            set: (DD, zD) => {
              DD.indexOfRefraction = zD
            }
          },
          metadata: zD
        }, Pz, Cz), (0, VD.i)(DD, null, dD, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: DD => "invertRefractionY" in DD,
            get: DD => DD.invertRefractionY,
            set: (DD, zD) => {
              DD.invertRefractionY = zD
            }
          },
          metadata: zD
        }, bz, jz), (0, VD.i)(DD, null, SD, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: DD => "linkRefractionWithTransparency" in DD,
            get: DD => DD.linkRefractionWithTransparency,
            set: (DD, zD) => {
              DD.linkRefractionWithTransparency = zD
            }
          },
          metadata: zD
        }, dz, Sz), (0, VD.i)(DD, null, oD, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "useMaskFromThicknessTexture" in DD,
            get: DD => DD.useMaskFromThicknessTexture,
            set: (DD, zD) => {
              DD.useMaskFromThicknessTexture = zD
            }
          },
          metadata: zD
        }, Fz, Yz), (0, VD.i)(DD, null, uD, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "refractionIntensityTexture" in DD,
            get: DD => DD.refractionIntensityTexture,
            set: (DD, zD) => {
              DD.refractionIntensityTexture = zD
            }
          },
          metadata: zD
        }, Hz, qz), (0, VD.i)(DD, null, vD, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "translucencyIntensityTexture" in DD,
            get: DD => DD.translucencyIntensityTexture,
            set: (DD, zD) => {
              DD.translucencyIntensityTexture = zD
            }
          },
          metadata: zD
        }, Dw, zw), (0, VD.i)(DD, null, YD, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "translucencyColorTexture" in DD,
            get: DD => DD.translucencyColorTexture,
            set: (DD, zD) => {
              DD.translucencyColorTexture = zD
            }
          },
          metadata: zD
        }, sw, Kw), (0, VD.i)(DD, null, qD, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: DD => "useGltfStyleTextures" in DD,
            get: DD => DD.useGltfStyleTextures,
            set: (DD, zD) => {
              DD.useGltfStyleTextures = zD
            }
          },
          metadata: zD
        }, rw, Lw), (0, VD.i)(null, null, JD, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: DD => "_scatteringDiffusionProfileIndex" in DD,
            get: DD => DD._scatteringDiffusionProfileIndex,
            set: (DD, zD) => {
              DD._scatteringDiffusionProfileIndex = zD
            }
          },
          metadata: zD
        }, Uz, fz), (0, VD.i)(null, null, ED, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "refractionIntensity" in DD,
            get: DD => DD.refractionIntensity,
            set: (DD, zD) => {
              DD.refractionIntensity = zD
            }
          },
          metadata: zD
        }, Iz, Bz), (0, VD.i)(null, null, QD, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "translucencyIntensity" in DD,
            get: DD => DD.translucencyIntensity,
            set: (DD, zD) => {
              DD.translucencyIntensity = zD
            }
          },
          metadata: zD
        }, Gz, hz), (0, VD.i)(null, null, jD, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: DD => "_volumeIndexOfRefraction" in DD,
            get: DD => DD._volumeIndexOfRefraction,
            set: (DD, zD) => {
              DD._volumeIndexOfRefraction = zD
            }
          },
          metadata: zD
        }, xz, Tz), (0, VD.i)(null, null, iD, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: DD => "minimumThickness" in DD,
            get: DD => DD.minimumThickness,
            set: (DD, zD) => {
              DD.minimumThickness = zD
            }
          },
          metadata: zD
        }, iz, lz), (0, VD.i)(null, null, lD, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: DD => "maximumThickness" in DD,
            get: DD => DD.maximumThickness,
            set: (DD, zD) => {
              DD.maximumThickness = zD
            }
          },
          metadata: zD
        }, Wz, Nz), (0, VD.i)(null, null, WD, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: DD => "useThicknessAsDepth" in DD,
            get: DD => DD.useThicknessAsDepth,
            set: (DD, zD) => {
              DD.useThicknessAsDepth = zD
            }
          },
          metadata: zD
        }, Zz, yz), (0, VD.i)(null, null, ZD, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "tintColor" in DD,
            get: DD => DD.tintColor,
            set: (DD, zD) => {
              DD.tintColor = zD
            }
          },
          metadata: zD
        }, kz, mz), (0, VD.i)(null, null, yD, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: DD => "tintColorAtDistance" in DD,
            get: DD => DD.tintColorAtDistance,
            set: (DD, zD) => {
              DD.tintColorAtDistance = zD
            }
          },
          metadata: zD
        }, ez, oz), (0, VD.i)(null, null, mD, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: DD => "dispersion" in DD,
            get: DD => DD.dispersion,
            set: (DD, zD) => {
              DD.dispersion = zD
            }
          },
          metadata: zD
        }, az, uz), (0, VD.i)(null, null, eD, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: DD => "diffusionDistance" in DD,
            get: DD => DD.diffusionDistance,
            set: (DD, zD) => {
              DD.diffusionDistance = zD
            }
          },
          metadata: zD
        }, vz, tz), (0, VD.i)(null, null, tD, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "translucencyColor" in DD,
            get: DD => DD.translucencyColor,
            set: (DD, zD) => {
              DD.translucencyColor = zD
            }
          },
          metadata: zD
        }, ww, pw), (0, VD.i)(null, null, Dz, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: DD => "applyAlbedoAfterSubSurface" in DD,
            get: DD => DD.applyAlbedoAfterSubSurface,
            set: (DD, zD) => {
              DD.applyAlbedoAfterSubSurface = zD
            }
          },
          metadata: zD
        }, gw, Rw), (0, VD.i)(null, null, zz, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: DD => "legacyTranslucency" in DD,
            get: DD => DD.legacyTranslucency,
            set: (DD, zD) => {
              DD.legacyTranslucency = zD
            }
          },
          metadata: zD
        }, Aw, Uw), zD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zD
        })
      })(), DD.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, DD.DEFAULT_LEGACY_TRANSLUCENCY = !1, DD
    })();
    var gz = wD(40285),
      Rz = wD(40263),
      Az = wD(40299),
      Uz = wD(40302),
      fz = wD(40307),
      Iz = wD(40315),
      Bz = wD(40318),
      Gz = wD(40322),
      hz = wD(39808);
    const nz = {
      effect: null,
      subMesh: null
    };
    class Mz extends((0, Bz.e)((0, Iz.b)(yD.d))) {}
    class Oz extends((0, uD.e)(Mz)) {
      constructor(DD) {
        super(DD), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Jz extends((0, Gz.b)(tD.d)) {}
    let Ez = (() => {
      var DD, zD;
      let pD, sD = Jz,
        rD = [],
        LD = [];
      return DD = class extends sD {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(DD) {
          this._realTimeFiltering = DD, this.vzD(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(DD) {
          this._realTimeFilteringQuality = DD, this.vzD(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, VD.c)(this, zD, "f")
        }
        set debugMode(DD) {
          (0, VD.g)(this, zD, DD, "f")
        }
        constructor(wD, pD) {
          super(wD, pD, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || DD.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new ND.t(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = DD.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = aD.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new aD.d(0, 0, 0), this._albedoColor = new aD.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new aD.d(1, 1, 1), this._reflectionColor = new aD.d(1, 1, 1), this._emissiveColor = new aD.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = DD.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new xD.f(16), this._globalAmbientColor = new aD.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, zD.set(this, (0, VD.m)(this, rD, 0)), this.debugLimit = ((0, VD.m)(this, LD), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new eD(this), this.clearCoat = new Dz(this), this.iridescence = new wz(this), this.anisotropy = new sz(this), this.sheen = new rz(this), this.subSurface = new cz(this), this.detailMap = new gz.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), FD.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = SD(this.Ul()), this.prePassConfiguration = new oD.c
        }
        get hasRenderTargetTextures() {
          return !!(FD.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === DD.PBRMATERIAL_OPAQUE || this._transparencyMode === DD.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === DD.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== DD.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(DD, zD, wD) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const pD = zD._drawWrapper;
          if (pD.effect && this.isFrozen && pD._wasPreviouslyReady && pD._wasPreviouslyUsingInstances === wD) return !0;
          zD.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), zD.materialDefines = new Oz(this._eventInfo.defineNames));
          const sD = zD.materialDefines;
          if (this._isReadyForSubMesh(zD)) return !0;
          const KD = this.Ul(),
            rD = KD.iI();
          if (sD._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, KD.texturesEnabled)) {
            if (this._albedoTexture && FD.d.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && FD.d.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && FD.d.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && FD.d.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && FD.d.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const DD = this._getReflectionTexture();
            if (DD && FD.d.ReflectionTextureEnabled) {
              if (!DD.isReadyOrNotBlocking()) return !1;
              if (DD.irradianceTexture) {
                if (!DD.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!DD.sphericalPolynomial && DD.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && FD.d.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && FD.d.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (FD.d.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (rD.getCaps().standardDerivatives && this._bumpTexture && FD.d.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && FD.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = sD, this._eventInfo.subMesh = zD, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (sD._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (sD.AREALIGHTUSED || sD.CLUSTLIGHT_BATCH)
            for (let AD = 0; AD < DD.lightSources.length; AD++)
              if (!DD.lightSources[AD]._isReady()) return !1;
          if (rD.getCaps().standardDerivatives || DD.isVerticesDataPresent(ZD.k.NormalKind) || (DD.createNormals(!0), CD.d.Warn("PBRMaterial: Normals have been created for the mesh: " + DD.name)), !(0, HD.e)(KD, DD, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const LD = zD.effect,
            cD = sD._areLightsDisposed,
            gD = this._prepareEffect(DD, zD.getRenderingMesh(), sD, this.onCompiled, this.onError, wD, null);
          let RD = !1;
          if (gD)
            if (this._onEffectCreatedObservable && (nz.effect = gD, nz.subMesh = zD, this._onEffectCreatedObservable.notifyObservers(nz)), this.allowShaderHotSwapping && LD && !gD.isReady()) {
              if (sD.markAsUnprocessed(), RD = this.isFrozen, cD) return sD._areLightsDisposed = !0, !1
            } else KD.resetCachedMaterial(), zD.setEffect(gD, sD, this._materialContext);
          return !(!zD.effect || !zD.effect.isReady()) && (sD._renderId = KD.getRenderId(), pD._wasPreviouslyReady = !RD, pD._wasPreviouslyUsingInstances = !!wD, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(zD, wD, pD) {
          let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            LD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(zD, wD, pD, rD, LD), !pD.isDirty) return null;
          pD.markAsProcessed();
          const cD = this.Ul().iI(),
            gD = new YD.b;
          let RD = 0;
          pD.USESPHERICALINVERTEX && gD.addFallback(RD++, "USESPHERICALINVERTEX"), pD.FOG && gD.addFallback(RD, "FOG"), pD.SPECULARAA && gD.addFallback(RD, "SPECULARAA"), pD.POINTSIZE && gD.addFallback(RD, "POINTSIZE"), pD.LOGARITHMICDEPTH && gD.addFallback(RD, "LOGARITHMICDEPTH"), pD.PARALLAX && gD.addFallback(RD, "PARALLAX"), pD.PARALLAX_RHS && gD.addFallback(RD, "PARALLAX_RHS"), pD.PARALLAXOCCLUSION && gD.addFallback(RD++, "PARALLAXOCCLUSION"), pD.ENVIRONMENTBRDF && gD.addFallback(RD++, "ENVIRONMENTBRDF"), pD.TANGENT && gD.addFallback(RD++, "TANGENT"), pD.BUMP && gD.addFallback(RD++, "BUMP"), RD = (0, HD.D)(pD, gD, this._maxSimultaneousLights, RD), pD.SPECULARTERM && gD.addFallback(RD++, "SPECULARTERM"), pD.USESPHERICALFROMREFLECTIONMAP && gD.addFallback(RD++, "USESPHERICALFROMREFLECTIONMAP"), pD.USEIRRADIANCEMAP && gD.addFallback(RD++, "USEIRRADIANCEMAP"), pD.LIGHTMAP && gD.addFallback(RD++, "LIGHTMAP"), pD.NORMAL && gD.addFallback(RD++, "NORMAL"), pD.AMBIENT && gD.addFallback(RD++, "AMBIENT"), pD.EMISSIVE && gD.addFallback(RD++, "EMISSIVE"), pD.VERTEXCOLOR && gD.addFallback(RD++, "VERTEXCOLOR"), pD.MORPHTARGETS && gD.addFallback(RD++, "MORPHTARGETS"), pD.MULTIVIEW && gD.addFallback(0, "MULTIVIEW");
          const AD = [ZD.k.PositionKind];
          pD.NORMAL && AD.push(ZD.k.NormalKind), pD.TANGENT && AD.push(ZD.k.TangentKind);
          for (let DD = 1; DD <= 6; ++DD) pD["UV" + DD] && AD.push(`uv${1===DD?"":DD}`);
          pD.VERTEXCOLOR && AD.push(ZD.k.ColorKind), (0, HD.H)(AD, zD, pD, gD), (0, HD.K)(AD, pD), (0, HD.L)(AD, zD, pD), (0, HD.G)(AD, zD, pD);
          let UD = "pbr";
          const fD = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            ID = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, HD.xb)(fD, ID, !0);
          const BD = ["Material", "Scene", "Mesh"],
            GD = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: pD.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = gD, this._eventInfo.fallbackRank = RD, this._eventInfo.defines = pD, this._eventInfo.uniforms = fD, this._eventInfo.attributes = AD, this._eventInfo.samplers = ID, this._eventInfo.uniformBuffersNames = BD, this._eventInfo.customCode = void 0, this._eventInfo.mesh = zD, this._eventInfo.indexParameters = GD, this._callbackPluginEventGeneric(128, this._eventInfo), fz.d.AddUniformsAndSamplers(fD, ID), oD.c.AddUniforms(fD), oD.c.AddSamplers(ID), (0, Rz.e)(fD), this._useVertexPulling) {
            const DD = wD?.geometry;
            DD && (this._vertexPullingMetadata = (0, Az.e)(DD), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((DD, zD) => {
              fD.push(`vp_${zD}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          vD.e && (vD.e.PrepareUniforms(fD, pD), vD.e.PrepareSamplers(ID, pD)), (0, HD.Ab)({
            uniformsNames: fD,
            uniformBuffersNames: BD,
            samplers: ID,
            defines: pD,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const hD = {};
          this.customShaderNameResolve && (UD = this.customShaderNameResolve(UD, fD, BD, ID, pD, AD, hD));
          const nD = pD.toString(),
            MD = cD.createEffect(UD, {
              attributes: AD,
              uniformsNames: fD,
              uniformBuffersNames: BD,
              samplers: ID,
              defines: nD,
              fallbacks: gD,
              onCompiled: sD,
              onError: KD,
              indexParameters: GD,
              processFinalCode: hD.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: pD.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: DD._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, cD);
          return this._eventInfo.customCode = void 0, MD
        }
        _prepareDefines(zD, wD, pD) {
          let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const rD = wD.hasThinInstances,
            LD = this.Ul(),
            cD = LD.iI();
          (0, HD.bb)(LD, zD, pD, !0, this._maxSimultaneousLights, this._disableLighting), pD._needNormals = !0, (0, HD.kb)(LD, pD);
          const gD = this.needAlphaBlendingForMesh(zD) && this.Ul().useOrderIndependentTransparency;
          if ((0, HD.qb)(LD, pD, this.canRenderToMRT && !gD), (0, HD.nb)(LD, pD, gD), fz.d.PrepareDefines(cD.currentRenderPassId, zD, pD), pD.METALLICWORKFLOW = this.isMetallicWorkflow(), pD._areTexturesDirty) {
            pD._needUVs = !1;
            for (let DD = 1; DD <= 6; ++DD) pD["MAINUV" + DD] = !1;
            if (LD.texturesEnabled) {
              pD.ALBEDODIRECTUV = 0, pD.BASE_WEIGHTDIRECTUV = 0, pD.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, pD.AMBIENTDIRECTUV = 0, pD.OPACITYDIRECTUV = 0, pD.EMISSIVEDIRECTUV = 0, pD.REFLECTIVITYDIRECTUV = 0, pD.MICROSURFACEMAPDIRECTUV = 0, pD.METALLIC_REFLECTANCEDIRECTUV = 0, pD.REFLECTANCEDIRECTUV = 0, pD.BUMPDIRECTUV = 0, pD.LIGHTMAPDIRECTUV = 0, cD.getCaps().textureLOD && (pD.LODBASEDMICROSFURACE = !0), this._albedoTexture && FD.d.DiffuseTextureEnabled ? ((0, HD.eb)(this._albedoTexture, pD, "ALBEDO"), pD.GAMMAALBEDO = this._albedoTexture.gammaSpace) : pD.ALBEDO = !1, this._baseWeightTexture && FD.d.BaseWeightTextureEnabled ? (0, HD.eb)(this._baseWeightTexture, pD, "BASE_WEIGHT") : pD.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && FD.d.BaseDiffuseRoughnessTextureEnabled ? (0, HD.eb)(this._baseDiffuseRoughnessTexture, pD, "BASE_DIFFUSE_ROUGHNESS") : pD.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && FD.d.AmbientTextureEnabled ? ((0, HD.eb)(this._ambientTexture, pD, "AMBIENT"), pD.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : pD.AMBIENT = !1, this._opacityTexture && FD.d.OpacityTextureEnabled ? ((0, HD.eb)(this._opacityTexture, pD, "OPACITY"), pD.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : pD.OPACITY = !1;
              const DD = this._getReflectionTexture(),
                zD = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || cD.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, HD.Z)(LD, DD, pD, this.realTimeFiltering, this.realTimeFilteringQuality, !zD), this._lightmapTexture && FD.d.LightmapTextureEnabled ? ((0, HD.eb)(this._lightmapTexture, pD, "LIGHTMAP"), pD.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, pD.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, pD.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : pD.LIGHTMAP = !1, this._emissiveTexture && FD.d.EmissiveTextureEnabled ? ((0, HD.eb)(this._emissiveTexture, pD, "EMISSIVE"), pD.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : pD.EMISSIVE = !1, FD.d.SpecularTextureEnabled ? (this._metallicTexture ? ((0, HD.eb)(this._metallicTexture, pD, "REFLECTIVITY"), pD.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, pD.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, pD.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, pD.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, pD.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, HD.eb)(this._reflectivityTexture, pD, "REFLECTIVITY"), pD.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, pD.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, pD.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : pD.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (pD.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, HD.eb)(this._metallicReflectanceTexture, pD, "METALLIC_REFLECTANCE"), pD.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : pD.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, HD.eb)(this._reflectanceTexture, pD, "REFLECTANCE"), pD.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : pD.REFLECTANCE = !1) : (pD.METALLIC_REFLECTANCE = !1, pD.REFLECTANCE = !1), this._microSurfaceTexture ? (0, HD.eb)(this._microSurfaceTexture, pD, "MICROSURFACEMAP") : pD.MICROSURFACEMAP = !1) : (pD.REFLECTIVITY = !1, pD.MICROSURFACEMAP = !1), cD.getCaps().standardDerivatives && this._bumpTexture && FD.d.BumpTextureEnabled && !this._disableBumpMap ? ((0, HD.eb)(this._bumpTexture, pD, "BUMP"), this._useParallax && this._albedoTexture && FD.d.DiffuseTextureEnabled ? (pD.PARALLAX = !0, pD.PARALLAX_RHS = LD.useRightHandedSystem, pD.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : pD.PARALLAX = !1, pD.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (pD.BUMP = !1, pD.PARALLAX = !1, pD.PARALLAX_RHS = !1, pD.PARALLAXOCCLUSION = !1, pD.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && FD.d.ReflectionTextureEnabled ? (pD.ENVIRONMENTBRDF = !0, pD.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (pD.ENVIRONMENTBRDF = !1, pD.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? pD.ALPHAFROMALBEDO = !0 : pD.ALPHAFROMALBEDO = !1
            }
            pD.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === DD.LIGHTFALLOFF_STANDARD ? (pD.USEPHYSICALLIGHTFALLOFF = !1, pD.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === DD.LIGHTFALLOFF_GLTF ? (pD.USEPHYSICALLIGHTFALLOFF = !1, pD.USEGLTFLIGHTFALLOFF = !0) : (pD.USEPHYSICALLIGHTFALLOFF = !0, pD.USEGLTFLIGHTFALLOFF = !1), pD.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? pD.TWOSIDEDLIGHTING = !0 : pD.TWOSIDEDLIGHTING = !1, pD.MIRRORED = !!LD._mirroredCameraPosition, pD.SPECULARAA = cD.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(pD._areTexturesDirty || pD._areMiscDirty) && (pD.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, pD.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, pD.ALPHABLEND = this.needAlphaBlendingForMesh(zD), pD.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, pD.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), pD._areTexturesDirty && (pD.TEXTURE_REPETITION_MODE = cD.version > 1 || cD.isWebGPU ? this.textureRepetitionMode : 0), pD._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(pD), pD.FORCENORMALFORWARD = this._forceNormalForward, pD.RADIANCEOCCLUSION = this._useRadianceOcclusion, pD.HORIZONOCCLUSION = this._useHorizonOcclusion, pD._areMiscDirty && ((0, HD.hb)(zD, LD, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(zD), pD, this._applyDecalMapAfterDetailMap, this._useVertexPulling, wD, this._isVertexOutputInvariant), pD.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !zD.isVerticesDataPresent(ZD.k.NormalKind), pD.DEBUGMODE = this._debugMode), (0, HD.V)(LD, cD, this, pD, !!sD, KD, rD), this._eventInfo.defines = pD, this._eventInfo.mesh = zD, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, HD.S)(zD, pD, !0, !0, !0, this._transparencyMode !== DD.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(DD, zD, wD) {
          const pD = {
            clipPlane: !1,
            useInstances: !1,
            ...wD
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const wD = new Oz(this._eventInfo.defineNames),
              sD = this._prepareEffect(DD, DD, wD, void 0, void 0, pD.useInstances, pD.clipPlane);
            this._onEffectCreatedObservable && (nz.effect = sD, nz.subMesh = null, this._onEffectCreatedObservable.notifyObservers(nz)), sD.isReady() ? zD && zD(this) : sD.onCompileObservable.add((() => {
              zD && zD(this)
            }))
          })()
        }
        buildUniformLayout() {
          const DD = this._uniformBuffer;
          DD.addUniform("vAlbedoInfos", 2), DD.addUniform("vBaseWeightInfos", 2), DD.addUniform("vBaseDiffuseRoughnessInfos", 2), DD.addUniform("vAmbientInfos", 4), DD.addUniform("vOpacityInfos", 2), DD.addUniform("vEmissiveInfos", 2), DD.addUniform("vLightmapInfos", 2), DD.addUniform("vReflectivityInfos", 3), DD.addUniform("vMicroSurfaceSamplerInfos", 2), DD.addUniform("vBumpInfos", 3), DD.addUniform("albedoMatrix", 16), DD.addUniform("baseWeightMatrix", 16), DD.addUniform("baseDiffuseRoughnessMatrix", 16), DD.addUniform("ambientMatrix", 16), DD.addUniform("opacityMatrix", 16), DD.addUniform("emissiveMatrix", 16), DD.addUniform("lightmapMatrix", 16), DD.addUniform("reflectivityMatrix", 16), DD.addUniform("microSurfaceSamplerMatrix", 16), DD.addUniform("bumpMatrix", 16), DD.addUniform("vTangentSpaceParams", 2), DD.addUniform("vAlbedoColor", 4), DD.addUniform("baseWeight", 1), DD.addUniform("baseDiffuseRoughness", 1), DD.addUniform("vLightingIntensity", 4), DD.addUniform("pointSize", 1), DD.addUniform("vReflectivityColor", 4), DD.addUniform("vEmissiveColor", 3), DD.addUniform("vAmbientColor", 3), DD.addUniform("vDebugMode", 2), DD.addUniform("vMetallicReflectanceFactors", 4), DD.addUniform("vMetallicReflectanceInfos", 2), DD.addUniform("metallicReflectanceMatrix", 16), DD.addUniform("vReflectanceInfos", 2), DD.addUniform("reflectanceMatrix", 16), DD.addUniform("cameraInfo", 4), DD.addUniform("vTextureRepetitionHexTilingParams", 4), (0, HD.tb)(DD, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(DD, zD, wD) {
          const pD = this.Ul(),
            sD = wD.materialDefines;
          if (!sD) return;
          const KD = wD.effect;
          if (!KD) return;
          this._activeEffect = KD, zD.getMeshUniformBuffer().bindToEffect(KD, "Mesh"), zD.transferToEffect(DD);
          const rD = pD.iI();
          this._uniformBuffer.bindToEffect(KD, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, pD, zD, DD, this.isFrozen), fz.d.Bind(rD.currentRenderPassId, this._activeEffect, zD, DD, this);
          const LD = pD.activeCamera;
          LD ? this._uniformBuffer.updateFloat4("cameraInfo", LD.minZ, LD.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const cD = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", cD[0], cD[1], cD[2], cD[3]), this._eventInfo.subMesh = wD, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), sD.OBJECTSPACE_NORMALMAP && (DD.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const gD = this._mustRebind(pD, KD, wD, zD.visibility),
            RD = rD._features.needToAlwaysBindUniformBuffers;
          (0, HD.h)(zD, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Az.d)(this._activeEffect, this._vertexPullingMetadata);
          let AD = null;
          const UD = this._uniformBuffer;
          if (gD) {
            if (this.bindViewProjection(KD), AD = this._getReflectionTexture(), !UD.useUbo || !this.isFrozen || !UD.isSync || wD._drawWrapper._forceRebindOnNextCall) {
              if (pD.texturesEnabled && (this._albedoTexture && FD.d.DiffuseTextureEnabled && (UD.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, HD.z)(this._albedoTexture, UD, "albedo")), this._baseWeightTexture && FD.d.BaseWeightTextureEnabled && (UD.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, HD.z)(this._baseWeightTexture, UD, "baseWeight")), this._baseDiffuseRoughnessTexture && FD.d.BaseDiffuseRoughnessTextureEnabled && (UD.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, HD.z)(this._baseDiffuseRoughnessTexture, UD, "baseDiffuseRoughness")), this._ambientTexture && FD.d.AmbientTextureEnabled && (UD.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, HD.z)(this._ambientTexture, UD, "ambient")), this._opacityTexture && FD.d.OpacityTextureEnabled && (UD.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, HD.z)(this._opacityTexture, UD, "opacity")), this._emissiveTexture && FD.d.EmissiveTextureEnabled && (UD.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, HD.z)(this._emissiveTexture, UD, "emissive")), this._lightmapTexture && FD.d.LightmapTextureEnabled && (UD.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, HD.z)(this._lightmapTexture, UD, "lightmap")), FD.d.SpecularTextureEnabled && (this._metallicTexture ? (UD.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, HD.z)(this._metallicTexture, UD, "reflectivity")) : this._reflectivityTexture && (UD.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, HD.z)(this._reflectivityTexture, UD, "reflectivity")), this._metallicReflectanceTexture && (UD.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, HD.z)(this._metallicReflectanceTexture, UD, "metallicReflectance")), this._reflectanceTexture && sD.REFLECTANCE && (UD.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, HD.z)(this._reflectanceTexture, UD, "reflectance")), this._microSurfaceTexture && (UD.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, HD.z)(this._microSurfaceTexture, UD, "microSurfaceSampler"))), this._bumpTexture && rD.getCaps().standardDerivatives && FD.d.BumpTextureEnabled && !this._disableBumpMap && (UD.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, HD.z)(this._bumpTexture, UD, "bump"), pD._mirroredCameraPosition ? UD.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : UD.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, HD.m)(pD, sD, UD, this._reflectionColor, AD, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && UD.updateFloat("pointSize", this.pointSize), sD.METALLICWORKFLOW) {
                aD.l.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, aD.l.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const DD = this.subSurface?._indexOfRefraction ?? 1.5,
                  zD = 1;
                aD.l.Color4[0].b = DD;
                const wD = Math.pow((DD - zD) / (DD + zD), 2);
                aD.l.Color4[0].a = wD, UD.updateDirectColor4("vReflectivityColor", aD.l.Color4[0]), UD.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else UD.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              UD.updateColor3("vEmissiveColor", FD.d.EmissiveTextureEnabled ? this._emissiveColor : aD.d.BlackReadOnly), !sD.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? UD.updateColor4("vAlbedoColor", this._albedoColor, 1) : UD.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), UD.updateFloat("baseWeight", this._baseWeight), UD.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * pD.environmentIntensity, this._lightingInfos.w = this._specularIntensity, UD.updateVector4("vLightingIntensity", this._lightingInfos), pD.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), UD.updateColor3("vAmbientColor", this._globalAmbientColor), UD.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            pD.texturesEnabled && (this._albedoTexture && FD.d.DiffuseTextureEnabled && UD.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && FD.d.BaseWeightTextureEnabled && UD.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && FD.d.BaseDiffuseRoughnessTextureEnabled && UD.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && FD.d.AmbientTextureEnabled && UD.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && FD.d.OpacityTextureEnabled && UD.setTexture("opacitySampler", this._opacityTexture), (0, HD.n)(pD, sD, UD, AD, this.realTimeFiltering), sD.ENVIRONMENTBRDF && UD.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && FD.d.EmissiveTextureEnabled && UD.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && FD.d.LightmapTextureEnabled && UD.setTexture("lightmapSampler", this._lightmapTexture), FD.d.SpecularTextureEnabled && (this._metallicTexture ? UD.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && UD.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && UD.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && sD.REFLECTANCE && UD.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && UD.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && rD.getCaps().standardDerivatives && FD.d.BumpTextureEnabled && !this._disableBumpMap && UD.setTexture("bumpSampler", this._bumpTexture)), this.Ul().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(zD) && this.Ul().depthPeelingRenderer.bind(KD), this._eventInfo.subMesh = wD, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Rz.f)(this._activeEffect, this, pD), this.bindEyePosition(KD)
          } else RD && (this._needToBindSceneUbo = !0);
          !gD && this.isFrozen && !RD || !pD.lightsEnabled || this._disableLighting || (0, HD.p)(pD, zD, this._activeEffect, sD, this._maxSimultaneousLights), !gD && this.isFrozen || ((pD.fogEnabled && zD.applyFog && pD.fogMode !== WD.e.FOGMODE_NONE || AD || this.subSurface.refractionTexture || zD.receiveShadows || sD.PREPASS || sD.CLUSTLIGHT_BATCH) && this.bindView(KD), (0, HD.k)(pD, zD, this._activeEffect, !0), sD.NUM_MORPH_INFLUENCERS && (0, HD.s)(zD, this._activeEffect), sD.BAKED_VERTEX_ANIMATION_TEXTURE && zD.bakedVertexAnimationManager?.bind(KD, sD.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, HD.q)(sD, this._activeEffect, pD)), this._afterBind(zD, this._activeEffect, wD), UD.update()
        }
        getAnimatables() {
          const DD = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && DD.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && DD.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && DD.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && DD.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && DD.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && DD.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && DD.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? DD.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && DD.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && DD.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && DD.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && DD.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && DD.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && DD.push(this._microSurfaceTexture), DD
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.Ul().environmentTexture
        }
        getActiveTextures() {
          const DD = super.getActiveTextures();
          return this._albedoTexture && DD.push(this._albedoTexture), this._baseWeightTexture && DD.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && DD.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && DD.push(this._ambientTexture), this._opacityTexture && DD.push(this._opacityTexture), this._reflectionTexture && DD.push(this._reflectionTexture), this._emissiveTexture && DD.push(this._emissiveTexture), this._reflectivityTexture && DD.push(this._reflectivityTexture), this._metallicTexture && DD.push(this._metallicTexture), this._metallicReflectanceTexture && DD.push(this._metallicReflectanceTexture), this._reflectanceTexture && DD.push(this._reflectanceTexture), this._microSurfaceTexture && DD.push(this._microSurfaceTexture), this._bumpTexture && DD.push(this._bumpTexture), this._lightmapTexture && DD.push(this._lightmapTexture), DD
        }
        hasTexture(DD) {
          return !!super.hasTexture(DD) || (this._albedoTexture === DD || (this._baseWeightTexture === DD || (this._baseDiffuseRoughnessTexture === DD || (this._ambientTexture === DD || (this._opacityTexture === DD || (this._reflectionTexture === DD || (this._emissiveTexture === DD || (this._reflectivityTexture === DD || (this._metallicTexture === DD || (this._metallicReflectanceTexture === DD || (this._reflectanceTexture === DD || (this._microSurfaceTexture === DD || (this._bumpTexture === DD || this._lightmapTexture === DD)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const DD = this.Ul().enableSubSurfaceForPrePass();
          return DD && (DD.enabled = !0), !0
        }
        dispose(DD, zD) {
          this._breakShaderLoadedCheck = !0, zD && (this._environmentBRDFTexture && this.Ul().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(DD, zD)
        }
      }, zD = new WeakMap, (() => {
        const zD = "function" === typeof Symbol && Symbol.metadata ? Object.create(sD[Symbol.metadata] ?? null) : void 0;
        pD = [(0, PD.e)("_markAllSubMeshesAsMiscDirty")], (0, VD.i)(DD, null, pD, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: DD => "debugMode" in DD,
            get: DD => DD.debugMode,
            set: (DD, zD) => {
              DD.debugMode = zD
            }
          },
          metadata: zD
        }, rD, LD), zD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zD
        })
      })(), DD.PBRMATERIAL_OPAQUE = KD.b.MATERIAL_OPAQUE, DD.PBRMATERIAL_ALPHATEST = KD.b.MATERIAL_ALPHATEST, DD.PBRMATERIAL_ALPHABLEND = KD.b.MATERIAL_ALPHABLEND, DD.PBRMATERIAL_ALPHATESTANDBLEND = KD.b.MATERIAL_ALPHATESTANDBLEND, DD.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, DD.LIGHTFALLOFF_PHYSICAL = 0, DD.LIGHTFALLOFF_GLTF = 1, DD.LIGHTFALLOFF_STANDARD = 2, DD.ForceGLSL = !1, DD._ShaderLoader = new Uz.d((() => [Promise.all([wD.e(317), wD.e(328)]).then((() => wD(61288))), Promise.all([wD.e(322), wD.e(318), wD.e(380), wD.e(331), wD.e(379)]).then((() => wD(61306)))]), (() => [Promise.all([wD.e(336), wD.e(338), wD.e(345)]).then((() => wD(61365))), Promise.all([wD.e(336), wD.e(339), wD.e(383), wD.e(349), wD.e(382)]).then((() => wD(61398)))])), DD
    })();
    Object.getOwnPropertyDescriptor(Ez.prototype, "decalMap") || Object.defineProperty(Ez.prototype, "decalMap", (0, hz.g)("PBRBaseMaterial", "decalMap")), (0, wD(41744).d)();
    var Qz = wD(39939);
    var Xz = wD(40027),
      Vz = wD(41731),
      Pz = wD(39761),
      Cz = wD(39766),
      xz = wD(39867);
    let Tz = !1;
    const bz = new aD.h,
      jz = new aD.h;
    class dz extends Vz.b {
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
      set wrapU(DD) {
        if (this._textures)
          for (let zD = 0; zD < this._textures.length; zD++) this._textures[zD].wrapU = DD
      }
      set wrapV(DD) {
        if (this._textures)
          for (let zD = 0; zD < this._textures.length; zD++) this._textures[zD].wrapV = DD
      }
      constructor(DD, zD, wD, pD, sD, KD) {
        const rD = !(!sD || !sD.generateMipMaps) && sD.generateMipMaps,
          LD = !(!sD || !sD.generateDepthTexture) && sD.generateDepthTexture,
          cD = sD && sD.depthTextureFormat ? sD.depthTextureFormat : 15,
          gD = !sD || void 0 === sD.doNotChangeAspectRatio || sD.doNotChangeAspectRatio,
          RD = !(!sD || !sD.drawOnlyOnFirstAttachmentByDefault) && sD.drawOnlyOnFirstAttachmentByDefault;
        if (super(DD, zD, pD, rD, gD, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Tz || (Tz = !0, Cz.ThinEngine.prototype.restoreSingleAttachment = function() {
            const DD = this._gl;
            this.bindAttachments([DD.BACK])
          }, Cz.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const DD = this._gl;
            this.bindAttachments([DD.COLOR_ATTACHMENT0])
          }, Cz.ThinEngine.prototype.buildTextureLayout = function(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const wD = this._gl,
              pD = [];
            if (zD) pD.push(wD.BACK);
            else
              for (let sD = 0; sD < DD.length; sD++) DD[sD] ? pD.push(wD["COLOR_ATTACHMENT" + sD]) : pD.push(wD.NONE);
            return pD
          }, Cz.ThinEngine.prototype.bindAttachments = function(DD) {
            const zD = this._gl,
              wD = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, wD)
              for (let pD = 0; pD < DD.length; pD++) DD[pD] !== zD.NONE && wD[pD] && (0, xz.k)(wD[pD].format) && (this._integerMRTAttachmentsMask |= 1 << pD);
            zD.drawBuffers(DD)
          }, Cz.ThinEngine.prototype.clearAttachments = function(DD, zD, wD, pD) {
            let sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const rD = this._currentRenderTarget?.textures;
            let LD = !1;
            if (wD && DD && rD)
              for (let cD = 0; cD < zD.length; cD++) {
                const DD = rD[cD];
                if (zD[cD] !== this._gl.NONE && DD && (0, xz.k)(DD.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  LD = !0;
                  break
                }
              }
            if (!LD || !DD || !rD) return this.bindAttachments(zD), void this.clear(DD, wD, pD, sD, KD);
            this.bindAttachments(zD), this._applyColorWriteState();
            for (let cD = 0; cD < zD.length; cD++) {
              const wD = rD[cD];
              if (zD[cD] !== this._gl.NONE && wD) {
                let zD = DD;
                if ((0, xz.k)(wD.format)) {
                  const pD = (0, xz.m)(wD.type);
                  zD = pD ? bz : jz;
                  const sD = pD ? 255 : 1;
                  zD.r = Math.round(DD.r * sD), zD.g = Math.round(DD.g * sD), zD.b = Math.round(DD.b * sD), zD.a = Math.round(DD.a * sD)
                }
                this._clearColorAttachment(cD, zD, wD.format, wD.type)
              }
            }
            if (pD || sD) {
              const DD = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, pD, sD, KD)
              } finally {
                this._integerMRTAttachmentsMask = DD
              }
            }
          }, Cz.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              wD = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, DD.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(DD), zD || this.generateMipMapsMultiFramebuffer(DD), wD && (DD._MSAAFramebuffer && this._bindUnboundFramebuffer(DD._framebuffer), wD()), this._bindUnboundFramebuffer(null)
          }, Cz.ThinEngine.prototype.createMultipleRenderTarget = function(DD, zD) {
            let wD, pD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              sD = !1,
              KD = !0,
              rD = !1,
              LD = !1,
              cD = 1,
              gD = 1,
              RD = [],
              AD = [],
              UD = [],
              fD = [],
              ID = [],
              BD = [],
              GD = [],
              hD = [],
              nD = [],
              MD = !1;
            const OD = this._createHardwareRenderTargetWrapper(!0, !1, DD);
            void 0 !== zD && (sD = void 0 !== zD.generateMipMaps && zD.generateMipMaps, KD = void 0 === zD.generateDepthBuffer || zD.generateDepthBuffer, rD = void 0 !== zD.generateStencilBuffer && zD.generateStencilBuffer, LD = void 0 !== zD.generateDepthTexture && zD.generateDepthTexture, cD = zD.wLD ?? 1, gD = zD.samples ?? gD, RD = zD.types || RD, AD = zD.samplingModes || AD, UD = zD.useSRGBBuffers || UD, fD = zD.formats || fD, ID = zD.targetTypes || ID, BD = zD.faceIndex || BD, GD = zD.layerIndex || GD, hD = zD.layerCounts || hD, nD = zD.labels || nD, MD = zD.dontCreateTextures ?? !1, this.AB > 1 && (13 === zD.depthTextureFormat || 17 === zD.depthTextureFormat || 16 === zD.depthTextureFormat || 14 === zD.depthTextureFormat || 18 === zD.depthTextureFormat) && (wD = zD.depthTextureFormat)), void 0 === wD && (wD = rD ? 13 : 14);
            const JD = this._gl,
              ED = this._currentFramebuffer,
              QD = JD.createFramebuffer();
            this._bindUnboundFramebuffer(QD);
            const XD = DD.width ?? DD,
              VD = DD.height ?? DD,
              PD = [],
              xD = [],
              TD = this.AB > 1 && (13 === wD || 17 === wD || 18 === wD);
            OD.label = zD?.label ?? "MultiRenderTargetWrapper", OD._framebuffer = QD, OD._generateDepthBuffer = LD || KD, OD._generateStencilBuffer = LD ? TD : rD, OD._depthStencilBuffer = this._setupFramebufferDepthAttachments(OD._generateStencilBuffer, OD._generateDepthBuffer, XD, VD, 1, wD), OD._attachments = xD;
            for (let bD = 0; bD < cD; bD++) {
              let DD = AD[bD] || 3,
                zD = RD[bD] || 0,
                wD = UD[bD] || !1;
              const pD = fD[bD] || 5,
                KD = ID[bD] || 3553,
                rD = hD[bD] ?? 1;
              (1 !== zD || this._caps.textureFloatLinearFiltering) && (2 !== zD || this._caps.textureHalfFloatLinearFiltering) || (DD = 1);
              const LD = this._getSamplingParameters(DD, sD);
              1 !== zD || this._caps.textureFloat || (zD = 0, CD.d.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), wD = wD && this._caps.supportSRGBBuffers && (this.AB > 1 || this.isWebGPU);
              const cD = this.AB > 1,
                gD = JD[cD ? "COLOR_ATTACHMENT" + bD : "COLOR_ATTACHMENT" + bD + "_WEBGL"];
              if (xD.push(gD), -1 === KD || MD) continue;
              const BD = new Pz.e(this, 6);
              PD[bD] = BD, JD.activeTexture(JD["TEXTURE" + bD]), JD.bindTexture(KD, BD._hardwareTexture.underlyingResource), JD.texParameteri(KD, JD.TEXTURE_MAG_FILTER, LD.mag), JD.texParameteri(KD, JD.TEXTURE_MIN_FILTER, LD.min), JD.texParameteri(KD, JD.TEXTURE_WRAP_S, JD.CLAMP_TO_EDGE), JD.texParameteri(KD, JD.TEXTURE_WRAP_T, JD.CLAMP_TO_EDGE);
              const GD = this._getRGBABufferInternalSizedFormat(zD, pD, wD),
                ED = this._getInternalFormat(pD),
                QD = this._getWebGLTextureType(zD);
              if (!cD || 35866 !== KD && 32879 !== KD)
                if (34067 === KD) {
                  for (let DD = 0; DD < 6; DD++) JD.texImage2D(JD.TEXTURE_CUBE_MAP_POSITIVE_X + DD, 0, GD, XD, VD, 0, ED, QD, null);
                  BD.isCube = !0
                } else JD.texImage2D(JD.TEXTURE_2D, 0, GD, XD, VD, 0, ED, QD, null);
              else 35866 === KD ? BD.is2DArray = !0 : BD.is3D = !0, BD.baseDepth = BD.depth = rD, JD.texImage3D(KD, 0, GD, XD, VD, rD, 0, ED, QD, null);
              sD && JD.generateMipmap(KD), this._bindTextureDirectly(KD, null), BD.baseWidth = XD, BD.baseHeight = VD, BD.width = XD, BD.height = VD, BD.isReady = !0, BD.samples = 1, BD.generateMipMaps = sD, BD.samplingMode = DD, BD.type = zD, BD._useSRGBBuffer = wD, BD.format = pD, BD.label = nD[bD] ?? OD.label + "-Texture" + bD, this._internalTexturesCache.push(BD)
            }
            if (LD && this._caps.depthTextureExtension && !MD) {
              const DD = new Pz.e(this, 14);
              let zD = 5,
                pD = JD.DEPTH_COMPONENT16,
                KD = JD.DEPTH_COMPONENT,
                rD = JD.UNSIGNED_SHORT,
                LD = JD.DEPTH_ATTACHMENT;
              this.AB < 2 ? pD = JD.DEPTH_COMPONENT : 14 === wD ? (zD = 1, rD = JD.FLOAT, pD = JD.DEPTH_COMPONENT32F) : 18 === wD ? (zD = 0, rD = JD.FLOAT_32_UNSIGNED_INT_24_8_REV, pD = JD.DEPTH32F_STENCIL8, KD = JD.DEPTH_STENCIL, LD = JD.DEPTH_STENCIL_ATTACHMENT) : 16 === wD ? (zD = 0, rD = JD.UNSIGNED_INT, pD = JD.DEPTH_COMPONENT24, LD = JD.DEPTH_ATTACHMENT) : 13 !== wD && 17 !== wD || (zD = 12, rD = JD.UNSIGNED_INT_24_8, pD = JD.DEPTH24_STENCIL8, KD = JD.DEPTH_STENCIL, LD = JD.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(JD.TEXTURE_2D, DD, !0), JD.texParameteri(JD.TEXTURE_2D, JD.TEXTURE_MAG_FILTER, JD.NEAREST), JD.texParameteri(JD.TEXTURE_2D, JD.TEXTURE_MIN_FILTER, JD.NEAREST), JD.texParameteri(JD.TEXTURE_2D, JD.TEXTURE_WRAP_S, JD.CLAMP_TO_EDGE), JD.texParameteri(JD.TEXTURE_2D, JD.TEXTURE_WRAP_T, JD.CLAMP_TO_EDGE), JD.texImage2D(JD.TEXTURE_2D, 0, pD, XD, VD, 0, KD, rD, null), JD.framebufferTexture2D(JD.FRAMEBUFFER, LD, JD.TEXTURE_2D, DD._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(JD.TEXTURE_2D, null), OD._depthStencilTexture = DD, OD._depthStencilTextureWithStencil = TD, DD.baseWidth = XD, DD.baseHeight = VD, DD.width = XD, DD.height = VD, DD.isReady = !0, DD.samples = 1, DD.generateMipMaps = sD, DD.samplingMode = 1, DD.format = wD, DD.type = zD, DD.label = OD.label + "-DepthStencil", PD[cD] = DD, this._internalTexturesCache.push(DD)
            }
            if (OD.setTextures(PD), pD && JD.drawBuffers(xD), this._bindUnboundFramebuffer(ED), OD.setLayerAndFaceIndices(GD, BD), this.resetTextureCache(), MD) {
              if (gD > 1) {
                const DD = JD.createFramebuffer();
                if (!DD) throw new Error("Unable to create multi sampled framebuffer");
                OD._samples = gD, OD._MSAAFramebuffer = DD, cD > 0 && pD && (this._bindUnboundFramebuffer(DD), JD.drawBuffers(xD), this._bindUnboundFramebuffer(ED))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(OD, gD, pD);
            return OD
          }, Cz.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(DD, zD) {
            let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.AB < 2 || !DD) return 1;
            if (DD.samples === zD) return zD;
            const pD = this._gl;
            zD = Math.min(zD, this.getCaps().maxMSAASamples), DD._depthStencilBuffer && (pD.deleteRenderbuffer(DD._depthStencilBuffer), DD._depthStencilBuffer = null), DD._MSAAFramebuffer && (pD.deleteFramebuffer(DD._MSAAFramebuffer), DD._MSAAFramebuffer = null);
            const sD = DD._attachments.length;
            for (let rD = 0; rD < sD; rD++) {
              const zD = DD.textures[rD]._hardwareTexture;
              zD?.releaseMSAARenderBuffers()
            }
            if (zD > 1 && "function" === typeof pD.renderbufferStorageMultisample) {
              const KD = pD.createFramebuffer();
              if (!KD) throw new Error("Unable to create multi sampled framebuffer");
              DD._MSAAFramebuffer = KD, this._bindUnboundFramebuffer(KD);
              const rD = [];
              for (let wD = 0; wD < sD; wD++) {
                const sD = DD.textures[wD],
                  KD = sD._hardwareTexture,
                  LD = pD[this.AB > 1 ? "COLOR_ATTACHMENT" + wD : "COLOR_ATTACHMENT" + wD + "_WEBGL"],
                  cD = this._createRenderBuffer(sD.width, sD.height, zD, -1, this._getRGBABufferInternalSizedFormat(sD.type, sD.format, sD._useSRGBBuffer), LD);
                if (!cD) throw new Error("Unable to create multi sampled framebuffer");
                KD.addMSAARenderBuffer(cD), sD.samples = zD, rD.push(LD)
              }
              wD && pD.drawBuffers(rD)
            } else this._bindUnboundFramebuffer(DD._framebuffer);
            const KD = DD._depthStencilTexture ? DD._depthStencilTexture.format : void 0;
            return DD._depthStencilBuffer = this._setupFramebufferDepthAttachments(DD._generateStencilBuffer, DD._generateDepthBuffer, DD.width, DD.height, zD, KD), this._bindUnboundFramebuffer(null), DD._samples = zD, zD
          }, Cz.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(DD) {
            const zD = DD,
              wD = this._gl;
            if (zD.isMulti)
              for (let pD = 0; pD < zD._attachments.length; pD++) {
                const DD = zD.textures[pD];
                !DD?.generateMipMaps || DD?.isCube || DD?.is3D || (this._bindTextureDirectly(wD.TEXTURE_2D, DD, !0), wD.generateMipmap(wD.TEXTURE_2D), this._bindTextureDirectly(wD.TEXTURE_2D, null))
              }
          }, Cz.ThinEngine.prototype.resolveMultiFramebuffer = function(DD) {
            const zD = DD,
              wD = this._gl;
            if (!zD._MSAAFramebuffer || !zD.isMulti) return;
            let pD = zD.resolveMSAAColors ? wD.COLOR_BUFFER_BIT : 0;
            pD |= zD._generateDepthBuffer && zD.resolveMSAADepth ? wD.DEPTH_BUFFER_BIT : 0, pD |= zD._generateStencilBuffer && zD.resolveMSAAStencil ? wD.STENCIL_BUFFER_BIT : 0;
            const sD = zD._attachments,
              KD = sD.length;
            wD.bindFramebuffer(wD.READ_FRAMEBUFFER, zD._MSAAFramebuffer), wD.bindFramebuffer(wD.DRAW_FRAMEBUFFER, zD._framebuffer);
            for (let rD = 0; rD < KD; rD++) {
              const DD = zD.textures[rD];
              for (let zD = 0; zD < KD; zD++) sD[zD] = wD.NONE;
              sD[rD] = wD[this.AB > 1 ? "COLOR_ATTACHMENT" + rD : "COLOR_ATTACHMENT" + rD + "_WEBGL"], wD.readBuffer(sD[rD]), wD.drawBuffers(sD), wD.blitFramebuffer(0, 0, DD.width, DD.height, 0, 0, DD.width, DD.height, pD, wD.NEAREST)
            }
            for (let rD = 0; rD < KD; rD++) sD[rD] = wD[this.AB > 1 ? "COLOR_ATTACHMENT" + rD : "COLOR_ATTACHMENT" + rD + "_WEBGL"];
            wD.drawBuffers(sD), wD.bindFramebuffer(this._gl.FRAMEBUFFER, zD._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = KD;
        const AD = [],
          UD = [],
          fD = [],
          ID = [],
          BD = [],
          GD = [],
          hD = [],
          nD = [];
        this._initTypes(wD, AD, UD, fD, ID, BD, GD, hD, nD, sD);
        const MD = !sD || void 0 === sD.generateDepthBuffer || sD.generateDepthBuffer,
          OD = !(!sD || void 0 === sD.generateStencilBuffer) && sD.generateStencilBuffer,
          JD = sD && sD.samples ? sD.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: UD,
          generateMipMaps: rD,
          generateDepthBuffer: MD,
          generateStencilBuffer: OD,
          generateDepthTexture: LD,
          depthTextureFormat: cD,
          types: AD,
          wLD: wD,
          useSRGBBuffers: fD,
          samples: JD,
          formats: ID,
          targetTypes: BD,
          faceIndex: GD,
          layerIndex: hD,
          layerCounts: nD,
          labels: KD,
          label: DD
        }, this._count = wD, this._drawOnlyOnFirstAttachmentByDefault = RD, wD > 0 && (this._createInternalTextures(), this._createTextures(KD))
      }
      _initTypes(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
        for (let RD = 0; RD < DD; RD++) gD && gD.types && void 0 !== gD.types[RD] ? zD.push(gD.types[RD]) : zD.push(gD && gD.defaultType ? gD.defaultType : 0), gD && gD.samplingModes && void 0 !== gD.samplingModes[RD] ? wD.push(gD.samplingModes[RD]) : wD.push(TD.d.BILINEAR_SAMPLINGMODE), gD && gD.useSRGBBuffers && void 0 !== gD.useSRGBBuffers[RD] ? pD.push(gD.useSRGBBuffers[RD]) : pD.push(!1), gD && gD.formats && void 0 !== gD.formats[RD] ? sD.push(gD.formats[RD]) : sD.push(5), gD && gD.targetTypes && void 0 !== gD.targetTypes[RD] ? KD.push(gD.targetTypes[RD]) : KD.push(3553), gD && gD.faceIndex && void 0 !== gD.faceIndex[RD] ? rD.push(gD.faceIndex[RD]) : rD.push(0), gD && gD.layerIndex && void 0 !== gD.layerIndex[RD] ? LD.push(gD.layerIndex[RD]) : LD.push(0), gD && gD.layerCounts && void 0 !== gD.layerCounts[RD] ? cD.push(gD.layerCounts[RD]) : cD.push(1)
      }
      _createInternaTextureIndexMapping() {
        const DD = {},
          zD = [];
        if (!this._renderTarget) return zD;
        const wD = this._renderTarget.textures;
        for (let pD = 0; pD < wD.length; pD++) {
          const sD = wD[pD];
          if (!sD) continue;
          const KD = DD[sD.uniqueId];
          void 0 !== KD ? zD[pD] = KD : DD[sD.uniqueId] = pD
        }
        return zD
      }
      _rebuild() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || DD) return;
        const pD = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), zD && (this._releaseTextures(), this._createTextures(wD));
        const sD = this._renderTarget.textures;
        for (let KD = 0; KD < sD.length; KD++) {
          const DD = this._textures[KD];
          void 0 !== pD[KD] && this._renderTarget.setTexture(sD[pD[KD]], KD), DD._texture = sD[KD], DD._texture && (DD._noMipmap = !DD._texture.useMipMaps, DD._useSRGBBuffer = DD._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let DD = 0; DD < this._textures.length; DD++) this._textures[DD]._texture = null, this._textures[DD].dispose()
      }
      _createTextures(DD) {
        const zD = this._renderTarget.textures;
        this._textures = [];
        for (let wD = 0; wD < zD.length; wD++) {
          const pD = new TD.d(null, this.Ul());
          DD?.[wD] && (pD.name = DD[wD]), pD._texture = zD[wD], pD._texture && (pD._noMipmap = !pD._texture.useMipMaps, pD._useSRGBBuffer = pD._texture._useSRGBBuffer), this._textures.push(pD)
        }
      }
      setInternalTexture(DD, zD) {
        let wD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === zD && (this._texture = DD), this.renderTarget.setTexture(DD, zD, wD), this.textures[zD] || (this.textures[zD] = new TD.d(null, this.Ul()), this.textures[zD].name = this._textureNames?.[zD] ?? this.textures[zD].name), this.textures[zD]._texture = DD, this.textures[zD]._noMipmap = !DD.useMipMaps, this.textures[zD]._useSRGBBuffer = DD._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[zD] = DD.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[zD] = DD.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[zD] = DD._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[zD])) {
          let wD;
          wD = DD.is2DArray ? 35866 : DD.isCube ? 34067 : DD.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[zD] = wD
        }
      }
      setLayerAndFaceIndex(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[DD] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[DD] = zD), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[DD] = wD), this.renderTarget.setLayerAndFaceIndex(DD, zD, wD))
      }
      setLayerAndFaceIndices(DD, zD) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = DD, this._multiRenderTargetOptions.faceIndex = zD, this.renderTarget.setLayerAndFaceIndices(DD, zD))
      }
      get samples() {
        return this._samples
      }
      set samples(DD) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(DD) : this._samples = DD
      }
      resize(DD) {
        this._processSizeParameter(DD), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(DD, zD, wD) {
        this._multiRenderTargetOptions.wLD = DD, this._count = DD;
        const pD = [],
          sD = [],
          KD = [],
          rD = [],
          LD = [],
          cD = [],
          gD = [],
          RD = [];
        this._textureNames = wD, this._initTypes(DD, pD, sD, KD, rD, LD, cD, gD, RD, zD), this._multiRenderTargetOptions.types = pD, this._multiRenderTargetOptions.samplingModes = sD, this._multiRenderTargetOptions.useSRGBBuffers = KD, this._multiRenderTargetOptions.formats = rD, this._multiRenderTargetOptions.targetTypes = LD, this._multiRenderTargetOptions.faceIndex = cD, this._multiRenderTargetOptions.layerIndex = gD, this._multiRenderTargetOptions.layerCounts = RD, this._multiRenderTargetOptions.labels = wD, this._rebuild(!1, !0, wD)
      }
      _unbindFrameBuffer(DD, zD) {
        this._renderTarget && DD.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(zD)
        }))
      }
      dispose() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), DD ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const DD = this._renderTarget?.textures;
        if (DD) {
          for (let zD = DD.length - 1; zD >= 0; zD--) this._textures[zD]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var Sz = wD(40097);
    class iz {
      constructor(DD) {
        this.name = Sz.d.NAME_GEOMETRYBUFFERRENDERER, this.oB = DD
      }
      register() {
        this.oB._gatherRenderTargetsStage.registerStep(Sz.d.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(DD) {
        this.oB._geometryBufferRenderer && DD.push(this.oB._geometryBufferRenderer.getGBuffer())
      }
    }
    let lz = !1;
    var Wz;
    ! function(DD) {
      DD[DD.Small = 0] = "Small", DD[DD.Medium = 1] = "Medium", DD[DD.Large = 2] = "Large", DD[DD.ExtraLarge = 3] = "ExtraLarge"
    }(Wz || (Wz = {}));
    const Nz = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      Zz = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class yz {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(DD) {
        if (DD && this._enableMeshBlendTag && !this._scene.iI().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = DD
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(DD) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = DD, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(DD, zD) {
        DD === yz.POSITION_TEXTURE_TYPE ? (this._positionIndex = zD, this._enablePosition = !0) : DD === yz.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = zD, this._enableVelocity = !0) : DD === yz.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = zD, this._enableVelocityLinear = !0) : DD === yz.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = zD, this._enableReflectivity = !0) : DD === yz.DEPTH_TEXTURE_TYPE ? (this._depthIndex = zD, this._enableDepth = !0) : DD === yz.NORMAL_TEXTURE_TYPE ? (this._normalIndex = zD, this._enableNormal = !0) : DD === yz.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = zD, this._enableScreenspaceDepth = !0) : DD === yz.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = zD, this._enableIrradiance = !0) : DD === yz.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = zD, this._enableObjectId = !0) : DD === yz.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = zD, this._enableMeshBlendTag = !0)
      }
      _setAttachments(DD) {
        this._attachmentsFromPrePass = DD
      }
      _linkInternalTexture(DD) {
        this._multiRenderTarget.setInternalTexture(DD, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(DD) {
        this._multiRenderTarget.renderList = DD
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(DD) {
        switch (DD) {
          case yz.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case yz.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case yz.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case yz.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case yz.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case yz.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case yz.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case yz.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case yz.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case yz.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(DD) {
        this._enableDepth = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(DD) {
        this._enableNormal = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(DD) {
        this._enablePosition = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(DD) {
        this._enableVelocity = DD, DD || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = DD
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(DD) {
        this._enableVelocityLinear = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(DD) {
        this._enableReflectivity = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(DD) {
        this._enableScreenspaceDepth = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(DD) {
        this._enableIrradiance = DD, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(DD) {
        if (DD && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (DD && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (DD && !this._enableObjectId && !this._linkedWithPrePass) {
          const DD = this._scene.iI(),
            zD = Math.min(DD.getCaps().maxDrawBuffers ?? 1, 8),
            wD = this._assignRenderTargetIndices()[0] + 1;
          if (DD.getCaps().drawBuffersExtension && wD > zD) throw new Error(`GeometryBufferRenderer: ${wD} color attachments were requested, but this engine supports at most ${zD}`)
        }
        this._enableObjectId = DD, DD || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(DD) {
        if (this._enableMeshBlendTag !== DD) {
          if (DD) {
            const DD = this._scene.iI();
            if (! function(DD) {
                return "NATIVE" !== DD.shaderPlatformName && (DD.isWebGPU || 2 === DD.AB)
              }(DD)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !DD.isWebGPU && !DD.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const zD = Math.min(DD.getCaps().maxDrawBuffers ?? 1, 8),
                wD = this._assignRenderTargetIndices()[0] + 1;
              if (DD.getCaps().drawBuffersExtension && wD > zD) throw new Error(`GeometryBufferRenderer: ${wD} color attachments were requested, but this engine supports at most ${zD}`)
            }
          }
          this._enableMeshBlendTag = DD, DD || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get oB() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        var sD;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new aD.h(0, 0, 0, 0), this._clearDepthColor = new aD.h(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = DD, this._ratioOrDimensions = zD, this._useUbo = DD.iI().supportsUniformBuffers, this._depthFormat = wD, this._textureTypesAndFormats = pD || {}, this._initShaderSourceAsync(), sD = yz, lz || (lz = !0, Object.defineProperty(WD.e.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(DD) {
            DD && DD.isSupported && (this._geometryBufferRenderer = DD)
          },
          enumerable: !0,
          configurable: !0
        }), WD.e.prototype.enableGeometryBufferRenderer = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            wD = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new sD(this, DD, zD, wD), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, WD.e.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, sD._SceneComponentInitialization = DD => {
          let zD = DD._getComponent(Sz.d.NAME_GEOMETRYBUFFERRENDERER);
          zD || (zD = new iz(DD), DD.ApD(zD))
        }), yz._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.iI().isWebGPU && !yz.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([wD.e(337).then((() => wD(61580))), Promise.all([wD.e(336), wD.e(348)]).then((() => wD(61585)))])) : await Promise.all([wD.e(320).then((() => wD(61589))), wD.e(319).then((() => wD(61597)))]), this._shadersLoaded = !0
      }
      isReady(DD, zD) {
        if (!this._shadersLoaded) return !1;
        const wD = DD.yI();
        if (wD && wD.disableDepthWrite) return !1;
        if (function(DD) {
            return DD._isGaussianSplatting || "GaussianSplattingMesh" === (zD = DD.getClassName()) || "GaussianSplattingStream" === zD;
            var zD
          }(DD.getMesh())) return !1;
        const pD = [],
          sD = [ZD.k.PositionKind],
          KD = DD.getMesh();
        KD.isVerticesDataPresent(ZD.k.NormalKind) && (pD.push("#define HAS_NORMAL_ATTRIBUTE"), sD.push(ZD.k.NormalKind));
        let rD = !1,
          LD = !1;
        if (wD) {
          let DD = !1;
          if (wD.needAlphaTestingForMesh(KD) && wD.getAlphaTestTexture() && (pD.push("#define ALPHATEST"), pD.push(`#define ALPHATEST_UV${wD.getAlphaTestTexture().coordinatesIndex+1}`), DD = !0), (wD.bumpTexture || wD.normalTexture || wD.geometryNormalTexture) && FD.d.BumpTextureEnabled) {
            const zD = wD.bumpTexture || wD.normalTexture || wD.geometryNormalTexture;
            pD.push("#define BUMP"), pD.push(`#define BUMP_UV${zD.coordinatesIndex+1}`), DD = !0
          }
          if (this._enableReflectivity) {
            let zD = !1;
            if ("PBRMetallicRoughnessMaterial" === wD.getClassName()) wD.metallicRoughnessTexture && (pD.push("#define ORMTEXTURE"), pD.push(`#define REFLECTIVITY_UV${wD.metallicRoughnessTexture.coordinatesIndex+1}`), pD.push("#define METALLICWORKFLOW"), DD = !0, zD = !0), null != wD.metallic && (pD.push("#define METALLIC"), pD.push("#define METALLICWORKFLOW"), zD = !0), null != wD.roughness && (pD.push("#define ROUGHNESS"), pD.push("#define METALLICWORKFLOW"), zD = !0), zD && (wD.baseTexture && (pD.push("#define ALBEDOTEXTURE"), pD.push(`#define ALBEDO_UV${wD.baseTexture.coordinatesIndex+1}`), wD.baseTexture.gammaSpace && pD.push("#define GAMMAALBEDO"), DD = !0), wD.baseColor && pD.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === wD.getClassName()) wD.specularGlossinessTexture ? (pD.push("#define SPECULARGLOSSINESSTEXTURE"), pD.push(`#define REFLECTIVITY_UV${wD.specularGlossinessTexture.coordinatesIndex+1}`), DD = !0, wD.specularGlossinessTexture.gammaSpace && pD.push("#define GAMMAREFLECTIVITYTEXTURE")) : wD.specularColor && pD.push("#define REFLECTIVITYCOLOR"), null != wD.glossiness && pD.push("#define GLOSSINESS");
            else if ("PBRMaterial" === wD.getClassName()) wD.metallicTexture && (pD.push("#define ORMTEXTURE"), pD.push(`#define REFLECTIVITY_UV${wD.metallicTexture.coordinatesIndex+1}`), pD.push("#define METALLICWORKFLOW"), DD = !0, zD = !0), null != wD.metallic && (pD.push("#define METALLIC"), pD.push("#define METALLICWORKFLOW"), zD = !0), null != wD.roughness && (pD.push("#define ROUGHNESS"), pD.push("#define METALLICWORKFLOW"), zD = !0), zD ? (wD.albedoTexture && (pD.push("#define ALBEDOTEXTURE"), pD.push(`#define ALBEDO_UV${wD.albedoTexture.coordinatesIndex+1}`), wD.albedoTexture.gammaSpace && pD.push("#define GAMMAALBEDO"), DD = !0), wD.albedoColor && pD.push("#define ALBEDOCOLOR")) : (wD.reflectivityTexture ? (pD.push("#define SPECULARGLOSSINESSTEXTURE"), pD.push(`#define REFLECTIVITY_UV${wD.reflectivityTexture.coordinatesIndex+1}`), wD.reflectivityTexture.gammaSpace && pD.push("#define GAMMAREFLECTIVITYTEXTURE"), DD = !0) : wD.reflectivityColor && pD.push("#define REFLECTIVITYCOLOR"), null != wD.microSurface && pD.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === wD.getClassName()) wD.specularTexture && (pD.push("#define REFLECTIVITYTEXTURE"), pD.push(`#define REFLECTIVITY_UV${wD.specularTexture.coordinatesIndex+1}`), wD.specularTexture.gammaSpace && pD.push("#define GAMMAREFLECTIVITYTEXTURE"), DD = !0), wD.specularColor && pD.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === wD.getClassName()) {
              const zD = wD;
              pD.push("#define METALLIC"), pD.push("#define ROUGHNESS"), zD._useRoughnessFromMetallicTextureGreen && zD.baseMetalnessTexture ? (pD.push("#define ORMTEXTURE"), pD.push(`#define REFLECTIVITY_UV${zD.baseMetalnessTexture.coordinatesIndex+1}`), DD = !0) : zD.baseMetalnessTexture ? (pD.push("#define METALLIC_TEXTURE"), pD.push(`#define METALLIC_UV${zD.baseMetalnessTexture.coordinatesIndex+1}`), DD = !0) : zD.specularRoughnessTexture && (pD.push("#define ROUGHNESS_TEXTURE"), pD.push(`#define ROUGHNESS_UV${zD.specularRoughnessTexture.coordinatesIndex+1}`), DD = !0), zD.baseColorTexture && (pD.push("#define ALBEDOTEXTURE"), pD.push(`#define ALBEDO_UV${zD.baseColorTexture.coordinatesIndex+1}`), zD.baseColorTexture.gammaSpace && pD.push("#define GAMMAALBEDO"), DD = !0), zD.baseColor && pD.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (pD.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === wD.getClassName())) {
            const zD = wD;
            zD.subsurfaceWeight > 0 && zD.subsurfaceWeightTexture && (pD.push("#define SUBSURFACE_WEIGHT"), pD.push(`#define SUBSURFACEWEIGHT_UV${zD.subsurfaceWeightTexture.coordinatesIndex+1}`), DD = !0), zD.transmissionWeight > 0 && zD.transmissionWeightTexture && (pD.push("#define TRANSMISSION_WEIGHT"), pD.push(`#define TRANSMISSIONWEIGHT_UV${zD.transmissionWeightTexture.coordinatesIndex+1}`), DD = !0)
          }
          DD && (pD.push("#define NEED_UV"), KD.isVerticesDataPresent(ZD.k.UVKind) && (sD.push(ZD.k.UVKind), pD.push("#define UV1"), rD = !0), KD.isVerticesDataPresent(ZD.k.UV2Kind) && (sD.push(ZD.k.UV2Kind), pD.push("#define UV2"), LD = !0))
        }
        if (this._enableDepth && (pD.push("#define DEPTH"), pD.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (pD.push("#define NORMAL"), pD.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (pD.push("#define POSITION"), pD.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (pD.push("#define VELOCITY"), pD.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(KD) && pD.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (pD.push("#define VELOCITY_LINEAR"), pD.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(KD) && pD.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (pD.push("#define REFLECTIVITY"), pD.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (pD.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), pD.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          pD.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), pD.push("#define IRRADIANCE");
          const DD = this._scene;
          if (DD.environmentTexture) {
            const zD = {};
            let sD = !1,
              KD = 0;
            "OpenPBRMaterial" !== wD.getClassName() && "StandardMaterial" !== wD.getClassName() && "PBRMetallicRoughnessMaterial" !== wD.getClassName() && "PBRSpecularGlossinessMaterial" !== wD.getClassName() && "PBRMaterial" !== wD.getClassName() || (sD = !!wD.realtimeFiltering, KD = wD.realtimeFilteringQuality || 0), (0, HD.Z)(DD, DD.environmentTexture, zD, sD, KD, !0);
            for (const DD in zD) zD[DD] && pD.push("#define " + DD);
            zD.USEIRRADIANCEMAP || pD.push("#define SPHERICAL_HARMONICS");
            const rD = DD.postProcessRenderPipelineManager.supportedPipelines.find((DD => "IBLShadowsRenderPipeline" === DD.getClassName()));
            if (rD) {
              const DD = rD;
              DD._getAccumulatedTexture() && (pD.push("#define IBL_SHADOW_TEXTURE"), DD.coloredShadows && pD.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (pD.push("#define OBJECT_ID"), pD.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (pD.push("#define MESH_BLEND_TAG"), pD.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && pD.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && pD.push("#define ENCODE_NORMAL"), KD.useBones && KD.computeBonesUsingShaders && KD.skeleton ? (sD.push(ZD.k.MatricesIndicesKind), sD.push(ZD.k.MatricesWeightsKind), KD.numBoneInfluencers > 4 && (sD.push(ZD.k.MatricesIndicesExtraKind), sD.push(ZD.k.MatricesWeightsExtraKind)), pD.push("#define NUM_BONE_INFLUENCERS " + KD.numBoneInfluencers), pD.push("#define BONETEXTURE " + KD.skeleton.isUsingTextureForMatrices), pD.push("#define BonesPerMesh " + (KD.skeleton.bones.length + 1))) : (pD.push("#define NUM_BONE_INFLUENCERS 0"), pD.push("#define BONETEXTURE false"), pD.push("#define BonesPerMesh 0"));
        const cD = KD.morphTargetManager ? (0, HD.O)(KD.morphTargetManager, pD, sD, KD, !0, !0, !1, rD, LD, !1) : 0;
        zD && (pD.push("#define INSTANCES"), (0, HD.Eb)(sD, this._enableVelocity || this._enableVelocityLinear), DD.getRenderingMesh().hasThinInstances && pD.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? pD.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : pD.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, Rz.n)(wD, this._scene, pD);
        const gD = this._scene.iI(),
          RD = DD._getDrawWrapper(void 0, !0),
          AD = RD.defines,
          UD = pD.join("\n");
        return AD !== UD && RD.setEffect(gD.createEffect("geometry", {
          attributes: sD,
          uniformsNames: Zz,
          samplers: Nz,
          defines: UD,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: cD
          },
          shaderLanguage: this.shaderLanguage
        }, gD), UD), RD.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(DD) {
        if (this._enableObjectId && 1 !== DD) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== DD) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = DD
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.iI().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.oB.iI()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.oB.iI().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const DD = [],
          zD = [];
        let wD = 0;
        return this._enableDepth && (this._depthIndex = wD, wD++, DD.push("gBuffer_Depth"), zD.push(this._textureTypesAndFormats[yz.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = wD, wD++, DD.push("gBuffer_Normal"), zD.push(this._textureTypesAndFormats[yz.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = wD, wD++, DD.push("gBuffer_Position"), zD.push(this._textureTypesAndFormats[yz.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = wD, wD++, DD.push("gBuffer_Velocity"), zD.push(this._textureTypesAndFormats[yz.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = wD, wD++, DD.push("gBuffer_VelocityLinear"), zD.push(this._textureTypesAndFormats[yz.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = wD, wD++, DD.push("gBuffer_Reflectivity"), zD.push(this._textureTypesAndFormats[yz.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = wD, wD++, DD.push("gBuffer_ScreenspaceDepth"), zD.push(this._textureTypesAndFormats[yz.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = wD, wD++, DD.push("gBuffer_Irradiance"), zD.push(this._textureTypesAndFormats[yz.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = wD, wD++, DD.push("gBuffer_ObjectId"), zD.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = wD, wD++, DD.push("gBuffer_MeshBlendTag"), zD.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [wD, DD, zD]
      }
      _createRenderTargets() {
        const DD = this._scene.iI(),
          [zD, wD, pD] = this._assignRenderTargetIndices(),
          sD = Math.min(DD.getCaps().maxDrawBuffers ?? 1, 8);
        if (DD.getCaps().drawBuffersExtension && zD > sD) throw new Error(`GeometryBufferRenderer: ${zD} color attachments were requested, but this engine supports at most ${sD}`);
        let rD = 0;
        DD._caps.textureFloat && DD._caps.textureFloatLinearFiltering ? rD = 1 : DD._caps.textureHalfFloat && DD._caps.textureHalfFloatLinearFiltering && (rD = 2);
        const LD = this._getRenderTargetDimensions(),
          cD = [],
          gD = [],
          RD = [];
        for (const KD of pD) KD ? (cD.push(KD.textureType), gD.push(KD.textureFormat), RD.push(KD.samplingMode ?? 2)) : (cD.push(rD), gD.push(5), RD.push(2));
        if (this._normalsAreUnsigned = 11 === cD[yz.NORMAL_TEXTURE_TYPE] || 13 === cD[yz.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new dz("gBuffer", LD, zD, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: cD,
            formats: gD,
            samplingModes: RD,
            depthTextureFormat: this._depthFormat
          }, wD.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = TD.d.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = TD.d.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const AD = [!0],
          UD = [!1],
          fD = [!0];
        for (let KD = 1; KD < zD; ++KD) AD.push(!0), fD.push(!1), UD.push(!0);
        const ID = DD.buildTextureLayout(AD),
          BD = DD.buildTextureLayout(UD),
          GD = DD.buildTextureLayout(fD);
        this._multiRenderTarget.onClearObservable.add((DD => {
          const zD = this.useSpecificClearForDepthTexture ? BD : ID;
          DD.clearAttachments(this._clearColor, zD, !0, !0, !0), this.useSpecificClearForDepthTexture && DD.clearAttachments(this._clearDepthColor, GD, !0, !1, !1), DD.bindAttachments(ID)
        })), this._resizeObserver = DD.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const hD = DD => {
          const zD = DD.getRenderingMesh(),
            wD = DD.getEffectiveMesh(),
            pD = this._scene,
            sD = pD.iI(),
            rD = DD.yI();
          if (!rD) return;
          if (wD._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[wD.uniqueId] && (this._previousTransformationMatrices[wD.uniqueId] = {
              KU: ND.e.Identity(),
              viewProjection: pD.getTransformMatrix()
            }, zD.skeleton)) {
            const DD = zD.skeleton.getTransformMatrices(zD);
            this._previousBonesTransformationMatrices[zD.uniqueId] = this._copyBonesTransformationMatrices(DD, new Float32Array(DD.length))
          }
          const LD = zD._getInstancesRenderList(DD._id, !!DD.getReplacementMesh());
          if (LD.mustReturn) return;
          const cD = sD.getCaps().instancedArrays && (null !== LD.visibleInstances[DD._id] || zD.hasThinInstances),
            gD = wD.getWorldMatrix();
          if (this.isReady(DD, cD)) {
            const RD = DD._getDrawWrapper();
            if (!RD) return;
            const AD = RD.effect;
            let UD;
            sD.enableEffect(RD), cD || zD._bind(DD, AD, rD.fillMode), this._useUbo ? ((0, HD.v)(AD, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (AD.setMatrix("viewProjection", pD.getTransformMatrix()), AD.setMatrix("view", pD.getViewMatrix()), this._scene.bindEyePosition(AD, "vEyePosition"));
            if (zD._instanceDataStorage.isFrozen || !rD.backFaceCulling && null === rD.sideOrientation) UD = zD._effectiveSideOrientation;
            else {
              const DD = wD._getWorldMatrixDeterminant();
              UD = rD._getEffectiveOrientation(zD), DD < 0 && (UD = UD === KD.b.ClockWiseSideOrientation ? KD.b.CounterClockWiseSideOrientation : KD.b.ClockWiseSideOrientation)
            }
            if (rD._preBind(RD, UD), rD.needAlphaTestingForMesh(wD)) {
              const DD = rD.getAlphaTestTexture();
              DD && (AD.setTexture("diffuseSampler", DD), AD.setMatrix("diffuseMatrix", DD.getTextureMatrix()), AD.setFloat("alphaCutOff", rD.alphaCutOff ?? .4))
            }
            if ((rD.bumpTexture || rD.normalTexture || rD.geometryNormalTexture) && pD.iI().getCaps().standardDerivatives && FD.d.BumpTextureEnabled) {
              const DD = rD.bumpTexture || rD.normalTexture || rD.geometryNormalTexture;
              AD.setFloat3("vBumpInfos", DD.coordinatesIndex, 1 / DD.level, rD.parallaxScaleBias), AD.setMatrix("bumpMatrix", DD.getTextureMatrix()), AD.setTexture("bumpSampler", DD), AD.setFloat2("vTangentSpaceParams", rD.invertNormalMapX ? -1 : 1, rD.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === rD.getClassName()) null !== rD.metallicRoughnessTexture && (AD.setTexture("reflectivitySampler", rD.metallicRoughnessTexture), AD.setMatrix("reflectivityMatrix", rD.metallicRoughnessTexture.getTextureMatrix())), null !== rD.metallic && AD.setFloat("metallic", rD.metallic), null !== rD.roughness && AD.setFloat("glossiness", 1 - rD.roughness), null !== rD.baseTexture && (AD.setTexture("albedoSampler", rD.baseTexture), AD.setMatrix("albedoMatrix", rD.baseTexture.getTextureMatrix())), null !== rD.baseColor && AD.setColor3("albedoColor", rD.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === rD.getClassName()) null !== rD.specularGlossinessTexture ? (AD.setTexture("reflectivitySampler", rD.specularGlossinessTexture), AD.setMatrix("reflectivityMatrix", rD.specularGlossinessTexture.getTextureMatrix())) : null !== rD.specularColor && AD.setColor3("reflectivityColor", rD.specularColor), null !== rD.glossiness && AD.setFloat("glossiness", rD.glossiness);
            else if ("PBRMaterial" === rD.getClassName()) null !== rD.metallicTexture && (AD.setTexture("reflectivitySampler", rD.metallicTexture), AD.setMatrix("reflectivityMatrix", rD.metallicTexture.getTextureMatrix())), null !== rD.metallic && AD.setFloat("metallic", rD.metallic), null !== rD.roughness && AD.setFloat("glossiness", 1 - rD.roughness), null !== rD.roughness || null !== rD.metallic || null !== rD.metallicTexture ? (null !== rD.albedoTexture && (AD.setTexture("albedoSampler", rD.albedoTexture), AD.setMatrix("albedoMatrix", rD.albedoTexture.getTextureMatrix())), null !== rD.albedoColor && AD.setColor3("albedoColor", rD.albedoColor)) : (null !== rD.reflectivityTexture ? (AD.setTexture("reflectivitySampler", rD.reflectivityTexture), AD.setMatrix("reflectivityMatrix", rD.reflectivityTexture.getTextureMatrix())) : null !== rD.reflectivityColor && AD.setColor3("reflectivityColor", rD.reflectivityColor), null !== rD.microSurface && AD.setFloat("glossiness", rD.microSurface));
            else if ("StandardMaterial" === rD.getClassName()) null !== rD.specularTexture && (AD.setTexture("reflectivitySampler", rD.specularTexture), AD.setMatrix("reflectivityMatrix", rD.specularTexture.getTextureMatrix())), null !== rD.specularColor && AD.setColor3("reflectivityColor", rD.specularColor);
            else if ("OpenPBRMaterial" === rD.getClassName()) {
              const DD = rD;
              DD._useRoughnessFromMetallicTextureGreen && DD.baseMetalnessTexture ? (AD.setTexture("reflectivitySampler", DD.baseMetalnessTexture), AD.setMatrix("reflectivityMatrix", DD.baseMetalnessTexture.getTextureMatrix())) : DD.baseMetalnessTexture ? (AD.setTexture("metallicSampler", DD.baseMetalnessTexture), AD.setMatrix("metallicMatrix", DD.baseMetalnessTexture.getTextureMatrix())) : DD.specularRoughnessTexture && (AD.setTexture("roughnessSampler", DD.specularRoughnessTexture), AD.setMatrix("roughnessMatrix", DD.specularRoughnessTexture.getTextureMatrix())), AD.setFloat("metallic", DD.baseMetalness), AD.setFloat("glossiness", 1 - DD.specularRoughness), null !== DD.baseColorTexture && (AD.setTexture("albedoSampler", DD.baseColorTexture), AD.setMatrix("albedoMatrix", DD.baseColorTexture.getTextureMatrix())), null !== DD.baseColor && AD.setColor3("albedoColor", DD.baseColor)
            }
            if (this._enableIrradiance && pD.environmentTexture) {
              const DD = pD.environmentTexture,
                zD = pD.postProcessRenderPipelineManager.supportedPipelines.find((DD => "IBLShadowsRenderPipeline" === DD.getClassName()));
              if (zD) {
                const DD = zD._getAccumulatedTexture();
                DD && (AD.setTexture("iblShadowSampler", DD), AD.setFloat2("shadowTextureSize", DD.getSize().width, DD.getSize().height))
              }
              if (AD.setMatrix("reflectionMatrix", DD.getReflectionTextureMatrix()), AD.setFloat2("vReflectionInfos", DD.level * pD.iblIntensity, 0), AD.setTexture("reflectionSampler", DD), DD.irradianceTexture && (AD.setTexture("irradianceSampler", DD.irradianceTexture), DD.irradianceTexture._dominantDirection && AD.setVector3("vReflectionDominantDirection", DD.irradianceTexture._dominantDirection)), DD.sphericalPolynomial) {
                const zD = DD.sphericalPolynomial;
                if (zD.preScaledHarmonics) {
                  const DD = zD.preScaledHarmonics;
                  AD.setVector3("vSphericalL00", DD.l00), AD.setVector3("vSphericalL1_1", DD.l1_1), AD.setVector3("vSphericalL10", DD.l10), AD.setVector3("vSphericalL11", DD.l11), AD.setVector3("vSphericalL2_2", DD.l2_2), AD.setVector3("vSphericalL2_1", DD.l2_1), AD.setVector3("vSphericalL20", DD.l20), AD.setVector3("vSphericalL21", DD.l21), AD.setVector3("vSphericalL22", DD.l22)
                } else AD.setFloat3("vSphericalX", zD.x.x, zD.x.y, zD.x.z), AD.setFloat3("vSphericalY", zD.y.x, zD.y.y, zD.y.z), AD.setFloat3("vSphericalZ", zD.z.x, zD.z.y, zD.z.z), AD.setFloat3("vSphericalXX_ZZ", zD.xx.x - zD.zz.x, zD.xx.y - zD.zz.y, zD.xx.z - zD.zz.z), AD.setFloat3("vSphericalYY_ZZ", zD.yy.x - zD.zz.x, zD.yy.y - zD.zz.y, zD.yy.z - zD.zz.z), AD.setFloat3("vSphericalZZ", zD.zz.x, zD.zz.y, zD.zz.z), AD.setFloat3("vSphericalXY", zD.xy.x, zD.xy.y, zD.xy.z), AD.setFloat3("vSphericalYZ", zD.yz.x, zD.yz.y, zD.yz.z), AD.setFloat3("vSphericalZX", zD.zx.x, zD.zx.y, zD.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === rD.getClassName()) {
                const DD = rD;
                AD.setFloat("vSubsurfaceWeight", DD.subsurfaceWeight), DD.subsurfaceWeightTexture && (AD.setTexture("subsurfaceWeightSampler", DD.subsurfaceWeightTexture), AD.setMatrix("subsurfaceWeightMatrix", DD.subsurfaceWeightTexture.getTextureMatrix())), AD.setFloat("vTransmissionWeight", DD.transmissionWeight), DD.transmissionWeightTexture && (AD.setTexture("transmissionWeightSampler", DD.transmissionWeightTexture), AD.setMatrix("transmissionWeightMatrix", DD.transmissionWeightTexture.getTextureMatrix())), AD.setFloat("vTransmissionScatterAnisotropy", DD.transmissionScatterAnisotropy), AD.setFloat("vSubsurfaceScatterAnisotropy", DD.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, Rz.f)(AD, rD, this._scene), zD.useBones && zD.computeBonesUsingShaders && zD.skeleton) {
              const DD = zD.skeleton;
              if (DD.isUsingTextureForMatrices && AD.getUniformIndex("boneTextureInfo") > -1) {
                const wD = DD.getTransformMatrixTexture(zD);
                AD.setTexture("boneSampler", wD), AD.setFloat2("boneTextureInfo", DD._textureWidth, DD._textureHeight)
              } else AD.setMatrices("mBones", zD.skeleton.getTransformMatrices(zD));
              (this._enableVelocity || this._enableVelocityLinear) && AD.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[zD.uniqueId])
            }
            if ((0, HD.s)(zD, AD), zD.morphTargetManager && zD.morphTargetManager.isUsingTextureForTargets && zD.morphTargetManager._bind(AD), (this._enableVelocity || this._enableVelocityLinear) && (AD.setMatrix("previousWorld", this._previousTransformationMatrices[wD.uniqueId].KU), AD.setMatrix("previousViewProjection", this._previousTransformationMatrices[wD.uniqueId].viewProjection)), this._enableObjectId) {
              let DD = zD.uniqueId;
              if (this.objectIdProvider) DD = (0, fz.k)(zD, this.objectIdProvider);
              else if (DD > 16777215) throw new Error(`Invalid geometry object ID ${DD} for mesh "${zD.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              AD.setFloat("objectId", DD)
            }
            if (this._enableMeshBlendTag) {
              const DD = this.meshBlendTagProvider ? (0, fz.h)(zD, this.meshBlendTagProvider) : zD.meshBlendingTag;
              AD.setInt("meshBlendTag", DD)
            }
            cD && zD.hasThinInstances && AD.setMatrix("world", gD), zD._processRendering(wD, DD, AD, rD.fillMode, LD, cD, ((DD, zD) => {
              DD || AD.setMatrix("world", zD)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[wD.uniqueId].KU = gD.clone(), this._previousTransformationMatrices[wD.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), zD.skeleton && this._copyBonesTransformationMatrices(zD.skeleton.getTransformMatrices(zD), this._previousBonesTransformationMatrices[wD.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (zD, wD, pD) => {
          if ((pD || 0 === wD) && zD.QE)
            for (let sD = 0; sD < zD.QE.length; ++sD) {
              const wD = zD.QE[sD],
                pD = wD.yI(),
                KD = wD.getRenderingMesh();
              if (!pD) continue;
              const rD = KD._getInstancesRenderList(wD._id, !!wD.getReplacementMesh()),
                LD = DD.getCaps().instancedArrays && (null !== rD.visibleInstances[wD._id] || KD.hasThinInstances);
              if (!this.isReady(wD, LD)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (zD, wD, pD, sD) => {
          let KD;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.iI().bindAttachments(this._attachmentsFromPrePass)
          }
          if (sD.length) {
            for (DD.setColorWrite(!1), KD = 0; KD < sD.length; KD++) hD(sD.data[KD]);
            DD.setColorWrite(!0)
          }
          for (KD = 0; KD < zD.length; KD++) hD(zD.data[KD]);
          for (DD.setDepthWrite(!1), KD = 0; KD < wD.length; KD++) hD(wD.data[KD]);
          if (this.renderTransparentMeshes)
            for (KD = 0; KD < pD.length; KD++) hD(pD.data[KD]);
          DD.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const DD = this._scene.iI();
        return {
          width: Math.max(1, Math.floor(DD.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(DD.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(DD, zD) {
        for (let wD = 0; wD < DD.length; wD++) zD[wD] = DD[wD];
        return zD
      }
    }
    yz.ForceGLSL = !1, yz.DEPTH_TEXTURE_TYPE = 0, yz.NORMAL_TEXTURE_TYPE = 1, yz.POSITION_TEXTURE_TYPE = 2, yz.VELOCITY_TEXTURE_TYPE = 3, yz.REFLECTIVITY_TEXTURE_TYPE = 4, yz.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, yz.VELOCITY_LINEAR_TEXTURE_TYPE = 6, yz.IRRADIANCE_TEXTURE_TYPE = 7, yz.OBJECT_ID_TEXTURE_TYPE = 8, yz.MESH_BLEND_TAG_TEXTURE_TYPE = 9, yz._SceneComponentInitialization = DD => {
      throw (0, hz.j)("GeometryBufferRendererSceneComponent")
    };
    var kz = wD(37134);
    const mz = {
      effect: null,
      subMesh: null
    };

    function ez(DD) {
      if ("number" === typeof DD) return 1;
      if (DD instanceof ND.r) return 2;
      if (DD instanceof ND.s || DD instanceof aD.d) return 3;
      if (DD instanceof ND.t || DD instanceof aD.h) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class oz {
      populateVectorFromLinkedProperties(DD) {
        const zD = ez(DD);
        for (const wD in this.linkedProperties) {
          const DD = this.linkedProperties[wD],
            pD = DD.numComponents;
          if (zD < pD || DD.targetUniformComponentOffset > zD - pD) return void(1 == pD ? CD.d.Error(`Float property ${DD.name} has an offset that is too large.`) : CD.d.Error(`Vector${pD} property ${DD.name} won't fit in Vector${zD} or has an offset that is too large.`));
          "number" === typeof DD.value ? oz._tmpArray[DD.targetUniformComponentOffset] = DD.value : DD.value.toArray(oz._tmpArray, DD.targetUniformComponentOffset)
        }
        DD.cwD(oz._tmpArray)
      }
      constructor(DD, zD) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = DD, this.numComponents = zD
      }
    }
    oz._tmpArray = [0, 0, 0, 0];
    class az {
      constructor(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          KD = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = DD, this.targetUniformName = wD, this.defaultValue = zD, this.value = zD, this.targetUniformComponentNum = pD, this.targetUniformComponentOffset = sD, this.requiredDefine = KD
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : ez(this.defaultValue)
      }
    }
    class uz {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(DD, zD, wD) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = DD, this.samplerPrefix = zD, this.textureDefine = wD
      }
    }
    class vz extends((0, Bz.e)((0, Iz.b)(yD.d))) {}
    class tz extends(function(DD) {
      return class extends DD {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(vz)) {}
    class Fz extends((0, uD.e)(tz)) {
      constructor(DD) {
        super(DD), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Yz extends((0, Gz.b)(tD.d)) {}
    let Hz = (() => {
        var DD, zD, pD, sD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD, nD, MD, OD, JD, ED, QD, XD, bD, jD, dD, SD, WD, yD, kD, mD, eD, uD, tD, qD, Dz, zz, wz, pz, sz, Kz, rz, Lz, cz, gz, Iz, Bz, Gz, hz, nz, Mz, Oz, Jz, Ez, Vz, Pz, Cz, xz, Tz, bz, jz, dz, Sz, iz, lz, Wz, Nz, Zz, kz, ez, vz, tz, Hz, qz, Dw, zw, ww, pw, sw, Kw, rw, Lw, gw, Rw, Aw, Uw, fw, Iw, Bw, Gw, hw, nw, Mw, Ow, Jw, Ew, Qw, Xw, Vw, Pw, Cw, xw, Tw;
        let bw, jw, dw, Sw, iw, lw, Ww, Nw, Zw, yw, kw, mw, ew, ow, aw, uw, vw, tw, Fw, Yw, Hw, qw, Dp, zp, wp, pp, sp, Kp, rp, Lp, cp, gp, Rp, Ap, Up, fp, Ip, Bp, Gp, hp, np, Mp, Op, Jp, Ep, Qp, Xp, Vp, Pp, Cp, xp, Tp, bp, jp, dp, Sp, ip, lp, Wp, Np, Zp, yp, kp, mp, ep, op, ap, vp, tp, Fp, Yp, Hp, qp, Ds, zs, ws, ps, ss, Ks, rs, Ls, cs, gs, Rs, As, Us, fs, Is, Bs, Gs, hs, ns, Ms, Os, Es, Qs, Xs, Vs, Ps, Cs, xs, Ts, bs, ds, Ss, is = Yz,
          ls = [],
          Ws = [],
          Ns = [],
          Zs = [],
          ys = [],
          ks = [],
          ms = [],
          es = [],
          os = [],
          as = [],
          us = [],
          vs = [],
          ts = [],
          Fs = [],
          Ys = [],
          Hs = [],
          qs = [],
          DK = [],
          zK = [],
          wK = [],
          pK = [],
          sK = [],
          KK = [],
          rK = [],
          LK = [],
          cK = [],
          gK = [],
          RK = [],
          AK = [],
          UK = [],
          fK = [],
          IK = [],
          BK = [],
          GK = [],
          hK = [],
          nK = [],
          MK = [],
          OK = [],
          JK = [],
          EK = [],
          QK = [],
          XK = [],
          VK = [],
          PK = [],
          CK = [],
          xK = [],
          TK = [],
          bK = [],
          jK = [],
          dK = [],
          SK = [],
          iK = [],
          lK = [],
          WK = [],
          NK = [],
          ZK = [],
          yK = [],
          kK = [],
          mK = [],
          eK = [],
          oK = [],
          aK = [],
          uK = [],
          vK = [],
          tK = [],
          FK = [],
          YK = [],
          HK = [],
          qK = [],
          Dr = [],
          zr = [],
          wr = [],
          pr = [],
          sr = [],
          Kr = [],
          rr = [],
          Lr = [],
          cr = [],
          gr = [],
          Rr = [],
          Ar = [],
          Ur = [],
          fr = [],
          Ir = [],
          Br = [],
          Gr = [],
          hr = [],
          nr = [],
          Mr = [],
          Or = [],
          Jr = [],
          Er = [],
          Qr = [],
          Xr = [],
          Vr = [],
          Pr = [],
          Cr = [],
          xr = [],
          Tr = [],
          br = [],
          jr = [],
          dr = [],
          Sr = [],
          ir = [],
          lr = [],
          Wr = [],
          Nr = [],
          Zr = [],
          yr = [],
          kr = [],
          mr = [],
          er = [],
          or = [],
          ar = [],
          ur = [],
          vr = [],
          tr = [],
          Fr = [],
          Yr = [],
          Hr = [],
          qr = [],
          DL = [],
          zL = [],
          wL = [],
          pL = [],
          sL = [],
          KL = [],
          rL = [],
          LL = [],
          cL = [],
          gL = [],
          RL = [],
          AL = [],
          UL = [],
          fL = [],
          IL = [],
          BL = [],
          GL = [],
          hL = [],
          nL = [],
          ML = [],
          OL = [],
          JL = [],
          EL = [],
          QL = [],
          XL = [],
          VL = [],
          PL = [],
          CL = [],
          xL = [],
          TL = [],
          bL = [],
          jL = [],
          dL = [],
          SL = [],
          iL = [],
          lL = [],
          WL = [],
          NL = [],
          ZL = [],
          yL = [],
          kL = [],
          mL = [],
          eL = [],
          oL = [],
          aL = [],
          uL = [],
          vL = [],
          tL = [],
          FL = [],
          YL = [],
          HL = [],
          qL = [],
          Dc = [],
          zc = [],
          wc = [],
          pc = [],
          sc = [],
          Kc = [],
          rc = [],
          Lc = [],
          cc = [],
          gc = [],
          Rc = [],
          Ac = [],
          Uc = [],
          fc = [],
          Ic = [],
          Bc = [],
          Gc = [],
          hc = [],
          nc = [],
          Mc = [],
          Oc = [],
          Jc = [],
          Ec = [],
          Qc = [],
          Xc = [],
          Vc = [],
          Pc = [],
          Cc = [],
          xc = [],
          Tc = [],
          bc = [],
          jc = [];
        return DD = class extends is {
          get baseWeight() {
            return (0, VD.c)(this, zD, "f")
          }
          set baseWeight(DD) {
            (0, VD.g)(this, zD, DD, "f")
          }
          get baseWeightTexture() {
            return (0, VD.c)(this, pD, "f")
          }
          set baseWeightTexture(DD) {
            (0, VD.g)(this, pD, DD, "f")
          }
          get baseColor() {
            return (0, VD.c)(this, sD, "f")
          }
          set baseColor(DD) {
            (0, VD.g)(this, sD, DD, "f")
          }
          get baseColorTexture() {
            return (0, VD.c)(this, rD, "f")
          }
          set baseColorTexture(DD) {
            (0, VD.g)(this, rD, DD, "f")
          }
          get baseDiffuseRoughness() {
            return (0, VD.c)(this, LD, "f")
          }
          set baseDiffuseRoughness(DD) {
            (0, VD.g)(this, LD, DD, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, VD.c)(this, cD, "f")
          }
          set baseDiffuseRoughnessTexture(DD) {
            (0, VD.g)(this, cD, DD, "f")
          }
          get baseMetalness() {
            return (0, VD.c)(this, gD, "f")
          }
          set baseMetalness(DD) {
            (0, VD.g)(this, gD, DD, "f")
          }
          get baseMetalnessTexture() {
            return (0, VD.c)(this, RD, "f")
          }
          set baseMetalnessTexture(DD) {
            (0, VD.g)(this, RD, DD, "f")
          }
          get specularWeight() {
            return (0, VD.c)(this, AD, "f")
          }
          set specularWeight(DD) {
            (0, VD.g)(this, AD, DD, "f")
          }
          get specularWeightTexture() {
            return (0, VD.c)(this, UD, "f")
          }
          set specularWeightTexture(DD) {
            (0, VD.g)(this, UD, DD, "f")
          }
          get specularColor() {
            return (0, VD.c)(this, fD, "f")
          }
          set specularColor(DD) {
            (0, VD.g)(this, fD, DD, "f")
          }
          get specularColorTexture() {
            return (0, VD.c)(this, ID, "f")
          }
          set specularColorTexture(DD) {
            (0, VD.g)(this, ID, DD, "f")
          }
          get specularRoughness() {
            return (0, VD.c)(this, BD, "f")
          }
          set specularRoughness(DD) {
            (0, VD.g)(this, BD, DD, "f")
          }
          get specularRoughnessTexture() {
            return (0, VD.c)(this, GD, "f")
          }
          set specularRoughnessTexture(DD) {
            (0, VD.g)(this, GD, DD, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, VD.c)(this, hD, "f")
          }
          set specularRoughnessAnisotropy(DD) {
            (0, VD.g)(this, hD, DD, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, VD.c)(this, nD, "f")
          }
          set specularRoughnessAnisotropyTexture(DD) {
            (0, VD.g)(this, nD, DD, "f")
          }
          get specularIor() {
            return (0, VD.c)(this, MD, "f")
          }
          set specularIor(DD) {
            (0, VD.g)(this, MD, DD, "f")
          }
          get transmissionWeight() {
            return (0, VD.c)(this, OD, "f")
          }
          set transmissionWeight(DD) {
            (0, VD.g)(this, OD, DD, "f")
          }
          get transmissionWeightTexture() {
            return (0, VD.c)(this, JD, "f")
          }
          set transmissionWeightTexture(DD) {
            (0, VD.g)(this, JD, DD, "f")
          }
          get transmissionColor() {
            return (0, VD.c)(this, ED, "f")
          }
          set transmissionColor(DD) {
            (0, VD.g)(this, ED, DD, "f")
          }
          get transmissionColorTexture() {
            return (0, VD.c)(this, QD, "f")
          }
          set transmissionColorTexture(DD) {
            (0, VD.g)(this, QD, DD, "f")
          }
          get transmissionDepth() {
            return (0, VD.c)(this, XD, "f")
          }
          set transmissionDepth(DD) {
            (0, VD.g)(this, XD, DD, "f")
          }
          get transmissionDepthTexture() {
            return (0, VD.c)(this, bD, "f")
          }
          set transmissionDepthTexture(DD) {
            (0, VD.g)(this, bD, DD, "f")
          }
          get transmissionScatter() {
            return (0, VD.c)(this, jD, "f")
          }
          set transmissionScatter(DD) {
            (0, VD.g)(this, jD, DD, "f")
          }
          get transmissionScatterTexture() {
            return (0, VD.c)(this, dD, "f")
          }
          set transmissionScatterTexture(DD) {
            (0, VD.g)(this, dD, DD, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, VD.c)(this, SD, "f")
          }
          set transmissionScatterAnisotropy(DD) {
            (0, VD.g)(this, SD, DD, "f")
          }
          get transmissionDispersionScale() {
            return (0, VD.c)(this, WD, "f")
          }
          set transmissionDispersionScale(DD) {
            (0, VD.g)(this, WD, DD, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, VD.c)(this, yD, "f")
          }
          set transmissionDispersionScaleTexture(DD) {
            (0, VD.g)(this, yD, DD, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, VD.c)(this, kD, "f")
          }
          set transmissionDispersionAbbeNumber(DD) {
            (0, VD.g)(this, kD, DD, "f")
          }
          get subsurfaceWeight() {
            return (0, VD.c)(this, mD, "f")
          }
          set subsurfaceWeight(DD) {
            (0, VD.g)(this, mD, DD, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, VD.c)(this, eD, "f")
          }
          set subsurfaceWeightTexture(DD) {
            (0, VD.g)(this, eD, DD, "f")
          }
          get subsurfaceColor() {
            return (0, VD.c)(this, uD, "f")
          }
          set subsurfaceColor(DD) {
            (0, VD.g)(this, uD, DD, "f")
          }
          get subsurfaceColorTexture() {
            return (0, VD.c)(this, tD, "f")
          }
          set subsurfaceColorTexture(DD) {
            (0, VD.g)(this, tD, DD, "f")
          }
          get subsurfaceRadius() {
            return (0, VD.c)(this, qD, "f")
          }
          set subsurfaceRadius(DD) {
            (0, VD.g)(this, qD, DD, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, VD.c)(this, Dz, "f")
          }
          set subsurfaceRadiusScale(DD) {
            (0, VD.g)(this, Dz, DD, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, VD.c)(this, zz, "f")
          }
          set subsurfaceRadiusScaleTexture(DD) {
            (0, VD.g)(this, zz, DD, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, VD.c)(this, wz, "f")
          }
          set subsurfaceScatterAnisotropy(DD) {
            (0, VD.g)(this, wz, DD, "f")
          }
          get coatWeight() {
            return (0, VD.c)(this, pz, "f")
          }
          set coatWeight(DD) {
            (0, VD.g)(this, pz, DD, "f")
          }
          get coatWeightTexture() {
            return (0, VD.c)(this, sz, "f")
          }
          set coatWeightTexture(DD) {
            (0, VD.g)(this, sz, DD, "f")
          }
          get coatColor() {
            return (0, VD.c)(this, Kz, "f")
          }
          set coatColor(DD) {
            (0, VD.g)(this, Kz, DD, "f")
          }
          get coatColorTexture() {
            return (0, VD.c)(this, rz, "f")
          }
          set coatColorTexture(DD) {
            (0, VD.g)(this, rz, DD, "f")
          }
          get coatRoughness() {
            return (0, VD.c)(this, Lz, "f")
          }
          set coatRoughness(DD) {
            (0, VD.g)(this, Lz, DD, "f")
          }
          get coatRoughnessTexture() {
            return (0, VD.c)(this, cz, "f")
          }
          set coatRoughnessTexture(DD) {
            (0, VD.g)(this, cz, DD, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, VD.c)(this, gz, "f")
          }
          set coatRoughnessAnisotropy(DD) {
            (0, VD.g)(this, gz, DD, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, VD.c)(this, Iz, "f")
          }
          set coatRoughnessAnisotropyTexture(DD) {
            (0, VD.g)(this, Iz, DD, "f")
          }
          get coatIor() {
            return (0, VD.c)(this, Bz, "f")
          }
          set coatIor(DD) {
            (0, VD.g)(this, Bz, DD, "f")
          }
          get coatDarkening() {
            return (0, VD.c)(this, Gz, "f")
          }
          set coatDarkening(DD) {
            (0, VD.g)(this, Gz, DD, "f")
          }
          get coatDarkeningTexture() {
            return (0, VD.c)(this, hz, "f")
          }
          set coatDarkeningTexture(DD) {
            (0, VD.g)(this, hz, DD, "f")
          }
          get fuzzWeight() {
            return (0, VD.c)(this, nz, "f")
          }
          set fuzzWeight(DD) {
            (0, VD.g)(this, nz, DD, "f")
          }
          get fuzzWeightTexture() {
            return (0, VD.c)(this, Mz, "f")
          }
          set fuzzWeightTexture(DD) {
            (0, VD.g)(this, Mz, DD, "f")
          }
          get fuzzColor() {
            return (0, VD.c)(this, Oz, "f")
          }
          set fuzzColor(DD) {
            (0, VD.g)(this, Oz, DD, "f")
          }
          get fuzzColorTexture() {
            return (0, VD.c)(this, Jz, "f")
          }
          set fuzzColorTexture(DD) {
            (0, VD.g)(this, Jz, DD, "f")
          }
          get fuzzRoughness() {
            return (0, VD.c)(this, Ez, "f")
          }
          set fuzzRoughness(DD) {
            (0, VD.g)(this, Ez, DD, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, VD.c)(this, Vz, "f")
          }
          set fuzzRoughnessTexture(DD) {
            (0, VD.g)(this, Vz, DD, "f")
          }
          get geometryThinWalled() {
            return (0, VD.c)(this, Pz, "f")
          }
          set geometryThinWalled(DD) {
            (0, VD.g)(this, Pz, DD, "f")
          }
          get geometryNormalTexture() {
            return (0, VD.c)(this, Cz, "f")
          }
          set geometryNormalTexture(DD) {
            (0, VD.g)(this, Cz, DD, "f")
          }
          get geometryTangent() {
            return (0, VD.c)(this, xz, "f")
          }
          set geometryTangent(DD) {
            (0, VD.g)(this, xz, DD, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(DD) {
            this.geometryTangent = new ND.r(Math.cos(DD), Math.sin(DD))
          }
          get geometryTangentTexture() {
            return (0, VD.c)(this, Tz, "f")
          }
          set geometryTangentTexture(DD) {
            (0, VD.g)(this, Tz, DD, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, VD.c)(this, bz, "f")
          }
          set geometryCoatNormalTexture(DD) {
            (0, VD.g)(this, bz, DD, "f")
          }
          get geometryCoatTangent() {
            return (0, VD.c)(this, jz, "f")
          }
          set geometryCoatTangent(DD) {
            (0, VD.g)(this, jz, DD, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(DD) {
            this.geometryCoatTangent = new ND.r(Math.cos(DD), Math.sin(DD))
          }
          get geometryCoatTangentTexture() {
            return (0, VD.c)(this, dz, "f")
          }
          set geometryCoatTangentTexture(DD) {
            (0, VD.g)(this, dz, DD, "f")
          }
          get geometryOpacity() {
            return (0, VD.c)(this, Sz, "f")
          }
          set geometryOpacity(DD) {
            (0, VD.g)(this, Sz, DD, "f")
          }
          get geometryOpacityTexture() {
            return (0, VD.c)(this, iz, "f")
          }
          set geometryOpacityTexture(DD) {
            (0, VD.g)(this, iz, DD, "f")
          }
          get geometryThickness() {
            return (0, VD.c)(this, lz, "f")
          }
          set geometryThickness(DD) {
            (0, VD.g)(this, lz, DD, "f")
          }
          get geometryThicknessTexture() {
            return (0, VD.c)(this, Wz, "f")
          }
          set geometryThicknessTexture(DD) {
            (0, VD.g)(this, Wz, DD, "f")
          }
          get emissionLuminance() {
            return (0, VD.c)(this, Nz, "f")
          }
          set emissionLuminance(DD) {
            (0, VD.g)(this, Nz, DD, "f")
          }
          get emissionColor() {
            return (0, VD.c)(this, Zz, "f")
          }
          set emissionColor(DD) {
            (0, VD.g)(this, Zz, DD, "f")
          }
          get emissionColorTexture() {
            return (0, VD.c)(this, kz, "f")
          }
          set emissionColorTexture(DD) {
            (0, VD.g)(this, kz, DD, "f")
          }
          get thinFilmWeight() {
            return (0, VD.c)(this, ez, "f")
          }
          set thinFilmWeight(DD) {
            (0, VD.g)(this, ez, DD, "f")
          }
          get thinFilmWeightTexture() {
            return (0, VD.c)(this, vz, "f")
          }
          set thinFilmWeightTexture(DD) {
            (0, VD.g)(this, vz, DD, "f")
          }
          get thinFilmThickness() {
            return (0, VD.c)(this, tz, "f")
          }
          set thinFilmThickness(DD) {
            (0, VD.g)(this, tz, DD, "f")
          }
          get thinFilmThicknessMin() {
            return (0, VD.c)(this, Hz, "f")
          }
          set thinFilmThicknessMin(DD) {
            (0, VD.g)(this, Hz, DD, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, VD.c)(this, qz, "f")
          }
          set thinFilmThicknessTexture(DD) {
            (0, VD.g)(this, qz, DD, "f")
          }
          get thinFilmIor() {
            return (0, VD.c)(this, Dw, "f")
          }
          set thinFilmIor(DD) {
            (0, VD.g)(this, Dw, DD, "f")
          }
          get ambientOcclusionTexture() {
            return (0, VD.c)(this, zw, "f")
          }
          set ambientOcclusionTexture(DD) {
            (0, VD.g)(this, zw, DD, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(DD) {
            this._sssQuality !== DD && (this._sssQuality = DD, this.vzD(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(DD) {
            this._sssIrradianceTexture !== DD && (this._sssIrradianceTexture = DD, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(DD) {
            this._sssDepthTexture !== DD && (this._sssDepthTexture = DD, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, VD.c)(this, ww, "f")
          }
          set directIntensity(DD) {
            (0, VD.g)(this, ww, DD, "f")
          }
          get environmentIntensity() {
            return (0, VD.c)(this, pw, "f")
          }
          set environmentIntensity(DD) {
            (0, VD.g)(this, pw, DD, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, VD.c)(this, sw, "f")
          }
          set useSpecularWeightFromTextureAlpha(DD) {
            (0, VD.g)(this, sw, DD, "f")
          }
          get forceAlphaTest() {
            return (0, VD.c)(this, Kw, "f")
          }
          set forceAlphaTest(DD) {
            (0, VD.g)(this, Kw, DD, "f")
          }
          get alphaCutOff() {
            return (0, VD.c)(this, rw, "f")
          }
          set alphaCutOff(DD) {
            (0, VD.g)(this, rw, DD, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, VD.c)(this, Lw, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(DD) {
            (0, VD.g)(this, Lw, DD, "f")
          }
          get useAmbientInGrayScale() {
            return (0, VD.c)(this, gw, "f")
          }
          set useAmbientInGrayScale(DD) {
            (0, VD.g)(this, gw, DD, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(aD.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === KD.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(DD) {
            DD !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = DD ? KD.b.LIGHTFALLOFF_PHYSICAL : KD.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === KD.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(DD) {
            DD !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = DD ? KD.b.LIGHTFALLOFF_GLTF : KD.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, VD.c)(this, Rw, "f")
          }
          set useObjectSpaceNormalMap(DD) {
            (0, VD.g)(this, Rw, DD, "f")
          }
          get useParallax() {
            return (0, VD.c)(this, Aw, "f")
          }
          set useParallax(DD) {
            (0, VD.g)(this, Aw, DD, "f")
          }
          get useParallaxOcclusion() {
            return (0, VD.c)(this, Uw, "f")
          }
          set useParallaxOcclusion(DD) {
            (0, VD.g)(this, Uw, DD, "f")
          }
          get parallaxScaleBias() {
            return (0, VD.c)(this, fw, "f")
          }
          set parallaxScaleBias(DD) {
            (0, VD.g)(this, fw, DD, "f")
          }
          get disableLighting() {
            return (0, VD.c)(this, Iw, "f")
          }
          set disableLighting(DD) {
            (0, VD.g)(this, Iw, DD, "f")
          }
          get forceIrradianceInFragment() {
            return (0, VD.c)(this, Bw, "f")
          }
          set forceIrradianceInFragment(DD) {
            (0, VD.g)(this, Bw, DD, "f")
          }
          get maxSimultaneousLights() {
            return (0, VD.c)(this, Gw, "f")
          }
          set maxSimultaneousLights(DD) {
            (0, VD.g)(this, Gw, DD, "f")
          }
          get invertNormalMapX() {
            return (0, VD.c)(this, hw, "f")
          }
          set invertNormalMapX(DD) {
            (0, VD.g)(this, hw, DD, "f")
          }
          get invertNormalMapY() {
            return (0, VD.c)(this, nw, "f")
          }
          set invertNormalMapY(DD) {
            (0, VD.g)(this, nw, DD, "f")
          }
          get twoSidedLighting() {
            return (0, VD.c)(this, Mw, "f")
          }
          set twoSidedLighting(DD) {
            (0, VD.g)(this, Mw, DD, "f")
          }
          get useAlphaFresnel() {
            return (0, VD.c)(this, Ow, "f")
          }
          set useAlphaFresnel(DD) {
            (0, VD.g)(this, Ow, DD, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, VD.c)(this, Jw, "f")
          }
          set useLinearAlphaFresnel(DD) {
            (0, VD.g)(this, Jw, DD, "f")
          }
          get environmentBRDFTexture() {
            return (0, VD.c)(this, Ew, "f")
          }
          set environmentBRDFTexture(DD) {
            (0, VD.g)(this, Ew, DD, "f")
          }
          get forceNormalForward() {
            return (0, VD.c)(this, Qw, "f")
          }
          set forceNormalForward(DD) {
            (0, VD.g)(this, Qw, DD, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, VD.c)(this, Xw, "f")
          }
          set enableSpecularAntiAliasing(DD) {
            (0, VD.g)(this, Xw, DD, "f")
          }
          get useHorizonOcclusion() {
            return (0, VD.c)(this, Vw, "f")
          }
          set useHorizonOcclusion(DD) {
            (0, VD.g)(this, Vw, DD, "f")
          }
          get useRadianceOcclusion() {
            return (0, VD.c)(this, Pw, "f")
          }
          set useRadianceOcclusion(DD) {
            (0, VD.g)(this, Pw, DD, "f")
          }
          get unlit() {
            return (0, VD.c)(this, Cw, "f")
          }
          set unlit(DD) {
            (0, VD.g)(this, Cw, DD, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, VD.c)(this, xw, "f")
          }
          set applyDecalMapAfterDetailMap(DD) {
            (0, VD.g)(this, xw, DD, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(DD) {
            this._backgroundRefractionTexture = DD, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(DD) {
            this._refractionHighQualityBlur !== DD && (this._refractionHighQualityBlur = DD, this.vzD(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(DD) {
            this._realTimeFiltering = DD, this.vzD(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(DD) {
            this._realTimeFilteringQuality = DD, this.vzD(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(DD) {
            this._fuzzSampleNumber = DD, this.vzD(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, VD.c)(this, Tw, "f")
          }
          set debugMode(DD) {
            (0, VD.g)(this, Tw, DD, "f")
          }
          constructor(wD, PD) {
            super(wD, PD, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || DD.ForceGLSL), zD.set(this, ((0, VD.m)(this, ls), (0, VD.m)(this, Ws, void 0))), this._baseWeight = ((0, VD.m)(this, Ns), new az("base_weight", 1, "vBaseWeight", 1)), pD.set(this, (0, VD.m)(this, Zs, void 0)), this._baseWeightTexture = ((0, VD.m)(this, ys), new uz("base_weight", "baseWeight", "BASE_WEIGHT")), sD.set(this, (0, VD.m)(this, ks, void 0)), this._baseColor = ((0, VD.m)(this, ms), new az("base_color", aD.d.White(), "vBaseColor", 4)), rD.set(this, (0, VD.m)(this, es, void 0)), this._baseColorTexture = ((0, VD.m)(this, os), new uz("base_color", "baseColor", "BASE_COLOR")), LD.set(this, (0, VD.m)(this, as, void 0)), this._baseDiffuseRoughness = ((0, VD.m)(this, us), new az("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), cD.set(this, (0, VD.m)(this, vs, void 0)), this._baseDiffuseRoughnessTexture = ((0, VD.m)(this, ts), new uz("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), gD.set(this, (0, VD.m)(this, Fs, void 0)), this._baseMetalness = ((0, VD.m)(this, Ys), new az("base_metalness", 0, "vReflectanceInfo", 4, 0)), RD.set(this, (0, VD.m)(this, Hs, void 0)), this._baseMetalnessTexture = ((0, VD.m)(this, qs), new uz("base_metalness", "baseMetalness", "BASE_METALNESS")), AD.set(this, (0, VD.m)(this, DK, void 0)), this._specularWeight = ((0, VD.m)(this, zK), new az("specular_weight", 1, "vReflectanceInfo", 4, 3)), UD.set(this, (0, VD.m)(this, wK, void 0)), this._specularWeightTexture = ((0, VD.m)(this, pK), new uz("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), fD.set(this, (0, VD.m)(this, sK, void 0)), this._specularColor = ((0, VD.m)(this, KK), new az("specular_color", aD.d.White(), "vSpecularColor", 4)), ID.set(this, (0, VD.m)(this, rK, void 0)), this._specularColorTexture = ((0, VD.m)(this, LK), new uz("specular_color", "specularColor", "SPECULAR_COLOR")), BD.set(this, (0, VD.m)(this, cK, void 0)), this._specularRoughness = ((0, VD.m)(this, gK), new az("specular_roughness", .3, "vReflectanceInfo", 4, 1)), GD.set(this, (0, VD.m)(this, RK, void 0)), this._specularRoughnessTexture = ((0, VD.m)(this, AK), new uz("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), hD.set(this, (0, VD.m)(this, UK, void 0)), this._specularRoughnessAnisotropy = ((0, VD.m)(this, fK), new az("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), nD.set(this, (0, VD.m)(this, IK, void 0)), this._specularRoughnessAnisotropyTexture = ((0, VD.m)(this, BK), new uz("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), MD.set(this, (0, VD.m)(this, GK, void 0)), this._specularIor = ((0, VD.m)(this, hK), new az("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), OD.set(this, (0, VD.m)(this, nK, void 0)), this._transmissionWeight = ((0, VD.m)(this, MK), new az("transmission_weight", 0, "vTransmissionWeight", 1)), JD.set(this, (0, VD.m)(this, OK, void 0)), this._transmissionWeightTexture = ((0, VD.m)(this, JK), new uz("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), ED.set(this, (0, VD.m)(this, EK, void 0)), this._transmissionColor = ((0, VD.m)(this, QK), new az("transmission_color", aD.d.White(), "vTransmissionColor", 3, 0)), QD.set(this, (0, VD.m)(this, XK, void 0)), this._transmissionColorTexture = ((0, VD.m)(this, VK), new uz("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), XD.set(this, (0, VD.m)(this, PK, void 0)), this._transmissionDepth = ((0, VD.m)(this, CK), new az("transmission_depth", 0, "vTransmissionDepth", 1, 0)), bD.set(this, (0, VD.m)(this, xK, void 0)), this._transmissionDepthTexture = ((0, VD.m)(this, TK), new uz("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), jD.set(this, (0, VD.m)(this, bK, void 0)), this._transmissionScatter = ((0, VD.m)(this, jK), new az("transmission_scatter", aD.d.Black(), "vTransmissionScatter", 3, 0)), dD.set(this, (0, VD.m)(this, dK, void 0)), this._transmissionScatterTexture = ((0, VD.m)(this, SK), new uz("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), SD.set(this, (0, VD.m)(this, iK, void 0)), this._transmissionScatterAnisotropy = ((0, VD.m)(this, lK), new az("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), WD.set(this, (0, VD.m)(this, WK, void 0)), this._transmissionDispersionScale = ((0, VD.m)(this, NK), new az("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), yD.set(this, (0, VD.m)(this, ZK, void 0)), this._transmissionDispersionScaleTexture = ((0, VD.m)(this, yK), new uz("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), kD.set(this, (0, VD.m)(this, kK, void 0)), this._transmissionDispersionAbbeNumber = ((0, VD.m)(this, mK), new az("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), mD.set(this, (0, VD.m)(this, eK, void 0)), this._subsurfaceWeight = ((0, VD.m)(this, oK), new az("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), eD.set(this, (0, VD.m)(this, aK, void 0)), this._subsurfaceWeightTexture = ((0, VD.m)(this, uK), new uz("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), uD.set(this, (0, VD.m)(this, vK, void 0)), this._subsurfaceColor = ((0, VD.m)(this, tK), new az("subsurface_color", new aD.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), tD.set(this, (0, VD.m)(this, FK, void 0)), this._subsurfaceColorTexture = ((0, VD.m)(this, YK), new uz("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), qD.set(this, (0, VD.m)(this, HK, void 0)), this._subsurfaceRadius = ((0, VD.m)(this, qK), new az("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), Dz.set(this, (0, VD.m)(this, Dr, void 0)), this._subsurfaceRadiusScale = ((0, VD.m)(this, zr), new az("subsurface_radius_scale", new aD.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), zz.set(this, (0, VD.m)(this, wr, void 0)), this._subsurfaceRadiusScaleTexture = ((0, VD.m)(this, pr), new uz("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), wz.set(this, (0, VD.m)(this, sr, void 0)), this._subsurfaceScatterAnisotropy = ((0, VD.m)(this, Kr), new az("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), pz.set(this, (0, VD.m)(this, rr, void 0)), this._coatWeight = ((0, VD.m)(this, Lr), new az("coat_weight", 0, "vCoatWeight", 1, 0)), sz.set(this, (0, VD.m)(this, cr, void 0)), this._coatWeightTexture = ((0, VD.m)(this, gr), new uz("coat_weight", "coatWeight", "COAT_WEIGHT")), Kz.set(this, (0, VD.m)(this, Rr, void 0)), this._coatColor = ((0, VD.m)(this, Ar), new az("coat_color", aD.d.White(), "vCoatColor", 3, 0)), rz.set(this, (0, VD.m)(this, Ur, void 0)), this._coatColorTexture = ((0, VD.m)(this, fr), new uz("coat_color", "coatColor", "COAT_COLOR")), Lz.set(this, (0, VD.m)(this, Ir, void 0)), this._coatRoughness = ((0, VD.m)(this, Br), new az("coat_roughness", 0, "vCoatRoughness", 1, 0)), cz.set(this, (0, VD.m)(this, Gr, void 0)), this._coatRoughnessTexture = ((0, VD.m)(this, hr), new uz("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), gz.set(this, (0, VD.m)(this, nr, void 0)), this._coatRoughnessAnisotropy = ((0, VD.m)(this, Mr), new az("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), Iz.set(this, (0, VD.m)(this, Or, void 0)), this._coatRoughnessAnisotropyTexture = ((0, VD.m)(this, Jr), new uz("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), Bz.set(this, (0, VD.m)(this, Er, void 0)), this._coatIor = ((0, VD.m)(this, Qr), new az("coat_ior", 1.5, "vCoatIor", 1, 0)), Gz.set(this, (0, VD.m)(this, Xr, void 0)), this._coatDarkening = ((0, VD.m)(this, Vr), new az("coat_darkening", 1, "vCoatDarkening", 1, 0)), hz.set(this, (0, VD.m)(this, Pr, void 0)), this._coatDarkeningTexture = ((0, VD.m)(this, Cr), new uz("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, nz.set(this, (0, VD.m)(this, xr, void 0)), this._fuzzWeight = ((0, VD.m)(this, Tr), new az("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Mz.set(this, (0, VD.m)(this, br, void 0)), this._fuzzWeightTexture = ((0, VD.m)(this, jr), new uz("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), Oz.set(this, (0, VD.m)(this, dr, void 0)), this._fuzzColor = ((0, VD.m)(this, Sr), new az("fuzz_color", aD.d.White(), "vFuzzColor", 3, 0)), Jz.set(this, (0, VD.m)(this, ir, void 0)), this._fuzzColorTexture = ((0, VD.m)(this, lr), new uz("fuzz_color", "fuzzColor", "FUZZ_COLOR")), Ez.set(this, (0, VD.m)(this, Wr, void 0)), this._fuzzRoughness = ((0, VD.m)(this, Nr), new az("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), Vz.set(this, (0, VD.m)(this, Zr, void 0)), this._fuzzRoughnessTexture = ((0, VD.m)(this, yr), new uz("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Pz.set(this, (0, VD.m)(this, kr, void 0)), this._geometryThinWalled = ((0, VD.m)(this, mr), new az("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Cz.set(this, (0, VD.m)(this, er, void 0)), this._geometryNormalTexture = ((0, VD.m)(this, or), new uz("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), xz.set(this, (0, VD.m)(this, ar, void 0)), this._geometryTangent = ((0, VD.m)(this, ur), new az("geometry_tangent", new ND.r(1, 0), "vSpecularAnisotropy", 3, 0)), Tz.set(this, (0, VD.m)(this, vr, void 0)), this._geometryTangentTexture = ((0, VD.m)(this, tr), new uz("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), bz.set(this, (0, VD.m)(this, Fr, void 0)), this._geometryCoatNormalTexture = ((0, VD.m)(this, Yr), new uz("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), jz.set(this, (0, VD.m)(this, Hr, void 0)), this._geometryCoatTangent = ((0, VD.m)(this, qr), new az("geometry_coat_tangent", new ND.r(1, 0), "vGeometryCoatTangent", 2, 0)), dz.set(this, (0, VD.m)(this, DL, void 0)), this._geometryCoatTangentTexture = ((0, VD.m)(this, zL), new uz("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), Sz.set(this, (0, VD.m)(this, wL, void 0)), this._geometryOpacity = ((0, VD.m)(this, pL), new az("geometry_opacity", 1, "vBaseColor", 4, 3)), iz.set(this, (0, VD.m)(this, sL, void 0)), this._geometryOpacityTexture = ((0, VD.m)(this, KL), new uz("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), lz.set(this, (0, VD.m)(this, rL, void 0)), this._geometryThickness = ((0, VD.m)(this, LL), new az("geometry_thickness", 0, "vGeometryThickness", 1, 0)), Wz.set(this, (0, VD.m)(this, cL, void 0)), this._geometryThicknessTexture = ((0, VD.m)(this, gL), new uz("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), Nz.set(this, (0, VD.m)(this, RL, void 0)), this._emissionLuminance = ((0, VD.m)(this, AL), new az("emission_luminance", 1, "vLightingIntensity", 4, 1)), Zz.set(this, (0, VD.m)(this, UL, void 0)), this._emissionColor = ((0, VD.m)(this, fL), new az("emission_color", aD.d.Black(), "vEmissionColor", 3)), kz.set(this, (0, VD.m)(this, IL, void 0)), this._emissionColorTexture = ((0, VD.m)(this, BL), new uz("emission_color", "emissionColor", "EMISSION_COLOR")), ez.set(this, (0, VD.m)(this, GL, void 0)), this._thinFilmWeight = ((0, VD.m)(this, hL), new az("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), vz.set(this, (0, VD.m)(this, nL, void 0)), this._thinFilmWeightTexture = ((0, VD.m)(this, ML), new uz("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), tz.set(this, (0, VD.m)(this, OL, void 0)), this._thinFilmThickness = ((0, VD.m)(this, JL), new az("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), Hz.set(this, (0, VD.m)(this, EL, void 0)), this._thinFilmThicknessMin = ((0, VD.m)(this, QL), new az("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), qz.set(this, (0, VD.m)(this, XL, void 0)), this._thinFilmThicknessTexture = ((0, VD.m)(this, VL), new uz("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Dw.set(this, (0, VD.m)(this, PL, void 0)), this._thinFilmIor = ((0, VD.m)(this, CL), new az("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), zw.set(this, (0, VD.m)(this, xL, void 0)), this._ambientOcclusionTexture = ((0, VD.m)(this, TL), new uz("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = DD.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, ww.set(this, (0, VD.m)(this, bL, 1)), pw.set(this, ((0, VD.m)(this, jL), (0, VD.m)(this, dL, 1))), sw.set(this, ((0, VD.m)(this, SL), (0, VD.m)(this, iL, !1))), Kw.set(this, ((0, VD.m)(this, lL), (0, VD.m)(this, WL, !1))), rw.set(this, ((0, VD.m)(this, NL), (0, VD.m)(this, ZL, .4))), Lw.set(this, ((0, VD.m)(this, yL), (0, VD.m)(this, kL, !1))), gw.set(this, ((0, VD.m)(this, mL), (0, VD.m)(this, eL, !1))), Rw.set(this, ((0, VD.m)(this, oL), (0, VD.m)(this, aL, !1))), Aw.set(this, ((0, VD.m)(this, uL), (0, VD.m)(this, vL, !1))), Uw.set(this, ((0, VD.m)(this, tL), (0, VD.m)(this, FL, !1))), fw.set(this, ((0, VD.m)(this, YL), (0, VD.m)(this, HL, .05))), Iw.set(this, ((0, VD.m)(this, qL), (0, VD.m)(this, Dc, !1))), Bw.set(this, ((0, VD.m)(this, zc), (0, VD.m)(this, wc, !1))), Gw.set(this, ((0, VD.m)(this, pc), (0, VD.m)(this, sc, 4))), hw.set(this, ((0, VD.m)(this, Kc), (0, VD.m)(this, rc, !1))), nw.set(this, ((0, VD.m)(this, Lc), (0, VD.m)(this, cc, !1))), Mw.set(this, ((0, VD.m)(this, gc), (0, VD.m)(this, Rc, !1))), Ow.set(this, ((0, VD.m)(this, Ac), (0, VD.m)(this, Uc, !1))), Jw.set(this, ((0, VD.m)(this, fc), (0, VD.m)(this, Ic, !1))), Ew.set(this, ((0, VD.m)(this, Bc), (0, VD.m)(this, Gc, null))), Qw.set(this, ((0, VD.m)(this, hc), (0, VD.m)(this, nc, !1))), Xw.set(this, ((0, VD.m)(this, Mc), (0, VD.m)(this, Oc, !1))), Vw.set(this, ((0, VD.m)(this, Jc), (0, VD.m)(this, Ec, !0))), Pw.set(this, ((0, VD.m)(this, Qc), (0, VD.m)(this, Xc, !0))), Cw.set(this, ((0, VD.m)(this, Vc), (0, VD.m)(this, Pc, !1))), xw.set(this, ((0, VD.m)(this, Cc), (0, VD.m)(this, xc, !1))), this._lightingInfos = ((0, VD.m)(this, Tc), new ND.t(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = KD.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new xD.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Tw.set(this, (0, VD.m)(this, bc, 0)), this.debugLimit = ((0, VD.m)(this, jc), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = KD.b.MATERIAL_OPAQUE, this.Ul() && !this.Ul()?.iI().isWebGPU && this.Ul().iI().AB < 2 && CD.d.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), DD._noiseTextures[this.Ul().uniqueId] || (DD._noiseTextures[this.Ul().uniqueId] = new TD.d(Xz.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.Ul(), !1, !0, 1), this.Ul().Bl.addOnce((() => {
              DD._noiseTextures[this.Ul().uniqueId]?.dispose(), delete DD._noiseTextures[this.Ul().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), FD.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), FD.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = lD(this.Ul()), this._environmentFuzzBRDFTexture = iD(this.Ul()), this.prePassConfiguration = new oD.c, this._propertyList = {};
            for (const DD of Object.getOwnPropertyNames(this)) {
              const zD = this[DD];
              zD instanceof az && (this._propertyList[DD] = zD)
            }
            Object.keys(this._propertyList).forEach((DD => {
              const zD = this._propertyList[DD];
              let wD = this._uniformsList[zD.targetUniformName];
              wD ? wD.numComponents !== zD.targetUniformComponentNum ? CD.d.Error(`Uniform ${zD.targetUniformName} already exists of size ${wD.numComponents}, but trying to set it to ${zD.targetUniformComponentNum}.`) : wD.requiredDefine !== zD.requiredDefine && (wD.requiredDefine = void 0) : (wD = new oz(zD.targetUniformName, zD.targetUniformComponentNum), wD.requiredDefine = zD.requiredDefine, this._uniformsList[zD.targetUniformName] = wD), "" === wD.firstLinkedKey && (wD.firstLinkedKey = zD.name), wD.linkedProperties[zD.name] = zD
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const DD of Object.getOwnPropertyNames(this)) {
              const zD = this[DD];
              zD instanceof uz && (this._samplersList[DD] = zD)
            }
            for (const DD in this._samplersList) {
              const zD = this._samplersList[DD].textureDefine;
              this._samplerDefines[zD] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[zD + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[zD + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(FD.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(FD.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(DD) {
            this._transparencyMode !== DD && (this._transparencyMode = DD, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== KD.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(DD) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(DD)
          }
          clone(zD) {
            let wD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const sD = Qz.d.Clone((() => new DD(zD, this.Ul())), this, {
              cloneTexturesOnlyOnce: wD
            });
            return sD.id = zD, sD.name = zD, this.stencil.copyTo(sD.stencil), this._clonePlugins(sD, pD), sD
          }
          serialize() {
            const DD = super.serialize();
            return DD.customType = "BABYLON.OpenPBRMaterial", DD
          }
          static Parse(zD, wD, pD) {
            const sD = Qz.d.Parse((() => new DD(zD.name, wD)), zD, wD, pD);
            return zD.stencil && sD.stencil.parse(zD.stencil, wD, pD), KD.b._ParsePlugins(zD, sD, wD, pD), sD
          }
          forceCompilation(DD, zD, wD) {
            const pD = {
              clipPlane: !1,
              useInstances: !1,
              ...wD
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const wD = new Fz({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                sD = this._prepareEffect(DD, DD, wD, void 0, void 0, pD.useInstances, pD.clipPlane);
              this._onEffectCreatedObservable && (mz.effect = sD, mz.subMesh = null, this._onEffectCreatedObservable.notifyObservers(mz)), sD.isReady() ? zD && zD(this) : sD.onCompileObservable.add((() => {
                zD && zD(this)
              }))
            })()
          }
          isReadyForSubMesh(zD, wD, pD) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const sD = wD._drawWrapper;
            if (sD.effect && this.isFrozen && sD._wasPreviouslyReady && sD._wasPreviouslyUsingInstances === pD) return !0;
            wD.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), wD.materialDefines = new Fz({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const KD = wD.materialDefines;
            if (this._isReadyForSubMesh(wD)) return !0;
            const rD = this.Ul(),
              LD = rD.iI();
            if (KD._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, rD.texturesEnabled)) {
              for (const DD in this._samplersList) {
                const zD = this._samplersList[DD];
                if (zD.value && !zD.value.isReadyOrNotBlocking()) return !1
              }
              const zD = this._getRadianceTexture();
              if (zD && FD.d.ReflectionTextureEnabled) {
                if (!zD.isReadyOrNotBlocking()) return !1;
                if (zD.irradianceTexture) {
                  if (!zD.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!zD.sphericalPolynomial && zD.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && FD.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && FD.d.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && FD.d.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (DD._noiseTextures[rD.uniqueId] && !DD._noiseTextures[rD.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = KD, this._eventInfo.subMesh = wD, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (KD._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (KD.AREALIGHTUSED)
              for (let DD = 0; DD < zD.lightSources.length; DD++)
                if (!zD.lightSources[DD]._isReady()) return !1;
            if (LD.getCaps().standardDerivatives || zD.isVerticesDataPresent(ZD.k.NormalKind) || (zD.createNormals(!0), CD.d.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + zD.name)), !(0, HD.e)(rD, zD, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const cD = wD.effect,
              gD = KD._areLightsDisposed,
              RD = this._prepareEffect(zD, wD.getRenderingMesh(), KD, this.onCompiled, this.onError, pD, null);
            let AD = !1;
            if (RD)
              if (this._onEffectCreatedObservable && (mz.effect = RD, mz.subMesh = wD, this._onEffectCreatedObservable.notifyObservers(mz)), this.allowShaderHotSwapping && cD && !RD.isReady()) {
                if (KD.markAsUnprocessed(), AD = this.isFrozen, gD) return KD._areLightsDisposed = !0, !1
              } else rD.resetCachedMaterial(), wD.setEffect(RD, KD, this._materialContext);
            return !(!wD.effect || !wD.effect.isReady()) && (KD._renderId = rD.getRenderId(), sD._wasPreviouslyReady = !AD, sD._wasPreviouslyUsingInstances = !!pD, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const DD = this._uniformBuffer;
            DD.addUniform("vTangentSpaceParams", 2), DD.addUniform("vLightingIntensity", 4), DD.addUniform("pointSize", 1), DD.addUniform("vDebugMode", 2), DD.addUniform("renderTargetSize", 2), DD.addUniform("cameraInfo", 4), DD.addUniform("vTextureRepetitionHexTilingParams", 4), DD.addUniform("backgroundRefractionMatrix", 16), DD.addUniform("vBackgroundRefractionInfos", 3), (0, HD.tb)(DD, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((zD => {
              DD.addUniform(zD.name, zD.numComponents)
            })), Object.values(this._samplersList).forEach((zD => {
              DD.addUniform(zD.samplerInfoName, 2), DD.addUniform(zD.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(DD, zD, wD, pD) {
            if (0 === this.geometryThickness) DD.updateFloat("vGeometryThickness", 0);
            else {
              pD.getRenderingMesh().getWorldMatrix().decompose(ND.n.WI[0]);
              const zD = Math.max(Math.abs(ND.n.WI[0].x), Math.abs(ND.n.WI[0].y), Math.abs(ND.n.WI[0].z));
              DD.updateFloat("vGeometryThickness", this.geometryThickness * zD)
            }
          }
          bindForSubMesh(zD, wD, pD) {
            const sD = this.Ul(),
              KD = pD.materialDefines;
            if (!KD) return;
            const rD = pD.effect;
            if (!rD) return;
            this._activeEffect = rD, wD.getMeshUniformBuffer().bindToEffect(rD, "Mesh"), wD.transferToEffect(zD);
            const LD = sD.iI();
            this._uniformBuffer.bindToEffect(rD, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, sD, wD, zD, this.isFrozen), fz.d.Bind(LD.currentRenderPassId, this._activeEffect, wD, zD, this);
            const cD = sD.activeCamera;
            cD ? this._uniformBuffer.updateFloat4("cameraInfo", cD.minZ, cD.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const gD = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", gD[0], gD[1], gD[2], gD[3]), this._eventInfo.subMesh = pD, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), KD.OBJECTSPACE_NORMALMAP && (zD.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const RD = this._mustRebind(sD, rD, pD, wD.visibility),
              AD = LD._features.needToAlwaysBindUniformBuffers;
            (0, HD.h)(wD, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Az.d)(this._activeEffect, this._vertexPullingMetadata);
            const UD = this._uniformBuffer;
            if (RD) {
              this.bindViewProjection(rD);
              const zD = this._getRadianceTexture();
              if (!UD.useUbo || !this.isFrozen || !UD.isSync || pD._drawWrapper._forceRebindOnNextCall) {
                if (sD.texturesEnabled) {
                  for (const DD in this._samplersList) {
                    const zD = this._samplersList[DD];
                    zD.value && (UD.updateFloat2(zD.samplerInfoName, zD.value.coordinatesIndex, zD.value.level), (0, HD.z)(zD.value, UD, zD.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (sD._mirroredCameraPosition ? UD.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : UD.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, HD.m)(sD, KD, UD, aD.d.White(), zD, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && UD.updateFloat("pointSize", this.pointSize);
                const DD = this._uniformsArray;
                for (let zD = 0, wD = DD.length; zD < wD; zD++) {
                  const wD = DD[zD];
                  (void 0 === wD.requiredDefine || KD[wD.requiredDefine]) && (4 === wD.numComponents ? (wD.populateVectorFromLinkedProperties(ND.n.Vector4[0]), UD.updateVector4(wD.name, ND.n.Vector4[0])) : 3 === wD.numComponents ? (wD.populateVectorFromLinkedProperties(ND.n.WI[0]), UD.updateVector3(wD.name, ND.n.WI[0])) : 2 === wD.numComponents ? (wD.populateVectorFromLinkedProperties(ND.n.Vector2[0]), UD.updateFloat2(wD.name, ND.n.Vector2[0].x, ND.n.Vector2[0].y)) : 1 === wD.numComponents && UD.updateFloat(wD.name, wD.linkedProperties[wD.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * sD.environmentIntensity, this._lightingInfos.w = 1, UD.updateVector4("vLightingIntensity", this._lightingInfos), UD.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (sD.texturesEnabled) {
                for (const DD in this._samplersList) {
                  const zD = this._samplersList[DD];
                  zD.value && UD.setTexture(zD.samplerName, zD.value)
                }
                if ((0, HD.n)(sD, KD, UD, zD, this.realTimeFiltering), KD.ENVIRONMENTBRDF && UD.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), KD.FUZZENVIRONMENTBRDF && UD.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), KD.REFRACTED_BACKGROUND && (UD.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), UD.i5("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), ND.n.WI[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), UD.updateVector3("vBackgroundRefractionInfos", ND.n.WI[1])), (KD.ANISOTROPIC || KD.FUZZ || KD.REFRACTED_BACKGROUND || KD.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && UD.setTexture("blueNoiseSampler", DD._noiseTextures[this.Ul().uniqueId]), KD.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const DD = this.sssIrradianceTexture.getSize().width,
                    zD = this.sssIrradianceTexture.getSize().height;
                  UD.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), UD.setTexture("sceneDepthSampler", this.sssDepthTexture), UD.updateFloat2("renderTargetSize", DD, zD)
                }
              }
              this.Ul().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(wD) && this.Ul().depthPeelingRenderer.bind(rD), this._eventInfo.subMesh = pD, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Rz.f)(this._activeEffect, this, sD), this.bindEyePosition(rD)
            } else AD && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, sD, sD.iI(), pD), !RD && this.isFrozen && !AD || !sD.lightsEnabled || this._disableLighting || (0, HD.p)(sD, wD, this._activeEffect, KD, this._maxSimultaneousLights), !RD && this.isFrozen || (this.bindView(rD), (0, HD.k)(sD, wD, this._activeEffect, !0), KD.NUM_MORPH_INFLUENCERS && (0, HD.s)(wD, this._activeEffect), KD.BAKED_VERTEX_ANIMATION_TEXTURE && wD.bakedVertexAnimationManager?.bind(rD, KD.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, HD.q)(KD, this._activeEffect, sD)), this._afterBind(wD, this._activeEffect, pD), UD.update()
          }
          getAnimatables() {
            const DD = super.getAnimatables();
            for (const zD in this._samplersList) {
              const wD = this._samplersList[zD];
              wD.value && wD.value.animations && wD.value.animations.length > 0 && DD.push(wD.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && DD.push(this._radianceTexture), DD
          }
          getActiveTextures() {
            const DD = super.getActiveTextures();
            for (const zD in this._samplersList) {
              const wD = this._samplersList[zD];
              wD.value && DD.push(wD.value)
            }
            return this._radianceTexture && DD.push(this._radianceTexture), DD
          }
          hasTexture(DD) {
            if (super.hasTexture(DD)) return !0;
            for (const zD in this._samplersList) {
              if (this._samplersList[zD].value === DD) return !0
            }
            return this._radianceTexture === DD
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(DD, zD) {
            if (this._breakShaderLoadedCheck = !0, zD) {
              this._environmentBRDFTexture && this.Ul().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.Ul().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const DD in this._samplersList) {
                const zD = this._samplersList[DD];
                zD.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(DD, zD)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.Ul().environmentTexture
          }
          _prepareEffect(zD, wD, pD) {
            let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              rD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              LD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(zD, wD, pD, rD, LD), !pD.isDirty) return null;
            pD.markAsProcessed();
            const cD = this.Ul().iI(),
              gD = new YD.b;
            let RD = 0;
            pD.USESPHERICALINVERTEX && gD.addFallback(RD++, "USESPHERICALINVERTEX"), pD.FOG && gD.addFallback(RD, "FOG"), pD.SPECULARAA && gD.addFallback(RD, "SPECULARAA"), pD.POINTSIZE && gD.addFallback(RD, "POINTSIZE"), pD.LOGARITHMICDEPTH && gD.addFallback(RD, "LOGARITHMICDEPTH"), pD.PARALLAX && gD.addFallback(RD, "PARALLAX"), pD.PARALLAX_RHS && gD.addFallback(RD, "PARALLAX_RHS"), pD.PARALLAXOCCLUSION && gD.addFallback(RD++, "PARALLAXOCCLUSION"), pD.ENVIRONMENTBRDF && gD.addFallback(RD++, "ENVIRONMENTBRDF"), pD.TANGENT && gD.addFallback(RD++, "TANGENT"), RD = (0, HD.D)(pD, gD, this._maxSimultaneousLights, RD), pD.SPECULARTERM && gD.addFallback(RD++, "SPECULARTERM"), pD.USESPHERICALFROMREFLECTIONMAP && gD.addFallback(RD++, "USESPHERICALFROMREFLECTIONMAP"), pD.USEIRRADIANCEMAP && gD.addFallback(RD++, "USEIRRADIANCEMAP"), pD.NORMAL && gD.addFallback(RD++, "NORMAL"), pD.VERTEXCOLOR && gD.addFallback(RD++, "VERTEXCOLOR"), pD.MORPHTARGETS && gD.addFallback(RD++, "MORPHTARGETS"), pD.MULTIVIEW && gD.addFallback(0, "MULTIVIEW");
            const AD = [ZD.k.PositionKind];
            pD.NORMAL && AD.push(ZD.k.NormalKind), pD.TANGENT && AD.push(ZD.k.TangentKind);
            for (let DD = 1; DD <= 6; ++DD) pD["UV" + DD] && AD.push(`uv${1===DD?"":DD}`);
            pD.VERTEXCOLOR && AD.push(ZD.k.ColorKind), (0, HD.H)(AD, zD, pD, gD), (0, HD.K)(AD, pD), (0, HD.L)(AD, zD, pD), (0, HD.G)(AD, zD, pD);
            let UD = "openpbr";
            const fD = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const DD in this._uniformsList) fD.push(DD);
            const ID = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            pD.FUZZENVIRONMENTBRDF && ID.push("environmentFuzzBrdfSampler"), pD.REFRACTED_BACKGROUND && ID.push("backgroundRefractionSampler"), (pD.ANISOTROPIC || pD.FUZZ || pD.REFRACTED_BACKGROUND || pD.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && ID.push("blueNoiseSampler"), pD.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (ID.push("sceneIrradianceSampler"), ID.push("sceneDepthSampler"));
            for (const DD in this._samplersList) {
              const zD = this._samplersList[DD];
              ID.push(zD.samplerName), fD.push(zD.samplerInfoName), fD.push(zD.samplerMatrixName)
            }(0, HD.xb)(fD, ID, !0);
            const BD = ["Material", "Scene", "Mesh"],
              GD = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: pD.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = gD, this._eventInfo.fallbackRank = RD, this._eventInfo.defines = pD, this._eventInfo.uniforms = fD, this._eventInfo.attributes = AD, this._eventInfo.samplers = ID, this._eventInfo.uniformBuffersNames = BD, this._eventInfo.customCode = void 0, this._eventInfo.mesh = zD, this._eventInfo.indexParameters = GD, this._callbackPluginEventGeneric(128, this._eventInfo), fz.d.AddUniformsAndSamplers(fD, ID), oD.c.AddUniforms(fD), oD.c.AddSamplers(ID), (0, Rz.e)(fD), this._useVertexPulling) {
              const DD = wD?.geometry;
              DD && (this._vertexPullingMetadata = (0, Az.e)(DD), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((DD, zD) => {
                fD.push(`vp_${zD}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            vD.e && (vD.e.PrepareUniforms(fD, pD), vD.e.PrepareSamplers(ID, pD)), (0, HD.Ab)({
              uniformsNames: fD,
              uniformBuffersNames: BD,
              samplers: ID,
              defines: pD,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const hD = {};
            this.customShaderNameResolve && (UD = this.customShaderNameResolve(UD, fD, BD, ID, pD, AD, hD));
            const nD = pD.toString(),
              MD = cD.createEffect(UD, {
                attributes: AD,
                uniformsNames: fD,
                uniformBuffersNames: BD,
                samplers: ID,
                defines: nD,
                fallbacks: gD,
                onCompiled: sD,
                onError: KD,
                indexParameters: GD,
                processFinalCode: hD.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: pD.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: DD._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, cD);
            return this._eventInfo.customCode = void 0, MD
          }
          _prepareDefines(zD, wD, pD) {
            let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              rD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const LD = wD.hasThinInstances,
              cD = this.Ul(),
              gD = cD.iI();
            (0, HD.bb)(cD, zD, pD, !0, this._maxSimultaneousLights, this._disableLighting), pD._needNormals = !0, (0, HD.kb)(cD, pD);
            const RD = this.needAlphaBlendingForMesh(zD) && this.Ul().useOrderIndependentTransparency;
            if ((0, HD.qb)(cD, pD, this.canRenderToMRT && !RD), (0, HD.nb)(cD, pD, RD), fz.d.PrepareDefines(gD.currentRenderPassId, zD, pD), pD._areTexturesDirty) {
              pD._needUVs = !1;
              for (let DD = 1; DD <= 6; ++DD) pD["MAINUV" + DD] = !1;
              if (cD.texturesEnabled) {
                for (const wD in this._samplersList) {
                  const DD = this._samplersList[wD];
                  DD.value ? ((0, HD.eb)(DD.value, pD, DD.textureDefine), pD[DD.textureDefine + "_GAMMA"] = DD.value.gammaSpace) : pD[DD.textureDefine] = !1
                }
                const DD = this._getRadianceTexture(),
                  zD = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || gD.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, HD.Z)(cD, DD, pD, this.realTimeFiltering, this.realTimeFilteringQuality, !zD), this._baseMetalnessTexture && (pD.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), pD.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, pD.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, pD.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, pD.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, pD.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, pD.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, pD.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, pD.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, pD.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, pD.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, pD.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && FD.d.DiffuseTextureEnabled ? (pD.PARALLAX = !0, pD.PARALLAX_RHS = cD.useRightHandedSystem, pD.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : pD.PARALLAX = !1, pD.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (pD.PARALLAX = !1, pD.PARALLAX_RHS = !1, pD.PARALLAXOCCLUSION = !1, pD.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && FD.d.ReflectionTextureEnabled ? (pD.ENVIRONMENTBRDF = !0, pD.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (pD.ENVIRONMENTBRDF = !1, pD.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? pD.FUZZENVIRONMENTBRDF = !0 : pD.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  pD.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && FD.d.RefractionTextureEnabled, pD.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, pD.REFRACTED_LIGHTS = !0;
                  const DD = this._getRadianceTexture();
                  DD ? (pD.REFRACTED_ENVIRONMENT = FD.d.RefractionTextureEnabled, pD.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.Ul().useRightHandedSystem ? !DD.invertZ : DD.invertZ, pD.REFRACTED_ENVIRONMENT_LOCAL_CUBE = DD.isCube && DD.boundingBoxSize) : pD.REFRACTED_ENVIRONMENT = !1
                } else pD.REFRACTED_BACKGROUND = !1, pD.REFRACTED_LIGHTS = !1, pD.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? pD.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : pD.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === KD.b.LIGHTFALLOFF_STANDARD ? (pD.USEPHYSICALLIGHTFALLOFF = !1, pD.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === KD.b.LIGHTFALLOFF_GLTF ? (pD.USEPHYSICALLIGHTFALLOFF = !1, pD.USEGLTFLIGHTFALLOFF = !0) : (pD.USEPHYSICALLIGHTFALLOFF = !0, pD.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? pD.TWOSIDEDLIGHTING = !0 : pD.TWOSIDEDLIGHTING = !1, pD.MIRRORED = !!cD._mirroredCameraPosition, pD.SPECULARAA = gD.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(pD._areTexturesDirty || pD._areMiscDirty) && (pD.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, pD.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, pD.ALPHABLEND = this.needAlphaBlendingForMesh(zD)), pD._areTexturesDirty && (pD.TEXTURE_REPETITION_MODE = gD.version > 1 || gD.isWebGPU ? this.textureRepetitionMode : 0), pD._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(pD), pD.FORCENORMALFORWARD = this._forceNormalForward, pD.RADIANCEOCCLUSION = this._useRadianceOcclusion, pD.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && DD._noiseTextures[cD.uniqueId] && FD.d.ReflectionTextureEnabled ? (pD.ANISOTROPIC = !0, zD.isVerticesDataPresent(ZD.k.TangentKind) || (pD._needUVs = !0, pD.MAINUV1 = !0), this._useGltfStyleAnisotropy && (pD.USE_GLTF_STYLE_ANISOTROPY = !0), pD.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, pD.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (pD.ANISOTROPIC = !1, pD.USE_GLTF_STYLE_ANISOTROPY = !1, pD.ANISOTROPIC_BASE = !1, pD.ANISOTROPIC_COAT = !1), pD.THIN_FILM = this.thinFilmWeight > 0, pD.IRIDESCENCE = this.thinFilmWeight > 0, pD.DISPERSION = this.transmissionDispersionScale > 0, pD.SCATTERING = this.hasScattering;
            if (pD.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, pD.TRANSMISSION_SLAB = this.transmissionWeight > 0, pD.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, pD.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !pD.PREPASS && (pD.SUBSURFACE_SLAB || pD.TRANSMISSION_SLAB_VOLUME)) {
              let DD = !1;
              if (!this.sssIrradianceTexture && cD.geometryBufferRenderer) {
                const zD = cD.geometryBufferRenderer.getTextureIndex(yz.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = cD.geometryBufferRenderer.getGBuffer().textures[zD], DD = !0
              }
              if (!this.sssDepthTexture && cD.geometryBufferRenderer) {
                const zD = cD.geometryBufferRenderer.getTextureIndex(yz.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = cD.geometryBufferRenderer.getGBuffer().textures[zD], DD = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (pD.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, DD && (pD.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            pD.FUZZ = this.fuzzWeight > 0 && FD.d.ReflectionTextureEnabled, pD.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, pD.FUZZ ? (zD.isVerticesDataPresent(ZD.k.TangentKind) || (pD._needUVs = !0, pD.MAINUV1 = !0), this._environmentFuzzBRDFTexture = iD(this.Ul()), pD.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, pD.FUZZENVIRONMENTBRDF = !1, pD.FUZZ_IBL_SAMPLES = 0), pD._areMiscDirty && ((0, HD.hb)(zD, cD, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(zD), pD, this._applyDecalMapAfterDetailMap, this._useVertexPulling, wD, this._isVertexOutputInvariant), pD.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !zD.isVerticesDataPresent(ZD.k.NormalKind), pD.DEBUGMODE = this._debugMode), (0, HD.V)(cD, gD, this, pD, !!sD, rD, LD), this._eventInfo.defines = pD, this._eventInfo.mesh = zD, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, HD.S)(zD, pD, !0, !0, !0, this._transparencyMode !== KD.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, zD = new WeakMap, pD = new WeakMap, sD = new WeakMap, rD = new WeakMap, LD = new WeakMap, cD = new WeakMap, gD = new WeakMap, RD = new WeakMap, AD = new WeakMap, UD = new WeakMap, fD = new WeakMap, ID = new WeakMap, BD = new WeakMap, GD = new WeakMap, hD = new WeakMap, nD = new WeakMap, MD = new WeakMap, OD = new WeakMap, JD = new WeakMap, ED = new WeakMap, QD = new WeakMap, XD = new WeakMap, bD = new WeakMap, jD = new WeakMap, dD = new WeakMap, SD = new WeakMap, WD = new WeakMap, yD = new WeakMap, kD = new WeakMap, mD = new WeakMap, eD = new WeakMap, uD = new WeakMap, tD = new WeakMap, qD = new WeakMap, Dz = new WeakMap, zz = new WeakMap, wz = new WeakMap, pz = new WeakMap, sz = new WeakMap, Kz = new WeakMap, rz = new WeakMap, Lz = new WeakMap, cz = new WeakMap, gz = new WeakMap, Iz = new WeakMap, Bz = new WeakMap, Gz = new WeakMap, hz = new WeakMap, nz = new WeakMap, Mz = new WeakMap, Oz = new WeakMap, Jz = new WeakMap, Ez = new WeakMap, Vz = new WeakMap, Pz = new WeakMap, Cz = new WeakMap, xz = new WeakMap, Tz = new WeakMap, bz = new WeakMap, jz = new WeakMap, dz = new WeakMap, Sz = new WeakMap, iz = new WeakMap, lz = new WeakMap, Wz = new WeakMap, Nz = new WeakMap, Zz = new WeakMap, kz = new WeakMap, ez = new WeakMap, vz = new WeakMap, tz = new WeakMap, Hz = new WeakMap, qz = new WeakMap, Dw = new WeakMap, zw = new WeakMap, ww = new WeakMap, pw = new WeakMap, sw = new WeakMap, Kw = new WeakMap, rw = new WeakMap, Lw = new WeakMap, gw = new WeakMap, Rw = new WeakMap, Aw = new WeakMap, Uw = new WeakMap, fw = new WeakMap, Iw = new WeakMap, Bw = new WeakMap, Gw = new WeakMap, hw = new WeakMap, nw = new WeakMap, Mw = new WeakMap, Ow = new WeakMap, Jw = new WeakMap, Ew = new WeakMap, Qw = new WeakMap, Xw = new WeakMap, Vw = new WeakMap, Pw = new WeakMap, Cw = new WeakMap, xw = new WeakMap, Tw = new WeakMap, (() => {
          const zD = "function" === typeof Symbol && Symbol.metadata ? Object.create(is[Symbol.metadata] ?? null) : void 0;
          bw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], jw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], dw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Sw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], iw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], lw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Ww = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Nw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Zw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], yw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], kw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], mw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], ew = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], ow = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], aw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], uw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], vw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], tw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Fw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Yw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Hw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], qw = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Dp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], zp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], wp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], pp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], sp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Kp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], rp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Lp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], cp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], gp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Rp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Ap = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Up = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], fp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Ip = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Bp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Gp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], hp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], np = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Mp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Op = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Jp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Ep = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Qp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Xp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Vp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Pp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Cp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], xp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Tp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], bp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], jp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], dp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Sp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], ip = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], lp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Wp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Np = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Zp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], yp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], kp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], mp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], ep = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], op = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], ap = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], vp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], tp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Fp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Yp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Hp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], qp = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], Ds = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], zs = [(0, PD.c)("_markAllSubMeshesAsTexturesDirty")], ws = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], ps = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], ss = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Ks = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], rs = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ls = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], cs = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], gs = [(0, PD.C)()], Rs = [(0, PD.C)()], As = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Us = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], fs = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Is = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Bs = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsLightsDirty")], Gs = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], hs = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsLightsDirty")], ns = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Ms = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Os = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Es = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Qs = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Xs = [(0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Vs = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Ps = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Cs = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], xs = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Ts = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], bs = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], ds = [(0, PD.e)("_markAllSubMeshesAsMiscDirty")], Ss = [(0, PD.C)()], (0, VD.i)(DD, null, bw, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseWeight" in DD,
              get: DD => DD.baseWeight,
              set: (DD, zD) => {
                DD.baseWeight = zD
              }
            },
            metadata: zD
          }, Ws, Ns), (0, VD.i)(DD, null, jw, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseWeightTexture" in DD,
              get: DD => DD.baseWeightTexture,
              set: (DD, zD) => {
                DD.baseWeightTexture = zD
              }
            },
            metadata: zD
          }, Zs, ys), (0, VD.i)(DD, null, dw, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseColor" in DD,
              get: DD => DD.baseColor,
              set: (DD, zD) => {
                DD.baseColor = zD
              }
            },
            metadata: zD
          }, ks, ms), (0, VD.i)(DD, null, Sw, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseColorTexture" in DD,
              get: DD => DD.baseColorTexture,
              set: (DD, zD) => {
                DD.baseColorTexture = zD
              }
            },
            metadata: zD
          }, es, os), (0, VD.i)(DD, null, iw, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseDiffuseRoughness" in DD,
              get: DD => DD.baseDiffuseRoughness,
              set: (DD, zD) => {
                DD.baseDiffuseRoughness = zD
              }
            },
            metadata: zD
          }, as, us), (0, VD.i)(DD, null, lw, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseDiffuseRoughnessTexture" in DD,
              get: DD => DD.baseDiffuseRoughnessTexture,
              set: (DD, zD) => {
                DD.baseDiffuseRoughnessTexture = zD
              }
            },
            metadata: zD
          }, vs, ts), (0, VD.i)(DD, null, Ww, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseMetalness" in DD,
              get: DD => DD.baseMetalness,
              set: (DD, zD) => {
                DD.baseMetalness = zD
              }
            },
            metadata: zD
          }, Fs, Ys), (0, VD.i)(DD, null, Nw, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "baseMetalnessTexture" in DD,
              get: DD => DD.baseMetalnessTexture,
              set: (DD, zD) => {
                DD.baseMetalnessTexture = zD
              }
            },
            metadata: zD
          }, Hs, qs), (0, VD.i)(DD, null, Zw, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularWeight" in DD,
              get: DD => DD.specularWeight,
              set: (DD, zD) => {
                DD.specularWeight = zD
              }
            },
            metadata: zD
          }, DK, zK), (0, VD.i)(DD, null, yw, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularWeightTexture" in DD,
              get: DD => DD.specularWeightTexture,
              set: (DD, zD) => {
                DD.specularWeightTexture = zD
              }
            },
            metadata: zD
          }, wK, pK), (0, VD.i)(DD, null, kw, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularColor" in DD,
              get: DD => DD.specularColor,
              set: (DD, zD) => {
                DD.specularColor = zD
              }
            },
            metadata: zD
          }, sK, KK), (0, VD.i)(DD, null, mw, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularColorTexture" in DD,
              get: DD => DD.specularColorTexture,
              set: (DD, zD) => {
                DD.specularColorTexture = zD
              }
            },
            metadata: zD
          }, rK, LK), (0, VD.i)(DD, null, ew, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularRoughness" in DD,
              get: DD => DD.specularRoughness,
              set: (DD, zD) => {
                DD.specularRoughness = zD
              }
            },
            metadata: zD
          }, cK, gK), (0, VD.i)(DD, null, ow, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularRoughnessTexture" in DD,
              get: DD => DD.specularRoughnessTexture,
              set: (DD, zD) => {
                DD.specularRoughnessTexture = zD
              }
            },
            metadata: zD
          }, RK, AK), (0, VD.i)(DD, null, aw, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularRoughnessAnisotropy" in DD,
              get: DD => DD.specularRoughnessAnisotropy,
              set: (DD, zD) => {
                DD.specularRoughnessAnisotropy = zD
              }
            },
            metadata: zD
          }, UK, fK), (0, VD.i)(DD, null, uw, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularRoughnessAnisotropyTexture" in DD,
              get: DD => DD.specularRoughnessAnisotropyTexture,
              set: (DD, zD) => {
                DD.specularRoughnessAnisotropyTexture = zD
              }
            },
            metadata: zD
          }, IK, BK), (0, VD.i)(DD, null, vw, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularIor" in DD,
              get: DD => DD.specularIor,
              set: (DD, zD) => {
                DD.specularIor = zD
              }
            },
            metadata: zD
          }, GK, hK), (0, VD.i)(DD, null, tw, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionWeight" in DD,
              get: DD => DD.transmissionWeight,
              set: (DD, zD) => {
                DD.transmissionWeight = zD
              }
            },
            metadata: zD
          }, nK, MK), (0, VD.i)(DD, null, Fw, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionWeightTexture" in DD,
              get: DD => DD.transmissionWeightTexture,
              set: (DD, zD) => {
                DD.transmissionWeightTexture = zD
              }
            },
            metadata: zD
          }, OK, JK), (0, VD.i)(DD, null, Yw, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionColor" in DD,
              get: DD => DD.transmissionColor,
              set: (DD, zD) => {
                DD.transmissionColor = zD
              }
            },
            metadata: zD
          }, EK, QK), (0, VD.i)(DD, null, Hw, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionColorTexture" in DD,
              get: DD => DD.transmissionColorTexture,
              set: (DD, zD) => {
                DD.transmissionColorTexture = zD
              }
            },
            metadata: zD
          }, XK, VK), (0, VD.i)(DD, null, qw, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionDepth" in DD,
              get: DD => DD.transmissionDepth,
              set: (DD, zD) => {
                DD.transmissionDepth = zD
              }
            },
            metadata: zD
          }, PK, CK), (0, VD.i)(DD, null, Dp, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionDepthTexture" in DD,
              get: DD => DD.transmissionDepthTexture,
              set: (DD, zD) => {
                DD.transmissionDepthTexture = zD
              }
            },
            metadata: zD
          }, xK, TK), (0, VD.i)(DD, null, zp, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionScatter" in DD,
              get: DD => DD.transmissionScatter,
              set: (DD, zD) => {
                DD.transmissionScatter = zD
              }
            },
            metadata: zD
          }, bK, jK), (0, VD.i)(DD, null, wp, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionScatterTexture" in DD,
              get: DD => DD.transmissionScatterTexture,
              set: (DD, zD) => {
                DD.transmissionScatterTexture = zD
              }
            },
            metadata: zD
          }, dK, SK), (0, VD.i)(DD, null, pp, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionScatterAnisotropy" in DD,
              get: DD => DD.transmissionScatterAnisotropy,
              set: (DD, zD) => {
                DD.transmissionScatterAnisotropy = zD
              }
            },
            metadata: zD
          }, iK, lK), (0, VD.i)(DD, null, sp, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionDispersionScale" in DD,
              get: DD => DD.transmissionDispersionScale,
              set: (DD, zD) => {
                DD.transmissionDispersionScale = zD
              }
            },
            metadata: zD
          }, WK, NK), (0, VD.i)(DD, null, Kp, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionDispersionScaleTexture" in DD,
              get: DD => DD.transmissionDispersionScaleTexture,
              set: (DD, zD) => {
                DD.transmissionDispersionScaleTexture = zD
              }
            },
            metadata: zD
          }, ZK, yK), (0, VD.i)(DD, null, rp, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: DD => "transmissionDispersionAbbeNumber" in DD,
              get: DD => DD.transmissionDispersionAbbeNumber,
              set: (DD, zD) => {
                DD.transmissionDispersionAbbeNumber = zD
              }
            },
            metadata: zD
          }, kK, mK), (0, VD.i)(DD, null, Lp, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceWeight" in DD,
              get: DD => DD.subsurfaceWeight,
              set: (DD, zD) => {
                DD.subsurfaceWeight = zD
              }
            },
            metadata: zD
          }, eK, oK), (0, VD.i)(DD, null, cp, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceWeightTexture" in DD,
              get: DD => DD.subsurfaceWeightTexture,
              set: (DD, zD) => {
                DD.subsurfaceWeightTexture = zD
              }
            },
            metadata: zD
          }, aK, uK), (0, VD.i)(DD, null, gp, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceColor" in DD,
              get: DD => DD.subsurfaceColor,
              set: (DD, zD) => {
                DD.subsurfaceColor = zD
              }
            },
            metadata: zD
          }, vK, tK), (0, VD.i)(DD, null, Rp, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceColorTexture" in DD,
              get: DD => DD.subsurfaceColorTexture,
              set: (DD, zD) => {
                DD.subsurfaceColorTexture = zD
              }
            },
            metadata: zD
          }, FK, YK), (0, VD.i)(DD, null, Ap, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceRadius" in DD,
              get: DD => DD.subsurfaceRadius,
              set: (DD, zD) => {
                DD.subsurfaceRadius = zD
              }
            },
            metadata: zD
          }, HK, qK), (0, VD.i)(DD, null, Up, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceRadiusScale" in DD,
              get: DD => DD.subsurfaceRadiusScale,
              set: (DD, zD) => {
                DD.subsurfaceRadiusScale = zD
              }
            },
            metadata: zD
          }, Dr, zr), (0, VD.i)(DD, null, fp, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceRadiusScaleTexture" in DD,
              get: DD => DD.subsurfaceRadiusScaleTexture,
              set: (DD, zD) => {
                DD.subsurfaceRadiusScaleTexture = zD
              }
            },
            metadata: zD
          }, wr, pr), (0, VD.i)(DD, null, Ip, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: DD => "subsurfaceScatterAnisotropy" in DD,
              get: DD => DD.subsurfaceScatterAnisotropy,
              set: (DD, zD) => {
                DD.subsurfaceScatterAnisotropy = zD
              }
            },
            metadata: zD
          }, sr, Kr), (0, VD.i)(DD, null, Bp, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatWeight" in DD,
              get: DD => DD.coatWeight,
              set: (DD, zD) => {
                DD.coatWeight = zD
              }
            },
            metadata: zD
          }, rr, Lr), (0, VD.i)(DD, null, Gp, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatWeightTexture" in DD,
              get: DD => DD.coatWeightTexture,
              set: (DD, zD) => {
                DD.coatWeightTexture = zD
              }
            },
            metadata: zD
          }, cr, gr), (0, VD.i)(DD, null, hp, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatColor" in DD,
              get: DD => DD.coatColor,
              set: (DD, zD) => {
                DD.coatColor = zD
              }
            },
            metadata: zD
          }, Rr, Ar), (0, VD.i)(DD, null, np, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatColorTexture" in DD,
              get: DD => DD.coatColorTexture,
              set: (DD, zD) => {
                DD.coatColorTexture = zD
              }
            },
            metadata: zD
          }, Ur, fr), (0, VD.i)(DD, null, Mp, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatRoughness" in DD,
              get: DD => DD.coatRoughness,
              set: (DD, zD) => {
                DD.coatRoughness = zD
              }
            },
            metadata: zD
          }, Ir, Br), (0, VD.i)(DD, null, Op, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatRoughnessTexture" in DD,
              get: DD => DD.coatRoughnessTexture,
              set: (DD, zD) => {
                DD.coatRoughnessTexture = zD
              }
            },
            metadata: zD
          }, Gr, hr), (0, VD.i)(DD, null, Jp, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatRoughnessAnisotropy" in DD,
              get: DD => DD.coatRoughnessAnisotropy,
              set: (DD, zD) => {
                DD.coatRoughnessAnisotropy = zD
              }
            },
            metadata: zD
          }, nr, Mr), (0, VD.i)(DD, null, Ep, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatRoughnessAnisotropyTexture" in DD,
              get: DD => DD.coatRoughnessAnisotropyTexture,
              set: (DD, zD) => {
                DD.coatRoughnessAnisotropyTexture = zD
              }
            },
            metadata: zD
          }, Or, Jr), (0, VD.i)(DD, null, Qp, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatIor" in DD,
              get: DD => DD.coatIor,
              set: (DD, zD) => {
                DD.coatIor = zD
              }
            },
            metadata: zD
          }, Er, Qr), (0, VD.i)(DD, null, Xp, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatDarkening" in DD,
              get: DD => DD.coatDarkening,
              set: (DD, zD) => {
                DD.coatDarkening = zD
              }
            },
            metadata: zD
          }, Xr, Vr), (0, VD.i)(DD, null, Vp, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "coatDarkeningTexture" in DD,
              get: DD => DD.coatDarkeningTexture,
              set: (DD, zD) => {
                DD.coatDarkeningTexture = zD
              }
            },
            metadata: zD
          }, Pr, Cr), (0, VD.i)(DD, null, Pp, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "fuzzWeight" in DD,
              get: DD => DD.fuzzWeight,
              set: (DD, zD) => {
                DD.fuzzWeight = zD
              }
            },
            metadata: zD
          }, xr, Tr), (0, VD.i)(DD, null, Cp, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "fuzzWeightTexture" in DD,
              get: DD => DD.fuzzWeightTexture,
              set: (DD, zD) => {
                DD.fuzzWeightTexture = zD
              }
            },
            metadata: zD
          }, br, jr), (0, VD.i)(DD, null, xp, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "fuzzColor" in DD,
              get: DD => DD.fuzzColor,
              set: (DD, zD) => {
                DD.fuzzColor = zD
              }
            },
            metadata: zD
          }, dr, Sr), (0, VD.i)(DD, null, Tp, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "fuzzColorTexture" in DD,
              get: DD => DD.fuzzColorTexture,
              set: (DD, zD) => {
                DD.fuzzColorTexture = zD
              }
            },
            metadata: zD
          }, ir, lr), (0, VD.i)(DD, null, bp, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: DD => "fuzzRoughness" in DD,
              get: DD => DD.fuzzRoughness,
              set: (DD, zD) => {
                DD.fuzzRoughness = zD
              }
            },
            metadata: zD
          }, Wr, Nr), (0, VD.i)(DD, null, jp, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "fuzzRoughnessTexture" in DD,
              get: DD => DD.fuzzRoughnessTexture,
              set: (DD, zD) => {
                DD.fuzzRoughnessTexture = zD
              }
            },
            metadata: zD
          }, Zr, yr), (0, VD.i)(DD, null, dp, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryThinWalled" in DD,
              get: DD => DD.geometryThinWalled,
              set: (DD, zD) => {
                DD.geometryThinWalled = zD
              }
            },
            metadata: zD
          }, kr, mr), (0, VD.i)(DD, null, Sp, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryNormalTexture" in DD,
              get: DD => DD.geometryNormalTexture,
              set: (DD, zD) => {
                DD.geometryNormalTexture = zD
              }
            },
            metadata: zD
          }, er, or), (0, VD.i)(DD, null, ip, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryTangent" in DD,
              get: DD => DD.geometryTangent,
              set: (DD, zD) => {
                DD.geometryTangent = zD
              }
            },
            metadata: zD
          }, ar, ur), (0, VD.i)(DD, null, lp, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryTangentTexture" in DD,
              get: DD => DD.geometryTangentTexture,
              set: (DD, zD) => {
                DD.geometryTangentTexture = zD
              }
            },
            metadata: zD
          }, vr, tr), (0, VD.i)(DD, null, Wp, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryCoatNormalTexture" in DD,
              get: DD => DD.geometryCoatNormalTexture,
              set: (DD, zD) => {
                DD.geometryCoatNormalTexture = zD
              }
            },
            metadata: zD
          }, Fr, Yr), (0, VD.i)(DD, null, Np, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryCoatTangent" in DD,
              get: DD => DD.geometryCoatTangent,
              set: (DD, zD) => {
                DD.geometryCoatTangent = zD
              }
            },
            metadata: zD
          }, Hr, qr), (0, VD.i)(DD, null, Zp, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryCoatTangentTexture" in DD,
              get: DD => DD.geometryCoatTangentTexture,
              set: (DD, zD) => {
                DD.geometryCoatTangentTexture = zD
              }
            },
            metadata: zD
          }, DL, zL), (0, VD.i)(DD, null, yp, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryOpacity" in DD,
              get: DD => DD.geometryOpacity,
              set: (DD, zD) => {
                DD.geometryOpacity = zD
              }
            },
            metadata: zD
          }, wL, pL), (0, VD.i)(DD, null, kp, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryOpacityTexture" in DD,
              get: DD => DD.geometryOpacityTexture,
              set: (DD, zD) => {
                DD.geometryOpacityTexture = zD
              }
            },
            metadata: zD
          }, sL, KL), (0, VD.i)(DD, null, mp, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryThickness" in DD,
              get: DD => DD.geometryThickness,
              set: (DD, zD) => {
                DD.geometryThickness = zD
              }
            },
            metadata: zD
          }, rL, LL), (0, VD.i)(DD, null, ep, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "geometryThicknessTexture" in DD,
              get: DD => DD.geometryThicknessTexture,
              set: (DD, zD) => {
                DD.geometryThicknessTexture = zD
              }
            },
            metadata: zD
          }, cL, gL), (0, VD.i)(DD, null, op, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: DD => "emissionLuminance" in DD,
              get: DD => DD.emissionLuminance,
              set: (DD, zD) => {
                DD.emissionLuminance = zD
              }
            },
            metadata: zD
          }, RL, AL), (0, VD.i)(DD, null, ap, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "emissionColor" in DD,
              get: DD => DD.emissionColor,
              set: (DD, zD) => {
                DD.emissionColor = zD
              }
            },
            metadata: zD
          }, UL, fL), (0, VD.i)(DD, null, vp, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "emissionColorTexture" in DD,
              get: DD => DD.emissionColorTexture,
              set: (DD, zD) => {
                DD.emissionColorTexture = zD
              }
            },
            metadata: zD
          }, IL, BL), (0, VD.i)(DD, null, tp, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "thinFilmWeight" in DD,
              get: DD => DD.thinFilmWeight,
              set: (DD, zD) => {
                DD.thinFilmWeight = zD
              }
            },
            metadata: zD
          }, GL, hL), (0, VD.i)(DD, null, Fp, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "thinFilmWeightTexture" in DD,
              get: DD => DD.thinFilmWeightTexture,
              set: (DD, zD) => {
                DD.thinFilmWeightTexture = zD
              }
            },
            metadata: zD
          }, nL, ML), (0, VD.i)(DD, null, Yp, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: DD => "thinFilmThickness" in DD,
              get: DD => DD.thinFilmThickness,
              set: (DD, zD) => {
                DD.thinFilmThickness = zD
              }
            },
            metadata: zD
          }, OL, JL), (0, VD.i)(DD, null, Hp, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: DD => "thinFilmThicknessMin" in DD,
              get: DD => DD.thinFilmThicknessMin,
              set: (DD, zD) => {
                DD.thinFilmThicknessMin = zD
              }
            },
            metadata: zD
          }, EL, QL), (0, VD.i)(DD, null, qp, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "thinFilmThicknessTexture" in DD,
              get: DD => DD.thinFilmThicknessTexture,
              set: (DD, zD) => {
                DD.thinFilmThicknessTexture = zD
              }
            },
            metadata: zD
          }, XL, VL), (0, VD.i)(DD, null, Ds, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: DD => "thinFilmIor" in DD,
              get: DD => DD.thinFilmIor,
              set: (DD, zD) => {
                DD.thinFilmIor = zD
              }
            },
            metadata: zD
          }, PL, CL), (0, VD.i)(DD, null, zs, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "ambientOcclusionTexture" in DD,
              get: DD => DD.ambientOcclusionTexture,
              set: (DD, zD) => {
                DD.ambientOcclusionTexture = zD
              }
            },
            metadata: zD
          }, xL, TL), (0, VD.i)(DD, null, ws, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: DD => "directIntensity" in DD,
              get: DD => DD.directIntensity,
              set: (DD, zD) => {
                DD.directIntensity = zD
              }
            },
            metadata: zD
          }, bL, jL), (0, VD.i)(DD, null, ps, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: DD => "environmentIntensity" in DD,
              get: DD => DD.environmentIntensity,
              set: (DD, zD) => {
                DD.environmentIntensity = zD
              }
            },
            metadata: zD
          }, dL, SL), (0, VD.i)(DD, null, ss, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "useSpecularWeightFromTextureAlpha" in DD,
              get: DD => DD.useSpecularWeightFromTextureAlpha,
              set: (DD, zD) => {
                DD.useSpecularWeightFromTextureAlpha = zD
              }
            },
            metadata: zD
          }, iL, lL), (0, VD.i)(DD, null, Ks, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: DD => "forceAlphaTest" in DD,
              get: DD => DD.forceAlphaTest,
              set: (DD, zD) => {
                DD.forceAlphaTest = zD
              }
            },
            metadata: zD
          }, WL, NL), (0, VD.i)(DD, null, rs, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: DD => "alphaCutOff" in DD,
              get: DD => DD.alphaCutOff,
              set: (DD, zD) => {
                DD.alphaCutOff = zD
              }
            },
            metadata: zD
          }, ZL, yL), (0, VD.i)(DD, null, Ls, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: DD => "useAmbientOcclusionFromMetallicTextureRed" in DD,
              get: DD => DD.useAmbientOcclusionFromMetallicTextureRed,
              set: (DD, zD) => {
                DD.useAmbientOcclusionFromMetallicTextureRed = zD
              }
            },
            metadata: zD
          }, kL, mL), (0, VD.i)(DD, null, cs, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: DD => "useAmbientInGrayScale" in DD,
              get: DD => DD.useAmbientInGrayScale,
              set: (DD, zD) => {
                DD.useAmbientInGrayScale = zD
              }
            },
            metadata: zD
          }, eL, oL), (0, VD.i)(DD, null, gs, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: DD => "usePhysicalLightFalloff" in DD,
              get: DD => DD.usePhysicalLightFalloff
            },
            metadata: zD
          }, null, ls), (0, VD.i)(DD, null, Rs, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: DD => "useGLTFLightFalloff" in DD,
              get: DD => DD.useGLTFLightFalloff
            },
            metadata: zD
          }, null, ls), (0, VD.i)(DD, null, As, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: DD => "useObjectSpaceNormalMap" in DD,
              get: DD => DD.useObjectSpaceNormalMap,
              set: (DD, zD) => {
                DD.useObjectSpaceNormalMap = zD
              }
            },
            metadata: zD
          }, aL, uL), (0, VD.i)(DD, null, Us, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: DD => "useParallax" in DD,
              get: DD => DD.useParallax,
              set: (DD, zD) => {
                DD.useParallax = zD
              }
            },
            metadata: zD
          }, vL, tL), (0, VD.i)(DD, null, fs, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: DD => "useParallaxOcclusion" in DD,
              get: DD => DD.useParallaxOcclusion,
              set: (DD, zD) => {
                DD.useParallaxOcclusion = zD
              }
            },
            metadata: zD
          }, FL, YL), (0, VD.i)(DD, null, Is, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: DD => "parallaxScaleBias" in DD,
              get: DD => DD.parallaxScaleBias,
              set: (DD, zD) => {
                DD.parallaxScaleBias = zD
              }
            },
            metadata: zD
          }, HL, qL), (0, VD.i)(DD, null, Bs, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: DD => "disableLighting" in DD,
              get: DD => DD.disableLighting,
              set: (DD, zD) => {
                DD.disableLighting = zD
              }
            },
            metadata: zD
          }, Dc, zc), (0, VD.i)(DD, null, Gs, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: DD => "forceIrradianceInFragment" in DD,
              get: DD => DD.forceIrradianceInFragment,
              set: (DD, zD) => {
                DD.forceIrradianceInFragment = zD
              }
            },
            metadata: zD
          }, wc, pc), (0, VD.i)(DD, null, hs, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: DD => "maxSimultaneousLights" in DD,
              get: DD => DD.maxSimultaneousLights,
              set: (DD, zD) => {
                DD.maxSimultaneousLights = zD
              }
            },
            metadata: zD
          }, sc, Kc), (0, VD.i)(DD, null, ns, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: DD => "invertNormalMapX" in DD,
              get: DD => DD.invertNormalMapX,
              set: (DD, zD) => {
                DD.invertNormalMapX = zD
              }
            },
            metadata: zD
          }, rc, Lc), (0, VD.i)(DD, null, Ms, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: DD => "invertNormalMapY" in DD,
              get: DD => DD.invertNormalMapY,
              set: (DD, zD) => {
                DD.invertNormalMapY = zD
              }
            },
            metadata: zD
          }, cc, gc), (0, VD.i)(DD, null, Os, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: DD => "twoSidedLighting" in DD,
              get: DD => DD.twoSidedLighting,
              set: (DD, zD) => {
                DD.twoSidedLighting = zD
              }
            },
            metadata: zD
          }, Rc, Ac), (0, VD.i)(DD, null, Es, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: DD => "useAlphaFresnel" in DD,
              get: DD => DD.useAlphaFresnel,
              set: (DD, zD) => {
                DD.useAlphaFresnel = zD
              }
            },
            metadata: zD
          }, Uc, fc), (0, VD.i)(DD, null, Qs, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: DD => "useLinearAlphaFresnel" in DD,
              get: DD => DD.useLinearAlphaFresnel,
              set: (DD, zD) => {
                DD.useLinearAlphaFresnel = zD
              }
            },
            metadata: zD
          }, Ic, Bc), (0, VD.i)(DD, null, Xs, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "environmentBRDFTexture" in DD,
              get: DD => DD.environmentBRDFTexture,
              set: (DD, zD) => {
                DD.environmentBRDFTexture = zD
              }
            },
            metadata: zD
          }, Gc, hc), (0, VD.i)(DD, null, Vs, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: DD => "forceNormalForward" in DD,
              get: DD => DD.forceNormalForward,
              set: (DD, zD) => {
                DD.forceNormalForward = zD
              }
            },
            metadata: zD
          }, nc, Mc), (0, VD.i)(DD, null, Ps, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: DD => "enableSpecularAntiAliasing" in DD,
              get: DD => DD.enableSpecularAntiAliasing,
              set: (DD, zD) => {
                DD.enableSpecularAntiAliasing = zD
              }
            },
            metadata: zD
          }, Oc, Jc), (0, VD.i)(DD, null, Cs, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: DD => "useHorizonOcclusion" in DD,
              get: DD => DD.useHorizonOcclusion,
              set: (DD, zD) => {
                DD.useHorizonOcclusion = zD
              }
            },
            metadata: zD
          }, Ec, Qc), (0, VD.i)(DD, null, xs, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: DD => "useRadianceOcclusion" in DD,
              get: DD => DD.useRadianceOcclusion,
              set: (DD, zD) => {
                DD.useRadianceOcclusion = zD
              }
            },
            metadata: zD
          }, Xc, Vc), (0, VD.i)(DD, null, Ts, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: DD => "unlit" in DD,
              get: DD => DD.unlit,
              set: (DD, zD) => {
                DD.unlit = zD
              }
            },
            metadata: zD
          }, Pc, Cc), (0, VD.i)(DD, null, bs, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: DD => "applyDecalMapAfterDetailMap" in DD,
              get: DD => DD.applyDecalMapAfterDetailMap,
              set: (DD, zD) => {
                DD.applyDecalMapAfterDetailMap = zD
              }
            },
            metadata: zD
          }, xc, Tc), (0, VD.i)(DD, null, ds, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "debugMode" in DD,
              get: DD => DD.debugMode,
              set: (DD, zD) => {
                DD.debugMode = zD
              }
            },
            metadata: zD
          }, bc, jc), (0, VD.i)(DD, null, Ss, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "transparencyMode" in DD,
              get: DD => DD.transparencyMode
            },
            metadata: zD
          }, null, ls), zD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zD
          })
        })(), DD.SSS_QUALITY_LOW = 0, DD.SSS_QUALITY_MEDIUM = 1, DD.SSS_QUALITY_HIGH = 2, DD._noiseTextures = {}, DD.ForceGLSL = !1, DD._ShaderLoader = new Uz.d((() => [Promise.all([wD.e(317), wD.e(381)]).then((() => wD(61478))), Promise.all([wD.e(322), wD.e(318), wD.e(380), wD.e(385)]).then((() => wD(61490)))]), (() => [Promise.all([wD.e(336), wD.e(338), wD.e(384)]).then((() => wD(61539))), Promise.all([wD.e(336), wD.e(339), wD.e(383), wD.e(386)]).then((() => wD(61548)))])), DD
      })(),
      qz = !1;
    qz || (qz = !0, (0, vD.h)(), (0, kz.i)("BABYLON.OpenPBRMaterial", Hz));
    var Dw = wD(37119);
    class zw {
      constructor(DD) {
        this.name = Sz.d.NAME_PROCEDURALTEXTURE, this.oB = DD
      }
      register() {
        this.oB._beforeClearStage.registerStep(Sz.d.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.oB.proceduralTexturesEnabled) {
          Xz.h.StartPerformanceCounter("Procedural textures", this.oB.proceduralTextures.length > 0);
          for (let DD = 0; DD < this.oB.proceduralTextures.length; DD++) {
            const zD = this.oB.proceduralTextures[DD];
            zD._shouldRender() && zD.render()
          }
          Xz.h.EndPerformanceCounter("Procedural textures", this.oB.proceduralTextures.length > 0)
        }
      }
    }
    var ww = wD(40249);
    let pw = (() => {
      var DD;
      let zD, pD, sD, rD, LD, cD = TD.d,
        gD = [],
        RD = [],
        AD = [],
        UD = [],
        fD = [],
        ID = [],
        GD = [],
        hD = [],
        nD = [];
      return DD = class extends cD {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(DD, zD, wD, pD) {
          let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            KD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, pD, !KD), this.isEnabled = ((0, VD.m)(this, gD), (0, VD.m)(this, RD, !0)), this.autoClear = ((0, VD.m)(this, AD), (0, VD.m)(this, UD, !0)), this.onGenerated = (0, VD.m)(this, fD), this.onGeneratedObservable = new Dw.b, this.onBeforeGenerationObservable = new Dw.b, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, VD.m)(this, ID, void 0), this._drawWrapper = (0, VD.m)(this, GD), this._textures = {}, this._size = (0, VD.m)(this, hD, void 0), this._textureType = (0, VD.m)(this, nD), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === sD || sD instanceof TD.d ? (this._options = {}, this._fallbackTexture = sD) : (this._options = sD, this._fallbackTexture = sD.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let cD = (pD = this.Ul() || BD.d.LastCreatedScene)._getComponent(Sz.d.NAME_PROCEDURALTEXTURE);
          cD || (cD = new zw(pD), pD.ApD(cD)), this._options.skipSceneRegistration || pD.proceduralTextures.push(this), this._fullEngine = pD.iI(), this.name = DD, this.isRenderTarget = !0, this._size = zD, this._textureType = LD, this._generateMipMaps = KD, this._drawWrapper = new ww.e(this._fullEngine), this.setFragment(wD);
          const MD = this._createRtWrapper(rD, zD, KD, LD);
          this._texture = MD.texture;
          const OD = [];
          OD.push(1, 1), OD.push(-1, 1), OD.push(-1, -1), OD.push(1, -1), this._vertexBuffers[ZD.k.PositionKind] = new ZD.k(this._fullEngine, OD, ZD.k.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(DD, zD, wD, pD) {
          return DD ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(zD, {
            generateMipMaps: wD,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: pD,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(zD, {
            generateMipMaps: wD,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: pD,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(DD) {
          this._drawWrapper.effect = DD
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((DD => {
            this._contentData = this.readPixels(0, 0, DD), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const DD = this._fullEngine,
            zD = [];
          zD.push(0), zD.push(1), zD.push(2), zD.push(0), zD.push(2), zD.push(3), this._indexBuffer = DD.createIndexBuffer(zD)
        }
        _rebuild() {
          const DD = this._vertexBuffers[ZD.k.PositionKind];
          DD && DD._rebuild(), this._createIndexBuffer(), this.refreshRate === Vz.b.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Vz.b.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(DD) {
          if (this.isReady()) return void DD(this);
          const zD = this.getEffect();
          zD && zD.executeWhenCompiled((() => {
            DD(this)
          }))
        }
        isReady() {
          const DD = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const zD = this._getDefines();
          if (this._drawWrapper.effect && zD === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const pD = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== zD && (this._cachedDefines = zD, this._drawWrapper.effect = DD.createEffect(pD, [ZD.k.PositionKind], this._uniforms, this._samplers, zD, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([wD.e(389).then((() => wD(61614))), this._options.extraInitializationsAsync()]) : await Promise.all([wD.e(390).then((() => wD(61619))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await wD.e(389).then((() => wD(61614))) : await wD.e(390).then((() => wD(61619)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(DD) {
          this._fragment = DD
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(DD) {
          this._refreshRate = DD, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(DD, zD) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const wD = this._texture.isCube;
          this._rtWrapper.dispose();
          const pD = this._createRtWrapper(wD, DD, zD, this._textureType);
          this._texture = pD.texture, this._size = DD, this._generateMipMaps = zD
        }
        _checkUniform(DD) {
          -1 === this._uniforms.indexOf(DD) && this._uniforms.push(DD)
        }
        setTexture(DD, zD) {
          return -1 === this._samplers.indexOf(DD) && this._samplers.push(DD), this._textures[DD] = zD, this
        }
        setFloat(DD, zD) {
          return this._checkUniform(DD), this._floats[DD] = zD, this
        }
        setInt(DD, zD) {
          return this._checkUniform(DD), this._ints[DD] = zD, this
        }
        setFloats(DD, zD) {
          return this._checkUniform(DD), this._floatsArrays[DD] = zD, this
        }
        setColor3(DD, zD) {
          return this._checkUniform(DD), this._colors3[DD] = zD, this
        }
        setColor4(DD, zD) {
          return this._checkUniform(DD), this._colors4[DD] = zD, this
        }
        setVector2(DD, zD) {
          return this._checkUniform(DD), this._vectors2[DD] = zD, this
        }
        setVector3(DD, zD) {
          return this._checkUniform(DD), this._vectors3[DD] = zD, this
        }
        setVector4(DD, zD) {
          return this._checkUniform(DD), this._vectors4[DD] = zD, this
        }
        setMatrix(DD, zD) {
          return this._checkUniform(DD), this._matrices[DD] = zD, this
        }
        render(DD) {
          const zD = this.Ul();
          if (!zD) return;
          const wD = this._fullEngine;
          if (wD.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), wD.setState(!1), !this.nodeMaterialSource) {
            for (const DD in this._textures) this._drawWrapper.effect.setTexture(DD, this._textures[DD]);
            for (const DD in this._ints) this._drawWrapper.effect.setInt(DD, this._ints[DD]);
            for (const DD in this._floats) this._drawWrapper.effect.setFloat(DD, this._floats[DD]);
            for (const DD in this._floatsArrays) this._drawWrapper.effect.setArray(DD, this._floatsArrays[DD]);
            for (const DD in this._colors3) this._drawWrapper.effect.setColor3(DD, this._colors3[DD]);
            for (const DD in this._colors4) {
              const zD = this._colors4[DD];
              this._drawWrapper.effect.setFloat4(DD, zD.r, zD.g, zD.b, zD.a)
            }
            for (const DD in this._vectors2) this._drawWrapper.effect.setVector2(DD, this._vectors2[DD]);
            for (const DD in this._vectors3) this._drawWrapper.effect.setVector3(DD, this._vectors3[DD]);
            for (const DD in this._vectors4) this._drawWrapper.effect.setVector4(DD, this._vectors4[DD]);
            for (const DD in this._matrices) this._drawWrapper.effect.setMatrix(DD, this._matrices[DD])
          }
          if (!this._texture || !this._rtWrapper) return;
          wD._enableGPUDebugMarkers && wD._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const pD = wD.currentViewport;
          if (this.isCube)
            for (let sD = 0; sD < 6; sD++) wD.bindFramebuffer(this._rtWrapper, sD, void 0, void 0, !0), wD.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", sD), this.autoClear && wD.clear(zD.clearColor, !0, !1, !1), wD.drawElementsType(KD.b.TriangleFillMode, 0, 6), wD.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let DD = 1;
            this._rtWrapper.is3D ? DD = this._rtWrapper.depth : this._rtWrapper.is2DArray && (DD = this._rtWrapper.layers);
            for (let pD = 0; pD < DD; pD++) {
              if (wD.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, pD), wD.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== DD ? pD / (DD - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", pD);
                for (const DD in this._textures) this._drawWrapper.effect.setTexture(DD, this._textures[DD])
              }
              this.autoClear && wD.clear(zD.clearColor, !0, !1, !1), wD.drawElementsType(KD.b.TriangleFillMode, 0, 6), wD.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          pD && wD.setViewport(pD), this.isCube && wD.generateMipMapsForCubemap(this._texture, !0), wD._enableGPUDebugMarkers && wD._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const zD = this.getSize(),
            wD = new DD(this.name, zD.width, this._fragment, this.Ul(), this._fallbackTexture, this._generateMipMaps);
          return wD.hasAlpha = this.hasAlpha, wD.level = this.level, wD.coordinatesMode = this.coordinatesMode, wD
        }
        dispose() {
          const DD = this.Ul();
          if (!DD) return;
          const zD = DD.proceduralTextures.indexOf(this);
          zD >= 0 && DD.proceduralTextures.splice(zD, 1);
          const wD = this._vertexBuffers[ZD.k.PositionKind];
          wD && (wD.dispose(), this._vertexBuffers[ZD.k.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const wD = "function" === typeof Symbol && Symbol.metadata ? Object.create(cD[Symbol.metadata] ?? null) : void 0;
        zD = [(0, PD.C)()], pD = [(0, PD.C)()], sD = [(0, PD.C)()], rD = [(0, PD.C)()], LD = [(0, PD.C)()], (0, VD.i)(DD, null, LD, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: DD => "refreshRate" in DD,
            get: DD => DD.refreshRate
          },
          metadata: wD
        }, null, gD), (0, VD.i)(null, null, zD, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isEnabled" in DD,
            get: DD => DD.isEnabled,
            set: (DD, zD) => {
              DD.isEnabled = zD
            }
          },
          metadata: wD
        }, RD, AD), (0, VD.i)(null, null, pD, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: DD => "autoClear" in DD,
            get: DD => DD.autoClear,
            set: (DD, zD) => {
              DD.autoClear = zD
            }
          },
          metadata: wD
        }, UD, fD), (0, VD.i)(null, null, sD, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: DD => "_generateMipMaps" in DD,
            get: DD => DD._generateMipMaps,
            set: (DD, zD) => {
              DD._generateMipMaps = zD
            }
          },
          metadata: wD
        }, ID, GD), (0, VD.i)(null, null, rD, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: DD => "_size" in DD,
            get: DD => DD._size,
            set: (DD, zD) => {
              DD._size = zD
            }
          },
          metadata: wD
        }, hD, nD), wD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wD
        })
      })(), DD
    })();

    function sw(DD) {
      return "texture" in DD
    }

    function Kw(DD) {
      return "value" in DD
    }
    async function rw(DD, zD, pD) {
      const sD = [zD.red, zD.green, zD.blue, zD.alpha],
        KD = [],
        rD = [];
      for (let wD = 0; wD < 4; wD++) {
        const DD = sD[wD];
        if (DD)
          if (sw(DD)) {
            if (DD.sourceChannel < 0 || DD.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let zD = KD.indexOf(DD.texture); - 1 === zD && (zD = KD.length, KD.push(DD.texture)), rD[wD] = zD
          } else {
            if (!Kw(DD)) throw new Error("Invalid channel input configuration");
            if (DD.value < 0 || DD.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            rD[wD] = -1
          }
        else rD[wD] = -1
      }
      let LD = zD.outputSize;
      if (!LD && KD.length > 0) {
        let DD = 0;
        for (const zD of KD) {
          const wD = zD.getSize(),
            pD = Math.max(wD.width, wD.height);
          pD > DD && (DD = pD, LD = wD.width === wD.height ? DD : wD)
        }
      }
      LD = LD || 512;
      const cD = [],
        gD = new Set;
      for (let wD = 0; wD < 4; wD++) {
        const DD = sD[wD],
          zD = ["RED", "GREEN", "BLUE", "ALPHA"][wD];
        if (DD && sw(DD)) {
          cD.push(`${zD}_FROM_TEXTURE`);
          const DD = rD[wD];
          gD.add(DD)
        }
      }
      gD.forEach((DD => {
        cD.push(`USE_TEXTURE${DD}`)
      }));
      const RD = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: pD.iI().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            pD.iI().isWebGPU ? await Promise.all([wD.e(387).then((() => wD(61605)))]) : await Promise.all([wD.e(388).then((() => wD(61607)))])
          },
          skipSceneRegistration: !0
        },
        AD = new pw(DD, LD, "textureMerger", pD, RD);
      AD.refreshRate = -1, AD.defines = cD.length > 0 ? "#define " + cD.join("\n#define ") + "\n" : "";
      for (let wD = 0; wD < KD.length; wD++) UD = KD[wD], (fD = AD).uOffset = UD.uOffset, fD.vOffset = UD.vOffset, fD.uScale = UD.uScale, fD.vScale = UD.vScale, fD.uAng = UD.uAng, fD.vAng = UD.vAng, fD.wAng = UD.wAng, fD.uRotationCenter = UD.uRotationCenter, fD.vRotationCenter = UD.vRotationCenter, AD.setTexture(`inputTexture${wD}`, KD[wD]);
      var UD, fD;
      for (let wD = 0; wD < 4; wD++) {
        const DD = sD[wD],
          zD = ["red", "green", "blue", "alpha"][wD];
        if (DD && sw(DD)) {
          const pD = rD[wD];
          AD.setInt(`${zD}TextureIndex`, pD), AD.setInt(`${zD}SourceChannel`, DD.sourceChannel)
        } else {
          let pD;
          pD = DD && Kw(DD) ? DD.value : 3 === wD ? 1 : 0, AD.setFloat(`${zD}ConstantValue`, pD)
        }
      }
      return await new Promise(((DD, zD) => {
        AD.executeWhenReady((() => {
          try {
            AD.render(), DD(AD)
          } catch (wD) {
            zD(wD instanceof Error ? wD : new Error(String(wD)))
          }
        }))
      }))
    }

    function Lw(DD, zD) {
      return {
        texture: DD,
        sourceChannel: zD
      }
    }

    function gw(DD) {
      return {
        value: DD
      }
    }

    function Rw(DD, zD, wD, pD) {
      return {
        red: DD,
        green: zD,
        blue: wD,
        alpha: pD
      }
    }
    var Aw = wD(39753),
      Uw = wD(39849),
      fw = wD(37103),
      Iw = wD(39914),
      Bw = wD(39843);
    class Gw {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class hw extends Aw.e {
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
        return !!this._options?.enableMultiview || this.AB > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Gw;
        super(null), void 0 === DD.deterministicLockstep && (DD.deterministicLockstep = !1), void 0 !== DD.timeStep && (this._timeStep = DD.timeStep), void 0 === DD.lockstepMaxSteps && (DD.lockstepMaxSteps = 4), this._options = DD, fw.d.SetMatrixPrecision(!!DD.useHighPrecisionMatrix), this._caps = {
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
        }, DD.enableMultiview && (this._caps.multiview = {
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
        }, DD.renderingCanvas && (this._renderingCanvas = DD.renderingCanvas), CD.d.Log(`Babylon.js v${Aw.e.Version} - Null engine`);
        const zD = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (zD.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (zD.Blob = function() {})
      }
      createVertexBuffer(DD) {
        const zD = new Uw.d;
        return zD.references = 1, zD
      }
      createIndexBuffer(DD) {
        const zD = new Uw.d;
        return zD.references = 1, zD
      }
      clear(DD, zD, wD) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(DD, zD, wD) {
        this._cachedViewport = DD
      }
      createUniformBuffer(DD) {
        const zD = new Uw.d;
        return zD.references = 1, zD.bA = DD instanceof Array ? DD.length * Float32Array.BYTES_PER_ELEMENT : DD.byteLength, zD
      }
      createDynamicUniformBuffer(DD) {
        return this.createUniformBuffer(DD)
      }
      updateUniformBuffer(DD, zD, wD, pD) {}
      bindUniformBufferBase(DD, zD, wD) {}
      bindUniformBlock(DD, zD, wD) {}
      createShaderProgram(DD, zD, wD, pD, sD) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(DD, zD) {
        return []
      }
      getAttributes(DD, zD) {
        return []
      }
      bindSamplers(DD) {
        this._currentEffect = null
      }
      enableEffect(DD) {
        DD = null !== DD && (0, Bw.b)(DD) ? DD.effect : DD, this._currentEffect = DD, DD && (DD.onBind && DD.onBind(DD), DD._onBindObservable && DD._onBindObservable.notifyObservers(DD))
      }
      setStateCullFaceType(DD, zD) {}
      setState(DD) {}
      setIntArray(DD, zD) {
        return !0
      }
      setIntArray2(DD, zD) {
        return !0
      }
      setIntArray3(DD, zD) {
        return !0
      }
      setIntArray4(DD, zD) {
        return !0
      }
      setFloatArray(DD, zD) {
        return !0
      }
      setFloatArray2(DD, zD) {
        return !0
      }
      setFloatArray3(DD, zD) {
        return !0
      }
      setFloatArray4(DD, zD) {
        return !0
      }
      setArray(DD, zD) {
        return !0
      }
      setArray2(DD, zD) {
        return !0
      }
      setArray3(DD, zD) {
        return !0
      }
      setArray4(DD, zD) {
        return !0
      }
      setMatrices(DD, zD) {
        return !0
      }
      setMatrix3x3(DD, zD) {
        return !0
      }
      setMatrix2x2(DD, zD) {
        return !0
      }
      setFloat(DD, zD) {
        return !0
      }
      setFloat2(DD, zD, wD) {
        return !0
      }
      setFloat3(DD, zD, wD, pD) {
        return !0
      }
      setBool(DD, zD) {
        return !0
      }
      setFloat4(DD, zD, wD, pD, sD) {
        return !0
      }
      setAlphaMode(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[wD] !== DD && (this.alphaState.setAlphaBlend(0 !== DD, 0), zD || this.setDepthWrite(0 === DD), this._alphaMode[wD] = DD)
      }
      bindBuffers(DD, zD, wD) {}
      wipeCaches(DD) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, DD && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(DD, zD, wD, pD) {}
      drawElementsType(DD, zD, wD, pD) {}
      drawArraysType(DD, zD, wD, pD) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(DD) {}
      createTexture(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          rD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          LD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const cD = new Pz.e(this, 1),
          gD = String(DD);
        return cD.url = gD, cD.generateMipMaps = !zD, cD.samplingMode = sD, cD.invertY = wD, cD.baseWidth = this._options.textureSize, cD.baseHeight = this._options.textureSize, cD.width = this._options.textureSize, cD.height = this._options.textureSize, LD && (cD.format = LD), rD && (cD._buffer = rD), cD.isReady = !0, KD && setTimeout((() => {
          KD(cD)
        })), this._internalTexturesCache.push(cD), cD
      }
      _createHardwareRenderTargetWrapper(DD, zD, wD) {
        const pD = new Iw.b(DD, zD, wD, this);
        return this._renderTargetWrapperCache.push(pD), pD
      }
      createRenderTargetTexture(DD, zD) {
        const wD = this._createHardwareRenderTargetWrapper(!1, !1, DD),
          pD = {};
        void 0 !== zD && "object" === typeof zD ? (pD.generateMipMaps = zD.generateMipMaps, pD.generateDepthBuffer = void 0 === zD.generateDepthBuffer || zD.generateDepthBuffer, pD.generateStencilBuffer = pD.generateDepthBuffer && zD.generateStencilBuffer, pD.type = void 0 === zD.type ? 0 : zD.type, pD.samplingMode = void 0 === zD.samplingMode ? 3 : zD.samplingMode) : (pD.generateMipMaps = zD, pD.generateDepthBuffer = !0, pD.generateStencilBuffer = !1, pD.type = 0, pD.samplingMode = 3);
        const sD = new Pz.e(this, 5);
        wD.setTexture(sD);
        const KD = DD.width || DD,
          rD = DD.height || DD;
        return wD._generateDepthBuffer = pD.generateDepthBuffer, wD._generateStencilBuffer = !!pD.generateStencilBuffer, sD.baseWidth = KD, sD.baseHeight = rD, sD.width = KD, sD.height = rD, sD.isReady = !0, sD.samples = 1, sD.generateMipMaps = !!pD.generateMipMaps, sD.samplingMode = pD.samplingMode, sD.type = pD.type, this._internalTexturesCache.push(sD), wD
      }
      createMultiviewRenderTargetTexture(DD, zD) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const wD = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: DD,
            height: zD
          }),
          pD = new Pz.e(this, 5, !0);
        return pD.baseWidth = DD, pD.baseHeight = zD, pD.width = DD, pD.height = zD, pD.isMultiview = !0, pD.isReady = !0, pD.format = 5, pD.samples = 1, wD.setTextures(pD), wD
      }
      bindMultiviewFramebuffer(DD) {
        this.bindFramebuffer(DD, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(DD, zD) {
        const wD = this._createHardwareRenderTargetWrapper(!1, !0, DD),
          pD = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...zD
          };
        pD.generateStencilBuffer = pD.generateDepthBuffer && pD.generateStencilBuffer, (1 !== pD.type || this._caps.textureFloatLinearFiltering) && (2 !== pD.type || this._caps.textureHalfFloatLinearFiltering) || (pD.samplingMode = 1), wD._generateDepthBuffer = pD.generateDepthBuffer, wD._generateStencilBuffer = !!pD.generateStencilBuffer;
        const sD = new Pz.e(this, 5);
        return sD.baseWidth = DD, sD.baseHeight = DD, sD.width = DD, sD.height = DD, sD.isReady = !0, sD.isCube = !0, sD.samples = 1, sD.generateMipMaps = !!pD.generateMipMaps, sD.samplingMode = pD.samplingMode, sD.type = pD.type, this._internalTexturesCache.push(sD), wD
      }
      updateTextureSamplingMode(DD, zD) {
        zD.samplingMode = DD
      }
      createRawTexture(DD, zD, wD, pD, sD, KD, rD) {
        let LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          cD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          gD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const RD = new Pz.e(this, 3);
        return RD.baseWidth = zD, RD.baseHeight = wD, RD.width = zD, RD.height = wD, RD.format = pD, RD.generateMipMaps = sD, RD.samplingMode = rD, RD.invertY = KD, RD._compression = LD, RD.type = cD, RD._useSRGBBuffer = gD, this._doNotHandleContextLost || (RD._bufferView = DD), RD
      }
      updateRawTexture(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        DD && (DD._bufferView = zD, DD.format = wD, DD.invertY = pD, DD._compression = sD, DD.type = KD, DD._useSRGBBuffer = rD)
      }
      bindFramebuffer(DD, zD, wD, pD, sD) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = DD, this._currentFramebuffer = null, this._cachedViewport && !sD && this.setViewport(this._cachedViewport, wD, pD)
      }
      unBindFramebuffer(DD) {
        let zD = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, zD && zD(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(DD) {
        const zD = new Uw.d;
        return zD.references = 1, zD.bA = 1, zD
      }
      updateDynamicTexture(DD, zD, wD) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(DD) {}
      updateDynamicIndexBuffer(DD, zD) {}
      updateDynamicVertexBuffer(DD, zD, wD, pD) {}
      _bindTextureDirectly(DD, zD) {
        return this._boundTexturesCache[this._activeChannel] !== zD && (this._boundTexturesCache[this._activeChannel] = zD, !0)
      }
      _bindTexture(DD, zD) {
        DD < 0 || this._bindTextureDirectly(0, zD)
      }
      _deleteBuffer(DD) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(DD) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(DD, zD, wD, pD, sD) {}
      _uploadDataToTextureDirectly(DD, zD) {}
      _uploadArrayBufferViewToTexture(DD, zD) {}
      _uploadImageToTexture(DD, zD) {}
    }
    wD(39958), wD(39998), wD(39951);
    async function nw(DD) {
      const zD = DD.getInternalTexture();
      if (!zD || 1 !== zD.source) return null;
      if (zD.invertY) {
        const zD = DD.Ul()?.iI();
        if (!(zD instanceof hw)) return null
      }
      const wD = zD._buffer;
      let pD, KD = DD.mimeType;
      try {
        wD ? ArrayBuffer.isView(wD) ? pD = wD.buffer.slice(wD.byteOffset, wD.byteOffset + wD.byteLength) : wD instanceof ArrayBuffer ? pD = wD : wD instanceof Blob ? (pD = await wD.arrayBuffer(), KD = wD.type || KD) : "string" === typeof wD ? (pD = await sD.Tools.LoadFileAsync(wD), KD = (0, cD.b)(wD) || KD) : "undefined" !== typeof HTMLImageElement && wD instanceof HTMLImageElement && (pD = await sD.Tools.LoadFileAsync(wD.src), KD = (0, cD.b)(wD.src) || KD) : (pD = await sD.Tools.LoadFileAsync(zD.url), KD = (0, cD.b)(zD.url) || KD)
      } catch {
        return null
      }
      if (pD && !KD && zD.url) {
        const DD = zD.url.match(/^data:([^;,]+)/);
        KD = DD ? DD[1] : (0, cD.b)(zD.url)
      }
      return pD && KD ? {
        data: pD,
        mimeType: KD
      } : null
    }
    const Mw = 1e-6,
      Ow = new GD.Color3(.04, .04, .04),
      Jw = 1024,
      Ew = GD.Color3.White(),
      Qw = GD.Color3.BlackReadOnly;

    function Xw(DD) {
      switch (DD) {
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

    function Vw(DD, zD, wD) {
      if (zD < Ow.r) return 0;
      const pD = Ow.r,
        sD = DD * wD / (1 - Ow.r) + zD - 2 * Ow.r,
        KD = sD * sD - 4 * pD * (Ow.r - zD);
      return MD.Clamp((-sD + Math.sqrt(KD)) / (2 * pD), 0, 1)
    }

    function Pw(DD) {
      const zD = DD.diffuseColor.toLinearSpace(DD.Ul().iI().useExactSrgbConversions).scale(.5),
        wD = DD.alpha,
        pD = function(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new ND.r(0, 1),
            wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ND.r(0, .1),
            pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ND.r(0, .1),
            sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ND.r(1300, .1);
          return function(DD, zD, wD, pD, sD) {
            return (1 - DD) * (1 - DD) * (1 - DD) * zD + 3 * (1 - DD) * (1 - DD) * DD * wD + 3 * (1 - DD) * DD * DD * pD + DD * DD * DD * sD
          }(Math.pow(DD / sD.x, .333333), zD.y, wD.y, pD.y, sD.y)
        }(MD.Clamp(DD.specularPower, 0, Jw));
      return {
        baseColorFactor: [zD.r, zD.g, zD.b, wD],
        metallicFactor: 0,
        roughnessFactor: pD
      }
    }

    function Cw(DD, zD) {
      zD.needAlphaBlending() ? DD.alphaMode = "BLEND" : zD.needAlphaTesting() && (DD.alphaMode = "MASK", DD.alphaCutoff = zD.alphaCutOff)
    }

    function xw(DD, zD, wD) {
      const pD = new Uint8Array(DD * zD * 4);
      for (let sD = 0; sD < pD.length; sD += 4) pD[sD] = pD[sD + 1] = pD[sD + 2] = pD[sD + 3] = 255;
      return ED.d.CreateRGBATexture(pD, DD, zD, wD)
    }

    function Tw(DD) {
      if (DD instanceof Uint8Array) {
        const zD = DD.length,
          wD = new Float32Array(DD.length);
        for (let pD = 0; pD < zD; ++pD) wD[pD] = DD[pD] / 255;
        return wD
      }
      if (DD instanceof Float32Array) return DD;
      throw new Error("Unsupported pixel format!")
    }
    class bw {
      constructor(DD) {
        this._exporter = DD, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(DD) {
        return DD ? this._textureMap.get(DD.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(DD, zD) {
        const wD = Pw(DD),
          pD = {
            name: DD.name
          };
        if (null == DD.backFaceCulling || DD.backFaceCulling || (DD.twoSidedLighting || sD.Tools.Warn(DD.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), pD.doubleSided = !0), zD) {
          const zD = [],
            sD = DD.diffuseTexture;
          sD && zD.push(this.exportTextureAsync(sD).then((DD => {
            DD && (wD.baseColorTexture = DD)
          })));
          const KD = DD.bumpTexture;
          KD && zD.push(this.exportTextureAsync(KD).then((DD => {
            DD && (pD.normalTexture = DD, 1 !== KD.level && (pD.normalTexture.scale = KD.level))
          })));
          const rD = DD.emissiveTexture;
          rD && (pD.emissiveFactor = [1, 1, 1], zD.push(this.exportTextureAsync(rD).then((DD => {
            DD && (pD.emissiveTexture = DD)
          }))));
          const LD = DD.ambientTexture;
          LD && zD.push(this.exportTextureAsync(LD).then((DD => {
            if (DD) {
              const zD = {
                index: DD.index
              };
              pD.occlusionTexture = zD
            }
          }))), zD.length > 0 && (this._exporter._materialNeedsUVsSet.add(DD), await Promise.all(zD))
        }(DD.alpha < 1 || DD.opacityTexture) && (DD.alphaMode === QD.d.ALPHA_COMBINE ? pD.alphaMode = "BLEND" : sD.Tools.Warn(DD.name + ": glTF 2.0 does not support alpha mode: " + DD.alphaMode.toString())), DD.emissiveColor && !DD.emissiveColor.equalsWithEpsilon(Qw, Mw) && (pD.emissiveFactor = DD.emissiveColor.QpD()), pD.pbrMetallicRoughness = wD, Cw(pD, DD), await this._finishMaterialAsync(pD, DD);
        const KD = this._exporter._materials;
        return KD.push(pD), KD.length - 1
      }
      async _finishMaterialAsync(DD, zD) {
        const wD = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", DD, zD),
          pD = [];
        for (const sD of wD) pD.push(this.exportTextureAsync(sD));
        await Promise.all(pD), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", DD, zD)
      }
      _resizeTexturesToSameDimensions(DD, zD, wD) {
        const pD = DD ? DD.getSize() : {
            width: 0,
            height: 0
          },
          sD = zD ? zD.getSize() : {
            width: 0,
            height: 0
          };
        let KD, rD;
        return pD.width < sD.width ? (KD = DD && DD instanceof JD.b ? OD.h.CreateResizedCopy(DD, sD.width, sD.height, !0) : xw(sD.width, sD.height, wD), rD = zD) : pD.width > sD.width ? (rD = zD && zD instanceof JD.b ? OD.h.CreateResizedCopy(zD, pD.width, pD.height, !0) : xw(pD.width, pD.height, wD), KD = DD) : (KD = DD, rD = zD), {
          texture1: KD,
          texture2: rD
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(DD, zD, wD) {
        const pD = new Array;
        if (!DD && !zD) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const sD = DD ? DD.Ul() : zD ? zD.Ul() : null;
        if (sD) {
          const KD = this._resizeTexturesToSameDimensions(DD, zD, sD),
            rD = KD.texture1?.getSize();
          let LD, cD;
          const gD = rD.width,
            RD = rD.height,
            AD = await KD.texture1.readPixels(),
            UD = await KD.texture2.readPixels();
          if (!AD) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (LD = Tw(AD), !UD) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          cD = Tw(UD);
          const fD = cD.byteLength,
            ID = new Uint8Array(fD),
            BD = new Uint8Array(fD),
            hD = 4,
            nD = new GD.Color3(0, 0, 0);
          let MD = 0,
            OD = 0;
          for (let DD = 0; DD < RD; ++DD)
            for (let zD = 0; zD < gD; ++zD) {
              const pD = (gD * DD + zD) * hD,
                rD = {
                  diffuseColor: new GD.Color3(LD[pD], LD[pD + 1], LD[pD + 2]).toLinearSpace(sD.iI().useExactSrgbConversions).multiply(wD.diffuseColor),
                  specularColor: new GD.Color3(cD[pD], cD[pD + 1], cD[pD + 2]).toLinearSpace(sD.iI().useExactSrgbConversions).multiply(wD.specularColor),
                  glossiness: cD[pD + 3] * wD.glossiness
                },
                RD = this._convertSpecularGlossinessToMetallicRoughness(rD);
              nD.r = Math.max(nD.r, RD.baseColor.r), nD.g = Math.max(nD.g, RD.baseColor.g), nD.b = Math.max(nD.b, RD.baseColor.b), MD = Math.max(MD, RD.metallic), OD = Math.max(OD, RD.roughness), BD[pD] = 255 * RD.baseColor.r, BD[pD + 1] = 255 * RD.baseColor.g, BD[pD + 2] = 255 * RD.baseColor.b, BD[pD + 3] = KD.texture1.hasAlpha ? 255 * LD[pD + 3] : 255, ID[pD] = 0, ID[pD + 1] = 255 * RD.roughness, ID[pD + 2] = 255 * RD.metallic, ID[pD + 3] = 255
            }
          const JD = {
            baseColor: nD,
            metallic: MD,
            roughness: OD
          };
          let ED = !1,
            QD = !1;
          for (let DD = 0; DD < RD; ++DD)
            for (let zD = 0; zD < gD; ++zD) {
              const wD = (gD * DD + zD) * hD;
              BD[wD] /= JD.baseColor.r > Mw ? JD.baseColor.r : 1, BD[wD + 1] /= JD.baseColor.g > Mw ? JD.baseColor.g : 1, BD[wD + 2] /= JD.baseColor.b > Mw ? JD.baseColor.b : 1;
              const pD = GD.Color3.FromInts(BD[wD], BD[wD + 1], BD[wD + 2]).toGammaSpace(sD.iI().useExactSrgbConversions);
              BD[wD] = 255 * pD.r, BD[wD + 1] = 255 * pD.g, BD[wD + 2] = 255 * pD.b, pD.equalsWithEpsilon(Ew, Mw) || (QD = !0), ID[wD + 1] /= JD.roughness > Mw ? JD.roughness : 1, ID[wD + 2] /= JD.metallic > Mw ? JD.metallic : 1;
              GD.Color3.FromInts(255, ID[wD + 1], ID[wD + 2]).equalsWithEpsilon(Ew, Mw) || (ED = !0)
            }
          return ED && pD.push((0, XD.EncodeImageAsync)(ID, gD, RD).then((DD => {
            JD.metallicRoughnessTextureData = DD
          }))), QD && pD.push((0, XD.EncodeImageAsync)(BD, gD, RD).then((DD => {
            JD.baseColorTextureData = DD
          }))), await Promise.all(pD).then((() => JD))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(DD) {
        const zD = this._getPerceivedBrightness(DD.diffuseColor),
          wD = this._getPerceivedBrightness(DD.specularColor),
          pD = 1 - this._getMaxComponent(DD.specularColor),
          sD = Vw(zD, wD, pD),
          KD = DD.diffuseColor.scale(pD / (1 - Ow.r) / Math.max(1 - sD, Mw)),
          rD = DD.specularColor.subtract(Ow.scale(1 - sD)).scale(1 / Math.max(sD, Mw));
        let LD = GD.Color3.Lerp(KD, rD, sD * sD);
        LD = LD.clampToRef(0, 1, LD);
        return {
          baseColor: LD,
          metallic: sD,
          roughness: 1 - DD.glossiness
        }
      }
      _getPerceivedBrightness(DD) {
        return Math.sqrt(.299 * DD.r * DD.r + .587 * DD.g * DD.g + .114 * DD.b * DD.b)
      }
      _getMaxComponent(DD) {
        return Math.max(DD.r, Math.max(DD.g, DD.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(DD, zD, wD, pD, sD, KD, rD, LD, cD) {
        const gD = [],
          RD = {
            baseColor: DD,
            metallic: zD,
            roughness: wD
          };
        if (cD)
          if (rD instanceof Hz) {
            if (rD.geometryOpacityTexture) {
              const DD = pD && pD.getInternalTexture() ? pD.getInternalTexture().uniqueId : 0,
                zD = rD.geometryOpacityTexture && rD.geometryOpacityTexture.getInternalTexture() ? rD.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                wD = Number(`${DD}${zD}`),
                sD = this._textureMap.get(wD);
              sD ? LD.baseColorTexture = sD : gD.push(rw("baseColorOpacityTexture", Rw(pD ? Lw(pD, 0) : gw(1), pD ? Lw(pD, 1) : gw(1), pD ? Lw(pD, 2) : gw(1), Lw(rD.geometryOpacityTexture, 0)), rD.Ul()).then((async DD => {
                const zD = await this.exportTextureAsync(DD, wD);
                zD && (LD.baseColorTexture = zD)
              })))
            } else pD && gD.push(this.exportTextureAsync(pD).then((DD => {
              DD && (LD.baseColorTexture = DD)
            })));
            if (rD._useMetallicFromMetallicTextureBlue && sD) gD.push(this.exportTextureAsync(sD).then((DD => {
              DD && (LD.metallicRoughnessTexture = DD)
            })));
            else if (KD || sD) {
              const DD = sD && sD.getInternalTexture() ? sD.getInternalTexture().uniqueId : 0,
                zD = KD && KD.getInternalTexture() ? KD.getInternalTexture().uniqueId : 0,
                wD = Number(`${DD}${zD}`),
                pD = this._textureMap.get(wD);
              pD ? LD.metallicRoughnessTexture = pD : gD.push(rw("MetalRoughTexture", Rw(rD.ambientOcclusionTexture ? Lw(rD.ambientOcclusionTexture, 0) : gw(1), KD ? Lw(KD, 0) : gw(1), sD ? Lw(sD, 0) : gw(1)), rD.Ul()).then((async DD => {
                const zD = await this.exportTextureAsync(DD, wD);
                zD && (LD.metallicRoughnessTexture = zD)
              })))
            }
          } else pD && gD.push(this.exportTextureAsync(pD).then((DD => {
            DD && (LD.baseColorTexture = DD)
          }))), sD && gD.push(this.exportTextureAsync(sD).then((DD => {
            DD && (LD.metallicRoughnessTexture = DD)
          })));
        return gD.length > 0 && (this._exporter._materialNeedsUVsSet.add(rD), await Promise.all(gD)), RD
      }
      _getTextureSampler(DD) {
        const zD = {};
        if (!DD || !(DD instanceof JD.b)) return zD;
        const wD = this._getGLTFTextureWrapMode(DD.wrapU);
        10497 !== wD && (zD.wrapS = wD);
        const pD = this._getGLTFTextureWrapMode(DD.wrapV);
        switch (10497 !== pD && (zD.wrapT = pD), DD.samplingMode) {
          case JD.b.LINEAR_LINEAR:
            zD.magFilter = 9729, zD.minFilter = 9729;
            break;
          case JD.b.LINEAR_NEAREST:
            zD.magFilter = 9729, zD.minFilter = 9728;
            break;
          case JD.b.NEAREST_LINEAR:
            zD.magFilter = 9728, zD.minFilter = 9729;
            break;
          case JD.b.NEAREST_LINEAR_MIPLINEAR:
            zD.magFilter = 9728, zD.minFilter = 9987;
            break;
          case JD.b.NEAREST_NEAREST:
            zD.magFilter = 9728, zD.minFilter = 9728;
            break;
          case JD.b.NEAREST_LINEAR_MIPNEAREST:
            zD.magFilter = 9728, zD.minFilter = 9985;
            break;
          case JD.b.LINEAR_NEAREST_MIPNEAREST:
            zD.magFilter = 9729, zD.minFilter = 9984;
            break;
          case JD.b.LINEAR_NEAREST_MIPLINEAR:
            zD.magFilter = 9729, zD.minFilter = 9986;
            break;
          case JD.b.NEAREST_NEAREST_MIPLINEAR:
            zD.magFilter = 9728, zD.minFilter = 9986;
            break;
          case JD.b.LINEAR_LINEAR_MIPLINEAR:
            zD.magFilter = 9729, zD.minFilter = 9987;
            break;
          case JD.b.LINEAR_LINEAR_MIPNEAREST:
            zD.magFilter = 9729, zD.minFilter = 9985;
            break;
          case JD.b.NEAREST_NEAREST_MIPNEAREST:
            zD.magFilter = 9728, zD.minFilter = 9984
        }
        return zD
      }
      _getGLTFTextureWrapMode(DD) {
        switch (DD) {
          case JD.b.WRAP_ADDRESSMODE:
            return 10497;
          case JD.b.CLAMP_ADDRESSMODE:
            return 33071;
          case JD.b.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return sD.Tools.Error(`Unsupported Texture Wrap Mode ${DD}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(DD, zD, wD) {
        const pD = {
            diffuseColor: DD._albedoColor,
            specularColor: DD._reflectivityColor,
            glossiness: DD._microSurface
          },
          sD = DD._albedoTexture,
          KD = DD._reflectivityTexture,
          rD = DD._useMicroSurfaceFromReflectivityMapAlpha;
        if (KD && !rD) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((sD || KD) && wD) {
          this._exporter._materialNeedsUVsSet.add(DD);
          const wD = this._exportTextureSampler(sD || KD),
            rD = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(sD, KD, pD),
            LD = this._exporter._textures;
          if (rD.baseColorTextureData) {
            const DD = await this._exportImageAsync(`baseColor${LD.length}`, rD.baseColorTextureData);
            zD.baseColorTexture = this._exportTextureInfo(DD, wD, sD?.coordinatesIndex)
          }
          if (rD.metallicRoughnessTextureData) {
            const DD = await this._exportImageAsync(`metallicRoughness${LD.length}`, rD.metallicRoughnessTextureData);
            zD.metallicRoughnessTexture = this._exportTextureInfo(DD, wD, KD?.coordinatesIndex)
          }
          return rD
        }
        return this._convertSpecularGlossinessToMetallicRoughness(pD)
      }
      async exportPBRMaterialAsync(DD, zD) {
        const wD = {},
          pD = {
            name: DD.name
          },
          sD = DD.isMetallicWorkflow();
        if (sD) {
          const zD = DD._albedoColor,
            pD = DD.alpha;
          zD && (wD.baseColorFactor = [zD.r, zD.g, zD.b, pD])
        }
        const KD = sD ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(DD._albedoColor, DD._metallic, DD._roughness, DD._albedoTexture, DD._metallicTexture, DD._metallicTexture, DD, wD, zD) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(DD, wD, zD);
        await this._setMetallicRoughnessPbrMaterialAsync(KD, DD, pD, wD, zD), await this._finishMaterialAsync(pD, DD);
        const rD = this._exporter._materials;
        return rD.push(pD), rD.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(DD, zD, wD, pD, KD) {
        if (Cw(wD, zD), DD.baseColor.equalsWithEpsilon(Ew, Mw) && MD.WithinEpsilon(zD.alpha, 1, Mw) || (pD.baseColorFactor = [DD.baseColor.r, DD.baseColor.g, DD.baseColor.b, zD.alpha]), null != DD.metallic && 1 !== DD.metallic && (pD.metallicFactor = DD.metallic), null != DD.roughness && 1 !== DD.roughness && (pD.roughnessFactor = DD.roughness), null == zD.backFaceCulling || zD.backFaceCulling || (zD._twoSidedLighting || sD.Tools.Warn(zD.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), wD.doubleSided = !0), KD) {
          const DD = [],
            sD = zD instanceof Ez ? zD._bumpTexture : zD.geometryNormalTexture;
          sD && DD.push(this.exportTextureAsync(sD).then((DD => {
            DD && (wD.normalTexture = DD, 1 !== sD.level && (wD.normalTexture.scale = sD.level))
          })));
          const KD = zD instanceof Ez ? zD._ambientTexture : zD.ambientOcclusionTexture;
          KD && DD.push(new Promise((async DD => {
            if (zD instanceof Hz && pD.metallicRoughnessTexture) {
              const zD = this._exportTextureSampler(KD),
                wD = this._exporter._textures[pD.metallicRoughnessTexture.index].source,
                sD = this._exportTextureInfo(wD, zD, KD.coordinatesIndex);
              return this._textureMap.set(KD.uniqueId, sD), this._exporter._extensionsPostExportTextures("exporter", sD, KD), DD(sD)
            }
            return DD(await this.exportTextureAsync(KD))
          })).then((async DD => {
            if (DD) {
              const pD = {
                index: DD.index,
                texCoord: DD.texCoord,
                extensions: DD.extensions
              };
              wD.occlusionTexture = pD, pD.strength = zD instanceof Ez ? zD._ambientTextureStrength : zD.ambientOcclusionTexture.level
            }
          })));
          const rD = zD instanceof Ez ? zD._emissiveTexture : zD.emissionColorTexture;
          rD && DD.push(this.exportTextureAsync(rD).then((DD => {
            DD && (wD.emissiveTexture = DD)
          }))), DD.length > 0 && (this._exporter._materialNeedsUVsSet.add(zD), await Promise.all(DD))
        }
        const rD = zD instanceof Ez ? zD._emissiveColor : zD.emissionColor;
        rD.equalsWithEpsilon(Qw, Mw) || (wD.emissiveFactor = rD.QpD()), wD.pbrMetallicRoughness = pD
      }
      async exportOpenPBRMaterialAsync(DD, zD) {
        const wD = {},
          pD = {
            name: DD.name
          },
          sD = DD.baseColor,
          KD = DD.geometryOpacity;
        sD && (wD.baseColorFactor = [sD.r, sD.g, sD.b, KD]);
        const rD = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(DD.baseColor, DD.baseMetalness, DD.specularRoughness, DD.baseColorTexture, DD.baseMetalnessTexture, DD.specularRoughnessTexture, DD, wD, zD);
        await this._setMetallicRoughnessPbrMaterialAsync(rD, DD, pD, wD, zD), await this._finishMaterialAsync(pD, DD);
        const LD = this._exporter._materials;
        return LD.push(pD), LD.length - 1
      }
      async exportTextureAsync(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wD = this._textureMap.get(zD ?? DD.uniqueId);
        if (wD) return wD;
        const pD = this._exportTextureSampler(DD),
          sD = await this._exportTextureImageAsync(DD);
        return wD = this._exportTextureInfo(sD, pD, DD.coordinatesIndex), this._textureMap.set(zD ?? DD.uniqueId, wD), this._exporter._extensionsPostExportTextures("exporter", wD, DD), wD
      }
      async _exportTextureImageAsync(DD) {
        const zD = DD.mimeType ?? "none",
          wD = this._internalTextureToImage,
          pD = DD.getInternalTexture().uniqueId;
        wD[pD] = wD[pD] || {};
        let KD = wD[pD][zD];
        return void 0 === KD && (KD = (async () => {
          const wD = await nw(DD);
          if (wD && Xw(wD.mimeType) && ("none" === zD || wD.mimeType === zD)) return await this._exportImageAsync(DD.name, new Blob([wD.data], {
            type: wD.mimeType
          }));
          let pD = "image/png";
          "none" !== zD && (Xw(zD) ? pD = zD : (pD = "image/png", sD.Tools.Warn(`Unsupported media type: ${zD}. Exporting texture as PNG.`)));
          const KD = DD.getSize(),
            rD = await (0, OD.e)(DD),
            LD = await (0, XD.EncodeImageAsync)(rD, KD.width, KD.height, pD);
          return await this._exportImageAsync(DD.name, LD)
        })(), wD[pD][zD] = KD), await KD
      }
      async _exportImageAsync(DD, zD) {
        const wD = this._exporter._images;
        let pD;
        if (this._exporter._shouldUseGlb) {
          pD = {
            name: DD,
            mimeType: zD.type,
            bufferView: void 0
          };
          const wD = await zD.arrayBuffer(),
            sD = this._exporter._bufferManager.createBufferView(new Uint8Array(wD));
          this._exporter._bufferManager.setBufferView(pD, sD)
        } else {
          const KD = DD.replace(/\.\/|\/|\.\\|\\/g, "_"),
            rD = function(DD) {
              switch (DD) {
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
            }(zD.type);
          let LD = KD + rD;
          wD.some((DD => DD.uri === LD)) && (LD = `${KD}_${sD.Tools.RandomId()}${rD}`), pD = {
            name: DD,
            uri: LD
          }, this._exporter._imageData[LD] = zD
        }
        return wD.push(pD), wD.length - 1
      }
      _exportTextureInfo(DD, zD, wD) {
        const pD = this._exporter._textures;
        let sD = pD.findIndex((wD => wD.sampler == zD && wD.source === DD)); - 1 === sD && (sD = pD.length, pD.push({
          source: DD,
          sampler: zD
        }));
        const KD = {
          index: sD
        };
        return wD && (KD.texCoord = wD), KD
      }
      _exportTextureSampler(DD) {
        const zD = this._getTextureSampler(DD),
          wD = this._exporter._samplers,
          pD = wD.findIndex((DD => DD.minFilter === zD.minFilter && DD.magFilter === zD.magFilter && DD.wrapS === zD.wrapS && DD.wrapT === zD.wrapT));
        return -1 !== pD ? pD : (wD.push(zD), wD.length - 1)
      }
    }
    var jw = wD(39984),
      dw = wD(40146);
    (0, dw.d)();
    var Sw = wD(37088);
    const iw = pD.Matrix.Compose(new pD.WI(-1, 1, 1), pD.Quaternion.Identity(), pD.WI.Zero());

    function lw(DD, zD) {
      if (!(DD instanceof AD.e)) return !1;
      if (zD) {
        if (!DD.getWorldMatrix().equalsWithEpsilon(pD.Matrix.IdentityReadOnly, Sw.b)) return !1
      } else {
        if (!DD.getWorldMatrix().multiplyToRef(iw, pD.TmpVectors.Matrix[0]).equalsWithEpsilon(pD.Matrix.IdentityReadOnly, Sw.b)) return !1
      }
      return !(DD instanceof UD.e && DD.geometry)
    }
    const Ww = pD.WI.ZeroReadOnly,
      Nw = pD.Quaternion.Identity(),
      Zw = pD.WI.OneReadOnly,
      yw = new pD.WI(-1, 1, 1);

    function kw(DD, zD) {
      const {
        byteOffset: wD,
        byteStride: pD,
        type: sD,
        normalized: KD
      } = DD, rD = DD.getSize(), LD = zD.reduce(((DD, zD) => zD.getTotalVertices() > DD ? zD.getTotalVertices() : DD), -Number.MAX_VALUE);
      return {
        byteOffset: wD,
        byteStride: pD,
        componentCount: rD,
        type: sD,
        count: LD * rD,
        normalized: KD,
        totalVertices: LD,
        kind: DD.getKind()
      }
    }

    function mw(DD) {
      switch (DD) {
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

    function ew(DD) {
      switch (DD) {
        case RD.f.PositionKind:
        case RD.f.NormalKind:
        case RD.f.TangentKind:
        case RD.f.ColorKind:
        case RD.f.MatricesIndicesKind:
        case RD.f.MatricesIndicesExtraKind:
        case RD.f.MatricesWeightsKind:
        case RD.f.MatricesWeightsExtraKind:
        case RD.f.UVKind:
        case RD.f.UV2Kind:
        case RD.f.UV3Kind:
        case RD.f.UV4Kind:
        case RD.f.UV5Kind:
        case RD.f.UV6Kind:
          return !0
      }
      return !1
    }

    function ow(DD) {
      const zD = Math.sqrt(DD.x * DD.x + DD.y * DD.y + DD.z * DD.z);
      zD > 0 && (DD.x /= zD, DD.y /= zD, DD.z /= zD)
    }

    function aw(DD) {
      return DD.x *= -1, DD
    }

    function uw(DD) {
      if (DD.x * DD.x + DD.y * DD.y > .5) {
        const zD = Math.abs(DD.x),
          wD = Math.abs(DD.y);
        if (zD > wD) {
          const wD = Math.sign(DD.x);
          DD.x = zD, DD.y *= -wD, DD.z *= -wD, DD.w *= wD
        } else {
          const zD = Math.sign(DD.y);
          DD.x *= -zD, DD.y = wD, DD.z *= zD, DD.w *= -zD
        }
      } else {
        const zD = Math.abs(DD.z),
          wD = Math.abs(DD.w);
        if (zD > wD) {
          const wD = Math.sign(DD.z);
          DD.x *= -wD, DD.y *= wD, DD.z = zD, DD.w *= -wD
        } else {
          const zD = Math.sign(DD.w);
          DD.x *= zD, DD.y *= -zD, DD.z *= -zD, DD.w = wD
        }
      }
      return DD
    }

    function vw(DD) {
      DD.Z2(-DD.z, DD.w, DD.x, -DD.y)
    }

    function tw(DD, zD) {
      const wD = pD.WI.FromArrayToRef(zD.translation || [0, 0, 0], 0, pD.TmpVectors.WI[0]),
        sD = pD.Quaternion.FromArrayToRef(zD.rotation || [0, 0, 0, 1], 0, pD.TmpVectors.Quaternion[0]),
        KD = pD.Matrix.ComposeToRef(Zw, sD, wD, pD.TmpVectors.Matrix[0]),
        rD = pD.WI.FromArrayToRef(DD.translation || [0, 0, 0], 0, pD.TmpVectors.WI[2]),
        LD = pD.Quaternion.FromArrayToRef(DD.rotation || [0, 0, 0, 1], 0, pD.TmpVectors.Quaternion[1]),
        cD = pD.Matrix.ComposeToRef(Zw, LD, rD, pD.TmpVectors.Matrix[1]);
      KD.multiplyToRef(cD, cD), cD.decompose(void 0, sD, wD), wD.equalsWithEpsilon(Ww, Sw.b) ? delete zD.translation : zD.translation = wD.QpD(), sD.equalsWithEpsilon(Nw, Sw.b) ? delete zD.rotation : zD.rotation = sD.QpD(), zD.scale && delete zD.scale
    }

    function Fw(DD, zD) {
      if (!(zD instanceof AD.e)) return !1;
      if (!(1 === zD.getChildren().length && 0 === DD.getChildren().length && DD.parent === zD)) return !1;
      const wD = DD.Ul(),
        pD = DD instanceof dw.g && !wD.useRightHandedSystem ? yw : Zw;
      return !!zD.rc.equalsWithEpsilon(pD, Sw.b) || (CD.d.Warn(`Cannot collapse node ${DD.name} into parent node ${zD.name} with modified scaling.`), !1)
    }

    function Yw(DD) {
      if (DD instanceof Array) {
        const zD = new Float32Array(DD);
        return new Uint8Array(zD.buffer, zD.byteOffset, zD.byteLength)
      }
      return ArrayBuffer.isView(DD) ? new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength) : new Uint8Array(DD)
    }

    function Hw(DD, zD) {
      for (const [wD, pD] of Object.entries(DD)) {
        const sD = zD[wD];
        (Array.isArray(pD) && Array.isArray(sD) && qw(pD, sD) || pD === sD) && delete DD[wD]
      }
      return DD
    }

    function qw(DD, zD) {
      return DD.length === zD.length && DD.every(((DD, wD) => DD === zD[wD]))
    }
    const Dp = new Map([
      [Int8Array, (DD, zD, wD) => DD.setInt8(zD, wD)],
      [Uint8Array, (DD, zD, wD) => DD.setUint8(zD, wD)],
      [Uint8ClampedArray, (DD, zD, wD) => DD.setUint8(zD, wD)],
      [Int16Array, (DD, zD, wD) => DD.setInt16(zD, wD, !0)],
      [Uint16Array, (DD, zD, wD) => DD.setUint16(zD, wD, !0)],
      [Int32Array, (DD, zD, wD) => DD.setInt32(zD, wD, !0)],
      [Uint32Array, (DD, zD, wD) => DD.setUint32(zD, wD, !0)],
      [Float32Array, (DD, zD, wD) => DD.setFloat32(zD, wD, !0)],
      [Float64Array, (DD, zD, wD) => DD.setFloat64(zD, wD, !0)]
    ]);
    class zp {
      writeTypedArray(DD) {
        this._checkGrowBuffer(DD.byteLength);
        const zD = Dp.get(DD.constructor);
        for (let wD = 0; wD < DD.length; wD++) zD(this._dataView, this._byteOffset, DD[wD]), this._byteOffset += DD.BYTES_PER_ELEMENT
      }
      constructor(DD) {
        this._data = new Uint8Array(DD), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(DD) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, DD), this._byteOffset++
      }
      writeInt8(DD) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, DD), this._byteOffset++
      }
      writeInt16(DD) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, DD, !0), this._byteOffset += 2
      }
      writeUInt16(DD) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, DD, !0), this._byteOffset += 2
      }
      writeInt32(DD) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, DD, !0), this._byteOffset += 4
      }
      writeUInt32(DD) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, DD, !0), this._byteOffset += 4
      }
      writeFloat32(DD) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, DD, !0), this._byteOffset += 4
      }
      writeFloat64(DD) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, DD, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(DD) {
        const zD = this.byteOffset + DD;
        if (zD > this._data.byteLength) {
          const DD = new Uint8Array(2 * zD);
          DD.set(this._data), this._data = DD, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function wp(DD) {
      return DD % 4 === 0 ? 4 : DD % 2 === 0 ? 2 : 1
    }
    class pp {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(DD) {
        let zD = 0;
        this._bufferViewToData.forEach((DD => {
          zD += DD.byteLength
        }));
        const wD = new zp(zD),
          pD = Array.from(this._bufferViewToData.keys()).sort(((DD, zD) => wp(zD.byteLength) - wp(DD.byteLength)));
        for (const sD of pD) {
          sD.byteOffset = wD.byteOffset, DD.push(sD);
          const zD = DD.length - 1,
            pD = this.getPropertiesWithBufferView(sD);
          for (const DD of pD) DD.bufferView = zD;
          wD.writeTypedArray(this._bufferViewToData.get(sD)), this._bufferViewToData.delete(sD)
        }
        return wD.getOutputData()
      }
      createBufferView(DD, zD) {
        const wD = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: DD.byteLength,
          byteStride: zD
        };
        return this._bufferViewToData.set(wD, DD), wD
      }
      createAccessor(DD, zD, wD, pD, sD, KD, rD) {
        this._verifyBufferView(DD);
        const LD = {
          bufferView: void 0,
          componentType: wD,
          count: pD,
          type: zD,
          min: KD?.min,
          max: KD?.max,
          normalized: rD,
          byteOffset: sD
        };
        return this.setBufferView(LD, DD), this._accessorToBufferView.set(LD, DD), LD
      }
      setBufferView(DD, zD) {
        this._verifyBufferView(zD);
        this.getPropertiesWithBufferView(zD).push(DD)
      }
      removeBufferView(DD) {
        const zD = this.getPropertiesWithBufferView(DD);
        for (const wD of zD) void 0 !== wD.bufferView && delete wD.bufferView;
        this._bufferViewToData.delete(DD), this._bufferViewToProperties.delete(DD), this._accessorToBufferView.forEach(((zD, wD) => {
          zD === DD && (void 0 !== wD.byteOffset && delete wD.byteOffset, this._accessorToBufferView.delete(wD))
        }))
      }
      getBufferView(DD) {
        const zD = this._accessorToBufferView.get(DD);
        return this._verifyBufferView(zD), zD
      }
      getPropertiesWithBufferView(DD) {
        return this._verifyBufferView(DD), this._bufferViewToProperties.set(DD, this._bufferViewToProperties.get(DD) ?? []), this._bufferViewToProperties.get(DD)
      }
      getData(DD) {
        return this._verifyBufferView(DD), this._bufferViewToData.get(DD)
      }
      _verifyBufferView(DD) {
        if (void 0 === DD || !this._bufferViewToData.has(DD)) throw new Error(`BufferView ${DD} not found in BufferManager.`)
      }
    }
    var sp = wD(40148);
    (0, sp.d)();
    var Kp = wD(40380);
    (0, Kp.g)();
    var rp = wD(40192),
      Lp = wD(41016);
    (0, Lp.f)();
    let cp = (() => {
      var DD;
      let zD, wD, pD = [],
        sD = [],
        KD = [],
        rD = [];
      return DD = class {
        get influence() {
          return this._influence
        }
        set influence(DD) {
          if (this._influence === DD) return;
          const zD = this._influence;
          this._influence = DD, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === zD || 0 === DD)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(DD) {
          this._animationPropertiesOverride = DD
        }
        constructor(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            LD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = DD, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Dw.b, this._onDataLayoutChanged = new Dw.b, this.id = (0, VD.m)(this, pD, void 0), this.morphTargetManager = ((0, VD.m)(this, sD), (0, VD.m)(this, KD, null)), this._animationPropertiesOverride = ((0, VD.m)(this, rD), null), this.id = DD, this.morphTargetManager = LD, this._scene = wD || BD.d.LastCreatedScene, this.influence = zD, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        pLD(DD) {
          const zD = this.hasPositions;
          this._positions = DD, zD !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(DD) {
          const zD = this.hasNormals;
          this._normals = DD, zD !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(DD) {
          const zD = this.hasTangents;
          this._tangents = DD, zD !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(DD) {
          const zD = this.hasUVs;
          this._uvs = DD, zD !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(DD) {
          const zD = this.hasUV2s;
          this._uv2s = DD, zD !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(DD) {
          const zD = this.hasColors;
          this._colors = DD, zD !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const zD = Qz.d.Clone((() => new DD(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return zD._positions = this._positions, zD._normals = this._normals, zD._tangents = this._tangents, zD._uvs = this._uvs, zD._uv2s = this._uv2s, zD._colors = this._colors, zD
        }
        serialize() {
          const DD = {};
          return DD.name = this.name, DD.influence = this.influence, null != this.id && (DD.id = this.id), DD.uniqueId = this.uniqueId, DD.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (DD.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (DD.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (DD.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (DD.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (DD.colors = Array.prototype.slice.call(this.getColors())), Qz.d.AppendSerializedAnimations(this, DD), DD
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(zD, wD) {
          let pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const sD = new DD(zD.name, zD.influence, wD, pD);
          if (sD.pLD(zD.positions), null != zD.id && (sD.id = zD.id), zD.normals && sD.setNormals(zD.normals), zD.tangents && sD.setTangents(zD.tangents), zD.uvs && sD.setUVs(zD.uvs), zD.uv2s && sD.setUV2s(zD.uv2s), zD.colors && sD.setColors(zD.colors), zD.animations) {
            for (let DD = 0; DD < zD.animations.length; DD++) {
              const wD = zD.animations[DD],
                pD = (0, kz.e)("BABYLON.Animation");
              pD && sD.animations.push(pD.Parse(wD))
            }
            zD.autoAnimate && wD && wD.beginAnimation(sD, zD.autoAnimateFrom, zD.autoAnimateTo, zD.autoAnimateLoop, zD.autoAnimateSpeed || 1)
          }
          return sD
        }
        static FromMesh(zD, wD, pD) {
          wD || (wD = zD.name);
          const sD = new DD(wD, pD, zD.Ul(), zD.morphTargetManager);
          return sD.pLD(zD.getVerticesData(ZD.k.PositionKind)), zD.isVerticesDataPresent(ZD.k.NormalKind) && sD.setNormals(zD.getVerticesData(ZD.k.NormalKind)), zD.isVerticesDataPresent(ZD.k.TangentKind) && sD.setTangents(zD.getVerticesData(ZD.k.TangentKind)), zD.isVerticesDataPresent(ZD.k.UVKind) && sD.setUVs(zD.getVerticesData(ZD.k.UVKind)), zD.isVerticesDataPresent(ZD.k.UV2Kind) && sD.setUV2s(zD.getVerticesData(ZD.k.UV2Kind)), zD.isVerticesDataPresent(ZD.k.ColorKind) && sD.setColors(zD.getVerticesData(ZD.k.ColorKind)), sD
        }
      }, (() => {
        const LD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zD = [(0, PD.C)()], wD = [(0, PD.C)()], (0, VD.i)(null, null, zD, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: DD => "id" in DD,
            get: DD => DD.id,
            set: (DD, zD) => {
              DD.id = zD
            }
          },
          metadata: LD
        }, pD, sD), (0, VD.i)(null, null, wD, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: DD => "morphTargetManager" in DD,
            get: DD => DD.morphTargetManager,
            set: (DD, zD) => {
              DD.morphTargetManager = zD
            }
          },
          metadata: LD
        }, KD, rD), LD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: LD
        })
      })(), DD
    })();
    var gp, Rp = wD(41069),
      Ap = wD(40189);
    ! function(DD) {
      DD[DD.INTANGENT = 0] = "INTANGENT", DD[DD.OUTTANGENT = 1] = "OUTTANGENT"
    }(gp || (gp = {}));
    class Up {
      static _IsTransformable(DD) {
        return DD && (DD instanceof AD.e || DD instanceof sp.c || DD instanceof Ap.c)
      }
      static _CreateNodeAnimation(DD, zD, wD, pD, KD) {
        if (this._IsTransformable(DD)) {
          const rD = [],
            LD = [],
            cD = zD.getKeys(),
            gD = Up._CalculateMinMaxKeyFrames(cD),
            RD = Up._DeduceInterpolation(cD, wD, pD),
            AD = RD.interpolationType,
            UD = RD.shouldBakeAnimation;
          if (UD ? Up._CreateBakedAnimation(DD, zD, wD, gD.min, gD.max, zD.framePerSecond, KD, rD, LD, gD, pD) : "LINEAR" === AD || "STEP" === AD ? Up._CreateLinearOrStepAnimation(DD, zD, wD, rD, LD, pD) : "CUBICSPLINE" === AD ? Up._CreateCubicSplineAnimation(DD, zD, wD, rD, LD, pD) : Up._CreateBakedAnimation(DD, zD, wD, gD.min, gD.max, zD.framePerSecond, KD, rD, LD, gD, pD), rD.length && LD.length) {
            return {
              inputs: rD,
              outputs: LD,
              samplerInterpolation: AD,
              inputsMin: UD ? gD.min : sD.Tools.FloatRound(gD.min / zD.framePerSecond),
              inputsMax: UD ? gD.max : sD.Tools.FloatRound(gD.max / zD.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(DD) {
        let zD = null,
          wD = "VEC3",
          pD = !1;
        const KD = DD.targetProperty.split(".");
        switch (KD[0]) {
          case "rc":
            zD = "scale";
            break;
          case "position":
            zD = "translation";
            break;
          case "rotation":
            wD = "VEC4", zD = "rotation";
            break;
          case "rotationQuaternion":
            wD = "VEC4", pD = !0, zD = "rotation";
            break;
          case "influence":
            wD = "SCALAR", zD = "weights";
            break;
          default:
            sD.Tools.Error(`Unsupported animatable property ${KD[0]}`)
        }
        return zD ? {
          animationChannelTargetPath: zD,
          dataAccessorType: wD,
          useQuaternion: pD
        } : (sD.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
        let AD;
        if (Up._IsTransformable(DD) && DD.animations)
          for (const UD of DD.animations) {
            if (RD && !RD(UD)) continue;
            const sD = Up._DeduceAnimationInfo(UD);
            sD && (AD = {
              name: UD.name,
              samplers: [],
              channels: []
            }, Up._AddAnimation(`${UD.name}`, UD.hasRunningRuntimeAnimations ? zD : AD, DD, UD, sD.dataAccessorType, sD.animationChannelTargetPath, pD, KD, rD, LD, sD.useQuaternion, cD, gD), AD.samplers.length && AD.channels.length && wD.push(AD))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
        let AD;
        if (DD instanceof Rp.e) {
          const sD = DD.morphTargetManager;
          if (sD)
            for (let UD = 0; UD < sD.numTargets; ++UD) {
              const fD = sD.getTarget(UD);
              for (const ID of fD.animations) {
                if (RD && !RD(ID)) continue;
                const fD = new Lp.d(`${ID.name}`, "influence", ID.framePerSecond, ID.dataType, ID.MK, ID.enableBlending),
                  BD = [],
                  GD = ID.getKeys();
                for (let DD = 0; DD < GD.length; ++DD) {
                  const zD = GD[DD];
                  for (let DD = 0; DD < sD.numTargets; ++DD) DD == UD ? BD.push(zD) : BD.push({
                    frame: zD.frame,
                    value: 0
                  })
                }
                fD.setKeys(BD, !0);
                const hD = Up._DeduceAnimationInfo(fD);
                hD && (AD = {
                  name: fD.name,
                  samplers: [],
                  channels: []
                }, Up._AddAnimation(ID.name, ID.hasRunningRuntimeAnimations ? zD : AD, DD, fD, hD.dataAccessorType, hD.animationChannelTargetPath, pD, KD, rD, LD, hD.useQuaternion, cD, gD, sD.numTargets), AD.samplers.length && AD.channels.length && wD.push(AD))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
        let RD;
        if (DD.animationGroups) {
          const AD = DD.animationGroups;
          for (const UD of AD) {
            const AD = new Map,
              fD = new Map,
              ID = new Set,
              BD = UD.to - UD.from;
            RD = {
              name: UD.name,
              channels: [],
              samplers: []
            };
            for (let zD = 0; zD < UD.targetedAnimations.length; ++zD) {
              const gD = UD.targetedAnimations[zD],
                BD = gD.target,
                GD = gD.animation;
              if (cD && !cD(GD)) continue;
              const hD = LD.has(BD);
              if (this._IsTransformable(BD) || 1 === BD.length && this._IsTransformable(BD[0])) {
                const DD = Up._DeduceAnimationInfo(gD.animation);
                if (DD) {
                  const zD = this._IsTransformable(BD) ? BD : this._IsTransformable(BD[0]) ? BD[0] : null;
                  zD && Up._AddAnimation(`${GD.name}`, RD, zD, GD, DD.dataAccessorType, DD.animationChannelTargetPath, wD, pD, sD, KD, DD.useQuaternion, rD, hD)
                }
              } else if (BD instanceof cp || 1 === BD.length && BD[0] instanceof cp) {
                if (Up._DeduceAnimationInfo(gD.animation)) {
                  const zD = BD instanceof cp ? BD : BD[0];
                  if (zD) {
                    const wD = DD.morphTargetManagers.find((DD => {
                      for (let wD = 0; wD < DD.numTargets; ++wD)
                        if (DD.getTarget(wD) === zD) return !0;
                      return !1
                    }));
                    if (wD) {
                      const pD = DD.meshes.find((DD => DD.morphTargetManager === wD));
                      pD && (AD.has(pD) || AD.set(pD, new Map), AD.get(pD)?.set(zD, GD), ID.add(pD), fD.set(pD, GD))
                    }
                  }
                }
              }
            }
            ID.forEach((DD => {
              const zD = DD.morphTargetManager;
              let LD = null;
              const cD = [],
                gD = fD.get(DD).getKeys(),
                ID = gD.length;
              for (let wD = 0; wD < ID; ++wD)
                for (let pD = 0; pD < zD.numTargets; ++pD) {
                  const sD = zD.getTarget(pD),
                    KD = AD.get(DD);
                  if (KD) {
                    const zD = KD.get(sD);
                    zD ? (LD || (LD = new Lp.d(`${UD.name}_${DD.name}_MorphWeightAnimation`, "influence", zD.framePerSecond, Lp.d.ANIMATIONTYPE_FLOAT, zD.MK, zD.enableBlending)), cD.push(zD.getKeys()[wD])) : cD.push({
                      frame: UD.from + BD / ID * wD,
                      value: sD.influence,
                      inTangent: gD[0].inTangent ? 0 : void 0,
                      outTangent: gD[0].outTangent ? 0 : void 0
                    })
                  }
                }
              LD.setKeys(cD, !0);
              const GD = Up._DeduceAnimationInfo(LD);
              GD && Up._AddAnimation(`${UD.name}_${DD.name}_MorphWeightAnimation`, RD, DD, LD, GD.dataAccessorType, GD.animationChannelTargetPath, wD, pD, sD, KD, GD.useQuaternion, rD, !1, zD?.numTargets)
            })), RD.channels.length && RD.samplers.length && (gD?.set(UD, zD.length), zD.push(RD))
          }
        }
      }
      static _AddAnimation(DD, zD, wD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID) {
        const BD = Up._CreateNodeAnimation(wD, sD, rD, AD, UD);
        let GD, hD, nD, MD, OD, JD;
        if (BD) {
          if (ID) {
            let DD, zD = 0;
            const wD = [];
            for (; BD.inputs.length > 0;) DD = BD.inputs.shift(), zD % ID == 0 && wD.push(DD), zD++;
            BD.inputs = wD
          }
          const DD = LD.get(wD),
            sD = new Float32Array(BD.inputs);
          GD = cD.createBufferView(sD), hD = cD.createAccessor(GD, "SCALAR", 5126, BD.inputs.length, void 0, {
            min: [BD.inputsMin],
            max: [BD.inputsMax]
          }), RD.push(hD), nD = RD.length - 1;
          const gD = new pD.Quaternion,
            AD = new pD.WI,
            UD = new pD.WI,
            ED = wD instanceof sp.c,
            QD = mw(KD),
            XD = new Float32Array(BD.outputs.length * QD);
          BD.outputs.forEach((function(DD, zD) {
            let wD = DD;
            switch (rD) {
              case "translation":
                fD && (pD.WI.FromArrayToRef(DD, 0, UD), aw(UD), UD.toArray(wD));
                break;
              case "rotation":
                4 === DD.length ? pD.Quaternion.FromArrayToRef(DD, 0, gD) : (wD = new Array(4), pD.WI.FromArrayToRef(DD, 0, AD), pD.Quaternion.FromEulerVectorToRef(AD, gD)), fD && (uw(gD), ED && vw(gD)), gD.toArray(wD)
            }
            XD.set(wD, zD * QD)
          })), GD = cD.createBufferView(XD), hD = cD.createAccessor(GD, KD, 5126, BD.outputs.length), RD.push(hD), MD = RD.length - 1, OD = {
            interpolation: BD.samplerInterpolation,
            input: nD,
            output: MD
          }, zD.samplers.push(OD), JD = {
            sampler: zD.samplers.length - 1,
            target: {
              node: DD,
              path: rD
            }
          }, zD.channels.push(JD)
        }
      }
      static _CreateBakedAnimation(DD, zD, wD, KD, rD, LD, cD, gD, RD, AD, UD) {
        let fD;
        const ID = pD.Quaternion.Identity();
        let BD, GD, hD, nD, MD, OD = null,
          JD = null;
        AD.min = sD.Tools.FloatRound(KD / LD);
        const ED = zD.getKeys();
        for (let pD = 0, QD = ED.length; pD < QD; ++pD) {
          if (GD = ED[pD], pD + 1 < QD)
            if (hD = ED[pD + 1], GD.value.equals && GD.value.equals(hD.value) || GD.value === hD.value) {
              if (0 !== pD) continue;
              MD = GD.frame
            } else MD = hD.frame;
          else {
            if (nD = ED[pD - 1], GD.value.equals && GD.value.equals(nD.value) || GD.value === nD.value) continue;
            MD = rD
          }
          if (MD)
            for (let pD = GD.frame; pD <= MD; pD += cD) {
              if (BD = sD.Tools.FloatRound(pD / LD), BD === OD) continue;
              OD = BD, JD = BD;
              const KD = {
                key: 0,
                repeatCount: 0,
                MK: zD.MK
              };
              fD = zD._interpolate(pD, KD), Up._SetInterpolatedValue(DD, fD, BD, zD, wD, ID, gD, RD, UD)
            }
        }
        JD && (AD.max = JD)
      }
      static _ConvertFactorToVector3OrQuaternion(DD, zD, wD, KD, rD) {
        const LD = Up._GetBasePositionRotationOrScale(zD, KD, rD),
          cD = wD.targetProperty.split("."),
          gD = cD ? cD[1] : "",
          RD = rD ? pD.Quaternion.FromArray(LD).normalize() : pD.WI.FromArray(LD);
        switch (gD) {
          case "x":
          case "y":
          case "z":
            RD[gD] = DD;
            break;
          case "w":
            RD.w = DD;
            break;
          default:
            sD.Tools.Error(`glTFAnimation: Unsupported component name "${gD}"!`)
        }
        return RD
      }
      static _SetInterpolatedValue(DD, zD, wD, sD, KD, rD, LD, cD, gD) {
        let RD;
        LD.push(wD), "weights" !== KD ? (sD.dataType === Lp.d.ANIMATIONTYPE_FLOAT && (zD = this._ConvertFactorToVector3OrQuaternion(zD, DD, sD, KD, gD)), "rotation" === KD ? (gD ? rD = zD : (RD = zD, pD.Quaternion.RotationYawPitchRollToRef(RD.y, RD.x, RD.z, rD)), cD.push(rD.QpD())) : (RD = zD, cD.push(RD.QpD()))) : cD.push([zD])
      }
      static _CreateLinearOrStepAnimation(DD, zD, wD, pD, sD, KD) {
        for (const rD of zD.getKeys()) pD.push(rD.frame / zD.framePerSecond), Up._AddKeyframeValue(rD, zD, sD, wD, DD, KD)
      }
      static _CreateCubicSplineAnimation(DD, zD, wD, pD, sD, KD) {
        zD.getKeys().forEach((function(rD) {
          pD.push(rD.frame / zD.framePerSecond), Up._AddSplineTangent(gp.INTANGENT, sD, wD, "CUBICSPLINE", rD, KD), Up._AddKeyframeValue(rD, zD, sD, wD, DD, KD), Up._AddSplineTangent(gp.OUTTANGENT, sD, wD, "CUBICSPLINE", rD, KD)
        }))
      }
      static _GetBasePositionRotationOrScale(DD, zD, wD) {
        let sD;
        if ("rotation" === zD)
          if (wD) {
            sD = (DD.rotationQuaternion ?? pD.Quaternion.Identity()).QpD()
          } else {
            sD = (DD.rotation ?? pD.WI.Zero()).QpD()
          }
        else if ("translation" === zD) {
          sD = (DD.position ?? pD.WI.Zero()).QpD()
        } else {
          sD = (DD.rc ?? pD.WI.One()).QpD()
        }
        return sD
      }
      static _AddKeyframeValue(DD, zD, wD, KD, rD, LD) {
        let cD;
        const gD = zD.dataType;
        if (gD === Lp.d.ANIMATIONTYPE_VECTOR3) {
          let zD = DD.value.QpD();
          if ("rotation" === KD) {
            const DD = pD.WI.FromArray(zD);
            zD = pD.Quaternion.RotationYawPitchRoll(DD.y, DD.x, DD.z).QpD()
          }
          wD.push(zD)
        } else if (gD === Lp.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === KD) wD.push([DD.value]);
          else if (cD = this._ConvertFactorToVector3OrQuaternion(DD.value, rD, zD, KD, LD), cD) {
            if ("rotation" === KD) {
              const DD = LD ? cD : pD.Quaternion.RotationYawPitchRoll(cD.y, cD.x, cD.z).normalize();
              wD.push(DD.QpD())
            }
            wD.push(cD.QpD())
          }
        } else gD === Lp.d.ANIMATIONTYPE_QUATERNION ? wD.push(DD.value.normalize().QpD()) : sD.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(DD, zD, wD) {
        let pD, sD, KD = !1;
        if ("rotation" === zD && !wD) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let rD = 0, LD = DD.length; rD < LD; ++rD)
          if (sD = DD[rD], sD.inTangent || sD.outTangent)
            if (pD) {
              if ("CUBICSPLINE" !== pD) {
                pD = "LINEAR", KD = !0;
                break
              }
            } else pD = "CUBICSPLINE";
        else if (pD) {
          if ("CUBICSPLINE" === pD || sD.interpolation && 1 === sD.interpolation && "STEP" !== pD) {
            pD = "LINEAR", KD = !0;
            break
          }
        } else pD = sD.interpolation && 1 === sD.interpolation ? "STEP" : "LINEAR";
        return pD || (pD = "LINEAR"), {
          interpolationType: pD,
          shouldBakeAnimation: KD
        }
      }
      static _AddSplineTangent(DD, zD, wD, sD, KD, rD) {
        let LD;
        const cD = DD === gp.INTANGENT ? KD.inTangent : KD.outTangent;
        if ("CUBICSPLINE" === sD) {
          if ("rotation" === wD)
            if (cD)
              if (rD) LD = cD.QpD();
              else {
                const DD = cD;
                LD = pD.Quaternion.RotationYawPitchRoll(DD.y, DD.x, DD.z).QpD()
              }
          else LD = [0, 0, 0, 0];
          else LD = "weights" === wD ? cD ? [cD] : [0] : cD ? cD.QpD() : [0, 0, 0];
          zD.push(LD)
        }
      }
      static _CalculateMinMaxKeyFrames(DD) {
        let zD = 1 / 0,
          wD = -1 / 0;
        return DD.forEach((function(DD) {
          zD = Math.min(zD, DD.frame), wD = Math.max(wD, DD.frame)
        })), {
          min: zD,
          max: wD
        }
      }
    }

    function fp(DD, zD, wD, KD, rD, LD) {
      const cD = {
          attributes: {},
          influence: DD.influence,
          name: DD.name
        },
        gD = zD.geometry;
      if (!gD) return sD.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), cD;
      const AD = LD ? -1 : 1,
        UD = pD.WI.Zero();
      let fD, ID;
      if (DD.hasPositions) {
        const KD = DD.getPositions(),
          LD = gD.getVerticesData(RD.f.PositionKind);
        if (LD) {
          const DD = new Float32Array(LD.length),
            zD = [1 / 0, 1 / 0, 1 / 0],
            sD = [-1 / 0, -1 / 0, -1 / 0];
          ID = LD.length / 3, fD = 0;
          for (let wD = fD; wD < ID; ++wD) {
            const rD = pD.WI.FromArray(LD, 3 * wD);
            pD.WI.FromArray(KD, 3 * wD).subtractToRef(rD, UD), UD.x *= AD, zD[0] = Math.min(zD[0], UD.x), sD[0] = Math.max(sD[0], UD.x), zD[1] = Math.min(zD[1], UD.y), sD[1] = Math.max(sD[1], UD.y), zD[2] = Math.min(zD[2], UD.z), sD[2] = Math.max(sD[2], UD.z), DD[3 * wD] = UD.x, DD[3 * wD + 1] = UD.y, DD[3 * wD + 2] = UD.z
          }
          const gD = wD.createBufferView(DD, 12),
            RD = wD.createAccessor(gD, "VEC3", 5126, KD.length / 3, 0, {
              min: zD,
              max: sD
            });
          rD.push(RD), cD.attributes.POSITION = rD.length - 1
        } else sD.Tools.Warn(`Morph target positions for mesh ${zD.name} were not exported. Mesh does not have position vertex data`)
      }
      if (DD.hasNormals) {
        const KD = DD.getNormals(),
          LD = gD.getVerticesData(RD.f.NormalKind);
        if (LD) {
          const DD = new Float32Array(LD.length);
          ID = LD.length / 3, fD = 0;
          for (let wD = fD; wD < ID; ++wD) {
            const zD = pD.WI.FromArray(LD, 3 * wD).normalize();
            pD.WI.FromArray(KD, 3 * wD).normalize().subtractToRef(zD, UD), DD[3 * wD] = UD.x * AD, DD[3 * wD + 1] = UD.y, DD[3 * wD + 2] = UD.z
          }
          const zD = wD.createBufferView(DD, 12),
            sD = wD.createAccessor(zD, "VEC3", 5126, KD.length / 3, 0);
          rD.push(sD), cD.attributes.NORMAL = rD.length - 1
        } else sD.Tools.Warn(`Morph target normals for mesh ${zD.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (DD.hasTangents) {
        const KD = DD.getTangents(),
          LD = gD.getVerticesData(RD.f.TangentKind);
        if (LD) {
          ID = LD.length / 4;
          const DD = new Float32Array(3 * ID);
          fD = 0;
          for (let wD = fD; wD < ID; ++wD) {
            const zD = pD.WI.FromArray(LD, 4 * wD);
            ow(zD);
            const sD = pD.WI.FromArray(KD, 3 * wD);
            ow(sD), sD.subtractToRef(zD, UD), DD[3 * wD] = UD.x * AD, DD[3 * wD + 1] = UD.y, DD[3 * wD + 2] = UD.z
          }
          const zD = wD.createBufferView(DD, 12),
            sD = wD.createAccessor(zD, "VEC3", 5126, ID, 0);
          rD.push(sD), cD.attributes.TANGENT = rD.length - 1
        } else sD.Tools.Warn(`Morph target tangents for mesh ${zD.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (DD.hasColors) {
        const KD = DD.getColors(),
          LD = gD.getVerticesData(RD.f.ColorKind),
          AD = gD.getVertexBuffer(RD.f.ColorKind);
        if (LD && AD) {
          const DD = AD.getSize();
          ID = LD.length / DD;
          const zD = new Float32Array(ID * DD);
          fD = 0;
          for (let wD = fD; wD < ID; ++wD)
            if (3 === DD) {
              const sD = pD.WI.FromArray(LD, wD * DD);
              pD.WI.FromArray(KD, wD * DD).subtractToRef(sD, UD), zD[3 * wD] = UD.x, zD[3 * wD + 1] = UD.y, zD[3 * wD + 2] = UD.z
            } else if (4 === DD) {
            const sD = new pD.Vector4,
              rD = pD.Vector4.FromArray(LD, wD * DD);
            pD.Vector4.FromArray(KD, wD * DD).subtractToRef(rD, sD), zD[4 * wD] = sD.x, zD[4 * wD + 1] = sD.y, zD[4 * wD + 2] = sD.z, zD[4 * wD + 3] = sD.w
          } else sD.Tools.Warn(`Unsupported number of components for color attribute: ${DD}`);
          const gD = wD.createBufferView(zD, 4 * DD),
            RD = wD.createAccessor(gD, 3 === DD ? "VEC3" : "VEC4", 5126, ID, 0);
          rD.push(RD), cD.attributes.COLOR_0 = rD.length - 1
        } else sD.Tools.Warn(`Morph target colors for mesh ${zD.name} were not exported. Mesh does not have colors vertex data`)
      }
      return cD
    }
    var Ip = wD(41475);
    class Bp {}
    Bp.DEFAULT_COLOR = aD.d.White(), Bp.DEFAULT_WIDTH_ATTENUATED = 1, Bp.DEFAULT_WIDTH = .1;
    var Gp = wD(41008);
    class hp {
      constructor(DD) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = DD
      }
      moveTo(DD, zD) {
        this._currentPath = new Gp.l(DD, zD), this._tempPaths.push(this._currentPath)
      }
      lineTo(DD, zD) {
        this._currentPath.addLineTo(DD, zD)
      }
      quadraticCurveTo(DD, zD, wD, pD) {
        this._currentPath.addQuadraticCurveTo(DD, zD, wD, pD, this._resolution)
      }
      bezierCurveTo(DD, zD, wD, pD, sD, KD) {
        this._currentPath.addBezierCurveTo(DD, zD, wD, pD, sD, KD, this._resolution)
      }
      extractHoles() {
        for (const DD of this._tempPaths) DD.area() > 0 ? this._holes.push(DD) : this._paths.push(DD);
        if (!this._paths.length && this._holes.length) {
          const DD = this._holes;
          this._holes = this._paths, this._paths = DD
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

    function np(DD, zD, wD, pD, sD, KD) {
      const rD = KD.glyphs[DD] || KD.glyphs["?"];
      if (!rD) return null;
      const LD = new hp(sD);
      if (rD.o) {
        const DD = rD.o.split(" ");
        for (let sD = 0, KD = DD.length; sD < KD;) {
          switch (DD[sD++]) {
            case "m": {
              const KD = parseInt(DD[sD++]) * zD + wD,
                rD = parseInt(DD[sD++]) * zD + pD;
              LD.moveTo(KD, rD);
              break
            }
            case "l": {
              const KD = parseInt(DD[sD++]) * zD + wD,
                rD = parseInt(DD[sD++]) * zD + pD;
              LD.lineTo(KD, rD);
              break
            }
            case "q": {
              const KD = parseInt(DD[sD++]) * zD + wD,
                rD = parseInt(DD[sD++]) * zD + pD,
                cD = parseInt(DD[sD++]) * zD + wD,
                gD = parseInt(DD[sD++]) * zD + pD;
              LD.quadraticCurveTo(cD, gD, KD, rD);
              break
            }
            case "b": {
              const KD = parseInt(DD[sD++]) * zD + wD,
                rD = parseInt(DD[sD++]) * zD + pD,
                cD = parseInt(DD[sD++]) * zD + wD,
                gD = parseInt(DD[sD++]) * zD + pD,
                RD = parseInt(DD[sD++]) * zD + wD,
                AD = parseInt(DD[sD++]) * zD + pD;
              LD.bezierCurveTo(cD, gD, RD, AD, KD, rD);
              break
            }
          }
        }
      }
      return LD.extractHoles(), {
        offsetX: rD.ha * zD,
        shapePath: LD
      }
    }

    function Mp(DD, zD, wD, pD) {
      const sD = Array.from(DD),
        KD = zD / pD.resolution,
        rD = (pD.boundingBox.yMax - pD.boundingBox.yMin + pD.underlineThickness) * KD,
        LD = [];
      let cD = 0,
        gD = 0;
      for (let RD = 0; RD < sD.length; RD++) {
        const DD = sD[RD];
        if ("\n" === DD) cD = 0, gD -= rD;
        else {
          const zD = np(DD, KD, cD, gD, wD, pD);
          zD && (cD += zD.offsetX, LD.push(zD.shapePath))
        }
      }
      return LD
    }
    class Op {
      static ConvertPoints(DD, zD) {
        if (DD.length && Array.isArray(DD) && "number" === typeof DD[0]) return [DD];
        if (DD.length && Array.isArray(DD[0]) && "number" === typeof DD[0][0]) return DD;
        if (DD.length && !Array.isArray(DD[0]) && DD[0] instanceof ND.s) {
          const zD = [];
          for (let wD = 0; wD < DD.length; wD++) {
            const pD = DD[wD];
            zD.push(pD.x, pD.y, pD.z)
          }
          return [zD]
        }
        if (DD.length > 0 && Array.isArray(DD[0]) && DD[0].length > 0 && DD[0][0] instanceof ND.s) {
          const zD = [],
            wD = DD;
          for (const DD of wD) zD.push(DD.flatMap((DD => [DD.x, DD.y, DD.z])));
          return zD
        }
        if (DD instanceof Float32Array) {
          if (zD?.floatArrayStride) {
            const wD = [],
              pD = 3 * zD.floatArrayStride;
            for (let zD = 0; zD < DD.length; zD += pD) {
              const sD = new Array(pD);
              for (let wD = 0; wD < pD; wD++) sD[wD] = DD[zD + wD];
              wD.push(sD)
            }
            return wD
          }
          return [Array.from(DD)]
        }
        if (DD.length && DD[0] instanceof Float32Array) {
          const zD = [];
          for (const wD of DD) zD.push(Array.from(wD));
          return zD
        }
        return []
      }
      static OmitZeroLengthPredicate(DD, zD, wD) {
        const pD = [];
        return zD.subtract(DD).lengthSquared() > 0 && pD.push([DD, zD]), wD.subtract(zD).lengthSquared() > 0 && pD.push([zD, wD]), DD.subtract(wD).lengthSquared() > 0 && pD.push([wD, DD]), 0 === pD.length ? null : pD
      }
      static OmitDuplicatesPredicate(DD, zD, wD, pD) {
        const sD = [];
        return Op._SearchInPoints(DD, zD, pD) || sD.push([DD, zD]), Op._SearchInPoints(zD, wD, pD) || sD.push([zD, wD]), Op._SearchInPoints(wD, DD, pD) || sD.push([wD, DD]), 0 === sD.length ? null : sD
      }
      static _SearchInPoints(DD, zD, wD) {
        for (const pD of wD)
          for (let wD = 0; wD < pD.length; wD++)
            if (pD[wD]?.equals(DD) && (pD[wD + 1]?.equals(zD) || pD[wD - 1]?.equals(zD))) return !0;
        return !1
      }
      static MeshesToLines(DD, zD) {
        const wD = [];
        for (let pD = 0; pD < DD.length; pD++) {
          const sD = DD[pD],
            KD = sD.getVerticesData(ZD.k.PositionKind),
            rD = sD.XpD();
          if (KD && rD)
            for (let DD = 0, LD = 0; DD < rD.length; DD++) {
              const cD = 3 * rD[LD++],
                gD = 3 * rD[LD++],
                RD = 3 * rD[LD++],
                AD = new ND.s(KD[cD], KD[cD + 1], KD[cD + 2]),
                UD = new ND.s(KD[gD], KD[gD + 1], KD[gD + 2]),
                fD = new ND.s(KD[RD], KD[RD + 1], KD[RD + 2]);
              if (zD) {
                const LD = zD(AD, UD, fD, wD, DD, cD, sD, pD, KD, rD);
                if (LD)
                  for (const DD of LD) wD.push(DD)
              } else wD.push([AD, UD], [UD, fD], [fD, AD])
            }
        }
        return wD
      }
      static ToVector3Array(DD) {
        if (Array.isArray(DD[0])) {
          const zD = [],
            wD = DD;
          for (const DD of wD) {
            const wD = [];
            for (let zD = 0; zD < DD.length; zD += 3) wD.push(new ND.s(DD[zD], DD[zD + 1], DD[zD + 2]));
            zD.push(wD)
          }
          return zD
        }
        const zD = DD,
          wD = [];
        for (let pD = 0; pD < zD.length; pD += 3) wD.push(new ND.s(zD[pD], zD[pD + 1], zD[pD + 2]));
        return wD
      }
      static ToNumberArray(DD) {
        return DD.flatMap((DD => [DD.x, DD.y, DD.z]))
      }
      static GetPointsCountInfo(DD) {
        const zD = new Array(DD.length);
        let wD = 0;
        for (let pD = DD.length; pD--;) zD[pD] = DD[pD].length / 3, wD += zD[pD];
        return {
          total: wD,
          counts: zD
        }
      }
      static GetLineLength(DD) {
        if (0 === DD.length) return 0;
        let zD;
        zD = "number" === typeof DD[0] ? Op.ToVector3Array(DD) : DD;
        const wD = ND.n.WI[0];
        let pD = 0;
        for (let sD = 0; sD < zD.length - 1; sD++) {
          const DD = zD[sD];
          pD += zD[sD + 1].subtractToRef(DD, wD).length()
        }
        return pD
      }
      static GetLineLengthArray(DD, zD) {
        const wD = zD ? new Float32Array(zD, 0, DD.length / 3) : new Float32Array(DD.length / 3);
        let pD = 0;
        for (let sD = 0, KD = DD.length / 3 - 1; sD < KD; sD++) {
          let zD = DD[3 * sD + 0],
            KD = DD[3 * sD + 1],
            rD = DD[3 * sD + 2];
          zD -= DD[3 * sD + 3], KD -= DD[3 * sD + 4], rD -= DD[3 * sD + 5];
          pD += Math.sqrt(zD * zD + KD * KD + rD * rD), wD[sD + 1] = pD
        }
        return wD
      }
      static SegmentizeSegmentByCount(DD, zD, wD) {
        const pD = [],
          sD = zD.subtract(DD),
          KD = ND.n.WI[0];
        KD.I9(wD);
        const rD = ND.n.WI[1];
        sD.divideToRef(KD, rD);
        let LD = DD.clone();
        pD.push(LD);
        for (let cD = 0; cD < wD; cD++) LD = LD.clone(), pD.push(LD.addInPlace(rD));
        return pD
      }
      static SegmentizeLineBySegmentLength(DD, zD) {
        const wD = DD[0] instanceof ND.s ? Op.GetLineSegments(DD) : "number" === typeof DD[0] ? Op.GetLineSegments(Op.ToVector3Array(DD)) : DD,
          pD = [];
        for (const sD of wD)
          if (sD.length > zD) {
            const DD = Op.SegmentizeSegmentByCount(sD.point1, sD.point2, Math.ceil(sD.length / zD));
            for (const zD of DD) pD.push(zD)
          } else pD.push(sD.point1), pD.push(sD.point2);
        return pD
      }
      static SegmentizeLineBySegmentCount(DD, zD) {
        const wD = "number" === typeof DD[0] ? Op.ToVector3Array(DD) : DD,
          pD = Op.GetLineLength(wD) / zD;
        return Op.SegmentizeLineBySegmentLength(wD, pD)
      }
      static GetLineSegments(DD) {
        const zD = [];
        for (let wD = 0; wD < DD.length - 1; wD++) {
          const pD = DD[wD],
            sD = DD[wD + 1],
            KD = sD.subtract(pD).length();
          zD.push({
            point1: pD,
            point2: sD,
            length: KD
          })
        }
        return zD
      }
      static GetMinMaxSegmentLength(DD) {
        const zD = Op.GetLineSegments(DD).sort((DD => DD.length));
        return {
          min: zD[0].length,
          max: zD[zD.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const sD = zD * wD;
        let KD = 0,
          rD = 0;
        const LD = DD.length;
        for (let gD = 0; gD < LD; gD++) {
          if (sD <= KD + DD[gD].length) {
            rD = gD;
            break
          }
          KD += DD[gD].length
        }
        const cD = (sD - KD) / DD[rD].length;
        return DD[rD].point2.subtractToRef(DD[rD].point1, ND.n.WI[0]), ND.n.WI[0].scaleToRef(cD, ND.n.WI[1]), pD || ND.n.WI[1].addInPlace(DD[rD].point1), ND.n.WI[1].clone()
      }
      static GetCircleLinePoints(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DD,
          sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / zD;
        const KD = [];
        for (let rD = 0; rD <= zD; rD++) KD.push(new ND.s(Math.cos(rD * sD) * DD, Math.sin(rD * sD) * pD, wD));
        return KD
      }
      static GetBezierLinePoints(DD, zD, wD, pD) {
        return Gp.h.CreateQuadraticBezier(DD, zD, wD, pD).getPoints().flatMap((DD => [DD.x, DD.y, DD.z]))
      }
      static GetArrowCap(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [DD.clone(), DD.add(zD.multiplyByFloats(wD, wD, wD))],
          widths: [pD, sD, KD, rD]
        }
      }
      static GetPointsFromText(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          KD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const rD = [],
          LD = Mp(DD, zD, wD, pD);
        for (const cD of LD) {
          for (const DD of cD.paths) {
            const zD = [],
              wD = DD.getPoints();
            for (const DD of wD) zD.push(DD.x, DD.y, sD);
            rD.push(zD)
          }
          if (KD)
            for (const DD of cD.holes) {
              const zD = [],
                wD = DD.getPoints();
              for (const DD of wD) zD.push(DD.x, DD.y, sD);
              rD.push(zD)
            }
        }
        return rD
      }
      static Color3toRGBAUint8(DD) {
        const zD = new Uint8Array(4 * DD.length);
        for (let wD = 0, pD = 0; wD < DD.length; wD++) zD[pD++] = 255 * DD[wD].r, zD[pD++] = 255 * DD[wD].g, zD[pD++] = 255 * DD[wD].b, zD[pD++] = 255;
        return zD
      }
      static CreateColorsTexture(DD, zD, wD, pD) {
        const sD = pD.iI().getCaps().maxTextureSize ?? 1,
          KD = zD.length > sD ? sD : zD.length,
          rD = Math.ceil(zD.length / sD);
        rD > 1 && (zD = [...zD, ...Array(KD * rD - zD.length).fill(zD[0])]);
        const LD = Op.Color3toRGBAUint8(zD),
          cD = new ED.d(LD, KD, rD, Aw.e.TEXTUREFORMAT_RGBA, pD, !1, !0, wD);
        return cD.name = DD, cD
      }
      static PrepareEmptyColorsTexture(DD) {
        if (!Bp.EmptyColorsTexture) {
          const zD = new Uint8Array(4);
          Bp.EmptyColorsTexture = new ED.d(zD, 1, 1, Aw.e.TEXTUREFORMAT_RGBA, DD, !1, !1, ED.d.NEAREST_NEAREST), Bp.EmptyColorsTexture.name = "grlEmptyColorsTexture", Bp.EmptyColorsTexture.Bl.addOnce((() => {
            Bp.EmptyColorsTexture = null
          }))
        }
        return Bp.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        Bp.EmptyColorsTexture?.dispose(), Bp.EmptyColorsTexture = null
      }
      static BooleanToNumber(DD) {
        return DD ? 1 : 0
      }
    }
    class Jp extends yD.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class Ep extends kD.c {
      isCompatible(DD) {
        return !0
      }
      constructor(DD, zD, wD) {
        wD = wD || {
          color: Bp.DEFAULT_COLOR
        };
        const pD = new Jp;
        pD.GREASED_LINE_HAS_COLOR = !!wD.color && !wD.useColors, pD.GREASED_LINE_SIZE_ATTENUATION = wD.sizeAttenuation ?? !1, pD.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === wD.colorDistributionType, pD.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (zD ?? DD.Ul()).useRightHandedSystem, pD.GREASED_LINE_CAMERA_FACING = wD.cameraFacing ?? !0, super(DD, Ep.GREASED_LINE_MATERIAL_NAME, 200, pD, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = wD?.forceGLSL || Ep.ForceGLSL, this._scene = zD ?? DD.Ul(), this._engine = this._scene.iI(), this._cameraFacing = wD.cameraFacing ?? !0, this.visibility = wD.visibility ?? 1, this.useDash = wD.useDash ?? !1, this.dashRatio = wD.dashRatio ?? .5, this.dashOffset = wD.dashOffset ?? 0, this.width = wD.width ? wD.width : wD.sizeAttenuation ? Bp.DEFAULT_WIDTH_ATTENUATED : Bp.DEFAULT_WIDTH, this._sizeAttenuation = wD.sizeAttenuation ?? !1, this.colorMode = wD.colorMode ?? 0, this._color = wD.color ?? null, this.useColors = wD.useColors ?? !1, this._colorsDistributionType = wD.colorDistributionType ?? 0, this.colorsSampling = wD.colorsSampling ?? ED.d.NEAREST_NEAREST, this._colors = wD.colors ?? null, this.dashCount = wD.dashCount ?? 1, this.resolution = wD.resolution ?? new ND.r(this._engine.getRenderWidth(), this._engine.getRenderHeight()), wD.colorsTexture ? this.colorsTexture = wD.colorsTexture : this._colors ? this.colorsTexture = Op.CreateColorsTexture(`${DD.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? Bp.DEFAULT_COLOR, Op.PrepareEmptyColorsTexture(this._scene)), this._engine.Bl.add((() => {
          Op.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(DD) {
        DD.push("grl_offsets"), DD.push("grl_widths"), DD.push("grl_colorPointers"), DD.push("grl_counters"), this._cameraFacing ? (DD.push("grl_previousAndSide"), DD.push("grl_nextAndCounters")) : DD.push("grl_slopes")
      }
      getSamplers(DD) {
        DD.push("grl_colors")
      }
      getActiveTextures(DD) {
        this.colorsTexture && DD.push(this.colorsTexture)
      }
      getUniforms() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const zD = [{
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
        return this._cameraFacing && zD.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === DD && zD.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: zD,
          vertex: this._cameraFacing && this._isGLSL(DD) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(DD) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(DD) {
        if (this._cameraFacing) {
          DD.i5("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || DD.i5("viewProjection", this._scene.getTransformMatrix());
          const zD = ND.n.Vector4[0];
          zD.x = this._aspect, zD.y = this._resolution.x, zD.z = this._resolution.y, zD.w = this.width, DD.updateVector4("grl_aspect_resolution_lineWidth", zD)
        }
        const zD = ND.n.Vector4[0];
        zD.x = Op.BooleanToNumber(this.useDash), zD.y = this._dashArray, zD.z = this.dashOffset, zD.w = this.dashRatio, DD.updateVector4("grl_dashOptions", zD);
        const wD = ND.n.Vector4[1];
        wD.x = this.colorMode, wD.y = this.visibility, wD.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, wD.w = Op.BooleanToNumber(this.useColors), DD.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", wD), this._color && DD.updateColor3("grl_singleColor", this._color);
        const pD = this.colorsTexture ?? Bp.EmptyColorsTexture;
        DD.setTexture("grl_colors", pD), DD.updateFloat2("grl_textureSize", pD?.getSize().width ?? 1, pD?.getSize().height ?? 1)
      }
      prepareDefines(DD, zD, wD) {
        DD.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, DD.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, DD.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, DD.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = zD.useRightHandedSystem, DD.GREASED_LINE_CAMERA_FACING = this._cameraFacing, DD.GREASED_LINE_USE_OFFSETS = !!wD.offsets
      }
      getClassName() {
        return Ep.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(zD) ? function(DD, zD) {
          if ("vertex" === DD) {
            const DD = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return zD && (DD["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), DD
          }
          return "fragment" === DD ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(DD, this._cameraFacing) : function(DD, zD) {
          if ("vertex" === DD) {
            const DD = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return zD && (DD["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), DD
          }
          return "fragment" === DD ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(DD, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(DD) {
        this.setColors(DD)
      }
      setColors(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pD = this._colors?.length ?? 0;
        if (this._colors = DD, null !== DD && 0 !== DD.length) {
          if (!zD || wD)
            if (this.colorsTexture && pD === DD.length && !wD) {
              const zD = Op.Color3toRGBAUint8(DD);
              this.colorsTexture.update(zD)
            } else this.colorsTexture?.dispose(), this.colorsTexture = Op.CreateColorsTexture(`${this._material.name}-colors-texture`, DD, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(DD) {
        this._dashCount = DD, this._dashArray = 1 / DD
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(DD) {
        this._sizeAttenuation = DD, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(DD) {
        this.setColor(DD)
      }
      setColor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== DD || null !== this._color && null === DD ? (this._color = DD, zD || this.markAllDefinesAsDirty()) : this._color = DD
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(DD) {
        this._colorsDistributionType = DD, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(DD) {
        this._aspect = DD.x / DD.y, this._resolution = DD
      }
      serialize() {
        const DD = super.serialize(),
          zD = {
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
        return this._colors && (zD.colors = this._colors), this._color && (zD.color = this._color), DD.greasedLineMaterialOptions = zD, DD
      }
      parse(DD, zD, wD) {
        super.parse(DD, zD, wD);
        const pD = DD.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), pD.color && this.setColor(pD.color, !0), pD.colorDistributionType && (this.colorsDistributionType = pD.colorDistributionType), pD.colors && (this.colors = pD.colors), pD.colorsSampling && (this.colorsSampling = pD.colorsSampling), pD.colorMode && (this.colorMode = pD.colorMode), pD.useColors && (this.useColors = pD.useColors), pD.visibility && (this.visibility = pD.visibility), pD.useDash && (this.useDash = pD.useDash), pD.dashCount && (this.dashCount = pD.dashCount), pD.dashRatio && (this.dashRatio = pD.dashRatio), pD.dashOffset && (this.dashOffset = pD.dashOffset), pD.width && (this.width = pD.width), pD.sizeAttenuation && (this.sizeAttenuation = pD.sizeAttenuation), pD.resolution && (this.resolution = pD.resolution), this.colors ? this.colorsTexture = Op.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, zD) : Op.PrepareEmptyColorsTexture(zD), this.markAllDefinesAsDirty()
      }
      copyTo(DD) {
        const zD = DD;
        zD.colorsTexture?.dispose(), this._colors && (zD.colorsTexture = Op.CreateColorsTexture(`${zD._material.name}-colors-texture`, this._colors, zD.colorsSampling, this._scene)), zD.setColor(this.color, !0), zD.colorsDistributionType = this.colorsDistributionType, zD.colorsSampling = this.colorsSampling, zD.colorMode = this.colorMode, zD.useColors = this.useColors, zD.visibility = this.visibility, zD.useDash = this.useDash, zD.dashCount = this.dashCount, zD.dashRatio = this.dashRatio, zD.dashOffset = this.dashOffset, zD.width = this.width, zD.sizeAttenuation = this.sizeAttenuation, zD.resolution = this.resolution, zD.markAllDefinesAsDirty()
      }
      _isGLSL(DD) {
        return 0 === DD || this._forceGLSL
      }
    }
    Ep.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", Ep.ForceGLSL = !1;
    var Qp = wD(40335),
      Xp = wD(40348),
      Vp = wD(38658),
      Pp = wD(40397),
      Cp = wD(39763);
    class xp extends Pp.m {
      constructor(DD, zD, pD) {
        const sD = zD.iI(),
          KD = sD.isWebGPU && !(pD.forceGLSL || xp.ForceGLSL),
          rD = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        zD.useRightHandedSystem && rD.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const LD = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        pD.cameraFacing ? (rD.push("GREASED_LINE_CAMERA_FACING"), LD.push("grl_previousAndSide", "grl_nextAndCounters")) : (LD.push("grl_slopes"), LD.push("grl_counters"));
        const cD = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (KD || cD.push("world", "viewProjection", "view", "projection"), super(DD, zD, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: KD ? ["Scene", "Mesh"] : void 0,
            attributes: LD,
            uniforms: cD,
            samplers: KD ? [] : ["grlColors"],
            defines: rD,
            extraInitializationsAsync: async () => {
              KD ? await Promise.all([wD.e(334).then((() => wD(61624))), wD.e(391).then((() => wD(61626)))]) : await Promise.all([wD.e(327).then((() => wD(61631))), wD.e(392).then((() => wD(61636)))])
            },
            shaderLanguage: KD ? 1 : 0
          }), this._color = aD.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, pD = pD || {
            color: Bp.DEFAULT_COLOR
          }, this.visibility = pD.visibility ?? 1, this.useDash = pD.useDash ?? !1, this.dashRatio = pD.dashRatio ?? .5, this.dashOffset = pD.dashOffset ?? 0, this.dashCount = pD.dashCount ?? 1, this.width = pD.width ? pD.width : pD.sizeAttenuation && pD.cameraFacing ? Bp.DEFAULT_WIDTH_ATTENUATED : Bp.DEFAULT_WIDTH, this.sizeAttenuation = pD.sizeAttenuation ?? !1, this.color = pD.color ?? aD.d.White(), this.useColors = pD.useColors ?? !1, this.colorsDistributionType = pD.colorDistributionType ?? 0, this.colorsSampling = pD.colorsSampling ?? ED.d.NEAREST_NEAREST, this.colorMode = pD.colorMode ?? 0, this._colors = pD.colors ?? null, this._cameraFacing = pD.cameraFacing ?? !0, this.resolution = pD.resolution ?? new ND.r(sD.getRenderWidth(), sD.getRenderHeight()), pD.colorsTexture ? this.colorsTexture = pD.colorsTexture : this._colors ? this.colorsTexture = Op.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, zD) : (this._color = this._color ?? Bp.DEFAULT_COLOR, this.colorsTexture = Op.PrepareEmptyColorsTexture(zD)), KD) {
          const DD = new Cp.b;
          DD.setParameters(), DD.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", DD)
        }
        sD.Bl.add((() => {
          Op.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== Bp.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new ND.r(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(DD) {
        this.setColors(DD)
      }
      setColors(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pD = this._colors?.length ?? 0;
        if (this._colors = DD, null !== DD && 0 !== DD.length) {
          if (!zD || wD)
            if (this._colorsTexture && pD === DD.length && !wD) {
              const zD = Op.Color3toRGBAUint8(DD);
              this._colorsTexture.update(zD)
            } else this._colorsTexture && this._colorsTexture !== Bp.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = Op.CreateColorsTexture(`${this.name}-colors-texture`, DD, this.colorsSampling, this.Ul())
        } else {
          this._colorsTexture && this._colorsTexture !== Bp.EmptyColorsTexture && this._colorsTexture.dispose();
          const DD = this.Ul();
          DD && (this.colorsTexture = Op.PrepareEmptyColorsTexture(DD))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(DD) {
        this._colorsTexture = DD, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(DD) {
        this._width = DD, this.setFloat("grlWidth", DD)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(DD) {
        this._useColors = DD, this.setFloat("grlUseColors", Op.BooleanToNumber(DD))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(DD) {
        this._colorsSampling = DD
      }
      get visibility() {
        return this._visibility
      }
      set visibility(DD) {
        this._visibility = DD, this.setFloat("grlVisibility", DD)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(DD) {
        this._useDash = DD, this.setFloat("grlUseDash", Op.BooleanToNumber(DD))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(DD) {
        this._dashOffset = DD, this.setFloat("grlDashOffset", DD)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(DD) {
        this._dashRatio = DD, this.setFloat("grlDashRatio", DD)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(DD) {
        this._dashCount = DD, this._dashArray = 1 / DD, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(DD) {
        this._sizeAttenuation = DD, this.setFloat("grlSizeAttenuation", Op.BooleanToNumber(DD))
      }
      get color() {
        return this._color
      }
      set color(DD) {
        this.setColor(DD)
      }
      setColor(DD) {
        DD = DD ?? Bp.DEFAULT_COLOR, this._color = DD, this.setColor3("grlColor", DD)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(DD) {
        this._colorsDistributionType = DD, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(DD) {
        this._colorMode = DD, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(DD) {
        this._resolution = DD, this.setVector2("grlResolution", DD), this.setFloat("grlAspect", DD.x / DD.y)
      }
      serialize() {
        const DD = super.serialize(),
          zD = {
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
        return this._colors && (zD.colors = this._colors), DD.greasedLineMaterialOptions = zD, DD
      }
      parse(DD, zD, wD) {
        const pD = DD.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), pD.color && (this.color = pD.color), pD.colorDistributionType && (this.colorsDistributionType = pD.colorDistributionType), pD.colorsSampling && (this.colorsSampling = pD.colorsSampling), pD.colorMode && (this.colorMode = pD.colorMode), pD.useColors && (this.useColors = pD.useColors), pD.visibility && (this.visibility = pD.visibility), pD.useDash && (this.useDash = pD.useDash), pD.dashCount && (this.dashCount = pD.dashCount), pD.dashRatio && (this.dashRatio = pD.dashRatio), pD.dashOffset && (this.dashOffset = pD.dashOffset), pD.width && (this.width = pD.width), pD.sizeAttenuation && (this.sizeAttenuation = pD.sizeAttenuation), pD.resolution && (this.resolution = pD.resolution), pD.colors ? this.colorsTexture = Op.CreateColorsTexture(`${this.name}-colors-texture`, pD.colors, this.colorsSampling, this.Ul()) : this.colorsTexture = Op.PrepareEmptyColorsTexture(zD), this._cameraFacing = pD.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var Tp, bp, jp;
    xp.ForceGLSL = !1,
      function(DD) {
        DD[DD.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", DD[DD.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(Tp || (Tp = {})),
      function(DD) {
        DD[DD.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", DD[DD.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", DD[DD.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(bp || (bp = {})),
      function(DD) {
        DD[DD.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", DD[DD.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", DD[DD.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", DD[DD.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", DD[DD.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(jp || (jp = {}));
    class dp extends Qp.e {
      constructor(DD, zD, wD) {
        super(DD, zD, null, null, !1, !1), this.name = DD, this._options = wD, this._lazy = !1, this._updatable = !1, this._engine = zD.iI(), this._lazy = wD.lazy ?? !1, this._updatable = wD.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = wD.colorPointers ?? [], this._widths = wD.widths ?? new Array(wD.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(DD) {
        let zD = 0;
        for (const pD of this._points) zD += pD.length;
        const wD = zD / 3 * 2 - this._widths.length;
        for (let pD = 0; pD < wD; pD++) this._widths.push(DD)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.ZI && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(DD, zD) {
        for (const wD of DD) this._points.push(wD);
        this._lazy || this.setPoints(this._points, zD)
      }
      dispose(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(DD, zD)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(DD) {
        this._uvs = DD instanceof Float32Array ? DD : new Float32Array(DD), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(DD) {
        this.material instanceof xp && this.material.setDefine("GREASED_LINE_USE_OFFSETS", DD?.length > 0), this._offsets = DD, this._offsetsBuffer ? this._offsetsBuffer.update(DD) : this._createOffsetsBuffer(DD)
      }
      get widths() {
        return this._widths
      }
      set widths(DD) {
        this._widths = DD, this._lazy || this._widthsBuffer && this._widthsBuffer.update(DD)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(DD) {
        this._colorPointers = DD, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(DD)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof xp) return this.material;
        const DD = this.material?.pluginManager?.getPlugin(Ep.GREASED_LINE_MATERIAL_NAME);
        return DD || void 0
      }
      get points() {
        const DD = [];
        return Vp.e.DeepCopy(this._points, DD), DD
      }
      setPoints(DD, zD) {
        this._points = Op.ConvertPoints(DD, zD?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), zD?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, zD)
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
      serialize(DD) {
        super.serialize(DD), DD.type = this.getClassName(), DD.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zD = new Xp.b;
        return zD.positions = this._vertexPositions, zD.indices = this._indices, zD.uvs = this._uvs, DD && (zD.normals = [], Xp.b.ComputeNormals(this._vertexPositions, this._indices, zD.normals)), zD.applyToMesh(this, this._options.updatable), zD
      }
      _createOffsetsBuffer(DD) {
        const zD = this._scene.iI(),
          wD = new ZD.b(zD, DD, this._updatable, 3);
        this.setVerticesBuffer(wD.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = wD
      }
    }
    class Sp {
      constructor(DD, zD) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = DD, this.wasAddedByNoopNode = zD
      }
      getIndicesAccessor(DD, zD, wD, pD, sD) {
        return this._indicesAccessorMap.get(DD)?.get(zD)?.get(wD)?.get(pD)?.get(sD)
      }
      setIndicesAccessor(DD, zD, wD, pD, sD, KD) {
        let rD = this._indicesAccessorMap.get(DD);
        rD || (rD = new Map, this._indicesAccessorMap.set(DD, rD));
        let LD = rD.get(zD);
        LD || (LD = new Map, rD.set(zD, LD));
        let cD = LD.get(wD);
        cD || (cD = new Map, LD.set(wD, cD));
        let gD = cD.get(pD);
        gD || (gD = new Map, cD.set(pD, gD)), gD.set(sD, KD)
      }
      pushExportedNode(DD) {
        this._exportedNodes.has(DD) || this._exportedNodes.add(DD)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(DD) {
        return this._vertexBufferViewMap.get(DD)
      }
      setVertexBufferView(DD, zD) {
        this._vertexBufferViewMap.set(DD, zD)
      }
      setRemappedBufferView(DD, zD, wD) {
        this._remappedBufferView.set(DD, new Map), this._remappedBufferView.get(DD).set(zD, wD)
      }
      getRemappedBufferView(DD, zD) {
        return this._remappedBufferView.get(DD)?.get(zD)
      }
      getVertexAccessor(DD, zD, wD) {
        return this._vertexAccessorMap.get(DD)?.get(zD)?.get(wD)
      }
      setVertexAccessor(DD, zD, wD, pD) {
        let sD = this._vertexAccessorMap.get(DD);
        sD || (sD = new Map, this._vertexAccessorMap.set(DD, sD));
        let KD = sD.get(zD);
        KD || (KD = new Map, sD.set(zD, KD)), KD.set(wD, pD)
      }
      hasVertexColorAlpha(DD) {
        return this._vertexMapColorAlpha.get(DD) || !1
      }
      setHasVertexColorAlpha(DD, zD) {
        return this._vertexMapColorAlpha.set(DD, zD)
      }
      getMesh(DD) {
        return this._meshMap.get(DD)
      }
      setMesh(DD, zD) {
        this._meshMap.set(DD, zD)
      }
      bindMorphDataToMesh(DD, zD) {
        const wD = this._meshMorphTargetMap.get(DD) || [];
        this._meshMorphTargetMap.set(DD, wD), -1 === wD.indexOf(zD) && wD.push(zD)
      }
      getMorphTargetsFromMesh(DD) {
        return this._meshMorphTargetMap.get(DD)
      }
    }
    class ip {
      _ApplyExtension(DD, zD, wD, pD) {
        if (wD >= zD.length) return Promise.resolve(DD);
        const sD = pD(zD[wD], DD);
        return sD ? sD.then((async DD => DD ? await this._ApplyExtension(DD, zD, wD + 1, pD) : null)) : this._ApplyExtension(DD, zD, wD + 1, pD)
      }
      _ApplyExtensions(DD, zD) {
        const wD = [];
        for (const pD of ip._ExtensionNames) wD.push(this._extensions[pD]);
        return this._ApplyExtension(DD, wD, 0, zD)
      }
      _extensionsPostExportNodeAsync(DD, zD, wD, pD, sD) {
        return this._ApplyExtensions(zD, ((zD, KD) => zD.postExportNodeAsync && zD.postExportNodeAsync(DD, KD, wD, pD, sD, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(DD, zD, wD) {
        return this._ApplyExtensions(zD, ((zD, pD) => zD.postExportMaterialAsync && zD.postExportMaterialAsync(DD, pD, wD)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        const pD = [];
        return await Promise.all(ip._ExtensionNames.map((async sD => {
          const KD = this._extensions[sD];
          if (KD.postExportMaterialAdditionalTexturesAsync) {
            const sD = await KD.postExportMaterialAdditionalTexturesAsync(DD, zD, wD);
            pD.push(...sD)
          }
        }))), pD
      }
      _extensionsPostExportTextures(DD, zD, wD) {
        for (const pD of ip._ExtensionNames) {
          const sD = this._extensions[pD];
          sD.postExportTexture && sD.postExportTexture(DD, zD, wD)
        }
      }
      _extensionsPostExportMeshPrimitive(DD) {
        for (const zD of ip._ExtensionNames) {
          const wD = this._extensions[zD];
          wD.postExportMeshPrimitive && wD.postExportMeshPrimitive(DD, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const DD of ip._ExtensionNames) {
          const zD = this._extensions[DD];
          zD.preGenerateBinaryAsync && await zD.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(DD) {
        for (const zD of ip._ExtensionNames) {
          const wD = this._extensions[zD];
          wD.enabled && DD(wD)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((DD => {
          var zD, wD, pD;
          DD.wasUsed && ((zD = this._glTF).extensionsUsed || (zD.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(DD.name) && this._glTF.extensionsUsed.push(DD.name), DD.required && ((wD = this._glTF).extensionsRequired || (wD.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(DD.name) && this._glTF.extensionsRequired.push(DD.name)), (pD = this._glTF).extensions || (pD.extensions = {}), DD.onExporting && DD.onExporting())
        }))
      }
      _loadExtensions() {
        for (const DD of ip._ExtensionNames) {
          const zD = ip._ExtensionFactories[DD](this);
          this._extensions[DD] = zD
        }
      }
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD.d.LastCreatedScene,
          zD = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${ID.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new bw(this), this._extensions = {}, this._bufferManager = new pp, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !DD) throw new Error("No scene available to export");
        this._babylonScene = DD, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: DD => DD?.kS?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...zD
        }, this._loadExtensions()
      }
      dispose() {
        for (const DD in this._extensions) {
          this._extensions[DD].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        ip.UnregisterExtension(DD) && sD.Tools.Warn(`Extension with the name ${DD} already exists`), ip._ExtensionFactories[DD] = zD;
        const pD = wD ?? 0;
        ip._ExtensionOrders[DD] = pD;
        let KD = ip._ExtensionNames.length;
        for (let sD = 0; sD < ip._ExtensionNames.length; sD++) {
          const DD = ip._ExtensionNames[sD];
          if (pD < ip._ExtensionOrders[DD]) {
            KD = sD;
            break
          }
        }
        ip._ExtensionNames.splice(KD, 0, DD)
      }
      static UnregisterExtension(DD) {
        if (!ip._ExtensionFactories[DD]) return !1;
        delete ip._ExtensionFactories[DD], delete ip._ExtensionOrders[DD];
        const zD = ip._ExtensionNames.indexOf(DD);
        return -1 !== zD && ip._ExtensionNames.splice(zD, 1), !0
      }
      _generateJSON(DD, zD, wD) {
        const pD = {
          byteLength: DD
        };
        return pD.byteLength && (this._glTF.buffers = [pD]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.oB = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (pD.uri = zD + ".bin"), wD ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(DD) {
        const zD = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const wD = this._generateJSON(zD.byteLength, DD, !0),
          pD = new Blob([zD], {
            type: "application/octet-stream"
          }),
          sD = DD + ".gltf",
          KD = DD + ".bin",
          rD = new gD;
        if (rD.files[sD] = wD, rD.files[KD] = pD, this._imageData)
          for (const LD in this._imageData) rD.files[LD] = this._imageData[LD];
        return rD
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(DD) {
        const zD = DD % 4;
        return 0 === zD ? zD : 4 - zD
      }
      async generateGLBAsync(DD) {
        this._shouldUseGlb = !0;
        const zD = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const wD = this._generateJSON(zD.byteLength),
          pD = DD + ".glb";
        let sD, KD = wD.length;
        if ("undefined" !== typeof TextEncoder) {
          sD = (new TextEncoder).encode(wD), KD = sD.length
        }
        const rD = this._getPadding(KD),
          LD = this._getPadding(zD.byteLength),
          cD = 28 + KD + rD + zD.byteLength + LD,
          RD = new zp(cD);
        if (RD.writeUInt32(1179937895), RD.writeUInt32(2), RD.writeUInt32(cD), RD.writeUInt32(KD + rD), RD.writeUInt32(1313821514), sD) RD.writeTypedArray(sD);
        else {
          const DD = "_".charCodeAt(0);
          for (let zD = 0; zD < KD; ++zD) {
            const pD = wD.charCodeAt(zD);
            pD != wD.codePointAt(zD) ? RD.writeUInt8(DD) : RD.writeUInt8(pD)
          }
        }
        for (let gD = 0; gD < rD; ++gD) RD.writeUInt8(32);
        RD.writeUInt32(zD.byteLength + LD), RD.writeUInt32(5130562), RD.writeTypedArray(zD);
        for (let gD = 0; gD < LD; ++gD) RD.writeUInt8(0);
        const AD = new gD;
        return AD.files[pD] = new Blob([RD.getOutputData()], {
          type: "application/octet-stream"
        }), AD
      }
      _setNodeTransformation(DD, zD, wD) {
        if (zD.getPivotPoint().equalsWithEpsilon(Ww, Sw.b) || sD.Tools.Warn("Pivot points are not supported in the glTF serializer"), !zD.position.equalsWithEpsilon(Ww, Sw.b)) {
          const sD = pD.TmpVectors.WI[0].pC(zD.position);
          wD && aw(sD), DD.translation = sD.QpD()
        }
        zD.rc.equalsWithEpsilon(Zw, Sw.b) || (DD.scale = zD.rc.QpD());
        const KD = zD.rotationQuaternion?.clone() || pD.Quaternion.FromEulerAngles(zD.rotation.x, zD.rotation.y, zD.rotation.z);
        KD.equalsWithEpsilon(Nw, Sw.b) || (wD && uw(KD), DD.rotation = KD.normalize().QpD())
      }
      _setCameraTransformation(DD, zD, wD) {
        const sD = pD.TmpVectors.WI[0],
          KD = pD.TmpVectors.Quaternion[0],
          rD = zD.getWorldMatrix();
        if (zD.parent) {
          const DD = zD.parent.getWorldMatrix().invertToRef(pD.TmpVectors.Matrix[0]);
          rD.multiplyToRef(DD, pD.TmpVectors.Matrix[1]).decompose(void 0, KD, sD)
        } else rD.decompose(void 0, KD, sD);
        sD.equalsWithEpsilon(Ww, Sw.b) || (wD && aw(sD), DD.translation = sD.QpD()), wD && uw(KD), this._babylonScene.useRightHandedSystem || vw(KD), KD.equalsWithEpsilon(Nw, Sw.b) || (DD.rotation = KD.QpD())
      }
      _listAvailableCameras() {
        for (const DD of this._babylonScene.cameras) {
          const zD = {
            type: DD.mode === sp.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (DD.name && (zD.name = DD.name), "perspective" === zD.type) zD.perspective = {
            aspectRatio: DD.iI().getAspectRatio(DD),
            yfov: DD.fovMode === sp.c.FOVMODE_VERTICAL_FIXED ? DD.fov : DD.fov * DD.iI().getAspectRatio(DD),
            znear: DD.minZ,
            zfar: DD.maxZ
          };
          else if ("orthographic" === zD.type) {
            const wD = DD.orthoLeft && DD.orthoRight ? .5 * (DD.orthoRight - DD.orthoLeft) : .5 * DD.iI().getRenderWidth(),
              pD = DD.orthoBottom && DD.orthoTop ? .5 * (DD.orthoTop - DD.orthoBottom) : .5 * DD.iI().getRenderHeight();
            zD.orthographic = {
              xmag: wD,
              ymag: pD,
              znear: DD.minZ,
              zfar: DD.maxZ
            }
          }
          this._camerasMap.set(DD, zD)
        }
      }
      _exportAndAssignCameras() {
        const DD = Array.from(this._camerasMap.values());
        for (const zD of DD) {
          const DD = this._nodesCameraMap.get(zD);
          if (void 0 !== DD) {
            this._cameras.push(zD);
            for (const zD of DD) zD.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const DD of this._babylonScene.skeletons) {
          if (DD.bones.length <= 0) continue;
          const zD = {
            joints: []
          };
          this._skinMap.set(DD, zD)
        }
      }
      _exportAndAssignSkeletons(DD) {
        for (const wD of this._babylonScene.skeletons) {
          if (wD.bones.length <= 0) continue;
          const KD = this._skinMap.get(wD);
          if (void 0 == KD) continue;
          const rD = {};
          let LD = -1;
          for (let DD = 0; DD < wD.bones.length; ++DD) {
            const zD = wD.bones[DD],
              pD = zD.getIndex() ?? DD; - 1 !== pD && (rD[pD] = zD, pD > LD && (LD = pD))
          }
          const cD = [];
          for (let wD = 0; wD <= LD; ++wD) {
            const LD = rD[wD],
              gD = LD.getTransformNode(),
              RD = gD ? this._nodeMap.get(gD) : void 0;
            if (void 0 === RD) {
              sD.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            KD.joints.push(RD);
            const AD = LD.getAbsoluteInverseBindMatrix().clone();
            DD.has(gD) && (zD = AD, iw.invertToRef(pD.TmpVectors.Matrix[0]).multiplyToRef(zD, zD).multiplyToRef(iw, zD)), cD.push(AD)
          }
          const gD = this._nodesSkinMap.get(KD);
          if (KD.joints.length > 0 && void 0 !== gD) {
            const DD = new Float32Array(16 * cD.length);
            cD.forEach(((zD, wD) => {
              DD.set(zD.m, 16 * wD)
            }));
            const zD = this._bufferManager.createBufferView(DD);
            this._accessors.push(this._bufferManager.createAccessor(zD, "MAT4", 5126, cD.length)), KD.inverseBindMatrices = this._accessors.length - 1, this._skins.push(KD);
            const wD = this._skins.length - 1;
            for (const pD of gD) pD.skin = wD
          }
        }
        var zD
      }
      async _exportSceneAsync() {
        const DD = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const zD = this._options.metadataSelector(this._babylonScene.metadata);
          zD && (DD.extras = zD)
        }
        const zD = new Array,
          wD = new Array,
          pD = new Array,
          sD = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let KD;
        if (sD && !this._options.includeCoordinateSystemConversionNodes)
          for (const gD of this._babylonScene.animationGroups)
            for (const DD of gD.targetedAnimations) {
              const zD = DD.target;
              zD instanceof AD.e && !zD.parent && (KD ?? (KD = new Set)).add(zD)
            }
        for (const gD of this._babylonScene.rootNodes) {
          const DD = gD.animations,
            rD = !!DD && DD.length > 0 || KD?.has(gD);
          sD && !this._options.includeCoordinateSystemConversionNodes && lw(gD, this._babylonScene.useRightHandedSystem) && !rD ? pD.push(...gD.getChildren()) : this._babylonScene.useRightHandedSystem ? zD.push(gD) : wD.push(gD)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const rD = new Sp(!0, !1);
        DD.nodes.push(...await this._exportNodesAsync(wD, rD));
        const LD = new Sp(!1, !1);
        DD.nodes.push(...await this._exportNodesAsync(zD, LD));
        const cD = new Sp(!1, !0);
        DD.nodes.push(...await this._exportNodesAsync(pD, cD)), DD.nodes.length && this._scenes.push(DD), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(rD.getNodesSet()), this._babylonScene.animationGroups.length && Up._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, rD.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(DD) {
        return this._nodeMap.get(DD)
      }
      _getAnimationIndex(DD) {
        return this._animationGroupMap.get(DD)
      }
      _getCameraIndex(DD) {
        const zD = this._camerasMap.get(DD);
        if (!zD) return;
        const wD = this._cameras.indexOf(zD);
        return wD >= 0 ? wD : void 0
      }
      _getMaterialIndex(DD) {
        return this._materialMap.get(DD)
      }
      _getRootIndex(DD, zD) {
        switch (DD) {
          case "nodes":
            return this._getNodeIndex(zD);
          case "animations":
            return this._getAnimationIndex(zD);
          case "cameras":
            return this._getCameraIndex(zD);
          case "materials":
            return this._getMaterialIndex(zD);
          case "meshes": {
            const DD = this._getNodeIndex(zD);
            return void 0 === DD ? void 0 : this._nodes[DD]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(zD)?.index;
          case "images": {
            const DD = this._materialExporter.getTextureInfo(zD)?.index;
            if (void 0 === DD) return;
            const wD = this._textures[DD];
            for (const zD of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const DD = wD?.extensions?.[zD]?.source;
              if ("number" === typeof DD) return DD
            }
            return wD?.source
          }
          case "samplers": {
            const DD = this._materialExporter.getTextureInfo(zD)?.index;
            return void 0 === DD ? void 0 : this._textures[DD]?.sampler
          }
          case "skins": {
            const DD = this._skinMap.get(zD),
              wD = DD ? this._skins.indexOf(DD) : -1;
            return wD >= 0 ? wD : void 0
          }
          case "scenes":
            return zD === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(DD, zD, wD) {
        const pD = this._nodes[DD];
        if (!pD) throw new Error(`Cannot write ${zD}: glTF node ${DD} does not exist.`);
        pD.extensions || (pD.extensions = {}), pD.extensions[zD] = wD
      }
      _shouldExportNode(DD) {
        let zD = this._shouldExportNodeMap.get(DD);
        return void 0 === zD && (zD = this._options.shouldExportNode(DD), this._shouldExportNodeMap.set(DD, zD)), zD
      }
      async _exportNodesAsync(DD, zD) {
        const wD = new Array;
        this._exportBuffers(DD, zD);
        for (const pD of DD) await this._exportNodeAsync(pD, wD, zD);
        return wD
      }
      _collectBuffers(DD, zD, wD, pD, sD) {
        if (this._shouldExportNode(DD) && DD instanceof UD.e && DD.geometry) {
          const KD = DD.geometry.getVertexBuffers();
          if (KD)
            for (const pD in KD) {
              if (!ew(pD)) continue;
              const rD = KD[pD];
              sD.setHasVertexColorAlpha(rD, DD.hasVertexAlpha);
              const LD = rD._buffer,
                cD = zD.get(LD) || [];
              zD.set(LD, cD), -1 === cD.indexOf(rD) && cD.push(rD);
              const gD = wD.get(rD) || [];
              wD.set(rD, gD), -1 === gD.indexOf(DD) && gD.push(DD)
            }
          const rD = DD.morphTargetManager;
          if (rD)
            for (let zD = 0; zD < rD.numTargets; zD++) {
              const wD = rD.getTarget(zD),
                sD = pD.get(wD) || [];
              pD.set(wD, sD), -1 === sD.indexOf(DD) && sD.push(DD)
            }
        }
        for (const KD of DD.getChildren()) this._collectBuffers(KD, zD, wD, pD, sD)
      }
      _exportBuffers(DD, zD) {
        const wD = new Map,
          pD = new Map,
          sD = new Map;
        for (const LD of DD) this._collectBuffers(LD, wD, pD, sD, zD);
        const KD = Array.from(wD.keys());
        for (const LD of KD) {
          const DD = LD.getData();
          if (!DD) throw new Error("Buffer data is not available");
          const sD = wD.get(LD);
          if (!sD) continue;
          const KD = sD[0].byteStride;
          if (sD.some((DD => DD.byteStride !== KD))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const rD = Yw(DD).slice();
          for (const zD of sD) {
            const DD = pD.get(zD),
              {
                byteOffset: wD,
                byteStride: sD,
                componentCount: KD,
                type: LD,
                count: cD,
                normalized: gD,
                kind: AD
              } = kw(zD, DD);
            switch (AD) {
              case RD.f.NormalKind:
              case RD.f.TangentKind:
                (0, jw.h)(rD, wD, sD, KD, LD, cD, gD, (DD => {
                  const zD = Math.sqrt(DD[0] * DD[0] + DD[1] * DD[1] + DD[2] * DD[2]);
                  if (zD > 0) {
                    const wD = 1 / zD;
                    DD[0] *= wD, DD[1] *= wD, DD[2] *= wD
                  }
                }));
                break;
              case RD.f.ColorKind: {
                const zD = DD.filter((DD => DD.material instanceof rp.StandardMaterial || null == DD.material)).length;
                if (0 == zD) break;
                if (zD != DD.length) {
                  CD.d.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                LD == RD.f.UNSIGNED_BYTE && CD.d.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const pD = new GD.Color3,
                  AD = new GD.e,
                  UD = this._babylonScene.iI().useExactSrgbConversions;
                (0, jw.h)(rD, wD, sD, KD, LD, cD, gD, (DD => {
                  3 === DD.length ? (pD.cwD(DD, 0), pD.toLinearSpaceToRef(pD, UD), pD.toArray(DD, 0)) : (AD.cwD(DD, 0), AD.toLinearSpaceToRef(AD, UD), AD.toArray(DD, 0))
                }))
              }
            }
          }
          if (zD.convertToRightHanded) {
            for (const DD of sD) {
              const zD = pD.get(DD),
                {
                  byteOffset: wD,
                  byteStride: sD,
                  componentCount: KD,
                  type: LD,
                  count: cD,
                  normalized: gD,
                  kind: AD
                } = kw(DD, zD);
              switch (AD) {
                case RD.f.PositionKind:
                case RD.f.NormalKind:
                case RD.f.TangentKind:
                  (0, jw.h)(rD, wD, sD, KD, LD, cD, gD, (DD => {
                    DD[0] = -DD[0]
                  }))
              }
            }
            zD.convertedToRightHandedBuffers.set(LD, rD)
          }
          const cD = this._bufferManager.createBufferView(rD, KD);
          zD.setVertexBufferView(LD, cD);
          const gD = new Map;
          for (const zD of sD) {
            const DD = pD.get(zD),
              {
                kind: wD,
                totalVertices: sD
              } = kw(zD, DD);
            switch (wD) {
              case RD.f.MatricesIndicesKind:
              case RD.f.MatricesIndicesExtraKind:
                if (zD.type == RD.f.FLOAT) {
                  const DD = zD.getFloatData(sD);
                  null !== DD && gD.set(zD, DD)
                }
            }
          }
          0 !== gD.size && CD.d.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const AD = Array.from(gD.keys());
          for (const wD of AD) {
            const DD = gD.get(wD);
            if (!DD) continue;
            const pD = DD.some((DD => DD >= 256)),
              sD = new(pD ? Uint16Array : Uint8Array)(DD.length);
            for (let zD = 0; zD < DD.length; zD++) sD[zD] = DD[zD];
            const KD = this._bufferManager.createBufferView(sD, 4 * (pD ? 2 : 1));
            zD.setRemappedBufferView(LD, wD, KD)
          }
        }
        const rD = Array.from(sD.keys());
        for (const LD of rD) {
          const DD = sD.get(LD);
          if (!DD) continue;
          const wD = fp(LD, DD[0], this._bufferManager, this._bufferViews, this._accessors, zD.convertToRightHanded);
          for (const pD of DD) zD.bindMorphDataToMesh(pD, wD)
        }
      }
      async _exportNodeAsync(DD, zD, wD) {
        let pD = this._nodeMap.get(DD);
        if (void 0 !== pD) return void(zD.includes(pD) || zD.push(pD));
        const sD = await this._createNodeAsync(DD, wD);
        if (sD) {
          pD = this._nodes.length, this._nodes.push(sD), this._nodeMap.set(DD, pD), wD.pushExportedNode(DD), zD.push(pD);
          const KD = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            rD = [];
          this._babylonScene.animationGroups.length || (Up._CreateMorphTargetAnimationFromMorphTargetAnimations(DD, KD, rD, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, wD.convertToRightHanded, this._options.shouldExportAnimation), DD.animations.length && Up._CreateNodeAnimationFromNodeAnimations(DD, KD, rD, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, wD.convertToRightHanded, this._options.shouldExportAnimation)), KD.channels.length && KD.samplers.length && this._animations.push(KD), rD.forEach((DD => {
            DD.channels.length && DD.samplers.length && this._animations.push(DD)
          }))
        }
        const KD = sD ? [] : zD;
        for (const rD of DD.getChildren()) await this._exportNodeAsync(rD, KD, wD);
        sD && KD.length && (sD.children = KD)
      }
      async _createNodeAsync(DD, zD) {
        if (!this._shouldExportNode(DD)) return null;
        const wD = {};
        if (DD.name && (wD.name = DD.name), DD.metadata) {
          const zD = this._options.metadataSelector(DD.metadata);
          zD && (wD.extras = zD)
        }
        if (DD instanceof AD.e && (this._setNodeTransformation(wD, DD, zD.convertToRightHanded), DD instanceof UD.e)) {
          const pD = DD instanceof fD.c ? DD.nsD : DD;
          if (pD.QE && pD.QE.length > 0 && (wD.mesh = await this._exportMeshAsync(pD, zD)), DD.skeleton) {
            const zD = this._skinMap.get(DD.skeleton);
            void 0 !== zD && (void 0 === this._nodesSkinMap.get(zD) && this._nodesSkinMap.set(zD, []), this._nodesSkinMap.get(zD)?.push(wD))
          }
        }
        if (DD instanceof dw.g) {
          const pD = this._camerasMap.get(DD);
          if (pD) {
            void 0 === this._nodesCameraMap.get(pD) && this._nodesCameraMap.set(pD, []), this._setCameraTransformation(wD, DD, zD.convertToRightHanded);
            const sD = DD.parent;
            if (null !== sD && Fw(DD, sD)) {
              const DD = this._nodeMap.get(sD);
              if (void 0 !== DD) {
                const zD = this._nodes[DD];
                return tw(wD, zD), this._nodesCameraMap.get(pD)?.push(zD), null
              }
            }
            this._nodesCameraMap.get(pD)?.push(wD)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", wD, DD, this._nodeMap, zD.convertToRightHanded) ? wD : (CD.d.Warn(`Not exporting node ${DD.name}`), null)
      }
      _exportIndices(DD, zD, wD, pD, sD, rD, LD, cD, gD) {
        let RD = null;
        gD.mode = function(DD) {
          switch (DD) {
            case KD.b.TriangleFillMode:
              return 4;
            case KD.b.TriangleStripDrawMode:
              return 5;
            case KD.b.TriangleFanDrawMode:
              return 6;
            case KD.b.PointListDrawMode:
            case KD.b.PointFillMode:
              return 0;
            case KD.b.LineLoopDrawMode:
              return 2;
            case KD.b.LineListDrawMode:
              return 1;
            case KD.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${DD}`)
        }(rD);
        const AD = LD !== KD.b.CounterClockWiseSideOrientation && function(DD) {
          switch (DD) {
            case KD.b.TriangleFillMode:
            case KD.b.TriangleStripDrawMode:
            case KD.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(rD);
        if (AD) {
          if (rD === KD.b.TriangleStripDrawMode || rD === KD.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const LD = zD ? new Uint32Array(pD) : new Uint16Array(pD);
          if (DD)
            for (let zD = 0; zD + 2 < pD; zD += 3) LD[zD] = DD[wD + zD] + sD, LD[zD + 1] = DD[wD + zD + 2] + sD, LD[zD + 2] = DD[wD + zD + 1] + sD;
          else
            for (let DD = 0; DD + 2 < pD; DD += 3) LD[DD] = DD, LD[DD + 1] = DD + 2, LD[DD + 2] = DD + 1;
          RD = LD
        } else if (DD && 0 !== sD) {
          const KD = zD ? new Uint32Array(pD) : new Uint16Array(pD);
          for (let zD = 0; zD < pD; zD++) KD[zD] = DD[wD + zD] + sD;
          RD = KD
        } else DD && (RD = function(DD, zD, wD, pD) {
          let sD = DD;
          return 0 === zD && wD === DD.length || (sD = Array.isArray(DD) ? DD.slice(zD, zD + wD) : DD.subarray(zD, zD + wD)), sD instanceof Int32Array ? new Uint32Array(sD.buffer, sD.byteOffset, sD.length) : Array.isArray(sD) ? pD ? new Uint32Array(sD) : new Uint16Array(sD) : sD
        }(DD, wD, pD, zD));
        if (RD) {
          let KD = cD.getIndicesAccessor(DD, wD, pD, sD, AD);
          if (void 0 === KD) {
            const rD = this._bufferManager.createBufferView(RD),
              LD = zD ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(rD, "SCALAR", LD, pD, 0)), KD = this._accessors.length - 1, cD.setIndicesAccessor(DD, wD, pD, sD, AD, KD)
          }
          gD.indices = KD
        }
      }
      _exportVertexBuffer(DD, zD, wD, pD, sD, KD) {
        const rD = DD.getKind();
        if (!ew(rD)) return;
        if (rD.startsWith("uv") && !this._options.exportUnusedUVs && (!zD || !this._materialNeedsUVsSet.has(zD))) return;
        let LD = sD.getVertexAccessor(DD, wD, pD);
        if (void 0 === LD) {
          const zD = sD.convertedToRightHandedBuffers.get(DD._buffer) || DD._buffer.getData(),
            KD = rD === RD.f.PositionKind ? function(DD, zD, wD, pD) {
              const {
                byteOffset: sD,
                byteStride: KD,
                type: rD,
                normalized: LD
              } = zD, cD = zD.getSize(), gD = new Array(cD).fill(1 / 0), RD = new Array(cD).fill(-1 / 0);
              return (0, jw.h)(DD, sD + wD * KD, KD, cD, rD, pD * cD, LD, (DD => {
                for (let zD = 0; zD < cD; zD++) gD[zD] = Math.min(gD[zD], DD[zD]), RD[zD] = Math.max(RD[zD], DD[zD])
              })), {
                min: gD,
                max: RD
              }
            }(zD, DD, wD, pD) : void 0,
            cD = (rD === RD.f.MatricesIndicesKind || rD === RD.f.MatricesIndicesExtraKind) && DD.type === RD.f.FLOAT,
            gD = cD ? RD.f.UNSIGNED_BYTE : DD.type,
            AD = cD ? void 0 : DD.normalized,
            UD = cD ? sD.getRemappedBufferView(DD._buffer, DD) : sD.getVertexBufferView(DD._buffer),
            fD = DD.byteOffset + wD * DD.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(UD, function(DD, zD) {
            if (DD == RD.f.ColorKind) return zD ? "VEC4" : "VEC3";
            switch (DD) {
              case RD.f.PositionKind:
              case RD.f.NormalKind:
                return "VEC3";
              case RD.f.TangentKind:
              case RD.f.MatricesIndicesKind:
              case RD.f.MatricesIndicesExtraKind:
              case RD.f.MatricesWeightsKind:
              case RD.f.MatricesWeightsExtraKind:
                return "VEC4";
              case RD.f.UVKind:
              case RD.f.UV2Kind:
              case RD.f.UV3Kind:
              case RD.f.UV4Kind:
              case RD.f.UV5Kind:
              case RD.f.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${DD}`)
          }(rD, sD.hasVertexColorAlpha(DD)), gD, pD, fD, KD, AD)), LD = this._accessors.length - 1, sD.setVertexAccessor(DD, wD, pD, LD)
        }
        KD.attributes[function(DD) {
          switch (DD) {
            case RD.f.PositionKind:
              return "POSITION";
            case RD.f.NormalKind:
              return "NORMAL";
            case RD.f.TangentKind:
              return "TANGENT";
            case RD.f.ColorKind:
              return "COLOR_0";
            case RD.f.UVKind:
              return "TEXCOORD_0";
            case RD.f.UV2Kind:
              return "TEXCOORD_1";
            case RD.f.UV3Kind:
              return "TEXCOORD_2";
            case RD.f.UV4Kind:
              return "TEXCOORD_3";
            case RD.f.UV5Kind:
              return "TEXCOORD_4";
            case RD.f.UV6Kind:
              return "TEXCOORD_5";
            case RD.f.MatricesIndicesKind:
              return "JOINTS_0";
            case RD.f.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case RD.f.MatricesWeightsKind:
              return "WEIGHTS_0";
            case RD.f.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${DD}`)
        }(rD)] = LD
      }
      async _exportMaterialAsync(DD, zD, wD, pD) {
        let sD = this._materialMap.get(DD);
        if (void 0 === sD) {
          const pD = zD && Object.keys(zD).some((DD => DD.startsWith("uv")));
          if ((DD = DD instanceof Kp.d ? DD.M6[wD.materialIndex] : DD) instanceof Ez) sD = await this._materialExporter.exportPBRMaterialAsync(DD, pD);
          else if (DD instanceof rp.StandardMaterial) sD = await this._materialExporter.exportStandardMaterialAsync(DD, pD);
          else {
            if (!(DD instanceof Hz)) return void CD.d.Warn(`Unsupported material '${DD.name}' with type ${DD.getClassName()}`);
            sD = await this._materialExporter.exportOpenPBRMaterialAsync(DD, pD)
          }
          this._materialMap.set(DD, sD)
        }
        pD.material = sD
      }
      async _exportMeshAsync(DD, zD) {
        let wD = zD.getMesh(DD);
        if (void 0 !== wD) return wD;
        const pD = {
          primitives: []
        };
        wD = this._meshes.length, this._meshes.push(pD), zD.setMesh(DD, wD);
        const sD = DD.isUnIndexed ? null : DD.XpD(),
          rD = DD.geometry?.getVertexBuffers(),
          LD = zD.getMorphTargetsFromMesh(DD),
          cD = DD instanceof Ip.c,
          gD = DD instanceof dp,
          RD = DD.QE;
        if (rD && RD && RD.length > 0)
          for (const AD of RD) {
            const wD = {
                attributes: {}
              },
              RD = AD.yI() || this._babylonScene.defaultMaterial;
            if (gD) {
              const zD = {
                  name: RD.name
                },
                pD = DD,
                sD = GD.Color3.White(),
                KD = pD.material?.alpha ?? 1,
                rD = pD.greasedLineMaterial?.color ?? sD;
              (!rD.equalsWithEpsilon(sD, Sw.b) || KD < 1) && (zD.pbrMetallicRoughness = {
                baseColorFactor: [...rD.QpD(), KD]
              }), this._materials.push(zD), wD.material = this._materials.length - 1
            } else if (cD) {
              const zD = {
                  name: RD.name
                },
                pD = DD;
              (!pD.color.equalsWithEpsilon(GD.Color3.White(), Sw.b) || pD.alpha < 1) && (zD.pbrMetallicRoughness = {
                baseColorFactor: [...pD.color.QpD(), pD.alpha]
              }), this._materials.push(zD), wD.material = this._materials.length - 1
            } else await this._exportMaterialAsync(RD, rD, AD, wD);
            const UD = cD || gD ? KD.b.LineListDrawMode : DD.overrideRenderingFillMode ?? RD.fillMode;
            let fD = RD._getEffectiveOrientation(DD);
            zD.wasAddedByNoopNode && !DD.Ul().useRightHandedSystem && (fD = fD === KD.b.ClockWiseSideOrientation ? KD.b.CounterClockWiseSideOrientation : KD.b.ClockWiseSideOrientation), this._exportIndices(sD, sD ? (0, jw.c)(sD, AD.indexCount, AD.indexStart, AD.verticesStart) : AD.verticesCount > 65535, sD ? AD.indexStart : AD.verticesStart, sD ? AD.indexCount : AD.verticesCount, -AD.verticesStart, UD, fD, zD, wD);
            for (const DD of Object.values(rD)) this._exportVertexBuffer(DD, RD, AD.verticesStart, AD.verticesCount, zD, wD);
            if (LD) {
              wD.targets = [];
              for (const DD of LD) wD.targets.push(DD.attributes)
            }
            pD.primitives.push(wD), this._extensionsPostExportMeshPrimitive(wD)
          }
        if (LD) {
          pD.weights = [], pD.extras || (pD.extras = {}), pD.extras.targetNames = [];
          for (const DD of LD) pD.weights.push(DD.influence), pD.extras.targetNames.push(DD.name)
        }
        return wD
      }
    }
    ip._ExtensionNames = new Array, ip._ExtensionFactories = {}, ip._ExtensionOrders = {};
    class lp {
      static async GLTFAsync(DD, zD, wD) {
        wD && wD.exportWithoutWaitingForScene || await DD.whenReadyAsync();
        const pD = new ip(DD, wD),
          sD = await pD.generateGLTFAsync(zD.replace(/\.[^/.]+$/, ""));
        return pD.dispose(), sD
      }
      static async GLBAsync(DD, zD, wD) {
        wD && wD.exportWithoutWaitingForScene || await DD.whenReadyAsync();
        const pD = new ip(DD, wD),
          sD = await pD.generateGLBAsync(zD.replace(/\.[^/.]+$/, ""));
        return pD.dispose(), sD
      }
    }
    const Wp = "EXT_mesh_gpu_instancing";

    function Np(DD, zD) {
      const wD = new Float32Array(3 * zD);
      for (let pD = 0; pD < zD; pD++) wD[3 * pD + 0] = DD[4 * pD + 0], wD[3 * pD + 1] = DD[4 * pD + 1], wD[3 * pD + 2] = DD[4 * pD + 2];
      return wD
    }
    class Zp {
      constructor(DD) {
        this.name = Wp, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(DD, zD, wD, pD, sD, KD) {
        return await new Promise((DD => {
          if (zD && wD instanceof Qp.e && wD.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const DD = ND.s.Zero(),
              pD = ND.i.Identity(),
              rD = ND.s.One(),
              LD = wD.thinInstanceGetWorldMatrices(),
              cD = ND.n.WI[2],
              gD = ND.n.Quaternion[1],
              RD = ND.n.WI[3];
            let AD = !1,
              UD = !1,
              fD = !1;
            const ID = new Float32Array(3 * wD.A4),
              BD = new Float32Array(4 * wD.A4),
              GD = new Float32Array(3 * wD.A4);
            let hD = 0;
            for (const zD of LD) zD.decompose(RD, gD, cD), sD && (aw(cD), uw(gD)), ID.set(cD.QpD(), 3 * hD), BD.set(gD.normalize().QpD(), 4 * hD), GD.set(RD.QpD(), 3 * hD), AD = AD || !cD.equalsWithEpsilon(DD), UD = UD || !gD.equalsWithEpsilon(pD), fD = fD || !RD.equalsWithEpsilon(rD), hD++;
            const nD = {
              attributes: {}
            };
            AD && (nD.attributes.TRANSLATION = this._buildAccessor(ID, "VEC3", wD.A4, KD)), UD && (nD.attributes.ROTATION = this._buildAccessor(BD, "VEC4", wD.A4, KD)), fD && (nD.attributes.SCALE = this._buildAccessor(GD, "VEC3", wD.A4, KD));
            let MD = wD._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (MD) {
              const DD = wD.A4,
                zD = "VEC3";
              wD.hasVertexAlpha && MD.length === 4 * DD ? (this._instanceColorWarned || (CD.d.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), MD = Np(MD, DD)) : MD.length === 4 * DD && (MD = Np(MD, DD)), MD.length === 3 * DD && (nD.attributes._COLOR_0 = this._buildAccessor(MD, zD, DD, KD))
            }
            zD.extensions = zD.extensions || {}, zD.extensions[Wp] = nD
          }
          DD(zD)
        }))
      }
      _buildAccessor(DD, zD, wD, pD) {
        const sD = pD.createBufferView(DD),
          KD = pD.createAccessor(sD, zD, 5126, wD);
        return this._exporter._accessors.push(KD), this._exporter._accessors.length - 1
      }
    }
    let yp = !1;

    function kp() {
      yp || (yp = !0, ip.RegisterExtension(Wp, (DD => new Zp(DD))))
    }
    wD(40408);
    kp();
    var mp = wD(41766);

    function ep(DD, zD, wD, pD) {
      const sD = DD;
      let KD = null,
        rD = null,
        LD = null,
        cD = null;
      const gD = {},
        RD = zD.find((DD => "POSITION" === DD.dracoName));
      if (!RD) throw new Error("Draco: Missing position attribute for encoding.");
      if (!wD) {
        const DD = RD.data.length / RD.size;
        wD = new(DD > 65535 ? Uint32Array : Uint16Array)(DD);
        for (let zD = 0; zD < DD; zD++) wD[zD] = zD
      }
      try {
        KD = new sD.Encoder, rD = new sD.MeshBuilder, LD = new sD.Mesh, rD.AddFacesToMesh(LD, wD.length / 3, wD);
        const DD = new Map([
          [Float32Array, (DD, zD, wD, pD, sD, KD) => DD.AddFloatAttribute(zD, wD, pD, sD, KD)],
          [Uint32Array, (DD, zD, wD, pD, sD, KD) => DD.AddUInt32Attribute(zD, wD, pD, sD, KD)],
          [Uint16Array, (DD, zD, wD, pD, sD, KD) => DD.AddUInt16Attribute(zD, wD, pD, sD, KD)],
          [Uint8Array, (DD, zD, wD, pD, sD, KD) => DD.AddUInt8Attribute(zD, wD, pD, sD, KD)],
          [Int32Array, (DD, zD, wD, pD, sD, KD) => DD.AddInt32Attribute(zD, wD, pD, sD, KD)],
          [Int16Array, (DD, zD, wD, pD, sD, KD) => DD.AddInt16Attribute(zD, wD, pD, sD, KD)],
          [Int8Array, (DD, zD, wD, pD, sD, KD) => DD.AddInt8Attribute(zD, wD, pD, sD, KD)]
        ]);
        for (const wD of zD) {
          wD.data instanceof Uint8ClampedArray && (wD.data = new Uint8Array(wD.data));
          const zD = DD.get(wD.data.constructor),
            cD = wD.data.length / wD.size;
          gD[wD.kind] = zD(rD, LD, sD[wD.dracoName], cD, wD.size, wD.data), pD.quantizationBits && pD.quantizationBits[wD.dracoName] && KD.SetAttributeQuantization(sD[wD.dracoName], pD.quantizationBits[wD.dracoName])
        }
        pD.method && KD.SetEncodingMethod(sD[pD.method]), void 0 !== pD.encodeSpeed && void 0 !== pD.decodeSpeed && KD.SetSpeedOptions(pD.encodeSpeed, pD.decodeSpeed), cD = new sD.DracoInt8Array;
        const RD = KD.EncodeMeshToDracoBuffer(LD, cD);
        if (RD <= 0) throw new Error("Draco: Failed to encode.");
        const AD = new Int8Array(RD);
        for (let zD = 0; zD < RD; zD++) AD[zD] = cD.GetValue(zD);
        return {
          data: AD,
          attributeIds: gD
        }
      } finally {
        LD && sD.destroy(LD), rD && sD.destroy(rD), KD && sD.destroy(KD), cD && sD.destroy(cD)
      }
    }

    function op() {
      let DD;
      onmessage = zD => {
        const wD = zD.data;
        switch (wD.id) {
          case "init": {
            wD.url && importScripts(wD.url);
            const zD = wD.wasmBinary ? {
              wasmBinary: wD.wasmBinary
            } : {};
            DD = DracoEncoderModule(zD), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!DD) throw new Error("Draco: Encoder module is not available.");
            DD.then((DD => {
              const zD = ep(DD, wD.attributes, wD.indices, wD.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: zD
              }, zD ? [zD.data.buffer] : void 0)
            })).catch((DD => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: DD.message
              })
            }))
        }
      }
    }
    class ap {
      constructor(DD) {
        if (DD.workerPool) return void(this._workerPoolPromise = Promise.resolve(DD.workerPool));
        const zD = DD.wasmBinary,
          wD = DD.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          pD = wD && "function" === typeof Worker && "function" === typeof URL,
          sD = pD || !DD.jsModule,
          KD = DD.wasmUrl && DD.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: sD ? Xz.h.GetBabylonScriptURL(DD.wasmUrl, !0) : "",
            wasmBinaryPromise: zD ? Promise.resolve(zD) : Xz.h.LoadFileAsync(Xz.h.GetBabylonScriptURL(DD.wasmBinaryUrl, !0))
          } : {
            url: sD ? Xz.h.GetBabylonScriptURL(DD.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        pD ? this._workerPoolPromise = KD.wasmBinaryPromise.then((DD => {
          const zD = this._getWorkerContent(),
            pD = URL.createObjectURL(new Blob([zD], {
              type: "application/javascript"
            }));
          return new mp.d(wD, (() => async function(DD, zD, wD) {
            return await new Promise(((pD, sD) => {
              const KD = zD => {
                  DD.removeEventListener("error", KD), DD.removeEventListener("message", rD), sD(zD)
                },
                rD = zD => {
                  "initDone" === zD.data.id && (DD.removeEventListener("error", KD), DD.removeEventListener("message", rD), pD(DD))
                };
              if (DD.addEventListener("error", KD), DD.addEventListener("message", rD), zD) {
                const pD = zD.slice(0);
                DD.postMessage({
                  id: "init",
                  url: wD,
                  wasmBinary: pD
                }, [pD])
              } else DD.postMessage({
                id: "init",
                url: wD
              })
            }))
          }(new Worker(pD), DD, KD.url)))
        })) : this._modulePromise = KD.wasmBinaryPromise.then((async zD => {
          if (!this._isModuleAvailable() && !DD.jsModule) {
            if (!KD.url) throw new Error("Draco codec module is not available");
            await Xz.h.LoadBabylonScriptAsync(KD.url)
          }
          return await this._createModuleAsync(zD, DD.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((DD => {
          DD.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function vp() {
      const DD = DD => !!DD && "object" === typeof DD;
      for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
      return wD.reduce(((zD, wD) => {
        const pD = Object.keys(wD);
        for (const sD of pD) {
          const pD = zD[sD],
            KD = wD[sD];
          Array.isArray(pD) && Array.isArray(KD) ? zD[sD] = pD.concat(KD) : DD(pD) && DD(KD) ? zD[sD] = vp(pD, KD) : zD[sD] = KD
        }
        return zD
      }), {})
    }

    function tp(DD) {
      return DD === ZD.k.PositionKind ? "POSITION" : DD === ZD.k.NormalKind ? "NORMAL" : DD === ZD.k.ColorKind ? "COLOR" : DD.startsWith(ZD.k.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const Fp = {
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
    class Yp extends ap {
      static get DefaultAvailable() {
        return !!((DD = Yp.DefaultConfiguration).wasmUrl && (DD.wasmBinary || DD.wasmBinaryUrl) && "object" === typeof WebAssembly || DD.fallbackUrl);
        var DD
      }
      static get Default() {
        return Yp._Default ?? (Yp._Default = new Yp), Yp._Default
      }
      static ResetDefault(DD) {
        Yp._Default && (DD || Yp._Default.dispose(), Yp._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(DD, zD) {
        return {
          module: await (zD || DracoEncoderModule)({
            wasmBinary: DD
          })
        }
      }
      _getWorkerContent() {
        return `${ep}(${op})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yp.DefaultConfiguration)
      }
      async _encodeAsync(DD, zD, wD) {
        const pD = wD ? vp(Fp, wD) : Fp;
        if (this._workerPoolPromise) {
          const wD = await this._workerPoolPromise;
          return await new Promise(((sD, KD) => {
            wD.push(((wD, rD) => {
              const LD = DD => {
                  wD.removeEventListener("error", LD), wD.removeEventListener("message", cD), KD(DD), rD()
                },
                cD = DD => {
                  "encodeMeshSuccess" === DD.data.id ? (wD.removeEventListener("error", LD), wD.removeEventListener("message", cD), sD(DD.data.encodedMeshData), rD()) : "encodeMeshError" === DD.data.id && (wD.removeEventListener("error", LD), wD.removeEventListener("message", cD), KD(new Error(DD.data.errorMessage)), rD())
                };
              wD.addEventListener("error", LD), wD.addEventListener("message", cD);
              const gD = [];
              for (const zD of DD) gD.push(zD.data.buffer);
              zD && gD.push(zD.buffer), wD.postMessage({
                id: "encodeMesh",
                attributes: DD,
                indices: zD,
                options: pD
              }, gD)
            }))
          }))
        }
        if (this._modulePromise) {
          return ep((await this._modulePromise).module, DD, zD, pD)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(DD, zD) {
        if (0 == DD.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        DD instanceof Qp.e && DD.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === zD?.method && (CD.d.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), zD.method = "MESH_SEQUENTIAL_ENCODING");
        const wD = function(DD) {
            let zD = DD.XpD(void 0, !0);
            return !zD || zD instanceof Uint32Array || zD instanceof Uint16Array || (zD = ((0, jw.c)(zD, zD.length) ? Uint32Array : Uint16Array).from(zD)), zD
          }(DD),
          pD = function(DD, zD) {
            const wD = [];
            for (const pD of DD.getVerticesDataKinds()) {
              if (zD?.includes(pD)) {
                if (pD === ZD.k.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const sD = DD.getVertexBuffer(pD),
                KD = sD.getSize(),
                rD = (0, jw.r)(sD.getData(), KD, sD.type, sD.byteOffset, sD.byteStride, DD.getTotalVertices(), !0);
              wD.push({
                kind: pD,
                dracoName: tp(pD),
                size: KD,
                data: rD
              })
            }
            return wD
          }(DD, zD?.excludedAttributes);
        return await this._encodeAsync(pD, wD, zD)
      }
    }
    Yp.DefaultConfiguration = {
      wasmUrl: `${Xz.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${Xz.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${Xz.h._DefaultCdnUrl}/draco_encoder.js`
    }, Yp._Default = null;
    const Hp = "KHR_draco_mesh_compression";
    class qp {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(DD) {
        this.name = Hp, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === DD.options.meshCompressionMethod && Yp.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(DD, zD, wD) {
        if (!this.enabled) return;
        if (4 !== DD.mode && 5 !== DD.mode) return void CD.d.Warn("Cannot compress primitive with mode " + DD.mode + ".");
        const pD = [],
          sD = [];
        let KD = null;
        if (void 0 !== DD.indices) {
          const rD = wD[DD.indices],
            LD = zD.getBufferView(rD);
          KD = zD.getData(LD).slice(), pD.push(LD), sD.push(rD)
        }
        const rD = [];
        for (const [RD, AD] of Object.entries(DD.attributes)) {
          const DD = wD[AD],
            KD = zD.getBufferView(DD),
            cD = mw(DD.type),
            gD = (0, jw.r)(zD.getData(KD), cD, DD.componentType, DD.byteOffset || 0, KD.byteStride || (0, jw.n)(DD.componentType) * cD, DD.count, !0);
          rD.push({
            kind: RD,
            dracoName: (LD = RD, "POSITION" === LD ? "POSITION" : "NORMAL" === LD ? "NORMAL" : LD.startsWith("COLOR") ? "COLOR" : LD.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: mw(DD.type),
            data: gD
          }), pD.push(KD), sD.push(DD)
        }
        var LD;
        const cD = {
            method: DD.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          gD = Yp.Default._encodeAsync(rD, KD, cD).then((wD => {
            const KD = {
                bufferView: -1,
                attributes: wD.attributeIds
              },
              rD = zD.createBufferView(wD.data);
            zD.setBufferView(KD, rD);
            for (const DD of pD) this._bufferViewsUsed.add(DD);
            for (const DD of sD) this._accessorsUsed.add(DD);
            DD.extensions || (DD.extensions = {}), DD.extensions[Hp] = KD
          })).catch((DD => {
            CD.d.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + DD.message)
          }));
        this._encodePromises.push(gD), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(DD) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((zD => {
          DD.getPropertiesWithBufferView(zD).every((DD => this._accessorsUsed.has(DD))) && DD.removeBufferView(zD)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let Ds = !1;

    function zs() {
      Ds || (Ds = !0, ip.RegisterExtension(Hp, (DD => new qp(DD))))
    }
    zs();
    var ws = wD(41471);
    const ps = "KHR_lights_punctual",
      ss = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      Ks = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      rs = ND.s.Backward();
    class Ls {
      constructor(DD) {
        this.name = ps, this.enabled = !0, this.required = !1, this._exporter = DD
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[ps] = this._lights
      }
      async postExportNodeAsync(DD, zD, wD, pD, sD) {
        return await new Promise((KD => {
          if (!(wD instanceof Ap.c)) return void KD(zD);
          const rD = wD.getTypeID() == Ap.c.LIGHTTYPEID_POINTLIGHT ? "point" : wD.getTypeID() == Ap.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : wD.getTypeID() == Ap.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!rD || !(wD instanceof ws.c)) return CD.d.Warn(`${DD}: Light ${wD.name} is not supported in ${ps}`), void KD(zD);
          if (wD.falloffType !== Ap.c.FALLOFF_GLTF && CD.d.Warn(`${DD}: Light falloff for ${wD.name} does not match the ${ps} specification!`), !wD.position.sLD(0, 0, 0)) {
            const DD = ND.n.WI[0].pC(wD.position);
            sD && aw(DD), zD.translation = DD.QpD()
          }
          if ("point" !== rD) {
            const DD = wD.direction.normalizeToRef(ND.n.WI[0]);
            sD && aw(DD);
            const pD = ND.i.FromUnitVectorsToRef(rs, DD, ND.n.Quaternion[0]);
            ND.i.IsIdentity(pD) || (zD.rotation = pD.QpD())
          }
          const LD = {
            type: rD,
            name: wD.name,
            color: wD.diffuse.QpD(),
            intensity: wD.intensity,
            range: wD.range
          };
          if (Hw(LD, ss), "spot" === rD) {
            const DD = wD;
            LD.spot = {
              innerConeAngle: DD.innerAngle / 2,
              outerConeAngle: DD.angle / 2
            }, Hw(LD.spot, Ks)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(LD);
          const cD = {
              light: this._lights.lights.length - 1
            },
            gD = wD.parent;
          if (gD && Fw(wD, gD)) {
            const DD = pD.get(gD);
            if (DD) {
              const wD = this._exporter._nodes[DD];
              return tw(zD, wD), wD.extensions || (wD.extensions = {}), wD.extensions[ps] = cD, void KD(null)
            }
          }
          zD.extensions || (zD.extensions = {}), zD.extensions[ps] = cD, KD(zD)
        }))
      }
    }
    let cs = !1;

    function gs() {
      cs || (cs = !0, ip.RegisterExtension(ps, (DD => new Ls(DD))))
    }
    gs();
    const Rs = "KHR_interactivity";
    class As {
      constructor(DD) {
        this._exporter = DD, this.name = Rs, this.enabled = !!DD.options.khrInteractivity, this.required = DD.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var DD, zD, wD;
        const pD = this._exporter.options.khrInteractivity;
        if (!pD) return;
        const sD = pD.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: DD => this._exporter._getNodeIndex(DD),
          getAnimationIndex: DD => this._exporter._getAnimationIndex(DD),
          getCameraIndex: DD => this._exporter._getCameraIndex(DD),
          getMaterialIndex: DD => this._exporter._getMaterialIndex(DD),
          getRootIndex: (DD, zD) => this._exporter._getRootIndex(DD, zD),
          setNodeExtension: (DD, zD, wD) => this._exporter._setNodeExtension(DD, zD, wD)
        });
        this._exporter._glTF.extensions[Rs] = sD;
        for (const KD of pD.additionalExtensionsUsed)(DD = this._exporter._glTF).extensionsUsed || (DD.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(KD) && this._exporter._glTF.extensionsUsed.push(KD);
        for (const KD of pD.additionalExtensionsRequired)(zD = this._exporter._glTF).extensionsUsed || (zD.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(KD) && this._exporter._glTF.extensionsUsed.push(KD), (wD = this._exporter._glTF).extensionsRequired || (wD.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(KD) && this._exporter._glTF.extensionsRequired.push(KD)
      }
    }
    let Us = !1;

    function fs() {
      Us || (Us = !0, ip.RegisterExtension(Rs, (DD => new As(DD)), 200))
    }
    fs();
    const Is = "EXT_lights_area",
      Bs = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      Gs = {
        aspect: 1
      },
      hs = ND.s.Backward();
    class ns {
      constructor(DD) {
        this.name = Is, this.enabled = !0, this.required = !1, this._exporter = DD
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Is] = this._lights
      }
      async postExportNodeAsync(DD, zD, wD, pD, sD) {
        return await new Promise((KD => {
          if (!(wD instanceof Ap.c)) return void KD(zD);
          const rD = wD.getTypeID() == Ap.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!rD) return CD.d.Warn(`${DD}: Light ${wD.name} is not supported in ${Is}`), void KD(zD);
          const LD = wD;
          if (LD.falloffType !== Ap.c.FALLOFF_GLTF && CD.d.Warn(`${DD}: Light falloff for ${wD.name} does not match the ${Is} specification!`), !LD.position.sLD(0, 0, 0)) {
            const DD = ND.n.WI[0].pC(LD.position);
            sD && aw(DD), zD.translation = DD.QpD()
          }
          const cD = ND.s.Forward();
          sD && aw(cD);
          const gD = ND.i.FromUnitVectorsToRef(hs, cD, ND.n.Quaternion[0]);
          ND.i.IsIdentity(gD) || (zD.rotation = gD.QpD());
          const RD = {
            type: rD,
            name: LD.name,
            color: LD.diffuse.QpD(),
            intensity: LD.intensity,
            size: LD.height,
            rect: {
              aspect: LD.width / LD.height
            }
          };
          Hw(RD, Bs), RD.rect && Hw(RD.rect, Gs), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(RD);
          const AD = {
              light: this._lights.lights.length - 1
            },
            UD = wD.parent;
          if (UD && Fw(LD, UD)) {
            const DD = pD.get(UD);
            if (DD) {
              const wD = this._exporter._nodes[DD];
              return tw(zD, wD), wD.extensions || (wD.extensions = {}), wD.extensions[Is] = AD, void KD(null)
            }
          }
          zD.extensions || (zD.extensions = {}), zD.extensions[Is] = AD, KD(zD)
        }))
      }
    }
    let Ms = !1;

    function Os() {
      Ms || (Ms = !0, ip.RegisterExtension(Is, (DD => new ns(DD))))
    }
    Os();
    const Es = "KHR_materials_anisotropy";
    class Qs {
      constructor(DD) {
        this.name = Es, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        const pD = [];
        if (wD instanceof Ez) {
          if (wD.anisotropy.isEnabled && !wD.anisotropy.legacy) return wD.anisotropy.texture && pD.push(wD.anisotropy.texture), pD
        } else if (wD instanceof Hz && wD.specularRoughnessAnisotropy > 0) {
          const DD = function(DD) {
            const zD = DD.specularRoughnessAnisotropyTexture,
              wD = DD.geometryTangentTexture;
            return `${zD&&zD.getInternalTexture()?zD.getInternalTexture().uniqueId:"NoStrength"}_${wD&&wD.getInternalTexture()?wD.getInternalTexture().uniqueId:"NoTangent"}`
          }(wD);
          if (this._anisoTexturesMap[DD]) pD.push(this._anisoTexturesMap[DD]);
          else {
            const zD = await async function(DD) {
              const zD = DD.Ul(),
                wD = DD.specularRoughnessAnisotropyTexture,
                pD = DD.geometryTangentTexture;
              return wD || pD ? await rw("AnisotropyTexture", Rw(pD ? Lw(pD, 0) : gw(1), pD ? Lw(pD, 1) : gw(0), wD ? Lw(wD, 0) : gw(1)), zD) : null
            }(wD);
            zD && (pD.push(zD), this._anisoTexturesMap[DD] = zD)
          }
          return pD
        }
        return []
      }
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((DD => {
          var pD;
          if (wD instanceof Ez) {
            if (!wD.anisotropy.isEnabled || wD.anisotropy.legacy) return void DD(zD);
            this._wasUsed = !0, zD.extensions = zD.extensions || {};
            const pD = this._exporter._materialExporter.getTextureInfo(wD.anisotropy.texture),
              sD = {
                anisotropyStrength: wD.anisotropy.intensity,
                anisotropyRotation: wD.anisotropy.angle,
                anisotropyTexture: pD ?? void 0
              };
            null !== sD.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(wD), zD.extensions[Es] = sD
          } else if (wD instanceof Hz && wD.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, zD.extensions = zD.extensions || {};
            let sD = wD.specularRoughnessTexture;
            wD._useRoughnessFromMetallicTextureGreen && (sD = wD.baseMetalnessTexture);
            const KD = this._anisoTexturesMap[wD.id];
            if (!sD && !KD) {
              let pD = wD.specularRoughness,
                sD = wD.specularRoughnessAnisotropy;
              if (!wD._useGltfStyleAnisotropy) {
                const DD = function(DD, zD) {
                  const wD = DD * DD,
                    pD = wD * Math.sqrt(2 / (1 + (1 - zD) * (1 - zD))),
                    sD = (1 - zD) * pD;
                  return {
                    newBaseRoughness: Math.sqrt(sD),
                    newAnisotropyStrength: Math.min(Math.sqrt((pD - wD) / Math.max(1 - wD, 1e-4)), 1)
                  }
                }(wD.specularRoughness, wD.specularRoughnessAnisotropy);
                pD = DD.newBaseRoughness, sD = DD.newAnisotropyStrength
              }
              zD.pbrMetallicRoughness && (zD.pbrMetallicRoughness.roughnessFactor = pD);
              const KD = {
                anisotropyStrength: sD,
                anisotropyRotation: wD.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return zD.extensions[Es] = KD, DD(zD)
            }
            const rD = KD ? this._exporter._materialExporter.getTextureInfo(KD) : null,
              LD = {
                anisotropyStrength: wD.specularRoughnessAnisotropy,
                anisotropyRotation: wD.geometryTangentAngle,
                anisotropyTexture: rD || void 0,
                extensions: {}
              };
            wD._useGltfStyleAnisotropy || (zD.extensions.KHR_materials_openpbr = {}, (pD = this._exporter._glTF).extensionsUsed || (pD.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(wD), zD.extensions[Es] = LD
          }
          DD(zD)
        }))
      }
    }
    let Xs = !1;

    function Vs() {
      Xs || (Xs = !0, ip.RegisterExtension(Es, (DD => new Qs(DD))))
    }
    Vs();
    const Ps = "KHR_materials_clearcoat";

    function Cs(DD, zD) {
      const wD = new TD.d(zD.name, zD.Ul());
      return wD._texture = DD, wD.coordinatesIndex = zD.coordinatesIndex, zD instanceof TD.d && (wD.uOffset = zD.uOffset, wD.vOffset = zD.vOffset, wD.uScale = zD.uScale, wD.vScale = zD.vScale, wD.wAng = zD.wAng), wD.wrapU = zD.wrapU, wD.wrapV = zD.wrapV, wD
    }
    class xs {
      constructor(DD) {
        this.name = Ps, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = DD
      }
      dispose() {
        for (const DD of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[DD].dispose()
        }
        this._mergedTexturesMap = {};
        for (const DD of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[DD].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        const pD = [];
        if (wD instanceof Ez) {
          if (wD.clearCoat.isEnabled) return wD.clearCoat.texture && pD.push(wD.clearCoat.texture), !wD.clearCoat.useRoughnessFromMainTexture && wD.clearCoat.textureRoughness && pD.push(wD.clearCoat.textureRoughness), wD.clearCoat.bumpTexture && pD.push(wD.clearCoat.bumpTexture), pD
        } else if (wD instanceof Hz && wD.coatWeight > 0) {
          let DD = !1;
          if (wD.coatWeightTexture ? wD.coatRoughnessTexture ? wD._useCoatRoughnessFromGreenChannel && wD.coatWeightTexture.getInternalTexture() === wD.coatRoughnessTexture.getInternalTexture() ? (pD.push(wD.coatWeightTexture), pD.push(wD.coatRoughnessTexture)) : DD = !0 : pD.push(wD.coatWeightTexture) : wD.coatRoughnessTexture && (wD._useCoatRoughnessFromGreenChannel ? pD.push(wD.coatRoughnessTexture) : DD = !0), DD) {
            const DD = function(DD) {
              const zD = DD.coatWeightTexture,
                wD = zD && zD.getInternalTexture() ? zD.getInternalTexture().uniqueId : "NoCoat",
                pD = DD.coatRoughnessTexture;
              return `${wD}_${pD&&pD.getInternalTexture()?pD.getInternalTexture().uniqueId:"NoRoughness"}`
            }(wD);
            if (!this._cachedInternalTexturesMap[DD]) {
              const zD = await async function(DD) {
                const zD = DD.Ul(),
                  wD = DD.coatWeightTexture,
                  pD = DD.coatRoughnessTexture;
                return wD || pD ? (await rw("CoatTexture", Rw(wD ? Lw(wD, 0) : gw(1), pD ? Lw(pD, DD._useCoatRoughnessFromGreenChannel ? 1 : 0) : gw(1)), zD)).getInternalTexture() : null
              }(wD);
              zD && (this._cachedInternalTexturesMap[DD] = zD)
            }
            this._cachedInternalTexturesMap[DD] && (wD.coatWeightTexture && (this._mergedTexturesMap[wD.coatWeightTexture.uniqueId] = Cs(this._cachedInternalTexturesMap[DD], wD.coatWeightTexture), pD.push(this._mergedTexturesMap[wD.coatWeightTexture.uniqueId])), wD.coatRoughnessTexture && (this._mergedTexturesMap[wD.coatRoughnessTexture.uniqueId] = Cs(this._cachedInternalTexturesMap[DD], wD.coatRoughnessTexture), pD.push(this._mergedTexturesMap[wD.coatRoughnessTexture.uniqueId])))
          }
          return wD.geometryCoatNormalTexture && pD.push(wD.geometryCoatNormalTexture), pD
        }
        return []
      }
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((DD => {
          if (wD instanceof Ez) {
            if (!wD.clearCoat.isEnabled) return void DD(zD);
            this._wasUsed = !0, zD.extensions = zD.extensions || {};
            const pD = this._exporter._materialExporter.getTextureInfo(wD.clearCoat.texture);
            let sD;
            sD = wD.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(wD.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(wD.clearCoat.textureRoughness), wD.clearCoat.isTintEnabled && Xz.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${wD.name}`), wD.clearCoat.remapF0OnInterfaceChange && Xz.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${wD.name}`);
            const KD = this._exporter._materialExporter.getTextureInfo(wD.clearCoat.bumpTexture),
              rD = {
                clearcoatFactor: wD.clearCoat.intensity,
                clearcoatTexture: pD ?? void 0,
                clearcoatRoughnessFactor: wD.clearCoat.roughness,
                clearcoatRoughnessTexture: sD ?? void 0,
                clearcoatNormalTexture: KD ?? void 0
              };
            null === rD.clearcoatTexture && null === rD.clearcoatRoughnessTexture && null === rD.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(wD), zD.extensions[Ps] = rD
          } else if (wD instanceof Hz) {
            if (0 == wD.coatWeight) return void DD(zD);
            let pD, sD, KD, rD;
            this._wasUsed = !0, zD.extensions = zD.extensions || {}, wD.coatWeightTexture && (pD = this._mergedTexturesMap[wD.coatWeightTexture.uniqueId], sD = this._exporter._materialExporter.getTextureInfo(pD)), wD.coatRoughnessTexture && (KD = this._mergedTexturesMap[wD.coatRoughnessTexture.uniqueId], rD = this._exporter._materialExporter.getTextureInfo(KD)), wD.coatColorTexture && Xz.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${wD.name}`);
            const LD = this._exporter._materialExporter.getTextureInfo(wD.geometryCoatNormalTexture),
              cD = {
                clearcoatFactor: wD.coatWeight,
                clearcoatTexture: sD ?? void 0,
                clearcoatRoughnessFactor: wD.coatRoughness,
                clearcoatRoughnessTexture: rD ?? void 0,
                clearcoatNormalTexture: LD ?? void 0
              };
            null === cD.clearcoatTexture && null === cD.clearcoatRoughnessTexture && null === cD.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(wD), zD.extensions[Ps] = cD
          }
          DD(zD)
        }))
      }
    }
    let Ts = !1;

    function bs() {
      Ts || (Ts = !0, ip.RegisterExtension(Ps, (DD => new xs(DD))))
    }
    bs();
    const ds = "KHR_materials_coat";

    function Ss(DD) {
      const zD = DD.coatRoughnessAnisotropyTexture,
        wD = DD.geometryCoatTangentTexture;
      return `${zD&&zD.getInternalTexture()?zD.getInternalTexture().uniqueId:"NoStrength"}_${wD&&wD.getInternalTexture()?wD.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function is(DD, zD) {
      const wD = new TD.d(zD.name, zD.Ul());
      return wD._texture = DD, wD.coordinatesIndex = zD.coordinatesIndex, zD instanceof TD.d && (wD.uOffset = zD.uOffset, wD.vOffset = zD.vOffset, wD.uScale = zD.uScale, wD.vScale = zD.vScale, wD.wAng = zD.wAng), wD.wrapU = zD.wrapU, wD.wrapV = zD.wrapV, wD
    }
    class ls {
      constructor(DD) {
        this.name = ds, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = DD
      }
      dispose() {
        for (const DD of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[DD].dispose()
        }
        this._mergedTexturesMap = {};
        for (const DD of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[DD].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        const pD = [];
        if (wD instanceof Ez) {
          if (wD.clearCoat.isEnabled) return wD.clearCoat.texture && pD.push(wD.clearCoat.texture), !wD.clearCoat.useRoughnessFromMainTexture && wD.clearCoat.textureRoughness && pD.push(wD.clearCoat.textureRoughness), wD.clearCoat.bumpTexture && pD.push(wD.clearCoat.bumpTexture), wD.clearCoat.tintTexture && pD.push(wD.clearCoat.tintTexture), pD
        } else if (wD instanceof Hz && wD.coatWeight > 0) {
          let DD = !1;
          if (wD.coatWeightTexture ? wD.coatRoughnessTexture ? wD._useCoatRoughnessFromGreenChannel && wD.coatWeightTexture.getInternalTexture() === wD.coatRoughnessTexture.getInternalTexture() ? (pD.push(wD.coatWeightTexture), pD.push(wD.coatRoughnessTexture)) : DD = !0 : pD.push(wD.coatWeightTexture) : wD.coatRoughnessTexture && (wD._useCoatRoughnessFromGreenChannel ? pD.push(wD.coatRoughnessTexture) : DD = !0), DD) {
            const DD = function(DD) {
              const zD = DD.coatWeightTexture,
                wD = zD && zD.getInternalTexture() ? zD.getInternalTexture().uniqueId : "NoCoat",
                pD = DD.coatRoughnessTexture;
              return `${wD}_${pD&&pD.getInternalTexture()?pD.getInternalTexture().uniqueId:"NoRoughness"}`
            }(wD);
            if (!this._cachedInternalTexturesMap[DD]) {
              const zD = await async function(DD) {
                const zD = DD.Ul(),
                  wD = DD.coatWeightTexture,
                  pD = DD.coatRoughnessTexture;
                return wD || pD ? (await rw("CoatTexture", Rw(wD ? Lw(wD, 0) : gw(1), pD ? Lw(pD, DD._useCoatRoughnessFromGreenChannel ? 1 : 0) : gw(1)), zD)).getInternalTexture() : null
              }(wD);
              zD && (this._cachedInternalTexturesMap[DD] = zD)
            }
            this._cachedInternalTexturesMap[DD] && (wD.coatWeightTexture && (this._mergedTexturesMap[wD.coatWeightTexture.uniqueId] = is(this._cachedInternalTexturesMap[DD], wD.coatWeightTexture), pD.push(this._mergedTexturesMap[wD.coatWeightTexture.uniqueId])), wD.coatRoughnessTexture && (this._mergedTexturesMap[wD.coatRoughnessTexture.uniqueId] = is(this._cachedInternalTexturesMap[DD], wD.coatRoughnessTexture), pD.push(this._mergedTexturesMap[wD.coatRoughnessTexture.uniqueId])))
          }
          if (wD.geometryCoatNormalTexture && pD.push(wD.geometryCoatNormalTexture), wD.coatColorTexture && pD.push(wD.coatColorTexture), wD.coatRoughnessAnisotropy > 0) {
            const DD = Ss(wD);
            if (this._mergedTexturesMap[DD]) pD.push(this._mergedTexturesMap[DD]);
            else {
              const zD = await async function(DD) {
                const zD = DD.Ul(),
                  wD = DD.coatRoughnessAnisotropyTexture,
                  pD = DD.geometryCoatTangentTexture;
                return wD || pD ? await rw("AnisotropyTexture", Rw(pD ? Lw(pD, 0) : gw(1), pD ? Lw(pD, 1) : gw(0), wD ? Lw(wD, 0) : gw(1)), zD) : null
              }(wD);
              zD && (pD.push(zD), this._mergedTexturesMap[DD] = zD)
            }
            return pD
          }
          return pD
        }
        return []
      }
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((DD => {
          var pD;
          if (wD instanceof Ez) {
            if (!wD.clearCoat.isEnabled) return void DD(zD);
            this._wasUsed = !0, zD.extensions = zD.extensions || {};
            const pD = this._exporter._materialExporter.getTextureInfo(wD.clearCoat.texture);
            let sD, KD;
            sD = wD.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(wD.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(wD.clearCoat.textureRoughness), wD.clearCoat.isTintEnabled && (KD = this._exporter._materialExporter.getTextureInfo(wD.clearCoat.tintTexture));
            const rD = this._exporter._materialExporter.getTextureInfo(wD.clearCoat.bumpTexture),
              LD = wD.clearCoat.indexOfRefraction,
              cD = {
                coatFactor: wD.clearCoat.intensity,
                coatTexture: pD ?? void 0,
                coatRoughnessFactor: wD.clearCoat.roughness,
                coatRoughnessTexture: sD ?? void 0,
                coatNormalTexture: rD ?? void 0,
                coatColorFactor: wD.clearCoat.tintColor.QpD(),
                coatColorTexture: KD ?? void 0,
                coatIor: 1.5 !== LD ? LD : void 0
              };
            null === cD.coatTexture && null === cD.coatRoughnessTexture && null === cD.coatRoughnessTexture && null === cD.coatColorTexture || this._exporter._materialNeedsUVsSet.add(wD), zD.extensions[ds] = cD
          } else if (wD instanceof Hz) {
            if (0 == wD.coatWeight) return void DD(zD);
            let sD, KD, rD, LD;
            this._wasUsed = !0, zD.extensions = zD.extensions || {}, wD.coatWeightTexture && (sD = this._mergedTexturesMap[wD.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[wD.coatWeightTexture.uniqueId] : wD.coatWeightTexture, KD = this._exporter._materialExporter.getTextureInfo(sD)), wD.coatRoughnessTexture && (rD = this._mergedTexturesMap[wD.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[wD.coatRoughnessTexture.uniqueId] : wD.coatRoughnessTexture, LD = this._exporter._materialExporter.getTextureInfo(rD));
            const cD = this._exporter._materialExporter.getTextureInfo(wD.geometryCoatNormalTexture),
              gD = this._exporter._materialExporter.getTextureInfo(wD.coatColorTexture),
              RD = wD.coatIor,
              AD = wD.coatDarkening,
              UD = wD.coatRoughnessTexture,
              fD = Ss(wD),
              ID = this._mergedTexturesMap[fD];
            let BD, GD = 0,
              hD = 0;
            if (wD.coatRoughnessAnisotropy > 0) {
              if (UD || ID) {
                const DD = ID ? this._exporter._materialExporter.getTextureInfo(ID) : null;
                GD = wD.coatRoughnessAnisotropy, hD = wD.geometryCoatTangentAngle, BD = DD || void 0
              } else {
                let DD = wD.coatRoughness,
                  pD = wD.coatRoughnessAnisotropy;
                if (!wD._useGltfStyleAnisotropy) {
                  const zD = function(DD, zD) {
                    const wD = DD * DD,
                      pD = wD * Math.sqrt(2 / (1 + (1 - zD) * (1 - zD))),
                      sD = (1 - zD) * pD;
                    return {
                      newBaseRoughness: Math.sqrt(sD),
                      newAnisotropyStrength: Math.min(Math.sqrt((pD - wD) / Math.max(1 - wD, 1e-4)), 1)
                    }
                  }(wD.coatRoughness, wD.coatRoughnessAnisotropy);
                  DD = zD.newBaseRoughness, pD = zD.newAnisotropyStrength
                }
                zD.pbrMetallicRoughness && (zD.pbrMetallicRoughness.roughnessFactor = DD), GD = pD, hD = wD.geometryCoatTangentAngle + .5 * Math.PI, BD = void 0
              }
              wD._useGltfStyleAnisotropy || (zD.extensions.KHR_materials_openpbr = {}, (pD = this._exporter._glTF).extensionsUsed || (pD.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const nD = {
              coatFactor: wD.coatWeight,
              coatTexture: KD ?? void 0,
              coatRoughnessFactor: wD.coatRoughness,
              coatRoughnessTexture: LD ?? void 0,
              coatNormalTexture: cD ?? void 0,
              coatColorFactor: wD.coatColor.QpD(),
              coatColorTexture: gD ?? void 0,
              coatIor: 1.5 !== RD ? RD : void 0,
              coatDarkeningFactor: 1 !== AD ? AD : void 0,
              coatAnisotropyRotation: hD,
              coatAnisotropyStrength: GD,
              coatAnisotropyTexture: BD
            };
            null === nD.coatTexture && null === nD.coatRoughnessTexture && null === nD.coatRoughnessTexture && null === nD.coatAnisotropyTexture && null === nD.coatColorTexture || this._exporter._materialNeedsUVsSet.add(wD), zD.extensions[ds] = nD
          }
          DD(zD)
        }))
      }
    }
    let Ws = !1;

    function Ns() {
      Ws || (Ws = !0, ip.RegisterExtension(ds, (DD => new ls(DD))))
    }
    Ns();
    let Zs = (() => {
      var DD, zD, wD, pD, sD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD, nD, MD, OD, JD, ED, QD, XD, CD, xD, TD, bD, jD, dD, iD, lD, WD, ND, ZD, yD, kD, mD, eD, oD, uD, vD, tD, FD, YD, HD, qD, Dz, zz, wz, pz, sz, Kz, rz, Lz, cz, gz, Rz, Az, Uz, fz, Iz, Bz, Gz, hz, nz, Mz;
      let Oz, Jz, Xz, Vz, Pz, Cz, xz, Tz, bz, jz, dz, Sz, iz, lz, Wz, Nz, Zz, yz, kz, mz, ez, oz, az, uz, vz, tz, Fz, Yz, Hz, qz, Dw, zw, ww, pw, sw, Kw, rw, Lw, gw, Rw, Aw, Uw, fw, Iw, Bw, Gw, hw, nw, Mw, Ow, Jw, Ew, Qw, Xw, Vw, Pw, Cw, xw, Tw, bw, jw, dw, Sw, iw, lw, Ww, Nw, Zw, yw = Ez,
        kw = [],
        mw = [],
        ew = [],
        ow = [],
        aw = [],
        uw = [],
        vw = [],
        tw = [],
        Fw = [],
        Yw = [],
        Hw = [],
        qw = [],
        Dp = [],
        zp = [],
        wp = [],
        pp = [],
        sp = [],
        Kp = [],
        rp = [],
        Lp = [],
        cp = [],
        gp = [],
        Rp = [],
        Ap = [],
        Up = [],
        fp = [],
        Ip = [],
        Bp = [],
        Gp = [],
        hp = [],
        np = [],
        Mp = [],
        Op = [],
        Jp = [],
        Ep = [],
        Qp = [],
        Xp = [],
        Vp = [],
        Pp = [],
        Cp = [],
        xp = [],
        Tp = [],
        bp = [],
        jp = [],
        dp = [],
        Sp = [],
        ip = [],
        lp = [],
        Wp = [],
        Np = [],
        Zp = [],
        yp = [],
        kp = [],
        mp = [],
        ep = [],
        op = [],
        ap = [],
        vp = [],
        tp = [],
        Fp = [],
        Yp = [],
        Hp = [],
        qp = [],
        Ds = [],
        zs = [],
        ws = [],
        ps = [],
        ss = [],
        Ks = [],
        rs = [],
        Ls = [],
        cs = [],
        gs = [],
        Rs = [],
        As = [],
        Us = [],
        fs = [],
        Is = [],
        Bs = [],
        Gs = [],
        hs = [],
        ns = [],
        Ms = [],
        Os = [],
        Es = [],
        Qs = [],
        Xs = [],
        Vs = [],
        Ps = [],
        Cs = [],
        xs = [],
        Ts = [],
        bs = [],
        ds = [],
        Ss = [],
        is = [],
        ls = [],
        Ws = [],
        Ns = [],
        Zs = [],
        ys = [],
        ks = [],
        ms = [],
        es = [],
        os = [],
        as = [],
        us = [],
        vs = [],
        ts = [],
        Fs = [],
        Ys = [],
        Hs = [],
        qs = [],
        DK = [],
        zK = [],
        wK = [],
        pK = [],
        sK = [],
        KK = [],
        rK = [],
        LK = [],
        cK = [],
        gK = [],
        RK = [],
        AK = [],
        UK = [],
        fK = [],
        IK = [],
        BK = [],
        GK = [],
        hK = [],
        nK = [],
        MK = [];
      return DD = class extends yw {
        get directIntensity() {
          return (0, VD.c)(this, zD, "f")
        }
        set directIntensity(DD) {
          (0, VD.g)(this, zD, DD, "f")
        }
        get emissiveIntensity() {
          return (0, VD.c)(this, wD, "f")
        }
        set emissiveIntensity(DD) {
          (0, VD.g)(this, wD, DD, "f")
        }
        get environmentIntensity() {
          return (0, VD.c)(this, pD, "f")
        }
        set environmentIntensity(DD) {
          (0, VD.g)(this, pD, DD, "f")
        }
        get specularIntensity() {
          return (0, VD.c)(this, sD, "f")
        }
        set specularIntensity(DD) {
          (0, VD.g)(this, sD, DD, "f")
        }
        get disableBumpMap() {
          return (0, VD.c)(this, rD, "f")
        }
        set disableBumpMap(DD) {
          (0, VD.g)(this, rD, DD, "f")
        }
        get albedoTexture() {
          return (0, VD.c)(this, LD, "f")
        }
        set albedoTexture(DD) {
          (0, VD.g)(this, LD, DD, "f")
        }
        get baseWeightTexture() {
          return (0, VD.c)(this, cD, "f")
        }
        set baseWeightTexture(DD) {
          (0, VD.g)(this, cD, DD, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, VD.c)(this, gD, "f")
        }
        set baseDiffuseRoughnessTexture(DD) {
          (0, VD.g)(this, gD, DD, "f")
        }
        get ambientTexture() {
          return (0, VD.c)(this, RD, "f")
        }
        set ambientTexture(DD) {
          (0, VD.g)(this, RD, DD, "f")
        }
        get ambientTextureStrength() {
          return (0, VD.c)(this, AD, "f")
        }
        set ambientTextureStrength(DD) {
          (0, VD.g)(this, AD, DD, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, VD.c)(this, UD, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(DD) {
          (0, VD.g)(this, UD, DD, "f")
        }
        get opacityTexture() {
          return (0, VD.c)(this, fD, "f")
        }
        set opacityTexture(DD) {
          (0, VD.g)(this, fD, DD, "f")
        }
        get reflectionTexture() {
          return (0, VD.c)(this, ID, "f")
        }
        set reflectionTexture(DD) {
          (0, VD.g)(this, ID, DD, "f")
        }
        get emissiveTexture() {
          return (0, VD.c)(this, BD, "f")
        }
        set emissiveTexture(DD) {
          (0, VD.g)(this, BD, DD, "f")
        }
        get reflectivityTexture() {
          return (0, VD.c)(this, GD, "f")
        }
        set reflectivityTexture(DD) {
          (0, VD.g)(this, GD, DD, "f")
        }
        get metallicTexture() {
          return (0, VD.c)(this, hD, "f")
        }
        set metallicTexture(DD) {
          (0, VD.g)(this, hD, DD, "f")
        }
        get metallic() {
          return (0, VD.c)(this, nD, "f")
        }
        set metallic(DD) {
          (0, VD.g)(this, nD, DD, "f")
        }
        get roughness() {
          return (0, VD.c)(this, MD, "f")
        }
        set roughness(DD) {
          (0, VD.g)(this, MD, DD, "f")
        }
        get metallicF0Factor() {
          return (0, VD.c)(this, OD, "f")
        }
        set metallicF0Factor(DD) {
          (0, VD.g)(this, OD, DD, "f")
        }
        get metallicReflectanceColor() {
          return (0, VD.c)(this, JD, "f")
        }
        set metallicReflectanceColor(DD) {
          (0, VD.g)(this, JD, DD, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, VD.c)(this, ED, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(DD) {
          (0, VD.g)(this, ED, DD, "f")
        }
        get metallicReflectanceTexture() {
          return (0, VD.c)(this, QD, "f")
        }
        set metallicReflectanceTexture(DD) {
          (0, VD.g)(this, QD, DD, "f")
        }
        get reflectanceTexture() {
          return (0, VD.c)(this, XD, "f")
        }
        set reflectanceTexture(DD) {
          (0, VD.g)(this, XD, DD, "f")
        }
        get microSurfaceTexture() {
          return (0, VD.c)(this, CD, "f")
        }
        set microSurfaceTexture(DD) {
          (0, VD.g)(this, CD, DD, "f")
        }
        get bumpTexture() {
          return (0, VD.c)(this, xD, "f")
        }
        set bumpTexture(DD) {
          (0, VD.g)(this, xD, DD, "f")
        }
        get lightmapTexture() {
          return (0, VD.c)(this, TD, "f")
        }
        set lightmapTexture(DD) {
          (0, VD.g)(this, TD, DD, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(DD) {
          this.subSurface.refractionTexture = DD, DD ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, VD.c)(this, bD, "f")
        }
        set ambientColor(DD) {
          (0, VD.g)(this, bD, DD, "f")
        }
        get albedoColor() {
          return (0, VD.c)(this, jD, "f")
        }
        set albedoColor(DD) {
          (0, VD.g)(this, jD, DD, "f")
        }
        get baseWeight() {
          return (0, VD.c)(this, dD, "f")
        }
        set baseWeight(DD) {
          (0, VD.g)(this, dD, DD, "f")
        }
        get baseDiffuseRoughness() {
          return (0, VD.c)(this, iD, "f")
        }
        set baseDiffuseRoughness(DD) {
          (0, VD.g)(this, iD, DD, "f")
        }
        get reflectivityColor() {
          return (0, VD.c)(this, lD, "f")
        }
        set reflectivityColor(DD) {
          (0, VD.g)(this, lD, DD, "f")
        }
        get reflectionColor() {
          return (0, VD.c)(this, WD, "f")
        }
        set reflectionColor(DD) {
          (0, VD.g)(this, WD, DD, "f")
        }
        get emissiveColor() {
          return (0, VD.c)(this, ND, "f")
        }
        set emissiveColor(DD) {
          (0, VD.g)(this, ND, DD, "f")
        }
        get microSurface() {
          return (0, VD.c)(this, ZD, "f")
        }
        set microSurface(DD) {
          (0, VD.g)(this, ZD, DD, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(DD) {
          this.subSurface.indexOfRefraction = DD
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(DD) {
          this.subSurface.invertRefractionY = DD
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(DD) {
          this.subSurface.linkRefractionWithTransparency = DD, DD && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, VD.c)(this, yD, "f")
        }
        set useLightmapAsShadowmap(DD) {
          (0, VD.g)(this, yD, DD, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, VD.c)(this, kD, "f")
        }
        set useAlphaFromAlbedoTexture(DD) {
          (0, VD.g)(this, kD, DD, "f")
        }
        get forceAlphaTest() {
          return (0, VD.c)(this, mD, "f")
        }
        set forceAlphaTest(DD) {
          (0, VD.g)(this, mD, DD, "f")
        }
        get alphaCutOff() {
          return (0, VD.c)(this, eD, "f")
        }
        set alphaCutOff(DD) {
          (0, VD.g)(this, eD, DD, "f")
        }
        get useSpecularOverAlpha() {
          return (0, VD.c)(this, oD, "f")
        }
        set useSpecularOverAlpha(DD) {
          (0, VD.g)(this, oD, DD, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, VD.c)(this, uD, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(DD) {
          (0, VD.g)(this, uD, DD, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, VD.c)(this, vD, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(DD) {
          (0, VD.g)(this, vD, DD, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, VD.c)(this, tD, "f")
        }
        set useRoughnessFromMetallicTextureGreen(DD) {
          (0, VD.g)(this, tD, DD, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, VD.c)(this, FD, "f")
        }
        set useMetallnessFromMetallicTextureBlue(DD) {
          (0, VD.g)(this, FD, DD, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, VD.c)(this, YD, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(DD) {
          (0, VD.g)(this, YD, DD, "f")
        }
        get useAmbientInGrayScale() {
          return (0, VD.c)(this, HD, "f")
        }
        set useAmbientInGrayScale(DD) {
          (0, VD.g)(this, HD, DD, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, VD.c)(this, qD, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(DD) {
          (0, VD.g)(this, qD, DD, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === Ez.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(DD) {
          DD !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = DD ? Ez.LIGHTFALLOFF_PHYSICAL : Ez.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === Ez.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(DD) {
          DD !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = DD ? Ez.LIGHTFALLOFF_GLTF : Ez.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, VD.c)(this, Dz, "f")
        }
        set useRadianceOverAlpha(DD) {
          (0, VD.g)(this, Dz, DD, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, VD.c)(this, zz, "f")
        }
        set useObjectSpaceNormalMap(DD) {
          (0, VD.g)(this, zz, DD, "f")
        }
        get useParallax() {
          return (0, VD.c)(this, wz, "f")
        }
        set useParallax(DD) {
          (0, VD.g)(this, wz, DD, "f")
        }
        get useParallaxOcclusion() {
          return (0, VD.c)(this, pz, "f")
        }
        set useParallaxOcclusion(DD) {
          (0, VD.g)(this, pz, DD, "f")
        }
        get parallaxScaleBias() {
          return (0, VD.c)(this, sz, "f")
        }
        set parallaxScaleBias(DD) {
          (0, VD.g)(this, sz, DD, "f")
        }
        get disableLighting() {
          return (0, VD.c)(this, Kz, "f")
        }
        set disableLighting(DD) {
          (0, VD.g)(this, Kz, DD, "f")
        }
        get forceIrradianceInFragment() {
          return (0, VD.c)(this, rz, "f")
        }
        set forceIrradianceInFragment(DD) {
          (0, VD.g)(this, rz, DD, "f")
        }
        get maxSimultaneousLights() {
          return (0, VD.c)(this, Lz, "f")
        }
        set maxSimultaneousLights(DD) {
          (0, VD.g)(this, Lz, DD, "f")
        }
        get invertNormalMapX() {
          return (0, VD.c)(this, cz, "f")
        }
        set invertNormalMapX(DD) {
          (0, VD.g)(this, cz, DD, "f")
        }
        get invertNormalMapY() {
          return (0, VD.c)(this, gz, "f")
        }
        set invertNormalMapY(DD) {
          (0, VD.g)(this, gz, DD, "f")
        }
        get twoSidedLighting() {
          return (0, VD.c)(this, Rz, "f")
        }
        set twoSidedLighting(DD) {
          (0, VD.g)(this, Rz, DD, "f")
        }
        get useAlphaFresnel() {
          return (0, VD.c)(this, Az, "f")
        }
        set useAlphaFresnel(DD) {
          (0, VD.g)(this, Az, DD, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, VD.c)(this, Uz, "f")
        }
        set useLinearAlphaFresnel(DD) {
          (0, VD.g)(this, Uz, DD, "f")
        }
        get environmentBRDFTexture() {
          return (0, VD.c)(this, fz, "f")
        }
        set environmentBRDFTexture(DD) {
          (0, VD.g)(this, fz, DD, "f")
        }
        get forceNormalForward() {
          return (0, VD.c)(this, Iz, "f")
        }
        set forceNormalForward(DD) {
          (0, VD.g)(this, Iz, DD, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, VD.c)(this, Bz, "f")
        }
        set enableSpecularAntiAliasing(DD) {
          (0, VD.g)(this, Bz, DD, "f")
        }
        get useHorizonOcclusion() {
          return (0, VD.c)(this, Gz, "f")
        }
        set useHorizonOcclusion(DD) {
          (0, VD.g)(this, Gz, DD, "f")
        }
        get useRadianceOcclusion() {
          return (0, VD.c)(this, hz, "f")
        }
        set useRadianceOcclusion(DD) {
          (0, VD.g)(this, hz, DD, "f")
        }
        get unlit() {
          return (0, VD.c)(this, nz, "f")
        }
        set unlit(DD) {
          (0, VD.g)(this, nz, DD, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, VD.c)(this, Mz, "f")
        }
        set applyDecalMapAfterDetailMap(DD) {
          (0, VD.g)(this, Mz, DD, "f")
        }
        constructor(KD, PD) {
          super(KD, PD, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), zD.set(this, ((0, VD.m)(this, kw), (0, VD.m)(this, mw, 1))), wD.set(this, ((0, VD.m)(this, ew), (0, VD.m)(this, ow, 1))), pD.set(this, ((0, VD.m)(this, aw), (0, VD.m)(this, uw, 1))), sD.set(this, ((0, VD.m)(this, vw), (0, VD.m)(this, tw, 1))), rD.set(this, ((0, VD.m)(this, Fw), (0, VD.m)(this, Yw, !1))), LD.set(this, ((0, VD.m)(this, Hw), (0, VD.m)(this, qw, void 0))), cD.set(this, ((0, VD.m)(this, Dp), (0, VD.m)(this, zp, void 0))), gD.set(this, ((0, VD.m)(this, wp), (0, VD.m)(this, pp, void 0))), RD.set(this, ((0, VD.m)(this, sp), (0, VD.m)(this, Kp, void 0))), AD.set(this, ((0, VD.m)(this, rp), (0, VD.m)(this, Lp, 1))), UD.set(this, ((0, VD.m)(this, cp), (0, VD.m)(this, gp, DD.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), fD.set(this, ((0, VD.m)(this, Rp), (0, VD.m)(this, Ap, void 0))), ID.set(this, ((0, VD.m)(this, Up), (0, VD.m)(this, fp, void 0))), BD.set(this, ((0, VD.m)(this, Ip), (0, VD.m)(this, Bp, void 0))), GD.set(this, ((0, VD.m)(this, Gp), (0, VD.m)(this, hp, void 0))), hD.set(this, ((0, VD.m)(this, np), (0, VD.m)(this, Mp, void 0))), nD.set(this, ((0, VD.m)(this, Op), (0, VD.m)(this, Jp, void 0))), MD.set(this, ((0, VD.m)(this, Ep), (0, VD.m)(this, Qp, void 0))), OD.set(this, ((0, VD.m)(this, Xp), (0, VD.m)(this, Vp, 1))), JD.set(this, ((0, VD.m)(this, Pp), (0, VD.m)(this, Cp, aD.d.White()))), ED.set(this, ((0, VD.m)(this, xp), (0, VD.m)(this, Tp, !1))), QD.set(this, ((0, VD.m)(this, bp), (0, VD.m)(this, jp, void 0))), XD.set(this, ((0, VD.m)(this, dp), (0, VD.m)(this, Sp, void 0))), CD.set(this, ((0, VD.m)(this, ip), (0, VD.m)(this, lp, void 0))), xD.set(this, ((0, VD.m)(this, Wp), (0, VD.m)(this, Np, void 0))), TD.set(this, ((0, VD.m)(this, Zp), (0, VD.m)(this, yp, void 0))), bD.set(this, ((0, VD.m)(this, kp), (0, VD.m)(this, mp, new aD.d(0, 0, 0)))), jD.set(this, ((0, VD.m)(this, ep), (0, VD.m)(this, op, new aD.d(1, 1, 1)))), dD.set(this, ((0, VD.m)(this, ap), (0, VD.m)(this, vp, 1))), iD.set(this, ((0, VD.m)(this, tp), (0, VD.m)(this, Fp, void 0))), lD.set(this, ((0, VD.m)(this, Yp), (0, VD.m)(this, Hp, new aD.d(1, 1, 1)))), WD.set(this, ((0, VD.m)(this, qp), (0, VD.m)(this, Ds, new aD.d(1, 1, 1)))), ND.set(this, ((0, VD.m)(this, zs), (0, VD.m)(this, ws, new aD.d(0, 0, 0)))), ZD.set(this, ((0, VD.m)(this, ps), (0, VD.m)(this, ss, 1))), yD.set(this, ((0, VD.m)(this, Ks), (0, VD.m)(this, rs, !1))), kD.set(this, ((0, VD.m)(this, Ls), (0, VD.m)(this, cs, !1))), mD.set(this, ((0, VD.m)(this, gs), (0, VD.m)(this, Rs, !1))), eD.set(this, ((0, VD.m)(this, As), (0, VD.m)(this, Us, .4))), oD.set(this, ((0, VD.m)(this, fs), (0, VD.m)(this, Is, !0))), uD.set(this, ((0, VD.m)(this, Bs), (0, VD.m)(this, Gs, !1))), vD.set(this, ((0, VD.m)(this, hs), (0, VD.m)(this, ns, !0))), tD.set(this, ((0, VD.m)(this, Ms), (0, VD.m)(this, Os, !1))), FD.set(this, ((0, VD.m)(this, Es), (0, VD.m)(this, Qs, !1))), YD.set(this, ((0, VD.m)(this, Xs), (0, VD.m)(this, Vs, !1))), HD.set(this, ((0, VD.m)(this, Ps), (0, VD.m)(this, Cs, !1))), qD.set(this, ((0, VD.m)(this, xs), (0, VD.m)(this, Ts, !1))), Dz.set(this, ((0, VD.m)(this, bs), (0, VD.m)(this, ds, !0))), zz.set(this, ((0, VD.m)(this, Ss), (0, VD.m)(this, is, !1))), wz.set(this, ((0, VD.m)(this, ls), (0, VD.m)(this, Ws, !1))), pz.set(this, ((0, VD.m)(this, Ns), (0, VD.m)(this, Zs, !1))), sz.set(this, ((0, VD.m)(this, ys), (0, VD.m)(this, ks, .05))), Kz.set(this, ((0, VD.m)(this, ms), (0, VD.m)(this, es, !1))), rz.set(this, ((0, VD.m)(this, os), (0, VD.m)(this, as, !1))), Lz.set(this, ((0, VD.m)(this, us), (0, VD.m)(this, vs, 4))), cz.set(this, ((0, VD.m)(this, ts), (0, VD.m)(this, Fs, !1))), gz.set(this, ((0, VD.m)(this, Ys), (0, VD.m)(this, Hs, !1))), Rz.set(this, ((0, VD.m)(this, qs), (0, VD.m)(this, DK, !1))), Az.set(this, ((0, VD.m)(this, zK), (0, VD.m)(this, wK, !1))), Uz.set(this, ((0, VD.m)(this, pK), (0, VD.m)(this, sK, !1))), fz.set(this, ((0, VD.m)(this, KK), (0, VD.m)(this, rK, null))), Iz.set(this, ((0, VD.m)(this, LK), (0, VD.m)(this, cK, !1))), Bz.set(this, ((0, VD.m)(this, gK), (0, VD.m)(this, RK, !1))), Gz.set(this, ((0, VD.m)(this, AK), (0, VD.m)(this, UK, !0))), hz.set(this, ((0, VD.m)(this, fK), (0, VD.m)(this, IK, !0))), nz.set(this, ((0, VD.m)(this, BK), (0, VD.m)(this, GK, !1))), Mz.set(this, ((0, VD.m)(this, hK), (0, VD.m)(this, nK, !1))), (0, VD.m)(this, MK), this._environmentBRDFTexture = SD(this.Ul())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(zD) {
          let wD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const sD = Qz.d.Clone((() => new DD(zD, this.Ul())), this, {
            cloneTexturesOnlyOnce: wD
          });
          return sD.id = zD, sD.name = zD, this.stencil.copyTo(sD.stencil), this._clonePlugins(sD, pD), sD
        }
        serialize() {
          const DD = super.serialize();
          return DD.customType = "BABYLON.PBRMaterial", DD
        }
        static Parse(zD, wD, pD) {
          const sD = Qz.d.Parse((() => new DD(zD.name, wD)), zD, wD, pD);
          return zD.stencil && sD.stencil.parse(zD.stencil, wD, pD), KD.b._ParsePlugins(zD, sD, wD, pD), zD.clearCoat && sD.clearCoat.parse(zD.clearCoat, wD, pD), zD.anisotropy && sD.anisotropy.parse(zD.anisotropy, wD, pD), zD.brdf && sD.brdf.parse(zD.brdf, wD, pD), zD.sheen && sD.sheen.parse(zD.sheen, wD, pD), zD.subSurface && sD.subSurface.parse(zD.subSurface, wD, pD), zD.iridescence && sD.iridescence.parse(zD.iridescence, wD, pD), sD
        }
      }, zD = new WeakMap, wD = new WeakMap, pD = new WeakMap, sD = new WeakMap, rD = new WeakMap, LD = new WeakMap, cD = new WeakMap, gD = new WeakMap, RD = new WeakMap, AD = new WeakMap, UD = new WeakMap, fD = new WeakMap, ID = new WeakMap, BD = new WeakMap, GD = new WeakMap, hD = new WeakMap, nD = new WeakMap, MD = new WeakMap, OD = new WeakMap, JD = new WeakMap, ED = new WeakMap, QD = new WeakMap, XD = new WeakMap, CD = new WeakMap, xD = new WeakMap, TD = new WeakMap, bD = new WeakMap, jD = new WeakMap, dD = new WeakMap, iD = new WeakMap, lD = new WeakMap, WD = new WeakMap, ND = new WeakMap, ZD = new WeakMap, yD = new WeakMap, kD = new WeakMap, mD = new WeakMap, eD = new WeakMap, oD = new WeakMap, uD = new WeakMap, vD = new WeakMap, tD = new WeakMap, FD = new WeakMap, YD = new WeakMap, HD = new WeakMap, qD = new WeakMap, Dz = new WeakMap, zz = new WeakMap, wz = new WeakMap, pz = new WeakMap, sz = new WeakMap, Kz = new WeakMap, rz = new WeakMap, Lz = new WeakMap, cz = new WeakMap, gz = new WeakMap, Rz = new WeakMap, Az = new WeakMap, Uz = new WeakMap, fz = new WeakMap, Iz = new WeakMap, Bz = new WeakMap, Gz = new WeakMap, hz = new WeakMap, nz = new WeakMap, Mz = new WeakMap, (() => {
        const zD = "function" === typeof Symbol && Symbol.metadata ? Object.create(yw[Symbol.metadata] ?? null) : void 0;
        Oz = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Jz = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Vz = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Pz = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Cz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], xz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Tz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], bz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], jz = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], dz = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Sz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], iz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], lz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Wz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Nz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Zz = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], yz = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], kz = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], mz = [(0, PD.k)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], ez = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], oz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], az = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], uz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], vz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], tz = [(0, PD.w)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty", null)], Fz = [(0, PD.k)("ambient"), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Yz = [(0, PD.k)("albedo"), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Hz = [(0, PD.C)("baseWeight"), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], qz = [(0, PD.C)("baseDiffuseRoughness"), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Dw = [(0, PD.k)("reflectivity"), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], zw = [(0, PD.k)("reflection"), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], ww = [(0, PD.k)("emissive"), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], pw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], sw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Kw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], rw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Lw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], gw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Rw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Aw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Uw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], fw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Iw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Bw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Gw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], hw = [(0, PD.C)()], nw = [(0, PD.C)()], Mw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Ow = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Jw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Ew = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Qw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Xw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsLightsDirty")], Vw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Pw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsLightsDirty")], Cw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], xw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Tw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], bw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], jw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], dw = [(0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Sw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], iw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], lw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Ww = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsTexturesDirty")], Nw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], Zw = [(0, PD.C)(), (0, PD.e)("_markAllSubMeshesAsMiscDirty")], (0, VD.i)(DD, null, Oz, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "directIntensity" in DD,
            get: DD => DD.directIntensity,
            set: (DD, zD) => {
              DD.directIntensity = zD
            }
          },
          metadata: zD
        }, mw, ew), (0, VD.i)(DD, null, Jz, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "emissiveIntensity" in DD,
            get: DD => DD.emissiveIntensity,
            set: (DD, zD) => {
              DD.emissiveIntensity = zD
            }
          },
          metadata: zD
        }, ow, aw), (0, VD.i)(DD, null, Xz, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "environmentIntensity" in DD,
            get: DD => DD.environmentIntensity,
            set: (DD, zD) => {
              DD.environmentIntensity = zD
            }
          },
          metadata: zD
        }, uw, vw), (0, VD.i)(DD, null, Vz, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "specularIntensity" in DD,
            get: DD => DD.specularIntensity,
            set: (DD, zD) => {
              DD.specularIntensity = zD
            }
          },
          metadata: zD
        }, tw, Fw), (0, VD.i)(DD, null, Pz, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: DD => "disableBumpMap" in DD,
            get: DD => DD.disableBumpMap,
            set: (DD, zD) => {
              DD.disableBumpMap = zD
            }
          },
          metadata: zD
        }, Yw, Hw), (0, VD.i)(DD, null, Cz, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "albedoTexture" in DD,
            get: DD => DD.albedoTexture,
            set: (DD, zD) => {
              DD.albedoTexture = zD
            }
          },
          metadata: zD
        }, qw, Dp), (0, VD.i)(DD, null, xz, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "baseWeightTexture" in DD,
            get: DD => DD.baseWeightTexture,
            set: (DD, zD) => {
              DD.baseWeightTexture = zD
            }
          },
          metadata: zD
        }, zp, wp), (0, VD.i)(DD, null, Tz, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "baseDiffuseRoughnessTexture" in DD,
            get: DD => DD.baseDiffuseRoughnessTexture,
            set: (DD, zD) => {
              DD.baseDiffuseRoughnessTexture = zD
            }
          },
          metadata: zD
        }, pp, sp), (0, VD.i)(DD, null, bz, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "ambientTexture" in DD,
            get: DD => DD.ambientTexture,
            set: (DD, zD) => {
              DD.ambientTexture = zD
            }
          },
          metadata: zD
        }, Kp, rp), (0, VD.i)(DD, null, jz, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: DD => "ambientTextureStrength" in DD,
            get: DD => DD.ambientTextureStrength,
            set: (DD, zD) => {
              DD.ambientTextureStrength = zD
            }
          },
          metadata: zD
        }, Lp, cp), (0, VD.i)(DD, null, dz, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: DD => "ambientTextureImpactOnAnalyticalLights" in DD,
            get: DD => DD.ambientTextureImpactOnAnalyticalLights,
            set: (DD, zD) => {
              DD.ambientTextureImpactOnAnalyticalLights = zD
            }
          },
          metadata: zD
        }, gp, Rp), (0, VD.i)(DD, null, Sz, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "opacityTexture" in DD,
            get: DD => DD.opacityTexture,
            set: (DD, zD) => {
              DD.opacityTexture = zD
            }
          },
          metadata: zD
        }, Ap, Up), (0, VD.i)(DD, null, iz, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "reflectionTexture" in DD,
            get: DD => DD.reflectionTexture,
            set: (DD, zD) => {
              DD.reflectionTexture = zD
            }
          },
          metadata: zD
        }, fp, Ip), (0, VD.i)(DD, null, lz, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "emissiveTexture" in DD,
            get: DD => DD.emissiveTexture,
            set: (DD, zD) => {
              DD.emissiveTexture = zD
            }
          },
          metadata: zD
        }, Bp, Gp), (0, VD.i)(DD, null, Wz, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "reflectivityTexture" in DD,
            get: DD => DD.reflectivityTexture,
            set: (DD, zD) => {
              DD.reflectivityTexture = zD
            }
          },
          metadata: zD
        }, hp, np), (0, VD.i)(DD, null, Nz, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "metallicTexture" in DD,
            get: DD => DD.metallicTexture,
            set: (DD, zD) => {
              DD.metallicTexture = zD
            }
          },
          metadata: zD
        }, Mp, Op), (0, VD.i)(DD, null, Zz, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: DD => "metallic" in DD,
            get: DD => DD.metallic,
            set: (DD, zD) => {
              DD.metallic = zD
            }
          },
          metadata: zD
        }, Jp, Ep), (0, VD.i)(DD, null, yz, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: DD => "roughness" in DD,
            get: DD => DD.roughness,
            set: (DD, zD) => {
              DD.roughness = zD
            }
          },
          metadata: zD
        }, Qp, Xp), (0, VD.i)(DD, null, kz, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: DD => "metallicF0Factor" in DD,
            get: DD => DD.metallicF0Factor,
            set: (DD, zD) => {
              DD.metallicF0Factor = zD
            }
          },
          metadata: zD
        }, Vp, Pp), (0, VD.i)(DD, null, mz, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "metallicReflectanceColor" in DD,
            get: DD => DD.metallicReflectanceColor,
            set: (DD, zD) => {
              DD.metallicReflectanceColor = zD
            }
          },
          metadata: zD
        }, Cp, xp), (0, VD.i)(DD, null, ez, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "useOnlyMetallicFromMetallicReflectanceTexture" in DD,
            get: DD => DD.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (DD, zD) => {
              DD.useOnlyMetallicFromMetallicReflectanceTexture = zD
            }
          },
          metadata: zD
        }, Tp, bp), (0, VD.i)(DD, null, oz, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "metallicReflectanceTexture" in DD,
            get: DD => DD.metallicReflectanceTexture,
            set: (DD, zD) => {
              DD.metallicReflectanceTexture = zD
            }
          },
          metadata: zD
        }, jp, dp), (0, VD.i)(DD, null, az, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "reflectanceTexture" in DD,
            get: DD => DD.reflectanceTexture,
            set: (DD, zD) => {
              DD.reflectanceTexture = zD
            }
          },
          metadata: zD
        }, Sp, ip), (0, VD.i)(DD, null, uz, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "microSurfaceTexture" in DD,
            get: DD => DD.microSurfaceTexture,
            set: (DD, zD) => {
              DD.microSurfaceTexture = zD
            }
          },
          metadata: zD
        }, lp, Wp), (0, VD.i)(DD, null, vz, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "bumpTexture" in DD,
            get: DD => DD.bumpTexture,
            set: (DD, zD) => {
              DD.bumpTexture = zD
            }
          },
          metadata: zD
        }, Np, Zp), (0, VD.i)(DD, null, tz, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "lightmapTexture" in DD,
            get: DD => DD.lightmapTexture,
            set: (DD, zD) => {
              DD.lightmapTexture = zD
            }
          },
          metadata: zD
        }, yp, kp), (0, VD.i)(DD, null, Fz, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "ambientColor" in DD,
            get: DD => DD.ambientColor,
            set: (DD, zD) => {
              DD.ambientColor = zD
            }
          },
          metadata: zD
        }, mp, ep), (0, VD.i)(DD, null, Yz, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "albedoColor" in DD,
            get: DD => DD.albedoColor,
            set: (DD, zD) => {
              DD.albedoColor = zD
            }
          },
          metadata: zD
        }, op, ap), (0, VD.i)(DD, null, Hz, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: DD => "baseWeight" in DD,
            get: DD => DD.baseWeight,
            set: (DD, zD) => {
              DD.baseWeight = zD
            }
          },
          metadata: zD
        }, vp, tp), (0, VD.i)(DD, null, qz, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: DD => "baseDiffuseRoughness" in DD,
            get: DD => DD.baseDiffuseRoughness,
            set: (DD, zD) => {
              DD.baseDiffuseRoughness = zD
            }
          },
          metadata: zD
        }, Fp, Yp), (0, VD.i)(DD, null, Dw, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "reflectivityColor" in DD,
            get: DD => DD.reflectivityColor,
            set: (DD, zD) => {
              DD.reflectivityColor = zD
            }
          },
          metadata: zD
        }, Hp, qp), (0, VD.i)(DD, null, zw, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "reflectionColor" in DD,
            get: DD => DD.reflectionColor,
            set: (DD, zD) => {
              DD.reflectionColor = zD
            }
          },
          metadata: zD
        }, Ds, zs), (0, VD.i)(DD, null, ww, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: DD => "emissiveColor" in DD,
            get: DD => DD.emissiveColor,
            set: (DD, zD) => {
              DD.emissiveColor = zD
            }
          },
          metadata: zD
        }, ws, ps), (0, VD.i)(DD, null, pw, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: DD => "microSurface" in DD,
            get: DD => DD.microSurface,
            set: (DD, zD) => {
              DD.microSurface = zD
            }
          },
          metadata: zD
        }, ss, Ks), (0, VD.i)(DD, null, sw, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: DD => "useLightmapAsShadowmap" in DD,
            get: DD => DD.useLightmapAsShadowmap,
            set: (DD, zD) => {
              DD.useLightmapAsShadowmap = zD
            }
          },
          metadata: zD
        }, rs, Ls), (0, VD.i)(DD, null, Kw, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAlphaFromAlbedoTexture" in DD,
            get: DD => DD.useAlphaFromAlbedoTexture,
            set: (DD, zD) => {
              DD.useAlphaFromAlbedoTexture = zD
            }
          },
          metadata: zD
        }, cs, gs), (0, VD.i)(DD, null, rw, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: DD => "forceAlphaTest" in DD,
            get: DD => DD.forceAlphaTest,
            set: (DD, zD) => {
              DD.forceAlphaTest = zD
            }
          },
          metadata: zD
        }, Rs, As), (0, VD.i)(DD, null, Lw, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: DD => "alphaCutOff" in DD,
            get: DD => DD.alphaCutOff,
            set: (DD, zD) => {
              DD.alphaCutOff = zD
            }
          },
          metadata: zD
        }, Us, fs), (0, VD.i)(DD, null, gw, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "useSpecularOverAlpha" in DD,
            get: DD => DD.useSpecularOverAlpha,
            set: (DD, zD) => {
              DD.useSpecularOverAlpha = zD
            }
          },
          metadata: zD
        }, Is, Bs), (0, VD.i)(DD, null, Rw, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "useMicroSurfaceFromReflectivityMapAlpha" in DD,
            get: DD => DD.useMicroSurfaceFromReflectivityMapAlpha,
            set: (DD, zD) => {
              DD.useMicroSurfaceFromReflectivityMapAlpha = zD
            }
          },
          metadata: zD
        }, Gs, hs), (0, VD.i)(DD, null, Aw, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "useRoughnessFromMetallicTextureAlpha" in DD,
            get: DD => DD.useRoughnessFromMetallicTextureAlpha,
            set: (DD, zD) => {
              DD.useRoughnessFromMetallicTextureAlpha = zD
            }
          },
          metadata: zD
        }, ns, Ms), (0, VD.i)(DD, null, Uw, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: DD => "useRoughnessFromMetallicTextureGreen" in DD,
            get: DD => DD.useRoughnessFromMetallicTextureGreen,
            set: (DD, zD) => {
              DD.useRoughnessFromMetallicTextureGreen = zD
            }
          },
          metadata: zD
        }, Os, Es), (0, VD.i)(DD, null, fw, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: DD => "useMetallnessFromMetallicTextureBlue" in DD,
            get: DD => DD.useMetallnessFromMetallicTextureBlue,
            set: (DD, zD) => {
              DD.useMetallnessFromMetallicTextureBlue = zD
            }
          },
          metadata: zD
        }, Qs, Xs), (0, VD.i)(DD, null, Iw, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAmbientOcclusionFromMetallicTextureRed" in DD,
            get: DD => DD.useAmbientOcclusionFromMetallicTextureRed,
            set: (DD, zD) => {
              DD.useAmbientOcclusionFromMetallicTextureRed = zD
            }
          },
          metadata: zD
        }, Vs, Ps), (0, VD.i)(DD, null, Bw, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAmbientInGrayScale" in DD,
            get: DD => DD.useAmbientInGrayScale,
            set: (DD, zD) => {
              DD.useAmbientInGrayScale = zD
            }
          },
          metadata: zD
        }, Cs, xs), (0, VD.i)(DD, null, Gw, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAutoMicroSurfaceFromReflectivityMap" in DD,
            get: DD => DD.useAutoMicroSurfaceFromReflectivityMap,
            set: (DD, zD) => {
              DD.useAutoMicroSurfaceFromReflectivityMap = zD
            }
          },
          metadata: zD
        }, Ts, bs), (0, VD.i)(DD, null, hw, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: DD => "usePhysicalLightFalloff" in DD,
            get: DD => DD.usePhysicalLightFalloff
          },
          metadata: zD
        }, null, kw), (0, VD.i)(DD, null, nw, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: DD => "useGLTFLightFalloff" in DD,
            get: DD => DD.useGLTFLightFalloff
          },
          metadata: zD
        }, null, kw), (0, VD.i)(DD, null, Mw, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: DD => "useRadianceOverAlpha" in DD,
            get: DD => DD.useRadianceOverAlpha,
            set: (DD, zD) => {
              DD.useRadianceOverAlpha = zD
            }
          },
          metadata: zD
        }, ds, Ss), (0, VD.i)(DD, null, Ow, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: DD => "useObjectSpaceNormalMap" in DD,
            get: DD => DD.useObjectSpaceNormalMap,
            set: (DD, zD) => {
              DD.useObjectSpaceNormalMap = zD
            }
          },
          metadata: zD
        }, is, ls), (0, VD.i)(DD, null, Jw, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: DD => "useParallax" in DD,
            get: DD => DD.useParallax,
            set: (DD, zD) => {
              DD.useParallax = zD
            }
          },
          metadata: zD
        }, Ws, Ns), (0, VD.i)(DD, null, Ew, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: DD => "useParallaxOcclusion" in DD,
            get: DD => DD.useParallaxOcclusion,
            set: (DD, zD) => {
              DD.useParallaxOcclusion = zD
            }
          },
          metadata: zD
        }, Zs, ys), (0, VD.i)(DD, null, Qw, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: DD => "parallaxScaleBias" in DD,
            get: DD => DD.parallaxScaleBias,
            set: (DD, zD) => {
              DD.parallaxScaleBias = zD
            }
          },
          metadata: zD
        }, ks, ms), (0, VD.i)(DD, null, Xw, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: DD => "disableLighting" in DD,
            get: DD => DD.disableLighting,
            set: (DD, zD) => {
              DD.disableLighting = zD
            }
          },
          metadata: zD
        }, es, os), (0, VD.i)(DD, null, Vw, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: DD => "forceIrradianceInFragment" in DD,
            get: DD => DD.forceIrradianceInFragment,
            set: (DD, zD) => {
              DD.forceIrradianceInFragment = zD
            }
          },
          metadata: zD
        }, as, us), (0, VD.i)(DD, null, Pw, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: DD => "maxSimultaneousLights" in DD,
            get: DD => DD.maxSimultaneousLights,
            set: (DD, zD) => {
              DD.maxSimultaneousLights = zD
            }
          },
          metadata: zD
        }, vs, ts), (0, VD.i)(DD, null, Cw, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: DD => "invertNormalMapX" in DD,
            get: DD => DD.invertNormalMapX,
            set: (DD, zD) => {
              DD.invertNormalMapX = zD
            }
          },
          metadata: zD
        }, Fs, Ys), (0, VD.i)(DD, null, xw, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: DD => "invertNormalMapY" in DD,
            get: DD => DD.invertNormalMapY,
            set: (DD, zD) => {
              DD.invertNormalMapY = zD
            }
          },
          metadata: zD
        }, Hs, qs), (0, VD.i)(DD, null, Tw, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: DD => "twoSidedLighting" in DD,
            get: DD => DD.twoSidedLighting,
            set: (DD, zD) => {
              DD.twoSidedLighting = zD
            }
          },
          metadata: zD
        }, DK, zK), (0, VD.i)(DD, null, bw, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: DD => "useAlphaFresnel" in DD,
            get: DD => DD.useAlphaFresnel,
            set: (DD, zD) => {
              DD.useAlphaFresnel = zD
            }
          },
          metadata: zD
        }, wK, pK), (0, VD.i)(DD, null, jw, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: DD => "useLinearAlphaFresnel" in DD,
            get: DD => DD.useLinearAlphaFresnel,
            set: (DD, zD) => {
              DD.useLinearAlphaFresnel = zD
            }
          },
          metadata: zD
        }, sK, KK), (0, VD.i)(DD, null, dw, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: DD => "environmentBRDFTexture" in DD,
            get: DD => DD.environmentBRDFTexture,
            set: (DD, zD) => {
              DD.environmentBRDFTexture = zD
            }
          },
          metadata: zD
        }, rK, LK), (0, VD.i)(DD, null, Sw, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: DD => "forceNormalForward" in DD,
            get: DD => DD.forceNormalForward,
            set: (DD, zD) => {
              DD.forceNormalForward = zD
            }
          },
          metadata: zD
        }, cK, gK), (0, VD.i)(DD, null, iw, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: DD => "enableSpecularAntiAliasing" in DD,
            get: DD => DD.enableSpecularAntiAliasing,
            set: (DD, zD) => {
              DD.enableSpecularAntiAliasing = zD
            }
          },
          metadata: zD
        }, RK, AK), (0, VD.i)(DD, null, lw, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: DD => "useHorizonOcclusion" in DD,
            get: DD => DD.useHorizonOcclusion,
            set: (DD, zD) => {
              DD.useHorizonOcclusion = zD
            }
          },
          metadata: zD
        }, UK, fK), (0, VD.i)(DD, null, Ww, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: DD => "useRadianceOcclusion" in DD,
            get: DD => DD.useRadianceOcclusion,
            set: (DD, zD) => {
              DD.useRadianceOcclusion = zD
            }
          },
          metadata: zD
        }, IK, BK), (0, VD.i)(DD, null, Nw, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: DD => "unlit" in DD,
            get: DD => DD.unlit,
            set: (DD, zD) => {
              DD.unlit = zD
            }
          },
          metadata: zD
        }, GK, hK), (0, VD.i)(DD, null, Zw, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: DD => "applyDecalMapAfterDetailMap" in DD,
            get: DD => DD.applyDecalMapAfterDetailMap,
            set: (DD, zD) => {
              DD.applyDecalMapAfterDetailMap = zD
            }
          },
          metadata: zD
        }, nK, MK), zD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zD
        })
      })(), DD.PBRMATERIAL_OPAQUE = Ez.PBRMATERIAL_OPAQUE, DD.PBRMATERIAL_ALPHATEST = Ez.PBRMATERIAL_ALPHATEST, DD.PBRMATERIAL_ALPHABLEND = Ez.PBRMATERIAL_ALPHABLEND, DD.PBRMATERIAL_ALPHATESTANDBLEND = Ez.PBRMATERIAL_ALPHATESTANDBLEND, DD.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = Ez.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, DD
    })();
    const ys = "KHR_materials_diffuse_transmission";

    function ks(DD, zD) {
      const wD = zD.subSurface;
      let pD = null;
      return wD.translucencyIntensityTexture ? pD = wD.translucencyIntensityTexture : wD.thicknessTexture && wD.useMaskFromThicknessTexture && (pD = wD.thicknessTexture), pD && !wD.useGltfStyleTextures ? (CD.d.Warn(`${DD}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${zD.name}`, 1), null) : pD
    }
    class ms {
      constructor(DD) {
        this.name = ys, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        const pD = [];
        if (wD instanceof Zs && this._isExtensionEnabled(wD)) {
          const zD = ks(DD, wD);
          return zD && pD.push(zD), wD.subSurface.translucencyColorTexture && pD.push(wD.subSurface.translucencyColorTexture), pD
        }
        return pD
      }
      _isExtensionEnabled(DD) {
        if (DD.unlit) return !1;
        const zD = DD.subSurface;
        return !!zD.isTranslucencyEnabled && (!DD.unlit && !zD.useAlbedoToTintTranslucency && zD.useGltfStyleTextures && 1 === zD.volumeIndexOfRefraction && 0 === zD.minimumThickness && 0 === zD.maximumThickness)
      }
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((pD => {
          if (wD instanceof Zs && this._isExtensionEnabled(wD)) {
            this._wasUsed = !0;
            const pD = wD.subSurface,
              sD = ks(DD, wD),
              KD = 0 == pD.translucencyIntensity ? void 0 : pD.translucencyIntensity,
              rD = this._exporter._materialExporter.getTextureInfo(sD) ?? void 0,
              LD = !pD.translucencyColor || pD.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : pD.translucencyColor.QpD(),
              cD = this._exporter._materialExporter.getTextureInfo(pD.translucencyColorTexture) ?? void 0,
              gD = {
                diffuseTransmissionFactor: KD,
                diffuseTransmissionTexture: rD,
                diffuseTransmissionColorFactor: LD,
                diffuseTransmissionColorTexture: cD
              };
            (rD || cD) && this._exporter._materialNeedsUVsSet.add(wD), zD.extensions = zD.extensions || {}, zD.extensions[ys] = gD
          }
          pD(zD)
        }))
      }
    }
    let es = !1;

    function os() {
      es || (es = !0, ip.RegisterExtension(ys, (DD => new ms(DD))))
    }
    os();
    const as = "KHR_materials_dispersion";
    class us {
      constructor() {
        this.name = as, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(DD) {
        if (DD.unlit) return !1;
        const zD = DD.subSurface;
        return !(!zD.isRefractionEnabled && !zD.isDispersionEnabled)
      }
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((DD => {
          if (wD instanceof Zs && this._isExtensionEnabled(wD)) {
            this._wasUsed = !0;
            const DD = {
              dispersion: wD.subSurface.dispersion
            };
            zD.extensions = zD.extensions || {}, zD.extensions[as] = DD
          }
          DD(zD)
        }))
      }
    }
    let vs = !1;

    function ts() {
      vs || (vs = !0, ip.RegisterExtension(as, (() => new us)))
    }
    ts();
    const Fs = "KHR_materials_emissive_strength";
    class Ys {
      constructor() {
        this.name = Fs, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(DD, zD, wD) {
        return await new Promise((DD => {
          if (!(wD instanceof Zs)) return DD(zD);
          const pD = wD.emissiveColor.scale(wD.emissiveIntensity),
            sD = Math.max(...pD.QpD());
          if (sD > 1) {
            zD.emissiveFactor = pD.scale(1 / sD).QpD(), this._wasUsed = !0;
            const DD = {
              emissiveStrength: sD
            };
            zD.extensions || (zD.extensions = {}), zD.extensions[Fs] = DD
          } else zD.emissiveFactor = pD.QpD();
          return DD(zD)
        }))
      }
    }
    let Hs = !1;

    function qs() {
      Hs || (Hs = !0, ip.RegisterExtension(Fs, (() => new Ys)))
    }
    qs();
    const DK = "KHR_materials_ior";
    class zK {
      constructor() {
        this.name = DK, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(DD) {
        return !DD.unlit && (DD instanceof Hz ? 1.5 != DD.specularIor : DD instanceof Zs && (void 0 != DD.indexOfRefraction && 1.5 != DD.indexOfRefraction))
      }
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((DD => {
          if (wD instanceof Zs && this._isExtensionEnabled(wD)) {
            this._wasUsed = !0;
            const DD = {
              ior: wD.indexOfRefraction
            };
            zD.extensions = zD.extensions || {}, zD.extensions[DK] = DD
          } else if (wD instanceof Hz && this._isExtensionEnabled(wD)) {
            this._wasUsed = !0;
            const DD = {
              ior: wD.specularIor
            };
            zD.extensions = zD.extensions || {}, zD.extensions[DK] = DD
          }
          DD(zD)
        }))
      }
    }
    let wK = !1;

    function pK() {
      wK || (wK = !0, ip.RegisterExtension(DK, (() => new zK)))
    }
    pK();
    const sK = "KHR_materials_iridescence";
    class KK {
      constructor(DD) {
        this.name = sK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        const pD = [];
        if (wD instanceof Ez) {
          if (wD.iridescence.isEnabled) return wD.iridescence.texture && pD.push(wD.iridescence.texture), wD.iridescence.thicknessTexture && wD.iridescence.thicknessTexture !== wD.iridescence.texture && pD.push(wD.iridescence.thicknessTexture), pD
        } else if (wD instanceof Hz && wD.thinFilmWeight > 0) return wD.thinFilmWeightTexture && pD.push(wD.thinFilmWeightTexture), wD.thinFilmThicknessTexture && wD.thinFilmThicknessTexture !== wD.thinFilmWeightTexture && pD.push(wD.thinFilmThicknessTexture), pD;
        return []
      }
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((DD => {
          if (wD instanceof Ez) {
            if (!wD.iridescence.isEnabled) return void DD(zD);
            this._wasUsed = !0, zD.extensions = zD.extensions || {};
            const pD = this._exporter._materialExporter.getTextureInfo(wD.iridescence.texture),
              sD = this._exporter._materialExporter.getTextureInfo(wD.iridescence.thicknessTexture),
              KD = {
                iridescenceFactor: wD.iridescence.intensity,
                iridescenceIor: wD.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: wD.iridescence.minimumThickness,
                iridescenceThicknessMaximum: wD.iridescence.maximumThickness,
                iridescenceTexture: pD ?? void 0,
                iridescenceThicknessTexture: sD ?? void 0
              };
            null === KD.iridescenceTexture && null === KD.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(wD), zD.extensions[sK] = KD
          } else if (wD instanceof Hz) {
            if (wD.thinFilmWeight <= 0) return void DD(zD);
            this._wasUsed = !0, zD.extensions = zD.extensions || {};
            const pD = this._exporter._materialExporter.getTextureInfo(wD.thinFilmWeightTexture),
              sD = this._exporter._materialExporter.getTextureInfo(wD.thinFilmThicknessTexture),
              KD = {
                iridescenceFactor: wD.thinFilmWeight,
                iridescenceIor: wD.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * wD.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * wD.thinFilmThickness,
                iridescenceTexture: pD ?? void 0,
                iridescenceThicknessTexture: sD ?? void 0
              };
            null === KD.iridescenceTexture && null === KD.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(wD), zD.extensions[sK] = KD
          }
          DD(zD)
        }))
      }
    }
    let rK = !1;

    function LK() {
      rK || (rK = !0, ip.RegisterExtension(sK, (DD => new KK(DD))))
    }
    LK();
    const cK = "KHR_materials_sheen";
    class gK {
      constructor(DD) {
        this.name = cK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        return wD instanceof Zs && wD.sheen.isEnabled && wD.sheen.texture ? [wD.sheen.texture] : []
      }
      async postExportMaterialAsync(DD, zD, wD) {
        return await new Promise((DD => {
          if (wD instanceof Zs) {
            if (!wD.sheen.isEnabled) return void DD(zD);
            this._wasUsed = !0, null == zD.extensions && (zD.extensions = {});
            const pD = {
              sheenColorFactor: wD.sheen.color.QpD(),
              sheenRoughnessFactor: wD.sheen.roughness ?? 0
            };
            null === pD.sheenColorTexture && null === pD.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(wD), wD.sheen.texture && (pD.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(wD.sheen.texture) ?? void 0), wD.sheen.textureRoughness && !wD.sheen.useRoughnessFromMainTexture ? pD.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(wD.sheen.textureRoughness) ?? void 0 : wD.sheen.texture && wD.sheen.useRoughnessFromMainTexture && (pD.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(wD.sheen.texture) ?? void 0), zD.extensions[cK] = pD
          }
          DD(zD)
        }))
      }
    }
    let RK = !1;

    function AK() {
      RK || (RK = !0, ip.RegisterExtension(cK, (DD => new gK(DD))))
    }
    AK();
    const UK = "KHR_materials_fuzz";

    function fK(DD, zD) {
      const wD = new TD.d(zD.name, zD.Ul());
      return wD._texture = DD, wD.coordinatesIndex = zD.coordinatesIndex, zD instanceof TD.d && (wD.uOffset = zD.uOffset, wD.vOffset = zD.vOffset, wD.uScale = zD.uScale, wD.vScale = zD.vScale, wD.wAng = zD.wAng), wD.wrapU = zD.wrapU, wD.wrapV = zD.wrapV, wD
    }
    class IK {
      constructor(DD) {
        this.name = UK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = DD
      }
      dispose() {
        for (const DD of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[DD].dispose()
        }
        this._mergedTexturesMap = {};
        for (const DD of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[DD].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        if (wD instanceof Hz) {
          const DD = [];
          if (wD.fuzzWeight > 0) {
            wD.fuzzWeightTexture && DD.push(wD.fuzzWeightTexture);
            let zD = !1;
            if (wD.fuzzRoughnessTexture && (wD._useFuzzRoughnessFromTextureAlpha ? DD.push(wD.fuzzRoughnessTexture) : zD = !0), wD.fuzzColorTexture && !zD && DD.push(wD.fuzzColorTexture), zD) {
              const zD = function(DD) {
                const zD = DD.fuzzColorTexture,
                  wD = zD && zD.getInternalTexture() ? zD.getInternalTexture().uniqueId : "NoFuzzColor",
                  pD = DD.fuzzRoughnessTexture;
                return `FuzzColor_${wD}_FuzzRoughness_${pD&&pD.getInternalTexture()?pD.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(wD);
              if (!this._cachedInternalTexturesMap[zD]) {
                const DD = await async function(DD) {
                  const zD = DD.Ul(),
                    wD = DD.fuzzColorTexture,
                    pD = DD.fuzzRoughnessTexture;
                  return wD || pD ? (await rw("FuzzTexture", Rw(wD ? Lw(wD, 0) : gw(1), wD ? Lw(wD, 1) : gw(1), wD ? Lw(wD, 2) : gw(1), pD ? Lw(pD, DD._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : gw(1)), zD)).getInternalTexture() : null
                }(wD);
                DD && (this._cachedInternalTexturesMap[zD] = DD)
              }
              this._cachedInternalTexturesMap[zD] && (wD.fuzzColorTexture && (this._mergedTexturesMap[wD.fuzzColorTexture.uniqueId] = fK(this._cachedInternalTexturesMap[zD], wD.fuzzColorTexture), DD.push(this._mergedTexturesMap[wD.fuzzColorTexture.uniqueId])), wD.fuzzRoughnessTexture && (this._mergedTexturesMap[wD.fuzzRoughnessTexture.uniqueId] = fK(this._cachedInternalTexturesMap[zD], wD.fuzzRoughnessTexture), DD.push(this._mergedTexturesMap[wD.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return DD
        }
        return []
      }
      async postExportMaterialAsync(DD, zD, wD) {
        return await new Promise((DD => {
          if (wD instanceof Hz) {
            if (0 == wD.fuzzWeight) return void DD(zD);
            this._wasUsed = !0, null == zD.extensions && (zD.extensions = {});
            const pD = {
              fuzzFactor: wD.fuzzWeight,
              fuzzColorFactor: wD.fuzzColor.QpD(),
              fuzzRoughnessFactor: wD.fuzzRoughness
            };
            let sD, KD;
            wD.fuzzWeightTexture && (pD.fuzzTexture = this._exporter._materialExporter.getTextureInfo(wD.fuzzWeightTexture) ?? void 0), wD.fuzzColorTexture && (sD = this._mergedTexturesMap[wD.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[wD.fuzzColorTexture.uniqueId] : wD.fuzzColorTexture, pD.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(sD) ?? void 0), wD.fuzzRoughnessTexture && (KD = this._mergedTexturesMap[wD.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[wD.fuzzRoughnessTexture.uniqueId] : wD.fuzzRoughnessTexture, pD.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(KD) ?? void 0), null === pD.fuzzColorTexture && null === pD.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(wD), zD.extensions[UK] = pD
          }
          DD(zD)
        }))
      }
    }
    let BK = !1;

    function GK() {
      BK || (BK = !0, ip.RegisterExtension(UK, (DD => new IK(DD))))
    }
    GK();
    const hK = "KHR_materials_specular";
    class nK {
      constructor(DD) {
        this.name = hK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        const pD = [];
        return wD instanceof Zs && this._isExtensionEnabled(wD) ? (wD.metallicReflectanceTexture && pD.push(wD.metallicReflectanceTexture), wD.reflectanceTexture && pD.push(wD.reflectanceTexture), pD) : pD
      }
      _isExtensionEnabled(DD) {
        return !DD.unlit && (void 0 != DD.metallicF0Factor && 1 != DD.metallicF0Factor || void 0 != DD.metallicReflectanceColor && !DD.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(DD))
      }
      _hasTexturesExtension(DD) {
        return null != DD.metallicReflectanceTexture || null != DD.reflectanceTexture
      }
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((DD => {
          var pD;
          if (wD instanceof Zs && this._isExtensionEnabled(wD)) {
            this._wasUsed = !0, zD.extensions = zD.extensions || {};
            const DD = this._exporter._materialExporter.getTextureInfo(wD.metallicReflectanceTexture) ?? void 0,
              pD = this._exporter._materialExporter.getTextureInfo(wD.reflectanceTexture) ?? void 0,
              sD = {
                specularFactor: 1 == wD.metallicF0Factor ? void 0 : wD.metallicF0Factor,
                specularTexture: DD,
                specularColorFactor: wD.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : wD.metallicReflectanceColor.QpD(),
                specularColorTexture: pD
              };
            this._hasTexturesExtension(wD) && this._exporter._materialNeedsUVsSet.add(wD), zD.extensions[hK] = sD
          } else if (wD instanceof Hz) {
            zD.extensions = zD.extensions || {};
            const sD = this._exporter._materialExporter.getTextureInfo(wD.specularWeightTexture) ?? void 0,
              KD = this._exporter._materialExporter.getTextureInfo(wD.specularColorTexture) ?? void 0,
              rD = 1 == wD.specularWeight ? void 0 : wD.specularWeight,
              LD = wD.specularColor.equalsFloats(1, 1, 1) ? void 0 : wD.specularColor.QpD();
            if (!KD && !sD && void 0 === rD && void 0 === LD) return DD(zD);
            this._wasUsed = !0;
            const cD = {
                specularEdgeColorEnabled: !0
              },
              gD = {
                specularFactor: rD,
                specularTexture: sD,
                specularColorFactor: LD,
                specularColorTexture: KD,
                extensions: {}
              };
            gD.extensions.EXT_materials_specular_edge_color = cD, (pD = this._exporter._glTF).extensionsUsed || (pD.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (sD || KD) && this._exporter._materialNeedsUVsSet.add(wD), zD.extensions[hK] = gD
          }
          DD(zD)
        }))
      }
    }
    let MK = !1;

    function OK() {
      MK || (MK = !0, ip.RegisterExtension(hK, (DD => new nK(DD))))
    }
    OK();
    const JK = "KHR_materials_transmission";
    class EK {
      constructor(DD) {
        this.name = JK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        const pD = [];
        if (wD instanceof Zs) {
          if (this._isExtensionEnabled(wD)) return wD.subSurface.refractionIntensityTexture && wD.subSurface.useGltfStyleTextures && pD.push(wD.subSurface.refractionIntensityTexture), pD
        } else wD instanceof Hz && (wD.transmissionWeight > 0 && wD.transmissionWeightTexture && (pD.push(wD.transmissionWeightTexture), wD.transmissionColorTexture && pD.push(wD.transmissionColorTexture)), wD.subsurfaceWeight > 0 && wD.subsurfaceWeightTexture && pD.push(wD.subsurfaceWeightTexture));
        return pD
      }
      _isExtensionEnabled(DD) {
        if (DD instanceof Hz && !DD.unlit) return DD.transmissionWeight > 0 || DD.subsurfaceWeight > 0;
        if (DD instanceof Zs && !DD.unlit) {
          const zD = DD.subSurface;
          return zD.isRefractionEnabled && void 0 != zD.refractionIntensity && 0 != zD.refractionIntensity || null != zD.refractionIntensityTexture && zD.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(DD, zD, wD) {
        if (!this._isExtensionEnabled(wD)) return zD;
        if (wD instanceof Zs) {
          this._wasUsed = !0;
          const pD = wD.subSurface,
            sD = {
              transmissionFactor: 0 === pD.refractionIntensity ? void 0 : pD.refractionIntensity
            };
          if (pD.refractionIntensityTexture)
            if (pD.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(wD);
              const DD = this._exporter._materialExporter.getTextureInfo(pD.refractionIntensityTexture);
              DD && (sD.transmissionTexture = DD)
            } else CD.d.Warn(`${DD}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          zD.extensions || (zD.extensions = {}), zD.extensions[JK] = sD
        } else if (wD instanceof Hz) {
          this._wasUsed = !0;
          const DD = {
            transmissionFactor: (1 - wD.transmissionWeight) * wD.subsurfaceWeight + wD.transmissionWeight
          };
          if (wD.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(wD);
            const zD = this._exporter._materialExporter.getTextureInfo(wD.transmissionWeightTexture);
            zD && (DD.transmissionTexture = zD)
          } else if (wD.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(wD);
            const zD = this._exporter._materialExporter.getTextureInfo(wD.subsurfaceWeightTexture);
            zD && (DD.transmissionTexture = zD)
          }
          if (0 == wD.transmissionDepth && (!wD.transmissionColor.equals(aD.d.White()) || wD.transmissionColorTexture) && zD.pbrMetallicRoughness && (zD.pbrMetallicRoughness.baseColorFactor || (zD.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), zD.pbrMetallicRoughness.baseColorFactor[0] *= wD.transmissionColor.r, zD.pbrMetallicRoughness.baseColorFactor[1] *= wD.transmissionColor.g, zD.pbrMetallicRoughness.baseColorFactor[2] *= wD.transmissionColor.b, wD.transmissionColorTexture && !zD.pbrMetallicRoughness.baseColorTexture)) {
            const DD = this._exporter._materialExporter.getTextureInfo(wD.transmissionColorTexture);
            DD && (zD.pbrMetallicRoughness.baseColorTexture = DD, this._exporter._materialNeedsUVsSet.add(wD))
          }
          zD.extensions || (zD.extensions = {}), zD.extensions[JK] = DD
        }
        return zD
      }
    }
    let QK = !1;

    function XK() {
      QK || (QK = !0, ip.RegisterExtension(JK, (DD => new EK(DD))))
    }
    XK();
    var VK = wD(40199);
    const PK = "KHR_materials_unlit";
    class CK {
      constructor() {
        this.name = PK, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((DD => {
          let pD = !1;
          wD instanceof Zs ? pD = wD.unlit : wD instanceof VK.e && (pD = wD.disableLighting), pD && (this._wasUsed = !0, null == zD.extensions && (zD.extensions = {}), zD.extensions[PK] = {}), DD(zD)
        }))
      }
    }
    let xK = !1;

    function TK() {
      xK || (xK = !0, ip.RegisterExtension(PK, (() => new CK)))
    }
    TK();
    const bK = "KHR_materials_volume";
    class jK {
      constructor(DD) {
        this.name = bK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        const pD = [];
        if (wD instanceof Zs) {
          if (this._isExtensionEnabled(wD)) return wD.subSurface.thicknessTexture && pD.push(wD.subSurface.thicknessTexture), pD
        } else wD instanceof Hz && (wD.transmissionWeight > 0 || wD.subsurfaceWeight > 0) && wD.geometryThicknessTexture && pD.push(wD.geometryThicknessTexture);
        return pD
      }
      _isExtensionEnabled(DD) {
        if (DD.unlit) return !1;
        const zD = DD.subSurface;
        return !(!zD.isRefractionEnabled && !zD.isTranslucencyEnabled) && (void 0 != zD.maximumThickness && 0 != zD.maximumThickness || void 0 != zD.tintColorAtDistance && zD.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != zD.tintColor && zD.tintColor != aD.d.White() || this._hasTexturesExtension(DD))
      }
      _hasTexturesExtension(DD) {
        return null != DD.subSurface.thicknessTexture
      }
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((DD => {
          if (wD instanceof Zs && this._isExtensionEnabled(wD)) {
            this._wasUsed = !0;
            const DD = wD.subSurface,
              pD = {
                thicknessFactor: 0 == DD.maximumThickness ? void 0 : DD.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(DD.thicknessTexture) ?? void 0,
                attenuationDistance: DD.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : DD.tintColorAtDistance,
                attenuationColor: DD.tintColor.equalsFloats(1, 1, 1) ? void 0 : DD.tintColor.QpD()
              };
            this._hasTexturesExtension(wD) && this._exporter._materialNeedsUVsSet.add(wD), zD.extensions = zD.extensions || {}, zD.extensions[bK] = pD
          } else if (wD instanceof Hz) {
            const DD = wD.transmissionWeight > 0 && !wD.geometryThinWalled,
              pD = wD.subsurfaceWeight > 0 && !wD.geometryThinWalled;
            if (DD || pD) {
              this._wasUsed = !0;
              const sD = wD.geometryThickness,
                KD = this._exporter._materialExporter.getTextureInfo(wD.geometryThicknessTexture) ?? void 0;
              let rD;
              KD && this._exporter._materialNeedsUVsSet.add(wD);
              const LD = aD.d.White().QpD();
              if (DD && wD.transmissionDepth > 0) {
                const DD = 1 / wD.transmissionDepth;
                let zD = new ND.s(-Math.log(wD.transmissionColor.r) * DD, -Math.log(wD.transmissionColor.g) * DD, -Math.log(wD.transmissionColor.b) * DD);
                const pD = new ND.s(wD.transmissionScatter.r * DD, wD.transmissionScatter.g * DD, wD.transmissionScatter.b * DD),
                  sD = zD.subtract(pD),
                  KD = Math.min(sD.x, sD.y, sD.z);
                KD < 0 && (sD.x = sD.x - KD, sD.y = sD.y - KD, sD.z = sD.z - KD), zD = sD.add(pD);
                rD = 1 / Math.max(zD.x, zD.y, zD.z), LD[0] = Math.exp(-zD.x * rD), LD[1] = Math.exp(-zD.y * rD), LD[2] = Math.exp(-zD.z * rD)
              } else rD = Number.MAX_VALUE, LD[0] = 1, LD[1] = 1, LD[2] = 1;
              let cD = 1;
              const gD = aD.d.White().QpD();
              if (pD) {
                const DD = wD.subsurfaceRadius,
                  zD = wD.subsurfaceRadiusScale,
                  pD = new ND.s(zD.r, zD.g, zD.b).multiplyByFloats(DD, DD, DD),
                  sD = new ND.s(1 / Math.max(pD.x, 1e-6), 1 / Math.max(pD.y, 1e-6), 1 / Math.max(pD.z, 1e-6));
                cD = 1 / Math.max(sD.x, sD.y, sD.z), gD[0] = Math.exp(-sD.x * cD), gD[1] = Math.exp(-sD.y * cD), gD[2] = Math.exp(-sD.z * cD)
              }
              const RD = (1 - wD.transmissionWeight) * wD.subsurfaceWeight,
                AD = RD + wD.transmissionWeight,
                UD = 1 / Math.max(AD, 1e-6),
                fD = wD.transmissionWeight * UD,
                ID = RD * UD,
                BD = LD.map(((DD, zD) => DD * fD + gD[zD] * ID)),
                GD = {
                  thicknessFactor: sD,
                  thicknessTexture: KD,
                  attenuationDistance: rD * fD + cD * ID,
                  attenuationColor: BD
                };
              zD.extensions = zD.extensions || {}, zD.extensions[bK] = GD
            }
          }
          DD(zD)
        }))
      }
    }
    let dK = !1;

    function SK() {
      dK || (dK = !0, ip.RegisterExtension(bK, (DD => new jK(DD))))
    }
    SK();
    const iK = "KHR_materials_volume_scatter";
    class lK {
      constructor(DD) {
        this.name = iK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        const pD = [];
        return wD instanceof Hz && (wD.transmissionWeight > 0 && wD.transmissionScatterTexture && pD.push(wD.transmissionScatterTexture), wD.subsurfaceWeight > 0 && wD.subsurfaceColorTexture && pD.push(wD.subsurfaceColorTexture)), pD
      }
      _isExtensionEnabled(DD) {
        if (DD.unlit) return !1;
        const zD = DD.transmissionWeight > 0 && !DD.geometryThinWalled && DD.transmissionDepth > 0 && !DD.transmissionScatter.equals(aD.d.Black()),
          wD = DD.subsurfaceWeight > 0 && !DD.geometryThinWalled;
        return !(!zD && !wD)
      }
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((DD => {
          if (wD instanceof Hz && this._isExtensionEnabled(wD)) {
            this._wasUsed = !0;
            let DD = ND.s.Zero(),
              pD = 0;
            if (wD.transmissionWeight > 0) {
              DD = function(DD) {
                const zD = new ND.s(Math.sqrt(1 - DD.x), Math.sqrt(1 - DD.y), Math.sqrt(1 - DD.z)),
                  wD = new ND.s(1, 1, 1),
                  pD = wD.subtract(zD),
                  sD = wD.subtract(new ND.s(.139, .139, .139).multiplyInPlace(zD)),
                  KD = wD.add(new ND.s(1.17, 1.17, 1.17).multiplyInPlace(zD));
                return pD.multiplyInPlace(sD).divideInPlace(KD)
              }(new ND.s(wD.transmissionScatter.r, wD.transmissionScatter.g, wD.transmissionScatter.b)), pD = wD.transmissionScatterAnisotropy
            }
            const sD = ND.s.Zero();
            let KD = 0;
            wD.subsurfaceWeight > 0 && (sD.set(wD.subsurfaceColor.r, wD.subsurfaceColor.g, wD.subsurfaceColor.b), KD = wD.subsurfaceScatterAnisotropy);
            const rD = (1 - wD.transmissionWeight) * wD.subsurfaceWeight,
              LD = rD + wD.transmissionWeight,
              cD = 1 / Math.max(LD, 1e-6),
              gD = wD.transmissionWeight * cD,
              RD = rD * cD,
              AD = {
                multiscatterColorFactor: DD.multiplyByFloats(gD, gD, gD).addInPlace(sD.multiplyByFloats(RD, RD, RD)).QpD(),
                scatterAnisotropy: pD * gD + KD * RD
              };
            if (wD.subsurfaceWeight > 0 && wD.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(wD);
              const DD = this._exporter._materialExporter.getTextureInfo(wD.subsurfaceColorTexture);
              DD && (AD.multiscatterColorTexture = DD)
            } else if (wD.transmissionWeight > 0 && wD.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(wD);
              const DD = this._exporter._materialExporter.getTextureInfo(wD.transmissionScatterTexture);
              DD && (AD.multiscatterColorTexture = DD)
            }
            zD.extensions = zD.extensions || {}, zD.extensions[iK] = AD
          }
          DD(zD)
        }))
      }
    }
    let WK = !1;

    function NK() {
      WK || (WK = !0, ip.RegisterExtension(iK, (DD => new lK(DD)), 101))
    }
    NK();
    const ZK = "KHR_materials_diffuse_roughness";
    class yK {
      constructor(DD) {
        this.name = ZK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(DD, zD, wD) {
        const pD = [];
        if (wD instanceof Ez) {
          if (wD._baseDiffuseRoughness) return wD._baseDiffuseRoughnessTexture && pD.push(wD._baseDiffuseRoughnessTexture), pD
        } else if (wD instanceof Hz && wD.baseDiffuseRoughness) return wD.baseDiffuseRoughnessTexture && pD.push(wD.baseDiffuseRoughnessTexture), pD;
        return []
      }
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((DD => {
          let pD = null,
            sD = null;
          if (wD instanceof Ez ? (pD = wD._baseDiffuseRoughness, sD = wD._baseDiffuseRoughnessTexture) : wD instanceof Hz && (pD = wD.baseDiffuseRoughness, sD = wD.baseDiffuseRoughnessTexture), !pD) return void DD(zD);
          this._wasUsed = !0, zD.extensions = zD.extensions || {};
          const KD = {
            diffuseRoughnessFactor: pD,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(sD) ?? void 0
          };
          null !== KD.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(wD), zD.extensions[ZK] = KD, DD(zD)
        }))
      }
    }
    let kK = !1;

    function mK() {
      kK || (kK = !0, ip.RegisterExtension(ZK, (DD => new yK(DD))))
    }
    mK();
    const eK = "KHR_materials_openpbr";
    class oK {
      constructor() {
        this.name = eK, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(DD, zD, wD) {
        return new Promise((DD => {
          wD instanceof Hz && (this._wasUsed = !0, zD.extensions = zD.extensions || {}, zD.extensions[eK] = {}), DD(zD)
        }))
      }
    }
    let aK = !1;

    function uK() {
      aK || (aK = !0, ip.RegisterExtension(eK, (() => new oK)))
    }
    uK();
    const vK = "KHR_texture_transform";
    class tK {
      constructor() {
        this.name = vK, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(DD, zD, wD) {
        if (wD.Ul() || Xz.h.Warn(`${DD}: "scene" is not defined for Babylon texture ${wD.name}!`), (0 !== wD.uAng || 0 !== wD.vAng) && (Xz.h.Warn(`${DD}: Texture ${wD.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== wD.uRotationCenter || 0 !== wD.vRotationCenter)) return;
        const pD = {};
        let sD = !1;
        if (0 === wD.uOffset && 0 === wD.vOffset || (pD.offset = [wD.uOffset, wD.vOffset], sD = !0), 1 === wD.uScale && 1 === wD.vScale || (pD.scale = [wD.uScale, wD.vScale], sD = !0), 0 !== wD.wAng) {
          if (0 !== wD.uRotationCenter || 0 !== wD.vRotationCenter) {
            if (wD.homogeneousRotationInUVTransform && wD.uScale !== wD.vScale) return void Xz.h.Warn(`${DD}: Texture ${wD.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${vK}.`);
            Xz.h.Warn(`${DD}: Texture ${wD.name} with non-origin rotation center will be exported using an adjusted offset with ${vK}.`), pD.offset = function(DD) {
              const {
                uOffset: zD,
                vOffset: wD,
                uRotationCenter: pD,
                vRotationCenter: sD,
                uScale: KD,
                vScale: rD,
                wAng: LD
              } = DD, cD = Math.cos(LD), gD = Math.sin(LD), RD = pD * KD, AD = sD * rD;
              return [zD + (RD * (1 - cD) + AD * gD), wD + (AD * (1 - cD) - RD * gD)]
            }(wD)
          }
          pD.rotation = -wD.wAng, sD = !0
        }
        0 !== wD.coordinatesIndex && (pD.texCoord = wD.coordinatesIndex, sD = !0), sD && (this._wasUsed = !0, zD.extensions || (zD.extensions = {}), zD.extensions[vK] = pD)
      }
    }
    let FK = !1;

    function YK() {
      FK || (FK = !0, ip.RegisterExtension(vK, (() => new tK)))
    }
    YK();
    var HK = wD(39960);
    const qK = "KHR_texture_basisu";
    class Dr {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(DD) {
        this.name = qK, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      postExportTexture(DD, zD) {
        const wD = this._exporter._textures[zD.index],
          pD = wD.source;
        if (void 0 === pD) return;
        const sD = this._exporter._images[pD];
        "image/ktx2" === (sD.mimeType || (0, HK.h)(sD.uri)) && (wD.source = void 0, wD.extensions || (wD.extensions = {}), wD.extensions[qK] = {
          source: pD
        }, this._wasUsed = !0)
      }
    }
    let zr = !1;

    function wr() {
      zr || (zr = !0, ip.RegisterExtension(qK, (DD => new Dr(DD))))
    }
    wr();
    const pr = "EXT_texture_webp";
    class sr {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(DD) {
        this.name = pr, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      postExportTexture(DD, zD) {
        const wD = this._exporter._textures[zD.index],
          pD = wD.source;
        if (void 0 === pD) return;
        const sD = this._exporter._images[pD];
        "image/webp" === (sD.mimeType || (0, HK.h)(sD.uri)) && (wD.source = void 0, wD.extensions || (wD.extensions = {}), wD.extensions[pr] = {
          source: pD
        }, this._wasUsed = !0)
      }
    }
    let Kr = !1;

    function rr() {
      Kr || (Kr = !0, ip.RegisterExtension(pr, (DD => new sr(DD))))
    }
    rr();
    const Lr = "EXT_texture_avif";
    class cr {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(DD) {
        this.name = Lr, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = DD
      }
      dispose() {}
      postExportTexture(DD, zD) {
        const wD = this._exporter._textures[zD.index],
          pD = wD.source;
        if (void 0 === pD) return;
        const sD = this._exporter._images[pD];
        "image/avif" === (sD.mimeType || (0, HK.h)(sD.uri)) && (wD.source = void 0, wD.extensions || (wD.extensions = {}), wD.extensions[Lr] = {
          source: pD
        }, this._wasUsed = !0)
      }
    }
    let gr = !1;

    function Rr() {
      gr || (gr = !0, ip.RegisterExtension(Lr, (DD => new cr(DD))))
    }
    Rr();
    class Ar {
      static CreateSTL(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          sD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          KD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          rD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          LD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          cD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const gD = function(DD, zD, wD) {
            const sD = [3 * DD[wD], 3 * DD[wD + 1], 3 * DD[wD + 2]],
              KD = [new pD.WI(zD[sD[0]], zD[sD[0] + 2], zD[sD[0] + 1]), new pD.WI(zD[sD[1]], zD[sD[1] + 2], zD[sD[1] + 1]), new pD.WI(zD[sD[2]], zD[sD[2] + 2], zD[sD[2] + 1])],
              rD = KD[0].subtract(KD[1]),
              LD = KD[2].subtract(KD[1]);
            return {
              v: KD,
              n: pD.WI.Cross(LD, rD).normalize()
            }
          },
          AD = function(DD, zD, wD, pD) {
            return zD = UD(DD, zD, wD.x, pD), zD = UD(DD, zD, wD.y, pD), UD(DD, zD, wD.z, pD)
          },
          UD = function(DD, zD, wD, pD) {
            return DD.setFloat32(zD, wD, pD), zD + 4
          },
          ID = function(DD) {
            if (LD) {
              let zD = DD;
              DD instanceof fD.c && (zD = DD.nsD);
              const wD = zD.getVerticesData(RD.f.PositionKind, !0, !0);
              if (!wD) return [];
              const sD = pD.WI.Zero();
              let KD;
              for (KD = 0; KD < wD.length; KD += 3) pD.WI.TransformCoordinatesFromFloatsToRef(wD[KD], wD[KD + 1], wD[KD + 2], DD.computeWorldMatrix(!0), sD).toArray(wD, KD);
              return wD
            }
            return DD.getVerticesData(RD.f.PositionKind) || []
          };
        LD && (rD = !0);
        let BD = "",
          GD = 0,
          hD = 0;
        if (sD) {
          for (let wD = 0; wD < DD.length; wD++) {
            const zD = DD[wD].XpD();
            GD += zD ? zD.length / 3 : 0
          }
          const zD = new ArrayBuffer(84 + 50 * GD);
          BD = new DataView(zD), hD += 80, BD.setUint32(hD, GD, KD), hD += 4
        } else cD || (BD = "solid stlmesh\r\n");
        for (let pD = 0; pD < DD.length; pD++) {
          const zD = DD[pD];
          !sD && cD && (BD += "solid " + zD.name + "\r\n"), !rD && zD instanceof Rp.e && zD.bakeCurrentTransformIntoVertices();
          const wD = ID(zD),
            LD = zD.XpD() || [];
          for (let DD = 0; DD < LD.length; DD += 3) {
            const zD = gD(LD, wD, DD);
            sD ? (hD = AD(BD, hD, zD.n, KD), hD = AD(BD, hD, zD.v[0], KD), hD = AD(BD, hD, zD.v[1], KD), hD = AD(BD, hD, zD.v[2], KD), hD += 2) : (BD += "\tfacet normal " + zD.n.x + " " + zD.n.y + " " + zD.n.z + "\r\n", BD += "\t\touter loop\r\n", BD += "\t\t\tvertex " + zD.v[0].x + " " + zD.v[0].y + " " + zD.v[0].z + "\r\n", BD += "\t\t\tvertex " + zD.v[1].x + " " + zD.v[1].y + " " + zD.v[1].z + "\r\n", BD += "\t\t\tvertex " + zD.v[2].x + " " + zD.v[2].y + " " + zD.v[2].z + "\r\n", BD += "\t\tendloop\r\n", BD += "\tendfacet\r\n")
          }!sD && cD && (BD += "endsolid " + name + "\r\n")
        }
        if (sD || cD || (BD += "endsolid stlmesh"), zD) {
          const DD = document.createElement("a"),
            zD = new Blob([BD], {
              type: "application/octet-stream"
            });
          DD.href = window.URL.createObjectURL(zD), DD.download = wD + ".stl", DD.click()
        }
        return BD
      }
    }

    function Ur(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const sD = [];
      for (let KD = 0; KD < DD.length / wD; KD++) {
        const rD = DD[KD * wD] * (pD ? -1 : 1),
          LD = DD[KD * wD + 1],
          cD = DD[KD * wD + 2];
        sD.push(`(${rD.toPrecision(zD.precision)}, ${LD.toPrecision(zD.precision)}, ${cD.toPrecision(zD.precision)})`)
      }
      return sD.join(", ")
    }

    function fr(DD, zD) {
      const wD = [];
      for (let pD = 0; pD < DD.length / 2; pD++) {
        const sD = DD[2 * pD],
          KD = DD[2 * pD + 1];
        wD.push(`(${sD.toPrecision(zD.precision)}, ${(1-KD).toPrecision(zD.precision)})`)
      }
      return wD.join(", ")
    }

    function Ir(DD, zD, wD, pD) {
      const sD = DD.getVerticesData(RD.f.PositionKind),
        KD = DD.getVerticesData(RD.f.NormalKind);
      if (sD && KD) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${wD}"\n\t\tint[] faceVertexCounts = [${function(DD){const zD=DD.XpD()?.length?DD.getTotalIndices():DD.getTotalVertices();return Array(zD/3).fill(3).join(", ")}(DD)}]\n\t\tint[] faceVertexIndices = [${function(DD){const zD=DD.XpD(),wD=zD?.length??DD.getTotalVertices(),pD=[];if(null!==zD)for(let sD=0;sD<wD;sD++)pD.push(zD[sD]);else for(let sD=0;sD<wD;sD++)pD.push(sD);return pD.join(", ")}(DD)}]\n\t\tnormal3f[] normals = [${Ur(KD,zD,void 0,pD)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${Ur(sD,zD,void 0,pD)}]\n        ${function(DD,zD){let wD="";for(let sD=0;sD<4;sD++){const pD=sD>0?sD:"",KD=DD.getVerticesData(RD.f.UVKind+(pD?pD+1:""));KD&&(wD+=`\n\t\ttexCoord2f[] primvars:st${pD} = [${fr(KD,zD)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const pD=DD.getVerticesData(RD.f.ColorKind);return pD&&(wD+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        Ur(pD, zD, pD.length / DD.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),wD}(DD,zD)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Br(DD, zD, wD, pD) {
      return `\n        def "Geometry"\n        {\n        ${Ir(DD,zD,wD,pD)}\n        }\n        `
    }

    function Gr(DD) {
      let zD = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return zD += DD, fflate.strToU8(zD)
    }

    function hr(DD) {
      const zD = DD.m;
      return `( ${nr(zD,0)}, ${nr(zD,4)}, ${nr(zD,8)}, ${nr(zD,12)} )`
    }

    function nr(DD, zD) {
      return `(${DD[zD+0]}, ${DD[zD+1]}, ${DD[zD+2]}, ${DD[zD+3]})`
    }

    function Mr(DD, zD) {
      const wD = "Object_" + DD.uniqueId,
        pD = hr(zD);
      return `def Xform "${wD}" (\n\tprepend references = @./geometries/Geometry_${DD.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${pD}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${DD.material.uniqueId}>\n}\n\n`
    }

    function Or(DD) {
      switch (DD) {
        case QD.d.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case QD.d.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case QD.d.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function Jr(DD) {
      return `(${DD.x}, ${DD.y})`
    }

    function Er(DD) {
      return `(${DD.r}, ${DD.g}, ${DD.b})`
    }

    function Qr(DD) {
      return "image/jpeg" === DD || "image/png" === DD
    }

    function Xr(DD, zD, wD, sD, KD, rD) {
      const LD = DD.getInternalTexture().uniqueId + "_" + DD.invertY,
        gD = DD.mimeType || (0, cD.b)(DD.getInternalTexture()?.url ?? ""),
        RD = Qr(gD) ? gD : "image/png",
        AD = "image/jpeg" === RD ? "jpg" : "png";
      KD[LD] = {
        texture: DD,
        mimeType: RD,
        ext: AD
      };
      const UD = DD.coordinatesIndex > 0 ? "st" + DD.coordinatesIndex : "st",
        fD = new pD.Vector2(DD.uScale, DD.vScale),
        ID = new pD.Vector2(DD.uOffset, DD.vOffset),
        BD = DD.wAng,
        GD = Math.sin(BD),
        hD = Math.cos(BD);
      return ID.y = 1 - ID.y - fD.y, ID.x += GD * fD.x, ID.y += (1 - hD) * fD.y, `\n    def Shader "PrimvarReader_${wD}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${UD}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${wD}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${zD.uniqueId}/PrimvarReader_${wD}.outputs:result>\n        float inputs:rotation = ${(BD*(180/Math.PI)).toFixed(rD.precision)}\n        float2 inputs:scale = ${Jr(fD)}\n        float2 inputs:translation = ${Jr(ID)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${DD.uniqueId}_${wD}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${LD}.${AD}@\n        float2 inputs:st.connect = </Root/Materials/Material_${zD.uniqueId}/Transform2d_${wD}.outputs:result>\n        ${sD?"float4 inputs:scale = "+function(DD){return`(${DD.r}, ${DD.g}, ${DD.b}, 1.0)`}(sD):""}\n        token inputs:sourceColorSpace = "${DD.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Or(DD.wrapU)}"\n        token inputs:wrapT = "${Or(DD.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${zD.needAlphaBlending()||zD.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function Vr(DD, zD, wD) {
      const pD = "\t\t\t",
        sD = [],
        KD = [],
        {
          diffuseMap: rD,
          diffuse: LD,
          alphaCutOff: cD,
          emissiveMap: gD,
          emissive: RD,
          normalMap: AD,
          roughnessMap: UD,
          roughnessChannel: fD,
          roughness: ID,
          metalnessMap: BD,
          metalnessChannel: hD,
          metalness: nD,
          aoMap: MD,
          aoMapChannel: OD,
          aoMapIntensity: JD,
          alphaMap: ED,
          ior: QD,
          clearCoatEnabled: XD,
          clearCoat: VD,
          clearCoatMap: PD,
          clearCoatRoughness: CD,
          clearCoatRoughnessMap: xD
        } = function(DD) {
          const zD = {
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
          return DD instanceof rp.StandardMaterial ? {
            ...zD,
            diffuseMap: DD.diffuseTexture,
            diffuse: DD.diffuseColor,
            alphaCutOff: DD.alphaCutOff,
            emissiveMap: DD.emissiveTexture,
            emissive: DD.emissiveColor,
            roughness: 1,
            alphaMap: DD.opacityTexture
          } : DD instanceof Ez ? {
            ...zD,
            diffuseMap: DD._albedoTexture,
            diffuse: DD._albedoColor,
            alphaCutOff: DD._alphaCutOff,
            emissiveMap: DD._emissiveTexture,
            emissive: DD._emissiveColor,
            normalMap: DD._bumpTexture,
            roughnessMap: DD._metallicTexture,
            roughnessChannel: DD._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: DD._roughness ?? 1,
            metalnessMap: DD._metallicTexture,
            metalnessChannel: DD._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: DD._metallic ?? 0,
            aoMap: DD._ambientTexture,
            aoMapChannel: DD._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: DD._ambientTextureStrength,
            alphaMap: DD._opacityTexture,
            ior: DD.subSurface.indexOfRefraction,
            clearCoatEnabled: DD.clearCoat.isEnabled,
            clearCoat: DD.clearCoat.intensity,
            clearCoatMap: DD.clearCoat.texture,
            clearCoatRoughness: DD.clearCoat.roughness,
            clearCoatRoughnessMap: DD.clearCoat.useRoughnessFromMainTexture ? DD.clearCoat.texture : DD.clearCoat.textureRoughness
          } : zD
        }(DD);
      return null !== rD ? (sD.push(`${pD}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${rD.uniqueId}_diffuse.outputs:rgb>`), DD.needAlphaBlending() ? sD.push(`${pD}float inputs:opacity.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${rD.uniqueId}_diffuse.outputs:a>`) : DD.needAlphaTesting() && (sD.push(`${pD}float inputs:opacity.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${rD.uniqueId}_diffuse.outputs:a>`), sD.push(`${pD}float inputs:opacityThreshold = ${cD}`)), KD.push(Xr(rD, DD, "diffuse", LD, zD, wD))) : sD.push(`${pD}color3f inputs:diffuseColor = ${Er(LD||GD.Color3.White())}`), null !== gD ? (sD.push(`${pD}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${gD.uniqueId}_emissive.outputs:rgb>`), KD.push(Xr(gD, DD, "emissive", RD, zD, wD))) : RD && RD.toLuminance() > 0 && sD.push(`${pD}color3f inputs:emissiveColor = ${Er(RD)}`), null !== AD && (sD.push(`${pD}normal3f inputs:normal.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${AD.uniqueId}_normal.outputs:rgb>`), KD.push(Xr(AD, DD, "normal", null, zD, wD))), null !== MD && (sD.push(`${pD}float inputs:occlusion.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${MD.uniqueId}_occlusion.outputs:${OD}>`), KD.push(Xr(MD, DD, "occlusion", new GD.Color3(JD, JD, JD), zD, wD))), null !== UD ? (sD.push(`${pD}float inputs:roughness.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${UD.uniqueId}_roughness.outputs:${fD}>`), KD.push(Xr(UD, DD, "roughness", new GD.Color3(ID, ID, ID), zD, wD))) : sD.push(`${pD}float inputs:roughness = ${ID}`), null !== BD ? (sD.push(`${pD}float inputs:metallic.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${BD.uniqueId}_metallic.outputs:${hD}>`), KD.push(Xr(BD, DD, "metallic", new GD.Color3(nD, nD, nD), zD, wD))) : sD.push(`${pD}float inputs:metallic = ${nD}`), null !== ED ? (sD.push(`${pD}float inputs:opacity.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${ED.uniqueId}_opacity.outputs:r>`), sD.push(`${pD}float inputs:opacityThreshold = 0.0001`), KD.push(Xr(ED, DD, "opacity", null, zD, wD))) : sD.push(`${pD}float inputs:opacity = ${DD.alpha}`), XD && (null !== PD ? (sD.push(`${pD}float inputs:clearcoat.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${PD.uniqueId}_clearcoat.outputs:r>`), KD.push(Xr(PD, DD, "clearcoat", new GD.Color3(VD, VD, VD), zD, wD))) : sD.push(`${pD}float inputs:clearcoat = ${VD}`), null !== xD ? (sD.push(`${pD}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${DD.uniqueId}/Texture_${xD.uniqueId}_clearcoatRoughness.outputs:g>`), KD.push(Xr(xD, DD, "clearcoatRoughness", new GD.Color3(CD, CD, CD), zD, wD))) : sD.push(`${pD}float inputs:clearcoatRoughness = ${CD}`)), sD.push(`${pD}float inputs:ior = ${QD}`), `\n\tdef Material "Material_${DD.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${sD.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${DD.uniqueId}/PreviewSurface.outputs:surface>\n\n${KD.join("\n")}\n\n\t}\n`
    }

    function Pr(DD) {
      DD.computeWorldMatrix(!0);
      const zD = DD.getWorldMatrix().clone(),
        wD = DD.Ul().useRightHandedSystem;
      let pD = DD.material?._getEffectiveOrientation(DD) ?? DD.sideOrientation,
        rD = !wD,
        LD = DD.parent;
      for (; LD;) {
        if (lw(LD, wD) && null === LD.parent) {
          wD || (zD.multiplyToRef(LD.getWorldMatrix().invert(), zD), pD = pD === KD.b.ClockWiseSideOrientation ? KD.b.CounterClockWiseSideOrientation : KD.b.ClockWiseSideOrientation), rD = !1;
          break
        }
        LD = LD.parent
      }
      return zD.determinant() < 0 && sD.Tools.Warn(`Mesh ${DD.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: zD,
        windingOrder: pD === KD.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: rD
      }
    }
    async function Cr(DD, zD, wD) {
      const KD = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...zD
      };
      "undefined" === typeof fflate && await sD.Tools.LoadScriptAsync(KD.fflateUrl);
      const rD = {};
      rD[KD.modelFileName] = null;
      let LD = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      LD += function(DD) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===DD.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${DD.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${DD.planeAnchoringAlignment}"`:""}\n            `
      }(KD);
      const cD = {};
      for (const pD of DD.meshes) {
        if (0 === pD.getTotalVertices()) continue;
        const DD = pD,
          zD = DD.geometry,
          gD = DD.material;
        if (!gD || !zD || wD && !wD(DD)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(gD.getClassName())) {
          const wD = "geometries/Geometry_" + zD.uniqueId + ".usda",
            {
              matrix: pD,
              windingOrder: sD,
              convertToRightHanded: RD
            } = Pr(DD);
          if (!(wD in rD)) {
            const DD = Br(zD, KD, sD, RD);
            rD[wD] = Gr(DD)
          }
          gD.uniqueId in cD || (cD[gD.uniqueId] = gD), LD += Mr(DD, pD)
        } else sD.Tools.Warn("USDZExportAsync does not support this material type: " + gD.getClassName())
      }
      DD.activeCamera && KD.exportCamera && (LD += function(DD, zD) {
        const wD = "Camera_" + DD.uniqueId,
          sD = hr(pD.Matrix.RotationY(Math.PI).multiply(DD.getWorldMatrix()));
        if (DD.mode === QD.d.ORTHOGRAPHIC_CAMERA) return `def Camera "${wD}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${sD}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${DD.minZ.toPrecision(zD.precision)}, ${DD.maxZ.toPrecision(zD.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(DD.orthoLeft||1)+Math.abs(DD.orthoRight||1))).toPrecision(zD.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(DD.orthoTop||1)+Math.abs(DD.orthoBottom||1))).toPrecision(zD.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const pD = DD.iI().getAspectRatio(DD),
            KD = zD.cameraSensorWidth || 35;
          return `def Camera "${wD}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${sD}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${DD.minZ.toPrecision(zD.precision)}, ${DD.maxZ.toPrecision(zD.precision)})\n\t\t\tfloat focalLength = ${(KD/(2*Math.tan(.5*DD.fov))).toPrecision(zD.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(KD*pD).toPrecision(zD.precision)}\n\t\t\tfloat verticalAperture = ${(KD/pD).toPrecision(zD.precision)}            \n\t\t}\n\t\n\t`
        }
      }(DD.activeCamera, KD)), LD += "\n            }\n        }";
      const gD = {};
      LD += function(DD, zD, wD) {
        const pD = [];
        for (const sD in DD) {
          const KD = DD[sD];
          pD.push(Vr(KD, zD, wD))
        }
        return `\n    def "Materials"\n{\n${pD.join("")}\n}\n\n`
      }(cD, gD, KD), LD += "\n    }", rD[KD.modelFileName] = fflate.strToU8(LD);
      for (const pD in gD) {
        const {
          texture: DD,
          ext: zD,
          mimeType: wD
        } = gD[pD], sD = await nw(DD);
        if (sD && Qr(sD.mimeType) && sD.mimeType === wD) rD[`textures/Texture_${pD}.${zD}`] = new Uint8Array(sD.data);
        else {
          const sD = DD.getSize(),
            KD = await (0, OD.e)(DD),
            LD = await XD.DumpTools.DumpDataAsync(sD.width, sD.height, KD, wD, void 0, !1, !0);
          rD[`textures/Texture_${pD}.${zD}`] = new Uint8Array(LD).slice()
        }
      }
      let RD = 0;
      for (const pD in rD) {
        const DD = rD[pD];
        if (!DD) continue;
        RD += 34 + pD.length;
        const zD = 63 & RD;
        if (4 !== zD) {
          const wD = new Uint8Array(64 - zD);
          rD[pD] = [DD, {
            extra: {
              12345: wD
            }
          }]
        }
        RD = DD.length
      }
      return fflate.zipSync(rD, {
        level: 0
      })
    }
    var xr = wD(41023);
    class Tr {
      static Export(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          wD = arguments.length > 2 ? arguments[2] : void 0;
        if (!DD || 0 === DD.bones.length) throw new Error("Invalid or empty skeleton provided");
        let pD = zD;
        zD && 0 !== zD.length || (pD = DD.animations.map((DD => DD.name)));
        let sD = null;
        for (const gD of pD) {
          const zD = DD.getAnimationRange(gD);
          zD && (sD = sD ? new xr.e("animation-range", Math.min(sD.from, zD.from), Math.max(sD.to, zD.to)) : zD)
        }
        if (!sD && (DD.animations.length > 0 && (sD = DD.getAnimationRange(DD.animations[0].name)), !sD)) throw new Error("No animation range found in skeleton");
        const KD = wD || 1 / (DD.animations[0]?.framePerSecond || 30),
          rD = this._BuildBoneHierarchy(DD, pD);
        let LD = 0;
        for (const gD of rD) gD.positionKeys.length > 0 && (LD = Math.max(LD, gD.positionKeys.length)), gD.rotationKeys.length > 0 && (LD = Math.max(LD, gD.rotationKeys.length));
        0 === LD && (LD = Math.floor((sD.to - sD.from) / KD) + 1);
        let cD = "";
        return cD += "HIERARCHY\n", cD += this._ExportHierarchy(rD, 0), cD += "MOTION\n", cD += `Frames: ${LD}\n`, cD += `Frame Time: ${KD.toFixed(6)}\n`, cD += this._ExportMotionData(rD, LD, 0, pD), cD
      }
      static _BuildBoneHierarchy(DD, zD) {
        const wD = new Map,
          pD = [];
        for (const sD of DD.bones) {
          const DD = {
            bone: sD,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          wD.set(sD, DD)
        }
        for (const sD of DD.bones) {
          const DD = wD.get(sD);
          if (sD.animations.length > 0)
            for (const wD of sD.animations) zD.includes(wD.name) && ("position" === wD.targetProperty ? (DD.hasPositionChannels = !0, DD.positionKeys.push(...wD.getKeys())) : "rotationQuaternion" === wD.targetProperty && (DD.hasRotationChannels = !0, DD.rotationKeys.push(...wD.getKeys())));
          if (sD.getParent()) {
            const zD = wD.get(sD.getParent());
            zD && zD.children.push(DD)
          } else pD.push(DD)
        }
        return pD
      }
      static _ExportHierarchy(DD, zD) {
        let wD = "";
        const pD = "    ".repeat(zD);
        for (const sD of DD) {
          const DD = sD.bone;
          if (this._IsEndSite(sD)) {
            wD += `${pD}End Site\n`, wD += `${pD}{\n`;
            const zD = this._GetBoneOffset(DD);
            wD += `${pD}    OFFSET ${zD.x.toFixed(6)} ${zD.y.toFixed(6)} ${zD.z.toFixed(6)}\n`, wD += `${pD}}\n`
          } else {
            wD += `${0===zD?"ROOT":`${pD}JOINT`} ${DD.name}\n`, wD += `${pD}{\n`;
            const KD = this._GetBoneOffset(DD);
            wD += `${pD}    OFFSET ${KD.x.toFixed(6)} ${KD.y.toFixed(6)} ${KD.z.toFixed(6)}\n`;
            const rD = [];
            sD.hasPositionChannels && rD.push("Xposition", "Yposition", "Zposition"), sD.hasRotationChannels && rD.push("Zrotation", "Xrotation", "Yrotation"), rD.length > 0 && (wD += `${pD}    CHANNELS ${rD.length} ${rD.join(" ")}\n`), sD.children.length > 0 && (wD += this._ExportHierarchy(sD.children, zD + 1)), wD += `${pD}}\n`
          }
        }
        return wD
      }
      static _IsEndSite(DD) {
        return 0 === DD.children.length
      }
      static _GetBoneOffset(DD) {
        try {
          if (!DD.getParent()) return DD.getRestMatrix().getTranslation();
          return DD.getLocalMatrix().getTranslation()
        } catch (zD) {
          return pD.WI.Zero()
        }
      }
      static _ExportMotionData(DD, zD, wD, pD) {
        let sD = "";
        for (let KD = 0; KD < zD; KD++) {
          const zD = [];
          this._CollectFrameValues(DD, KD + wD, zD, pD), sD += zD.map((DD => DD.toFixed(6))).join(" ") + "\n"
        }
        return sD
      }
      static _CollectFrameValues(DD, zD, wD, pD) {
        for (const sD of DD)
          if (!this._IsEndSite(sD)) {
            if (sD.hasPositionChannels) {
              const DD = this._GetPositionAtFrameIndex(sD.positionKeys, zD);
              wD.push(DD.x, DD.y, DD.z)
            }
            if (sD.hasRotationChannels) {
              const DD = this._GetRotationAtFrameIndex(sD.rotationKeys, zD),
                pD = this._QuaternionToEuler(DD);
              wD.push(pD.z, pD.x, pD.y)
            }
            sD.children.length > 0 && this._CollectFrameValues(sD.children, zD, wD, pD)
          }
      }
      static _GetPositionAtFrameIndex(DD, zD) {
        if (0 === DD.length) return pD.WI.Zero();
        return DD[Math.max(0, Math.min(zD, DD.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(DD, zD) {
        if (0 === DD.length) return pD.Quaternion.Identity();
        return DD[Math.max(0, Math.min(zD, DD.length - 1))].value.clone()
      }
      static _QuaternionToEuler(DD) {
        const zD = new pD.Matrix;
        DD.toRotationMatrix(zD);
        const wD = zD.m;
        let KD, rD, LD;
        const cD = Math.sqrt(wD[0] * wD[0] + wD[1] * wD[1]);
        return cD > Sw.b ? (KD = Math.atan2(wD[6], wD[10]), rD = Math.atan2(-wD[2], cD), LD = Math.atan2(wD[1], wD[0])) : (KD = Math.atan2(-wD[9], wD[5]), rD = Math.atan2(-wD[2], cD), LD = 0), new pD.WI(sD.Tools.ToDegrees(KD), sD.Tools.ToDegrees(rD), sD.Tools.ToDegrees(LD))
      }
    }

    function br(DD) {
      return "string" === typeof DD?.name
    }
    const jr = Symbol("__xml:meta$__"),
      dr = Symbol("__xml:name$__");

    function Sr(DD, zD) {
      Object.prototype.hasOwnProperty.call(DD.metadata, jr) || (DD.metadata[jr] = []), DD.metadata[jr].push(zD)
    }

    function ir(DD) {
      return (zD, wD) => {
        zD[dr] = DD
      }
    }

    function lr() {
      return (DD, zD) => Sr(zD, {
        kind: "none",
        prop: String(zD.name),
        ignore: !0
      })
    }

    function Wr(DD) {
      return (zD, wD) => Sr(wD, {
        kind: "attr",
        prop: String(wD.name),
        ...DD
      })
    }

    function Nr(DD) {
      return (zD, wD) => Sr(wD, {
        kind: "elem",
        prop: String(wD.name),
        ...DD
      })
    }

    function Zr(DD) {
      const zD = "function" === typeof DD ? DD : DD?.constructor,
        wD = zD?.[Symbol.metadata];
      if (!wD) return [];
      const pD = [];
      let sD = wD;
      for (; sD;) Object.prototype.hasOwnProperty.call(sD, jr) && pD.push(...sD[jr]), sD = Object.getPrototypeOf(sD);
      return pD
    }

    function yr(DD) {
      const zD = DD?.constructor?.[dr];
      return zD || void 0
    }

    function kr(DD) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(DD)
    }

    function mr(DD) {
      if (br(DD)) return DD;
      const zD = (DD ?? "").trim();
      if (!zD) return {
        name: ""
      };
      const wD = zD.indexOf(":");
      if (-1 === wD) return {
        name: zD
      };
      if (-1 !== zD.indexOf(":", wD + 1)) return {
        name: zD
      };
      const pD = zD.slice(0, wD),
        sD = zD.slice(wD + 1);
      return kr(pD) && kr(sD) ? {
        ns: pD,
        name: sD
      } : {
        name: zD
      }
    }

    function er(DD, zD) {
      return zD ? `${zD}:${DD}` : DD
    }
    const or = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      ar = Object.freeze({
        number: or
      });

    function ur(DD) {
      const zD = DD?.eps ?? or.eps;
      return {
        eps: zD,
        maxDecimalsCap: DD?.maxDecimalsCap ?? or.maxDecimalsCap,
        trimTrailingZeros: DD?.trimTrailingZeros ?? or.trimTrailingZeros,
        fixedDecimals: DD?.fixedDecimals,
        allowScientific: DD?.allowScientific ?? or.allowScientific,
        snapNearZero: DD?.snapNearZero ?? or.snapNearZero,
        zeroThreshold: DD?.zeroThreshold ?? zD,
        perAttributeEps: DD?.perAttributeEps
      }
    }

    function vr(DD) {
      return {
        number: ur(DD?.number)
      }
    }
    class tr {
      constructor(DD) {
        if (this.o = DD, this._o = DD.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(DD) {
        if (!Number.isFinite(DD)) throw new Error(`Cannot format non-finite number: ${DD}`);
        const zD = this._o,
          wD = this._clampInt(zD.maxDecimalsCap ?? 15, 0, 20),
          pD = zD.trimTrailingZeros ?? !0,
          sD = zD.snapNearZero ?? !0,
          KD = zD.zeroThreshold ?? zD.eps,
          rD = 1 / zD.eps;
        let LD, cD = Math.round(DD * rD) / rD;
        if (Object.is(cD, -0) && (cD = 0), sD && Math.abs(cD) <= KD && (cD = 0), LD = void 0 !== zD.fixedDecimals ? this._clampInt(zD.fixedDecimals, 0, wD) : this._clampInt(Math.ceil(-Math.log10(zD.eps)), 0, wD), zD.allowScientific, 0 === LD) return String(Math.trunc(cD));
        let gD = cD.toFixed(LD);
        if (pD && void 0 === zD.fixedDecimals && (gD = gD.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(gD)) throw new Error(`Scientific notation not allowed in XML output: ${gD}`);
        return gD
      }
      _clampInt(DD, zD, wD) {
        return Number.isFinite(DD) ? (DD = Math.trunc(DD), Math.max(zD, Math.min(wD, DD))) : zD
      }
    }

    function Fr(DD) {
      return DD instanceof Date
    }

    function Yr(DD) {
      return "string" === typeof DD
    }

    function Hr(DD) {
      return "string" === typeof DD || "number" === typeof DD || "boolean" === typeof DD || "bigint" === typeof DD || Fr(DD)
    }

    function qr(DD) {
      return "number" === typeof DD || "boolean" === typeof DD || "bigint" === typeof DD || Fr(DD)
    }
    class DL {
      constructor(DD, zD) {
        this._ns = new Map, this._prefixCount = 0, this._builder = DD, this._format = vr(zD), this._nFmt = new tr(this._format)
      }
      withNamespace() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        for (const pD of zD) this._assignNamespace(pD);
        return this
      }
      serialize(DD, zD) {
        if (!(zD = zD ?? yr(DD))) throw new Error("can not find name for given object");
        const wD = mr(zD);
        wD.ns && this._assignNamespace(wD.ns, "xmlns"), this._gatherNamespaces(DD, new WeakSet);
        const pD = this._builder.ele(null, wD.name);
        for (const [sD, KD] of Array.from(this._ns.entries())) pD.att("xmlns", KD, sD);
        this._writeObjectContent(pD, DD, (new WeakSet).add(DD)), this._builder.end()
      }
      _writeObject(DD, zD, wD) {
        if (wD.has(zD)) return;
        if (wD.add(zD), Array.isArray(zD)) {
          for (const pD of zD) qr(pD) || (Yr(pD) ? this._builder.text(pD) : this._writeObject(DD, pD, wD));
          return
        }
        const pD = yr(zD);
        if (!pD) return;
        const sD = mr(pD),
          KD = this._getPrefix(sD),
          rD = er(sD.name, KD);
        DD.ele(null, rD), this._writeObjectContent(DD, zD, wD), this._builder.end()
      }
      _getPrefix(DD) {
        if (DD.ns) {
          const zD = this._ns.get(DD.ns.toLowerCase());
          if ("xmlns" !== zD) return zD
        }
      }
      _writeObjectContent(DD, zD, wD) {
        const pD = Zr(zD) ?? [],
          sD = new Map;
        for (const rD of pD) {
          const DD = sD.get(rD.prop) ?? [];
          DD.push(rD), sD.set(rD.prop, DD)
        }
        const KD = Object.keys(zD).sort(((DD, zD) => {
          const wD = (sD.get(DD) ?? []).some((DD => "attr" === DD.kind));
          return wD === (sD.get(zD) ?? []).some((DD => "attr" === DD.kind)) ? 0 : wD ? -1 : 1
        }));
        for (const rD of KD) {
          const pD = zD[rD];
          if (null === pD || void 0 === pD) continue;
          const KD = sD.get(rD);
          if (KD) {
            if (KD.some((DD => !0 === DD.ignore || "none" === DD.kind))) continue;
            for (const zD of KD) {
              const wD = zD.name ?? zD.prop.toLowerCase();
              if (wD) switch (zD.kind) {
                case "attr": {
                  let sD = null;
                  if ("number" === typeof pD && this._nFmt && (sD = this._nFmt.toString(pD)), zD.formatter) {
                    sD = new zD.formatter(this._format).toString(pD)
                  }
                  if (sD = sD ?? pD.toString(), sD) {
                    const zD = mr(wD),
                      pD = this._getPrefix(zD),
                      KD = er(zD.name, pD);
                    DD.att(null, KD, sD)
                  }
                  break
                }
              }
            }
          } else qr(pD) || (Yr(pD) ? this._builder.text(pD) : this._writeObject(DD, pD, wD))
        }
      }
      _gatherNamespaces(DD, zD) {
        if (zD.has(DD)) return;
        if (zD.add(DD), Array.isArray(DD)) {
          for (const wD of DD) Hr(wD) || this._gatherNamespaces(wD, zD);
          return
        }
        const wD = yr(DD);
        wD && this._assignNamespace(wD);
        const pD = Zr(DD) ?? [],
          sD = new Map;
        for (const rD of pD) {
          const DD = sD.get(rD.prop) ?? [];
          DD.push(rD), sD.set(rD.prop, DD)
        }
        const KD = [];
        for (const rD of Object.keys(DD)) {
          const zD = DD[rD];
          if (null === zD || void 0 === zD) continue;
          const wD = sD.get(rD);
          if (wD) {
            if (wD.some((DD => !0 === DD.ignore || "none" === DD.kind))) continue;
            for (const DD of wD) DD.name && this._assignNamespace(DD.name)
          }
          KD.push(zD)
        }
        for (const rD of KD) Hr(rD) || this._gatherNamespaces(rD, zD)
      }
      _assignNamespace(DD, zD) {
        const wD = mr(DD);
        if (wD?.ns) {
          const DD = wD.ns.toLowerCase();
          this._ns.get(DD) || this._ns.set(DD, zD ?? this._buildNsPrefix(DD))
        } else if ("xmlns" === zD) {
          const DD = wD.name.toLowerCase();
          this._ns.get(DD) || this._ns.set(DD, zD ?? this._buildNsPrefix(DD))
        }
      }
      _buildNsPrefix(DD) {
        let zD, wD = !1;
        do {
          zD = "ns" + this._prefixCount++;
          for (const DD of Array.from(this._ns.values()))
            if (DD === zD) {
              wD = !0;
              break
            }
        } while (wD);
        return zD
      }
    }
    class zL {}
    var wL;
    zL.OpenTag = "<", zL.CloseTag = ">", zL.Slash = "/", zL.Question = "?", zL.Quote = '"', zL.Equal = "=", zL.Space = " ", zL.Semicolon = ":", zL.Dec = "<?xml", zL.Xml = "xml", zL.Xmlns = "xmlns", zL.Xsi = "xsi", zL.VersionKeyword = "version", zL.EncodingKeyword = "encoding", zL.StandaloneKeyword = "standalone",
      function(DD) {
        DD[DD.Declaration = 0] = "Declaration", DD[DD.Tag = 1] = "Tag", DD[DD.Attribute = 2] = "Attribute", DD[DD.Text = 3] = "Text"
      }(wL || (wL = {}));
    class pL {
      constructor(DD) {
        this._ctxStack = [], this._d = 0, this._w = DD
      }
      dec(DD, zD, wD) {
        return this._w.write(zL.Dec), this._writeAttStr(zL.VersionKeyword, DD), zD && this._writeAttStr(zL.EncodingKeyword, zD), void 0 !== wD && this._writeAttStr(zL.StandaloneKeyword, wD ? "yes" : "no"), this._w.write(zL.Question, zL.CloseTag), this
      }
      att(DD, zD, wD) {
        const pD = this._peekContext();
        if (!pD) throw new Error("att() without open element");
        if (pD.closed) throw new Error(`att() after start tag closed for <${pD.name}>`);
        if (this._isXmlnsDecl(DD, zD)) {
          if (zD === zL.Xmlns) pD.defaultNs = wD, this._registerNamespace(pD, "", wD), this._writeAttStr(zL.Xmlns, wD);
          else if (DD) this._registerNamespace(pD, zD, wD), this._writeAttStr(`${DD}:${zD}`, wD);
          else {
            const DD = zD.slice(6);
            this._registerNamespace(pD, DD, wD), this._writeAttStr(zD, wD)
          }
          return pD.lastToken = wL.Attribute, this
        }
        let sD = zD;
        if (DD) {
          sD = `${this._ensurePrefixDeclared(pD,DD)}:${zD}`
        }
        return pD.lastToken = wL.Attribute, this._writeAttStr(sD, wD), this
      }
      ele(DD, zD) {
        const wD = this._peekContext();
        wD && this._closeOpenTagIfNeeded(wD);
        let pD = zD;
        if (DD) {
          pD = `${this._lookupPrefix(DD)??DD}:${zD}`
        }
        return this._pushContext(pD, ++this._d), this._w.write(zL.OpenTag, pD), this
      }
      text(DD) {
        const zD = this._peekContext();
        if (!zD) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(zD), zD.lastToken = wL.Text, this._w.write(this._escText(DD)), this
      }
      end() {
        const DD = this._popContext();
        return DD && (this._d--, DD.closed ? this._w.write(zL.OpenTag, zL.Slash, DD.name, zL.CloseTag) : this._w.write(zL.Slash, zL.CloseTag)), this
      }
      _pushContext(DD, zD) {
        const wD = new pL.Context(DD, zD);
        return this._ctxStack.push(wD), wD
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
      _writeAttStr(DD, zD) {
        this._w.write(zL.Space, DD, zL.Equal, zL.Quote, this._escAttr(zD), zL.Quote)
      }
      _lookupPrefix(DD) {
        let zD = this._ctxStack.length - 1;
        if (zD >= 0)
          do {
            const wD = this._ctxStack[zD--],
              pD = wD.ns2prefix?.get(DD);
            if (pD) return pD
          } while (zD >= 0)
      }
      _escText(DD) {
        return DD.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(DD) {
        return this._escText(DD).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(DD, zD) {
        if (DD) return DD === zL.Xmlns;
        const wD = zD.length,
          pD = zL.Xmlns.length;
        return wD >= pD && (zD.startsWith(zL.Xmlns) && (zD.length == pD || zD[pD] == zL.Semicolon))
      }
      _registerNamespace(DD, zD, wD) {
        if (zD === zL.Xml || zD === zL.Xmlns) throw new Error(`reserved prefix '${zD}'`);
        const pD = DD.prefix2ns.get(zD);
        if (pD && pD !== wD) throw new Error(`prefix '${zD}' already bound to a different namespace`);
        DD.ns2prefix.get(wD) || DD.ns2prefix.set(wD, zD), DD.prefix2ns.set(zD, wD)
      }
      _allocPrefix(DD) {
        let zD = 1;
        for (;;) {
          const wD = "ns" + zD++;
          if (!DD.prefix2ns.has(wD)) return wD
        }
      }
      _ensurePrefixDeclared(DD, zD) {
        const wD = this._lookupPrefix(zD);
        if (wD) return wD;
        if (DD.closed) throw new Error(`can not declare namespace after start tag closed for <${DD.name}>`);
        const pD = this._allocPrefix(DD);
        return this._writeAttStr(`${zL.Xmlns}:${pD}`, zD), this._registerNamespace(DD, pD, zD), pD
      }
      _closeOpenTagIfNeeded(DD) {
        DD.closed || (this._w.write(zL.CloseTag), DD.closed = !0)
      }
    }
    pL.Context = class {
      constructor(DD, zD) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = DD, this.depth = zD
      }
    };
    class sL {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        if (0 === zD.length) return this;
        const pD = zD.join("");
        return this._chunks.push(pD), this.count += pD.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class KL {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = DD, this._opts = zD, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        if (0 === zD.length) return this;
        const pD = zD.join("");
        if (0 === pD.length) return this;
        this._pending += pD, this._pendingChars += pD.length;
        const sD = this._opts.flushChars ?? 65536;
        return this._pendingChars >= sD && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const DD = this._encoder.encode(this._pending);
        return this._sink.push(DD), this.count += DD.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const rL = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      LL = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var cL, gL;
    ! function(DD) {
      DD.micron = "micron", DD.millimeter = "millimeter", DD.centimeter = "centimeter", DD.inch = "inch", DD.foot = "foot", DD.meter = "meter"
    }(cL || (cL = {})),
    function(DD) {
      DD.model = "model", DD.solidsupport = "solidsupport", DD.support = "support", DD.surface = "surface", DD.other = "other"
    }(gL || (gL = {}));
    const RL = "http://schemas.openxmlformats.org/package/2006/content-types",
      AL = "http://schemas.openxmlformats.org/package/2006/relationships";
    var UL;
    ! function(DD) {
      DD.Relationships = "application/vnd.openxmlformats-package.relationships+xml", DD.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", DD.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", DD.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", DD.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", DD.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", DD.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", DD.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", DD.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", DD.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", DD.Png = "image/png", DD.Jpeg = "image/jpeg", DD.Tiff = "image/tiff", DD.Xml = "application/xml"
    }(UL || (UL = {}));
    const fL = "_rels/",
      IL = "3D/",
      BL = "3dmodel.model",
      GL = ".rels",
      hL = "[Content_Types].xml";
    class nL {
      static IsKnown(DD) {
        return nL.Known.has(DD)
      }
      static IsThreeDimModel(DD) {
        return DD === nL.ThreeDimModel
      }
    }
    nL.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", nL.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", nL.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", nL.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", nL.Known = new Set([nL.ThreeDimModel, nL.Thumbnail, nL.PrintTicket, nL.MustPreserve]);
    let ML = (() => {
        let DD, zD, wD = [ir({
            ns: RL,
            name: "Types"
          })],
          pD = [];
        zD = class {
          constructor() {
            this.items = []
          }
        };
        return (0, VD.n)(zD, "ThreeMfContentTypes"), (() => {
          const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, VD.i)(null, DD = {
            value: zD
          }, wD, {
            kind: "class",
            name: zD.name,
            metadata: sD
          }, null, pD), zD = DD.value, sD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sD
          }), (0, VD.m)(zD, pD)
        })(), zD
      })(),
      OL = (() => {
        let DD, zD, wD, pD, sD = [ir({
            ns: RL,
            name: "Default"
          })],
          KD = [],
          rD = [],
          LD = [],
          cD = [],
          gD = [];
        zD = class {
          constructor(DD, zD) {
            this.ext = (0, VD.m)(this, rD, void 0), this.ct = ((0, VD.m)(this, LD), (0, VD.m)(this, cD, void 0)), (0, VD.m)(this, gD), this.ext = DD, this.ct = zD
          }
        };
        return (0, VD.n)(zD, "ThreeMfContentType"), (() => {
          const RD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wD = [Wr({
            name: {
              ns: RL,
              name: "Extension"
            }
          })], pD = [Wr({
            name: {
              ns: RL,
              name: "ContentType"
            }
          })], (0, VD.i)(null, null, wD, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: DD => "ext" in DD,
              get: DD => DD.ext,
              set: (DD, zD) => {
                DD.ext = zD
              }
            },
            metadata: RD
          }, rD, LD), (0, VD.i)(null, null, pD, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: DD => "ct" in DD,
              get: DD => DD.ct,
              set: (DD, zD) => {
                DD.ct = zD
              }
            },
            metadata: RD
          }, cD, gD), (0, VD.i)(null, DD = {
            value: zD
          }, sD, {
            kind: "class",
            name: zD.name,
            metadata: RD
          }, null, KD), zD = DD.value, RD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RD
          }), (0, VD.m)(zD, KD)
        })(), zD
      })(),
      JL = (() => {
        let DD, zD, wD = [ir({
            ns: AL,
            name: "Relationships"
          })],
          pD = [];
        zD = class {
          constructor() {
            this.items = []
          }
        };
        return (0, VD.n)(zD, "ThreeMfRelationships"), (() => {
          const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, VD.i)(null, DD = {
            value: zD
          }, wD, {
            kind: "class",
            name: zD.name,
            metadata: sD
          }, null, pD), zD = DD.value, sD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sD
          }), (0, VD.m)(zD, pD)
        })(), zD
      })(),
      EL = (() => {
        let DD, zD, wD, pD, sD, KD = [ir({
            ns: AL,
            name: "Relationship"
          })],
          rD = [],
          LD = [],
          cD = [],
          gD = [],
          RD = [],
          AD = [],
          UD = [];
        zD = class {
          constructor(DD, zD, wD) {
            this.id = (0, VD.m)(this, LD, void 0), this.type = ((0, VD.m)(this, cD), (0, VD.m)(this, gD, void 0)), this.target = ((0, VD.m)(this, RD), (0, VD.m)(this, AD, void 0)), (0, VD.m)(this, UD), this.id = DD, this.type = zD, this.target = wD
          }
        };
        return (0, VD.n)(zD, "ThreeMfRelationship"), (() => {
          const fD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wD = [Wr({
            name: "Id"
          })], pD = [Wr({
            name: "Type"
          })], sD = [Wr({
            name: "Target"
          })], (0, VD.i)(null, null, wD, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: DD => "id" in DD,
              get: DD => DD.id,
              set: (DD, zD) => {
                DD.id = zD
              }
            },
            metadata: fD
          }, LD, cD), (0, VD.i)(null, null, pD, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: DD => "type" in DD,
              get: DD => DD.type,
              set: (DD, zD) => {
                DD.type = zD
              }
            },
            metadata: fD
          }, gD, RD), (0, VD.i)(null, null, sD, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: DD => "target" in DD,
              get: DD => DD.target,
              set: (DD, zD) => {
                DD.target = zD
              }
            },
            metadata: fD
          }, AD, UD), (0, VD.i)(null, DD = {
            value: zD
          }, KD, {
            kind: "class",
            name: zD.name,
            metadata: fD
          }, null, rD), zD = DD.value, fD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fD
          }), (0, VD.m)(zD, rD)
        })(), zD
      })();
    class QL {
      constructor(DD, zD, wD) {
        this.contentTypes = DD, this.relationships = zD, this.model = wD
      }
    }
    class XL {
      static Zero() {
        return new XL([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(DD) {
        this.values = DD
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class VL {
      constructor(DD) {
        this.o = DD, this._f = new tr(DD)
      }
      toString(DD) {
        return DD.values.map((DD => this._f.toString(DD))).join(" ")
      }
    }
    let PL = (() => {
        let DD, zD, wD, pD, sD, KD = [ir({
            ns: rL,
            name: "model"
          })],
          rD = [],
          LD = [],
          cD = [],
          gD = [],
          RD = [],
          AD = [],
          UD = [];
        zD = class {
          constructor() {
            this.unit = (0, VD.m)(this, LD, cL.millimeter), this.requiredextensions = ((0, VD.m)(this, cD), (0, VD.m)(this, gD, void 0)), this.recommendedextensions = ((0, VD.m)(this, RD), (0, VD.m)(this, AD, void 0)), this.metadata = (0, VD.m)(this, UD)
          }
        };
        return (0, VD.n)(zD, "ThreeMfModel"), (() => {
          const fD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wD = [Wr({
            name: "unit"
          })], pD = [Wr({
            name: "requiredextensions"
          })], sD = [Wr({
            name: "recommendedextensions"
          })], (0, VD.i)(null, null, wD, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: DD => "unit" in DD,
              get: DD => DD.unit,
              set: (DD, zD) => {
                DD.unit = zD
              }
            },
            metadata: fD
          }, LD, cD), (0, VD.i)(null, null, pD, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: DD => "requiredextensions" in DD,
              get: DD => DD.requiredextensions,
              set: (DD, zD) => {
                DD.requiredextensions = zD
              }
            },
            metadata: fD
          }, gD, RD), (0, VD.i)(null, null, sD, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: DD => "recommendedextensions" in DD,
              get: DD => DD.recommendedextensions,
              set: (DD, zD) => {
                DD.recommendedextensions = zD
              }
            },
            metadata: fD
          }, AD, UD), (0, VD.i)(null, DD = {
            value: zD
          }, KD, {
            kind: "class",
            name: zD.name,
            metadata: fD
          }, null, rD), zD = DD.value, fD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fD
          })
        })(), zD.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, VD.m)(zD, rD), zD
      })(),
      CL = (() => {
        let DD, zD, wD, pD, sD, KD = [ir({
            ns: rL,
            name: "meta"
          })],
          rD = [],
          LD = [],
          cD = [],
          gD = [],
          RD = [],
          AD = [],
          UD = [];
        zD = class {
          constructor(DD, zD, wD, pD) {
            this.name = (0, VD.m)(this, LD, void 0), this.preserve = ((0, VD.m)(this, cD), (0, VD.m)(this, gD, void 0)), this.type = ((0, VD.m)(this, RD), (0, VD.m)(this, AD, void 0)), this.value = (0, VD.m)(this, UD), this.name = DD, this.value = zD, this.preserve = wD, this.type = pD
          }
        };
        return (0, VD.n)(zD, "ThreeMfMeta"), (() => {
          const fD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wD = [Wr({
            name: "name"
          })], pD = [Wr({
            name: "preserve"
          })], sD = [Wr({
            name: "type"
          })], (0, VD.i)(null, null, wD, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: DD => "name" in DD,
              get: DD => DD.name,
              set: (DD, zD) => {
                DD.name = zD
              }
            },
            metadata: fD
          }, LD, cD), (0, VD.i)(null, null, pD, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: DD => "preserve" in DD,
              get: DD => DD.preserve,
              set: (DD, zD) => {
                DD.preserve = zD
              }
            },
            metadata: fD
          }, gD, RD), (0, VD.i)(null, null, sD, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: DD => "type" in DD,
              get: DD => DD.type,
              set: (DD, zD) => {
                DD.type = zD
              }
            },
            metadata: fD
          }, AD, UD), (0, VD.i)(null, DD = {
            value: zD
          }, KD, {
            kind: "class",
            name: zD.name,
            metadata: fD
          }, null, rD), zD = DD.value, fD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fD
          }), (0, VD.m)(zD, rD)
        })(), zD
      })(),
      xL = (() => {
        let DD, zD, wD = [ir({
            ns: rL,
            name: "metadatagroup"
          })],
          pD = [];
        zD = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, VD.n)(zD, "ThreeMfMetadataGroup"), (() => {
          const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, VD.i)(null, DD = {
            value: zD
          }, wD, {
            kind: "class",
            name: zD.name,
            metadata: sD
          }, null, pD), zD = DD.value, sD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sD
          }), (0, VD.m)(zD, pD)
        })(), zD
      })(),
      TL = (() => {
        let DD, zD, wD = [ir({
            ns: rL,
            name: "resources"
          })],
          pD = [];
        zD = class {
          constructor() {
            this.object = []
          }
        };
        return (0, VD.n)(zD, "ThreeMfResources"), (() => {
          const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, VD.i)(null, DD = {
            value: zD
          }, wD, {
            kind: "class",
            name: zD.name,
            metadata: sD
          }, null, pD), zD = DD.value, sD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sD
          }), (0, VD.m)(zD, pD)
        })(), zD
      })(),
      bL = (() => {
        let DD, zD, wD, pD, sD, KD, rD, LD, cD, gD = [ir({
            ns: rL,
            name: "object"
          })],
          RD = [],
          AD = [],
          UD = [],
          fD = [],
          ID = [],
          BD = [],
          GD = [],
          hD = [],
          nD = [],
          MD = [],
          OD = [],
          JD = [],
          ED = [],
          QD = [],
          XD = [];
        zD = class {
          constructor(DD) {
            let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gL.model;
            this.id = (0, VD.m)(this, AD, void 0), this.type = ((0, VD.m)(this, UD), (0, VD.m)(this, fD, void 0)), this.thumbnail = ((0, VD.m)(this, ID), (0, VD.m)(this, BD, void 0)), this.partnumber = ((0, VD.m)(this, GD), (0, VD.m)(this, hD, void 0)), this.name = ((0, VD.m)(this, nD), (0, VD.m)(this, MD, void 0)), this.pid = ((0, VD.m)(this, OD), (0, VD.m)(this, JD, void 0)), this.pindex = ((0, VD.m)(this, ED), (0, VD.m)(this, QD, void 0)), this.metadatagroup = (0, VD.m)(this, XD), this.id = DD, this.type = zD
          }
        };
        return (0, VD.n)(zD, "ThreeMfObject"), (() => {
          const PD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wD = [Wr({
            name: "id"
          })], pD = [Wr({
            name: "type"
          })], sD = [Wr({
            name: "thumbnail"
          })], KD = [Wr({
            name: "partnumber"
          })], rD = [Wr({
            name: "name"
          })], LD = [Wr({
            name: "pid"
          })], cD = [Wr({
            name: "pindex"
          })], (0, VD.i)(null, null, wD, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: DD => "id" in DD,
              get: DD => DD.id,
              set: (DD, zD) => {
                DD.id = zD
              }
            },
            metadata: PD
          }, AD, UD), (0, VD.i)(null, null, pD, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: DD => "type" in DD,
              get: DD => DD.type,
              set: (DD, zD) => {
                DD.type = zD
              }
            },
            metadata: PD
          }, fD, ID), (0, VD.i)(null, null, sD, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: DD => "thumbnail" in DD,
              get: DD => DD.thumbnail,
              set: (DD, zD) => {
                DD.thumbnail = zD
              }
            },
            metadata: PD
          }, BD, GD), (0, VD.i)(null, null, KD, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: DD => "partnumber" in DD,
              get: DD => DD.partnumber,
              set: (DD, zD) => {
                DD.partnumber = zD
              }
            },
            metadata: PD
          }, hD, nD), (0, VD.i)(null, null, rD, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: DD => "name" in DD,
              get: DD => DD.name,
              set: (DD, zD) => {
                DD.name = zD
              }
            },
            metadata: PD
          }, MD, OD), (0, VD.i)(null, null, LD, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: DD => "pid" in DD,
              get: DD => DD.pid,
              set: (DD, zD) => {
                DD.pid = zD
              }
            },
            metadata: PD
          }, JD, ED), (0, VD.i)(null, null, cD, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: DD => "pindex" in DD,
              get: DD => DD.pindex,
              set: (DD, zD) => {
                DD.pindex = zD
              }
            },
            metadata: PD
          }, QD, XD), (0, VD.i)(null, DD = {
            value: zD
          }, gD, {
            kind: "class",
            name: zD.name,
            metadata: PD
          }, null, RD), zD = DD.value, PD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: PD
          }), (0, VD.m)(zD, RD)
        })(), zD
      })(),
      jL = (() => {
        let DD, zD, wD = [ir({
            ns: rL,
            name: "mesh"
          })],
          pD = [];
        zD = class {
          constructor(DD, zD) {
            this.vertices = DD ?? new dL, this.triangles = zD ?? new iL
          }
        };
        return (0, VD.n)(zD, "ThreeMfMesh"), (() => {
          const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, VD.i)(null, DD = {
            value: zD
          }, wD, {
            kind: "class",
            name: zD.name,
            metadata: sD
          }, null, pD), zD = DD.value, sD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sD
          }), (0, VD.m)(zD, pD)
        })(), zD
      })(),
      dL = (() => {
        let DD, zD, wD = [ir({
            ns: rL,
            name: "vertices"
          })],
          pD = [];
        zD = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, VD.n)(zD, "ThreeMfVertices"), (() => {
          const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, VD.i)(null, DD = {
            value: zD
          }, wD, {
            kind: "class",
            name: zD.name,
            metadata: sD
          }, null, pD), zD = DD.value, sD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sD
          }), (0, VD.m)(zD, pD)
        })(), zD
      })(),
      SL = (() => {
        let DD, zD, wD, pD, sD, KD = [ir({
            ns: rL,
            name: "vertex"
          })],
          rD = [],
          LD = [],
          cD = [],
          gD = [],
          RD = [],
          AD = [],
          UD = [];
        zD = class {
          constructor() {
            let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, VD.m)(this, LD, void 0), this.y = ((0, VD.m)(this, cD), (0, VD.m)(this, gD, void 0)), this.z = ((0, VD.m)(this, RD), (0, VD.m)(this, AD, void 0)), (0, VD.m)(this, UD), this.x = DD, this.y = zD, this.z = wD
          }
        };
        return (0, VD.n)(zD, "ThreeMfVertex"), (() => {
          const fD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wD = [Wr({
            name: "x"
          })], pD = [Wr({
            name: "y"
          })], sD = [Wr({
            name: "z"
          })], (0, VD.i)(null, null, wD, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: DD => "x" in DD,
              get: DD => DD.x,
              set: (DD, zD) => {
                DD.x = zD
              }
            },
            metadata: fD
          }, LD, cD), (0, VD.i)(null, null, pD, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: DD => "y" in DD,
              get: DD => DD.y,
              set: (DD, zD) => {
                DD.y = zD
              }
            },
            metadata: fD
          }, gD, RD), (0, VD.i)(null, null, sD, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: DD => "z" in DD,
              get: DD => DD.z,
              set: (DD, zD) => {
                DD.z = zD
              }
            },
            metadata: fD
          }, AD, UD), (0, VD.i)(null, DD = {
            value: zD
          }, KD, {
            kind: "class",
            name: zD.name,
            metadata: fD
          }, null, rD), zD = DD.value, fD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fD
          }), (0, VD.m)(zD, rD)
        })(), zD
      })(),
      iL = (() => {
        let DD, zD, wD = [ir({
            ns: rL,
            name: "triangles"
          })],
          pD = [];
        zD = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, VD.n)(zD, "ThreeMfTriangles"), (() => {
          const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, VD.i)(null, DD = {
            value: zD
          }, wD, {
            kind: "class",
            name: zD.name,
            metadata: sD
          }, null, pD), zD = DD.value, sD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sD
          }), (0, VD.m)(zD, pD)
        })(), zD
      })(),
      lL = (() => {
        let DD, zD, wD, pD, sD, KD, rD, LD, cD, gD = [ir({
            ns: rL,
            name: "triangle"
          })],
          RD = [],
          AD = [],
          UD = [],
          fD = [],
          ID = [],
          BD = [],
          GD = [],
          hD = [],
          nD = [],
          MD = [],
          OD = [],
          JD = [],
          ED = [],
          QD = [],
          XD = [];
        zD = class {
          constructor(DD, zD, wD) {
            this.v1 = (0, VD.m)(this, AD, void 0), this.v2 = ((0, VD.m)(this, UD), (0, VD.m)(this, fD, void 0)), this.v3 = ((0, VD.m)(this, ID), (0, VD.m)(this, BD, void 0)), this.p1 = ((0, VD.m)(this, GD), (0, VD.m)(this, hD, void 0)), this.p2 = ((0, VD.m)(this, nD), (0, VD.m)(this, MD, void 0)), this.p3 = ((0, VD.m)(this, OD), (0, VD.m)(this, JD, void 0)), this.pid = ((0, VD.m)(this, ED), (0, VD.m)(this, QD, void 0)), (0, VD.m)(this, XD), this.v1 = DD, this.v2 = zD, this.v3 = wD
          }
        };
        return (0, VD.n)(zD, "ThreeMfTriangle"), (() => {
          const PD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wD = [Wr({
            name: "v1"
          })], pD = [Wr({
            name: "v2"
          })], sD = [Wr({
            name: "v3"
          })], KD = [Wr({
            name: "p1"
          })], rD = [Wr({
            name: "p2"
          })], LD = [Wr({
            name: "p3"
          })], cD = [Wr({
            name: "pid"
          })], (0, VD.i)(null, null, wD, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: DD => "v1" in DD,
              get: DD => DD.v1,
              set: (DD, zD) => {
                DD.v1 = zD
              }
            },
            metadata: PD
          }, AD, UD), (0, VD.i)(null, null, pD, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: DD => "v2" in DD,
              get: DD => DD.v2,
              set: (DD, zD) => {
                DD.v2 = zD
              }
            },
            metadata: PD
          }, fD, ID), (0, VD.i)(null, null, sD, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: DD => "v3" in DD,
              get: DD => DD.v3,
              set: (DD, zD) => {
                DD.v3 = zD
              }
            },
            metadata: PD
          }, BD, GD), (0, VD.i)(null, null, KD, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: DD => "p1" in DD,
              get: DD => DD.p1,
              set: (DD, zD) => {
                DD.p1 = zD
              }
            },
            metadata: PD
          }, hD, nD), (0, VD.i)(null, null, rD, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: DD => "p2" in DD,
              get: DD => DD.p2,
              set: (DD, zD) => {
                DD.p2 = zD
              }
            },
            metadata: PD
          }, MD, OD), (0, VD.i)(null, null, LD, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: DD => "p3" in DD,
              get: DD => DD.p3,
              set: (DD, zD) => {
                DD.p3 = zD
              }
            },
            metadata: PD
          }, JD, ED), (0, VD.i)(null, null, cD, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: DD => "pid" in DD,
              get: DD => DD.pid,
              set: (DD, zD) => {
                DD.pid = zD
              }
            },
            metadata: PD
          }, QD, XD), (0, VD.i)(null, DD = {
            value: zD
          }, gD, {
            kind: "class",
            name: zD.name,
            metadata: PD
          }, null, RD), zD = DD.value, PD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: PD
          }), (0, VD.m)(zD, RD)
        })(), zD
      })(),
      WL = (() => {
        let DD, zD, wD = [ir({
            ns: rL,
            name: "components"
          })],
          pD = [];
        zD = class {
          constructor() {
            this.component = []
          }
        };
        return (0, VD.n)(zD, "ThreeMfComponents"), (() => {
          const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, VD.i)(null, DD = {
            value: zD
          }, wD, {
            kind: "class",
            name: zD.name,
            metadata: sD
          }, null, pD), zD = DD.value, sD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sD
          }), (0, VD.m)(zD, pD)
        })(), zD
      })(),
      NL = (() => {
        let DD, zD, wD, pD, sD = [ir({
            ns: rL,
            name: "component"
          })],
          KD = [],
          rD = [],
          LD = [],
          cD = [],
          gD = [];
        zD = class {
          constructor(DD, zD) {
            this.objectid = (0, VD.m)(this, rD, void 0), this.transform = ((0, VD.m)(this, LD), (0, VD.m)(this, cD, void 0)), (0, VD.m)(this, gD), this.objectid = DD, this.transform = zD
          }
        };
        return (0, VD.n)(zD, "ThreeMfComponent"), (() => {
          const RD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wD = [Wr({
            name: "objectid"
          })], pD = [Wr({
            name: "transform",
            formatter: VL
          })], (0, VD.i)(null, null, wD, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: DD => "objectid" in DD,
              get: DD => DD.objectid,
              set: (DD, zD) => {
                DD.objectid = zD
              }
            },
            metadata: RD
          }, rD, LD), (0, VD.i)(null, null, pD, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: DD => "transform" in DD,
              get: DD => DD.transform,
              set: (DD, zD) => {
                DD.transform = zD
              }
            },
            metadata: RD
          }, cD, gD), (0, VD.i)(null, DD = {
            value: zD
          }, sD, {
            kind: "class",
            name: zD.name,
            metadata: RD
          }, null, KD), zD = DD.value, RD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RD
          }), (0, VD.m)(zD, KD)
        })(), zD
      })(),
      ZL = (() => {
        let DD, zD, wD, pD = [ir({
            ns: rL,
            name: "basematerials"
          })],
          sD = [],
          KD = [],
          rD = [];
        zD = class {
          constructor(DD) {
            this.id = (0, VD.m)(this, KD, void 0), this.base = ((0, VD.m)(this, rD), []), this.id = DD
          }
        };
        return (0, VD.n)(zD, "ThreeMfBaseMaterials"), (() => {
          const LD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wD = [Wr({
            name: "id"
          })], (0, VD.i)(null, null, wD, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: DD => "id" in DD,
              get: DD => DD.id,
              set: (DD, zD) => {
                DD.id = zD
              }
            },
            metadata: LD
          }, KD, rD), (0, VD.i)(null, DD = {
            value: zD
          }, pD, {
            kind: "class",
            name: zD.name,
            metadata: LD
          }, null, sD), zD = DD.value, LD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LD
          }), (0, VD.m)(zD, sD)
        })(), zD
      })(),
      yL = (() => {
        let DD, zD, wD, pD, sD = [ir({
            ns: rL,
            name: "base"
          })],
          KD = [],
          rD = [],
          LD = [],
          cD = [],
          gD = [];
        zD = class {
          constructor(DD, zD) {
            this.name = (0, VD.m)(this, rD, void 0), this.displaycolor = ((0, VD.m)(this, LD), (0, VD.m)(this, cD, void 0)), (0, VD.m)(this, gD), this.name = DD, this.displaycolor = zD
          }
        };
        return (0, VD.n)(zD, "ThreeMfBase"), (() => {
          const RD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wD = [Wr({
            name: "name"
          })], pD = [Wr({
            name: "displaycolor"
          })], (0, VD.i)(null, null, wD, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: DD => "name" in DD,
              get: DD => DD.name,
              set: (DD, zD) => {
                DD.name = zD
              }
            },
            metadata: RD
          }, rD, LD), (0, VD.i)(null, null, pD, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: DD => "displaycolor" in DD,
              get: DD => DD.displaycolor,
              set: (DD, zD) => {
                DD.displaycolor = zD
              }
            },
            metadata: RD
          }, cD, gD), (0, VD.i)(null, DD = {
            value: zD
          }, sD, {
            kind: "class",
            name: zD.name,
            metadata: RD
          }, null, KD), zD = DD.value, RD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RD
          }), (0, VD.m)(zD, KD)
        })(), zD
      })(),
      kL = (() => {
        let DD, zD, wD = [ir({
            ns: rL,
            name: "build"
          })],
          pD = [];
        zD = class {
          constructor() {
            this.item = []
          }
        };
        return (0, VD.n)(zD, "ThreeMfBuild"), (() => {
          const sD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, VD.i)(null, DD = {
            value: zD
          }, wD, {
            kind: "class",
            name: zD.name,
            metadata: sD
          }, null, pD), zD = DD.value, sD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sD
          }), (0, VD.m)(zD, pD)
        })(), zD
      })(),
      mL = (() => {
        let DD, zD, wD, pD, sD, KD = [ir({
            ns: rL,
            name: "item"
          })],
          rD = [],
          LD = [],
          cD = [],
          gD = [],
          RD = [],
          AD = [],
          UD = [];
        zD = class {
          constructor(DD, zD, wD) {
            this.objectid = (0, VD.m)(this, LD, void 0), this.transform = ((0, VD.m)(this, cD), (0, VD.m)(this, gD, void 0)), this.partnumber = ((0, VD.m)(this, RD), (0, VD.m)(this, AD, void 0)), this.metadatagroup = (0, VD.m)(this, UD), this.objectid = DD, this.transform = zD, this.partnumber = wD
          }
        };
        return (0, VD.n)(zD, "ThreeMfItem"), (() => {
          const fD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wD = [Wr({
            name: "objectid"
          })], pD = [Wr({
            name: "transform",
            formatter: VL
          })], sD = [Wr({
            name: "partnumber"
          })], (0, VD.i)(null, null, wD, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: DD => "objectid" in DD,
              get: DD => DD.objectid,
              set: (DD, zD) => {
                DD.objectid = zD
              }
            },
            metadata: fD
          }, LD, cD), (0, VD.i)(null, null, pD, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: DD => "transform" in DD,
              get: DD => DD.transform,
              set: (DD, zD) => {
                DD.transform = zD
              }
            },
            metadata: fD
          }, gD, RD), (0, VD.i)(null, null, sD, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: DD => "partnumber" in DD,
              get: DD => DD.partnumber,
              set: (DD, zD) => {
                DD.partnumber = zD
              }
            },
            metadata: fD
          }, AD, UD), (0, VD.i)(null, DD = {
            value: zD
          }, KD, {
            kind: "class",
            name: zD.name,
            metadata: fD
          }, null, rD), zD = DD.value, fD && Object.defineProperty(zD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fD
          }), (0, VD.m)(zD, rD)
        })(), zD
      })();
    class eL {
      constructor(DD, zD) {
        this._object = new bL(DD, zD)
      }
      withName(DD) {
        return this._object.name = DD, this
      }
      withThumbnail(DD) {
        return this._object.thumbnail = DD, this
      }
      withProperty(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = DD, this._object.id = zD, this
      }
      build() {
        return this._object
      }
      reset(DD, zD) {
        this._object = new bL(DD, zD)
      }
    }
    class oL extends eL {
      constructor(DD) {
        super(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gL.model), this._object.content = new WL
      }
      withComponent(DD, zD) {
        return this._object.content.component.push(new NL(DD, zD)), this
      }
    }
    class aL extends eL {
      constructor(DD) {
        super(DD, gL.model)
      }
      withPostProcessHandlers(DD, zD) {
        return this._vh = DD, this._th = zD, this
      }
      withData(DD) {
        return this._object.content = this._buildMesh(DD), this
      }
      withMaterial(DD, zD) {
        return this._object.pid = DD, this._object.pindex = zD, this
      }
      _buildMesh(DD) {
        const zD = this._buildVertices(DD.positions),
          wD = this._buildTriangle(DD.indices);
        return new jL(zD, wD)
      }
      _buildVertices(DD) {
        const zD = new dL;
        if (DD)
          for (let wD = 0; wD < DD.length;) {
            const pD = DD[wD++],
              sD = DD[wD++],
              KD = DD[wD++];
            let rD = new SL(pD, sD, KD);
            this._vh && (rD = this._vh(rD)), zD.vertex.push(rD)
          }
        return zD
      }
      _buildTriangle(DD) {
        const zD = new iL;
        if (DD)
          for (let wD = 0; wD < DD.length;) {
            const pD = DD[wD++],
              sD = DD[wD++],
              KD = DD[wD++];
            let rD = new lL(pD, sD, KD);
            this._th && (rD = this._th(rD)), zD.triangle.push(rD)
          }
        return zD
      }
    }
    class uL {
      constructor(DD) {
        this._m = new ZL(DD)
      }
      withColor(DD, zD) {
        this._m.base = this._m.base ?? [];
        let wD = this._m.base.find((zD => zD.name.toLowerCase() === DD.toLowerCase()));
        return wD ? (wD.displaycolor = this._rgbaToHex(zD), this) : (wD = new yL(DD, this._rgbaToHex(zD)), this._m.base.push(wD), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(DD) {
        const zD = DD => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(DD, 1 / 2.2)))),
          wD = zD(DD.r).toString(16).padStart(2, "0").toUpperCase(),
          pD = zD(DD.g).toString(16).padStart(2, "0").toUpperCase(),
          sD = zD(DD.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof DD.a) {
          return `#${wD}${pD}${sD}${Math.round(Math.min(255,Math.max(0,255*DD.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${wD}${pD}${sD}`
      }
    }
    class vL {
      constructor() {
        this._model = new PL, this._objects = new Map
      }
      withMetaData(DD, zD, wD, pD) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new CL(DD, zD, wD, pD)), this
      }
      withMaterial(DD) {
        return DD instanceof uL && (DD = DD.build()), DD && (this._model.resources = this._model.resources ?? new TL, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(DD)), this
      }
      withMesh(DD) {
        return DD instanceof aL && (DD = DD.build()), this._model.resources = this._model.resources ?? new TL, this._model.resources.object.push(DD), this
      }
      withComponents(DD) {
        return DD instanceof oL && (DD = DD.build()), this._model.resources = this._model.resources ?? new TL, this._model.resources.object.push(DD), this
      }
      withBuild(DD, zD, wD) {
        return this._model.build = this._model.build ?? new kL, this._model.build.item?.push(new mL(DD, zD, wD)), this
      }
      withUnit(DD) {
        return this._model.unit = DD, this
      }
      reset() {
        return this._model = new PL, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    vL.KnownMetaSet = new Set(PL.KnownMeta.map((DD => DD.toLowerCase())));
    class tL {
      withContentType(DD) {
        this._cts || (this._cts = new ML);
        const zD = this._cts.items;
        return zD.some((zD => zD.ext === DD.ext && zD.ct === DD.ct)) || zD.push(DD), this
      }
      withRelationship(DD) {
        this._rs || (this._rs = new JL);
        const zD = this._rs.items;
        return zD.some((zD => zD.id === DD.id)) || zD.push(DD), this.withContentType(new OL("rels", UL.Relationships)), this
      }
      withModel(DD) {
        return DD instanceof vL && (DD = DD.build()), this._m = DD, this.withContentType(new OL("model", UL.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const DD = `${IL}${BL}`;
        if (!this._rs) {
          const zD = `/${DD}`;
          this.withRelationship(new EL("rel0", nL.ThreeDimModel, zD))
        }
        return new QL(this._cts, this._rs, this._m)
      }
    }
    class FL {
      constructor(DD) {
        this._o = DD
      }
      get options() {
        return this._o
      }
      async serializeAsync(DD) {
        const zD = await this.ensureZipLibReadyAsync();
        if (!zD) return;
        const wD = zD.Zip,
          pD = zD.ZipDeflate;
        if (!wD || !pD) throw new Error("fflate Zip / ZipDeflate not available");
        const sD = function(DD, zD, wD) {
          const sD = new pD(zD, {
            level: 6
          });
          DD.add(sD);
          const KD = function(DD) {
              return {
                push: (zD, wD) => DD.push(zD, wD)
              }
            }(sD),
            rD = new KL(KD),
            LD = new pL(rD).dec("1.0", "UTF-8");
          new DL(LD).serialize(wD), rD.finish()
        };
        for (var KD = arguments.length, rD = new Array(KD > 1 ? KD - 1 : 0), LD = 1; LD < KD; LD++) rD[LD - 1] = arguments[LD];
        const cD = this.toDocument(...rD);
        if (!cD) return;
        const gD = new wD(DD);
        sD(gD, hL, cD.contentTypes), sD(gD, `${fL}${GL}`, cD.relationships), sD(gD, `${IL}${BL}`, cD.model), gD.end()
      }
      toDocument() {
        const DD = (new vL).withUnit(this._o?.unit ?? cL.millimeter);
        if (this.options.metadata)
          for (const sD in this.options.metadata) DD.withMetaData(sD, this.options.metadata[sD]);
        for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
        return (new tL).withModel(this.toModel(DD, ...wD)).build()
      }
    }
    class YL {
      static async SerializeToMemoryAsync(DD) {
        const zD = new Array;
        let wD = 0;
        for (var pD = arguments.length, sD = new Array(pD > 1 ? pD - 1 : 0), KD = 1; KD < pD; KD++) sD[KD - 1] = arguments[KD];
        if (await DD.serializeAsync((function(DD, pD, sD) {
            zD.push(pD), wD += pD.length
          }), ...sD), !wD) return;
        const rD = new Uint8Array(wD);
        let LD = 0;
        for (const cD of zD) rD.set(cD, LD), LD += cD.length;
        return rD
      }
    }
    class HL {}
    HL.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class qL {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = DD, this._to = zD, this._step = wD, this._i = DD
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const DD = this._i;
        return this._i += this._step, DD
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class Dc extends FL {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...Dc.DefaultOptions,
          ...DD
        })
      }
      toModel(DD) {
        for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
        wD = wD.filter((DD => DD instanceof Rp.e || DD instanceof fD.c));
        const sD = new qL,
          KD = DD,
          rD = new Map,
          LD = this.options.exportInstances ? [] : null;
        for (let cD = 0; cD < wD.length; cD++) {
          const DD = wD[cD];
          if (DD instanceof fD.c) {
            LD?.push(DD);
            continue
          }
          const zD = DD.name || `mesh${cD}`,
            pD = DD.getWorldMatrix(),
            gD = this._handleBabylonTo3mfMatrixTransformToRef(pD, XL.Zero()),
            RD = DD.QE;
          if (void 0 === RD) continue;
          const AD = 1 == RD.length;
          for (let wD = 0; wD < RD.length; wD++) {
            const pD = RD[wD],
              LD = this._extractSubMesh(DD, pD);
            if (LD) {
              const DD = AD ? `${zD}` : `${zD}_${wD}`,
                cD = new aL(sD.next()).withData(LD).withName(DD).build();
              KD.withMesh(cD), KD.withBuild(cD.id, gD), rD.set(pD, cD)
            }
          }
        }
        if (LD && LD.length) {
          const DD = this._groupBy(LD, (DD => DD.nsD));
          for (const [zD, wD] of Array.from(DD.entries()))
            if (wD && wD.length)
              for (let DD = 0; DD < wD.length; DD++) {
                const pD = wD[DD].getWorldMatrix(),
                  sD = zD.QE;
                for (let DD = 0; DD < sD.length; DD++) {
                  const zD = sD[DD],
                    wD = rD.get(zD);
                  wD && KD.withBuild(wD.id, this._handleBabylonTo3mfMatrixTransformToRef(pD, XL.Zero()))
                }
              }
        }
        return KD.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const DD = globalThis;
          return DD.fflate || await sD.Tools.LoadScriptAsync(HL.FFLATEUrl), DD.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(DD, zD) {
        const wD = DD.XpD();
        if (!wD) return;
        const pD = DD.getVerticesData(Dc._PositionKind);
        if (!pD) return;
        if (0 == zD.indexStart && zD.indexCount == wD.length) return {
          positions: pD,
          indices: wD
        };
        const sD = zD.indexStart,
          KD = new Map,
          rD = [],
          LD = new Uint32Array(zD.indexCount);
        for (let cD = 0; cD < zD.indexCount; cD++) {
          const DD = wD[sD + cD];
          let zD = KD.get(DD);
          if (void 0 === zD) {
            zD = KD.size, KD.set(DD, zD);
            const wD = 3 * DD;
            rD.push(pD[wD], pD[wD + 1], pD[wD + 2])
          }
          LD[cD] = zD
        }
        return {
          positions: new Float32Array(rD),
          indices: LD
        }
      }
      _groupBy(DD, zD) {
        const wD = new Map;
        for (const pD of DD) {
          const DD = zD(pD),
            sD = wD.get(DD);
          sD ? sD.push(pD) : wD.set(DD, [pD])
        }
        return wD
      }
      _handleBabylonTo3mfMatrixTransformToRef(DD, zD) {
        const wD = DD.multiplyToRef(Dc._R_BJS_TO_3MF, ND.e.Zero()).m;
        return zD.values = [wD[0], wD[1], wD[2], wD[4], wD[5], wD[6], wD[8], wD[9], wD[10], wD[12], wD[13], wD[14]], zD
      }
    }
    Dc.DefaultOptions = {
      unit: cL.meter,
      exportInstances: !1
    }, Dc._PositionKind = "position", Dc._R_BJS_TO_3MF = ND.e.RotationX(Math.PI / 2).multiply(ND.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);