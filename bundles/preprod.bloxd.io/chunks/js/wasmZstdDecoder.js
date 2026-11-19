export const id = 64;
export const ids = [64];
export const modules = {
  40386: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      ZstdErrorCode: () => Oz,
      ZstdFrameDecoder: () => Tz
    });
    const Ez = ArrayBuffer,
      nz = Uint8Array,
      iz = Uint16Array,
      lz = Int16Array,
      Mz = Int32Array,
      tz = (zz, uz, bz) => {
        if (nz.prototype.slice) return nz.prototype.slice.call(zz, uz, bz);
        (null == uz || uz < 0) && (uz = 0), (null == bz || bz > zz.length) && (bz = zz.length);
        const Ez = new nz(bz - uz);
        return Ez.set(zz.subarray(uz, bz)), Ez
      },
      Hz = (zz, uz, bz, Ez) => {
        if (nz.prototype.fill) return nz.prototype.fill.call(zz, uz, bz, Ez);
        for ((null == bz || bz < 0) && (bz = 0), (null == Ez || Ez > zz.length) && (Ez = zz.length); bz < Ez; ++bz) zz[bz] = uz;
        return zz
      },
      Oz = {
        InvalidData: 0,
        WindowSizeTooLarge: 1,
        InvalidBlockType: 2,
        FSEAccuracyTooHigh: 3,
        DistanceTooFarBack: 4,
        UnexpectedEOF: 5
      },
      pz = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
      dz = (zz, uz, bz) => {
        const Ez = new Error(uz || pz[zz]);
        if (Ez.code = zz, Error.captureStackTrace && Error.captureStackTrace(Ez, dz), !bz) throw Ez;
        return Ez
      },
      Fz = (zz, uz, bz) => {
        let Ez = 0,
          nz = 0;
        for (; Ez < bz; ++Ez) nz |= zz[uz++] << (Ez << 3);
        return nz
      },
      Zz = (zz, uz) => {
        const bz = zz[0] | zz[1] << 8 | zz[2] << 16;
        if (3126568 == bz && 253 == zz[3]) {
          const bz = zz[4],
            Ez = bz >> 5 & 1,
            iz = bz >> 2 & 1,
            lz = 3 & bz,
            tz = bz >> 6;
          8 & bz && dz(0);
          let Hz = 6 - Ez;
          const Oz = 3 == lz ? 4 : lz,
            pz = Fz(zz, Hz, Oz);
          Hz += Oz;
          const Zz = tz ? 1 << tz : Ez,
            Rz = Fz(zz, Hz, Zz) + (1 == tz && 256);
          let Kz = Rz;
          if (!Ez) {
            const uz = 1 << 10 + (zz[5] >> 3);
            Kz = uz + (uz >> 3) * (7 & zz[5])
          }
          Kz > 2145386496 && dz(1);
          const wz = new nz((1 == uz ? Rz || Kz : uz ? 0 : Kz) + 12);
          return wz[0] = 1, wz[4] = 4, wz[8] = 8, {
            b: Hz + Zz,
            y: 0,
            l: 0,
            d: pz,
            w: uz && 1 != uz ? uz : wz.subarray(12),
            e: Kz,
            o: new Mz(wz.buffer, 0, 3),
            u: Rz,
            c: iz,
            m: Math.min(131072, Kz)
          }
        }
        if (25481893 == (bz >> 4 | zz[3] << 20)) return 8 + (((Ez = zz)[iz = 4] | Ez[iz + 1] << 8 | Ez[iz + 2] << 16 | Ez[iz + 3] << 24) >>> 0);
        var Ez, iz;
        dz(0)
      },
      Rz = zz => {
        let uz = 0;
        for (; 1 << uz <= zz; ++uz);
        return uz - 1
      },
      Kz = (zz, uz, bz) => {
        let Mz = 4 + (uz << 3);
        const tz = 5 + (15 & zz[uz]);
        tz > bz && dz(3);
        const Hz = 1 << tz;
        let Oz = Hz,
          pz = -1,
          Fz = -1,
          Zz = -1,
          Kz = Hz;
        const wz = new Ez(512 + (Hz << 2)),
          Xz = new lz(wz, 0, 256),
          fz = new iz(wz, 0, 256),
          sz = new iz(wz, 512, Hz),
          rz = 512 + (Hz << 1),
          oz = new nz(wz, rz, Hz),
          Nz = new nz(wz, rz + Hz);
        for (; pz < 255 && Oz > 0;) {
          const uz = Rz(Oz + 1),
            bz = Mz >> 3,
            Ez = (1 << uz + 1) - 1;
          let nz = (zz[bz] | zz[bz + 1] << 8 | zz[bz + 2] << 16) >> (7 & Mz) & Ez;
          const iz = (1 << uz) - 1,
            lz = Ez - Oz - 1,
            tz = nz & iz;
          if (tz < lz ? (Mz += uz, nz = tz) : (Mz += uz + 1, nz > iz && (nz -= lz)), Xz[++pz] = --nz, -1 == nz ? (Oz += nz, oz[--Kz] = pz) : Oz -= nz, !nz)
            do {
              const uz = Mz >> 3;
              Fz = (zz[uz] | zz[uz + 1] << 8) >> (7 & Mz) & 3, Mz += 2, pz += Fz
            } while (3 == Fz)
        }(pz > 255 || Oz) && dz(0);
        let vz = 0;
        const xz = (Hz >> 1) + (Hz >> 3) + 3,
          Jz = Hz - 1;
        for (let Ez = 0; Ez <= pz; ++Ez) {
          const zz = Xz[Ez];
          if (zz < 1) fz[Ez] = -zz;
          else
            for (Zz = 0; Zz < zz; ++Zz) {
              oz[vz] = Ez;
              do {
                vz = vz + xz & Jz
              } while (vz >= Kz)
            }
        }
        for (vz && dz(0), Zz = 0; Zz < Hz; ++Zz) {
          const zz = fz[oz[Zz]]++,
            uz = Nz[Zz] = tz - Rz(zz);
          sz[Zz] = (zz << uz) - Hz
        }
        return [Mz + 7 >> 3, {
          b: tz,
          s: oz,
          n: Nz,
          t: sz
        }]
      },
      wz = Kz(new nz([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
      Xz = Kz(new nz([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
      fz = Kz(new nz([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
      sz = (zz, uz) => {
        const bz = zz.length,
          Ez = new Mz(bz);
        for (let nz = 0; nz < bz; ++nz) Ez[nz] = uz, uz += 1 << zz[nz];
        return Ez
      },
      rz = new nz(new Mz([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
      oz = sz(rz, 0),
      Nz = new nz(new Mz([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
      vz = sz(Nz, 3),
      xz = (zz, uz, bz) => {
        const Ez = zz.length,
          nz = uz.length,
          iz = zz[Ez - 1],
          lz = (1 << bz.b) - 1,
          Mz = -bz.b;
        iz || dz(0);
        let tz = 0,
          Hz = bz.b,
          Oz = (Ez << 3) - 8 + Rz(iz) - Hz,
          pz = -1;
        for (; Oz > Mz && pz < nz;) {
          const Ez = Oz >> 3;
          tz = (tz << Hz | (zz[Ez] | zz[Ez + 1] << 8 | zz[Ez + 2] << 16) >> (7 & Oz)) & lz, uz[++pz] = bz.s[tz], Oz -= Hz = bz.n[tz]
        }
        Oz == Mz && pz + 1 == nz || dz(0)
      },
      Jz = (zz, uz, bz) => {
        let Ez = 6;
        const nz = uz.length + 3 >> 2,
          iz = nz << 1,
          lz = nz + iz;
        xz(zz.subarray(Ez, Ez += zz[0] | zz[1] << 8), uz.subarray(0, nz), bz), xz(zz.subarray(Ez, Ez += zz[2] | zz[3] << 8), uz.subarray(nz, iz), bz), xz(zz.subarray(Ez, Ez += zz[4] | zz[5] << 8), uz.subarray(iz, lz), bz), xz(zz.subarray(Ez), uz.subarray(lz), bz)
      },
      Az = (zz, uz, bz) => {
        let Ez = uz.b;
        const lz = zz[Ez],
          Mz = lz >> 1 & 3;
        uz.l = 1 & lz;
        const Oz = lz >> 3 | zz[Ez + 1] << 5 | zz[Ez + 2] << 13,
          pz = (Ez += 3) + Oz;
        if (1 == Mz) {
          if (Ez >= zz.length) return;
          return uz.b = Ez + 1, bz ? (Hz(bz, zz[Ez], uz.y, uz.y += Oz), bz) : Hz(new nz(Oz), zz[Ez])
        }
        if (!(pz > zz.length)) {
          if (0 == Mz) return uz.b = pz, bz ? (bz.set(zz.subarray(Ez, pz), uz.y), uz.y += Oz, bz) : tz(zz, Ez, pz);
          if (2 == Mz) {
            const lz = zz[Ez],
              Mz = 3 & lz,
              Oz = lz >> 2 & 3;
            let Fz = lz >> 4,
              Zz = 0,
              sz = 0;
            Mz < 2 ? 1 & Oz ? Fz |= zz[++Ez] << 4 | (2 & Oz && zz[++Ez] << 12) : Fz = lz >> 3 : (sz = Oz, Oz < 2 ? (Fz |= (63 & zz[++Ez]) << 4, Zz = zz[Ez] >> 6 | zz[++Ez] << 2) : 2 == Oz ? (Fz |= zz[++Ez] << 4 | (3 & zz[++Ez]) << 12, Zz = zz[Ez] >> 2 | zz[++Ez] << 6) : (Fz |= zz[++Ez] << 4 | (63 & zz[++Ez]) << 12, Zz = zz[Ez] >> 6 | zz[++Ez] << 2 | zz[++Ez] << 10)), ++Ez;
            let Az = bz ? bz.subarray(uz.y, uz.y + uz.m) : new nz(uz.m),
              Tz = Az.length - Fz;
            if (Tz < 0 && dz(0), 0 == Mz) Az.set(zz.subarray(Ez, Ez += Fz), Tz);
            else if (1 == Mz) Hz(Az, zz[Ez++], Tz);
            else {
              let bz = uz.h;
              if (2 == Mz) {
                const lz = ((zz, uz) => {
                  let bz = 0,
                    Ez = -1;
                  const lz = new nz(292),
                    Mz = zz[uz],
                    tz = lz.subarray(0, 256),
                    Oz = lz.subarray(256, 268),
                    pz = new iz(lz.buffer, 268);
                  if (Mz < 128) {
                    const [bz, nz] = Kz(zz, uz + 1, 6), iz = bz << 3, lz = zz[uz += Mz];
                    lz || dz(0);
                    let Hz = 0,
                      Oz = 0,
                      pz = nz.b,
                      Fz = pz,
                      Zz = (++uz << 3) - 8 + Rz(lz);
                    for (; Ez > 254 && dz(0), Zz -= pz, !(Zz < iz);) {
                      let uz = Zz >> 3;
                      if (Hz += (zz[uz] | zz[uz + 1] << 8) >> (7 & Zz) & (1 << pz) - 1, tz[++Ez] = nz.s[Hz], Zz -= Fz, Zz < iz) break;
                      uz = Zz >> 3, Oz += (zz[uz] | zz[uz + 1] << 8) >> (7 & Zz) & (1 << Fz) - 1, tz[++Ez] = nz.s[Oz], pz = nz.n[Hz], Hz = nz.t[Hz], Fz = nz.n[Oz], Oz = nz.t[Oz]
                    }++Ez > 255 && dz(0)
                  } else {
                    for (Ez = Mz - 127; bz < Ez; bz += 2) {
                      const Ez = zz[++uz];
                      tz[bz] = Ez >> 4, tz[bz + 1] = 15 & Ez
                    }++uz
                  }
                  let Fz = 0;
                  for (bz = 0; bz < Ez; ++bz) {
                    const zz = tz[bz];
                    zz > 11 && dz(0), Fz += zz && 1 << zz - 1
                  }
                  const Zz = Rz(Fz) + 1,
                    wz = 1 << Zz,
                    Xz = wz - Fz;
                  for (Xz & Xz - 1 && dz(0), tz[Ez++] = Rz(Xz) + 1, bz = 0; bz < Ez; ++bz) {
                    const zz = tz[bz];
                    ++Oz[tz[bz] = zz && Zz + 1 - zz]
                  }
                  const fz = new nz(wz << 1),
                    sz = fz.subarray(0, wz),
                    rz = fz.subarray(wz);
                  for (pz[Zz] = 0, bz = Zz; bz > 0; --bz) {
                    const zz = pz[bz];
                    Hz(rz, bz, zz, pz[bz - 1] = zz + Oz[bz] * (1 << Zz - bz))
                  }
                  for (pz[0] != wz && dz(0), bz = 0; bz < Ez; ++bz) {
                    const zz = tz[bz];
                    if (zz) {
                      const uz = pz[zz];
                      Hz(sz, bz, uz, pz[zz] = uz + (1 << Zz - zz))
                    }
                  }
                  return [uz, {
                    n: rz,
                    b: Zz,
                    s: sz
                  }]
                })(zz, Ez);
                Zz += Ez - (Ez = lz[0]), uz.h = bz = lz[1]
              } else bz || dz(0);
              (sz ? Jz : xz)(zz.subarray(Ez, Ez += Zz), Az.subarray(Tz), bz)
            }
            let Lz = zz[Ez++];
            if (Lz) {
              255 == Lz ? Lz = 32512 + (zz[Ez++] | zz[Ez++] << 8) : Lz > 127 && (Lz = Lz - 128 << 8 | zz[Ez++]);
              const lz = zz[Ez++];
              3 & lz && dz(0);
              const Mz = [Xz, fz, wz];
              for (let bz = 2; bz > -1; --bz) {
                const tz = lz >> 2 + (bz << 1) & 3;
                if (1 == tz) {
                  const uz = new nz([0, 0, zz[Ez++]]);
                  Mz[bz] = {
                    s: uz.subarray(2, 3),
                    n: uz.subarray(0, 1),
                    t: new iz(uz.buffer, 0, 1),
                    b: 0
                  }
                } else 2 == tz ? [Ez, Mz[bz]] = Kz(zz, Ez, 9 - (1 & bz)) : 3 == tz && (uz.t || dz(0), Mz[bz] = uz.t[bz])
              }
              const [Hz, Oz, Fz] = uz.t = Mz, Zz = zz[pz - 1];
              Zz || dz(0);
              let sz = (pz << 3) - 8 + Rz(Zz) - Fz.b,
                xz = sz >> 3,
                Jz = 0,
                Pz = (zz[xz] | zz[xz + 1] << 8) >> (7 & sz) & (1 << Fz.b) - 1;
              xz = (sz -= Oz.b) >> 3;
              let Gz = (zz[xz] | zz[xz + 1] << 8) >> (7 & sz) & (1 << Oz.b) - 1;
              xz = (sz -= Hz.b) >> 3;
              let az = (zz[xz] | zz[xz + 1] << 8) >> (7 & sz) & (1 << Hz.b) - 1;
              for (++Lz; --Lz;) {
                const bz = Fz.s[Pz],
                  Ez = Fz.n[Pz],
                  nz = Hz.s[az],
                  iz = Hz.n[az],
                  lz = Oz.s[Gz],
                  Mz = Oz.n[Gz];
                xz = (sz -= lz) >> 3;
                const tz = 1 << lz;
                let pz = tz + ((zz[xz] | zz[xz + 1] << 8 | zz[xz + 2] << 16 | zz[xz + 3] << 24) >>> (7 & sz) & tz - 1);
                xz = (sz -= Nz[nz]) >> 3;
                let Zz = vz[nz] + ((zz[xz] | zz[xz + 1] << 8 | zz[xz + 2] << 16) >> (7 & sz) & (1 << Nz[nz]) - 1);
                xz = (sz -= rz[bz]) >> 3;
                const Rz = oz[bz] + ((zz[xz] | zz[xz + 1] << 8 | zz[xz + 2] << 16) >> (7 & sz) & (1 << rz[bz]) - 1);
                if ((sz < 0 || Tz + Rz > Az.length || Jz + Rz + Zz > Az.length) && dz(0), xz = (sz -= Ez) >> 3, Pz = Fz.t[Pz] + ((zz[xz] | zz[xz + 1] << 8) >> (7 & sz) & (1 << Ez) - 1), xz = (sz -= iz) >> 3, az = Hz.t[az] + ((zz[xz] | zz[xz + 1] << 8) >> (7 & sz) & (1 << iz) - 1), xz = (sz -= Mz) >> 3, Gz = Oz.t[Gz] + ((zz[xz] | zz[xz + 1] << 8) >> (7 & sz) & (1 << Mz) - 1), pz > 3) uz.o[2] = uz.o[1], uz.o[1] = uz.o[0], uz.o[0] = pz -= 3;
                else {
                  const zz = pz - (0 != Rz);
                  zz ? (pz = 3 == zz ? uz.o[0] - 1 : uz.o[zz], zz > 1 && (uz.o[2] = uz.o[1]), uz.o[1] = uz.o[0], uz.o[0] = pz) : pz = uz.o[0]
                }
                for (let zz = 0; zz < Rz; ++zz) Az[Jz + zz] = Az[Tz + zz];
                Jz += Rz, Tz += Rz;
                let Kz = Jz - pz;
                if (Kz < 0) {
                  let zz = -Kz;
                  const bz = uz.e + Kz;
                  bz < 0 && dz(4), zz > Zz && (zz = Zz);
                  for (let Ez = 0; Ez < zz; ++Ez) Az[Jz + Ez] = uz.w[bz + Ez];
                  Jz += zz, Zz -= zz, Kz = 0
                }
                for (let zz = 0; zz < Zz; ++zz) Az[Jz + zz] = Az[Kz + zz];
                Jz += Zz
              }
              if (Jz != Tz)
                for (; Tz < Az.length;) Az[Jz++] = Az[Tz++];
              else Jz = Az.length;
              bz ? uz.y += Jz : Az = tz(Az, 0, Jz)
            } else if (bz) {
              if (uz.y += Fz, Tz)
                for (let zz = 0; zz < Fz; ++zz) Az[zz] = Az[Tz + zz]
            } else Tz && (Az = tz(Az, Tz));
            return uz.b = pz, Az
          }
          dz(2)
        }
      };
    class Tz {
      output = null;
      decoded = 0;
      done = !1;
      st = null;
      parts = [];
      yM = 0;
      needed = 18;
      size;
      constructor(zz) {
        this.size = zz
      }
      push(zz) {
        if (this.done) return;
        if (this.parts.push(zz), this.yM += zz.length, this.yM < this.needed) return;
        const uz = ((zz, uz) => {
          if (1 == zz.length) return zz[0];
          const bz = new nz(uz);
          for (let Ez = 0, nz = 0; Ez < zz.length; ++Ez) {
            const uz = zz[Ez];
            bz.set(uz, nz), nz += uz.length
          }
          return bz
        })(this.parts, this.yM);
        let bz = this.st;
        if (!bz) {
          const zz = Zz(uz, new nz(0));
          "number" != typeof zz && zz.u === this.size || dz(0, `not a zstd frame of ${this.size} bytes`), bz = this.st = Zz(uz, 1), bz.e = 0, this.output = bz.w
        }
        for (;;) {
          const zz = uz.length - bz.b;
          if (zz < 3) {
            this.needed = 3;
            break
          }
          const Ez = uz[bz.b],
            nz = Ez >> 1 & 3;
          3 == nz && dz(2);
          const iz = Ez >> 3 | uz[bz.b + 1] << 5 | uz[bz.b + 2] << 13;
          iz > bz.m && dz(0);
          const lz = 1 == nz ? 4 : 3 + iz;
          if (zz < lz) {
            this.needed = lz;
            break
          }
          if (Az(uz, bz, bz.w) || dz(5), bz.e = bz.y, (bz.y > bz.u || bz.l && bz.y != bz.u) && dz(0), bz.l) {
            this.done = !0;
            break
          }
        }
        this.decoded = bz.y;
        const Ez = uz.subarray(bz.b);
        this.parts = Ez.length ? [Ez] : [], this.yM = Ez.length, bz.b = 0
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);