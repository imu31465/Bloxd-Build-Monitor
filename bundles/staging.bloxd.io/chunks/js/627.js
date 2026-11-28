export const id = 627;
export const ids = [627];
export const modules = {
  54015: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      _ENVTextureLoader: () => Kb
    });
    var eb = Mb(41611),
      Hb = Mb(38285),
      pb = Mb(38322),
      Vb = Mb(41662),
      gb = Mb(41506),
      lb = Mb(41671),
      Lb = (Mb(41764), Mb(54022)),
      Ib = Mb(39971),
      Ob = (Mb(54033), Mb(54062), Mb(41740));
    const Ub = "image/png",
      tb = [134, 22, 135, 150, 246, 214, 150, 54];

    function Cb(bb) {
      const wb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      let Mb = 0;
      for (let Vb = 0; Vb < tb.length; Vb++)
        if (wb.getUint8(Mb++) !== tb[Vb]) return Ib.b.Error("Not a babylon environment map"), null;
      let eb, Hb = "";
      for (; eb = wb.getUint8(Mb++);) Hb += String.fromCharCode(eb);
      let pb = JSON.parse(Hb);
      return pb = Eb(pb), pb.binaryDataPosition = Mb, pb.specular && (pb.specular.lodGenerationScale = pb.specular.lodGenerationScale || .8), pb
    }

    function Eb(bb) {
      if (bb.version > 2) throw new Error(`Unsupported babylon environment map version "${bb.version}". Latest supported version is "2".`);
      return 2 === bb.version ? bb : bb = {
        ...bb,
        version: 2,
        imageType: Ub
      }
    }

    function Fb(bb, wb) {
      const Mb = (wb = Eb(wb)).specular;
      let eb = Math.log2(wb.width);
      if (eb = Math.round(eb) + 1, Mb.mipmaps.length !== 6 * eb) throw new Error(`Unsupported specular mipmaps number "${Mb.mipmaps.length}"`);
      const Hb = new Array(eb);
      for (let pb = 0; pb < eb; pb++) {
        Hb[pb] = new Array(6);
        for (let eb = 0; eb < 6; eb++) {
          const Vb = Mb.mipmaps[6 * pb + eb];
          Hb[pb][eb] = new Uint8Array(bb.buffer, bb.byteOffset + wb.binaryDataPosition + Vb.position, Vb.length)
        }
      }
      return Hb
    }

    function Bb(bb, wb) {
      wb = Eb(wb);
      const Mb = new Array(6),
        eb = wb.irradiance?.irradianceTexture;
      if (eb) {
        if (6 !== eb.faces.length) throw new Error(`Incorrect irradiance texture faces number "${eb.faces.length}"`);
        for (let Hb = 0; Hb < 6; Hb++) {
          const pb = eb.faces[Hb];
          Mb[Hb] = new Uint8Array(bb.buffer, bb.byteOffset + wb.binaryDataPosition + pb.position, pb.length)
        }
      }
      return Mb
    }

    function sb(bb, wb, Mb) {
      const eb = (Mb = Eb(Mb)).specular;
      if (!eb) return Promise.resolve([]);
      bb._lodGenerationScale = eb.lodGenerationScale;
      const pb = [],
        Vb = Fb(wb, Mb);
      pb.push(hb(bb, Vb, Mb.imageType));
      const gb = Mb.irradiance?.irradianceTexture;
      if (gb) {
        const eb = Bb(wb, Mb);
        let Vb = null;
        Mb.irradiance?.irradianceTexture?.dominantDirection && (Vb = Hb.o.FromArray(Mb.irradiance.irradianceTexture.dominantDirection)), pb.push(zb(bb, eb, gb.size, Mb.imageType, Vb))
      }
      return Promise.all(pb)
    }
    async function mb(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
      return await new Promise(((Ob, Ub) => {
        if (Mb) {
          const Mb = wb.createTexture(null, !0, !0, null, 1, null, (bb => {
            Ub(bb)
          }), bb);
          eb?.onEffectCreatedObservable.addOnce((gb => {
            gb.executeWhenCompiled((() => {
              eb.externalTextureSamplerBinding = !0, eb.onApply = eb => {
                eb._bindTexture("textureSampler", Mb), eb.setFloat2("scale", 1, wb._features.needsInvertingBitmap && bb instanceof ImageBitmap ? -1 : 1)
              }, wb.scenes.length && (wb.scenes[0].postProcessManager.directRender([eb], Lb, !0, pb, Vb), wb.restoreDefaultFramebuffer(), Mb.dispose(), URL.revokeObjectURL(Hb), Ob())
            }))
          }))
        } else {
          if (wb._uploadImageToTexture(Ib, bb, pb, Vb), gb) {
            const Mb = lb[Vb];
            Mb && wb._uploadImageToTexture(Mb._texture, bb, pb, 0)
          }
          Ob()
        }
      }))
    }
    async function hb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ub;
      const eb = bb.DC();
      bb.format = 5, bb.type = 0, bb.generateMipMaps = !0, bb._cachedAnisotropicFilteringLevel = null, eb.updateTextureSamplingMode(3, bb), await Xb(bb, wb, !0, Mb), bb.isReady = !0
    }
    async function zb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ub,
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const pb = bb.DC(),
        Vb = new gb.e(pb, 5),
        Lb = new lb.b(pb, Vb);
      bb._irradianceTexture = Lb, Lb._dominantDirection = Hb, Vb.isCube = !0, Vb.format = 5, Vb.type = 0, Vb.generateMipMaps = !0, Vb._cachedAnisotropicFilteringLevel = null, Vb.generateMipMaps = !0, Vb.width = Mb, Vb.height = Mb, pb.updateTextureSamplingMode(3, Vb), await Xb(Vb, [wb], !1, eb), pb.generateMipMapsForCubemap(Vb), Vb.isReady = !0
    }
    async function Xb(bb, wb, Hb) {
      let Vb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ub;
      if (!(0, eb.i)(bb.width)) throw new Error("Texture size must be a power of two");
      const Ib = (0, pb.ILog2)(bb.width) + 1,
        tb = bb.DC();
      let Cb = !1,
        Eb = !1,
        Fb = null,
        Bb = null,
        sb = null;
      const hb = tb.getCaps();
      hb.textureLOD ? tb._features.supportRenderAndCopyToLodForFloatTextures ? hb.textureHalfFloatRender && hb.textureHalfFloatLinearFiltering ? (Cb = !0, bb.type = 2) : hb.textureFloatRender && hb.textureFloatLinearFiltering && (Cb = !0, bb.type = 1) : Cb = !1 : (Cb = !1, Eb = Hb);
      let zb = 0;
      if (Cb) tb.isWebGPU ? (zb = 1, await Mb.e(661).then((() => Mb(64523)))) : await Mb.e(643).then((() => Mb(64529))), Fb = new Lb.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, tb, !1, void 0, bb.type, void 0, null, !1, void 0, zb), bb._isRGBD = !1, bb.invertY = !1, Bb = tb.createRenderTargetCubeTexture(bb.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: bb.type,
        format: 5
      });
      else if (bb._isRGBD = !0, bb.invertY = !0, Eb) {
        const wb = 3;
        sb = {};
        const Mb = bb._lodGenerationScale,
          eb = bb._lodGenerationOffset;
        for (let Hb = 0; Hb < wb; Hb++) {
          const pb = (Ib - 1) * Mb + eb,
            Vb = eb + (pb - eb) * (1 - Hb / (wb - 1)),
            Lb = Math.round(Math.min(Math.max(Vb, 0), pb)),
            Ob = new gb.e(tb, 2);
          Ob.isCube = !0, Ob.invertY = !0, Ob.generateMipMaps = !1, tb.updateTextureSamplingMode(2, Ob);
          const Ub = new lb.b(null);
          switch (Ub._isCube = !0, Ub._texture = Ob, sb[Lb] = Ub, Hb) {
            case 0:
              bb._lodTextureLow = Ub;
              break;
            case 1:
              bb._lodTextureMid = Ub;
              break;
            case 2:
              bb._lodTextureHigh = Ub
          }
        }
      }
      const Xb = [];
      for (let Mb = 0; Mb < wb.length; Mb++)
        for (let eb = 0; eb < 6; eb++) {
          const Hb = wb[Mb][eb],
            pb = (0, Ob.m)(Hb),
            gb = new Blob([pb], {
              type: Vb
            }),
            lb = URL.createObjectURL(gb);
          let Lb;
          if (tb._features.forceBitmapOverHTMLImageElement) Lb = tb.createImageBitmap(gb, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async wb => await mb(wb, tb, Cb, Fb, lb, eb, Mb, Eb, sb, Bb, bb)));
          else {
            const wb = new Image;
            wb.src = lb, Lb = new Promise(((Hb, pb) => {
              wb.onload = () => {
                mb(wb, tb, Cb, Fb, lb, eb, Mb, Eb, sb, Bb, bb).then((() => Hb())).catch((bb => {
                  pb(bb)
                }))
              }, wb.onerror = bb => {
                pb(bb)
              }
            }))
          }
          Xb.push(Lb)
        }
      if (await Promise.all(Xb), wb.length < Ib) {
        let Mb;
        const eb = Math.pow(2, Ib - 1 - wb.length),
          Hb = eb * eb * 4;
        switch (bb.type) {
          case 0:
            Mb = new Uint8Array(Hb);
            break;
          case 2:
            Mb = new Uint16Array(Hb);
            break;
          case 1:
            Mb = new Float32Array(Hb)
        }
        for (let pb = wb.length; pb < Ib; pb++)
          for (let wb = 0; wb < 6; wb++) tb._uploadArrayBufferViewToTexture(Bb?.texture || bb, Mb, wb, pb)
      }
      if (Bb) {
        const wb = bb._irradianceTexture;
        bb._irradianceTexture = null, tb._releaseTexture(bb), Bb._swapAndDie(bb), bb._irradianceTexture = wb
      }
      Fb && Fb.dispose(), Eb && (bb._lodTextureHigh && bb._lodTextureHigh._texture && (bb._lodTextureHigh._texture.isReady = !0), bb._lodTextureMid && bb._lodTextureMid._texture && (bb._lodTextureMid._texture.isReady = !0), bb._lodTextureLow && bb._lodTextureLow._texture && (bb._lodTextureLow._texture.isReady = !0))
    }

    function xb(bb, wb) {
      const Mb = (wb = Eb(wb)).irradiance;
      if (!Mb) return;
      const eb = new Vb.i;
      Hb.o.FromArrayToRef(Mb.x, 0, eb.x), Hb.o.FromArrayToRef(Mb.y, 0, eb.y), Hb.o.FromArrayToRef(Mb.z, 0, eb.z), Hb.o.FromArrayToRef(Mb.xx, 0, eb.xx), Hb.o.FromArrayToRef(Mb.yy, 0, eb.yy), Hb.o.FromArrayToRef(Mb.zz, 0, eb.zz), Hb.o.FromArrayToRef(Mb.yz, 0, eb.yz), Hb.o.FromArrayToRef(Mb.zx, 0, eb.zx), Hb.o.FromArrayToRef(Mb.xy, 0, eb.xy), bb._sphericalPolynomial = eb
    }
    var jb = Mb(54067);
    class Kb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, wb, Mb, eb, Hb) {
        if (Array.isArray(bb)) return;
        const pb = Cb(bb);
        if (pb) {
          wb.width = pb.width, wb.height = pb.width;
          try {
            (0, jb.d)(), xb(wb, pb), sb(wb, bb, pb).then((() => {
              wb.isReady = !0, wb.onLoadedObservable.notifyObservers(wb), wb.onLoadedObservable.clear(), eb && eb()
            }), (bb => {
              Hb?.("Can not upload environment levels", bb)
            }))
          } catch (Vb) {
            Hb?.("Can not upload environment file", Vb)
          }
        } else Hb && Hb("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  54067: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb
    });
    var eb = Mb(53988),
      Hb = Mb(41671);
    let pb = !1;

    function Vb() {
      pb || (pb = !0, Hb.b.prototype._sphericalPolynomialTargetSize = 0, Hb.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Hb.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = eb.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((bb => {
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
  53988: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb
    });
    var eb = Mb(38285),
      Hb = Mb(38322),
      pb = Mb(41662),
      Vb = Mb(38294),
      gb = Mb(38406);
    class lb {
      constructor(bb, wb, Mb, eb) {
        this.name = bb, this.worldAxisForNormal = wb, this.worldAxisForFileX = Mb, this.worldAxisForFileY = eb
      }
    }
    class Lb {
      static _NearestPow2Floor(bb) {
        return bb <= 1 ? 1 : 1 << Math.floor(Math.log2(bb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(bb) {
        if (!bb.isCube) return null;
        bb.RJ()?.DC().flushFramebuffer();
        const wb = bb.getSize().width,
          Mb = bb._sphericalPolynomialTargetSize,
          eb = Mb > 0 ? this._NearestPow2Floor(Mb) : 0,
          Hb = !bb.noMipmap && !0 === bb._texture?.generateMipMaps,
          pb = eb > 0 && eb < wb && Hb,
          Vb = pb ? Math.max(0, Math.round(Math.log2(wb / eb))) : 0,
          gb = pb ? Math.max(1, Math.floor(wb / Math.pow(2, Vb))) : wb,
          lb = bb.readPixels(0, Vb, void 0, !1),
          Lb = bb.readPixels(1, Vb, void 0, !1);
        let Ib, Ob;
        bb.isRenderTarget ? (Ib = bb.readPixels(3, Vb, void 0, !1), Ob = bb.readPixels(2, Vb, void 0, !1)) : (Ib = bb.readPixels(2, Vb, void 0, !1), Ob = bb.readPixels(3, Vb, void 0, !1));
        const Ub = bb.readPixels(4, Vb, void 0, !1),
          tb = bb.readPixels(5, Vb, void 0, !1),
          Cb = bb.gammaSpace,
          Eb = eb > 0 && eb < wb && !pb;
        return new Promise((bb => {
          Promise.all([Lb, lb, Ib, Ob, Ub, tb]).then((Mb => {
            let [Hb, pb, Vb, lb, Lb, Ib] = Mb, Ob = gb;
            if (Eb) {
              const bb = 4;
              Hb = this._DownsampleFace(Hb, wb, eb, bb), pb = this._DownsampleFace(pb, wb, eb, bb), Vb = this._DownsampleFace(Vb, wb, eb, bb), lb = this._DownsampleFace(lb, wb, eb, bb), Lb = this._DownsampleFace(Lb, wb, eb, bb), Ib = this._DownsampleFace(Ib, wb, eb, bb), Ob = eb
            }
            const Ub = {
              size: Ob,
              right: pb,
              left: Hb,
              up: Vb,
              down: lb,
              front: Lb,
              back: Ib,
              format: 5,
              type: Hb instanceof Float32Array ? 1 : 0,
              gammaSpace: Cb
            };
            bb(this.ConvertCubeMapToSphericalPolynomial(Ub))
          }))
        }))
      }
      static _AreaElement(bb, wb) {
        return Math.atan2(bb * wb, Math.sqrt(bb * bb + wb * wb + 1))
      }
      static _DownsampleFace(bb, wb, Mb, eb) {
        const Hb = bb instanceof Float32Array ? bb : Float32Array.from(bb),
          pb = Mb * Mb * eb,
          Vb = new Float32Array(pb),
          gb = wb / Mb,
          lb = 1 / (gb * gb);
        for (let Ib = 0; Ib < Mb; Ib++) {
          const bb = Math.floor(Ib * gb),
            pb = Math.floor((Ib + 1) * gb);
          for (let Lb = 0; Lb < Mb; Lb++) {
            const Ob = Math.floor(Lb * gb),
              Ub = Math.floor((Lb + 1) * gb),
              tb = (Ib * Mb + Lb) * eb;
            for (let Mb = 0; Mb < eb; Mb++) {
              let gb = 0;
              for (let Vb = bb; Vb < pb; Vb++)
                for (let bb = Ob; bb < Ub; bb++) gb += Hb[(Vb * wb + bb) * eb + Mb];
              Vb[tb + Mb] = gb * lb
            }
          }
        }
        if (bb instanceof Float32Array) return Vb;
        const Lb = new(0, bb.constructor)(pb);
        for (let Ib = 0; Ib < pb; Ib++) Lb[Ib] = Vb[Ib] + .5 | 0;
        return Lb
      }
      static ConvertCubeMapToSphericalPolynomial(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Mb = wb > 0 ? this._NearestPow2Floor(wb) : 0;
        if (Mb > 0 && bb.size > Mb) {
          const wb = 5 === bb.format ? 4 : 3,
            eb = ["right", "left", "up", "down", "front", "back"],
            Hb = {};
          for (const pb of eb) Hb[pb] = this._DownsampleFace(bb[pb], bb.size, Mb, wb);
          bb = {
            ...bb,
            ...Hb,
            size: Mb
          }
        }
        const eb = new pb.e;
        let lb = 0;
        const Lb = 2 / bb.size,
          Ib = Lb,
          Ob = .5 * Lb,
          Ub = Ob - 1;
        for (let pb = 0; pb < 6; pb++) {
          const wb = this._FileFaces[pb],
            Mb = bb[wb.name];
          let tb = Ub;
          const Cb = 5 === bb.format ? 4 : 3;
          for (let pb = 0; pb < bb.size; pb++) {
            let Eb = Ub;
            for (let Ib = 0; Ib < bb.size; Ib++) {
              const Ub = wb.worldAxisForFileX.scale(Eb).add(wb.worldAxisForFileY.scale(tb)).add(wb.worldAxisForNormal);
              Ub.normalize();
              const Fb = this._AreaElement(Eb - Ob, tb - Ob) - this._AreaElement(Eb - Ob, tb + Ob) - this._AreaElement(Eb + Ob, tb - Ob) + this._AreaElement(Eb + Ob, tb + Ob);
              let Bb = Mb[pb * bb.size * Cb + Ib * Cb + 0],
                sb = Mb[pb * bb.size * Cb + Ib * Cb + 1],
                mb = Mb[pb * bb.size * Cb + Ib * Cb + 2];
              isNaN(Bb) && (Bb = 0), isNaN(sb) && (sb = 0), isNaN(mb) && (mb = 0), 0 === bb.type && (Bb /= 255, sb /= 255, mb /= 255), bb.gammaSpace && (Bb = Math.pow((0, Hb.Clamp)(Bb), Vb.h), sb = Math.pow((0, Hb.Clamp)(sb), Vb.h), mb = Math.pow((0, Hb.Clamp)(mb), Vb.h));
              const hb = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const bb = Math.max(Bb, sb, mb);
                if (bb > hb) {
                  const wb = hb / bb;
                  Bb *= wb, sb *= wb, mb *= wb
                }
              } else Bb = (0, Hb.Clamp)(Bb, 0, hb), sb = (0, Hb.Clamp)(sb, 0, hb), mb = (0, Hb.Clamp)(mb, 0, hb);
              const zb = new gb.e(Bb, sb, mb);
              eb.addLight(Ub, zb, Fb), lb += Fb, Eb += Lb
            }
            tb += Ib
          }
        }
        const tb = 6 * (4 * Math.PI) / 6 / lb;
        return eb.scaleInPlace(tb), eb.convertIncidentRadianceToIrradiance(), eb.convertIrradianceToLambertianRadiance(), pb.i.FromHarmonics(eb)
      }
    }
    Lb._FileFaces = [new lb("right", new eb.o(1, 0, 0), new eb.o(0, 0, -1), new eb.o(0, -1, 0)), new lb("left", new eb.o(-1, 0, 0), new eb.o(0, 0, 1), new eb.o(0, -1, 0)), new lb("up", new eb.o(0, 1, 0), new eb.o(1, 0, 0), new eb.o(0, 0, 1)), new lb("down", new eb.o(0, -1, 0), new eb.o(1, 0, 0), new eb.o(0, 0, -1)), new lb("front", new eb.o(0, 0, 1), new eb.o(1, 0, 0), new eb.o(0, -1, 0)), new lb("back", new eb.o(0, 0, -1), new eb.o(-1, 0, 0), new eb.o(0, -1, 0))], Lb.MAX_HDRI_VALUE = 4096, Lb.PRESERVE_CLAMPED_COLORS = !1
  },
  54033: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb
    });
    var eb = Mb(54022),
      Hb = Mb(54042);
    class pb {
      static ExpandRGBDTexture(bb) {
        const wb = bb._texture;
        if (!wb || !bb.isRGBD) return;
        const Hb = wb.DC(),
          pb = Hb.getCaps(),
          Vb = wb.isReady;
        let gb = !1;
        pb.textureHalfFloatRender && pb.textureHalfFloatLinearFiltering ? (gb = !0, wb.type = 2) : pb.textureFloatRender && pb.textureFloatLinearFiltering && (gb = !0, wb.type = 1), gb && (wb.isReady = !1, wb._isRGBD = !1, wb.invertY = !1);
        const lb = async () => {
          const pb = Hb.isWebGPU,
            Vb = pb ? 1 : 0;
          wb.isReady = !1, pb ? await Mb.e(661).then((() => Mb(64523))) : await Mb.e(643).then((() => Mb(64529)));
          const gb = new eb.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Hb, !1, void 0, wb.type, void 0, null, !1, void 0, Vb);
          gb.externalTextureSamplerBinding = !0;
          const lb = Hb.createRenderTargetTexture(wb.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: wb.samplingMode,
            type: wb.type,
            format: 5
          });
          gb.onEffectCreatedObservable.addOnce((Mb => {
            Mb.executeWhenCompiled((() => {
              gb.onApply = bb => {
                bb._bindTexture("textureSampler", wb), bb.setFloat2("scale", 1, 1)
              }, bb.RJ()?.postProcessManager.directRender([gb], lb, !0), Hb.restoreDefaultFramebuffer(), Hb._releaseTexture(wb), gb && gb.dispose(), lb._swapAndDie(wb), wb.isReady = !0
            }))
          }))
        };
        gb && (Vb ? lb() : bb.onLoadObservable.addOnce(lb))
      }
      static async EncodeTextureToRGBD(bb, wb) {
        let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return wb.DC().isWebGPU ? await Mb.e(662).then((() => Mb(64543))) : await Mb.e(644).then((() => Mb(64537))), await (0, Hb.c)("rgbdEncode", bb, wb, eb, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);