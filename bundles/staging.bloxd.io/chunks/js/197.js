export const id = 197;
export const ids = [197];
export const modules = {
  37335: (bb, cb, sb) => {
    var kb = sb(37338);

    function Wb(bb) {
      for (var cb, sb, Wb = 0, ab = bb.length, Tb = 0; Tb < bb.length;) {
        for (cb = bb[Tb], sb = 0; Tb < ab && bb[Tb] === cb;) ++Tb, ++sb;
        Wb += kb.log2(sb) / 7 | 0, Wb += kb.log2(cb >>> 0) / 7 | 0, Wb += 2
      }
      return Wb
    }
    cb.size = Wb, cb.encode = function(bb, cb) {
      cb || (cb = new Uint8Array(Wb(bb)));
      for (var sb, kb, ab = 0, Tb = cb.length, Ub = 0; Ub < bb.length;) {
        for (sb = bb[Ub], kb = 0; Ub < bb.length && bb[Ub] === sb;) ++Ub, ++kb;
        for (; ab < Tb && kb >= 128;) cb[ab++] = 128 + (127 & kb), kb >>>= 7;
        if (ab >= Tb) throw new Error("RLE buffer overflow");
        for (cb[ab++] = kb, sb >>>= 0; ab < Tb && sb >= 128;) cb[ab++] = 128 + (127 & sb), sb >>>= 7;
        if (ab >= Tb) throw new Error("RLE buffer overflow");
        cb[ab++] = sb
      }
      return cb
    }, cb.decode = function(bb, cb) {
      for (var sb, kb, Wb, ab, Tb = cb.length, Ub = bb.length, Ib = 0, Hb = 0; Hb < Ub;) {
        for (sb = 0, kb = 0; Hb < Ub && bb[Hb] >= 128;) sb += (127 & bb[Hb++]) << kb, kb += 7;
        if (sb += bb[Hb++] << kb, Hb >= Ub) throw new Error("RLE buffer underrun");
        if (Ib + sb > Tb) throw new Error("Chunk buffer overflow");
        for (Wb = 0, kb = 0; Hb < Ub && bb[Hb] >= 128;) Wb += (127 & bb[Hb++]) << kb, kb += 7;
        if (Hb >= Ub) throw new Error("RLE buffer underrun");
        for (Wb += bb[Hb++] << kb, ab = 0; ab < sb; ++ab) cb[Ib++] = Wb
      }
      return cb
    }
  },
  37338: (bb, cb) => {
    function sb(bb) {
      var cb = 32;
      return (bb &= -bb) && cb--, 65535 & bb && (cb -= 16), 16711935 & bb && (cb -= 8), 252645135 & bb && (cb -= 4), 858993459 & bb && (cb -= 2), 1431655765 & bb && (cb -= 1), cb
    }
    cb.INT_BITS = 32, cb.INT_MAX = 2147483647, cb.INT_MIN = -1 << 31, cb.sign = function(bb) {
      return (bb > 0) - (bb < 0)
    }, cb.abs = function(bb) {
      var cb = bb >> 31;
      return (bb ^ cb) - cb
    }, cb.min = function(bb, cb) {
      return cb ^ (bb ^ cb) & -(bb < cb)
    }, cb.max = function(bb, cb) {
      return bb ^ (bb ^ cb) & -(bb < cb)
    }, cb.isPow2 = function(bb) {
      return !(bb & bb - 1) && !!bb
    }, cb.log2 = function(bb) {
      var cb, sb;
      return cb = (bb > 65535) << 4, cb |= sb = ((bb >>>= cb) > 255) << 3, cb |= sb = ((bb >>>= sb) > 15) << 2, (cb |= sb = ((bb >>>= sb) > 3) << 1) | (bb >>>= sb) >> 1
    }, cb.log10 = function(bb) {
      return bb >= 1e9 ? 9 : bb >= 1e8 ? 8 : bb >= 1e7 ? 7 : bb >= 1e6 ? 6 : bb >= 1e5 ? 5 : bb >= 1e4 ? 4 : bb >= 1e3 ? 3 : bb >= 100 ? 2 : bb >= 10 ? 1 : 0
    }, cb.popCount = function(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }, cb.countTrailingZeros = sb, cb.nextPow2 = function(bb) {
      return bb += 0 === bb, --bb, bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) + 1
    }, cb.prevPow2 = function(bb) {
      return bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) - (bb >>> 1)
    }, cb.parity = function(bb) {
      return bb ^= bb >>> 16, bb ^= bb >>> 8, bb ^= bb >>> 4, 27030 >>> (bb &= 15) & 1
    };
    var kb = new Array(256);
    ! function(bb) {
      for (var cb = 0; cb < 256; ++cb) {
        var sb = cb,
          kb = cb,
          Wb = 7;
        for (sb >>>= 1; sb; sb >>>= 1) kb <<= 1, kb |= 1 & sb, --Wb;
        bb[cb] = kb << Wb & 255
      }
    }(kb), cb.reverse = function(bb) {
      return kb[255 & bb] << 24 | kb[bb >>> 8 & 255] << 16 | kb[bb >>> 16 & 255] << 8 | kb[bb >>> 24 & 255]
    }, cb.interleave2 = function(bb, cb) {
      return (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) | (cb = 1431655765 & ((cb = 858993459 & ((cb = 252645135 & ((cb = 16711935 & ((cb &= 65535) | cb << 8)) | cb << 4)) | cb << 2)) | cb << 1)) << 1
    }, cb.deinterleave2 = function(bb, cb) {
      return (bb = 65535 & ((bb = 16711935 & ((bb = 252645135 & ((bb = 858993459 & ((bb = bb >>> cb & 1431655765) | bb >>> 1)) | bb >>> 2)) | bb >>> 4)) | bb >>> 16)) << 16 >> 16
    }, cb.interleave3 = function(bb, cb, sb) {
      return bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2), (bb |= (cb = 1227133513 & ((cb = 3272356035 & ((cb = 251719695 & ((cb = 4278190335 & ((cb &= 1023) | cb << 16)) | cb << 8)) | cb << 4)) | cb << 2)) << 1) | (sb = 1227133513 & ((sb = 3272356035 & ((sb = 251719695 & ((sb = 4278190335 & ((sb &= 1023) | sb << 16)) | sb << 8)) | sb << 4)) | sb << 2)) << 2
    }, cb.deinterleave3 = function(bb, cb) {
      return (bb = 1023 & ((bb = 4278190335 & ((bb = 251719695 & ((bb = 3272356035 & ((bb = bb >>> cb & 1227133513) | bb >>> 2)) | bb >>> 4)) | bb >>> 8)) | bb >>> 16)) << 22 >> 22
    }, cb.nextCombination = function(bb) {
      var cb = bb | bb - 1;
      return cb + 1 | (~cb & -~cb) - 1 >>> sb(bb) + 1
    }
  },
  39226: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      emptyColumnHeight: () => Vb,
      loadHeatmapSchematic: () => Lb,
      readSchematicBlocks: () => ub
    });
    var kb = sb(3569),
      Wb = sb.n(kb),
      ab = sb(3543),
      Tb = sb(37335),
      Ub = sb(223),
      Ib = sb(9017);
    const Hb = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      fb = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: Hb
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: Hb
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...Hb, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      Mb = Wb().Type.forSchema({
        type: "record",
        fields: fb
      }),
      Xb = Wb().Type.forSchema({
        type: "record",
        fields: [...fb, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...Hb, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: Hb
          }
        }]
      }),
      nb = 2,
      mb = 6,
      lb = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      Qb = [150, 150, 150],
      eb = 16,
      Cb = 4096,
      Nb = Ub.e.qm,
      Vb = -2147483648;
    async function Lb(bb) {
      const cb = await ub(new Uint8Array(await bb.arrayBuffer()), await async function() {
        const {
          averageColors: bb
        } = await sb.e(201).then((() => sb(33944))), cb = new Map;
        return sb => {
          var kb, Wb, ab, Tb, Ub;
          const Hb = cb.get(sb);
          if (void 0 !== Hb) return Hb;
          const fb = null !== (kb = null === (Wb = Ib.g[sb]) || void 0 === Wb ? void 0 : Wb.name) && void 0 !== kb ? kb : "",
            Mb = null !== (ab = bb[fb]) && void 0 !== ab ? ab : bb[fb.split("|")[0]],
            Xb = lb[fb.split("|")[0]],
            nb = null !== (Tb = null !== (Ub = null === Mb || void 0 === Mb ? void 0 : Mb[0]) && void 0 !== Ub ? Ub : Xb) && void 0 !== Tb ? Tb : 0 === (null === Mb || void 0 === Mb ? void 0 : Mb.length) ? null : Qb;
          return cb.set(sb, nb), nb
        }
      }());
      return {
        surface: cb.surface,
        topDown: hb(cb.columnTops)
      }
    }
    async function ub(bb, cb) {
      var sb;
      if (bb.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const kb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength).getUint32(0, !0);
      if (kb > mb) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Wb = (kb >= nb ? Xb : Mb).decode(ab.Dm.from(bb.subarray(4)), 0).value;
      if (!Wb) throw new Error("The file isn't a schematic.");
      if (0 === Wb.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const Ub = null !== (sb = Wb.pasteOffset) && void 0 !== sb ? sb : {
          x: 0,
          y: 0,
          z: 0
        },
        Ib = [Ub.x, Ub.y, Ub.z].map((bb => Math.floor(bb / Nb))),
        Hb = Wb.chunkData.map((bb => ({
          x: bb.x + Ib[0],
          y: bb.y + Ib[1],
          z: bb.z + Ib[2],
          rle: bb.rle
        }))),
        fb = new Map;
      for (const [ab, Mb] of Hb.entries()) {
        const bb = new Uint16Array(Nb ** 3);
        Tb.decode(Mb.rle, bb), fb.set(`${Mb.x},${Mb.y},${Mb.z}`, bb), ab % eb === eb - 1 && await Jb()
      }
      const lb = (bb, cb, sb) => bb * Nb * Nb + cb * Nb + sb,
        Qb = (bb, cb, sb) => {
          var kb, Wb;
          const ab = Math.floor(bb / Nb),
            Tb = Math.floor(cb / Nb),
            Ub = Math.floor(sb / Nb);
          return null !== (kb = null === (Wb = fb.get(`${ab},${Tb},${Ub}`)) || void 0 === Wb ? void 0 : Wb[lb(bb - ab * Nb, cb - Tb * Nb, sb - Ub * Nb)]) && void 0 !== kb ? kb : 0
        },
        Cb = new Map,
        Lb = [],
        ub = [];
      for (const [ab, Tb] of Hb.entries()) {
        const bb = fb.get(`${Tb.x},${Tb.y},${Tb.z}`),
          sb = [Tb.x * Nb, Tb.y * Nb, Tb.z * Nb],
          kb = (cb, kb, Wb) => cb < 0 || kb < 0 || Wb < 0 || cb >= Nb || kb >= Nb || Wb >= Nb ? Qb(sb[0] + cb, sb[1] + kb, sb[2] + Wb) : bb[lb(cb, kb, Wb)],
          Wb = `${Tb.x},${Tb.z}`;
        let Ub = Cb.get(Wb);
        void 0 === Ub && (Ub = {
          chunkX: Tb.x,
          chunkZ: Tb.z,
          heights: new Int32Array(Nb * Nb).fill(Vb),
          colours: new Uint8Array(Nb * Nb * 3)
        }, Cb.set(Wb, Ub));
        for (let ab = 0; ab < Nb; ab++)
          for (let Wb = 0; Wb < Nb; Wb++)
            for (let Tb = 0; Tb < Nb; Tb++) {
              const Ib = bb[lb(ab, Wb, Tb)];
              if (0 === Ib) continue;
              const Hb = sb[0] + ab,
                fb = sb[1] + Wb,
                Mb = sb[2] + Tb,
                Xb = cb(Ib);
              if (null === Xb) continue;
              const nb = Tb * Nb + ab;
              fb > Ub.heights[nb] && (Ub.heights[nb] = fb, Ub.colours.set(Xb, 3 * nb));
              !Yb(Ib) && (Yb(kb(ab + 1, Wb, Tb)) || Yb(kb(ab - 1, Wb, Tb)) || Yb(kb(ab, Wb + 1, Tb)) || Yb(kb(ab, Wb - 1, Tb)) || Yb(kb(ab, Wb, Tb + 1)) || Yb(kb(ab, Wb, Tb - 1))) && (Lb.push(Hb, fb, Mb), ub.push(Xb[0], Xb[1], Xb[2]))
            }
        ab % eb === eb - 1 && await Jb()
      }
      if (0 === Lb.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Wb.name,
        surface: {
          positions: Int32Array.from(Lb),
          colours: Uint8Array.from(ub),
          count: Lb.length / 3
        },
        columnTops: [...Cb.values()]
      }
    }

    function Yb(bb) {
      if (0 === bb) return !0;
      const cb = Ib.g[bb];
      return void 0 === cb || cb.Nn || cb.transTex || !1 === cb.solid
    }

    function hb(bb) {
      let cb = 1 / 0,
        sb = -1 / 0,
        kb = 1 / 0,
        Wb = -1 / 0;
      for (const {
          chunkX: mb,
          chunkZ: lb,
          heights: Qb
        }
        of bb) Qb.forEach(((bb, ab) => {
        if (bb === Vb) return;
        const Tb = mb * Nb + ab % Nb,
          Ub = lb * Nb + Math.floor(ab / Nb);
        cb = Math.min(cb, Tb), sb = Math.max(sb, Tb), kb = Math.min(kb, Ub), Wb = Math.max(Wb, Ub)
      }));
      const ab = sb - cb + 1,
        Tb = Wb - kb + 1,
        Ub = Math.max(1, Math.ceil(ab / Cb), Math.ceil(Tb / Cb)),
        Ib = Math.ceil(ab / Ub),
        Hb = Math.ceil(Tb / Ub),
        fb = document.createElement("canvas");
      fb.width = Ib, fb.height = Hb;
      const Mb = fb.getContext("2d");
      if (!Mb) throw new Error("Couldn't draw the schematic from above.");
      const Xb = Mb.createImageData(Ib, Hb),
        nb = new Int32Array(Ib * Hb).fill(Vb);
      for (const {
          chunkX: mb,
          chunkZ: lb,
          heights: Qb,
          colours: eb
        }
        of bb) Qb.forEach(((bb, cb) => {
        const Wb = mb * Nb + cb % Nb,
          ab = lb * Nb + Math.floor(cb / Nb),
          Tb = Math.floor((ab - kb) / Ub) * Ib + Math.floor((sb - Wb) / Ub);
        bb === Vb || bb <= nb[Tb] || (nb[Tb] = bb, Xb.data.set(eb.subarray(3 * cb, 3 * cb + 3), 4 * Tb), Xb.data[4 * Tb + 3] = 255)
      }));
      return Mb.putImageData(Xb, 0, 0), {
        maxX: sb,
        minZ: kb,
        width: Ib * Ub,
        depth: Hb * Ub,
        canvas: fb
      }
    }

    function Jb() {
      return new Promise((bb => {
        setTimeout(bb, 0)
      }))
    }
  },
  9103: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      f: () => ab
    });
    var kb = sb(9064);
    const Wb = "Air",
      ab = Object.freeze(new kb.f(Wb, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);