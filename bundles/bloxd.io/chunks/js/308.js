export const id = 308;
export const ids = [308];
export const modules = {
  41814: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      _ENVTextureLoader: () => JS
    });
    var tS = gS(39968),
      bS = gS(37117),
      XS = gS(37149),
      xS = gS(40032),
      NS = gS(39877),
      qS = gS(40038),
      uS = (gS(40131), gS(41822)),
      IS = gS(38687),
      fS = (gS(41831), gS(41859), gS(40113));
    const kS = "image/png",
      aS = [134, 22, 135, 150, 246, 214, 150, 54];

    function KS(SS) {
      const HS = new DataView(SS.buffer, SS.byteOffset, SS.byteLength);
      let gS = 0;
      for (let xS = 0; xS < aS.length; xS++)
        if (HS.getUint8(gS++) !== aS[xS]) return IS.b.Error("Not a babylon environment map"), null;
      let tS, bS = "";
      for (; tS = HS.getUint8(gS++);) bS += String.fromCharCode(tS);
      let XS = JSON.parse(bS);
      return XS = jS(XS), XS.binaryDataPosition = gS, XS.specular && (XS.specular.lodGenerationScale = XS.specular.lodGenerationScale || .8), XS
    }

    function jS(SS) {
      if (SS.version > 2) throw new Error(`Unsupported babylon environment map version "${SS.version}". Latest supported version is "2".`);
      return 2 === SS.version ? SS : SS = {
        ...SS,
        version: 2,
        imageType: kS
      }
    }

    function GS(SS, HS) {
      const gS = (HS = jS(HS)).specular;
      let tS = Math.log2(HS.width);
      if (tS = Math.round(tS) + 1, gS.mipmaps.length !== 6 * tS) throw new Error(`Unsupported specular mipmaps number "${gS.mipmaps.length}"`);
      const bS = new Array(tS);
      for (let XS = 0; XS < tS; XS++) {
        bS[XS] = new Array(6);
        for (let tS = 0; tS < 6; tS++) {
          const xS = gS.mipmaps[6 * XS + tS];
          bS[XS][tS] = new Uint8Array(SS.buffer, SS.byteOffset + HS.binaryDataPosition + xS.position, xS.length)
        }
      }
      return bS
    }

    function CS(SS, HS) {
      HS = jS(HS);
      const gS = new Array(6),
        tS = HS.irradiance?.irradianceTexture;
      if (tS) {
        if (6 !== tS.faces.length) throw new Error(`Incorrect irradiance texture faces number "${tS.faces.length}"`);
        for (let bS = 0; bS < 6; bS++) {
          const XS = tS.faces[bS];
          gS[bS] = new Uint8Array(SS.buffer, SS.byteOffset + HS.binaryDataPosition + XS.position, XS.length)
        }
      }
      return gS
    }

    function nS(SS, HS, gS) {
      const tS = (gS = jS(gS)).specular;
      if (!tS) return Promise.resolve([]);
      SS._lodGenerationScale = tS.lodGenerationScale;
      const XS = [],
        xS = GS(HS, gS);
      XS.push(QS(SS, xS, gS.imageType));
      const NS = gS.irradiance?.irradianceTexture;
      if (NS) {
        const tS = CS(HS, gS);
        let xS = null;
        gS.irradiance?.irradianceTexture?.dominantDirection && (xS = bS.n.FromArray(gS.irradiance.irradianceTexture.dominantDirection)), XS.push(DS(SS, tS, NS.size, gS.imageType, xS))
      }
      return Promise.all(XS)
    }
    async function PS(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS) {
      return await new Promise(((fS, kS) => {
        if (gS) {
          const gS = HS.createTexture(null, !0, !0, null, 1, null, (SS => {
            kS(SS)
          }), SS);
          tS?.onEffectCreatedObservable.addOnce((NS => {
            NS.executeWhenCompiled((() => {
              tS.externalTextureSamplerBinding = !0, tS.onApply = tS => {
                tS._bindTexture("textureSampler", gS), tS.setFloat2("scale", 1, HS._features.needsInvertingBitmap && SS instanceof ImageBitmap ? -1 : 1)
              }, HS.scenes.length && (HS.scenes[0].postProcessManager.directRender([tS], uS, !0, XS, xS), HS.restoreDefaultFramebuffer(), gS.dispose(), URL.revokeObjectURL(bS), fS())
            }))
          }))
        } else {
          if (HS._uploadImageToTexture(IS, SS, XS, xS), NS) {
            const gS = qS[xS];
            gS && HS._uploadImageToTexture(gS._texture, SS, XS, 0)
          }
          fS()
        }
      }))
    }
    async function QS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kS;
      const tS = SS.AK();
      SS.format = 5, SS.type = 0, SS.generateMipMaps = !0, SS._cachedAnisotropicFilteringLevel = null, tS.updateTextureSamplingMode(3, SS), await wS(SS, HS, !0, gS), SS.isReady = !0
    }
    async function DS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kS,
        bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const XS = SS.AK(),
        xS = new NS.e(XS, 5),
        uS = new qS.e(XS, xS);
      SS._irradianceTexture = uS, uS._dominantDirection = bS, xS.isCube = !0, xS.format = 5, xS.type = 0, xS.generateMipMaps = !0, xS._cachedAnisotropicFilteringLevel = null, xS.generateMipMaps = !0, xS.width = gS, xS.height = gS, XS.updateTextureSamplingMode(3, xS), await wS(xS, [HS], !1, tS), XS.generateMipMapsForCubemap(xS), xS.isReady = !0
    }
    async function wS(SS, HS, bS) {
      let xS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kS;
      if (!(0, tS.i)(SS.width)) throw new Error("Texture size must be a power of two");
      const IS = (0, XS.ILog2)(SS.width) + 1,
        aS = SS.AK();
      let KS = !1,
        jS = !1,
        GS = null,
        CS = null,
        nS = null;
      const QS = aS.getCaps();
      QS.textureLOD ? aS._features.supportRenderAndCopyToLodForFloatTextures ? QS.textureHalfFloatRender && QS.textureHalfFloatLinearFiltering ? (KS = !0, SS.type = 2) : QS.textureFloatRender && QS.textureFloatLinearFiltering && (KS = !0, SS.type = 1) : KS = !1 : (KS = !1, jS = bS);
      let DS = 0;
      if (KS) aS.isWebGPU ? (DS = 1, await gS.e(342).then((() => gS(61445)))) : await gS.e(324).then((() => gS(61452))), GS = new uS.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, aS, !1, void 0, SS.type, void 0, null, !1, void 0, DS), SS._isRGBD = !1, SS.invertY = !1, CS = aS.createRenderTargetCubeTexture(SS.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: SS.type,
        format: 5
      });
      else if (SS._isRGBD = !0, SS.invertY = !0, jS) {
        const HS = 3;
        nS = {};
        const gS = SS._lodGenerationScale,
          tS = SS._lodGenerationOffset;
        for (let bS = 0; bS < HS; bS++) {
          const XS = (IS - 1) * gS + tS,
            xS = tS + (XS - tS) * (1 - bS / (HS - 1)),
            uS = Math.round(Math.min(Math.max(xS, 0), XS)),
            fS = new NS.e(aS, 2);
          fS.isCube = !0, fS.invertY = !0, fS.generateMipMaps = !1, aS.updateTextureSamplingMode(2, fS);
          const kS = new qS.e(null);
          switch (kS._isCube = !0, kS._texture = fS, nS[uS] = kS, bS) {
            case 0:
              SS._lodTextureLow = kS;
              break;
            case 1:
              SS._lodTextureMid = kS;
              break;
            case 2:
              SS._lodTextureHigh = kS
          }
        }
      }
      const wS = [];
      for (let gS = 0; gS < HS.length; gS++)
        for (let tS = 0; tS < 6; tS++) {
          const bS = HS[gS][tS],
            XS = (0, fS.k)(bS),
            NS = new Blob([XS], {
              type: xS
            }),
            qS = URL.createObjectURL(NS);
          let uS;
          if (aS._features.forceBitmapOverHTMLImageElement) uS = aS.createImageBitmap(NS, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async HS => await PS(HS, aS, KS, GS, qS, tS, gS, jS, nS, CS, SS)));
          else {
            const HS = new Image;
            HS.src = qS, uS = new Promise(((bS, XS) => {
              HS.onload = () => {
                PS(HS, aS, KS, GS, qS, tS, gS, jS, nS, CS, SS).then((() => bS())).catch((SS => {
                  XS(SS)
                }))
              }, HS.onerror = SS => {
                XS(SS)
              }
            }))
          }
          wS.push(uS)
        }
      if (await Promise.all(wS), HS.length < IS) {
        let gS;
        const tS = Math.pow(2, IS - 1 - HS.length),
          bS = tS * tS * 4;
        switch (SS.type) {
          case 0:
            gS = new Uint8Array(bS);
            break;
          case 2:
            gS = new Uint16Array(bS);
            break;
          case 1:
            gS = new Float32Array(bS)
        }
        for (let XS = HS.length; XS < IS; XS++)
          for (let HS = 0; HS < 6; HS++) aS._uploadArrayBufferViewToTexture(CS?.texture || SS, gS, HS, XS)
      }
      if (CS) {
        const HS = SS._irradianceTexture;
        SS._irradianceTexture = null, aS._releaseTexture(SS), CS._swapAndDie(SS), SS._irradianceTexture = HS
      }
      GS && GS.dispose(), jS && (SS._lodTextureHigh && SS._lodTextureHigh._texture && (SS._lodTextureHigh._texture.isReady = !0), SS._lodTextureMid && SS._lodTextureMid._texture && (SS._lodTextureMid._texture.isReady = !0), SS._lodTextureLow && SS._lodTextureLow._texture && (SS._lodTextureLow._texture.isReady = !0))
    }

    function hS(SS, HS) {
      const gS = (HS = jS(HS)).irradiance;
      if (!gS) return;
      const tS = new xS.f;
      bS.n.FromArrayToRef(gS.x, 0, tS.x), bS.n.FromArrayToRef(gS.y, 0, tS.y), bS.n.FromArrayToRef(gS.z, 0, tS.z), bS.n.FromArrayToRef(gS.xx, 0, tS.xx), bS.n.FromArrayToRef(gS.yy, 0, tS.yy), bS.n.FromArrayToRef(gS.zz, 0, tS.zz), bS.n.FromArrayToRef(gS.yz, 0, tS.yz), bS.n.FromArrayToRef(gS.zx, 0, tS.zx), bS.n.FromArrayToRef(gS.xy, 0, tS.xy), SS._sphericalPolynomial = tS
    }
    var ZS = gS(41867);
    class JS {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(SS, HS, gS, tS, bS) {
        if (Array.isArray(SS)) return;
        const XS = KS(SS);
        if (XS) {
          HS.width = XS.width, HS.height = XS.width;
          try {
            (0, ZS.c)(), hS(HS, XS), nS(HS, SS, XS).then((() => {
              HS.isReady = !0, HS.onLoadedObservable.notifyObservers(HS), HS.onLoadedObservable.clear(), tS && tS()
            }), (SS => {
              bS?.("Can not upload environment levels", SS)
            }))
          } catch (xS) {
            bS?.("Can not upload environment file", xS)
          }
        } else bS && bS("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41867: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(41785),
      bS = gS(40038);
    let XS = !1;

    function xS() {
      XS || (XS = !0, bS.e.prototype._sphericalPolynomialTargetSize = 0, bS.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(bS.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = tS.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((SS => {
              this._texture._sphericalPolynomial = SS, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(SS) {
          this._texture && (this._texture._sphericalPolynomial = SS)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41785: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS
    });
    var tS = gS(37117),
      bS = gS(37149),
      XS = gS(40032),
      xS = gS(37123),
      NS = gS(37300);
    class qS {
      constructor(SS, HS, gS, tS) {
        this.name = SS, this.worldAxisForNormal = HS, this.worldAxisForFileX = gS, this.worldAxisForFileY = tS
      }
    }
    class uS {
      static _NearestPow2Floor(SS) {
        return SS <= 1 ? 1 : 1 << Math.floor(Math.log2(SS))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(SS) {
        if (!SS.isCube) return null;
        SS.lL()?.AK().flushFramebuffer();
        const HS = SS.getSize().width,
          gS = SS._sphericalPolynomialTargetSize,
          tS = gS > 0 ? this._NearestPow2Floor(gS) : 0,
          bS = !SS.noMipmap && !0 === SS._texture?.generateMipMaps,
          XS = tS > 0 && tS < HS && bS,
          xS = XS ? Math.max(0, Math.round(Math.log2(HS / tS))) : 0,
          NS = XS ? Math.max(1, Math.floor(HS / Math.pow(2, xS))) : HS,
          qS = SS.readPixels(0, xS, void 0, !1),
          uS = SS.readPixels(1, xS, void 0, !1);
        let IS, fS;
        SS.isRenderTarget ? (IS = SS.readPixels(3, xS, void 0, !1), fS = SS.readPixels(2, xS, void 0, !1)) : (IS = SS.readPixels(2, xS, void 0, !1), fS = SS.readPixels(3, xS, void 0, !1));
        const kS = SS.readPixels(4, xS, void 0, !1),
          aS = SS.readPixels(5, xS, void 0, !1),
          KS = SS.gammaSpace,
          jS = tS > 0 && tS < HS && !XS;
        return new Promise((SS => {
          Promise.all([uS, qS, IS, fS, kS, aS]).then((gS => {
            let [bS, XS, xS, qS, uS, IS] = gS, fS = NS;
            if (jS) {
              const SS = 4;
              bS = this._DownsampleFace(bS, HS, tS, SS), XS = this._DownsampleFace(XS, HS, tS, SS), xS = this._DownsampleFace(xS, HS, tS, SS), qS = this._DownsampleFace(qS, HS, tS, SS), uS = this._DownsampleFace(uS, HS, tS, SS), IS = this._DownsampleFace(IS, HS, tS, SS), fS = tS
            }
            const kS = {
              size: fS,
              right: XS,
              left: bS,
              up: xS,
              down: qS,
              front: uS,
              back: IS,
              format: 5,
              type: bS instanceof Float32Array ? 1 : 0,
              gammaSpace: KS
            };
            SS(this.ConvertCubeMapToSphericalPolynomial(kS))
          }))
        }))
      }
      static _AreaElement(SS, HS) {
        return Math.atan2(SS * HS, Math.sqrt(SS * SS + HS * HS + 1))
      }
      static _DownsampleFace(SS, HS, gS, tS) {
        const bS = SS instanceof Float32Array ? SS : Float32Array.from(SS),
          XS = gS * gS * tS,
          xS = new Float32Array(XS),
          NS = HS / gS,
          qS = 1 / (NS * NS);
        for (let IS = 0; IS < gS; IS++) {
          const SS = Math.floor(IS * NS),
            XS = Math.floor((IS + 1) * NS);
          for (let uS = 0; uS < gS; uS++) {
            const fS = Math.floor(uS * NS),
              kS = Math.floor((uS + 1) * NS),
              aS = (IS * gS + uS) * tS;
            for (let gS = 0; gS < tS; gS++) {
              let NS = 0;
              for (let xS = SS; xS < XS; xS++)
                for (let SS = fS; SS < kS; SS++) NS += bS[(xS * HS + SS) * tS + gS];
              xS[aS + gS] = NS * qS
            }
          }
        }
        if (SS instanceof Float32Array) return xS;
        const uS = new(0, SS.constructor)(XS);
        for (let IS = 0; IS < XS; IS++) uS[IS] = xS[IS] + .5 | 0;
        return uS
      }
      static ConvertCubeMapToSphericalPolynomial(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gS = HS > 0 ? this._NearestPow2Floor(HS) : 0;
        if (gS > 0 && SS.size > gS) {
          const HS = 5 === SS.format ? 4 : 3,
            tS = ["right", "left", "up", "down", "front", "back"],
            bS = {};
          for (const XS of tS) bS[XS] = this._DownsampleFace(SS[XS], SS.size, gS, HS);
          SS = {
            ...SS,
            ...bS,
            size: gS
          }
        }
        const tS = new XS.e;
        let qS = 0;
        const uS = 2 / SS.size,
          IS = uS,
          fS = .5 * uS,
          kS = fS - 1;
        for (let XS = 0; XS < 6; XS++) {
          const HS = this._FileFaces[XS],
            gS = SS[HS.name];
          let aS = kS;
          const KS = 5 === SS.format ? 4 : 3;
          for (let XS = 0; XS < SS.size; XS++) {
            let jS = kS;
            for (let IS = 0; IS < SS.size; IS++) {
              const kS = HS.worldAxisForFileX.scale(jS).add(HS.worldAxisForFileY.scale(aS)).add(HS.worldAxisForNormal);
              kS.normalize();
              const GS = this._AreaElement(jS - fS, aS - fS) - this._AreaElement(jS - fS, aS + fS) - this._AreaElement(jS + fS, aS - fS) + this._AreaElement(jS + fS, aS + fS);
              let CS = gS[XS * SS.size * KS + IS * KS + 0],
                nS = gS[XS * SS.size * KS + IS * KS + 1],
                PS = gS[XS * SS.size * KS + IS * KS + 2];
              isNaN(CS) && (CS = 0), isNaN(nS) && (nS = 0), isNaN(PS) && (PS = 0), 0 === SS.type && (CS /= 255, nS /= 255, PS /= 255), SS.gammaSpace && (CS = Math.pow((0, bS.Clamp)(CS), xS.l), nS = Math.pow((0, bS.Clamp)(nS), xS.l), PS = Math.pow((0, bS.Clamp)(PS), xS.l));
              const QS = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const SS = Math.max(CS, nS, PS);
                if (SS > QS) {
                  const HS = QS / SS;
                  CS *= HS, nS *= HS, PS *= HS
                }
              } else CS = (0, bS.Clamp)(CS, 0, QS), nS = (0, bS.Clamp)(nS, 0, QS), PS = (0, bS.Clamp)(PS, 0, QS);
              const DS = new NS.b(CS, nS, PS);
              tS.addLight(kS, DS, GS), qS += GS, jS += uS
            }
            aS += IS
          }
        }
        const aS = 6 * (4 * Math.PI) / 6 / qS;
        return tS.scaleInPlace(aS), tS.convertIncidentRadianceToIrradiance(), tS.convertIrradianceToLambertianRadiance(), XS.f.FromHarmonics(tS)
      }
    }
    uS._FileFaces = [new qS("right", new tS.n(1, 0, 0), new tS.n(0, 0, -1), new tS.n(0, -1, 0)), new qS("left", new tS.n(-1, 0, 0), new tS.n(0, 0, 1), new tS.n(0, -1, 0)), new qS("up", new tS.n(0, 1, 0), new tS.n(1, 0, 0), new tS.n(0, 0, 1)), new qS("down", new tS.n(0, -1, 0), new tS.n(1, 0, 0), new tS.n(0, 0, -1)), new qS("front", new tS.n(0, 0, 1), new tS.n(1, 0, 0), new tS.n(0, -1, 0)), new qS("back", new tS.n(0, 0, -1), new tS.n(-1, 0, 0), new tS.n(0, -1, 0))], uS.MAX_HDRI_VALUE = 4096, uS.PRESERVE_CLAMPED_COLORS = !1
  },
  41831: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS
    });
    var tS = gS(41822),
      bS = gS(41838);
    class XS {
      static ExpandRGBDTexture(SS) {
        const HS = SS._texture;
        if (!HS || !SS.isRGBD) return;
        const bS = HS.AK(),
          XS = bS.getCaps(),
          xS = HS.isReady;
        let NS = !1;
        XS.textureHalfFloatRender && XS.textureHalfFloatLinearFiltering ? (NS = !0, HS.type = 2) : XS.textureFloatRender && XS.textureFloatLinearFiltering && (NS = !0, HS.type = 1), NS && (HS.isReady = !1, HS._isRGBD = !1, HS.invertY = !1);
        const qS = async () => {
          const XS = bS.isWebGPU,
            xS = XS ? 1 : 0;
          HS.isReady = !1, XS ? await gS.e(342).then((() => gS(61445))) : await gS.e(324).then((() => gS(61452)));
          const NS = new tS.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, bS, !1, void 0, HS.type, void 0, null, !1, void 0, xS);
          NS.externalTextureSamplerBinding = !0;
          const qS = bS.createRenderTargetTexture(HS.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: HS.samplingMode,
            type: HS.type,
            format: 5
          });
          NS.onEffectCreatedObservable.addOnce((gS => {
            gS.executeWhenCompiled((() => {
              NS.onApply = SS => {
                SS._bindTexture("textureSampler", HS), SS.setFloat2("scale", 1, 1)
              }, SS.lL()?.postProcessManager.directRender([NS], qS, !0), bS.restoreDefaultFramebuffer(), bS._releaseTexture(HS), NS && NS.dispose(), qS._swapAndDie(HS), HS.isReady = !0
            }))
          }))
        };
        NS && (xS ? qS() : SS.onLoadObservable.addOnce(qS))
      }
      static async EncodeTextureToRGBD(SS, HS) {
        let tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return HS.AK().isWebGPU ? await gS.e(343).then((() => gS(61465))) : await gS.e(325).then((() => gS(61462))), await (0, bS.d)("rgbdEncode", SS, HS, tS, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);