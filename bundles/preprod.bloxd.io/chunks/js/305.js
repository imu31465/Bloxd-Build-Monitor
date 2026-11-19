export const id = 305;
export const ids = [305];
export const modules = {
  41074: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      ReadExrDataAsync: () => pu,
      _ExrTextureLoader: () => Ou
    });
    var Ez = bz(38060),
      nz = bz(36553),
      iz = bz(39231);
    const lz = 4,
      Mz = 4,
      tz = 1,
      Hz = 2,
      Oz = 8,
      pz = 65536,
      dz = pz >> 3,
      Fz = 14,
      Zz = 65537,
      Rz = 1 << Fz,
      Kz = Rz - 1,
      wz = 59,
      Xz = 63,
      fz = 2 + Xz - wz;
    var sz, rz;

    function oz(zz, uz) {
      const bz = new Uint8Array(zz);
      let Ez = 0;
      for (; 0 != bz[uz.value + Ez];) Ez += 1;
      const nz = (new TextDecoder).decode(bz.slice(uz.value, uz.value + Ez));
      return uz.value = uz.value + Ez + 1, nz
    }

    function Nz(zz, uz) {
      const bz = zz.getInt32(uz.value, !0);
      return uz.value += lz, bz
    }

    function vz(zz, uz) {
      const bz = zz.getUint32(uz.value, !0);
      return uz.value += lz, bz
    }

    function xz(zz, uz) {
      const bz = zz.getUint8(uz.value);
      return uz.value += tz, bz
    }

    function Jz(zz, uz) {
      const bz = zz.getUint16(uz.value, !0);
      return uz.value += Hz, bz
    }

    function Az(zz, uz) {
      const bz = zz[uz.value];
      return uz.value += tz, bz
    }

    function Tz(zz, uz) {
      let bz;
      return bz = "getBigInt64" in DataView.prototype ? Number(zz.getBigInt64(uz.value, !0)) : zz.getUint32(uz.value + 4, !0) + Number(zz.getUint32(uz.value, !0) << 32), uz.value += Oz, bz
    }

    function Lz(zz, uz) {
      const bz = zz.getFloat32(uz.value, !0);
      return uz.value += Mz, bz
    }

    function Pz(zz, uz) {
      return (0, iz.e)(Jz(zz, uz))
    }

    function Gz(zz, uz) {
      return (0, iz.i)((0, nz.Clamp)(Lz(zz, uz), -iz.f, iz.f))
    }

    function az(zz, uz, bz, Ez) {
      switch (bz) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(zz, uz, bz) {
            const Ez = (new TextDecoder).decode(new Uint8Array(zz).slice(uz.value, uz.value + bz));
            return uz.value = uz.value + bz, Ez
          }(zz.buffer, uz, Ez);
        case "chlist":
          return function(zz, uz, bz) {
            const Ez = uz.value,
              nz = [];
            for (; uz.value < Ez + bz - 1;) {
              const bz = oz(zz.buffer, uz),
                Ez = Nz(zz, uz),
                iz = xz(zz, uz);
              uz.value += 3;
              const lz = Nz(zz, uz),
                Mz = Nz(zz, uz);
              nz.push({
                name: bz,
                pixelType: Ez,
                pLinear: iz,
                xSampling: lz,
                ySampling: Mz
              })
            }
            return uz.value += 1, nz
          }(zz, uz, Ez);
        case "chromaticities":
          return function(zz, uz) {
            return {
              redX: Lz(zz, uz),
              redY: Lz(zz, uz),
              greenX: Lz(zz, uz),
              greenY: Lz(zz, uz),
              blueX: Lz(zz, uz),
              blueY: Lz(zz, uz),
              whiteX: Lz(zz, uz),
              whiteY: Lz(zz, uz)
            }
          }(zz, uz);
        case "compression":
          return function(zz, uz) {
            return xz(zz, uz)
          }(zz, uz);
        case "box2i":
          return function(zz, uz) {
            return {
              xMin: Nz(zz, uz),
              yMin: Nz(zz, uz),
              xMax: Nz(zz, uz),
              yMax: Nz(zz, uz)
            }
          }(zz, uz);
        case "lineOrder":
          return function(zz, uz) {
            const bz = xz(zz, uz);
            return rz[bz]
          }(zz, uz);
        case "float":
          return Lz(zz, uz);
        case "v2f":
          return function(zz, uz) {
            return [Lz(zz, uz), Lz(zz, uz)]
          }(zz, uz);
        case "v3f":
          return function(zz, uz) {
            return [Lz(zz, uz), Lz(zz, uz), Lz(zz, uz)]
          }(zz, uz);
        case "int":
          return Nz(zz, uz);
        case "rational":
          return function(zz, uz) {
            return [Nz(zz, uz), vz(zz, uz)]
          }(zz, uz);
        case "timecode":
          return function(zz, uz) {
            return [vz(zz, uz), vz(zz, uz)]
          }(zz, uz);
        case "preview":
          return uz.value += Ez, "skipped";
        default:
          return void(uz.value += Ez)
      }
    }

    function Vz(zz) {
      for (let uz = 1; uz < zz.length; uz++) {
        const bz = zz[uz - 1] + zz[uz] - 128;
        zz[uz] = bz
      }
    }

    function mz(zz, uz) {
      let bz = 0,
        Ez = Math.floor((zz.length + 1) / 2),
        nz = 0;
      const iz = zz.length - 1;
      for (; !(nz > iz) && (uz[nz++] = zz[bz++], !(nz > iz));) uz[nz++] = zz[Ez++]
    }! function(zz) {
      zz[zz.NO_COMPRESSION = 0] = "NO_COMPRESSION", zz[zz.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", zz[zz.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", zz[zz.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", zz[zz.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", zz[zz.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(sz || (sz = {})),
    function(zz) {
      zz[zz.INCREASING_Y = 0] = "INCREASING_Y", zz[zz.DECREASING_Y = 1] = "DECREASING_Y"
    }(rz || (rz = {}));
    const qz = 20000630;

    function hz(zz, uz) {
      if (zz.getUint32(0, !0) != qz) throw new Error("Incorrect OpenEXR format");
      const bz = zz.getUint8(4),
        nz = zz.getUint8(5),
        iz = {
          singleTile: !!(2 & nz),
          longName: !!(4 & nz),
          deepFormat: !!(8 & nz),
          multiPart: !!(16 & nz)
        };
      uz.value = 8;
      const lz = {};
      let Mz = !0;
      for (; Mz;) {
        const bz = oz(zz.buffer, uz);
        if (bz) {
          const nz = oz(zz.buffer, uz),
            iz = az(zz, uz, nz, vz(zz, uz));
          void 0 === iz ? Ez.e.Warn(`Unknown header attribute type ${nz}'.`) : lz[bz] = iz
        } else Mz = !1
      }
      if (0 != (-5 & nz)) throw new Error("Unsupported file format");
      return {
        version: bz,
        spec: iz,
        ...lz
      }
    }
    const Uz = 32768,
      cz = 65535;

    function gz(zz, uz, bz, Ez, nz) {
      for (; bz < zz;) uz = uz << 8 | Az(Ez, nz), bz += 8;
      return {
        l: uz >> (bz -= zz) & (1 << zz) - 1,
        c: uz,
        lc: bz
      }
    }

    function Sz(zz, uz, bz, Ez) {
      return {
        c: zz = zz << 8 | Az(bz, Ez),
        lc: uz += 8
      }
    }

    function yz(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
      if (zz == uz) {
        if (Ez < 8) {
          const zz = Sz(bz, Ez, nz, iz);
          bz = zz.c, Ez = zz.lc
        }
        let zz = bz >> (Ez -= 8);
        if (zz = new Uint8Array([zz])[0], Mz.value + zz > tz) return null;
        const uz = lz[Mz.value - 1];
        for (; zz-- > 0;) lz[Mz.value++] = uz
      } else {
        if (!(Mz.value < tz)) return null;
        lz[Mz.value++] = zz
      }
      return {
        c: bz,
        lc: Ez
      }
    }
    const Dz = new Array(59);

    function Qz(zz, uz, bz, Ez, nz, iz) {
      const lz = uz;
      let Mz = 0,
        tz = 0;
      for (; Ez <= nz; Ez++) {
        if (lz.value - uz.value > bz) return;
        let Hz = gz(6, Mz, tz, zz, lz);
        const Oz = Hz.l;
        if (Mz = Hz.c, tz = Hz.lc, iz[Ez] = Oz, Oz == Xz) {
          if (lz.value - uz.value > bz) throw new Error("Error in HufUnpackEncTable");
          Hz = gz(8, Mz, tz, zz, lz);
          let Oz = Hz.l + fz;
          if (Mz = Hz.c, tz = Hz.lc, Ez + Oz > nz + 1) throw new Error("Error in HufUnpackEncTable");
          for (; Oz--;) iz[Ez++] = 0;
          Ez--
        } else if (Oz >= wz) {
          let zz = Oz - wz + 2;
          if (Ez + zz > nz + 1) throw new Error("Error in HufUnpackEncTable");
          for (; zz--;) iz[Ez++] = 0;
          Ez--
        }
      }! function(zz) {
        for (let bz = 0; bz <= 58; ++bz) Dz[bz] = 0;
        for (let bz = 0; bz < Zz; ++bz) Dz[zz[bz]] += 1;
        let uz = 0;
        for (let bz = 58; bz > 0; --bz) {
          const zz = uz + Dz[bz] >> 1;
          Dz[bz] = uz, uz = zz
        }
        for (let bz = 0; bz < Zz; ++bz) {
          const uz = zz[bz];
          uz > 0 && (zz[bz] = uz | Dz[uz]++ << 6)
        }
      }(iz)
    }

    function Wz(zz) {
      return 63 & zz
    }

    function ez(zz) {
      return zz >> 6
    }

    function jz(zz, uz, bz, Ez, nz, iz) {
      const lz = bz.value,
        Mz = vz(uz, bz),
        tz = vz(uz, bz);
      bz.value += 4;
      const Hz = vz(uz, bz);
      if (bz.value += 4, Mz < 0 || Mz >= Zz || tz < 0 || tz >= Zz) throw new Error("Wrong HUF_ENCSIZE");
      const Oz = new Array(Zz),
        pz = new Array(Rz);
      ! function(zz) {
        for (let uz = 0; uz < Rz; uz++) zz[uz] = {}, zz[uz].len = 0, zz[uz].lit = 0, zz[uz].p = null
      }(pz);
      if (Qz(zz, bz, Ez - (bz.value - lz), Mz, tz, Oz), Hz > 8 * (Ez - (bz.value - lz))) throw new Error("Wrong hufUncompress");
      ! function(zz, uz, bz, Ez) {
        for (; uz <= bz; uz++) {
          const bz = ez(zz[uz]),
            nz = Wz(zz[uz]);
          if (bz >> nz) throw new Error("Invalid table entry");
          if (nz > Fz) {
            const zz = Ez[bz >> nz - Fz];
            if (zz.len) throw new Error("Invalid table entry");
            if (zz.lit++, zz.p) {
              const uz = zz.p;
              zz.p = new Array(zz.lit);
              for (let bz = 0; bz < zz.lit - 1; ++bz) zz.p[bz] = uz[bz]
            } else zz.p = new Array(1);
            zz.p[zz.lit - 1] = uz
          } else if (nz) {
            let zz = 0;
            for (let iz = 1 << Fz - nz; iz > 0; iz--) {
              const iz = Ez[(bz << Fz - nz) + zz];
              if (iz.len || iz.p) throw new Error("Invalid table entry");
              iz.len = nz, iz.lit = uz, zz++
            }
          }
        }
      }(Oz, Mz, tz, pz),
      function(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        let Hz = 0,
          Oz = 0;
        const pz = lz,
          dz = Math.trunc(Ez.value + (nz + 7) / 8);
        for (; Ez.value < dz;) {
          let nz = Sz(Hz, Oz, bz, Ez);
          for (Hz = nz.c, Oz = nz.lc; Oz >= Fz;) {
            const lz = uz[Hz >> Oz - Fz & Kz];
            if (lz.len) {
              Oz -= lz.len;
              const zz = yz(lz.lit, iz, Hz, Oz, bz, Ez, Mz, tz, pz);
              zz && (Hz = zz.c, Oz = zz.lc)
            } else {
              if (!lz.p) throw new Error("hufDecode issues");
              let uz;
              for (uz = 0; uz < lz.lit; uz++) {
                const Fz = Wz(zz[lz.p[uz]]);
                for (; Oz < Fz && Ez.value < dz;) nz = Sz(Hz, Oz, bz, Ez), Hz = nz.c, Oz = nz.lc;
                if (Oz >= Fz && ez(zz[lz.p[uz]]) == (Hz >> Oz - Fz & (1 << Fz) - 1)) {
                  Oz -= Fz;
                  const zz = yz(lz.p[uz], iz, Hz, Oz, bz, Ez, Mz, tz, pz);
                  zz && (Hz = zz.c, Oz = zz.lc);
                  break
                }
              }
              if (uz == lz.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const Zz = 8 - nz & 7;
        for (Hz >>= Zz, Oz -= Zz; Oz > 0;) {
          const zz = uz[Hz << Fz - Oz & Kz];
          if (!zz.len) throw new Error("HufDecode issues");
          {
            Oz -= zz.len;
            const uz = yz(zz.lit, iz, Hz, Oz, bz, Ez, Mz, tz, pz);
            uz && (Hz = uz.c, Oz = uz.lc)
          }
        }
      }(Oz, pz, zz, bz, Hz, tz, iz, nz, {
        value: 0
      })
    }

    function Iz(zz) {
      return 65535 & zz
    }

    function Bz(zz) {
      const uz = Iz(zz);
      return uz > 32767 ? uz - 65536 : uz
    }

    function Cz(zz, uz) {
      const bz = Bz(zz),
        Ez = Bz(uz),
        nz = bz + (1 & Ez) + (Ez >> 1);
      return {
        a: nz,
        b: nz - Ez
      }
    }

    function Yz(zz, uz) {
      const bz = Iz(zz),
        Ez = Iz(uz),
        nz = bz - (Ez >> 1) & cz;
      return {
        a: Ez + nz - Uz & cz,
        b: nz
      }
    }

    function kz(zz, uz, bz, Ez, nz, iz, lz) {
      const Mz = lz < 16384,
        tz = bz > nz ? nz : bz;
      let Hz, Oz, pz = 1;
      for (; pz <= tz;) pz <<= 1;
      for (pz >>= 1, Hz = pz, pz >>= 1; pz >= 1;) {
        Oz = 0;
        const lz = Oz + iz * (nz - Hz),
          tz = iz * pz,
          dz = iz * Hz,
          Fz = Ez * pz,
          Zz = Ez * Hz;
        let Rz, Kz, wz, Xz;
        for (; Oz <= lz; Oz += dz) {
          let nz = Oz;
          const iz = Oz + Ez * (bz - Hz);
          for (; nz <= iz; nz += Zz) {
            const bz = nz + Fz,
              Ez = nz + tz,
              iz = Ez + Fz;
            if (Mz) {
              let lz = Cz(zz[nz + uz], zz[Ez + uz]);
              Rz = lz.a, wz = lz.b, lz = Cz(zz[bz + uz], zz[iz + uz]), Kz = lz.a, Xz = lz.b, lz = Cz(Rz, Kz), zz[nz + uz] = lz.a, zz[bz + uz] = lz.b, lz = Cz(wz, Xz), zz[Ez + uz] = lz.a, zz[iz + uz] = lz.b
            } else {
              let lz = Yz(zz[nz + uz], zz[Ez + uz]);
              Rz = lz.a, wz = lz.b, lz = Yz(zz[bz + uz], zz[iz + uz]), Kz = lz.a, Xz = lz.b, lz = Yz(Rz, Kz), zz[nz + uz] = lz.a, zz[bz + uz] = lz.b, lz = Yz(wz, Xz), zz[Ez + uz] = lz.a, zz[iz + uz] = lz.b
            }
          }
          if (bz & pz) {
            const bz = nz + tz;
            let Ez;
            Ez = Mz ? Cz(zz[nz + uz], zz[bz + uz]) : Yz(zz[nz + uz], zz[bz + uz]), Rz = Ez.a, zz[bz + uz] = Ez.b, zz[nz + uz] = Rz
          }
        }
        if (nz & pz) {
          let nz = Oz;
          const iz = Oz + Ez * (bz - Hz);
          for (; nz <= iz; nz += Zz) {
            const bz = nz + Fz;
            let Ez;
            Ez = Mz ? Cz(zz[nz + uz], zz[bz + uz]) : Yz(zz[nz + uz], zz[bz + uz]), Rz = Ez.a, zz[bz + uz] = Ez.b, zz[nz + uz] = Rz
          }
        }
        Hz = pz, pz >>= 1
      }
      return Oz
    }

    function zu(zz) {
      return new DataView(zz.array.buffer, zz.offset.value, zz.size)
    }

    function uu(zz) {
      const uz = zz.viewer.buffer.slice(zz.offset.value, zz.offset.value + zz.size),
        bz = new Uint8Array(function(zz) {
          let uz = zz.byteLength;
          const bz = [];
          let Ez = 0;
          const nz = new DataView(zz);
          for (; uz > 0;) {
            const zz = nz.getInt8(Ez++);
            if (zz < 0) {
              const iz = -zz;
              uz -= iz + 1;
              for (let zz = 0; zz < iz; zz++) bz.push(nz.getUint8(Ez++))
            } else {
              const iz = zz;
              uz -= 2;
              const lz = nz.getUint8(Ez++);
              for (let zz = 0; zz < iz + 1; zz++) bz.push(lz)
            }
          }
          return bz
        }(uz)),
        Ez = new Uint8Array(bz.length);
      return Vz(bz), mz(bz, Ez), new DataView(Ez.buffer)
    }

    function bu(zz) {
      const uz = zz.array.slice(zz.offset.value, zz.offset.value + zz.size),
        bz = fflate.unzlibSync(uz),
        Ez = new Uint8Array(bz.length);
      return Vz(bz), mz(bz, Ez), new DataView(Ez.buffer)
    }

    function Eu(zz) {
      const uz = zz.array.slice(zz.offset.value, zz.offset.value + zz.size),
        bz = fflate.unzlibSync(uz),
        Ez = zz.lines * zz.channels * zz.width,
        nz = 1 == zz.type ? new Uint16Array(Ez) : new Uint32Array(Ez);
      let iz = 0,
        lz = 0;
      const Mz = new Array(4);
      for (let tz = 0; tz < zz.lines; tz++)
        for (let uz = 0; uz < zz.channels; uz++) {
          let uz = 0;
          switch (zz.type) {
            case 1:
              Mz[0] = iz, Mz[1] = Mz[0] + zz.width, iz = Mz[1] + zz.width;
              for (let Ez = 0; Ez < zz.width; ++Ez) {
                uz += bz[Mz[0]++] << 8 | bz[Mz[1]++], nz[lz] = uz, lz++
              }
              break;
            case 2:
              Mz[0] = iz, Mz[1] = Mz[0] + zz.width, Mz[2] = Mz[1] + zz.width, iz = Mz[2] + zz.width;
              for (let Ez = 0; Ez < zz.width; ++Ez) {
                uz += bz[Mz[0]++] << 24 | bz[Mz[1]++] << 16 | bz[Mz[2]++] << 8, nz[lz] = uz, lz++
              }
          }
        }
      return new DataView(nz.buffer)
    }

    function nu(zz) {
      const uz = zz.viewer,
        bz = {
          value: zz.offset.value
        },
        Ez = new Uint16Array(zz.width * zz.scanlineBlockSize * (zz.channels * zz.type)),
        nz = new Uint8Array(dz);
      let iz = 0;
      const lz = new Array(zz.channels);
      for (let Hz = 0; Hz < zz.channels; Hz++) lz[Hz] = {}, lz[Hz].start = iz, lz[Hz].end = lz[Hz].start, lz[Hz].nx = zz.width, lz[Hz].ny = zz.lines, lz[Hz].size = zz.type, iz += lz[Hz].nx * lz[Hz].ny * lz[Hz].size;
      const Mz = Jz(uz, bz),
        tz = Jz(uz, bz);
      if (tz >= dz) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (Mz <= tz)
        for (let Hz = 0; Hz < tz - Mz + 1; Hz++) nz[Hz + Mz] = xz(uz, bz);
      const Oz = new Uint16Array(pz),
        Fz = function(zz, uz) {
          let bz = 0;
          for (let nz = 0; nz < pz; ++nz)(0 == nz || zz[nz >> 3] & 1 << (7 & nz)) && (uz[bz++] = nz);
          const Ez = bz - 1;
          for (; bz < pz;) uz[bz++] = 0;
          return Ez
        }(nz, Oz),
        Zz = vz(uz, bz);
      jz(zz.array, uz, bz, Zz, Ez, iz);
      for (let Hz = 0; Hz < zz.channels; ++Hz) {
        const zz = lz[Hz];
        for (let uz = 0; uz < lz[Hz].size; ++uz) kz(Ez, zz.start + uz, zz.nx, zz.size, zz.ny, zz.nx * zz.size, Fz)
      }! function(zz, uz, bz) {
        for (let Ez = 0; Ez < bz; ++Ez) uz[Ez] = zz[uz[Ez]]
      }(Oz, Ez, iz);
      let Rz = 0;
      const Kz = new Uint8Array(Ez.buffer.byteLength);
      for (let pz = 0; pz < zz.lines; pz++)
        for (let uz = 0; uz < zz.channels; uz++) {
          const zz = lz[uz],
            bz = zz.nx * zz.size,
            nz = new Uint8Array(Ez.buffer, zz.end * Hz, bz * Hz);
          Kz.set(nz, Rz), Rz += bz * Hz, zz.end += bz
        }
      return new DataView(Kz.buffer)
    }
    var iu, lu = bz(39258);
    ! function(zz) {
      zz[zz.Float = 0] = "Float", zz[zz.HalfFloat = 1] = "HalfFloat"
    }(iu || (iu = {}));
    class Mu {}
    async function tu(zz, uz, bz, Ez) {
      const nz = {
        size: 0,
        viewer: uz,
        array: new Uint8Array(uz.buffer),
        offset: bz,
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
        case sz.NO_COMPRESSION:
          nz.lines = 1, nz.uncompress = zu;
          break;
        case sz.RLE_COMPRESSION:
          nz.lines = 1, nz.uncompress = uu;
          break;
        case sz.ZIPS_COMPRESSION:
          nz.lines = 1, nz.uncompress = bu, await lu.h.LoadScriptAsync(Mu.FFLATEUrl);
          break;
        case sz.ZIP_COMPRESSION:
          nz.lines = 16, nz.uncompress = bu, await lu.h.LoadScriptAsync(Mu.FFLATEUrl);
          break;
        case sz.PIZ_COMPRESSION:
          nz.lines = 32, nz.uncompress = nu;
          break;
        case sz.PXR24_COMPRESSION:
          nz.lines = 16, nz.uncompress = Eu, await lu.h.LoadScriptAsync(Mu.FFLATEUrl);
          break;
        default:
          throw new Error(sz[zz.compression] + " is unsupported")
      }
      nz.scanlineBlockSize = nz.lines;
      const iz = {};
      for (const Mz of zz.channels) switch (Mz.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          iz[Mz.name] = !0, nz.type = Mz.pixelType
      }
      let lz = !1;
      if (iz.R && iz.G && iz.B && iz.A) nz.outputChannels = 4, nz.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (iz.R && iz.G && iz.B) lz = !0, nz.outputChannels = 4, nz.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (iz.R && iz.G) nz.outputChannels = 2, nz.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (iz.R) nz.outputChannels = 1, nz.decodeChannels = {
        R: 0
      };
      else {
        if (!iz.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        nz.outputChannels = 1, nz.decodeChannels = {
          Y: 0
        }
      }
      if (1 === nz.type) switch (Ez) {
        case iu.Float:
          nz.getter = Pz, nz.inputSize = Hz;
          break;
        case iu.HalfFloat:
          nz.getter = Jz, nz.inputSize = Hz
      } else {
        if (2 !== nz.type) throw new Error("Unsupported pixelType " + nz.type + " for " + zz.compression);
        switch (Ez) {
          case iu.Float:
            nz.getter = Lz, nz.inputSize = Mz;
            break;
          case iu.HalfFloat:
            nz.getter = Gz, nz.inputSize = Mz
        }
      }
      nz.blockCount = nz.height / nz.scanlineBlockSize;
      for (let Mz = 0; Mz < nz.blockCount; Mz++) Tz(uz, bz);
      const tz = nz.width * nz.height * nz.outputChannels;
      switch (Ez) {
        case iu.Float:
          nz.byteArray = new Float32Array(tz), nz.textureType = 1, lz && nz.byteArray.fill(1, 0, tz);
          break;
        case iu.HalfFloat:
          nz.byteArray = new Uint16Array(tz), nz.textureType = 2, lz && nz.byteArray.fill(15360, 0, tz);
          break;
        default:
          throw new Error("Unsupported type: " + Ez)
      }
      let Oz = 0;
      for (const Mz of zz.channels) void 0 !== nz.decodeChannels[Mz.name] && (nz.channelLineOffsets[Mz.name] = Oz * nz.width), Oz += 2 * Mz.pixelType;
      return nz.bytesPerLine = nz.width * Oz, nz.outLineWidth = nz.width * nz.outputChannels, "INCREASING_Y" === zz.lineOrder ? nz.scanOrder = zz => zz : nz.scanOrder = zz => nz.height - 1 - zz, 4 == nz.outputChannels ? (nz.format = 5, nz.linearSpace = !0) : (nz.format = 6, nz.linearSpace = !1), nz
    }

    function Hu(zz, uz, bz, Ez) {
      const nz = {
        value: 0
      };
      for (let iz = 0; iz < zz.height / zz.scanlineBlockSize; iz++) {
        const lz = Nz(bz, Ez) - uz.dataWindow.yMin;
        zz.size = vz(bz, Ez), zz.lines = lz + zz.scanlineBlockSize > zz.height ? zz.height - lz : zz.scanlineBlockSize;
        const Mz = zz.size < zz.lines * zz.bytesPerLine && zz.uncompress ? zz.uncompress(zz) : zu(zz);
        Ez.value += zz.size;
        for (let bz = 0; bz < zz.scanlineBlockSize; bz++) {
          const Ez = iz * zz.scanlineBlockSize,
            lz = bz + zz.scanOrder(Ez);
          if (lz >= zz.height) continue;
          const tz = bz * zz.bytesPerLine,
            Hz = (zz.height - 1 - lz) * zz.outLineWidth;
          for (let bz = 0; bz < zz.channels; bz++) {
            const Ez = uz.channels[bz].name,
              iz = zz.channelLineOffsets[Ez],
              lz = zz.decodeChannels[Ez];
            if (void 0 !== lz) {
              nz.value = tz + iz;
              for (let uz = 0; uz < zz.width; uz++) {
                const bz = Hz + uz * zz.outputChannels + lz;
                zz.byteArray && (zz.byteArray[bz] = zz.getter(Mz, nz))
              }
            }
          }
        }
      }
    }
    Mu.DefaultOutputType = iu.HalfFloat, Mu.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Ou {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(zz, uz, bz, Ez, nz) {
        throw ".exr not supported in Cube."
      }
      loadData(zz, uz, bz) {
        const nz = new DataView(zz.buffer),
          iz = {
            value: 0
          },
          lz = hz(nz, iz);
        tu(lz, nz, iz, Mu.DefaultOutputType).then((zz => {
          Hu(zz, lz, nz, iz);
          const Ez = lz.dataWindow.xMax - lz.dataWindow.xMin + 1,
            Mz = lz.dataWindow.yMax - lz.dataWindow.yMin + 1;
          bz(Ez, Mz, uz.generateMipMaps, !1, (() => {
            const bz = uz.uR();
            uz.format = lz.format, uz.type = zz.textureType, uz.invertY = !1, uz._gammaSpace = !lz.linearSpace, zz.byteArray && bz._uploadDataToTextureDirectly(uz, zz.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((zz => {
          Ez.e.Error("Failed to load EXR texture: ", zz)
        }))
      }
    }
    async function pu(zz) {
      const uz = new DataView(zz),
        bz = {
          value: 0
        },
        nz = hz(uz, bz);
      try {
        const zz = await tu(nz, uz, bz, iu.Float);
        return Hu(zz, nz, uz, bz), zz.byteArray ? {
          width: nz.dataWindow.xMax - nz.dataWindow.xMin + 1,
          height: nz.dataWindow.yMax - nz.dataWindow.yMin + 1,
          data: new Float32Array(zz.byteArray)
        } : (Ez.e.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (iz) {
        Ez.e.Error("Failed to load EXR data: ", iz)
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