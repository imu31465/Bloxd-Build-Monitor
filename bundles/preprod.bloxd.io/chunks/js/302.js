export const id = 302;
export const ids = [302];
export const modules = {
  41043: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      _HDRTextureLoader: () => Oz
    });
    var Ez = bz(36519);
    class nz {
      static ConvertPanoramaToCubemap(zz, uz, bz, Ez) {
        let nz, iz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          lz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!zz) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (zz.length != uz * bz * 3) {
          if (zz.length != uz * bz * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          nz = 4
        } else nz = 3;
        return {
          front: this.CreateCubemapTexture(Ez, this.FACE_FRONT, zz, uz, bz, iz, lz, nz),
          back: this.CreateCubemapTexture(Ez, this.FACE_BACK, zz, uz, bz, iz, lz, nz),
          left: this.CreateCubemapTexture(Ez, this.FACE_LEFT, zz, uz, bz, iz, lz, nz),
          right: this.CreateCubemapTexture(Ez, this.FACE_RIGHT, zz, uz, bz, iz, lz, nz),
          up: this.CreateCubemapTexture(Ez, this.FACE_UP, zz, uz, bz, iz, lz, nz),
          down: this.CreateCubemapTexture(Ez, this.FACE_DOWN, zz, uz, bz, iz, lz, nz),
          size: Ez,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        const tz = new ArrayBuffer(zz * zz * 4 * 3),
          Hz = new Float32Array(tz),
          Oz = iz ? Math.max(1, Math.round(Ez / 4 / zz)) : 1,
          pz = 1 / Oz,
          dz = pz * pz,
          Fz = uz[1].subtract(uz[0]).scale(pz / zz),
          Zz = uz[3].subtract(uz[2]).scale(pz / zz),
          Rz = 1 / zz;
        let Kz = 0;
        for (let wz = 0; wz < zz; wz++)
          for (let iz = 0; iz < Oz; iz++) {
            let iz = uz[0],
              tz = uz[2];
            for (let uz = 0; uz < zz; uz++)
              for (let pz = 0; pz < Oz; pz++) {
                const Oz = tz.subtract(iz).scale(Kz).add(iz);
                Oz.normalize();
                const pz = this.CalcProjectionSpherical(Oz, bz, Ez, nz, Mz, lz);
                Hz[wz * zz * 3 + 3 * uz + 0] += pz.r * dz, Hz[wz * zz * 3 + 3 * uz + 1] += pz.g * dz, Hz[wz * zz * 3 + 3 * uz + 2] += pz.b * dz, iz = iz.add(Fz), tz = tz.add(Zz)
              }
            Kz += Rz * pz
          }
        return Hz
      }
      static CalcProjectionSpherical(zz, uz, bz, Ez, nz, iz) {
        let lz = Math.atan2(zz.z, zz.x);
        const Mz = Math.acos(zz.y);
        for (; lz < -Math.PI;) lz += 2 * Math.PI;
        for (; lz > Math.PI;) lz -= 2 * Math.PI;
        let tz = lz / Math.PI;
        const Hz = Mz / Math.PI;
        tz = .5 * tz + .5;
        let Oz = Math.round(tz * bz);
        Oz < 0 ? Oz = 0 : Oz >= bz && (Oz = bz - 1);
        let pz = Math.round(Hz * Ez);
        pz < 0 ? pz = 0 : pz >= Ez && (pz = Ez - 1);
        const dz = iz ? Ez - pz - 1 : pz;
        return {
          r: uz[dz * bz * nz + Oz * nz + 0],
          g: uz[dz * bz * nz + Oz * nz + 1],
          b: uz[dz * bz * nz + Oz * nz + 2]
        }
      }
    }

    function iz(zz, uz, bz, Ez, nz, iz) {
      nz > 0 ? (nz = function(zz, uz) {
        return uz > 1023 ? zz * Math.pow(2, 1023) * Math.pow(2, uz - 1023) : uz < -1074 ? zz * Math.pow(2, -1074) * Math.pow(2, uz + 1074) : zz * Math.pow(2, uz)
      }(1, nz - 136), zz[iz + 0] = uz * nz, zz[iz + 1] = bz * nz, zz[iz + 2] = Ez * nz) : (zz[iz + 0] = 0, zz[iz + 1] = 0, zz[iz + 2] = 0)
    }

    function lz(zz, uz) {
      let bz, Ez = "";
      for (let nz = uz; nz < zz.length - uz && (bz = String.fromCharCode(zz[nz]), "\n" != bz); nz++) Ez += bz;
      return Ez
    }

    function Mz(zz) {
      let uz = lz(zz, 0);
      if ("#" != uz[0] || "?" != uz[1]) throw "Bad HDR Format.";
      let bz = !1,
        Ez = !1,
        nz = 0;
      do {
        nz += uz.length + 1, uz = lz(zz, nz), "FORMAT=32-bit_rle_rgbe" == uz ? Ez = !0 : 0 == uz.length && (bz = !0)
      } while (!bz);
      if (!Ez) throw "HDR Bad header format, unsupported FORMAT";
      nz += uz.length + 1, uz = lz(zz, nz);
      const iz = /^-Y (.*) \+X (.*)$/g.exec(uz);
      if (!iz || iz.length < 3) throw "HDR Bad header format, no size";
      const Mz = parseInt(iz[2]),
        tz = parseInt(iz[1]);
      if (Mz < 8 || Mz > 32767) throw "HDR Bad header format, unsupported size";
      return nz += uz.length + 1, {
        height: tz,
        width: Mz,
        dataPosition: nz
      }
    }

    function tz(zz, uz) {
      return function(zz, uz) {
        let bz = uz.height;
        const Ez = uz.width;
        let nz, lz, Mz, tz, Oz, pz, dz, Fz, Zz = uz.dataPosition;
        const Rz = new ArrayBuffer(4 * Ez),
          Kz = new Uint8Array(Rz),
          wz = new ArrayBuffer(uz.width * uz.height * 4 * 3),
          Xz = new Float32Array(wz);
        for (; bz > 0;) {
          if (nz = zz[Zz++], lz = zz[Zz++], Mz = zz[Zz++], tz = zz[Zz++], 2 != nz || 2 != lz || 128 & Mz || uz.width < 8 || uz.width > 32767) return Hz(zz, uz);
          if ((Mz << 8 | tz) != Ez) throw "HDR Bad header format, wrong scan line width";
          for (pz = 0, Fz = 0; Fz < 4; Fz++)
            for (dz = (Fz + 1) * Ez; pz < dz;)
              if (nz = zz[Zz++], lz = zz[Zz++], nz > 128) {
                if (Oz = nz - 128, 0 == Oz || Oz > dz - pz) throw "HDR Bad Format, bad scanline data (run)";
                for (; Oz-- > 0;) Kz[pz++] = lz
              } else {
                if (Oz = nz, 0 == Oz || Oz > dz - pz) throw "HDR Bad Format, bad scanline data (non-run)";
                if (Kz[pz++] = lz, --Oz > 0)
                  for (let uz = 0; uz < Oz; uz++) Kz[pz++] = zz[Zz++]
              } for (Fz = 0; Fz < Ez; Fz++) nz = Kz[Fz], lz = Kz[Fz + Ez], Mz = Kz[Fz + 2 * Ez], tz = Kz[Fz + 3 * Ez], iz(Xz, nz, lz, Mz, tz, (uz.height - bz) * Ez * 3 + 3 * Fz);
          bz--
        }
        return Xz
      }(zz, uz)
    }

    function Hz(zz, uz) {
      let bz = uz.height;
      const Ez = uz.width;
      let nz, lz, Mz, tz, Hz, Oz = uz.dataPosition;
      const pz = new ArrayBuffer(uz.width * uz.height * 4 * 3),
        dz = new Float32Array(pz);
      for (; bz > 0;) {
        for (Hz = 0; Hz < uz.width; Hz++) nz = zz[Oz++], lz = zz[Oz++], Mz = zz[Oz++], tz = zz[Oz++], iz(dz, nz, lz, Mz, tz, (uz.height - bz) * Ez * 3 + 3 * Hz);
        bz--
      }
      return dz
    }
    nz.FACE_LEFT = [new Ez.n(-1, -1, -1), new Ez.n(1, -1, -1), new Ez.n(-1, 1, -1), new Ez.n(1, 1, -1)], nz.FACE_RIGHT = [new Ez.n(1, -1, 1), new Ez.n(-1, -1, 1), new Ez.n(1, 1, 1), new Ez.n(-1, 1, 1)], nz.FACE_FRONT = [new Ez.n(1, -1, -1), new Ez.n(1, -1, 1), new Ez.n(1, 1, -1), new Ez.n(1, 1, 1)], nz.FACE_BACK = [new Ez.n(-1, -1, 1), new Ez.n(-1, -1, -1), new Ez.n(-1, 1, 1), new Ez.n(-1, 1, -1)], nz.FACE_DOWN = [new Ez.n(1, 1, -1), new Ez.n(1, 1, 1), new Ez.n(-1, 1, -1), new Ez.n(-1, 1, 1)], nz.FACE_UP = [new Ez.n(-1, -1, -1), new Ez.n(-1, -1, 1), new Ez.n(1, -1, -1), new Ez.n(1, -1, 1)];
    class Oz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(zz, uz, bz) {
        const Ez = new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength),
          nz = Mz(Ez),
          iz = tz(Ez, nz),
          lz = nz.width * nz.height,
          Hz = new Float32Array(4 * lz);
        for (let Mz = 0; Mz < lz; Mz += 1) Hz[4 * Mz] = iz[3 * Mz], Hz[4 * Mz + 1] = iz[3 * Mz + 1], Hz[4 * Mz + 2] = iz[3 * Mz + 2], Hz[4 * Mz + 3] = 1;
        bz(nz.width, nz.height, uz.generateMipMaps, !1, (() => {
          const zz = uz.uR();
          uz.type = 1, uz.format = 5, uz._gammaSpace = !1, zz._uploadDataToTextureDirectly(uz, Hz)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);