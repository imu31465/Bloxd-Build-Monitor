export const id = 308;
export const ids = [308];
export const modules = {
  41612: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      _ENVTextureLoader: () => vC
    });
    var QC = ZC(39747),
      wC = ZC(36963),
      bC = ZC(36991),
      nC = ZC(39800),
      fC = ZC(39650),
      oC = ZC(39803),
      qC = (ZC(39910), ZC(41618)),
      FC = ZC(38507),
      WC = (ZC(41630), ZC(41648), ZC(39882));
    const NC = "image/png",
      MC = [134, 22, 135, 150, 246, 214, 150, 54];

    function gC(CC) {
      const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
      let ZC = 0;
      for (let nC = 0; nC < MC.length; nC++)
        if (zC.getUint8(ZC++) !== MC[nC]) return FC.c.Error("Not a babylon environment map"), null;
      let QC, wC = "";
      for (; QC = zC.getUint8(ZC++);) wC += String.fromCharCode(QC);
      let bC = JSON.parse(wC);
      return bC = SC(bC), bC.binaryDataPosition = ZC, bC.specular && (bC.specular.lodGenerationScale = bC.specular.lodGenerationScale || .8), bC
    }

    function SC(CC) {
      if (CC.version > 2) throw new Error(`Unsupported babylon environment map version "${CC.version}". Latest supported version is "2".`);
      return 2 === CC.version ? CC : CC = {
        ...CC,
        version: 2,
        imageType: NC
      }
    }

    function pC(CC, zC) {
      const ZC = (zC = SC(zC)).specular;
      let QC = Math.log2(zC.width);
      if (QC = Math.round(QC) + 1, ZC.mipmaps.length !== 6 * QC) throw new Error(`Unsupported specular mipmaps number "${ZC.mipmaps.length}"`);
      const wC = new Array(QC);
      for (let bC = 0; bC < QC; bC++) {
        wC[bC] = new Array(6);
        for (let QC = 0; QC < 6; QC++) {
          const nC = ZC.mipmaps[6 * bC + QC];
          wC[bC][QC] = new Uint8Array(CC.buffer, CC.byteOffset + zC.binaryDataPosition + nC.position, nC.length)
        }
      }
      return wC
    }

    function PC(CC, zC) {
      zC = SC(zC);
      const ZC = new Array(6),
        QC = zC.irradiance?.irradianceTexture;
      if (QC) {
        if (6 !== QC.faces.length) throw new Error(`Incorrect irradiance texture faces number "${QC.faces.length}"`);
        for (let wC = 0; wC < 6; wC++) {
          const bC = QC.faces[wC];
          ZC[wC] = new Uint8Array(CC.buffer, CC.byteOffset + zC.binaryDataPosition + bC.position, bC.length)
        }
      }
      return ZC
    }

    function GC(CC, zC, ZC) {
      const QC = (ZC = SC(ZC)).specular;
      if (!QC) return Promise.resolve([]);
      CC._lodGenerationScale = QC.lodGenerationScale;
      const bC = [],
        nC = pC(zC, ZC);
      bC.push(AC(CC, nC, ZC.imageType));
      const fC = ZC.irradiance?.irradianceTexture;
      if (fC) {
        const QC = PC(zC, ZC);
        let nC = null;
        ZC.irradiance?.irradianceTexture?.dominantDirection && (nC = wC.r.FromArray(ZC.irradiance.irradianceTexture.dominantDirection)), bC.push(xC(CC, QC, fC.size, ZC.imageType, nC))
      }
      return Promise.all(bC)
    }
    async function RC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
      return await new Promise(((WC, NC) => {
        if (ZC) {
          const ZC = zC.createTexture(null, !0, !0, null, 1, null, (CC => {
            NC(CC)
          }), CC);
          QC?.onEffectCreatedObservable.addOnce((fC => {
            fC.executeWhenCompiled((() => {
              QC.externalTextureSamplerBinding = !0, QC.onApply = QC => {
                QC._bindTexture("textureSampler", ZC), QC.setFloat2("scale", 1, zC._features.needsInvertingBitmap && CC instanceof ImageBitmap ? -1 : 1)
              }, zC.scenes.length && (zC.scenes[0].postProcessManager.directRender([QC], qC, !0, bC, nC), zC.restoreDefaultFramebuffer(), ZC.dispose(), URL.revokeObjectURL(wC), WC())
            }))
          }))
        } else {
          if (zC._uploadImageToTexture(FC, CC, bC, nC), fC) {
            const ZC = oC[nC];
            ZC && zC._uploadImageToTexture(ZC._texture, CC, bC, 0)
          }
          WC()
        }
      }))
    }
    async function AC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NC;
      const QC = CC.mg();
      CC.format = 5, CC.type = 0, CC.generateMipMaps = !0, CC._cachedAnisotropicFilteringLevel = null, QC.updateTextureSamplingMode(3, CC), await JC(CC, zC, !0, ZC), CC.isReady = !0
    }
    async function xC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : NC,
        wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const bC = CC.mg(),
        nC = new fC.c(bC, 5),
        qC = new oC.b(bC, nC);
      CC._irradianceTexture = qC, qC._dominantDirection = wC, nC.isCube = !0, nC.format = 5, nC.type = 0, nC.generateMipMaps = !0, nC._cachedAnisotropicFilteringLevel = null, nC.generateMipMaps = !0, nC.width = ZC, nC.height = ZC, bC.updateTextureSamplingMode(3, nC), await JC(nC, [zC], !1, QC), bC.generateMipMapsForCubemap(nC), nC.isReady = !0
    }
    async function JC(CC, zC, wC) {
      let nC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : NC;
      if (!(0, QC.h)(CC.width)) throw new Error("Texture size must be a power of two");
      const FC = (0, bC.ILog2)(CC.width) + 1,
        MC = CC.mg();
      let gC = !1,
        SC = !1,
        pC = null,
        PC = null,
        GC = null;
      const AC = MC.getCaps();
      AC.textureLOD ? MC._features.supportRenderAndCopyToLodForFloatTextures ? AC.textureHalfFloatRender && AC.textureHalfFloatLinearFiltering ? (gC = !0, CC.type = 2) : AC.textureFloatRender && AC.textureFloatLinearFiltering && (gC = !0, CC.type = 1) : gC = !1 : (gC = !1, SC = wC);
      let xC = 0;
      if (gC) MC.isWebGPU ? (xC = 1, await ZC.e(342).then((() => ZC(61040)))) : await ZC.e(324).then((() => ZC(61045))), pC = new qC.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, MC, !1, void 0, CC.type, void 0, null, !1, void 0, xC), CC._isRGBD = !1, CC.invertY = !1, PC = MC.createRenderTargetCubeTexture(CC.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: CC.type,
        format: 5
      });
      else if (CC._isRGBD = !0, CC.invertY = !0, SC) {
        const zC = 3;
        GC = {};
        const ZC = CC._lodGenerationScale,
          QC = CC._lodGenerationOffset;
        for (let wC = 0; wC < zC; wC++) {
          const bC = (FC - 1) * ZC + QC,
            nC = QC + (bC - QC) * (1 - wC / (zC - 1)),
            qC = Math.round(Math.min(Math.max(nC, 0), bC)),
            WC = new fC.c(MC, 2);
          WC.isCube = !0, WC.invertY = !0, WC.generateMipMaps = !1, MC.updateTextureSamplingMode(2, WC);
          const NC = new oC.b(null);
          switch (NC._isCube = !0, NC._texture = WC, GC[qC] = NC, wC) {
            case 0:
              CC._lodTextureLow = NC;
              break;
            case 1:
              CC._lodTextureMid = NC;
              break;
            case 2:
              CC._lodTextureHigh = NC
          }
        }
      }
      const JC = [];
      for (let ZC = 0; ZC < zC.length; ZC++)
        for (let QC = 0; QC < 6; QC++) {
          const wC = zC[ZC][QC],
            bC = (0, WC.i)(wC),
            fC = new Blob([bC], {
              type: nC
            }),
            oC = URL.createObjectURL(fC);
          let qC;
          if (MC._features.forceBitmapOverHTMLImageElement) qC = MC.createImageBitmap(fC, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async zC => await RC(zC, MC, gC, pC, oC, QC, ZC, SC, GC, PC, CC)));
          else {
            const zC = new Image;
            zC.src = oC, qC = new Promise(((wC, bC) => {
              zC.onload = () => {
                RC(zC, MC, gC, pC, oC, QC, ZC, SC, GC, PC, CC).then((() => wC())).catch((CC => {
                  bC(CC)
                }))
              }, zC.onerror = CC => {
                bC(CC)
              }
            }))
          }
          JC.push(qC)
        }
      if (await Promise.all(JC), zC.length < FC) {
        let ZC;
        const QC = Math.pow(2, FC - 1 - zC.length),
          wC = QC * QC * 4;
        switch (CC.type) {
          case 0:
            ZC = new Uint8Array(wC);
            break;
          case 2:
            ZC = new Uint16Array(wC);
            break;
          case 1:
            ZC = new Float32Array(wC)
        }
        for (let bC = zC.length; bC < FC; bC++)
          for (let zC = 0; zC < 6; zC++) MC._uploadArrayBufferViewToTexture(PC?.texture || CC, ZC, zC, bC)
      }
      if (PC) {
        const zC = CC._irradianceTexture;
        CC._irradianceTexture = null, MC._releaseTexture(CC), PC._swapAndDie(CC), CC._irradianceTexture = zC
      }
      pC && pC.dispose(), SC && (CC._lodTextureHigh && CC._lodTextureHigh._texture && (CC._lodTextureHigh._texture.isReady = !0), CC._lodTextureMid && CC._lodTextureMid._texture && (CC._lodTextureMid._texture.isReady = !0), CC._lodTextureLow && CC._lodTextureLow._texture && (CC._lodTextureLow._texture.isReady = !0))
    }

    function IC(CC, zC) {
      const ZC = (zC = SC(zC)).irradiance;
      if (!ZC) return;
      const QC = new nC.g;
      wC.r.FromArrayToRef(ZC.x, 0, QC.x), wC.r.FromArrayToRef(ZC.y, 0, QC.y), wC.r.FromArrayToRef(ZC.z, 0, QC.z), wC.r.FromArrayToRef(ZC.xx, 0, QC.xx), wC.r.FromArrayToRef(ZC.yy, 0, QC.yy), wC.r.FromArrayToRef(ZC.zz, 0, QC.zz), wC.r.FromArrayToRef(ZC.yz, 0, QC.yz), wC.r.FromArrayToRef(ZC.zx, 0, QC.zx), wC.r.FromArrayToRef(ZC.xy, 0, QC.xy), CC._sphericalPolynomial = QC
    }
    var iC = ZC(41655);
    class vC {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(CC, zC, ZC, QC, wC) {
        if (Array.isArray(CC)) return;
        const bC = gC(CC);
        if (bC) {
          zC.width = bC.width, zC.height = bC.width;
          try {
            (0, iC.e)(), IC(zC, bC), GC(zC, CC, bC).then((() => {
              zC.isReady = !0, zC.onLoadedObservable.notifyObservers(zC), zC.onLoadedObservable.clear(), QC && QC()
            }), (CC => {
              wC?.("Can not upload environment levels", CC)
            }))
          } catch (nC) {
            wC?.("Can not upload environment file", nC)
          }
        } else wC && wC("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41655: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    var QC = ZC(41590),
      wC = ZC(39803);
    let bC = !1;

    function nC() {
      bC || (bC = !0, wC.b.prototype._sphericalPolynomialTargetSize = 0, wC.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(wC.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = QC.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((CC => {
              this._texture._sphericalPolynomial = CC, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(CC) {
          this._texture && (this._texture._sphericalPolynomial = CC)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41590: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC
    });
    var QC = ZC(36963),
      wC = ZC(36991),
      bC = ZC(39800),
      nC = ZC(36968),
      fC = ZC(37142);
    class oC {
      constructor(CC, zC, ZC, QC) {
        this.name = CC, this.worldAxisForNormal = zC, this.worldAxisForFileX = ZC, this.worldAxisForFileY = QC
      }
    }
    class qC {
      static _NearestPow2Floor(CC) {
        return CC <= 1 ? 1 : 1 << Math.floor(Math.log2(CC))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(CC) {
        if (!CC.isCube) return null;
        CC.Km()?.mg().flushFramebuffer();
        const zC = CC.getSize().width,
          ZC = CC._sphericalPolynomialTargetSize,
          QC = ZC > 0 ? this._NearestPow2Floor(ZC) : 0,
          wC = !CC.noMipmap && !0 === CC._texture?.generateMipMaps,
          bC = QC > 0 && QC < zC && wC,
          nC = bC ? Math.max(0, Math.round(Math.log2(zC / QC))) : 0,
          fC = bC ? Math.max(1, Math.floor(zC / Math.pow(2, nC))) : zC,
          oC = CC.readPixels(0, nC, void 0, !1),
          qC = CC.readPixels(1, nC, void 0, !1);
        let FC, WC;
        CC.isRenderTarget ? (FC = CC.readPixels(3, nC, void 0, !1), WC = CC.readPixels(2, nC, void 0, !1)) : (FC = CC.readPixels(2, nC, void 0, !1), WC = CC.readPixels(3, nC, void 0, !1));
        const NC = CC.readPixels(4, nC, void 0, !1),
          MC = CC.readPixels(5, nC, void 0, !1),
          gC = CC.gammaSpace,
          SC = QC > 0 && QC < zC && !bC;
        return new Promise((CC => {
          Promise.all([qC, oC, FC, WC, NC, MC]).then((ZC => {
            let [wC, bC, nC, oC, qC, FC] = ZC, WC = fC;
            if (SC) {
              const CC = 4;
              wC = this._DownsampleFace(wC, zC, QC, CC), bC = this._DownsampleFace(bC, zC, QC, CC), nC = this._DownsampleFace(nC, zC, QC, CC), oC = this._DownsampleFace(oC, zC, QC, CC), qC = this._DownsampleFace(qC, zC, QC, CC), FC = this._DownsampleFace(FC, zC, QC, CC), WC = QC
            }
            const NC = {
              size: WC,
              right: bC,
              left: wC,
              up: nC,
              down: oC,
              front: qC,
              back: FC,
              format: 5,
              type: wC instanceof Float32Array ? 1 : 0,
              gammaSpace: gC
            };
            CC(this.ConvertCubeMapToSphericalPolynomial(NC))
          }))
        }))
      }
      static _AreaElement(CC, zC) {
        return Math.atan2(CC * zC, Math.sqrt(CC * CC + zC * zC + 1))
      }
      static _DownsampleFace(CC, zC, ZC, QC) {
        const wC = CC instanceof Float32Array ? CC : Float32Array.from(CC),
          bC = ZC * ZC * QC,
          nC = new Float32Array(bC),
          fC = zC / ZC,
          oC = 1 / (fC * fC);
        for (let FC = 0; FC < ZC; FC++) {
          const CC = Math.floor(FC * fC),
            bC = Math.floor((FC + 1) * fC);
          for (let qC = 0; qC < ZC; qC++) {
            const WC = Math.floor(qC * fC),
              NC = Math.floor((qC + 1) * fC),
              MC = (FC * ZC + qC) * QC;
            for (let ZC = 0; ZC < QC; ZC++) {
              let fC = 0;
              for (let nC = CC; nC < bC; nC++)
                for (let CC = WC; CC < NC; CC++) fC += wC[(nC * zC + CC) * QC + ZC];
              nC[MC + ZC] = fC * oC
            }
          }
        }
        if (CC instanceof Float32Array) return nC;
        const qC = new(0, CC.constructor)(bC);
        for (let FC = 0; FC < bC; FC++) qC[FC] = nC[FC] + .5 | 0;
        return qC
      }
      static ConvertCubeMapToSphericalPolynomial(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZC = zC > 0 ? this._NearestPow2Floor(zC) : 0;
        if (ZC > 0 && CC.size > ZC) {
          const zC = 5 === CC.format ? 4 : 3,
            QC = ["right", "left", "up", "down", "front", "back"],
            wC = {};
          for (const bC of QC) wC[bC] = this._DownsampleFace(CC[bC], CC.size, ZC, zC);
          CC = {
            ...CC,
            ...wC,
            size: ZC
          }
        }
        const QC = new bC.c;
        let oC = 0;
        const qC = 2 / CC.size,
          FC = qC,
          WC = .5 * qC,
          NC = WC - 1;
        for (let bC = 0; bC < 6; bC++) {
          const zC = this._FileFaces[bC],
            ZC = CC[zC.name];
          let MC = NC;
          const gC = 5 === CC.format ? 4 : 3;
          for (let bC = 0; bC < CC.size; bC++) {
            let SC = NC;
            for (let FC = 0; FC < CC.size; FC++) {
              const NC = zC.worldAxisForFileX.scale(SC).add(zC.worldAxisForFileY.scale(MC)).add(zC.worldAxisForNormal);
              NC.normalize();
              const pC = this._AreaElement(SC - WC, MC - WC) - this._AreaElement(SC - WC, MC + WC) - this._AreaElement(SC + WC, MC - WC) + this._AreaElement(SC + WC, MC + WC);
              let PC = ZC[bC * CC.size * gC + FC * gC + 0],
                GC = ZC[bC * CC.size * gC + FC * gC + 1],
                RC = ZC[bC * CC.size * gC + FC * gC + 2];
              isNaN(PC) && (PC = 0), isNaN(GC) && (GC = 0), isNaN(RC) && (RC = 0), 0 === CC.type && (PC /= 255, GC /= 255, RC /= 255), CC.gammaSpace && (PC = Math.pow((0, wC.Clamp)(PC), nC.i), GC = Math.pow((0, wC.Clamp)(GC), nC.i), RC = Math.pow((0, wC.Clamp)(RC), nC.i));
              const AC = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const CC = Math.max(PC, GC, RC);
                if (CC > AC) {
                  const zC = AC / CC;
                  PC *= zC, GC *= zC, RC *= zC
                }
              } else PC = (0, wC.Clamp)(PC, 0, AC), GC = (0, wC.Clamp)(GC, 0, AC), RC = (0, wC.Clamp)(RC, 0, AC);
              const xC = new fC.e(PC, GC, RC);
              QC.addLight(NC, xC, pC), oC += pC, SC += qC
            }
            MC += FC
          }
        }
        const MC = 6 * (4 * Math.PI) / 6 / oC;
        return QC.scaleInPlace(MC), QC.convertIncidentRadianceToIrradiance(), QC.convertIrradianceToLambertianRadiance(), bC.g.FromHarmonics(QC)
      }
    }
    qC._FileFaces = [new oC("right", new QC.r(1, 0, 0), new QC.r(0, 0, -1), new QC.r(0, -1, 0)), new oC("left", new QC.r(-1, 0, 0), new QC.r(0, 0, 1), new QC.r(0, -1, 0)), new oC("up", new QC.r(0, 1, 0), new QC.r(1, 0, 0), new QC.r(0, 0, 1)), new oC("down", new QC.r(0, -1, 0), new QC.r(1, 0, 0), new QC.r(0, 0, -1)), new oC("front", new QC.r(0, 0, 1), new QC.r(1, 0, 0), new QC.r(0, -1, 0)), new oC("back", new QC.r(0, 0, -1), new QC.r(-1, 0, 0), new QC.r(0, -1, 0))], qC.MAX_HDRI_VALUE = 4096, qC.PRESERVE_CLAMPED_COLORS = !1
  },
  41630: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(41618),
      wC = ZC(41634);
    class bC {
      static ExpandRGBDTexture(CC) {
        const zC = CC._texture;
        if (!zC || !CC.isRGBD) return;
        const wC = zC.mg(),
          bC = wC.getCaps(),
          nC = zC.isReady;
        let fC = !1;
        bC.textureHalfFloatRender && bC.textureHalfFloatLinearFiltering ? (fC = !0, zC.type = 2) : bC.textureFloatRender && bC.textureFloatLinearFiltering && (fC = !0, zC.type = 1), fC && (zC.isReady = !1, zC._isRGBD = !1, zC.invertY = !1);
        const oC = async () => {
          const bC = wC.isWebGPU,
            nC = bC ? 1 : 0;
          zC.isReady = !1, bC ? await ZC.e(342).then((() => ZC(61040))) : await ZC.e(324).then((() => ZC(61045)));
          const fC = new QC.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, wC, !1, void 0, zC.type, void 0, null, !1, void 0, nC);
          fC.externalTextureSamplerBinding = !0;
          const oC = wC.createRenderTargetTexture(zC.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: zC.samplingMode,
            type: zC.type,
            format: 5
          });
          fC.onEffectCreatedObservable.addOnce((ZC => {
            ZC.executeWhenCompiled((() => {
              fC.onApply = CC => {
                CC._bindTexture("textureSampler", zC), CC.setFloat2("scale", 1, 1)
              }, CC.Km()?.postProcessManager.directRender([fC], oC, !0), wC.restoreDefaultFramebuffer(), wC._releaseTexture(zC), fC && fC.dispose(), oC._swapAndDie(zC), zC.isReady = !0
            }))
          }))
        };
        fC && (nC ? oC() : CC.onLoadObservable.addOnce(oC))
      }
      static async EncodeTextureToRGBD(CC, zC) {
        let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return zC.mg().isWebGPU ? await ZC.e(343).then((() => ZC(61061))) : await ZC.e(325).then((() => ZC(61056))), await (0, wC.b)("rgbdEncode", CC, zC, QC, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);