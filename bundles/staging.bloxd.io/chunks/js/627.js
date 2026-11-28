export const id = 627;
export const ids = [627];
export const modules = {
  54213: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      _ENVTextureLoader: () => Ud
    });
    var Wd = md(41859),
      Fd = md(38636),
      Rd = md(38663),
      Xd = md(41907),
      Kd = md(41763),
      hd = md(41914),
      vd = (md(42020), md(54217)),
      Qd = md(40262),
      td = (md(54227), md(54245), md(41991));
    const od = "image/png",
      Nd = [134, 22, 135, 150, 246, 214, 150, 54];

    function qd(dd) {
      const Od = new DataView(dd.buffer, dd.byteOffset, dd.byteLength);
      let md = 0;
      for (let Xd = 0; Xd < Nd.length; Xd++)
        if (Od.getUint8(md++) !== Nd[Xd]) return Qd.c.Error("Not a babylon environment map"), null;
      let Wd, Fd = "";
      for (; Wd = Od.getUint8(md++);) Fd += String.fromCharCode(Wd);
      let Rd = JSON.parse(Fd);
      return Rd = Hd(Rd), Rd.binaryDataPosition = md, Rd.specular && (Rd.specular.lodGenerationScale = Rd.specular.lodGenerationScale || .8), Rd
    }

    function Hd(dd) {
      if (dd.version > 2) throw new Error(`Unsupported babylon environment map version "${dd.version}". Latest supported version is "2".`);
      return 2 === dd.version ? dd : dd = {
        ...dd,
        version: 2,
        imageType: od
      }
    }

    function yd(dd, Od) {
      const md = (Od = Hd(Od)).specular;
      let Wd = Math.log2(Od.width);
      if (Wd = Math.round(Wd) + 1, md.mipmaps.length !== 6 * Wd) throw new Error(`Unsupported specular mipmaps number "${md.mipmaps.length}"`);
      const Fd = new Array(Wd);
      for (let Rd = 0; Rd < Wd; Rd++) {
        Fd[Rd] = new Array(6);
        for (let Wd = 0; Wd < 6; Wd++) {
          const Xd = md.mipmaps[6 * Rd + Wd];
          Fd[Rd][Wd] = new Uint8Array(dd.buffer, dd.byteOffset + Od.binaryDataPosition + Xd.position, Xd.length)
        }
      }
      return Fd
    }

    function bd(dd, Od) {
      Od = Hd(Od);
      const md = new Array(6),
        Wd = Od.irradiance?.irradianceTexture;
      if (Wd) {
        if (6 !== Wd.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Wd.faces.length}"`);
        for (let Fd = 0; Fd < 6; Fd++) {
          const Rd = Wd.faces[Fd];
          md[Fd] = new Uint8Array(dd.buffer, dd.byteOffset + Od.binaryDataPosition + Rd.position, Rd.length)
        }
      }
      return md
    }

    function Td(dd, Od, md) {
      const Wd = (md = Hd(md)).specular;
      if (!Wd) return Promise.resolve([]);
      dd._lodGenerationScale = Wd.lodGenerationScale;
      const Rd = [],
        Xd = yd(Od, md);
      Rd.push(Yd(dd, Xd, md.imageType));
      const Kd = md.irradiance?.irradianceTexture;
      if (Kd) {
        const Wd = bd(Od, md);
        let Xd = null;
        md.irradiance?.irradianceTexture?.dominantDirection && (Xd = Fd.j.FromArray(md.irradiance.irradianceTexture.dominantDirection)), Rd.push(gd(dd, Wd, Kd.size, md.imageType, Xd))
      }
      return Promise.all(Rd)
    }
    async function pd(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
      return await new Promise(((td, od) => {
        if (md) {
          const md = Od.createTexture(null, !0, !0, null, 1, null, (dd => {
            od(dd)
          }), dd);
          Wd?.onEffectCreatedObservable.addOnce((Kd => {
            Kd.executeWhenCompiled((() => {
              Wd.externalTextureSamplerBinding = !0, Wd.onApply = Wd => {
                Wd._bindTexture("textureSampler", md), Wd.setFloat2("scale", 1, Od._features.needsInvertingBitmap && dd instanceof ImageBitmap ? -1 : 1)
              }, Od.scenes.length && (Od.scenes[0].postProcessManager.directRender([Wd], vd, !0, Rd, Xd), Od.restoreDefaultFramebuffer(), md.dispose(), URL.revokeObjectURL(Fd), td())
            }))
          }))
        } else {
          if (Od._uploadImageToTexture(Qd, dd, Rd, Xd), Kd) {
            const md = hd[Xd];
            md && Od._uploadImageToTexture(md._texture, dd, Rd, 0)
          }
          td()
        }
      }))
    }
    async function Yd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : od;
      const Wd = dd.Iq();
      dd.format = 5, dd.type = 0, dd.generateMipMaps = !0, dd._cachedAnisotropicFilteringLevel = null, Wd.updateTextureSamplingMode(3, dd), await wd(dd, Od, !0, md), dd.isReady = !0
    }
    async function gd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : od,
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Rd = dd.Iq(),
        Xd = new Kd.c(Rd, 5),
        vd = new hd.c(Rd, Xd);
      dd._irradianceTexture = vd, vd._dominantDirection = Fd, Xd.isCube = !0, Xd.format = 5, Xd.type = 0, Xd.generateMipMaps = !0, Xd._cachedAnisotropicFilteringLevel = null, Xd.generateMipMaps = !0, Xd.width = md, Xd.height = md, Rd.updateTextureSamplingMode(3, Xd), await wd(Xd, [Od], !1, Wd), Rd.generateMipMapsForCubemap(Xd), Xd.isReady = !0
    }
    async function wd(dd, Od, Fd) {
      let Xd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : od;
      if (!(0, Wd.i)(dd.width)) throw new Error("Texture size must be a power of two");
      const Qd = (0, Rd.ILog2)(dd.width) + 1,
        Nd = dd.Iq();
      let qd = !1,
        Hd = !1,
        yd = null,
        bd = null,
        Td = null;
      const Yd = Nd.getCaps();
      Yd.textureLOD ? Nd._features.supportRenderAndCopyToLodForFloatTextures ? Yd.textureHalfFloatRender && Yd.textureHalfFloatLinearFiltering ? (qd = !0, dd.type = 2) : Yd.textureFloatRender && Yd.textureFloatLinearFiltering && (qd = !0, dd.type = 1) : qd = !1 : (qd = !1, Hd = Fd);
      let gd = 0;
      if (qd) Nd.isWebGPU ? (gd = 1, await md.e(661).then((() => md(64889)))) : await md.e(643).then((() => md(64894))), yd = new vd.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Nd, !1, void 0, dd.type, void 0, null, !1, void 0, gd), dd._isRGBD = !1, dd.invertY = !1, bd = Nd.createRenderTargetCubeTexture(dd.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: dd.type,
        format: 5
      });
      else if (dd._isRGBD = !0, dd.invertY = !0, Hd) {
        const Od = 3;
        Td = {};
        const md = dd._lodGenerationScale,
          Wd = dd._lodGenerationOffset;
        for (let Fd = 0; Fd < Od; Fd++) {
          const Rd = (Qd - 1) * md + Wd,
            Xd = Wd + (Rd - Wd) * (1 - Fd / (Od - 1)),
            vd = Math.round(Math.min(Math.max(Xd, 0), Rd)),
            td = new Kd.c(Nd, 2);
          td.isCube = !0, td.invertY = !0, td.generateMipMaps = !1, Nd.updateTextureSamplingMode(2, td);
          const od = new hd.c(null);
          switch (od._isCube = !0, od._texture = td, Td[vd] = od, Fd) {
            case 0:
              dd._lodTextureLow = od;
              break;
            case 1:
              dd._lodTextureMid = od;
              break;
            case 2:
              dd._lodTextureHigh = od
          }
        }
      }
      const wd = [];
      for (let md = 0; md < Od.length; md++)
        for (let Wd = 0; Wd < 6; Wd++) {
          const Fd = Od[md][Wd],
            Rd = (0, td.m)(Fd),
            Kd = new Blob([Rd], {
              type: Xd
            }),
            hd = URL.createObjectURL(Kd);
          let vd;
          if (Nd._features.forceBitmapOverHTMLImageElement) vd = Nd.createImageBitmap(Kd, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async Od => await pd(Od, Nd, qd, yd, hd, Wd, md, Hd, Td, bd, dd)));
          else {
            const Od = new Image;
            Od.src = hd, vd = new Promise(((Fd, Rd) => {
              Od.onload = () => {
                pd(Od, Nd, qd, yd, hd, Wd, md, Hd, Td, bd, dd).then((() => Fd())).catch((dd => {
                  Rd(dd)
                }))
              }, Od.onerror = dd => {
                Rd(dd)
              }
            }))
          }
          wd.push(vd)
        }
      if (await Promise.all(wd), Od.length < Qd) {
        let md;
        const Wd = Math.pow(2, Qd - 1 - Od.length),
          Fd = Wd * Wd * 4;
        switch (dd.type) {
          case 0:
            md = new Uint8Array(Fd);
            break;
          case 2:
            md = new Uint16Array(Fd);
            break;
          case 1:
            md = new Float32Array(Fd)
        }
        for (let Rd = Od.length; Rd < Qd; Rd++)
          for (let Od = 0; Od < 6; Od++) Nd._uploadArrayBufferViewToTexture(bd?.texture || dd, md, Od, Rd)
      }
      if (bd) {
        const Od = dd._irradianceTexture;
        dd._irradianceTexture = null, Nd._releaseTexture(dd), bd._swapAndDie(dd), dd._irradianceTexture = Od
      }
      yd && yd.dispose(), Hd && (dd._lodTextureHigh && dd._lodTextureHigh._texture && (dd._lodTextureHigh._texture.isReady = !0), dd._lodTextureMid && dd._lodTextureMid._texture && (dd._lodTextureMid._texture.isReady = !0), dd._lodTextureLow && dd._lodTextureLow._texture && (dd._lodTextureLow._texture.isReady = !0))
    }

    function Ed(dd, Od) {
      const md = (Od = Hd(Od)).irradiance;
      if (!md) return;
      const Wd = new Xd.e;
      Fd.j.FromArrayToRef(md.x, 0, Wd.x), Fd.j.FromArrayToRef(md.y, 0, Wd.y), Fd.j.FromArrayToRef(md.z, 0, Wd.z), Fd.j.FromArrayToRef(md.xx, 0, Wd.xx), Fd.j.FromArrayToRef(md.yy, 0, Wd.yy), Fd.j.FromArrayToRef(md.zz, 0, Wd.zz), Fd.j.FromArrayToRef(md.yz, 0, Wd.yz), Fd.j.FromArrayToRef(md.zx, 0, Wd.zx), Fd.j.FromArrayToRef(md.xy, 0, Wd.xy), dd._sphericalPolynomial = Wd
    }
    var Jd = md(54247);
    class Ud {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(dd, Od, md, Wd, Fd) {
        if (Array.isArray(dd)) return;
        const Rd = qd(dd);
        if (Rd) {
          Od.width = Rd.width, Od.height = Rd.width;
          try {
            (0, Jd.e)(), Ed(Od, Rd), Td(Od, dd, Rd).then((() => {
              Od.isReady = !0, Od.onLoadedObservable.notifyObservers(Od), Od.onLoadedObservable.clear(), Wd && Wd()
            }), (dd => {
              Fd?.("Can not upload environment levels", dd)
            }))
          } catch (Xd) {
            Fd?.("Can not upload environment file", Xd)
          }
        } else Fd && Fd("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  54247: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd
    });
    var Wd = md(54193),
      Fd = md(41914);
    let Rd = !1;

    function Xd() {
      Rd || (Rd = !0, Fd.c.prototype._sphericalPolynomialTargetSize = 0, Fd.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Fd.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Wd.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((dd => {
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
  54193: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd
    });
    var Wd = md(38636),
      Fd = md(38663),
      Rd = md(41907),
      Xd = md(38644),
      Kd = md(38741);
    class hd {
      constructor(dd, Od, md, Wd) {
        this.name = dd, this.worldAxisForNormal = Od, this.worldAxisForFileX = md, this.worldAxisForFileY = Wd
      }
    }
    class vd {
      static _NearestPow2Floor(dd) {
        return dd <= 1 ? 1 : 1 << Math.floor(Math.log2(dd))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(dd) {
        if (!dd.isCube) return null;
        dd.zV()?.Iq().flushFramebuffer();
        const Od = dd.getSize().width,
          md = dd._sphericalPolynomialTargetSize,
          Wd = md > 0 ? this._NearestPow2Floor(md) : 0,
          Fd = !dd.noMipmap && !0 === dd._texture?.generateMipMaps,
          Rd = Wd > 0 && Wd < Od && Fd,
          Xd = Rd ? Math.max(0, Math.round(Math.log2(Od / Wd))) : 0,
          Kd = Rd ? Math.max(1, Math.floor(Od / Math.pow(2, Xd))) : Od,
          hd = dd.readPixels(0, Xd, void 0, !1),
          vd = dd.readPixels(1, Xd, void 0, !1);
        let Qd, td;
        dd.isRenderTarget ? (Qd = dd.readPixels(3, Xd, void 0, !1), td = dd.readPixels(2, Xd, void 0, !1)) : (Qd = dd.readPixels(2, Xd, void 0, !1), td = dd.readPixels(3, Xd, void 0, !1));
        const od = dd.readPixels(4, Xd, void 0, !1),
          Nd = dd.readPixels(5, Xd, void 0, !1),
          qd = dd.gammaSpace,
          Hd = Wd > 0 && Wd < Od && !Rd;
        return new Promise((dd => {
          Promise.all([vd, hd, Qd, td, od, Nd]).then((md => {
            let [Fd, Rd, Xd, hd, vd, Qd] = md, td = Kd;
            if (Hd) {
              const dd = 4;
              Fd = this._DownsampleFace(Fd, Od, Wd, dd), Rd = this._DownsampleFace(Rd, Od, Wd, dd), Xd = this._DownsampleFace(Xd, Od, Wd, dd), hd = this._DownsampleFace(hd, Od, Wd, dd), vd = this._DownsampleFace(vd, Od, Wd, dd), Qd = this._DownsampleFace(Qd, Od, Wd, dd), td = Wd
            }
            const od = {
              size: td,
              right: Rd,
              left: Fd,
              up: Xd,
              down: hd,
              front: vd,
              back: Qd,
              format: 5,
              type: Fd instanceof Float32Array ? 1 : 0,
              gammaSpace: qd
            };
            dd(this.ConvertCubeMapToSphericalPolynomial(od))
          }))
        }))
      }
      static _AreaElement(dd, Od) {
        return Math.atan2(dd * Od, Math.sqrt(dd * dd + Od * Od + 1))
      }
      static _DownsampleFace(dd, Od, md, Wd) {
        const Fd = dd instanceof Float32Array ? dd : Float32Array.from(dd),
          Rd = md * md * Wd,
          Xd = new Float32Array(Rd),
          Kd = Od / md,
          hd = 1 / (Kd * Kd);
        for (let Qd = 0; Qd < md; Qd++) {
          const dd = Math.floor(Qd * Kd),
            Rd = Math.floor((Qd + 1) * Kd);
          for (let vd = 0; vd < md; vd++) {
            const td = Math.floor(vd * Kd),
              od = Math.floor((vd + 1) * Kd),
              Nd = (Qd * md + vd) * Wd;
            for (let md = 0; md < Wd; md++) {
              let Kd = 0;
              for (let Xd = dd; Xd < Rd; Xd++)
                for (let dd = td; dd < od; dd++) Kd += Fd[(Xd * Od + dd) * Wd + md];
              Xd[Nd + md] = Kd * hd
            }
          }
        }
        if (dd instanceof Float32Array) return Xd;
        const vd = new(0, dd.constructor)(Rd);
        for (let Qd = 0; Qd < Rd; Qd++) vd[Qd] = Xd[Qd] + .5 | 0;
        return vd
      }
      static ConvertCubeMapToSphericalPolynomial(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const md = Od > 0 ? this._NearestPow2Floor(Od) : 0;
        if (md > 0 && dd.size > md) {
          const Od = 5 === dd.format ? 4 : 3,
            Wd = ["right", "left", "up", "down", "front", "back"],
            Fd = {};
          for (const Rd of Wd) Fd[Rd] = this._DownsampleFace(dd[Rd], dd.size, md, Od);
          dd = {
            ...dd,
            ...Fd,
            size: md
          }
        }
        const Wd = new Rd.c;
        let hd = 0;
        const vd = 2 / dd.size,
          Qd = vd,
          td = .5 * vd,
          od = td - 1;
        for (let Rd = 0; Rd < 6; Rd++) {
          const Od = this._FileFaces[Rd],
            md = dd[Od.name];
          let Nd = od;
          const qd = 5 === dd.format ? 4 : 3;
          for (let Rd = 0; Rd < dd.size; Rd++) {
            let Hd = od;
            for (let Qd = 0; Qd < dd.size; Qd++) {
              const od = Od.worldAxisForFileX.scale(Hd).add(Od.worldAxisForFileY.scale(Nd)).add(Od.worldAxisForNormal);
              od.normalize();
              const yd = this._AreaElement(Hd - td, Nd - td) - this._AreaElement(Hd - td, Nd + td) - this._AreaElement(Hd + td, Nd - td) + this._AreaElement(Hd + td, Nd + td);
              let bd = md[Rd * dd.size * qd + Qd * qd + 0],
                Td = md[Rd * dd.size * qd + Qd * qd + 1],
                pd = md[Rd * dd.size * qd + Qd * qd + 2];
              isNaN(bd) && (bd = 0), isNaN(Td) && (Td = 0), isNaN(pd) && (pd = 0), 0 === dd.type && (bd /= 255, Td /= 255, pd /= 255), dd.gammaSpace && (bd = Math.pow((0, Fd.Clamp)(bd), Xd.f), Td = Math.pow((0, Fd.Clamp)(Td), Xd.f), pd = Math.pow((0, Fd.Clamp)(pd), Xd.f));
              const Yd = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const dd = Math.max(bd, Td, pd);
                if (dd > Yd) {
                  const Od = Yd / dd;
                  bd *= Od, Td *= Od, pd *= Od
                }
              } else bd = (0, Fd.Clamp)(bd, 0, Yd), Td = (0, Fd.Clamp)(Td, 0, Yd), pd = (0, Fd.Clamp)(pd, 0, Yd);
              const gd = new Kd.d(bd, Td, pd);
              Wd.addLight(od, gd, yd), hd += yd, Hd += vd
            }
            Nd += Qd
          }
        }
        const Nd = 6 * (4 * Math.PI) / 6 / hd;
        return Wd.scaleInPlace(Nd), Wd.convertIncidentRadianceToIrradiance(), Wd.convertIrradianceToLambertianRadiance(), Rd.e.FromHarmonics(Wd)
      }
    }
    vd._FileFaces = [new hd("right", new Wd.j(1, 0, 0), new Wd.j(0, 0, -1), new Wd.j(0, -1, 0)), new hd("left", new Wd.j(-1, 0, 0), new Wd.j(0, 0, 1), new Wd.j(0, -1, 0)), new hd("up", new Wd.j(0, 1, 0), new Wd.j(1, 0, 0), new Wd.j(0, 0, 1)), new hd("down", new Wd.j(0, -1, 0), new Wd.j(1, 0, 0), new Wd.j(0, 0, -1)), new hd("front", new Wd.j(0, 0, 1), new Wd.j(1, 0, 0), new Wd.j(0, -1, 0)), new hd("back", new Wd.j(0, 0, -1), new Wd.j(-1, 0, 0), new Wd.j(0, -1, 0))], vd.MAX_HDRI_VALUE = 4096, vd.PRESERVE_CLAMPED_COLORS = !1
  },
  54227: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(54217),
      Fd = md(54229);
    class Rd {
      static ExpandRGBDTexture(dd) {
        const Od = dd._texture;
        if (!Od || !dd.isRGBD) return;
        const Fd = Od.Iq(),
          Rd = Fd.getCaps(),
          Xd = Od.isReady;
        let Kd = !1;
        Rd.textureHalfFloatRender && Rd.textureHalfFloatLinearFiltering ? (Kd = !0, Od.type = 2) : Rd.textureFloatRender && Rd.textureFloatLinearFiltering && (Kd = !0, Od.type = 1), Kd && (Od.isReady = !1, Od._isRGBD = !1, Od.invertY = !1);
        const hd = async () => {
          const Rd = Fd.isWebGPU,
            Xd = Rd ? 1 : 0;
          Od.isReady = !1, Rd ? await md.e(661).then((() => md(64889))) : await md.e(643).then((() => md(64894)));
          const Kd = new Wd.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Fd, !1, void 0, Od.type, void 0, null, !1, void 0, Xd);
          Kd.externalTextureSamplerBinding = !0;
          const hd = Fd.createRenderTargetTexture(Od.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Od.samplingMode,
            type: Od.type,
            format: 5
          });
          Kd.onEffectCreatedObservable.addOnce((md => {
            md.executeWhenCompiled((() => {
              Kd.onApply = dd => {
                dd._bindTexture("textureSampler", Od), dd.setFloat2("scale", 1, 1)
              }, dd.zV()?.postProcessManager.directRender([Kd], hd, !0), Fd.restoreDefaultFramebuffer(), Fd._releaseTexture(Od), Kd && Kd.dispose(), hd._swapAndDie(Od), Od.isReady = !0
            }))
          }))
        };
        Kd && (Xd ? hd() : dd.onLoadObservable.addOnce(hd))
      }
      static async EncodeTextureToRGBD(dd, Od) {
        let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Od.Iq().isWebGPU ? await md.e(662).then((() => md(64907))) : await md.e(644).then((() => md(64899))), await (0, Fd.e)("rgbdEncode", dd, Od, Wd, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);