export const id = 302;
export const ids = [302];
export const modules = {
  40954: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      _HDRTextureLoader: () => Kz
    });
    var Fz = sz(36475);
    class Wz {
      static ConvertPanoramaToCubemap(zz, tz, sz, Fz) {
        let Wz, Xz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Oz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        if (!zz) throw "ConvertPanoramaToCubemap: input cannot be null";
        if (zz.length != tz * sz * 3) {
          if (zz.length != tz * sz * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
          Wz = 4
        } else Wz = 3;
        return {
          front: this.CreateCubemapTexture(Fz, this.FACE_FRONT, zz, tz, sz, Xz, Oz, Wz),
          back: this.CreateCubemapTexture(Fz, this.FACE_BACK, zz, tz, sz, Xz, Oz, Wz),
          left: this.CreateCubemapTexture(Fz, this.FACE_LEFT, zz, tz, sz, Xz, Oz, Wz),
          right: this.CreateCubemapTexture(Fz, this.FACE_RIGHT, zz, tz, sz, Xz, Oz, Wz),
          up: this.CreateCubemapTexture(Fz, this.FACE_UP, zz, tz, sz, Xz, Oz, Wz),
          down: this.CreateCubemapTexture(Fz, this.FACE_DOWN, zz, tz, sz, Xz, Oz, Wz),
          size: Fz,
          type: 1,
          format: 4,
          gammaSpace: !1
        }
      }
      static CreateCubemapTexture(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        const vz = new ArrayBuffer(zz * zz * 4 * 3),
          Uz = new Float32Array(vz),
          Kz = Xz ? Math.max(1, Math.round(Fz / 4 / zz)) : 1,
          uz = 1 / Kz,
          Nz = uz * uz,
          bz = tz[1].subtract(tz[0]).scale(uz / zz),
          wz = tz[3].subtract(tz[2]).scale(uz / zz),
          Dz = 1 / zz;
        let gz = 0;
        for (let Hz = 0; Hz < zz; Hz++)
          for (let Xz = 0; Xz < Kz; Xz++) {
            let Xz = tz[0],
              vz = tz[2];
            for (let tz = 0; tz < zz; tz++)
              for (let uz = 0; uz < Kz; uz++) {
                const Kz = vz.subtract(Xz).scale(gz).add(Xz);
                Kz.normalize();
                const uz = this.CalcProjectionSpherical(Kz, sz, Fz, Wz, oz, Oz);
                Uz[Hz * zz * 3 + 3 * tz + 0] += uz.r * Nz, Uz[Hz * zz * 3 + 3 * tz + 1] += uz.g * Nz, Uz[Hz * zz * 3 + 3 * tz + 2] += uz.b * Nz, Xz = Xz.add(bz), vz = vz.add(wz)
              }
            gz += Dz * uz
          }
        return Uz
      }
      static CalcProjectionSpherical(zz, tz, sz, Fz, Wz, Xz) {
        let Oz = Math.atan2(zz.z, zz.x);
        const oz = Math.acos(zz.y);
        for (; Oz < -Math.PI;) Oz += 2 * Math.PI;
        for (; Oz > Math.PI;) Oz -= 2 * Math.PI;
        let vz = Oz / Math.PI;
        const Uz = oz / Math.PI;
        vz = .5 * vz + .5;
        let Kz = Math.round(vz * sz);
        Kz < 0 ? Kz = 0 : Kz >= sz && (Kz = sz - 1);
        let uz = Math.round(Uz * Fz);
        uz < 0 ? uz = 0 : uz >= Fz && (uz = Fz - 1);
        const Nz = Xz ? Fz - uz - 1 : uz;
        return {
          r: tz[Nz * sz * Wz + Kz * Wz + 0],
          g: tz[Nz * sz * Wz + Kz * Wz + 1],
          b: tz[Nz * sz * Wz + Kz * Wz + 2]
        }
      }
    }

    function Xz(zz, tz, sz, Fz, Wz, Xz) {
      Wz > 0 ? (Wz = function(zz, tz) {
        return tz > 1023 ? zz * Math.pow(2, 1023) * Math.pow(2, tz - 1023) : tz < -1074 ? zz * Math.pow(2, -1074) * Math.pow(2, tz + 1074) : zz * Math.pow(2, tz)
      }(1, Wz - 136), zz[Xz + 0] = tz * Wz, zz[Xz + 1] = sz * Wz, zz[Xz + 2] = Fz * Wz) : (zz[Xz + 0] = 0, zz[Xz + 1] = 0, zz[Xz + 2] = 0)
    }

    function Oz(zz, tz) {
      let sz, Fz = "";
      for (let Wz = tz; Wz < zz.length - tz && (sz = String.fromCharCode(zz[Wz]), "\n" != sz); Wz++) Fz += sz;
      return Fz
    }

    function oz(zz) {
      let tz = Oz(zz, 0);
      if ("#" != tz[0] || "?" != tz[1]) throw "Bad HDR Format.";
      let sz = !1,
        Fz = !1,
        Wz = 0;
      do {
        Wz += tz.length + 1, tz = Oz(zz, Wz), "FORMAT=32-bit_rle_rgbe" == tz ? Fz = !0 : 0 == tz.length && (sz = !0)
      } while (!sz);
      if (!Fz) throw "HDR Bad header format, unsupported FORMAT";
      Wz += tz.length + 1, tz = Oz(zz, Wz);
      const Xz = /^-Y (.*) \+X (.*)$/g.exec(tz);
      if (!Xz || Xz.length < 3) throw "HDR Bad header format, no size";
      const oz = parseInt(Xz[2]),
        vz = parseInt(Xz[1]);
      if (oz < 8 || oz > 32767) throw "HDR Bad header format, unsupported size";
      return Wz += tz.length + 1, {
        height: vz,
        width: oz,
        dataPosition: Wz
      }
    }

    function vz(zz, tz) {
      return function(zz, tz) {
        let sz = tz.height;
        const Fz = tz.width;
        let Wz, Oz, oz, vz, Kz, uz, Nz, bz, wz = tz.dataPosition;
        const Dz = new ArrayBuffer(4 * Fz),
          gz = new Uint8Array(Dz),
          Hz = new ArrayBuffer(tz.width * tz.height * 4 * 3),
          Bz = new Float32Array(Hz);
        for (; sz > 0;) {
          if (Wz = zz[wz++], Oz = zz[wz++], oz = zz[wz++], vz = zz[wz++], 2 != Wz || 2 != Oz || 128 & oz || tz.width < 8 || tz.width > 32767) return Uz(zz, tz);
          if ((oz << 8 | vz) != Fz) throw "HDR Bad header format, wrong scan line width";
          for (uz = 0, bz = 0; bz < 4; bz++)
            for (Nz = (bz + 1) * Fz; uz < Nz;)
              if (Wz = zz[wz++], Oz = zz[wz++], Wz > 128) {
                if (Kz = Wz - 128, 0 == Kz || Kz > Nz - uz) throw "HDR Bad Format, bad scanline data (run)";
                for (; Kz-- > 0;) gz[uz++] = Oz
              } else {
                if (Kz = Wz, 0 == Kz || Kz > Nz - uz) throw "HDR Bad Format, bad scanline data (non-run)";
                if (gz[uz++] = Oz, --Kz > 0)
                  for (let tz = 0; tz < Kz; tz++) gz[uz++] = zz[wz++]
              } for (bz = 0; bz < Fz; bz++) Wz = gz[bz], Oz = gz[bz + Fz], oz = gz[bz + 2 * Fz], vz = gz[bz + 3 * Fz], Xz(Bz, Wz, Oz, oz, vz, (tz.height - sz) * Fz * 3 + 3 * bz);
          sz--
        }
        return Bz
      }(zz, tz)
    }

    function Uz(zz, tz) {
      let sz = tz.height;
      const Fz = tz.width;
      let Wz, Oz, oz, vz, Uz, Kz = tz.dataPosition;
      const uz = new ArrayBuffer(tz.width * tz.height * 4 * 3),
        Nz = new Float32Array(uz);
      for (; sz > 0;) {
        for (Uz = 0; Uz < tz.width; Uz++) Wz = zz[Kz++], Oz = zz[Kz++], oz = zz[Kz++], vz = zz[Kz++], Xz(Nz, Wz, Oz, oz, vz, (tz.height - sz) * Fz * 3 + 3 * Uz);
        sz--
      }
      return Nz
    }
    Wz.FACE_LEFT = [new Fz.p(-1, -1, -1), new Fz.p(1, -1, -1), new Fz.p(-1, 1, -1), new Fz.p(1, 1, -1)], Wz.FACE_RIGHT = [new Fz.p(1, -1, 1), new Fz.p(-1, -1, 1), new Fz.p(1, 1, 1), new Fz.p(-1, 1, 1)], Wz.FACE_FRONT = [new Fz.p(1, -1, -1), new Fz.p(1, -1, 1), new Fz.p(1, 1, -1), new Fz.p(1, 1, 1)], Wz.FACE_BACK = [new Fz.p(-1, -1, 1), new Fz.p(-1, -1, -1), new Fz.p(-1, 1, 1), new Fz.p(-1, 1, -1)], Wz.FACE_DOWN = [new Fz.p(1, 1, -1), new Fz.p(1, 1, 1), new Fz.p(-1, 1, -1), new Fz.p(-1, 1, 1)], Wz.FACE_UP = [new Fz.p(-1, -1, -1), new Fz.p(-1, -1, 1), new Fz.p(1, -1, -1), new Fz.p(1, -1, 1)];
    class Kz {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".hdr not supported in Cube."
      }
      loadData(zz, tz, sz) {
        const Fz = new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength),
          Wz = oz(Fz),
          Xz = vz(Fz, Wz),
          Oz = Wz.width * Wz.height,
          Uz = new Float32Array(4 * Oz);
        for (let oz = 0; oz < Oz; oz += 1) Uz[4 * oz] = Xz[3 * oz], Uz[4 * oz + 1] = Xz[3 * oz + 1], Uz[4 * oz + 2] = Xz[3 * oz + 2], Uz[4 * oz + 3] = 1;
        sz(Wz.width, Wz.height, tz.generateMipMaps, !1, (() => {
          const zz = tz.FD();
          tz.type = 1, tz.format = 5, tz._gammaSpace = !1, zz._uploadDataToTextureDirectly(tz, Uz)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);