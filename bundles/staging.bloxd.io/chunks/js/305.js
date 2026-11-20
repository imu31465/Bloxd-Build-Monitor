export const id = 305;
export const ids = [305];
export const modules = {
  40972: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      ReadExrDataAsync: () => ut,
      _ExrTextureLoader: () => Kt
    });
    var Fz = sz(38097),
      Wz = sz(36507),
      Xz = sz(39234);
    const Oz = 4,
      oz = 4,
      vz = 1,
      Uz = 2,
      Kz = 8,
      uz = 65536,
      Nz = uz >> 3,
      bz = 14,
      wz = 65537,
      Dz = 1 << bz,
      gz = Dz - 1,
      Hz = 59,
      Bz = 63,
      Pz = 2 + Bz - Hz;
    var rz, Yz;

    function xz(zz, tz) {
      const sz = new Uint8Array(zz);
      let Fz = 0;
      for (; 0 != sz[tz.value + Fz];) Fz += 1;
      const Wz = (new TextDecoder).decode(sz.slice(tz.value, tz.value + Fz));
      return tz.value = tz.value + Fz + 1, Wz
    }

    function mz(zz, tz) {
      const sz = zz.getInt32(tz.value, !0);
      return tz.value += Oz, sz
    }

    function Jz(zz, tz) {
      const sz = zz.getUint32(tz.value, !0);
      return tz.value += Oz, sz
    }

    function Iz(zz, tz) {
      const sz = zz.getUint8(tz.value);
      return tz.value += vz, sz
    }

    function Cz(zz, tz) {
      const sz = zz.getUint16(tz.value, !0);
      return tz.value += Uz, sz
    }

    function ez(zz, tz) {
      const sz = zz[tz.value];
      return tz.value += vz, sz
    }

    function Zz(zz, tz) {
      let sz;
      return sz = "getBigInt64" in DataView.prototype ? Number(zz.getBigInt64(tz.value, !0)) : zz.getUint32(tz.value + 4, !0) + Number(zz.getUint32(tz.value, !0) << 32), tz.value += Kz, sz
    }

    function Gz(zz, tz) {
      const sz = zz.getFloat32(tz.value, !0);
      return tz.value += oz, sz
    }

    function Tz(zz, tz) {
      return (0, Xz.d)(Cz(zz, tz))
    }

    function cz(zz, tz) {
      return (0, Xz.g)((0, Wz.Clamp)(Gz(zz, tz), -Xz.f, Xz.f))
    }

    function jz(zz, tz, sz, Fz) {
      switch (sz) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(zz, tz, sz) {
            const Fz = (new TextDecoder).decode(new Uint8Array(zz).slice(tz.value, tz.value + sz));
            return tz.value = tz.value + sz, Fz
          }(zz.buffer, tz, Fz);
        case "chlist":
          return function(zz, tz, sz) {
            const Fz = tz.value,
              Wz = [];
            for (; tz.value < Fz + sz - 1;) {
              const sz = xz(zz.buffer, tz),
                Fz = mz(zz, tz),
                Xz = Iz(zz, tz);
              tz.value += 3;
              const Oz = mz(zz, tz),
                oz = mz(zz, tz);
              Wz.push({
                name: sz,
                pixelType: Fz,
                pLinear: Xz,
                xSampling: Oz,
                ySampling: oz
              })
            }
            return tz.value += 1, Wz
          }(zz, tz, Fz);
        case "chromaticities":
          return function(zz, tz) {
            return {
              redX: Gz(zz, tz),
              redY: Gz(zz, tz),
              greenX: Gz(zz, tz),
              greenY: Gz(zz, tz),
              blueX: Gz(zz, tz),
              blueY: Gz(zz, tz),
              whiteX: Gz(zz, tz),
              whiteY: Gz(zz, tz)
            }
          }(zz, tz);
        case "compression":
          return function(zz, tz) {
            return Iz(zz, tz)
          }(zz, tz);
        case "box2i":
          return function(zz, tz) {
            return {
              xMin: mz(zz, tz),
              yMin: mz(zz, tz),
              xMax: mz(zz, tz),
              yMax: mz(zz, tz)
            }
          }(zz, tz);
        case "lineOrder":
          return function(zz, tz) {
            const sz = Iz(zz, tz);
            return Yz[sz]
          }(zz, tz);
        case "float":
          return Gz(zz, tz);
        case "v2f":
          return function(zz, tz) {
            return [Gz(zz, tz), Gz(zz, tz)]
          }(zz, tz);
        case "v3f":
          return function(zz, tz) {
            return [Gz(zz, tz), Gz(zz, tz), Gz(zz, tz)]
          }(zz, tz);
        case "int":
          return mz(zz, tz);
        case "rational":
          return function(zz, tz) {
            return [mz(zz, tz), Jz(zz, tz)]
          }(zz, tz);
        case "timecode":
          return function(zz, tz) {
            return [Jz(zz, tz), Jz(zz, tz)]
          }(zz, tz);
        case "preview":
          return tz.value += Fz, "skipped";
        default:
          return void(tz.value += Fz)
      }
    }

    function Az(zz) {
      for (let tz = 1; tz < zz.length; tz++) {
        const sz = zz[tz - 1] + zz[tz] - 128;
        zz[tz] = sz
      }
    }

    function yz(zz, tz) {
      let sz = 0,
        Fz = Math.floor((zz.length + 1) / 2),
        Wz = 0;
      const Xz = zz.length - 1;
      for (; !(Wz > Xz) && (tz[Wz++] = zz[sz++], !(Wz > Xz));) tz[Wz++] = zz[Fz++]
    }! function(zz) {
      zz[zz.NO_COMPRESSION = 0] = "NO_COMPRESSION", zz[zz.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", zz[zz.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", zz[zz.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", zz[zz.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", zz[zz.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(rz || (rz = {})),
    function(zz) {
      zz[zz.INCREASING_Y = 0] = "INCREASING_Y", zz[zz.DECREASING_Y = 1] = "DECREASING_Y"
    }(Yz || (Yz = {}));
    const Mz = 20000630;

    function dz(zz, tz) {
      if (zz.getUint32(0, !0) != Mz) throw new Error("Incorrect OpenEXR format");
      const sz = zz.getUint8(4),
        Wz = zz.getUint8(5),
        Xz = {
          singleTile: !!(2 & Wz),
          longName: !!(4 & Wz),
          deepFormat: !!(8 & Wz),
          multiPart: !!(16 & Wz)
        };
      tz.value = 8;
      const Oz = {};
      let oz = !0;
      for (; oz;) {
        const sz = xz(zz.buffer, tz);
        if (sz) {
          const Wz = xz(zz.buffer, tz),
            Xz = jz(zz, tz, Wz, Jz(zz, tz));
          void 0 === Xz ? Fz.e.Warn(`Unknown header attribute type ${Wz}'.`) : Oz[sz] = Xz
        } else oz = !1
      }
      if (0 != (-5 & Wz)) throw new Error("Unsupported file format");
      return {
        version: sz,
        spec: Xz,
        ...Oz
      }
    }
    const hz = 32768,
      Qz = 65535;

    function kz(zz, tz, sz, Fz, Wz) {
      for (; sz < zz;) tz = tz << 8 | ez(Fz, Wz), sz += 8;
      return {
        l: tz >> (sz -= zz) & (1 << zz) - 1,
        c: tz,
        lc: sz
      }
    }

    function iz(zz, tz, sz, Fz) {
      return {
        c: zz = zz << 8 | ez(sz, Fz),
        lc: tz += 8
      }
    }

    function Lz(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
      if (zz == tz) {
        if (Fz < 8) {
          const zz = iz(sz, Fz, Wz, Xz);
          sz = zz.c, Fz = zz.lc
        }
        let zz = sz >> (Fz -= 8);
        if (zz = new Uint8Array([zz])[0], oz.value + zz > vz) return null;
        const tz = Oz[oz.value - 1];
        for (; zz-- > 0;) Oz[oz.value++] = tz
      } else {
        if (!(oz.value < vz)) return null;
        Oz[oz.value++] = zz
      }
      return {
        c: sz,
        lc: Fz
      }
    }
    const lz = new Array(59);

    function nz(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = tz;
      let oz = 0,
        vz = 0;
      for (; Fz <= Wz; Fz++) {
        if (Oz.value - tz.value > sz) return;
        let Uz = kz(6, oz, vz, zz, Oz);
        const Kz = Uz.l;
        if (oz = Uz.c, vz = Uz.lc, Xz[Fz] = Kz, Kz == Bz) {
          if (Oz.value - tz.value > sz) throw new Error("Error in HufUnpackEncTable");
          Uz = kz(8, oz, vz, zz, Oz);
          let Kz = Uz.l + Pz;
          if (oz = Uz.c, vz = Uz.lc, Fz + Kz > Wz + 1) throw new Error("Error in HufUnpackEncTable");
          for (; Kz--;) Xz[Fz++] = 0;
          Fz--
        } else if (Kz >= Hz) {
          let zz = Kz - Hz + 2;
          if (Fz + zz > Wz + 1) throw new Error("Error in HufUnpackEncTable");
          for (; zz--;) Xz[Fz++] = 0;
          Fz--
        }
      }! function(zz) {
        for (let sz = 0; sz <= 58; ++sz) lz[sz] = 0;
        for (let sz = 0; sz < wz; ++sz) lz[zz[sz]] += 1;
        let tz = 0;
        for (let sz = 58; sz > 0; --sz) {
          const zz = tz + lz[sz] >> 1;
          lz[sz] = tz, tz = zz
        }
        for (let sz = 0; sz < wz; ++sz) {
          const tz = zz[sz];
          tz > 0 && (zz[sz] = tz | lz[tz]++ << 6)
        }
      }(Xz)
    }

    function az(zz) {
      return 63 & zz
    }

    function qz(zz) {
      return zz >> 6
    }

    function Sz(zz, tz, sz, Fz, Wz, Xz) {
      const Oz = sz.value,
        oz = Jz(tz, sz),
        vz = Jz(tz, sz);
      sz.value += 4;
      const Uz = Jz(tz, sz);
      if (sz.value += 4, oz < 0 || oz >= wz || vz < 0 || vz >= wz) throw new Error("Wrong HUF_ENCSIZE");
      const Kz = new Array(wz),
        uz = new Array(Dz);
      ! function(zz) {
        for (let tz = 0; tz < Dz; tz++) zz[tz] = {}, zz[tz].len = 0, zz[tz].lit = 0, zz[tz].p = null
      }(uz);
      if (nz(zz, sz, Fz - (sz.value - Oz), oz, vz, Kz), Uz > 8 * (Fz - (sz.value - Oz))) throw new Error("Wrong hufUncompress");
      ! function(zz, tz, sz, Fz) {
        for (; tz <= sz; tz++) {
          const sz = qz(zz[tz]),
            Wz = az(zz[tz]);
          if (sz >> Wz) throw new Error("Invalid table entry");
          if (Wz > bz) {
            const zz = Fz[sz >> Wz - bz];
            if (zz.len) throw new Error("Invalid table entry");
            if (zz.lit++, zz.p) {
              const tz = zz.p;
              zz.p = new Array(zz.lit);
              for (let sz = 0; sz < zz.lit - 1; ++sz) zz.p[sz] = tz[sz]
            } else zz.p = new Array(1);
            zz.p[zz.lit - 1] = tz
          } else if (Wz) {
            let zz = 0;
            for (let Xz = 1 << bz - Wz; Xz > 0; Xz--) {
              const Xz = Fz[(sz << bz - Wz) + zz];
              if (Xz.len || Xz.p) throw new Error("Invalid table entry");
              Xz.len = Wz, Xz.lit = tz, zz++
            }
          }
        }
      }(Kz, oz, vz, uz),
      function(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
        let Uz = 0,
          Kz = 0;
        const uz = Oz,
          Nz = Math.trunc(Fz.value + (Wz + 7) / 8);
        for (; Fz.value < Nz;) {
          let Wz = iz(Uz, Kz, sz, Fz);
          for (Uz = Wz.c, Kz = Wz.lc; Kz >= bz;) {
            const Oz = tz[Uz >> Kz - bz & gz];
            if (Oz.len) {
              Kz -= Oz.len;
              const zz = Lz(Oz.lit, Xz, Uz, Kz, sz, Fz, oz, vz, uz);
              zz && (Uz = zz.c, Kz = zz.lc)
            } else {
              if (!Oz.p) throw new Error("hufDecode issues");
              let tz;
              for (tz = 0; tz < Oz.lit; tz++) {
                const bz = az(zz[Oz.p[tz]]);
                for (; Kz < bz && Fz.value < Nz;) Wz = iz(Uz, Kz, sz, Fz), Uz = Wz.c, Kz = Wz.lc;
                if (Kz >= bz && qz(zz[Oz.p[tz]]) == (Uz >> Kz - bz & (1 << bz) - 1)) {
                  Kz -= bz;
                  const zz = Lz(Oz.p[tz], Xz, Uz, Kz, sz, Fz, oz, vz, uz);
                  zz && (Uz = zz.c, Kz = zz.lc);
                  break
                }
              }
              if (tz == Oz.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const wz = 8 - Wz & 7;
        for (Uz >>= wz, Kz -= wz; Kz > 0;) {
          const zz = tz[Uz << bz - Kz & gz];
          if (!zz.len) throw new Error("HufDecode issues");
          {
            Kz -= zz.len;
            const tz = Lz(zz.lit, Xz, Uz, Kz, sz, Fz, oz, vz, uz);
            tz && (Uz = tz.c, Kz = tz.lc)
          }
        }
      }(Kz, uz, zz, sz, Uz, vz, Xz, Wz, {
        value: 0
      })
    }

    function Vz(zz) {
      return 65535 & zz
    }

    function Rz(zz) {
      const tz = Vz(zz);
      return tz > 32767 ? tz - 65536 : tz
    }

    function pz(zz, tz) {
      const sz = Rz(zz),
        Fz = Rz(tz),
        Wz = sz + (1 & Fz) + (Fz >> 1);
      return {
        a: Wz,
        b: Wz - Fz
      }
    }

    function fz(zz, tz) {
      const sz = Vz(zz),
        Fz = Vz(tz),
        Wz = sz - (Fz >> 1) & Qz;
      return {
        a: Fz + Wz - hz & Qz,
        b: Wz
      }
    }

    function Ez(zz, tz, sz, Fz, Wz, Xz, Oz) {
      const oz = Oz < 16384,
        vz = sz > Wz ? Wz : sz;
      let Uz, Kz, uz = 1;
      for (; uz <= vz;) uz <<= 1;
      for (uz >>= 1, Uz = uz, uz >>= 1; uz >= 1;) {
        Kz = 0;
        const Oz = Kz + Xz * (Wz - Uz),
          vz = Xz * uz,
          Nz = Xz * Uz,
          bz = Fz * uz,
          wz = Fz * Uz;
        let Dz, gz, Hz, Bz;
        for (; Kz <= Oz; Kz += Nz) {
          let Wz = Kz;
          const Xz = Kz + Fz * (sz - Uz);
          for (; Wz <= Xz; Wz += wz) {
            const sz = Wz + bz,
              Fz = Wz + vz,
              Xz = Fz + bz;
            if (oz) {
              let Oz = pz(zz[Wz + tz], zz[Fz + tz]);
              Dz = Oz.a, Hz = Oz.b, Oz = pz(zz[sz + tz], zz[Xz + tz]), gz = Oz.a, Bz = Oz.b, Oz = pz(Dz, gz), zz[Wz + tz] = Oz.a, zz[sz + tz] = Oz.b, Oz = pz(Hz, Bz), zz[Fz + tz] = Oz.a, zz[Xz + tz] = Oz.b
            } else {
              let Oz = fz(zz[Wz + tz], zz[Fz + tz]);
              Dz = Oz.a, Hz = Oz.b, Oz = fz(zz[sz + tz], zz[Xz + tz]), gz = Oz.a, Bz = Oz.b, Oz = fz(Dz, gz), zz[Wz + tz] = Oz.a, zz[sz + tz] = Oz.b, Oz = fz(Hz, Bz), zz[Fz + tz] = Oz.a, zz[Xz + tz] = Oz.b
            }
          }
          if (sz & uz) {
            const sz = Wz + vz;
            let Fz;
            Fz = oz ? pz(zz[Wz + tz], zz[sz + tz]) : fz(zz[Wz + tz], zz[sz + tz]), Dz = Fz.a, zz[sz + tz] = Fz.b, zz[Wz + tz] = Dz
          }
        }
        if (Wz & uz) {
          let Wz = Kz;
          const Xz = Kz + Fz * (sz - Uz);
          for (; Wz <= Xz; Wz += wz) {
            const sz = Wz + bz;
            let Fz;
            Fz = oz ? pz(zz[Wz + tz], zz[sz + tz]) : fz(zz[Wz + tz], zz[sz + tz]), Dz = Fz.a, zz[sz + tz] = Fz.b, zz[Wz + tz] = Dz
          }
        }
        Uz = uz, uz >>= 1
      }
      return Kz
    }

    function zt(zz) {
      return new DataView(zz.array.buffer, zz.offset.value, zz.size)
    }

    function tt(zz) {
      const tz = zz.viewer.buffer.slice(zz.offset.value, zz.offset.value + zz.size),
        sz = new Uint8Array(function(zz) {
          let tz = zz.byteLength;
          const sz = [];
          let Fz = 0;
          const Wz = new DataView(zz);
          for (; tz > 0;) {
            const zz = Wz.getInt8(Fz++);
            if (zz < 0) {
              const Xz = -zz;
              tz -= Xz + 1;
              for (let zz = 0; zz < Xz; zz++) sz.push(Wz.getUint8(Fz++))
            } else {
              const Xz = zz;
              tz -= 2;
              const Oz = Wz.getUint8(Fz++);
              for (let zz = 0; zz < Xz + 1; zz++) sz.push(Oz)
            }
          }
          return sz
        }(tz)),
        Fz = new Uint8Array(sz.length);
      return Az(sz), yz(sz, Fz), new DataView(Fz.buffer)
    }

    function st(zz) {
      const tz = zz.array.slice(zz.offset.value, zz.offset.value + zz.size),
        sz = fflate.unzlibSync(tz),
        Fz = new Uint8Array(sz.length);
      return Az(sz), yz(sz, Fz), new DataView(Fz.buffer)
    }

    function Ft(zz) {
      const tz = zz.array.slice(zz.offset.value, zz.offset.value + zz.size),
        sz = fflate.unzlibSync(tz),
        Fz = zz.lines * zz.channels * zz.width,
        Wz = 1 == zz.type ? new Uint16Array(Fz) : new Uint32Array(Fz);
      let Xz = 0,
        Oz = 0;
      const oz = new Array(4);
      for (let vz = 0; vz < zz.lines; vz++)
        for (let tz = 0; tz < zz.channels; tz++) {
          let tz = 0;
          switch (zz.type) {
            case 1:
              oz[0] = Xz, oz[1] = oz[0] + zz.width, Xz = oz[1] + zz.width;
              for (let Fz = 0; Fz < zz.width; ++Fz) {
                tz += sz[oz[0]++] << 8 | sz[oz[1]++], Wz[Oz] = tz, Oz++
              }
              break;
            case 2:
              oz[0] = Xz, oz[1] = oz[0] + zz.width, oz[2] = oz[1] + zz.width, Xz = oz[2] + zz.width;
              for (let Fz = 0; Fz < zz.width; ++Fz) {
                tz += sz[oz[0]++] << 24 | sz[oz[1]++] << 16 | sz[oz[2]++] << 8, Wz[Oz] = tz, Oz++
              }
          }
        }
      return new DataView(Wz.buffer)
    }

    function Wt(zz) {
      const tz = zz.viewer,
        sz = {
          value: zz.offset.value
        },
        Fz = new Uint16Array(zz.width * zz.scanlineBlockSize * (zz.channels * zz.type)),
        Wz = new Uint8Array(Nz);
      let Xz = 0;
      const Oz = new Array(zz.channels);
      for (let Uz = 0; Uz < zz.channels; Uz++) Oz[Uz] = {}, Oz[Uz].start = Xz, Oz[Uz].end = Oz[Uz].start, Oz[Uz].nx = zz.width, Oz[Uz].ny = zz.lines, Oz[Uz].size = zz.type, Xz += Oz[Uz].nx * Oz[Uz].ny * Oz[Uz].size;
      const oz = Cz(tz, sz),
        vz = Cz(tz, sz);
      if (vz >= Nz) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (oz <= vz)
        for (let Uz = 0; Uz < vz - oz + 1; Uz++) Wz[Uz + oz] = Iz(tz, sz);
      const Kz = new Uint16Array(uz),
        bz = function(zz, tz) {
          let sz = 0;
          for (let Wz = 0; Wz < uz; ++Wz)(0 == Wz || zz[Wz >> 3] & 1 << (7 & Wz)) && (tz[sz++] = Wz);
          const Fz = sz - 1;
          for (; sz < uz;) tz[sz++] = 0;
          return Fz
        }(Wz, Kz),
        wz = Jz(tz, sz);
      Sz(zz.array, tz, sz, wz, Fz, Xz);
      for (let Uz = 0; Uz < zz.channels; ++Uz) {
        const zz = Oz[Uz];
        for (let tz = 0; tz < Oz[Uz].size; ++tz) Ez(Fz, zz.start + tz, zz.nx, zz.size, zz.ny, zz.nx * zz.size, bz)
      }! function(zz, tz, sz) {
        for (let Fz = 0; Fz < sz; ++Fz) tz[Fz] = zz[tz[Fz]]
      }(Kz, Fz, Xz);
      let Dz = 0;
      const gz = new Uint8Array(Fz.buffer.byteLength);
      for (let uz = 0; uz < zz.lines; uz++)
        for (let tz = 0; tz < zz.channels; tz++) {
          const zz = Oz[tz],
            sz = zz.nx * zz.size,
            Wz = new Uint8Array(Fz.buffer, zz.end * Uz, sz * Uz);
          gz.set(Wz, Dz), Dz += sz * Uz, zz.end += sz
        }
      return new DataView(gz.buffer)
    }
    var Xt, Ot = sz(39264);
    ! function(zz) {
      zz[zz.Float = 0] = "Float", zz[zz.HalfFloat = 1] = "HalfFloat"
    }(Xt || (Xt = {}));
    class ot {}
    async function vt(zz, tz, sz, Fz) {
      const Wz = {
        size: 0,
        viewer: tz,
        array: new Uint8Array(tz.buffer),
        offset: sz,
        width: zz.dataWindow.xMax - zz.dataWindow.xMin + 1,
        height: zz.dataWindow.yMax - zz.dataWindow.yMin + 1,
        channels: zz.channels.length,
        channelLineOffsets: {},
        scanOrder: () => 0,
        bytesPerLine: 0,
        outLineWidth: 0,
        lines: 0,
        scanlineBlockSize: 0,
        inputSize: null,
        type: 0,
        uncompress: null,
        getter: () => 0,
        format: 5,
        outputChannels: 0,
        decodeChannels: {},
        blockCount: null,
        byteArray: null,
        linearSpace: !1,
        textureType: 0
      };
      switch (zz.compression) {
        case rz.NO_COMPRESSION:
          Wz.lines = 1, Wz.uncompress = zt;
          break;
        case rz.RLE_COMPRESSION:
          Wz.lines = 1, Wz.uncompress = tt;
          break;
        case rz.ZIPS_COMPRESSION:
          Wz.lines = 1, Wz.uncompress = st, await Ot.j.LoadScriptAsync(ot.FFLATEUrl);
          break;
        case rz.ZIP_COMPRESSION:
          Wz.lines = 16, Wz.uncompress = st, await Ot.j.LoadScriptAsync(ot.FFLATEUrl);
          break;
        case rz.PIZ_COMPRESSION:
          Wz.lines = 32, Wz.uncompress = Wt;
          break;
        case rz.PXR24_COMPRESSION:
          Wz.lines = 16, Wz.uncompress = Ft, await Ot.j.LoadScriptAsync(ot.FFLATEUrl);
          break;
        default:
          throw new Error(rz[zz.compression] + " is unsupported")
      }
      Wz.scanlineBlockSize = Wz.lines;
      const Xz = {};
      for (const oz of zz.channels) switch (oz.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          Xz[oz.name] = !0, Wz.type = oz.pixelType
      }
      let Oz = !1;
      if (Xz.R && Xz.G && Xz.B && Xz.A) Wz.outputChannels = 4, Wz.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Xz.R && Xz.G && Xz.B) Oz = !0, Wz.outputChannels = 4, Wz.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Xz.R && Xz.G) Wz.outputChannels = 2, Wz.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (Xz.R) Wz.outputChannels = 1, Wz.decodeChannels = {
        R: 0
      };
      else {
        if (!Xz.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Wz.outputChannels = 1, Wz.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Wz.type) switch (Fz) {
        case Xt.Float:
          Wz.getter = Tz, Wz.inputSize = Uz;
          break;
        case Xt.HalfFloat:
          Wz.getter = Cz, Wz.inputSize = Uz
      } else {
        if (2 !== Wz.type) throw new Error("Unsupported pixelType " + Wz.type + " for " + zz.compression);
        switch (Fz) {
          case Xt.Float:
            Wz.getter = Gz, Wz.inputSize = oz;
            break;
          case Xt.HalfFloat:
            Wz.getter = cz, Wz.inputSize = oz
        }
      }
      Wz.blockCount = Wz.height / Wz.scanlineBlockSize;
      for (let oz = 0; oz < Wz.blockCount; oz++) Zz(tz, sz);
      const vz = Wz.width * Wz.height * Wz.outputChannels;
      switch (Fz) {
        case Xt.Float:
          Wz.byteArray = new Float32Array(vz), Wz.textureType = 1, Oz && Wz.byteArray.fill(1, 0, vz);
          break;
        case Xt.HalfFloat:
          Wz.byteArray = new Uint16Array(vz), Wz.textureType = 2, Oz && Wz.byteArray.fill(15360, 0, vz);
          break;
        default:
          throw new Error("Unsupported type: " + Fz)
      }
      let Kz = 0;
      for (const oz of zz.channels) void 0 !== Wz.decodeChannels[oz.name] && (Wz.channelLineOffsets[oz.name] = Kz * Wz.width), Kz += 2 * oz.pixelType;
      return Wz.bytesPerLine = Wz.width * Kz, Wz.outLineWidth = Wz.width * Wz.outputChannels, "INCREASING_Y" === zz.lineOrder ? Wz.scanOrder = zz => zz : Wz.scanOrder = zz => Wz.height - 1 - zz, 4 == Wz.outputChannels ? (Wz.format = 5, Wz.linearSpace = !0) : (Wz.format = 6, Wz.linearSpace = !1), Wz
    }

    function Ut(zz, tz, sz, Fz) {
      const Wz = {
        value: 0
      };
      for (let Xz = 0; Xz < zz.height / zz.scanlineBlockSize; Xz++) {
        const Oz = mz(sz, Fz) - tz.dataWindow.yMin;
        zz.size = Jz(sz, Fz), zz.lines = Oz + zz.scanlineBlockSize > zz.height ? zz.height - Oz : zz.scanlineBlockSize;
        const oz = zz.size < zz.lines * zz.bytesPerLine && zz.uncompress ? zz.uncompress(zz) : zt(zz);
        Fz.value += zz.size;
        for (let sz = 0; sz < zz.scanlineBlockSize; sz++) {
          const Fz = Xz * zz.scanlineBlockSize,
            Oz = sz + zz.scanOrder(Fz);
          if (Oz >= zz.height) continue;
          const vz = sz * zz.bytesPerLine,
            Uz = (zz.height - 1 - Oz) * zz.outLineWidth;
          for (let sz = 0; sz < zz.channels; sz++) {
            const Fz = tz.channels[sz].name,
              Xz = zz.channelLineOffsets[Fz],
              Oz = zz.decodeChannels[Fz];
            if (void 0 !== Oz) {
              Wz.value = vz + Xz;
              for (let tz = 0; tz < zz.width; tz++) {
                const sz = Uz + tz * zz.outputChannels + Oz;
                zz.byteArray && (zz.byteArray[sz] = zz.getter(oz, Wz))
              }
            }
          }
        }
      }
    }
    ot.DefaultOutputType = Xt.HalfFloat, ot.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Kt {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(zz, tz, sz, Fz, Wz) {
        throw ".exr not supported in Cube."
      }
      loadData(zz, tz, sz) {
        const Wz = new DataView(zz.buffer),
          Xz = {
            value: 0
          },
          Oz = dz(Wz, Xz);
        vt(Oz, Wz, Xz, ot.DefaultOutputType).then((zz => {
          Ut(zz, Oz, Wz, Xz);
          const Fz = Oz.dataWindow.xMax - Oz.dataWindow.xMin + 1,
            oz = Oz.dataWindow.yMax - Oz.dataWindow.yMin + 1;
          sz(Fz, oz, tz.generateMipMaps, !1, (() => {
            const sz = tz.FD();
            tz.format = Oz.format, tz.type = zz.textureType, tz.invertY = !1, tz._gammaSpace = !Oz.linearSpace, zz.byteArray && sz._uploadDataToTextureDirectly(tz, zz.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((zz => {
          Fz.e.Error("Failed to load EXR texture: ", zz)
        }))
      }
    }
    async function ut(zz) {
      const tz = new DataView(zz),
        sz = {
          value: 0
        },
        Wz = dz(tz, sz);
      try {
        const zz = await vt(Wz, tz, sz, Xt.Float);
        return Ut(zz, Wz, tz, sz), zz.byteArray ? {
          width: Wz.dataWindow.xMax - Wz.dataWindow.xMin + 1,
          height: Wz.dataWindow.yMax - Wz.dataWindow.yMin + 1,
          data: new Float32Array(zz.byteArray)
        } : (Fz.e.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (Xz) {
        Fz.e.Error("Failed to load EXR data: ", Xz)
      }
      return {
        width: 0,
        height: 0,
        data: null
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);