export const id = 304;
export const ids = [304];
export const modules = {
  40969: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      _TGATextureLoader: () => oz
    });
    var Fz = sz(38097);

    function Wz(zz) {
      let tz = 0;
      return {
        id_length: zz[tz++],
        colormap_type: zz[tz++],
        image_type: zz[tz++],
        colormap_index: zz[tz++] | zz[tz++] << 8,
        colormap_length: zz[tz++] | zz[tz++] << 8,
        colormap_size: zz[tz++],
        origin: [zz[tz++] | zz[tz++] << 8, zz[tz++] | zz[tz++] << 8],
        width: zz[tz++] | zz[tz++] << 8,
        height: zz[tz++] | zz[tz++] << 8,
        pixel_size: zz[tz++],
        flags: zz[17]
      }
    }

    function Xz(zz, tz) {
      if (tz.length < 19) return void Fz.e.Error("Unable to load TGA file - Not enough data to contain header");
      let sz = 18;
      const Xz = Wz(tz);
      if (Xz.id_length + sz > tz.length) return void Fz.e.Error("Unable to load TGA file - Not enough data");
      sz += Xz.id_length;
      let oz, vz = !1,
        Uz = !1,
        Kz = !1;
      switch (Xz.image_type) {
        case 9:
          vz = !0;
        case 1:
          Uz = !0;
          break;
        case 10:
          vz = !0;
        case 2:
          break;
        case 11:
          vz = !0;
        case 3:
          Kz = !0
      }
      const uz = Xz.pixel_size >> 3,
        Nz = Xz.width * Xz.height * uz;
      let bz, wz, Dz, gz, Hz, Bz, Pz;
      if (Uz && (bz = tz.subarray(sz, sz += Xz.colormap_length * (Xz.colormap_size >> 3))), vz) {
        let zz, Fz, Wz;
        oz = new Uint8Array(Nz);
        let Xz = 0;
        const Oz = new Uint8Array(uz);
        for (; sz < Nz && Xz < Nz;)
          if (zz = tz[sz++], Fz = 1 + (127 & zz), 128 & zz) {
            for (Wz = 0; Wz < uz; ++Wz) Oz[Wz] = tz[sz++];
            for (Wz = 0; Wz < Fz; ++Wz) oz.set(Oz, Xz + Wz * uz);
            Xz += uz * Fz
          } else {
            for (Fz *= uz, Wz = 0; Wz < Fz; ++Wz) oz[Xz + Wz] = tz[sz++];
            Xz += Fz
          }
      } else oz = tz.subarray(sz, sz + (Uz ? Xz.width * Xz.height : Nz));
      switch ((48 & Xz.flags) >> 4) {
        default:
        case 2:
          wz = 0, gz = 1, Pz = Xz.width, Dz = 0, Hz = 1, Bz = Xz.height;
          break;
        case 0:
          wz = 0, gz = 1, Pz = Xz.width, Dz = Xz.height - 1, Hz = -1, Bz = -1;
          break;
        case 3:
          wz = Xz.width - 1, gz = -1, Pz = -1, Dz = 0, Hz = 1, Bz = Xz.height;
          break;
        case 1:
          wz = Xz.width - 1, gz = -1, Pz = -1, Dz = Xz.height - 1, Hz = -1, Bz = -1
      }
      const rz = "_getImageData" + (Kz ? "Grey" : "") + Xz.pixel_size + "bits",
        Yz = Oz[rz](Xz, bz, oz, Dz, Hz, Bz, wz, gz, Pz);
      zz.FD()._uploadDataToTextureDirectly(zz, Yz)
    }
    const Oz = {
      GetTGAHeader: Wz,
      UploadContent: Xz,
      _getImageData8bits: function(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        const Uz = sz,
          Kz = tz,
          uz = zz.width,
          Nz = zz.height;
        let bz, wz, Dz, gz = 0;
        const Hz = new Uint8Array(uz * Nz * 4);
        for (Dz = Fz; Dz !== Xz; Dz += Wz)
          for (wz = Oz; wz !== vz; wz += oz, gz++) bz = Uz[gz], Hz[4 * (wz + uz * Dz) + 3] = 255, Hz[4 * (wz + uz * Dz) + 2] = Kz[3 * bz + 0], Hz[4 * (wz + uz * Dz) + 1] = Kz[3 * bz + 1], Hz[4 * (wz + uz * Dz) + 0] = Kz[3 * bz + 2];
        return Hz
      },
      _getImageData16bits: function(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        const Uz = sz,
          Kz = zz.width,
          uz = zz.height;
        let Nz, bz, wz, Dz = 0;
        const gz = new Uint8Array(Kz * uz * 4);
        for (wz = Fz; wz !== Xz; wz += Wz)
          for (bz = Oz; bz !== vz; bz += oz, Dz += 2) {
            Nz = Uz[Dz + 0] + (Uz[Dz + 1] << 8);
            const zz = 255 * ((31744 & Nz) >> 10) / 31 | 0,
              tz = 255 * ((992 & Nz) >> 5) / 31 | 0,
              sz = 255 * (31 & Nz) / 31 | 0;
            gz[4 * (bz + Kz * wz) + 0] = zz, gz[4 * (bz + Kz * wz) + 1] = tz, gz[4 * (bz + Kz * wz) + 2] = sz, gz[4 * (bz + Kz * wz) + 3] = 32768 & Nz ? 0 : 255
          }
        return gz
      },
      _getImageData24bits: function(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        const Uz = sz,
          Kz = zz.width,
          uz = zz.height;
        let Nz, bz, wz = 0;
        const Dz = new Uint8Array(Kz * uz * 4);
        for (bz = Fz; bz !== Xz; bz += Wz)
          for (Nz = Oz; Nz !== vz; Nz += oz, wz += 3) Dz[4 * (Nz + Kz * bz) + 3] = 255, Dz[4 * (Nz + Kz * bz) + 2] = Uz[wz + 0], Dz[4 * (Nz + Kz * bz) + 1] = Uz[wz + 1], Dz[4 * (Nz + Kz * bz) + 0] = Uz[wz + 2];
        return Dz
      },
      _getImageData32bits: function(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        const Uz = sz,
          Kz = zz.width,
          uz = zz.height;
        let Nz, bz, wz = 0;
        const Dz = new Uint8Array(Kz * uz * 4);
        for (bz = Fz; bz !== Xz; bz += Wz)
          for (Nz = Oz; Nz !== vz; Nz += oz, wz += 4) Dz[4 * (Nz + Kz * bz) + 2] = Uz[wz + 0], Dz[4 * (Nz + Kz * bz) + 1] = Uz[wz + 1], Dz[4 * (Nz + Kz * bz) + 0] = Uz[wz + 2], Dz[4 * (Nz + Kz * bz) + 3] = Uz[wz + 3];
        return Dz
      },
      _getImageDataGrey8bits: function(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        const Uz = sz,
          Kz = zz.width,
          uz = zz.height;
        let Nz, bz, wz, Dz = 0;
        const gz = new Uint8Array(Kz * uz * 4);
        for (wz = Fz; wz !== Xz; wz += Wz)
          for (bz = Oz; bz !== vz; bz += oz, Dz++) Nz = Uz[Dz], gz[4 * (bz + Kz * wz) + 0] = Nz, gz[4 * (bz + Kz * wz) + 1] = Nz, gz[4 * (bz + Kz * wz) + 2] = Nz, gz[4 * (bz + Kz * wz) + 3] = 255;
        return gz
      },
      _getImageDataGrey16bits: function(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        const Uz = sz,
          Kz = zz.width,
          uz = zz.height;
        let Nz, bz, wz = 0;
        const Dz = new Uint8Array(Kz * uz * 4);
        for (bz = Fz; bz !== Xz; bz += Wz)
          for (Nz = Oz; Nz !== vz; Nz += oz, wz += 2) Dz[4 * (Nz + Kz * bz) + 0] = Uz[wz + 0], Dz[4 * (Nz + Kz * bz) + 1] = Uz[wz + 0], Dz[4 * (Nz + Kz * bz) + 2] = Uz[wz + 0], Dz[4 * (Nz + Kz * bz) + 3] = Uz[wz + 1];
        return Dz
      }
    };
    class oz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".env not supported in Cube."
      }
      loadData(zz, tz, sz) {
        const Fz = new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength),
          Oz = Wz(Fz);
        sz(Oz.width, Oz.height, tz.generateMipMaps, !1, (() => {
          Xz(tz, Fz)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);