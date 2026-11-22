export const id = 189;
export const ids = [189];
export const modules = {
  37327: (kk, ek, ik) => {
    var Dk = ik(37335);

    function fk(kk) {
      for (var ek, ik, fk = 0, Sk = kk.length, bk = 0; bk < kk.length;) {
        for (ek = kk[bk], ik = 0; bk < Sk && kk[bk] === ek;) ++bk, ++ik;
        fk += Dk.log2(ik) / 7 | 0, fk += Dk.log2(ek >>> 0) / 7 | 0, fk += 2
      }
      return fk
    }
    ek.size = fk, ek.encode = function(kk, ek) {
      ek || (ek = new Uint8Array(fk(kk)));
      for (var ik, Dk, Sk = 0, bk = ek.length, rk = 0; rk < kk.length;) {
        for (ik = kk[rk], Dk = 0; rk < kk.length && kk[rk] === ik;) ++rk, ++Dk;
        for (; Sk < bk && Dk >= 128;) ek[Sk++] = 128 + (127 & Dk), Dk >>>= 7;
        if (Sk >= bk) throw new Error("RLE buffer overflow");
        for (ek[Sk++] = Dk, ik >>>= 0; Sk < bk && ik >= 128;) ek[Sk++] = 128 + (127 & ik), ik >>>= 7;
        if (Sk >= bk) throw new Error("RLE buffer overflow");
        ek[Sk++] = ik
      }
      return ek
    }, ek.decode = function(kk, ek) {
      for (var ik, Dk, fk, Sk, bk = ek.length, rk = kk.length, Pk = 0, mk = 0; mk < rk;) {
        for (ik = 0, Dk = 0; mk < rk && kk[mk] >= 128;) ik += (127 & kk[mk++]) << Dk, Dk += 7;
        if (ik += kk[mk++] << Dk, mk >= rk) throw new Error("RLE buffer underrun");
        if (Pk + ik > bk) throw new Error("Chunk buffer overflow");
        for (fk = 0, Dk = 0; mk < rk && kk[mk] >= 128;) fk += (127 & kk[mk++]) << Dk, Dk += 7;
        if (mk >= rk) throw new Error("RLE buffer underrun");
        for (fk += kk[mk++] << Dk, Sk = 0; Sk < ik; ++Sk) ek[Pk++] = fk
      }
      return ek
    }
  },
  37335: (kk, ek) => {
    function ik(kk) {
      var ek = 32;
      return (kk &= -kk) && ek--, 65535 & kk && (ek -= 16), 16711935 & kk && (ek -= 8), 252645135 & kk && (ek -= 4), 858993459 & kk && (ek -= 2), 1431655765 & kk && (ek -= 1), ek
    }
    ek.INT_BITS = 32, ek.INT_MAX = 2147483647, ek.INT_MIN = -1 << 31, ek.sign = function(kk) {
      return (kk > 0) - (kk < 0)
    }, ek.abs = function(kk) {
      var ek = kk >> 31;
      return (kk ^ ek) - ek
    }, ek.min = function(kk, ek) {
      return ek ^ (kk ^ ek) & -(kk < ek)
    }, ek.max = function(kk, ek) {
      return kk ^ (kk ^ ek) & -(kk < ek)
    }, ek.isPow2 = function(kk) {
      return !(kk & kk - 1) && !!kk
    }, ek.log2 = function(kk) {
      var ek, ik;
      return ek = (kk > 65535) << 4, ek |= ik = ((kk >>>= ek) > 255) << 3, ek |= ik = ((kk >>>= ik) > 15) << 2, (ek |= ik = ((kk >>>= ik) > 3) << 1) | (kk >>>= ik) >> 1
    }, ek.log10 = function(kk) {
      return kk >= 1e9 ? 9 : kk >= 1e8 ? 8 : kk >= 1e7 ? 7 : kk >= 1e6 ? 6 : kk >= 1e5 ? 5 : kk >= 1e4 ? 4 : kk >= 1e3 ? 3 : kk >= 100 ? 2 : kk >= 10 ? 1 : 0
    }, ek.popCount = function(kk) {
      return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
    }, ek.countTrailingZeros = ik, ek.nextPow2 = function(kk) {
      return kk += 0 === kk, --kk, kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) + 1
    }, ek.prevPow2 = function(kk) {
      return kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) - (kk >>> 1)
    }, ek.parity = function(kk) {
      return kk ^= kk >>> 16, kk ^= kk >>> 8, kk ^= kk >>> 4, 27030 >>> (kk &= 15) & 1
    };
    var Dk = new Array(256);
    ! function(kk) {
      for (var ek = 0; ek < 256; ++ek) {
        var ik = ek,
          Dk = ek,
          fk = 7;
        for (ik >>>= 1; ik; ik >>>= 1) Dk <<= 1, Dk |= 1 & ik, --fk;
        kk[ek] = Dk << fk & 255
      }
    }(Dk), ek.reverse = function(kk) {
      return Dk[255 & kk] << 24 | Dk[kk >>> 8 & 255] << 16 | Dk[kk >>> 16 & 255] << 8 | Dk[kk >>> 24 & 255]
    }, ek.interleave2 = function(kk, ek) {
      return (kk = 1431655765 & ((kk = 858993459 & ((kk = 252645135 & ((kk = 16711935 & ((kk &= 65535) | kk << 8)) | kk << 4)) | kk << 2)) | kk << 1)) | (ek = 1431655765 & ((ek = 858993459 & ((ek = 252645135 & ((ek = 16711935 & ((ek &= 65535) | ek << 8)) | ek << 4)) | ek << 2)) | ek << 1)) << 1
    }, ek.deinterleave2 = function(kk, ek) {
      return (kk = 65535 & ((kk = 16711935 & ((kk = 252645135 & ((kk = 858993459 & ((kk = kk >>> ek & 1431655765) | kk >>> 1)) | kk >>> 2)) | kk >>> 4)) | kk >>> 16)) << 16 >> 16
    }, ek.interleave3 = function(kk, ek, ik) {
      return kk = 1227133513 & ((kk = 3272356035 & ((kk = 251719695 & ((kk = 4278190335 & ((kk &= 1023) | kk << 16)) | kk << 8)) | kk << 4)) | kk << 2), (kk |= (ek = 1227133513 & ((ek = 3272356035 & ((ek = 251719695 & ((ek = 4278190335 & ((ek &= 1023) | ek << 16)) | ek << 8)) | ek << 4)) | ek << 2)) << 1) | (ik = 1227133513 & ((ik = 3272356035 & ((ik = 251719695 & ((ik = 4278190335 & ((ik &= 1023) | ik << 16)) | ik << 8)) | ik << 4)) | ik << 2)) << 2
    }, ek.deinterleave3 = function(kk, ek) {
      return (kk = 1023 & ((kk = 4278190335 & ((kk = 251719695 & ((kk = 3272356035 & ((kk = kk >>> ek & 1227133513) | kk >>> 2)) | kk >>> 4)) | kk >>> 8)) | kk >>> 16)) << 22 >> 22
    }, ek.nextCombination = function(kk) {
      var ek = kk | kk - 1;
      return ek + 1 | (~ek & -~ek) - 1 >>> ik(kk) + 1
    }
  },
  39367: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      emptyColumnHeight: () => Yk,
      loadHeatmapSchematic: () => Lk,
      readSchematicBlocks: () => Ck
    });
    var Dk = ik(3698),
      fk = ik.n(Dk),
      Sk = ik(3684),
      bk = ik(37327),
      rk = ik(189),
      Pk = ik(9020);
    const mk = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      Mk = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: mk
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: mk
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...mk, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      Kk = fk().Type.forSchema({
        type: "record",
        fields: Mk
      }),
      xk = fk().Type.forSchema({
        type: "record",
        fields: [...Mk, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...mk, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: mk
          }
        }]
      }),
      nk = 2,
      Uk = 6,
      Hk = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      wk = [150, 150, 150],
      lk = 16,
      pk = 4096,
      yk = rk.g.oU,
      Yk = -2147483648;
    async function Lk(kk) {
      const ek = await Ck(new Uint8Array(await kk.arrayBuffer()), await async function() {
        const {
          averageColors: kk
        } = await ik.e(206).then((() => ik(33856))), ek = new Map;
        return ik => {
          var Dk, fk, Sk, bk, rk;
          const mk = ek.get(ik);
          if (void 0 !== mk) return mk;
          const Mk = null !== (Dk = null === (fk = Pk.g[ik]) || void 0 === fk ? void 0 : fk.name) && void 0 !== Dk ? Dk : "",
            Kk = null !== (Sk = kk[Mk]) && void 0 !== Sk ? Sk : kk[Mk.split("|")[0]],
            xk = Hk[Mk.split("|")[0]],
            nk = null !== (bk = null !== (rk = null === Kk || void 0 === Kk ? void 0 : Kk[0]) && void 0 !== rk ? rk : xk) && void 0 !== bk ? bk : 0 === (null === Kk || void 0 === Kk ? void 0 : Kk.length) ? null : wk;
          return ek.set(ik, nk), nk
        }
      }());
      return {
        surface: ek.surface,
        topDown: jk(ek.columnTops)
      }
    }
    async function Ck(kk, ek) {
      var ik;
      if (kk.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Dk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength).getUint32(0, !0);
      if (Dk > Uk) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const fk = (Dk >= nk ? xk : Kk).decode(Sk.hU.from(kk.subarray(4)), 0).value;
      if (!fk) throw new Error("The file isn't a schematic.");
      if (0 === fk.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const rk = null !== (ik = fk.pasteOffset) && void 0 !== ik ? ik : {
          x: 0,
          y: 0,
          z: 0
        },
        Pk = [rk.x, rk.y, rk.z].map((kk => Math.floor(kk / yk))),
        mk = fk.chunkData.map((kk => ({
          x: kk.x + Pk[0],
          y: kk.y + Pk[1],
          z: kk.z + Pk[2],
          rle: kk.rle
        }))),
        Mk = new Map;
      for (const [Sk, Kk] of mk.entries()) {
        const kk = new Uint16Array(yk ** 3);
        bk.decode(Kk.rle, kk), Mk.set(`${Kk.x},${Kk.y},${Kk.z}`, kk), Sk % lk === lk - 1 && await sk()
      }
      const Hk = (kk, ek, ik) => kk * yk * yk + ek * yk + ik,
        wk = (kk, ek, ik) => {
          var Dk, fk;
          const Sk = Math.floor(kk / yk),
            bk = Math.floor(ek / yk),
            rk = Math.floor(ik / yk);
          return null !== (Dk = null === (fk = Mk.get(`${Sk},${bk},${rk}`)) || void 0 === fk ? void 0 : fk[Hk(kk - Sk * yk, ek - bk * yk, ik - rk * yk)]) && void 0 !== Dk ? Dk : 0
        },
        pk = new Map,
        Lk = [],
        Ck = [];
      for (const [Sk, bk] of mk.entries()) {
        const kk = Mk.get(`${bk.x},${bk.y},${bk.z}`),
          ik = [bk.x * yk, bk.y * yk, bk.z * yk],
          Dk = (ek, Dk, fk) => ek < 0 || Dk < 0 || fk < 0 || ek >= yk || Dk >= yk || fk >= yk ? wk(ik[0] + ek, ik[1] + Dk, ik[2] + fk) : kk[Hk(ek, Dk, fk)],
          fk = `${bk.x},${bk.z}`;
        let rk = pk.get(fk);
        void 0 === rk && (rk = {
          chunkX: bk.x,
          chunkZ: bk.z,
          heights: new Int32Array(yk * yk).fill(Yk),
          colours: new Uint8Array(yk * yk * 3)
        }, pk.set(fk, rk));
        for (let Sk = 0; Sk < yk; Sk++)
          for (let fk = 0; fk < yk; fk++)
            for (let bk = 0; bk < yk; bk++) {
              const Pk = kk[Hk(Sk, fk, bk)];
              if (0 === Pk) continue;
              const mk = ik[0] + Sk,
                Mk = ik[1] + fk,
                Kk = ik[2] + bk,
                xk = ek(Pk);
              if (null === xk) continue;
              const nk = bk * yk + Sk;
              Mk > rk.heights[nk] && (rk.heights[nk] = Mk, rk.colours.set(xk, 3 * nk));
              !Ak(Pk) && (Ak(Dk(Sk + 1, fk, bk)) || Ak(Dk(Sk - 1, fk, bk)) || Ak(Dk(Sk, fk + 1, bk)) || Ak(Dk(Sk, fk - 1, bk)) || Ak(Dk(Sk, fk, bk + 1)) || Ak(Dk(Sk, fk, bk - 1))) && (Lk.push(mk, Mk, Kk), Ck.push(xk[0], xk[1], xk[2]))
            }
        Sk % lk === lk - 1 && await sk()
      }
      if (0 === Lk.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: fk.name,
        surface: {
          positions: Int32Array.from(Lk),
          colours: Uint8Array.from(Ck),
          count: Lk.length / 3
        },
        columnTops: [...pk.values()]
      }
    }

    function Ak(kk) {
      if (0 === kk) return !0;
      const ek = Pk.g[kk];
      return void 0 === ek || ek.qn || ek.transTex || !1 === ek.solid
    }

    function jk(kk) {
      let ek = 1 / 0,
        ik = -1 / 0,
        Dk = 1 / 0,
        fk = -1 / 0;
      for (const {
          chunkX: Uk,
          chunkZ: Hk,
          heights: wk
        }
        of kk) wk.forEach(((kk, Sk) => {
        if (kk === Yk) return;
        const bk = Uk * yk + Sk % yk,
          rk = Hk * yk + Math.floor(Sk / yk);
        ek = Math.min(ek, bk), ik = Math.max(ik, bk), Dk = Math.min(Dk, rk), fk = Math.max(fk, rk)
      }));
      const Sk = ik - ek + 1,
        bk = fk - Dk + 1,
        rk = Math.max(1, Math.ceil(Sk / pk), Math.ceil(bk / pk)),
        Pk = Math.ceil(Sk / rk),
        mk = Math.ceil(bk / rk),
        Mk = document.createElement("canvas");
      Mk.width = Pk, Mk.height = mk;
      const Kk = Mk.getContext("2d");
      if (!Kk) throw new Error("Couldn't draw the schematic from above.");
      const xk = Kk.createImageData(Pk, mk),
        nk = new Int32Array(Pk * mk).fill(Yk);
      for (const {
          chunkX: Uk,
          chunkZ: Hk,
          heights: wk,
          colours: lk
        }
        of kk) wk.forEach(((kk, ek) => {
        const fk = Uk * yk + ek % yk,
          Sk = Hk * yk + Math.floor(ek / yk),
          bk = Math.floor((Sk - Dk) / rk) * Pk + Math.floor((ik - fk) / rk);
        kk === Yk || kk <= nk[bk] || (nk[bk] = kk, xk.data.set(lk.subarray(3 * ek, 3 * ek + 3), 4 * bk), xk.data[4 * bk + 3] = 255)
      }));
      return Kk.putImageData(xk, 0, 0), {
        maxX: ik,
        minZ: Dk,
        width: Pk * rk,
        depth: mk * rk,
        canvas: Mk
      }
    }

    function sk() {
      return new Promise((kk => {
        setTimeout(kk, 0)
      }))
    }
  },
  9105: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      e: () => Sk
    });
    var Dk = ik(9063);
    const fk = "Air",
      Sk = Object.freeze(new Dk.d(fk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);