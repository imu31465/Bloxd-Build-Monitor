export const id = 304;
export const ids = [304];
export const modules = {
  41065: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      _TGATextureLoader: () => Mz
    });
    var Ez = bz(38060);

    function nz(zz) {
      let uz = 0;
      return {
        id_length: zz[uz++],
        colormap_type: zz[uz++],
        image_type: zz[uz++],
        colormap_index: zz[uz++] | zz[uz++] << 8,
        colormap_length: zz[uz++] | zz[uz++] << 8,
        colormap_size: zz[uz++],
        origin: [zz[uz++] | zz[uz++] << 8, zz[uz++] | zz[uz++] << 8],
        width: zz[uz++] | zz[uz++] << 8,
        height: zz[uz++] | zz[uz++] << 8,
        pixel_size: zz[uz++],
        flags: zz[17]
      }
    }

    function iz(zz, uz) {
      if (uz.length < 19) return void Ez.e.Error("Unable to load TGA file - Not enough data to contain header");
      let bz = 18;
      const iz = nz(uz);
      if (iz.id_length + bz > uz.length) return void Ez.e.Error("Unable to load TGA file - Not enough data");
      bz += iz.id_length;
      let Mz, tz = !1,
        Hz = !1,
        Oz = !1;
      switch (iz.image_type) {
        case 9:
          tz = !0;
        case 1:
          Hz = !0;
          break;
        case 10:
          tz = !0;
        case 2:
          break;
        case 11:
          tz = !0;
        case 3:
          Oz = !0
      }
      const pz = iz.pixel_size >> 3,
        dz = iz.width * iz.height * pz;
      let Fz, Zz, Rz, Kz, wz, Xz, fz;
      if (Hz && (Fz = uz.subarray(bz, bz += iz.colormap_length * (iz.colormap_size >> 3))), tz) {
        let zz, Ez, nz;
        Mz = new Uint8Array(dz);
        let iz = 0;
        const lz = new Uint8Array(pz);
        for (; bz < dz && iz < dz;)
          if (zz = uz[bz++], Ez = 1 + (127 & zz), 128 & zz) {
            for (nz = 0; nz < pz; ++nz) lz[nz] = uz[bz++];
            for (nz = 0; nz < Ez; ++nz) Mz.set(lz, iz + nz * pz);
            iz += pz * Ez
          } else {
            for (Ez *= pz, nz = 0; nz < Ez; ++nz) Mz[iz + nz] = uz[bz++];
            iz += Ez
          }
      } else Mz = uz.subarray(bz, bz + (Hz ? iz.width * iz.height : dz));
      switch ((48 & iz.flags) >> 4) {
        default:
        case 2:
          Zz = 0, Kz = 1, fz = iz.width, Rz = 0, wz = 1, Xz = iz.height;
          break;
        case 0:
          Zz = 0, Kz = 1, fz = iz.width, Rz = iz.height - 1, wz = -1, Xz = -1;
          break;
        case 3:
          Zz = iz.width - 1, Kz = -1, fz = -1, Rz = 0, wz = 1, Xz = iz.height;
          break;
        case 1:
          Zz = iz.width - 1, Kz = -1, fz = -1, Rz = iz.height - 1, wz = -1, Xz = -1
      }
      const sz = "_getImageData" + (Oz ? "Grey" : "") + iz.pixel_size + "bits",
        rz = lz[sz](iz, Fz, Mz, Rz, wz, Xz, Zz, Kz, fz);
      zz.uR()._uploadDataToTextureDirectly(zz, rz)
    }
    const lz = {
      GetTGAHeader: nz,
      UploadContent: iz,
      _getImageData8bits: function(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        const Hz = bz,
          Oz = uz,
          pz = zz.width,
          dz = zz.height;
        let Fz, Zz, Rz, Kz = 0;
        const wz = new Uint8Array(pz * dz * 4);
        for (Rz = Ez; Rz !== iz; Rz += nz)
          for (Zz = lz; Zz !== tz; Zz += Mz, Kz++) Fz = Hz[Kz], wz[4 * (Zz + pz * Rz) + 3] = 255, wz[4 * (Zz + pz * Rz) + 2] = Oz[3 * Fz + 0], wz[4 * (Zz + pz * Rz) + 1] = Oz[3 * Fz + 1], wz[4 * (Zz + pz * Rz) + 0] = Oz[3 * Fz + 2];
        return wz
      },
      _getImageData16bits: function(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        const Hz = bz,
          Oz = zz.width,
          pz = zz.height;
        let dz, Fz, Zz, Rz = 0;
        const Kz = new Uint8Array(Oz * pz * 4);
        for (Zz = Ez; Zz !== iz; Zz += nz)
          for (Fz = lz; Fz !== tz; Fz += Mz, Rz += 2) {
            dz = Hz[Rz + 0] + (Hz[Rz + 1] << 8);
            const zz = 255 * ((31744 & dz) >> 10) / 31 | 0,
              uz = 255 * ((992 & dz) >> 5) / 31 | 0,
              bz = 255 * (31 & dz) / 31 | 0;
            Kz[4 * (Fz + Oz * Zz) + 0] = zz, Kz[4 * (Fz + Oz * Zz) + 1] = uz, Kz[4 * (Fz + Oz * Zz) + 2] = bz, Kz[4 * (Fz + Oz * Zz) + 3] = 32768 & dz ? 0 : 255
          }
        return Kz
      },
      _getImageData24bits: function(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        const Hz = bz,
          Oz = zz.width,
          pz = zz.height;
        let dz, Fz, Zz = 0;
        const Rz = new Uint8Array(Oz * pz * 4);
        for (Fz = Ez; Fz !== iz; Fz += nz)
          for (dz = lz; dz !== tz; dz += Mz, Zz += 3) Rz[4 * (dz + Oz * Fz) + 3] = 255, Rz[4 * (dz + Oz * Fz) + 2] = Hz[Zz + 0], Rz[4 * (dz + Oz * Fz) + 1] = Hz[Zz + 1], Rz[4 * (dz + Oz * Fz) + 0] = Hz[Zz + 2];
        return Rz
      },
      _getImageData32bits: function(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        const Hz = bz,
          Oz = zz.width,
          pz = zz.height;
        let dz, Fz, Zz = 0;
        const Rz = new Uint8Array(Oz * pz * 4);
        for (Fz = Ez; Fz !== iz; Fz += nz)
          for (dz = lz; dz !== tz; dz += Mz, Zz += 4) Rz[4 * (dz + Oz * Fz) + 2] = Hz[Zz + 0], Rz[4 * (dz + Oz * Fz) + 1] = Hz[Zz + 1], Rz[4 * (dz + Oz * Fz) + 0] = Hz[Zz + 2], Rz[4 * (dz + Oz * Fz) + 3] = Hz[Zz + 3];
        return Rz
      },
      _getImageDataGrey8bits: function(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        const Hz = bz,
          Oz = zz.width,
          pz = zz.height;
        let dz, Fz, Zz, Rz = 0;
        const Kz = new Uint8Array(Oz * pz * 4);
        for (Zz = Ez; Zz !== iz; Zz += nz)
          for (Fz = lz; Fz !== tz; Fz += Mz, Rz++) dz = Hz[Rz], Kz[4 * (Fz + Oz * Zz) + 0] = dz, Kz[4 * (Fz + Oz * Zz) + 1] = dz, Kz[4 * (Fz + Oz * Zz) + 2] = dz, Kz[4 * (Fz + Oz * Zz) + 3] = 255;
        return Kz
      },
      _getImageDataGrey16bits: function(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        const Hz = bz,
          Oz = zz.width,
          pz = zz.height;
        let dz, Fz, Zz = 0;
        const Rz = new Uint8Array(Oz * pz * 4);
        for (Fz = Ez; Fz !== iz; Fz += nz)
          for (dz = lz; dz !== tz; dz += Mz, Zz += 2) Rz[4 * (dz + Oz * Fz) + 0] = Hz[Zz + 0], Rz[4 * (dz + Oz * Fz) + 1] = Hz[Zz + 0], Rz[4 * (dz + Oz * Fz) + 2] = Hz[Zz + 0], Rz[4 * (dz + Oz * Fz) + 3] = Hz[Zz + 1];
        return Rz
      }
    };
    class Mz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(zz, uz, bz) {
        const Ez = new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength),
          lz = nz(Ez);
        bz(lz.width, lz.height, uz.generateMipMaps, !1, (() => {
          iz(uz, Ez)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);