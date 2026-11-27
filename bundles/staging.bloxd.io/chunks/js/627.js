export const id = 627;
export const ids = [627];
export const modules = {
  54322: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      _ENVTextureLoader: () => vr
    });
    var Zr = Qr(41818),
      Wr = Qr(38560),
      ar = Qr(38599),
      jr = Qr(41861),
      Ir = Qr(41731),
      fr = Qr(41865),
      Er = (Qr(41941), Qr(54330)),
      pr = Qr(40246),
      xr = (Qr(54344), Qr(54362), Qr(41919));
    const mr = "image/png",
      Nr = [134, 22, 135, 150, 246, 214, 150, 54];

    function Ur(rr) {
      const Sr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength);
      let Qr = 0;
      for (let jr = 0; jr < Nr.length; jr++)
        if (Sr.getUint8(Qr++) !== Nr[jr]) return pr.c.Error("Not a babylon environment map"), null;
      let Zr, Wr = "";
      for (; Zr = Sr.getUint8(Qr++);) Wr += String.fromCharCode(Zr);
      let ar = JSON.parse(Wr);
      return ar = tr(ar), ar.binaryDataPosition = Qr, ar.specular && (ar.specular.lodGenerationScale = ar.specular.lodGenerationScale || .8), ar
    }

    function tr(rr) {
      if (rr.version > 2) throw new Error(`Unsupported babylon environment map version "${rr.version}". Latest supported version is "2".`);
      return 2 === rr.version ? rr : rr = {
        ...rr,
        version: 2,
        imageType: mr
      }
    }

    function hr(rr, Sr) {
      const Qr = (Sr = tr(Sr)).specular;
      let Zr = Math.log2(Sr.width);
      if (Zr = Math.round(Zr) + 1, Qr.mipmaps.length !== 6 * Zr) throw new Error(`Unsupported specular mipmaps number "${Qr.mipmaps.length}"`);
      const Wr = new Array(Zr);
      for (let ar = 0; ar < Zr; ar++) {
        Wr[ar] = new Array(6);
        for (let Zr = 0; Zr < 6; Zr++) {
          const jr = Qr.mipmaps[6 * ar + Zr];
          Wr[ar][Zr] = new Uint8Array(rr.buffer, rr.byteOffset + Sr.binaryDataPosition + jr.position, jr.length)
        }
      }
      return Wr
    }

    function zr(rr, Sr) {
      Sr = tr(Sr);
      const Qr = new Array(6),
        Zr = Sr.irradiance?.irradianceTexture;
      if (Zr) {
        if (6 !== Zr.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Zr.faces.length}"`);
        for (let Wr = 0; Wr < 6; Wr++) {
          const ar = Zr.faces[Wr];
          Qr[Wr] = new Uint8Array(rr.buffer, rr.byteOffset + Sr.binaryDataPosition + ar.position, ar.length)
        }
      }
      return Qr
    }

    function Yr(rr, Sr, Qr) {
      const Zr = (Qr = tr(Qr)).specular;
      if (!Zr) return Promise.resolve([]);
      rr._lodGenerationScale = Zr.lodGenerationScale;
      const ar = [],
        jr = hr(Sr, Qr);
      ar.push(er(rr, jr, Qr.imageType));
      const Ir = Qr.irradiance?.irradianceTexture;
      if (Ir) {
        const Zr = zr(Sr, Qr);
        let jr = null;
        Qr.irradiance?.irradianceTexture?.dominantDirection && (jr = Wr.u.FromArray(Qr.irradiance.irradianceTexture.dominantDirection)), ar.push(Kr(rr, Zr, Ir.size, Qr.imageType, jr))
      }
      return Promise.all(ar)
    }
    async function nr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
      return await new Promise(((xr, mr) => {
        if (Qr) {
          const Qr = Sr.createTexture(null, !0, !0, null, 1, null, (rr => {
            mr(rr)
          }), rr);
          Zr?.onEffectCreatedObservable.addOnce((Ir => {
            Ir.executeWhenCompiled((() => {
              Zr.externalTextureSamplerBinding = !0, Zr.onApply = Zr => {
                Zr._bindTexture("textureSampler", Qr), Zr.setFloat2("scale", 1, Sr._features.needsInvertingBitmap && rr instanceof ImageBitmap ? -1 : 1)
              }, Sr.scenes.length && (Sr.scenes[0].postProcessManager.directRender([Zr], Er, !0, ar, jr), Sr.restoreDefaultFramebuffer(), Qr.dispose(), URL.revokeObjectURL(Wr), xr())
            }))
          }))
        } else {
          if (Sr._uploadImageToTexture(pr, rr, ar, jr), Ir) {
            const Qr = fr[jr];
            Qr && Sr._uploadImageToTexture(Qr._texture, rr, ar, 0)
          }
          xr()
        }
      }))
    }
    async function er(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mr;
      const Zr = rr.MU();
      rr.format = 5, rr.type = 0, rr.generateMipMaps = !0, rr._cachedAnisotropicFilteringLevel = null, Zr.updateTextureSamplingMode(3, rr), await yr(rr, Sr, !0, Qr), rr.isReady = !0
    }
    async function Kr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mr,
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const ar = rr.MU(),
        jr = new Ir.b(ar, 5),
        Er = new fr.b(ar, jr);
      rr._irradianceTexture = Er, Er._dominantDirection = Wr, jr.isCube = !0, jr.format = 5, jr.type = 0, jr.generateMipMaps = !0, jr._cachedAnisotropicFilteringLevel = null, jr.generateMipMaps = !0, jr.width = Qr, jr.height = Qr, ar.updateTextureSamplingMode(3, jr), await yr(jr, [Sr], !1, Zr), ar.generateMipMapsForCubemap(jr), jr.isReady = !0
    }
    async function yr(rr, Sr, Wr) {
      let jr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mr;
      if (!(0, Zr.l)(rr.width)) throw new Error("Texture size must be a power of two");
      const pr = (0, ar.ILog2)(rr.width) + 1,
        Nr = rr.MU();
      let Ur = !1,
        tr = !1,
        hr = null,
        zr = null,
        Yr = null;
      const er = Nr.getCaps();
      er.textureLOD ? Nr._features.supportRenderAndCopyToLodForFloatTextures ? er.textureHalfFloatRender && er.textureHalfFloatLinearFiltering ? (Ur = !0, rr.type = 2) : er.textureFloatRender && er.textureFloatLinearFiltering && (Ur = !0, rr.type = 1) : Ur = !1 : (Ur = !1, tr = Wr);
      let Kr = 0;
      if (Ur) Nr.isWebGPU ? (Kr = 1, await Qr.e(661).then((() => Qr(64736)))) : await Qr.e(643).then((() => Qr(64742))), hr = new Er.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Nr, !1, void 0, rr.type, void 0, null, !1, void 0, Kr), rr._isRGBD = !1, rr.invertY = !1, zr = Nr.createRenderTargetCubeTexture(rr.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: rr.type,
        format: 5
      });
      else if (rr._isRGBD = !0, rr.invertY = !0, tr) {
        const Sr = 3;
        Yr = {};
        const Qr = rr._lodGenerationScale,
          Zr = rr._lodGenerationOffset;
        for (let Wr = 0; Wr < Sr; Wr++) {
          const ar = (pr - 1) * Qr + Zr,
            jr = Zr + (ar - Zr) * (1 - Wr / (Sr - 1)),
            Er = Math.round(Math.min(Math.max(jr, 0), ar)),
            xr = new Ir.b(Nr, 2);
          xr.isCube = !0, xr.invertY = !0, xr.generateMipMaps = !1, Nr.updateTextureSamplingMode(2, xr);
          const mr = new fr.b(null);
          switch (mr._isCube = !0, mr._texture = xr, Yr[Er] = mr, Wr) {
            case 0:
              rr._lodTextureLow = mr;
              break;
            case 1:
              rr._lodTextureMid = mr;
              break;
            case 2:
              rr._lodTextureHigh = mr
          }
        }
      }
      const yr = [];
      for (let Qr = 0; Qr < Sr.length; Qr++)
        for (let Zr = 0; Zr < 6; Zr++) {
          const Wr = Sr[Qr][Zr],
            ar = (0, xr.h)(Wr),
            Ir = new Blob([ar], {
              type: jr
            }),
            fr = URL.createObjectURL(Ir);
          let Er;
          if (Nr._features.forceBitmapOverHTMLImageElement) Er = Nr.createImageBitmap(Ir, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async Sr => await nr(Sr, Nr, Ur, hr, fr, Zr, Qr, tr, Yr, zr, rr)));
          else {
            const Sr = new Image;
            Sr.src = fr, Er = new Promise(((Wr, ar) => {
              Sr.onload = () => {
                nr(Sr, Nr, Ur, hr, fr, Zr, Qr, tr, Yr, zr, rr).then((() => Wr())).catch((rr => {
                  ar(rr)
                }))
              }, Sr.onerror = rr => {
                ar(rr)
              }
            }))
          }
          yr.push(Er)
        }
      if (await Promise.all(yr), Sr.length < pr) {
        let Qr;
        const Zr = Math.pow(2, pr - 1 - Sr.length),
          Wr = Zr * Zr * 4;
        switch (rr.type) {
          case 0:
            Qr = new Uint8Array(Wr);
            break;
          case 2:
            Qr = new Uint16Array(Wr);
            break;
          case 1:
            Qr = new Float32Array(Wr)
        }
        for (let ar = Sr.length; ar < pr; ar++)
          for (let Sr = 0; Sr < 6; Sr++) Nr._uploadArrayBufferViewToTexture(zr?.texture || rr, Qr, Sr, ar)
      }
      if (zr) {
        const Sr = rr._irradianceTexture;
        rr._irradianceTexture = null, Nr._releaseTexture(rr), zr._swapAndDie(rr), rr._irradianceTexture = Sr
      }
      hr && hr.dispose(), tr && (rr._lodTextureHigh && rr._lodTextureHigh._texture && (rr._lodTextureHigh._texture.isReady = !0), rr._lodTextureMid && rr._lodTextureMid._texture && (rr._lodTextureMid._texture.isReady = !0), rr._lodTextureLow && rr._lodTextureLow._texture && (rr._lodTextureLow._texture.isReady = !0))
    }

    function Br(rr, Sr) {
      const Qr = (Sr = tr(Sr)).irradiance;
      if (!Qr) return;
      const Zr = new jr.d;
      Wr.u.FromArrayToRef(Qr.x, 0, Zr.x), Wr.u.FromArrayToRef(Qr.y, 0, Zr.y), Wr.u.FromArrayToRef(Qr.z, 0, Zr.z), Wr.u.FromArrayToRef(Qr.xx, 0, Zr.xx), Wr.u.FromArrayToRef(Qr.yy, 0, Zr.yy), Wr.u.FromArrayToRef(Qr.zz, 0, Zr.zz), Wr.u.FromArrayToRef(Qr.yz, 0, Zr.yz), Wr.u.FromArrayToRef(Qr.zx, 0, Zr.zx), Wr.u.FromArrayToRef(Qr.xy, 0, Zr.xy), rr._sphericalPolynomial = Zr
    }
    var Tr = Qr(54371);
    class vr {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(rr, Sr, Qr, Zr, Wr) {
        if (Array.isArray(rr)) return;
        const ar = Ur(rr);
        if (ar) {
          Sr.width = ar.width, Sr.height = ar.width;
          try {
            (0, Tr.c)(), Br(Sr, ar), Yr(Sr, rr, ar).then((() => {
              Sr.isReady = !0, Sr.onLoadedObservable.notifyObservers(Sr), Sr.onLoadedObservable.clear(), Zr && Zr()
            }), (rr => {
              Wr?.("Can not upload environment levels", rr)
            }))
          } catch (jr) {
            Wr?.("Can not upload environment file", jr)
          }
        } else Wr && Wr("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  54371: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(54310),
      Wr = Qr(41865);
    let ar = !1;

    function jr() {
      ar || (ar = !0, Wr.b.prototype._sphericalPolynomialTargetSize = 0, Wr.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Wr.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Zr.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((rr => {
              this._texture._sphericalPolynomial = rr, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(rr) {
          this._texture && (this._texture._sphericalPolynomial = rr)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  54310: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er
    });
    var Zr = Qr(38560),
      Wr = Qr(38599),
      ar = Qr(41861),
      jr = Qr(38569),
      Ir = Qr(38684);
    class fr {
      constructor(rr, Sr, Qr, Zr) {
        this.name = rr, this.worldAxisForNormal = Sr, this.worldAxisForFileX = Qr, this.worldAxisForFileY = Zr
      }
    }
    class Er {
      static _NearestPow2Floor(rr) {
        return rr <= 1 ? 1 : 1 << Math.floor(Math.log2(rr))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(rr) {
        if (!rr.isCube) return null;
        rr.eC()?.MU().flushFramebuffer();
        const Sr = rr.getSize().width,
          Qr = rr._sphericalPolynomialTargetSize,
          Zr = Qr > 0 ? this._NearestPow2Floor(Qr) : 0,
          Wr = !rr.noMipmap && !0 === rr._texture?.generateMipMaps,
          ar = Zr > 0 && Zr < Sr && Wr,
          jr = ar ? Math.max(0, Math.round(Math.log2(Sr / Zr))) : 0,
          Ir = ar ? Math.max(1, Math.floor(Sr / Math.pow(2, jr))) : Sr,
          fr = rr.readPixels(0, jr, void 0, !1),
          Er = rr.readPixels(1, jr, void 0, !1);
        let pr, xr;
        rr.isRenderTarget ? (pr = rr.readPixels(3, jr, void 0, !1), xr = rr.readPixels(2, jr, void 0, !1)) : (pr = rr.readPixels(2, jr, void 0, !1), xr = rr.readPixels(3, jr, void 0, !1));
        const mr = rr.readPixels(4, jr, void 0, !1),
          Nr = rr.readPixels(5, jr, void 0, !1),
          Ur = rr.gammaSpace,
          tr = Zr > 0 && Zr < Sr && !ar;
        return new Promise((rr => {
          Promise.all([Er, fr, pr, xr, mr, Nr]).then((Qr => {
            let [Wr, ar, jr, fr, Er, pr] = Qr, xr = Ir;
            if (tr) {
              const rr = 4;
              Wr = this._DownsampleFace(Wr, Sr, Zr, rr), ar = this._DownsampleFace(ar, Sr, Zr, rr), jr = this._DownsampleFace(jr, Sr, Zr, rr), fr = this._DownsampleFace(fr, Sr, Zr, rr), Er = this._DownsampleFace(Er, Sr, Zr, rr), pr = this._DownsampleFace(pr, Sr, Zr, rr), xr = Zr
            }
            const mr = {
              size: xr,
              right: ar,
              left: Wr,
              up: jr,
              down: fr,
              front: Er,
              back: pr,
              format: 5,
              type: Wr instanceof Float32Array ? 1 : 0,
              gammaSpace: Ur
            };
            rr(this.ConvertCubeMapToSphericalPolynomial(mr))
          }))
        }))
      }
      static _AreaElement(rr, Sr) {
        return Math.atan2(rr * Sr, Math.sqrt(rr * rr + Sr * Sr + 1))
      }
      static _DownsampleFace(rr, Sr, Qr, Zr) {
        const Wr = rr instanceof Float32Array ? rr : Float32Array.from(rr),
          ar = Qr * Qr * Zr,
          jr = new Float32Array(ar),
          Ir = Sr / Qr,
          fr = 1 / (Ir * Ir);
        for (let pr = 0; pr < Qr; pr++) {
          const rr = Math.floor(pr * Ir),
            ar = Math.floor((pr + 1) * Ir);
          for (let Er = 0; Er < Qr; Er++) {
            const xr = Math.floor(Er * Ir),
              mr = Math.floor((Er + 1) * Ir),
              Nr = (pr * Qr + Er) * Zr;
            for (let Qr = 0; Qr < Zr; Qr++) {
              let Ir = 0;
              for (let jr = rr; jr < ar; jr++)
                for (let rr = xr; rr < mr; rr++) Ir += Wr[(jr * Sr + rr) * Zr + Qr];
              jr[Nr + Qr] = Ir * fr
            }
          }
        }
        if (rr instanceof Float32Array) return jr;
        const Er = new(0, rr.constructor)(ar);
        for (let pr = 0; pr < ar; pr++) Er[pr] = jr[pr] + .5 | 0;
        return Er
      }
      static ConvertCubeMapToSphericalPolynomial(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Qr = Sr > 0 ? this._NearestPow2Floor(Sr) : 0;
        if (Qr > 0 && rr.size > Qr) {
          const Sr = 5 === rr.format ? 4 : 3,
            Zr = ["right", "left", "up", "down", "front", "back"],
            Wr = {};
          for (const ar of Zr) Wr[ar] = this._DownsampleFace(rr[ar], rr.size, Qr, Sr);
          rr = {
            ...rr,
            ...Wr,
            size: Qr
          }
        }
        const Zr = new ar.c;
        let fr = 0;
        const Er = 2 / rr.size,
          pr = Er,
          xr = .5 * Er,
          mr = xr - 1;
        for (let ar = 0; ar < 6; ar++) {
          const Sr = this._FileFaces[ar],
            Qr = rr[Sr.name];
          let Nr = mr;
          const Ur = 5 === rr.format ? 4 : 3;
          for (let ar = 0; ar < rr.size; ar++) {
            let tr = mr;
            for (let pr = 0; pr < rr.size; pr++) {
              const mr = Sr.worldAxisForFileX.scale(tr).add(Sr.worldAxisForFileY.scale(Nr)).add(Sr.worldAxisForNormal);
              mr.normalize();
              const hr = this._AreaElement(tr - xr, Nr - xr) - this._AreaElement(tr - xr, Nr + xr) - this._AreaElement(tr + xr, Nr - xr) + this._AreaElement(tr + xr, Nr + xr);
              let zr = Qr[ar * rr.size * Ur + pr * Ur + 0],
                Yr = Qr[ar * rr.size * Ur + pr * Ur + 1],
                nr = Qr[ar * rr.size * Ur + pr * Ur + 2];
              isNaN(zr) && (zr = 0), isNaN(Yr) && (Yr = 0), isNaN(nr) && (nr = 0), 0 === rr.type && (zr /= 255, Yr /= 255, nr /= 255), rr.gammaSpace && (zr = Math.pow((0, Wr.Clamp)(zr), jr.h), Yr = Math.pow((0, Wr.Clamp)(Yr), jr.h), nr = Math.pow((0, Wr.Clamp)(nr), jr.h));
              const er = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const rr = Math.max(zr, Yr, nr);
                if (rr > er) {
                  const Sr = er / rr;
                  zr *= Sr, Yr *= Sr, nr *= Sr
                }
              } else zr = (0, Wr.Clamp)(zr, 0, er), Yr = (0, Wr.Clamp)(Yr, 0, er), nr = (0, Wr.Clamp)(nr, 0, er);
              const Kr = new Ir.e(zr, Yr, nr);
              Zr.addLight(mr, Kr, hr), fr += hr, tr += Er
            }
            Nr += pr
          }
        }
        const Nr = 6 * (4 * Math.PI) / 6 / fr;
        return Zr.scaleInPlace(Nr), Zr.convertIncidentRadianceToIrradiance(), Zr.convertIrradianceToLambertianRadiance(), ar.d.FromHarmonics(Zr)
      }
    }
    Er._FileFaces = [new fr("right", new Zr.u(1, 0, 0), new Zr.u(0, 0, -1), new Zr.u(0, -1, 0)), new fr("left", new Zr.u(-1, 0, 0), new Zr.u(0, 0, 1), new Zr.u(0, -1, 0)), new fr("up", new Zr.u(0, 1, 0), new Zr.u(1, 0, 0), new Zr.u(0, 0, 1)), new fr("down", new Zr.u(0, -1, 0), new Zr.u(1, 0, 0), new Zr.u(0, 0, -1)), new fr("front", new Zr.u(0, 0, 1), new Zr.u(1, 0, 0), new Zr.u(0, -1, 0)), new fr("back", new Zr.u(0, 0, -1), new Zr.u(-1, 0, 0), new Zr.u(0, -1, 0))], Er.MAX_HDRI_VALUE = 4096, Er.PRESERVE_CLAMPED_COLORS = !1
  },
  54344: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(54330),
      Wr = Qr(54348);
    class ar {
      static ExpandRGBDTexture(rr) {
        const Sr = rr._texture;
        if (!Sr || !rr.isRGBD) return;
        const Wr = Sr.MU(),
          ar = Wr.getCaps(),
          jr = Sr.isReady;
        let Ir = !1;
        ar.textureHalfFloatRender && ar.textureHalfFloatLinearFiltering ? (Ir = !0, Sr.type = 2) : ar.textureFloatRender && ar.textureFloatLinearFiltering && (Ir = !0, Sr.type = 1), Ir && (Sr.isReady = !1, Sr._isRGBD = !1, Sr.invertY = !1);
        const fr = async () => {
          const ar = Wr.isWebGPU,
            jr = ar ? 1 : 0;
          Sr.isReady = !1, ar ? await Qr.e(661).then((() => Qr(64736))) : await Qr.e(643).then((() => Qr(64742)));
          const Ir = new Zr.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Wr, !1, void 0, Sr.type, void 0, null, !1, void 0, jr);
          Ir.externalTextureSamplerBinding = !0;
          const fr = Wr.createRenderTargetTexture(Sr.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Sr.samplingMode,
            type: Sr.type,
            format: 5
          });
          Ir.onEffectCreatedObservable.addOnce((Qr => {
            Qr.executeWhenCompiled((() => {
              Ir.onApply = rr => {
                rr._bindTexture("textureSampler", Sr), rr.setFloat2("scale", 1, 1)
              }, rr.eC()?.postProcessManager.directRender([Ir], fr, !0), Wr.restoreDefaultFramebuffer(), Wr._releaseTexture(Sr), Ir && Ir.dispose(), fr._swapAndDie(Sr), Sr.isReady = !0
            }))
          }))
        };
        Ir && (jr ? fr() : rr.onLoadObservable.addOnce(fr))
      }
      static async EncodeTextureToRGBD(rr, Sr) {
        let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Sr.MU().isWebGPU ? await Qr.e(662).then((() => Qr(64756))) : await Qr.e(644).then((() => Qr(64750))), await (0, Wr.d)("rgbdEncode", rr, Sr, Zr, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);