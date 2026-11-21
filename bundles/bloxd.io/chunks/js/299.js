export const id = 299;
export const ids = [299];
export const modules = {
  41745: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      _ENVTextureLoader: () => ad
    });
    var pd = kd(39902),
      Nd = kd(37251),
      Wd = kd(37289),
      Pd = kd(39952),
      Zd = kd(39805),
      gd = kd(39957),
      Cd = (kd(40062), kd(41752)),
      Kd = kd(38812),
      od = (kd(41764), kd(41784), kd(40032));
    const ld = "image/png",
      Qd = [134, 22, 135, 150, 246, 214, 150, 54];

    function Ld(dd) {
      const Jd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
      let kd = 0;
      for (let Pd = 0; Pd < Qd.length; Pd++)
        if (Jd.getUint8(kd++) !== Qd[Pd]) return Kd.c.Error("Not a babylon environment map"), null;
      let pd, Nd = "";
      for (; pd = Jd.getUint8(kd++);) Nd += String.fromCharCode(pd);
      let Wd = JSON.parse(Nd);
      return Wd = Od(Wd), Wd.binaryDataPosition = kd, Wd.specular && (Wd.specular.lodGenerationScale = Wd.specular.lodGenerationScale || .8), Wd
    }

    function Od(dd) {
      if (dd.version > 2) throw new Error(`Unsupported babylon environment map version "${dd.version}". Latest supported version is "2".`);
      return 2 === dd.version ? dd : dd = {
        ...dd,
        version: 2,
        imageType: ld
      }
    }

    function ed(dd, Jd) {
      const kd = (Jd = Od(Jd)).specular;
      let pd = Math.log2(Jd.width);
      if (pd = Math.round(pd) + 1, kd.mipmaps.length !== 6 * pd) throw new Error(`Unsupported specular mipmaps number "${kd.mipmaps.length}"`);
      const Nd = new Array(pd);
      for (let Wd = 0; Wd < pd; Wd++) {
        Nd[Wd] = new Array(6);
        for (let pd = 0; pd < 6; pd++) {
          const Pd = kd.mipmaps[6 * Wd + pd];
          Nd[Wd][pd] = new Uint8Array(dd.buffer, dd.byteOffset + Jd.binaryDataPosition + Pd.position, Pd.length)
        }
      }
      return Nd
    }

    function Rd(dd, Jd) {
      Jd = Od(Jd);
      const kd = new Array(6),
        pd = Jd.irradiance?.irradianceTexture;
      if (pd) {
        if (6 !== pd.faces.length) throw new Error(`Incorrect irradiance texture faces number "${pd.faces.length}"`);
        for (let Nd = 0; Nd < 6; Nd++) {
          const Wd = pd.faces[Nd];
          kd[Nd] = new Uint8Array(dd.buffer, dd.byteOffset + Jd.binaryDataPosition + Wd.position, Wd.length)
        }
      }
      return kd
    }

    function Id(dd, Jd, kd) {
      const pd = (kd = Od(kd)).specular;
      if (!pd) return Promise.resolve([]);
      dd._lodGenerationScale = pd.lodGenerationScale;
      const Wd = [],
        Pd = ed(Jd, kd);
      Wd.push(vd(dd, Pd, kd.imageType));
      const Zd = kd.irradiance?.irradianceTexture;
      if (Zd) {
        const pd = Rd(Jd, kd);
        let Pd = null;
        kd.irradiance?.irradianceTexture?.dominantDirection && (Pd = Nd.n.FromArray(kd.irradiance.irradianceTexture.dominantDirection)), Wd.push(xd(dd, pd, Zd.size, kd.imageType, Pd))
      }
      return Promise.all(Wd)
    }
    async function Gd(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd) {
      return await new Promise(((od, ld) => {
        if (kd) {
          const kd = Jd.createTexture(null, !0, !0, null, 1, null, (dd => {
            ld(dd)
          }), dd);
          pd?.onEffectCreatedObservable.addOnce((Zd => {
            Zd.executeWhenCompiled((() => {
              pd.externalTextureSamplerBinding = !0, pd.onApply = pd => {
                pd._bindTexture("textureSampler", kd), pd.setFloat2("scale", 1, Jd._features.needsInvertingBitmap && dd instanceof ImageBitmap ? -1 : 1)
              }, Jd.scenes.length && (Jd.scenes[0].postProcessManager.directRender([pd], Cd, !0, Wd, Pd), Jd.restoreDefaultFramebuffer(), kd.dispose(), URL.revokeObjectURL(Nd), od())
            }))
          }))
        } else {
          if (Jd._uploadImageToTexture(Kd, dd, Wd, Pd), Zd) {
            const kd = gd[Pd];
            kd && Jd._uploadImageToTexture(kd._texture, dd, Wd, 0)
          }
          od()
        }
      }))
    }
    async function vd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ld;
      const pd = dd.eL();
      dd.format = 5, dd.type = 0, dd.generateMipMaps = !0, dd._cachedAnisotropicFilteringLevel = null, pd.updateTextureSamplingMode(3, dd), await qd(dd, Jd, !0, kd), dd.isReady = !0
    }
    async function xd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ld,
        Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Wd = dd.eL(),
        Pd = new Zd.b(Wd, 5),
        Cd = new gd.b(Wd, Pd);
      dd._irradianceTexture = Cd, Cd._dominantDirection = Nd, Pd.isCube = !0, Pd.format = 5, Pd.type = 0, Pd.generateMipMaps = !0, Pd._cachedAnisotropicFilteringLevel = null, Pd.generateMipMaps = !0, Pd.width = kd, Pd.height = kd, Wd.updateTextureSamplingMode(3, Pd), await qd(Pd, [Jd], !1, pd), Wd.generateMipMapsForCubemap(Pd), Pd.isReady = !0
    }
    async function qd(dd, Jd, Nd) {
      let Pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ld;
      if (!(0, pd.f)(dd.width)) throw new Error("Texture size must be a power of two");
      const Kd = (0, Wd.ILog2)(dd.width) + 1,
        Qd = dd.eL();
      let Ld = !1,
        Od = !1,
        ed = null,
        Rd = null,
        Id = null;
      const vd = Qd.getCaps();
      vd.textureLOD ? Qd._features.supportRenderAndCopyToLodForFloatTextures ? vd.textureHalfFloatRender && vd.textureHalfFloatLinearFiltering ? (Ld = !0, dd.type = 2) : vd.textureFloatRender && vd.textureFloatLinearFiltering && (Ld = !0, dd.type = 1) : Ld = !1 : (Ld = !1, Od = Nd);
      let xd = 0;
      if (Ld) Qd.isWebGPU ? (xd = 1, await kd.e(333).then((() => kd(61105)))) : await kd.e(315).then((() => kd(61110))), ed = new Cd.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Qd, !1, void 0, dd.type, void 0, null, !1, void 0, xd), dd._isRGBD = !1, dd.invertY = !1, Rd = Qd.createRenderTargetCubeTexture(dd.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: dd.type,
        format: 5
      });
      else if (dd._isRGBD = !0, dd.invertY = !0, Od) {
        const Jd = 3;
        Id = {};
        const kd = dd._lodGenerationScale,
          pd = dd._lodGenerationOffset;
        for (let Nd = 0; Nd < Jd; Nd++) {
          const Wd = (Kd - 1) * kd + pd,
            Pd = pd + (Wd - pd) * (1 - Nd / (Jd - 1)),
            Cd = Math.round(Math.min(Math.max(Pd, 0), Wd)),
            od = new Zd.b(Qd, 2);
          od.isCube = !0, od.invertY = !0, od.generateMipMaps = !1, Qd.updateTextureSamplingMode(2, od);
          const ld = new gd.b(null);
          switch (ld._isCube = !0, ld._texture = od, Id[Cd] = ld, Nd) {
            case 0:
              dd._lodTextureLow = ld;
              break;
            case 1:
              dd._lodTextureMid = ld;
              break;
            case 2:
              dd._lodTextureHigh = ld
          }
        }
      }
      const qd = [];
      for (let kd = 0; kd < Jd.length; kd++)
        for (let pd = 0; pd < 6; pd++) {
          const Nd = Jd[kd][pd],
            Wd = (0, od.l)(Nd),
            Zd = new Blob([Wd], {
              type: Pd
            }),
            gd = URL.createObjectURL(Zd);
          let Cd;
          if (Qd._features.forceBitmapOverHTMLImageElement) Cd = Qd.createImageBitmap(Zd, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async Jd => await Gd(Jd, Qd, Ld, ed, gd, pd, kd, Od, Id, Rd, dd)));
          else {
            const Jd = new Image;
            Jd.src = gd, Cd = new Promise(((Nd, Wd) => {
              Jd.onload = () => {
                Gd(Jd, Qd, Ld, ed, gd, pd, kd, Od, Id, Rd, dd).then((() => Nd())).catch((dd => {
                  Wd(dd)
                }))
              }, Jd.onerror = dd => {
                Wd(dd)
              }
            }))
          }
          qd.push(Cd)
        }
      if (await Promise.all(qd), Jd.length < Kd) {
        let kd;
        const pd = Math.pow(2, Kd - 1 - Jd.length),
          Nd = pd * pd * 4;
        switch (dd.type) {
          case 0:
            kd = new Uint8Array(Nd);
            break;
          case 2:
            kd = new Uint16Array(Nd);
            break;
          case 1:
            kd = new Float32Array(Nd)
        }
        for (let Wd = Jd.length; Wd < Kd; Wd++)
          for (let Jd = 0; Jd < 6; Jd++) Qd._uploadArrayBufferViewToTexture(Rd?.texture || dd, kd, Jd, Wd)
      }
      if (Rd) {
        const Jd = dd._irradianceTexture;
        dd._irradianceTexture = null, Qd._releaseTexture(dd), Rd._swapAndDie(dd), dd._irradianceTexture = Jd
      }
      ed && ed.dispose(), Od && (dd._lodTextureHigh && dd._lodTextureHigh._texture && (dd._lodTextureHigh._texture.isReady = !0), dd._lodTextureMid && dd._lodTextureMid._texture && (dd._lodTextureMid._texture.isReady = !0), dd._lodTextureLow && dd._lodTextureLow._texture && (dd._lodTextureLow._texture.isReady = !0))
    }

    function Bd(dd, Jd) {
      const kd = (Jd = Od(Jd)).irradiance;
      if (!kd) return;
      const pd = new Pd.f;
      Nd.n.FromArrayToRef(kd.x, 0, pd.x), Nd.n.FromArrayToRef(kd.y, 0, pd.y), Nd.n.FromArrayToRef(kd.z, 0, pd.z), Nd.n.FromArrayToRef(kd.xx, 0, pd.xx), Nd.n.FromArrayToRef(kd.yy, 0, pd.yy), Nd.n.FromArrayToRef(kd.zz, 0, pd.zz), Nd.n.FromArrayToRef(kd.yz, 0, pd.yz), Nd.n.FromArrayToRef(kd.zx, 0, pd.zx), Nd.n.FromArrayToRef(kd.xy, 0, pd.xy), dd._sphericalPolynomial = pd
    }
    var sd = kd(41793);
    class ad {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(dd, Jd, kd, pd, Nd) {
        if (Array.isArray(dd)) return;
        const Wd = Ld(dd);
        if (Wd) {
          Jd.width = Wd.width, Jd.height = Wd.width;
          try {
            (0, sd.e)(), Bd(Jd, Wd), Id(Jd, dd, Wd).then((() => {
              Jd.isReady = !0, Jd.onLoadedObservable.notifyObservers(Jd), Jd.onLoadedObservable.clear(), pd && pd()
            }), (dd => {
              Nd?.("Can not upload environment levels", dd)
            }))
          } catch (Pd) {
            Nd?.("Can not upload environment file", Pd)
          }
        } else Nd && Nd("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41793: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(41722),
      Nd = kd(39957);
    let Wd = !1;

    function Pd() {
      Wd || (Wd = !0, Nd.b.prototype._sphericalPolynomialTargetSize = 0, Nd.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Nd.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = pd.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((dd => {
              this._texture._sphericalPolynomial = dd, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(dd) {
          this._texture && (this._texture._sphericalPolynomial = dd)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  41722: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd
    });
    var pd = kd(37251),
      Nd = kd(37289),
      Wd = kd(39952),
      Pd = kd(37259),
      Zd = kd(37443);
    class gd {
      constructor(dd, Jd, kd, pd) {
        this.name = dd, this.worldAxisForNormal = Jd, this.worldAxisForFileX = kd, this.worldAxisForFileY = pd
      }
    }
    class Cd {
      static _NearestPow2Floor(dd) {
        return dd <= 1 ? 1 : 1 << Math.floor(Math.log2(dd))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(dd) {
        if (!dd.isCube) return null;
        dd.Wm()?.eL().flushFramebuffer();
        const Jd = dd.getSize().width,
          kd = dd._sphericalPolynomialTargetSize,
          pd = kd > 0 ? this._NearestPow2Floor(kd) : 0,
          Nd = !dd.noMipmap && !0 === dd._texture?.generateMipMaps,
          Wd = pd > 0 && pd < Jd && Nd,
          Pd = Wd ? Math.max(0, Math.round(Math.log2(Jd / pd))) : 0,
          Zd = Wd ? Math.max(1, Math.floor(Jd / Math.pow(2, Pd))) : Jd,
          gd = dd.readPixels(0, Pd, void 0, !1),
          Cd = dd.readPixels(1, Pd, void 0, !1);
        let Kd, od;
        dd.isRenderTarget ? (Kd = dd.readPixels(3, Pd, void 0, !1), od = dd.readPixels(2, Pd, void 0, !1)) : (Kd = dd.readPixels(2, Pd, void 0, !1), od = dd.readPixels(3, Pd, void 0, !1));
        const ld = dd.readPixels(4, Pd, void 0, !1),
          Qd = dd.readPixels(5, Pd, void 0, !1),
          Ld = dd.gammaSpace,
          Od = pd > 0 && pd < Jd && !Wd;
        return new Promise((dd => {
          Promise.all([Cd, gd, Kd, od, ld, Qd]).then((kd => {
            let [Nd, Wd, Pd, gd, Cd, Kd] = kd, od = Zd;
            if (Od) {
              const dd = 4;
              Nd = this._DownsampleFace(Nd, Jd, pd, dd), Wd = this._DownsampleFace(Wd, Jd, pd, dd), Pd = this._DownsampleFace(Pd, Jd, pd, dd), gd = this._DownsampleFace(gd, Jd, pd, dd), Cd = this._DownsampleFace(Cd, Jd, pd, dd), Kd = this._DownsampleFace(Kd, Jd, pd, dd), od = pd
            }
            const ld = {
              size: od,
              right: Wd,
              left: Nd,
              up: Pd,
              down: gd,
              front: Cd,
              back: Kd,
              format: 5,
              type: Nd instanceof Float32Array ? 1 : 0,
              gammaSpace: Ld
            };
            dd(this.ConvertCubeMapToSphericalPolynomial(ld))
          }))
        }))
      }
      static _AreaElement(dd, Jd) {
        return Math.atan2(dd * Jd, Math.sqrt(dd * dd + Jd * Jd + 1))
      }
      static _DownsampleFace(dd, Jd, kd, pd) {
        const Nd = dd instanceof Float32Array ? dd : Float32Array.from(dd),
          Wd = kd * kd * pd,
          Pd = new Float32Array(Wd),
          Zd = Jd / kd,
          gd = 1 / (Zd * Zd);
        for (let Kd = 0; Kd < kd; Kd++) {
          const dd = Math.floor(Kd * Zd),
            Wd = Math.floor((Kd + 1) * Zd);
          for (let Cd = 0; Cd < kd; Cd++) {
            const od = Math.floor(Cd * Zd),
              ld = Math.floor((Cd + 1) * Zd),
              Qd = (Kd * kd + Cd) * pd;
            for (let kd = 0; kd < pd; kd++) {
              let Zd = 0;
              for (let Pd = dd; Pd < Wd; Pd++)
                for (let dd = od; dd < ld; dd++) Zd += Nd[(Pd * Jd + dd) * pd + kd];
              Pd[Qd + kd] = Zd * gd
            }
          }
        }
        if (dd instanceof Float32Array) return Pd;
        const Cd = new(0, dd.constructor)(Wd);
        for (let Kd = 0; Kd < Wd; Kd++) Cd[Kd] = Pd[Kd] + .5 | 0;
        return Cd
      }
      static ConvertCubeMapToSphericalPolynomial(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const kd = Jd > 0 ? this._NearestPow2Floor(Jd) : 0;
        if (kd > 0 && dd.size > kd) {
          const Jd = 5 === dd.format ? 4 : 3,
            pd = ["right", "left", "up", "down", "front", "back"],
            Nd = {};
          for (const Wd of pd) Nd[Wd] = this._DownsampleFace(dd[Wd], dd.size, kd, Jd);
          dd = {
            ...dd,
            ...Nd,
            size: kd
          }
        }
        const pd = new Wd.b;
        let gd = 0;
        const Cd = 2 / dd.size,
          Kd = Cd,
          od = .5 * Cd,
          ld = od - 1;
        for (let Wd = 0; Wd < 6; Wd++) {
          const Jd = this._FileFaces[Wd],
            kd = dd[Jd.name];
          let Qd = ld;
          const Ld = 5 === dd.format ? 4 : 3;
          for (let Wd = 0; Wd < dd.size; Wd++) {
            let Od = ld;
            for (let Kd = 0; Kd < dd.size; Kd++) {
              const ld = Jd.worldAxisForFileX.scale(Od).add(Jd.worldAxisForFileY.scale(Qd)).add(Jd.worldAxisForNormal);
              ld.normalize();
              const ed = this._AreaElement(Od - od, Qd - od) - this._AreaElement(Od - od, Qd + od) - this._AreaElement(Od + od, Qd - od) + this._AreaElement(Od + od, Qd + od);
              let Rd = kd[Wd * dd.size * Ld + Kd * Ld + 0],
                Id = kd[Wd * dd.size * Ld + Kd * Ld + 1],
                Gd = kd[Wd * dd.size * Ld + Kd * Ld + 2];
              isNaN(Rd) && (Rd = 0), isNaN(Id) && (Id = 0), isNaN(Gd) && (Gd = 0), 0 === dd.type && (Rd /= 255, Id /= 255, Gd /= 255), dd.gammaSpace && (Rd = Math.pow((0, Nd.Clamp)(Rd), Pd.h), Id = Math.pow((0, Nd.Clamp)(Id), Pd.h), Gd = Math.pow((0, Nd.Clamp)(Gd), Pd.h));
              const vd = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const dd = Math.max(Rd, Id, Gd);
                if (dd > vd) {
                  const Jd = vd / dd;
                  Rd *= Jd, Id *= Jd, Gd *= Jd
                }
              } else Rd = (0, Nd.Clamp)(Rd, 0, vd), Id = (0, Nd.Clamp)(Id, 0, vd), Gd = (0, Nd.Clamp)(Gd, 0, vd);
              const xd = new Zd.c(Rd, Id, Gd);
              pd.addLight(ld, xd, ed), gd += ed, Od += Cd
            }
            Qd += Kd
          }
        }
        const Qd = 6 * (4 * Math.PI) / 6 / gd;
        return pd.scaleInPlace(Qd), pd.convertIncidentRadianceToIrradiance(), pd.convertIrradianceToLambertianRadiance(), Wd.f.FromHarmonics(pd)
      }
    }
    Cd._FileFaces = [new gd("right", new pd.n(1, 0, 0), new pd.n(0, 0, -1), new pd.n(0, -1, 0)), new gd("left", new pd.n(-1, 0, 0), new pd.n(0, 0, 1), new pd.n(0, -1, 0)), new gd("up", new pd.n(0, 1, 0), new pd.n(1, 0, 0), new pd.n(0, 0, 1)), new gd("down", new pd.n(0, -1, 0), new pd.n(1, 0, 0), new pd.n(0, 0, -1)), new gd("front", new pd.n(0, 0, 1), new pd.n(1, 0, 0), new pd.n(0, -1, 0)), new gd("back", new pd.n(0, 0, -1), new pd.n(-1, 0, 0), new pd.n(0, -1, 0))], Cd.MAX_HDRI_VALUE = 4096, Cd.PRESERVE_CLAMPED_COLORS = !1
  },
  41764: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(41752),
      Nd = kd(41767);
    class Wd {
      static ExpandRGBDTexture(dd) {
        const Jd = dd._texture;
        if (!Jd || !dd.isRGBD) return;
        const Nd = Jd.eL(),
          Wd = Nd.getCaps(),
          Pd = Jd.isReady;
        let Zd = !1;
        Wd.textureHalfFloatRender && Wd.textureHalfFloatLinearFiltering ? (Zd = !0, Jd.type = 2) : Wd.textureFloatRender && Wd.textureFloatLinearFiltering && (Zd = !0, Jd.type = 1), Zd && (Jd.isReady = !1, Jd._isRGBD = !1, Jd.invertY = !1);
        const gd = async () => {
          const Wd = Nd.isWebGPU,
            Pd = Wd ? 1 : 0;
          Jd.isReady = !1, Wd ? await kd.e(333).then((() => kd(61105))) : await kd.e(315).then((() => kd(61110)));
          const Zd = new pd.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Nd, !1, void 0, Jd.type, void 0, null, !1, void 0, Pd);
          Zd.externalTextureSamplerBinding = !0;
          const gd = Nd.createRenderTargetTexture(Jd.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Jd.samplingMode,
            type: Jd.type,
            format: 5
          });
          Zd.onEffectCreatedObservable.addOnce((kd => {
            kd.executeWhenCompiled((() => {
              Zd.onApply = dd => {
                dd._bindTexture("textureSampler", Jd), dd.setFloat2("scale", 1, 1)
              }, dd.Wm()?.postProcessManager.directRender([Zd], gd, !0), Nd.restoreDefaultFramebuffer(), Nd._releaseTexture(Jd), Zd && Zd.dispose(), gd._swapAndDie(Jd), Jd.isReady = !0
            }))
          }))
        };
        Zd && (Pd ? gd() : dd.onLoadObservable.addOnce(gd))
      }
      static async EncodeTextureToRGBD(dd, Jd) {
        let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Jd.eL().isWebGPU ? await kd.e(334).then((() => kd(61135))) : await kd.e(316).then((() => kd(61126))), await (0, Nd.c)("rgbdEncode", dd, Jd, pd, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);