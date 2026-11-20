export const id = 298;
export const ids = [298];
export const modules = {
  41185: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      _ENVTextureLoader: () => Jb
    });
    var kb = sb(39337),
      Wb = sb(36656),
      ab = sb(36688),
      Tb = sb(39404),
      Ub = sb(39241),
      Ib = sb(39406),
      Hb = (sb(39524), sb(41190)),
      fb = sb(38284),
      Mb = (sb(41200), sb(41232), sb(39495));
    const Xb = "image/png",
      nb = [134, 22, 135, 150, 246, 214, 150, 54];

    function mb(bb) {
      const cb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      let sb = 0;
      for (let Tb = 0; Tb < nb.length; Tb++)
        if (cb.getUint8(sb++) !== nb[Tb]) return fb.c.Error("Not a babylon environment map"), null;
      let kb, Wb = "";
      for (; kb = cb.getUint8(sb++);) Wb += String.fromCharCode(kb);
      let ab = JSON.parse(Wb);
      return ab = lb(ab), ab.binaryDataPosition = sb, ab.specular && (ab.specular.lodGenerationScale = ab.specular.lodGenerationScale || .8), ab
    }

    function lb(bb) {
      if (bb.version > 2) throw new Error(`Unsupported babylon environment map version "${bb.version}". Latest supported version is "2".`);
      return 2 === bb.version ? bb : bb = {
        ...bb,
        version: 2,
        imageType: Xb
      }
    }

    function Qb(bb, cb) {
      const sb = (cb = lb(cb)).specular;
      let kb = Math.log2(cb.width);
      if (kb = Math.round(kb) + 1, sb.mipmaps.length !== 6 * kb) throw new Error(`Unsupported specular mipmaps number "${sb.mipmaps.length}"`);
      const Wb = new Array(kb);
      for (let ab = 0; ab < kb; ab++) {
        Wb[ab] = new Array(6);
        for (let kb = 0; kb < 6; kb++) {
          const Tb = sb.mipmaps[6 * ab + kb];
          Wb[ab][kb] = new Uint8Array(bb.buffer, bb.byteOffset + cb.binaryDataPosition + Tb.position, Tb.length)
        }
      }
      return Wb
    }

    function eb(bb, cb) {
      cb = lb(cb);
      const sb = new Array(6),
        kb = cb.irradiance?.irradianceTexture;
      if (kb) {
        if (6 !== kb.faces.length) throw new Error(`Incorrect irradiance texture faces number "${kb.faces.length}"`);
        for (let Wb = 0; Wb < 6; Wb++) {
          const ab = kb.faces[Wb];
          sb[Wb] = new Uint8Array(bb.buffer, bb.byteOffset + cb.binaryDataPosition + ab.position, ab.length)
        }
      }
      return sb
    }

    function Cb(bb, cb, sb) {
      const kb = (sb = lb(sb)).specular;
      if (!kb) return Promise.resolve([]);
      bb._lodGenerationScale = kb.lodGenerationScale;
      const ab = [],
        Tb = Qb(cb, sb);
      ab.push(Vb(bb, Tb, sb.imageType));
      const Ub = sb.irradiance?.irradianceTexture;
      if (Ub) {
        const kb = eb(cb, sb);
        let Tb = null;
        sb.irradiance?.irradianceTexture?.dominantDirection && (Tb = Wb.p.FromArray(sb.irradiance.irradianceTexture.dominantDirection)), ab.push(Lb(bb, kb, Ub.size, sb.imageType, Tb))
      }
      return Promise.all(ab)
    }
    async function Nb(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb) {
      return await new Promise(((Mb, Xb) => {
        if (sb) {
          const sb = cb.createTexture(null, !0, !0, null, 1, null, (bb => {
            Xb(bb)
          }), bb);
          kb?.onEffectCreatedObservable.addOnce((Ub => {
            Ub.executeWhenCompiled((() => {
              kb.externalTextureSamplerBinding = !0, kb.onApply = kb => {
                kb._bindTexture("textureSampler", sb), kb.setFloat2("scale", 1, cb._features.needsInvertingBitmap && bb instanceof ImageBitmap ? -1 : 1)
              }, cb.scenes.length && (cb.scenes[0].postProcessManager.directRender([kb], Hb, !0, ab, Tb), cb.restoreDefaultFramebuffer(), sb.dispose(), URL.revokeObjectURL(Wb), Mb())
            }))
          }))
        } else {
          if (cb._uploadImageToTexture(fb, bb, ab, Tb), Ub) {
            const sb = Ib[Tb];
            sb && cb._uploadImageToTexture(sb._texture, bb, ab, 0)
          }
          Mb()
        }
      }))
    }
    async function Vb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xb;
      const kb = bb.Sm();
      bb.format = 5, bb.type = 0, bb.generateMipMaps = !0, bb._cachedAnisotropicFilteringLevel = null, kb.updateTextureSamplingMode(3, bb), await ub(bb, cb, !0, sb), bb.isReady = !0
    }
    async function Lb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xb,
        Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const ab = bb.Sm(),
        Tb = new Ub.b(ab, 5),
        Hb = new Ib.e(ab, Tb);
      bb._irradianceTexture = Hb, Hb._dominantDirection = Wb, Tb.isCube = !0, Tb.format = 5, Tb.type = 0, Tb.generateMipMaps = !0, Tb._cachedAnisotropicFilteringLevel = null, Tb.generateMipMaps = !0, Tb.width = sb, Tb.height = sb, ab.updateTextureSamplingMode(3, Tb), await ub(Tb, [cb], !1, kb), ab.generateMipMapsForCubemap(Tb), Tb.isReady = !0
    }
    async function ub(bb, cb, Wb) {
      let Tb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xb;
      if (!(0, kb.h)(bb.width)) throw new Error("Texture size must be a power of two");
      const fb = (0, ab.ILog2)(bb.width) + 1,
        nb = bb.Sm();
      let mb = !1,
        lb = !1,
        Qb = null,
        eb = null,
        Cb = null;
      const Vb = nb.getCaps();
      Vb.textureLOD ? nb._features.supportRenderAndCopyToLodForFloatTextures ? Vb.textureHalfFloatRender && Vb.textureHalfFloatLinearFiltering ? (mb = !0, bb.type = 2) : Vb.textureFloatRender && Vb.textureFloatLinearFiltering && (mb = !0, bb.type = 1) : mb = !1 : (mb = !1, lb = Wb);
      let Lb = 0;
      if (mb) nb.isWebGPU ? (Lb = 1, await sb.e(332).then((() => sb(60799)))) : await sb.e(314).then((() => sb(60805))), Qb = new Hb.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, nb, !1, void 0, bb.type, void 0, null, !1, void 0, Lb), bb._isRGBD = !1, bb.invertY = !1, eb = nb.createRenderTargetCubeTexture(bb.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: bb.type,
        format: 5
      });
      else if (bb._isRGBD = !0, bb.invertY = !0, lb) {
        const cb = 3;
        Cb = {};
        const sb = bb._lodGenerationScale,
          kb = bb._lodGenerationOffset;
        for (let Wb = 0; Wb < cb; Wb++) {
          const ab = (fb - 1) * sb + kb,
            Tb = kb + (ab - kb) * (1 - Wb / (cb - 1)),
            Hb = Math.round(Math.min(Math.max(Tb, 0), ab)),
            Mb = new Ub.b(nb, 2);
          Mb.isCube = !0, Mb.invertY = !0, Mb.generateMipMaps = !1, nb.updateTextureSamplingMode(2, Mb);
          const Xb = new Ib.e(null);
          switch (Xb._isCube = !0, Xb._texture = Mb, Cb[Hb] = Xb, Wb) {
            case 0:
              bb._lodTextureLow = Xb;
              break;
            case 1:
              bb._lodTextureMid = Xb;
              break;
            case 2:
              bb._lodTextureHigh = Xb
          }
        }
      }
      const ub = [];
      for (let sb = 0; sb < cb.length; sb++)
        for (let kb = 0; kb < 6; kb++) {
          const Wb = cb[sb][kb],
            ab = (0, Mb.m)(Wb),
            Ub = new Blob([ab], {
              type: Tb
            }),
            Ib = URL.createObjectURL(Ub);
          let Hb;
          if (nb._features.forceBitmapOverHTMLImageElement) Hb = nb.createImageBitmap(Ub, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async cb => await Nb(cb, nb, mb, Qb, Ib, kb, sb, lb, Cb, eb, bb)));
          else {
            const cb = new Image;
            cb.src = Ib, Hb = new Promise(((Wb, ab) => {
              cb.onload = () => {
                Nb(cb, nb, mb, Qb, Ib, kb, sb, lb, Cb, eb, bb).then((() => Wb())).catch((bb => {
                  ab(bb)
                }))
              }, cb.onerror = bb => {
                ab(bb)
              }
            }))
          }
          ub.push(Hb)
        }
      if (await Promise.all(ub), cb.length < fb) {
        let sb;
        const kb = Math.pow(2, fb - 1 - cb.length),
          Wb = kb * kb * 4;
        switch (bb.type) {
          case 0:
            sb = new Uint8Array(Wb);
            break;
          case 2:
            sb = new Uint16Array(Wb);
            break;
          case 1:
            sb = new Float32Array(Wb)
        }
        for (let ab = cb.length; ab < fb; ab++)
          for (let cb = 0; cb < 6; cb++) nb._uploadArrayBufferViewToTexture(eb?.texture || bb, sb, cb, ab)
      }
      if (eb) {
        const cb = bb._irradianceTexture;
        bb._irradianceTexture = null, nb._releaseTexture(bb), eb._swapAndDie(bb), bb._irradianceTexture = cb
      }
      Qb && Qb.dispose(), lb && (bb._lodTextureHigh && bb._lodTextureHigh._texture && (bb._lodTextureHigh._texture.isReady = !0), bb._lodTextureMid && bb._lodTextureMid._texture && (bb._lodTextureMid._texture.isReady = !0), bb._lodTextureLow && bb._lodTextureLow._texture && (bb._lodTextureLow._texture.isReady = !0))
    }

    function Yb(bb, cb) {
      const sb = (cb = lb(cb)).irradiance;
      if (!sb) return;
      const kb = new Tb.f;
      Wb.p.FromArrayToRef(sb.x, 0, kb.x), Wb.p.FromArrayToRef(sb.y, 0, kb.y), Wb.p.FromArrayToRef(sb.z, 0, kb.z), Wb.p.FromArrayToRef(sb.xx, 0, kb.xx), Wb.p.FromArrayToRef(sb.yy, 0, kb.yy), Wb.p.FromArrayToRef(sb.zz, 0, kb.zz), Wb.p.FromArrayToRef(sb.yz, 0, kb.yz), Wb.p.FromArrayToRef(sb.zx, 0, kb.zx), Wb.p.FromArrayToRef(sb.xy, 0, kb.xy), bb._sphericalPolynomial = kb
    }
    var hb = sb(41238);
    class Jb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, cb, sb, kb, Wb) {
        if (Array.isArray(bb)) return;
        const ab = mb(bb);
        if (ab) {
          cb.width = ab.width, cb.height = ab.width;
          try {
            (0, hb.d)(), Yb(cb, ab), Cb(cb, bb, ab).then((() => {
              cb.isReady = !0, cb.onLoadedObservable.notifyObservers(cb), cb.onLoadedObservable.clear(), kb && kb()
            }), (bb => {
              Wb?.("Can not upload environment levels", bb)
            }))
          } catch (Tb) {
            Wb?.("Can not upload environment file", Tb)
          }
        } else Wb && Wb("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41238: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(41160),
      Wb = sb(39406);
    let ab = !1;

    function Tb() {
      ab || (ab = !0, Wb.e.prototype._sphericalPolynomialTargetSize = 0, Wb.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Wb.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = kb.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((bb => {
              this._texture._sphericalPolynomial = bb, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(bb) {
          this._texture && (this._texture._sphericalPolynomial = bb)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41160: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Hb
    });
    var kb = sb(36656),
      Wb = sb(36688),
      ab = sb(39404),
      Tb = sb(36661),
      Ub = sb(36830);
    class Ib {
      constructor(bb, cb, sb, kb) {
        this.name = bb, this.worldAxisForNormal = cb, this.worldAxisForFileX = sb, this.worldAxisForFileY = kb
      }
    }
    class Hb {
      static _NearestPow2Floor(bb) {
        return bb <= 1 ? 1 : 1 << Math.floor(Math.log2(bb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(bb) {
        if (!bb.isCube) return null;
        bb.EY()?.Sm().flushFramebuffer();
        const cb = bb.getSize().width,
          sb = bb._sphericalPolynomialTargetSize,
          kb = sb > 0 ? this._NearestPow2Floor(sb) : 0,
          Wb = !bb.noMipmap && !0 === bb._texture?.generateMipMaps,
          ab = kb > 0 && kb < cb && Wb,
          Tb = ab ? Math.max(0, Math.round(Math.log2(cb / kb))) : 0,
          Ub = ab ? Math.max(1, Math.floor(cb / Math.pow(2, Tb))) : cb,
          Ib = bb.readPixels(0, Tb, void 0, !1),
          Hb = bb.readPixels(1, Tb, void 0, !1);
        let fb, Mb;
        bb.isRenderTarget ? (fb = bb.readPixels(3, Tb, void 0, !1), Mb = bb.readPixels(2, Tb, void 0, !1)) : (fb = bb.readPixels(2, Tb, void 0, !1), Mb = bb.readPixels(3, Tb, void 0, !1));
        const Xb = bb.readPixels(4, Tb, void 0, !1),
          nb = bb.readPixels(5, Tb, void 0, !1),
          mb = bb.gammaSpace,
          lb = kb > 0 && kb < cb && !ab;
        return new Promise((bb => {
          Promise.all([Hb, Ib, fb, Mb, Xb, nb]).then((sb => {
            let [Wb, ab, Tb, Ib, Hb, fb] = sb, Mb = Ub;
            if (lb) {
              const bb = 4;
              Wb = this._DownsampleFace(Wb, cb, kb, bb), ab = this._DownsampleFace(ab, cb, kb, bb), Tb = this._DownsampleFace(Tb, cb, kb, bb), Ib = this._DownsampleFace(Ib, cb, kb, bb), Hb = this._DownsampleFace(Hb, cb, kb, bb), fb = this._DownsampleFace(fb, cb, kb, bb), Mb = kb
            }
            const Xb = {
              size: Mb,
              right: ab,
              left: Wb,
              up: Tb,
              down: Ib,
              front: Hb,
              back: fb,
              format: 5,
              type: Wb instanceof Float32Array ? 1 : 0,
              gammaSpace: mb
            };
            bb(this.ConvertCubeMapToSphericalPolynomial(Xb))
          }))
        }))
      }
      static _AreaElement(bb, cb) {
        return Math.atan2(bb * cb, Math.sqrt(bb * bb + cb * cb + 1))
      }
      static _DownsampleFace(bb, cb, sb, kb) {
        const Wb = bb instanceof Float32Array ? bb : Float32Array.from(bb),
          ab = sb * sb * kb,
          Tb = new Float32Array(ab),
          Ub = cb / sb,
          Ib = 1 / (Ub * Ub);
        for (let fb = 0; fb < sb; fb++) {
          const bb = Math.floor(fb * Ub),
            ab = Math.floor((fb + 1) * Ub);
          for (let Hb = 0; Hb < sb; Hb++) {
            const Mb = Math.floor(Hb * Ub),
              Xb = Math.floor((Hb + 1) * Ub),
              nb = (fb * sb + Hb) * kb;
            for (let sb = 0; sb < kb; sb++) {
              let Ub = 0;
              for (let Tb = bb; Tb < ab; Tb++)
                for (let bb = Mb; bb < Xb; bb++) Ub += Wb[(Tb * cb + bb) * kb + sb];
              Tb[nb + sb] = Ub * Ib
            }
          }
        }
        if (bb instanceof Float32Array) return Tb;
        const Hb = new(0, bb.constructor)(ab);
        for (let fb = 0; fb < ab; fb++) Hb[fb] = Tb[fb] + .5 | 0;
        return Hb
      }
      static ConvertCubeMapToSphericalPolynomial(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sb = cb > 0 ? this._NearestPow2Floor(cb) : 0;
        if (sb > 0 && bb.size > sb) {
          const cb = 5 === bb.format ? 4 : 3,
            kb = ["right", "left", "up", "down", "front", "back"],
            Wb = {};
          for (const ab of kb) Wb[ab] = this._DownsampleFace(bb[ab], bb.size, sb, cb);
          bb = {
            ...bb,
            ...Wb,
            size: sb
          }
        }
        const kb = new ab.b;
        let Ib = 0;
        const Hb = 2 / bb.size,
          fb = Hb,
          Mb = .5 * Hb,
          Xb = Mb - 1;
        for (let ab = 0; ab < 6; ab++) {
          const cb = this._FileFaces[ab],
            sb = bb[cb.name];
          let nb = Xb;
          const mb = 5 === bb.format ? 4 : 3;
          for (let ab = 0; ab < bb.size; ab++) {
            let lb = Xb;
            for (let fb = 0; fb < bb.size; fb++) {
              const Xb = cb.worldAxisForFileX.scale(lb).add(cb.worldAxisForFileY.scale(nb)).add(cb.worldAxisForNormal);
              Xb.normalize();
              const Qb = this._AreaElement(lb - Mb, nb - Mb) - this._AreaElement(lb - Mb, nb + Mb) - this._AreaElement(lb + Mb, nb - Mb) + this._AreaElement(lb + Mb, nb + Mb);
              let eb = sb[ab * bb.size * mb + fb * mb + 0],
                Cb = sb[ab * bb.size * mb + fb * mb + 1],
                Nb = sb[ab * bb.size * mb + fb * mb + 2];
              isNaN(eb) && (eb = 0), isNaN(Cb) && (Cb = 0), isNaN(Nb) && (Nb = 0), 0 === bb.type && (eb /= 255, Cb /= 255, Nb /= 255), bb.gammaSpace && (eb = Math.pow((0, Wb.Clamp)(eb), Tb.h), Cb = Math.pow((0, Wb.Clamp)(Cb), Tb.h), Nb = Math.pow((0, Wb.Clamp)(Nb), Tb.h));
              const Vb = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const bb = Math.max(eb, Cb, Nb);
                if (bb > Vb) {
                  const cb = Vb / bb;
                  eb *= cb, Cb *= cb, Nb *= cb
                }
              } else eb = (0, Wb.Clamp)(eb, 0, Vb), Cb = (0, Wb.Clamp)(Cb, 0, Vb), Nb = (0, Wb.Clamp)(Nb, 0, Vb);
              const Lb = new Ub.e(eb, Cb, Nb);
              kb.addLight(Xb, Lb, Qb), Ib += Qb, lb += Hb
            }
            nb += fb
          }
        }
        const nb = 6 * (4 * Math.PI) / 6 / Ib;
        return kb.scaleInPlace(nb), kb.convertIncidentRadianceToIrradiance(), kb.convertIrradianceToLambertianRadiance(), ab.f.FromHarmonics(kb)
      }
    }
    Hb._FileFaces = [new Ib("right", new kb.p(1, 0, 0), new kb.p(0, 0, -1), new kb.p(0, -1, 0)), new Ib("left", new kb.p(-1, 0, 0), new kb.p(0, 0, 1), new kb.p(0, -1, 0)), new Ib("up", new kb.p(0, 1, 0), new kb.p(1, 0, 0), new kb.p(0, 0, 1)), new Ib("down", new kb.p(0, -1, 0), new kb.p(1, 0, 0), new kb.p(0, 0, -1)), new Ib("front", new kb.p(0, 0, 1), new kb.p(1, 0, 0), new kb.p(0, -1, 0)), new Ib("back", new kb.p(0, 0, -1), new kb.p(-1, 0, 0), new kb.p(0, -1, 0))], Hb.MAX_HDRI_VALUE = 4096, Hb.PRESERVE_CLAMPED_COLORS = !1
  },
  41200: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(41190),
      Wb = sb(41209);
    class ab {
      static ExpandRGBDTexture(bb) {
        const cb = bb._texture;
        if (!cb || !bb.isRGBD) return;
        const Wb = cb.Sm(),
          ab = Wb.getCaps(),
          Tb = cb.isReady;
        let Ub = !1;
        ab.textureHalfFloatRender && ab.textureHalfFloatLinearFiltering ? (Ub = !0, cb.type = 2) : ab.textureFloatRender && ab.textureFloatLinearFiltering && (Ub = !0, cb.type = 1), Ub && (cb.isReady = !1, cb._isRGBD = !1, cb.invertY = !1);
        const Ib = async () => {
          const ab = Wb.isWebGPU,
            Tb = ab ? 1 : 0;
          cb.isReady = !1, ab ? await sb.e(332).then((() => sb(60799))) : await sb.e(314).then((() => sb(60805)));
          const Ub = new kb.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Wb, !1, void 0, cb.type, void 0, null, !1, void 0, Tb);
          Ub.externalTextureSamplerBinding = !0;
          const Ib = Wb.createRenderTargetTexture(cb.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: cb.samplingMode,
            type: cb.type,
            format: 5
          });
          Ub.onEffectCreatedObservable.addOnce((sb => {
            sb.executeWhenCompiled((() => {
              Ub.onApply = bb => {
                bb._bindTexture("textureSampler", cb), bb.setFloat2("scale", 1, 1)
              }, bb.EY()?.postProcessManager.directRender([Ub], Ib, !0), Wb.restoreDefaultFramebuffer(), Wb._releaseTexture(cb), Ub && Ub.dispose(), Ib._swapAndDie(cb), cb.isReady = !0
            }))
          }))
        };
        Ub && (Tb ? Ib() : bb.onLoadObservable.addOnce(Ib))
      }
      static async EncodeTextureToRGBD(bb, cb) {
        let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return cb.Sm().isWebGPU ? await sb.e(333).then((() => sb(60828))) : await sb.e(315).then((() => sb(60819))), await (0, Wb.b)("rgbdEncode", bb, cb, kb, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);