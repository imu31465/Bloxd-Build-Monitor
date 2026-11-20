export const id = 298;
export const ids = [298];
export const modules = {
  40902: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      _ENVTextureLoader: () => Iz
    });
    var Fz = sz(39111),
      Wz = sz(36475),
      Xz = sz(36507),
      Oz = sz(39155),
      oz = sz(39021),
      vz = sz(39163),
      Uz = (sz(39256), sz(40909)),
      Kz = sz(38097),
      uz = (sz(40921), sz(40945), sz(39231));
    const Nz = "image/png",
      bz = [134, 22, 135, 150, 246, 214, 150, 54];

    function wz(zz) {
      const tz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      let sz = 0;
      for (let Oz = 0; Oz < bz.length; Oz++)
        if (tz.getUint8(sz++) !== bz[Oz]) return Kz.e.Error("Not a babylon environment map"), null;
      let Fz, Wz = "";
      for (; Fz = tz.getUint8(sz++);) Wz += String.fromCharCode(Fz);
      let Xz = JSON.parse(Wz);
      return Xz = Dz(Xz), Xz.binaryDataPosition = sz, Xz.specular && (Xz.specular.lodGenerationScale = Xz.specular.lodGenerationScale || .8), Xz
    }

    function Dz(zz) {
      if (zz.version > 2) throw new Error(`Unsupported babylon environment map version "${zz.version}". Latest supported version is "2".`);
      return 2 === zz.version ? zz : zz = {
        ...zz,
        version: 2,
        imageType: Nz
      }
    }

    function gz(zz, tz) {
      const sz = (tz = Dz(tz)).specular;
      let Fz = Math.log2(tz.width);
      if (Fz = Math.round(Fz) + 1, sz.mipmaps.length !== 6 * Fz) throw new Error(`Unsupported specular mipmaps number "${sz.mipmaps.length}"`);
      const Wz = new Array(Fz);
      for (let Xz = 0; Xz < Fz; Xz++) {
        Wz[Xz] = new Array(6);
        for (let Fz = 0; Fz < 6; Fz++) {
          const Oz = sz.mipmaps[6 * Xz + Fz];
          Wz[Xz][Fz] = new Uint8Array(zz.buffer, zz.byteOffset + tz.binaryDataPosition + Oz.position, Oz.length)
        }
      }
      return Wz
    }

    function Hz(zz, tz) {
      tz = Dz(tz);
      const sz = new Array(6),
        Fz = tz.irradiance?.irradianceTexture;
      if (Fz) {
        if (6 !== Fz.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Fz.faces.length}"`);
        for (let Wz = 0; Wz < 6; Wz++) {
          const Xz = Fz.faces[Wz];
          sz[Wz] = new Uint8Array(zz.buffer, zz.byteOffset + tz.binaryDataPosition + Xz.position, Xz.length)
        }
      }
      return sz
    }

    function Bz(zz, tz, sz) {
      const Fz = (sz = Dz(sz)).specular;
      if (!Fz) return Promise.resolve([]);
      zz._lodGenerationScale = Fz.lodGenerationScale;
      const Xz = [],
        Oz = gz(tz, sz);
      Xz.push(rz(zz, Oz, sz.imageType));
      const oz = sz.irradiance?.irradianceTexture;
      if (oz) {
        const Fz = Hz(tz, sz);
        let Oz = null;
        sz.irradiance?.irradianceTexture?.dominantDirection && (Oz = Wz.p.FromArray(sz.irradiance.irradianceTexture.dominantDirection)), Xz.push(Yz(zz, Fz, oz.size, sz.imageType, Oz))
      }
      return Promise.all(Xz)
    }
    async function Pz(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz) {
      return await new Promise(((uz, Nz) => {
        if (sz) {
          const sz = tz.createTexture(null, !0, !0, null, 1, null, (zz => {
            Nz(zz)
          }), zz);
          Fz?.onEffectCreatedObservable.addOnce((oz => {
            oz.executeWhenCompiled((() => {
              Fz.externalTextureSamplerBinding = !0, Fz.onApply = Fz => {
                Fz._bindTexture("textureSampler", sz), Fz.setFloat2("scale", 1, tz._features.needsInvertingBitmap && zz instanceof ImageBitmap ? -1 : 1)
              }, tz.scenes.length && (tz.scenes[0].postProcessManager.directRender([Fz], Uz, !0, Xz, Oz), tz.restoreDefaultFramebuffer(), sz.dispose(), URL.revokeObjectURL(Wz), uz())
            }))
          }))
        } else {
          if (tz._uploadImageToTexture(Kz, zz, Xz, Oz), oz) {
            const sz = vz[Oz];
            sz && tz._uploadImageToTexture(sz._texture, zz, Xz, 0)
          }
          uz()
        }
      }))
    }
    async function rz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nz;
      const Fz = zz.FD();
      zz.format = 5, zz.type = 0, zz.generateMipMaps = !0, zz._cachedAnisotropicFilteringLevel = null, Fz.updateTextureSamplingMode(3, zz), await xz(zz, tz, !0, sz), zz.isReady = !0
    }
    async function Yz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Nz,
        Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const Xz = zz.FD(),
        Oz = new oz.d(Xz, 5),
        Uz = new vz.b(Xz, Oz);
      zz._irradianceTexture = Uz, Uz._dominantDirection = Wz, Oz.isCube = !0, Oz.format = 5, Oz.type = 0, Oz.generateMipMaps = !0, Oz._cachedAnisotropicFilteringLevel = null, Oz.generateMipMaps = !0, Oz.width = sz, Oz.height = sz, Xz.updateTextureSamplingMode(3, Oz), await xz(Oz, [tz], !1, Fz), Xz.generateMipMapsForCubemap(Oz), Oz.isReady = !0
    }
    async function xz(zz, tz, Wz) {
      let Oz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Nz;
      if (!(0, Fz.g)(zz.width)) throw new Error("Texture size must be a power of two");
      const Kz = (0, Xz.ILog2)(zz.width) + 1,
        bz = zz.FD();
      let wz = !1,
        Dz = !1,
        gz = null,
        Hz = null,
        Bz = null;
      const rz = bz.getCaps();
      rz.textureLOD ? bz._features.supportRenderAndCopyToLodForFloatTextures ? rz.textureHalfFloatRender && rz.textureHalfFloatLinearFiltering ? (wz = !0, zz.type = 2) : rz.textureFloatRender && rz.textureFloatLinearFiltering && (wz = !0, zz.type = 1) : wz = !1 : (wz = !1, Dz = Wz);
      let Yz = 0;
      if (wz) bz.isWebGPU ? (Yz = 1, await sz.e(332).then((() => sz(60550)))) : await sz.e(314).then((() => sz(60558))), gz = new Uz.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, bz, !1, void 0, zz.type, void 0, null, !1, void 0, Yz), zz._isRGBD = !1, zz.invertY = !1, Hz = bz.createRenderTargetCubeTexture(zz.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: zz.type,
        format: 5
      });
      else if (zz._isRGBD = !0, zz.invertY = !0, Dz) {
        const tz = 3;
        Bz = {};
        const sz = zz._lodGenerationScale,
          Fz = zz._lodGenerationOffset;
        for (let Wz = 0; Wz < tz; Wz++) {
          const Xz = (Kz - 1) * sz + Fz,
            Oz = Fz + (Xz - Fz) * (1 - Wz / (tz - 1)),
            Uz = Math.round(Math.min(Math.max(Oz, 0), Xz)),
            uz = new oz.d(bz, 2);
          uz.isCube = !0, uz.invertY = !0, uz.generateMipMaps = !1, bz.updateTextureSamplingMode(2, uz);
          const Nz = new vz.b(null);
          switch (Nz._isCube = !0, Nz._texture = uz, Bz[Uz] = Nz, Wz) {
            case 0:
              zz._lodTextureLow = Nz;
              break;
            case 1:
              zz._lodTextureMid = Nz;
              break;
            case 2:
              zz._lodTextureHigh = Nz
          }
        }
      }
      const xz = [];
      for (let sz = 0; sz < tz.length; sz++)
        for (let Fz = 0; Fz < 6; Fz++) {
          const Wz = tz[sz][Fz],
            Xz = (0, uz.n)(Wz),
            oz = new Blob([Xz], {
              type: Oz
            }),
            vz = URL.createObjectURL(oz);
          let Uz;
          if (bz._features.forceBitmapOverHTMLImageElement) Uz = bz.createImageBitmap(oz, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async tz => await Pz(tz, bz, wz, gz, vz, Fz, sz, Dz, Bz, Hz, zz)));
          else {
            const tz = new Image;
            tz.src = vz, Uz = new Promise(((Wz, Xz) => {
              tz.onload = () => {
                Pz(tz, bz, wz, gz, vz, Fz, sz, Dz, Bz, Hz, zz).then((() => Wz())).catch((zz => {
                  Xz(zz)
                }))
              }, tz.onerror = zz => {
                Xz(zz)
              }
            }))
          }
          xz.push(Uz)
        }
      if (await Promise.all(xz), tz.length < Kz) {
        let sz;
        const Fz = Math.pow(2, Kz - 1 - tz.length),
          Wz = Fz * Fz * 4;
        switch (zz.type) {
          case 0:
            sz = new Uint8Array(Wz);
            break;
          case 2:
            sz = new Uint16Array(Wz);
            break;
          case 1:
            sz = new Float32Array(Wz)
        }
        for (let Xz = tz.length; Xz < Kz; Xz++)
          for (let tz = 0; tz < 6; tz++) bz._uploadArrayBufferViewToTexture(Hz?.texture || zz, sz, tz, Xz)
      }
      if (Hz) {
        const tz = zz._irradianceTexture;
        zz._irradianceTexture = null, bz._releaseTexture(zz), Hz._swapAndDie(zz), zz._irradianceTexture = tz
      }
      gz && gz.dispose(), Dz && (zz._lodTextureHigh && zz._lodTextureHigh._texture && (zz._lodTextureHigh._texture.isReady = !0), zz._lodTextureMid && zz._lodTextureMid._texture && (zz._lodTextureMid._texture.isReady = !0), zz._lodTextureLow && zz._lodTextureLow._texture && (zz._lodTextureLow._texture.isReady = !0))
    }

    function mz(zz, tz) {
      const sz = (tz = Dz(tz)).irradiance;
      if (!sz) return;
      const Fz = new Oz.g;
      Wz.p.FromArrayToRef(sz.x, 0, Fz.x), Wz.p.FromArrayToRef(sz.y, 0, Fz.y), Wz.p.FromArrayToRef(sz.z, 0, Fz.z), Wz.p.FromArrayToRef(sz.xx, 0, Fz.xx), Wz.p.FromArrayToRef(sz.yy, 0, Fz.yy), Wz.p.FromArrayToRef(sz.zz, 0, Fz.zz), Wz.p.FromArrayToRef(sz.yz, 0, Fz.yz), Wz.p.FromArrayToRef(sz.zx, 0, Fz.zx), Wz.p.FromArrayToRef(sz.xy, 0, Fz.xy), zz._sphericalPolynomial = Fz
    }
    var Jz = sz(40950);
    class Iz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(zz, tz, sz, Fz, Wz) {
        if (Array.isArray(zz)) return;
        const Xz = wz(zz);
        if (Xz) {
          tz.width = Xz.width, tz.height = Xz.width;
          try {
            (0, Jz.d)(), mz(tz, Xz), Bz(tz, zz, Xz).then((() => {
              tz.isReady = !0, tz.onLoadedObservable.notifyObservers(tz), tz.onLoadedObservable.clear(), Fz && Fz()
            }), (zz => {
              Wz?.("Can not upload environment levels", zz)
            }))
          } catch (Oz) {
            Wz?.("Can not upload environment file", Oz)
          }
        } else Wz && Wz("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  40950: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz
    });
    var Fz = sz(40872),
      Wz = sz(39163);
    let Xz = !1;

    function Oz() {
      Xz || (Xz = !0, Wz.b.prototype._sphericalPolynomialTargetSize = 0, Wz.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Wz.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Fz.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((zz => {
              this._texture._sphericalPolynomial = zz, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(zz) {
          this._texture && (this._texture._sphericalPolynomial = zz)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  40872: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Uz
    });
    var Fz = sz(36475),
      Wz = sz(36507),
      Xz = sz(39155),
      Oz = sz(36479),
      oz = sz(36654);
    class vz {
      constructor(zz, tz, sz, Fz) {
        this.name = zz, this.worldAxisForNormal = tz, this.worldAxisForFileX = sz, this.worldAxisForFileY = Fz
      }
    }
    class Uz {
      static _NearestPow2Floor(zz) {
        return zz <= 1 ? 1 : 1 << Math.floor(Math.log2(zz))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(zz) {
        if (!zz.isCube) return null;
        zz.aJ()?.FD().flushFramebuffer();
        const tz = zz.getSize().width,
          sz = zz._sphericalPolynomialTargetSize,
          Fz = sz > 0 ? this._NearestPow2Floor(sz) : 0,
          Wz = !zz.noMipmap && !0 === zz._texture?.generateMipMaps,
          Xz = Fz > 0 && Fz < tz && Wz,
          Oz = Xz ? Math.max(0, Math.round(Math.log2(tz / Fz))) : 0,
          oz = Xz ? Math.max(1, Math.floor(tz / Math.pow(2, Oz))) : tz,
          vz = zz.readPixels(0, Oz, void 0, !1),
          Uz = zz.readPixels(1, Oz, void 0, !1);
        let Kz, uz;
        zz.isRenderTarget ? (Kz = zz.readPixels(3, Oz, void 0, !1), uz = zz.readPixels(2, Oz, void 0, !1)) : (Kz = zz.readPixels(2, Oz, void 0, !1), uz = zz.readPixels(3, Oz, void 0, !1));
        const Nz = zz.readPixels(4, Oz, void 0, !1),
          bz = zz.readPixels(5, Oz, void 0, !1),
          wz = zz.gammaSpace,
          Dz = Fz > 0 && Fz < tz && !Xz;
        return new Promise((zz => {
          Promise.all([Uz, vz, Kz, uz, Nz, bz]).then((sz => {
            let [Wz, Xz, Oz, vz, Uz, Kz] = sz, uz = oz;
            if (Dz) {
              const zz = 4;
              Wz = this._DownsampleFace(Wz, tz, Fz, zz), Xz = this._DownsampleFace(Xz, tz, Fz, zz), Oz = this._DownsampleFace(Oz, tz, Fz, zz), vz = this._DownsampleFace(vz, tz, Fz, zz), Uz = this._DownsampleFace(Uz, tz, Fz, zz), Kz = this._DownsampleFace(Kz, tz, Fz, zz), uz = Fz
            }
            const Nz = {
              size: uz,
              right: Xz,
              left: Wz,
              up: Oz,
              down: vz,
              front: Uz,
              back: Kz,
              format: 5,
              type: Wz instanceof Float32Array ? 1 : 0,
              gammaSpace: wz
            };
            zz(this.ConvertCubeMapToSphericalPolynomial(Nz))
          }))
        }))
      }
      static _AreaElement(zz, tz) {
        return Math.atan2(zz * tz, Math.sqrt(zz * zz + tz * tz + 1))
      }
      static _DownsampleFace(zz, tz, sz, Fz) {
        const Wz = zz instanceof Float32Array ? zz : Float32Array.from(zz),
          Xz = sz * sz * Fz,
          Oz = new Float32Array(Xz),
          oz = tz / sz,
          vz = 1 / (oz * oz);
        for (let Kz = 0; Kz < sz; Kz++) {
          const zz = Math.floor(Kz * oz),
            Xz = Math.floor((Kz + 1) * oz);
          for (let Uz = 0; Uz < sz; Uz++) {
            const uz = Math.floor(Uz * oz),
              Nz = Math.floor((Uz + 1) * oz),
              bz = (Kz * sz + Uz) * Fz;
            for (let sz = 0; sz < Fz; sz++) {
              let oz = 0;
              for (let Oz = zz; Oz < Xz; Oz++)
                for (let zz = uz; zz < Nz; zz++) oz += Wz[(Oz * tz + zz) * Fz + sz];
              Oz[bz + sz] = oz * vz
            }
          }
        }
        if (zz instanceof Float32Array) return Oz;
        const Uz = new(0, zz.constructor)(Xz);
        for (let Kz = 0; Kz < Xz; Kz++) Uz[Kz] = Oz[Kz] + .5 | 0;
        return Uz
      }
      static ConvertCubeMapToSphericalPolynomial(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sz = tz > 0 ? this._NearestPow2Floor(tz) : 0;
        if (sz > 0 && zz.size > sz) {
          const tz = 5 === zz.format ? 4 : 3,
            Fz = ["right", "left", "up", "down", "front", "back"],
            Wz = {};
          for (const Xz of Fz) Wz[Xz] = this._DownsampleFace(zz[Xz], zz.size, sz, tz);
          zz = {
            ...zz,
            ...Wz,
            size: sz
          }
        }
        const Fz = new Xz.d;
        let vz = 0;
        const Uz = 2 / zz.size,
          Kz = Uz,
          uz = .5 * Uz,
          Nz = uz - 1;
        for (let Xz = 0; Xz < 6; Xz++) {
          const tz = this._FileFaces[Xz],
            sz = zz[tz.name];
          let bz = Nz;
          const wz = 5 === zz.format ? 4 : 3;
          for (let Xz = 0; Xz < zz.size; Xz++) {
            let Dz = Nz;
            for (let Kz = 0; Kz < zz.size; Kz++) {
              const Nz = tz.worldAxisForFileX.scale(Dz).add(tz.worldAxisForFileY.scale(bz)).add(tz.worldAxisForNormal);
              Nz.normalize();
              const gz = this._AreaElement(Dz - uz, bz - uz) - this._AreaElement(Dz - uz, bz + uz) - this._AreaElement(Dz + uz, bz - uz) + this._AreaElement(Dz + uz, bz + uz);
              let Hz = sz[Xz * zz.size * wz + Kz * wz + 0],
                Bz = sz[Xz * zz.size * wz + Kz * wz + 1],
                Pz = sz[Xz * zz.size * wz + Kz * wz + 2];
              isNaN(Hz) && (Hz = 0), isNaN(Bz) && (Bz = 0), isNaN(Pz) && (Pz = 0), 0 === zz.type && (Hz /= 255, Bz /= 255, Pz /= 255), zz.gammaSpace && (Hz = Math.pow((0, Wz.Clamp)(Hz), Oz.i), Bz = Math.pow((0, Wz.Clamp)(Bz), Oz.i), Pz = Math.pow((0, Wz.Clamp)(Pz), Oz.i));
              const rz = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const zz = Math.max(Hz, Bz, Pz);
                if (zz > rz) {
                  const tz = rz / zz;
                  Hz *= tz, Bz *= tz, Pz *= tz
                }
              } else Hz = (0, Wz.Clamp)(Hz, 0, rz), Bz = (0, Wz.Clamp)(Bz, 0, rz), Pz = (0, Wz.Clamp)(Pz, 0, rz);
              const Yz = new oz.c(Hz, Bz, Pz);
              Fz.addLight(Nz, Yz, gz), vz += gz, Dz += Uz
            }
            bz += Kz
          }
        }
        const bz = 6 * (4 * Math.PI) / 6 / vz;
        return Fz.scaleInPlace(bz), Fz.convertIncidentRadianceToIrradiance(), Fz.convertIrradianceToLambertianRadiance(), Xz.g.FromHarmonics(Fz)
      }
    }
    Uz._FileFaces = [new vz("right", new Fz.p(1, 0, 0), new Fz.p(0, 0, -1), new Fz.p(0, -1, 0)), new vz("left", new Fz.p(-1, 0, 0), new Fz.p(0, 0, 1), new Fz.p(0, -1, 0)), new vz("up", new Fz.p(0, 1, 0), new Fz.p(1, 0, 0), new Fz.p(0, 0, 1)), new vz("down", new Fz.p(0, -1, 0), new Fz.p(1, 0, 0), new Fz.p(0, 0, -1)), new vz("front", new Fz.p(0, 0, 1), new Fz.p(1, 0, 0), new Fz.p(0, -1, 0)), new vz("back", new Fz.p(0, 0, -1), new Fz.p(-1, 0, 0), new Fz.p(0, -1, 0))], Uz.MAX_HDRI_VALUE = 4096, Uz.PRESERVE_CLAMPED_COLORS = !1
  },
  40921: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(40909),
      Wz = sz(40928);
    class Xz {
      static ExpandRGBDTexture(zz) {
        const tz = zz._texture;
        if (!tz || !zz.isRGBD) return;
        const Wz = tz.FD(),
          Xz = Wz.getCaps(),
          Oz = tz.isReady;
        let oz = !1;
        Xz.textureHalfFloatRender && Xz.textureHalfFloatLinearFiltering ? (oz = !0, tz.type = 2) : Xz.textureFloatRender && Xz.textureFloatLinearFiltering && (oz = !0, tz.type = 1), oz && (tz.isReady = !1, tz._isRGBD = !1, tz.invertY = !1);
        const vz = async () => {
          const Xz = Wz.isWebGPU,
            Oz = Xz ? 1 : 0;
          tz.isReady = !1, Xz ? await sz.e(332).then((() => sz(60550))) : await sz.e(314).then((() => sz(60558)));
          const oz = new Fz.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Wz, !1, void 0, tz.type, void 0, null, !1, void 0, Oz);
          oz.externalTextureSamplerBinding = !0;
          const vz = Wz.createRenderTargetTexture(tz.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: tz.samplingMode,
            type: tz.type,
            format: 5
          });
          oz.onEffectCreatedObservable.addOnce((sz => {
            sz.executeWhenCompiled((() => {
              oz.onApply = zz => {
                zz._bindTexture("textureSampler", tz), zz.setFloat2("scale", 1, 1)
              }, zz.aJ()?.postProcessManager.directRender([oz], vz, !0), Wz.restoreDefaultFramebuffer(), Wz._releaseTexture(tz), oz && oz.dispose(), vz._swapAndDie(tz), tz.isReady = !0
            }))
          }))
        };
        oz && (Oz ? vz() : zz.onLoadObservable.addOnce(vz))
      }
      static async EncodeTextureToRGBD(zz, tz) {
        let Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return tz.FD().isWebGPU ? await sz.e(333).then((() => sz(60573))) : await sz.e(315).then((() => sz(60567))), await (0, Wz.b)("rgbdEncode", zz, tz, Fz, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);