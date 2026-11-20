export const id = 299;
export const ids = [299];
export const modules = {
  41241: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      _ENVTextureLoader: () => nb
    });
    var Bb = hb(39387),
      Ob = hb(36727),
      Gb = hb(36757),
      Ub = hb(39456),
      Lb = hb(39287),
      Yb = hb(39459),
      Sb = (hb(39551), hb(41248)),
      ab = hb(38302),
      Hb = (hb(41258), hb(41277), hb(39533));
    const wb = "image/png",
      Zb = [134, 22, 135, 150, 246, 214, 150, 54];

    function Xb(bb) {
      const ub = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      let hb = 0;
      for (let Ub = 0; Ub < Zb.length; Ub++)
        if (ub.getUint8(hb++) !== Zb[Ub]) return ab.b.Error("Not a babylon environment map"), null;
      let Bb, Ob = "";
      for (; Bb = ub.getUint8(hb++);) Ob += String.fromCharCode(Bb);
      let Gb = JSON.parse(Ob);
      return Gb = pb(Gb), Gb.binaryDataPosition = hb, Gb.specular && (Gb.specular.lodGenerationScale = Gb.specular.lodGenerationScale || .8), Gb
    }

    function pb(bb) {
      if (bb.version > 2) throw new Error(`Unsupported babylon environment map version "${bb.version}". Latest supported version is "2".`);
      return 2 === bb.version ? bb : bb = {
        ...bb,
        version: 2,
        imageType: wb
      }
    }

    function ob(bb, ub) {
      const hb = (ub = pb(ub)).specular;
      let Bb = Math.log2(ub.width);
      if (Bb = Math.round(Bb) + 1, hb.mipmaps.length !== 6 * Bb) throw new Error(`Unsupported specular mipmaps number "${hb.mipmaps.length}"`);
      const Ob = new Array(Bb);
      for (let Gb = 0; Gb < Bb; Gb++) {
        Ob[Gb] = new Array(6);
        for (let Bb = 0; Bb < 6; Bb++) {
          const Ub = hb.mipmaps[6 * Gb + Bb];
          Ob[Gb][Bb] = new Uint8Array(bb.buffer, bb.byteOffset + ub.binaryDataPosition + Ub.position, Ub.length)
        }
      }
      return Ob
    }

    function Ab(bb, ub) {
      ub = pb(ub);
      const hb = new Array(6),
        Bb = ub.irradiance?.irradianceTexture;
      if (Bb) {
        if (6 !== Bb.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Bb.faces.length}"`);
        for (let Ob = 0; Ob < 6; Ob++) {
          const Gb = Bb.faces[Ob];
          hb[Ob] = new Uint8Array(bb.buffer, bb.byteOffset + ub.binaryDataPosition + Gb.position, Gb.length)
        }
      }
      return hb
    }

    function lb(bb, ub, hb) {
      const Bb = (hb = pb(hb)).specular;
      if (!Bb) return Promise.resolve([]);
      bb._lodGenerationScale = Bb.lodGenerationScale;
      const Gb = [],
        Ub = ob(ub, hb);
      Gb.push(Wb(bb, Ub, hb.imageType));
      const Lb = hb.irradiance?.irradianceTexture;
      if (Lb) {
        const Bb = Ab(ub, hb);
        let Ub = null;
        hb.irradiance?.irradianceTexture?.dominantDirection && (Ub = Ob.q.FromArray(hb.irradiance.irradianceTexture.dominantDirection)), Gb.push(Cb(bb, Bb, Lb.size, hb.imageType, Ub))
      }
      return Promise.all(Gb)
    }
    async function Kb(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab) {
      return await new Promise(((Hb, wb) => {
        if (hb) {
          const hb = ub.createTexture(null, !0, !0, null, 1, null, (bb => {
            wb(bb)
          }), bb);
          Bb?.onEffectCreatedObservable.addOnce((Lb => {
            Lb.executeWhenCompiled((() => {
              Bb.externalTextureSamplerBinding = !0, Bb.onApply = Bb => {
                Bb._bindTexture("textureSampler", hb), Bb.setFloat2("scale", 1, ub._features.needsInvertingBitmap && bb instanceof ImageBitmap ? -1 : 1)
              }, ub.scenes.length && (ub.scenes[0].postProcessManager.directRender([Bb], Sb, !0, Gb, Ub), ub.restoreDefaultFramebuffer(), hb.dispose(), URL.revokeObjectURL(Ob), Hb())
            }))
          }))
        } else {
          if (ub._uploadImageToTexture(ab, bb, Gb, Ub), Lb) {
            const hb = Yb[Ub];
            hb && ub._uploadImageToTexture(hb._texture, bb, Gb, 0)
          }
          Hb()
        }
      }))
    }
    async function Wb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wb;
      const Bb = bb.UX();
      bb.format = 5, bb.type = 0, bb.generateMipMaps = !0, bb._cachedAnisotropicFilteringLevel = null, Bb.updateTextureSamplingMode(3, bb), await db(bb, ub, !0, hb), bb.isReady = !0
    }
    async function Cb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wb,
        Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Gb = bb.UX(),
        Ub = new Lb.b(Gb, 5),
        Sb = new Yb.d(Gb, Ub);
      bb._irradianceTexture = Sb, Sb._dominantDirection = Ob, Ub.isCube = !0, Ub.format = 5, Ub.type = 0, Ub.generateMipMaps = !0, Ub._cachedAnisotropicFilteringLevel = null, Ub.generateMipMaps = !0, Ub.width = hb, Ub.height = hb, Gb.updateTextureSamplingMode(3, Ub), await db(Ub, [ub], !1, Bb), Gb.generateMipMapsForCubemap(Ub), Ub.isReady = !0
    }
    async function db(bb, ub, Ob) {
      let Ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wb;
      if (!(0, Bb.k)(bb.width)) throw new Error("Texture size must be a power of two");
      const ab = (0, Gb.ILog2)(bb.width) + 1,
        Zb = bb.UX();
      let Xb = !1,
        pb = !1,
        ob = null,
        Ab = null,
        lb = null;
      const Wb = Zb.getCaps();
      Wb.textureLOD ? Zb._features.supportRenderAndCopyToLodForFloatTextures ? Wb.textureHalfFloatRender && Wb.textureHalfFloatLinearFiltering ? (Xb = !0, bb.type = 2) : Wb.textureFloatRender && Wb.textureFloatLinearFiltering && (Xb = !0, bb.type = 1) : Xb = !1 : (Xb = !1, pb = Ob);
      let Cb = 0;
      if (Xb) Zb.isWebGPU ? (Cb = 1, await hb.e(333).then((() => hb(60826)))) : await hb.e(315).then((() => hb(60834))), ob = new Sb.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Zb, !1, void 0, bb.type, void 0, null, !1, void 0, Cb), bb._isRGBD = !1, bb.invertY = !1, Ab = Zb.createRenderTargetCubeTexture(bb.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: bb.type,
        format: 5
      });
      else if (bb._isRGBD = !0, bb.invertY = !0, pb) {
        const ub = 3;
        lb = {};
        const hb = bb._lodGenerationScale,
          Bb = bb._lodGenerationOffset;
        for (let Ob = 0; Ob < ub; Ob++) {
          const Gb = (ab - 1) * hb + Bb,
            Ub = Bb + (Gb - Bb) * (1 - Ob / (ub - 1)),
            Sb = Math.round(Math.min(Math.max(Ub, 0), Gb)),
            Hb = new Lb.b(Zb, 2);
          Hb.isCube = !0, Hb.invertY = !0, Hb.generateMipMaps = !1, Zb.updateTextureSamplingMode(2, Hb);
          const wb = new Yb.d(null);
          switch (wb._isCube = !0, wb._texture = Hb, lb[Sb] = wb, Ob) {
            case 0:
              bb._lodTextureLow = wb;
              break;
            case 1:
              bb._lodTextureMid = wb;
              break;
            case 2:
              bb._lodTextureHigh = wb
          }
        }
      }
      const db = [];
      for (let hb = 0; hb < ub.length; hb++)
        for (let Bb = 0; Bb < 6; Bb++) {
          const Ob = ub[hb][Bb],
            Gb = (0, Hb.l)(Ob),
            Lb = new Blob([Gb], {
              type: Ub
            }),
            Yb = URL.createObjectURL(Lb);
          let Sb;
          if (Zb._features.forceBitmapOverHTMLImageElement) Sb = Zb.createImageBitmap(Lb, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async ub => await Kb(ub, Zb, Xb, ob, Yb, Bb, hb, pb, lb, Ab, bb)));
          else {
            const ub = new Image;
            ub.src = Yb, Sb = new Promise(((Ob, Gb) => {
              ub.onload = () => {
                Kb(ub, Zb, Xb, ob, Yb, Bb, hb, pb, lb, Ab, bb).then((() => Ob())).catch((bb => {
                  Gb(bb)
                }))
              }, ub.onerror = bb => {
                Gb(bb)
              }
            }))
          }
          db.push(Sb)
        }
      if (await Promise.all(db), ub.length < ab) {
        let hb;
        const Bb = Math.pow(2, ab - 1 - ub.length),
          Ob = Bb * Bb * 4;
        switch (bb.type) {
          case 0:
            hb = new Uint8Array(Ob);
            break;
          case 2:
            hb = new Uint16Array(Ob);
            break;
          case 1:
            hb = new Float32Array(Ob)
        }
        for (let Gb = ub.length; Gb < ab; Gb++)
          for (let ub = 0; ub < 6; ub++) Zb._uploadArrayBufferViewToTexture(Ab?.texture || bb, hb, ub, Gb)
      }
      if (Ab) {
        const ub = bb._irradianceTexture;
        bb._irradianceTexture = null, Zb._releaseTexture(bb), Ab._swapAndDie(bb), bb._irradianceTexture = ub
      }
      ob && ob.dispose(), pb && (bb._lodTextureHigh && bb._lodTextureHigh._texture && (bb._lodTextureHigh._texture.isReady = !0), bb._lodTextureMid && bb._lodTextureMid._texture && (bb._lodTextureMid._texture.isReady = !0), bb._lodTextureLow && bb._lodTextureLow._texture && (bb._lodTextureLow._texture.isReady = !0))
    }

    function rb(bb, ub) {
      const hb = (ub = pb(ub)).irradiance;
      if (!hb) return;
      const Bb = new Ub.g;
      Ob.q.FromArrayToRef(hb.x, 0, Bb.x), Ob.q.FromArrayToRef(hb.y, 0, Bb.y), Ob.q.FromArrayToRef(hb.z, 0, Bb.z), Ob.q.FromArrayToRef(hb.xx, 0, Bb.xx), Ob.q.FromArrayToRef(hb.yy, 0, Bb.yy), Ob.q.FromArrayToRef(hb.zz, 0, Bb.zz), Ob.q.FromArrayToRef(hb.yz, 0, Bb.yz), Ob.q.FromArrayToRef(hb.zx, 0, Bb.zx), Ob.q.FromArrayToRef(hb.xy, 0, Bb.xy), bb._sphericalPolynomial = Bb
    }
    var jb = hb(41284);
    class nb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, ub, hb, Bb, Ob) {
        if (Array.isArray(bb)) return;
        const Gb = Xb(bb);
        if (Gb) {
          ub.width = Gb.width, ub.height = Gb.width;
          try {
            (0, jb.b)(), rb(ub, Gb), lb(ub, bb, Gb).then((() => {
              ub.isReady = !0, ub.onLoadedObservable.notifyObservers(ub), ub.onLoadedObservable.clear(), Bb && Bb()
            }), (bb => {
              Ob?.("Can not upload environment levels", bb)
            }))
          } catch (Ub) {
            Ob?.("Can not upload environment file", Ub)
          }
        } else Ob && Ob("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41284: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(41221),
      Ob = hb(39459);
    let Gb = !1;

    function Ub() {
      Gb || (Gb = !0, Ob.d.prototype._sphericalPolynomialTargetSize = 0, Ob.d.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Ob.d.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Bb.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((bb => {
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
  41221: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Sb
    });
    var Bb = hb(36727),
      Ob = hb(36757),
      Gb = hb(39456),
      Ub = hb(36734),
      Lb = hb(36893);
    class Yb {
      constructor(bb, ub, hb, Bb) {
        this.name = bb, this.worldAxisForNormal = ub, this.worldAxisForFileX = hb, this.worldAxisForFileY = Bb
      }
    }
    class Sb {
      static _NearestPow2Floor(bb) {
        return bb <= 1 ? 1 : 1 << Math.floor(Math.log2(bb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(bb) {
        if (!bb.isCube) return null;
        bb.ZN()?.UX().flushFramebuffer();
        const ub = bb.getSize().width,
          hb = bb._sphericalPolynomialTargetSize,
          Bb = hb > 0 ? this._NearestPow2Floor(hb) : 0,
          Ob = !bb.noMipmap && !0 === bb._texture?.generateMipMaps,
          Gb = Bb > 0 && Bb < ub && Ob,
          Ub = Gb ? Math.max(0, Math.round(Math.log2(ub / Bb))) : 0,
          Lb = Gb ? Math.max(1, Math.floor(ub / Math.pow(2, Ub))) : ub,
          Yb = bb.readPixels(0, Ub, void 0, !1),
          Sb = bb.readPixels(1, Ub, void 0, !1);
        let ab, Hb;
        bb.isRenderTarget ? (ab = bb.readPixels(3, Ub, void 0, !1), Hb = bb.readPixels(2, Ub, void 0, !1)) : (ab = bb.readPixels(2, Ub, void 0, !1), Hb = bb.readPixels(3, Ub, void 0, !1));
        const wb = bb.readPixels(4, Ub, void 0, !1),
          Zb = bb.readPixels(5, Ub, void 0, !1),
          Xb = bb.gammaSpace,
          pb = Bb > 0 && Bb < ub && !Gb;
        return new Promise((bb => {
          Promise.all([Sb, Yb, ab, Hb, wb, Zb]).then((hb => {
            let [Ob, Gb, Ub, Yb, Sb, ab] = hb, Hb = Lb;
            if (pb) {
              const bb = 4;
              Ob = this._DownsampleFace(Ob, ub, Bb, bb), Gb = this._DownsampleFace(Gb, ub, Bb, bb), Ub = this._DownsampleFace(Ub, ub, Bb, bb), Yb = this._DownsampleFace(Yb, ub, Bb, bb), Sb = this._DownsampleFace(Sb, ub, Bb, bb), ab = this._DownsampleFace(ab, ub, Bb, bb), Hb = Bb
            }
            const wb = {
              size: Hb,
              right: Gb,
              left: Ob,
              up: Ub,
              down: Yb,
              front: Sb,
              back: ab,
              format: 5,
              type: Ob instanceof Float32Array ? 1 : 0,
              gammaSpace: Xb
            };
            bb(this.ConvertCubeMapToSphericalPolynomial(wb))
          }))
        }))
      }
      static _AreaElement(bb, ub) {
        return Math.atan2(bb * ub, Math.sqrt(bb * bb + ub * ub + 1))
      }
      static _DownsampleFace(bb, ub, hb, Bb) {
        const Ob = bb instanceof Float32Array ? bb : Float32Array.from(bb),
          Gb = hb * hb * Bb,
          Ub = new Float32Array(Gb),
          Lb = ub / hb,
          Yb = 1 / (Lb * Lb);
        for (let ab = 0; ab < hb; ab++) {
          const bb = Math.floor(ab * Lb),
            Gb = Math.floor((ab + 1) * Lb);
          for (let Sb = 0; Sb < hb; Sb++) {
            const Hb = Math.floor(Sb * Lb),
              wb = Math.floor((Sb + 1) * Lb),
              Zb = (ab * hb + Sb) * Bb;
            for (let hb = 0; hb < Bb; hb++) {
              let Lb = 0;
              for (let Ub = bb; Ub < Gb; Ub++)
                for (let bb = Hb; bb < wb; bb++) Lb += Ob[(Ub * ub + bb) * Bb + hb];
              Ub[Zb + hb] = Lb * Yb
            }
          }
        }
        if (bb instanceof Float32Array) return Ub;
        const Sb = new(0, bb.constructor)(Gb);
        for (let ab = 0; ab < Gb; ab++) Sb[ab] = Ub[ab] + .5 | 0;
        return Sb
      }
      static ConvertCubeMapToSphericalPolynomial(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const hb = ub > 0 ? this._NearestPow2Floor(ub) : 0;
        if (hb > 0 && bb.size > hb) {
          const ub = 5 === bb.format ? 4 : 3,
            Bb = ["right", "left", "up", "down", "front", "back"],
            Ob = {};
          for (const Gb of Bb) Ob[Gb] = this._DownsampleFace(bb[Gb], bb.size, hb, ub);
          bb = {
            ...bb,
            ...Ob,
            size: hb
          }
        }
        const Bb = new Gb.d;
        let Yb = 0;
        const Sb = 2 / bb.size,
          ab = Sb,
          Hb = .5 * Sb,
          wb = Hb - 1;
        for (let Gb = 0; Gb < 6; Gb++) {
          const ub = this._FileFaces[Gb],
            hb = bb[ub.name];
          let Zb = wb;
          const Xb = 5 === bb.format ? 4 : 3;
          for (let Gb = 0; Gb < bb.size; Gb++) {
            let pb = wb;
            for (let ab = 0; ab < bb.size; ab++) {
              const wb = ub.worldAxisForFileX.scale(pb).add(ub.worldAxisForFileY.scale(Zb)).add(ub.worldAxisForNormal);
              wb.normalize();
              const ob = this._AreaElement(pb - Hb, Zb - Hb) - this._AreaElement(pb - Hb, Zb + Hb) - this._AreaElement(pb + Hb, Zb - Hb) + this._AreaElement(pb + Hb, Zb + Hb);
              let Ab = hb[Gb * bb.size * Xb + ab * Xb + 0],
                lb = hb[Gb * bb.size * Xb + ab * Xb + 1],
                Kb = hb[Gb * bb.size * Xb + ab * Xb + 2];
              isNaN(Ab) && (Ab = 0), isNaN(lb) && (lb = 0), isNaN(Kb) && (Kb = 0), 0 === bb.type && (Ab /= 255, lb /= 255, Kb /= 255), bb.gammaSpace && (Ab = Math.pow((0, Ob.Clamp)(Ab), Ub.h), lb = Math.pow((0, Ob.Clamp)(lb), Ub.h), Kb = Math.pow((0, Ob.Clamp)(Kb), Ub.h));
              const Wb = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const bb = Math.max(Ab, lb, Kb);
                if (bb > Wb) {
                  const ub = Wb / bb;
                  Ab *= ub, lb *= ub, Kb *= ub
                }
              } else Ab = (0, Ob.Clamp)(Ab, 0, Wb), lb = (0, Ob.Clamp)(lb, 0, Wb), Kb = (0, Ob.Clamp)(Kb, 0, Wb);
              const Cb = new Lb.b(Ab, lb, Kb);
              Bb.addLight(wb, Cb, ob), Yb += ob, pb += Sb
            }
            Zb += ab
          }
        }
        const Zb = 6 * (4 * Math.PI) / 6 / Yb;
        return Bb.scaleInPlace(Zb), Bb.convertIncidentRadianceToIrradiance(), Bb.convertIrradianceToLambertianRadiance(), Gb.g.FromHarmonics(Bb)
      }
    }
    Sb._FileFaces = [new Yb("right", new Bb.q(1, 0, 0), new Bb.q(0, 0, -1), new Bb.q(0, -1, 0)), new Yb("left", new Bb.q(-1, 0, 0), new Bb.q(0, 0, 1), new Bb.q(0, -1, 0)), new Yb("up", new Bb.q(0, 1, 0), new Bb.q(1, 0, 0), new Bb.q(0, 0, 1)), new Yb("down", new Bb.q(0, -1, 0), new Bb.q(1, 0, 0), new Bb.q(0, 0, -1)), new Yb("front", new Bb.q(0, 0, 1), new Bb.q(1, 0, 0), new Bb.q(0, -1, 0)), new Yb("back", new Bb.q(0, 0, -1), new Bb.q(-1, 0, 0), new Bb.q(0, -1, 0))], Sb.MAX_HDRI_VALUE = 4096, Sb.PRESERVE_CLAMPED_COLORS = !1
  },
  41258: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb
    });
    var Bb = hb(41248),
      Ob = hb(41260);
    class Gb {
      static ExpandRGBDTexture(bb) {
        const ub = bb._texture;
        if (!ub || !bb.isRGBD) return;
        const Ob = ub.UX(),
          Gb = Ob.getCaps(),
          Ub = ub.isReady;
        let Lb = !1;
        Gb.textureHalfFloatRender && Gb.textureHalfFloatLinearFiltering ? (Lb = !0, ub.type = 2) : Gb.textureFloatRender && Gb.textureFloatLinearFiltering && (Lb = !0, ub.type = 1), Lb && (ub.isReady = !1, ub._isRGBD = !1, ub.invertY = !1);
        const Yb = async () => {
          const Gb = Ob.isWebGPU,
            Ub = Gb ? 1 : 0;
          ub.isReady = !1, Gb ? await hb.e(333).then((() => hb(60826))) : await hb.e(315).then((() => hb(60834)));
          const Lb = new Bb.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Ob, !1, void 0, ub.type, void 0, null, !1, void 0, Ub);
          Lb.externalTextureSamplerBinding = !0;
          const Yb = Ob.createRenderTargetTexture(ub.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: ub.samplingMode,
            type: ub.type,
            format: 5
          });
          Lb.onEffectCreatedObservable.addOnce((hb => {
            hb.executeWhenCompiled((() => {
              Lb.onApply = bb => {
                bb._bindTexture("textureSampler", ub), bb.setFloat2("scale", 1, 1)
              }, bb.ZN()?.postProcessManager.directRender([Lb], Yb, !0), Ob.restoreDefaultFramebuffer(), Ob._releaseTexture(ub), Lb && Lb.dispose(), Yb._swapAndDie(ub), ub.isReady = !0
            }))
          }))
        };
        Lb && (Ub ? Yb() : bb.onLoadObservable.addOnce(Yb))
      }
      static async EncodeTextureToRGBD(bb, ub) {
        let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return ub.UX().isWebGPU ? await hb.e(334).then((() => hb(60849))) : await hb.e(316).then((() => hb(60840))), await (0, Ob.b)("rgbdEncode", bb, ub, Bb, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);