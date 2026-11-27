export const id = 626;
export const ids = [626];
export const modules = {
  53817: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      _ENVTextureLoader: () => lR
    });
    var yR = GR(41449),
      tR = GR(38204),
      uR = GR(38239),
      ZR = GR(41509),
      qR = GR(41364),
      iR = GR(41514),
      fR = (GR(41612), GR(53823)),
      VR = GR(39914),
      KR = (GR(53831), GR(53856), GR(41586));
    const wR = "image/png",
      rR = [134, 22, 135, 150, 246, 214, 150, 54];

    function eR(RR) {
      const JR = new DataView(RR.buffer, RR.byteOffset, RR.byteLength);
      let GR = 0;
      for (let ZR = 0; ZR < rR.length; ZR++)
        if (JR.getUint8(GR++) !== rR[ZR]) return VR.c.Error("Not a babylon environment map"), null;
      let yR, tR = "";
      for (; yR = JR.getUint8(GR++);) tR += String.fromCharCode(yR);
      let uR = JSON.parse(tR);
      return uR = aR(uR), uR.binaryDataPosition = GR, uR.specular && (uR.specular.lodGenerationScale = uR.specular.lodGenerationScale || .8), uR
    }

    function aR(RR) {
      if (RR.version > 2) throw new Error(`Unsupported babylon environment map version "${RR.version}". Latest supported version is "2".`);
      return 2 === RR.version ? RR : RR = {
        ...RR,
        version: 2,
        imageType: wR
      }
    }

    function LR(RR, JR) {
      const GR = (JR = aR(JR)).specular;
      let yR = Math.log2(JR.width);
      if (yR = Math.round(yR) + 1, GR.mipmaps.length !== 6 * yR) throw new Error(`Unsupported specular mipmaps number "${GR.mipmaps.length}"`);
      const tR = new Array(yR);
      for (let uR = 0; uR < yR; uR++) {
        tR[uR] = new Array(6);
        for (let yR = 0; yR < 6; yR++) {
          const ZR = GR.mipmaps[6 * uR + yR];
          tR[uR][yR] = new Uint8Array(RR.buffer, RR.byteOffset + JR.binaryDataPosition + ZR.position, ZR.length)
        }
      }
      return tR
    }

    function nR(RR, JR) {
      JR = aR(JR);
      const GR = new Array(6),
        yR = JR.irradiance?.irradianceTexture;
      if (yR) {
        if (6 !== yR.faces.length) throw new Error(`Incorrect irradiance texture faces number "${yR.faces.length}"`);
        for (let tR = 0; tR < 6; tR++) {
          const uR = yR.faces[tR];
          GR[tR] = new Uint8Array(RR.buffer, RR.byteOffset + JR.binaryDataPosition + uR.position, uR.length)
        }
      }
      return GR
    }

    function UR(RR, JR, GR) {
      const yR = (GR = aR(GR)).specular;
      if (!yR) return Promise.resolve([]);
      RR._lodGenerationScale = yR.lodGenerationScale;
      const uR = [],
        ZR = LR(JR, GR);
      uR.push(AR(RR, ZR, GR.imageType));
      const qR = GR.irradiance?.irradianceTexture;
      if (qR) {
        const yR = nR(JR, GR);
        let ZR = null;
        GR.irradiance?.irradianceTexture?.dominantDirection && (ZR = tR.r.FromArray(GR.irradiance.irradianceTexture.dominantDirection)), uR.push(CR(RR, yR, qR.size, GR.imageType, ZR))
      }
      return Promise.all(uR)
    }
    async function WR(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
      return await new Promise(((KR, wR) => {
        if (GR) {
          const GR = JR.createTexture(null, !0, !0, null, 1, null, (RR => {
            wR(RR)
          }), RR);
          yR?.onEffectCreatedObservable.addOnce((qR => {
            qR.executeWhenCompiled((() => {
              yR.externalTextureSamplerBinding = !0, yR.onApply = yR => {
                yR._bindTexture("textureSampler", GR), yR.setFloat2("scale", 1, JR._features.needsInvertingBitmap && RR instanceof ImageBitmap ? -1 : 1)
              }, JR.scenes.length && (JR.scenes[0].postProcessManager.directRender([yR], fR, !0, uR, ZR), JR.restoreDefaultFramebuffer(), GR.dispose(), URL.revokeObjectURL(tR), KR())
            }))
          }))
        } else {
          if (JR._uploadImageToTexture(VR, RR, uR, ZR), qR) {
            const GR = iR[ZR];
            GR && JR._uploadImageToTexture(GR._texture, RR, uR, 0)
          }
          KR()
        }
      }))
    }
    async function AR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wR;
      const yR = RR.ke();
      RR.format = 5, RR.type = 0, RR.generateMipMaps = !0, RR._cachedAnisotropicFilteringLevel = null, yR.updateTextureSamplingMode(3, RR), await XR(RR, JR, !0, GR), RR.isReady = !0
    }
    async function CR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wR,
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const uR = RR.ke(),
        ZR = new qR.b(uR, 5),
        fR = new iR.c(uR, ZR);
      RR._irradianceTexture = fR, fR._dominantDirection = tR, ZR.isCube = !0, ZR.format = 5, ZR.type = 0, ZR.generateMipMaps = !0, ZR._cachedAnisotropicFilteringLevel = null, ZR.generateMipMaps = !0, ZR.width = GR, ZR.height = GR, uR.updateTextureSamplingMode(3, ZR), await XR(ZR, [JR], !1, yR), uR.generateMipMapsForCubemap(ZR), ZR.isReady = !0
    }
    async function XR(RR, JR, tR) {
      let ZR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wR;
      if (!(0, yR.f)(RR.width)) throw new Error("Texture size must be a power of two");
      const VR = (0, uR.ILog2)(RR.width) + 1,
        rR = RR.ke();
      let eR = !1,
        aR = !1,
        LR = null,
        nR = null,
        UR = null;
      const AR = rR.getCaps();
      AR.textureLOD ? rR._features.supportRenderAndCopyToLodForFloatTextures ? AR.textureHalfFloatRender && AR.textureHalfFloatLinearFiltering ? (eR = !0, RR.type = 2) : AR.textureFloatRender && AR.textureFloatLinearFiltering && (eR = !0, RR.type = 1) : eR = !1 : (eR = !1, aR = tR);
      let CR = 0;
      if (eR) rR.isWebGPU ? (CR = 1, await GR.e(660).then((() => GR(64253)))) : await GR.e(642).then((() => GR(64257))), LR = new fR.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, rR, !1, void 0, RR.type, void 0, null, !1, void 0, CR), RR._isRGBD = !1, RR.invertY = !1, nR = rR.createRenderTargetCubeTexture(RR.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: RR.type,
        format: 5
      });
      else if (RR._isRGBD = !0, RR.invertY = !0, aR) {
        const JR = 3;
        UR = {};
        const GR = RR._lodGenerationScale,
          yR = RR._lodGenerationOffset;
        for (let tR = 0; tR < JR; tR++) {
          const uR = (VR - 1) * GR + yR,
            ZR = yR + (uR - yR) * (1 - tR / (JR - 1)),
            fR = Math.round(Math.min(Math.max(ZR, 0), uR)),
            KR = new qR.b(rR, 2);
          KR.isCube = !0, KR.invertY = !0, KR.generateMipMaps = !1, rR.updateTextureSamplingMode(2, KR);
          const wR = new iR.c(null);
          switch (wR._isCube = !0, wR._texture = KR, UR[fR] = wR, tR) {
            case 0:
              RR._lodTextureLow = wR;
              break;
            case 1:
              RR._lodTextureMid = wR;
              break;
            case 2:
              RR._lodTextureHigh = wR
          }
        }
      }
      const XR = [];
      for (let GR = 0; GR < JR.length; GR++)
        for (let yR = 0; yR < 6; yR++) {
          const tR = JR[GR][yR],
            uR = (0, KR.f)(tR),
            qR = new Blob([uR], {
              type: ZR
            }),
            iR = URL.createObjectURL(qR);
          let fR;
          if (rR._features.forceBitmapOverHTMLImageElement) fR = rR.createImageBitmap(qR, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async JR => await WR(JR, rR, eR, LR, iR, yR, GR, aR, UR, nR, RR)));
          else {
            const JR = new Image;
            JR.src = iR, fR = new Promise(((tR, uR) => {
              JR.onload = () => {
                WR(JR, rR, eR, LR, iR, yR, GR, aR, UR, nR, RR).then((() => tR())).catch((RR => {
                  uR(RR)
                }))
              }, JR.onerror = RR => {
                uR(RR)
              }
            }))
          }
          XR.push(fR)
        }
      if (await Promise.all(XR), JR.length < VR) {
        let GR;
        const yR = Math.pow(2, VR - 1 - JR.length),
          tR = yR * yR * 4;
        switch (RR.type) {
          case 0:
            GR = new Uint8Array(tR);
            break;
          case 2:
            GR = new Uint16Array(tR);
            break;
          case 1:
            GR = new Float32Array(tR)
        }
        for (let uR = JR.length; uR < VR; uR++)
          for (let JR = 0; JR < 6; JR++) rR._uploadArrayBufferViewToTexture(nR?.texture || RR, GR, JR, uR)
      }
      if (nR) {
        const JR = RR._irradianceTexture;
        RR._irradianceTexture = null, rR._releaseTexture(RR), nR._swapAndDie(RR), RR._irradianceTexture = JR
      }
      LR && LR.dispose(), aR && (RR._lodTextureHigh && RR._lodTextureHigh._texture && (RR._lodTextureHigh._texture.isReady = !0), RR._lodTextureMid && RR._lodTextureMid._texture && (RR._lodTextureMid._texture.isReady = !0), RR._lodTextureLow && RR._lodTextureLow._texture && (RR._lodTextureLow._texture.isReady = !0))
    }

    function MR(RR, JR) {
      const GR = (JR = aR(JR)).irradiance;
      if (!GR) return;
      const yR = new ZR.g;
      tR.r.FromArrayToRef(GR.x, 0, yR.x), tR.r.FromArrayToRef(GR.y, 0, yR.y), tR.r.FromArrayToRef(GR.z, 0, yR.z), tR.r.FromArrayToRef(GR.xx, 0, yR.xx), tR.r.FromArrayToRef(GR.yy, 0, yR.yy), tR.r.FromArrayToRef(GR.zz, 0, yR.zz), tR.r.FromArrayToRef(GR.yz, 0, yR.yz), tR.r.FromArrayToRef(GR.zx, 0, yR.zx), tR.r.FromArrayToRef(GR.xy, 0, yR.xy), RR._sphericalPolynomial = yR
    }
    var BR = GR(53863);
    class lR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(RR, JR, GR, yR, tR) {
        if (Array.isArray(RR)) return;
        const uR = eR(RR);
        if (uR) {
          JR.width = uR.width, JR.height = uR.width;
          try {
            (0, BR.d)(), MR(JR, uR), UR(JR, RR, uR).then((() => {
              JR.isReady = !0, JR.onLoadedObservable.notifyObservers(JR), JR.onLoadedObservable.clear(), yR && yR()
            }), (RR => {
              tR?.("Can not upload environment levels", RR)
            }))
          } catch (ZR) {
            tR?.("Can not upload environment file", ZR)
          }
        } else tR && tR("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  53863: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR
    });
    var yR = GR(53798),
      tR = GR(41514);
    let uR = !1;

    function ZR() {
      uR || (uR = !0, tR.c.prototype._sphericalPolynomialTargetSize = 0, tR.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(tR.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = yR.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((RR => {
              this._texture._sphericalPolynomial = RR, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(RR) {
          this._texture && (this._texture._sphericalPolynomial = RR)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  53798: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR
    });
    var yR = GR(38204),
      tR = GR(38239),
      uR = GR(41509),
      ZR = GR(38213),
      qR = GR(38331);
    class iR {
      constructor(RR, JR, GR, yR) {
        this.name = RR, this.worldAxisForNormal = JR, this.worldAxisForFileX = GR, this.worldAxisForFileY = yR
      }
    }
    class fR {
      static _NearestPow2Floor(RR) {
        return RR <= 1 ? 1 : 1 << Math.floor(Math.log2(RR))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(RR) {
        if (!RR.isCube) return null;
        RR.jH()?.ke().flushFramebuffer();
        const JR = RR.getSize().width,
          GR = RR._sphericalPolynomialTargetSize,
          yR = GR > 0 ? this._NearestPow2Floor(GR) : 0,
          tR = !RR.noMipmap && !0 === RR._texture?.generateMipMaps,
          uR = yR > 0 && yR < JR && tR,
          ZR = uR ? Math.max(0, Math.round(Math.log2(JR / yR))) : 0,
          qR = uR ? Math.max(1, Math.floor(JR / Math.pow(2, ZR))) : JR,
          iR = RR.readPixels(0, ZR, void 0, !1),
          fR = RR.readPixels(1, ZR, void 0, !1);
        let VR, KR;
        RR.isRenderTarget ? (VR = RR.readPixels(3, ZR, void 0, !1), KR = RR.readPixels(2, ZR, void 0, !1)) : (VR = RR.readPixels(2, ZR, void 0, !1), KR = RR.readPixels(3, ZR, void 0, !1));
        const wR = RR.readPixels(4, ZR, void 0, !1),
          rR = RR.readPixels(5, ZR, void 0, !1),
          eR = RR.gammaSpace,
          aR = yR > 0 && yR < JR && !uR;
        return new Promise((RR => {
          Promise.all([fR, iR, VR, KR, wR, rR]).then((GR => {
            let [tR, uR, ZR, iR, fR, VR] = GR, KR = qR;
            if (aR) {
              const RR = 4;
              tR = this._DownsampleFace(tR, JR, yR, RR), uR = this._DownsampleFace(uR, JR, yR, RR), ZR = this._DownsampleFace(ZR, JR, yR, RR), iR = this._DownsampleFace(iR, JR, yR, RR), fR = this._DownsampleFace(fR, JR, yR, RR), VR = this._DownsampleFace(VR, JR, yR, RR), KR = yR
            }
            const wR = {
              size: KR,
              right: uR,
              left: tR,
              up: ZR,
              down: iR,
              front: fR,
              back: VR,
              format: 5,
              type: tR instanceof Float32Array ? 1 : 0,
              gammaSpace: eR
            };
            RR(this.ConvertCubeMapToSphericalPolynomial(wR))
          }))
        }))
      }
      static _AreaElement(RR, JR) {
        return Math.atan2(RR * JR, Math.sqrt(RR * RR + JR * JR + 1))
      }
      static _DownsampleFace(RR, JR, GR, yR) {
        const tR = RR instanceof Float32Array ? RR : Float32Array.from(RR),
          uR = GR * GR * yR,
          ZR = new Float32Array(uR),
          qR = JR / GR,
          iR = 1 / (qR * qR);
        for (let VR = 0; VR < GR; VR++) {
          const RR = Math.floor(VR * qR),
            uR = Math.floor((VR + 1) * qR);
          for (let fR = 0; fR < GR; fR++) {
            const KR = Math.floor(fR * qR),
              wR = Math.floor((fR + 1) * qR),
              rR = (VR * GR + fR) * yR;
            for (let GR = 0; GR < yR; GR++) {
              let qR = 0;
              for (let ZR = RR; ZR < uR; ZR++)
                for (let RR = KR; RR < wR; RR++) qR += tR[(ZR * JR + RR) * yR + GR];
              ZR[rR + GR] = qR * iR
            }
          }
        }
        if (RR instanceof Float32Array) return ZR;
        const fR = new(0, RR.constructor)(uR);
        for (let VR = 0; VR < uR; VR++) fR[VR] = ZR[VR] + .5 | 0;
        return fR
      }
      static ConvertCubeMapToSphericalPolynomial(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GR = JR > 0 ? this._NearestPow2Floor(JR) : 0;
        if (GR > 0 && RR.size > GR) {
          const JR = 5 === RR.format ? 4 : 3,
            yR = ["right", "left", "up", "down", "front", "back"],
            tR = {};
          for (const uR of yR) tR[uR] = this._DownsampleFace(RR[uR], RR.size, GR, JR);
          RR = {
            ...RR,
            ...tR,
            size: GR
          }
        }
        const yR = new uR.c;
        let iR = 0;
        const fR = 2 / RR.size,
          VR = fR,
          KR = .5 * fR,
          wR = KR - 1;
        for (let uR = 0; uR < 6; uR++) {
          const JR = this._FileFaces[uR],
            GR = RR[JR.name];
          let rR = wR;
          const eR = 5 === RR.format ? 4 : 3;
          for (let uR = 0; uR < RR.size; uR++) {
            let aR = wR;
            for (let VR = 0; VR < RR.size; VR++) {
              const wR = JR.worldAxisForFileX.scale(aR).add(JR.worldAxisForFileY.scale(rR)).add(JR.worldAxisForNormal);
              wR.normalize();
              const LR = this._AreaElement(aR - KR, rR - KR) - this._AreaElement(aR - KR, rR + KR) - this._AreaElement(aR + KR, rR - KR) + this._AreaElement(aR + KR, rR + KR);
              let nR = GR[uR * RR.size * eR + VR * eR + 0],
                UR = GR[uR * RR.size * eR + VR * eR + 1],
                WR = GR[uR * RR.size * eR + VR * eR + 2];
              isNaN(nR) && (nR = 0), isNaN(UR) && (UR = 0), isNaN(WR) && (WR = 0), 0 === RR.type && (nR /= 255, UR /= 255, WR /= 255), RR.gammaSpace && (nR = Math.pow((0, tR.Clamp)(nR), ZR.i), UR = Math.pow((0, tR.Clamp)(UR), ZR.i), WR = Math.pow((0, tR.Clamp)(WR), ZR.i));
              const AR = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const RR = Math.max(nR, UR, WR);
                if (RR > AR) {
                  const JR = AR / RR;
                  nR *= JR, UR *= JR, WR *= JR
                }
              } else nR = (0, tR.Clamp)(nR, 0, AR), UR = (0, tR.Clamp)(UR, 0, AR), WR = (0, tR.Clamp)(WR, 0, AR);
              const CR = new qR.d(nR, UR, WR);
              yR.addLight(wR, CR, LR), iR += LR, aR += fR
            }
            rR += VR
          }
        }
        const rR = 6 * (4 * Math.PI) / 6 / iR;
        return yR.scaleInPlace(rR), yR.convertIncidentRadianceToIrradiance(), yR.convertIrradianceToLambertianRadiance(), uR.g.FromHarmonics(yR)
      }
    }
    fR._FileFaces = [new iR("right", new yR.r(1, 0, 0), new yR.r(0, 0, -1), new yR.r(0, -1, 0)), new iR("left", new yR.r(-1, 0, 0), new yR.r(0, 0, 1), new yR.r(0, -1, 0)), new iR("up", new yR.r(0, 1, 0), new yR.r(1, 0, 0), new yR.r(0, 0, 1)), new iR("down", new yR.r(0, -1, 0), new yR.r(1, 0, 0), new yR.r(0, 0, -1)), new iR("front", new yR.r(0, 0, 1), new yR.r(1, 0, 0), new yR.r(0, -1, 0)), new iR("back", new yR.r(0, 0, -1), new yR.r(-1, 0, 0), new yR.r(0, -1, 0))], fR.MAX_HDRI_VALUE = 4096, fR.PRESERVE_CLAMPED_COLORS = !1
  },
  53831: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(53823),
      tR = GR(53836);
    class uR {
      static ExpandRGBDTexture(RR) {
        const JR = RR._texture;
        if (!JR || !RR.isRGBD) return;
        const tR = JR.ke(),
          uR = tR.getCaps(),
          ZR = JR.isReady;
        let qR = !1;
        uR.textureHalfFloatRender && uR.textureHalfFloatLinearFiltering ? (qR = !0, JR.type = 2) : uR.textureFloatRender && uR.textureFloatLinearFiltering && (qR = !0, JR.type = 1), qR && (JR.isReady = !1, JR._isRGBD = !1, JR.invertY = !1);
        const iR = async () => {
          const uR = tR.isWebGPU,
            ZR = uR ? 1 : 0;
          JR.isReady = !1, uR ? await GR.e(660).then((() => GR(64253))) : await GR.e(642).then((() => GR(64257)));
          const qR = new yR.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, tR, !1, void 0, JR.type, void 0, null, !1, void 0, ZR);
          qR.externalTextureSamplerBinding = !0;
          const iR = tR.createRenderTargetTexture(JR.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: JR.samplingMode,
            type: JR.type,
            format: 5
          });
          qR.onEffectCreatedObservable.addOnce((GR => {
            GR.executeWhenCompiled((() => {
              qR.onApply = RR => {
                RR._bindTexture("textureSampler", JR), RR.setFloat2("scale", 1, 1)
              }, RR.jH()?.postProcessManager.directRender([qR], iR, !0), tR.restoreDefaultFramebuffer(), tR._releaseTexture(JR), qR && qR.dispose(), iR._swapAndDie(JR), JR.isReady = !0
            }))
          }))
        };
        qR && (ZR ? iR() : RR.onLoadObservable.addOnce(iR))
      }
      static async EncodeTextureToRGBD(RR, JR) {
        let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return JR.ke().isWebGPU ? await GR.e(661).then((() => GR(64281))) : await GR.e(643).then((() => GR(64274))), await (0, tR.e)("rgbdEncode", RR, JR, yR, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);