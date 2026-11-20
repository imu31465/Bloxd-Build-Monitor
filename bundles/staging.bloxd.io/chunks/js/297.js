export const id = 297;
export const ids = [296, 297];
export const modules = {
  40885: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      _DDSTextureLoader: () => Xz
    });
    var Fz = sz(39155),
      Wz = sz(40865);
    class Xz {
      constructor() {
        this.supportCascades = !0
      }
      loadCubeData(zz, tz, sz, Xz) {
        const Oz = tz.FD();
        let oz, vz = !1,
          Uz = 1e3;
        if (Array.isArray(zz))
          for (let Fz = 0; Fz < zz.length; Fz++) {
            const sz = zz[Fz];
            oz = Wz.DDSTools.GetDDSInfo(sz), tz.width = oz.width, tz.height = oz.height, vz = (oz.isRGB || oz.isLuminance || oz.mipmapCount > 1) && tz.generateMipMaps, Oz._unpackFlipY(oz.isCompressed), Wz.DDSTools.UploadDDSLevels(Oz, tz, sz, oz, vz, 6, -1, Fz), oz.isFourCC || 1 !== oz.mipmapCount ? Uz = oz.mipmapCount - 1 : Oz.generateMipMapsForCubemap(tz)
          } else {
            const Xz = zz;
            oz = Wz.DDSTools.GetDDSInfo(Xz), tz.width = oz.width, tz.height = oz.height, sz && (oz.sphericalPolynomial = new Fz.g), vz = (oz.isRGB || oz.isLuminance || oz.mipmapCount > 1) && tz.generateMipMaps, Oz._unpackFlipY(oz.isCompressed), Wz.DDSTools.UploadDDSLevels(Oz, tz, Xz, oz, vz, 6), oz.isFourCC || 1 !== oz.mipmapCount ? Uz = oz.mipmapCount - 1 : Oz.generateMipMapsForCubemap(tz, !1)
          }
        Oz._setCubeMapTextureParams(tz, vz, Uz), tz.isReady = !0, tz.onLoadedObservable.notifyObservers(tz), tz.onLoadedObservable.clear(), Xz && Xz({
          isDDS: !0,
          width: tz.width,
          info: oz,
          data: zz,
          texture: tz
        })
      }
      loadData(zz, tz, sz) {
        const Fz = Wz.DDSTools.GetDDSInfo(zz),
          Xz = (Fz.isRGB || Fz.isLuminance || Fz.mipmapCount > 1) && tz.generateMipMaps && Math.max(Fz.width, Fz.height) >> Fz.mipmapCount - 1 === 1;
        sz(Fz.width, Fz.height, Xz, Fz.isFourCC, (() => {
          Wz.DDSTools.UploadDDSLevels(tz.FD(), tz, zz, Fz, Xz, 1)
        }))
      }
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
  40865: (zz, tz, sz) => {
    sz.d(tz, {
      DDSTools: () => wz
    });
    var Fz = sz(36507),
      Wz = sz(38097),
      Xz = sz(40872),
      Oz = sz(39234);
    const oz = 131072,
      vz = 131072;

    function Uz(zz) {
      return zz.charCodeAt(0) + (zz.charCodeAt(1) << 8) + (zz.charCodeAt(2) << 16) + (zz.charCodeAt(3) << 24)
    }
    const Kz = Uz("DXT1"),
      uz = Uz("DXT3"),
      Nz = Uz("DXT5"),
      bz = Uz("DX10");
    class wz {
      static GetDDSInfo(zz) {
        const tz = new Int32Array(zz.buffer, zz.byteOffset, 31),
          sz = new Int32Array(zz.buffer, zz.byteOffset, 35);
        let Fz = 1;
        tz[2] & oz && (Fz = Math.max(1, tz[7]));
        const Wz = tz[21],
          Xz = Wz === bz ? sz[32] : 0;
        let Oz = 0;
        switch (Wz) {
          case 113:
            Oz = 2;
            break;
          case 116:
            Oz = 1;
            break;
          case bz:
            if (10 === Xz) {
              Oz = 2;
              break
            }
            if (2 === Xz) {
              Oz = 1;
              break
            }
        }
        return {
          width: tz[4],
          height: tz[3],
          mipmapCount: Fz,
          isFourCC: 4 === (4 & tz[20]),
          isRGB: 64 === (64 & tz[20]),
          isLuminance: (tz[20] & vz) === vz,
          isCube: 512 === (512 & tz[28]),
          isCompressed: Wz === Kz || Wz === uz || Wz === Nz,
          dxgiFormat: Xz,
          textureType: Oz
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(zz, tz, sz, Fz, Wz, Xz) {
        const oz = new Float32Array(Fz),
          vz = new Uint16Array(Wz, sz);
        let Uz = 0;
        for (let Kz = 0; Kz < tz; Kz++)
          for (let tz = 0; tz < zz; tz++) {
            const sz = 4 * (tz + Kz * zz);
            oz[Uz] = (0, Oz.d)(vz[sz]), oz[Uz + 1] = (0, Oz.d)(vz[sz + 1]), oz[Uz + 2] = (0, Oz.d)(vz[sz + 2]), wz.StoreLODInAlphaChannel ? oz[Uz + 3] = Xz : oz[Uz + 3] = (0, Oz.d)(vz[sz + 3]), Uz += 4
          }
        return oz
      }
      static _GetHalfFloatRGBAArrayBuffer(zz, tz, sz, Fz, Wz, Xz) {
        if (wz.StoreLODInAlphaChannel) {
          const oz = new Uint16Array(Fz),
            vz = new Uint16Array(Wz, sz);
          let Uz = 0;
          for (let sz = 0; sz < tz; sz++)
            for (let tz = 0; tz < zz; tz++) {
              const Fz = 4 * (tz + sz * zz);
              oz[Uz] = vz[Fz], oz[Uz + 1] = vz[Fz + 1], oz[Uz + 2] = vz[Fz + 2], oz[Uz + 3] = (0, Oz.g)(Xz), Uz += 4
            }
          return oz
        }
        return new Uint16Array(Wz, sz, Fz)
      }
      static _GetFloatRGBAArrayBuffer(zz, tz, sz, Fz, Wz, Xz) {
        if (wz.StoreLODInAlphaChannel) {
          const Oz = new Float32Array(Fz),
            oz = new Float32Array(Wz, sz);
          let vz = 0;
          for (let sz = 0; sz < tz; sz++)
            for (let tz = 0; tz < zz; tz++) {
              const Fz = 4 * (tz + sz * zz);
              Oz[vz] = oz[Fz], Oz[vz + 1] = oz[Fz + 1], Oz[vz + 2] = oz[Fz + 2], Oz[vz + 3] = Xz, vz += 4
            }
          return Oz
        }
        return new Float32Array(Wz, sz, Fz)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(zz, tz, sz, Fz, Wz, Xz) {
        const oz = new Uint16Array(Fz),
          vz = new Float32Array(Wz, sz);
        let Uz = 0;
        for (let Kz = 0; Kz < tz; Kz++)
          for (let tz = 0; tz < zz; tz++) oz[Uz] = (0, Oz.g)(vz[Uz]), oz[Uz + 1] = (0, Oz.g)(vz[Uz + 1]), oz[Uz + 2] = (0, Oz.g)(vz[Uz + 2]), wz.StoreLODInAlphaChannel ? oz[Uz + 3] = (0, Oz.g)(Xz) : oz[Uz + 3] = (0, Oz.g)(vz[Uz + 3]), Uz += 4;
        return oz
      }
      static _GetFloatAsUIntRGBAArrayBuffer(zz, tz, sz, Wz, Xz, Oz) {
        const oz = new Uint8Array(Wz),
          vz = new Float32Array(Xz, sz);
        let Uz = 0;
        for (let Kz = 0; Kz < tz; Kz++)
          for (let tz = 0; tz < zz; tz++) {
            const sz = 4 * (tz + Kz * zz);
            oz[Uz] = 255 * (0, Fz.Clamp)(vz[sz]), oz[Uz + 1] = 255 * (0, Fz.Clamp)(vz[sz + 1]), oz[Uz + 2] = 255 * (0, Fz.Clamp)(vz[sz + 2]), wz.StoreLODInAlphaChannel ? oz[Uz + 3] = Oz : oz[Uz + 3] = 255 * (0, Fz.Clamp)(vz[sz + 3]), Uz += 4
          }
        return oz
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(zz, tz, sz, Wz, Xz, oz) {
        const vz = new Uint8Array(Wz),
          Uz = new Uint16Array(Xz, sz);
        let Kz = 0;
        for (let uz = 0; uz < tz; uz++)
          for (let tz = 0; tz < zz; tz++) {
            const sz = 4 * (tz + uz * zz);
            vz[Kz] = 255 * (0, Fz.Clamp)((0, Oz.d)(Uz[sz])), vz[Kz + 1] = 255 * (0, Fz.Clamp)((0, Oz.d)(Uz[sz + 1])), vz[Kz + 2] = 255 * (0, Fz.Clamp)((0, Oz.d)(Uz[sz + 2])), wz.StoreLODInAlphaChannel ? vz[Kz + 3] = oz : vz[Kz + 3] = 255 * (0, Fz.Clamp)((0, Oz.d)(Uz[sz + 3])), Kz += 4
          }
        return vz
      }
      static _GetRGBAArrayBuffer(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        const Uz = new Uint8Array(Fz),
          Kz = new Uint8Array(Wz, sz);
        let uz = 0;
        for (let Nz = 0; Nz < tz; Nz++)
          for (let tz = 0; tz < zz; tz++) {
            const sz = 4 * (tz + Nz * zz);
            Uz[uz] = Kz[sz + Xz], Uz[uz + 1] = Kz[sz + Oz], Uz[uz + 2] = Kz[sz + oz], Uz[uz + 3] = Kz[sz + vz], uz += 4
          }
        return Uz
      }
      static _ExtractLongWordOrder(zz) {
        return 0 === zz || 255 === zz || -16777216 === zz ? 0 : 1 + wz._ExtractLongWordOrder(zz >> 8)
      }
      static _GetRGBArrayBuffer(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        const vz = new Uint8Array(Fz),
          Uz = new Uint8Array(Wz, sz);
        let Kz = 0;
        for (let uz = 0; uz < tz; uz++)
          for (let tz = 0; tz < zz; tz++) {
            const sz = 3 * (tz + uz * zz);
            vz[Kz] = Uz[sz + Xz], vz[Kz + 1] = Uz[sz + Oz], vz[Kz + 2] = Uz[sz + oz], Kz += 3
          }
        return vz
      }
      static _GetLuminanceArrayBuffer(zz, tz, sz, Fz, Wz) {
        const Xz = new Uint8Array(Fz),
          Oz = new Uint8Array(Wz, sz);
        let oz = 0;
        for (let vz = 0; vz < tz; vz++)
          for (let tz = 0; tz < zz; tz++) {
            const sz = tz + vz * zz;
            Xz[oz] = Oz[sz], oz++
          }
        return Xz
      }
      static UploadDDSLevels(zz, tz, sz, Fz, Oz, vz) {
        let Uz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Dz = arguments.length > 7 ? arguments[7] : void 0,
          gz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Hz = null;
        Fz.sphericalPolynomial && (Hz = []);
        const Bz = !!zz.getCaps().s3tc;
        tz.generateMipMaps = Oz;
        const Pz = new Int32Array(sz.buffer, sz.byteOffset, 31);
        let rz, Yz, xz, mz, Jz, Iz, Cz, ez = 0,
          Zz = 0,
          Gz = 1;
        if (542327876 !== Pz[0]) return void Wz.e.Error("Invalid magic number in DDS header");
        if (!Fz.isFourCC && !Fz.isRGB && !Fz.isLuminance) return void Wz.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Fz.isCompressed && !Bz) return void Wz.e.Error("Compressed textures are not supported on this platform.");
        let Tz = Pz[22];
        mz = Pz[1] + 4;
        let cz = !1;
        if (Fz.isFourCC) switch (rz = Pz[21], rz) {
          case Kz:
            Gz = 8, Zz = 33777;
            break;
          case uz:
            Gz = 16, Zz = 33778;
            break;
          case Nz:
            Gz = 16, Zz = 33779;
            break;
          case 113:
            cz = !0, Tz = 64;
            break;
          case 116:
            cz = !0, Tz = 128;
            break;
          case bz: {
            mz += 20;
            let zz = !1;
            switch (Fz.dxgiFormat) {
              case 10:
                cz = !0, Tz = 64, zz = !0;
                break;
              case 2:
                cz = !0, Tz = 128, zz = !0;
                break;
              case 88:
                Fz.isRGB = !0, Fz.isFourCC = !1, Tz = 32, zz = !0
            }
            if (zz) break
          }
          default:
            return void Wz.e.Error(["Unsupported FourCC code:", (jz = rz, String.fromCharCode(255 & jz, jz >> 8 & 255, jz >> 16 & 255, jz >> 24 & 255))])
        }
        var jz;
        const Az = wz._ExtractLongWordOrder(Pz[23]),
          yz = wz._ExtractLongWordOrder(Pz[24]),
          Mz = wz._ExtractLongWordOrder(Pz[25]),
          dz = wz._ExtractLongWordOrder(Pz[26]);
        cz && (Zz = zz._getRGBABufferInternalSizedFormat(Fz.textureType)), Iz = 1, Pz[2] & oz && !1 !== Oz && (Iz = Math.max(1, Pz[7]));
        const hz = Dz || 0,
          Qz = zz.getCaps();
        for (let Wz = hz; Wz < vz; Wz++) {
          for (Yz = Pz[4], xz = Pz[3], Cz = 0; Cz < Iz; ++Cz) {
            if (-1 === Uz || Uz === Cz) {
              const Xz = -1 === Uz ? Cz : 0;
              if (!Fz.isCompressed && Fz.isFourCC) {
                tz.format = 5, ez = Yz * xz * 4;
                let Fz = null;
                if (zz._badOS || zz._badDesktopOS || !Qz.textureHalfFloat && !Qz.textureFloat) 128 === Tz ? (Fz = wz._GetFloatAsUIntRGBAArrayBuffer(Yz, xz, sz.byteOffset + mz, ez, sz.buffer, Xz), Hz && 0 == Xz && Hz.push(wz._GetFloatRGBAArrayBuffer(Yz, xz, sz.byteOffset + mz, ez, sz.buffer, Xz))) : 64 === Tz && (Fz = wz._GetHalfFloatAsUIntRGBAArrayBuffer(Yz, xz, sz.byteOffset + mz, ez, sz.buffer, Xz), Hz && 0 == Xz && Hz.push(wz._GetHalfFloatAsFloatRGBAArrayBuffer(Yz, xz, sz.byteOffset + mz, ez, sz.buffer, Xz))), tz.type = 0;
                else {
                  const zz = Qz.textureFloat && (gz && Qz.textureFloatLinearFiltering || !gz),
                    Wz = Qz.textureHalfFloat && (gz && Qz.textureHalfFloatLinearFiltering || !gz),
                    Oz = (128 === Tz || 64 === Tz && !Wz) && zz ? 1 : (64 === Tz || 128 === Tz && !zz) && Wz ? 2 : 0;
                  let oz, vz = null;
                  if (128 === Tz) switch (Oz) {
                    case 1:
                      oz = wz._GetFloatRGBAArrayBuffer, vz = null;
                      break;
                    case 2:
                      oz = wz._GetFloatAsHalfFloatRGBAArrayBuffer, vz = wz._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      oz = wz._GetFloatAsUIntRGBAArrayBuffer, vz = wz._GetFloatRGBAArrayBuffer
                  } else switch (Oz) {
                    case 1:
                      oz = wz._GetHalfFloatAsFloatRGBAArrayBuffer, vz = null;
                      break;
                    case 2:
                      oz = wz._GetHalfFloatRGBAArrayBuffer, vz = wz._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      oz = wz._GetHalfFloatAsUIntRGBAArrayBuffer, vz = wz._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  tz.type = Oz, Fz = oz(Yz, xz, sz.byteOffset + mz, ez, sz.buffer, Xz), Hz && 0 == Xz && Hz.push(vz ? vz(Yz, xz, sz.byteOffset + mz, ez, sz.buffer, Xz) : Fz)
                }
                Fz && zz._uploadDataToTextureDirectly(tz, Fz, Wz, Xz)
              } else if (Fz.isRGB) tz.type = 0, 24 === Tz ? (tz.format = 4, ez = Yz * xz * 3, Jz = wz._GetRGBArrayBuffer(Yz, xz, sz.byteOffset + mz, ez, sz.buffer, Az, yz, Mz), zz._uploadDataToTextureDirectly(tz, Jz, Wz, Xz)) : (tz.format = 5, ez = Yz * xz * 4, Jz = wz._GetRGBAArrayBuffer(Yz, xz, sz.byteOffset + mz, ez, sz.buffer, Az, yz, Mz, dz), zz._uploadDataToTextureDirectly(tz, Jz, Wz, Xz));
              else if (Fz.isLuminance) {
                const Fz = zz._getUnpackAlignement(),
                  Oz = Yz;
                ez = Math.floor((Yz + Fz - 1) / Fz) * Fz * (xz - 1) + Oz, Jz = wz._GetLuminanceArrayBuffer(Yz, xz, sz.byteOffset + mz, ez, sz.buffer), tz.format = 1, tz.type = 0, zz._uploadDataToTextureDirectly(tz, Jz, Wz, Xz)
              } else ez = Math.max(4, Yz) / 4 * Math.max(4, xz) / 4 * Gz, Jz = new Uint8Array(sz.buffer, sz.byteOffset + mz, ez), tz.type = 0, zz._uploadCompressedDataToTextureDirectly(tz, Zz, Yz, xz, Jz, Wz, Xz)
            }
            mz += Tz ? Yz * xz * (Tz / 8) : ez, Yz *= .5, xz *= .5, Yz = Math.max(1, Yz), xz = Math.max(1, xz)
          }
          if (void 0 !== Dz) break
        }
        Hz && Hz.length > 0 ? Fz.sphericalPolynomial = Xz.d.ConvertCubeMapToSphericalPolynomial({
          size: Pz[4],
          right: Hz[0],
          left: Hz[1],
          up: Hz[2],
          down: Hz[3],
          front: Hz[4],
          back: Hz[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Fz.sphericalPolynomial = void 0
      }
    }
    wz.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);