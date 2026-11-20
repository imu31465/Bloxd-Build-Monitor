export const id = 64;
export const ids = [64];
export const modules = {
  40260: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      ZstdErrorCode: () => Kz,
      ZstdFrameDecoder: () => Zz
    });
    const Fz = ArrayBuffer,
      Wz = Uint8Array,
      Xz = Uint16Array,
      Oz = Int16Array,
      oz = Int32Array,
      vz = (zz, tz, sz) => {
        if (Wz.prototype.slice) return Wz.prototype.slice.call(zz, tz, sz);
        (null == tz || tz < 0) && (tz = 0), (null == sz || sz > zz.length) && (sz = zz.length);
        const Fz = new Wz(sz - tz);
        return Fz.set(zz.subarray(tz, sz)), Fz
      },
      Uz = (zz, tz, sz, Fz) => {
        if (Wz.prototype.fill) return Wz.prototype.fill.call(zz, tz, sz, Fz);
        for ((null == sz || sz < 0) && (sz = 0), (null == Fz || Fz > zz.length) && (Fz = zz.length); sz < Fz; ++sz) zz[sz] = tz;
        return zz
      },
      Kz = {
        InvalidData: 0,
        WindowSizeTooLarge: 1,
        InvalidBlockType: 2,
        FSEAccuracyTooHigh: 3,
        DistanceTooFarBack: 4,
        UnexpectedEOF: 5
      },
      uz = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
      Nz = (zz, tz, sz) => {
        const Fz = new Error(tz || uz[zz]);
        if (Fz.code = zz, Error.captureStackTrace && Error.captureStackTrace(Fz, Nz), !sz) throw Fz;
        return Fz
      },
      bz = (zz, tz, sz) => {
        let Fz = 0,
          Wz = 0;
        for (; Fz < sz; ++Fz) Wz |= zz[tz++] << (Fz << 3);
        return Wz
      },
      wz = (zz, tz) => {
        const sz = zz[0] | zz[1] << 8 | zz[2] << 16;
        if (3126568 == sz && 253 == zz[3]) {
          const sz = zz[4],
            Fz = sz >> 5 & 1,
            Xz = sz >> 2 & 1,
            Oz = 3 & sz,
            vz = sz >> 6;
          8 & sz && Nz(0);
          let Uz = 6 - Fz;
          const Kz = 3 == Oz ? 4 : Oz,
            uz = bz(zz, Uz, Kz);
          Uz += Kz;
          const wz = vz ? 1 << vz : Fz,
            Dz = bz(zz, Uz, wz) + (1 == vz && 256);
          let gz = Dz;
          if (!Fz) {
            const tz = 1 << 10 + (zz[5] >> 3);
            gz = tz + (tz >> 3) * (7 & zz[5])
          }
          gz > 2145386496 && Nz(1);
          const Hz = new Wz((1 == tz ? Dz || gz : tz ? 0 : gz) + 12);
          return Hz[0] = 1, Hz[4] = 4, Hz[8] = 8, {
            b: Uz + wz,
            y: 0,
            l: 0,
            d: uz,
            w: tz && 1 != tz ? tz : Hz.subarray(12),
            e: gz,
            o: new oz(Hz.buffer, 0, 3),
            u: Dz,
            c: Xz,
            m: Math.min(131072, gz)
          }
        }
        if (25481893 == (sz >> 4 | zz[3] << 20)) return 8 + (((Fz = zz)[Xz = 4] | Fz[Xz + 1] << 8 | Fz[Xz + 2] << 16 | Fz[Xz + 3] << 24) >>> 0);
        var Fz, Xz;
        Nz(0)
      },
      Dz = zz => {
        let tz = 0;
        for (; 1 << tz <= zz; ++tz);
        return tz - 1
      },
      gz = (zz, tz, sz) => {
        let oz = 4 + (tz << 3);
        const vz = 5 + (15 & zz[tz]);
        vz > sz && Nz(3);
        const Uz = 1 << vz;
        let Kz = Uz,
          uz = -1,
          bz = -1,
          wz = -1,
          gz = Uz;
        const Hz = new Fz(512 + (Uz << 2)),
          Bz = new Oz(Hz, 0, 256),
          Pz = new Xz(Hz, 0, 256),
          rz = new Xz(Hz, 512, Uz),
          Yz = 512 + (Uz << 1),
          xz = new Wz(Hz, Yz, Uz),
          mz = new Wz(Hz, Yz + Uz);
        for (; uz < 255 && Kz > 0;) {
          const tz = Dz(Kz + 1),
            sz = oz >> 3,
            Fz = (1 << tz + 1) - 1;
          let Wz = (zz[sz] | zz[sz + 1] << 8 | zz[sz + 2] << 16) >> (7 & oz) & Fz;
          const Xz = (1 << tz) - 1,
            Oz = Fz - Kz - 1,
            vz = Wz & Xz;
          if (vz < Oz ? (oz += tz, Wz = vz) : (oz += tz + 1, Wz > Xz && (Wz -= Oz)), Bz[++uz] = --Wz, -1 == Wz ? (Kz += Wz, xz[--gz] = uz) : Kz -= Wz, !Wz)
            do {
              const tz = oz >> 3;
              bz = (zz[tz] | zz[tz + 1] << 8) >> (7 & oz) & 3, oz += 2, uz += bz
            } while (3 == bz)
        }(uz > 255 || Kz) && Nz(0);
        let Jz = 0;
        const Iz = (Uz >> 1) + (Uz >> 3) + 3,
          Cz = Uz - 1;
        for (let Fz = 0; Fz <= uz; ++Fz) {
          const zz = Bz[Fz];
          if (zz < 1) Pz[Fz] = -zz;
          else
            for (wz = 0; wz < zz; ++wz) {
              xz[Jz] = Fz;
              do {
                Jz = Jz + Iz & Cz
              } while (Jz >= gz)
            }
        }
        for (Jz && Nz(0), wz = 0; wz < Uz; ++wz) {
          const zz = Pz[xz[wz]]++,
            tz = mz[wz] = vz - Dz(zz);
          rz[wz] = (zz << tz) - Uz
        }
        return [oz + 7 >> 3, {
          b: vz,
          s: xz,
          n: mz,
          t: rz
        }]
      },
      Hz = gz(new Wz([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
      Bz = gz(new Wz([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
      Pz = gz(new Wz([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
      rz = (zz, tz) => {
        const sz = zz.length,
          Fz = new oz(sz);
        for (let Wz = 0; Wz < sz; ++Wz) Fz[Wz] = tz, tz += 1 << zz[Wz];
        return Fz
      },
      Yz = new Wz(new oz([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
      xz = rz(Yz, 0),
      mz = new Wz(new oz([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
      Jz = rz(mz, 3),
      Iz = (zz, tz, sz) => {
        const Fz = zz.length,
          Wz = tz.length,
          Xz = zz[Fz - 1],
          Oz = (1 << sz.b) - 1,
          oz = -sz.b;
        Xz || Nz(0);
        let vz = 0,
          Uz = sz.b,
          Kz = (Fz << 3) - 8 + Dz(Xz) - Uz,
          uz = -1;
        for (; Kz > oz && uz < Wz;) {
          const Fz = Kz >> 3;
          vz = (vz << Uz | (zz[Fz] | zz[Fz + 1] << 8 | zz[Fz + 2] << 16) >> (7 & Kz)) & Oz, tz[++uz] = sz.s[vz], Kz -= Uz = sz.n[vz]
        }
        Kz == oz && uz + 1 == Wz || Nz(0)
      },
      Cz = (zz, tz, sz) => {
        let Fz = 6;
        const Wz = tz.length + 3 >> 2,
          Xz = Wz << 1,
          Oz = Wz + Xz;
        Iz(zz.subarray(Fz, Fz += zz[0] | zz[1] << 8), tz.subarray(0, Wz), sz), Iz(zz.subarray(Fz, Fz += zz[2] | zz[3] << 8), tz.subarray(Wz, Xz), sz), Iz(zz.subarray(Fz, Fz += zz[4] | zz[5] << 8), tz.subarray(Xz, Oz), sz), Iz(zz.subarray(Fz), tz.subarray(Oz), sz)
      },
      ez = (zz, tz, sz) => {
        let Fz = tz.b;
        const Oz = zz[Fz],
          oz = Oz >> 1 & 3;
        tz.l = 1 & Oz;
        const Kz = Oz >> 3 | zz[Fz + 1] << 5 | zz[Fz + 2] << 13,
          uz = (Fz += 3) + Kz;
        if (1 == oz) {
          if (Fz >= zz.length) return;
          return tz.b = Fz + 1, sz ? (Uz(sz, zz[Fz], tz.y, tz.y += Kz), sz) : Uz(new Wz(Kz), zz[Fz])
        }
        if (!(uz > zz.length)) {
          if (0 == oz) return tz.b = uz, sz ? (sz.set(zz.subarray(Fz, uz), tz.y), tz.y += Kz, sz) : vz(zz, Fz, uz);
          if (2 == oz) {
            const Oz = zz[Fz],
              oz = 3 & Oz,
              Kz = Oz >> 2 & 3;
            let bz = Oz >> 4,
              wz = 0,
              rz = 0;
            oz < 2 ? 1 & Kz ? bz |= zz[++Fz] << 4 | (2 & Kz && zz[++Fz] << 12) : bz = Oz >> 3 : (rz = Kz, Kz < 2 ? (bz |= (63 & zz[++Fz]) << 4, wz = zz[Fz] >> 6 | zz[++Fz] << 2) : 2 == Kz ? (bz |= zz[++Fz] << 4 | (3 & zz[++Fz]) << 12, wz = zz[Fz] >> 2 | zz[++Fz] << 6) : (bz |= zz[++Fz] << 4 | (63 & zz[++Fz]) << 12, wz = zz[Fz] >> 6 | zz[++Fz] << 2 | zz[++Fz] << 10)), ++Fz;
            let ez = sz ? sz.subarray(tz.y, tz.y + tz.m) : new Wz(tz.m),
              Zz = ez.length - bz;
            if (Zz < 0 && Nz(0), 0 == oz) ez.set(zz.subarray(Fz, Fz += bz), Zz);
            else if (1 == oz) Uz(ez, zz[Fz++], Zz);
            else {
              let sz = tz.h;
              if (2 == oz) {
                const Oz = ((zz, tz) => {
                  let sz = 0,
                    Fz = -1;
                  const Oz = new Wz(292),
                    oz = zz[tz],
                    vz = Oz.subarray(0, 256),
                    Kz = Oz.subarray(256, 268),
                    uz = new Xz(Oz.buffer, 268);
                  if (oz < 128) {
                    const [sz, Wz] = gz(zz, tz + 1, 6), Xz = sz << 3, Oz = zz[tz += oz];
                    Oz || Nz(0);
                    let Uz = 0,
                      Kz = 0,
                      uz = Wz.b,
                      bz = uz,
                      wz = (++tz << 3) - 8 + Dz(Oz);
                    for (; Fz > 254 && Nz(0), wz -= uz, !(wz < Xz);) {
                      let tz = wz >> 3;
                      if (Uz += (zz[tz] | zz[tz + 1] << 8) >> (7 & wz) & (1 << uz) - 1, vz[++Fz] = Wz.s[Uz], wz -= bz, wz < Xz) break;
                      tz = wz >> 3, Kz += (zz[tz] | zz[tz + 1] << 8) >> (7 & wz) & (1 << bz) - 1, vz[++Fz] = Wz.s[Kz], uz = Wz.n[Uz], Uz = Wz.t[Uz], bz = Wz.n[Kz], Kz = Wz.t[Kz]
                    }++Fz > 255 && Nz(0)
                  } else {
                    for (Fz = oz - 127; sz < Fz; sz += 2) {
                      const Fz = zz[++tz];
                      vz[sz] = Fz >> 4, vz[sz + 1] = 15 & Fz
                    }++tz
                  }
                  let bz = 0;
                  for (sz = 0; sz < Fz; ++sz) {
                    const zz = vz[sz];
                    zz > 11 && Nz(0), bz += zz && 1 << zz - 1
                  }
                  const wz = Dz(bz) + 1,
                    Hz = 1 << wz,
                    Bz = Hz - bz;
                  for (Bz & Bz - 1 && Nz(0), vz[Fz++] = Dz(Bz) + 1, sz = 0; sz < Fz; ++sz) {
                    const zz = vz[sz];
                    ++Kz[vz[sz] = zz && wz + 1 - zz]
                  }
                  const Pz = new Wz(Hz << 1),
                    rz = Pz.subarray(0, Hz),
                    Yz = Pz.subarray(Hz);
                  for (uz[wz] = 0, sz = wz; sz > 0; --sz) {
                    const zz = uz[sz];
                    Uz(Yz, sz, zz, uz[sz - 1] = zz + Kz[sz] * (1 << wz - sz))
                  }
                  for (uz[0] != Hz && Nz(0), sz = 0; sz < Fz; ++sz) {
                    const zz = vz[sz];
                    if (zz) {
                      const tz = uz[zz];
                      Uz(rz, sz, tz, uz[zz] = tz + (1 << wz - zz))
                    }
                  }
                  return [tz, {
                    n: Yz,
                    b: wz,
                    s: rz
                  }]
                })(zz, Fz);
                wz += Fz - (Fz = Oz[0]), tz.h = sz = Oz[1]
              } else sz || Nz(0);
              (rz ? Cz : Iz)(zz.subarray(Fz, Fz += wz), ez.subarray(Zz), sz)
            }
            let Gz = zz[Fz++];
            if (Gz) {
              255 == Gz ? Gz = 32512 + (zz[Fz++] | zz[Fz++] << 8) : Gz > 127 && (Gz = Gz - 128 << 8 | zz[Fz++]);
              const Oz = zz[Fz++];
              3 & Oz && Nz(0);
              const oz = [Bz, Pz, Hz];
              for (let sz = 2; sz > -1; --sz) {
                const vz = Oz >> 2 + (sz << 1) & 3;
                if (1 == vz) {
                  const tz = new Wz([0, 0, zz[Fz++]]);
                  oz[sz] = {
                    s: tz.subarray(2, 3),
                    n: tz.subarray(0, 1),
                    t: new Xz(tz.buffer, 0, 1),
                    b: 0
                  }
                } else 2 == vz ? [Fz, oz[sz]] = gz(zz, Fz, 9 - (1 & sz)) : 3 == vz && (tz.t || Nz(0), oz[sz] = tz.t[sz])
              }
              const [Uz, Kz, bz] = tz.t = oz, wz = zz[uz - 1];
              wz || Nz(0);
              let rz = (uz << 3) - 8 + Dz(wz) - bz.b,
                Iz = rz >> 3,
                Cz = 0,
                Tz = (zz[Iz] | zz[Iz + 1] << 8) >> (7 & rz) & (1 << bz.b) - 1;
              Iz = (rz -= Kz.b) >> 3;
              let cz = (zz[Iz] | zz[Iz + 1] << 8) >> (7 & rz) & (1 << Kz.b) - 1;
              Iz = (rz -= Uz.b) >> 3;
              let jz = (zz[Iz] | zz[Iz + 1] << 8) >> (7 & rz) & (1 << Uz.b) - 1;
              for (++Gz; --Gz;) {
                const sz = bz.s[Tz],
                  Fz = bz.n[Tz],
                  Wz = Uz.s[jz],
                  Xz = Uz.n[jz],
                  Oz = Kz.s[cz],
                  oz = Kz.n[cz];
                Iz = (rz -= Oz) >> 3;
                const vz = 1 << Oz;
                let uz = vz + ((zz[Iz] | zz[Iz + 1] << 8 | zz[Iz + 2] << 16 | zz[Iz + 3] << 24) >>> (7 & rz) & vz - 1);
                Iz = (rz -= mz[Wz]) >> 3;
                let wz = Jz[Wz] + ((zz[Iz] | zz[Iz + 1] << 8 | zz[Iz + 2] << 16) >> (7 & rz) & (1 << mz[Wz]) - 1);
                Iz = (rz -= Yz[sz]) >> 3;
                const Dz = xz[sz] + ((zz[Iz] | zz[Iz + 1] << 8 | zz[Iz + 2] << 16) >> (7 & rz) & (1 << Yz[sz]) - 1);
                if ((rz < 0 || Zz + Dz > ez.length || Cz + Dz + wz > ez.length) && Nz(0), Iz = (rz -= Fz) >> 3, Tz = bz.t[Tz] + ((zz[Iz] | zz[Iz + 1] << 8) >> (7 & rz) & (1 << Fz) - 1), Iz = (rz -= Xz) >> 3, jz = Uz.t[jz] + ((zz[Iz] | zz[Iz + 1] << 8) >> (7 & rz) & (1 << Xz) - 1), Iz = (rz -= oz) >> 3, cz = Kz.t[cz] + ((zz[Iz] | zz[Iz + 1] << 8) >> (7 & rz) & (1 << oz) - 1), uz > 3) tz.o[2] = tz.o[1], tz.o[1] = tz.o[0], tz.o[0] = uz -= 3;
                else {
                  const zz = uz - (0 != Dz);
                  zz ? (uz = 3 == zz ? tz.o[0] - 1 : tz.o[zz], zz > 1 && (tz.o[2] = tz.o[1]), tz.o[1] = tz.o[0], tz.o[0] = uz) : uz = tz.o[0]
                }
                for (let zz = 0; zz < Dz; ++zz) ez[Cz + zz] = ez[Zz + zz];
                Cz += Dz, Zz += Dz;
                let gz = Cz - uz;
                if (gz < 0) {
                  let zz = -gz;
                  const sz = tz.e + gz;
                  sz < 0 && Nz(4), zz > wz && (zz = wz);
                  for (let Fz = 0; Fz < zz; ++Fz) ez[Cz + Fz] = tz.w[sz + Fz];
                  Cz += zz, wz -= zz, gz = 0
                }
                for (let zz = 0; zz < wz; ++zz) ez[Cz + zz] = ez[gz + zz];
                Cz += wz
              }
              if (Cz != Zz)
                for (; Zz < ez.length;) ez[Cz++] = ez[Zz++];
              else Cz = ez.length;
              sz ? tz.y += Cz : ez = vz(ez, 0, Cz)
            } else if (sz) {
              if (tz.y += bz, Zz)
                for (let zz = 0; zz < bz; ++zz) ez[zz] = ez[Zz + zz]
            } else Zz && (ez = vz(ez, Zz));
            return tz.b = uz, ez
          }
          Nz(2)
        }
      };
    class Zz {
      output = null;
      decoded = 0;
      done = !1;
      st = null;
      parts = [];
      po = 0;
      needed = 18;
      size;
      constructor(zz) {
        this.size = zz
      }
      push(zz) {
        if (this.done) return;
        if (this.parts.push(zz), this.po += zz.length, this.po < this.needed) return;
        const tz = ((zz, tz) => {
          if (1 == zz.length) return zz[0];
          const sz = new Wz(tz);
          for (let Fz = 0, Wz = 0; Fz < zz.length; ++Fz) {
            const tz = zz[Fz];
            sz.set(tz, Wz), Wz += tz.length
          }
          return sz
        })(this.parts, this.po);
        let sz = this.st;
        if (!sz) {
          const zz = wz(tz, new Wz(0));
          "number" != typeof zz && zz.u === this.size || Nz(0, `not a zstd frame of ${this.size} bytes`), sz = this.st = wz(tz, 1), sz.e = 0, this.output = sz.w
        }
        for (;;) {
          const zz = tz.length - sz.b;
          if (zz < 3) {
            this.needed = 3;
            break
          }
          const Fz = tz[sz.b],
            Wz = Fz >> 1 & 3;
          3 == Wz && Nz(2);
          const Xz = Fz >> 3 | tz[sz.b + 1] << 5 | tz[sz.b + 2] << 13;
          Xz > sz.m && Nz(0);
          const Oz = 1 == Wz ? 4 : 3 + Xz;
          if (zz < Oz) {
            this.needed = Oz;
            break
          }
          if (ez(tz, sz, sz.w) || Nz(5), sz.e = sz.y, (sz.y > sz.u || sz.l && sz.y != sz.u) && Nz(0), sz.l) {
            this.done = !0;
            break
          }
        }
        this.decoded = sz.y;
        const Fz = tz.subarray(sz.b);
        this.parts = Fz.length ? [Fz] : [], this.po = Fz.length, sz.b = 0
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);