export const id = 187;
export const ids = [187];
export const modules = {
  37749: (kk, Fk, Ik) => {
    var Xk = Ik(37758);

    function Tk(kk) {
      for (var Fk, Ik, Tk = 0, ik = kk.length, yk = 0; yk < kk.length;) {
        for (Fk = kk[yk], Ik = 0; yk < ik && kk[yk] === Fk;) ++yk, ++Ik;
        Tk += Xk.log2(Ik) / 7 | 0, Tk += Xk.log2(Fk >>> 0) / 7 | 0, Tk += 2
      }
      return Tk
    }
    Fk.size = Tk, Fk.encode = function(kk, Fk) {
      Fk || (Fk = new Uint8Array(Tk(kk)));
      for (var Ik, Xk, ik = 0, yk = Fk.length, lk = 0; lk < kk.length;) {
        for (Ik = kk[lk], Xk = 0; lk < kk.length && kk[lk] === Ik;) ++lk, ++Xk;
        for (; ik < yk && Xk >= 128;) Fk[ik++] = 128 + (127 & Xk), Xk >>>= 7;
        if (ik >= yk) throw new Error("RLE buffer overflow");
        for (Fk[ik++] = Xk, Ik >>>= 0; ik < yk && Ik >= 128;) Fk[ik++] = 128 + (127 & Ik), Ik >>>= 7;
        if (ik >= yk) throw new Error("RLE buffer overflow");
        Fk[ik++] = Ik
      }
      return Fk
    }, Fk.decode = function(kk, Fk) {
      for (var Ik, Xk, Tk, ik, yk = Fk.length, lk = kk.length, ak = 0, qk = 0; qk < lk;) {
        for (Ik = 0, Xk = 0; qk < lk && kk[qk] >= 128;) Ik += (127 & kk[qk++]) << Xk, Xk += 7;
        if (Ik += kk[qk++] << Xk, qk >= lk) throw new Error("RLE buffer underrun");
        if (ak + Ik > yk) throw new Error("Chunk buffer overflow");
        for (Tk = 0, Xk = 0; qk < lk && kk[qk] >= 128;) Tk += (127 & kk[qk++]) << Xk, Xk += 7;
        if (qk >= lk) throw new Error("RLE buffer underrun");
        for (Tk += kk[qk++] << Xk, ik = 0; ik < Ik; ++ik) Fk[ak++] = Tk
      }
      return Fk
    }
  },
  37758: (kk, Fk) => {
    function Ik(kk) {
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
      var Fk, Ik;
      return Fk = (kk > 65535) << 4, Fk |= Ik = ((kk >>>= Fk) > 255) << 3, Fk |= Ik = ((kk >>>= Ik) > 15) << 2, (Fk |= Ik = ((kk >>>= Ik) > 3) << 1) | (kk >>>= Ik) >> 1
    }, Fk.log10 = function(kk) {
      return kk >= 1e9 ? 9 : kk >= 1e8 ? 8 : kk >= 1e7 ? 7 : kk >= 1e6 ? 6 : kk >= 1e5 ? 5 : kk >= 1e4 ? 4 : kk >= 1e3 ? 3 : kk >= 100 ? 2 : kk >= 10 ? 1 : 0
    }, Fk.popCount = function(kk) {
      return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
    }, Fk.countTrailingZeros = Ik, Fk.nextPow2 = function(kk) {
      return kk += 0 === kk, --kk, kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) + 1
    }, Fk.prevPow2 = function(kk) {
      return kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) - (kk >>> 1)
    }, Fk.parity = function(kk) {
      return kk ^= kk >>> 16, kk ^= kk >>> 8, kk ^= kk >>> 4, 27030 >>> (kk &= 15) & 1
    };
    var Xk = new Array(256);
    ! function(kk) {
      for (var Fk = 0; Fk < 256; ++Fk) {
        var Ik = Fk,
          Xk = Fk,
          Tk = 7;
        for (Ik >>>= 1; Ik; Ik >>>= 1) Xk <<= 1, Xk |= 1 & Ik, --Tk;
        kk[Fk] = Xk << Tk & 255
      }
    }(Xk), Fk.reverse = function(kk) {
      return Xk[255 & kk] << 24 | Xk[kk >>> 8 & 255] << 16 | Xk[kk >>> 16 & 255] << 8 | Xk[kk >>> 24 & 255]
    }, Fk.interleave2 = function(kk, Fk) {
      return (kk = 1431655765 & ((kk = 858993459 & ((kk = 252645135 & ((kk = 16711935 & ((kk &= 65535) | kk << 8)) | kk << 4)) | kk << 2)) | kk << 1)) | (Fk = 1431655765 & ((Fk = 858993459 & ((Fk = 252645135 & ((Fk = 16711935 & ((Fk &= 65535) | Fk << 8)) | Fk << 4)) | Fk << 2)) | Fk << 1)) << 1
    }, Fk.deinterleave2 = function(kk, Fk) {
      return (kk = 65535 & ((kk = 16711935 & ((kk = 252645135 & ((kk = 858993459 & ((kk = kk >>> Fk & 1431655765) | kk >>> 1)) | kk >>> 2)) | kk >>> 4)) | kk >>> 16)) << 16 >> 16
    }, Fk.interleave3 = function(kk, Fk, Ik) {
      return kk = 1227133513 & ((kk = 3272356035 & ((kk = 251719695 & ((kk = 4278190335 & ((kk &= 1023) | kk << 16)) | kk << 8)) | kk << 4)) | kk << 2), (kk |= (Fk = 1227133513 & ((Fk = 3272356035 & ((Fk = 251719695 & ((Fk = 4278190335 & ((Fk &= 1023) | Fk << 16)) | Fk << 8)) | Fk << 4)) | Fk << 2)) << 1) | (Ik = 1227133513 & ((Ik = 3272356035 & ((Ik = 251719695 & ((Ik = 4278190335 & ((Ik &= 1023) | Ik << 16)) | Ik << 8)) | Ik << 4)) | Ik << 2)) << 2
    }, Fk.deinterleave3 = function(kk, Fk) {
      return (kk = 1023 & ((kk = 4278190335 & ((kk = 251719695 & ((kk = 3272356035 & ((kk = kk >>> Fk & 1227133513) | kk >>> 2)) | kk >>> 4)) | kk >>> 8)) | kk >>> 16)) << 22 >> 22
    }, Fk.nextCombination = function(kk) {
      var Fk = kk | kk - 1;
      return Fk + 1 | (~Fk & -~Fk) - 1 >>> Ik(kk) + 1
    }
  },
  39794: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      emptyColumnHeight: () => Kk,
      loadHeatmapSchematic: () => Qk,
      readSchematicBlocks: () => sk
    });
    var Xk = Ik(3709),
      Tk = Ik.n(Xk),
      ik = Ik(3682),
      yk = Ik(37749),
      lk = Ik(187),
      ak = Ik(9183);
    const qk = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      Lk = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: qk
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: qk
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...qk, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      tk = Tk().Type.forSchema({
        type: "record",
        fields: Lk
      }),
      Zk = Tk().Type.forSchema({
        type: "record",
        fields: [...Lk, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...qk, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: qk
          }
        }]
      }),
      jk = 2,
      ek = 6,
      wk = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      Hk = [150, 150, 150],
      Jk = 16,
      xk = 4096,
      Pk = lk.f.se,
      Kk = -2147483648;
    async function Qk(kk) {
      const Fk = await sk(new Uint8Array(await kk.arrayBuffer()), await async function() {
        const {
          averageColors: kk
        } = await Ik.e(204).then((() => Ik(34274))), Fk = new Map;
        return Ik => {
          var Xk, Tk, ik, yk, lk;
          const qk = Fk.get(Ik);
          if (void 0 !== qk) return qk;
          const Lk = null !== (Xk = null === (Tk = ak.g[Ik]) || void 0 === Tk ? void 0 : Tk.name) && void 0 !== Xk ? Xk : "",
            tk = null !== (ik = kk[Lk]) && void 0 !== ik ? ik : kk[Lk.split("|")[0]],
            Zk = wk[Lk.split("|")[0]],
            jk = null !== (yk = null !== (lk = null === tk || void 0 === tk ? void 0 : tk[0]) && void 0 !== lk ? lk : Zk) && void 0 !== yk ? yk : 0 === (null === tk || void 0 === tk ? void 0 : tk.length) ? null : Hk;
          return Fk.set(Ik, jk), jk
        }
      }());
      return {
        surface: Fk.surface,
        topDown: zk(Fk.columnTops)
      }
    }
    async function sk(kk, Fk) {
      var Ik;
      if (kk.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Xk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength).getUint32(0, !0);
      if (Xk > ek) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Tk = (Xk >= jk ? Zk : tk).decode(ik.je.from(kk.subarray(4)), 0).value;
      if (!Tk) throw new Error("The file isn't a schematic.");
      if (0 === Tk.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const lk = null !== (Ik = Tk.pasteOffset) && void 0 !== Ik ? Ik : {
          x: 0,
          y: 0,
          z: 0
        },
        ak = [lk.x, lk.y, lk.z].map((kk => Math.floor(kk / Pk))),
        qk = Tk.chunkData.map((kk => ({
          x: kk.x + ak[0],
          y: kk.y + ak[1],
          z: kk.z + ak[2],
          rle: kk.rle
        }))),
        Lk = new Map;
      for (const [ik, tk] of qk.entries()) {
        const kk = new Uint16Array(Pk ** 3);
        yk.decode(tk.rle, kk), Lk.set(`${tk.x},${tk.y},${tk.z}`, kk), ik % Jk === Jk - 1 && await Sk()
      }
      const wk = (kk, Fk, Ik) => kk * Pk * Pk + Fk * Pk + Ik,
        Hk = (kk, Fk, Ik) => {
          var Xk, Tk;
          const ik = Math.floor(kk / Pk),
            yk = Math.floor(Fk / Pk),
            lk = Math.floor(Ik / Pk);
          return null !== (Xk = null === (Tk = Lk.get(`${ik},${yk},${lk}`)) || void 0 === Tk ? void 0 : Tk[wk(kk - ik * Pk, Fk - yk * Pk, Ik - lk * Pk)]) && void 0 !== Xk ? Xk : 0
        },
        xk = new Map,
        Qk = [],
        sk = [];
      for (const [ik, yk] of qk.entries()) {
        const kk = Lk.get(`${yk.x},${yk.y},${yk.z}`),
          Ik = [yk.x * Pk, yk.y * Pk, yk.z * Pk],
          Xk = (Fk, Xk, Tk) => Fk < 0 || Xk < 0 || Tk < 0 || Fk >= Pk || Xk >= Pk || Tk >= Pk ? Hk(Ik[0] + Fk, Ik[1] + Xk, Ik[2] + Tk) : kk[wk(Fk, Xk, Tk)],
          Tk = `${yk.x},${yk.z}`;
        let lk = xk.get(Tk);
        void 0 === lk && (lk = {
          chunkX: yk.x,
          chunkZ: yk.z,
          heights: new Int32Array(Pk * Pk).fill(Kk),
          colours: new Uint8Array(Pk * Pk * 3)
        }, xk.set(Tk, lk));
        for (let ik = 0; ik < Pk; ik++)
          for (let Tk = 0; Tk < Pk; Tk++)
            for (let yk = 0; yk < Pk; yk++) {
              const ak = kk[wk(ik, Tk, yk)];
              if (0 === ak) continue;
              const qk = Ik[0] + ik,
                Lk = Ik[1] + Tk,
                tk = Ik[2] + yk,
                Zk = Fk(ak);
              if (null === Zk) continue;
              const jk = yk * Pk + ik;
              Lk > lk.heights[jk] && (lk.heights[jk] = Lk, lk.colours.set(Zk, 3 * jk));
              !Vk(ak) && (Vk(Xk(ik + 1, Tk, yk)) || Vk(Xk(ik - 1, Tk, yk)) || Vk(Xk(ik, Tk + 1, yk)) || Vk(Xk(ik, Tk - 1, yk)) || Vk(Xk(ik, Tk, yk + 1)) || Vk(Xk(ik, Tk, yk - 1))) && (Qk.push(qk, Lk, tk), sk.push(Zk[0], Zk[1], Zk[2]))
            }
        ik % Jk === Jk - 1 && await Sk()
      }
      if (0 === Qk.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Tk.name,
        surface: {
          positions: Int32Array.from(Qk),
          colours: Uint8Array.from(sk),
          count: Qk.length / 3
        },
        columnTops: [...xk.values()]
      }
    }

    function Vk(kk) {
      if (0 === kk) return !0;
      const Fk = ak.g[kk];
      return void 0 === Fk || Fk.qj || Fk.transTex || !1 === Fk.solid
    }

    function zk(kk) {
      let Fk = 1 / 0,
        Ik = -1 / 0,
        Xk = 1 / 0,
        Tk = -1 / 0;
      for (const {
          chunkX: ek,
          chunkZ: wk,
          heights: Hk
        }
        of kk) Hk.forEach(((kk, ik) => {
        if (kk === Kk) return;
        const yk = ek * Pk + ik % Pk,
          lk = wk * Pk + Math.floor(ik / Pk);
        Fk = Math.min(Fk, yk), Ik = Math.max(Ik, yk), Xk = Math.min(Xk, lk), Tk = Math.max(Tk, lk)
      }));
      const ik = Ik - Fk + 1,
        yk = Tk - Xk + 1,
        lk = Math.max(1, Math.ceil(ik / xk), Math.ceil(yk / xk)),
        ak = Math.ceil(ik / lk),
        qk = Math.ceil(yk / lk),
        Lk = document.createElement("canvas");
      Lk.width = ak, Lk.height = qk;
      const tk = Lk.getContext("2d");
      if (!tk) throw new Error("Couldn't draw the schematic from above.");
      const Zk = tk.createImageData(ak, qk),
        jk = new Int32Array(ak * qk).fill(Kk);
      for (const {
          chunkX: ek,
          chunkZ: wk,
          heights: Hk,
          colours: Jk
        }
        of kk) Hk.forEach(((kk, Fk) => {
        const Tk = ek * Pk + Fk % Pk,
          ik = wk * Pk + Math.floor(Fk / Pk),
          yk = Math.floor((ik - Xk) / lk) * ak + Math.floor((Ik - Tk) / lk);
        kk === Kk || kk <= jk[yk] || (jk[yk] = kk, Zk.data.set(Jk.subarray(3 * Fk, 3 * Fk + 3), 4 * yk), Zk.data[4 * yk + 3] = 255)
      }));
      return tk.putImageData(Zk, 0, 0), {
        maxX: Ik,
        minZ: Xk,
        width: ak * lk,
        depth: qk * lk,
        canvas: Lk
      }
    }

    function Sk() {
      return new Promise((kk => {
        setTimeout(kk, 0)
      }))
    }
  },
  9278: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      g: () => ik
    });
    var Xk = Ik(9237);
    const Tk = "Air",
      ik = Object.freeze(new Xk.g(Tk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);