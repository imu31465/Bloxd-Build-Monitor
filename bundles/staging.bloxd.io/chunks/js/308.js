export const id = 308;
export const ids = [308];
export const modules = {
  41814: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      _ENVTextureLoader: () => zm
    });
    var hm = fm(40052),
      Am = fm(37185),
      am = fm(37208),
      xm = fm(40108),
      wm = fm(39942),
      Dm = fm(40111),
      im = (fm(40199), fm(41820)),
      Rm = fm(38766),
      pm = (fm(41826), fm(41846), fm(40180));
    const Em = "image/png",
      om = [134, 22, 135, 150, 246, 214, 150, 54];

    function Om(mm) {
      const Tm = new DataView(mm.buffer, mm.byteOffset, mm.byteLength);
      let fm = 0;
      for (let xm = 0; xm < om.length; xm++)
        if (Tm.getUint8(fm++) !== om[xm]) return Rm.b.Error("Not a babylon environment map"), null;
      let hm, Am = "";
      for (; hm = Tm.getUint8(fm++);) Am += String.fromCharCode(hm);
      let am = JSON.parse(Am);
      return am = Ym(am), am.binaryDataPosition = fm, am.specular && (am.specular.lodGenerationScale = am.specular.lodGenerationScale || .8), am
    }

    function Ym(mm) {
      if (mm.version > 2) throw new Error(`Unsupported babylon environment map version "${mm.version}". Latest supported version is "2".`);
      return 2 === mm.version ? mm : mm = {
        ...mm,
        version: 2,
        imageType: Em
      }
    }

    function qm(mm, Tm) {
      const fm = (Tm = Ym(Tm)).specular;
      let hm = Math.log2(Tm.width);
      if (hm = Math.round(hm) + 1, fm.mipmaps.length !== 6 * hm) throw new Error(`Unsupported specular mipmaps number "${fm.mipmaps.length}"`);
      const Am = new Array(hm);
      for (let am = 0; am < hm; am++) {
        Am[am] = new Array(6);
        for (let hm = 0; hm < 6; hm++) {
          const xm = fm.mipmaps[6 * am + hm];
          Am[am][hm] = new Uint8Array(mm.buffer, mm.byteOffset + Tm.binaryDataPosition + xm.position, xm.length)
        }
      }
      return Am
    }

    function jm(mm, Tm) {
      Tm = Ym(Tm);
      const fm = new Array(6),
        hm = Tm.irradiance?.irradianceTexture;
      if (hm) {
        if (6 !== hm.faces.length) throw new Error(`Incorrect irradiance texture faces number "${hm.faces.length}"`);
        for (let Am = 0; Am < 6; Am++) {
          const am = hm.faces[Am];
          fm[Am] = new Uint8Array(mm.buffer, mm.byteOffset + Tm.binaryDataPosition + am.position, am.length)
        }
      }
      return fm
    }

    function Vm(mm, Tm, fm) {
      const hm = (fm = Ym(fm)).specular;
      if (!hm) return Promise.resolve([]);
      mm._lodGenerationScale = hm.lodGenerationScale;
      const am = [],
        xm = qm(Tm, fm);
      am.push(Km(mm, xm, fm.imageType));
      const wm = fm.irradiance?.irradianceTexture;
      if (wm) {
        const hm = jm(Tm, fm);
        let xm = null;
        fm.irradiance?.irradianceTexture?.dominantDirection && (xm = Am.p.FromArray(fm.irradiance.irradianceTexture.dominantDirection)), am.push(Qm(mm, hm, wm.size, fm.imageType, xm))
      }
      return Promise.all(am)
    }
    async function Im(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm) {
      return await new Promise(((pm, Em) => {
        if (fm) {
          const fm = Tm.createTexture(null, !0, !0, null, 1, null, (mm => {
            Em(mm)
          }), mm);
          hm?.onEffectCreatedObservable.addOnce((wm => {
            wm.executeWhenCompiled((() => {
              hm.externalTextureSamplerBinding = !0, hm.onApply = hm => {
                hm._bindTexture("textureSampler", fm), hm.setFloat2("scale", 1, Tm._features.needsInvertingBitmap && mm instanceof ImageBitmap ? -1 : 1)
              }, Tm.scenes.length && (Tm.scenes[0].postProcessManager.directRender([hm], im, !0, am, xm), Tm.restoreDefaultFramebuffer(), fm.dispose(), URL.revokeObjectURL(Am), pm())
            }))
          }))
        } else {
          if (Tm._uploadImageToTexture(Rm, mm, am, xm), wm) {
            const fm = Dm[xm];
            fm && Tm._uploadImageToTexture(fm._texture, mm, am, 0)
          }
          pm()
        }
      }))
    }
    async function Km(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Em;
      const hm = mm.dO();
      mm.format = 5, mm.type = 0, mm.generateMipMaps = !0, mm._cachedAnisotropicFilteringLevel = null, hm.updateTextureSamplingMode(3, mm), await nm(mm, Tm, !0, fm), mm.isReady = !0
    }
    async function Qm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Em,
        Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const am = mm.dO(),
        xm = new wm.d(am, 5),
        im = new Dm.b(am, xm);
      mm._irradianceTexture = im, im._dominantDirection = Am, xm.isCube = !0, xm.format = 5, xm.type = 0, xm.generateMipMaps = !0, xm._cachedAnisotropicFilteringLevel = null, xm.generateMipMaps = !0, xm.width = fm, xm.height = fm, am.updateTextureSamplingMode(3, xm), await nm(xm, [Tm], !1, hm), am.generateMipMapsForCubemap(xm), xm.isReady = !0
    }
    async function nm(mm, Tm, Am) {
      let xm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Em;
      if (!(0, hm.i)(mm.width)) throw new Error("Texture size must be a power of two");
      const Rm = (0, am.ILog2)(mm.width) + 1,
        om = mm.dO();
      let Om = !1,
        Ym = !1,
        qm = null,
        jm = null,
        Vm = null;
      const Km = om.getCaps();
      Km.textureLOD ? om._features.supportRenderAndCopyToLodForFloatTextures ? Km.textureHalfFloatRender && Km.textureHalfFloatLinearFiltering ? (Om = !0, mm.type = 2) : Km.textureFloatRender && Km.textureFloatLinearFiltering && (Om = !0, mm.type = 1) : Om = !1 : (Om = !1, Ym = Am);
      let Qm = 0;
      if (Om) om.isWebGPU ? (Qm = 1, await fm.e(342).then((() => fm(61459)))) : await fm.e(324).then((() => fm(61464))), qm = new im.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, om, !1, void 0, mm.type, void 0, null, !1, void 0, Qm), mm._isRGBD = !1, mm.invertY = !1, jm = om.createRenderTargetCubeTexture(mm.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: mm.type,
        format: 5
      });
      else if (mm._isRGBD = !0, mm.invertY = !0, Ym) {
        const Tm = 3;
        Vm = {};
        const fm = mm._lodGenerationScale,
          hm = mm._lodGenerationOffset;
        for (let Am = 0; Am < Tm; Am++) {
          const am = (Rm - 1) * fm + hm,
            xm = hm + (am - hm) * (1 - Am / (Tm - 1)),
            im = Math.round(Math.min(Math.max(xm, 0), am)),
            pm = new wm.d(om, 2);
          pm.isCube = !0, pm.invertY = !0, pm.generateMipMaps = !1, om.updateTextureSamplingMode(2, pm);
          const Em = new Dm.b(null);
          switch (Em._isCube = !0, Em._texture = pm, Vm[im] = Em, Am) {
            case 0:
              mm._lodTextureLow = Em;
              break;
            case 1:
              mm._lodTextureMid = Em;
              break;
            case 2:
              mm._lodTextureHigh = Em
          }
        }
      }
      const nm = [];
      for (let fm = 0; fm < Tm.length; fm++)
        for (let hm = 0; hm < 6; hm++) {
          const Am = Tm[fm][hm],
            am = (0, pm.l)(Am),
            wm = new Blob([am], {
              type: xm
            }),
            Dm = URL.createObjectURL(wm);
          let im;
          if (om._features.forceBitmapOverHTMLImageElement) im = om.createImageBitmap(wm, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async Tm => await Im(Tm, om, Om, qm, Dm, hm, fm, Ym, Vm, jm, mm)));
          else {
            const Tm = new Image;
            Tm.src = Dm, im = new Promise(((Am, am) => {
              Tm.onload = () => {
                Im(Tm, om, Om, qm, Dm, hm, fm, Ym, Vm, jm, mm).then((() => Am())).catch((mm => {
                  am(mm)
                }))
              }, Tm.onerror = mm => {
                am(mm)
              }
            }))
          }
          nm.push(im)
        }
      if (await Promise.all(nm), Tm.length < Rm) {
        let fm;
        const hm = Math.pow(2, Rm - 1 - Tm.length),
          Am = hm * hm * 4;
        switch (mm.type) {
          case 0:
            fm = new Uint8Array(Am);
            break;
          case 2:
            fm = new Uint16Array(Am);
            break;
          case 1:
            fm = new Float32Array(Am)
        }
        for (let am = Tm.length; am < Rm; am++)
          for (let Tm = 0; Tm < 6; Tm++) om._uploadArrayBufferViewToTexture(jm?.texture || mm, fm, Tm, am)
      }
      if (jm) {
        const Tm = mm._irradianceTexture;
        mm._irradianceTexture = null, om._releaseTexture(mm), jm._swapAndDie(mm), mm._irradianceTexture = Tm
      }
      qm && qm.dispose(), Ym && (mm._lodTextureHigh && mm._lodTextureHigh._texture && (mm._lodTextureHigh._texture.isReady = !0), mm._lodTextureMid && mm._lodTextureMid._texture && (mm._lodTextureMid._texture.isReady = !0), mm._lodTextureLow && mm._lodTextureLow._texture && (mm._lodTextureLow._texture.isReady = !0))
    }

    function Jm(mm, Tm) {
      const fm = (Tm = Ym(Tm)).irradiance;
      if (!fm) return;
      const hm = new xm.e;
      Am.p.FromArrayToRef(fm.x, 0, hm.x), Am.p.FromArrayToRef(fm.y, 0, hm.y), Am.p.FromArrayToRef(fm.z, 0, hm.z), Am.p.FromArrayToRef(fm.xx, 0, hm.xx), Am.p.FromArrayToRef(fm.yy, 0, hm.yy), Am.p.FromArrayToRef(fm.zz, 0, hm.zz), Am.p.FromArrayToRef(fm.yz, 0, hm.yz), Am.p.FromArrayToRef(fm.zx, 0, hm.zx), Am.p.FromArrayToRef(fm.xy, 0, hm.xy), mm._sphericalPolynomial = hm
    }
    var cm = fm(41849);
    class zm {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(mm, Tm, fm, hm, Am) {
        if (Array.isArray(mm)) return;
        const am = Om(mm);
        if (am) {
          Tm.width = am.width, Tm.height = am.width;
          try {
            (0, cm.b)(), Jm(Tm, am), Vm(Tm, mm, am).then((() => {
              Tm.isReady = !0, Tm.onLoadedObservable.notifyObservers(Tm), Tm.onLoadedObservable.clear(), hm && hm()
            }), (mm => {
              Am?.("Can not upload environment levels", mm)
            }))
          } catch (xm) {
            Am?.("Can not upload environment file", xm)
          }
        } else Am && Am("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41849: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(41793),
      Am = fm(40111);
    let am = !1;

    function xm() {
      am || (am = !0, Am.b.prototype._sphericalPolynomialTargetSize = 0, Am.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Am.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = hm.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((mm => {
              this._texture._sphericalPolynomial = mm, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(mm) {
          this._texture && (this._texture._sphericalPolynomial = mm)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41793: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im
    });
    var hm = fm(37185),
      Am = fm(37208),
      am = fm(40108),
      xm = fm(37191),
      wm = fm(37336);
    class Dm {
      constructor(mm, Tm, fm, hm) {
        this.name = mm, this.worldAxisForNormal = Tm, this.worldAxisForFileX = fm, this.worldAxisForFileY = hm
      }
    }
    class im {
      static _NearestPow2Floor(mm) {
        return mm <= 1 ? 1 : 1 << Math.floor(Math.log2(mm))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(mm) {
        if (!mm.isCube) return null;
        mm.wG()?.dO().flushFramebuffer();
        const Tm = mm.getSize().width,
          fm = mm._sphericalPolynomialTargetSize,
          hm = fm > 0 ? this._NearestPow2Floor(fm) : 0,
          Am = !mm.noMipmap && !0 === mm._texture?.generateMipMaps,
          am = hm > 0 && hm < Tm && Am,
          xm = am ? Math.max(0, Math.round(Math.log2(Tm / hm))) : 0,
          wm = am ? Math.max(1, Math.floor(Tm / Math.pow(2, xm))) : Tm,
          Dm = mm.readPixels(0, xm, void 0, !1),
          im = mm.readPixels(1, xm, void 0, !1);
        let Rm, pm;
        mm.isRenderTarget ? (Rm = mm.readPixels(3, xm, void 0, !1), pm = mm.readPixels(2, xm, void 0, !1)) : (Rm = mm.readPixels(2, xm, void 0, !1), pm = mm.readPixels(3, xm, void 0, !1));
        const Em = mm.readPixels(4, xm, void 0, !1),
          om = mm.readPixels(5, xm, void 0, !1),
          Om = mm.gammaSpace,
          Ym = hm > 0 && hm < Tm && !am;
        return new Promise((mm => {
          Promise.all([im, Dm, Rm, pm, Em, om]).then((fm => {
            let [Am, am, xm, Dm, im, Rm] = fm, pm = wm;
            if (Ym) {
              const mm = 4;
              Am = this._DownsampleFace(Am, Tm, hm, mm), am = this._DownsampleFace(am, Tm, hm, mm), xm = this._DownsampleFace(xm, Tm, hm, mm), Dm = this._DownsampleFace(Dm, Tm, hm, mm), im = this._DownsampleFace(im, Tm, hm, mm), Rm = this._DownsampleFace(Rm, Tm, hm, mm), pm = hm
            }
            const Em = {
              size: pm,
              right: am,
              left: Am,
              up: xm,
              down: Dm,
              front: im,
              back: Rm,
              format: 5,
              type: Am instanceof Float32Array ? 1 : 0,
              gammaSpace: Om
            };
            mm(this.ConvertCubeMapToSphericalPolynomial(Em))
          }))
        }))
      }
      static _AreaElement(mm, Tm) {
        return Math.atan2(mm * Tm, Math.sqrt(mm * mm + Tm * Tm + 1))
      }
      static _DownsampleFace(mm, Tm, fm, hm) {
        const Am = mm instanceof Float32Array ? mm : Float32Array.from(mm),
          am = fm * fm * hm,
          xm = new Float32Array(am),
          wm = Tm / fm,
          Dm = 1 / (wm * wm);
        for (let Rm = 0; Rm < fm; Rm++) {
          const mm = Math.floor(Rm * wm),
            am = Math.floor((Rm + 1) * wm);
          for (let im = 0; im < fm; im++) {
            const pm = Math.floor(im * wm),
              Em = Math.floor((im + 1) * wm),
              om = (Rm * fm + im) * hm;
            for (let fm = 0; fm < hm; fm++) {
              let wm = 0;
              for (let xm = mm; xm < am; xm++)
                for (let mm = pm; mm < Em; mm++) wm += Am[(xm * Tm + mm) * hm + fm];
              xm[om + fm] = wm * Dm
            }
          }
        }
        if (mm instanceof Float32Array) return xm;
        const im = new(0, mm.constructor)(am);
        for (let Rm = 0; Rm < am; Rm++) im[Rm] = xm[Rm] + .5 | 0;
        return im
      }
      static ConvertCubeMapToSphericalPolynomial(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const fm = Tm > 0 ? this._NearestPow2Floor(Tm) : 0;
        if (fm > 0 && mm.size > fm) {
          const Tm = 5 === mm.format ? 4 : 3,
            hm = ["right", "left", "up", "down", "front", "back"],
            Am = {};
          for (const am of hm) Am[am] = this._DownsampleFace(mm[am], mm.size, fm, Tm);
          mm = {
            ...mm,
            ...Am,
            size: fm
          }
        }
        const hm = new am.b;
        let Dm = 0;
        const im = 2 / mm.size,
          Rm = im,
          pm = .5 * im,
          Em = pm - 1;
        for (let am = 0; am < 6; am++) {
          const Tm = this._FileFaces[am],
            fm = mm[Tm.name];
          let om = Em;
          const Om = 5 === mm.format ? 4 : 3;
          for (let am = 0; am < mm.size; am++) {
            let Ym = Em;
            for (let Rm = 0; Rm < mm.size; Rm++) {
              const Em = Tm.worldAxisForFileX.scale(Ym).add(Tm.worldAxisForFileY.scale(om)).add(Tm.worldAxisForNormal);
              Em.normalize();
              const qm = this._AreaElement(Ym - pm, om - pm) - this._AreaElement(Ym - pm, om + pm) - this._AreaElement(Ym + pm, om - pm) + this._AreaElement(Ym + pm, om + pm);
              let jm = fm[am * mm.size * Om + Rm * Om + 0],
                Vm = fm[am * mm.size * Om + Rm * Om + 1],
                Im = fm[am * mm.size * Om + Rm * Om + 2];
              isNaN(jm) && (jm = 0), isNaN(Vm) && (Vm = 0), isNaN(Im) && (Im = 0), 0 === mm.type && (jm /= 255, Vm /= 255, Im /= 255), mm.gammaSpace && (jm = Math.pow((0, Am.Clamp)(jm), xm.g), Vm = Math.pow((0, Am.Clamp)(Vm), xm.g), Im = Math.pow((0, Am.Clamp)(Im), xm.g));
              const Km = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const mm = Math.max(jm, Vm, Im);
                if (mm > Km) {
                  const Tm = Km / mm;
                  jm *= Tm, Vm *= Tm, Im *= Tm
                }
              } else jm = (0, Am.Clamp)(jm, 0, Km), Vm = (0, Am.Clamp)(Vm, 0, Km), Im = (0, Am.Clamp)(Im, 0, Km);
              const Qm = new wm.b(jm, Vm, Im);
              hm.addLight(Em, Qm, qm), Dm += qm, Ym += im
            }
            om += Rm
          }
        }
        const om = 6 * (4 * Math.PI) / 6 / Dm;
        return hm.scaleInPlace(om), hm.convertIncidentRadianceToIrradiance(), hm.convertIrradianceToLambertianRadiance(), am.e.FromHarmonics(hm)
      }
    }
    im._FileFaces = [new Dm("right", new hm.p(1, 0, 0), new hm.p(0, 0, -1), new hm.p(0, -1, 0)), new Dm("left", new hm.p(-1, 0, 0), new hm.p(0, 0, 1), new hm.p(0, -1, 0)), new Dm("up", new hm.p(0, 1, 0), new hm.p(1, 0, 0), new hm.p(0, 0, 1)), new Dm("down", new hm.p(0, -1, 0), new hm.p(1, 0, 0), new hm.p(0, 0, -1)), new Dm("front", new hm.p(0, 0, 1), new hm.p(1, 0, 0), new hm.p(0, -1, 0)), new Dm("back", new hm.p(0, 0, -1), new hm.p(-1, 0, 0), new hm.p(0, -1, 0))], im.MAX_HDRI_VALUE = 4096, im.PRESERVE_CLAMPED_COLORS = !1
  },
  41826: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am
    });
    var hm = fm(41820),
      Am = fm(41831);
    class am {
      static ExpandRGBDTexture(mm) {
        const Tm = mm._texture;
        if (!Tm || !mm.isRGBD) return;
        const Am = Tm.dO(),
          am = Am.getCaps(),
          xm = Tm.isReady;
        let wm = !1;
        am.textureHalfFloatRender && am.textureHalfFloatLinearFiltering ? (wm = !0, Tm.type = 2) : am.textureFloatRender && am.textureFloatLinearFiltering && (wm = !0, Tm.type = 1), wm && (Tm.isReady = !1, Tm._isRGBD = !1, Tm.invertY = !1);
        const Dm = async () => {
          const am = Am.isWebGPU,
            xm = am ? 1 : 0;
          Tm.isReady = !1, am ? await fm.e(342).then((() => fm(61459))) : await fm.e(324).then((() => fm(61464)));
          const wm = new hm.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Am, !1, void 0, Tm.type, void 0, null, !1, void 0, xm);
          wm.externalTextureSamplerBinding = !0;
          const Dm = Am.createRenderTargetTexture(Tm.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Tm.samplingMode,
            type: Tm.type,
            format: 5
          });
          wm.onEffectCreatedObservable.addOnce((fm => {
            fm.executeWhenCompiled((() => {
              wm.onApply = mm => {
                mm._bindTexture("textureSampler", Tm), mm.setFloat2("scale", 1, 1)
              }, mm.wG()?.postProcessManager.directRender([wm], Dm, !0), Am.restoreDefaultFramebuffer(), Am._releaseTexture(Tm), wm && wm.dispose(), Dm._swapAndDie(Tm), Tm.isReady = !0
            }))
          }))
        };
        wm && (xm ? Dm() : mm.onLoadObservable.addOnce(Dm))
      }
      static async EncodeTextureToRGBD(mm, Tm) {
        let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Tm.dO().isWebGPU ? await fm.e(343).then((() => fm(61477))) : await fm.e(325).then((() => fm(61475))), await (0, Am.d)("rgbdEncode", mm, Tm, hm, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);