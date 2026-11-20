export const id = 299;
export const ids = [299];
export const modules = {
  41090: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      _ENVTextureLoader: () => nv
    });
    var hv = Pv(39247),
      Sv = Pv(36594),
      ev = Pv(36620),
      gv = Pv(39284),
      pv = Pv(39134),
      dv = Pv(39287),
      Nv = (Pv(39395), Pv(41097)),
      lv = Pv(38209),
      Tv = (Pv(41109), Pv(41139), Pv(39361));
    const Wv = "image/png",
      wv = [134, 22, 135, 150, 246, 214, 150, 54];

    function av(vv) {
      const zv = new DataView(vv.buffer, vv.byteOffset, vv.byteLength);
      let Pv = 0;
      for (let gv = 0; gv < wv.length; gv++)
        if (zv.getUint8(Pv++) !== wv[gv]) return lv.d.Error("Not a babylon environment map"), null;
      let hv, Sv = "";
      for (; hv = zv.getUint8(Pv++);) Sv += String.fromCharCode(hv);
      let ev = JSON.parse(Sv);
      return ev = sv(ev), ev.binaryDataPosition = Pv, ev.specular && (ev.specular.lodGenerationScale = ev.specular.lodGenerationScale || .8), ev
    }

    function sv(vv) {
      if (vv.version > 2) throw new Error(`Unsupported babylon environment map version "${vv.version}". Latest supported version is "2".`);
      return 2 === vv.version ? vv : vv = {
        ...vv,
        version: 2,
        imageType: Wv
      }
    }

    function Cv(vv, zv) {
      const Pv = (zv = sv(zv)).specular;
      let hv = Math.log2(zv.width);
      if (hv = Math.round(hv) + 1, Pv.mipmaps.length !== 6 * hv) throw new Error(`Unsupported specular mipmaps number "${Pv.mipmaps.length}"`);
      const Sv = new Array(hv);
      for (let ev = 0; ev < hv; ev++) {
        Sv[ev] = new Array(6);
        for (let hv = 0; hv < 6; hv++) {
          const gv = Pv.mipmaps[6 * ev + hv];
          Sv[ev][hv] = new Uint8Array(vv.buffer, vv.byteOffset + zv.binaryDataPosition + gv.position, gv.length)
        }
      }
      return Sv
    }

    function iv(vv, zv) {
      zv = sv(zv);
      const Pv = new Array(6),
        hv = zv.irradiance?.irradianceTexture;
      if (hv) {
        if (6 !== hv.faces.length) throw new Error(`Incorrect irradiance texture faces number "${hv.faces.length}"`);
        for (let Sv = 0; Sv < 6; Sv++) {
          const ev = hv.faces[Sv];
          Pv[Sv] = new Uint8Array(vv.buffer, vv.byteOffset + zv.binaryDataPosition + ev.position, ev.length)
        }
      }
      return Pv
    }

    function cv(vv, zv, Pv) {
      const hv = (Pv = sv(Pv)).specular;
      if (!hv) return Promise.resolve([]);
      vv._lodGenerationScale = hv.lodGenerationScale;
      const ev = [],
        gv = Cv(zv, Pv);
      ev.push(mv(vv, gv, Pv.imageType));
      const pv = Pv.irradiance?.irradianceTexture;
      if (pv) {
        const hv = iv(zv, Pv);
        let gv = null;
        Pv.irradiance?.irradianceTexture?.dominantDirection && (gv = Sv.l.FromArray(Pv.irradiance.irradianceTexture.dominantDirection)), ev.push(jv(vv, hv, pv.size, Pv.imageType, gv))
      }
      return Promise.all(ev)
    }
    async function Gv(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv) {
      return await new Promise(((Tv, Wv) => {
        if (Pv) {
          const Pv = zv.createTexture(null, !0, !0, null, 1, null, (vv => {
            Wv(vv)
          }), vv);
          hv?.onEffectCreatedObservable.addOnce((pv => {
            pv.executeWhenCompiled((() => {
              hv.externalTextureSamplerBinding = !0, hv.onApply = hv => {
                hv._bindTexture("textureSampler", Pv), hv.setFloat2("scale", 1, zv._features.needsInvertingBitmap && vv instanceof ImageBitmap ? -1 : 1)
              }, zv.scenes.length && (zv.scenes[0].postProcessManager.directRender([hv], Nv, !0, ev, gv), zv.restoreDefaultFramebuffer(), Pv.dispose(), URL.revokeObjectURL(Sv), Tv())
            }))
          }))
        } else {
          if (zv._uploadImageToTexture(lv, vv, ev, gv), pv) {
            const Pv = dv[gv];
            Pv && zv._uploadImageToTexture(Pv._texture, vv, ev, 0)
          }
          Tv()
        }
      }))
    }
    async function mv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wv;
      const hv = vv.ma();
      vv.format = 5, vv.type = 0, vv.generateMipMaps = !0, vv._cachedAnisotropicFilteringLevel = null, hv.updateTextureSamplingMode(3, vv), await fv(vv, zv, !0, Pv), vv.isReady = !0
    }
    async function jv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wv,
        Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const ev = vv.ma(),
        gv = new pv.e(ev, 5),
        Nv = new dv.e(ev, gv);
      vv._irradianceTexture = Nv, Nv._dominantDirection = Sv, gv.isCube = !0, gv.format = 5, gv.type = 0, gv.generateMipMaps = !0, gv._cachedAnisotropicFilteringLevel = null, gv.generateMipMaps = !0, gv.width = Pv, gv.height = Pv, ev.updateTextureSamplingMode(3, gv), await fv(gv, [zv], !1, hv), ev.generateMipMapsForCubemap(gv), gv.isReady = !0
    }
    async function fv(vv, zv, Sv) {
      let gv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wv;
      if (!(0, hv.e)(vv.width)) throw new Error("Texture size must be a power of two");
      const lv = (0, ev.ILog2)(vv.width) + 1,
        wv = vv.ma();
      let av = !1,
        sv = !1,
        Cv = null,
        iv = null,
        cv = null;
      const mv = wv.getCaps();
      mv.textureLOD ? wv._features.supportRenderAndCopyToLodForFloatTextures ? mv.textureHalfFloatRender && mv.textureHalfFloatLinearFiltering ? (av = !0, vv.type = 2) : mv.textureFloatRender && mv.textureFloatLinearFiltering && (av = !0, vv.type = 1) : av = !1 : (av = !1, sv = Sv);
      let jv = 0;
      if (av) wv.isWebGPU ? (jv = 1, await Pv.e(333).then((() => Pv(60803)))) : await Pv.e(315).then((() => Pv(60807))), Cv = new Nv.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, wv, !1, void 0, vv.type, void 0, null, !1, void 0, jv), vv._isRGBD = !1, vv.invertY = !1, iv = wv.createRenderTargetCubeTexture(vv.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: vv.type,
        format: 5
      });
      else if (vv._isRGBD = !0, vv.invertY = !0, sv) {
        const zv = 3;
        cv = {};
        const Pv = vv._lodGenerationScale,
          hv = vv._lodGenerationOffset;
        for (let Sv = 0; Sv < zv; Sv++) {
          const ev = (lv - 1) * Pv + hv,
            gv = hv + (ev - hv) * (1 - Sv / (zv - 1)),
            Nv = Math.round(Math.min(Math.max(gv, 0), ev)),
            Tv = new pv.e(wv, 2);
          Tv.isCube = !0, Tv.invertY = !0, Tv.generateMipMaps = !1, wv.updateTextureSamplingMode(2, Tv);
          const Wv = new dv.e(null);
          switch (Wv._isCube = !0, Wv._texture = Tv, cv[Nv] = Wv, Sv) {
            case 0:
              vv._lodTextureLow = Wv;
              break;
            case 1:
              vv._lodTextureMid = Wv;
              break;
            case 2:
              vv._lodTextureHigh = Wv
          }
        }
      }
      const fv = [];
      for (let Pv = 0; Pv < zv.length; Pv++)
        for (let hv = 0; hv < 6; hv++) {
          const Sv = zv[Pv][hv],
            ev = (0, Tv.n)(Sv),
            pv = new Blob([ev], {
              type: gv
            }),
            dv = URL.createObjectURL(pv);
          let Nv;
          if (wv._features.forceBitmapOverHTMLImageElement) Nv = wv.createImageBitmap(pv, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async zv => await Gv(zv, wv, av, Cv, dv, hv, Pv, sv, cv, iv, vv)));
          else {
            const zv = new Image;
            zv.src = dv, Nv = new Promise(((Sv, ev) => {
              zv.onload = () => {
                Gv(zv, wv, av, Cv, dv, hv, Pv, sv, cv, iv, vv).then((() => Sv())).catch((vv => {
                  ev(vv)
                }))
              }, zv.onerror = vv => {
                ev(vv)
              }
            }))
          }
          fv.push(Nv)
        }
      if (await Promise.all(fv), zv.length < lv) {
        let Pv;
        const hv = Math.pow(2, lv - 1 - zv.length),
          Sv = hv * hv * 4;
        switch (vv.type) {
          case 0:
            Pv = new Uint8Array(Sv);
            break;
          case 2:
            Pv = new Uint16Array(Sv);
            break;
          case 1:
            Pv = new Float32Array(Sv)
        }
        for (let ev = zv.length; ev < lv; ev++)
          for (let zv = 0; zv < 6; zv++) wv._uploadArrayBufferViewToTexture(iv?.texture || vv, Pv, zv, ev)
      }
      if (iv) {
        const zv = vv._irradianceTexture;
        vv._irradianceTexture = null, wv._releaseTexture(vv), iv._swapAndDie(vv), vv._irradianceTexture = zv
      }
      Cv && Cv.dispose(), sv && (vv._lodTextureHigh && vv._lodTextureHigh._texture && (vv._lodTextureHigh._texture.isReady = !0), vv._lodTextureMid && vv._lodTextureMid._texture && (vv._lodTextureMid._texture.isReady = !0), vv._lodTextureLow && vv._lodTextureLow._texture && (vv._lodTextureLow._texture.isReady = !0))
    }

    function Fv(vv, zv) {
      const Pv = (zv = sv(zv)).irradiance;
      if (!Pv) return;
      const hv = new gv.f;
      Sv.l.FromArrayToRef(Pv.x, 0, hv.x), Sv.l.FromArrayToRef(Pv.y, 0, hv.y), Sv.l.FromArrayToRef(Pv.z, 0, hv.z), Sv.l.FromArrayToRef(Pv.xx, 0, hv.xx), Sv.l.FromArrayToRef(Pv.yy, 0, hv.yy), Sv.l.FromArrayToRef(Pv.zz, 0, hv.zz), Sv.l.FromArrayToRef(Pv.yz, 0, hv.yz), Sv.l.FromArrayToRef(Pv.zx, 0, hv.zx), Sv.l.FromArrayToRef(Pv.xy, 0, hv.xy), vv._sphericalPolynomial = hv
    }
    var Yv = Pv(41148);
    class nv {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(vv, zv, Pv, hv, Sv) {
        if (Array.isArray(vv)) return;
        const ev = av(vv);
        if (ev) {
          zv.width = ev.width, zv.height = ev.width;
          try {
            (0, Yv.d)(), Fv(zv, ev), cv(zv, vv, ev).then((() => {
              zv.isReady = !0, zv.onLoadedObservable.notifyObservers(zv), zv.onLoadedObservable.clear(), hv && hv()
            }), (vv => {
              Sv?.("Can not upload environment levels", vv)
            }))
          } catch (gv) {
            Sv?.("Can not upload environment file", gv)
          }
        } else Sv && Sv("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41148: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv
    });
    var hv = Pv(41067),
      Sv = Pv(39287);
    let ev = !1;

    function gv() {
      ev || (ev = !0, Sv.e.prototype._sphericalPolynomialTargetSize = 0, Sv.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Sv.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = hv.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((vv => {
              this._texture._sphericalPolynomial = vv, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(vv) {
          this._texture && (this._texture._sphericalPolynomial = vv)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41067: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv
    });
    var hv = Pv(36594),
      Sv = Pv(36620),
      ev = Pv(39284),
      gv = Pv(36599),
      pv = Pv(36751);
    class dv {
      constructor(vv, zv, Pv, hv) {
        this.name = vv, this.worldAxisForNormal = zv, this.worldAxisForFileX = Pv, this.worldAxisForFileY = hv
      }
    }
    class Nv {
      static _NearestPow2Floor(vv) {
        return vv <= 1 ? 1 : 1 << Math.floor(Math.log2(vv))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(vv) {
        if (!vv.isCube) return null;
        vv.rD()?.ma().flushFramebuffer();
        const zv = vv.getSize().width,
          Pv = vv._sphericalPolynomialTargetSize,
          hv = Pv > 0 ? this._NearestPow2Floor(Pv) : 0,
          Sv = !vv.noMipmap && !0 === vv._texture?.generateMipMaps,
          ev = hv > 0 && hv < zv && Sv,
          gv = ev ? Math.max(0, Math.round(Math.log2(zv / hv))) : 0,
          pv = ev ? Math.max(1, Math.floor(zv / Math.pow(2, gv))) : zv,
          dv = vv.readPixels(0, gv, void 0, !1),
          Nv = vv.readPixels(1, gv, void 0, !1);
        let lv, Tv;
        vv.isRenderTarget ? (lv = vv.readPixels(3, gv, void 0, !1), Tv = vv.readPixels(2, gv, void 0, !1)) : (lv = vv.readPixels(2, gv, void 0, !1), Tv = vv.readPixels(3, gv, void 0, !1));
        const Wv = vv.readPixels(4, gv, void 0, !1),
          wv = vv.readPixels(5, gv, void 0, !1),
          av = vv.gammaSpace,
          sv = hv > 0 && hv < zv && !ev;
        return new Promise((vv => {
          Promise.all([Nv, dv, lv, Tv, Wv, wv]).then((Pv => {
            let [Sv, ev, gv, dv, Nv, lv] = Pv, Tv = pv;
            if (sv) {
              const vv = 4;
              Sv = this._DownsampleFace(Sv, zv, hv, vv), ev = this._DownsampleFace(ev, zv, hv, vv), gv = this._DownsampleFace(gv, zv, hv, vv), dv = this._DownsampleFace(dv, zv, hv, vv), Nv = this._DownsampleFace(Nv, zv, hv, vv), lv = this._DownsampleFace(lv, zv, hv, vv), Tv = hv
            }
            const Wv = {
              size: Tv,
              right: ev,
              left: Sv,
              up: gv,
              down: dv,
              front: Nv,
              back: lv,
              format: 5,
              type: Sv instanceof Float32Array ? 1 : 0,
              gammaSpace: av
            };
            vv(this.ConvertCubeMapToSphericalPolynomial(Wv))
          }))
        }))
      }
      static _AreaElement(vv, zv) {
        return Math.atan2(vv * zv, Math.sqrt(vv * vv + zv * zv + 1))
      }
      static _DownsampleFace(vv, zv, Pv, hv) {
        const Sv = vv instanceof Float32Array ? vv : Float32Array.from(vv),
          ev = Pv * Pv * hv,
          gv = new Float32Array(ev),
          pv = zv / Pv,
          dv = 1 / (pv * pv);
        for (let lv = 0; lv < Pv; lv++) {
          const vv = Math.floor(lv * pv),
            ev = Math.floor((lv + 1) * pv);
          for (let Nv = 0; Nv < Pv; Nv++) {
            const Tv = Math.floor(Nv * pv),
              Wv = Math.floor((Nv + 1) * pv),
              wv = (lv * Pv + Nv) * hv;
            for (let Pv = 0; Pv < hv; Pv++) {
              let pv = 0;
              for (let gv = vv; gv < ev; gv++)
                for (let vv = Tv; vv < Wv; vv++) pv += Sv[(gv * zv + vv) * hv + Pv];
              gv[wv + Pv] = pv * dv
            }
          }
        }
        if (vv instanceof Float32Array) return gv;
        const Nv = new(0, vv.constructor)(ev);
        for (let lv = 0; lv < ev; lv++) Nv[lv] = gv[lv] + .5 | 0;
        return Nv
      }
      static ConvertCubeMapToSphericalPolynomial(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Pv = zv > 0 ? this._NearestPow2Floor(zv) : 0;
        if (Pv > 0 && vv.size > Pv) {
          const zv = 5 === vv.format ? 4 : 3,
            hv = ["right", "left", "up", "down", "front", "back"],
            Sv = {};
          for (const ev of hv) Sv[ev] = this._DownsampleFace(vv[ev], vv.size, Pv, zv);
          vv = {
            ...vv,
            ...Sv,
            size: Pv
          }
        }
        const hv = new ev.d;
        let dv = 0;
        const Nv = 2 / vv.size,
          lv = Nv,
          Tv = .5 * Nv,
          Wv = Tv - 1;
        for (let ev = 0; ev < 6; ev++) {
          const zv = this._FileFaces[ev],
            Pv = vv[zv.name];
          let wv = Wv;
          const av = 5 === vv.format ? 4 : 3;
          for (let ev = 0; ev < vv.size; ev++) {
            let sv = Wv;
            for (let lv = 0; lv < vv.size; lv++) {
              const Wv = zv.worldAxisForFileX.scale(sv).add(zv.worldAxisForFileY.scale(wv)).add(zv.worldAxisForNormal);
              Wv.normalize();
              const Cv = this._AreaElement(sv - Tv, wv - Tv) - this._AreaElement(sv - Tv, wv + Tv) - this._AreaElement(sv + Tv, wv - Tv) + this._AreaElement(sv + Tv, wv + Tv);
              let iv = Pv[ev * vv.size * av + lv * av + 0],
                cv = Pv[ev * vv.size * av + lv * av + 1],
                Gv = Pv[ev * vv.size * av + lv * av + 2];
              isNaN(iv) && (iv = 0), isNaN(cv) && (cv = 0), isNaN(Gv) && (Gv = 0), 0 === vv.type && (iv /= 255, cv /= 255, Gv /= 255), vv.gammaSpace && (iv = Math.pow((0, Sv.Clamp)(iv), gv.h), cv = Math.pow((0, Sv.Clamp)(cv), gv.h), Gv = Math.pow((0, Sv.Clamp)(Gv), gv.h));
              const mv = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const vv = Math.max(iv, cv, Gv);
                if (vv > mv) {
                  const zv = mv / vv;
                  iv *= zv, cv *= zv, Gv *= zv
                }
              } else iv = (0, Sv.Clamp)(iv, 0, mv), cv = (0, Sv.Clamp)(cv, 0, mv), Gv = (0, Sv.Clamp)(Gv, 0, mv);
              const jv = new pv.b(iv, cv, Gv);
              hv.addLight(Wv, jv, Cv), dv += Cv, sv += Nv
            }
            wv += lv
          }
        }
        const wv = 6 * (4 * Math.PI) / 6 / dv;
        return hv.scaleInPlace(wv), hv.convertIncidentRadianceToIrradiance(), hv.convertIrradianceToLambertianRadiance(), ev.f.FromHarmonics(hv)
      }
    }
    Nv._FileFaces = [new dv("right", new hv.l(1, 0, 0), new hv.l(0, 0, -1), new hv.l(0, -1, 0)), new dv("left", new hv.l(-1, 0, 0), new hv.l(0, 0, 1), new hv.l(0, -1, 0)), new dv("up", new hv.l(0, 1, 0), new hv.l(1, 0, 0), new hv.l(0, 0, 1)), new dv("down", new hv.l(0, -1, 0), new hv.l(1, 0, 0), new hv.l(0, 0, -1)), new dv("front", new hv.l(0, 0, 1), new hv.l(1, 0, 0), new hv.l(0, -1, 0)), new dv("back", new hv.l(0, 0, -1), new hv.l(-1, 0, 0), new hv.l(0, -1, 0))], Nv.MAX_HDRI_VALUE = 4096, Nv.PRESERVE_CLAMPED_COLORS = !1
  },
  41109: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(41097),
      Sv = Pv(41118);
    class ev {
      static ExpandRGBDTexture(vv) {
        const zv = vv._texture;
        if (!zv || !vv.isRGBD) return;
        const Sv = zv.ma(),
          ev = Sv.getCaps(),
          gv = zv.isReady;
        let pv = !1;
        ev.textureHalfFloatRender && ev.textureHalfFloatLinearFiltering ? (pv = !0, zv.type = 2) : ev.textureFloatRender && ev.textureFloatLinearFiltering && (pv = !0, zv.type = 1), pv && (zv.isReady = !1, zv._isRGBD = !1, zv.invertY = !1);
        const dv = async () => {
          const ev = Sv.isWebGPU,
            gv = ev ? 1 : 0;
          zv.isReady = !1, ev ? await Pv.e(333).then((() => Pv(60803))) : await Pv.e(315).then((() => Pv(60807)));
          const pv = new hv.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Sv, !1, void 0, zv.type, void 0, null, !1, void 0, gv);
          pv.externalTextureSamplerBinding = !0;
          const dv = Sv.createRenderTargetTexture(zv.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: zv.samplingMode,
            type: zv.type,
            format: 5
          });
          pv.onEffectCreatedObservable.addOnce((Pv => {
            Pv.executeWhenCompiled((() => {
              pv.onApply = vv => {
                vv._bindTexture("textureSampler", zv), vv.setFloat2("scale", 1, 1)
              }, vv.rD()?.postProcessManager.directRender([pv], dv, !0), Sv.restoreDefaultFramebuffer(), Sv._releaseTexture(zv), pv && pv.dispose(), dv._swapAndDie(zv), zv.isReady = !0
            }))
          }))
        };
        pv && (gv ? dv() : vv.onLoadObservable.addOnce(dv))
      }
      static async EncodeTextureToRGBD(vv, zv) {
        let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return zv.ma().isWebGPU ? await Pv.e(334).then((() => Pv(60827))) : await Pv.e(316).then((() => Pv(60818))), await (0, Sv.b)("rgbdEncode", vv, zv, hv, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);