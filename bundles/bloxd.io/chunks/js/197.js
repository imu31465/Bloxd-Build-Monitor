export const id = 197;
export const ids = [197];
export const modules = {
  37413: (kk, Fk, Bk) => {
    var Rk = Bk(37421);

    function tk(kk) {
      for (var Fk, Bk, tk = 0, ak = kk.length, Xk = 0; Xk < kk.length;) {
        for (Fk = kk[Xk], Bk = 0; Xk < ak && kk[Xk] === Fk;) ++Xk, ++Bk;
        tk += Rk.log2(Bk) / 7 | 0, tk += Rk.log2(Fk >>> 0) / 7 | 0, tk += 2
      }
      return tk
    }
    Fk.size = tk, Fk.encode = function(kk, Fk) {
      Fk || (Fk = new Uint8Array(tk(kk)));
      for (var Bk, Rk, ak = 0, Xk = Fk.length, bk = 0; bk < kk.length;) {
        for (Bk = kk[bk], Rk = 0; bk < kk.length && kk[bk] === Bk;) ++bk, ++Rk;
        for (; ak < Xk && Rk >= 128;) Fk[ak++] = 128 + (127 & Rk), Rk >>>= 7;
        if (ak >= Xk) throw new Error("RLE buffer overflow");
        for (Fk[ak++] = Rk, Bk >>>= 0; ak < Xk && Bk >= 128;) Fk[ak++] = 128 + (127 & Bk), Bk >>>= 7;
        if (ak >= Xk) throw new Error("RLE buffer overflow");
        Fk[ak++] = Bk
      }
      return Fk
    }, Fk.decode = function(kk, Fk) {
      for (var Bk, Rk, tk, ak, Xk = Fk.length, bk = kk.length, wk = 0, dk = 0; dk < bk;) {
        for (Bk = 0, Rk = 0; dk < bk && kk[dk] >= 128;) Bk += (127 & kk[dk++]) << Rk, Rk += 7;
        if (Bk += kk[dk++] << Rk, dk >= bk) throw new Error("RLE buffer underrun");
        if (wk + Bk > Xk) throw new Error("Chunk buffer overflow");
        for (tk = 0, Rk = 0; dk < bk && kk[dk] >= 128;) tk += (127 & kk[dk++]) << Rk, Rk += 7;
        if (dk >= bk) throw new Error("RLE buffer underrun");
        for (tk += kk[dk++] << Rk, ak = 0; ak < Bk; ++ak) Fk[wk++] = tk
      }
      return Fk
    }
  },
  37421: (kk, Fk) => {
    function Bk(kk) {
      var Fk = 32;
      return (kk &= -kk) && Fk--, 65535 & kk && (Fk -= 16), 16711935 & kk && (Fk -= 8), 252645135 & kk && (Fk -= 4), 858993459 & kk && (Fk -= 2), 1431655765 & kk && (Fk -= 1), Fk
    }
    Fk.INT_BITS = 32, Fk.INT_MAX = 2147483647, Fk.INT_MIN = -1 << 31, Fk.sign = function(kk) {
      return (kk > 0) - (kk < 0)
    }, Fk.abs = function(kk) {
      var Fk = kk >> 31;
      return (kk ^ Fk) - Fk
    }, Fk.min = function(kk, Fk) {
      return Fk ^ (kk ^ Fk) & -(kk < Fk)
    }, Fk.max = function(kk, Fk) {
      return kk ^ (kk ^ Fk) & -(kk < Fk)
    }, Fk.isPow2 = function(kk) {
      return !(kk & kk - 1) && !!kk
    }, Fk.log2 = function(kk) {
      var Fk, Bk;
      return Fk = (kk > 65535) << 4, Fk |= Bk = ((kk >>>= Fk) > 255) << 3, Fk |= Bk = ((kk >>>= Bk) > 15) << 2, (Fk |= Bk = ((kk >>>= Bk) > 3) << 1) | (kk >>>= Bk) >> 1
    }, Fk.log10 = function(kk) {
      return kk >= 1e9 ? 9 : kk >= 1e8 ? 8 : kk >= 1e7 ? 7 : kk >= 1e6 ? 6 : kk >= 1e5 ? 5 : kk >= 1e4 ? 4 : kk >= 1e3 ? 3 : kk >= 100 ? 2 : kk >= 10 ? 1 : 0
    }, Fk.popCount = function(kk) {
      return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
    }, Fk.countTrailingZeros = Bk, Fk.nextPow2 = function(kk) {
      return kk += 0 === kk, --kk, kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) + 1
    }, Fk.prevPow2 = function(kk) {
      return kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) - (kk >>> 1)
    }, Fk.parity = function(kk) {
      return kk ^= kk >>> 16, kk ^= kk >>> 8, kk ^= kk >>> 4, 27030 >>> (kk &= 15) & 1
    };
    var Rk = new Array(256);
    ! function(kk) {
      for (var Fk = 0; Fk < 256; ++Fk) {
        var Bk = Fk,
          Rk = Fk,
          tk = 7;
        for (Bk >>>= 1; Bk; Bk >>>= 1) Rk <<= 1, Rk |= 1 & Bk, --tk;
        kk[Fk] = Rk << tk & 255
      }
    }(Rk), Fk.reverse = function(kk) {
      return Rk[255 & kk] << 24 | Rk[kk >>> 8 & 255] << 16 | Rk[kk >>> 16 & 255] << 8 | Rk[kk >>> 24 & 255]
    }, Fk.interleave2 = function(kk, Fk) {
      return (kk = 1431655765 & ((kk = 858993459 & ((kk = 252645135 & ((kk = 16711935 & ((kk &= 65535) | kk << 8)) | kk << 4)) | kk << 2)) | kk << 1)) | (Fk = 1431655765 & ((Fk = 858993459 & ((Fk = 252645135 & ((Fk = 16711935 & ((Fk &= 65535) | Fk << 8)) | Fk << 4)) | Fk << 2)) | Fk << 1)) << 1
    }, Fk.deinterleave2 = function(kk, Fk) {
      return (kk = 65535 & ((kk = 16711935 & ((kk = 252645135 & ((kk = 858993459 & ((kk = kk >>> Fk & 1431655765) | kk >>> 1)) | kk >>> 2)) | kk >>> 4)) | kk >>> 16)) << 16 >> 16
    }, Fk.interleave3 = function(kk, Fk, Bk) {
      return kk = 1227133513 & ((kk = 3272356035 & ((kk = 251719695 & ((kk = 4278190335 & ((kk &= 1023) | kk << 16)) | kk << 8)) | kk << 4)) | kk << 2), (kk |= (Fk = 1227133513 & ((Fk = 3272356035 & ((Fk = 251719695 & ((Fk = 4278190335 & ((Fk &= 1023) | Fk << 16)) | Fk << 8)) | Fk << 4)) | Fk << 2)) << 1) | (Bk = 1227133513 & ((Bk = 3272356035 & ((Bk = 251719695 & ((Bk = 4278190335 & ((Bk &= 1023) | Bk << 16)) | Bk << 8)) | Bk << 4)) | Bk << 2)) << 2
    }, Fk.deinterleave3 = function(kk, Fk) {
      return (kk = 1023 & ((kk = 4278190335 & ((kk = 251719695 & ((kk = 3272356035 & ((kk = kk >>> Fk & 1227133513) | kk >>> 2)) | kk >>> 4)) | kk >>> 8)) | kk >>> 16)) << 22 >> 22
    }, Fk.nextCombination = function(kk) {
      var Fk = kk | kk - 1;
      return Fk + 1 | (~Fk & -~Fk) - 1 >>> Bk(kk) + 1
    }
  },
  39227: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      emptyColumnHeight: () => ik,
      loadHeatmapSchematic: () => Yk,
      readSchematicBlocks: () => Lk
    });
    var Rk = Bk(3551),
      tk = Bk.n(Rk),
      ak = Bk(3528),
      Xk = Bk(37413),
      bk = Bk(182),
      wk = Bk(9095);
    const dk = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      sk = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: dk
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: dk
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...dk, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      Vk = tk().Type.forSchema({
        type: "record",
        fields: sk
      }),
      Jk = tk().Type.forSchema({
        type: "record",
        fields: [...sk, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...dk, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: dk
          }
        }]
      }),
      Ak = 2,
      ek = 6,
      yk = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      fk = [150, 150, 150],
      mk = 16,
      Wk = 4096,
      vk = bk.h.Ze,
      ik = -2147483648;
    async function Yk(kk) {
      const Fk = await Lk(new Uint8Array(await kk.arrayBuffer()), await async function() {
        const {
          averageColors: kk
        } = await Bk.e(201).then((() => Bk(34024))), Fk = new Map;
        return Bk => {
          var Rk, tk, ak, Xk, bk;
          const dk = Fk.get(Bk);
          if (void 0 !== dk) return dk;
          const sk = null !== (Rk = null === (tk = wk.j[Bk]) || void 0 === tk ? void 0 : tk.name) && void 0 !== Rk ? Rk : "",
            Vk = null !== (ak = kk[sk]) && void 0 !== ak ? ak : kk[sk.split("|")[0]],
            Jk = yk[sk.split("|")[0]],
            Ak = null !== (Xk = null !== (bk = null === Vk || void 0 === Vk ? void 0 : Vk[0]) && void 0 !== bk ? bk : Jk) && void 0 !== Xk ? Xk : 0 === (null === Vk || void 0 === Vk ? void 0 : Vk.length) ? null : fk;
          return Fk.set(Bk, Ak), Ak
        }
      }());
      return {
        surface: Fk.surface,
        topDown: Ek(Fk.columnTops)
      }
    }
    async function Lk(kk, Fk) {
      var Bk;
      if (kk.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Rk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength).getUint32(0, !0);
      if (Rk > ek) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const tk = (Rk >= Ak ? Jk : Vk).decode(ak.Ge.from(kk.subarray(4)), 0).value;
      if (!tk) throw new Error("The file isn't a schematic.");
      if (0 === tk.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const bk = null !== (Bk = tk.pasteOffset) && void 0 !== Bk ? Bk : {
          x: 0,
          y: 0,
          z: 0
        },
        wk = [bk.x, bk.y, bk.z].map((kk => Math.floor(kk / vk))),
        dk = tk.chunkData.map((kk => ({
          x: kk.x + wk[0],
          y: kk.y + wk[1],
          z: kk.z + wk[2],
          rle: kk.rle
        }))),
        sk = new Map;
      for (const [ak, Vk] of dk.entries()) {
        const kk = new Uint16Array(vk ** 3);
        Xk.decode(Vk.rle, kk), sk.set(`${Vk.x},${Vk.y},${Vk.z}`, kk), ak % mk === mk - 1 && await Sk()
      }
      const yk = (kk, Fk, Bk) => kk * vk * vk + Fk * vk + Bk,
        fk = (kk, Fk, Bk) => {
          var Rk, tk;
          const ak = Math.floor(kk / vk),
            Xk = Math.floor(Fk / vk),
            bk = Math.floor(Bk / vk);
          return null !== (Rk = null === (tk = sk.get(`${ak},${Xk},${bk}`)) || void 0 === tk ? void 0 : tk[yk(kk - ak * vk, Fk - Xk * vk, Bk - bk * vk)]) && void 0 !== Rk ? Rk : 0
        },
        Wk = new Map,
        Yk = [],
        Lk = [];
      for (const [ak, Xk] of dk.entries()) {
        const kk = sk.get(`${Xk.x},${Xk.y},${Xk.z}`),
          Bk = [Xk.x * vk, Xk.y * vk, Xk.z * vk],
          Rk = (Fk, Rk, tk) => Fk < 0 || Rk < 0 || tk < 0 || Fk >= vk || Rk >= vk || tk >= vk ? fk(Bk[0] + Fk, Bk[1] + Rk, Bk[2] + tk) : kk[yk(Fk, Rk, tk)],
          tk = `${Xk.x},${Xk.z}`;
        let bk = Wk.get(tk);
        void 0 === bk && (bk = {
          chunkX: Xk.x,
          chunkZ: Xk.z,
          heights: new Int32Array(vk * vk).fill(ik),
          colours: new Uint8Array(vk * vk * 3)
        }, Wk.set(tk, bk));
        for (let ak = 0; ak < vk; ak++)
          for (let tk = 0; tk < vk; tk++)
            for (let Xk = 0; Xk < vk; Xk++) {
              const wk = kk[yk(ak, tk, Xk)];
              if (0 === wk) continue;
              const dk = Bk[0] + ak,
                sk = Bk[1] + tk,
                Vk = Bk[2] + Xk,
                Jk = Fk(wk);
              if (null === Jk) continue;
              const Ak = Xk * vk + ak;
              sk > bk.heights[Ak] && (bk.heights[Ak] = sk, bk.colours.set(Jk, 3 * Ak));
              !Ok(wk) && (Ok(Rk(ak + 1, tk, Xk)) || Ok(Rk(ak - 1, tk, Xk)) || Ok(Rk(ak, tk + 1, Xk)) || Ok(Rk(ak, tk - 1, Xk)) || Ok(Rk(ak, tk, Xk + 1)) || Ok(Rk(ak, tk, Xk - 1))) && (Yk.push(dk, sk, Vk), Lk.push(Jk[0], Jk[1], Jk[2]))
            }
        ak % mk === mk - 1 && await Sk()
      }
      if (0 === Yk.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: tk.name,
        surface: {
          positions: Int32Array.from(Yk),
          colours: Uint8Array.from(Lk),
          count: Yk.length / 3
        },
        columnTops: [...Wk.values()]
      }
    }

    function Ok(kk) {
      if (0 === kk) return !0;
      const Fk = wk.j[kk];
      return void 0 === Fk || Fk.EA || Fk.transTex || !1 === Fk.solid
    }

    function Ek(kk) {
      let Fk = 1 / 0,
        Bk = -1 / 0,
        Rk = 1 / 0,
        tk = -1 / 0;
      for (const {
          chunkX: ek,
          chunkZ: yk,
          heights: fk
        }
        of kk) fk.forEach(((kk, ak) => {
        if (kk === ik) return;
        const Xk = ek * vk + ak % vk,
          bk = yk * vk + Math.floor(ak / vk);
        Fk = Math.min(Fk, Xk), Bk = Math.max(Bk, Xk), Rk = Math.min(Rk, bk), tk = Math.max(tk, bk)
      }));
      const ak = Bk - Fk + 1,
        Xk = tk - Rk + 1,
        bk = Math.max(1, Math.ceil(ak / Wk), Math.ceil(Xk / Wk)),
        wk = Math.ceil(ak / bk),
        dk = Math.ceil(Xk / bk),
        sk = document.createElement("canvas");
      sk.width = wk, sk.height = dk;
      const Vk = sk.getContext("2d");
      if (!Vk) throw new Error("Couldn't draw the schematic from above.");
      const Jk = Vk.createImageData(wk, dk),
        Ak = new Int32Array(wk * dk).fill(ik);
      for (const {
          chunkX: ek,
          chunkZ: yk,
          heights: fk,
          colours: mk
        }
        of kk) fk.forEach(((kk, Fk) => {
        const tk = ek * vk + Fk % vk,
          ak = yk * vk + Math.floor(Fk / vk),
          Xk = Math.floor((ak - Rk) / bk) * wk + Math.floor((Bk - tk) / bk);
        kk === ik || kk <= Ak[Xk] || (Ak[Xk] = kk, Jk.data.set(mk.subarray(3 * Fk, 3 * Fk + 3), 4 * Xk), Jk.data[4 * Xk + 3] = 255)
      }));
      return Vk.putImageData(Jk, 0, 0), {
        maxX: Bk,
        minZ: Rk,
        width: wk * bk,
        depth: dk * bk,
        canvas: sk
      }
    }

    function Sk() {
      return new Promise((kk => {
        setTimeout(kk, 0)
      }))
    }
  },
  9169: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      d: () => ak
    });
    var Rk = Bk(9127);
    const tk = "Air",
      ak = Object.freeze(new Rk.g(tk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);