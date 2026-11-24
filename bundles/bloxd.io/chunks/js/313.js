export const id = 313;
export const ids = [313];
export const modules = {
  41935: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      _ENVTextureLoader: () => JT
    });
    var WT = mT(40022),
      zT = mT(37188),
      MT = mT(37226),
      gT = mT(40080),
      nT = mT(39913),
      HT = mT(40088),
      kT = (mT(40198), mT(41939)),
      jT = mT(38800),
      lT = (mT(41953), mT(41976), mT(40171));
    const LT = "image/png",
      pT = [134, 22, 135, 150, 246, 214, 150, 54];

    function BT(TT) {
      const UT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      let mT = 0;
      for (let gT = 0; gT < pT.length; gT++)
        if (UT.getUint8(mT++) !== pT[gT]) return jT.b.Error("Not a babylon environment map"), null;
      let WT, zT = "";
      for (; WT = UT.getUint8(mT++);) zT += String.fromCharCode(WT);
      let MT = JSON.parse(zT);
      return MT = ZT(MT), MT.binaryDataPosition = mT, MT.specular && (MT.specular.lodGenerationScale = MT.specular.lodGenerationScale || .8), MT
    }

    function ZT(TT) {
      if (TT.version > 2) throw new Error(`Unsupported babylon environment map version "${TT.version}". Latest supported version is "2".`);
      return 2 === TT.version ? TT : TT = {
        ...TT,
        version: 2,
        imageType: LT
      }
    }

    function cT(TT, UT) {
      const mT = (UT = ZT(UT)).specular;
      let WT = Math.log2(UT.width);
      if (WT = Math.round(WT) + 1, mT.mipmaps.length !== 6 * WT) throw new Error(`Unsupported specular mipmaps number "${mT.mipmaps.length}"`);
      const zT = new Array(WT);
      for (let MT = 0; MT < WT; MT++) {
        zT[MT] = new Array(6);
        for (let WT = 0; WT < 6; WT++) {
          const gT = mT.mipmaps[6 * MT + WT];
          zT[MT][WT] = new Uint8Array(TT.buffer, TT.byteOffset + UT.binaryDataPosition + gT.position, gT.length)
        }
      }
      return zT
    }

    function vT(TT, UT) {
      UT = ZT(UT);
      const mT = new Array(6),
        WT = UT.irradiance?.irradianceTexture;
      if (WT) {
        if (6 !== WT.faces.length) throw new Error(`Incorrect irradiance texture faces number "${WT.faces.length}"`);
        for (let zT = 0; zT < 6; zT++) {
          const MT = WT.faces[zT];
          mT[zT] = new Uint8Array(TT.buffer, TT.byteOffset + UT.binaryDataPosition + MT.position, MT.length)
        }
      }
      return mT
    }

    function fT(TT, UT, mT) {
      const WT = (mT = ZT(mT)).specular;
      if (!WT) return Promise.resolve([]);
      TT._lodGenerationScale = WT.lodGenerationScale;
      const MT = [],
        gT = cT(UT, mT);
      MT.push(iT(TT, gT, mT.imageType));
      const nT = mT.irradiance?.irradianceTexture;
      if (nT) {
        const WT = vT(UT, mT);
        let gT = null;
        mT.irradiance?.irradianceTexture?.dominantDirection && (gT = zT.p.FromArray(mT.irradiance.irradianceTexture.dominantDirection)), MT.push(bT(TT, WT, nT.size, mT.imageType, gT))
      }
      return Promise.all(MT)
    }
    async function qT(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT) {
      return await new Promise(((lT, LT) => {
        if (mT) {
          const mT = UT.createTexture(null, !0, !0, null, 1, null, (TT => {
            LT(TT)
          }), TT);
          WT?.onEffectCreatedObservable.addOnce((nT => {
            nT.executeWhenCompiled((() => {
              WT.externalTextureSamplerBinding = !0, WT.onApply = WT => {
                WT._bindTexture("textureSampler", mT), WT.setFloat2("scale", 1, UT._features.needsInvertingBitmap && TT instanceof ImageBitmap ? -1 : 1)
              }, UT.scenes.length && (UT.scenes[0].postProcessManager.directRender([WT], kT, !0, MT, gT), UT.restoreDefaultFramebuffer(), mT.dispose(), URL.revokeObjectURL(zT), lT())
            }))
          }))
        } else {
          if (UT._uploadImageToTexture(jT, TT, MT, gT), nT) {
            const mT = HT[gT];
            mT && UT._uploadImageToTexture(mT._texture, TT, MT, 0)
          }
          lT()
        }
      }))
    }
    async function iT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : LT;
      const WT = TT.eB();
      TT.format = 5, TT.type = 0, TT.generateMipMaps = !0, TT._cachedAnisotropicFilteringLevel = null, WT.updateTextureSamplingMode(3, TT), await OT(TT, UT, !0, mT), TT.isReady = !0
    }
    async function bT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LT,
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const MT = TT.eB(),
        gT = new nT.b(MT, 5),
        kT = new HT.c(MT, gT);
      TT._irradianceTexture = kT, kT._dominantDirection = zT, gT.isCube = !0, gT.format = 5, gT.type = 0, gT.generateMipMaps = !0, gT._cachedAnisotropicFilteringLevel = null, gT.generateMipMaps = !0, gT.width = mT, gT.height = mT, MT.updateTextureSamplingMode(3, gT), await OT(gT, [UT], !1, WT), MT.generateMipMapsForCubemap(gT), gT.isReady = !0
    }
    async function OT(TT, UT, zT) {
      let gT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LT;
      if (!(0, WT.i)(TT.width)) throw new Error("Texture size must be a power of two");
      const jT = (0, MT.ILog2)(TT.width) + 1,
        pT = TT.eB();
      let BT = !1,
        ZT = !1,
        cT = null,
        vT = null,
        fT = null;
      const iT = pT.getCaps();
      iT.textureLOD ? pT._features.supportRenderAndCopyToLodForFloatTextures ? iT.textureHalfFloatRender && iT.textureHalfFloatLinearFiltering ? (BT = !0, TT.type = 2) : iT.textureFloatRender && iT.textureFloatLinearFiltering && (BT = !0, TT.type = 1) : BT = !1 : (BT = !1, ZT = zT);
      let bT = 0;
      if (BT) pT.isWebGPU ? (bT = 1, await mT.e(347).then((() => mT(61264)))) : await mT.e(329).then((() => mT(61266))), cT = new kT.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, pT, !1, void 0, TT.type, void 0, null, !1, void 0, bT), TT._isRGBD = !1, TT.invertY = !1, vT = pT.createRenderTargetCubeTexture(TT.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: TT.type,
        format: 5
      });
      else if (TT._isRGBD = !0, TT.invertY = !0, ZT) {
        const UT = 3;
        fT = {};
        const mT = TT._lodGenerationScale,
          WT = TT._lodGenerationOffset;
        for (let zT = 0; zT < UT; zT++) {
          const MT = (jT - 1) * mT + WT,
            gT = WT + (MT - WT) * (1 - zT / (UT - 1)),
            kT = Math.round(Math.min(Math.max(gT, 0), MT)),
            lT = new nT.b(pT, 2);
          lT.isCube = !0, lT.invertY = !0, lT.generateMipMaps = !1, pT.updateTextureSamplingMode(2, lT);
          const LT = new HT.c(null);
          switch (LT._isCube = !0, LT._texture = lT, fT[kT] = LT, zT) {
            case 0:
              TT._lodTextureLow = LT;
              break;
            case 1:
              TT._lodTextureMid = LT;
              break;
            case 2:
              TT._lodTextureHigh = LT
          }
        }
      }
      const OT = [];
      for (let mT = 0; mT < UT.length; mT++)
        for (let WT = 0; WT < 6; WT++) {
          const zT = UT[mT][WT],
            MT = (0, lT.o)(zT),
            nT = new Blob([MT], {
              type: gT
            }),
            HT = URL.createObjectURL(nT);
          let kT;
          if (pT._features.forceBitmapOverHTMLImageElement) kT = pT.createImageBitmap(nT, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async UT => await qT(UT, pT, BT, cT, HT, WT, mT, ZT, fT, vT, TT)));
          else {
            const UT = new Image;
            UT.src = HT, kT = new Promise(((zT, MT) => {
              UT.onload = () => {
                qT(UT, pT, BT, cT, HT, WT, mT, ZT, fT, vT, TT).then((() => zT())).catch((TT => {
                  MT(TT)
                }))
              }, UT.onerror = TT => {
                MT(TT)
              }
            }))
          }
          OT.push(kT)
        }
      if (await Promise.all(OT), UT.length < jT) {
        let mT;
        const WT = Math.pow(2, jT - 1 - UT.length),
          zT = WT * WT * 4;
        switch (TT.type) {
          case 0:
            mT = new Uint8Array(zT);
            break;
          case 2:
            mT = new Uint16Array(zT);
            break;
          case 1:
            mT = new Float32Array(zT)
        }
        for (let MT = UT.length; MT < jT; MT++)
          for (let UT = 0; UT < 6; UT++) pT._uploadArrayBufferViewToTexture(vT?.texture || TT, mT, UT, MT)
      }
      if (vT) {
        const UT = TT._irradianceTexture;
        TT._irradianceTexture = null, pT._releaseTexture(TT), vT._swapAndDie(TT), TT._irradianceTexture = UT
      }
      cT && cT.dispose(), ZT && (TT._lodTextureHigh && TT._lodTextureHigh._texture && (TT._lodTextureHigh._texture.isReady = !0), TT._lodTextureMid && TT._lodTextureMid._texture && (TT._lodTextureMid._texture.isReady = !0), TT._lodTextureLow && TT._lodTextureLow._texture && (TT._lodTextureLow._texture.isReady = !0))
    }

    function eT(TT, UT) {
      const mT = (UT = ZT(UT)).irradiance;
      if (!mT) return;
      const WT = new gT.c;
      zT.p.FromArrayToRef(mT.x, 0, WT.x), zT.p.FromArrayToRef(mT.y, 0, WT.y), zT.p.FromArrayToRef(mT.z, 0, WT.z), zT.p.FromArrayToRef(mT.xx, 0, WT.xx), zT.p.FromArrayToRef(mT.yy, 0, WT.yy), zT.p.FromArrayToRef(mT.zz, 0, WT.zz), zT.p.FromArrayToRef(mT.yz, 0, WT.yz), zT.p.FromArrayToRef(mT.zx, 0, WT.zx), zT.p.FromArrayToRef(mT.xy, 0, WT.xy), TT._sphericalPolynomial = WT
    }
    var YT = mT(41978);
    class JT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(TT, UT, mT, WT, zT) {
        if (Array.isArray(TT)) return;
        const MT = BT(TT);
        if (MT) {
          UT.width = MT.width, UT.height = MT.width;
          try {
            (0, YT.c)(), eT(UT, MT), fT(UT, TT, MT).then((() => {
              UT.isReady = !0, UT.onLoadedObservable.notifyObservers(UT), UT.onLoadedObservable.clear(), WT && WT()
            }), (TT => {
              zT?.("Can not upload environment levels", TT)
            }))
          } catch (gT) {
            zT?.("Can not upload environment file", gT)
          }
        } else zT && zT("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
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
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);