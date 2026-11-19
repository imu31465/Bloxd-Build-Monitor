export const id = 296;
export const ids = [296];
export const modules = {
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
  40967: (zz, uz, bz) => {
    bz.d(uz, {
      DDSTools: () => Zz
    });
    var Ez = bz(36553),
      nz = bz(38060),
      iz = bz(40972),
      lz = bz(39231);
    const Mz = 131072,
      tz = 131072;

    function Hz(zz) {
      return zz.charCodeAt(0) + (zz.charCodeAt(1) << 8) + (zz.charCodeAt(2) << 16) + (zz.charCodeAt(3) << 24)
    }
    const Oz = Hz("DXT1"),
      pz = Hz("DXT3"),
      dz = Hz("DXT5"),
      Fz = Hz("DX10");
    class Zz {
      static GetDDSInfo(zz) {
        const uz = new Int32Array(zz.buffer, zz.byteOffset, 31),
          bz = new Int32Array(zz.buffer, zz.byteOffset, 35);
        let Ez = 1;
        uz[2] & Mz && (Ez = Math.max(1, uz[7]));
        const nz = uz[21],
          iz = nz === Fz ? bz[32] : 0;
        let lz = 0;
        switch (nz) {
          case 113:
            lz = 2;
            break;
          case 116:
            lz = 1;
            break;
          case Fz:
            if (10 === iz) {
              lz = 2;
              break
            }
            if (2 === iz) {
              lz = 1;
              break
            }
        }
        return {
          width: uz[4],
          height: uz[3],
          mipmapCount: Ez,
          isFourCC: 4 === (4 & uz[20]),
          isRGB: 64 === (64 & uz[20]),
          isLuminance: (uz[20] & tz) === tz,
          isCube: 512 === (512 & uz[28]),
          isCompressed: nz === Oz || nz === pz || nz === dz,
          dxgiFormat: iz,
          textureType: lz
        }
      }
      static _GetHalfFloatAsFloatRGBAArrayBuffer(zz, uz, bz, Ez, nz, iz) {
        const Mz = new Float32Array(Ez),
          tz = new Uint16Array(nz, bz);
        let Hz = 0;
        for (let Oz = 0; Oz < uz; Oz++)
          for (let uz = 0; uz < zz; uz++) {
            const bz = 4 * (uz + Oz * zz);
            Mz[Hz] = (0, lz.e)(tz[bz]), Mz[Hz + 1] = (0, lz.e)(tz[bz + 1]), Mz[Hz + 2] = (0, lz.e)(tz[bz + 2]), Zz.StoreLODInAlphaChannel ? Mz[Hz + 3] = iz : Mz[Hz + 3] = (0, lz.e)(tz[bz + 3]), Hz += 4
          }
        return Mz
      }
      static _GetHalfFloatRGBAArrayBuffer(zz, uz, bz, Ez, nz, iz) {
        if (Zz.StoreLODInAlphaChannel) {
          const Mz = new Uint16Array(Ez),
            tz = new Uint16Array(nz, bz);
          let Hz = 0;
          for (let bz = 0; bz < uz; bz++)
            for (let uz = 0; uz < zz; uz++) {
              const Ez = 4 * (uz + bz * zz);
              Mz[Hz] = tz[Ez], Mz[Hz + 1] = tz[Ez + 1], Mz[Hz + 2] = tz[Ez + 2], Mz[Hz + 3] = (0, lz.i)(iz), Hz += 4
            }
          return Mz
        }
        return new Uint16Array(nz, bz, Ez)
      }
      static _GetFloatRGBAArrayBuffer(zz, uz, bz, Ez, nz, iz) {
        if (Zz.StoreLODInAlphaChannel) {
          const lz = new Float32Array(Ez),
            Mz = new Float32Array(nz, bz);
          let tz = 0;
          for (let bz = 0; bz < uz; bz++)
            for (let uz = 0; uz < zz; uz++) {
              const Ez = 4 * (uz + bz * zz);
              lz[tz] = Mz[Ez], lz[tz + 1] = Mz[Ez + 1], lz[tz + 2] = Mz[Ez + 2], lz[tz + 3] = iz, tz += 4
            }
          return lz
        }
        return new Float32Array(nz, bz, Ez)
      }
      static _GetFloatAsHalfFloatRGBAArrayBuffer(zz, uz, bz, Ez, nz, iz) {
        const Mz = new Uint16Array(Ez),
          tz = new Float32Array(nz, bz);
        let Hz = 0;
        for (let Oz = 0; Oz < uz; Oz++)
          for (let uz = 0; uz < zz; uz++) Mz[Hz] = (0, lz.i)(tz[Hz]), Mz[Hz + 1] = (0, lz.i)(tz[Hz + 1]), Mz[Hz + 2] = (0, lz.i)(tz[Hz + 2]), Zz.StoreLODInAlphaChannel ? Mz[Hz + 3] = (0, lz.i)(iz) : Mz[Hz + 3] = (0, lz.i)(tz[Hz + 3]), Hz += 4;
        return Mz
      }
      static _GetFloatAsUIntRGBAArrayBuffer(zz, uz, bz, nz, iz, lz) {
        const Mz = new Uint8Array(nz),
          tz = new Float32Array(iz, bz);
        let Hz = 0;
        for (let Oz = 0; Oz < uz; Oz++)
          for (let uz = 0; uz < zz; uz++) {
            const bz = 4 * (uz + Oz * zz);
            Mz[Hz] = 255 * (0, Ez.Clamp)(tz[bz]), Mz[Hz + 1] = 255 * (0, Ez.Clamp)(tz[bz + 1]), Mz[Hz + 2] = 255 * (0, Ez.Clamp)(tz[bz + 2]), Zz.StoreLODInAlphaChannel ? Mz[Hz + 3] = lz : Mz[Hz + 3] = 255 * (0, Ez.Clamp)(tz[bz + 3]), Hz += 4
          }
        return Mz
      }
      static _GetHalfFloatAsUIntRGBAArrayBuffer(zz, uz, bz, nz, iz, Mz) {
        const tz = new Uint8Array(nz),
          Hz = new Uint16Array(iz, bz);
        let Oz = 0;
        for (let pz = 0; pz < uz; pz++)
          for (let uz = 0; uz < zz; uz++) {
            const bz = 4 * (uz + pz * zz);
            tz[Oz] = 255 * (0, Ez.Clamp)((0, lz.e)(Hz[bz])), tz[Oz + 1] = 255 * (0, Ez.Clamp)((0, lz.e)(Hz[bz + 1])), tz[Oz + 2] = 255 * (0, Ez.Clamp)((0, lz.e)(Hz[bz + 2])), Zz.StoreLODInAlphaChannel ? tz[Oz + 3] = Mz : tz[Oz + 3] = 255 * (0, Ez.Clamp)((0, lz.e)(Hz[bz + 3])), Oz += 4
          }
        return tz
      }
      static _GetRGBAArrayBuffer(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        const Hz = new Uint8Array(Ez),
          Oz = new Uint8Array(nz, bz);
        let pz = 0;
        for (let dz = 0; dz < uz; dz++)
          for (let uz = 0; uz < zz; uz++) {
            const bz = 4 * (uz + dz * zz);
            Hz[pz] = Oz[bz + iz], Hz[pz + 1] = Oz[bz + lz], Hz[pz + 2] = Oz[bz + Mz], Hz[pz + 3] = Oz[bz + tz], pz += 4
          }
        return Hz
      }
      static _ExtractLongWordOrder(zz) {
        return 0 === zz || 255 === zz || -16777216 === zz ? 0 : 1 + Zz._ExtractLongWordOrder(zz >> 8)
      }
      static _GetRGBArrayBuffer(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        const tz = new Uint8Array(Ez),
          Hz = new Uint8Array(nz, bz);
        let Oz = 0;
        for (let pz = 0; pz < uz; pz++)
          for (let uz = 0; uz < zz; uz++) {
            const bz = 3 * (uz + pz * zz);
            tz[Oz] = Hz[bz + iz], tz[Oz + 1] = Hz[bz + lz], tz[Oz + 2] = Hz[bz + Mz], Oz += 3
          }
        return tz
      }
      static _GetLuminanceArrayBuffer(zz, uz, bz, Ez, nz) {
        const iz = new Uint8Array(Ez),
          lz = new Uint8Array(nz, bz);
        let Mz = 0;
        for (let tz = 0; tz < uz; tz++)
          for (let uz = 0; uz < zz; uz++) {
            const bz = uz + tz * zz;
            iz[Mz] = lz[bz], Mz++
          }
        return iz
      }
      static UploadDDSLevels(zz, uz, bz, Ez, lz, tz) {
        let Hz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
          Rz = arguments.length > 7 ? arguments[7] : void 0,
          Kz = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          wz = null;
        Ez.sphericalPolynomial && (wz = []);
        const Xz = !!zz.getCaps().s3tc;
        uz.generateMipMaps = lz;
        const fz = new Int32Array(bz.buffer, bz.byteOffset, 31);
        let sz, rz, oz, Nz, vz, xz, Jz, Az = 0,
          Tz = 0,
          Lz = 1;
        if (542327876 !== fz[0]) return void nz.e.Error("Invalid magic number in DDS header");
        if (!Ez.isFourCC && !Ez.isRGB && !Ez.isLuminance) return void nz.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
        if (Ez.isCompressed && !Xz) return void nz.e.Error("Compressed textures are not supported on this platform.");
        let Pz = fz[22];
        Nz = fz[1] + 4;
        let Gz = !1;
        if (Ez.isFourCC) switch (sz = fz[21], sz) {
          case Oz:
            Lz = 8, Tz = 33777;
            break;
          case pz:
            Lz = 16, Tz = 33778;
            break;
          case dz:
            Lz = 16, Tz = 33779;
            break;
          case 113:
            Gz = !0, Pz = 64;
            break;
          case 116:
            Gz = !0, Pz = 128;
            break;
          case Fz: {
            Nz += 20;
            let zz = !1;
            switch (Ez.dxgiFormat) {
              case 10:
                Gz = !0, Pz = 64, zz = !0;
                break;
              case 2:
                Gz = !0, Pz = 128, zz = !0;
                break;
              case 88:
                Ez.isRGB = !0, Ez.isFourCC = !1, Pz = 32, zz = !0
            }
            if (zz) break
          }
          default:
            return void nz.e.Error(["Unsupported FourCC code:", (az = sz, String.fromCharCode(255 & az, az >> 8 & 255, az >> 16 & 255, az >> 24 & 255))])
        }
        var az;
        const Vz = Zz._ExtractLongWordOrder(fz[23]),
          mz = Zz._ExtractLongWordOrder(fz[24]),
          qz = Zz._ExtractLongWordOrder(fz[25]),
          hz = Zz._ExtractLongWordOrder(fz[26]);
        Gz && (Tz = zz._getRGBABufferInternalSizedFormat(Ez.textureType)), xz = 1, fz[2] & Mz && !1 !== lz && (xz = Math.max(1, fz[7]));
        const Uz = Rz || 0,
          cz = zz.getCaps();
        for (let nz = Uz; nz < tz; nz++) {
          for (rz = fz[4], oz = fz[3], Jz = 0; Jz < xz; ++Jz) {
            if (-1 === Hz || Hz === Jz) {
              const iz = -1 === Hz ? Jz : 0;
              if (!Ez.isCompressed && Ez.isFourCC) {
                uz.format = 5, Az = rz * oz * 4;
                let Ez = null;
                if (zz._badOS || zz._badDesktopOS || !cz.textureHalfFloat && !cz.textureFloat) 128 === Pz ? (Ez = Zz._GetFloatAsUIntRGBAArrayBuffer(rz, oz, bz.byteOffset + Nz, Az, bz.buffer, iz), wz && 0 == iz && wz.push(Zz._GetFloatRGBAArrayBuffer(rz, oz, bz.byteOffset + Nz, Az, bz.buffer, iz))) : 64 === Pz && (Ez = Zz._GetHalfFloatAsUIntRGBAArrayBuffer(rz, oz, bz.byteOffset + Nz, Az, bz.buffer, iz), wz && 0 == iz && wz.push(Zz._GetHalfFloatAsFloatRGBAArrayBuffer(rz, oz, bz.byteOffset + Nz, Az, bz.buffer, iz))), uz.type = 0;
                else {
                  const zz = cz.textureFloat && (Kz && cz.textureFloatLinearFiltering || !Kz),
                    nz = cz.textureHalfFloat && (Kz && cz.textureHalfFloatLinearFiltering || !Kz),
                    lz = (128 === Pz || 64 === Pz && !nz) && zz ? 1 : (64 === Pz || 128 === Pz && !zz) && nz ? 2 : 0;
                  let Mz, tz = null;
                  if (128 === Pz) switch (lz) {
                    case 1:
                      Mz = Zz._GetFloatRGBAArrayBuffer, tz = null;
                      break;
                    case 2:
                      Mz = Zz._GetFloatAsHalfFloatRGBAArrayBuffer, tz = Zz._GetFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Mz = Zz._GetFloatAsUIntRGBAArrayBuffer, tz = Zz._GetFloatRGBAArrayBuffer
                  } else switch (lz) {
                    case 1:
                      Mz = Zz._GetHalfFloatAsFloatRGBAArrayBuffer, tz = null;
                      break;
                    case 2:
                      Mz = Zz._GetHalfFloatRGBAArrayBuffer, tz = Zz._GetHalfFloatAsFloatRGBAArrayBuffer;
                      break;
                    case 0:
                      Mz = Zz._GetHalfFloatAsUIntRGBAArrayBuffer, tz = Zz._GetHalfFloatAsFloatRGBAArrayBuffer
                  }
                  uz.type = lz, Ez = Mz(rz, oz, bz.byteOffset + Nz, Az, bz.buffer, iz), wz && 0 == iz && wz.push(tz ? tz(rz, oz, bz.byteOffset + Nz, Az, bz.buffer, iz) : Ez)
                }
                Ez && zz._uploadDataToTextureDirectly(uz, Ez, nz, iz)
              } else if (Ez.isRGB) uz.type = 0, 24 === Pz ? (uz.format = 4, Az = rz * oz * 3, vz = Zz._GetRGBArrayBuffer(rz, oz, bz.byteOffset + Nz, Az, bz.buffer, Vz, mz, qz), zz._uploadDataToTextureDirectly(uz, vz, nz, iz)) : (uz.format = 5, Az = rz * oz * 4, vz = Zz._GetRGBAArrayBuffer(rz, oz, bz.byteOffset + Nz, Az, bz.buffer, Vz, mz, qz, hz), zz._uploadDataToTextureDirectly(uz, vz, nz, iz));
              else if (Ez.isLuminance) {
                const Ez = zz._getUnpackAlignement(),
                  lz = rz;
                Az = Math.floor((rz + Ez - 1) / Ez) * Ez * (oz - 1) + lz, vz = Zz._GetLuminanceArrayBuffer(rz, oz, bz.byteOffset + Nz, Az, bz.buffer), uz.format = 1, uz.type = 0, zz._uploadDataToTextureDirectly(uz, vz, nz, iz)
              } else Az = Math.max(4, rz) / 4 * Math.max(4, oz) / 4 * Lz, vz = new Uint8Array(bz.buffer, bz.byteOffset + Nz, Az), uz.type = 0, zz._uploadCompressedDataToTextureDirectly(uz, Tz, rz, oz, vz, nz, iz)
            }
            Nz += Pz ? rz * oz * (Pz / 8) : Az, rz *= .5, oz *= .5, rz = Math.max(1, rz), oz = Math.max(1, oz)
          }
          if (void 0 !== Rz) break
        }
        wz && wz.length > 0 ? Ez.sphericalPolynomial = iz.d.ConvertCubeMapToSphericalPolynomial({
          size: fz[4],
          right: wz[0],
          left: wz[1],
          up: wz[2],
          down: wz[3],
          front: wz[4],
          back: wz[5],
          format: 5,
          type: 1,
          gammaSpace: !1
        }) : Ez.sphericalPolynomial = void 0
      }
    }
    Zz.StoreLODInAlphaChannel = !1
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);