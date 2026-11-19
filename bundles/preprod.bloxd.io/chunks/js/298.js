export const id = 298;
export const ids = [298];
export const modules = {
  40996: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      _ENVTextureLoader: () => xz
    });
    var Ez = bz(39118),
      nz = bz(36519),
      iz = bz(36553),
      lz = bz(39164),
      Mz = bz(39011),
      tz = bz(39167),
      Hz = (bz(39253), bz(41e3)),
      Oz = bz(38060),
      pz = (bz(41012), bz(41031), bz(39226));
    const dz = "image/png",
      Fz = [134, 22, 135, 150, 246, 214, 150, 54];

    function Zz(zz) {
      const uz = new DataView(zz.buffer, zz.byteOffset, zz.byteLength);
      let bz = 0;
      for (let lz = 0; lz < Fz.length; lz++)
        if (uz.getUint8(bz++) !== Fz[lz]) return Oz.e.Error("Not a babylon environment map"), null;
      let Ez, nz = "";
      for (; Ez = uz.getUint8(bz++);) nz += String.fromCharCode(Ez);
      let iz = JSON.parse(nz);
      return iz = Rz(iz), iz.binaryDataPosition = bz, iz.specular && (iz.specular.lodGenerationScale = iz.specular.lodGenerationScale || .8), iz
    }

    function Rz(zz) {
      if (zz.version > 2) throw new Error(`Unsupported babylon environment map version "${zz.version}". Latest supported version is "2".`);
      return 2 === zz.version ? zz : zz = {
        ...zz,
        version: 2,
        imageType: dz
      }
    }

    function Kz(zz, uz) {
      const bz = (uz = Rz(uz)).specular;
      let Ez = Math.log2(uz.width);
      if (Ez = Math.round(Ez) + 1, bz.mipmaps.length !== 6 * Ez) throw new Error(`Unsupported specular mipmaps number "${bz.mipmaps.length}"`);
      const nz = new Array(Ez);
      for (let iz = 0; iz < Ez; iz++) {
        nz[iz] = new Array(6);
        for (let Ez = 0; Ez < 6; Ez++) {
          const lz = bz.mipmaps[6 * iz + Ez];
          nz[iz][Ez] = new Uint8Array(zz.buffer, zz.byteOffset + uz.binaryDataPosition + lz.position, lz.length)
        }
      }
      return nz
    }

    function wz(zz, uz) {
      uz = Rz(uz);
      const bz = new Array(6),
        Ez = uz.irradiance?.irradianceTexture;
      if (Ez) {
        if (6 !== Ez.faces.length) throw new Error(`Incorrect irradiance texture faces number "${Ez.faces.length}"`);
        for (let nz = 0; nz < 6; nz++) {
          const iz = Ez.faces[nz];
          bz[nz] = new Uint8Array(zz.buffer, zz.byteOffset + uz.binaryDataPosition + iz.position, iz.length)
        }
      }
      return bz
    }

    function Xz(zz, uz, bz) {
      const Ez = (bz = Rz(bz)).specular;
      if (!Ez) return Promise.resolve([]);
      zz._lodGenerationScale = Ez.lodGenerationScale;
      const iz = [],
        lz = Kz(uz, bz);
      iz.push(sz(zz, lz, bz.imageType));
      const Mz = bz.irradiance?.irradianceTexture;
      if (Mz) {
        const Ez = wz(uz, bz);
        let lz = null;
        bz.irradiance?.irradianceTexture?.dominantDirection && (lz = nz.n.FromArray(bz.irradiance.irradianceTexture.dominantDirection)), iz.push(rz(zz, Ez, Mz.size, bz.imageType, lz))
      }
      return Promise.all(iz)
    }
    async function fz(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz) {
      return await new Promise(((pz, dz) => {
        if (bz) {
          const bz = uz.createTexture(null, !0, !0, null, 1, null, (zz => {
            dz(zz)
          }), zz);
          Ez?.onEffectCreatedObservable.addOnce((Mz => {
            Mz.executeWhenCompiled((() => {
              Ez.externalTextureSamplerBinding = !0, Ez.onApply = Ez => {
                Ez._bindTexture("textureSampler", bz), Ez.setFloat2("scale", 1, uz._features.needsInvertingBitmap && zz instanceof ImageBitmap ? -1 : 1)
              }, uz.scenes.length && (uz.scenes[0].postProcessManager.directRender([Ez], Hz, !0, iz, lz), uz.restoreDefaultFramebuffer(), bz.dispose(), URL.revokeObjectURL(nz), pz())
            }))
          }))
        } else {
          if (uz._uploadImageToTexture(Oz, zz, iz, lz), Mz) {
            const bz = tz[lz];
            bz && uz._uploadImageToTexture(bz._texture, zz, iz, 0)
          }
          pz()
        }
      }))
    }
    async function sz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dz;
      const Ez = zz.uR();
      zz.format = 5, zz.type = 0, zz.generateMipMaps = !0, zz._cachedAnisotropicFilteringLevel = null, Ez.updateTextureSamplingMode(3, zz), await oz(zz, uz, !0, bz), zz.isReady = !0
    }
    async function rz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dz,
        nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
      const iz = zz.uR(),
        lz = new Mz.c(iz, 5),
        Hz = new tz.b(iz, lz);
      zz._irradianceTexture = Hz, Hz._dominantDirection = nz, lz.isCube = !0, lz.format = 5, lz.type = 0, lz.generateMipMaps = !0, lz._cachedAnisotropicFilteringLevel = null, lz.generateMipMaps = !0, lz.width = bz, lz.height = bz, iz.updateTextureSamplingMode(3, lz), await oz(lz, [uz], !1, Ez), iz.generateMipMapsForCubemap(lz), lz.isReady = !0
    }
    async function oz(zz, uz, nz) {
      let lz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dz;
      if (!(0, Ez.i)(zz.width)) throw new Error("Texture size must be a power of two");
      const Oz = (0, iz.ILog2)(zz.width) + 1,
        Fz = zz.uR();
      let Zz = !1,
        Rz = !1,
        Kz = null,
        wz = null,
        Xz = null;
      const sz = Fz.getCaps();
      sz.textureLOD ? Fz._features.supportRenderAndCopyToLodForFloatTextures ? sz.textureHalfFloatRender && sz.textureHalfFloatLinearFiltering ? (Zz = !0, zz.type = 2) : sz.textureFloatRender && sz.textureFloatLinearFiltering && (Zz = !0, zz.type = 1) : Zz = !1 : (Zz = !1, Rz = nz);
      let rz = 0;
      if (Zz) Fz.isWebGPU ? (rz = 1, await bz.e(332).then((() => bz(60527)))) : await bz.e(314).then((() => bz(60534))), Kz = new Hz.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Fz, !1, void 0, zz.type, void 0, null, !1, void 0, rz), zz._isRGBD = !1, zz.invertY = !1, wz = Fz.createRenderTargetCubeTexture(zz.width, {
        generateDepthBuffer: !1,
        generateMipMaps: !0,
        generateStencilBuffer: !1,
        samplingMode: 3,
        type: zz.type,
        format: 5
      });
      else if (zz._isRGBD = !0, zz.invertY = !0, Rz) {
        const uz = 3;
        Xz = {};
        const bz = zz._lodGenerationScale,
          Ez = zz._lodGenerationOffset;
        for (let nz = 0; nz < uz; nz++) {
          const iz = (Oz - 1) * bz + Ez,
            lz = Ez + (iz - Ez) * (1 - nz / (uz - 1)),
            Hz = Math.round(Math.min(Math.max(lz, 0), iz)),
            pz = new Mz.c(Fz, 2);
          pz.isCube = !0, pz.invertY = !0, pz.generateMipMaps = !1, Fz.updateTextureSamplingMode(2, pz);
          const dz = new tz.b(null);
          switch (dz._isCube = !0, dz._texture = pz, Xz[Hz] = dz, nz) {
            case 0:
              zz._lodTextureLow = dz;
              break;
            case 1:
              zz._lodTextureMid = dz;
              break;
            case 2:
              zz._lodTextureHigh = dz
          }
        }
      }
      const oz = [];
      for (let bz = 0; bz < uz.length; bz++)
        for (let Ez = 0; Ez < 6; Ez++) {
          const nz = uz[bz][Ez],
            iz = (0, pz.o)(nz),
            Mz = new Blob([iz], {
              type: lz
            }),
            tz = URL.createObjectURL(Mz);
          let Hz;
          if (Fz._features.forceBitmapOverHTMLImageElement) Hz = Fz.createImageBitmap(Mz, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          }).then((async uz => await fz(uz, Fz, Zz, Kz, tz, Ez, bz, Rz, Xz, wz, zz)));
          else {
            const uz = new Image;
            uz.src = tz, Hz = new Promise(((nz, iz) => {
              uz.onload = () => {
                fz(uz, Fz, Zz, Kz, tz, Ez, bz, Rz, Xz, wz, zz).then((() => nz())).catch((zz => {
                  iz(zz)
                }))
              }, uz.onerror = zz => {
                iz(zz)
              }
            }))
          }
          oz.push(Hz)
        }
      if (await Promise.all(oz), uz.length < Oz) {
        let bz;
        const Ez = Math.pow(2, Oz - 1 - uz.length),
          nz = Ez * Ez * 4;
        switch (zz.type) {
          case 0:
            bz = new Uint8Array(nz);
            break;
          case 2:
            bz = new Uint16Array(nz);
            break;
          case 1:
            bz = new Float32Array(nz)
        }
        for (let iz = uz.length; iz < Oz; iz++)
          for (let uz = 0; uz < 6; uz++) Fz._uploadArrayBufferViewToTexture(wz?.texture || zz, bz, uz, iz)
      }
      if (wz) {
        const uz = zz._irradianceTexture;
        zz._irradianceTexture = null, Fz._releaseTexture(zz), wz._swapAndDie(zz), zz._irradianceTexture = uz
      }
      Kz && Kz.dispose(), Rz && (zz._lodTextureHigh && zz._lodTextureHigh._texture && (zz._lodTextureHigh._texture.isReady = !0), zz._lodTextureMid && zz._lodTextureMid._texture && (zz._lodTextureMid._texture.isReady = !0), zz._lodTextureLow && zz._lodTextureLow._texture && (zz._lodTextureLow._texture.isReady = !0))
    }

    function Nz(zz, uz) {
      const bz = (uz = Rz(uz)).irradiance;
      if (!bz) return;
      const Ez = new lz.g;
      nz.n.FromArrayToRef(bz.x, 0, Ez.x), nz.n.FromArrayToRef(bz.y, 0, Ez.y), nz.n.FromArrayToRef(bz.z, 0, Ez.z), nz.n.FromArrayToRef(bz.xx, 0, Ez.xx), nz.n.FromArrayToRef(bz.yy, 0, Ez.yy), nz.n.FromArrayToRef(bz.zz, 0, Ez.zz), nz.n.FromArrayToRef(bz.yz, 0, Ez.yz), nz.n.FromArrayToRef(bz.zx, 0, Ez.zx), nz.n.FromArrayToRef(bz.xy, 0, Ez.xy), zz._sphericalPolynomial = Ez
    }
    var vz = bz(41037);
    class xz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(zz, uz, bz, Ez, nz) {
        if (Array.isArray(zz)) return;
        const iz = Zz(zz);
        if (iz) {
          uz.width = iz.width, uz.height = iz.width;
          try {
            (0, vz.b)(), Nz(uz, iz), Xz(uz, zz, iz).then((() => {
              uz.isReady = !0, uz.onLoadedObservable.notifyObservers(uz), uz.onLoadedObservable.clear(), Ez && Ez()
            }), (zz => {
              nz?.("Can not upload environment levels", zz)
            }))
          } catch (lz) {
            nz?.("Can not upload environment file", lz)
          }
        } else nz && nz("Can not parse the environment file", null)
      }
      loadData() {
        throw ".env not supported in 2d."
      }
    }
  },
  41037: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz
    });
    var Ez = bz(40972),
      nz = bz(39167);
    let iz = !1;

    function lz() {
      iz || (iz = !0, nz.b.prototype._sphericalPolynomialTargetSize = 0, nz.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(nz.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Ez.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((zz => {
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
  40972: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Hz
    });
    var Ez = bz(36519),
      nz = bz(36553),
      iz = bz(39164),
      lz = bz(36526),
      Mz = bz(36715);
    class tz {
      constructor(zz, uz, bz, Ez) {
        this.name = zz, this.worldAxisForNormal = uz, this.worldAxisForFileX = bz, this.worldAxisForFileY = Ez
      }
    }
    class Hz {
      static _NearestPow2Floor(zz) {
        return zz <= 1 ? 1 : 1 << Math.floor(Math.log2(zz))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(zz) {
        if (!zz.isCube) return null;
        zz.XT()?.uR().flushFramebuffer();
        const uz = zz.getSize().width,
          bz = zz._sphericalPolynomialTargetSize,
          Ez = bz > 0 ? this._NearestPow2Floor(bz) : 0,
          nz = !zz.noMipmap && !0 === zz._texture?.generateMipMaps,
          iz = Ez > 0 && Ez < uz && nz,
          lz = iz ? Math.max(0, Math.round(Math.log2(uz / Ez))) : 0,
          Mz = iz ? Math.max(1, Math.floor(uz / Math.pow(2, lz))) : uz,
          tz = zz.readPixels(0, lz, void 0, !1),
          Hz = zz.readPixels(1, lz, void 0, !1);
        let Oz, pz;
        zz.isRenderTarget ? (Oz = zz.readPixels(3, lz, void 0, !1), pz = zz.readPixels(2, lz, void 0, !1)) : (Oz = zz.readPixels(2, lz, void 0, !1), pz = zz.readPixels(3, lz, void 0, !1));
        const dz = zz.readPixels(4, lz, void 0, !1),
          Fz = zz.readPixels(5, lz, void 0, !1),
          Zz = zz.gammaSpace,
          Rz = Ez > 0 && Ez < uz && !iz;
        return new Promise((zz => {
          Promise.all([Hz, tz, Oz, pz, dz, Fz]).then((bz => {
            let [nz, iz, lz, tz, Hz, Oz] = bz, pz = Mz;
            if (Rz) {
              const zz = 4;
              nz = this._DownsampleFace(nz, uz, Ez, zz), iz = this._DownsampleFace(iz, uz, Ez, zz), lz = this._DownsampleFace(lz, uz, Ez, zz), tz = this._DownsampleFace(tz, uz, Ez, zz), Hz = this._DownsampleFace(Hz, uz, Ez, zz), Oz = this._DownsampleFace(Oz, uz, Ez, zz), pz = Ez
            }
            const dz = {
              size: pz,
              right: iz,
              left: nz,
              up: lz,
              down: tz,
              front: Hz,
              back: Oz,
              format: 5,
              type: nz instanceof Float32Array ? 1 : 0,
              gammaSpace: Zz
            };
            zz(this.ConvertCubeMapToSphericalPolynomial(dz))
          }))
        }))
      }
      static _AreaElement(zz, uz) {
        return Math.atan2(zz * uz, Math.sqrt(zz * zz + uz * uz + 1))
      }
      static _DownsampleFace(zz, uz, bz, Ez) {
        const nz = zz instanceof Float32Array ? zz : Float32Array.from(zz),
          iz = bz * bz * Ez,
          lz = new Float32Array(iz),
          Mz = uz / bz,
          tz = 1 / (Mz * Mz);
        for (let Oz = 0; Oz < bz; Oz++) {
          const zz = Math.floor(Oz * Mz),
            iz = Math.floor((Oz + 1) * Mz);
          for (let Hz = 0; Hz < bz; Hz++) {
            const pz = Math.floor(Hz * Mz),
              dz = Math.floor((Hz + 1) * Mz),
              Fz = (Oz * bz + Hz) * Ez;
            for (let bz = 0; bz < Ez; bz++) {
              let Mz = 0;
              for (let lz = zz; lz < iz; lz++)
                for (let zz = pz; zz < dz; zz++) Mz += nz[(lz * uz + zz) * Ez + bz];
              lz[Fz + bz] = Mz * tz
            }
          }
        }
        if (zz instanceof Float32Array) return lz;
        const Hz = new(0, zz.constructor)(iz);
        for (let Oz = 0; Oz < iz; Oz++) Hz[Oz] = lz[Oz] + .5 | 0;
        return Hz
      }
      static ConvertCubeMapToSphericalPolynomial(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const bz = uz > 0 ? this._NearestPow2Floor(uz) : 0;
        if (bz > 0 && zz.size > bz) {
          const uz = 5 === zz.format ? 4 : 3,
            Ez = ["right", "left", "up", "down", "front", "back"],
            nz = {};
          for (const iz of Ez) nz[iz] = this._DownsampleFace(zz[iz], zz.size, bz, uz);
          zz = {
            ...zz,
            ...nz,
            size: bz
          }
        }
        const Ez = new iz.c;
        let tz = 0;
        const Hz = 2 / zz.size,
          Oz = Hz,
          pz = .5 * Hz,
          dz = pz - 1;
        for (let iz = 0; iz < 6; iz++) {
          const uz = this._FileFaces[iz],
            bz = zz[uz.name];
          let Fz = dz;
          const Zz = 5 === zz.format ? 4 : 3;
          for (let iz = 0; iz < zz.size; iz++) {
            let Rz = dz;
            for (let Oz = 0; Oz < zz.size; Oz++) {
              const dz = uz.worldAxisForFileX.scale(Rz).add(uz.worldAxisForFileY.scale(Fz)).add(uz.worldAxisForNormal);
              dz.normalize();
              const Kz = this._AreaElement(Rz - pz, Fz - pz) - this._AreaElement(Rz - pz, Fz + pz) - this._AreaElement(Rz + pz, Fz - pz) + this._AreaElement(Rz + pz, Fz + pz);
              let wz = bz[iz * zz.size * Zz + Oz * Zz + 0],
                Xz = bz[iz * zz.size * Zz + Oz * Zz + 1],
                fz = bz[iz * zz.size * Zz + Oz * Zz + 2];
              isNaN(wz) && (wz = 0), isNaN(Xz) && (Xz = 0), isNaN(fz) && (fz = 0), 0 === zz.type && (wz /= 255, Xz /= 255, fz /= 255), zz.gammaSpace && (wz = Math.pow((0, nz.Clamp)(wz), lz.i), Xz = Math.pow((0, nz.Clamp)(Xz), lz.i), fz = Math.pow((0, nz.Clamp)(fz), lz.i));
              const sz = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const zz = Math.max(wz, Xz, fz);
                if (zz > sz) {
                  const uz = sz / zz;
                  wz *= uz, Xz *= uz, fz *= uz
                }
              } else wz = (0, nz.Clamp)(wz, 0, sz), Xz = (0, nz.Clamp)(Xz, 0, sz), fz = (0, nz.Clamp)(fz, 0, sz);
              const rz = new Mz.c(wz, Xz, fz);
              Ez.addLight(dz, rz, Kz), tz += Kz, Rz += Hz
            }
            Fz += Oz
          }
        }
        const Fz = 6 * (4 * Math.PI) / 6 / tz;
        return Ez.scaleInPlace(Fz), Ez.convertIncidentRadianceToIrradiance(), Ez.convertIrradianceToLambertianRadiance(), iz.g.FromHarmonics(Ez)
      }
    }
    Hz._FileFaces = [new tz("right", new Ez.n(1, 0, 0), new Ez.n(0, 0, -1), new Ez.n(0, -1, 0)), new tz("left", new Ez.n(-1, 0, 0), new Ez.n(0, 0, 1), new Ez.n(0, -1, 0)), new tz("up", new Ez.n(0, 1, 0), new Ez.n(1, 0, 0), new Ez.n(0, 0, 1)), new tz("down", new Ez.n(0, -1, 0), new Ez.n(1, 0, 0), new Ez.n(0, 0, -1)), new tz("front", new Ez.n(0, 0, 1), new Ez.n(1, 0, 0), new Ez.n(0, -1, 0)), new tz("back", new Ez.n(0, 0, -1), new Ez.n(-1, 0, 0), new Ez.n(0, -1, 0))], Hz.MAX_HDRI_VALUE = 4096, Hz.PRESERVE_CLAMPED_COLORS = !1
  },
  41012: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz
    });
    var Ez = bz(41e3),
      nz = bz(41014);
    class iz {
      static ExpandRGBDTexture(zz) {
        const uz = zz._texture;
        if (!uz || !zz.isRGBD) return;
        const nz = uz.uR(),
          iz = nz.getCaps(),
          lz = uz.isReady;
        let Mz = !1;
        iz.textureHalfFloatRender && iz.textureHalfFloatLinearFiltering ? (Mz = !0, uz.type = 2) : iz.textureFloatRender && iz.textureFloatLinearFiltering && (Mz = !0, uz.type = 1), Mz && (uz.isReady = !1, uz._isRGBD = !1, uz.invertY = !1);
        const tz = async () => {
          const iz = nz.isWebGPU,
            lz = iz ? 1 : 0;
          uz.isReady = !1, iz ? await bz.e(332).then((() => bz(60527))) : await bz.e(314).then((() => bz(60534)));
          const Mz = new Ez.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, nz, !1, void 0, uz.type, void 0, null, !1, void 0, lz);
          Mz.externalTextureSamplerBinding = !0;
          const tz = nz.createRenderTargetTexture(uz.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: uz.samplingMode,
            type: uz.type,
            format: 5
          });
          Mz.onEffectCreatedObservable.addOnce((bz => {
            bz.executeWhenCompiled((() => {
              Mz.onApply = zz => {
                zz._bindTexture("textureSampler", uz), zz.setFloat2("scale", 1, 1)
              }, zz.XT()?.postProcessManager.directRender([Mz], tz, !0), nz.restoreDefaultFramebuffer(), nz._releaseTexture(uz), Mz && Mz.dispose(), tz._swapAndDie(uz), uz.isReady = !0
            }))
          }))
        };
        Mz && (lz ? tz() : zz.onLoadObservable.addOnce(tz))
      }
      static async EncodeTextureToRGBD(zz, uz) {
        let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return uz.uR().isWebGPU ? await bz.e(333).then((() => bz(60551))) : await bz.e(315).then((() => bz(60546))), await (0, nz.c)("rgbdEncode", zz, uz, Ez, 1, 5)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);