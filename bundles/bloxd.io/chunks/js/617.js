export const id = 617;
export const ids = [617];
export const modules = {
  44924: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      _ENVTextureLoader: () => fB
    });
    var YB = GB(40932),
      DB = GB(37778),
      QB = GB(37807),
      oB = GB(40985),
      jB = GB(40837),
      yB = GB(40992),
      JB = (GB(41091), GB(44931)),
      MB = GB(39366),
      PB = (GB(44941), GB(44969), GB(41067));
    const zB = "image/png",
      lB = [134, 22, 135, 150, 246, 214, 150, 54];

    function pB(BB) {
      const OB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      let GB = 0;
      for (let oB = 0; oB < lB.length; oB++)
        if (OB.getUint8(GB++) !== lB[oB]) return MB.b.Error("Not a babylon environment map"), null;
      let YB, DB = "";
      for (; YB = OB.getUint8(GB++);) DB += String.fromCharCode(YB);
      let QB = JSON.parse(DB);
      return QB = qB(QB), QB.binaryDataPosition = GB, QB.specular && (QB.specular.lodGenerationScale = QB.specular.lodGenerationScale || .8), QB
    }

    function qB(BB) {
      if (BB.version > 2) throw new Error(`Unsupported babylon environment map version "${BB.version}". Latest supported version is "2".`);
      return 2 === BB.version ? BB : BB = {
        ...BB,
        version: 2,
        imageType: zB
      }
    }

    function ZB(BB, OB) {
      const GB = (OB = qB(OB)).specular;
      let YB = Math.log2(OB.width);
      if (YB = Math.round(YB) + 1, GB.mipmaps.length !== 6 * YB) throw new Error(`Unsupported specular mipmaps number "${GB.mipmaps.length}"`);
      const DB = new Array(YB);
      for (let QB = 0; QB < YB; QB++) {
        DB[QB] = new Array(6);
        for (let YB = 0; YB < 6; YB++) {
          const oB = GB.mipmaps[6 * QB + YB];
          DB[QB][YB] = new Uint8Array(BB.buffer, BB.byteOffset + OB.binaryDataPosition + oB.position, oB.length)
        }
      }
      return DB
    }

    function NB(BB, OB) {
      OB = qB(OB);
      const GB = new Array(6),
        YB = OB.irradiance?.irradianceTexture;
      if (YB) {
        if (6 !== YB.faces.length) throw new Error(`Incorrect irradiance texture faces number "${YB.faces.length}"`);
        for (let DB = 0; DB < 6; DB++) {
          const QB = YB.faces[DB];
          GB[DB] = new Uint8Array(BB.buffer, BB.byteOffset + OB.binaryDataPosition + QB.position, QB.length)
        }
      }
      return GB
    }

    function RB(BB, OB, GB) {
      const YB = (GB = qB(GB)).specular;
      if (!YB) return Promise.resolve([]);
      BB._lodGenerationScale = YB.lodGenerationScale;
      const QB = [],
        oB = ZB(OB, GB);
      QB.push(AB(BB, oB, GB.imageType));
      const jB = GB.irradiance?.irradianceTexture;
      if (jB) {
        const YB = NB(OB, GB);
        let oB = null;
        GB.irradiance?.irradianceTexture?.dominantDirection && (oB = DB.r.FromArray(GB.irradiance.irradianceTexture.dominantDirection)), QB.push(VB(BB, YB, jB.size, GB.imageType, oB))
      }
      return Promise.all(QB)
    }
    async function WB(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
      return await new Promise(((PB, zB) => {
        if (GB) {
          const GB = OB.createTexture(null, !0, !0, null, 1, null, (BB => {
            zB(BB)
          }), BB);
          YB?.onEffectCreatedObservable.addOnce((jB => {
            jB.executeWhenCompiled((() => {
              YB.externalTextureSamplerBinding = !0, YB.onApply = YB => {
                YB._bindTexture("textureSampler", GB), YB.setFloat2("scale", 1, OB._features.needsInvertingBitmap && BB instanceof ImageBitmap ? -1 : 1)
              }, OB.scenes.length && (OB.scenes[0].postProcessManager.directRender([YB], JB, !0, QB, oB), OB.restoreDefaultFramebuffer(), GB.dispose(), URL.revokeObjectURL(DB), PB())
            }))
          }))
        } else {
          if (OB._uploadImageToTexture(MB, BB, QB, oB), jB) {
            const GB = yB[oB];
            GB && OB._uploadImageToTexture(GB._texture, BB, QB, 0)
          }
          PB()
        }
      }))
    }
    async function AB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zB;
      const YB = BB.Lp();
      BB.format = 5, BB.type = 0, BB.generateMipMaps = !0, BB._cachedAnisotropicFilteringLevel = null, YB.updateTextureSamplingMode(3, BB), await SB(BB, OB, !0, GB), BB.isReady = !0
    }
    async function VB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zB,
        DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const QB = BB.Lp(),
        oB = new jB.b(QB, 5),
        JB = new yB.d(QB, oB);
      BB._irradianceTexture = JB, JB._dominantDirection = DB, oB.isCube = !0, oB.format = 5, oB.type = 0, oB.generateMipMaps = !0, oB._cachedAnisotropicFilteringLevel = null, oB.generateMipMaps = !0, oB.width = GB, oB.height = GB, QB.updateTextureSamplingMode(3, oB), await SB(oB, [OB], !1, YB), QB.generateMipMapsForCubemap(oB), oB.isReady = !0
    }
    async function SB(BB, OB, DB) {
      let oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zB;
      if (!(0, YB.h)(BB.width)) throw new Error("Texture size must be a power of two");
      const MB = (0, QB.ILog2)(BB.width) + 1,
        lB = BB.Lp();
      let pB = !1,
        qB = !1,
        ZB = null,
        NB = null,
        RB = null;
      const AB = lB.getCaps();
      AB.textureLOD ? lB._features.supportRenderAndCopyToLodForFloatTextures ? AB.textureHalfFloatRender && AB.textureHalfFloatLinearFiltering ? (pB = !0, BB.type = 2) : AB.textureFloatRender && AB.textureFloatLinearFiltering && (pB = !0, BB.type = 1) : pB = !1 : (pB = !1, qB = DB);
      let VB = 0;
      if (pB) lB.isWebGPU ? (VB = 1, await GB.e(651).then((() => GB(63997)))) : await GB.e(633).then((() => GB(64005))), ZB = new JB.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, lB, !1, void 0, BB.type, void 0, null, !1, void 0, VB), BB._isRGBD = !1, BB.invertY = !1, NB = lB.createRenderTargetCubeTexture(BB.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: BB.type,
        format: 5
      });
      else if (BB._isRGBD = !0, BB.invertY = !0, qB) {
        const OB = 3;
        RB = {};
        const GB = BB._lodGenerationScale,
          YB = BB._lodGenerationOffset;
        for (let DB = 0; DB < OB; DB++) {
          const QB = (MB - 1) * GB + YB,
            oB = YB + (QB - YB) * (1 - DB / (OB - 1)),
            JB = Math.round(Math.min(Math.max(oB, 0), QB)),
            PB = new jB.b(lB, 2);
          PB.isCube = !0, PB.invertY = !0, PB.generateMipMaps = !1, lB.updateTextureSamplingMode(2, PB);
          const zB = new yB.d(null);
          switch (zB._isCube = !0, zB._texture = PB, RB[JB] = zB, DB) {
            case 0:
              BB._lodTextureLow = zB;
              break;
            case 1:
              BB._lodTextureMid = zB;
              break;
            case 2:
              BB._lodTextureHigh = zB
          }
        }
      }
      const SB = [];
      for (let GB = 0; GB < OB.length; GB++)
        for (let YB = 0; YB < 6; YB++) {
          const DB = OB[GB][YB],
            QB = (0, PB.o)(DB),
            jB = new Blob([QB], {
              type: oB
            }),
            yB = URL.createObjectURL(jB);
          let JB;
          if (lB._features.forceBitmapOverHTMLImageElement) JB = lB.createImageBitmap(jB, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async OB => await WB(OB, lB, pB, ZB, yB, YB, GB, qB, RB, NB, BB)));
          else {
            const OB = new Image;
            OB.src = yB, JB = new Promise(((DB, QB) => {
              OB.onload = () => {
                WB(OB, lB, pB, ZB, yB, YB, GB, qB, RB, NB, BB).then((() => DB())).catch((BB => {
                  QB(BB)
                }))
              }, OB.onerror = BB => {
                QB(BB)
              }
            }))
          }
          SB.push(JB)
        }
      if (await Promise.all(SB), OB.length < MB) {
        let GB;
        const YB = Math.pow(2, MB - 1 - OB.length),
          DB = YB * YB * 4;
        switch (BB.type) {
          case 0:
            GB = new Uint8Array(DB);
            break;
          case 2:
            GB = new Uint16Array(DB);
            break;
          case 1:
            GB = new Float32Array(DB)
        }
        for (let QB = OB.length; QB < MB; QB++)
          for (let OB = 0; OB < 6; OB++) lB._uploadArrayBufferViewToTexture(NB?.texture || BB, GB, OB, QB)
      }
      if (NB) {
        const OB = BB._irradianceTexture;
        BB._irradianceTexture = null, lB._releaseTexture(BB), NB._swapAndDie(BB), BB._irradianceTexture = OB
      }
      ZB && ZB.dispose(), qB && (BB._lodTextureHigh && BB._lodTextureHigh._texture && (BB._lodTextureHigh._texture.isReady = !0), BB._lodTextureMid && BB._lodTextureMid._texture && (BB._lodTextureMid._texture.isReady = !0), BB._lodTextureLow && BB._lodTextureLow._texture && (BB._lodTextureLow._texture.isReady = !0))
    }

    function nB(BB, OB) {
      const GB = (OB = qB(OB)).irradiance;
      if (!GB) return;
      const YB = new oB.f;
      DB.r.FromArrayToRef(GB.x, 0, YB.x), DB.r.FromArrayToRef(GB.y, 0, YB.y), DB.r.FromArrayToRef(GB.z, 0, YB.z), DB.r.FromArrayToRef(GB.xx, 0, YB.xx), DB.r.FromArrayToRef(GB.yy, 0, YB.yy), DB.r.FromArrayToRef(GB.zz, 0, YB.zz), DB.r.FromArrayToRef(GB.yz, 0, YB.yz), DB.r.FromArrayToRef(GB.zx, 0, YB.zx), DB.r.FromArrayToRef(GB.xy, 0, YB.xy), BB._sphericalPolynomial = YB
    }
    var UB = GB(44978);
    class fB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(BB, OB, GB, YB, DB) {
        if (Array.isArray(BB)) return;
        const QB = pB(BB);
        if (QB) {
          OB.width = QB.width, OB.height = QB.width;
          try {
            (0, UB.c)(), nB(OB, QB), RB(OB, BB, QB).then((() => {
              OB.isReady = !0, OB.onLoadedObservable.notifyObservers(OB), OB.onLoadedObservable.clear(), YB && YB()
            }), (BB => {
              DB?.("Can not upload environment levels", BB)
            }))
          } catch (oB) {
            DB?.("Can not upload environment file", oB)
          }
        } else DB && DB("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  44978: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(44909),
      DB = GB(40992);
    let QB = !1;

    function oB() {
      QB || (QB = !0, DB.d.prototype._sphericalPolynomialTargetSize = 0, DB.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(DB.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = YB.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((BB => {
              this._texture._sphericalPolynomial = BB, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(BB) {
          this._texture && (this._texture._sphericalPolynomial = BB)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  44909: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => JB
    });
    var YB = GB(37778),
      DB = GB(37807),
      QB = GB(40985),
      oB = GB(37782),
      jB = GB(37894);
    class yB {
      constructor(BB, OB, GB, YB) {
        this.name = BB, this.worldAxisForNormal = OB, this.worldAxisForFileX = GB, this.worldAxisForFileY = YB
      }
    }
    class JB {
      static _NearestPow2Floor(BB) {
        return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(BB) {
        if (!BB.isCube) return null;
        BB.JF()?.Lp().flushFramebuffer();
        const OB = BB.getSize().width,
          GB = BB._sphericalPolynomialTargetSize,
          YB = GB > 0 ? this._NearestPow2Floor(GB) : 0,
          DB = !BB.noMipmap && !0 === BB._texture?.generateMipMaps,
          QB = YB > 0 && YB < OB && DB,
          oB = QB ? Math.max(0, Math.round(Math.log2(OB / YB))) : 0,
          jB = QB ? Math.max(1, Math.floor(OB / Math.pow(2, oB))) : OB,
          yB = BB.readPixels(0, oB, void 0, !1),
          JB = BB.readPixels(1, oB, void 0, !1);
        let MB, PB;
        BB.isRenderTarget ? (MB = BB.readPixels(3, oB, void 0, !1), PB = BB.readPixels(2, oB, void 0, !1)) : (MB = BB.readPixels(2, oB, void 0, !1), PB = BB.readPixels(3, oB, void 0, !1));
        const zB = BB.readPixels(4, oB, void 0, !1),
          lB = BB.readPixels(5, oB, void 0, !1),
          pB = BB.gammaSpace,
          qB = YB > 0 && YB < OB && !QB;
        return new Promise((BB => {
          Promise.all([JB, yB, MB, PB, zB, lB]).then((GB => {
            let [DB, QB, oB, yB, JB, MB] = GB, PB = jB;
            if (qB) {
              const BB = 4;
              DB = this._DownsampleFace(DB, OB, YB, BB), QB = this._DownsampleFace(QB, OB, YB, BB), oB = this._DownsampleFace(oB, OB, YB, BB), yB = this._DownsampleFace(yB, OB, YB, BB), JB = this._DownsampleFace(JB, OB, YB, BB), MB = this._DownsampleFace(MB, OB, YB, BB), PB = YB
            }
            const zB = {
              size: PB,
              right: QB,
              left: DB,
              up: oB,
              down: yB,
              front: JB,
              back: MB,
              format: 5,
              type: DB instanceof Float32Array ? 1 : 0,
              gammaSpace: pB
            };
            BB(this.ConvertCubeMapToSphericalPolynomial(zB))
          }))
        }))
      }
      static _AreaElement(BB, OB) {
        return Math.atan2(BB * OB, Math.sqrt(BB * BB + OB * OB + 1))
      }
      static _DownsampleFace(BB, OB, GB, YB) {
        const DB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
          QB = GB * GB * YB,
          oB = new Float32Array(QB),
          jB = OB / GB,
          yB = 1 / (jB * jB);
        for (let MB = 0; MB < GB; MB++) {
          const BB = Math.floor(MB * jB),
            QB = Math.floor((MB + 1) * jB);
          for (let JB = 0; JB < GB; JB++) {
            const PB = Math.floor(JB * jB),
              zB = Math.floor((JB + 1) * jB),
              lB = (MB * GB + JB) * YB;
            for (let GB = 0; GB < YB; GB++) {
              let jB = 0;
              for (let oB = BB; oB < QB; oB++)
                for (let BB = PB; BB < zB; BB++) jB += DB[(oB * OB + BB) * YB + GB];
              oB[lB + GB] = jB * yB
            }
          }
        }
        if (BB instanceof Float32Array) return oB;
        const JB = new(0, BB.constructor)(QB);
        for (let MB = 0; MB < QB; MB++) JB[MB] = oB[MB] + .5 | 0;
        return JB
      }
      static ConvertCubeMapToSphericalPolynomial(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GB = OB > 0 ? this._NearestPow2Floor(OB) : 0;
        if (GB > 0 && BB.size > GB) {
          const OB = 5 === BB.format ? 4 : 3,
            YB = ["right", "left", "up", "down", "front", "back"],
            DB = {};
          for (const QB of YB) DB[QB] = this._DownsampleFace(BB[QB], BB.size, GB, OB);
          BB = {
            ...BB,
            ...DB,
            size: GB
          }
        }
        const YB = new QB.c;
        let yB = 0;
        const JB = 2 / BB.size,
          MB = JB,
          PB = .5 * JB,
          zB = PB - 1;
        for (let QB = 0; QB < 6; QB++) {
          const OB = this._FileFaces[QB],
            GB = BB[OB.name];
          let lB = zB;
          const pB = 5 === BB.format ? 4 : 3;
          for (let QB = 0; QB < BB.size; QB++) {
            let qB = zB;
            for (let MB = 0; MB < BB.size; MB++) {
              const zB = OB.worldAxisForFileX.scale(qB).add(OB.worldAxisForFileY.scale(lB)).add(OB.worldAxisForNormal);
              zB.normalize();
              const ZB = this._AreaElement(qB - PB, lB - PB) - this._AreaElement(qB - PB, lB + PB) - this._AreaElement(qB + PB, lB - PB) + this._AreaElement(qB + PB, lB + PB);
              let NB = GB[QB * BB.size * pB + MB * pB + 0],
                RB = GB[QB * BB.size * pB + MB * pB + 1],
                WB = GB[QB * BB.size * pB + MB * pB + 2];
              isNaN(NB) && (NB = 0), isNaN(RB) && (RB = 0), isNaN(WB) && (WB = 0), 0 === BB.type && (NB /= 255, RB /= 255, WB /= 255), BB.gammaSpace && (NB = Math.pow((0, DB.Clamp)(NB), oB.d), RB = Math.pow((0, DB.Clamp)(RB), oB.d), WB = Math.pow((0, DB.Clamp)(WB), oB.d));
              const AB = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const BB = Math.max(NB, RB, WB);
                if (BB > AB) {
                  const OB = AB / BB;
                  NB *= OB, RB *= OB, WB *= OB
                }
              } else NB = (0, DB.Clamp)(NB, 0, AB), RB = (0, DB.Clamp)(RB, 0, AB), WB = (0, DB.Clamp)(WB, 0, AB);
              const VB = new jB.c(NB, RB, WB);
              YB.addLight(zB, VB, ZB), yB += ZB, qB += JB
            }
            lB += MB
          }
        }
        const lB = 6 * (4 * Math.PI) / 6 / yB;
        return YB.scaleInPlace(lB), YB.convertIncidentRadianceToIrradiance(), YB.convertIrradianceToLambertianRadiance(), QB.f.FromHarmonics(YB)
      }
    }
    JB._FileFaces = [new yB("right", new YB.r(1, 0, 0), new YB.r(0, 0, -1), new YB.r(0, -1, 0)), new yB("left", new YB.r(-1, 0, 0), new YB.r(0, 0, 1), new YB.r(0, -1, 0)), new yB("up", new YB.r(0, 1, 0), new YB.r(1, 0, 0), new YB.r(0, 0, 1)), new yB("down", new YB.r(0, -1, 0), new YB.r(1, 0, 0), new YB.r(0, 0, -1)), new yB("front", new YB.r(0, 0, 1), new YB.r(1, 0, 0), new YB.r(0, -1, 0)), new yB("back", new YB.r(0, 0, -1), new YB.r(-1, 0, 0), new YB.r(0, -1, 0))], JB.MAX_HDRI_VALUE = 4096, JB.PRESERVE_CLAMPED_COLORS = !1
  },
  44941: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB
    });
    var YB = GB(44931),
      DB = GB(44947);
    class QB {
      static ExpandRGBDTexture(BB) {
        const OB = BB._texture;
        if (!OB || !BB.isRGBD) return;
        const DB = OB.Lp(),
          QB = DB.getCaps(),
          oB = OB.isReady;
        let jB = !1;
        QB.textureHalfFloatRender && QB.textureHalfFloatLinearFiltering ? (jB = !0, OB.type = 2) : QB.textureFloatRender && QB.textureFloatLinearFiltering && (jB = !0, OB.type = 1), jB && (OB.isReady = !1, OB._isRGBD = !1, OB.invertY = !1);
        const yB = async () => {
          const QB = DB.isWebGPU,
            oB = QB ? 1 : 0;
          OB.isReady = !1, QB ? await GB.e(651).then((() => GB(63997))) : await GB.e(633).then((() => GB(64005)));
          const jB = new YB.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, DB, !1, void 0, OB.type, void 0, null, !1, void 0, oB);
          jB.externalTextureSamplerBinding = !0;
          const yB = DB.createRenderTargetTexture(OB.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: OB.samplingMode,
            type: OB.type,
            format: 5
          });
          jB.onEffectCreatedObservable.addOnce((GB => {
            GB.executeWhenCompiled((() => {
              jB.onApply = BB => {
                BB._bindTexture("textureSampler", OB), BB.setFloat2("scale", 1, 1)
              }, BB.JF()?.postProcessManager.directRender([jB], yB, !0), DB.restoreDefaultFramebuffer(), DB._releaseTexture(OB), jB && jB.dispose(), yB._swapAndDie(OB), OB.isReady = !0
            }))
          }))
        };
        jB && (oB ? yB() : BB.onLoadObservable.addOnce(yB))
      }
      static async EncodeTextureToRGBD(BB, OB) {
        let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return OB.Lp().isWebGPU ? await GB.e(652).then((() => GB(64017))) : await GB.e(634).then((() => GB(64015))), await (0, DB.d)("rgbdEncode", BB, OB, YB, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);