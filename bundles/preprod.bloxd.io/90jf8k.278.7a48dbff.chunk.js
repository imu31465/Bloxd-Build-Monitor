export const id = 278;
export const ids = [278];
export const modules = {
  39634: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      _ENVTextureLoader: () => LF
    });
    var CF = SF(37900),
      AF = SF(35623),
      uF = SF(35650),
      hF = SF(37960),
      bW = SF(37796),
      dF = SF(37963),
      PF = (SF(38057), SF(39636)),
      RF = SF(37076),
      iW = (SF(39651), SF(39669), SF(38031));
    const eF = "image/png",
      EF = [134, 22, 135, 150, 246, 214, 150, 54];

    function QF(FF) {
      const WF = new DataView(FF.buffer, FF.byteOffset, FF.byteLength);
      let SF = 0;
      for (let hF = 0; hF < EF.length; hF++)
        if (WF.getUint8(SF++) !== EF[hF]) return RF.b.Error("Not a babylon environment map"), null;
      let CF, AF = "";
      for (; CF = WF.getUint8(SF++);) AF += String.fromCharCode(CF);
      let uF = JSON.parse(AF);
      return uF = rW(uF), uF.binaryDataPosition = SF, uF.specular && (uF.specular.lodGenerationScale = uF.specular.lodGenerationScale || .8), uF
    }

    function rW(FF) {
      if (FF.version > 2) throw new Error(`Unsupported babylon environment map version "${FF.version}". Latest supported version is "2".`);
      return 2 === FF.version ? FF : FF = {
        ...FF,
        version: 2,
        imageType: eF
      }
    }

    function gW(FF, WF) {
      const SF = (WF = rW(WF)).specular;
      let CF = Math.log2(WF.width);
      if (CF = Math.round(CF) + 1, SF.mipmaps.length !== 6 * CF) throw new Error(`Unsupported specular mipmaps number "${SF.mipmaps.length}"`);
      const AF = new Array(CF);
      for (let uF = 0; uF < CF; uF++) {
        AF[uF] = new Array(6);
        for (let CF = 0; CF < 6; CF++) {
          const hF = SF.mipmaps[6 * uF + CF];
          AF[uF][CF] = new Uint8Array(FF.buffer, FF.byteOffset + WF.binaryDataPosition + hF.position, hF.length)
        }
      }
      return AF
    }

    function tW(FF, WF) {
      WF = rW(WF);
      const SF = new Array(6),
        CF = WF.irradiance?.irradianceTexture;
      if (CF) {
        if (6 !== CF.faces.length) throw new Error(`Incorrect irradiance texture faces number "${CF.faces.length}"`);
        for (let AF = 0; AF < 6; AF++) {
          const uF = CF.faces[AF];
          SF[AF] = new Uint8Array(FF.buffer, FF.byteOffset + WF.binaryDataPosition + uF.position, uF.length)
        }
      }
      return SF
    }

    function TF(FF, WF, SF) {
      const CF = (SF = rW(SF)).specular;
      if (!CF) return Promise.resolve([]);
      FF._lodGenerationScale = CF.lodGenerationScale;
      const uF = [],
        hF = gW(WF, SF);
      uF.push(kW(FF, hF, SF.imageType));
      const bW = SF.irradiance?.irradianceTexture;
      if (bW) {
        const CF = tW(WF, SF);
        let hF = null;
        SF.irradiance?.irradianceTexture?.dominantDirection && (hF = AF.r.FromArray(SF.irradiance.irradianceTexture.dominantDirection)), uF.push(qW(FF, CF, bW.size, SF.imageType, hF))
      }
      return Promise.all(uF)
    }
    async function aW(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF) {
      return await new Promise(((iW, eF) => {
        if (SF) {
          const SF = WF.createTexture(null, !0, !0, null, 1, null, (FF => {
            eF(FF)
          }), FF);
          CF?.onEffectCreatedObservable.addOnce((bW => {
            bW.executeWhenCompiled((() => {
              CF.externalTextureSamplerBinding = !0, CF.onApply = CF => {
                CF._bindTexture("textureSampler", SF), CF.setFloat2("scale", 1, WF._features.needsInvertingBitmap && FF instanceof ImageBitmap ? -1 : 1)
              }, WF.scenes.length && (WF.scenes[0].postProcessManager.directRender([CF], PF, !0, uF, hF), WF.restoreDefaultFramebuffer(), SF.dispose(), URL.revokeObjectURL(AF), iW())
            }))
          }))
        } else {
          if (WF._uploadImageToTexture(RF, FF, uF, hF), bW) {
            const SF = dF[hF];
            SF && WF._uploadImageToTexture(SF._texture, FF, uF, 0)
          }
          iW()
        }
      }))
    }
    async function kW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eF;
      const CF = FF.sC();
      FF.format = 5, FF.type = 0, FF.generateMipMaps = !0, FF._cachedAnisotropicFilteringLevel = null, CF.updateTextureSamplingMode(3, FF), await VF(FF, WF, !0, SF), FF.isReady = !0
    }
    async function qW(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eF,
        AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const uF = FF.sC(),
        hF = new bW.b(uF, 5),
        PF = new dF.d(uF, hF);
      FF._irradianceTexture = PF, PF._dominantDirection = AF, hF.isCube = !0, hF.format = 5, hF.type = 0, hF.generateMipMaps = !0, hF._cachedAnisotropicFilteringLevel = null, hF.generateMipMaps = !0, hF.width = SF, hF.height = SF, uF.updateTextureSamplingMode(3, hF), await VF(hF, [WF], !1, CF), uF.generateMipMapsForCubemap(hF), hF.isReady = !0
    }
    async function VF(FF, WF, AF) {
      let hF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eF;
      if (!(0, CF.h)(FF.width)) throw new Error("Texture size must be a power of two");
      const RF = (0, uF.ILog2)(FF.width) + 1,
        EF = FF.sC();
      let QF = !1,
        rW = !1,
        gW = null,
        tW = null,
        TF = null;
      const kW = EF.getCaps();
      kW.textureLOD ? EF._features.supportRenderAndCopyToLodForFloatTextures ? kW.textureHalfFloatRender && kW.textureHalfFloatLinearFiltering ? (QF = !0, FF.type = 2) : kW.textureFloatRender && kW.textureFloatLinearFiltering && (QF = !0, FF.type = 1) : QF = !1 : (QF = !1, rW = AF);
      let qW = 0;
      if (QF) EF.isWebGPU ? (qW = 1, await SF.e(312).then((() => SF(59128)))) : await SF.e(294).then((() => SF(59136))), gW = new PF.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, EF, !1, void 0, FF.type, void 0, null, !1, void 0, qW), FF._isRGBD = !1, FF.invertY = !1, tW = EF.createRenderTargetCubeTexture(FF.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: FF.type,
        format: 5
      });
      else if (FF._isRGBD = !0, FF.invertY = !0, rW) {
        const WF = 3;
        TF = {};
        const SF = FF._lodGenerationScale,
          CF = FF._lodGenerationOffset;
        for (let AF = 0; AF < WF; AF++) {
          const uF = (RF - 1) * SF + CF,
            hF = CF + (uF - CF) * (1 - AF / (WF - 1)),
            PF = Math.round(Math.min(Math.max(hF, 0), uF)),
            iW = new bW.b(EF, 2);
          iW.isCube = !0, iW.invertY = !0, iW.generateMipMaps = !1, EF.updateTextureSamplingMode(2, iW);
          const eF = new dF.d(null);
          switch (eF._isCube = !0, eF._texture = iW, TF[PF] = eF, AF) {
            case 0:
              FF._lodTextureLow = eF;
              break;
            case 1:
              FF._lodTextureMid = eF;
              break;
            case 2:
              FF._lodTextureHigh = eF
          }
        }
      }
      const VF = [];
      for (let SF = 0; SF < WF.length; SF++)
        for (let CF = 0; CF < 6; CF++) {
          const AF = WF[SF][CF],
            uF = (0, iW.o)(AF),
            bW = new Blob([uF], {
              type: hF
            }),
            dF = URL.createObjectURL(bW);
          let PF;
          if (EF._features.forceBitmapOverHTMLImageElement) PF = EF.createImageBitmap(bW, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async WF => await aW(WF, EF, QF, gW, dF, CF, SF, rW, TF, tW, FF)));
          else {
            const WF = new Image;
            WF.src = dF, PF = new Promise(((AF, uF) => {
              WF.onload = () => {
                aW(WF, EF, QF, gW, dF, CF, SF, rW, TF, tW, FF).then((() => AF())).catch((FF => {
                  uF(FF)
                }))
              }, WF.onerror = FF => {
                uF(FF)
              }
            }))
          }
          VF.push(PF)
        }
      if (await Promise.all(VF), WF.length < RF) {
        let SF;
        const CF = Math.pow(2, RF - 1 - WF.length),
          AF = CF * CF * 4;
        switch (FF.type) {
          case 0:
            SF = new Uint8Array(AF);
            break;
          case 2:
            SF = new Uint16Array(AF);
            break;
          case 1:
            SF = new Float32Array(AF)
        }
        for (let uF = WF.length; uF < RF; uF++)
          for (let WF = 0; WF < 6; WF++) EF._uploadArrayBufferViewToTexture(tW?.texture || FF, SF, WF, uF)
      }
      if (tW) {
        const WF = FF._irradianceTexture;
        FF._irradianceTexture = null, EF._releaseTexture(FF), tW._swapAndDie(FF), FF._irradianceTexture = WF
      }
      gW && gW.dispose(), rW && (FF._lodTextureHigh && FF._lodTextureHigh._texture && (FF._lodTextureHigh._texture.isReady = !0), FF._lodTextureMid && FF._lodTextureMid._texture && (FF._lodTextureMid._texture.isReady = !0), FF._lodTextureLow && FF._lodTextureLow._texture && (FF._lodTextureLow._texture.isReady = !0))
    }

    function NF(FF, WF) {
      const SF = (WF = rW(WF)).irradiance;
      if (!SF) return;
      const CF = new hF.g;
      AF.r.FromArrayToRef(SF.x, 0, CF.x), AF.r.FromArrayToRef(SF.y, 0, CF.y), AF.r.FromArrayToRef(SF.z, 0, CF.z), AF.r.FromArrayToRef(SF.xx, 0, CF.xx), AF.r.FromArrayToRef(SF.yy, 0, CF.yy), AF.r.FromArrayToRef(SF.zz, 0, CF.zz), AF.r.FromArrayToRef(SF.yz, 0, CF.yz), AF.r.FromArrayToRef(SF.zx, 0, CF.zx), AF.r.FromArrayToRef(SF.xy, 0, CF.xy), FF._sphericalPolynomial = CF
    }
    var DF = SF(39675);
    class LF {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(FF, WF, SF, CF, AF) {
        if (Array.isArray(FF)) return;
        const uF = QF(FF);
        if (uF) {
          WF.width = uF.width, WF.height = uF.width;
          try {
            (0, DF.c)(), NF(WF, uF), TF(WF, FF, uF).then((() => {
              WF.isReady = !0, WF.onLoadedObservable.notifyObservers(WF), WF.onLoadedObservable.clear(), CF && CF()
            }), (FF => {
              AF?.("Can not upload environment levels", FF)
            }))
          } catch (hF) {
            AF?.("Can not upload environment file", hF)
          }
        } else AF && AF("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  39675: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(39619),
      AF = SF(37963);
    let uF = !1;

    function hF() {
      uF || (uF = !0, AF.d.prototype._sphericalPolynomialTargetSize = 0, AF.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(AF.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = CF.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((FF => {
              this._texture._sphericalPolynomial = FF, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(FF) {
          this._texture && (this._texture._sphericalPolynomial = FF)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  39619: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => PF
    });
    var CF = SF(35623),
      AF = SF(35650),
      uF = SF(37960),
      hF = SF(35625),
      bW = SF(35678);
    class dF {
      constructor(FF, WF, SF, CF) {
        this.name = FF, this.worldAxisForNormal = WF, this.worldAxisForFileX = SF, this.worldAxisForFileY = CF
      }
    }
    class PF {
      static _NearestPow2Floor(FF) {
        return FF <= 1 ? 1 : 1 << Math.floor(Math.log2(FF))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(FF) {
        if (!FF.isCube) return null;
        FF.OWF()?.sC().flushFramebuffer();
        const WF = FF.getSize().width,
          SF = FF._sphericalPolynomialTargetSize,
          CF = SF > 0 ? this._NearestPow2Floor(SF) : 0,
          AF = !FF.noMipmap && !0 === FF._texture?.generateMipMaps,
          uF = CF > 0 && CF < WF && AF,
          hF = uF ? Math.max(0, Math.round(Math.log2(WF / CF))) : 0,
          bW = uF ? Math.max(1, Math.floor(WF / Math.pow(2, hF))) : WF,
          dF = FF.readPixels(0, hF, void 0, !1),
          PF = FF.readPixels(1, hF, void 0, !1);
        let RF, iW;
        FF.isRenderTarget ? (RF = FF.readPixels(3, hF, void 0, !1), iW = FF.readPixels(2, hF, void 0, !1)) : (RF = FF.readPixels(2, hF, void 0, !1), iW = FF.readPixels(3, hF, void 0, !1));
        const eF = FF.readPixels(4, hF, void 0, !1),
          EF = FF.readPixels(5, hF, void 0, !1),
          QF = FF.gammaSpace,
          rW = CF > 0 && CF < WF && !uF;
        return new Promise((FF => {
          Promise.all([PF, dF, RF, iW, eF, EF]).then((SF => {
            let [AF, uF, hF, dF, PF, RF] = SF, iW = bW;
            if (rW) {
              const FF = 4;
              AF = this._DownsampleFace(AF, WF, CF, FF), uF = this._DownsampleFace(uF, WF, CF, FF), hF = this._DownsampleFace(hF, WF, CF, FF), dF = this._DownsampleFace(dF, WF, CF, FF), PF = this._DownsampleFace(PF, WF, CF, FF), RF = this._DownsampleFace(RF, WF, CF, FF), iW = CF
            }
            const eF = {
              size: iW,
              right: uF,
              left: AF,
              up: hF,
              down: dF,
              front: PF,
              back: RF,
              format: 5,
              type: AF instanceof Float32Array ? 1 : 0,
              gammaSpace: QF
            };
            FF(this.ConvertCubeMapToSphericalPolynomial(eF))
          }))
        }))
      }
      static _AreaElement(FF, WF) {
        return Math.atan2(FF * WF, Math.sqrt(FF * FF + WF * WF + 1))
      }
      static _DownsampleFace(FF, WF, SF, CF) {
        const AF = FF instanceof Float32Array ? FF : Float32Array.from(FF),
          uF = SF * SF * CF,
          hF = new Float32Array(uF),
          bW = WF / SF,
          dF = 1 / (bW * bW);
        for (let RF = 0; RF < SF; RF++) {
          const FF = Math.floor(RF * bW),
            uF = Math.floor((RF + 1) * bW);
          for (let PF = 0; PF < SF; PF++) {
            const iW = Math.floor(PF * bW),
              eF = Math.floor((PF + 1) * bW),
              EF = (RF * SF + PF) * CF;
            for (let SF = 0; SF < CF; SF++) {
              let bW = 0;
              for (let hF = FF; hF < uF; hF++)
                for (let FF = iW; FF < eF; FF++) bW += AF[(hF * WF + FF) * CF + SF];
              hF[EF + SF] = bW * dF
            }
          }
        }
        if (FF instanceof Float32Array) return hF;
        const PF = new(0, FF.constructor)(uF);
        for (let RF = 0; RF < uF; RF++) PF[RF] = hF[RF] + .5 | 0;
        return PF
      }
      static ConvertCubeMapToSphericalPolynomial(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const SF = WF > 0 ? this._NearestPow2Floor(WF) : 0;
        if (SF > 0 && FF.size > SF) {
          const WF = 5 === FF.format ? 4 : 3,
            CF = ["right", "left", "up", "down", "front", "back"],
            AF = {};
          for (const uF of CF) AF[uF] = this._DownsampleFace(FF[uF], FF.size, SF, WF);
          FF = {
            ...FF,
            ...AF,
            size: SF
          }
        }
        const CF = new uF.d;
        let dF = 0;
        const PF = 2 / FF.size,
          RF = PF,
          iW = .5 * PF,
          eF = iW - 1;
        for (let uF = 0; uF < 6; uF++) {
          const WF = this._FileFaces[uF],
            SF = FF[WF.name];
          let EF = eF;
          const QF = 5 === FF.format ? 4 : 3;
          for (let uF = 0; uF < FF.size; uF++) {
            let rW = eF;
            for (let RF = 0; RF < FF.size; RF++) {
              const eF = WF.worldAxisForFileX.scale(rW).add(WF.worldAxisForFileY.scale(EF)).add(WF.worldAxisForNormal);
              eF.normalize();
              const gW = this._AreaElement(rW - iW, EF - iW) - this._AreaElement(rW - iW, EF + iW) - this._AreaElement(rW + iW, EF - iW) + this._AreaElement(rW + iW, EF + iW);
              let tW = SF[uF * FF.size * QF + RF * QF + 0],
                TF = SF[uF * FF.size * QF + RF * QF + 1],
                aW = SF[uF * FF.size * QF + RF * QF + 2];
              isNaN(tW) && (tW = 0), isNaN(TF) && (TF = 0), isNaN(aW) && (aW = 0), 0 === FF.type && (tW /= 255, TF /= 255, aW /= 255), FF.gammaSpace && (tW = Math.pow((0, AF.Clamp)(tW), hF.f), TF = Math.pow((0, AF.Clamp)(TF), hF.f), aW = Math.pow((0, AF.Clamp)(aW), hF.f));
              const kW = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const FF = Math.max(tW, TF, aW);
                if (FF > kW) {
                  const WF = kW / FF;
                  tW *= WF, TF *= WF, aW *= WF
                }
              } else tW = (0, AF.Clamp)(tW, 0, kW), TF = (0, AF.Clamp)(TF, 0, kW), aW = (0, AF.Clamp)(aW, 0, kW);
              const qW = new bW.e(tW, TF, aW);
              CF.addLight(eF, qW, gW), dF += gW, rW += PF
            }
            EF += RF
          }
        }
        const EF = 6 * (4 * Math.PI) / 6 / dF;
        return CF.scaleInPlace(EF), CF.convertIncidentRadianceToIrradiance(), CF.convertIrradianceToLambertianRadiance(), uF.g.FromHarmonics(CF)
      }
    }
    PF._FileFaces = [new dF("right", new CF.r(1, 0, 0), new CF.r(0, 0, -1), new CF.r(0, -1, 0)), new dF("left", new CF.r(-1, 0, 0), new CF.r(0, 0, 1), new CF.r(0, -1, 0)), new dF("up", new CF.r(0, 1, 0), new CF.r(1, 0, 0), new CF.r(0, 0, 1)), new dF("down", new CF.r(0, -1, 0), new CF.r(1, 0, 0), new CF.r(0, 0, -1)), new dF("front", new CF.r(0, 0, 1), new CF.r(1, 0, 0), new CF.r(0, -1, 0)), new dF("back", new CF.r(0, 0, -1), new CF.r(-1, 0, 0), new CF.r(0, -1, 0))], PF.MAX_HDRI_VALUE = 4096, PF.PRESERVE_CLAMPED_COLORS = !1
  },
  39651: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = SF(39636),
      AF = SF(39657);
    class uF {
      static ExpandRGBDTexture(FF) {
        const WF = FF._texture;
        if (!WF || !FF.isRGBD) return;
        const AF = WF.sC(),
          uF = AF.getCaps(),
          hF = WF.isReady;
        let bW = !1;
        uF.textureHalfFloatRender && uF.textureHalfFloatLinearFiltering ? (bW = !0, WF.type = 2) : uF.textureFloatRender && uF.textureFloatLinearFiltering && (bW = !0, WF.type = 1), bW && (WF.isReady = !1, WF._isRGBD = !1, WF.invertY = !1);
        const dF = async () => {
          const uF = AF.isWebGPU,
            hF = uF ? 1 : 0;
          WF.isReady = !1, uF ? await SF.e(312).then((() => SF(59128))) : await SF.e(294).then((() => SF(59136)));
          const bW = new CF.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, AF, !1, void 0, WF.type, void 0, null, !1, void 0, hF);
          bW.externalTextureSamplerBinding = !0;
          const dF = AF.createRenderTargetTexture(WF.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: WF.samplingMode,
            type: WF.type,
            format: 5
          });
          bW.onEffectCreatedObservable.addOnce((SF => {
            SF.executeWhenCompiled((() => {
              bW.onApply = FF => {
                FF._bindTexture("textureSampler", WF), FF.setFloat2("scale", 1, 1)
              }, FF.OWF()?.postProcessManager.directRender([bW], dF, !0), AF.restoreDefaultFramebuffer(), AF._releaseTexture(WF), bW && bW.dispose(), dF._swapAndDie(WF), WF.isReady = !0
            }))
          }))
        };
        bW && (hF ? dF() : FF.onLoadObservable.addOnce(dF))
      }
      static async EncodeTextureToRGBD(FF, WF) {
        let CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return WF.sC().isWebGPU ? await SF.e(313).then((() => SF(59155))) : await SF.e(295).then((() => SF(59150))), await (0, AF.d)("rgbdEncode", FF, WF, CF, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);