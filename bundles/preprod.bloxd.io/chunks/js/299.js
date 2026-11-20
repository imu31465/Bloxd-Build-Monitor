export const id = 299;
export const ids = [299];
export const modules = {
  41547: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      _ENVTextureLoader: () => vq
    });
    var Yq = gq(39696),
      lq = gq(37139),
      Oq = gq(37158),
      mq = gq(39741),
      xq = gq(39593),
      Aq = gq(39748),
      cq = (gq(39838), gq(41551)),
      uq = gq(38653),
      Bq = (gq(41557), gq(41581), gq(39817));
    const Wq = "image/png",
      Nq = [134, 22, 135, 150, 246, 214, 150, 54];

    function aq(qq) {
      const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
      let gq = 0;
      for (let mq = 0; mq < Nq.length; mq++)
        if (Eq.getUint8(gq++) !== Nq[mq]) return uq.b.Error("Not a babylon environment map"), null;
      let Yq, lq = "";
      for (; Yq = Eq.getUint8(gq++);) lq += String.fromCharCode(Yq);
      let Oq = JSON.parse(lq);
      return Oq = Vq(Oq), Oq.binaryDataPosition = gq, Oq.specular && (Oq.specular.lodGenerationScale = Oq.specular.lodGenerationScale || .8), Oq
    }

    function Vq(qq) {
      if (qq.version > 2) throw new Error(`Unsupported babylon environment map version "${qq.version}". Latest supported version is "2".`);
      return 2 === qq.version ? qq : qq = {
        ...qq,
        version: 2,
        imageType: Wq
      }
    }

    function dq(qq, Eq) {
      const gq = (Eq = Vq(Eq)).specular;
      let Yq = Math.log2(Eq.width);
      if (Yq = Math.round(Yq) + 1, gq.mipmaps.length !== 6 * Yq) throw new Error(`Unsupported specular mipmaps number "${gq.mipmaps.length}"`);
      const lq = new Array(Yq);
      for (let Oq = 0; Oq < Yq; Oq++) {
        lq[Oq] = new Array(6);
        for (let Yq = 0; Yq < 6; Yq++) {
          const mq = gq.mipmaps[6 * Oq + Yq];
          lq[Oq][Yq] = new Uint8Array(qq.buffer, qq.byteOffset + Eq.binaryDataPosition + mq.position, mq.length)
        }
      }
      return lq
    }

    function jq(qq, Eq) {
      Eq = Vq(Eq);
      const gq = new Array(6),
        Yq = Eq.irradiance?.irradianceTexture;
      if (Yq) {
        if (6 !== Yq.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Yq.faces.length}"`);
        for (let lq = 0; lq < 6; lq++) {
          const Oq = Yq.faces[lq];
          gq[lq] = new Uint8Array(qq.buffer, qq.byteOffset + Eq.binaryDataPosition + Oq.position, Oq.length)
        }
      }
      return gq
    }

    function Hq(qq, Eq, gq) {
      const Yq = (gq = Vq(gq)).specular;
      if (!Yq) return Promise.resolve([]);
      qq._lodGenerationScale = Yq.lodGenerationScale;
      const Oq = [],
        mq = dq(Eq, gq);
      Oq.push(Pq(qq, mq, gq.imageType));
      const xq = gq.irradiance?.irradianceTexture;
      if (xq) {
        const Yq = jq(Eq, gq);
        let mq = null;
        gq.irradiance?.irradianceTexture?.dominantDirection && (mq = lq.q.FromArray(gq.irradiance.irradianceTexture.dominantDirection)), Oq.push(Qq(qq, Yq, xq.size, gq.imageType, mq))
      }
      return Promise.all(Oq)
    }
    async function oq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
      return await new Promise(((Bq, Wq) => {
        if (gq) {
          const gq = Eq.createTexture(null, !0, !0, null, 1, null, (qq => {
            Wq(qq)
          }), qq);
          Yq?.onEffectCreatedObservable.addOnce((xq => {
            xq.executeWhenCompiled((() => {
              Yq.externalTextureSamplerBinding = !0, Yq.onApply = Yq => {
                Yq._bindTexture("textureSampler", gq), Yq.setFloat2("scale", 1, Eq._features.needsInvertingBitmap && qq instanceof ImageBitmap ? -1 : 1)
              }, Eq.scenes.length && (Eq.scenes[0].postProcessManager.directRender([Yq], cq, !0, Oq, mq), Eq.restoreDefaultFramebuffer(), gq.dispose(), URL.revokeObjectURL(lq), Bq())
            }))
          }))
        } else {
          if (Eq._uploadImageToTexture(uq, qq, Oq, mq), xq) {
            const gq = Aq[mq];
            gq && Eq._uploadImageToTexture(gq._texture, qq, Oq, 0)
          }
          Bq()
        }
      }))
    }
    async function Pq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wq;
      const Yq = qq.Ba();
      qq.format = 5, qq.type = 0, qq.generateMipMaps = !0, qq._cachedAnisotropicFilteringLevel = null, Yq.updateTextureSamplingMode(3, qq), await yq(qq, Eq, !0, gq), qq.isReady = !0
    }
    async function Qq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wq,
        lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Oq = qq.Ba(),
        mq = new xq.c(Oq, 5),
        cq = new Aq.d(Oq, mq);
      qq._irradianceTexture = cq, cq._dominantDirection = lq, mq.isCube = !0, mq.format = 5, mq.type = 0, mq.generateMipMaps = !0, mq._cachedAnisotropicFilteringLevel = null, mq.generateMipMaps = !0, mq.width = gq, mq.height = gq, Oq.updateTextureSamplingMode(3, mq), await yq(mq, [Eq], !1, Yq), Oq.generateMipMapsForCubemap(mq), mq.isReady = !0
    }
    async function yq(qq, Eq, lq) {
      let mq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wq;
      if (!(0, Yq.k)(qq.width)) throw new Error("Texture size must be a power of two");
      const uq = (0, Oq.ILog2)(qq.width) + 1,
        Nq = qq.Ba();
      let aq = !1,
        Vq = !1,
        dq = null,
        jq = null,
        Hq = null;
      const Pq = Nq.getCaps();
      Pq.textureLOD ? Nq._features.supportRenderAndCopyToLodForFloatTextures ? Pq.textureHalfFloatRender && Pq.textureHalfFloatLinearFiltering ? (aq = !0, qq.type = 2) : Pq.textureFloatRender && Pq.textureFloatLinearFiltering && (aq = !0, qq.type = 1) : aq = !1 : (aq = !1, Vq = lq);
      let Qq = 0;
      if (aq) Nq.isWebGPU ? (Qq = 1, await gq.e(333).then((() => gq(61357)))) : await gq.e(315).then((() => gq(61365))), dq = new cq.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Nq, !1, void 0, qq.type, void 0, null, !1, void 0, Qq), qq._isRGBD = !1, qq.invertY = !1, jq = Nq.createRenderTargetCubeTexture(qq.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: qq.type,
        format: 5
      });
      else if (qq._isRGBD = !0, qq.invertY = !0, Vq) {
        const Eq = 3;
        Hq = {};
        const gq = qq._lodGenerationScale,
          Yq = qq._lodGenerationOffset;
        for (let lq = 0; lq < Eq; lq++) {
          const Oq = (uq - 1) * gq + Yq,
            mq = Yq + (Oq - Yq) * (1 - lq / (Eq - 1)),
            cq = Math.round(Math.min(Math.max(mq, 0), Oq)),
            Bq = new xq.c(Nq, 2);
          Bq.isCube = !0, Bq.invertY = !0, Bq.generateMipMaps = !1, Nq.updateTextureSamplingMode(2, Bq);
          const Wq = new Aq.d(null);
          switch (Wq._isCube = !0, Wq._texture = Bq, Hq[cq] = Wq, lq) {
            case 0:
              qq._lodTextureLow = Wq;
              break;
            case 1:
              qq._lodTextureMid = Wq;
              break;
            case 2:
              qq._lodTextureHigh = Wq
          }
        }
      }
      const yq = [];
      for (let gq = 0; gq < Eq.length; gq++)
        for (let Yq = 0; Yq < 6; Yq++) {
          const lq = Eq[gq][Yq],
            Oq = (0, Bq.l)(lq),
            xq = new Blob([Oq], {
              type: mq
            }),
            Aq = URL.createObjectURL(xq);
          let cq;
          if (Nq._features.forceBitmapOverHTMLImageElement) cq = Nq.createImageBitmap(xq, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async Eq => await oq(Eq, Nq, aq, dq, Aq, Yq, gq, Vq, Hq, jq, qq)));
          else {
            const Eq = new Image;
            Eq.src = Aq, cq = new Promise(((lq, Oq) => {
              Eq.onload = () => {
                oq(Eq, Nq, aq, dq, Aq, Yq, gq, Vq, Hq, jq, qq).then((() => lq())).catch((qq => {
                  Oq(qq)
                }))
              }, Eq.onerror = qq => {
                Oq(qq)
              }
            }))
          }
          yq.push(cq)
        }
      if (await Promise.all(yq), Eq.length < uq) {
        let gq;
        const Yq = Math.pow(2, uq - 1 - Eq.length),
          lq = Yq * Yq * 4;
        switch (qq.type) {
          case 0:
            gq = new Uint8Array(lq);
            break;
          case 2:
            gq = new Uint16Array(lq);
            break;
          case 1:
            gq = new Float32Array(lq)
        }
        for (let Oq = Eq.length; Oq < uq; Oq++)
          for (let Eq = 0; Eq < 6; Eq++) Nq._uploadArrayBufferViewToTexture(jq?.texture || qq, gq, Eq, Oq)
      }
      if (jq) {
        const Eq = qq._irradianceTexture;
        qq._irradianceTexture = null, Nq._releaseTexture(qq), jq._swapAndDie(qq), qq._irradianceTexture = Eq
      }
      dq && dq.dispose(), Vq && (qq._lodTextureHigh && qq._lodTextureHigh._texture && (qq._lodTextureHigh._texture.isReady = !0), qq._lodTextureMid && qq._lodTextureMid._texture && (qq._lodTextureMid._texture.isReady = !0), qq._lodTextureLow && qq._lodTextureLow._texture && (qq._lodTextureLow._texture.isReady = !0))
    }

    function tq(qq, Eq) {
      const gq = (Eq = Vq(Eq)).irradiance;
      if (!gq) return;
      const Yq = new mq.d;
      lq.q.FromArrayToRef(gq.x, 0, Yq.x), lq.q.FromArrayToRef(gq.y, 0, Yq.y), lq.q.FromArrayToRef(gq.z, 0, Yq.z), lq.q.FromArrayToRef(gq.xx, 0, Yq.xx), lq.q.FromArrayToRef(gq.yy, 0, Yq.yy), lq.q.FromArrayToRef(gq.zz, 0, Yq.zz), lq.q.FromArrayToRef(gq.yz, 0, Yq.yz), lq.q.FromArrayToRef(gq.zx, 0, Yq.zx), lq.q.FromArrayToRef(gq.xy, 0, Yq.xy), qq._sphericalPolynomial = Yq
    }
    var rq = gq(41585);
    class vq {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(qq, Eq, gq, Yq, lq) {
        if (Array.isArray(qq)) return;
        const Oq = aq(qq);
        if (Oq) {
          Eq.width = Oq.width, Eq.height = Oq.width;
          try {
            (0, rq.e)(), tq(Eq, Oq), Hq(Eq, qq, Oq).then((() => {
              Eq.isReady = !0, Eq.onLoadedObservable.notifyObservers(Eq), Eq.onLoadedObservable.clear(), Yq && Yq()
            }), (qq => {
              lq?.("Can not upload environment levels", qq)
            }))
          } catch (mq) {
            lq?.("Can not upload environment file", mq)
          }
        } else lq && lq("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41585: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => mq
    });
    var Yq = gq(41519),
      lq = gq(39748);
    let Oq = !1;

    function mq() {
      Oq || (Oq = !0, lq.d.prototype._sphericalPolynomialTargetSize = 0, lq.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(lq.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Yq.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((qq => {
              this._texture._sphericalPolynomial = qq, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(qq) {
          this._texture && (this._texture._sphericalPolynomial = qq)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41519: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => cq
    });
    var Yq = gq(37139),
      lq = gq(37158),
      Oq = gq(39741),
      mq = gq(37145),
      xq = gq(37289);
    class Aq {
      constructor(qq, Eq, gq, Yq) {
        this.name = qq, this.worldAxisForNormal = Eq, this.worldAxisForFileX = gq, this.worldAxisForFileY = Yq
      }
    }
    class cq {
      static _NearestPow2Floor(qq) {
        return qq <= 1 ? 1 : 1 << Math.floor(Math.log2(qq))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(qq) {
        if (!qq.isCube) return null;
        qq.ZJ()?.Ba().flushFramebuffer();
        const Eq = qq.getSize().width,
          gq = qq._sphericalPolynomialTargetSize,
          Yq = gq > 0 ? this._NearestPow2Floor(gq) : 0,
          lq = !qq.noMipmap && !0 === qq._texture?.generateMipMaps,
          Oq = Yq > 0 && Yq < Eq && lq,
          mq = Oq ? Math.max(0, Math.round(Math.log2(Eq / Yq))) : 0,
          xq = Oq ? Math.max(1, Math.floor(Eq / Math.pow(2, mq))) : Eq,
          Aq = qq.readPixels(0, mq, void 0, !1),
          cq = qq.readPixels(1, mq, void 0, !1);
        let uq, Bq;
        qq.isRenderTarget ? (uq = qq.readPixels(3, mq, void 0, !1), Bq = qq.readPixels(2, mq, void 0, !1)) : (uq = qq.readPixels(2, mq, void 0, !1), Bq = qq.readPixels(3, mq, void 0, !1));
        const Wq = qq.readPixels(4, mq, void 0, !1),
          Nq = qq.readPixels(5, mq, void 0, !1),
          aq = qq.gammaSpace,
          Vq = Yq > 0 && Yq < Eq && !Oq;
        return new Promise((qq => {
          Promise.all([cq, Aq, uq, Bq, Wq, Nq]).then((gq => {
            let [lq, Oq, mq, Aq, cq, uq] = gq, Bq = xq;
            if (Vq) {
              const qq = 4;
              lq = this._DownsampleFace(lq, Eq, Yq, qq), Oq = this._DownsampleFace(Oq, Eq, Yq, qq), mq = this._DownsampleFace(mq, Eq, Yq, qq), Aq = this._DownsampleFace(Aq, Eq, Yq, qq), cq = this._DownsampleFace(cq, Eq, Yq, qq), uq = this._DownsampleFace(uq, Eq, Yq, qq), Bq = Yq
            }
            const Wq = {
              size: Bq,
              right: Oq,
              left: lq,
              up: mq,
              down: Aq,
              front: cq,
              back: uq,
              format: 5,
              type: lq instanceof Float32Array ? 1 : 0,
              gammaSpace: aq
            };
            qq(this.ConvertCubeMapToSphericalPolynomial(Wq))
          }))
        }))
      }
      static _AreaElement(qq, Eq) {
        return Math.atan2(qq * Eq, Math.sqrt(qq * qq + Eq * Eq + 1))
      }
      static _DownsampleFace(qq, Eq, gq, Yq) {
        const lq = qq instanceof Float32Array ? qq : Float32Array.from(qq),
          Oq = gq * gq * Yq,
          mq = new Float32Array(Oq),
          xq = Eq / gq,
          Aq = 1 / (xq * xq);
        for (let uq = 0; uq < gq; uq++) {
          const qq = Math.floor(uq * xq),
            Oq = Math.floor((uq + 1) * xq);
          for (let cq = 0; cq < gq; cq++) {
            const Bq = Math.floor(cq * xq),
              Wq = Math.floor((cq + 1) * xq),
              Nq = (uq * gq + cq) * Yq;
            for (let gq = 0; gq < Yq; gq++) {
              let xq = 0;
              for (let mq = qq; mq < Oq; mq++)
                for (let qq = Bq; qq < Wq; qq++) xq += lq[(mq * Eq + qq) * Yq + gq];
              mq[Nq + gq] = xq * Aq
            }
          }
        }
        if (qq instanceof Float32Array) return mq;
        const cq = new(0, qq.constructor)(Oq);
        for (let uq = 0; uq < Oq; uq++) cq[uq] = mq[uq] + .5 | 0;
        return cq
      }
      static ConvertCubeMapToSphericalPolynomial(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gq = Eq > 0 ? this._NearestPow2Floor(Eq) : 0;
        if (gq > 0 && qq.size > gq) {
          const Eq = 5 === qq.format ? 4 : 3,
            Yq = ["right", "left", "up", "down", "front", "back"],
            lq = {};
          for (const Oq of Yq) lq[Oq] = this._DownsampleFace(qq[Oq], qq.size, gq, Eq);
          qq = {
            ...qq,
            ...lq,
            size: gq
          }
        }
        const Yq = new Oq.c;
        let Aq = 0;
        const cq = 2 / qq.size,
          uq = cq,
          Bq = .5 * cq,
          Wq = Bq - 1;
        for (let Oq = 0; Oq < 6; Oq++) {
          const Eq = this._FileFaces[Oq],
            gq = qq[Eq.name];
          let Nq = Wq;
          const aq = 5 === qq.format ? 4 : 3;
          for (let Oq = 0; Oq < qq.size; Oq++) {
            let Vq = Wq;
            for (let uq = 0; uq < qq.size; uq++) {
              const Wq = Eq.worldAxisForFileX.scale(Vq).add(Eq.worldAxisForFileY.scale(Nq)).add(Eq.worldAxisForNormal);
              Wq.normalize();
              const dq = this._AreaElement(Vq - Bq, Nq - Bq) - this._AreaElement(Vq - Bq, Nq + Bq) - this._AreaElement(Vq + Bq, Nq - Bq) + this._AreaElement(Vq + Bq, Nq + Bq);
              let jq = gq[Oq * qq.size * aq + uq * aq + 0],
                Hq = gq[Oq * qq.size * aq + uq * aq + 1],
                oq = gq[Oq * qq.size * aq + uq * aq + 2];
              isNaN(jq) && (jq = 0), isNaN(Hq) && (Hq = 0), isNaN(oq) && (oq = 0), 0 === qq.type && (jq /= 255, Hq /= 255, oq /= 255), qq.gammaSpace && (jq = Math.pow((0, lq.Clamp)(jq), mq.h), Hq = Math.pow((0, lq.Clamp)(Hq), mq.h), oq = Math.pow((0, lq.Clamp)(oq), mq.h));
              const Pq = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const qq = Math.max(jq, Hq, oq);
                if (qq > Pq) {
                  const Eq = Pq / qq;
                  jq *= Eq, Hq *= Eq, oq *= Eq
                }
              } else jq = (0, lq.Clamp)(jq, 0, Pq), Hq = (0, lq.Clamp)(Hq, 0, Pq), oq = (0, lq.Clamp)(oq, 0, Pq);
              const Qq = new xq.d(jq, Hq, oq);
              Yq.addLight(Wq, Qq, dq), Aq += dq, Vq += cq
            }
            Nq += uq
          }
        }
        const Nq = 6 * (4 * Math.PI) / 6 / Aq;
        return Yq.scaleInPlace(Nq), Yq.convertIncidentRadianceToIrradiance(), Yq.convertIrradianceToLambertianRadiance(), Oq.d.FromHarmonics(Yq)
      }
    }
    cq._FileFaces = [new Aq("right", new Yq.q(1, 0, 0), new Yq.q(0, 0, -1), new Yq.q(0, -1, 0)), new Aq("left", new Yq.q(-1, 0, 0), new Yq.q(0, 0, 1), new Yq.q(0, -1, 0)), new Aq("up", new Yq.q(0, 1, 0), new Yq.q(1, 0, 0), new Yq.q(0, 0, 1)), new Aq("down", new Yq.q(0, -1, 0), new Yq.q(1, 0, 0), new Yq.q(0, 0, -1)), new Aq("front", new Yq.q(0, 0, 1), new Yq.q(1, 0, 0), new Yq.q(0, -1, 0)), new Aq("back", new Yq.q(0, 0, -1), new Yq.q(-1, 0, 0), new Yq.q(0, -1, 0))], cq.MAX_HDRI_VALUE = 4096, cq.PRESERVE_CLAMPED_COLORS = !1
  },
  41557: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq
    });
    var Yq = gq(41551),
      lq = gq(41561);
    class Oq {
      static ExpandRGBDTexture(qq) {
        const Eq = qq._texture;
        if (!Eq || !qq.isRGBD) return;
        const lq = Eq.Ba(),
          Oq = lq.getCaps(),
          mq = Eq.isReady;
        let xq = !1;
        Oq.textureHalfFloatRender && Oq.textureHalfFloatLinearFiltering ? (xq = !0, Eq.type = 2) : Oq.textureFloatRender && Oq.textureFloatLinearFiltering && (xq = !0, Eq.type = 1), xq && (Eq.isReady = !1, Eq._isRGBD = !1, Eq.invertY = !1);
        const Aq = async () => {
          const Oq = lq.isWebGPU,
            mq = Oq ? 1 : 0;
          Eq.isReady = !1, Oq ? await gq.e(333).then((() => gq(61357))) : await gq.e(315).then((() => gq(61365)));
          const xq = new Yq.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, lq, !1, void 0, Eq.type, void 0, null, !1, void 0, mq);
          xq.externalTextureSamplerBinding = !0;
          const Aq = lq.createRenderTargetTexture(Eq.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Eq.samplingMode,
            type: Eq.type,
            format: 5
          });
          xq.onEffectCreatedObservable.addOnce((gq => {
            gq.executeWhenCompiled((() => {
              xq.onApply = qq => {
                qq._bindTexture("textureSampler", Eq), qq.setFloat2("scale", 1, 1)
              }, qq.ZJ()?.postProcessManager.directRender([xq], Aq, !0), lq.restoreDefaultFramebuffer(), lq._releaseTexture(Eq), xq && xq.dispose(), Aq._swapAndDie(Eq), Eq.isReady = !0
            }))
          }))
        };
        xq && (mq ? Aq() : qq.onLoadObservable.addOnce(Aq))
      }
      static async EncodeTextureToRGBD(qq, Eq) {
        let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Eq.Ba().isWebGPU ? await gq.e(334).then((() => gq(61384))) : await gq.e(316).then((() => gq(61377))), await (0, lq.c)("rgbdEncode", qq, Eq, Yq, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);