export const id = 298;
export const ids = [298];
export const modules = {
  40899: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      _ENVTextureLoader: () => pb
    });
    var Ab = Ub(39033),
      Mb = Ub(36401),
      Tb = Ub(36436),
      Eb = Ub(39090),
      Yb = Ub(38915),
      Bb = Ub(39099),
      eb = (Ub(39188), Ub(40901)),
      vb = Ub(37989),
      Lb = (Ub(40912), Ub(40930), Ub(39167));
    const Pb = "image/png",
      Xb = [134, 22, 135, 150, 246, 214, 150, 54];

    function jb(bb) {
      const ab = new DataView(bb.buffer, bb.byteOffset, bb.byteLength);
      let Ub = 0;
      for (let Eb = 0; Eb < Xb.length; Eb++)
        if (ab.getUint8(Ub++) !== Xb[Eb]) return vb.e.Error("Not a babylon environment map"), null;
      let Ab, Mb = "";
      for (; Ab = ab.getUint8(Ub++);) Mb += String.fromCharCode(Ab);
      let Tb = JSON.parse(Mb);
      return Tb = Rb(Tb), Tb.binaryDataPosition = Ub, Tb.specular && (Tb.specular.lodGenerationScale = Tb.specular.lodGenerationScale || .8), Tb
    }

    function Rb(bb) {
      if (bb.version > 2) throw new Error(`Unsupported babylon environment map version "${bb.version}". Latest supported version is "2".`);
      return 2 === bb.version ? bb : bb = {
        ...bb,
        version: 2,
        imageType: Pb
      }
    }

    function kb(bb, ab) {
      const Ub = (ab = Rb(ab)).specular;
      let Ab = Math.log2(ab.width);
      if (Ab = Math.round(Ab) + 1, Ub.mipmaps.length !== 6 * Ab) throw new Error(`Unsupported specular mipmaps number "${Ub.mipmaps.length}"`);
      const Mb = new Array(Ab);
      for (let Tb = 0; Tb < Ab; Tb++) {
        Mb[Tb] = new Array(6);
        for (let Ab = 0; Ab < 6; Ab++) {
          const Eb = Ub.mipmaps[6 * Tb + Ab];
          Mb[Tb][Ab] = new Uint8Array(bb.buffer, bb.byteOffset + ab.binaryDataPosition + Eb.position, Eb.length)
        }
      }
      return Mb
    }

    function yb(bb, ab) {
      ab = Rb(ab);
      const Ub = new Array(6),
        Ab = ab.irradiance?.irradianceTexture;
      if (Ab) {
        if (6 !== Ab.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Ab.faces.length}"`);
        for (let Mb = 0; Mb < 6; Mb++) {
          const Tb = Ab.faces[Mb];
          Ub[Mb] = new Uint8Array(bb.buffer, bb.byteOffset + ab.binaryDataPosition + Tb.position, Tb.length)
        }
      }
      return Ub
    }

    function Zb(bb, ab, Ub) {
      const Ab = (Ub = Rb(Ub)).specular;
      if (!Ab) return Promise.resolve([]);
      bb._lodGenerationScale = Ab.lodGenerationScale;
      const Tb = [],
        Eb = kb(ab, Ub);
      Tb.push(zb(bb, Eb, Ub.imageType));
      const Yb = Ub.irradiance?.irradianceTexture;
      if (Yb) {
        const Ab = yb(ab, Ub);
        let Eb = null;
        Ub.irradiance?.irradianceTexture?.dominantDirection && (Eb = Mb.m.FromArray(Ub.irradiance.irradianceTexture.dominantDirection)), Tb.push(xb(bb, Ab, Yb.size, Ub.imageType, Eb))
      }
      return Promise.all(Tb)
    }
    async function Db(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb) {
      return await new Promise(((Lb, Pb) => {
        if (Ub) {
          const Ub = ab.createTexture(null, !0, !0, null, 1, null, (bb => {
            Pb(bb)
          }), bb);
          Ab?.onEffectCreatedObservable.addOnce((Yb => {
            Yb.executeWhenCompiled((() => {
              Ab.externalTextureSamplerBinding = !0, Ab.onApply = Ab => {
                Ab._bindTexture("textureSampler", Ub), Ab.setFloat2("scale", 1, ab._features.needsInvertingBitmap && bb instanceof ImageBitmap ? -1 : 1)
              }, ab.scenes.length && (ab.scenes[0].postProcessManager.directRender([Ab], eb, !0, Tb, Eb), ab.restoreDefaultFramebuffer(), Ub.dispose(), URL.revokeObjectURL(Mb), Lb())
            }))
          }))
        } else {
          if (ab._uploadImageToTexture(vb, bb, Tb, Eb), Yb) {
            const Ub = Bb[Eb];
            Ub && ab._uploadImageToTexture(Ub._texture, bb, Tb, 0)
          }
          Lb()
        }
      }))
    }
    async function zb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pb;
      const Ab = bb.vj();
      bb.format = 5, bb.type = 0, bb.generateMipMaps = !0, bb._cachedAnisotropicFilteringLevel = null, Ab.updateTextureSamplingMode(3, bb), await ib(bb, ab, !0, Ub), bb.isReady = !0
    }
    async function xb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Pb,
        Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Tb = bb.vj(),
        Eb = new Yb.b(Tb, 5),
        eb = new Bb.b(Tb, Eb);
      bb._irradianceTexture = eb, eb._dominantDirection = Mb, Eb.isCube = !0, Eb.format = 5, Eb.type = 0, Eb.generateMipMaps = !0, Eb._cachedAnisotropicFilteringLevel = null, Eb.generateMipMaps = !0, Eb.width = Ub, Eb.height = Ub, Tb.updateTextureSamplingMode(3, Eb), await ib(Eb, [ab], !1, Ab), Tb.generateMipMapsForCubemap(Eb), Eb.isReady = !0
    }
    async function ib(bb, ab, Mb) {
      let Eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Pb;
      if (!(0, Ab.g)(bb.width)) throw new Error("Texture size must be a power of two");
      const vb = (0, Tb.ILog2)(bb.width) + 1,
        Xb = bb.vj();
      let jb = !1,
        Rb = !1,
        kb = null,
        yb = null,
        Zb = null;
      const zb = Xb.getCaps();
      zb.textureLOD ? Xb._features.supportRenderAndCopyToLodForFloatTextures ? zb.textureHalfFloatRender && zb.textureHalfFloatLinearFiltering ? (jb = !0, bb.type = 2) : zb.textureFloatRender && zb.textureFloatLinearFiltering && (jb = !0, bb.type = 1) : jb = !1 : (jb = !1, Rb = Mb);
      let xb = 0;
      if (jb) Xb.isWebGPU ? (xb = 1, await Ub.e(332).then((() => Ub(60503)))) : await Ub.e(314).then((() => Ub(60512))), kb = new eb.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Xb, !1, void 0, bb.type, void 0, null, !1, void 0, xb), bb._isRGBD = !1, bb.invertY = !1, yb = Xb.createRenderTargetCubeTexture(bb.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: bb.type,
        format: 5
      });
      else if (bb._isRGBD = !0, bb.invertY = !0, Rb) {
        const ab = 3;
        Zb = {};
        const Ub = bb._lodGenerationScale,
          Ab = bb._lodGenerationOffset;
        for (let Mb = 0; Mb < ab; Mb++) {
          const Tb = (vb - 1) * Ub + Ab,
            Eb = Ab + (Tb - Ab) * (1 - Mb / (ab - 1)),
            eb = Math.round(Math.min(Math.max(Eb, 0), Tb)),
            Lb = new Yb.b(Xb, 2);
          Lb.isCube = !0, Lb.invertY = !0, Lb.generateMipMaps = !1, Xb.updateTextureSamplingMode(2, Lb);
          const Pb = new Bb.b(null);
          switch (Pb._isCube = !0, Pb._texture = Lb, Zb[eb] = Pb, Mb) {
            case 0:
              bb._lodTextureLow = Pb;
              break;
            case 1:
              bb._lodTextureMid = Pb;
              break;
            case 2:
              bb._lodTextureHigh = Pb
          }
        }
      }
      const ib = [];
      for (let Ub = 0; Ub < ab.length; Ub++)
        for (let Ab = 0; Ab < 6; Ab++) {
          const Mb = ab[Ub][Ab],
            Tb = (0, Lb.k)(Mb),
            Yb = new Blob([Tb], {
              type: Eb
            }),
            Bb = URL.createObjectURL(Yb);
          let eb;
          if (Xb._features.forceBitmapOverHTMLImageElement) eb = Xb.createImageBitmap(Yb, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async ab => await Db(ab, Xb, jb, kb, Bb, Ab, Ub, Rb, Zb, yb, bb)));
          else {
            const ab = new Image;
            ab.src = Bb, eb = new Promise(((Mb, Tb) => {
              ab.onload = () => {
                Db(ab, Xb, jb, kb, Bb, Ab, Ub, Rb, Zb, yb, bb).then((() => Mb())).catch((bb => {
                  Tb(bb)
                }))
              }, ab.onerror = bb => {
                Tb(bb)
              }
            }))
          }
          ib.push(eb)
        }
      if (await Promise.all(ib), ab.length < vb) {
        let Ub;
        const Ab = Math.pow(2, vb - 1 - ab.length),
          Mb = Ab * Ab * 4;
        switch (bb.type) {
          case 0:
            Ub = new Uint8Array(Mb);
            break;
          case 2:
            Ub = new Uint16Array(Mb);
            break;
          case 1:
            Ub = new Float32Array(Mb)
        }
        for (let Tb = ab.length; Tb < vb; Tb++)
          for (let ab = 0; ab < 6; ab++) Xb._uploadArrayBufferViewToTexture(yb?.texture || bb, Ub, ab, Tb)
      }
      if (yb) {
        const ab = bb._irradianceTexture;
        bb._irradianceTexture = null, Xb._releaseTexture(bb), yb._swapAndDie(bb), bb._irradianceTexture = ab
      }
      kb && kb.dispose(), Rb && (bb._lodTextureHigh && bb._lodTextureHigh._texture && (bb._lodTextureHigh._texture.isReady = !0), bb._lodTextureMid && bb._lodTextureMid._texture && (bb._lodTextureMid._texture.isReady = !0), bb._lodTextureLow && bb._lodTextureLow._texture && (bb._lodTextureLow._texture.isReady = !0))
    }

    function fb(bb, ab) {
      const Ub = (ab = Rb(ab)).irradiance;
      if (!Ub) return;
      const Ab = new Eb.e;
      Mb.m.FromArrayToRef(Ub.x, 0, Ab.x), Mb.m.FromArrayToRef(Ub.y, 0, Ab.y), Mb.m.FromArrayToRef(Ub.z, 0, Ab.z), Mb.m.FromArrayToRef(Ub.xx, 0, Ab.xx), Mb.m.FromArrayToRef(Ub.yy, 0, Ab.yy), Mb.m.FromArrayToRef(Ub.zz, 0, Ab.zz), Mb.m.FromArrayToRef(Ub.yz, 0, Ab.yz), Mb.m.FromArrayToRef(Ub.zx, 0, Ab.zx), Mb.m.FromArrayToRef(Ub.xy, 0, Ab.xy), bb._sphericalPolynomial = Ab
    }
    var mb = Ub(40932);
    class pb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, ab, Ub, Ab, Mb) {
        if (Array.isArray(bb)) return;
        const Tb = jb(bb);
        if (Tb) {
          ab.width = Tb.width, ab.height = Tb.width;
          try {
            (0, mb.b)(), fb(ab, Tb), Zb(ab, bb, Tb).then((() => {
              ab.isReady = !0, ab.onLoadedObservable.notifyObservers(ab), ab.onLoadedObservable.clear(), Ab && Ab()
            }), (bb => {
              Mb?.("Can not upload environment levels", bb)
            }))
          } catch (Eb) {
            Mb?.("Can not upload environment file", Eb)
          }
        } else Mb && Mb("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  40932: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    var Ab = Ub(40879),
      Mb = Ub(39099);
    let Tb = !1;

    function Eb() {
      Tb || (Tb = !0, Mb.b.prototype._sphericalPolynomialTargetSize = 0, Mb.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Mb.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Ab.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((bb => {
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
  40879: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb
    });
    var Ab = Ub(36401),
      Mb = Ub(36436),
      Tb = Ub(39090),
      Eb = Ub(36405),
      Yb = Ub(36593);
    class Bb {
      constructor(bb, ab, Ub, Ab) {
        this.name = bb, this.worldAxisForNormal = ab, this.worldAxisForFileX = Ub, this.worldAxisForFileY = Ab
      }
    }
    class eb {
      static _NearestPow2Floor(bb) {
        return bb <= 1 ? 1 : 1 << Math.floor(Math.log2(bb))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(bb) {
        if (!bb.isCube) return null;
        bb.oN()?.vj().flushFramebuffer();
        const ab = bb.getSize().width,
          Ub = bb._sphericalPolynomialTargetSize,
          Ab = Ub > 0 ? this._NearestPow2Floor(Ub) : 0,
          Mb = !bb.noMipmap && !0 === bb._texture?.generateMipMaps,
          Tb = Ab > 0 && Ab < ab && Mb,
          Eb = Tb ? Math.max(0, Math.round(Math.log2(ab / Ab))) : 0,
          Yb = Tb ? Math.max(1, Math.floor(ab / Math.pow(2, Eb))) : ab,
          Bb = bb.readPixels(0, Eb, void 0, !1),
          eb = bb.readPixels(1, Eb, void 0, !1);
        let vb, Lb;
        bb.isRenderTarget ? (vb = bb.readPixels(3, Eb, void 0, !1), Lb = bb.readPixels(2, Eb, void 0, !1)) : (vb = bb.readPixels(2, Eb, void 0, !1), Lb = bb.readPixels(3, Eb, void 0, !1));
        const Pb = bb.readPixels(4, Eb, void 0, !1),
          Xb = bb.readPixels(5, Eb, void 0, !1),
          jb = bb.gammaSpace,
          Rb = Ab > 0 && Ab < ab && !Tb;
        return new Promise((bb => {
          Promise.all([eb, Bb, vb, Lb, Pb, Xb]).then((Ub => {
            let [Mb, Tb, Eb, Bb, eb, vb] = Ub, Lb = Yb;
            if (Rb) {
              const bb = 4;
              Mb = this._DownsampleFace(Mb, ab, Ab, bb), Tb = this._DownsampleFace(Tb, ab, Ab, bb), Eb = this._DownsampleFace(Eb, ab, Ab, bb), Bb = this._DownsampleFace(Bb, ab, Ab, bb), eb = this._DownsampleFace(eb, ab, Ab, bb), vb = this._DownsampleFace(vb, ab, Ab, bb), Lb = Ab
            }
            const Pb = {
              size: Lb,
              right: Tb,
              left: Mb,
              up: Eb,
              down: Bb,
              front: eb,
              back: vb,
              format: 5,
              type: Mb instanceof Float32Array ? 1 : 0,
              gammaSpace: jb
            };
            bb(this.ConvertCubeMapToSphericalPolynomial(Pb))
          }))
        }))
      }
      static _AreaElement(bb, ab) {
        return Math.atan2(bb * ab, Math.sqrt(bb * bb + ab * ab + 1))
      }
      static _DownsampleFace(bb, ab, Ub, Ab) {
        const Mb = bb instanceof Float32Array ? bb : Float32Array.from(bb),
          Tb = Ub * Ub * Ab,
          Eb = new Float32Array(Tb),
          Yb = ab / Ub,
          Bb = 1 / (Yb * Yb);
        for (let vb = 0; vb < Ub; vb++) {
          const bb = Math.floor(vb * Yb),
            Tb = Math.floor((vb + 1) * Yb);
          for (let eb = 0; eb < Ub; eb++) {
            const Lb = Math.floor(eb * Yb),
              Pb = Math.floor((eb + 1) * Yb),
              Xb = (vb * Ub + eb) * Ab;
            for (let Ub = 0; Ub < Ab; Ub++) {
              let Yb = 0;
              for (let Eb = bb; Eb < Tb; Eb++)
                for (let bb = Lb; bb < Pb; bb++) Yb += Mb[(Eb * ab + bb) * Ab + Ub];
              Eb[Xb + Ub] = Yb * Bb
            }
          }
        }
        if (bb instanceof Float32Array) return Eb;
        const eb = new(0, bb.constructor)(Tb);
        for (let vb = 0; vb < Tb; vb++) eb[vb] = Eb[vb] + .5 | 0;
        return eb
      }
      static ConvertCubeMapToSphericalPolynomial(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ub = ab > 0 ? this._NearestPow2Floor(ab) : 0;
        if (Ub > 0 && bb.size > Ub) {
          const ab = 5 === bb.format ? 4 : 3,
            Ab = ["right", "left", "up", "down", "front", "back"],
            Mb = {};
          for (const Tb of Ab) Mb[Tb] = this._DownsampleFace(bb[Tb], bb.size, Ub, ab);
          bb = {
            ...bb,
            ...Mb,
            size: Ub
          }
        }
        const Ab = new Tb.d;
        let Bb = 0;
        const eb = 2 / bb.size,
          vb = eb,
          Lb = .5 * eb,
          Pb = Lb - 1;
        for (let Tb = 0; Tb < 6; Tb++) {
          const ab = this._FileFaces[Tb],
            Ub = bb[ab.name];
          let Xb = Pb;
          const jb = 5 === bb.format ? 4 : 3;
          for (let Tb = 0; Tb < bb.size; Tb++) {
            let Rb = Pb;
            for (let vb = 0; vb < bb.size; vb++) {
              const Pb = ab.worldAxisForFileX.scale(Rb).add(ab.worldAxisForFileY.scale(Xb)).add(ab.worldAxisForNormal);
              Pb.normalize();
              const kb = this._AreaElement(Rb - Lb, Xb - Lb) - this._AreaElement(Rb - Lb, Xb + Lb) - this._AreaElement(Rb + Lb, Xb - Lb) + this._AreaElement(Rb + Lb, Xb + Lb);
              let yb = Ub[Tb * bb.size * jb + vb * jb + 0],
                Zb = Ub[Tb * bb.size * jb + vb * jb + 1],
                Db = Ub[Tb * bb.size * jb + vb * jb + 2];
              isNaN(yb) && (yb = 0), isNaN(Zb) && (Zb = 0), isNaN(Db) && (Db = 0), 0 === bb.type && (yb /= 255, Zb /= 255, Db /= 255), bb.gammaSpace && (yb = Math.pow((0, Mb.Clamp)(yb), Eb.j), Zb = Math.pow((0, Mb.Clamp)(Zb), Eb.j), Db = Math.pow((0, Mb.Clamp)(Db), Eb.j));
              const zb = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const bb = Math.max(yb, Zb, Db);
                if (bb > zb) {
                  const ab = zb / bb;
                  yb *= ab, Zb *= ab, Db *= ab
                }
              } else yb = (0, Mb.Clamp)(yb, 0, zb), Zb = (0, Mb.Clamp)(Zb, 0, zb), Db = (0, Mb.Clamp)(Db, 0, zb);
              const xb = new Yb.c(yb, Zb, Db);
              Ab.addLight(Pb, xb, kb), Bb += kb, Rb += eb
            }
            Xb += vb
          }
        }
        const Xb = 6 * (4 * Math.PI) / 6 / Bb;
        return Ab.scaleInPlace(Xb), Ab.convertIncidentRadianceToIrradiance(), Ab.convertIrradianceToLambertianRadiance(), Tb.e.FromHarmonics(Ab)
      }
    }
    eb._FileFaces = [new Bb("right", new Ab.m(1, 0, 0), new Ab.m(0, 0, -1), new Ab.m(0, -1, 0)), new Bb("left", new Ab.m(-1, 0, 0), new Ab.m(0, 0, 1), new Ab.m(0, -1, 0)), new Bb("up", new Ab.m(0, 1, 0), new Ab.m(1, 0, 0), new Ab.m(0, 0, 1)), new Bb("down", new Ab.m(0, -1, 0), new Ab.m(1, 0, 0), new Ab.m(0, 0, -1)), new Bb("front", new Ab.m(0, 0, 1), new Ab.m(1, 0, 0), new Ab.m(0, -1, 0)), new Bb("back", new Ab.m(0, 0, -1), new Ab.m(-1, 0, 0), new Ab.m(0, -1, 0))], eb.MAX_HDRI_VALUE = 4096, eb.PRESERVE_CLAMPED_COLORS = !1
  },
  40912: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb
    });
    var Ab = Ub(40901),
      Mb = Ub(40914);
    class Tb {
      static ExpandRGBDTexture(bb) {
        const ab = bb._texture;
        if (!ab || !bb.isRGBD) return;
        const Mb = ab.vj(),
          Tb = Mb.getCaps(),
          Eb = ab.isReady;
        let Yb = !1;
        Tb.textureHalfFloatRender && Tb.textureHalfFloatLinearFiltering ? (Yb = !0, ab.type = 2) : Tb.textureFloatRender && Tb.textureFloatLinearFiltering && (Yb = !0, ab.type = 1), Yb && (ab.isReady = !1, ab._isRGBD = !1, ab.invertY = !1);
        const Bb = async () => {
          const Tb = Mb.isWebGPU,
            Eb = Tb ? 1 : 0;
          ab.isReady = !1, Tb ? await Ub.e(332).then((() => Ub(60503))) : await Ub.e(314).then((() => Ub(60512)));
          const Yb = new Ab.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Mb, !1, void 0, ab.type, void 0, null, !1, void 0, Eb);
          Yb.externalTextureSamplerBinding = !0;
          const Bb = Mb.createRenderTargetTexture(ab.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: ab.samplingMode,
            type: ab.type,
            format: 5
          });
          Yb.onEffectCreatedObservable.addOnce((Ub => {
            Ub.executeWhenCompiled((() => {
              Yb.onApply = bb => {
                bb._bindTexture("textureSampler", ab), bb.setFloat2("scale", 1, 1)
              }, bb.oN()?.postProcessManager.directRender([Yb], Bb, !0), Mb.restoreDefaultFramebuffer(), Mb._releaseTexture(ab), Yb && Yb.dispose(), Bb._swapAndDie(ab), ab.isReady = !0
            }))
          }))
        };
        Yb && (Eb ? Bb() : bb.onLoadObservable.addOnce(Bb))
      }
      static async EncodeTextureToRGBD(bb, ab) {
        let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return ab.vj().isWebGPU ? await Ub.e(333).then((() => Ub(60531))) : await Ub.e(315).then((() => Ub(60523))), await (0, Mb.b)("rgbdEncode", bb, ab, Ab, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);